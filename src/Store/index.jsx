import React, { createContext, useState } from 'react'

export const Store = createContext()

export const StoreProvider = ({ children }) => {
  const [myPokes, setMyPokes] = useState([])
  const [sort, setSort] = useState('a-z')

  const updateMyPokes = poke => setMyPokes([...myPokes, poke])

  const deletePoke = poke => {
    const filtered = myPokes.filter(item => item !== poke)
    setMyPokes(filtered)
  }

  const changeSortDirection = e => {
    setSort(e)
  }

  return (
          <Store.Provider value={{
            myPokes,
            sort,
            updateMyPokes,
            deletePoke,
            changeSortDirection
          }}>
               { children }
          </Store.Provider>
  )
}
