import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  decremented,
  amountAdded,
  reset,
} from "./features/counter/counterSlice";
function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(incremented());
  }
  function handleClickedde() {
    dispatch(decremented());
  }
  function reset1() {
    dispatch(reset());
  }
  function increaseAmt() {
    dispatch(amountAdded(5));
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleClickedde}>Decrement</button>
        <br></br>
        <button onClick={reset1}>Reset</button>
        <br />
        <input type="number" onChange={increaseAmt} />
        <button onClick={increaseAmt}>Increase by</button>
        {/* <p>
          <button onClick={handleClick}>count is: {count}</button>
        </p> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
