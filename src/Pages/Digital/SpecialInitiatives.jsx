import React, { useEffect, useState } from "react";
import { ArrowBackIosNew, Assessment } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";

// icons
import img1 from "../../assets/digital/SpecialInitiatives/Atal/logo.png";
import Atal from "../../Components/Digital/SpecialInitiatives/Atal";
import { useNavigate } from "react-router-dom";

const SpecialInitiatives = () => {
  const [page, setPage] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full flex flex-col 2xl:gap-[7.5rem] sm:gap-[3rem] gap-[1rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[13rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("Atal")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img1} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  TechB: Introducing Tinkering Labs to support the Atal
                  Innovation Mission and enhance the current teaching
                  methodology using 3D printed models for multiple subjects
                  which prove to be highly useful for teachers and students.
                </h3>
              </div>
            </div>

            {/* <span
              onClick={() => setPage("Atal")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img1} className=" h-auto w-[30%]" alt="" />
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              TechB: Introducing Tinkering Labs to support the Atal Innovation Mission and enhance the current teaching methodology using 3D printed models for multiple subjects which prove to be highly useful for teachers and students.


              </h3>
            </div>
            </span> */}
            <GoToTop />
          </div>
        );
        break;
      case "Atal":
        return (
          <div className="sm:mt-4">
            <Atal />
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

export default SpecialInitiatives;
