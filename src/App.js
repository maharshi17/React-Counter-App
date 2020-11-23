import React, { useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import "./App.css";
import { red } from "@material-ui/core/colors";

function App() {

  const [count, setCount] = useState(0);

  const increment_count = () => {
    setCount(count + 1);
  }

  const decrement_count = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const reset_count = () => {
    setCount(0);
  }

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="main">
            <h1>Counter App</h1>
            <div className="main_wrapper">
              <button className="btn decrement_btn" title="Decrement" onClick={decrement_count}><Remove style={{ fontSize: 50 }} /></button>
              <div className="count_label">{count}</div>
              <button className="btn increment_btn" title="Increment" onClick={increment_count}><Add style={{ fontSize: 50 }} /></button>
            </div>
            <div>
              <button className="reset_btn" title="Reset" onClick={reset_count}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;