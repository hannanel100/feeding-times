import { createMuiTheme } from "@material-ui/core/styles";

const font = "'Quicksand', sans-serif";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f27781",
    },
    secondary: {
      main: "#f2cf1d",
    },
  },
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
