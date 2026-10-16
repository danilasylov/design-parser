import { r as v, j as $, c as h } from "./inline-Mcm4wFdg.js";
function l(n, o) {
  const e = n.replace("#", ""), r = (a) => Number.parseInt(a, 16);
  return /^[0-9A-Fa-f]{6}$/.test(e) ? `rgba(${r(e.slice(0, 2))},${r(e.slice(2, 4))},${r(e.slice(4, 6))},${o})` : /^[0-9A-Fa-f]{3}$/.test(e) ? `rgba(${r(e[0] + e[0])},${r(e[1] + e[1])},${r(e[2] + e[2])},${o})` : n;
}
function _({
  background: n = "#000",
  children: o,
  color: e = "#ffffff",
  opacity: r = 0.5,
  angle: a = -45,
  size: f = 250,
  duration: b = 650,
  playOnce: t = !1,
  className: g,
  style: u,
  width: s,
  height: i,
  ...c
}) {
  const d = v.useMemo(() => l(e, r), [e, r]), p = {
    "--gh-angle": `${a}deg`,
    "--gh-duration": `${b}ms`,
    "--gh-size": `${f}%`,
    "--gh-rgba": d,
    background: n,
    ...u,
    ...s !== void 0 ? { width: s } : {},
    ...i !== void 0 ? { height: i } : {}
  };
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      ...c,
      className: h(
        "relative grid size-fit cursor-pointer place-items-center overflow-hidden bg-transparent",
        // BEFORE ELEMENT
        "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-no-repeat before:content-['']",
        // GRADIENT
        "before:[background-image:linear-gradient(var(--gh-angle),transparent_60%,var(--gh-rgba)_70%,transparent,transparent_100%)]",
        // SIZE + POSITION
        "before:[background-size:var(--gh-size)_var(--gh-size),100%_100%]",
        "before:[background-position:-100%_-100%,0_0]",
        // TRANSITION
        !t && "before:transition-[background-position] before:duration-[var(--gh-duration)] before:ease-in-out",
        t && "before:transition-none hover:before:transition-[background-position] hover:before:duration-[var(--gh-duration)]",
        // HOVER EFFECT
        "hover:before:[background-position:100%_100%,0_0]",
        g
      ),
      style: p,
      children: o
    }
  );
}
export {
  _ as G
};
