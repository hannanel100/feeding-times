import React, { useState, useEffect } from "react";
import * as dayjs from "dayjs";

import { Buttons, MyTable } from "../../../shared/components/index";

const Dashboard = () => {
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
      <h1>Dashboard</h1>
      <h2>Welcome to Dashboard!</h2>

      <Buttons
        side={(chosenSide) => setSide(chosenSide)}
        timeClickHandler={(isStartTime) => clickHandler(isStartTime)}
      />
      <MyTable timeArray={endTime ? timeArray : null} />
    </>
  );
};

export default Dashboard;
