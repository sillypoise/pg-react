import * as React from "react";
import Markdoc, { Config, Schema, Tag } from "@markdoc/markdoc";

const doc = `
# Testing Annotations {% .test .test2%}

**hello** {% .test .test2 %}
`;

function Heading({
    level,
    children,
    className,
}: {
    level: number;
    children: React.ReactNode;
    className: string;
}) {
    return React.createElement(
        `h${level}`,
        { className },
        // { style: { color: "tomato" } },
        children
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return <div style={{ backgroundColor: "tomato" }}>{children}</div>;
}

const heading: Schema = {
    // Bro it's always supposed to be a string -___-
    render: "Heading",
    children: ["inline"],
    attributes: {
        level: { type: Number, required: true, default: 1 },
    },
    transform(node, config) {
        let attributes = node.transformAttributes(config);
        let children = node.transformChildren(config);
        console.dir(attributes);
        return new Tag("Heading", { ...attributes }, children);
    },
};

const ast = Markdoc.parse(doc);

const content = Markdoc.transform(ast, {
    nodes: { heading },
});

export function Annotations() {
    console.dir(ast);
    // console.dir(content);

    return Markdoc.renderers.react(content, React, {
        components: {
            Heading: Heading,
        },
    }) as React.ReactElement;
}
