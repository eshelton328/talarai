import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import InfoCard from './InfoCard.js';

const InfoCardStack = ({ cardInfo }) => {
  return (
    <div className='info-card-stack'>
      <Container>
        <Row xs={1} sm={1} md={1} lg={3}>
          {cardInfo.map((item, i) =>
            <Col className='center' key={i}>
              <InfoCard info={item} key={i} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default InfoCardStack;