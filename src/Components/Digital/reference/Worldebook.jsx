import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/worldbook/1.png";
import img2 from "../../../assets/digital/worldbook/10.png";
import img3 from "../../../assets/digital/worldbook/11.png";

const Worldebook = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-bold">Advanced Life Skills</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-red-500">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full">
          World Book eBooks is a premier collection of illustrated, engaging
          titles that supports a span of curriculum areas and reading levels.
          World Book eBooks goes above and beyond other eBook platforms by
          providing a child-friendly layout and extensive subject coverage, as
          well as such interactive features as games, videos, and audio clips.{" "}
          <br />{" "}
          <b>Access to over 2,500 eBooks and World Book® exclusive content</b>
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-5/12 w-full">
          <span className="px-3 ml-8 py-1 text-white font-semibold bg-red-500 rounded-t-lg w-fit">
            SUBJECTS
          </span>
          <ul className="px-2 py-1 w-full rounded-md border-2 border-red-400 text-black">
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Animals
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Arts and
              Crafts
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;
              Biographies and Autobiographies
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;
              Environment
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Fiction and
              Literature
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Health
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;History
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Humor
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Mathematics
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Mysteries
              and Thrillers
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Mythology
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Science and
              Nature
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Social
              Studies
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Space
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" />{" "}
              &nbsp;Transportation
            </li>
          </ul>
        </div>
        <div className=" flex flex-col rounded-lg sm:w-5/12 w-full gap-3 py-4">
          <img src={img2} className="mt-[1rem]" alt="" />
        </div>
      </div>
      <img src={img3} className=" w-[90%] m-auto mt-[1rem]" alt="" />
    </div>
  );
};

export default Worldebook;
