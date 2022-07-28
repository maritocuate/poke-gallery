import React, { createContext, useState } from "react"

export const Store = createContext()

export const StoreProvider = ({children}) => {
     
     const [myPokes, setMyPokes] = useState([])

     const updateMyPokes = poke => setMyPokes([...myPokes, poke])

     const deletePoke = poke => {
          const filtered = myPokes.filter(item => item!==poke)
          setMyPokes(filtered)
     }

     return(
          <Store.Provider value={{
               myPokes,
               updateMyPokes,
               deletePoke
               }}>
               { children }
          </Store.Provider>
     )
}