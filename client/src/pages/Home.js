import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import InfoCardStack from '../components/InfoCardStack.js';
import LargeCardStack from '../components/LargeCardStack';
import Phone from '../assets/img/phone.jpeg';
import QR from '../assets/img/qrcode.jpeg';
import Gear from '../assets/img/gear.jpeg'
import Skyline from '../assets/img/skyline.jpeg';

function Info(title, data, img) {
	this.title = title;
	this.data = data;
	this.img = img;
}

const partner = new Info('Partner', 'Our values are based on honesty, integrity, tenacity, and ethics. Let us be your partner of choice as we help you stategize , build, and optimize. Our goals are your goals. As a multi-divisional business with an expanded experience base we can answer your needs, when you need them with time to spare.', Phone);

const supplier = new Info('Supplier', 'Our company is a leading software supplier as a service, computer products, facility supply, and transportation needs to the Federal Governments,  State, and various law enforcement agencies, federal civilian agencies, educational institutes, communication companies, and non-profit organizations.', QR);

const advisor = new Info('Advisor', 'We are an 51% disabled veteran-owned business that provides complete business solutions. We are both your eyes in the sky and your boots on the ground. We will make sure you are flying into success. Our mission is your mission. Our over 40 years combined experience will guide you on the right path.', Gear);

const data = [partner, supplier, advisor];


const Home = () => {
	return (
		<div style={{ backgroundImage: `url(${Skyline})` }} className='home-page'>
			<NavBar curr={'home'} />
			<InfoCardStack cardInfo={data} />
			<LargeCardStack />
			<Footer />
		</div>
	);
};

export default Home;