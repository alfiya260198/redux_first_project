import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy2, decrementBy2 } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementBy2())}>+2</button>
      <button onClick={() => dispatch(decrementBy2())}>-2</button>
    </div>
  );
}

export default App;
