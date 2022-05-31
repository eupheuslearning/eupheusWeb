import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../assets/banner/banner1.png";
import bn2 from "../assets/banner/banner2.png";
import bn3 from "../assets/banner/banner3.png";
import bn4 from "../assets/banner/banner4.png";

const Slider = () => {
  return (
    <AwesomeSlider className=" h-[100vh]">
      <div className="" data-src={bn1} />
      <div data-src={bn2} />
      <div data-src={bn3} />
      <div data-src={bn4} />
    </AwesomeSlider>
  );
};

export default Slider;
