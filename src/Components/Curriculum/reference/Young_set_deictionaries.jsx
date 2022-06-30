import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/Reference/young_set_deictionaries/1.png";
import book2 from "../../../assets/curriculum/Reference/young_set_deictionaries/2.png";
import book3 from "../../../assets/curriculum/Reference/young_set_deictionaries/3.png";
import englishvibes from "../../../assets/curriculum/Reference/young_set_deictionaries/Curriculum Catalogue_2021-22_Page_65.jpg";

const Young_set_deictionaries = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-10/12 w-full">
            <span className="text-[#ea89b9] font-semibold">
              The Young Set Dictionaries
            </span>
            &nbsp; have been designed as a ‘staircase of dictionaries’ which
            will lead children by stages to the full dictionaries intended for
            adults. The books are graded in a number of different ways: in the
            vocabulary used, in the simplicity of definition, in the degree of
            pictorial help provided and in the extent to which they conform to
            the accepted conventions of a dictionary. <br /> <br />
            <span className="text-[#ea89b9] font-semibold">Dictionary 1</span>
            &nbsp; is intended for the beginner reader, although it could also
            be appreciated by the pre-schooler. The 160 words are all concrete
            nouns and the ‘definitions’ are full-colour illustrations.
            Suggestions for using it are given at the beginning of the book.{" "}
            <br /> <br />
            <span className="text-[#ea89b9] font-semibold">Dictionary 2</span>
            &nbsp; is a simple conventional dictionary with 1000 entries which
            include verbs and adjectives as well as nouns. The child who has
            learned to read will be ready to browse through this book and will
            be greatly helped by the clear black and white drawings in the text.
            <br /> <br />
            <span className="text-[#ea89b9] font-semibold">Dictionary 3</span>
            &nbsp; takes the progress one stage further. It contains about 5000
            words and is intended for those who can read fairly easily. Pictures
            are occasionally used when words alone seem inadequate. <br />
            <span>
              This edition is for sale in India and specified territories only.
            </span>
          </span>

          <div className="sm:w-6/12 w-full flex lg:flex-col md:flex-col">
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ff7579] py-2 m-4">
              <table className="">
                <tr>
                  <td
                    colSpan={2}
                    className="p-1 font-bold text-white text-center"
                  >
                    Maths
                  </td>
                </tr>
                <tr className="p-2">
                  <th className="text-white flex justify-start p-2">Title</th>
                  <th className="text-white p-2">Price</th>
                </tr>
                <tr>
                  <td className="p-1 ">Book 1</td>
                  <td className="p-1">170</td>
                </tr>
                <tr>
                  <td className="p-1">Book 2</td>
                  <td className="p-1">190</td>
                </tr>
                <tr>
                  <td className="p-2">Book 3</td>
                  <td className="p-2">215</td>
                </tr>
              </table>
            </div>
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ff7579] py-2 m-4">
              <ul className="px-2 py-1 w-full rounded-md  text-black">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Focused on computer basics to understanding of coding
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Introduction of folk art and craft under the aegis of heritage
                  education
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book1} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book2} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col items-center sm:w-1/2 w-full">
            <img src={book3} className="w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Young_set_deictionaries;
