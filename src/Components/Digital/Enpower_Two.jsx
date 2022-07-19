import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/Enpower/1.png";
import img2 from "../../assets/digital/stepAndLearn/3.png";
import img3 from "../../assets/digital/Enpower/11.png";

import img4 from "../../assets/digital/Enpower/7.png";
import img5 from "../../assets/digital/Enpower/8.png";
import img6 from "../../assets/digital/Enpower/9.png";
import img7 from "../../assets/digital/Enpower/10.png";

const Enpower_Two = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:px-[2rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-bold">Entrepreneurship</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="sm:w-full md:w-full text-white text-center font-semibold px-2 sm:px-4 md:px-0 py-1 bg-[#762581]">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full text-justify">
          <b>EMPOWER through ENTREPRENEURSHIP</b>
          <br /> <br /> India’s first entrepreneurship and life skill
          ‘fun-learning’ ecosystem for early teens (8–18 years) and a one-stop
          destination for schools for making students ‘future ready’ <br />
        </span>
      </div>
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-row sm:flex-col sm:w-3/12 w-full ">
          <div className="flex flex-col w-full">
            <img src={img4} className="w-full h-auto" alt="" />
            <span className="text-center p-2 m-2 bg-[#ebd8b3] rounded-lg">
              Structured curriculum designed by entrepreneurship educators,
              psychologists, curriculum development experts and design thinking
              champions
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col sm:w-3/12 w-full">
          <div className="flex flex-col w-full">
            <img src={img5} className="w-full h-auto" alt="" />
            <span className="text-center p-2 m-2 py-5 bg-[#a3ddff] rounded-lg">
              Age-appropriate workshops, bootcamps, and simulations that are
              modular for schools to adopt as co-curricular/ extra-curricular
              programs
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col sm:w-3/12 w-full">
          <div className="flex flex-col w-full">
            <img src={img6} className="w-full h-auto" alt="" />
            <span className="text-center p-2 m-2 bg-[#ebd8b3]  rounded-lg">
              Sessions conducted by our team of trained facilitators, deployed
              through ‘fun-learning’ games and activities ensuring experiential
              learning for every child
            </span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col sm:w-3/12 w-full">
          <div className="flex flex-col w-full">
            <img src={img7} className="w-full h-auto" alt="" />
            <span className="text-center p-2 m-2  bg-[#a3ddff] rounded-lg">
              Eco-system built through an all India competitive platform, online
              contests, real-life corporate case studies and live interactions
              with entrepreneurs
            </span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col px-3 items-center justify-center w-full">
        <span className="font-bold text-2xl text-[#db8946] text-center m-5">
          Offering 5 unique engagement opportunities for schools to introduce{" "}
          <br />
          entrepreneurship learning
        </span>
      </div>
      <img src={img3} className="m-4" alt="" />
    </div>
  );
};

export default Enpower_Two;
