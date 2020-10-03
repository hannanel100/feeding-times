import React, { useState } from "react";
import * as dayjs from "dayjs";
import Buttons from "./Buttons";
import "./App.css";
import MyTable from "./MyTable";

function App() {
  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});
  const [timeArray, setTimeArray] = useState([]);
  const clickHandler = (isStartTime) => {
    // console.log(today.format("DD/MM/YYYY - HH:mm:ss"));
    if (isStartTime) {
      let start = dayjs();
      console.log(`start: ${start}`);
      setStartTime(start);
    } else {
      let end = dayjs(new Date());
      console.log(`end: ${end}`);
      setEndTime(end);
      setTimeArray([
        ...timeArray,
        // createData(
        //   "right",
        //   startTime,
        //   endTime,
        //   dayjs(endTime).diff(dayjs(startTime), "ms")
        // ),
        {
          side: "right",
          start: startTime,
          end: endTime,
          elapsed: dayjs(startTime).diff(dayjs(endTime), "ms"),
        },
      ]);
      console.log(`time Array: ${timeArray}`);
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
