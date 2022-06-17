import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Components/Navbar'
import GoToTop from '../Components/Top'
import grayBg from '../assets/grayBg.png'
import Footer from '../Components/Footer'
import duck from '../assets/curriculum/duck.png'
import Sidebar from '../Components/Sidebar'
import Zoom from '../Components/Curriculum/prePrimary/Zoom'
import AlphaFun from '../Components/Curriculum/prePrimary/AlphaFun'
import DotDash from '../Components/Curriculum/prePrimary/DotDash'
import PrePrimary from '../Components/Curriculum/Index/PrePrimary'

const Curriculum = () => {
  const [sOpen, setSopen] = useState(true)
  const [page, setPage] = useState('default')
  const [index, setIndex] = useState('default')

  const scroll = useRef(null)

  const executeScroll = () => scroll.current.scrollIntoView()

  useEffect(() => {
    document.title = 'Solutions - Eupheus'
  }, [])

  const changePage = () => {
    switch (page) {
      case 'default':
        return (
          <div className='w-full 2xl:ml-[10rem] ml-8 xl:ml-[6rem] flex flex-col sm:pl-[3rem] gap-4'>
            <div className='  text-gray-700 w-full items-start flex flex-col  md:text-2xl text-base'>
              <span>To wade through</span>
              <span>difficult concepts,</span>
            </div>
            <div className=' text-red-700 font-bold flex flex-col items-start w-full md:text-5xl text-base'>
              <span>Your Power to</span>
              <span>Navigate ...</span>
            </div>

            <div className=' text-gray-700 flex flex-col items-start  md:text-2xl text-base'>
              <span>Your Learning Partner</span>
              <span>Preparing you for the future!</span>
            </div>
            <div className='flex justify-center w-full'>
              <img
                src={duck}
                className='lg:w-[30vw] w-[50vw] 2xl:w-[38vw] h-auto'
                alt=''
              />
            </div>
          </div>
        )
        break
      case 'zoom':
        return (
          <div ref={scroll}>
            <Zoom sOpen={sOpen} />
          </div>
        )
        break
      case 'alpha_fun':
        return (
          <div ref={scroll}>
            <AlphaFun sOpen={sOpen} />
          </div>
        )
        break
      case 'dot_dash':
        return (
          <div ref={scroll}>
            <DotDash sOpen={sOpen} />
          </div>
        )
        break

      default:
        break
    }
  }

  const changeIndex = () => {
    switch (index) {
      case 'default':
        return null
        break
      case 'pp':
        return (
          <PrePrimary
            executeScroll={executeScroll}
            setIndex={setIndex}
            setPage={setPage}
          />
        )
        break

      default:
        break
    }
  }

  return (
    <div
      className='bg-[#dbdbdb] overflow-hidden'
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      {changeIndex()}
      <Navbar highlight={'solutions'} />
      <div className='w-[100vw] flex flex-col gap-[2rem]'>
        {/* <Sidebar
          sOpen={sOpen}
          setSopen={setSopen}
          type={"curriculum"}
          setPage={setPage}
        /> */}
        <div className='w-full grid sm:grid-rows-2 grid-rows-3 sm:grid-cols-3 grid-cols-2 gap-3 sm:px-[3rem] px-2 sm:pt-8 pt-[13rem] lg:mt-[16vh] md:mt-[18vh] sm:mt-[22vh]'>
          <span
            onClick={() => setIndex('pp')}
            className=' w-full flex justify-center cursor-pointer hover:scale-95 transition-all duration-200 ease-linear hover:shadow-2xl items-center rounded-md sm:text-[2rem] text-sm sm:py-[5rem] py-4 bg-red-600 font-Pmarks text-white'
          >
            PRE-PRIMARY
          </span>
          <span className=' w-full flex justify-center cursor-pointer hover:scale-95 transition-all duration-200 ease-linear hover:shadow-2xl items-center rounded-md sm:text-[2rem] text-sm sm:py-[5rem] py-4 bg-purple-800 font-Pmarks text-white'>
            CBSE SOLUTIONS
          </span>
          <span className=' w-full flex justify-center cursor-pointer hover:scale-95 transition-all duration-200 ease-linear hover:shadow-2xl items-center rounded-md sm:text-[2rem] text-sm sm:py-[5rem] py-4 bg-orange-600 font-Pmarks text-white'>
            ICSE SOLUTIONS
          </span>
          <span className=' w-full flex justify-center cursor-pointer hover:scale-95 transition-all duration-200 ease-linear hover:shadow-2xl items-center rounded-md sm:text-[1.5rem] text-sm sm:py-[5rem] py-4 bg-green-600 font-Pmarks text-white'>
            SKILL DEVELOPMENT {window.innerWidth < 500 ? <br /> : null}{' '}
            SOLUTIONS
          </span>
          <span className=' w-full flex justify-center cursor-pointer hover:scale-95 transition-all duration-200 ease-linear hover:shadow-2xl items-center rounded-md sm:text-[2rem] text-sm sm:py-[5rem] py-4 bg-blue-800 font-Pmarks text-white'>
            REFERENCES
          </span>
          <span className=' w-full flex justify-center cursor-pointer hover:scale-95 transition-all duration-200 ease-linear hover:shadow-2xl items-center  rounded-md sm:text-[2rem] text-sm sm:py-[5rem] py-4 bg-pink-600 font-Pmarks text-white'>
            STATE BOARD{window.innerWidth < 500 ? <br /> : null} SOLUTIONS
          </span>
        </div>
        {changePage()}
      </div>
      <div className='sticky bottom-0'>
        <Footer />
      </div>
      <GoToTop />
    </div>
  )
}

export default Curriculum
