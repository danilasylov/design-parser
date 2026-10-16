import { i as pe, V as me, g as he, h as de, k as ge, r as ye, p as Ae, f as Se, l as ve, n as ae, o as re, q as Ee, s as Ve, t as Me, v as De, w as Te, x as be, y as Oe, z as xe, B as we, C as Fe, S as Ge, H as Ie, D as N, E as Ke, F as Re, G as Be, I as Ce, J as Ne } from "./inline-Mcm4wFdg.js";
const Le = (t, e, n) => {
  const i = e - t;
  return ((n - t) % i + i) % i + t;
};
// @__NO_SIDE_EFFECTS__
function oe(t, e) {
  return pe(t) ? t[Le(0, t.length, e)] : t;
}
class Pe {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let i = 0; i < this.animations.length; i++)
      this.animations[i][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((i) => i.attachTimeline(e));
    return () => {
      n.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return te(this.animations, "duration");
  }
  get iterationDuration() {
    return te(this.animations, "iterationDuration");
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function te(t, e) {
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    const s = t[i][e];
    s !== null && s > n && (n = s);
  }
  return n;
}
class je extends Pe {
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
}
function qe(t, e) {
  return t in e;
}
class We extends me {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, n) {
    if (qe(n, e)) {
      const i = e[n];
      if (typeof i == "string" || typeof i == "number")
        return i;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return he();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function ot() {
  !de.current && ge();
  const [t] = ye.useState(Ae.current);
  return t;
}
function q(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function le(t, e, n, i) {
  return t == null ? [] : typeof t == "string" && q(e) ? Se(t, n, i) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t.filter((s) => s != null) : [t];
}
function ke(t, e, n) {
  return t * (e + 1) + n * e;
}
function ne(t, e, n, i) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : e.startsWith("<") ? Math.max(0, n + parseFloat(e.slice(1))) : i.get(e) ?? t;
}
function ze(t, e, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    s.at > e && s.at < n && (ae(t, s), i--);
  }
}
function Ue(t, e, n, i, s, c) {
  ze(t, s, c);
  for (let a = 0; a < e.length; a++)
    t.push({
      value: e[a],
      at: ve(s, c, i[a]),
      easing: /* @__PURE__ */ oe(n, a)
    });
}
function _e(t, e, n = 0) {
  const i = e + 1 + e * n;
  for (let s = 0; s < t.length; s++)
    t[s] = t[s] / i;
}
function He(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
const $e = "easeInOut", j = 20;
function Je(t, { defaultTransition: e = {}, ...n } = {}, i, s) {
  const c = e.duration || 0.3, a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), l = {}, p = /* @__PURE__ */ new Map();
  let d = 0, o = 0, g = 0;
  for (let y = 0; y < t.length; y++) {
    const A = t[y];
    if (typeof A == "string") {
      p.set(A, o);
      continue;
    } else if (!Array.isArray(A)) {
      p.set(A.name, ne(o, A.at, d, p));
      continue;
    }
    let [b, S, f = {}] = A;
    f.at !== void 0 && (o = ne(o, f.at, d, p));
    let m = 0;
    const x = (E, w, M, O = 0, I = 0) => {
      const r = Xe(E), { delay: K = 0, times: v = Ee(r), type: L = e.type || "keyframes", repeat: D, repeatType: P, repeatDelay: W = 0, ...ce } = w;
      let { ease: V = e.ease || "easeOut", duration: h } = w;
      const k = typeof K == "function" ? K(O, I) : K, z = r.length, U = Te(L) ? L : s == null ? void 0 : s[L || "keyframes"];
      if (z <= 2 && U) {
        let F = 100;
        if (z === 2 && Ze(r)) {
          const R = r[1] - r[0];
          F = Math.abs(R);
        }
        const G = {
          ...e,
          ...ce
        };
        h !== void 0 && (G.duration = be(h));
        const C = Ve(G, F, U);
        V = C.ease, h = C.duration;
      }
      h ?? (h = c);
      const _ = o + k;
      v.length === 1 && v[0] === 0 && (v[1] = 1);
      const H = v.length - r.length;
      if (H > 0 && Me(v, H), r.length === 1 && r.unshift(null), D && Oe(D < j, `Sequence segments can't repeat ${D} times — ignoring repeat option. Use a value below ${j} or apply repeat at the sequence level instead.`), D && D < j) {
        const F = h > 0 ? W / h : 0;
        h = ke(h, D, W);
        const G = [...r], C = [...v];
        V = Array.isArray(V) ? [...V] : [V];
        const R = [...V], J = P === "reverse" || P === "mirror";
        let X = G, Q = R;
        J && (X = [...G].reverse(), P === "reverse" && (Q = [...R].reverse().map((T) => typeof T == "function" ? De(T) : T)));
        for (let T = 0; T < D; T++) {
          const Y = J && T % 2 === 0, Z = Y ? X : G, fe = Y ? Q : R, ee = (T + 1) * (1 + F);
          F > 0 && (r.push(r[r.length - 1]), v.push(ee), V.push("linear")), r.push(...Z);
          for (let B = 0; B < Z.length; B++)
            v.push(C[B] + ee), V.push(B === 0 ? "linear" : /* @__PURE__ */ oe(fe, B - 1));
        }
        _e(v, D, F);
      }
      const $ = _ + h;
      Ue(M, r, V, v, _, $), m = Math.max(k + h, m), g = Math.max($, g);
    };
    if (re(b)) {
      const E = ie(b, u);
      x(S, f, se("default", E));
    } else {
      const E = le(b, S, i, l), w = E.length;
      for (let M = 0; M < w; M++) {
        S = S, f = f;
        const O = E[M], I = ie(O, u);
        for (const r in S)
          x(S[r], Qe(f, r), se(r, I), M, w);
      }
    }
    d = o, o += m;
  }
  return u.forEach((y, A) => {
    for (const b in y) {
      const S = y[b];
      S.sort(He);
      const f = [], m = [], x = [];
      for (let O = 0; O < S.length; O++) {
        const { at: I, value: r, easing: K } = S[O];
        f.push(r), m.push(xe(0, g, I)), x.push(K || "easeOut");
      }
      m[0] !== 0 && (m.unshift(0), f.unshift(f[0]), x.unshift($e)), m[m.length - 1] !== 1 && (m.push(1), f.push(null)), a.has(A) || a.set(A, {
        keyframes: {},
        transition: {}
      });
      const E = a.get(A);
      E.keyframes[b] = f;
      const { type: w, ...M } = e;
      E.transition[b] = {
        ...M,
        duration: g,
        ease: x,
        times: m,
        ...n
      };
    }
  }), a;
}
function ie(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function se(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Xe(t) {
  return Array.isArray(t) ? t : [t];
}
function Qe(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Ye = (t) => typeof t == "number", Ze = (t) => t.every(Ye);
function et(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, n = we(t) && !Fe(t) ? new Ge(e) : new Ie(e);
  n.mount(t), N.set(t, n);
}
function tt(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new We(e);
  n.mount(t), N.set(t, n);
}
function nt(t, e) {
  return re(t) || typeof t == "number" || typeof t == "string" && !q(e);
}
function ue(t, e, n, i) {
  const s = [];
  if (nt(t, e))
    s.push(Ke(t, q(e) && e.default || e, n && (n.default || n)));
  else {
    if (t == null)
      return s;
    const c = le(t, e, i), a = c.length;
    Be(!!a, "No valid elements provided.", "no-valid-elements");
    for (let u = 0; u < a; u++) {
      const l = c[u], p = l instanceof Element ? et : tt;
      N.has(l) || p(l);
      const d = N.get(l), o = { ...n };
      "delay" in o && typeof o.delay == "function" && (o.delay = o.delay(u, a)), s.push(...Re(d, { ...e, transition: o }, {}));
    }
  }
  return s;
}
function it(t, e, n) {
  const i = [], s = t.map((a) => {
    if (Array.isArray(a) && typeof a[0] == "function") {
      const u = a[0], l = Ce(0);
      return l.on("change", u), a.length === 1 ? [l, [0, 1]] : a.length === 2 ? [l, [0, 1], a[1]] : [l, a[1], a[2]];
    }
    return a;
  });
  return Je(s, e, n, { spring: Ne }).forEach(({ keyframes: a, transition: u }, l) => {
    i.push(...ue(l, a, u));
  }), i;
}
function st(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function at(t = {}) {
  const { scope: e, reduceMotion: n, skipAnimations: i } = t;
  function s(c, a, u) {
    let l = [], p;
    const d = {};
    if (n !== void 0 && (d.reduceMotion = n), i !== void 0 && (d.skipAnimations = i), st(c)) {
      const { onComplete: g, ...y } = a || {};
      typeof g == "function" && (p = g), l = it(c, { ...d, ...y }, e);
    } else {
      const { onComplete: g, ...y } = u || {};
      typeof g == "function" && (p = g), l = ue(c, a, { ...d, ...y }, e);
    }
    const o = new je(l);
    return p && o.finished.then(p), e && (e.animations.push(o), o.finished.then(() => {
      ae(e.animations, o);
    })), o;
  }
  return s;
}
const lt = at();
export {
  lt as a,
  at as c,
  ot as u
};
