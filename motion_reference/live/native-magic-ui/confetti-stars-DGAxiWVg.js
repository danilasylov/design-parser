import { j as e } from "./inline-Mcm4wFdg.js";
import { c as r } from "./confetti.module-43zesFz0.js";
import { B as a } from "./button-V18JMPr7.js";
function n() {
  const o = () => {
    const s = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"]
    }, t = () => {
      r({
        ...s,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"]
      }), r({
        ...s,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"]
      });
    };
    setTimeout(t, 0), setTimeout(t, 100), setTimeout(t, 200);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(a, { onClick: o, children: "Trigger Stars" }) });
}
export {
  n as default
};
