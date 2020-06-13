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
    tab:{
        fontFamily: "",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
    }
  },
});
