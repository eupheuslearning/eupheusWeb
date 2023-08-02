import React, { useEffect, useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
import Step from "../../Components/Digital/Step";

// icons
import img1 from "../../assets/digital/worldbook/1.png";
import img2 from "../../assets/digital/worldbook/12.png";
import WorldBook from "../../Components/Digital/reference/Worldbook";
import WorldeBook from "../../Components/Digital/reference/Worldebook";
import { useNavigate } from "react-router-dom";

const ReferenceDigital = () => {
  const [page, setPage] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="flex flex-col  sm:gap-[3rem] gap-[1rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[14rem] lg:mt-[16vh] md:mt-[15vh] sm:mt-[21vh]">
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("world")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img1} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  WORLDBOOK: Image-based navigation helps young readers navigate
                  through stories, games, videos, and interactive coloring pages
                  for educational entertainment.
                </h3>
              </div>
            </div>
            {/* <span
              onClick={() => setPage("world")}
              className="bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img1} className=" h-auto w-[40%]" alt="" />
              
              <span className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 p-8  md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              WORLDBOOK: Image-based navigation helps young readers navigate through stories, games, videos, and interactive coloring pages for educational entertainment.

              </h3>
            </span>
               </span> */}

            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("world_e")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img2} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  WORLD eBOOK: World Book eBooks is a premier collection of
                  illustrated, engaging titles that supports a span of
                  curriculum areas and reading levels. World Book eBooks goes
                  above and beyond other eBook platforms by providing a
                  child-friendly layout and extensive subject coverage, as well
                  as such interactive features as games, videos, and audio
                  clips.
                  <br />
                  Access to over 2,500 eBooks and World Book® exclusive content
                </h3>
              </div>
            </div>

            {/* <span
              onClick={() => setPage("world_e")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img2} className="h-[70%] w-[70%]" alt="" />
              
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              WORLD eBOOK: World Book eBooks is a premier collection of illustrated, engaging titles that supports a span of curriculum areas and reading levels. World Book eBooks goes above and beyond other eBook platforms by providing a child-friendly layout and extensive subject coverage, as well as such interactive features as games, videos, and audio clips.
              <br />
              Access to over 2,500 eBooks and World Book® exclusive content

              </h3>
            </div>
            </span> */}

            <GoToTop />
          </div>
        );
        break;
      case "world":
        return (
          <div className="sm:mt-4">
            <WorldBook />
            <GoToTop />
          </div>
        );
        break;
      case "world_e":
        return (
          <div className="sm:mt-4">
            <WorldeBook />
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
      <div className="min-h-[100vh]">
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
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default ReferenceDigital;
