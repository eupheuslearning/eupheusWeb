import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Properties/Skoolbook/1.png";
import img2 from "../../../assets/digital/Properties/Skoolbook/2.png";
import img3 from "../../../assets/digital/Properties/Skoolbook/3.png";
import img4 from "../../../assets/digital/Properties/Skoolbook/4.png";
import img5 from "../../../assets/digital/Properties/Skoolbook/5.png";
import img6 from "../../../assets/digital/Properties/Skoolbook/6.png";
import img7 from "../../../assets/digital/Properties/Skoolbook/7.png";
import img8 from "../../../assets/digital/Properties/Skoolbook/8.png";
import img9 from "../../../assets/digital/Properties/Skoolbook/9.png";

import GoToTop from "../../Top";

const Skool = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold text-xl">Digital Book Club</span>
            <img src={img1} className="w-[60%] h-auto" alt="" />
            <h1 className="w-full sm:w-[50%] md:w-full text-white text-center text-xl font-semibold px-3 py-1 bg-[#0bc096]">
              For Grades 1 to 5
            </h1>
          </div>
          <img src={img2} className="w-[60%] h-auto" alt="" />
        </div>
        <div className="flex justify-center  w-full items-center ">
          <img src={img3} className="w-full" alt="" />
        </div>
        <div className="grid grid-rows-2 w-full">
          <div className="w-full grid grid-cols-3 ">
            <img src={img4} className="w-full" alt="" />
            <img src={img5} className="w-full" alt="" />
            <img src={img6} className="w-full" alt="" />
          </div>
          <div className="w-full grid grid-cols-3">
            <img src={img7} className="w-full" alt="" />
            <img src={img8} className="w-full" alt="" />
            <img src={img9} className="w-full" alt="" />
          </div>
        </div>

        <GoToTop />
      </div>
    </>
  );
};

export default Skool;
