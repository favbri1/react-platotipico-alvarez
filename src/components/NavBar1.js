import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../assets/img/icons8-acción-de-gracias-94.png';
import navIcon1 from '../assets/img/icons8-twitter-48.png';
import navIcon2 from '../assets/img/icons8-facebook-48.png';
import navIcon3 from '../assets/img/icons8-instagram-48.png';
import { Link } from 'react-router-dom'

export const NavBar1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activateLink, setActivateLink] = useState('home');
  useEffect(() => {
    const onScroll = () => {
      if (window.scrolly > 50) {
        setScrolled(true);
      } else {
        setScrolled(true)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateactivateLink = (value) => {
    setActivateLink(value);
  };

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand ><Link to='/principal'>
            <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="Navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activateLink === 'home' ? 'activate navbar-link' : 'navbar-link'} onClick={() => onUpdateactivateLink('home')}>Home</Nav.Link>
              <Nav.Link><Link to="/Piquemacho2" className='piqueee'>Pique macho</Link></Nav.Link>
              <Nav.Link ><Link to="/Platopaceño" className='piqueee'>Plato Paceño</Link></Nav.Link>
              <Nav.Link ><Link to="/Pacufrito" className='piqueee'>Pacu Frito</Link></Nav.Link>
              <Nav.Link ><Link to="/Thimpu1" className='piqueee'>Thimpu</Link></Nav.Link>
              <Nav.Link ><Link to="/Calapurca1" className='piqueee'>Calapurca</Link></Nav.Link>
              <NavDropdown title="Mas" id="basic-nav-dropdown" class="dropdown">
                <NavDropdown.Item ><Link to="/Majadito7" className='piqueee'>Majadito</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/Ranga9" className='piqueee'>Ranga, Fritanga y Pan de arroz</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                <Link to="/Acercademi" className='piqueee'>Acerca de Mi</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span className="navbar-text">
              <div classname="social-icon">
                <a href="https://twitter.com/?lang=es"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/?locale=es_LA"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={navIcon3} alt="" /></a>
              </div>
              <button className="vvd"><span><Link to="/Formulario">Iniciar Sesion</Link></span></button>
            </span>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  )
}
