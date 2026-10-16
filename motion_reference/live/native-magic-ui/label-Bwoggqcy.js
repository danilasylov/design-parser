import { r as o, j as i, c as s } from "./inline-Mcm4wFdg.js";
import { P as d } from "./index-CYtNk8Oh.js";
import { c as f } from "./index-B3m4C3_J.js";
const u = o.forwardRef(
  ({ className: r, type: e, ...a }, t) => /* @__PURE__ */ i.jsx(
    "input",
    {
      type: e,
      className: s(
        "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        r
      ),
      ref: t,
      ...a
    }
  )
);
u.displayName = "Input";
var c = Object.defineProperty, m = (r, e) => c(r, "name", { value: e, configurable: !0 }), l = /* @__PURE__ */ o.forwardRef(
  /* @__PURE__ */ m(function(e, a) {
    return /* @__PURE__ */ i.jsx(
      d.label,
      {
        ...e,
        ref: a,
        onMouseDown: (t) => {
          var n;
          t.target.closest("button, input, select, textarea") || ((n = e.onMouseDown) == null || n.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
        }
      }
    );
  }, "Label")
);
const b = f(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), p = o.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ i.jsx(
  l,
  {
    ref: a,
    className: s(b(), r),
    ...e
  }
));
p.displayName = l.displayName;
export {
  u as I,
  p as L
};
