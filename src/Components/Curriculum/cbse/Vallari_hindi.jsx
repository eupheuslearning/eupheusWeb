import React from "react";
import { Circle } from "@mui/icons-material";
import book2 from "../../../assets/curriculum/cbse/vallari_hindi/2.png";
import book3 from "../../../assets/curriculum/cbse/vallari_hindi/3.png";
import book4 from "../../../assets/curriculum/cbse/vallari_hindi/4.png";

import wowmaths from "../../../assets/curriculum/cbse/vallari_hindi/Curriculum Catalogue_2021-22_Page_32.jpg";

export const Vallari_hindi = () => {
  return (
    <>
      <div
        className={`w-full  flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wowmaths} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            <span className="text-[#f3934e] font-semibold"> WOW! Maths</span>
            &nbsp; for CBSE is a comprehensive programme for 1-8 learners based
            on the innovative and effective teaching and learning practices of
            Singapore. The programme incorporates the{" "}
            <b>Singapore Bar Model Method</b> (a pedagogical strategy recognized
            globally and ranked the highest in TIMSS) and heuristics
            (problem-solving strategies) intricately woven with the guidelines
            of the <b>NCF 2005</b> (CBSE) .
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#cdcd35] py-2">
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
              <span className="text-black font-semibold">435</span>
              <span className="text-black font-semibold">445</span>
              <span className="text-black font-semibold">460</span>
              <span className="text-black font-semibold">495</span>
              <span className="text-black font-semibold">505</span>
              <span className="text-black font-semibold">530</span>
              <span className="text-black font-semibold">530</span>
              <span className="text-black font-semibold">530</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-9/12 w-full">
            <span className="px-3 ml-3 py-1 bg-[#f3934e] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#ffff9b] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>Course Books:</b> Based on the CPA approach, they are
                enriched with 15 unique features like real-life examples,
                creative concept visualizations, critical thinking questions and
                other support activities that make learning of Maths an
                enjoyable and engaging learning experience.
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                <b>Work Books:</b>
                Adopt a learner-centric approach to reinforce skills. Include a
                series of well-formulated questions including challengers,
                graded from lower to higher order of difficulty, to trigger
                thinking and reasoning skills.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book2} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book3} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book4} className="w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
