import { Q as h, o as y, T as x, r as g, M as A } from "./inline-Mcm4wFdg.js";
import { u as C } from "./use-motion-value-CcTD1FWM.js";
import { u as F } from "./use-transform-DTx9FOYX.js";
function M(t, e, a = {}) {
  const r = t.get();
  let n = null, l = r, m;
  const f = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, u = () => {
    n && (n.stop(), n = null), t.animation = void 0;
  }, V = () => {
    const o = d(t.get()), i = d(l);
    if (o === i) {
      u();
      return;
    }
    const s = n ? n.getGeneratorVelocity() : t.getVelocity();
    u(), n = new x({
      keyframes: [o, i],
      velocity: s,
      // Default to spring if no type specified (matches useSpring behavior)
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...a,
      onUpdate: m
    });
  }, S = () => {
    var o;
    V(), t.animation = n ?? void 0, (o = t.events.animationStart) == null || o.notify(), n == null || n.then(() => {
      var i;
      t.animation = void 0, (i = t.events.animationComplete) == null || i.notify();
    });
  };
  if (t.attach((o, i) => {
    l = o, m = (s) => i(c(s, f)), h.postRender(S);
  }, u), y(e)) {
    let o = a.skipInitialAnimation === !0;
    const i = e.on("change", (p) => {
      o ? (o = !1, t.jump(c(p, f), !1)) : t.set(c(p, f));
    }), s = t.on("destroy", i);
    return () => {
      i(), s();
    };
  }
  return u;
}
function c(t, e) {
  return e ? t + e : t;
}
function d(t) {
  return typeof t == "number" ? t : parseFloat(t);
}
function k(t, e = {}) {
  const { isStatic: a } = g.useContext(A), r = () => y(t) ? t.get() : t;
  if (a)
    return F(r);
  const n = C(r());
  return g.useInsertionEffect(() => M(n, t, e), [n, JSON.stringify(e)]), n;
}
function b(t, e = {}) {
  return k(t, { type: "spring", ...e });
}
export {
  b as u
};
