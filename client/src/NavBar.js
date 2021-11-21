import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, Button, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = ({user, showSignUp, setShowSignUp, handleLogout}) => {
    
    return (
        <Navbar className="navbar-static-top" bg="light" expand="lg" variant="primary">
            <Container>
                <Navbar.Brand>
                    <NavLink className="navlinks" to="/"><h2 className="brand-text">HumanitiesHub</h2></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navbarclicks">
                            <NavLink className="navlinks" to="/">Home</NavLink>
                        </Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item to="/group">Group</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navbarclicks">
                            <NavLink className="navlinks" to="/movie-list">Movies</NavLink>
                        </Nav.Link>
                        <Nav.Link className="navbarclicks">
                            <NavLink className="navlinks" to="/music-list">Music</NavLink>
                        </Nav.Link>
                        <Nav.Link className="navbarclicks">
                            <NavLink className="navlinks" to="/book-list">Books</NavLink>
                        </Nav.Link>
                        <Nav.Link className="navbarclicks">
                            <NavLink className="navlinks" to="/activity-list">Activities</NavLink>
                        </Nav.Link>
                    </Nav>
                    {!user ?
                    <Button classname='ms-auto' variant='flat' to='login-form' onClick={() => setShowSignUp(false)}>Login</Button>
                    :
                    <Button classname='ms-auto' variant='flat' onClick={handleLogout}>Logout</Button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
