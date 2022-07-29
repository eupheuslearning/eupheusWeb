import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/cbse/wow_compu_bytes/1.png";
import book2 from "../../../assets/curriculum/cbse/wow_compu_bytes/2.png";
import book3 from "../../../assets/curriculum/cbse/wow_compu_bytes/3.png";
import book4 from "../../../assets/curriculum/cbse/wow_compu_bytes/4.png";
import englishvibes from "../../../assets/curriculum/cbse/wow_compu_bytes/Curriculum Catalogue_2021-22_Page_30.jpg";

export const Wow_compu_bytes = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0 items-center">
          <span className="sm:w-4/5 w-full text-justify">
            <span className="text-[#8f4099] font-semibold">
              WOW! Compu-Bytes,
            </span>
            our new series in computer science adopts a child-centric approach
            to learning computer science. The series is based on
            <b>Windows 10</b> and <b>Microsoft Office 2016</b>. It adopts an
            interactive approach and makes learning an enjoyable and enriching
            experience <br /> <br />
            <span>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;{" "}
              <b>At the primary level (1-5)</b>, the series focuses on
              presenting the basic of computers and Windows operating system,
              Microsoft Office and number of activity-based software such as Tux
              Paint, Touch Typing, Scratch and so on.
            </span>
            <br />
            <span>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;{" "}
              <b> At the middle level (6-8)</b>, the series focuses on advanced
              level of Microsoft Office, graphics applications (Flash and
              Photoshop), programming languages (HTML, CSS and Python), latest
              and emerging technologies and so on.
            </span>
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#b849c0] py-2">
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
          <div className="flex flex-col sm:w-[50%] w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#5a2d6c] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#e4baea] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>LEARNING OBJECTIVES:</b> Goals to be achieved by the end of
                the chapter
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>QUIZ:</b> Quick assessment of concepts
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>ENRICH YOURSELF:</b> Alternative methods on the topics
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>INFO:</b> Extra and useful information on the topics
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>FAST FORWARD:</b> Keyboard shortcuts
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>KEYWORDS:</b> Expanded form of abbreviations
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>MEMORIZE:</b> Summarizes the chapter
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>EXERCISES:</b>Evaluates understanding of the concept
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-6/12 w-full">
            <span className="px-3 ml-3 py-1 bg-[#5a2d6c] rounded-t-lg w-fit text-white">
              KIDS CORNER
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#e4baea] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>HANDS-ON ACTIVITY:</b> Word search, crossword
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>LAB ACTIVITY:</b> Practical activities
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>PROJECT WORK:</b> Apply the concepts learnt
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>GROUP DISCUSSION:</b> Helps creates interactivity
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>ONLINE LINKS:</b> Links for exploring the topic further
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full">
          <div className="flex flex-row items-center sm:w-4/12 w-full">
            <img src={book1} className=" h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-3/12 w-full">
            <div className="m-3 flex flex-col w-full">
              <img src={book2} className="h-auto" alt="" />
            </div>
            <div className="m-3 flex flex-col w-full">
              <img src={book3} className="h-auto" alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center sm:w-5/12 w-full">
            <div className="m-3 flex flex-col  flex-end w-full">
              <div className=" w-[90%] rounded-md mb-8">
                <img src={book4} className="rounded-md  h-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
