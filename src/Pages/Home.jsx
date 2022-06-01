import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
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
import Slider from "../Components/Slider";
import Form from "../Components/Form";
import { Tween, ScrollTrigger, Reveal } from "react-gsap";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const timeout = useRef(null);

  const resetTime = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  // useEffect(() => {
  //   resetTime();
  //   timeout.current = setTimeout(() => {
  //     setIndex((prev) => {
  //       return prev === 2 ? 0 : prev + 1;
  //     });
  //   }, 3000);

  //   return () => {
  //     resetTime();
  //   };
  // }, [index]);

  return (
    <div
      className="bg-[#dbdbdb] w-[100%] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"home"} />
      <div className="sm:mt-0 mt-[24vh]">
        <Slider />
      </div>

      <Reveal repeat>
        <Tween
          from={{ opacity: 0, transform: "translate3d(-100px, 0, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0px, 0, 0)" }}
          ease="back.out(1.4)"
        >
          <div className="mt-[4rem] text-red-700 md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
            <span>INDIA’S LARGEST SCHOOL FOCUSED</span>
            <span>DISTRIBUTION PLATFORM</span>
          </div>
        </Tween>
      </Reveal>

      <Reveal repeat>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
          <div className=" mt-[4rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
            Eupheus Learning is positioned as the ‘largest, school-focused
            distribution platform in India’ and is already present in “One out
            of Four Premium Private Schools of India”. The company is focused on
            bridging the gap between in-classroom and at home learning by
            offering pedagogically differentiated technology-led solutions in
            the K–12 space
          </div>
        </Tween>
      </Reveal>

      <Parallax translateX={[-20, 10]} scale={[0.75, 1]}>
        <div className=" mt-[8rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
          <span>EUPHEUS LEARNING THE LIGHTHOUSE OF</span>

          <span>TRANSFORMATION IN SCHOOLS</span>
        </div>
      </Parallax>
      <div className="mt-[5rem] sm:w-[60vw] w-[100vw] flex sm:gap-20 gap-3 2xl:ml-[18vw] lg:ml-[13vw] sm:ml-[8vw]">
        <Parallax translateX={["-100px", "0px"]} scale={[0.75, 1]}>
          <img
            src={firstSectionLighthouse}
            className="sm:w-[35vw] w-[80vw] h-auto"
            alt=""
          />
        </Parallax>
        <Parallax translateX={["100px", "0px"]} scale={[0.75, 1]}>
          <img
            src={firstSectionSchool}
            className="sm:w-[35vw] w-[80vw]h-auto"
            alt=""
          />
        </Parallax>
      </div>

      <div className="mt-[5rem] w-[100vw] flex md:gap-[7rem] sm:gap-[4rem] gap-4 justify-center">
        <Parallax rotateY={[180, 570]}>
          <img
            src={section2schools}
            className="sm:w-[25vw] w-[40vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
        <Parallax rotateY={[180, 570]}>
          <img
            src={section2students}
            className="sm:w-[25vw] w-[40vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
      </div>

      <Reveal repeat>
        <Tween
          from={{ opacity: 0, transform: "translate3d(-100px, 0, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0px, 0, 0)" }}
          ease="back.out(1.4)"
        >
          <div className=" mt-[8rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
            <span>THE POWER OF THE WIDEST</span>
            <span>CURRICULUM CATALOGUE</span>
          </div>
        </Tween>
      </Reveal>

      <Reveal repeat>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
          <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
            With its Classroom-first and Curriculum-focused approach, Eupheus
            Learning aims to reach 10 million kids in India through its
            curriculum and specially curated educational offerings in
            Kinaesthetic Learning, Reading Enhancement, STEM/ STEAM, and English
            language learning via exclusive tie-ups with award-winning education
            technology companies from across the world.
          </div>
        </Tween>
      </Reveal>
      <Parallax translateX={[100, -50]}>
        <img
          src={power}
          className="w-[50vw] h-auto mt-[2.5rem] ml-[25vw]"
          alt=""
        />
      </Parallax>
      <div className="flex gap-4 items-center w-[100vw] justify-center pl-6 mt-[2.5rem]">
        <h3 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw]">
          Empower your children beyond books and boards that can prepare them
          for the unprecedented challenges of tomorrow.
        </h3>
        {/* <Parallax rotate={[180, 570]}> */}
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}
            to={{ opacity: 1, transform: "translate3d(0, 0px, 0)" }}
            ease="back.out(1.4)"
          >
            <img src={image1} className="w-[40vw] h-auto" alt="" />
          </Tween>
        </Reveal>
        {/* </Parallax> */}
      </div>
      <div className="mt-[2.5rem] w-[100vw] justify-center items-center flex flex-col gap-4">
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}
            to={{ opacity: 1, transform: "translate3d(0, 0px, 0)" }}
            ease="back.out(1.4)"
          >
            <img src={book} className="w-[8rem] ml-[30vw] h-auto" alt="" />
          </Tween>
        </Reveal>
        <div className="flex gap-4">
          <Parallax translateX={[-50, 30]}>
            <div className=" relative">
              <img src={card} className="w-[20rem] h-auto" alt="" />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[3rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl  md:text-6xl sm:text-xl">
                  CURRICULAR CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] h-auto sm:w-[15rem] w-[10rem] ">
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
                <div className="text-yellow-500 font-bold lg:text-2xl md:text-6xl sm:text-4xl">
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
      <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl font-bold">
            PERSONALISATION REMEDIAL SERVICE
          </h1>
          <h1 className="text-red-500 text-base lg:text-xl 2xl:text-4xl font-semibold">
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
          <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm-sm w-[35vw]">
            Eupheus Learning acquired ClassKlap that offers the NEP-based
            curriculum, seamless schooling, and various programs to make schools
            and students future-ready. Embrace the new-age learning to gain an
            edge in the future.
          </h1>
        </div>
      </div>
      <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] pr-[1rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl  font-bold">
            REVOLUTIONIZING SCHOOLS WITH
          </h1>
          <h1 className="text-red-500 text-base lg:text-xl 2xl:text-4xl  font-semibold">
            THE 21ST CENTURY SCHOOL OS
          </h1>
        </span>

        <h1 className=" md:mt-[2.5rem] mb-[5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] lg:text-lg 2xl:text-2xl text-sm">
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
        <div className="W-[100VW] flex justify-center">
          <img
            className="md:ml-[10vw] absolute sm:top-[5rem] top-[3rem] sm:left-0 left-[2rem] sm:w-fit w-[50%] sm:pl-[2rem] lg:ml-[18vw]"
            src={sm}
            alt=""
          />
          <img
            className="mt-[1rem] sm:w-auto w-full h-auto sm:h-[100vh] md:ml-[10vw] sm:ml-[10vw]"
            src={schoolmitra}
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-7 flex-col md:ml-[12vw] 2xl:ml-[18vw] md:wl-[5vw] pl-[2rem] mt-[5rem] w-[100vw]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl font-bold">
            COMPETITIONS
          </h1>
        </span>
        <div className="flex items-start md:gap-[7rem] gap-[2rem]">
          <div className="flex flex-col pt-2 mt-[2rem] gap-4">
            <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
              Eupheus Learning hosts several national and international events
              to promote the cause of better learning, effective teaching &
              wholesome improvement in the education systems across the world.
            </h1>
            <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
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
      <div className="flex md:gap-[7rem] gap-[2rem] items-center md:ml-[12vw] 2xl:ml-[18vw] md:wl-[5vw] pl-[2rem] mt-[5rem]">
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
            <h1 className="text-gray-700 mt-[3rem] lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
              Code2Win is a National-level Coding Competition for students from
              Grade 1 to 12. This gamified environment enables young minds to
              develop their competency and encourages them to ‘learn’,
              ‘participate’, ‘win scholarships’ and ‘get certificate’. Needless
              to mention that they can choose Coding as a life skill too.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex gap-1 flex-col md:ml-[12vw] 2xl:ml-[18vw] md:wl-[5vw] pl-[2rem] mt-[5rem]">
        <span>
          <img src={iso} className="md:w-[20vw] w-[30vw] h-auto" alt="" />
        </span>
        <div className="flex gap-[3rem] items-start">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl mt-[3rem] text-sm w-[35vw]">
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

      <div className="w-[100vw] my-[4rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] sm:h-[60vh] w-[80vw] h-[40vh]"
          src="https://www.youtube.com/embed/J2I1oTQ7p18"
        ></iframe>
      </div>

      <Form />

      <div className="w-[100vw] lg:px-[9rem] items-center px-[3rem] py-[2rem] flex justify-between bg-[#f5ab1d]">
        <div className=" flex flex-col gap-2">
          {/* <div
            className="flex flex-col gap-1"
            onClick={() =>
              navigate(
                "https://economictimes.indiatimes.com/tech/funding/eupheus-learning-acquires-classklap-for-19-million/articleshow/86396052.cms"
              )
            }
          >
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Eupheus Learning acquires ClassKlap for $19 million
            </span>
          </div> */}

          {/* <div className="flex flex-col gap-1">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Learn Coding In A Fun And
            </span>
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Interactive Manner!
            </span>
            <span className="md:text-base text-xs text-red-700">
              November 15, 2017
            </span>
          </div> */}
          <a href="https://www.vccircle.com/lightrock-india-funded-eupheus-learning-buys-saas-platform-schoolmitra">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              <span>Lightrock India-funded Eupheus Learning buys</span>
              <br />
              <span>SaaS platform SchoolMitra</span>
            </span>
          </a>
          <span className="md:text-base text-xs text-red-700">
            Feb 15, 2022
          </span>
          <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-acquires-classklap-for-19-million/articleshow/86396052.cms">
            <span className="lg:text-xl md:text-base sm:text-sm text-white">
              Eupheus Learning acquires ClassKlap for $19 million
            </span>
          </a>
          <span className="md:text-base text-xs text-red-700">
            Sep 21, 2021
          </span>
        </div>
        <img
          src={footerimg1}
          className="md:w-[30vw] w-[20vw] hidden sm:block h-[10vh] md:h-auto"
          alt=""
        />
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Home;
