import { INCREMENT, DECREMENT, INCREMENTBY2, DECREMENTBY2 } from "./actionTypes";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementBy2 = () => ({ type: INCREMENTBY2 });
export const decrementBy2 = () => ({ type: DECREMENTBY2 });
