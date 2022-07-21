import React from "react";
import dashBorder from "../assets/dash-border.png";
import board from "../assets/board.png";
import lgDashBorder from "../assets/dash-border-lg.png";
import submit from "../assets/submit.png";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import Date from "../Components/Date";

const AdminCreateNews = () => {
  const formik = useFormik({
    initialValues: {
      headline: "",
      desc: "",
      link: "",
      imageUrl: "",
      Date: "date",
    },
    validate: () => {
      const errors = {};
      // email
      if (!formik.values.headline) {
        errors.headline = "Required";
      }
      // password
      if (!formik.values.desc) {
        errors.desc = "Required";
      }
      if (!formik.values.link) {
        errors.link = "Required";
      }
      if (!formik.values.imageUrl) {
        errors.imageUrl = "Required";
      }
      if (!formik.values.Date) {
        errors.Date = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      console.log(values);
      //   const res = await axios.post("http://localhost:3000/news", values);
      //   if (res.data.err) {
      //     return console.log(res.data.err);
      //   }
      //   console.log(res.data);
    },
  });

  const setDate = (date) => {
    formik.values.Date = date;
  };

  return (
    <div className="w-full min-h-[100vh] max-h-fit bg-[#f5ab1d] flex justify-center items-center">
      <div className="bg-white rounded-r-3xl drop-shadow-2xl sm:px-[3rem] px-[1rem] 2xl:py-[5rem] lg:py-[3rem] sm:py-[2rem] py-[2rem] my-[3rem]">
        <form
          className="flex flex-col gap-[3rem]"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex sm:gap-[4rem] gap-4 items-center">
            <div className="flex md:grid md:grid-rows-2 md:grid-cols-2  flex-col gap-4">
              <div className="flex flex-col gap-4 w-full">
                <h1 className="sm:text-3xl text-sm font-semibold">Headline</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[20rem] w-[70vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="text"
                    value={formik.values.headline}
                    onChange={formik.handleChange}
                    name="headline"
                    onBlur={formik.handleBlur}
                    className=" outline-none w-full pl-2"
                  />
                  {formik.touched.headline && formik.errors.headline ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.headline}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="sm:text-3xl text-sm font-semibold">Link</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[20rem] w-[70vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="text"
                    value={formik.values.link}
                    onChange={formik.handleChange}
                    name="link"
                    onBlur={formik.handleBlur}
                    className=" outline-none w-full pl-2"
                  />
                  {formik.touched.link && formik.errors.link ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.link}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="sm:text-3xl text-sm font-semibold">Image Url</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[20rem] w-[70vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="text"
                    value={formik.values.imageUrl}
                    onChange={formik.handleChange}
                    name="imageUrl"
                    onBlur={formik.handleBlur}
                    className=" outline-none w-full pl-2"
                  />
                  {formik.touched.imageUrl && formik.errors.imageUrl ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.imageUrl}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">
                  Description
                </h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[100%] w-[70vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="text"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="desc"
                    className=" outline-none w-full pl-2"
                  />
                  {formik.touched.desc && formik.errors.desc ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.desc}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* <div className="flex flex-col gap-4 w-full">
                <h1 className="sm:text-3xl text-sm font-semibold">Date</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[20rem] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="text"
                    value={formik.values.Date}
                    onChange={formik.handleChange}
                    name="date"
                    onBlur={formik.handleBlur}
                    className=" outline-none w-full"
                  />
                  {formik.touched.Date && formik.errors.Date ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.Date}
                    </div>
                  ) : null}
                </div>
              </div> */}

              {/* <input type="date" name="" id="" /> */}
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Date setDate={setDate} />
          </div>

          <button onClick={formik.handleSubmit} type="button">
            <img
              src={submit}
              className=" sm:w-auto w-[40vw] sm:ml-0 ml-4"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateNews;
