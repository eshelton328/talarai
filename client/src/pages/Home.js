import React, { useEffect } from 'react';
import PageData from '../lib/pageData.js';
import PageTemplate from '../components/PageTemplate';
import Phone from '../assets/img/phone.jpeg';
import QR from '../assets/img/qrcode.jpeg';
import Gear from '../assets/img/gear.jpeg'
import City from '../assets/img/city.jpeg';
import Laptops from '../assets/img/laptops.jpeg';

const partner = new PageData('Partner', 'Our values are based on honesty, integrity, tenacity, and ethics. Let us be your partner of choice as we help you stategize , build, and optimize. Our goals are your goals. As a multi-divisional business with an expanded experience base we can answer your needs, when you need them with time to spare.', Phone);

const supplier = new PageData('Supplier', 'Our company is a leading software supplier as a service, computer products, facility supply, and transportation needs to the Federal Governments,  State, and various law enforcement agencies, federal civilian agencies, educational institutes, communication companies, and non-profit organizations.', QR);

const advisor = new PageData('Advisor', 'We are an 51% disabled veteran-owned business that provides complete business solutions. We are both your eyes in the sky and your boots on the ground. We will make sure you are flying into success. Our mission is your mission. Our over 40 years combined experience will guide you on the right path.', Gear);

const about = new PageData('About Us', 'Talarai, LLC is a proudly Service Disabled Veteran and  Minority-owned business, and our experts are former US Military Veterans with Government, Defense, Small, and Large Federal contractor experience.  Our company is constantly evolving and growing. We provide a wide range of services. Our goal is to provide the best solution, for the best price, at the right time to service and exceed your needs. We are both your eyes in the sky and your boots on the ground. We will make sure you are flying into success. Our mission is your mission.', City);

const servs = new PageData('Services', 'The core strength of Talari, LLC lies in its ability to provide teams of highly educated and experienced local, national personnel with expertise across a multitude of disciplines and the equipment needed to put it all together. Our services include Logistics, Transportation, Procurement, Applications Services, Audits &amp; Risk Assessment, Automation, Business Continuity, Cloud, Premise, and Hybrid Support Services, Consulting and Projects, Continuous Diagnostics and Mitigation (CDM) Tools, Cybersecurity, Data Backup, Email Management &amp; Migration, Help Desk, Hardware, IT Relocation Services, Relocation Services, Managed IT Services, Mobility Services, Outsourced, and Supplemental IT Support, Server Virtualization &amp; Consolidation, Strategic Planning, Software Design, Remote, and Onsite Support and Unified Communications and VoIP.', Laptops);

const data = {
	cards: [partner, supplier, advisor],
	info: [about, servs],
	page: 'home',
};


const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  }, []);

	return (
		<PageTemplate content={data} />
	);
};

export default Home;