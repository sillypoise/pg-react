import { ChangeEvent, useEffect, useRef, useState } from "react";
import { api } from "./api";
import { Item } from "./types";

function App() {
    let [items, setItems] = useState<Array<Item> | null>(null);
    // let [newItemText, setNewItemText] = useState<string>("");
    let inputItemRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputItemRef.current) {
            inputItemRef.current.focus();
        }
    }, []);

    useEffect(() => {
        api.list().then((data) => setItems(data));
    }, []);

    function handleItemDelete(id: Item["id"]) {
        let newItems = items && items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    function handleAddItem(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        console.dir(event.target.elements);

        let newTaskInput = event.target.elements.namedItem("new-task");
        if (newTaskInput && newTaskInput instanceof HTMLInputElement) {
            let newTaskValue = newTaskInput.value;
            if (items) {
                if (!newTaskValue.length) return;
                setItems([
                    ...items,
                    {
                        id: items.length + 1,
                        text: newTaskValue,
                        completed: false,
                    },
                ]);
                newTaskInput.value = "";
            }
        }
    }

    return (
        <main>
            <article className="stack center mlb-l">
                <h1 className="text-3">Super Market Challenge 0</h1>
                <form
                    action=""
                    onSubmit={handleAddItem}
                    className="stack center"
                >
                    <label htmlFor="new-task">New task</label>
                    <input
                        ref={inputItemRef}
                        type="text"
                        name="new-task"
                        id="new-task"
                        // onChange={(e) => setNewItemText(e.target.value)}
                        // value={newItemText}
                        placeholder="enter a new item..."
                    />
                    <button type="submit">Add +</button>
                </form>
                <ul>
                    {!items?.length ? (
                        <p>Loading your data..</p>
                    ) : (
                        items.map((item) => (
                            <li key={item.id} className="cluster">
                                <span>{item.text}</span>
                                <button
                                    onClick={() => handleItemDelete(item.id)}
                                >
                                    [X]
                                </button>
                            </li>
                        ))
                    )}
                </ul>
                <pre>{JSON.stringify(items, null, 4)}</pre>
            </article>
        </main>
    );
}

export default App;
