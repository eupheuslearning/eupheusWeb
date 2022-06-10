import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";

import AwardTimeline from "../Components/AwardTimeline";
import NewsTimeline from "../Components/NewsTimeline";

export default function Awards() {
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

      <AwardTimeline />

      <Footer />
      <GoToTop />
    </div>
  );
}
