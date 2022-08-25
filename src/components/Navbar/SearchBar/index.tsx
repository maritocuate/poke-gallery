import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import './styles.scss'

import { Store } from '../../../Store'

export const SearchBar = () => {
  const { setSearch } = useContext(Store)

  const initSearch = (e:string) => {
    setSearch(e)
  }

  return (
    <Form.Control
        placeholder="Search..."
        onChange={ e => initSearch(e.target.value) }
    />
  )
}
