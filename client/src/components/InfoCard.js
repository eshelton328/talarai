import React from 'react';
import {
  Card,
  Row,
  Col,
} from 'react-bootstrap';

const InfoCard = ({ info }) => {
  return (
    <Card className='text-center custom-card'>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>
          {info.data}
        </Card.Text>
      </Card.Body>
      <Row className='text-center'>
        <Col>
          <Card.Img style={{width: '5rem', height: '5rem'}} variant='bottom' src={info.img} />
        </Col>
      </Row>
    </Card>
  );
};

export default InfoCard;