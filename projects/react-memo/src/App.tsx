import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="mlb-l">
            <article className="center stack">
                <h1 className="text-3">React memo</h1>
                <p>What is it good for?</p>
            </article>
        </main>
    );
}

export default App;
