import { j as e } from "./inline-Mcm4wFdg.js";
import { S as a, a as l } from "./scroll-based-velocity-kI14kiEl.js";
const o = [
  "/live/magic-ui/external/7e048f9d52d9462405.jpg",
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
], t = [
  "/live/magic-ui/external/7e048f9d52d9462405.jpg",
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
function n() {
  return /* @__PURE__ */ e.jsxs("div", { className: "relative flex w-full flex-col items-center justify-center overflow-hidden py-8", children: [
    /* @__PURE__ */ e.jsxs(a, { className: "w-full", children: [
      /* @__PURE__ */ e.jsx(l, { baseVelocity: 6, direction: 1, className: "py-4", children: o.map((i, s) => /* @__PURE__ */ e.jsx(
        "img",
        {
          src: `${i}&ixlib=rb-4.0.3`,
          alt: "Unsplash sample",
          width: 240,
          height: 160,
          loading: "lazy",
          decoding: "async",
          className: "mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
        },
        s
      )) }),
      /* @__PURE__ */ e.jsx(l, { baseVelocity: 6, direction: -1, className: "py-4", children: t.map((i, s) => /* @__PURE__ */ e.jsx(
        "img",
        {
          src: `${i}&ixlib=rb-4.0.3`,
          alt: "Unsplash sample",
          width: 240,
          height: 160,
          loading: "lazy",
          decoding: "async",
          className: "mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" })
  ] });
}
export {
  n as default
};
