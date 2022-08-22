import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
// import { useNavigate } from "react-router-dom";
// images
import BasicButton from "../Components/Material/Button";
import axios from "axios";
import BasicPagination from "../Components/Material/Pagination";

const News = () => {
  const [news, setNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [count, setCount] = useState(null);

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
    document.title = "News - Eupheus";
    const getAllNews = async () => {
      const newsRes = await axios.get("http://localhost:4000/news");
      let sortedNews = newsRes.data.sort(
        (a, b) =>
          new Date(...changeDate(b.date).split("/").reverse()) -
          new Date(...changeDate(a.date).split("/").reverse())
      );
      // console.log(changeDate("Feb 29 2001"));
      // console.log(sortedNews);
      setAllNews(sortedNews);
      setNews(sortedNews.slice(0, 4));
      setCount(Math.ceil(newsRes.data.length / 4));
    };
    getAllNews();
  }, []);

  const handleChangePagination = (num) => {
    setNews(allNews.slice(num * 4 - 4, num * 4));
  };

  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] py-[3rem] flex flex-col gap-[2rem] sm:px-[3rem] px-2 items-center justify-center sm:pt-8 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
        {news.map((item) => {
          return (
            <div
              key={item.id}
              className="px-[2rem] shadow-xl hover:shadow-2xl transition-all duration-200 ease-linear flex w-full sm:flex-row flex-col sm:gap-[3rem] gap-3 bg-gray-100 py-[1.5rem] rounded-md"
            >
              <img
                src={item.imgUrl}
                className="sm:w-1/3 w-full h-auto rounded-md"
                alt=""
              />
              <div className="flex flex-col gap-3 items-start justify-start">
                <span
                  className="text-red-800 font-semibold sm:text-2xl overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "2",
                  }}
                >
                  {item.headline}
                </span>
                <span className="text-sm font-semibold text-gray-500 w-full flex justify-start">
                  {item.date}
                </span>
                <span
                  className="text-gray-700 font-semibold sm:text-lg overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: "3",
                  }}
                >
                  {item.desc}
                </span>
                <a href={item.link} target="_blank">
                  <BasicButton
                    text={"Read More"}
                    bgColor={"rgb(153, 27, 27)"}
                  />
                </a>
              </div>
            </div>
          );
        })}

        <div className="my-4">
          <BasicPagination
            count={count}
            handleChangePagination={handleChangePagination}
          />
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
