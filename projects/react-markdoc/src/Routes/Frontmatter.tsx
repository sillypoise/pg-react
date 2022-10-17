import * as React from "react";
import Markdoc, { Schema, Tag } from "@markdoc/markdoc";
import yaml from "js-yaml";

const doc = `---
title: Authoring in Markdoc
description: Quickly author amazing content with Markdoc syntax, a superset of Markdown.
date: 2022-04-01
---

# {% $frontmatter.title %} {% .test %}

This page demonstrates how we can parse the frontmatter from the ast produced from Markdoc and then plug its values into Markdoc through variables so we can access them in our authored Markdown. The text highlighted in orange are values coming in from frontmatter!

{% $frontmatter.description %} {% .test %}

Date's are a little trickier because they are being returned as a Date object so further transformations would have to be done

`;

let ast = Markdoc.parse(doc);

let frontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {};

let content = Markdoc.transform(ast, {
    // tags: { },
    // nodes: { },
    variables: {
        frontmatter: frontmatter
            ? {
                  ...frontmatter,
                  // date: frontmatter.date -> format for consumption
              }
            : {},
    },
});

export function Frontmatter() {
    // console.dir(date);
    // console.dir(ast);
    // console.dir(frontmatter);
    // console.dir(content);

    return Markdoc.renderers.react(content, React, {
        components: {},
    }) as React.ReactElement;
}
