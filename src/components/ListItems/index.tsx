import React, { useEffect, useState } from 'react'
import './styles.scss'

export const ListItems = () => {
  const [list, setList] = useState<any>([])
  const [urlBack, setUrlBack] = useState<string>('')
  const [urlForward, setUrlForward] = useState<string>('')
  
  useEffect(() => {
    if(urlBack==='') callApiList('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
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
            list.map((item:any) => console.log(item.url))
          }
        </ul>
      </div>
    </>
  )
}
