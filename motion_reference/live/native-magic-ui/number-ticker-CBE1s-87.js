import { r as u, j as x, c as g } from "./inline-Mcm4wFdg.js";
import { u as b } from "./use-motion-value-CcTD1FWM.js";
import { u as l } from "./use-spring-C8QKVjC2.js";
import { u as w } from "./use-in-view-CCO1JRFq.js";
function h({
  value: i,
  startValue: n = 0,
  direction: o = "up",
  delay: m = 0,
  className: a,
  decimalPlaces: r = 0,
  ...p
}) {
  const e = u.useRef(null), s = b(o === "down" ? i : n), f = l(s, {
    damping: 60,
    stiffness: 100
  }), c = w(e, { once: !0, margin: "0px" });
  return u.useEffect(() => {
    let t = null;
    return c && (t = setTimeout(() => {
      s.set(o === "down" ? n : i);
    }, m * 1e3)), () => {
      t !== null && clearTimeout(t);
    };
  }, [s, c, m, i, o, n]), u.useEffect(
    () => f.on("change", (t) => {
      e.current && (e.current.textContent = Intl.NumberFormat("en-US", {
        minimumFractionDigits: r,
        maximumFractionDigits: r
      }).format(Number(t.toFixed(r))));
    }),
    [f, r]
  ), /* @__PURE__ */ x.jsx(
    "span",
    {
      ref: e,
      className: g(
        "inline-block tracking-wider text-black tabular-nums dark:text-white",
        a
      ),
      ...p,
      children: n
    }
  );
}
export {
  h as N
};
