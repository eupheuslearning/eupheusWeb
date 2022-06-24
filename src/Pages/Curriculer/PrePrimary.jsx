import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";
import Zoom from "../../Components/Curriculum/prePrimary/Zoom";
import AlphaFun from "../../Components/Curriculum/prePrimary/AlphaFun";
import DotDash from "../../Components/Curriculum/prePrimary/DotDash";
import Number_maxx from "../../Components/Curriculum/prePrimary/Number_maxx";
import Splash from "../../Components/Curriculum/prePrimary/Splash";
import Pitara from "../../Components/Curriculum/prePrimary/Pitara";
import Radiant_way from "../../Components/Curriculum/prePrimary/Radiant_way";
// import Wow_english from "../../Components/Curriculum/prePrimary/Wow_english";
// import English_vibes from "../../Components/Curriculum/prePrimary/English_vibes";
// import Wow_grammer_com from "../../Components/Curriculum/prePrimary/Wow_grammer_com";
// import Grammer_com_vibes from "../../Components/Curriculum/prePrimary/Grammer_com_vibes";
// import New_radiant_literature from "../../Components/Curriculum/prePrimary/New_radiant_literature";
// import The_radiant_way from "../../Components/Curriculum/prePrimary/The_radiant_way";
// import My_world_my_earth from "../../Components/Curriculum/prePrimary/My_world_my_earth";
// import Wow_maths from "../../Components/Curriculum/prePrimary/Wow_maths";
// import Wow_menta_maths from "../Components/Curriculum/prePrimary/Wow_menta_maths";
// import Wow_science from "../../Components/Curriculum/prePrimary/Wow_science";
// import  Wow_compu_bytes  from "../../Components/Curriculum/prePrimary/Wow_compu_bytes";
// import Compu_app  from "../../Components/Curriculum/prePrimary/Compu_app";
// import Vallari_hindi  from "../../Components/Curriculum/prePrimary/Vallari_hindi";
// import Surbhika_hindi  from "../../Components/Curriculum/prePrimary/Surbhika_hindi";
// import  Silver_bells  from "../../Components/Curriculum/prePrimary/Silver_bells";

// icons
import zoomIcon from "../../assets/curriculum/zoom/zoomIcon.png";
import AlphaIcon from "../../assets/curriculum/alphaFun/alphafunIcon.png";
import DotIcon from "../../assets/curriculum/dotDash/dotdashIcon.png";
import NumberMaxIcon from "../../assets/curriculum/numberMax/numbermaxIcon.png";
import SplashIcon from "../../assets/curriculum/splash/splashIcon.png";
import PitaraIcon from "../../assets/curriculum/pitara/pitaraIcon.png";
import RadiantIcon from "../../assets/curriculum/radiantWay/radiantwayIcon.png";

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
          <div className="w-full grid sm:grid-rows-3 grid-rows-4 sm:grid-cols-3 grid-cols-2 sm:gap-[3rem] gap-[1rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <span
              onClick={() => setPage("zoom")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={zoomIcon} className="h-[70%] w-auto" alt="" />
            </span>
            <span
              onClick={() => setPage("alpha_fun")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={AlphaIcon} alt="" />
            </span>
            <span
              onClick={() => setPage("dot_dash")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={DotIcon} alt="" />
            </span>
            <span
              onClick={() => setPage("number_max")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={NumberMaxIcon} alt="" />
            </span>
            <span
              onClick={() => setPage("splash")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={SplashIcon} alt="" />
            </span>
            <span
              onClick={() => setPage("pitara")}
              className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={PitaraIcon} alt="" />
            </span>
            <span
              onClick={() => setPage("radiant_way")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={RadiantIcon} alt="" />
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
      case "number_max":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Number_maxx />
          </div>
        );
        break;
      case "splash":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Splash />
          </div>
        );
        break;
      case "pitara":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Pitara />
          </div>
        );
        break;
      case "radiant_way":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Radiant_way />
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
