import { u as V, r as t, j as u, m as b, c as H } from "./inline-Mcm4wFdg.js";
import { u as $ } from "./use-motion-value-CcTD1FWM.js";
import { u as v } from "./use-spring-C8QKVjC2.js";
import { u as M } from "./use-motion-template-DZxoFbYI.js";
function c(e) {
  return e.mode === "orb";
}
function I(e) {
  const {
    children: T,
    className: k,
    gradientSize: o = 200,
    gradientColor: R = "#262626",
    gradientOpacity: z = 0.8,
    gradientFrom: B = "#9E7AFF",
    gradientTo: j = "#FE8BBB",
    mode: l = "gradient"
  } = e, L = c(e) ? e.glowFrom ?? "#ee4f27" : "#ee4f27", S = c(e) ? e.glowTo ?? "#6b21ef" : "#6b21ef", C = c(e) ? e.glowAngle ?? 90 : 90, h = c(e) ? e.glowSize ?? 420 : 420, F = c(e) ? e.glowBlur ?? 60 : 60, m = c(e) ? e.glowOpacity ?? 0.9 : 0.9, { theme: f, systemTheme: w } = V(), [y, N] = t.useState(!1);
  t.useEffect(() => N(!0), []);
  const O = t.useMemo(() => y ? (f === "system" ? w : f) === "dark" : !0, [f, w, y]), i = $(-o), s = $(-o), P = v(i, { stiffness: 250, damping: 30, mass: 0.6 }), X = v(s, { stiffness: 250, damping: 30, mass: 0.6 }), g = v(0, { stiffness: 300, damping: 35 }), p = t.useRef(l), x = t.useRef(m), E = t.useRef(o);
  t.useEffect(() => {
    p.current = l;
  }, [l]), t.useEffect(() => {
    x.current = m;
  }, [m]), t.useEffect(() => {
    E.current = o;
  }, [o]);
  const r = t.useCallback(
    (n = "leave") => {
      if (p.current === "orb") {
        n === "enter" ? g.set(x.current) : g.set(0);
        return;
      }
      const d = -E.current;
      i.set(d), s.set(d);
    },
    [i, s, g]
  ), Y = t.useCallback(
    (n) => {
      const a = n.currentTarget.getBoundingClientRect();
      i.set(n.clientX - a.left), s.set(n.clientY - a.top);
    },
    [i, s]
  );
  return t.useEffect(() => {
    r("init");
  }, [r]), t.useEffect(() => {
    const n = (A) => {
      A.relatedTarget || r("global");
    }, a = () => r("global"), d = () => {
      document.visibilityState !== "visible" && r("global");
    };
    return window.addEventListener("pointerout", n), window.addEventListener("blur", a), document.addEventListener("visibilitychange", d), () => {
      window.removeEventListener("pointerout", n), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", d);
    };
  }, [r]), /* @__PURE__ */ u.jsxs(
    b.div,
    {
      className: H(
        "group relative isolate overflow-hidden rounded-[inherit] border border-transparent",
        k
      ),
      onPointerMove: Y,
      onPointerLeave: () => r("leave"),
      onPointerEnter: () => r("enter"),
      style: {
        background: M`
          linear-gradient(var(--color-background) 0 0) padding-box,
          radial-gradient(${o}px circle at ${i}px ${s}px,
            ${B},
            ${j},
            var(--color-border) 100%
          ) border-box
        `
      },
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "bg-background absolute inset-px z-20 rounded-[inherit]" }),
        l === "gradient" && /* @__PURE__ */ u.jsx(
          b.div,
          {
            suppressHydrationWarning: !0,
            className: "pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: M`
              radial-gradient(${o}px circle at ${i}px ${s}px,
                ${R},
                transparent 100%
              )
            `,
              opacity: z
            }
          }
        ),
        l === "orb" && /* @__PURE__ */ u.jsx(
          b.div,
          {
            suppressHydrationWarning: !0,
            "aria-hidden": "true",
            className: "pointer-events-none absolute z-30",
            style: {
              width: h,
              height: h,
              x: P,
              y: X,
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: 9999,
              filter: `blur(${F}px)`,
              opacity: g,
              background: `linear-gradient(${C}deg, ${L}, ${S})`,
              mixBlendMode: O ? "screen" : "multiply",
              willChange: "transform, opacity"
            }
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: "relative z-40", children: T })
      ]
    }
  );
}
export {
  I as M
};
