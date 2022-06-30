import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/Reference/eupheus_school_atals/1.png";
import book2 from "../../../assets/curriculum/Reference/eupheus_school_atals/2.png";
import book3 from "../../../assets/curriculum/Reference/eupheus_school_atals/3.png";
import englishvibes from "../../../assets/curriculum/Reference/eupheus_school_atals/Curriculum Catalogue_2021-22_Page_64.jpg";

const Eupheus_school_atlas = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            &nbsp;
            <span className="text-[#e11b22] font-semibold">
              Eupheus School Atlas
            </span>
            &nbsp; (ICSE)is duly certified by the Survey of India, Dehradun and
            updated to include the latest boundaries between Jammu and Kashmir
            (UT) and Ladakh (UT). All the latest name changes of all features in
            India have been incorporated in it. <br />
            All demographic figures are based on the Census of India, 2011 and
            State Gazetteers have been utilised to extract relevant state
            information. Spatial and geographic information has been vetted
            against authentic sources, such as IMD, CSMIR, SSI, and various
            government portals.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 h-fit justify-center bg-[#ff7579] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">370</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 sm:px-0 w-full ">
          <span className="px-3 ml-3 py-1 bg-[#e11b22] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="flex flex-row  items-center w-[90%] rounded justify-center">
            <div className="bg-[#ff7579] w-full sm:flex-col rounded-lg">
              <ul className="px-2 py-1    text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Contour-based maps as required by ICSE Board
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Provides the latest demographic and socio-economic data
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" />{" "}
                  &nbsp;Contains recent geo-political, socio-economic, and
                  environmental developments
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Includes thematic maps in Geography and History aligned to
                  syllabus of grades 4 to12
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Coverage of information as per NCERT/CBSE/ICSE/State
                  curriculum
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Simple
                  informative details included with maps
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; A
                  20-page free atlas companion for map practice (based on ICSE
                  Board syllabi)
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; Two
                  wall maps (political maps of India and the world) included
                  that can be pulled out and used for reference
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Comprehensive index included
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Accompanied by an interactive digital atlas
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

export default Eupheus_school_atlas;
