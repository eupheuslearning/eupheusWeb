import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bn1 from "../assets/Banner1.jpg";
import bn2 from "../assets/Banner2.jpg";
import bn3 from "../assets/Banner3.jpg";
import bn4 from "../assets/banner4.jpg";
import grayBg from "../assets/grayBg.png";
import firstSectionSchool from "../assets/first-section-school.174ed857.svg";
import firstSectionLighthouse from "../assets/first-section-lighthouse.a0be8772.svg";
import section2schools from "../assets/section2schools.png";
import section2students from "../assets/section2students.png";
import power from "../assets/power.png";
import image1 from "../assets/image1.png";
import book from "../assets/book.png";
import card from "../assets/card.png";
import robot from "../assets/robot.png";
import reading from "../assets/reading.png";
import laptop from "../assets/laptop.png";
import schoolmitra from "../assets/schoolmitra.png";
import trophy from "../assets/trophy.png";
import code2win from "../assets/code2win.png";
import play from "../assets/play.png";
import laptop2 from "../assets/laptop2.png";
import iso from "../assets/iso.png";
import sm from "../assets/sm.png";
import footerimg1 from "../assets/footerimg1.png";

import { Parallax } from "react-scroll-parallax";
import { Circle } from "@mui/icons-material";
import Slider from "../Components/Slider";

