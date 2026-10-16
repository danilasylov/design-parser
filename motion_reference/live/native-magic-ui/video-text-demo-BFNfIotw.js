import { r as c, R as b, j as e, c as j } from "./inline-Mcm4wFdg.js";
function M({
  src: d,
  children: u,
  className: m = "",
  autoPlay: v = !0,
  muted: x = !0,
  loop: p = !0,
  preload: k = "auto",
  fontSize: s = 20,
  fontWeight: n = "bold",
  textAnchor: i = "middle",
  dominantBaseline: r = "middle",
  fontFamily: o = "sans-serif",
  as: w = "div"
}) {
  const [f, g] = c.useState(""), t = b.Children.toArray(u).join("");
  c.useEffect(() => {
    const a = () => {
      const h = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${typeof s == "number" ? `${s}vw` : s}' font-weight='${n}' text-anchor='${i}' dominant-baseline='${r}' font-family='${o}'>${t}</text></svg>`;
      g(h);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [t, s, n, i, r, o]);
  const l = `url("data:image/svg+xml,${encodeURIComponent(f)}")`;
  return /* @__PURE__ */ e.jsxs(w, { className: j("relative size-full", m), children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute inset-0 flex items-center justify-center",
        style: {
          maskImage: l,
          WebkitMaskImage: l,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center"
        },
        children: /* @__PURE__ */ e.jsxs(
          "video",
          {
            className: "h-full w-full object-cover",
            autoPlay: v,
            muted: x,
            loop: p,
            preload: k,
            playsInline: !0,
            children: [
              /* @__PURE__ */ e.jsx("source", { src: d }),
              "Your browser does not support the video tag."
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: t })
  ] });
}
function E() {
  return /* @__PURE__ */ e.jsx("div", { className: "relative h-[200px] w-full overflow-hidden", children: /* @__PURE__ */ e.jsx(M, { src: "/live/magic-ui/external/eea717a52273c2dbf4.webm", children: "OCEAN" }) });
}
export {
  E as default
};
