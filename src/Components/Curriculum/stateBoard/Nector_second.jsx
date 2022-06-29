import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/stateBoard/nector/3.png";
import book2 from "../../../assets/curriculum/stateBoard/nector/4.png";
import englishvibes from "../../../assets/curriculum/stateBoard/nector/Curriculum Catalogue_2021-22_Page_70.jpg";

const Nector_second = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-8/12 w-full">
            <span className="text-[#5f864b] font-semibold">
              Wow! World Within Worlds
            </span>
            &nbsp; , an integrated term book series for classes 1 to 5, has been
            designed in accordance with the recommendations of the latest
            educational policy that suggests that learning in the primary school
            segment should be divided in terms or semesters so that students
            carry lighter school bags to class. The aim of Nectar is to provide
            enjoyable learning without mental and physical stress and eliminate
            the need for separate textbooks to be carried daily from home to
            school and back. Nectar has a child-centred approach that presents
            concepts in a simplified and creative manner. <br />
            This term book series is a set of three books for three terms for
            classes 1 to 5. It integrates English, Mathematics, and
            Environmental Studies for levels 1 and 2 and English, Mathematics,
            Social Studies, and Science for levels 3 to 5
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#77ae5a] py-2">
            <table className="">
              <tr>
                <th className="text-white flex justify-start">Title</th>
                <th className="text-white">Price</th>
              </tr>
              <tr>
                <td className="text-center">Book 1 Semester 1 </td>
                <td className="text-center">470</td>
              </tr>
              <tr>
                <td className="text-center">Book 1 Semester 2 </td>
                <td className="text-center">470</td>
              </tr>
              <tr>
                <td className="text-center">Book 2 Semester 1 </td>
                <td className="text-center">500</td>
              </tr>
              <tr>
                <td className="text-center">Book 2 Semester 2 </td>
                <td className="text-center">500</td>
              </tr>
              <tr>
                <td className="text-center">Book 3 Semester 1 </td>
                <td className="text-center">520</td>
              </tr>
              <tr>
                <td className="text-center">Book 3 Semester 2 </td>
                <td className="text-center">520</td>
              </tr>
              <tr>
                <td className="text-center">Book 4 Semester 1 </td>
                <td className="text-center">530</td>
              </tr>
              <tr>
                <td className="text-center">Book 4 Semester 2 </td>
                <td className="text-center">530</td>
              </tr>
              <tr>
                <td className="text-center">Book 5 Semester 1 </td>
                <td className="text-center">540</td>
              </tr>
              <tr>
                <td className="text-center">Book 5 Semester 2 </td>
                <td className="text-center">540</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-6/12 w-full">
            <span className="px-3 ml-3 py-1 bg-[#5f864b] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <div className="flex flex-row  items-center w-full rounded justify-center">
              <div className="bg-[#77ae5a] w-full sm:flex-col rounded-lg">
                <ul className="px-2 py-1    text-black ">
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;{" "}
                    <b>Chapter Insights: </b> lists learning objectives at a
                    glance
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;{" "}
                    <b> Getting Ahead</b>
                    interesting questions or activities to recap learners’
                    previous knowledge and draw them further into the lesson
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b> Content:</b> carefully graded and visually appealing
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Quick Scan:</b> helps learners to recall and evaluate the
                    learning acquired
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Activities:</b> : develop cognitive and psychomotor
                    skills of the learners
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>More to Know: </b>presents nuggets of interesting
                    information
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Let’s Sum up:</b> quick revision notes that link to
                    learning objectives
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Practice Time:</b>assess learner’s comprehension and
                    application skills
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>LPicture Talk:</b> develops visual interpretation skills
                    in levels 1 and 2
                  </li>

                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>HOTS:</b> research-based questions to develop critical
                    thinking
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Projects:</b>activities to develop creative skills
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Life Skills</b>develop qualities and skills based on
                    multiple intelligences and 21st century skills
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Multiple Intelligences icons</b> provided to identify the
                    intelligences
                  </li>
                  <li>
                    <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                    <b>Test papers:</b> comprehensive revision and evaluation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:w-4/12 w-full">
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#5f864b] rounded-t-lg w-fit text-white">
                TEACHERS’ RESOURCE
              </span>
              <div className="flex flex-row  items-center w-full rounded justify-center">
                <div className="bg-[#77ae5a] w-full sm:flex-col rounded-lg">
                  <div className="px-2 py-1    text-black ">
                    <span>
                      Teachers’ manual with exercises and lesson plans
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 flex flex-col w-full">
              <span className="px-3 ml-3 py-1 bg-[#5f864b] rounded-t-lg w-fit text-white">
                Digital Resource
              </span>
              <div className="bg-[#77ae5a] w-full sm:flex-col rounded-lg">
                <div className="px-2 py-1    text-black ">
                  <span>
                    Interactive e-books will supplement each chapter in the book
                    with appealing animations and digital activities and provide
                    an interactive experience.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="m-3 flex flex-col w-full">
                <img src={book1} className="h-auto rounded-lg" alt="" />
              </div>
              <div className="m-3 flex flex-col w-full">
                <img src={book2} className="h-auto rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nector_second;
