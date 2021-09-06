import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

const About = () => {
	return (
		<div>
			<NavBar curr={'about'} />
			This is the about page.
			<Footer />
		</div>
	);
};

export default About;