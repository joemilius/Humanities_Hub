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
            </Container>
        </NavBar>
    )
}

export default NavBar
