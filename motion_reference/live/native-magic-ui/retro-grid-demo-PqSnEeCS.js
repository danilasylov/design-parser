import { r as f, j as d, c as Q } from "./inline-Mcm4wFdg.js";
const re = 15, _e = 3, Le = 0.5, ge = 0.9, Se = 0.92, ze = -0.5, Pe = 6, Ee = -2, Z = 89, Re = 2, ee = 1, ae = 200, le = "retro-grid-fallback-scroll", Ae = `
@keyframes ${le} {
  from {
    transform: translateY(-50%);
  }

  to {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-retro-grid-scroll="true"] {
    animation: none !important;
    transform: translateY(-50%) !important;
  }
}
`, Ce = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`, we = `
#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2 u_container_size;
uniform vec2 u_viewport_size;
uniform vec4 u_line_color;
uniform float u_angle;
uniform float u_cell_size;
uniform float u_device_pixel_ratio;
uniform float u_time;

const float animationDurationSeconds = ${re.toFixed(1)};
const float gridHeightRatio = ${_e.toFixed(1)};
const float gridStartOffsetRatio = ${ze.toFixed(1)};
const float gridWidthRatio = ${Pe.toFixed(1)};
const float gridXOffsetRatio = ${Ee.toFixed(1)};
const float gridLineAlignmentOffsetPx = ${Le.toFixed(1)};
const float gridLineAntialiasMultiplier = ${ge.toFixed(1)};
const float horizontalLodLevelOneEndPx = 5.6;
const float horizontalLodLevelOneStartPx = 2.8;
const float horizontalLodLevelTwoEndPx = 3.0;
const float horizontalLodLevelTwoStartPx = 1.4;
const float horizontalCompressionEndPx = 2.8;
const float horizontalCompressionStartPx = 1.2;
const float lineWidthPx = ${Se.toFixed(2)};
const float perspectivePx = ${ae.toFixed(1)};
const float gridTravelRatio = 0.5;
const float verticalCompressionEndPx = 2.6;
const float verticalCompressionStartPx = 1.0;
const float verticalEdgeCompressionEnd = 0.95;
const float verticalEdgeCompressionStart = 0.45;
const float verticalLodLevelEnd = 0.64;
const float verticalLodLevelStart = 0.22;
const float verticalTopCompressionEndCells = 6.0;
const float verticalTopCompressionStartCells = 2.0;

float renderGridLine(
  float wrappedCoord,
  float antiAliasWidth,
  float softnessBoost
) {
  return 1.0 - smoothstep(
    lineWidthPx,
    lineWidthPx + (antiAliasWidth * (1.5 + softnessBoost)),
    wrappedCoord
  );
}

