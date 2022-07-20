import React from "react";
import { Circle } from "@mui/icons-material";
import book2 from "../../../assets/curriculum/cbse/wow_maths/2.png";
import book3 from "../../../assets/curriculum/cbse/wow_maths/3.png";
import book4 from "../../../assets/curriculum/cbse/wow_maths/4.png";

import wowmaths from "../../../assets/curriculum/cbse/wow_menteal_maths/Curriculum Catalogue_2021-22_Page_28.jpg";

const Wow_menta_maths = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wowmaths} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0  items-center">
          <span className="sm:w-4/5 w-full text-justify">
            <span className="text-[#009b89] font-semibold">
              {" "}
              WOW! Maths Maths,
            </span>
            &nbsp; Smart Mental Maths Strategies, is a series of eight skill
            development books for the 1-8 levels, specifically developed to
            teach students the techniques of mental computations. The series
            blends various shortcuts and strategies including the sutras of
            Vedic Maths to help students learn the essential skills required to
            calculate mentally. Each book has been developed with alignment to
            the grade-wise coverage of the concepts taught in school, thereby
            ensuring the appropriateness of the strategies taught <br /> <br />
            In grade one to three; emphasis has been laid on simple calculations
            of whole numbers to help students develop good reasoning skills.
            Subsequently, in grades four and five, the strategies learnt in
            previous grades are reinforced and extended to fractions and
            decimals. In grade six to eight, the concepts are further extended
            to real numbers, percentage, ratio and proportion, algebra etc. to
            include more advanced methods of approaching the problems specially
            through Vedic Maths
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center  bg-[#009b89]  py-2">
            <div className="flex flex-col gap-[4px] item-center">
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
            <div className="flex flex-col gap-[4px]">
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
          <div className="flex flex-col sm:w-3/12 w-full">
            <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
              WOW FACT
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#b2f3eb] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Strategy
                based information to give an insight as to where the listed
                skill can be appropriately applied
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-3/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
              TEACHER SUPPORT
            </span>
            <ul className="px-2 py-1 w-full rounded-md  bg-[#b2f3eb] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Challenging higher order questions that trigger analytical
                reasoning and help students apply the relevant strategy, and
                find solutions on their own.
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-3/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
              PRACTICE TIME
            </span>
            <ul className="px-2 py-1 w-full rounded-md  bg-[#b2f3eb] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Added
                after a set of strategies. Includes practice from a collection
                of strategies with an aim to make students solve questions by
                selecting the most appropriate strategy
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-3/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
              TEACHING TIP
            </span>
            <ul className="px-2 py-1 w-full rounded-md  bg-[#b2f3eb] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Includes
                suggestions/ ideas for teachers and parents, to support the
                students in making the learning of the strategy comprehensive
                and complete.
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

export default Wow_menta_maths;
