import React, { memo, useEffect, useState } from "react";
import { api } from "./api";

let RandomPerson = memo(function RandomPerson() {
    const [people, setPeople] = useState<
        Array<{ id: number; name: string; age: number }>
    >([]);

    useEffect(() => {
        api.list().then((data) => setPeople(data));
    }, []);

    return (
        <article className="stack [--stack-gap:theme(spacing.xs)] mbs-m | debug">
            <p>
                This component won't re-render every time <code>App</code>{" "}
                re-renders because it has been memoized. We control the
                rendering of this component now thanks to{" "}
                <code>React.memo</code>
            </p>
            <ul role="list" className="auto-grid">
                {[...people]
                    .sort(() => (Math.random() > 0.5 ? 1 : -1))
                    .slice(0, 2)
                    .map((person) => (
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
    );
});

function App() {
    let [people, setPeople] = useState<
        Array<{ id: number; name: string; age: number }>
    >([]);
    let [query, setQuery] = useState("");
    let [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        api.list().then((data) => {
            setPeople(data);
        });
    }, []);

    useEffect(() => {
        setRenderCount((count) => count + 1);
    }, [query]);

    return (
        <main className="mlb-l">
            <article className="center [--center-width:theme(contentWidth.3)] stack">
                <h1 className="text-3">React memo</h1>
                <p>What is it good for?</p>
                <p>
                    Prevents a component from re-rending when its props are
                    unchanged, even if the parent component re-renders
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
                <p>Render count: {renderCount}</p>
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
                {/* <MemoizedComp /> */}
                <RandomPerson />
            </article>
        </main>
    );
}

export default App;
