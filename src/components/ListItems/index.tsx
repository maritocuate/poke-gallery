import React, { useEffect, useState } from 'react'
import './styles.scss'

import ReactPaginate from 'react-paginate'
import { Items } from './Items'

export const ListItems = ({ apiData }:{apiData:any}) => {
  // const [list, setList] = useState<any>([])

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState<number>(0)
  const [itemOffset, setItemOffset] = useState<number>(0)
  const itemsPerPage = 8

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(apiData.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(apiData.length / itemsPerPage))
  }, [apiData, itemOffset, itemsPerPage])

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % apiData.length
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
              />
            </nav>
            </>
              )
            : null
        }
      </div>
    </>
  )
}
