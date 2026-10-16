import { r as t, j as w, c as W, u as G } from "./inline-Mcm4wFdg.js";
function J() {
  const [s, f] = t.useState({
    x: 0,
    y: 0
  });
  return t.useEffect(() => {
    const d = (m) => {
      f({ x: m.clientX, y: m.clientY });
    };
    return window.addEventListener("mousemove", d), () => {
      window.removeEventListener("mousemove", d);
    };
  }, []), s;
}
function K(s) {
  s = s.replace("#", ""), s.length === 3 && (s = s.split("").map((g) => g + g).join(""));
  const f = parseInt(s, 16), d = f >> 16 & 255, m = f >> 8 & 255, C = f & 255;
  return [d, m, C];
}
const O = ({
  className: s = "",
  quantity: f = 100,
  staticity: d = 50,
  ease: m = 50,
  size: C = 0.4,
  refresh: g = !1,
  color: X = "#ffffff",
  vx: F = 0,
  vy: N = 0,
  ...S
}) => {
  const l = t.useRef(null), v = t.useRef(null), o = t.useRef(null), R = t.useRef([]), y = J(), z = t.useRef({ x: 0, y: 0 }), r = t.useRef({ w: 0, h: 0 }), h = typeof window < "u" ? window.devicePixelRatio : 1, P = t.useRef(null), p = t.useRef(null), M = t.useRef(() => {
  }), Y = t.useRef(() => {
  }), b = t.useRef(() => {
  });
  t.useEffect(() => {
    l.current && (o.current = l.current.getContext("2d")), M.current(), b.current();
    const e = () => {
      p.current && clearTimeout(p.current), p.current = setTimeout(() => {
        M.current();
      }, 200);
    };
    return window.addEventListener("resize", e), () => {
      P.current != null && window.cancelAnimationFrame(P.current), p.current && clearTimeout(p.current), window.removeEventListener("resize", e);
    };
  }, [X]), t.useEffect(() => {
    Y.current();
  }, [y.x, y.y]), t.useEffect(() => {
    M.current();
  }, [g]);
  const I = () => {
    $(), D();
  }, L = () => {
    if (l.current) {
      const e = l.current.getBoundingClientRect(), { w: n, h: a } = r.current, u = y.x - e.left - n / 2, c = y.y - e.top - a / 2;
      u < n / 2 && u > -n / 2 && c < a / 2 && c > -a / 2 && (z.current.x = u, z.current.y = c);
    }
  }, $ = () => {
    if (v.current && l.current && o.current) {
      r.current.w = v.current.offsetWidth, r.current.h = v.current.offsetHeight, l.current.width = r.current.w * h, l.current.height = r.current.h * h, l.current.style.width = `${r.current.w}px`, l.current.style.height = `${r.current.h}px`, o.current.scale(h, h), R.current = [];
      for (let e = 0; e < f; e++) {
        const n = j();
        E(n);
      }
    }
  }, j = () => {
    const e = Math.floor(Math.random() * r.current.w), n = Math.floor(Math.random() * r.current.h), a = 0, u = 0, c = Math.floor(Math.random() * 2) + C, i = 0, x = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)), T = (Math.random() - 0.5) * 0.1, H = (Math.random() - 0.5) * 0.1, V = 0.1 + Math.random() * 4;
    return {
      x: e,
      y: n,
      translateX: a,
      translateY: u,
      size: c,
      alpha: i,
      targetAlpha: x,
      dx: T,
      dy: H,
      magnetism: V
    };
  }, k = K(X), E = (e, n = !1) => {
    if (o.current) {
      const { x: a, y: u, translateX: c, translateY: i, size: x, alpha: T } = e;
      o.current.translate(c, i), o.current.beginPath(), o.current.arc(a, u, x, 0, 2 * Math.PI), o.current.fillStyle = `rgba(${k.join(", ")}, ${T})`, o.current.fill(), o.current.setTransform(h, 0, 0, h, 0, 0), n || R.current.push(e);
    }
  }, A = () => {
    o.current && o.current.clearRect(
      0,
      0,
      r.current.w,
      r.current.h
    );
  }, D = () => {
    A();
    const e = f;
    for (let n = 0; n < e; n++) {
      const a = j();
      E(a);
    }
  }, q = (e, n, a, u, c) => {
    const i = (e - n) * (c - u) / (a - n) + u;
    return i > 0 ? i : 0;
  }, B = () => {
    A(), R.current.forEach((e, n) => {
      const u = [
        e.x + e.translateX - e.size,
        // distance from left edge
        r.current.w - e.x - e.translateX - e.size,
        // distance from right edge
        e.y + e.translateY - e.size,
        // distance from top edge
        r.current.h - e.y - e.translateY - e.size
        // distance from bottom edge
      ].reduce((i, x) => Math.min(i, x)), c = parseFloat(
        q(u, 0, 20, 0, 1).toFixed(2)
      );
      if (c > 1 ? (e.alpha += 0.02, e.alpha > e.targetAlpha && (e.alpha = e.targetAlpha)) : e.alpha = e.targetAlpha * c, e.x += e.dx + F, e.y += e.dy + N, e.translateX += (z.current.x / (d / e.magnetism) - e.translateX) / m, e.translateY += (z.current.y / (d / e.magnetism) - e.translateY) / m, E(e, !0), e.x < -e.size || e.x > r.current.w + e.size || e.y < -e.size || e.y > r.current.h + e.size) {
        R.current.splice(n, 1);
        const i = j();
        E(i);
      }
    }), P.current = window.requestAnimationFrame(b.current);
  };
  return M.current = I, Y.current = L, b.current = B, /* @__PURE__ */ w.jsx(
    "div",
    {
      className: W("pointer-events-none", s),
      ref: v,
      "aria-hidden": "true",
      ...S,
      children: /* @__PURE__ */ w.jsx("canvas", { ref: l, className: "size-full" })
    }
  );
};
function U() {
  const { resolvedTheme: s } = G(), [f, d] = t.useState("#ffffff");
  return t.useEffect(() => {
    d(s === "dark" ? "#ffffff" : "#000000");
  }, [s]), /* @__PURE__ */ w.jsxs("div", { className: "bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ w.jsx("span", { className: "pointer-events-none z-10 text-center text-8xl leading-none font-semibold whitespace-pre-wrap", children: "Particles" }),
    /* @__PURE__ */ w.jsx(
      O,
      {
        className: "absolute inset-0 z-0",
        quantity: 100,
        ease: 80,
        color: f,
        refresh: !0
      }
    )
  ] });
}
export {
  U as default
};
