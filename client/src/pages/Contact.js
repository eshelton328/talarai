import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

const Contact = () => {
	return (
		<div>
			<NavBar curr={'contact'} />
			This is the contact page.
			<Footer />
		</div>
	);
};

export default Contact;