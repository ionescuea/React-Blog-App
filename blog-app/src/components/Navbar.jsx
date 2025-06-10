import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth } from '../context/authContext.jsx';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function AppNavbar() {
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate('/'); // Redirect to home after logout
		} catch (error) {
			console.error('Logout error:', error);
		}
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
