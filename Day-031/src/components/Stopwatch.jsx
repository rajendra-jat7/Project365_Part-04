import { useState, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h2>⏱ Stopwatch</h2>
      <p className="stopwatch-time">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <div className="buttons">
        <button onClick={startStopwatch} disabled={running}>Start</button>
        <button onClick={stopStopwatch} disabled={!running}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
