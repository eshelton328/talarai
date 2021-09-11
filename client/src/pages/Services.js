import React from 'react';
import NavBar from '../components/NavBar.js';
import PageTitle from '../components/PageTitle.js';
import CapabilitiesModal from '../components/CapabilitiesModal.js';
import Footer from '../components/Footer.js';
import Departments from '../assets/img/departments.jpeg'
import {
	Container,
	Row,
	Col,
	Button,
	Card,
} from 'react-bootstrap'

const Services = () => {

	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div>
			<NavBar curr={'serv'} />
			<Container>
				<PageTitle title={'Services'} />
				<Row className='work-btn'>
					<Col className='center'>
						<Button onClick={() => setModalShow(true)}>
							Capabilities
						</Button>
					</Col>
				</Row>
				<CapabilitiesModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<Row xs={1} sm={1} md={1} lg={1} className='serv-row'>
					<Col className='center'>Our staff has experience working in the following countries: South Africa, U.S., Oman, Qatar, Saudi Arabia, Egypt, Turkey, UAE, Iraq, Afghanistan, Curacao, Aruba, Ecuador, Uruguay, Argentina, United Kingdom, Germany, Netherlands, and more. Below is a sample of some of the Agencies, Clients, and Companies that our personnel has worked with:</Col>
					<Col className='center serv-img'>
						<Card style={{border: 'none'}}>
							<Card.Img variant="top" src={Departments} fluid='true' />
							<Card.Body>
								<Card.Text style={{fontSize: '14px'}}>
									Talarai, LLC was founded to provide quality, cost-effective, services to  Governmental clients.
									<br/>
									<b>A Certified Service Disabled Veteran Owned Business.</b>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
					Located in central Texas, Talarai offers a full line of customized solutions for government agencies in the information technology and management field, including AI, IT Consulting, Web Design and Development, Project Management Services, Software, and App Development Solutions Management, and more. We are continuously evolving to meet our Federal, State, and Local client’s needs and ensure our solutions remain current with the latest trends in the technology industry.
					<br/><br/>
					We can set up and maintain your business's network or help troubleshoot and maintain your existing system and provide professional services in all areas, from hardware to information technology software.
					<br/><br/>
					Our IT company is available to consult with you or your staff when problems arise with your information technology software. These professional services can be either remote or on-site assistance.
					<br/><br/>
					Our professional services team will work with you to establish the appropriate cloud size and available resources for your business. We are a one-stop-shop IT company that offers custom information technology software.
					<br/><br/>
					Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business.</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Services;