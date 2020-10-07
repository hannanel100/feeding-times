import React, { useState, useEffect, useRef } from "react";
import * as dayjs from "dayjs";

import { Buttons, MyTable } from "../../../shared/components/index";
import Stopwatch from "./Stopwatch";

const Dashboard = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [side, setSide] = useState("");
  const [timeArray, setTimeArray] = useState([]);
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);
  const clickHandler = (isStartTime) => {
    // console.log(today.format("DD/MM/YYYY - HH:mm:ss"));
    if (isStartTime) {
      let start = dayjs();
      setStartTime(start);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      let end = dayjs(new Date());
      setEndTime(end);
      setTimer(0);
      clearInterval(countRef.current);
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
      <Stopwatch time={timer} />
      <Buttons
        side={(chosenSide) => setSide(chosenSide)}
        timeClickHandler={(isStartTime) => clickHandler(isStartTime)}
      />
      <MyTable timeArray={endTime ? timeArray : null} />
    </>
  );
};

export default Dashboard;
