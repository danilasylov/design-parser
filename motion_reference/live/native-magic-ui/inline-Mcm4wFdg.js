function w0(t, e) {
  for (var n = 0; n < e.length; n++) {
    const i = e[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in t)) {
          const l = Object.getOwnPropertyDescriptor(i, a);
          l && Object.defineProperty(t, a, l.get ? l : {
            enumerable: !0,
            get: () => i[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function R0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vm = { exports: {} }, co = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0 = Symbol.for("react.transitional.element"), O0 = Symbol.for("react.fragment");
function Um(t, e, n) {
  var i = null;
  if (n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), "key" in e) {
    n = {};
    for (var a in e)
      a !== "key" && (n[a] = e[a]);
  } else n = e;
  return e = n.ref, {
    $$typeof: C0,
    type: t,
    key: i,
    ref: e !== void 0 ? e : null,
    props: n
  };
}
co.Fragment = O0;
co.jsx = Um;
co.jsxs = Um;
Vm.exports = co;
var k = Vm.exports, _m = { exports: {} }, L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec = Symbol.for("react.transitional.element"), z0 = Symbol.for("react.portal"), V0 = Symbol.for("react.fragment"), U0 = Symbol.for("react.strict_mode"), _0 = Symbol.for("react.profiler"), B0 = Symbol.for("react.consumer"), N0 = Symbol.for("react.context"), j0 = Symbol.for("react.forward_ref"), L0 = Symbol.for("react.suspense"), H0 = Symbol.for("react.memo"), Bm = Symbol.for("react.lazy"), Bf = Symbol.iterator;
function k0(t) {
  return t === null || typeof t != "object" ? null : (t = Bf && t[Bf] || t["@@iterator"], typeof t == "function" ? t : null);
}
var Nm = {
  isMounted: function() {
    return !1;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
}, jm = Object.assign, Lm = {};
function ta(t, e, n) {
  this.props = t, this.context = e, this.refs = Lm, this.updater = n || Nm;
}
ta.prototype.isReactComponent = {};
ta.prototype.setState = function(t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
ta.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Hm() {
}
Hm.prototype = ta.prototype;
function nc(t, e, n) {
  this.props = t, this.context = e, this.refs = Lm, this.updater = n || Nm;
}
var ic = nc.prototype = new Hm();
ic.constructor = nc;
jm(ic, ta.prototype);
ic.isPureReactComponent = !0;
var Nf = Array.isArray, lt = { H: null, A: null, T: null, S: null, V: null }, km = Object.prototype.hasOwnProperty;
function ac(t, e, n, i, a, l) {
  return n = l.ref, {
    $$typeof: ec,
    type: t,
    key: e,
    ref: n !== void 0 ? n : null,
    props: l
  };
}
function G0(t, e) {
  return ac(
    t.type,
    e,
    void 0,
    void 0,
    void 0,
    t.props
  );
}
function lc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ec;
}
function Y0(t) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return e[n];
  });
}
var jf = /\/+/g;
function Bo(t, e) {
  return typeof t == "object" && t !== null && t.key != null ? Y0("" + t.key) : e.toString(36);
}
function Lf() {
}
function q0(t) {
  switch (t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      switch (typeof t.status == "string" ? t.then(Lf, Lf) : (t.status = "pending", t.then(
        function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        },
        function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        }
      )), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
      }
  }
  throw t;
}
function hi(t, e, n, i, a) {
  var l = typeof t;
  (l === "undefined" || l === "boolean") && (t = null);
  var s = !1;
  if (t === null) s = !0;
  else
    switch (l) {
      case "bigint":
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ec:
          case z0:
            s = !0;
            break;
          case Bm:
            return s = t._init, hi(
              s(t._payload),
              e,
              n,
              i,
              a
            );
        }
    }
  if (s)
    return a = a(t), s = i === "" ? "." + Bo(t, 0) : i, Nf(a) ? (n = "", s != null && (n = s.replace(jf, "$&/") + "/"), hi(a, e, n, "", function(u) {
      return u;
    })) : a != null && (lc(a) && (a = G0(
      a,
      n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(
        jf,
        "$&/"
      ) + "/") + s
    )), e.push(a)), 1;
  s = 0;
  var o = i === "" ? "." : i + ":";
  if (Nf(t))
    for (var r = 0; r < t.length; r++)
      i = t[r], l = o + Bo(i, r), s += hi(
        i,
        e,
        n,
        l,
        a
      );
  else if (r = k0(t), typeof r == "function")
    for (t = r.call(t), r = 0; !(i = t.next()).done; )
      i = i.value, l = o + Bo(i, r++), s += hi(
        i,
        e,
        n,
        l,
        a
      );
  else if (l === "object") {
    if (typeof t.then == "function")
      return hi(
        q0(t),
        e,
        n,
        i,
        a
      );
    throw e = String(t), Error(
      "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
    );
  }
  return s;
}
function _l(t, e, n) {
  if (t == null) return t;
  var i = [], a = 0;
  return hi(t, i, "", "", function(l) {
    return e.call(n, l, a++);
  }), i;
}
function X0(t) {
  if (t._status === -1) {
    var e = t._result;
    e = e(), e.then(
      function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
      },
      function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
      }
    ), t._status === -1 && (t._status = 0, t._result = e);
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Hf = typeof reportError == "function" ? reportError : function(t) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var e = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
      error: t
    });
    if (!window.dispatchEvent(e)) return;
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", t);
    return;
  }
  console.error(t);
};
function Z0() {
}
L.Children = {
  map: _l,
  forEach: function(t, e, n) {
    _l(
      t,
      function() {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function(t) {
    var e = 0;
    return _l(t, function() {
      e++;
    }), e;
  },
  toArray: function(t) {
    return _l(t, function(e) {
      return e;
    }) || [];
  },
  only: function(t) {
    if (!lc(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  }
};
L.Component = ta;
L.Fragment = V0;
L.Profiler = _0;
L.PureComponent = nc;
L.StrictMode = U0;
L.Suspense = L0;
L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = lt;
L.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(t) {
    return lt.H.useMemoCache(t);
  }
};
L.cache = function(t) {
  return function() {
    return t.apply(null, arguments);
  };
};
L.cloneElement = function(t, e, n) {
  if (t == null)
    throw Error(
      "The argument must be a React element, but you passed " + t + "."
    );
  var i = jm({}, t.props), a = t.key, l = void 0;
  if (e != null)
    for (s in e.ref !== void 0 && (l = void 0), e.key !== void 0 && (a = "" + e.key), e)
      !km.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (i[s] = e[s]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var o = Array(s), r = 0; r < s; r++)
      o[r] = arguments[r + 2];
    i.children = o;
  }
  return ac(t.type, a, void 0, void 0, l, i);
};
L.createContext = function(t) {
  return t = {
    $$typeof: N0,
    _currentValue: t,
    _currentValue2: t,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, t.Provider = t, t.Consumer = {
    $$typeof: B0,
    _context: t
  }, t;
};
L.createElement = function(t, e, n) {
  var i, a = {}, l = null;
  if (e != null)
    for (i in e.key !== void 0 && (l = "" + e.key), e)
      km.call(e, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = e[i]);
  var s = arguments.length - 2;
  if (s === 1) a.children = n;
  else if (1 < s) {
    for (var o = Array(s), r = 0; r < s; r++)
      o[r] = arguments[r + 2];
    a.children = o;
  }
  if (t && t.defaultProps)
    for (i in s = t.defaultProps, s)
      a[i] === void 0 && (a[i] = s[i]);
  return ac(t, l, void 0, void 0, null, a);
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(t) {
  return { $$typeof: j0, render: t };
};
L.isValidElement = lc;
L.lazy = function(t) {
  return {
    $$typeof: Bm,
    _payload: { _status: -1, _result: t },
    _init: X0
  };
};
L.memo = function(t, e) {
  return {
    $$typeof: H0,
    type: t,
    compare: e === void 0 ? null : e
  };
};
L.startTransition = function(t) {
  var e = lt.T, n = {};
  lt.T = n;
  try {
    var i = t(), a = lt.S;
    a !== null && a(n, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(Z0, Hf);
  } catch (l) {
    Hf(l);
  } finally {
    lt.T = e;
  }
};
L.unstable_useCacheRefresh = function() {
  return lt.H.useCacheRefresh();
};
L.use = function(t) {
  return lt.H.use(t);
};
L.useActionState = function(t, e, n) {
  return lt.H.useActionState(t, e, n);
};
L.useCallback = function(t, e) {
  return lt.H.useCallback(t, e);
};
L.useContext = function(t) {
  return lt.H.useContext(t);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(t, e) {
  return lt.H.useDeferredValue(t, e);
};
L.useEffect = function(t, e, n) {
  var i = lt.H;
  if (typeof n == "function")
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React."
    );
  return i.useEffect(t, e);
};
L.useId = function() {
  return lt.H.useId();
};
L.useImperativeHandle = function(t, e, n) {
  return lt.H.useImperativeHandle(t, e, n);
};
L.useInsertionEffect = function(t, e) {
  return lt.H.useInsertionEffect(t, e);
};
L.useLayoutEffect = function(t, e) {
  return lt.H.useLayoutEffect(t, e);
};
L.useMemo = function(t, e) {
  return lt.H.useMemo(t, e);
};
L.useOptimistic = function(t, e) {
  return lt.H.useOptimistic(t, e);
};
L.useReducer = function(t, e, n) {
  return lt.H.useReducer(t, e, n);
};
L.useRef = function(t) {
  return lt.H.useRef(t);
};
L.useState = function(t) {
  return lt.H.useState(t);
};
L.useSyncExternalStore = function(t, e, n) {
  return lt.H.useSyncExternalStore(
    t,
    e,
    n
  );
};
L.useTransition = function() {
  return lt.H.useTransition();
};
L.version = "19.1.1";
_m.exports = L;
var w = _m.exports;
const un = /* @__PURE__ */ R0(w), T2 = /* @__PURE__ */ w0({
  __proto__: null,
  default: un
}, [w]);
var Gm = { exports: {} }, fo = {}, Ym = { exports: {} }, qm = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
  function e(R, N) {
    var _ = R.length;
    R.push(N);
    t: for (; 0 < _; ) {
      var Y = _ - 1 >>> 1, C = R[Y];
      if (0 < a(C, N))
        R[Y] = N, R[_] = C, _ = Y;
      else break t;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function i(R) {
    if (R.length === 0) return null;
    var N = R[0], _ = R.pop();
    if (_ !== N) {
      R[0] = _;
      t: for (var Y = 0, C = R.length, qt = C >>> 1; Y < qt; ) {
        var Ne = 2 * (Y + 1) - 1, ci = R[Ne], ge = Ne + 1, mt = R[ge];
        if (0 > a(ci, _))
          ge < C && 0 > a(mt, ci) ? (R[Y] = mt, R[ge] = _, Y = ge) : (R[Y] = ci, R[Ne] = _, Y = Ne);
        else if (ge < C && 0 > a(mt, _))
          R[Y] = mt, R[ge] = _, Y = ge;
        else break t;
      }
    }
    return N;
  }
  function a(R, N) {
    var _ = R.sortIndex - N.sortIndex;
    return _ !== 0 ? _ : R.id - N.id;
  }
  if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    t.unstable_now = function() {
      return l.now();
    };
  } else {
    var s = Date, o = s.now();
    t.unstable_now = function() {
      return s.now() - o;
    };
  }
  var r = [], u = [], c = 1, d = null, f = 3, h = !1, v = !1, x = !1, S = !1, p = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
  function y(R) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) i(u);
      else if (N.startTime <= R)
        i(u), N.sortIndex = N.expirationTime, e(r, N);
      else break;
      N = n(u);
    }
  }
  function T(R) {
    if (x = !1, y(R), !v)
      if (n(r) !== null)
        v = !0, M || (M = !0, Q());
      else {
        var N = n(u);
        N !== null && ht(T, N.startTime - R);
      }
  }
  var M = !1, A = -1, b = 5, O = -1;
  function D() {
    return S ? !0 : !(t.unstable_now() - O < b);
  }
  function j() {
    if (S = !1, M) {
      var R = t.unstable_now();
      O = R;
      var N = !0;
      try {
        t: {
          v = !1, x && (x = !1, m(A), A = -1), h = !0;
          var _ = f;
          try {
            e: {
              for (y(R), d = n(r); d !== null && !(d.expirationTime > R && D()); ) {
                var Y = d.callback;
                if (typeof Y == "function") {
                  d.callback = null, f = d.priorityLevel;
                  var C = Y(
                    d.expirationTime <= R
                  );
                  if (R = t.unstable_now(), typeof C == "function") {
                    d.callback = C, y(R), N = !0;
                    break e;
                  }
                  d === n(r) && i(r), y(R);
                } else i(r);
                d = n(r);
              }
              if (d !== null) N = !0;
              else {
                var qt = n(u);
                qt !== null && ht(
                  T,
                  qt.startTime - R
                ), N = !1;
              }
            }
            break t;
          } finally {
            d = null, f = _, h = !1;
          }
          N = void 0;
        }
      } finally {
        N ? Q() : M = !1;
      }
    }
  }
  var Q;
  if (typeof g == "function")
    Q = function() {
      g(j);
    };
  else if (typeof MessageChannel < "u") {
    var Nt = new MessageChannel(), Ut = Nt.port2;
    Nt.port1.onmessage = j, Q = function() {
      Ut.postMessage(null);
    };
  } else
    Q = function() {
      p(j, 0);
    };
  function ht(R, N) {
    A = p(function() {
      R(t.unstable_now());
    }, N);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, t.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error(
      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
    ) : b = 0 < R ? Math.floor(1e3 / R) : 5;
  }, t.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, t.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var _ = f;
    f = N;
    try {
      return R();
    } finally {
      f = _;
    }
  }, t.unstable_requestPaint = function() {
    S = !0;
  }, t.unstable_runWithPriority = function(R, N) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var _ = f;
    f = R;
    try {
      return N();
    } finally {
      f = _;
    }
  }, t.unstable_scheduleCallback = function(R, N, _) {
    var Y = t.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? Y + _ : Y) : _ = Y, R) {
      case 1:
        var C = -1;
        break;
      case 2:
        C = 250;
        break;
      case 5:
        C = 1073741823;
        break;
      case 4:
        C = 1e4;
        break;
      default:
        C = 5e3;
    }
    return C = _ + C, R = {
      id: c++,
      callback: N,
      priorityLevel: R,
      startTime: _,
      expirationTime: C,
      sortIndex: -1
    }, _ > Y ? (R.sortIndex = _, e(u, R), n(r) === null && R === n(u) && (x ? (m(A), A = -1) : x = !0, ht(T, _ - Y))) : (R.sortIndex = C, e(r, R), v || h || (v = !0, M || (M = !0, Q()))), R;
  }, t.unstable_shouldYield = D, t.unstable_wrapCallback = function(R) {
    var N = f;
    return function() {
      var _ = f;
      f = N;
      try {
        return R.apply(this, arguments);
      } finally {
        f = _;
      }
    };
  };
})(qm);
Ym.exports = qm;
var Q0 = Ym.exports, Xm = { exports: {} }, Yt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K0 = w;
function Zm(t) {
  var e = "https://react.dev/errors/" + t;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      e += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function en() {
}
var Ht = {
  d: {
    f: en,
    r: function() {
      throw Error(Zm(522));
    },
    D: en,
    C: en,
    L: en,
    m: en,
    X: en,
    S: en,
    M: en
  },
  p: 0,
  findDOMNode: null
}, P0 = Symbol.for("react.portal");
function J0(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: P0,
    key: i == null ? null : "" + i,
    children: t,
    containerInfo: e,
    implementation: n
  };
}
var Da = K0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function ho(t, e) {
  if (t === "font") return "";
  if (typeof e == "string")
    return e === "use-credentials" ? e : "";
}
Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ht;
Yt.createPortal = function(t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    throw Error(Zm(299));
  return J0(t, e, null, n);
};
Yt.flushSync = function(t) {
  var e = Da.T, n = Ht.p;
  try {
    if (Da.T = null, Ht.p = 2, t) return t();
  } finally {
    Da.T = e, Ht.p = n, Ht.d.f();
  }
};
Yt.preconnect = function(t, e) {
  typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, Ht.d.C(t, e));
};
Yt.prefetchDNS = function(t) {
  typeof t == "string" && Ht.d.D(t);
};
Yt.preinit = function(t, e) {
  if (typeof t == "string" && e && typeof e.as == "string") {
    var n = e.as, i = ho(n, e.crossOrigin), a = typeof e.integrity == "string" ? e.integrity : void 0, l = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
    n === "style" ? Ht.d.S(
      t,
      typeof e.precedence == "string" ? e.precedence : void 0,
      {
        crossOrigin: i,
        integrity: a,
        fetchPriority: l
      }
    ) : n === "script" && Ht.d.X(t, {
      crossOrigin: i,
      integrity: a,
      fetchPriority: l,
      nonce: typeof e.nonce == "string" ? e.nonce : void 0
    });
  }
};
Yt.preinitModule = function(t, e) {
  if (typeof t == "string")
    if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var n = ho(
          e.as,
          e.crossOrigin
        );
        Ht.d.M(t, {
          crossOrigin: n,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && Ht.d.M(t);
};
Yt.preload = function(t, e) {
  if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
    var n = e.as, i = ho(n, e.crossOrigin);
    Ht.d.L(t, n, {
      crossOrigin: i,
      integrity: typeof e.integrity == "string" ? e.integrity : void 0,
      nonce: typeof e.nonce == "string" ? e.nonce : void 0,
      type: typeof e.type == "string" ? e.type : void 0,
      fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
      referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
      imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
      imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
      media: typeof e.media == "string" ? e.media : void 0
    });
  }
};
Yt.preloadModule = function(t, e) {
  if (typeof t == "string")
    if (e) {
      var n = ho(e.as, e.crossOrigin);
      Ht.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: n,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else Ht.d.m(t);
};
Yt.requestFormReset = function(t) {
  Ht.d.r(t);
};
Yt.unstable_batchedUpdates = function(t, e) {
  return t(e);
};
Yt.useFormState = function(t, e, n) {
  return Da.H.useFormState(t, e, n);
};
Yt.useFormStatus = function() {
  return Da.H.useHostTransitionStatus();
};
Yt.version = "19.1.1";
function Qm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qm);
    } catch (t) {
      console.error(t);
    }
}
Qm(), Xm.exports = Yt;
var F0 = Xm.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt = Q0, Km = w, W0 = F0;
function E(t) {
  var e = "https://react.dev/errors/" + t;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      e += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function Pm(t) {
  return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
}
function ul(t) {
  var e = t, n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do
      e = t, e.flags & 4098 && (n = e.return), t = e.return;
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Jm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function kf(t) {
  if (ul(t) !== t)
    throw Error(E(188));
}
function $0(t) {
  var e = t.alternate;
  if (!e) {
    if (e = ul(t), e === null) throw Error(E(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var a = n.return;
    if (a === null) break;
    var l = a.alternate;
    if (l === null) {
      if (i = a.return, i !== null) {
        n = i;
        continue;
      }
      break;
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === n) return kf(a), t;
        if (l === i) return kf(a), e;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== i.return) n = a, i = l;
    else {
      for (var s = !1, o = a.child; o; ) {
        if (o === n) {
          s = !0, n = a, i = l;
          break;
        }
        if (o === i) {
          s = !0, i = a, n = l;
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = l.child; o; ) {
          if (o === n) {
            s = !0, n = l, i = a;
            break;
          }
          if (o === i) {
            s = !0, i = l, n = a;
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== i) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? t : e;
}
function Fm(t) {
  var e = t.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return t;
  for (t = t.child; t !== null; ) {
    if (e = Fm(t), e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var it = Object.assign, I0 = Symbol.for("react.element"), Bl = Symbol.for("react.transitional.element"), xa = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), Wm = Symbol.for("react.strict_mode"), Ur = Symbol.for("react.profiler"), tb = Symbol.for("react.provider"), $m = Symbol.for("react.consumer"), qe = Symbol.for("react.context"), sc = Symbol.for("react.forward_ref"), _r = Symbol.for("react.suspense"), Br = Symbol.for("react.suspense_list"), oc = Symbol.for("react.memo"), on = Symbol.for("react.lazy"), Nr = Symbol.for("react.activity"), eb = Symbol.for("react.memo_cache_sentinel"), Gf = Symbol.iterator;
function ca(t) {
  return t === null || typeof t != "object" ? null : (t = Gf && t[Gf] || t["@@iterator"], typeof t == "function" ? t : null);
}
var nb = Symbol.for("react.client.reference");
function jr(t) {
  if (t == null) return null;
  if (typeof t == "function")
    return t.$$typeof === nb ? null : t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case vi:
      return "Fragment";
    case Ur:
      return "Profiler";
    case Wm:
      return "StrictMode";
    case _r:
      return "Suspense";
    case Br:
      return "SuspenseList";
    case Nr:
      return "Activity";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case xa:
        return "Portal";
      case qe:
        return (t.displayName || "Context") + ".Provider";
      case $m:
        return (t._context.displayName || "Context") + ".Consumer";
      case sc:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case oc:
        return e = t.displayName || null, e !== null ? e : jr(t.type) || "Memo";
      case on:
        e = t._payload, t = t._init;
        try {
          return jr(t(e));
        } catch {
        }
    }
  return null;
}
var Sa = Array.isArray, B = Km.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = W0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qn = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, Lr = [], bi = -1;
function _e(t) {
  return { current: t };
}
function wt(t) {
  0 > bi || (t.current = Lr[bi], Lr[bi] = null, bi--);
}
function st(t, e) {
  bi++, Lr[bi] = t.current, t.current = e;
}
var Ce = _e(null), Za = _e(null), bn = _e(null), As = _e(null);
function Es(t, e) {
  switch (st(bn, e), st(Za, t), st(Ce, null), e.nodeType) {
    case 9:
    case 11:
      t = (t = e.documentElement) && (t = t.namespaceURI) ? Qd(t) : 0;
      break;
    default:
      if (t = e.tagName, e = e.namespaceURI)
        e = Qd(e), t = py(e, t);
      else
        switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
  }
  wt(Ce), st(Ce, t);
}
function Gi() {
  wt(Ce), wt(Za), wt(bn);
}
function Hr(t) {
  t.memoizedState !== null && st(As, t);
  var e = Ce.current, n = py(e, t.type);
  e !== n && (st(Za, t), st(Ce, n));
}
function Ms(t) {
  Za.current === t && (wt(Ce), wt(Za)), As.current === t && (wt(As), el._currentValue = Qn);
}
var kr = Object.prototype.hasOwnProperty, rc = Tt.unstable_scheduleCallback, No = Tt.unstable_cancelCallback, ib = Tt.unstable_shouldYield, ab = Tt.unstable_requestPaint, Oe = Tt.unstable_now, lb = Tt.unstable_getCurrentPriorityLevel, Im = Tt.unstable_ImmediatePriority, tp = Tt.unstable_UserBlockingPriority, Ds = Tt.unstable_NormalPriority, sb = Tt.unstable_LowPriority, ep = Tt.unstable_IdlePriority, ob = Tt.log, rb = Tt.unstable_setDisableYieldValue, cl = null, te = null;
function mn(t) {
  if (typeof ob == "function" && rb(t), te && typeof te.setStrictMode == "function")
    try {
      te.setStrictMode(cl, t);
    } catch {
    }
}
var ee = Math.clz32 ? Math.clz32 : fb, ub = Math.log, cb = Math.LN2;
function fb(t) {
  return t >>>= 0, t === 0 ? 32 : 31 - (ub(t) / cb | 0) | 0;
}
var Nl = 256, jl = 4194304;
function kn(t) {
  var e = t & 42;
  if (e !== 0) return e;
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return t & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return t;
  }
}
function mo(t, e, n) {
  var i = t.pendingLanes;
  if (i === 0) return 0;
  var a = 0, l = t.suspendedLanes, s = t.pingedLanes;
  t = t.warmLanes;
  var o = i & 134217727;
  return o !== 0 ? (i = o & ~l, i !== 0 ? a = kn(i) : (s &= o, s !== 0 ? a = kn(s) : n || (n = o & ~t, n !== 0 && (a = kn(n))))) : (o = i & ~l, o !== 0 ? a = kn(o) : s !== 0 ? a = kn(s) : n || (n = i & ~t, n !== 0 && (a = kn(n)))), a === 0 ? 0 : e !== 0 && e !== a && !(e & l) && (l = a & -a, n = e & -e, l >= n || l === 32 && (n & 4194048) !== 0) ? e : a;
}
function fl(t, e) {
  return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
}
function db(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return e + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function np() {
  var t = Nl;
  return Nl <<= 1, !(Nl & 4194048) && (Nl = 256), t;
}
function ip() {
  var t = jl;
  return jl <<= 1, !(jl & 62914560) && (jl = 4194304), t;
}
function jo(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function dl(t, e) {
  t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
}
function hb(t, e, n, i, a, l) {
  var s = t.pendingLanes;
  t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
  var o = t.entanglements, r = t.expirationTimes, u = t.hiddenUpdates;
  for (n = s & ~n; 0 < n; ) {
    var c = 31 - ee(n), d = 1 << c;
    o[c] = 0, r[c] = -1;
    var f = u[c];
    if (f !== null)
      for (u[c] = null, c = 0; c < f.length; c++) {
        var h = f[c];
        h !== null && (h.lane &= -536870913);
      }
    n &= ~d;
  }
  i !== 0 && ap(t, i, 0), l !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= l & ~(s & ~e));
}
function ap(t, e, n) {
  t.pendingLanes |= e, t.suspendedLanes &= ~e;
  var i = 31 - ee(e);
  t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 4194090;
}
function lp(t, e) {
  var n = t.entangledLanes |= e;
  for (t = t.entanglements; n; ) {
    var i = 31 - ee(n), a = 1 << i;
    a & e | t[i] & e && (t[i] |= e), n &= ~a;
  }
}
function uc(t) {
  switch (t) {
    case 2:
      t = 1;
      break;
    case 8:
      t = 4;
      break;
    case 32:
      t = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      t = 128;
      break;
    case 268435456:
      t = 134217728;
      break;
    default:
      t = 0;
  }
  return t;
}
function cc(t) {
  return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
}
function sp() {
  var t = P.p;
  return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : My(t.type));
}
function mb(t, e) {
  var n = P.p;
  try {
    return P.p = t, e();
  } finally {
    P.p = n;
  }
}
var Un = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Un, Pt = "__reactProps$" + Un, ea = "__reactContainer$" + Un, Gr = "__reactEvents$" + Un, pb = "__reactListeners$" + Un, gb = "__reactHandles$" + Un, Yf = "__reactResources$" + Un, hl = "__reactMarker$" + Un;
function fc(t) {
  delete t[_t], delete t[Pt], delete t[Gr], delete t[pb], delete t[gb];
}
function xi(t) {
  var e = t[_t];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if (e = n[ea] || n[_t]) {
      if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
        for (t = Jd(t); t !== null; ) {
          if (n = t[_t]) return n;
          t = Jd(t);
        }
      return e;
    }
    t = n, n = t.parentNode;
  }
  return null;
}
function na(t) {
  if (t = t[_t] || t[ea]) {
    var e = t.tag;
    if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
      return t;
  }
  return null;
}
function Ta(t) {
  var e = t.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
  throw Error(E(33));
}
function Ui(t) {
  var e = t[Yf];
  return e || (e = t[Yf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
}
function Mt(t) {
  t[hl] = !0;
}
var op = /* @__PURE__ */ new Set(), rp = {};
function li(t, e) {
  Yi(t, e), Yi(t + "Capture", e);
}
function Yi(t, e) {
  for (rp[t] = e, t = 0; t < e.length; t++)
    op.add(e[t]);
}
var yb = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), qf = {}, Xf = {};
function vb(t) {
  return kr.call(Xf, t) ? !0 : kr.call(qf, t) ? !1 : yb.test(t) ? Xf[t] = !0 : (qf[t] = !0, !1);
}
function ns(t, e, n) {
  if (vb(e))
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var i = e.toLowerCase().slice(0, 5);
          if (i !== "data-" && i !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + n);
    }
}
function Ll(t, e, n) {
  if (n === null) t.removeAttribute(e);
  else {
    switch (typeof n) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        t.removeAttribute(e);
        return;
    }
    t.setAttribute(e, "" + n);
  }
}
function je(t, e, n, i) {
  if (i === null) t.removeAttribute(n);
  else {
    switch (typeof i) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        t.removeAttribute(n);
        return;
    }
    t.setAttributeNS(e, n, "" + i);
  }
}
var Lo, Zf;
function mi(t) {
  if (Lo === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Lo = e && e[1] || "", Zf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + Lo + t + Zf;
}
var Ho = !1;
function ko(t, e) {
  if (!t || Ho) return "";
  Ho = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var i = {
      DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (h) {
                var f = h;
              }
              Reflect.construct(t, [], d);
            } else {
              try {
                d.call();
              } catch (h) {
                f = h;
              }
              t.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (h) {
              f = h;
            }
            (d = t()) && typeof d.catch == "function" && d.catch(function() {
            });
          }
        } catch (h) {
          if (h && f && typeof h.stack == "string")
            return [h.stack, f.stack];
        }
        return [null, null];
      }
    };
    i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var a = Object.getOwnPropertyDescriptor(
      i.DetermineComponentFrameRoot,
      "name"
    );
    a && a.configurable && Object.defineProperty(
      i.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var l = i.DetermineComponentFrameRoot(), s = l[0], o = l[1];
    if (s && o) {
      var r = s.split(`
`), u = o.split(`
`);
      for (a = i = 0; i < r.length && !r[i].includes("DetermineComponentFrameRoot"); )
        i++;
      for (; a < u.length && !u[a].includes(
        "DetermineComponentFrameRoot"
      ); )
        a++;
      if (i === r.length || a === u.length)
        for (i = r.length - 1, a = u.length - 1; 1 <= i && 0 <= a && r[i] !== u[a]; )
          a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (r[i] !== u[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || r[i] !== u[a]) {
                var c = `
` + r[i].replace(" at new ", " at ");
                return t.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", t.displayName)), c;
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    Ho = !1, Error.prepareStackTrace = n;
  }
  return (n = t ? t.displayName || t.name : "") ? mi(n) : "";
}
function bb(t) {
  switch (t.tag) {
    case 26:
    case 27:
    case 5:
      return mi(t.type);
    case 16:
      return mi("Lazy");
    case 13:
      return mi("Suspense");
    case 19:
      return mi("SuspenseList");
    case 0:
    case 15:
      return ko(t.type, !1);
    case 11:
      return ko(t.type.render, !1);
    case 1:
      return ko(t.type, !0);
    case 31:
      return mi("Activity");
    default:
      return "";
  }
}
function Qf(t) {
  try {
    var e = "";
    do
      e += bb(t), t = t.return;
    while (t);
    return e;
  } catch (n) {
    return `
Error generating stack: ` + n.message + `
` + n.stack;
  }
}
function se(t) {
  switch (typeof t) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function up(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function xb(t) {
  var e = up(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
    t.constructor.prototype,
    e
  ), i = "" + t[e];
  if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, l = n.set;
    return Object.defineProperty(t, e, {
      configurable: !0,
      get: function() {
        return a.call(this);
      },
      set: function(s) {
        i = "" + s, l.call(this, s);
      }
    }), Object.defineProperty(t, e, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return i;
      },
      setValue: function(s) {
        i = "" + s;
      },
      stopTracking: function() {
        t._valueTracker = null, delete t[e];
      }
    };
  }
}
function ws(t) {
  t._valueTracker || (t._valueTracker = xb(t));
}
function cp(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(), i = "";
  return t && (i = up(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
}
function Rs(t) {
  if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
var Sb = /[\n"\\]/g;
function ue(t) {
  return t.replace(
    Sb,
    function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    }
  );
}
function Yr(t, e, n, i, a, l, s, o) {
  t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + se(e)) : t.value !== "" + se(e) && (t.value = "" + se(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? qr(t, s, se(e)) : n != null ? qr(t, s, se(n)) : i != null && t.removeAttribute("value"), a == null && l != null && (t.defaultChecked = !!l), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + se(o) : t.removeAttribute("name");
}
function fp(t, e, n, i, a, l, s, o) {
  if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (t.type = l), e != null || n != null) {
    if (!(l !== "submit" && l !== "reset" || e != null))
      return;
    n = n != null ? "" + se(n) : "", e = e != null ? "" + se(e) : n, o || e === t.value || (t.value = e), t.defaultValue = e;
  }
  i = i ?? a, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = o ? t.checked : !!i, t.defaultChecked = !!i, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s);
}
function qr(t, e, n) {
  e === "number" && Rs(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
}
function _i(t, e, n, i) {
  if (t = t.options, e) {
    e = {};
    for (var a = 0; a < n.length; a++)
      e["$" + n[a]] = !0;
    for (n = 0; n < t.length; n++)
      a = e.hasOwnProperty("$" + t[n].value), t[n].selected !== a && (t[n].selected = a), a && i && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + se(n), e = null, a = 0; a < t.length; a++) {
      if (t[a].value === n) {
        t[a].selected = !0, i && (t[a].defaultSelected = !0);
        return;
      }
      e !== null || t[a].disabled || (e = t[a]);
    }
    e !== null && (e.selected = !0);
  }
}
function dp(t, e, n) {
  if (e != null && (e = "" + se(e), e !== t.value && (t.value = e), n == null)) {
    t.defaultValue !== e && (t.defaultValue = e);
    return;
  }
  t.defaultValue = n != null ? "" + se(n) : "";
}
function hp(t, e, n, i) {
  if (e == null) {
    if (i != null) {
      if (n != null) throw Error(E(92));
      if (Sa(i)) {
        if (1 < i.length) throw Error(E(93));
        i = i[0];
      }
      n = i;
    }
    n == null && (n = ""), e = n;
  }
  n = se(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i);
}
function qi(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Tb = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function Kf(t, e, n) {
  var i = e.indexOf("--") === 0;
  n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Tb.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
}
function mp(t, e, n) {
  if (e != null && typeof e != "object")
    throw Error(E(62));
  if (t = t.style, n != null) {
    for (var i in n)
      !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
    for (var a in e)
      i = e[a], e.hasOwnProperty(a) && n[a] !== i && Kf(t, a, i);
  } else
    for (var l in e)
      e.hasOwnProperty(l) && Kf(t, l, e[l]);
}
function dc(t) {
  if (t.indexOf("-") === -1) return !1;
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ab = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), Eb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function is(t) {
  return Eb.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
}
var Xr = null;
function hc(t) {
  return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
}
var Si = null, Bi = null;
function Pf(t) {
  var e = na(t);
  if (e && (t = e.stateNode)) {
    var n = t[Pt] || null;
    t: switch (t = e.stateNode, e.type) {
      case "input":
        if (Yr(
          t,
          n.value,
          n.defaultValue,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name
        ), e = n.name, n.type === "radio" && e != null) {
          for (n = t; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll(
            'input[name="' + ue(
              "" + e
            ) + '"][type="radio"]'
          ), e = 0; e < n.length; e++) {
            var i = n[e];
            if (i !== t && i.form === t.form) {
              var a = i[Pt] || null;
              if (!a) throw Error(E(90));
              Yr(
                i,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name
              );
            }
          }
          for (e = 0; e < n.length; e++)
            i = n[e], i.form === t.form && cp(i);
        }
        break t;
      case "textarea":
        dp(t, n.value, n.defaultValue);
        break t;
      case "select":
        e = n.value, e != null && _i(t, !!n.multiple, e, !1);
    }
  }
}
var Go = !1;
function pp(t, e, n) {
  if (Go) return t(e, n);
  Go = !0;
  try {
    var i = t(e);
    return i;
  } finally {
    if (Go = !1, (Si !== null || Bi !== null) && (Eo(), Si && (e = Si, t = Bi, Bi = Si = null, Pf(e), t)))
      for (e = 0; e < t.length; e++) Pf(t[e]);
  }
}
function Qa(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = n[Pt] || null;
  if (i === null) return null;
  n = i[e];
  t: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
      break t;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function")
    throw Error(
      E(231, e, typeof n)
    );
  return n;
}
var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zr = !1;
if (Fe)
  try {
    var fa = {};
    Object.defineProperty(fa, "passive", {
      get: function() {
        Zr = !0;
      }
    }), window.addEventListener("test", fa, fa), window.removeEventListener("test", fa, fa);
  } catch {
    Zr = !1;
  }
var pn = null, mc = null, as = null;
function gp() {
  if (as) return as;
  var t, e = mc, n = e.length, i, a = "value" in pn ? pn.value : pn.textContent, l = a.length;
  for (t = 0; t < n && e[t] === a[t]; t++) ;
  var s = n - t;
  for (i = 1; i <= s && e[n - i] === a[l - i]; i++) ;
  return as = a.slice(t, 1 < i ? 1 - i : void 0);
}
function ls(t) {
  var e = t.keyCode;
  return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
function Hl() {
  return !0;
}
function Jf() {
  return !1;
}
function Jt(t) {
  function e(n, i, a, l, s) {
    this._reactName = n, this._targetInst = a, this.type = i, this.nativeEvent = l, this.target = s, this.currentTarget = null;
    for (var o in t)
      t.hasOwnProperty(o) && (n = t[o], this[o] = n ? n(l) : l[o]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Hl : Jf, this.isPropagationStopped = Jf, this;
  }
  return it(e.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hl);
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hl);
    },
    persist: function() {
    },
    isPersistent: Hl
  }), e;
}
var si = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(t) {
    return t.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
}, po = Jt(si), ml = it({}, si, { view: 0, detail: 0 }), Mb = Jt(ml), Yo, qo, da, go = it({}, ml, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: pc,
  button: 0,
  buttons: 0,
  relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  },
  movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== da && (da && t.type === "mousemove" ? (Yo = t.screenX - da.screenX, qo = t.screenY - da.screenY) : qo = Yo = 0, da = t), Yo);
  },
  movementY: function(t) {
    return "movementY" in t ? t.movementY : qo;
  }
}), Ff = Jt(go), Db = it({}, go, { dataTransfer: 0 }), wb = Jt(Db), Rb = it({}, ml, { relatedTarget: 0 }), Xo = Jt(Rb), Cb = it({}, si, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), Ob = Jt(Cb), zb = it({}, si, {
  clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  }
}), Vb = Jt(zb), Ub = it({}, si, { data: 0 }), Wf = Jt(Ub), _b = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Bb = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nb = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function jb(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Nb[t]) ? !!e[t] : !1;
}
function pc() {
  return jb;
}
var Lb = it({}, ml, {
  key: function(t) {
    if (t.key) {
      var e = _b[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = ls(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Bb[t.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: pc,
  charCode: function(t) {
    return t.type === "keypress" ? ls(t) : 0;
  },
  keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  },
  which: function(t) {
    return t.type === "keypress" ? ls(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }
}), Hb = Jt(Lb), kb = it({}, go, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
}), $f = Jt(kb), Gb = it({}, ml, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: pc
}), Yb = Jt(Gb), qb = it({}, si, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), Xb = Jt(qb), Zb = it({}, go, {
  deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  },
  deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Qb = Jt(Zb), Kb = it({}, si, {
  newState: 0,
  oldState: 0
}), Pb = Jt(Kb), Jb = [9, 13, 27, 32], gc = Fe && "CompositionEvent" in window, wa = null;
Fe && "documentMode" in document && (wa = document.documentMode);
var Fb = Fe && "TextEvent" in window && !wa, yp = Fe && (!gc || wa && 8 < wa && 11 >= wa), If = " ", td = !1;
function vp(t, e) {
  switch (t) {
    case "keyup":
      return Jb.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function bp(t) {
  return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
}
var Ti = !1;
function Wb(t, e) {
  switch (t) {
    case "compositionend":
      return bp(e);
    case "keypress":
      return e.which !== 32 ? null : (td = !0, If);
    case "textInput":
      return t = e.data, t === If && td ? null : t;
    default:
      return null;
  }
}
function $b(t, e) {
  if (Ti)
    return t === "compositionend" || !gc && vp(t, e) ? (t = gp(), as = mc = pn = null, Ti = !1, t) : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length)
          return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return yp && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Ib = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function ed(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Ib[t.type] : e === "textarea";
}
function xp(t, e, n, i) {
  Si ? Bi ? Bi.push(i) : Bi = [i] : Si = i, e = Qs(e, "onChange"), 0 < e.length && (n = new po(
    "onChange",
    "change",
    null,
    n,
    i
  ), t.push({ event: n, listeners: e }));
}
var Ra = null, Ka = null;
function tx(t) {
  dy(t, 0);
}
function yo(t) {
  var e = Ta(t);
  if (cp(e)) return t;
}
function nd(t, e) {
  if (t === "change") return e;
}
var Sp = !1;
if (Fe) {
  var Zo;
  if (Fe) {
    var Qo = "oninput" in document;
    if (!Qo) {
      var id = document.createElement("div");
      id.setAttribute("oninput", "return;"), Qo = typeof id.oninput == "function";
    }
    Zo = Qo;
  } else Zo = !1;
  Sp = Zo && (!document.documentMode || 9 < document.documentMode);
}
function ad() {
  Ra && (Ra.detachEvent("onpropertychange", Tp), Ka = Ra = null);
}
function Tp(t) {
  if (t.propertyName === "value" && yo(Ka)) {
    var e = [];
    xp(
      e,
      Ka,
      t,
      hc(t)
    ), pp(tx, e);
  }
}
function ex(t, e, n) {
  t === "focusin" ? (ad(), Ra = e, Ka = n, Ra.attachEvent("onpropertychange", Tp)) : t === "focusout" && ad();
}
function nx(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return yo(Ka);
}
function ix(t, e) {
  if (t === "click") return yo(e);
}
function ax(t, e) {
  if (t === "input" || t === "change")
    return yo(e);
}
function lx(t, e) {
  return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
}
var ae = typeof Object.is == "function" ? Object.is : lx;
function Pa(t, e) {
  if (ae(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t), i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var a = n[i];
    if (!kr.call(e, a) || !ae(t[a], e[a]))
      return !1;
  }
  return !0;
}
function ld(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function sd(t, e) {
  var n = ld(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (i = t + n.textContent.length, t <= e && i >= e)
        return { node: n, offset: e - t };
      t = i;
    }
    t: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break t;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ld(n);
  }
}
function Ap(t, e) {
  return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ap(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Ep(t) {
  t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
  for (var e = Rs(t.document); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Rs(t.document);
  }
  return e;
}
function yc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
}
var sx = Fe && "documentMode" in document && 11 >= document.documentMode, Ai = null, Qr = null, Ca = null, Kr = !1;
function od(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kr || Ai == null || Ai !== Rs(i) || (i = Ai, "selectionStart" in i && yc(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
    anchorNode: i.anchorNode,
    anchorOffset: i.anchorOffset,
    focusNode: i.focusNode,
    focusOffset: i.focusOffset
  }), Ca && Pa(Ca, i) || (Ca = i, i = Qs(Qr, "onSelect"), 0 < i.length && (e = new po(
    "onSelect",
    "select",
    null,
    e,
    n
  ), t.push({ event: e, listeners: i }), e.target = Ai)));
}
function jn(t, e) {
  var n = {};
  return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
}
var Ei = {
  animationend: jn("Animation", "AnimationEnd"),
  animationiteration: jn("Animation", "AnimationIteration"),
  animationstart: jn("Animation", "AnimationStart"),
  transitionrun: jn("Transition", "TransitionRun"),
  transitionstart: jn("Transition", "TransitionStart"),
  transitioncancel: jn("Transition", "TransitionCancel"),
  transitionend: jn("Transition", "TransitionEnd")
}, Ko = {}, Mp = {};
Fe && (Mp = document.createElement("div").style, "AnimationEvent" in window || (delete Ei.animationend.animation, delete Ei.animationiteration.animation, delete Ei.animationstart.animation), "TransitionEvent" in window || delete Ei.transitionend.transition);
function oi(t) {
  if (Ko[t]) return Ko[t];
  if (!Ei[t]) return t;
  var e = Ei[t], n;
  for (n in e)
    if (e.hasOwnProperty(n) && n in Mp)
      return Ko[t] = e[n];
  return t;
}
var Dp = oi("animationend"), wp = oi("animationiteration"), Rp = oi("animationstart"), ox = oi("transitionrun"), rx = oi("transitionstart"), ux = oi("transitioncancel"), Cp = oi("transitionend"), Op = /* @__PURE__ */ new Map(), Pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
  " "
);
Pr.push("scrollEnd");
function Te(t, e) {
  Op.set(t, e), li(e, [t]);
}
var rd = /* @__PURE__ */ new WeakMap();
function ce(t, e) {
  if (typeof t == "object" && t !== null) {
    var n = rd.get(t);
    return n !== void 0 ? n : (e = {
      value: t,
      source: e,
      stack: Qf(e)
    }, rd.set(t, e), e);
  }
  return {
    value: t,
    source: e,
    stack: Qf(e)
  };
}
var le = [], Mi = 0, vc = 0;
function vo() {
  for (var t = Mi, e = vc = Mi = 0; e < t; ) {
    var n = le[e];
    le[e++] = null;
    var i = le[e];
    le[e++] = null;
    var a = le[e];
    le[e++] = null;
    var l = le[e];
    if (le[e++] = null, i !== null && a !== null) {
      var s = i.pending;
      s === null ? a.next = a : (a.next = s.next, s.next = a), i.pending = a;
    }
    l !== 0 && zp(n, a, l);
  }
}
function bo(t, e, n, i) {
  le[Mi++] = t, le[Mi++] = e, le[Mi++] = n, le[Mi++] = i, vc |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
}
function bc(t, e, n, i) {
  return bo(t, e, n, i), Cs(t);
}
function ia(t, e) {
  return bo(t, null, null, e), Cs(t);
}
function zp(t, e, n) {
  t.lanes |= n;
  var i = t.alternate;
  i !== null && (i.lanes |= n);
  for (var a = !1, l = t.return; l !== null; )
    l.childLanes |= n, i = l.alternate, i !== null && (i.childLanes |= n), l.tag === 22 && (t = l.stateNode, t === null || t._visibility & 1 || (a = !0)), t = l, l = l.return;
  return t.tag === 3 ? (l = t.stateNode, a && e !== null && (a = 31 - ee(n), t = l.hiddenUpdates, i = t[a], i === null ? t[a] = [e] : i.push(e), e.lane = n | 536870912), l) : null;
}
function Cs(t) {
  if (50 < Ha)
    throw Ha = 0, pu = null, Error(E(185));
  for (var e = t.return; e !== null; )
    t = e, e = t.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Di = {};
function cx(t, e, n, i) {
  this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function It(t, e, n, i) {
  return new cx(t, e, n, i);
}
function xc(t) {
  return t = t.prototype, !(!t || !t.isReactComponent);
}
function Pe(t, e) {
  var n = t.alternate;
  return n === null ? (n = It(
    t.tag,
    e,
    t.key,
    t.mode
  ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
}
function Vp(t, e) {
  t.flags &= 65011714;
  var n = t.alternate;
  return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
    lanes: e.lanes,
    firstContext: e.firstContext
  }), t;
}
function ss(t, e, n, i, a, l) {
  var s = 0;
  if (i = t, typeof t == "function") xc(t) && (s = 1);
  else if (typeof t == "string")
    s = d1(
      t,
      n,
      Ce.current
    ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
  else
    t: switch (t) {
      case Nr:
        return t = It(31, n, e, a), t.elementType = Nr, t.lanes = l, t;
      case vi:
        return Kn(n.children, a, l, e);
      case Wm:
        s = 8, a |= 24;
        break;
      case Ur:
        return t = It(12, n, e, a | 2), t.elementType = Ur, t.lanes = l, t;
      case _r:
        return t = It(13, n, e, a), t.elementType = _r, t.lanes = l, t;
      case Br:
        return t = It(19, n, e, a), t.elementType = Br, t.lanes = l, t;
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case tb:
            case qe:
              s = 10;
              break t;
            case $m:
              s = 9;
              break t;
            case sc:
              s = 11;
              break t;
            case oc:
              s = 14;
              break t;
            case on:
              s = 16, i = null;
              break t;
          }
        s = 29, n = Error(
          E(130, t === null ? "null" : typeof t, "")
        ), i = null;
    }
  return e = It(s, n, e, a), e.elementType = t, e.type = i, e.lanes = l, e;
}
function Kn(t, e, n, i) {
  return t = It(7, t, i, e), t.lanes = n, t;
}
function Po(t, e, n) {
  return t = It(6, t, null, e), t.lanes = n, t;
}
function Jo(t, e, n) {
  return e = It(
    4,
    t.children !== null ? t.children : [],
    t.key,
    e
  ), e.lanes = n, e.stateNode = {
    containerInfo: t.containerInfo,
    pendingChildren: null,
    implementation: t.implementation
  }, e;
}
var wi = [], Ri = 0, Os = null, zs = 0, oe = [], re = 0, Pn = null, Xe = 1, Ze = "";
function Gn(t, e) {
  wi[Ri++] = zs, wi[Ri++] = Os, Os = t, zs = e;
}
function Up(t, e, n) {
  oe[re++] = Xe, oe[re++] = Ze, oe[re++] = Pn, Pn = t;
  var i = Xe;
  t = Ze;
  var a = 32 - ee(i) - 1;
  i &= ~(1 << a), n += 1;
  var l = 32 - ee(e) + a;
  if (30 < l) {
    var s = a - a % 5;
    l = (i & (1 << s) - 1).toString(32), i >>= s, a -= s, Xe = 1 << 32 - ee(e) + a | n << a | i, Ze = l + t;
  } else
    Xe = 1 << l | n << a | i, Ze = t;
}
function Sc(t) {
  t.return !== null && (Gn(t, 1), Up(t, 1, 0));
}
function Tc(t) {
  for (; t === Os; )
    Os = wi[--Ri], wi[Ri] = null, zs = wi[--Ri], wi[Ri] = null;
  for (; t === Pn; )
    Pn = oe[--re], oe[re] = null, Ze = oe[--re], oe[re] = null, Xe = oe[--re], oe[re] = null;
}
var Lt = null, ut = null, K = !1, Jn = null, we = !1, Jr = Error(E(519));
function ei(t) {
  var e = Error(E(418, ""));
  throw Ja(ce(e, t)), Jr;
}
function ud(t) {
  var e = t.stateNode, n = t.type, i = t.memoizedProps;
  switch (e[_t] = t, e[Pt] = i, n) {
    case "dialog":
      q("cancel", e), q("close", e);
      break;
    case "iframe":
    case "object":
    case "embed":
      q("load", e);
      break;
    case "video":
    case "audio":
      for (n = 0; n < $a.length; n++)
        q($a[n], e);
      break;
    case "source":
      q("error", e);
      break;
    case "img":
    case "image":
    case "link":
      q("error", e), q("load", e);
      break;
    case "details":
      q("toggle", e);
      break;
    case "input":
      q("invalid", e), fp(
        e,
        i.value,
        i.defaultValue,
        i.checked,
        i.defaultChecked,
        i.type,
        i.name,
        !0
      ), ws(e);
      break;
    case "select":
      q("invalid", e);
      break;
    case "textarea":
      q("invalid", e), hp(e, i.value, i.defaultValue, i.children), ws(e);
  }
  n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || my(e.textContent, n) ? (i.popover != null && (q("beforetoggle", e), q("toggle", e)), i.onScroll != null && q("scroll", e), i.onScrollEnd != null && q("scrollend", e), i.onClick != null && (e.onclick = wo), e = !0) : e = !1, e || ei(t);
}
function cd(t) {
  for (Lt = t.return; Lt; )
    switch (Lt.tag) {
      case 5:
      case 13:
        we = !1;
        return;
      case 27:
      case 3:
        we = !0;
        return;
      default:
        Lt = Lt.return;
    }
}
function ha(t) {
  if (t !== Lt) return !1;
  if (!K) return cd(t), K = !0, !1;
  var e = t.tag, n;
  if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Su(t.type, t.memoizedProps)), n = !n), n && ut && ei(t), cd(t), e === 13) {
    if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(E(317));
    t: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8)
          if (n = t.data, n === "/$") {
            if (e === 0) {
              ut = xe(t.nextSibling);
              break t;
            }
            e--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || e++;
        t = t.nextSibling;
      }
      ut = null;
    }
  } else
    e === 27 ? (e = ut, _n(t.type) ? (t = Eu, Eu = null, ut = t) : ut = e) : ut = Lt ? xe(t.stateNode.nextSibling) : null;
  return !0;
}
function pl() {
  ut = Lt = null, K = !1;
}
function fd() {
  var t = Jn;
  return t !== null && (Qt === null ? Qt = t : Qt.push.apply(
    Qt,
    t
  ), Jn = null), t;
}
function Ja(t) {
  Jn === null ? Jn = [t] : Jn.push(t);
}
var Fr = _e(null), ri = null, Qe = null;
function cn(t, e, n) {
  st(Fr, e._currentValue), e._currentValue = n;
}
function Je(t) {
  t._currentValue = Fr.current, wt(Fr);
}
function Wr(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
    t = t.return;
  }
}
function $r(t, e, n, i) {
  var a = t.child;
  for (a !== null && (a.return = t); a !== null; ) {
    var l = a.dependencies;
    if (l !== null) {
      var s = a.child;
      l = l.firstContext;
      t: for (; l !== null; ) {
        var o = l;
        l = a;
        for (var r = 0; r < e.length; r++)
          if (o.context === e[r]) {
            l.lanes |= n, o = l.alternate, o !== null && (o.lanes |= n), Wr(
              l.return,
              n,
              t
            ), i || (s = null);
            break t;
          }
        l = o.next;
      }
    } else if (a.tag === 18) {
      if (s = a.return, s === null) throw Error(E(341));
      s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Wr(s, n, t), s = null;
    } else s = a.child;
    if (s !== null) s.return = a;
    else
      for (s = a; s !== null; ) {
        if (s === t) {
          s = null;
          break;
        }
        if (a = s.sibling, a !== null) {
          a.return = s.return, s = a;
          break;
        }
        s = s.return;
      }
    a = s;
  }
}
function gl(t, e, n, i) {
  t = null;
  for (var a = e, l = !1; a !== null; ) {
    if (!l) {
      if (a.flags & 524288) l = !0;
      else if (a.flags & 262144) break;
    }
    if (a.tag === 10) {
      var s = a.alternate;
      if (s === null) throw Error(E(387));
      if (s = s.memoizedProps, s !== null) {
        var o = a.type;
        ae(a.pendingProps.value, s.value) || (t !== null ? t.push(o) : t = [o]);
      }
    } else if (a === As.current) {
      if (s = a.alternate, s === null) throw Error(E(387));
      s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(el) : t = [el]);
    }
    a = a.return;
  }
  t !== null && $r(
    e,
    t,
    n,
    i
  ), e.flags |= 262144;
}
function Vs(t) {
  for (t = t.firstContext; t !== null; ) {
    if (!ae(
      t.context._currentValue,
      t.memoizedValue
    ))
      return !0;
    t = t.next;
  }
  return !1;
}
function ni(t) {
  ri = t, Qe = null, t = t.dependencies, t !== null && (t.firstContext = null);
}
function Bt(t) {
  return _p(ri, t);
}
function kl(t, e) {
  return ri === null && ni(t), _p(t, e);
}
function _p(t, e) {
  var n = e._currentValue;
  if (e = { context: e, memoizedValue: n, next: null }, Qe === null) {
    if (t === null) throw Error(E(308));
    Qe = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
  } else Qe = Qe.next = e;
  return n;
}
var fx = typeof AbortController < "u" ? AbortController : function() {
  var t = [], e = this.signal = {
    aborted: !1,
    addEventListener: function(n, i) {
      t.push(i);
    }
  };
  this.abort = function() {
    e.aborted = !0, t.forEach(function(n) {
      return n();
    });
  };
}, dx = Tt.unstable_scheduleCallback, hx = Tt.unstable_NormalPriority, xt = {
  $$typeof: qe,
  Consumer: null,
  Provider: null,
  _currentValue: null,
  _currentValue2: null,
  _threadCount: 0
};
function Ac() {
  return {
    controller: new fx(),
    data: /* @__PURE__ */ new Map(),
    refCount: 0
  };
}
function yl(t) {
  t.refCount--, t.refCount === 0 && dx(hx, function() {
    t.controller.abort();
  });
}
var Oa = null, Ir = 0, Xi = 0, Ni = null;
function mx(t, e) {
  if (Oa === null) {
    var n = Oa = [];
    Ir = 0, Xi = Qc(), Ni = {
      status: "pending",
      value: void 0,
      then: function(i) {
        n.push(i);
      }
    };
  }
  return Ir++, e.then(dd, dd), e;
}
function dd() {
  if (--Ir === 0 && Oa !== null) {
    Ni !== null && (Ni.status = "fulfilled");
    var t = Oa;
    Oa = null, Xi = 0, Ni = null;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
}
function px(t, e) {
  var n = [], i = {
    status: "pending",
    value: null,
    reason: null,
    then: function(a) {
      n.push(a);
    }
  };
  return t.then(
    function() {
      i.status = "fulfilled", i.value = e;
      for (var a = 0; a < n.length; a++) (0, n[a])(e);
    },
    function(a) {
      for (i.status = "rejected", i.reason = a, a = 0; a < n.length; a++)
        (0, n[a])(void 0);
    }
  ), i;
}
var hd = B.S;
B.S = function(t, e) {
  typeof e == "object" && e !== null && typeof e.then == "function" && mx(t, e), hd !== null && hd(t, e);
};
var Fn = _e(null);
function Ec() {
  var t = Fn.current;
  return t !== null ? t : nt.pooledCache;
}
function os(t, e) {
  e === null ? st(Fn, Fn.current) : st(Fn, e.pool);
}
function Bp() {
  var t = Ec();
  return t === null ? null : { parent: xt._currentValue, pool: t };
}
var vl = Error(E(460)), Np = Error(E(474)), xo = Error(E(542)), tu = { then: function() {
} };
function md(t) {
  return t = t.status, t === "fulfilled" || t === "rejected";
}
function Gl() {
}
function jp(t, e, n) {
  switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Gl, Gl), e = n), e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw t = e.reason, gd(t), t;
    default:
      if (typeof e.status == "string") e.then(Gl, Gl);
      else {
        if (t = nt, t !== null && 100 < t.shellSuspendCounter)
          throw Error(E(482));
        t = e, t.status = "pending", t.then(
          function(i) {
            if (e.status === "pending") {
              var a = e;
              a.status = "fulfilled", a.value = i;
            }
          },
          function(i) {
            if (e.status === "pending") {
              var a = e;
              a.status = "rejected", a.reason = i;
            }
          }
        );
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, gd(t), t;
      }
      throw za = e, vl;
  }
}
var za = null;
function pd() {
  if (za === null) throw Error(E(459));
  var t = za;
  return za = null, t;
}
function gd(t) {
  if (t === vl || t === xo)
    throw Error(E(483));
}
var rn = !1;
function Mc(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function eu(t, e) {
  t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
    baseState: t.baseState,
    firstBaseUpdate: t.firstBaseUpdate,
    lastBaseUpdate: t.lastBaseUpdate,
    shared: t.shared,
    callbacks: null
  });
}
function xn(t) {
  return { lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Sn(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (i = i.shared, F & 2) {
    var a = i.pending;
    return a === null ? e.next = e : (e.next = a.next, a.next = e), i.pending = e, e = Cs(t), zp(t, null, n), e;
  }
  return bo(t, i, e, n), Cs(t);
}
function Va(t, e, n) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
    var i = e.lanes;
    i &= t.pendingLanes, n |= i, e.lanes = n, lp(t, n);
  }
}
function Fo(t, e) {
  var n = t.updateQueue, i = t.alternate;
  if (i !== null && (i = i.updateQueue, n === i)) {
    var a = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = {
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: null,
          next: null
        };
        l === null ? a = l = s : l = l.next = s, n = n.next;
      } while (n !== null);
      l === null ? a = l = e : l = l.next = e;
    } else a = l = e;
    n = {
      baseState: i.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: l,
      shared: i.shared,
      callbacks: i.callbacks
    }, t.updateQueue = n;
    return;
  }
  t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
}
var nu = !1;
function Ua() {
  if (nu) {
    var t = Ni;
    if (t !== null) throw t;
  }
}
function _a(t, e, n, i) {
  nu = !1;
  var a = t.updateQueue;
  rn = !1;
  var l = a.firstBaseUpdate, s = a.lastBaseUpdate, o = a.shared.pending;
  if (o !== null) {
    a.shared.pending = null;
    var r = o, u = r.next;
    r.next = null, s === null ? l = u : s.next = u, s = r;
    var c = t.alternate;
    c !== null && (c = c.updateQueue, o = c.lastBaseUpdate, o !== s && (o === null ? c.firstBaseUpdate = u : o.next = u, c.lastBaseUpdate = r));
  }
  if (l !== null) {
    var d = a.baseState;
    s = 0, c = u = r = null, o = l;
    do {
      var f = o.lane & -536870913, h = f !== o.lane;
      if (h ? (Z & f) === f : (i & f) === f) {
        f !== 0 && f === Xi && (nu = !0), c !== null && (c = c.next = {
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: null,
          next: null
        });
        t: {
          var v = t, x = o;
          f = e;
          var S = n;
          switch (x.tag) {
            case 1:
              if (v = x.payload, typeof v == "function") {
                d = v.call(S, d, f);
                break t;
              }
              d = v;
              break t;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = x.payload, f = typeof v == "function" ? v.call(S, d, f) : v, f == null) break t;
              d = it({}, d, f);
              break t;
            case 2:
              rn = !0;
          }
        }
        f = o.callback, f !== null && (t.flags |= 64, h && (t.flags |= 8192), h = a.callbacks, h === null ? a.callbacks = [f] : h.push(f));
      } else
        h = {
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        }, c === null ? (u = c = h, r = d) : c = c.next = h, s |= f;
      if (o = o.next, o === null) {
        if (o = a.shared.pending, o === null)
          break;
        h = o, o = h.next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null;
      }
    } while (!0);
    c === null && (r = d), a.baseState = r, a.firstBaseUpdate = u, a.lastBaseUpdate = c, l === null && (a.shared.lanes = 0), Cn |= s, t.lanes = s, t.memoizedState = d;
  }
}
function Lp(t, e) {
  if (typeof t != "function")
    throw Error(E(191, t));
  t.call(e);
}
function Hp(t, e) {
  var n = t.callbacks;
  if (n !== null)
    for (t.callbacks = null, t = 0; t < n.length; t++)
      Lp(n[t], e);
}
var Zi = _e(null), Us = _e(0);
function yd(t, e) {
  t = Ie, st(Us, t), st(Zi, e), Ie = t | e.baseLanes;
}
function iu() {
  st(Us, Ie), st(Zi, Zi.current);
}
function Dc() {
  Ie = Us.current, wt(Zi), wt(Us);
}
var wn = 0, G = null, $ = null, gt = null, _s = !1, ji = !1, ii = !1, Bs = 0, Fa = 0, Li = null, gx = 0;
function ft() {
  throw Error(E(321));
}
function wc(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ae(t[n], e[n])) return !1;
  return !0;
}
function Rc(t, e, n, i, a, l) {
  return wn = l, G = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t === null || t.memoizedState === null ? gg : yg, ii = !1, l = n(i, a), ii = !1, ji && (l = Gp(
    e,
    n,
    i,
    a
  )), kp(t), l;
}
function kp(t) {
  B.H = Ns;
  var e = $ !== null && $.next !== null;
  if (wn = 0, gt = $ = G = null, _s = !1, Fa = 0, Li = null, e) throw Error(E(300));
  t === null || Dt || (t = t.dependencies, t !== null && Vs(t) && (Dt = !0));
}
function Gp(t, e, n, i) {
  G = t;
  var a = 0;
  do {
    if (ji && (Li = null), Fa = 0, ji = !1, 25 <= a) throw Error(E(301));
    if (a += 1, gt = $ = null, t.updateQueue != null) {
      var l = t.updateQueue;
      l.lastEffect = null, l.events = null, l.stores = null, l.memoCache != null && (l.memoCache.index = 0);
    }
    B.H = Ax, l = e(n, i);
  } while (ji);
  return l;
}
function yx() {
  var t = B.H, e = t.useState()[0];
  return e = typeof e.then == "function" ? bl(e) : e, t = t.useState()[0], ($ !== null ? $.memoizedState : null) !== t && (G.flags |= 1024), e;
}
function Cc() {
  var t = Bs !== 0;
  return Bs = 0, t;
}
function Oc(t, e, n) {
  e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
}
function zc(t) {
  if (_s) {
    for (t = t.memoizedState; t !== null; ) {
      var e = t.queue;
      e !== null && (e.pending = null), t = t.next;
    }
    _s = !1;
  }
  wn = 0, gt = $ = G = null, ji = !1, Fa = Bs = 0, Li = null;
}
function Xt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return gt === null ? G.memoizedState = gt = t : gt = gt.next = t, gt;
}
function yt() {
  if ($ === null) {
    var t = G.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = $.next;
  var e = gt === null ? G.memoizedState : gt.next;
  if (e !== null)
    gt = e, $ = t;
  else {
    if (t === null)
      throw G.alternate === null ? Error(E(467)) : Error(E(310));
    $ = t, t = {
      memoizedState: $.memoizedState,
      baseState: $.baseState,
      baseQueue: $.baseQueue,
      queue: $.queue,
      next: null
    }, gt === null ? G.memoizedState = gt = t : gt = gt.next = t;
  }
  return gt;
}
function Vc() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function bl(t) {
  var e = Fa;
  return Fa += 1, Li === null && (Li = []), t = jp(Li, t, e), e = G, (gt === null ? e.memoizedState : gt.next) === null && (e = e.alternate, B.H = e === null || e.memoizedState === null ? gg : yg), t;
}
function So(t) {
  if (t !== null && typeof t == "object") {
    if (typeof t.then == "function") return bl(t);
    if (t.$$typeof === qe) return Bt(t);
  }
  throw Error(E(438, String(t)));
}
function Uc(t) {
  var e = null, n = G.updateQueue;
  if (n !== null && (e = n.memoCache), e == null) {
    var i = G.alternate;
    i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
      data: i.data.map(function(a) {
        return a.slice();
      }),
      index: 0
    })));
  }
  if (e == null && (e = { data: [], index: 0 }), n === null && (n = Vc(), G.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
    for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
      n[i] = eb;
  return e.index++, n;
}
function We(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function rs(t) {
  var e = yt();
  return _c(e, $, t);
}
function _c(t, e, n) {
  var i = t.queue;
  if (i === null) throw Error(E(311));
  i.lastRenderedReducer = n;
  var a = t.baseQueue, l = i.pending;
  if (l !== null) {
    if (a !== null) {
      var s = a.next;
      a.next = l.next, l.next = s;
    }
    e.baseQueue = a = l, i.pending = null;
  }
  if (l = t.baseState, a === null) t.memoizedState = l;
  else {
    e = a.next;
    var o = s = null, r = null, u = e, c = !1;
    do {
      var d = u.lane & -536870913;
      if (d !== u.lane ? (Z & d) === d : (wn & d) === d) {
        var f = u.revertLane;
        if (f === 0)
          r !== null && (r = r.next = {
            lane: 0,
            revertLane: 0,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }), d === Xi && (c = !0);
        else if ((wn & f) === f) {
          u = u.next, f === Xi && (c = !0);
          continue;
        } else
          d = {
            lane: 0,
            revertLane: u.revertLane,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          }, r === null ? (o = r = d, s = l) : r = r.next = d, G.lanes |= f, Cn |= f;
        d = u.action, ii && n(l, d), l = u.hasEagerState ? u.eagerState : n(l, d);
      } else
        f = {
          lane: d,
          revertLane: u.revertLane,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }, r === null ? (o = r = f, s = l) : r = r.next = f, G.lanes |= d, Cn |= d;
      u = u.next;
    } while (u !== null && u !== e);
    if (r === null ? s = l : r.next = o, !ae(l, t.memoizedState) && (Dt = !0, c && (n = Ni, n !== null)))
      throw n;
    t.memoizedState = l, t.baseState = s, t.baseQueue = r, i.lastRenderedState = l;
  }
  return a === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
}
function Wo(t) {
  var e = yt(), n = e.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch, a = n.pending, l = e.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      l = t(l, s.action), s = s.next;
    while (s !== a);
    ae(l, e.memoizedState) || (Dt = !0), e.memoizedState = l, e.baseQueue === null && (e.baseState = l), n.lastRenderedState = l;
  }
  return [l, i];
}
function Yp(t, e, n) {
  var i = G, a = yt(), l = K;
  if (l) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else n = e();
  var s = !ae(
    ($ || a).memoizedState,
    n
  );
  s && (a.memoizedState = n, Dt = !0), a = a.queue;
  var o = Zp.bind(null, i, a, t);
  if (xl(2048, 8, o, [t]), a.getSnapshot !== e || s || gt !== null && gt.memoizedState.tag & 1) {
    if (i.flags |= 2048, Qi(
      9,
      To(),
      Xp.bind(
        null,
        i,
        a,
        n,
        e
      ),
      null
    ), nt === null) throw Error(E(349));
    l || wn & 124 || qp(i, e, n);
  }
  return n;
}
function qp(t, e, n) {
  t.flags |= 16384, t = { getSnapshot: e, value: n }, e = G.updateQueue, e === null ? (e = Vc(), G.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
}
function Xp(t, e, n, i) {
  e.value = n, e.getSnapshot = i, Qp(e) && Kp(t);
}
function Zp(t, e, n) {
  return n(function() {
    Qp(e) && Kp(t);
  });
}
function Qp(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ae(t, n);
  } catch {
    return !0;
  }
}
function Kp(t) {
  var e = ia(t, 2);
  e !== null && ie(e, t, 2);
}
function au(t) {
  var e = Xt();
  if (typeof t == "function") {
    var n = t;
    if (t = n(), ii) {
      mn(!0);
      try {
        n();
      } finally {
        mn(!1);
      }
    }
  }
  return e.memoizedState = e.baseState = t, e.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: We,
    lastRenderedState: t
  }, e;
}
function Pp(t, e, n, i) {
  return t.baseState = n, _c(
    t,
    $,
    typeof i == "function" ? i : We
  );
}
function vx(t, e, n, i, a) {
  if (Ao(t)) throw Error(E(485));
  if (t = e.action, t !== null) {
    var l = {
      payload: a,
      action: t,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function(s) {
        l.listeners.push(s);
      }
    };
    B.T !== null ? n(!0) : l.isTransition = !1, i(l), n = e.pending, n === null ? (l.next = e.pending = l, Jp(e, l)) : (l.next = n.next, e.pending = n.next = l);
  }
}
function Jp(t, e) {
  var n = e.action, i = e.payload, a = t.state;
  if (e.isTransition) {
    var l = B.T, s = {};
    B.T = s;
    try {
      var o = n(a, i), r = B.S;
      r !== null && r(s, o), vd(t, e, o);
    } catch (u) {
      lu(t, e, u);
    } finally {
      B.T = l;
    }
  } else
    try {
      l = n(a, i), vd(t, e, l);
    } catch (u) {
      lu(t, e, u);
    }
}
function vd(t, e, n) {
  n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
    function(i) {
      bd(t, e, i);
    },
    function(i) {
      return lu(t, e, i);
    }
  ) : bd(t, e, n);
}
function bd(t, e, n) {
  e.status = "fulfilled", e.value = n, Fp(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Jp(t, n)));
}
function lu(t, e, n) {
  var i = t.pending;
  if (t.pending = null, i !== null) {
    i = i.next;
    do
      e.status = "rejected", e.reason = n, Fp(e), e = e.next;
    while (e !== i);
  }
  t.action = null;
}
function Fp(t) {
  t = t.listeners;
  for (var e = 0; e < t.length; e++) (0, t[e])();
}
function Wp(t, e) {
  return e;
}
function xd(t, e) {
  if (K) {
    var n = nt.formState;
    if (n !== null) {
      t: {
        var i = G;
        if (K) {
          if (ut) {
            e: {
              for (var a = ut, l = we; a.nodeType !== 8; ) {
                if (!l) {
                  a = null;
                  break e;
                }
                if (a = xe(
                  a.nextSibling
                ), a === null) {
                  a = null;
                  break e;
                }
              }
              l = a.data, a = l === "F!" || l === "F" ? a : null;
            }
            if (a) {
              ut = xe(
                a.nextSibling
              ), i = a.data === "F!";
              break t;
            }
          }
          ei(i);
        }
        i = !1;
      }
      i && (e = n[0]);
    }
  }
  return n = Xt(), n.memoizedState = n.baseState = e, i = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: Wp,
    lastRenderedState: e
  }, n.queue = i, n = hg.bind(
    null,
    G,
    i
  ), i.dispatch = n, i = au(!1), l = Lc.bind(
    null,
    G,
    !1,
    i.queue
  ), i = Xt(), a = {
    state: e,
    dispatch: null,
    action: t,
    pending: null
  }, i.queue = a, n = vx.bind(
    null,
    G,
    a,
    l,
    n
  ), a.dispatch = n, i.memoizedState = t, [e, n, !1];
}
function Sd(t) {
  var e = yt();
  return $p(e, $, t);
}
function $p(t, e, n) {
  if (e = _c(
    t,
    e,
    Wp
  )[0], t = rs(We)[0], typeof e == "object" && e !== null && typeof e.then == "function")
    try {
      var i = bl(e);
    } catch (s) {
      throw s === vl ? xo : s;
    }
  else i = e;
  e = yt();
  var a = e.queue, l = a.dispatch;
  return n !== e.memoizedState && (G.flags |= 2048, Qi(
    9,
    To(),
    bx.bind(null, a, n),
    null
  )), [i, l, t];
}
function bx(t, e) {
  t.action = e;
}
function Td(t) {
  var e = yt(), n = $;
  if (n !== null)
    return $p(e, n, t);
  yt(), e = e.memoizedState, n = yt();
  var i = n.queue.dispatch;
  return n.memoizedState = t, [e, i, !1];
}
function Qi(t, e, n, i) {
  return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = G.updateQueue, e === null && (e = Vc(), G.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
}
function To() {
  return { destroy: void 0, resource: void 0 };
}
function Ip() {
  return yt().memoizedState;
}
function us(t, e, n, i) {
  var a = Xt();
  i = i === void 0 ? null : i, G.flags |= t, a.memoizedState = Qi(
    1 | e,
    To(),
    n,
    i
  );
}
function xl(t, e, n, i) {
  var a = yt();
  i = i === void 0 ? null : i;
  var l = a.memoizedState.inst;
  $ !== null && i !== null && wc(i, $.memoizedState.deps) ? a.memoizedState = Qi(e, l, n, i) : (G.flags |= t, a.memoizedState = Qi(
    1 | e,
    l,
    n,
    i
  ));
}
function Ad(t, e) {
  us(8390656, 8, t, e);
}
function tg(t, e) {
  xl(2048, 8, t, e);
}
function eg(t, e) {
  return xl(4, 2, t, e);
}
function ng(t, e) {
  return xl(4, 4, t, e);
}
function ig(t, e) {
  if (typeof e == "function") {
    t = t();
    var n = e(t);
    return function() {
      typeof n == "function" ? n() : e(null);
    };
  }
  if (e != null)
    return t = t(), e.current = t, function() {
      e.current = null;
    };
}
function ag(t, e, n) {
  n = n != null ? n.concat([t]) : null, xl(4, 4, ig.bind(null, e, t), n);
}
function Bc() {
}
function lg(t, e) {
  var n = yt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return e !== null && wc(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
}
function sg(t, e) {
  var n = yt();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  if (e !== null && wc(e, i[1]))
    return i[0];
  if (i = t(), ii) {
    mn(!0);
    try {
      t();
    } finally {
      mn(!1);
    }
  }
  return n.memoizedState = [i, e], i;
}
function Nc(t, e, n) {
  return n === void 0 || wn & 1073741824 ? t.memoizedState = e : (t.memoizedState = n, t = Fg(), G.lanes |= t, Cn |= t, n);
}
function og(t, e, n, i) {
  return ae(n, e) ? n : Zi.current !== null ? (t = Nc(t, n, i), ae(t, e) || (Dt = !0), t) : wn & 42 ? (t = Fg(), G.lanes |= t, Cn |= t, e) : (Dt = !0, t.memoizedState = n);
}
function rg(t, e, n, i, a) {
  var l = P.p;
  P.p = l !== 0 && 8 > l ? l : 8;
  var s = B.T, o = {};
  B.T = o, Lc(t, !1, e, n);
  try {
    var r = a(), u = B.S;
    if (u !== null && u(o, r), r !== null && typeof r == "object" && typeof r.then == "function") {
      var c = px(
        r,
        i
      );
      Ba(
        t,
        e,
        c,
        ne(t)
      );
    } else
      Ba(
        t,
        e,
        i,
        ne(t)
      );
  } catch (d) {
    Ba(
      t,
      e,
      { then: function() {
      }, status: "rejected", reason: d },
      ne()
    );
  } finally {
    P.p = l, B.T = s;
  }
}
function xx() {
}
function su(t, e, n, i) {
  if (t.tag !== 5) throw Error(E(476));
  var a = ug(t).queue;
  rg(
    t,
    a,
    e,
    Qn,
    n === null ? xx : function() {
      return cg(t), n(i);
    }
  );
}
function ug(t) {
  var e = t.memoizedState;
  if (e !== null) return e;
  e = {
    memoizedState: Qn,
    baseState: Qn,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: We,
      lastRenderedState: Qn
    },
    next: null
  };
  var n = {};
  return e.next = {
    memoizedState: n,
    baseState: n,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: We,
      lastRenderedState: n
    },
    next: null
  }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
}
function cg(t) {
  var e = ug(t).next.queue;
  Ba(t, e, {}, ne());
}
function jc() {
  return Bt(el);
}
function fg() {
  return yt().memoizedState;
}
function dg() {
  return yt().memoizedState;
}
function Sx(t) {
  for (var e = t.return; e !== null; ) {
    switch (e.tag) {
      case 24:
      case 3:
        var n = ne();
        t = xn(n);
        var i = Sn(e, t, n);
        i !== null && (ie(i, e, n), Va(i, e, n)), e = { cache: Ac() }, t.payload = e;
        return;
    }
    e = e.return;
  }
}
function Tx(t, e, n) {
  var i = ne();
  n = {
    lane: i,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, Ao(t) ? mg(e, n) : (n = bc(t, e, n, i), n !== null && (ie(n, t, i), pg(n, e, i)));
}
function hg(t, e, n) {
  var i = ne();
  Ba(t, e, n, i);
}
function Ba(t, e, n, i) {
  var a = {
    lane: i,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (Ao(t)) mg(e, a);
  else {
    var l = t.alternate;
    if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer, l !== null))
      try {
        var s = e.lastRenderedState, o = l(s, n);
        if (a.hasEagerState = !0, a.eagerState = o, ae(o, s))
          return bo(t, e, a, 0), nt === null && vo(), !1;
      } catch {
      } finally {
      }
    if (n = bc(t, e, a, i), n !== null)
      return ie(n, t, i), pg(n, e, i), !0;
  }
  return !1;
}
function Lc(t, e, n, i) {
  if (i = {
    lane: 2,
    revertLane: Qc(),
    action: i,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, Ao(t)) {
    if (e) throw Error(E(479));
  } else
    e = bc(
      t,
      n,
      i,
      2
    ), e !== null && ie(e, t, 2);
}
function Ao(t) {
  var e = t.alternate;
  return t === G || e !== null && e === G;
}
function mg(t, e) {
  ji = _s = !0;
  var n = t.pending;
  n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
}
function pg(t, e, n) {
  if (n & 4194048) {
    var i = e.lanes;
    i &= t.pendingLanes, n |= i, e.lanes = n, lp(t, n);
  }
}
var Ns = {
  readContext: Bt,
  use: So,
  useCallback: ft,
  useContext: ft,
  useEffect: ft,
  useImperativeHandle: ft,
  useLayoutEffect: ft,
  useInsertionEffect: ft,
  useMemo: ft,
  useReducer: ft,
  useRef: ft,
  useState: ft,
  useDebugValue: ft,
  useDeferredValue: ft,
  useTransition: ft,
  useSyncExternalStore: ft,
  useId: ft,
  useHostTransitionStatus: ft,
  useFormState: ft,
  useActionState: ft,
  useOptimistic: ft,
  useMemoCache: ft,
  useCacheRefresh: ft
}, gg = {
  readContext: Bt,
  use: So,
  useCallback: function(t, e) {
    return Xt().memoizedState = [
      t,
      e === void 0 ? null : e
    ], t;
  },
  useContext: Bt,
  useEffect: Ad,
  useImperativeHandle: function(t, e, n) {
    n = n != null ? n.concat([t]) : null, us(
      4194308,
      4,
      ig.bind(null, e, t),
      n
    );
  },
  useLayoutEffect: function(t, e) {
    return us(4194308, 4, t, e);
  },
  useInsertionEffect: function(t, e) {
    us(4, 2, t, e);
  },
  useMemo: function(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var i = t();
    if (ii) {
      mn(!0);
      try {
        t();
      } finally {
        mn(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  },
  useReducer: function(t, e, n) {
    var i = Xt();
    if (n !== void 0) {
      var a = n(e);
      if (ii) {
        mn(!0);
        try {
          n(e);
        } finally {
          mn(!1);
        }
      }
    } else a = e;
    return i.memoizedState = i.baseState = a, t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: t,
      lastRenderedState: a
    }, i.queue = t, t = t.dispatch = Tx.bind(
      null,
      G,
      t
    ), [i.memoizedState, t];
  },
  useRef: function(t) {
    var e = Xt();
    return t = { current: t }, e.memoizedState = t;
  },
  useState: function(t) {
    t = au(t);
    var e = t.queue, n = hg.bind(null, G, e);
    return e.dispatch = n, [t.memoizedState, n];
  },
  useDebugValue: Bc,
  useDeferredValue: function(t, e) {
    var n = Xt();
    return Nc(n, t, e);
  },
  useTransition: function() {
    var t = au(!1);
    return t = rg.bind(
      null,
      G,
      t.queue,
      !0,
      !1
    ), Xt().memoizedState = t, [!1, t];
  },
  useSyncExternalStore: function(t, e, n) {
    var i = G, a = Xt();
    if (K) {
      if (n === void 0)
        throw Error(E(407));
      n = n();
    } else {
      if (n = e(), nt === null)
        throw Error(E(349));
      Z & 124 || qp(i, e, n);
    }
    a.memoizedState = n;
    var l = { value: n, getSnapshot: e };
    return a.queue = l, Ad(Zp.bind(null, i, l, t), [
      t
    ]), i.flags |= 2048, Qi(
      9,
      To(),
      Xp.bind(
        null,
        i,
        l,
        n,
        e
      ),
      null
    ), n;
  },
  useId: function() {
    var t = Xt(), e = nt.identifierPrefix;
    if (K) {
      var n = Ze, i = Xe;
      n = (i & ~(1 << 32 - ee(i) - 1)).toString(32) + n, e = "«" + e + "R" + n, n = Bs++, 0 < n && (e += "H" + n.toString(32)), e += "»";
    } else
      n = gx++, e = "«" + e + "r" + n.toString(32) + "»";
    return t.memoizedState = e;
  },
  useHostTransitionStatus: jc,
  useFormState: xd,
  useActionState: xd,
  useOptimistic: function(t) {
    var e = Xt();
    e.memoizedState = e.baseState = t;
    var n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return e.queue = n, e = Lc.bind(
      null,
      G,
      !0,
      n
    ), n.dispatch = e, [t, e];
  },
  useMemoCache: Uc,
  useCacheRefresh: function() {
    return Xt().memoizedState = Sx.bind(
      null,
      G
    );
  }
}, yg = {
  readContext: Bt,
  use: So,
  useCallback: lg,
  useContext: Bt,
  useEffect: tg,
  useImperativeHandle: ag,
  useInsertionEffect: eg,
  useLayoutEffect: ng,
  useMemo: sg,
  useReducer: rs,
  useRef: Ip,
  useState: function() {
    return rs(We);
  },
  useDebugValue: Bc,
  useDeferredValue: function(t, e) {
    var n = yt();
    return og(
      n,
      $.memoizedState,
      t,
      e
    );
  },
  useTransition: function() {
    var t = rs(We)[0], e = yt().memoizedState;
    return [
      typeof t == "boolean" ? t : bl(t),
      e
    ];
  },
  useSyncExternalStore: Yp,
  useId: fg,
  useHostTransitionStatus: jc,
  useFormState: Sd,
  useActionState: Sd,
  useOptimistic: function(t, e) {
    var n = yt();
    return Pp(n, $, t, e);
  },
  useMemoCache: Uc,
  useCacheRefresh: dg
}, Ax = {
  readContext: Bt,
  use: So,
  useCallback: lg,
  useContext: Bt,
  useEffect: tg,
  useImperativeHandle: ag,
  useInsertionEffect: eg,
  useLayoutEffect: ng,
  useMemo: sg,
  useReducer: Wo,
  useRef: Ip,
  useState: function() {
    return Wo(We);
  },
  useDebugValue: Bc,
  useDeferredValue: function(t, e) {
    var n = yt();
    return $ === null ? Nc(n, t, e) : og(
      n,
      $.memoizedState,
      t,
      e
    );
  },
  useTransition: function() {
    var t = Wo(We)[0], e = yt().memoizedState;
    return [
      typeof t == "boolean" ? t : bl(t),
      e
    ];
  },
  useSyncExternalStore: Yp,
  useId: fg,
  useHostTransitionStatus: jc,
  useFormState: Td,
  useActionState: Td,
  useOptimistic: function(t, e) {
    var n = yt();
    return $ !== null ? Pp(n, $, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  },
  useMemoCache: Uc,
  useCacheRefresh: dg
}, Hi = null, Wa = 0;
function Yl(t) {
  var e = Wa;
  return Wa += 1, Hi === null && (Hi = []), jp(Hi, t, e);
}
function ma(t, e) {
  e = e.props.ref, t.ref = e !== void 0 ? e : null;
}
function ql(t, e) {
  throw e.$$typeof === I0 ? Error(E(525)) : (t = Object.prototype.toString.call(e), Error(
    E(
      31,
      t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
    )
  ));
}
function Ed(t) {
  var e = t._init;
  return e(t._payload);
}
function vg(t) {
  function e(p, m) {
    if (t) {
      var g = p.deletions;
      g === null ? (p.deletions = [m], p.flags |= 16) : g.push(m);
    }
  }
  function n(p, m) {
    if (!t) return null;
    for (; m !== null; )
      e(p, m), m = m.sibling;
    return null;
  }
  function i(p) {
    for (var m = /* @__PURE__ */ new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
    return m;
  }
  function a(p, m) {
    return p = Pe(p, m), p.index = 0, p.sibling = null, p;
  }
  function l(p, m, g) {
    return p.index = g, t ? (g = p.alternate, g !== null ? (g = g.index, g < m ? (p.flags |= 67108866, m) : g) : (p.flags |= 67108866, m)) : (p.flags |= 1048576, m);
  }
  function s(p) {
    return t && p.alternate === null && (p.flags |= 67108866), p;
  }
  function o(p, m, g, y) {
    return m === null || m.tag !== 6 ? (m = Po(g, p.mode, y), m.return = p, m) : (m = a(m, g), m.return = p, m);
  }
  function r(p, m, g, y) {
    var T = g.type;
    return T === vi ? c(
      p,
      m,
      g.props.children,
      y,
      g.key
    ) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === on && Ed(T) === m.type) ? (m = a(m, g.props), ma(m, g), m.return = p, m) : (m = ss(
      g.type,
      g.key,
      g.props,
      null,
      p.mode,
      y
    ), ma(m, g), m.return = p, m);
  }
  function u(p, m, g, y) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Jo(g, p.mode, y), m.return = p, m) : (m = a(m, g.children || []), m.return = p, m);
  }
  function c(p, m, g, y, T) {
    return m === null || m.tag !== 7 ? (m = Kn(
      g,
      p.mode,
      y,
      T
    ), m.return = p, m) : (m = a(m, g), m.return = p, m);
  }
  function d(p, m, g) {
    if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
      return m = Po(
        "" + m,
        p.mode,
        g
      ), m.return = p, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bl:
          return g = ss(
            m.type,
            m.key,
            m.props,
            null,
            p.mode,
            g
          ), ma(g, m), g.return = p, g;
        case xa:
          return m = Jo(
            m,
            p.mode,
            g
          ), m.return = p, m;
        case on:
          var y = m._init;
          return m = y(m._payload), d(p, m, g);
      }
      if (Sa(m) || ca(m))
        return m = Kn(
          m,
          p.mode,
          g,
          null
        ), m.return = p, m;
      if (typeof m.then == "function")
        return d(p, Yl(m), g);
      if (m.$$typeof === qe)
        return d(
          p,
          kl(p, m),
          g
        );
      ql(p, m);
    }
    return null;
  }
  function f(p, m, g, y) {
    var T = m !== null ? m.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
      return T !== null ? null : o(p, m, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Bl:
          return g.key === T ? r(p, m, g, y) : null;
        case xa:
          return g.key === T ? u(p, m, g, y) : null;
        case on:
          return T = g._init, g = T(g._payload), f(p, m, g, y);
      }
      if (Sa(g) || ca(g))
        return T !== null ? null : c(p, m, g, y, null);
      if (typeof g.then == "function")
        return f(
          p,
          m,
          Yl(g),
          y
        );
      if (g.$$typeof === qe)
        return f(
          p,
          m,
          kl(p, g),
          y
        );
      ql(p, g);
    }
    return null;
  }
  function h(p, m, g, y, T) {
    if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
      return p = p.get(g) || null, o(m, p, "" + y, T);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Bl:
          return p = p.get(
            y.key === null ? g : y.key
          ) || null, r(m, p, y, T);
        case xa:
          return p = p.get(
            y.key === null ? g : y.key
          ) || null, u(m, p, y, T);
        case on:
          var M = y._init;
          return y = M(y._payload), h(
            p,
            m,
            g,
            y,
            T
          );
      }
      if (Sa(y) || ca(y))
        return p = p.get(g) || null, c(m, p, y, T, null);
      if (typeof y.then == "function")
        return h(
          p,
          m,
          g,
          Yl(y),
          T
        );
      if (y.$$typeof === qe)
        return h(
          p,
          m,
          g,
          kl(m, y),
          T
        );
      ql(m, y);
    }
    return null;
  }
  function v(p, m, g, y) {
    for (var T = null, M = null, A = m, b = m = 0, O = null; A !== null && b < g.length; b++) {
      A.index > b ? (O = A, A = null) : O = A.sibling;
      var D = f(
        p,
        A,
        g[b],
        y
      );
      if (D === null) {
        A === null && (A = O);
        break;
      }
      t && A && D.alternate === null && e(p, A), m = l(D, m, b), M === null ? T = D : M.sibling = D, M = D, A = O;
    }
    if (b === g.length)
      return n(p, A), K && Gn(p, b), T;
    if (A === null) {
      for (; b < g.length; b++)
        A = d(p, g[b], y), A !== null && (m = l(
          A,
          m,
          b
        ), M === null ? T = A : M.sibling = A, M = A);
      return K && Gn(p, b), T;
    }
    for (A = i(A); b < g.length; b++)
      O = h(
        A,
        p,
        b,
        g[b],
        y
      ), O !== null && (t && O.alternate !== null && A.delete(
        O.key === null ? b : O.key
      ), m = l(
        O,
        m,
        b
      ), M === null ? T = O : M.sibling = O, M = O);
    return t && A.forEach(function(j) {
      return e(p, j);
    }), K && Gn(p, b), T;
  }
  function x(p, m, g, y) {
    if (g == null) throw Error(E(151));
    for (var T = null, M = null, A = m, b = m = 0, O = null, D = g.next(); A !== null && !D.done; b++, D = g.next()) {
      A.index > b ? (O = A, A = null) : O = A.sibling;
      var j = f(p, A, D.value, y);
      if (j === null) {
        A === null && (A = O);
        break;
      }
      t && A && j.alternate === null && e(p, A), m = l(j, m, b), M === null ? T = j : M.sibling = j, M = j, A = O;
    }
    if (D.done)
      return n(p, A), K && Gn(p, b), T;
    if (A === null) {
      for (; !D.done; b++, D = g.next())
        D = d(p, D.value, y), D !== null && (m = l(D, m, b), M === null ? T = D : M.sibling = D, M = D);
      return K && Gn(p, b), T;
    }
    for (A = i(A); !D.done; b++, D = g.next())
      D = h(A, p, b, D.value, y), D !== null && (t && D.alternate !== null && A.delete(D.key === null ? b : D.key), m = l(D, m, b), M === null ? T = D : M.sibling = D, M = D);
    return t && A.forEach(function(Q) {
      return e(p, Q);
    }), K && Gn(p, b), T;
  }
  function S(p, m, g, y) {
    if (typeof g == "object" && g !== null && g.type === vi && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Bl:
          t: {
            for (var T = g.key; m !== null; ) {
              if (m.key === T) {
                if (T = g.type, T === vi) {
                  if (m.tag === 7) {
                    n(
                      p,
                      m.sibling
                    ), y = a(
                      m,
                      g.props.children
                    ), y.return = p, p = y;
                    break t;
                  }
                } else if (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === on && Ed(T) === m.type) {
                  n(
                    p,
                    m.sibling
                  ), y = a(m, g.props), ma(y, g), y.return = p, p = y;
                  break t;
                }
                n(p, m);
                break;
              } else e(p, m);
              m = m.sibling;
            }
            g.type === vi ? (y = Kn(
              g.props.children,
              p.mode,
              y,
              g.key
            ), y.return = p, p = y) : (y = ss(
              g.type,
              g.key,
              g.props,
              null,
              p.mode,
              y
            ), ma(y, g), y.return = p, p = y);
          }
          return s(p);
        case xa:
          t: {
            for (T = g.key; m !== null; ) {
              if (m.key === T)
                if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                  n(
                    p,
                    m.sibling
                  ), y = a(m, g.children || []), y.return = p, p = y;
                  break t;
                } else {
                  n(p, m);
                  break;
                }
              else e(p, m);
              m = m.sibling;
            }
            y = Jo(g, p.mode, y), y.return = p, p = y;
          }
          return s(p);
        case on:
          return T = g._init, g = T(g._payload), S(
            p,
            m,
            g,
            y
          );
      }
      if (Sa(g))
        return v(
          p,
          m,
          g,
          y
        );
      if (ca(g)) {
        if (T = ca(g), typeof T != "function") throw Error(E(150));
        return g = T.call(g), x(
          p,
          m,
          g,
          y
        );
      }
      if (typeof g.then == "function")
        return S(
          p,
          m,
          Yl(g),
          y
        );
      if (g.$$typeof === qe)
        return S(
          p,
          m,
          kl(p, g),
          y
        );
      ql(p, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (n(p, m.sibling), y = a(m, g), y.return = p, p = y) : (n(p, m), y = Po(g, p.mode, y), y.return = p, p = y), s(p)) : n(p, m);
  }
  return function(p, m, g, y) {
    try {
      Wa = 0;
      var T = S(
        p,
        m,
        g,
        y
      );
      return Hi = null, T;
    } catch (A) {
      if (A === vl || A === xo) throw A;
      var M = It(29, A, null, p.mode);
      return M.lanes = y, M.return = p, M;
    } finally {
    }
  };
}
var Ki = vg(!0), bg = vg(!1), me = _e(null), ze = null;
function fn(t) {
  var e = t.alternate;
  st(St, St.current & 1), st(me, t), ze === null && (e === null || Zi.current !== null || e.memoizedState !== null) && (ze = t);
}
function xg(t) {
  if (t.tag === 22) {
    if (st(St, St.current), st(me, t), ze === null) {
      var e = t.alternate;
      e !== null && e.memoizedState !== null && (ze = t);
    }
  } else dn();
}
function dn() {
  st(St, St.current), st(me, me.current);
}
function Ke(t) {
  wt(me), ze === t && (ze = null), wt(St);
}
var St = _e(0);
function js(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Au(n)))
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
function $o(t, e, n, i) {
  e = t.memoizedState, n = n(i, e), n = n == null ? e : it({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ou = {
  enqueueSetState: function(t, e, n) {
    t = t._reactInternals;
    var i = ne(), a = xn(i);
    a.payload = e, n != null && (a.callback = n), e = Sn(t, a, i), e !== null && (ie(e, t, i), Va(e, t, i));
  },
  enqueueReplaceState: function(t, e, n) {
    t = t._reactInternals;
    var i = ne(), a = xn(i);
    a.tag = 1, a.payload = e, n != null && (a.callback = n), e = Sn(t, a, i), e !== null && (ie(e, t, i), Va(e, t, i));
  },
  enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var n = ne(), i = xn(n);
    i.tag = 2, e != null && (i.callback = e), e = Sn(t, i, n), e !== null && (ie(e, t, n), Va(e, t, n));
  }
};
function Md(t, e, n, i, a, l, s) {
  return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, l, s) : e.prototype && e.prototype.isPureReactComponent ? !Pa(n, i) || !Pa(a, l) : !0;
}
function Dd(t, e, n, i) {
  t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && ou.enqueueReplaceState(e, e.state, null);
}
function ai(t, e) {
  var n = e;
  if ("ref" in e) {
    n = {};
    for (var i in e)
      i !== "ref" && (n[i] = e[i]);
  }
  if (t = t.defaultProps) {
    n === e && (n = it({}, n));
    for (var a in t)
      n[a] === void 0 && (n[a] = t[a]);
  }
  return n;
}
var Ls = typeof reportError == "function" ? reportError : function(t) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var e = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
      error: t
    });
    if (!window.dispatchEvent(e)) return;
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", t);
    return;
  }
  console.error(t);
};
function Sg(t) {
  Ls(t);
}
function Tg(t) {
  console.error(t);
}
function Ag(t) {
  Ls(t);
}
function Hs(t, e) {
  try {
    var n = t.onUncaughtError;
    n(e.value, { componentStack: e.stack });
  } catch (i) {
    setTimeout(function() {
      throw i;
    });
  }
}
function wd(t, e, n) {
  try {
    var i = t.onCaughtError;
    i(n.value, {
      componentStack: n.stack,
      errorBoundary: e.tag === 1 ? e.stateNode : null
    });
  } catch (a) {
    setTimeout(function() {
      throw a;
    });
  }
}
function ru(t, e, n) {
  return n = xn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
    Hs(t, e);
  }, n;
}
function Eg(t) {
  return t = xn(t), t.tag = 3, t;
}
function Mg(t, e, n, i) {
  var a = n.type.getDerivedStateFromError;
  if (typeof a == "function") {
    var l = i.value;
    t.payload = function() {
      return a(l);
    }, t.callback = function() {
      wd(e, n, i);
    };
  }
  var s = n.stateNode;
  s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
    wd(e, n, i), typeof a != "function" && (Tn === null ? Tn = /* @__PURE__ */ new Set([this]) : Tn.add(this));
    var o = i.stack;
    this.componentDidCatch(i.value, {
      componentStack: o !== null ? o : ""
    });
  });
}
function Ex(t, e, n, i, a) {
  if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
    if (e = n.alternate, e !== null && gl(
      e,
      n,
      a,
      !0
    ), n = me.current, n !== null) {
      switch (n.tag) {
        case 13:
          return ze === null ? gu() : n.alternate === null && ct === 0 && (ct = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, i === tu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), ur(t, i, a)), !1;
        case 22:
          return n.flags |= 65536, i === tu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
            transitions: null,
            markerInstances: null,
            retryQueue: /* @__PURE__ */ new Set([i])
          }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), ur(t, i, a)), !1;
      }
      throw Error(E(435, n.tag));
    }
    return ur(t, i, a), gu(), !1;
  }
  if (K)
    return e = me.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = a, i !== Jr && (t = Error(E(422), { cause: i }), Ja(ce(t, n)))) : (i !== Jr && (e = Error(E(423), {
      cause: i
    }), Ja(
      ce(e, n)
    )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, i = ce(i, n), a = ru(
      t.stateNode,
      i,
      a
    ), Fo(t, a), ct !== 4 && (ct = 2)), !1;
  var l = Error(E(520), { cause: i });
  if (l = ce(l, n), La === null ? La = [l] : La.push(l), ct !== 4 && (ct = 2), e === null) return !0;
  i = ce(i, n), n = e;
  do {
    switch (n.tag) {
      case 3:
        return n.flags |= 65536, t = a & -a, n.lanes |= t, t = ru(n.stateNode, i, t), Fo(n, t), !1;
      case 1:
        if (e = n.type, l = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (Tn === null || !Tn.has(l))))
          return n.flags |= 65536, a &= -a, n.lanes |= a, a = Eg(a), Mg(
            a,
            t,
            n,
            i
          ), Fo(n, a), !1;
    }
    n = n.return;
  } while (n !== null);
  return !1;
}
var Dg = Error(E(461)), Dt = !1;
function Ct(t, e, n, i) {
  e.child = t === null ? bg(e, null, n, i) : Ki(
    e,
    t.child,
    n,
    i
  );
}
function Rd(t, e, n, i, a) {
  n = n.render;
  var l = e.ref;
  if ("ref" in i) {
    var s = {};
    for (var o in i)
      o !== "ref" && (s[o] = i[o]);
  } else s = i;
  return ni(e), i = Rc(
    t,
    e,
    n,
    s,
    l,
    a
  ), o = Cc(), t !== null && !Dt ? (Oc(t, e, a), $e(t, e, a)) : (K && o && Sc(e), e.flags |= 1, Ct(t, e, i, a), e.child);
}
function Cd(t, e, n, i, a) {
  if (t === null) {
    var l = n.type;
    return typeof l == "function" && !xc(l) && l.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = l, wg(
      t,
      e,
      l,
      i,
      a
    )) : (t = ss(
      n.type,
      null,
      i,
      e,
      e.mode,
      a
    ), t.ref = e.ref, t.return = e, e.child = t);
  }
  if (l = t.child, !Hc(t, a)) {
    var s = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pa, n(s, i) && t.ref === e.ref)
      return $e(t, e, a);
  }
  return e.flags |= 1, t = Pe(l, i), t.ref = e.ref, t.return = e, e.child = t;
}
function wg(t, e, n, i, a) {
  if (t !== null) {
    var l = t.memoizedProps;
    if (Pa(l, i) && t.ref === e.ref)
      if (Dt = !1, e.pendingProps = i = l, Hc(t, a))
        t.flags & 131072 && (Dt = !0);
      else
        return e.lanes = t.lanes, $e(t, e, a);
  }
  return uu(
    t,
    e,
    n,
    i,
    a
  );
}
function Rg(t, e, n) {
  var i = e.pendingProps, a = i.children, l = t !== null ? t.memoizedState : null;
  if (i.mode === "hidden") {
    if (e.flags & 128) {
      if (i = l !== null ? l.baseLanes | n : n, t !== null) {
        for (a = e.child = t.child, l = 0; a !== null; )
          l = l | a.lanes | a.childLanes, a = a.sibling;
        e.childLanes = l & ~i;
      } else e.childLanes = 0, e.child = null;
      return Od(
        t,
        e,
        i,
        n
      );
    }
    if (n & 536870912)
      e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && os(
        e,
        l !== null ? l.cachePool : null
      ), l !== null ? yd(e, l) : iu(), xg(e);
    else
      return e.lanes = e.childLanes = 536870912, Od(
        t,
        e,
        l !== null ? l.baseLanes | n : n,
        n
      );
  } else
    l !== null ? (os(e, l.cachePool), yd(e, l), dn(), e.memoizedState = null) : (t !== null && os(e, null), iu(), dn());
  return Ct(t, e, a, n), e.child;
}
function Od(t, e, n, i) {
  var a = Ec();
  return a = a === null ? null : { parent: xt._currentValue, pool: a }, e.memoizedState = {
    baseLanes: n,
    cachePool: a
  }, t !== null && os(e, null), iu(), xg(e), t !== null && gl(t, e, i, !0), null;
}
function cs(t, e) {
  var n = e.ref;
  if (n === null)
    t !== null && t.ref !== null && (e.flags |= 4194816);
  else {
    if (typeof n != "function" && typeof n != "object")
      throw Error(E(284));
    (t === null || t.ref !== n) && (e.flags |= 4194816);
  }
}
function uu(t, e, n, i, a) {
  return ni(e), n = Rc(
    t,
    e,
    n,
    i,
    void 0,
    a
  ), i = Cc(), t !== null && !Dt ? (Oc(t, e, a), $e(t, e, a)) : (K && i && Sc(e), e.flags |= 1, Ct(t, e, n, a), e.child);
}
function zd(t, e, n, i, a, l) {
  return ni(e), e.updateQueue = null, n = Gp(
    e,
    i,
    n,
    a
  ), kp(t), i = Cc(), t !== null && !Dt ? (Oc(t, e, l), $e(t, e, l)) : (K && i && Sc(e), e.flags |= 1, Ct(t, e, n, l), e.child);
}
function Vd(t, e, n, i, a) {
  if (ni(e), e.stateNode === null) {
    var l = Di, s = n.contextType;
    typeof s == "object" && s !== null && (l = Bt(s)), l = new n(i, l), e.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = ou, e.stateNode = l, l._reactInternals = e, l = e.stateNode, l.props = i, l.state = e.memoizedState, l.refs = {}, Mc(e), s = n.contextType, l.context = typeof s == "object" && s !== null ? Bt(s) : Di, l.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && ($o(
      e,
      n,
      s,
      i
    ), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (s = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), s !== l.state && ou.enqueueReplaceState(l, l.state, null), _a(e, i, l, a), Ua(), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
  } else if (t === null) {
    l = e.stateNode;
    var o = e.memoizedProps, r = ai(n, o);
    l.props = r;
    var u = l.context, c = n.contextType;
    s = Di, typeof c == "object" && c !== null && (s = Bt(c));
    var d = n.getDerivedStateFromProps;
    c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o || u !== s) && Dd(
      e,
      l,
      i,
      s
    ), rn = !1;
    var f = e.memoizedState;
    l.state = f, _a(e, i, l, a), Ua(), u = e.memoizedState, o || f !== u || rn ? (typeof d == "function" && ($o(
      e,
      n,
      d,
      i
    ), u = e.memoizedState), (r = rn || Md(
      e,
      n,
      r,
      i,
      f,
      u,
      s
    )) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = u), l.props = i, l.state = u, l.context = s, i = r) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
  } else {
    l = e.stateNode, eu(t, e), s = e.memoizedProps, c = ai(n, s), l.props = c, d = e.pendingProps, f = l.context, u = n.contextType, r = Di, typeof u == "object" && u !== null && (r = Bt(u)), o = n.getDerivedStateFromProps, (u = typeof o == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || f !== r) && Dd(
      e,
      l,
      i,
      r
    ), rn = !1, f = e.memoizedState, l.state = f, _a(e, i, l, a), Ua();
    var h = e.memoizedState;
    s !== d || f !== h || rn || t !== null && t.dependencies !== null && Vs(t.dependencies) ? (typeof o == "function" && ($o(
      e,
      n,
      o,
      i
    ), h = e.memoizedState), (c = rn || Md(
      e,
      n,
      c,
      i,
      f,
      h,
      r
    ) || t !== null && t.dependencies !== null && Vs(t.dependencies)) ? (u || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(i, h, r), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(
      i,
      h,
      r
    )), typeof l.componentDidUpdate == "function" && (e.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = h), l.props = i, l.state = h, l.context = r, i = c) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), i = !1);
  }
  return l = i, cs(t, e), i = (e.flags & 128) !== 0, l || i ? (l = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : l.render(), e.flags |= 1, t !== null && i ? (e.child = Ki(
    e,
    t.child,
    null,
    a
  ), e.child = Ki(
    e,
    null,
    n,
    a
  )) : Ct(t, e, n, a), e.memoizedState = l.state, t = e.child) : t = $e(
    t,
    e,
    a
  ), t;
}
function Ud(t, e, n, i) {
  return pl(), e.flags |= 256, Ct(t, e, n, i), e.child;
}
var Io = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function tr(t) {
  return { baseLanes: t, cachePool: Bp() };
}
function er(t, e, n) {
  return t = t !== null ? t.childLanes & ~n : 0, e && (t |= fe), t;
}
function Cg(t, e, n) {
  var i = e.pendingProps, a = !1, l = (e.flags & 128) !== 0, s;
  if ((s = l) || (s = t !== null && t.memoizedState === null ? !1 : (St.current & 2) !== 0), s && (a = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
    if (K) {
      if (a ? fn(e) : dn(), K) {
        var o = ut, r;
        if (r = o) {
          t: {
            for (r = o, o = we; r.nodeType !== 8; ) {
              if (!o) {
                o = null;
                break t;
              }
              if (r = xe(
                r.nextSibling
              ), r === null) {
                o = null;
                break t;
              }
            }
            o = r;
          }
          o !== null ? (e.memoizedState = {
            dehydrated: o,
            treeContext: Pn !== null ? { id: Xe, overflow: Ze } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, r = It(
            18,
            null,
            null,
            0
          ), r.stateNode = o, r.return = e, e.child = r, Lt = e, ut = null, r = !0) : r = !1;
        }
        r || ei(e);
      }
      if (o = e.memoizedState, o !== null && (o = o.dehydrated, o !== null))
        return Au(o) ? e.lanes = 32 : e.lanes = 536870912, null;
      Ke(e);
    }
    return o = i.children, i = i.fallback, a ? (dn(), a = e.mode, o = ks(
      { mode: "hidden", children: o },
      a
    ), i = Kn(
      i,
      a,
      n,
      null
    ), o.return = e, i.return = e, o.sibling = i, e.child = o, a = e.child, a.memoizedState = tr(n), a.childLanes = er(
      t,
      s,
      n
    ), e.memoizedState = Io, i) : (fn(e), cu(e, o));
  }
  if (r = t.memoizedState, r !== null && (o = r.dehydrated, o !== null)) {
    if (l)
      e.flags & 256 ? (fn(e), e.flags &= -257, e = nr(
        t,
        e,
        n
      )) : e.memoizedState !== null ? (dn(), e.child = t.child, e.flags |= 128, e = null) : (dn(), a = i.fallback, o = e.mode, i = ks(
        { mode: "visible", children: i.children },
        o
      ), a = Kn(
        a,
        o,
        n,
        null
      ), a.flags |= 2, i.return = e, a.return = e, i.sibling = a, e.child = i, Ki(
        e,
        t.child,
        null,
        n
      ), i = e.child, i.memoizedState = tr(n), i.childLanes = er(
        t,
        s,
        n
      ), e.memoizedState = Io, e = a);
    else if (fn(e), Au(o)) {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var u = s.dgst;
      s = u, i = Error(E(419)), i.stack = "", i.digest = s, Ja({ value: i, source: null, stack: null }), e = nr(
        t,
        e,
        n
      );
    } else if (Dt || gl(t, e, n, !1), s = (n & t.childLanes) !== 0, Dt || s) {
      if (s = nt, s !== null && (i = n & -n, i = i & 42 ? 1 : uc(i), i = i & (s.suspendedLanes | n) ? 0 : i, i !== 0 && i !== r.retryLane))
        throw r.retryLane = i, ia(t, i), ie(s, t, i), Dg;
      o.data === "$?" || gu(), e = nr(
        t,
        e,
        n
      );
    } else
      o.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = r.treeContext, ut = xe(
        o.nextSibling
      ), Lt = e, K = !0, Jn = null, we = !1, t !== null && (oe[re++] = Xe, oe[re++] = Ze, oe[re++] = Pn, Xe = t.id, Ze = t.overflow, Pn = e), e = cu(
        e,
        i.children
      ), e.flags |= 4096);
    return e;
  }
  return a ? (dn(), a = i.fallback, o = e.mode, r = t.child, u = r.sibling, i = Pe(r, {
    mode: "hidden",
    children: i.children
  }), i.subtreeFlags = r.subtreeFlags & 65011712, u !== null ? a = Pe(u, a) : (a = Kn(
    a,
    o,
    n,
    null
  ), a.flags |= 2), a.return = e, i.return = e, i.sibling = a, e.child = i, i = a, a = e.child, o = t.child.memoizedState, o === null ? o = tr(n) : (r = o.cachePool, r !== null ? (u = xt._currentValue, r = r.parent !== u ? { parent: u, pool: u } : r) : r = Bp(), o = {
    baseLanes: o.baseLanes | n,
    cachePool: r
  }), a.memoizedState = o, a.childLanes = er(
    t,
    s,
    n
  ), e.memoizedState = Io, i) : (fn(e), n = t.child, t = n.sibling, n = Pe(n, {
    mode: "visible",
    children: i.children
  }), n.return = e, n.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = n, e.memoizedState = null, n);
}
function cu(t, e) {
  return e = ks(
    { mode: "visible", children: e },
    t.mode
  ), e.return = t, t.child = e;
}
function ks(t, e) {
  return t = It(22, t, null, e), t.lanes = 0, t.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  }, t;
}
function nr(t, e, n) {
  return Ki(e, t.child, null, n), t = cu(
    e,
    e.pendingProps.children
  ), t.flags |= 2, e.memoizedState = null, t;
}
function _d(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), Wr(t.return, e, n);
}
function ir(t, e, n, i, a) {
  var l = t.memoizedState;
  l === null ? t.memoizedState = {
    isBackwards: e,
    rendering: null,
    renderingStartTime: 0,
    last: i,
    tail: n,
    tailMode: a
  } : (l.isBackwards = e, l.rendering = null, l.renderingStartTime = 0, l.last = i, l.tail = n, l.tailMode = a);
}
function Og(t, e, n) {
  var i = e.pendingProps, a = i.revealOrder, l = i.tail;
  if (Ct(t, e, i.children, n), i = St.current, i & 2)
    i = i & 1 | 2, e.flags |= 128;
  else {
    if (t !== null && t.flags & 128)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && _d(t, n, e);
        else if (t.tag === 19)
          _d(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    i &= 1;
  }
  switch (st(St, i), a) {
    case "forwards":
      for (n = e.child, a = null; n !== null; )
        t = n.alternate, t !== null && js(t) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), ir(
        e,
        !1,
        a,
        n,
        l
      );
      break;
    case "backwards":
      for (n = null, a = e.child, e.child = null; a !== null; ) {
        if (t = a.alternate, t !== null && js(t) === null) {
          e.child = a;
          break;
        }
        t = a.sibling, a.sibling = n, n = a, a = t;
      }
      ir(
        e,
        !0,
        n,
        null,
        l
      );
      break;
    case "together":
      ir(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function $e(t, e, n) {
  if (t !== null && (e.dependencies = t.dependencies), Cn |= e.lanes, !(n & e.childLanes))
    if (t !== null) {
      if (gl(
        t,
        e,
        n,
        !1
      ), (n & e.childLanes) === 0)
        return null;
    } else return null;
  if (t !== null && e.child !== t.child)
    throw Error(E(153));
  if (e.child !== null) {
    for (t = e.child, n = Pe(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      t = t.sibling, n = n.sibling = Pe(t, t.pendingProps), n.return = e;
    n.sibling = null;
  }
  return e.child;
}
function Hc(t, e) {
  return t.lanes & e ? !0 : (t = t.dependencies, !!(t !== null && Vs(t)));
}
function Mx(t, e, n) {
  switch (e.tag) {
    case 3:
      Es(e, e.stateNode.containerInfo), cn(e, xt, t.memoizedState.cache), pl();
      break;
    case 27:
    case 5:
      Hr(e);
      break;
    case 4:
      Es(e, e.stateNode.containerInfo);
      break;
    case 10:
      cn(
        e,
        e.type,
        e.memoizedProps.value
      );
      break;
    case 13:
      var i = e.memoizedState;
      if (i !== null)
        return i.dehydrated !== null ? (fn(e), e.flags |= 128, null) : n & e.child.childLanes ? Cg(t, e, n) : (fn(e), t = $e(
          t,
          e,
          n
        ), t !== null ? t.sibling : null);
      fn(e);
      break;
    case 19:
      var a = (t.flags & 128) !== 0;
      if (i = (n & e.childLanes) !== 0, i || (gl(
        t,
        e,
        n,
        !1
      ), i = (n & e.childLanes) !== 0), a) {
        if (i)
          return Og(
            t,
            e,
            n
          );
        e.flags |= 128;
      }
      if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), st(St, St.current), i) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Rg(t, e, n);
    case 24:
      cn(e, xt, t.memoizedState.cache);
  }
  return $e(t, e, n);
}
function zg(t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps)
      Dt = !0;
    else {
      if (!Hc(t, n) && !(e.flags & 128))
        return Dt = !1, Mx(
          t,
          e,
          n
        );
      Dt = !!(t.flags & 131072);
    }
  else
    Dt = !1, K && e.flags & 1048576 && Up(e, zs, e.index);
  switch (e.lanes = 0, e.tag) {
    case 16:
      t: {
        t = e.pendingProps;
        var i = e.elementType, a = i._init;
        if (i = a(i._payload), e.type = i, typeof i == "function")
          xc(i) ? (t = ai(i, t), e.tag = 1, e = Vd(
            null,
            e,
            i,
            t,
            n
          )) : (e.tag = 0, e = uu(
            null,
            e,
            i,
            t,
            n
          ));
        else {
          if (i != null) {
            if (a = i.$$typeof, a === sc) {
              e.tag = 11, e = Rd(
                null,
                e,
                i,
                t,
                n
              );
              break t;
            } else if (a === oc) {
              e.tag = 14, e = Cd(
                null,
                e,
                i,
                t,
                n
              );
              break t;
            }
          }
          throw e = jr(i) || i, Error(E(306, e, ""));
        }
      }
      return e;
    case 0:
      return uu(
        t,
        e,
        e.type,
        e.pendingProps,
        n
      );
    case 1:
      return i = e.type, a = ai(
        i,
        e.pendingProps
      ), Vd(
        t,
        e,
        i,
        a,
        n
      );
    case 3:
      t: {
        if (Es(
          e,
          e.stateNode.containerInfo
        ), t === null) throw Error(E(387));
        i = e.pendingProps;
        var l = e.memoizedState;
        a = l.element, eu(t, e), _a(e, i, null, n);
        var s = e.memoizedState;
        if (i = s.cache, cn(e, xt, i), i !== l.cache && $r(
          e,
          [xt],
          n,
          !0
        ), Ua(), i = s.element, l.isDehydrated)
          if (l = {
            element: i,
            isDehydrated: !1,
            cache: s.cache
          }, e.updateQueue.baseState = l, e.memoizedState = l, e.flags & 256) {
            e = Ud(
              t,
              e,
              i,
              n
            );
            break t;
          } else if (i !== a) {
            a = ce(
              Error(E(424)),
              e
            ), Ja(a), e = Ud(
              t,
              e,
              i,
              n
            );
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (ut = xe(t.firstChild), Lt = e, K = !0, Jn = null, we = !0, n = bg(
              e,
              null,
              i,
              n
            ), e.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
          }
        else {
          if (pl(), i === a) {
            e = $e(
              t,
              e,
              n
            );
            break t;
          }
          Ct(
            t,
            e,
            i,
            n
          );
        }
        e = e.child;
      }
      return e;
    case 26:
      return cs(t, e), t === null ? (n = Wd(
        e.type,
        null,
        e.pendingProps,
        null
      )) ? e.memoizedState = n : K || (n = e.type, t = e.pendingProps, i = Ks(
        bn.current
      ).createElement(n), i[_t] = e, i[Pt] = t, Vt(i, n, t), Mt(i), e.stateNode = i) : e.memoizedState = Wd(
        e.type,
        t.memoizedProps,
        e.pendingProps,
        t.memoizedState
      ), null;
    case 27:
      return Hr(e), t === null && K && (i = e.stateNode = yy(
        e.type,
        e.pendingProps,
        bn.current
      ), Lt = e, we = !0, a = ut, _n(e.type) ? (Eu = a, ut = xe(
        i.firstChild
      )) : ut = a), Ct(
        t,
        e,
        e.pendingProps.children,
        n
      ), cs(t, e), t === null && (e.flags |= 4194304), e.child;
    case 5:
      return t === null && K && ((a = i = ut) && (i = Ix(
        i,
        e.type,
        e.pendingProps,
        we
      ), i !== null ? (e.stateNode = i, Lt = e, ut = xe(
        i.firstChild
      ), we = !1, a = !0) : a = !1), a || ei(e)), Hr(e), a = e.type, l = e.pendingProps, s = t !== null ? t.memoizedProps : null, i = l.children, Su(a, l) ? i = null : s !== null && Su(a, s) && (e.flags |= 32), e.memoizedState !== null && (a = Rc(
        t,
        e,
        yx,
        null,
        null,
        n
      ), el._currentValue = a), cs(t, e), Ct(t, e, i, n), e.child;
    case 6:
      return t === null && K && ((t = n = ut) && (n = t1(
        n,
        e.pendingProps,
        we
      ), n !== null ? (e.stateNode = n, Lt = e, ut = null, t = !0) : t = !1), t || ei(e)), null;
    case 13:
      return Cg(t, e, n);
    case 4:
      return Es(
        e,
        e.stateNode.containerInfo
      ), i = e.pendingProps, t === null ? e.child = Ki(
        e,
        null,
        i,
        n
      ) : Ct(
        t,
        e,
        i,
        n
      ), e.child;
    case 11:
      return Rd(
        t,
        e,
        e.type,
        e.pendingProps,
        n
      );
    case 7:
      return Ct(
        t,
        e,
        e.pendingProps,
        n
      ), e.child;
    case 8:
      return Ct(
        t,
        e,
        e.pendingProps.children,
        n
      ), e.child;
    case 12:
      return Ct(
        t,
        e,
        e.pendingProps.children,
        n
      ), e.child;
    case 10:
      return i = e.pendingProps, cn(e, e.type, i.value), Ct(
        t,
        e,
        i.children,
        n
      ), e.child;
    case 9:
      return a = e.type._context, i = e.pendingProps.children, ni(e), a = Bt(a), i = i(a), e.flags |= 1, Ct(t, e, i, n), e.child;
    case 14:
      return Cd(
        t,
        e,
        e.type,
        e.pendingProps,
        n
      );
    case 15:
      return wg(
        t,
        e,
        e.type,
        e.pendingProps,
        n
      );
    case 19:
      return Og(t, e, n);
    case 31:
      return i = e.pendingProps, n = e.mode, i = {
        mode: i.mode,
        children: i.children
      }, t === null ? (n = ks(
        i,
        n
      ), n.ref = e.ref, e.child = n, n.return = e, e = n) : (n = Pe(t.child, i), n.ref = e.ref, e.child = n, n.return = e, e = n), e;
    case 22:
      return Rg(t, e, n);
    case 24:
      return ni(e), i = Bt(xt), t === null ? (a = Ec(), a === null && (a = nt, l = Ac(), a.pooledCache = l, l.refCount++, l !== null && (a.pooledCacheLanes |= n), a = l), e.memoizedState = {
        parent: i,
        cache: a
      }, Mc(e), cn(e, xt, a)) : (t.lanes & n && (eu(t, e), _a(e, null, null, n), Ua()), a = t.memoizedState, l = e.memoizedState, a.parent !== i ? (a = { parent: i, cache: i }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), cn(e, xt, i)) : (i = l.cache, cn(e, xt, i), i !== a.cache && $r(
        e,
        [xt],
        n,
        !0
      ))), Ct(
        t,
        e,
        e.pendingProps.children,
        n
      ), e.child;
    case 29:
      throw e.pendingProps;
  }
  throw Error(E(156, e.tag));
}
function Le(t) {
  t.flags |= 4;
}
function Bd(t, e) {
  if (e.type !== "stylesheet" || e.state.loading & 4)
    t.flags &= -16777217;
  else if (t.flags |= 16777216, !xy(e)) {
    if (e = me.current, e !== null && ((Z & 4194048) === Z ? ze !== null : (Z & 62914560) !== Z && !(Z & 536870912) || e !== ze))
      throw za = tu, Np;
    t.flags |= 8192;
  }
}
function Xl(t, e) {
  e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ip() : 536870912, t.lanes |= e, Pi |= e);
}
function pa(t, e) {
  if (!K)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), e = e.sibling;
        n === null ? t.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = t.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), n = n.sibling;
        i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
    }
}
function ot(t) {
  var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
  if (e)
    for (var a = t.child; a !== null; )
      n |= a.lanes | a.childLanes, i |= a.subtreeFlags & 65011712, i |= a.flags & 65011712, a.return = t, a = a.sibling;
  else
    for (a = t.child; a !== null; )
      n |= a.lanes | a.childLanes, i |= a.subtreeFlags, i |= a.flags, a.return = t, a = a.sibling;
  return t.subtreeFlags |= i, t.childLanes = n, e;
}
function Dx(t, e, n) {
  var i = e.pendingProps;
  switch (Tc(e), e.tag) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ot(e), null;
    case 1:
      return ot(e), null;
    case 3:
      return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Je(xt), Gi(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (ha(e) ? Le(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, fd())), ot(e), null;
    case 26:
      return n = e.memoizedState, t === null ? (Le(e), n !== null ? (ot(e), Bd(e, n)) : (ot(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (Le(e), ot(e), Bd(e, n)) : (ot(e), e.flags &= -16777217) : (t.memoizedProps !== i && Le(e), ot(e), e.flags &= -16777217), null;
    case 27:
      Ms(e), n = bn.current;
      var a = e.type;
      if (t !== null && e.stateNode != null)
        t.memoizedProps !== i && Le(e);
      else {
        if (!i) {
          if (e.stateNode === null)
            throw Error(E(166));
          return ot(e), null;
        }
        t = Ce.current, ha(e) ? ud(e) : (t = yy(a, i, n), e.stateNode = t, Le(e));
      }
      return ot(e), null;
    case 5:
      if (Ms(e), n = e.type, t !== null && e.stateNode != null)
        t.memoizedProps !== i && Le(e);
      else {
        if (!i) {
          if (e.stateNode === null)
            throw Error(E(166));
          return ot(e), null;
        }
        if (t = Ce.current, ha(e))
          ud(e);
        else {
          switch (a = Ks(
            bn.current
          ), t) {
            case 1:
              t = a.createElementNS(
                "http://www.w3.org/2000/svg",
                n
              );
              break;
            case 2:
              t = a.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                n
              );
              break;
            default:
              switch (n) {
                case "svg":
                  t = a.createElementNS(
                    "http://www.w3.org/2000/svg",
                    n
                  );
                  break;
                case "math":
                  t = a.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    n
                  );
                  break;
                case "script":
                  t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                  break;
                case "select":
                  t = typeof i.is == "string" ? a.createElement("select", { is: i.is }) : a.createElement("select"), i.multiple ? t.multiple = !0 : i.size && (t.size = i.size);
                  break;
                default:
                  t = typeof i.is == "string" ? a.createElement(n, { is: i.is }) : a.createElement(n);
              }
          }
          t[_t] = e, t[Pt] = i;
          t: for (a = e.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
              t.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === e) break t;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e)
                break t;
              a = a.return;
            }
            a.sibling.return = a.return, a = a.sibling;
          }
          e.stateNode = t;
          t: switch (Vt(t, n, i), n) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              t = !!i.autoFocus;
              break t;
            case "img":
              t = !0;
              break t;
            default:
              t = !1;
          }
          t && Le(e);
        }
      }
      return ot(e), e.flags &= -16777217, null;
    case 6:
      if (t && e.stateNode != null)
        t.memoizedProps !== i && Le(e);
      else {
        if (typeof i != "string" && e.stateNode === null)
          throw Error(E(166));
        if (t = bn.current, ha(e)) {
          if (t = e.stateNode, n = e.memoizedProps, i = null, a = Lt, a !== null)
            switch (a.tag) {
              case 27:
              case 5:
                i = a.memoizedProps;
            }
          t[_t] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || my(t.nodeValue, n)), t || ei(e);
        } else
          t = Ks(t).createTextNode(
            i
          ), t[_t] = e, e.stateNode = t;
      }
      return ot(e), null;
    case 13:
      if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if (a = ha(e), i !== null && i.dehydrated !== null) {
          if (t === null) {
            if (!a) throw Error(E(318));
            if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(E(317));
            a[_t] = e;
          } else
            pl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          ot(e), a = !1;
        } else
          a = fd(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
        if (!a)
          return e.flags & 256 ? (Ke(e), e) : (Ke(e), null);
      }
      if (Ke(e), e.flags & 128)
        return e.lanes = n, e;
      if (n = i !== null, t = t !== null && t.memoizedState !== null, n) {
        i = e.child, a = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool);
        var l = null;
        i.memoizedState !== null && i.memoizedState.cachePool !== null && (l = i.memoizedState.cachePool.pool), l !== a && (i.flags |= 2048);
      }
      return n !== t && n && (e.child.flags |= 8192), Xl(e, e.updateQueue), ot(e), null;
    case 4:
      return Gi(), t === null && Kc(e.stateNode.containerInfo), ot(e), null;
    case 10:
      return Je(e.type), ot(e), null;
    case 19:
      if (wt(St), a = e.memoizedState, a === null) return ot(e), null;
      if (i = (e.flags & 128) !== 0, l = a.rendering, l === null)
        if (i) pa(a, !1);
        else {
          if (ct !== 0 || t !== null && t.flags & 128)
            for (t = e.child; t !== null; ) {
              if (l = js(t), l !== null) {
                for (e.flags |= 128, pa(a, !1), t = l.updateQueue, e.updateQueue = t, Xl(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                  Vp(n, t), n = n.sibling;
                return st(
                  St,
                  St.current & 1 | 2
                ), e.child;
              }
              t = t.sibling;
            }
          a.tail !== null && Oe() > Ys && (e.flags |= 128, i = !0, pa(a, !1), e.lanes = 4194304);
        }
      else {
        if (!i)
          if (t = js(l), t !== null) {
            if (e.flags |= 128, i = !0, t = t.updateQueue, e.updateQueue = t, Xl(e, t), pa(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !K)
              return ot(e), null;
          } else
            2 * Oe() - a.renderingStartTime > Ys && n !== 536870912 && (e.flags |= 128, i = !0, pa(a, !1), e.lanes = 4194304);
        a.isBackwards ? (l.sibling = e.child, e.child = l) : (t = a.last, t !== null ? t.sibling = l : e.child = l, a.last = l);
      }
      return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Oe(), e.sibling = null, t = St.current, st(St, i ? t & 1 | 2 : t & 1), e) : (ot(e), null);
    case 22:
    case 23:
      return Ke(e), Dc(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? n & 536870912 && !(e.flags & 128) && (ot(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ot(e), n = e.updateQueue, n !== null && Xl(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && wt(Fn), null;
    case 24:
      return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Je(xt), ot(e), null;
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(E(156, e.tag));
}
function wx(t, e) {
  switch (Tc(e), e.tag) {
    case 1:
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 3:
      return Je(xt), Gi(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
    case 26:
    case 27:
    case 5:
      return Ms(e), null;
    case 13:
      if (Ke(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
        if (e.alternate === null)
          throw Error(E(340));
        pl();
      }
      return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 19:
      return wt(St), null;
    case 4:
      return Gi(), null;
    case 10:
      return Je(e.type), null;
    case 22:
    case 23:
      return Ke(e), Dc(), t !== null && wt(Fn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
    case 24:
      return Je(xt), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function Vg(t, e) {
  switch (Tc(e), e.tag) {
    case 3:
      Je(xt), Gi();
      break;
    case 26:
    case 27:
    case 5:
      Ms(e);
      break;
    case 4:
      Gi();
      break;
    case 13:
      Ke(e);
      break;
    case 19:
      wt(St);
      break;
    case 10:
      Je(e.type);
      break;
    case 22:
    case 23:
      Ke(e), Dc(), t !== null && wt(Fn);
      break;
    case 24:
      Je(xt);
  }
}
function Sl(t, e) {
  try {
    var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
    if (i !== null) {
      var a = i.next;
      n = a;
      do {
        if ((n.tag & t) === t) {
          i = void 0;
          var l = n.create, s = n.inst;
          i = l(), s.destroy = i;
        }
        n = n.next;
      } while (n !== a);
    }
  } catch (o) {
    I(e, e.return, o);
  }
}
function Rn(t, e, n) {
  try {
    var i = e.updateQueue, a = i !== null ? i.lastEffect : null;
    if (a !== null) {
      var l = a.next;
      i = l;
      do {
        if ((i.tag & t) === t) {
          var s = i.inst, o = s.destroy;
          if (o !== void 0) {
            s.destroy = void 0, a = e;
            var r = n, u = o;
            try {
              u();
            } catch (c) {
              I(
                a,
                r,
                c
              );
            }
          }
        }
        i = i.next;
      } while (i !== l);
    }
  } catch (c) {
    I(e, e.return, c);
  }
}
function Ug(t) {
  var e = t.updateQueue;
  if (e !== null) {
    var n = t.stateNode;
    try {
      Hp(e, n);
    } catch (i) {
      I(t, t.return, i);
    }
  }
}
function _g(t, e, n) {
  n.props = ai(
    t.type,
    t.memoizedProps
  ), n.state = t.memoizedState;
  try {
    n.componentWillUnmount();
  } catch (i) {
    I(t, e, i);
  }
}
function Na(t, e) {
  try {
    var n = t.ref;
    if (n !== null) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          var i = t.stateNode;
          break;
        case 30:
          i = t.stateNode;
          break;
        default:
          i = t.stateNode;
      }
      typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
    }
  } catch (a) {
    I(t, e, a);
  }
}
function Re(t, e) {
  var n = t.ref, i = t.refCleanup;
  if (n !== null)
    if (typeof i == "function")
      try {
        i();
      } catch (a) {
        I(t, e, a);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
    else if (typeof n == "function")
      try {
        n(null);
      } catch (a) {
        I(t, e, a);
      }
    else n.current = null;
}
function Bg(t) {
  var e = t.type, n = t.memoizedProps, i = t.stateNode;
  try {
    t: switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && i.focus();
        break t;
      case "img":
        n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
    }
  } catch (a) {
    I(t, t.return, a);
  }
}
function ar(t, e, n) {
  try {
    var i = t.stateNode;
    Px(i, t.type, n, e), i[Pt] = e;
  } catch (a) {
    I(t, t.return, a);
  }
}
function Ng(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && _n(t.type) || t.tag === 4;
}
function lr(t) {
  t: for (; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || Ng(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.tag === 27 && _n(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
      t.child.return = t, t = t.child;
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function fu(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = wo));
  else if (i !== 4 && (i === 27 && _n(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
    for (fu(t, e, n), t = t.sibling; t !== null; )
      fu(t, e, n), t = t.sibling;
}
function Gs(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && (i === 27 && _n(t.type) && (n = t.stateNode), t = t.child, t !== null))
    for (Gs(t, e, n), t = t.sibling; t !== null; )
      Gs(t, e, n), t = t.sibling;
}
function jg(t) {
  var e = t.stateNode, n = t.memoizedProps;
  try {
    for (var i = t.type, a = e.attributes; a.length; )
      e.removeAttributeNode(a[0]);
    Vt(e, i, n), e[_t] = t, e[Pt] = n;
  } catch (l) {
    I(t, t.return, l);
  }
}
var Ye = !1, dt = !1, sr = !1, Nd = typeof WeakSet == "function" ? WeakSet : Set, Et = null;
function Rx(t, e) {
  if (t = t.containerInfo, bu = Ws, t = Ep(t), yc(t)) {
    if ("selectionStart" in t)
      var n = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
    else
      t: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var a = i.anchorOffset, l = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break t;
          }
          var s = 0, o = -1, r = -1, u = 0, c = 0, d = t, f = null;
          e: for (; ; ) {
            for (var h; d !== n || a !== 0 && d.nodeType !== 3 || (o = s + a), d !== l || i !== 0 && d.nodeType !== 3 || (r = s + i), d.nodeType === 3 && (s += d.nodeValue.length), (h = d.firstChild) !== null; )
              f = d, d = h;
            for (; ; ) {
              if (d === t) break e;
              if (f === n && ++u === a && (o = s), f === l && ++c === i && (r = s), (h = d.nextSibling) !== null) break;
              d = f, f = d.parentNode;
            }
            d = h;
          }
          n = o === -1 || r === -1 ? null : { start: o, end: r };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xu = { focusedElem: t, selectionRange: n }, Ws = !1, Et = e; Et !== null; )
    if (e = Et, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null)
      t.return = e, Et = t;
    else
      for (; Et !== null; ) {
        switch (e = Et, l = e.alternate, t = e.flags, e.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (t & 1024 && l !== null) {
              t = void 0, n = e, a = l.memoizedProps, l = l.memoizedState, i = n.stateNode;
              try {
                var v = ai(
                  n.type,
                  a,
                  n.elementType === n.type
                );
                t = i.getSnapshotBeforeUpdate(
                  v,
                  l
                ), i.__reactInternalSnapshotBeforeUpdate = t;
              } catch (x) {
                I(
                  n,
                  n.return,
                  x
                );
              }
            }
            break;
          case 3:
            if (t & 1024) {
              if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                Tu(t);
              else if (n === 1)
                switch (t.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    Tu(t);
                    break;
                  default:
                    t.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (t & 1024) throw Error(E(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, Et = t;
          break;
        }
        Et = e.return;
      }
}
function Lg(t, e, n) {
  var i = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      nn(t, n), i & 4 && Sl(5, n);
      break;
    case 1:
      if (nn(t, n), i & 4)
        if (t = n.stateNode, e === null)
          try {
            t.componentDidMount();
          } catch (s) {
            I(n, n.return, s);
          }
        else {
          var a = ai(
            n.type,
            e.memoizedProps
          );
          e = e.memoizedState;
          try {
            t.componentDidUpdate(
              a,
              e,
              t.__reactInternalSnapshotBeforeUpdate
            );
          } catch (s) {
            I(
              n,
              n.return,
              s
            );
          }
        }
      i & 64 && Ug(n), i & 512 && Na(n, n.return);
      break;
    case 3:
      if (nn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
        if (e = null, n.child !== null)
          switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        try {
          Hp(t, e);
        } catch (s) {
          I(n, n.return, s);
        }
      }
      break;
    case 27:
      e === null && i & 4 && jg(n);
    case 26:
    case 5:
      nn(t, n), e === null && i & 4 && Bg(n), i & 512 && Na(n, n.return);
      break;
    case 12:
      nn(t, n);
      break;
    case 13:
      nn(t, n), i & 4 && Gg(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = jx.bind(
        null,
        n
      ), e1(t, n))));
      break;
    case 22:
      if (i = n.memoizedState !== null || Ye, !i) {
        e = e !== null && e.memoizedState !== null || dt, a = Ye;
        var l = dt;
        Ye = i, (dt = e) && !l ? ln(
          t,
          n,
          (n.subtreeFlags & 8772) !== 0
        ) : nn(t, n), Ye = a, dt = l;
      }
      break;
    case 30:
      break;
    default:
      nn(t, n);
  }
}
function Hg(t) {
  var e = t.alternate;
  e !== null && (t.alternate = null, Hg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && fc(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
}
var at = null, Zt = !1;
function He(t, e, n) {
  for (n = n.child; n !== null; )
    kg(t, e, n), n = n.sibling;
}
function kg(t, e, n) {
  if (te && typeof te.onCommitFiberUnmount == "function")
    try {
      te.onCommitFiberUnmount(cl, n);
    } catch {
    }
  switch (n.tag) {
    case 26:
      dt || Re(n, e), He(
        t,
        e,
        n
      ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
      break;
    case 27:
      dt || Re(n, e);
      var i = at, a = Zt;
      _n(n.type) && (at = n.stateNode, Zt = !1), He(
        t,
        e,
        n
      ), ka(n.stateNode), at = i, Zt = a;
      break;
    case 5:
      dt || Re(n, e);
    case 6:
      if (i = at, a = Zt, at = null, He(
        t,
        e,
        n
      ), at = i, Zt = a, at !== null)
        if (Zt)
          try {
            (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(n.stateNode);
          } catch (l) {
            I(
              n,
              e,
              l
            );
          }
        else
          try {
            at.removeChild(n.stateNode);
          } catch (l) {
            I(
              n,
              e,
              l
            );
          }
      break;
    case 18:
      at !== null && (Zt ? (t = at, Pd(
        t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
        n.stateNode
      ), al(t)) : Pd(at, n.stateNode));
      break;
    case 4:
      i = at, a = Zt, at = n.stateNode.containerInfo, Zt = !0, He(
        t,
        e,
        n
      ), at = i, Zt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      dt || Rn(2, n, e), dt || Rn(4, n, e), He(
        t,
        e,
        n
      );
      break;
    case 1:
      dt || (Re(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && _g(
        n,
        e,
        i
      )), He(
        t,
        e,
        n
      );
      break;
    case 21:
      He(
        t,
        e,
        n
      );
      break;
    case 22:
      dt = (i = dt) || n.memoizedState !== null, He(
        t,
        e,
        n
      ), dt = i;
      break;
    default:
      He(
        t,
        e,
        n
      );
  }
}
function Gg(t, e) {
  if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
    try {
      al(t);
    } catch (n) {
      I(e, e.return, n);
    }
}
function Cx(t) {
  switch (t.tag) {
    case 13:
    case 19:
      var e = t.stateNode;
      return e === null && (e = t.stateNode = new Nd()), e;
    case 22:
      return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Nd()), e;
    default:
      throw Error(E(435, t.tag));
  }
}
function or(t, e) {
  var n = Cx(t);
  e.forEach(function(i) {
    var a = Lx.bind(null, t, i);
    n.has(i) || (n.add(i), i.then(a, a));
  });
}
function Ft(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i], l = t, s = e, o = s;
      t: for (; o !== null; ) {
        switch (o.tag) {
          case 27:
            if (_n(o.type)) {
              at = o.stateNode, Zt = !1;
              break t;
            }
            break;
          case 5:
            at = o.stateNode, Zt = !1;
            break t;
          case 3:
          case 4:
            at = o.stateNode.containerInfo, Zt = !0;
            break t;
        }
        o = o.return;
      }
      if (at === null) throw Error(E(160));
      kg(l, s, a), at = null, Zt = !1, l = a.alternate, l !== null && (l.return = null), a.return = null;
    }
  if (e.subtreeFlags & 13878)
    for (e = e.child; e !== null; )
      Yg(e, t), e = e.sibling;
}
var be = null;
function Yg(t, e) {
  var n = t.alternate, i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Ft(e, t), Wt(t), i & 4 && (Rn(3, t, t.return), Sl(3, t), Rn(5, t, t.return));
      break;
    case 1:
      Ft(e, t), Wt(t), i & 512 && (dt || n === null || Re(n, n.return)), i & 64 && Ye && (t = t.updateQueue, t !== null && (i = t.callbacks, i !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
      break;
    case 26:
      var a = be;
      if (Ft(e, t), Wt(t), i & 512 && (dt || n === null || Re(n, n.return)), i & 4) {
        var l = n !== null ? n.memoizedState : null;
        if (i = t.memoizedState, n === null)
          if (i === null)
            if (t.stateNode === null) {
              t: {
                i = t.type, n = t.memoizedProps, a = a.ownerDocument || a;
                e: switch (i) {
                  case "title":
                    l = a.getElementsByTagName("title")[0], (!l || l[hl] || l[_t] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = a.createElement(i), a.head.insertBefore(
                      l,
                      a.querySelector("head > title")
                    )), Vt(l, i, n), l[_t] = t, Mt(l), i = l;
                    break t;
                  case "link":
                    var s = Id(
                      "link",
                      "href",
                      a
                    ).get(i + (n.href || ""));
                    if (s) {
                      for (var o = 0; o < s.length; o++)
                        if (l = s[o], l.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                          s.splice(o, 1);
                          break e;
                        }
                    }
                    l = a.createElement(i), Vt(l, i, n), a.head.appendChild(l);
                    break;
                  case "meta":
                    if (s = Id(
                      "meta",
                      "content",
                      a
                    ).get(i + (n.content || ""))) {
                      for (o = 0; o < s.length; o++)
                        if (l = s[o], l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                          s.splice(o, 1);
                          break e;
                        }
                    }
                    l = a.createElement(i), Vt(l, i, n), a.head.appendChild(l);
                    break;
                  default:
                    throw Error(E(468, i));
                }
                l[_t] = t, Mt(l), i = l;
              }
              t.stateNode = i;
            } else
              th(
                a,
                t.type,
                t.stateNode
              );
          else
            t.stateNode = $d(
              a,
              i,
              t.memoizedProps
            );
        else
          l !== i ? (l === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : l.count--, i === null ? th(
            a,
            t.type,
            t.stateNode
          ) : $d(
            a,
            i,
            t.memoizedProps
          )) : i === null && t.stateNode !== null && ar(
            t,
            t.memoizedProps,
            n.memoizedProps
          );
      }
      break;
    case 27:
      Ft(e, t), Wt(t), i & 512 && (dt || n === null || Re(n, n.return)), n !== null && i & 4 && ar(
        t,
        t.memoizedProps,
        n.memoizedProps
      );
      break;
    case 5:
      if (Ft(e, t), Wt(t), i & 512 && (dt || n === null || Re(n, n.return)), t.flags & 32) {
        a = t.stateNode;
        try {
          qi(a, "");
        } catch (h) {
          I(t, t.return, h);
        }
      }
      i & 4 && t.stateNode != null && (a = t.memoizedProps, ar(
        t,
        a,
        n !== null ? n.memoizedProps : a
      )), i & 1024 && (sr = !0);
      break;
    case 6:
      if (Ft(e, t), Wt(t), i & 4) {
        if (t.stateNode === null)
          throw Error(E(162));
        i = t.memoizedProps, n = t.stateNode;
        try {
          n.nodeValue = i;
        } catch (h) {
          I(t, t.return, h);
        }
      }
      break;
    case 3:
      if (hs = null, a = be, be = Ps(e.containerInfo), Ft(e, t), be = a, Wt(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          al(e.containerInfo);
        } catch (h) {
          I(t, t.return, h);
        }
      sr && (sr = !1, qg(t));
      break;
    case 4:
      i = be, be = Ps(
        t.stateNode.containerInfo
      ), Ft(e, t), Wt(t), be = i;
      break;
    case 12:
      Ft(e, t), Wt(t);
      break;
    case 13:
      Ft(e, t), Wt(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Xc = Oe()), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, or(t, i)));
      break;
    case 22:
      a = t.memoizedState !== null;
      var r = n !== null && n.memoizedState !== null, u = Ye, c = dt;
      if (Ye = u || a, dt = c || r, Ft(e, t), dt = c, Ye = u, Wt(t), i & 8192)
        t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (n === null || r || Ye || dt || Yn(t)), n = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (n === null) {
              r = n = e;
              try {
                if (l = r.stateNode, a)
                  s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                else {
                  o = r.stateNode;
                  var d = r.memoizedProps.style, f = d != null && d.hasOwnProperty("display") ? d.display : null;
                  o.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
                }
              } catch (h) {
                I(r, r.return, h);
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              r = e;
              try {
                r.stateNode.nodeValue = a ? "" : r.memoizedProps;
              } catch (h) {
                I(r, r.return, h);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            n === e && (n = null), e = e.return;
          }
          n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
        }
      i & 4 && (i = t.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, or(t, n))));
      break;
    case 19:
      Ft(e, t), Wt(t), i & 4 && (i = t.updateQueue, i !== null && (t.updateQueue = null, or(t, i)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      Ft(e, t), Wt(t);
  }
}
function Wt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      for (var n, i = t.return; i !== null; ) {
        if (Ng(i)) {
          n = i;
          break;
        }
        i = i.return;
      }
      if (n == null) throw Error(E(160));
      switch (n.tag) {
        case 27:
          var a = n.stateNode, l = lr(t);
          Gs(t, l, a);
          break;
        case 5:
          var s = n.stateNode;
          n.flags & 32 && (qi(s, ""), n.flags &= -33);
          var o = lr(t);
          Gs(t, o, s);
          break;
        case 3:
        case 4:
          var r = n.stateNode.containerInfo, u = lr(t);
          fu(
            t,
            u,
            r
          );
          break;
        default:
          throw Error(E(161));
      }
    } catch (c) {
      I(t, t.return, c);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function qg(t) {
  if (t.subtreeFlags & 1024)
    for (t = t.child; t !== null; ) {
      var e = t;
      qg(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
}
function nn(t, e) {
  if (e.subtreeFlags & 8772)
    for (e = e.child; e !== null; )
      Lg(t, e.alternate, e), e = e.sibling;
}
function Yn(t) {
  for (t = t.child; t !== null; ) {
    var e = t;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rn(4, e, e.return), Yn(e);
        break;
      case 1:
        Re(e, e.return);
        var n = e.stateNode;
        typeof n.componentWillUnmount == "function" && _g(
          e,
          e.return,
          n
        ), Yn(e);
        break;
      case 27:
        ka(e.stateNode);
      case 26:
      case 5:
        Re(e, e.return), Yn(e);
        break;
      case 22:
        e.memoizedState === null && Yn(e);
        break;
      case 30:
        Yn(e);
        break;
      default:
        Yn(e);
    }
    t = t.sibling;
  }
}
function ln(t, e, n) {
  for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
    var i = e.alternate, a = t, l = e, s = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ln(
          a,
          l,
          n
        ), Sl(4, l);
        break;
      case 1:
        if (ln(
          a,
          l,
          n
        ), i = l, a = i.stateNode, typeof a.componentDidMount == "function")
          try {
            a.componentDidMount();
          } catch (u) {
            I(i, i.return, u);
          }
        if (i = l, a = i.updateQueue, a !== null) {
          var o = i.stateNode;
          try {
            var r = a.shared.hiddenCallbacks;
            if (r !== null)
              for (a.shared.hiddenCallbacks = null, a = 0; a < r.length; a++)
                Lp(r[a], o);
          } catch (u) {
            I(i, i.return, u);
          }
        }
        n && s & 64 && Ug(l), Na(l, l.return);
        break;
      case 27:
        jg(l);
      case 26:
      case 5:
        ln(
          a,
          l,
          n
        ), n && i === null && s & 4 && Bg(l), Na(l, l.return);
        break;
      case 12:
        ln(
          a,
          l,
          n
        );
        break;
      case 13:
        ln(
          a,
          l,
          n
        ), n && s & 4 && Gg(a, l);
        break;
      case 22:
        l.memoizedState === null && ln(
          a,
          l,
          n
        ), Na(l, l.return);
        break;
      case 30:
        break;
      default:
        ln(
          a,
          l,
          n
        );
    }
    e = e.sibling;
  }
}
function kc(t, e) {
  var n = null;
  t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && yl(n));
}
function Gc(t, e) {
  t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && yl(t));
}
function Ae(t, e, n, i) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; )
      Xg(
        t,
        e,
        n,
        i
      ), e = e.sibling;
}
function Xg(t, e, n, i) {
  var a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      Ae(
        t,
        e,
        n,
        i
      ), a & 2048 && Sl(9, e);
      break;
    case 1:
      Ae(
        t,
        e,
        n,
        i
      );
      break;
    case 3:
      Ae(
        t,
        e,
        n,
        i
      ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && yl(t)));
      break;
    case 12:
      if (a & 2048) {
        Ae(
          t,
          e,
          n,
          i
        ), t = e.stateNode;
        try {
          var l = e.memoizedProps, s = l.id, o = l.onPostCommit;
          typeof o == "function" && o(
            s,
            e.alternate === null ? "mount" : "update",
            t.passiveEffectDuration,
            -0
          );
        } catch (r) {
          I(e, e.return, r);
        }
      } else
        Ae(
          t,
          e,
          n,
          i
        );
      break;
    case 13:
      Ae(
        t,
        e,
        n,
        i
      );
      break;
    case 23:
      break;
    case 22:
      l = e.stateNode, s = e.alternate, e.memoizedState !== null ? l._visibility & 2 ? Ae(
        t,
        e,
        n,
        i
      ) : ja(t, e) : l._visibility & 2 ? Ae(
        t,
        e,
        n,
        i
      ) : (l._visibility |= 2, pi(
        t,
        e,
        n,
        i,
        (e.subtreeFlags & 10256) !== 0
      )), a & 2048 && kc(s, e);
      break;
    case 24:
      Ae(
        t,
        e,
        n,
        i
      ), a & 2048 && Gc(e.alternate, e);
      break;
    default:
      Ae(
        t,
        e,
        n,
        i
      );
  }
}
function pi(t, e, n, i, a) {
  for (a = a && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
    var l = t, s = e, o = n, r = i, u = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        pi(
          l,
          s,
          o,
          r,
          a
        ), Sl(8, s);
        break;
      case 23:
        break;
      case 22:
        var c = s.stateNode;
        s.memoizedState !== null ? c._visibility & 2 ? pi(
          l,
          s,
          o,
          r,
          a
        ) : ja(
          l,
          s
        ) : (c._visibility |= 2, pi(
          l,
          s,
          o,
          r,
          a
        )), a && u & 2048 && kc(
          s.alternate,
          s
        );
        break;
      case 24:
        pi(
          l,
          s,
          o,
          r,
          a
        ), a && u & 2048 && Gc(s.alternate, s);
        break;
      default:
        pi(
          l,
          s,
          o,
          r,
          a
        );
    }
    e = e.sibling;
  }
}
function ja(t, e) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) {
      var n = t, i = e, a = i.flags;
      switch (i.tag) {
        case 22:
          ja(n, i), a & 2048 && kc(
            i.alternate,
            i
          );
          break;
        case 24:
          ja(n, i), a & 2048 && Gc(i.alternate, i);
          break;
        default:
          ja(n, i);
      }
      e = e.sibling;
    }
}
var Aa = 8192;
function fi(t) {
  if (t.subtreeFlags & Aa)
    for (t = t.child; t !== null; )
      Zg(t), t = t.sibling;
}
function Zg(t) {
  switch (t.tag) {
    case 26:
      fi(t), t.flags & Aa && t.memoizedState !== null && m1(
        be,
        t.memoizedState,
        t.memoizedProps
      );
      break;
    case 5:
      fi(t);
      break;
    case 3:
    case 4:
      var e = be;
      be = Ps(t.stateNode.containerInfo), fi(t), be = e;
      break;
    case 22:
      t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Aa, Aa = 16777216, fi(t), Aa = e) : fi(t));
      break;
    default:
      fi(t);
  }
}
function Qg(t) {
  var e = t.alternate;
  if (e !== null && (t = e.child, t !== null)) {
    e.child = null;
    do
      e = t.sibling, t.sibling = null, t = e;
    while (t !== null);
  }
}
function ga(t) {
  var e = t.deletions;
  if (t.flags & 16) {
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Et = i, Pg(
          i,
          t
        );
      }
    Qg(t);
  }
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; )
      Kg(t), t = t.sibling;
}
function Kg(t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      ga(t), t.flags & 2048 && Rn(9, t, t.return);
      break;
    case 3:
      ga(t);
      break;
    case 12:
      ga(t);
      break;
    case 22:
      var e = t.stateNode;
      t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, fs(t)) : ga(t);
      break;
    default:
      ga(t);
  }
}
function fs(t) {
  var e = t.deletions;
  if (t.flags & 16) {
    if (e !== null)
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        Et = i, Pg(
          i,
          t
        );
      }
    Qg(t);
  }
  for (t = t.child; t !== null; ) {
    switch (e = t, e.tag) {
      case 0:
      case 11:
      case 15:
        Rn(8, e, e.return), fs(e);
        break;
      case 22:
        n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, fs(e));
        break;
      default:
        fs(e);
    }
    t = t.sibling;
  }
}
function Pg(t, e) {
  for (; Et !== null; ) {
    var n = Et;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(8, n, e);
        break;
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var i = n.memoizedState.cachePool.pool;
          i != null && i.refCount++;
        }
        break;
      case 24:
        yl(n.memoizedState.cache);
    }
    if (i = n.child, i !== null) i.return = n, Et = i;
    else
      t: for (n = t; Et !== null; ) {
        i = Et;
        var a = i.sibling, l = i.return;
        if (Hg(i), i === n) {
          Et = null;
          break t;
        }
        if (a !== null) {
          a.return = l, Et = a;
          break t;
        }
        Et = l;
      }
  }
}
var Ox = {
  getCacheForType: function(t) {
    var e = Bt(xt), n = e.data.get(t);
    return n === void 0 && (n = t(), e.data.set(t, n)), n;
  }
}, zx = typeof WeakMap == "function" ? WeakMap : Map, F = 0, nt = null, X = null, Z = 0, J = 0, $t = null, gn = !1, aa = !1, Yc = !1, Ie = 0, ct = 0, Cn = 0, Wn = 0, qc = 0, fe = 0, Pi = 0, La = null, Qt = null, du = !1, Xc = 0, Ys = 1 / 0, qs = null, Tn = null, Ot = 0, An = null, Ji = null, ki = 0, hu = 0, mu = null, Jg = null, Ha = 0, pu = null;
function ne() {
  if (F & 2 && Z !== 0)
    return Z & -Z;
  if (B.T !== null) {
    var t = Xi;
    return t !== 0 ? t : Qc();
  }
  return sp();
}
function Fg() {
  fe === 0 && (fe = !(Z & 536870912) || K ? np() : 536870912);
  var t = me.current;
  return t !== null && (t.flags |= 32), fe;
}
function ie(t, e, n) {
  (t === nt && (J === 2 || J === 9) || t.cancelPendingCommit !== null) && (Fi(t, 0), yn(
    t,
    Z,
    fe,
    !1
  )), dl(t, n), (!(F & 2) || t !== nt) && (t === nt && (!(F & 2) && (Wn |= n), ct === 4 && yn(
    t,
    Z,
    fe,
    !1
  )), Be(t));
}
function Wg(t, e, n) {
  if (F & 6) throw Error(E(327));
  var i = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || fl(t, e), a = i ? _x(t, e) : rr(t, e, !0), l = i;
  do {
    if (a === 0) {
      aa && !i && yn(t, e, 0, !1);
      break;
    } else {
      if (n = t.current.alternate, l && !Vx(n)) {
        a = rr(t, e, !1), l = !1;
        continue;
      }
      if (a === 2) {
        if (l = e, t.errorRecoveryDisabledLanes & l)
          var s = 0;
        else
          s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
        if (s !== 0) {
          e = s;
          t: {
            var o = t;
            a = La;
            var r = o.current.memoizedState.isDehydrated;
            if (r && (Fi(o, s).flags |= 256), s = rr(
              o,
              s,
              !1
            ), s !== 2) {
              if (Yc && !r) {
                o.errorRecoveryDisabledLanes |= l, Wn |= l, a = 4;
                break t;
              }
              l = Qt, Qt = a, l !== null && (Qt === null ? Qt = l : Qt.push.apply(
                Qt,
                l
              ));
            }
            a = s;
          }
          if (l = !1, a !== 2) continue;
        }
      }
      if (a === 1) {
        Fi(t, 0), yn(t, e, 0, !0);
        break;
      }
      t: {
        switch (i = t, l = a, l) {
          case 0:
          case 1:
            throw Error(E(345));
          case 4:
            if ((e & 4194048) !== e) break;
          case 6:
            yn(
              i,
              e,
              fe,
              !gn
            );
            break t;
          case 2:
            Qt = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(E(329));
        }
        if ((e & 62914560) === e && (a = Xc + 300 - Oe(), 10 < a)) {
          if (yn(
            i,
            e,
            fe,
            !gn
          ), mo(i, 0, !0) !== 0) break t;
          i.timeoutHandle = gy(
            jd.bind(
              null,
              i,
              n,
              Qt,
              qs,
              du,
              e,
              fe,
              Wn,
              Pi,
              gn,
              l,
              2,
              -0,
              0
            ),
            a
          );
          break t;
        }
        jd(
          i,
          n,
          Qt,
          qs,
          du,
          e,
          fe,
          Wn,
          Pi,
          gn,
          l,
          0,
          -0,
          0
        );
      }
    }
    break;
  } while (!0);
  Be(t);
}
function jd(t, e, n, i, a, l, s, o, r, u, c, d, f, h) {
  if (t.timeoutHandle = -1, d = e.subtreeFlags, (d & 8192 || (d & 16785408) === 16785408) && (tl = { stylesheets: null, count: 0, unsuspend: h1 }, Zg(e), d = p1(), d !== null)) {
    t.cancelPendingCommit = d(
      Hd.bind(
        null,
        t,
        e,
        l,
        n,
        i,
        a,
        s,
        o,
        r,
        c,
        1,
        f,
        h
      )
    ), yn(t, l, s, !u);
    return;
  }
  Hd(
    t,
    e,
    l,
    n,
    i,
    a,
    s,
    o,
    r
  );
}
function Vx(t) {
  for (var e = t; ; ) {
    var n = e.tag;
    if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
      for (var i = 0; i < n.length; i++) {
        var a = n[i], l = a.getSnapshot;
        a = a.value;
        try {
          if (!ae(l(), a)) return !1;
        } catch {
          return !1;
        }
      }
    if (n = e.child, e.subtreeFlags & 16384 && n !== null)
      n.return = e, e = n;
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function yn(t, e, n, i) {
  e &= ~qc, e &= ~Wn, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
  for (var a = e; 0 < a; ) {
    var l = 31 - ee(a), s = 1 << l;
    i[l] = -1, a &= ~s;
  }
  n !== 0 && ap(t, n, e);
}
function Eo() {
  return F & 6 ? !0 : (Tl(0), !1);
}
function Zc() {
  if (X !== null) {
    if (J === 0)
      var t = X.return;
    else
      t = X, Qe = ri = null, zc(t), Hi = null, Wa = 0, t = X;
    for (; t !== null; )
      Vg(t.alternate, t), t = t.return;
    X = null;
  }
}
function Fi(t, e) {
  var n = t.timeoutHandle;
  n !== -1 && (t.timeoutHandle = -1, Fx(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Zc(), nt = t, X = n = Pe(t.current, null), Z = e, J = 0, $t = null, gn = !1, aa = fl(t, e), Yc = !1, Pi = fe = qc = Wn = Cn = ct = 0, Qt = La = null, du = !1, e & 8 && (e |= e & 32);
  var i = t.entangledLanes;
  if (i !== 0)
    for (t = t.entanglements, i &= e; 0 < i; ) {
      var a = 31 - ee(i), l = 1 << a;
      e |= t[a], i &= ~l;
    }
  return Ie = e, vo(), n;
}
function $g(t, e) {
  G = null, B.H = Ns, e === vl || e === xo ? (e = pd(), J = 3) : e === Np ? (e = pd(), J = 4) : J = e === Dg ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, $t = e, X === null && (ct = 1, Hs(
    t,
    ce(e, t.current)
  ));
}
function Ig() {
  var t = B.H;
  return B.H = Ns, t === null ? Ns : t;
}
function ty() {
  var t = B.A;
  return B.A = Ox, t;
}
function gu() {
  ct = 4, gn || (Z & 4194048) !== Z && me.current !== null || (aa = !0), !(Cn & 134217727) && !(Wn & 134217727) || nt === null || yn(
    nt,
    Z,
    fe,
    !1
  );
}
function rr(t, e, n) {
  var i = F;
  F |= 2;
  var a = Ig(), l = ty();
  (nt !== t || Z !== e) && (qs = null, Fi(t, e)), e = !1;
  var s = ct;
  t: do
    try {
      if (J !== 0 && X !== null) {
        var o = X, r = $t;
        switch (J) {
          case 8:
            Zc(), s = 6;
            break t;
          case 3:
          case 2:
          case 9:
          case 6:
            me.current === null && (e = !0);
            var u = J;
            if (J = 0, $t = null, Ci(t, o, r, u), n && aa) {
              s = 0;
              break t;
            }
            break;
          default:
            u = J, J = 0, $t = null, Ci(t, o, r, u);
        }
      }
      Ux(), s = ct;
      break;
    } catch (c) {
      $g(t, c);
    }
  while (!0);
  return e && t.shellSuspendCounter++, Qe = ri = null, F = i, B.H = a, B.A = l, X === null && (nt = null, Z = 0, vo()), s;
}
function Ux() {
  for (; X !== null; ) ey(X);
}
function _x(t, e) {
  var n = F;
  F |= 2;
  var i = Ig(), a = ty();
  nt !== t || Z !== e ? (qs = null, Ys = Oe() + 500, Fi(t, e)) : aa = fl(
    t,
    e
  );
  t: do
    try {
      if (J !== 0 && X !== null) {
        e = X;
        var l = $t;
        e: switch (J) {
          case 1:
            J = 0, $t = null, Ci(t, e, l, 1);
            break;
          case 2:
          case 9:
            if (md(l)) {
              J = 0, $t = null, Ld(e);
              break;
            }
            e = function() {
              J !== 2 && J !== 9 || nt !== t || (J = 7), Be(t);
            }, l.then(e, e);
            break t;
          case 3:
            J = 7;
            break t;
          case 4:
            J = 5;
            break t;
          case 7:
            md(l) ? (J = 0, $t = null, Ld(e)) : (J = 0, $t = null, Ci(t, e, l, 7));
            break;
          case 5:
            var s = null;
            switch (X.tag) {
              case 26:
                s = X.memoizedState;
              case 5:
              case 27:
                var o = X;
                if (!s || xy(s)) {
                  J = 0, $t = null;
                  var r = o.sibling;
                  if (r !== null) X = r;
                  else {
                    var u = o.return;
                    u !== null ? (X = u, Mo(u)) : X = null;
                  }
                  break e;
                }
            }
            J = 0, $t = null, Ci(t, e, l, 5);
            break;
          case 6:
            J = 0, $t = null, Ci(t, e, l, 6);
            break;
          case 8:
            Zc(), ct = 6;
            break t;
          default:
            throw Error(E(462));
        }
      }
      Bx();
      break;
    } catch (c) {
      $g(t, c);
    }
  while (!0);
  return Qe = ri = null, B.H = i, B.A = a, F = n, X !== null ? 0 : (nt = null, Z = 0, vo(), ct);
}
function Bx() {
  for (; X !== null && !ib(); )
    ey(X);
}
function ey(t) {
  var e = zg(t.alternate, t, Ie);
  t.memoizedProps = t.pendingProps, e === null ? Mo(t) : X = e;
}
function Ld(t) {
  var e = t, n = e.alternate;
  switch (e.tag) {
    case 15:
    case 0:
      e = zd(
        n,
        e,
        e.pendingProps,
        e.type,
        void 0,
        Z
      );
      break;
    case 11:
      e = zd(
        n,
        e,
        e.pendingProps,
        e.type.render,
        e.ref,
        Z
      );
      break;
    case 5:
      zc(e);
    default:
      Vg(n, e), e = X = Vp(e, Ie), e = zg(n, e, Ie);
  }
  t.memoizedProps = t.pendingProps, e === null ? Mo(t) : X = e;
}
function Ci(t, e, n, i) {
  Qe = ri = null, zc(e), Hi = null, Wa = 0;
  var a = e.return;
  try {
    if (Ex(
      t,
      a,
      e,
      n,
      Z
    )) {
      ct = 1, Hs(
        t,
        ce(n, t.current)
      ), X = null;
      return;
    }
  } catch (l) {
    if (a !== null) throw X = a, l;
    ct = 1, Hs(
      t,
      ce(n, t.current)
    ), X = null;
    return;
  }
  e.flags & 32768 ? (K || i === 1 ? t = !0 : aa || Z & 536870912 ? t = !1 : (gn = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = me.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ny(e, t)) : Mo(e);
}
function Mo(t) {
  var e = t;
  do {
    if (e.flags & 32768) {
      ny(
        e,
        gn
      );
      return;
    }
    t = e.return;
    var n = Dx(
      e.alternate,
      e,
      Ie
    );
    if (n !== null) {
      X = n;
      return;
    }
    if (e = e.sibling, e !== null) {
      X = e;
      return;
    }
    X = e = t;
  } while (e !== null);
  ct === 0 && (ct = 5);
}
function ny(t, e) {
  do {
    var n = wx(t.alternate, t);
    if (n !== null) {
      n.flags &= 32767, X = n;
      return;
    }
    if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
      X = t;
      return;
    }
    X = t = n;
  } while (t !== null);
  ct = 6, X = null;
}
function Hd(t, e, n, i, a, l, s, o, r) {
  t.cancelPendingCommit = null;
  do
    Do();
  while (Ot !== 0);
  if (F & 6) throw Error(E(327));
  if (e !== null) {
    if (e === t.current) throw Error(E(177));
    if (l = e.lanes | e.childLanes, l |= vc, hb(
      t,
      n,
      l,
      s,
      o,
      r
    ), t === nt && (X = nt = null, Z = 0), Ji = e, An = t, ki = n, hu = l, mu = a, Jg = i, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, Hx(Ds, function() {
      return oy(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), i = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || i) {
      i = B.T, B.T = null, a = P.p, P.p = 2, s = F, F |= 4;
      try {
        Rx(t, e, n);
      } finally {
        F = s, P.p = a, B.T = i;
      }
    }
    Ot = 1, iy(), ay(), ly();
  }
}
function iy() {
  if (Ot === 1) {
    Ot = 0;
    var t = An, e = Ji, n = (e.flags & 13878) !== 0;
    if (e.subtreeFlags & 13878 || n) {
      n = B.T, B.T = null;
      var i = P.p;
      P.p = 2;
      var a = F;
      F |= 4;
      try {
        Yg(e, t);
        var l = xu, s = Ep(t.containerInfo), o = l.focusedElem, r = l.selectionRange;
        if (s !== o && o && o.ownerDocument && Ap(
          o.ownerDocument.documentElement,
          o
        )) {
          if (r !== null && yc(o)) {
            var u = r.start, c = r.end;
            if (c === void 0 && (c = u), "selectionStart" in o)
              o.selectionStart = u, o.selectionEnd = Math.min(
                c,
                o.value.length
              );
            else {
              var d = o.ownerDocument || document, f = d && d.defaultView || window;
              if (f.getSelection) {
                var h = f.getSelection(), v = o.textContent.length, x = Math.min(r.start, v), S = r.end === void 0 ? x : Math.min(r.end, v);
                !h.extend && x > S && (s = S, S = x, x = s);
                var p = sd(
                  o,
                  x
                ), m = sd(
                  o,
                  S
                );
                if (p && m && (h.rangeCount !== 1 || h.anchorNode !== p.node || h.anchorOffset !== p.offset || h.focusNode !== m.node || h.focusOffset !== m.offset)) {
                  var g = d.createRange();
                  g.setStart(p.node, p.offset), h.removeAllRanges(), x > S ? (h.addRange(g), h.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), h.addRange(g));
                }
              }
            }
          }
          for (d = [], h = o; h = h.parentNode; )
            h.nodeType === 1 && d.push({
              element: h,
              left: h.scrollLeft,
              top: h.scrollTop
            });
          for (typeof o.focus == "function" && o.focus(), o = 0; o < d.length; o++) {
            var y = d[o];
            y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
          }
        }
        Ws = !!bu, xu = bu = null;
      } finally {
        F = a, P.p = i, B.T = n;
      }
    }
    t.current = e, Ot = 2;
  }
}
function ay() {
  if (Ot === 2) {
    Ot = 0;
    var t = An, e = Ji, n = (e.flags & 8772) !== 0;
    if (e.subtreeFlags & 8772 || n) {
      n = B.T, B.T = null;
      var i = P.p;
      P.p = 2;
      var a = F;
      F |= 4;
      try {
        Lg(t, e.alternate, e);
      } finally {
        F = a, P.p = i, B.T = n;
      }
    }
    Ot = 3;
  }
}
function ly() {
  if (Ot === 4 || Ot === 3) {
    Ot = 0, ab();
    var t = An, e = Ji, n = ki, i = Jg;
    e.subtreeFlags & 10256 || e.flags & 10256 ? Ot = 5 : (Ot = 0, Ji = An = null, sy(t, t.pendingLanes));
    var a = t.pendingLanes;
    if (a === 0 && (Tn = null), cc(n), e = e.stateNode, te && typeof te.onCommitFiberRoot == "function")
      try {
        te.onCommitFiberRoot(
          cl,
          e,
          void 0,
          (e.current.flags & 128) === 128
        );
      } catch {
      }
    if (i !== null) {
      e = B.T, a = P.p, P.p = 2, B.T = null;
      try {
        for (var l = t.onRecoverableError, s = 0; s < i.length; s++) {
          var o = i[s];
          l(o.value, {
            componentStack: o.stack
          });
        }
      } finally {
        B.T = e, P.p = a;
      }
    }
    ki & 3 && Do(), Be(t), a = t.pendingLanes, n & 4194090 && a & 42 ? t === pu ? Ha++ : (Ha = 0, pu = t) : Ha = 0, Tl(0);
  }
}
function sy(t, e) {
  (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, yl(e)));
}
function Do(t) {
  return iy(), ay(), ly(), oy();
}
function oy() {
  if (Ot !== 5) return !1;
  var t = An, e = hu;
  hu = 0;
  var n = cc(ki), i = B.T, a = P.p;
  try {
    P.p = 32 > n ? 32 : n, B.T = null, n = mu, mu = null;
    var l = An, s = ki;
    if (Ot = 0, Ji = An = null, ki = 0, F & 6) throw Error(E(331));
    var o = F;
    if (F |= 4, Kg(l.current), Xg(
      l,
      l.current,
      s,
      n
    ), F = o, Tl(0, !1), te && typeof te.onPostCommitFiberRoot == "function")
      try {
        te.onPostCommitFiberRoot(cl, l);
      } catch {
      }
    return !0;
  } finally {
    P.p = a, B.T = i, sy(t, e);
  }
}
function kd(t, e, n) {
  e = ce(n, e), e = ru(t.stateNode, e, 2), t = Sn(t, e, 2), t !== null && (dl(t, 2), Be(t));
}
function I(t, e, n) {
  if (t.tag === 3)
    kd(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        kd(
          e,
          t,
          n
        );
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Tn === null || !Tn.has(i))) {
          t = ce(n, t), n = Eg(2), i = Sn(e, n, 2), i !== null && (Mg(
            n,
            i,
            e,
            t
          ), dl(i, 2), Be(i));
          break;
        }
      }
      e = e.return;
    }
}
function ur(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new zx();
    var a = /* @__PURE__ */ new Set();
    i.set(e, a);
  } else
    a = i.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(e, a));
  a.has(n) || (Yc = !0, a.add(n), t = Nx.bind(null, t, e, n), e.then(t, t));
}
function Nx(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, nt === t && (Z & n) === n && (ct === 4 || ct === 3 && (Z & 62914560) === Z && 300 > Oe() - Xc ? !(F & 2) && Fi(t, 0) : qc |= n, Pi === Z && (Pi = 0)), Be(t);
}
function ry(t, e) {
  e === 0 && (e = ip()), t = ia(t, e), t !== null && (dl(t, e), Be(t));
}
function jx(t) {
  var e = t.memoizedState, n = 0;
  e !== null && (n = e.retryLane), ry(t, n);
}
function Lx(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode, a = t.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    case 22:
      i = t.stateNode._retryCache;
      break;
    default:
      throw Error(E(314));
  }
  i !== null && i.delete(e), ry(t, n);
}
function Hx(t, e) {
  return rc(t, e);
}
var Xs = null, gi = null, yu = !1, Zs = !1, cr = !1, $n = 0;
function Be(t) {
  t !== gi && t.next === null && (gi === null ? Xs = gi = t : gi = gi.next = t), Zs = !0, yu || (yu = !0, Gx());
}
function Tl(t, e) {
  if (!cr && Zs) {
    cr = !0;
    do
      for (var n = !1, i = Xs; i !== null; ) {
        if (t !== 0) {
          var a = i.pendingLanes;
          if (a === 0) var l = 0;
          else {
            var s = i.suspendedLanes, o = i.pingedLanes;
            l = (1 << 31 - ee(42 | t) + 1) - 1, l &= a & ~(s & ~o), l = l & 201326741 ? l & 201326741 | 1 : l ? l | 2 : 0;
          }
          l !== 0 && (n = !0, Gd(i, l));
        } else
          l = Z, l = mo(
            i,
            i === nt ? l : 0,
            i.cancelPendingCommit !== null || i.timeoutHandle !== -1
          ), !(l & 3) || fl(i, l) || (n = !0, Gd(i, l));
        i = i.next;
      }
    while (n);
    cr = !1;
  }
}
function kx() {
  uy();
}
function uy() {
  Zs = yu = !1;
  var t = 0;
  $n !== 0 && (Jx() && (t = $n), $n = 0);
  for (var e = Oe(), n = null, i = Xs; i !== null; ) {
    var a = i.next, l = cy(i, e);
    l === 0 ? (i.next = null, n === null ? Xs = a : n.next = a, a === null && (gi = n)) : (n = i, (t !== 0 || l & 3) && (Zs = !0)), i = a;
  }
  Tl(t);
}
function cy(t, e) {
  for (var n = t.suspendedLanes, i = t.pingedLanes, a = t.expirationTimes, l = t.pendingLanes & -62914561; 0 < l; ) {
    var s = 31 - ee(l), o = 1 << s, r = a[s];
    r === -1 ? (!(o & n) || o & i) && (a[s] = db(o, e)) : r <= e && (t.expiredLanes |= o), l &= ~o;
  }
  if (e = nt, n = Z, n = mo(
    t,
    t === e ? n : 0,
    t.cancelPendingCommit !== null || t.timeoutHandle !== -1
  ), i = t.callbackNode, n === 0 || t === e && (J === 2 || J === 9) || t.cancelPendingCommit !== null)
    return i !== null && i !== null && No(i), t.callbackNode = null, t.callbackPriority = 0;
  if (!(n & 3) || fl(t, n)) {
    if (e = n & -n, e === t.callbackPriority) return e;
    switch (i !== null && No(i), cc(n)) {
      case 2:
      case 8:
        n = tp;
        break;
      case 32:
        n = Ds;
        break;
      case 268435456:
        n = ep;
        break;
      default:
        n = Ds;
    }
    return i = fy.bind(null, t), n = rc(n, i), t.callbackPriority = e, t.callbackNode = n, e;
  }
  return i !== null && i !== null && No(i), t.callbackPriority = 2, t.callbackNode = null, 2;
}
function fy(t, e) {
  if (Ot !== 0 && Ot !== 5)
    return t.callbackNode = null, t.callbackPriority = 0, null;
  var n = t.callbackNode;
  if (Do() && t.callbackNode !== n)
    return null;
  var i = Z;
  return i = mo(
    t,
    t === nt ? i : 0,
    t.cancelPendingCommit !== null || t.timeoutHandle !== -1
  ), i === 0 ? null : (Wg(t, i, e), cy(t, Oe()), t.callbackNode != null && t.callbackNode === n ? fy.bind(null, t) : null);
}
function Gd(t, e) {
  if (Do()) return null;
  Wg(t, e, !0);
}
function Gx() {
  Wx(function() {
    F & 6 ? rc(
      Im,
      kx
    ) : uy();
  });
}
function Qc() {
  return $n === 0 && ($n = np()), $n;
}
function Yd(t) {
  return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : is("" + t);
}
function qd(t, e) {
  var n = e.ownerDocument.createElement("input");
  return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
}
function Yx(t, e, n, i, a) {
  if (e === "submit" && n && n.stateNode === a) {
    var l = Yd(
      (a[Pt] || null).action
    ), s = i.submitter;
    s && (e = (e = s[Pt] || null) ? Yd(e.formAction) : s.getAttribute("formAction"), e !== null && (l = e, s = null));
    var o = new po(
      "action",
      "action",
      null,
      i,
      a
    );
    t.push({
      event: o,
      listeners: [
        {
          instance: null,
          listener: function() {
            if (i.defaultPrevented) {
              if ($n !== 0) {
                var r = s ? qd(a, s) : new FormData(a);
                su(
                  n,
                  {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: l
                  },
                  null,
                  r
                );
              }
            } else
              typeof l == "function" && (o.preventDefault(), r = s ? qd(a, s) : new FormData(a), su(
                n,
                {
                  pending: !0,
                  data: r,
                  method: a.method,
                  action: l
                },
                l,
                r
              ));
          },
          currentTarget: a
        }
      ]
    });
  }
}
for (var fr = 0; fr < Pr.length; fr++) {
  var dr = Pr[fr], qx = dr.toLowerCase(), Xx = dr[0].toUpperCase() + dr.slice(1);
  Te(
    qx,
    "on" + Xx
  );
}
Te(Dp, "onAnimationEnd");
Te(wp, "onAnimationIteration");
Te(Rp, "onAnimationStart");
Te("dblclick", "onDoubleClick");
Te("focusin", "onFocus");
Te("focusout", "onBlur");
Te(ox, "onTransitionRun");
Te(rx, "onTransitionStart");
Te(ux, "onTransitionCancel");
Te(Cp, "onTransitionEnd");
Yi("onMouseEnter", ["mouseout", "mouseover"]);
Yi("onMouseLeave", ["mouseout", "mouseover"]);
Yi("onPointerEnter", ["pointerout", "pointerover"]);
Yi("onPointerLeave", ["pointerout", "pointerover"]);
li(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
li(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
li("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
li(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
li(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
li(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $a = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
  " "
), Zx = new Set(
  "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($a)
);
function dy(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n], a = i.event;
    i = i.listeners;
    t: {
      var l = void 0;
      if (e)
        for (var s = i.length - 1; 0 <= s; s--) {
          var o = i[s], r = o.instance, u = o.currentTarget;
          if (o = o.listener, r !== l && a.isPropagationStopped())
            break t;
          l = o, a.currentTarget = u;
          try {
            l(a);
          } catch (c) {
            Ls(c);
          }
          a.currentTarget = null, l = r;
        }
      else
        for (s = 0; s < i.length; s++) {
          if (o = i[s], r = o.instance, u = o.currentTarget, o = o.listener, r !== l && a.isPropagationStopped())
            break t;
          l = o, a.currentTarget = u;
          try {
            l(a);
          } catch (c) {
            Ls(c);
          }
          a.currentTarget = null, l = r;
        }
    }
  }
}
function q(t, e) {
  var n = e[Gr];
  n === void 0 && (n = e[Gr] = /* @__PURE__ */ new Set());
  var i = t + "__bubble";
  n.has(i) || (hy(e, t, 2, !1), n.add(i));
}
function hr(t, e, n) {
  var i = 0;
  e && (i |= 4), hy(
    n,
    t,
    i,
    e
  );
}
var Zl = "_reactListening" + Math.random().toString(36).slice(2);
function Kc(t) {
  if (!t[Zl]) {
    t[Zl] = !0, op.forEach(function(n) {
      n !== "selectionchange" && (Zx.has(n) || hr(n, !1, t), hr(n, !0, t));
    });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Zl] || (e[Zl] = !0, hr("selectionchange", !1, e));
  }
}
function hy(t, e, n, i) {
  switch (My(e)) {
    case 2:
      var a = v1;
      break;
    case 8:
      a = b1;
      break;
    default:
      a = Wc;
  }
  n = a.bind(
    null,
    e,
    n,
    t
  ), a = void 0, !Zr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), i ? a !== void 0 ? t.addEventListener(e, n, {
    capture: !0,
    passive: a
  }) : t.addEventListener(e, n, !0) : a !== void 0 ? t.addEventListener(e, n, {
    passive: a
  }) : t.addEventListener(e, n, !1);
}
function mr(t, e, n, i, a) {
  var l = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    t: for (; ; ) {
      if (i === null) return;
      var s = i.tag;
      if (s === 3 || s === 4) {
        var o = i.stateNode.containerInfo;
        if (o === a) break;
        if (s === 4)
          for (s = i.return; s !== null; ) {
            var r = s.tag;
            if ((r === 3 || r === 4) && s.stateNode.containerInfo === a)
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (s = xi(o), s === null) return;
          if (r = s.tag, r === 5 || r === 6 || r === 26 || r === 27) {
            i = l = s;
            continue t;
          }
          o = o.parentNode;
        }
      }
      i = i.return;
    }
  pp(function() {
    var u = l, c = hc(n), d = [];
    t: {
      var f = Op.get(t);
      if (f !== void 0) {
        var h = po, v = t;
        switch (t) {
          case "keypress":
            if (ls(n) === 0) break t;
          case "keydown":
          case "keyup":
            h = Hb;
            break;
          case "focusin":
            v = "focus", h = Xo;
            break;
          case "focusout":
            v = "blur", h = Xo;
            break;
          case "beforeblur":
          case "afterblur":
            h = Xo;
            break;
          case "click":
            if (n.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Ff;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = wb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Yb;
            break;
          case Dp:
          case wp:
          case Rp:
            h = Ob;
            break;
          case Cp:
            h = Xb;
            break;
          case "scroll":
          case "scrollend":
            h = Mb;
            break;
          case "wheel":
            h = Qb;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Vb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = $f;
            break;
          case "toggle":
          case "beforetoggle":
            h = Pb;
        }
        var x = (e & 4) !== 0, S = !x && (t === "scroll" || t === "scrollend"), p = x ? f !== null ? f + "Capture" : null : f;
        x = [];
        for (var m = u, g; m !== null; ) {
          var y = m;
          if (g = y.stateNode, y = y.tag, y !== 5 && y !== 26 && y !== 27 || g === null || p === null || (y = Qa(m, p), y != null && x.push(
            Ia(m, y, g)
          )), S) break;
          m = m.return;
        }
        0 < x.length && (f = new h(
          f,
          v,
          null,
          n,
          c
        ), d.push({ event: f, listeners: x }));
      }
    }
    if (!(e & 7)) {
      t: {
        if (f = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout", f && n !== Xr && (v = n.relatedTarget || n.fromElement) && (xi(v) || v[ea]))
          break t;
        if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (v = n.relatedTarget || n.toElement, h = u, v = v ? xi(v) : null, v !== null && (S = ul(v), x = v.tag, v !== S || x !== 5 && x !== 27 && x !== 6) && (v = null)) : (h = null, v = u), h !== v)) {
          if (x = Ff, y = "onMouseLeave", p = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (x = $f, y = "onPointerLeave", p = "onPointerEnter", m = "pointer"), S = h == null ? f : Ta(h), g = v == null ? f : Ta(v), f = new x(
            y,
            m + "leave",
            h,
            n,
            c
          ), f.target = S, f.relatedTarget = g, y = null, xi(c) === u && (x = new x(
            p,
            m + "enter",
            v,
            n,
            c
          ), x.target = g, x.relatedTarget = S, y = x), S = y, h && v)
            e: {
              for (x = h, p = v, m = 0, g = x; g; g = di(g))
                m++;
              for (g = 0, y = p; y; y = di(y))
                g++;
              for (; 0 < m - g; )
                x = di(x), m--;
              for (; 0 < g - m; )
                p = di(p), g--;
              for (; m--; ) {
                if (x === p || p !== null && x === p.alternate)
                  break e;
                x = di(x), p = di(p);
              }
              x = null;
            }
          else x = null;
          h !== null && Xd(
            d,
            f,
            h,
            x,
            !1
          ), v !== null && S !== null && Xd(
            d,
            S,
            v,
            x,
            !0
          );
        }
      }
      t: {
        if (f = u ? Ta(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file")
          var T = nd;
        else if (ed(f))
          if (Sp)
            T = ax;
          else {
            T = nx;
            var M = ex;
          }
        else
          h = f.nodeName, !h || h.toLowerCase() !== "input" || f.type !== "checkbox" && f.type !== "radio" ? u && dc(u.elementType) && (T = nd) : T = ix;
        if (T && (T = T(t, u))) {
          xp(
            d,
            T,
            n,
            c
          );
          break t;
        }
        M && M(t, f, u), t === "focusout" && u && f.type === "number" && u.memoizedProps.value != null && qr(f, "number", f.value);
      }
      switch (M = u ? Ta(u) : window, t) {
        case "focusin":
          (ed(M) || M.contentEditable === "true") && (Ai = M, Qr = u, Ca = null);
          break;
        case "focusout":
          Ca = Qr = Ai = null;
          break;
        case "mousedown":
          Kr = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kr = !1, od(d, n, c);
          break;
        case "selectionchange":
          if (sx) break;
        case "keydown":
        case "keyup":
          od(d, n, c);
      }
      var A;
      if (gc)
        t: {
          switch (t) {
            case "compositionstart":
              var b = "onCompositionStart";
              break t;
            case "compositionend":
              b = "onCompositionEnd";
              break t;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break t;
          }
          b = void 0;
        }
      else
        Ti ? vp(t, n) && (b = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (yp && n.locale !== "ko" && (Ti || b !== "onCompositionStart" ? b === "onCompositionEnd" && Ti && (A = gp()) : (pn = c, mc = "value" in pn ? pn.value : pn.textContent, Ti = !0)), M = Qs(u, b), 0 < M.length && (b = new Wf(
        b,
        t,
        null,
        n,
        c
      ), d.push({ event: b, listeners: M }), A ? b.data = A : (A = bp(n), A !== null && (b.data = A)))), (A = Fb ? Wb(t, n) : $b(t, n)) && (b = Qs(u, "onBeforeInput"), 0 < b.length && (M = new Wf(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        c
      ), d.push({
        event: M,
        listeners: b
      }), M.data = A)), Yx(
        d,
        t,
        u,
        n,
        c
      );
    }
    dy(d, e);
  });
}
function Ia(t, e, n) {
  return {
    instance: t,
    listener: e,
    currentTarget: n
  };
}
function Qs(t, e) {
  for (var n = e + "Capture", i = []; t !== null; ) {
    var a = t, l = a.stateNode;
    if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || l === null || (a = Qa(t, n), a != null && i.unshift(
      Ia(t, a, l)
    ), a = Qa(t, e), a != null && i.push(
      Ia(t, a, l)
    )), t.tag === 3) return i;
    t = t.return;
  }
  return [];
}
function di(t) {
  if (t === null) return null;
  do
    t = t.return;
  while (t && t.tag !== 5 && t.tag !== 27);
  return t || null;
}
function Xd(t, e, n, i, a) {
  for (var l = e._reactName, s = []; n !== null && n !== i; ) {
    var o = n, r = o.alternate, u = o.stateNode;
    if (o = o.tag, r !== null && r === i) break;
    o !== 5 && o !== 26 && o !== 27 || u === null || (r = u, a ? (u = Qa(n, l), u != null && s.unshift(
      Ia(n, u, r)
    )) : a || (u = Qa(n, l), u != null && s.push(
      Ia(n, u, r)
    ))), n = n.return;
  }
  s.length !== 0 && t.push({ event: e, listeners: s });
}
var Qx = /\r\n?/g, Kx = /\u0000|\uFFFD/g;
function Zd(t) {
  return (typeof t == "string" ? t : "" + t).replace(Qx, `
`).replace(Kx, "");
}
function my(t, e) {
  return e = Zd(e), Zd(t) === e;
}
function wo() {
}
function W(t, e, n, i, a, l) {
  switch (n) {
    case "children":
      typeof i == "string" ? e === "body" || e === "textarea" && i === "" || qi(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && qi(t, "" + i);
      break;
    case "className":
      Ll(t, "class", i);
      break;
    case "tabIndex":
      Ll(t, "tabindex", i);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      Ll(t, n, i);
      break;
    case "style":
      mp(t, i, l);
      break;
    case "data":
      if (e !== "object") {
        Ll(t, "data", i);
        break;
      }
    case "src":
    case "href":
      if (i === "" && (e !== "a" || n !== "href")) {
        t.removeAttribute(n);
        break;
      }
      if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
        t.removeAttribute(n);
        break;
      }
      i = is("" + i), t.setAttribute(n, i);
      break;
    case "action":
    case "formAction":
      if (typeof i == "function") {
        t.setAttribute(
          n,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof l == "function" && (n === "formAction" ? (e !== "input" && W(t, e, "name", a.name, a, null), W(
          t,
          e,
          "formEncType",
          a.formEncType,
          a,
          null
        ), W(
          t,
          e,
          "formMethod",
          a.formMethod,
          a,
          null
        ), W(
          t,
          e,
          "formTarget",
          a.formTarget,
          a,
          null
        )) : (W(t, e, "encType", a.encType, a, null), W(t, e, "method", a.method, a, null), W(t, e, "target", a.target, a, null)));
      if (i == null || typeof i == "symbol" || typeof i == "boolean") {
        t.removeAttribute(n);
        break;
      }
      i = is("" + i), t.setAttribute(n, i);
      break;
    case "onClick":
      i != null && (t.onclick = wo);
      break;
    case "onScroll":
      i != null && q("scroll", t);
      break;
    case "onScrollEnd":
      i != null && q("scrollend", t);
      break;
    case "dangerouslySetInnerHTML":
      if (i != null) {
        if (typeof i != "object" || !("__html" in i))
          throw Error(E(61));
        if (n = i.__html, n != null) {
          if (a.children != null) throw Error(E(60));
          t.innerHTML = n;
        }
      }
      break;
    case "multiple":
      t.multiple = i && typeof i != "function" && typeof i != "symbol";
      break;
    case "muted":
      t.muted = i && typeof i != "function" && typeof i != "symbol";
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
        t.removeAttribute("xlink:href");
        break;
      }
      n = is("" + i), t.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        n
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
      break;
    case "capture":
    case "download":
      i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
      break;
    case "rowSpan":
    case "start":
      i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
      break;
    case "popover":
      q("beforetoggle", t), q("toggle", t), ns(t, "popover", i);
      break;
    case "xlinkActuate":
      je(
        t,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        i
      );
      break;
    case "xlinkArcrole":
      je(
        t,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        i
      );
      break;
    case "xlinkRole":
      je(
        t,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        i
      );
      break;
    case "xlinkShow":
      je(
        t,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        i
      );
      break;
    case "xlinkTitle":
      je(
        t,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        i
      );
      break;
    case "xlinkType":
      je(
        t,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        i
      );
      break;
    case "xmlBase":
      je(
        t,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        i
      );
      break;
    case "xmlLang":
      je(
        t,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        i
      );
      break;
    case "xmlSpace":
      je(
        t,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        i
      );
      break;
    case "is":
      ns(t, "is", i);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ab.get(n) || n, ns(t, n, i));
  }
}
function vu(t, e, n, i, a, l) {
  switch (n) {
    case "style":
      mp(t, i, l);
      break;
    case "dangerouslySetInnerHTML":
      if (i != null) {
        if (typeof i != "object" || !("__html" in i))
          throw Error(E(61));
        if (n = i.__html, n != null) {
          if (a.children != null) throw Error(E(60));
          t.innerHTML = n;
        }
      }
      break;
    case "children":
      typeof i == "string" ? qi(t, i) : (typeof i == "number" || typeof i == "bigint") && qi(t, "" + i);
      break;
    case "onScroll":
      i != null && q("scroll", t);
      break;
    case "onScrollEnd":
      i != null && q("scrollend", t);
      break;
    case "onClick":
      i != null && (t.onclick = wo);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!rp.hasOwnProperty(n))
        t: {
          if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), e = n.slice(2, a ? n.length - 7 : void 0), l = t[Pt] || null, l = l != null ? l[n] : null, typeof l == "function" && t.removeEventListener(e, l, a), typeof i == "function")) {
            typeof l != "function" && l !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, i, a);
            break t;
          }
          n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : ns(t, n, i);
        }
  }
}
function Vt(t, e, n) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      q("error", t), q("load", t);
      var i = !1, a = !1, l;
      for (l in n)
        if (n.hasOwnProperty(l)) {
          var s = n[l];
          if (s != null)
            switch (l) {
              case "src":
                i = !0;
                break;
              case "srcSet":
                a = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(E(137, e));
              default:
                W(t, e, l, s, n, null);
            }
        }
      a && W(t, e, "srcSet", n.srcSet, n, null), i && W(t, e, "src", n.src, n, null);
      return;
    case "input":
      q("invalid", t);
      var o = l = s = a = null, r = null, u = null;
      for (i in n)
        if (n.hasOwnProperty(i)) {
          var c = n[i];
          if (c != null)
            switch (i) {
              case "name":
                a = c;
                break;
              case "type":
                s = c;
                break;
              case "checked":
                r = c;
                break;
              case "defaultChecked":
                u = c;
                break;
              case "value":
                l = c;
                break;
              case "defaultValue":
                o = c;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (c != null)
                  throw Error(E(137, e));
                break;
              default:
                W(t, e, i, c, n, null);
            }
        }
      fp(
        t,
        l,
        o,
        r,
        u,
        s,
        a,
        !1
      ), ws(t);
      return;
    case "select":
      q("invalid", t), i = s = l = null;
      for (a in n)
        if (n.hasOwnProperty(a) && (o = n[a], o != null))
          switch (a) {
            case "value":
              l = o;
              break;
            case "defaultValue":
              s = o;
              break;
            case "multiple":
              i = o;
            default:
              W(t, e, a, o, n, null);
          }
      e = l, n = s, t.multiple = !!i, e != null ? _i(t, !!i, e, !1) : n != null && _i(t, !!i, n, !0);
      return;
    case "textarea":
      q("invalid", t), l = a = i = null;
      for (s in n)
        if (n.hasOwnProperty(s) && (o = n[s], o != null))
          switch (s) {
            case "value":
              i = o;
              break;
            case "defaultValue":
              a = o;
              break;
            case "children":
              l = o;
              break;
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error(E(91));
              break;
            default:
              W(t, e, s, o, n, null);
          }
      hp(t, i, a, l), ws(t);
      return;
    case "option":
      for (r in n)
        if (n.hasOwnProperty(r) && (i = n[r], i != null))
          switch (r) {
            case "selected":
              t.selected = i && typeof i != "function" && typeof i != "symbol";
              break;
            default:
              W(t, e, r, i, n, null);
          }
      return;
    case "dialog":
      q("beforetoggle", t), q("toggle", t), q("cancel", t), q("close", t);
      break;
    case "iframe":
    case "object":
      q("load", t);
      break;
    case "video":
    case "audio":
      for (i = 0; i < $a.length; i++)
        q($a[i], t);
      break;
    case "image":
      q("error", t), q("load", t);
      break;
    case "details":
      q("toggle", t);
      break;
    case "embed":
    case "source":
    case "link":
      q("error", t), q("load", t);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (u in n)
        if (n.hasOwnProperty(u) && (i = n[u], i != null))
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(E(137, e));
            default:
              W(t, e, u, i, n, null);
          }
      return;
    default:
      if (dc(e)) {
        for (c in n)
          n.hasOwnProperty(c) && (i = n[c], i !== void 0 && vu(
            t,
            e,
            c,
            i,
            n,
            void 0
          ));
        return;
      }
  }
  for (o in n)
    n.hasOwnProperty(o) && (i = n[o], i != null && W(t, e, o, i, n, null));
}
function Px(t, e, n, i) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var a = null, l = null, s = null, o = null, r = null, u = null, c = null;
      for (h in n) {
        var d = n[h];
        if (n.hasOwnProperty(h) && d != null)
          switch (h) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              r = d;
            default:
              i.hasOwnProperty(h) || W(t, e, h, null, i, d);
          }
      }
      for (var f in i) {
        var h = i[f];
        if (d = n[f], i.hasOwnProperty(f) && (h != null || d != null))
          switch (f) {
            case "type":
              l = h;
              break;
            case "name":
              a = h;
              break;
            case "checked":
              u = h;
              break;
            case "defaultChecked":
              c = h;
              break;
            case "value":
              s = h;
              break;
            case "defaultValue":
              o = h;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (h != null)
                throw Error(E(137, e));
              break;
            default:
              h !== d && W(
                t,
                e,
                f,
                h,
                i,
                d
              );
          }
      }
      Yr(
        t,
        s,
        o,
        r,
        u,
        c,
        l,
        a
      );
      return;
    case "select":
      h = s = o = f = null;
      for (l in n)
        if (r = n[l], n.hasOwnProperty(l) && r != null)
          switch (l) {
            case "value":
              break;
            case "multiple":
              h = r;
            default:
              i.hasOwnProperty(l) || W(
                t,
                e,
                l,
                null,
                i,
                r
              );
          }
      for (a in i)
        if (l = i[a], r = n[a], i.hasOwnProperty(a) && (l != null || r != null))
          switch (a) {
            case "value":
              f = l;
              break;
            case "defaultValue":
              o = l;
              break;
            case "multiple":
              s = l;
            default:
              l !== r && W(
                t,
                e,
                a,
                l,
                i,
                r
              );
          }
      e = o, n = s, i = h, f != null ? _i(t, !!n, f, !1) : !!i != !!n && (e != null ? _i(t, !!n, e, !0) : _i(t, !!n, n ? [] : "", !1));
      return;
    case "textarea":
      h = f = null;
      for (o in n)
        if (a = n[o], n.hasOwnProperty(o) && a != null && !i.hasOwnProperty(o))
          switch (o) {
            case "value":
              break;
            case "children":
              break;
            default:
              W(t, e, o, null, i, a);
          }
      for (s in i)
        if (a = i[s], l = n[s], i.hasOwnProperty(s) && (a != null || l != null))
          switch (s) {
            case "value":
              f = a;
              break;
            case "defaultValue":
              h = a;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) throw Error(E(91));
              break;
            default:
              a !== l && W(t, e, s, a, i, l);
          }
      dp(t, f, h);
      return;
    case "option":
      for (var v in n)
        if (f = n[v], n.hasOwnProperty(v) && f != null && !i.hasOwnProperty(v))
          switch (v) {
            case "selected":
              t.selected = !1;
              break;
            default:
              W(
                t,
                e,
                v,
                null,
                i,
                f
              );
          }
      for (r in i)
        if (f = i[r], h = n[r], i.hasOwnProperty(r) && f !== h && (f != null || h != null))
          switch (r) {
            case "selected":
              t.selected = f && typeof f != "function" && typeof f != "symbol";
              break;
            default:
              W(
                t,
                e,
                r,
                f,
                i,
                h
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var x in n)
        f = n[x], n.hasOwnProperty(x) && f != null && !i.hasOwnProperty(x) && W(t, e, x, null, i, f);
      for (u in i)
        if (f = i[u], h = n[u], i.hasOwnProperty(u) && f !== h && (f != null || h != null))
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (f != null)
                throw Error(E(137, e));
              break;
            default:
              W(
                t,
                e,
                u,
                f,
                i,
                h
              );
          }
      return;
    default:
      if (dc(e)) {
        for (var S in n)
          f = n[S], n.hasOwnProperty(S) && f !== void 0 && !i.hasOwnProperty(S) && vu(
            t,
            e,
            S,
            void 0,
            i,
            f
          );
        for (c in i)
          f = i[c], h = n[c], !i.hasOwnProperty(c) || f === h || f === void 0 && h === void 0 || vu(
            t,
            e,
            c,
            f,
            i,
            h
          );
        return;
      }
  }
  for (var p in n)
    f = n[p], n.hasOwnProperty(p) && f != null && !i.hasOwnProperty(p) && W(t, e, p, null, i, f);
  for (d in i)
    f = i[d], h = n[d], !i.hasOwnProperty(d) || f === h || f == null && h == null || W(t, e, d, f, i, h);
}
var bu = null, xu = null;
function Ks(t) {
  return t.nodeType === 9 ? t : t.ownerDocument;
}
function Qd(t) {
  switch (t) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function py(t, e) {
  if (t === 0)
    switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return t === 1 && e === "foreignObject" ? 0 : t;
}
function Su(t, e) {
  return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var pr = null;
function Jx() {
  var t = window.event;
  return t && t.type === "popstate" ? t === pr ? !1 : (pr = t, !0) : (pr = null, !1);
}
var gy = typeof setTimeout == "function" ? setTimeout : void 0, Fx = typeof clearTimeout == "function" ? clearTimeout : void 0, Kd = typeof Promise == "function" ? Promise : void 0, Wx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd < "u" ? function(t) {
  return Kd.resolve(null).then(t).catch($x);
} : gy;
function $x(t) {
  setTimeout(function() {
    throw t;
  });
}
function _n(t) {
  return t === "head";
}
function Pd(t, e) {
  var n = e, i = 0, a = 0;
  do {
    var l = n.nextSibling;
    if (t.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (0 < i && 8 > i) {
          n = i;
          var s = t.ownerDocument;
          if (n & 1 && ka(s.documentElement), n & 2 && ka(s.body), n & 4)
            for (n = s.head, ka(n), s = n.firstChild; s; ) {
              var o = s.nextSibling, r = s.nodeName;
              s[hl] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = o;
            }
        }
        if (a === 0) {
          t.removeChild(l), al(e);
          return;
        }
        a--;
      } else
        n === "$" || n === "$?" || n === "$!" ? a++ : i = n.charCodeAt(0) - 48;
    else i = 0;
    n = l;
  } while (n);
  al(e);
}
function Tu(t) {
  var e = t.firstChild;
  for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
    var n = e;
    switch (e = e.nextSibling, n.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        Tu(n), fc(n);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if (n.rel.toLowerCase() === "stylesheet") continue;
    }
    t.removeChild(n);
  }
}
function Ix(t, e, n, i) {
  for (; t.nodeType === 1; ) {
    var a = n;
    if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
      if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
        break;
    } else if (i) {
      if (!t[hl])
        switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (l = t.getAttribute("rel"), l === "stylesheet" && t.hasAttribute("data-precedence"))
              break;
            if (l !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
              break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (l = t.getAttribute("src"), (l !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && l && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
              break;
            return t;
          default:
            return t;
        }
    } else if (e === "input" && t.type === "hidden") {
      var l = a.name == null ? null : "" + a.name;
      if (a.type === "hidden" && t.getAttribute("name") === l)
        return t;
    } else return t;
    if (t = xe(t.nextSibling), t === null) break;
  }
  return null;
}
function t1(t, e, n) {
  if (e === "") return null;
  for (; t.nodeType !== 3; )
    if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = xe(t.nextSibling), t === null)) return null;
  return t;
}
function Au(t) {
  return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
}
function e1(t, e) {
  var n = t.ownerDocument;
  if (t.data !== "$?" || n.readyState === "complete")
    e();
  else {
    var i = function() {
      e(), n.removeEventListener("DOMContentLoaded", i);
    };
    n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
  }
}
function xe(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        break;
      if (e === "/$") return null;
    }
  }
  return t;
}
var Eu = null;
function Jd(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
function yy(t, e, n) {
  switch (e = Ks(n), t) {
    case "html":
      if (t = e.documentElement, !t) throw Error(E(452));
      return t;
    case "head":
      if (t = e.head, !t) throw Error(E(453));
      return t;
    case "body":
      if (t = e.body, !t) throw Error(E(454));
      return t;
    default:
      throw Error(E(451));
  }
}
function ka(t) {
  for (var e = t.attributes; e.length; )
    t.removeAttributeNode(e[0]);
  fc(t);
}
var pe = /* @__PURE__ */ new Map(), Fd = /* @__PURE__ */ new Set();
function Ps(t) {
  return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
}
var tn = P.d;
P.d = {
  f: n1,
  r: i1,
  D: a1,
  C: l1,
  L: s1,
  m: o1,
  X: u1,
  S: r1,
  M: c1
};
function n1() {
  var t = tn.f(), e = Eo();
  return t || e;
}
function i1(t) {
  var e = na(t);
  e !== null && e.tag === 5 && e.type === "form" ? cg(e) : tn.r(t);
}
var la = typeof document > "u" ? null : document;
function vy(t, e, n) {
  var i = la;
  if (i && typeof e == "string" && e) {
    var a = ue(e);
    a = 'link[rel="' + t + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Fd.has(a) || (Fd.add(a), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(a) === null && (e = i.createElement("link"), Vt(e, "link", t), Mt(e), i.head.appendChild(e)));
  }
}
function a1(t) {
  tn.D(t), vy("dns-prefetch", t, null);
}
function l1(t, e) {
  tn.C(t, e), vy("preconnect", t, e);
}
function s1(t, e, n) {
  tn.L(t, e, n);
  var i = la;
  if (i && t && e) {
    var a = 'link[rel="preload"][as="' + ue(e) + '"]';
    e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + ue(
      n.imageSrcSet
    ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + ue(
      n.imageSizes
    ) + '"]')) : a += '[href="' + ue(t) + '"]';
    var l = a;
    switch (e) {
      case "style":
        l = Wi(t);
        break;
      case "script":
        l = sa(t);
    }
    pe.has(l) || (t = it(
      {
        rel: "preload",
        href: e === "image" && n && n.imageSrcSet ? void 0 : t,
        as: e
      },
      n
    ), pe.set(l, t), i.querySelector(a) !== null || e === "style" && i.querySelector(Al(l)) || e === "script" && i.querySelector(El(l)) || (e = i.createElement("link"), Vt(e, "link", t), Mt(e), i.head.appendChild(e)));
  }
}
function o1(t, e) {
  tn.m(t, e);
  var n = la;
  if (n && t) {
    var i = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + ue(i) + '"][href="' + ue(t) + '"]', l = a;
    switch (i) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        l = sa(t);
    }
    if (!pe.has(l) && (t = it({ rel: "modulepreload", href: t }, e), pe.set(l, t), n.querySelector(a) === null)) {
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (n.querySelector(El(l)))
            return;
      }
      i = n.createElement("link"), Vt(i, "link", t), Mt(i), n.head.appendChild(i);
    }
  }
}
function r1(t, e, n) {
  tn.S(t, e, n);
  var i = la;
  if (i && t) {
    var a = Ui(i).hoistableStyles, l = Wi(t);
    e = e || "default";
    var s = a.get(l);
    if (!s) {
      var o = { loading: 0, preload: null };
      if (s = i.querySelector(
        Al(l)
      ))
        o.loading = 5;
      else {
        t = it(
          { rel: "stylesheet", href: t, "data-precedence": e },
          n
        ), (n = pe.get(l)) && Pc(t, n);
        var r = s = i.createElement("link");
        Mt(r), Vt(r, "link", t), r._p = new Promise(function(u, c) {
          r.onload = u, r.onerror = c;
        }), r.addEventListener("load", function() {
          o.loading |= 1;
        }), r.addEventListener("error", function() {
          o.loading |= 2;
        }), o.loading |= 4, ds(s, e, i);
      }
      s = {
        type: "stylesheet",
        instance: s,
        count: 1,
        state: o
      }, a.set(l, s);
    }
  }
}
function u1(t, e) {
  tn.X(t, e);
  var n = la;
  if (n && t) {
    var i = Ui(n).hoistableScripts, a = sa(t), l = i.get(a);
    l || (l = n.querySelector(El(a)), l || (t = it({ src: t, async: !0 }, e), (e = pe.get(a)) && Jc(t, e), l = n.createElement("script"), Mt(l), Vt(l, "link", t), n.head.appendChild(l)), l = {
      type: "script",
      instance: l,
      count: 1,
      state: null
    }, i.set(a, l));
  }
}
function c1(t, e) {
  tn.M(t, e);
  var n = la;
  if (n && t) {
    var i = Ui(n).hoistableScripts, a = sa(t), l = i.get(a);
    l || (l = n.querySelector(El(a)), l || (t = it({ src: t, async: !0, type: "module" }, e), (e = pe.get(a)) && Jc(t, e), l = n.createElement("script"), Mt(l), Vt(l, "link", t), n.head.appendChild(l)), l = {
      type: "script",
      instance: l,
      count: 1,
      state: null
    }, i.set(a, l));
  }
}
function Wd(t, e, n, i) {
  var a = (a = bn.current) ? Ps(a) : null;
  if (!a) throw Error(E(446));
  switch (t) {
    case "meta":
    case "title":
      return null;
    case "style":
      return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Wi(n.href), n = Ui(
        a
      ).hoistableStyles, i = n.get(e), i || (i = {
        type: "style",
        instance: null,
        count: 0,
        state: null
      }, n.set(e, i)), i) : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
        t = Wi(n.href);
        var l = Ui(
          a
        ).hoistableStyles, s = l.get(t);
        if (s || (a = a.ownerDocument || a, s = {
          type: "stylesheet",
          instance: null,
          count: 0,
          state: { loading: 0, preload: null }
        }, l.set(t, s), (l = a.querySelector(
          Al(t)
        )) && !l._p && (s.instance = l, s.state.loading = 5), pe.has(t) || (n = {
          rel: "preload",
          as: "style",
          href: n.href,
          crossOrigin: n.crossOrigin,
          integrity: n.integrity,
          media: n.media,
          hrefLang: n.hrefLang,
          referrerPolicy: n.referrerPolicy
        }, pe.set(t, n), l || f1(
          a,
          t,
          n,
          s.state
        ))), e && i === null)
          throw Error(E(528, ""));
        return s;
      }
      if (e && i !== null)
        throw Error(E(529, ""));
      return null;
    case "script":
      return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = sa(n), n = Ui(
        a
      ).hoistableScripts, i = n.get(e), i || (i = {
        type: "script",
        instance: null,
        count: 0,
        state: null
      }, n.set(e, i)), i) : { type: "void", instance: null, count: 0, state: null };
    default:
      throw Error(E(444, t));
  }
}
function Wi(t) {
  return 'href="' + ue(t) + '"';
}
function Al(t) {
  return 'link[rel="stylesheet"][' + t + "]";
}
function by(t) {
  return it({}, t, {
    "data-precedence": t.precedence,
    precedence: null
  });
}
function f1(t, e, n, i) {
  t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
    return i.loading |= 1;
  }), e.addEventListener("error", function() {
    return i.loading |= 2;
  }), Vt(e, "link", n), Mt(e), t.head.appendChild(e));
}
function sa(t) {
  return '[src="' + ue(t) + '"]';
}
function El(t) {
  return "script[async]" + t;
}
function $d(t, e, n) {
  if (e.count++, e.instance === null)
    switch (e.type) {
      case "style":
        var i = t.querySelector(
          'style[data-href~="' + ue(n.href) + '"]'
        );
        if (i)
          return e.instance = i, Mt(i), i;
        var a = it({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null
        });
        return i = (t.ownerDocument || t).createElement(
          "style"
        ), Mt(i), Vt(i, "style", a), ds(i, n.precedence, t), e.instance = i;
      case "stylesheet":
        a = Wi(n.href);
        var l = t.querySelector(
          Al(a)
        );
        if (l)
          return e.state.loading |= 4, e.instance = l, Mt(l), l;
        i = by(n), (a = pe.get(a)) && Pc(i, a), l = (t.ownerDocument || t).createElement("link"), Mt(l);
        var s = l;
        return s._p = new Promise(function(o, r) {
          s.onload = o, s.onerror = r;
        }), Vt(l, "link", i), e.state.loading |= 4, ds(l, n.precedence, t), e.instance = l;
      case "script":
        return l = sa(n.src), (a = t.querySelector(
          El(l)
        )) ? (e.instance = a, Mt(a), a) : (i = n, (a = pe.get(l)) && (i = it({}, n), Jc(i, a)), t = t.ownerDocument || t, a = t.createElement("script"), Mt(a), Vt(a, "link", i), t.head.appendChild(a), e.instance = a);
      case "void":
        return null;
      default:
        throw Error(E(443, e.type));
    }
  else
    e.type === "stylesheet" && !(e.state.loading & 4) && (i = e.instance, e.state.loading |= 4, ds(i, n.precedence, t));
  return e.instance;
}
function ds(t, e, n) {
  for (var i = n.querySelectorAll(
    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
  ), a = i.length ? i[i.length - 1] : null, l = a, s = 0; s < i.length; s++) {
    var o = i[s];
    if (o.dataset.precedence === e) l = o;
    else if (l !== a) break;
  }
  l ? l.parentNode.insertBefore(t, l.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
}
function Pc(t, e) {
  t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
}
function Jc(t, e) {
  t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
}
var hs = null;
function Id(t, e, n) {
  if (hs === null) {
    var i = /* @__PURE__ */ new Map(), a = hs = /* @__PURE__ */ new Map();
    a.set(n, i);
  } else
    a = hs, i = a.get(n), i || (i = /* @__PURE__ */ new Map(), a.set(n, i));
  if (i.has(t)) return i;
  for (i.set(t, null), n = n.getElementsByTagName(t), a = 0; a < n.length; a++) {
    var l = n[a];
    if (!(l[hl] || l[_t] || t === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
      var s = l.getAttribute(e) || "";
      s = t + s;
      var o = i.get(s);
      o ? o.push(l) : i.set(s, [l]);
    }
  }
  return i;
}
function th(t, e, n) {
  t = t.ownerDocument || t, t.head.insertBefore(
    n,
    e === "title" ? t.querySelector("head > title") : null
  );
}
function d1(t, e, n) {
  if (n === 1 || e.itemProp != null) return !1;
  switch (t) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
        break;
      return !0;
    case "link":
      if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
        break;
      switch (e.rel) {
        case "stylesheet":
          return t = e.disabled, typeof e.precedence == "string" && t == null;
        default:
          return !0;
      }
    case "script":
      if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
        return !0;
  }
  return !1;
}
function xy(t) {
  return !(t.type === "stylesheet" && !(t.state.loading & 3));
}
var tl = null;
function h1() {
}
function m1(t, e, n) {
  if (tl === null) throw Error(E(475));
  var i = tl;
  if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && !(e.state.loading & 4)) {
    if (e.instance === null) {
      var a = Wi(n.href), l = t.querySelector(
        Al(a)
      );
      if (l) {
        t = l._p, t !== null && typeof t == "object" && typeof t.then == "function" && (i.count++, i = Js.bind(i), t.then(i, i)), e.state.loading |= 4, e.instance = l, Mt(l);
        return;
      }
      l = t.ownerDocument || t, n = by(n), (a = pe.get(a)) && Pc(n, a), l = l.createElement("link"), Mt(l);
      var s = l;
      s._p = new Promise(function(o, r) {
        s.onload = o, s.onerror = r;
      }), Vt(l, "link", n), e.instance = l;
    }
    i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (i.count++, e = Js.bind(i), t.addEventListener("load", e), t.addEventListener("error", e));
  }
}
function p1() {
  if (tl === null) throw Error(E(475));
  var t = tl;
  return t.stylesheets && t.count === 0 && Mu(t, t.stylesheets), 0 < t.count ? function(e) {
    var n = setTimeout(function() {
      if (t.stylesheets && Mu(t, t.stylesheets), t.unsuspend) {
        var i = t.unsuspend;
        t.unsuspend = null, i();
      }
    }, 6e4);
    return t.unsuspend = e, function() {
      t.unsuspend = null, clearTimeout(n);
    };
  } : null;
}
function Js() {
  if (this.count--, this.count === 0) {
    if (this.stylesheets) Mu(this, this.stylesheets);
    else if (this.unsuspend) {
      var t = this.unsuspend;
      this.unsuspend = null, t();
    }
  }
}
var Fs = null;
function Mu(t, e) {
  t.stylesheets = null, t.unsuspend !== null && (t.count++, Fs = /* @__PURE__ */ new Map(), e.forEach(g1, t), Fs = null, Js.call(t));
}
function g1(t, e) {
  if (!(e.state.loading & 4)) {
    var n = Fs.get(t);
    if (n) var i = n.get(null);
    else {
      n = /* @__PURE__ */ new Map(), Fs.set(t, n);
      for (var a = t.querySelectorAll(
        "link[data-precedence],style[data-precedence]"
      ), l = 0; l < a.length; l++) {
        var s = a[l];
        (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), i = s);
      }
      i && n.set(null, i);
    }
    a = e.instance, s = a.getAttribute("data-precedence"), l = n.get(s) || i, l === i && n.set(null, a), n.set(s, a), this.count++, i = Js.bind(this), a.addEventListener("load", i), a.addEventListener("error", i), l ? l.parentNode.insertBefore(a, l.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
  }
}
var el = {
  $$typeof: qe,
  Provider: null,
  Consumer: null,
  _currentValue: Qn,
  _currentValue2: Qn,
  _threadCount: 0
};
function y1(t, e, n, i, a, l, s, o) {
  this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.hiddenUpdates = jo(null), this.identifierPrefix = i, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
}
function Sy(t, e, n, i, a, l, s, o, r, u, c, d) {
  return t = new y1(
    t,
    e,
    n,
    s,
    o,
    r,
    u,
    d
  ), e = 1, l === !0 && (e |= 24), l = It(3, null, null, e), t.current = l, l.stateNode = t, e = Ac(), e.refCount++, t.pooledCache = e, e.refCount++, l.memoizedState = {
    element: i,
    isDehydrated: n,
    cache: e
  }, Mc(l), t;
}
function Ty(t) {
  return t ? (t = Di, t) : Di;
}
function Ay(t, e, n, i, a, l) {
  a = Ty(a), i.context === null ? i.context = a : i.pendingContext = a, i = xn(e), i.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (i.callback = l), n = Sn(t, i, e), n !== null && (ie(n, t, e), Va(n, t, e));
}
function eh(t, e) {
  if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Fc(t, e) {
  eh(t, e), (t = t.alternate) && eh(t, e);
}
function Ey(t) {
  if (t.tag === 13) {
    var e = ia(t, 67108864);
    e !== null && ie(e, t, 67108864), Fc(t, 67108864);
  }
}
var Ws = !0;
function v1(t, e, n, i) {
  var a = B.T;
  B.T = null;
  var l = P.p;
  try {
    P.p = 2, Wc(t, e, n, i);
  } finally {
    P.p = l, B.T = a;
  }
}
function b1(t, e, n, i) {
  var a = B.T;
  B.T = null;
  var l = P.p;
  try {
    P.p = 8, Wc(t, e, n, i);
  } finally {
    P.p = l, B.T = a;
  }
}
function Wc(t, e, n, i) {
  if (Ws) {
    var a = Du(i);
    if (a === null)
      mr(
        t,
        e,
        i,
        $s,
        n
      ), nh(t, i);
    else if (S1(
      a,
      t,
      e,
      n,
      i
    ))
      i.stopPropagation();
    else if (nh(t, i), e & 4 && -1 < x1.indexOf(t)) {
      for (; a !== null; ) {
        var l = na(a);
        if (l !== null)
          switch (l.tag) {
            case 3:
              if (l = l.stateNode, l.current.memoizedState.isDehydrated) {
                var s = kn(l.pendingLanes);
                if (s !== 0) {
                  var o = l;
                  for (o.pendingLanes |= 2, o.entangledLanes |= 2; s; ) {
                    var r = 1 << 31 - ee(s);
                    o.entanglements[1] |= r, s &= ~r;
                  }
                  Be(l), !(F & 6) && (Ys = Oe() + 500, Tl(0));
                }
              }
              break;
            case 13:
              o = ia(l, 2), o !== null && ie(o, l, 2), Eo(), Fc(l, 2);
          }
        if (l = Du(i), l === null && mr(
          t,
          e,
          i,
          $s,
          n
        ), l === a) break;
        a = l;
      }
      a !== null && i.stopPropagation();
    } else
      mr(
        t,
        e,
        i,
        null,
        n
      );
  }
}
function Du(t) {
  return t = hc(t), $c(t);
}
var $s = null;
function $c(t) {
  if ($s = null, t = xi(t), t !== null) {
    var e = ul(t);
    if (e === null) t = null;
    else {
      var n = e.tag;
      if (n === 13) {
        if (t = Jm(e), t !== null) return t;
        t = null;
      } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated)
          return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null;
      } else e !== t && (t = null);
    }
  }
  return $s = t, null;
}
function My(t) {
  switch (t) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (lb()) {
        case Im:
          return 2;
        case tp:
          return 8;
        case Ds:
        case sb:
          return 32;
        case ep:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var wu = !1, En = null, Mn = null, Dn = null, nl = /* @__PURE__ */ new Map(), il = /* @__PURE__ */ new Map(), hn = [], x1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
  " "
);
function nh(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      Mn = null;
      break;
    case "mouseover":
    case "mouseout":
      Dn = null;
      break;
    case "pointerover":
    case "pointerout":
      nl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      il.delete(e.pointerId);
  }
}
function ya(t, e, n, i, a, l) {
  return t === null || t.nativeEvent !== l ? (t = {
    blockedOn: e,
    domEventName: n,
    eventSystemFlags: i,
    nativeEvent: l,
    targetContainers: [a]
  }, e !== null && (e = na(e), e !== null && Ey(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
}
function S1(t, e, n, i, a) {
  switch (e) {
    case "focusin":
      return En = ya(
        En,
        t,
        e,
        n,
        i,
        a
      ), !0;
    case "dragenter":
      return Mn = ya(
        Mn,
        t,
        e,
        n,
        i,
        a
      ), !0;
    case "mouseover":
      return Dn = ya(
        Dn,
        t,
        e,
        n,
        i,
        a
      ), !0;
    case "pointerover":
      var l = a.pointerId;
      return nl.set(
        l,
        ya(
          nl.get(l) || null,
          t,
          e,
          n,
          i,
          a
        )
      ), !0;
    case "gotpointercapture":
      return l = a.pointerId, il.set(
        l,
        ya(
          il.get(l) || null,
          t,
          e,
          n,
          i,
          a
        )
      ), !0;
  }
  return !1;
}
function Dy(t) {
  var e = xi(t.target);
  if (e !== null) {
    var n = ul(e);
    if (n !== null) {
      if (e = n.tag, e === 13) {
        if (e = Jm(n), e !== null) {
          t.blockedOn = e, mb(t.priority, function() {
            if (n.tag === 13) {
              var i = ne();
              i = uc(i);
              var a = ia(n, i);
              a !== null && ie(a, n, i), Fc(n, i);
            }
          });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function ms(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Du(t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(
        n.type,
        n
      );
      Xr = i, n.target.dispatchEvent(i), Xr = null;
    } else
      return e = na(n), e !== null && Ey(e), t.blockedOn = n, !1;
    e.shift();
  }
  return !0;
}
function ih(t, e, n) {
  ms(t) && n.delete(e);
}
function T1() {
  wu = !1, En !== null && ms(En) && (En = null), Mn !== null && ms(Mn) && (Mn = null), Dn !== null && ms(Dn) && (Dn = null), nl.forEach(ih), il.forEach(ih);
}
function Ql(t, e) {
  t.blockedOn === e && (t.blockedOn = null, wu || (wu = !0, Tt.unstable_scheduleCallback(
    Tt.unstable_NormalPriority,
    T1
  )));
}
var Kl = null;
function ah(t) {
  Kl !== t && (Kl = t, Tt.unstable_scheduleCallback(
    Tt.unstable_NormalPriority,
    function() {
      Kl === t && (Kl = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e], i = t[e + 1], a = t[e + 2];
        if (typeof i != "function") {
          if ($c(i || n) === null)
            continue;
          break;
        }
        var l = na(n);
        l !== null && (t.splice(e, 3), e -= 3, su(
          l,
          {
            pending: !0,
            data: a,
            method: n.method,
            action: i
          },
          i,
          a
        ));
      }
    }
  ));
}
function al(t) {
  function e(r) {
    return Ql(r, t);
  }
  En !== null && Ql(En, t), Mn !== null && Ql(Mn, t), Dn !== null && Ql(Dn, t), nl.forEach(e), il.forEach(e);
  for (var n = 0; n < hn.length; n++) {
    var i = hn[n];
    i.blockedOn === t && (i.blockedOn = null);
  }
  for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); )
    Dy(n), n.blockedOn === null && hn.shift();
  if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
    for (i = 0; i < n.length; i += 3) {
      var a = n[i], l = n[i + 1], s = a[Pt] || null;
      if (typeof l == "function")
        s || ah(n);
      else if (s) {
        var o = null;
        if (l && l.hasAttribute("formAction")) {
          if (a = l, s = l[Pt] || null)
            o = s.formAction;
          else if ($c(a) !== null) continue;
        } else o = s.action;
        typeof o == "function" ? n[i + 1] = o : (n.splice(i, 3), i -= 3), ah(n);
      }
    }
}
function Ic(t) {
  this._internalRoot = t;
}
Ro.prototype.render = Ic.prototype.render = function(t) {
  var e = this._internalRoot;
  if (e === null) throw Error(E(409));
  var n = e.current, i = ne();
  Ay(n, i, t, e, null, null);
};
Ro.prototype.unmount = Ic.prototype.unmount = function() {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Ay(t.current, 2, null, t, null, null), Eo(), e[ea] = null;
  }
};
function Ro(t) {
  this._internalRoot = t;
}
Ro.prototype.unstable_scheduleHydration = function(t) {
  if (t) {
    var e = sp();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < hn.length && e !== 0 && e < hn[n].priority; n++) ;
    hn.splice(n, 0, t), n === 0 && Dy(t);
  }
};
var lh = Km.version;
if (lh !== "19.1.1")
  throw Error(
    E(
      527,
      lh,
      "19.1.1"
    )
  );
P.findDOMNode = function(t) {
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function" ? Error(E(188)) : (t = Object.keys(t).join(","), Error(E(268, t)));
  return t = $0(e), t = t !== null ? Fm(t) : null, t = t === null ? null : t.stateNode, t;
};
var A1 = {
  bundleType: 0,
  version: "19.1.1",
  rendererPackageName: "react-dom",
  currentDispatcherRef: B,
  reconcilerVersion: "19.1.1"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pl.isDisabled && Pl.supportsFiber)
    try {
      cl = Pl.inject(
        A1
      ), te = Pl;
    } catch {
    }
}
fo.createRoot = function(t, e) {
  if (!Pm(t)) throw Error(E(299));
  var n = !1, i = "", a = Sg, l = Tg, s = Ag, o = null;
  return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (l = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks)), e = Sy(
    t,
    1,
    !1,
    null,
    null,
    n,
    i,
    a,
    l,
    s,
    o,
    null
  ), t[ea] = e.current, Kc(t), new Ic(e);
};
fo.hydrateRoot = function(t, e, n) {
  if (!Pm(t)) throw Error(E(299));
  var i = !1, a = "", l = Sg, s = Tg, o = Ag, r = null, u = null;
  return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (l = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (o = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (r = n.unstable_transitionCallbacks), n.formState !== void 0 && (u = n.formState)), e = Sy(
    t,
    1,
    !0,
    e,
    n ?? null,
    i,
    a,
    l,
    s,
    o,
    r,
    u
  ), e.context = Ty(null), n = e.current, i = ne(), i = uc(i), a = xn(i), a.callback = null, Sn(n, a, i), n = i, e.current.lanes = n, dl(e, n), Be(e), t[ea] = e.current, Kc(t), new Ro(e);
};
fo.version = "19.1.1";
function wy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy);
    } catch (t) {
      console.error(t);
    }
}
wy(), Gm.exports = fo;
var E1 = Gm.exports;
const Ry = w.createContext({ theme: "dark", resolvedTheme: "dark", setTheme: () => {
} });
function M1({ children: t }) {
  const [e, n] = w.useState("dark");
  return /* @__PURE__ */ k.jsx(Ry.Provider, { value: { theme: e, resolvedTheme: e, setTheme: n, systemTheme: "dark", themes: ["light", "dark"] }, children: /* @__PURE__ */ k.jsx("div", { className: `${e} native-theme`, children: t }) });
}
function A2() {
  return w.useContext(Ry);
}
const tf = w.createContext({});
function ef(t) {
  const e = w.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const D1 = typeof window < "u", nf = D1 ? w.useLayoutEffect : w.useEffect, Co = /* @__PURE__ */ w.createContext(null);
function af(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Is(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const Ue = (t, e, n) => n > e ? e : n < t ? t : n;
function sh(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Ml = () => {
}, On = () => {
};
var zm;
typeof process < "u" && ((zm = process.env) == null ? void 0 : zm.NODE_ENV) !== "production" && (Ml = (t, e, n) => {
  !t && typeof console < "u" && console.warn(sh(e, n));
}, On = (t, e, n) => {
  if (!t)
    throw new Error(sh(e, n));
});
const zn = {}, Cy = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Oy = (t) => typeof t == "object" && t !== null, zy = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Vy(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const he = /* @__NO_SIDE_EFFECTS__ */ (t) => t, Dl = (...t) => t.reduce((e, n) => (i) => n(e(i))), ll = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i ? (n - t) / i : 1;
};
class lf {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return af(this.subscriptions, e), () => Is(this.subscriptions, e);
  }
  notify(e, n, i) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let l = 0; l < a; l++) {
          const s = this.subscriptions[l];
          s && s(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Kt = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, de = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, Uy = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, _y = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, w1 = 1e-7, R1 = 12;
function C1(t, e, n, i, a) {
  let l, s, o = 0;
  do
    s = e + (n - e) / 2, l = _y(s, i, a) - t, l > 0 ? n = s : e = s;
  while (Math.abs(l) > w1 && ++o < R1);
  return s;
}
// @__NO_SIDE_EFFECTS__
function wl(t, e, n, i) {
  if (t === e && n === i)
    return he;
  const a = (l) => C1(l, 0, 1, t, n);
  return (l) => l === 0 || l === 1 ? l : _y(a(l), e, i);
}
const By = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ny = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), jy = /* @__PURE__ */ wl(0.33, 1.53, 0.69, 0.99), sf = /* @__PURE__ */ Ny(jy), Ly = /* @__PURE__ */ By(sf), Hy = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * sf(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), of = (t) => 1 - Math.sin(Math.acos(t)), ky = /* @__PURE__ */ Ny(of), Gy = /* @__PURE__ */ By(of), O1 = /* @__PURE__ */ wl(0.42, 0, 1, 1), z1 = /* @__PURE__ */ wl(0, 0, 0.58, 1), Yy = /* @__PURE__ */ wl(0.42, 0, 0.58, 1), V1 = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number", qy = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", oh = {
  linear: he,
  easeIn: O1,
  easeInOut: Yy,
  easeOut: z1,
  circIn: of,
  circInOut: Gy,
  circOut: ky,
  backIn: sf,
  backInOut: Ly,
  backOut: jy,
  anticipate: Hy
}, U1 = (t) => typeof t == "string", rh = (t) => {
  if (/* @__PURE__ */ qy(t)) {
    On(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, i, a] = t;
    return /* @__PURE__ */ wl(e, n, i, a);
  } else if (U1(t))
    return On(oh[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), oh[t];
  return t;
}, Jl = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function _1(t) {
  let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), i = !1, a = !1;
  const l = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function o(u) {
    l.has(u) && (r.schedule(u), t()), u(s);
  }
  const r = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, d = !1) => {
      const h = d && i ? e : n;
      return c && l.add(u), h.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), l.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (s = u, i) {
        a = !0;
        return;
      }
      i = !0;
      const c = e;
      e = n, n = c, e.forEach(o), e.clear(), i = !1, a && (a = !1, r.process(u));
    }
  };
  return r;
}
const B1 = 40;
function Xy(t, e) {
  let n = !1, i = !0;
  const a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = () => n = !0, s = Jl.reduce((g, y) => (g[y] = _1(l), g), {}), { setup: o, read: r, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: v } = s, x = () => {
    const g = zn.useManualTiming, y = g ? a.timestamp : performance.now();
    n = !1, g || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(y - a.timestamp, B1), 1)), a.timestamp = y, a.isProcessing = !0, o.process(a), r.process(a), u.process(a), c.process(a), d.process(a), f.process(a), h.process(a), v.process(a), a.isProcessing = !1, n && e && (i = !1, t(x));
  }, S = () => {
    n = !0, i = !0, a.isProcessing || t(x);
  };
  return { schedule: Jl.reduce((g, y) => {
    const T = s[y];
    return g[y] = (M, A = !1, b = !1) => (n || S(), T.schedule(M, A, b)), g;
  }, {}), cancel: (g) => {
    for (let y = 0; y < Jl.length; y++)
      s[Jl[y]].cancel(g);
  }, state: a, steps: s };
}
const { schedule: et, cancel: Vn, state: Rt, steps: gr } = /* @__PURE__ */ Xy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : he, !0);
let ps;
function N1() {
  ps = void 0;
}
const kt = {
  now: () => (ps === void 0 && kt.set(Rt.isProcessing || zn.useManualTiming ? Rt.timestamp : performance.now()), ps),
  set: (t) => {
    ps = t, queueMicrotask(N1);
  }
}, Zy = (t) => (e) => typeof e == "string" && e.startsWith(t), Qy = /* @__PURE__ */ Zy("--"), j1 = /* @__PURE__ */ Zy("var(--"), rf = (t) => j1(t) ? L1.test(t.split("/*")[0].trim()) : !1, L1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function uh(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const oa = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, sl = {
  ...oa,
  transform: (t) => Ue(0, 1, t)
}, Fl = {
  ...oa,
  default: 1
}, Ga = (t) => Math.round(t * 1e5) / 1e5, uf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function H1(t) {
  return t == null;
}
const k1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, cf = (t, e) => (n) => !!(typeof n == "string" && k1.test(n) && n.startsWith(t) || e && !H1(n) && Object.prototype.hasOwnProperty.call(n, e)), Ky = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [a, l, s, o] = i.match(uf);
  return {
    [t]: parseFloat(a),
    [e]: parseFloat(l),
    [n]: parseFloat(s),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, G1 = (t) => Ue(0, 255, t), yr = {
  ...oa,
  transform: (t) => Math.round(G1(t))
}, Xn = {
  test: /* @__PURE__ */ cf("rgb", "red"),
  parse: /* @__PURE__ */ Ky("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + yr.transform(t) + ", " + yr.transform(e) + ", " + yr.transform(n) + ", " + Ga(sl.transform(i)) + ")"
};
function Y1(t) {
  let e = "", n = "", i = "", a = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, n += n, i += i, a += a), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const Ru = {
  test: /* @__PURE__ */ cf("#"),
  parse: Y1,
  transform: Xn.transform
}, Rl = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Ge = /* @__PURE__ */ Rl("deg"), Ve = /* @__PURE__ */ Rl("%"), U = /* @__PURE__ */ Rl("px"), q1 = /* @__PURE__ */ Rl("vh"), X1 = /* @__PURE__ */ Rl("vw"), ch = {
  ...Ve,
  parse: (t) => Ve.parse(t) / 100,
  transform: (t) => Ve.transform(t * 100)
}, Oi = {
  test: /* @__PURE__ */ cf("hsl", "hue"),
  parse: /* @__PURE__ */ Ky("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + Ve.transform(Ga(e)) + ", " + Ve.transform(Ga(n)) + ", " + Ga(sl.transform(i)) + ")"
}, pt = {
  test: (t) => Xn.test(t) || Ru.test(t) || Oi.test(t),
  parse: (t) => Xn.test(t) ? Xn.parse(t) : Oi.test(t) ? Oi.parse(t) : Ru.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Xn.transform(t) : Oi.transform(t),
  getAnimatableNone: (t) => {
    const e = pt.parse(t);
    return e.alpha = 0, pt.transform(e);
  }
}, Z1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Q1(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(uf)) == null ? void 0 : e.length) || 0) + (((n = t.match(Z1)) == null ? void 0 : n.length) || 0) > 0;
}
const Py = "number", Jy = "color", K1 = "var", P1 = "var(", fh = "${}", J1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function $i(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, a = [];
  let l = 0;
  const o = e.replace(J1, (r) => (pt.test(r) ? (i.color.push(l), a.push(Jy), n.push(pt.parse(r))) : r.startsWith(P1) ? (i.var.push(l), a.push(K1), n.push(r)) : (i.number.push(l), a.push(Py), n.push(parseFloat(r))), ++l, fh)).split(fh);
  return { values: n, split: o, indexes: i, types: a };
}
function F1(t) {
  return $i(t).values;
}
function Fy({ split: t, types: e }) {
  const n = t.length;
  return (i) => {
    let a = "";
    for (let l = 0; l < n; l++)
      if (a += t[l], i[l] !== void 0) {
        const s = e[l];
        s === Py ? a += Ga(i[l]) : s === Jy ? a += pt.transform(i[l]) : a += i[l];
      }
    return a;
  };
}
function W1(t) {
  return Fy($i(t));
}
const $1 = (t) => typeof t == "number" ? 0 : pt.test(t) ? pt.getAnimatableNone(t) : t, I1 = (t, e) => typeof t == "number" ? e != null && e.trim().endsWith("/") ? t : 0 : $1(t);
function tS(t) {
  const e = $i(t);
  return Fy(e)(e.values.map((i, a) => I1(i, e.split[a])));
}
const Se = {
  test: Q1,
  parse: F1,
  createTransformer: W1,
  getAnimatableNone: tS
};
function vr(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function eS({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let a = 0, l = 0, s = 0;
  if (!e)
    a = l = s = n;
  else {
    const o = n < 0.5 ? n * (1 + e) : n + e - n * e, r = 2 * n - o;
    a = vr(r, o, t + 1 / 3), l = vr(r, o, t), s = vr(r, o, t - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(l * 255),
    blue: Math.round(s * 255),
    alpha: i
  };
}
function to(t, e) {
  return (n) => n > 0 ? e : t;
}
const tt = (t, e, n) => t + (e - t) * n, br = (t, e, n) => {
  const i = t * t, a = n * (e * e - i) + i;
  return a < 0 ? 0 : Math.sqrt(a);
}, nS = [Ru, Xn, Oi], iS = (t) => nS.find((e) => e.test(t));
function dh(t) {
  const e = iS(t);
  if (Ml(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === Oi && (n = eS(n)), n;
}
const hh = (t, e) => {
  const n = dh(t), i = dh(e);
  if (!n || !i)
    return to(t, e);
  const a = { ...n };
  return (l) => (a.red = br(n.red, i.red, l), a.green = br(n.green, i.green, l), a.blue = br(n.blue, i.blue, l), a.alpha = tt(n.alpha, i.alpha, l), Xn.transform(a));
}, Cu = /* @__PURE__ */ new Set(["none", "hidden"]);
function aS(t, e) {
  return Cu.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function lS(t, e) {
  return (n) => tt(t, e, n);
}
function ff(t) {
  return typeof t == "number" ? lS : typeof t == "string" ? rf(t) ? to : pt.test(t) ? hh : rS : Array.isArray(t) ? Wy : typeof t == "object" ? pt.test(t) ? hh : sS : to;
}
function Wy(t, e) {
  const n = [...t], i = n.length, a = t.map((l, s) => ff(l)(l, e[s]));
  return (l) => {
    for (let s = 0; s < i; s++)
      n[s] = a[s](l);
    return n;
  };
}
function sS(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const a in n)
    t[a] !== void 0 && e[a] !== void 0 && (i[a] = ff(t[a])(t[a], e[a]));
  return (a) => {
    for (const l in i)
      n[l] = i[l](a);
    return n;
  };
}
function oS(t, e) {
  const n = [], i = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < e.values.length; a++) {
    const l = e.types[a], s = t.indexes[l][i[l]], o = t.values[s] ?? 0;
    n[a] = o, i[l]++;
  }
  return n;
}
const rS = (t, e) => {
  const n = Se.createTransformer(e), i = $i(t), a = $i(e);
  return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Cu.has(t) && !a.values.length || Cu.has(e) && !i.values.length ? aS(t, e) : Dl(Wy(oS(i, a), a.values), n) : (Ml(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), to(t, e));
};
function $y(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? tt(t, e, n) : ff(t)(t, e);
}
const uS = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => et.update(e, n),
    stop: () => Vn(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Rt.isProcessing ? Rt.timestamp : kt.now()
  };
}, Iy = (t, e, n = 10) => {
  let i = "";
  const a = Math.max(Math.round(e / n), 2);
  for (let l = 0; l < a; l++)
    i += Math.round(t(l / (a - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
}, eo = 2e4;
function df(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < eo; )
    e += n, i = t.next(e);
  return e >= eo ? 1 / 0 : e;
}
function cS(t, e = 100, n) {
  const i = n({ ...t, keyframes: [0, e] }), a = Math.min(df(i), eo);
  return {
    type: "keyframes",
    ease: (l) => i.next(a * l).value / e,
    duration: /* @__PURE__ */ de(a)
  };
}
const rt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function Ou(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const fS = 12;
function dS(t, e, n) {
  let i = n;
  for (let a = 1; a < fS; a++)
    i = i - t(i) / e(i);
  return i;
}
const xr = 1e-3;
function hS({ duration: t = rt.duration, bounce: e = rt.bounce, velocity: n = rt.velocity, mass: i = rt.mass }) {
  let a, l;
  Ml(t <= /* @__PURE__ */ Kt(rt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let s = 1 - e;
  s = Ue(rt.minDamping, rt.maxDamping, s), t = Ue(rt.minDuration, rt.maxDuration, /* @__PURE__ */ de(t)), s < 1 ? (a = (u) => {
    const c = u * s, d = c * t, f = c - n, h = Ou(u, s), v = Math.exp(-d);
    return xr - f / h * v;
  }, l = (u) => {
    const d = u * s * t, f = d * n + n, h = Math.pow(s, 2) * Math.pow(u, 2) * t, v = Math.exp(-d), x = Ou(Math.pow(u, 2), s);
    return (-a(u) + xr > 0 ? -1 : 1) * ((f - h) * v) / x;
  }) : (a = (u) => {
    const c = Math.exp(-u * t), d = (u - n) * t + 1;
    return -xr + c * d;
  }, l = (u) => {
    const c = Math.exp(-u * t), d = (n - u) * (t * t);
    return c * d;
  });
  const o = 5 / t, r = dS(a, l, o);
  if (t = /* @__PURE__ */ Kt(t), isNaN(r))
    return {
      stiffness: rt.stiffness,
      damping: rt.damping,
      duration: t
    };
  {
    const u = Math.pow(r, 2) * i;
    return {
      stiffness: u,
      damping: s * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const mS = ["duration", "bounce"], pS = ["stiffness", "damping", "mass"];
function mh(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function gS(t) {
  let e = {
    velocity: rt.velocity,
    stiffness: rt.stiffness,
    damping: rt.damping,
    mass: rt.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!mh(t, pS) && mh(t, mS))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), a = i * i, l = 2 * Ue(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
      e = {
        ...e,
        mass: rt.mass,
        stiffness: a,
        damping: l
      };
    } else {
      const n = hS({ ...t, velocity: 0 });
      e = {
        ...e,
        ...n,
        mass: rt.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function no(t = rt.visualDuration, e = rt.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: a } = n;
  const l = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], o = { done: !1, value: l }, { stiffness: r, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h } = gS({
    ...n,
    velocity: -/* @__PURE__ */ de(n.velocity || 0)
  }), v = f || 0, x = u / (2 * Math.sqrt(r * c)), S = s - l, p = /* @__PURE__ */ de(Math.sqrt(r / c)), m = Math.abs(S) < 5;
  i || (i = m ? rt.restSpeed.granular : rt.restSpeed.default), a || (a = m ? rt.restDelta.granular : rt.restDelta.default);
  let g, y, T, M, A, b;
  if (x < 1)
    T = Ou(p, x), M = (v + x * p * S) / T, g = (D) => {
      const j = Math.exp(-x * p * D);
      return s - j * (M * Math.sin(T * D) + S * Math.cos(T * D));
    }, A = x * p * M + S * T, b = x * p * S - M * T, y = (D) => Math.exp(-x * p * D) * (A * Math.sin(T * D) + b * Math.cos(T * D));
  else if (x === 1) {
    g = (j) => s - Math.exp(-p * j) * (S + (v + p * S) * j);
    const D = v + p * S;
    y = (j) => Math.exp(-p * j) * (p * D * j - v);
  } else {
    const D = p * Math.sqrt(x * x - 1);
    g = (Ut) => {
      const ht = Math.exp(-x * p * Ut), R = Math.min(D * Ut, 300);
      return s - ht * ((v + x * p * S) * Math.sinh(R) + D * S * Math.cosh(R)) / D;
    };
    const j = (v + x * p * S) / D, Q = x * p * j - S * D, Nt = x * p * S - j * D;
    y = (Ut) => {
      const ht = Math.exp(-x * p * Ut), R = Math.min(D * Ut, 300);
      return ht * (Q * Math.sinh(R) + Nt * Math.cosh(R));
    };
  }
  const O = {
    calculatedDuration: h && d || null,
    velocity: (D) => /* @__PURE__ */ Kt(y(D)),
    next: (D) => {
      if (!h && x < 1) {
        const Q = Math.exp(-x * p * D), Nt = Math.sin(T * D), Ut = Math.cos(T * D), ht = s - Q * (M * Nt + S * Ut), R = /* @__PURE__ */ Kt(Q * (A * Nt + b * Ut));
        return o.done = Math.abs(R) <= i && Math.abs(s - ht) <= a, o.value = o.done ? s : ht, o;
      }
      const j = g(D);
      if (h)
        o.done = D >= d;
      else {
        const Q = /* @__PURE__ */ Kt(y(D));
        o.done = Math.abs(Q) <= i && Math.abs(s - j) <= a;
      }
      return o.value = o.done ? s : j, o;
    },
    toString: () => {
      const D = Math.min(df(O), eo), j = Iy((Q) => O.next(D * Q).value, D, 30);
      return D + "ms " + j;
    },
    toTransition: () => {
    }
  };
  return O;
}
no.applyToOptions = (t) => {
  const e = cS(t, 100, no);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ Kt(e.duration), t.type = "keyframes", t;
};
const yS = 5;
function tv(t, e, n) {
  const i = Math.max(e - yS, 0);
  return /* @__PURE__ */ Uy(n - t(i), e - i);
}
function zu({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: l = 500, modifyTarget: s, min: o, max: r, restDelta: u = 0.5, restSpeed: c }) {
  const d = t[0], f = {
    done: !1,
    value: d
  }, h = (b) => o !== void 0 && b < o || r !== void 0 && b > r, v = (b) => o === void 0 ? r : r === void 0 || Math.abs(o - b) < Math.abs(r - b) ? o : r;
  let x = n * e;
  const S = d + x, p = s === void 0 ? S : s(S);
  p !== S && (x = p - d);
  const m = (b) => -x * Math.exp(-b / i), g = (b) => p + m(b), y = (b) => {
    const O = m(b), D = g(b);
    f.done = Math.abs(O) <= u, f.value = f.done ? p : D;
  };
  let T, M;
  const A = (b) => {
    h(f.value) && (T = b, M = no({
      keyframes: [f.value, v(f.value)],
      velocity: tv(g, b, f.value),
      // TODO: This should be passing * 1000
      damping: a,
      stiffness: l,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (b) => {
      let O = !1;
      return !M && T === void 0 && (O = !0, y(b), A(b)), T !== void 0 && b >= T ? M.next(b - T) : (!O && y(b), f);
    }
  };
}
function vS(t, e, n) {
  const i = [], a = n || zn.mix || $y, l = t.length - 1;
  for (let s = 0; s < l; s++) {
    let o = a(t[s], t[s + 1]);
    if (e) {
      const r = Array.isArray(e) ? e[s] || he : e;
      o = Dl(r, o);
    }
    i.push(o);
  }
  return i;
}
function bS(t, e, { clamp: n = !0, ease: i, mixer: a } = {}) {
  const l = t.length;
  if (On(l === e.length, "Both input and output ranges must be the same length", "range-length"), l === 1)
    return () => e[0];
  if (l === 2 && e[0] === e[1])
    return () => e[1];
  const s = t[0] === t[1];
  t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const o = vS(e, i, a), r = o.length, u = (c) => {
    if (s && c < t[0])
      return e[0];
    let d = 0;
    if (r > 1)
      for (; d < t.length - 2 && !(c < t[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ ll(t[d], t[d + 1], c);
    return o[d](f);
  };
  return n ? (c) => u(Ue(t[0], t[l - 1], c)) : u;
}
function xS(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const a = /* @__PURE__ */ ll(0, e, i);
    t.push(tt(n, 1, a));
  }
}
function SS(t) {
  const e = [0];
  return xS(e, t.length - 1), e;
}
function TS(t, e) {
  return t.map((n) => n * e);
}
function AS(t, e) {
  return t.map(() => e || Yy).splice(0, t.length - 1);
}
function Ya({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const a = /* @__PURE__ */ V1(i) ? i.map(rh) : rh(i), l = {
    done: !1,
    value: e[0]
  }, s = TS(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : SS(e),
    t
  ), o = bS(s, e, {
    ease: Array.isArray(a) ? a : AS(e, a)
  });
  return {
    calculatedDuration: t,
    next: (r) => (l.value = o(r), l.done = r >= t, l)
  };
}
const ES = (t) => t !== null;
function Oo(t, { repeat: e, repeatType: n = "loop" }, i, a = 1) {
  const l = t.filter(ES), o = a < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : l.length - 1;
  return !o || i === void 0 ? l[o] : i;
}
const MS = {
  decay: zu,
  inertia: zu,
  tween: Ya,
  keyframes: Ya,
  spring: no
};
function ev(t) {
  typeof t.type == "string" && (t.type = MS[t.type]);
}
class hf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const DS = (t) => t / 100;
class io extends hf {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var i, a;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== kt.now() && this.tick(kt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (a = (i = this.options).onStop) == null || a.call(i));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    ev(e);
    const { type: n = Ya, repeat: i = 0, repeatDelay: a = 0, repeatType: l, velocity: s = 0 } = e;
    let { keyframes: o } = e;
    const r = n || Ya;
    r !== Ya && typeof o[0] != "number" && (this.mixKeyframes = Dl(DS, $y(o[0], o[1])), o = [0, 100]);
    const u = r({ ...e, keyframes: o });
    l === "mirror" && (this.mirroredGenerator = r({
      ...e,
      keyframes: [...o].reverse(),
      velocity: -s
    })), u.calculatedDuration === null && (u.calculatedDuration = df(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + a, this.totalDuration = this.resolvedDuration * (i + 1) - a, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: i, totalDuration: a, mixKeyframes: l, mirroredGenerator: s, resolvedDuration: o, calculatedDuration: r } = this;
    if (this.startTime === null)
      return i.next(0);
    const { delay: u = 0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: x, finalKeyframe: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), m = this.playbackSpeed >= 0 ? p < 0 : p > a;
    this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = a);
    let g = this.currentTime, y = i;
    if (d) {
      const b = Math.min(this.currentTime, a) / o;
      let O = Math.floor(b), D = b % 1;
      !D && b >= 1 && (D = 1), D === 1 && O--, O = Math.min(O, d + 1), !!(O % 2) && (f === "reverse" ? (D = 1 - D, h && (D -= h / o)) : f === "mirror" && (y = s)), g = Ue(0, 1, D) * o;
    }
    let T;
    m ? (this.delayState.value = c[0], T = this.delayState) : T = y.next(g), l && !m && (T.value = l(T.value));
    let { done: M } = T;
    !m && r !== null && (M = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return A && v !== zu && (T.value = Oo(c, this.options, S, this.speed)), x && x(T.value), A && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ de(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ de(e);
  }
  get time() {
    return /* @__PURE__ */ de(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ Kt(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return tv((i) => this.generator.next(i).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    n && this.driver && this.updateTime(kt.now()), this.playbackSpeed = e, n && this.driver && (this.time = /* @__PURE__ */ de(this.currentTime));
  }
  play() {
    var a, l;
    if (this.isStopped)
      return;
    const { driver: e = uS, startTime: n } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), (l = (a = this.options).onPlay) == null || l.call(a);
    const i = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(kt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (e = this.options).onComplete) == null || n.call(e);
  }
  cancel() {
    var e, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (e = this.options).onCancel) == null || n.call(e);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), e.observe(this);
  }
}
function wS(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const Zn = (t) => t * 180 / Math.PI, Vu = (t) => {
  const e = Zn(Math.atan2(t[1], t[0]));
  return Uu(e);
}, RS = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Vu,
  rotateZ: Vu,
  skewX: (t) => Zn(Math.atan(t[1])),
  skewY: (t) => Zn(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Uu = (t) => (t = t % 360, t < 0 && (t += 360), t), ph = Vu, gh = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), yh = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), CS = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gh,
  scaleY: yh,
  scale: (t) => (gh(t) + yh(t)) / 2,
  rotateX: (t) => Uu(Zn(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Uu(Zn(Math.atan2(-t[2], t[0]))),
  rotateZ: ph,
  rotate: ph,
  skewX: (t) => Zn(Math.atan(t[4])),
  skewY: (t) => Zn(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function _u(t) {
  return t.includes("scale") ? 1 : 0;
}
function Bu(t, e) {
  if (!t || t === "none")
    return _u(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, a;
  if (n)
    i = CS, a = n;
  else {
    const o = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    i = RS, a = o;
  }
  if (!a)
    return _u(e);
  const l = i[e], s = a[1].split(",").map(zS);
  return typeof l == "function" ? l(s) : s[l];
}
const OS = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Bu(n, e);
};
function zS(t) {
  return parseFloat(t.trim());
}
const ra = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ua = /* @__PURE__ */ new Set([...ra, "pathRotation"]), vh = (t) => t === oa || t === U, VS = /* @__PURE__ */ new Set(["x", "y", "z"]), US = ra.filter((t) => !VS.has(t));
function _S(t) {
  const e = [];
  return US.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const vn = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: i }) => {
    const a = t.max - t.min;
    return i === "border-box" ? a : a - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: i }) => {
    const a = t.max - t.min;
    return i === "border-box" ? a : a - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Bu(e, "x"),
  y: (t, { transform: e }) => Bu(e, "y")
};
vn.translateX = vn.x;
vn.translateY = vn.y;
const In = /* @__PURE__ */ new Set();
let Nu = !1, ju = !1, Lu = !1;
function nv() {
  if (ju) {
    const t = Array.from(In).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const a = _S(i);
      a.length && (n.set(i, a), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const a = n.get(i);
      a && a.forEach(([l, s]) => {
        var o;
        (o = i.getValue(l)) == null || o.set(s);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  ju = !1, Nu = !1, In.forEach((t) => t.complete(Lu)), In.clear();
}
function iv() {
  In.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ju = !0);
  });
}
function BS() {
  Lu = !0, iv(), nv(), Lu = !1;
}
class mf {
  constructor(e, n, i, a, l, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = a, this.element = l, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (In.add(this), Nu || (Nu = !0, et.read(iv), et.resolveKeyframes(nv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: a } = this;
    if (e[0] === null) {
      const l = a == null ? void 0 : a.get(), s = e[e.length - 1];
      if (l !== void 0)
        e[0] = l;
      else if (i && n) {
        const o = i.readValue(n, s);
        o != null && (e[0] = o);
      }
      e[0] === void 0 && (e[0] = s), a && l === void 0 && a.set(e[0]);
    }
    wS(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), In.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (In.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const NS = (t) => t.startsWith("--");
function av(t, e, n) {
  NS(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const jS = {};
function pf(t, e) {
  const n = /* @__PURE__ */ Vy(t);
  return () => jS[e] ?? n();
}
const LS = /* @__PURE__ */ pf(() => window.ScrollTimeline !== void 0, "scrollTimeline"), E2 = /* @__PURE__ */ pf(() => window.ViewTimeline !== void 0, "viewTimeline"), lv = /* @__PURE__ */ pf(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ea = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, bh = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ea([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ea([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ea([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ea([0.33, 1.53, 0.69, 0.99])
};
function sv(t, e) {
  if (t)
    return typeof t == "function" ? lv() ? Iy(t, e) : "ease-out" : /* @__PURE__ */ qy(t) ? Ea(t) : Array.isArray(t) ? t.map((n) => sv(n, e) || bh.easeOut) : bh[t];
}
function HS(t, e, n, { delay: i = 0, duration: a = 300, repeat: l = 0, repeatType: s = "loop", ease: o = "easeOut", times: r } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  r && (c.offset = r);
  const d = sv(o, a);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: i,
    duration: a,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: l + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return u && (f.pseudoElement = u), t.animate(c, f);
}
function ov(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function kS({ type: t, ...e }) {
  return ov(t) && lv() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class rv extends hf {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: i, keyframes: a, pseudoElement: l, allowFlatten: s = !1, finalKeyframe: o, onComplete: r } = e;
    this.isPseudoElement = !!l, this.allowFlatten = s, this.options = e, On(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = kS(e);
    this.animation = HS(n, i, a, u, l), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !l) {
        const c = Oo(a, this.options, o, this.speed);
        this.updateMotionValue && this.updateMotionValue(c), av(n, i, c), this.animation.cancel();
      }
      r == null || r(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var n, i, a;
    const e = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement && (e != null && e.isConnected) && ((a = (i = this.animation).commitStyles) == null || a.call(i));
  }
  get duration() {
    var n, i;
    const e = ((i = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : i.call(n).duration) || 0;
    return /* @__PURE__ */ de(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ de(e);
  }
  get time() {
    return /* @__PURE__ */ de(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Kt(e), n && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: i, observe: a }) {
    var l;
    return this.allowFlatten && ((l = this.animation.effect) == null || l.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && LS() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), i && (this.animation.rangeEnd = i), he) : a(this);
  }
}
const uv = {
  anticipate: Hy,
  backInOut: Ly,
  circInOut: Gy
};
function GS(t) {
  return t in uv;
}
function YS(t) {
  typeof t.ease == "string" && GS(t.ease) && (t.ease = uv[t.ease]);
}
const Sr = 10;
class qS extends rv {
  constructor(e) {
    YS(e), ev(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: i, onComplete: a, element: l, ...s } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const o = new io({
      ...s,
      autoplay: !1
    }), r = Math.max(Sr, kt.now() - this.startTime), u = Ue(0, Sr, r - Sr), c = o.sample(r).value, { name: d } = this.options;
    l && d && av(l, d, c), n.setWithVelocity(o.sample(Math.max(0, r - u)).value, c, u), o.stop();
  }
}
const xh = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Se.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function XS(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ZS(t, e, n, i) {
  const a = t[0];
  if (a === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const l = t[t.length - 1], s = xh(a, e), o = xh(l, e);
  return Ml(s === o, `You are trying to animate ${e} from "${a}" to "${l}". "${s ? l : a}" is not an animatable value.`, "value-not-animatable"), !s || !o ? !1 : XS(t) || (n === "spring" || ov(n)) && i;
}
function Hu(t) {
  t.duration = 0, t.type = "keyframes";
}
const cv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), QS = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function KS(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && QS.test(t[e]))
      return !0;
  return !1;
}
const PS = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), JS = /* @__PURE__ */ Vy(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function FS(t) {
  var d;
  const { motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: l, type: s, keyframes: o } = t, r = (d = e == null ? void 0 : e.owner) == null ? void 0 : d.current;
  if (!(r instanceof HTMLElement) && !(r instanceof SVGElement))
    return !1;
  const { onUpdate: u, transformTemplate: c } = e.owner.getProps();
  return JS() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (cv.has(n) || PS.has(n) && KS(o)) && (n !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !u && !i && a !== "mirror" && l !== 0 && s !== "inertia";
}
const WS = 40;
class $S extends hf {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: a = 0, repeatDelay: l = 0, repeatType: s = "loop", keyframes: o, name: r, motionValue: u, element: c, ...d }) {
    var v;
    super(), this.stop = () => {
      var x, S;
      this._animation && (this._animation.stop(), (x = this.stopTimeline) == null || x.call(this)), (S = this.keyframeResolver) == null || S.cancel();
    }, this.createdAt = kt.now();
    const f = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: a,
      repeatDelay: l,
      repeatType: s,
      name: r,
      motionValue: u,
      element: c,
      ...d
    }, h = (c == null ? void 0 : c.KeyframeResolver) || mf;
    this.keyframeResolver = new h(o, (x, S, p) => this.onKeyframesResolved(x, S, f, !p), r, u, c), (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(e, n, i, a) {
    var p, m;
    this.keyframeResolver = void 0;
    const { name: l, type: s, velocity: o, delay: r, isHandoff: u, onUpdate: c } = i;
    this.resolvedAt = kt.now();
    let d = !0;
    ZS(e, l, s, o) || (d = !1, (zn.instantAnimations || !r) && (c == null || c(Oo(e, i, n))), e[0] = e[e.length - 1], Hu(i), i.repeat = 0);
    const h = {
      startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > WS ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...i,
      keyframes: e
    }, v = d && !u && FS(h), x = (m = (p = h.motionValue) == null ? void 0 : p.owner) == null ? void 0 : m.current;
    let S;
    if (v)
      try {
        S = new qS({
          ...h,
          element: x
        });
      } catch {
        S = new io(h);
      }
    else
      S = new io(h);
    S.finished.then(() => {
      this.notifyFinished();
    }).catch(he), this.pendingTimeline && (this.stopTimeline = S.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = S;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), BS()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(), (e = this.keyframeResolver) == null || e.cancel();
  }
}
function fv(t, e, n, i = 0, a = 1) {
  const l = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), s = t.size, o = (s - 1) * i;
  return typeof n == "function" ? n(l, s) : a === 1 ? l * i : o - l * i;
}
const Sh = 30, IS = (t) => !isNaN(parseFloat(t)), Th = {
  current: void 0
};
class tT {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i) => {
      var l;
      const a = kt.now();
      if (this.updatedAt !== a && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && ((l = this.events.change) == null || l.notify(this.current), this.dependents))
        for (const s of this.dependents)
          s.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = kt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = IS(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new lf());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), et.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Th.current && Th.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = kt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Sh)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Sh);
    return /* @__PURE__ */ Uy(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var e, n;
    (e = this.dependents) == null || e.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ii(t, e) {
  return new tT(t, e);
}
function dv(t, e) {
  if (t != null && t.inherit && e) {
    const { inherit: n, ...i } = t;
    return { ...e, ...i };
  }
  return t;
}
function gf(t, e) {
  const n = (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
  return n !== t ? dv(n, t) : n;
}
const eT = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, nT = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), iT = {
  type: "keyframes",
  duration: 0.8
}, aT = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, lT = (t, { keyframes: e }) => e.length > 2 ? iT : ua.has(t) ? t.startsWith("scale") ? nT(e[1]) : eT : aT, sT = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function oT(t) {
  for (const e in t)
    if (!sT.has(e))
      return !0;
  return !1;
}
const yf = (t, e, n, i = {}, a, l) => (s) => {
  const o = gf(i, t) || {}, r = o.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ Kt(r);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...o,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), o.onUpdate && o.onUpdate(f);
    },
    onComplete: () => {
      s(), o.onComplete && o.onComplete();
    },
    name: t,
    motionValue: e,
    element: l ? void 0 : a
  };
  oT(o) || Object.assign(c, lT(t, c)), c.duration && (c.duration = /* @__PURE__ */ Kt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Kt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Hu(c), c.delay === 0 && (d = !0)), (zn.instantAnimations || zn.skipAnimations || a != null && a.shouldSkipAnimations || o.skipAnimations) && (d = !0, Hu(c), c.delay = 0), c.allowFlatten = !o.type && !o.ease, d && !l && e.get() !== void 0) {
    const f = Oo(c.keyframes, o);
    if (f !== void 0) {
      et.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return o.isSync ? new io(c) : new $S(c);
}, rT = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function uT(t) {
  const e = rT.exec(t);
  if (!e)
    return [,];
  const [, n, i, a] = e;
  return [`--${n ?? i}`, a];
}
const cT = 4;
function hv(t, e, n = 1) {
  On(n <= cT, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [i, a] = uT(t);
  if (!i)
    return;
  const l = window.getComputedStyle(e).getPropertyValue(i);
  if (l) {
    const s = l.trim();
    return Cy(s) ? parseFloat(s) : s;
  }
  return rf(a) ? hv(a, e, n + 1) : a;
}
function Ah(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function vf(t, e, n, i) {
  if (typeof e == "function") {
    const [a, l] = Ah(i);
    e = e(n !== void 0 ? n : t.custom, a, l);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [a, l] = Ah(i);
    e = e(n !== void 0 ? n : t.custom, a, l);
  }
  return e;
}
function ti(t, e, n) {
  const i = t.getProps();
  return vf(i, e, n !== void 0 ? n : i.custom, t);
}
const mv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ra
]), ku = (t) => Array.isArray(t);
function fT(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ii(n));
}
function dT(t) {
  return ku(t) ? t[t.length - 1] || 0 : t;
}
function hT(t, e) {
  const n = ti(t, e);
  let { transitionEnd: i = {}, transition: a = {}, ...l } = n || {};
  l = { ...l, ...i };
  for (const s in l) {
    const o = dT(l[s]);
    fT(t, s, o);
  }
}
const zt = (t) => !!(t && t.getVelocity);
function mT(t) {
  return !!(zt(t) && t.add);
}
function Gu(t, e) {
  const n = t.getValue("willChange");
  if (mT(n))
    return n.add(e);
  if (!n && zn.WillChange) {
    const i = new zn.WillChange("auto");
    t.addValue("willChange", i), i.add(e);
  }
}
function bf(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const pT = "framerAppearId", pv = "data-" + bf(pT);
function gv(t) {
  return t.props[pv];
}
function gT({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function yv(t, e, { delay: n = 0, transitionOverride: i, type: a } = {}) {
  let { transition: l, transitionEnd: s, ...o } = e;
  const r = t.getDefaultTransition();
  l = l ? dv(l, r) : r;
  const u = l == null ? void 0 : l.reduceMotion, c = l == null ? void 0 : l.skipAnimations;
  i && (l = i);
  const d = [], f = a && t.animationState && t.animationState.getState()[a], h = l == null ? void 0 : l.path;
  h && h.animateVisualElement(t, o, l, n, d);
  for (const v in o) {
    const x = t.getValue(v, t.latestValues[v] ?? null), S = o[v];
    if (S === void 0 || f && gT(f, v))
      continue;
    const p = {
      delay: n,
      ...gf(l || {}, v)
    };
    c && (p.skipAnimations = !0);
    const m = x.get();
    if (m !== void 0 && !x.isAnimating() && !Array.isArray(S) && S === m && !p.velocity) {
      et.update(() => x.set(S));
      continue;
    }
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const M = gv(t);
      if (M) {
        const A = window.MotionHandoffAnimation(M, v, et);
        A !== null && (p.startTime = A, g = !0);
      }
    }
    Gu(t, v);
    const y = u ?? t.shouldReduceMotion;
    x.start(yf(v, x, S, y && mv.has(v) ? { type: !1 } : p, t, g));
    const T = x.animation;
    T && d.push(T);
  }
  if (s) {
    const v = () => et.update(() => {
      s && hT(t, s);
    });
    d.length ? Promise.all(d).then(v) : v();
  }
  return d;
}
function Yu(t, e, n = {}) {
  var r;
  const i = ti(t, e, n.type === "exit" ? (r = t.presenceContext) == null ? void 0 : r.custom : void 0);
  let { transition: a = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (a = n.transitionOverride);
  const l = i ? () => Promise.all(yv(t, i, n)) : () => Promise.resolve(), s = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = a;
    return yT(t, e, u, c, d, f, n);
  } : () => Promise.resolve(), { when: o } = a;
  if (o) {
    const [u, c] = o === "beforeChildren" ? [l, s] : [s, l];
    return u().then(() => c());
  } else
    return Promise.all([l(), s(n.delay)]);
}
function yT(t, e, n = 0, i = 0, a = 0, l = 1, s) {
  const o = [];
  for (const r of t.variantChildren)
    r.notify("AnimationStart", e), o.push(Yu(r, e, {
      ...s,
      delay: n + (typeof i == "function" ? 0 : i) + fv(t.variantChildren, r, i, a, l)
    }).then(() => r.notify("AnimationComplete", e)));
  return Promise.all(o);
}
function vT(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const a = e.map((l) => Yu(t, l, n));
    i = Promise.all(a);
  } else if (typeof e == "string")
    i = Yu(t, e, n);
  else {
    const a = typeof e == "function" ? ti(t, e, n.custom) : e;
    i = Promise.all(yv(t, a, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const bT = {
  test: (t) => t === "auto",
  parse: (t) => t
}, vv = (t) => (e) => e.test(t), bv = [oa, U, Ve, Ge, X1, q1, bT], Eh = (t) => bv.find(vv(t));
function xT(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || zy(t) : !0;
}
const ST = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function TT(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(uf) || [];
  if (!i)
    return t;
  const a = n.replace(i, "");
  let l = ST.has(e) ? 1 : 0;
  return i !== n && (l *= 100), e + "(" + l + a + ")";
}
const AT = /\b([a-z-]*)\(.*?\)/gu, qu = {
  ...Se,
  getAnimatableNone: (t) => {
    const e = t.match(AT);
    return e ? e.map(TT).join(" ") : t;
  }
}, Xu = {
  ...Se,
  getAnimatableNone: (t) => {
    const e = Se.parse(t);
    return Se.createTransformer(t)(e.map((i) => typeof i == "number" ? 0 : typeof i == "object" ? { ...i, alpha: 1 } : i));
  }
}, Mh = {
  ...oa,
  transform: Math.round
}, ET = {
  rotate: Ge,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Ge,
  rotateX: Ge,
  rotateY: Ge,
  rotateZ: Ge,
  scale: Fl,
  scaleX: Fl,
  scaleY: Fl,
  scaleZ: Fl,
  skew: Ge,
  skewX: Ge,
  skewY: Ge,
  distance: U,
  translateX: U,
  translateY: U,
  translateZ: U,
  x: U,
  y: U,
  z: U,
  perspective: U,
  transformPerspective: U,
  opacity: sl,
  originX: ch,
  originY: ch,
  originZ: U
}, ao = {
  // Border props
  borderWidth: U,
  borderTopWidth: U,
  borderRightWidth: U,
  borderBottomWidth: U,
  borderLeftWidth: U,
  borderRadius: U,
  borderTopLeftRadius: U,
  borderTopRightRadius: U,
  borderBottomRightRadius: U,
  borderBottomLeftRadius: U,
  // Positioning props
  width: U,
  maxWidth: U,
  height: U,
  maxHeight: U,
  top: U,
  right: U,
  bottom: U,
  left: U,
  inset: U,
  insetBlock: U,
  insetBlockStart: U,
  insetBlockEnd: U,
  insetInline: U,
  insetInlineStart: U,
  insetInlineEnd: U,
  // Spacing props
  padding: U,
  paddingTop: U,
  paddingRight: U,
  paddingBottom: U,
  paddingLeft: U,
  paddingBlock: U,
  paddingBlockStart: U,
  paddingBlockEnd: U,
  paddingInline: U,
  paddingInlineStart: U,
  paddingInlineEnd: U,
  margin: U,
  marginTop: U,
  marginRight: U,
  marginBottom: U,
  marginLeft: U,
  marginBlock: U,
  marginBlockStart: U,
  marginBlockEnd: U,
  marginInline: U,
  marginInlineStart: U,
  marginInlineEnd: U,
  // Typography
  fontSize: U,
  // Misc
  backgroundPositionX: U,
  backgroundPositionY: U,
  ...ET,
  zIndex: Mh,
  // SVG
  fillOpacity: sl,
  strokeOpacity: sl,
  numOctaves: Mh
}, MT = {
  ...ao,
  // Color props
  color: pt,
  backgroundColor: pt,
  outlineColor: pt,
  fill: pt,
  stroke: pt,
  // Border props
  borderColor: pt,
  borderTopColor: pt,
  borderRightColor: pt,
  borderBottomColor: pt,
  borderLeftColor: pt,
  filter: qu,
  WebkitFilter: qu,
  mask: Xu,
  WebkitMask: Xu
}, xv = (t) => MT[t], DT = /* @__PURE__ */ new Set([qu, Xu]);
function Sv(t, e) {
  let n = xv(t);
  return DT.has(n) || (n = Se), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const wT = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function RT(t, e, n) {
  let i = 0, a;
  for (; i < t.length && !a; ) {
    const l = t[i];
    typeof l == "string" && !wT.has(l) && $i(l).values.length && (a = t[i]), i++;
  }
  if (a && n)
    for (const l of e)
      t[l] = Sv(n, a);
}
class CT extends mf {
  constructor(e, n, i, a, l) {
    super(e, n, i, a, l, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let d = e[c];
      if (typeof d == "string" && (d = d.trim(), rf(d))) {
        const f = hv(d, n.current);
        f !== void 0 && (e[c] = f), c === e.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !mv.has(i) || e.length !== 2)
      return;
    const [a, l] = e, s = Eh(a), o = Eh(l), r = uh(a), u = uh(l);
    if (r !== u && vn[i]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== o)
      if (vh(s) && vh(o))
        for (let c = 0; c < e.length; c++) {
          const d = e[c];
          typeof d == "string" && (e[c] = parseFloat(d));
        }
      else vn[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let a = 0; a < e.length; a++)
      (e[a] === null || xT(e[a])) && i.push(a);
    i.length && RT(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = vn[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const a = n[n.length - 1];
    a !== void 0 && e.getValue(i, a).jump(a, !1);
  }
  measureEndState() {
    var o;
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current)
      return;
    const a = e.getValue(n);
    a && a.jump(this.measuredOrigin, !1);
    const l = i.length - 1, s = i[l];
    i[l] = vn[n](e.measureViewportBox(), window.getComputedStyle(e.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (o = this.removedTransforms) != null && o.length && this.removedTransforms.forEach(([r, u]) => {
      e.getValue(r).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const xf = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Tv(t, e, n) {
  if (t == null)
    return [];
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    e && (i = e.current);
    const a = (n == null ? void 0 : n[t]) ?? i.querySelectorAll(t);
    return a ? Array.from(a) : [];
  }
  return Array.from(t).filter((i) => i != null);
}
const Zu = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function gs(t) {
  return Oy(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: Sf, cancel: M2 } = /* @__PURE__ */ Xy(queueMicrotask, !1), ve = {
  x: !1,
  y: !1
};
function Av() {
  return ve.x || ve.y;
}
function OT(t) {
  return t === "x" || t === "y" ? ve[t] ? null : (ve[t] = !0, () => {
    ve[t] = !1;
  }) : ve.x || ve.y ? null : (ve.x = ve.y = !0, () => {
    ve.x = ve.y = !1;
  });
}
function Ev(t, e) {
  const n = Tv(t), i = new AbortController(), a = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, a, () => i.abort()];
}
function zT(t) {
  return !(t.pointerType === "touch" || Av());
}
function VT(t, e, n = {}) {
  const [i, a, l] = Ev(t, n);
  return i.forEach((s) => {
    let o = !1, r = !1, u;
    const c = () => {
      s.removeEventListener("pointerleave", v);
    }, d = (S) => {
      u && (u(S), u = void 0), c();
    }, f = (S) => {
      o = !1, window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), r && (r = !1, d(S));
    }, h = () => {
      o = !0, window.addEventListener("pointerup", f, a), window.addEventListener("pointercancel", f, a);
    }, v = (S) => {
      if (S.pointerType !== "touch") {
        if (o) {
          r = !0;
          return;
        }
        d(S);
      }
    }, x = (S) => {
      if (!zT(S))
        return;
      r = !1;
      const p = e(s, S);
      typeof p == "function" && (u = p, s.addEventListener("pointerleave", v, a));
    };
    s.addEventListener("pointerenter", x, a), s.addEventListener("pointerdown", h, a);
  }), l;
}
const Mv = (t, e) => e ? t === e ? !0 : Mv(t, e.parentElement) : !1, Tf = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, UT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function _T(t) {
  return UT.has(t.tagName) || t.isContentEditable === !0;
}
const BT = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function NT(t) {
  return BT.has(t.tagName) || t.isContentEditable === !0;
}
const ys = /* @__PURE__ */ new WeakSet();
function Dh(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Tr(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const jT = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Dh(() => {
    if (ys.has(n))
      return;
    Tr(n, "down");
    const a = Dh(() => {
      Tr(n, "up");
    }), l = () => Tr(n, "cancel");
    n.addEventListener("keyup", a, e), n.addEventListener("blur", l, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function wh(t) {
  return Tf(t) && !Av();
}
const Rh = /* @__PURE__ */ new WeakSet();
function LT(t, e, n = {}) {
  const [i, a, l] = Ev(t, n), s = (o) => {
    const r = o.currentTarget;
    if (!wh(o) || Rh.has(o))
      return;
    ys.add(r), n.stopPropagation && Rh.add(o);
    const u = e(r, o), c = { ...a, capture: !0 }, d = (v, x) => {
      window.removeEventListener("pointerup", f, c), window.removeEventListener("pointercancel", h, c), ys.has(r) && ys.delete(r), wh(v) && typeof u == "function" && u(v, { success: x });
    }, f = (v) => {
      d(v, r === window || r === document || n.useGlobalTarget || Mv(r, v.target));
    }, h = (v) => {
      d(v, !1);
    };
    window.addEventListener("pointerup", f, c), window.addEventListener("pointercancel", h, c);
  };
  return i.forEach((o) => {
    (n.useGlobalTarget ? window : o).addEventListener("pointerdown", s, a), gs(o) && (o.addEventListener("focus", (u) => jT(u, a)), !_T(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
  }), l;
}
function Af(t) {
  return Oy(t) && "ownerSVGElement" in t;
}
const vs = /* @__PURE__ */ new WeakMap();
let sn;
const Dv = (t, e, n) => (i, a) => a && a[0] ? a[0][t + "Size"] : Af(i) && "getBBox" in i ? i.getBBox()[e] : i[n], HT = /* @__PURE__ */ Dv("inline", "width", "offsetWidth"), kT = /* @__PURE__ */ Dv("block", "height", "offsetHeight");
function GT({ target: t, borderBoxSize: e }) {
  var n;
  (n = vs.get(t)) == null || n.forEach((i) => {
    i(t, {
      get width() {
        return HT(t, e);
      },
      get height() {
        return kT(t, e);
      }
    });
  });
}
function YT(t) {
  t.forEach(GT);
}
function qT() {
  typeof ResizeObserver > "u" || (sn = new ResizeObserver(YT));
}
function XT(t, e) {
  sn || qT();
  const n = Tv(t);
  return n.forEach((i) => {
    let a = vs.get(i);
    a || (a = /* @__PURE__ */ new Set(), vs.set(i, a)), a.add(e), sn == null || sn.observe(i);
  }), () => {
    n.forEach((i) => {
      const a = vs.get(i);
      a == null || a.delete(e), a != null && a.size || sn == null || sn.unobserve(i);
    });
  };
}
const bs = /* @__PURE__ */ new Set();
let zi;
function ZT() {
  zi = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    bs.forEach((e) => e(t));
  }, window.addEventListener("resize", zi);
}
function QT(t) {
  return bs.add(t), zi || ZT(), () => {
    bs.delete(t), !bs.size && typeof zi == "function" && (window.removeEventListener("resize", zi), zi = void 0);
  };
}
function Ch(t, e) {
  return typeof t == "function" ? QT(t) : XT(t, e);
}
function KT(t) {
  return Af(t) && t.tagName === "svg";
}
const PT = [...bv, pt, Se], JT = (t) => PT.find(vv(t)), Oh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Vi = () => ({
  x: Oh(),
  y: Oh()
}), zh = () => ({ min: 0, max: 0 }), bt = () => ({
  x: zh(),
  y: zh()
}), FT = /* @__PURE__ */ new WeakMap();
function zo(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function ol(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Ef = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Mf = ["initial", ...Ef];
function Vo(t) {
  return zo(t.animate) || Mf.some((e) => ol(t[e]));
}
function wv(t) {
  return !!(Vo(t) || t.variants);
}
function WT(t, e, n) {
  for (const i in e) {
    const a = e[i], l = n[i];
    if (zt(a))
      t.addValue(i, a);
    else if (zt(l))
      t.addValue(i, Ii(a, { owner: t }));
    else if (l !== a)
      if (t.hasValue(i)) {
        const s = t.getValue(i);
        s.liveStyle === !0 ? s.jump(a) : s.hasAnimated || s.set(a);
      } else {
        const s = t.getStaticValue(i);
        t.addValue(i, Ii(s !== void 0 ? s : a, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const Qu = { current: null }, Rv = { current: !1 }, $T = typeof window < "u";
function IT() {
  if (Rv.current = !0, !!$T)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Qu.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Qu.current = !1;
}
const Vh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let lo = {};
function Cv(t) {
  lo = t;
}
function tA() {
  return lo;
}
class eA {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: a, skipAnimations: l, blockInitialAnimation: s, visualState: o }, r = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = mf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = kt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, et.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: c } = o;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = c, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.skipAnimationsConfig = l, this.options = r, this.blockInitialAnimation = !!s, this.isControllingVariants = Vo(n), this.isVariantNode = wv(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const v = f[h];
      u[h] !== void 0 && zt(v) && v.set(u[h]);
    }
  }
  mount(e) {
    var n, i;
    if (this.hasBeenMounted)
      for (const a in this.initialValues)
        (n = this.values.get(a)) == null || n.jump(this.initialValues[a]), this.latestValues[a] = this.initialValues[a];
    this.current = e, FT.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((a, l) => this.bindToMotionValue(l, a)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Rv.current || IT(), this.shouldReduceMotion = Qu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (i = this.parent) == null || i.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var e;
    this.projection && this.projection.unmount(), Vn(this.notifyUpdate), Vn(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (e = this.parent) == null || e.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const i = this.features[n];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && cv.has(e) && this.current instanceof HTMLElement) {
      const { factory: s, keyframes: o, times: r, ease: u, duration: c } = n.accelerate, d = new rv({
        element: this.current,
        name: e,
        keyframes: o,
        times: r,
        ease: u,
        duration: /* @__PURE__ */ Kt(c)
      }), f = s(d);
      this.valueSubscriptions.set(e, () => {
        f(), d.cancel();
      });
      return;
    }
    const i = ua.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const a = n.on("change", (s) => {
      this.latestValues[e] = s, this.props.onUpdate && et.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let l;
    typeof window < "u" && window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      a(), l && l();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in lo) {
      const n = lo[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: a } = n;
      if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
        const l = this.features[e];
        l.isMounted ? l.update() : (l.mount(), l.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : bt();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < Vh.length; i++) {
      const a = Vh[i];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const l = "on" + a, s = e[l];
      s && (this.propEventSubscriptions[a] = this.on(a, s));
    }
    this.prevMotionValues = WT(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = Ii(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (Cy(i) || zy(i)) ? i = parseFloat(i) : !JT(i) && Se.test(n) && (i = Sv(e, n)), this.setBaseTarget(e, zt(i) ? i.get() : i)), zt(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var l;
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const s = vf(this.props, n, (l = this.presenceContext) == null ? void 0 : l.custom);
      s && (i = s[e]);
    }
    if (n && i !== void 0)
      return i;
    const a = this.getBaseTargetFromProps(this.props, e);
    return a !== void 0 && !zt(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new lf()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Sf.render(this.render);
  }
}
class Ov extends eA {
  constructor() {
    super(...arguments), this.KeyframeResolver = CT;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const i = e.style;
    return i ? i[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    zt(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Bn {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function zv({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function nA({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function iA(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function Ar(t) {
  return t === void 0 || t === 1;
}
function Ku({ scale: t, scaleX: e, scaleY: n }) {
  return !Ar(t) || !Ar(e) || !Ar(n);
}
function qn(t) {
  return Ku(t) || Vv(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Vv(t) {
  return Uh(t.x) || Uh(t.y);
}
function Uh(t) {
  return t && t !== "0%";
}
function so(t, e, n) {
  const i = t - n, a = e * i;
  return n + a;
}
function _h(t, e, n, i, a) {
  return a !== void 0 && (t = so(t, a, i)), so(t, n, i) + e;
}
function Pu(t, e = 0, n = 1, i, a) {
  t.min = _h(t.min, e, n, i, a), t.max = _h(t.max, e, n, i, a);
}
function Uv(t, { x: e, y: n }) {
  Pu(t.x, e.translate, e.scale, e.originPoint), Pu(t.y, n.translate, n.scale, n.originPoint);
}
const Bh = 0.999999999999, Nh = 1.0000000000001;
function aA(t, e, n, i = !1) {
  var o;
  const a = n.length;
  if (!a)
    return;
  e.x = e.y = 1;
  let l, s;
  for (let r = 0; r < a; r++) {
    l = n[r], s = l.projectionDelta;
    const { visualElement: u } = l.options;
    u && u.props.style && u.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && (De(t.x, -l.scroll.offset.x), De(t.y, -l.scroll.offset.y)), s && (e.x *= s.x.scale, e.y *= s.y.scale, Uv(t, s)), i && qn(l.latestValues) && xs(t, l.latestValues, (o = l.layout) == null ? void 0 : o.layoutBox));
  }
  e.x < Nh && e.x > Bh && (e.x = 1), e.y < Nh && e.y > Bh && (e.y = 1);
}
function De(t, e) {
  t.min += e, t.max += e;
}
function jh(t, e, n, i, a = 0.5) {
  const l = tt(t.min, t.max, a);
  Pu(t, e, n, l, i);
}
function Lh(t, e) {
  return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function xs(t, e, n) {
  const i = n ?? t;
  jh(t.x, Lh(e.x, i.x), e.scaleX, e.scale, e.originX), jh(t.y, Lh(e.y, i.y), e.scaleY, e.scale, e.originY);
}
function _v(t, e) {
  return zv(iA(t.getBoundingClientRect(), e));
}
function lA(t, e, n) {
  const i = _v(t, n), { scroll: a } = e;
  return a && (De(i.x, a.offset.x), De(i.y, a.offset.y)), i;
}
const sA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, oA = ra.length;
function rA(t, e, n) {
  let i = "", a = !0;
  for (let s = 0; s < oA; s++) {
    const o = ra[s], r = t[o];
    if (r === void 0)
      continue;
    let u = !0;
    if (typeof r == "number")
      u = r === (o.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(r);
      u = o.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!u || n) {
      const c = Zu(r, ao[o]);
      if (!u) {
        a = !1;
        const d = sA[o] || o;
        i += `${d}(${c}) `;
      }
      n && (e[o] = c);
    }
  }
  const l = t.pathRotation;
  return l && (a = !1, i += `rotate(${Zu(l, ao.pathRotation)}) `), i = i.trim(), n ? i = n(e, a ? "" : i) : a && (i = "none"), i;
}
function Df(t, e, n) {
  const { style: i, vars: a, transformOrigin: l } = t;
  let s = !1, o = !1;
  for (const r in e) {
    const u = e[r];
    if (ua.has(r)) {
      s = !0;
      continue;
    } else if (Qy(r)) {
      a[r] = u;
      continue;
    } else {
      const c = Zu(u, ao[r]);
      r.startsWith("origin") ? (o = !0, l[r] = c) : i[r] = c;
    }
  }
  if (e.transform || (s || n ? i.transform = rA(e, t.transform, n) : i.transform && (i.transform = "none")), o) {
    const { originX: r = "50%", originY: u = "50%", originZ: c = 0 } = l;
    i.transformOrigin = `${r} ${u} ${c}`;
  }
}
function Bv(t, { style: e, vars: n }, i, a) {
  const l = t.style;
  let s;
  for (s in e)
    l[s] = e[s];
  a == null || a.applyProjectionStyles(l, i);
  for (s in n)
    l.setProperty(s, n[s]);
}
function Hh(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const va = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (U.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Hh(t, e.target.x), i = Hh(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, uA = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, a = Se.parse(t);
    if (a.length > 5)
      return i;
    const l = Se.createTransformer(t), s = typeof a[0] != "number" ? 1 : 0, o = n.x.scale * e.x, r = n.y.scale * e.y;
    a[0 + s] /= o, a[1 + s] /= r;
    const u = tt(o, r, 0.5);
    return typeof a[2 + s] == "number" && (a[2 + s] /= u), typeof a[3 + s] == "number" && (a[3 + s] /= u), l(a);
  }
}, Ju = {
  borderRadius: {
    ...va,
    applyTo: [...xf]
  },
  borderTopLeftRadius: va,
  borderTopRightRadius: va,
  borderBottomLeftRadius: va,
  borderBottomRightRadius: va,
  boxShadow: uA
};
function Nv(t, { layout: e, layoutId: n }) {
  return ua.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ju[t] || t === "opacity");
}
function wf(t, e, n) {
  var s;
  const i = t.style, a = e == null ? void 0 : e.style, l = {};
  if (!i)
    return l;
  for (const o in i)
    (zt(i[o]) || a && zt(a[o]) || Nv(o, t) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (l[o] = i[o]);
  return l;
}
function cA(t) {
  return window.getComputedStyle(t);
}
class fA extends Ov {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Bv;
  }
  mount(e) {
    On(!!e.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(e);
  }
  readValueFromInstance(e, n) {
    var i;
    if (ua.has(n))
      return (i = this.projection) != null && i.isProjecting ? _u(n) : OS(e, n);
    {
      const a = cA(e), l = (Qy(n) ? a.getPropertyValue(n) : a[n]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return _v(e, n);
  }
  build(e, n, i) {
    Df(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return wf(e, n, i);
  }
}
const dA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, hA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function mA(t, e, n = 1, i = 0, a = !0) {
  t.pathLength = 1;
  const l = a ? dA : hA;
  t[l.offset] = `${-i}`, t[l.array] = `${e} ${n}`;
}
const pA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function jv(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  pathLength: a,
  pathSpacing: l = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...o
}, r, u, c) {
  if (Df(t, o, u), r) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: f } = t;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete d.transformBox);
  for (const h of pA)
    d[h] !== void 0 && (f[h] = d[h], delete d[h]);
  e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), a !== void 0 && mA(d, a, l, s, !1);
}
const Lv = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), Hv = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function gA(t, e, n, i) {
  Bv(t, e, void 0, i);
  for (const a in e.attrs)
    t.setAttribute(Lv.has(a) ? a : bf(a), e.attrs[a]);
}
function kv(t, e, n) {
  const i = wf(t, e, n);
  for (const a in t)
    if (zt(t[a]) || zt(e[a])) {
      const l = ra.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      i[l] = t[a];
    }
  return i;
}
class yA extends Ov {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = bt;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ua.has(n)) {
      const i = xv(n);
      return i && i.default || 0;
    }
    return n = Lv.has(n) ? n : bf(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return kv(e, n, i);
  }
  build(e, n, i) {
    jv(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, a) {
    gA(e, n, i, a);
  }
  mount(e) {
    this.isSVGTag = Hv(e.tagName), super.mount(e);
  }
}
const vA = Mf.length;
function Gv(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Gv(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < vA; n++) {
    const i = Mf[n], a = t.props[i];
    (ol(a) || a === !1) && (e[i] = a);
  }
  return e;
}
function Yv(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
const bA = [...Ef].reverse(), xA = Ef.length;
function SA(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => vT(t, n, i)));
}
function TA(t) {
  let e = SA(t), n = kh(), i = !0, a = !1;
  const l = (u) => (c, d) => {
    var h;
    const f = ti(t, d, u === "exit" ? (h = t.presenceContext) == null ? void 0 : h.custom : void 0);
    if (f) {
      const { transition: v, transitionEnd: x, ...S } = f;
      c = { ...c, ...S, ...x };
    }
    return c;
  };
  function s(u) {
    e = u(t);
  }
  function o(u) {
    const { props: c } = t, d = Gv(t.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
    let v = {}, x = 1 / 0;
    for (let p = 0; p < xA; p++) {
      const m = bA[p], g = n[m], y = c[m] !== void 0 ? c[m] : d[m], T = ol(y), M = m === u ? g.isActive : null;
      M === !1 && (x = p);
      let A = y === d[m] && y !== c[m] && T;
      if (A && (i || a) && t.manuallyAnimateOnMount && (A = !1), g.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !y && !g.prevProp || // Or if the prop doesn't define an animation
      zo(y) || typeof y == "boolean")
        continue;
      if (m === "exit" && g.isActive && M !== !0) {
        g.prevResolvedValues && (v = {
          ...v,
          ...g.prevResolvedValues
        });
        continue;
      }
      const b = AA(g.prevProp, y);
      let O = b || // If we're making this variant active, we want to always make it active
      m === u && g.isActive && !A && T || // If we removed a higher-priority variant (i is in reverse order)
      p > x && T, D = !1;
      const j = Array.isArray(y) ? y : [y];
      let Q = j.reduce(l(m), {});
      M === !1 && (Q = {});
      const { prevResolvedValues: Nt = {} } = g, Ut = {
        ...Nt,
        ...Q
      }, ht = (_) => {
        O = !0, h.has(_) && (D = !0, h.delete(_)), g.needsAnimating[_] = !0;
        const Y = t.getValue(_);
        Y && (Y.liveStyle = !1);
      };
      for (const _ in Ut) {
        const Y = Q[_], C = Nt[_];
        if (v.hasOwnProperty(_))
          continue;
        let qt = !1;
        ku(Y) && ku(C) ? qt = !Yv(Y, C) || b : qt = Y !== C, qt ? Y != null ? ht(_) : h.add(_) : Y !== void 0 && h.has(_) ? ht(_) : g.protectedKeys[_] = !0;
      }
      g.prevProp = y, g.prevResolvedValues = Q, g.isActive && (v = { ...v, ...Q }), (i || a) && t.blockInitialAnimation && (O = !1);
      const R = A && b;
      O && (!R || D) && f.push(...j.map((_) => {
        const Y = { type: m };
        if (typeof _ == "string" && (i || a) && !R && t.manuallyAnimateOnMount && t.parent) {
          const { parent: C } = t, qt = ti(C, _);
          if (C.enteringChildren && qt) {
            const { delayChildren: Ne } = qt.transition || {};
            Y.delay = fv(C.enteringChildren, t, Ne);
          }
        }
        return {
          animation: _,
          options: Y
        };
      }));
    }
    if (h.size) {
      const p = {};
      if (typeof c.initial != "boolean") {
        const m = ti(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        m && m.transition && (p.transition = m.transition);
      }
      h.forEach((m) => {
        const g = t.getBaseTarget(m), y = t.getValue(m);
        y && (y.liveStyle = !0), p[m] = g ?? null;
      }), f.push({ animation: p });
    }
    let S = !!f.length;
    return i && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (S = !1), i = !1, a = !1, S ? e(f) : Promise.resolve();
  }
  function r(u, c) {
    var f;
    if (n[u].isActive === c)
      return Promise.resolve();
    (f = t.variantChildren) == null || f.forEach((h) => {
      var v;
      return (v = h.animationState) == null ? void 0 : v.setActive(u, c);
    }), n[u].isActive = c;
    const d = o(u);
    for (const h in n)
      n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: r,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = kh(), a = !0;
    }
  };
}
function AA(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Yv(e, t) : !1;
}
function Ln(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function kh() {
  return {
    animate: Ln(!0),
    whileInView: Ln(),
    whileHover: Ln(),
    whileTap: Ln(),
    whileDrag: Ln(),
    whileFocus: Ln(),
    exit: Ln()
  };
}
function Fu(t, e) {
  t.min = e.min, t.max = e.max;
}
function ye(t, e) {
  Fu(t.x, e.x), Fu(t.y, e.y);
}
function Gh(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
const qv = 1e-4, EA = 1 - qv, MA = 1 + qv, Xv = 0.01, DA = 0 - Xv, wA = 0 + Xv;
function Gt(t) {
  return t.max - t.min;
}
function RA(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Yh(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = tt(e.min, e.max, t.origin), t.scale = Gt(n) / Gt(e), t.translate = tt(n.min, n.max, t.origin) - t.originPoint, (t.scale >= EA && t.scale <= MA || isNaN(t.scale)) && (t.scale = 1), (t.translate >= DA && t.translate <= wA || isNaN(t.translate)) && (t.translate = 0);
}
function qa(t, e, n, i) {
  Yh(t.x, e.x, n.x, i ? i.originX : void 0), Yh(t.y, e.y, n.y, i ? i.originY : void 0);
}
function qh(t, e, n, i = 0) {
  const a = i ? tt(n.min, n.max, i) : n.min;
  t.min = a + e.min, t.max = t.min + Gt(e);
}
function CA(t, e, n, i) {
  qh(t.x, e.x, n.x, i == null ? void 0 : i.x), qh(t.y, e.y, n.y, i == null ? void 0 : i.y);
}
function Xh(t, e, n, i = 0) {
  const a = i ? tt(n.min, n.max, i) : n.min;
  t.min = e.min - a, t.max = t.min + Gt(e);
}
function oo(t, e, n, i) {
  Xh(t.x, e.x, n.x, i == null ? void 0 : i.x), Xh(t.y, e.y, n.y, i == null ? void 0 : i.y);
}
function Zh(t, e, n, i, a) {
  return t -= e, t = so(t, 1 / n, i), a !== void 0 && (t = so(t, 1 / a, i)), t;
}
function OA(t, e = 0, n = 1, i = 0.5, a, l = t, s = t) {
  if (Ve.test(e) && (e = parseFloat(e), e = tt(s.min, s.max, e / 100) - s.min), typeof e != "number")
    return;
  let o = tt(l.min, l.max, i);
  t === l && (o -= e), t.min = Zh(t.min, e, n, o, a), t.max = Zh(t.max, e, n, o, a);
}
function Qh(t, e, [n, i, a], l, s) {
  OA(t, e[n], e[i], e[a], e.scale, l, s);
}
const zA = ["x", "scaleX", "originX"], VA = ["y", "scaleY", "originY"];
function Kh(t, e, n, i) {
  Qh(t.x, e, zA, n ? n.x : void 0, i ? i.x : void 0), Qh(t.y, e, VA, n ? n.y : void 0, i ? i.y : void 0);
}
function Ph(t) {
  return t.translate === 0 && t.scale === 1;
}
function Zv(t) {
  return Ph(t.x) && Ph(t.y);
}
function Jh(t, e) {
  return t.min === e.min && t.max === e.max;
}
function UA(t, e) {
  return Jh(t.x, e.x) && Jh(t.y, e.y);
}
function Fh(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Qv(t, e) {
  return Fh(t.x, e.x) && Fh(t.y, e.y);
}
function Wh(t) {
  return Gt(t.x) / Gt(t.y);
}
function $h(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function Me(t) {
  return [t("x"), t("y")];
}
function _A(t, e, n) {
  let i = "";
  const a = t.x.translate / e.x, l = t.y.translate / e.y, s = (n == null ? void 0 : n.z) || 0;
  if ((a || l || s) && (i = `translate3d(${a}px, ${l}px, ${s}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, pathRotation: d, rotateX: f, rotateY: h, skewX: v, skewY: x } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), d && (i += `rotate(${d}deg) `), f && (i += `rotateX(${f}deg) `), h && (i += `rotateY(${h}deg) `), v && (i += `skewX(${v}deg) `), x && (i += `skewY(${x}deg) `);
  }
  const o = t.x.scale * e.x, r = t.y.scale * e.y;
  return (o !== 1 || r !== 1) && (i += `scale(${o}, ${r})`), i || "none";
}
const BA = xf.length, Ih = (t) => typeof t == "string" ? parseFloat(t) : t, tm = (t) => typeof t == "number" || U.test(t);
function NA(t, e, n, i, a, l) {
  a ? (t.opacity = tt(0, n.opacity ?? 1, jA(i)), t.opacityExit = tt(e.opacity ?? 1, 0, LA(i))) : l && (t.opacity = tt(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let s = 0; s < BA; s++) {
    const o = xf[s];
    let r = em(e, o), u = em(n, o);
    if (r === void 0 && u === void 0)
      continue;
    r || (r = 0), u || (u = 0), r === 0 || u === 0 || tm(r) === tm(u) ? (t[o] = Math.max(tt(Ih(r), Ih(u), i), 0), (Ve.test(u) || Ve.test(r)) && (t[o] += "%")) : t[o] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = tt(e.rotate || 0, n.rotate || 0, i));
}
function em(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const jA = /* @__PURE__ */ Kv(0, 0.5, ky), LA = /* @__PURE__ */ Kv(0.5, 0.95, he);
function Kv(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ ll(t, e, i));
}
function HA(t, e, n) {
  const i = zt(t) ? t : Ii(t);
  return i.start(yf("", i, e, n)), i.animation;
}
function rl(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
const kA = (t, e) => t.depth - e.depth;
class GA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    af(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Is(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(kA), this.isDirty = !1, this.children.forEach(e);
  }
}
function YA(t, e) {
  const n = kt.now(), i = ({ timestamp: a }) => {
    const l = a - n;
    l >= e && (Vn(i), t(l - e));
  };
  return et.setup(i, !0), () => Vn(i);
}
function Ss(t) {
  return zt(t) ? t.get() : t;
}
class qA {
  constructor() {
    this.members = [];
  }
  add(e) {
    af(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const i = this.members[n];
      if (i === e || i === this.lead || i === this.prevLead)
        continue;
      const a = i.instance;
      (!a || a.isConnected === !1) && !i.snapshot && (Is(this.members, i), i.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (Is(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    var n;
    for (let i = this.members.indexOf(e) - 1; i >= 0; i--) {
      const a = this.members[i];
      if (a.isPresent !== !1 && ((n = a.instance) == null ? void 0 : n.isConnected) !== !1)
        return this.promote(a), !0;
    }
    return !1;
  }
  promote(e, n) {
    var a;
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.updateSnapshot(), e.scheduleRender();
      const { layoutDependency: l } = i.options, { layoutDependency: s } = e.options;
      (l === void 0 || l !== s) && (e.resumeFrom = i, n && (i.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), (a = e.root) != null && a.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      var n, i, a, l, s;
      (i = (n = e.options).onExitComplete) == null || i.call(n), (s = (a = e.resumingFrom) == null ? void 0 : (l = a.options).onExitComplete) == null || s.call(l);
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var e;
    (e = this.lead) != null && e.snapshot && (this.lead.snapshot = void 0);
  }
}
const Ts = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Er = ["", "X", "Y", "Z"], XA = 1e3;
let ZA = 0;
function Mr(t, e, n, i) {
  const { latestValues: a } = e;
  a[t] && (n[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function Pv(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = gv(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: a, layoutId: l } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", et, !(a || l));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && Pv(i);
}
function Jv({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: a }) {
  return class {
    constructor(s = {}, o = e == null ? void 0 : e()) {
      this.id = ZA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(PA), this.nodes.forEach(tE), this.nodes.forEach(eE), this.nodes.forEach(JA);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
      for (let r = 0; r < this.path.length; r++)
        this.path[r].shouldResetTransform = !0;
      this.root === this && (this.nodes = new GA());
    }
    addEventListener(s, o) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new lf()), this.eventHandlers.get(s).add(o);
    }
    notifyListeners(s, ...o) {
      const r = this.eventHandlers.get(s);
      r && r.notify(...o);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = Af(s) && !KT(s), this.instance = s;
      const { layoutId: o, layout: r, visualElement: u } = this.options;
      if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || o) && (this.isLayoutDirty = !0), t) {
        let c, d = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        et.read(() => {
          d = window.innerWidth;
        }), t(s, () => {
          const h = window.innerWidth;
          h !== d && (d = h, this.root.updateBlockedByResize = !0, c && c(), c = YA(f, 250), Ts.hasAnimatedSinceResize && (Ts.hasAnimatedSinceResize = !1, this.nodes.forEach(am)));
        });
      }
      o && this.root.registerSharedNode(o, this), this.options.animate !== !1 && u && (o || r) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || sE, { onLayoutAnimationStart: x, onLayoutAnimationComplete: S } = u.getProps(), p = !this.targetLayout || !Qv(this.targetLayout, h), m = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || m || d && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const g = {
            ...gf(v, "layout"),
            onPlay: x,
            onComplete: S
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = !1), this.startAnimation(g), this.setAnimationOrigin(c, m, g.path);
        } else
          d || am(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = h;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Vn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(nE), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Pv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") && (d.isLayoutDirty = !0), d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: o, layout: r } = this.options;
      if (o === void 0 && !r)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const r = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), r && this.nodes.forEach(WA), this.nodes.forEach(nm);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(im);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach($A), this.nodes.forEach(IA), this.nodes.forEach(QA), this.nodes.forEach(KA)) : this.nodes.forEach(im), this.clearAllSnapshots();
      const o = kt.now();
      Rt.delta = Ue(0, 1e3 / 60, o - Rt.timestamp), Rt.timestamp = o, Rt.isProcessing = !0, gr.update.process(Rt), gr.preRender.process(Rt), gr.render.process(Rt), Rt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Sf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(FA), this.sharedNodes.forEach(iE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, et.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      et.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Gt(this.snapshot.measuredBox.x) && !Gt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let r = 0; r < this.path.length; r++)
          this.path[r].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = bt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o && o.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (o = !1), o && this.instance) {
        const r = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: r,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : r
        };
      }
    }
    resetTransform() {
      if (!a)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !Zv(this.projectionDelta), r = this.getTransformTemplate(), u = r ? r(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      s && this.instance && (o || qn(this.latestValues) || c) && (a(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const o = this.measurePageBox();
      let r = this.removeElementScroll(o);
      return s && (r = this.removeTransform(r)), oE(r), {
        animationId: this.root.animationId,
        measuredBox: o,
        layoutBox: r,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s)
        return bt();
      const o = s.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(rE))) {
        const { scroll: c } = this.root;
        c && (De(o.x, c.offset.x), De(o.y, c.offset.y));
      }
      return o;
    }
    removeElementScroll(s) {
      var r;
      const o = bt();
      if (ye(o, s), (r = this.scroll) != null && r.wasRoot)
        return o;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && ye(o, s), De(o.x, d.offset.x), De(o.y, d.offset.y));
      }
      return o;
    }
    applyTransform(s, o = !1, r) {
      var c, d;
      const u = r || bt();
      ye(u, s);
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f];
        !o && h.options.layoutScroll && h.scroll && h !== h.root && (De(u.x, -h.scroll.offset.x), De(u.y, -h.scroll.offset.y)), qn(h.latestValues) && xs(u, h.latestValues, (c = h.layout) == null ? void 0 : c.layoutBox);
      }
      return qn(this.latestValues) && xs(u, this.latestValues, (d = this.layout) == null ? void 0 : d.layoutBox), u;
    }
    removeTransform(s) {
      var r;
      const o = bt();
      ye(o, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!qn(c.latestValues))
          continue;
        let d;
        c.instance && (Ku(c.latestValues) && c.updateSnapshot(), d = bt(), ye(d, c.measurePageBox())), Kh(o, c.latestValues, (r = c.snapshot) == null ? void 0 : r.layoutBox, d);
      }
      return qn(this.latestValues) && Kh(o, this.latestValues), o;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Rt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const o = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
      const r = !!this.resumingFrom || this !== o;
      if (!(s || r && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d))
        return;
      this.resolvedRelativeTargetAt = Rt.timestamp;
      const f = this.getClosestProjectingParent();
      f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = bt(), this.targetWithTransforms = bt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), CA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : ye(this.target, this.layout.layoutBox), Uv(this.target, this.targetDelta)) : ye(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ku(this.parent.latestValues) || Vv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(s, o, r) {
      this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = bt(), this.relativeTargetOrigin = bt(), oo(this.relativeTargetOrigin, o, r, this.options.layoutAnchor || void 0), ye(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const s = this.getLead(), o = !!this.resumingFrom || this !== s;
      let r = !0;
      if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (r = !1), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === Rt.timestamp && (r = !1), r)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      ye(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      aA(this.layoutCorrected, this.treeScale, this.path, o), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = bt());
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Gh(this.prevProjectionDelta.x, this.projectionDelta.x), Gh(this.prevProjectionDelta.y, this.projectionDelta.y)), qa(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !$h(this.projectionDelta.x, this.prevProjectionDelta.x) || !$h(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var o;
      if ((o = this.options.visualElement) == null || o.scheduleRender(), s) {
        const r = this.getStack();
        r && r.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Vi(), this.projectionDelta = Vi(), this.projectionDeltaWithTransform = Vi();
    }
    setAnimationOrigin(s, o = !1, r) {
      const u = this.snapshot, c = u ? u.latestValues : {}, d = { ...this.latestValues }, f = Vi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
      const h = bt(), v = u ? u.source : void 0, x = this.layout ? this.layout.source : void 0, S = v !== x, p = this.getStack(), m = !p || p.members.length <= 1, g = !!(S && !m && this.options.crossfade === !0 && !this.path.some(lE));
      this.animationProgress = 0;
      let y;
      const T = r == null ? void 0 : r.interpolateProjection(s);
      this.mixTargetDelta = (M) => {
        const A = M / 1e3, b = T == null ? void 0 : T(A);
        b ? (f.x.translate = b.x, f.x.scale = tt(s.x.scale, 1, A), f.x.origin = s.x.origin, f.x.originPoint = s.x.originPoint, f.y.translate = b.y, f.y.scale = tt(s.y.scale, 1, A), f.y.origin = s.y.origin, f.y.originPoint = s.y.originPoint) : (lm(f.x, s.x, A), lm(f.y, s.y, A)), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (oo(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), aE(this.relativeTarget, this.relativeTargetOrigin, h, A), y && UA(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = bt()), ye(y, this.relativeTarget)), S && (this.animationValues = d, NA(d, c, this.latestValues, A, g, m)), b && b.rotate !== void 0 && (this.animationValues || (this.animationValues = d), this.animationValues.pathRotation = b.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = A;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var o, r, u;
      this.notifyListeners("animationStart"), (o = this.currentAnimation) == null || o.stop(), (u = (r = this.resumingFrom) == null ? void 0 : r.currentAnimation) == null || u.stop(), this.pendingAnimation && (Vn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = et.update(() => {
        Ts.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ii(0)), this.motionValue.jump(0, !1), this.currentAnimation = HA(this.motionValue, [0, 1e3], {
          ...s,
          velocity: 0,
          isSync: !0,
          onUpdate: (c) => {
            this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(XA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: o, target: r, layout: u, latestValues: c } = s;
      if (!(!o || !r || !u)) {
        if (this !== s && this.layout && u && Fv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          r = this.target || bt();
          const d = Gt(this.layout.layoutBox.x);
          r.x.min = s.target.x.min, r.x.max = r.x.min + d;
          const f = Gt(this.layout.layoutBox.y);
          r.y.min = s.target.y.min, r.y.max = r.y.min + f;
        }
        ye(o, r), xs(o, c), qa(this.projectionDeltaWithTransform, this.layoutCorrected, o, c);
      }
    }
    registerSharedNode(s, o) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new qA()), this.sharedNodes.get(s).add(o);
      const u = o.options.initialPromotionConfig;
      o.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(o) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: s } = this.options;
      return s ? ((o = this.getStack()) == null ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: s } = this.options;
      return s ? (o = this.getStack()) == null ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: o, preserveFollowOpacity: r } = {}) {
      const u = this.getStack();
      u && u.promote(this, r), s && (this.projectionDelta = void 0, this.needsReset = !0), o && this.setOptions({ transition: o });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let o = !1;
      const { latestValues: r } = s;
      if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (o = !0), !o)
        return;
      const u = {};
      r.z && Mr("z", s, u, this.animationValues);
      for (let c = 0; c < Er.length; c++)
        Mr(`rotate${Er[c]}`, s, u, this.animationValues), Mr(`skew${Er[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, o) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const r = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = Ss(o == null ? void 0 : o.pointerEvents) || "", s.transform = r ? r(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = Ss(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !qn(this.latestValues) && (s.transform = r ? r({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = _A(this.projectionDeltaWithTransform, this.treeScale, c);
      r && (d = r(c, d)), s.transform = d;
      const { x: f, y: h } = this.projectionDelta;
      s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`, u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const v in Ju) {
        if (c[v] === void 0)
          continue;
        const { correct: x, applyTo: S, isCSSVariable: p } = Ju[v], m = d === "none" ? c[v] : x(c[v], u);
        if (S) {
          const g = S.length;
          for (let y = 0; y < g; y++)
            s[S[y]] = m;
        } else
          p ? this.options.visualElement.renderState.vars[v] = m : s[v] = m;
      }
      this.options.layoutId && (s.pointerEvents = u === this ? Ss(o == null ? void 0 : o.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var o;
        return (o = s.currentAnimation) == null ? void 0 : o.stop();
      }), this.root.nodes.forEach(nm), this.root.sharedNodes.clear();
    }
  };
}
function QA(t) {
  t.updateLayout();
}
function KA(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: a } = t.layout, { animationType: l } = t.options, s = e.source !== t.layout.source;
    if (l === "size")
      Me((d) => {
        const f = s ? e.measuredBox[d] : e.layoutBox[d], h = Gt(f);
        f.min = i[d].min, f.max = f.min + h;
      });
    else if (l === "x" || l === "y") {
      const d = l === "x" ? "y" : "x";
      Fu(s ? e.measuredBox[d] : e.layoutBox[d], i[d]);
    } else Fv(l, e.layoutBox, i) && Me((d) => {
      const f = s ? e.measuredBox[d] : e.layoutBox[d], h = Gt(i[d]);
      f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[d].max = t.relativeTarget[d].min + h);
    });
    const o = Vi();
    qa(o, i, e.layoutBox);
    const r = Vi();
    s ? qa(r, t.applyTransform(a, !0), e.measuredBox) : qa(r, i, e.layoutBox);
    const u = !Zv(o);
    let c = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = t.options.layoutAnchor || void 0, x = bt();
          oo(x, e.layoutBox, f.layoutBox, v);
          const S = bt();
          oo(S, i, h.layoutBox, v), Qv(x, S) || (c = !0), d.options.layoutRoot && (t.relativeTarget = S, t.relativeTargetOrigin = x, t.relativeParent = d);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: e,
      delta: r,
      layoutDelta: o,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function PA(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function JA(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function FA(t) {
  t.clearSnapshot();
}
function nm(t) {
  t.clearMeasurements();
}
function WA(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function im(t) {
  t.isLayoutDirty = !1;
}
function $A(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function IA(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function am(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function tE(t) {
  t.resolveTargetDelta();
}
function eE(t) {
  t.calcProjection();
}
function nE(t) {
  t.resetSkewAndRotation();
}
function iE(t) {
  t.removeLeadSnapshot();
}
function lm(t, e, n) {
  t.translate = tt(e.translate, 0, n), t.scale = tt(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function sm(t, e, n, i) {
  t.min = tt(e.min, n.min, i), t.max = tt(e.max, n.max, i);
}
function aE(t, e, n, i) {
  sm(t.x, e.x, n.x, i), sm(t.y, e.y, n.y, i);
}
function lE(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const sE = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, om = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), rm = om("applewebkit/") && !om("chrome/") ? Math.round : he;
function um(t) {
  t.min = rm(t.min), t.max = rm(t.max);
}
function oE(t) {
  um(t.x), um(t.y);
}
function Fv(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !RA(Wh(e), Wh(n), 0.2);
}
function rE(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const uE = Jv({
  attachResizeListener: (t, e) => rl(t, "resize", e),
  measureScroll: () => {
    var t, e;
    return {
      x: document.documentElement.scrollLeft || ((t = document.body) == null ? void 0 : t.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((e = document.body) == null ? void 0 : e.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), Dr = {
  current: void 0
}, Wv = Jv({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Dr.current) {
      const t = new uE({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Dr.current = t;
    }
    return Dr.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Rf = w.createContext({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function cm(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function cE(...t) {
  return (e) => {
    let n = !1;
    const i = t.map((a) => {
      const l = cm(a, e);
      return !n && typeof l == "function" && (n = !0), l;
    });
    if (n)
      return () => {
        for (let a = 0; a < i.length; a++) {
          const l = i[a];
          typeof l == "function" ? l() : cm(t[a], null);
        }
      };
  };
}
function fE(...t) {
  return w.useCallback(cE(...t), t);
}
class dE extends w.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (gs(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const i = n.offsetParent, a = gs(i) && i.offsetWidth || 0, l = gs(i) && i.offsetHeight || 0, s = getComputedStyle(n), o = this.props.sizeRef.current;
      o.height = parseFloat(s.height), o.width = parseFloat(s.width), o.top = n.offsetTop, o.left = n.offsetLeft, o.right = a - o.width - o.left, o.bottom = l - o.height - o.top, o.direction = s.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function hE({ children: t, isPresent: e, anchorX: n, anchorY: i, root: a, pop: l }) {
  var f;
  const s = w.useId(), o = w.useRef(null), r = w.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: u } = w.useContext(Rf), c = l !== !1 ? ((f = t.props) == null ? void 0 : f.ref) ?? (t == null ? void 0 : t.ref) : void 0, d = fE(o, c);
  return w.useInsertionEffect(() => {
    const { width: h, height: v, top: x, left: S, right: p, bottom: m, direction: g } = r.current;
    if (e || l === !1 || !o.current || !h || !v)
      return;
    const y = g === "rtl", T = n === "left" ? y ? `right: ${p}` : `left: ${S}` : y ? `left: ${S}` : `right: ${p}`, M = i === "bottom" ? `bottom: ${m}` : `top: ${x}`;
    o.current.dataset.motionPopId = s;
    const A = document.createElement("style");
    u && (A.nonce = u);
    const b = a ?? document.head;
    return b.appendChild(A), A.sheet && A.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${T}px !important;
            ${M}px !important;
          }
        `), () => {
      var O;
      (O = o.current) == null || O.removeAttribute("data-motion-pop-id"), b.contains(A) && b.removeChild(A);
    };
  }, [e]), k.jsx(dE, { isPresent: e, childRef: o, sizeRef: r, pop: l, children: l === !1 ? t : w.cloneElement(t, { ref: d }) });
}
const mE = ({ children: t, initial: e, isPresent: n, onExitComplete: i, custom: a, presenceAffectsLayout: l, mode: s, anchorX: o, anchorY: r, root: u }) => {
  const c = ef(pE), d = w.useId(), f = w.useRef(n), h = w.useRef(i);
  nf(() => {
    f.current = n, h.current = i;
  });
  let v = !0, x = w.useMemo(() => (v = !1, {
    id: d,
    initial: e,
    isPresent: n,
    custom: a,
    onExitComplete: (S) => {
      c.set(S, !0);
      for (const p of c.values())
        if (!p)
          return;
      i && i();
    },
    register: (S) => (c.set(S, !1), () => {
      var p;
      c.delete(S), !f.current && !c.size && ((p = h.current) == null || p.call(h));
    })
  }), [n, c, i]);
  return l && v && (x = { ...x }), w.useMemo(() => {
    c.forEach((S, p) => c.set(p, !1));
  }, [n]), w.useEffect(() => {
    !n && !c.size && i && i();
  }, [n]), t = k.jsx(hE, { pop: s === "popLayout", isPresent: n, anchorX: o, anchorY: r, root: u, children: t }), k.jsx(Co.Provider, { value: x, children: t });
};
function pE() {
  return /* @__PURE__ */ new Map();
}
function $v(t = !0) {
  const e = w.useContext(Co);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: a } = e, l = w.useId();
  w.useEffect(() => {
    if (t)
      return a(l);
  }, [t]);
  const s = w.useCallback(() => t && i && i(l), [l, i, t]);
  return !n && i ? [!1, s] : [!0];
}
const Wl = (t) => t.key || "";
function fm(t) {
  const e = [];
  return w.Children.forEach(t, (n) => {
    w.isValidElement(n) && e.push(n);
  }), e;
}
const gE = ({ children: t, custom: e, initial: n = !0, onExitComplete: i, presenceAffectsLayout: a = !0, mode: l = "sync", propagate: s = !1, anchorX: o = "left", anchorY: r = "top", root: u }) => {
  const [c, d] = $v(s), f = w.useMemo(() => fm(t), [t]), h = s && !c ? [] : f.map(Wl), v = w.useRef(!0), x = w.useRef(f), S = ef(() => /* @__PURE__ */ new Map()), p = w.useRef(/* @__PURE__ */ new Set()), [m, g] = w.useState(f), [y, T] = w.useState(f);
  nf(() => {
    v.current = !1, x.current = f;
    for (let b = 0; b < y.length; b++) {
      const O = Wl(y[b]);
      h.includes(O) ? (S.delete(O), p.current.delete(O)) : S.get(O) !== !0 && S.set(O, !1);
    }
  }, [y, h.length, h.join("-")]);
  const M = [];
  if (f !== m) {
    let b = [...f];
    for (let O = 0; O < y.length; O++) {
      const D = y[O], j = Wl(D);
      h.includes(j) || (b.splice(O, 0, D), M.push(D));
    }
    return l === "wait" && M.length && (b = M), T(fm(b)), g(f), null;
  }
  const { forceRender: A } = w.useContext(tf);
  return k.jsx(k.Fragment, { children: y.map((b) => {
    const O = Wl(b), D = s && !c ? !1 : f === y || h.includes(O), j = () => {
      if (p.current.has(O))
        return;
      if (S.has(O))
        p.current.add(O), S.set(O, !0);
      else
        return;
      let Q = !0;
      S.forEach((Nt) => {
        Nt || (Q = !1);
      }), Q && (A == null || A(), T(x.current), s && (d == null || d()), i && i());
    };
    return k.jsx(mE, { isPresent: D, initial: !v.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: a, mode: l, root: u, onExitComplete: D ? void 0 : j, anchorX: o, anchorY: r, children: b }, O);
  }) });
}, Iv = w.createContext({ strict: !1 }), dm = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let hm = !1;
function yE() {
  if (hm)
    return;
  const t = {};
  for (const e in dm)
    t[e] = {
      isEnabled: (n) => dm[e].some((i) => !!n[i])
    };
  Cv(t), hm = !0;
}
function t0() {
  return yE(), tA();
}
function vE(t) {
  const e = t0();
  for (const n in t)
    e[n] = {
      ...e[n],
      ...t[n]
    };
  Cv(e);
}
const bE = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function ro(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || bE.has(t);
}
let e0 = (t) => !ro(t);
function xE(t) {
  typeof t == "function" && (e0 = (e) => e.startsWith("on") ? !ro(e) : t(e));
}
try {
  xE(require("@emotion/is-prop-valid").default);
} catch {
}
function SE(t, e, n) {
  const i = {};
  for (const a in t)
    a === "values" && typeof t.values == "object" || zt(t[a]) || (e0(a) || n === !0 && ro(a) || !e && !ro(a) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
  return i;
}
const Uo = /* @__PURE__ */ w.createContext({});
function TE(t, e) {
  if (Vo(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || ol(n) ? n : void 0,
      animate: ol(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function AE(t) {
  const { initial: e, animate: n } = TE(t, w.useContext(Uo));
  return w.useMemo(() => ({ initial: e, animate: n }), [mm(e), mm(n)]);
}
function mm(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Cf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function n0(t, e, n) {
  for (const i in e)
    !zt(e[i]) && !Nv(i, n) && (t[i] = e[i]);
}
function EE({ transformTemplate: t }, e) {
  return w.useMemo(() => {
    const n = Cf();
    return Df(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function ME(t, e) {
  const n = t.style || {}, i = {};
  return n0(i, n, t), Object.assign(i, EE(t, e)), i;
}
function DE(t, e) {
  const n = {}, i = ME(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
const i0 = () => ({
  ...Cf(),
  attrs: {}
});
function wE(t, e, n, i) {
  const a = w.useMemo(() => {
    const l = i0();
    return jv(l, e, Hv(i), t.transformTemplate, t.style), {
      ...l.attrs,
      style: { ...l.style }
    };
  }, [e]);
  if (t.style) {
    const l = {};
    n0(l, t.style, t), a.style = { ...l, ...a.style };
  }
  return a;
}
const RE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Of(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(RE.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function CE(t, e, n, { latestValues: i }, a, l = !1, s) {
  const r = (s ?? Of(t) ? wE : DE)(e, i, a, t), u = SE(e, typeof t == "string", l), c = t !== w.Fragment ? { ...u, ...r, ref: n } : {}, { children: d } = e, f = w.useMemo(() => zt(d) ? d.get() : d, [d]);
  return w.createElement(t, {
    ...c,
    children: f
  });
}
function OE({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, a) {
  return {
    latestValues: zE(n, i, a, t),
    renderState: e()
  };
}
function zE(t, e, n, i) {
  const a = {}, l = i(t, {});
  for (const f in l)
    a[f] = Ss(l[f]);
  let { initial: s, animate: o } = t;
  const r = Vo(t), u = wv(t);
  e && u && !r && t.inherit !== !1 && (s === void 0 && (s = e.initial), o === void 0 && (o = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? o : s;
  if (d && typeof d != "boolean" && !zo(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = vf(t, f[h]);
      if (v) {
        const { transitionEnd: x, transition: S, ...p } = v;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const y = c ? g.length - 1 : 0;
            g = g[y];
          }
          g !== null && (a[m] = g);
        }
        for (const m in x)
          a[m] = x[m];
      }
    }
  }
  return a;
}
const a0 = (t) => (e, n) => {
  const i = w.useContext(Uo), a = w.useContext(Co), l = () => OE(t, e, i, a);
  return n ? l() : ef(l);
}, VE = /* @__PURE__ */ a0({
  scrapeMotionValuesFromProps: wf,
  createRenderState: Cf
}), UE = /* @__PURE__ */ a0({
  scrapeMotionValuesFromProps: kv,
  createRenderState: i0
}), _E = Symbol.for("motionComponentSymbol");
function BE(t, e, n) {
  const i = w.useRef(n);
  w.useInsertionEffect(() => {
    i.current = n;
  });
  const a = w.useRef(null);
  return w.useCallback((l) => {
    var o;
    l && ((o = t.onMount) == null || o.call(t, l)), e && (l ? e.mount(l) : e.unmount());
    const s = i.current;
    if (typeof s == "function")
      if (l) {
        const r = s(l);
        typeof r == "function" && (a.current = r);
      } else a.current ? (a.current(), a.current = null) : s(l);
    else s && (s.current = l);
  }, [e]);
}
const l0 = w.createContext({});
function yi(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function NE(t, e, n, i, a, l) {
  var g, y;
  const { visualElement: s } = w.useContext(Uo), o = w.useContext(Iv), r = w.useContext(Co), u = w.useContext(Rf), c = u.reducedMotion, d = u.skipAnimations, f = w.useRef(null), h = w.useRef(!1);
  i = i || o.renderer, !f.current && i && (f.current = i(t, {
    visualState: e,
    parent: s,
    props: n,
    presenceContext: r,
    blockInitialAnimation: r ? r.initial === !1 : !1,
    reducedMotionConfig: c,
    skipAnimations: d,
    isSVG: l
  }), h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const v = f.current, x = w.useContext(l0);
  v && !v.projection && a && (v.type === "html" || v.type === "svg") && jE(f.current, n, a, x);
  const S = w.useRef(!1);
  w.useInsertionEffect(() => {
    v && S.current && v.update(n, r);
  });
  const p = n[pv], m = w.useRef(!!p && typeof window < "u" && !((g = window.MotionHandoffIsComplete) != null && g.call(window, p)) && ((y = window.MotionHasOptimisedAnimation) == null ? void 0 : y.call(window, p)));
  return nf(() => {
    h.current = !0, v && (S.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), m.current && v.animationState && v.animationState.animateChanges());
  }), w.useEffect(() => {
    v && (!m.current && v.animationState && v.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var T;
      (T = window.MotionHandoffMarkAsComplete) == null || T.call(window, p);
    }), m.current = !1), v.enteringChildren = void 0);
  }), v;
}
function jE(t, e, n, i) {
  const { layoutId: a, layout: l, drag: s, dragConstraints: o, layoutScroll: r, layoutRoot: u, layoutAnchor: c, layoutCrossfade: d } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : s0(t.parent)), t.projection.setOptions({
    layoutId: a,
    layout: l,
    alwaysMeasureLayout: !!s || o && yi(o),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof l == "string" ? l : "both",
    initialPromotionConfig: i,
    crossfade: d,
    layoutScroll: r,
    layoutRoot: u,
    layoutAnchor: c
  });
}
function s0(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : s0(t.parent);
}
function wr(t, { forwardMotionProps: e = !1, type: n } = {}, i, a) {
  i && vE(i);
  const l = n ? n === "svg" : Of(t), s = l ? UE : VE;
  function o(u, c) {
    let d;
    const f = {
      ...w.useContext(Rf),
      ...u,
      layoutId: LE(u)
    }, { isStatic: h } = f, v = AE(u), x = s(u, h);
    if (!h && typeof window < "u") {
      HE();
      const S = kE(f);
      d = S.MeasureLayout, v.visualElement = NE(t, x, f, a, S.ProjectionNode, l);
    }
    return k.jsxs(Uo.Provider, { value: v, children: [d && v.visualElement ? k.jsx(d, { visualElement: v.visualElement, ...f }) : null, CE(t, u, BE(x, v.visualElement, c), x, h, e, l)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = w.forwardRef(o);
  return r[_E] = t, r;
}
function LE({ layoutId: t }) {
  const e = w.useContext(tf).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function HE(t, e) {
  w.useContext(Iv).strict;
}
function kE(t) {
  const e = t0(), { drag: n, layout: i } = e;
  if (!n && !i)
    return {};
  const a = { ...n, ...i };
  return {
    MeasureLayout: n != null && n.isEnabled(t) || i != null && i.isEnabled(t) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode
  };
}
function GE(t, e) {
  if (typeof Proxy > "u")
    return wr;
  const n = /* @__PURE__ */ new Map(), i = (l, s) => wr(l, s, t, e), a = (l, s) => i(l, s);
  return new Proxy(a, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (l, s) => s === "create" ? i : (n.has(s) || n.set(s, wr(s, void 0, t, e)), n.get(s))
  });
}
const YE = (t, e) => e.isSVG ?? Of(t) ? new yA(e) : new fA(e, {
  allowProjection: t !== w.Fragment
});
class qE extends Bn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = TA(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    zo(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let XE = 0;
class ZE extends Bn {
  constructor() {
    super(...arguments), this.id = XE++, this.isExitComplete = !1;
  }
  update() {
    var l;
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    if (e && i === !1) {
      if (this.isExitComplete) {
        const { initial: s, custom: o } = this.node.getProps();
        if (typeof s == "string" || typeof s == "object" && s !== null && !Array.isArray(s)) {
          const r = ti(this.node, s, o);
          if (r) {
            const { transition: u, transitionEnd: c, ...d } = r;
            for (const f in d)
              (l = this.node.getValue(f)) == null || l.jump(d[f]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const a = this.node.animationState.setActive("exit", !e);
    n && !e && a.then(() => {
      this.isExitComplete = !0, n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const QE = {
  animation: {
    Feature: qE
  },
  exit: {
    Feature: ZE
  }
};
function Cl(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const KE = (t) => (e) => Tf(e) && t(e, Cl(e));
function Xa(t, e, n, i) {
  return rl(t, e, KE(n), i);
}
const o0 = ({ current: t }) => t ? t.ownerDocument.defaultView : null, pm = (t, e) => Math.abs(t - e);
function PE(t, e) {
  const n = pm(t.x, e.x), i = pm(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
const gm = /* @__PURE__ */ new Set(["auto", "scroll"]);
class r0 {
  constructor(e, n, { transformPagePoint: i, contextWindow: a = window, dragSnapToOrigin: l = !1, distanceThreshold: s = 3, element: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (v) => {
      this.handleScroll(v.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = $l(this.lastRawMoveEventInfo, this.transformPagePoint));
      const v = Rr(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, S = PE(v.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!x && !S)
        return;
      const { point: p } = v, { timestamp: m } = Rt;
      this.history.push({ ...p, timestamp: m });
      const { onStart: g, onMove: y } = this.handlers;
      x || (g && g(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, x) => {
      this.lastMoveEvent = v, this.lastRawMoveEventInfo = x, this.lastMoveEventInfo = $l(x, this.transformPagePoint), et.update(this.updatePoint, !0);
    }, this.handlePointerUp = (v, x) => {
      this.end();
      const { onEnd: S, onSessionEnd: p, resumeAnimation: m } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Rr(v.type === "pointercancel" ? this.lastMoveEventInfo : $l(x, this.transformPagePoint), this.history);
      this.startEvent && S && S(v, g), p && p(v, g);
    }, !Tf(e))
      return;
    this.dragSnapToOrigin = l, this.handlers = n, this.transformPagePoint = i, this.distanceThreshold = s, this.contextWindow = a || window;
    const r = Cl(e), u = $l(r, this.transformPagePoint), { point: c } = u, { timestamp: d } = Rt;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    f && f(e, Rr(u, this.history));
    const h = { passive: !0, capture: !0 };
    this.removeListeners = Dl(Xa(this.contextWindow, "pointermove", this.handlePointerMove, h), Xa(this.contextWindow, "pointerup", this.handlePointerUp, h), Xa(this.contextWindow, "pointercancel", this.handlePointerUp, h)), o && this.startScrollTracking(o);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const i = getComputedStyle(n);
      (gm.has(i.overflowX) || gm.has(i.overflowY)) && this.scrollPositions.set(n, {
        x: n.scrollLeft,
        y: n.scrollTop
      }), n = n.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n)
      return;
    const i = e === window, a = i ? { x: window.scrollX, y: window.scrollY } : {
      x: e.scrollLeft,
      y: e.scrollTop
    }, l = { x: a.x - n.x, y: a.y - n.y };
    l.x === 0 && l.y === 0 || (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += l.x, this.lastMoveEventInfo.point.y += l.y) : this.history.length > 0 && (this.history[0].x -= l.x, this.history[0].y -= l.y), this.scrollPositions.set(e, a), et.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Vn(this.updatePoint);
  }
}
function $l(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ym(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Rr({ point: t }, e) {
  return {
    point: t,
    delta: ym(t, u0(e)),
    offset: ym(t, JE(e)),
    velocity: FE(e, 0.1)
  };
}
function JE(t) {
  return t[0];
}
function u0(t) {
  return t[t.length - 1];
}
function FE(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const a = u0(t);
  for (; n >= 0 && (i = t[n], !(a.timestamp - i.timestamp > /* @__PURE__ */ Kt(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  i === t[0] && t.length > 2 && a.timestamp - i.timestamp > /* @__PURE__ */ Kt(e) * 2 && (i = t[1]);
  const l = /* @__PURE__ */ de(a.timestamp - i.timestamp);
  if (l === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (a.x - i.x) / l,
    y: (a.y - i.y) / l
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function WE(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? tt(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? tt(n, t, i.max) : Math.min(t, n)), t;
}
function vm(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function $E(t, { top: e, left: n, bottom: i, right: a }) {
  return {
    x: vm(t.x, n, a),
    y: vm(t.y, e, i)
  };
}
function bm(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function IE(t, e) {
  return {
    x: bm(t.x, e.x),
    y: bm(t.y, e.y)
  };
}
function tM(t, e) {
  let n = 0.5;
  const i = Gt(t), a = Gt(e);
  return a > i ? n = /* @__PURE__ */ ll(e.min, e.max - i, t.min) : i > a && (n = /* @__PURE__ */ ll(t.min, t.max - a, e.min)), Ue(0, 1, n);
}
function eM(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Wu = 0.35;
function nM(t = Wu) {
  return t === !1 ? t = 0 : t === !0 && (t = Wu), {
    x: xm(t, "left", "right"),
    y: xm(t, "top", "bottom")
  };
}
function xm(t, e, n) {
  return {
    min: Sm(t, e),
    max: Sm(t, n)
  };
}
function Sm(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const iM = /* @__PURE__ */ new WeakMap();
class aM {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = bt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1)
      return;
    const l = (d) => {
      n && this.snapToCursor(Cl(d).point), this.stopAnimation();
    }, s = (d, f) => {
      const { drag: h, dragPropagation: v, onDragStart: x } = this.getProps();
      if (h && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = OT(h), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Me((p) => {
        let m = this.getAxisMotionValue(p).get() || 0;
        if (Ve.test(m)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const y = g.layout.layoutBox[p];
            y && (m = Gt(y) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[p] = m;
      }), x && et.update(() => x(d, f), !1, !0), Gu(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, o = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f;
      const { dragPropagation: h, dragDirectionLock: v, onDirectionLock: x, onDrag: S } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: p } = f;
      if (v && this.currentDirection === null) {
        this.currentDirection = sM(p), this.currentDirection !== null && x && x(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, p), this.updateAxis("y", f.point, p), this.visualElement.render(), S && et.update(() => S(d, f), !1, !0);
    }, r = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => {
      const { dragSnapToOrigin: d } = this.getProps();
      (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new r0(e, {
      onSessionStart: l,
      onStart: s,
      onMove: o,
      onSessionEnd: r,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: i,
      contextWindow: o0(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const i = e || this.latestPointerEvent, a = n || this.latestPanInfo, l = this.isDragging;
    if (this.cancel(), !l || !a || !i)
      return;
    const { velocity: s } = a;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && et.postRender(() => o(i, a));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(e, n, i) {
    const { drag: a } = this.getProps();
    if (!i || !Il(e, a, this.currentDirection))
      return;
    const l = this.getAxisMotionValue(e);
    let s = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (s = WE(s, this.constraints[e], this.elastic[e])), l.set(s);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (l = this.visualElement.projection) == null ? void 0 : l.layout, a = this.constraints;
    e && yi(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = $E(i.layoutBox, e) : this.constraints = !1, this.elastic = nM(n), a !== this.constraints && !yi(e) && i && this.constraints && !this.hasMutatedConstraints && Me((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = eM(i.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !yi(e))
      return !1;
    const i = e.current;
    On(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    a.root && (a.root.scroll = void 0, a.root.updateScroll());
    const l = lA(i, a.root, this.visualElement.getTransformPagePoint());
    let s = IE(a.layout.layoutBox, l);
    if (n) {
      const o = n(nA(s));
      this.hasMutatedConstraints = !!o, o && (s = zv(o));
    }
    return s;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: a, dragTransition: l, dragSnapToOrigin: s, onDragTransitionEnd: o } = this.getProps(), r = this.constraints || {}, u = Me((c) => {
      if (!Il(c, n, this.currentDirection))
        return;
      let d = r && r[c] || {};
      (s === !0 || s === c) && (d = { min: 0, max: 0 });
      const f = a ? 200 : 1e6, h = a ? 40 : 1e7, v = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...l,
        ...d
      };
      return this.startAxisValueAnimation(c, v);
    });
    return Promise.all(u).then(o);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return Gu(this.visualElement, e), i.start(yf(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Me((e) => this.getAxisMotionValue(e).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, a = this.visualElement.getProps()[n];
    return a || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
  }
  snapToCursor(e) {
    Me((n) => {
      const { drag: i } = this.getProps();
      if (!Il(n, i, this.currentDirection))
        return;
      const { projection: a } = this.visualElement, l = this.getAxisMotionValue(n);
      if (a && a.layout) {
        const { min: s, max: o } = a.layout.layoutBox[n], r = l.get() || 0;
        l.set(e[n] - tt(s, o, 0.5) + r);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!yi(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    Me((s) => {
      const o = this.getAxisMotionValue(s);
      if (o && this.constraints !== !1) {
        const r = o.get();
        a[s] = tM({ min: r, max: r }, this.constraints[s]);
      }
    });
    const { transformTemplate: l } = this.visualElement.getProps();
    this.visualElement.current.style.transform = l ? l({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), Me((s) => {
      if (!Il(s, e, null))
        return;
      const o = this.getAxisMotionValue(s), { min: r, max: u } = this.constraints[s];
      o.set(tt(r, u, a[s]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    iM.set(this.visualElement, this);
    const e = this.visualElement.current, n = Xa(e, "pointerdown", (u) => {
      const { drag: c, dragListener: d = !0 } = this.getProps(), f = u.target, h = f !== e && NT(f);
      c && d && !h && this.start(u);
    });
    let i;
    const a = () => {
      const { dragConstraints: u } = this.getProps();
      yi(u) && u.current && (this.constraints = this.resolveRefConstraints(), i || (i = lM(e, u.current, () => this.scalePositionWithinConstraints())));
    }, { projection: l } = this.visualElement, s = l.addEventListener("measure", a);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), et.read(a);
    const o = rl(window, "resize", () => this.scalePositionWithinConstraints()), r = l.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
      this.isDragging && c && (Me((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += u[d].translate, f.set(f.get() + u[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), r && r(), i && i();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: a = !1, dragConstraints: l = !1, dragElastic: s = Wu, dragMomentum: o = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: a,
      dragConstraints: l,
      dragElastic: s,
      dragMomentum: o
    };
  }
}
function Tm(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function lM(t, e, n) {
  const i = Ch(t, Tm(n)), a = Ch(e, Tm(n));
  return () => {
    i(), a();
  };
}
function Il(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function sM(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class oM extends Bn {
  constructor(e) {
    super(e), this.removeGroupControls = he, this.removeListeners = he, this.controls = new aM(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || he;
  }
  update() {
    const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Cr = (t) => (e, n) => {
  t && et.update(() => t(e, n), !1, !0);
};
class rM extends Bn {
  constructor() {
    super(...arguments), this.removePointerDownListener = he;
  }
  onPointerDown(e) {
    this.session = new r0(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: o0(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: Cr(e),
      onStart: Cr(n),
      onMove: Cr(i),
      onEnd: (l, s) => {
        delete this.session, a && et.postRender(() => a(l, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Xa(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Or = !1;
class uM extends w.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: a } = this.props, { projection: l } = e;
    l && (n.group && n.group.add(l), i && i.register && a && i.register(l), Or && l.root.didUpdate(), l.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), l.setOptions({
      ...l.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Ts.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: a, isPresent: l } = this.props, { projection: s } = i;
    return s && (s.isPresent = l, e.layoutDependency !== n && s.setOptions({
      ...s.options,
      layoutDependency: n
    }), Or = !0, a || e.layoutDependency !== n || n === void 0 || e.isPresent !== l ? s.willUpdate() : this.safeToRemove(), e.isPresent !== l && (l ? s.promote() : s.relegate() || et.postRender(() => {
      const o = s.getStack();
      (!o || !o.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props, { projection: i } = e;
    i && (i.options.layoutAnchor = n, i.root.didUpdate(), Sf.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: a } = e;
    Or = !0, a && (a.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(a), i && i.deregister && i.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function c0(t) {
  const [e, n] = $v(), i = w.useContext(tf);
  return k.jsx(uM, { ...t, layoutGroup: i, switchLayoutGroup: w.useContext(l0), isPresent: e, safeToRemove: n });
}
const cM = {
  pan: {
    Feature: rM
  },
  drag: {
    Feature: oM,
    ProjectionNode: Wv,
    MeasureLayout: c0
  }
};
function Am(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const a = "onHover" + n, l = i[a];
  l && et.postRender(() => l(e, Cl(e)));
}
class fM extends Bn {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = VT(e, (n, i) => (Am(this.node, i, "Start"), (a) => Am(this.node, a, "End"))));
  }
  unmount() {
  }
}
class dM extends Bn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Dl(rl(this.node.current, "focus", () => this.onFocus()), rl(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Em(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const a = "onTap" + (n === "End" ? "" : n), l = i[a];
  l && et.postRender(() => l(e, Cl(e)));
}
class hM extends Bn {
  mount() {
    const { current: e } = this.node;
    if (!e)
      return;
    const { globalTapTarget: n, propagate: i } = this.node.props;
    this.unmount = LT(e, (a, l) => (Em(this.node, l, "Start"), (s, { success: o }) => Em(this.node, s, o ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: (i == null ? void 0 : i.tap) === !1
    });
  }
  unmount() {
  }
}
const $u = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), mM = (t) => {
  const e = $u.get(t.target);
  e && e(t);
}, pM = (t) => {
  t.forEach(mM);
};
function gM({ root: t, ...e }) {
  const n = t || document;
  zr.has(n) || zr.set(n, {});
  const i = zr.get(n), a = JSON.stringify(e);
  return i[a] || (i[a] = new IntersectionObserver(pM, { root: t, ...e })), i[a];
}
function yM(t, e, n) {
  const i = gM(e);
  return $u.set(t, n), i.observe(t), () => {
    $u.delete(t), i.unobserve(t);
  };
}
const vM = {
  some: 0,
  all: 1
};
class bM extends Bn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var r;
    (r = this.stopObserver) == null || r.call(this);
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: a = "some", once: l } = e, s = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof a == "number" ? a : vM[a]
    }, o = (u) => {
      const { isIntersecting: c } = u;
      if (this.isInView === c || (this.isInView = c, l && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), h = c ? d : f;
      h && h(u);
    };
    this.stopObserver = yM(this.node.current, s, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(xM(e, n)) && this.startObserver();
  }
  unmount() {
    var e;
    (e = this.stopObserver) == null || e.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function xM({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const SM = {
  inView: {
    Feature: bM
  },
  tap: {
    Feature: hM
  },
  focus: {
    Feature: dM
  },
  hover: {
    Feature: fM
  }
}, TM = {
  layout: {
    ProjectionNode: Wv,
    MeasureLayout: c0
  }
}, AM = {
  ...QE,
  ...SM,
  ...cM,
  ...TM
}, EM = /* @__PURE__ */ GE(AM, YE), Ma = EM;
function f0(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (e = 0; e < a; e++) t[e] && (n = f0(t[e])) && (i && (i += " "), i += n);
  } else for (n in t) t[n] && (i && (i += " "), i += n);
  return i;
}
function MM() {
  for (var t, e, n = 0, i = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = f0(t)) && (i && (i += " "), i += e);
  return i;
}
const DM = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let i = 0; i < t.length; i++)
    n[i] = t[i];
  for (let i = 0; i < e.length; i++)
    n[t.length + i] = e[i];
  return n;
}, wM = (t, e) => ({
  classGroupId: t,
  validator: e
}), d0 = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), uo = "-", Mm = [], RM = "arbitrary..", CM = (t) => {
  const e = zM(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return OM(s);
      const o = s.split(uo), r = o[0] === "" && o.length > 1 ? 1 : 0;
      return h0(o, r, e);
    },
    getConflictingClassGroupIds: (s, o) => {
      if (o) {
        const r = i[s], u = n[s];
        return r ? u ? DM(u, r) : r : u || Mm;
      }
      return n[s] || Mm;
    }
  };
}, h0 = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const a = t[e], l = n.nextPart.get(a);
  if (l) {
    const u = h0(t, e + 1, l);
    if (u) return u;
  }
  const s = n.validators;
  if (s === null)
    return;
  const o = e === 0 ? t.join(uo) : t.slice(e).join(uo), r = s.length;
  for (let u = 0; u < r; u++) {
    const c = s[u];
    if (c.validator(o))
      return c.classGroupId;
  }
}, OM = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), i = e.slice(0, n);
  return i ? RM + i : void 0;
})(), zM = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return VM(n, e);
}, VM = (t, e) => {
  const n = d0();
  for (const i in t) {
    const a = t[i];
    zf(a, n, i, e);
  }
  return n;
}, zf = (t, e, n, i) => {
  const a = t.length;
  for (let l = 0; l < a; l++) {
    const s = t[l];
    UM(s, e, n, i);
  }
}, UM = (t, e, n, i) => {
  if (typeof t == "string") {
    _M(t, e, n);
    return;
  }
  if (typeof t == "function") {
    BM(t, e, n, i);
    return;
  }
  NM(t, e, n, i);
}, _M = (t, e, n) => {
  const i = t === "" ? e : m0(e, t);
  i.classGroupId = n;
}, BM = (t, e, n, i) => {
  if (jM(t)) {
    zf(t(i), e, n, i);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(wM(n, t));
}, NM = (t, e, n, i) => {
  const a = Object.entries(t), l = a.length;
  for (let s = 0; s < l; s++) {
    const [o, r] = a[s];
    zf(r, m0(e, o), n, i);
  }
}, m0 = (t, e) => {
  let n = t;
  const i = e.split(uo), a = i.length;
  for (let l = 0; l < a; l++) {
    const s = i[l];
    let o = n.nextPart.get(s);
    o || (o = d0(), n.nextPart.set(s, o)), n = o;
  }
  return n;
}, jM = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, LM = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  const a = (l, s) => {
    n[l] = s, e++, e > t && (e = 0, i = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(l) {
      let s = n[l];
      if (s !== void 0)
        return s;
      if ((s = i[l]) !== void 0)
        return a(l, s), s;
    },
    set(l, s) {
      l in n ? n[l] = s : a(l, s);
    }
  };
}, Iu = "!", Dm = ":", HM = [], wm = (t, e, n, i, a) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: i,
  isExternal: a
}), kM = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: n
  } = t;
  let i = (a) => {
    const l = [];
    let s = 0, o = 0, r = 0, u;
    const c = a.length;
    for (let x = 0; x < c; x++) {
      const S = a[x];
      if (s === 0 && o === 0) {
        if (S === Dm) {
          l.push(a.slice(r, x)), r = x + 1;
          continue;
        }
        if (S === "/") {
          u = x;
          continue;
        }
      }
      S === "[" ? s++ : S === "]" ? s-- : S === "(" ? o++ : S === ")" && o--;
    }
    const d = l.length === 0 ? a : a.slice(r);
    let f = d, h = !1;
    d.endsWith(Iu) ? (f = d.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      d.startsWith(Iu) && (f = d.slice(1), h = !0)
    );
    const v = u && u > r ? u - r : void 0;
    return wm(l, h, f, v);
  };
  if (e) {
    const a = e + Dm, l = i;
    i = (s) => s.startsWith(a) ? l(s.slice(a.length)) : wm(HM, !1, s, void 0, !0);
  }
  if (n) {
    const a = i;
    i = (l) => n({
      className: l,
      parseClassName: a
    });
  }
  return i;
}, GM = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((n, i) => {
    e.set(n, 1e6 + i);
  }), (n) => {
    const i = [];
    let a = [];
    for (let l = 0; l < n.length; l++) {
      const s = n[l], o = s[0] === "[", r = e.has(s);
      o || r ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(s)) : a.push(s);
    }
    return a.length > 0 && (a.sort(), i.push(...a)), i;
  };
}, YM = (t) => ({
  cache: LM(t.cacheSize),
  parseClassName: kM(t),
  sortModifiers: GM(t),
  postfixLookupClassGroupIds: qM(t),
  ...CM(t)
}), qM = (t) => {
  const e = /* @__PURE__ */ Object.create(null), n = t.postfixLookupClassGroups;
  if (n)
    for (let i = 0; i < n.length; i++)
      e[n[i]] = !0;
  return e;
}, XM = /\s+/, ZM = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: i,
    getConflictingClassGroupIds: a,
    sortModifiers: l,
    postfixLookupClassGroupIds: s
  } = e, o = [], r = t.trim().split(XM);
  let u = "";
  for (let c = r.length - 1; c >= 0; c -= 1) {
    const d = r[c], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: S
    } = n(d);
    if (f) {
      u = d + (u.length > 0 ? " " + u : u);
      continue;
    }
    let p = !!S, m;
    if (p) {
      const A = x.substring(0, S);
      m = i(A);
      const b = m && s[m] ? i(x) : void 0;
      b && b !== m && (m = b, p = !1);
    } else
      m = i(x);
    if (!m) {
      if (!p) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (m = i(x), !m) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      p = !1;
    }
    const g = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), y = v ? g + Iu : g, T = y + m;
    if (o.indexOf(T) > -1)
      continue;
    o.push(T);
    const M = a(m, p);
    for (let A = 0; A < M.length; ++A) {
      const b = M[A];
      o.push(y + b);
    }
    u = d + (u.length > 0 ? " " + u : u);
  }
  return u;
}, QM = (...t) => {
  let e = 0, n, i, a = "";
  for (; e < t.length; )
    (n = t[e++]) && (i = p0(n)) && (a && (a += " "), a += i);
  return a;
}, p0 = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (e = p0(t[i])) && (n && (n += " "), n += e);
  return n;
}, KM = (t, ...e) => {
  let n, i, a, l;
  const s = (r) => {
    const u = e.reduce((c, d) => d(c), t());
    return n = YM(u), i = n.cache.get, a = n.cache.set, l = o, o(r);
  }, o = (r) => {
    const u = i(r);
    if (u)
      return u;
    const c = ZM(r, n);
    return a(r, c), c;
  };
  return l = s, (...r) => l(QM(...r));
}, PM = [], vt = (t) => {
  const e = (n) => n[t] || PM;
  return e.isThemeGetter = !0, e.themeKey = t, e;
}, g0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, y0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, JM = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, FM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, WM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $M = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, IM = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, t2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, an = (t) => JM.test(t), H = (t) => !!t && !Number.isNaN(Number(t)), Ee = (t) => !!t && Number.isInteger(Number(t)), Vr = (t) => t.endsWith("%") && H(t.slice(0, -1)), ke = (t) => FM.test(t), v0 = () => !0, e2 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  WM.test(t) && !$M.test(t)
), Vf = () => !1, n2 = (t) => IM.test(t), i2 = (t) => t2.test(t), a2 = (t) => !z(t) && !V(t), l2 = (t) => t.startsWith("@container") && (t[10] === "/" && t[11] !== void 0 || t[11] === "s" && t[16] !== void 0 && t.startsWith("-size/", 10) || t[11] === "n" && t[18] !== void 0 && t.startsWith("-normal/", 10)), s2 = (t) => Nn(t, S0, Vf), z = (t) => g0.test(t), Hn = (t) => Nn(t, T0, e2), Rm = (t) => Nn(t, m2, H), o2 = (t) => Nn(t, E0, v0), r2 = (t) => Nn(t, A0, Vf), Cm = (t) => Nn(t, b0, Vf), u2 = (t) => Nn(t, x0, i2), ts = (t) => Nn(t, M0, n2), V = (t) => y0.test(t), ba = (t) => ui(t, T0), c2 = (t) => ui(t, A0), Om = (t) => ui(t, b0), f2 = (t) => ui(t, S0), d2 = (t) => ui(t, x0), es = (t) => ui(t, M0, !0), h2 = (t) => ui(t, E0, !0), Nn = (t, e, n) => {
  const i = g0.exec(t);
  return i ? i[1] ? e(i[1]) : n(i[2]) : !1;
}, ui = (t, e, n = !1) => {
  const i = y0.exec(t);
  return i ? i[1] ? e(i[1]) : n : !1;
}, b0 = (t) => t === "position" || t === "percentage", x0 = (t) => t === "image" || t === "url", S0 = (t) => t === "length" || t === "size" || t === "bg-size", T0 = (t) => t === "length", m2 = (t) => t === "number", A0 = (t) => t === "family-name", E0 = (t) => t === "number" || t === "weight", M0 = (t) => t === "shadow", p2 = () => {
  const t = vt("color"), e = vt("font"), n = vt("text"), i = vt("font-weight"), a = vt("tracking"), l = vt("leading"), s = vt("breakpoint"), o = vt("container"), r = vt("spacing"), u = vt("radius"), c = vt("shadow"), d = vt("inset-shadow"), f = vt("text-shadow"), h = vt("drop-shadow"), v = vt("blur"), x = vt("perspective"), S = vt("aspect"), p = vt("ease"), m = vt("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], T = () => [...y(), V, z], M = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], b = () => [V, z, r], O = () => [an, "full", "auto", ...b()], D = () => [Ee, "none", "subgrid", V, z], j = () => ["auto", {
    span: ["full", Ee, V, z]
  }, Ee, V, z], Q = () => [Ee, "auto", V, z], Nt = () => ["auto", "min", "max", "fr", V, z], Ut = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ht = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...b()], N = () => [an, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], _ = () => [o, an, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...b()], Y = () => [an, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...b()], C = () => [t, V, z], qt = () => [...y(), Om, Cm, {
    position: [V, z]
  }], Ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ci = () => ["auto", "cover", "contain", f2, s2, {
    size: [V, z]
  }], ge = () => [Vr, ba, Hn], mt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    V,
    z
  ], jt = () => ["", H, ba, Hn], Ol = () => ["solid", "dashed", "dotted", "double"], Uf = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], At = () => [H, Vr, Om, Cm], _f = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    V,
    z
  ], zl = () => ["none", H, V, z], Vl = () => ["none", H, V, z], _o = () => [H, V, z], Ul = () => [an, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ke],
      breakpoint: [ke],
      color: [v0],
      container: [ke],
      "drop-shadow": [ke],
      ease: ["in", "out", "in-out"],
      font: [a2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ke],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ke],
      shadow: [ke],
      spacing: ["px", H],
      text: [ke],
      "text-shadow": [ke],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", an, z, V, S]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", V, z]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [l2],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [H, "auto", z, V, o]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": g()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": g()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: T()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: O()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": O(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: O()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": O(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: O()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": O()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ee, "auto", V, z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [an, "full", "auto", o, ...b()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [H, an, "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", H, V, z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", H, V, z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ee, "first", "last", "none", V, z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Nt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Nt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Ut(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ht(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ht()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ut()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ht(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ht(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Ut()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ht(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ht()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: b()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: R()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: R()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": b()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: N()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ..._()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ..._()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ..._()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...Y()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...Y()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...Y()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [o, "screen", ...N()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          o,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...N()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          o,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...N()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...N()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...N()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...N()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ba, Hn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [i, h2, o2]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Vr, z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [c2, r2, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [z]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [a, V, z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [H, "none", V, Rm]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V, z]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", V, z]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ol(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [H, "from-font", "auto", V, Hn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [H, "auto", V, z]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: b()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Ee, V, z]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, z]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", V, z]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: qt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ne()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ci()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ee, V, z],
          radial: ["", V, z],
          conic: ["", Ee, V, z]
        }, d2, u2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ge()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ge()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ge()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: mt()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": mt()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": mt()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": mt()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": mt()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": mt()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": mt()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": mt()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": mt()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": mt()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": mt()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": mt()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": mt()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": mt()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": mt()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: jt()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": jt()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": jt()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": jt()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": jt()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": jt()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": jt()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": jt()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": jt()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": jt()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": jt()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": jt()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": jt()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ol(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ol(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": C()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ol(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [H, V, z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", H, ba, Hn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          // Deprecated since Tailwind CSS v4.0.0
          "inner",
          "none",
          c,
          es,
          ts
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, es, ts]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: jt()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [H, Hn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": jt()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, es, ts]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [H, V, z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Uf(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Uf()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [H]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": At()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": At()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": At()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": At()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": At()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": At()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": At()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": At()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": At()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": At()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": At()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": At()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": At()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": At()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [V, z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": At()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": At()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [H]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": At()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": At()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: qt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ne()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ci()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", V, z]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          V,
          z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: _f()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [H, V, z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [H, V, z]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          es,
          ts
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", H, V, z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [H, V, z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", H, V, z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [H, V, z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", H, V, z]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          V,
          z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": _f()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [H, V, z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [H, V, z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", H, V, z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [H, V, z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", H, V, z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [H, V, z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [H, V, z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", H, V, z]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, z]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [H, "initial", V, z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", p, V, z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [H, V, z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", m, V, z]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [x, V, z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": T()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: zl()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": zl()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": zl()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": zl()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Vl()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Vl()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Vl()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Vl()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: _o()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": _o()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": _o()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [V, z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: T()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ul()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ul()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ul()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ul()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Ee, V, z]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, z]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": C()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": C()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": b()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": b()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": b()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", V, z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [H, ba, Hn, Rm]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["start", "end", "right", "left"],
      "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["ps", "pe", "pr", "pl"],
      py: ["pbs", "pbe", "pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["ms", "me", "mr", "ml"],
      my: ["mbs", "mbe", "mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
      "border-w-y": ["border-w-bs", "border-w-be", "border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-s", "border-color-e", "border-color-r", "border-color-l"],
      "border-color-y": ["border-color-bs", "border-color-be", "border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, g2 = /* @__PURE__ */ KM(p2);
function tc(...t) {
  return g2(MM(t));
}
const D0 = un.forwardRef(({ subscribeStatus: t, onClick: e, className: n, children: i, ...a }, l) => {
  const s = t !== void 0, [o, r] = w.useState(
    t ?? !1
  );
  if (w.useEffect(() => {
    s && r(t);
  }, [t, s]), un.Children.count(i) !== 2 || !un.Children.toArray(i).every(
    (f) => un.isValidElement(f) && f.type === "span"
  ))
    throw new Error(
      "AnimatedSubscribeButton expects two children, both of which must be <span> elements."
    );
  const u = un.Children.toArray(i), c = u[0], d = u[1];
  return /* @__PURE__ */ k.jsx(gE, { mode: "wait", children: o ? /* @__PURE__ */ k.jsx(
    Ma.button,
    {
      ref: l,
      className: tc(
        "bg-primary text-primary-foreground relative flex h-10 w-fit items-center justify-center overflow-hidden rounded-lg px-6",
        n
      ),
      onClick: (f) => {
        s || r(!1), e == null || e(f);
      },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      ...a,
      children: /* @__PURE__ */ k.jsxs(
        Ma.span,
        {
          className: "relative flex h-full w-full items-center justify-center font-semibold",
          initial: { y: -50 },
          animate: { y: 0 },
          children: [
            d,
            " "
          ]
        },
        "action"
      )
    }
  ) : /* @__PURE__ */ k.jsx(
    Ma.button,
    {
      ref: l,
      className: tc(
        "bg-primary text-primary-foreground relative flex h-10 w-fit cursor-pointer items-center justify-center rounded-lg border-none px-6",
        n
      ),
      onClick: (f) => {
        s || r(!0), e == null || e(f);
      },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      ...a,
      children: /* @__PURE__ */ k.jsxs(
        Ma.span,
        {
          className: "relative flex items-center justify-center font-semibold",
          initial: { x: 0 },
          exit: { x: 50, transition: { duration: 0.1 } },
          children: [
            c,
            " "
          ]
        },
        "reaction"
      )
    }
  ) });
});
D0.displayName = "AnimatedSubscribeButton";
function y2({
  width: t = 40,
  height: e = 40,
  x: n = -1,
  y: i = -1,
  strokeDasharray: a = 0,
  numSquares: l = 50,
  className: s,
  maxOpacity: o = 0.5,
  duration: r = 4,
  repeatDelay: u = 0.5,
  ...c
}) {
  const d = w.useId(), f = w.useRef(null), [h, v] = w.useState({ width: 0, height: 0 }), [x, S] = w.useState([]), p = w.useCallback(() => [
    Math.floor(Math.random() * h.width / t),
    Math.floor(Math.random() * h.height / e)
  ], [h.height, h.width, e, t]), m = w.useCallback(
    (y) => Array.from({ length: y }, (T, M) => ({
      id: M,
      pos: p(),
      iteration: 0
    })),
    [p]
  ), g = w.useCallback(
    (y) => {
      S((T) => {
        const M = T[y];
        if (!M || M.id !== y) return T;
        const A = T.slice();
        return A[y] = {
          ...M,
          pos: p(),
          iteration: M.iteration + 1
        }, A;
      });
    },
    [p]
  );
  return w.useEffect(() => {
    h.width && h.height && S(m(l));
  }, [h.width, h.height, m, l]), w.useEffect(() => {
    const y = f.current;
    let T = null;
    return y && (T = new ResizeObserver((M) => {
      for (const A of M)
        v((b) => {
          const O = A.contentRect.width, D = A.contentRect.height;
          return b.width === O && b.height === D ? b : { width: O, height: D };
        });
    }), T.observe(y)), () => {
      T && T.disconnect();
    };
  }, []), /* @__PURE__ */ k.jsxs(
    "svg",
    {
      ref: f,
      "aria-hidden": "true",
      className: tc(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        s
      ),
      ...c,
      children: [
        /* @__PURE__ */ k.jsx("defs", { children: /* @__PURE__ */ k.jsx(
          "pattern",
          {
            id: d,
            width: t,
            height: e,
            patternUnits: "userSpaceOnUse",
            x: n,
            y: i,
            children: /* @__PURE__ */ k.jsx(
              "path",
              {
                d: `M.5 ${e}V.5H${t}`,
                fill: "none",
                strokeDasharray: a
              }
            )
          }
        ) }),
        /* @__PURE__ */ k.jsx("rect", { width: "100%", height: "100%", fill: `url(#${d})` }),
        /* @__PURE__ */ k.jsx("svg", { x: n, y: i, className: "overflow-visible", children: x.map(({ pos: [y, T], id: M, iteration: A }, b) => /* @__PURE__ */ k.jsx(
          Ma.rect,
          {
            initial: { opacity: 0 },
            animate: { opacity: o },
            transition: {
              duration: r,
              repeat: 1,
              delay: b * 0.1,
              repeatType: "reverse",
              repeatDelay: u
            },
            onAnimationComplete: () => g(M),
            width: t - 1,
            height: e - 1,
            x: y * t + 1,
            y: T * e + 1,
            fill: "currentColor",
            strokeWidth: "0"
          },
          `${M}-${A}`
        )) })
      ]
    }
  );
}
function v2() {
  const t = w.useRef(null), [e, n] = w.useState(null), [i, a] = w.useState(null), l = (s) => {
    const o = t.current.getBoundingClientRect();
    return { x: Math.floor((s.clientX - o.left) / 40) * 40, y: Math.floor((s.clientY - o.top) / 40) * 40 };
  };
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      ref: t,
      className: "interactive-animated-grid",
      tabIndex: 0,
      role: "img",
      "aria-label": "Сетка: двигай курсор и нажимай на ячейки",
      onPointerMove: (s) => n(l(s)),
      onPointerLeave: () => n(null),
      onPointerDown: (s) => {
        const o = l(s);
        n(o), a({ ...o, id: performance.now() });
      },
      onKeyDown: (s) => {
        if (s.key === "Enter" || s.key === " ") {
          s.preventDefault();
          const o = t.current.getBoundingClientRect(), r = { x: Math.floor(o.width / 80) * 40, y: Math.floor(o.height / 80) * 40 };
          n(r), a({ ...r, id: performance.now() });
        }
      },
      children: [
        /* @__PURE__ */ k.jsx(y2, { width: 40, height: 40, numSquares: 20, maxOpacity: 0.18, duration: 3 }),
        /* @__PURE__ */ k.jsxs("svg", { className: "interactive-grid-feedback", width: "100%", height: "100%", "aria-hidden": "true", children: [
          e && /* @__PURE__ */ k.jsx("rect", { "data-hover-cell": "true", x: e.x + 1, y: e.y + 1, width: 38, height: 38, rx: 3, fill: "#e75331", fillOpacity: ".55", stroke: "#ffb59f" }),
          i && /* @__PURE__ */ k.jsx("rect", { "data-click-cell": "true", className: "grid-click-pulse", x: i.x + 1, y: i.y + 1, width: 38, height: 38, rx: 3, fill: "none", stroke: "#ffd8cd", strokeWidth: "2" }, i.id)
        ] })
      ]
    }
  );
}
const b2 = /* @__PURE__ */ Object.assign({ "./official/registry/example/android-demo-2.tsx": () => import("./android-demo-2-xyDe5-VA.js"), "./official/registry/example/android-demo-3.tsx": () => import("./android-demo-3-YfvW8cza.js"), "./official/registry/example/android-demo.tsx": () => import("./android-demo-fCkyUkN3.js"), "./official/registry/example/animated-beam-bidirectional.tsx": () => import("./animated-beam-bidirectional-CMVLDV2q.js"), "./official/registry/example/animated-beam-demo.tsx": () => import("./animated-beam-demo-D2UT8R9o.js"), "./official/registry/example/animated-beam-multiple-inputs.tsx": () => import("./animated-beam-multiple-inputs-HrCOS3Av.js"), "./official/registry/example/animated-beam-multiple-outputs.tsx": () => import("./animated-beam-multiple-outputs-Rxaz23hi.js"), "./official/registry/example/animated-beam-unidirectional.tsx": () => import("./animated-beam-unidirectional-t4AubSYC.js"), "./official/registry/example/animated-circular-progress-bar-demo.tsx": () => import("./animated-circular-progress-bar-demo-DbpAw_1h.js"), "./official/registry/example/animated-gradient-text-demo-2.tsx": () => import("./animated-gradient-text-demo-2-Cwc4OdgT.js"), "./official/registry/example/animated-gradient-text-demo.tsx": () => import("./animated-gradient-text-demo-BVLaaKXf.js"), "./official/registry/example/animated-grid-pattern-demo.tsx": () => import("./animated-grid-pattern-demo-r4fp76zJ.js"), "./official/registry/example/animated-list-demo.tsx": () => import("./animated-list-demo-BSmUZKx9.js"), "./official/registry/example/animated-shiny-text-demo.tsx": () => import("./animated-shiny-text-demo-DRXISQ5C.js"), "./official/registry/example/animated-theme-toggler-demo.tsx": () => import("./animated-theme-toggler-demo-DxLYbf-Z.js"), "./official/registry/example/animated-theme-toggler-diamond-demo.tsx": () => import("./animated-theme-toggler-diamond-demo-C8b7Y14S.js"), "./official/registry/example/animated-theme-toggler-hexagon-demo.tsx": () => import("./animated-theme-toggler-hexagon-demo-D00Q2s1i.js"), "./official/registry/example/animated-theme-toggler-next-themes-demo.tsx": () => import("./animated-theme-toggler-next-themes-demo-DVeCj47c.js"), "./official/registry/example/animated-theme-toggler-rectangle-demo.tsx": () => import("./animated-theme-toggler-rectangle-demo-Cmn3wttz.js"), "./official/registry/example/animated-theme-toggler-square-demo.tsx": () => import("./animated-theme-toggler-square-demo-D4I02TG8.js"), "./official/registry/example/animated-theme-toggler-star-demo.tsx": () => import("./animated-theme-toggler-star-demo-3AqHVwIO.js"), "./official/registry/example/animated-theme-toggler-triangle-demo.tsx": () => import("./animated-theme-toggler-triangle-demo-B_gUEcSm.js"), "./official/registry/example/aurora-text-demo.tsx": () => import("./aurora-text-demo-BEx82qsF.js"), "./official/registry/example/avatar-circles-demo.tsx": () => import("./avatar-circles-demo-CKpCMqKW.js"), "./official/registry/example/backlight-image-demo.tsx": () => import("./backlight-image-demo-btX0x_8u.js"), "./official/registry/example/backlight-svg-demo.tsx": () => import("./backlight-svg-demo-SeErgMYv.js"), "./official/registry/example/backlight-video-demo.tsx": () => import("./backlight-video-demo-JfIy_H8t.js"), "./official/registry/example/bento-demo-vertical.tsx": () => import("./bento-demo-vertical-BIg-mqrk.js"), "./official/registry/example/bento-demo.tsx": () => import("./bento-demo-jLwlECWb.js"), "./official/registry/example/blur-fade-demo.tsx": () => import("./blur-fade-demo-VtR6h9Pu.js"), "./official/registry/example/blur-fade-text-demo.tsx": () => import("./blur-fade-text-demo-DtEeHvP1.js"), "./official/registry/example/border-beam-demo-2.tsx": () => import("./border-beam-demo-2-BC8112Bb.js"), "./official/registry/example/border-beam-demo-3.tsx": () => import("./border-beam-demo-3-Hwj4n2bs.js"), "./official/registry/example/border-beam-demo-4.tsx": () => import("./border-beam-demo-4-hZTEuzu4.js"), "./official/registry/example/border-beam-demo.tsx": () => import("./border-beam-demo-DupWxxxQ.js"), "./official/registry/example/code-comparison-demo.tsx": () => import("./code-comparison-demo-Ct7dtFNw.js").then((t) => t.c), "./official/registry/example/comic-text-demo.tsx": () => import("./comic-text-demo-BZi9ht7a.js"), "./official/registry/example/confetti-basic-cannon.tsx": () => import("./confetti-basic-cannon-BbKhGVvY.js"), "./official/registry/example/confetti-custom-shapes.tsx": () => import("./confetti-custom-shapes-B89Zvm7C.js"), "./official/registry/example/confetti-demo.tsx": () => import("./confetti-demo-COFtrZOY.js"), "./official/registry/example/confetti-emoji.tsx": () => import("./confetti-emoji-LTljNPQK.js"), "./official/registry/example/confetti-fireworks.tsx": () => import("./confetti-fireworks-B-Dh3MQv.js"), "./official/registry/example/confetti-random-direction.tsx": () => import("./confetti-random-direction-Dz1VxEq6.js"), "./official/registry/example/confetti-side-cannons.tsx": () => import("./confetti-side-cannons-DuU3Kw92.js"), "./official/registry/example/confetti-stars.tsx": () => import("./confetti-stars-DGAxiWVg.js"), "./official/registry/example/cool-mode-custom.tsx": () => import("./cool-mode-custom-CaQeBrgH.js"), "./official/registry/example/cool-mode-demo.tsx": () => import("./cool-mode-demo-B6EaqfgK.js"), "./official/registry/example/dia-text-reveal-demo-2.tsx": () => import("./dia-text-reveal-demo-2-Br1D93Vi.js"), "./official/registry/example/dia-text-reveal-demo-3.tsx": () => import("./dia-text-reveal-demo-3-DxSOd--C.js"), "./official/registry/example/dia-text-reveal-demo-4.tsx": () => import("./dia-text-reveal-demo-4-CzcRedQs.js"), "./official/registry/example/dia-text-reveal-demo.tsx": () => import("./dia-text-reveal-demo-B0M-kdWd.js"), "./official/registry/example/dock-demo-2.tsx": () => import("./dock-demo-2-ln939IFN.js"), "./official/registry/example/dock-demo-3.tsx": () => import("./dock-demo-3-BDhlJBHy.js"), "./official/registry/example/dock-demo.tsx": () => import("./dock-demo-Cx_mE-YG.js"), "./official/registry/example/dot-pattern-demo.tsx": () => import("./dot-pattern-demo-DUji9jyq.js"), "./official/registry/example/dot-pattern-linear-gradient.tsx": () => import("./dot-pattern-linear-gradient-1j8SE-j-.js"), "./official/registry/example/dot-pattern-with-glow-effect.tsx": () => import("./dot-pattern-with-glow-effect-D54s-qFc.js"), "./official/registry/example/dotted-map-demo-2.tsx": () => import("./dotted-map-demo-2-DbXFlQve.js"), "./official/registry/example/dotted-map-demo-3.tsx": () => import("./dotted-map-demo-3-B_qINJvG.js"), "./official/registry/example/dotted-map-demo.tsx": () => import("./dotted-map-demo-Cb8aUcuL.js"), "./official/registry/example/file-tree-demo.tsx": () => import("./file-tree-demo-Dq2h5nwk.js"), "./official/registry/example/flickering-grid-demo.tsx": () => import("./flickering-grid-demo-CjoXFDDS.js"), "./official/registry/example/flickering-grid-rounded-demo.tsx": () => import("./flickering-grid-rounded-demo-CNDTQLhQ.js"), "./official/registry/example/floating-3d-particles-demo-2.tsx": () => import("./floating-3d-particles-demo-2-vTRnWyS0.js"), "./official/registry/example/floating-3d-particles-demo.tsx": () => import("./floating-3d-particles-demo-Crt2fAjl.js"), "./official/registry/example/glare-hover-demo-alert.tsx": () => import("./glare-hover-demo-alert-DFmeTx_S.js"), "./official/registry/example/glare-hover-demo-cta.tsx": () => import("./glare-hover-demo-cta-C2qqFEgn.js"), "./official/registry/example/glare-hover-demo.tsx": () => import("./glare-hover-demo-Rbx9R4OP.js"), "./official/registry/example/globe-demo.tsx": () => import("./globe-demo-DM50Zrmx.js"), "./official/registry/example/glyph-matrix-demo.tsx": () => import("./glyph-matrix-demo-BwNRLRfz.js"), "./official/registry/example/grid-pattern-dashed.tsx": () => import("./grid-pattern-dashed-B6hp1Y05.js"), "./official/registry/example/grid-pattern-demo.tsx": () => import("./grid-pattern-demo-CPCkkYt3.js"), "./official/registry/example/grid-pattern-linear-gradient.tsx": () => import("./grid-pattern-linear-gradient-cQeEcIkq.js"), "./official/registry/example/hero-video-dialog-demo-top-in-bottom-out.tsx": () => import("./hero-video-dialog-demo-top-in-bottom-out-D4b7fiyJ.js"), "./official/registry/example/hero-video-dialog-demo.tsx": () => import("./hero-video-dialog-demo-Dne6JmxP.js"), "./official/registry/example/hexagon-pattern-dashed.tsx": () => import("./hexagon-pattern-dashed-D1X1-Fjw.js"), "./official/registry/example/hexagon-pattern-demo.tsx": () => import("./hexagon-pattern-demo-CtzEdGGU.js"), "./official/registry/example/hexagon-pattern-linear-gradient.tsx": () => import("./hexagon-pattern-linear-gradient-CRQs7TcE.js"), "./official/registry/example/hexagon-pattern-spacing.tsx": () => import("./hexagon-pattern-spacing-BGg-6ma0.js"), "./official/registry/example/highlighter-demo.tsx": () => import("./highlighter-demo-DWRlRQ9j.js"), "./official/registry/example/hyper-text-demo.tsx": () => import("./hyper-text-demo-DZCpgUIj.js"), "./official/registry/example/icon-cloud-demo-2.tsx": () => import("./icon-cloud-demo-2-TasJ7Ve3.js"), "./official/registry/example/icon-cloud-demo-3.tsx": () => import("./icon-cloud-demo-3-DEd5e6qb.js"), "./official/registry/example/icon-cloud-demo.tsx": () => import("./icon-cloud-demo-CMtB2bsG.js"), "./official/registry/example/interactive-grid-pattern-demo-2.tsx": () => import("./interactive-grid-pattern-demo-2--Qg36isL.js"), "./official/registry/example/interactive-grid-pattern-demo.tsx": () => import("./interactive-grid-pattern-demo-C_Ogpi8b.js"), "./official/registry/example/interactive-hover-button-demo.tsx": () => import("./interactive-hover-button-demo-BlV1bllK.js"), "./official/registry/example/iphone-demo-2.tsx": () => import("./iphone-demo-2-VGeVY2t1.js"), "./official/registry/example/iphone-demo-3.tsx": () => import("./iphone-demo-3-BkX0J-Gw.js"), "./official/registry/example/iphone-demo.tsx": () => import("./iphone-demo-A_u39pbq.js"), "./official/registry/example/kinetic-text-demo.tsx": () => import("./kinetic-text-demo-BHV0asLr.js"), "./official/registry/example/lens-demo-2.tsx": () => import("./lens-demo-2-DdmzKPM0.js"), "./official/registry/example/lens-demo-3.tsx": () => import("./lens-demo-3-Dpio8nMo.js"), "./official/registry/example/lens-demo.tsx": () => import("./lens-demo-DALTI0oN.js"), "./official/registry/example/light-rays-demo.tsx": () => import("./light-rays-demo-BWbqdVCN.js"), "./official/registry/example/line-shadow-text-demo.tsx": () => import("./line-shadow-text-demo-DQygC9cp.js"), "./official/registry/example/magic-card-demo.tsx": () => import("./magic-card-demo-DZzL8WWd.js"), "./official/registry/example/magic-card-demo2.tsx": () => import("./magic-card-demo2-DElci_I4.js"), "./official/registry/example/marquee-3d.tsx": () => import("./marquee-3d-Df6uJqXb.js"), "./official/registry/example/marquee-demo-vertical.tsx": () => import("./marquee-demo-vertical-Bri3WkzM.js"), "./official/registry/example/marquee-demo.tsx": () => import("./marquee-demo-BMQwkyJ2.js"), "./official/registry/example/marquee-logos.tsx": () => import("./marquee-logos-DmEYKuhj.js"), "./official/registry/example/meteors-demo.tsx": () => import("./meteors-demo-DqMD9nXH.js"), "./official/registry/example/morphing-text-demo.tsx": () => import("./morphing-text-demo-DHZL4gM7.js"), "./official/registry/example/neon-gradient-card-demo.tsx": () => import("./neon-gradient-card-demo-BYQ-0l04.js"), "./official/registry/example/noise-texture-demo-2.tsx": () => import("./noise-texture-demo-2-c0P-y5-I.js"), "./official/registry/example/noise-texture-demo-3.tsx": () => import("./noise-texture-demo-3-DL-H9xX8.js"), "./official/registry/example/noise-texture-demo-4.tsx": () => import("./noise-texture-demo-4-DevHsLtf.js"), "./official/registry/example/noise-texture-demo.tsx": () => import("./noise-texture-demo-DpPyyXHo.js"), "./official/registry/example/number-ticker-decimal-demo.tsx": () => import("./number-ticker-decimal-demo-D30iODeL.js"), "./official/registry/example/number-ticker-demo-2.tsx": () => import("./number-ticker-demo-2-ipGDMIn1.js"), "./official/registry/example/number-ticker-demo.tsx": () => import("./number-ticker-demo-4W4pNcLg.js"), "./official/registry/example/orbiting-circles-demo.tsx": () => import("./orbiting-circles-demo-Dji52rXo.js"), "./official/registry/example/particles-demo.tsx": () => import("./particles-demo-BhlftUmO.js"), "./official/registry/example/pixel-image-demo.tsx": () => import("./pixel-image-demo-DszI4tLl.js"), "./official/registry/example/pointer-demo-1.tsx": () => import("./pointer-demo-1-Cn7UX2j1.js"), "./official/registry/example/progressive-blur-demo.tsx": () => import("./progressive-blur-demo-Cwa7Krft.js"), "./official/registry/example/pulsating-button-demo-2.tsx": () => import("./pulsating-button-demo-2-CqkSLGZT.js"), "./official/registry/example/pulsating-button-demo.tsx": () => import("./pulsating-button-demo-B_teC2TG.js"), "./official/registry/example/rainbow-button-demo-2.tsx": () => import("./rainbow-button-demo-2-DK4ErmOr.js"), "./official/registry/example/rainbow-button-demo.tsx": () => import("./rainbow-button-demo-BhYGiZqz.js"), "./official/registry/example/retro-grid-demo.tsx": () => import("./retro-grid-demo-PqSnEeCS.js"), "./official/registry/example/ripple-button-demo.tsx": () => import("./ripple-button-demo-CWZ9r4vo.js"), "./official/registry/example/ripple-demo.tsx": () => import("./ripple-demo-Dv1kX_Q5.js"), "./official/registry/example/safari-demo-2.tsx": () => import("./safari-demo-2-WRLhGXTF.js"), "./official/registry/example/safari-demo-3.tsx": () => import("./safari-demo-3-B7cWdrQE.js"), "./official/registry/example/safari-demo-4.tsx": () => import("./safari-demo-4-CZ0P8WOZ.js"), "./official/registry/example/safari-demo.tsx": () => import("./safari-demo-dPEfXE4i.js"), "./official/registry/example/scroll-based-velocity-demo.tsx": () => import("./scroll-based-velocity-demo-DMP7pJVZ.js"), "./official/registry/example/scroll-based-velocity-images-demo.tsx": () => import("./scroll-based-velocity-images-demo-CegrtkZK.js"), "./official/registry/example/scroll-progress-demo.tsx": () => import("./scroll-progress-demo-6-Ce-OKU.js"), "./official/registry/example/shimmer-button-demo.tsx": () => import("./shimmer-button-demo-DlEKrrAN.js"), "./official/registry/example/shine-border-demo-2.tsx": () => import("./shine-border-demo-2-9Wy2o8ds.js"), "./official/registry/example/shine-border-demo.tsx": () => import("./shine-border-demo-CeW2bBdw.js"), "./official/registry/example/shiny-button-demo.tsx": () => import("./shiny-button-demo-BfdjU9l6.js"), "./official/registry/example/smooth-cursor-demo.tsx": () => import("./smooth-cursor-demo-PIYzpwiX.js"), "./official/registry/example/sparkles-text-demo.tsx": () => import("./sparkles-text-demo-kFq1Rvod.js"), "./official/registry/example/spinning-text-demo-2.tsx": () => import("./spinning-text-demo-2-af2acMM3.js"), "./official/registry/example/spinning-text-demo.tsx": () => import("./spinning-text-demo-DEe4YPNB.js"), "./official/registry/example/striped-pattern-dashed.tsx": () => import("./striped-pattern-dashed-Bz7ViFyH.js"), "./official/registry/example/striped-pattern-demo.tsx": () => import("./striped-pattern-demo-7VJSU0SC.js"), "./official/registry/example/striped-pattern-right.tsx": () => import("./striped-pattern-right-BOGyMNcA.js"), "./official/registry/example/terminal-demo-2.tsx": () => import("./terminal-demo-2-VrVUv8wL.js"), "./official/registry/example/terminal-demo.tsx": () => import("./terminal-demo-C68ea-lU.js"), "./official/registry/example/text-3d-flip-demo-2.tsx": () => import("./text-3d-flip-demo-2-aW5CbE_r.js"), "./official/registry/example/text-3d-flip-demo.tsx": () => import("./text-3d-flip-demo-SvBcU2aH.js"), "./official/registry/example/text-animate-demo-2.tsx": () => import("./text-animate-demo-2-BeGNFzaG.js"), "./official/registry/example/text-animate-demo-3.tsx": () => import("./text-animate-demo-3-CPRhj-Nc.js"), "./official/registry/example/text-animate-demo-4.tsx": () => import("./text-animate-demo-4-BcxPFovt.js"), "./official/registry/example/text-animate-demo-5.tsx": () => import("./text-animate-demo-5-BGY_43QM.js"), "./official/registry/example/text-animate-demo-6.tsx": () => import("./text-animate-demo-6-CA5mDxs3.js"), "./official/registry/example/text-animate-demo-7.tsx": () => import("./text-animate-demo-7-DI0YLMUy.js"), "./official/registry/example/text-animate-demo-8.tsx": () => import("./text-animate-demo-8-CMYRQs9d.js"), "./official/registry/example/text-animate-demo-9.tsx": () => import("./text-animate-demo-9-DPHt8qm4.js"), "./official/registry/example/text-animate-demo.tsx": () => import("./text-animate-demo-BmaCXj4H.js"), "./official/registry/example/text-reveal-demo.tsx": () => import("./text-reveal-demo-VQUAXKBC.js"), "./official/registry/example/tweet-card-demo.tsx": () => import("./tweet-card-demo-BufVgLga.js"), "./official/registry/example/tweet-card-images.tsx": () => import("./tweet-card-images-B7DweH8z.js"), "./official/registry/example/tweet-card-meta-preview.tsx": () => import("./tweet-card-meta-preview-BQbu1Zb8.js"), "./official/registry/example/typing-animation-demo-2.tsx": () => import("./typing-animation-demo-2-BoOKNQyi.js"), "./official/registry/example/typing-animation-demo-3.tsx": () => import("./typing-animation-demo-3-BEr0kJAP.js"), "./official/registry/example/typing-animation-demo-4.tsx": () => import("./typing-animation-demo-4-CFEBFUpg.js"), "./official/registry/example/typing-animation-demo-5.tsx": () => import("./typing-animation-demo-5-DeYbqB8J.js"), "./official/registry/example/typing-animation-demo-6.tsx": () => import("./typing-animation-demo-6-DXfWDIu0.js"), "./official/registry/example/typing-animation-demo-7.tsx": () => import("./typing-animation-demo-7-BNOBaFma.js"), "./official/registry/example/typing-animation-demo-8.tsx": () => import("./typing-animation-demo-8-BvM82NYs.js"), "./official/registry/example/typing-animation-demo.tsx": () => import("./typing-animation-demo-DRl9bbYI.js"), "./official/registry/example/video-text-demo.tsx": () => import("./video-text-demo-BFNfIotw.js"), "./official/registry/example/warp-background-demo.tsx": () => import("./warp-background-demo-nKIRP8TJ.js"), "./official/registry/example/word-rotate-demo.tsx": () => import("./word-rotate-demo-CyrP2K-q.js") });
function x2() {
  return /* @__PURE__ */ k.jsxs(D0, { children: [
    /* @__PURE__ */ k.jsx("span", { children: "Subscribe" }),
    /* @__PURE__ */ k.jsx("span", { children: "Subscribed" })
  ] });
}
class S2 extends un.Component {
  constructor(e) {
    super(e), this.state = { error: null };
  }
  static getDerivedStateFromError(e) {
    return { error: String(e) };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ k.jsx("p", { role: "status", children: "Этот пример требует дополнительной среды." }) : this.props.children;
  }
}
function w2(t, e) {
  const n = b2[`./official/registry/example/${e}.tsx`], i = e === "animated-grid-pattern-demo" ? v2 : e === "legacy-subscribe-demo" ? x2 : n ? un.lazy(n) : null, a = E1.createRoot(t);
  return a.render(/* @__PURE__ */ k.jsx(M1, { children: /* @__PURE__ */ k.jsx(S2, { children: /* @__PURE__ */ k.jsx("main", { className: "native-demo", children: /* @__PURE__ */ k.jsx(w.Suspense, { fallback: /* @__PURE__ */ k.jsx("span", { className: "native-loading", children: "Загрузка…" }), children: i ? /* @__PURE__ */ k.jsx(i, {}) : /* @__PURE__ */ k.jsx("p", { children: "Пример недоступен" }) }) }) }) })), () => a.unmount();
}
export {
  Ch as $,
  y2 as A,
  Af as B,
  KT as C,
  FT as D,
  HA as E,
  yv as F,
  On as G,
  fA as H,
  Ii as I,
  no as J,
  ef as K,
  bS as L,
  Rf as M,
  Th as N,
  nf as O,
  Vn as P,
  et as Q,
  un as R,
  yA as S,
  io as T,
  E2 as U,
  eA as V,
  LS as W,
  Uy as X,
  gs as Y,
  Ue as Z,
  he as _,
  F0 as a,
  Rt as a0,
  Sf as a1,
  M2 as a2,
  w2 as a3,
  gE as b,
  tc as c,
  T2 as d,
  MM as e,
  Tv as f,
  bt as g,
  Rv as h,
  V1 as i,
  k as j,
  IT as k,
  tt as l,
  Ma as m,
  Is as n,
  zt as o,
  Qu as p,
  SS as q,
  w as r,
  cS as s,
  xS as t,
  A2 as u,
  Ny as v,
  ov as w,
  Kt as x,
  Ml as y,
  ll as z
};
