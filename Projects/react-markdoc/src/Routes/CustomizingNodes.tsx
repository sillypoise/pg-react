import * as React from "react";
import Markdoc, { Config, Node, NodeType, Tag } from "@markdoc/markdoc";

const doc = `

# Testing custom nodes
We are rendering client side markdoc for kicks and grokking it.

- It seems to
- work
- for the most part

This is a great authoring experience.

Testing links: [docs](https://markdoc.dev/docs/nodes)

`;

let heading = {
    children: ["inline"],
    attributes: {
        id: { type: String },
        level: { type: Number, required: true, default: 1 },
    },
    transform(node: any, config: any) {
        let attributes = node.transformAttributes(config);
        let children = node.transformChildren(config);

        let id = generateID(children, attributes);

        return new Tag(
            `h${node.attributes["level"]}`,
            { ...attributes, id },
            children
        );
    },
};

function generateID(children: any, attributes: any) {
    if (attributes.id && typeof attributes.id === "string") {
        return attributes.id;
    }
    return children
        .filter((child: any) => typeof child === "string")
        .join(" ")
        .replace(/[?]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();
}

const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast, { nodes: { heading } });

export function CustomizingNodes() {
    return Markdoc.renderers.react(content, React, {}) as React.ReactElement;
}
