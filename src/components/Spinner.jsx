import React from 'react'
import Loader from 'react-loader-spinner'
const Spinner = ({ message, type, height, width }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full loader'>
      <Loader
        type={type || 'Bars'}
        color='#00bfff'
        secondaryColor='#000000'
        height={height || 50}
        width={width || 200}
        className='m-5'
      />
      <p className='loader-message'>{message}</p>
    </div>
  )
}

export default Spinner
