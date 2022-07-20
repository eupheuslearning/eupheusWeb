import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/cbse/surbhika_hindi/1.png";
import book2 from "../../../assets/curriculum/cbse/surbhika_hindi/2.png";

import wowmaths from "../../../assets/curriculum/cbse/surbhika_hindi/Curriculum Catalogue_2021-22_Page_33.jpg";

export const Surbhika_hindi = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={wowmaths} className="w-full h-auto" alt="" />

        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            <span className="text-[#3283c5] font-semibold">
              सुरभिका हिंदी व्याक्रण-माला
            </span>
            माध्यमिक कक्षाओं के विद्यार्थीयो के लिए की गई है। इसके निर्माण में
            इस बात का विशेष ध्यान रखा गया है की विद्यार्थी नियमो, परिभाषाओ में न
            उलझकर व्याकरण का व्यवारिक उपयोग के प्रयोग से विषय को बोधगम्य एवं
            रुचिकर बनाने का प्रयास किया गया है।
            <br />
            इस व्याकरण-माला की विशिष्टा इसके अभयासो के वैविध्य में भी है। अंतत्य
            संछिप्त तथा बहुविकल्पीय प्रशनो का निर्माण इस प्रकार किया गया है,
            जिससे सम्बंदित पाठ के ज्ञान का समुच्य आकलन किया जा सके, कोई प्रश्
            छूटे नहीं।
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
          <div className="flex flex-col sm:w-6/12 w-[50%]">
            <img src={book1} className="w-full h-auto" alt="" />
          </div>
          <div className="flex flex-col sm:w-[50%] w-[50%] m-4">
            <img src={book2} className="w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
