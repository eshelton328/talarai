import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            &copy; 2021 <a href='https://www.talarai.com/'>talarai.com</a>
            <br/>
            2101 S. IH35 Frontage Rd.
            <br/>
            Austin, TX. 78741
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;