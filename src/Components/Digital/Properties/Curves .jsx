import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Properties/curve/1.png";
import img2 from "../../../assets/digital/Properties/curve/2.png";

import GoToTop from "../../Top";

const Curves = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col relative justify-start gap-2 w-full items-start">
          <img src={img2} className="w-full" alt="" />
          <div className="flex sm:flex-row flex-col justify-start sm:justify-start gap-2 w-1/2 sm:w-full px-4 items-start sm:items-start absolute top-0 sm:top-12">
            <div className="flex flex-col items-center gap-2 sm:gap-4 sm:w-[30%] w-full">
              <span className="font-bold text-xs sm:text-lg">
                Cursive Writting
              </span>
              <img src={img1} className="w-[40%] sm:w-[50%] h-auto" alt="" />
              <h1 className="w-full sm:w-[50%] md:w-full text-white  text-xs sm:text-base text-center font-semibold px-1 sm:px-3 py-0 sm:py-1 bg-[#ae1c05]">
                For Pre-Primary to Senior Levels
              </h1>
            </div>
          </div>
        </div>

        <GoToTop />
      </div>
    </>
  );
};

export default Curves;
