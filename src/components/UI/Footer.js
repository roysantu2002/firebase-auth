import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import adornment from "../../assets/adornment.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adortnment: {
    width: "24em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  footerContainer: {
    position: "absolute",
  },
  footerLink: {
    color: theme.palette.common.grey,
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  gridItem: {
      margin: "3em"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justify='center' className={classes.footerContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.footerLink}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.footerLink}>
              Offered
            </Grid>
            <Grid item className={classes.footerLink}>
              Offered
            </Grid>
            <Grid item className={classes.footerLink}>
              Offered
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
          <Grid item className={classes.footerLink}>
            About Us
          </Grid>
        </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
          <Grid item className={classes.footerLink}>
            Contact Us
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      <img
        alt='afterschoolapps'
        src={adornment}
        className={classes.adortnment}
      />
    </footer>
  );
}
