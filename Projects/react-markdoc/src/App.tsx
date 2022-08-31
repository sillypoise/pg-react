import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import "./styles/markdoc.css";
import { ClientSideMarkdoc } from "./Routes/ClientSideMarkdoc";

import Home from "./Routes/Home";
import { CustomizingNodes } from "./Routes/CustomizingNodes";
import { CustomNodes } from "./Routes/CustomNodes";
import { CustomLink } from "./Routes/CustomLink";
import { Annotations } from "./Routes/Annotations";

function App() {
    return (
        <div>
            <header>
                <h1>Markdoc + React</h1>
            </header>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rendering" element={<ClientSideMarkdoc />} />
                    <Route
                        path="/customizing-nodes"
                        element={<CustomizingNodes />}
                    />
                    <Route path="/custom-nodes" element={<CustomNodes />} />
                    <Route path="/custom-link" element={<CustomLink />} />
                    <Route path="/annotations" element={<Annotations />} />{" "}
                </Routes>
            </main>
        </div>
    );
}

export default App;
