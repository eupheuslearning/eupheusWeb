import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/stepAndLearn/2.png";
import img2 from "../../../assets/digital/pickatale/22.png";
import img3 from "../../../assets/digital/pickatale/11.png";
import Icon from "../../../assets/digital/pickatale/PickataleIcon.png";
import img5 from "../../../assets/digital/pickatale/1.png";
import img6 from "../../../assets/digital/pickatale/2.png";
import img7 from "../../../assets/digital/pickatale/3.png";
import img8 from "../../../assets/digital/pickatale/4.png";
import img9 from "../../../assets/digital/pickatale/5.png";
import img10 from "../../../assets/digital/pickatale/6.png";
import img12 from "../../../assets/digital/pickatale/7.png";
import img13 from "../../../assets/digital/pickatale/8.png";
import img14 from "../../../assets/digital/pickatale/9.png";
import img15 from "../../../assets/digital/pickatale/10.png";
import img16 from "../../../assets/digital/pickatale/12.png";
import img17 from "../../../assets/digital/pickatale/13.png";
import GoToTop from "../../Top";

const Pickatale = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Kinaesthetic Learning</span>
          <img src={Icon} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-purple-700">
            For Pre-Primary & Primary Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full font-semibold">
          <span className="flex justify-end">
            {/* <img src={img1} className="w-[30%] h-auto" alt="" /> */}
          </span>
          Pickatale is a library of digitized books that you can read and
          experience interactively. <br />
          Reading on Pickatale opens the door to knowledge and entertainment.{" "}
          <br />
          With Pickatale School, children can read or listen to hundreds of
          children’s books–narrated, illustrated storybooks, non-fiction titles,
          knowledge books, animated books and many more. Children can enjoy
          famous classics such as Beauty and the Beast, Cinderella, and
          Rapunzel, discover new and original characters, or indulge in exciting
          books that will enhance their knowledge.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-[90%] w-full">
          <span className="px-3 ml-3 py-1 bg-[#f4a267] rounded-t-lg w-fit text-white">
            KEY FEATURES
          </span>
          <div className="border-[#ffc59b] flex sm:flex-row flex-col border-2 rounded-md">
            <div className="flex flex-col sm:w-1/2 w-full">
              <ul className="px-2 py-1 w-full   text-black ">
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Get
                  access to over 1300+ amazing, interactive children's books
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Multiple categories and levels of books
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp; 24x7
                  access to resources
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Anytime, Anywhere access on smartphones and tablets
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                  Facilitates reading along as every word is highlighted on the
                  scree along with narrator’s voice.
                </li>
                <li>
                  <Circle className="!text-[0.5rem] text-black" /> &nbsp;Helps
                  in developing reading skills and children's vocabulary
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:w-1/2 w-full">
              <img src={img2} className="w-full  h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <img src={img3} className="w-full  h-auto" alt="" />
      </div>
      <div className="flex w-[100%] flex-col">
        <div className="flex flex-row flex-wrap justify-center px-4">
          <img src={img6} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img5} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img7} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img8} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img9} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img10} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img12} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img13} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img14} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img15} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img16} className="w-[15%]  h-auto p-1" alt="" />
          <img src={img17} className="w-[15%]  h-auto p-1" alt="" />
        </div>
      </div>
      <div className="flex w-full bg-[skyblue] p-4 rounded-lg">
        <span className="text-white text-lg">
          Bringing creativity, entertainment, and technology together to deliver
          an exciting and engaging learning experience by interacting and
          connecting with stories
        </span>
      </div>
      <GoToTop />
    </div>
  );
};

export default Pickatale;
