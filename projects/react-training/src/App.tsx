import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
            </article>
        </main>
    );
}

export default App;
