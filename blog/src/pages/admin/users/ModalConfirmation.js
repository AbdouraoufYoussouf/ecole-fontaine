import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AdminContext } from '../../../utils/adminContext';

function ModalConfirmation({ show, handleModalClose ,id,handleConfirm}) {

  const handleConfirme = async (userId) => {
    handleConfirm(userId)
    handleModalClose()
  };

  return (
    <Modal show={show} onHide={handleModalClose} style={{ padding: '1rem' }}>
      <Modal.Header closeButton style={{ padding: '1rem' }}>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: '0.5rem' }}>
        <p>Êtes-vous sûr de vouloir effectuer cette action ?</p>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between' style={{ padding: '0.1rem' }}>
        <Button variant="secondary" onClick={handleModalClose}>
          Annuler
        </Button>
        <Button variant="danger" onClick={()=>handleConfirme(id)}>
          Confirmer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmation;
