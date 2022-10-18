import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { VisuallyHidden } from "@reach/visually-hidden";
import { HTMLAttributes, useState } from "react";

function App() {
    let [minutes, setMinutes] = useState(1);
    let [error, setError] = useState<String | null>(null);
    let [showPassword, setShowPassword] = useState(false);
    function handleSub() {
        if (minutes > 1) {
            setMinutes(minutes - 1);
        } else {
            setError("Can't work in the negative zone bud");
        }
    }
    function handleAdd() {
        setMinutes(minutes + 1);
        setError(null);
    }

    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
                <hr />
                {/* <VisuallyHidden> */}

                <form action="">
                    <fieldset className="">
                        <legend>Fill out your login information</legend>
                        <div className="stack [--stack-gap:theme(spacing.xs)]">
                            <label htmlFor="login:email">Email:</label>
                            <input
                                type="text"
                                name=""
                                id="login:email"
                                className="outline rounded-md outline-offset-2 outline-[color:var(--neutral-border-0)] focus:bg-light-amber-7 p-3xs"
                                placeholder="you@example.com"
                            />
                            <label htmlFor="login:password">Password:</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name=""
                                id="login:password"
                                className="outline rounded-md outline-offset-2 outline-[color:var(--neutral-border-0)] focus:bg-light-amber-7 p-3xs"
                                placeholder="Password"
                            />
                            <div className="cluster gap-xs">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="login:toggle-password-visibilty"
                                    defaultChecked={showPassword}
                                    onChange={() =>
                                        setShowPassword((val) => !val)
                                    }
                                />
                                <label
                                    className="text-00"
                                    htmlFor="login:toggle-password-visibilty"
                                >
                                    show password
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
                {/* </VisuallyHidden> */}
            </article>
        </main>
    );
}

export default App;
