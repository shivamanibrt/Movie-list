import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { CustomCard } from './CustomCard'


export const Tabledisplay = () => {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary">All</Button>
                <Button variant="success">Nepali</Button>
                <Button variant="info">Hindi</Button>
                <Button variant="danger">English</Button>
            </ButtonGroup>
            <div className='py-3 text-warning'>0 Movies found</div>
            <Row>
                <CustomCard />
            </Row>
        </div>


    )
}
