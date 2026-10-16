import { r as m, j as p, a as f } from "./inline-Mcm4wFdg.js";
import { c as u } from "./index-CNhZeCHS.js";
var d = Object.defineProperty, v = (r, t) => d(r, "name", { value: t, configurable: !0 }), l = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], P = l.reduce((r, t) => {
  const i = u(`Primitive.${t}`), e = m.forwardRef((o, s) => {
    const { asChild: a, ...n } = o, c = a ? i : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(c, { ...n, ref: s });
  });
  return e.displayName = `Primitive.${t}`, { ...r, [t]: e };
}, {});
function h(r, t) {
  r && f.flushSync(() => r.dispatchEvent(t));
}
v(h, "dispatchDiscreteCustomEvent");
export {
  P,
  h as d
};
