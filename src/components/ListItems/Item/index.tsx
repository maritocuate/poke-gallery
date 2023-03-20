import React, { useContext, useRef } from 'react'
import './styles.scss'

import { Store } from '../../../Store'
import { gsap, Elastic } from 'gsap'

export const Item = ({ data } : { data:any }) => {
  const { name, weight, sprites } = data
  const { myPokes, updateMyPokes } = useContext(Store)
  const imgRef = useRef(null)

  const checkIfExist = () => !!(myPokes.filter((item:string) => item === name).length)

  const handleImageLoad = () => {
    gsap.set(imgRef.current, { opacity: 1 })
    gsap.from(imgRef.current, { opacity: 0, scale: 0.8, duration: 0.8, ease: Elastic.easeOut.config(1, 0.3) })
  }

  return (
    <div className={`item ${checkIfExist() ? 'disabled' : ''}`}>
      <div className="card bg-dark item__card" ref={imgRef}>
        <img
          className='card-img-top item__image loaded'
          // eslint-disable-next-line
          src={sprites.other["official-artwork"].front_default}
          alt={name}
          onLoad={handleImageLoad}
        />
        <div className="card-body">
          <p className="card-title">{name.toUpperCase()}</p>
          <p className="card-text item__description">Weight: {weight}</p>
        </div>
      </div>
      <span className='item__hover' onClick={() => !checkIfExist() ? updateMyPokes(name) : null}>+</span>
    </div>
  )
}
