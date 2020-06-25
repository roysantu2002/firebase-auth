import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../../animation/Onlinework.json";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CustomButton from "./Button/CustomButton";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
  joinus: {
    ...theme.typography.genericFont,
    borderRadius: 50,
    width: 145,
    height: 45,
    marginRight: 40,
    fontSize: "1rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item>
            <Typography variant='h5' align='center'>
              “Don’t wait. The time will never be just right.”
            </Typography>
            <Typography variant='h6' align='center'>
              – Napoleon Hill
            </Typography>
            <Grid container justify="center">
              <Grid item>
                <CustomButton className={classes.joinus}>Join Us</CustomButton>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
