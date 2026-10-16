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
], c = a.slice(0, a.length / 2), d = a.slice(a.length / 2), m = a.slice(0, a.length / 2), u = a.slice(a.length / 2), t = ({
  img: s,
  name: n,
  username: i,
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
          /* @__PURE__ */ e.jsx("figcaption", { className: "text-sm font-medium dark:text-white", children: n }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs font-medium dark:text-white/40", children: i })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("blockquote", { className: "mt-2 text-sm", children: o })
    ]
  }
);
function h() {
  return /* @__PURE__ */ e.jsxs("div", { className: "relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]", children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "flex flex-row items-center gap-4",
        style: {
          transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)"
        },
        children: [
          /* @__PURE__ */ e.jsx(r, { pauseOnHover: !0, vertical: !0, className: "[--duration:20s]", children: c.map((s) => /* @__PURE__ */ e.jsx(t, { ...s }, s.username)) }),
          /* @__PURE__ */ e.jsx(r, { reverse: !0, pauseOnHover: !0, className: "[--duration:20s]", vertical: !0, children: d.map((s) => /* @__PURE__ */ e.jsx(t, { ...s }, s.username)) }),
          /* @__PURE__ */ e.jsx(r, { reverse: !0, pauseOnHover: !0, className: "[--duration:20s]", vertical: !0, children: m.map((s) => /* @__PURE__ */ e.jsx(t, { ...s }, s.username)) }),
          /* @__PURE__ */ e.jsx(r, { pauseOnHover: !0, className: "[--duration:20s]", vertical: !0, children: u.map((s) => /* @__PURE__ */ e.jsx(t, { ...s }, s.username)) })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b" }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t" }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" })
  ] });
}
export {
  h as default
};
