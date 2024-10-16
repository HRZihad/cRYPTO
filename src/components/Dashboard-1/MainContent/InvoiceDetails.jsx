import { Box, Grid, Typography, useTheme } from "@mui/material";
import user from "../../../assets/images/user.jpg";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import BlueRockIcon from "../../../assets/images/BlueRock1.png"

const InvoiceDetails = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box className="flex justify-between mb-4
      ">
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.semiWhite,
              fontSize: "18px",
              mb: 2,
            }}
          >
            Invoice Details
          </Typography>
          <Box className="flex gap-3 items-center">
            <Box className="flex items-baseline gap-2">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "18px" }}
              >
                #
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "32px" }}
              >
                42,770.00
              </Typography>
            </Box>
            <Box
              className="py-1 px-4"
              sx={{
                width: "max-content",
                height: "max-content",
                border: `1px solid ${theme.palette.primary.border}`,
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{ color: theme.palette.text.semiWhite, fontSize: "14px" }}
              >
                Unsent
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: theme.palette.text.semiWhite,
              fontSize: "18px",
              mb: 2,
            }}
          >
            Company
          </Typography>
          <Box className="flex items-center">
            <Typography
              sx={{ color: theme.palette.text.white, fontSize: "32px" }}
            >
              BlueRock
            </Typography>
            <Box className="w-12 h-12 overflow-hidden">
              <img src={BlueRockIcon} alt=""  className="w-full h-full object-cover"/>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: theme.palette.text.semiWhite,
              fontSize: "18px",
              mb: 2,
            }}
          >
            Company
          </Typography>

          <Box className="flex gap-2">
            <Box className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={user}
                alt="user"
                className="h-full w-full object-cover"
              />
            </Box>
            <Box>
              <Typography sx={{ color: theme.palette.text.white }}>
                Maria Jonas
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.semiWhite,
                  fontSize: "14px",
                }}
              >
                CEO BlueRock Pvt. Ltd
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Card Section Start */}
      <Grid container spacing={2} >
        <Grid item xs={3}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.cardBg,
              padding: "16px",
              borderRadius: "16px",
              height: "130px",
              // width: "240px",
            }}
            className="flex flex-col justify-between"
          >
            <Box className="flex justify-between">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "24px" }}
              >
                <small>$</small> 10,630.80
              </Typography>
              <Box>
                <CallMadeIcon sx={{ color: theme.palette.primary.white }} />
              </Box>
            </Box>
            <Typography
              sx={{ color: theme.palette.text.white, fontSize: "14px" }}
            >
              Concept Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.cardBg,
              padding: "16px",
              borderRadius: "16px",
              height: "130px",
              // width: "240px",
            }}
            className="flex flex-col justify-between"
          >
            <Box className="flex justify-between">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "24px" }}
              >
                <small>$</small> 10,630.80
              </Typography>
              <Box>
                <CallMadeIcon sx={{ color: theme.palette.primary.white }} />
              </Box>
            </Box>
            <Typography
              sx={{ color: theme.palette.text.white, fontSize: "14px" }}
            >
              Concept Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.cardBg,
              padding: "16px",
              borderRadius: "16px",
              height: "130px",
              // width: "240px",
            }}
            className="flex flex-col justify-between"
          >
            <Box className="flex justify-between">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "24px" }}
              >
                <small>$</small> 10,630.80
              </Typography>
              <Box>
                <CallMadeIcon sx={{ color: theme.palette.primary.white }} />
              </Box>
            </Box>
            <Typography
              sx={{ color: theme.palette.text.white, fontSize: "14px" }}
            >
              Concept Development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              background:
                "repeating-linear-gradient(-55deg, #829DB0, #829DB0 5px, #9AB0BE 5px, #9AB0BE 10px)",
              padding: "16px",
              borderRadius: "16px",
              height: "130px",
            }}
            className="flex justify-center items-center"
          >
            <Box
              className="h-10 w-10 flex rounded-full items-center justify-center"
              sx={{ backgroundColor: theme.palette.primary.cardBg }}
            >
              <AddIcon sx={{ color: theme.palette.primary.white }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Total Amount section */}
      <Box className="flex justify-between items-center mt-5" sx={{backgroundColor: theme.palette.primary.cardBg, py: "12px", px: "24px", borderRadius: "48px"}}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.semiWhite,
              fontSize: "16px",
            }}
          >
            Sub Total
          </Typography>
          <Box className="flex gap-3 items-center">
            <Box className="flex gap-1 items-baseline">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "14px" }}
              >
                $
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "24px" }}
              >
                80,770.00
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.semiWhite,
              fontSize: "16px",
            }}
          >
            Total
          </Typography>
          <Box className="flex gap-3 items-center">
            <Box className="flex items-baseline gap-1">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "14px" }}
                
              >
                $
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "24px" }}
              >
                80,770.00
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.semiWhite,
              fontSize: "16px",
            }}
          >
            Total
          </Typography>
          <Box className="flex gap-3 items-center">
            <Box className="flex items-baseline gap-1">
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "14px" }}
              >
                $
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.white, fontSize: "24px" }}
              >
                80,770.00
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flex gap-2">
          <Box
            className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
            sx={{
              backgroundColor: "transparent",
              border: `1px solid ${theme.palette.primary.border}`,
            }}
          >
            <EditCalendarIcon sx={{ color: theme.palette.primary.white }} />
           
          </Box>
          <Box
            className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
            sx={{
              backgroundColor: "transparent",
              border: `1px solid ${theme.palette.primary.border}`,
            }}
          >
           <CalendarMonthIcon sx={{ color: theme.palette.primary.white }} />
          </Box>
          <Box
            className="py-2 px-4"
            sx={{
              width: "max-content",
              height: "max-content",
              border: `1px solid ${theme.palette.primary.border}`,
              borderRadius: "20px",
              backgroundColor: theme.palette.primary.active,
            }}
          >
            <Typography
              sx={{ color: theme.palette.text.default, fontSize: "14px", fontWeight: "600" }}
            >
              Pay Out Now
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceDetails;
