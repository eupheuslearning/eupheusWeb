import React, { useEffect, useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
import Step from "../../Components/Digital/Step";

// icons
import img1 from "../../assets/digital/fiction_express/1.png";
import img2 from "../../assets/digital/pickatale/PickataleIcon.png";
import Fiction_express from "../../Components/Digital/reading/Fiction_express";
import Pickatale from "../../Components/Digital/reading/Pickatale";
import { useNavigate } from "react-router-dom";

const Reading = () => {
  const [page, setPage] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className=" flex flex-col  sm:grid-row-3 grid-row-4 sm:grid-cols-3 grid-cols-2 sm:gap-[3rem] gap-[1rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[14rem] lg:mt-[20vh] md:mt-[15vh] sm:mt-[21vh]">
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("fiction")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img1} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  Fiction Express: Reading plays a central role in a child’s
                  education and keeping this need in mind, we have collaborated
                  with Fiction Express by Boolino, Europe’s leading and
                  innovative book platform, to nurture reading habits in
                  students and improve lifelong-learning outcomes.
                </h3>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("pickatale")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img2} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  Pickatale: Pickatale is a library of digitized books that you
                  can read and experience interactively. With Pickatale School,
                  children can read or listen to hundreds of children’s
                  books–narrated, illustrated storybooks, non-fiction titles,
                  knowledge books, animated books and many more. Children can
                  enjoy famous classics such as Beauty and the Beast,
                  Cinderella, and Rapunzel, discover new and original
                  characters, or indulge in exciting books that will enhance
                  their knowledge.
                </h3>
              </div>
            </div>
            <GoToTop />
          </div>
        );
        break;
      case "fiction":
        return (
          <div className="sm:mt-4">
            <Fiction_express />
            <GoToTop />
          </div>
        );
        break;
      case "pickatale":
        return (
          <div className="sm:mt-4">
            <Pickatale />
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
              className="pr-4 pl-1 py-1 sm:pr-6 sm:pl-4 sm:py-2 font-semibold bg-gray-600 flex z-10 text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed md:top-[9rem] sm:top-[10rem] lg:top-[7rem] top-[11rem] sm:left-[2rem] left-[0.4rem] rounded-3xl"
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

export default Reading;
