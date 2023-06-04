"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/reducer";
import type { RootState } from "../store/store";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "counter/incrementAsync" })}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
