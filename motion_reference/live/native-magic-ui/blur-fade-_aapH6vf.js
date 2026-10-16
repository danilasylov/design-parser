import { r as w, j as o, b as F, m as V } from "./inline-Mcm4wFdg.js";
import { u as j } from "./use-in-view-CCO1JRFq.js";
const u = (i) => typeof i == "function" ? void 0 : i.filter;
function E({
  children: i,
  className: d,
  variant: c,
  duration: n = 0.4,
  delay: f = 0,
  offset: s = 6,
  direction: e = "down",
  inView: x = !1,
  inViewMargin: h = "-50px",
  blur: m = "6px",
  ...p
}) {
  const l = w.useRef(null), b = j(l, { once: !0, margin: h }), v = !x || b, y = {
    hidden: {
      [e === "left" || e === "right" ? "x" : "y"]: e === "right" || e === "down" ? -s : s,
      opacity: 0,
      filter: `blur(${m})`
    },
    visible: {
      [e === "left" || e === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: "blur(0px)"
    }
  }, t = c ?? y, r = u(t.hidden), a = u(t.visible), g = r != null && a != null && r !== a;
  return /* @__PURE__ */ o.jsx(F, { children: /* @__PURE__ */ o.jsx(
    V.div,
    {
      ref: l,
      initial: "hidden",
      animate: v ? "visible" : "hidden",
      exit: "hidden",
      variants: t,
      transition: {
        delay: 0.04 + f,
        duration: n,
        ease: "easeOut",
        ...g ? { filter: { duration: n } } : {}
      },
      className: d,
      ...p,
      children: i
    }
  ) });
}
export {
  E as B
};
