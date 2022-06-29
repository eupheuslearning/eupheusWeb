import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/primo/5.png";
import img2 from "../../../assets/digital/primo/6.png";
import img3 from "../../../assets/digital/primo/7.png";
import img4 from "../../../assets/digital/primo/13.png";
import img5 from "../../../assets/digital/primo/8.png";
import img6 from "../../../assets/digital/primo/9.png";
import img7 from "../../../assets/digital/primo/10.png";
import img8 from "../../../assets/digital/primo/11.png";
import img9 from "../../../assets/digital/primo/12.png";
import GoToTop from "../../Top";

const Primo = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Coding Program</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-purple-900">
            For Pre-Primary & Primary Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full font-semibold">
          <span className=" font-semibold text-purple-900 mb-2">
            Cubetto: Screenless coding toy for girls and boys
          </span>
          <br />
          Cubetto is a friendly wooden robot that will teach your child the
          basics of computer programming through adventure and hands-on play.
          The learning programme is Montessori-aligned and LOGO turtle-inspired.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <span className="sm:w-2/5 w-full font-semibold">
          <span className=" font-semibold text-purple-900 mb-2">
            Control Board
          </span>
          <br />
          Place the blocks on the board to tell Cubetto where to go. Hit the
          blue button and Cubetto executes your very first program.
        </span>
        <div className="flex flex-col sm:w-5/12 w-full">
          <img src={img2} className="w-full h-auto" alt="" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-around mt-[2rem] w-full">
        <div className="sm:w-[50%] w-full px-4 items-center flex">
          <span className="w-full font-semibold">
            <span className=" font-semibold text-purple-900 mb-2">
              Coding Blocks
            </span>
            <br />A coding language you can touch and manipulate like LEGO®.
            Each block stands for a piece of action. Combine them to create
            programs
          </span>
          <div className="flex flex-col w-full sm:w-[50%]">
            <img src={img3} className="w-full h-auto" alt="" />
          </div>
        </div>
        <img src={img4} className="w-full sm:w-[30%]" alt="" />
      </div>
      <div className=" w-full sm:text-base text-sm flex mt-4 justify-center bg-purple-900 text-white font-semibold py-3">
        Why should kids learn coding and computational thinking?
      </div>
      <div className="flex flex-col mb-4 sm:px-10 gap-3 w-full">
        <div className="flex w-full gap-2 items-center justify-start">
          <img src={img5} className="w-auto h-[5rem]" alt="" />
          <span className=" font-semibold">
            Coding nurtures creative expression
          </span>
        </div>
        <div className="flex w-full gap-2 items-center justify-end">
          <img src={img6} className="w-auto h-[5rem]" alt="" />
          <span className=" font-semibold">
            Programming demystifies technology
          </span>
        </div>
        <div className="flex w-full gap-2 items-center justify-start">
          <img src={img7} className="w-auto h-[5rem]" alt="" />
          <span className=" font-semibold">
            Teaches problem-solving and persistence
          </span>
        </div>
        <div className="flex w-full gap-2 items-center justify-end">
          <img src={img8} className="w-auto h-[5rem]" alt="" />
          <span className=" font-semibold">
            Children learn by thinking about doing
          </span>
        </div>
        <div className="flex w-full gap-2 items-center justify-start">
          <img src={img9} className="w-auto h-[5rem]" alt="" />
          <span className=" font-semibold">
            Also learn to think about thinking
          </span>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Primo;
