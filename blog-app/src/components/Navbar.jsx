import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function AppNavbar() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await auth.signOut();
			navigate('/');
		} catch (err) {
			console.error("Logout error:", err);
		}
	};

	return (
		<Navbar bg="light" expand="lg" className="shadow-sm">
			<Container>
				{/* Logo */}
				<Navbar.Brand as={Link} to="/">
					<img
						src="/logo.jpg"
						alt="Blog Logo"
						width="30"
						height="30"
						className="d-inline-block align-top me-2"
					/>
					BlogApp
				</Navbar.Brand>
				<div className="order-lg-2 d-none d-lg-flex gap-3 align-items-center me-3">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook color="#3b5998" /></a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter color="#1da1f2" /></a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram color="#e4405f" /></a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#0077b5" /></a>
				</div>
				<div className="d-flex align-items-center order-lg-2">
					{user ? (
						<Button variant="outline-danger" onClick={handleLogout} className="me-2 logout-button">
							Logout
						</Button>
					) : (
						<Button variant="outline-primary" as={Link} to="/login" className="me-2 login-button">
							Login
						</Button>
					)}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</div>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto align-items-center mt-3 mt-lg-0">
						<Nav.Link as={Link} to="/news">News</Nav.Link>
						{user && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
					</Nav>
					<div className="d-lg-none mt-4">
						<div className="d-flex justify-content-center gap-4">
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook color="#3b5998" /></a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter color="#1da1f2" /></a>
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram color="#e4405f" /></a>
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#0077b5" /></a>
						</div>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AppNavbar;
