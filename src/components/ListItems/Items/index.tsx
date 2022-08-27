import React from 'react'
import { Item } from './Item'

interface IPoke {
  name: string;
  url: string;
}

interface IProps {
  currentItems: IPoke[];
}

export const Items = (props:IProps) => {
  return (
        <>
        {
            props.currentItems.map(({ name, url }:any) => <Item key={name} name={name} url={url} />)
        }
        </>
  )
}
