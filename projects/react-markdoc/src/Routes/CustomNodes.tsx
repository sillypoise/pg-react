import * as React from "react";
import Markdoc, { Schema, Tag } from "@markdoc/markdoc";

const doc = `
# level 1 {% .test %}

## level 2

### level 3

#### level 4

##### level 5

###### level 6

{% callout %}
Tag's aren't composable
{% /callout %}
`;

function Supa({
    level,
    children,
}: {
    level: number;
    children: React.ReactNode;
}) {
    return React.createElement(
        `h${level}`,
        {},
        // { style: { color: "tomato" } },
        children
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return <div style={{ backgroundColor: "tomato" }}>{children}</div>;
}

const heading: Schema = {
    // Bro it's always supposed to be a string -___-
    render: "Supa",
    children: ["inline"],
    attributes: {
        level: { type: Number, required: true, default: 1 },
    },
    transform(node, config) {
        let attributes = node.transformAttributes(config);
        let children = node.transformChildren(config);
        return new Tag("Supa", { ...attributes }, children);
    },
};

let callout = {
    render: "Callout",
};

const ast = Markdoc.parse(doc);

const content = Markdoc.transform(ast, {
    // tags: { callout },
    nodes: { heading },
});

export function CustomNodes() {
    return Markdoc.renderers.react(content, React, {
        components: { Callout, Supa },
    }) as React.ReactElement;
}
