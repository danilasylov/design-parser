import { j as o } from "./inline-Mcm4wFdg.js";
import { c as t } from "./confetti.module-43zesFz0.js";
import { B as a } from "./button-V18JMPr7.js";
function m() {
  const r = () => {
    const e = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [t.shapeFromText({ text: "🦄", scalar: 2 })],
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
  return /* @__PURE__ */ o.jsx("div", { className: "relative justify-center", children: /* @__PURE__ */ o.jsx(a, { onClick: r, children: "Trigger Emoji" }) });
}
export {
  m as default
};
