import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar classname="navbar" bg="light" expand="lg" variant="light">
            <Container>
                <NavBar.Brand>
                    <NavLink classname="navlinks" to="/"><h2 classname="brand-text">HumanitiesHub</h2></NavLink>
                </NavBar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link classname="navbarclicks">
                        <NavLink classname="navlinks" to="/">Home</NavLink>
                    </Nav.Link>
                    <Nav.Link classname="navbarclicks">
                        <NavLink classname="navlinks" to="/movie-list">Movies</NavLink>
                    </Nav.Link>
                    <Nav.Link classname="navbarclicks">
                        <NavLink classname="navlinks" to="/music-list">Music</NavLink>
                    </Nav.Link>
                    <Nav.Link classname="navbarclicks">
                        <NavLink classname="navlinks" to="/book-list">Books</NavLink>
                    </Nav.Link>
                    <Nav.Link classname="navbarclicks">
                        <NavLink classname="navlinks" to="/activity-list">Activities</NavLink>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar
