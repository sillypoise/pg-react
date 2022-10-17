import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";

import Home from "./Routes/Home";
import { RTKQuery } from "./Routes/RTKQuery";

function App() {
  return (
    <div>
      <header>
        <h1>React + RTK Query</h1>
      </header>
      <main className="mbs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rtk-query" element={<RTKQuery />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