void main() {
  float angle = radians(clamp(u_angle, 1.0, 89.0));
  float sinAngle = sin(angle);
  float cosAngle = cos(angle);
  vec2 screen = vec2(
    (gl_FragCoord.x / u_device_pixel_ratio) - (u_container_size.x * 0.5),
    (u_container_size.y * 0.5) - (gl_FragCoord.y / u_device_pixel_ratio)
  );

  vec3 rayOrigin = vec3(0.0, 0.0, perspectivePx);
  vec3 rayDirection = normalize(vec3(screen, -perspectivePx));
  vec3 planeXAxis = vec3(1.0, 0.0, 0.0);
  vec3 planeYAxis = vec3(0.0, cosAngle, sinAngle);
  vec3 planeNormal = normalize(cross(planeXAxis, planeYAxis));
  float denominator = dot(rayDirection, planeNormal);

  if (abs(denominator) < 0.0001) {
    discard;
  }

  float distanceToPlane = dot(-rayOrigin, planeNormal) / denominator;

  if (distanceToPlane <= 0.0) {
    discard;
  }

  vec3 hitPoint = rayOrigin + (rayDirection * distanceToPlane);
  float localX = hitPoint.x;
  float localY = dot(hitPoint, planeYAxis);
  float gridWidth = u_viewport_size.x * gridWidthRatio;
  float gridHeight = u_viewport_size.y * gridHeightRatio;
  float gridScrollSpeed = (gridHeight * gridTravelRatio) / animationDurationSeconds;
  float patternOffsetY = u_time * gridScrollSpeed;
  float gridLeft = (-0.5 * u_container_size.x) + (gridXOffsetRatio * u_container_size.x);
  float gridTop = (-0.5 * u_container_size.y) + (gridStartOffsetRatio * gridHeight);
  vec2 planePosition = vec2(localX - gridLeft, localY - gridTop);

  if (
    planePosition.x < 0.0 ||
    planePosition.y < 0.0 ||
    planePosition.x > gridWidth ||
    planePosition.y > gridHeight
  ) {
    discard;
  }

  vec2 patternPosition = vec2(planePosition.x, planePosition.y - patternOffsetY);
  vec2 wrapped = mod(
    patternPosition + vec2(gridLineAlignmentOffsetPx),
    u_cell_size
  );
  vec2 patternDerivative = max(fwidth(patternPosition), vec2(0.0001));
  vec2 antiAliasWidth = patternDerivative * gridLineAntialiasMultiplier;
  float horizontalCellSpanPx = u_cell_size / patternDerivative.y;
  float horizontalCompression = 1.0 - smoothstep(
    horizontalCompressionStartPx,
    horizontalCompressionEndPx,
    horizontalCellSpanPx
  );
  float verticalCellSpanPx = u_cell_size / patternDerivative.x;
  float sideDistance = abs((planePosition.x / gridWidth) * 2.0 - 1.0);
  float verticalEdgeCompression = smoothstep(
    verticalEdgeCompressionStart,
    verticalEdgeCompressionEnd,
    sideDistance
  );
  float verticalTopCompression = 1.0 - smoothstep(
    u_cell_size * verticalTopCompressionStartCells,
    u_cell_size * verticalTopCompressionEndCells,
    planePosition.y
  );
  float verticalCompression =
    (1.0 - smoothstep(
      verticalCompressionStartPx,
      verticalCompressionEndPx,
      verticalCellSpanPx
    )) * verticalEdgeCompression * verticalTopCompression;
  float horizontalSoftnessBoost = 1.0 + (horizontalCompression * 3.0);
  float verticalSoftnessBoost = 1.0 + (verticalCompression * 3.5);
  float verticalLod = smoothstep(
    verticalLodLevelStart,
    verticalLodLevelEnd,
    verticalCompression
  );
  float verticalLineFine = renderGridLine(
    wrapped.x,
    antiAliasWidth.x,
    verticalSoftnessBoost
  );
  float verticalWrappedLod = mod(
    patternPosition.x + gridLineAlignmentOffsetPx,
    u_cell_size * 2.0
  );
  float verticalLineCoarse = renderGridLine(
    verticalWrappedLod,
    antiAliasWidth.x,
    verticalSoftnessBoost + verticalLod
  );
  float verticalLine = max(
    verticalLineFine * (1.0 - verticalLod),
    verticalLineCoarse * verticalLod
  );
  float horizontalLodLevelOne = 1.0 - smoothstep(
    horizontalLodLevelOneStartPx,
    horizontalLodLevelOneEndPx,
    horizontalCellSpanPx
  );
  float horizontalLodLevelTwo = 1.0 - smoothstep(
    horizontalLodLevelTwoStartPx,
    horizontalLodLevelTwoEndPx,
    horizontalCellSpanPx
  );
  float horizontalLineFine = renderGridLine(
    wrapped.y,
    antiAliasWidth.y,
    horizontalSoftnessBoost
  );
  float horizontalWrappedLodOne = mod(
    patternPosition.y + gridLineAlignmentOffsetPx,
    u_cell_size * 2.0
  );
  float horizontalWrappedLodTwo = mod(
    patternPosition.y + gridLineAlignmentOffsetPx,
    u_cell_size * 4.0
  );
  float horizontalLineCoarse = renderGridLine(
    horizontalWrappedLodOne,
    antiAliasWidth.y,
    horizontalSoftnessBoost + horizontalLodLevelOne
  );
  float horizontalLineExtraCoarse = renderGridLine(
    horizontalWrappedLodTwo,
    antiAliasWidth.y,
    horizontalSoftnessBoost + horizontalLodLevelOne + horizontalLodLevelTwo
  );
  float horizontalLineReduced = max(
    horizontalLineFine * (1.0 - horizontalLodLevelOne),
    horizontalLineCoarse * horizontalLodLevelOne
  );
  float horizontalLine = max(
    horizontalLineReduced * (1.0 - horizontalLodLevelTwo),
    horizontalLineExtraCoarse * horizontalLodLevelTwo
  );
  float line = max(verticalLine, horizontalLine);

  if (line <= 0.001) {
    discard;
  }

  float alpha = u_line_color.a * line;
  gl_FragColor = vec4(u_line_color.rgb * alpha, alpha);
}
`;
let y;
function te(e, o, i) {
  return Math.min(Math.max(e, o), i);
}
function oe(e, o, i) {
  const r = e.createShader(o);
  return r ? (e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (e.deleteShader(r), null)) : null;
}
function be(e) {
  const o = oe(e, e.VERTEX_SHADER, Ce), i = oe(
    e,
    e.FRAGMENT_SHADER,
    we
  );
  if (!o || !i)
    return null;
  const r = e.createProgram();
  return r ? (e.attachShader(r, o), e.attachShader(r, i), e.linkProgram(r), e.deleteShader(o), e.deleteShader(i), e.getProgramParameter(r, e.LINK_STATUS) ? r : (e.deleteProgram(r), null)) : (e.deleteShader(o), e.deleteShader(i), null);
}
function Te(e, o) {
  const i = e.getAttribLocation(o, "a_position"), r = e.getUniformLocation(o, "u_angle"), s = e.getUniformLocation(o, "u_cell_size"), c = e.getUniformLocation(o, "u_container_size"), E = e.getUniformLocation(
    o,
    "u_device_pixel_ratio"
  ), R = e.getUniformLocation(o, "u_line_color"), L = e.getUniformLocation(o, "u_time"), g = e.getUniformLocation(o, "u_viewport_size");
  return i < 0 || !r || !s || !c || !E || !R || !L || !g ? null : {
    attributeLocation: i,
    program: o,
    uniforms: {
      angle: r,
      cellSize: s,
      containerSize: c,
      devicePixelRatio: E,
      lineColor: R,
      time: L,
      viewportSize: g
    }
  };
}
function ye(e) {
  const o = document.documentElement;
  return o.classList.contains("dark") ? !0 : o.classList.contains("light") ? !1 : e.matches;
}
function Oe() {
  if (y !== void 0)
    return y;
  const e = document.createElement("canvas");
  return e.width = 1, e.height = 1, y = e.getContext("2d", {
    willReadFrequently: !0
  }), y;
}
function ne(e, o) {
  const i = document.createElement("span");
  i.style.color = e, i.style.opacity = "0", i.style.pointerEvents = "none", i.style.position = "absolute", o.appendChild(i);
  const r = getComputedStyle(i).color;
  i.remove();
  const s = Oe();
  if (!s)
    return new Float32Array([0.5, 0.5, 0.5, 1]);
  s.clearRect(0, 0, 1, 1), s.fillStyle = r, s.fillRect(0, 0, 1, 1);
  const c = s.getImageData(0, 0, 1, 1).data;
  return new Float32Array([
    c[0] / 255,
    c[1] / 255,
    c[2] / 255,
    c[3] / 255
  ]);
}
function ie(e, o) {
  return {
    animation: `${le} ${re}s linear infinite`,
    backgroundImage: `linear-gradient(to right, ${o} 1px, transparent 0), linear-gradient(to bottom, ${o} 1px, transparent 0)`,
    backgroundRepeat: "repeat",
    backgroundSize: `${e}px ${e}px`,
    transform: "translateY(-50%)"
  };
}
function Fe({
  className: e,
  angle: o = 65,
  cellSize: i = 60,
  opacity: r = 0.5,
  lightLineColor: s = "gray",
  darkLineColor: c = "gray",
  style: E,
  ...R
}) {
  const L = f.useRef(null), g = f.useRef(null), [D, A] = f.useState(!1), N = f.useRef(o), G = f.useRef(i), W = f.useRef(c), O = f.useRef(s), S = f.useRef(null);
  f.useEffect(() => {
    var l;
    N.current = o, G.current = i, W.current = c, O.current = s, (l = S.current) == null || l.call(S);
  }, [o, i, c, s]), f.useEffect(() => {
    const l = L.current, m = g.current;
    if (!l || !m)
      return;
    const z = window.matchMedia("(prefers-reduced-motion: reduce)"), F = window.matchMedia("(prefers-color-scheme: dark)");
    let v = null, p = 0, h = 0, C = 1, n = null, w = !0, P = !1, B = ne(O.current, m), x = null, a = null;
    const ve = () => {
      const t = l.getContext("webgl", {
        alpha: !0,
        antialias: !0,
        premultipliedAlpha: !0
      });
      return !t || !t.getExtension("OES_standard_derivatives") ? null : t;
    }, b = (t) => {
      t && n && (x && n.deleteBuffer(x), a && n.deleteProgram(a.program)), x = null, a = null, t && (n = null);
    }, pe = () => {
      const t = ve();
      if (!t)
        return b(!1), !1;
      n = t, b(!0), n = t;
      const T = be(t);
      if (!T)
        return !1;
      const J = Te(t, T);
      if (!J)
        return t.deleteProgram(T), !1;
      const I = t.createBuffer();
      return I ? (t.bindBuffer(t.ARRAY_BUFFER, I), t.bufferData(
        t.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        t.STATIC_DRAW
      ), x = I, a = J, !0) : (t.deleteProgram(T), !1);
    }, he = () => {
      const t = ye(F) ? W.current : O.current;
      B = ne(t, m);
    }, xe = () => {
      p = Math.floor(m.clientWidth), h = Math.floor(m.clientHeight), !(p === 0 || h === 0 || !n) && (C = Math.min(
        window.devicePixelRatio || 1,
        Re
      ), l.width = Math.floor(p * C), l.height = Math.floor(h * C), l.style.width = `${p}px`, l.style.height = `${h}px`, n.viewport(0, 0, l.width, l.height));
    }, k = (t) => {
      p === 0 || h === 0 || !n || !x || !a || P || (n.useProgram(a.program), n.bindBuffer(n.ARRAY_BUFFER, x), n.enableVertexAttribArray(a.attributeLocation), n.vertexAttribPointer(
        a.attributeLocation,
        2,
        n.FLOAT,
        !1,
        0,
        0
      ), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.uniform1f(
        a.uniforms.angle,
        te(N.current, ee, Z)
      ), n.uniform1f(
        a.uniforms.cellSize,
        Math.max(G.current, 1)
      ), n.uniform2f(
        a.uniforms.containerSize,
        p,
        h
      ), n.uniform1f(
        a.uniforms.devicePixelRatio,
        C
      ), n.uniform4fv(a.uniforms.lineColor, B), n.uniform1f(
        a.uniforms.time,
        z.matches ? 0 : t / 1e3
      ), n.uniform2f(
        a.uniforms.viewportSize,
        window.innerWidth,
        window.innerHeight
      ), n.drawArrays(n.TRIANGLES, 0, 3));
    }, _ = () => {
      v !== null && (cancelAnimationFrame(v), v = null);
    }, $ = (t) => {
      if (k(t), !z.matches && w) {
        v = requestAnimationFrame($);
        return;
      }
      v = null;
    }, u = () => {
      if (P) {
        _(), A(!1);
        return;
      }
      if ((!n || !x || !a) && !pe()) {
        _(), A(!1);
        return;
      }
      if (xe(), p === 0 || h === 0) {
        _();
        return;
      }
      if (he(), k(performance.now()), A(!0), z.matches || !w) {
        _();
        return;
      }
      v === null && (v = requestAnimationFrame($));
    };
    S.current = u;
    const H = new ResizeObserver(() => {
      u();
    });
    H.observe(m);
    const U = () => {
      u();
    }, X = new IntersectionObserver(([t]) => {
      if (w = (t == null ? void 0 : t.isIntersecting) ?? !1, w) {
        u();
        return;
      }
      _();
    });
    X.observe(m);
    const j = new MutationObserver(() => {
      u();
    });
    j.observe(document.documentElement, {
      attributeFilter: ["class"],
      attributes: !0
    });
    const Y = () => {
      u();
    }, V = () => {
      u();
    }, q = (t) => {
      t.preventDefault(), P = !0, _(), b(!1), A(!1);
    }, K = () => {
      P = !1, u();
    };
    return z.addEventListener("change", Y), F.addEventListener("change", V), window.addEventListener("resize", U), l.addEventListener("webglcontextlost", q), l.addEventListener("webglcontextrestored", K), u(), () => {
      _(), H.disconnect(), X.disconnect(), j.disconnect(), z.removeEventListener("change", Y), F.removeEventListener("change", V), window.removeEventListener("resize", U), l.removeEventListener("webglcontextlost", q), l.removeEventListener("webglcontextrestored", K), S.current = null, b(!P);
    };
  }, []);
  const se = {
    ...E,
    opacity: r
  }, ce = te(o, ee, Z), M = Math.max(i, 1), de = {
    perspective: `${ae}px`
  }, fe = {
    transform: `rotateX(${ce}deg)`
  }, ue = ie(
    M,
    s
  ), me = ie(
    M,
    c
  );
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: g,
      className: Q(
        "pointer-events-none absolute size-full overflow-hidden",
        e
      ),
      style: se,
      ...R,
      children: [
        /* @__PURE__ */ d.jsx("style", { children: Ae }),
        D ? null : /* @__PURE__ */ d.jsx("div", { className: "absolute inset-0", style: de, children: /* @__PURE__ */ d.jsxs("div", { className: "absolute inset-0", style: fe, children: [
          /* @__PURE__ */ d.jsx(
            "div",
            {
              "data-retro-grid-scroll": "true",
              className: "absolute inset-[0%_0px] ml-[-200%] h-[300vh] w-[600vw] origin-[100%_0_0] dark:hidden",
              style: ue
            }
          ),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              "data-retro-grid-scroll": "true",
              className: "absolute inset-[0%_0px] ml-[-200%] hidden h-[300vh] w-[600vw] origin-[100%_0_0] dark:block",
              style: me
            }
          )
        ] }) }),
        /* @__PURE__ */ d.jsx(
          "canvas",
          {
            ref: L,
            className: Q(
              "absolute inset-0 size-full",
              D ? "opacity-100" : "opacity-0"
            )
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-white to-transparent to-90% dark:from-black" })
      ]
    }
  );
}
function De() {
  return /* @__PURE__ */ d.jsxs("div", { className: "bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ d.jsx("span", { className: "pointer-events-none z-10 bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent", children: "Retro Grid" }),
    /* @__PURE__ */ d.jsx(Fe, {})
  ] });
}
export {
  De as default
};
