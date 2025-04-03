import { Navbar, Nav, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styles from './menu-bar.module.css'

export default function MenuBar () {
    return (
        <Navbar expand="lg" bg="white" data-bs-theme="light" sticky="top">
            <Container>
                <NavbarBrand className={styles.nav_logo} href="/">Gabriel Anover</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                <Nav className={styles.nav_items}>
                    <NavLink className={styles.nav_link} href="/#about">About Me</NavLink>
                    <NavLink className={styles.nav_link} href="/projects">Projects</NavLink>
                    <NavLink className={styles.nav_link} href="/contact">Contact</NavLink>
                </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}