import React from "react";
import Lottie from "react-lottie"
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../../animation/Onlinework.json"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button';

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
        <Grid container justify="flex-end" alignItem="center" direction="row">
          <Grid item>
            <div> Shape your dream</div>
            <Grid container>
              <Grid item>
                <Button variant="contained"> Join Our Community</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> 
          </Grid>
        </Grid>

      </Grid>

    </Grid>


  
     


  );
}
