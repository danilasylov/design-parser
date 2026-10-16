import { j as e, c as a } from "./inline-Mcm4wFdg.js";
import { A as l } from "./react-icons.esm-DBLEQ9i4.js";
import { B as i } from "./button-V18JMPr7.js";
const g = ({ children: r, className: s, ...t }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    className: a(
      "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
      s
    ),
    ...t,
    children: r
  }
), h = ({
  name: r,
  className: s,
  background: t,
  Icon: d,
  description: x,
  href: o,
  cta: n,
  ...p
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: a(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      s
    ),
    ...p,
    children: [
      /* @__PURE__ */ e.jsx("div", { children: t }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10", children: [
          /* @__PURE__ */ e.jsx(d, { className: "h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" }),
          /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-semibold text-neutral-700 dark:text-neutral-300", children: r }),
          /* @__PURE__ */ e.jsx("p", { className: "max-w-lg text-neutral-400", children: x })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: a(
              "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
            ),
            children: /* @__PURE__ */ e.jsx(
              i,
              {
                variant: "link",
                asChild: !0,
                size: "sm",
                className: "pointer-events-auto p-0",
                children: /* @__PURE__ */ e.jsxs("a", { href: o, children: [
                  n,
                  /* @__PURE__ */ e.jsx(l, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
                ] })
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: a(
            "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
          ),
          children: /* @__PURE__ */ e.jsx(
            i,
            {
              variant: "link",
              asChild: !0,
              size: "sm",
              className: "pointer-events-auto p-0",
              children: /* @__PURE__ */ e.jsxs("a", { href: o, children: [
                n,
                /* @__PURE__ */ e.jsx(l, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" })
    ]
  },
  r
);
export {
  g as B,
  h as a
};
