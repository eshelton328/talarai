import React from 'react';
import NavBar from '../components/NavBar.js';

const Home = () => {
	return (
		<div>
			<NavBar curr={'home'} />
			This is the home page.
		</div>
	);
};

export default Home;