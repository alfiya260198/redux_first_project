import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  return (
    <main className="counter">
      <h2>Redux Counter</h2>
      {show && <div className="value">{counter}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
        <button onClick={() => dispatch(counterActions.increase(10))}>Increase by 10</button>
        <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
      </div>
      <button onClick={() => dispatch(counterActions.toggleCounter())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
