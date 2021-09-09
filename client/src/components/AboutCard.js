import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const AboutCard = ({ content }) => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} className='about-row'>
      <Col className='about-col center'>
        <Image src={content.img} style={{width: "25rem"}} className='about-img' roundedCircle='true'/>
      </Col>
      <Col className='about-col about-text'>
        <div>
          <h1 className='about-name'>{content.title[0]}</h1>
          <h2 className='about-pos'>{content.title[1]}</h2>
          <p>{content.data[0]}</p>
          <br/>
          <p>{content.data[1]}</p>
        </div>
      </Col>
    </Row>
  );
};

export default AboutCard;