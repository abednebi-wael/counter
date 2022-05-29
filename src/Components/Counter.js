import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/CounterSlice";

export default function Counter() {
 
  const {value} = useSelector(state  => state.Counter)
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1> Counter </h1>
      <p> {value} </p>
      <button onClick={handleInc}> increment</button>
      <button onClick={handleDec}> decrement</button>
    </div>
  );
}
