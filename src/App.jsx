import { useState } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  const [showStopwatch, setShowStopwatch] = useState(false);

  const onShowStopwatch = () => {
    setShowStopwatch(true);
  }

  return (
    <>
      {showStopwatch && <Stopwatch />}
      <button onClick={onShowStopwatch}>Play</button>
    </>
  );
}

export default App;
