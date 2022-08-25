import React from 'react'
import { Item } from './Item'

export const Items = ({ currentItems }:{ currentItems:[] }) => {
  return (
        <>
        {
            currentItems.map(({ name, url }:any) => <Item key={name} name={name} url={url} />)
        }
        </>
  )
}
