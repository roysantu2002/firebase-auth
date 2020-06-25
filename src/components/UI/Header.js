import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import logo from "../../assets/asap.svg";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { TextareaAutosize } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CustomButton from "./Button/CustomButton";

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
      role="tabpanel"
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
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "7em",
    // width: "15em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
      marginLeft: "-1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
    padding: ".25em",
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
  },
  menu: {
    backgroundColor: theme.palette.common.darkRed,
    //color: theme.palette.common.blue,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "30px",
    width: "30px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.grey,
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  button: {
    ...theme.typography.genericFont,
    margin: theme.spacing.unit,
    borderRadius: 50,
    width: 110,
    textTransform: "none",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    fontSize: ".8rem",

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

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Learn", link: "/Learn", activeIndex: 2, selectedIndex: 0 },
    { name: "Writing", link: "/Writing", activeIndex: 2, selectedIndex: 1 },
    { name: "Robotics", link: "/Robotics", activeIndex: 2, selectedIndex: 2 },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon />,
      activeIndex: 0,
    },
    {
      name: "Who",
      link: "/Who",
      icon: <HelpIcon />,
      activeIndex: 1,
    },
    {
      name: "Learn",
      link: "/Learn",
      icon: <ThumbUp />,
      activeIndex: 2,
      ariaOwns: anchorEl ? "learn-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      onMouseOver: (event) => handleClick(event),
    },
    {
      name: "About Us",
      icon: <InfoIcon />,
      link: "/About",
      activeIndex: 3,
    },
    {
      name: "Contact Us",
      link: "/Contact",
      icon: <PhoneIcon />,
      activeIndex: 4,
    },
  ];
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          console.log(route.name);
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment sm>
      <Tabs
        className={classes.tabContainer}
        color="secondary"
        value={props.value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        //textColor='darkBlue'
        aria-label="scrollable force tabs example"
      >
        {routes.map((route, index) => (
          <Tab
            className={classes.tab}
            key={`${route}${index}`}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaowns}
            aria-haspopup={route.ariahaspopup}
            icon={route.icon}
            onMouseOver={route.onMouseOver}
            {...a11yProps(route.index)}
          />
        ))}
      </Tabs>

      <Button
        component={Link}
        href="/login"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        SIGN UP
      </Button>

      <Menu
        id="learn-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(2);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 2}
          >
            {option.name}
          </MenuItem>
        ))}
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
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toobarMargin} />
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={props.value === 0}
            classes={{ selecte: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(1);
            }}
            divider
            button
            component={Link}
            to="/Who"
            selected={props.value === 1}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Who
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(2);
            }}
            divider
            button
            component={Link}
            to="/Learn"
            selected={props.value === 2}
          >
            <ListItemText
              className={
                props.value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItemSelected
              }
              disableTypography
            >
              Learn
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(3);
            }}
            divider
            button
            component={Link}
            to="/About"
            selected={props.value === 3}
          >
            <ListItemText
              className={
                props.value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItemSelected
              }
              disableTypography
            >
              About
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(4);
            }}
            divider
            button
            component={Link}
            to="/Contact"
            selected={props.value === 4}
          >
            <ListItemText
              className={
                props.value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItemSelected
              }
              disableTypography
            >
              Contact
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        className={classes.drawerIconContainer}
        color="secondary"
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters={false}>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
            >
              <img src="/static/assets/asap.svg" alt="logo" className={classes.logo}></img>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toobarMargin} />
    </React.Fragment>
  );
}
