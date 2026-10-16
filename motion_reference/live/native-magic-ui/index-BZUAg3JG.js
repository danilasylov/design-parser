import { r as i, j as R, d as j } from "./inline-Mcm4wFdg.js";
var U = Object.defineProperty, P = (e, t) => U(e, "name", { value: t, configurable: !0 }), _ = !!(typeof window < "u" && window.document && window.document.createElement);
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ P(function(o) {
    if (e == null || e(o), n === !1 || !o || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  }, "handleEvent");
}
P(F, "composeEventHandlers");
function L(e) {
  var t;
  if (!_)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
P(L, "getOwnerWindow");
function h(e) {
  if (!_)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
P(h, "getOwnerDocument");
function y(e, t = !1) {
  const { activeElement: n } = h(e);
  if (!(n != null && n.nodeName))
    return null;
  if (E(n) && n.contentDocument)
    return y(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = h(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
P(y, "getActiveElement");
function E(e) {
  return e.tagName === "IFRAME";
}
P(E, "isFrame");
var W = Object.defineProperty, w = (e, t) => W(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function k(e, t) {
  const n = i.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ w((u) => {
    const { children: c, ...s } = u, a = i.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ R.jsx(n.Provider, { value: a, children: c });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(u, c = {}) {
    const { optional: s = !1 } = c, a = i.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    if (!s)
      throw new Error(`\`${u}\` must be used within \`${e}\``);
  }
  return w(o, "useContext"), [r, o];
}
w(k, "createContext");
// @__NO_SIDE_EFFECTS__
function B(e, t = []) {
  let n = [];
  function r(u, c) {
    const s = i.createContext(c);
    s.displayName = u + "Context";
    const a = n.length;
    n = [...n, c];
    const m = /* @__PURE__ */ w((d) => {
      var x;
      const { scope: l, children: N, ...p } = d, S = ((x = l == null ? void 0 : l[e]) == null ? void 0 : x[a]) || s, g = i.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ R.jsx(S.Provider, { value: g, children: N });
    }, "Provider");
    m.displayName = u + "Provider";
    function f(d, l, N = {}) {
      var x;
      const { optional: p = !1 } = N, S = ((x = l == null ? void 0 : l[e]) == null ? void 0 : x[a]) || s, g = i.useContext(S);
      if (g) return g;
      if (c !== void 0) return c;
      if (!p)
        throw new Error(`\`${d}\` must be used within \`${u}\``);
    }
    return w(f, "useContext"), [m, f];
  }
  w(r, "createContext");
  const o = /* @__PURE__ */ w(() => {
    const u = n.map((c) => i.createContext(c));
    return /* @__PURE__ */ w(function(s) {
      const a = (s == null ? void 0 : s[e]) || u;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: a } }),
        [s, a]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, b(o, ...t)];
}
w(B, "createContextScope");
function b(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ w(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ w(function(u) {
      const c = r.reduce((s, { useScope: a, scopeName: m }) => {
        const d = a(u)[`__scope${m}`];
        return { ...s, ...d };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
w(b, "composeContextScopes");
var O = globalThis != null && globalThis.document ? i.useLayoutEffect : () => {
}, V = Object.defineProperty, q = (e, t) => V(e, "name", { value: t, configurable: !0 }), M = j[" useInsertionEffect ".trim().toString()];
function z(e) {
  const t = i.useRef(e);
  return typeof M == "function" ? M(() => {
    t.current = e;
  }) : O(() => {
    t.current = e;
  }), i.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
q(z, "useCallbackRef");
var G = Object.defineProperty, v = (e, t) => G(e, "name", { value: t, configurable: !0 });
function T(e, t) {
  return i.useReducer((n, r) => t[n][r] ?? n, e);
}
v(T, "useStateMachine");
var K = /* @__PURE__ */ v((e) => {
  const { present: t, children: n } = e, r = I(t), o = typeof n == "function" ? n({ present: r.isPresent }) : i.Children.only(n), u = D(r.ref, $(o));
  return typeof n == "function" || r.isPresent ? i.cloneElement(o, { ref: u }) : null;
}, "Presence");
function I(e) {
  const [t, n] = i.useState(), r = i.useRef(null), o = i.useRef(e), u = i.useRef("none"), c = i.useRef(void 0), s = e ? "mounted" : "unmounted", [a, m] = T(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return i.useEffect(() => {
    a === "mounted" ? (u.current = c.current ?? C(r.current), c.current = void 0) : u.current = "none";
  }, [a]), O(() => {
    const f = r.current, d = o.current;
    if (d !== e) {
      const N = u.current, p = C(f);
      e ? (c.current = p, m("MOUNT")) : p === "none" || (f == null ? void 0 : f.display) === "none" ? m("UNMOUNT") : m(d && N !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, m]), O(() => {
    if (t) {
      let f;
      const d = t.ownerDocument.defaultView ?? window, l = /* @__PURE__ */ v((p) => {
        const g = C(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (m("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, "handleAnimationEnd"), N = /* @__PURE__ */ v((p) => {
        p.target === t && (u.current = C(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", N), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        d.clearTimeout(f), t.removeEventListener("animationstart", N), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      m("ANIMATION_END");
  }, [t, m]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: i.useCallback((f) => {
      if (f) {
        const d = getComputedStyle(f);
        r.current = d, c.current = C(d);
      } else
        r.current = null;
      n(f);
    }, [])
  };
}
v(I, "usePresence");
function A(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
v(A, "setRef");
function D(...e) {
  const t = i.useRef(e);
  return t.current = e, i.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const u = r.map((c) => {
      const s = A(c, n);
      return !o && typeof s == "function" && (o = !0), s;
    });
    if (o)
      return () => {
        for (let c = 0; c < u.length; c++) {
          const s = u[c];
          typeof s == "function" ? s() : A(r[c], null);
        }
      };
  }, []);
}
v(D, "useStableComposedRefs");
function C(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
v(C, "getAnimationName");
function $(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
v($, "getElementRef");
export {
  K as P,
  O as a,
  B as b,
  F as c,
  z as u
};
