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
  const [selected, setSelected] = useState("");
  const [color, setColor] = useState({ right: "primary", left: "primary" });
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(false);

  let className = "button";

  const clickHandler = (e) => {
    if (e.target.innerHTML === "Left") {
      props.side("Left");
      if (color.left === "primary" && color.right === "primary") {
        setColor({
          ...color,
          left: "secondary",
        });
        setRightDisabled(true);
        setSelected(e.target.innerHTML);
      } else {
        setColor({ ...color, left: "primary" });
        setRightDisabled(false);
      }
    } else {
      props.side("Right");
      if (color.right === "primary" && color.left === "primary") {
        setColor({
          right: "secondary",
          left: "primary",
        });
        setLeftDisabled(true);
        setSelected(e.target.innerHTML);
      } else {
        setColor({ ...color, right: "primary" });
        setLeftDisabled(false);
      }
    }
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
          props.timeClickHandler(!rightDisabled);
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
          props.timeClickHandler(!leftDisabled);
        }}
        disabled={rightDisabled}
      >
        Right
      </Button>
    </div>
  );
}

export default Buttons;
