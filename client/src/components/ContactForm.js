import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	Button,
} from 'react-bootstrap';

const ContactForm = () => {

  const [validated, setValidated] = useState(false);
	const [name, setName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [message, setMessage] = useState('');
	const [newsLetter, setNewsLetter] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			// here you would add user information to data base and send email / register them for newletters if true
			console.log(name);
			console.log(userEmail);
			console.log(newsLetter);
		}

		setValidated(true);
	};

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 form-row">
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
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
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={7}
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ContactForm;