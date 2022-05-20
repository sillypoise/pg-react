import { useEffect, useState } from "react";

export default function UseEffectLifecycle() {
  const [count, setCount] = useState(0);

  function handleCountIncrement() {
    setCount(count + 1);
    setTimeout(() => {
      console.log(`RENDER: You clicked ${count} times`);
    }, 3000);
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(`EFFECT: You clicked ${count} times`);
    }, 3000);
  });
  return (
    <div>
      <h3>Understnading useEffect's lifecycle</h3>
      <p>
        <strong>COUNT:</strong> {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Click me by Effect</button>
      <button onClick={handleCountIncrement}>Click me by Render</button>
    </div>
  );
}
