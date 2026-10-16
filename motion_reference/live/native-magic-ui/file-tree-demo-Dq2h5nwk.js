var xe = (n) => {
  throw TypeError(n);
};
var be = (n, o, e) => o.has(n) || xe("Cannot " + e);
var j = (n, o, e) => (be(n, o, "read from private field"), e ? e.call(n) : o.get(n)), ve = (n, o, e) => o.has(n) ? xe("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(n) : o.set(n, e), ce = (n, o, e, t) => (be(n, o, "write to private field"), t ? t.call(n, e) : o.set(n, e), e);
import { r as l, j as a, c as Y } from "./inline-Mcm4wFdg.js";
import { a as Ae, b as te, c as Re, P as We } from "./index-BZUAg3JG.js";
import { u as H, c as ee } from "./index-CNhZeCHS.js";
import { a as de, u as Se } from "./index-B49sNrKc.js";
import { P as oe } from "./index-CYtNk8Oh.js";
import { u as Ye, S as Ze } from "./scroll-area-CwGXz2n3.js";
import { B as Je } from "./button-V18JMPr7.js";
import { c as we } from "./createLucideIcon-D9LJhv87.js";
import { F as Qe } from "./file-P8V4aZ1e.js";
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], et = we("folder-open", Xe);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], ot = we("folder", tt);
var nt = Object.defineProperty, O = (n, o) => nt(n, "name", { value: o, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function rt(n) {
  const o = n + "CollectionProvider", [e, t] = te(o), [r, i] = e(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ O((I) => {
    const { scope: R, children: E } = I, v = l.useRef(null), m = l.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a.jsx(r, { scope: R, itemMap: m, collectionRef: v, children: E });
  }, "CollectionProvider");
  s.displayName = o;
  const c = n + "CollectionSlot", d = ee(c), p = l.forwardRef(
    (I, R) => {
      const { scope: E, children: v } = I, m = i(c, E), g = H(R, m.collectionRef);
      return /* @__PURE__ */ a.jsx(d, { ref: g, children: v });
    }
  );
  p.displayName = c;
  const f = n + "CollectionItemSlot", u = "data-radix-collection-item", C = ee(f), x = l.forwardRef(
    (I, R) => {
      const { scope: E, children: v, ...m } = I, g = l.useRef(null), T = H(R, g), h = i(f, E);
      return l.useEffect(() => (h.itemMap.set(g, { ref: g, ...m }), () => void h.itemMap.delete(g))), /* @__PURE__ */ a.jsx(C, { [u]: "", ref: T, children: v });
    }
  );
  x.displayName = f;
  function A(I) {
    const R = i(n + "CollectionConsumer", I);
    return l.useCallback(() => {
      const v = R.collectionRef.current;
      if (!v) return [];
      const m = Array.from(v.querySelectorAll(`[${u}]`));
      return Array.from(R.itemMap.values()).sort(
        (h, b) => m.indexOf(h.ref.current) - m.indexOf(b.ref.current)
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return O(A, "useCollection"), [
    { Provider: s, Slot: p, ItemSlot: x },
    A,
    t
  ];
}
O(rt, "createCollection");
var ge = /* @__PURE__ */ new WeakMap(), w, D, J = (D = class extends Map {
  constructor(e) {
    super(e);
    ve(this, w);
    ce(this, w, [...super.keys()]), ge.set(this, !0);
  }
  set(e, t) {
    return ge.get(this) && !this.has(e) && j(this, w).push(e), super.set(e, t), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(e, t, r) {
    const i = this.has(t), s = i ? this.size : this.size + 1, c = ue(e), d = c >= 0 ? Math.min(c, s - 1) : Math.max(s + c, 0);
    if (i ? j(this, w).indexOf(t) === d : d === this.size)
      return this.set(t, r), this;
    const p = j(this, w).filter((u) => u !== t);
    p.splice(d, 0, t);
    const f = p.map((u) => [
      u,
      u === t ? r : this.get(u)
    ]);
    this.clear();
    for (const [u, C] of f)
      this.set(u, C);
    return this;
  }
  with(e, t, r) {
    const i = new D(this);
    return i.insert(e, t, r), i;
  }
  before(e) {
    const t = j(this, w).indexOf(e) - 1;
    if (!(t < 0))
      return this.entryAt(t);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(e, t, r) {
    const i = j(this, w).indexOf(e);
    if (i === -1)
      return this;
    const s = j(this, w).indexOf(t), c = s !== -1 && s < i ? i - 1 : i;
    return this.insert(c, t, r);
  }
  after(e) {
    let t = j(this, w).indexOf(e);
    if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1)
      return this.entryAt(t);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(e, t, r) {
    const i = j(this, w).indexOf(e);
    if (i === -1)
      return this;
    const s = j(this, w).indexOf(t), c = s !== -1 && s <= i ? i : i + 1;
    return this.insert(c, t, r);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return ce(this, w, []), super.clear();
  }
  delete(e) {
    const t = super.delete(e);
    return t && j(this, w).splice(j(this, w).indexOf(e), 1), t;
  }
  deleteAt(e) {
    const t = this.keyAt(e);
    return t !== void 0 ? this.delete(t) : !1;
  }
  at(e) {
    const t = Q(j(this, w), e);
    if (t !== void 0)
      return this.get(t);
  }
  entryAt(e) {
    const t = Q(j(this, w), e);
    if (t !== void 0)
      return [t, this.get(t)];
  }
  indexOf(e) {
    return j(this, w).indexOf(e);
  }
  keyAt(e) {
    return Q(j(this, w), e);
  }
  from(e, t) {
    const r = this.indexOf(e);
    if (r === -1)
      return;
    let i = r + t;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.at(i);
  }
  keyFrom(e, t) {
    const r = this.indexOf(e);
    if (r === -1)
      return;
    let i = r + t;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.keyAt(i);
  }
  find(e, t) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(e, t, [i, r, this]))
        return i;
      r++;
    }
  }
  findIndex(e, t) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(e, t, [i, r, this]))
        return r;
      r++;
    }
    return -1;
  }
  filter(e, t) {
    const r = [];
    let i = 0;
    for (const s of this)
      Reflect.apply(e, t, [s, i, this]) && r.push(s), i++;
    return new D(r);
  }
  map(e, t) {
    const r = [];
    let i = 0;
    for (const s of this)
      r.push([s[0], Reflect.apply(e, t, [s, i, this])]), i++;
    return new D(r);
  }
  reduce(...e) {
    const [t, r] = e, i = e.length > 1;
    if (!i && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let s = 0, c = r;
    for (const d of this)
      s === 0 && !i ? c = d : c = Reflect.apply(t, this, [c, d, s, this]), s++;
    return c;
  }
  reduceRight(...e) {
    const [t, r] = e, i = e.length > 1;
    if (!i && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let s = r;
    for (let c = this.size - 1; c >= 0; c--) {
      const d = this.entryAt(c);
      c === this.size - 1 && !i ? s = d : s = Reflect.apply(t, this, [s, d, c, this]);
    }
    return s;
  }
  /**
   * Sorts the dictionary in place. This method mutates the dictionary and
   * returns a reference to the same object
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  sort(e) {
    if (typeof e != "function")
      throw new TypeError("OrderedDict.sort requires a compare function");
    const t = [...this.entries()].sort(e);
    this.clear();
    for (const [r, i] of t)
      this.set(r, i);
    return this;
  }
  /**
   * Returns a copy of the dictionary with its elements sorted.
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  toSorted(e) {
    if (typeof e != "function")
      throw new TypeError("OrderedDict.toSorted requires a compare function");
    const t = [...this.entries()].sort(e);
    return new D(t);
  }
  toReversed() {
    const e = new D();
    for (let t = this.size - 1; t >= 0; t--) {
      const r = this.keyAt(t), i = this.get(r);
      e.set(r, i);
    }
    return e;
  }
  toSpliced(...e) {
    const t = [...this.entries()];
    return t.splice(...e), new D(t);
  }
  slice(e, t) {
    const r = new D();
    for (const i of j(this, w).slice(e, t))
      r.set(i, this.get(i));
    return r;
  }
  every(e, t) {
    let r = 0;
    for (const i of this) {
      if (!Reflect.apply(e, t, [i, r, this]))
        return !1;
      r++;
    }
    return !0;
  }
  some(e, t) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(e, t, [i, r, this]))
        return !0;
      r++;
    }
    return !1;
  }
}, w = new WeakMap(), O(D, "OrderedDict"), D);
function Q(n, o) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(n, o);
  const e = Ne(n, o);
  return e === -1 ? void 0 : n[e];
}
O(Q, "at");
function Ne(n, o) {
  const e = n.length, t = ue(o), r = t >= 0 ? t : e + t;
  return r < 0 || r >= e ? -1 : r;
}
O(Ne, "toSafeIndex");
function ue(n) {
  return n !== n || n === 0 ? 0 : Math.trunc(n);
}
O(ue, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Pe(n) {
  const o = n + "CollectionProvider", [e, t] = te(o), [r, i] = e(o);
  r.displayName = n + "CollectionStableContextProvider";
  const [s, c] = e(o);
  s.displayName = n + "CollectionStatefulContextProvider";
  const d = /* @__PURE__ */ O(({ state: h, ...b }) => h ? /* @__PURE__ */ a.jsx(f, { ...b, state: h }) : /* @__PURE__ */ a.jsx(p, { ...b }), "CollectionProvider");
  d.displayName = o;
  const p = /* @__PURE__ */ O((h) => {
    const b = v();
    return /* @__PURE__ */ a.jsx(f, { ...h, state: b });
  }, "CollectionInit");
  p.displayName = n + "CollectionInit";
  const f = /* @__PURE__ */ O((h) => {
    const { scope: b, children: P, state: k } = h, _ = l.useRef(null), [S, z] = l.useState(
      null
    ), U = H(_, z), [G, V] = k, F = l.useRef(
      new J()
    ), se = l.useCallback(() => {
      const $ = F.current;
      return je($) || $.sort(X), $;
    }, []);
    return l.useEffect(() => {
      if (!S)
        return;
      const $ = Te(() => {
        V((B) => {
          const y = B.toSorted(X);
          return y.some(([q], K) => B.keyAt(K) !== q) ? y : B;
        });
      });
      return $.observe(S, {
        childList: !0,
        subtree: !0
      }), () => {
        $.disconnect();
      };
    }, [S, V]), /* @__PURE__ */ a.jsx(
      r,
      {
        scope: b,
        collectionElementRef: U,
        collectionElementRefObject: _,
        getCollection: se,
        setCollection: V,
        registryRef: F,
        children: /* @__PURE__ */ a.jsx(
          s,
          {
            scope: b,
            collectionElement: S,
            collection: G,
            children: P
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  f.displayName = n + "CollectionProviderImpl";
  const u = n + "CollectionSlot", C = ee(u), x = l.forwardRef(
    (h, b) => {
      const { scope: P, children: k } = h, _ = i(u, P), S = H(b, _.collectionElementRef);
      return /* @__PURE__ */ a.jsx(C, { ref: S, children: k });
    }
  );
  x.displayName = u;
  const A = n + "CollectionItemSlot", I = "data-radix-collection-item", R = ee(A), E = l.forwardRef(
    (h, b) => {
      const { scope: P, children: k, ..._ } = h, S = l.useRef(null), z = i(A, P), { setCollection: U, registryRef: G } = z, V = l.useRef(_);
      Oe(V.current, _) || (V.current = _);
      const F = V.current, se = l.useCallback(
        (y) => {
          const N = G.current;
          y ? N.set(y, {
            ...V.current,
            element: y
          }) : S.current && N.delete(S.current);
        },
        [G]
      ), $ = H(b, se, S);
      Ae(() => {
        const y = S.current, N = G.current;
        y && N.has(y) && N.set(y, { ...F, element: y });
      }, [F, G]);
      const B = l.useRef(null);
      return l.useEffect(() => {
        const y = S.current, N = B.current;
        ((N == null ? void 0 : N.element) ?? null) === y && (!y || (N == null ? void 0 : N.itemData) === F) || (B.current = y ? { element: y, itemData: F } : null, U((q) => {
          const K = new J(q);
          return N && N.element !== y && K.delete(N.element), y && K.set(y, { ...F, element: y }), K.sort(X);
        }));
      }), l.useEffect(() => () => {
        const y = B.current;
        B.current = null, y && U((N) => {
          if (!N.has(y.element))
            return N;
          const q = new J(N);
          return q.delete(y.element), q;
        });
      }, [U]), /* @__PURE__ */ a.jsx(R, { [I]: "", ref: $, children: k });
    }
  );
  E.displayName = A;
  function v() {
    return l.useState(new J());
  }
  O(v, "useInitCollection");
  function m(h) {
    const { collection: b } = c(n + "CollectionConsumer", h);
    return b;
  }
  O(m, "useCollection");
  function g(h) {
    const { getCollection: b } = i(n + "CollectionConsumer", h);
    return b;
  }
  return O(g, "useGetCollection"), [
    { Provider: d, Slot: x, ItemSlot: E },
    {
      createCollectionScope: t,
      useCollection: m,
      useGetCollection: g,
      useInitCollection: v
    }
  ];
}
O(Pe, "createCollection");
function Oe(n, o) {
  if (n === o) return !0;
  if (typeof n != "object" || typeof o != "object" || n == null || o == null) return !1;
  const e = Object.keys(n), t = Object.keys(o);
  if (e.length !== t.length) return !1;
  for (const r of e)
    if (!Object.prototype.hasOwnProperty.call(o, r) || n[r] !== o[r]) return !1;
  return !0;
}
O(Oe, "shallowEqual");
function Ee(n, o) {
  return !!(o.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING);
}
O(Ee, "isElementPreceding");
function je(n) {
  let o;
  for (const e of n.keys()) {
    if (o) {
      const t = o.compareDocumentPosition(e);
      if (!(t & Node.DOCUMENT_POSITION_DISCONNECTED) && t & Node.DOCUMENT_POSITION_PRECEDING)
        return !1;
    }
    o = e;
  }
  return !0;
}
O(je, "isInDocumentOrder");
function X(n, o) {
  return !n[1].element || !o[1].element ? 0 : Ee(n[1].element, o[1].element) ? -1 : 1;
}
O(X, "sortByDocumentPosition");
function Te(n) {
  return new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList") {
        n();
        return;
      }
  });
}
O(Te, "getChildListObserver");
var it = Object.defineProperty, Z = (n, o) => it(n, "name", { value: o, configurable: !0 }), fe = "Collapsible", [st, _e] = te(fe), [ct, pe] = st(fe), lt = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Z(function(o, e) {
    const {
      __scopeCollapsible: t,
      open: r,
      defaultOpen: i,
      disabled: s,
      onOpenChange: c,
      ...d
    } = o, [p, f] = de({
      prop: r,
      defaultProp: i ?? !1,
      onChange: c,
      caller: fe
    });
    return /* @__PURE__ */ a.jsx(
      ct,
      {
        scope: t,
        disabled: s,
        contentId: Se(),
        open: p,
        onOpenToggle: l.useCallback(() => f((u) => !u), [f]),
        children: /* @__PURE__ */ a.jsx(
          oe.div,
          {
            "data-state": ne(p),
            "data-disabled": s ? "" : void 0,
            ...d,
            ref: e
          }
        )
      }
    );
  }, "Collapsible")
), at = "CollapsibleTrigger", dt = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Z(function(o, e) {
    const { __scopeCollapsible: t, ...r } = o, i = pe(at, t);
    return /* @__PURE__ */ a.jsx(
      oe.button,
      {
        type: "button",
        "aria-controls": i.open ? i.contentId : void 0,
        "aria-expanded": i.open || !1,
        "data-state": ne(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        ...r,
        ref: e,
        onClick: Re(o.onClick, i.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
), De = "CollapsibleContent", ut = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Z(function(o, e) {
    const { forceMount: t, ...r } = o, i = pe(De, o.__scopeCollapsible);
    return /* @__PURE__ */ a.jsx(We, { present: t || i.open, children: ({ present: s }) => /* @__PURE__ */ a.jsx(ft, { ...r, ref: e, present: s }) });
  }, "CollapsibleContent")
), ft = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Z(function(o, e) {
  const { __scopeCollapsible: t, present: r, children: i, ...s } = o, c = pe(De, t), [d, p] = l.useState(r), f = l.useRef(null), u = H(e, f), C = l.useRef(0), x = C.current, A = l.useRef(0), I = A.current, R = c.open || d, E = l.useRef(R), v = l.useRef(void 0);
  return l.useEffect(() => {
    const m = requestAnimationFrame(() => E.current = !1);
    return () => cancelAnimationFrame(m);
  }, []), Ae(() => {
    const m = f.current;
    if (m) {
      v.current = v.current || {
        transitionDuration: m.style.transitionDuration,
        animationName: m.style.animationName
      }, m.style.transitionDuration = "0s", m.style.animationName = "none";
      const g = m.getBoundingClientRect();
      C.current = g.height, A.current = g.width, E.current || (m.style.transitionDuration = v.current.transitionDuration, m.style.animationName = v.current.animationName), p(r);
    }
  }, [c.open, r]), /* @__PURE__ */ a.jsx(
    oe.div,
    {
      "data-state": ne(c.open),
      "data-disabled": c.disabled ? "" : void 0,
      id: c.contentId,
      hidden: !R,
      ...s,
      ref: u,
      style: {
        "--radix-collapsible-content-height": x ? `${x}px` : void 0,
        "--radix-collapsible-content-width": I ? `${I}px` : void 0,
        ...o.style
      },
      children: R && i
    }
  );
}, "CollapsibleContentImpl"));
function ne(n) {
  return n ? "open" : "closed";
}
Z(ne, "getState");
var pt = Object.defineProperty, M = (n, o) => pt(n, "name", { value: o, configurable: !0 }), ht = {
  Multiple: "multiple"
}, W = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, mt = {
  LTR: "ltr"
}, L = "Accordion", Ct = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [he, { useGetCollection: xt, createCollectionScope: bt }] = /* @__PURE__ */ Pe(L), [re, Gt] = te(L, [
  bt,
  _e
]), me = _e(), Me = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ M(function(o, e) {
    const { type: t, ...r } = o, i = r, s = r;
    return /* @__PURE__ */ a.jsx(he.Provider, { scope: o.__scopeAccordion, children: t === ht.Multiple ? /* @__PURE__ */ a.jsx(It, { ...s, ref: e }) : /* @__PURE__ */ a.jsx(yt, { ...i, ref: e }) });
  }, "Accordion")
), [ke, vt] = re(L), [ze, gt] = re(
  L,
  { collapsible: !1 }
), yt = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ M(function(o, e) {
    const {
      value: t,
      defaultValue: r,
      onValueChange: i = /* @__PURE__ */ M(() => {
      }, "onValueChange"),
      collapsible: s = !1,
      ...c
    } = o, [d, p] = de({
      prop: t,
      defaultProp: r ?? "",
      onChange: i,
      caller: L
    });
    return /* @__PURE__ */ a.jsx(
      ke,
      {
        scope: o.__scopeAccordion,
        value: l.useMemo(() => d ? [d] : [], [d]),
        onItemOpen: p,
        onItemClose: l.useCallback(() => s && p(""), [s, p]),
        children: /* @__PURE__ */ a.jsx(ze, { scope: o.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ a.jsx(Le, { ...c, ref: e }) })
      }
    );
  }, "AccordionImplSingle")
), It = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ M(function(o, e) {
  const {
    value: t,
    defaultValue: r,
    onValueChange: i = /* @__PURE__ */ M(() => {
    }, "onValueChange"),
    ...s
  } = o, [c, d] = de({
    prop: t,
    defaultProp: r ?? [],
    onChange: i,
    caller: L
  }), p = l.useCallback(
    (u) => d((C = []) => [...C, u]),
    [d]
  ), f = l.useCallback(
    (u) => d((C = []) => C.filter((x) => x !== u)),
    [d]
  );
  return /* @__PURE__ */ a.jsx(
    ke,
    {
      scope: o.__scopeAccordion,
      value: c,
      onItemOpen: p,
      onItemClose: f,
      children: /* @__PURE__ */ a.jsx(ze, { scope: o.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ a.jsx(Le, { ...s, ref: e }) })
    }
  );
}, "AccordionImplMultiple")), [At, Ce] = re(L), Le = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ M(function(o, e) {
    const {
      __scopeAccordion: t,
      disabled: r,
      dir: i,
      orientation: s = W.Vertical,
      ...c
    } = o, d = l.useRef(null), p = H(d, e), f = xt(t), C = Ye(i) === mt.LTR, x = Re(o.onKeyDown, (A) => {
      var _;
      if (!Ct.includes(A.key))
        return;
      const I = f(), R = A.target, E = I.filter(([, S]) => !S.element.disabled), v = E.findIndex(([, S]) => S.element === R), m = E.size;
      if (v === -1)
        return;
      A.preventDefault();
      let g = v;
      const T = 0, h = m - 1, b = /* @__PURE__ */ M(() => {
        g = v + 1, g > h && (g = T);
      }, "moveNext"), P = /* @__PURE__ */ M(() => {
        g = v - 1, g < T && (g = h);
      }, "movePrev");
      switch (A.key) {
        case "Home":
          g = T;
          break;
        case "End":
          g = h;
          break;
        case "ArrowRight":
          s === W.Horizontal && (C ? b() : P());
          break;
        case "ArrowDown":
          s === W.Vertical && b();
          break;
        case "ArrowLeft":
          s === W.Horizontal && (C ? P() : b());
          break;
        case "ArrowUp":
          s === W.Vertical && P();
          break;
      }
      const k = g % m;
      (_ = E.at(k)) == null || _.element.focus();
    });
    return /* @__PURE__ */ a.jsx(
      At,
      {
        scope: t,
        disabled: r,
        direction: i,
        orientation: s,
        children: /* @__PURE__ */ a.jsx(he.Slot, { scope: t, children: /* @__PURE__ */ a.jsx(
          oe.div,
          {
            ...c,
            "data-orientation": s,
            ref: p,
            onKeyDown: r ? void 0 : x
          }
        ) })
      }
    );
  }, "AccordionImpl")
), le = "AccordionItem", [Rt, Ve] = re(le), St = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ M(function(o, e) {
    const { __scopeAccordion: t, value: r, ...i } = o, s = Ce(le, t), c = vt(le, t), d = me(t), p = Se(), f = r && c.value.includes(r) || !1, u = s.disabled || o.disabled;
    return /* @__PURE__ */ a.jsx(
      Rt,
      {
        scope: t,
        open: f,
        disabled: u,
        triggerId: p,
        children: /* @__PURE__ */ a.jsx(
          lt,
          {
            "data-orientation": s.orientation,
            "data-state": Fe(f),
            ...d,
            ...i,
            ref: e,
            disabled: u,
            open: f,
            onOpenChange: (C) => {
              C ? c.onItemOpen(r) : c.onItemClose(r);
            }
          }
        )
      }
    );
  }, "AccordionItem")
), ye = "AccordionTrigger", wt = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ M(function(o, e) {
    const { __scopeAccordion: t, ...r } = o, i = Ce(L, t), s = Ve(ye, t), c = gt(ye, t), d = me(t);
    return /* @__PURE__ */ a.jsx(he.ItemSlot, { scope: t, children: /* @__PURE__ */ a.jsx(
      dt,
      {
        "aria-disabled": s.open && !c.collapsible || void 0,
        "data-orientation": i.orientation,
        id: s.triggerId,
        ...d,
        ...r,
        ref: e
      }
    ) });
  }, "AccordionTrigger")
), Nt = "AccordionContent", Pt = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ M(function(o, e) {
    const { __scopeAccordion: t, ...r } = o, i = Ce(L, t), s = Ve(Nt, t), c = me(t);
    return /* @__PURE__ */ a.jsx(
      ut,
      {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": i.orientation,
        ...c,
        ...r,
        ref: e,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...o.style
        }
      }
    );
  }, "AccordionContent")
);
function Fe(n) {
  return n ? "open" : "closed";
}
M(Fe, "getState");
const $e = l.createContext(null), ie = () => {
  const n = l.useContext($e);
  if (!n)
    throw new Error("useTree must be used within a TreeProvider");
  return n;
}, ae = (n) => n.type ? n.type === "folder" : Array.isArray(n.children), Ie = (n, o) => [.../* @__PURE__ */ new Set([...n ?? [], ...o])], Ot = new Intl.Collator("en", {
  numeric: !0,
  sensitivity: "base"
}), Et = (n, o) => {
  const e = ae(n), t = ae(o);
  return e !== t ? e ? -1 : 1 : Ot.compare(n.name, o.name);
}, jt = (n) => {
  if (n !== "none")
    return n === "default" ? Et : n;
}, Be = (n, o) => {
  const e = jt(o), t = n.map((r) => Array.isArray(r.children) ? {
    ...r,
    children: Be(r.children, o)
  } : r);
  return e ? [...t].sort(e) : t;
}, He = (n, o) => Be(n, o).map((e) => ae(e) ? /* @__PURE__ */ a.jsx(
  Ue,
  {
    value: e.id,
    element: e.name,
    isSelectable: e.isSelectable,
    children: Array.isArray(e.children) ? He(e.children, o) : null
  },
  e.id
) : /* @__PURE__ */ a.jsx(
  Ke,
  {
    value: e.id,
    isSelectable: e.isSelectable,
    children: /* @__PURE__ */ a.jsx("span", { children: e.name })
  },
  e.id
)), Ge = l.forwardRef(
  ({
    className: n,
    elements: o,
    initialSelectedId: e,
    initialExpandedItems: t,
    children: r,
    indicator: i = !0,
    openIcon: s,
    closeIcon: c,
    sort: d = "default",
    dir: p,
    ...f
  }, u) => {
    const [C, x] = l.useState(
      e
    ), [A, I] = l.useState(
      t
    ), R = l.useCallback((T) => {
      x(T);
    }, []), E = l.useCallback((T) => {
      I((h) => h != null && h.includes(T) ? h.filter((b) => b !== T) : [...h ?? [], T]);
    }, []), v = l.useCallback(
      (T, h) => {
        if (!T || !h) return;
        const b = (P, k = []) => {
          const _ = P.isSelectable ?? !0, S = [...k, P.id];
          if (P.id === h) {
            _ ? I((z) => Ie(z, S)) : S.includes(P.id) && (S.pop(), I((z) => Ie(z, S)));
            return;
          }
          Array.isArray(P.children) && P.children.length > 0 && P.children.forEach((z) => {
            b(z, S);
          });
        };
        T.forEach((P) => {
          b(P);
        });
      },
      []
    );
    l.useEffect(() => {
      e && v(o, e);
    }, [e, o, v]);
    const m = p === "rtl" ? "rtl" : "ltr", g = r ?? (o ? He(o, d) : null);
    return /* @__PURE__ */ a.jsx(
      $e.Provider,
      {
        value: {
          selectedId: C,
          expandedItems: A,
          handleExpand: E,
          selectItem: R,
          setExpandedItems: I,
          indicator: i,
          openIcon: s,
          closeIcon: c,
          direction: m
        },
        children: /* @__PURE__ */ a.jsx("div", { className: Y("size-full", n), children: /* @__PURE__ */ a.jsx(
          Ze,
          {
            ref: u,
            className: "relative h-full px-2",
            dir: p,
            children: /* @__PURE__ */ a.jsx(
              Me,
              {
                ...f,
                type: "multiple",
                value: A,
                className: "flex flex-col gap-1",
                dir: p,
                children: g
              }
            )
          }
        ) })
      }
    );
  }
);
Ge.displayName = "Tree";
const qe = l.forwardRef(({ className: n, ...o }, e) => {
  const { direction: t } = ie();
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      dir: t,
      ref: e,
      className: Y(
        "bg-muted absolute left-1.5 h-full w-px rounded-md py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5",
        n
      ),
      ...o
    }
  );
});
qe.displayName = "TreeIndicator";
const Ue = l.forwardRef(
  ({
    className: n,
    element: o,
    value: e,
    isSelectable: t = !0,
    isSelect: r,
    children: i,
    ...s
  }, c) => {
    const {
      direction: d,
      handleExpand: p,
      expandedItems: f,
      indicator: u,
      selectedId: C,
      selectItem: x,
      openIcon: A,
      closeIcon: I
    } = ie(), R = r ?? C === e;
    return /* @__PURE__ */ a.jsxs(
      St,
      {
        ref: c,
        ...s,
        value: e,
        className: "relative h-full overflow-hidden",
        children: [
          /* @__PURE__ */ a.jsxs(
            wt,
            {
              className: Y(
                "flex items-center gap-1 rounded-md text-sm",
                n,
                {
                  "bg-muted rounded-md": R && t,
                  "cursor-pointer": t,
                  "cursor-not-allowed opacity-50": !t
                }
              ),
              disabled: !t,
              onClick: () => {
                x(e), p(e);
              },
              children: [
                f != null && f.includes(e) ? A ?? /* @__PURE__ */ a.jsx(et, { className: "size-4" }) : I ?? /* @__PURE__ */ a.jsx(ot, { className: "size-4" }),
                /* @__PURE__ */ a.jsx("span", { children: o })
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs(Pt, { className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative h-full overflow-hidden text-sm", children: [
            o && u && /* @__PURE__ */ a.jsx(qe, { "aria-hidden": "true" }),
            /* @__PURE__ */ a.jsx(
              Me,
              {
                dir: d,
                type: "multiple",
                className: "ml-5 flex flex-col gap-1 py-1 rtl:mr-5",
                value: f,
                children: i
              }
            )
          ] })
        ]
      }
    );
  }
);
Ue.displayName = "Folder";
const Ke = l.forwardRef(
  ({
    value: n,
    className: o,
    handleSelect: e,
    onClick: t,
    isSelectable: r = !0,
    isSelect: i,
    fileIcon: s,
    children: c,
    ...d
  }, p) => {
    const { direction: f, selectedId: u, selectItem: C } = ie(), x = i ?? u === n;
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        ref: p,
        type: "button",
        disabled: !r,
        className: Y(
          "flex w-fit items-center gap-1 rounded-md pr-1 text-sm duration-200 ease-in-out rtl:pr-0 rtl:pl-1",
          {
            "bg-muted": x && r
          },
          r ? "cursor-pointer" : "cursor-not-allowed opacity-50",
          f === "rtl" ? "rtl" : "ltr",
          o
        ),
        onClick: (A) => {
          C(n), e == null || e(n), t == null || t(A);
        },
        ...d,
        children: [
          s ?? /* @__PURE__ */ a.jsx(Qe, { className: "size-4" }),
          c
        ]
      }
    );
  }
);
Ke.displayName = "File";
const Tt = l.forwardRef(({ className: n, elements: o, expandAll: e = !1, children: t, ...r }, i) => {
  const { expandedItems: s, setExpandedItems: c } = ie(), d = l.useCallback((f) => {
    const u = [], C = (x) => {
      if ((x.isSelectable ?? !0) && x.children && x.children.length > 0) {
        u.push(x.id);
        for (const I of x.children)
          C(I);
      }
    };
    for (const x of f)
      C(x);
    return [...new Set(u)];
  }, []), p = l.useCallback(() => {
    c == null || c([]);
  }, [c]);
  return l.useEffect(() => {
    e && (c == null || c(d(o)));
  }, [e, o, d, c]), /* @__PURE__ */ a.jsxs(
    Je,
    {
      variant: "ghost",
      className: Y("absolute right-2 bottom-1 h-8 w-fit p-1", n),
      onClick: s && s.length > 0 ? p : () => c == null ? void 0 : c(d(o)),
      ref: i,
      ...r,
      children: [
        t,
        /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Toggle" })
      ]
    }
  );
});
Tt.displayName = "CollapseButton";
function qt() {
  return /* @__PURE__ */ a.jsx("div", { className: "bg-background relative flex h-[300px] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-lg border", children: /* @__PURE__ */ a.jsx(
    Ge,
    {
      className: "bg-background overflow-hidden rounded-md p-2",
      initialSelectedId: "button",
      initialExpandedItems: ["src", "app", "components", "ui", "lib"],
      elements: _t
    }
  ) });
}
const _t = [
  {
    id: "src",
    type: "folder",
    isSelectable: !0,
    name: "src",
    children: [
      {
        id: "lib",
        type: "folder",
        isSelectable: !0,
        name: "lib",
        children: [
          {
            id: "utils",
            isSelectable: !0,
            name: "utils.ts"
          }
        ]
      },
      {
        id: "app",
        type: "folder",
        isSelectable: !0,
        name: "app",
        children: [
          {
            id: "page",
            isSelectable: !0,
            name: "page.tsx"
          },
          {
            id: "layout",
            isSelectable: !0,
            name: "layout.tsx"
          }
        ]
      },
      {
        id: "components",
        type: "folder",
        isSelectable: !0,
        name: "components",
        children: [
          {
            id: "header",
            isSelectable: !0,
            name: "header.tsx"
          },
          {
            id: "ui",
            type: "folder",
            isSelectable: !0,
            name: "ui",
            children: [
              {
                id: "button",
                isSelectable: !0,
                name: "button.tsx"
              }
            ]
          },
          {
            id: "footer",
            isSelectable: !0,
            name: "footer.tsx"
          }
        ]
      }
    ]
  }
];
export {
  qt as default
};
