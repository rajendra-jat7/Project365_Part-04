import Stopwatch from "./components/Stopwatch";
import DigitalClock from "./components/DigitalCLock";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>⏰ Digital Clock & Stopwatch</h1>
      <DigitalClock />
      <Stopwatch />
    </div>
  );
}

export default App;
