import { useReducer } from "react";
import "./App.css";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Count {count.counter}</h1>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
