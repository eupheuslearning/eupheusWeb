import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";

export default function Media() {
  return (
    
    <div
       className="bg-[#dbdbdb] overflow-hidden"
       style={{ backgroundImage: `url(${grayBg})` }}
     >
       <Navbar />
       <div className="h-[100vh] relative w-[100vw]  ">
         <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh]  lg:right-[60vh] z-10">
           <h1 className=" text-black-700 md:text-3xl text-base ont-extrabold  ">
           EUPHEUS LEARNING IN
           </h1>
           <h1 className="text-black-500 md:text-3xl text-sm font-bold">
           THE LIMELIGHT
           </h1>
         </div>
         <img className="h-[100vh] w-[100vw]" src={Banner_1} alt="" />
       </div>
      <Footer />
     </div>
  )
}
