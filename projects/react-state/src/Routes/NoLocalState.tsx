export default function NoLocalState() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  return (
    <div>
      <p>{`The value of this variable: ${index}`}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Will be 0 every render</p>
    </div>
  );
}
