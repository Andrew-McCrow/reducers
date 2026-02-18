import { useReducer } from "react";
import reducer from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Counter Example</h1>

      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "decremented_count" })}>−</button>

      <button onClick={() => dispatch({ type: "incremented_count" })}>+</button>

      <button onClick={() => dispatch({ type: "set_count", value: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
