import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../../animation/Onlinework.json";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  animation:{
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%"
  }
  
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
    <Grid container direction="column">
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h5" align="center">“Don’t wait. The time will never be just right.”</Typography>
            <Typography variant="h6" align="center"> – Napoleon Hill</Typography>
            <Grid container>
              <Grid item alignItems="center">
                <Button variant="contained"> Join Our Community</Button>
              </Grid>
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
