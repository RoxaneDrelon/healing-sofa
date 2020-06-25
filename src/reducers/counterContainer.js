import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CounterComponent = () => {
  const counter = useSelector((state) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <p>This a second container </p>
      <button onClick={() => dispatch({ type: "ADD1" })}>ADD1</button>
      <button onClick={() => dispatch({ type: "REMOVE1" })}>REMOVE1</button>
      <button onClick={() => dispatch({ type: "ADD10" })}>ADD10</button>
      <button onClick={() => dispatch({ type: "REMOVE10" })}>REMOVE10</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default CounterComponent;
