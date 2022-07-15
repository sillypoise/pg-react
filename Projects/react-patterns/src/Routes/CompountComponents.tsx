import React, { createContext, useContext } from "react";

export function CompoundComponents() {
    const gradients = {
        one: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
        two: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
        three: "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
    };

    return (
        <div>
            <h1>Compound Components</h1>
            <Date>
                <Year color={gradients.one} />
                <Month color={gradients.two} />
                <Day color={gradients.three} />
            </Date>
            <Blob>
                <Summer name="Jose" />
            </Blob>
        </div>
    );
}

function Blob({ children }) {
    const user = {
        lastName: "Rosas",
        age: "28",
    };
    return React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...user });
    });
}

function Summer({ name, lastName, age }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{lastName}</h2>
            <h3>{age}</h3>
        </div>
    );
}

const DateContext = createContext();

function Date({ children }) {
    return (
        <DateContext.Provider
            value={{
                year: "Wubba",
                month: "Lubba",
                day: "Dubdub",
            }}
        >
            {children}
        </DateContext.Provider>
    );
}

function Year({ color }) {
    const { year } = useContext(DateContext);
    return (
        <div style={{ background: color }}>
            <h1>{!year ? 1993 : year}</h1>
        </div>
    );
}

function Month({ color }) {
    const { month } = useContext(DateContext);
    return (
        <div style={{ background: color }}>
            <h2>{!month ? "July" : month}</h2>
        </div>
    );
}

function Day({ color }) {
    const { day } = useContext(DateContext);
    return (
        <div style={{ background: color }}>
            <p>{!day ? 14 : day}</p>
        </div>
    );
}
