import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import { Tween, ScrollTrigger, Reveal } from 'react-gsap'
import { gsap } from 'gsap'

import Footer from '../Components/Footer'
import GoToTop from '../Components/Top'
import Banner_1 from '../assets/aboutBanner.png'
import grayBg from '../assets/grayBg.png'
import img1 from '../assets/about/Asset 35@3x.png'
import img2 from '../assets/about/Asset 34@3x.png'
import img3 from '../assets/about/Asset 36@3x.png'
import img4 from '../assets/about/Asset 15@3x.png'
import img5 from '../assets/about/Asset 16@3x.png'
import img6 from '../assets/about/Asset 17@3x.png'
import img7 from '../assets/about/Asset 37@3x.png'
import first from '../assets/about/1.png'
import second from '../assets/about/2.png'
import third from '../assets/about/3.png'
import fourth from '../assets/about/4.png'
import card from '../assets/card.png'

import p1 from '../assets/about/Asset 18@3x.png'
import p2 from '../assets/about/Asset 19@3x.png'
import p3 from '../assets/about/Asset 20@3x.png'
import p4 from '../assets/about/Asset 21@3x.png'
import p5 from '../assets/about/Asset 22@3x.png'
import p6 from '../assets/about/Asset 23@3x.png'
import p7 from '../assets/about/Asset 24@3x.png'
import p8 from '../assets/about/Asset 25@3x.png'
import p9 from '../assets/about/Asset 26@3x.png'
import p10 from '../assets/about/Asset 27@3x.png'
import p11 from '../assets/about/Asset 28@3x.png'
import p12 from '../assets/about/Asset 29@3x.png'
import p13 from '../assets/about/Asset 30@3x.png'
import p14 from '../assets/about/Asset 31@3x.png'
import p15 from '../assets/about/Asset 32@3x.png'
import p16 from '../assets/about/Asset 33@3x.png'
import { Parallax } from 'react-scroll-parallax'
import { Controller, Scene } from 'react-scrollmagic'

