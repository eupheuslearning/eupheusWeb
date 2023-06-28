import React, { useEffect, useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";

import Muzzy from "../../Components/Digital/language/Muzzy";
import Sanak from "../../Components/Digital/language/Sanak";
import Radiant_ly from "../../Components/Digital/language/Radiant_ly";
import Enounce from "../../Components/Digital/language/Enounce";

// icons
import img1 from "../../assets/digital/Muzzy/1.png";
import img2 from "../../assets/digital/sanako/1.png";
import img3 from "../../assets/digital/Radiant/1.png";
import img4 from "../../assets/digital/sanako/7.png";

const Language = () => {
  //   const navigate = useNavigate();
  const [page, setPage] = useState("default");
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full flex flex-col sm:gap-[3rem] gap-[2rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
           <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("muzzy")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img1} className="h-[70%] w-[70%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              BBC MUZZY: World’s # 1 multimedia, multilingual, multi-platform and multi-awarded language learning course for children.

              </h3>
            </div>
           </div>
            {/* <span
              onClick={() => setPage("muzzy")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img
                src={img1}
                className="h-[5rem] w-[14rem] 2xl:h-[8rem] 2xl:w-[16rem]" alt="" />

              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  BBC MUZZY: World’s # 1 multimedia, multilingual, multi-platform and multi-awarded language learning course for children.

                </h3>
              </div>
            </span> */}
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("sanako")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img2} className="h-[70%] w-[70%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              SANAKO: Language Learning Solution.
                  <br />
                  Transform a set of desktops or laptops into a fully equipped language lab. Engage an entire class to participate in meaningful activities whilst utilizing the allocated time efficiently and remaining in complete control. Teach the way you want!
              </h3>
            </div>
           </div>
            {/* <span
              onClick={() => setPage("sanako")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img2} className="h-[2.5rem] w-[12rem] 2xl:h-[4rem] 2xl:w-[17rem]" alt="" />

              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  SANAKO: Language Learning Solution.
                  <br />
                  Transform a set of desktops or laptops into a fully equipped language lab. Engage an entire class to participate in meaningful activities whilst utilizing the allocated time efficiently and remaining in complete control. Teach the way you want!
                </h3>
              </div>
            </span> */}
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("radiant")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img3} className="h-[70%] w-[70%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              Enounce: Language Learning Solution.
                  <br />
                  Enounce Live is an online solution for pronunciation practice. A user can listen to authentic speech models read any text or words selected, record own voice for comparison, and receive immediate feedback.
              </h3>
            </div>
           </div>
            {/* <span
              onClick={() => setPage("radiant")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"  >
              <img
                src={img3}
                className="h-[3rem] w-[12rem] 2xl:h-[5rem] 2xl:w-[18rem]" alt="" />

              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  Enounce: Language Learning Solution.
                  <br />
                  Enounce Live is an online solution for pronunciation practice. A user can listen to authentic speech models read any text or words selected, record own voice for comparison, and receive immediate feedback.
                </h3>
              </div>
            </span> */}
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("enounce")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img4} className="h-[70%] w-[70%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              Radiant-Ly: A.I.-Powered Adaptive App to improve your grammar skills in an interactive and fun way.

              </h3>
            </div>
           </div>
            {/* <span
              onClick={() => setPage("enounce")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-left cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img4} className="h-[2rem] w-[12rem] 2xl:h-[4rem] 2xl:w-[16rem]" alt="" />

              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  Radiant-Ly: A.I.-Powered Adaptive App to improve your grammar skills in an interactive and fun way.
                </h3>
              </div>
            </span> */}
            <GoToTop />
          </div>
        );
        break;
      case "muzzy":
        return (
          <div className="sm:mt-4">
            <Muzzy />
            <GoToTop />
          </div>
        );
        break;
      case "sanako":
        return (
          <div className="sm:mt-4">
            <Sanak />
            <GoToTop />
          </div>
        );
        break;
      case "radiant":
        return (
          <div className="sm:mt-4">
            <Radiant_ly />
            <GoToTop />
          </div>
        );
        break;
      case "enounce":
        return (
          <div className="sm:mt-4">
            <Enounce />
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

export default Language;
