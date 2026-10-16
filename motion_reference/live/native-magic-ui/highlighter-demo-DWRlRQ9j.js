import { r as O, j as z } from "./inline-Mcm4wFdg.js";
import { u as F } from "./use-in-view-CCO1JRFq.js";
const I = "http://www.w3.org/2000/svg";
class W {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
function M(e, t, s, n, i) {
  return { type: "path", ops: R(e, t, s, n, i) };
}
function P(e, t, s) {
  const n = (e || []).length;
  if (n > 2) {
    const i = [];
    for (let r = 0; r < n - 1; r++) i.push(...R(e[r][0], e[r][1], e[r + 1][0], e[r + 1][1], s));
    return t && i.push(...R(e[n - 1][0], e[n - 1][1], e[0][0], e[0][1], s)), { type: "path", ops: i };
  }
  return n === 2 ? M(e[0][0], e[0][1], e[1][0], e[1][1], s) : { type: "path", ops: [] };
}
function q(e, t, s, n, i) {
  return function(r, c) {
    return P(r, !0, c);
  }([[e, t], [e + s, t], [e + s, t + n], [e, t + n]], i);
}
function $(e, t, s, n, i) {
  return function(r, c, h, a) {
    const [_, g] = N(a.increment, r, c, a.rx, a.ry, 1, a.increment * L(0.1, L(0.4, 1, h), h), h);
    let m = A(_, null, h);
    if (!h.disableMultiStroke) {
      const [d] = N(a.increment, r, c, a.rx, a.ry, 1.5, 0, h), l = A(d, null, h);
      m = m.concat(l);
    }
    return { estimatedPoints: g, opset: { type: "path", ops: m } };
  }(e, t, i, function(r, c, h) {
    const a = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(r / 2, 2) + Math.pow(c / 2, 2)) / 2)), _ = Math.max(h.curveStepCount, h.curveStepCount / Math.sqrt(200) * a), g = 2 * Math.PI / _;
    let m = Math.abs(r / 2), d = Math.abs(c / 2);
    const l = 1 - h.curveFitting;
    return m += v(m * l, h), d += v(d * l, h), { increment: g, rx: m, ry: d };
  }(s, n, i)).opset;
}
function j(e) {
  return e.randomizer || (e.randomizer = new W(e.seed || 0)), e.randomizer.next();
}
function L(e, t, s, n = 1) {
  return s.roughness * n * (j(s) * (t - e) + e);
}
function v(e, t, s = 1) {
  return L(-e, e, t, s);
}
function R(e, t, s, n, i, r = !1) {
  const c = r ? i.disableMultiStrokeFill : i.disableMultiStroke, h = T(e, t, s, n, i, !0, !1);
  if (c) return h;
  const a = T(e, t, s, n, i, !0, !0);
  return h.concat(a);
}
function T(e, t, s, n, i, r, c) {
  const h = Math.pow(e - s, 2) + Math.pow(t - n, 2), a = Math.sqrt(h);
  let _ = 1;
  _ = a < 200 ? 1 : a > 500 ? 0.4 : -16668e-7 * a + 1.233334;
  let g = i.maxRandomnessOffset || 0;
  g * g * 100 > h && (g = a / 10);
  const m = g / 2, d = 0.2 + 0.2 * j(i);
  let l = i.bowing * i.maxRandomnessOffset * (n - t) / 200, o = i.bowing * i.maxRandomnessOffset * (e - s) / 200;
  l = v(l, i, _), o = v(o, i, _);
  const u = [], f = () => v(m, i, _), p = () => v(g, i, _);
  return c ? u.push({ op: "move", data: [e + f(), t + f()] }) : u.push({ op: "move", data: [e + v(g, i, _), t + v(g, i, _)] }), c ? u.push({ op: "bcurveTo", data: [l + e + (s - e) * d + f(), o + t + (n - t) * d + f(), l + e + 2 * (s - e) * d + f(), o + t + 2 * (n - t) * d + f(), s + f(), n + f()] }) : u.push({ op: "bcurveTo", data: [l + e + (s - e) * d + p(), o + t + (n - t) * d + p(), l + e + 2 * (s - e) * d + p(), o + t + 2 * (n - t) * d + p(), s + p(), n + p()] }), u;
}
function A(e, t, s) {
  const n = e.length, i = [];
  if (n > 3) {
    const r = [], c = 1 - s.curveTightness;
    i.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let h = 1; h + 2 < n; h++) {
      const a = e[h];
      r[0] = [a[0], a[1]], r[1] = [a[0] + (c * e[h + 1][0] - c * e[h - 1][0]) / 6, a[1] + (c * e[h + 1][1] - c * e[h - 1][1]) / 6], r[2] = [e[h + 1][0] + (c * e[h][0] - c * e[h + 2][0]) / 6, e[h + 1][1] + (c * e[h][1] - c * e[h + 2][1]) / 6], r[3] = [e[h + 1][0], e[h + 1][1]], i.push({ op: "bcurveTo", data: [r[1][0], r[1][1], r[2][0], r[2][1], r[3][0], r[3][1]] });
    }
  } else n === 3 ? (i.push({ op: "move", data: [e[1][0], e[1][1]] }), i.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : n === 2 && i.push(...R(e[0][0], e[0][1], e[1][0], e[1][1], s));
  return i;
}
function N(e, t, s, n, i, r, c, h) {
  const a = [], _ = [], g = v(0.5, h) - Math.PI / 2;
  _.push([v(r, h) + t + 0.9 * n * Math.cos(g - e), v(r, h) + s + 0.9 * i * Math.sin(g - e)]);
  for (let m = g; m < 2 * Math.PI + g - 0.01; m += e) {
    const d = [v(r, h) + t + n * Math.cos(m), v(r, h) + s + i * Math.sin(m)];
    a.push(d), _.push(d);
  }
  return _.push([v(r, h) + t + n * Math.cos(g + 2 * Math.PI + 0.5 * c), v(r, h) + s + i * Math.sin(g + 2 * Math.PI + 0.5 * c)]), _.push([v(r, h) + t + 0.98 * n * Math.cos(g + c), v(r, h) + s + 0.98 * i * Math.sin(g + c)]), _.push([v(r, h) + t + 0.9 * n * Math.cos(g + 0.5 * c), v(r, h) + s + 0.9 * i * Math.sin(g + 0.5 * c)]), [_, a];
}
function E(e, t) {
  return { maxRandomnessOffset: 2, roughness: e === "highlight" ? 3 : 1.5, bowing: 1, stroke: "#000", strokeWidth: 1.5, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, combineNestedSvgPaths: !1, disableMultiStroke: e !== "double", disableMultiStrokeFill: !1, seed: t };
}
function J(e, t, s, n, i, r) {
  const c = [];
  let h = s.strokeWidth || 2;
  const a = function(l) {
    const o = l.padding;
    if (o || o === 0) {
      if (typeof o == "number") return [o, o, o, o];
      if (Array.isArray(o)) {
        const u = o;
        if (u.length) switch (u.length) {
          case 4:
            return [...u];
          case 1:
            return [u[0], u[0], u[0], u[0]];
          case 2:
            return [...u, ...u];
          case 3:
            return [...u, u[1]];
          default:
            return [u[0], u[1], u[2], u[3]];
        }
      }
    }
    return [5, 5, 5, 5];
  }(s), _ = s.animate === void 0 || !!s.animate, g = s.iterations || 2, m = s.rtl ? 1 : 0, d = E("single", r);
  switch (s.type) {
    case "underline": {
      const l = t.y + t.h + a[2];
      for (let o = m; o < g + m; o++) o % 2 ? c.push(M(t.x + t.w, l, t.x, l, d)) : c.push(M(t.x, l, t.x + t.w, l, d));
      break;
    }
    case "strike-through": {
      const l = t.y + t.h / 2;
      for (let o = m; o < g + m; o++) o % 2 ? c.push(M(t.x + t.w, l, t.x, l, d)) : c.push(M(t.x, l, t.x + t.w, l, d));
      break;
    }
    case "box": {
      const l = t.x - a[3], o = t.y - a[0], u = t.w + (a[1] + a[3]), f = t.h + (a[0] + a[2]);
      for (let p = 0; p < g; p++) c.push(q(l, o, u, f, d));
      break;
    }
    case "bracket": {
      const l = Array.isArray(s.brackets) ? s.brackets : s.brackets ? [s.brackets] : ["right"], o = t.x - 2 * a[3], u = t.x + t.w + 2 * a[1], f = t.y - 2 * a[0], p = t.y + t.h + 2 * a[2];
      for (const x of l) {
        let w;
        switch (x) {
          case "bottom":
            w = [[o, t.y + t.h], [o, p], [u, p], [u, t.y + t.h]];
            break;
          case "top":
            w = [[o, t.y], [o, f], [u, f], [u, t.y]];
            break;
          case "left":
            w = [[t.x, f], [o, f], [o, p], [t.x, p]];
            break;
          case "right":
            w = [[t.x + t.w, f], [u, f], [u, p], [t.x + t.w, p]];
        }
        w && c.push(P(w, !1, d));
      }
      break;
    }
    case "crossed-off": {
      const l = t.x, o = t.y, u = l + t.w, f = o + t.h;
      for (let p = m; p < g + m; p++) p % 2 ? c.push(M(u, f, l, o, d)) : c.push(M(l, o, u, f, d));
      for (let p = m; p < g + m; p++) p % 2 ? c.push(M(l, f, u, o, d)) : c.push(M(u, o, l, f, d));
      break;
    }
    case "circle": {
      const l = E("double", r), o = t.w + (a[1] + a[3]), u = t.h + (a[0] + a[2]), f = t.x - a[3] + o / 2, p = t.y - a[0] + u / 2, x = Math.floor(g / 2), w = g - 2 * x;
      for (let b = 0; b < x; b++) c.push($(f, p, o, u, l));
      for (let b = 0; b < w; b++) c.push($(f, p, o, u, d));
      break;
    }
    case "highlight": {
      const l = E("highlight", r);
      h = 0.95 * t.h;
      const o = t.y + t.h / 2;
      for (let u = m; u < g + m; u++) u % 2 ? c.push(M(t.x + t.w, o, t.x, o, l)) : c.push(M(t.x, o, t.x + t.w, o, l));
      break;
    }
  }
  if (c.length) {
    const l = function(x) {
      const w = [];
      for (const b of x) {
        let k = "";
        for (const S of b.ops) {
          const y = S.data;
          switch (S.op) {
            case "move":
              k.trim() && w.push(k.trim()), k = `M${y[0]} ${y[1]} `;
              break;
            case "bcurveTo":
              k += `C${y[0]} ${y[1]}, ${y[2]} ${y[3]}, ${y[4]} ${y[5]} `;
              break;
            case "lineTo":
              k += `L${y[0]} ${y[1]} `;
          }
        }
        k.trim() && w.push(k.trim());
      }
      return w;
    }(c), o = [], u = [];
    let f = 0;
    const p = (x, w, b) => x.setAttribute(w, b);
    for (const x of l) {
      const w = document.createElementNS(I, "path");
      if (p(w, "d", x), p(w, "fill", "none"), p(w, "stroke", s.color || "currentColor"), p(w, "stroke-width", "" + h), _) {
        const b = w.getTotalLength();
        o.push(b), f += b;
      }
      e.appendChild(w), u.push(w);
    }
    if (_) {
      let x = 0;
      for (let w = 0; w < u.length; w++) {
        const b = u[w], k = o[w], S = f ? i * (k / f) : 0, y = n + x, C = b.style;
        C.strokeDashoffset = "" + k, C.strokeDasharray = "" + k, C.animation = `rough-notation-dash ${S}ms ease-out ${y}ms forwards`, x += S;
      }
    }
  }
}
class H {
  constructor(t, s) {
    this._state = "unattached", this._resizing = !1, this._seed = Math.floor(Math.random() * 2 ** 31), this._lastSizes = [], this._animationDelay = 0, this._resizeListener = () => {
      this._resizing || (this._resizing = !0, setTimeout(() => {
        this._resizing = !1, this._state === "showing" && this.haveRectsChanged() && this.show();
      }, 400));
    }, this._e = t, this._config = JSON.parse(JSON.stringify(s)), this.attach();
  }
  get animate() {
    return this._config.animate;
  }
  set animate(t) {
    this._config.animate = t;
  }
  get animationDuration() {
    return this._config.animationDuration;
  }
  set animationDuration(t) {
    this._config.animationDuration = t;
  }
  get iterations() {
    return this._config.iterations;
  }
  set iterations(t) {
    this._config.iterations = t;
  }
  get color() {
    return this._config.color;
  }
  set color(t) {
    this._config.color !== t && (this._config.color = t, this.refresh());
  }
  get strokeWidth() {
    return this._config.strokeWidth;
  }
  set strokeWidth(t) {
    this._config.strokeWidth !== t && (this._config.strokeWidth = t, this.refresh());
  }
  get padding() {
    return this._config.padding;
  }
  set padding(t) {
    this._config.padding !== t && (this._config.padding = t, this.refresh());
  }
  attach() {
    if (this._state === "unattached" && this._e.parentElement) {
      (function() {
        if (!window.__rno_kf_s) {
          const i = window.__rno_kf_s = document.createElement("style");
          i.textContent = "@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }", document.head.appendChild(i);
        }
      })();
      const t = this._svg = document.createElementNS(I, "svg");
      t.setAttribute("class", "rough-annotation");
      const s = t.style;
      s.position = "absolute", s.top = "0", s.left = "0", s.overflow = "visible", s.pointerEvents = "none", s.width = "100px", s.height = "100px";
      const n = this._config.type === "highlight";
      if (this._e.insertAdjacentElement(n ? "beforebegin" : "afterend", t), this._state = "not-showing", n) {
        const i = window.getComputedStyle(this._e).position;
        (!i || i === "static") && (this._e.style.position = "relative");
      }
      this.attachListeners();
    }
  }
  detachListeners() {
    window.removeEventListener("resize", this._resizeListener), this._ro && this._ro.unobserve(this._e);
  }
  attachListeners() {
    this.detachListeners(), window.addEventListener("resize", this._resizeListener, { passive: !0 }), !this._ro && "ResizeObserver" in window && (this._ro = new window.ResizeObserver((t) => {
      for (const s of t) s.contentRect && this._resizeListener();
    })), this._ro && this._ro.observe(this._e);
  }
  haveRectsChanged() {
    if (this._lastSizes.length) {
      const t = this.rects();
      if (t.length !== this._lastSizes.length) return !0;
      for (let s = 0; s < t.length; s++) if (!this.isSameRect(t[s], this._lastSizes[s])) return !0;
    }
    return !1;
  }
  isSameRect(t, s) {
    const n = (i, r) => Math.round(i) === Math.round(r);
    return n(t.x, s.x) && n(t.y, s.y) && n(t.w, s.w) && n(t.h, s.h);
  }
  isShowing() {
    return this._state !== "not-showing";
  }
  refresh() {
    this.isShowing() && !this.pendingRefresh && (this.pendingRefresh = Promise.resolve().then(() => {
      this.isShowing() && this.show(), delete this.pendingRefresh;
    }));
  }
  show() {
    switch (this._state) {
      case "unattached":
        break;
      case "showing":
        this.hide(), this._svg && this.render(this._svg, !0);
        break;
      case "not-showing":
        this.attach(), this._svg && this.render(this._svg, !1);
    }
  }
  hide() {
    if (this._svg) for (; this._svg.lastChild; ) this._svg.removeChild(this._svg.lastChild);
    this._state = "not-showing";
  }
  remove() {
    this._svg && this._svg.parentElement && this._svg.parentElement.removeChild(this._svg), this._svg = void 0, this._state = "unattached", this.detachListeners();
  }
  render(t, s) {
    let n = this._config;
    s && (n = JSON.parse(JSON.stringify(this._config)), n.animate = !1);
    const i = this.rects();
    let r = 0;
    i.forEach((a) => r += a.w);
    const c = n.animationDuration || 800;
    let h = 0;
    for (let a = 0; a < i.length; a++) {
      const _ = c * (i[a].w / r);
      J(t, i[a], n, h + this._animationDelay, _, this._seed), h += _;
    }
    this._lastSizes = i, this._state = "showing";
  }
  rects() {
    const t = [];
    if (this._svg) if (this._config.multiline) {
      const s = this._e.getClientRects();
      for (let n = 0; n < s.length; n++) t.push(this.svgRect(this._svg, s[n]));
    } else t.push(this.svgRect(this._svg, this._e.getBoundingClientRect()));
    return t;
  }
  svgRect(t, s) {
    const n = t.getBoundingClientRect(), i = s;
    return { x: (i.x || i.left) - (n.x || n.left), y: (i.y || i.top) - (n.y || n.top), w: i.width, h: i.height };
  }
}
function B(e, t) {
  return new H(e, t);
}
function D({
  children: e,
  action: t = "highlight",
  color: s = "#ffd1dc",
  strokeWidth: n = 1.5,
  animationDuration: i = 600,
  iterations: r = 2,
  padding: c = 2,
  multiline: h = !0,
  isView: a = !1
}) {
  const _ = O.useRef(null), g = F(_, {
    once: !0,
    margin: "-10%"
  }), m = !a || g;
  return O.useLayoutEffect(() => {
    const d = _.current;
    let l = null, o = null;
    if (m && d) {
      const f = B(d, {
        type: t,
        color: s,
        strokeWidth: n,
        animationDuration: i,
        iterations: r,
        padding: c,
        multiline: h
      });
      l = f, f.show(), o = new ResizeObserver(() => {
        f.hide(), f.show();
      }), o.observe(d), o.observe(document.body);
    }
    return () => {
      l == null || l.remove(), o && o.disconnect();
    };
  }, [
    m,
    t,
    s,
    n,
    i,
    r,
    c,
    h
  ]), /* @__PURE__ */ z.jsx("span", { ref: _, className: "relative inline-block bg-transparent", children: e });
}
function U() {
  return /* @__PURE__ */ z.jsx("div", { className: "text-center", children: /* @__PURE__ */ z.jsxs("p", { className: "leading-relaxed", children: [
    "The",
    " ",
    /* @__PURE__ */ z.jsx(D, { action: "underline", color: "#FF9800", children: "Magic UI Highlighter" }),
    " ",
    "makes important",
    " ",
    /* @__PURE__ */ z.jsx(D, { action: "highlight", color: "#87CEFA", children: "text stand out" }),
    " ",
    "effortlessly."
  ] }) });
}
export {
  U as default
};
