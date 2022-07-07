import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import "./styles/markdoc.css";
import { ClientSideMarkdoc } from "./Routes/ClientSideMarkdoc";

import Home from "./Routes/Home";

function App() {
    return (
        <div>
            <header>
                <h1>Markdoc + React</h1>
            </header>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/client-side-markdoc"
                        element={<ClientSideMarkdoc />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
