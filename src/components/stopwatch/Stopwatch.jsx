import React, { useState, useEffect } from "react";
import {Timer} from "./Timer";
import "./stopwatch.css";

const Stopwatch = ({isRunning, time, setTime}) => {
  // state to store time
  //const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  // const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // const hours = Math.floor(time / 360000);
  // const minutes = Math.floor((time % 360000) / 6000);
  // const seconds = Math.floor((time % 6000) / 100);
  // const milliseconds = time % 100;

  // Method to start and stop timer
  //  const startAndStop = () => {
  //  setIsRunning(!isRunning);
  //  };

  // Method to reset timer back to 0
  //const reset = () => {
  //  setTime(0);
  //};
  return (
    <Timer time = {time}/>
    // <div className="stopwatch-container">
    //   <p className="stopwatch-time">
    //     {hours}:{minutes.toString().padStart(2, "0")}:
    //     {seconds.toString().padStart(2, "0")}:
    //     {milliseconds.toString().padStart(2, "0")}
    //   </p>
    // </div>
  );
};

export default Stopwatch;