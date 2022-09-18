import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Button as UIButton } from '@mui/material';
import QuatationForm from './QuatationForm';
function BsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UIButton variant="contained" onClick={handleShow}>Get Quotation</UIButton>

      <Modal show={show} onHide={handleClose} fullscreen={'sm-down'} centered>
        <Modal.Header closeButton>
          <h6>Fill details to get quatation  </h6>
        </Modal.Header>
        <Modal.Body>
            <QuatationForm/>

        </Modal.Body>
  
      </Modal>
    </>
  );
}

export default BsModal;