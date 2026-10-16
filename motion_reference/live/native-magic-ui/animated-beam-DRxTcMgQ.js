import { r as c, j as t, m as H, c as M } from "./inline-Mcm4wFdg.js";
const Y = ({
  className: C,
  containerRef: e,
  fromRef: a,
  toRef: h,
  curvature: p = 0,
  reverse: b = !1,
  // Include the reverse prop
  duration: D = 5,
  delay: A = 0,
  pathColor: E = "gray",
  pathWidth: d = 2,
  pathOpacity: O = 0.2,
  gradientStartColor: g = "#ffaa40",
  gradientStopColor: x = "#9c40ff",
  repeat: z = 1 / 0,
  repeatDelay: I = 0,
  startXOffset: l = 0,
  startYOffset: u = 0,
  endXOffset: y = 0,
  endYOffset: w = 0
}) => {
  const m = c.useId(), [j, L] = c.useState(""), [n, N] = c.useState({ width: 0, height: 0 }), o = b ? {
    x1: ["90%", "-10%"],
    x2: ["100%", "0%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  } : {
    x1: ["10%", "110%"],
    x2: ["0%", "100%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  };
  return c.useEffect(() => {
    const v = () => {
      if (e.current && a.current && h.current) {
        const s = e.current.getBoundingClientRect(), i = a.current.getBoundingClientRect(), r = h.current.getBoundingClientRect(), P = s.width, S = s.height;
        N({ width: P, height: S });
        const $ = i.left - s.left + i.width / 2 + l, f = i.top - s.top + i.height / 2 + u, B = r.left - s.left + r.width / 2 + y, U = r.top - s.top + r.height / 2 + w, W = f - p, G = `M ${$},${f} Q ${($ + B) / 2},${W} ${B},${U}`;
        L(G);
      }
    }, k = new ResizeObserver(() => {
      v();
    });
    return e.current && k.observe(e.current), v(), () => {
      k.disconnect();
    };
  }, [
    e,
    a,
    h,
    p,
    l,
    u,
    y,
    w
  ]), /* @__PURE__ */ t.jsxs(
    "svg",
    {
      fill: "none",
      width: n.width,
      height: n.height,
      xmlns: "http://www.w3.org/2000/svg",
      className: M(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        C
      ),
      viewBox: `0 0 ${n.width} ${n.height}`,
      children: [
        /* @__PURE__ */ t.jsx(
          "path",
          {
            d: j,
            stroke: E,
            strokeWidth: d,
            strokeOpacity: O,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ t.jsx(
          "path",
          {
            d: j,
            strokeWidth: d,
            stroke: `url(#${m})`,
            strokeOpacity: "1",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsxs(
          H.linearGradient,
          {
            className: "transform-gpu",
            id: m,
            gradientUnits: "userSpaceOnUse",
            initial: {
              x1: "0%",
              x2: "0%",
              y1: "0%",
              y2: "0%"
            },
            animate: {
              x1: o.x1,
              x2: o.x2,
              y1: o.y1,
              y2: o.y2
            },
            transition: {
              delay: A,
              duration: D,
              ease: [0.16, 1, 0.3, 1],
              // https://easings.net/#easeOutExpo
              repeat: z,
              repeatDelay: I
            },
            children: [
              /* @__PURE__ */ t.jsx("stop", { stopColor: g, stopOpacity: "0" }),
              /* @__PURE__ */ t.jsx("stop", { stopColor: g }),
              /* @__PURE__ */ t.jsx("stop", { offset: "32.5%", stopColor: x }),
              /* @__PURE__ */ t.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: x,
                  stopOpacity: "0"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
export {
  Y as A
};
