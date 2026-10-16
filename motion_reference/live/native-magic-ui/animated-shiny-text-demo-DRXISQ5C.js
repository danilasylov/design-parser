import { j as e, c as t } from "./inline-Mcm4wFdg.js";
import { A as s } from "./react-icons.esm-DBLEQ9i4.js";
const o = ({
  children: r,
  className: n,
  shimmerWidth: a = 100,
  ...i
}) => /* @__PURE__ */ e.jsx(
  "span",
  {
    style: {
      "--shiny-width": `${a}px`
    },
    className: t(
      "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
      // Shine effect
      "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
      // Shine gradient
      "bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
      n
    ),
    ...i,
    children: r
  }
);
function c() {
  return /* @__PURE__ */ e.jsx("div", { className: "z-10 flex min-h-64 items-center justify-center", children: /* @__PURE__ */ e.jsx(
    "div",
    {
      className: t(
        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      ),
      children: /* @__PURE__ */ e.jsxs(o, { className: "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400", children: [
        /* @__PURE__ */ e.jsx("span", { children: "✨ Introducing Magic UI" }),
        /* @__PURE__ */ e.jsx(s, { className: "ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" })
      ] })
    }
  ) });
}
export {
  c as default
};
