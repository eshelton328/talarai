import React, { useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import PageTitle from '../components/PageTitle.js';
import AboutCard from '../components/AboutCard.js';
import PageData from '../lib/pageData.js';
import Tucker from '../assets/img/tucker.jpeg';
import Marvina from '../assets/img/marvina.jpeg';
import {
  Container,
  Row,
  Col,
	Button
} from 'react-bootstrap';

const tucker = new PageData(['Tucker Sulzberger', 'CEO & Co-Founder'], ['Tucker Sulzberger is a Founding Partner and majority owner of Talarai, LLC.  His tenure as a United States Army Veteran with over ten years of proven leadership skills has contributed to this thriving business venture. He commanded a CH-47F helicopter company at the pinnacle of his Army career. He has an uncanny ability to develop highly adaptive and unified teams.', 'Tucker is a graduate of the University of Iowa, where he studied Kinesiology and adapted a highly regimented healthy lifestyle. While studying at the university, he was the captain of the division 1 rugby team and attended Reserve Officer Training Corps after completing basic infantry training. He was awarded Cadet of the year from the Iowa  National Guard and recognized as a distinguished military graduate for being in the top 20% in the country.'], Tucker);

const marvina = new PageData(['Marvina Case', 'Head of Global Operations & Co-Founder'], ["Marvina Case attended Purdue University and has 24 years of proven technology sales performance management at the center of the digital commerce ecosystem in Federal, State, Local, Tribal and private sectors.  Marvina has sold in 43 countries and initiated and introduced product lines and organizations in 26 countries. She is one of the founding members and the driving force behind the core logic that makes Talarai fly. You'll find her operating where technology overlaps with marketing, brand, business systems, and product innovation.", "She has deep expertise in compassionate turnarounds, building sustainable business models, and driving high-performance teams across multiple global markets. She is best known for bridging gaps between Sales, Marketing, Finance, and C-Level Players. With companies like Dell, Dell Federal, Sage, SAP, LimeLight Networks, and Intel on her resume, she has the practiced and proven finger on the pulse of what was, is, and will be in technology."], Marvina);

const data = [tucker, marvina];

const About = () => {

	useEffect(() => {
    document.title = "About Us";
  }, []);

	return (
		<div>
			<NavBar curr={'about'} />
			<Container>
				<PageTitle title={'About Us'} />
				<Row className='work-btn'>
					<Col className='center'>
						<Button href='/contact'>Work with Talarai</Button>
					</Col>
				</Row>
				{data.map((item, i) =>
					<AboutCard content={item} key={i} />
				)}
			</Container>
			<Footer />
		</div>
	);
};

export default About;