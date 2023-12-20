import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const NavBar = props => {
    return(
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="rounded">
            <Container>
                <Navbar.Brand href="#home" className={styles.brand}>Blog.app</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;