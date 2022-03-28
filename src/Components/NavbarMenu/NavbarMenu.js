import React, {useState} from 'react'
import { Navbar, Nav, Container,NavDropdown , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavbarMenu.css'
const NavbarMenu = (props) => {
  
    const [size, setsize] = useState(false)
    const changeSize = () => {
        if(window.scrollY >= 95) {
            setsize(true)
        } else {
            setsize(false)
        }
    }
    window.addEventListener("scroll", changeSize)

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='Navbar-menu shadow' bg='light' fixed='top'>
        <Container fluid>
        <Navbar.Brand as={Link} to="/" eventKey={2}  className={size ? "navbar-logo img navbar-logo-size img" : "navbar-logo img "}><img src='images/main-logo.png' alt='main-shreeji-logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" eventKey={2}><i className="fas fa-home"></i></Nav.Link>
            <NavDropdown title="GENERAL" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/Services' eventKey={2}>Cleanings & Exams <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/WhiteFilling' eventKey={2}>White Fillings <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Features' eventKey={2}>Emergency Care <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Root-Canals' eventKey={2}> Root Canals <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Features' eventKey={2}>Porcelain Crowns <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Features' eventKey={2}>Holistic Dentistry <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        
    </NavDropdown>
    <NavDropdown title="COSMETIC" id="collasible-nav-dropdown"  >
        <NavDropdown.Item as={Link} to='/' eventKey={2}>Cosmetic item 1 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/' eventKey={2}>Cosmetic item 2 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/' eventKey={2}>Cosmetic item 3 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Sosmetic item 4 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="SURGICAL" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/' eventKey={2}>Surgical 1 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Surgical 2 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Surgical 3 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Surgical 4 <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="KIDS DENTISTRY" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/' eventKey={2}>Tooth Colored Filling <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Cleaning & Prevention <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/' eventKey={2}>Extraction <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Sealants <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'eventKey={2}>Emergencies <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#review">REVIEWS</Nav.Link>
    <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to='/OurVideos' eventKey={2}>Our Video <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Photo-gallerys' eventKey={2}>Photo Gallery <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#doctor' eventKey={2}>About Doctor <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/' eventKey={2}>About Clinic <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>

    <Button variant='danger' className='bookonline-btn' eventKey={2}><Link to='/Book_Online'> BOOK ONLINE</Link> </Button>
    </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavbarMenu