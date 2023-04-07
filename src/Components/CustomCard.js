import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const CustomCard = ({ searchedMovies, func }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={searchedMovies?.Poster} />
                <Card.Body>
                    <Card.Title>{searchedMovies?.Title}</Card.Title>
                    <Card.Text>{searchedMovies?.Plot?.slice(0, 100)}...</Card.Text>
                    {!searchedMovies.mode ? (
                        <>
                            <div className='d-flex justify-content-around'>
                                <Button variant="success" onClick={() => func('Nepali')}>
                                    Nepali
                                </Button>
                                <Button variant="info" onClick={() => func('Hindi')}>
                                    Hindi
                                </Button>
                                <Button variant='danger' onClick={() => func('English')}>
                                    English
                                </Button>
                            </div>
                            <div className='d-grid mt-2'>
                                <Button variant='warning' onClick={() => func(searchedMovies.imdbId)}>Remove</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='d-grid mt-2'>
                                <Button variant='warning' onClick={() => func(searchedMovies.imdbId)}>Remove</Button>
                            </div>
                        </>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};
