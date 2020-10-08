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
    width: "30%",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
}))(Typography);
const Stopwatch = ({ time, bgColor }) => {
  const classes = useStyles(time);
  return (
    <>
      <div id="stopwatch" className={classes.container}>
        <StyledTimer variant="h2" className={(classes.root, bgColor)}>
          {formatTime(time)}
        </StyledTimer>
      </div>
    </>
  );
};

export default Stopwatch;
