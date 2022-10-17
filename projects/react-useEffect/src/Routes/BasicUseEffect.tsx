import { useEffect, useState } from "react";

export default function BasicUseEffect() {
  const [data, setData]: any = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h3>Basic useEffect usage</h3>
      <p>We will fetch some data and display it:</p>
      <p>
        <strong>Todo title:</strong> {data.title}
      </p>
      <p>
        <strong>Todo id:</strong> {data.id}
      </p>
      <p>
        <strong>Todo state:</strong> {data.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}
