import React, { useEffect, useState } from "react";

// Example 1 Add Data

function withData(Component) {
    return (props) => {
        const [user, setUser] = useState({});
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users/1")
                .then((response) => response.json())
                .then((data) => setUser(data));
        }, []);
        return <Component {...props} user={user} />;
    };
}

function User({ user, style }) {
    console.log(user);
    return (
        <div style={{ ...style }}>
            <h1>HOCs</h1>
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

const WithDataComponent = withData(User);

// Example 2 -> Add Gradient

function withGradientBg(Component) {
    return (props) => {
        return (
            <Component
                {...props}
                style={{
                    background:
                        "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
                }}
            />
        );
    };
}

const GradientUser = withGradientBg(WithDataComponent);

export function HigherOrderComponents() {
    return (
        <div>
            <WithDataComponent />
            <GradientUser />
        </div>
    );
}
