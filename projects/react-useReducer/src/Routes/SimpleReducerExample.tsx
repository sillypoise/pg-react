import React, { useReducer } from "react";

function reducer(
    state: any,
    action: {
        type: "increment" | "decrement" | "updateHeader";
        payload: number | string;
    }
) {
    switch (action.type) {
        case "increment": {
            if (typeof action.payload === "number")
                return { ...state, count: state.count + action.payload };
            break;
        }
        case "decrement": {
            if (typeof action.payload === "number")
                return { ...state, count: state.count - action.payload };
            break;
        }
        case "updateHeader": {
            return { ...state, name: action.payload };
        }
        default:
            throw new Error("action type not found");
    }
}

export function SimpleReducerExample() {
    let [state, dispatch] = useReducer(reducer, { count: 0, name: "Jose" });
    return (
        <article className="stack">
            <h2>Basic useReducer Example</h2>
            <h2>{state.name}</h2>
            <form action="">
                <label htmlFor="name">
                    <h4>Change Header</h4>
                </label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) =>
                        dispatch({
                            type: "updateHeader",
                            payload: e.target.value,
                        })
                    }
                />
            </form>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
                +
            </button>
            <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
                -
            </button>
        </article>
    );
}
