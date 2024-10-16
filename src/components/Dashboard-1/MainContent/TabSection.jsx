import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import UnPaidInvoices from "./UnPaidInvoices";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabSection = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.white,
            borderTopRightRadius: "20px",
            
          }}
        >
          Unpaid Invoices
        </Typography>
        <Box sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "0%",
              left: "-22px",
              width: "22px",
              height: "36px",
              backgroundColor: "transparent",
              borderTopRightRadius: "20px",
              boxShadow: `0px -18px 0 0 ${theme.palette.primary.white}`,
              zIndex: 3, 
            },
            "&::after": {
              content: '""',
              position: "absolute", 
              top: "0%",
              right: "-22px",
              width: "22px",
              height: "36px",
              backgroundColor: "transparent",
              borderTopLeftRadius: "24px",
              boxShadow: `0px -18px 0 0 ${theme.palette.primary.white}`,
              zIndex: 3,
            },
        }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              backgroundColor: theme.palette.primary.white,
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              py: 2,
              px: 2,
              width: "max-content",

              zIndex: 2,

              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              sx={{
                border: `1px solid ${theme.palette.primary.semiBlue}`,
                borderRadius: "24px",
                fontSize: "14px",
                mr: 1,
                "&.Mui-selected": {
                  borderBottom: "none",
                  backgroundColor: theme.palette.primary.active,
                },
              }}
              label="All Invoices"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                border: `1px solid ${theme.palette.primary.semiBlue}`,
                borderRadius: "24px",
                fontSize: "14px",
                mr: 1,
                "&.Mui-selected": {
                  borderBottom: "none",
                  backgroundColor: theme.palette.primary.active,
                },
              }}
              label={
                <Box className="flex items-center gap-5">
                  <Typography>Draft</Typography>
                  <Box
                    className="h-6 w-6 flex items-center justify-center rounded-full"
                    sx={{
                      backgroundColor: "transparent",
                      border: `1px solid ${theme.palette.primary.semiBlue}`,
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.text.default,
                        fontSize: "14px",
                      }}
                    >
                      2
                    </Typography>
                  </Box>
                </Box>
              }
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                border: `1px solid ${theme.palette.primary.semiBlue}`,
                borderRadius: "24px",
                fontSize: "14px",
                "&.Mui-selected": {
                  borderBottom: "none",
                  backgroundColor: theme.palette.primary.active,
                },
              }}
              label={
                <Box className="flex items-center gap-5">
                  <Typography>Unpaid</Typography>
                  <Box
                    className="h-6 w-6 flex items-center justify-center rounded-full"
                    sx={{
                      backgroundColor: "transparent",
                      border: `1px solid ${theme.palette.primary.semiBlue}`,
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.text.default,
                        fontSize: "14px",
                      }}
                    >
                      2
                    </Typography>
                  </Box>
                </Box>
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <Box className="flex gap-2">
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
            className="h-11 w-11 rounded-full flex items-center justify-center hover: cursor-pointer"
            sx={{
              backgroundColor: "transparent",
              border: `1px solid ${theme.palette.primary.border}`,
            }}
          >
            <MoreVertIcon sx={{ color: theme.palette.primary.white }} />
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UnPaidInvoices></UnPaidInvoices>
      </CustomTabPanel>
    </Box>
  );
};

export default TabSection;
