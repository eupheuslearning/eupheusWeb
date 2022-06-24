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

// icons
import chemistryIcon from "../../assets/curriculum/icse/chemistryIcon.png";
import GrCompVibesIcon from "../../assets/curriculum/icse/Gr&CompVibesIcon.png";
import icsebiologyIcon from "../../assets/curriculum/icse/icsebiologyIcon.png";
import icsemathIcon from "../../assets/curriculum/icse/icsemathIcon.png";
import icsephysicsIcon from "../../assets/curriculum/icse/icsephysicsIcon.png";
import NRRIcon from "../../assets/curriculum/icse/NRRIcon.png";
import NRRscienceIcon from "../../assets/curriculum/icse/NRRscienceIcon.png";
import radiantEVSIcon from "../../assets/curriculum/icse/radiantEVSIcon.png";
import radiantwayIcon from "../../assets/curriculum/icse/radiantwayIcon.png";
import silverbellIcon from "../../assets/curriculum/icse/silverbellIcon.png";
import simplifiedchemistryIcon from "../../assets/curriculum/icse/simplifiedchemistryIcon.png";
import vibesengIcon from "../../assets/curriculum/icse/vibesengIcon.png";
import wowcompubyteIcon from "../../assets/curriculum/icse/wowcompubyteIcon.png";
import wowenglish from "../../assets/curriculum/icse/wowenglish.png";
import wowmathIcon from "../../assets/curriculum/icse/wowmathIcon.png";
import GramComIcon from "../../assets/curriculum/icse/gram&com.png";

const Icse = () => {
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
              onClick={() => setPage("zoom")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={chemistryIcon}
                className="sm:h-[10rem] h-[5rem]  w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("alpha_fun")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={GrCompVibesIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("dot_dash")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={icsebiologyIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={icsemathIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={icsephysicsIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={NRRIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={NRRscienceIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={radiantEVSIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={radiantwayIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={silverbellIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={simplifiedchemistryIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={vibesengIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={wowcompubyteIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={wowenglish}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={wowmathIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold">
              <img
                src={GramComIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
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

export default Icse;
