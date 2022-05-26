import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import Banner_1 from "../assets/eventBanner.png";
import power from "../assets/power.png";
import grayBg from "../assets/grayBg.png";
import { Parallax } from "react-scroll-parallax";

export default function Events() {
  return (
    <>
   <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar />
      <div className="h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[20vh] md:top-[15vh] md:right-[20vw] sm:top-[30vh]  lg:right-[40vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base  ">
          PROMOTING BETTER LEARNING,<br />
            EFFECTIVE TEACHING & WHOLESOME<br />
            DEVELOPMENT WITH
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-extrabold">
          NATIONAL AND GLOBAL EVENTS
          </h1>
        </div>
        <img className="h-[100vh]" src={Banner_1} alt="" />
      </div>
      <div className=" my-[5rem] text-gray-700 text-left lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
      Every year, Eupheus Learning hosts several national and global events to
    promote the purpose of better learning, effective teaching &amp;
    wholesome development in the education systems across the world.
      </div>

     <div className='my-[5rem]'>
         
        <div className=" mt-[8rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-4xl text-xl">
          <span className='font-bold '>GAMIFIED WAY OF</span>
          <span className='font-extrabold ' >LEARNING TO CODE</span>
        </div>

        <div className=" mt-[3rem] text-black-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-4xl text-xl">
        <span className='font-bold ' >CODE2WIN</span>
          <span className=' '>NATIONAL CODING COMPETITION</span>
          <span  >CODE2WIN <span className='font-bold '>ROBOGARDEN</span> </span>
        </div>
     
      <div className=" mt-[1rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
        Code2Win is a National-level Coding Competition for<br />
        students from Grade 1 to 12. This gamified environment<br />
        enables young minds to develop their competency and<br />
        encourages them to ‘learn’, ‘participate’, ‘win scholarships’<br />
        and ‘get certificate’. Needless to mention that they can<br />
        choose Coding as a life skill too.
      </div>
     
     </div>
     
     <div className="my-[5rem]">
     <div className=" mt-[3rem] text-black-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-4xl text-xl">
     <span className='font-bold ' >FOR GRADES 1-4</span>
     </div>
     <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
     Game-based course in which missions<br />
    are achieved by a program written by<br />
    Blocks. While preparing for a birthday<br />
    party, students will learn repeat loop<br />
    and Robo sensors of colors and text.
      </div>
      <Parallax rotate={[180, 0]}>
          <img src={power} className="w-[40vw] h-auto" alt="" />
        </Parallax>
     </div>

     <Footer />
    </div>
    </>
  )
}
