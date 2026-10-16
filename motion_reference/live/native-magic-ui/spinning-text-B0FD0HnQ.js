import { j as i, m as o, c as g } from "./inline-Mcm4wFdg.js";
const A = {
  repeat: 1 / 0,
  ease: "linear"
}, x = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1
  }
};
function j({
  children: t,
  duration: l = 10,
  reverse: c = !1,
  radius: m = 5,
  transition: r,
  variants: e,
  className: p,
  style: y
}) {
  if (typeof t != "string" && !Array.isArray(t))
    throw new Error("children must be a string or an array of strings");
  if (Array.isArray(t)) {
    if (!t.every((a) => typeof a == "string"))
      throw new Error("all elements in children array must be strings");
    t = t.join("");
  }
  const s = t.split("");
  s.push(" ");
  const f = {
    ...A,
    ...r,
    duration: (r == null ? void 0 : r.duration) ?? l
  }, u = {
    visible: { rotate: c ? -360 : 360 },
    ...e == null ? void 0 : e.container
  }, d = {
    ...x,
    ...e == null ? void 0 : e.item
  };
  return /* @__PURE__ */ i.jsxs(
    o.div,
    {
      className: g("relative", p),
      style: {
        ...y
      },
      initial: "hidden",
      animate: "visible",
      variants: u,
      transition: f,
      children: [
        s.map((a, n) => /* @__PURE__ */ i.jsx(
          o.span,
          {
            "aria-hidden": "true",
            variants: d,
            className: "absolute top-1/2 left-1/2 inline-block",
            style: {
              "--index": n,
              "--total": s.length,
              "--radius": m,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: "center"
            },
            children: a
          },
          `${n}-${a}`
        )),
        /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: t })
      ]
    }
  );
}
export {
  j as S
};
