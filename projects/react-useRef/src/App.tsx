import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";

import Home from "./Routes/Home";
import { BasicUseRefExample } from "./Routes/useRefExample";

function App() {
    return (
        <div>
            <header>
                <h1>useRef Example</h1>
            </header>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/basic-useref"
                        element={<BasicUseRefExample />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
