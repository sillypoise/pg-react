import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { VisuallyHidden } from "@reach/visually-hidden";
import React, {
    ChangeEvent,
    HTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";

function Tabs2({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

function TabList2({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

function Tab2({
    disabled,
    children,
}: {
    disabled: Boolean;
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}

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
