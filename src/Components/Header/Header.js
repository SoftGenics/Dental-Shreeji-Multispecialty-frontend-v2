import React from 'react'
import './Header.css'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
    <Navbar className='Header-nav shadow' fixed='top'>
    <Container fluid>
    <Marquee className='marque-text' gradient={false}><Navbar.Brand  as={Link} to="/Notification"><img src='images/event.gif' alt='notify' style={{width:'50px'}}></img><span className='offer-text'>Check Offers click here</span></Navbar.Brand></Marquee>
        <Nav className="ms-auto">
            <Nav.Link href="#home" ><i className="fab fa-whatsapp" />&nbsp;+917800230430</Nav.Link>
            <Nav.Link href="#link" ><i className="fas fa-phone-alt"></i>&nbsp;+917800230430</Nav.Link>
            <Nav.Link href="#link" ><i className="fas fa-sign-in-alt"></i>&nbsp;Sign In</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header