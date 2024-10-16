import { Box, useTheme } from "@mui/material";
import React from "react";
import InvoicesSection from "./InvoicesSection";
import ActiveFilterSection from "./ActiveFilterSection";
import TabSection from "./TabSection";

const InvoicePage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <InvoicesSection></InvoicesSection>
      </Box>
      <Box>
        <ActiveFilterSection></ActiveFilterSection>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.black,
          borderRadius: "32px",
          position: "relative",
        }}
        className="z-10"
      >
        <Box className="z-20">
          <TabSection></TabSection>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoicePage;
