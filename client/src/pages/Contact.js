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

	const [validated, setValidated] = useState(false);
	const [first, setFirst] = useState('');
	const [last, setLast] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [sendTo, setSendTo] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [newsLetter, setNewsLetter] = useState(false);

	const handleSubmit = (event) => {
		console.log('Validating...');
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			console.log(form);
		} else {
			console.log(first);
			console.log(last);
			console.log(userEmail);
			console.log(sendTo);
			console.log(subject);
			console.log(newsLetter);
		}

		setValidated(true);
	};

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
					<Col>
						<div>Lucca@talarai.com</div>
						<div>Ben@talarai.com</div>
						<div>Marvina@talarai.com</div>
						<div>Tucker@talarai.com</div>
						<div>info@talarai.com</div>
						<div>Ivana@talarai.com</div>
						<div>&#40;512&#41; 399-9521</div>
					</Col>
				</Row>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Row className="mb-3 form-row">
						<Form.Group as={Col}>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="First"
								onChange={(e) => {
									setFirst(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Last"
								onChange={(e) => {
									setLast(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Your Email</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder="email@example.com"
								onChange={(e) => {
									setUserEmail(e.target.value);
								}}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Send Email To</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder="email@example.com"
								onChange={(e) => {
									setSendTo(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group as={Col}>
							<Form.Label>Subject</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Subject"
								onChange={(e) => {
									setSubject(e.target.value);
								}}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
							<Form.Label></Form.Label>
							<Form.Control
								required
								as="textarea"
								rows={5}
								placeholder='Your message'
								onChange={(e) => {
									setMessage(e.target.value);
								}}
							/>
						</Form.Group>
					</Row>
					<Row>
					</Row>
					<Form.Group className='news-letter' id="formGridCheckbox">
						<Form.Check
							type="checkbox"
							label="I want to recieve newsletters"
							onClick={() => {
								setNewsLetter(!newsLetter);
							}}
							/>
					</Form.Group>
					<Button type="submit">Send</Button>
				</Form>
			</Container>
			<Footer />
		</div>
	);
};

export default Contact;