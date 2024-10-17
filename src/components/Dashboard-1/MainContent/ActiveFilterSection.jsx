import { Box, Grid, TextField, Typography, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"; // Replace with your chosen calendar component
import dayjs from "dayjs";
import { useState } from "react";

const ActiveFilterSection = () => {
  const theme = useTheme();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [value, setValue] = useState(dayjs('2022-04-17'));
  console.log(value)
  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };
const handleDateChange = (newValue) => {
  setValue(newValue); // Update the selected date
    setIsCalendarOpen(false); // Close the calendar after selection
  };
  

  // Format the date as "Month Year" using dayjs, e.g., "November 2023"
  const formattedDate = dayjs(value).format("DD MMMM YYYY");

  return (
    <Box sx={{ my: "20px", px: "20px" }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={2}>
          <Box className="flex items-center gap-5">
            <Typography sx={{ fontSize: "20px" }}>Active Filters</Typography>
            <Box
              className="h-6 w-6 flex items-center justify-center rounded-full"
              sx={{ backgroundColor: theme.palette.primary.black }}
            >
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "14px" }}
              >
                2
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            className="flex w-full h-11 justify-between items-center pl-2 rounded-[22px]"
            sx={{ border: `1px solid ${theme.palette.primary.border}` }}
          >
            <TextField
              placeholder="All customer"
              variant="outlined" // if you're using the outlined variant
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Box
              className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
              sx={{ backgroundColor: theme.palette.primary.semiBlue }}
            >
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            className="flex w-full justify-between items-center pl-5 rounded-[22px]"
            sx={{ border: `1px solid ${theme.palette.primary.border}` }}
          >
            <Typography>All statuses</Typography>
            <Box
              className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
              sx={{ backgroundColor: theme.palette.primary.semiBlue }}
            >
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} className="relative">
          <Box className="flex flex-col w-full">
            <Box
              className="flex w-full justify-between items-center pl-5 rounded-[22px]"
              sx={{ border: `1px solid ${theme.palette.primary.border}` }}
            >
              <Typography>{formattedDate}</Typography>
              <Box
                className="h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
                sx={{ backgroundColor: theme.palette.primary.semiBlue }}
                onClick={toggleCalendar}
              >
                <CalendarMonthIcon />
              </Box>
            </Box>

            {/* Conditionally render the calendar */}
            {isCalendarOpen && (
              <Box sx={{ mt: 2 }} className="absolute bottom-[100%] bg-white shadow-md rounded-md">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar value={value} onChange={handleDateChange}
                   
                  />
                </LocalizationProvider>
               
              </Box>
            )}
          </Box>

          {/* <Box
              className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
              sx={{ backgroundColor: theme.palette.primary.semiBlue }}
            >
              <CalendarMonthIcon />
            </Box> */}
        </Grid>
        <Grid item xs={2}>
          <Box
            className="flex w-full justify-between items-center pl-5 rounded-[22px]"
            sx={{ border: `1px solid ${theme.palette.primary.border}` }}
          >
            <Typography>December 2023</Typography>
            <Box
              className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
              sx={{ backgroundColor: theme.palette.primary.semiBlue }}
            >
              <CalendarMonthIcon />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            className="flex w-full justify-between items-center pl-5 rounded-[22px]"
            sx={{ border: `1px solid ${theme.palette.primary.border}` }}
          >
            <Typography>All customers</Typography>
            <Box
              className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
              sx={{ backgroundColor: theme.palette.primary.semiBlue }}
            >
              <SearchIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActiveFilterSection;
