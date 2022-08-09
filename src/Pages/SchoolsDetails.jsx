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
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import TransitionsModal from "../Components/Material/Model";

const SchoolsDetails = () => {
  const [open, setOpen] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [price, setPrice] = useState(null);
  const snackbarRef = useRef();

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
      const res = await axios.get(
        `http://localhost:4000/schools/${formik.values.coupon}`
      );

      if (!res.data) {
        snackbarRef.current.openSnackbar();
      } else {
        setPrice(res.data.price);
        setSchoolInfo(res.data);
      }
      setOpen(false);
    },
  });

  //   console.log(schoolInfo);

  return (
    <div
      className="bg-[#dbdbdb] min-h-[100vh] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      {/* <TransitionsModal /> */}
      <Snackbars ref={snackbarRef} error={true} errMessage={"Wrong Coupon"} />
      <div className="w-full h-[100vh] flex justify-center items-center">
        <form
          className={`flex flex-col transition-all duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] pb-8 sm:pt-8 pt-8`}
        >
          {schoolInfo ? (
            <>
              <h1 className="text-red-800 font-bold text-lg">
                School Information
              </h1>
              <h1 className="font-semibold text-base">{schoolInfo.name}</h1>
              <h1 className="font-semibold text-base">{schoolInfo.state}</h1>
              <h1 className="font-semibold text-base">{schoolInfo.city}</h1>
              <h1 className="font-semibold text-base">
                Price: ₹{schoolInfo.price}
              </h1>
              <Link to={"/toefl_payment"} state={{ price: schoolInfo.price }}>
                <div onClick={() => Cookies.set("xc67eoa8", "1")}>
                  <BasicButton text={"Proceed"} bgColor={"rgb(153 27 27)"} />
                </div>
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
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

export default SchoolsDetails;
