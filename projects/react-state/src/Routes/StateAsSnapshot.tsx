import { useState } from "react";

export default function StateAsSnapshot() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <p>
        Notice that <code>number</code> only increments once per click
      </p>
    </>
  );
}
