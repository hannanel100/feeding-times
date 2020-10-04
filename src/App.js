import React, { useState, useEffect } from "react";
import * as dayjs from "dayjs";

import Buttons from "./Buttons";
import "./App.css";
import MyTable from "./MyTable";
import Navbar from "./Navbar";

function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [side, setSide] = useState("");
  const [timeArray, setTimeArray] = useState([]);
  const clickHandler = (isStartTime) => {
    // console.log(today.format("DD/MM/YYYY - HH:mm:ss"));
    if (isStartTime) {
      let start = dayjs();
      setStartTime(start);
    } else {
      let end = dayjs(new Date());
      setEndTime(end);
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
      <Navbar className="navbar" />
      <Buttons
        side={(chosenSide) => setSide(chosenSide)}
        timeClickHandler={(isStartTime) => clickHandler(isStartTime)}
      />
      <MyTable timeArray={endTime ? timeArray : null} />
    </>
  );
}

export default App;
