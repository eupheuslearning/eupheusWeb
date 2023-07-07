import React, { useEffect, useState } from "react";
import { ArrowBackIosNew, Assessment } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";

// icons
import img1 from "../../assets/digital/Assessment/targetPlus/1.png";
import img2 from "../../assets/digital/Assessment/Vantage/2.png";
import TargetPlus from "../../Components/Digital/assessment/TargetPlus";
import Vantage from "../../Components/Digital/assessment/Vantage";

const Assessments = () => {
  //   const navigate = useNavigate();
  const [page, setPage] = useState("default");
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full flex flex-col sm:gap-[3rem] gap-[1rem] sm:px-[3rem] px-2 pb-8 sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
              <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("vantage")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img2} className="h-[70%] w-[70%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              Vantage Learning: Automated Essay Assessment Application.
                <br />
                 MY Access! School Edition is the award-winning, cloud-based writing development solution that utilizes artificial intelligence and linguistic technologies to bring wide-scale differentiated instruction to the writing process. Educators can make timely, data-driven decisions for successful differentiated instruction and motivate students to write more frequently by providing them with immediate feedback.

              </h3>
            </div>
           </div>

            {/* <span
              onClick={() => setPage("vantage")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img2} className="h-[70%] w-[40%]" alt="" />
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                Vantage Learning: Automated Essay Assessment Application.
                <br />
                 MY Access! School Edition is the award-winning, cloud-based writing development solution that utilizes artificial intelligence and linguistic technologies to bring wide-scale differentiated instruction to the writing process. Educators can make timely, data-driven decisions for successful differentiated instruction and motivate students to write more frequently by providing them with immediate feedback.


                </h3>
              </div>
            </span> */}
   <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("targetPlus")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img1} className="h-[70%] w-[70%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              TargetPlus: Tool for improving results.
                <br />
                   iversusi is a process of improving results using assessments ‘as’ learning. It improves results in every class as it provides interactive diagnostic reports and personal action plans instantly that are followed by immediate corrective action.

              </h3>
            </div>
           </div>



            {/* <span
              onClick={() => setPage("targetPlus")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-normal"
            >
              <img src={img1} className="h-[70%] w-[40%]" alt="" />
              <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
                <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                TargetPlus: Tool for improving results.
                <br />
                   iversusi is a process of improving results using assessments ‘as’ learning. It improves results in every class as it provides interactive diagnostic reports and personal action plans instantly that are followed by immediate corrective action.


                </h3>
              </div>
            </span> */}
            <GoToTop />
          </div>
        );
        break;
      case "targetPlus":
        return (
          <div className="sm:mt-4">
            <TargetPlus />
            <GoToTop />
          </div>
        );
        break;
      case "vantage":
        return (
          <div className="sm:mt-4">
            <Vantage />
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

export default Assessments;
