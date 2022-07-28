import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './styles.scss'

export const MyPokes = ({show, handleClose}:{show:any, handleClose:any}) => {

  return (
    <>
      <Modal className='pokes' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  )
}
