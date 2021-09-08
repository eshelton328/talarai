import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import City from '../assets/img/city.jpeg';

const LargeCardStack = () => {
  return (
    <div className='large-card-stack'>
      <Container>
        <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
          <Col className='lcs-col'>img</Col>
          <Col className='lcs-col'>text</Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
          <Col className='lcs-col'>text</Col>
          <Col className='lcs-col'>img</Col>
        </Row>
      </Container>
    </div>
  );
}

export default LargeCardStack;