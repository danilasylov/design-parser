import { r as o, j as i, m as e, b as w, c as A } from "./inline-Mcm4wFdg.js";
const y = {
  article: e.article,
  div: e.div,
  h1: e.h1,
  h2: e.h2,
  h3: e.h3,
  h4: e.h4,
  h5: e.h5,
  h6: e.h6,
  li: e.li,
  p: e.p,
  section: e.section,
  span: e.span
}, N = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
), U = (s) => Math.floor(Math.random() * s);
function q({
  children: s,
  className: g,
  duration: f = 800,
  delay: a = 0,
  as: E = "div",
  startOnView: p = !1,
  animateOnHover: v = !0,
  characterSet: c = N,
  ...M
}) {
  const R = y[E], [j, I] = o.useState(
    () => s.split("")
  ), [m, r] = o.useState(!1), u = o.useRef(0), l = o.useRef(null), b = () => {
    v && !m && (u.current = 0, r(!0));
  };
  return o.useEffect(() => {
    if (!p) {
      const n = setTimeout(() => {
        r(!0);
      }, a);
      return () => clearTimeout(n);
    }
    const t = new IntersectionObserver(
      ([n]) => {
        n.isIntersecting && (setTimeout(() => {
          r(!0);
        }, a), t.disconnect());
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );
    return l.current && t.observe(l.current), () => t.disconnect();
  }, [a, p]), o.useEffect(() => {
    let t = null;
    if (m) {
      const n = s.length, C = performance.now(), h = (F) => {
        const H = F - C, x = Math.min(H / f, 1);
        u.current = x * n, I(
          (D) => D.map(
            (T, d) => T === " " ? T : d <= u.current ? s[d] : c[U(c.length)]
          )
        ), x < 1 ? t = requestAnimationFrame(h) : r(!1);
      };
      t = requestAnimationFrame(h);
    }
    return () => {
      t !== null && cancelAnimationFrame(t);
    };
  }, [s, f, m, c]), /* @__PURE__ */ i.jsx(
    R,
    {
      ref: l,
      className: A("overflow-hidden py-2 text-4xl font-bold", g),
      onMouseEnter: b,
      ...M,
      children: /* @__PURE__ */ i.jsx(w, { children: j.map((t, n) => /* @__PURE__ */ i.jsx(
        e.span,
        {
          className: A("font-mono", t === " " ? "w-3" : ""),
          children: t.toUpperCase()
        },
        n
      )) })
    }
  );
}
function O() {
  return /* @__PURE__ */ i.jsx(q, { children: "Hover Me!" });
}
export {
  O as default
};
