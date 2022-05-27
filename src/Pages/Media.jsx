import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";
import trophy from "../assets/media/tro.png";
import certtificate1 from "../assets/media/cer1.png";
import certtificate2 from "../assets/media/cer2.png";
import certtificate3 from "../assets/media/car3.png";
import certtificate4 from "../assets/media/cer4.png";
import certtificate5 from "../assets/media/cer5.png";
import certtificate6 from "../assets/media/cer6.png";
import certtificate7 from "../assets/media/cer7.png";

import certtificate8 from "../assets/media/cer8.png";
import certtificate9 from "../assets/media/cer9.png";
import certtificate11 from "../assets/media/cer11.png";

export default function Media() {
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"media"} />
      <div className="sm:h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh] top-[8vh] right-[5vw]  lg:right-[60vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base ont-extrabold  ">
            EUPHEUS LEARNING IN
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-bold">
            THE LIMELIGHT
          </h1>
        </div>
        <img
          className="sm:h-[100vh] h-[50vh] sm:mt-0 mt-[24vh] object-cover w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div>
      <div className="my-[8rem]">
        <div className="flex items-center justify-center">
          <div className="  text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-5xl text-3xl">
            <span>AWARDS & RECOGNITIONS</span>
          </div>
          <div className="lg:w-[50vw] md:w-[70vw] ">
            <img className="w-auto" src={trophy} alt="" />
          </div>
        </div>
      </div>
      <div className="my-[8rem] ">
        <div className=" my-[4rem]  text-red-700  font-extrabold flex justify-center md:text-5xl text-3xl">
          <span>AWARDS IN 2018</span>
        </div>
        <div className=" flex justify-around">
          <div className="   ">
            <img className="" src={certtificate1} alt="" />
          </div>
          <div className="  ">
            <img className="" src={certtificate2} alt="" />
          </div>
        </div>
      </div>
      <div className="my-[8rem] ">
        <div className=" my-[4rem]  text-red-700  font-extrabold flex justify-center md:text-5xl text-3xl">
          <span>AWARDS IN 2019</span>
        </div>
        <div className=" flex justify-around">
          <div className="   ">
            <img className="" src={certtificate3} alt="" />
          </div>
        </div>
      </div>
      <div className="my-[8rem] ">
        <div className=" my-[4rem]  text-red-700  font-extrabold flex justify-center md:text-5xl text-3xl">
          <span>AWARDS & RECOGNITIONS IN 2020</span>
        </div>
        <div className=" flex justify-around items-center">
          <div className="   ">
            <img className="" src={certtificate4} alt="" />
          </div>
          <div className="  ">
            <img className="lg:w-[60vw]" src={certtificate3} alt="" />
          </div>
        </div>
        <div className=" flex justify-around items-center my-[5rem]">
          <div className="   ">
            <img className="" src={certtificate5} alt="" />
          </div>
          <div className="  ">
            <img className="" src={certtificate6} alt="" />
          </div>
          <div className="  ">
            <img className="" src={certtificate7} alt="" />
          </div>
        </div>
      </div>
      <div className="my-[8rem] ">
        <div className=" my-[4rem]  text-red-700  font-extrabold flex justify-center md:text-5xl text-3xl">
          <span>AWARDS & RECOGNITIONS IN 2021</span>
        </div>
        <div className=" flex justify-around items-center">
          <div className="   ">
            <img className="" src={certtificate4} alt="" />
          </div>
          <div className="  ">
            <img className="lg:w-[60vw]" src={certtificate3} alt="" />
          </div>
        </div>
      </div>

      <div className="my-[8rem] ">
        <div className=" my-[4rem]  text-red-700  font-extrabold flex justify-center md:text-5xl text-3xl">
          <span>AWARDS & RECOGNITIONS IN 2022</span>
        </div>
        <div className=" flex justify-around items-center my-[5rem]">
          <div className="   ">
            <img className="" src={certtificate8} alt="" />
          </div>
          <div className="  ">
            <img className="" src={certtificate9} alt="" />
          </div>
          <div className="  ">
            <img className="" src={certtificate11} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
