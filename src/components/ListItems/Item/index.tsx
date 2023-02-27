import React, { useContext } from 'react'
import './styles.scss'

import { Store } from '../../../Store'

export const Item = ({ data } : { data:any }) => {
  const { name, weight, sprites } = data
  const { myPokes, updateMyPokes } = useContext(Store)

  const checkIfExist = () => !!(myPokes.filter((item:string) => item === name).length)

  return (
    <li className={`item ${checkIfExist() ? 'disabled' : ''}`}>
      <div className="card bg-dark item__card">
        <img
          className='card-img-top item__image loaded'
          src={sprites.front_default}
          alt={name}
        />
        <div className="card-body">
          <p className="card-title">{name.toUpperCase()}</p>
          <p className="card-text item__description">Weight: {weight}</p>
        </div>
      </div>
      <span className='item__hover' onClick={() => !checkIfExist() ? updateMyPokes(name) : null}>+</span>
    </li>
  )
}
