import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";
import Chemistry9_10 from "../../Components/Curriculum/icse/Chemisrty9_10";
import Chemistry6_8 from "../../Components/Curriculum/icse/Chemistry6_8";
import Icse_mathsmatics from "../../Components/Curriculum/icse/Icse_mathsmatics";
import Icse_physics from "../../Components/Curriculum/icse/Icse_physics";
import Icse_wow_compu_bytes from "../../Components/Curriculum/icse/Icse_wow_compu_bytes";
import Icse_wow_grammer_com from "../../Components/Curriculum/icse/Icse_wow_grammer_com";
import Iscebiology from "../../Components/Curriculum/icse/Icsebiology";
import New_radiant_reader from "../../Components/Curriculum/icse/New_radiant_reader";
import New_radiant_science from "../../Components/Curriculum/icse/New_radiant_science";
import Radiant_enviromental_studies from "../../Components/Curriculum/icse/Radiant_enviromental_studies";
import Grammer_com_vibes from "../../Components/Curriculum/cbse/Grammer_com_vibes";
import English_vibes from "../../Components/Curriculum/cbse/English_vibes";
import Wow_maths from "../../Components/Curriculum/cbse/Wow_maths";
import Wow_english from "../../Components/Curriculum/cbse/Wow_english";
import { Silver_bells } from "../../Components/Curriculum/cbse/Silver_bells";

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
              onClick={() => setPage("chemistry9_10")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={chemistryIcon}
                className="sm:h-[10rem] h-[5rem]  w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("grammer_com_vibes")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={GrCompVibesIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("biology")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={icsebiologyIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("math")}
              className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={icsemathIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("physics")}
              className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={icsephysicsIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("nrr")}
              className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={NRRIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("radiant_science")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={NRRscienceIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("radiant_es")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={radiantEVSIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("radiant_way")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={radiantwayIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("silverbells")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={silverbellIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("chemistry6_8")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={simplifiedchemistryIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("eng_vibes")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={vibesengIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("compu_bytes")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={wowcompubyteIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("english")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={wowenglish}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("maths")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={wowmathIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
            <span
              onClick={() => setPage("grammer_com")}
              className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img
                src={GramComIcon}
                className="sm:h-[10rem] h-[5rem]   w-auto"
                alt=""
              />
            </span>
          </div>
        );
        break;
      case "chemistry9_10":
        return (
          <div className="sm:pt-8 pt-[0rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]">
            <Chemistry9_10 />
          </div>
        );
        break;
      case "chemistry6_8":
        return (
          <div className="sm:pt-8 pt-[0rem] lg:mt-[0vh] md:mt-[15vh] sm:mt-[21vh]">
            <Chemistry6_8 />
          </div>
        );
        break;
      case "math":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Icse_mathsmatics />
          </div>
        );
        break;
      case "biology":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Iscebiology />
          </div>
        );
        break;
      case "physics":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Icse_physics />
          </div>
        );
        break;
      case "compu_bytes":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Icse_wow_compu_bytes />
          </div>
        );
        break;
      case "grammer_com":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Icse_wow_grammer_com />
          </div>
        );
        break;
      case "nrr":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <New_radiant_reader />
          </div>
        );
        break;
      case "radiant_es":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Radiant_enviromental_studies />
          </div>
        );
        break;
      case "radiant_science":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <New_radiant_science />
          </div>
        );
        break;
      case "grammer_com_vibes":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Grammer_com_vibes />
          </div>
        );
        break;
      case "eng_vibes":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <English_vibes />
          </div>
        );
        break;
      case "silverbells":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Silver_bells />
          </div>
        );
        break;
      case "maths":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Wow_maths />
          </div>
        );
        break;
      case "english":
        return (
          <div className="sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <Wow_english />
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
