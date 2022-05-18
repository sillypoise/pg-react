import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import BasicUseEffect from "./Routes/BasicUseEffect";

import Home from "./Routes/Home";

function App() {
  return (
    <div>
      <header>
        <h1>React useEffect</h1>
      </header>
      <main className="mbs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-useeffect" element={<BasicUseEffect />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
