import React, { useEffect, useState } from 'react'
import './styles.scss'

import { Item } from './Item'
import { Controls } from './Controls'

export const ListItems = () => {
  const [list, setList] = useState<any>([])
  const [urlBack, setUrlBack] = useState<string>('')
  const [urlForward, setUrlForward] = useState<string>('')
  
  useEffect(() => {
    if(urlBack==='') callApiList('https://pokeapi.co/api/v2/pokemon?limit=8&offset=0')
  }, [urlBack])

  const callApiList = (urlApi:string) => {
    if(!urlApi) return

    fetch(urlApi)
    .then(response => response.json())
    .then(pokes => {
      setList(pokes.results)
      setUrlBack(pokes.previous)
      setUrlForward(pokes.next)
    })
  }

  return (
    <>
      <div className='items'>
        <ul className='items__list'>
          {
            list.map(({name, url}:any) => <Item key={name} name={name} url={url} />)
          }
        </ul>
        <Controls back={() => callApiList(urlBack)} forward={() => callApiList(urlForward)} />
      </div>
    </>
  )
}
