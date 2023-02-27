import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Button, InputGroup } from 'react-bootstrap'
import { SearchBar } from './SearchBar'
import { SortButton } from './SortButton'
import './styles.scss'

export const Navbar = ({ handleShow }:{handleShow:any}) => {
  return (
    <InputGroup className='nav-bar w-75'>
      <Button
        variant="primary"
        className='btn btn-warning btn-sm'
        onClick={handleShow}
      >My Team <FaHome /></Button>
      <SearchBar />
      <SortButton />
    </InputGroup>
  )
}
