import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";

import Home from "./Routes/Home";

function App() {
  return (
    <div>
      <header>
        <h1>React App Template</h1>
      </header>
      <main className="mbs">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
