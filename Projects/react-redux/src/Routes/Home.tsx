import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <article className="stack">
      <h2>Home Example</h2>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
    </article>
  );
}
