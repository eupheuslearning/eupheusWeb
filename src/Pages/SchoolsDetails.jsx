import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import BasicButton from "../Components/Material/Button";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import { useFormik } from "formik";

import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbars from "../Components/Material/SnackBar";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TransitionsModal from "../Components/Material/Model";
import logo from "../assets/logo.png";
import toefl from "../assets/toefl.png";
import instance from "../Instance";
import TextFieldBasic from "../Components/Material/TextField";

const SchoolsDetails = () => {
  const [open, setOpen] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState(null);
  const navigate = useNavigate();
  const modelRef = useRef();

  const snackbarRef = useRef();
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
  });

  const formik = useFormik({
    initialValues: {
      coupon: "",
    },
    validate: () => {
      const errors = {};
      // coupon
      if (!formik.values.coupon) {
        errors.coupon = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      setOpen(true);
      // const res = await axios.get(
      //   `http://localhost:4000/schools/${formik.values.coupon}`
      // );
      const res = await instance({
        url: `schools/${formik.values.coupon}`,
        method: "GET",
      });

      if (!res.data) {
        snackbarRef.current.openSnackbar();
      } else {
        // setPrice(res.data.price);
        setSchoolInfo(res.data);
        setSteps({ step1: false, step2: true, step3: false });
      }
      setOpen(false);
    },
  });

  // razorpay
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const displayRazorpay = async () => {
    const data = await instance({
      url: "payment",
      data: { price: schoolInfo.price },
      method: "POST",
    });

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.data.currency,
      amount: data.data.amount,
      name: "TOEFL",
      description: "Payment",
      image: logo,
      order_id: data.data.id,
      handler: async function (response) {
        setOpen(true);

        const res = await instance({
          url: "payment/addPayment",
          method: "POST",
          data: {
            userName: formik2.values.userName,
            email: formik2.values.email,
            parentName: formik2.values.parentName,
            section: formik2.values.section,
            class: formik2.values.class,
            phone: formik2.values.phone,
            paymentID: response.razorpay_payment_id,
          },
        });
        setOpen(false);
        if (response.razorpay_payment_id) {
          modelRef.current.openModel();
        } else {
          modelRef.current.enableError();
          modelRef.current.openModel();
        }
      },
      prefill: {
        name: formik.values.userName,
        email: formik.values.email,
        contact: formik.values.phone,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const formik2 = useFormik({
    initialValues: {
      userName: "",
      parentName: "",
      class: "",
      section: "",
      email: "",
      phone: "",
    },
    validate: () => {
      const errors = {};
      // email
      if (!formik2.values.email) {
        errors.email = "Required";
      } else if (
        !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(formik2.values.email)
      ) {
        errors.email = "Invalid email address";
      }
      // user name
      if (!formik2.values.userName) {
        errors.userName = "Required";
      }
      if (!formik2.values.parentName) {
        errors.parentName = "Required";
      }
      if (!formik2.values.class) {
        errors.class = "Required";
      }
      if (!formik2.values.section) {
        errors.section = "Required";
      }
      //   phone
      if (!formik2.values.phone) {
        errors.phone = "Required";
      } else if (formik2.values.phone.toString().length != 10) {
        errors.phone = "Length should be 10";
      }

      return errors;
    },

    onSubmit: async (values) => {
      displayRazorpay();
      console.log(values);
    },
  });

  //   console.log(schoolInfo);

  const handleReturn = () => {
    if (steps.step1) {
      return (
        <div className="flex flex-col py-[4rem] gap-[1rem]">
          <h1 className="text-red-800 font-bold text-lg">Enter Coupon</h1>
          <TextField
            error={formik.errors.coupon && formik.touched.coupon}
            value={formik.values.coupon}
            id="standard-basic"
            name="coupon"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Enter Coupon"
            helperText={formik.touched.coupon ? formik.errors.coupon : null}
            variant="standard"
          />

          <div onClick={formik.handleSubmit}>
            <BasicButton text={"Submit"} bgColor={"rgb(153 27 27)"} />
          </div>
        </div>
      );
    } else if (steps.step2) {
      return (
        <div className="flex flex-col w-full px-[2rem] py-[4rem] gap-[1.5rem]">
          <h1 className="text-red-800 font-bold text-lg">School Information</h1>
          <div className="sm:grid sm:grid-cols-2 gap-4 sm:grid-rows-3">
            <div className="flex flex-col col-span-2 items-start gap-2">
              <h1 className="font-semibold">School</h1>
              <div className="!w-full">
                <TextFieldBasic className="!w-full" value={schoolInfo.name} />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-semibold">City</h1>
              <TextFieldBasic value={schoolInfo.city} />
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-semibold">State</h1>
              <TextFieldBasic value={schoolInfo.state} />
            </div>
            <div className="flex flex-col col-span-2 items-start gap-2">
              <h1 className="font-semibold">Price</h1>
              <TextFieldBasic value={`₹${schoolInfo.price}.00`} />
            </div>
          </div>

          <div className="w-full flex justify-end">
            <div
              onClick={() =>
                setSteps({ step1: false, step2: false, step3: true })
              }
            >
              <BasicButton text={"Proceed"} bgColor={"rgb(153 27 27)"} />
            </div>
          </div>
        </div>
      );
    } else if (steps.step3) {
      return (
        <div className="py-[4rem] w-full px-[2rem]">
          <h1 className="text-red-800 mb-4 font-bold text-lg">
            Personal Information
          </h1>
          <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-y-4 md:gap-x-12 flex flex-col gap-4">
            <TextField
              error={formik2.errors.userName && formik2.touched.userName}
              value={formik2.values.userName}
              id="standard-basic"
              name="userName"
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              label="Student Name"
              helperText={
                formik2.touched.userName ? formik2.errors.userName : null
              }
              variant="standard"
            />
            <TextField
              error={formik2.errors.parentName && formik2.touched.parentName}
              value={formik2.values.parentName}
              id="standard-basic"
              name="parentName"
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              label="Parent Name"
              helperText={
                formik2.touched.parentName ? formik2.errors.parentName : null
              }
              variant="standard"
            />
            <TextField
              error={formik2.errors.class && formik2.touched.class}
              value={formik2.values.class}
              id="standard-basic"
              name="class"
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              label="Class"
              type="number"
              helperText={formik2.touched.class ? formik2.errors.class : null}
              variant="standard"
            />
            <TextField
              error={formik2.errors.section && formik2.touched.section}
              value={formik2.values.section}
              id="standard-basic"
              name="section"
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              label="Section"
              helperText={
                formik2.touched.section ? formik2.errors.section : null
              }
              variant="standard"
            />
            <TextField
              error={formik2.errors.email && formik2.touched.email}
              value={formik2.values.email}
              id="standard-basic"
              name="email"
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              label="Email"
              helperText={formik2.touched.email ? formik2.errors.email : null}
              variant="standard"
            />
            <TextField
              error={formik2.errors.phone && formik2.touched.phone}
              value={formik2.values.phone}
              id="standard-basic"
              name="phone"
              type="number"
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              label="Phone"
              helperText={formik2.touched.phone ? formik2.errors.phone : null}
              variant="standard"
            />
          </div>
          <div
            className="mt-[2rem] w-full flex justify-end"
            onClick={formik2.handleSubmit}
          >
            <BasicButton
              text={`Pay ₹${schoolInfo.price}.00`}
              bgColor={"rgb(153 27 27)"}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <TransitionsModal ref={modelRef} />

      <div
        className="bg-[#dbdbdb] relative min-h-[100vh] overflow-hidden"
        style={{ backgroundImage: `url(${grayBg})` }}
      >
        {/* <Navbar highlight={"solutions"} /> */}
        <img
          src={logo}
          onClick={() => navigate("/")}
          className="absolute top-2 cursor-pointer left-4 md:w-[13rem] w-[7rem] h-auto"
          alt=""
        />
        <img
          src={toefl}
          className="absolute top-2 cursor-pointer right-4 md:w-[13rem] w-[7rem] h-auto"
          alt=""
        />
        {/* <TransitionsModal /> */}
        <Snackbars ref={snackbarRef} error={true} errMessage={"Wrong Coupon"} />
        <div className="w-full min-h-[100vh] bg-gradient-to-r from-indigo-700 to-teal-300 flex justify-center items-center">
          {/* {schoolInfo ? (
            <form
              // onSubmit={formik.handleSubmit}
              className={`flex flex-col transition-all duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] pb-8 sm:pt-8 pt-8`}
            >
              <>
                <h1 className="text-red-800 font-bold text-lg">
                  School Information
                </h1>
                <h1 className="font-semibold text-base uppercase">
                  {schoolInfo.name}
                </h1>
                <h1 className="font-semibold text-base uppercase">
                  {schoolInfo.state}
                </h1>
                <h1 className="font-semibold text-base uppercase">
                  {schoolInfo.city}
                </h1>
                <h1 className="font-semibold text-base">
                  Price: ₹{schoolInfo.price}
                </h1>
                <Link
                  to={`/toefl_payment/${formik.values.coupon}`}
                  state={{ price: schoolInfo.price }}
                >
                  <div>
                    <BasicButton text={"Proceed"} bgColor={"rgb(153 27 27)"} />
                  </div>
                </Link>
              </>
            </form>
          ) : (
            <div className="flex w-full items-center py-4 flex-col gap-[2rem]">
              <div className="flex sm:flex-row flex-col gap-4 md:pt-[4rem] pt-[10rem] items-center">
                <img
                  className="w-[15rem] px-2 rounded-md py-1 bg-slate-100 shadow-lg h-auto object-cover"
                  src={logo}
                  alt=""
                />
                <span className="text-red-800 text-lg font-semibold">
                  PROFICIENCY LEARNING SOLUTIONS <br /> PRIVATE LIMITED
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-red-800 sm:text-[2.5rem] text-[1.5rem] font-medium">
                  <span className="text-sky-500 italic">TOEFL</span> Payment
                </span>
                <div className="px-4 py-[2px] bg-sky-500 rounded-sm w-[42%]"></div>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className={`flex flex-col transition-all duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] 2xl:pt-8 2xl:pb-8  pb-4 sm:pt-4 pt-4`}
              >
                <h1 className="text-red-800 font-bold text-lg">Enter Coupon</h1>
                <TextField
                  error={formik.errors.coupon && formik.touched.coupon}
                  value={formik.values.coupon}
                  id="standard-basic"
                  name="coupon"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Enter Coupon"
                  helperText={
                    formik.touched.coupon ? formik.errors.coupon : null
                  }
                  variant="standard"
                />

                <div onClick={formik.handleSubmit}>
                  <BasicButton text={"Submit"} bgColor={"rgb(153 27 27)"} />
                </div>
              </form>
            </div>
          )} */}

          <form
            onSubmit={formik.handleSubmit}
            className={`flex mt-[5rem] md:flex-row flex-col transition-all duration-300 ease-linear lg:w-[70%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 mb-[2rem] `}
          >
            <div className="md:w-[30%] w-full bg-indigo-400 rounded-l-md flex justify-around md:justify-start md:flex-col flex-row">
              <div className="flex md:flex-row flex-col md:ml-[2rem] gap-2 border-b-[1.5px] border-b-gray-300 md:py-[2rem] py-4">
                <span
                  className={`w-8 h-7 text-white flex justify-center items-center rounded-full ${
                    steps.step1 ? "bg-teal-600" : "bg-gray-300"
                  }`}
                >
                  <h1
                    className={`font-semibold ${
                      steps.step1 ? "text-white" : "text-black"
                    }`}
                  >
                    1
                  </h1>
                </span>
                <span
                  className={`${
                    steps.step1 ? "text-white" : "text-gray-300"
                  } font-semibold sm:text-sm text-xs md:text-base`}
                >
                  Enter School Code
                </span>
              </div>
              <div className="flex md:flex-row flex-col md:ml-[2rem] gap-2 border-b-[1.5px] border-b-gray-300 md:py-[2rem] py-[1rem]">
                <span
                  className={`w-8 h-7 text-white flex justify-center items-center rounded-full ${
                    steps.step2 ? "bg-teal-600" : "bg-gray-300"
                  }`}
                >
                  <h1
                    className={`font-semibold ${
                      steps.step2 ? "text-white" : "text-black"
                    }`}
                  >
                    2
                  </h1>
                </span>
                <span
                  className={`${
                    steps.step2 ? "text-white" : "text-gray-300"
                  } font-semibold sm:text-sm text-xs md:text-base`}
                >
                  Check School Details
                </span>
              </div>
              <div className="flex md:flex-row flex-col md:ml-[2rem] gap-2 border-b-[1.5px] border-b-gray-300 md:py-[2rem] py-[1rem]">
                <span
                  className={`w-8 h-7 text-white flex justify-center items-center rounded-full ${
                    steps.step3 ? "bg-teal-600" : "bg-gray-300"
                  }`}
                >
                  <h1
                    className={`font-semibold ${
                      steps.step3 ? "text-white" : "text-black"
                    }`}
                  >
                    3
                  </h1>
                </span>
                <span
                  className={`${
                    steps.step3 ? "text-white" : "text-gray-300"
                  } font-semibold sm:text-sm text-xs md:text-base`}
                >
                  Payment
                </span>
              </div>
            </div>
            <div className="md:w-[70%] w-full flex md:h-[28rem] h-[32rem] justify-center items-center">
              {handleReturn()}
            </div>
          </form>
        </div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="sticky bottom-0">
          <Footer />
        </div>
        <GoToTop />
      </div>
    </>
  );
};

export default SchoolsDetails;
