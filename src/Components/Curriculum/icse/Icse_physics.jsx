import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/icse/icse_physics/1.png";
import book2 from "../../../assets/curriculum/icse/icse_physics/2.png";
import book3 from "../../../assets/curriculum/icse/icse_physics/3.png";

import englishvibes from "../../../assets/curriculum/icse/icse_physics/Curriculum Catalogue_2021-22_Page_39.jpg";

const Icse_physics = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            Written specifically for the Council for Indian School Certificate
            Examinations (ICSE) as per the revised secondary syllabus, this
            series provides curriculum coverage for classes 9 and 10. It has
            been written by an eminent and respected author in the discipline of
            Physics.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#d675af] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">400</span>
              <span className="text-black font-semibold">415</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#b43c84] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] bg-[#d675af] rounded justify-center">
            <div className=" sm:w-1/2 w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-md  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;The{" "}
                  Written in a very simple, easy-to-understand language,
                  point-wise sequential manner.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; A list
                  The latest ICSE syllabus has been followed with emphasis on
                  easy explanation of concepts with key facts.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Text
                  and illustrations of diagrams contribute to the basic
                  understanding of facts, definitions, concepts, and principles
                  of physics and create interest among the students.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Key
                  terms students need to know are clearly highlighted in the
                  text.
                </li>
              </ul>
            </div>
            <div className=" sm:w-1/2 w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-md  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Comprehensive in-text exercises including conceptual and
                  numerical problems.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Questions from previous ICSE exams after each chapter prepare
                  students for the board exam.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Questions modelled on the ICSE exams after each chapter
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Two
                  Model Test Papers based on the new syllabus for practice have
                  been given at the end of the book.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Last
                  years' solved ICSE Question Paper has also been provided at
                  the end of the book.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book2} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book3} className="w-full h-auto" alt="" />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col px-4 sm:px-0 gap-4  items-center m-3">
          <div className=" w-[90%] bg-[#b43c84] m-auto p-3 rounded-lg text-white font-bold justify-center flex">
            Also available: Basic ICSE PHYSICS LAB MANUAL for Classes 9 and 10
          </div>
        </div>
      </div>
    </>
  );
};

export default Icse_physics;
