import { j as n } from "./inline-Mcm4wFdg.js";
import { c as o } from "./confetti.module-43zesFz0.js";
import { B as a } from "./button-V18JMPr7.js";
function f() {
  const r = () => {
    const i = Date.now() + 3e3, t = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"], e = () => {
      Date.now() > i || (o({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: t
      }), o({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: t
      }), requestAnimationFrame(e));
    };
    e();
  };
  return /* @__PURE__ */ n.jsx("div", { className: "relative", children: /* @__PURE__ */ n.jsx(a, { onClick: r, children: "Trigger Side Cannons" }) });
}
export {
  f as default
};
