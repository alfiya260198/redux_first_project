import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const incrementBy2Handler = () => {
    dispatch({ type: "incrementBy2" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      {show && <div style={{ fontSize: "2rem", margin: "20px" }}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={incrementBy2Handler}>Increment By 2</button>
      <button onClick={increaseHandler}>Increase By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
