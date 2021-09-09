import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const LargeCardStack = ({ cardInfo }) => {
  return (
    <div className='large-card-stack'>
      <Container>
        <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
          <Col className='lcs-col lcs-img center'>
            <Image src={cardInfo[0].img} fluid='true' />
          </Col>
          <Col className='lcs-col lcs-text'>
            <div>
              <h1>{cardInfo[0].title}</h1>
              <p>{cardInfo[0].data}</p>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} className='lcs-row'>
          <Col className='lcs-col lcs-img center'>
            <Image src={cardInfo[1].img} fluid='true' />
          </Col>
          <Col className='lcs-col lcs-text'>
            <div>
              <h1>{cardInfo[1].title}</h1>
              <p>{cardInfo[1].data}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LargeCardStack;