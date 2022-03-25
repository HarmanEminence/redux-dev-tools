import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/reducer/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  console.log(value);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />{" "}
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />{" "}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
