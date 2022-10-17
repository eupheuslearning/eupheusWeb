import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Muzzy/1.png";
import img2 from "../../../assets/digital/Muzzy/7.png";
import img3 from "../../../assets/digital/Muzzy/2.png";
import img4 from "../../../assets/digital/Muzzy/3.png";
import img5 from "../../../assets/digital/Muzzy/4.png";

const Muzzy = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Language Learning Solution</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-red-500">
            For Primary to Middle Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full ">
          <b>
            World’s # 1 multimedia, multilingual, multi-platform and
            multiawarded language learning course for children
          </b>{" "}
          <br /> <br />
          Using captivating cartoon characters that tell a video story, MUZZY
          BBC uses a natural immersion approach to language learning that mimics
          the process used to acquire native language. The unique MUZZY design
          is effective for visual/spatial, verbal, kinesthetic, musical, and
          logical/mathematical learners.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center  mt-[2rem] w-full">
        <div className="flex sm:w-9/12 flex-col ">
          <span className="px-3 ml-8 py-1 text-red-500 font-bold text-2xl w-fit">
            WHY MUZZY?
          </span>
          <ul className="rounded-md flex flex-col gap-2 p-4 ">
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> &nbsp; Developed
              by the British Broadcasting Corporation
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              &nbsp; No grammar or complex structures to remember
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              &nbsp; Reading and non-reading children can use MUZZY
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              &nbsp; Repetition is key! Children have unlimited opportunities to
              watch the story of Muzzy and his friends and to play games over
              and over.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center  mt-[2rem] w-full">
        <div className="flex sm:w-5/12 flex-col ">
          <span className="px-3 ml-8 py-1 text-red-500 font-bold text-2xl w-fit">
            BENEFITS FOR CHILDREN
          </span>
          <ul className="rounded-md flex flex-col gap-2 p-4 ">
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> &nbsp; Language
              acquisition is achieved during the 'window of eortless learning'
              when young minds are most receptive.
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              &nbsp; A second language gives children an advantage in their
              school years and beyond, including higher test scores, better and
              more advanced reading skills, and greater confidence.
            </li>
          </ul>
          <span>
            <img src={img3} className="w-[80%] p-4 h-auto m-auto" alt="" />
          </span>
          <span className=" capitalize font-bold text-2xl text-center p-2">
            AWARDS WON
          </span>
          <span>
            <img src={img4} className="w-[90%] h-auto m-auto" alt="" />
          </span>
          <span>
            <img src={img5} className="w-[90%] h-auto m-auto" alt="" />
          </span>
        </div>
        <div className="flex flex-col sm:w-6/12 w-full">
          <img src={img2} className=" h-auto m-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Muzzy;
