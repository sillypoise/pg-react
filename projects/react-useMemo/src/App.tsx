import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { api } from "./api";

function App() {
    let [people, setPeople] = useState<
        Array<{ id: number; name: string; age: number }>
    >([]);
    let [query, setQuery] = useState("");
    let [sortOption, setSortOption] = useState("");

    useEffect(() => {
        api.list().then((data) => {
            setPeople(data);
        });
    }, []);

    // ! UNNECESSARY
    // useEffect(() => {
    //     setPeople(sortedData);
    // }, [sortOption]);

    function sortData(
        people: Array<{ id: number; name: string; age: number }>
    ) {
        console.log("Expensive Calculation 💸💸💸");
        if (sortOption === "name") {
            let sortedByName = [...people].sort((a, b) =>
                new Intl.Collator("es").compare(a.name, b.name)
            );
            return sortedByName;
        } else if (sortOption === "age") {
            let sortedByAge = [...people].sort((a, b) =>
                a.age < b.age ? -1 : 1
            );
            return sortedByAge;
        } else {
            return people;
        }
    }

    // Sorting is expensive on every render? Memo it
    let sortedPeople = useMemo(() => sortData(people), [people, sortOption]);
    // let sortedPeople = sortData(people);

    function handleSortSelect(e: ChangeEvent<HTMLSelectElement>) {
        let selectedOption = e.target.value;
        setSortOption(selectedOption);
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
                    We will pretend that sorting our array alphabetically is an
                    expensive operation that we don't want to re-do on every
                    re-render. So we store the calculation in a memoized
                    variable, i.e. <code>sortedPeople</code>. We loop over that{" "}
                    <code>sortedPeople</code> array to render the sorted list of
                    people. Notice we are deriving state instead of unnecessrily
                    creating more. More importantly we are memoizing
                    `sortedPeople` calculation and only re-running that if{" "}
                    <code>people</code> or <code>sortOption</code> state
                    changes.{" "}
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
                <p>
                    Selected sort option: <strong>{sortOption}</strong>
                </p>
                <form action="" className="cluster">
                    <label htmlFor="sort-by">Sort-by</label>
                    <select
                        name=""
                        id="sort-by"
                        className="ring-4"
                        value={sortOption}
                        onChange={handleSortSelect}
                    >
                        <option value="">none</option>
                        <option value="name">name</option>
                        <option value="age">age</option>
                    </select>
                </form>
                <ul role="list" className="auto-grid">
                    {sortedPeople.map((person) => (
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
