import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import LargeCard from './LargeCard.js';

const LargeCardStack = ({ cardInfo }) => {
  return (
    <div className='large-card-stack'>
      <Container>
        {cardInfo.map((item, i) =>
          <LargeCard key={i} info={item} />
        )}
      </Container>
    </div>
  );
}

export default LargeCardStack;