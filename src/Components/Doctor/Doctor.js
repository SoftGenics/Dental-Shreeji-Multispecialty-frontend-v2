import React from 'react'
import './Doctor.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Doctor = () => {
  return (
    <div className='doctor'>
        <h1>About Doctor</h1>
        <Container className='doctor-conatiner'>
            <Card>
                <Row>
                    <Col md={5} className="doctor-wrapper">
                    <Card.Img variant="top" src="images/doc.jpg" />
                    </Col>
                    <Col md={7} className="doctor-wrapper">
                    <Card.Title>Dr. Name</Card.Title>
                    <Card.Text>Dr. Detail</Card.Text>
                    <Card.Text>Dr. Detail</Card.Text>
                    <Card.Text>---------------------------</Card.Text>
                    <Card.Text>---------------------------</Card.Text>
                    <Card.Text>---------------------------</Card.Text>
                    <Card.Text>---------------------------</Card.Text>
                    </Col>
                </Row>
            </Card>
        </Container>
    </div>
  )
}

export default Doctor