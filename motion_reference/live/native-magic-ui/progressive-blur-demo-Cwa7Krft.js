import { j as t, c as m } from "./inline-Mcm4wFdg.js";
import { S as c } from "./scroll-area-CwGXz2n3.js";
function x({
  className: o,
  height: g = "30%",
  position: r = "bottom",
  blurLevels: a = [0.5, 1, 2, 4, 8, 16, 32, 64]
}) {
  const s = Array(a.length - 2).fill(null);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: m(
        "gradient-blur pointer-events-none absolute inset-x-0 z-10",
        o,
        r === "top" ? "top-0" : r === "bottom" ? "bottom-0" : "inset-y-0"
      ),
      style: {
        height: r === "both" ? "100%" : g
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              zIndex: 1,
              backdropFilter: `blur(${a[0]}px)`,
              WebkitBackdropFilter: `blur(${a[0]}px)`,
              maskImage: r === "bottom" ? "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)" : r === "top" ? "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)" : "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: r === "bottom" ? "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)" : r === "top" ? "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)" : "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)"
            }
          }
        ),
        s.map((p, n) => {
          const e = n + 1, l = e * 12.5, i = (e + 1) * 12.5, b = (e + 2) * 12.5, d = r === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) ${l}%, rgba(0,0,0,1) ${i}%, rgba(0,0,0,1) ${b}%, rgba(0,0,0,0) ${b + 12.5}%)` : r === "top" ? `linear-gradient(to top, rgba(0,0,0,0) ${l}%, rgba(0,0,0,1) ${i}%, rgba(0,0,0,1) ${b}%, rgba(0,0,0,0) ${b + 12.5}%)` : "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)";
          return /* @__PURE__ */ t.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                zIndex: n + 2,
                backdropFilter: `blur(${a[e]}px)`,
                WebkitBackdropFilter: `blur(${a[e]}px)`,
                maskImage: d,
                WebkitMaskImage: d
              }
            },
            `blur-${n}`
          );
        }),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              zIndex: a.length,
              backdropFilter: `blur(${a[a.length - 1]}px)`,
              WebkitBackdropFilter: `blur(${a[a.length - 1]}px)`,
              maskImage: r === "bottom" ? "linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)" : r === "top" ? "linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)" : "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: r === "bottom" ? "linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)" : r === "top" ? "linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)" : "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)"
            }
          }
        )
      ]
    }
  );
}
function h() {
  return /* @__PURE__ */ t.jsx("div", { className: "relative w-full rounded-xl border", children: /* @__PURE__ */ t.jsxs(c, { className: "relative h-[400px] overflow-hidden", children: [
    /* @__PURE__ */ t.jsx("div", { className: "flex flex-col gap-2 p-4", children: Array.from({ length: 20 }).map((o, g) => /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "bg-card flex h-20 w-full items-center justify-center rounded-xl border",
        children: g
      },
      g
    )) }),
    /* @__PURE__ */ t.jsx(x, { position: "bottom", height: "40%" })
  ] }) });
}
export {
  h as default
};
