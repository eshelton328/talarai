import React from 'react';
import SDVOSB from '../assets/img/sdvosb.jpeg'
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
      <Container fluid='true'>
        <Row>
          <Col className='footer-text'>
            &copy; 2021 <a href='https://www.talarai.com/'>talarai.com</a>
            <br/>
            2101 S. IH35 Frontage Rd.
            <br/>
            Austin, TX. 78741
          </Col>
          <Col className='footer-img'>
            <Image src={SDVOSB} style={{width: "5rem"}} roundedCircle='true' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;