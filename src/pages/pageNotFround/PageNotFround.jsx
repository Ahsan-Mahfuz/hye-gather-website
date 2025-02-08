import React from 'react'
import notFoundPage from '../../assets/404Error.png'

const PageNotFround = () => {
  return (
    <div>
      <img src={notFoundPage} alt="page not found image" className='w-[700px] mx-auto m-10' />
    </div>
  )
}

export default PageNotFround
