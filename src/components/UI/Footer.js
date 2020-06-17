import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import adornment from "../../assets/adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adortnment: {
    width: "20em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "15em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "10em"
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img
        alt='afterschoolapps'
        src={adornment}
        className={classes.adortnment}
      />
    </footer>
  );
}
