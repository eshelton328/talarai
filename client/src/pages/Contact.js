import React, { useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import PageTitle from '../components/PageTitle.js';
import ContactForm from '../components/ContactForm.js';
import Footer from '../components/Footer.js';
import {
	Container,
	Row,
	Col,
	Form,
	Button,
} from 'react-bootstrap';

const Contact = () => {

	useEffect(() => {
    document.title = 'Contact';
  }, []);

	return (
		<div>
			<NavBar curr={'contact'} />
			<Container className='contact-container'>
				<PageTitle title={'Contact'} />
				<Row>
					<Col xs={2} sm={2} md={2} lg={2} className='contact-pos'>
						<div>Engineering</div>
						<div>Administration</div>
						<div>Operations</div>
						<div>Management</div>
						<div>General</div>
						<div>Partnerships</div>
						<div>Direct Assistance</div>
					</Col>
					<Col className='contact-emails'>
						<div>Lucca@talarai.com</div>
						<div>Ben@talarai.com</div>
						<div>Marvina@talarai.com</div>
						<div>Tucker@talarai.com</div>
						<div>info@talarai.com</div>
						<div>Ivana@talarai.com</div>
						<div>&#40;512&#41; 399-9521</div>
					</Col>
				</Row>
				<ContactForm />
			</Container>
			<Footer />
		</div>
	);
};

export default Contact;