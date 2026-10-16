import { u as s } from "./use-combine-values-CD3ENXM1.js";
import { o as i } from "./inline-Mcm4wFdg.js";
function f(u, ...n) {
  const r = u.length;
  function l() {
    let e = "";
    for (let t = 0; t < r; t++) {
      e += u[t];
      const o = n[t];
      o && (e += i(o) ? o.get() : o);
    }
    return e;
  }
  return s(n.filter(i), l);
}
export {
  f as u
};
