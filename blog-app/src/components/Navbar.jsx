import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth } from '../context/Auth.jsx';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function AppNavbar() {
	const { user } = useAuth();

	const handleLogout = async () => {
		await signOut(auth);
	};

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
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link href="/news">News</Nav.Link>
					</Nav>
					<Nav className="ms-auto gap-3">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
						{user ? (
							<Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
						) : (
							<Button variant="outline-primary" href="/login">Login</Button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AppNavbar;
