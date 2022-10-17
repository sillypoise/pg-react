import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Transitions() {
    return (
        <article className="stack">
            <h3>
                The <code>transition</code> prop
            </h3>
            <p>
                Let's test the different options that come with the{" "}
                <code>transition</code> prop.
            </p>
            <p>
                This prop allows us to really define the <strong>feel</strong>{" "}
                of the animation
            </p>
            <p>We can delay our animation by any time we want</p>
            <motion.div
                className="box bg-red-400"
                animate={{
                    borderRadius: "3rem",
                }}
                transition={{
                    delay: 3,
                }}
            >
                <p>
                    We're wating 3 seconds before animating the border radius of
                    our div.
                </p>
            </motion.div>
            <p>
                We can also change the <strong>type</strong> of animation to
                use. We can choose between a <code>tweenl</code>,{" "}
                <code>spring</code>, or <code>inertia</code>
            </p>
            <motion.div
                className="box bg-sky-500 rounded-full border-none w-5xl h-5xl center"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    scale: {
                        type: "spring",
                        damping: 3,
                        stiffness: 100,
                        restDelta: 0.0001,
                    },
                }}
            />
            <p>
                Notice we specified the transition to only target the{" "}
                <code>scale</code> key. The <code>transition</code> prop let's
                define different animations for different values. This allows us
                to change animation style per property! We can use the{" "}
                <code>default</code> key to define animtion style for any
                remaining values.
            </p>
            <p>
                We can use the <code>repeat</code> key to change the number of
                times we repeat the transition. We can set it to{" "}
                <code>Infinity</code> to loop for ever. We can also change the{" "}
                <code>repeatType</code> key to define <strong>how</strong> we
                repeat the animation. Its value can be <code>loop</code>,{" "}
                <code>reverse</code>, or <code>mirror</code>. Finally we can
                also add a <code>repeatDelay</code> key to set the duration of
                time to wait between each repeteition.
            </p>
            <p>
                Okay let's go back <Link to="/">home</Link> to explore more
                things.
            </p>
        </article>
    );
}

export { Transitions };
