import { j as t, c as h, r } from "./inline-Mcm4wFdg.js";
const R = 1.5, g = 0.5, y = (s) => {
  const o = r.useRef(0), l = r.useRef(0), i = r.useRef(0), x = r.useRef(/* @__PURE__ */ new Date()), u = r.useRef(null), f = r.useRef(null), m = r.useCallback(
    (e) => {
      const [n, c] = [u.current, f.current];
      if (!n || !c) return;
      c.style.filter = `blur(${Math.min(8 / e - 8, 100)}px)`, c.style.opacity = `${Math.pow(e, 0.4) * 100}%`;
      const a = 1 - e;
      n.style.filter = `blur(${Math.min(
        8 / a - 8,
        100
      )}px)`, n.style.opacity = `${Math.pow(a, 0.4) * 100}%`, n.textContent = s[o.current % s.length], c.textContent = s[(o.current + 1) % s.length];
    },
    [s]
  ), p = r.useCallback(() => {
    l.current -= i.current, i.current = 0;
    let e = l.current / R;
    e > 1 && (i.current = g, e = 1), m(e), e === 1 && o.current++;
  }, [m]), d = r.useCallback(() => {
    l.current = 0;
    const [e, n] = [u.current, f.current];
    e && n && (n.style.filter = "none", n.style.opacity = "100%", e.style.filter = "none", e.style.opacity = "0%");
  }, []);
  return r.useEffect(() => {
    let e;
    const n = () => {
      e = requestAnimationFrame(n);
      const c = /* @__PURE__ */ new Date(), a = (c.getTime() - x.current.getTime()) / 1e3;
      x.current = c, i.current -= a, i.current <= 0 ? p() : d();
    };
    return n(), () => {
      cancelAnimationFrame(e);
    };
  }, [p, d]), { text1Ref: u, text2Ref: f };
}, j = ({ texts: s }) => {
  const { text1Ref: o, text2Ref: l } = y(s);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "span",
      {
        className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
        ref: o
      }
    ),
    /* @__PURE__ */ t.jsx(
      "span",
      {
        className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
        ref: l
      }
    )
  ] });
}, w = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    id: "filters",
    className: "fixed h-0 w-0",
    preserveAspectRatio: "xMidYMid slice",
    children: /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("filter", { id: "threshold", children: /* @__PURE__ */ t.jsx(
      "feColorMatrix",
      {
        in: "SourceGraphic",
        type: "matrix",
        values: `1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140`
      }
    ) }) })
  }
), M = ({
  texts: s,
  className: o
}) => /* @__PURE__ */ t.jsxs(
  "div",
  {
    className: h(
      "relative mx-auto h-16 w-full max-w-3xl text-center font-sans text-[40pt] leading-none font-bold filter-[url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]",
      o
    ),
    children: [
      /* @__PURE__ */ t.jsx(j, { texts: s }),
      /* @__PURE__ */ t.jsx(w, {})
    ]
  }
), b = [
  "Hello",
  "Morphing",
  "Text",
  "Animation",
  "React",
  "Component",
  "Smooth",
  "Transition",
  "Engaging"
];
function C() {
  return /* @__PURE__ */ t.jsx(M, { texts: b });
}
export {
  C as default
};
