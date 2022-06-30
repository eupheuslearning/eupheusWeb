import React from "react";
import { Circle } from "@mui/icons-material";
import book4 from "../../../assets/curriculum/skillDev/time_to_learn_art/1.png";
import book5 from "../../../assets/curriculum/skillDev/time_to_learn_art/2.png";
import englishvibes from "../../../assets/curriculum/skillDev/time_to_learn_art/Curriculum Catalogue_2021-22_Page_57.jpg";

const Time_to_learn_arts = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            <span className="text-[#8f4099] font-semibold">
              It’s Time to Learn ART
            </span>
            is a unique series that makes a sincere effort to ‘teach art’ and
            not just ‘do art’. It is being increasingly felt by educationists
            that ART not only promotes an aesthetic sense but also broadens
            knowledge. It has been prove that learning of ART develops a number
            of life skills like patience, perseverance, creativity,
            problem-solving, anger management, tolerance, peace, etc.
          </span>
          <div className="flex  gap-4 rounded-md w-fit h-fit px-3 justify-center bg-[#77787c] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
              <span className="text-black font-semibold">Book 3</span>
              <span className="text-black font-semibold">Book 4</span>
              <span className="text-black font-semibold">Book 5</span>
              <span className="text-black font-semibold">Book 6 </span>
              <span className="text-black font-semibold">Book 7</span>
              <span className="text-black font-semibold">Book 8</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">335</span>
              <span className="text-black font-semibold">335</span>
              <span className="text-black font-semibold">335</span>
              <span className="text-black font-semibold">335</span>
              <span className="text-black font-semibold">335</span>
              <span className="text-black font-semibold">370</span>
              <span className="text-black font-semibold">370</span>
              <span className="text-black font-semibold">370</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-7/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#373738] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#a0a0a4] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Focused
                on computer basics to understanding of coding
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Introduction of folk art and craft under the aegis of heritage
                education
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Encourages children to explore their own ideas and concepts—this
                builds selfesteem and self-worth in children
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Ideas
                for application of concepts taught have been given so that
                children may use them in projects they are required to make in
                various subjects
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Activities that require adult supervision or guidance have been
                marked
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Waste
                material or easily available material has been used; what is not
                easily available has been provided
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Care
                taken to not use materials that are potentially hazardous to
                children
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-4/12 w-full">
            <div className="m-3 flex flex-col  flex-end w-full">
              <span className="px-3 ml-3 py-1 bg-[#373738] rounded-t-lg w-fit text-white">
                NATIONAL CODING COMPETITION
              </span>
              <div className=" w-full rounded-md bg-[#a0a0a4] p-4">
                All activities that have videos have been marked with a red dot
                in the contents, and teachers can download them.
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full ">
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book5} className=" h-auto" alt="" />
          </div>
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book4} className="rounded-md h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Time_to_learn_arts;
