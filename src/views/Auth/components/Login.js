import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import firebase from "../../../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../../AuthProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  button: {
    marginTop: "15px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        authContext.setUser(res);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          width="50%"
        >
          <TextField
            id="standard-basic"
            label="Email"
            type="text"
            name="email"
            value={values.email}
            placeholder="Enter your Email"
            onChange={handleChange}
          />

          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            name="password"
            value={values.password}
            placeholder="Enter your Password"
            onChange={handleChange}
          />

          <Button
            value="login"
            color="primary"
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Login
          </Button>
        </Grid>
      </form>
    </div>
  );
};
export default Login;
