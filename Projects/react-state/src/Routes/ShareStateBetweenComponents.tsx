import { MouseEventHandler, useState } from "react";

// LIFTING STATE UP TO PARENT SO THAT WE CAN SYNC IT BETWEEN COMPONENTS
// THIS IS HOW BOTH COMPONENTS BECOME AWARE OF EACH OTHER

export function ShareStateBetweenComponents() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        title={"First"}
        isActive={activeIndex === 0}
        onShow={(e) => {
          e.preventDefault();
          setActiveIndex(0);
        }}
      >
        <p>I start open but collapse when you try to open my sibling</p>
      </Panel>
      <Panel
        title={"Second"}
        isActive={activeIndex === 1}
        onShow={(e) => {
          e.preventDefault();
          setActiveIndex(1);
        }}
      >
        <p>I start collapsed but open me up and I'll collapse my sibling</p>
      </Panel>
    </>
  );
}

type PanelProps = {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
  onShow: MouseEventHandler<HTMLDetailsElement>;
};

function Panel({ title, isActive, children, onShow }: PanelProps) {
  return (
    <details open={isActive} onClick={onShow}>
      <summary>{title}</summary>
      {children}
    </details>
  );
}
