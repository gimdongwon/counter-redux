import React from "react";

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <>
      <p>{number}</p>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
    </>
  );
};

export default Counter;
