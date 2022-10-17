import { useCallback, useEffect, useRef, useState } from "react";

// ! Something breaks here, fix it

export function CallbackRefPattern() {
    let [height, setHeight] = useState<Number>(0);

    let measuredRef = useCallback((node: HTMLElement) => {
        setHeight(node.getBoundingClientRect().height);
    }, []);
    console.log(measuredRef);

    useEffect(() => {
        console.log("do something here");
    }, []);

    return (
        <article>
            <h2>Basic useCallback Example</h2>
            <h3 className="box" style={{ padding: "4rem" }} ref={measuredRef}>
                Hello, Callback Ref
            </h3>
        </article>
    );
}
