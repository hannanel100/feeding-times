import React, { useState } from "react";
import * as dayjs from "dayjs";
import Buttons from "./Buttons";
import "./App.css";
import MyTable from "./MyTable";

function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeArray, setTimeArray] = useState([]);
  const clickHandler = (isStartTime) => {
    console.log(isStartTime);
    const today = dayjs();
    console.log(today.format("DD/MM/YYYY - HH:mm:ss"));
    if (isStartTime) {
      setStartTime(today);
    } else {
      setEndTime(today);
      console.log(typeof endTime);
      setTimeArray([
        ...timeArray,
        createData("right", startTime, endTime, endTime.diff(startTime, "m")),
      ]);
    }
  };
  const createData = (side, start, end, elapsed) => {
    return { side, start, end, elapsed };
  };
  return (
    <>
      <Buttons timeClickHandler={(isStartTime) => clickHandler(isStartTime)} />
      <MyTable />
    </>
  );
}

export default App;
