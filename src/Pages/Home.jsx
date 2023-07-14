import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
// import firstSectionSchool from "../assets/first-section-school.174ed857.svg";
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
// import trophy from "../assets/trophy.png";
// import code2win from "../assets/code2win.png";
import classK from "../assets/classclap.png";
// import play from "../assets/play.png";
// import laptop2 from "../assets/laptop2.png";
// import iso from "../assets/iso.png";
import sm from "../assets/sm.png";
import footerimg1 from "../assets/footerimg1.png";
import { Parallax } from "react-scroll-parallax";
import Slider from "../Components/Slider";
// import Form from "../Components/Form";
import { Tween, Reveal } from "react-gsap";
// import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import BasicButton from "../Components/Material/Button";
import instance from "../Instance";

const Home = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const timeout = useRef(null);
  const [mobile, setMobile] = useState(true);

  const changeDate = (date) => {
    let month;
    switch (date.split(" ")[0]) {
      case "Jan":
        month = "01";
        break;
      case "Feb":
        month = "02";
        break;
      case "Mar":
        month = "03";
        break;
      case "Apr":
        month = "04";
        break;
      case "May":
        month = "05";
        break;
      case "Jun":
        return (month = "06");
        break;
      case "Jul":
        month = "07";
        break;
      case "Aug":
        month = "08";
        break;
      case "Sep":
        month = "09";
        break;
      case "Oct":
        month = "10";
        break;
      case "Nov":
        month = "11";
        break;
      case "Dec":
        month = "12";
        break;

      default:
        break;
    }
    return `${date.split(" ")[1]}/${month}/${date.split(" ")[2]}`;
  };

  useLayoutEffect(() => {
    const getAllNews = async () => {
      const newsRes = await instance({
        url: "news",
        method: "GET",
      });
      let sortedNews = newsRes.data.sort(
        (a, b) =>
          new Date(...changeDate(b.date).split("/").reverse()) -
          new Date(...changeDate(a.date).split("/").reverse())
      );

      setNews(sortedNews.slice(0, 6));
    };
    getAllNews();
  }, []);

  useEffect(() => {
    document.title = "Eupheus Learning";
    setWidth();
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  const setWidth = () => {
    if (window.screen.width < 450) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const resetTime = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  return (
    <div
      className="bg-[#dbdbdb] w-[100%] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"home"} />
      <div className="sm:mt-0 mt-[9rem]">
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
            <span style={{ color: "black", fontWeight: "500" }}>
              DISTRIBUTION PLATFORM
            </span>
          </div>
        </Tween>
      </Reveal>

      <Reveal repeat>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
          <div className=" sm:mt-[4rem] mt-[1rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] lg:text-lg 2xl:text-2xl text-sm">
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
        <div className=" sm:mt-[8rem] mt-[3rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
          <span>EUPHEUS LEARNING THE LIGHTHOUSE OF</span>

          <span style={{ color: "black", fontWeight: "500" }}>
            TRANSFORMATION IN SCHOOLS
          </span>
        </div>
      </Parallax>

      <div className="sm:mt-[5rem] mt-[2rem] w-[100vw] flex md:gap-[7rem] sm:gap-[4rem] gap-4 items-center justify-center">
        <Parallax rotateY={[180, 570]}>
          <img
            src={section2schools}
            className="sm:w-[25vw] w-[40vw] h-auto object-cover"
            alt=""
          />
        </Parallax>
        <Parallax rotateY={[180, 570]}>
          <img
            src={firstSectionLighthouse}
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
          <div className=" sm:mt-[8rem] mt-[3rem] text-red-700 lg:w-[70vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] font-extrabold flex flex-col text-base lg:text-xl 2xl:text-4xl">
            <span>THE POWER OF THE WIDEST</span>
            <span style={{ color: "black", fontWeight: "500" }}>
              CURRICULUM CATALOGUE
            </span>
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
      <Parallax translateX={[100, -210]}>
        <img
          src={power}
          className="w-[50vw] h-auto mt-[2.5rem] ml-[25vw]"
          alt=""
        />
      </Parallax>
      <div className="flex gap-4 items-center w-[100vw] justify-center pl-6 mt-[2.5rem]">
        <h3 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm lg:w-[26vw] md:w-[45vw] w-[35vw]">
          Books are important friends of young learners. Now, also empower
          children beyond books and boards that can prepare them for the
          unprecedented challenges of tomorrow.
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
        <div className="flex sm:flex-row flex-col gap-4">
          <Parallax translateX={[-50, 50]}>
            <div
              className=" relative cursor-pointer"
              onClick={() => navigate("/curriculum")}
            >
              <img
                src={card}
                className="sm:w-[22.3rem] w-[13rem] h-auto"
                alt=""
              />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[2rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl md:text-6xl sm:text-xl text-sm">
                  CURRICULAR CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] h-auto sm:w-[15rem] w-[10rem] pr-2 ">
                  Widest catalogue of course book solutions and learning aids
                  for K-12, mapped to CBSE and ICSE boards. Most updated with
                  NEP 2020 mandates.
                  <br />
                  India’s First “personalised remedial solutions” for students
                  now available.
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax translateX={[0, 0]}>
            <div
              className=" relative cursor-pointer"
              onClick={() => navigate("/digital")}
            >
              <img
                src={card}
                className="sm:w-[22.3rem] w-[13rem] h-auto"
                alt=""
              />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[2rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl md:text-6xl sm:text-4xl text-sm">
                  SUPPLEMENTAL CONTENT
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] sm:w-[15rem] w-[10rem]">
                  Best global content with tech promoting Kinaesthetic Learning,
                  Reading Enhancement, STEM/ STEAM, English Language Learning
                  and Assessment, Digital Library and Competitions. Now Schools
                  have a one-stop-solution.
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax translateX={[50, -50]}>
            <div className=" relative cursor-pointer">
              <img
                src={card}
                className="sm:w-[22.3rem] w-[13rem] h-auto"
                alt=""
              />
              <div className="absolute top-0 flex flex-col sm:gap-3 gap-1 sm:pt-[5rem] pt-[2rem] sm:pl-[2rem] pl-[1rem]">
                <div className="text-yellow-500 font-bold lg:text-2xl md:text-6xl sm:text-xl text-sm">
                  21st Century School OS
                </div>
                <div className="text-gray-700 sm:text-xl text-xs md:w-[17rem] h-auto sm:w-[15rem] w-[10rem] pr-2 ">
                  Unique School operating system offering Content, Learning
                  Management System and ERP on a single sign-on. A powerful tool
                  for Schools to Implement key mandates of NEP 2020
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
      <div className="flex gap-4 flex-col w-fit items-end md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl font-bold pr-2">
            Personalized Remedial Solutions
          </h1>
          <h1 className="text-black-500 text-base lg:text-xl 2xl:text-4xl font-semibold text-right pr-2">
            Because No Two Students Are Alike
          </h1>
        </span>
        {mobile ? (
          <div className="flex flex-col md:gap-[7rem] gap-2 items-start">
            <Parallax translateX={[-50, 20]}>
              <div className=" relative">
                <img
                  src={laptop}
                  className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={classK}
                  className=" absolute -top-3 sm:w-[40%] w-[60%] sm:-left-0 -left-[4rem] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm pr-2 w-[90vw]">
                ClassKlap offers the NEP-based curriculum, seamless schooling,
                and various programs to make schools and students future-ready.
                Embrace the new-age learning to gain an edge in the future.
              </h1>
              <a href="https://www.classklap.com/">
                <BasicButton text={"know More"} bgColor={"rgb(185 28 28)"} />
              </a>
            </div>
            s
          </div>
        ) : (
          <div className="flex md:gap-[7rem] gap-[2rem] items-center">
            <Parallax translateX={[-50, 20]}>
              <div className=" relative">
                <img
                  src={laptop}
                  className="w-[43vw] h-[40vh] sm:w-[25vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={classK}
                  className=" absolute -top-8 w-[40%] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
                ClassKlap offers the NEP-based curriculum, seamless schooling,
                and various programs to make schools and students future-ready.
                Embrace the new-age learning to gain an edge in the future.
              </h1>
              <a href="https://www.classklap.com/">
                <BasicButton text={"know More"} bgColor={"rgb(185 28 28)"} />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-4 flex-col md:ml-[12vw] md:wl-[5vw] 2xl:ml-[18vw] pl-[2rem] mt-[5rem]">
        <span>
          <h1 className=" text-red-700 text-base lg:text-xl 2xl:text-4xl font-bold">
            21st Century School OS
          </h1>
          <h1 className="text-black-500 text-base lg:text-xl 2xl:text-4xl font-semibold">
            Unique and Single Signon School Management Software
          </h1>
        </span>
        {mobile ? (
          <div className="flex flex-col md:gap-[7rem] gap-2 items-centersssssss">
            <Parallax translateX={[100, -130]}>
              <div className=" relative">
                <img
                  src={schoolmitra}
                  className="w-full h-[40vh] sm:w-[35vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={sm}
                  className=" absolute top-0 sm:w-[40%] w-[31vw] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[90vw] pr-2">
                Making automation and digitalization of Schools easy. The 21st
                Century School OS integrates Content, LMS (learning management
                system) and ERP (enterprise resource planning) on a single
                sign-on, benefitting all stakeholders of a school alike –
                Principals, Teachers, Parents and Students. A unique and
                affordable solution from SchoolMitra, our acquired company.
              </h1>
              <a href="https://www.schoolmitra.com/">
                <BasicButton text={"Know More"} bgColor={"rgb(185 28 28)"} />
              </a>
            </div>
          </div>
        ) : (
          <div className="flex md:gap-[7rem] gap-[2rem] items-center">
            <div className="flex flex-col gap-2 items-end">
              <h1 className="text-gray-700 lg:text-lg 2xl:text-2xl text-sm w-[35vw]">
                Making automation and digitalization of Schools easy. The 21st
                Century School OS integrates Content, LMS (learning management
                system) and ERP (enterprise resource planning) on a single
                sign-on, benefitting all stakeholders of a school alike –
                Principals, Teachers, Parents and Students. A unique and
                affordable solution from SchoolMitra, our acquired company.
              </h1>
              <a href="https://www.schoolmitra.com/">
                <BasicButton text={"Know More"} bgColor={"rgb(185 28 28)"} />
              </a>
            </div>
            <Parallax translateX={[100, -115]}>
              <div className=" relative">
                <img
                  src={schoolmitra}
                  className="w-[43vw] h-[40vh] sm:w-[35vw] sm:h-auto"
                  alt=""
                />
                <img
                  src={sm}
                  className=" absolute top-0 w-[40%] h-auto"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
        )}
      </div>

      <div className="w-[100vw] my-[4rem] flex justify-center items-center">
        <iframe
          className="sm:w-[60vw] sm:h-[60vh] w-[80vw] h-[40vh]"
          src="https://www.youtube.com/embed/VRdUjcdI8-Y"
        ></iframe>
      </div>

      {/* <Form /> */}

      <div className="w-[100vw] items-center px-[2vw] py-[2rem] grid grid-rows-2 grid-cols-3 gap-[2rem] bg-[#f5ab1d]">
        <span className="row-span-2 col-span-3 pl-4 text-gray-100 underline text-xl">
          Latest From Eupheus Learning
        </span>

        <div className="grid grid-cols-2 grid-rows-3 sm:col-span-2 col-span-3 gap-3 w-full">
          {news.map((item) => {
            return (
              <div className="flex w-full shadow-2xl p-4 rounded-md flex-col gap-2">
                <a href={item.link} target="_blank">
                  <span className=" sm:text-sm text-xs text-white">
                    <span>{item.headline}</span>
                  </span>
                </a>
                <span className="md:text-base text-xs text-red-700">
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>
        <img
          src={footerimg1}
          className="sm:block hidden place-self-center"
          alt=""
        />
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Home;
