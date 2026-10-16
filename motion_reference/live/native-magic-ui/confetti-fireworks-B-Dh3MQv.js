import { j as a } from "./inline-Mcm4wFdg.js";
import { c as e } from "./confetti.module-43zesFz0.js";
import { B as d } from "./button-V18JMPr7.js";
function x() {
  const i = () => {
    const s = Date.now() + 5e3, o = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }, r = (t, n) => Math.random() * (n - t) + t, c = window.setInterval(() => {
      const t = s - Date.now();
      if (t <= 0)
        return clearInterval(c);
      const n = 50 * (t / 5e3);
      e({
        ...o,
        particleCount: n,
        origin: { x: r(0.1, 0.3), y: Math.random() - 0.2 }
      }), e({
        ...o,
        particleCount: n,
        origin: { x: r(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };
  return /* @__PURE__ */ a.jsx("div", { className: "relative", children: /* @__PURE__ */ a.jsx(d, { onClick: i, children: "Trigger Fireworks" }) });
}
export {
  x as default
};
