import { createMuiTheme } from "@material-ui/core/styles";

const lightBlue = "#fafafa"
//const lightBlue = "#bdbdbd";
const darkGery = "#00000f";
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
      fontFamily: 'Cabin',
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      minwidth: 10,
      marginLeft: "25px"
    }

  },
});
