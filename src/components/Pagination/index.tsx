import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './styles.scss'

interface Props {
  onLeftClick: () => void
  onRightClick: () => void
  page: number
  totalPages: number
}

const Pagination: React.FC<Props> = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props

  return (
    <div className="pagination">
      <span className="pagination__btn" onClick={onLeftClick}>
        <FaArrowLeft />
      </span>
      <div className="pagination__counter">
        {page} / {totalPages}
      </div>
      <span className="pagination__btn" onClick={onRightClick}>
        <FaArrowRight />
      </span>
    </div>
  )
}

export default Pagination
