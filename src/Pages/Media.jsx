import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";
import image1 from "../assets/image1.png";
import lgDashBorder from "../assets/dash-border-lg.png";
import cap from "../assets/media/cap.png";
import ceo from "../assets/media/ceo.png";
import cio from "../assets/media/cio.png";

export default function Media() {
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar />
      <div className="h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[30vw] sm:top-[30vh]  lg:right-[60vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base ont-extrabold  ">
            EUPHEUS LEARNING IN
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-bold">
            THE LIMELIGHT
          </h1>
        </div>
        <img className="h-[100vh] w-[100vw]" src={Banner_1} alt="" />
      </div>

      <div className="flex gap-4 items-center w-[100vw] justify-center pl-6 mt-[2.5rem]">
        <h3 className="text-red-700 md:text-4xl text-xl font-extrabold">
          AWARDS & RECOGNITIONS
        </h3>

        <img src={image1} className="w-[40vw] h-auto" alt="" />
      </div>

      <div className="flex gap-4 flex-col items-center w-[100vw] justify-center pl-6 mt-[2.5rem]">
        <h3 className="text-red-700 md:text-4xl text-xl font-extrabold">
          AWARDS IN 2018
        </h3>

        <div className=" flex gap-4">
          <div
            className="p-4 bg-no-repeat w-[30vw]"
            style={{
              backgroundImage: `url(${lgDashBorder})`,
              backgroundSize: "100% 100%",
            }}
          >
            <img src={cio} alt="" />
          </div>

          <img src={ceo} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
