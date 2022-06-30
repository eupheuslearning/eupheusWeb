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

const SkillDev = () => {
  //   const navigate = useNavigate();
  const [page, setPage] = useState("default");
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full grid sm:grid-rows-5 grid-rows-7 sm:grid-cols-3 grid-cols-2 sm:gap-[4rem] gap-[2rem] sm:px-[3rem] px-4 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <span
              onClick={() => setPage("art")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={artIcon}
                className="sm:h-[10rem] h-[5rem]  w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("gk")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={gkIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("handwriting")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={handwritingIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("merrygo")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={merrygoIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("mindmap")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={mindmapIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("value")}
              className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={valueIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("artCraft")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={wowartIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
          </div>
        );
        break;
      case "art":
        return (
          <div className="sm:pt-8 pt-[0rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]">
            <Time_to_learn_arts />
          </div>
        );
        break;
      case "gk":
        return (
          <div className="sm:pt-8 pt-[0rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]">
            <Wow_within_worlds />
          </div>
        );
        break;
      case "handwriting":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Handwriting />
          </div>
        );
        break;
      case "artCraft":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Wow_art_carft />
          </div>
        );
        break;
      case "value":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Value_first />
          </div>
        );
        break;
      case "merrygo":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Merry_go_round />
          </div>
        );
        break;
      case "mindmap":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Wow_mind_map />
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

export default SkillDev;
