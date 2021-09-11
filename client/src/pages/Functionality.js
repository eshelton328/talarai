import React, { useEffect } from 'react';
import PageData from '../lib/pageData';
import PageTemplate from '../components/PageTemplate';
import Globe from '../assets/img/globe.jpeg';
import Lock from '../assets/img/lock.jpeg';
import Key from '../assets/img/key.jpeg';
import Eagle from '../assets/img/eagle.jpeg';
import Drone from '../assets/img/drone.jpeg';

const tele = new PageData("Telecommunications and Network Services", "We offer cost-effective telecommunications products and services, whether you're a local government or a large federal department or a school, call center, or small business. Choose from specialized services like satellite, or a total custom solution for your agency, call center or campus.", Globe);

const iT = new PageData('IT Security', "Get customizable cybersecurity products and services to help you enhance your agency's security, improve resilience, protect the information, and bring your systems into the 21st century. We specialize in Security Solutions, Vulnerability Prevention, and Security Analysis.", Lock);

const softServ = new PageData('IT Software and IT Services', 'Our solutions include infrastructure software, enterprise application software, and licensing and maintenance. iSaaS, ERP, CRM, and much more. We have over 200 years combined IT experience and can find the best  consulting and outsourcing professionals for IT services needs.', Key);

const manage = new PageData('Project Management', 'No matter if you are rolling out a new service or product or you would like to revamp your existing practices and processes for ultimate efficiency, we have you covered. Talarai Consulting’s certified, expert Project Management Professionals offer the most innovative and cost-efficient solutions to fit your needs. Providing you a birds-eye view to every step in the process.  We will have your business scaling to new heights in no time.', Eagle);

const solutions = new PageData('Solutions', 'It all starts with data and ends with data. We align technology with your business. We build tangible solutions to solve your everyday problems. Our proven process produces measurable results. If driving business value with Artificial Intelligence is in your plan, we can help you unmask their potential and perfect the basics. Smart Technology is powerless without clean data. We can guide you through your digital transformation process and key your propellers moving while doing so.', Drone);

const data = {
	cards: [tele, iT, softServ],
	info: [manage, solutions],
	page: 'funcly',
};

const Functionality = () => {

	useEffect(() => {
    document.title = 'Functionality';
  }, []);

	return (
		<PageTemplate content={data} />
	);
};

export default Functionality;