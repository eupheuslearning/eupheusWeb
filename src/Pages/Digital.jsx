import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import pp from "../assets/curriculum/prePrimary.png";
import cbse from "../assets/curriculum/cbse.png";
import icse from "../assets/curriculum/icse.png";
import ref from "../assets/curriculum/ref.png";
import skillDev from "../assets/curriculum/skillDev.png";
import state from "../assets/curriculum/state.png";
import banner from "../assets/digital/banner.png";

const Curriculum = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex flex-col gap-[2rem]">
        <img
          src={banner}
          className="w-full sm:pt-8 pt-[8rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]"
          alt=""
        />
        <div className="w-full grid sm:grid-rows-4 grid-rows-6 sm:grid-cols-3 grid-cols-2 gap-[3rem] sm:px-[3rem] px-2 pb-8">
          <span
            onClick={() => navigate("/digital/kinaesthetic_learning")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={pp}
              alt=""
            />
            <span>Kinaesthetic Learning</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/cbse")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={cbse}
              alt=""
            />
            <span>Coding</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/icse")}
            className=" w-full flex justify-center flex-col gap-2 cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={icse}
              alt=""
            />
            <span>Reading</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/reference")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={ref}
              alt=""
            />
            <span>Life Skills</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/skill_dev")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={skillDev}
              alt=""
            />
            <span>Entrepreneurship</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
            <span> Reference/Digital Library</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
            <span>Language Learning</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
            <span>Assessments</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
            <span>STEAM</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
            <span>Properties</span>
          </span>
          <span
            onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={state}
              alt=""
            />
            <span>Special Initiatives</span>
          </span>
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Curriculum;
