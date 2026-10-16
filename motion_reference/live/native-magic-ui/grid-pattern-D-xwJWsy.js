import { r as x, j as e, c as f } from "./inline-Mcm4wFdg.js";
function u({
  width: s = 40,
  height: r = 40,
  x: t = -1,
  y: n = -1,
  strokeDasharray: c = "0",
  squares: l,
  className: d,
  ...p
}) {
  const a = x.useId();
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: f(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        d
      ),
      ...p,
      children: [
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx(
          "pattern",
          {
            id: a,
            width: s,
            height: r,
            patternUnits: "userSpaceOnUse",
            x: t,
            y: n,
            children: /* @__PURE__ */ e.jsx(
              "path",
              {
                d: `M.5 ${r}V.5H${s}`,
                fill: "none",
                strokeDasharray: c
              }
            )
          }
        ) }),
        /* @__PURE__ */ e.jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: `url(#${a})` }),
        l && /* @__PURE__ */ e.jsx("svg", { x: t, y: n, className: "overflow-visible", children: l.map(([i, o]) => /* @__PURE__ */ e.jsx(
          "rect",
          {
            strokeWidth: "0",
            width: s - 1,
            height: r - 1,
            x: i * s + 1,
            y: o * r + 1
          },
          `${i}-${o}`
        )) })
      ]
    }
  );
}
export {
  u as G
};
