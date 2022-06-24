import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/compu_app/1.png";
import book2 from "../../../assets/curriculum/compu_app/2.png";
import book3 from "../../../assets/curriculum/compu_app/3.png";

import englishvibes from "../../../assets/curriculum/compu_app/Curriculum Catalogue_2021-22_Page_31.jpg";

export const Compu_app = ({ sOpen }) => {
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
            Information Technology has become an integral part of almost every
            human activity, be it education, banking, trading, communication,
            entertainment, or management. Education is one of the major sectors
            where Information Technology has greatly influenced its working.{" "}
            <br /> <br />
            Looking at the present scenario, one can easily predict the
            dominance of Information Technology in daily life. Computer
            Applications is a series of two books (IX & X) and has been designed
            as per the latest learning scheme, which covers in-depth, the class
            IX and X CBSE curriculum of 'Computer Applications' (updated
            curriculum as per code 165, effective from the session 2018-19). The
            sole objective of this series is to reduce the habit of cramming
            while strengthening the understanding level of students. In both the
            series, the concepts have been explained in a simple and lucid
            language. Each chapter contains a number of solved examples, a set
            of multiple choice, true/false, fill in the blanks,
            application-based, assessment-based questions. We are confident this
            book will provide students a completely different reading experience
            while making learning a pleasure.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center h-24 bg-[#ff8080] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">535</span>
              <span className="text-black font-semibold">535</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#ff3c3c] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] bg-[#ff8080] rounded justify-center">
            <div className="sm:w-1/2 w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-md  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Based
                  on Windows 7 and Microsoft Office 2010 suite.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Simple
                  and easy to use language for the better understanding of
                  technical aspects covered in this book.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Live
                  screenshots gives the feel of working in computer in a
                  computer lab while learning theory concepts.
                </li>
              </ul>
            </div>
            <div className=" sm:w-1/2 w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-md  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" />{" "}
                  &nbsp;Practical-based learning approach supported by colourful
                  illustrations for the effective usage of covered applications.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Quick
                  reference in the form of Ponderable Points
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
      </div>
    </>
  );
};
