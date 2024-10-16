import { Box, Grid, Typography, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';


const ActiveFilterSection = () => {
  const theme = useTheme();
  return (
    <Box sx={{ my: "20px" , px: "20px" }}>
      <Grid container spacing={2} sx={{ alignItems: "center"}}>
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
            className="flex w-full justify-between items-center pl-5 rounded-[22px]"
            sx={{ border: `1px solid ${theme.palette.primary.border}` }}
          >
            <Typography>All customers</Typography>
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
        <Grid item xs={2}>
          <Box
            className="flex w-full justify-between items-center pl-5 rounded-[22px]"
            sx={{ border: `1px solid ${theme.palette.primary.border}` }}
          >
            <Typography>November 2023</Typography>
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
