import React, { createContext, useState } from 'react'

export const Store = createContext()

export const StoreProvider = ({ children }) => {
  const [myPokes, setMyPokes] = useState([])
  const [searchBy, setSearchBy] = useState('')
  const [sort, setSort] = useState('a-z')

  const updateMyPokes = poke => setMyPokes([...myPokes, poke])

  const deletePoke = poke => {
    const filtered = myPokes.filter(item => item !== poke)
    setMyPokes(filtered)
  }

  const setSearch = name => setSearchBy(name)

  const changeSortDirection = e => {
    setSort(e)
  }

  return (
          <Store.Provider value={{
            myPokes,
            searchBy,
            sort,
            updateMyPokes,
            setSearch,
            deletePoke,
            changeSortDirection
          }}>
               { children }
          </Store.Provider>
  )
}
