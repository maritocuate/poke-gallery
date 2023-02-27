import React, { useEffect, useState } from 'react'
import './App.scss'

import { getPokes, getPokesData } from './api/axios'
import { Header } from './components/Header'
import { ListItems } from './components/ListItems'
import { MyPokes } from './components/MyPokes'
import { Navbar } from './components/Navbar'
import { StoreProvider } from './Store'

interface Pokemon {
  name: string
  url: string
}

function App () {
  const [show, setShow] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searching, setSearching] = useState<boolean>(false)

  useEffect(() => {
    if (searching) {
      return
    }
    async function fetchData () {
      const data = await getPokes(8, 8 * page)
      const promises = data.results.map(async (pokemon:Pokemon) => {
        return await getPokesData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotal(Math.ceil(data.count / 25))
      setSearching(false)
    }
    fetchData()
  }, [page])

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className='container app'>
      <Header />
      <StoreProvider>
        <Navbar handleShow={handleShow} />
        <MyPokes show={show} handleClose={handleClose} />
        <main>
          {
            pokemons.length
              ? (
              <ListItems
                page={page}
                setPage={setPage}
                pokemons={pokemons}
                total={total}
              />
                )
              : null
          }
        </main>
      </StoreProvider>
    </div>
  )
}

export default App
