import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import banner from "../assets/digital/banner.png";

// icons
import img1 from "../assets/digital/1.png";
import img2 from "../assets/digital/2.png";
import img3 from "../assets/digital/3.png";
import img4 from "../assets/digital/4.png";
import img5 from "../assets/digital/5.png";
import img6 from "../assets/digital/6.png";
import img7 from "../assets/digital/7.png";
import img8 from "../assets/digital/8.png";
import img9 from "../assets/digital/9.png";
import img10 from "../assets/digital/10.png";
import img11 from "../assets/digital/11.png";

const Curriculum = () => {
  const navigate = useNavigate();
  const myRef = useRef();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const scroll = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] relative flex flex-col gap-[2rem]">
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
        <div className="w-full grid sm:grid-rows-4 grid-rows-6 sm:grid-cols-3 grid-cols-2 gap-[3rem] sm:px-[3rem] px-2 pb-8">
          <span
            onClick={() => navigate("/digital/kinaesthetic_learning")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img2}
              alt=""
            />
            <span>Kinaesthetic Learning</span>
          </span>
          <span
            onClick={() => navigate("/digital/coding")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img3}
              alt=""
            />
            <span>Coding</span>
          </span>
          <span
            onClick={() => navigate("/digital/reading")}
            className=" w-full flex justify-center flex-col gap-2 cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img4}
              alt=""
            />
            <span>Reading</span>
          </span>
          <span
            ref={myRef}
            onClick={() => navigate("/digital/life_skill")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img5}
              alt=""
            />
            <span>Life Skills</span>
          </span>
          <span
            onClick={() => navigate("/digital/entrepreneurship")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img6}
              alt=""
            />
            <span>Entrepreneurship</span>
          </span>
          <span
            onClick={() => navigate("/digital/reference")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img7}
              alt=""
            />
            <span> Reference/Digital Library</span>
          </span>
          <span
            onClick={() => navigate("/digital/language")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img8}
              alt=""
            />
            <span>Language Learning</span>
          </span>
          <span
            // onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img9}
              alt=""
            />
            <span>Assessments</span>
          </span>
          <span
            // onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img1}
              alt=""
            />
            <span>STEAM</span>
          </span>
          <span
            // onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img11}
              alt=""
            />
            <span>Properties</span>
          </span>
          <span
            // onClick={() => navigate("/curriculer/state_board_sol")}
            className=" w-full flex flex-col gap-2 justify-center cursor-pointer items-center rounded-md sm:text-[2rem] text-sm font-semibold"
          >
            <img
              className="w-1/2 transition-all duration-200 ease-linear hover:-translate-y-2"
              src={img10}
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
