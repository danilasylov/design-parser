import { j as e, c as o } from "./inline-Mcm4wFdg.js";
import { M as r } from "./marquee-uYS5HSCo.js";
const n = [
  {
    name: "Microsoft",
    img: "https://cdn.simpleicons.org/microsoft/000/fff"
  },
  {
    name: "Apple",
    img: "/live/magic-ui/external/bf79c3580167cfa37e.svg"
  },
  {
    name: "Google",
    img: "/live/magic-ui/external/4584019745fc2eb7b7.svg"
  },
  {
    name: "Facebook",
    img: "/live/magic-ui/external/5b83acd1f15cd2a4dd.svg"
  },
  {
    name: "LinkedIn",
    img: "https://cdn.simpleicons.org/linkedin/000/fff"
  },
  {
    name: "Twitter",
    img: "https://cdn.simpleicons.org/twitter/000/fff"
  }
], t = ({ name: i, img: s }) => /* @__PURE__ */ e.jsx("div", { className: o("size-12 cursor-pointer"), children: /* @__PURE__ */ e.jsx("img", { src: s, alt: i }) });
function m() {
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-background relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border py-20 md:shadow-xl", children: [
    /* @__PURE__ */ e.jsx(r, { className: "[--gap:3rem]", children: n.map((i, s) => /* @__PURE__ */ e.jsx(t, { ...i }, s)) }),
    /* @__PURE__ */ e.jsx("div", { className: "dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" }),
    /* @__PURE__ */ e.jsx("div", { className: "dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" })
  ] });
}
export {
  m as default
};
