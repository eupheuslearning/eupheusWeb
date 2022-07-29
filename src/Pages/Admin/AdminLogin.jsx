import React, { useState } from "react";
import dashBorder from "../../assets/dash-border.png";
import Cookies from "js-cookie";
import submit from "../../assets/submit.png";
import axios from "axios";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Loader from "../../Components/Loader";

const AdminLogin = () => {
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
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
      const res = await axios.post("http://localhost:3000/auth/login", values);
      if (res.data.err) {
        setShowError(`${res.data.err}`);
        setTimeout(() => {
          setShowError("");
        }, 4000);
      }
      if (res.data.status === 200) {
        Cookies.set("admin", `${res.data.token}`, { expires: 2 });
        dispatch(authActions.login());
        navigate("/admin/create/news");
      }
      setLoading(false);
    },
  });

  return (
    <div className="w-full h-[100vh] bg-[#f5ab1d] flex justify-center items-center">
      {loading ? <Loader /> : null}
      <div
        className={`fixed top-0 right-0 transition-all ease-linear duration-200 ${
          showError ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Alert severity="error">{showError}</Alert>
      </div>
      <div className="bg-white rounded-r-3xl drop-shadow-2xl sm:px-[3rem] px-[1rem] 2xl:py-[5rem] lg:py-[3rem] sm:py-[2rem] py-[2rem]">
        <form
          className="flex flex-col gap-[3rem]"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex sm:gap-[4rem] gap-4 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 w-full">
                <h1 className="sm:text-3xl text-sm font-semibold">Email</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[20rem] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    onBlur={formik.handleBlur}
                    className=" outline-none w-full pl-2"
                    placeholder="Enter email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="sm:text-3xl text-sm font-semibold">Password</h1>
                <div
                  className="sm:p-4 p-1 bg-no-repeat lg:w-[30vw] md:w-[100%] w-[60vw] sm:h-auto h-[6vh]"
                  style={{
                    backgroundImage: `url(${dashBorder})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <input
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    className=" outline-none w-full pl-2"
                    placeholder="Enter password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className=" text-xs text-red-500">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={formik.handleSubmit}
            disabled={loading}
            type="button"
          >
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

export default AdminLogin;
