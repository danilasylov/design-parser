import { j as r, c as d, r as i } from "./inline-Mcm4wFdg.js";
function u({
  max: n = 100,
  min: t = 0,
  value: a = 0,
  gaugePrimaryColor: c,
  gaugeSecondaryColor: s,
  className: l
}) {
  const o = 2 * Math.PI * 45, f = o / 100, e = Math.round((a - t) / (n - t) * 100);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d("relative size-40 text-2xl font-semibold", l),
      style: {
        "--circle-size": "100px",
        "--circumference": o,
        "--percent-to-px": `${f}px`,
        "--gap-percent": "5",
        "--offset-factor": "0",
        "--transition-length": "1s",
        "--transition-step": "200ms",
        "--delay": "0s",
        "--percent-to-deg": "3.6deg",
        transform: "translateZ(0)"
      },
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            fill: "none",
            className: "size-full",
            strokeWidth: "2",
            viewBox: "0 0 100 100",
            children: [
              e <= 90 && e >= 0 && /* @__PURE__ */ r.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: "45",
                  strokeWidth: "10",
                  strokeDashoffset: "0",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "opacity-100",
                  style: {
                    stroke: s,
                    "--stroke-percent": 90 - e,
                    "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transform: "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                    transition: "all var(--transition-length) ease var(--delay)",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: "45",
                  strokeWidth: "10",
                  strokeDashoffset: "0",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "opacity-100",
                  style: {
                    stroke: c,
                    "--stroke-percent": e,
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transition: "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
                    transitionProperty: "stroke-dasharray,transform",
                    transform: "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "span",
          {
            "data-current-value": e,
            className: "animate-in fade-in absolute inset-0 m-auto size-fit delay-(--delay) duration-(--transition-length) ease-linear",
            children: e
          }
        )
      ]
    }
  );
}
function v() {
  const [n, t] = i.useState(0);
  return i.useEffect(() => {
    const a = (s) => s === 100 ? 0 : s + 10;
    t(a);
    const c = setInterval(() => t(a), 2e3);
    return () => clearInterval(c);
  }, []), /* @__PURE__ */ r.jsx(
    u,
    {
      value: n,
      gaugePrimaryColor: "rgb(79 70 229)",
      gaugeSecondaryColor: "rgba(0, 0, 0, 0.1)"
    }
  );
}
export {
  v as default
};
