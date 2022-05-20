import { useAppDistpatch, useAppSelector } from "../app/hooks";
import { decrement, increment, reset } from "../features/counter/counterSlice";

export function CounterExample() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDistpatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset(0));
  }

  return (
    <>
      <h2>Counter Example</h2>
      <h3>Your count is: {count}</h3>

      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}> Decrement</button>

      <br />

      <button onClick={handleReset}>Reset Counter</button>
    </>
  );
}
