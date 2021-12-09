import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, Button, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = ({user, showSignUp, setShowSignUp, setCurrentGroup, handleLogout}) => {

    function handleCurrentGroup(event){
        fetch(`/groups/${event.target.id}`)
        .then(response => response.json())
        .then(data => setCurrentGroup(data))
    }

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
                        <NavDropdown title="Groups" id="navbarScrollingDropdown" onChange={handleCurrentGroup}>
                            {/* {user.memberships ? user.memberships.groups.map(group => {
                            return(
                            <NavDropdown.Item id={group.id}>{group.group_name}</NavDropdown.Item>)}) 
                            : null} */}
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
