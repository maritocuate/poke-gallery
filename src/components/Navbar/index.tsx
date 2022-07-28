import React from 'react'
import { Button } from 'react-bootstrap'
import './styles.scss'

export const Navbar = ({handleShow}:{handleShow:any}) => {

  return (
    <nav className='nav-bar'>
      <Button 
        variant="primary"
        className='btn btn-warning btn-sm'
        onClick={handleShow}
      >My pokemon team</Button>
    </nav>
  )
}
