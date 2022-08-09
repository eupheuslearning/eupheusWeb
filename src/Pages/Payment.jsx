import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import BasicButton from "../Components/Material/Button";
import Navbar from "../Components/Navbar";
import GoToTop from "../Components/Top";
import grayBg from "../assets/grayBg.png";
import Footer from "../Components/Footer";
import { useFormik } from "formik";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbars from "../Components/Material/SnackBar";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";
import TransitionsModal from "../Components/Material/Model";

const Payment = (props) => {
  const [open, setOpen] = useState(false);
  // const [paymentError, setPaymentError] = useState(false);
  const snackbarRef = useRef();
  const modelRef = useRef();
  const [price, setPrice] = useState(null);
  const paymentPrice = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("xc67eoa8")) {
      navigate("/");
    }
    return () => {
      // console.log("MyComponent onUnmount");
      Cookies.remove("xc67eoa8");
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phone: "",
    },
    validate: () => {
      const errors = {};
      // email
      if (!formik.values.email) {
        errors.email = "Required";
      } else if (
        !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(formik.values.email)
      ) {
        errors.email = "Invalid email address";
      }
      // user name
      if (!formik.values.userName) {
        errors.userName = "Required";
      }
      //   phone
      if (!formik.values.phone) {
        errors.phone = "Required";
      } else if (formik.values.phone.toString().length != 10) {
        errors.phone = "Length should be 10";
      }

      return errors;
    },

    onSubmit: async (values) => {
      displayRazorpay();
    },
  });

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
    // const data = await fetch("http://localhost:1337/razorpay", {
    //   method: "POST",
    // }).then((t) => t.json());
    const data = await axios.post("http://localhost:4000/payment", {
      // price: price,
      price: paymentPrice.state.price,
    });

    // console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.data.currency,
      amount: data.data.amount,
      name: "TOEFL",
      description: "Payment",
      image: logo,
      order_id: data.data.id,
      handler: async function (response) {
        // alert("PAYMENT ID ::" + response.razorpay_payment_id);
        // alert("ORDER ID :: " + response.razorpay_order_id);
        setOpen(true);
        const res = await axios.post(
          "http://localhost:4000/payment/addPayment",
          {
            userName: formik.values.userName,
            email: formik.values.email,
            phone: formik.values.phone,
            paymentID: response.razorpay_payment_id,
          }
        );
        setOpen(false);
        if (response.razorpay_payment_id) {
          modelRef.current.openModel();
          // setTimeout(() => {
          //   navigate("/");
          // }, 3000);
        } else {
          // setPaymentError(true);
          modelRef.current.enableError();
          modelRef.current.openModel();
        }
        // console.log(res.data);
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

  return (
    <div
      className="bg-[#dbdbdb] min-h-[100vh] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      {/* <Snackbars ref={snackbarRef} errMessage={"Payment Successful"} /> */}
      <TransitionsModal ref={modelRef} />
      <Navbar highlight={"solutions"} />
      <div className="w-full h-[100vh] flex justify-center items-center">
        <form
          className={`flex flex-col transition-all duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] pb-8 sm:pt-8 pt-8 mt-[9rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]`}
        >
          <h1 className="text-red-800 font-bold text-lg">
            Personal Information
          </h1>
          <TextField
            error={formik.errors.userName && formik.touched.userName}
            value={formik.values.userName}
            id="standard-basic"
            name="userName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="User Name"
            helperText={formik.touched.userName ? formik.errors.userName : null}
            variant="standard"
          />
          <TextField
            error={formik.errors.email && formik.touched.email}
            value={formik.values.email}
            id="standard-basic"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Email"
            helperText={formik.touched.email ? formik.errors.email : null}
            variant="standard"
          />
          <TextField
            error={formik.errors.phone && formik.touched.phone}
            value={formik.values.phone}
            id="standard-basic"
            name="phone"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Phone"
            helperText={formik.touched.phone ? formik.errors.phone : null}
            variant="standard"
          />
          <div onClick={formik.handleSubmit}>
            <BasicButton text={"Pay"} bgColor={"rgb(153 27 27)"} />
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
  );
};

export default Payment;
