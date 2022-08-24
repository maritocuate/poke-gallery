import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import './styles.scss'

import { Store } from '../../Store'
import { PokemonItem } from './PokemonItem'

export const MyPokes = ({ show, handleClose }:{show:any, handleClose:any}) => {
  const { myPokes } = useContext(Store)

  return (
    <>
      <Modal className='pokes' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Pokemon Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            {
              (!myPokes.length)
                ? (
                <div className='p-3 mb-2 bg-danger text-white'>You dont have any pokemon in your team yet.</div>
                  )
                : (
                    myPokes.map((item:string, i:number) => (
                  <PokemonItem key={i} name={item} />
                    ))
                  )
            }
          </>
        </Modal.Body>
      </Modal>
    </>
  )
}
