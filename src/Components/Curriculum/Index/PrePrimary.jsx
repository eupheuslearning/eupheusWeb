import React, { useRef } from 'react'
import { Close } from '@mui/icons-material'

const PrePrimary = ({ setIndex, setPage, executeScroll }) => {
  const handlePage = (name) => {
    setIndex('default')
    setPage(name)
    setTimeout(() => {
      executeScroll()
    }, 100)
  }
  return (
    <div
      // ref={scroll}
      className='w-[100%] h-full flex justify-center items-center fixed top-0 left-0 z-[60] bg-[rgba(0,0,0,0.75)]'
    >
      <Close
        onClick={() => setIndex('default')}
        className='fixed z-[60] top-4 right-4 cursor-pointer !text-[3rem]'
      />
      <div className='flex flex-col sm:w-1/2 w-full'>
        <span className='px-[2rem] ml-3 py-[1rem] text-lg bg-red-600 font-Pmarks text-white rounded-t-lg w-fit'>
          PRE PRIMARY
        </span>

        <ol className='px-[2rem] py-[1rem] w-full flex border-[3px] text-xl font-semibold border-red-600 text-red-600 flex-col gap-4 rounded-md bg-gray-100'>
          <li
            onClick={() => handlePage('zoom')}
            className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'
          >
            <span className='mr-4'>1.</span> ZOOM!
          </li>
          <li
            onClick={() => handlePage('alpha_fun')}
            className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'
          >
            <span className='mr-4'>2.</span> ALPHA FUN
          </li>
          <li
            onClick={() => handlePage('dot_dash')}
            className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'
          >
            <span className='mr-4'>3.</span> DOT & DASH
          </li>
          <li className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'>
            <span className='mr-4'>4.</span> NUMBER MAX
          </li>
          <li className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'>
            <span className='mr-4'>5.</span> SPLASH
          </li>
          <li className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'>
            <span className='mr-4'>6.</span> PITARA
          </li>
          <li className='cursor-pointer hover:translate-x-4 transition-all duration-150 ease-out'>
            <span className='mr-4'>7.</span> RADIANT WAY (PRE-PRIMER AND PRIMER)
          </li>
        </ol>
      </div>
    </div>
  )
}

export default PrePrimary
