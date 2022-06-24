import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/surbhika_hindi/1.png";
import book2 from "../../../assets/curriculum/surbhika_hindi/2.png";

import wowmaths from "../../../assets/curriculum/surbhika_hindi/Curriculum Catalogue_2021-22_Page_33.jpg";

export const Surbhika_hindi = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wowmaths} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            <span className="text-[#3283c5] font-semibold">Silver Bells</span>
            &nbsp; is a revised series of five poetry books that covers beloved
            children’s poems and classical poetry by renowned poets both old and
            new. This package has been extremely popular with students and
            teachers of all schools that include the teaching of poetry in their
            curriculum. It is used by schools following the ICSE, CBSE, and
            State Boards.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#72b2e7] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
              <span className="text-black font-semibold">Book 3</span>
              <span className="text-black font-semibold">Book 4</span>
              <span className="text-black font-semibold">Book 5</span>
              <span className="text-black font-semibold">Book 6</span>
              <span className="text-black font-semibold">Book 7</span>
              <span className="text-black font-semibold">Book 8</span>
              <span className="text-black font-semibold">Book 9 & 10</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">230</span>
              <span className="text-black font-semibold">235</span>
              <span className="text-black font-semibold">285</span>
              <span className="text-black font-semibold">345</span>
              <span className="text-black font-semibold">365</span>
              <span className="text-black font-semibold">415</span>
              <span className="text-black font-semibold">435</span>
              <span className="text-black font-semibold">460</span>
              <span className="text-black font-semibold">485</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-6/12 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col sm:w-[50%] w-full m-4">
            <img src={book2} className="w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
