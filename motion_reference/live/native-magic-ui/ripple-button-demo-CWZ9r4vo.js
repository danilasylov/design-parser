import { R as k, r as c, j as o, c as w } from "./inline-Mcm4wFdg.js";
const p = k.forwardRef(
  ({
    className: u,
    children: f,
    rippleColor: d = "#ffffff",
    duration: r = "600ms",
    onClick: a,
    ...m
  }, x) => {
    const [s, l] = c.useState([]), g = (t) => {
      h(t), a == null || a(t);
    }, h = (t) => {
      const e = t.currentTarget.getBoundingClientRect(), n = Math.max(e.width, e.height), R = t.clientX - e.left - n / 2, b = t.clientY - e.top - n / 2, y = { x: R, y: b, size: n, key: Date.now() };
      l((j) => [...j, y]);
    };
    return c.useEffect(() => {
      let t = null;
      if (s.length > 0) {
        const i = s[s.length - 1];
        t = setTimeout(() => {
          l(
            (e) => e.filter((n) => n.key !== i.key)
          );
        }, parseInt(r));
      }
      return () => {
        t !== null && clearTimeout(t);
      };
    }, [s, r]), /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: w(
          "bg-background text-primary relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 px-4 py-2 text-center",
          u
        ),
        onClick: g,
        ref: x,
        ...m,
        children: [
          /* @__PURE__ */ o.jsx("div", { className: "relative z-10", children: f }),
          /* @__PURE__ */ o.jsx("span", { className: "pointer-events-none absolute inset-0", children: s.map((t) => /* @__PURE__ */ o.jsx(
            "span",
            {
              className: "animate-rippling bg-background absolute rounded-full opacity-30",
              style: {
                width: `${t.size}px`,
                height: `${t.size}px`,
                top: `${t.y}px`,
                left: `${t.x}px`,
                backgroundColor: d,
                transform: "scale(0)",
                "--duration": r
              }
            },
            t.key
          )) })
        ]
      }
    );
  }
);
p.displayName = "RippleButton";
function N() {
  return /* @__PURE__ */ o.jsx(p, { rippleColor: "#ADD8E6", children: "Click me" });
}
export {
  N as default
};
