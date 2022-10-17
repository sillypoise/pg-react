import { useState } from "react";

export default function BasicUseState() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <div>
      <p>{`The value of this variable: ${index}`}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Will increment every new render</p>
    </div>
  );
}
