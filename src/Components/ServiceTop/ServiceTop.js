import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './ServiceTop.css'
const ServiceTop = () => {
  return (
    <div>
        <Container className='servicetop'>
        <Row>
            <Col lg={3} className="servicetop-wrapper">
            <Card >
            <i className="fas fa-tooth"></i>
                <Card.Body>
                    <Card.Title>ROOT CANAL TREATMET</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Card >
            <i className="fas fa-teeth"></i>
                <Card.Body>
                    <Card.Title>ORTHODONTIC</Card.Title>

                </Card.Body>
                </Card>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Card >
            <i className="fas fa-teeth-open"></i>
                <Card.Body>
                 <Card.Title>COMPLETE DENTURE</Card.Title>

                </Card.Body>
                </Card>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Card >
            <i className="fas fa-stethoscope"></i>
                <Card.Body>
                    <Card.Title>EMERGENCY CARE</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ServiceTop