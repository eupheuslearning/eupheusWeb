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
    <div className="flex flex-col gap-4 justify-center items-center my-8">
      <div className="flex flex-col gap-4 w-[100vw] items-center ">
        <div
          onClick={() => setFirst(!first)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
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
              src={certtificate8}
              className="w-[16rem] h-auto object-cover"
              alt=""
            />
            <img
              src={certtificate9}
              className="w-[16rem] h-auto object-cover"
              alt=""
            />
            <img
              src={certtificate11}
              className="w-[16rem] h-auto object-cover"
              alt=""
            />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setSecond(!second)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
        >
          <span>Awards In 2021</span>
          <KeyboardArrowDown
            className={`!text-[3rem] ${
              second ? "rotate-180" : null
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {second ? (
          <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
            <img src={certtificate3} className="h-[8rem] w-auto" alt="" />
            <img src={certtificate4} className="h-[8rem] w-auto" alt="" />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setThird(!third)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
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
            <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
              <img src={certtificate3} className="h-[8rem] w-auto" alt="" />
              <img src={certtificate4} className="h-[8rem] w-auto" alt="" />
            </div>
            <div className="w-full justify-around px-4 bg-transparent flex gap-3">
              <img
                src={certtificate5}
                className="w-[20rem] h-auto object-cover"
                alt=""
              />
              <img
                src={certtificate6}
                className="w-[16rem] h-auto object-cover"
                alt=""
              />
              <img
                src={certtificate7}
                className="w-[16rem] h-auto object-cover"
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setFourth(!fourth)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
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
            <img src={certtificate3} className="h-[14rem] w-auto" alt="" />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-4 w-[100vw] items-center">
        <div
          onClick={() => setFifth(!fifth)}
          className="text-black flex cursor-pointer justify-around items-center w-[40%] text-2xl rounded-md p-4 bg-[#f5ab1d]"
        >
          <span>Awards In 2018</span>
          <KeyboardArrowDown
            className={`!text-[3rem] ${
              fifth ? "rotate-180" : null
            } transition-all duration-150 ease-linear`}
          />
        </div>
        {fifth ? (
          <div className=" w-full justify-around px-4 bg-transparent flex gap-3">
            <img src={certtificate1} className="w-[24rem] h-auto" alt="" />
            <img src={certtificate2} className="w-[28rem] h-auto" alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
