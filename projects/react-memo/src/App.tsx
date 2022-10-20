import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
    const [people, setPeople] = useState<
        Array<{ id: number; name: string; age: number }>
    >([]);

    useEffect(() => {
        api.list().then((data) => setPeople(data));
    }, [people]);

    return (
        <main className="mlb-l">
            <article className="center stack">
                <h1 className="text-3">React memo</h1>
                <p>What is it good for?</p>
                <hr />
                <ul role="list" className="auto-grid">
                    {people.map((person) => (
                        <li
                            key={person.id}
                            className="box p-s cluster justify-between rounded-md"
                        >
                            <p className="font-semibold">{person.name}</p>
                            <p>{person.age}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </main>
    );
}

export default App;
