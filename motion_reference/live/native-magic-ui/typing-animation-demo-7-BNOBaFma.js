import { j as e } from "./inline-Mcm4wFdg.js";
import { T as s } from "./typing-animation-DVz44YTr.js";
function i() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-8", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground mb-2 text-sm", children: "With blinking cursor (default) - watch during pause" }),
      /* @__PURE__ */ e.jsx(
        s,
        {
          words: ["Type", "Pause", "Delete"],
          blinkCursor: !0,
          pauseDelay: 2e3,
          loop: !0,
          className: "text-4xl font-bold",
          children: "Blinking cursor"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground mb-2 text-sm", children: "Without blinking cursor - static during pause" }),
      /* @__PURE__ */ e.jsx(
        s,
        {
          words: ["Type", "Pause", "Delete"],
          blinkCursor: !1,
          pauseDelay: 2e3,
          loop: !0,
          className: "text-4xl font-bold",
          children: "Static cursor"
        }
      )
    ] })
  ] });
}
export {
  i as default
};
