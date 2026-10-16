import { r as $, j as G } from "./inline-Mcm4wFdg.js";
const L = "http://www.w3.org/2000/svg", R = () => {
  const o = "_coolMode_effect", t = document.getElementById(o);
  if (t)
    return t;
  const l = document.createElement("div");
  return l.setAttribute("id", o), l.setAttribute(
    "style",
    "overflow:hidden; position:fixed; height:100%; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:2147483647"
  ), document.body.appendChild(l), l;
};
let z = 0;
const X = (o, t) => {
  z++;
  const a = (t == null ? void 0 : t.particle) || "circle", d = [15, 20, 25, 35, 45], H = 45;
  let u = [], h = !1, f = 0, p = 0;
  const E = R(), N = (e, n) => {
    const r = document.createElementNS(L, "svg"), i = document.createElementNS(L, "circle");
    i.setAttributeNS(null, "cx", (n / 2).toString()), i.setAttributeNS(null, "cy", (n / 2).toString()), i.setAttributeNS(null, "r", (n / 2).toString()), i.setAttributeNS(null, "fill", `hsl(${Math.random() * 360}, 70%, 50%)`), r.appendChild(i), r.setAttribute("width", n.toString()), r.setAttribute("height", n.toString()), e.appendChild(r);
  }, j = (e, n, r) => {
    const i = document.createElement("img");
    i.src = n, i.width = r, i.height = r, i.alt = "", i.style.borderRadius = "50%", e.appendChild(i);
  }, I = (e, n, r) => {
    const x = r * 3, s = document.createElement("div");
    s.textContent = n, s.style.fontSize = `${x}px`, s.style.lineHeight = "1", s.style.textAlign = "center", s.style.width = `${r}px`, s.style.height = `${r}px`, s.style.display = "flex", s.style.alignItems = "center", s.style.justifyContent = "center", s.style.transform = "scale(3)", s.style.transformOrigin = "center", e.appendChild(s);
  };
  function V() {
    const e = (t == null ? void 0 : t.size) || d[Math.floor(Math.random() * d.length)], n = (t == null ? void 0 : t.speedHorz) || Math.random() * 10, r = (t == null ? void 0 : t.speedUp) || Math.random() * 25, i = Math.random() * 360, x = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1), s = p - e / 2, P = f - e / 2, F = Math.random() <= 0.5 ? -1 : 1, c = document.createElement("div");
    a === "circle" ? N(c, e) : a.startsWith("http") || a.startsWith("/") ? j(c, a, e) : I(c, a, e), c.style.position = "absolute", c.style.transform = `translate3d(${P}px, ${s}px, 0px) rotate(${i}deg)`, E.appendChild(c), u.push({
      direction: F,
      element: c,
      left: P,
      size: e,
      speedHorz: n,
      speedUp: r,
      spinSpeed: x,
      spinVal: i,
      top: s
    });
  }
  function T() {
    u.forEach((e) => {
      e.left = e.left - e.speedHorz * e.direction, e.top = e.top - e.speedUp, e.speedUp = Math.min(e.size, e.speedUp - 1), e.spinVal = e.spinVal + e.spinSpeed, e.top >= Math.max(window.innerHeight, document.body.clientHeight) + e.size && (u = u.filter((n) => n !== e), e.element.remove()), e.element.setAttribute(
        "style",
        [
          "position:absolute",
          "will-change:transform",
          `top:${e.top}px`,
          `left:${e.left}px`,
          `transform:rotate(${e.spinVal}deg)`
        ].join(";")
      );
    });
  }
  let v, S = 0;
  const U = 30;
  function M() {
    const e = performance.now();
    h && u.length < H && e - S > U && (V(), S = e), T(), v = requestAnimationFrame(M);
  }
  M();
  const g = "ontouchstart" in window, b = g ? "touchstart" : "mousedown", w = g ? "touchend" : "mouseup", A = g ? "touchmove" : "mousemove", y = (e) => {
    var n, r;
    "touches" in e ? (f = (n = e.touches) == null ? void 0 : n[0].clientX, p = (r = e.touches) == null ? void 0 : r[0].clientY) : (f = e.clientX, p = e.clientY);
  }, C = (e) => {
    y(e), h = !0;
  }, m = () => {
    h = !1;
  };
  return o.addEventListener(A, y, { passive: !0 }), o.addEventListener(b, C, { passive: !0 }), o.addEventListener(w, m, { passive: !0 }), o.addEventListener("mouseleave", m, {
    passive: !0
  }), () => {
    m(), o.removeEventListener(A, y), o.removeEventListener(b, C), o.removeEventListener(w, m), o.removeEventListener("mouseleave", m);
    const e = setInterval(() => {
      v && u.length === 0 && (cancelAnimationFrame(v), clearInterval(e), --z === 0 && E.remove());
    }, 500);
  };
}, _ = ({ children: o, options: t }) => {
  const l = $.useRef(null);
  return $.useEffect(() => {
    const a = l.current;
    let d = null;
    return a && (d = X(a, t)), () => {
      d && d();
    };
  }, [t]), /* @__PURE__ */ G.jsx("span", { ref: l, children: o });
};
export {
  _ as C
};
