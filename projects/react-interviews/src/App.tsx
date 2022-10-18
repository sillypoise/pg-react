import { useEffect, useRef, useState } from "react";
import { api } from "./api";
import { Item } from "./types";

function App() {
    let [items, setItems] = useState<Array<Item> | null>(null);
    let inputItemRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputItemRef.current?.focus();
    }, []);
    useEffect(() => {
        api.list().then((data) => setItems(data));
    }, []);
    function handleItemDelete(id: number) {
        let newItems = items && items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    return (
        <main>
            <article className="stack center mlb-l">
                <h1 className="text-3">Super Market Challenge 0</h1>
                <form
                    action=""
                    onSubmit={(e) => e.preventDefault()}
                    className="stack center"
                >
                    <label htmlFor="list">List Items:</label>
                    <input
                        ref={inputItemRef}
                        type="text"
                        name="text"
                        id="list"
                    />
                    <button>Add +</button>
                    <ul>
                        {!items ? (
                            <p>Loading your data..</p>
                        ) : (
                            items.map((item) => (
                                <li key={item.id} className="cluster">
                                    <span>{item.text}</span>
                                    <button
                                        onClick={() =>
                                            handleItemDelete(item.id)
                                        }
                                    >
                                        [X]
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </form>
                <pre>{JSON.stringify(items, null, 4)}</pre>
            </article>
        </main>
    );
}

export default App;
