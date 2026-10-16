var Pr = Object.defineProperty;
var $r = Object.getPrototypeOf;
var Rr = Reflect.get;
var Kt = (e) => {
  throw TypeError(e);
};
var Dr = (e, t, n) => t in e ? Pr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => Dr(e, typeof t != "symbol" ? t + "" : t, n), lt = (e, t, n) => t.has(e) || Kt("Cannot " + n);
var H = (e, t, n) => (lt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), me = (e, t, n) => t.has(e) ? Kt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), X = (e, t, n, r) => (lt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ct = (e, t, n) => (lt(e, t, "access private method"), n);
var Jt = (e, t, n) => Rr($r(e), n, t);
import { w as J, F as le, R as Fr, T as Br, I as St, E as Qt } from "./code-comparison-demo-Ct7dtFNw.js";
import { e as fl } from "./code-comparison-demo-Ct7dtFNw.js";
let D = class extends Error {
  constructor(t) {
    super(t), this.name = "ShikiError";
  }
}, It = class extends Error {
  constructor(t) {
    super(t), this.name = "ShikiError";
  }
};
function Ur() {
  return 2147483648;
}
function Gr() {
  return typeof performance < "u" ? performance.now() : Date.now();
}
const jr = (e, t) => e + (t - e % t) % t;
async function Hr(e) {
  let t, n;
  const r = {};
  function a(f) {
    n = f, r.HEAPU8 = new Uint8Array(f), r.HEAPU32 = new Uint32Array(f);
  }
  function i(f, d, C) {
    r.HEAPU8.copyWithin(f, d, d + C);
  }
  function o(f) {
    try {
      return t.grow(f - n.byteLength + 65535 >>> 16), a(t.buffer), 1;
    } catch {
    }
  }
  function s(f) {
    const d = r.HEAPU8.length;
    f = f >>> 0;
    const C = Ur();
    if (f > C)
      return !1;
    for (let y = 1; y <= 4; y *= 2) {
      let b = d * (1 + 0.2 / y);
      b = Math.min(b, f + 100663296);
      const k = Math.min(C, jr(Math.max(f, b), 65536));
      if (o(k))
        return !0;
    }
    return !1;
  }
  const l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function c(f, d, C = 1024) {
    const y = d + C;
    let b = d;
    for (; f[b] && !(b >= y); )
      ++b;
    if (b - d > 16 && f.buffer && l)
      return l.decode(f.subarray(d, b));
    let k = "";
    for (; d < b; ) {
      let v = f[d++];
      if (!(v & 128)) {
        k += String.fromCharCode(v);
        continue;
      }
      const E = f[d++] & 63;
      if ((v & 224) === 192) {
        k += String.fromCharCode((v & 31) << 6 | E);
        continue;
      }
      const O = f[d++] & 63;
      if ((v & 240) === 224 ? v = (v & 15) << 12 | E << 6 | O : v = (v & 7) << 18 | E << 12 | O << 6 | f[d++] & 63, v < 65536)
        k += String.fromCharCode(v);
      else {
        const j = v - 65536;
        k += String.fromCharCode(55296 | j >> 10, 56320 | j & 1023);
      }
    }
    return k;
  }
  function u(f, d) {
    return f ? c(r.HEAPU8, f, d) : "";
  }
  const p = {
    emscripten_get_now: Gr,
    emscripten_memcpy_big: i,
    emscripten_resize_heap: s,
    fd_write: () => 0
  };
  async function m() {
    const d = await e({
      env: p,
      wasi_snapshot_preview1: p
    });
    t = d.memory, a(t.buffer), Object.assign(r, d), r.UTF8ToString = u;
  }
  return await m(), r;
}
var Wr = Object.defineProperty, zr = (e, t, n) => t in e ? Wr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, I = (e, t, n) => (zr(e, typeof t != "symbol" ? t + "" : t, n), n);
let R = null;
function Vr(e) {
  throw new It(e.UTF8ToString(e.getLastOnigError()));
}
class Ye {
  constructor(t) {
    I(this, "utf16Length"), I(this, "utf8Length"), I(this, "utf16Value"), I(this, "utf8Value"), I(this, "utf16OffsetToUtf8"), I(this, "utf8OffsetToUtf16");
    const n = t.length, r = Ye._utf8ByteLength(t), a = r !== n, i = a ? new Uint32Array(n + 1) : null;
    a && (i[n] = r);
    const o = a ? new Uint32Array(r + 1) : null;
    a && (o[r] = n);
    const s = new Uint8Array(r);
    let l = 0;
    for (let c = 0; c < n; c++) {
      const u = t.charCodeAt(c);
      let p = u, m = !1;
      if (u >= 55296 && u <= 56319 && c + 1 < n) {
        const f = t.charCodeAt(c + 1);
        f >= 56320 && f <= 57343 && (p = (u - 55296 << 10) + 65536 | f - 56320, m = !0);
      }
      a && (i[c] = l, m && (i[c + 1] = l), p <= 127 ? o[l + 0] = c : p <= 2047 ? (o[l + 0] = c, o[l + 1] = c) : p <= 65535 ? (o[l + 0] = c, o[l + 1] = c, o[l + 2] = c) : (o[l + 0] = c, o[l + 1] = c, o[l + 2] = c, o[l + 3] = c)), p <= 127 ? s[l++] = p : p <= 2047 ? (s[l++] = 192 | (p & 1984) >>> 6, s[l++] = 128 | (p & 63) >>> 0) : p <= 65535 ? (s[l++] = 224 | (p & 61440) >>> 12, s[l++] = 128 | (p & 4032) >>> 6, s[l++] = 128 | (p & 63) >>> 0) : (s[l++] = 240 | (p & 1835008) >>> 18, s[l++] = 128 | (p & 258048) >>> 12, s[l++] = 128 | (p & 4032) >>> 6, s[l++] = 128 | (p & 63) >>> 0), m && c++;
    }
    this.utf16Length = n, this.utf8Length = r, this.utf16Value = t, this.utf8Value = s, this.utf16OffsetToUtf8 = i, this.utf8OffsetToUtf16 = o;
  }
  static _utf8ByteLength(t) {
    let n = 0;
    for (let r = 0, a = t.length; r < a; r++) {
      const i = t.charCodeAt(r);
      let o = i, s = !1;
      if (i >= 55296 && i <= 56319 && r + 1 < a) {
        const l = t.charCodeAt(r + 1);
        l >= 56320 && l <= 57343 && (o = (i - 55296 << 10) + 65536 | l - 56320, s = !0);
      }
      o <= 127 ? n += 1 : o <= 2047 ? n += 2 : o <= 65535 ? n += 3 : n += 4, s && r++;
    }
    return n;
  }
  createString(t) {
    const n = t.omalloc(this.utf8Length);
    return t.HEAPU8.set(this.utf8Value, n), n;
  }
}
const Q = class {
  constructor(e) {
    if (I(this, "id", ++Q.LAST_ID), I(this, "_onigBinding"), I(this, "content"), I(this, "utf16Length"), I(this, "utf8Length"), I(this, "utf16OffsetToUtf8"), I(this, "utf8OffsetToUtf16"), I(this, "ptr"), !R)
      throw new It("Must invoke loadWasm first.");
    this._onigBinding = R, this.content = e;
    const t = new Ye(e);
    this.utf16Length = t.utf16Length, this.utf8Length = t.utf8Length, this.utf16OffsetToUtf8 = t.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = t.utf8OffsetToUtf16, this.utf8Length < 1e4 && !Q._sharedPtrInUse ? (Q._sharedPtr || (Q._sharedPtr = R.omalloc(1e4)), Q._sharedPtrInUse = !0, R.HEAPU8.set(t.utf8Value, Q._sharedPtr), this.ptr = Q._sharedPtr) : this.ptr = t.createString(R);
  }
  convertUtf8OffsetToUtf16(e) {
    return this.utf8OffsetToUtf16 ? e < 0 ? 0 : e > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e] : e;
  }
  convertUtf16OffsetToUtf8(e) {
    return this.utf16OffsetToUtf8 ? e < 0 ? 0 : e > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e] : e;
  }
  dispose() {
    this.ptr === Q._sharedPtr ? Q._sharedPtrInUse = !1 : this._onigBinding.ofree(this.ptr);
  }
};
let Be = Q;
I(Be, "LAST_ID", 0);
I(Be, "_sharedPtr", 0);
I(Be, "_sharedPtrInUse", !1);
class qr {
  constructor(t) {
    if (I(this, "_onigBinding"), I(this, "_ptr"), !R)
      throw new It("Must invoke loadWasm first.");
    const n = [], r = [];
    for (let s = 0, l = t.length; s < l; s++) {
      const c = new Ye(t[s]);
      n[s] = c.createString(R), r[s] = c.utf8Length;
    }
    const a = R.omalloc(4 * t.length);
    R.HEAPU32.set(n, a / 4);
    const i = R.omalloc(4 * t.length);
    R.HEAPU32.set(r, i / 4);
    const o = R.createOnigScanner(a, i, t.length);
    for (let s = 0, l = t.length; s < l; s++)
      R.ofree(n[s]);
    R.ofree(i), R.ofree(a), o === 0 && Vr(R), this._onigBinding = R, this._ptr = o;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(t, n, r) {
    let a = 0;
    if (typeof r == "number" && (a = r), typeof t == "string") {
      t = new Be(t);
      const i = this._findNextMatchSync(t, n, !1, a);
      return t.dispose(), i;
    }
    return this._findNextMatchSync(t, n, !1, a);
  }
  _findNextMatchSync(t, n, r, a) {
    const i = this._onigBinding, o = i.findNextOnigScannerMatch(this._ptr, t.id, t.ptr, t.utf8Length, t.convertUtf16OffsetToUtf8(n), a);
    if (o === 0)
      return null;
    const s = i.HEAPU32;
    let l = o / 4;
    const c = s[l++], u = s[l++], p = [];
    for (let m = 0; m < u; m++) {
      const f = t.convertUtf8OffsetToUtf16(s[l++]), d = t.convertUtf8OffsetToUtf16(s[l++]);
      p[m] = {
        start: f,
        end: d,
        length: d - f
      };
    }
    return {
      index: c,
      captureIndices: p
    };
  }
}
function Xr(e) {
  return typeof e.instantiator == "function";
}
function Kr(e) {
  return typeof e.default == "function";
}
function Jr(e) {
  return typeof e.data < "u";
}
function Qr(e) {
  return typeof Response < "u" && e instanceof Response;
}
function Zr(e) {
  var t;
  return typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) || typeof Buffer < "u" && ((t = Buffer.isBuffer) == null ? void 0 : t.call(Buffer, e)) || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer || typeof Uint32Array < "u" && e instanceof Uint32Array;
}
let je;
function Yr(e) {
  if (je)
    return je;
  async function t() {
    R = await Hr(async (n) => {
      let r = e;
      return r = await r, typeof r == "function" && (r = await r(n)), typeof r == "function" && (r = await r(n)), Xr(r) ? r = await r.instantiator(n) : Kr(r) ? r = await r.default(n) : (Jr(r) && (r = r.data), Qr(r) ? typeof WebAssembly.instantiateStreaming == "function" ? r = await ea(r)(n) : r = await ta(r)(n) : Zr(r) ? r = await ut(r)(n) : r instanceof WebAssembly.Module ? r = await ut(r)(n) : "default" in r && r.default instanceof WebAssembly.Module && (r = await ut(r.default)(n))), "instance" in r && (r = r.instance), "exports" in r && (r = r.exports), r;
    });
  }
  return je = t(), je;
}
function ut(e) {
  return (t) => WebAssembly.instantiate(e, t);
}
function ea(e) {
  return (t) => WebAssembly.instantiateStreaming(e, t);
}
function ta(e) {
  return async (t) => {
    const n = await e.arrayBuffer();
    return WebAssembly.instantiate(n, t);
  };
}
let na;
function ra() {
  return na;
}
async function et(e) {
  return e && await Yr(e), {
    createScanner(t) {
      return new qr(t.map((n) => typeof n == "string" ? n : n.source));
    },
    createString(t) {
      return new Be(t);
    }
  };
}
const aa = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
class Ue {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
Ue.prototype.normal = {};
Ue.prototype.property = {};
Ue.prototype.space = void 0;
function Nn(e, t) {
  const n = {}, r = {};
  for (const a of e)
    Object.assign(n, a.property), Object.assign(r, a.normal);
  return new Ue(n, r, t);
}
function vt(e) {
  return e.toLowerCase();
}
class W {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
W.prototype.attribute = "";
W.prototype.booleanish = !1;
W.prototype.boolean = !1;
W.prototype.commaOrSpaceSeparated = !1;
W.prototype.commaSeparated = !1;
W.prototype.defined = !1;
W.prototype.mustUseProperty = !1;
W.prototype.number = !1;
W.prototype.overloadedBoolean = !1;
W.prototype.property = "";
W.prototype.spaceSeparated = !1;
W.prototype.space = void 0;
let ia = 0;
const x = ke(), M = ke(), xt = ke(), h = ke(), _ = ke(), be = ke(), z = ke();
function ke() {
  return 2 ** ++ia;
}
const At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: x,
  booleanish: M,
  commaOrSpaceSeparated: z,
  commaSeparated: be,
  number: h,
  overloadedBoolean: xt,
  spaceSeparated: _
}, Symbol.toStringTag, { value: "Module" })), pt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(At)
);
class Pt extends W {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, a) {
    let i = -1;
    if (super(t, n), Zt(this, "space", a), typeof r == "number")
      for (; ++i < pt.length; ) {
        const o = pt[i];
        Zt(this, pt[i], (r & At[o]) === At[o]);
      }
  }
}
Pt.prototype.defined = !0;
function Zt(e, t, n) {
  n && (e[t] = n);
}
function Le(e) {
  const t = {}, n = {};
  for (const [r, a] of Object.entries(e.properties)) {
    const i = new Pt(
      r,
      e.transform(e.attributes || {}, r),
      a,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), t[r] = i, n[vt(r)] = r, n[vt(i.attribute)] = r;
  }
  return new Ue(t, n, e.space);
}
const On = Le({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: M,
    ariaAutoComplete: null,
    ariaBusy: M,
    ariaChecked: M,
    ariaColCount: h,
    ariaColIndex: h,
    ariaColSpan: h,
    ariaControls: _,
    ariaCurrent: null,
    ariaDescribedBy: _,
    ariaDetails: null,
    ariaDisabled: M,
    ariaDropEffect: _,
    ariaErrorMessage: null,
    ariaExpanded: M,
    ariaFlowTo: _,
    ariaGrabbed: M,
    ariaHasPopup: null,
    ariaHidden: M,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: _,
    ariaLevel: h,
    ariaLive: null,
    ariaModal: M,
    ariaMultiLine: M,
    ariaMultiSelectable: M,
    ariaOrientation: null,
    ariaOwns: _,
    ariaPlaceholder: null,
    ariaPosInSet: h,
    ariaPressed: M,
    ariaReadOnly: M,
    ariaRelevant: null,
    ariaRequired: M,
    ariaRoleDescription: _,
    ariaRowCount: h,
    ariaRowIndex: h,
    ariaRowSpan: h,
    ariaSelected: M,
    ariaSetSize: h,
    ariaSort: null,
    ariaValueMax: h,
    ariaValueMin: h,
    ariaValueNow: h,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Mn(e, t) {
  return t in e ? e[t] : t;
}
function In(e, t) {
  return Mn(e, t.toLowerCase());
}
const oa = Le({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: be,
    acceptCharset: _,
    accessKey: _,
    action: null,
    allow: null,
    allowFullScreen: x,
    allowPaymentRequest: x,
    allowUserMedia: x,
    alpha: x,
    alt: null,
    as: null,
    async: x,
    autoCapitalize: null,
    autoComplete: _,
    autoFocus: x,
    autoPlay: x,
    blocking: _,
    capture: null,
    charSet: null,
    checked: x,
    cite: null,
    className: _,
    closedBy: null,
    colorSpace: null,
    cols: h,
    colSpan: h,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: M,
    controls: x,
    controlsList: _,
    coords: h | be,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: x,
    defer: x,
    dir: null,
    dirName: null,
    disabled: x,
    download: xt,
    draggable: M,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: x,
    formTarget: null,
    headers: _,
    height: h,
    hidden: xt,
    high: h,
    href: null,
    hrefLang: null,
    htmlFor: _,
    httpEquiv: _,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: x,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: x,
    itemId: null,
    itemProp: _,
    itemRef: _,
    itemScope: x,
    itemType: _,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: x,
    low: h,
    manifest: null,
    max: null,
    maxLength: h,
    media: null,
    method: null,
    min: null,
    minLength: h,
    multiple: x,
    muted: x,
    name: null,
    nonce: null,
    noModule: x,
    noValidate: x,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: x,
    optimum: h,
    pattern: null,
    ping: _,
    placeholder: null,
    playsInline: x,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: x,
    referrerPolicy: null,
    rel: _,
    required: x,
    reversed: x,
    rows: h,
    rowSpan: h,
    sandbox: _,
    scope: null,
    scoped: x,
    seamless: x,
    selected: x,
    shadowRootClonable: x,
    shadowRootCustomElementRegistry: x,
    shadowRootDelegatesFocus: x,
    shadowRootMode: null,
    shadowRootSerializable: x,
    shape: null,
    size: h,
    sizes: null,
    slot: null,
    span: h,
    spellCheck: M,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: h,
    step: null,
    style: null,
    tabIndex: h,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: x,
    useMap: null,
    value: M,
    width: h,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: _,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: h,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: h,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: x,
    // Lists. Use CSS to reduce space between items instead
    declare: x,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: h,
    // `<img>` and `<object>`
    leftMargin: h,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: h,
    // `<body>`
    marginWidth: h,
    // `<body>`
    noResize: x,
    // `<frame>`
    noHref: x,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: x,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: x,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: h,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: M,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: h,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: h,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: x,
    disablePictureInPicture: x,
    disableRemotePlayback: x,
    exportParts: be,
    part: _,
    prefix: null,
    property: null,
    results: h,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: In
}), sa = Le({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: z,
    accentHeight: h,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: h,
    amplitude: h,
    arabicForm: null,
    ascent: h,
    attributeName: null,
    attributeType: null,
    azimuth: h,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: h,
    by: null,
    calcMode: null,
    capHeight: h,
    className: _,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: h,
    diffuseConstant: h,
    direction: null,
    display: null,
    dur: null,
    divisor: h,
    dominantBaseline: null,
    download: x,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: h,
    enableBackground: null,
    end: null,
    event: null,
    exponent: h,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: h,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: be,
    g2: be,
    glyphName: be,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: h,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: h,
    horizOriginX: h,
    horizOriginY: h,
    id: null,
    ideographic: h,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: h,
    k: h,
    k1: h,
    k2: h,
    k3: h,
    k4: h,
    kernelMatrix: z,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: h,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: h,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: h,
    overlineThickness: h,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: h,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: _,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: h,
    pointsAtY: h,
    pointsAtZ: h,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: z,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: z,
    rev: z,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: z,
    requiredFeatures: z,
    requiredFonts: z,
    requiredFormats: z,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: h,
    specularExponent: h,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: h,
    strikethroughThickness: h,
    string: null,
    stroke: null,
    strokeDashArray: z,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: h,
    strokeOpacity: h,
    strokeWidth: null,
    style: null,
    surfaceScale: h,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: z,
    tabIndex: h,
    tableValues: null,
    target: null,
    targetX: h,
    targetY: h,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: z,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: h,
    underlineThickness: h,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: h,
    values: null,
    vAlphabetic: h,
    vMathematical: h,
    vectorEffect: null,
    vHanging: h,
    vIdeographic: h,
    version: null,
    vertAdvY: h,
    vertOriginX: h,
    vertOriginY: h,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: h,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Mn
}), Pn = Le({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), $n = Le({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: In
}), Rn = Le({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), la = /[A-Z]/g, Yt = /-[a-z]/g, ca = /^data[-\w.:]+$/i;
function ua(e, t) {
  const n = vt(t);
  let r = t, a = W;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && ca.test(t)) {
    if (t.charAt(4) === "-") {
      const i = t.slice(5).replace(Yt, fa);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = t.slice(4);
      if (!Yt.test(i)) {
        let o = i.replace(la, pa);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    a = Pt;
  }
  return new a(r, t);
}
function pa(e) {
  return "-" + e.toLowerCase();
}
function fa(e) {
  return e.charAt(1).toUpperCase();
}
const ma = Nn([On, oa, Pn, $n, Rn], "html"), Dn = Nn([On, sa, Pn, $n, Rn], "svg"), en = {}.hasOwnProperty;
function da(e, t) {
  const n = t || {};
  function r(a, ...i) {
    let o = r.invalid;
    const s = r.handlers;
    if (a && en.call(a, e)) {
      const l = String(a[e]);
      o = en.call(s, l) ? s[l] : r.unknown;
    }
    if (o)
      return o.call(this, a, ...i);
  }
  return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
const ga = /["&'<>`]/g, ha = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ya = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
), Ca = /[|\\{}()[\]^$+*?.]/g, tn = /* @__PURE__ */ new WeakMap();
function ba(e, t) {
  if (e = e.replace(
    t.subset ? ka(t.subset) : ga,
    r
  ), t.subset || t.escapeOnly)
    return e;
  return e.replace(ha, n).replace(ya, r);
  function n(a, i, o) {
    return t.format(
      (a.charCodeAt(0) - 55296) * 1024 + a.charCodeAt(1) - 56320 + 65536,
      o.charCodeAt(i + 2),
      t
    );
  }
  function r(a, i, o) {
    return t.format(
      a.charCodeAt(0),
      o.charCodeAt(i + 1),
      t
    );
  }
}
function ka(e) {
  let t = tn.get(e);
  return t || (t = wa(e), tn.set(e, t)), t;
}
function wa(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(Ca, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
const Sa = /[\dA-Fa-f]/;
function va(e, t, n) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return n && t && !Sa.test(String.fromCharCode(t)) ? r : r + ";";
}
const xa = /\d/;
function Aa(e, t, n) {
  const r = "&#" + String(e);
  return n && t && !xa.test(String.fromCharCode(t)) ? r : r + ";";
}
const Ea = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
], ft = {
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  fnof: "ƒ",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  bull: "•",
  hellip: "…",
  prime: "′",
  Prime: "″",
  oline: "‾",
  frasl: "⁄",
  weierp: "℘",
  image: "ℑ",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  permil: "‰",
  lsaquo: "‹",
  rsaquo: "›",
  euro: "€"
}, Ta = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], Fn = {}.hasOwnProperty, Et = {};
let He;
for (He in ft)
  Fn.call(ft, He) && (Et[ft[He]] = He);
const _a = /[^\dA-Za-z]/;
function La(e, t, n, r) {
  const a = String.fromCharCode(e);
  if (Fn.call(Et, a)) {
    const i = Et[a], o = "&" + i;
    return n && Ea.includes(i) && !Ta.includes(i) && (!r || t && t !== 61 && _a.test(String.fromCharCode(t))) ? o : o + ";";
  }
  return "";
}
function Na(e, t, n) {
  let r = va(e, t, n.omitOptionalSemicolons), a;
  if ((n.useNamedReferences || n.useShortestReferences) && (a = La(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !a) && n.useShortestReferences) {
    const i = Aa(e, t, n.omitOptionalSemicolons);
    i.length < r.length && (r = i);
  }
  return a && (!n.useShortestReferences || a.length < r.length) ? a : r;
}
function Ae(e, t) {
  return ba(e, Object.assign({ format: Na }, t));
}
const Oa = /^>|^->|<!--|-->|--!>|<!-$/g, Ma = [">"], Ia = ["<", ">"];
function Pa(e, t, n, r) {
  return r.settings.bogusComments ? "<?" + Ae(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: Ma
    })
  ) + ">" : "<!--" + e.value.replace(Oa, a) + "-->";
  function a(i) {
    return Ae(
      i,
      Object.assign({}, r.settings.characterReferences, {
        subset: Ia
      })
    );
  }
}
function $a(e, t, n, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function nn(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, a = n.indexOf(t);
  for (; a !== -1; )
    r++, a = n.indexOf(t, a + t.length);
  return r;
}
function Ra(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
function Da(e) {
  return e.join(" ").trim();
}
const Fa = /[ \t\n\f\r]/g;
function $t(e) {
  return typeof e == "object" ? e.type === "text" ? rn(e.value) : !1 : rn(e);
}
function rn(e) {
  return e.replace(Fa, "") === "";
}
const $ = Un(1), Bn = Un(-1), Ba = [];
function Un(e) {
  return t;
  function t(n, r, a) {
    const i = n ? n.children : Ba;
    let o = (r || 0) + e, s = i[o];
    if (!a)
      for (; s && $t(s); )
        o += e, s = i[o];
    return s;
  }
}
const Ua = {}.hasOwnProperty;
function Gn(e) {
  return t;
  function t(n, r, a) {
    return Ua.call(e, n.tagName) && e[n.tagName](n, r, a);
  }
}
const Rt = Gn({
  body: ja,
  caption: mt,
  colgroup: mt,
  dd: Va,
  dt: za,
  head: mt,
  html: Ga,
  li: Wa,
  optgroup: qa,
  option: Xa,
  p: Ha,
  rp: an,
  rt: an,
  tbody: Ja,
  td: on,
  tfoot: Qa,
  th: on,
  thead: Ka,
  tr: Za
});
function mt(e, t, n) {
  const r = $(n, t, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && $t(r.value.charAt(0)));
}
function Ga(e, t, n) {
  const r = $(n, t);
  return !r || r.type !== "comment";
}
function ja(e, t, n) {
  const r = $(n, t);
  return !r || r.type !== "comment";
}
function Ha(e, t, n) {
  const r = $(n, t);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || // Confusing parent.
  !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function Wa(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && r.tagName === "li";
}
function za(e, t, n) {
  const r = $(n, t);
  return !!(r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd"));
}
function Va(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function an(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function qa(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function Xa(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function Ka(e, t, n) {
  const r = $(n, t);
  return !!(r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot"));
}
function Ja(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function Qa(e, t, n) {
  return !$(n, t);
}
function Za(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && r.tagName === "tr";
}
function on(e, t, n) {
  const r = $(n, t);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const Ya = Gn({
  body: ni,
  colgroup: ri,
  head: ti,
  html: ei,
  tbody: ai
});
function ei(e) {
  const t = $(e, -1);
  return !t || t.type !== "comment";
}
function ti(e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of e.children)
    if (r.type === "element" && (r.tagName === "base" || r.tagName === "title")) {
      if (t.has(r.tagName)) return !1;
      t.add(r.tagName);
    }
  const n = e.children[0];
  return !n || n.type === "element";
}
function ni(e) {
  const t = $(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && $t(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function ri(e, t, n) {
  const r = Bn(n, t), a = $(e, -1, !0);
  return n && r && r.type === "element" && r.tagName === "colgroup" && Rt(r, n.children.indexOf(r), n) ? !1 : !!(a && a.type === "element" && a.tagName === "col");
}
function ai(e, t, n) {
  const r = Bn(n, t), a = $(e, -1);
  return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && Rt(r, n.children.indexOf(r), n) ? !1 : !!(a && a.type === "element" && a.tagName === "tr");
}
const We = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
    [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
    [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function ii(e, t, n, r) {
  const a = r.schema, i = a.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let o = a.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const s = [];
  let l;
  a.space === "html" && e.tagName === "svg" && (r.schema = Dn);
  const c = oi(r, e.properties), u = r.all(
    a.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = a, u && (o = !1), (c || !i || !Ya(e, t, n)) && (s.push("<", e.tagName, c ? " " + c : ""), o && (a.space === "svg" || r.settings.closeSelfClosing) && (l = c.charAt(c.length - 1), (!r.settings.tightSelfClosing || l === "/" || l && l !== '"' && l !== "'") && s.push(" "), s.push("/")), s.push(">")), s.push(u), !o && (!i || !Rt(e, t, n)) && s.push("</" + e.tagName + ">"), s.join("");
}
function oi(e, t) {
  const n = [];
  let r = -1, a;
  if (t) {
    for (a in t)
      if (t[a] !== null && t[a] !== void 0) {
        const i = si(e, a, t[a]);
        i && n.push(i);
      }
  }
  for (; ++r < n.length; ) {
    const i = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
    r !== n.length - 1 && i !== '"' && i !== "'" && (n[r] += " ");
  }
  return n.join("");
}
function si(e, t, n) {
  const r = ua(e.schema, t), a = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, i = e.settings.allowDangerousCharacters ? 0 : 1;
  let o = e.quote, s;
  if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean) && (typeof n != "string" || n === r.attribute || n === "") && (n = !!n), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return "";
  const l = Ae(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: We.name[a][i]
    })
  );
  return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? Ra : Da)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? l : (e.settings.preferUnquoted && (s = Ae(
    n,
    Object.assign({}, e.settings.characterReferences, {
      attribute: !0,
      subset: We.unquoted[a][i]
    })
  )), s !== n && (e.settings.quoteSmart && nn(n, o) > nn(n, e.alternative) && (o = e.alternative), s = o + Ae(
    n,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: (o === "'" ? We.single : We.double)[a][i],
      attribute: !0
    })
  ) + o), l + (s && "=" + s));
}
const li = ["<", "&"];
function jn(e, t, n, r) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : Ae(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: li
    })
  );
}
function ci(e, t, n, r) {
  return r.settings.allowDangerousHtml ? e.value : jn(e, t, n, r);
}
function ui(e, t, n, r) {
  return r.all(e);
}
const pi = da("type", {
  invalid: fi,
  unknown: mi,
  handlers: { comment: Pa, doctype: $a, element: ii, raw: ci, root: ui, text: jn }
});
function fi(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function mi(e) {
  const t = (
    /** @type {Nodes} */
    e
  );
  throw new Error("Cannot compile unknown node `" + t.type + "`");
}
const di = {}, gi = {}, hi = [];
function yi(e, t) {
  const n = t || di, r = n.quote || '"', a = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: Ci,
    all: bi,
    settings: {
      omitOptionalTags: n.omitOptionalTags || !1,
      allowParseErrors: n.allowParseErrors || !1,
      allowDangerousCharacters: n.allowDangerousCharacters || !1,
      quoteSmart: n.quoteSmart || !1,
      preferUnquoted: n.preferUnquoted || !1,
      tightAttributes: n.tightAttributes || !1,
      upperDoctype: n.upperDoctype || !1,
      tightDoctype: n.tightDoctype || !1,
      bogusComments: n.bogusComments || !1,
      tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
      tightSelfClosing: n.tightSelfClosing || !1,
      collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
      allowDangerousHtml: n.allowDangerousHtml || !1,
      voids: n.voids || aa,
      characterReferences: n.characterReferences || gi,
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1
    },
    schema: n.space === "svg" ? Dn : ma,
    quote: r,
    alternative: a
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function Ci(e, t, n) {
  return pi(e, t, n, this);
}
function bi(e) {
  const t = [], n = e && e.children || hi;
  let r = -1;
  for (; ++r < n.length; )
    t[r] = this.one(n[r], r, e);
  return t.join("");
}
const Dt = String.raw, sn = Dt`(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})`, ln = Dt`\u{E0061}-\u{E007A}`, ki = () => new RegExp(Dt`[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[${ln}]{2}[\u{E0030}-\u{E0039}${ln}]{1,3}\u{E007F}|${sn}(?:\u200D${sn})*`, "gu"), wi = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function Si(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] >= t && e[n]++;
}
function vi(e, t, n, r) {
  return e.slice(0, t) + r + e.slice(t + n.length);
}
const q = Object.freeze({
  DEFAULT: "DEFAULT",
  CHAR_CLASS: "CHAR_CLASS"
});
function Ft(e, t, n, r) {
  const a = new RegExp(String.raw`${t}|(?<$skip>\[\^?|\\?.)`, "gsu"), i = [!1];
  let o = 0, s = "";
  for (const l of e.matchAll(a)) {
    const { 0: c, groups: { $skip: u } } = l;
    if (!u && (!r || r === q.DEFAULT == !o)) {
      n instanceof Function ? s += n(l, {
        context: o ? q.CHAR_CLASS : q.DEFAULT,
        negated: i[i.length - 1]
      }) : s += n;
      continue;
    }
    c[0] === "[" ? (o++, i.push(c[1] === "^")) : c === "]" && o && (o--, i.pop()), s += c;
  }
  return s;
}
function Hn(e, t, n, r) {
  Ft(e, t, n, r);
}
function xi(e, t, n = 0, r) {
  if (!new RegExp(t, "su").test(e))
    return null;
  const a = new RegExp(`${t}|(?<$skip>\\\\?.)`, "gsu");
  a.lastIndex = n;
  let i = 0, o;
  for (; o = a.exec(e); ) {
    const { 0: s, groups: { $skip: l } } = o;
    if (!l && (!r || r === q.DEFAULT == !i))
      return o;
    s === "[" ? i++ : s === "]" && i && i--, a.lastIndex == o.index && a.lastIndex++;
  }
  return null;
}
function ze(e, t, n) {
  return !!xi(e, t, 0, n);
}
function Ai(e, t) {
  const n = /\\?./gsu;
  n.lastIndex = t;
  let r = e.length, a = 0, i = 1, o;
  for (; o = n.exec(e); ) {
    const [s] = o;
    if (s === "[")
      a++;
    else if (a)
      s === "]" && a--;
    else if (s === "(")
      i++;
    else if (s === ")" && (i--, !i)) {
      r = o.index;
      break;
    }
  }
  return e.slice(t, r);
}
const cn = new RegExp(String.raw`(?<noncapturingStart>${wi})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
function Ei(e, t) {
  const n = (t == null ? void 0 : t.hiddenCaptures) ?? [];
  let r = (t == null ? void 0 : t.captureTransfers) ?? /* @__PURE__ */ new Map();
  if (!/\(\?>/.test(e))
    return {
      pattern: e,
      captureTransfers: r,
      hiddenCaptures: n
    };
  const a = "(?>", i = "(?:(?=(", o = [0], s = [];
  let l = 0, c = 0, u = NaN, p;
  do {
    p = !1;
    let m = 0, f = 0, d = !1, C;
    for (cn.lastIndex = Number.isNaN(u) ? 0 : u + i.length; C = cn.exec(e); ) {
      const { 0: y, index: b, groups: { capturingStart: k, noncapturingStart: v } } = C;
      if (y === "[")
        m++;
      else if (m)
        y === "]" && m--;
      else if (y === a && !d)
        u = b, d = !0;
      else if (d && v)
        f++;
      else if (k)
        d ? f++ : (l++, o.push(l + c));
      else if (y === ")" && d) {
        if (!f) {
          c++;
          const E = l + c;
          if (e = `${e.slice(0, u)}${i}${e.slice(u + a.length, b)}))<$$${E}>)${e.slice(b + 1)}`, p = !0, s.push(E), Si(n, E), r.size) {
            const O = /* @__PURE__ */ new Map();
            r.forEach((j, L) => {
              O.set(
                L >= E ? L + 1 : L,
                j.map((B) => B >= E ? B + 1 : B)
              );
            }), r = O;
          }
          break;
        }
        f--;
      }
    }
  } while (p);
  return n.push(...s), e = Ft(
    e,
    String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`,
    ({ 0: m, groups: { backrefNum: f, wrappedBackrefNum: d } }) => {
      if (f) {
        const C = +f;
        if (C > o.length - 1)
          throw new Error(`Backref "${m}" greater than number of captures`);
        return `\\${o[C]}`;
      }
      return `\\${d}`;
    },
    q.DEFAULT
  ), {
    pattern: e,
    captureTransfers: r,
    hiddenCaptures: n
  };
}
const Wn = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, dt = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${Wn})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
function Ti(e) {
  if (!new RegExp(`${Wn}\\+`).test(e))
    return {
      pattern: e
    };
  const t = [];
  let n = null, r = null, a = "", i = 0, o;
  for (dt.lastIndex = 0; o = dt.exec(e); ) {
    const { 0: s, index: l, groups: { qBase: c, qMod: u, invalidQ: p } } = o;
    if (s === "[")
      i || (r = l), i++;
    else if (s === "]")
      i ? i-- : r = null;
    else if (!i)
      if (u === "+" && a && !a.startsWith("(")) {
        if (p)
          throw new Error(`Invalid quantifier "${s}"`);
        let m = -1;
        if (/^\{\d+\}$/.test(c))
          e = vi(e, l + c.length, u, "");
        else {
          if (a === ")" || a === "]") {
            const f = a === ")" ? n : r;
            if (f === null)
              throw new Error(`Invalid unmatched "${a}"`);
            e = `${e.slice(0, f)}(?>${e.slice(f, l)}${c})${e.slice(l + s.length)}`;
          } else
            e = `${e.slice(0, l - a.length)}(?>${a}${c})${e.slice(l + s.length)}`;
          m += 4;
        }
        dt.lastIndex += m;
      } else s[0] === "(" ? t.push(l) : s === ")" && (n = t.length ? t.pop() : null);
    a = s;
  }
  return {
    pattern: e
  };
}
const V = String.raw, _i = V`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, Tt = V`\(\?R=(?<rDepth>[^\)]+)\)|${_i}`, tt = V`\(\?<(?![=!])(?<captureName>[^>]+)>`, zn = V`${tt}|(?<unnamed>\()(?!\?)`, de = new RegExp(V`${tt}|${Tt}|\(\?|\\?.`, "gsu"), gt = "Cannot use multiple overlapping recursions";
function Li(e, t) {
  const { hiddenCaptures: n, mode: r } = {
    hiddenCaptures: [],
    mode: "plugin",
    ...t
  };
  let a = (t == null ? void 0 : t.captureTransfers) ?? /* @__PURE__ */ new Map();
  if (!new RegExp(Tt, "su").test(e))
    return {
      pattern: e,
      captureTransfers: a,
      hiddenCaptures: n
    };
  if (r === "plugin" && ze(e, V`\(\?\(DEFINE\)`, q.DEFAULT))
    throw new Error("DEFINE groups cannot be used with recursion");
  const i = [], o = ze(e, V`\\[1-9]`, q.DEFAULT), s = /* @__PURE__ */ new Map(), l = [];
  let c = !1, u = 0, p = 0, m;
  for (de.lastIndex = 0; m = de.exec(e); ) {
    const { 0: f, groups: { captureName: d, rDepth: C, gRNameOrNum: y, gRDepth: b } } = m;
    if (f === "[")
      u++;
    else if (u)
      f === "]" && u--;
    else if (C) {
      if (un(C), c)
        throw new Error(gt);
      if (o)
        throw new Error(
          // When used in `external` mode by transpilers other than Regex+, backrefs might have
          // gone through conversion from named to numbered, so avoid a misleading error
          `${r === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`
        );
      const k = e.slice(0, m.index), v = e.slice(de.lastIndex);
      if (ze(v, Tt, q.DEFAULT))
        throw new Error(gt);
      const E = +C - 1;
      e = pn(
        k,
        v,
        E,
        !1,
        n,
        i,
        p
      ), a = mn(
        a,
        k,
        E,
        i.length,
        0,
        p
      );
      break;
    } else if (y) {
      un(b);
      let k = !1;
      for (const ae of l)
        if (ae.name === y || ae.num === +y) {
          if (k = !0, ae.hasRecursedWithin)
            throw new Error(gt);
          break;
        }
      if (!k)
        throw new Error(V`Recursive \g cannot be used outside the referenced group "${r === "external" ? y : V`\g<${y}&R=${b}>`}"`);
      const v = s.get(y), E = Ai(e, v);
      if (o && ze(E, V`${tt}|\((?!\?)`, q.DEFAULT))
        throw new Error(
          // When used in `external` mode by transpilers other than Regex+, backrefs might have
          // gone through conversion from named to numbered, so avoid a misleading error
          `${r === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`
        );
      const O = e.slice(v, m.index), j = E.slice(O.length + f.length), L = i.length, B = +b - 1, pe = pn(
        O,
        j,
        B,
        !0,
        n,
        i,
        p
      );
      a = mn(
        a,
        O,
        B,
        i.length - L,
        L,
        p
      );
      const fe = e.slice(0, v), Oe = e.slice(v + E.length);
      e = `${fe}${pe}${Oe}`, de.lastIndex += pe.length - f.length - O.length - j.length, l.forEach((ae) => ae.hasRecursedWithin = !0), c = !0;
    } else if (d)
      p++, s.set(String(p), de.lastIndex), s.set(d, de.lastIndex), l.push({
        num: p,
        name: d
      });
    else if (f[0] === "(") {
      const k = f === "(";
      k && (p++, s.set(String(p), de.lastIndex)), l.push(k ? { num: p } : {});
    } else f === ")" && l.pop();
  }
  return n.push(...i), {
    pattern: e,
    captureTransfers: a,
    hiddenCaptures: n
  };
}
function un(e) {
  const t = `Max depth must be integer between 2 and 100; used ${e}`;
  if (!/^[1-9]\d*$/.test(e))
    throw new Error(t);
  if (e = +e, e < 2 || e > 100)
    throw new Error(t);
}
function pn(e, t, n, r, a, i, o) {
  const s = /* @__PURE__ */ new Set();
  r && Hn(e + t, tt, ({ groups: { captureName: c } }) => {
    s.add(c);
  }, q.DEFAULT);
  const l = [
    n,
    r ? s : null,
    a,
    i,
    o
  ];
  return `${e}${fn(`(?:${e}`, "forward", ...l)}(?:)${fn(`${t})`, "backward", ...l)}${t}`;
}
function fn(e, t, n, r, a, i, o) {
  const l = (u) => t === "forward" ? u + 2 : n - u + 2 - 1;
  let c = "";
  for (let u = 0; u < n; u++) {
    const p = l(u);
    c += Ft(
      e,
      V`${zn}|\\k<(?<backref>[^>]+)>`,
      ({ 0: m, groups: { captureName: f, unnamed: d, backref: C } }) => {
        if (C && r && !r.has(C))
          return m;
        const y = `_$${p}`;
        if (d || f) {
          const b = o + i.length + 1;
          return i.push(b), Ni(a, b), d ? m : `(?<${f}${y}>`;
        }
        return V`\k<${C}${y}>`;
      },
      q.DEFAULT
    );
  }
  return c;
}
function Ni(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] >= t && e[n]++;
}
function mn(e, t, n, r, a, i) {
  if (e.size && r) {
    let o = 0;
    Hn(t, zn, () => o++, q.DEFAULT);
    const s = i - o + a, l = /* @__PURE__ */ new Map();
    return e.forEach((c, u) => {
      const p = (r - o * n) / n, m = o * n, f = u > s + o ? u + r : u, d = [];
      for (const C of c)
        if (C <= s)
          d.push(C);
        else if (C > s + o + p)
          d.push(C + r);
        else if (C <= s + o)
          for (let y = 0; y <= n; y++)
            d.push(C + o * y);
        else
          for (let y = 0; y <= n; y++)
            d.push(C + m + p * y);
      l.set(f, d);
    }), l;
  }
  return e;
}
var P = String.fromCodePoint, w = String.raw, Te = {
  flagGroups: (() => {
    try {
      new RegExp("(?i:)");
    } catch {
      return !1;
    }
    return !0;
  })(),
  unicodeSets: (() => {
    try {
      new RegExp("", "v");
    } catch {
      return !1;
    }
    return !0;
  })()
};
Te.literalHyphenIncorrectlyCreatesRange = (() => {
  if (!Te.unicodeSets)
    return !1;
  try {
    new RegExp(w`[\d\-a]`, "v");
  } catch {
    return !0;
  }
  return !1;
})();
function Xe(e, { enable: t, disable: n }) {
  return {
    dotAll: !(n != null && n.dotAll) && !!(t != null && t.dotAll || e.dotAll),
    ignoreCase: !(n != null && n.ignoreCase) && !!(t != null && t.ignoreCase || e.ignoreCase)
  };
}
function _e(e, t, n) {
  return e.has(t) || e.set(t, n), e.get(t);
}
function _t(e, t) {
  return dn[e] >= dn[t];
}
function Y(e, t) {
  if (!e)
    throw new Error(t ?? "Value expected");
  return e;
}
var dn = {
  ES2025: 2025,
  ES2024: 2024,
  ES2018: 2018
}, Oi = (
  /** @type {const} */
  {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
  }
);
function Vn(e) {
  if ((e == null ? void 0 : e.target) !== void 0 && !Oi[e.target])
    throw new Error(`Unexpected target "${e.target}"`);
  const t = {
    // Sets the level of emulation rigor/strictness.
    accuracy: "default",
    // Disables advanced emulation that relies on returning a `RegExp` subclass, resulting in
    // certain patterns not being emulatable.
    avoidSubclass: !1,
    // Oniguruma flags; a string with `i`, `m`, `x`, `D`, `S`, `W` in any order (all optional).
    // Oniguruma's `m` is equivalent to JavaScript's `s` (`dotAll`).
    flags: "",
    // Include JavaScript flag `g` (`global`) in the result.
    global: !1,
    // Include JavaScript flag `d` (`hasIndices`) in the result.
    hasIndices: !1,
    // Delay regex construction until first use if the transpiled pattern is at least this length.
    lazyCompileLength: 1 / 0,
    // JavaScript version used for generated regexes. Using `auto` detects the best value based on
    // your environment. Later targets allow faster processing, simpler generated source, and
    // support for additional features.
    target: "auto",
    // Disables optimizations that simplify the pattern when it doesn't change the meaning.
    verbose: !1,
    ...e,
    // Advanced options that override standard behavior, error checking, and flags when enabled.
    rules: {
      // Useful with TextMate grammars that merge backreferences across patterns.
      allowOrphanBackrefs: !1,
      // Use ASCII-based `\b` and `\B`, which increases search performance of generated regexes.
      asciiWordBoundaries: !1,
      // Allow unnamed captures and numbered calls (backreferences and subroutines) when using
      // named capture. This is Oniguruma option `ONIG_OPTION_CAPTURE_GROUP`; on by default in
      // `vscode-oniguruma`.
      captureGroup: !1,
      // Change the recursion depth limit from Oniguruma's `20` to an integer `2`–`20`.
      recursionLimit: 20,
      // `^` as `\A`; `$` as`\Z`. Improves search performance of generated regexes without changing
      // meaning if searching line by line. This is Oniguruma option `ONIG_OPTION_SINGLELINE`.
      singleline: !1,
      ...e == null ? void 0 : e.rules
    }
  };
  return t.target === "auto" && (t.target = Te.flagGroups ? "ES2025" : Te.unicodeSets ? "ES2024" : "ES2018"), t;
}
var Mi = /* @__PURE__ */ new Set([
  P(304),
  // İ
  P(305)
  // ı
]);
function qn(e) {
  if (Mi.has(e))
    return [e];
  const t = /* @__PURE__ */ new Set(), n = e.toLowerCase(), r = n.toUpperCase(), a = Ri.get(n), i = Pi.get(n), o = $i.get(n);
  return [...r].length === 1 && t.add(r), o && t.add(o), a && t.add(a), t.add(n), i && t.add(i), [...t];
}
var Xn = new Set(
  `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/)
), Kn = /* @__PURE__ */ new Map();
for (const e of Xn)
  Kn.set(nt(e), e);
var Ii = /* @__PURE__ */ new Set([
  // ES2024 properties of strings; none are supported by Oniguruma
  "Basic_Emoji",
  "Emoji_Keycap_Sequence",
  "RGI_Emoji",
  "RGI_Emoji_Flag_Sequence",
  "RGI_Emoji_Modifier_Sequence",
  "RGI_Emoji_Tag_Sequence",
  "RGI_Emoji_ZWJ_Sequence"
]), Jn = /* @__PURE__ */ new Map();
for (const e of Ii)
  Jn.set(nt(e), e);
var Pi = /* @__PURE__ */ new Map([
  ["s", P(383)],
  // s, ſ
  [P(383), "s"]
  // ſ, s
]), $i = /* @__PURE__ */ new Map([
  [P(223), P(7838)],
  // ß, ẞ
  [P(107), P(8490)],
  // k, K (Kelvin)
  [P(229), P(8491)],
  // å, Å (Angstrom)
  [P(969), P(8486)]
  // ω, Ω (Ohm)
]), Ri = new Map([
  ie(453),
  ie(456),
  ie(459),
  ie(498),
  ...ht(8072, 8079),
  ...ht(8088, 8095),
  ...ht(8104, 8111),
  ie(8124),
  ie(8140),
  ie(8188)
]), Qn = /* @__PURE__ */ new Map([
  ["alnum", w`[\p{Alpha}\p{Nd}]`],
  ["alpha", w`\p{Alpha}`],
  ["ascii", w`\p{ASCII}`],
  ["blank", w`[\p{Zs}\t]`],
  ["cntrl", w`\p{cntrl}`],
  ["digit", w`\p{Nd}`],
  ["graph", w`[\P{space}&&\P{cntrl}&&\P{Cn}&&\P{Cs}]`],
  ["lower", w`\p{Lower}`],
  ["print", w`[[\P{space}&&\P{cntrl}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
  ["punct", w`[\p{P}\p{S}]`],
  // New value from Oniguruma 6.9.9
  ["space", w`\p{space}`],
  ["upper", w`\p{Upper}`],
  ["word", w`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
  ["xdigit", w`\p{AHex}`]
]), Di = /* @__PURE__ */ new Set([
  "alnum",
  "blank",
  "graph",
  "print",
  "word",
  "xdigit"
  // The following are available with the same name in JS (see `JsUnicodeProperties`), so can be
  // handled as standard Unicode properties
  // 'alpha', // (JS: Alpha)
  // 'ascii', // (JS: ASCII)
  // 'cntrl', // (JS: cntrl)
  // 'digit', // (JS: digit)
  // 'lower', // (JS: Lower)
  // 'punct', // (JS: punct)
  // 'space', // (JS: space)
  // 'upper', // (JS: Upper)
]);
function Fi(e, t) {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}
function nt(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}
function ie(e) {
  const t = P(e);
  return [t.toLowerCase(), t];
}
function ht(e, t) {
  return Fi(e, t).map((n) => ie(n));
}
var Zn = /* @__PURE__ */ new Set([
  "Lower",
  "Lowercase",
  "Upper",
  "Uppercase",
  "Ll",
  "Lowercase_Letter",
  "Lt",
  "Titlecase_Letter",
  "Lu",
  "Uppercase_Letter"
  // The `Changes_When_*` properties (and their aliases) could be included, but they're very rare.
  // Some other properties include a handful of chars with specific cases only, but these chars are
  // generally extreme edge cases and using such properties case insensitively generally produces
  // undesired behavior anyway
]), S = (
  /** @type {const} */
  {
    Alternator: "Alternator",
    Assertion: "Assertion",
    Backreference: "Backreference",
    Character: "Character",
    CharacterClassClose: "CharacterClassClose",
    CharacterClassHyphen: "CharacterClassHyphen",
    CharacterClassIntersector: "CharacterClassIntersector",
    CharacterClassOpen: "CharacterClassOpen",
    CharacterSet: "CharacterSet",
    Directive: "Directive",
    GroupClose: "GroupClose",
    GroupOpen: "GroupOpen",
    Subroutine: "Subroutine",
    Quantifier: "Quantifier",
    // These aren't allowed in char classes, so they aren't equivalent to JS `[\q{}]`
    VariableLengthCharacterSet: "VariableLengthCharacterSet",
    // Intermediate representation not included in results
    EscapedNumber: "EscapedNumber"
  }
), F = {
  any: "any",
  digit: "digit",
  dot: "dot",
  hex: "hex",
  non_newline: "non_newline",
  posix: "posix",
  property: "property",
  space: "space",
  word: "word"
}, rt = {
  flags: "flags",
  keep: "keep"
}, G = {
  absent_repeater: "absent_repeater",
  atomic: "atomic",
  capturing: "capturing",
  group: "group",
  lookahead: "lookahead",
  lookbehind: "lookbehind"
}, gn = /* @__PURE__ */ new Map([
  ["a", 7],
  // alert/bell (Not available in JS)
  ["b", 8],
  // backspace (only in char classes)
  ["e", 27],
  // escape (Not available in JS)
  ["f", 12],
  // form feed
  ["n", 10],
  // line feed
  ["r", 13],
  // carriage return
  ["t", 9],
  // horizontal tab
  ["v", 11]
  // vertical tab
]), Yn = w`\[\^?`, er = `c.? | C(?:-.?)?|${// Unicode property; Onig considers `\p` an identity escape, but e.g. `\p{`, `\p{ ^L}`, and
// `\p{gc=L}` are invalid
w`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${// Hex encoded byte sequence; attempt match before other `\xNN` hex char
w`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${// Hex char
w`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${// Enclosed octal code point
w`o\{[^\}]*\}?`}|${// Escaped number
w`\d{1,3}`}`, tr = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, Ve = new RegExp(w`
  \\ (?:
    ${er}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*
  )?
  | ${tr.source}
  | ${Yn}
  | .
`.replace(/\s+/g, ""), "gsu"), yt = new RegExp(w`
  \\ (?:
    ${er}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${Yn}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function nr(e, t = "", n) {
  if (n = {
    // `ONIG_OPTION_CAPTURE_GROUP`
    captureGroup: !1,
    // `ONIG_OPTION_SINGLELINE`
    singleline: !1,
    ...n
  }, typeof e != "string")
    throw new Error("String expected as pattern");
  if (!/^[imxDSW]*$/.test(t))
    throw new Error(`Flags "${t}" includes unsupported value`);
  const r = t.includes("x"), a = [r], i = {
    captureGroup: n.captureGroup,
    getCurrentModX: () => a.at(-1),
    numOpenGroups: 0,
    popModX() {
      a.pop();
    },
    pushModX(p) {
      a.push(p);
    },
    replaceCurrentModX(p) {
      a[a.length - 1] = p;
    },
    singleline: n.singleline
  };
  let o = [], s;
  for (Ve.lastIndex = 0; s = Ve.exec(e); ) {
    const p = Bi(i, e, s[0], Ve.lastIndex);
    p.tokens ? o.push(...p.tokens) : p.token && o.push(p.token), p.lastIndex !== void 0 && (Ve.lastIndex = p.lastIndex);
  }
  const l = [];
  let c = 0;
  o.forEach((p) => {
    p.type === S.GroupOpen && (p.kind === G.capturing ? p.number = ++c : p.raw === "(" && l.push(p));
  }), c || l.forEach((p, m) => {
    p.kind = G.capturing, p.number = m + 1;
  });
  const u = c || l.length;
  return o = o.map(
    (p) => p.type === S.EscapedNumber ? Xi(p, u) : p
  ).flat(), {
    tokens: o,
    flags: {
      ignoreCase: t.includes("i"),
      // Flag m is called `multiline` in Onig, but that has a different meaning in JS. Onig flag m
      // is equivalent to JS flag s
      dotAll: t.includes("m"),
      // Flag x is fully handled during tokenization
      extended: r,
      // Flags D, S, W are currently only supported as top-level flags
      digitIsAscii: t.includes("D"),
      spaceIsAscii: t.includes("S"),
      wordIsAscii: t.includes("W")
    },
    rules: n
  };
}
function Bi(e, t, n, r) {
  const [a, i] = n;
  if (a === "[") {
    const o = Ui(t, n, r);
    return {
      // Array of all of the char class's tokens
      tokens: o.tokens,
      // Jump forward to the end of the char class
      lastIndex: o.lastIndex
    };
  }
  if (a === "\\") {
    if ("AbBGzZ".includes(i))
      return {
        token: A(S.Assertion, n, {
          kind: n
        })
      };
    if (/^\\g[<']/.test(n)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n))
        throw new Error(`Invalid group name "${n}"`);
      return {
        token: A(S.Subroutine, n)
      };
    }
    if (/^\\k[<']/.test(n)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n))
        throw new Error(`Invalid group name "${n}"`);
      return {
        token: A(S.Backreference, n)
      };
    }
    if (i === "K")
      return {
        token: A(S.Directive, n, {
          kind: rt.keep
        })
      };
    if (i === "N")
      return {
        token: A(S.CharacterSet, n, {
          kind: F.non_newline
        })
      };
    if (i === "O")
      return {
        token: A(S.CharacterSet, n, {
          kind: F.any
        })
      };
    if ("RX".includes(i))
      return {
        token: A(S.VariableLengthCharacterSet, n, {
          kind: n
        })
      };
    if ("yY".includes(i))
      throw new Error(`Unsupported grapheme boundary "${n}"`);
    const o = rr(n, { inCharClass: !1 });
    return Array.isArray(o) ? { tokens: o } : { token: o };
  }
  if (a === "(") {
    if (n === "(*")
      throw new Error(`Unsupported named callout "${n}"`);
    if (n === "(?{")
      throw new Error(`Unsupported callout "${n}"`);
    if (n === "(?#") {
      if (t[r] !== ")")
        throw new Error('Unclosed comment group "(?#"');
      return {
        lastIndex: r + 1
      };
    }
    if (/^\(\?[-imx]+[:)]$/.test(n))
      return {
        token: Hi(n, e)
      };
    if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, // Unnamed capture if no named captures present and `captureGroup` not enabled, else
    // noncapturing group
    n === "(" && !e.captureGroup || // Noncapturing group
    n === "(?:")
      return {
        token: A(S.GroupOpen, n, {
          // For `(`, will later change to `capturing` and add `number` prop if no named captures
          kind: G.group
        })
      };
    if (n === "(?>")
      return {
        token: A(S.GroupOpen, n, {
          kind: G.atomic
        })
      };
    if (n === "(?=" || n === "(?!" || n === "(?<=" || n === "(?<!")
      return {
        token: A(S.GroupOpen, n, {
          kind: n[2] === "<" ? G.lookbehind : G.lookahead,
          negate: n.endsWith("!")
        })
      };
    if (n === "(" && e.captureGroup || n.startsWith("(?<") && n.endsWith(">") || n.startsWith("(?'") && n.endsWith("'")) {
      const o = A(S.GroupOpen, n, {
        kind: G.capturing
        // Will add `number` prop in a second pass
      });
      return n !== "(" && (o.name = n.slice(3, -1)), {
        token: o
      };
    }
    if (n.startsWith("(?~")) {
      if (n === "(?~|")
        throw new Error(`Unsupported absent function kind "${n}"`);
      return {
        token: A(S.GroupOpen, n, {
          kind: G.absent_repeater
        })
      };
    }
    throw n === "(?(" ? new Error(`Unsupported conditional "${n}"`) : new Error(`Invalid or unsupported group option "${n}"`);
  }
  if (n === ")") {
    if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0)
      throw new Error('Unmatched ")"');
    return {
      token: A(S.GroupClose, n)
    };
  }
  if (n === "#" && e.getCurrentModX()) {
    const o = t.indexOf(`
`, r);
    return {
      // Jump forward to the end of the comment
      lastIndex: o === -1 ? t.length : o
    };
  }
  if (/^\s$/.test(n) && e.getCurrentModX()) {
    const o = /\s+/y;
    return o.lastIndex = r, {
      // Jump forward to the end of the whitespace
      lastIndex: o.exec(t) ? o.lastIndex : r
    };
  }
  if (n === ".")
    return {
      token: A(S.CharacterSet, n, {
        kind: F.dot
      })
    };
  if (n === "^" || n === "$") {
    const o = e.singleline ? {
      "^": w`\A`,
      $: w`\Z`
    }[n] : n;
    return {
      token: A(S.Assertion, n, {
        kind: o
      })
    };
  }
  return n === "|" ? {
    token: A(S.Alternator, n)
  } : tr.test(n) ? {
    token: Wi(n)
  } : (ar(n), {
    token: A(S.Character, n, {
      value: n.codePointAt(0)
    })
  });
}
function Ui(e, t, n) {
  const r = [A(S.CharacterClassOpen, t, {
    negate: t[1] === "^"
  })];
  let a = 1, i;
  for (yt.lastIndex = n; i = yt.exec(e); ) {
    const o = i[0];
    if (o[0] === "[" && o[1] !== ":")
      a++, r.push(A(S.CharacterClassOpen, o, {
        negate: o[1] === "^"
      }));
    else if (o === "]") {
      if (r.at(-1).type === S.CharacterClassOpen)
        r.push(A(S.Character, o, {
          value: 93
        }));
      else if (a--, r.push(A(S.CharacterClassClose, o)), !a)
        break;
    } else {
      const s = Gi(o);
      Array.isArray(s) ? r.push(...s) : r.push(s);
    }
  }
  return {
    tokens: r,
    lastIndex: yt.lastIndex || e.length
  };
}
function Gi(e) {
  if (e[0] === "\\")
    return rr(e, { inCharClass: !0 });
  if (e[0] === "[") {
    const t = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
    if (!t || !Qn.get(t.groups.name))
      throw new Error(`Invalid POSIX class "${e}"`);
    return A(S.CharacterSet, e, {
      kind: F.posix,
      negate: !!t.groups.negate,
      value: t.groups.name
    });
  }
  return e === "-" ? A(S.CharacterClassHyphen, e) : e === "&&" ? A(S.CharacterClassIntersector, e) : (ar(e), A(S.Character, e, {
    value: e.codePointAt(0)
  }));
}
function rr(e, { inCharClass: t }) {
  const n = e[1];
  if (n === "c" || n === "C")
    return ji(e);
  if ("dDhHsSwW".includes(n))
    return zi(e);
  if (e.startsWith(w`\o{`))
    throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
  if (/^\\[pP]\{/.test(e)) {
    if (e.length === 3)
      throw new Error(`Incomplete or invalid Unicode property "${e}"`);
    return Vi(e);
  }
  if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(e))
    try {
      const r = e.split(/\\x/).slice(1).map((s) => parseInt(s, 16)), a = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }).decode(new Uint8Array(r)), i = new TextEncoder();
      return [...a].map((s) => {
        const l = [...i.encode(s)].map((c) => `\\x${c.toString(16)}`).join("");
        return A(S.Character, l, {
          value: s.codePointAt(0)
        });
      });
    } catch {
      throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
    }
  if (n === "u" || n === "x")
    return A(S.Character, e, {
      value: qi(e)
    });
  if (gn.has(n))
    return A(S.Character, e, {
      value: gn.get(n)
    });
  if (/\d/.test(n))
    return A(S.EscapedNumber, e, {
      inCharClass: t
    });
  if (e === "\\")
    throw new Error(w`Incomplete escape "\"`);
  if (n === "M")
    throw new Error(`Unsupported meta "${e}"`);
  if ([...e].length === 2)
    return A(S.Character, e, {
      value: e.codePointAt(1)
    });
  throw new Error(`Unexpected escape "${e}"`);
}
function A(e, t, n) {
  return {
    type: e,
    raw: t,
    ...n
  };
}
function ji(e) {
  const t = e[1] === "c" ? e[2] : e[3];
  if (!t || !/[A-Za-z]/.test(t))
    throw new Error(`Unsupported control character "${e}"`);
  return A(S.Character, e, {
    value: t.toUpperCase().codePointAt(0) - 64
  });
}
function Hi(e, t) {
  let { on: n, off: r } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
  r ?? (r = "");
  const a = (t.getCurrentModX() || n.includes("x")) && !r.includes("x"), i = hn(n), o = hn(r), s = {};
  if (i && (s.enable = i), o && (s.disable = o), e.endsWith(")"))
    return t.replaceCurrentModX(a), A(S.Directive, e, {
      kind: rt.flags,
      flags: s
    });
  if (e.endsWith(":")) {
    t.pushModX(a), t.numOpenGroups++;
    const l = A(S.GroupOpen, e, {
      kind: G.group
    });
    return (i || o) && (l.flags = s), l;
  }
  throw new Error(`Unexpected flag modifier "${e}"`);
}
function Wi(e) {
  const t = {};
  if (e[0] === "{") {
    const { min: n, max: r } = /^\{(?<min>\d*)(?:,(?<max>\d*))?/.exec(e).groups, a = 1e5;
    if (+n > a || +r > a)
      throw new Error("Quantifier value unsupported in Oniguruma");
    t.min = +n, t.max = r === void 0 ? +n : r === "" ? 1 / 0 : +r, t.greedy = !e.endsWith("?"), t.possessive = !1;
  } else
    t.min = e[0] === "+" ? 1 : 0, t.max = e[0] === "?" ? 1 : 1 / 0, t.greedy = e[1] !== "?", t.possessive = e[1] === "+";
  return A(S.Quantifier, e, t);
}
function zi(e) {
  const t = e[1].toLowerCase();
  return A(S.CharacterSet, e, {
    kind: {
      d: F.digit,
      h: F.hex,
      // Not available in JS
      s: F.space,
      // Different than JS
      w: F.word
    }[t],
    negate: e[1] !== t
  });
}
function Vi(e) {
  const { p: t, neg: n, value: r } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups, a = t === "P" && !n || t === "p" && !!n;
  return A(S.CharacterSet, e, {
    kind: F.property,
    negate: a,
    value: r
  });
}
function hn(e) {
  const t = {};
  return e.includes("i") && (t.ignoreCase = !0), e.includes("m") && (t.dotAll = !0), e.includes("x") && (t.extended = !0), Object.keys(t).length ? t : null;
}
function qi(e) {
  if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(e))
    throw new Error(`Incomplete or invalid escape "${e}"`);
  const t = e[2] === "{" ? new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(e).groups.hex : e.slice(2);
  return parseInt(t, 16);
}
function Xi(e, t) {
  const { raw: n, inCharClass: r } = e, a = n.slice(1);
  if (!r && // Single digit 1-9 outside a char class is always treated as a backref
  (a !== "0" && a.length === 1 || // Leading 0 makes it octal; backrefs can't include following literal digits
  a[0] !== "0" && +a <= t))
    return [A(S.Backreference, n)];
  const i = [], o = a.match(/^[0-7]+|\d/g);
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    let c;
    if (s === 0 && l !== "8" && l !== "9") {
      if (c = parseInt(l, 8), c > 127)
        throw new Error(w`Octal encoded byte above 177 unsupported "${n}"`);
    } else
      c = l.codePointAt(0);
    i.push(A(S.Character, (s === 0 ? "\\" : "") + l, {
      value: c
    }));
  }
  return i;
}
function ar(e) {
  if ([...e].length !== 1)
    throw new Error(`Expected "${e}" to be a single code point`);
}
function Bt({ alternatives: e }, t) {
  return e.length === 1 && e[0].elements.length === 1 && (!t || t(e[0].elements[0]));
}
function Ki({ type: e }) {
  return e === g.Assertion || e === g.Directive;
}
function Ji(e) {
  const t = [
    g.Character,
    g.CharacterClass,
    g.CharacterSet
  ];
  return t.includes(e.type) || e.type === g.Quantifier && e.min && t.includes(e.element.type);
}
function ir({ type: e }) {
  return e === g.CapturingGroup || e === g.Group;
}
function Ge({ type: e, kind: t }) {
  return e === g.Assertion && (t === T.lookahead || t === T.lookbehind);
}
function Ee(e, t, n) {
  let r = e.node;
  for (; r.parent; )
    r = r.parent;
  function a(o, s) {
    for (let l = 0; l < o.length; l++) {
      const c = i(o[l], s, l, o);
      l = Math.max(-1, l + c);
    }
  }
  function i(o, s = null, l = null, c = null) {
    let u = 0, p = !1;
    const m = {
      node: o,
      parent: s,
      key: l,
      container: c,
      ast: r,
      remove() {
        Y(c, "Container expected").splice(Math.max(0, l + u), 1), u -= 1;
      },
      removeAllNextSiblings() {
        return Y(c, "Container expected").splice(l + 1);
      },
      removeAllPrevSiblings() {
        const b = l + u;
        return u -= b, Y(c, "Container expected").splice(0, Math.max(0, b));
      },
      replaceWith(b) {
        Zi(b, s), c ? c[Math.max(0, l + u)] = b : s[l] = b;
      },
      skip() {
        p = !0;
      }
    }, f = Qi(o).find((b) => !!n[b]), d = f && n[f], C = typeof d == "function" ? d : d == null ? void 0 : d.enter, y = d == null ? void 0 : d.exit;
    if (C == null || C(m, t), !p)
      switch (o.type) {
        case g.Regex:
          i(o.pattern, o, "pattern"), i(o.flags, o, "flags");
          break;
        case g.Alternative:
        case g.CharacterClass:
          a(o.elements, o);
          break;
        case g.Assertion:
          Ge(o) && a(o.alternatives, o);
          break;
        case g.Backreference:
        case g.Character:
        case g.CharacterSet:
        case g.Directive:
        case g.Flags:
        case g.Recursion:
        case g.Subroutine:
        case g.VariableLengthCharacterSet:
          break;
        case g.AbsentFunction:
        case g.CapturingGroup:
        case g.Group:
        case g.Pattern:
          a(o.alternatives, o);
          break;
        case g.CharacterClassIntersection:
          a(o.classes, o);
          break;
        case g.CharacterClassRange:
          i(o.min, o, "min"), i(o.max, o, "max");
          break;
        case g.Quantifier:
          i(o.element, o, "element");
          break;
        default:
          throw new Error(`Unexpected node type "${o.type}"`);
      }
    return y == null || y(m, t), u;
  }
  i(e.node, e.parent, e.key, e.container);
}
var yn = {
  AnyGroup: "AnyGroup",
  AnyNode: "AnyNode"
};
function Qi(e) {
  const t = [yn.AnyNode];
  return (ir(e) || Ge(e)) && t.push(yn.AnyGroup), t.push(e.type), t;
}
function Zi(e, t) {
  "parent" in t && (e.parent = t);
}
var g = {
  AbsentFunction: "AbsentFunction",
  Alternative: "Alternative",
  Assertion: "Assertion",
  Backreference: "Backreference",
  CapturingGroup: "CapturingGroup",
  Character: "Character",
  CharacterClass: "CharacterClass",
  CharacterClassIntersection: "CharacterClassIntersection",
  CharacterClassRange: "CharacterClassRange",
  CharacterSet: "CharacterSet",
  Directive: "Directive",
  Flags: "Flags",
  Group: "Group",
  Pattern: "Pattern",
  Quantifier: "Quantifier",
  Regex: "Regex",
  Subroutine: "Subroutine",
  VariableLengthCharacterSet: "VariableLengthCharacterSet",
  // Used only by the transformer for Regex+ ASTs
  Recursion: "Recursion"
}, Yi = {
  // See <github.com/slevithan/oniguruma-to-es/issues/13>
  repeater: "repeater"
}, T = {
  line_end: "line_end",
  line_start: "line_start",
  lookahead: "lookahead",
  lookbehind: "lookbehind",
  search_start: "search_start",
  string_end: "string_end",
  string_end_newline: "string_end_newline",
  string_start: "string_start",
  word_boundary: "word_boundary"
}, N = F, qe = rt, Ke = {
  grapheme: "grapheme",
  newline: "newline"
};
function or({ tokens: e, flags: t, rules: n }, r) {
  const a = {
    skipBackrefValidation: !1,
    skipLookbehindValidation: !1,
    skipPropertyNameValidation: !1,
    verbose: !1,
    ...r
  }, i = {
    capturingGroups: [],
    current: 0,
    hasNumberedRef: !1,
    namedGroupsByName: /* @__PURE__ */ new Map(),
    parent: null,
    skipBackrefValidation: a.skipBackrefValidation,
    skipLookbehindValidation: a.skipLookbehindValidation,
    skipPropertyNameValidation: a.skipPropertyNameValidation,
    subroutines: [],
    token: null,
    tokens: e,
    verbose: a.verbose,
    walk: o
  };
  function o(f, d) {
    const C = e[i.current];
    switch (i.parent = f, i.token = C, i.current++, C.type) {
      case S.Alternator:
        return ue();
      case S.Assertion:
        return lo(C);
      case S.Backreference:
        return eo(i);
      case S.Character:
        return Ut(C.value, { useLastValid: !!d.isCheckingRangeEnd });
      case S.CharacterClassHyphen:
        return to(i, d);
      case S.CharacterClassOpen:
        return no(i, d);
      case S.CharacterSet:
        return ro(i);
      case S.Directive:
        return fo(C);
      case S.GroupOpen:
        return ao(i, d);
      case S.Quantifier:
        return io(i);
      case S.Subroutine:
        return oo(i);
      case S.VariableLengthCharacterSet:
        return Co(C.kind);
      default:
        throw new Error(`Unexpected token type "${C.type}"`);
    }
  }
  const s = ho(go(), mo(t));
  let l = s.pattern.alternatives[0];
  for (; i.current < e.length; ) {
    const f = o(l, {});
    f.type === g.Alternative ? (s.pattern.alternatives.push(f), l = f) : l.elements.push(f);
  }
  const { capturingGroups: c, hasNumberedRef: u, namedGroupsByName: p, subroutines: m } = i;
  if (u && p.size && !n.captureGroup)
    throw new Error("Numbered backref/subroutine not allowed when using named capture");
  for (const { ref: f } of m)
    if (typeof f == "number") {
      if (f > c.length)
        throw new Error("Subroutine uses a group number that's not defined");
    } else if (p.has(f)) {
      if (p.get(f).length > 1)
        throw new Error(w`Subroutine uses a duplicate group name "\g<${f}>"`);
    } else throw new Error(w`Subroutine uses a group name that's not defined "\g<${f}>"`);
  return Ee({ node: s }, null, {
    AnyNode({ node: f, parent: d }) {
      f.parent = d;
    }
  }), s;
}
function eo(e) {
  const { raw: t } = e.token, n = /^\\k[<']/.test(t), r = n ? t.slice(3, -1) : t.slice(1), a = (i, o = !1) => {
    const s = e.capturingGroups.length;
    let l = !1;
    if (i > s)
      if (e.skipBackrefValidation)
        l = !0;
      else
        throw new Error(`Not enough capturing groups defined to the left "${t}"`);
    return e.hasNumberedRef = !0, Lt(o ? s + 1 - i : i, { orphan: l });
  };
  if (n) {
    const i = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(r);
    if (i)
      return a(+i.groups.num, !!i.groups.sign);
    if (/[-+]/.test(r))
      throw new Error(`Invalid backref name "${t}"`);
    if (!e.namedGroupsByName.has(r))
      throw new Error(`Group name not defined to the left "${t}"`);
    return Lt(r);
  }
  return a(+r);
}
function to(e, t) {
  const { parent: n, tokens: r, walk: a } = e, i = n.elements.at(-1), o = r[e.current];
  if (!t.isCheckingRangeEnd && i && i.type !== g.CharacterClass && i.type !== g.CharacterClassRange && o && o.type !== S.CharacterClassOpen && o.type !== S.CharacterClassClose && o.type !== S.CharacterClassIntersector) {
    const s = a(n, {
      ...t,
      isCheckingRangeEnd: !0
    });
    if (i.type === g.Character && s.type === g.Character)
      return n.elements.pop(), po(i, s);
    throw new Error("Invalid character class range");
  }
  return Ut(45);
}
function no(e, t) {
  const { token: n, tokens: r, verbose: a, walk: i } = e, o = r[e.current];
  let s = Nt({ negate: n.negate });
  const l = s.elements[0];
  let c = Cn(o);
  for (; c.type !== S.CharacterClassClose; ) {
    if (c.type === S.CharacterClassIntersector)
      l.classes.push(Nt({ negate: !1, baseOnly: !0 })), e.current++;
    else {
      const u = l.classes.at(-1);
      u.elements.push(i(u, t));
    }
    c = Cn(r[e.current], o);
  }
  if (a || So(l), l.classes.length === 1) {
    const u = l.classes[0];
    u.negate = s.negate !== u.negate, s = u;
  }
  return e.current++, s;
}
function ro({ token: e, skipPropertyNameValidation: t }) {
  let { kind: n, negate: r, value: a } = e;
  if (n === F.property) {
    const i = nt(a);
    if (Di.has(i))
      n = F.posix, a = i;
    else
      return Se(a, {
        negate: r,
        skipPropertyNameValidation: t
      });
  }
  return n === F.posix ? {
    type: g.CharacterSet,
    kind: N.posix,
    negate: r,
    value: a
  } : Ot(n, { negate: r });
}
function ao(e, t) {
  const { token: n, tokens: r, capturingGroups: a, namedGroupsByName: i, skipLookbehindValidation: o, verbose: s, walk: l } = e;
  let c = co(n);
  const u = c.type === g.AbsentFunction, p = c.kind === T.lookbehind, m = p && c.negate;
  if (c.type === g.CapturingGroup && (a.push(c), c.name && _e(i, c.name, []).push(c)), u && t.isInAbsentFunction)
    throw new Error("Nested absent function not supported by Oniguruma");
  let f = bn(r[e.current]);
  for (; f.type !== S.GroupClose; ) {
    if (f.type === S.Alternator)
      c.alternatives.push(ue()), e.current++;
    else {
      const d = c.alternatives.at(-1), C = l(d, {
        ...t,
        isInAbsentFunction: t.isInAbsentFunction || u,
        isInLookbehind: t.isInLookbehind || p,
        isInNegLookbehind: t.isInNegLookbehind || m
      });
      if (d.elements.push(C), (p || t.isInLookbehind) && !o) {
        const y = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (m || t.isInNegLookbehind) {
          if (C.kind === T.lookahead || C.type === g.CapturingGroup)
            throw new Error(y);
        } else if (C.kind === T.lookahead || C.kind === T.lookbehind && C.negate)
          throw new Error(y);
      }
    }
    f = bn(r[e.current]);
  }
  return s || (c = ko(c)), e.current++, c;
}
function io({ token: e, parent: t }) {
  const { min: n, max: r, greedy: a, possessive: i } = e, o = t.elements.at(-1);
  if (!o || o.type === g.Assertion || o.type === g.Directive)
    throw new Error("Quantifier requires a repeatable token");
  const s = cr(o, n, r, a, i);
  return t.elements.pop(), s;
}
function oo(e) {
  const { token: t, capturingGroups: n, subroutines: r } = e;
  let a = t.raw.slice(3, -1);
  const i = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(a);
  if (i) {
    const s = +i.groups.num, l = n.length;
    if (e.hasNumberedRef = !0, a = {
      "": s,
      "+": l + s,
      "-": l + 1 - s
    }[i.groups.sign], a < 1)
      throw new Error("Invalid subroutine number");
  } else a === "0" && (a = 0);
  const o = yo(a);
  return r.push(o), o;
}
function so(e) {
  return {
    type: g.AbsentFunction,
    kind: e,
    alternatives: [ue()]
  };
}
function ue() {
  return {
    type: g.Alternative,
    elements: []
  };
}
function sr(e, t) {
  const n = !!(t != null && t.negate);
  return {
    type: g.Assertion,
    kind: e,
    ...e === T.word_boundary && { negate: n }
  };
}
function lo({ kind: e }) {
  return sr(
    Y({
      "^": T.line_start,
      $: T.line_end,
      "\\A": T.string_start,
      "\\b": T.word_boundary,
      "\\B": T.word_boundary,
      "\\G": T.search_start,
      "\\z": T.string_end,
      "\\Z": T.string_end_newline
    }[e], `Unexpected assertion kind "${e}"`),
    { negate: e === w`\B` }
  );
}
function Lt(e, t) {
  const n = !!(t != null && t.orphan);
  return {
    type: g.Backreference,
    ...n && { orphan: n },
    ref: e
  };
}
function co({ flags: e, kind: t, name: n, negate: r, number: a }) {
  switch (t) {
    case G.absent_repeater:
      return so(Yi.repeater);
    case G.atomic:
      return Z({ atomic: !0 });
    case G.capturing:
      return lr(a, n);
    case G.group:
      return Z({ flags: e });
    case G.lookahead:
    case G.lookbehind:
      return Ie({
        behind: t === G.lookbehind,
        negate: r
      });
    default:
      throw new Error(`Unexpected group kind "${t}"`);
  }
}
function lr(e, t) {
  const n = t !== void 0;
  if (n && !wo(t))
    throw new Error(`Group name "${t}" invalid in Oniguruma`);
  return {
    type: g.CapturingGroup,
    number: e,
    ...n && { name: t },
    alternatives: [ue()]
  };
}
function Ut(e, t) {
  const n = {
    useLastValid: !1,
    ...t
  };
  if (e > 1114111) {
    const r = e.toString(16);
    if (n.useLastValid)
      e = 1114111;
    else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${r}}"`) : new Error(`Invalid code point out of range in JS "\\x{${r}}"`);
  }
  return {
    type: g.Character,
    value: e
  };
}
function Nt(e) {
  const t = {
    baseOnly: !1,
    negate: !1,
    ...e
  };
  return {
    type: g.CharacterClass,
    negate: t.negate,
    elements: t.baseOnly ? [] : [uo()]
  };
}
function uo() {
  return {
    type: g.CharacterClassIntersection,
    classes: [Nt({ negate: !1, baseOnly: !0 })]
  };
}
function po(e, t) {
  if (t.value < e.value)
    throw new Error("Character class range out of order");
  return {
    type: g.CharacterClassRange,
    min: e,
    max: t
  };
}
function Ot(e, { negate: t }) {
  const n = {
    type: g.CharacterSet,
    kind: Y(N[e], `Unexpected character set kind "${e}"`)
  };
  return (e === F.digit || e === F.hex || e === F.space || e === F.word) && (n.negate = t), n;
}
function fo({ kind: e, flags: t }) {
  const n = {
    type: g.Directive,
    kind: Y(qe[e], `Unexpected directive kind "${e}"`)
  };
  return e === rt.flags && (n.flags = t), n;
}
function mo({ ignoreCase: e, dotAll: t, extended: n, digitIsAscii: r, spaceIsAscii: a, wordIsAscii: i }) {
  return {
    type: g.Flags,
    ignoreCase: e,
    dotAll: t,
    extended: n,
    digitIsAscii: r,
    spaceIsAscii: a,
    wordIsAscii: i
  };
}
function Z(e) {
  const t = e == null ? void 0 : e.atomic, n = e == null ? void 0 : e.flags;
  return {
    type: g.Group,
    ...t && { atomic: t },
    ...n && { flags: n },
    alternatives: [ue()]
  };
}
function Ie(e) {
  const t = {
    behind: !1,
    negate: !1,
    ...e
  };
  return {
    type: g.Assertion,
    kind: t.behind ? T.lookbehind : T.lookahead,
    negate: t.negate,
    alternatives: [ue()]
  };
}
function go() {
  return {
    type: g.Pattern,
    alternatives: [ue()]
  };
}
function cr(e, t, n, r = !0, a = !1) {
  const i = {
    type: g.Quantifier,
    min: t,
    max: n,
    greedy: r,
    possessive: a,
    element: e
  };
  return n < t ? {
    ...i,
    min: n,
    max: t,
    possessive: !0
  } : i;
}
function ho(e, t) {
  return {
    type: g.Regex,
    pattern: e,
    flags: t
  };
}
function yo(e) {
  return {
    type: g.Subroutine,
    ref: e
  };
}
function Se(e, t) {
  const n = {
    negate: !1,
    skipPropertyNameValidation: !1,
    ...t
  };
  return {
    type: g.CharacterSet,
    kind: N.property,
    value: n.skipPropertyNameValidation ? e : bo(e),
    negate: n.negate
  };
}
function Co(e) {
  return {
    type: g.VariableLengthCharacterSet,
    kind: Y({
      "\\R": Ke.newline,
      "\\X": Ke.grapheme
    }[e], `Unexpected varcharset kind "${e}"`)
  };
}
function bo(e) {
  const t = nt(e);
  if (Jn.has(t))
    throw new Error(w`Unicode property "\p{${e}}" unsupported in Oniguruma`);
  const n = Kn.get(t);
  return n || e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (r) => r[0].toUpperCase() + r.slice(1).toLowerCase());
}
function ko(e) {
  const t = e.alternatives[0].elements[0];
  return e.type === g.Group && Bt(e, (n) => n.type === g.Group) && !(e.atomic && t.flags) && !(e.flags && (t.atomic || t.flags)) ? (e.atomic ? t.atomic = !0 : e.flags && (t.flags = e.flags), t) : e;
}
function wo(e) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
}
function So(e) {
  for (let t = 0; t < e.classes.length; t++) {
    const n = e.classes[t], r = n.elements[0];
    n.elements.length === 1 && r.type === g.CharacterClass && (e.classes[t] = r, r.negate = n.negate !== r.negate);
  }
}
function Cn(e, t) {
  return Y(
    e,
    // Easier to understand error when applicable
    `${(t == null ? void 0 : t.value) === 93 ? "Empty" : "Unclosed"} character class`
  );
}
function bn(e) {
  return Y(e, "Unclosed group");
}
function vo(e, t) {
  const n = {
    // A couple edge cases exist where options `accuracy` and `bestEffortTarget` are used:
    // - `VariableLengthCharacterSet` kind `grapheme` (`\X`): An exact representation would require
    //   heavy Unicode data; a best-effort approximation requires knowing the target.
    // - `CharacterSet` kind `posix` with values `graph` and `print`: Their complex Unicode-based
    //   representations would be hard to change to ASCII-based after the fact in the generator
    //   based on `target`/`accuracy`, so produce the appropriate structure here.
    accuracy: "default",
    asciiWordBoundaries: !1,
    avoidSubclass: !1,
    bestEffortTarget: "ES2025",
    ...t
  }, r = {
    accuracy: n.accuracy,
    asciiWordBoundaries: n.asciiWordBoundaries,
    avoidSubclass: n.avoidSubclass,
    flagDirectivesByAlt: /* @__PURE__ */ new Map(),
    jsGroupNameMap: /* @__PURE__ */ new Map(),
    minTargetEs2024: _t(n.bestEffortTarget, "ES2024"),
    passedLookbehind: !1,
    strategy: null,
    // Subroutines can appear before the groups they ref, so collect reffed nodes for a second pass 
    subroutineRefMap: /* @__PURE__ */ new Map(),
    supportedGNodes: /* @__PURE__ */ new Set(),
    digitIsAscii: e.flags.digitIsAscii,
    spaceIsAscii: e.flags.spaceIsAscii,
    wordIsAscii: e.flags.wordIsAscii
  };
  Ee({ node: e }, r, ur);
  const a = {
    dotAll: e.flags.dotAll,
    ignoreCase: e.flags.ignoreCase
  }, i = {
    currentFlags: a,
    prevFlags: null,
    globalFlags: a,
    groupOriginByCopy: /* @__PURE__ */ new Map(),
    groupsByName: /* @__PURE__ */ new Map(),
    multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
    openRefs: /* @__PURE__ */ new Map(),
    reffedNodesByReferencer: /* @__PURE__ */ new Map(),
    subroutineRefMap: r.subroutineRefMap
  };
  Ee({ node: e }, i, pr);
  const o = {
    groupsByName: i.groupsByName,
    highestOrphanBackref: 0,
    numCapturesToLeft: 0,
    reffedNodesByReferencer: i.reffedNodesByReferencer
  };
  return Ee({ node: e }, o, xo), e._originMap = i.groupOriginByCopy, e._strategy = r.strategy, e;
}
var ur = {
  AbsentFunction({ node: e, replaceWith: t }) {
    const n = ne(Z(), [
      Pe(Ie({ negate: !0 }), e.alternatives),
      Se("Any")
    ]), r = cr(n, 0, 1 / 0);
    n.parent = r, t(ne(Z(), [r]));
  },
  Alternative: {
    enter({ node: e, parent: t, key: n }, { flagDirectivesByAlt: r }) {
      const a = e.elements.filter((i) => i.kind === qe.flags);
      for (let i = n + 1; i < t.alternatives.length; i++) {
        const o = t.alternatives[i];
        _e(r, o, []).push(...a);
      }
    },
    exit({ node: e }, { flagDirectivesByAlt: t }) {
      var n;
      if ((n = t.get(e)) != null && n.length) {
        const r = mr(t.get(e));
        if (r) {
          const a = ne(Z({ flags: r }), e.elements);
          a.parent = e, e.elements = [a];
        }
      }
    }
  },
  Assertion({ node: e, key: t, container: n, ast: r, remove: a, replaceWith: i }, o) {
    const { kind: s, negate: l } = e, { asciiWordBoundaries: c, avoidSubclass: u, supportedGNodes: p, wordIsAscii: m } = o;
    if (s === T.line_end)
      i(K(w`(?=\z|\n)`));
    else if (s === T.line_start)
      i(K(w`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: !0 }));
    else if (s === T.lookbehind)
      o.passedLookbehind = !0;
    else if (s === T.search_start)
      if (p.has(e))
        r.flags.sticky = !0, a();
      else {
        const f = n[t - 1];
        if (f && Ji(f))
          i(ne(Ie({ negate: !0 })));
        else {
          if (u)
            throw new Error(w`Uses "\G" in a way that requires a subclass`);
          i(sr(T.string_start)), o.strategy = "clip_search";
        }
      }
    else if (s === T.string_end_newline)
      i(K(w`(?=\n?\z)`));
    else if (s === T.word_boundary && !m && !c) {
      const f = `(?:(?<=${te})(?!${te})|(?<!${te})(?=${te}))`, d = `(?:(?<=${te})(?=${te})|(?<!${te})(?!${te}))`;
      i(K(l ? d : f));
    }
  },
  Backreference({ node: e }, { jsGroupNameMap: t }) {
    let { ref: n } = e;
    typeof n == "string" && !bt(n) && (n = Ct(n, t), e.ref = n);
  },
  CapturingGroup({ node: e }, { jsGroupNameMap: t, subroutineRefMap: n }) {
    let { name: r } = e;
    r && !bt(r) && (r = Ct(r, t), e.name = r), n.set(e.number, e), r && n.set(r, e);
  },
  CharacterSet({ node: e, replaceWith: t }, { accuracy: n, minTargetEs2024: r, digitIsAscii: a, spaceIsAscii: i, wordIsAscii: o }) {
    const { kind: s, negate: l, value: c } = e;
    if (a && (s === N.digit || c === "digit")) {
      t(Ot(N.digit, { negate: l }));
      return;
    }
    if (i && (s === N.space || c === "space")) {
      t(kt(K(Ao), l));
      return;
    }
    if (o && (s === N.word || c === "word")) {
      t(Ot(N.word, { negate: l }));
      return;
    }
    if (s === N.any)
      t(Se("Any"));
    else if (s === N.digit)
      t(Se("Nd", { negate: l }));
    else if (s === N.hex)
      t(Se("AHex", { negate: l }));
    else if (s === N.non_newline)
      t(K(w`[^\n]`));
    else if (s === N.space)
      t(Se("space", { negate: l }));
    else if (s === N.word)
      t(kt(K(te), l));
    else if (s === N.property)
      Xn.has(c) || (e.key = "sc");
    else if (s === N.posix)
      if (!r && (c === "graph" || c === "print")) {
        if (n === "strict")
          throw new Error(`POSIX class "${c}" requires min target ES2024 or non-strict accuracy`);
        let u = {
          graph: "!-~",
          print: " -~"
        }[c];
        l && (u = `\0-${P(u.codePointAt(0) - 1)}${P(u.codePointAt(2) + 1)}-􏿿`), t(K(`[${u}]`));
      } else
        t(kt(K(Qn.get(c)), l));
  },
  Directive(e, t) {
    const { node: n, parent: r, ast: a, remove: i, replaceWith: o, removeAllPrevSiblings: s, removeAllNextSiblings: l } = e, { kind: c, flags: u } = n;
    if (c === qe.flags)
      if (!u.enable && !u.disable)
        i();
      else {
        const p = ne(Z({ flags: u }), l());
        o(p), yr(p, e, t, ur);
      }
    else if (c === qe.keep) {
      const p = a.pattern.alternatives[0].elements[0], f = /* Not emulatable if within a `CapturingGroup` */ Bt(a.pattern, (d) => d.type === g.Group) && p.alternatives.length === 1 ? p : a.pattern;
      if (r.parent !== f || f.alternatives.length > 1)
        throw new Error(w`Uses "\K" in a way that's unsupported`);
      o(ne(Ie({ behind: !0 }), s()));
    }
  },
  Flags({ node: e, parent: t }) {
    [
      "digitIsAscii",
      // Flag D
      "extended",
      // Flag x
      "spaceIsAscii",
      // Flag S
      "wordIsAscii"
      // Flag W
    ].forEach((n) => delete e[n]), Object.assign(e, {
      // JS flag g; no Onig equiv
      global: !1,
      // JS flag d; no Onig equiv
      hasIndices: !1,
      // JS flag m; no Onig equiv but its behavior is always on in Onig. Onig's only line break
      // char is line feed, unlike JS, so this flag isn't used since it would produce inaccurate
      // results (also allows `^` and `$` to be used in the generator for string start and end)
      multiline: !1,
      // JS flag y; no Onig equiv, but used for `\G` emulation
      sticky: e.sticky ?? !1
      // Note: Regex+ doesn't allow explicitly adding flags it handles implicitly, so leave out
      // properties `unicode` (JS flag u) and `unicodeSets` (JS flag v). Keep the existing values
      // for `ignoreCase` (flag i) and `dotAll` (JS flag s, but Onig flag m)
    }), t.options = {
      disable: {
        // Onig uses different rules for flag x than Regex+, so disable the implicit flag
        x: !0,
        // Onig has no flag to control "named capture only" mode but contextually applies its
        // behavior when named capturing is used, so disable Regex+'s implicit flag for it
        n: !0
      },
      force: {
        // Always add flag v because we're generating an AST that relies on it (it enables JS
        // support for Onig features nested classes, set intersection, Unicode properties, etc.).
        // However, the generator might disable flag v based on its `target` option
        v: !0
      }
    };
  },
  Group({ node: e }) {
    if (!e.flags)
      return;
    const { enable: t, disable: n } = e.flags;
    t != null && t.extended && delete t.extended, n != null && n.extended && delete n.extended, t != null && t.dotAll && (n != null && n.dotAll) && delete t.dotAll, t != null && t.ignoreCase && (n != null && n.ignoreCase) && delete t.ignoreCase, t && !Object.keys(t).length && delete e.flags.enable, n && !Object.keys(n).length && delete e.flags.disable, !e.flags.enable && !e.flags.disable && delete e.flags;
  },
  Pattern: {
    enter({ node: e }, { supportedGNodes: t }) {
      const n = [];
      let r = !1, a = !1;
      for (const i of e.alternatives)
        if (i.elements.length === 1 && i.elements[0].kind === T.search_start)
          i.elements.pop();
        else {
          const o = gr(i.elements);
          o ? (r = !0, Array.isArray(o) ? n.push(...o) : n.push(o)) : a = !0;
        }
      r && !a && n.forEach((i) => t.add(i));
    },
    exit(e, { accuracy: t, passedLookbehind: n, strategy: r }) {
      if (t === "strict" && n && r)
        throw new Error(w`Uses "\G" in a way that requires non-strict accuracy`);
    }
  },
  Quantifier({ node: e }) {
    if (e.element.type === g.Quantifier) {
      const t = ne(Z(), [e.element]);
      t.parent = e, e.element = t;
    }
  },
  Subroutine({ node: e }, { jsGroupNameMap: t }) {
    let { ref: n } = e;
    typeof n == "string" && !bt(n) && (n = Ct(n, t), e.ref = n);
  },
  VariableLengthCharacterSet({ node: e, replaceWith: t }, { accuracy: n, minTargetEs2024: r }) {
    const { kind: a } = e;
    if (a === Ke.newline)
      t(K(`(?>\r
?|[
\v\f\u2028\u2029])`));
    else if (a === Ke.grapheme) {
      if (n === "strict")
        throw new Error(w`Use of "\X" requires non-strict accuracy`);
      const i = r ? w`\p{RGI_Emoji}` : ki().source.replace(/\\u\{/g, "\\x{");
      t(K(w`(?>\r\n|${i}|\P{M}\p{M}*)`, { skipPropertyNameValidation: !0 }));
    } else
      throw new Error(`Unexpected varcharset kind "${a}"`);
  }
}, pr = {
  Backreference({ node: e }, { multiplexCapturesToLeftByRef: t, reffedNodesByReferencer: n }) {
    const { orphan: r, ref: a } = e;
    r || n.set(e, [...t.get(a).map(({ node: i }) => i)]);
  },
  CapturingGroup: {
    enter({
      node: e,
      replaceWith: t,
      skip: n
    }, {
      groupOriginByCopy: r,
      groupsByName: a,
      multiplexCapturesToLeftByRef: i,
      openRefs: o,
      reffedNodesByReferencer: s
    }) {
      const l = r.get(e);
      if (l && o.has(e.number)) {
        const u = kn(e.number);
        s.set(u, o.get(e.number)), t(u), n();
        return;
      }
      o.set(e.number, e), i.set(e.number, []), e.name && _e(i, e.name, []);
      const c = i.get(e.name ?? e.number);
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (
          // This group is from subroutine expansion, and there's a multiplex value from either the
          // origin node or a prior subroutine expansion group with the same origin
          l === p.node || l && l === p.origin || // This group is not from subroutine expansion, and it comes after a subroutine expansion
          // group that refers to this group
          e === p.origin
        ) {
          c.splice(u, 1);
          break;
        }
      }
      if (i.get(e.number).push({ node: e, origin: l }), e.name && i.get(e.name).push({ node: e, origin: l }), e.name) {
        const u = _e(a, e.name, /* @__PURE__ */ new Map());
        let p = !1;
        if (l)
          p = !0;
        else
          for (const m of u.values())
            if (!m.hasDuplicateNameToRemove) {
              p = !0;
              break;
            }
        a.get(e.name).set(e, { node: e, hasDuplicateNameToRemove: p });
      }
    },
    exit({ node: e }, { openRefs: t }) {
      t.delete(e.number);
    }
  },
  Group: {
    enter({ node: e }, t) {
      t.prevFlags = t.currentFlags, e.flags && (t.currentFlags = Xe(t.currentFlags, e.flags));
    },
    exit(e, t) {
      t.currentFlags = t.prevFlags;
    }
  },
  Recursion({ node: e, parent: t }, { reffedNodesByReferencer: n }) {
    const { ref: r } = e;
    let a = t;
    for (; (a = a.parent) && !(a.type === g.CapturingGroup && (a.name === r || a.number === r)); )
      ;
    n.set(e, a);
  },
  Subroutine(e, t) {
    const { node: n, replaceWith: r } = e, { ref: a } = n, i = t.subroutineRefMap.get(a), o = a === 0, s = o ? kn(0) : (
      // The reffed group might itself contain subroutines, which are expanded during sub-traversal
      fr(i, t.groupOriginByCopy, null)
    );
    let l = s;
    if (!o) {
      const c = mr(_o(i, (p) => p.type === g.Group && !!p.flags)), u = c ? Xe(t.globalFlags, c) : t.globalFlags;
      Eo(u, t.currentFlags) || (l = ne(Z({
        flags: Lo(u)
      }), [s]));
    }
    r(l), o || yr(l, e, t, pr);
  }
}, xo = {
  Backreference({ node: e, replaceWith: t }, n) {
    if (e.orphan) {
      n.highestOrphanBackref = Math.max(n.highestOrphanBackref, e.ref);
      return;
    }
    const a = n.reffedNodesByReferencer.get(e).filter((i) => To(i, e));
    if (!a.length)
      t(ne(Ie({ negate: !0 })));
    else if (a.length > 1) {
      const i = a.map((o) => Pe(
        ue(),
        [Lt(o.number)]
      ));
      t(Pe(Z(), i));
    } else
      e.ref = a[0].number;
  },
  CapturingGroup({ node: e }, t) {
    e.number = ++t.numCapturesToLeft, e.name && t.groupsByName.get(e.name).get(e).hasDuplicateNameToRemove && delete e.name;
  },
  Recursion({ node: e }, t) {
    e.ref !== 0 && (e.ref = t.reffedNodesByReferencer.get(e).number);
  },
  Regex: {
    exit({ node: e }, t) {
      const n = Math.max(t.highestOrphanBackref - t.numCapturesToLeft, 0);
      for (let r = 0; r < n; r++) {
        const a = lr();
        e.pattern.alternatives.at(-1).elements.push(a);
      }
    }
  }
}, Ao = "[	-\r ]", te = w`[\p{L}\p{M}\p{N}\p{Pc}]`;
function Pe(e, t) {
  return t.forEach((n) => n.parent = e), e[Gt(e)] = t, e;
}
function Eo(e, t) {
  return e.dotAll === t.dotAll && e.ignoreCase === t.ignoreCase;
}
function To(e, t) {
  let n = t;
  do {
    if (n.type === g.Pattern)
      return !1;
    if (n.type === g.Alternative)
      continue;
    if (n === e)
      return !1;
    const r = dr(n.parent);
    for (const a of r) {
      if (a === n)
        break;
      if (a === e || hr(a, e))
        return !0;
    }
  } while (n = n.parent);
  throw new Error("Unexpected path");
}
function fr(e, t, n, r) {
  const a = Array.isArray(e) ? [] : {};
  for (const [i, o] of Object.entries(e))
    i === "parent" ? a.parent = Array.isArray(n) ? r : n : o && typeof o == "object" ? a[i] = fr(o, t, a, n) : (i === "type" && o === g.CapturingGroup && t.set(a, t.get(e) ?? e), a[i] = o);
  return a;
}
function kn(e) {
  return {
    type: g.Recursion,
    ref: e
  };
}
function _o(e, t) {
  const n = [];
  for (; e = e.parent; )
    (!t || t(e)) && n.push(e);
  return n;
}
function Ct(e, t) {
  if (t.has(e))
    return t.get(e);
  const n = `$${t.size}_${e.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  return t.set(e, n), n;
}
function Gt(e) {
  for (const t of ["alternatives", "classes", "elements"])
    if (e[t])
      return t;
  return null;
}
function mr(e) {
  const t = ["dotAll", "ignoreCase"], n = { enable: {}, disable: {} };
  return e.forEach(({ flags: r }) => {
    t.forEach((a) => {
      var i, o;
      (i = r.enable) != null && i[a] && (delete n.disable[a], n.enable[a] = !0), (o = r.disable) != null && o[a] && (n.disable[a] = !0);
    });
  }), Object.keys(n.enable).length || delete n.enable, Object.keys(n.disable).length || delete n.disable, n.enable || n.disable ? n : null;
}
function Lo({ dotAll: e, ignoreCase: t }) {
  const n = {};
  return (e || t) && (n.enable = {}, e && (n.enable.dotAll = !0), t && (n.enable.ignoreCase = !0)), (!e || !t) && (n.disable = {}, !e && (n.disable.dotAll = !0), !t && (n.disable.ignoreCase = !0)), n;
}
function dr(e) {
  if (!e)
    throw new Error("Node expected");
  if (e.type === g.Quantifier)
    return [e.element];
  const t = Gt(e);
  return t && e[t];
}
function gr(e) {
  const t = e.find((n) => n.kind === T.search_start || No(n, { negate: !1 }) || !Ki(n));
  if (!t)
    return null;
  if (t.kind === T.search_start)
    return t;
  if (Ge(t))
    return t.alternatives[0].elements[0];
  if (ir(t)) {
    const n = [];
    for (const r of t.alternatives) {
      const a = gr(r.elements);
      if (!a)
        return null;
      Array.isArray(a) ? n.push(...a) : n.push(a);
    }
    return n;
  }
  return null;
}
function hr(e, t) {
  const n = dr(e) ?? [];
  for (const r of n)
    if (r === t || hr(r, t))
      return !0;
  return !1;
}
function No(e, t) {
  const n = {
    negate: null,
    ...t
  };
  return Ge(e) && (n.negate === null || e.negate === n.negate) && Bt(e, (r) => r.kind === T.search_start);
}
function bt(e) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e);
}
function K(e, t) {
  const r = or(nr(e), t).pattern.alternatives;
  return r.length > 1 || r[0].elements.length > 1 ? Pe(Z(), r) : r[0].elements[0];
}
function ne(e, t) {
  const n = Gt(e);
  return e[n][0].parent = e, t && Pe(e[n][0], t), e;
}
function kt(e, t) {
  return e.negate = t, e;
}
function yr(e, { parent: t, key: n, container: r }, a, i) {
  Ee({
    // Don't use the `node` from `path`
    node: e,
    parent: t,
    key: n,
    container: r
  }, a, i);
}
function Oo(e, t) {
  const n = Vn(t), r = _t(n.target, "ES2024"), a = _t(n.target, "ES2025"), i = n.rules.recursionLimit;
  if (!Number.isInteger(i) || i < 2 || i > 20)
    throw new Error("Invalid recursionLimit; use 2-20");
  let o = null, s = null;
  if (!a) {
    const f = [e.flags.ignoreCase];
    Ee({ node: e }, {
      getCurrentModI: () => f.at(-1),
      popModI() {
        f.pop();
      },
      pushModI(d) {
        f.push(d);
      },
      setHasCasedChar() {
        f.at(-1) ? o = !0 : s = !0;
      }
    }, Mo);
  }
  const l = {
    dotAll: e.flags.dotAll,
    // - Turn global flag i on if a case insensitive node was used and no case sensitive nodes were
    //   used (to avoid unnecessary node expansion).
    // - Turn global flag i off if a case sensitive node was used (since case sensitivity can't be
    //   forced without the use of ES2025 flag groups)
    ignoreCase: !!((e.flags.ignoreCase || o) && !s)
  };
  let c = null;
  const u = {
    accuracy: n.accuracy,
    appliedGlobalFlags: l,
    captureMap: /* @__PURE__ */ new Map(),
    currentFlags: {
      dotAll: e.flags.dotAll,
      ignoreCase: e.flags.ignoreCase
    },
    inCharClass: !1,
    lastNode: c,
    originMap: e._originMap,
    recursionLimit: i,
    useAppliedIgnoreCase: !!(!a && o && s),
    useFlagMods: a,
    useFlagV: r,
    verbose: n.verbose
  };
  function p(f) {
    switch (u.lastNode = c, c = f, f.type) {
      case g.Regex:
        return {
          pattern: p(f.pattern),
          flags: p(f.flags),
          options: { ...f.options }
        };
      case g.Alternative:
        return f.elements.map(p).join("");
      case g.Assertion:
        return Do(f, u, p);
      case g.Backreference:
        return Fo(f, u);
      case g.CapturingGroup:
        return Bo(f, u, p);
      case g.Character:
        return Uo(f, u);
      case g.CharacterClass:
        return Go(f, u, p);
      case g.CharacterClassIntersection:
        if (!u.useFlagV)
          throw new Error("Use of class intersection requires min target ES2024");
        return f.classes.map(p).join("&&");
      case g.CharacterClassRange:
        return jo(f, u);
      case g.CharacterSet:
        return Ho(f, u);
      case g.Flags:
        return Wo(f, u);
      case g.Group:
        return zo(f, u, p);
      case g.Pattern:
        return f.alternatives.map(p).join("|");
      case g.Quantifier:
        return p(f.element) + Ko(f);
      case g.Recursion:
        return Vo(f, u);
      default:
        throw new Error(`Unexpected node type "${f.type}"`);
    }
  }
  const m = p(e);
  return r || (delete m.options.force.v, m.options.disable.v = !0, m.options.unicodeSetsPlugin = null), m._captureTransfers = /* @__PURE__ */ new Map(), m._hiddenCaptures = [], u.captureMap.forEach((f, d) => {
    f.hidden && m._hiddenCaptures.push(d), f.transferTo && _e(m._captureTransfers, f.transferTo, []).push(d);
  }), m;
}
var Mo = {
  AnyGroup: {
    enter({ node: e }, t) {
      const n = t.getCurrentModI();
      t.pushModI(
        e.flags ? Xe({ ignoreCase: n }, e.flags).ignoreCase : n
      );
    },
    exit(e, t) {
      t.popModI();
    }
  },
  Backreference(e, t) {
    t.setHasCasedChar();
  },
  Character({ node: e }, t) {
    jt(P(e.value)) && t.setHasCasedChar();
  },
  CharacterClassRange({ node: e, skip: t }, n) {
    t(), Cr(e, { firstOnly: !0 }).length && n.setHasCasedChar();
  },
  CharacterSet({ node: e }, t) {
    e.kind === N.property && Zn.has(e.value) && t.setHasCasedChar();
  }
}, Io = /* @__PURE__ */ new Set([
  "$",
  "(",
  ")",
  "*",
  "+",
  ".",
  "?",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}"
]), Po = /* @__PURE__ */ new Set([
  "-",
  "\\",
  "]",
  "^",
  // Literal `[` doesn't require escaping with flag u, but this can help work around regex source
  // linters and regex syntax processors that expect unescaped `[` to create a nested class
  "["
]), $o = /* @__PURE__ */ new Set([
  "(",
  ")",
  "-",
  "/",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}",
  // Double punctuators; also includes already-listed `-` and `^`
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  ",",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "`",
  "~"
]), wn = /* @__PURE__ */ new Map([
  [9, w`\t`],
  // horizontal tab
  [10, w`\n`],
  // line feed
  [11, w`\v`],
  // vertical tab
  [12, w`\f`],
  // form feed
  [13, w`\r`],
  // carriage return
  [8232, w`\u2028`],
  // line separator
  [8233, w`\u2029`],
  // paragraph separator
  [65279, w`\uFEFF`]
  // ZWNBSP/BOM
]), Ro = new RegExp("^\\p{Cased}$", "u");
function jt(e) {
  return Ro.test(e);
}
function Do(e, t, n) {
  const { kind: r, negate: a, alternatives: i } = e;
  if (Ge(e))
    return `(?${`${r === T.lookahead ? "" : "<"}${a ? "!" : "="}`}${i.map(n).join("|")})`;
  if (r === T.string_end)
    return "$";
  if (r === T.string_start)
    return "^";
  if (r === T.word_boundary)
    return a ? w`\B` : w`\b`;
  throw new Error(`Unexpected assertion kind "${r}"`);
}
function Fo({ ref: e }, t) {
  if (typeof e != "number")
    throw new Error("Unexpected named backref in transformed AST");
  if (!t.useFlagMods && t.accuracy === "strict" && t.currentFlags.ignoreCase && !t.captureMap.get(e).ignoreCase)
    throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
  return "\\" + e;
}
function Bo(e, t, n) {
  const { name: r, number: a, alternatives: i } = e, o = { ignoreCase: t.currentFlags.ignoreCase }, s = t.originMap.get(e);
  return s && (o.hidden = !0, a > s.number && (o.transferTo = s.number)), t.captureMap.set(a, o), `(${r ? `?<${r}>` : ""}${i.map(n).join("|")})`;
}
function Uo({ value: e }, t) {
  const n = P(e), r = ve(e, {
    isAfterBackref: t.lastNode.type === g.Backreference,
    inCharClass: t.inCharClass,
    useFlagV: t.useFlagV
  });
  if (r !== n)
    return r;
  if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase && jt(n)) {
    const a = qn(n);
    return t.inCharClass ? a.join("") : a.length > 1 ? `[${a.join("")}]` : a[0];
  }
  return n;
}
function Go({ negate: e, parent: t, elements: n }, r, a) {
  var s;
  Te.literalHyphenIncorrectlyCreatesRange && r.useFlagV && n.some(Sn) && (n = n.filter((l) => !Sn(l)), n.push(Ut(45)));
  const i = () => `[${e ? "^" : ""}${n.map(a).join("")}]`;
  if (!r.inCharClass) {
    r.inCharClass = !0;
    const l = i();
    return r.inCharClass = !1, l;
  }
  const o = (s = n[0]) == null ? void 0 : s.type;
  if (!e && o && // Allows many nested classes to work with `target` ES2018 which doesn't support nesting
  ((!r.useFlagV || !r.verbose) && t.type === g.CharacterClass && o !== g.CharacterClassIntersection && !(Te.literalHyphenIncorrectlyCreatesRange && r.useFlagV) || !r.verbose && t.type === g.CharacterClassIntersection && // JS doesn't allow intersection with union or ranges
  n.length === 1 && o !== g.CharacterClass && o !== g.CharacterClassRange))
    return n.map(a).join("");
  if (!r.useFlagV && t.type === g.CharacterClass)
    throw new Error("Use of nested character class requires min target ES2024");
  return i();
}
function jo(e, t) {
  const n = e.min.value, r = e.max.value, a = {
    isAfterBackref: !1,
    inCharClass: !0,
    useFlagV: t.useFlagV
  }, i = ve(n, a), o = ve(r, a), s = /* @__PURE__ */ new Set();
  if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase) {
    const l = Cr(e);
    qo(l).forEach((u) => {
      s.add(
        Array.isArray(u) ? `${ve(u[0], a)}-${ve(u[1], a)}` : ve(u, a)
      );
    });
  }
  return `${i}-${o}${[...s].join("")}`;
}
function Ho({ kind: e, negate: t, value: n, key: r }, a) {
  if (e === N.dot)
    return a.currentFlags.dotAll ? a.appliedGlobalFlags.dotAll || a.useFlagMods ? "." : "[^]" : (
      // Onig's only line break char is line feed, unlike JS
      w`[^\n]`
    );
  if (e === N.digit)
    return t ? w`\D` : w`\d`;
  if (e === N.property) {
    if (a.useAppliedIgnoreCase && a.currentFlags.ignoreCase && Zn.has(n))
      throw new Error(`Unicode property "${n}" can't be case-insensitive when other chars have specific case`);
    return `${t ? w`\P` : w`\p`}{${r ? `${r}=` : ""}${n}}`;
  }
  if (e === N.word)
    return t ? w`\W` : w`\w`;
  throw new Error(`Unexpected character set kind "${e}"`);
}
function Wo(e, t) {
  return (
    // The transformer should never turn on the properties for flags d, g, and m since Onig doesn't
    // have equivs. Flag m is never relied on since Onig uses different line break chars than JS
    // (node.hasIndices ? 'd' : '') +
    // (node.global ? 'g' : '') +
    // (node.multiline ? 'm' : '') +
    (t.appliedGlobalFlags.ignoreCase ? "i" : "") + (e.dotAll ? "s" : "") + (e.sticky ? "y" : "")
  );
}
function zo({ atomic: e, flags: t, parent: n, alternatives: r }, a, i) {
  const o = a.currentFlags;
  t && (a.currentFlags = Xe(o, t));
  const s = r.map(i).join("|"), l = !a.verbose && r.length === 1 && n.type !== g.Quantifier && !e && (!a.useFlagMods || !t) ? s : `(?${Xo(e, t, a.useFlagMods)}${s})`;
  return a.currentFlags = o, l;
}
function Vo({ ref: e }, t) {
  const n = t.recursionLimit;
  return e === 0 ? `(?R=${n})` : w`\g<${e}&R=${n}>`;
}
function Cr(e, t) {
  const n = !!(t != null && t.firstOnly), r = e.min.value, a = e.max.value, i = [];
  if (r < 65 && (a === 65535 || a >= 131071) || r === 65536 && a >= 131071)
    return i;
  for (let o = r; o <= a; o++) {
    const s = P(o);
    if (!jt(s))
      continue;
    const l = qn(s).filter((c) => {
      const u = c.codePointAt(0);
      return u < r || u > a;
    });
    if (l.length && (i.push(...l), n))
      break;
  }
  return i;
}
function ve(e, { isAfterBackref: t, inCharClass: n, useFlagV: r }) {
  if (wn.has(e))
    return wn.get(e);
  if (
    // Control chars, etc.; condition modeled on the Chrome developer console's display for strings
    e < 32 || e > 126 && e < 160 || // Unicode planes 4-16; unassigned, special purpose, and private use area
    e > 262143 || // Avoid corrupting a preceding backref by immediately following it with a literal digit
    t && Jo(e)
  )
    return e > 255 ? `\\u{${e.toString(16).toUpperCase()}}` : `\\x${e.toString(16).toUpperCase().padStart(2, "0")}`;
  const a = n ? r ? $o : Po : Io, i = P(e);
  return (a.has(i) ? "\\" : "") + i;
}
function qo(e) {
  const t = e.map((a) => a.codePointAt(0)).sort((a, i) => a - i), n = [];
  let r = null;
  for (let a = 0; a < t.length; a++)
    t[a + 1] === t[a] + 1 ? r ?? (r = t[a]) : r === null ? n.push(t[a]) : (n.push([r, t[a]]), r = null);
  return n;
}
function Xo(e, t, n) {
  if (e)
    return ">";
  let r = "";
  if (t && n) {
    const { enable: a, disable: i } = t;
    r = (a != null && a.ignoreCase ? "i" : "") + (a != null && a.dotAll ? "s" : "") + (i ? "-" : "") + (i != null && i.ignoreCase ? "i" : "") + (i != null && i.dotAll ? "s" : "");
  }
  return `${r}:`;
}
function Ko({ min: e, max: t, greedy: n, possessive: r }) {
  let a;
  return !e && t === 1 ? a = "?" : !e && t === 1 / 0 ? a = "*" : e === 1 && t === 1 / 0 ? a = "+" : e === t ? a = `{${e}}` : a = `{${e},${t === 1 / 0 ? "" : t}}`, a + (r ? "+" : n ? "" : "?");
}
function Jo(e) {
  return e > 47 && e < 58;
}
function Sn({ type: e, value: t }) {
  return e === g.Character && t === 45;
}
var oe, re, ye, se, Ce, Fe, Mt, ce, Qo = (ce = class extends RegExp {
  /**
  @overload
  @param {string} pattern
  @param {string} [flags]
  @param {EmulatedRegExpOptions} [options]
  */
  /**
  @overload
  @param {EmulatedRegExp} pattern
  @param {string} [flags]
  */
  constructor(n, r, a) {
    var t = (...dl) => (super(...dl), me(this, Fe), /**
    @type {Map<number, {
      hidden?: true;
      transferTo?: number;
    }>}
    */
    me(this, oe, /* @__PURE__ */ new Map()), /**
    @type {RegExp | EmulatedRegExp | null}
    */
    me(this, re, null), /**
    @type {string}
    */
    me(this, ye), /**
    @type {Map<number, string>?}
    */
    me(this, se, null), /**
    @type {string?}
    */
    me(this, Ce, null), /**
    Can be used to serialize the instance.
    @type {EmulatedRegExpOptions}
    */
    U(this, "rawOptions", {}), this);
    const i = !!(a != null && a.lazyCompile);
    if (n instanceof RegExp) {
      if (a)
        throw new Error("Cannot provide options when copying a regexp");
      const o = n;
      t(o, r), X(this, ye, o.source), o instanceof ce && (X(this, oe, H(o, oe)), X(this, se, H(o, se)), X(this, Ce, H(o, Ce)), this.rawOptions = o.rawOptions);
    } else {
      const o = {
        hiddenCaptures: [],
        strategy: null,
        transfers: [],
        ...a
      };
      t(i ? "" : n, r), X(this, ye, n), X(this, oe, Yo(o.hiddenCaptures, o.transfers)), X(this, Ce, o.strategy), this.rawOptions = a ?? {};
    }
    i || X(this, re, this);
  }
  // Override the getter with one that works with lazy-compiled regexes
  get source() {
    return H(this, ye) || "(?:)";
  }
  /**
  Called internally by all String/RegExp methods that use regexes.
  @override
  @param {string} str
  @returns {RegExpExecArray?}
  */
  exec(n) {
    if (!H(this, re)) {
      const { lazyCompile: i, ...o } = this.rawOptions;
      X(this, re, new ce(H(this, ye), this.flags, o));
    }
    const r = this.global || this.sticky, a = this.lastIndex;
    if (H(this, Ce) === "clip_search" && r && a) {
      this.lastIndex = 0;
      const i = ct(this, Fe, Mt).call(this, n.slice(a));
      return i && (Zo(i, a, n, this.hasIndices), this.lastIndex += a), i;
    }
    return ct(this, Fe, Mt).call(this, n);
  }
}, oe = new WeakMap(), re = new WeakMap(), ye = new WeakMap(), se = new WeakMap(), Ce = new WeakMap(), Fe = new WeakSet(), /**
Adds support for hidden and transfer captures.
@param {string} str
@returns
*/
Mt = function(n) {
  H(this, re).lastIndex = this.lastIndex;
  const r = Jt(ce.prototype, this, "exec").call(H(this, re), n);
  if (this.lastIndex = H(this, re).lastIndex, !r || !H(this, oe).size)
    return r;
  const a = [...r];
  r.length = 1;
  let i;
  this.hasIndices && (i = [...r.indices], r.indices.length = 1);
  const o = [0];
  for (let s = 1; s < a.length; s++) {
    const { hidden: l, transferTo: c } = H(this, oe).get(s) ?? {};
    if (l ? o.push(null) : (o.push(r.length), r.push(a[s]), this.hasIndices && r.indices.push(i[s])), c && a[s] !== void 0) {
      const u = Y(o[c]);
      if (r[u] = a[s], this.hasIndices && (r.indices[u] = i[s]), r.groups) {
        H(this, se) || X(this, se, es(this.source));
        const p = H(this, se).get(c);
        p && (r.groups[p] = a[s], this.hasIndices && (r.indices.groups[p] = i[s]));
      }
    }
  }
  return r;
}, ce);
function Zo(e, t, n, r) {
  if (e.index += t, e.input = n, r) {
    const a = e.indices;
    for (let o = 0; o < a.length; o++) {
      const s = a[o];
      s && (a[o] = [s[0] + t, s[1] + t]);
    }
    const i = a.groups;
    i && Object.keys(i).forEach((o) => {
      const s = i[o];
      s && (i[o] = [s[0] + t, s[1] + t]);
    });
  }
}
function Yo(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e)
    n.set(r, {
      hidden: !0
    });
  for (const [r, a] of t)
    for (const i of a)
      _e(n, i, {}).transferTo = r;
  return n;
}
function es(e) {
  const t = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, n = /* @__PURE__ */ new Map();
  let r = 0, a = 0, i;
  for (; i = t.exec(e); ) {
    const { 0: o, groups: { capture: s, name: l } } = i;
    o === "[" ? r++ : r ? o === "]" && r-- : s && (a++, l && n.set(a, l));
  }
  return n;
}
function ts(e, t) {
  const n = ns(e, t);
  return n.options ? new Qo(n.pattern, n.flags, n.options) : new RegExp(n.pattern, n.flags);
}
function ns(e, t) {
  const n = Vn(t), r = nr(e, n.flags, {
    captureGroup: n.rules.captureGroup,
    singleline: n.rules.singleline
  }), a = or(r, {
    skipBackrefValidation: n.rules.allowOrphanBackrefs,
    verbose: n.verbose
  }), i = vo(a, {
    accuracy: n.accuracy,
    asciiWordBoundaries: n.rules.asciiWordBoundaries,
    avoidSubclass: n.avoidSubclass,
    bestEffortTarget: n.target
  }), o = Oo(i, n), s = Li(o.pattern, {
    captureTransfers: o._captureTransfers,
    hiddenCaptures: o._hiddenCaptures,
    mode: "external"
  }), l = Ti(s.pattern), c = Ei(l.pattern, {
    captureTransfers: s.captureTransfers,
    hiddenCaptures: s.hiddenCaptures
  }), u = {
    pattern: c.pattern,
    flags: `${n.hasIndices ? "d" : ""}${n.global ? "g" : ""}${o.flags}${o.options.disable.v ? "u" : "v"}`
  };
  if (n.avoidSubclass) {
    if (n.lazyCompileLength !== 1 / 0)
      throw new Error("Lazy compilation requires subclass");
  } else {
    const p = c.hiddenCaptures.sort((C, y) => C - y), m = Array.from(c.captureTransfers), f = i._strategy, d = u.pattern.length >= n.lazyCompileLength;
    (p.length || m.length || f || d) && (u.options = {
      ...p.length && { hiddenCaptures: p },
      ...m.length && { transfers: m },
      ...f && { strategy: f },
      ...d && { lazyCompile: d }
    });
  }
  return u;
}
const vn = 4294967295;
class rs {
  constructor(t, n = {}) {
    U(this, "regexps");
    this.patterns = t, this.options = n;
    const {
      forgiving: r = !1,
      cache: a,
      regexConstructor: i
    } = n;
    if (!i)
      throw new Error("Option `regexConstructor` is not provided");
    this.regexps = t.map((o) => {
      if (typeof o != "string")
        return o;
      const s = a == null ? void 0 : a.get(o);
      if (s) {
        if (s instanceof RegExp)
          return s;
        if (r)
          return null;
        throw s;
      }
      try {
        const l = i(o);
        return a == null || a.set(o, l), l;
      } catch (l) {
        if (a == null || a.set(o, l), r)
          return null;
        throw l;
      }
    });
  }
  findNextMatchSync(t, n, r) {
    const a = typeof t == "string" ? t : t.content, i = [];
    function o(s, l, c = 0) {
      return {
        index: s,
        captureIndices: l.indices.map((u) => u == null ? {
          start: vn,
          end: vn,
          length: 0
        } : {
          start: u[0] + c,
          end: u[1] + c,
          length: u[1] - u[0]
        })
      };
    }
    for (let s = 0; s < this.regexps.length; s++) {
      const l = this.regexps[s];
      if (l)
        try {
          l.lastIndex = n;
          const c = l.exec(a);
          if (!c)
            continue;
          if (c.index === n)
            return o(s, c, 0);
          i.push([s, c, 0]);
        } catch (c) {
          if (this.options.forgiving)
            continue;
          throw c;
        }
    }
    if (i.length) {
      const s = Math.min(...i.map((l) => l[1].index));
      for (const [l, c, u] of i)
        if (c.index === s)
          return o(l, c, u);
    }
    return null;
  }
}
function as(e, t) {
  return ts(
    e,
    {
      global: !0,
      hasIndices: !0,
      // This has no benefit for the standard JS engine, but it avoids a perf penalty for
      // precompiled grammars when constructing extremely long patterns that aren't always used
      lazyCompileLength: 3e3,
      rules: {
        // Needed since TextMate grammars merge backrefs across patterns
        allowOrphanBackrefs: !0,
        // Improves search performance for generated regexes
        asciiWordBoundaries: !0,
        // Follow `vscode-oniguruma` which enables this Oniguruma option by default
        captureGroup: !0,
        // Oniguruma uses depth limit `20`; lowered here to keep regexes shorter and maybe
        // sometimes faster, but can be increased if issues reported due to low limit
        recursionLimit: 5,
        // Oniguruma option for `^`->`\A`, `$`->`\Z`; improves search performance without any
        // change in meaning since TM grammars search line by line
        singleline: !0
      },
      ...t
    }
  );
}
function Xs(e = {}) {
  const t = Object.assign(
    {
      target: "auto",
      cache: /* @__PURE__ */ new Map()
    },
    e
  );
  return t.regexConstructor || (t.regexConstructor = (n) => as(n, { target: t.target })), {
    createScanner(n) {
      return new rs(n, t);
    },
    createString(n) {
      return {
        content: n
      };
    }
  };
}
function is(e) {
  return J("import `createOnigurumaEngine` from `@shikijs/engine-oniguruma` or `shiki/engine/oniguruma` instead"), et(e);
}
function Ks(e) {
  return J("import `createOnigurumaEngine` from `@shikijs/engine-oniguruma` or `shiki/engine/oniguruma` instead"), et(e);
}
function Je(e, t) {
  const n = typeof e == "string" ? {} : { ...e.colorReplacements }, r = typeof e == "string" ? e : e.name;
  for (const [a, i] of Object.entries((t == null ? void 0 : t.colorReplacements) || {}))
    typeof i == "string" ? n[a] = i : a === r && Object.assign(n, i);
  return n;
}
function ge(e, t) {
  return e && ((t == null ? void 0 : t[e == null ? void 0 : e.toLowerCase()]) || e);
}
function os(e) {
  return Array.isArray(e) ? e : [e];
}
async function br(e) {
  return Promise.resolve(typeof e == "function" ? e() : e).then((t) => t.default || t);
}
function Ht(e) {
  return !e || ["plaintext", "txt", "text", "plain"].includes(e);
}
function kr(e) {
  return e === "ansi" || Ht(e);
}
function Wt(e) {
  return e === "none";
}
function wr(e) {
  return Wt(e);
}
function Sr(e, t) {
  var r;
  if (!t)
    return e;
  e.properties || (e.properties = {}), (r = e.properties).class || (r.class = []), typeof e.properties.class == "string" && (e.properties.class = e.properties.class.split(/\s+/g)), Array.isArray(e.properties.class) || (e.properties.class = []);
  const n = Array.isArray(t) ? t : t.split(/\s+/g);
  for (const a of n)
    a && !e.properties.class.includes(a) && e.properties.class.push(a);
  return e;
}
function at(e, t = !1) {
  var i;
  const n = e.split(/(\r?\n)/g);
  let r = 0;
  const a = [];
  for (let o = 0; o < n.length; o += 2) {
    const s = t ? n[o] + (n[o + 1] || "") : n[o];
    a.push([s, r]), r += n[o].length, r += ((i = n[o + 1]) == null ? void 0 : i.length) || 0;
  }
  return a;
}
function ss(e) {
  const t = at(e, !0).map(([a]) => a);
  function n(a) {
    if (a === e.length)
      return {
        line: t.length - 1,
        character: t[t.length - 1].length
      };
    let i = a, o = 0;
    for (const s of t) {
      if (i < s.length)
        break;
      i -= s.length, o++;
    }
    return { line: o, character: i };
  }
  function r(a, i) {
    let o = 0;
    for (let s = 0; s < a; s++)
      o += t[s].length;
    return o += i, o;
  }
  return {
    lines: t,
    indexToPos: n,
    posToIndex: r
  };
}
function ls(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  for (const i of e.matchAll(/lang=["']([\w-]+)["']/g))
    r.add(i[1]);
  for (const i of e.matchAll(/(?:```|~~~)([\w-]+)/g))
    r.add(i[1]);
  for (const i of e.matchAll(/\\begin\{([\w-]+)\}/g))
    r.add(i[1]);
  if (!n)
    return Array.from(r);
  const a = n.getBundledLanguages();
  return Array.from(r).filter((i) => i && a[i]);
}
function cs(e, t) {
  let n = 0;
  const r = [];
  for (const a of t)
    a > n && r.push({
      ...e,
      content: e.content.slice(n, a),
      offset: e.offset + n
    }), n = a;
  return n < e.content.length && r.push({
    ...e,
    content: e.content.slice(n),
    offset: e.offset + n
  }), r;
}
function us(e, t) {
  const n = Array.from(t instanceof Set ? t : new Set(t)).sort((r, a) => r - a);
  return n.length ? e.map((r) => r.flatMap((a) => {
    const i = n.filter((o) => a.offset < o && o < a.offset + a.content.length).map((o) => o - a.offset).sort((o, s) => o - s);
    return i.length ? cs(a, i) : a;
  })) : e;
}
function ps(e, t, n, r) {
  const a = {
    content: e.content,
    explanation: e.explanation,
    offset: e.offset
  }, i = t.map((l) => vr(e.variants[l])), o = new Set(i.flatMap((l) => Object.keys(l))), s = {};
  return i.forEach((l, c) => {
    for (const u of o) {
      const p = l[u] || "inherit";
      if (c === 0 && r)
        s[u] = p;
      else {
        const m = u === "color" ? "" : u === "background-color" ? "-bg" : `-${u}`, f = n + t[c] + (u === "color" ? "" : m);
        s[f] = p;
      }
    }
  }), a.htmlStyle = s, a;
}
function vr(e) {
  const t = {};
  return e.color && (t.color = e.color), e.bgColor && (t["background-color"] = e.bgColor), e.fontStyle && (e.fontStyle & le.Italic && (t["font-style"] = "italic"), e.fontStyle & le.Bold && (t["font-weight"] = "bold"), e.fontStyle & le.Underline && (t["text-decoration"] = "underline")), t;
}
function fs(e) {
  return typeof e == "string" ? e : Object.entries(e).map(([t, n]) => `${t}:${n}`).join(";");
}
const xr = /* @__PURE__ */ new WeakMap();
function it(e, t) {
  xr.set(e, t);
}
function $e(e) {
  return xr.get(e);
}
class Ne {
  constructor(...t) {
    /**
     * Theme to Stack mapping
     */
    U(this, "_stacks", {});
    U(this, "lang");
    if (t.length === 2) {
      const [n, r] = t;
      this.lang = r, this._stacks = n;
    } else {
      const [n, r, a] = t;
      this.lang = r, this._stacks = { [a]: n };
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
   * Static method to create a initial grammar state.
   */
  static initial(t, n) {
    return new Ne(
      Object.fromEntries(os(n).map((r) => [r, St])),
      t
    );
  }
  /**
   * Get the internal stack object.
   * @internal
   */
  getInternalStack(t = this.theme) {
    return this._stacks[t];
  }
  /**
   * @deprecated use `getScopes` instead
   */
  get scopes() {
    return J("GrammarState.scopes is deprecated, use GrammarState.getScopes() instead"), xn(this._stacks[this.theme]);
  }
  getScopes(t = this.theme) {
    return xn(this._stacks[t]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
}
function xn(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  function r(a) {
    var o;
    if (n.has(a))
      return;
    n.add(a);
    const i = (o = a == null ? void 0 : a.nameScopesList) == null ? void 0 : o.scopeName;
    i && t.push(i), a.parent && r(a.parent);
  }
  return r(e), t;
}
function ms(e, t) {
  if (!(e instanceof Ne))
    throw new D("Invalid grammar state");
  return e.getInternalStack(t);
}
function ds() {
  const e = /* @__PURE__ */ new WeakMap();
  function t(n) {
    if (!e.has(n.meta)) {
      let r = function(o) {
        if (typeof o == "number") {
          if (o < 0 || o > n.source.length)
            throw new D(`Invalid decoration offset: ${o}. Code length: ${n.source.length}`);
          return {
            ...a.indexToPos(o),
            offset: o
          };
        } else {
          const s = a.lines[o.line];
          if (s === void 0)
            throw new D(`Invalid decoration position ${JSON.stringify(o)}. Lines length: ${a.lines.length}`);
          if (o.character < 0 || o.character > s.length)
            throw new D(`Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${s.length}`);
          return {
            ...o,
            offset: a.posToIndex(o.line, o.character)
          };
        }
      };
      const a = ss(n.source), i = (n.options.decorations || []).map((o) => ({
        ...o,
        start: r(o.start),
        end: r(o.end)
      }));
      gs(i), e.set(n.meta, {
        decorations: i,
        converter: a,
        source: n.source
      });
    }
    return e.get(n.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(n) {
      var o;
      if (!((o = this.options.decorations) != null && o.length))
        return;
      const a = t(this).decorations.flatMap((s) => [s.start.offset, s.end.offset]);
      return us(n, a);
    },
    code(n) {
      var u;
      if (!((u = this.options.decorations) != null && u.length))
        return;
      const r = t(this), a = Array.from(n.children).filter((p) => p.type === "element" && p.tagName === "span");
      if (a.length !== r.converter.lines.length)
        throw new D(`Number of lines in code element (${a.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`);
      function i(p, m, f, d) {
        const C = a[p];
        let y = "", b = -1, k = -1;
        if (m === 0 && (b = 0), f === 0 && (k = 0), f === Number.POSITIVE_INFINITY && (k = C.children.length), b === -1 || k === -1)
          for (let E = 0; E < C.children.length; E++)
            y += Ar(C.children[E]), b === -1 && y.length === m && (b = E + 1), k === -1 && y.length === f && (k = E + 1);
        if (b === -1)
          throw new D(`Failed to find start index for decoration ${JSON.stringify(d.start)}`);
        if (k === -1)
          throw new D(`Failed to find end index for decoration ${JSON.stringify(d.end)}`);
        const v = C.children.slice(b, k);
        if (!d.alwaysWrap && v.length === C.children.length)
          s(C, d, "line");
        else if (!d.alwaysWrap && v.length === 1 && v[0].type === "element")
          s(v[0], d, "token");
        else {
          const E = {
            type: "element",
            tagName: "span",
            properties: {},
            children: v
          };
          s(E, d, "wrapper"), C.children.splice(b, v.length, E);
        }
      }
      function o(p, m) {
        a[p] = s(a[p], m, "line");
      }
      function s(p, m, f) {
        var y;
        const d = m.properties || {}, C = m.transform || ((b) => b);
        return p.tagName = m.tagName || "span", p.properties = {
          ...p.properties,
          ...d,
          class: p.properties.class
        }, (y = m.properties) != null && y.class && Sr(p, m.properties.class), p = C(p, f) || p, p;
      }
      const l = [], c = r.decorations.sort((p, m) => m.start.offset - p.start.offset || p.end.offset - m.end.offset);
      for (const p of c) {
        const { start: m, end: f } = p;
        if (m.line === f.line)
          i(m.line, m.character, f.character, p);
        else if (m.line < f.line) {
          i(m.line, m.character, Number.POSITIVE_INFINITY, p);
          for (let d = m.line + 1; d < f.line; d++)
            l.unshift(() => o(d, p));
          i(f.line, 0, f.character, p);
        }
      }
      l.forEach((p) => p());
    }
  };
}
function gs(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (n.start.offset > n.end.offset)
      throw new D(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
    for (let r = t + 1; r < e.length; r++) {
      const a = e[r], i = n.start.offset <= a.start.offset && a.start.offset < n.end.offset, o = n.start.offset < a.end.offset && a.end.offset <= n.end.offset, s = a.start.offset <= n.start.offset && n.start.offset < a.end.offset, l = a.start.offset < n.end.offset && n.end.offset <= a.end.offset;
      if (i || o || s || l) {
        if (i && o || s && l)
          continue;
        throw new D(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(a.start)} intersect.`);
      }
    }
  }
}
function Ar(e) {
  return e.type === "text" ? e.value : e.type === "element" ? e.children.map(Ar).join("") : "";
}
const hs = [
  /* @__PURE__ */ ds()
];
function Qe(e) {
  return [
    ...e.transformers || [],
    ...hs
  ];
}
var he = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
], wt = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  8: "hidden",
  9: "strikethrough"
};
function ys(e, t) {
  const n = e.indexOf("\x1B", t);
  if (n !== -1 && e[n + 1] === "[") {
    const r = e.indexOf("m", n);
    if (r !== -1)
      return {
        sequence: e.substring(n + 2, r).split(";"),
        startPosition: n,
        position: r + 1
      };
  }
  return {
    position: e.length
  };
}
function An(e) {
  const t = e.shift();
  if (t === "2") {
    const n = e.splice(0, 3).map((r) => Number.parseInt(r));
    return n.length !== 3 || n.some((r) => Number.isNaN(r)) ? void 0 : {
      type: "rgb",
      rgb: n
    };
  } else if (t === "5") {
    const n = e.shift();
    if (n)
      return { type: "table", index: Number(n) };
  }
}
function Cs(e) {
  const t = [];
  for (; e.length > 0; ) {
    const n = e.shift();
    if (!n)
      continue;
    const r = Number.parseInt(n);
    if (!Number.isNaN(r))
      if (r === 0)
        t.push({ type: "resetAll" });
      else if (r <= 9)
        wt[r] && t.push({
          type: "setDecoration",
          value: wt[r]
        });
      else if (r <= 29) {
        const a = wt[r - 20];
        a && (t.push({
          type: "resetDecoration",
          value: a
        }), a === "dim" && t.push({
          type: "resetDecoration",
          value: "bold"
        }));
      } else if (r <= 37)
        t.push({
          type: "setForegroundColor",
          value: { type: "named", name: he[r - 30] }
        });
      else if (r === 38) {
        const a = An(e);
        a && t.push({
          type: "setForegroundColor",
          value: a
        });
      } else if (r === 39)
        t.push({
          type: "resetForegroundColor"
        });
      else if (r <= 47)
        t.push({
          type: "setBackgroundColor",
          value: { type: "named", name: he[r - 40] }
        });
      else if (r === 48) {
        const a = An(e);
        a && t.push({
          type: "setBackgroundColor",
          value: a
        });
      } else r === 49 ? t.push({
        type: "resetBackgroundColor"
      }) : r === 53 ? t.push({
        type: "setDecoration",
        value: "overline"
      }) : r === 55 ? t.push({
        type: "resetDecoration",
        value: "overline"
      }) : r >= 90 && r <= 97 ? t.push({
        type: "setForegroundColor",
        value: { type: "named", name: he[r - 90 + 8] }
      }) : r >= 100 && r <= 107 && t.push({
        type: "setBackgroundColor",
        value: { type: "named", name: he[r - 100 + 8] }
      });
  }
  return t;
}
function bs() {
  let e = null, t = null, n = /* @__PURE__ */ new Set();
  return {
    parse(r) {
      const a = [];
      let i = 0;
      do {
        const o = ys(r, i), s = o.sequence ? r.substring(i, o.startPosition) : r.substring(i);
        if (s.length > 0 && a.push({
          value: s,
          foreground: e,
          background: t,
          decorations: new Set(n)
        }), o.sequence) {
          const l = Cs(o.sequence);
          for (const c of l)
            c.type === "resetAll" ? (e = null, t = null, n.clear()) : c.type === "resetForegroundColor" ? e = null : c.type === "resetBackgroundColor" ? t = null : c.type === "resetDecoration" && n.delete(c.value);
          for (const c of l)
            c.type === "setForegroundColor" ? e = c.value : c.type === "setBackgroundColor" ? t = c.value : c.type === "setDecoration" && n.add(c.value);
        }
        i = o.position;
      } while (i < r.length);
      return a;
    }
  };
}
var ks = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function ws(e = ks) {
  function t(s) {
    return e[s];
  }
  function n(s) {
    return `#${s.map((l) => Math.max(0, Math.min(l, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let r;
  function a() {
    if (r)
      return r;
    r = [];
    for (let c = 0; c < he.length; c++)
      r.push(t(he[c]));
    let s = [0, 95, 135, 175, 215, 255];
    for (let c = 0; c < 6; c++)
      for (let u = 0; u < 6; u++)
        for (let p = 0; p < 6; p++)
          r.push(n([s[c], s[u], s[p]]));
    let l = 8;
    for (let c = 0; c < 24; c++, l += 10)
      r.push(n([l, l, l]));
    return r;
  }
  function i(s) {
    return a()[s];
  }
  function o(s) {
    switch (s.type) {
      case "named":
        return t(s.name);
      case "rgb":
        return n(s.rgb);
      case "table":
        return i(s.index);
    }
  }
  return {
    value: o
  };
}
function Ss(e, t, n) {
  const r = Je(e, n), a = at(t), i = ws(
    Object.fromEntries(
      he.map((s) => {
        var l;
        return [
          s,
          (l = e.colors) == null ? void 0 : l[`terminal.ansi${s[0].toUpperCase()}${s.substring(1)}`]
        ];
      })
    )
  ), o = bs();
  return a.map(
    (s) => o.parse(s[0]).map((l) => {
      let c, u;
      l.decorations.has("reverse") ? (c = l.background ? i.value(l.background) : e.bg, u = l.foreground ? i.value(l.foreground) : e.fg) : (c = l.foreground ? i.value(l.foreground) : e.fg, u = l.background ? i.value(l.background) : void 0), c = ge(c, r), u = ge(u, r), l.decorations.has("dim") && (c = vs(c));
      let p = le.None;
      return l.decorations.has("bold") && (p |= le.Bold), l.decorations.has("italic") && (p |= le.Italic), l.decorations.has("underline") && (p |= le.Underline), {
        content: l.value,
        offset: s[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color: c,
        bgColor: u,
        fontStyle: p
      };
    })
  );
}
function vs(e) {
  const t = e.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (t)
    if (t[3]) {
      const r = Math.round(Number.parseInt(t[3], 16) / 2).toString(16).padStart(2, "0");
      return `#${t[1]}${t[2]}${r}`;
    } else return t[2] ? `#${t[1]}${t[2]}80` : `#${Array.from(t[1]).map((r) => `${r}${r}`).join("")}80`;
  const n = e.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return n ? `var(${n[1]}-dim)` : e;
}
function ot(e, t, n = {}) {
  const {
    lang: r = "text",
    theme: a = e.getLoadedThemes()[0]
  } = n;
  if (Ht(r) || Wt(a))
    return at(t).map((l) => [{ content: l[0], offset: l[1] }]);
  const { theme: i, colorMap: o } = e.setTheme(a);
  if (r === "ansi")
    return Ss(i, t, n);
  const s = e.getLanguage(r);
  if (n.grammarState) {
    if (n.grammarState.lang !== s.name)
      throw new D(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${s.name}"`);
    if (!n.grammarState.themes.includes(i.name))
      throw new D(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${i.name}"`);
  }
  return xs(t, s, i, o, n);
}
function Er(...e) {
  if (e.length === 2)
    return $e(e[1]);
  const [t, n, r = {}] = e, {
    lang: a = "text",
    theme: i = t.getLoadedThemes()[0]
  } = r;
  if (Ht(a) || Wt(i))
    throw new D("Plain language does not have grammar state");
  if (a === "ansi")
    throw new D("ANSI language does not have grammar state");
  const { theme: o, colorMap: s } = t.setTheme(i), l = t.getLanguage(a);
  return new Ne(
    Ze(n, l, o, s, r).stateStack,
    l.name,
    o.name
  );
}
function xs(e, t, n, r, a) {
  const i = Ze(e, t, n, r, a), o = new Ne(
    Ze(e, t, n, r, a).stateStack,
    t.name,
    n.name
  );
  return it(i.tokens, o), i.tokens;
}
function Ze(e, t, n, r, a) {
  const i = Je(n, a), {
    tokenizeMaxLineLength: o = 0,
    tokenizeTimeLimit: s = 500
  } = a, l = at(e);
  let c = a.grammarState ? ms(a.grammarState, n.name) ?? St : a.grammarContextCode != null ? Ze(
    a.grammarContextCode,
    t,
    n,
    r,
    {
      ...a,
      grammarState: void 0,
      grammarContextCode: void 0
    }
  ).stateStack : St, u = [];
  const p = [];
  for (let m = 0, f = l.length; m < f; m++) {
    const [d, C] = l[m];
    if (d === "") {
      u = [], p.push([]);
      continue;
    }
    if (o > 0 && d.length >= o) {
      u = [], p.push([{
        content: d,
        offset: C,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let y, b, k;
    a.includeExplanation && (y = t.tokenizeLine(d, c, s), b = y.tokens, k = 0);
    const v = t.tokenizeLine2(d, c, s), E = v.tokens.length / 2;
    for (let O = 0; O < E; O++) {
      const j = v.tokens[2 * O], L = O + 1 < E ? v.tokens[2 * O + 2] : d.length;
      if (j === L)
        continue;
      const B = v.tokens[2 * O + 1], pe = ge(
        r[Qt.getForeground(B)],
        i
      ), fe = Qt.getFontStyle(B), Oe = {
        content: d.substring(j, L),
        offset: C + j,
        color: pe,
        fontStyle: fe
      };
      if (a.includeExplanation) {
        const ae = [];
        if (a.includeExplanation !== "scopeName")
          for (const ee of n.settings) {
            let we;
            switch (typeof ee.scope) {
              case "string":
                we = ee.scope.split(/,/).map((st) => st.trim());
                break;
              case "object":
                we = ee.scope;
                break;
              default:
                continue;
            }
            ae.push({
              settings: ee,
              selectors: we.map((st) => st.split(/ /))
            });
          }
        Oe.explanation = [];
        let Xt = 0;
        for (; j + Xt < L; ) {
          const ee = b[k], we = d.substring(
            ee.startIndex,
            ee.endIndex
          );
          Xt += we.length, Oe.explanation.push({
            content: we,
            scopes: a.includeExplanation === "scopeName" ? As(
              ee.scopes
            ) : Es(
              ae,
              ee.scopes
            )
          }), k += 1;
        }
      }
      u.push(Oe);
    }
    p.push(u), u = [], c = v.ruleStack;
  }
  return {
    tokens: p,
    stateStack: c
  };
}
function As(e) {
  return e.map((t) => ({ scopeName: t }));
}
function Es(e, t) {
  const n = [];
  for (let r = 0, a = t.length; r < a; r++) {
    const i = t[r];
    n[r] = {
      scopeName: i,
      themeMatches: _s(e, i, t.slice(0, r))
    };
  }
  return n;
}
function En(e, t) {
  return e === t || t.substring(0, e.length) === e && t[e.length] === ".";
}
function Ts(e, t, n) {
  if (!En(e[e.length - 1], t))
    return !1;
  let r = e.length - 2, a = n.length - 1;
  for (; r >= 0 && a >= 0; )
    En(e[r], n[a]) && (r -= 1), a -= 1;
  return r === -1;
}
function _s(e, t, n) {
  const r = [];
  for (const { selectors: a, settings: i } of e)
    for (const o of a)
      if (Ts(o, t, n)) {
        r.push(i);
        break;
      }
  return r;
}
function zt(e, t, n) {
  const r = Object.entries(n.themes).filter((l) => l[1]).map((l) => ({ color: l[0], theme: l[1] })), a = r.map((l) => {
    const c = ot(e, t, {
      ...n,
      theme: l.theme
    }), u = $e(c), p = typeof l.theme == "string" ? l.theme : l.theme.name;
    return {
      tokens: c,
      state: u,
      theme: p
    };
  }), i = Ls(
    ...a.map((l) => l.tokens)
  ), o = i[0].map(
    (l, c) => l.map((u, p) => {
      const m = {
        content: u.content,
        variants: {},
        offset: u.offset
      };
      return "includeExplanation" in n && n.includeExplanation && (m.explanation = u.explanation), i.forEach((f, d) => {
        const {
          content: C,
          explanation: y,
          offset: b,
          ...k
        } = f[c][p];
        m.variants[r[d].color] = k;
      }), m;
    })
  ), s = a[0].state ? new Ne(
    Object.fromEntries(a.map((l) => {
      var c;
      return [l.theme, (c = l.state) == null ? void 0 : c.getInternalStack(l.theme)];
    })),
    a[0].state.lang
  ) : void 0;
  return s && it(o, s), o;
}
function Ls(...e) {
  const t = e.map(() => []), n = e.length;
  for (let r = 0; r < e[0].length; r++) {
    const a = e.map((l) => l[r]), i = t.map(() => []);
    t.forEach((l, c) => l.push(i[c]));
    const o = a.map(() => 0), s = a.map((l) => l[0]);
    for (; s.every((l) => l); ) {
      const l = Math.min(...s.map((c) => c.content.length));
      for (let c = 0; c < n; c++) {
        const u = s[c];
        u.content.length === l ? (i[c].push(u), o[c] += 1, s[c] = a[c][o[c]]) : (i[c].push({
          ...u,
          content: u.content.slice(0, l)
        }), s[c] = {
          ...u,
          content: u.content.slice(l),
          offset: u.offset + l
        });
      }
    }
  }
  return t;
}
function Re(e, t, n) {
  let r, a, i, o, s, l;
  if ("themes" in n) {
    const {
      defaultColor: c = "light",
      cssVariablePrefix: u = "--shiki-"
    } = n, p = Object.entries(n.themes).filter((y) => y[1]).map((y) => ({ color: y[0], theme: y[1] })).sort((y, b) => y.color === c ? -1 : b.color === c ? 1 : 0);
    if (p.length === 0)
      throw new D("`themes` option must not be empty");
    const m = zt(
      e,
      t,
      n
    );
    if (l = $e(m), c && !p.find((y) => y.color === c))
      throw new D(`\`themes\` option must contain the defaultColor key \`${c}\``);
    const f = p.map((y) => e.getTheme(y.theme)), d = p.map((y) => y.color);
    i = m.map((y) => y.map((b) => ps(b, d, u, c))), l && it(i, l);
    const C = p.map((y) => Je(y.theme, n));
    a = p.map((y, b) => (b === 0 && c ? "" : `${u + y.color}:`) + (ge(f[b].fg, C[b]) || "inherit")).join(";"), r = p.map((y, b) => (b === 0 && c ? "" : `${u + y.color}-bg:`) + (ge(f[b].bg, C[b]) || "inherit")).join(";"), o = `shiki-themes ${f.map((y) => y.name).join(" ")}`, s = c ? void 0 : [a, r].join(";");
  } else if ("theme" in n) {
    const c = Je(n.theme, n);
    i = ot(
      e,
      t,
      n
    );
    const u = e.getTheme(n.theme);
    r = ge(u.bg, c), a = ge(u.fg, c), o = u.name, l = $e(i);
  } else
    throw new D("Invalid options, either `theme` or `themes` must be provided");
  return {
    tokens: i,
    fg: a,
    bg: r,
    themeName: o,
    rootStyle: s,
    grammarState: l
  };
}
function De(e, t, n, r = {
  meta: {},
  options: n,
  codeToHast: (a, i) => De(e, a, i),
  codeToTokens: (a, i) => Re(e, a, i)
}) {
  var f, d;
  let a = t;
  for (const C of Qe(n))
    a = ((f = C.preprocess) == null ? void 0 : f.call(r, a, n)) || a;
  let {
    tokens: i,
    fg: o,
    bg: s,
    themeName: l,
    rootStyle: c,
    grammarState: u
  } = Re(e, a, n);
  const {
    mergeWhitespaces: p = !0
  } = n;
  p === !0 ? i = Os(i) : p === "never" && (i = Ms(i));
  const m = {
    ...r,
    get source() {
      return a;
    }
  };
  for (const C of Qe(n))
    i = ((d = C.tokens) == null ? void 0 : d.call(m, i)) || i;
  return Ns(
    i,
    {
      ...n,
      fg: o,
      bg: s,
      themeName: l,
      rootStyle: c
    },
    m,
    u
  );
}
function Ns(e, t, n, r = $e(e)) {
  var d, C, y;
  const a = Qe(t), i = [], o = {
    type: "root",
    children: []
  }, {
    structure: s = "classic",
    tabindex: l = "0"
  } = t;
  let c = {
    type: "element",
    tagName: "pre",
    properties: {
      class: `shiki ${t.themeName || ""}`,
      style: t.rootStyle || `background-color:${t.bg};color:${t.fg}`,
      ...l !== !1 && l != null ? {
        tabindex: l.toString()
      } : {},
      ...Object.fromEntries(
        Array.from(
          Object.entries(t.meta || {})
        ).filter(([b]) => !b.startsWith("_"))
      )
    },
    children: []
  }, u = {
    type: "element",
    tagName: "code",
    properties: {},
    children: i
  };
  const p = [], m = {
    ...n,
    structure: s,
    addClassToHast: Sr,
    get source() {
      return n.source;
    },
    get tokens() {
      return e;
    },
    get options() {
      return t;
    },
    get root() {
      return o;
    },
    get pre() {
      return c;
    },
    get code() {
      return u;
    },
    get lines() {
      return p;
    }
  };
  if (e.forEach((b, k) => {
    var O, j;
    k && (s === "inline" ? o.children.push({ type: "element", tagName: "br", properties: {}, children: [] }) : s === "classic" && i.push({ type: "text", value: `
` }));
    let v = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    }, E = 0;
    for (const L of b) {
      let B = {
        type: "element",
        tagName: "span",
        properties: {
          ...L.htmlAttrs
        },
        children: [{ type: "text", value: L.content }]
      };
      typeof L.htmlStyle == "string" && J("`htmlStyle` as a string is deprecated. Use an object instead.");
      const pe = fs(L.htmlStyle || vr(L));
      pe && (B.properties.style = pe);
      for (const fe of a)
        B = ((O = fe == null ? void 0 : fe.span) == null ? void 0 : O.call(m, B, k + 1, E, v, L)) || B;
      s === "inline" ? o.children.push(B) : s === "classic" && v.children.push(B), E += L.content.length;
    }
    if (s === "classic") {
      for (const L of a)
        v = ((j = L == null ? void 0 : L.line) == null ? void 0 : j.call(m, v, k + 1)) || v;
      p.push(v), i.push(v);
    }
  }), s === "classic") {
    for (const b of a)
      u = ((d = b == null ? void 0 : b.code) == null ? void 0 : d.call(m, u)) || u;
    c.children.push(u);
    for (const b of a)
      c = ((C = b == null ? void 0 : b.pre) == null ? void 0 : C.call(m, c)) || c;
    o.children.push(c);
  }
  let f = o;
  for (const b of a)
    f = ((y = b == null ? void 0 : b.root) == null ? void 0 : y.call(m, f)) || f;
  return r && it(f, r), f;
}
function Os(e) {
  return e.map((t) => {
    const n = [];
    let r = "", a = 0;
    return t.forEach((i, o) => {
      const l = !(i.fontStyle && i.fontStyle & le.Underline);
      l && i.content.match(/^\s+$/) && t[o + 1] ? (a || (a = i.offset), r += i.content) : r ? (l ? n.push({
        ...i,
        offset: a,
        content: r + i.content
      }) : n.push(
        {
          content: r,
          offset: a
        },
        i
      ), a = 0, r = "") : n.push(i);
    }), n;
  });
}
function Ms(e) {
  return e.map((t) => t.flatMap((n) => {
    if (n.content.match(/^\s+$/))
      return n;
    const r = n.content.match(/^(\s*)(.*?)(\s*)$/);
    if (!r)
      return n;
    const [, a, i, o] = r;
    if (!a && !o)
      return n;
    const s = [{
      ...n,
      offset: n.offset + a.length,
      content: i
    }];
    return a && s.unshift({
      content: a,
      offset: n.offset
    }), o && s.push({
      content: o,
      offset: n.offset + a.length + i.length
    }), s;
  }));
}
function Tr(e, t, n) {
  var i;
  const r = {
    meta: {},
    options: n,
    codeToHast: (o, s) => De(e, o, s),
    codeToTokens: (o, s) => Re(e, o, s)
  };
  let a = yi(De(e, t, n, r));
  for (const o of Qe(n))
    a = ((i = o.postprocess) == null ? void 0 : i.call(r, a, n)) || a;
  return a;
}
const Tn = { light: "#333333", dark: "#bbbbbb" }, _n = { light: "#fffffe", dark: "#1e1e1e" }, Ln = "__shiki_resolved";
function Vt(e) {
  var s, l, c, u, p;
  if (e != null && e[Ln])
    return e;
  const t = {
    ...e
  };
  t.tokenColors && !t.settings && (t.settings = t.tokenColors, delete t.tokenColors), t.type || (t.type = "dark"), t.colorReplacements = { ...t.colorReplacements }, t.settings || (t.settings = []);
  let { bg: n, fg: r } = t;
  if (!n || !r) {
    const m = t.settings ? t.settings.find((f) => !f.name && !f.scope) : void 0;
    (s = m == null ? void 0 : m.settings) != null && s.foreground && (r = m.settings.foreground), (l = m == null ? void 0 : m.settings) != null && l.background && (n = m.settings.background), !r && ((c = t == null ? void 0 : t.colors) != null && c["editor.foreground"]) && (r = t.colors["editor.foreground"]), !n && ((u = t == null ? void 0 : t.colors) != null && u["editor.background"]) && (n = t.colors["editor.background"]), r || (r = t.type === "light" ? Tn.light : Tn.dark), n || (n = t.type === "light" ? _n.light : _n.dark), t.fg = r, t.bg = n;
  }
  t.settings[0] && t.settings[0].settings && !t.settings[0].scope || t.settings.unshift({
    settings: {
      foreground: t.fg,
      background: t.bg
    }
  });
  let a = 0;
  const i = /* @__PURE__ */ new Map();
  function o(m) {
    var d;
    if (i.has(m))
      return i.get(m);
    a += 1;
    const f = `#${a.toString(16).padStart(8, "0").toLowerCase()}`;
    return (d = t.colorReplacements) != null && d[`#${f}`] ? o(m) : (i.set(m, f), f);
  }
  t.settings = t.settings.map((m) => {
    var y, b;
    const f = ((y = m.settings) == null ? void 0 : y.foreground) && !m.settings.foreground.startsWith("#"), d = ((b = m.settings) == null ? void 0 : b.background) && !m.settings.background.startsWith("#");
    if (!f && !d)
      return m;
    const C = {
      ...m,
      settings: {
        ...m.settings
      }
    };
    if (f) {
      const k = o(m.settings.foreground);
      t.colorReplacements[k] = m.settings.foreground, C.settings.foreground = k;
    }
    if (d) {
      const k = o(m.settings.background);
      t.colorReplacements[k] = m.settings.background, C.settings.background = k;
    }
    return C;
  });
  for (const m of Object.keys(t.colors || {}))
    if ((m === "editor.foreground" || m === "editor.background" || m.startsWith("terminal.ansi")) && !((p = t.colors[m]) != null && p.startsWith("#"))) {
      const f = o(t.colors[m]);
      t.colorReplacements[f] = t.colors[m], t.colors[m] = f;
    }
  return Object.defineProperty(t, Ln, {
    enumerable: !1,
    writable: !1,
    value: !0
  }), t;
}
async function _r(e) {
  return Array.from(new Set((await Promise.all(
    e.filter((t) => !kr(t)).map(async (t) => await br(t).then((n) => Array.isArray(n) ? n : [n]))
  )).flat()));
}
async function Lr(e) {
  return (await Promise.all(
    e.map(
      async (n) => wr(n) ? null : Vt(await br(n))
    )
  )).filter((n) => !!n);
}
class xe extends Error {
  constructor(t) {
    super(t), this.name = "ShikiError";
  }
}
class Is extends Fr {
  constructor(n, r, a, i = {}) {
    super(n);
    U(this, "_resolvedThemes", /* @__PURE__ */ new Map());
    U(this, "_resolvedGrammars", /* @__PURE__ */ new Map());
    U(this, "_langMap", /* @__PURE__ */ new Map());
    U(this, "_langGraph", /* @__PURE__ */ new Map());
    U(this, "_textmateThemeCache", /* @__PURE__ */ new WeakMap());
    U(this, "_loadedThemesCache", null);
    U(this, "_loadedLanguagesCache", null);
    this._resolver = n, this._themes = r, this._langs = a, this._alias = i, this._themes.map((o) => this.loadTheme(o)), this.loadLanguages(this._langs);
  }
  getTheme(n) {
    return typeof n == "string" ? this._resolvedThemes.get(n) : this.loadTheme(n);
  }
  loadTheme(n) {
    const r = Vt(n);
    return r.name && (this._resolvedThemes.set(r.name, r), this._loadedThemesCache = null), r;
  }
  getLoadedThemes() {
    return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
  }
  // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
  // is expensive. Themes can switch often especially for dual-theme support.
  //
  // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
  // we omit here so it's easier to cache the themes.
  setTheme(n) {
    let r = this._textmateThemeCache.get(n);
    r || (r = Br.createFromRawTheme(n), this._textmateThemeCache.set(n, r)), this._syncRegistry.setTheme(r);
  }
  getGrammar(n) {
    if (this._alias[n]) {
      const r = /* @__PURE__ */ new Set([n]);
      for (; this._alias[n]; ) {
        if (n = this._alias[n], r.has(n))
          throw new xe(`Circular alias \`${Array.from(r).join(" -> ")} -> ${n}\``);
        r.add(n);
      }
    }
    return this._resolvedGrammars.get(n);
  }
  loadLanguage(n) {
    var o, s, l, c;
    if (this.getGrammar(n.name))
      return;
    const r = new Set(
      [...this._langMap.values()].filter((u) => {
        var p;
        return (p = u.embeddedLangsLazy) == null ? void 0 : p.includes(n.name);
      })
    );
    this._resolver.addLanguage(n);
    const a = {
      balancedBracketSelectors: n.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: n.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(n.scopeName, n);
    const i = this.loadGrammarWithConfiguration(n.scopeName, 1, a);
    if (i.name = n.name, this._resolvedGrammars.set(n.name, i), n.aliases && n.aliases.forEach((u) => {
      this._alias[u] = n.name;
    }), this._loadedLanguagesCache = null, r.size)
      for (const u of r)
        this._resolvedGrammars.delete(u.name), this._loadedLanguagesCache = null, (s = (o = this._syncRegistry) == null ? void 0 : o._injectionGrammars) == null || s.delete(u.scopeName), (c = (l = this._syncRegistry) == null ? void 0 : l._grammars) == null || c.delete(u.scopeName), this.loadLanguage(this._langMap.get(u.name));
  }
  dispose() {
    super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
  }
  loadLanguages(n) {
    for (const i of n)
      this.resolveEmbeddedLanguages(i);
    const r = Array.from(this._langGraph.entries()), a = r.filter(([i, o]) => !o);
    if (a.length) {
      const i = r.filter(([o, s]) => {
        var l;
        return s && ((l = s.embeddedLangs) == null ? void 0 : l.some((c) => a.map(([u]) => u).includes(c)));
      }).filter((o) => !a.includes(o));
      throw new xe(`Missing languages ${a.map(([o]) => `\`${o}\``).join(", ")}, required by ${i.map(([o]) => `\`${o}\``).join(", ")}`);
    }
    for (const [i, o] of r)
      this._resolver.addLanguage(o);
    for (const [i, o] of r)
      this.loadLanguage(o);
  }
  getLoadedLanguages() {
    return this._loadedLanguagesCache || (this._loadedLanguagesCache = [
      .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
    ]), this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(n) {
    if (this._langMap.set(n.name, n), this._langGraph.set(n.name, n), n.embeddedLangs)
      for (const r of n.embeddedLangs)
        this._langGraph.set(r, this._langMap.get(r));
  }
}
class Ps {
  constructor(t, n) {
    U(this, "_langs", /* @__PURE__ */ new Map());
    U(this, "_scopeToLang", /* @__PURE__ */ new Map());
    U(this, "_injections", /* @__PURE__ */ new Map());
    U(this, "_onigLib");
    this._onigLib = {
      createOnigScanner: (r) => t.createScanner(r),
      createOnigString: (r) => t.createString(r)
    }, n.forEach((r) => this.addLanguage(r));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(t) {
    return this._langs.get(t);
  }
  loadGrammar(t) {
    return this._scopeToLang.get(t);
  }
  addLanguage(t) {
    this._langs.set(t.name, t), t.aliases && t.aliases.forEach((n) => {
      this._langs.set(n, t);
    }), this._scopeToLang.set(t.scopeName, t), t.injectTo && t.injectTo.forEach((n) => {
      this._injections.get(n) || this._injections.set(n, []), this._injections.get(n).push(t.scopeName);
    });
  }
  getInjections(t) {
    const n = t.split(".");
    let r = [];
    for (let a = 1; a <= n.length; a++) {
      const i = n.slice(0, a).join(".");
      r = [...r, ...this._injections.get(i) || []];
    }
    return r;
  }
}
let Me = 0;
function Nr(e) {
  Me += 1, e.warnings !== !1 && Me >= 10 && Me % 10 === 0 && console.warn(`[Shiki] ${Me} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let t = !1;
  if (!e.engine)
    throw new xe("`engine` option is required for synchronous mode");
  const n = (e.langs || []).flat(1), r = (e.themes || []).flat(1).map(Vt), a = new Ps(e.engine, n), i = new Is(a, r, n, e.langAlias);
  let o;
  function s(k) {
    y();
    const v = i.getGrammar(typeof k == "string" ? k : k.name);
    if (!v)
      throw new xe(`Language \`${k}\` not found, you may need to load it first`);
    return v;
  }
  function l(k) {
    if (k === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    y();
    const v = i.getTheme(k);
    if (!v)
      throw new xe(`Theme \`${k}\` not found, you may need to load it first`);
    return v;
  }
  function c(k) {
    y();
    const v = l(k);
    o !== k && (i.setTheme(v), o = k);
    const E = i.getColorMap();
    return {
      theme: v,
      colorMap: E
    };
  }
  function u() {
    return y(), i.getLoadedThemes();
  }
  function p() {
    return y(), i.getLoadedLanguages();
  }
  function m(...k) {
    y(), i.loadLanguages(k.flat(1));
  }
  async function f(...k) {
    return m(await _r(k));
  }
  function d(...k) {
    y();
    for (const v of k.flat(1))
      i.loadTheme(v);
  }
  async function C(...k) {
    return y(), d(await Lr(k));
  }
  function y() {
    if (t)
      throw new xe("Shiki instance has been disposed");
  }
  function b() {
    t || (t = !0, i.dispose(), Me -= 1);
  }
  return {
    setTheme: c,
    getTheme: l,
    getLanguage: s,
    getLoadedThemes: u,
    getLoadedLanguages: p,
    loadLanguage: f,
    loadLanguageSync: m,
    loadTheme: C,
    loadThemeSync: d,
    dispose: b,
    [Symbol.dispose]: b
  };
}
async function Or(e) {
  e.loadWasm && J("`loadWasm` option is deprecated. Use `engine: createOnigurumaEngine(loadWasm)` instead."), e.engine || J("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  const [
    t,
    n,
    r
  ] = await Promise.all([
    Lr(e.themes || []),
    _r(e.langs || []),
    e.engine || et(e.loadWasm || ra())
  ]);
  return Nr({
    ...e,
    themes: t,
    langs: n,
    engine: r
  });
}
function Js(e) {
  return J("`getShikiInternal` is deprecated. Use `createShikiInternal` instead."), Or(e);
}
async function qt(e) {
  const t = await Or(e);
  return {
    getLastGrammarState: (...n) => Er(t, ...n),
    codeToTokensBase: (n, r) => ot(t, n, r),
    codeToTokensWithThemes: (n, r) => zt(t, n, r),
    codeToTokens: (n, r) => Re(t, n, r),
    codeToHast: (n, r) => De(t, n, r),
    codeToHtml: (n, r) => Tr(t, n, r),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t
  };
}
function Qs(e) {
  const t = Nr(e);
  return {
    getLastGrammarState: (...n) => Er(t, ...n),
    codeToTokensBase: (n, r) => ot(t, n, r),
    codeToTokensWithThemes: (n, r) => zt(t, n, r),
    codeToTokens: (n, r) => Re(t, n, r),
    codeToHast: (n, r) => De(t, n, r),
    codeToHtml: (n, r) => Tr(t, n, r),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t
  };
}
function $s(e) {
  let t;
  async function n(r) {
    if (t) {
      const a = await t;
      return await Promise.all([
        a.loadTheme(...r.themes || []),
        a.loadLanguage(...r.langs || [])
      ]), a;
    } else
      return t = e({
        ...r,
        themes: r.themes || [],
        langs: r.langs || []
      }), t;
  }
  return n;
}
const Zs = /* @__PURE__ */ $s(qt);
function Ys(e) {
  return J("`getHighlighterCore` is deprecated. Use `createHighlighterCore` or `getSingletonHighlighterCore` instead."), qt(e);
}
function Rs(e, t, n) {
  let r, a, i;
  if (t)
    J("`createdBundledHighlighter` signature with `bundledLanguages` and `bundledThemes` is deprecated. Use the options object signature instead."), r = e, a = t, i = () => is(n);
  else {
    const s = e;
    r = s.langs, a = s.themes, i = s.engine;
  }
  async function o(s) {
    function l(f) {
      if (typeof f == "string") {
        if (kr(f))
          return [];
        const d = r[f];
        if (!d)
          throw new D(`Language \`${f}\` is not included in this bundle. You may want to load it from external source.`);
        return d;
      }
      return f;
    }
    function c(f) {
      if (wr(f))
        return "none";
      if (typeof f == "string") {
        const d = a[f];
        if (!d)
          throw new D(`Theme \`${f}\` is not included in this bundle. You may want to load it from external source.`);
        return d;
      }
      return f;
    }
    const u = (s.themes ?? []).map((f) => c(f)), p = (s.langs ?? []).map((f) => l(f)), m = await qt({
      engine: s.engine ?? i(),
      ...s,
      themes: u,
      langs: p
    });
    return {
      ...m,
      loadLanguage(...f) {
        return m.loadLanguage(...f.map(l));
      },
      loadTheme(...f) {
        return m.loadTheme(...f.map(c));
      },
      getBundledLanguages() {
        return r;
      },
      getBundledThemes() {
        return a;
      }
    };
  }
  return o;
}
function Ds(e) {
  let t;
  async function n(r = {}) {
    if (t) {
      const a = await t;
      return await Promise.all([
        a.loadTheme(...r.themes || []),
        a.loadLanguage(...r.langs || [])
      ]), a;
    } else
      return t = e({
        ...r,
        themes: r.themes || [],
        langs: r.langs || []
      }), t;
  }
  return n;
}
function Fs(e, t) {
  const n = Ds(e);
  async function r(a, i) {
    var l;
    const o = await n({
      langs: [i.lang],
      themes: "theme" in i ? [i.theme] : Object.values(i.themes)
    }), s = await ((l = t == null ? void 0 : t.guessEmbeddedLanguages) == null ? void 0 : l.call(t, a, i.lang, o));
    return s && await o.loadLanguage(...s), o;
  }
  return {
    getSingletonHighlighter(a) {
      return n(a);
    },
    async codeToHtml(a, i) {
      return (await r(a, i)).codeToHtml(a, i);
    },
    async codeToHast(a, i) {
      return (await r(a, i)).codeToHast(a, i);
    },
    async codeToTokens(a, i) {
      return (await r(a, i)).codeToTokens(a, i);
    },
    async codeToTokensBase(a, i) {
      return (await r(a, i)).codeToTokensBase(a, i);
    },
    async codeToTokensWithThemes(a, i) {
      return (await r(a, i)).codeToTokensWithThemes(a, i);
    },
    async getLastGrammarState(a, i) {
      return (await n({
        langs: [i.lang],
        themes: [i.theme]
      })).getLastGrammarState(a, i);
    }
  };
}
function el(e = {}) {
  var o;
  const {
    name: t = "css-variables",
    variablePrefix: n = "--shiki-",
    fontStyle: r = !0
  } = e, a = (s) => {
    var l;
    return (l = e.variableDefaults) != null && l[s] ? `var(${n}${s}, ${e.variableDefaults[s]})` : `var(${n}${s})`;
  }, i = {
    name: t,
    type: "dark",
    colors: {
      "editor.foreground": a("foreground"),
      "editor.background": a("background"),
      "terminal.ansiBlack": a("ansi-black"),
      "terminal.ansiRed": a("ansi-red"),
      "terminal.ansiGreen": a("ansi-green"),
      "terminal.ansiYellow": a("ansi-yellow"),
      "terminal.ansiBlue": a("ansi-blue"),
      "terminal.ansiMagenta": a("ansi-magenta"),
      "terminal.ansiCyan": a("ansi-cyan"),
      "terminal.ansiWhite": a("ansi-white"),
      "terminal.ansiBrightBlack": a("ansi-bright-black"),
      "terminal.ansiBrightRed": a("ansi-bright-red"),
      "terminal.ansiBrightGreen": a("ansi-bright-green"),
      "terminal.ansiBrightYellow": a("ansi-bright-yellow"),
      "terminal.ansiBrightBlue": a("ansi-bright-blue"),
      "terminal.ansiBrightMagenta": a("ansi-bright-magenta"),
      "terminal.ansiBrightCyan": a("ansi-bright-cyan"),
      "terminal.ansiBrightWhite": a("ansi-bright-white")
    },
    tokenColors: [
      {
        scope: [
          "keyword.operator.accessor",
          "meta.group.braces.round.function.arguments",
          "meta.template.expression",
          "markup.fenced_code meta.embedded.block"
        ],
        settings: {
          foreground: a("foreground")
        }
      },
      {
        scope: "emphasis",
        settings: {
          fontStyle: "italic"
        }
      },
      {
        scope: ["strong", "markup.heading.markdown", "markup.bold.markdown"],
        settings: {
          fontStyle: "bold"
        }
      },
      {
        scope: ["markup.italic.markdown"],
        settings: {
          fontStyle: "italic"
        }
      },
      {
        scope: "meta.link.inline.markdown",
        settings: {
          fontStyle: "underline",
          foreground: a("token-link")
        }
      },
      {
        scope: ["string", "markup.fenced_code", "markup.inline"],
        settings: {
          foreground: a("token-string")
        }
      },
      {
        scope: ["comment", "string.quoted.docstring.multi"],
        settings: {
          foreground: a("token-comment")
        }
      },
      {
        scope: [
          "constant.numeric",
          "constant.language",
          "constant.other.placeholder",
          "constant.character.format.placeholder",
          "variable.language.this",
          "variable.other.object",
          "variable.other.class",
          "variable.other.constant",
          "meta.property-name",
          "meta.property-value",
          "support"
        ],
        settings: {
          foreground: a("token-constant")
        }
      },
      {
        scope: [
          "keyword",
          "storage.modifier",
          "storage.type",
          "storage.control.clojure",
          "entity.name.function.clojure",
          "entity.name.tag.yaml",
          "support.function.node",
          "support.type.property-name.json",
          "punctuation.separator.key-value",
          "punctuation.definition.template-expression"
        ],
        settings: {
          foreground: a("token-keyword")
        }
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: a("token-parameter")
        }
      },
      {
        scope: [
          "support.function",
          "entity.name.type",
          "entity.other.inherited-class",
          "meta.function-call",
          "meta.instance.constructor",
          "entity.other.attribute-name",
          "entity.name.function",
          "constant.keyword.clojure"
        ],
        settings: {
          foreground: a("token-function")
        }
      },
      {
        scope: [
          "entity.name.tag",
          "string.quoted",
          "string.regexp",
          "string.interpolated",
          "string.template",
          "string.unquoted.plain.out.yaml",
          "keyword.other.template"
        ],
        settings: {
          foreground: a("token-string-expression")
        }
      },
      {
        scope: [
          "punctuation.definition.arguments",
          "punctuation.definition.dict",
          "punctuation.separator",
          "meta.function-call.arguments"
        ],
        settings: {
          foreground: a("token-punctuation")
        }
      },
      {
        // [Custom] Markdown links
        scope: [
          "markup.underline.link",
          "punctuation.definition.metadata.markdown"
        ],
        settings: {
          foreground: a("token-link")
        }
      },
      {
        // [Custom] Markdown list
        scope: ["beginning.punctuation.definition.list.markdown"],
        settings: {
          foreground: a("token-string")
        }
      },
      {
        // [Custom] Markdown punctuation definition brackets
        scope: [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "string.other.link.title.markdown",
          "string.other.link.description.markdown"
        ],
        settings: {
          foreground: a("token-keyword")
        }
      },
      {
        // [Custom] Diff
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        settings: {
          foreground: a("token-inserted")
        }
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        settings: {
          foreground: a("token-deleted")
        }
      },
      {
        scope: [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        settings: {
          foreground: a("token-changed")
        }
      }
    ]
  };
  return r || (i.tokenColors = (o = i.tokenColors) == null ? void 0 : o.map((s) => {
    var l;
    return (l = s.settings) != null && l.fontStyle && delete s.settings.fontStyle, s;
  })), i;
}
const Mr = [
  {
    id: "abap",
    name: "ABAP",
    import: () => import("./abap-BmBUA35e.js")
  },
  {
    id: "actionscript-3",
    name: "ActionScript",
    import: () => import("./actionscript-3-Duslr-Xk.js")
  },
  {
    id: "ada",
    name: "Ada",
    import: () => import("./ada-CBvPkFpZ.js")
  },
  {
    id: "angular-html",
    name: "Angular HTML",
    import: () => import("./angular-html-BykNicnS.js").then((e) => e.f)
  },
  {
    id: "angular-ts",
    name: "Angular TypeScript",
    import: () => import("./angular-ts-BHpD0guW.js")
  },
  {
    id: "apache",
    name: "Apache Conf",
    import: () => import("./apache-CVNlsSDc.js")
  },
  {
    id: "apex",
    name: "Apex",
    import: () => import("./apex-DFk3KRB1.js")
  },
  {
    id: "apl",
    name: "APL",
    import: () => import("./apl-iiNHpPRe.js")
  },
  {
    id: "applescript",
    name: "AppleScript",
    import: () => import("./applescript-D0lq2uyG.js")
  },
  {
    id: "ara",
    name: "Ara",
    import: () => import("./ara-BxwG6H0R.js")
  },
  {
    id: "asciidoc",
    name: "AsciiDoc",
    aliases: [
      "adoc"
    ],
    import: () => import("./asciidoc-DfqmH17V.js")
  },
  {
    id: "asm",
    name: "Assembly",
    import: () => import("./asm-RC0Yh-NZ.js")
  },
  {
    id: "astro",
    name: "Astro",
    import: () => import("./astro-jjdX1_o0.js")
  },
  {
    id: "awk",
    name: "AWK",
    import: () => import("./awk-gPH8MVMW.js")
  },
  {
    id: "ballerina",
    name: "Ballerina",
    import: () => import("./ballerina-kvLnRU_e.js")
  },
  {
    id: "bat",
    name: "Batch File",
    aliases: [
      "batch"
    ],
    import: () => import("./bat-BHYy44sT.js")
  },
  {
    id: "beancount",
    name: "Beancount",
    import: () => import("./beancount-CRuI-qxP.js")
  },
  {
    id: "berry",
    name: "Berry",
    aliases: [
      "be"
    ],
    import: () => import("./berry-Ci9U0o4h.js")
  },
  {
    id: "bibtex",
    name: "BibTeX",
    import: () => import("./bibtex-CX618D15.js")
  },
  {
    id: "bicep",
    name: "Bicep",
    import: () => import("./bicep-iuYiPopT.js")
  },
  {
    id: "blade",
    name: "Blade",
    import: () => import("./blade-C-EMBGSs.js")
  },
  {
    id: "bsl",
    name: "1C (Enterprise)",
    aliases: [
      "1c"
    ],
    import: () => import("./bsl-CXtfttnD.js")
  },
  {
    id: "c",
    name: "C",
    import: () => import("./c-DASdrs7p.js")
  },
  {
    id: "cadence",
    name: "Cadence",
    aliases: [
      "cdc"
    ],
    import: () => import("./cadence-BwtsKTvx.js")
  },
  {
    id: "cairo",
    name: "Cairo",
    import: () => import("./cairo-BWa6TLMq.js")
  },
  {
    id: "clarity",
    name: "Clarity",
    import: () => import("./clarity-9Cadad6s.js")
  },
  {
    id: "clojure",
    name: "Clojure",
    aliases: [
      "clj"
    ],
    import: () => import("./clojure-CsKKFGwv.js")
  },
  {
    id: "cmake",
    name: "CMake",
    import: () => import("./cmake-Ba0CZDb1.js")
  },
  {
    id: "cobol",
    name: "COBOL",
    import: () => import("./cobol-CAatoUdx.js")
  },
  {
    id: "codeowners",
    name: "CODEOWNERS",
    import: () => import("./codeowners-Bt9yU6NX.js")
  },
  {
    id: "codeql",
    name: "CodeQL",
    aliases: [
      "ql"
    ],
    import: () => import("./codeql-Ce2eNlR6.js")
  },
  {
    id: "coffee",
    name: "CoffeeScript",
    aliases: [
      "coffeescript"
    ],
    import: () => import("./coffee-D_GzM8k1.js")
  },
  {
    id: "common-lisp",
    name: "Common Lisp",
    aliases: [
      "lisp"
    ],
    import: () => import("./common-lisp-r7ZEOG7T.js")
  },
  {
    id: "coq",
    name: "Coq",
    import: () => import("./coq-D7gLDqnE.js")
  },
  {
    id: "cpp",
    name: "C++",
    aliases: [
      "c++"
    ],
    import: () => import("./cpp-DgBvEX06.js")
  },
  {
    id: "crystal",
    name: "Crystal",
    import: () => import("./crystal-Irrx0Pa-.js")
  },
  {
    id: "csharp",
    name: "C#",
    aliases: [
      "c#",
      "cs"
    ],
    import: () => import("./csharp-DP0xB1m9.js")
  },
  {
    id: "css",
    name: "CSS",
    import: () => import("./css-D1aVdRIU.js")
  },
  {
    id: "csv",
    name: "CSV",
    import: () => import("./csv-DvCncUGQ.js")
  },
  {
    id: "cue",
    name: "CUE",
    import: () => import("./cue-BXMrmvay.js")
  },
  {
    id: "cypher",
    name: "Cypher",
    aliases: [
      "cql"
    ],
    import: () => import("./cypher-Bjq2-Qil.js")
  },
  {
    id: "d",
    name: "D",
    import: () => import("./d-D6ZXmn3l.js")
  },
  {
    id: "dart",
    name: "Dart",
    import: () => import("./dart-Dz59Is3F.js")
  },
  {
    id: "dax",
    name: "DAX",
    import: () => import("./dax-BQnxIpeJ.js")
  },
  {
    id: "desktop",
    name: "Desktop",
    import: () => import("./desktop-Db9vb-dl.js")
  },
  {
    id: "diff",
    name: "Diff",
    import: () => import("./diff-CXJVWqiZ.js")
  },
  {
    id: "docker",
    name: "Dockerfile",
    aliases: [
      "dockerfile"
    ],
    import: () => import("./docker-CsHqm9tx.js")
  },
  {
    id: "dotenv",
    name: "dotEnv",
    import: () => import("./dotenv-CpZf7hu_.js")
  },
  {
    id: "dream-maker",
    name: "Dream Maker",
    import: () => import("./dream-maker-B0kijSoP.js")
  },
  {
    id: "edge",
    name: "Edge",
    import: () => import("./edge-DUKxyBaA.js")
  },
  {
    id: "elixir",
    name: "Elixir",
    import: () => import("./elixir-DciEEYXV.js")
  },
  {
    id: "elm",
    name: "Elm",
    import: () => import("./elm-C-_4e5ZU.js")
  },
  {
    id: "emacs-lisp",
    name: "Emacs Lisp",
    aliases: [
      "elisp"
    ],
    import: () => import("./emacs-lisp-BAefI874.js")
  },
  {
    id: "erb",
    name: "ERB",
    import: () => import("./erb-qWJ2Sxju.js")
  },
  {
    id: "erlang",
    name: "Erlang",
    aliases: [
      "erl"
    ],
    import: () => import("./erlang-zeJgoGSf.js")
  },
  {
    id: "fennel",
    name: "Fennel",
    import: () => import("./fennel-DNqkz9pE.js")
  },
  {
    id: "fish",
    name: "Fish",
    import: () => import("./fish-CgmTWKa-.js")
  },
  {
    id: "fluent",
    name: "Fluent",
    aliases: [
      "ftl"
    ],
    import: () => import("./fluent-BapTxJsC.js")
  },
  {
    id: "fortran-fixed-form",
    name: "Fortran (Fixed Form)",
    aliases: [
      "f",
      "for",
      "f77"
    ],
    import: () => import("./fortran-fixed-form-BJHD-IIW.js")
  },
  {
    id: "fortran-free-form",
    name: "Fortran (Free Form)",
    aliases: [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    import: () => import("./fortran-free-form-DIGrsU3L.js")
  },
  {
    id: "fsharp",
    name: "F#",
    aliases: [
      "f#",
      "fs"
    ],
    import: () => import("./fsharp-C9ST_v27.js")
  },
  {
    id: "gdresource",
    name: "GDResource",
    import: () => import("./gdresource-BDmP_ODe.js")
  },
  {
    id: "gdscript",
    name: "GDScript",
    import: () => import("./gdscript-C_KI5dtV.js")
  },
  {
    id: "gdshader",
    name: "GDShader",
    import: () => import("./gdshader-BGJEsM2Z.js")
  },
  {
    id: "genie",
    name: "Genie",
    import: () => import("./genie-C9gPjc6J.js")
  },
  {
    id: "gherkin",
    name: "Gherkin",
    import: () => import("./gherkin-bka1Exbx.js")
  },
  {
    id: "git-commit",
    name: "Git Commit Message",
    import: () => import("./git-commit-CpnaV1vS.js")
  },
  {
    id: "git-rebase",
    name: "Git Rebase Message",
    import: () => import("./git-rebase-i91KcDkj.js")
  },
  {
    id: "gleam",
    name: "Gleam",
    import: () => import("./gleam-B4k9YFGD.js")
  },
  {
    id: "glimmer-js",
    name: "Glimmer JS",
    aliases: [
      "gjs"
    ],
    import: () => import("./glimmer-js-Cy-seTWt.js")
  },
  {
    id: "glimmer-ts",
    name: "Glimmer TS",
    aliases: [
      "gts"
    ],
    import: () => import("./glimmer-ts-BqS9vK74.js")
  },
  {
    id: "glsl",
    name: "GLSL",
    import: () => import("./glsl-XLGYNq5B.js")
  },
  {
    id: "gnuplot",
    name: "Gnuplot",
    import: () => import("./gnuplot-DnWoRZt-.js")
  },
  {
    id: "go",
    name: "Go",
    import: () => import("./go-BE_MH2_f.js")
  },
  {
    id: "graphql",
    name: "GraphQL",
    aliases: [
      "gql"
    ],
    import: () => import("./graphql-DfqJ60AB.js")
  },
  {
    id: "groovy",
    name: "Groovy",
    import: () => import("./groovy-CyKtXwrG.js")
  },
  {
    id: "hack",
    name: "Hack",
    import: () => import("./hack-BcPvMs07.js")
  },
  {
    id: "haml",
    name: "Ruby Haml",
    import: () => import("./haml-kgLjPoQR.js")
  },
  {
    id: "handlebars",
    name: "Handlebars",
    aliases: [
      "hbs"
    ],
    import: () => import("./handlebars-CxEEvn8q.js")
  },
  {
    id: "haskell",
    name: "Haskell",
    aliases: [
      "hs"
    ],
    import: () => import("./haskell-DA6E-9ES.js")
  },
  {
    id: "haxe",
    name: "Haxe",
    import: () => import("./haxe-CZZ33vZw.js")
  },
  {
    id: "hcl",
    name: "HashiCorp HCL",
    import: () => import("./hcl-BmHk-gID.js")
  },
  {
    id: "hjson",
    name: "Hjson",
    import: () => import("./hjson-CgwED-oz.js")
  },
  {
    id: "hlsl",
    name: "HLSL",
    import: () => import("./hlsl-3-lv4gi7.js")
  },
  {
    id: "html",
    name: "HTML",
    import: () => import("./html-CAwPY-4s.js")
  },
  {
    id: "html-derivative",
    name: "HTML (Derivative)",
    import: () => import("./html-derivative-CgU1HeVZ.js")
  },
  {
    id: "http",
    name: "HTTP",
    import: () => import("./http-CtmMjKg2.js")
  },
  {
    id: "hxml",
    name: "HXML",
    import: () => import("./hxml-BNKImryz.js")
  },
  {
    id: "hy",
    name: "Hy",
    import: () => import("./hy-C2xHhR6I.js")
  },
  {
    id: "imba",
    name: "Imba",
    import: () => import("./imba-Drd0AMDo.js")
  },
  {
    id: "ini",
    name: "INI",
    aliases: [
      "properties"
    ],
    import: () => import("./ini-BUcvsX-U.js")
  },
  {
    id: "java",
    name: "Java",
    import: () => import("./java-B7odJ7Ap.js")
  },
  {
    id: "javascript",
    name: "JavaScript",
    aliases: [
      "js"
    ],
    import: () => import("./javascript-fa8UlHZE.js")
  },
  {
    id: "jinja",
    name: "Jinja",
    import: () => import("./jinja-BPjRosMt.js")
  },
  {
    id: "jison",
    name: "Jison",
    import: () => import("./jison-BygvlveW.js")
  },
  {
    id: "json",
    name: "JSON",
    import: () => import("./json-Cz3rcMTA.js")
  },
  {
    id: "json5",
    name: "JSON5",
    import: () => import("./json5-uIDDV5qu.js")
  },
  {
    id: "jsonc",
    name: "JSON with Comments",
    import: () => import("./jsonc-i-WRxL89.js")
  },
  {
    id: "jsonl",
    name: "JSON Lines",
    import: () => import("./jsonl-B0wQGTiP.js")
  },
  {
    id: "jsonnet",
    name: "Jsonnet",
    import: () => import("./jsonnet-DEQ7IUoJ.js")
  },
  {
    id: "jssm",
    name: "JSSM",
    aliases: [
      "fsl"
    ],
    import: () => import("./jssm-IG12tW_e.js")
  },
  {
    id: "jsx",
    name: "JSX",
    import: () => import("./jsx-Bkesy5tT.js")
  },
  {
    id: "julia",
    name: "Julia",
    aliases: [
      "jl"
    ],
    import: () => import("./julia-CRcgK_Of.js")
  },
  {
    id: "kotlin",
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    import: () => import("./kotlin-DCgZY7Ii.js")
  },
  {
    id: "kusto",
    name: "Kusto",
    aliases: [
      "kql"
    ],
    import: () => import("./kusto-BrNSo3rV.js")
  },
  {
    id: "latex",
    name: "LaTeX",
    import: () => import("./latex-D-TusJJP.js")
  },
  {
    id: "lean",
    name: "Lean 4",
    aliases: [
      "lean4"
    ],
    import: () => import("./lean-CYSet4vs.js")
  },
  {
    id: "less",
    name: "Less",
    import: () => import("./less-BPRpblJr.js")
  },
  {
    id: "liquid",
    name: "Liquid",
    import: () => import("./liquid-B7RQOxbw.js")
  },
  {
    id: "log",
    name: "Log file",
    import: () => import("./log-D2eRfqDn.js")
  },
  {
    id: "logo",
    name: "Logo",
    import: () => import("./logo-QEAtGWZ9.js")
  },
  {
    id: "lua",
    name: "Lua",
    import: () => import("./lua-BVfhNLDr.js")
  },
  {
    id: "luau",
    name: "Luau",
    import: () => import("./luau-BjYGiqID.js")
  },
  {
    id: "make",
    name: "Makefile",
    aliases: [
      "makefile"
    ],
    import: () => import("./make-BjuHP00g.js")
  },
  {
    id: "markdown",
    name: "Markdown",
    aliases: [
      "md"
    ],
    import: () => import("./markdown-B7jjCkMW.js")
  },
  {
    id: "marko",
    name: "Marko",
    import: () => import("./marko-vyeifSx8.js")
  },
  {
    id: "matlab",
    name: "MATLAB",
    import: () => import("./matlab-Co0cm4Uj.js")
  },
  {
    id: "mdc",
    name: "MDC",
    import: () => import("./mdc-AwGfuot8.js")
  },
  {
    id: "mdx",
    name: "MDX",
    import: () => import("./mdx-DIoECIFU.js")
  },
  {
    id: "mermaid",
    name: "Mermaid",
    aliases: [
      "mmd"
    ],
    import: () => import("./mermaid-B8Znk7YO.js")
  },
  {
    id: "mipsasm",
    name: "MIPS Assembly",
    aliases: [
      "mips"
    ],
    import: () => import("./mipsasm-Dn465ziZ.js")
  },
  {
    id: "mojo",
    name: "Mojo",
    import: () => import("./mojo-DPiIJnW3.js")
  },
  {
    id: "move",
    name: "Move",
    import: () => import("./move-D0U3hAMk.js")
  },
  {
    id: "narrat",
    name: "Narrat Language",
    aliases: [
      "nar"
    ],
    import: () => import("./narrat-Dz4d7OmN.js")
  },
  {
    id: "nextflow",
    name: "Nextflow",
    aliases: [
      "nf"
    ],
    import: () => import("./nextflow-DW0Yq9a2.js")
  },
  {
    id: "nginx",
    name: "Nginx",
    import: () => import("./nginx-Can2eAjw.js")
  },
  {
    id: "nim",
    name: "Nim",
    import: () => import("./nim-B1j3Kg94.js")
  },
  {
    id: "nix",
    name: "Nix",
    import: () => import("./nix-DUbL-Ieg.js")
  },
  {
    id: "nushell",
    name: "nushell",
    aliases: [
      "nu"
    ],
    import: () => import("./nushell-DX7mjnU-.js")
  },
  {
    id: "objective-c",
    name: "Objective-C",
    aliases: [
      "objc"
    ],
    import: () => import("./objective-c-BVVh5_wH.js")
  },
  {
    id: "objective-cpp",
    name: "Objective-C++",
    import: () => import("./objective-cpp-B7rOm0GT.js")
  },
  {
    id: "ocaml",
    name: "OCaml",
    import: () => import("./ocaml-BZLsfx_o.js")
  },
  {
    id: "pascal",
    name: "Pascal",
    import: () => import("./pascal-l2bqd7Dz.js")
  },
  {
    id: "perl",
    name: "Perl",
    import: () => import("./perl-B6oy4kD0.js")
  },
  {
    id: "php",
    name: "PHP",
    import: () => import("./php-DGP0mMYG.js")
  },
  {
    id: "plsql",
    name: "PL/SQL",
    import: () => import("./plsql-oVq_K_wH.js")
  },
  {
    id: "po",
    name: "Gettext PO",
    aliases: [
      "pot",
      "potx"
    ],
    import: () => import("./po-C82DhkWG.js")
  },
  {
    id: "polar",
    name: "Polar",
    import: () => import("./polar-Ld-I0zJ7.js")
  },
  {
    id: "postcss",
    name: "PostCSS",
    import: () => import("./postcss-BZ3MNRIJ.js")
  },
  {
    id: "powerquery",
    name: "PowerQuery",
    import: () => import("./powerquery-CgRa2XRw.js")
  },
  {
    id: "powershell",
    name: "PowerShell",
    aliases: [
      "ps",
      "ps1"
    ],
    import: () => import("./powershell-CJR6U-QA.js")
  },
  {
    id: "prisma",
    name: "Prisma",
    import: () => import("./prisma-COL_v1x4.js")
  },
  {
    id: "prolog",
    name: "Prolog",
    import: () => import("./prolog-CuvJOxqT.js")
  },
  {
    id: "proto",
    name: "Protocol Buffer 3",
    aliases: [
      "protobuf"
    ],
    import: () => import("./proto-o9HLmF90.js")
  },
  {
    id: "pug",
    name: "Pug",
    aliases: [
      "jade"
    ],
    import: () => import("./pug-CBXnJ8g8.js")
  },
  {
    id: "puppet",
    name: "Puppet",
    import: () => import("./puppet-BYzxAd8_.js")
  },
  {
    id: "purescript",
    name: "PureScript",
    import: () => import("./purescript-B_1NgE2N.js")
  },
  {
    id: "python",
    name: "Python",
    aliases: [
      "py"
    ],
    import: () => import("./python-DsQISJFZ.js")
  },
  {
    id: "qml",
    name: "QML",
    import: () => import("./qml-FlMIyjU9.js")
  },
  {
    id: "qmldir",
    name: "QML Directory",
    import: () => import("./qmldir-BInDYbpo.js")
  },
  {
    id: "qss",
    name: "Qt Style Sheets",
    import: () => import("./qss-D-h4NdUG.js")
  },
  {
    id: "r",
    name: "R",
    import: () => import("./r-F-9I-ITZ.js")
  },
  {
    id: "racket",
    name: "Racket",
    import: () => import("./racket-BoD1TBFT.js")
  },
  {
    id: "raku",
    name: "Raku",
    aliases: [
      "perl6"
    ],
    import: () => import("./raku-IaYcw19m.js")
  },
  {
    id: "razor",
    name: "ASP.NET Razor",
    import: () => import("./razor-Bje1i-BN.js")
  },
  {
    id: "reg",
    name: "Windows Registry Script",
    import: () => import("./reg-CMUdAgIP.js")
  },
  {
    id: "regexp",
    name: "RegExp",
    aliases: [
      "regex"
    ],
    import: () => import("./regexp-CXbjUNFD.js")
  },
  {
    id: "rel",
    name: "Rel",
    import: () => import("./rel-BaRn3QX7.js")
  },
  {
    id: "riscv",
    name: "RISC-V",
    import: () => import("./riscv-D275NyXt.js")
  },
  {
    id: "rst",
    name: "reStructuredText",
    import: () => import("./rst-B-Yhj7ct.js")
  },
  {
    id: "ruby",
    name: "Ruby",
    aliases: [
      "rb"
    ],
    import: () => import("./ruby-DTuHl1fB.js")
  },
  {
    id: "rust",
    name: "Rust",
    aliases: [
      "rs"
    ],
    import: () => import("./rust-Cii5SJWu.js")
  },
  {
    id: "sas",
    name: "SAS",
    import: () => import("./sas-E6uq4Yf6.js")
  },
  {
    id: "sass",
    name: "Sass",
    import: () => import("./sass-eCUyDs9S.js")
  },
  {
    id: "scala",
    name: "Scala",
    import: () => import("./scala-BoCxXFyN.js")
  },
  {
    id: "scheme",
    name: "Scheme",
    import: () => import("./scheme-CJeyKjnR.js")
  },
  {
    id: "scss",
    name: "SCSS",
    import: () => import("./scss-DhHc4lxB.js")
  },
  {
    id: "sdbl",
    name: "1C (Query)",
    aliases: [
      "1c-query"
    ],
    import: () => import("./sdbl-bnfMePEG.js")
  },
  {
    id: "shaderlab",
    name: "ShaderLab",
    aliases: [
      "shader"
    ],
    import: () => import("./shaderlab-CvqEIoL0.js")
  },
  {
    id: "shellscript",
    name: "Shell",
    aliases: [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    import: () => import("./shellscript-DXPd9Pjm.js")
  },
  {
    id: "shellsession",
    name: "Shell Session",
    aliases: [
      "console"
    ],
    import: () => import("./shellsession-BM4Gi9UW.js")
  },
  {
    id: "smalltalk",
    name: "Smalltalk",
    import: () => import("./smalltalk-C-SeEPAs.js")
  },
  {
    id: "solidity",
    name: "Solidity",
    import: () => import("./solidity-BG_k8fA_.js")
  },
  {
    id: "soy",
    name: "Closure Templates",
    aliases: [
      "closure-templates"
    ],
    import: () => import("./soy-yvpdUHGC.js")
  },
  {
    id: "sparql",
    name: "SPARQL",
    import: () => import("./sparql-DhuelBut.js")
  },
  {
    id: "splunk",
    name: "Splunk Query Language",
    aliases: [
      "spl"
    ],
    import: () => import("./splunk-5AdRU-op.js")
  },
  {
    id: "sql",
    name: "SQL",
    import: () => import("./sql-CE1s-LNJ.js")
  },
  {
    id: "ssh-config",
    name: "SSH Config",
    import: () => import("./ssh-config-DHHGll-v.js")
  },
  {
    id: "stata",
    name: "Stata",
    import: () => import("./stata-XG8GBm9b.js")
  },
  {
    id: "stylus",
    name: "Stylus",
    aliases: [
      "styl"
    ],
    import: () => import("./stylus-Bx_GeJsi.js")
  },
  {
    id: "svelte",
    name: "Svelte",
    import: () => import("./svelte-01qw6Rxm.js")
  },
  {
    id: "swift",
    name: "Swift",
    import: () => import("./swift-BAWqNR8A.js")
  },
  {
    id: "system-verilog",
    name: "SystemVerilog",
    import: () => import("./system-verilog-Cui-g-ut.js")
  },
  {
    id: "systemd",
    name: "Systemd Units",
    import: () => import("./systemd-CsKYQIQK.js")
  },
  {
    id: "talonscript",
    name: "TalonScript",
    aliases: [
      "talon"
    ],
    import: () => import("./talonscript-DA87K79x.js")
  },
  {
    id: "tasl",
    name: "Tasl",
    import: () => import("./tasl-D3W8HMV6.js")
  },
  {
    id: "tcl",
    name: "Tcl",
    import: () => import("./tcl-DBFP4l7q.js")
  },
  {
    id: "templ",
    name: "Templ",
    import: () => import("./templ-CkuR9rNI.js")
  },
  {
    id: "terraform",
    name: "Terraform",
    aliases: [
      "tf",
      "tfvars"
    ],
    import: () => import("./terraform-CBat0YKl.js")
  },
  {
    id: "tex",
    name: "TeX",
    import: () => import("./tex-mHs7a43s.js")
  },
  {
    id: "toml",
    name: "TOML",
    import: () => import("./toml-4juXvPlK.js")
  },
  {
    id: "ts-tags",
    name: "TypeScript with Tags",
    aliases: [
      "lit"
    ],
    import: () => import("./ts-tags-DA8sBOJH.js")
  },
  {
    id: "tsv",
    name: "TSV",
    import: () => import("./tsv-BtvSkaG0.js")
  },
  {
    id: "tsx",
    name: "TSX",
    import: () => import("./tsx-DiGsgWT8.js")
  },
  {
    id: "turtle",
    name: "Turtle",
    import: () => import("./turtle-BJ2wmjPc.js")
  },
  {
    id: "twig",
    name: "Twig",
    import: () => import("./twig-5rMZH5nB.js")
  },
  {
    id: "typescript",
    name: "TypeScript",
    aliases: [
      "ts"
    ],
    import: () => import("./typescript-buWNZFwO.js")
  },
  {
    id: "typespec",
    name: "TypeSpec",
    aliases: [
      "tsp"
    ],
    import: () => import("./typespec-bLbdsxJL.js")
  },
  {
    id: "typst",
    name: "Typst",
    aliases: [
      "typ"
    ],
    import: () => import("./typst-YfWVUfOB.js")
  },
  {
    id: "v",
    name: "V",
    import: () => import("./v-wa8Orrdd.js")
  },
  {
    id: "vala",
    name: "Vala",
    import: () => import("./vala-DRdriFr_.js")
  },
  {
    id: "vb",
    name: "Visual Basic",
    aliases: [
      "cmd"
    ],
    import: () => import("./vb-E2_-jk4M.js")
  },
  {
    id: "verilog",
    name: "Verilog",
    import: () => import("./verilog-B1iBoR5_.js")
  },
  {
    id: "vhdl",
    name: "VHDL",
    import: () => import("./vhdl-CRVaAhXk.js")
  },
  {
    id: "viml",
    name: "Vim Script",
    aliases: [
      "vim",
      "vimscript"
    ],
    import: () => import("./viml-B-zWOd7Z.js")
  },
  {
    id: "vue",
    name: "Vue",
    import: () => import("./vue-V5-KOnq6.js")
  },
  {
    id: "vue-html",
    name: "Vue HTML",
    import: () => import("./vue-html-B8gQHLrf.js")
  },
  {
    id: "vyper",
    name: "Vyper",
    aliases: [
      "vy"
    ],
    import: () => import("./vyper-7y1ADzZr.js")
  },
  {
    id: "wasm",
    name: "WebAssembly",
    import: () => import("./wasm-BWqHbxc2.js")
  },
  {
    id: "wenyan",
    name: "Wenyan",
    aliases: [
      "文言"
    ],
    import: () => import("./wenyan-BMYnfus1.js")
  },
  {
    id: "wgsl",
    name: "WGSL",
    import: () => import("./wgsl-Cg1wrNXn.js")
  },
  {
    id: "wikitext",
    name: "Wikitext",
    aliases: [
      "mediawiki",
      "wiki"
    ],
    import: () => import("./wikitext-CntM04PE.js")
  },
  {
    id: "wolfram",
    name: "Wolfram",
    aliases: [
      "wl"
    ],
    import: () => import("./wolfram-Ws5qPlX9.js")
  },
  {
    id: "xml",
    name: "XML",
    import: () => import("./xml-ChBsf5uy.js")
  },
  {
    id: "xsl",
    name: "XSL",
    import: () => import("./xsl-BefjlXrd.js")
  },
  {
    id: "yaml",
    name: "YAML",
    aliases: [
      "yml"
    ],
    import: () => import("./yaml-Bbg74JKr.js")
  },
  {
    id: "zenscript",
    name: "ZenScript",
    import: () => import("./zenscript-C7IWVCmN.js")
  },
  {
    id: "zig",
    name: "Zig",
    import: () => import("./zig-ppDBI4fs.js")
  }
], Bs = Object.fromEntries(Mr.map((e) => [e.id, e.import])), Us = Object.fromEntries(Mr.flatMap((e) => {
  var t;
  return ((t = e.aliases) == null ? void 0 : t.map((n) => [n, e.import])) || [];
})), Gs = {
  ...Bs,
  ...Us
}, js = [
  {
    id: "andromeeda",
    displayName: "Andromeeda",
    type: "dark",
    import: () => import("./andromeeda-uXNdzNpk.js")
  },
  {
    id: "aurora-x",
    displayName: "Aurora X",
    type: "dark",
    import: () => import("./aurora-x-BwoVEUWZ.js")
  },
  {
    id: "ayu-dark",
    displayName: "Ayu Dark",
    type: "dark",
    import: () => import("./ayu-dark-CxPZkpb2.js")
  },
  {
    id: "catppuccin-frappe",
    displayName: "Catppuccin Frappé",
    type: "dark",
    import: () => import("./catppuccin-frappe-BrTOiad2.js")
  },
  {
    id: "catppuccin-latte",
    displayName: "Catppuccin Latte",
    type: "light",
    import: () => import("./catppuccin-latte-D-dc_R4m.js")
  },
  {
    id: "catppuccin-macchiato",
    displayName: "Catppuccin Macchiato",
    type: "dark",
    import: () => import("./catppuccin-macchiato-DN4jOp0G.js")
  },
  {
    id: "catppuccin-mocha",
    displayName: "Catppuccin Mocha",
    type: "dark",
    import: () => import("./catppuccin-mocha-B8yCE3-3.js")
  },
  {
    id: "dark-plus",
    displayName: "Dark Plus",
    type: "dark",
    import: () => import("./dark-plus-pUHDTVV0.js")
  },
  {
    id: "dracula",
    displayName: "Dracula Theme",
    type: "dark",
    import: () => import("./dracula-BtZx2Kac.js")
  },
  {
    id: "dracula-soft",
    displayName: "Dracula Theme Soft",
    type: "dark",
    import: () => import("./dracula-soft-BKa-aqBv.js")
  },
  {
    id: "everforest-dark",
    displayName: "Everforest Dark",
    type: "dark",
    import: () => import("./everforest-dark-DMCBqXCK.js")
  },
  {
    id: "everforest-light",
    displayName: "Everforest Light",
    type: "light",
    import: () => import("./everforest-light-BbXl82Em.js")
  },
  {
    id: "github-dark",
    displayName: "GitHub Dark",
    type: "dark",
    import: () => import("./github-dark-DenFmJkN.js")
  },
  {
    id: "github-dark-default",
    displayName: "GitHub Dark Default",
    type: "dark",
    import: () => import("./github-dark-default-BJPUVz4H.js")
  },
  {
    id: "github-dark-dimmed",
    displayName: "GitHub Dark Dimmed",
    type: "dark",
    import: () => import("./github-dark-dimmed-DUshB20C.js")
  },
  {
    id: "github-dark-high-contrast",
    displayName: "GitHub Dark High Contrast",
    type: "dark",
    import: () => import("./github-dark-high-contrast-D3aGCnF8.js")
  },
  {
    id: "github-light",
    displayName: "GitHub Light",
    type: "light",
    import: () => import("./github-light-JYsPkUQd.js")
  },
  {
    id: "github-light-default",
    displayName: "GitHub Light Default",
    type: "light",
    import: () => import("./github-light-default-D99KPAby.js")
  },
  {
    id: "github-light-high-contrast",
    displayName: "GitHub Light High Contrast",
    type: "light",
    import: () => import("./github-light-high-contrast-BbmZE-Mp.js")
  },
  {
    id: "houston",
    displayName: "Houston",
    type: "dark",
    import: () => import("./houston-BDYrDoDW.js")
  },
  {
    id: "kanagawa-dragon",
    displayName: "Kanagawa Dragon",
    type: "dark",
    import: () => import("./kanagawa-dragon-CiKur4Hl.js")
  },
  {
    id: "kanagawa-lotus",
    displayName: "Kanagawa Lotus",
    type: "light",
    import: () => import("./kanagawa-lotus-BKu-smKu.js")
  },
  {
    id: "kanagawa-wave",
    displayName: "Kanagawa Wave",
    type: "dark",
    import: () => import("./kanagawa-wave-CQwozSzG.js")
  },
  {
    id: "laserwave",
    displayName: "LaserWave",
    type: "dark",
    import: () => import("./laserwave-6a00oqik.js")
  },
  {
    id: "light-plus",
    displayName: "Light Plus",
    type: "light",
    import: () => import("./light-plus-CZuVqSLX.js")
  },
  {
    id: "material-theme",
    displayName: "Material Theme",
    type: "dark",
    import: () => import("./material-theme-D6KBX41T.js")
  },
  {
    id: "material-theme-darker",
    displayName: "Material Theme Darker",
    type: "dark",
    import: () => import("./material-theme-darker-CkRroheE.js")
  },
  {
    id: "material-theme-lighter",
    displayName: "Material Theme Lighter",
    type: "light",
    import: () => import("./material-theme-lighter-BUBw43Yz.js")
  },
  {
    id: "material-theme-ocean",
    displayName: "Material Theme Ocean",
    type: "dark",
    import: () => import("./material-theme-ocean-ClGX14Ja.js")
  },
  {
    id: "material-theme-palenight",
    displayName: "Material Theme Palenight",
    type: "dark",
    import: () => import("./material-theme-palenight-C1RVm8K1.js")
  },
  {
    id: "min-dark",
    displayName: "Min Dark",
    type: "dark",
    import: () => import("./min-dark-C7ak0t6c.js")
  },
  {
    id: "min-light",
    displayName: "Min Light",
    type: "light",
    import: () => import("./min-light-CKFxVcPp.js")
  },
  {
    id: "monokai",
    displayName: "Monokai",
    type: "dark",
    import: () => import("./monokai-C1KBYcO0.js")
  },
  {
    id: "night-owl",
    displayName: "Night Owl",
    type: "dark",
    import: () => import("./night-owl-Bm2rzalh.js")
  },
  {
    id: "nord",
    displayName: "Nord",
    type: "dark",
    import: () => import("./nord-CC5OiUXg.js")
  },
  {
    id: "one-dark-pro",
    displayName: "One Dark Pro",
    type: "dark",
    import: () => import("./one-dark-pro-DTA3VF0_.js")
  },
  {
    id: "one-light",
    displayName: "One Light",
    type: "light",
    import: () => import("./one-light-D9sNaUtq.js")
  },
  {
    id: "plastic",
    displayName: "Plastic",
    type: "dark",
    import: () => import("./plastic-CSTz3KZp.js")
  },
  {
    id: "poimandres",
    displayName: "Poimandres",
    type: "dark",
    import: () => import("./poimandres-C-VADXHD.js")
  },
  {
    id: "red",
    displayName: "Red",
    type: "dark",
    import: () => import("./red-7y8PH7HH.js")
  },
  {
    id: "rose-pine",
    displayName: "Rosé Pine",
    type: "dark",
    import: () => import("./rose-pine-DhT-HZE9.js")
  },
  {
    id: "rose-pine-dawn",
    displayName: "Rosé Pine Dawn",
    type: "light",
    import: () => import("./rose-pine-dawn-DiCjL2i4.js")
  },
  {
    id: "rose-pine-moon",
    displayName: "Rosé Pine Moon",
    type: "dark",
    import: () => import("./rose-pine-moon-BNmGHlcn.js")
  },
  {
    id: "slack-dark",
    displayName: "Slack Dark",
    type: "dark",
    import: () => import("./slack-dark-i7wN4OET.js")
  },
  {
    id: "slack-ochin",
    displayName: "Slack Ochin",
    type: "light",
    import: () => import("./slack-ochin-ndHf0LoP.js")
  },
  {
    id: "snazzy-light",
    displayName: "Snazzy Light",
    type: "light",
    import: () => import("./snazzy-light-BlSJXAu4.js")
  },
  {
    id: "solarized-dark",
    displayName: "Solarized Dark",
    type: "dark",
    import: () => import("./solarized-dark-UTmkh7lw.js")
  },
  {
    id: "solarized-light",
    displayName: "Solarized Light",
    type: "light",
    import: () => import("./solarized-light-BheCkDPT.js")
  },
  {
    id: "synthwave-84",
    displayName: "Synthwave '84",
    type: "dark",
    import: () => import("./synthwave-84-NU3C_KFZ.js")
  },
  {
    id: "tokyo-night",
    displayName: "Tokyo Night",
    type: "dark",
    import: () => import("./tokyo-night-DP4TmcQl.js")
  },
  {
    id: "vesper",
    displayName: "Vesper",
    type: "dark",
    import: () => import("./vesper-CJsaOsSM.js")
  },
  {
    id: "vitesse-black",
    displayName: "Vitesse Black",
    type: "dark",
    import: () => import("./vitesse-black-BoGvW84i.js")
  },
  {
    id: "vitesse-dark",
    displayName: "Vitesse Dark",
    type: "dark",
    import: () => import("./vitesse-dark-Cym-eLtO.js")
  },
  {
    id: "vitesse-light",
    displayName: "Vitesse Light",
    type: "light",
    import: () => import("./vitesse-light-CcmG315c.js")
  }
], Hs = Object.fromEntries(js.map((e) => [e.id, e.import])), tl = async (e) => (J('`getWasmInlined` is deprecated. Use `import("shiki/wasm")` instead.'), import("./wasm-DQxwEHae.js").then((t) => t.default(e))), Ir = /* @__PURE__ */ Rs({
  langs: Gs,
  themes: Hs,
  engine: () => et(import("./wasm-DQxwEHae.js"))
}), {
  codeToHtml: nl,
  codeToHast: rl,
  codeToTokens: al,
  codeToTokensBase: il,
  codeToTokensWithThemes: ol,
  getSingletonHighlighter: sl,
  getLastGrammarState: ll
} = /* @__PURE__ */ Fs(
  Ir,
  { guessEmbeddedLanguages: ls }
), cl = (e) => (J("`getHighlighter` is deprecated. Use `createHighlighter` or `getSingletonHighlighter` instead."), Ir(e));
export {
  le as FontStyle,
  D as ShikiError,
  Qt as StackElementMetadata,
  Sr as addClassToHast,
  ge as applyColorReplacements,
  Gs as bundledLanguages,
  Us as bundledLanguagesAlias,
  Bs as bundledLanguagesBase,
  Mr as bundledLanguagesInfo,
  Hs as bundledThemes,
  js as bundledThemesInfo,
  rl as codeToHast,
  nl as codeToHtml,
  al as codeToTokens,
  il as codeToTokensBase,
  ol as codeToTokensWithThemes,
  el as createCssVariablesTheme,
  Ir as createHighlighter,
  qt as createHighlighterCore,
  Qs as createHighlighterCoreSync,
  Xs as createJavaScriptRegexEngine,
  et as createOnigurumaEngine,
  ss as createPositionConverter,
  Or as createShikiInternal,
  Nr as createShikiInternalSync,
  Fs as createSingletonShorthands,
  Ks as createWasmOnigEngine,
  Rs as createdBundledHighlighter,
  as as defaultJavaScriptRegexConstructor,
  fl as enableDeprecationWarnings,
  ps as flatTokenVariants,
  cl as getHighlighter,
  Ys as getHighlighterCore,
  ll as getLastGrammarState,
  Js as getShikiInternal,
  sl as getSingletonHighlighter,
  Zs as getSingletonHighlighterCore,
  vr as getTokenStyleObject,
  tl as getWasmInlined,
  ls as guessEmbeddedLanguages,
  yi as hastToHtml,
  Wt as isNoneTheme,
  Ht as isPlainLang,
  kr as isSpecialLang,
  wr as isSpecialTheme,
  Yr as loadWasm,
  Ds as makeSingletonHighlighter,
  $s as makeSingletonHighlighterCore,
  br as normalizeGetter,
  Vt as normalizeTheme,
  Je as resolveColorReplacements,
  at as splitLines,
  cs as splitToken,
  us as splitTokens,
  fs as stringifyTokenStyle,
  os as toArray,
  Ss as tokenizeAnsiWithTheme,
  xs as tokenizeWithTheme,
  Ns as tokensToHast,
  ds as transformerDecorations,
  J as warnDeprecated
};
