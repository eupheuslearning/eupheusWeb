import React from "react";
import { Circle } from "@mui/icons-material";
import book4 from "../../../assets/curriculum/cbse/wow_compu_bytes/4.png";
import book5 from "../../../assets/curriculum/cbse/wow_compu_bytes/5.png";
import englishvibes from "../../../assets/curriculum/cbse/wow_compu_bytes/Curriculum Catalogue_2021-22_Page_30.jpg";

const Icse_wow_compu_bytes = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={englishvibes} className="w-full h-auto" alt="" />
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          At present times, Computer science is involved with each and every
          facet of our lives. To prepare children for the future, there is a
          requirement of making them computer literates or we can say digital
          experts. This WOW! series gives students the right paradigm approach
          towards computers starting from basics to latest in softwares,
          exploring computers. <br /> <br />
          <span className="text-[#8f4099] font-semibold">WOW! Compu-Bytes</span>
          series for classes 1 to 8 is created as per the new curriculum
          released by the Council for the Indian School Certificate Examinations
          (CISCE). We have tried to use simpler language for easy understanding
          and technical language is used wherever required. Fact bytes, Let us
          know, Tech bites, Test your knowledge, Lab Session, Group Discussion,
          Project Work have been integral parts of the book maintaining interest
          of student and making them involved.
          <br /> <br />
          The books at the primary level include basics of computer and the
          internet, apart from basics to Microsoft Office. Detailed focus has
          been given on Scratch as it is a very interesting, child-friendly
          programming software, which initiates students into the world of
          coding.
        </span>
        <div className="flex  gap-4 rounded-md w-fit h-fit px-3 justify-center bg-[#f4a0ff] py-2">
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
            <span className="text-black font-semibold">245</span>
            <span className="text-black font-semibold">260</span>
            <span className="text-black font-semibold">290</span>
            <span className="text-black font-semibold">320</span>
            <span className="text-black font-semibold">355</span>
            <span className="text-black font-semibold">390</span>
            <span className="text-black font-semibold">405</span>
            <span className="text-black font-semibold">420</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
        <div className="flex flex-col sm:w-7/12 w-full m-4">
          <span className="px-3 ml-3 py-1 bg-[#8f4099] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <ul className="px-2 py-1 w-full rounded-md bg-[#f4a0ff] text-black">
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Focused on
              computer basics to understanding of coding
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Simple,
              easy-to-understand language
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;
              Interspersed with small projects at the end of chapters to make
              learning more meaningful
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Worksheet
              and Model test papers as per the new examination pattern
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Group
              activities
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Suggested
              online links for more information on topics
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:w-4/12 w-full">
          <span className="p-5 w-full rounded-md bg-[#8f4099] text-white">
            Each of the coursebooks is supported by a Teacher’s Manual that
            includes lesson plans and the complete answer key to the coursebook
            exercise.
          </span>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full">
        <div className="flex flex-row items-center sm:w-6/12 w-full">
          <img src={book5} className=" h-auto" alt="" />
        </div>
        <div className="flex flex-row items-center sm:w-5/12 w-full">
          <div className="m-3 flex flex-col  flex-end w-full">
            <span className="px-3 ml-3 py-1 bg-[#8f4099] rounded-t-lg w-fit text-white">
              NATIONAL CODING COMPETITION
            </span>
            <div className=" w-full rounded-md">
              <img src={book4} className="rounded-md h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icse_wow_compu_bytes;
