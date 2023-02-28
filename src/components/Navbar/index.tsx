import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Button, ButtonGroup } from 'react-bootstrap'
import { SortButton } from './SortButton'
import './styles.scss'

export const Navbar = ({ handleShow }:{handleShow:any}) => {
  return (
    <ButtonGroup className='nav-bar'>
      <Button
        variant="primary"
        className='btn btn-warning btn-sm'
        onClick={handleShow}
      ><FaHome /> My Team</Button>
      <SortButton />
    </ButtonGroup>
  )
}
