import React, { useState } from 'react'
import './App.scss';

import { Header } from './components/Header'
import { ListItems } from './components/ListItems'
import { MyPokes } from './components/MyPokes'
import { Navbar } from './components/Navbar'

function App() {
  const [show, setShow] = useState<boolean>(false)
  
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  
  return (
    <div className='container app'>
      <Header />
      <Navbar handleShow={handleShow} />
      <MyPokes show={show} handleClose={handleClose} />
      <main>
        <ListItems />
      </main>
    </div>
  );
}

export default App;
