import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";

import Home from "./Routes/Home";
import { WithoutReducer } from "./Routes/WithoutReducer";
import { WithReducer } from "./Routes/WithReducer";

import { SimpleReducerExample } from "./Routes/SimpleReducerExample";

function App() {
    return (
        <div>
            <header>
                <h1>useReducer Project</h1>
            </header>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/without-reducer"
                        element={<WithoutReducer />}
                    />
                    <Route path="/with-reducer" element={<WithReducer />} />
                    <Route
                        path="/basic-reducer"
                        element={<SimpleReducerExample />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
