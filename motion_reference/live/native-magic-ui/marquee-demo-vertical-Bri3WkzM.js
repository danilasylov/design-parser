import { j as e, c as l } from "./inline-Mcm4wFdg.js";
import { M as r } from "./marquee-uYS5HSCo.js";
const a = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/live/magic-ui/external/59848753fef77bf8ec.png"
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/live/magic-ui/external/811e91e5c56f016731.png"
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/live/magic-ui/external/adadac67c4d46323d9.png"
  }
], c = a.slice(0, a.length / 2), m = a.slice(a.length / 2), t = ({
  img: s,
  name: i,
  username: n,
  body: o
}) => /* @__PURE__ */ e.jsxs(
  "figure",
  {
    className: l(
      "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    ),
    children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ e.jsx("img", { className: "rounded-full", width: "32", height: "32", alt: "", src: s }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx("figcaption", { className: "text-sm font-medium dark:text-white", children: i }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs font-medium dark:text-white/40", children: n })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("blockquote", { className: "mt-2 text-sm", children: o })
    ]
  }
);
function x() {
  return /* @__PURE__ */ e.jsxs("div", { className: "relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(r, { pauseOnHover: !0, vertical: !0, className: "[--duration:20s]", children: c.map((s) => /* @__PURE__ */ e.jsx(t, { ...s }, s.username)) }),
    /* @__PURE__ */ e.jsx(r, { reverse: !0, pauseOnHover: !0, vertical: !0, className: "[--duration:20s]", children: m.map((s) => /* @__PURE__ */ e.jsx(t, { ...s }, s.username)) }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b" }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t" })
  ] });
}
export {
  x as default
};
