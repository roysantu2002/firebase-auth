import React from "react";
import Lottie from "react-lottie"
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../../animation/Onlinework.json"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({}));

export default function LandingPage() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (

    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <div> Shape your dream</div>
          </Grid>
          <Grid item>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> 
          </Grid>
        </Grid>

      </Grid>

    </Grid>


  
     


  );
}
