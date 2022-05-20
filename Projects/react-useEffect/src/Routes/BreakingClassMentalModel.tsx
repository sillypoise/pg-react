import { useEffect, useState } from "react";

export function BreakingClassMentalModel() {
  return (
    <>
      <LyingAboutDependencies />
      <TruthfulDependencies />
    </>
  );
}

function LyingAboutDependencies() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
    // EMPTY DEPENDENCY ARRAY, LYING ABOUT COUNT VARIABLE
  }, []);

  return (
    <>
      <h2>Lying about dependencies</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change count</button>
    </>
  );
}

function TruthfulDependencies() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
    // BELOW WE TELL REACT OUR EFFECT USES COUNT, SO PEEK ITS VALUE TO SEE DIFF
  }, [count]);

  return (
    <>
      <h2>Truthful about dependencies</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change count</button>
    </>
  );
}
