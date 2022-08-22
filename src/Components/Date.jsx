import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker({ setDate }) {
  const [value, setValue] = React.useState(new Date());

  const changeMonth = (month) => {
    let value;
    switch (month) {
      case "Jan":
        return (value = "01");
        break;
      case "Feb":
        return (value = "02");
        break;
      case "Mar":
        return (value = "03");
        break;
      case "Apr":
        return (value = "04");
        break;
      case "May":
        return (value = "05");
        break;
      case "Jun":
        return (value = "06");
        break;
      case "Jul":
        return (value = "07");
        break;
      case "Aug":
        return (value = "08");
        break;
      case "Sep":
        return (value = "09");
        break;
      case "Oct":
        return (value = "10");
        break;
      case "Nov":
        return (value = "11");
        break;
      case "Dec":
        return (value = "12");
        break;

      default:
        break;
    }
    return value;
  };

  const handleDate = (value) => {
    setValue(value);
    let date = value.toString().split(" ");
    date = [date[1], date[2], date[3]];
    date = date.join(" ");
    setDate(date);
  };

  React.useEffect(() => {
    handleDate(value);
    // console.log(changeMonth("Feb"));
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
