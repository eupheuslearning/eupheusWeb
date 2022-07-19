import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Radiant/1.png";
import img2 from "../../../assets/digital/Radiant/2.png";
import img3 from "../../../assets/digital/Radiant/3.png";
import img4 from "../../../assets/digital/Radiant/4.png";
import img5 from "../../../assets/digital/Radiant/5.png";

const Radiant_ly = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Language Learning Solution</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <span>Powered by Sanako</span>
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-red-500">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full ">
          <img src={img2} className="w-[90%] h-auto m-auto" alt="" />
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full bg-yellow-600 p-2 rounded-lg">
        <span className="text-center text-2xl font-bold text-white">
          A.I.-Powered Adaptive App to improve <br />
          your grammar skills in an interactive and fun way.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full ">
        <img src={img3} className="w-[90%] h-auto m-auto" alt="" />
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex sm:w-1/2 flex-col ">
          <img src={img4} className="w-[90%] h-auto m-auto" alt="" />
        </div>
        <div className="flex flex-col sm:w-1/2 w-full">
          <img src={img5} className="w-[90%] h-auto m-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Radiant_ly;
