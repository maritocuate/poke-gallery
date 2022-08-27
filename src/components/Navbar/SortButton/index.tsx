import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { Store } from '../../../Store'

export const SortButton = () => {
  const { changeSortDirection } = useContext(Store)

  return (
    <Button
        variant="primary"
        className='btn btn-warning btn-sm'
        onClick={ changeSortDirection }
      >Sort A-Z</Button>
  )
}
