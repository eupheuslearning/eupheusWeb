import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/cbse/the_radiant_way/1.png";
import book2 from "../../../assets/curriculum/cbse/the_radiant_way/2.png";
import book3 from "../../../assets/curriculum/cbse/the_radiant_way/3.png";
import englishvibes from "../../../assets/curriculum/cbse/the_radiant_way/Curriculum Catalogue_2021-22_Page_25.jpg";

const The_radiant_way = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            The &nbsp;
            <span className="text-[#67c634] font-semibold">
              The Radiant Way
            </span>
            —First Step to Fourth Step series is a combination of the phonic and
            sentence methods of teaching reading. Each is given due recognition
            but they are blended to produce a single logical approach. The
            result is a sure foundation on which wider and later reading may be
            built. Everywhere the books are used—and they have been phenomenally
            popular all over the world—the testimony is the same: the Radiant
            Way child can read.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#8aba71] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">First Step</span>
              <span className="text-black font-semibold">Second Step</span>
              <span className="text-black font-semibold">Third Step</span>
              <span className="text-black font-semibold">Fourth Step</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">170</span>
              <span className="text-black font-semibold">170</span>
              <span className="text-black font-semibold">195</span>
              <span className="text-black font-semibold">195</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-6/12 w-full">
            <img src={book1} className="w-[80%] h-auto" alt="" />
          </div>
          <div className="flex flex-col sm:w-[50%] w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#619943] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#c4ffa5] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Teaching
                methodology perfect for learners whose mother tongue is not
                English
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Classical literary stories and poems given in the series
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Smooth
                gradation over each step
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Combination of 'Phonic' and ‘Look-and-Say’ method of teaching
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;The
                Phonic practice integrated with the main text
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Grade-appropriate vocabulary
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Ample
                recapitulation of vocabulary and sounds learnt previously
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
  );
};

export default The_radiant_way;
