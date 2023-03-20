import React from 'react'
import './styles.scss'
import { FaSpinner } from 'react-icons/fa'

import { Pokemon } from '../../interfaces'
import Pagination from '../Pagination'
import { Item } from './Item'
interface ListItemsProps {
  pokemons: Pokemon[]
  total: number
  page: number
  setPage: (value:number) => void
  loading: boolean
}

export const ListItems = ({ pokemons, total, page, setPage, loading }: ListItemsProps) => {
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
      <div className='items items__list container'>

          {
            loading
              ? (
              <div className='items__loading_container'>
                <div className='items__loading'><FaSpinner /></div>
              </div>
                )
              : (
                <div className='row'>
                  {
                  pokemons.map((pokemon, i) => {
                    return (
                      <div key={i} className="col-sm">
                        <Item data={pokemon} />
                      </div>
                    )
                  })
                }
                </div>
                )
          }
      </div>

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
