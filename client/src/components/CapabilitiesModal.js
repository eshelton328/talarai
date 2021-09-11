import React from 'react';
import Capabilities from '../assets/img/capabilities.jpeg'
import {
  Modal,
  Button,
  Image,
} from 'react-bootstrap';

const CapabilitiesModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body className='center'>
        <Image src={Capabilities} fluid='true'/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CapabilitiesModal;