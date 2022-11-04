import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <main className="w-screen h-screen">
            <App />
        </main>
    </React.StrictMode>
);
