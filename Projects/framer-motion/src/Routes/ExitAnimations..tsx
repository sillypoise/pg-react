import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function ExitAnimation() {
    let [isVisible, setIsVisible] = useState<boolean>(true);
    let [manualKey, setManualKey] = useState<number>(0);
    return (
        <article className="stack">
            <h3>
                <code>AnimatePresence</code>
            </h3>
            <p>
                The <code>AnimatePresence</code> component allows us to animate{" "}
                <strong>out</strong> our components when they're{" "}
                <strong>unmounted</strong> from the virtual DOM.
            </p>
            <p>
                When we unmount a component in React it simply quickly unmounts,
                not allowing any animation we'd want to perform to finish.
                <code>AnimationPrsence</code> allows us <strong>defer</strong>{" "}
                that unmounting <strong>until after</strong> an operation is
                complete, e.g. an animation.
            </p>
            <p>Let's look at some examples</p>
            <form className="flex gap-xs">
                <input
                    type="checkbox"
                    name="modal"
                    id="modal"
                    // onChange={() => console.log("🌴")}
                    onChange={() => setIsVisible(!isVisible)}
                />{" "}
                <p>mount/unmount</p>
            </form>
            <p>
                Unmounting an animated component without{" "}
                <code>AnimatedPresence</code>
            </p>
            <WithoutAP isVisible={isVisible} />
            <p>
                Unmounting an animated component <strong>with</strong>{" "}
                <code>AnimatedPresence</code>
            </p>
            <WithAP isVisible={isVisible} />
            <p>
                Unmounting an animated component <strong>with</strong>{" "}
                <code>AnimatedPresence</code>, altough, not encapsulated in its
                definition. (Why doesn't this work?)
            </p>
            <AnimatePresence>
                <WithoutAP isVisible={isVisible} />
            </AnimatePresence>
            <h4>How does this work?</h4>
            <p>
                Any <code>motion</code> components contained by the removed
                child that have an exit prop will fire that animation before the
                entire tree is finally removed from the DOM
            </p>
            <p>
                <strong>Note:</strong> Direct children must each have a unique{" "}
                <code>key</code> prop so <code>AnimatePresence</code> can track
                their presence in the tree
            </p>
            <h4>
                Taking advantage of <code>key</code>
            </h4>
            <p>
                In React, changing a component's <code>key</code> makes React
                treat it as an entirely new component. So the old one is
                unmounted before the new one is mounted. We can change the{" "}
                <code>key</code> of a single child of{" "}
                <code>AnimatePresence</code> and easily make a slideshow
                component
            </p>
            <button
                className="border bg-gray-300 rounded-md"
                onClick={() => setManualKey((n) => n + 1)}
            >
                <strong>Change key value!</strong>{" "}
            </button>
            <p>{manualKey}</p>
            <Slideshow
                key={manualKey}
                image="https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png"
            />
            <p>
                Take me back <Link to="/">home</Link> thank you very much
            </p>
        </article>
    );
}

const WithAP = ({ isVisible }: { isVisible: boolean }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                className="box bg-blue-500"
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
            >
                <p className="text-center">🌴🌴🌴</p>
            </motion.div>
        )}
    </AnimatePresence>
);

const WithoutAP = ({ isVisible }: { isVisible: boolean }) => (
    <article>
        {isVisible && (
            <motion.div
                className="box bg-red-500"
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
            >
                <p className="text-center">🌴🌴🌴</p>
            </motion.div>
        )}
    </article>
);

function Slideshow({ image, key }: { image: string; key: number }) {
    return (
        <AnimatePresence mode="wait">
            <motion.img
                src={image}
                alt="kewl"
                key={key}
                initial={{
                    x: 300,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                exit={{
                    x: -300,
                    opacity: 0,
                }}
            />
        </AnimatePresence>
    );
}

export { ExitAnimation };
