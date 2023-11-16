import { useState } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  const [showStopwatch, setShowStopwatch] = useState(false);

  const onShowStopwatch = () => {
    setShowStopwatch(true);
  };

  return (
    <>
      {showStopwatch && <Stopwatch />}
      <button onClick={onShowStopwatch}>Play</button>
      <form>
        <label for="fname">Your answer:</label>
        <input type="text" id="answer" name="answer" />
      </form>
      <button>Confirm</button>
    </>
  );
}

export default App;
