import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";
import Handwriting from "../../Components/Curriculum/skillDev/Handwriting";
import Merry_go_round from "../../Components/Curriculum/skillDev/Merry_go_round";
import Time_to_learn_arts from "../../Components/Curriculum/skillDev/Time_to_learn_arts";
import Value_first from "../../Components/Curriculum/skillDev/Value_first";
import Wow_art_carft from "../../Components/Curriculum/skillDev/Wow_art_carft";
import Wow_mind_map from "../../Components/Curriculum/skillDev/Wow_mind_map";
import Wow_within_worlds from "../../Components/Curriculum/skillDev/Wow_within_worlds";

// icons
import artIcon from "../../assets/curriculum/skillDev/artIcon.png";
import gkIcon from "../../assets/curriculum/skillDev/gkIcon.png";
import handwritingIcon from "../../assets/curriculum/skillDev/handwritingIcon.png";
import merrygoIcon from "../../assets/curriculum/skillDev/merrygoIcon.png";
import mindmapIcon from "../../assets/curriculum/skillDev/mindmapIcon.png";
import valueIcon from "../../assets/curriculum/skillDev/valueIcon.png";
import wowartIcon from "../../assets/curriculum/skillDev/wowartIcon.png";
import { useNavigate } from "react-router-dom";

const SkillDev = () => {
  //   const navigate = useNavigate();
  const [page, setPage] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full grid sm:grid-rows-5 grid-rows-7 sm:grid-cols-3 grid-cols-2 sm:gap-[4rem] gap-[2rem] sm:px-[3rem] px-4 pb-8 sm:pt-8 pt-[13rem] lg:mt-[16vh] md:mt-[18vh] sm:mt-[21vh]">
            <span
              onClick={() => setPage("art")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={artIcon} className="w-[90%] h-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("artCraft")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={wowartIcon} className="w-[90%] h-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("handwriting")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={handwritingIcon} className="w-[90%] h-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("merrygo")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={merrygoIcon} className="w-[90%] h-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("mindmap")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={mindmapIcon} className="w-[90%] h-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("value")}
              className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={valueIcon} className="w-[90%] h-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("gk")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={gkIcon} className="w-[90%] h-auto" alt="" />
            </span>
          </div>
        );
        break;
      case "art":
        return (
          <div className="sm:mt-4">
            <Time_to_learn_arts />
            <GoToTop />
          </div>
        );
        break;
      case "gk":
        return (
          <div className="sm:mt-4">
            <Wow_within_worlds />
            <GoToTop />
          </div>
        );
        break;
      case "handwriting":
        return (
          <div className="sm:mt-4">
            <Handwriting />
            <GoToTop />
          </div>
        );
        break;
      case "artCraft":
        return (
          <div className="sm:mt-4">
            <Wow_art_carft />
            <GoToTop />
          </div>
        );
        break;
      case "value":
        return (
          <div className="sm:mt-4">
            <Value_first />
            <GoToTop />
          </div>
        );
        break;
      case "merrygo":
        return (
          <div className="sm:mt-4">
            <Merry_go_round />
            <GoToTop />
          </div>
        );
        break;
      case "mindmap":
        return (
          <div className="sm:mt-4">
            <Wow_mind_map />
            <GoToTop />
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
        {page === "default" ? (
          <button
            onClick={() => navigate(-1)}
            className="pr-4 pl-1 py-1 sm:pr-6 sm:pl-4 sm:py-2 font-semibold bg-gray-600 flex z-10 text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed md:top-[9rem] sm:top-[10rem] lg:top-[8rem] top-[11rem] sm:left-[2rem] left-[0.4rem] rounded-3xl"
            // className="pr-4 pl-1 py-1 sm:pr-8 sm:pl-6 sm:py-2 font-semibold bg-[#d13131] flex  text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed sm:top-[10rem] lg:top-[5rem] top-[10rem] sm:left-[4rem] left-[0.4rem] rounded-md"
          >
            <ArrowBackIosNew className="!text-[1.2rem] sm:!text-[1.5rem]" />{" "}
            <span className="mb-[0.1rem]">Back</span>
          </button>
        ) : (
          <button
            onClick={() => setPage("default")}
            className="pr-4 pl-1 py-1 sm:pr-8 sm:pl-6 sm:py-2 font-semibold bg-[#dbdbdb] flex  text-base sm:text-lg gap-1 items-center !text-red-800 active:scale-90 transition-all duration-200 ease-linear fixed sm:top-[8rem] lg:top-[11rem] top-[10rem] sm:left-[2rem] left-[0.4rem] rounded-md"
          >
            <ArrowBackIosNew className="!text-[1.2rem] sm:!text-[1.5rem]" />{" "}
            <span className="mb-[0.1rem]">Back</span>
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

export default SkillDev;
