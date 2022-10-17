import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/stepAndLearn/2.png";
import img2 from "../../assets/digital/stepAndLearn/3.png";
import img3 from "../../assets/digital/stepAndLearn/4.png";
import GoToTop from "../Top";

const Step = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Kinaesthetic Learning</span>
          <img src={img1} className="w-full h-auto" alt="" />
        </div>
        <span className="sm:w-3/5 w-full font-semibold text-justify ">
          Step & Learn powered by WizeFloor is an interactive floor that
          promotes collective and differentiated learning styles and needs
          through play and physical activity.
          <br />A projector projects activities and learning games on to the
          floor from the ceiling. The children interact with the floor using
          their hands and feet allowing them to develop their cognitive as well
          as gross motor skills. Multiple children can play simultaneously.
        </span>
      </div>
      <h1 className="sm:w-[32%] md:w-[32%] text-white text-center font-semibold sm:px-4  py-1 bg-[#5f415f]">
        For Pre-Primary & Primary Levels
      </h1>
      <div className="w-full my-[2rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60%] w-[90%] sm:h-[60vh] h-[30vh] shadow-3xl"
          src="https://www.youtube.com/embed/To0xlXtnhJs"
        ></iframe>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col w-full sm:w-5/12 sm:mb-2 ">
          <span className="px-10 ml-8 py-1 text-white font-semibold bg-[#5f415f] rounded-t-lg w-fit">
            BENEFITS
          </span>
          <img src={img2} className="w-[90%] h-61 rounded-lg" alt="" />
        </div>
        <div className="bg-[#5f415f] flex flex-col rounded-lg w-[90%] mr-0 sm:w-[35%] md:w-[37%]  md:h-[0%]  px-3 py-2 sm:py-7 md:py-5 sm:mt-6  sm:text-[17px] gap-3">
          <h1 className="text-white flex w-full justify-center font-bold text-center  text-sm sm:text-xl sm:text-center py-2Asset 46@3x.png">
            Multiple Learning Applications
          </h1>
          <div className="flex justify-around py-3 text-xs sm:text-base">
            <ul className="rounded-md flex flex-col gap-4 bg-[#5f415f]">
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> QUIZ
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> STEPSTONE
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> BALLOONS
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> FLOOR KEYBOARD
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> THEME CARDS
              </li>
            </ul>
            <ul className="rounded-md bg-[#5f415f] gap-4 flex flex-col ">
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> MEMORY
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> SENSORY
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> FOOTBALL
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> PUZZLE
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> PIANO
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={img3} className="mt-[1rem]" alt="" />
      <GoToTop />
    </div>
  );
};

export default Step;
