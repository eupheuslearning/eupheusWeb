import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/sanako/1.png";
import img2 from "../../../assets/digital/sanako/2.png";
import img3 from "../../../assets/digital/sanako/3.png";
import img4 from "../../../assets/digital/sanako/4.png";
import img5 from "../../../assets/digital/sanako/6.png";

const Sanak = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Language Learning Solution</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <img src={img2} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-red-500">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full ">
          Transform a set of desktops or laptops into a fully equipped language
          lab. <br /> <br />
          Engage an entire class to participate in meaningful activities whilst
          utilizing the allocated time efficiently and remaining in complete
          control. Teach the way you want!
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="bg-red-500 flex flex-col rounded-lg sm:w-6/12 w-full gap-3 py-4">
          <h1 className="text-white flex w-full justify-center font-bold">
            Multiple Learning Applications
          </h1>
          <div className="flex justify-around">
            <span className="font-xl text-white font-semibold p-4 text-justify">
              Listening Comprehension | Model Imitation | Reading Practice |
              Round Table Discussion | Discussion | Exam Mode | Tutoring | Web
              Browsing | Vocabulary Test | Text-to-Speech | Video Pairing
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:w-4/12 w-full">
          <img src={img3} className="w-full h-auto" alt="" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex sm:w-4/12 flex-col gap-4">
          <div className="flex flex-col w-full">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              KEY FEATURES
            </span>
            <ul className="rounded-md flex flex-col gap-4 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Add your own
                content to customise your lesson
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Additional
                languages can be taught from the same software
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Tutor control
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Join session and communicate
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Ability to
                monitor and record students’ progress
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Evaluation
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Plus more
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-center">
            <span className="capitalize text-2xl text-white bg-red-500 px-10 text-center">
              learning english
            </span>
            <span className="capitalize text-2xl"> easy and engaging</span>
          </div>
        </div>
        <div className="flex flex-col sm:w-7/12 w-full">
          <img src={img4} className="w-full h-auto" alt="" />
        </div>
      </div>
      <img src={img5} className="w-full h-auto" alt="" />
    </div>
  );
};

export default Sanak;
