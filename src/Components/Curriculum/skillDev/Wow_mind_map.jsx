import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/skillDev/wow_mind_maps/1.png";
import englishvibes from "../../../assets/curriculum/skillDev/wow_mind_maps/Curriculum Catalogue_2021-22_Page_55.jpg";

const Wow_mind_map = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-6/12 w-full">
            <span className="text-[#ea89b9] font-semibold">Wow! Mind Maps</span>
            &nbsp; is a set of 5 books that aids studying and organizing
            information of Mathematics and Science in classes 6 to 10. Authored
            by Koteshwar Rao, who is among the few people in India trained and
            certified by Professor Tony Buzan, the Mind Map creator, mind maps
            are being used by millions of students today.
          </span>
          <div className="sm:w-6/12 w-full flex flex-row">
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffb1d8] py-2 m-4">
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
                  <td className="p-1 ">Book 6</td>
                  <td className="p-1">410</td>
                </tr>
                <tr>
                  <td className="p-1">Book 7</td>
                  <td className="p-1">410</td>
                </tr>
                <tr>
                  <td className="p-2">Book 8</td>
                  <td className="p-2">420</td>
                </tr>
                <tr>
                  <td className="p-2">Book 9</td>
                  <td className="p-2">319</td>
                </tr>
                <tr>
                  <td className="p-2">Book 10</td>
                  <td className="p-2">319</td>
                </tr>
              </table>
            </div>
            <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffb1d8] py-2 m-4">
              <table className="">
                <tr>
                  <td
                    colSpan={2}
                    className="p-1 font-bold text-white text-center"
                  >
                    Science
                  </td>
                </tr>
                <tr className="p-2">
                  <th className="text-white flex justify-start p-2">Title</th>
                  <th className="text-white p-2">Price</th>
                </tr>
                <tr>
                  <td className="p-1">Book 6</td>
                  <td className="p-1">185</td>
                </tr>
                <tr>
                  <td className="p-1">Book 7</td>
                  <td className="p-1">190</td>
                </tr>
                <tr>
                  <td className="p-2">Book 8</td>
                  <td className="p-2">195</td>
                </tr>
                <tr>
                  <td className="p-2">Book 9</td>
                  <td className="p-2">200</td>
                </tr>
                <tr>
                  <td className="p-2">Book 10</td>
                  <td className="p-2">205</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#ea89b9] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] rounded justify-center">
            <div className="bg-[#ffb1d8] w-full sm:flex-col rounded-lg ">
              <ul className="px-2 py-1   text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Mind
                  Map synchronises both the left brain and the right brain and
                  stimulates them to help understand and remember concepts.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Mind
                  Map structure directly corresponds to the way our mind stores
                  and retrieves information.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Conveys key words, hierarchy, association, and relationships
                  between concepts through comprehensive diagrams.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
          <img src={book1} className="w-[80%] h-auto m-auto" alt="" />
        </div>
      </div>
    </>
  );
};

export default Wow_mind_map;
