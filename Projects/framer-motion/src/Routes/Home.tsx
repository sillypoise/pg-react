import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <article className="stack">
            <p>Let's animate. Here's you nav</p>
            <nav>
                <ul>
                    <Link to="/basic-animation">
                        <li>Basic Animations</li>
                    </Link>
                    <Link to="/transitions">
                        <li>
                            <code>transition</code> property
                        </li>
                    </Link>
                    <Link to="/animate-presence">
                        <li>
                            <code>AnimatePresence</code>
                        </li>
                    </Link>
                </ul>
            </nav>
        </article>
    );
}
