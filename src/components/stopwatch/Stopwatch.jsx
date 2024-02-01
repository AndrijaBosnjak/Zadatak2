import React, { useEffect } from "react";
import { Timer } from "./Timer";
import "./stopwatch.css";

const Stopwatch = ({ isRunning, time, setTime }) => {
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  return <Timer time={time} />;
};

export default Stopwatch;
