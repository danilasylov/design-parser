import { r as l, j as i, c as g } from "./inline-Mcm4wFdg.js";
const P = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 }
}, v = ({
  src: h,
  grid: u = "6x4",
  grayscaleAnimation: m = !0,
  pixelFadeInDuration: w = 1e3,
  maxAnimationDelay: f = 1200,
  colorRevealDelay: p = 1300,
  customGrid: n
}) => {
  const [$, b] = l.useState(!1), [y, j] = l.useState(!1), x = 1, d = 16, { rows: o, cols: s } = l.useMemo(() => ((r) => {
    if (!r) return !1;
    const { rows: c, cols: e } = r;
    return Number.isInteger(c) && Number.isInteger(e) && c >= x && e >= x && c <= d && e <= d;
  })(n) ? n : P[u], [n, u]);
  l.useEffect(() => {
    b(!0);
    const t = setTimeout(() => {
      j(!0);
    }, p);
    return () => clearTimeout(t);
  }, [p]);
  const I = l.useMemo(() => {
    const t = o * s;
    return Array.from({ length: t }, (r, c) => {
      const e = Math.floor(c / s), a = c % s, M = `polygon(
        ${a * (100 / s)}% ${e * (100 / o)}%,
        ${(a + 1) * (100 / s)}% ${e * (100 / o)}%,
        ${(a + 1) * (100 / s)}% ${(e + 1) * (100 / o)}%,
        ${a * (100 / s)}% ${(e + 1) * (100 / o)}%
      )`, N = Math.random() * f;
      return {
        clipPath: M,
        delay: N
      };
    });
  }, [o, s, f]);
  return /* @__PURE__ */ i.jsx("div", { className: "relative h-72 w-72 select-none md:h-96 md:w-96", children: I.map((t, r) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: g(
        "absolute inset-0 transition-all ease-out",
        $ ? "opacity-100" : "opacity-0"
      ),
      style: {
        clipPath: t.clipPath,
        transitionDelay: `${t.delay}ms`,
        transitionDuration: `${w}ms`
      },
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: h,
          alt: `Pixel image piece ${r + 1}`,
          className: g(
            "z-1 rounded-[2.5rem] object-cover",
            m && (y ? "grayscale-0" : "grayscale")
          ),
          style: {
            transition: m ? `filter ${w}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none"
          },
          draggable: !1
        }
      )
    },
    r
  )) });
};
function G() {
  return /* @__PURE__ */ i.jsx(
    v,
    {
      src: "/live/magic-ui/pixel-image-demo.jpg",
      customGrid: { rows: 4, cols: 6 },
      grayscaleAnimation: !0
    }
  );
}
export {
  G as default
};
