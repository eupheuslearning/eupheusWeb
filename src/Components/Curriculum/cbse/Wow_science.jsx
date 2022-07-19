import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/cbse/wow_science/1.png";
import book2 from "../../../assets/curriculum/cbse/wow_science/2.png";
import book3 from "../../../assets/curriculum/cbse/wow_science/3.png";

import englishvibes from "../../../assets/curriculum/cbse/wow_science/Curriculum Catalogue_2021-22_Page_29.jpg";

const Wow_science = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:px-[2rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0 items-center">
          <span className="sm:w-4/5 w-full text-justify">
            A series of eight course books,&nbsp;
            <span className="text-[#033f88] font-semibold">WOW! Science</span>
            &nbsp; aims to ensure effective learning with the help of an
            innovative and interesting teaching-learning process in a
            learner-friendly environment. The approach followed in the books
            evokes curiosity and attentiveness in our young learners’ mind to
            the world around them. <br />
            Fascinating pictures, vibrant illustrations, daily life examples and
            handson experiments are used to stimulate young minds in connecting
            the concepts taught with the experiences about the world around
            them, that they would acquire gradually. A variety of exercises,
            activities and project works that help teachers and parents in
            evaluation process, have been included. Inquiry-based approach to
            science was been intricately woven with the guidelines of NCF and
            syllabus listed by various boards.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#71aaf0] py-2">
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
              <span className="text-black font-semibold">400</span>
              <span className="text-black font-semibold">415</span>
              <span className="text-black font-semibold">435</span>
              <span className="text-black font-semibold">445</span>
              <span className="text-black font-semibold">460</span>
              <span className="text-black font-semibold">520</span>
              <span className="text-black font-semibold">520</span>
              <span className="text-black font-semibold">520</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-1 py-1 bg-[#033f88] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] bg-[#bcd4f2] rounded-lg justify-center">
            <div className="bg-[#bcd4f2] sm:w-1/2 w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-md  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;The{" "}
                  Each chapter progresses logically, connecting the previous
                  knowledge with the new content through a useful and
                  interactive ‘Warm–up’ activity to begin with.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; A list
                  of the aims of learning of each chapter, under ‘We will learn’
                  begins the chapter and a flow chart of the learning
                  accomplished, under ‘I have learnt’, each the chapter.
                </li>
              </ul>
            </div>
            <div className="bg-[#bcd4f2] sm:w-1/2 w-full sm:flex-col">
              <ul className="px-2 py-1  rounded-md  text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;The The
                  conversation among the three characters– Jigyasa, Chinmaya and
                  Vaigyanik Chacha–is used time and again to make the atmosphere
                  conducive to learning.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; A wide
                  variety of exercises and a plethora of activities and project
                  works given at the end of summarizes chapter help to evaluate
                  the learning.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Each
                  chapter is accompanied by a worksheet for further practice and
                  to cement the learning of the topic.
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
    </>
  );
};

export default Wow_science;
