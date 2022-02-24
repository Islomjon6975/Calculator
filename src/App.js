import Calculator from "./components/Calculator";
import { useState } from "react";


function App() {
  const [showCalc, setShowCalc] = useState(false)
  return (
    <>
            <button className="btn" onClick={() => setShowCalc(!showCalc)}>Show Calc</button>
            {showCalc ? <Calculator /> : null}

        </>
  );
}

export default App;
