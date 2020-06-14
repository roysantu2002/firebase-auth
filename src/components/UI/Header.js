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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "4em",
    [theme.breakpoints.down("md")]: {
      height: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "1em",
    },
    padding: "0.5em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "100",
  },
  menu: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
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
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const manuOptions = [
    { name: "Offered", Link: "/Offered" },
    { name: "Writing", Link: "Writing" },
    { name: "Robotics", Link: "Robotics" },
  ];

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/Coding" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/Writing" && value !== 2) {
    //   setValue(2);
    // }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/Offered":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/Writing":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/Robotics":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/About":
        if (value !== 2) {
          setValue(2);
          // setSelectedIndex(1)
        }
        break;
      case "/Contact":
        if (value !== 3) {
          setValue(3);
          // setSelectedIndex(2)
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
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
          label='Home'
          component={Link}
          to='/'
          icon={<PhoneIcon />}
          {...a11yProps(0)}
        />
        <Tab
          aria-owns={anchorEl ? "We offer" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          label='Offered'
          to='/Offered'
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          icon={<FavoriteIcon />}
          {...a11yProps(1)}
        />
        <Tab
          label='About'
          to='/About'
          component={Link}
          icon={<PersonPinIcon />}
          {...a11yProps(2)}
        />
        <Tab
          label='Contact'
          to='/Contact'
          component={Link}
          icon={<HelpIcon />}
          {...a11yProps(3)}
        />
        {/* <Tab
                label='Item Five'
                component={Link}
                to='/Robotics'
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
              /> */}
      </Tabs>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {manuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.Link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
        {/* <MenuItem onClick={() => {handleClose(); setValue(1)}}  component={Link}
                to='/Offered' classes={{root: classes.menuItem}}>Offered</MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(1)}}  component={Link}
                to='/Robotics' classes={{root: classes.menuItem}}>Robotics</MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(1)}}  component={Link}
                to='/AppMaking' classes={{root: classes.menuItem}}>AppMaking</MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(1)}}  component={Link}
                to='/Baking' classes={{root: classes.menuItem}}>Baking</MenuItem> */}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        First Drawer
      </SwipeableDrawer>
      <IconButton color='secondary' onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' >
          <Toolbar disableGutters={false}>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to='/'
              onClick={() => setValue(0)}
            >
              <img src={logo} alt='logo' className={classes.logo}></img>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
}
