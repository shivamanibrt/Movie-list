import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'



export const CustomCard = ({ searchedMovies }) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={searchedMovies?.Poster} />
                <Card.Body>
                    <Card.Title>{searchedMovies?.Title}</Card.Title>
                    <Card.Text>{searchedMovies?.Plot?.slice(0, 100)}...</Card.Text>

                    <div className='d-flex justify-content-around'>
                        <Button variant="success">Nepali</Button>
                        <Button variant="info">Hindi</Button>
                        <Button variant='danger'>English</Button>
                    </div>

                    <div className='d-grid mt-2'>
                        <Button variant='warning'>Remove</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}
