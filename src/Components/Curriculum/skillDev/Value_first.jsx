import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/skillDev/value_first/1.png";
import book2 from "../../../assets/curriculum/skillDev/value_first/2.png";
import book3 from "../../../assets/curriculum/skillDev/value_first/3.png";
import englishvibes from "../../../assets/curriculum/skillDev/value_first/Curriculum Catalogue_2021-22_Page_56.jpg";

const Value_first = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <img src={englishvibes} className="w-full h-auto" alt="" />
      <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
        <span className="sm:w-4/5 w-full">
          &nbsp;
          <span className="text-[#e11b22] font-semibold">Values First</span>
          &nbsp; The series is an attempt to build a value education
          textbookcum-workbook for young learners. Interesting stories along
          with fun exercises presented in the series leave a positive impact on
          the young impressionable minds. Situational questions g
        </span>
        <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ff7579] py-2">
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
        <span className="px-3 ml-3 py-1 bg-[#e11b22] rounded-t-lg w-fit text-white">
          KEY FEATURES
        </span>
        <div className="flex flex-row  items-center w-[90%] rounded justify-center">
          <div className="bg-[#ff7579] w-full sm:flex-col rounded-lg">
            <ul className="px-2 py-1    text-black ">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Characters introducing stories and its line of thought
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Interesting stories leading towards the value being taught
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Think
                About It talks about the values being covered in the stories
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Daily-Dose relates the value of the story to day to day life so
                that they become habits
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Wise-Quote includes theme-related quoted by famous people to
                reinforce learning outcome
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Answer
                to evaluate the learner’s comprehension
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Comment
                includes questions to assess and develop learner’s understanding
                of the theme
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Share
                your Story/Activity to encourage learners to share their
                experiences with each other
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;Situation
                Check provides situation questions that help learners to
                empathise with the situation to make a choice
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Explore
                includes beyond the text poems, stories, and anecdotes to
                develop reading habits and broaden the horizons of the learners
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Pin-it-up provides instructions for learners to fill-up the
                ‘Value of the Month’ corner allocated on their class bulletin
                board
              </li>
              <li>
                Also available: 12-page <b>Life Skills Activity Book</b> Book
                provided with books 3 to 8 to empower learners with life skills
                required to face challenges
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
  );
};

export default Value_first;
