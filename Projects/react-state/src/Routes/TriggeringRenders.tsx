import { ChangeEvent, FormEvent, useState } from "react";

// EXPLORE HOW WE CAN TRIGGER STATE UPDATES BASED ON HUMAN AND COMPUTER INPUTS

export default function TriggeringRenders() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState("typing");

  // UPDATING STATE BASED ON HUMAN & COMPUTER INPUTS (BUTTON PRESS & NETWORK RESPONSES)
  async function handleSubmit(e: FormEvent) {
    // SET STATE BASED ON HUMAN INPUTS (BUTTON PRESS)
    e.preventDefault();
    setStatus("submitting");
    // SET STATE BASED ON COMPUTER INPUTS (NETWORK RESPONSE)
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      if (err instanceof Error) {
        setError(err);
      }
    }
  }

  // UPDATING STATE BASED ON HUMAN INPUT (TEXT INPUT)
  function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (typeof e.target.value !== "string") return;
    setAnswer(e.target.value);
  }

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  return (
    <>
      <h2>Space quiz</h2>
      <p>Q: Which is the hottest planet in our galaxy?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit your answer!
        </button>
        {status === "submitting" && <p>⏰⏰⏰</p>}
        {error !== null && <p>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer: string): Promise<void | string> {
  // PRETEND IT'S HITTING THE NETWORK.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "venus";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
