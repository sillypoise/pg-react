import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import { CounterExample } from "./Routes/CounterExample";

import Home from "./Routes/Home";

function App() {
  return (
    <div>
      <header>
        <h1>React + Redux</h1>
      </header>
      <main className="mbs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter-example" element={<CounterExample />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
