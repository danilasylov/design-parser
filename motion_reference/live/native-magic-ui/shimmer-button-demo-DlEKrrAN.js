import { R as m, j as e, c as a } from "./inline-Mcm4wFdg.js";
const r = m.forwardRef(
  ({
    shimmerColor: t = "#ffffff",
    shimmerSize: s = "0.05em",
    shimmerDuration: n = "3s",
    borderRadius: i = "100px",
    background: o = "rgba(0, 0, 0, 1)",
    className: d,
    children: f,
    ...l
  }, u) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      style: {
        "--spread": "90deg",
        "--shimmer-color": t,
        "--radius": i,
        "--speed": n,
        "--cut": s,
        "--bg": o
      },
      className: a(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        d
      ),
      ref: u,
      ...l,
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: a(
              "-z-30 blur-[2px]",
              "@container-[size] absolute inset-0 overflow-visible"
            ),
            children: /* @__PURE__ */ e.jsx("div", { className: "animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]", children: /* @__PURE__ */ e.jsx("div", { className: "animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" }) })
          }
        ),
        f,
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: a(
              "absolute inset-0 size-full",
              "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              // transition
              "transform-gpu transition-all duration-300 ease-in-out",
              // on hover
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              // on click
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: a(
              "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
            )
          }
        )
      ]
    }
  )
);
r.displayName = "ShimmerButton";
function p() {
  return /* @__PURE__ */ e.jsx(r, { className: "shadow-2xl", children: /* @__PURE__ */ e.jsx("span", { className: "text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10", children: "Shimmer Button" }) });
}
export {
  p as default
};
