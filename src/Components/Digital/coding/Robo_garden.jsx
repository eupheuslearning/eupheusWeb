import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/roboGarden/13.png";
import img2 from "../../../assets/digital/roboGarden/14.png";
import img3 from "../../../assets/digital/roboGarden/15.png";
import GoToTop from "../../Top";

const Robo_garden = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold">Coding Program</span>
            <img src={img1} className="w-full h-auto" alt="" />
            <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-green-700">
              For Primary to Senior Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold">
            In today’s digital world, the ability to code is as fundamental as
            the ability to count or read. <br /> <br />
            Coding is key to developing 21st century literacy that helps build
            the abilities of problem-solving, analytical thinking, and working
            in a team. Starting young gives them an edge and starting with
            something fun, that they actually enjoy, means they learn faster and
            better. <br /> <br />
            Computational thinking is about breaking down tasks into a logical
            sequence of steps to reach an objective.
          </span>
        </div>
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <span className="sm:w-full w-full font-semibold">
            RoboGarden is an easy-to-understand, hands-on educational platform
            where students learn by doing. RoboGarden teaches coding literacy
            without the need for a tech guru for guidance. It is a cloud-based
            program that operates through your browser software.
          </span>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-[40%] w-full ">
            <img src={img2} className="mt-[1rem]" alt="" />
          </div>
          <div className="flex flex-col sm:w-6/12 w-full ">
            <span className="px-3 ml-3 py-1 bg-[#018f35] rounded-t-lg w-fit">
              KEY FEATURES
            </span>

            <ul className="px-2 py-1 w-full rounded-md border-[#018f35] border-2">
              <li>
                <Circle className="!text-[0.5rem]" /> &nbsp; Gamified graded
                content for classes 1 to 12
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp; Fun and easy way to learn to code
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp; Hands-on learning and active participation
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp; Curriculum fully equipped to teach coding literacy from
                basics
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp;Cloud-based programme that operates through your browser
                stakeholders
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp; No need to download any software home
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp; Self-learning platform
              </li>
              <li>
                <Circle className="!text-[0.5rem]" />
                &nbsp;Teacher plays the role of a mentor
              </li>
            </ul>

            <div className="flex flex-col sm:w-[80%] w-full bg-[#018f35] rounded-lg mt-4 m-auto">
              <ul className="px-2 py-1 w-full rounded-md border-[#018f35] border-2 ">
                <span className="text-white text-center font-bold">
                  Content Overview
                </span>
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;Blockly and
                  Textual
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; JavaScript
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Python
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Game Builder
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" /> &nbsp;App Developer:
                  Coming Soon
                </li>
                <li>
                  <Circle className="!text-[0.5rem]" />
                  &nbsp; Artificial Intelligence: Coming Soon home
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src={img3} className="mt-[1rem]" alt="" />
        <GoToTop />
      </div>
    </>
  );
};

export default Robo_garden;
