import React from "react";
import Navbar from "../Components/Navbar";
import grayBg from "../assets/grayBg.png";
import solutionBanner from "../assets/solution-banner.png";
import solImg2 from "../assets/sol-img2.png";
import solMap from "../assets/sol-map.png";
import Footer from "../Components/Footer";
import img3 from "../assets/sol-img3.png";
import { Parallax } from "react-scroll-parallax";

const Solutions = () => {
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar />
      <div className="h-[100vh] relative w-[100vw]  ">
        <div className=" absolute  lg:top-[25vh] md:top-[15vh] md:right-[20vw] sm:top-[30vh]  lg:right-[50vh] z-10">
          <h1 className=" text-black-700 md:text-3xl text-base font-extrabold ">
            THE POWER OF THE
          </h1>
          <h1 className="text-black-500 md:text-3xl text-sm font-semibold">
            WIDEST CATALOGUE OF OFFERINGS
          </h1>
        </div>
        <img className="h-[100vh]" src={solutionBanner} alt="" />
      </div>

      <div className=" mt-[4rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
        Eupheus Learning Group (combined entity of Eupheus Learning, ClassKlap
        and SchoolMitra), apart from their largest catalogue of curricular and
        co-curricular offerings mapped to CBSE and ICSE boards, has introduced
        21st Century School OS which is a unified digital platform offering
        content management system (CMS), enterprise resource planning (ERP) and
        learning management system (LMS) through a single sign on, making lives
        simpler for all stakeholders alike – principals, teachers, parents and
        students. Eupheus is a pioneer when it comes to personalizing learning
        outcomes for a student, since the company believes that each student is
        unique. There’s a unique offering called ‘personalized remedial
        solution’ which customizes remedial help for students thereby making
        them understand the subject at the topic level.
        <br />
        <br />
        The brand is focused on transforming schools into a 21st Century School
        with the increased digitalization appreciation of the modern world
      </div>

      <div className=" mt-[8rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-bold flex flex-col md:text-5xl text-3xl">
        <span>COURSE BOOK SOLUTIONS FOR</span>
        <span>PRE-PRIMARY TO GRADE 8</span>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <img className=" h-auto w-[60vw]" src={solImg2} alt="" />
      </div>

      <div className=" mt-[8rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-bold flex flex-col md:text-5xl text-3xl">
        <span>SUPPLEMENTAL SOLUTIONS</span>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <img className=" h-auto w-[80vw]" src={solMap} alt="" />
      </div>

      <div className=" mt-[8rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-bold flex flex-col md:text-5xl text-3xl">
        <span>THE POWER OF THE 21ST CENTURY SCHOOL OS</span>
      </div>
     <div className="grid lg:grid-cols-3  gap-2 mb-[5rem]">
     <div className="mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
      The 21st Century School OS unifies ERP (enterprise
      resource planning), LMS (learning management
      system) and CMS (content management system)
      on a single sign-on, for all stakeholders of a school
      – parents, teachers, students and parents. With the
      uniqueness lies in the content and technology
      solutions development and deployment, Eupheus
      Learning is working together with schools to
      encourage and support children as they develop
      the core STEAM skills that are essential to succeed
      in school and in today’s economy.
      </div>
   
        <img
          src={img3}
          className="w-[50vw] h-auto lg:mt-[-5rem] ml-[25vw]"
          alt=""
        />   
     </div>
     
                                     

      <Footer />
    </div>
  );
};

export default Solutions;
