import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		if (!title || !content) {
			setError('Please fill in both title and content.');
			return;
		}

		try {
			await addDoc(collection(db, 'posts'), {
				title,
				content,
				authorId: auth.currentUser.uid,
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			});

			setTitle('');
			setContent('');
			setSuccess('Post created successfully!');
		} catch (err) {
			setError('Failed to create post: ' + err.message);
		}
	};

	return (
		<div className="container mt-5">
			<h2>Create New Post</h2>

			{error && <div className="alert alert-danger">{error}</div>}
			{success && <div className="alert alert-success">{success}</div>}

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control mb-3"
					placeholder="Post Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>

				<textarea
					className="form-control mb-3"
					placeholder="Post Content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					rows={6}
					required
				/>

				<button type="submit" className="btn btn-primary">Create Post</button>
			</form>
		</div>
	);
};

export default CreatePost;
