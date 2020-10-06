import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import firebase from "firebase/app";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "15px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const location = useLocation();
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
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Feeding Times
          </Typography>
          {buttonsSignupLogout}
        </Toolbar>
      </AppBar>
    </div>
  );
}
