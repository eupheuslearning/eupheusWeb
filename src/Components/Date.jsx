import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker({ setDate }) {
  const [value, setValue] = React.useState(new Date());
  const handleDate = (value) => {
    setValue(value);
    let date = value.toString().split(" ");
    date = [date[1], date[2], date[3]];
    date = date.join(" ");
    setDate(date);
  };

  React.useEffect(() => {
    handleDate(value);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select Date"
        value={value}
        onChange={(newValue) => {
          handleDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
