import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
// import { useNavigate } from "react-router-dom";
// images
import news1 from "../assets/news/news/news1.png";
import news2 from "../assets/news/news/news2.png";
import news3 from "../assets/news/news/news3.png";
import news4 from "../assets/news/news/news4.png";
import news5 from "../assets/news/news/news5.png";

const News = () => {
  useEffect(() => {
    document.title = "News - Eupheus";
  }, []);

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] py-[3rem] flex flex-col gap-[2rem] sm:px-[3rem] px-2 items-center justify-center sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
        <div className="px-[2rem] shadow-xl hover:shadow-2xl transition-all duration-200 ease-linear flex w-full sm:flex-row flex-col sm:gap-[3rem] gap-3 bg-gray-100 py-[1.5rem] rounded-md">
          <img
            src={news1}
            className="sm:w-1/3 w-full h-auto rounded-md"
            alt=""
          />
          <div className="flex flex-col gap-3 items-end justify-start">
            <span
              className="text-red-800 font-semibold sm:text-2xl overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
              }}
            >
              Eupheus Learning signs MoU with Varthana to make school financing
              and 21st century education solutions accessible to more schools in
              India
            </span>
            <span className="text-sm font-semibold text-gray-500 w-full flex justify-start">
              Jan 10, 2022
            </span>
            <span
              className="text-gray-700 font-semibold sm:text-lg overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              Eupheus Learning, India’s largest school-focused distribution
              platform with a reach of 20,000 schools, has signed a Memorandum
              of Understanding (MoU) with Varthana Finance Private Ltd., India’s
              largest education-focused non-bank financial company (NBFC). Both
              companies share a common vision to democratize access to quality
              education and learning aids.
            </span>
            <a href="https://news.easyshiksha.com/eupheus-learning-signs-mou-with-varthana-to-make-school-financing-and-21st-century-education-solutions-accessible-to-more-schools-in-india/">
              <button className="bg-red-800 px-3 py-1 text-gray-100 rounded-md transition-all duration-200 ease-linear hover:shadow-lg active:scale-95">
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className="px-[2rem] shadow-xl hover:shadow-2xl transition-all duration-200 ease-linear flex w-full sm:flex-row flex-col sm:gap-[3rem] gap-3 bg-gray-100 py-[1.5rem] rounded-md">
          <img
            src={news2}
            className="sm:w-1/3 w-full h-auto rounded-md"
            alt=""
          />
          <div className="flex flex-col gap-3 items-end justify-start">
            <span
              className="text-red-800 font-semibold sm:text-2xl overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
              }}
            >
              Sarvesh Srivastava, Co-founder & MD at Eupheus Learning, on
              expectations from Education sector
            </span>
            <span className="text-sm font-semibold text-gray-500 w-full flex justify-start">
              Jan 29, 2022
            </span>
            <span
              className="text-gray-700 font-semibold sm:text-lg overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              "While the core educational services are fully exempt from GST,
              the definition of educational services is limited to services
              provided by educational institutions to its students, faculty and
              staff. Our expectation is to review this and make this more
              inclusive for entities catering to educational services as well.
              The edtech companies should get support on the GST so that these
              solutions can be made more affordable and used by a much larger
              student base democratizing access to quality education.
              Furthermore, to support adoption of technology, we would expect
              the government to review special incentives/ schemes to enhance
              the ecosystem."
            </span>
            <a href="https://indianexpress.com/article/business/budget/union-budget-2022-expectations-live-updates-what-market-experts-companies-industry-bodies-india-inc-economists-expect-7738854/">
              <button className="bg-red-800 px-3 py-1 text-gray-100 rounded-md transition-all duration-200 ease-linear hover:shadow-lg active:scale-95">
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className="px-[2rem] shadow-xl hover:shadow-2xl transition-all duration-200 ease-linear flex w-full sm:flex-row flex-col sm:gap-[3rem] gap-3 bg-gray-100 py-[1.5rem] rounded-md">
          <img
            src={news3}
            className="sm:w-1/3 w-full h-auto rounded-md"
            alt=""
          />
          <div className="flex flex-col w-full gap-3 items-end justify-start">
            <span
              className="text-red-800 w-full flex justify-start font-semibold sm:text-2xl overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
              }}
            >
              Eupheus Learning lands $4.1 million in funding
            </span>
            <span className="text-sm font-semibold text-gray-500 w-full flex justify-start">
              Feb 15, 2021
            </span>
            <span
              className="text-gray-700 font-semibold sm:text-lg overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              Eupheus Learning, a business-to-business education technology
              company, has raised $4.1 million in Series B funding led by
              Kuwait-based United Education Company (UEC), as it looks to expand
              its presence into the West Asia market. The round also saw
              participation of AI Rayan Holding Company in which UEC holds a
              majority stake. The Delhi-based startup said it will utilise the
              capital to grow its business organically in India with a focus on
              supplemental at-home learning solutions
            </span>
            <a href="https://economictimes.indiatimes.com/tech/funding/eupheus-learning-lands-4-1-million-in-funding/articleshow/80920694.cms">
              <button className="bg-red-800 px-3 py-1 text-gray-100 rounded-md transition-all duration-200 ease-linear hover:shadow-lg active:scale-95">
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className="px-[2rem] shadow-xl hover:shadow-2xl transition-all duration-200 ease-linear flex w-full sm:flex-row flex-col sm:gap-[3rem] gap-3 bg-gray-100 py-[1.5rem] rounded-md">
          <img
            src={news4}
            className="sm:w-1/3 w-full h-auto rounded-md"
            alt=""
          />
          <div className="flex flex-col gap-3 items-end justify-start">
            <span
              className="text-red-800 font-semibold sm:text-2xl overflow-hidden w-full flex justify-start"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
              }}
            >
              When coding is child's play
            </span>
            <span className="text-sm font-semibold text-gray-500 w-full flex justify-start">
              Jan 12, 2020
            </span>
            <span
              className="text-gray-700 font-semibold sm:text-lg overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              Madhav Agnihotri is like any other nine-year-old his age. He loves
              to read, play outdoors and watch cartoons. And yet, when he sits
              in front of his laptop, his mind is busy juggling codes and
              fingers are carefully stringing instructions together. The class 3
              student of DPS, Noida started coding just around the same time
              when he started framing sentences into paragraphs. "I love coding
              because it allows me to create something," says Agnihotri. A few
              months back he created a stress-buster app when he saw his elder
              sister buckling under the pressure of studies.
            </span>
            <a href="https://www.indiatoday.in/mail-today/story/when-coding-is-child-s-play-1636164-2020-01-12">
              <button className="bg-red-800 px-3 py-1 text-gray-100 rounded-md transition-all duration-200 ease-linear hover:shadow-lg active:scale-95">
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className="px-[2rem] shadow-xl hover:shadow-2xl transition-all duration-200 ease-linear flex w-full sm:flex-row flex-col sm:gap-[3rem] gap-3 bg-gray-100 py-[1.5rem] rounded-md">
          <img
            src={news5}
            className="sm:w-1/3 w-full h-auto rounded-md"
            alt=""
          />
          <div className="flex flex-col gap-3 items-end justify-start">
            <span
              className="text-red-800 font-semibold sm:text-2xl overflow-hidden w-full flex justify-start"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
              }}
            >
              Eupheus Learning raises USD 4.3 mn
            </span>
            <span className="text-sm font-semibold text-gray-500 w-full flex justify-start">
              Jan 23, 2020
            </span>
            <span
              className="text-gray-700 font-semibold sm:text-lg overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              The funding round, a mix of equity and venture debt, was led by
              Yuj Ventures and saw participation from existing investor Sixth
              Sense Ventures. "Eupheus will use the new capital to increase
              nationwide presence, develop new product offerings, and expand the
              team. With this fund raise, Eupheus will also commence operations
              in the Middle East and drive international expansion in other
              markets," a statement said.
            </span>
            <a href="https://www.businessinsider.in/business/news/eupheus-learning-raises-usd-4-3-mn/articleshow/73559381.cms">
              <button className="bg-red-800 px-3 py-1 text-gray-100 rounded-md transition-all duration-200 ease-linear hover:shadow-lg active:scale-95">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default News;
