import React from "react";
import { Link } from "react-router-dom";
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
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justify='center' className={classes.footerContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.footerLink}
              component={Link}
              onClick={() => props.setValue(0)}
              to='/'
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.footerLink}
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
              to='/Offered'
            >
              Offered
            </Grid>
            <Grid
              item
              className={classes.footerLink}
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              to='/Writing'
            >
              Writing
            </Grid>
            <Grid
              item
              className={classes.footerLink}
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
              to='/Robotics'
            >
              Robotics
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.footerLink}
              component={Link}
              onClick={() => props.setValue(2)}
              to='/About'
            >
              About Us
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.footerLink}
              component={Link}
              onClick={() => props.setValue(3)}
              to='/Contact'
            >
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
