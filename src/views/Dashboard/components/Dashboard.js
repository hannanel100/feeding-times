import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";

import * as dayjs from "dayjs";

import { Buttons, MyTable } from "../../../shared/components/index";
import Stopwatch from "./Stopwatch";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  primaryBg: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryBg: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Dashboard = () => {
  const classes = useStyles();

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [side, setSide] = useState("");
  const [timeArray, setTimeArray] = useState([]);
  const [timer, setTimer] = useState(0);
  const [bgColor, setBgColor] = useState(classes.primaryBg);
  const [buttonActive, setButtonActive] = useState(true);
  const [isStartTime, setIsStartTime] = useState(true);
  const countRef = useRef(null);
  const MILLISECONDS_IN_SECOND = 1000;

  const clickHandler = () => {
    // console.log(today.format("DD/MM/YYYY - HH:mm:ss"));
    console.log(`isStartTime: ${isStartTime}`);
    if (isStartTime) {
      let start = dayjs();
      setStartTime(start);
      setBgColor(classes.secondaryBg);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, MILLISECONDS_IN_SECOND);
      setButtonActive(false);
    } else {
      let end = dayjs(new Date());
      setEndTime(end);
      setBgColor(classes.primaryBg);
      setTimer(0);
      clearInterval(countRef.current);
      setButtonActive(true);
    }
  };
  useEffect(() => {
    if (endTime) {
      setTimeArray([
        ...timeArray,
        createData(
          side,
          startTime,
          endTime,
          dayjs(endTime).diff(dayjs(startTime), "ms")
        ),
      ]);
    }
  }, [endTime]);
  const createData = (side, start, end, elapsed) => {
    return { side, start, end, elapsed };
  };
  return (
    <>
      <h2>Timer</h2>
      <Stopwatch time={timer} bgColor={bgColor} />
      <Buttons
        side={(chosenSide) => setSide(chosenSide)}
        isStartTime={(isStartTime) => setIsStartTime(isStartTime)}
        timeClickHandler={() => clickHandler()}
      />
      <MyTable
        timeArray={buttonActive || timeArray.length > 0 ? timeArray : null}
      />
    </>
  );
};

export default Dashboard;
