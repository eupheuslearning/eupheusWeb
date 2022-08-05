import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import Date from "../../Components/Date";
import BasicButton from "../../Components/Material/Button";
import { Button, TextField } from "@mui/material";

// amazon s3
import { uploadFile } from "react-s3";

const config = {
  bucketName: "eup-static-img",
  region: "",
  accessKeyId: "",
  secretAccessKey: "",
};

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
      <div className="w-full flex justify-center items-center">
        <form
          className={`flex flex-col transition-all duration-300 ease-linear lg:w-[40%] md:w-[70%] w-[90%] rounded-md shadow-2xl 2xl:gap-[4rem] sm:gap-[1.5rem] gap-[1rem] bg-slate-100 px-[3rem] pb-8 sm:pt-8 pt-8 `}
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
            helperText={formik.touched.headline ? formik.errors.headline : null}
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
            error={formik.errors.imageUrl && formik.touched.imageUrl}
            value={formik.values.imageUrl}
            id="standard-basic"
            name="imageUrl"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Image Url"
            helperText={formik.touched.imageUrl ? formik.errors.imageUrl : null}
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
          <div className="flex gap-1 w-full justify-around">
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Date setDate={setDate} />
          </div>
          <div onClick={formik.handleSubmit}>
            <BasicButton text={"Submit"} bgColor={"rgb(153 27 27)"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateNews;
