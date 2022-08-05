import React, { useEffect, useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";
import Step from "../../Components/Digital/Step";

// icons
import img1 from "../../assets/digital/Enpower/1.png";
import Enpower_Two from "../../Components/Digital/Enpower_Two";

const Entrepreneurship = () => {
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
              onClick={() => setPage("enpower")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img1} className="h-[70%] w-auto" alt="" />
            </span>
            <GoToTop />
          </div>
        );
        break;
      case "enpower":
        return (
          <div className="sm:mt-4">
            <Enpower_Two />
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
          {page === "default" ? null : (
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

export default Entrepreneurship;
