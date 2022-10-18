import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { VisuallyHidden } from "@reach/visually-hidden";
import {
    ChangeEvent,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";

function getLocalStorageValue(key: string) {
    let value = localStorage.getItem(key);
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch (error) {
        return null;
    }
}

function App() {
    let [message, setMessage] = useState<string>(
        getLocalStorageValue("message") || ""
    );
    let messageRef = useRef<HTMLTextAreaElement>(null);

    function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem("message", JSON.stringify(message));
    }, [message]);

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.focus();
        }
    }, [message]);

    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
                <hr />
                <form action="" className="stack">
                    <textarea
                        className="w-full text-[color:var(--neutral-surface-0)]"
                        name=""
                        id=""
                        value={message}
                        onChange={handleMessageChange}
                        ref={messageRef}
                    ></textarea>
                    <div className="self-end text-00 text-[color:var(--primary-solid-1)]">
                        <span>{message.length}/200</span>
                    </div>
                </form>
            </article>
        </main>
    );
}

export default App;
