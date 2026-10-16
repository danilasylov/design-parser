import { j as t, m as i, c as s } from "./inline-Mcm4wFdg.js";
function c({
  children: e,
  className: a,
  style: n,
  fontSize: r = 5
}) {
  if (typeof e != "string")
    throw new Error("children must be a string");
  const o = "#EF4444";
  return /* @__PURE__ */ t.jsx(
    i.div,
    {
      className: s("text-center select-none", a),
      style: {
        fontSize: `${r}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        WebkitTextStroke: `${r * 0.35}px #000000`,
        // Thick black outline
        transform: "skewX(-10deg)",
        textTransform: "uppercase",
        filter: `
          drop-shadow(5px 5px 0px #000000) 
          drop-shadow(3px 3px 0px ${o})
        `,
        backgroundColor: "#FACC15",
        backgroundImage: `radial-gradient(circle at 1px 1px, ${o} 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...n
      },
      initial: { opacity: 0, scale: 0.8, rotate: -2 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring"
      },
      children: e
    }
  );
}
function l() {
  return /* @__PURE__ */ t.jsx("div", { className: "space-y-8 text-center", children: /* @__PURE__ */ t.jsx(c, { fontSize: 5, children: "BOOM!" }) });
}
export {
  l as default
};
