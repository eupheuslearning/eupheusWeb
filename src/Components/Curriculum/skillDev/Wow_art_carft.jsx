import React from "react";
import { Circle } from "@mui/icons-material";
import book4 from "../../../assets/curriculum/skillDev/wow_art_craft/1.png";
import book5 from "../../../assets/curriculum/skillDev/wow_art_craft/2.png";
import englishvibes from "../../../assets/curriculum/skillDev/wow_art_craft/Curriculum Catalogue_2021-22_Page_58.jpg";

const Wow_art_carft = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-3/5 w-full">
            <span className="text-[#594] font-semibold">WOW! Art & Craft</span>{" "}
            &nbsp; is an eight-book series designed to ignite creativity in
            learners and empower them to express themselves through art. Based
            on NEP 2020, it equips learners to use art and craft to communicate
            their ideas to others. A variety of activities and strategies are
            designed to keep the learners engaged and help develop their
            psychomotor and communication skills.
          </span>
          <div className="sm:w-2/5 w-full">
            <div className="flex  gap-4 rounded-md w-fit h-fit px-3 justify-center bg-[#a0e58f] py-2">
              <div className="flex flex-col gap-[2px] ">
                <span className="text-white font-semibold">Title</span>
                <span className="text-black font-semibold">Book A</span>
                <span className="text-black font-semibold">Book B</span>
                <span className="text-black font-semibold">Book C</span>
                <span className="text-black font-semibold">Book 1</span>
                <span className="text-black font-semibold">Book 2</span>
                <span className="text-black font-semibold">Book 3</span>
                <span className="text-black font-semibold">Book 4</span>
                <span className="text-black font-semibold">Book 5</span>
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="text-white font-semibold">Price</span>
                <span className="text-black font-semibold">410</span>
                <span className="text-black font-semibold">410</span>
                <span className="text-black font-semibold">410</span>
                <span className="text-black font-semibold">415</span>
                <span className="text-black font-semibold">415</span>
                <span className="text-black font-semibold">415</span>
                <span className="text-black font-semibold">415</span>
                <span className="text-black font-semibold">415</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-9/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#594] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#a0e58f] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; The
                series fosters creativity through its drawing, colouring, and
                art and craft activities
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Students
                learn basic maths by counting pieces and colours
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Students
                learn to use a paintbrush, which helps to improve their fine
                motor skills
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Experimentation with materials help students to dabble in
                science
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Creating
                art makes students feel good by boosting their self-confidence
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Ensures
                that the creating thinking abilities of the students are
                extended, demonstrated, and applied beyond classroom walls
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full ">
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book5} className=" h-auto" alt="" />
          </div>
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book4} className="rounded-md h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wow_art_carft;
