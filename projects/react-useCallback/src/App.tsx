import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";

import Home from "./Routes/Home";
import { CallbackRefPattern } from "./Routes/CallbackRefPattern";

function App() {
    return (
        <div>
            <header>
                <h1>useCallback example</h1>
            </header>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/callback-ref"
                        element={<CallbackRefPattern />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
