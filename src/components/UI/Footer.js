import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import adornment from "../../assets/adornment.svg"
import facebook from "../../assets/facebook.svg"
import Grid from "@material-ui/core/Grid"
import Hidden from '@material-ui/core/Hidden'

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
  icon:{
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
    },
  },
  socialIcon: {
    color: theme.palette.common.grey,
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
      marginTop: "-5em",
    },
    

  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
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
      </Hidden>
      <img
        alt='afterschoolapps'
        src={adornment}
        className={classes.adortnment}
      />
      <Grid container justify="flex-end" spacing={2} className={classes.socialIcon}>
        <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank"> 
          <img src={facebook} alt='facebook' className={classes.icon}></img>
        </Grid>
      </Grid>
     
    </footer>
  );
}
