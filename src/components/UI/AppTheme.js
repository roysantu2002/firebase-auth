import { createMuiTheme } from "@material-ui/core/styles";

const lightBlue = "#7395AE";
const darkGery = "#5D5C61";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${lightBlue}`,
      grey: `${darkGery}`,
    },
    primary: {
      main: `${lightBlue}`,
    },
    secondary: {
      main: `${darkGery}`,
    },
  },
  typography: {
    h3: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
});
