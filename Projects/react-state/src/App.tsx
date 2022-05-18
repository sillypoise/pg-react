import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "../../../styles/App.css";
import AvoidDeeplyNestedState, {
  TravelPlan,
} from "./Routes/AvoidDeeplyNestedState";
import AvoidStateDuplication from "./Routes/AvoidStateDuplication";
import BasicUseState from "./Routes/BasicUseState";
import DeclarativeState from "./Routes/DeclarativeState";

import Home from "./Routes/Home";
import NoLocalState from "./Routes/NoLocalState";
import { ShareStateBetweenComponents } from "./Routes/ShareStateBetweenComponents";
import StateAsSnapshot from "./Routes/StateAsSnapshot";
import TriggeringRenders from "./Routes/TriggeringRenders";

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
          <Route
            path="/declarative-state"
            element={<DeclarativeState status={"empty"} />}
          />
          <Route path="/triggering-renders" element={<TriggeringRenders />} />
          <Route
            path="/avoid-state-duplication"
            element={<AvoidStateDuplication />}
          />
          <Route
            path="/avoid-deeply-nested-state"
            element={<AvoidDeeplyNestedState />}
          />{" "}
          <Route
            path="/avoid-deeply-nested-state-correct-solution"
            element={<TravelPlan />}
          />
          <Route
            path="/share-state-between-components"
            element={<ShareStateBetweenComponents />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
