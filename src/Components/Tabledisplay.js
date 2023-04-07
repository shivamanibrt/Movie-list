import React, { useState, useEffect } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { CustomCard } from './CustomCard'


export const Tabledisplay = ({ movieList, handelOnDelete }) => {
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        setDisplayList(movieList)
    }, [movieList]);

    const handelOnFilter = str => {
        let tempArg = str === 'All'
            ? movieList
            : movieList.filter(item => item.mode === str);
        setDisplayList(tempArg);
    }
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary" onClick={() => { handelOnFilter('All') }}>All</Button>
                <Button variant="success" onClick={() => { handelOnFilter('Nepali') }}
                >Nepali</Button>
                <Button variant="info" onClick={() => { handelOnFilter('Hindi') }}>Hindi</Button>
                <Button variant="danger" onClick={() => { handelOnFilter('English') }}>English</Button>
            </ButtonGroup>
            <div className='py-3 text-warning'>{displayList.length} Movies found</div>
            <Row>
                <Col className='d-flex gap-2 flex-wrap justify-content-around'>
                    {
                        displayList.map((item) => <CustomCard searchedMovies={item} func={handelOnDelete} />)
                    }
                </Col>

            </Row>
        </div>
    )
}
