import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import InfoCard from './InfoCard.js';

const InfoCardStack = ({ cardInfo }) => {
  return (
    <div className="info-card-stack">
      <Container>
        <Row xs={1} sm={1} md={1} lg={3}>
          {cardInfo.map((item) =>
            <Col className="center">
              <InfoCard info={item} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default InfoCardStack;