import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/sanako/7.png";
import img2 from "../../../assets/digital/sanako/2.png";
import img5 from "../../../assets/digital/sanako/8.png";

const Enounce = ({ sOpen }) => {
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
          <b>
            Enounce Live is an online solution for pronunciation practice. A
            user can listen to authentic speech models read any text or words
            selected, record own voice for comparison, and receive immediate
            feedback.
          </b>{" "}
          <br /> <br />
          Students can practice pronunciation after class or at home getting
          valuable feedback during the process of of language learning that is
          often the hardest to perfect. From everyday expressions to specialized
          terminology, any text you come across can be turned into a
          pronunciation exercise. It can be used for independent language
          learning.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex sm:w-4/12 flex-col ">
          <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
            KEY FEATURES
          </span>
          <ul className="rounded-md flex flex-col gap-2 p-4 border-2 border-red-500">
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Can be used on
              multiple platforms: App or Browser (Google Chrome browser on
              Chromebooks™, PCs and Macs)
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              Enables anytime, anywhere learning using your existing materials
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              Supports learning from beginner to advanced levels
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Reinforces
              active learning
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:w-7/12 w-full">
          <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
            BENEFITS
          </span>
          <ul className="rounded-md flex flex-col gap-4 p-4 border-2 border-red-500">
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Allows practice
              of fluency, pronunciation, and intonation
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              Enhances presentation skills
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Practising
              reading out loud improves students’ confidence
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              Self-evaluation possible for students and can repeat the exercise
              at their own pace and record several times for remedial action.
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Perform
              language-learning activities in classroom, at home, or on the move
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Learn relevant
              vocabulary
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Automatic
              scoring inspires students to improve and makes an uninteresting
              task engaging
            </li>
          </ul>
        </div>
      </div>
      <img src={img5} className="w-[90%] h-auto m-auto" alt="" />
    </div>
  );
};

export default Enounce;
