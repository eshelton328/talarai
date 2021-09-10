import React, { useState } from 'react';
import NavBar from '../components/NavBar.js';
import PageTitle from '../components/PageTitle.js';
import Footer from '../components/Footer.js';
import {
	Container,
	Row,
	Col,
	Form,
	Button,
} from 'react-bootstrap';

const Contact = () => {
	return (
		<div>
			<NavBar curr={'contact'} />
			<PageTitle title={'Contact'} />
			<Container className='contact-container'>
				<Form>
					<Row className="mb-3">
						<Form.Group as={Col}>
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="First" />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Last" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Your Email</Form.Label>
							<Form.Control type="email" placeholder="email@example.com" />
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Send Email To</Form.Label>
							<Form.Control type="email" placeholder="email@example.com" />
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Subject</Form.Label>
							<Form.Control type="text" placeholder="Subject" />
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
							<Form.Label></Form.Label>
							<Form.Control as="textarea" rows={8} placeholder='Your message' />
						</Form.Group>
					</Row>
					<Row>
					</Row>
					<Form.Group className='news-letter' id="formGridCheckbox">
						<Form.Check type="checkbox" label="I want to recieve newsletters" />
					</Form.Group>
					<Button type="submit">Send</Button>
				</Form>
			</Container>
			<Footer />
		</div>
	);
};

export default Contact;