import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext.jsx';

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth();
	console.log("user in ProtectedRoute:", user);

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

export default ProtectedRoute;
