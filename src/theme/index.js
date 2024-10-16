import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Bai Jamjuree", sans-serif',
    },
  },
});

//For dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1F2336",
      white: "#ffffff",
      semiWhite: "#b2b2b4",
      active: "#797FFF",
      icon: "#72799B",
      cardBg: "#25293D",
      border: "#2B3046",
      border2: "#85858585",
      grid: "#2B3046",
    },
    secondary: {
      main: "rgba(146,118,241,1)",
    },
    background: {
      main: "#1F2336",
      btnBg: "#313852",
      listItemBg: "#313852",
      inputBg: "#40405647",
      inputLabelBg: "#535b79",
    },
    text: {
      white: "#ffffff",
      semiWhite: "#b2b2b4",
      default: "#666D8D",
      placeholder: "#666D8D",
      selectedItem: "#5a5a5ab5",
      activeTab: "#ffffff",
      inputLabelColor: "#fff",
    },
    table: {
      borderColor: "#797FFF",
      headerBgColor: "#797FFF",
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  },
});

//For light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#829DB0",
      active: "#DFFE24",
      black: "#303030",
      white: "#FEFEFE",
      semiWhite: "#E9EEF2",
      semiBlue: "#C6CEE1",
      cardBg: "#9AB0BE",
      cardBg2: "#373737",
      border: "#E5E5E5",
      icon: "#45484E",
      grid: "#E5E5E5",
      grid2: "#4f4d4d"
    },
    secondary: {
      main: "#DBE5F2",
    },
    background: {
      main: "#829DB0",
      btnBg: "#313852",
      listItemBg: "#ffffff",
      inputBg: "#dedeef42",
      inputLabelBg: "#d3d9f2",
    },
    text: {
      white: "#ffffff",
      semiWhite: "#C6CEE1",
      default: "#000000",
     
      activeTab: "#DFFE24",
     
    },
    table: {
      borderColor: "#85858585",
      headerBgColor: "#797FFF",
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  },
});
