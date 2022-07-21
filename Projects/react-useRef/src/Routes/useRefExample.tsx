import { useRef } from "react";

export function BasicUseRefExample() {
    let itemRef = useRef();
    console.dir(itemRef.current);
    return (
        <article>
            <h2>Basic useRef Example</h2>
            <ul>
                <li ref={itemRef}>First item</li>
                <li>Second item</li>
            </ul>
        </article>
    );
}
