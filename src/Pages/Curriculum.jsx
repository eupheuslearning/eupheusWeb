import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import duck from "../assets/curriculum/duck.png";
import Sidebar from "../Components/Sidebar";

const Curriculum = () => {
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex">
        <Sidebar />
        <div className="w-full flex flex-col pl-[25vw] pt-4 lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] pr gap-4">
          <div className="  text-gray-700   md:text-2xl text-base">
            To wade through
            <br />
            difficult concepts,
          </div>
          <div className=" text-red-700 font-bold flex flex-col md:text-5xl text-base">
            <span>Your Power to</span>
            <span>Navigate ...</span>
          </div>

          <div className=" text-gray-700   md:text-2xl text-base">
            Your Learning Partner
            <br />
            Preparing you for the future!
          </div>
          <img src={duck} className="w-[30vw] h-auto" alt="" />
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Curriculum;
