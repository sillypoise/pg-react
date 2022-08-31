import * as React from "react";
import Markdoc, { Config, Tag } from "@markdoc/markdoc";

const doc = `

# Hello World {% .custom-class-name-here %}

We are rendering client side markdoc for kicks and grokking it.

- It seems to
- work
- even with lists


{% callout title="Wubba" bg="pink" %}
Attention, over here!
{% /callout %}

This is a great authoring experience.
`;

const callout = {
    render: "Callout",
    description: "Display the enclosed content in a callout box",
    children: ["paragraph", "tag", "list"],
    attributes: {
        title: {
            type: String,
            description: "The title displayed at the top of the callout",
        },
        bg: {
            type: String,
            description: "The background color",
            default: "tomato",
        },
        type: {
            type: String,
            default: "note",
            matches: ["caution", "check", "note", "warning"],
            description: "Controls the color and icon of the callout.",
        },
    },
};

const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast, { tags: { callout } });

function Callout({
    title,
    bg,
    children,
}: {
    title: string;
    bg: string;
    children: React.ReactNode;
}) {
    return (
        <div className="" style={{ backgroundColor: `${bg}` }}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
}

export function ClientSideMarkdoc() {
    return Markdoc.renderers.react(content, React, {
        components: {
            Callout: Callout,
        },
    }) as React.ReactElement;
}
