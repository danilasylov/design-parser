import { r as cn, a as wu, j as it } from "./inline-Mcm4wFdg.js";
import { B as Yc } from "./button-V18JMPr7.js";
import { P as Uc } from "./play-CiAPzvnQ.js";
import { c as Gc } from "./createLucideIcon-D9LJhv87.js";
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Zc = Gc("pause", Xc);
var Pr = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tu = cn, Jc = wu;
function P(n) {
  var e = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var l = 2; l < arguments.length; l++)
      e += "&args[]=" + encodeURIComponent(arguments[l]);
  }
  return "Minified React error #" + n + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ru = Symbol.for("react.transitional.element"), xu = Symbol.for("react.portal"), Cu = Symbol.for("react.fragment"), Pu = Symbol.for("react.strict_mode"), ku = Symbol.for("react.profiler"), Qc = Symbol.for("react.provider"), Fu = Symbol.for("react.consumer"), kr = Symbol.for("react.context"), Fa = Symbol.for("react.forward_ref"), Fr = Symbol.for("react.suspense"), Sa = Symbol.for("react.suspense_list"), Ma = Symbol.for("react.memo"), Sr = Symbol.for("react.lazy"), Kc = Symbol.for("react.scope"), Su = Symbol.for("react.activity"), Vc = Symbol.for("react.legacy_hidden"), mc = Symbol.for("react.memo_cache_sentinel"), qc = Symbol.for("react.view_transition"), li = Symbol.iterator, la = Array.isArray;
