import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { VisuallyHidden } from "@reach/visually-hidden";
import {
    ChangeEvent,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";

async function fetchUser(uid: string) {
    let res = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${uid}`
    );
    let data = await res.json();
    return data;
}

function App() {
    let [user, setUser] = useState(null);
    let [uid, setUid] = useState("3");
    let [posts, setPosts] = useState(null);

    // .then Fetch
    // useEffect(() => {
    //     let isCurrent = true;
    //     fetchUser(uid).then((user) => {
    //         if (isCurrent) setUser(user);
    //     });

    //     return () => {
    //         isCurrent = false;
    //     };
    // }, [uid]);

    // Async/Await Fetch
    useEffect(() => {
        let isCurrent = true;

        async function getUser() {
            let user = await fetchUser(uid);
            if (isCurrent) setUser(user);
        }

        getUser();

        return () => {
            isCurrent = false;
        };
    }, [uid]);

    // Subscirption
    // useEffect(() => {
    //     let unsub = subscribeToPosts(uid, (posts) => {
    //         setPosts(posts);
    //     });

    //     return unsub;
    // }, [uid]);

    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
                <hr />
                <pre>{JSON.stringify(user, null, 4)}</pre>
            </article>
        </main>
    );
}

export default App;
