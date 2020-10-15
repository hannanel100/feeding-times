import React, { useContext, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import firebase from "firebase/app";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import DrawerLinks from "./DrawerLinks";
import { Hidden } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    marginBottom: "15px",
    alignContent: "center",
    justifyContent: "center",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `100%`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up("xl")]: {
      width: "1920px",
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
//adding something
export default function Navbar() {
  const theme = useTheme();

  const classes = useStyles();
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (booleanValue) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(booleanValue);
  };
  const handleLogout = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.push("/auth/login");
      });
    console.log(authContext.user);
  };
  const buttonsSignupLogout = authContext.user ? (
    <Button
      color="inherit"
      onClick={(e) => {
        handleLogout(e);
      }}
    >
      Logout
    </Button>
  ) : location.pathname === "/auth/login" ? (
    <Button
      color="inherit"
      onClick={() => {
        history.push("/auth/signup");
      }}
    >
      Sign Up
    </Button>
  ) : (
    <Button
      color="inherit"
      onClick={() => {
        history.push("/auth/login");
      }}
    >
      Login
    </Button>
  );
  let drawer;
  if (location.pathname === "/auth/login") {
    drawer = (
      <div className={classes.toolbar}>
        <DrawerLinks />
      </div>
    );
  } else if (location.pathname === "/auth/signup") {
    drawer = (
      <div className={classes.toolbar}>
        <DrawerLinks />
      </div>
    );
  } else {
    drawer = null;
  }
  console.log(drawer);
  // const drawer =
  //   location.pathname === "/auth/login" || "/auth/signup" ? null : (
  //     <div className={classes.toolbar}>
  //       <DrawerLinks />
  //     </div>
  //   );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>{" "}
          <Typography variant="h6" className={classes.title}>
            Feeding Times
          </Typography>
          {buttonsSignupLogout}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={isOpen}
            onClose={toggleDrawer(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}{" "}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
