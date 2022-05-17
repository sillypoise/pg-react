import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import BasicUseState from "./Routes/BasicUseState";

import Home from "./Routes/Home";
import NoLocalState from "./Routes/NoLocalState";
import StateAsSnapshot from "./Routes/StateAsSnapshot";

function App() {
  return (
    <div>
      <header>
        <h1>React State</h1>
      </header>
      <main className="mbs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/no-local-state" element={<NoLocalState />} />
          <Route path="/basic-usestate" element={<BasicUseState />} />
          <Route path="/state-as-snapshot" element={<StateAsSnapshot />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
