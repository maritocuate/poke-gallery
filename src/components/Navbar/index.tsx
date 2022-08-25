import React from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { SearchBar } from './SearchBar'
import './styles.scss'

export const Navbar = ({ handleShow }:{handleShow:any}) => {
  return (
    <InputGroup className='nav-bar mx-4'>
      <Button
        variant="primary"
        className='btn btn-warning btn-sm'
        onClick={handleShow}
      >My pokemon team</Button>
      <SearchBar />
    </InputGroup>
  )
}
