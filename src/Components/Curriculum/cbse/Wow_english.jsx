import React from "react";
import { Circle } from "@mui/icons-material";
import wow_english from "../../../assets/curriculum/cbse/wow_english/wow_english.jpg";
import book1 from "../../../assets/curriculum/cbse/wow_english/book1.png";
import book2 from "../../../assets/curriculum/cbse/wow_english/book2.png";

const Wow_english = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wow_english} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            <span className="text-[#2f8b2d] font-semibold">WOW! English </span>
            aims to make learning of English language a fun and rewarding
            journey. <br /> The series progressively leads learners to connect
            language to life. It covers the major language areas such as
            vocabulary, grammar, reading, writing, and phonemic awareness.{" "}
            <br /> <br />
            The learning process is organised in ten themes which pupils can
            easily relate to. The use of colourful illustrations stimulates
            thinking and encourages participatory learning.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#2f8b2d] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold ">Book 1</span>
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
              <span className="text-black font-semibold">355</span>
              <span className="text-black font-semibold">385</span>
              <span className="text-black font-semibold">410</span>
              <span className="text-black font-semibold">440</span>
              <span className="text-black font-semibold">465</span>
              <span className="text-black font-semibold">485</span>
              <span className="text-black font-semibold">505</span>
              <span className="text-black font-semibold">520</span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-4/12 w-full">
            <span className="px-3 ml-3 py-1 bg-[#1f531e] rounded-t-lg w-fit text-white">
              TEACHER RESOURCE KIT
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white">
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Teacher
                support manual
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Consists
                of activities to support concepts and skills incorporated in
                textbooks
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Includes
                guidelines, assessments, answers and checklist
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Relevant
                resources to aid learning process
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Includes
                resources for teachers and learners
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-[30%] w-full">
            <span className="px-3 ml-3 py-1 bg-[#1f531e] rounded-t-lg w-fit text-white">
              TEXTBOOK
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white">
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Thematic
                lessons and poems
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Concept
                elaborations
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Wide
                range of skill-building activities ranging from LSRW to life
                skills, phonics, free reading, and HOTS
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-[28%] w-full">
            <span className="px-3 ml-3 py-1 bg-[#1f531e] rounded-t-lg w-fit text-white">
              WORKBOOK
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white">
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Textbook
                linked extended exercises
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Varied
                and interesting tasks (creative, logical, comprehension)
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-white" /> &nbsp; Focussed
                skill strengthening
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-8/12 w-full justify-end  items-center">
            <div className="m-3 flex flex-row w-full ">
              <span className="px-3 ml-3 py-1 border-[#2f8b2d] rounded-t-lg w-fit text-white border-2 items-center">
                <center>
                  <img src={book2} className="h-10" alt="" />
                </center>

                <p className="bold text-black text-xs text-center">
                  The world’s # 1 multimedia, <br />
                  multilingual, multi-platform and multi-awarded language <br />
                  learning course for children. <br />
                </p>
              </span>
              <p className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white text-xs">
                <span className="text-sm">This is till Class 4</span> <br />
                Using captivating cartoon characters that tell a video story,
                MUZZY BBC uses a natural immersion approach to language learning
                that mimics the process we all used to acquire our native
                tongue. The unique MUZZY design is effective for visual/spatial,
                verbal, kinesthetic, musical, and logical/mathematical learners.
              </p>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-2 items-center w-full">
          <div className="flex flex-col items-center sm:w-5/12 w-full">
            <img src={book1} className="h-auto" alt="" />
          </div>
          <div className="flex sm:w-6/12 w-full">
            <div className="flex flex-col">
              <span className="px-3 ml-3 py-1 border-[#2f8b2d] border-2 rounded-t-lg w-fit">
                TEXTBOOK
              </span>
              <ul className="px-2 py-1 w-full rounded-l-lg bg-[#2f8b2d] text-white text-justify">
                <li>
                  <span className="text-xs p-2"> TEST FOR AGES 8-10</span>
                </li>{" "}
                <br />
                <li>
                  <span className="text-xs">
                    {" "}
                    For young students, to measure current English skills and
                    provide a foundation for future success.
                  </span>
                </li>{" "}
                <br />
                <li>
                  <span className="text-xs">
                    Designed to assess the general English-language proficiency
                    of young students aged 8+ in reading, listening and
                    speaking, the TOEFL Primary tests provide support for
                    teaching and learning with information about your students’
                    abilities in relation to international standards.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="px-3 ml-3 py-1  border-[#2f8b2d] border-2 rounded-t-lg w-fit">
                TEXTBOOK
              </span>
              <ul className="px-2 py-4 w-full rounded-r-lg bg-[#1f531e] text-white text-justify">
                <li>
                  <span className="text-xs p-2">TEST FOR AGES 11-14 </span>
                </li>
                <li>
                  <span className="text-xs">
                    For middle school to early high school level
                    English-language programs.
                  </span>
                </li>
                <li>
                  <span className="text-xs">
                    The TOEFL Junior tests provide an accurate and reliable
                    measure of your students’ academic and social English skills
                    and abilities in a school setting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wow_english;