function ti(n, e) {
  var l = n.length & 3, t = n.length - l, r = e;
  for (e = 0; e < t; ) {
    var a = n.charCodeAt(e) & 255 | (n.charCodeAt(++e) & 255) << 8 | (n.charCodeAt(++e) & 255) << 16 | (n.charCodeAt(++e) & 255) << 24;
    ++e, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, r ^= a, r = r << 13 | r >>> 19, r = 5 * (r & 65535) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
  }
  switch (a = 0, l) {
    case 3:
      a ^= (n.charCodeAt(e + 2) & 255) << 16;
    case 2:
      a ^= (n.charCodeAt(e + 1) & 255) << 8;
    case 1:
      a ^= n.charCodeAt(e) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, r ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
  }
  return r ^= n.length, r ^= r >>> 16, r = 2246822507 * (r & 65535) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (r & 65535) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^ r >>> 16) >>> 0;
}
var Sn = Object.assign, q = Object.prototype.hasOwnProperty, pc = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), ri = {}, ai = {};
function Aa(n) {
  return q.call(ai, n) ? !0 : q.call(ri, n) ? !1 : pc.test(n) ? ai[n] = !0 : (ri[n] = !0, !1);
}
var jc = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), $c = /* @__PURE__ */ new Map([
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
]), nf = /["'&<>]/;
function N(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var e = nf.exec(n);
  if (e) {
    var l = "", t, r = 0;
    for (t = e.index; t < n.length; t++) {
      switch (n.charCodeAt(t)) {
        case 34:
          e = "&quot;";
          break;
        case 38:
          e = "&amp;";
          break;
        case 39:
          e = "&#x27;";
          break;
        case 60:
          e = "&lt;";
          break;
        case 62:
          e = "&gt;";
          break;
        default:
          continue;
      }
      r !== t && (l += n.slice(r, t)), r = t + 1, l += e;
    }
    n = r !== t ? l + n.slice(r, t) : l;
  }
  return n;
}
var ef = /([A-Z])/g, lf = /^ms-/, tf = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function vt(n) {
  return tf.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var vl = Tu.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mu = Jc.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rf = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, _e = Mu.d;
Mu.d = {
  f: _e.f,
  r: _e.r,
  D: Cf,
  C: Pf,
  L: kf,
  m: Ff,
  X: Mf,
  S: Sf,
  M: Af
};
var Jn = [], Au = /(<\/|<)(s)(cript)/gi;
function Ou(n, e, l, t) {
  return "" + e + (l === "s" ? "\\u0073" : "\\u0053") + t;
}
function af(n, e, l, t, r) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: l,
    bootstrapScripts: t,
    bootstrapModules: r,
    instructions: 0,
    hasBody: !1,
    hasHtml: !1,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {}
  };
}
function bt() {
  return {
    htmlChunks: null,
    headChunks: null,
    bodyChunks: null,
    contribution: 0
  };
}
function kn(n, e, l) {
  return {
    insertionMode: n,
    selectedValue: e,
    tagScope: l
  };
}
function ii(n, e, l) {
  switch (e) {
    case "noscript":
      return kn(2, null, n.tagScope | 1);
    case "select":
      return kn(
        2,
        l.value != null ? l.value : l.defaultValue,
        n.tagScope
      );
    case "svg":
      return kn(4, null, n.tagScope);
    case "picture":
      return kn(2, null, n.tagScope | 2);
    case "math":
      return kn(5, null, n.tagScope);
    case "foreignObject":
      return kn(2, null, n.tagScope);
    case "table":
      return kn(6, null, n.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return kn(7, null, n.tagScope);
    case "colgroup":
      return kn(9, null, n.tagScope);
    case "tr":
      return kn(8, null, n.tagScope);
    case "head":
      if (2 > n.insertionMode)
        return kn(3, null, n.tagScope);
      break;
    case "html":
      if (n.insertionMode === 0)
        return kn(1, null, n.tagScope);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? kn(2, null, n.tagScope) : n;
}
var ui = /* @__PURE__ */ new Map();
function Iu(n, e) {
  if (typeof e != "object") throw Error(P(62));
  var l = !0, t;
  for (t in e)
    if (q.call(e, t)) {
      var r = e[t];
      if (r != null && typeof r != "boolean" && r !== "") {
        if (t.indexOf("--") === 0) {
          var a = N(t);
          r = N(("" + r).trim());
        } else
          a = ui.get(t), a === void 0 && (a = N(
            t.replace(ef, "-$1").toLowerCase().replace(lf, "-ms-")
          ), ui.set(t, a)), r = typeof r == "number" ? r === 0 || jc.has(t) ? "" + r : r + "px" : N(("" + r).trim());
        l ? (l = !1, n.push(' style="', a, ":", r)) : n.push(";", a, ":", r);
      }
    }
  l || n.push('"');
}
function ta(n, e, l) {
  l && typeof l != "function" && typeof l != "symbol" && n.push(" ", e, '=""');
}
function sn(n, e, l) {
  typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && n.push(" ", e, '="', N(l), '"');
}
var _u = N(
  "javascript:throw new Error('React form unexpectedly submitted.')"
);
function Yr(n, e) {
  this.push('<input type="hidden"'), Lu(n), sn(this, "name", e), sn(this, "value", n), this.push("/>");
}
function Lu(n) {
  if (typeof n != "string") throw Error(P(480));
}
function Du(n, e) {
  if (typeof e.$$FORM_ACTION == "function") {
    var l = n.nextFormID++;
    n = n.idPrefix + l;
    try {
      var t = e.$$FORM_ACTION(n);
      if (t) {
        var r = t.data;
        r != null && r.forEach(Lu);
      }
      return t;
    } catch (a) {
      if (typeof a == "object" && a !== null && typeof a.then == "function")
        throw a;
    }
  }
  return null;
}
function ci(n, e, l, t, r, a, i, f) {
  var u = null;
  if (typeof t == "function") {
    var c = Du(e, t);
    c !== null ? (f = c.name, t = c.action || "", r = c.encType, a = c.method, i = c.target, u = c.data) : (n.push(" ", "formAction", '="', _u, '"'), i = a = r = t = f = null, Nu(e, l));
  }
  return f != null && U(n, "name", f), t != null && U(n, "formAction", t), r != null && U(n, "formEncType", r), a != null && U(n, "formMethod", a), i != null && U(n, "formTarget", i), u;
}
function U(n, e, l) {
  switch (e) {
    case "className":
      sn(n, "class", l);
      break;
    case "tabIndex":
      sn(n, "tabindex", l);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      sn(n, e, l);
      break;
    case "style":
      Iu(n, l);
      break;
    case "src":
    case "href":
      if (l === "") break;
    case "action":
    case "formAction":
      if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean")
        break;
      l = vt("" + l), n.push(" ", e, '="', N(l), '"');
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      ta(n, e.toLowerCase(), l);
      break;
    case "xlinkHref":
      if (typeof l == "function" || typeof l == "symbol" || typeof l == "boolean")
        break;
      l = vt("" + l), n.push(" ", "xlink:href", '="', N(l), '"');
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof l != "function" && typeof l != "symbol" && n.push(" ", e, '="', N(l), '"');
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
      l && typeof l != "function" && typeof l != "symbol" && n.push(" ", e, '=""');
      break;
    case "capture":
    case "download":
      l === !0 ? n.push(" ", e, '=""') : l !== !1 && typeof l != "function" && typeof l != "symbol" && n.push(" ", e, '="', N(l), '"');
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l && n.push(" ", e, '="', N(l), '"');
      break;
    case "rowSpan":
    case "start":
      typeof l == "function" || typeof l == "symbol" || isNaN(l) || n.push(" ", e, '="', N(l), '"');
      break;
    case "xlinkActuate":
      sn(n, "xlink:actuate", l);
      break;
    case "xlinkArcrole":
      sn(n, "xlink:arcrole", l);
      break;
    case "xlinkRole":
      sn(n, "xlink:role", l);
      break;
    case "xlinkShow":
      sn(n, "xlink:show", l);
      break;
    case "xlinkTitle":
      sn(n, "xlink:title", l);
      break;
    case "xlinkType":
      sn(n, "xlink:type", l);
      break;
    case "xmlBase":
      sn(n, "xml:base", l);
      break;
    case "xmlLang":
      sn(n, "xml:lang", l);
      break;
    case "xmlSpace":
      sn(n, "xml:space", l);
      break;
    default:
      if ((!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = $c.get(e) || e, Aa(e))) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var t = e.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") return;
        }
        n.push(" ", e, '="', N(l), '"');
      }
  }
}
function Nn(n, e, l) {
  if (e != null) {
    if (l != null) throw Error(P(60));
    if (typeof e != "object" || !("__html" in e))
      throw Error(P(61));
    e = e.__html, e != null && n.push("" + e);
  }
}
function uf(n) {
  var e = "";
  return Tu.Children.forEach(n, function(l) {
    l != null && (e += l);
  }), e;
}
function Nu(n, e) {
  !(n.instructions & 16) && (n.instructions |= 16, e.bootstrapChunks.unshift(
    e.startInlineScript,
    `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
    "<\/script>"
  ));
}
function vn(n, e) {
  n.push(nn("link"));
  for (var l in e)
    if (q.call(e, l)) {
      var t = e[l];
      if (t != null)
        switch (l) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(P(399, "link"));
          default:
            U(n, l, t);
        }
    }
  return n.push("/>"), null;
}
var fi = /(<\/|<)(s)(tyle)/gi;
function hi(n, e, l, t) {
  return "" + e + (l === "s" ? "\\73 " : "\\53 ") + t;
}
function bl(n, e, l) {
  n.push(nn(l));
  for (var t in e)
    if (q.call(e, t)) {
      var r = e[t];
      if (r != null)
        switch (t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(P(399, l));
          default:
            U(n, t, r);
        }
    }
  return n.push("/>"), null;
}
function oi(n, e) {
  n.push(nn("title"));
  var l = null, t = null, r;
  for (r in e)
    if (q.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            U(n, r, a);
        }
    }
  return n.push(">"), e = Array.isArray(l) ? 2 > l.length ? l[0] : null : l, typeof e != "function" && typeof e != "symbol" && e !== null && e !== void 0 && n.push(N("" + e)), Nn(n, t, l), n.push(ul("title")), null;
}
function ar(n, e) {
  n.push(nn("script"));
  var l = null, t = null, r;
  for (r in e)
    if (q.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            U(n, r, a);
        }
    }
  return n.push(">"), Nn(n, t, l), typeof l == "string" && n.push(("" + l).replace(Au, Ou)), n.push(ul("script")), null;
}
function Ur(n, e, l) {
  n.push(nn(l));
  var t = l = null, r;
  for (r in e)
    if (q.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            U(n, r, a);
        }
    }
  return n.push(">"), Nn(n, t, l), l;
}
function Gt(n, e, l) {
  n.push(nn(l));
  var t = l = null, r;
  for (r in e)
    if (q.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            U(n, r, a);
        }
    }
  return n.push(">"), Nn(n, t, l), typeof l == "string" ? (n.push(N(l)), null) : l;
}
var cf = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, si = /* @__PURE__ */ new Map();
function nn(n) {
  var e = si.get(n);
  if (e === void 0) {
    if (!cf.test(n))
      throw Error(P(65, n));
    e = "<" + n, si.set(n, e);
  }
  return e;
}
function ff(n, e, l, t, r, a, i, f, u, c) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(nn("a"));
      var o = null, h = null, s;
      for (s in l)
        if (q.call(l, s)) {
          var b = l[s];
          if (b != null)
            switch (s) {
              case "children":
                o = b;
                break;
              case "dangerouslySetInnerHTML":
                h = b;
                break;
              case "href":
                b === "" ? sn(n, "href", "") : U(n, s, b);
                break;
              default:
                U(n, s, b);
            }
        }
      if (n.push(">"), Nn(n, h, o), typeof o == "string") {
        n.push(N(o));
        var v = null;
      } else v = o;
      return v;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(nn("select"));
      var y = null, A = null, R;
      for (R in l)
        if (q.call(l, R)) {
          var T = l[R];
          if (T != null)
            switch (R) {
              case "children":
                y = T;
                break;
              case "dangerouslySetInnerHTML":
                A = T;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                U(
                  n,
                  R,
                  T
                );
            }
        }
      return n.push(">"), Nn(n, A, y), y;
    case "option":
      var O = f.selectedValue;
      n.push(nn("option"));
      var w = null, z = null, F = null, x = null, C;
      for (C in l)
        if (q.call(l, C)) {
          var S = l[C];
          if (S != null)
            switch (C) {
              case "children":
                w = S;
                break;
              case "selected":
                F = S;
                break;
              case "dangerouslySetInnerHTML":
                x = S;
                break;
              case "value":
                z = S;
              default:
                U(
                  n,
                  C,
                  S
                );
            }
        }
      if (O != null) {
        var I = z !== null ? "" + z : uf(w);
        if (la(O)) {
          for (var L = 0; L < O.length; L++)
            if ("" + O[L] === I) {
              n.push(' selected=""');
              break;
            }
        } else
          "" + O === I && n.push(' selected=""');
      } else F && n.push(' selected=""');
      return n.push(">"), Nn(n, x, w), w;
    case "textarea":
      n.push(nn("textarea"));
      var M = null, _ = null, W = null, Y;
      for (Y in l)
        if (q.call(l, Y)) {
          var J = l[Y];
          if (J != null)
            switch (Y) {
              case "children":
                W = J;
                break;
              case "value":
                M = J;
                break;
              case "defaultValue":
                _ = J;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(P(91));
              default:
                U(
                  n,
                  Y,
                  J
                );
            }
        }
      if (M === null && _ !== null && (M = _), n.push(">"), W != null) {
        if (M != null) throw Error(P(92));
        if (la(W)) {
          if (1 < W.length)
            throw Error(P(93));
          M = "" + W[0];
        }
        M = "" + W;
      }
      return typeof M == "string" && M[0] === `
` && n.push(`
`), M !== null && n.push(N("" + M)), null;
    case "input":
      n.push(nn("input"));
      var V = null, Gn = null, m = null, tn = null, rn = null, mn = null, qn = null, An = null, Xn = null, ln;
      for (ln in l)
        if (q.call(l, ln)) {
          var Z = l[ln];
          if (Z != null)
            switch (ln) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(P(399, "input"));
              case "name":
                V = Z;
                break;
              case "formAction":
                Gn = Z;
                break;
              case "formEncType":
                m = Z;
                break;
              case "formMethod":
                tn = Z;
                break;
              case "formTarget":
                rn = Z;
                break;
              case "defaultChecked":
                Xn = Z;
                break;
              case "defaultValue":
                qn = Z;
                break;
              case "checked":
                An = Z;
                break;
              case "value":
                mn = Z;
                break;
              default:
                U(
                  n,
                  ln,
                  Z
                );
            }
        }
      var pn = ci(
        n,
        t,
        r,
        Gn,
        m,
        tn,
        rn,
        V
      );
      return An !== null ? ta(n, "checked", An) : Xn !== null && ta(n, "checked", Xn), mn !== null ? U(n, "value", mn) : qn !== null && U(n, "value", qn), n.push("/>"), pn != null && pn.forEach(Yr, n), null;
    case "button":
      n.push(nn("button"));
      var on = null, ze = null, Be = null, Ze = null, _l = null, Ll = null, Dl = null, jn;
      for (jn in l)
        if (q.call(l, jn)) {
          var $ = l[jn];
          if ($ != null)
            switch (jn) {
              case "children":
                on = $;
                break;
              case "dangerouslySetInnerHTML":
                ze = $;
                break;
              case "name":
                Be = $;
                break;
              case "formAction":
                Ze = $;
                break;
              case "formEncType":
                _l = $;
                break;
              case "formMethod":
                Ll = $;
                break;
              case "formTarget":
                Dl = $;
                break;
              default:
                U(
                  n,
                  jn,
                  $
                );
            }
        }
      var Nl = ci(
        n,
        t,
        r,
        Ze,
        _l,
        Ll,
        Dl,
        Be
      );
      if (n.push(">"), Nl != null && Nl.forEach(Yr, n), Nn(n, ze, on), typeof on == "string") {
        n.push(N(on));
        var zl = null;
      } else zl = on;
      return zl;
    case "form":
      n.push(nn("form"));
      var $n = null, Bl = null, yn = null, ne = null, ee = null, le = null, te;
      for (te in l)
        if (q.call(l, te)) {
          var an = l[te];
          if (an != null)
            switch (te) {
              case "children":
                $n = an;
                break;
              case "dangerouslySetInnerHTML":
                Bl = an;
                break;
              case "action":
                yn = an;
                break;
              case "encType":
                ne = an;
                break;
              case "method":
                ee = an;
                break;
              case "target":
                le = an;
                break;
              default:
                U(
                  n,
                  te,
                  an
                );
            }
        }
      var Je = null, Qe = null;
      if (typeof yn == "function") {
        var En = Du(
          t,
          yn
        );
        En !== null ? (yn = En.action || "", ne = En.encType, ee = En.method, le = En.target, Je = En.data, Qe = En.name) : (n.push(
          " ",
          "action",
          '="',
          _u,
          '"'
        ), le = ee = ne = yn = null, Nu(t, r));
      }
      if (yn != null && U(n, "action", yn), ne != null && U(n, "encType", ne), ee != null && U(n, "method", ee), le != null && U(n, "target", le), n.push(">"), Qe !== null && (n.push('<input type="hidden"'), sn(n, "name", Qe), n.push("/>"), Je != null && Je.forEach(Yr, n)), Nn(n, Bl, $n), typeof $n == "string") {
        n.push(N($n));
        var Hl = null;
      } else Hl = $n;
      return Hl;
    case "menuitem":
      n.push(nn("menuitem"));
      for (var Ee in l)
        if (q.call(l, Ee)) {
          var Wl = l[Ee];
          if (Wl != null)
            switch (Ee) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(P(400));
              default:
                U(
                  n,
                  Ee,
                  Wl
                );
            }
        }
      return n.push(">"), null;
    case "object":
      n.push(nn("object"));
      var re = null, Yl = null, ae;
      for (ae in l)
        if (q.call(l, ae)) {
          var ie = l[ae];
          if (ie != null)
            switch (ae) {
              case "children":
                re = ie;
                break;
              case "dangerouslySetInnerHTML":
                Yl = ie;
                break;
              case "data":
                var Ul = vt("" + ie);
                if (Ul === "") break;
                n.push(
                  " ",
                  "data",
                  '="',
                  N(Ul),
                  '"'
                );
                break;
              default:
                U(
                  n,
                  ae,
                  ie
                );
            }
        }
      if (n.push(">"), Nn(n, Yl, re), typeof re == "string") {
        n.push(N(re));
        var Gl = null;
      } else Gl = re;
      return Gl;
    case "title":
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null)
        var Ke = oi(
          n,
          l
        );
      else
        c ? Ke = null : (oi(r.hoistableChunks, l), Ke = void 0);
      return Ke;
    case "link":
      var Wr = l.rel, un = l.href, we = l.precedence;
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null || typeof Wr != "string" || typeof un != "string" || un === "") {
        vn(n, l);
        var ue = null;
      } else if (l.rel === "stylesheet")
        if (typeof we != "string" || l.disabled != null || l.onLoad || l.onError)
          ue = vn(
            n,
            l
          );
        else {
          var On = r.styles.get(we), Te = t.styleResources.hasOwnProperty(un) ? t.styleResources[un] : void 0;
          if (Te !== null) {
            t.styleResources[un] = null, On || (On = {
              precedence: N(we),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, r.styles.set(we, On));
            var Re = {
              state: 0,
              props: Sn({}, l, {
                "data-precedence": l.precedence,
                precedence: null
              })
            };
            if (Te) {
              Te.length === 2 && yt(Re.props, Te);
              var Ve = r.preloads.stylesheets.get(un);
              Ve && 0 < Ve.length ? Ve.length = 0 : Re.state = 1;
            }
            On.sheets.set(un, Re), i && i.stylesheets.add(Re);
          } else if (On) {
            var Xl = On.sheets.get(un);
            Xl && i && i.stylesheets.add(Xl);
          }
          u && n.push("<!-- -->"), ue = null;
        }
      else
        l.onLoad || l.onError ? ue = vn(
          n,
          l
        ) : (u && n.push("<!-- -->"), ue = c ? null : vn(r.hoistableChunks, l));
      return ue;
    case "script":
      var me = l.async;
      if (typeof l.src != "string" || !l.src || !me || typeof me == "function" || typeof me == "symbol" || l.onLoad || l.onError || f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null)
        var Zl = ar(
          n,
          l
        );
      else {
        var xe = l.src;
        if (l.type === "module")
          var Ce = t.moduleScriptResources, Jl = r.preloads.moduleScripts;
        else
          Ce = t.scriptResources, Jl = r.preloads.scripts;
        var Pe = Ce.hasOwnProperty(xe) ? Ce[xe] : void 0;
        if (Pe !== null) {
          Ce[xe] = null;
          var qe = l;
          if (Pe) {
            Pe.length === 2 && (qe = Sn({}, l), yt(qe, Pe));
            var Ql = Jl.get(xe);
            Ql && (Ql.length = 0);
          }
          var Kl = [];
          r.scripts.add(Kl), ar(Kl, qe);
        }
        u && n.push("<!-- -->"), Zl = null;
      }
      return Zl;
    case "style":
      var ke = l.precedence, wn = l.href;
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null || typeof ke != "string" || typeof wn != "string" || wn === "") {
        n.push(nn("style"));
        var In = null, Vl = null, ce;
        for (ce in l)
          if (q.call(l, ce)) {
            var Fe = l[ce];
            if (Fe != null)
              switch (ce) {
                case "children":
                  In = Fe;
                  break;
                case "dangerouslySetInnerHTML":
                  Vl = Fe;
                  break;
                default:
                  U(
                    n,
                    ce,
                    Fe
                  );
              }
          }
        n.push(">");
        var fe = Array.isArray(In) ? 2 > In.length ? In[0] : null : In;
        typeof fe != "function" && typeof fe != "symbol" && fe !== null && fe !== void 0 && n.push(("" + fe).replace(fi, hi)), Nn(n, Vl, In), n.push(ul("style"));
        var ml = null;
      } else {
        var Tn = r.styles.get(ke);
        if ((t.styleResources.hasOwnProperty(wn) ? t.styleResources[wn] : void 0) !== null) {
          t.styleResources[wn] = null, Tn ? Tn.hrefs.push(
            N(wn)
          ) : (Tn = {
            precedence: N(ke),
            rules: [],
            hrefs: [N(wn)],
            sheets: /* @__PURE__ */ new Map()
          }, r.styles.set(ke, Tn));
          var ql = Tn.rules, _n = null, pl = null, Se;
          for (Se in l)
            if (q.call(l, Se)) {
              var pe = l[Se];
              if (pe != null)
                switch (Se) {
                  case "children":
                    _n = pe;
                    break;
                  case "dangerouslySetInnerHTML":
                    pl = pe;
                }
            }
          var he = Array.isArray(_n) ? 2 > _n.length ? _n[0] : null : _n;
          typeof he != "function" && typeof he != "symbol" && he !== null && he !== void 0 && ql.push(
            ("" + he).replace(fi, hi)
          ), Nn(ql, pl, _n);
        }
        Tn && i && i.styles.add(Tn), u && n.push("<!-- -->"), ml = void 0;
      }
      return ml;
    case "meta":
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null)
        var jl = bl(
          n,
          l,
          "meta"
        );
      else
        u && n.push("<!-- -->"), jl = c ? null : typeof l.charSet == "string" ? bl(r.charsetChunks, l, "meta") : l.name === "viewport" ? bl(r.viewportChunks, l, "meta") : bl(r.hoistableChunks, l, "meta");
      return jl;
    case "listing":
    case "pre":
      n.push(nn(e));
      var oe = null, se = null, de;
      for (de in l)
        if (q.call(l, de)) {
          var Me = l[de];
          if (Me != null)
            switch (de) {
              case "children":
                oe = Me;
                break;
              case "dangerouslySetInnerHTML":
                se = Me;
                break;
              default:
                U(
                  n,
                  de,
                  Me
                );
            }
        }
      if (n.push(">"), se != null) {
        if (oe != null) throw Error(P(60));
        if (typeof se != "object" || !("__html" in se))
          throw Error(P(61));
        var Rn = se.__html;
        Rn != null && (typeof Rn == "string" && 0 < Rn.length && Rn[0] === `
` ? n.push(`
`, Rn) : n.push("" + Rn));
      }
      return typeof oe == "string" && oe[0] === `
` && n.push(`
`), oe;
    case "img":
      var H = l.src, B = l.srcSet;
      if (!(l.loading === "lazy" || !H && !B || typeof H != "string" && H != null || typeof B != "string" && B != null) && l.fetchPriority !== "low" && !(f.tagScope & 3) && (typeof H != "string" || H[4] !== ":" || H[0] !== "d" && H[0] !== "D" || H[1] !== "a" && H[1] !== "A" || H[2] !== "t" && H[2] !== "T" || H[3] !== "a" && H[3] !== "A") && (typeof B != "string" || B[4] !== ":" || B[0] !== "d" && B[0] !== "D" || B[1] !== "a" && B[1] !== "A" || B[2] !== "t" && B[2] !== "T" || B[3] !== "a" && B[3] !== "A")) {
        var $l = typeof l.sizes == "string" ? l.sizes : void 0, Ln = B ? B + `
` + ($l || "") : H, je = r.preloads.images, xn = je.get(Ln);
        if (xn)
          (l.fetchPriority === "high" || 10 > r.highImagePreloads.size) && (je.delete(Ln), r.highImagePreloads.add(xn));
        else if (!t.imageResources.hasOwnProperty(Ln)) {
          t.imageResources[Ln] = Jn;
          var $e = l.crossOrigin, nt = typeof $e == "string" ? $e === "use-credentials" ? $e : "" : void 0, Cn = r.headers, nl;
          Cn && 0 < Cn.remainingCapacity && typeof l.srcSet != "string" && (l.fetchPriority === "high" || 500 > Cn.highImagePreloads.length) && (nl = ur(H, "image", {
            imageSrcSet: l.srcSet,
            imageSizes: l.sizes,
            crossOrigin: nt,
            integrity: l.integrity,
            nonce: l.nonce,
            type: l.type,
            fetchPriority: l.fetchPriority,
            referrerPolicy: l.refererPolicy
          }), 0 <= (Cn.remainingCapacity -= nl.length + 2)) ? (r.resets.image[Ln] = Jn, Cn.highImagePreloads && (Cn.highImagePreloads += ", "), Cn.highImagePreloads += nl) : (xn = [], vn(xn, {
            rel: "preload",
            as: "image",
            href: B ? void 0 : H,
            imageSrcSet: B,
            imageSizes: $l,
            crossOrigin: nt,
            integrity: l.integrity,
            type: l.type,
            fetchPriority: l.fetchPriority,
            referrerPolicy: l.referrerPolicy
          }), l.fetchPriority === "high" || 10 > r.highImagePreloads.size ? r.highImagePreloads.add(xn) : (r.bulkPreloads.add(xn), je.set(Ln, xn)));
        }
      }
      return bl(n, l, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return bl(n, l, e);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (2 > f.insertionMode) {
        var el = a || r.preamble;
        if (el.headChunks)
          throw Error(P(545, "`<head>`"));
        el.headChunks = [];
        var et = Ur(
          el.headChunks,
          l,
          "head"
        );
      } else
        et = Gt(
          n,
          l,
          "head"
        );
      return et;
    case "body":
      if (2 > f.insertionMode) {
        var ll = a || r.preamble;
        if (ll.bodyChunks)
          throw Error(P(545, "`<body>`"));
        ll.bodyChunks = [];
        var lt = Ur(
          ll.bodyChunks,
          l,
          "body"
        );
      } else
        lt = Gt(
          n,
          l,
          "body"
        );
      return lt;
    case "html":
      if (f.insertionMode === 0) {
        var tl = a || r.preamble;
        if (tl.htmlChunks)
          throw Error(P(545, "`<html>`"));
        tl.htmlChunks = [""];
        var tt = Ur(
          tl.htmlChunks,
          l,
          "html"
        );
      } else
        tt = Gt(
          n,
          l,
          "html"
        );
      return tt;
    default:
      if (e.indexOf("-") !== -1) {
        n.push(nn(e));
        var rl = null, rt = null, Dn;
        for (Dn in l)
          if (q.call(l, Dn)) {
            var j = l[Dn];
            if (j != null) {
              var at = Dn;
              switch (Dn) {
                case "children":
                  rl = j;
                  break;
                case "dangerouslySetInnerHTML":
                  rt = j;
                  break;
                case "style":
                  Iu(n, j);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  at = "class";
                default:
                  if (Aa(Dn) && typeof j != "function" && typeof j != "symbol" && j !== !1) {
                    if (j === !0) j = "";
                    else if (typeof j == "object") continue;
                    n.push(
                      " ",
                      at,
                      '="',
                      N(j),
                      '"'
                    );
                  }
              }
            }
          }
        return n.push(">"), Nn(n, rt, rl), rl;
      }
  }
  return Gt(n, l, e);
}
var di = /* @__PURE__ */ new Map();
function ul(n) {
  var e = di.get(n);
  return e === void 0 && (e = "</" + n + ">", di.set(n, e)), e;
}
function gi(n, e) {
  n = n.preamble, n.htmlChunks === null && e.htmlChunks && (n.htmlChunks = e.htmlChunks, e.contribution |= 1), n.headChunks === null && e.headChunks && (n.headChunks = e.headChunks, e.contribution |= 4), n.bodyChunks === null && e.bodyChunks && (n.bodyChunks = e.bodyChunks, e.contribution |= 2);
}
function zu(n, e) {
  e = e.bootstrapChunks;
  for (var l = 0; l < e.length - 1; l++)
    n.push(e[l]);
  return l < e.length ? (l = e[l], e.length = 0, n.push(l)) : !0;
}
function vi(n, e, l) {
  if (n.push('<!--$?--><template id="'), l === null) throw Error(P(395));
  return n.push(e.boundaryPrefix), e = l.toString(16), n.push(e), n.push('"></template>');
}
function bi(n, e) {
  e = e.contribution, e !== 0 && (n.push("<!--"), n.push("" + e), n.push("-->"));
}
function hf(n, e, l, t) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push('<div hidden id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    case 4:
      return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    case 5:
      return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    case 6:
      return n.push('<table hidden id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    case 7:
      return n.push('<table hidden><tbody id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    case 8:
      return n.push('<table hidden><tr id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    case 9:
      return n.push('<table hidden><colgroup id="'), n.push(e.segmentPrefix), e = t.toString(16), n.push(e), n.push('">');
    default:
      throw Error(P(397));
  }
}
function of(n, e) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push("</div>");
    case 4:
      return n.push("</svg>");
    case 5:
      return n.push("</math>");
    case 6:
      return n.push("</table>");
    case 7:
      return n.push("</tbody></table>");
    case 8:
      return n.push("</tr></table>");
    case 9:
      return n.push("</colgroup></table>");
    default:
      throw Error(P(397));
  }
}
var sf = /[<\u2028\u2029]/g;
function df(n) {
  return JSON.stringify(n).replace(
    sf,
    function(e) {
      switch (e) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var gf = /[&><\u2028\u2029]/g;
function ot(n) {
  return JSON.stringify(n).replace(
    gf,
    function(e) {
      switch (e) {
        case "&":
          return "\\u0026";
        case ">":
          return "\\u003e";
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var ir = !1, ra = !0;
function vf(n) {
  var e = n.rules, l = n.hrefs, t = 0;
  if (l.length) {
    for (this.push('<style media="not all" data-precedence="'), this.push(n.precedence), this.push('" data-href="'); t < l.length - 1; t++)
      this.push(l[t]), this.push(" ");
    for (this.push(l[t]), this.push('">'), t = 0; t < e.length; t++) this.push(e[t]);
    ra = this.push("</style>"), ir = !0, e.length = 0, l.length = 0;
  }
}
function bf(n) {
  return n.state !== 2 ? ir = !0 : !1;
}
function Bu(n, e, l) {
  return ir = !1, ra = !0, e.styles.forEach(vf, n), e.stylesheets.forEach(bf), ir && (l.stylesToHoist = !0), ra;
}
function ge(n) {
  for (var e = 0; e < n.length; e++) this.push(n[e]);
  n.length = 0;
}
var Ye = [];
function yf(n) {
  vn(Ye, n.props);
  for (var e = 0; e < Ye.length; e++)
    this.push(Ye[e]);
  Ye.length = 0, n.state = 2;
}
function Ef(n) {
  var e = 0 < n.sheets.size;
  n.sheets.forEach(yf, this), n.sheets.clear();
  var l = n.rules, t = n.hrefs;
  if (!e || t.length) {
    if (this.push('<style data-precedence="'), this.push(n.precedence), n = 0, t.length) {
      for (this.push('" data-href="'); n < t.length - 1; n++)
        this.push(t[n]), this.push(" ");
      this.push(t[n]);
    }
    for (this.push('">'), n = 0; n < l.length; n++)
      this.push(l[n]);
    this.push("</style>"), l.length = 0, t.length = 0;
  }
}
function wf(n) {
  if (n.state === 0) {
    n.state = 1;
    var e = n.props;
    for (vn(Ye, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: e.crossOrigin,
      fetchPriority: e.fetchPriority,
      integrity: e.integrity,
      media: e.media,
      hrefLang: e.hrefLang,
      referrerPolicy: e.referrerPolicy
    }), n = 0; n < Ye.length; n++)
      this.push(Ye[n]);
    Ye.length = 0;
  }
}
function Tf(n) {
  n.sheets.forEach(wf, this), n.sheets.clear();
}
function Rf(n, e) {
  n.push("[");
  var l = "[";
  e.stylesheets.forEach(function(t) {
    if (t.state !== 2)
      if (t.state === 3)
        n.push(l), t = ot(
          "" + t.props.href
        ), n.push(t), n.push("]"), l = ",[";
      else {
        n.push(l);
        var r = t.props["data-precedence"], a = t.props, i = vt("" + t.props.href);
        i = ot(i), n.push(i), r = "" + r, n.push(","), r = ot(r), n.push(r);
        for (var f in a)
          if (q.call(a, f) && (r = a[f], r != null))
            switch (f) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(P(399, "link"));
              default:
                xf(
                  n,
                  f,
                  r
                );
            }
        n.push("]"), l = ",[", t.state = 3;
      }
  }), n.push("]");
}
function xf(n, e, l) {
  var t = e.toLowerCase();
  switch (typeof l) {
    case "function":
    case "symbol":
      return;
  }
  switch (e) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      t = "class", e = "" + l;
      break;
    case "hidden":
      if (l === !1) return;
      e = "";
      break;
    case "src":
    case "href":
      l = vt(l), e = "" + l;
      break;
    default:
      if (2 < e.length && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N") || !Aa(e))
        return;
      e = "" + l;
  }
  n.push(","), t = ot(t), n.push(t), n.push(","), t = ot(e), n.push(t);
}
function yi() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function Cf(n) {
  var e = fn || null;
  if (e) {
    var l = e.resumableState, t = e.renderState;
    if (typeof n == "string" && n) {
      if (!l.dnsResources.hasOwnProperty(n)) {
        l.dnsResources[n] = null, l = t.headers;
        var r, a;
        (a = l && 0 < l.remainingCapacity) && (a = (r = "<" + ("" + n).replace(
          Oa,
          Ia
        ) + ">; rel=dns-prefetch", 0 <= (l.remainingCapacity -= r.length + 2))), a ? (t.resets.dns[n] = null, l.preconnects && (l.preconnects += ", "), l.preconnects += r) : (r = [], vn(r, { href: n, rel: "dns-prefetch" }), t.preconnects.add(r));
      }
      dl(e);
    }
  } else _e.D(n);
}
function Pf(n, e) {
  var l = fn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (typeof n == "string" && n) {
      var a = e === "use-credentials" ? "credentials" : typeof e == "string" ? "anonymous" : "default";
      if (!t.connectResources[a].hasOwnProperty(n)) {
        t.connectResources[a][n] = null, t = r.headers;
        var i, f;
        if (f = t && 0 < t.remainingCapacity) {
          if (f = "<" + ("" + n).replace(
            Oa,
            Ia
          ) + ">; rel=preconnect", typeof e == "string") {
            var u = ("" + e).replace(
              aa,
              ia
            );
            f += '; crossorigin="' + u + '"';
          }
          f = (i = f, 0 <= (t.remainingCapacity -= i.length + 2));
        }
        f ? (r.resets.connect[a][n] = null, t.preconnects && (t.preconnects += ", "), t.preconnects += i) : (a = [], vn(a, {
          rel: "preconnect",
          href: n,
          crossOrigin: e
        }), r.preconnects.add(a));
      }
      dl(l);
    }
  } else _e.C(n, e);
}
function kf(n, e, l) {
  var t = fn || null;
  if (t) {
    var r = t.resumableState, a = t.renderState;
    if (e && n) {
      switch (e) {
        case "image":
          if (l)
            var i = l.imageSrcSet, f = l.imageSizes, u = l.fetchPriority;
          var c = i ? i + `
` + (f || "") : n;
          if (r.imageResources.hasOwnProperty(c)) return;
          r.imageResources[c] = Jn, r = a.headers;
          var o;
          r && 0 < r.remainingCapacity && typeof i != "string" && u === "high" && (o = ur(n, e, l), 0 <= (r.remainingCapacity -= o.length + 2)) ? (a.resets.image[c] = Jn, r.highImagePreloads && (r.highImagePreloads += ", "), r.highImagePreloads += o) : (r = [], vn(
            r,
            Sn(
              { rel: "preload", href: i ? void 0 : n, as: e },
              l
            )
          ), u === "high" ? a.highImagePreloads.add(r) : (a.bulkPreloads.add(r), a.preloads.images.set(c, r)));
          break;
        case "style":
          if (r.styleResources.hasOwnProperty(n)) return;
          i = [], vn(
            i,
            Sn({ rel: "preload", href: n, as: e }, l)
          ), r.styleResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? Jn : [l.crossOrigin, l.integrity], a.preloads.stylesheets.set(n, i), a.bulkPreloads.add(i);
          break;
        case "script":
          if (r.scriptResources.hasOwnProperty(n)) return;
          i = [], a.preloads.scripts.set(n, i), a.bulkPreloads.add(i), vn(
            i,
            Sn({ rel: "preload", href: n, as: e }, l)
          ), r.scriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? Jn : [l.crossOrigin, l.integrity];
          break;
        default:
          if (r.unknownResources.hasOwnProperty(e)) {
            if (i = r.unknownResources[e], i.hasOwnProperty(n))
              return;
          } else
            i = {}, r.unknownResources[e] = i;
          if (i[n] = Jn, (r = a.headers) && 0 < r.remainingCapacity && e === "font" && (c = ur(n, e, l), 0 <= (r.remainingCapacity -= c.length + 2)))
            a.resets.font[n] = Jn, r.fontPreloads && (r.fontPreloads += ", "), r.fontPreloads += c;
          else
            switch (r = [], n = Sn({ rel: "preload", href: n, as: e }, l), vn(r, n), e) {
              case "font":
                a.fontPreloads.add(r);
                break;
              default:
                a.bulkPreloads.add(r);
            }
      }
      dl(t);
    }
  } else _e.L(n, e, l);
}
function Ff(n, e) {
  var l = fn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (n) {
      var a = e && typeof e.as == "string" ? e.as : "script";
      switch (a) {
        case "script":
          if (t.moduleScriptResources.hasOwnProperty(n)) return;
          a = [], t.moduleScriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? Jn : [e.crossOrigin, e.integrity], r.preloads.moduleScripts.set(n, a);
          break;
        default:
          if (t.moduleUnknownResources.hasOwnProperty(a)) {
            var i = t.unknownResources[a];
            if (i.hasOwnProperty(n)) return;
          } else
            i = {}, t.moduleUnknownResources[a] = i;
          a = [], i[n] = Jn;
      }
      vn(a, Sn({ rel: "modulepreload", href: n }, e)), r.bulkPreloads.add(a), dl(l);
    }
  } else _e.m(n, e);
}
function Sf(n, e, l) {
  var t = fn || null;
  if (t) {
    var r = t.resumableState, a = t.renderState;
    if (n) {
      e = e || "default";
      var i = a.styles.get(e), f = r.styleResources.hasOwnProperty(n) ? r.styleResources[n] : void 0;
      f !== null && (r.styleResources[n] = null, i || (i = {
        precedence: N(e),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, a.styles.set(e, i)), e = {
        state: 0,
        props: Sn(
          { rel: "stylesheet", href: n, "data-precedence": e },
          l
        )
      }, f && (f.length === 2 && yt(e.props, f), (a = a.preloads.stylesheets.get(n)) && 0 < a.length ? a.length = 0 : e.state = 1), i.sheets.set(n, e), dl(t));
    }
  } else _e.S(n, e, l);
}
function Mf(n, e) {
  var l = fn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (n) {
      var a = t.scriptResources.hasOwnProperty(n) ? t.scriptResources[n] : void 0;
      a !== null && (t.scriptResources[n] = null, e = Sn({ src: n, async: !0 }, e), a && (a.length === 2 && yt(e, a), n = r.preloads.scripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), ar(n, e), dl(l));
    }
  } else _e.X(n, e);
}
function Af(n, e) {
  var l = fn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (n) {
      var a = t.moduleScriptResources.hasOwnProperty(
        n
      ) ? t.moduleScriptResources[n] : void 0;
      a !== null && (t.moduleScriptResources[n] = null, e = Sn({ src: n, type: "module", async: !0 }, e), a && (a.length === 2 && yt(e, a), n = r.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), ar(n, e), dl(l));
    }
  } else _e.M(n, e);
}
function yt(n, e) {
  n.crossOrigin == null && (n.crossOrigin = e[0]), n.integrity == null && (n.integrity = e[1]);
}
function ur(n, e, l) {
  n = ("" + n).replace(
    Oa,
    Ia
  ), e = ("" + e).replace(
    aa,
    ia
  ), e = "<" + n + '>; rel=preload; as="' + e + '"';
  for (var t in l)
    q.call(l, t) && (n = l[t], typeof n == "string" && (e += "; " + t.toLowerCase() + '="' + ("" + n).replace(
      aa,
      ia
    ) + '"'));
  return e;
}
var Oa = /[<>\r\n]/g;
function Ia(n) {
  switch (n) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
var aa = /["';,\r\n]/g;
function ia(n) {
  switch (n) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
function Ei(n) {
  this.styles.add(n);
}
function wi(n) {
  this.stylesheets.add(n);
}
function Of(n, e) {
  var l = n.idPrefix, t = [], r = n.bootstrapScriptContent, a = n.bootstrapScripts, i = n.bootstrapModules;
  r !== void 0 && t.push(
    "<script>",
    ("" + r).replace(Au, Ou),
    "<\/script>"
  ), r = l + "P:";
  var f = l + "S:";
  l += "B:";
  var u = bt(), c = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), A = {
    images: /* @__PURE__ */ new Map(),
    stylesheets: /* @__PURE__ */ new Map(),
    scripts: /* @__PURE__ */ new Map(),
    moduleScripts: /* @__PURE__ */ new Map()
  };
  if (a !== void 0)
    for (var R = 0; R < a.length; R++) {
      var T = a[R], O, w = void 0, z = void 0, F = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: void 0
      };
      typeof T == "string" ? F.href = O = T : (F.href = O = T.src, F.integrity = z = typeof T.integrity == "string" ? T.integrity : void 0, F.crossOrigin = w = typeof T == "string" || T.crossOrigin == null ? void 0 : T.crossOrigin === "use-credentials" ? "use-credentials" : ""), T = n;
      var x = O;
      T.scriptResources[x] = null, T.moduleScriptResources[x] = null, T = [], vn(T, F), b.add(T), t.push('<script src="', N(O)), typeof z == "string" && t.push('" integrity="', N(z)), typeof w == "string" && t.push(
        '" crossorigin="',
        N(w)
      ), t.push('" async=""><\/script>');
    }
  if (i !== void 0)
    for (a = 0; a < i.length; a++)
      F = i[a], w = O = void 0, z = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: void 0
      }, typeof F == "string" ? z.href = R = F : (z.href = R = F.src, z.integrity = w = typeof F.integrity == "string" ? F.integrity : void 0, z.crossOrigin = O = typeof F == "string" || F.crossOrigin == null ? void 0 : F.crossOrigin === "use-credentials" ? "use-credentials" : ""), F = n, T = R, F.scriptResources[T] = null, F.moduleScriptResources[T] = null, F = [], vn(F, z), b.add(F), t.push(
        '<script type="module" src="',
        N(R)
      ), typeof w == "string" && t.push(
        '" integrity="',
        N(w)
      ), typeof O == "string" && t.push('" crossorigin="', N(O)), t.push('" async=""><\/script>');
  return {
    placeholderPrefix: r,
    segmentPrefix: f,
    boundaryPrefix: l,
    startInlineScript: "<script>",
    preamble: u,
    externalRuntimeScript: null,
    bootstrapChunks: t,
    importMapChunks: [],
    onHeaders: void 0,
    headers: null,
    resets: {
      font: {},
      dns: {},
      connect: { default: {}, anonymous: {}, credentials: {} },
      image: {},
      style: {}
    },
    charsetChunks: [],
    viewportChunks: [],
    hoistableChunks: [],
    preconnects: c,
    fontPreloads: o,
    highImagePreloads: h,
    styles: s,
    bootstrapScripts: b,
    scripts: v,
    bulkPreloads: y,
    preloads: A,
    stylesToHoist: !1,
    generateStaticMarkup: e
  };
}
function Ti(n, e, l, t) {
  return l.generateStaticMarkup ? (n.push(N(e)), !1) : (e === "" ? n = t : (t && n.push("<!-- -->"), n.push(N(e)), n = !0), n);
}
function ua(n, e, l, t) {
  e.generateStaticMarkup || l && t && n.push("<!-- -->");
}
var If = Function.prototype.bind, _f = Symbol.for("react.client.reference");
function cr(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === _f ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case Cu:
      return "Fragment";
    case ku:
      return "Profiler";
    case Pu:
      return "StrictMode";
    case Fr:
      return "Suspense";
    case Sa:
      return "SuspenseList";
    case Su:
      return "Activity";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case xu:
        return "Portal";
      case kr:
        return (n.displayName || "Context") + ".Provider";
      case Fu:
        return (n._context.displayName || "Context") + ".Consumer";
      case Fa:
        var e = n.render;
        return n = n.displayName, n || (n = e.displayName || e.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ma:
        return e = n.displayName || null, e !== null ? e : cr(n.type) || "Memo";
      case Sr:
        e = n._payload, n = n._init;
        try {
          return cr(n(e));
        } catch {
        }
    }
  return null;
}
var Ri = {}, al = null;
function Mr(n, e) {
  if (n !== e) {
    n.context._currentValue2 = n.parentValue, n = n.parent;
    var l = e.parent;
    if (n === null) {
      if (l !== null) throw Error(P(401));
    } else {
      if (l === null) throw Error(P(401));
      Mr(n, l);
    }
    e.context._currentValue2 = e.value;
  }
}
function Hu(n) {
  n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && Hu(n);
}
function Wu(n) {
  var e = n.parent;
  e !== null && Wu(e), n.context._currentValue2 = n.value;
}
function Yu(n, e) {
  if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(P(402));
  n.depth === e.depth ? Mr(n, e) : Yu(n, e);
}
function Uu(n, e) {
  var l = e.parent;
  if (l === null) throw Error(P(402));
  n.depth === l.depth ? Mr(n, l) : Uu(n, l), e.context._currentValue2 = e.value;
}
function He(n) {
  var e = al;
  e !== n && (e === null ? Wu(n) : n === null ? Hu(e) : e.depth === n.depth ? Mr(e, n) : e.depth > n.depth ? Yu(e, n) : Uu(e, n), al = n);
}
var xi = {
  enqueueSetState: function(n, e) {
    n = n._reactInternals, n.queue !== null && n.queue.push(e);
  },
  enqueueReplaceState: function(n, e) {
    n = n._reactInternals, n.replace = !0, n.queue = [e];
  },
  enqueueForceUpdate: function() {
  }
}, Lf = { id: 1, overflow: "" };
function ca(n, e, l) {
  var t = n.id;
  n = n.overflow;
  var r = 32 - pt(t) - 1;
  t &= ~(1 << r), l += 1;
  var a = 32 - pt(e) + r;
  if (30 < a) {
    var i = r - r % 5;
    return a = (t & (1 << i) - 1).toString(32), t >>= i, r -= i, {
      id: 1 << 32 - pt(e) + r | l << r | t,
      overflow: a + n
    };
  }
  return {
    id: 1 << a | l << r | t,
    overflow: n
  };
}
var pt = Math.clz32 ? Math.clz32 : zf, Df = Math.log, Nf = Math.LN2;
function zf(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (Df(n) / Nf | 0) | 0;
}
var fl = Error(P(460));
function Xt() {
}
function Bf(n, e, l) {
  switch (l = n[l], l === void 0 ? n.push(e) : l !== e && (e.then(Xt, Xt), e = l), e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (typeof e.status == "string" ? e.then(Xt, Xt) : (n = e, n.status = "pending", n.then(
        function(t) {
          if (e.status === "pending") {
            var r = e;
            r.status = "fulfilled", r.value = t;
          }
        },
        function(t) {
          if (e.status === "pending") {
            var r = e;
            r.status = "rejected", r.reason = t;
          }
        }
      )), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
      throw jt = e, fl;
  }
}
var jt = null;
function fr() {
  if (jt === null) throw Error(P(459));
  var n = jt;
  return jt = null, n;
}
function Hf(n, e) {
  return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
}
var Wf = typeof Object.is == "function" ? Object.is : Hf, Le = null, _a = null, La = null, Da = null, $t = null, Q = null, ft = !1, hr = !1, Et = 0, wt = 0, Tt = -1, or = 0, kl = null, Ue = null, Ar = 0;
function Ae() {
  if (Le === null)
    throw Error(P(321));
  return Le;
}
function Ci() {
  if (0 < Ar) throw Error(P(312));
  return { memoizedState: null, queue: null, next: null };
}
function Na() {
  return Q === null ? $t === null ? (ft = !1, $t = Q = Ci()) : (ft = !0, Q = $t) : Q.next === null ? (ft = !1, Q = Q.next = Ci()) : (ft = !0, Q = Q.next), Q;
}
function Cl() {
  var n = kl;
  return kl = null, n;
}
function Rt() {
  Da = La = _a = Le = null, hr = !1, $t = null, Ar = 0, Q = Ue = null;
}
function Gu(n, e) {
  return typeof e == "function" ? e(n) : e;
}
function Pi(n, e, l) {
  if (Le = Ae(), Q = Na(), ft) {
    var t = Q.queue;
    if (e = t.dispatch, Ue !== null && (l = Ue.get(t), l !== void 0)) {
      Ue.delete(t), t = Q.memoizedState;
      do
        t = n(t, l.action), l = l.next;
      while (l !== null);
      return Q.memoizedState = t, [t, e];
    }
    return [Q.memoizedState, e];
  }
  return n = n === Gu ? typeof e == "function" ? e() : e : l !== void 0 ? l(e) : e, Q.memoizedState = n, n = Q.queue = { last: null, dispatch: null }, n = n.dispatch = Yf.bind(
    null,
    Le,
    n
  ), [Q.memoizedState, n];
}
function ki(n, e) {
  if (Le = Ae(), Q = Na(), e = e === void 0 ? null : e, Q !== null) {
    var l = Q.memoizedState;
    if (l !== null && e !== null) {
      var t = l[1];
      n: if (t === null) t = !1;
      else {
        for (var r = 0; r < t.length && r < e.length; r++)
          if (!Wf(e[r], t[r])) {
            t = !1;
            break n;
          }
        t = !0;
      }
      if (t) return l[0];
    }
  }
  return n = n(), Q.memoizedState = [n, e], n;
}
function Yf(n, e, l) {
  if (25 <= Ar) throw Error(P(301));
  if (n === Le)
    if (hr = !0, n = { action: l, next: null }, Ue === null && (Ue = /* @__PURE__ */ new Map()), l = Ue.get(e), l === void 0)
      Ue.set(e, n);
    else {
      for (e = l; e.next !== null; ) e = e.next;
      e.next = n;
    }
}
function Uf() {
  throw Error(P(394));
}
function Gf() {
  throw Error(P(479));
}
function Fi(n, e, l) {
  Ae();
  var t = wt++, r = La;
  if (typeof n.$$FORM_ACTION == "function") {
    var a = null, i = Da;
    r = r.formState;
    var f = n.$$IS_SIGNATURE_EQUAL;
    if (r !== null && typeof f == "function") {
      var u = r[1];
      f.call(n, r[2], r[3]) && (a = l !== void 0 ? "p" + l : "k" + ti(
        JSON.stringify([i, null, t]),
        0
      ), u === a && (Tt = t, e = r[0]));
    }
    var c = n.bind(null, e);
    return n = function(h) {
      c(h);
    }, typeof c.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(h) {
      h = c.$$FORM_ACTION(h), l !== void 0 && (l += "", h.action = l);
      var s = h.data;
      return s && (a === null && (a = l !== void 0 ? "p" + l : "k" + ti(
        JSON.stringify([
          i,
          null,
          t
        ]),
        0
      )), s.append("$ACTION_KEY", a)), h;
    }), [e, n, !1];
  }
  var o = n.bind(null, e);
  return [
    e,
    function(h) {
      o(h);
    },
    !1
  ];
}
function Xu(n) {
  var e = or;
  return or += 1, kl === null && (kl = []), Bf(kl, n, e);
}
function Xf() {
  throw Error(P(393));
}
function ut() {
}
var Si = {
  readContext: function(n) {
    return n._currentValue2;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Xu(n);
      if (n.$$typeof === kr)
        return n._currentValue2;
    }
    throw Error(P(438, String(n)));
  },
  useContext: function(n) {
    return Ae(), n._currentValue2;
  },
  useMemo: ki,
  useReducer: Pi,
  useRef: function(n) {
    Le = Ae(), Q = Na();
    var e = Q.memoizedState;
    return e === null ? (n = { current: n }, Q.memoizedState = n) : e;
  },
  useState: function(n) {
    return Pi(Gu, n);
  },
  useInsertionEffect: ut,
  useLayoutEffect: ut,
  useCallback: function(n, e) {
    return ki(function() {
      return n;
    }, e);
  },
  useImperativeHandle: ut,
  useEffect: ut,
  useDebugValue: ut,
  useDeferredValue: function(n, e) {
    return Ae(), e !== void 0 ? e : n;
  },
  useTransition: function() {
    return Ae(), [!1, Uf];
  },
  useId: function() {
    var n = _a.treeContext, e = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + e;
    var l = nr;
    if (l === null) throw Error(P(404));
    return e = Et++, n = "«" + l.idPrefix + "R" + n, 0 < e && (n += "H" + e.toString(32)), n + "»";
  },
  useSyncExternalStore: function(n, e, l) {
    if (l === void 0)
      throw Error(P(407));
    return l();
  },
  useOptimistic: function(n) {
    return Ae(), [n, Gf];
  },
  useActionState: Fi,
  useFormState: Fi,
  useHostTransitionStatus: function() {
    return Ae(), rf;
  },
  useMemoCache: function(n) {
    for (var e = Array(n), l = 0; l < n; l++)
      e[l] = mc;
    return e;
  },
  useCacheRefresh: function() {
    return Xf;
  }
}, nr = null, Zf = {
  getCacheForType: function() {
    throw Error(P(248));
  }
}, Gr, Mi;
function wl(n) {
  if (Gr === void 0)
    try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      Gr = e && e[1] || "", Mi = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + Gr + n + Mi;
}
var Xr = !1;
function Zt(n, e) {
  if (!n || Xr) return "";
  Xr = !0;
  var l = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var t = {
      DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (b) {
                var s = b;
              }
              Reflect.construct(n, [], h);
            } else {
              try {
                h.call();
              } catch (b) {
                s = b;
              }
              n.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              s = b;
            }
            (h = n()) && typeof h.catch == "function" && h.catch(function() {
            });
          }
        } catch (b) {
          if (b && s && typeof b.stack == "string")
            return [b.stack, s.stack];
        }
        return [null, null];
      }
    };
    t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var r = Object.getOwnPropertyDescriptor(
      t.DetermineComponentFrameRoot,
      "name"
    );
    r && r.configurable && Object.defineProperty(
      t.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var a = t.DetermineComponentFrameRoot(), i = a[0], f = a[1];
    if (i && f) {
      var u = i.split(`
`), c = f.split(`
`);
      for (r = t = 0; t < u.length && !u[t].includes("DetermineComponentFrameRoot"); )
        t++;
      for (; r < c.length && !c[r].includes(
        "DetermineComponentFrameRoot"
      ); )
        r++;
      if (t === u.length || r === c.length)
        for (t = u.length - 1, r = c.length - 1; 1 <= t && 0 <= r && u[t] !== c[r]; )
          r--;
      for (; 1 <= t && 0 <= r; t--, r--)
        if (u[t] !== c[r]) {
          if (t !== 1 || r !== 1)
            do
              if (t--, r--, 0 > r || u[t] !== c[r]) {
                var o = `
` + u[t].replace(" at new ", " at ");
                return n.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", n.displayName)), o;
              }
            while (1 <= t && 0 <= r);
          break;
        }
    }
  } finally {
    Xr = !1, Error.prepareStackTrace = l;
  }
  return (l = n ? n.displayName || n.name : "") ? wl(l) : "";
}
function Zu(n) {
  if (typeof n == "string") return wl(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? Zt(n, !0) : Zt(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case Fa:
        return Zt(n.render, !1);
      case Ma:
        return Zt(n.type, !1);
      case Sr:
        var e = n, l = e._payload;
        e = e._init;
        try {
          n = e(l);
        } catch {
          return wl("Lazy");
        }
        return Zu(n);
    }
    if (typeof n.name == "string")
      return l = n.env, wl(
        n.name + (l ? " [" + l + "]" : "")
      );
  }
  switch (n) {
    case Sa:
      return wl("SuspenseList");
    case Fr:
      return wl("Suspense");
  }
  return "";
}
function Jf(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var e = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "[%s] " + n[0],
      " " + e + " "
    ) : n.splice(0, 0, "[%s] ", " " + e + " "), n.unshift(console), e = If.apply(console.error, n), e();
  } else console.error(n);
  return null;
}
function Tl() {
}
function Qf(n, e, l, t, r, a, i, f, u, c, o) {
  var h = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = e, this.rootFormatContext = l, this.progressiveChunkSize = t === void 0 ? 12800 : t, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = h, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = r === void 0 ? Jf : r, this.onPostpone = c === void 0 ? Tl : c, this.onAllReady = a === void 0 ? Tl : a, this.onShellReady = i === void 0 ? Tl : i, this.onShellError = f === void 0 ? Tl : f, this.onFatalError = u === void 0 ? Tl : u, this.formState = o === void 0 ? null : o;
}
function Kf(n, e, l, t, r, a, i, f, u, c, o, h) {
  return e = new Qf(
    e,
    l,
    t,
    r,
    a,
    i,
    f,
    u,
    c,
    o,
    h
  ), l = Fl(
    e,
    0,
    null,
    t,
    !1,
    !1
  ), l.parentFlushed = !0, n = st(
    e,
    null,
    n,
    -1,
    null,
    l,
    null,
    null,
    e.abortableTasks,
    null,
    t,
    null,
    Lf,
    null,
    !1
  ), Sl(n), e.pingedTasks.push(n), e;
}
var fn = null;
function Ju(n, e) {
  n.pingedTasks.push(e), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, Vu(n));
}
function xt(n, e, l, t) {
  return {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: e,
    errorDigest: null,
    contentState: yi(),
    fallbackState: yi(),
    contentPreamble: l,
    fallbackPreamble: t,
    trackedContentKeyPath: null,
    trackedFallbackNode: null
  };
}
function st(n, e, l, t, r, a, i, f, u, c, o, h, s, b, v) {
  n.allPendingTasks++, r === null ? n.pendingRootTasks++ : r.pendingTasks++;
  var y = {
    replay: null,
    node: l,
    childIndex: t,
    ping: function() {
      return Ju(n, y);
    },
    blockedBoundary: r,
    blockedSegment: a,
    blockedPreamble: i,
    hoistableState: f,
    abortSet: u,
    keyPath: c,
    formatContext: o,
    context: h,
    treeContext: s,
    componentStack: b,
    thenableState: e,
    isFallback: v
  };
  return u.add(y), y;
}
function Qu(n, e, l, t, r, a, i, f, u, c, o, h, s, b) {
  n.allPendingTasks++, a === null ? n.pendingRootTasks++ : a.pendingTasks++, l.pendingTasks++;
  var v = {
    replay: l,
    node: t,
    childIndex: r,
    ping: function() {
      return Ju(n, v);
    },
    blockedBoundary: a,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: i,
    abortSet: f,
    keyPath: u,
    formatContext: c,
    context: o,
    treeContext: h,
    componentStack: s,
    thenableState: e,
    isFallback: b
  };
  return f.add(v), v;
}
function Fl(n, e, l, t, r, a) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: e,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: t,
    boundary: l,
    lastPushedText: r,
    textEmbedded: a
  };
}
function Sl(n) {
  var e = n.node;
  if (typeof e == "object" && e !== null)
    switch (e.$$typeof) {
      case Ru:
        n.componentStack = { parent: n.componentStack, type: e.type };
    }
}
function hl(n) {
  var e = {};
  return n && Object.defineProperty(e, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var l = "", t = n;
        do
          l += Zu(t.type), t = t.parent;
        while (t);
        var r = l;
      } catch (a) {
        r = `
Error generating stack: ` + a.message + `
` + a.stack;
      }
      return Object.defineProperty(e, "componentStack", {
        value: r
      }), r;
    }
  }), e;
}
function Yn(n, e, l) {
  if (n = n.onError, e = n(e, l), e == null || typeof e == "string") return e;
}
function Ct(n, e) {
  var l = n.onShellError, t = n.onFatalError;
  l(e), t(e), n.destination !== null ? (n.status = 14, n.destination.destroy(e)) : (n.status = 13, n.fatalError = e);
}
function Ai(n, e, l, t, r, a) {
  var i = e.thenableState;
  for (e.thenableState = null, Le = {}, _a = e, La = n, Da = l, wt = Et = 0, Tt = -1, or = 0, kl = i, n = t(r, a); hr; )
    hr = !1, wt = Et = 0, Tt = -1, or = 0, Ar += 1, Q = null, n = t(r, a);
  return Rt(), n;
}
function Oi(n, e, l, t, r, a, i) {
  var f = !1;
  if (a !== 0 && n.formState !== null) {
    var u = e.blockedSegment;
    if (u !== null) {
      f = !0, u = u.chunks;
      for (var c = 0; c < a; c++)
        c === i ? u.push("<!--F!-->") : u.push("<!--F-->");
    }
  }
  a = e.keyPath, e.keyPath = l, r ? (l = e.treeContext, e.treeContext = ca(l, 1, 0), be(n, e, t, -1), e.treeContext = l) : f ? be(n, e, t, -1) : Qn(n, e, t, -1), e.keyPath = a;
}
function sr(n, e, l, t, r, a) {
  if (typeof t == "function")
    if (t.prototype && t.prototype.isReactComponent) {
      var i = r;
      if ("ref" in r) {
        i = {};
        for (var f in r)
          f !== "ref" && (i[f] = r[f]);
      }
      var u = t.defaultProps;
      if (u) {
        i === r && (i = Sn({}, i, r));
        for (var c in u)
          i[c] === void 0 && (i[c] = u[c]);
      }
      r = i, i = Ri, u = t.contextType, typeof u == "object" && u !== null && (i = u._currentValue2), i = new t(r, i);
      var o = i.state !== void 0 ? i.state : null;
      if (i.updater = xi, i.props = r, i.state = o, u = { queue: [], replace: !1 }, i._reactInternals = u, a = t.contextType, i.context = typeof a == "object" && a !== null ? a._currentValue2 : Ri, a = t.getDerivedStateFromProps, typeof a == "function" && (a = a(r, o), o = a == null ? o : Sn({}, o, a), i.state = o), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function"))
        if (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && xi.enqueueReplaceState(
          i,
          i.state,
          null
        ), u.queue !== null && 0 < u.queue.length)
          if (t = u.queue, a = u.replace, u.queue = null, u.replace = !1, a && t.length === 1)
            i.state = t[0];
          else {
            for (u = a ? t[0] : i.state, o = !0, a = a ? 1 : 0; a < t.length; a++)
              c = t[a], c = typeof c == "function" ? c.call(i, u, r, void 0) : c, c != null && (o ? (o = !1, u = Sn({}, u, c)) : Sn(u, c));
            i.state = u;
          }
        else u.queue = null;
      if (t = i.render(), n.status === 12) throw null;
      r = e.keyPath, e.keyPath = l, Qn(n, e, t, -1), e.keyPath = r;
    } else {
      if (t = Ai(n, e, l, t, r, void 0), n.status === 12) throw null;
      Oi(
        n,
        e,
        l,
        t,
        Et !== 0,
        wt,
        Tt
      );
    }
  else if (typeof t == "string")
    if (i = e.blockedSegment, i === null)
      i = r.children, u = e.formatContext, o = e.keyPath, e.formatContext = ii(u, t, r), e.keyPath = l, be(n, e, i, -1), e.formatContext = u, e.keyPath = o;
    else {
      a = ff(
        i.chunks,
        t,
        r,
        n.resumableState,
        n.renderState,
        e.blockedPreamble,
        e.hoistableState,
        e.formatContext,
        i.lastPushedText,
        e.isFallback
      ), i.lastPushedText = !1, u = e.formatContext, o = e.keyPath, e.keyPath = l, (e.formatContext = ii(u, t, r)).insertionMode === 3 ? (l = Fl(
        n,
        0,
        null,
        e.formatContext,
        !1,
        !1
      ), i.preambleChildren.push(l), l = st(
        n,
        null,
        a,
        -1,
        e.blockedBoundary,
        l,
        e.blockedPreamble,
        e.hoistableState,
        n.abortableTasks,
        e.keyPath,
        e.formatContext,
        e.context,
        e.treeContext,
        e.componentStack,
        e.isFallback
      ), Sl(l), n.pingedTasks.push(l)) : be(n, e, a, -1), e.formatContext = u, e.keyPath = o;
      n: {
        switch (e = i.chunks, n = n.resumableState, t) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break n;
          case "body":
            if (1 >= u.insertionMode) {
              n.hasBody = !0;
              break n;
            }
            break;
          case "html":
            if (u.insertionMode === 0) {
              n.hasHtml = !0;
              break n;
            }
            break;
          case "head":
            if (1 >= u.insertionMode) break n;
        }
        e.push(ul(t));
      }
      i.lastPushedText = !1;
    }
  else {
    switch (t) {
      case Vc:
      case Pu:
      case ku:
      case Cu:
        t = e.keyPath, e.keyPath = l, Qn(n, e, r.children, -1), e.keyPath = t;
        return;
      case Su:
        r.mode !== "hidden" && (t = e.keyPath, e.keyPath = l, Qn(n, e, r.children, -1), e.keyPath = t);
        return;
      case Sa:
        t = e.keyPath, e.keyPath = l, Qn(n, e, r.children, -1), e.keyPath = t;
        return;
      case qc:
      case Kc:
        throw Error(P(343));
      case Fr:
        n: if (e.replay !== null) {
          t = e.keyPath, e.keyPath = l, l = r.children;
          try {
            be(n, e, l, -1);
          } finally {
            e.keyPath = t;
          }
        } else {
          t = e.keyPath;
          var h = e.blockedBoundary;
          a = e.blockedPreamble;
          var s = e.hoistableState;
          c = e.blockedSegment, f = r.fallback, r = r.children;
          var b = /* @__PURE__ */ new Set(), v = 2 > e.formatContext.insertionMode ? xt(
            n,
            b,
            bt(),
            bt()
          ) : xt(n, b, null, null);
          n.trackedPostpones !== null && (v.trackedContentKeyPath = l);
          var y = Fl(
            n,
            c.chunks.length,
            v,
            e.formatContext,
            !1,
            !1
          );
          c.children.push(y), c.lastPushedText = !1;
          var A = Fl(
            n,
            0,
            null,
            e.formatContext,
            !1,
            !1
          );
          if (A.parentFlushed = !0, n.trackedPostpones !== null) {
            i = [l[0], "Suspense Fallback", l[2]], u = [i[1], i[2], [], null], n.trackedPostpones.workingMap.set(i, u), v.trackedFallbackNode = u, e.blockedSegment = y, e.blockedPreamble = v.fallbackPreamble, e.keyPath = i, y.status = 6;
            try {
              be(n, e, f, -1), ua(
                y.chunks,
                n.renderState,
                y.lastPushedText,
                y.textEmbedded
              ), y.status = 1;
            } catch (R) {
              throw y.status = n.status === 12 ? 3 : 4, R;
            } finally {
              e.blockedSegment = c, e.blockedPreamble = a, e.keyPath = t;
            }
            e = st(
              n,
              null,
              r,
              -1,
              v,
              A,
              v.contentPreamble,
              v.contentState,
              e.abortSet,
              l,
              e.formatContext,
              e.context,
              e.treeContext,
              e.componentStack,
              e.isFallback
            ), Sl(e), n.pingedTasks.push(e);
          } else {
            e.blockedBoundary = v, e.blockedPreamble = v.contentPreamble, e.hoistableState = v.contentState, e.blockedSegment = A, e.keyPath = l, A.status = 6;
            try {
              if (be(n, e, r, -1), ua(
                A.chunks,
                n.renderState,
                A.lastPushedText,
                A.textEmbedded
              ), A.status = 1, Pt(v, A), v.pendingTasks === 0 && v.status === 0) {
                v.status = 1, n.pendingRootTasks === 0 && e.blockedPreamble && Wt(n);
                break n;
              }
            } catch (R) {
              v.status = 4, n.status === 12 ? (A.status = 3, i = n.fatalError) : (A.status = 4, i = R), u = hl(e.componentStack), o = Yn(
                n,
                i,
                u
              ), v.errorDigest = o, Ba(n, v);
            } finally {
              e.blockedBoundary = h, e.blockedPreamble = a, e.hoistableState = s, e.blockedSegment = c, e.keyPath = t;
            }
            e = st(
              n,
              null,
              f,
              -1,
              h,
              y,
              v.fallbackPreamble,
              v.fallbackState,
              b,
              [l[0], "Suspense Fallback", l[2]],
              e.formatContext,
              e.context,
              e.treeContext,
              e.componentStack,
              !0
            ), Sl(e), n.pingedTasks.push(e);
          }
        }
        return;
    }
    if (typeof t == "object" && t !== null)
      switch (t.$$typeof) {
        case Fa:
          if ("ref" in r)
            for (v in i = {}, r)
              v !== "ref" && (i[v] = r[v]);
          else i = r;
          t = Ai(
            n,
            e,
            l,
            t.render,
            i,
            a
          ), Oi(
            n,
            e,
            l,
            t,
            Et !== 0,
            wt,
            Tt
          );
          return;
        case Ma:
          sr(n, e, l, t.type, r, a);
          return;
        case Qc:
        case kr:
          if (u = r.children, i = e.keyPath, r = r.value, o = t._currentValue2, t._currentValue2 = r, a = al, al = t = {
            parent: a,
            depth: a === null ? 0 : a.depth + 1,
            context: t,
            parentValue: o,
            value: r
          }, e.context = t, e.keyPath = l, Qn(n, e, u, -1), n = al, n === null) throw Error(P(403));
          n.context._currentValue2 = n.parentValue, n = al = n.parent, e.context = n, e.keyPath = i;
          return;
        case Fu:
          r = r.children, t = r(t._context._currentValue2), r = e.keyPath, e.keyPath = l, Qn(n, e, t, -1), e.keyPath = r;
          return;
        case Sr:
          if (i = t._init, t = i(t._payload), n.status === 12) throw null;
          sr(n, e, l, t, r, a);
          return;
      }
    throw Error(
      P(130, t == null ? t : typeof t, "")
    );
  }
}
function za(n, e, l, t, r) {
  var a = e.replay, i = e.blockedBoundary, f = Fl(
    n,
    0,
    null,
    e.formatContext,
    !1,
    !1
  );
  f.id = l, f.parentFlushed = !0;
  try {
    e.replay = null, e.blockedSegment = f, be(n, e, t, r), f.status = 1, i === null ? n.completedRootSegment = f : (Pt(i, f), i.parentFlushed && n.partialBoundaries.push(i));
  } finally {
    e.replay = a, e.blockedSegment = null;
  }
}
function Qn(n, e, l, t) {
  e.replay !== null && typeof e.replay.slots == "number" ? za(n, e, e.replay.slots, l, t) : (e.node = l, e.childIndex = t, l = e.componentStack, Sl(e), fa(n, e), e.componentStack = l);
}
function fa(n, e) {
  var l = e.node, t = e.childIndex;
  if (l !== null) {
    if (typeof l == "object") {
      switch (l.$$typeof) {
        case Ru:
          var r = l.type, a = l.key, i = l.props;
          l = i.ref;
          var f = l !== void 0 ? l : null, u = cr(r), c = a ?? (t === -1 ? 0 : t);
          if (a = [e.keyPath, u, c], e.replay !== null)
            n: {
              var o = e.replay;
              for (t = o.nodes, l = 0; l < t.length; l++) {
                var h = t[l];
                if (c === h[1]) {
                  if (h.length === 4) {
                    if (u !== null && u !== h[0])
                      throw Error(
                        P(490, h[0], u)
                      );
                    var s = h[2];
                    u = h[3], c = e.node, e.replay = {
                      nodes: s,
                      slots: u,
                      pendingTasks: 1
                    };
                    try {
                      if (sr(n, e, a, r, i, f), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
                        throw Error(P(488));
                      e.replay.pendingTasks--;
                    } catch (w) {
                      if (typeof w == "object" && w !== null && (w === fl || typeof w.then == "function"))
                        throw e.node === c && (e.replay = o), w;
                      e.replay.pendingTasks--, i = hl(e.componentStack), a = e.blockedBoundary, r = w, i = Yn(n, r, i), Ht(
                        n,
                        a,
                        s,
                        u,
                        r,
                        i
                      );
                    }
                    e.replay = o;
                  } else {
                    if (r !== Fr)
                      throw Error(
                        P(
                          490,
                          "Suspense",
                          cr(r) || "Unknown"
                        )
                      );
                    e: {
                      o = void 0, r = h[5], f = h[2], u = h[3], c = h[4] === null ? [] : h[4][2], h = h[4] === null ? null : h[4][3];
                      var b = e.keyPath, v = e.replay, y = e.blockedBoundary, A = e.hoistableState, R = i.children, T = i.fallback, O = /* @__PURE__ */ new Set();
                      i = 2 > e.formatContext.insertionMode ? xt(
                        n,
                        O,
                        bt(),
                        bt()
                      ) : xt(
                        n,
                        O,
                        null,
                        null
                      ), i.parentFlushed = !0, i.rootSegmentID = r, e.blockedBoundary = i, e.hoistableState = i.contentState, e.keyPath = a, e.replay = {
                        nodes: f,
                        slots: u,
                        pendingTasks: 1
                      };
                      try {
                        if (be(n, e, R, -1), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
                          throw Error(P(488));
                        if (e.replay.pendingTasks--, i.pendingTasks === 0 && i.status === 0) {
                          i.status = 1, n.completedBoundaries.push(i);
                          break e;
                        }
                      } catch (w) {
                        i.status = 4, s = hl(e.componentStack), o = Yn(
                          n,
                          w,
                          s
                        ), i.errorDigest = o, e.replay.pendingTasks--, n.clientRenderedBoundaries.push(i);
                      } finally {
                        e.blockedBoundary = y, e.hoistableState = A, e.replay = v, e.keyPath = b;
                      }
                      e = Qu(
                        n,
                        null,
                        {
                          nodes: c,
                          slots: h,
                          pendingTasks: 0
                        },
                        T,
                        -1,
                        y,
                        i.fallbackState,
                        O,
                        [a[0], "Suspense Fallback", a[2]],
                        e.formatContext,
                        e.context,
                        e.treeContext,
                        e.componentStack,
                        !0
                      ), Sl(e), n.pingedTasks.push(e);
                    }
                  }
                  t.splice(l, 1);
                  break n;
                }
              }
            }
          else sr(n, e, a, r, i, f);
          return;
        case xu:
          throw Error(P(257));
        case Sr:
          if (s = l._init, l = s(l._payload), n.status === 12) throw null;
          Qn(n, e, l, t);
          return;
      }
      if (la(l)) {
        ha(n, e, l, t);
        return;
      }
      if (l === null || typeof l != "object" ? s = null : (s = li && l[li] || l["@@iterator"], s = typeof s == "function" ? s : null), s && (s = s.call(l))) {
        if (l = s.next(), !l.done) {
          i = [];
          do
            i.push(l.value), l = s.next();
          while (!l.done);
          ha(n, e, i, t);
        }
        return;
      }
      if (typeof l.then == "function")
        return e.thenableState = null, Qn(n, e, Xu(l), t);
      if (l.$$typeof === kr)
        return Qn(
          n,
          e,
          l._currentValue2,
          t
        );
      throw t = Object.prototype.toString.call(l), Error(
        P(
          31,
          t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
        )
      );
    }
    typeof l == "string" ? (t = e.blockedSegment, t !== null && (t.lastPushedText = Ti(
      t.chunks,
      l,
      n.renderState,
      t.lastPushedText
    ))) : (typeof l == "number" || typeof l == "bigint") && (t = e.blockedSegment, t !== null && (t.lastPushedText = Ti(
      t.chunks,
      "" + l,
      n.renderState,
      t.lastPushedText
    )));
  }
}
function ha(n, e, l, t) {
  var r = e.keyPath;
  if (t !== -1 && (e.keyPath = [e.keyPath, "Fragment", t], e.replay !== null)) {
    for (var a = e.replay, i = a.nodes, f = 0; f < i.length; f++) {
      var u = i[f];
      if (u[1] === t) {
        t = u[2], u = u[3], e.replay = { nodes: t, slots: u, pendingTasks: 1 };
        try {
          if (ha(n, e, l, -1), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
            throw Error(P(488));
          e.replay.pendingTasks--;
        } catch (h) {
          if (typeof h == "object" && h !== null && (h === fl || typeof h.then == "function"))
            throw h;
          e.replay.pendingTasks--, l = hl(e.componentStack);
          var c = e.blockedBoundary, o = h;
          l = Yn(n, o, l), Ht(
            n,
            c,
            t,
            u,
            o,
            l
          );
        }
        e.replay = a, i.splice(f, 1);
        break;
      }
    }
    e.keyPath = r;
    return;
  }
  if (a = e.treeContext, i = l.length, e.replay !== null && (f = e.replay.slots, f !== null && typeof f == "object")) {
    for (t = 0; t < i; t++)
      u = l[t], e.treeContext = ca(a, i, t), c = f[t], typeof c == "number" ? (za(n, e, c, u, t), delete f[t]) : be(n, e, u, t);
    e.treeContext = a, e.keyPath = r;
    return;
  }
  for (f = 0; f < i; f++)
    t = l[f], e.treeContext = ca(a, i, f), be(n, e, t, f);
  e.treeContext = a, e.keyPath = r;
}
function Ba(n, e) {
  n = n.trackedPostpones, n !== null && (e = e.trackedContentKeyPath, e !== null && (e = n.workingMap.get(e), e !== void 0 && (e.length = 4, e[2] = [], e[3] = null)));
}
function Ii(n, e, l) {
  return Qu(
    n,
    l,
    e.replay,
    e.node,
    e.childIndex,
    e.blockedBoundary,
    e.hoistableState,
    e.abortSet,
    e.keyPath,
    e.formatContext,
    e.context,
    e.treeContext,
    e.componentStack,
    e.isFallback
  );
}
function _i(n, e, l) {
  var t = e.blockedSegment, r = Fl(
    n,
    t.chunks.length,
    null,
    e.formatContext,
    t.lastPushedText,
    !0
  );
  return t.children.push(r), t.lastPushedText = !1, st(
    n,
    l,
    e.node,
    e.childIndex,
    e.blockedBoundary,
    r,
    e.blockedPreamble,
    e.hoistableState,
    e.abortSet,
    e.keyPath,
    e.formatContext,
    e.context,
    e.treeContext,
    e.componentStack,
    e.isFallback
  );
}
function be(n, e, l, t) {
  var r = e.formatContext, a = e.context, i = e.keyPath, f = e.treeContext, u = e.componentStack, c = e.blockedSegment;
  if (c === null)
    try {
      return Qn(n, e, l, t);
    } catch (s) {
      if (Rt(), l = s === fl ? fr() : s, typeof l == "object" && l !== null) {
        if (typeof l.then == "function") {
          t = Cl(), n = Ii(n, e, t).ping, l.then(n, n), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, He(a);
          return;
        }
        if (l.message === "Maximum call stack size exceeded") {
          l = Cl(), l = Ii(n, e, l), n.pingedTasks.push(l), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, He(a);
          return;
        }
      }
    }
  else {
    var o = c.children.length, h = c.chunks.length;
    try {
      return Qn(n, e, l, t);
    } catch (s) {
      if (Rt(), c.children.length = o, c.chunks.length = h, l = s === fl ? fr() : s, typeof l == "object" && l !== null) {
        if (typeof l.then == "function") {
          t = Cl(), n = _i(n, e, t).ping, l.then(n, n), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, He(a);
          return;
        }
        if (l.message === "Maximum call stack size exceeded") {
          l = Cl(), l = _i(n, e, l), n.pingedTasks.push(l), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, He(a);
          return;
        }
      }
    }
  }
  throw e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, He(a), l;
}
function Vf(n) {
  var e = n.blockedBoundary;
  n = n.blockedSegment, n !== null && (n.status = 3, oa(this, e, n));
}
function Ht(n, e, l, t, r, a) {
  for (var i = 0; i < l.length; i++) {
    var f = l[i];
    if (f.length === 4)
      Ht(
        n,
        e,
        f[2],
        f[3],
        r,
        a
      );
    else {
      f = f[5];
      var u = n, c = a, o = xt(
        u,
        /* @__PURE__ */ new Set(),
        null,
        null
      );
      o.parentFlushed = !0, o.rootSegmentID = f, o.status = 4, o.errorDigest = c, o.parentFlushed && u.clientRenderedBoundaries.push(o);
    }
  }
  if (l.length = 0, t !== null) {
    if (e === null) throw Error(P(487));
    if (e.status !== 4 && (e.status = 4, e.errorDigest = a, e.parentFlushed && n.clientRenderedBoundaries.push(e)), typeof t == "object") for (var h in t) delete t[h];
  }
}
function Ku(n, e, l) {
  var t = n.blockedBoundary, r = n.blockedSegment;
  if (r !== null) {
    if (r.status === 6) return;
    r.status = 3;
  }
  if (r = hl(n.componentStack), t === null) {
    if (e.status !== 13 && e.status !== 14) {
      if (t = n.replay, t === null) {
        Yn(e, l, r), Ct(e, l);
        return;
      }
      t.pendingTasks--, t.pendingTasks === 0 && 0 < t.nodes.length && (n = Yn(e, l, r), Ht(
        e,
        null,
        t.nodes,
        t.slots,
        l,
        n
      )), e.pendingRootTasks--, e.pendingRootTasks === 0 && Wa(e);
    }
  } else
    t.pendingTasks--, t.status !== 4 && (t.status = 4, n = Yn(e, l, r), t.status = 4, t.errorDigest = n, Ba(e, t), t.parentFlushed && e.clientRenderedBoundaries.push(t)), t.fallbackAbortableTasks.forEach(function(a) {
      return Ku(a, e, l);
    }), t.fallbackAbortableTasks.clear();
  e.allPendingTasks--, e.allPendingTasks === 0 && dr(e);
}
function Ha(n, e) {
  try {
    var l = n.renderState, t = l.onHeaders;
    if (t) {
      var r = l.headers;
      if (r) {
        l.headers = null;
        var a = r.preconnects;
        if (r.fontPreloads && (a && (a += ", "), a += r.fontPreloads), r.highImagePreloads && (a && (a += ", "), a += r.highImagePreloads), !e) {
          var i = l.styles.values(), f = i.next();
          n: for (; 0 < r.remainingCapacity && !f.done; f = i.next())
            for (var u = f.value.sheets.values(), c = u.next(); 0 < r.remainingCapacity && !c.done; c = u.next()) {
              var o = c.value, h = o.props, s = h.href, b = o.props, v = ur(b.href, "style", {
                crossOrigin: b.crossOrigin,
                integrity: b.integrity,
                nonce: b.nonce,
                type: b.type,
                fetchPriority: b.fetchPriority,
                referrerPolicy: b.referrerPolicy,
                media: b.media
              });
              if (0 <= (r.remainingCapacity -= v.length + 2))
                l.resets.style[s] = Jn, a && (a += ", "), a += v, l.resets.style[s] = typeof h.crossOrigin == "string" || typeof h.integrity == "string" ? [h.crossOrigin, h.integrity] : Jn;
              else break n;
            }
        }
        t(a ? { Link: a } : {});
      }
    }
  } catch (y) {
    Yn(n, y, {});
  }
}
function Wa(n) {
  n.trackedPostpones === null && Ha(n, !0), n.trackedPostpones === null && Wt(n), n.onShellError = Tl, n = n.onShellReady, n();
}
function dr(n) {
  Ha(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), Wt(n), n = n.onAllReady, n();
}
function Pt(n, e) {
  if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null && e.children[0].id === -1) {
    var l = e.children[0];
    l.id = e.id, l.parentFlushed = !0, l.status === 1 && Pt(n, l);
  } else n.completedSegments.push(e);
}
function oa(n, e, l) {
  if (e === null) {
    if (l !== null && l.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(P(389));
      n.completedRootSegment = l;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && Wa(n);
  } else
    e.pendingTasks--, e.status !== 4 && (e.pendingTasks === 0 ? (e.status === 0 && (e.status = 1), l !== null && l.parentFlushed && l.status === 1 && Pt(e, l), e.parentFlushed && n.completedBoundaries.push(e), e.status === 1 && (e.fallbackAbortableTasks.forEach(Vf, n), e.fallbackAbortableTasks.clear(), n.pendingRootTasks === 0 && n.trackedPostpones === null && e.contentPreamble !== null && Wt(n))) : l !== null && l.parentFlushed && l.status === 1 && (Pt(e, l), e.completedSegments.length === 1 && e.parentFlushed && n.partialBoundaries.push(e)));
  n.allPendingTasks--, n.allPendingTasks === 0 && dr(n);
}
function Vu(n) {
  if (n.status !== 14 && n.status !== 13) {
    var e = al, l = vl.H;
    vl.H = Si;
    var t = vl.A;
    vl.A = Zf;
    var r = fn;
    fn = n;
    var a = nr;
    nr = n.resumableState;
    try {
      var i = n.pingedTasks, f;
      for (f = 0; f < i.length; f++) {
        var u = i[f], c = n, o = u.blockedSegment;
        if (o === null) {
          var h = c;
          if (u.replay.pendingTasks !== 0) {
            He(u.context);
            try {
              if (typeof u.replay.slots == "number" ? za(
                h,
                u,
                u.replay.slots,
                u.node,
                u.childIndex
              ) : fa(h, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length)
                throw Error(P(488));
              u.replay.pendingTasks--, u.abortSet.delete(u), oa(h, u.blockedBoundary, null);
            } catch (I) {
              Rt();
              var s = I === fl ? fr() : I;
              if (typeof s == "object" && s !== null && typeof s.then == "function") {
                var b = u.ping;
                s.then(b, b), u.thenableState = Cl();
              } else {
                u.replay.pendingTasks--, u.abortSet.delete(u);
                var v = hl(u.componentStack);
                c = void 0;
                var y = h, A = u.blockedBoundary, R = h.status === 12 ? h.fatalError : s, T = u.replay.nodes, O = u.replay.slots;
                c = Yn(
                  y,
                  R,
                  v
                ), Ht(
                  y,
                  A,
                  T,
                  O,
                  R,
                  c
                ), h.pendingRootTasks--, h.pendingRootTasks === 0 && Wa(h), h.allPendingTasks--, h.allPendingTasks === 0 && dr(h);
              }
            } finally {
            }
          }
        } else if (h = void 0, y = o, y.status === 0) {
          y.status = 6, He(u.context);
          var w = y.children.length, z = y.chunks.length;
          try {
            fa(c, u), ua(
              y.chunks,
              c.renderState,
              y.lastPushedText,
              y.textEmbedded
            ), u.abortSet.delete(u), y.status = 1, oa(c, u.blockedBoundary, y);
          } catch (I) {
            Rt(), y.children.length = w, y.chunks.length = z;
            var F = I === fl ? fr() : c.status === 12 ? c.fatalError : I;
            if (typeof F == "object" && F !== null && typeof F.then == "function") {
              y.status = 0, u.thenableState = Cl();
              var x = u.ping;
              F.then(x, x);
            } else {
              var C = hl(u.componentStack);
              u.abortSet.delete(u), y.status = 4;
              var S = u.blockedBoundary;
              h = Yn(
                c,
                F,
                C
              ), S === null ? Ct(c, F) : (S.pendingTasks--, S.status !== 4 && (S.status = 4, S.errorDigest = h, Ba(c, S), S.parentFlushed && c.clientRenderedBoundaries.push(S), c.pendingRootTasks === 0 && c.trackedPostpones === null && S.contentPreamble !== null && Wt(c))), c.allPendingTasks--, c.allPendingTasks === 0 && dr(c);
            }
          } finally {
          }
        }
      }
      i.splice(0, f), n.destination !== null && Or(n, n.destination);
    } catch (I) {
      Yn(n, I, {}), Ct(n, I);
    } finally {
      nr = a, vl.H = l, vl.A = t, l === Si && He(e), fn = r;
    }
  }
}
function Zr(n, e, l) {
  e.preambleChildren.length && l.push(e.preambleChildren);
  for (var t = !1, r = 0; r < e.children.length; r++)
    t = mu(
      n,
      e.children[r],
      l
    ) || t;
  return t;
}
function mu(n, e, l) {
  var t = e.boundary;
  if (t === null)
    return Zr(
      n,
      e,
      l
    );
  var r = t.contentPreamble, a = t.fallbackPreamble;
  if (r === null || a === null) return !1;
  switch (t.status) {
    case 1:
      if (gi(n.renderState, r), e = t.completedSegments[0], !e) throw Error(P(391));
      return Zr(
        n,
        e,
        l
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (e.status === 1)
        return gi(n.renderState, a), Zr(
          n,
          e,
          l
        );
    default:
      return !0;
  }
}
function Wt(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var e = [], l = mu(
      n,
      n.completedRootSegment,
      e
    ), t = n.renderState.preamble;
    (l === !1 || t.headChunks && t.bodyChunks) && (n.completedPreambleSegments = e);
  }
}
function Jt(n, e, l, t) {
  switch (l.parentFlushed = !0, l.status) {
    case 0:
      l.id = n.nextSegmentId++;
    case 5:
      return t = l.id, l.lastPushedText = !1, l.textEmbedded = !1, n = n.renderState, e.push('<template id="'), e.push(n.placeholderPrefix), n = t.toString(16), e.push(n), e.push('"></template>');
    case 1:
      l.status = 2;
      var r = !0, a = l.chunks, i = 0;
      l = l.children;
      for (var f = 0; f < l.length; f++) {
        for (r = l[f]; i < r.index; i++)
          e.push(a[i]);
        r = kt(n, e, r, t);
      }
      for (; i < a.length - 1; i++)
        e.push(a[i]);
      return i < a.length && (r = e.push(a[i])), r;
    default:
      throw Error(P(390));
  }
}
function kt(n, e, l, t) {
  var r = l.boundary;
  if (r === null)
    return Jt(n, e, l, t);
  if (r.parentFlushed = !0, r.status === 4) {
    if (!n.renderState.generateStaticMarkup) {
      var a = r.errorDigest;
      e.push("<!--$!-->"), e.push("<template"), a && (e.push(' data-dgst="'), a = N(a), e.push(a), e.push('"')), e.push("></template>");
    }
    return Jt(n, e, l, t), n.renderState.generateStaticMarkup ? e = !0 : ((n = r.fallbackPreamble) && bi(e, n), e = e.push("<!--/$-->")), e;
  }
  if (r.status !== 1)
    return r.status === 0 && (r.rootSegmentID = n.nextSegmentId++), 0 < r.completedSegments.length && n.partialBoundaries.push(r), vi(
      e,
      n.renderState,
      r.rootSegmentID
    ), t && (r = r.fallbackState, r.styles.forEach(Ei, t), r.stylesheets.forEach(
      wi,
      t
    )), Jt(n, e, l, t), e.push("<!--/$-->");
  if (r.byteSize > n.progressiveChunkSize)
    return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), vi(
      e,
      n.renderState,
      r.rootSegmentID
    ), Jt(n, e, l, t), e.push("<!--/$-->");
  if (t && (l = r.contentState, l.styles.forEach(Ei, t), l.stylesheets.forEach(wi, t)), n.renderState.generateStaticMarkup || e.push("<!--$-->"), l = r.completedSegments, l.length !== 1) throw Error(P(391));
  return kt(n, e, l[0], t), n.renderState.generateStaticMarkup ? e = !0 : ((n = r.contentPreamble) && bi(e, n), e = e.push("<!--/$-->")), e;
}
function Jr(n, e, l, t) {
  return hf(
    e,
    n.renderState,
    l.parentFormatContext,
    l.id
  ), kt(n, e, l, t), of(e, l.parentFormatContext);
}
function Li(n, e, l) {
  for (var t = l.completedSegments, r = 0; r < t.length; r++)
    qu(
      n,
      e,
      l,
      t[r]
    );
  t.length = 0, Bu(
    e,
    l.contentState,
    n.renderState
  ), t = n.resumableState, n = n.renderState, r = l.rootSegmentID, l = l.contentState;
  var a = n.stylesToHoist;
  return n.stylesToHoist = !1, e.push(n.startInlineScript), a ? t.instructions & 2 ? t.instructions & 8 ? e.push('$RR("') : (t.instructions |= 8, e.push(
    `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  )) : (t.instructions |= 10, e.push(
    `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  )) : t.instructions & 2 ? e.push('$RC("') : (t.instructions |= 2, e.push(
    '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
  )), t = r.toString(16), e.push(n.boundaryPrefix), e.push(t), e.push('","'), e.push(n.segmentPrefix), e.push(t), a ? (e.push('",'), Rf(e, l)) : e.push('"'), l = e.push(")<\/script>"), zu(e, n) && l;
}
function qu(n, e, l, t) {
  if (t.status === 2) return !0;
  var r = l.contentState, a = t.id;
  if (a === -1) {
    if ((t.id = l.rootSegmentID) === -1)
      throw Error(P(392));
    return Jr(n, e, t, r);
  }
  return a === l.rootSegmentID ? Jr(n, e, t, r) : (Jr(n, e, t, r), l = n.resumableState, n = n.renderState, e.push(n.startInlineScript), l.instructions & 1 ? e.push('$RS("') : (l.instructions |= 1, e.push(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  )), e.push(n.segmentPrefix), a = a.toString(16), e.push(a), e.push('","'), e.push(n.placeholderPrefix), e.push(a), e = e.push('")<\/script>'), e);
}
function Or(n, e) {
  try {
    if (!(0 < n.pendingRootTasks)) {
      var l, t = n.completedRootSegment;
      if (t !== null) {
        if (t.status === 5) return;
        var r = n.completedPreambleSegments;
        if (r === null) return;
        var a = n.renderState, i = a.preamble, f = i.htmlChunks, u = i.headChunks, c;
        if (f) {
          for (c = 0; c < f.length; c++)
            e.push(f[c]);
          if (u)
            for (c = 0; c < u.length; c++)
              e.push(u[c]);
          else {
            var o = nn("head");
            e.push(o), e.push(">");
          }
        } else if (u)
          for (c = 0; c < u.length; c++)
            e.push(u[c]);
        var h = a.charsetChunks;
        for (c = 0; c < h.length; c++)
          e.push(h[c]);
        h.length = 0, a.preconnects.forEach(ge, e), a.preconnects.clear();
        var s = a.viewportChunks;
        for (c = 0; c < s.length; c++)
          e.push(s[c]);
        s.length = 0, a.fontPreloads.forEach(ge, e), a.fontPreloads.clear(), a.highImagePreloads.forEach(ge, e), a.highImagePreloads.clear(), a.styles.forEach(Ef, e);
        var b = a.importMapChunks;
        for (c = 0; c < b.length; c++)
          e.push(b[c]);
        b.length = 0, a.bootstrapScripts.forEach(ge, e), a.scripts.forEach(ge, e), a.scripts.clear(), a.bulkPreloads.forEach(ge, e), a.bulkPreloads.clear();
        var v = a.hoistableChunks;
        for (c = 0; c < v.length; c++)
          e.push(v[c]);
        for (a = v.length = 0; a < r.length; a++) {
          var y = r[a];
          for (i = 0; i < y.length; i++)
            kt(n, e, y[i], null);
        }
        var A = n.renderState.preamble, R = A.headChunks;
        if (A.htmlChunks || R) {
          var T = ul("head");
          e.push(T);
        }
        var O = A.bodyChunks;
        if (O)
          for (r = 0; r < O.length; r++)
            e.push(O[r]);
        kt(n, e, t, null), n.completedRootSegment = null, zu(e, n.renderState);
      }
      var w = n.renderState;
      t = 0;
      var z = w.viewportChunks;
      for (t = 0; t < z.length; t++)
        e.push(z[t]);
      z.length = 0, w.preconnects.forEach(ge, e), w.preconnects.clear(), w.fontPreloads.forEach(ge, e), w.fontPreloads.clear(), w.highImagePreloads.forEach(
        ge,
        e
      ), w.highImagePreloads.clear(), w.styles.forEach(Tf, e), w.scripts.forEach(ge, e), w.scripts.clear(), w.bulkPreloads.forEach(ge, e), w.bulkPreloads.clear();
      var F = w.hoistableChunks;
      for (t = 0; t < F.length; t++)
        e.push(F[t]);
      F.length = 0;
      var x = n.clientRenderedBoundaries;
      for (l = 0; l < x.length; l++) {
        var C = x[l];
        w = e;
        var S = n.resumableState, I = n.renderState, L = C.rootSegmentID, M = C.errorDigest;
        w.push(I.startInlineScript), S.instructions & 4 ? w.push('$RX("') : (S.instructions |= 4, w.push(
          '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
        )), w.push(I.boundaryPrefix);
        var _ = L.toString(16);
        if (w.push(_), w.push('"'), M) {
          w.push(",");
          var W = df(
            M || ""
          );
          w.push(W);
        }
        var Y = w.push(")<\/script>");
        if (!Y) {
          n.destination = null, l++, x.splice(0, l);
          return;
        }
      }
      x.splice(0, l);
      var J = n.completedBoundaries;
      for (l = 0; l < J.length; l++)
        if (!Li(n, e, J[l])) {
          n.destination = null, l++, J.splice(0, l);
          return;
        }
      J.splice(0, l);
      var V = n.partialBoundaries;
      for (l = 0; l < V.length; l++) {
        var Gn = V[l];
        n: {
          x = n, C = e;
          var m = Gn.completedSegments;
          for (Y = 0; Y < m.length; Y++)
            if (!qu(
              x,
              C,
              Gn,
              m[Y]
            )) {
              Y++, m.splice(0, Y);
              var tn = !1;
              break n;
            }
          m.splice(0, Y), tn = Bu(
            C,
            Gn.contentState,
            x.renderState
          );
        }
        if (!tn) {
          n.destination = null, l++, V.splice(0, l);
          return;
        }
      }
      V.splice(0, l);
      var rn = n.completedBoundaries;
      for (l = 0; l < rn.length; l++)
        if (!Li(n, e, rn[l])) {
          n.destination = null, l++, rn.splice(0, l);
          return;
        }
      rn.splice(0, l);
    }
  } finally {
    n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.flushScheduled = !1, l = n.resumableState, l.hasBody && (V = ul("body"), e.push(V)), l.hasHtml && (l = ul("html"), e.push(l)), n.status = 14, e.push(null), n.destination = null);
  }
}
function dl(n) {
  if (n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null) {
    n.flushScheduled = !0;
    var e = n.destination;
    e ? Or(n, e) : n.flushScheduled = !1;
  }
}
function mf(n, e) {
  if (n.status === 13)
    n.status = 14, e.destroy(n.fatalError);
  else if (n.status !== 14 && n.destination === null) {
    n.destination = e;
    try {
      Or(n, e);
    } catch (l) {
      Yn(n, l, {}), Ct(n, l);
    }
  }
}
function qf(n, e) {
  (n.status === 11 || n.status === 10) && (n.status = 12);
  try {
    var l = n.abortableTasks;
    if (0 < l.size) {
      var t = e === void 0 ? Error(P(432)) : typeof e == "object" && e !== null && typeof e.then == "function" ? Error(P(530)) : e;
      n.fatalError = t, l.forEach(function(r) {
        return Ku(r, n, t);
      }), l.clear();
    }
    n.destination !== null && Or(n, n.destination);
  } catch (r) {
    Yn(n, r, {}), Ct(n, r);
  }
}
function pf() {
}
function pu(n, e, l, t) {
  var r = !1, a = null, i = "", f = !1;
  if (e = af(e ? e.identifierPrefix : void 0), n = Kf(
    n,
    e,
    Of(e, l),
    kn(0, null, 0),
    1 / 0,
    pf,
    void 0,
    function() {
      f = !0;
    },
    void 0,
    void 0,
    void 0
  ), n.flushScheduled = n.destination !== null, Vu(n), n.status === 10 && (n.status = 11), n.trackedPostpones === null && Ha(n, n.pendingRootTasks === 0), qf(n, t), mf(n, {
    push: function(u) {
      return u !== null && (i += u), !0;
    },
    destroy: function(u) {
      r = !0, a = u;
    }
  }), r && a !== t) throw a;
  if (!f) throw Error(P(426));
  return i;
}
Pr.renderToStaticMarkup = function(n, e) {
  return pu(
    n,
    e,
    !0,
    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
};
Pr.renderToString = function(n, e) {
  return pu(
    n,
    e,
    !1,
    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
};
Pr.version = "19.1.1";
var Ir = {};
/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya = cn, jf = wu;
function k(n) {
  var e = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var l = 2; l < arguments.length; l++)
      e += "&args[]=" + encodeURIComponent(arguments[l]);
  }
  return "Minified React error #" + n + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ju = Symbol.for("react.transitional.element"), $u = Symbol.for("react.portal"), nc = Symbol.for("react.fragment"), ec = Symbol.for("react.strict_mode"), lc = Symbol.for("react.profiler"), $f = Symbol.for("react.provider"), tc = Symbol.for("react.consumer"), _r = Symbol.for("react.context"), Ua = Symbol.for("react.forward_ref"), Lr = Symbol.for("react.suspense"), Ga = Symbol.for("react.suspense_list"), Xa = Symbol.for("react.memo"), Dr = Symbol.for("react.lazy"), nh = Symbol.for("react.scope"), rc = Symbol.for("react.activity"), eh = Symbol.for("react.legacy_hidden"), lh = Symbol.for("react.memo_cache_sentinel"), th = Symbol.for("react.view_transition"), Di = Symbol.iterator, sa = Array.isArray;
function Ni(n, e) {
  var l = n.length & 3, t = n.length - l, r = e;
  for (e = 0; e < t; ) {
    var a = n.charCodeAt(e) & 255 | (n.charCodeAt(++e) & 255) << 8 | (n.charCodeAt(++e) & 255) << 16 | (n.charCodeAt(++e) & 255) << 24;
    ++e, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, r ^= a, r = r << 13 | r >>> 19, r = 5 * (r & 65535) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
  }
  switch (a = 0, l) {
    case 3:
      a ^= (n.charCodeAt(e + 2) & 255) << 16;
    case 2:
      a ^= (n.charCodeAt(e + 1) & 255) << 8;
    case 1:
      a ^= n.charCodeAt(e) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, r ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
  }
  return r ^= n.length, r ^= r >>> 16, r = 2246822507 * (r & 65535) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (r & 65535) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^ r >>> 16) >>> 0;
}
var ac = new MessageChannel(), ic = [];
ac.port1.onmessage = function() {
  var n = ic.shift();
  n && n();
};
function Za(n) {
  ic.push(n), ac.port2.postMessage(null);
}
function rh(n) {
  setTimeout(function() {
    throw n;
  });
}
var ah = Promise, uc = typeof queueMicrotask == "function" ? queueMicrotask : function(n) {
  ah.resolve(null).then(n).catch(rh);
}, Bn = null, Hn = 0;
function d(n, e) {
  if (e.byteLength !== 0)
    if (2048 < e.byteLength)
      0 < Hn && (n.enqueue(
        new Uint8Array(Bn.buffer, 0, Hn)
      ), Bn = new Uint8Array(2048), Hn = 0), n.enqueue(e);
    else {
      var l = Bn.length - Hn;
      l < e.byteLength && (l === 0 ? n.enqueue(Bn) : (Bn.set(e.subarray(0, l), Hn), n.enqueue(Bn), e = e.subarray(l)), Bn = new Uint8Array(2048), Hn = 0), Bn.set(e, Hn), Hn += e.byteLength;
    }
}
function X(n, e) {
  return d(n, e), !0;
}
function Qr(n) {
  Bn && 0 < Hn && (n.enqueue(new Uint8Array(Bn.buffer, 0, Hn)), Bn = null, Hn = 0);
}
var cc = new TextEncoder();
function E(n) {
  return cc.encode(n);
}
function g(n) {
  return cc.encode(n);
}
function fc(n, e) {
  typeof n.error == "function" ? n.error(e) : n.close();
}
var Mn = Object.assign, p = Object.prototype.hasOwnProperty, ih = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), zi = {}, Bi = {};
function Ja(n) {
  return p.call(Bi, n) ? !0 : p.call(zi, n) ? !1 : ih.test(n) ? Bi[n] = !0 : (zi[n] = !0, !1);
}
var uh = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), ch = /* @__PURE__ */ new Map([
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
]), fh = /["'&<>]/;
function D(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var e = fh.exec(n);
  if (e) {
    var l = "", t, r = 0;
    for (t = e.index; t < n.length; t++) {
      switch (n.charCodeAt(t)) {
        case 34:
          e = "&quot;";
          break;
        case 38:
          e = "&amp;";
          break;
        case 39:
          e = "&#x27;";
          break;
        case 60:
          e = "&lt;";
          break;
        case 62:
          e = "&gt;";
          break;
        default:
          continue;
      }
      r !== t && (l += n.slice(r, t)), r = t + 1, l += e;
    }
    n = r !== t ? l + n.slice(r, t) : l;
  }
  return n;
}
var hh = /([A-Z])/g, oh = /^ms-/, sh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ft(n) {
  return sh.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var yl = Ya.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hc = jf.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, dh = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, De = hc.d;
hc.d = {
  f: De.f,
  r: De.r,
  D: Ko,
  C: Vo,
  L: mo,
  m: qo,
  X: jo,
  S: po,
  M: $o
};
var Kn = [];
g('"></template>');
var gh = g("<script>"), oc = g("<\/script>"), vh = g('<script src="'), bh = g('<script type="module" src="'), Hi = g('" nonce="'), Wi = g('" integrity="'), Yi = g('" crossorigin="'), Ui = g('" async=""><\/script>'), da = /(<\/|<)(s)(cript)/gi;
function ga(n, e, l, t) {
  return "" + e + (l === "s" ? "\\u0073" : "\\u0053") + t;
}
var yh = g(
  '<script type="importmap">'
), Eh = g("<\/script>");
function sc(n, e, l, t, r, a) {
  var i = e === void 0 ? gh : g(
    '<script nonce="' + D(e) + '">'
  ), f = n.idPrefix;
  l = [];
  var u = n.bootstrapScriptContent, c = n.bootstrapScripts, o = n.bootstrapModules;
  if (u !== void 0 && l.push(
    i,
    E(
      ("" + u).replace(da, ga)
    ),
    oc
  ), u = [], t !== void 0 && (u.push(yh), u.push(
    E(
      ("" + JSON.stringify(t)).replace(da, ga)
    )
  ), u.push(Eh)), t = r ? {
    preconnects: "",
    fontPreloads: "",
    highImagePreloads: "",
    remainingCapacity: 2 + (typeof a == "number" ? a : 2e3)
  } : null, r = {
    placeholderPrefix: g(f + "P:"),
    segmentPrefix: g(f + "S:"),
    boundaryPrefix: g(f + "B:"),
    startInlineScript: i,
    preamble: St(),
    externalRuntimeScript: null,
    bootstrapChunks: l,
    importMapChunks: u,
    onHeaders: r,
    headers: t,
    resets: {
      font: {},
      dns: {},
      connect: { default: {}, anonymous: {}, credentials: {} },
      image: {},
      style: {}
    },
    charsetChunks: [],
    viewportChunks: [],
    hoistableChunks: [],
    preconnects: /* @__PURE__ */ new Set(),
    fontPreloads: /* @__PURE__ */ new Set(),
    highImagePreloads: /* @__PURE__ */ new Set(),
    styles: /* @__PURE__ */ new Map(),
    bootstrapScripts: /* @__PURE__ */ new Set(),
    scripts: /* @__PURE__ */ new Set(),
    bulkPreloads: /* @__PURE__ */ new Set(),
    preloads: {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    },
    nonce: e,
    hoistableState: null,
    stylesToHoist: !1
  }, c !== void 0)
    for (t = 0; t < c.length; t++) {
      var h = c[t];
      f = i = void 0, u = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: e
      }, typeof h == "string" ? u.href = a = h : (u.href = a = h.src, u.integrity = f = typeof h.integrity == "string" ? h.integrity : void 0, u.crossOrigin = i = typeof h == "string" || h.crossOrigin == null ? void 0 : h.crossOrigin === "use-credentials" ? "use-credentials" : ""), h = n;
      var s = a;
      h.scriptResources[s] = null, h.moduleScriptResources[s] = null, h = [], bn(h, u), r.bootstrapScripts.add(h), l.push(
        vh,
        E(D(a))
      ), e && l.push(
        Hi,
        E(D(e))
      ), typeof f == "string" && l.push(
        Wi,
        E(D(f))
      ), typeof i == "string" && l.push(
        Yi,
        E(D(i))
      ), l.push(Ui);
    }
  if (o !== void 0)
    for (c = 0; c < o.length; c++)
      u = o[c], i = a = void 0, f = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: e
      }, typeof u == "string" ? f.href = t = u : (f.href = t = u.src, f.integrity = i = typeof u.integrity == "string" ? u.integrity : void 0, f.crossOrigin = a = typeof u == "string" || u.crossOrigin == null ? void 0 : u.crossOrigin === "use-credentials" ? "use-credentials" : ""), u = n, h = t, u.scriptResources[h] = null, u.moduleScriptResources[h] = null, u = [], bn(u, f), r.bootstrapScripts.add(u), l.push(
        bh,
        E(D(t))
      ), e && l.push(
        Hi,
        E(D(e))
      ), typeof i == "string" && l.push(
        Wi,
        E(D(i))
      ), typeof a == "string" && l.push(
        Yi,
        E(D(a))
      ), l.push(Ui);
  return r;
}
function dc(n, e, l, t, r) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: l,
    bootstrapScripts: t,
    bootstrapModules: r,
    instructions: 0,
    hasBody: !1,
    hasHtml: !1,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {}
  };
}
function St() {
  return {
    htmlChunks: null,
    headChunks: null,
    bodyChunks: null,
    contribution: 0
  };
}
function Fn(n, e, l) {
  return {
    insertionMode: n,
    selectedValue: e,
    tagScope: l
  };
}
function gc(n) {
  return Fn(
    n === "http://www.w3.org/2000/svg" ? 4 : n === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
    null,
    0
  );
}
function Gi(n, e, l) {
  switch (e) {
    case "noscript":
      return Fn(2, null, n.tagScope | 1);
    case "select":
      return Fn(
        2,
        l.value != null ? l.value : l.defaultValue,
        n.tagScope
      );
    case "svg":
      return Fn(4, null, n.tagScope);
    case "picture":
      return Fn(2, null, n.tagScope | 2);
    case "math":
      return Fn(5, null, n.tagScope);
    case "foreignObject":
      return Fn(2, null, n.tagScope);
    case "table":
      return Fn(6, null, n.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return Fn(7, null, n.tagScope);
    case "colgroup":
      return Fn(9, null, n.tagScope);
    case "tr":
      return Fn(8, null, n.tagScope);
    case "head":
      if (2 > n.insertionMode)
        return Fn(3, null, n.tagScope);
      break;
    case "html":
      if (n.insertionMode === 0)
        return Fn(1, null, n.tagScope);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? Fn(2, null, n.tagScope) : n;
}
var Ie = g("<!-- -->");
function Xi(n, e, l, t) {
  return e === "" ? t : (t && n.push(Ie), n.push(E(D(e))), !0);
}
var Zi = /* @__PURE__ */ new Map(), wh = g(' style="'), Ji = g(":"), Th = g(";");
function vc(n, e) {
  if (typeof e != "object") throw Error(k(62));
  var l = !0, t;
  for (t in e)
    if (p.call(e, t)) {
      var r = e[t];
      if (r != null && typeof r != "boolean" && r !== "") {
        if (t.indexOf("--") === 0) {
          var a = E(D(t));
          r = E(
            D(("" + r).trim())
          );
        } else
          a = Zi.get(t), a === void 0 && (a = g(
            D(
              t.replace(hh, "-$1").toLowerCase().replace(oh, "-ms-")
            )
          ), Zi.set(t, a)), r = typeof r == "number" ? r === 0 || uh.has(t) ? E("" + r) : E(r + "px") : E(
            D(("" + r).trim())
          );
        l ? (l = !1, n.push(
          wh,
          a,
          Ji,
          r
        )) : n.push(Th, a, Ji, r);
      }
    }
  l || n.push(Wn);
}
var Pn = g(" "), Zn = g('="'), Wn = g('"'), va = g('=""');
function ba(n, e, l) {
  l && typeof l != "function" && typeof l != "symbol" && n.push(Pn, E(e), va);
}
function dn(n, e, l) {
  typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && n.push(
    Pn,
    E(e),
    Zn,
    E(D(l)),
    Wn
  );
}
var bc = g(
  D(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  )
), yc = g('<input type="hidden"');
function Kr(n, e) {
  this.push(yc), Ec(n), dn(this, "name", e), dn(this, "value", n), this.push(Mt);
}
function Ec(n) {
  if (typeof n != "string") throw Error(k(480));
}
function wc(n, e) {
  if (typeof e.$$FORM_ACTION == "function") {
    var l = n.nextFormID++;
    n = n.idPrefix + l;
    try {
      var t = e.$$FORM_ACTION(n);
      if (t) {
        var r = t.data;
        r != null && r.forEach(Ec);
      }
      return t;
    } catch (a) {
      if (typeof a == "object" && a !== null && typeof a.then == "function")
        throw a;
    }
  }
  return null;
}
function Qi(n, e, l, t, r, a, i, f) {
  var u = null;
  if (typeof t == "function") {
    var c = wc(e, t);
    c !== null ? (f = c.name, t = c.action || "", r = c.encType, a = c.method, i = c.target, u = c.data) : (n.push(
      Pn,
      E("formAction"),
      Zn,
      bc,
      Wn
    ), i = a = r = t = f = null, Tc(e, l));
  }
  return f != null && G(n, "name", f), t != null && G(n, "formAction", t), r != null && G(n, "formEncType", r), a != null && G(n, "formMethod", a), i != null && G(n, "formTarget", i), u;
}
function G(n, e, l) {
  switch (e) {
    case "className":
      dn(n, "class", l);
      break;
    case "tabIndex":
      dn(n, "tabindex", l);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      dn(n, e, l);
      break;
    case "style":
      vc(n, l);
      break;
    case "src":
    case "href":
      if (l === "") break;
    case "action":
    case "formAction":
      if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean")
        break;
      l = Ft("" + l), n.push(
        Pn,
        E(e),
        Zn,
        E(D(l)),
        Wn
      );
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      ba(n, e.toLowerCase(), l);
      break;
    case "xlinkHref":
      if (typeof l == "function" || typeof l == "symbol" || typeof l == "boolean")
        break;
      l = Ft("" + l), n.push(
        Pn,
        E("xlink:href"),
        Zn,
        E(D(l)),
        Wn
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
      typeof l != "function" && typeof l != "symbol" && n.push(
        Pn,
        E(e),
        Zn,
        E(D(l)),
        Wn
      );
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
      l && typeof l != "function" && typeof l != "symbol" && n.push(
        Pn,
        E(e),
        va
      );
      break;
    case "capture":
    case "download":
      l === !0 ? n.push(
        Pn,
        E(e),
        va
      ) : l !== !1 && typeof l != "function" && typeof l != "symbol" && n.push(
        Pn,
        E(e),
        Zn,
        E(D(l)),
        Wn
      );
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l && n.push(
        Pn,
        E(e),
        Zn,
        E(D(l)),
        Wn
      );
      break;
    case "rowSpan":
    case "start":
      typeof l == "function" || typeof l == "symbol" || isNaN(l) || n.push(
        Pn,
        E(e),
        Zn,
        E(D(l)),
        Wn
      );
      break;
    case "xlinkActuate":
      dn(n, "xlink:actuate", l);
      break;
    case "xlinkArcrole":
      dn(n, "xlink:arcrole", l);
      break;
    case "xlinkRole":
      dn(n, "xlink:role", l);
      break;
    case "xlinkShow":
      dn(n, "xlink:show", l);
      break;
    case "xlinkTitle":
      dn(n, "xlink:title", l);
      break;
    case "xlinkType":
      dn(n, "xlink:type", l);
      break;
    case "xmlBase":
      dn(n, "xml:base", l);
      break;
    case "xmlLang":
      dn(n, "xml:lang", l);
      break;
    case "xmlSpace":
      dn(n, "xml:space", l);
      break;
    default:
      if ((!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = ch.get(e) || e, Ja(e))) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var t = e.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") return;
        }
        n.push(
          Pn,
          E(e),
          Zn,
          E(D(l)),
          Wn
        );
      }
  }
}
var gn = g(">"), Mt = g("/>");
function zn(n, e, l) {
  if (e != null) {
    if (l != null) throw Error(k(60));
    if (typeof e != "object" || !("__html" in e))
      throw Error(k(61));
    e = e.__html, e != null && n.push(E("" + e));
  }
}
function Rh(n) {
  var e = "";
  return Ya.Children.forEach(n, function(l) {
    l != null && (e += l);
  }), e;
}
var Vr = g(' selected=""'), xh = g(
  `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
);
function Tc(n, e) {
  !(n.instructions & 16) && (n.instructions |= 16, e.bootstrapChunks.unshift(
    e.startInlineScript,
    xh,
    oc
  ));
}
var Ch = g("<!--F!-->"), Ph = g("<!--F-->");
function bn(n, e) {
  n.push(en("link"));
  for (var l in e)
    if (p.call(e, l)) {
      var t = e[l];
      if (t != null)
        switch (l) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(k(399, "link"));
          default:
            G(n, l, t);
        }
    }
  return n.push(Mt), null;
}
var Ki = /(<\/|<)(s)(tyle)/gi;
function Vi(n, e, l, t) {
  return "" + e + (l === "s" ? "\\73 " : "\\53 ") + t;
}
function El(n, e, l) {
  n.push(en(l));
  for (var t in e)
    if (p.call(e, t)) {
      var r = e[t];
      if (r != null)
        switch (t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(k(399, l));
          default:
            G(n, t, r);
        }
    }
  return n.push(Mt), null;
}
function mi(n, e) {
  n.push(en("title"));
  var l = null, t = null, r;
  for (r in e)
    if (p.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            G(n, r, a);
        }
    }
  return n.push(gn), e = Array.isArray(l) ? 2 > l.length ? l[0] : null : l, typeof e != "function" && typeof e != "symbol" && e !== null && e !== void 0 && n.push(E(D("" + e))), zn(n, t, l), n.push(cl("title")), null;
}
function gr(n, e) {
  n.push(en("script"));
  var l = null, t = null, r;
  for (r in e)
    if (p.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            G(n, r, a);
        }
    }
  return n.push(gn), zn(n, t, l), typeof l == "string" && n.push(
    E(("" + l).replace(da, ga))
  ), n.push(cl("script")), null;
}
function mr(n, e, l) {
  n.push(en(l));
  var t = l = null, r;
  for (r in e)
    if (p.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            G(n, r, a);
        }
    }
  return n.push(gn), zn(n, t, l), l;
}
function Qt(n, e, l) {
  n.push(en(l));
  var t = l = null, r;
  for (r in e)
    if (p.call(e, r)) {
      var a = e[r];
      if (a != null)
        switch (r) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            t = a;
            break;
          default:
            G(n, r, a);
        }
    }
  return n.push(gn), zn(n, t, l), typeof l == "string" ? (n.push(E(D(l))), null) : l;
}
var qr = g(`
`), kh = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qi = /* @__PURE__ */ new Map();
function en(n) {
  var e = qi.get(n);
  if (e === void 0) {
    if (!kh.test(n))
      throw Error(k(65, n));
    e = g("<" + n), qi.set(n, e);
  }
  return e;
}
var Fh = g("<!DOCTYPE html>");
function Sh(n, e, l, t, r, a, i, f, u, c) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(en("a"));
      var o = null, h = null, s;
      for (s in l)
        if (p.call(l, s)) {
          var b = l[s];
          if (b != null)
            switch (s) {
              case "children":
                o = b;
                break;
              case "dangerouslySetInnerHTML":
                h = b;
                break;
              case "href":
                b === "" ? dn(n, "href", "") : G(n, s, b);
                break;
              default:
                G(n, s, b);
            }
        }
      if (n.push(gn), zn(n, h, o), typeof o == "string") {
        n.push(E(D(o)));
        var v = null;
      } else v = o;
      return v;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(en("select"));
      var y = null, A = null, R;
      for (R in l)
        if (p.call(l, R)) {
          var T = l[R];
          if (T != null)
            switch (R) {
              case "children":
                y = T;
                break;
              case "dangerouslySetInnerHTML":
                A = T;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                G(
                  n,
                  R,
                  T
                );
            }
        }
      return n.push(gn), zn(n, A, y), y;
    case "option":
      var O = f.selectedValue;
      n.push(en("option"));
      var w = null, z = null, F = null, x = null, C;
      for (C in l)
        if (p.call(l, C)) {
          var S = l[C];
          if (S != null)
            switch (C) {
              case "children":
                w = S;
                break;
              case "selected":
                F = S;
                break;
              case "dangerouslySetInnerHTML":
                x = S;
                break;
              case "value":
                z = S;
              default:
                G(
                  n,
                  C,
                  S
                );
            }
        }
      if (O != null) {
        var I = z !== null ? "" + z : Rh(w);
        if (sa(O)) {
          for (var L = 0; L < O.length; L++)
            if ("" + O[L] === I) {
              n.push(Vr);
              break;
            }
        } else
          "" + O === I && n.push(Vr);
      } else F && n.push(Vr);
      return n.push(gn), zn(n, x, w), w;
    case "textarea":
      n.push(en("textarea"));
      var M = null, _ = null, W = null, Y;
      for (Y in l)
        if (p.call(l, Y)) {
          var J = l[Y];
          if (J != null)
            switch (Y) {
              case "children":
                W = J;
                break;
              case "value":
                M = J;
                break;
              case "defaultValue":
                _ = J;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(k(91));
              default:
                G(
                  n,
                  Y,
                  J
                );
            }
        }
      if (M === null && _ !== null && (M = _), n.push(gn), W != null) {
        if (M != null) throw Error(k(92));
        if (sa(W)) {
          if (1 < W.length)
            throw Error(k(93));
          M = "" + W[0];
        }
        M = "" + W;
      }
      return typeof M == "string" && M[0] === `
` && n.push(qr), M !== null && n.push(
        E(D("" + M))
      ), null;
    case "input":
      n.push(en("input"));
      var V = null, Gn = null, m = null, tn = null, rn = null, mn = null, qn = null, An = null, Xn = null, ln;
      for (ln in l)
        if (p.call(l, ln)) {
          var Z = l[ln];
          if (Z != null)
            switch (ln) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(k(399, "input"));
              case "name":
                V = Z;
                break;
              case "formAction":
                Gn = Z;
                break;
              case "formEncType":
                m = Z;
                break;
              case "formMethod":
                tn = Z;
                break;
              case "formTarget":
                rn = Z;
                break;
              case "defaultChecked":
                Xn = Z;
                break;
              case "defaultValue":
                qn = Z;
                break;
              case "checked":
                An = Z;
                break;
              case "value":
                mn = Z;
                break;
              default:
                G(
                  n,
                  ln,
                  Z
                );
            }
        }
      var pn = Qi(
        n,
        t,
        r,
        Gn,
        m,
        tn,
        rn,
        V
      );
      return An !== null ? ba(n, "checked", An) : Xn !== null && ba(n, "checked", Xn), mn !== null ? G(n, "value", mn) : qn !== null && G(n, "value", qn), n.push(Mt), pn != null && pn.forEach(Kr, n), null;
    case "button":
      n.push(en("button"));
      var on = null, ze = null, Be = null, Ze = null, _l = null, Ll = null, Dl = null, jn;
      for (jn in l)
        if (p.call(l, jn)) {
          var $ = l[jn];
          if ($ != null)
            switch (jn) {
              case "children":
                on = $;
                break;
              case "dangerouslySetInnerHTML":
                ze = $;
                break;
              case "name":
                Be = $;
                break;
              case "formAction":
                Ze = $;
                break;
              case "formEncType":
                _l = $;
                break;
              case "formMethod":
                Ll = $;
                break;
              case "formTarget":
                Dl = $;
                break;
              default:
                G(
                  n,
                  jn,
                  $
                );
            }
        }
      var Nl = Qi(
        n,
        t,
        r,
        Ze,
        _l,
        Ll,
        Dl,
        Be
      );
      if (n.push(gn), Nl != null && Nl.forEach(Kr, n), zn(n, ze, on), typeof on == "string") {
        n.push(
          E(D(on))
        );
        var zl = null;
      } else zl = on;
      return zl;
    case "form":
      n.push(en("form"));
      var $n = null, Bl = null, yn = null, ne = null, ee = null, le = null, te;
      for (te in l)
        if (p.call(l, te)) {
          var an = l[te];
          if (an != null)
            switch (te) {
              case "children":
                $n = an;
                break;
              case "dangerouslySetInnerHTML":
                Bl = an;
                break;
              case "action":
                yn = an;
                break;
              case "encType":
                ne = an;
                break;
              case "method":
                ee = an;
                break;
              case "target":
                le = an;
                break;
              default:
                G(
                  n,
                  te,
                  an
                );
            }
        }
      var Je = null, Qe = null;
      if (typeof yn == "function") {
        var En = wc(
          t,
          yn
        );
        En !== null ? (yn = En.action || "", ne = En.encType, ee = En.method, le = En.target, Je = En.data, Qe = En.name) : (n.push(
          Pn,
          E("action"),
          Zn,
          bc,
          Wn
        ), le = ee = ne = yn = null, Tc(t, r));
      }
      if (yn != null && G(n, "action", yn), ne != null && G(n, "encType", ne), ee != null && G(n, "method", ee), le != null && G(n, "target", le), n.push(gn), Qe !== null && (n.push(yc), dn(n, "name", Qe), n.push(Mt), Je != null && Je.forEach(Kr, n)), zn(n, Bl, $n), typeof $n == "string") {
        n.push(
          E(D($n))
        );
        var Hl = null;
      } else Hl = $n;
      return Hl;
    case "menuitem":
      n.push(en("menuitem"));
      for (var Ee in l)
        if (p.call(l, Ee)) {
          var Wl = l[Ee];
          if (Wl != null)
            switch (Ee) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(k(400));
              default:
                G(
                  n,
                  Ee,
                  Wl
                );
            }
        }
      return n.push(gn), null;
    case "object":
      n.push(en("object"));
      var re = null, Yl = null, ae;
      for (ae in l)
        if (p.call(l, ae)) {
          var ie = l[ae];
          if (ie != null)
            switch (ae) {
              case "children":
                re = ie;
                break;
              case "dangerouslySetInnerHTML":
                Yl = ie;
                break;
              case "data":
                var Ul = Ft("" + ie);
                if (Ul === "") break;
                n.push(
                  Pn,
                  E("data"),
                  Zn,
                  E(D(Ul)),
                  Wn
                );
                break;
              default:
                G(
                  n,
                  ae,
                  ie
                );
            }
        }
      if (n.push(gn), zn(n, Yl, re), typeof re == "string") {
        n.push(
          E(D(re))
        );
        var Gl = null;
      } else Gl = re;
      return Gl;
    case "title":
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null)
        var Ke = mi(
          n,
          l
        );
      else
        c ? Ke = null : (mi(r.hoistableChunks, l), Ke = void 0);
      return Ke;
    case "link":
      var Wr = l.rel, un = l.href, we = l.precedence;
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null || typeof Wr != "string" || typeof un != "string" || un === "") {
        bn(n, l);
        var ue = null;
      } else if (l.rel === "stylesheet")
        if (typeof we != "string" || l.disabled != null || l.onLoad || l.onError)
          ue = bn(
            n,
            l
          );
        else {
          var On = r.styles.get(we), Te = t.styleResources.hasOwnProperty(un) ? t.styleResources[un] : void 0;
          if (Te !== null) {
            t.styleResources[un] = null, On || (On = {
              precedence: E(D(we)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, r.styles.set(we, On));
            var Re = {
              state: 0,
              props: Mn({}, l, {
                "data-precedence": l.precedence,
                precedence: null
              })
            };
            if (Te) {
              Te.length === 2 && At(Re.props, Te);
              var Ve = r.preloads.stylesheets.get(un);
              Ve && 0 < Ve.length ? Ve.length = 0 : Re.state = 1;
            }
            On.sheets.set(un, Re), i && i.stylesheets.add(Re);
          } else if (On) {
            var Xl = On.sheets.get(un);
            Xl && i && i.stylesheets.add(Xl);
          }
          u && n.push(Ie), ue = null;
        }
      else
        l.onLoad || l.onError ? ue = bn(
          n,
          l
        ) : (u && n.push(Ie), ue = c ? null : bn(r.hoistableChunks, l));
      return ue;
    case "script":
      var me = l.async;
      if (typeof l.src != "string" || !l.src || !me || typeof me == "function" || typeof me == "symbol" || l.onLoad || l.onError || f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null)
        var Zl = gr(
          n,
          l
        );
      else {
        var xe = l.src;
        if (l.type === "module")
          var Ce = t.moduleScriptResources, Jl = r.preloads.moduleScripts;
        else
          Ce = t.scriptResources, Jl = r.preloads.scripts;
        var Pe = Ce.hasOwnProperty(xe) ? Ce[xe] : void 0;
        if (Pe !== null) {
          Ce[xe] = null;
          var qe = l;
          if (Pe) {
            Pe.length === 2 && (qe = Mn({}, l), At(qe, Pe));
            var Ql = Jl.get(xe);
            Ql && (Ql.length = 0);
          }
          var Kl = [];
          r.scripts.add(Kl), gr(Kl, qe);
        }
        u && n.push(Ie), Zl = null;
      }
      return Zl;
    case "style":
      var ke = l.precedence, wn = l.href;
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null || typeof ke != "string" || typeof wn != "string" || wn === "") {
        n.push(en("style"));
        var In = null, Vl = null, ce;
        for (ce in l)
          if (p.call(l, ce)) {
            var Fe = l[ce];
            if (Fe != null)
              switch (ce) {
                case "children":
                  In = Fe;
                  break;
                case "dangerouslySetInnerHTML":
                  Vl = Fe;
                  break;
                default:
                  G(
                    n,
                    ce,
                    Fe
                  );
              }
          }
        n.push(gn);
        var fe = Array.isArray(In) ? 2 > In.length ? In[0] : null : In;
        typeof fe != "function" && typeof fe != "symbol" && fe !== null && fe !== void 0 && n.push(
          E(("" + fe).replace(Ki, Vi))
        ), zn(n, Vl, In), n.push(cl("style"));
        var ml = null;
      } else {
        var Tn = r.styles.get(ke);
        if ((t.styleResources.hasOwnProperty(wn) ? t.styleResources[wn] : void 0) !== null) {
          t.styleResources[wn] = null, Tn ? Tn.hrefs.push(
            E(D(wn))
          ) : (Tn = {
            precedence: E(
              D(ke)
            ),
            rules: [],
            hrefs: [E(D(wn))],
            sheets: /* @__PURE__ */ new Map()
          }, r.styles.set(ke, Tn));
          var ql = Tn.rules, _n = null, pl = null, Se;
          for (Se in l)
            if (p.call(l, Se)) {
              var pe = l[Se];
              if (pe != null)
                switch (Se) {
                  case "children":
                    _n = pe;
                    break;
                  case "dangerouslySetInnerHTML":
                    pl = pe;
                }
            }
          var he = Array.isArray(_n) ? 2 > _n.length ? _n[0] : null : _n;
          typeof he != "function" && typeof he != "symbol" && he !== null && he !== void 0 && ql.push(
            E(
              ("" + he).replace(Ki, Vi)
            )
          ), zn(ql, pl, _n);
        }
        Tn && i && i.styles.add(Tn), u && n.push(Ie), ml = void 0;
      }
      return ml;
    case "meta":
      if (f.insertionMode === 4 || f.tagScope & 1 || l.itemProp != null)
        var jl = El(
          n,
          l,
          "meta"
        );
      else
        u && n.push(Ie), jl = c ? null : typeof l.charSet == "string" ? El(r.charsetChunks, l, "meta") : l.name === "viewport" ? El(r.viewportChunks, l, "meta") : El(r.hoistableChunks, l, "meta");
      return jl;
    case "listing":
    case "pre":
      n.push(en(e));
      var oe = null, se = null, de;
      for (de in l)
        if (p.call(l, de)) {
          var Me = l[de];
          if (Me != null)
            switch (de) {
              case "children":
                oe = Me;
                break;
              case "dangerouslySetInnerHTML":
                se = Me;
                break;
              default:
                G(
                  n,
                  de,
                  Me
                );
            }
        }
      if (n.push(gn), se != null) {
        if (oe != null) throw Error(k(60));
        if (typeof se != "object" || !("__html" in se))
          throw Error(k(61));
        var Rn = se.__html;
        Rn != null && (typeof Rn == "string" && 0 < Rn.length && Rn[0] === `
` ? n.push(qr, E(Rn)) : n.push(E("" + Rn)));
      }
      return typeof oe == "string" && oe[0] === `
` && n.push(qr), oe;
    case "img":
      var H = l.src, B = l.srcSet;
      if (!(l.loading === "lazy" || !H && !B || typeof H != "string" && H != null || typeof B != "string" && B != null) && l.fetchPriority !== "low" && !(f.tagScope & 3) && (typeof H != "string" || H[4] !== ":" || H[0] !== "d" && H[0] !== "D" || H[1] !== "a" && H[1] !== "A" || H[2] !== "t" && H[2] !== "T" || H[3] !== "a" && H[3] !== "A") && (typeof B != "string" || B[4] !== ":" || B[0] !== "d" && B[0] !== "D" || B[1] !== "a" && B[1] !== "A" || B[2] !== "t" && B[2] !== "T" || B[3] !== "a" && B[3] !== "A")) {
        var $l = typeof l.sizes == "string" ? l.sizes : void 0, Ln = B ? B + `
` + ($l || "") : H, je = r.preloads.images, xn = je.get(Ln);
        if (xn)
          (l.fetchPriority === "high" || 10 > r.highImagePreloads.size) && (je.delete(Ln), r.highImagePreloads.add(xn));
        else if (!t.imageResources.hasOwnProperty(Ln)) {
          t.imageResources[Ln] = Kn;
          var $e = l.crossOrigin, nt = typeof $e == "string" ? $e === "use-credentials" ? $e : "" : void 0, Cn = r.headers, nl;
          Cn && 0 < Cn.remainingCapacity && typeof l.srcSet != "string" && (l.fetchPriority === "high" || 500 > Cn.highImagePreloads.length) && (nl = br(H, "image", {
            imageSrcSet: l.srcSet,
            imageSizes: l.sizes,
            crossOrigin: nt,
            integrity: l.integrity,
            nonce: l.nonce,
            type: l.type,
            fetchPriority: l.fetchPriority,
            referrerPolicy: l.refererPolicy
          }), 0 <= (Cn.remainingCapacity -= nl.length + 2)) ? (r.resets.image[Ln] = Kn, Cn.highImagePreloads && (Cn.highImagePreloads += ", "), Cn.highImagePreloads += nl) : (xn = [], bn(xn, {
            rel: "preload",
            as: "image",
            href: B ? void 0 : H,
            imageSrcSet: B,
            imageSizes: $l,
            crossOrigin: nt,
            integrity: l.integrity,
            type: l.type,
            fetchPriority: l.fetchPriority,
            referrerPolicy: l.referrerPolicy
          }), l.fetchPriority === "high" || 10 > r.highImagePreloads.size ? r.highImagePreloads.add(xn) : (r.bulkPreloads.add(xn), je.set(Ln, xn)));
        }
      }
      return El(n, l, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return El(n, l, e);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (2 > f.insertionMode) {
        var el = a || r.preamble;
        if (el.headChunks)
          throw Error(k(545, "`<head>`"));
        el.headChunks = [];
        var et = mr(
          el.headChunks,
          l,
          "head"
        );
      } else
        et = Qt(
          n,
          l,
          "head"
        );
      return et;
    case "body":
      if (2 > f.insertionMode) {
        var ll = a || r.preamble;
        if (ll.bodyChunks)
          throw Error(k(545, "`<body>`"));
        ll.bodyChunks = [];
        var lt = mr(
          ll.bodyChunks,
          l,
          "body"
        );
      } else
        lt = Qt(
          n,
          l,
          "body"
        );
      return lt;
    case "html":
      if (f.insertionMode === 0) {
        var tl = a || r.preamble;
        if (tl.htmlChunks)
          throw Error(k(545, "`<html>`"));
        tl.htmlChunks = [Fh];
        var tt = mr(
          tl.htmlChunks,
          l,
          "html"
        );
      } else
        tt = Qt(
          n,
          l,
          "html"
        );
      return tt;
    default:
      if (e.indexOf("-") !== -1) {
        n.push(en(e));
        var rl = null, rt = null, Dn;
        for (Dn in l)
          if (p.call(l, Dn)) {
            var j = l[Dn];
            if (j != null) {
              var at = Dn;
              switch (Dn) {
                case "children":
                  rl = j;
                  break;
                case "dangerouslySetInnerHTML":
                  rt = j;
                  break;
                case "style":
                  vc(n, j);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  at = "class";
                default:
                  if (Ja(Dn) && typeof j != "function" && typeof j != "symbol" && j !== !1) {
                    if (j === !0) j = "";
                    else if (typeof j == "object") continue;
                    n.push(
                      Pn,
                      E(at),
                      Zn,
                      E(D(j)),
                      Wn
                    );
                  }
              }
            }
          }
        return n.push(gn), zn(n, rt, rl), rl;
      }
  }
  return Qt(n, l, e);
}
var pi = /* @__PURE__ */ new Map();
function cl(n) {
  var e = pi.get(n);
  return e === void 0 && (e = g("</" + n + ">"), pi.set(n, e)), e;
}
function ji(n, e) {
  n = n.preamble, n.htmlChunks === null && e.htmlChunks && (n.htmlChunks = e.htmlChunks, e.contribution |= 1), n.headChunks === null && e.headChunks && (n.headChunks = e.headChunks, e.contribution |= 4), n.bodyChunks === null && e.bodyChunks && (n.bodyChunks = e.bodyChunks, e.contribution |= 2);
}
function Rc(n, e) {
  e = e.bootstrapChunks;
  for (var l = 0; l < e.length - 1; l++)
    d(n, e[l]);
  return l < e.length ? (l = e[l], e.length = 0, X(n, l)) : !0;
}
var Mh = g('<template id="'), Ah = g('"></template>'), Oh = g("<!--$-->"), Ih = g(
  '<!--$?--><template id="'
), _h = g('"></template>'), Lh = g("<!--$!-->"), Kt = g("<!--/$-->"), Dh = g("<template"), Nh = g('"'), zh = g(' data-dgst="');
g(' data-msg="');
g(' data-stck="');
g(' data-cstck="');
var Bh = g("></template>");
function $i(n, e, l) {
  if (d(n, Ih), l === null) throw Error(k(395));
  return d(n, e.boundaryPrefix), d(n, E(l.toString(16))), X(n, _h);
}
var Hh = g("<!--"), Wh = g("-->");
function nu(n, e) {
  e = e.contribution, e !== 0 && (d(n, Hh), d(n, E("" + e)), d(n, Wh));
}
var Yh = g('<div hidden id="'), Uh = g('">'), Gh = g("</div>"), Xh = g(
  '<svg aria-hidden="true" style="display:none" id="'
), Zh = g('">'), Jh = g("</svg>"), Qh = g(
  '<math aria-hidden="true" style="display:none" id="'
), Kh = g('">'), Vh = g("</math>"), mh = g('<table hidden id="'), qh = g('">'), ph = g("</table>"), jh = g('<table hidden><tbody id="'), $h = g('">'), no = g("</tbody></table>"), eo = g('<table hidden><tr id="'), lo = g('">'), to = g("</tr></table>"), ro = g(
  '<table hidden><colgroup id="'
), ao = g('">'), io = g("</colgroup></table>");
function uo(n, e, l, t) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return d(n, Yh), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, Uh);
    case 4:
      return d(n, Xh), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, Zh);
    case 5:
      return d(n, Qh), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, Kh);
    case 6:
      return d(n, mh), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, qh);
    case 7:
      return d(n, jh), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, $h);
    case 8:
      return d(n, eo), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, lo);
    case 9:
      return d(n, ro), d(n, e.segmentPrefix), d(n, E(t.toString(16))), X(n, ao);
    default:
      throw Error(k(397));
  }
}
function co(n, e) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return X(n, Gh);
    case 4:
      return X(n, Jh);
    case 5:
      return X(n, Vh);
    case 6:
      return X(n, ph);
    case 7:
      return X(n, no);
    case 8:
      return X(n, to);
    case 9:
      return X(n, io);
    default:
      throw Error(k(397));
  }
}
var fo = g(
  '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
), ho = g('$RS("'), oo = g('","'), so = g('")<\/script>');
g('<template data-rsi="" data-sid="');
g('" data-pid="');
var go = g(
  '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
), vo = g('$RC("'), bo = g(
  `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
), yo = g(
  `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
), Eo = g('$RR("'), wo = g('","'), To = g('",'), Ro = g('"'), xo = g(")<\/script>");
g('<template data-rci="" data-bid="');
g('<template data-rri="" data-bid="');
g('" data-sid="');
g('" data-sty="');
var Co = g(
  '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
), Po = g('$RX("'), ko = g('"'), Fo = g(","), So = g(")<\/script>");
g('<template data-rxi="" data-bid="');
g('" data-dgst="');
g('" data-msg="');
g('" data-stck="');
g('" data-cstck="');
var Mo = /[<\u2028\u2029]/g;
function Ao(n) {
  return JSON.stringify(n).replace(
    Mo,
    function(e) {
      switch (e) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var Oo = /[&><\u2028\u2029]/g;
function dt(n) {
  return JSON.stringify(n).replace(
    Oo,
    function(e) {
      switch (e) {
        case "&":
          return "\\u0026";
        case ">":
          return "\\u003e";
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var Io = g(
  '<style media="not all" data-precedence="'
), _o = g('" data-href="'), Lo = g('">'), Do = g("</style>"), vr = !1, ya = !0;
function No(n) {
  var e = n.rules, l = n.hrefs, t = 0;
  if (l.length) {
    for (d(this, Io), d(this, n.precedence), d(this, _o); t < l.length - 1; t++)
      d(this, l[t]), d(this, Cc);
    for (d(this, l[t]), d(this, Lo), t = 0; t < e.length; t++) d(this, e[t]);
    ya = X(
      this,
      Do
    ), vr = !0, e.length = 0, l.length = 0;
  }
}
function zo(n) {
  return n.state !== 2 ? vr = !0 : !1;
}
function xc(n, e, l) {
  return vr = !1, ya = !0, e.styles.forEach(No, n), e.stylesheets.forEach(zo), vr && (l.stylesToHoist = !0), ya;
}
function ve(n) {
  for (var e = 0; e < n.length; e++) d(this, n[e]);
  n.length = 0;
}
var Ge = [];
function Bo(n) {
  bn(Ge, n.props);
  for (var e = 0; e < Ge.length; e++)
    d(this, Ge[e]);
  Ge.length = 0, n.state = 2;
}
var Ho = g(
  '<style data-precedence="'
), Wo = g('" data-href="'), Cc = g(" "), Yo = g('">'), Uo = g("</style>");
function Go(n) {
  var e = 0 < n.sheets.size;
  n.sheets.forEach(Bo, this), n.sheets.clear();
  var l = n.rules, t = n.hrefs;
  if (!e || t.length) {
    if (d(this, Ho), d(this, n.precedence), n = 0, t.length) {
      for (d(this, Wo); n < t.length - 1; n++)
        d(this, t[n]), d(this, Cc);
      d(this, t[n]);
    }
    for (d(this, Yo), n = 0; n < l.length; n++)
      d(this, l[n]);
    d(this, Uo), l.length = 0, t.length = 0;
  }
}
function Xo(n) {
  if (n.state === 0) {
    n.state = 1;
    var e = n.props;
    for (bn(Ge, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: e.crossOrigin,
      fetchPriority: e.fetchPriority,
      integrity: e.integrity,
      media: e.media,
      hrefLang: e.hrefLang,
      referrerPolicy: e.referrerPolicy
    }), n = 0; n < Ge.length; n++)
      d(this, Ge[n]);
    Ge.length = 0;
  }
}
function Zo(n) {
  n.sheets.forEach(Xo, this), n.sheets.clear();
}
var eu = g("["), lu = g(",["), Ea = g(","), pr = g("]");
function Jo(n, e) {
  d(n, eu);
  var l = eu;
  e.stylesheets.forEach(function(t) {
    if (t.state !== 2)
      if (t.state === 3)
        d(n, l), d(
          n,
          E(
            dt("" + t.props.href)
          )
        ), d(n, pr), l = lu;
      else {
        d(n, l);
        var r = t.props["data-precedence"], a = t.props, i = Ft("" + t.props.href);
        d(
          n,
          E(dt(i))
        ), r = "" + r, d(n, Ea), d(
          n,
          E(dt(r))
        );
        for (var f in a)
          if (p.call(a, f) && (r = a[f], r != null))
            switch (f) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(k(399, "link"));
              default:
                Qo(
                  n,
                  f,
                  r
                );
            }
        d(n, pr), l = lu, t.state = 3;
      }
  }), d(n, pr);
}
function Qo(n, e, l) {
  var t = e.toLowerCase();
  switch (typeof l) {
    case "function":
    case "symbol":
      return;
  }
  switch (e) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      t = "class", e = "" + l;
      break;
    case "hidden":
      if (l === !1) return;
      e = "";
      break;
    case "src":
    case "href":
      l = Ft(l), e = "" + l;
      break;
    default:
      if (2 < e.length && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N") || !Ja(e))
        return;
      e = "" + l;
  }
  d(n, Ea), d(
    n,
    E(dt(t))
  ), d(n, Ea), d(
    n,
    E(dt(e))
  );
}
function tu() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function Ko(n) {
  var e = hn || null;
  if (e) {
    var l = e.resumableState, t = e.renderState;
    if (typeof n == "string" && n) {
      if (!l.dnsResources.hasOwnProperty(n)) {
        l.dnsResources[n] = null, l = t.headers;
        var r, a;
        (a = l && 0 < l.remainingCapacity) && (a = (r = "<" + ("" + n).replace(
          Qa,
          Ka
        ) + ">; rel=dns-prefetch", 0 <= (l.remainingCapacity -= r.length + 2))), a ? (t.resets.dns[n] = null, l.preconnects && (l.preconnects += ", "), l.preconnects += r) : (r = [], bn(r, { href: n, rel: "dns-prefetch" }), t.preconnects.add(r));
      }
      gl(e);
    }
  } else De.D(n);
}
function Vo(n, e) {
  var l = hn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (typeof n == "string" && n) {
      var a = e === "use-credentials" ? "credentials" : typeof e == "string" ? "anonymous" : "default";
      if (!t.connectResources[a].hasOwnProperty(n)) {
        t.connectResources[a][n] = null, t = r.headers;
        var i, f;
        if (f = t && 0 < t.remainingCapacity) {
          if (f = "<" + ("" + n).replace(
            Qa,
            Ka
          ) + ">; rel=preconnect", typeof e == "string") {
            var u = ("" + e).replace(
              wa,
              Ta
            );
            f += '; crossorigin="' + u + '"';
          }
          f = (i = f, 0 <= (t.remainingCapacity -= i.length + 2));
        }
        f ? (r.resets.connect[a][n] = null, t.preconnects && (t.preconnects += ", "), t.preconnects += i) : (a = [], bn(a, {
          rel: "preconnect",
          href: n,
          crossOrigin: e
        }), r.preconnects.add(a));
      }
      gl(l);
    }
  } else De.C(n, e);
}
function mo(n, e, l) {
  var t = hn || null;
  if (t) {
    var r = t.resumableState, a = t.renderState;
    if (e && n) {
      switch (e) {
        case "image":
          if (l)
            var i = l.imageSrcSet, f = l.imageSizes, u = l.fetchPriority;
          var c = i ? i + `
` + (f || "") : n;
          if (r.imageResources.hasOwnProperty(c)) return;
          r.imageResources[c] = Kn, r = a.headers;
          var o;
          r && 0 < r.remainingCapacity && typeof i != "string" && u === "high" && (o = br(n, e, l), 0 <= (r.remainingCapacity -= o.length + 2)) ? (a.resets.image[c] = Kn, r.highImagePreloads && (r.highImagePreloads += ", "), r.highImagePreloads += o) : (r = [], bn(
            r,
            Mn(
              { rel: "preload", href: i ? void 0 : n, as: e },
              l
            )
          ), u === "high" ? a.highImagePreloads.add(r) : (a.bulkPreloads.add(r), a.preloads.images.set(c, r)));
          break;
        case "style":
          if (r.styleResources.hasOwnProperty(n)) return;
          i = [], bn(
            i,
            Mn({ rel: "preload", href: n, as: e }, l)
          ), r.styleResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? Kn : [l.crossOrigin, l.integrity], a.preloads.stylesheets.set(n, i), a.bulkPreloads.add(i);
          break;
        case "script":
          if (r.scriptResources.hasOwnProperty(n)) return;
          i = [], a.preloads.scripts.set(n, i), a.bulkPreloads.add(i), bn(
            i,
            Mn({ rel: "preload", href: n, as: e }, l)
          ), r.scriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? Kn : [l.crossOrigin, l.integrity];
          break;
        default:
          if (r.unknownResources.hasOwnProperty(e)) {
            if (i = r.unknownResources[e], i.hasOwnProperty(n))
              return;
          } else
            i = {}, r.unknownResources[e] = i;
          if (i[n] = Kn, (r = a.headers) && 0 < r.remainingCapacity && e === "font" && (c = br(n, e, l), 0 <= (r.remainingCapacity -= c.length + 2)))
            a.resets.font[n] = Kn, r.fontPreloads && (r.fontPreloads += ", "), r.fontPreloads += c;
          else
            switch (r = [], n = Mn({ rel: "preload", href: n, as: e }, l), bn(r, n), e) {
              case "font":
                a.fontPreloads.add(r);
                break;
              default:
                a.bulkPreloads.add(r);
            }
      }
      gl(t);
    }
  } else De.L(n, e, l);
}
function qo(n, e) {
  var l = hn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (n) {
      var a = e && typeof e.as == "string" ? e.as : "script";
      switch (a) {
        case "script":
          if (t.moduleScriptResources.hasOwnProperty(n)) return;
          a = [], t.moduleScriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? Kn : [e.crossOrigin, e.integrity], r.preloads.moduleScripts.set(n, a);
          break;
        default:
          if (t.moduleUnknownResources.hasOwnProperty(a)) {
            var i = t.unknownResources[a];
            if (i.hasOwnProperty(n)) return;
          } else
            i = {}, t.moduleUnknownResources[a] = i;
          a = [], i[n] = Kn;
      }
      bn(a, Mn({ rel: "modulepreload", href: n }, e)), r.bulkPreloads.add(a), gl(l);
    }
  } else De.m(n, e);
}
function po(n, e, l) {
  var t = hn || null;
  if (t) {
    var r = t.resumableState, a = t.renderState;
    if (n) {
      e = e || "default";
      var i = a.styles.get(e), f = r.styleResources.hasOwnProperty(n) ? r.styleResources[n] : void 0;
      f !== null && (r.styleResources[n] = null, i || (i = {
        precedence: E(D(e)),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, a.styles.set(e, i)), e = {
        state: 0,
        props: Mn(
          { rel: "stylesheet", href: n, "data-precedence": e },
          l
        )
      }, f && (f.length === 2 && At(e.props, f), (a = a.preloads.stylesheets.get(n)) && 0 < a.length ? a.length = 0 : e.state = 1), i.sheets.set(n, e), gl(t));
    }
  } else De.S(n, e, l);
}
function jo(n, e) {
  var l = hn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (n) {
      var a = t.scriptResources.hasOwnProperty(n) ? t.scriptResources[n] : void 0;
      a !== null && (t.scriptResources[n] = null, e = Mn({ src: n, async: !0 }, e), a && (a.length === 2 && At(e, a), n = r.preloads.scripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), gr(n, e), gl(l));
    }
  } else De.X(n, e);
}
function $o(n, e) {
  var l = hn || null;
  if (l) {
    var t = l.resumableState, r = l.renderState;
    if (n) {
      var a = t.moduleScriptResources.hasOwnProperty(
        n
      ) ? t.moduleScriptResources[n] : void 0;
      a !== null && (t.moduleScriptResources[n] = null, e = Mn({ src: n, type: "module", async: !0 }, e), a && (a.length === 2 && At(e, a), n = r.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), gr(n, e), gl(l));
    }
  } else De.M(n, e);
}
function At(n, e) {
  n.crossOrigin == null && (n.crossOrigin = e[0]), n.integrity == null && (n.integrity = e[1]);
}
function br(n, e, l) {
  n = ("" + n).replace(
    Qa,
    Ka
  ), e = ("" + e).replace(
    wa,
    Ta
  ), e = "<" + n + '>; rel=preload; as="' + e + '"';
  for (var t in l)
    p.call(l, t) && (n = l[t], typeof n == "string" && (e += "; " + t.toLowerCase() + '="' + ("" + n).replace(
      wa,
      Ta
    ) + '"'));
  return e;
}
var Qa = /[<>\r\n]/g;
function Ka(n) {
  switch (n) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
var wa = /["';,\r\n]/g;
function Ta(n) {
  switch (n) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
function ru(n) {
  this.styles.add(n);
}
function au(n) {
  this.stylesheets.add(n);
}
var ns = Function.prototype.bind, es = Symbol.for("react.client.reference");
function yr(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === es ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case nc:
      return "Fragment";
    case lc:
      return "Profiler";
    case ec:
      return "StrictMode";
    case Lr:
      return "Suspense";
    case Ga:
      return "SuspenseList";
    case rc:
      return "Activity";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case $u:
        return "Portal";
      case _r:
        return (n.displayName || "Context") + ".Provider";
      case tc:
        return (n._context.displayName || "Context") + ".Consumer";
      case Ua:
        var e = n.render;
        return n = n.displayName, n || (n = e.displayName || e.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Xa:
        return e = n.displayName || null, e !== null ? e : yr(n.type) || "Memo";
      case Dr:
        e = n._payload, n = n._init;
        try {
          return yr(n(e));
        } catch {
        }
    }
  return null;
}
var iu = {}, il = null;
function Nr(n, e) {
  if (n !== e) {
    n.context._currentValue = n.parentValue, n = n.parent;
    var l = e.parent;
    if (n === null) {
      if (l !== null) throw Error(k(401));
    } else {
      if (l === null) throw Error(k(401));
      Nr(n, l);
    }
    e.context._currentValue = e.value;
  }
}
function Pc(n) {
  n.context._currentValue = n.parentValue, n = n.parent, n !== null && Pc(n);
}
function kc(n) {
  var e = n.parent;
  e !== null && kc(e), n.context._currentValue = n.value;
}
function Fc(n, e) {
  if (n.context._currentValue = n.parentValue, n = n.parent, n === null) throw Error(k(402));
  n.depth === e.depth ? Nr(n, e) : Fc(n, e);
}
function Sc(n, e) {
  var l = e.parent;
  if (l === null) throw Error(k(402));
  n.depth === l.depth ? Nr(n, l) : Sc(n, l), e.context._currentValue = e.value;
}
function We(n) {
  var e = il;
  e !== n && (e === null ? kc(n) : n === null ? Pc(e) : e.depth === n.depth ? Nr(e, n) : e.depth > n.depth ? Fc(e, n) : Sc(e, n), il = n);
}
var uu = {
  enqueueSetState: function(n, e) {
    n = n._reactInternals, n.queue !== null && n.queue.push(e);
  },
  enqueueReplaceState: function(n, e) {
    n = n._reactInternals, n.replace = !0, n.queue = [e];
  },
  enqueueForceUpdate: function() {
  }
}, ls = { id: 1, overflow: "" };
function Ra(n, e, l) {
  var t = n.id;
  n = n.overflow;
  var r = 32 - er(t) - 1;
  t &= ~(1 << r), l += 1;
  var a = 32 - er(e) + r;
  if (30 < a) {
    var i = r - r % 5;
    return a = (t & (1 << i) - 1).toString(32), t >>= i, r -= i, {
      id: 1 << 32 - er(e) + r | l << r | t,
      overflow: a + n
    };
  }
  return {
    id: 1 << a | l << r | t,
    overflow: n
  };
}
var er = Math.clz32 ? Math.clz32 : as, ts = Math.log, rs = Math.LN2;
function as(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (ts(n) / rs | 0) | 0;
}
var ol = Error(k(460));
function Vt() {
}
function is(n, e, l) {
  switch (l = n[l], l === void 0 ? n.push(e) : l !== e && (e.then(Vt, Vt), e = l), e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (typeof e.status == "string" ? e.then(Vt, Vt) : (n = e, n.status = "pending", n.then(
        function(t) {
          if (e.status === "pending") {
            var r = e;
            r.status = "fulfilled", r.value = t;
          }
        },
        function(t) {
          if (e.status === "pending") {
            var r = e;
            r.status = "rejected", r.reason = t;
          }
        }
      )), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
      throw lr = e, ol;
  }
}
var lr = null;
function Er() {
  if (lr === null) throw Error(k(459));
  var n = lr;
  return lr = null, n;
}
function us(n, e) {
  return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
}
var cs = typeof Object.is == "function" ? Object.is : us, Ne = null, Va = null, ma = null, qa = null, tr = null, K = null, ht = !1, wr = !1, Ot = 0, It = 0, _t = -1, Tr = 0, Ml = null, Xe = null, zr = 0;
function Oe() {
  if (Ne === null)
    throw Error(k(321));
  return Ne;
}
function cu() {
  if (0 < zr) throw Error(k(312));
  return { memoizedState: null, queue: null, next: null };
}
function pa() {
  return K === null ? tr === null ? (ht = !1, tr = K = cu()) : (ht = !0, K = tr) : K.next === null ? (ht = !1, K = K.next = cu()) : (ht = !0, K = K.next), K;
}
function Pl() {
  var n = Ml;
  return Ml = null, n;
}
function Lt() {
  qa = ma = Va = Ne = null, wr = !1, tr = null, zr = 0, K = Xe = null;
}
function Mc(n, e) {
  return typeof e == "function" ? e(n) : e;
}
function fu(n, e, l) {
  if (Ne = Oe(), K = pa(), ht) {
    var t = K.queue;
    if (e = t.dispatch, Xe !== null && (l = Xe.get(t), l !== void 0)) {
      Xe.delete(t), t = K.memoizedState;
      do
        t = n(t, l.action), l = l.next;
      while (l !== null);
      return K.memoizedState = t, [t, e];
    }
    return [K.memoizedState, e];
  }
  return n = n === Mc ? typeof e == "function" ? e() : e : l !== void 0 ? l(e) : e, K.memoizedState = n, n = K.queue = { last: null, dispatch: null }, n = n.dispatch = fs.bind(
    null,
    Ne,
    n
  ), [K.memoizedState, n];
}
function hu(n, e) {
  if (Ne = Oe(), K = pa(), e = e === void 0 ? null : e, K !== null) {
    var l = K.memoizedState;
    if (l !== null && e !== null) {
      var t = l[1];
      n: if (t === null) t = !1;
      else {
        for (var r = 0; r < t.length && r < e.length; r++)
          if (!cs(e[r], t[r])) {
            t = !1;
            break n;
          }
        t = !0;
      }
      if (t) return l[0];
    }
  }
  return n = n(), K.memoizedState = [n, e], n;
}
function fs(n, e, l) {
  if (25 <= zr) throw Error(k(301));
  if (n === Ne)
    if (wr = !0, n = { action: l, next: null }, Xe === null && (Xe = /* @__PURE__ */ new Map()), l = Xe.get(e), l === void 0)
      Xe.set(e, n);
    else {
      for (e = l; e.next !== null; ) e = e.next;
      e.next = n;
    }
}
function hs() {
  throw Error(k(394));
}
function os() {
  throw Error(k(479));
}
function ou(n, e, l) {
  Oe();
  var t = It++, r = ma;
  if (typeof n.$$FORM_ACTION == "function") {
    var a = null, i = qa;
    r = r.formState;
    var f = n.$$IS_SIGNATURE_EQUAL;
    if (r !== null && typeof f == "function") {
      var u = r[1];
      f.call(n, r[2], r[3]) && (a = l !== void 0 ? "p" + l : "k" + Ni(
        JSON.stringify([i, null, t]),
        0
      ), u === a && (_t = t, e = r[0]));
    }
    var c = n.bind(null, e);
    return n = function(h) {
      c(h);
    }, typeof c.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(h) {
      h = c.$$FORM_ACTION(h), l !== void 0 && (l += "", h.action = l);
      var s = h.data;
      return s && (a === null && (a = l !== void 0 ? "p" + l : "k" + Ni(
        JSON.stringify([
          i,
          null,
          t
        ]),
        0
      )), s.append("$ACTION_KEY", a)), h;
    }), [e, n, !1];
  }
  var o = n.bind(null, e);
  return [
    e,
    function(h) {
      o(h);
    },
    !1
  ];
}
function Ac(n) {
  var e = Tr;
  return Tr += 1, Ml === null && (Ml = []), is(Ml, n, e);
}
function ss() {
  throw Error(k(393));
}
function ct() {
}
var su = {
  readContext: function(n) {
    return n._currentValue;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Ac(n);
      if (n.$$typeof === _r) return n._currentValue;
    }
    throw Error(k(438, String(n)));
  },
  useContext: function(n) {
    return Oe(), n._currentValue;
  },
  useMemo: hu,
  useReducer: fu,
  useRef: function(n) {
    Ne = Oe(), K = pa();
    var e = K.memoizedState;
    return e === null ? (n = { current: n }, K.memoizedState = n) : e;
  },
  useState: function(n) {
    return fu(Mc, n);
  },
  useInsertionEffect: ct,
  useLayoutEffect: ct,
  useCallback: function(n, e) {
    return hu(function() {
      return n;
    }, e);
  },
  useImperativeHandle: ct,
  useEffect: ct,
  useDebugValue: ct,
  useDeferredValue: function(n, e) {
    return Oe(), e !== void 0 ? e : n;
  },
  useTransition: function() {
    return Oe(), [!1, hs];
  },
  useId: function() {
    var n = Va.treeContext, e = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - er(n) - 1)).toString(32) + e;
    var l = rr;
    if (l === null) throw Error(k(404));
    return e = Ot++, n = "«" + l.idPrefix + "R" + n, 0 < e && (n += "H" + e.toString(32)), n + "»";
  },
  useSyncExternalStore: function(n, e, l) {
    if (l === void 0)
      throw Error(k(407));
    return l();
  },
  useOptimistic: function(n) {
    return Oe(), [n, os];
  },
  useActionState: ou,
  useFormState: ou,
  useHostTransitionStatus: function() {
    return Oe(), dh;
  },
  useMemoCache: function(n) {
    for (var e = Array(n), l = 0; l < n; l++)
      e[l] = lh;
    return e;
  },
  useCacheRefresh: function() {
    return ss;
  }
}, rr = null, ds = {
  getCacheForType: function() {
    throw Error(k(248));
  }
}, jr, du;
function Rl(n) {
  if (jr === void 0)
    try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      jr = e && e[1] || "", du = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + jr + n + du;
}
var $r = !1;
function mt(n, e) {
  if (!n || $r) return "";
  $r = !0;
  var l = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var t = {
      DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (b) {
                var s = b;
              }
              Reflect.construct(n, [], h);
            } else {
              try {
                h.call();
              } catch (b) {
                s = b;
              }
              n.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              s = b;
            }
            (h = n()) && typeof h.catch == "function" && h.catch(function() {
            });
          }
        } catch (b) {
          if (b && s && typeof b.stack == "string")
            return [b.stack, s.stack];
        }
        return [null, null];
      }
    };
    t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var r = Object.getOwnPropertyDescriptor(
      t.DetermineComponentFrameRoot,
      "name"
    );
    r && r.configurable && Object.defineProperty(
      t.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var a = t.DetermineComponentFrameRoot(), i = a[0], f = a[1];
    if (i && f) {
      var u = i.split(`
`), c = f.split(`
`);
      for (r = t = 0; t < u.length && !u[t].includes("DetermineComponentFrameRoot"); )
        t++;
      for (; r < c.length && !c[r].includes(
        "DetermineComponentFrameRoot"
      ); )
        r++;
      if (t === u.length || r === c.length)
        for (t = u.length - 1, r = c.length - 1; 1 <= t && 0 <= r && u[t] !== c[r]; )
          r--;
      for (; 1 <= t && 0 <= r; t--, r--)
        if (u[t] !== c[r]) {
          if (t !== 1 || r !== 1)
            do
              if (t--, r--, 0 > r || u[t] !== c[r]) {
                var o = `
` + u[t].replace(" at new ", " at ");
                return n.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", n.displayName)), o;
              }
            while (1 <= t && 0 <= r);
          break;
        }
    }
  } finally {
    $r = !1, Error.prepareStackTrace = l;
  }
  return (l = n ? n.displayName || n.name : "") ? Rl(l) : "";
}
function Oc(n) {
  if (typeof n == "string") return Rl(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? mt(n, !0) : mt(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case Ua:
        return mt(n.render, !1);
      case Xa:
        return mt(n.type, !1);
      case Dr:
        var e = n, l = e._payload;
        e = e._init;
        try {
          n = e(l);
        } catch {
          return Rl("Lazy");
        }
        return Oc(n);
    }
    if (typeof n.name == "string")
      return l = n.env, Rl(
        n.name + (l ? " [" + l + "]" : "")
      );
  }
  switch (n) {
    case Ga:
      return Rl("SuspenseList");
    case Lr:
      return Rl("Suspense");
  }
  return "";
}
function gs(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var e = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "%c%s%c " + n[0],
      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
      " " + e + " ",
      ""
    ) : n.splice(
      0,
      0,
      "%c%s%c ",
      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
      " " + e + " ",
      ""
    ), n.unshift(console), e = ns.apply(console.error, n), e();
  } else console.error(n);
  return null;
}
function xl() {
}
function vs(n, e, l, t, r, a, i, f, u, c, o) {
  var h = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = e, this.rootFormatContext = l, this.progressiveChunkSize = t === void 0 ? 12800 : t, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = h, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = r === void 0 ? gs : r, this.onPostpone = c === void 0 ? xl : c, this.onAllReady = a === void 0 ? xl : a, this.onShellReady = i === void 0 ? xl : i, this.onShellError = f === void 0 ? xl : f, this.onFatalError = u === void 0 ? xl : u, this.formState = o === void 0 ? null : o;
}
function Ic(n, e, l, t, r, a, i, f, u, c, o, h) {
  return e = new vs(
    e,
    l,
    t,
    r,
    a,
    i,
    f,
    u,
    c,
    o,
    h
  ), l = Al(
    e,
    0,
    null,
    t,
    !1,
    !1
  ), l.parentFlushed = !0, n = gt(
    e,
    null,
    n,
    -1,
    null,
    l,
    null,
    null,
    e.abortableTasks,
    null,
    t,
    null,
    ls,
    null,
    !1
  ), Ol(n), e.pingedTasks.push(n), e;
}
function bs(n, e, l, t, r, a, i, f, u, c, o) {
  return n = Ic(
    n,
    e,
    l,
    t,
    r,
    a,
    i,
    f,
    u,
    c,
    o,
    void 0
  ), n.trackedPostpones = {
    workingMap: /* @__PURE__ */ new Map(),
    rootNodes: [],
    rootSlots: null
  }, n;
}
var hn = null;
function _c(n, e) {
  n.pingedTasks.push(e), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, n.trackedPostpones !== null || n.status === 10 ? uc(function() {
    return ka(n);
  }) : Za(function() {
    return ka(n);
  }));
}
function Dt(n, e, l, t) {
  return {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: e,
    errorDigest: null,
    contentState: tu(),
    fallbackState: tu(),
    contentPreamble: l,
    fallbackPreamble: t,
    trackedContentKeyPath: null,
    trackedFallbackNode: null
  };
}
function gt(n, e, l, t, r, a, i, f, u, c, o, h, s, b, v) {
  n.allPendingTasks++, r === null ? n.pendingRootTasks++ : r.pendingTasks++;
  var y = {
    replay: null,
    node: l,
    childIndex: t,
    ping: function() {
      return _c(n, y);
    },
    blockedBoundary: r,
    blockedSegment: a,
    blockedPreamble: i,
    hoistableState: f,
    abortSet: u,
    keyPath: c,
    formatContext: o,
    context: h,
    treeContext: s,
    componentStack: b,
    thenableState: e,
    isFallback: v
  };
  return u.add(y), y;
}
function Lc(n, e, l, t, r, a, i, f, u, c, o, h, s, b) {
  n.allPendingTasks++, a === null ? n.pendingRootTasks++ : a.pendingTasks++, l.pendingTasks++;
  var v = {
    replay: l,
    node: t,
    childIndex: r,
    ping: function() {
      return _c(n, v);
    },
    blockedBoundary: a,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: i,
    abortSet: f,
    keyPath: u,
    formatContext: c,
    context: o,
    treeContext: h,
    componentStack: s,
    thenableState: e,
    isFallback: b
  };
  return f.add(v), v;
}
function Al(n, e, l, t, r, a) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: e,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: t,
    boundary: l,
    lastPushedText: r,
    textEmbedded: a
  };
}
function Ol(n) {
  var e = n.node;
  if (typeof e == "object" && e !== null)
    switch (e.$$typeof) {
      case ju:
        n.componentStack = { parent: n.componentStack, type: e.type };
    }
}
function sl(n) {
  var e = {};
  return n && Object.defineProperty(e, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var l = "", t = n;
        do
          l += Oc(t.type), t = t.parent;
        while (t);
        var r = l;
      } catch (a) {
        r = `
Error generating stack: ` + a.message + `
` + a.stack;
      }
      return Object.defineProperty(e, "componentStack", {
        value: r
      }), r;
    }
  }), e;
}
function Un(n, e, l) {
  if (n = n.onError, e = n(e, l), e == null || typeof e == "string") return e;
}
function Nt(n, e) {
  var l = n.onShellError, t = n.onFatalError;
  l(e), t(e), n.destination !== null ? (n.status = 14, fc(n.destination, e)) : (n.status = 13, n.fatalError = e);
}
function gu(n, e, l, t, r, a) {
  var i = e.thenableState;
  for (e.thenableState = null, Ne = {}, Va = e, ma = n, qa = l, It = Ot = 0, _t = -1, Tr = 0, Ml = i, n = t(r, a); wr; )
    wr = !1, It = Ot = 0, _t = -1, Tr = 0, zr += 1, K = null, n = t(r, a);
  return Lt(), n;
}
function vu(n, e, l, t, r, a, i) {
  var f = !1;
  if (a !== 0 && n.formState !== null) {
    var u = e.blockedSegment;
    if (u !== null) {
      f = !0, u = u.chunks;
      for (var c = 0; c < a; c++)
        c === i ? u.push(Ch) : u.push(Ph);
    }
  }
  a = e.keyPath, e.keyPath = l, r ? (l = e.treeContext, e.treeContext = Ra(l, 1, 0), ye(n, e, t, -1), e.treeContext = l) : f ? ye(n, e, t, -1) : Vn(n, e, t, -1), e.keyPath = a;
}
function Rr(n, e, l, t, r, a) {
  if (typeof t == "function")
    if (t.prototype && t.prototype.isReactComponent) {
      var i = r;
      if ("ref" in r) {
        i = {};
        for (var f in r)
          f !== "ref" && (i[f] = r[f]);
      }
      var u = t.defaultProps;
      if (u) {
        i === r && (i = Mn({}, i, r));
        for (var c in u)
          i[c] === void 0 && (i[c] = u[c]);
      }
      r = i, i = iu, u = t.contextType, typeof u == "object" && u !== null && (i = u._currentValue), i = new t(r, i);
      var o = i.state !== void 0 ? i.state : null;
      if (i.updater = uu, i.props = r, i.state = o, u = { queue: [], replace: !1 }, i._reactInternals = u, a = t.contextType, i.context = typeof a == "object" && a !== null ? a._currentValue : iu, a = t.getDerivedStateFromProps, typeof a == "function" && (a = a(r, o), o = a == null ? o : Mn({}, o, a), i.state = o), typeof t.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function"))
        if (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && uu.enqueueReplaceState(
          i,
          i.state,
          null
        ), u.queue !== null && 0 < u.queue.length)
          if (t = u.queue, a = u.replace, u.queue = null, u.replace = !1, a && t.length === 1)
            i.state = t[0];
          else {
            for (u = a ? t[0] : i.state, o = !0, a = a ? 1 : 0; a < t.length; a++)
              c = t[a], c = typeof c == "function" ? c.call(i, u, r, void 0) : c, c != null && (o ? (o = !1, u = Mn({}, u, c)) : Mn(u, c));
            i.state = u;
          }
        else u.queue = null;
      if (t = i.render(), n.status === 12) throw null;
      r = e.keyPath, e.keyPath = l, Vn(n, e, t, -1), e.keyPath = r;
    } else {
      if (t = gu(n, e, l, t, r, void 0), n.status === 12) throw null;
      vu(
        n,
        e,
        l,
        t,
        Ot !== 0,
        It,
        _t
      );
    }
  else if (typeof t == "string")
    if (i = e.blockedSegment, i === null)
      i = r.children, u = e.formatContext, o = e.keyPath, e.formatContext = Gi(u, t, r), e.keyPath = l, ye(n, e, i, -1), e.formatContext = u, e.keyPath = o;
    else {
      a = Sh(
        i.chunks,
        t,
        r,
        n.resumableState,
        n.renderState,
        e.blockedPreamble,
        e.hoistableState,
        e.formatContext,
        i.lastPushedText,
        e.isFallback
      ), i.lastPushedText = !1, u = e.formatContext, o = e.keyPath, e.keyPath = l, (e.formatContext = Gi(u, t, r)).insertionMode === 3 ? (l = Al(
        n,
        0,
        null,
        e.formatContext,
        !1,
        !1
      ), i.preambleChildren.push(l), l = gt(
        n,
        null,
        a,
        -1,
        e.blockedBoundary,
        l,
        e.blockedPreamble,
        e.hoistableState,
        n.abortableTasks,
        e.keyPath,
        e.formatContext,
        e.context,
        e.treeContext,
        e.componentStack,
        e.isFallback
      ), Ol(l), n.pingedTasks.push(l)) : ye(n, e, a, -1), e.formatContext = u, e.keyPath = o;
      n: {
        switch (e = i.chunks, n = n.resumableState, t) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break n;
          case "body":
            if (1 >= u.insertionMode) {
              n.hasBody = !0;
              break n;
            }
            break;
          case "html":
            if (u.insertionMode === 0) {
              n.hasHtml = !0;
              break n;
            }
            break;
          case "head":
            if (1 >= u.insertionMode) break n;
        }
        e.push(cl(t));
      }
      i.lastPushedText = !1;
    }
  else {
    switch (t) {
      case eh:
      case ec:
      case lc:
      case nc:
        t = e.keyPath, e.keyPath = l, Vn(n, e, r.children, -1), e.keyPath = t;
        return;
      case rc:
        r.mode !== "hidden" && (t = e.keyPath, e.keyPath = l, Vn(n, e, r.children, -1), e.keyPath = t);
        return;
      case Ga:
        t = e.keyPath, e.keyPath = l, Vn(n, e, r.children, -1), e.keyPath = t;
        return;
      case th:
      case nh:
        throw Error(k(343));
      case Lr:
        n: if (e.replay !== null) {
          t = e.keyPath, e.keyPath = l, l = r.children;
          try {
            ye(n, e, l, -1);
          } finally {
            e.keyPath = t;
          }
        } else {
          t = e.keyPath;
          var h = e.blockedBoundary;
          a = e.blockedPreamble;
          var s = e.hoistableState;
          c = e.blockedSegment, f = r.fallback, r = r.children;
          var b = /* @__PURE__ */ new Set(), v = 2 > e.formatContext.insertionMode ? Dt(
            n,
            b,
            St(),
            St()
          ) : Dt(n, b, null, null);
          n.trackedPostpones !== null && (v.trackedContentKeyPath = l);
          var y = Al(
            n,
            c.chunks.length,
            v,
            e.formatContext,
            !1,
            !1
          );
          c.children.push(y), c.lastPushedText = !1;
          var A = Al(
            n,
            0,
            null,
            e.formatContext,
            !1,
            !1
          );
          if (A.parentFlushed = !0, n.trackedPostpones !== null) {
            i = [l[0], "Suspense Fallback", l[2]], u = [i[1], i[2], [], null], n.trackedPostpones.workingMap.set(i, u), v.trackedFallbackNode = u, e.blockedSegment = y, e.blockedPreamble = v.fallbackPreamble, e.keyPath = i, y.status = 6;
            try {
              ye(n, e, f, -1), y.lastPushedText && y.textEmbedded && y.chunks.push(Ie), y.status = 1;
            } catch (R) {
              throw y.status = n.status === 12 ? 3 : 4, R;
            } finally {
              e.blockedSegment = c, e.blockedPreamble = a, e.keyPath = t;
            }
            e = gt(
              n,
              null,
              r,
              -1,
              v,
              A,
              v.contentPreamble,
              v.contentState,
              e.abortSet,
              l,
              e.formatContext,
              e.context,
              e.treeContext,
              e.componentStack,
              e.isFallback
            ), Ol(e), n.pingedTasks.push(e);
          } else {
            e.blockedBoundary = v, e.blockedPreamble = v.contentPreamble, e.hoistableState = v.contentState, e.blockedSegment = A, e.keyPath = l, A.status = 6;
            try {
              if (ye(n, e, r, -1), A.lastPushedText && A.textEmbedded && A.chunks.push(Ie), A.status = 1, zt(v, A), v.pendingTasks === 0 && v.status === 0) {
                v.status = 1, n.pendingRootTasks === 0 && e.blockedPreamble && Ut(n);
                break n;
              }
            } catch (R) {
              v.status = 4, n.status === 12 ? (A.status = 3, i = n.fatalError) : (A.status = 4, i = R), u = sl(e.componentStack), o = Un(
                n,
                i,
                u
              ), v.errorDigest = o, $a(n, v);
            } finally {
              e.blockedBoundary = h, e.blockedPreamble = a, e.hoistableState = s, e.blockedSegment = c, e.keyPath = t;
            }
            e = gt(
              n,
              null,
              f,
              -1,
              h,
              y,
              v.fallbackPreamble,
              v.fallbackState,
              b,
              [l[0], "Suspense Fallback", l[2]],
              e.formatContext,
              e.context,
              e.treeContext,
              e.componentStack,
              !0
            ), Ol(e), n.pingedTasks.push(e);
          }
        }
        return;
    }
    if (typeof t == "object" && t !== null)
      switch (t.$$typeof) {
        case Ua:
          if ("ref" in r)
            for (v in i = {}, r)
              v !== "ref" && (i[v] = r[v]);
          else i = r;
          t = gu(
            n,
            e,
            l,
            t.render,
            i,
            a
          ), vu(
            n,
            e,
            l,
            t,
            Ot !== 0,
            It,
            _t
          );
          return;
        case Xa:
          Rr(n, e, l, t.type, r, a);
          return;
        case $f:
        case _r:
          if (u = r.children, i = e.keyPath, r = r.value, o = t._currentValue, t._currentValue = r, a = il, il = t = {
            parent: a,
            depth: a === null ? 0 : a.depth + 1,
            context: t,
            parentValue: o,
            value: r
          }, e.context = t, e.keyPath = l, Vn(n, e, u, -1), n = il, n === null) throw Error(k(403));
          n.context._currentValue = n.parentValue, n = il = n.parent, e.context = n, e.keyPath = i;
          return;
        case tc:
          r = r.children, t = r(t._context._currentValue), r = e.keyPath, e.keyPath = l, Vn(n, e, t, -1), e.keyPath = r;
          return;
        case Dr:
          if (i = t._init, t = i(t._payload), n.status === 12) throw null;
          Rr(n, e, l, t, r, a);
          return;
      }
    throw Error(
      k(130, t == null ? t : typeof t, "")
    );
  }
}
function ja(n, e, l, t, r) {
  var a = e.replay, i = e.blockedBoundary, f = Al(
    n,
    0,
    null,
    e.formatContext,
    !1,
    !1
  );
  f.id = l, f.parentFlushed = !0;
  try {
    e.replay = null, e.blockedSegment = f, ye(n, e, t, r), f.status = 1, i === null ? n.completedRootSegment = f : (zt(i, f), i.parentFlushed && n.partialBoundaries.push(i));
  } finally {
    e.replay = a, e.blockedSegment = null;
  }
}
function Vn(n, e, l, t) {
  e.replay !== null && typeof e.replay.slots == "number" ? ja(n, e, e.replay.slots, l, t) : (e.node = l, e.childIndex = t, l = e.componentStack, Ol(e), xa(n, e), e.componentStack = l);
}
function xa(n, e) {
  var l = e.node, t = e.childIndex;
  if (l !== null) {
    if (typeof l == "object") {
      switch (l.$$typeof) {
        case ju:
          var r = l.type, a = l.key, i = l.props;
          l = i.ref;
          var f = l !== void 0 ? l : null, u = yr(r), c = a ?? (t === -1 ? 0 : t);
          if (a = [e.keyPath, u, c], e.replay !== null)
            n: {
              var o = e.replay;
              for (t = o.nodes, l = 0; l < t.length; l++) {
                var h = t[l];
                if (c === h[1]) {
                  if (h.length === 4) {
                    if (u !== null && u !== h[0])
                      throw Error(
                        k(490, h[0], u)
                      );
                    var s = h[2];
                    u = h[3], c = e.node, e.replay = {
                      nodes: s,
                      slots: u,
                      pendingTasks: 1
                    };
                    try {
                      if (Rr(n, e, a, r, i, f), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
                        throw Error(k(488));
                      e.replay.pendingTasks--;
                    } catch (w) {
                      if (typeof w == "object" && w !== null && (w === ol || typeof w.then == "function"))
                        throw e.node === c && (e.replay = o), w;
                      e.replay.pendingTasks--, i = sl(e.componentStack), a = e.blockedBoundary, r = w, i = Un(n, r, i), Yt(
                        n,
                        a,
                        s,
                        u,
                        r,
                        i
                      );
                    }
                    e.replay = o;
                  } else {
                    if (r !== Lr)
                      throw Error(
                        k(
                          490,
                          "Suspense",
                          yr(r) || "Unknown"
                        )
                      );
                    e: {
                      o = void 0, r = h[5], f = h[2], u = h[3], c = h[4] === null ? [] : h[4][2], h = h[4] === null ? null : h[4][3];
                      var b = e.keyPath, v = e.replay, y = e.blockedBoundary, A = e.hoistableState, R = i.children, T = i.fallback, O = /* @__PURE__ */ new Set();
                      i = 2 > e.formatContext.insertionMode ? Dt(
                        n,
                        O,
                        St(),
                        St()
                      ) : Dt(
                        n,
                        O,
                        null,
                        null
                      ), i.parentFlushed = !0, i.rootSegmentID = r, e.blockedBoundary = i, e.hoistableState = i.contentState, e.keyPath = a, e.replay = {
                        nodes: f,
                        slots: u,
                        pendingTasks: 1
                      };
                      try {
                        if (ye(n, e, R, -1), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
                          throw Error(k(488));
                        if (e.replay.pendingTasks--, i.pendingTasks === 0 && i.status === 0) {
                          i.status = 1, n.completedBoundaries.push(i);
                          break e;
                        }
                      } catch (w) {
                        i.status = 4, s = sl(e.componentStack), o = Un(
                          n,
                          w,
                          s
                        ), i.errorDigest = o, e.replay.pendingTasks--, n.clientRenderedBoundaries.push(i);
                      } finally {
                        e.blockedBoundary = y, e.hoistableState = A, e.replay = v, e.keyPath = b;
                      }
                      e = Lc(
                        n,
                        null,
                        {
                          nodes: c,
                          slots: h,
                          pendingTasks: 0
                        },
                        T,
                        -1,
                        y,
                        i.fallbackState,
                        O,
                        [a[0], "Suspense Fallback", a[2]],
                        e.formatContext,
                        e.context,
                        e.treeContext,
                        e.componentStack,
                        !0
                      ), Ol(e), n.pingedTasks.push(e);
                    }
                  }
                  t.splice(l, 1);
                  break n;
                }
              }
            }
          else Rr(n, e, a, r, i, f);
          return;
        case $u:
          throw Error(k(257));
        case Dr:
          if (s = l._init, l = s(l._payload), n.status === 12) throw null;
          Vn(n, e, l, t);
          return;
      }
      if (sa(l)) {
        Ca(n, e, l, t);
        return;
      }
      if (l === null || typeof l != "object" ? s = null : (s = Di && l[Di] || l["@@iterator"], s = typeof s == "function" ? s : null), s && (s = s.call(l))) {
        if (l = s.next(), !l.done) {
          i = [];
          do
            i.push(l.value), l = s.next();
          while (!l.done);
          Ca(n, e, i, t);
        }
        return;
      }
      if (typeof l.then == "function")
        return e.thenableState = null, Vn(n, e, Ac(l), t);
      if (l.$$typeof === _r)
        return Vn(
          n,
          e,
          l._currentValue,
          t
        );
      throw t = Object.prototype.toString.call(l), Error(
        k(
          31,
          t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
        )
      );
    }
    typeof l == "string" ? (t = e.blockedSegment, t !== null && (t.lastPushedText = Xi(
      t.chunks,
      l,
      n.renderState,
      t.lastPushedText
    ))) : (typeof l == "number" || typeof l == "bigint") && (t = e.blockedSegment, t !== null && (t.lastPushedText = Xi(
      t.chunks,
      "" + l,
      n.renderState,
      t.lastPushedText
    )));
  }
}
function Ca(n, e, l, t) {
  var r = e.keyPath;
  if (t !== -1 && (e.keyPath = [e.keyPath, "Fragment", t], e.replay !== null)) {
    for (var a = e.replay, i = a.nodes, f = 0; f < i.length; f++) {
      var u = i[f];
      if (u[1] === t) {
        t = u[2], u = u[3], e.replay = { nodes: t, slots: u, pendingTasks: 1 };
        try {
          if (Ca(n, e, l, -1), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
            throw Error(k(488));
          e.replay.pendingTasks--;
        } catch (h) {
          if (typeof h == "object" && h !== null && (h === ol || typeof h.then == "function"))
            throw h;
          e.replay.pendingTasks--, l = sl(e.componentStack);
          var c = e.blockedBoundary, o = h;
          l = Un(n, o, l), Yt(
            n,
            c,
            t,
            u,
            o,
            l
          );
        }
        e.replay = a, i.splice(f, 1);
        break;
      }
    }
    e.keyPath = r;
    return;
  }
  if (a = e.treeContext, i = l.length, e.replay !== null && (f = e.replay.slots, f !== null && typeof f == "object")) {
    for (t = 0; t < i; t++)
      u = l[t], e.treeContext = Ra(a, i, t), c = f[t], typeof c == "number" ? (ja(n, e, c, u, t), delete f[t]) : ye(n, e, u, t);
    e.treeContext = a, e.keyPath = r;
    return;
  }
  for (f = 0; f < i; f++)
    t = l[f], e.treeContext = Ra(a, i, f), ye(n, e, t, f);
  e.treeContext = a, e.keyPath = r;
}
function $a(n, e) {
  n = n.trackedPostpones, n !== null && (e = e.trackedContentKeyPath, e !== null && (e = n.workingMap.get(e), e !== void 0 && (e.length = 4, e[2] = [], e[3] = null)));
}
function bu(n, e, l) {
  return Lc(
    n,
    l,
    e.replay,
    e.node,
    e.childIndex,
    e.blockedBoundary,
    e.hoistableState,
    e.abortSet,
    e.keyPath,
    e.formatContext,
    e.context,
    e.treeContext,
    e.componentStack,
    e.isFallback
  );
}
function yu(n, e, l) {
  var t = e.blockedSegment, r = Al(
    n,
    t.chunks.length,
    null,
    e.formatContext,
    t.lastPushedText,
    !0
  );
  return t.children.push(r), t.lastPushedText = !1, gt(
    n,
    l,
    e.node,
    e.childIndex,
    e.blockedBoundary,
    r,
    e.blockedPreamble,
    e.hoistableState,
    e.abortSet,
    e.keyPath,
    e.formatContext,
    e.context,
    e.treeContext,
    e.componentStack,
    e.isFallback
  );
}
function ye(n, e, l, t) {
  var r = e.formatContext, a = e.context, i = e.keyPath, f = e.treeContext, u = e.componentStack, c = e.blockedSegment;
  if (c === null)
    try {
      return Vn(n, e, l, t);
    } catch (s) {
      if (Lt(), l = s === ol ? Er() : s, typeof l == "object" && l !== null) {
        if (typeof l.then == "function") {
          t = Pl(), n = bu(n, e, t).ping, l.then(n, n), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, We(a);
          return;
        }
        if (l.message === "Maximum call stack size exceeded") {
          l = Pl(), l = bu(n, e, l), n.pingedTasks.push(l), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, We(a);
          return;
        }
      }
    }
  else {
    var o = c.children.length, h = c.chunks.length;
    try {
      return Vn(n, e, l, t);
    } catch (s) {
      if (Lt(), c.children.length = o, c.chunks.length = h, l = s === ol ? Er() : s, typeof l == "object" && l !== null) {
        if (typeof l.then == "function") {
          t = Pl(), n = yu(n, e, t).ping, l.then(n, n), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, We(a);
          return;
        }
        if (l.message === "Maximum call stack size exceeded") {
          l = Pl(), l = yu(n, e, l), n.pingedTasks.push(l), e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, e.componentStack = u, We(a);
          return;
        }
      }
    }
  }
  throw e.formatContext = r, e.context = a, e.keyPath = i, e.treeContext = f, We(a), l;
}
function ys(n) {
  var e = n.blockedBoundary;
  n = n.blockedSegment, n !== null && (n.status = 3, Pa(this, e, n));
}
function Yt(n, e, l, t, r, a) {
  for (var i = 0; i < l.length; i++) {
    var f = l[i];
    if (f.length === 4)
      Yt(
        n,
        e,
        f[2],
        f[3],
        r,
        a
      );
    else {
      f = f[5];
      var u = n, c = a, o = Dt(
        u,
        /* @__PURE__ */ new Set(),
        null,
        null
      );
      o.parentFlushed = !0, o.rootSegmentID = f, o.status = 4, o.errorDigest = c, o.parentFlushed && u.clientRenderedBoundaries.push(o);
    }
  }
  if (l.length = 0, t !== null) {
    if (e === null) throw Error(k(487));
    if (e.status !== 4 && (e.status = 4, e.errorDigest = a, e.parentFlushed && n.clientRenderedBoundaries.push(e)), typeof t == "object") for (var h in t) delete t[h];
  }
}
function Dc(n, e, l) {
  var t = n.blockedBoundary, r = n.blockedSegment;
  if (r !== null) {
    if (r.status === 6) return;
    r.status = 3;
  }
  if (r = sl(n.componentStack), t === null) {
    if (e.status !== 13 && e.status !== 14) {
      if (t = n.replay, t === null) {
        Un(e, l, r), Nt(e, l);
        return;
      }
      t.pendingTasks--, t.pendingTasks === 0 && 0 < t.nodes.length && (n = Un(e, l, r), Yt(
        e,
        null,
        t.nodes,
        t.slots,
        l,
        n
      )), e.pendingRootTasks--, e.pendingRootTasks === 0 && ei(e);
    }
  } else
    t.pendingTasks--, t.status !== 4 && (t.status = 4, n = Un(e, l, r), t.status = 4, t.errorDigest = n, $a(e, t), t.parentFlushed && e.clientRenderedBoundaries.push(t)), t.fallbackAbortableTasks.forEach(function(a) {
      return Dc(a, e, l);
    }), t.fallbackAbortableTasks.clear();
  e.allPendingTasks--, e.allPendingTasks === 0 && xr(e);
}
function ni(n, e) {
  try {
    var l = n.renderState, t = l.onHeaders;
    if (t) {
      var r = l.headers;
      if (r) {
        l.headers = null;
        var a = r.preconnects;
        if (r.fontPreloads && (a && (a += ", "), a += r.fontPreloads), r.highImagePreloads && (a && (a += ", "), a += r.highImagePreloads), !e) {
          var i = l.styles.values(), f = i.next();
          n: for (; 0 < r.remainingCapacity && !f.done; f = i.next())
            for (var u = f.value.sheets.values(), c = u.next(); 0 < r.remainingCapacity && !c.done; c = u.next()) {
              var o = c.value, h = o.props, s = h.href, b = o.props, v = br(b.href, "style", {
                crossOrigin: b.crossOrigin,
                integrity: b.integrity,
                nonce: b.nonce,
                type: b.type,
                fetchPriority: b.fetchPriority,
                referrerPolicy: b.referrerPolicy,
                media: b.media
              });
              if (0 <= (r.remainingCapacity -= v.length + 2))
                l.resets.style[s] = Kn, a && (a += ", "), a += v, l.resets.style[s] = typeof h.crossOrigin == "string" || typeof h.integrity == "string" ? [h.crossOrigin, h.integrity] : Kn;
              else break n;
            }
        }
        t(a ? { Link: a } : {});
      }
    }
  } catch (y) {
    Un(n, y, {});
  }
}
function ei(n) {
  n.trackedPostpones === null && ni(n, !0), n.trackedPostpones === null && Ut(n), n.onShellError = xl, n = n.onShellReady, n();
}
function xr(n) {
  ni(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), Ut(n), n = n.onAllReady, n();
}
function zt(n, e) {
  if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null && e.children[0].id === -1) {
    var l = e.children[0];
    l.id = e.id, l.parentFlushed = !0, l.status === 1 && zt(n, l);
  } else n.completedSegments.push(e);
}
function Pa(n, e, l) {
  if (e === null) {
    if (l !== null && l.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(k(389));
      n.completedRootSegment = l;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && ei(n);
  } else
    e.pendingTasks--, e.status !== 4 && (e.pendingTasks === 0 ? (e.status === 0 && (e.status = 1), l !== null && l.parentFlushed && l.status === 1 && zt(e, l), e.parentFlushed && n.completedBoundaries.push(e), e.status === 1 && (e.fallbackAbortableTasks.forEach(ys, n), e.fallbackAbortableTasks.clear(), n.pendingRootTasks === 0 && n.trackedPostpones === null && e.contentPreamble !== null && Ut(n))) : l !== null && l.parentFlushed && l.status === 1 && (zt(e, l), e.completedSegments.length === 1 && e.parentFlushed && n.partialBoundaries.push(e)));
  n.allPendingTasks--, n.allPendingTasks === 0 && xr(n);
}
function ka(n) {
  if (n.status !== 14 && n.status !== 13) {
    var e = il, l = yl.H;
    yl.H = su;
    var t = yl.A;
    yl.A = ds;
    var r = hn;
    hn = n;
    var a = rr;
    rr = n.resumableState;
    try {
      var i = n.pingedTasks, f;
      for (f = 0; f < i.length; f++) {
        var u = i[f], c = n, o = u.blockedSegment;
        if (o === null) {
          var h = c;
          if (u.replay.pendingTasks !== 0) {
            We(u.context);
            try {
              if (typeof u.replay.slots == "number" ? ja(
                h,
                u,
                u.replay.slots,
                u.node,
                u.childIndex
              ) : xa(h, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length)
                throw Error(k(488));
              u.replay.pendingTasks--, u.abortSet.delete(u), Pa(h, u.blockedBoundary, null);
            } catch (I) {
              Lt();
              var s = I === ol ? Er() : I;
              if (typeof s == "object" && s !== null && typeof s.then == "function") {
                var b = u.ping;
                s.then(b, b), u.thenableState = Pl();
              } else {
                u.replay.pendingTasks--, u.abortSet.delete(u);
                var v = sl(u.componentStack);
                c = void 0;
                var y = h, A = u.blockedBoundary, R = h.status === 12 ? h.fatalError : s, T = u.replay.nodes, O = u.replay.slots;
                c = Un(
                  y,
                  R,
                  v
                ), Yt(
                  y,
                  A,
                  T,
                  O,
                  R,
                  c
                ), h.pendingRootTasks--, h.pendingRootTasks === 0 && ei(h), h.allPendingTasks--, h.allPendingTasks === 0 && xr(h);
              }
            } finally {
            }
          }
        } else if (h = void 0, y = o, y.status === 0) {
          y.status = 6, We(u.context);
          var w = y.children.length, z = y.chunks.length;
          try {
            xa(c, u), y.lastPushedText && y.textEmbedded && y.chunks.push(Ie), u.abortSet.delete(u), y.status = 1, Pa(c, u.blockedBoundary, y);
          } catch (I) {
            Lt(), y.children.length = w, y.chunks.length = z;
            var F = I === ol ? Er() : c.status === 12 ? c.fatalError : I;
            if (typeof F == "object" && F !== null && typeof F.then == "function") {
              y.status = 0, u.thenableState = Pl();
              var x = u.ping;
              F.then(x, x);
            } else {
              var C = sl(u.componentStack);
              u.abortSet.delete(u), y.status = 4;
              var S = u.blockedBoundary;
              h = Un(
                c,
                F,
                C
              ), S === null ? Nt(c, F) : (S.pendingTasks--, S.status !== 4 && (S.status = 4, S.errorDigest = h, $a(c, S), S.parentFlushed && c.clientRenderedBoundaries.push(S), c.pendingRootTasks === 0 && c.trackedPostpones === null && S.contentPreamble !== null && Ut(c))), c.allPendingTasks--, c.allPendingTasks === 0 && xr(c);
            }
          } finally {
          }
        }
      }
      i.splice(0, f), n.destination !== null && Br(n, n.destination);
    } catch (I) {
      Un(n, I, {}), Nt(n, I);
    } finally {
      rr = a, yl.H = l, yl.A = t, l === su && We(e), hn = r;
    }
  }
}
function na(n, e, l) {
  e.preambleChildren.length && l.push(e.preambleChildren);
  for (var t = !1, r = 0; r < e.children.length; r++)
    t = Nc(
      n,
      e.children[r],
      l
    ) || t;
  return t;
}
function Nc(n, e, l) {
  var t = e.boundary;
  if (t === null)
    return na(
      n,
      e,
      l
    );
  var r = t.contentPreamble, a = t.fallbackPreamble;
  if (r === null || a === null) return !1;
  switch (t.status) {
    case 1:
      if (ji(n.renderState, r), e = t.completedSegments[0], !e) throw Error(k(391));
      return na(
        n,
        e,
        l
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (e.status === 1)
        return ji(n.renderState, a), na(
          n,
          e,
          l
        );
    default:
      return !0;
  }
}
function Ut(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var e = [], l = Nc(
      n,
      n.completedRootSegment,
      e
    ), t = n.renderState.preamble;
    (l === !1 || t.headChunks && t.bodyChunks) && (n.completedPreambleSegments = e);
  }
}
function qt(n, e, l, t) {
  switch (l.parentFlushed = !0, l.status) {
    case 0:
      l.id = n.nextSegmentId++;
    case 5:
      return t = l.id, l.lastPushedText = !1, l.textEmbedded = !1, n = n.renderState, d(e, Mh), d(e, n.placeholderPrefix), n = E(t.toString(16)), d(e, n), X(e, Ah);
    case 1:
      l.status = 2;
      var r = !0, a = l.chunks, i = 0;
      l = l.children;
      for (var f = 0; f < l.length; f++) {
        for (r = l[f]; i < r.index; i++)
          d(e, a[i]);
        r = Bt(n, e, r, t);
      }
      for (; i < a.length - 1; i++)
        d(e, a[i]);
      return i < a.length && (r = X(e, a[i])), r;
    default:
      throw Error(k(390));
  }
}
function Bt(n, e, l, t) {
  var r = l.boundary;
  if (r === null)
    return qt(n, e, l, t);
  if (r.parentFlushed = !0, r.status === 4) {
    var a = r.errorDigest;
    return X(e, Lh), d(e, Dh), a && (d(e, zh), d(e, E(D(a))), d(
      e,
      Nh
    )), X(e, Bh), qt(n, e, l, t), (n = r.fallbackPreamble) && nu(e, n), X(e, Kt);
  }
  if (r.status !== 1)
    return r.status === 0 && (r.rootSegmentID = n.nextSegmentId++), 0 < r.completedSegments.length && n.partialBoundaries.push(r), $i(
      e,
      n.renderState,
      r.rootSegmentID
    ), t && (r = r.fallbackState, r.styles.forEach(ru, t), r.stylesheets.forEach(
      au,
      t
    )), qt(n, e, l, t), X(e, Kt);
  if (r.byteSize > n.progressiveChunkSize)
    return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), $i(
      e,
      n.renderState,
      r.rootSegmentID
    ), qt(n, e, l, t), X(e, Kt);
  if (t && (l = r.contentState, l.styles.forEach(ru, t), l.stylesheets.forEach(au, t)), X(e, Oh), l = r.completedSegments, l.length !== 1) throw Error(k(391));
  return Bt(n, e, l[0], t), (n = r.contentPreamble) && nu(e, n), X(e, Kt);
}
function ea(n, e, l, t) {
  return uo(
    e,
    n.renderState,
    l.parentFormatContext,
    l.id
  ), Bt(n, e, l, t), co(e, l.parentFormatContext);
}
function Eu(n, e, l) {
  for (var t = l.completedSegments, r = 0; r < t.length; r++)
    zc(
      n,
      e,
      l,
      t[r]
    );
  t.length = 0, xc(
    e,
    l.contentState,
    n.renderState
  ), t = n.resumableState, n = n.renderState, r = l.rootSegmentID, l = l.contentState;
  var a = n.stylesToHoist;
  return n.stylesToHoist = !1, d(e, n.startInlineScript), a ? t.instructions & 2 ? t.instructions & 8 ? d(e, Eo) : (t.instructions |= 8, d(e, yo)) : (t.instructions |= 10, d(e, bo)) : t.instructions & 2 ? d(e, vo) : (t.instructions |= 2, d(e, go)), t = E(r.toString(16)), d(e, n.boundaryPrefix), d(e, t), d(e, wo), d(e, n.segmentPrefix), d(e, t), a ? (d(e, To), Jo(e, l)) : d(e, Ro), l = X(e, xo), Rc(e, n) && l;
}
function zc(n, e, l, t) {
  if (t.status === 2) return !0;
  var r = l.contentState, a = t.id;
  if (a === -1) {
    if ((t.id = l.rootSegmentID) === -1)
      throw Error(k(392));
    return ea(n, e, t, r);
  }
  return a === l.rootSegmentID ? ea(n, e, t, r) : (ea(n, e, t, r), l = n.resumableState, n = n.renderState, d(e, n.startInlineScript), l.instructions & 1 ? d(e, ho) : (l.instructions |= 1, d(e, fo)), d(e, n.segmentPrefix), a = E(a.toString(16)), d(e, a), d(e, oo), d(e, n.placeholderPrefix), d(e, a), e = X(e, so), e);
}
function Br(n, e) {
  Bn = new Uint8Array(2048), Hn = 0;
  try {
    if (!(0 < n.pendingRootTasks)) {
      var l, t = n.completedRootSegment;
      if (t !== null) {
        if (t.status === 5) return;
        var r = n.completedPreambleSegments;
        if (r === null) return;
        var a = n.renderState, i = a.preamble, f = i.htmlChunks, u = i.headChunks, c;
        if (f) {
          for (c = 0; c < f.length; c++)
            d(e, f[c]);
          if (u)
            for (c = 0; c < u.length; c++)
              d(e, u[c]);
          else
            d(e, en("head")), d(e, gn);
        } else if (u)
          for (c = 0; c < u.length; c++)
            d(e, u[c]);
        var o = a.charsetChunks;
        for (c = 0; c < o.length; c++)
          d(e, o[c]);
        o.length = 0, a.preconnects.forEach(ve, e), a.preconnects.clear();
        var h = a.viewportChunks;
        for (c = 0; c < h.length; c++)
          d(e, h[c]);
        h.length = 0, a.fontPreloads.forEach(ve, e), a.fontPreloads.clear(), a.highImagePreloads.forEach(ve, e), a.highImagePreloads.clear(), a.styles.forEach(Go, e);
        var s = a.importMapChunks;
        for (c = 0; c < s.length; c++)
          d(e, s[c]);
        s.length = 0, a.bootstrapScripts.forEach(ve, e), a.scripts.forEach(ve, e), a.scripts.clear(), a.bulkPreloads.forEach(ve, e), a.bulkPreloads.clear();
        var b = a.hoistableChunks;
        for (c = 0; c < b.length; c++)
          d(e, b[c]);
        for (a = b.length = 0; a < r.length; a++) {
          var v = r[a];
          for (i = 0; i < v.length; i++)
            Bt(n, e, v[i], null);
        }
        var y = n.renderState.preamble, A = y.headChunks;
        (y.htmlChunks || A) && d(e, cl("head"));
        var R = y.bodyChunks;
        if (R)
          for (r = 0; r < R.length; r++)
            d(e, R[r]);
        Bt(n, e, t, null), n.completedRootSegment = null, Rc(e, n.renderState);
      }
      var T = n.renderState;
      t = 0;
      var O = T.viewportChunks;
      for (t = 0; t < O.length; t++)
        d(e, O[t]);
      O.length = 0, T.preconnects.forEach(ve, e), T.preconnects.clear(), T.fontPreloads.forEach(ve, e), T.fontPreloads.clear(), T.highImagePreloads.forEach(
        ve,
        e
      ), T.highImagePreloads.clear(), T.styles.forEach(Zo, e), T.scripts.forEach(ve, e), T.scripts.clear(), T.bulkPreloads.forEach(ve, e), T.bulkPreloads.clear();
      var w = T.hoistableChunks;
      for (t = 0; t < w.length; t++)
        d(e, w[t]);
      w.length = 0;
      var z = n.clientRenderedBoundaries;
      for (l = 0; l < z.length; l++) {
        var F = z[l];
        T = e;
        var x = n.resumableState, C = n.renderState, S = F.rootSegmentID, I = F.errorDigest;
        d(
          T,
          C.startInlineScript
        ), x.instructions & 4 ? d(T, Po) : (x.instructions |= 4, d(T, Co)), d(T, C.boundaryPrefix), d(T, E(S.toString(16))), d(T, ko), I && (d(
          T,
          Fo
        ), d(
          T,
          E(
            Ao(I || "")
          )
        ));
        var L = X(
          T,
          So
        );
        if (!L) {
          n.destination = null, l++, z.splice(0, l);
          return;
        }
      }
      z.splice(0, l);
      var M = n.completedBoundaries;
      for (l = 0; l < M.length; l++)
        if (!Eu(n, e, M[l])) {
          n.destination = null, l++, M.splice(0, l);
          return;
        }
      M.splice(0, l), Qr(e), Bn = new Uint8Array(2048), Hn = 0;
      var _ = n.partialBoundaries;
      for (l = 0; l < _.length; l++) {
        var W = _[l];
        n: {
          z = n, F = e;
          var Y = W.completedSegments;
          for (L = 0; L < Y.length; L++)
            if (!zc(
              z,
              F,
              W,
              Y[L]
            )) {
              L++, Y.splice(0, L);
              var J = !1;
              break n;
            }
          Y.splice(0, L), J = xc(
            F,
            W.contentState,
            z.renderState
          );
        }
        if (!J) {
          n.destination = null, l++, _.splice(0, l);
          return;
        }
      }
      _.splice(0, l);
      var V = n.completedBoundaries;
      for (l = 0; l < V.length; l++)
        if (!Eu(n, e, V[l])) {
          n.destination = null, l++, V.splice(0, l);
          return;
        }
      V.splice(0, l);
    }
  } finally {
    n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 ? (n.flushScheduled = !1, l = n.resumableState, l.hasBody && d(e, cl("body")), l.hasHtml && d(e, cl("html")), Qr(e), n.status = 14, e.close(), n.destination = null) : Qr(e);
  }
}
function Bc(n) {
  n.flushScheduled = n.destination !== null, uc(function() {
    return ka(n);
  }), Za(function() {
    n.status === 10 && (n.status = 11), n.trackedPostpones === null && ni(n, n.pendingRootTasks === 0);
  });
}
function gl(n) {
  n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null && (n.flushScheduled = !0, Za(function() {
    var e = n.destination;
    e ? Br(n, e) : n.flushScheduled = !1;
  }));
}
function Hc(n, e) {
  if (n.status === 13)
    n.status = 14, fc(e, n.fatalError);
  else if (n.status !== 14 && n.destination === null) {
    n.destination = e;
    try {
      Br(n, e);
    } catch (l) {
      Un(n, l, {}), Nt(n, l);
    }
  }
}
function Il(n, e) {
  (n.status === 11 || n.status === 10) && (n.status = 12);
  try {
    var l = n.abortableTasks;
    if (0 < l.size) {
      var t = e === void 0 ? Error(k(432)) : typeof e == "object" && e !== null && typeof e.then == "function" ? Error(k(530)) : e;
      n.fatalError = t, l.forEach(function(r) {
        return Dc(r, n, t);
      }), l.clear();
    }
    n.destination !== null && Br(n, n.destination);
  } catch (r) {
    Un(n, r, {}), Nt(n, r);
  }
}
function Wc() {
  var n = Ya.version;
  if (n !== "19.1.1")
    throw Error(
      k(
        527,
        n,
        "19.1.1"
      )
    );
}
Wc();
Wc();
Ir.prerender = function(n, e) {
  return new Promise(function(l, t) {
    var r = e ? e.onHeaders : void 0, a;
    r && (a = function(o) {
      r(new Headers(o));
    });
    var i = dc(
      e ? e.identifierPrefix : void 0,
      e ? e.unstable_externalRuntimeSrc : void 0,
      e ? e.bootstrapScriptContent : void 0,
      e ? e.bootstrapScripts : void 0,
      e ? e.bootstrapModules : void 0
    ), f = bs(
      n,
      i,
      sc(
        i,
        void 0,
        e ? e.unstable_externalRuntimeSrc : void 0,
        e ? e.importMap : void 0,
        a,
        e ? e.maxHeadersLength : void 0
      ),
      gc(e ? e.namespaceURI : void 0),
      e ? e.progressiveChunkSize : void 0,
      e ? e.onError : void 0,
      function() {
        var o = {
          prelude: new ReadableStream(
            {
              type: "bytes",
              pull: function(h) {
                Hc(f, h);
              },
              cancel: function(h) {
                f.destination = null, Il(f, h);
              }
            },
            { highWaterMark: 0 }
          )
        };
        l(o);
      },
      void 0,
      void 0,
      t,
      e ? e.onPostpone : void 0
    );
    if (e && e.signal) {
      var u = e.signal;
      if (u.aborted) Il(f, u.reason);
      else {
        var c = function() {
          Il(f, u.reason), u.removeEventListener("abort", c);
        };
        u.addEventListener("abort", c);
      }
    }
    Bc(f);
  });
};
Ir.renderToReadableStream = function(n, e) {
  return new Promise(function(l, t) {
    var r, a, i = new Promise(function(b, v) {
      a = b, r = v;
    }), f = e ? e.onHeaders : void 0, u;
    f && (u = function(b) {
      f(new Headers(b));
    });
    var c = dc(
      e ? e.identifierPrefix : void 0,
      e ? e.unstable_externalRuntimeSrc : void 0,
      e ? e.bootstrapScriptContent : void 0,
      e ? e.bootstrapScripts : void 0,
      e ? e.bootstrapModules : void 0
    ), o = Ic(
      n,
      c,
      sc(
        c,
        e ? e.nonce : void 0,
        e ? e.unstable_externalRuntimeSrc : void 0,
        e ? e.importMap : void 0,
        u,
        e ? e.maxHeadersLength : void 0
      ),
      gc(e ? e.namespaceURI : void 0),
      e ? e.progressiveChunkSize : void 0,
      e ? e.onError : void 0,
      a,
      function() {
        var b = new ReadableStream(
          {
            type: "bytes",
            pull: function(v) {
              Hc(o, v);
            },
            cancel: function(v) {
              o.destination = null, Il(o, v);
            }
          },
          { highWaterMark: 0 }
        );
        b.allReady = i, l(b);
      },
      function(b) {
        i.catch(function() {
        }), t(b);
      },
      r,
      e ? e.onPostpone : void 0,
      e ? e.formState : void 0
    );
    if (e && e.signal) {
      var h = e.signal;
      if (h.aborted) Il(o, h.reason);
      else {
        var s = function() {
          Il(o, h.reason), h.removeEventListener("abort", s);
        };
        h.addEventListener("abort", s);
      }
    }
    Bc(o);
  });
};
Ir.version = "19.1.1";
var Hr, Cr;
Hr = Pr, Cr = Ir;
Hr.version;
var Es = Hr.renderToString;
Hr.renderToStaticMarkup;
Cr.renderToReadableStream;
Cr.resume && Cr.resume;
function ws(n) {
  return 1 - Math.pow(1 - n, 3);
}
function Ps({
  icons: n,
  images: e,
  showControl: l = !0
}) {
  const t = cn.useRef(null), [r, a] = cn.useState([]), [i, f] = cn.useState(!1), [u, c] = cn.useState(!1), [o, h] = cn.useState({ x: 0, y: 0 }), [s, b] = cn.useState({ x: 0, y: 0 }), [v, y] = cn.useState(null), A = cn.useRef(0), R = cn.useRef({ x: 0, y: 0 }), T = cn.useRef([]), O = cn.useRef([]);
  cn.useEffect(() => {
    const x = window.matchMedia("(prefers-reduced-motion: reduce)");
    x.matches && c(!0);
    const C = (S) => {
      c(S.matches);
    };
    return x.addEventListener("change", C), () => x.removeEventListener("change", C);
  }, []), cn.useEffect(() => {
    if (!n && !e) return;
    const x = n ?? e ?? [];
    O.current = new Array(x.length).fill(!1);
    const C = x.map((S, I) => {
      const L = document.createElement("canvas");
      L.width = 40, L.height = 40;
      const M = L.getContext("2d");
      if (M)
        if (e) {
          const _ = new Image();
          _.crossOrigin = "anonymous", _.src = x[I], _.onload = () => {
            M.clearRect(0, 0, L.width, L.height), M.beginPath(), M.arc(20, 20, 20, 0, Math.PI * 2), M.closePath(), M.clip(), M.drawImage(_, 0, 0, 40, 40), O.current[I] = !0;
          };
        } else {
          M.scale(0.4, 0.4);
          const _ = Es(S), W = new Image();
          W.src = "data:image/svg+xml;base64," + btoa(_), W.onload = () => {
            M.clearRect(0, 0, L.width, L.height), M.drawImage(W, 0, 0), O.current[I] = !0;
          };
        }
      return L;
    });
    T.current = C;
  }, [n, e]), cn.useEffect(() => {
    const x = n ?? e ?? [], C = [], S = x.length || 20, I = 2 / S, L = Math.PI * (3 - Math.sqrt(5));
    for (let M = 0; M < S; M++) {
      const _ = M * I - 1 + I / 2, W = Math.sqrt(1 - _ * _), Y = M * L, J = Math.cos(Y) * W, V = Math.sin(Y) * W;
      C.push({
        x: J * 100,
        y: _ * 100,
        z: V * 100,
        scale: 1,
        opacity: 1,
        id: M
      });
    }
    a(C);
  }, [n, e]);
  const w = (x) => {
    var M;
    const C = (M = t.current) == null ? void 0 : M.getBoundingClientRect();
    if (!C || !t.current) return;
    const S = x.clientX - C.left, I = x.clientY - C.top;
    t.current.getContext("2d") && (r.forEach((_) => {
      const W = Math.cos(R.current.x), Y = Math.sin(R.current.x), J = Math.cos(R.current.y), V = Math.sin(R.current.y), Gn = _.x * J - _.z * V, m = _.x * V + _.z * J, tn = _.y * W + m * Y, rn = t.current.width / 2 + Gn, mn = t.current.height / 2 + tn, An = 20 * ((m + 200) / 300), Xn = S - rn, ln = I - mn;
      if (Xn * Xn + ln * ln < An * An) {
        const Z = -Math.atan2(
          _.y,
          Math.sqrt(_.x * _.x + _.z * _.z)
        ), pn = Math.atan2(_.x, _.z), on = R.current.x, ze = R.current.y, Be = Math.sqrt(
          Math.pow(Z - on, 2) + Math.pow(pn - ze, 2)
        ), Ze = Math.min(2e3, Math.max(800, Be * 1e3));
        y({
          x: Z,
          y: pn,
          startX: on,
          startY: ze,
          distance: Be,
          startTime: performance.now(),
          duration: Ze
        });
        return;
      }
    }), f(!0), h({ x: x.clientX, y: x.clientY }));
  }, z = (x) => {
    var S;
    const C = (S = t.current) == null ? void 0 : S.getBoundingClientRect();
    if (C) {
      const I = x.clientX - C.left, L = x.clientY - C.top;
      b({ x: I, y: L });
    }
    if (i) {
      const I = x.clientX - o.x, L = x.clientY - o.y;
      R.current = {
        x: R.current.x + L * 2e-3,
        y: R.current.y + I * 2e-3
      }, h({ x: x.clientX, y: x.clientY });
    }
  }, F = () => {
    f(!1);
  };
  return cn.useEffect(() => {
    const x = t.current, C = x == null ? void 0 : x.getContext("2d");
    if (x && C) {
      const S = () => {
        C.clearRect(0, 0, x.width, x.height);
        const I = x.width / 2, L = x.height / 2, M = Math.sqrt(I * I + L * L), _ = s.x - I, W = s.y - L, J = 3e-3 + Math.sqrt(_ * _ + W * W) / M * 0.01;
        if (v) {
          const m = performance.now() - v.startTime, tn = Math.min(1, m / v.duration), rn = ws(tn);
          R.current = {
            x: v.startX + (v.x - v.startX) * rn,
            y: v.startY + (v.y - v.startY) * rn
          }, tn >= 1 && y(null);
        } else !i && !u && (R.current = {
          x: R.current.x + W / x.height * J,
          y: R.current.y + _ / x.width * J
        });
        r.forEach((m, tn) => {
          const rn = Math.cos(R.current.x), mn = Math.sin(R.current.x), qn = Math.cos(R.current.y), An = Math.sin(R.current.y), Xn = m.x * qn - m.z * An, ln = m.x * An + m.z * qn, Z = m.y * rn + ln * mn, pn = (ln + 200) / 300, on = Math.max(0.2, Math.min(1, (ln + 150) / 200));
          C.save(), C.translate(
            x.width / 2 + Xn,
            x.height / 2 + Z
          ), C.scale(pn, pn), C.globalAlpha = on, n || e ? T.current[tn] && O.current[tn] && C.drawImage(T.current[tn], -20, -20, 40, 40) : (C.beginPath(), C.arc(0, 0, 20, 0, Math.PI * 2), C.fillStyle = "#4444ff", C.fill(), C.fillStyle = "white", C.textAlign = "center", C.textBaseline = "middle", C.font = "16px Arial", C.fillText(`${m.id + 1}`, 0, 0)), C.restore();
        });
        const V = !!(n || e) && !O.current.every((m) => m);
        (!u || i || v !== null || V) && (A.current = requestAnimationFrame(S));
      };
      S();
    }
    return () => {
      A.current && cancelAnimationFrame(A.current);
    };
  }, [
    n,
    e,
    r,
    i,
    u,
    s,
    v
  ]), /* @__PURE__ */ it.jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ it.jsx(
      "canvas",
      {
        ref: t,
        width: 400,
        height: 400,
        onMouseDown: w,
        onMouseMove: z,
        onMouseUp: F,
        onMouseLeave: F,
        className: "rounded-lg",
        "aria-label": "Interactive 3D Icon Cloud",
        role: "img"
      }
    ),
    l && /* @__PURE__ */ it.jsx(
      Yc,
      {
        variant: "outline",
        size: "icon",
        onClick: () => c(!u),
        "aria-label": u ? "Play Animation" : "Pause Animation",
        className: "absolute top-2 right-2",
        children: u ? /* @__PURE__ */ it.jsx(Uc, { size: 16 }) : /* @__PURE__ */ it.jsx(Zc, { size: 16 })
      }
    )
  ] });
}
export {
  Ps as I
};
