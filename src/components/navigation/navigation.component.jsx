import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navigation.styles.scss';

/**
 * Navigation
 * ---------------
 * This component controls navigation trough the site's views
 */
function Navigation (props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary-light" variant="none" className="justify-content-end">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link text-center text-md-left pl-0">Inicio</Link>
            <NavDropdown title="Productos" className="text-center text-md-left" id="basic-nav-dropdown">
                <NavDropdown.Item href="/productos" className="text-capitalize text-md-left">Todo</NavDropdown.Item>
                {props.categories && props.categories.map((category) => 
                  <NavDropdown.Item key={category} href={'/productos/' + category} className="text-capitalize text-md-left">{category}</NavDropdown.Item>
                )}
            </NavDropdown>
            <Link to="/nosotros" className="nav-link text-center text-md-left">Nosotros</Link>
            {props.extraMenuItems && props.extraMenuItems.map((item) => 
              <Link to={item.url} key={item.label} className="nav-link text-center text-md-left text-capitalize">{item.label}</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;