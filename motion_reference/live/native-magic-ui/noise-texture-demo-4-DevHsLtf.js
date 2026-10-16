import { j as e } from "./inline-Mcm4wFdg.js";
import { L as r, I as s } from "./label-Bwoggqcy.js";
import { N as o } from "./noise-texture-DeLr-AFM.js";
function n() {
  return /* @__PURE__ */ e.jsxs("div", { className: "mx-auto flex max-w-sm flex-col gap-3 p-4", children: [
    /* @__PURE__ */ e.jsx(r, { className: "text-muted-foreground", htmlFor: "noise-input-demo", children: "Search with texture" }),
    /* @__PURE__ */ e.jsxs("div", { className: "bg-muted/30 relative overflow-hidden rounded-lg border", children: [
      /* @__PURE__ */ e.jsx(o, { noiseOpacity: 0.45 }),
      /* @__PURE__ */ e.jsx(
        s,
        {
          className: "relative z-10 border-0 bg-transparent shadow-none focus-visible:ring-2",
          id: "noise-input-demo",
          placeholder: "Try typing…",
          type: "search"
        }
      )
    ] })
  ] });
}
export {
  n as default
};
