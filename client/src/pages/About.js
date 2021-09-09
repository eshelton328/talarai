import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import PageTitle from '../components/PageTitle.js';
import AboutCard from '../components/AboutCard.js';
import PageData from '../lib/pageData.js';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const About = () => {
	return (
		<div>
			<NavBar curr={'about'} />
			<Container>
				<PageTitle title={'About Us'} />
				<AboutCard />
				<AboutCard />
			</Container>
			<Footer />
		</div>
	);
};

export default About;