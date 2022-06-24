import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/new_radiant_literature/1.png";
import book2 from "../../../assets/curriculum/new_radiant_literature/2.png";
import book3 from "../../../assets/curriculum/new_radiant_literature/3.png";
import book4 from "../../../assets/curriculum/new_radiant_literature/4.png";
import englishvibes from "../../../assets/curriculum/new_radiant_literature/Curriculum Catalogue_2021-22_Page_24.jpg";

const New_radiant_literature = ({ sOpen }) => {
  return (
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
            <span className="text-[#fd4662] font-semibold">
              New Radiant Readers
            </span>
            &nbsp; Literature Readers are literary interesting lessons taken
            from the renowned and time-tested New Radiant Readers series. This
            Literature series of 8 readers is for classes 1–8 of all CBSE and
            State Board schools seeks to familiarise students with classical and
            contemporary literary texts. It is an excellent literature
            supplement to English Readers and Workbooks based on the
            communicative approach.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#f2b3bd] py-2">
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
              <span className="text-black font-semibold">150</span>
              <span className="text-black font-semibold">150</span>
              <span className="text-black font-semibold">150</span>
              <span className="text-black font-semibold">150</span>
              <span className="text-black font-semibold">150</span>
              <span className="text-black font-semibold">180</span>
              <span className="text-black font-semibold">180</span>
              <span className="text-black font-semibold">180</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-[50%] w-full">
            <span className="px-3 ml-3 py-1 bg-[#fd4662] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#f2b3bd] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;The{" "}
                <b>Literature Readers</b> carry stories, folktales, and
                biographies based on the phonic pattern and poems of action and
                rhythm. Comprehension exercises practise usage of literary
                skills. Vocabulary exposes learners to literary devices. Grammar
                drills are graded to match students’ mental abilities while
                giving opportunities for sustained creative writing practice.
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;{" "}
                <b>A.I.-Powered Adaptive App </b> to improve your grammar skills
                in an interactive and fun way.
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-6/12 w-full">
            <p className="px-2 py-1 w-full rounded-md text-black">
              <img src={book1} className="w-[80%] h-auto" alt="" />
            </p>
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

export default New_radiant_literature;
