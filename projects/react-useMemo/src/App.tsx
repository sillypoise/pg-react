import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { api } from "./api";

function App() {
    let [people, setPeople] = useState<
        Array<{ id: number; name: string; age: number }>
    >([]);
    let [query, setQuery] = useState("");
    let [renderCount, setRenderCount] = useState(0);
    let [sortOption, setSortOption] = useState("name");

    useEffect(() => {
        api.list().then((data) => {
            setPeople(data);
        });
    }, []);

    useEffect(() => {
        setRenderCount((count) => count + 1);
    }, [query]);

    function sortData(
        people: Array<{ id: number; name: string; age: number }>
    ) {
        console.count("Running sortData! 🏃");
        console.log("sorting by" + ` ${sortOption}`);
        if (sortOption === "name") {
            let sortedByName = [...people].sort((a, b) =>
                new Intl.Collator("es").compare(a.name, b.name)
            );
            setPeople(sortedByName);
        } else if (sortOption === "age") {
            let sortedByName = [...people].sort((a, b) =>
                a.age < b.age ? -1 : 1
            );
            setPeople(sortedByName);
        } else {
            return;
        }
    }

    function handleSortSelect(e: ChangeEvent<HTMLSelectElement>) {
        setSortOption(e.target.value);
        sortData(people);
    }

    return (
        <main className="mlb-l">
            <article className="center [--center-width:theme(contentWidth.3)] stack">
                <h1 className="text-3">React useMemo</h1>
                <p>What is it good for?</p>
                <p>
                    Lets you cache/memoize the <strong>result</strong> of a
                    calculation between re-renders.
                </p>
                <p>
                    For example, here we will pretend that sorting our array
                    alphabetically is an expensive operation that we don't want
                    to re-do on every re-render
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
                <form action="" className="cluster">
                    <label htmlFor="sort-by">Sort-by</label>
                    <select
                        name=""
                        id="sort-by"
                        className="ring-4"
                        value={sortOption}
                        onChange={handleSortSelect}
                    >
                        <option value="name">name</option>
                        <option value="age">age</option>
                    </select>
                </form>
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
