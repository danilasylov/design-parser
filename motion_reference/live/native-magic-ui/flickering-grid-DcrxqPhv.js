import { r as c, j, c as H } from "./inline-Mcm4wFdg.js";
const P = ({
  squareSize: a = 4,
  gridGap: d = 6,
  flickerChance: b = 0.3,
  color: v = "rgb(0, 0, 0)",
  width: R,
  height: C,
  className: p,
  maxOpacity: h = 0.3,
  ...E
}) => {
  const $ = c.useRef(null), y = c.useRef(null), [g, k] = c.useState(!1), [A, B] = c.useState({ width: 0, height: 0 }), F = c.useMemo(() => ((s) => {
    if (typeof window > "u")
      return "rgba(0, 0, 0,";
    const n = document.createElement("canvas");
    n.width = n.height = 1;
    const l = n.getContext("2d");
    if (!l) return "rgba(255, 0, 0,";
    l.fillStyle = s, l.fillRect(0, 0, 1, 1);
    const [r, o, t] = Array.from(l.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${o}, ${t},`;
  })(v), [v]), I = c.useCallback(
    (e, s, n) => {
      const l = window.devicePixelRatio || 1;
      e.width = s * l, e.height = n * l, e.style.width = `${s}px`, e.style.height = `${n}px`;
      const r = Math.ceil(s / (a + d)), o = Math.ceil(n / (a + d)), t = new Float32Array(r * o);
      for (let i = 0; i < t.length; i++)
        t[i] = Math.random() * h;
      return { cols: r, rows: o, squares: t, dpr: l };
    },
    [a, d, h]
  ), x = c.useCallback(
    (e, s) => {
      for (let n = 0; n < e.length; n++)
        Math.random() < b * s && (e[n] = Math.random() * h);
    },
    [b, h]
  ), M = c.useCallback(
    (e, s, n, l, r, o, t) => {
      e.clearRect(0, 0, s, n), e.fillStyle = "transparent", e.fillRect(0, 0, s, n);
      for (let i = 0; i < l; i++)
        for (let f = 0; f < r; f++) {
          const m = o[i * r + f];
          e.fillStyle = `${F}${m})`, e.fillRect(
            i * (a + d) * t,
            f * (a + d) * t,
            a * t,
            a * t
          );
        }
    },
    [F, a, d]
  );
  return c.useEffect(() => {
    const e = $.current, s = y.current, n = (e == null ? void 0 : e.getContext("2d")) ?? null;
    let l = null, r = null, o = null, t = null;
    if (e && s && n) {
      const i = () => {
        const u = R || s.clientWidth, w = C || s.clientHeight;
        B({ width: u, height: w }), t = I(e, u, w);
      };
      i();
      let f = 0;
      const m = (u) => {
        if (!g || !t) return;
        const w = (u - f) / 1e3;
        f = u, x(t.squares, w), M(
          n,
          e.width,
          e.height,
          t.cols,
          t.rows,
          t.squares,
          t.dpr
        ), l = requestAnimationFrame(m);
      };
      r = new ResizeObserver(() => {
        i();
      }), r.observe(s), o = new IntersectionObserver(
        ([u]) => {
          k(u.isIntersecting);
        },
        { threshold: 0 }
      ), o.observe(e), g && (l = requestAnimationFrame(m));
    }
    return () => {
      l !== null && cancelAnimationFrame(l), r && r.disconnect(), o && o.disconnect();
    };
  }, [I, x, M, R, C, g]), /* @__PURE__ */ j.jsx(
    "div",
    {
      ref: y,
      className: H(`h-full w-full ${p}`),
      ...E,
      children: /* @__PURE__ */ j.jsx(
        "canvas",
        {
          ref: $,
          className: "pointer-events-none",
          style: {
            width: A.width,
            height: A.height
          }
        }
      )
    }
  );
};
export {
  P as F
};
