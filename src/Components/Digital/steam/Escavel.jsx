import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Steam/Escavel/1.png";
import img2 from "../../../assets/digital/Steam/Escavel/2.png";
import img3 from "../../../assets/digital/Steam/Escavel/3.png";
import img4 from "../../../assets/digital/Steam/Escavel/4.png";
import img5 from "../../../assets/digital/Steam/Escavel/5.png";
import GoToTop from "../../Top";

const Escavel = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold">3D Science Virtual Lab</span>
            <img src={img1} className="w-full h-auto" alt="" />
            <h1 className="w-full sm:w-[50%] md:w-full text-white text-center font-semibold px-3 py-1 bg-[#3672c6]">
              For Middle to Senior Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold  text-justify">
            <span className="text-[#3672c6] font-bold text-lg">
              Virtual Lab of Tomorrow
            </span>
            <br /> ScholAR is a one-of-a-kind virtual interactive platform that
            will immerse you in all the relevant educational knowledge that you
            can ask for and you can access it at any time and anywhere to start
            your learning journey whether it’s in the classroom or at home
          </span>
        </div>

        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center justify-center w-full">
          <div className="w-full">
            <div className="flex  flex-row sm:w-[100%] w-full justify-center items-center">
              <img src={img2} className="mt-[1rem] w-[30%]" alt="" />
              <span className=" flex justify-center font-bold px-4">
                Interactive Lab at your School/Home
              </span>
            </div>

            <div className="flex flex-col  w-full my-2 ">
              <span className="px-3 ml-3  bg-[#df9b2e] rounded-t-lg w-fit text-white">
                Interactive
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#df9b2e] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Truly interactive
                  experience which lets a user ‘play’ with a variety of
                  experiments
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Simulations are user-driven
                </li>
              </ul>
            </div>
            <div className="flex flex-col  w-full ">
              <span className="px-3 ml-3  bg-[#2dbb4c] rounded-t-lg w-fit text-white">
                Immersive
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#2dbb4c] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;3D graphics enable
                  a ‘game-like’ experience
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Easy visualization of complex concepts
                </li>
              </ul>
            </div>
            <div className="flex flex-col  w-full my-2">
              <span className="px-3 ml-3  bg-[#e8402d] rounded-t-lg w-fit text-white">
                Immersive
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#d74434] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Content is aligned
                  to school syllabus
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Designed with experienced school teachers and IIT-ians
                </li>
              </ul>
            </div>
            <div className="flex flex-col  w-full my-2 ">
              <span className="px-3 ml-3  bg-[#3dafd2] rounded-t-lg w-fit text-white">
                Always ON
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#3dafd2] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Distributed online
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Always available to anyone, anywhere, anytime
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex  flex-col justify-center items-center">
            <div className="flex flex-col  w-full justify-center items-center">
              <img src={img3} className="mt-[1rem] w-[70%]" alt="" />
            </div>
            <div className="flex flex-col w-full justify-center items-center ">
              <img src={img4} className="mt-[1rem] w-[70%]" alt="" />
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <img src={img5} className="mt-[1rem] w-[70%]" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#2882af] text-white p-4 my-2 rounded-lg">
          <span className="text-sm text-justify">
            <span className="font-bold">For Students: &nbsp; </span> ScholAR
            helps them understand complex concepts because they get hands-on
            with reallife scenarios. Engagement levels are high because ScholAR
            encourages a two-way communication, and inspires the user to
            interact with it.
            <br />
            <span className="font-bold"> For Teachers: &nbsp; </span> ScholAR is
            useful for classroom teaching as well as online teaching methods.
          </span>
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default Escavel;
