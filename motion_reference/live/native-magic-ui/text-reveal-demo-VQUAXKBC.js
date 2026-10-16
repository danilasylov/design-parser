import { r as i, j as e, c as m, m as p } from "./inline-Mcm4wFdg.js";
import { u as d } from "./use-scroll-CUpCig5d.js";
import { u } from "./use-transform-DTx9FOYX.js";
const g = ({ children: t, className: r }) => {
  const s = i.useRef(null), { scrollYProgress: a } = d({
    target: s
  });
  if (typeof t != "string")
    throw new Error("TextReveal: children must be a string");
  const l = t.split(" ");
  return /* @__PURE__ */ e.jsx("div", { ref: s, className: m("relative z-0 h-[200vh]", r), children: /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20",
      children: /* @__PURE__ */ e.jsx(
        "span",
        {
          className: "flex flex-wrap p-5 text-2xl font-bold text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl dark:text-white/20",
          children: l.map((x, n) => {
            const o = n / l.length, c = o + 1 / l.length;
            return /* @__PURE__ */ e.jsx(f, { progress: a, range: [o, c], children: x }, n);
          })
        }
      )
    }
  ) });
}, f = ({ children: t, progress: r, range: s }) => {
  const a = u(r, s, [0, 1]);
  return /* @__PURE__ */ e.jsxs("span", { className: "xl:lg-3 relative mx-1 lg:mx-1.5", children: [
    /* @__PURE__ */ e.jsx("span", { className: "absolute opacity-30", children: t }),
    /* @__PURE__ */ e.jsx(
      p.span,
      {
        style: { opacity: a },
        className: "text-black dark:text-white",
        children: t
      }
    )
  ] });
};
function v() {
  return /* @__PURE__ */ e.jsx(g, { children: "Magic UI will change the way you design." });
}
export {
  v as default
};
