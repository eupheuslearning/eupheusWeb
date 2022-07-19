import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/fiction_express/1.png";
import img2 from "../../../assets/digital/fiction_express/line.PNG";
import img3 from "../../../assets/digital/fiction_express/16.png";
import GoToTop from "../../Top";
// import img3 from "../../assets/digital/reading_prog/line.png";

const Fiction_express = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } sm:px-[2rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="  grid grid-cols-1 grid-row-3 md:grid-cols-3">
          <div className="col-span-2">
            <div className=" grid grid-cols-2">
              <div className=" m-4">
                <span className="font-bold">Coding Program</span>
                <img src={img1} className="w-full h-auto" alt="" />
                <h1 className="w-full  text-white text-center font-semibold sm:text-1 px-3 py-1 bg-[#20cae8]">
                  For Primary to Senior Levels
                </h1>
              </div>
              <div className="flex text-justify px-4 w-full sm:w-full">
                Reading plays a central role in a child’s education and keeping
                this need in mind, we have collaborated with Fiction Express by
                Boolino, Europe’s leading and innovative book platform, to
                nurture reading habits in students and improve lifelong-learning
                outcomes.
              </div>
            </div>
            <div>
              <span className="px-3 ml-3 py-1 text-white bg-[#20cae8] rounded-t-lg w-fit">
                KEY FEATURES
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#20cae8] border-2">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp; Age-appropriate:
                  3 levels of live books
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; At any time, students can choose from one of three
                  books being published live for ages 6+, 8+, and 10+
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Read online, offline or on paper
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Online comprehension quiz with immediate result
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp;Weekly activities with each chapter
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Interact with authors through the book forum of every
                  live book
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl m-2 font-bol text-[#20cae8]">
              A New Way To Enjoy Reading
            </h1>
            <span>
              <img
                src={img3}
                className=" h-auto w-[40%] sm:[50%] md:w-full "
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="w-full h-10  flex items-center  bg-[#20cae8] justify-center ">
          <span className="font-bold text-white ">Our 6-step methodology</span>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 grid-rows-1">
          <div className=" p-3 m-3 border-2 rounded-lg border-[skyblue] bg-white  ">
            <p className="text-xl">Read </p>

            <p className="text-sm">The Chapter</p>
            <br />
            <p className="text-[9px]">
              New chapters of 3 books (different levels) are released weekly.
              Fiction Express is accessible for dyslexic readers and includes a
              glossary of 40-80 words per chapter.
            </p>
          </div>
          <div className=" m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
            <p className="text-xl">VOTE </p>

            <p className="text-sm">on the plot</p>
            <br />
            <p className="text-[9px]">
              New chapters of 3 books (different levels) are released weekly.
              Fiction Express is accessible for dyslexic readers and includes a
              glossary of 40-80 words per chapter.
            </p>
          </div>
          <div className=" m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
            <p className="text-xl">ANSWER </p>

            <p className="text-sm">the quiz</p>
            <br />
            <p className="text-[9px]">
              New chapters of 3 books (different levels) are released weekly.
              Fiction Express is accessible for dyslexic readers and includes a
              glossary of 40-80 words per chapter.
            </p>
          </div>
          <div className=" m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
            <p className="text-xl">TALK </p>

            <p className="text-sm">to the author</p>
            <br />
            <p className="text-[9px]">
              Through the forum, students have live conversations with the
              authors and other students worldwide. They can share ideas,
              opinions and thoughts about the book.
            </p>
          </div>
          <div className="m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
            <p className="text-xl">ENJOY </p>

            <p className="text-sm">the activities</p>
            <br />
            <p className="text-[9px]">
              Every chapter includes a set of flexible and useful resources that
              give teachers the option to tie-in Fiction Express into any school
              focus and scheme of work.
            </p>
          </div>
          <div className=" m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
            <p className="text-xl">MEASURE </p>

            <p className="text-sm">the impact</p>
            <br />
            <p className="text-[9px]">
              Progress is shown on the dashboard highlighting the performance at
              individual or class level: readings, votes, quiz results and forum
              interactions.
            </p>
          </div>
        </div>
        <div className="w-full rounded-md p-5 bg-[#20cae8] ">
          <span className="font-bold text-white ">
            <Circle className="!text-[0.5rem]" />
            88% parents with kids aged 6–17 say it is extremely important for
            their children to read books for fun.
          </span>
          <br />
          <span className="font-bold text-white">
            <Circle className="!text-[0.5rem]" />
            An overwhelming majority of children (87%) say they would read more
            if they could find more books that they like.{" "}
          </span>
          <span className="flex justify-end text-white font-bold pr-4">
            *Kids & Family Reading Report
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src={img2} className="w-full h-auto" alt="" />
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default Fiction_express;
