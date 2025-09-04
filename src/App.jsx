import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>Counter: {counter}</h1>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button onClick={() => dispatch(increment())} style={{width: "50px", marginLeft: "10px", background: "purple", border: "none", color: "white", fontWeight: "bold"}}>+</button>
      <p>Counter</p>
      <button onClick={() => dispatch(decrement())} style={{width: "50px", marginLeft: "10px", background: "purple", border: "none", color: "white", fontWeight: "bold"}}>-</button>
      </div>
    </div>
  );
}

export default App;
