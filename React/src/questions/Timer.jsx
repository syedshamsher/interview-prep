import React, { useState, useRef } from "react";

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = time % 60;
    return (
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0')
    );
  };

  return (
    <div>
      <h1 ref={intervalRef}>{formatTime(time)}</h1>
      {isRunning ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleStop}>Reset</button>
    </div>
  );
}


/*

Logic till MilliSeconds: 
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return (
      String(hours).padStart(2, '0') +
      ':' +
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0') + 
      ':' +
      String(milliseconds).padStart(2, '0')
    );
  };

  intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

*/