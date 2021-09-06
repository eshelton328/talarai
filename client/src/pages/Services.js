import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

const Services = () => {
	return (
		<div>
			<NavBar curr={'serv'} />
			This is the services page.
			<Footer />
		</div>
	);
};

export default Services;