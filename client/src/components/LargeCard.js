import React from 'react';
import Container from 'react-bootstrap';
import {
  Row,
  Col
} from 'react-bootstrap';


const LargeCardStack = () => {
  return (
    <Row className='lcs-row'>
      <Col xs={5} className='lcs-col'>img</Col>
      <Col className='lcs-col'>text</Col>
    </Row>
    <Row className='lcs-row'>
      <Col className='lcs-col'>img</Col>
      <Col xs={5} className='lcs-col'>text</Col>
    </Row>
  );
}

export default LargeCardStack;