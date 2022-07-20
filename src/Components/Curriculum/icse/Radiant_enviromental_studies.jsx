import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/icse/radiant_enviromentnal_studies/1.png";
import book2 from "../../../assets/curriculum/icse/radiant_enviromentnal_studies/2.png";
import englishvibes from "../../../assets/curriculum/icse/radiant_enviromentnal_studies/Curriculum Catalogue_2021-22_Page_50.jpg";

const Radiant_enviromental_studies = ({ sOpen }) => {
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
            <span className="text-[#ebb84f] font-semibold">
              {" "}
              Radiant Environmental Studies
            </span>
            &nbsp; for classes 1 and 2 is based on the latest{" "}
            <b>CISCE Curriculum</b> prescribed by theCouncil for Indian School
            Certificate Examinations. The books help students recognize and
            appreciate the various shades and hues of their environment.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffd175] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">190</span>
              <span className="text-black font-semibold">210</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#ebb84f] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] bg-[#9dc9ff] rounded justify-center">
            <div className="bg-[#ffd175] w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-lg  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" />{" "}
                  &nbsp;Activities, skills, and values incorporated to develop
                  an awareness of the natural, social, and cultural environment
                  in a holistic manner
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Using
                  various environmental objects and places to facilitate the
                  learning process
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Inculcation of values, attitudes, and skills related to the
                  protection of the environment
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Enhance/promote curiosity and creativity in relation to the
                  surroundings
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Using
                  various environmental objects and places to facilitate the
                  learning process
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Develops an appreciation for diversity in the immediate
                  surroundings
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Develops sensitivity towards the elderly, differently-abled,
                  and disadvantaged groups of society by focusing on their
                  strengths as well as the areas of concern
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; To the
                  Teacher to help teachers set the required mood and direction
                  to develop the concept
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Did You
                  Know provides interesting facts related to the topic
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; My
                  Notes at the end of chapter helps learners to recall and
                  summarise the chapter
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Scratch Your Brain includes a variety of interesting exercises
                  including Multiple Choice Questions, Fill in the Blanks,
                  Jumbled Words, Crossword Puzzles, Word Maze, etc.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;I Do ……
                  I Learn includes activities to strengthen the understanding of
                  the concepts and to develop team spirit.
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
        </div>
      </div>
    </>
  );
};

export default Radiant_enviromental_studies;
