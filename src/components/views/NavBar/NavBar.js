import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';


const NavBar = props => {
    return(
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" className={clsx('mb-4','rounded', 'navbar-dark')}>
            <Container>
                <Navbar.Brand href="#home">Blog.app</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;