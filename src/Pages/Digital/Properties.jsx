import React, { useEffect, useState } from "react";
import { ArrowBackIosNew, Assessment } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";

// icons
import img1 from "../../assets/digital/Properties/Live reading/1.png";
import img2 from "../../assets/digital/Properties/curve/1.png";
import img3 from "../../assets/digital/Properties/IFT/1.png";
import img4 from "../../assets/digital/Properties/Skoolbook/1.png";
import ReadingClub from "../../Components/Digital/Properties/ReadingClub";
import Curves from "../../Components/Digital/Properties/Curves ";
import IFT from "../../Components/Digital/Properties/IFT";
import Skool from "../../Components/Digital/Properties/Skool";

const Properties = () => {
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
              onClick={() => setPage("ReadingClub")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img1} className="h-[60%] w-[50%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
              LIVE The Reading Club: Reading Program.
               <br />
                Reading on a regular basis is not given the importance it deserves; yet it is key for acquiring good study habits. Studies show that students who read books on a regular basis have better results at school.
                <br />
                Reading plays a central role in a child’s education and keeping this need in mind, we have launched Tutor Led ‘Live The Reading Club’ platform.
              </h3>
            </div>
           </div>

            <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
           <span
              onClick={() => setPage("IFT")}
              className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
            >
              <img src={img3} className="h-[70%] w-[60%]" alt="" />

            </span>
            <div className="flex textxl gap-4 items-center w-full justify-start sm:pl-[12vw] pl-[5vw]">
              <h3 className="text-gray-700 md:text-2xl lg:text-lg 2xl:text-2xl text-sm flex flex-col gap-4">
                  Step & Learn powered by WizeFloor is an interactive floor that promotes collective and differentiated learning styles and needs through play and physical activity.
                <br />
                  A projector projects activities and learning games on to the floor from the ceiling. The children interact with the floor using their hands and feet allowing them to develop their cognitive as well as gross motor skills. Multiple children can play simultaneously.
              </h3>
            </div>
           </div>
       
            <GoToTop />
          </div>
        );
        break;
      case "ReadingClub":
        return (
          <div className="sm:mt-4">
            <ReadingClub />
            <GoToTop />
          </div>
        );
        break;
      case "Curves":
        return (
          <div className="sm:mt-4">
            <Curves />
            <GoToTop />
          </div>
        );
        break;
      case "IFT":
        return (
          <div className="sm:mt-4">
            <IFT />
            <GoToTop />
          </div>
        );
        break;
      case "Skool":
        return (
          <div className="sm:mt-4">
            <Skool />
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

export default Properties;
