type DeclarativeStateProps = {
  status: "empty" | "typing" | "submitting" | "success" | "error";
};

export default function DeclarativeState({
  status = "empty",
}: DeclarativeStateProps) {
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  return (
    <>
      <h2>Space quiz</h2>
      <p>Q: Which is the hottest planet in our galaxy?</p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit your answer!
        </button>
        {status === "error" && <p>Good guess but wrong answer. Try again!</p>}
      </form>
    </>
  );
}
