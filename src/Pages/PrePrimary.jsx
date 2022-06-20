import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
// import { useNavigate } from "react-router-dom";
import Zoom from "../Components/Curriculum/prePrimary/Zoom";
import AlphaFun from "../Components/Curriculum/prePrimary/AlphaFun";
import DotDash from "../Components/Curriculum/prePrimary/DotDash";

const PrePrimary = () => {
  //   const navigate = useNavigate();
  const [page, setPage] = useState("default");
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full grid sm:grid-rows-3 grid-rows-4 sm:grid-cols-3 grid-cols-2 gap-[3rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <span
              onClick={() => setPage("zoom")}
              className=" w-full bg-yellow-500 sm:py-[2rem] py-[1rem] hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              ZOOM!
            </span>
            <span
              onClick={() => setPage("alpha_fun")}
              className=" w-full bg-yellow-800 sm:py-[2rem] py-[1rem] hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              ALPHA FUN
            </span>
            <span
              onClick={() => setPage("dot_dash")}
              className=" w-full bg-yellow-400 sm:py-[2rem] py-[1rem] hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              DOT & DASH
            </span>
            <span className=" w-full bg-green-600 sm:py-[2rem] py-[1rem] hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              NUMBER MAX
            </span>
            <span className=" w-full bg-purple-600 sm:py-[2rem] py-[1rem] hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              SPLASH
            </span>
            <span className=" w-full bg-blue-500 sm:py-[2rem] py-[1rem] hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              PITARA
            </span>
            <span className=" w-full sm:px-0 px-[1rem] bg-green-700 sm:py-[2rem] py-[1rem] flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <span>RADIANT WAY</span>
              <span>(PRE-PRIMER AND PRIMER)</span>
            </span>
          </div>
        );
        break;
      case "zoom":
        return (
          <div className="sm:pt-8 pt-[0rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]">
            <Zoom />
          </div>
        );
        break;
      case "alpha_fun":
        return (
          <div className="sm:pt-8 pt-[0rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]">
            <AlphaFun />
          </div>
        );
        break;
      case "dot_dash":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <DotDash />
          </div>
        );
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex flex-col gap-[2rem]">
        {page === "default" ? null : (
          <button
            onClick={() => setPage("default")}
            className="pr-8 pl-6 py-2 font-semibold bg-[#dbdbdb] flex text-lg gap-1 items-center !text-red-800 active:scale-90 transition-all duration-200 ease-linear fixed sm:top-[8rem] lg:top-[11rem] top-[10rem] sm:left-[2rem] left-[0.4rem] rounded-md"
          >
            <ArrowBackIosNew /> Back
          </button>
        )}
        {handlePage()}
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default PrePrimary;
