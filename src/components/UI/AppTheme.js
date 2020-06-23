import { createMuiTheme } from "@material-ui/core/styles";

const red = "#ff3422"
const gold = "#835A00"
//const lightBlue = "#bdbdbd";
const darkBlue = "#628078";
export default createMuiTheme({
  palette: {
    common: {
      darkRed: `${red}`,
      darkGold: `${gold}`,
      darkBlue: `${darkBlue}`
    },
    primary: {
      main: `${red}`,
    },
    secondary: {
      main: `${gold}`,
    },
    darkBlue:{
      main: `${darkBlue}`
    }
  },
  typography: {

    tab:{
      fontFamily: 'Muli',
      textTransform: "none",
      fontWeight: 700,
      fontStyle: "italic",
      color: "white",
      fontSize: ".8rem",
      // minwidth: 25,
      marginLeft: "5px"
    },

    footerlink:{
      fontFamily: 'Muli',
      textTransform: "none",
      fontWeight: 700,
      fontStyle: "italic",
      color: "white",
      fontSize: "1rem",
      minwidth: 10,
      marginLeft: "25px"
    }

  },
});
