import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/worldbook/1.png";

import img4 from "../../../assets/digital/worldbook/2.png";
import img5 from "../../../assets/digital/worldbook/5.png";
import img6 from "../../../assets/digital/worldbook/7.png";
import img7 from "../../../assets/digital/worldbook/9.png";

import img8 from "../../../assets/digital/worldbook/3.png";
import img9 from "../../../assets/digital/worldbook/4.png";
import img10 from "../../../assets/digital/worldbook/6.png";
import img11 from "../../../assets/digital/worldbook/8.png";

const Worldbook = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col gap-2 w-full px-4 items-start">
          <div className="flex flex-col items-start gap-4 sm:w-[30%] w-full justify-start">
            <span className="font-bold">Entrepreneurship</span>
            <img src={img1} className="w-full h-auto" alt="" />
            <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-purple-700">
              For Primary to Senior Levels
            </h1>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <img src={img4} className="w-full h-auto" alt="" />
            </div>
          </div>
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full ">
              <span className="flex justify-end flex-col items-end">
                <span className="font-bold">Pre Primary*</span>
                <img src={img8} className="w-[30%] h-auto" alt="" />
                <span className="font-bold">EARLY WORLD OF LEARNING</span>
              </span>
              <span className=" ">
                Image-based navigation helps young readers navigate through
                stories, games, videos, and interactive coloring pages for
                educational entertainment.
              </span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <span className="flex justify-start flex-col items-start">
                <span className="font-bold">Primary*</span>
                <img src={img9} className="w-[30%] h-auto" alt="" />
                <span className="font-bold">WORLD BOOK KIDS</span>
              </span>
              <span className=" ">
                Image-based navigation helps young readers navigate through
                stories, games, videos, and interactive coloring pages for
                educational entertainment.
              </span>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <img src={img5} className="w-full h-auto" alt="" />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <img src={img6} className="w-full h-auto" alt="" />
            </div>
          </div>
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <span className="flex justify-end flex-col items-end">
                <span className="font-bold">Middle*</span>
                <img src={img10} className="w-[30%] h-auto" alt="" />
                <span className="font-bold">WORLD BOOK KIDS</span>
              </span>
              <span className=" ">
                Image-based navigation helps young readers navigate through
                stories, games, videos, and interactive coloring pages for
                educational entertainment.
              </span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <span className="flex justify-start flex-col items-start">
                <span className="font-bold">Senior*</span>
                <img src={img11} className="w-[30%] h-auto" alt="" />
                <span className="font-bold">WORLD BOOK KIDS</span>
              </span>
              <span className=" ">
                Image-based navigation helps young readers navigate through
                stories, games, videos, and interactive coloring pages for
                educational entertainment.
              </span>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col sm:w-1/2 w-full">
            <div className="flex flex-col w-full">
              <img src={img7} className="w-full h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Worldbook;
