import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/SpecialInitiatives/Atal/logo.png";
import img2 from "../../../assets/digital/SpecialInitiatives/Atal/1.png";
import img3 from "../../../assets/digital/SpecialInitiatives/Atal/2.png";
import img4 from "../../../assets/digital/SpecialInitiatives/Atal/3.png";
import img5 from "../../../assets/digital/SpecialInitiatives/Atal/4.png";
import img6 from "../../../assets/digital/SpecialInitiatives/Atal/5.png";
import img7 from "../../../assets/digital/SpecialInitiatives/Atal/6.png";
import img8 from "../../../assets/digital/SpecialInitiatives/Atal/7.png";
import img9 from "../../../assets/digital/SpecialInitiatives/Atal/8.png";
import img10 from "../../../assets/digital/SpecialInitiatives/Atal/9.png";
import img11 from "../../../assets/digital/SpecialInitiatives/Atal/10.png";
import img12 from "../../../assets/digital/SpecialInitiatives/Atal/11.png";

import GoToTop from "../../Top";

const Atal = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col  bg-white sm:px-[2rem] sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <div className="flex sm:flex-row flex-col justify-around gap-4 w-full px-4 items-center">
          <div className="flex flex-col items-center gap-4 w-full sm:w-[30%] sm:px-1">
            <span className="font-bold">ATAL Tinkering Lab & 3D Printers</span>
            <img src={img1} className="w-1/2 h-auto" alt="" />
            <h1 className="w-full sm:w-full text-white text-center font-semibold  py-1 bg-[#e0a664]">
              For Middle to Senior Levels
            </h1>
          </div>
          <span className="sm:w-3/5 w-full font-semibold  text-justify">
            Introducing Tinkering Labs to support the Atal Innovation Mission
            and enhance the current teaching methodology using 3D printed models
            for multiple subjects which prove to be highly useful for teachers
            and students.
          </span>
        </div>
        <div className="flex  flex-row sm:w-[100%] w-full justify-center items-center">
          <img src={img2} className="mt-[1rem] w-[50%]" alt="" />
        </div>

        <div className="flex flex-col sm:flex-row    gap-2  w-full px-2 items-center text-xsm">
          <div className="bg-[#eebb14] w-full sm:w-[30%] h-auto p-6 sm:py-9 border-[#eebb14] border-2 flex justify-center items-center">
            <span className="text-center">
              State-of-the art user-friendly DIY Kits
            </span>
          </div>

          <div className="bg-[#faf8f1] w-full sm:w-[30%] h-auto p-6 border-[#eebb14] border-2 flex justify-center items-center">
            <span className="text-center ">
              Activity book on CAD, 3D printing, IOT and electronics
            </span>
          </div>

          <div className="bg-[#eebb14] w-full sm:w-[30%] h-auto px-2 py-6 border-[#eebb14] border-2 flex justify-center items-center">
            <span className="text-center">
              Detailed handbook aligned with CBSE/ICSE curriculum
            </span>
          </div>
          <div className="bg-[#faf8f1] w-full sm:w-[30%] h-auto px-2 py-9 border-[#eebb14] border-2 flex justify-center items-center">
            <span className="">3D Printer book for guidance</span>
          </div>
          <div className="bg-[#eebb14] w-full sm:w-[30%] h-auto p-6 sm:py-9 border-[#eebb14] border-2 flex justify-center items-center">
            <span className="text-center ">
              Architectural support to make the lab
            </span>
          </div>

          <div className="bg-[#faf8f1] w-full sm:w-[30%] h-auto p-6 sm:py-9 border-[#eebb14] border-2 flex justify-center items-center">
            <span className="text-center">
              Video tutorials covering wide range of topics
            </span>
          </div>
        </div>

        <div className="bg-[#ca7616] text-white  px-4 py-3 w-full flex justify-center items-center">
          <span className="text-2xl text-center">THINK | CREATE | DEVELOP</span>
        </div>

        <div className="flex sm:flex-row flex-col  w-full h-[100%] justify-center items-center">
          <div className="flex flex-col w-[70%] sm:w-[30%] md:w-[30%] bg-[#eff6fc] justify-center items-center py-4">
            <space className="font-bold text-[#aa671b] text-center w-[40%]">
              {" "}
              3D PRINTING WHAT IT CAN DO !
            </space>

            <img src={img3} className="mt-[1rem] w-full h-auto" alt="" />
          </div>

          <div className="bg-[#dcb68c] flex w-full flex-col px-2 py-2">
            <div className="  flex sm:flex-row flex-col w-full mx-4  justify-center items-center">
              <div className="flex  flex-col  items-center justify-center">
                <img
                  src={img4}
                  className="mt-[1rem] w-[10rem] h-[10rem]  p-1"
                  alt=""
                />
                <span className="font-bold text-center">Primary</span>
              </div>
              <div className="flex  flex-col items-center justify-center">
                <img
                  src={img5}
                  className="mt-[1rem] w-[10rem] h-[10rem]  p-1"
                  alt=""
                />
                <span className="font-bold text-center">Biology</span>
              </div>
              <div className="flex  flex-col items-center justify-center">
                <img
                  src={img6}
                  className="mt-[1rem] w-[10rem] h-[10rem]  p-1"
                  alt=""
                />
                <span className="font-bold text-center">Physics</span>
              </div>
              <div className="flex   flex-col items-center justify-center">
                <img
                  src={img7}
                  className="mt-[1rem] w-[10rem] h-[10rem]  p-1"
                  alt=""
                />
                <span className="font-bold text-center">Chemistry</span>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full mx-4 sm:pl-16">
              <div className=" sm:flex sm:flex-col justify-center gap-4 items-center ">
                <div className="flex flex-row items-center justify-center">
                  <img
                    src={img8}
                    className="mt-[1rem] w-[10rem] h-[10rem]"
                    alt=""
                  />
                  <img
                    src={img9}
                    className="mt-[1rem] w-[10rem] h-[10rem]"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-bold text-center flex items-center justify-center">
                    Engineering
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 items-center">
                <div className="flex flex-row">
                  <img
                    src={img10}
                    className="mt-[1rem]  w-[10rem] h-[10rem]"
                    alt=""
                  />
                  <img
                    src={img11}
                    className="mt-[1rem]   w-[10rem] h-[10rem]"
                    alt=""
                  />
                </div>
                <div>
                  <span className="font-bold text-center">Bio-Medical</span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 items-center">
                <img
                  src={img12}
                  className="mt-[1rem] w-[10rem] h-[10rem]"
                  alt=""
                />
                <span className="font-bold text-center">Art</span>
              </div>
            </div>
          </div>
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default Atal;
