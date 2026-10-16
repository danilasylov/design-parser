import { r as o, j as e } from "./inline-Mcm4wFdg.js";
import { a as n } from "./confetti-CIvLP_I4.js";
function l() {
  const t = o.useRef(null);
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10", children: "Confetti" }),
    /* @__PURE__ */ e.jsx(
      n,
      {
        ref: t,
        className: "absolute top-0 left-0 z-0 size-full",
        onMouseEnter: () => {
          var r;
          (r = t.current) == null || r.fire({});
        }
      }
    )
  ] });
}
export {
  l as default
};
