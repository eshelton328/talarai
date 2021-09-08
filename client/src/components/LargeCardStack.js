import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import City from '../assets/img/city.jpeg';
import Laptops from '../assets/img/laptops.jpeg';

const LargeCardStack = () => {
  return (
    <div className='large-card-stack'>
      <Container>
        <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
          <Col className='lcs-col lcs-img center'>
            <Image src={City} fluid='true' />
          </Col>
          <Col className='lcs-col lcs-text'>
            <div>
              <h1>About Us</h1>
              <p>Talarai, LLC is a proudly Service Disabled Veteran and  Minority-owned business, and our experts are former US Military Veterans with Government, Defense, Small, and Large Federal contractor experience.  Our company is constantly evolving and growing. We provide a wide range of services. Our goal is to provide the best solution, for the best price, at the right time to service and exceed your needs. We are both your eyes in the sky and your boots on the ground. We will make sure you are flying into success. Our mission is your mission.</p>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
          <Col className='lcs-col lcs-text' id='text-col'>
            <div>
              <h1>Services</h1>
              <p>The core strength of Talari, LLC lies in its ability to provide teams of highly educated and experienced local, national personnel with expertise across a multitude of disciplines and the equipment needed to put it all together. Our services include Logistics, Transportation, Procurement, Applications Services, Audits &amp; Risk Assessment, Automation, Business Continuity, Cloud, Premise, and Hybrid Support Services, Consulting and Projects, Continuous Diagnostics and Mitigation (CDM) Tools, Cybersecurity, Data Backup, Email Management &amp; Migration, Help Desk, Hardware, IT Relocation Services, Relocation Services, Managed IT Services, Mobility Services, Outsourced, and Supplemental IT Support, Server Virtualization &amp; Consolidation, Strategic Planning, Software Design, Remote, and Onsite Support and Unified Communications and VoIP.</p>
            </div>
          </Col>
          <Col className='lcs-col lcs-image center' id='img-col'>
            <Image src={Laptops} fluid='true' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LargeCardStack;