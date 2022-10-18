import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { VisuallyHidden } from "@reach/visually-hidden";
import {
    ChangeEvent,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";

function useAuth() {
    let [auth, setAuth] = useState<Boolean | null>(null);
    let [authAttempted, setAuthAttempted] = useState(false);

    useEffect(() => {
        // subscribe to auth
        setAuthAttempted(true);
        // setAuth(true);

        // return unsub
    }, [auth]);
    return { auth, setAuth, authAttempted };
}

function App() {
    let { auth, setAuth, authAttempted } = useAuth();
    if (!authAttempted) {
        return <p className="center">Authenticating...</p>;
    }
    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
                <form action="" className="cluster gap-xs">
                    <input
                        type="checkbox"
                        name=""
                        id="auth-switcher"
                        onChange={() => setAuth(!auth)}
                    />
                    <label htmlFor="auth-switcher">authenticate</label>
                </form>
                <hr />
                {auth ? <p>Logged in</p> : <p>Logged out</p>}
            </article>
        </main>
    );
}

export default App;