const Home = () => {
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);

  const resetTime = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  useEffect(() => {
    resetTime();
    timeout.current = setTimeout(() => {
      setIndex((prev) => {
        return prev === 2 ? 0 : prev + 1;
      });
    }, 3000);

    return () => {
      resetTime();
    };
  }, [index]);

  return (
    <div
      className="bg-[#dbdbdb] w-[100vw] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar />
      <Slider  />
     
      <div className=" mt-[4rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-4xl text-xl">
        <span>INDIA’S LARGEST SCHOOL FOCUSED</span>
        <span>DISTRIBUTION PLATFORM</span>
      </div>

      <div className=" mt-[4rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
        Eupheus Learning is positioned as the ‘largest, school-focused
        distribution platform in India’ and is already present in “One out of
        Four Premium Private Schools of India”. The company is focused on
        bridging the gap between in-classroom and at home learning by offering
        pedagogically differentiated technology-led solutions in the K–12 space
      </div>

      <Parallax translateX={[-20, 0]} scale={[0.75, 1]}>
        <div className=" mt-[8rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-4xl text-xl">
          <span>EUPHEUS LEARNING -</span>
          <span>THE LIGHTHOUSE OF </span>
          <span>TRANSFORMATION IN SCHOOLS</span>
        </div>
      </Parallax>
      <div className="mt-[5rem] w-[60vw] flex gap-20 lg:ml-[13vw] ml-[8vw]">
        <Parallax translateX={["-100px", "0px"]} scale={[0.75, 1]}>
          <img
            src={firstSectionLighthouse}
            className="w-[35vw] h-auto"
            alt=""
          />
        </Parallax>
        <Parallax translateX={["100px", "0px"]} scale={[0.75, 1]}>
          <img src={firstSectionSchool} className="w-[35vw] h-auto" alt="" />
        </Parallax>
      </div>

      <div className="mt-[5rem] w-[100vw] flex md:gap-[7rem] gap-[4rem] justify-center">
        <Parallax rotateY={[180, 570]}>
          <img
            src={section2schools}
            className="w-[25vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
        <Parallax rotateY={[180, 570]}>
          <img
            src={section2students}
            className="w-[25vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
      </div>

      <Parallax translateX={[-50, 20]} scale={[0.75, 1]}>
        <div className=" mt-[8rem] text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col md:text-4xl text-xl">
          <span>THE POWER OF THE WIDEST</span>
          <span>CURRICULUM CATALOGUE</span>
        </div>
      </Parallax>
      <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-xl">
        With its Classroom-first and Curriculum-focused approach, Eupheus
        Learning aims to reach 10 million kids in India through its curriculum
        and specially curated educational offerings in Kinaesthetic Learning,
        Reading Enhancement, STEM/ STEAM, and English language learning via
        exclusive tie-ups with award-winning education technology companies from
        across the world.
      </div>
      <Parallax translateX={[100, -50]}>
        <img
          src={power}
          className="w-[50vw] h-auto mt-[2.5rem] ml-[25vw]"
          alt=""
        />
      </Parallax>
      <div className="flex gap-4 items-center w-[100vw] justify-center pl-6 mt-[2.5rem]">
        <h3 className="text-gray-700 md:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw]">
          Empower your children beyond books and boards that can prepare them
          for the unprecedented challenges of tomorrow.
        </h3>
        <Parallax rotate={[180, 570]}>
          <img src={image1} className="w-[40vw] h-auto" alt="" />
        </Parallax>
      </div>
      <div className="mt-[2.5rem] w-[100vw] justify-center items-center flex flex-col gap-4">
        <img src={book} className="w-[8rem] ml-[30vw] h-auto" alt="" />
        <div className="flex gap-4">
          <Parallax translateX={[-50, 30]}>
            <div className=" relative">
              <img src={card} className="w-[20rem] h-auto" alt="" />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[3rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl sm:text-xl text-sm">
                  CURRICULAR CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] sm:w-[15rem] w-[10rem] ">
                  Eupheus Learning places learners at the heart of education.
                  Therefore, textbooks and syllabi are designed by subject
                  matter experts from across the globe and are mapped to CBSE
                  and ICSE boards.
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax translateX={[50, -30]}>
            <div className=" relative">
              <img src={card} className="w-[21.3rem] h-auto" alt="" />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[3rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl sm:text-xl text-sm">
                  SUPPLEMENTAL CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] sm:w-[15rem] w-[10rem]">
                  Specially curated educational offerings, such as Step and
                  Learn, Cubetto, and Fiction Express to promote Kinaesthetic
                  Learning, Reading Enhancement, STEM/STEAM, and English
                  language learning
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center md:gap-[13rem] sm:gap-[9rem] gap-4">
        <img src={reading} className="w-[10rem] sm:w-[25vw] h-auto" alt="" />
        <img src={robot} className="w-[10rem] sm:w-[25vw] h-auto" alt="" />
      </div>
      <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 md:text-2xl text-base font-bold">
            PERSONALISATION REMEDIAL SERVICE
          </h1>
          <h1 className="text-red-500 md:text-xl text-sm font-semibold">
            TO GAIN AN EDGE IN THE FUTURE
          </h1>
        </span>
        <div className="flex md:gap-[7rem] gap-[2rem] items-center">
          <Parallax translateX={[-50, 20]}>
            <img
              src={laptop}
              className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
              alt=""
            />
          </Parallax>
          <h1 className="text-gray-700 md:text-2xl text-sm w-[35vw]">
            Eupheus Learning acquired ClassKlap that offers the NEP-based
            curriculum, seamless schooling, and various programs to make schools
            and students future-ready. Embrace the new-age learning to gain an
            edge in the future.
          </h1>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] pl-[2rem] pr-[1rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 md:text-2xl text-base font-bold">
            REVOLUTIONIZING SCHOOLS WITH
          </h1>
          <h1 className="text-red-500 md:text-xl text-sm font-semibold">
            THE 21ST CENTURY SCHOOL OS
          </h1>
        </span>

        <h1 className=" md:mt-[2.5rem] mb-[5rem] text-gray-700 lg:w-[50vw] md:w-[70vw]  md:text-2xl text-xl">
          Schools need assistance on ‘content management’, ‘learning
          management’, ‘enterprise resource planning’, ‘financial management’,
          ‘communication management’, etc. and there are disparate solutions
          existing in the marketplace which make matters worse for a school.
          SchoolMitra (a company acquired by Eupheus Learning), a home grown
          SaaS company offering digital school management system has introduced
          The 21st Century School OS which unifies ERP (enterprise resource
          planning), LMS (learning management system) and CMS (content
          management system) on a single sign-on, benefitting all stakeholders
          of a school alike – Principals, Teachers, Students and Parents.
        </h1>
      </div>
      <div className=" relative mt-[3rem]">
        {/* <h1 className=" lg:text-4xl text-3xl text-blue-800 font-bold absolute sm:top-0 -top-4 lg:left-[15vw] md:left-[10vw] left-[5vw] ">
          SCHOOL
          <span className="lg:text-4xl text-3xl text-[#f5ab1d] font-bold">
            MITRA
          </span>
        </h1> */}
        <img className="  h-auto md:ml-[10vw] ml-[10vw]" src={sm} alt="" />
        <img
          className="mt-[1rem] w-[80vw] h-auto md:ml-[10vw] ml-[10vw]"
          src={schoolmitra}
          alt=""
        />
      </div>
      <div className="flex gap-7 flex-col md:ml-[12vw] md:wl-[5vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-2xl font-bold">COMPETITIONS</h1>
        </span>
        <div className="flex items-center md:gap-[7rem] gap-[2rem] ">
          <div className="flex flex-col pt-2 gap-4">
            <h1 className="text-gray-700 md:text-2xl text-sm w-[35vw]">
              Eupheus Learning hosts several national and international events
              to promote the cause of better learning, effective teaching &
              wholesome improvement in the education systems across the world.
            </h1>
            <h1 className="text-gray-700 md:text-2xl text-sm w-[35vw]">
              Unique school outreach initiatives like “Story Telling Sessions”,
              “Olympiad” and “Coding Competitions” have created differentiation
              for the company in this highly competitive and contested education
              market.
            </h1>
          </div>
          <Parallax translateX={[100, -100]}>
            <img
              src={trophy}
              className="w-[43vw] h-auto sm:w-[20vw] sm:h-auto"
              alt=""
            />
          </Parallax>
        </div>
      </div>
      <div className="flex md:gap-[7rem] gap-[2rem] items-center md:ml-[12vw] md:wl-[5vw] pl-[2rem] mt-[5rem]">
        <Parallax translateX={[-50, 20]}>
          <img
            src={play}
            className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
            alt=""
          />
        </Parallax>
        <div className="flex gap-[7rem]">
          <div className="flex flex-col pt-4 gap-4">
            <img
              src={code2win}
              className="md:w-[20vw] w-[30vw] h-auto"
              alt=""
            />
            <h1 className="text-gray-700 md:text-2xl text-sm w-[35vw]">
              Code2Win is a National-level Coding Competition for students from
              Grade 1 to 12. This gamified environment enables young minds to
              develop their competency and encourages them to ‘learn’,
              ‘participate’, ‘win scholarships’ and ‘get certificate’. Needless
              to mention that they can choose Coding as a life skill too.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex gap-1 flex-col md:ml-[12vw] md:wl-[5vw] pl-[2rem] mt-[5rem]">
        <span>
          <img src={iso} alt="" />
        </span>
        <div className="flex gap-[3rem] items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-700 md:text-2xl text-sm w-[35vw]">
              Olympiad is a gateway to real international exposure for Indian
              students from different schools and boards. It truly strengthens
              their ability to comprehend the subject better and compete at a
              global level.
            </h1>
          </div>
          <Parallax translateX={[100, -80]}>
            <img
              src={laptop2}
              className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
              alt=""
            />
          </Parallax>
        </div>
      </div>
      <div>
        <h1 className="text-gray-700 md:text-2xl mt-[3rem] text-sm w-[70vw] pl-[2rem] md:ml-[12vw] md:wl-[5vw] ">
          Eupheus Learning and Varthana Finance Private Ltd, has signed an MoU
          to empower schools with financing options and modern education
          offerings, thereby expanding their infrastructure, investing in
          teacher training, and introducing new learning methods into their
          classrooms.
        </h1>
      </div>

      <div className="w-[100vw] my-[2rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] sm:h-[60vh] w-[80vw] h-[40vh]"
          src="https://www.youtube.com/embed/J2I1oTQ7p18"
        ></iframe>
      </div>
      <div className="w-[100vw] lg:px-[9rem] items-center px-[3rem] py-[2rem] flex justify-between bg-[#f5ab1d]">
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Avocado App Helps Students Practice
            </span>
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Maths And Science To Perfection
            </span>
            <span className="md:text-base text-xs text-red-700">
              December 17, 2018
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Learn Coding In A Fun And
            </span>
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Interactive Manner!
            </span>
            <span className="md:text-base text-xs text-red-700">
              November 15, 2017
            </span>
          </div>
        </div>
        <img
          src={footerimg1}
          className="md:w-[30vw] w-[20vw] hidden sm:block h-[10vh] md:h-auto"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
