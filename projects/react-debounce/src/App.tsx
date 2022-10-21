import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { api } from "./api";

function App() {
    let [people, setPeople] = useState<
        Array<{ id: number; name: string; age: number }>
    >([]);
    let [query, setQuery] = useState("");

    useEffect(() => {
        api.list().then((data) => {
            setPeople(data);
        });
    }, []);

    return (
        <main className="mlb-l">
            <article className="center [--center-width:theme(contentWidth.3)] stack">
                <h1 className="text-3">React Debounce</h1>
                <p>What is it good for?</p>
                <p>
                    Let's you wait until a rapidly changing value is committed,
                    i.e. stops changing for a given amount of time, for you to
                    then do whatever you want with it. In React's context that
                    means, wait until a value is determined before trigerring a
                    re-render, e.g. setting a state value.
                </p>
                <p>
                    In this example we will debounce our <code>query</code>{" "}
                    state value so as to not cause a re-render every single
                    input. Also we are calling a mock API, this prevents us from
                    calling that API as often. The API call will still run every
                    time <code>query</code> changes, it's just that we will
                    control how often that state changes with our debouncer
                </p>
                <input
                    type="text"
                    name=""
                    id="text"
                    placeholder="Writing here will trigger a re-render every time"
                    onChange={(e) => setQuery(e.target.value)}
                    className="ring-4"
                />
                <p>{JSON.stringify(console.count("rendering"))}</p>
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
