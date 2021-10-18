import React from 'react'
import {NavBar, Container, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <NavBar classname="navbar" bg="light" expand="lg" variant="light">
            <Container>
                <NavBar.Brand>
                    <NavLink classname="navlinks" to="/"><h2 classname="brand-text">HumanitiesHub</h2></NavLink>
                </NavBar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                </Navbar.Collapse>

            </Container>
        </NavBar>
    )
}

export default NavBar
