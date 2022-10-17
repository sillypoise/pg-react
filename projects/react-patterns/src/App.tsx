import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import { CompoundComponents } from "./Routes/CompountComponents";
import { HigherOrderComponents } from "./Routes/HigherOrderComponents";

import Home from "./Routes/Home";
import { RenderProps } from "./Routes/RenderProps";

function App() {
    return (
        <div>
            <header>
                <h1>React Patterns</h1>
            </header>
            <main className="mbs">
                <nav>
                    <ul style={{ display: "flex", gap: "1.5rem" }}>
                        <li>
                            <Link to="/hoc">Higher Order Components</Link>
                        </li>
                        <li>
                            <Link to="/render-props">Render Props</Link>
                        </li>
                        <li>
                            <Link to="/compound-components">
                                Compound Components
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hoc" element={<HigherOrderComponents />} />
                    <Route path="/render-props" element={<RenderProps />} />
                    <Route
                        path="/compound-components"
                        element={<CompoundComponents />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
