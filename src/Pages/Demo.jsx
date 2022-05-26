import React from "react";
import Navbar from "../Components/Navbar";
import Banner_1 from "../assets/banner2.png";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import { Parallax } from "react-scroll-parallax";
const Demo = () => {
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar />
      <div className="h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[20vw] sm:top-[30vh]  lg:right-[40vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base font-extrabold ">
            EUPHEUS OFFERINGS ACROSS ALL
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-semibold">
            DIGITAL PLATFORMS
          </h1>
        </div>
        <img className="h-[100vh]" src={Banner_1} alt="" />
      </div>
      <div className=" m-[5rem]">
      
      </div>

      <Parallax translateX={[-50, 30]} scale={[1, 1]}>
        <div className=" mt-[10rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-4xl text-xl">
          <span>CURRICULAR SOLUTIONS</span>
        </div>
      </Parallax>

      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="w-[60vw] h-[60vh] shadow-3xl "
          src="https://www.youtube.com/embed/J2I1oTQ7p18"
        ></iframe>
      </div>

      <Parallax translateX={[-50, 30]} scale={[1, 1]}>
        <div className=" mt-[10rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-4xl text-xl">
          <span>SUPPLEMENTAL CONTENT SOLUTIONS</span>
        </div>
      </Parallax>

      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="w-[60vw] h-[60vh] shadow-3xl "
          src="https://www.youtube.com/embed/J2I1oTQ7p18"
        ></iframe>
      </div>
      <Parallax translateX={[-50, 30]} scale={[1, 1]}>
        <div className=" mt-[10rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-4xl text-xl">
          <span>21ST CENTURY SCHOOL OS</span>
        </div>
      </Parallax>

      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="w-[60vw] h-[60vh] shadow-3xl "
          src="https://www.youtube.com/embed/J2I1oTQ7p18"
        ></iframe>
      </div>

     

     <Footer />
    </div>
  );
};

export default Demo;
