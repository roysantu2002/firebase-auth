import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/SF.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//Header elevator
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
} //end of header elevator

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
//tabs functoions
//Styles
const useStyles = makeStyles((theme) => ({
  toobarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "4em",
    padding: "0.5em",
  },
  logoContainer:{
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }

  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "10",
  },
}));

// const imgStyle = makeStyles({
//   img: {
//     height: 50,
//     width: 50,
//   },
// });

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/Coding" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/Writing" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='secondary'>
          <Toolbar disableGutters={false}>
            <Button className={classes.logoContainer} component={Link} to='/' onClick={() => setValue(0)}>
              <img src={logo} alt='logo' className={classes.logo}></img>
            </Button>

            <Tabs
              color='primary'
              value={value}
              onChange={handleChange}
              variant='scrollable'
              scrollButtons='on'
              indicatorColor='primary'
              textColor='primary'
              aria-label='scrollable force tabs example'
            >
              <Tab
                label='Item One'
                component={Link}
                to='/'
                icon={<PhoneIcon />}
                {...a11yProps(0)}
              />
              <Tab
                label='Item Two'
                to='/Coding'
                component={Link}
                icon={<FavoriteIcon />}
                {...a11yProps(1)}
              />
              <Tab
                label='Item Three'
                to='/Writing'
                component={Link}
                icon={<PersonPinIcon />}
                {...a11yProps(2)}
              />
              <Tab
                label='Item Four'
                to='/Filmmaking'
                component={Link}
                icon={<HelpIcon />}
                {...a11yProps(3)}
              />
              <Tab
                label='Item Five'
                to='/Robotics'
                component={Link}
                icon={<ShoppingBasket />}
                {...a11yProps(4)}
              />
              <Tab
                label='Item Six'
                to='/AppMaking'
                component={Link}
                icon={<ThumbDown />}
                {...a11yProps(5)}
              />
              <Tab
                label='Item Seven'
                to='/Baking'
                component={Link}
                icon={<ThumbUp />}
                {...a11yProps(6)}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
}
