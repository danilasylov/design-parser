import { r as n, j as e, m as T } from "./inline-Mcm4wFdg.js";
import { u as m } from "./use-spring-C8QKVjC2.js";
const I = "(any-hover: hover) and (any-pointer: fine)";
function S(h) {
  return h !== "touch";
}
const R = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 50,
    height: 54,
    viewBox: "0 0 50 54",
    fill: "none",
    style: { scale: 0.5 },
    children: [
      /* @__PURE__ */ e.jsxs("g", { filter: "url(#filter0_d_91_7928)", children: [
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z",
            fill: "black"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z",
            stroke: "white",
            strokeWidth: 2.25825
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
        "filter",
        {
          id: "filter0_d_91_7928",
          x: 0.602397,
          y: 0.952444,
          width: 49.0584,
          height: 52.428,
          filterUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [
            /* @__PURE__ */ e.jsx("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            /* @__PURE__ */ e.jsx(
              "feColorMatrix",
              {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
              }
            ),
            /* @__PURE__ */ e.jsx("feOffset", { dy: 2.25825 }),
            /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: 2.25825 }),
            /* @__PURE__ */ e.jsx("feComposite", { in2: "hardAlpha", operator: "out" }),
            /* @__PURE__ */ e.jsx(
              "feColorMatrix",
              {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "feBlend",
              {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_91_7928"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "feBlend",
              {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_91_7928",
                result: "shape"
              }
            )
          ]
        }
      ) })
    ]
  }
);
function k({
  cursor: h = /* @__PURE__ */ e.jsx(R, {}),
  springConfig: u = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 1e-3
  }
}) {
  const p = n.useRef({ x: 0, y: 0 }), o = n.useRef({ x: 0, y: 0 }), w = n.useRef(Date.now()), E = n.useRef(0), g = n.useRef(0), [x, L] = n.useState(!1), [M, _] = n.useState(!1), y = m(0, u), v = m(0, u), j = m(0, {
    ...u,
    damping: 60,
    stiffness: 300
  }), d = m(1, {
    ...u,
    stiffness: 500,
    damping: 35
  });
  return n.useEffect(() => {
    const s = window.matchMedia(I), i = () => {
      const f = s.matches;
      L(f), f || _(!1);
    };
    return i(), s.addEventListener("change", i), () => {
      s.removeEventListener("change", i);
    };
  }, []), n.useEffect(() => {
    if (!x)
      return;
    let s = null;
    const i = (t) => {
      const r = Date.now(), l = r - w.current;
      l > 0 && (o.current = {
        x: (t.x - p.current.x) / l,
        y: (t.y - p.current.y) / l
      }), w.current = r, p.current = t;
    }, f = (t) => {
      if (!S(t.pointerType))
        return;
      _(!0);
      const r = { x: t.clientX, y: t.clientY };
      i(r);
      const l = Math.sqrt(
        Math.pow(o.current.x, 2) + Math.pow(o.current.y, 2)
      );
      if (y.set(r.x), v.set(r.y), l > 0.1) {
        const C = Math.atan2(o.current.y, o.current.x) * (180 / Math.PI) + 90;
        let c = C - E.current;
        c > 180 && (c -= 360), c < -180 && (c += 360), g.current += c, j.set(g.current), E.current = C, d.set(0.95), s !== null && clearTimeout(s), s = setTimeout(() => {
          d.set(1);
        }, 150);
      }
    };
    let a = 0;
    const b = (t) => {
      S(t.pointerType) && (a || (a = requestAnimationFrame(() => {
        f(t), a = 0;
      })));
    };
    return document.body.style.cursor = "none", window.addEventListener("pointermove", b, {
      passive: !0
    }), () => {
      window.removeEventListener("pointermove", b), document.body.style.cursor = "auto", a && cancelAnimationFrame(a), s !== null && clearTimeout(s);
    };
  }, [y, v, j, d, x]), x ? /* @__PURE__ */ e.jsx(
    T.div,
    {
      style: {
        position: "fixed",
        left: y,
        top: v,
        translateX: "-50%",
        translateY: "-50%",
        rotate: j,
        scale: d,
        zIndex: 100,
        pointerEvents: "none",
        willChange: "transform",
        opacity: M ? 1 : 0
      },
      initial: !1,
      animate: { opacity: M ? 1 : 0 },
      transition: {
        duration: 0.15
      },
      children: h
    }
  ) : null;
}
function B() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "hidden md:block", children: "Move your mouse around" }),
    /* @__PURE__ */ e.jsx("span", { className: "block md:hidden", children: "SmoothCursor is disabled on touch devices" }),
    /* @__PURE__ */ e.jsx(k, {})
  ] });
}
export {
  B as default
};
