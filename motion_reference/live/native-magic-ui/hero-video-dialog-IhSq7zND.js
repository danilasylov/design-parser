import { r as p, j as e, b as m, m as a, c as x } from "./inline-Mcm4wFdg.js";
import { P as y } from "./play-CiAPzvnQ.js";
import { c as u } from "./createLucideIcon-D9LJhv87.js";
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], b = u("x", f), h = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 }
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 }
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 }
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 }
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 }
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 }
  }
};
function w({
  animationStyle: o = "from-center",
  videoSrc: r,
  thumbnailSrc: s,
  thumbnailAlt: l = "Video thumbnail",
  className: n
}) {
  const [c, t] = p.useState(!1), d = h[o];
  return /* @__PURE__ */ e.jsxs("div", { className: x("relative", n), children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        "aria-label": "Play video",
        className: "group relative cursor-pointer border-0 bg-transparent p-0",
        onClick: () => t(!0),
        children: [
          /* @__PURE__ */ e.jsx(
            "img",
            {
              src: s,
              alt: l,
              width: 1920,
              height: 1080,
              className: "w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
            }
          ),
          /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100", children: /* @__PURE__ */ e.jsx("div", { className: "bg-primary/10 flex size-28 items-center justify-center rounded-full backdrop-blur-md", children: /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-linear-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]",
              children: /* @__PURE__ */ e.jsx(
                y,
                {
                  className: "size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105",
                  style: {
                    filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
                  }
                }
              )
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(m, { children: c && /* @__PURE__ */ e.jsx(
      a.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        role: "button",
        tabIndex: 0,
        onKeyDown: (i) => {
          (i.key === "Escape" || i.key === "Enter" || i.key === " ") && t(!1);
        },
        onClick: () => t(!1),
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md",
        children: /* @__PURE__ */ e.jsxs(
          a.div,
          {
            ...d,
            transition: { type: "spring", damping: 30, stiffness: 300 },
            className: "relative mx-4 aspect-video w-full max-w-4xl md:mx-0",
            children: [
              /* @__PURE__ */ e.jsx(a.button, { className: "absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black", children: /* @__PURE__ */ e.jsx(b, { className: "size-5" }) }),
              /* @__PURE__ */ e.jsx("div", { className: "relative isolate z-1 size-full overflow-hidden rounded-2xl border-2 border-white", children: /* @__PURE__ */ e.jsx(
                "iframe",
                {
                  src: r,
                  title: "Hero Video player",
                  className: "mt-0 size-full rounded-2xl",
                  allowFullScreen: !0,
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                }
              ) })
            ]
          }
        )
      }
    ) })
  ] });
}
export {
  w as H
};
