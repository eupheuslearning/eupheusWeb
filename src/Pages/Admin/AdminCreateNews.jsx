import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useFormik } from "formik";
import Date from "../../Components/Date";
import BasicButton from "../../Components/Material/Button";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { authActions } from "../../Store/auth";
// amazon s3
import { uploadFile } from "react-s3";
import { useNavigate } from "react-router-dom";
import useAdminInfo from "../../Components/CustomHooks/useAdminInfo";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import axios from "axios";
import Snackbars from "../../Components/Material/SnackBar";
import { useRef } from "react";
window.Buffer = window.Buffer || require("buffer").Buffer;

const AdminCreateNews = () => {
  const userinfo = useAdminInfo();
  const [open, setOpen] = useState(false);
  const [modelError, setModelError] = useState(false);
  const snackbarRef = useRef();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const config = {
    bucketName: "eup-static-img",
    dirName: "marketing_website_photos",
    region: "ap-south-1",
  };

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      headline: "",
      desc: "",
      link: "",
      imageUrl: "",
      Date: "date",
      createdBy: Cookies.get("id"),
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
      // if (!formik.values.imageUrl) {
      //   errors.imageUrl = "Required";
      // }
      if (!formik.values.Date) {
        errors.Date = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      if (!Cookies.get("admin")) {
        return navigate("/admin/login");
      }
      if (!selectedFile) {
        return setModelError(true), snackbarRef.current.openSnackbar();
      }
      setOpen(true);
      const s3res = await uploadFile(selectedFile, config);
      formik.values.imageUrl = s3res.location;
      const res = await axios.post(
        "http://localhost:4000/news",
        {
          headline: values.headline,
          desc: values.desc,
          date: values.Date,
          link: values.link,
          imgUrl: values.imageUrl,
          createdBy: parseInt(values.createdBy),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("admin")}`,
          },
        }
      );
      if (res.status === 200) {
        setModelError(false);
        snackbarRef.current.openSnackbar();
      }
      console.log(res);
      values.headline = "";
      values.desc = "";
      values.link = "";
      values.imageUrl = "";
      values.Date = "date";
      setSelectedFile(null);
      setOpen(false);
    },
  });

  const setDate = (date) => {
    formik.values.Date = date;
  };

  return (
    <>
      <Snackbars
        error={modelError}
        ref={snackbarRef}
        errMessage={modelError ? "Select Thumbnail" : "Successful"}
      />
      <div className="w-full relative min-h-[100vh] max-h-fit bg-[#f5ab1d] flex justify-center items-center">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="absolute top-0 md:w-auto cursor-pointer md:h-[4rem] w-[10rem] h-[3rem] left-4"
          alt=""
        />
        <div className="flex sm:flex-row flex-col sm:items-center items-end gap-3 absolute top-2 right-4">
          <h1 className=" font-semibold text-xl">
            Hello, {userinfo && userinfo.username}
          </h1>
          <div onClick={() => dispatch(authActions.logout())}>
            <BasicButton text={"Logout"} bgColor={"rgb(153 27 27)"} />
          </div>
        </div>
        <div className="flex gap-3"></div>
        <div className="w-full flex justify-center items-center">
          <form
            className={`flex flex-col transition-all sm:my-[4rem] my-[7rem] duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] pb-8 sm:pt-8 pt-8 `}
          >
            <h1 className="text-red-800 font-bold text-lg">Enter Details</h1>
            <TextField
              error={formik.errors.headline && formik.touched.headline}
              value={formik.values.headline}
              id="standard-basic"
              name="headline"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Headline"
              helperText={
                formik.touched.headline ? formik.errors.headline : null
              }
              variant="standard"
            />
            <TextField
              error={formik.errors.link && formik.touched.link}
              value={formik.values.link}
              id="standard-basic"
              name="link"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Link"
              helperText={formik.touched.link ? formik.errors.link : null}
              variant="standard"
            />

            <TextField
              error={formik.errors.desc && formik.touched.desc}
              value={formik.values.desc}
              id="standard-basic"
              name="desc"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Description"
              helperText={formik.touched.desc ? formik.errors.desc : null}
              variant="standard"
            />
            <div className="flex gap-[2rem] w-full items-center">
              <h1 className="font-semibold ">Select Thumbnail: </h1>
              <Button variant="contained" component="label">
                Select
                <input
                  hidden
                  accept="image/*"
                  onChange={handleFileInput}
                  type="file"
                />
              </Button>
            </div>
            <Date setDate={setDate} />
            <div onClick={formik.handleSubmit}>
              <BasicButton text={"Submit"} bgColor={"rgb(153 27 27)"} />
            </div>
          </form>
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

export default AdminCreateNews;
