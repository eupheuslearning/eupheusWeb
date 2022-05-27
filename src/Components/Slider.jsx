import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../assets/Banner1.jpg";
import bn2 from "../assets/Banner2.jpg";
import bn3 from "../assets/Banner3.jpg";

const Slider = () => {
  return (
    <AwesomeSlider>
      <div data-src={bn1} />
      <div data-src={bn2} />
      <div data-src={bn3} />
    </AwesomeSlider>
  );
};

export default Slider;
