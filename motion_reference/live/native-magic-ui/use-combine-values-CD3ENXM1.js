import { O as n, P as c, Q as p } from "./inline-Mcm4wFdg.js";
import { u as f } from "./use-motion-value-CcTD1FWM.js";
function l(a, s) {
  const t = f(s()), e = () => t.set(s());
  return e(), n(() => {
    const r = () => p.preRender(e, !1, !0), u = a.map((o) => o.on("change", r));
    return () => {
      u.forEach((o) => o()), c(e);
    };
  }), t;
}
export {
  l as u
};
