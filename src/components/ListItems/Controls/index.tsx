import React, { useEffect, useState } from 'react'
import './styles.scss'

export const Controls = ({ back, forward }:{back:any, forward:any}) => {
  const [limit, setLimit] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    (page < 2) ? setLimit(false) : setLimit(true)
  }, [page])

  const goBack = ():void => {
    if (page > 1) {
      back()
      setPage(page - 1)
    }
  }
  const goForward = ():void => {
    forward()
    setPage(page + 1)
  }

  return (
    <div className='controls'>
      <div className={`controls__button arrow ${limit}`} onClick={() => goBack()}>&#x2190;</div>
      <div className='page-num'>{page}</div>
      <div className='controls__button arrow' onClick={() => goForward()}>&#x2192;</div>
    </div>
  )
}
