import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import BasicUseEffect from "./Routes/BasicUseEffect";
import { BreakingClassMentalModel } from "./Routes/BreakingClassMentalModel";

import Home from "./Routes/Home";
import UseEffectLifecycle from "./Routes/UnderstanduseEffectLifecycle";

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
          <Route path="/useeffect-lifecycle" element={<UseEffectLifecycle />} />
          <Route
            path="/breaking-class-mental-model"
            element={<BreakingClassMentalModel />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
