import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Properties/Live reading/1.png";
import img2 from "../../../assets/digital/Properties/Live reading/2.png";
import img3 from "../../../assets/digital/Properties/Live reading/3.png";
import img4 from "../../../assets/digital/Properties/Live reading/4.png";
import img5 from "../../../assets/digital/Properties/Live reading/5.png";
import GoToTop from "../../Top";

const ReadingClub = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold">Reading Program</span>
            <img src={img1} className="w-[60%] h-auto" alt="" />
            <h1 className="w-full sm:w-[50%] md:w-full text-white text-center font-semibold px-3 py-1 bg-[#0bc096]">
              For Primary to Senior Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold  text-justify">
            Reading on a regular basis is not given the importance it deserves;
            yet it is key for acquiring good study habits. Studies show that
            students who read books on a regular basis have better results at
            school.
            <br />
            <br /> Reading plays a central role in a child’s education and
            keeping this need in mind, we have launched Tutor Led ‘Live The
            Reading Club’ platform
          </span>
        </div>

        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-row w-full px-4">
            <img src={img2} className="w-full" alt="" />
          </div>
          <div className="w-full flex flex-row px-4">
            <img src={img3} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-full">
          <div className="p-4">
            <h1 className="text-2xl m-2  font-bold text-[#20cae8] justify-center text-center">
              OUR PROGRAM
            </h1>
          </div>
          <div className="w-full flex  justify-center items-center">
            <img
              src={img4}
              className=" h-auto w-[40%] sm:[50%] md:w-[50%] "
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-10  flex items-center m-0 bg-[#128da2] justify-center rounded-lg text-center sm:text-center">
          <span className="font-bold text-white ">
            20-Week Program Each Lession : 1 Hour 4 Books
          </span>
        </div>
        <div className="w-full relative sm:relative flex items-end justify-end">
          <img src={img5} className="w-full h-auto" alt="" />
          <div className="absolute w-full sm:w-full top-1 sm:top-12 flex  sm:flex-col gap-4 sm:mr-12 justify-center sm:justify-end items-center sm:items-end font-medium text-xs sm:text-lg">
            <div className="p-4 my-4 bg-[#20cae8]  w-[40%] h-[2%] sm:w-[30%] sm:h-auto">
              88% of parents with kids aged 6–17 say it is extremely important
              for their children to read books for fun.
            </div>
            <div className="p-4 my-4 bg-[#20cae8] w-[40%]  sm:w-[30%] h-[2%] sm:h-auto">
              An overwhelming majority of children (87%) say they would read
              more if they could find more books that they like.
            </div>
          </div>
          <div></div>
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default ReadingClub;
