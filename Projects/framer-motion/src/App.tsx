import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
    AnimatePresence,
    motion,
    useIsPresent,
    usePresence,
} from "framer-motion";

import "./priv.css";
import "./styles/tailwind.css";

import { BasicAnimation } from "./Routes/BasicAnimation";

import Home from "./Routes/Home";
import { Transitions } from "./Routes/Transitions";
import { ExitAnimation } from "./Routes/ExitAnimations.";

function App() {
    let location = useLocation();
    console.log(location);

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
            <main className="mbs">
                <AnimatePresence mode="wait" initial={false}>
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
                    </Routes>
                </AnimatePresence>
            </main>
        </motion.article>
    );
}

// function PageA() {
//     let isPresent = useIsPresent();

//     return (
//         <article className="box p-4xl bg-pink-400 text-gray-200">
//             <h1 className="text-7">Page A</h1>
//             <motion.div
//                 // className="privacy-screen"
//                 className="bg-sky-600 fixed inset-block-[0] inset-inline-[0] z-10"
//                 initial={{ scaleX: 1 }}
//                 animate={{
//                     scaleX: 0,
//                     transition: { duration: 3, ease: "circOut", delay: 1 },
//                 }}
//                 exit={{
//                     scaleX: 1,
//                     transition: { duration: 0.5, ease: "circIn" },
//                 }}
//                 style={{ originX: isPresent ? 0 : 1 }}
//             >
//                 <h1 className="text-7">TRANSITION</h1>
//             </motion.div>
//         </article>
//     );
// }

// function PageB() {
//     return (
//         <article className="box p-4xl bg-teal-600 text-gray-200">
//             <h1 className="text-7">Page B</h1>
//         </article>
//     );
// }

// function PageC() {
//     return (
//         <article className="box p-4xl bg-orange-400 text-gray-200">
//             <h1 className="text-7">Page C</h1>
//         </article>
//     );
// }

export default App;
