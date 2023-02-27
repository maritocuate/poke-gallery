import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'

import { Store } from '../../../Store'

export const SortButton = () => {
  const { changeSortDirection } = useContext(Store)

  return (
    <Dropdown>
      <Dropdown.Toggle variant='warning'>
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={ () => changeSortDirection('a-z') }>A-Z</Dropdown.Item>
        <Dropdown.Item onClick={ () => changeSortDirection('z-a') }>Z-A</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
