import { u as d, j as r } from "./inline-Mcm4wFdg.js";
import { B as o } from "./button-V18JMPr7.js";
import { C as i, a as l, b as c, c as n, d as m, e as t } from "./card-BW9l4HIn.js";
import { L as s, I as e } from "./label-Bwoggqcy.js";
import { M as p } from "./magic-card-DEThe1N1.js";
function g() {
  const { theme: a } = d();
  return /* @__PURE__ */ r.jsx(i, { className: "w-full max-w-sm border-none p-0 shadow-none", children: /* @__PURE__ */ r.jsxs(
    p,
    {
      gradientColor: a === "dark" ? "#262626" : "#D9D9D955",
      className: "p-0",
      children: [
        /* @__PURE__ */ r.jsxs(l, { className: "border-border border-b p-4 [.border-b]:pb-4", children: [
          /* @__PURE__ */ r.jsx(c, { children: "Login" }),
          /* @__PURE__ */ r.jsx(n, { children: "Enter your credentials to access your account" })
        ] }),
        /* @__PURE__ */ r.jsx(m, { className: "p-4", children: /* @__PURE__ */ r.jsx("form", { children: /* @__PURE__ */ r.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ r.jsx(s, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ r.jsx(e, { id: "email", type: "email", placeholder: "name@example.com" })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ r.jsx(s, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ r.jsx(e, { id: "password", type: "password" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ r.jsx(t, { className: "border-border border-t p-4 [.border-t]:pt-4", children: /* @__PURE__ */ r.jsx(o, { className: "w-full", children: "Sign In" }) })
      ]
    }
  ) });
}
export {
  g as default
};
