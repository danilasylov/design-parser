import { j as n, c as s } from "./inline-Mcm4wFdg.js";
function f({
  children: o,
  className: r,
  speed: t = 1,
  colorFrom: a = "#ffaa40",
  colorTo: e = "#9c40ff",
  ...i
}) {
  return /* @__PURE__ */ n.jsx(
    "span",
    {
      style: {
        "--bg-size": `${t * 300}%`,
        "--color-from": a,
        "--color-to": e
      },
      className: s(
        "animate-gradient inline bg-linear-to-r from-(--color-from) via-(--color-to) to-(--color-from) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent",
        r
      ),
      ...i,
      children: o
    }
  );
}
export {
  f as A
};
