import { j as a, m as p, c as b } from "./inline-Mcm4wFdg.js";
const x = ({
  className: t,
  size: r = 50,
  delay: o = 0,
  duration: n = 6,
  colorFrom: s = "#ffaa40",
  colorTo: d = "#9c40ff",
  transition: i,
  style: c,
  reverse: l = !1,
  initialOffset: e = 0,
  borderWidth: m = 1
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: "pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]",
    style: {
      "--border-beam-width": `${m}px`
    },
    children: /* @__PURE__ */ a.jsx(
      p.div,
      {
        className: b(
          "absolute aspect-square",
          "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          t
        ),
        style: {
          width: r,
          offsetPath: `rect(0 auto auto 0 round ${r}px)`,
          "--color-from": s,
          "--color-to": d,
          ...c
        },
        initial: { offsetDistance: `${e}%` },
        animate: {
          offsetDistance: l ? [`${100 - e}%`, `${-e}%`] : [`${e}%`, `${100 + e}%`]
        },
        transition: {
          repeat: 1 / 0,
          ease: "linear",
          duration: n,
          delay: -o,
          ...i
        }
      }
    )
  }
);
export {
  x as B
};
