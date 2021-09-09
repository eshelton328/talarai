import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const AboutCard = () => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} className='about-row'>
      <Col className='about-col'>img</Col>
      <Col className='about-col'>
        <div>
          <h1 className='about-name'>Name</h1>
          <h2 className='about-pos'>Position</h2>
          <p>body</p>
        </div>
      </Col>
    </Row>
  );
};

export default AboutCard;