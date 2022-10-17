import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PeopleSlider from "../Components/PeopleSlider";
import { Circle, LinkedIn } from "@mui/icons-material";
import robot from "../assets/oslite/school.png";
import firstSectionLighthouse from "../assets/first-section-lighthouse.a0be8772.svg";
import line1 from "../assets/oslite/6.png";
import line2 from "../assets/oslite/7.png";
import GoToTop from "../Components/Top";
import Banner_1 from "../assets/oslite/banner.png";
import grayBg from "../assets/grayBg.png";
import img1 from "../assets/oslite/1.png";
import img2 from "../assets/oslite/2.png";
import img3 from "../assets/oslite/3.png";
import img4 from "../assets/oslite/4.png";
import img5 from "../assets/oslite/5.png";
import img6 from "../assets/oslite/8.png";
import img7 from "../assets/oslite/9.png";
import img8 from "../assets/oslite/10.png";
import img9 from "../assets/oslite/11.png";
import img10 from "../assets/oslite/12.png";
import img11 from "../assets/oslite/13.png";
import img12 from "../assets/oslite/14.png";
import img13 from "../assets/oslite/15.png";
import img14 from "../assets/oslite/16.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Oslite() {
  gsap.registerPlugin(ScrollTrigger);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  // const ref = useRef(null);
  useEffect(() => {
    document.title = "OS Lite - Eupheus";
  }, []);

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"about"} />
      <div className="sm:h-[100vh] relative w-[100vw]  ">
        <img
          className="sm:h-[100vh] h-auto sm:mt-0 mt-[9rem] w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 md:mb-[30vh] sm:my-[4rem] w-[100vw] items-center my-[1rem]">
        <span className="text-red-700 font-extrabold text-base lg:text-2xl 2xl:text-4xl">
          FEATURES
        </span>

        <div className="grid md:grid-rows-1 md:grid-cols-5 md:gap-y-0 gap-y-16 grid-rows-5 grid-cols-1 justify-items-center w-[100vw]">
          <div className="md:w-[13rem] w-[15rem] relative h-auto">
            <img className="w-full h-full" src={img1} alt="" />
            <div className="flex flex-col w-full absolute md:top-[4.5rem] top-[6rem] gap-2">
              <span className="text-sm  w-full items-center md:pr-7 pr-10 flex flex-col">
                <span className="text-purple-700 font-semibold">CONTENT</span>{" "}
                <span className="text-purple-700 font-semibold">
                  MANAGEMENT SYSTEM
                </span>
              </span>
              <span className="text-xs font-semibold text-center w-full md:pr-8 pr-10 pl-2">
                Curriculum books, age-appropriate, board-mapped content and test
                generator
              </span>
            </div>
          </div>
          <div className="md:w-[13rem] w-[15rem] relative h-auto">
            <img className="w-full h-full" src={img2} alt="" />
            <div className="flex flex-col w-full absolute md:top-[4.5rem] top-[6rem] gap-2">
              <span className="text-sm w-full items-center md:pr-7 pr-10 flex flex-col">
                <span className="text-green-500 font-semibold">LEARNING</span>{" "}
                <span className="text-green-500 font-semibold">
                  MANAGEMENT SYSTEM
                </span>
              </span>
              <span className="text-xs font-semibold w-full text-center md:pr-8 pr-10 pl-2">
                Enabling seamless teaching-learning environment with Live
                Classes and online assessments — both subjective and objective
              </span>
            </div>
          </div>
          <div className="md:w-[13rem] w-[15rem] relative h-auto">
            <img className="w-full h-full" src={img3} alt="" />
            <div className="flex flex-col w-full absolute md:top-[4.5rem] top-[6rem] gap-2">
              <span className="text-sm w-full items-center md:pr-7 pr-10 flex flex-col">
                <span className="text-gray-600 font-semibold">ENTERPRISE</span>{" "}
                <span className="text-gray-600 font-semibold">
                  RESOURCE PLANNING
                </span>
              </span>
              <span className="text-xs font-semibold w-full md:pr-8 pr-10 text-center pl-2">
                To manage the day-to-day operations of the school effectively in
                hassle-free manner
              </span>
            </div>
          </div>
          <div className="md:w-[13rem] w-[15rem] relative h-auto">
            <img className="w-full h-full" src={img4} alt="" />
            <div className="flex flex-col w-full absolute md:top-[4.5rem] top-[6rem] gap-2">
              <span className="text-sm w-full items-center md:pr-7 pr-10 flex flex-col">
                <span className="text-blue-500 font-semibold">ROBUST</span>{" "}
                <span className="text-blue-500 font-semibold">
                  COMMUNICATION
                </span>
              </span>
              <span className="text-xs font-semibold w-full md:pr-8 pr-10 text-center pl-2">
                Robust communication between school administration, Teachers,
                Parents and Students on attendance, SMS/ App alerts, bulletin
                board and calendar
              </span>
            </div>
          </div>
          <div className="md:w-[13rem] w-[15rem] relative h-auto">
            <img className="w-full h-full" src={img5} alt="" />
            <div className="flex flex-col w-full absolute md:top-[4.5rem] top-[6rem] gap-2">
              <span className="text-sm w-full items-center md:pr-7 pr-10 flex flex-col">
                <span className="text-red-600 font-semibold">FINANCIAL</span>{" "}
                <span className="text-red-600 font-semibold">
                  MANAGEMENT SYSTEM
                </span>
              </span>
              <span className="text-xs font-semibold w-full md:pr-8 pr-10 text-center pl-2">
                Seamless Fees Collection with integrated payment gateways,
                streamlined with daily bookkeeping and inventory managemen
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col mt-[5rem] items-center w-[100vw] justify-center md:gap-[13rem] sm:gap-[9rem] gap-16">
        <img
          src={firstSectionLighthouse}
          className="w-[10rem] sm:w-[25vw] h-auto"
          alt=""
        />
        <img src={robot} className="w-[10rem] sm:w-[25vw] h-auto" alt="" />
      </div>
      <div className="flex flex-col gap-12 items-center w-[100vw] mt-[10rem]">
        <div className="w-full flex gap-2 justify-center">
          <div className="bg-red-700 px-4 py-2 text-gray-100 text-xs md:text-base font-semibold">
            Content Management System
          </div>
          <img
            className="md:w-[70%] w-[50%] h-auto hidden sm:block"
            src={line1}
            alt=""
          />
        </div>
        <div className="w-full sm:gap-0 gap-4 flex md:flex-row flex-col items-center justify-around">
          <img
            className="sm:w-[20rem] w-[10rem] object-cover"
            src={img6}
            alt=""
          />
          <div className="flex sm:w-[50%] w-[90%] px-4 flex-col text-sm sm:text-base md:text-xl sm:gap-3 gap-3">
            <span>
              Learning inside the classroom or at home made easy through this
              Platform. To provide a Hybrid Learning experience to Students and
              Teachers, SchoolMitra platform provides below repository/
              capability to school:
            </span>
            <ul>
              <li className="list-disc">
                <span className="font-bold">Pre-Loaded Digital content</span>{" "}
                for the subscribed course books including E-books, audio and
                video.
              </li>
              <li className="list-disc">
                <span className="font-bold">Test Generator:</span> Hundreds of
                pre- loaded questions across categories including MCQs, fill in
                the blanks, true & false, short answer questions and long answer
                questions, give shape to
                <span className="font-bold"> question papers</span> which can be
                easily downloaded by teachers and shared with students
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center w-[100vw] mt-[10rem]">
        <div className="w-full flex gap-2 justify-center">
          <img
            className="md:w-[70%] w-[50%] h-auto hidden sm:block"
            src={line2}
            alt=""
          />
          <div className="bg-red-700 px-4 py-2 text-gray-100 text-xs md:text-base font-semibold">
            Learning Management System
          </div>
        </div>
        <div className="w-full sm:gap-0 gap-4 flex md:flex-row flex-col items-center justify-around">
          <div className="flex sm:w-[50%] w-[90%] px-4 flex-col text-sm sm:text-base md:text-xl sm:gap-3 gap-3">
            <ul>
              <li className="list-disc">
                <span className="font-bold">Secure Live Class</span> management
                across platforms like Zoom, MS Teams or GoToMeeting.{" "}
                <span className="font-bold"> Automated attendance</span> for
                ease of tracking for teachers and principal
              </li>
              <li className="list-disc">
                <span className="font-bold">Online Assessments</span> including
                objective as well as subjective assessments.{" "}
                <span className="font-bold">
                  {" "}
                  Teachers are enabled to assess and remark on the submitted
                  answers sheets within the platform
                </span>
              </li>
            </ul>
          </div>
          <img
            className="sm:w-[20rem] w-[10rem] object-cover"
            src={img7}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center w-[100vw] mt-[10rem]">
        <div className="w-full flex gap-2 justify-center">
          <div className="bg-red-700 px-4 py-2 text-gray-100 text-xs md:text-base font-semibold">
            Enterprise Resource Planning
          </div>
          <img
            className="md:w-[70%] w-[50%] h-auto hidden sm:block"
            src={line1}
            alt=""
          />
        </div>
        <div className="w-full sm:gap-0 gap-4 flex md:flex-row flex-col items-center justify-around">
          <img
            className="sm:w-[20rem] w-[10rem] object-cover"
            src={img8}
            alt=""
          />
          <div className="flex sm:w-[50%] w-[90%] px-4 flex-col text-sm sm:text-base md:text-xl sm:gap-3 gap-3">
            <ol className="list-decimal font-bold">
              <li>School Management</li>
              <li>Student & Staff Profile Management</li>
              <li>
                Role Based Access:
                <ul className=" ml-2 font-normal">
                  <li>A. Director/ Principal Login</li>
                  <li>B. Teacher Login</li>
                  <li>C. Parent Login</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center w-[100vw] mt-[10rem]">
        <div className="w-full flex gap-2 justify-center">
          <img
            className="md:w-[70%] w-[50%] h-auto hidden sm:block"
            src={line2}
            alt=""
          />
          <div className="bg-red-700 px-4 py-2 text-gray-100 text-xs md:text-base font-semibold">
            Robust Communication Module
          </div>
        </div>
        <div className="w-full sm:gap-0 gap-4 flex md:flex-row flex-col items-center justify-around">
          <div className="flex sm:w-[50%] w-[90%] px-4 flex-col text-sm sm:text-base md:text-xl sm:gap-3 gap-3">
            <ol className="list-decimal font-bold">
              <li>
                Attendance Management
                <ul className=" ml-2 font-normal">
                  <li>A. Student Attendance</li>
                  <li>B. Staff Attendance</li>
                </ul>
              </li>
              <li>
                Alerts
                <ul className=" ml-2 font-normal">
                  <li>A. Group Alerts</li>
                  <li>B. Individual Alerts</li>
                  <li>C. SMS Groups</li>
                </ul>
              </li>
              <li>School Bulletin Board</li>
              <li>School Calendar</li>
              <li>School Album</li>
            </ol>
          </div>
          <img
            className="sm:w-[20rem] w-[10rem] object-cover"
            src={img9}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center w-[100vw] mt-[10rem]">
        <div className="w-full flex gap-2 justify-center">
          <div className="bg-red-700 px-4 py-2 text-gray-100 text-xs md:text-base font-semibold">
            Financial Management System
          </div>
          <img
            className="md:w-[70%] w-[50%] h-auto hidden sm:block"
            src={line1}
            alt=""
          />
        </div>
        <div className="w-full sm:gap-0 gap-4 flex md:flex-row flex-col items-center justify-around">
          <img
            className="sm:w-[20rem] w-[10rem] object-cover"
            src={img10}
            alt=""
          />
          <div className="flex sm:w-[50%] w-[90%] px-4 flex-col text-sm sm:text-base md:text-xl sm:gap-3 gap-3">
            <ol className="list-decimal font-bold">
              <li>
                Fees Management:{" "}
                <span className="font-normal">
                  Schedule and or customize fees, identify fines and
                  concessions, facilitate online fee collection via payment
                  gateway and generate detailed reports
                </span>
              </li>
              <li>Daily book-keeping</li>
              <li> Inventory management</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center mt-[7rem]">
        <div className="flex flex-col w-[80%] md:text-xl sm:text-lg text-base">
          <span className="px-3 ml-3 font-semibold py-1 bg-red-700 text-gray-100 rounded-t-lg w-fit">
            SETUP & ON-BOARDING
          </span>

          <ul className="px-6 py-4 w-full rounded-md bg-gray-100">
            <li className="font-semibold py-2">
              Our representatives are available for you for customized
              demonstration and discussion:
            </li>
            <li className="py-2">
              Once you agree to implement 21st Century School OS LITE platform
            </li>
            <li className="list-disc py-2">
              There’s an Agreement to be signed by both the parties
            </li>

            <li className="list-disc py-2">
              WhatsApp group will be created along with your school’s
              authorities for continuous communication and query resolution
            </li>
            <li className="list-disc py-2">
              We collect your school’s data in the prescribed excel format
            </li>
            <li className="list-disc py-2">
              Your school’s account set-up is completed within 72 hours
            </li>
            <li className="list-disc py-2">
              School’s admin team, principal and teachers are trained on the
              platform useability
            </li>
            <li className="list-disc py-2">
              Simple steps to onboard students and parents on the platform will
              be shared with the school
            </li>
            <li className="font-semibold list-disc py-2">Go LIVE !</li>
          </ul>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center mt-[7rem]">
        <div className="flex flex-col w-[80%] md:text-xl sm:text-lg text-base">
          <span className="px-3 ml-3 font-semibold py-1 bg-red-700 text-gray-100 rounded-t-lg w-fit">
            SUPPORT
          </span>

          <ul className="px-6 py-2 w-full rounded-md bg-gray-100">
            <li className="font-semibold py-2">
              We provide instant support via -
            </li>

            <li className="list-disc py-2">
              WhatsApp Groups -Dedicated whatsApp support for your school
            </li>

            <li className="list-disc py-2">
              Email / Phone - Schools can reach out to us for any issue
              escalation via email/ phone
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-[100vw] gap-10 justify-center my-[7rem]">
        <button className="px-2 md:text-xl sm:text-lg text-base font-semibold transition-all duration-200 ease-linear hover:shadow-2xl py-2 bg-red-700 rounded-xl text-gray-100">
          DOWNLOAD BROCHURE
        </button>
        <span className="md:text-3xl sm:text-xl text-sm text-black font-bold">
          MAKING LIFE SIMPLE FOR ALL STAKEHOLDERS
        </span>
      </div>
      <div className="w-[100vw] relative bg-yellow-500 h-[8rem]">
        <div className="absolute sm:-top-[2.3rem] -top-6 flex w-full justify-around items-start">
          <div className="flex flex-col gap-2 items-center">
            <img src={img11} className="sm:w-[5rem] w-[3rem] h-auto" alt="" />
            <span className="font-semibold text-center md:text-base text-xs">
              Principal/ <br /> School Management
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={img12} className="sm:w-[5rem] w-[3rem] h-auto" alt="" />
            <span className="font-semibold md:text-base text-xs">Teachers</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={img13} className="sm:w-[5rem] w-[3rem] h-auto" alt="" />
            <span className="font-semibold md:text-base text-xs">Parents</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={img14} className="sm:w-[5rem] w-[3rem] h-auto" alt="" />
            <span className="font-semibold md:text-base text-xs">Students</span>
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
}
