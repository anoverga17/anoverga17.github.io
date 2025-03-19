import { NavbarBrand, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './menu-bar.module.css'

export default function MenuBar () {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container className={styles.nav_container}>
                <NavbarBrand className={styles.nav_logo} href="/">Gabriel Anover</NavbarBrand>
                <Nav className={styles.nav_items}>
                    <NavLink className={styles.nav_link} href="/">About Me</NavLink>
                    <NavLink className={styles.nav_link} href="/projects">Projects</NavLink>
                    <NavLink className={styles.nav_link} href="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}