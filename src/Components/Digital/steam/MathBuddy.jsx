import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Steam/mathbuddy/1.png";
import img2 from "../../../assets/digital/Steam/mathbuddy/2.png";
import img3 from "../../../assets/digital/Steam/mathbuddy/3.png";
import img4 from "../../../assets/digital/Steam/mathbuddy/4.png";
import img5 from "../../../assets/digital/Steam/mathbuddy/5.png";
import img6 from "../../../assets/digital/Steam/mathbuddy/6.png";

import GoToTop from "../../Top";

const MathBuddy = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
            <span className="font-bold">
              Transforming Math Teaching & Learning{" "}
            </span>
            <img src={img1} className="w-full h-auto" alt="" />
            <h1 className="w-full  text-white text-center font-semibold px-1 py-1 bg-[#a953d0]">
              For Primary to Middle Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold  text-justify">
            Whether your child is already scoring well in Math or needs help to
            improve scores in tests, Math Buddy can help in developing a strong
            foundation in Math with conceptual understanding. Learning by
            exploration helps children touch and feel Math and be able to relate
            to what they learn better. Combining this with interactive
            visualization and gamified practice helps them master Math skills
            with ease!
          </span>
        </div>

        <div className="flex sm:flex-row flex-col gap-2 px-2 sm:px-0 items-center justify-center w-full md:w-full text-sm">
          <div className=" w-[90%]">
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-4">
                <img
                  src={img2}
                  className="my-[1rem] w-[20%] h-[1rem]  sm:w-[20%] sm:h-[1rem] md:w-[40%] md:h-[6rem]"
                  alt=""
                />
                <span className="font-bold text-[#a953d0]">
                  Instruments for each student
                </span>
              </div>
              <span>
                Instruments and boards for each student to explore Math concepts
                from school and home <br /> Students can learn sitting at their
                desks without going to a separate Math Lab
              </span>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#a953d0]">
                  Interactive software with home access
                </span>
                <img
                  src={img3}
                  className="my-[1rem] w-[20%] h-[1rem]  sm:w-[20%] sm:h-[1rem] md:w-[40%] md:h-[6rem]"
                  alt=""
                />
              </div>
              <span>
                Fully activity based platform to help teachers teach concepts in
                the classroom and for students to continue learning from their
                home
              </span>
            </div>

            <div className="w-full flex flex-col">
              <div className="flex items-center gap-4">
                <img
                  src={img4}
                  className="my-[1rem] w-[20%] h-[1rem]  sm:w-[20%] sm:h-[1rem] md:w-[40%] md:h-[6rem]"
                  alt=""
                />
                <span className="font-bold text-[#a953d0]">
                  Student workbooks
                </span>
              </div>
              <span>
                Students are guided in the exploration by a curriculum aligned
                workbook
              </span>
            </div>
            <div className="w-full flex flex-col">
              <img
                src={img5}
                className="my-[1rem] w-[20%] h-[1rem]  sm:w-[20%] sm:h-[1rem] md:w-[50%] md:h-[6rem]"
                alt=""
              />

              <ul>
                <li>Hands-on exploratory learning</li>
                <li>Interactive tools to teach in the classroom</li>
                <li>
                  Cloud-based home access for students to practice from home
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center mb-2 ">
            <img src={img6} className="mt-[1rem] w-[90%]" alt="" />
          </div>
        </div>

        <GoToTop />
      </div>
    </>
  );
};

export default MathBuddy;
