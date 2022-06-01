import React from "react";
import logWhite from "../assets/logoWhite.png";
import phone from "../assets/phone.png";

import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Circle,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <div className="bg-red-600 w-[100vw] lg:px-[9rem] items-start sm:px-[3rem] px-4 py-[2rem] flex justify-between h-fit ">
        <div className="flex flex-col gap-3 sm:w-[20vw] w-[25vw]">
          <img src={logWhite} className="object-cover w-full" alt="" />
          <span className="text-white sm:text-sm text-xs w-full">
            A-12, Second Floor, Mohan Cooperative Industrial Estate, Main
            Mathura Road, Near Sarita Vihar Metro Station, New Delhi – 110044
          </span>
        </div>
        <div className="flex flex-col mt-[1.5rem] gap-3 sm:w-[20vw] w-[25vw] items-center">
          <span className="text-white sm:text-xl text-base">USEFUL LINKS</span>
          <div className="flex flex-col gap-1">
            <span className="text-white sm:text-sm text-xs">
              Privacy Policy
            </span>
            <span className="text-white sm:text-sm text-xs">
              Terms & Conditions
            </span>
          </div>
          <div className="flex gap-2">
            <Facebook className=" !text-[2rem]" />
            <Twitter className=" !text-[2rem]" />
            <LinkedIn className=" !text-[2rem]" />
            <YouTube className=" !text-[2rem]" />
          </div>
        </div>
        <div className="flex flex-col mt-[1.5rem] gap-3 sm:w-[20vw] w-[25vw] items-center">
          <span className="text-white sm:text-xl text-base">GET IN TOUCH</span>
          <div className="flex flex-col gap-1">
            <span className="text-white sm:text-sm text-xs">01161400200</span>
            <span className="text-white sm:text-sm text-xs">
              info@eupheus.in
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
