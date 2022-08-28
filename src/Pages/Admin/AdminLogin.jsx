import React, { useRef, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress, TextField } from "@mui/material";
import BasicButton from "../../Components/Material/Button";
import logo from "../../assets/logo.png";
import Snackbars from "../../Components/Material/SnackBar";
import instance from "../../Instance";

const AdminLogin = () => {
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
      // password
      if (!formik.values.password) {
        errors.password = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      setLoading(true);
      // const res = await axios.post("http://localhost:4000/auth/login", values);
      const res = await instance({
        url: "auth/login",
        method: "post",
        data: values,
      });
      // console.log(res);
      if (res.data.err) {
        setShowError(`${res.data.err}`);
        snackbarRef.current.openSnackbar();
        // setTimeout(() => {
        //   setShowError("");
        // }, 4000);
      }
      if (res.data.status === 200) {
        Cookies.set("admin", `${res.data.token}`, { expires: 2 });
        Cookies.set("id", `${res.data.userId}`, { expires: 2 });
        dispatch(authActions.login());
        navigate("/admin/dashboard");
      }
      setLoading(false);
    },
  });

  return (
    <>
      <Snackbars error={true} ref={snackbarRef} errMessage={showError} />
      <div className="w-full h-[100vh] relative bg-[#f5ab1d] flex justify-center items-center">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="absolute top-0 md:w-auto cursor-pointer md:h-[4rem] w-[10rem] h-[3rem] left-4"
          alt=""
        />
        {/* <div
        className={`fixed top-0 right-0 transition-all ease-linear duration-200 ${
          showError ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Alert severity="error">{showError}</Alert>
      </div> */}

        <div className="w-full h-[100vh] flex justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            className={`flex flex-col transition-all duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] pb-8 sm:pt-8 pt-8`}
          >
            <h1 className="text-red-800 font-bold text-lg">
              Sign In To Your Account
            </h1>

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
              error={formik.errors.password && formik.touched.password}
              value={formik.values.password}
              id="standard-basic"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Password"
              type="password"
              helperText={
                formik.touched.password ? formik.errors.password : null
              }
              variant="standard"
            />
            <button type="submit" onClick={formik.handleSubmit}>
              <BasicButton text={"Sign In"} bgColor={"rgb(153 27 27)"} />
            </button>
          </form>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