export default function About() {
  return (
    <div
      className='bg-[#dbdbdb] overflow-hidden'
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={'about'} />
      <div className='sm:h-[100vh] relative w-[100vw]  '>
        <div className=' absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh] top-[8vh] right-[5vw]  lg:right-[60vh] z-10'>
          <h1 className=' text-black-700 md:text-3xl text-base ont-extrabold  '>
            WELCOME TO THE LIGHTHOUSE OF
          </h1>
          <h1 className='text-black-500 md:text-3xl text-sm font-bold'>
            TRANSFORMATION
          </h1>
        </div>
        <img
          className='sm:h-[100vh] h-[50vh] sm:mt-0 mt-[24vh] object-cover w-[100vw]'
          src={Banner_1}
          alt=''
        />
      </div>

      <div className='flex flex-col gap-4 mb-[30vh] relative'>
        <h1 className=' mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold md:text-4xl text-xl'>
          OUR VISION
        </h1>

        <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
          To be the lighthouse of transformation in Schools. We will be the
          change makers inside schools by transforming them to become the 21st
          Century Schools and democratizing access to quality education for
          students. We will do so by empowering schools with learning solutions
          and technology through content and operating system. Because we feel
          that an empowered school is a great breeding point for a happier
          student.
        </div>
        <img
          src={img1}
          className='sm:absolute sm:right-[5vw] bottom-0 object-cover 2xl:top-[10vh] xl:top-[36vh] lg:top-[55vh] md:top-[50vh] sm:w-[70vw] w-[100vw] h-auto'
          alt=''
        />
      </div>

      <div className='flex gap-4 items-center w-[100vw] justify-center pl-6 mt-[35vh]'>
        <h3 className='text-gray-700 md:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw] flex flex-col gap-6'>
          <span className='font-extrabold md:text-4xl text-xl text-red-700'>
            OUR MISSION
          </span>

          <span>
            To become the largest school focused distribution platform in India.
            And then globally.
          </span>
        </h3>

        <img src={img2} className='w-[40vw] h-auto' alt='' />
      </div>

      <Reveal repeat>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
          <div className=' mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold md:text-4xl text-xl'>
            <span>THIS HEADING IS FADING IN</span>
          </div>
        </Tween>
      </Reveal>

      <Reveal repeat>
        <Tween
          from={{ opacity: 0, transform: 'translate3d(-100px, 0, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(100px, 0, 0)' }}
          ease='back.out(1.4)'
        >
          <div className=' mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold md:text-4xl text-xl'>
            <span>This headline is coming from left</span>
          </div>
        </Tween>
      </Reveal>

      <div className='flex flex-col gap-8 mb-[40vh] relative'>
        <div className=' mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold md:text-4xl text-xl'>
          <span>MEET THE GUIDING LIGHT</span>
        </div>

        <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
          The brand of Proficiency Learning Solutions Private Limited, Eupheus
          Learning started its operations in June 2017. Based in New Delhi, it
          was bootstrapped by about 40 members who joined the 3-founding member
          team to create a new category in the Indian education market.
        </div>

        <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
          The founding team comprises creative minds with experience of more
          than 120 man-years in starting up and turning around businesses in the
          Education and Training space.
        </div>
        <img
          src={img3}
          className='sm:absolute right-[3vw] bottom-0 object-cover xl:top-[25vh] 2xl:top-[2vh] lg:top-[37vh] md:top-[50vh] top-[23vh] sm:w-[70vw] w-[100vw] h-auto'
          alt=''
        />
      </div>

      <div className='flex sm:flex-row flex-col gap-7 items-center'>
        <div className='flex flex-col gap-12 sm:mb-[30vh] relative'>
          <div className=' mt-[4rem] lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-3xl text-xl'>
            <span className='text-gray-800 font-bold'>
              SARVESH SHRIVASTAVA,
            </span>
            <br />
            <span className='text-gray-600 font-semibold'>
              FOUNDER AND MANAGING DIRECTOR
            </span>
          </div>

          <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
            Sarvesh brings with him more than 32 years’ experience in education
            and IT sectors, during which he has held progressive leadership
            positions in organizations such as General Electric, Corning,
            Telecom Australia, NIIT, Pearson and Encyclopaedia Britannica. He
            also successfully started and ran his own company undertaking
            several EPC optical fibre contracts which were the first in India
            including the first franchise of pay phones in the 1990s. His last
            stint was as Managing Director at Encyclopaedia Britannica South
            Asia, Executive. He holds a master’s degree in chemical engineering
            from the University of Illinois, Chicago, US.
          </div>
        </div>
        <img
          src={img4}
          className='sm:w-[25vw] w-[60vw] shadow-2xl h-auto'
          alt=''
        />
      </div>

      <div className='flex sm:flex-row flex-col gap-7 items-center'>
        <div className='flex flex-col gap-12 sm:mb-[30vh] relative'>
          <div className=' mt-[4rem] lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-3xl text-xl'>
            <span className='text-gray-800 font-bold'>
              VED PRAKASH KHATTRI,
            </span>
            <br />
            <span className='text-gray-600 font-semibold'>
              CO-FOUNDER AND DIRECTOR
            </span>
          </div>

          <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
            Ved has about 26 years’ sales experience in the K12 publishing
            industry space. He has held progressive positions with Suman
            Prakashan, Ratna Sagar, Oxford University Press and Encyclopaedia
            Britannica with credentials of successfully opening new territories
            and grown the business in his tenures at each company. Ved in his
            last assignment was Vice President – K12 at Encyclopaedia Britannica
            South Asia. He holds a bachelor’s degree in commerce.
          </div>
        </div>
        <img
          src={img5}
          className='sm:w-[25vw] w-[60vw] shadow-2xl h-auto'
          alt=''
        />
      </div>

      <div className='flex sm:flex-row flex-col gap-7 items-center'>
        <div className='flex flex-col gap-12 sm:mb-[30vh] relative'>
          <div className=' mt-[4rem] lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-3xl text-xl'>
            <span className='text-gray-800 font-bold'>AMIT KAPOOR,</span>
            <br />
            <span className='text-gray-600 font-semibold'>
              CO-FOUNDER AND DIRECTOR
            </span>
          </div>

          <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
            Amit has more than 19 years’ experience in sales and marketing
            across Education, Training & Entertainment industries covering
            Indian and International markets. His stints at NIIT, Palador
            Pictures, Centum Learning, Across World Education and Encyclopaedia
            Britannica have been focussed on Sales, market entry and growth
            strategies coupled with a focus on business development. Prior to
            founding Eupheus, he was Head – Digital sales at Encyclopaedia
            Britannica. He holds a post graduate diploma in marketing from T.A.
            Pai Management Institute.
          </div>
        </div>
        <img
          src={img6}
          className='sm:w-[25vw] w-[60vw] shadow-2xl h-auto'
          alt=''
        />
      </div>

      {/* persons */}

      <div className='flex flex-col gap-4 mb-[30vh] relative'>
        <div className='hi mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold md:text-4xl text-xl'>
          <span>MEET OUR HEROES OF CHANGE</span>
        </div>

        <div className=' text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl'>
          We are a team of dedicated professionals bringing relevant and
          creative solutions to make a difference in education in India. Get in
          touch! Let’s bring a new dawn of learning together.
        </div>
        <img src={img7} className='' alt='' />

        <ScrollTrigger
          start='100px center'
          end='1000px center'
          markers
          scrub={0.5}
          pin={true}
        >
          <Tween
            to={{
              x: '-100vw',
            }}
          >
            <div className='flex w-fit px-12 h-[1000px] gap-6 sm:flex-nowrap flex-wrap'>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
              <div className='flex flex-col items-center w-[12rem]'>
                <img
                  src={p1}
                  className='border-2 p-2 border-solid border-[#f5ab1d] w-full h-auto'
                  alt=''
                />
                <span className='font-bold sm:text-base text-xs text-gray-800'>
                  DR. REENA PURI
                </span>
                <span className=' text-gray-600 sm:text-sm text-xs'>
                  VP, ISFO OLYMPIAD
                </span>
              </div>
            </div>
          </Tween>
        </ScrollTrigger>
      </div>

      {/* investers section */}

      <div className=' flex flex-col w-[100vw] md:px-[12vw] px-[5vw] gap-[3rem]'>
        <div className=' mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] font-extrabold md:text-4xl text-xl'>
          MEET OUR INVESTORS
        </div>
        <div className='flex sm:flex-row flex-col justify-around'>
          <div
            className='py-[7rem] px-[2rem] bg-no-repeat sm:w-[35vw] w-full min-h-[55vw] max-h-fit'
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className='flex flex-col items-center gap-4'>
              <div className='text-yellow-500 font-bold lg:text-2xl sm:text-xl text-sm'>
                SIXTH SENSE VENTURES (2018)
              </div>
              <img src={first} className='w-[50%] h-auto' alt='' />
              <div className='text-gray-700 sm:text-xl text-xs w-full'>
                Sixth Sense Ventures is India’s first domestic, consumer-centric
                venture fund, founded by Nikhil Vora (Ex-Managing Director of
                IDFC Securities), who is regarded as one of the strongest
                analytical minds in the country. They like to back “first
                generation” entrepreneurs and are flexible regards the stage and
                size of investments as long as the business addresses the
                consumer needs “more efficiently”, be it products, services,
                distribution, analytics, etc.
              </div>
            </div>
          </div>
          <div
            className='py-[7rem] px-[2rem] bg-no-repeat sm:w-[35vw] w-full'
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className='flex flex-col items-center gap-4'>
              <div className='text-yellow-500 font-bold lg:text-2xl sm:text-xl text-sm'>
                YUJ VENTURES (2020)
              </div>
              <img src={second} className='w-[50%] h-auto' alt='' />
              <div className='text-gray-700 sm:text-xl text-xs w-full'>
                Yuj Ventures is the private investing arm of the Yuj platform.
                Backed by the family office of Sid Yog, Founding Partner of a
                global investment firm, The Xander Group Inc., Yuj Ventures
                invests in new and innovative ideas and companies; helps rapidly
                growing companies scale in emerging markets; and enables
                networks, alliances and joint ventures that support emerging
                markets’ entry. The firm has invested in companies across India,
                Hong Kong, Singapore, the United States, Russia, Latin America,
                and the United Kingdom.
              </div>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-around'>
          <div
            className='py-[1rem] px-[2rem] bg-no-repeat sm:w-[37vw] w-full sm:min-h-[69vw] min-h-[130vw] max-h-fit'
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className='flex flex-col gap-4 items-center'>
              <div className='text-yellow-500 font-bold lg:text-2xl pt-[10vh] sm:text-xl text-sm'>
                UNITED EDUCATION COMPANY AND AL RAYAN HOLDING COMPANY, KUWAIT
                (2021)
              </div>
              <img src={third} className='w-[50%] h-auto' alt='' />
              <div className='text-gray-700 sm:text-xl text-xs w-full'>
                United Education Company is a Kuwaiti shareholding company
                registered and incorporated in Kuwait on 18th February 2003 with
                a paid-up capital of KD 10 million to capitalize on
                opportunities in the educational sector. The Company commenced
                its operations in 2004 with establishing The American University
                of Kuwait. In 2012 it established The American United School and
                acquired Al-Rayan Holding Company with its 6 schools with a
                total combined capacity of over 12,500 students, offering
                different curriculums to cater to the local market's diverse
                demographic composition. The company will continue to seek
                opportunities in the educational sector and expand its asset
                base within the GCC region.
              </div>
            </div>
          </div>

          <div
            className='py-[1rem] px-[2rem] bg-no-repeat sm:w-[37vw] w-full sm:min-h-[78vw] min-h-[142vw] max-h-fit'
            style={{
              backgroundImage: `url(${card})`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className='flex flex-col gap-4 items-center'>
              <div className='text-yellow-500 pt-[10vh] font-bold lg:text-2xl sm:text-xl text-sm'>
                UNITED EDUCATION COMPANY AND AL RAYAN HOLDING COMPANY, KUWAIT
                (2021)
              </div>
              <img src={fourth} className='w-[50%] h-auto' alt='' />
              <div className='text-gray-700 sm:text-xl text-xs w-full'>
                Lightrock provides patient capital and business-building support
                to world-class entrepreneurs across three key themes - Unlocking
                human potential, equitably; Building resource efficiency,
                sustainably; Reimagining business productivity, responsibly -
                covering key sectors such as Food and Agriculture, Logistics,
                Mobility, Healthcare, Renewable energy, Education, Future of
                Work and Financial services. Their thematic platform approach to
                investing stems from their belief that every firm operates not
                in isolation but through a set of symbiotic relationships with
                players across the value chain in their sector. The ability to
                think through these interconnections and find ways to improve
                system-level outcomes across firms can create a virtuous cycle
                of value creation that significantly outpaces mere individual
                firm growth. Lightrock invests between $10 and $50M in a
                company. They also can invest significantly higher amounts in
                situations that offer a compelling fit to their investment
                thesis and mission.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <GoToTop />
    </div>
  )
}
