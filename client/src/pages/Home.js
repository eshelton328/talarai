import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

const Home = () => {
	return (
		<div>
			<NavBar curr={'home'} />
			This is the home page.
			<Footer />
		</div>
	);
};

export default Home;