import { Q as p, P as L, U as $, W as D, z as G, X as K, Y as j, L as _, q, Z as J, _ as R, $ as Q, a0 as Z, K as ee, r as w, O as te, a1 as S, a2 as V, I as x, G as O } from "./inline-Mcm4wFdg.js";
function X(e, t) {
  let s;
  const r = () => {
    const { currentTime: n } = t, i = (n === null ? 0 : n.value) / 100;
    s !== i && e(i), s = i;
  };
  return p.preUpdate(r, !0), () => L(r);
}
function E(e) {
  return typeof window > "u" ? !1 : e ? $() : D();
}
const se = 50, k = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
}), re = () => ({
  time: 0,
  x: k(),
  y: k()
}), ne = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function H(e, t, s, r) {
  const n = s[t], { length: l, position: i } = ne[t], c = n.current, f = s.time;
  n.current = Math.abs(e[`scroll${i}`]), n.scrollLength = e[`scroll${l}`] - e[`client${l}`], n.offset.length = 0, n.offset[0] = 0, n.offset[1] = n.scrollLength, n.progress = G(0, n.scrollLength, n.current);
  const o = r - f;
  n.velocity = o > se ? 0 : K(n.current - c, o);
}
function le(e, t, s) {
  H(e, "x", t, s), H(e, "y", t, s), t.time = s;
}
function ie(e, t) {
  const s = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (j(r))
      s.x += r.offsetLeft, s.y += r.offsetTop, r = r.offsetParent;
    else if (r.tagName === "svg") {
      const n = r.getBoundingClientRect();
      r = r.parentElement;
      const l = r.getBoundingClientRect();
      s.x += n.left - l.left, s.y += n.top - l.top;
    } else if (r instanceof SVGGraphicsElement) {
      const { x: n, y: l } = r.getBBox();
      s.x += n, s.y += l;
      let i = null, c = r.parentNode;
      for (; !i; )
        c.tagName === "svg" && (i = c), c = r.parentNode;
      r = i;
    } else
      break;
  return s;
}
const W = {
  start: 0,
  center: 0.5,
  end: 1
};
function b(e, t, s = 0) {
  let r = 0;
  if (e in W && (e = W[e]), typeof e == "string") {
    const n = parseFloat(e);
    e.endsWith("px") ? r = n : e.endsWith("%") ? e = n / 100 : e.endsWith("vw") ? r = n / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = n / 100 * document.documentElement.clientHeight : e = n;
  }
  return typeof e == "number" && (r = t * e), s + r;
}
const ce = [0, 0];
function oe(e, t, s, r) {
  let n = Array.isArray(e) ? e : ce, l = 0, i = 0;
  return typeof e == "number" ? n = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? n = e.split(" ") : n = [e, W[e] ? e : "0"]), l = b(n[0], s, r), i = b(n[1], t), l - i;
}
const y = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
}, fe = { x: 0, y: 0 };
function ue(e) {
  return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : { width: e.clientWidth, height: e.clientHeight };
}
function ae(e, t, s) {
  const { offset: r = y.All } = s, { target: n = e, axis: l = "y" } = s, i = l === "y" ? "height" : "width", c = n !== e ? ie(n, e) : fe, f = n === e ? { width: e.scrollWidth, height: e.scrollHeight } : ue(n), o = {
    width: e.clientWidth,
    height: e.clientHeight
  };
  t[l].offset.length = 0;
  let u = !t[l].interpolate;
  const d = r.length;
  for (let a = 0; a < d; a++) {
    const m = oe(r[a], o[i], f[i], c[l]);
    !u && m !== t[l].interpolatorOffsets[a] && (u = !0), t[l].offset[a] = m;
  }
  u && (t[l].interpolate = _(t[l].offset, q(r), { clamp: !1 }), t[l].interpolatorOffsets = [...t[l].offset]), t[l].progress = J(0, 1, t[l].interpolate(t[l].current));
}
function de(e, t = e, s) {
  if (s.x.targetOffset = 0, s.y.targetOffset = 0, t !== e) {
    let r = t;
    for (; r && r !== e; )
      s.x.targetOffset += r.offsetLeft, s.y.targetOffset += r.offsetTop, r = r.offsetParent;
  }
  s.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, s.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, s.x.containerLength = e.clientWidth, s.y.containerLength = e.clientHeight;
}
function ge(e, t, s, r = {}) {
  return {
    measure: (n) => {
      de(e, r.target, s), le(e, s, n), (r.offset || r.target) && ae(e, s, r);
    },
    notify: () => t(s)
  };
}
const g = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), B = (e) => e === document.scrollingElement ? window : e;
function Y(e, { container: t = document.scrollingElement, trackContentSize: s = !1, ...r } = {}) {
  if (!t)
    return R;
  let n = T.get(t);
  n || (n = /* @__PURE__ */ new Set(), T.set(t, n));
  const l = re(), i = ge(t, e, l, r);
  if (n.add(i), !g.has(t)) {
    const f = () => {
      for (const a of n)
        a.measure(Z.timestamp);
      p.preUpdate(o);
    }, o = () => {
      for (const a of n)
        a.notify();
    }, u = () => p.read(f);
    g.set(t, u);
    const d = B(t);
    window.addEventListener("resize", u), t !== document.documentElement && A.set(t, Q(t, u)), d.addEventListener("scroll", u), u();
  }
  if (s && !v.has(t)) {
    const f = g.get(t), o = {
      width: t.scrollWidth,
      height: t.scrollHeight
    };
    C.set(t, o);
    const u = () => {
      const a = t.scrollWidth, m = t.scrollHeight;
      (o.width !== a || o.height !== m) && (f(), o.width = a, o.height = m);
    }, d = p.read(u, !0);
    v.set(t, d);
  }
  const c = g.get(t);
  return p.read(c, !1, !0), () => {
    var d;
    L(c);
    const f = T.get(t);
    if (!f || (f.delete(i), f.size))
      return;
    const o = g.get(t);
    g.delete(t), o && (B(t).removeEventListener("scroll", o), (d = A.get(t)) == null || d(), window.removeEventListener("resize", o));
    const u = v.get(t);
    u && (L(u), v.delete(t)), C.delete(t);
  };
}
const he = [
  [y.Enter, "entry"],
  [y.Exit, "exit"],
  [y.Any, "cover"],
  [y.All, "contain"]
], z = {
  start: 0,
  end: 1
};
function me(e) {
  const t = e.trim().split(/\s+/);
  if (t.length !== 2)
    return;
  const s = z[t[0]], r = z[t[1]];
  if (!(s === void 0 || r === void 0))
    return [s, r];
}
function pe(e) {
  if (e.length !== 2)
    return;
  const t = [];
  for (const s of e)
    if (Array.isArray(s))
      t.push(s);
    else if (typeof s == "string") {
      const r = me(s);
      if (!r)
        return;
      t.push(r);
    } else
      return;
  return t;
}
function ye(e, t) {
  const s = pe(e);
  if (!s)
    return !1;
  for (let r = 0; r < 2; r++) {
    const n = s[r], l = t[r];
    if (n[0] !== l[0] || n[1] !== l[1])
      return !1;
  }
  return !0;
}
function P(e) {
  if (!e)
    return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [t, s] of he)
    if (ye(e, t))
      return { rangeStart: `${s} 0%`, rangeEnd: `${s} 100%` };
}
const M = /* @__PURE__ */ new Map();
function I(e) {
  const t = { value: 0 }, s = Y((r) => {
    t.value = r[e.axis].progress * 100;
  }, e);
  return { currentTime: t, cancel: s };
}
function F({ source: e, container: t, ...s }) {
  const { axis: r } = s;
  e && (t = e);
  let n = M.get(t);
  n || (n = /* @__PURE__ */ new Map(), M.set(t, n));
  const l = s.target ?? "self";
  let i = n.get(l);
  i || (i = {}, n.set(l, i));
  const c = r + (s.offset ?? []).join(",");
  return i[c] || (s.target && E(s.target) ? P(s.offset) ? i[c] = new ViewTimeline({
    subject: s.target,
    axis: r
  }) : i[c] = I({
    container: t,
    ...s
  }) : E() ? i[c] = new ScrollTimeline({
    source: t,
    axis: r
  }) : i[c] = I({
    container: t,
    ...s
  })), i[c];
}
function we(e, t) {
  const s = F(t), r = t.target ? P(t.offset) : void 0, n = t.target ? E(t.target) && !!r : E();
  return e.attachTimeline({
    timeline: n ? s : void 0,
    ...r && n && {
      rangeStart: r.rangeStart,
      rangeEnd: r.rangeEnd
    },
    observe: (l) => (l.pause(), X((i) => {
      l.time = l.iterationDuration * i;
    }, s))
  });
}
function xe(e) {
  return e && (e.target || e.offset);
}
function ve(e) {
  return e.length === 2;
}
function Ee(e, t) {
  return ve(e) || xe(t) ? Y((s) => {
    e(s[t.axis].progress, s);
  }, t) : X(e, F(t));
}
function U(e, { axis: t = "y", container: s = document.scrollingElement, ...r } = {}) {
  if (!s)
    return R;
  const n = { axis: t, container: s, ...r };
  return typeof e == "function" ? Ee(e, n) : we(e, n);
}
const Te = () => ({
  scrollX: x(0),
  scrollY: x(0),
  scrollXProgress: x(0),
  scrollYProgress: x(0)
}), h = (e) => e ? !e.current : !1;
function N(e, t, s, r) {
  return {
    // Refs attach child-first; defer so target.current is populated
    // before scroll() reads it.
    factory: (n) => {
      let l;
      const i = () => {
        if (h(s) || h(r)) {
          S.read(i);
          return;
        }
        l = U(n, {
          ...t,
          axis: e,
          container: (s == null ? void 0 : s.current) || void 0,
          target: (r == null ? void 0 : r.current) || void 0
        });
      };
      return S.read(i), () => {
        V(i), l == null || l();
      };
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (n) => n,
    duration: 1
  };
}
function Le(e, t) {
  return typeof window > "u" ? !1 : e ? $() && !!P(t) : D();
}
function We({ container: e, target: t, ...s } = {}) {
  const r = ee(Te);
  Le(t, s.offset) && (r.scrollXProgress.accelerate = N("x", s, e, t), r.scrollYProgress.accelerate = N("y", s, e, t));
  const n = w.useRef(null), l = w.useRef(!1), i = w.useCallback(() => (n.current = U((c, { x: f, y: o }) => {
    r.scrollX.set(f.current), r.scrollXProgress.set(f.progress), r.scrollY.set(o.current), r.scrollYProgress.set(o.progress);
  }, {
    ...s,
    container: (e == null ? void 0 : e.current) || void 0,
    target: (t == null ? void 0 : t.current) || void 0
  }), () => {
    var c;
    (c = n.current) == null || c.call(n);
  }), [e, t, JSON.stringify(s.offset)]);
  return te(() => {
    if (l.current = !1, h(e) || h(t)) {
      l.current = !0;
      return;
    } else
      return i();
  }, [i]), w.useEffect(() => {
    if (!l.current)
      return;
    let c;
    const f = () => {
      const o = h(e), u = h(t);
      O(!o, "Container ref is defined but not hydrated", "use-scroll-ref"), O(!u, "Target ref is defined but not hydrated", "use-scroll-ref"), !o && !u && (c = i());
    };
    return S.read(f), () => {
      V(f), c == null || c();
    };
  }, [i]), r;
}
export {
  We as u
};
