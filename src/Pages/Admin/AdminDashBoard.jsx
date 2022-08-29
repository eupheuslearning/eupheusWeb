import React, { useState } from "react";
import logo from "../../assets/logo.png";
import BasicButton from "../../Components/Material/Button";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { authActions } from "../../Store/auth";
import { useNavigate } from "react-router-dom";
import useAdminInfo from "../../Components/CustomHooks/useAdminInfo";
import { useDispatch } from "react-redux";
import axios from "axios";
import Snackbars from "../../Components/Material/SnackBar";
import { useRef, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import instance from "../../Instance";
window.Buffer = window.Buffer || require("buffer").Buffer;

const AdminDashBoard = () => {
  const userinfo = useAdminInfo();
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(false);
  const snackbarRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useLayoutEffect(() => {
    const getAllNews = async () => {
      // const newsRes = await axios.get("http://localhost:4000/news");
      const newsRes = await instance({
        url: "news",
        method: "get",
      });
      setNews(newsRes.data);
    };
    getAllNews();
  }, []);

  const deleteNews = async (id) => {
    if (!Cookies.get("admin")) {
      return navigate("/admin/login");
    }
    setOpen(true);
    try {
      // const res = await axios.delete(
      //   `http://localhost:4000/news/${id.toString()}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${Cookies.get("admin")}`,
      //     },
      //   }
      // );
      const res = await instance({
        url: `news/${id.toString()}`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${Cookies.get("admin")}`,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setErr(true);
    }

    setOpen(false);
    snackbarRef.current.openSnackbar();
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/admin/login");
  };

  return (
    <>
      <Snackbars
        error={err}
        ref={snackbarRef}
        errMessage={err ? "Something Went Wrong" : "News Deleted Successful"}
      />
      <div className="w-full relative min-h-[100vh] max-h-fit bg-[#f5ab1d] flex justify-center items-center">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="absolute top-0 md:w-auto z-50 cursor-pointer md:h-[4rem] w-[10rem] h-[3rem] left-4"
          alt=""
        />
        <div className="flex sm:flex-row z-50 flex-col sm:items-center items-end gap-3 absolute top-2 right-4">
          <h1 className=" font-semibold text-xl">
            Hello, {userinfo && userinfo.username}
          </h1>
          <div onClick={handleLogout}>
            <BasicButton text={"Logout"} bgColor={"rgb(153 27 27)"} />
          </div>
        </div>

        <div className="w-full flex relative gap-4 justify-center items-center">
          <div
            onClick={() => navigate("/admin/create/news")}
            className="absolute top-[6rem] right-4"
          >
            <BasicButton text={"Create News"} bgColor={"rgb(152, 27, 27)"} />
          </div>

          <div
            className={`flex flex-col transition-all sm:my-[4rem] my-[7rem] duration-300 ease-linear sm:w-[70%] w-full rounded-md  2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] sm:px-[3rem] px-3 pb-8 sm:pt-8 pt-8 `}
          >
            {news.map((item) => {
              return (
                <div
                  key={item.id}
                  className="sm:px-[2rem] px-4 shadow-xl items-center hover:shadow-2xl transition-all duration-200 ease-linear flex flex-row w-full sm:gap-[1rem] gap-3 bg-gray-100 sm:py-[1.5rem] py-4 rounded-md"
                >
                  <img
                    src={item.imgUrl}
                    className="w-1/3 h-auto rounded-md"
                    alt=""
                  />
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <span
                      className="text-red-800 font-semibold sm:text-lg overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                      }}
                    >
                      {item.headline}
                    </span>
                    {/* <div onClick={() => deleteNews(item.id)}>
                      <BasicButton
                        text={"Delete"}
                        bgColor={"rgb(157, 27, 27)"}
                      />
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
