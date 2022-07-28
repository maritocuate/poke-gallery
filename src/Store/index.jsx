import React, { createContext, useState } from "react"

export const Store = createContext()

export const StoreProvider = ({children}) => {
     
     const [myPokes, setMyPokes] = useState([])

     const updateMyPokes = poke => setMyPokes([...myPokes, poke])

     return(
          <Store.Provider value={{
               myPokes,
               updateMyPokes
               }}>
               { children }
          </Store.Provider>
     )
}