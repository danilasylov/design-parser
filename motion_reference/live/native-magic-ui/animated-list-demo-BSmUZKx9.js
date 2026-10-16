import { R as x, r as o, j as e, b as g, c as m, m as h } from "./inline-Mcm4wFdg.js";
function j({ children: t }) {
  const s = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };
  return /* @__PURE__ */ e.jsx(h.div, { ...s, layout: !0, className: "mx-auto w-full", children: t });
}
const d = x.memo(
  ({ children: t, className: s, delay: i = 1e3, ...l }) => {
    const [n, f] = o.useState(0), r = o.useMemo(
      () => x.Children.toArray(t),
      [t]
    );
    o.useEffect(() => {
      let a = null;
      return n < r.length - 1 && (a = setTimeout(() => {
        f((u) => (u + 1) % r.length);
      }, i)), () => {
        a !== null && clearTimeout(a);
      };
    }, [n, i, r.length]);
    const p = o.useMemo(() => r.slice(0, n + 1).reverse(), [n, r]);
    return /* @__PURE__ */ e.jsx(
      "div",
      {
        className: m("flex flex-col items-center gap-4", s),
        ...l,
        children: /* @__PURE__ */ e.jsx(g, { children: p.map((a) => /* @__PURE__ */ e.jsx(j, { children: a }, a.key)) })
      }
    );
  }
);
d.displayName = "AnimatedList";
let c = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7"
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800"
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71"
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF"
  }
];
c = Array.from({ length: 10 }, () => c).flat();
const w = ({ name: t, description: s, icon: i, color: l, time: n }) => /* @__PURE__ */ e.jsx(
  "figure",
  {
    className: m(
      "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
      // animation styles
      "transition-all duration-200 ease-in-out hover:scale-[103%]",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
    ),
    children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "flex size-10 items-center justify-center rounded-2xl",
          style: {
            backgroundColor: l
          },
          children: /* @__PURE__ */ e.jsx("span", { className: "text-lg", children: i })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("figcaption", { className: "flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-sm sm:text-lg", children: t }),
          /* @__PURE__ */ e.jsx("span", { className: "mx-1", children: "·" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xs text-gray-500", children: n })
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-normal dark:text-white/60", children: s })
      ] })
    ] })
  }
);
function b({
  className: t
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: m(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        t
      ),
      children: [
        /* @__PURE__ */ e.jsx(d, { children: c.map((s, i) => /* @__PURE__ */ o.createElement(w, { ...s, key: i })) }),
        /* @__PURE__ */ e.jsx("div", { className: "from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t" })
      ]
    }
  );
}
export {
  b as default
};
