import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/skillDev/wow_within_worlds/1.png";
import book2 from "../../../assets/curriculum/skillDev/wow_within_worlds/2.png";
import book3 from "../../../assets/curriculum/skillDev/wow_within_worlds/3.png";
import book4 from "../../../assets/curriculum/skillDev/wow_within_worlds/4.png";
import englishvibes from "../../../assets/curriculum/skillDev/wow_within_worlds/Curriculum Catalogue_2021-22_Page_61.jpg";

const Wow_within_worlds = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-8/12 w-full">
            <span className="text-[#ed008c] font-semibold">
              Wow! World Within Worlds
            </span>
            &nbsp; is designed for the young learners to develop and gradually
            master cursive writing. The series follows a gradual progression of
            content and keeps the learners engaged, excited and deeply involved
            in the intricacies of fine writing.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ff9ed6] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book A</span>
              <span className="text-black font-semibold">Book B</span>
              <span className="text-black font-semibold">Book C</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
              <span className="text-black font-semibold">Book 3</span>
              <span className="text-black font-semibold">Book 4</span>
              <span className="text-black font-semibold">Book 5</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">180</span>
              <span className="text-black font-semibold">190</span>
              <span className="text-black font-semibold">215</span>
              <span className="text-black font-semibold">170</span>
              <span className="text-black font-semibold">175</span>
              <span className="text-black font-semibold">180</span>
              <span className="text-black font-semibold">185</span>
              <span className="text-black font-semibold">190</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#ed008c] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[70%] rounded justify-center">
            <div className="bg-[#ff9ed6] w-full sm:flex-col rounded-lg">
              <ul className="px-2 py-1    text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Latest
                  and up-to-date information
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Infographics are presented for understanding content
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  <b> At a glance</b> provides a bird's-eye view of the subjects
                  covered in each chapter
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  <b>Did You Know?</b> provides unusual and interesting bits of
                  information
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  <b>Train your Brain</b> exercises help in sharpening the
                  numerical and linguistic abilities
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  <b>Let’s Think!</b> contains quotes or questions related to
                  life skills and value education
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  <b>Just for Fun</b> has humorous anecdotes or riddles
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
            <div className="m-3 flex flex-col w-full bg-[#39b54a] p-4 rounded-xl">
              <span className="text-white">(For classes 1-4)</span>
              <span className="text-white uppercase text-lg">
                world book <span className="text-2xl">kids</span>
              </span>
              <img src={book3} className="h-auto rounded-lg" alt="" />
            </div>
            <div className="m-3 flex flex-col w-full bg-[#f7941d] rounded-xl p-4">
              <span className="text-white">(For classes 5-8)</span>
              <span className="text-white uppercase text-lg">
                world book <span className="text-2xl">student</span>
              </span>
              <img src={book4} className="h-auto rounded-lg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wow_within_worlds;
