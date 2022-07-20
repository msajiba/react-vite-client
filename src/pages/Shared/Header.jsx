import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
    
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">VITE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/add">ADD</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;