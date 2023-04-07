import React from 'react'
import movieIcon from '../Image/movie-icon.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRef } from 'react';
import { fetchMovies } from './ApiHelper'
import { useState } from 'react';
import { CustomCard } from './CustomCard'
import { Row, Col } from 'react-bootstrap'
import { Alert } from 'react-bootstrap';

export const NavigationBar = ({ addMovieToList }) => {
    const strRef = useRef('');
    const [searchedMovies, setSearchedMovies] = useState({});
    const [error, setError] = useState(false);

    const handelOnSubmit = async (e) => {
        e.preventDefault();
        error && setError(false)
        const str = strRef.current.value;
        const data = await fetchMovies(str);
        if (data.Response === 'True') {
            setSearchedMovies(data)
        }
        else {
            setError(true);
        }
    }

    const func = (mode) => {
        addMovieToList({ ...searchedMovies, mode });
        setSearchedMovies({});
        strRef.current.value = "";
    }

    return (
        <>
            <Navbar bg="dark" expand="lg" >
                <Container fluid className='mt-3'>
                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <div>
                            <img height='50px' className='bg-light me-2' src={movieIcon} alt="Movie Icon" />
                        </div>
                        <div>
                            <h3 className='m-0 text-light'>Movies</h3>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Form className="d-flex" onClick={handelOnSubmit}>
                            <Form.Control ref={strRef} placeholder="Search Movies" className="me-3" aria-label="Search" />
                            <Button type='submit' class="btn btn-secondary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>

            </Navbar >

            <div className='d-flex justify-content-center text-dark '>
                <Container className='shadow p- mb-5 bg-dark rounded '>
                    <Row>
                        <Col>
                            <h3 className='text-center text-white '> Movie
                            </h3>
                        </Col>
                    </Row>
                    <hr className="text-warning" />
                    <div className='d-flex justify-content-center mt-4'>
                        {/* if error exist show alert */}
                        {error && <Alert variant='danger'>Movie not found!</Alert>}

                        {/* else show the card if searchmovie.id exist  */}
                        {searchedMovies.imdbID &&
                            (< CustomCard searchedMovies={searchedMovies} func={func}
                            />)}


                    </div>

                </Container >
            </div >
        </>
    );
}
