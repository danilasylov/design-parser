import { R as E, r as o, j as i, c as p } from "./inline-Mcm4wFdg.js";
const h = E.forwardRef(
  ({
    className: f,
    children: b,
    pulseColor: r,
    duration: v = "1.5s",
    distance: g = "8px",
    variant: x = "pulse",
    ...y
  }, w) => {
    const a = o.useRef(null);
    return o.useImperativeHandle(w, () => a.current), o.useLayoutEffect(() => {
      const e = a.current;
      if (!e) return;
      if (r) {
        e.style.removeProperty("--bg");
        return;
      }
      let n = 0, u = "";
      const c = () => {
        n = 0;
        const t = getComputedStyle(e).backgroundColor;
        t !== u && (u = t, e.style.setProperty("--bg", t));
      }, s = () => {
        n || (n = window.requestAnimationFrame(c));
      };
      c();
      const l = new MutationObserver(s);
      l.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["class"]
      });
      const m = new MutationObserver(s);
      m.observe(e, {
        attributes: !0
      });
      const d = [
        "blur",
        "focus",
        "pointerenter",
        "pointerleave"
      ];
      for (const t of d)
        e.addEventListener(t, s);
      return () => {
        n && window.cancelAnimationFrame(n), l.disconnect(), m.disconnect();
        for (const t of d)
          e.removeEventListener(t, s);
      };
    }, [r]), /* @__PURE__ */ i.jsxs(
      "button",
      {
        ref: a,
        className: p(
          "bg-primary text-primary-foreground relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center",
          f
        ),
        style: {
          ...r && { "--pulse-color": r },
          "--duration": v,
          "--distance": g
        },
        ...y,
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "relative z-10", children: b }),
          /* @__PURE__ */ i.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: p(
                "pointer-events-none absolute inset-0 rounded-[inherit] bg-inherit",
                x === "pulse" ? "animate-pulse" : "animate-pulse-ripple"
              )
            }
          )
        ]
      }
    );
  }
);
h.displayName = "PulsatingButton";
export {
  h as P
};
