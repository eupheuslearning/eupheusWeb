import React from "react";
import { Circle } from "@mui/icons-material";

import book2 from "../../../assets/curriculum/cbse/wow_grammer_com/book1.png";
import wow_com from "../../../assets/curriculum/cbse/wow_grammer_com/Curriculum Catalogue_2021-22_Page_44.jpg";
import girl from "../../../assets/curriculum/cbse/wow_grammer_com/girl.png";
import fiction from "../../../assets/curriculum/cbse/wow_grammer_com/fiction.png";

const Icse_wow_grammer_com = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wow_com} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            Written according to the CISCE curriculums for lower and upper
            primary levels published in 2016, &nbsp;
            <span className="text-[#246398] font-semibold">
              WOW! ICSE Grammar & Composition
            </span>
            &nbsp; is based on the 3 Ps of learning language–Presentation,
            Practice and Production.
            <br />
            The series brings together the meaning and form of grammar together
            through systematic practice and fun activities. Ideal for young
            learners in the early stages of English language learning, the
            series is based on a unique curriculum design which recycles grammar
            points at every level and builds on previous understanding. This
            spiraling curriculum eases the learning curve and helps students
            negotiate new grammar topics from familiar premises. The material
            has been thoroughly class tested and piloted by some of the best
            curriculum teachers.
            <br />
            Comprehensive and curriculum-faithful, WOW! ICSE Grammar &
            Composition makes learning grammar unusually engaging
          </span>

          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#7bc4ff] py-2">
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
              <span className="text-black font-semibold">210</span>
              <span className="text-black font-semibold">260</span>
              <span className="text-black font-semibold">285</span>
              <span className="text-black font-semibold">285</span>
              <span className="text-black font-semibold">375</span>
              <span className="text-black font-semibold">395</span>
              <span className="text-black font-semibold">400</span>
              <span className="text-black font-semibold">405</span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <div className="flex flex-col items-center sm:w-4/12 w-full">
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#246398] rounded-t-lg w-fit text-white">
                KEY FEATURES
              </span>
              <ul className="px-2 py-1 w-full rounded-md bg-[#7bc4ff] text-black">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Focus
                  on teaching meaning and structure simultaneously
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;•
                  Inductive Approach—helping learners discover the rules
                  themselves
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Comprehensible Input—basing the material in the concrete
                  situation of the learner
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Spiralling curriculum—start and go from any level because
                  every level revisits legacy concepts
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" />{" "}
                  &nbsp;Exhaustive treatment of figurative language in upper
                  primary (classes 6 to 8)
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Comprehensive structural grammar taught in classes 6-8 with
                  simultaneous focus on functions
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  In-depth teaching of topics by covering every topic
                  comprehensively. Certain never-before-taught concepts also
                  find focus.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Mix of
                  traditional cloze, rewriting tasks, and independent task-based
                  learning
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Teaching of writing by focusing equally on the process as well
                  as the product.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-7/12 w-full m-4">
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#246398] rounded-t-lg w-fit text-white">
                SUPPLEMENTED WITH
              </span>
              <div className=" w-full flex rounded-t-lg bg-[#7bc4ff] text-black">
                <div className="flex flex-col items-center w-1/2  ">
                  <img src={girl} className="h-auto rounded-lg" alt="" />
                </div>
                <div className="flex flex-col justify-center w-1/2 bg-[#7bc4ff] ">
                  <img src={fiction} className="h-auto w-40 " alt="" />
                  <p className="">For inculcating the habit of reading</p>
                </div>
              </div>
              <div className="px-2 py-1 w-full flex justify-items-center bg-[#7bc4ff]">
                <h1 className="bg-[#246398]  rounded-full p-2 w-[80%] text-center m-auto">
                  Our 6-step methodology
                </h1>
              </div>
              <div className="px-2 py-1 w-full flex bg-[#7bc4ff]">
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
              <div className="px-2 py-1 w-full flex bg-[#7bc4ff]">
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
              <div className="px-2 py-1 w-full flex rounded-b-lg bg-[#7bc4ff]">
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
      </div>
    </>
  );
};

export default Icse_wow_grammer_com;
