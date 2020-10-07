import React, { useState } from "react";
import * as dayjs from "dayjs";

const Stopwatch = () => {
  const [isStart, setIsStart] = useState(false);
  const [start, setStart] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const dayjs = dayjs();
  return (
    <>
      <div id="stopwatch">
        <span id="hours">:</span>
        <span id="minutes">:</span>
        <span id="seconds"></span>
      </div>
    </>
  );
};

export default Stopwatch;
