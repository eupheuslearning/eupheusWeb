import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import class1 from "../assets/class1.png";
import img1 from "../assets/eventAsset1.png";
import img2 from "../assets/eventAsset2.png";
import { Reveal, Tween } from "react-gsap";

export default function Code2Win() {
  useEffect(() => {
    document.title = "Competitions - Eupheus";
  }, []);
  return (
    <>
      <div
        className="bg-[#dbdbdb] overflow-hidden"
        style={{ backgroundImage: `url(${grayBg})` }}
      >
        <Navbar highlight={"events"} />

        <div className="mt-[10rem] mb-[1rem] flex items-start gap-8 relative">
          <div>
            <div className="text-red-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-5xl text-base">
              <span className="font-bold ">GAMIFIED WAY OF</span>
              <span className="font-extrabold ">LEARNING TO CODE</span>
            </div>

            <div className=" mt-[2rem] text-black-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] flex flex-col md:text-4xl text-base">
              <span className="font-bold ">CODE2WIN by ROBOGARDEN</span>
              <span className=" ">National Coding Competition</span>
            </div>

            <div className=" mt-[1rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              Code2Win is a National-level Coding Competition for
              <br />
              students from Grade 1 to 12. This gamified environment
              <br />
              enables young minds to develop their competency and
              <br />
              encourages them to ‘learn’, ‘participate’, ‘win scholarships’
              <br />
              and ‘get certificate’. Needless to mention that they can
              <br />
              choose Coding as a life skill too.
            </div>
          </div>
          <img
            src={img1}
            className="w-[20vw] h-auto object-cover absolute sm:-top-[6rem] -top-[4rem] lg:right-[30vw] md:right-[15vw] right-[25vw]"
            alt=""
          />
          <img
            src={img2}
            className="w-[25vw] h-auto object-cover sm:mr-0 mr-8"
            alt=""
          />
        </div>
        <div className="w-[100vw] my-[2rem] flex justify-center items-center">
          <iframe
            className="sm:w-[60vw] w-[90vw] sm:h-[60vh] h-[30vh] shadow-3xl"
            src="https://www.youtube.com/embed/xK7cPVGKajQ"
          ></iframe>
        </div>

        <Reveal repeat>
          <Tween
            from={{ opacity: 0, transform: "translate3d(0, 100px, 0)" }}
            to={{ opacity: 1, transform: "translate3d(0, 0px, 0)" }}
            ease="back.out(1.4)"
          >
            <div className="flex md:flex-row flex-col justify-around w-full">
              <div className="sm:my-[5rem] md:w-[30%] w-full">
                <div className="flex flex-col gap-4 items-center justify-center">
                  {/* <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              <div className=" sm:my-[3rem] my-[1rem] text-black-700 lg:w-[50vw] md:w-[70vw]  flex flex-col md:text-4xl text-xl">
                <span className="font-bold ">FOR GRADES 1-4</span>
              </div>
            </div> */}
                  <span className="font-bold text-gray-700 md:text-4xl text-xl">
                    FOR GRADES 1-4
                  </span>

                  <div className="flex justify-center">
                    <img src={class1} className="h-[40vh] w-full" alt="" />
                  </div>
                </div>
              </div>
              <div className="sm:my-[5rem] md:w-[30%] w-full">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <span className="font-bold text-gray-700 md:text-4xl text-xl">
                    FOR GRADES 5-8
                  </span>
                  <div className="flex justify-center">
                    <img src={java} className="w-full h-[40vh]" alt="" />
                  </div>
                  {/* <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base"> */}
                  {/* <div className=" sm:my-[3rem] my-[1rem] text-black-700 lg:w-[50vw] md:w-[70vw]  flex flex-col md:text-4xl text-xl">
                <span className="font-bold ">FOR GRADES 5-8</span>
              </div> */}
                  {/* Game-based course in which missions
              <br />
              are achieved by a program written by
              <br />
              Blocks. While preparing for a birthday
              <br />
              party, students will learn repeat loop
              <br />
              and Robo sensors of colors and text. */}
                  {/* </div> */}
                </div>
              </div>
              <div className="sm:my-[5rem] my-[1rem] md:w-[30%] w-full">
                <div className="flex flex-col gap-4 items-center justify-center">
                  {/* <div className=" mt-[2.5rem] text-gray-700 lg:w-[50vw] md:w-[70vw] md:ml-[12vw] ml-[5vw] md:text-2xl text-base">
              <div className=" sm:my-[3rem] my-[1rem] text-black-700 lg:w-[50vw] md:w-[70vw]  flex flex-col md:text-4xl text-xl">
                <span className="font-bold ">FOR GRADES 9-12</span>
              </div>
            </div> */}
                  <span className="font-bold text-gray-700 md:text-4xl text-xl">
                    FOR GRADES 9-12
                  </span>

                  <div className="flex justify-center">
                    <img src={python} className="w-full h-[40vh]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Tween>
        </Reveal>
        <div className="w-full flex flex-col gap-4 items-start pl-[5rem] my-[4rem]">
          <h1 className="text-red-700 font-bold sm:text-4xl text-xl">
            Features Of The Program
          </h1>

          <ol className="list-disc pl-[2rem] sm:text-2xl text-base">
            <li>1 Hour of tutor based online orientation session</li>
            <li>
              Access to 16 hrs of self learning module on Coding based on grade
              of the student
            </li>
          </ol>
        </div>

        <div className="w-full flex flex-col gap-4 items-start pl-[5rem] my-[4rem]">
          <h1 className="text-red-700 font-bold sm:text-4xl text-xl">
            Code2Win
          </h1>
          <h1 className="text-red-700 font-bold sm:text-3xl text-xl">
            Features of the program:
          </h1>

          <ol className="list-disc pl-[2rem] sm:text-2xl text-base">
            <li>1 Hour of tutor based online orientation session</li>
            <li>
              Access to 16 hrs of self learning module on Coding based on grade
              of the student
            </li>
            <li>1 Hour of doubt clearing online session </li>
            <li>
              Exciting Gifts for students to encourage them to complete their
              assigned journeys
            </li>
          </ol>
          {/* <h1 className="font-semibold sm:text-4xl text-xl">
            *Contact your school to Register for “Learn2code - Free 17 hrs
            Program on Coding“
          </h1> */}
        </div>

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}
