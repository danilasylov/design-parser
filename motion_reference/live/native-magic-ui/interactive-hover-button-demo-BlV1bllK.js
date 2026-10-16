import { j as r, c as a } from "./inline-Mcm4wFdg.js";
import { A as n } from "./arrow-right-7lRvTEly.js";
function s({
  children: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      className: a(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ r.jsx("div", { className: "bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]" }),
          /* @__PURE__ */ r.jsx("span", { className: "inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0", children: e })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100", children: [
          /* @__PURE__ */ r.jsx("span", { children: e }),
          /* @__PURE__ */ r.jsx(n, {})
        ] })
      ]
    }
  );
}
function u() {
  return /* @__PURE__ */ r.jsx(s, { children: "Hover Me" });
}
export {
  u as default
};
