import { useState } from "react";

function App() {
    const [selectValue, setSelectValue] = useState("lime");

    return (
        <main className="mlb-l">
            <article className="stack center">
                <h2>React Forms</h2>
                <h4>The select tag</h4>
                <p>
                    We control the select value option through the the{" "}
                    <code>value</code> and <code>onChange</code> attributes in
                    the select tag
                </p>
                <p>The selected tag is {selectValue}</p>
                <select
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    className="ring-4"
                >
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <p>
                    We can pass an array into the <code>value</code> attribute
                    which allows us to select multiple options in a select tag
                </p>
                <select
                    multiple={true}
                    value={["lime", "coconut"]}
                    className="ring-4"
                >
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </article>
        </main>
    );
}

export default App;
