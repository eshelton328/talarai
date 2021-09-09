import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import InfoCardStack from './InfoCardStack.js';
import LargeCardStack from './LargeCardStack';
import Skyline from '../assets/img/skyline.jpeg';

const PageTemplate = ({ content }) => {
	return (
		<div style={{ backgroundImage: `url(${Skyline})` }} className='home-page'>
			<NavBar curr={'home'} />
			<InfoCardStack cardInfo={content.cards} />
			<LargeCardStack cardInfo={content.info} />
			<Footer />
		</div>
	);
};

export default PageTemplate;