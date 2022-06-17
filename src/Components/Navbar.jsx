import React from 'react'
import grayBg from '../assets/grayBg.png'
import logo from '../assets/logo.png'
import menuLine from '../assets/menuLine.png'
import { CircleOutlined, Circle } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ highlight }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`lg:px-16 md:px-4 gap-4 sm:px-16 fixed z-50 lg:h-[13vh] md:h-[15vh] sm:h-[20vh]  px-6 py-4 flex flex-col md:flex-row items-center justify-between bg-[#dbdbdb] w-[100vw]`}
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <img
        src={logo}
        onClick={() => navigate('/')}
        className='md:w-auto cursor-pointer md:h-[4rem] w-[10rem] h-[3rem]'
        alt=''
      />

      <div
        className='flex lg:gap-[5.2rem] 3xl:gap-[8rem] md:w-[60%] md:gap-8 sm:gap-16 gap-4 md:mr-12 mt-6 bg-no-repeat'
        style={{ backgroundImage: `url(${menuLine})` }}
      >
        <div
          onClick={() => navigate('/')}
          className={` flex flex-col cursor-pointer ${
            highlight === 'home' ? 'text-red-800' : null
          } font-semibold  gap-1 justify-center items-center`}
        >
          {highlight === 'home' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/')}
            />
          )}
          <span className='text-xs sm:text-base 2xl:text-2xl flex gap-1'>
            <span>Why</span>
            <span>Eupheus</span>
          </span>
        </div>
        <div
          onClick={() => navigate('/about')}
          className={` flex flex-col cursor-pointer ${
            highlight === 'about' ? 'text-red-800' : null
          } font-semibold gap-1 justify-center items-center`}
        >
          {highlight === 'about' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              // onClick={() => navigate("/about")}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/about')}
            />
          )}

          <span className='text-xs sm:text-base 2xl:text-2xl flex gap-1'>
            <span>About</span>
            <span>Us</span>
          </span>
        </div>
        <div
          className={`flex flex-col ${
            highlight === 'solutions' ? 'text-red-800' : null
          } gap-1 cursor-pointer relative group font-semibold justify-center items-center`}
        >
          {highlight === 'solutions' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/solutions')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/solutions')}
            />
          )}

          <span
            onClick={() => navigate('/solutions')}
            className='text-xs sm:text-base 2xl:text-2xl'
          >
            Solutions
          </span>
          <div
            style={{ backgroundImage: `url(${grayBg})` }}
            className='absolute bg-[#dbdbdb] group-hover:top-[3rem] top-[4rem] delay-150 rounded-md flex justify-center px-[2rem] py-[1rem] transition-all duration-[400] ease-linear sm:block hidden group-hover:visible group-hover:opacity-100 invisible opacity-0'
          >
            <div className='flex flex-col gap-2'>
              <h1
                onClick={() => navigate('/curriculum')}
                className='hover:translate-x-2 transition-all duration-200 ease-linear'
              >
                Curricular
              </h1>

              <h1
                onClick={() => navigate('/digital')}
                className='hover:translate-x-2 transition-all duration-200 ease-linear'
              >
                Suplimental
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-1 group relative cursor-pointer ${
            highlight === 'events' ? 'text-red-800' : null
          } font-semibold justify-center items-center`}
        >
          {highlight === 'events' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/events')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/events')}
            />
          )}
          <span
            onClick={() => navigate('/events')}
            className='text-xs sm:text-base 2xl:text-2xl'
          >
            Competitions
          </span>
          <div
            style={{ backgroundImage: `url(${grayBg})` }}
            className='absolute bg-[#dbdbdb] group-hover:top-[3rem] top-[4rem] delay-150 rounded-md flex justify-center px-[2rem] py-[1rem] transition-all duration-[400] ease-linear sm:block hidden group-hover:visible group-hover:opacity-100 invisible opacity-0'
          >
            <div className='flex flex-col gap-2'>
              <h1
                onClick={() => navigate('/ifso')}
                className='hover:translate-x-2 transition-all duration-200 ease-linear'
              >
                Olympiad
              </h1>

              <h1
                onClick={() => navigate('/code2win')}
                className='hover:translate-x-2 transition-all duration-200 ease-linear'
              >
                Coding
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col relative gap-1 group cursor-pointer ${
            highlight === 'media' ? 'text-red-800' : null
          } font-semibold justify-center items-center`}
        >
          {highlight === 'media' ? (
            <Circle
              className='!text-[0.9rem] text-red-800 cursor-pointer'
              onClick={() => navigate('/media')}
            />
          ) : (
            <CircleOutlined
              className='!text-[0.9rem] cursor-pointer'
              onClick={() => navigate('/media')}
            />
          )}
          <span
            onClick={() => navigate('/media')}
            className='text-xs sm:text-base 2xl:text-2xl'
          >
            News
          </span>
          <div
            style={{ backgroundImage: `url(${grayBg})` }}
            className='absolute bg-[#dbdbdb] group-hover:top-[3rem] top-[4rem] delay-150 rounded-md flex justify-center px-[2rem] py-[1rem] transition-all duration-[400] ease-linear sm:block hidden group-hover:visible group-hover:opacity-100 invisible opacity-0'
          >
            <div className='flex flex-col gap-2'>
              <h1
                onClick={() => navigate('/awards')}
                className='hover:translate-x-2 transition-all duration-200 ease-linear'
              >
                Awards
              </h1>

              <h1 className='hover:translate-x-2 transition-all duration-200 ease-linear'>
                Articles
              </h1>
              <h1 className='hover:translate-x-2 transition-all duration-200 ease-linear'>
                Announcements
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
