import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/skillDev/handwriting/1.png";
import book2 from "../../../assets/curriculum/skillDev/handwriting/2.png";
import book3 from "../../../assets/curriculum/skillDev/handwriting/3.png";
import englishvibes from "../../../assets/curriculum/skillDev/handwriting/Curriculum Catalogue_2021-22_Page_59.jpg";

const Handwriting = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-6/12 w-full">
            <span className="text-[#1780c1] font-semibold">
              Zaner-Bloser Handwriting
            </span>{" "}
            &nbsp; is a series of seven books for classes K to 6 that help
            students to not only write their letters, but to also express
            themselves as confident, capable communicators. Handwriting is a key
            foundational skill for literacy development and the Zaner-Bloser
            series has been proven effective for developing all types of
            literacy skills, including reading. <br /> <br />
            The Zaner-Bloser Handwriting series is supplemented by
            <b> Zaner-Bloser Handwriting Practice Masters </b> for classes K to
            6 that help students to further practice their writing skills
          </span>
          <div className="sm:w-5/12 w-full bg-[#9dd9ff] rounded-lg  p-4">
            <table className="">
              <tr>
                <th className="text-white text-center">Title</th>
                <th className="text-white text-center">Price</th>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Book K</td>
                <td className="text-center">215</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Book 1</td>
                <td className="text-center">215</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Book 2</td>
                <td className="text-center">215</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Book 3</td>
                <td className="text-center">215</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Book 4</td>
                <td className="text-center">215</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Book 5 </td>
                <td className="text-center">215</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master K</td>
                <td className="text-center">130</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master 1</td>
                <td className="text-center">130</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master 2</td>
                <td className="text-center">130</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master 3</td>
                <td className="text-center">130</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master 4</td>
                <td className="text-center">130</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master 5</td>
                <td className="text-center">130</td>
              </tr>
              <tr>
                <td>Zaner-Bloser Handwriting Practice Master 6</td>
                <td className="text-center">130</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-9/12 w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#1780c1] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#9dd9ff] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Digital
                Tutor QR codes available throughout the books that students can
                scan to access instructional videos that reinforce the basics of
                handwriting and teach how to write letters and numerals.
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Writing
                models act as guidelines for students to write their letters
                neatly on the lines
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Stop and
                Check can be used by students to evaluate the letters they have
                written
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Keys to
                Legibility help students to improve the shape, size, spacing,
                and slant of their letters to make their writing neat and
                legible
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full ">
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book1} className=" h-auto" alt="" />
          </div>
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book2} className="rounded-md h-auto" alt="" />
          </div>
          <div className="flex flex-row items-center sm:w-1/2 w-full">
            <img src={book3} className="rounded-md h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Handwriting;
