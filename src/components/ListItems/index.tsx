import React from 'react'
import './styles.scss'

import Pagination from '../Pagination'
import { Item } from './Item'

interface Pokemon {
  name: string;
  url: string;
}
interface Props {
  pokemons: Pokemon[];
  total: number;
  page: number
  setPage: (value:number) => void
}

export const ListItems = ({ pokemons, total, page, setPage }: Props) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0)
    setPage(nextPage)
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1)
    setPage(nextPage)
  }

  return (
    <>
      <ul className='items items__list'>
        {pokemons.map((pokemon, i) => {
          return <Item key={i} data={pokemon} />
        })}
      </ul>

      <nav className='items__nav'>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </nav>
    </>
  )
}
