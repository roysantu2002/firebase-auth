import { createMuiTheme } from "@material-ui/core/styles";

const red = "#ff3422"
const gold = "#835A00"
//const lightBlue = "#bdbdbd";
const darkBlue = "#628078"

const appleGrey = "#999999"

export default createMuiTheme({
  palette: {
    common: {
      darkRed: `${red}`,
      darkGold: `${gold}`,
      darkBlue: `${darkBlue}`,
      appleGrey: `${appleGrey}`
    },
    primary: {
      main: `${red}`,
    },
    secondary: {
      main: `${gold}`,
    },
    darkBlue:{
      main: `${darkBlue}`
    },
    appleGrey: `${appleGrey}`
  },
  typography: {

    genericFont:{
      fontFamily: 'Muli',
      color: "white",
    },

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
    },
    h5:{
      fontFamily: 'Muli',
      fontWeight: 700,
      color: `${red}`,
      lineHeight: 1.5
    },
    h6:{
      fontFamily: 'Muli',
      fontWeight: 700,
      color: `${red}`,
      lineHeight: 1.5
    }

  },
});
