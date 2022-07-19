import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Properties/IFT/1.png";
import img2 from "../../../assets/digital/Properties/IFT/2.png";
import img3 from "../../../assets/digital/Properties/IFT/3.png";
import img4 from "../../../assets/digital/Properties/IFT/4.png";
import img5 from "../../../assets/digital/Properties/IFT/5.png";
import img6 from "../../../assets/digital/Properties/IFT/6.png";

import GoToTop from "../../Top";

const IFT = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold text-xl">Entrepreneurship</span>
            <img src={img1} className="w-[60%] h-auto" alt="" />
            <h1 className="w-full sm:w-[50%] md:w-full text-white text-center font-semibold px-3 py-1 bg-[#be29d8] text-xl">
              For Middle to Senior Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold  text-justify text-xl">
            India’s first Entrepreneur Search & Mentorship Platform for young
            adults (Ages 13–17)
            <br />
            <br />
            Platform to solve problems by building venture ideas
          </span>
        </div>
        <div className="w-full bg-[#aa56b9] flex justify-center items-center mx-0 my-2">
          <span className="font-bold text-md sm:text-[60px] text-white text-center py-1">
            THE PURPOSE
          </span>
        </div>

        <div className="flex justify-center  w-full items-center relative ">
          <img src={img3} className="w-full" alt="" />
          <div className="w-full absolute flex flex-row justify-center items-center gap-1 sm:gap-8">
            <img src={img2} className="w-[30%] h-auto" alt="" />

            <img src={img4} className="w-[30%] h-auto" alt="" />

            <img src={img5} className="w-[30%] h-auto" alt="" />
          </div>
        </div>
        <div className="w-full">
          <img src={img6} className="w-full" alt="" />
        </div>

        <GoToTop />
      </div>
    </>
  );
};

export default IFT;
