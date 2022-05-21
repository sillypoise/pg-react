import * as React from "react";
import Markdoc from "@markdoc/markdoc";

const doc = `
# Hello World

We are rendering client side markdoc for kicks and grokking it.

- It seems to
- work
- even with lists


{% callout %}
Attention, over here!
{% /callout %}
`;

const tags = {
  callout: {
    render: "Callout",
    attributes: {},
  },
};

const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast, { tags });

function Callout({ children }: { children: React.ReactNode }) {
  return <div className="callout">{children}</div>;
}

export function ClientSideMarkdoc() {
  return Markdoc.renderers.react(content, React, {
    components: {
      Callout: Callout,
    },
  });
}
