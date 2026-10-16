import { j as e } from "./inline-Mcm4wFdg.js";
import { B as s } from "./button-V18JMPr7.js";
import { C as a, a as r, b as t, c as i, d as l } from "./card-BW9l4HIn.js";
import { L as o, I as n } from "./label-Bwoggqcy.js";
import { N as m } from "./noise-texture-DeLr-AFM.js";
function h() {
  return /* @__PURE__ */ e.jsx("div", { className: "flex justify-center p-4", children: /* @__PURE__ */ e.jsxs(a, { className: "bg-card/80 relative w-full max-w-md overflow-hidden border", children: [
    /* @__PURE__ */ e.jsx(m, { noiseOpacity: 0.45 }),
    /* @__PURE__ */ e.jsxs(r, { className: "relative z-10 space-y-1 pb-4", children: [
      /* @__PURE__ */ e.jsx(t, { className: "text-xl", children: "The weekly digest" }),
      /* @__PURE__ */ e.jsx(i, { children: "One email on Sundays—new components, tips, and changelog highlights. No spam, unsubscribe anytime." })
    ] }),
    /* @__PURE__ */ e.jsxs(l, { className: "relative z-10 space-y-4 pt-0", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx(o, { htmlFor: "newsletter-email", children: "Email" }),
        /* @__PURE__ */ e.jsx(
          n,
          {
            id: "newsletter-email",
            autoComplete: "email",
            placeholder: "you@company.com",
            type: "email"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(s, { className: "w-full", type: "button", children: "Subscribe" })
    ] })
  ] }) });
}
export {
  h as default
};
