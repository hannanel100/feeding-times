import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Buttons.css";

function Buttons(props) {
  const [selected, setSelected] = useState("");
  const [color, setColor] = useState({ right: "primary", left: "primary" });
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(false);

  let className = "button";

  const clickHandler = (e) => {
    if (e.target.innerHTML === "Left") {
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
        className={className}
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
        className={className}
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
