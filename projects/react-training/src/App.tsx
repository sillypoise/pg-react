import { TabList, TabPanel, Tabs, Tab, TabPanels } from "@reach/tabs";
import { HTMLAttributes, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="center [--center-width:theme(contentWidth.3)] mlb-l">
            <article className="stack">
                <h2>React-Training ground</h2>
                <p>Let's get this started!</p>
                <hr />
                <Tabs className="stack">
                    <TabList>
                        <Tab className="pli-s plb-2xs text-[color:var(--neutral-on-surface-1)]">
                            Login
                        </Tab>
                        <Tab className="pli-s plb-2xs text-[color:var(--neutral-on-surface-1)]">
                            Signup
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>Login form</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Signup form</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </article>
        </main>
    );
}

export default App;
