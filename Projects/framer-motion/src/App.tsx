import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/tailwind.css";
import { BasicAnimation } from "./Routes/BasicAnimation";

import Home from "./Routes/Home";
import { Transitions } from "./Routes/Transitions";
import { ExitAnimation } from "./Routes/ExitAnimations.";
import { PageTranstition } from "./Routes/PageTransition";

function App() {
    return (
        <motion.article
            className="stack center plb-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <header>
                <h1>Framer Motion</h1>
            </header>
            <nav>
                <ul className="cluster gap-xl">
                    <Link to="page-a">
                        <li>A</li>
                    </Link>
                    <Link to="page-b">
                        <li>B</li>
                    </Link>
                    <Link to="page-c">
                        <li>C</li>
                    </Link>
                </ul>
            </nav>
            <main className="mbs">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/basic-animation"
                        element={<BasicAnimation />}
                    />
                    <Route path="/transitions" element={<Transitions />} />
                    <Route
                        path="/animate-presence"
                        element={<ExitAnimation />}
                    />
                    <Route
                        path="/page-transition"
                        element={<PageTranstition />}
                    />
                    <Route path="/page-a" element={<PageA />} />
                    <Route path="/page-b" element={<PageB />} />
                    <Route path="/page-c" element={<PageC />} />
                </Routes>
            </main>
        </motion.article>
    );
}

function PageA() {
    return (
        <article className="boxi p-4xl bg-pink-400 text-gray-200">
            <h1 className="text-7">Page A</h1>
        </article>
    );
}

function PageB() {
    return (
        <article className="boxi p-4xl bg-teal-600 text-gray-200">
            <h1 className="text-7">Page B</h1>
        </article>
    );
}

function PageC() {
    return (
        <article className="boxi p-4xl bg-orange-400 text-gray-200">
            <h1 className="text-7">Page C</h1>
        </article>
    );
}

export default App;
