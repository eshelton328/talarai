import React from 'react';
import {
  Card,
} from 'react-bootstrap';

const InfoCard = ({ info }) => {
  return (
    <Card style={{ width: "18rem" }} >
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>
          {info.data}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
  );
};

export default InfoCard;