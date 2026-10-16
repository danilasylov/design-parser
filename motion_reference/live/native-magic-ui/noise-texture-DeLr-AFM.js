import { r as l, j as e, c as o } from "./inline-Mcm4wFdg.js";
const x = ({
  className: r,
  frequency: n = 0.4,
  octaves: i = 6,
  slope: t = 0.15,
  noiseOpacity: a = 0.6,
  ...c
}) => {
  const s = l.useId();
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: o(
        "pointer-events-none absolute inset-0 z-0 size-full opacity-50 select-none dark:opacity-[0.75]",
        r
      ),
      xmlns: "http://www.w3.org/2000/svg",
      ...c,
      children: [
        /* @__PURE__ */ e.jsxs("filter", { id: s, children: [
          /* @__PURE__ */ e.jsx(
            "feTurbulence",
            {
              type: "fractalNoise",
              baseFrequency: n,
              numOctaves: i,
              stitchTiles: "stitch"
            }
          ),
          /* @__PURE__ */ e.jsx("feColorMatrix", { type: "saturate", values: "0" }),
          /* @__PURE__ */ e.jsxs("feComponentTransfer", { children: [
            /* @__PURE__ */ e.jsx("feFuncR", { type: "linear", slope: t }),
            /* @__PURE__ */ e.jsx("feFuncG", { type: "linear", slope: t }),
            /* @__PURE__ */ e.jsx("feFuncB", { type: "linear", slope: t })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "rect",
          {
            width: "100%",
            height: "100%",
            filter: `url(#${s})`,
            opacity: a
          }
        )
      ]
    }
  );
};
export {
  x as N
};
