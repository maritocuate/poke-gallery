import React, { useContext, useEffect, useState } from 'react'
import './styles.scss'

import ReactPaginate from 'react-paginate'
import { Items } from './Items'
import { Store } from '../../Store'

export const ListItems = ({ apiData }:{apiData:any}) => {
  const [list, setList] = useState<any>([])

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState<number>(0)
  const [itemOffset, setItemOffset] = useState<number>(0)
  const itemsPerPage = 8

  const { searchBy } = useContext(Store)

  useEffect(() => {
    if (searchBy !== '') {
      const regexp = new RegExp(searchBy, 'i')
      const filteredItems = apiData.filter((x:any) => regexp.test(x.name))
      setList(filteredItems)
      if (!filteredItems.length) {
        setCurrentItems(null)
        return
      }
    } else {
      setList(apiData)
    }
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(list.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(list.length / itemsPerPage))
  }, [apiData, itemOffset, itemsPerPage, searchBy])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % list.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <div className='items'>
        {
          currentItems
            ? (
            <>
            <ul className='items__list'>
              <Items currentItems={ currentItems } />
            </ul>
            <nav className='items__nav'>
              <ReactPaginate
                marginPagesDisplayed={1}
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"

                breakClassName={'page-item'}
                breakLinkClassName={'page-link bg-dark text-warning'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link bg-dark text-warning'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link bg-dark text-warning'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link bg-dark text-warning'}
                activeClassName={'active'}
                disabledClassName={'text-dark'}
              />
            </nav>
            </>
              )
            : (
              <h1>No hay resultados</h1>
              )
        }
      </div>
    </>
  )
}
