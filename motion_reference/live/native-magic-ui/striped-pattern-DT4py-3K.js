import { r as c, j as e, c as u } from "./inline-Mcm4wFdg.js";
function h({
  direction: n = "left",
  className: o,
  width: l = 10,
  height: x = 10,
  ...i
}) {
  const s = c.useId(), r = Number(l), t = Number(x);
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: u(
        "pointer-events-none absolute inset-0 z-10 h-full w-full stroke-[0.5]",
        o
      ),
      xmlns: "http://www.w3.org/2000/svg",
      ...i,
      children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("pattern", { id: s, width: r, height: t, patternUnits: "userSpaceOnUse", children: n === "left" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("line", { x1: "0", y1: t, x2: r, y2: "0", stroke: "currentColor" }),
          /* @__PURE__ */ e.jsx("line", { x1: -r, y1: t, x2: "0", y2: "0", stroke: "currentColor" }),
          /* @__PURE__ */ e.jsx("line", { x1: r, y1: t, x2: r * 2, y2: "0", stroke: "currentColor" })
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "0", x2: r, y2: t, stroke: "currentColor" }),
          /* @__PURE__ */ e.jsx("line", { x1: -r, y1: "0", x2: "0", y2: t, stroke: "currentColor" }),
          /* @__PURE__ */ e.jsx("line", { x1: r, y1: "0", x2: r * 2, y2: t, stroke: "currentColor" })
        ] }) }) }),
        /* @__PURE__ */ e.jsx("rect", { width: "100%", height: "100%", fill: `url(#${s})` })
      ]
    }
  );
}
export {
  h as S
};
