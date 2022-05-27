import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../assets/banner/banner1.jpg";
import bn2 from "../assets/banner/banner2.jpg";
import bn3 from "../assets/banner/banner3.jpg";

const Slider = () => {
  return (
    <AwesomeSlider className="h-[87vh] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] " >
      <div data-src={bn1} />
      <div data-src={bn2} />
      <div data-src={bn3} />
    </AwesomeSlider>
  );
};

export default Slider;
