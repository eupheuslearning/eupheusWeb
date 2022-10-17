import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/icse/new_radiant_science/1.png";
import book2 from "../../../assets/curriculum/icse/new_radiant_science/2.png";
import book3 from "../../../assets/curriculum/icse/new_radiant_science/3.png";

import englishvibes from "../../../assets/curriculum/icse/new_radiant_science/Curriculum Catalogue_2021-22_Page_51.jpg";

const New_radiant_science = ({ sOpen }) => {
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
            The&nbsp;
            <span className="text-[#a47036] font-semibold">
              New Radiant Science
            </span>
            &nbsp; series for classes 3 to 5 illustrates a few of the almost
            unlimited learning opportunities offered by our immediate
            environment. These books consist of easy-to-follow, thematically
            organised text woven around simple activities and exercises which
            help learners to explore and understand the world around them.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffd175] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
              <span className="text-black font-semibold">Book 3</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">235</span>
              <span className="text-black font-semibold">265</span>
              <span className="text-black font-semibold">300</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#a47036] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] bg-[#9dc9ff] rounded justify-center">
            <div className="bg-[#ffd175] w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-lg  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" />{" "}
                  &nbsp;Develops a scientific temperament to understand and use
                  scientific skills
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Develops skills and inculcates healthy habits for the
                  protection of the environment
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Hands-on-activities emphasises on using locally available
                  material to establish a relation between the content being
                  learnt in class its relevance in daily life
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Simple
                  activities throughout the book to develop experimentation
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Test
                  Your Knowledge provides adequate practice of the concepts
                  taught
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Activity based questions like Crosswords and Word Maze
                  included in the series
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Test
                  papers containing objective type and short answer questions
                  included
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

export default New_radiant_science;
