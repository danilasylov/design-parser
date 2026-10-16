import { r as l, j as f, c as ee } from "./inline-Mcm4wFdg.js";
import { P as D } from "./index-CYtNk8Oh.js";
import { P as U, c as T, b as be, u as R, a as me } from "./index-BZUAg3JG.js";
import { u as y, a as ve } from "./index-CNhZeCHS.js";
var pe = Object.defineProperty, we = (o, e) => pe(o, "name", { value: e, configurable: !0 }), ge = {
  LTR: "ltr"
}, Ae = l.createContext(void 0);
function re(o) {
  const e = l.useContext(Ae);
  return o || e || ge.LTR;
}
we(re, "useDirection");
var xe = Object.defineProperty, Pe = (o, e) => xe(o, "name", { value: e, configurable: !0 });
function oe(o, [e, t]) {
  return Math.min(t, Math.max(e, o));
}
Pe(oe, "clamp");
var Ce = Object.defineProperty, S = (o, e) => Ce(o, "name", { value: e, configurable: !0 });
function te(o, e) {
  return l.useReducer((t, r) => e[t][r] ?? t, o);
}
S(te, "useStateMachine");
var L = {
  Auto: "auto",
  Always: "always",
  Scroll: "scroll",
  Hover: "hover"
}, _ = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, x = {
  LTR: "ltr",
  RTL: "rtl"
}, ne = "ScrollArea", [le, Be] = be(ne), [Re, w] = le(ne), ce = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ S(function(e, t) {
    const {
      __scopeScrollArea: r,
      type: a = L.Hover,
      dir: n,
      scrollHideDelay: c = 600,
      ...s
    } = e, [i, u] = l.useState(null), [b, h] = l.useState(null), [m, d] = l.useState(null), [v, g] = l.useState(null), [j, k] = l.useState(null), [C, I] = l.useState(0), [B, V] = l.useState(0), [M, H] = l.useState(!1), [X, O] = l.useState(!1), p = y(t, u), A = re(n);
    return /* @__PURE__ */ f.jsx(
      Re,
      {
        scope: r,
        type: a,
        dir: A,
        scrollHideDelay: c,
        scrollArea: i,
        viewport: b,
        onViewportChange: h,
        content: m,
        onContentChange: d,
        scrollbarX: v,
        onScrollbarXChange: g,
        scrollbarXEnabled: M,
        onScrollbarXEnabledChange: H,
        scrollbarY: j,
        onScrollbarYChange: k,
        scrollbarYEnabled: X,
        onScrollbarYEnabledChange: O,
        onCornerWidthChange: I,
        onCornerHeightChange: V,
        children: /* @__PURE__ */ f.jsx(
          D.div,
          {
            dir: A,
            ...s,
            ref: p,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": C + "px",
              "--radix-scroll-area-corner-height": B + "px",
              ...e.style
            }
          }
        )
      }
    );
  }, "ScrollArea")
), ae = "ScrollAreaViewport", Q = ve(ae), Te = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ S(function(e, t) {
    const { __scopeScrollArea: r, children: a, nonce: n, disableImplicitContentElement: c, ...s } = e, i = w(ae, r), u = l.useRef(null), b = y(t, u, i.onViewportChange), h = l.isValidElement(a);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(Ee, { nonce: n }),
      /* @__PURE__ */ f.jsx(
        D.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: b,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: c ? a : h ? /* @__PURE__ */ f.jsx(Q, { child: a, children: (m) => /* @__PURE__ */ f.jsx(
            Z,
            {
              __scopeScrollArea: r,
              children: m
            }
          ) }) : (
            // When `children` isn't a single element there is nothing for
            // `Slot` to redirect onto, so target the wrapper. This mirrors the
            // old [incorrect] behavior, but it's better than throwing on a
            // patch update.
            /* @__PURE__ */ f.jsx(Q, { children: /* @__PURE__ */ f.jsx(
              Z,
              {
                __scopeScrollArea: r,
                children: a
              }
            ) })
          )
        }
      )
    ] });
  }, "ScrollAreaViewport")
), Ee = /* @__PURE__ */ l.memo(
  /* @__PURE__ */ S(function({ nonce: e }) {
    return /* @__PURE__ */ f.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
        },
        nonce: e
      }
    );
  }, "ScrollAreaViewportStyle"),
  (o, e) => o.nonce === e.nonce
), ye = "ScrollAreaContent", Z = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { __scopeScrollArea: r, children: a, ...n } = e, c = w(ye, r), s = y(t, c.onContentChange);
  return (
    // `display: table` ensures our content div will match the size of its
    // children in both horizontal and vertical axis so we can determine if
    // scroll width/height changed and recalculate thumb sizes. This doesn't
    // account for children with *percentage* widths that change. We'll wait to
    // see what use-cases consumers come up with there before trying to resolve
    // it.
    /* @__PURE__ */ f.jsx(
      D.div,
      {
        ...n,
        ref: s,
        style: { minWidth: "100%", display: "table", ...e.style },
        children: a
      }
    )
  );
}, "ScrollAreaContent")), P = "ScrollAreaScrollbar", ie = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ S(function(e, t) {
    const { forceMount: r, ...a } = e, n = w(P, e.__scopeScrollArea), { onScrollbarXEnabledChange: c, onScrollbarYEnabledChange: s } = n, i = e.orientation === _.Horizontal;
    return l.useEffect(() => (i ? c(!0) : s(!0), () => {
      i ? c(!1) : s(!1);
    }), [i, c, s]), n.type === L.Hover ? /* @__PURE__ */ f.jsx(Le, { ...a, ref: t, forceMount: r }) : n.type === L.Scroll ? /* @__PURE__ */ f.jsx(_e, { ...a, ref: t, forceMount: r }) : n.type === L.Auto ? /* @__PURE__ */ f.jsx(se, { ...a, ref: t, forceMount: r }) : n.type === L.Always ? /* @__PURE__ */ f.jsx(q, { ...a, ref: t, "data-state": "visible" }) : null;
  }, "ScrollAreaScrollbar")
), Le = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { forceMount: r, ...a } = e, n = w(P, e.__scopeScrollArea), [c, s] = l.useState(!1);
  return l.useEffect(() => {
    const i = n.scrollArea;
    let u = 0;
    if (i) {
      const b = /* @__PURE__ */ S(() => {
        window.clearTimeout(u), s(!0);
      }, "handlePointerEnter"), h = /* @__PURE__ */ S(() => {
        u = window.setTimeout(() => s(!1), n.scrollHideDelay);
      }, "handlePointerLeave");
      return i.addEventListener("pointerenter", b), i.addEventListener("pointerleave", h), () => {
        window.clearTimeout(u), i.removeEventListener("pointerenter", b), i.removeEventListener("pointerleave", h);
      };
    }
  }, [n.scrollArea, n.scrollHideDelay]), /* @__PURE__ */ f.jsx(U, { present: r || c, children: /* @__PURE__ */ f.jsx(
    se,
    {
      "data-state": c ? "visible" : "hidden",
      ...a,
      ref: t
    }
  ) });
}, "ScrollAreaScrollbarHover")), _e = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { forceMount: r, ...a } = e, n = w(P, e.__scopeScrollArea), c = e.orientation === _.Horizontal, s = z(() => u("SCROLL_END"), 100), [i, u] = te("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return l.useEffect(() => {
    if (i === "idle") {
      const b = window.setTimeout(() => u("HIDE"), n.scrollHideDelay);
      return () => window.clearTimeout(b);
    }
  }, [i, n.scrollHideDelay, u]), l.useEffect(() => {
    const b = n.viewport, h = c ? "scrollLeft" : "scrollTop";
    if (b) {
      let m = b[h];
      const d = /* @__PURE__ */ S(() => {
        const v = b[h];
        m !== v && (u("SCROLL"), s()), m = v;
      }, "handleScroll");
      return b.addEventListener("scroll", d), () => b.removeEventListener("scroll", d);
    }
  }, [n.viewport, c, u, s]), /* @__PURE__ */ f.jsx(U, { present: r || i !== "hidden", children: /* @__PURE__ */ f.jsx(
    q,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...a,
      ref: t,
      onPointerEnter: T(e.onPointerEnter, () => u("POINTER_ENTER")),
      onPointerLeave: T(e.onPointerLeave, () => u("POINTER_LEAVE"))
    }
  ) });
}, "ScrollAreaScrollbarScroll")), se = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const r = w(P, e.__scopeScrollArea), { forceMount: a, ...n } = e, [c, s] = l.useState(!1), i = e.orientation === _.Horizontal, u = z(() => {
    if (r.viewport) {
      const b = r.viewport.offsetWidth < r.viewport.scrollWidth, h = r.viewport.offsetHeight < r.viewport.scrollHeight;
      s(i ? b : h);
    }
  }, 10);
  return E(r.viewport, u), E(r.content, u), /* @__PURE__ */ f.jsx(U, { present: a || c, children: /* @__PURE__ */ f.jsx(
    q,
    {
      "data-state": c ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}, "ScrollAreaScrollbarAuto")), q = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { orientation: r = _.Vertical, ...a } = e, n = w(P, e.__scopeScrollArea), c = l.useRef(null), s = l.useRef(0), [i, u] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), b = G(i.viewport, i.content), h = {
    ...a,
    sizes: i,
    onSizesChange: u,
    hasThumb: b > 0 && b < 1,
    onThumbChange: /* @__PURE__ */ S((d) => c.current = d, "onThumbChange"),
    onThumbPointerUp: /* @__PURE__ */ S(() => s.current = 0, "onThumbPointerUp"),
    onThumbPointerDown: /* @__PURE__ */ S((d) => s.current = d, "onThumbPointerDown")
  };
  function m(d, v) {
    return he(d, s.current, i, v);
  }
  return S(m, "getScrollPosition"), r === _.Horizontal ? /* @__PURE__ */ f.jsx(
    De,
    {
      ...h,
      ref: t,
      onThumbPositionChange: () => {
        if (n.viewport && c.current) {
          const d = n.viewport.scrollLeft, v = $(d, i, n.dir);
          c.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (d) => {
        n.viewport && (n.viewport.scrollLeft = d);
      },
      onDragScroll: (d) => {
        n.viewport && (n.viewport.scrollLeft = m(d, n.dir));
      }
    }
  ) : r === _.Vertical ? /* @__PURE__ */ f.jsx(
    je,
    {
      ...h,
      ref: t,
      onThumbPositionChange: () => {
        if (n.viewport && c.current) {
          const d = n.viewport.scrollTop, v = $(d, i);
          c.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (d) => {
        n.viewport && (n.viewport.scrollTop = d);
      },
      onDragScroll: (d) => {
        n.viewport && (n.viewport.scrollTop = m(d));
      }
    }
  ) : null;
}, "ScrollAreaScrollbarVisible")), De = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { sizes: r, onSizesChange: a, ...n } = e, c = w(P, e.__scopeScrollArea), [s, i] = l.useState(), u = l.useRef(null), b = y(t, u, c.onScrollbarXChange);
  return l.useEffect(() => {
    u.current && i(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ f.jsx(
    de,
    {
      "data-orientation": "horizontal",
      ...n,
      ref: b,
      sizes: r,
      style: {
        bottom: 0,
        left: c.dir === x.RTL ? "var(--radix-scroll-area-corner-width)" : 0,
        right: c.dir === x.LTR ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": N(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (h) => e.onThumbPointerDown(h.x),
      onDragScroll: (h) => e.onDragScroll(h.x),
      onWheelScroll: (h, m) => {
        if (c.viewport) {
          const d = c.viewport.scrollLeft + h.deltaX;
          e.onWheelScroll(d), K(d, m) && h.preventDefault();
        }
      },
      onResize: () => {
        u.current && c.viewport && s && a({
          content: c.viewport.scrollWidth,
          viewport: c.viewport.offsetWidth,
          scrollbar: {
            size: u.current.clientWidth,
            paddingStart: W(s.paddingLeft),
            paddingEnd: W(s.paddingRight)
          }
        });
      }
    }
  );
}, "ScrollAreaScrollbarX")), je = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { sizes: r, onSizesChange: a, ...n } = e, c = w(P, e.__scopeScrollArea), [s, i] = l.useState(), u = l.useRef(null), b = y(t, u, c.onScrollbarYChange);
  return l.useEffect(() => {
    u.current && i(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ f.jsx(
    de,
    {
      "data-orientation": "vertical",
      ...n,
      ref: b,
      sizes: r,
      style: {
        top: 0,
        right: c.dir === x.LTR ? 0 : void 0,
        left: c.dir === x.RTL ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": N(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (h) => e.onThumbPointerDown(h.y),
      onDragScroll: (h) => e.onDragScroll(h.y),
      onWheelScroll: (h, m) => {
        if (c.viewport) {
          const d = c.viewport.scrollTop + h.deltaY;
          e.onWheelScroll(d), K(d, m) && h.preventDefault();
        }
      },
      onResize: () => {
        u.current && c.viewport && s && a({
          content: c.viewport.scrollHeight,
          viewport: c.viewport.offsetHeight,
          scrollbar: {
            size: u.current.clientHeight,
            paddingStart: W(s.paddingTop),
            paddingEnd: W(s.paddingBottom)
          }
        });
      }
    }
  );
}, "ScrollAreaScrollbarY")), [He, ue] = le(P), de = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const {
    __scopeScrollArea: r,
    sizes: a,
    hasThumb: n,
    onThumbChange: c,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: u,
    onDragScroll: b,
    onWheelScroll: h,
    onResize: m,
    ...d
  } = e, v = w(P, r), [g, j] = l.useState(null), k = y(t, j), C = l.useRef(null), I = l.useRef(""), B = v.viewport, V = a.content - a.viewport, M = R(h), H = R(u), X = z(m, 10);
  function O(p) {
    if (C.current) {
      const A = p.clientX - C.current.left, Y = p.clientY - C.current.top;
      b({ x: A, y: Y });
    }
  }
  return S(O, "handleDragScroll"), l.useEffect(() => {
    const p = /* @__PURE__ */ S((A) => {
      const Y = A.target;
      (g == null ? void 0 : g.contains(Y)) && M(A, V);
    }, "handleWheel");
    return document.addEventListener("wheel", p, { passive: !1 }), () => document.removeEventListener("wheel", p, { passive: !1 });
  }, [B, g, V, M]), l.useEffect(H, [a, H]), E(g, X), E(v.content, X), /* @__PURE__ */ f.jsx(
    He,
    {
      scope: r,
      scrollbar: g,
      hasThumb: n,
      onThumbChange: R(c),
      onThumbPointerUp: R(s),
      onThumbPositionChange: H,
      onThumbPointerDown: R(i),
      children: /* @__PURE__ */ f.jsx(
        D.div,
        {
          ...d,
          ref: k,
          style: { position: "absolute", ...d.style },
          onPointerDown: T(e.onPointerDown, (p) => {
            p.button === 0 && (p.target.setPointerCapture(p.pointerId), C.current = g.getBoundingClientRect(), I.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), O(p));
          }),
          onPointerMove: T(e.onPointerMove, O),
          onPointerUp: T(e.onPointerUp, (p) => {
            const A = p.target;
            A.hasPointerCapture(p.pointerId) && A.releasePointerCapture(p.pointerId), document.body.style.webkitUserSelect = I.current, v.viewport && (v.viewport.style.scrollBehavior = ""), C.current = null;
          })
        }
      )
    }
  );
}, "ScrollAreaScrollbarImpl")), F = "ScrollAreaThumb", Oe = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ S(function(e, t) {
    const { forceMount: r, ...a } = e, n = ue(F, e.__scopeScrollArea);
    return /* @__PURE__ */ f.jsx(U, { present: r || n.hasThumb, children: /* @__PURE__ */ f.jsx(We, { ref: t, ...a }) });
  }, "ScrollAreaThumb")
), We = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ S(function(e, t) {
    const { __scopeScrollArea: r, style: a, ...n } = e, c = w(F, r), s = ue(F, r), { onThumbPositionChange: i } = s, u = y(t, s.onThumbChange), b = l.useRef(void 0), h = z(() => {
      b.current && (b.current(), b.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const m = c.viewport;
      if (m) {
        const d = /* @__PURE__ */ S(() => {
          if (h(), !b.current) {
            const v = Ie(m, i);
            b.current = v, i();
          }
        }, "handleScroll");
        return i(), m.addEventListener("scroll", d), () => m.removeEventListener("scroll", d);
      }
    }, [c.viewport, h, i]), /* @__PURE__ */ f.jsx(
      D.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...n,
        ref: u,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...a
        },
        onPointerDownCapture: T(e.onPointerDownCapture, (m) => {
          const v = m.target.getBoundingClientRect(), g = m.clientX - v.left, j = m.clientY - v.top;
          s.onThumbPointerDown({ x: g, y: j });
        }),
        onPointerUp: T(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }, "ScrollAreaThumbImpl")
), fe = "ScrollAreaCorner", Ne = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ S(function(e, t) {
    const r = w(fe, e.__scopeScrollArea), a = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== L.Scroll && a ? /* @__PURE__ */ f.jsx(ze, { ...e, ref: t }) : null;
  }, "ScrollAreaCorner")
), ze = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ S(function(e, t) {
  const { __scopeScrollArea: r, ...a } = e, n = w(fe, r), [c, s] = l.useState(0), [i, u] = l.useState(0), b = !!(c && i), { onCornerWidthChange: h, onCornerHeightChange: m } = n;
  return E(n.scrollbarX, () => {
    var v;
    const d = ((v = n.scrollbarX) == null ? void 0 : v.offsetHeight) || 0;
    n.onCornerHeightChange(d), u(d);
  }), E(n.scrollbarY, () => {
    var v;
    const d = ((v = n.scrollbarY) == null ? void 0 : v.offsetWidth) || 0;
    n.onCornerWidthChange(d), s(d);
  }), l.useEffect(() => () => {
    h(0), m(0);
  }, [h, m]), b ? /* @__PURE__ */ f.jsx(
    D.div,
    {
      ...a,
      ref: t,
      style: {
        width: c,
        height: i,
        position: "absolute",
        right: n.dir === x.LTR ? 0 : void 0,
        left: n.dir === x.RTL ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
}, "ScrollAreaCornerImpl"));
function W(o) {
  return o ? parseInt(o, 10) : 0;
}
S(W, "toInt");
function G(o, e) {
  const t = o / e;
  return isNaN(t) ? 0 : t;
}
S(G, "getThumbRatio");
function N(o) {
  const e = G(o.viewport, o.content), t = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, r = (o.scrollbar.size - t) * e;
  return Math.max(r, 18);
}
S(N, "getThumbSize");
function he(o, e, t, r = x.LTR) {
  const a = N(t), n = a / 2, c = e || n, s = a - c, i = t.scrollbar.paddingStart + c, u = t.scrollbar.size - t.scrollbar.paddingEnd - s, b = t.content - t.viewport, h = r === x.LTR ? [0, b] : [b * -1, 0];
  return J([i, u], h)(o);
}
S(he, "getScrollPositionFromPointer");
function $(o, e, t = x.LTR) {
  const r = N(e), a = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = e.scrollbar.size - a, c = e.content - e.viewport, s = n - r, i = t === x.LTR ? [0, c] : [c * -1, 0], u = oe(o, i);
  return J([0, c], [0, s])(u);
}
S($, "getThumbOffsetFromScroll");
function J(o, e) {
  return (t) => {
    if (o[0] === o[1] || e[0] === e[1]) return e[0];
    const r = (e[1] - e[0]) / (o[1] - o[0]);
    return e[0] + r * (t - o[0]);
  };
}
S(J, "linearScale");
function K(o, e) {
  return o > 0 && o < e;
}
S(K, "isScrollingWithinScrollbarBounds");
var Ie = /* @__PURE__ */ S((o, e = () => {
}) => {
  let t = { left: o.scrollLeft, top: o.scrollTop }, r = 0;
  function a() {
    const n = { left: o.scrollLeft, top: o.scrollTop }, c = t.left !== n.left, s = t.top !== n.top;
    (c || s) && e(), t = n, r = window.requestAnimationFrame(a);
  }
  return S(a, "loop"), a(), () => window.cancelAnimationFrame(r);
}, "addUnlinkedScrollListener");
function z(o, e) {
  const t = R(o), r = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), l.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(t, e);
  }, [t, e]);
}
S(z, "useDebounceCallback");
function E(o, e) {
  const t = R(e);
  me(() => {
    let r = 0;
    if (o) {
      const a = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(t);
      });
      return a.observe(o), () => {
        window.cancelAnimationFrame(r), a.unobserve(o);
      };
    }
  }, [o, t]);
}
S(E, "useResizeObserver");
const Ve = l.forwardRef(({ className: o, children: e, ...t }, r) => /* @__PURE__ */ f.jsxs(
  ce,
  {
    ref: r,
    className: ee("relative overflow-hidden", o),
    ...t,
    children: [
      /* @__PURE__ */ f.jsx(Te, { className: "h-full w-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ f.jsx(Se, {}),
      /* @__PURE__ */ f.jsx(Ne, {})
    ]
  }
));
Ve.displayName = ce.displayName;
const Se = l.forwardRef(({ className: o, orientation: e = "vertical", ...t }, r) => /* @__PURE__ */ f.jsx(
  ie,
  {
    ref: r,
    orientation: e,
    className: ee(
      "flex touch-none transition-colors select-none",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      o
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(Oe, { className: "bg-border relative flex-1 rounded-full" })
  }
));
Se.displayName = ie.displayName;
export {
  Ve as S,
  re as u
};
