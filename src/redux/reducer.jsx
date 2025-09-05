const initialState = {
  counter: 0,
  showCounter: true
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount
    };
  }

  if (action.type === "incrementBy2") {
    return {
      ...state,
      counter: state.counter + 2
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter
    };
  }

  return state;
};

export default counterReducer;
