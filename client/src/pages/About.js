import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import AboutCard from '../components/AboutCard.js';
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
				<Row>
					<Col>About US</Col>
				</Row>
				<AboutCard />
			</Container>
			<Footer />
		</div>
	);
};

export default About;