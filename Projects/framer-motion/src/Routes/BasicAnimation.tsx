import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BasicAnimation() {
    let tom = "yellow";
    return (
        <article className="stack">
            <h2>Let's animate!</h2>
            <p>Let's animate a basic div's opacity</p>
            <motion.div
                className="box"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    backgroundColor: "tomato",
                }}
                transition={{
                    delay: 1,
                }}
            >
                <p>
                    We're animating an `opacity` value and an existing
                    `backgroundColor` value. We also delay it by 1 second.
                </p>
            </motion.div>
            <p>
                Okay, here we're animating basic CSS properties, but what if I'm
                using Tailwind? Well, it's not so simple. Short answer is that
                its better to reference custom CSS properties instead of relying
                on a Tailwind config that may or not be available to reference.
            </p>
            <p>
                Something akin to <code>backgroundColor: "var(--primary)"</code>
            </p>
            <motion.div
                className="box"
                animate={{
                    backgroundColor: "var(--primary)",
                }}
                transition={{
                    delay: 1,
                }}
            >
                <p>
                    We're animating a `backgroundColor` value, we are in fact
                    animating it <strong>into</strong> a value held by our
                    custom property <code>var(--primary)</code>
                </p>
            </motion.div>
            <p>
                That's fun and all but let's add some movement to our animation
            </p>
            <p className="center">↓ ↓ ↓</p>
            <motion.div
                className="box rounded-lg bg-teal-300"
                animate={{
                    y: 100,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                <p>
                    Move me downwards with the <code>translateY</code> key, or
                    its shortcut the <code>y</code> key. E.g.{" "}
                    <code>y: 100</code>
                </p>
            </motion.div>
            <p>
                Transform properties are accelerated by the GPU and therefore
                animate smoothly. We can animate Translate, Scale, Rotate, Skew
                and Perspective.
            </p>
            <p>
                For convenience, transform values are applied in a specific
                order: translate, scale, rotate, skew.
            </p>
            <p>
                Finally let's animate a CSS custom prop, i.e. changing the value
                of the custom prop.
            </p>
            <motion.ul
                initial={{ "--shift": "-50px" } as any}
                animate={{ "--shift": "600px" } as any}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <li style={{ transform: "translateX(var(--shift))" }}>
                    ⭐⭐⭐⭐⭐
                </li>
                <li style={{ transform: "translateX(var(--shift))" }}>
                    ⭐⭐⭐⭐⭐
                </li>
                <li style={{ transform: "translateX(var(--shift))" }}>
                    ⭐⭐⭐⭐⭐
                </li>
            </motion.ul>
            <p>
                Let's explore some other cool things back{" "}
                <Link to="/">Home</Link>{" "}
            </p>
        </article>
    );
}

export { BasicAnimation };
