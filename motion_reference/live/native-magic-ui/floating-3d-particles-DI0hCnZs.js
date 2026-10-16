import { r as v, j as B, c as T } from "./inline-Mcm4wFdg.js";
const Y = 768, j = 1.2, q = 2;
function N(d, a) {
  const s = d.replace("#", "").trim(), i = s.length === 3 ? s.split("").map((l) => l + l).join("") : s;
  if (!/^[0-9a-f]{6}$/i.test(i)) return `rgba(139,92,246,${a})`;
  const c = Number.parseInt(i, 16);
  return `rgba(${c >> 16 & 255},${c >> 8 & 255},${c & 255},${a})`;
}
function V(d) {
  const a = Math.max(0, Math.min(1, d)), s = 800 - a * 600, i = 100 + a * 700, c = a * Math.min(400, s + i - 1);
  return { fov: s, perspectiveDistance: i, depthRange: c };
}
function _(d, a, s, i) {
  const c = s * 0.4, l = 0.2;
  return {
    angle: Math.random() * Math.PI * 2,
    radius: Math.random() * Math.max(d, a) * j,
    y: (Math.random() - 0.5) * a * 2,
    size: Math.max(0.5, s - c + Math.random() * c * 2),
    angularSpeed: 15e-4 + Math.random() * 1e-3,
    opacity: Math.min(
      1,
      Math.max(
        0,
        i - l + Math.random() * l * 2
      )
    ),
    screenX: 0,
    screenY: 0,
    projectedScale: 1
  };
}
function K({
  quantity: d = 400,
  color: a = "#8B5CF6",
  size: s = 5,
  opacity: i = 0.3,
  drift: c = 0.8,
  depth: l = 0.5,
  className: O,
  style: z,
  ...D
}) {
  const A = v.useRef(null), x = v.useRef(null), $ = v.useRef({
    mounted: !1,
    paused: !1,
    reducedMotion: !1,
    rafId: null
  }), F = v.useRef(a);
  return F.current = a, v.useEffect(() => {
    const m = A.current;
    if (!m) return;
    const f = m.getContext("2d", { alpha: !0 });
    if (!f) return;
    const n = $.current;
    n.mounted = !0, n.paused = !1;
    let u = 0, r = 0, g = [], R = !0;
    const { fov: w, perspectiveDistance: P, depthRange: C } = V(l), I = window.matchMedia("(prefers-reduced-motion: reduce)"), E = () => {
      n.reducedMotion = I.matches;
    };
    E();
    const S = (t) => {
      const o = Math.max(0, t.size * t.projectedScale);
      o <= 0 || (f.beginPath(), f.fillStyle = N(F.current, t.opacity), f.arc(t.screenX, t.screenY, o, 0, Math.PI * 2), f.fill());
    }, X = () => {
      f.clearRect(0, 0, u, r);
      const t = u / 2, o = r / 2;
      for (const e of g) {
        const h = Math.max(1, w + P), M = w / h;
        e.screenX = t + Math.cos(e.angle) * e.radius * M, e.screenY = o + e.y * M, e.projectedScale = M, S(e);
      }
    }, y = () => {
      if (!n.mounted) return;
      if (n.paused) {
        n.rafId = requestAnimationFrame(y);
        return;
      }
      if (n.reducedMotion) {
        R && (R = !1, X()), n.rafId = requestAnimationFrame(y);
        return;
      }
      R = !0, f.clearRect(0, 0, u, r);
      const t = u / 2, o = r / 2;
      for (const e of g) {
        e.angle += e.angularSpeed, e.y -= c, e.y < -r ? (e.y = r, e.radius = Math.random() * Math.max(u, r) * j) : e.y > r && (e.y = -r, e.radius = Math.random() * Math.max(u, r) * j);
        const h = Math.max(
          1,
          w + P + Math.sin(e.angle) * C
        ), M = w / h;
        e.screenX = t + Math.cos(e.angle) * e.radius * M, e.screenY = o + e.y * M, e.projectedScale = M;
      }
      g.sort((e, h) => e.projectedScale - h.projectedScale);
      for (const e of g) S(e);
      n.rafId = requestAnimationFrame(y);
    }, b = () => {
      const t = m.getBoundingClientRect();
      u = Math.max(1, Math.round(t.width)), r = Math.max(1, Math.round(t.height));
      const o = Math.max(1, Math.min(window.devicePixelRatio || 1, q));
      m.width = Math.round(u * o), m.height = Math.round(r * o), f.setTransform(o, 0, 0, o, 0, 0);
      const h = window.innerWidth < Y ? Math.round(d * 0.2) : d;
      g = Array.from(
        { length: Math.max(0, h) },
        () => _(u, r, s, i)
      ), R = !0;
    }, L = () => {
      n.paused = document.hidden;
    }, p = typeof ResizeObserver < "u" ? new ResizeObserver(b) : null;
    return p ? p.observe(m) : window.addEventListener("resize", b), typeof IntersectionObserver < "u" && (x.current = new IntersectionObserver(
      ([t]) => {
        t && (n.paused = document.hidden || !t.isIntersecting);
      },
      { threshold: 0 }
    ), x.current.observe(m)), document.addEventListener("visibilitychange", L), I.addEventListener("change", E), b(), n.rafId = requestAnimationFrame(y), () => {
      var t;
      n.mounted = !1, n.rafId !== null && (cancelAnimationFrame(n.rafId), n.rafId = null), p == null || p.disconnect(), p || window.removeEventListener("resize", b), (t = x.current) == null || t.disconnect(), x.current = null, document.removeEventListener("visibilitychange", L), I.removeEventListener("change", E);
    };
  }, [d, s, i, c, l]), /* @__PURE__ */ B.jsx(
    "canvas",
    {
      ref: A,
      "aria-hidden": "true",
      className: T(
        "pointer-events-none absolute inset-0 h-full w-full",
        O
      ),
      style: z,
      ...D
    }
  );
}
export {
  K as F
};
