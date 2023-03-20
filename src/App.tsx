import React, { useEffect, useState } from 'react'
import './App.scss'

import { Pokemon } from './interfaces'
import { getPokes, getPokesData, searchPokemon } from './api/fetch'
import { Header } from './components/Header'
import { ListItems } from './components/ListItems'
import { MyPokes } from './components/MyPokes'
import { Navbar } from './components/Navbar'
import { SearchBar } from './components/SearchBar'
import { StoreProvider } from './Store'

function App () {
  const [loading, setLoading] = useState<boolean>(true)
  const [show, setShow] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [searching, setSearching] = useState<boolean>(false)
  const [notFound, setNotFound] = useState<boolean>(false)

  useEffect(() => {
    if (!searching) {
      fetchData()
    }
  }, [page])

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await getPokes(8, 8 * page)
      const promises = data.results.map(async (pokemon:Pokemon) => {
        return await getPokesData(pokemon.url)
      })
      const results = await Promise.all(promises)
      if (promises.length === results.length) setLoading(false)

      setPokemons(results)
      setTotal(Math.ceil(data.count / 25))
      setSearching(false)
    } catch (err) {}
  }

  const onSearch = async (inputPokemon:string) => {
    if (!inputPokemon) {
      return fetchData()
    }
    setNotFound(false)
    setSearching(true)
    const result = await searchPokemon(inputPokemon)
    if (!result) {
      setNotFound(true)
      return
    } else {
      setPokemons([result])
      setPage(0)
      setTotal(1)
    }
    setSearching(false)
  }

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className='container app'>
      <Header />
      <StoreProvider>
        <SearchBar onSearch={onSearch} />
        <Navbar handleShow={handleShow} />
        <MyPokes show={show} handleClose={handleClose} />
        <main>
          {notFound
            ? (
              <div className="app__notfound">
                Pokemon not found
              </div>
              )
            : (
              <ListItems
                page={page}
                setPage={setPage}
                pokemons={pokemons}
                total={total}
                loading={loading}
              />
              )}
        </main>
      </StoreProvider>
    </div>
  )
}

export default App
