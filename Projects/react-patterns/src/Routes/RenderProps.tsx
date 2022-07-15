import React, { useEffect, useState } from "react";
import { render } from "react-dom";

function UserWithData(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);
    return <div>{props.render(user)}</div>;
}

function User({ user }: { user?: string }) {
    return (
        <div>
            <h1>Render Props</h1>
            {!user ? (
                <h2>no user found</h2>
            ) : (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.website}</p>
                </div>
            )}
        </div>
    );
}

function GiveBg(props) {
    return (
        <div
            style={{
                background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
            }}
        >
            {props.render()}
        </div>
    );
}

export function RenderProps() {
    return (
        <div>
            <UserWithData render={(user) => <User user={user} />} />
            <GiveBg
                render={() => (
                    <UserWithData render={(user) => <User user={user} />} />
                )}
            />
        </div>
    );
}
