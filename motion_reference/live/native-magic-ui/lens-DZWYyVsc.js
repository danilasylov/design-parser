import { r as s, j as a, m as w, b as k } from "./inline-Mcm4wFdg.js";
import { u as j } from "./use-motion-template-DZxoFbYI.js";
function L({
  children: o,
  zoomFactor: i = 1.3,
  lensSize: p = 170,
  isStatic: l = !1,
  position: c = { x: 0, y: 0 },
  defaultPosition: n,
  duration: f = 0.1,
  lensColor: y = "black",
  ariaLabel: b = "Zoom Area"
}) {
  if (i < 1)
    throw new Error("zoomFactor must be greater than 1");
  if (p < 0)
    throw new Error("lensSize must be greater than 0");
  const [u, m] = s.useState(!1), [d, v] = s.useState(c), M = s.useRef(null), r = s.useMemo(() => l ? c : n && !u ? n : d, [l, c, n, u, d]), h = s.useCallback((e) => {
    const t = e.currentTarget.getBoundingClientRect();
    v({
      x: e.clientX - t.left,
      y: e.clientY - t.top
    });
  }, []), $ = s.useCallback((e) => {
    e.key === "Escape" && m(!1);
  }, []), x = j`radial-gradient(circle ${p / 2}px at ${r.x}px ${r.y}px, ${y} 100%, transparent 100%)`, g = s.useMemo(() => {
    const { x: e, y: t } = r;
    return /* @__PURE__ */ a.jsx(
      w.div,
      {
        initial: { opacity: 0, scale: 0.58 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
        transition: { duration: f },
        className: "absolute inset-0 overflow-hidden",
        style: {
          maskImage: x,
          WebkitMaskImage: x,
          transformOrigin: `${e}px ${t}px`,
          zIndex: 50
        },
        children: /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              transform: `scale(${i})`,
              transformOrigin: `${e}px ${t}px`
            },
            children: o
          }
        )
      }
    );
  }, [r, x, i, o, f]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: M,
      className: "relative z-20 overflow-hidden rounded-xl",
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      onMouseMove: h,
      onKeyDown: $,
      role: "region",
      "aria-label": b,
      tabIndex: 0,
      children: [
        o,
        l || n ? g : /* @__PURE__ */ a.jsx(k, { mode: "popLayout", children: u && g })
      ]
    }
  );
}
export {
  L
};
