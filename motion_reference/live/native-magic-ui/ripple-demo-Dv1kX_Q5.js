import { R as c, j as t, c as m } from "./inline-Mcm4wFdg.js";
const o = c.memo(function({
  mainCircleSize: n = 210,
  mainCircleOpacity: s = 0.24,
  numCircles: a = 8,
  className: l,
  ...i
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: m(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        l
      ),
      ...i,
      children: Array.from({ length: a }, (u, e) => {
        const r = n + e * 70, d = s - e * 0.03, p = `${e * 0.06}s`;
        return /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl",
            style: {
              "--i": e,
              width: `${r}px`,
              height: `${r}px`,
              opacity: d,
              animationDelay: p,
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "var(--foreground)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)"
            }
          },
          e
        );
      })
    }
  );
});
o.displayName = "Ripple";
function b() {
  return /* @__PURE__ */ t.jsxs("div", { className: "bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ t.jsx("p", { className: "z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-white", children: "Ripple" }),
    /* @__PURE__ */ t.jsx(o, {})
  ] });
}
export {
  b as default
};
