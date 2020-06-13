import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/SF.png"

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toobarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo:{
    
    height:"4em",
    padding: "0.5em"
  
  }
}));

const imgStyle = makeStyles({
  img: {
   
    height: 50,
    width: 50
   
  },
});

export default function Header(props) {
  const classes = useStyles();
  const imgClass = imgStyle();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters="false">
           <img src={logo} alt='logo' className={classes.logo}></img>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
}
