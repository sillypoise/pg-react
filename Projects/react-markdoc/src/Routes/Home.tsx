import Markdoc from "@markdoc/markdoc";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <article className="stack">
            <h2>Testing Markdoc</h2>
            <ul>
                <li>
                    <Link to="/rendering">Markdown rendering</Link>
                </li>
                <li>
                    <Link to="/custom-link">Custom Link rendering</Link>
                </li>
                <li>
                    <Link to="/annotations">Annotations</Link>
                </li>
            </ul>
        </article>
    );
}
