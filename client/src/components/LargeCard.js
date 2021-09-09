import React from 'react';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const LargeCard = ({ info }) => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
      <Col className='lcs-col lcs-img center'>
        <Image src={info.img} rounded='true' fluid='true' />
      </Col>
      <Col className='lcs-col lcs-text'>
        <div>
          <h1>{info.title}</h1>
          <p>{info.data}</p>
        </div>
      </Col>
    </Row>
  );
};

export default LargeCard;