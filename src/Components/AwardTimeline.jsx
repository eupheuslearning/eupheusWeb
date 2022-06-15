import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import certtificate8 from "../assets/media/cer8.png";
import certtificate9 from "../assets/media/cer9.png";
import certtificate11 from "../assets/media/cer11.png";
import certtificate3 from "../assets/media/car3.png";
import certtificate4 from "../assets/media/cer4.png";
import certtificate5 from "../assets/media/cer5.png";
import certtificate6 from "../assets/media/cer6.png";
import certtificate7 from "../assets/media/cer7.png";
import certtificate1 from "../assets/media/cer1.png";
import certtificate2 from "../assets/media/cer2.png";

export default function AwardTimeline() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  return (
    <>
      {/* <div className="flex flex-col gap-4 justify-center items-center my-8">
        <div className="flex flex-col gap-4 w-[100vw] items-center ">
          <div
            onClick={() => setFirst(!first)}
            className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[60%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
          >
            <span>Awards In 2022</span>
            <KeyboardArrowDown
              className={`!text-[3rem] ${
                first ? "rotate-180" : null
              } transition-all duration-150 ease-linear`}
            />
          </div>
          {first ? (
            <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
              <img
                src={certtificate11}
                className="sm:w-[16rem] w-[7.5rem] h-auto object-cover"
                alt=""
              />
              <img
                src={certtificate9}
                className="sm:w-[16rem] w-[7.5rem] h-auto object-cover"
                alt=""
              />

              <img
                src={certtificate8}
                className="sm:w-[16rem] w-[7.5rem] h-auto object-cover"
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 w-[100vw] items-center">
          <div
            onClick={() => setSecond(!second)}
            className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[60%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
          >
            <span>Awards In 2021</span>
            <KeyboardArrowDown
              className={`!text-[3rem] ${
                second ? "rotate-180" : null
              } transition-all duration-150 ease-linear`}
            />
          </div>
          {second ? (
            <div className=" w-full justify-around px-4 bg-transparent flex sm:flex-row flex-col gap-3">
              <img
                src={certtificate3}
                className="sm:h-[8rem] h-[6rem] w-auto"
                alt=""
              />
              <img src={certtificate4} className="h-[8rem] w-auto" alt="" />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 w-[100vw] items-center">
          <div
            onClick={() => setThird(!third)}
            className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[60%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
          >
            <span>Awards In 2020</span>
            <KeyboardArrowDown
              className={`!text-[3rem] ${
                third ? "rotate-180" : null
              } transition-all duration-150 ease-linear`}
            />
          </div>
          {third ? (
            <div className="flex flex-col gap-4">
              <div className=" w-full justify-around px-4 bg-transparent flex sm:flex-row flex-col gap-3">
                <img
                  src={certtificate3}
                  className="sm:h-[8rem] h-[6rem] w-auto"
                  alt=""
                />
                <img src={certtificate4} className="h-[8rem] w-auto" alt="" />
              </div>
              <div className="w-full justify-around px-4 bg-transparent flex gap-3">
                <img
                  src={certtificate5}
                  className="sm:w-[20rem] w-[7.8rem] h-auto object-cover"
                  alt=""
                />
                <img
                  src={certtificate6}
                  className="sm:w-[16rem] w-[7rem] h-auto object-cover"
                  alt=""
                />
                <img
                  src={certtificate7}
                  className="sm:w-[16rem] w-[7rem] h-auto object-cover"
                  alt=""
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 w-[100vw] items-center">
          <div
            onClick={() => setFourth(!fourth)}
            className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[60%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
          >
            <span>Awards In 2019</span>
            <KeyboardArrowDown
              className={`!text-[3rem] ${
                fourth ? "rotate-180" : null
              } transition-all duration-150 ease-linear`}
            />
          </div>
          {fourth ? (
            <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
              <img
                src={certtificate3}
                className="sm:h-[14rem] h-[6rem] w-auto"
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 w-[100vw] items-center">
          <div
            onClick={() => setFifth(!fifth)}
            className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[60%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
          >
            <span>Awards In 2018</span>
            <KeyboardArrowDown
              className={`!text-[3rem] ${
                fifth ? "rotate-180" : null
              } transition-all duration-150 ease-linear`}
            />
          </div>
          {fifth ? (
            <div className=" w-full justify-around px-4 bg-transparent flex sm:gap-3 gap-1">
              <img
                src={certtificate1}
                className="sm:w-[24rem] w-[11rem] h-auto"
                alt=""
              />
              <img
                src={certtificate2}
                className="sm:w-[28rem] w-[13rem] h-auto"
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div> */}

      <div class="p-4 mt-4">
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div class="flex md:contents relative">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2022
                </div>
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center"></div>
              </div>

              <div className="flex flex-col gap-4 sm:w-[100vw] items-start my-8">
                <div
                  onClick={() => setFirst(!first)}
                  className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[85%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
                >
                  <span>Awards In 2022</span>
                  <KeyboardArrowDown
                    className={`!text-[3rem] ${
                      first ? "rotate-180" : null
                    } transition-all duration-150 ease-linear`}
                  />
                </div>
                {first ? (
                  <div className=" w-full sm:justify-start justify-around px-4 bg-transparent flex sm:gap-12 gap-2">
                    <img
                      src={certtificate11}
                      className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                      alt=""
                    />
                    <img
                      src={certtificate9}
                      className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                      alt=""
                    />

                    <img
                      src={certtificate8}
                      className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2021
                </div>
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center">
                  <i class="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[100vw] items-start my-8">
                <div
                  onClick={() => setSecond(!second)}
                  className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[85%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
                >
                  <span>Awards In 2021</span>
                  <KeyboardArrowDown
                    className={`!text-[3rem] ${
                      second ? "rotate-180" : null
                    } transition-all duration-150 ease-linear`}
                  />
                </div>
                {second ? (
                  <div className=" w-full justify-start px-4 bg-transparent flex sm:flex-row flex-col gap-12">
                    <img
                      src={certtificate3}
                      className="h-[6rem] w-auto"
                      alt=""
                    />
                    <img
                      src={certtificate4}
                      className="h-[6rem] w-auto"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2020
                </div>
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center">
                  <i class="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[100vw] items-start my-8">
                <div
                  onClick={() => setThird(!third)}
                  className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[85%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
                >
                  <span>Awards In 2020</span>
                  <KeyboardArrowDown
                    className={`!text-[3rem] ${
                      third ? "rotate-180" : null
                    } transition-all duration-150 ease-linear`}
                  />
                </div>
                {third ? (
                  <div className="flex flex-col gap-4">
                    <div className=" w-full justify-around px-4 bg-transparent flex sm:flex-row flex-col gap-3">
                      <img
                        src={certtificate3}
                        className="h-[6rem] w-auto"
                        alt=""
                      />
                      <img
                        src={certtificate4}
                        className="h-[6rem] w-auto"
                        alt=""
                      />
                    </div>
                    <div className="w-full justify-around px-4 bg-transparent flex gap-3">
                      <img
                        src={certtificate5}
                        className="sm:w-[20rem] w-[7.8rem] h-auto object-cover"
                        alt=""
                      />
                      <img
                        src={certtificate6}
                        className="sm:w-[16rem] w-[7rem] h-auto object-cover"
                        alt=""
                      />
                      <img
                        src={certtificate7}
                        className="sm:w-[16rem] w-[7rem] h-auto object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2019
                </div>
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center"></div>
              </div>

              <div className="flex flex-col gap-4 w-[100vw] items-start my-8">
                <div
                  onClick={() => setFourth(!fourth)}
                  className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[85%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
                >
                  <span>Awards In 2019</span>
                  <KeyboardArrowDown
                    className={`!text-[3rem] ${
                      fourth ? "rotate-180" : null
                    } transition-all duration-150 ease-linear`}
                  />
                </div>
                {fourth ? (
                  <div className=" w-full justify-start px-4 bg-transparent flex gap-3">
                    <img
                      src={certtificate3}
                      className="h-[6rem] w-auto"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2018
                </div>
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center"></div>
              </div>

              <div className="flex flex-col gap-4 w-[100vw] items-start my-8">
                <div
                  onClick={() => setFifth(!fifth)}
                  className="text-black flex cursor-pointer justify-around items-center sm:w-[40%] w-[85%] sm:text-2xl text-lg rounded-md sm:p-4 p-2 bg-[#f5ab1d]"
                >
                  <span>Awards In 2018</span>
                  <KeyboardArrowDown
                    className={`!text-[3rem] ${
                      fifth ? "rotate-180" : null
                    } transition-all duration-150 ease-linear`}
                  />
                </div>
                {fifth ? (
                  <div className=" w-full sm:justify-start justify-around px-4 bg-transparent flex sm:gap-3 gap-1">
                    <img
                      src={certtificate1}
                      className="sm:w-[24rem] w-[9rem] h-auto"
                      alt=""
                    />
                    <img
                      src={certtificate2}
                      className="sm:w-[28rem] w-[11rem] h-auto"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
