import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/cbse/english_vibes/1.png";
import book2 from "../../../assets/curriculum/cbse/english_vibes/2.png";
import englishvibes from "../../../assets/curriculum/cbse/english_vibes/Curriculum Catalogue_2021-22_Page_21.jpg";

const English_vibes = ({ sOpen }) => {
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
            <span className="text-[#b42b92] font-semibold">
              English Vibes! An Integrated Course in English Language{" "}
            </span>
            is a series of eight coursebooks and eight practice books ably
            supported by technology-driven teacher resource packs for each
            level. Every coursebook at each level has{" "}
            <b> a comprehensive but easy-to-transact curriculum. </b> In
            addition to covering the skills of{" "}
            <b> listening, speaking, reading, </b> and <b>writing, </b> the
            units also focus on building <b>active vocabulary</b> and a{" "}
            <b>practical knowledge of grammar.</b> The
            <b>learning of phonics</b> is emphasized in each learning unit from
            levels 1 through 5.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffb2ec] py-2">
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
              <span className="text-black font-semibold">270</span>
              <span className="text-black font-semibold">285</span>
              <span className="text-black font-semibold">300</span>
              <span className="text-black font-semibold">315</span>
              <span className="text-black font-semibold">335</span>
              <span className="text-black font-semibold">350</span>
              <span className="text-black font-semibold">365</span>
              <span className="text-black font-semibold">380</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-[70%] w-full">
            <span className="px-3 ml-3 py-1 bg-[#b42b92] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#ffb2ec] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Learning
                language through literary tools—eclectic literary selection that
                includes classic and contemporary, Indian as well as western
                writings of renowned authors
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Varied
                reading comprehension tasks complying with examination patterns
                and beyond
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Listening tasks based on literary as well as authentic inputs
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Speaking
                skills imparted through varied tasks including pair work,
                speeches, and debates
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Writing
                tasks exhaustively scaffolded through tips, graphic organizers
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Vocabulary contextually taught for active use in real life
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;Grammar
                topics focussed on acquiring both meaning as well as the form of
                language structures through learner-friendly tasks
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Well-graded concepts periodically recycled for recall and
                reinforcement
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Acquisition of a range of 21st-century skills
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-3/12 w-full">
            <span className="px-3 ml-3 py-1 bg-[#b42b92] rounded-t-lg w-fit text-white">
              PRACTICE BOOK
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#ffb2ec] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Linked
                unit-wise with the related coursebook
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Enhances
                the alreadyacquired reading, writing, grammar, and vocabulary
                skills
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Iterates
                the rules of grammar, vocabulary, and guidelines for writing
                wherever necessary
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#b42b92] rounded-t-lg w-fit text-white">
                PRACTICE BOOK
              </span>
              <ul className="px-2 py-1 w-full rounded-md bg-[#ffb2ec] text-black">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Help
                  teachers to complete the course in a 180-day schedule
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Available in print as well as digital versions
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Includes detailed lesson plans, answer keys, e-book,
                  animations, audio-plays, digital worksheets, and online
                  adaptive test generator
                </li>
              </ul>
            </div>
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#b42b92] rounded-t-lg w-fit text-white">
                PRACTICE BOOK
              </span>
              <ul className="px-2 py-1 w-full rounded-md bg-[#ffb2ec] text-black">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Coursebooks supported by a state-of-the-art learning
                  application called Home Learning App
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Enounce (powered by SANAKO, Finland) analyses speech and
                  provides intelligent feedback to encourage speaking at home
                  and to improve pronunciation
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Help
                  learners to practice tasks at home
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Enable
                  parents and teachers to gather performance analytics providing
                  critical, performance-enhancing feedback to the learner
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <div className="flex flex-row w-[50%]">
              {" "}
              <img src={book1} className="w-[80%] h-auto" alt="" />
            </div>
            <div className="flex flex-row w-[70%]">
              {" "}
              <img src={book2} className="w-[80%] h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default English_vibes;
