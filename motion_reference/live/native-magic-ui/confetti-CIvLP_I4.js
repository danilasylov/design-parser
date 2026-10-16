import { r as t, j as m } from "./inline-Mcm4wFdg.js";
import { c as R } from "./confetti.module-43zesFz0.js";
import { B as y } from "./button-V18JMPr7.js";
const B = t.createContext(null), h = t.forwardRef((f, l) => {
  const {
    options: n,
    globalOptions: c = { resize: !0, useWorker: !0 },
    manualstart: u = !1,
    children: d,
    className: e,
    ...s
  } = f, o = t.useRef(null), r = t.useRef(null), C = t.useRef(n), g = t.useRef(c);
  t.useEffect(() => {
    C.current = n;
  }, [n]), t.useEffect(() => {
    g.current = c;
  }, [c]), t.useEffect(() => (o.current && !r.current && (r.current = R.create(o.current, {
    resize: !0,
    useWorker: !0,
    ...g.current
  })), () => {
    var a;
    (a = r.current) == null || a.reset(), r.current = null;
  }), []);
  const i = t.useCallback(async (a = {}) => {
    var x;
    try {
      await ((x = r.current) == null ? void 0 : x.call(r, {
        ...C.current,
        ...a
      }));
    } catch (w) {
      console.error("Confetti error:", w);
    }
  }, []), p = t.useMemo(() => ({ fire: i }), [i]);
  return t.useImperativeHandle(l, () => p, [p]), t.useEffect(() => {
    u || i();
  }, [u, i]), /* @__PURE__ */ m.jsxs(B.Provider, { value: p, children: [
    /* @__PURE__ */ m.jsx("canvas", { ref: o, className: e, ...s }),
    d
  ] });
});
h.displayName = "Confetti";
const z = h, E = t.forwardRef(({ options: f, children: l, onClick: n, ...c }, u) => {
  const d = async (e) => {
    try {
      if (n == null || n(e), e != null && e.defaultPrevented) return;
      const s = e == null ? void 0 : e.currentTarget;
      if (s && "getBoundingClientRect" in s) {
        const o = s.getBoundingClientRect(), r = {
          x: (o.left + o.width / 2) / window.innerWidth,
          y: (o.top + o.height / 2) / window.innerHeight
        };
        await R({
          zIndex: 9999,
          ...f,
          origin: r
        });
      }
    } catch (s) {
      console.error("Confetti button error:", s);
    }
  };
  return /* @__PURE__ */ m.jsx(y, { ref: u, type: "button", onClick: d, ...c, children: l });
});
E.displayName = "ConfettiButton";
export {
  E as C,
  z as a
};
