import React from 'react';
import CreatePost from '../components/CreatePost.jsx';

const Dashboard = () => {
	return (
		<div className="container mt-5">
			<h2>👋 Welcome to Dashboard</h2>
			<CreatePost />
		</div>
	);
};

export default Dashboard;