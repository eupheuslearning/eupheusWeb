import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ count, handleChangePagination }) {
  const changePagination = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log("working");

    handleChangePagination(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        size="large"
        // onClick={(e) => console.log(e)}
        hideNextButton
        hidePrevButton
        // onClick={(newValue) => changePagination(newValue.target.ariaLabel)}
        onChange={changePagination}
      />
    </Stack>
  );
}
