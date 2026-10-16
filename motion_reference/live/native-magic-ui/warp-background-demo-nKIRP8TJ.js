import { r as i, j as a, c as w, m as y } from "./inline-Mcm4wFdg.js";
import { C as k, d as N, b as q, c as C } from "./card-BW9l4HIn.js";
const l = ({
  width: c,
  x: _,
  delay: p,
  duration: o
}) => {
  const r = Math.floor(Math.random() * 360), n = Math.floor(Math.random() * 10) + 1;
  return /* @__PURE__ */ a.jsx(
    y.div,
    {
      style: {
        "--x": `${_}`,
        "--width": `${c}`,
        "--aspect-ratio": `${n}`,
        "--background": `linear-gradient(hsl(${r} 80% 60%), transparent)`
      },
      className: "absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]",
      initial: { y: "100cqmax", x: "-50%" },
      animate: { y: "-100%", x: "-50%" },
      transition: {
        duration: o,
        delay: p,
        repeat: 1 / 0,
        ease: "linear"
      }
    }
  );
}, M = ({
  children: c,
  perspective: _ = 100,
  className: p,
  beamsPerSide: o = 3,
  beamSize: r = 5,
  beamDelayMax: n = 3,
  beamDelayMin: m = 0,
  beamDuration: d = 3,
  gridColor: v = "var(--border)",
  ...g
}) => {
  const t = i.useCallback(() => {
    const e = [], z = Math.floor(100 / r) / o;
    for (let x = 0; x < o; x++) {
      const j = Math.floor(x * z), $ = Math.random() * (n - m) + m;
      e.push({ x: j, delay: $ });
    }
    return e;
  }, [o, r, n, m]), h = i.useMemo(() => t(), [t]), u = i.useMemo(() => t(), [t]), b = i.useMemo(() => t(), [t]), f = i.useMemo(() => t(), [t]);
  return /* @__PURE__ */ a.jsxs("div", { className: w("relative rounded border p-20", p), ...g, children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        style: {
          "--perspective": `${_}px`,
          "--grid-color": v,
          "--beam-size": `${r}%`
        },
        className: "@container-[size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] perspective-(--perspective) transform-3d",
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "@container absolute z-20 h-[100cqmax] w-[100cqi] origin-[50%_0%] transform-[rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d", children: h.map((e, s) => /* @__PURE__ */ a.jsx(
            l,
            {
              width: `${r}%`,
              x: `${e.x * r}%`,
              delay: e.delay,
              duration: d
            },
            `top-${s}`
          )) }),
          /* @__PURE__ */ a.jsx("div", { className: "@container absolute top-full h-[100cqmax] w-[100cqi] origin-[50%_0%] transform-[rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d", children: b.map((e, s) => /* @__PURE__ */ a.jsx(
            l,
            {
              width: `${r}%`,
              x: `${e.x * r}%`,
              delay: e.delay,
              duration: d
            },
            `bottom-${s}`
          )) }),
          /* @__PURE__ */ a.jsx("div", { className: "@container absolute top-0 left-0 h-[100cqmax] w-[100cqh] origin-[0%_0%] transform-[rotate(90deg)_rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d", children: f.map((e, s) => /* @__PURE__ */ a.jsx(
            l,
            {
              width: `${r}%`,
              x: `${e.x * r}%`,
              delay: e.delay,
              duration: d
            },
            `left-${s}`
          )) }),
          /* @__PURE__ */ a.jsx("div", { className: "@container absolute top-0 right-0 h-[100cqmax] w-[100cqh] origin-[100%_0%] transform-[rotate(-90deg)_rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d", children: u.map((e, s) => /* @__PURE__ */ a.jsx(
            l,
            {
              width: `${r}%`,
              x: `${e.x * r}%`,
              delay: e.delay,
              duration: d
            },
            `right-${s}`
          )) })
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", { className: "relative", children: c })
  ] });
};
function E() {
  return /* @__PURE__ */ a.jsx(M, { children: /* @__PURE__ */ a.jsx(k, { className: "w-80", children: /* @__PURE__ */ a.jsxs(N, { className: "flex flex-col gap-2 p-4", children: [
    /* @__PURE__ */ a.jsx(q, { children: "Congratulations on Your Promotion!" }),
    /* @__PURE__ */ a.jsx(C, { children: "Your hard work and dedication have paid off. We're thrilled to see you take this next step in your career. Keep up the fantastic work!" })
  ] }) }) });
}
export {
  E as default
};
