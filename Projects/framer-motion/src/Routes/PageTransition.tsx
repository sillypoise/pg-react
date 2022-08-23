import { motion, AnimatePresence } from "framer-motion";
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    useRoutes,
} from "react-router-dom";

function PageTranstition() {
    let location = useLocation();

    console.log(location);

    return (
        <article className="stack">
            <h4>Trying out fancy page transitions</h4>
        </article>
    );
}

export { PageTranstition };
