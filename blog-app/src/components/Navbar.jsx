// Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function AppNavbar() {
	return (
		<Navbar bg="light" expand="lg" className="shadow-sm">
			<Container>
				<Navbar.Brand href="/">
					<img
						src="/logo.jpg"
						alt="Blog Logo"
						width="30"
						height="30"
						className="d-inline-block align-top me-2"
					/>
					BlogApp
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/news">News</Nav.Link>
					</Nav>
					<Nav className="ms-auto d-flex align-items-center gap-3">
						<Button variant="outline-primary">Login</Button>
						<a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a>
						<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						<a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
						<a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AppNavbar;
