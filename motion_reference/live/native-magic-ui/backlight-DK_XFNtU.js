import { r as a, j as r } from "./inline-Mcm4wFdg.js";
function u({ blur: i = 20, children: t, className: s }) {
  const e = a.useId();
  return /* @__PURE__ */ r.jsxs("div", { className: s, children: [
    /* @__PURE__ */ r.jsx("svg", { width: "0", height: "0", "aria-hidden": "true", children: /* @__PURE__ */ r.jsxs("filter", { id: e, y: "-50%", x: "-50%", width: "200%", height: "200%", children: [
      /* @__PURE__ */ r.jsx(
        "feGaussianBlur",
        {
          in: "SourceGraphic",
          stdDeviation: i,
          result: "blurred"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "feColorMatrix",
        {
          type: "saturate",
          in: "blurred",
          values: "4"
        }
      ),
      /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", operator: "over" })
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { style: { filter: `url(#${e})` }, children: t })
  ] });
}
export {
  u as B
};
