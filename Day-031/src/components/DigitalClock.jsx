import { useState, useEffect } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h2>🕒 Digital Clock</h2>
      <p className="clock">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default DigitalClock;
