import React, { useState } from 'react'
import './App.scss'

import { Header } from './components/Header'
import { ListItems } from './components/ListItems'
import { MyPokes } from './components/MyPokes'
import { Navbar } from './components/Navbar'
import { StoreProvider } from './Store'

function App () {
  const [show, setShow] = useState<boolean>(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className='container app'>
      <Header />
      <StoreProvider>
        <Navbar handleShow={handleShow} />
        <MyPokes show={show} handleClose={handleClose} />
        <main>
          <ListItems />
        </main>
      </StoreProvider>
    </div>
  )
}

export default App
