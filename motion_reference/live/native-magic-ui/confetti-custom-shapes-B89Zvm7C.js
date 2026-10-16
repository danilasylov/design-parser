import { j as a } from "./inline-Mcm4wFdg.js";
import { c as t } from "./confetti.module-43zesFz0.js";
import { B as p } from "./button-V18JMPr7.js";
function f() {
  const o = () => {
    const r = t.shapeFromPath({
      path: "M0 10 L5 0 L10 10z"
    }), c = t.shapeFromPath({
      path: "M0 0 L10 0 L10 10 L0 10 Z"
    }), i = t.shapeFromPath({
      path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z"
    }), n = t.shapeFromPath({
      path: "M5 0 L10 10 L0 10 Z"
    }), e = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [r, c, i, n],
      scalar: 2
    }, s = () => {
      t({
        ...e,
        particleCount: 30
      }), t({
        ...e,
        particleCount: 5
      }), t({
        ...e,
        particleCount: 15,
        scalar: 2 / 2,
        shapes: ["circle"]
      });
    };
    setTimeout(s, 0), setTimeout(s, 100), setTimeout(s, 200);
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ a.jsx(p, { onClick: o, children: "Trigger Shapes" }) });
}
export {
  f as default
};
