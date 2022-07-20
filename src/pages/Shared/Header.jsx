import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../firebase.config';

const Header = () => {

    const [user] = useAuthState(auth);

    if(user){
        console.log('have a user', user);
    };

    return (
        <>
    
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">VITE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?   <>
                                        <Nav.Link as={Link} to="/add">ADD</Nav.Link>    
                                        <Button onClick={()=> signOut(auth) } variant='outline-danger'> Sign Out</Button>
                                    </>  
                                : <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        }
                        
                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;