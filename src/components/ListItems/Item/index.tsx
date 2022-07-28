import React, { useEffect, useState } from 'react'
import './styles.scss'

export const Item = ({ name, url }:{ name:string, url:string }) => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [weight, setWeight] = useState<string>('')

  useEffect(() => {
    if(imageUrl==='') callApiList(url)
  }, [imageUrl])

  const callApiList = async (urlApi:string) => {
    if(!urlApi) return

    await fetch(urlApi)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImageUrl(data.sprites.other.dream_world.front_default)
        setWeight(data.weight)
      })
  }

  return (
    <li className='item'>
      <div className="card bg-dark item__card">
          <img className='card-img-top item__image' src={imageUrl} alt={name} />
          <div className="card-body">
            <p className="card-title">{name.toUpperCase()}</p>
            <p className="card-text item__description">Weight: {weight}</p>
          </div>
        </div>
    </li>
  )
}
