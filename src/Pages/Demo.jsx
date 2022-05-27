import React from "react";
import Navbar from "../Components/Navbar";
import Banner_1 from "../assets/banner2.png";
import grayBg from "../assets/grayBg.png";
import dashBorder from "../assets/dash-border.png";
import board from "../assets/board.png";
import lgDashBorder from "../assets/dash-border-lg.png";
import submit from "../assets/submit.png";

import { Parallax } from "react-scroll-parallax";

import Footer from "../Components/Footer";

const Demo = () => {
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"demo"} />
      <div className="h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh] top-[8vh] right-[5vw]  lg:right-[60vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base font-extrabold ">
            EUPHEUS OFFERINGS ACROSS ALL
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-semibold">
            DIGITAL PLATFORMS
          </h1>
        </div>
        <img
          className="sm:h-[100vh] h-[50vh] sm:mt-0 mt-[24vh] object-cover w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div>

      <div className="w-[100vw] flex justify-center mt-[5rem]">
        <div className="bg-white rounded-r-3xl drop-shadow-2xl px-[5rem] py-[5rem]">
          <form className="flex flex-col gap-[3rem]">
            <div className="flex gap-4 justify-between items-center">
              <input type="radio" name="info" />
              <lable className="text-3xl font-semibold">PRINCIPAL/SCHOOL</lable>
              <input type="radio" name="info" />
              <lable className="text-3xl font-semibold">TEACHER</lable>
              <input type="radio" name="info" />
              <lable className="text-3xl font-semibold">PARENTS/STUDENT</lable>
            </div>
            <div className="flex gap-[4rem] items-center">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-semibold">
                    FIRST AND LAST NAME
                  </h1>
                  <div
                    className="p-4 bg-no-repeat w-[30vw]"
                    style={{
                      backgroundImage: `url(${dashBorder})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <input type="text" className=" outline-none w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-semibold">ADDRESS</h1>
                  <div
                    className="p-4 bg-no-repeat w-[30vw]"
                    style={{
                      backgroundImage: `url(${dashBorder})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <input type="text" className=" outline-none w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-semibold">ZIP / CITY</h1>
                  <div
                    className="p-4 bg-no-repeat w-[30vw]"
                    style={{
                      backgroundImage: `url(${dashBorder})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <input type="text" className=" outline-none w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-semibold">PHONE</h1>
                  <div
                    className="p-4 bg-no-repeat w-[30vw]"
                    style={{
                      backgroundImage: `url(${dashBorder})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <input type="text" className=" outline-none w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-semibold">E-MAIL</h1>
                  <div
                    className="p-4 bg-no-repeat w-[30vw]"
                    style={{
                      backgroundImage: `url(${dashBorder})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <input type="text" className=" outline-none w-full" />
                  </div>
                </div>
              </div>
              <img src={board} className="w-[25vw] h-[25vw]" alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold">QUERY</h1>
              <div
                className="px-8 py-6 bg-no-repeat w-full h-[20vh]"
                style={{
                  backgroundImage: `url(${lgDashBorder})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <input type="text" className=" outline-none w-full" />
              </div>
            </div>
            <button>
              <img src={submit} alt="" />
            </button>
          </form>
        </div>
      </div>

      <Parallax translateX={[-50, 30]} scale={[1, 1]}>
        <div className=" mt-[10rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-5xl text-3xl">
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
        <div className=" mt-[10rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-5xl text-3xl">
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
        <div className=" mt-[10rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-5xl text-3xl">
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
