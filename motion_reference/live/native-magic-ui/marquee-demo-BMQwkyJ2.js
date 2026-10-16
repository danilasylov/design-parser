import { j as e, c as l } from "./inline-Mcm4wFdg.js";
import { M as r } from "./marquee-uYS5HSCo.js";
const s = [
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
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/live/magic-ui/external/73920b9a6ead16e344.png"
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/live/magic-ui/external/dd8454031136126432.png"
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/live/magic-ui/external/97bf4cca6c4618e55d.png"
  }
], m = s.slice(0, s.length / 2), d = s.slice(s.length / 2), i = ({
  img: a,
  name: n,
  username: t,
  body: o
}) => /* @__PURE__ */ e.jsxs(
  "figure",
  {
    className: l(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    ),
    children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ e.jsx("img", { className: "rounded-full", width: "32", height: "32", alt: "", src: a }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx("figcaption", { className: "text-sm font-medium dark:text-white", children: n }),
          /* @__PURE__ */ e.jsx("p", { className: "text-xs font-medium dark:text-white/40", children: t })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("blockquote", { className: "mt-2 text-sm", children: o })
    ]
  }
);
function u() {
  return /* @__PURE__ */ e.jsxs("div", { className: "relative flex w-full flex-col items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(r, { pauseOnHover: !0, className: "[--duration:20s]", children: m.map((a) => /* @__PURE__ */ e.jsx(i, { ...a }, a.username)) }),
    /* @__PURE__ */ e.jsx(r, { reverse: !0, pauseOnHover: !0, className: "[--duration:20s]", children: d.map((a) => /* @__PURE__ */ e.jsx(i, { ...a }, a.username)) }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" }),
    /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" })
  ] });
}
export {
  u as default
};
