import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Assessment/targetPlus/1.png";
import img2 from "../../../assets/digital/Assessment/targetPlus/2.png";
import img3 from "../../../assets/digital/Assessment/targetPlus/3.png";
import img4 from "../../../assets/digital/Assessment/targetPlus/4.png";
import img5 from "../../../assets/digital/Assessment/targetPlus/5.png";
import img6 from "../../../assets/digital/Assessment/targetPlus/6.png";
import img7 from "../../../assets/digital/Assessment/targetPlus/7.png";
import GoToTop from "../../Top";

const TargetPlus = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold">Tools for improving Results</span>
            <img src={img1} className="w-full h-auto" alt="" />
            <h1 className="w-full sm:w-[50%] md:w-full text-white text-center font-semibold px-3 py-1 bg-[#ae3205]">
              For Primary to Senior Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold  text-justify">
            <span className="text-[#ae3205]"> iversusi</span> is a process of
            improving results using assessments ‘as’ learning
            <br /> It improves results in every class as it provides interactive
            diagnostic reports and personal action plans instantly that are
            followed by immediate corrective action
          </span>
        </div>

        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center justify-center w-full md:w-full">
          <div className="">
            <span className="flex font-bold justify-center items-center my-2">
              {" "}
              <span className="text-[#ae3205]"> iversusi</span>{" "}
              &nbsp;stakeholder benefits
            </span>
            <div className="flex flex-col  w-full ">
              <span className="px-3 ml-3  bg-[#e27c24] rounded-t-lg w-fit text-white">
                Schools
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#e27c24] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Improve Board
                  results
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Benefit from a better image care for every child’s
                  improvement
                </li>
              </ul>
            </div>
            <div className="flex flex-col  w-full my-2">
              <span className="px-3 ml-3  bg-[#c7a613] rounded-t-lg w-fit text-white">
                Teachers
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#b0a810] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Save time
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Work more effectively
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp;Get instant feedback
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Address individual student needs in entire class
                  settings
                </li>
              </ul>
            </div>
            <div className="flex flex-col  w-full my-2 ">
              <span className="px-3 ml-3  bg-[#8d9ea3] rounded-t-lg w-fit text-white">
                Parents
              </span>

              <ul className="px-2 py-1 w-full rounded-md border-[#8d9ea3] border-2 text-sm">
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Get personalized
                  reports that pinpoint areas of strength and improvement
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Help their children to study smarter, not just harder
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:w-[40%] w-full ">
            <span className=" text-justify flex justify-center font-bold">
              {" "}
              <span className="text-[#ae3205]"> iversusi</span> &nbsp;process
            </span>
            <img src={img2} className="mt-[1rem]" alt="" />
          </div>
        </div>
        <img src={img3} className="mt-[1rem]" alt="" />
        <div className="flex flex-cols w-[100%] items-center justify-center ">
          <img
            src={img4}
            className="my-[1rem] w-[20%] h-[12rem]  sm:w-[20%] sm:h-[13.9rem] md:w-[20%] md:h-[25rem]"
            alt=""
          />
          <img
            src={img5}
            className="my-[1rem]  w-[20%] h-[12rem] sm:w-[20%] sm:h-[13.9rem] md:w-[20%] md:h-[25rem]"
            alt=""
          />
          <img
            src={img6}
            className="my-[1rem]  w-[20%] h-[12rem] sm:w-[20%] sm:h-[13.9rem] md:w-[20%] md:h-[25rem]"
            alt=""
          />
          <img
            src={img7}
            className="my-[1rem]  w-[20%] h-[12rem] sm:w-[20%] sm:h-[13.9rem] md:w-[20%] md:h-[25rem]"
            alt=""
          />
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default TargetPlus;
