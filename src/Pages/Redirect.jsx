import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

const Redirect = () => {
  const { id } = useParams();
  console.log(id);

  useLayoutEffect(async () => {
    const res = await axios.post(
      "https://stageapi.eupheusapp.com/api/sales_data/aof/verfication/customer/url/redirect",
      {
        // data: {
        surl: `eupheus.in/url/${id}`,
        // },
      }
    );
    window.location.replace(res.data.message);
  }, []);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Redirect;
