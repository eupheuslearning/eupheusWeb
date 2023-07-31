import React, { useEffect, useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";
import Primo from "../../Components/Digital/coding/Primo";
import Robo_garden from "../../Components/Digital/coding/Robo_garden";

// icons
import img1 from "../../assets/digital/primo/14.png";
import img2 from "../../assets/digital/roboGarden/13.png";
import { useNavigate } from "react-router-dom";

const Coding = () => {
  const [page, setPage] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          // <div className="w-full grid sm:grid-rows-3 grid-rows-4 sm:grid-cols-3 grid-cols-2 sm:gap-[3rem] gap-[1rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
          <div className=" w-full flex flex-col sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("primo")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img1} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  PRIMO: Screenless coding toy for girls and boys Cubetto is a
                  friendly wooden robot that will teach your child the basics of
                  computer programming through adventure and hands-on play. The
                  learning programme is Montessori-aligned and LOGO
                  turtle-inspired.
                </h3>
              </div>
            </div>

            {/* <span
              onClick={() => setPage("primo")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img1} className="h-[50%] w-[60%]" alt="" />
              <div className="flex gap-4 items-center w-[100vw] justify-center sm:pl-[12vw] pl-[5vw] md:mt-[15vh]">
              <h3 className="text-gray-700 md:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw] flex flex-col gap-4">
                <div className="text-gray-700  lg:text-lg 2xl:text-2xl text-sm" >
                PRIMO: Screenless coding toy for girls and boys
                     Cubetto is a friendly wooden robot that will teach your child the basics of computer programming through adventure and hands-on play. The learning programme is Montessori-aligned and LOGO turtle-inspired.

                </div>
              </h3>
            </div>
            </span> */}

            {/* <span
              onClick={() => setPage("roboGarden")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal">
              <img src={img2} className="h-[50%] w-[60%]" alt="" />

              <div className="flex gap-4 items-center w-[100vw] justify-center sm:pl-[12vw] pl-[5vw] md:mt-[15vh]">
              <h3 className="text-gray-700 md:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw] flex flex-col gap-4">
                <div className="text-gray-700  lg:text-lg 2xl:text-2xl text-sm" >
                RoboGarden: RoboGarden is an easy-to-understand, hands-on educational platform where students learn by doing. RoboGarden teaches coding literacy without the need for a tech guru for guidance. It is a cloud-based program that operates through your browser software.
                </div>
              </h3>
            </div>
</span> */}
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
              <span
                onClick={() => setPage("roboGarden")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={img2} className="h-[70%] w-[70%]" alt="" />
              </span>
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  RoboGarden: RoboGarden is an easy-to-understand, hands-on
                  educational platform where students learn by doing. RoboGarden
                  teaches coding literacy without the need for a tech guru for
                  guidance. It is a cloud-based program that operates through
                  your browser software.
                </h3>
              </div>
            </div>

            <GoToTop />
          </div>
        );
        break;
      case "primo":
        return (
          <div className="sm:mt-4">
            <Primo />
            <GoToTop />
          </div>
        );
        break;
      case "roboGarden":
        return (
          <div className="sm:mt-4">
            <Robo_garden />
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

export default Coding;
