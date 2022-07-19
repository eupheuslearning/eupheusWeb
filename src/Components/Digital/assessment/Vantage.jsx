import React from "react";
import { Circle } from "@mui/icons-material";

import img1 from "../../../assets/digital/Assessment/Vantage/2.png";
import img2 from "../../../assets/digital/Assessment/Vantage/1.png";
import GoToTop from "../../Top";

const Vantage = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:px-[2rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-bold text-xl">
            Automated Essay <br /> Assessment Apllication
          </span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="w-full text-white text-center font-semibold px-2 sm:px-4 md:px-0 py-1 bg-[#c3b60c]">
            For Middle to Senior Level
          </h1>
        </div>
        <span className="sm:w-3/5 w-full font-semibold text-justify ">
          <span className="flex justify-end">
            {/* <img src={img1} className="w-[30%] h-auto" alt="" /> */}
          </span>
          MY Access! School Edition is the award-winning, cloud-based writing
          development solution that utilizes artificial intelligence and
          linguistic technologies to bring wide-scale differentiated instruction
          to the writing process. Educators can make timely, data-driven
          decisions for successful differentiated instruction and motivate
          students to write more frequently by providing them with immediate
          feedback.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-[90%] w-full">
          <span className="px-3 ml-3 py-1 bg-[#c3b60c] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="border-[#c3b60c]  border-2 rounded-md">
            <div className=" w-full">
              <ul className="px-2 py-1 w-full   text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Uses
                  artificial intelligence and linguistic technologies to bring
                  wide-scale differentiated instruction to the writing process
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Provides over 1800 writing prompts across subjects and genres
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" />{" "}
                  &nbsp;Unlimited opportunities to write and revise
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Allows
                  teachers to create their own prompts
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Delivers immediate feedback to students to improve their
                  writing
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Aids
                  students in preparing for high-stake assessments
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Provides teachers with data that can be used to provide
                  focussed instructions for each student
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Access
                  to a variety of prewriting tools, including graphic organizers
                  and printables to assist them in planning their responses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[100%] flex items-center justify-center mb-8">
        <img src={img2} className="w-1/2 h-auto rounded-lg" alt="" />
      </div>

      <GoToTop />
    </div>
  );
};

export default Vantage;
