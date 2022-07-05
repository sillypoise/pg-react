import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import { HelloExample } from "./Routes/HelloExample";

import Home from "./Routes/Home";

function App() {
    return (
        <div>
            <header>
                <h1>React Query App</h1>
            </header>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hello-world-rq" element={<HelloExample />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
