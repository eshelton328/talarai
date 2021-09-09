import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';

const PageTitle = ({ title }) => {
  return (
    <Row className='page-title'>
      <Col className='center'>{title}</Col>
    </Row>
  );
};

export default PageTitle;