import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import InfoCard from './InfoCard.js';

const Cards = ({ cardInfo }) => {
  return (
    <div>
      <Container className='d-flex justify-content-center'>
        <Row>
          {cardInfo.map((item) =>
            <Col className="container-fluid mt-1">
              <InfoCard info={item} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;