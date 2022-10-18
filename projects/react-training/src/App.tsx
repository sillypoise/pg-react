import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { VisuallyHidden } from "@reach/visually-hidden";
import {
    ChangeEvent,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";

function App() {
    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
                <Tabs>
                    <TabList>
                        <Tab className="text-[color:var(--neutral-surface-0)]">
                            Login
                        </Tab>
                        <Tab className="text-[color:var(--neutral-surface-0)]">
                            Signup
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>Login Form</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Signup Form</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </article>
        </main>
    );
}

export default App;
