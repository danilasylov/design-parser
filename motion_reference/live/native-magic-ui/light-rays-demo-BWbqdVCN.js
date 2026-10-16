import { r as p, j as t, c as u, m as y } from "./inline-Mcm4wFdg.js";
const f = (r, e) => r <= 0 ? [] : Array.from({ length: r }, (i, a) => {
  const s = 8 + Math.random() * 84, n = -28 + Math.random() * 56, l = 160 + Math.random() * 160, o = 0.8 + Math.random() * 1.8, d = Math.random() * e, c = e * (0.75 + Math.random() * 0.5), h = 0.6 + Math.random() * 0.5;
  return {
    id: `${a}-${Math.round(s * 10)}`,
    left: s,
    rotate: n,
    width: l,
    swing: o,
    delay: d,
    duration: c,
    intensity: h
  };
}), g = ({
  left: r,
  rotate: e,
  width: i,
  swing: a,
  delay: s,
  duration: n,
  intensity: l
}) => /* @__PURE__ */ t.jsx(
  y.div,
  {
    className: "pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-[var(--light-rays-blur)]",
    style: {
      "--ray-left": `${r}%`,
      "--ray-width": `${i}px`
    },
    initial: { rotate: e },
    animate: {
      opacity: [0, l, 0],
      rotate: [e - a, e + a, e - a]
    },
    transition: {
      duration: n,
      repeat: 1 / 0,
      ease: "easeInOut",
      delay: s,
      repeatDelay: n * 0.1
    }
  }
);
function b({
  className: r,
  style: e,
  count: i = 7,
  color: a = "rgba(160, 210, 255, 0.2)",
  blur: s = 36,
  speed: n = 14,
  length: l = "70vh",
  ref: o,
  ...d
}) {
  const [c, h] = p.useState([]), m = Math.max(n, 0.1);
  return p.useEffect(() => {
    h(f(i, m));
  }, [i, m]), /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: o,
      className: u(
        "pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]",
        r
      ),
      style: {
        "--light-rays-color": a,
        "--light-rays-blur": `${s}px`,
        "--light-rays-length": l,
        ...e
      },
      ...d,
      children: /* @__PURE__ */ t.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute inset-0 opacity-60",
            style: {
              background: "radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute inset-0 opacity-60",
            style: {
              background: "radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)"
            }
          }
        ),
        c.map((x) => /* @__PURE__ */ t.jsx(g, { ...x }, x.id))
      ] })
    }
  );
}
function j() {
  return /* @__PURE__ */ t.jsxs("div", { className: "relative h-[500px] w-full overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center", children: [
      /* @__PURE__ */ t.jsx("span", { className: "text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60", children: "Ambient glow" }),
      /* @__PURE__ */ t.jsx("h1", { className: "text-foreground text-4xl font-bold md:text-5xl", children: "Light Rays" }),
      /* @__PURE__ */ t.jsx("p", { className: "max-w-md text-sm text-slate-800/80 md:text-base dark:text-slate-200/80", children: "Drop this component into any container and it will fill the space with softly animated light rays shining from above." })
    ] }),
    /* @__PURE__ */ t.jsx(b, {})
  ] });
}
export {
  j as default
};
