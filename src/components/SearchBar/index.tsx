import React, { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'
import './styles.scss'

export const SearchBar = ({ onSearch } : { onSearch:(value:string) => void }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleClick = (e:any) => {
    e.preventDefault()
    onSearch(inputValue)
  }

  const initSearch = (e:string) => {
    setInputValue(e)
  }

  return (
    <Form onSubmit={handleClick}>
      <InputGroup className="search-bar px-5">
        <Form.Control
          placeholder="Write a name"
          onChange={ e => initSearch(e.target.value) }
          />
        <Button type='submit' variant="warning">Search</Button>
      </InputGroup>

    </Form>
  )
}
