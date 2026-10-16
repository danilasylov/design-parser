import { j as e, c as a } from "./inline-Mcm4wFdg.js";
import { c as n } from "./index-B3m4C3_J.js";
import { B as o } from "./button-V18JMPr7.js";
import { C as i, a as d, b as c, c as l, d as x, e as m } from "./card-BW9l4HIn.js";
import { G as u } from "./glare-hover-Vghk2t1-.js";
const f = n(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function h({ className: r, variant: s, ...t }) {
  return /* @__PURE__ */ e.jsx("div", { className: a(f({ variant: s }), r), ...t });
}
function y() {
  return /* @__PURE__ */ e.jsx(u, { className: "rounded-xl", duration: 600, children: /* @__PURE__ */ e.jsxs(i, { className: "w-[340px]", children: [
    /* @__PURE__ */ e.jsxs(d, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx(c, { children: "Pro" }),
        /* @__PURE__ */ e.jsx(h, { children: "Popular" })
      ] }),
      /* @__PURE__ */ e.jsx(l, { children: "For teams that need more." }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-baseline gap-1 pt-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "text-4xl font-semibold tracking-tight", children: "$49" }),
        /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground text-sm", children: "/mo" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(x, { className: "flex flex-col gap-2.5", children: [
      [
        "Unlimited projects",
        "Team collaboration",
        "Advanced analytics"
      ].map((r) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e.jsx("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M12.5 3.5L6 10L2.5 6.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        r
      ] }, r)),
      /* @__PURE__ */ e.jsxs("div", { className: "text-muted-foreground flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ e.jsx("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", children: /* @__PURE__ */ e.jsx(
          "circle",
          {
            cx: "7.5",
            cy: "7.5",
            r: "1.5",
            fill: "currentColor",
            opacity: "0.4"
          }
        ) }),
        "SSO (coming soon)"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(o, { className: "w-full", children: "Get started" }) })
  ] }) });
}
export {
  y as default
};
