import * as React from "react";
import Markdoc, { Schema, Tag } from "@markdoc/markdoc";
import { Link as RouterLink } from "react-router-dom";

const doc = `
[test](/docs "intent")
`;

let Link = React.forwardRef<
    HTMLAnchorElement,
    { to: string; prefetch: string; title: string }
>(({ to, prefetch = "none", title, ...props }, forwardedRef) => {
    return (
        <>
            <RouterLink ref={forwardedRef} to={to} />
            <p>Should prefetch? </p>

            {prefetch === "none"
                ? "Nope"
                : prefetch === "intent"
                ? "Would you kindly?"
                : prefetch === "render"
                ? "Always please"
                : ""}

            <p>to: {to}</p>
            <p>title: {title}</p>
        </>
    );
});

const link: Schema = {
    render: "Link",
    children: ["strong", "em", "s", "code", "text", "tag"],
    attributes: {
        href: { type: String, required: true },
        title: { type: String },
    },
    transform(node: any, config: any) {
        let attributes = node.transformAttributes(config);
        let children = node.transformChildren(config);

        let to = attributes.href;
        let prefetch = attributes.title;

        return new Tag(`Link`, { ...attributes, to, prefetch }, children);
    },
};

const ast = Markdoc.parse(doc);

const content = Markdoc.transform(ast, {
    nodes: { link },
});

export function CustomLink() {
    // console.dir(ast.children[0].children[0].children[0]);
    // console.dir(content.children[0].children[0]);

    return Markdoc.renderers.react(content, React, {
        components: { Link },
    }) as React.ReactElement;
}
