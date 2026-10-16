import { r, j as d, c as t } from "./inline-Mcm4wFdg.js";
const o = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: s,
    className: t(
      "bg-card text-card-foreground rounded-xl border shadow",
      a
    ),
    ...e
  }
));
o.displayName = "Card";
const i = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: s,
    className: t("flex flex-col space-y-1.5 p-6", a),
    ...e
  }
));
i.displayName = "CardHeader";
const c = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: s,
    className: t("leading-none font-semibold tracking-tight", a),
    ...e
  }
));
c.displayName = "CardTitle";
const n = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: s,
    className: t("text-muted-foreground text-sm", a),
    ...e
  }
));
n.displayName = "CardDescription";
const l = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ d.jsx("div", { ref: s, className: t("p-6 pt-0", a), ...e }));
l.displayName = "CardContent";
const f = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: s,
    className: t("flex items-center p-6 pt-0", a),
    ...e
  }
));
f.displayName = "CardFooter";
export {
  o as C,
  i as a,
  c as b,
  n as c,
  l as d,
  f as e
};
