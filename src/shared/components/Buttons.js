import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import "./Buttons.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  button: {
    margin: "15px",
  },
}));

function Buttons(props) {
  const classes = useStyles();
  const [color, setColor] = useState({ right: "primary", left: "primary" });
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(false);

  const clickHandler = (e) => {
    if (color.left === "primary" && color.right === "primary") {
      props.isStartTime(false);
      if (e.currentTarget.value === "left") {
        setRightDisabled(true);
        setColor((prevState) => {
          return { ...prevState, left: "secondary" };
        });
        props.side("Left");
      } else {
        setLeftDisabled(true);
        setColor((prevState) => {
          return { ...prevState, right: "secondary" };
        });
        props.side("Right");
      }
    } else {
      props.isStartTime(true);
      if (e.currentTarget.value === "left") {
        setRightDisabled(false);
        setColor((prevState) => {
          return { ...prevState, left: "primary" };
        });
      } else {
        setLeftDisabled(false);
        setColor((prevState) => {
          return { ...prevState, right: "primary" };
        });
      }
    }
    props.timeClickHandler();
  };

  return (
    <div>
      <Button
        value="left"
        variant="contained"
        color={color.left}
        className={classes.button}
        onClick={(e) => {
          clickHandler(e);
        }}
        disabled={leftDisabled}
      >
        Left
      </Button>
      <Button
        value="right"
        variant="contained"
        color={color.right}
        className={classes.button}
        onClick={(e) => {
          clickHandler(e);
        }}
        disabled={rightDisabled}
      >
        Right
      </Button>
    </div>
  );
}

export default Buttons;
