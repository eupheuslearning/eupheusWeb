import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/news/1.png";
import img2 from "../assets/news/2.png";
import img3 from "../assets/news/3.png";

export default function Media() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "News - Eupheus";
  }, []);
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"media"} />

      <div className="sm:h-[100vh] relative w-[100vw]  ">
        <img
          className="sm:h-[100vh] h-auto sm:mt-0 mt-[9rem] object-cover w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div>

      <div className="flex sm:gap-[8rem] gap-12 items-center justify-center">
        <img
          onClick={() => navigate("/awards")}
          src={img1}
          className="w-[15%] hover:-translate-y-4 transition-all duration-200 ease-linear cursor-pointer my-8 h-auto"
          alt=""
        />
        {/* <img
          src={img2}
          className="w-[15%] hover:-translate-y-4 transition-all duration-200 ease-linear cursor-pointer my-8 h-auto"
          alt=""
        /> */}
        <img
          src={img3}
          onClick={() => navigate("/news")}
          className="w-[15%] hover:-translate-y-4 transition-all duration-200 ease-linear cursor-pointer my-8 h-auto"
          alt=""
        />
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
}
