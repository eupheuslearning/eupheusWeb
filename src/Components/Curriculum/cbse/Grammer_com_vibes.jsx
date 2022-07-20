import React from "react";
import { Circle } from "@mui/icons-material";

import book1 from "../../../assets/curriculum/cbse/grammar_com_vibes/1.png";
import book2 from "../../../assets/curriculum/cbse/grammar_com_vibes/2.png";
import book3 from "../../../assets/curriculum/cbse/grammar_com_vibes/3.png";
import wow_com from "../../../assets/curriculum/cbse/grammar_com_vibes/Curriculum Catalogue_2021-22_Page_23.jpg";
import girl from "../../../assets/curriculum/cbse/wow_grammer_com/girl.png";
import fiction from "../../../assets/curriculum/cbse/wow_grammer_com/fiction.png";

const Grammer_com_vibes = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wow_com} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0 items-center">
          <span className="sm:w-4/5 w-full text-justify">
            <span className="text-[#ee4d9b] font-semibold">
              Grammar and Composition Vibes!
            </span>
            for classes 1 to 8 has been developed to address the need for a
            graded, comprehensive, and rule-based grammar series with brief
            explanations and extensive exercises. Instructional scaffolding
            strategies have been used to incorporate 21st-century skills such as
            critical thinking, creativity, and communication in addition to life
            skills within the series. The series has an unbroken wire frame for
            learning by providing core, supplemental, and home learning
            solutions on the same platform.
          </span>
          <div className="flex gap-4 rounded-md w-fit ml-4 px-3 justify-center bg-[#ec92bd] py-2">
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
              <span className="text-black font-semibold">190</span>
              <span className="text-black font-semibold">210</span>
              <span className="text-black font-semibold">225</span>
              <span className="text-black font-semibold">245</span>
              <span className="text-black font-semibold">260</span>
              <span className="text-black font-semibold">280</span>
              <span className="text-black font-semibold">300</span>
              <span className="text-black font-semibold">315</span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <div className="flex flex-col items-center sm:w-5/12 w-full">
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#ee4d9b] rounded-t-lg w-fit text-white">
                KEY FEATURES
              </span>
              <ul className="px-2 py-1 w-full rounded-md bg-[#fbdaea] text-black">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Spiralling gradation of grammar concepts enabling easy
                  comprehension
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Easy-to-understand examples using real-life scenarios
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Concepts explained using flowcharts and graphic organizers
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Exercises to evaluate learners’ understanding of concepts and
                  to develop real-life skills and create awareness about social
                  and global issues
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Let Us
                  Revise pages providing additional practice
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Comprehension topics to develop reading skills followed by
                  application exercises
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Composition exercises to help learners write independently
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Formats for Writing pages in books 6–8 for quick
                  recapitulation of writing skills
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Series
                  matches the linguistic needs for the syllabi of all boards and
                  schools
                </li>
              </ul>
            </div>
            <div className="m-3 flex w-full">
              <div className="flex flex-row">
                <img src={book1} className=" h-auto" alt="" />
              </div>
              <div className="flex flex-row">
                <img src={book2} className=" h-auto" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-6/12 w-full ">
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#ee4d9b] rounded-t-lg w-fit text-white">
                SUPPLEMENTED WITH
              </span>
              <div className="w-full flex rounded-t-lg bg-[#fbdaea] text-black">
                <div className="flex flex-col items-center w-1/2 rounded-l-lg ">
                  <img src={girl} className="h-auto rounded-l-lg" alt="" />
                </div>
                <div className="flex flex-col justify-center w-1/2 ml-4 ">
                  <img src={fiction} className="h-auto w-40 " alt="" />
                  <p className="">For inculcating the habit of reading</p>
                </div>
              </div>
              <div className="px-2 py-1 w-full flex items-center bg-[#fbdaea]">
                <h1 className="bg-[#ee4d9b] m-auto  font-bold  rounded-full p-2 w-[80%] text-center text-white">
                  Our 6-step methodology
                </h1>
              </div>
              <div className="px-2 py-1 w-full flex bg-[#fbdaea]">
                <div className="flex flex-col  w-1/2 p-3 m-3 border-2 rounded-lg border-[skyblue] bg-white  ">
                  <p className="text-xl">Read </p>

                  <p className="text-sm">The Chapter</p>
                  <br />
                  <p className="text-[9px]">
                    New chapters of 3 books (different levels) are released
                    weekly. Fiction Express is accessible for dyslexic readers
                    and includes a glossary of 40-80 words per chapter.
                  </p>
                </div>
                <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
                  <p className="text-xl">VOTE </p>

                  <p className="text-sm">on the plot</p>
                  <br />
                  <p className="text-[9px]">
                    New chapters of 3 books (different levels) are released
                    weekly. Fiction Express is accessible for dyslexic readers
                    and includes a glossary of 40-80 words per chapter.
                  </p>
                </div>
              </div>
              <div className="px-2 py-1 w-full flex bg-[#fbdaea]">
                <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
                  <p className="text-xl">ANSWER </p>

                  <p className="text-sm">the quiz</p>
                  <br />
                  <p className="text-[9px]">
                    New chapters of 3 books (different levels) are released
                    weekly. Fiction Express is accessible for dyslexic readers
                    and includes a glossary of 40-80 words per chapter.
                  </p>
                </div>
                <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
                  <p className="text-xl">TALK </p>

                  <p className="text-sm">to the author</p>
                  <br />
                  <p className="text-[9px]">
                    Through the forum, students have live conversations with the
                    authors and other students worldwide. They can share ideas,
                    opinions and thoughts about the book.
                  </p>
                </div>
              </div>
              <div className="px-2 py-1 w-full flex rounded-b-lg bg-[#fbdaea]">
                <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
                  <p className="text-xl">ENJOY </p>

                  <p className="text-sm">the activities</p>
                  <br />
                  <p className="text-[9px]">
                    Every chapter includes a set of flexible and useful
                    resources that give teachers the option to tie-in Fiction
                    Express into any school focus and scheme of work.
                  </p>
                </div>
                <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
                  <p className="text-xl">MEASURE </p>

                  <p className="text-sm">the impact</p>
                  <br />
                  <p className="text-[9px]">
                    Progress is shown on the dashboard highlighting the
                    performance at individual or class level: readings, votes,
                    quiz results and forum interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-[40%] w-full ">
            <span className="px-3 ml-3 py-1 bg-[#ee4d9b] rounded-t-lg w-fit text-white justify-end">
              TEACHER SUPPORT
            </span>
            <p className="px-2 py-1 w-full rounded-md bg-[#fbdaea] text-black">
              Teacher’s Manual includes sample lesson plans and the complete
              answer key
            </p>
          </div>
          <div className="flex flex-col sm:w-6/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#ee4d9b] rounded-t-lg w-fit text-white">
              PRACTICE BOOK
            </span>

            <div className="flex w-full px-2 py-1 rounded-md bg-[#fbdaea] ">
              <div className="flex flex-row">
                <ul className=" text-black">
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    Electronic flip book with learning videos on every important
                    topic
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    Concepts explained in a crisp and concise manner for
                    bite-sized learning
                  </li>
                </ul>
              </div>
              <div className="flex flex-row p-2">
                <img src={book3} className="w-full h-50" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grammer_com_vibes;
