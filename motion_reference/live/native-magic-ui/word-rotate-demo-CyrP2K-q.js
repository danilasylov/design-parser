import { r as s, j as e, b as x, m as d, c as m } from "./inline-Mcm4wFdg.js";
function u({
  words: t,
  duration: a = 2500,
  motionProps: i = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" }
  },
  className: o
}) {
  const [n, r] = s.useState(0);
  return s.useEffect(() => {
    const c = setInterval(() => {
      r((l) => (l + 1) % t.length);
    }, a);
    return () => clearInterval(c);
  }, [t, a]), /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden py-2", children: /* @__PURE__ */ e.jsx(x, { mode: "wait", children: /* @__PURE__ */ e.jsx(
    d.h1,
    {
      className: m(o),
      ...i,
      children: t[n]
    },
    t[n]
  ) }) });
}
function p() {
  return /* @__PURE__ */ e.jsx(
    u,
    {
      className: "text-4xl font-bold text-black dark:text-white",
      words: ["Word", "Rotate"]
    }
  );
}
export {
  p as default
};
