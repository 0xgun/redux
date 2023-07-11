import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  reset,
  incrementBtAmount,
  decrementByamount,
} from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmt, setincrementAmt] = useState(0);
  const [decremenBy, setdecremenBy] = useState(0);
  const addValue = Number(incrementAmt) || 0;
  const decValue = Number(decremenBy) || 0;
  const resetAll = () => {
    setincrementAmt(0);
    setdecremenBy();
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmt}
        onChange={(e) => setincrementAmt(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementBtAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset All</button>
        <button onClick={() => dispatch(decrementByamount(decValue))}>
          Decrement By Amount
        </button>
      </div>
      <input
        type="text"
        value={decremenBy}
        onChange={(e) => setdecremenBy(e.target.value)}
      />
    </section>
  );
};

export default Counter;
