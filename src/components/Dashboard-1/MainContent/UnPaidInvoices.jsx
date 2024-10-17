import { Box, Grid,  Typography, useTheme } from "@mui/material";
import React from "react";
import user from "../../../assets/images/user.jpg";
import InvoiceDetails from "./InvoiceDetails";

const UnPaidInvoices = () => {
  const theme = useTheme();

 
  return (
    <Box sx={{}} className="">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Box
              className="flex justify-between items-center px-4 py-2"
              sx={{
                backgroundColor: theme.palette.primary.cardBg2,
                borderRadius: "28px",
              }}
            >
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
                    # 404-002
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.semiWhite,
                      fontSize: "14px",
                    }}
                  >
                    In 2 days
                  </Typography>
                </Box>
              </Box>

              <Box
                className="py-1 px-4"
                sx={{
                  border: `1px solid ${theme.palette.primary.border}`,
                  borderRadius: "20px",
                  background: 'repeating-linear-gradient(-55deg, #373737, #373737 7px, #4f4d4d 7px, #4f4d4d 9px)',
                }}
              >
                <Typography
                  sx={{ color: theme.palette.text.semiWhite, fontSize: "14px" }}
                >
                  Unsent
                </Typography>
              </Box>
              <Box className="flex gap-1">
                <Typography
                  sx={{ color: theme.palette.text.semiWhite, fontSize: "24px" }}
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
        </Grid>
        <Grid
          item
          xs={8}
          
        >
          <Box className="" sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: "20px",
            padding: "20px",
            
          }}>
            <InvoiceDetails></InvoiceDetails>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UnPaidInvoices;
