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

const SignUp = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const history = useHistory();

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
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        authContext.setUser(userCredential);
        const db = firebase.firestore();
        db.collection("Users")
          .doc(userCredential.user ? userCredential.user.uid : null)
          .set({
            email: values.email,
            username: values.username,
            phone: values.phone,
          })
          .then(() => {
            console.log("ok");
            history.push("/dashboard");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          width="50%"
        >
          <TextField
            label="Username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <TextField
            label="Email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <Button
            value="signUp"
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Sign up
          </Button>
        </Grid>
      </form>
    </div>
  );
};
export default SignUp;
