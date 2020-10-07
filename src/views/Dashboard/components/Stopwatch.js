import React, { useState, useEffect } from "react";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import formatTime from "../../../shared/utils/formatTime";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const StyledTimer = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: "30%",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
  },
}))(Typography);
const Stopwatch = ({ time }) => {
  const classes = useStyles();

  return (
    <>
      <div id="stopwatch" className={classes.container}>
        <StyledTimer variant="h2" className={classes.root}>
          {formatTime(time)}
        </StyledTimer>
      </div>
    </>
  );
};

export default Stopwatch;
