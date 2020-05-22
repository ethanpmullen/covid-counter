import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    value !== 0 && setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  const handleInput = () => {
    let newNum = +prompt("What would you like to reset to?", "0");
    setValue(newNum);
  };

  return (
    <React.Fragment>
      <div class="counterWrapper">
        <button onClick={handleInput} id="currentCount">
          {value}
        </button>
      </div>
      <div class="buttonWrapper">
        <button
          onClick={handleDecrement}
          class="upAndDownButtons"
          id="downArrowToDecrement"
        >
          ⬇
        </button>
        <button onClick={handleReset} id="resetButton">
          Reset to 0
        </button>
        <button
          onClick={handleIncrement}
          class="upAndDownButtons"
          id="upArrowToIncrement"
        >
          ⬆
        </button>
      </div>
    </React.Fragment>
  );
}

export default Counter;
