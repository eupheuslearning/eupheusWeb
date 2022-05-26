import React from "react";
import Navbar from "../Components/Navbar";
import Banner_1 from "../assets/banner2.png";
import grayBg from "../assets/grayBg.png";
import footerimg1 from "../assets/footerimg1.png";
// import firstSectionSchool from "../assets/first-section-school.174ed857.svg";
// import firstSectionLighthouse from "../assets/first-section-lighthouse.a0be8772.svg";
// import section2schools from "../assets/section2schools.png";
// import section2students from "../assets/section2students.png";
// import power from "../assets/power.png";
// import image1 from "../assets/image1.png";
// import book from "../assets/book.png";
// import card from "../assets/card.png";
// import robot from "../assets/robot.png";
// import reading from "../assets/reading.png";
// import laptop from "../assets/laptop.png";
// import schoolmitra from "../assets/schoolmitra.png";
// import trophy from "../assets/trophy.png";
// import code2win from "../assets/code2win.png";
// import play from "../assets/play.png";
// import laptop2 from "../assets/laptop2.png";
// import iso from "../assets/iso.png";
import logWhite from "../assets/logoWhite.png";
import phone from "../assets/phone.png";

import { Parallax } from "react-scroll-parallax";

import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

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
        {/* <div className=" h-[100vh] w-lg-[85vw] rounded-tr-[5rem] rounded-br-[5rem] shadow-3xl pt-[3rem]  bg-white lg:mx-[15vw]  ">
        <div className="p-[3rem] flex justify-around">
            <div>
            <input type="radio" name="category" id=""  /><span className=" text-red-700 md:text-3xl text-base font-bold "> PRINCIPAL/SCHOOL</span> 
            </div>
            <div>
            <input type="radio" name="category"  /> <span className=" md:text-3xl text-base font-bold ">TEACHER</span> 
            </div>
            <div>
              <input type="radio" name="category"  /> <span className=" md:text-3xl text-base font-bold ">PARENTS/STUDENT</span> 
            </div>
        </div>
        <div className="p-[3rem] flex justify-around">
        <div>
            <div className=" my-2">
            <label htmlFor="" className=" md:text-3xl text-base font-bold" >FIRST AND LAST NAME</label><br />
                <input type="text" name="name" className=" border-2" />
            </div> 
            <div className=" my-2">
                <label htmlFor="" className=" md:text-3xl text-base font-bold">ADDRESS</label><br />
                <input type="text" name="name" className=" border-2" />
            </div>    
            <div className=" my-2">
                <label htmlFor="" className=" md:text-3xl text-base font-bold">ZIP / CITY</label><br />
                <input type="text" name="name" className=" border-2" />
            </div> 
            <div className=" my-2">
                <label htmlFor="" className=" md:text-3xl text-base font-bold">PHONE</label><br />
                <input type="text" name="name" className=" border-2" />
            </div> 
            <div className=" my-2">
                <label htmlFor="" className=" md:text-3xl text-base font-bold">E-MAIL</label><br />
                <input type="text" name="name" className=" border-2" />
            </div> 
             
            </div> 
        
        <div>
        <img src={reading} className="w-[10rem] sm:w-[25vw] h-auto" alt="" />
        </div>
        </div>
        <div className="p-[3rem]">
        <div>
                <label htmlFor="" className=" md:text-3xl text-base font-bold">QUERY</label><br />
                <input type="text" name="name" className=" border-2" />
            </div> 

        </div>
        <div className="p-[3rem]">
            <button>SUBMIT</button>
        </div>
    </div> */}
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

      <div className="w-[100vw] lg:px-[9rem] items-center px-[3rem] py-[2rem] flex justify-between bg-[#f5ab1d]">
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Avocado App Helps Students Practice
            </span>
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Maths And Science To Perfection
            </span>
            <span className="md:text-base text-xs text-red-700">
              December 17, 2018
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Learn Coding In A Fun And
            </span>
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Interactive Manner!
            </span>
            <span className="md:text-base text-xs text-red-700">
              November 15, 2017
            </span>
          </div>
        </div>
        <img
          src={footerimg1}
          className="md:w-[30vw] w-[20vw] hidden sm:block h-[10vh] md:h-auto"
          alt=""
        />
      </div>

      <div className="bg-red-600 w-[100vw] lg:px-[9rem] items-center px-[3rem] py-[2rem] flex justify-between ">
        <div className="flex flex-col gap-3 w-[20vw]">
          <img src={logWhite} className=" object-cover w-full" alt="" />
          <span className="text-white text-sm w-full">
            A-12, Second Floor, Mohan Cooperative Industrial Estate, Main
            Mathura Road, Near Sarita Vihar Metro Station, New Delhi – 110044
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-white text-xl">USEFUL LINKS</span>
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm">Properties</span>
            <span className="text-white text-sm">New Books</span>
            <span className="text-white text-sm">Awards & Recognitions</span>
            <span className="text-white text-sm">News</span>
            <span className="text-white text-sm">Press Release</span>
            <span className="text-white text-sm">Terms And Conditions</span>
            <span className="text-white text-sm">Career</span>
          </div>
          <div className="flex gap-2">
            <Facebook />
            <Twitter />
            <Instagram />
            <YouTube />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[30vw]">
          <span className="text-white text-xl">NEWSLETTER</span>
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm">
              Be the first to know about the latest news.
            </span>
            <input
              type="text"
              placeholder="E-mail...."
              className=" bg-white px-4 py-1 w-[20vw] rounded-md outline-none"
            />
          </div>
          <div className="flex gap-4 items-center w-full">
            <div className="flex flex-col gap-3 w-[12vw]">
              <span className="text-white text-xl">GET IN TOUCH</span>
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm">+91 85265 25846</span>
                <span className="text-white text-sm">info@eupheus.in</span>
              </div>
            </div>
            <img src={phone} className="w-[15vw] h-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
