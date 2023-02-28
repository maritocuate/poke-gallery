import React, { useContext } from 'react'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'

import { Store } from '../../../Store'

export const SortButton = () => {
  const { changeSortDirection } = useContext(Store)

  return (
    <DropdownButton as={ButtonGroup} title="Sort" variant="warning">
      <Dropdown.Menu>
        <Dropdown.Item onClick={ () => changeSortDirection('a-z') }>A-Z</Dropdown.Item>
        <Dropdown.Item onClick={ () => changeSortDirection('z-a') }>Z-A</Dropdown.Item>
      </Dropdown.Menu>
    </DropdownButton>
  )
}
