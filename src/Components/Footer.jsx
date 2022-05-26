import React from "react";
import logWhite from "../assets/logoWhite.png";
import phone from "../assets/phone.png";


import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Circle,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      

      <div className="bg-red-600 w-[100vw] lg:px-[9rem] items-start sm:px-[3rem] px-4 py-[2rem] flex justify-between ">
        <div className="flex flex-col gap-3 sm:w-[20vw] w-[25vw]">
          <img src={logWhite} className="object-cover w-full" alt="" />
          <span className="text-white sm:text-sm text-xs w-full">
            A-12, Second Floor, Mohan Cooperative Industrial Estate, Main
            Mathura Road, Near Sarita Vihar Metro Station, New Delhi – 110044
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-white sm:text-xl text-base">USEFUL LINKS</span>
          <div className="flex flex-col gap-1">
            <span className="text-white sm:text-sm text-xs">Properties</span>
            <span className="text-white sm:text-sm text-xs">New Books</span>
            <span className="text-white sm:text-sm text-xs">
              Awards & Recognitions
            </span>
            <span className="text-white sm:text-sm text-xs">News</span>
            <span className="text-white sm:text-sm text-xs">Press Release</span>
            <span className="text-white sm:text-sm text-xs">
              Terms And Conditions
            </span>
            <span className="text-white sm:text-sm text-xs">Career</span>
          </div>
          <div className="flex gap-2">
            <Facebook />
            <Twitter />
            <Instagram />
            <YouTube />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[30vw]">
          <span className="text-white sm:text-xl text-base">NEWSLETTER</span>
          <div className="flex flex-col gap-1">
            <span className="text-white sm:text-sm text-xs">
              Be the first to know about the latest news.
            </span>
            <input
              type="text"
              placeholder="E-mail...."
              className=" bg-white sm:px-4 px-2 placeholder:text-sm sm:placeholder:text-base sm:py-1 sm:w-[20vw] w-[30vw] rounded-md outline-none"
            />
          </div>
          <div className="flex gap-4 items-center w-full">
            <div className="flex flex-col gap-3 w-[12vw]">
              <span className="text-white sm:text-xl text-base w-[30vw]">
                GET IN TOUCH
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-white sm:text-sm text-xs w-[30vw]">
                  +91 85265 25846
                </span>
                <span className="text-white sm:text-sm text-xs w-[30vw]">
                  info@eupheus.in
                </span>
              </div>
            </div>
            <img
              src={phone}
              className="w-[15vw] h-auto hidden sm:block"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
