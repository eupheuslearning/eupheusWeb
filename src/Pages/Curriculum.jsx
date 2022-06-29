import React, { useEffect, useRef } from "react";
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
import banner from "../assets/curriculum/banner.png";

const Curriculum = () => {
  const navigate = useNavigate();
  const myRef = useRef();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const scroll = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  };

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex relative flex-col gap-[2rem]">
        <div className="w-full flex justify-center">
          <button
            onClick={scroll}
            className="w-fit font-semibold sm:block hidden px-6 py-2 bg-red-800 text-gray-100 rounded-md absolute top-[80vh] hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-200 ease-linear"
          >
            Explore
          </button>
        </div>
        <img
          src={banner}
          className="w-full sm:pt-8 pt-[8rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]"
          alt=""
        />
        <div
          ref={myRef}
          className="w-full grid sm:grid-rows-2 grid-rows-3 sm:grid-cols-3 grid-cols-2 gap-[3rem] sm:px-[3rem] px-2 pb-8"
        >
          <span
            onClick={() => navigate("/curriculer/pre_primary")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={pp}
              alt=""
            />
            <span>Pre Primary</span>
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
            <span>CBSE Solutions</span>
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
            <span>ICSE Solutions</span>
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
            <span>Reference</span>
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
            <span>Skill Development</span>
            <span>Solutions</span>
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
            <span>State Board Solutions</span>
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
