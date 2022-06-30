import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/cbse/my_world_my_earth/1.png";
import book2 from "../../../assets/curriculum/cbse/my_world_my_earth/2.png";
import book3 from "../../../assets/curriculum/cbse/my_world_my_earth/3.png";
import englishvibes from "../../../assets/curriculum/cbse/my_world_my_earth/Curriculum Catalogue_2021-22_Page_26.jpg";

const My_world_my_earth = ({ sOpen }) => {
  return (
    <>
      <>
        <div
          className={`w-full ${
            sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
          } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
        >
          <img src={englishvibes} className="w-full h-auto" alt="" />
          <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
            <span className="sm:w-4/5 w-full">
              The &nbsp;
              <span className="text-[#f4a267] font-semibold">
                My World My Earth—Environmental Studies
              </span>
              series for classes 1 to 5 aims to familiarise students with
              different aspects of the world around them. These books introduce
              concepts of social interaction, encourage scientific thoughts, and
              make students aware of the diversity in the world at large.
            </span>
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffa463] py-2">
              <div className="flex flex-col gap-[2px] ">
                <span className="text-white font-semibold">Title</span>
                <span className="text-black font-semibold">Book 1</span>
                <span className="text-black font-semibold">Book 2</span>
                <span className="text-black font-semibold">Book 3</span>
                <span className="text-black font-semibold">Book 4</span>
                <span className="text-black font-semibold">Book 5</span>
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="text-white font-semibold">Price</span>
                <span className="text-black font-semibold">285</span>
                <span className="text-black font-semibold">335</span>
                <span className="text-black font-semibold">345</span>
                <span className="text-black font-semibold">355</span>
                <span className="text-black font-semibold">370</span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
            <div className="flex flex-col sm:w-6/12 w-full">
              <img src={book1} className="w-[80%] h-auto" alt="" />
            </div>
            <div className="flex flex-col sm:w-[50%] w-full m-4">
              <span className="px-3 ml-3 py-1 bg-[#f4a267] rounded-t-lg w-fit text-white">
                KEY FEATURES
              </span>
              <ul className="px-2 py-1 w-full rounded-md bg-[#ffc59b] text-black">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Look
                  forward helps students to think about the topic before moving
                  forward
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Know
                  more, learn more, trivia, and additional information help
                  students in building their General Knowledge
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Challenge yourself encourages students to be inquisitive
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Test
                  yourself given at the end of each chapter for easy revision
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Together time engages the students with the topic creatively
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Activity offers hands on practice and in-depth understanding
                  of the topic
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Evaluation Corner offers variety of test exercises
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
            <div className="flex flex-col sm:w-6/12 w-full">
              <img src={book2} className="w-[80%] h-auto" alt="" />
            </div>
            <div className="flex flex-col sm:w-[50%] w-full">
              <img src={book3} className="w-[80%] h-auto" alt="" />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default My_world_my_earth;
