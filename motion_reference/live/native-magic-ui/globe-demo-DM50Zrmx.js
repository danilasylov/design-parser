import { r as b, j as y, c as T } from "./inline-Mcm4wFdg.js";
import { u as ee } from "./use-motion-value-CcTD1FWM.js";
import { u as te } from "./use-spring-C8QKVjC2.js";
var F = ["x", "y", "z"], d = function(e) {
  Object.assign(this, { uniforms: {}, geometry: { vertices: [{ x: 0, y: 0, z: 0 }] }, mode: 0, modifiers: {}, attributes: [], multiplier: 1, buffers: [] }), Object.assign(this, e), this.prepareProgram(), this.prepareUniforms(), this.prepareAttributes();
};
d.prototype.compileShader = function(e, i) {
  var t = this.gl.createShader(e);
  return this.gl.shaderSource(t, i), this.gl.compileShader(t), t;
}, d.prototype.prepareProgram = function() {
  var e = this.gl, i = this.vertex, t = this.fragment, s = e.createProgram();
  e.attachShader(s, this.compileShader(35633, i)), e.attachShader(s, this.compileShader(35632, t)), e.linkProgram(s), e.useProgram(s), this.program = s;
}, d.prototype.prepareUniforms = function() {
  for (var e = Object.keys(this.uniforms), i = 0; i < e.length; i += 1) {
    var t = this.gl.getUniformLocation(this.program, e[i]);
    this.uniforms[e[i]].location = t;
  }
}, d.prototype.prepareAttributes = function() {
  this.geometry.vertices !== void 0 && this.attributes.push({ name: "aPosition", size: 3 }), this.geometry.normal !== void 0 && this.attributes.push({ name: "aNormal", size: 3 }), this.attributeKeys = [];
  for (var e = 0; e < this.attributes.length; e += 1) this.attributeKeys.push(this.attributes[e].name), this.prepareAttribute(this.attributes[e]);
}, d.prototype.prepareAttribute = function(e) {
  for (var i = this.geometry, t = this.multiplier, s = i.vertices, l = i.normal, r = new Float32Array(t * s.length * e.size), o = 0; o < t; o += 1) for (var a = e.data && e.data(o, t), n = o * s.length * e.size, c = 0; c < s.length; c += 1) for (var u = 0; u < e.size; u += 1) {
    var f = this.modifiers[e.name];
    r[n] = f !== void 0 ? f(a, c, u, this) : e.name === "aPosition" ? s[c][F[u]] : e.name === "aNormal" ? l[c][F[u]] : a[u], n += 1;
  }
  this.attributes[this.attributeKeys.indexOf(e.name)].data = r, this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(e.name)]);
}, d.prototype.prepareBuffer = function(e) {
  var i = e.data, t = e.name, s = e.size, l = this.gl.createBuffer();
  this.gl.bindBuffer(34962, l), this.gl.bufferData(34962, i, 35044);
  var r = this.gl.getAttribLocation(this.program, t);
  this.gl.enableVertexAttribArray(r), this.gl.vertexAttribPointer(r, s, 5126, !1, 0, 0), this.buffers[this.attributeKeys.indexOf(e.name)] = { buffer: l, location: r, size: s };
}, d.prototype.render = function(e) {
  var i = this, t = this.uniforms, s = this.multiplier, l = this.gl;
  l.useProgram(this.program);
  for (var r = 0; r < this.buffers.length; r += 1) {
    var o = this.buffers[r], a = o.location, n = o.buffer, c = o.size;
    l.enableVertexAttribArray(a), l.bindBuffer(34962, n), l.vertexAttribPointer(a, c, 5126, !1, 0, 0);
  }
  Object.keys(e).forEach(function(u) {
    t[u].value = e[u].value;
  }), Object.keys(t).forEach(function(u) {
    var f = t[u];
    i.uniformMap[f.type](f.location, f.value);
  }), l.drawArrays(this.mode, 0, s * this.geometry.vertices.length), this.onRender && this.onRender(this);
}, d.prototype.destroy = function() {
  for (var e = 0; e < this.buffers.length; e += 1) this.gl.deleteBuffer(this.buffers[e].buffer);
  this.gl.deleteProgram(this.program), this.gl = null;
};
var g = function(e) {
  var i = this, t = e || {}, s = t.canvas;
  s === void 0 && (s = document.querySelector("canvas"));
  var l = t.context;
  l === void 0 && (l = {});
  var r = t.contextType;
  r === void 0 && (r = "experimental-webgl");
  var o = t.settings;
  o === void 0 && (o = {});
  var a = s.getContext(r, Object.assign({ alpha: !1, antialias: !1 }, l));
  Object.assign(this, { gl: a, canvas: s, uniforms: {}, instances: /* @__PURE__ */ new Map(), shouldRender: !0 }), Object.assign(this, { devicePixelRatio: 1, clearColor: [1, 1, 1, 1], position: { x: 0, y: 0, z: 2 }, clip: [1e-3, 100] }), Object.assign(this, o), this.uniformMap = { float: function(n, c) {
    return a.uniform1f(n, c);
  }, vec2: function(n, c) {
    return a.uniform2fv(n, c);
  }, vec3: function(n, c) {
    return a.uniform3fv(n, c);
  }, vec4: function(n, c) {
    return a.uniform4fv(n, c);
  }, mat2: function(n, c) {
    return a.uniformMatrix2fv(n, !1, c);
  }, mat3: function(n, c) {
    return a.uniformMatrix3fv(n, !1, c);
  }, mat4: function(n, c) {
    return a.uniformMatrix4fv(n, !1, c);
  } }, a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.getContextAttributes().alpha === !1 && (a.clearColor.apply(a, this.clearColor), a.clearDepth(1)), this.onSetup && this.onSetup(a), window.addEventListener("resize", function() {
    return i.resize();
  }), this.resize(), this.render();
};
g.prototype.resize = function() {
  var e = this.gl, i = this.canvas, t = this.devicePixelRatio, s = this.position;
  i.width = i.clientWidth * t, i.height = i.clientHeight * t;
  var l = e.drawingBufferWidth, r = e.drawingBufferHeight, o = l / r;
  e.viewport(0, 0, l, r);
  var a = Math.tan(Math.PI / 180 * 22.5), n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, s.x, s.y, (o < 1 ? 1 : o) * -s.z, 1];
  this.uniforms.uProjectionMatrix = { type: "mat4", value: [0.5 / a, 0, 0, 0, 0, o / a * 0.5, 0, 0, 0, 0, -(this.clip[1] + this.clip[0]) / (this.clip[1] - this.clip[0]), -1, 0, 0, -2 * this.clip[1] * (this.clip[0] / (this.clip[1] - this.clip[0])), 0] }, this.uniforms.uViewMatrix = { type: "mat4", value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }, this.uniforms.uModelMatrix = { type: "mat4", value: n };
}, g.prototype.toggle = function(e) {
  e !== this.shouldRender && (this.shouldRender = e !== void 0 ? e : !this.shouldRender, this.shouldRender && this.render());
}, g.prototype.render = function() {
  var e = this;
  this.gl.clear(16640), this.instances.forEach(function(i) {
    i.render(e.uniforms);
  }), this.onRender && this.onRender(this), this.shouldRender && requestAnimationFrame(function() {
    return e.render();
  });
}, g.prototype.add = function(e, i) {
  i === void 0 && (i = { uniforms: {} }), i.uniforms === void 0 && (i.uniforms = {}), Object.assign(i.uniforms, JSON.parse(JSON.stringify(this.uniforms))), Object.assign(i, { gl: this.gl, uniformMap: this.uniformMap });
  var t = new d(i);
  return this.instances.set(e, t), t;
}, g.prototype.remove = function(e) {
  var i = this.instances.get(e);
  i !== void 0 && (i.destroy(), this.instances.delete(e));
}, g.prototype.destroy = function() {
  var e = this;
  this.instances.forEach(function(i, t) {
    i.destroy(), e.instances.delete(t);
  }), this.toggle(!1);
};
var V = "phi", L = "theta", v = "mapSamples", X = "mapBrightness", Y = "baseColor", K = "markerColor", J = "glowColor", m = "markers", q = "diffuse", O = "devicePixelRatio", H = "dark", W = "offset", _ = "scale", Z = "opacity", $ = "mapBaseBrightness", U = { [V]: "z", [L]: "A", [v]: "k", [X]: "D", [Y]: "S", [K]: "T", [J]: "y", [q]: "E", [H]: "F", [W]: "x", [_]: "B", [Z]: "U", [$]: "G" }, { PI: A, sin: B, cos: S, sqrt: N, atan2: ie, floor: x, max: re, pow: oe, log2: ae } = Math, Q = 2.23606797749979, I = 1.618033988749895, se = 0.7202100452062783, R = 6.283185307179586, G = 3.8832220774509327, C = 0.618033988749895, ne = (e, i) => {
  let t = [e[0], e[2], e[1]], s = 1 / i, l = re(2, x(ae(Q * i * A * (1 - t[2] * t[2])) * se)), r = oe(I, l) / Q, o = [x(r + 0.5), x(r * I + 0.5)], a = [(o[0] + 1) * C % 1 * R - G, (o[1] + 1) * C % 1 * R - G], n = [-2 * o[0], -2 * o[1]], c = [ie(t[1], t[0]), t[2] - 1], u = a[0] * n[1] - n[0] * a[1], f = [x((n[1] * c[0] - a[1] * (c[1] * i + 1)) / u), x((-n[0] * c[0] + a[0] * (c[1] * i + 1)) / u)], h = A, p = [0, 0, 0];
  for (let w = 0; w < 4; w++) {
    let E = o[0] * (f[0] + w % 2) + o[1] * (f[1] + x(w * 0.5));
    if (E > i) continue;
    let j = E * C % 1 * R, M = 1 - 2 * E * s, k = N(1 - M * M), z = [S(j) * k, B(j) * k, M], D = N((t[0] - z[0]) ** 2 + (t[1] - z[1]) ** 2 + (t[2] - z[2]) ** 2);
    D < h && (h = D, p = z);
  }
  return [p[0], p[2], p[1]];
}, P = (e, i) => [].concat(...e.map((t) => {
  let [s, l] = t.location;
  s = s * A / 180, l = l * A / 180 - A;
  let r = S(s), o = [-r * S(l), B(s), r * B(l)];
  return [...ne(o, i), t.size, ...t.color ? [...t.color, 1] : [0, 0, 0, 0]];
}), [0, 0, 0, 0, 0, 0, 0, 0]), le = (e, i) => {
  let t = (r, o, a) => ({ type: r, value: typeof i[o] > "u" ? a : i[o] }), s = e.getContext("webgl2") ? "webgl2" : e.getContext("webgl") ? "webgl" : "experimental-webgl", l = new g({ canvas: e, contextType: s, context: { alpha: !0, stencil: !1, antialias: !0, depth: !1, preserveDrawingBuffer: !1, ...i.context }, settings: { [O]: i[O] || 1, onSetup: (r) => {
    let o = r.RGB, a = r.UNSIGNED_BYTE, n = r.TEXTURE_2D, c = r.createTexture();
    r.bindTexture(n, c), r.texImage2D(n, 0, o, 1, 1, 0, o, a, new Uint8Array([0, 0, 0, 0]));
    let u = new Image();
    u.onload = () => {
      r.bindTexture(n, c), r.texImage2D(n, 0, o, o, a, u), r.generateMipmap(n);
      let f = r.getParameter(r.CURRENT_PROGRAM), h = r.getUniformLocation(f, "H");
      r.texParameteri(n, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(n, r.TEXTURE_MAG_FILTER, r.NEAREST), r.uniform1i(h, 0);
    }, u.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg==";
  } } });
  return l.add("", { vertex: "attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}", fragment: "precision highp float;uniform vec2 w,x;uniform vec3 S,T,y;uniform vec4 u[64*2];uniform float z,A,k,B,C,D,E,F,U,G;uniform sampler2D H;float I=1./k;mat3 J(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 K(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*k*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*k+1.),-e.x*f.x+d.x*(f.y*k+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>k)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float l=fract(b)*6.283185,i=1.-2.*j*I,m=sqrt(1.-i*i);vec3 o=vec3(cos(l)*m,sin(l)*m,i);float t=length(c-o);if(t<n)n=t,r=o;}v=n;return r.xzy;}void main(){vec2 f=1./w,a=(gl_FragCoord.xy*f*2.-1.)/B-x*vec2(1,-1)*f;a.x*=w.x*f.y;float c=dot(a,a);vec4 t=vec4(0);float j=0.;int V=int(C);if(c<=.64){float b;vec4 e=vec4(0);vec3 v=vec3(0,0,1),l=normalize(vec3(a,sqrt(.64-c)));mat3 L=J(A,z);float g=dot(l,v);vec3 m=l*L,h=K(m,b);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float M=max(texture2D(H,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,G),N=smoothstep(8e-3,0.,b),o=pow(g,E)*D,p=M*N*o,W=mix((1.-p)*pow(g,.4),p,F)+.1;e+=vec4(S*W,1.);float X=0.;for(int d=0;d<128;d+=2){if(d>=V)break;vec4 q=u[d],O=u[d+1];vec3 P=q.xyz;float r=q.w;vec3 Y=P-m;b=length(Y);if(b<r){float Q=r*.5,s=smoothstep(Q,0.,b);X+=s,e.xyz=O.w>.5?mix(e.xyz,O.xyz,s*o):mix(e.xyz,T,s*o);}}e.xyz+=pow(1.-g,4.)*y,t+=e*(1.+U)*.5,j=pow(dot(normalize(vec3(-a,sqrt(1.-c))),vec3(0,0,1)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float R=sqrt(.2/(c-.64));j=smoothstep(.5,1.,R/(R+1.));}gl_FragColor=t+vec4(j*y,j);}", uniforms: { w: { type: "vec2", value: [i.width, i.height] }, z: t("float", V), A: t("float", L), k: t("float", v), D: t("float", X), G: t("float", $), S: t("vec3", Y), T: t("vec3", K), E: t("float", q), y: t("vec3", J), F: t("float", H), u: { type: "vec4", value: P(i[m], i[v]) }, C: { type: "float", value: i[m].length * 2 }, x: t("vec2", W, [0, 0]), B: t("float", _, 1), U: t("float", Z, 1) }, mode: 4, geometry: { vertices: [{ x: -100, y: 100, z: 0 }, { x: -100, y: -100, z: 0 }, { x: 100, y: 100, z: 0 }, { x: 100, y: -100, z: 0 }, { x: -100, y: -100, z: 0 }, { x: 100, y: 100, z: 0 }] }, onRender: ({ uniforms: r }) => {
    let o = {};
    if (i.onRender) {
      o = i.onRender(o) || o;
      for (let a in U) o[a] !== void 0 && (r[U[a]].value = o[a]);
      if (o[m] !== void 0) {
        let a = o[v] !== void 0 ? o[v] : r.k.value;
        r.u.value = P(o[m], a), r.C.value = o[m].length;
      }
      o.width && o.height && (r.w.value = [o.width, o.height]), o[v] !== void 0 && (r.u.value = P(o[m] || i[m], o[v]));
    }
  } }), l;
};
const ce = 1400, fe = {
  width: 800,
  height: 800,
  onRender: () => {
  },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16e3,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 }
  ]
};
function ue({
  className: e,
  config: i = fe
}) {
  const t = b.useRef(null), s = b.useRef(0), l = b.useRef(0), r = b.useRef(null), o = b.useRef(0), a = ee(0), n = te(a, {
    mass: 1,
    damping: 30,
    stiffness: 100
  }), c = (f) => {
    r.current = f, t.current && (t.current.style.cursor = f !== null ? "grabbing" : "grab");
  }, u = (f) => {
    if (r.current !== null) {
      const h = f - r.current;
      o.current = h, a.set(a.get() + h / ce);
    }
  };
  return b.useEffect(() => {
    const f = () => {
      t.current && (l.current = t.current.offsetWidth);
    };
    window.addEventListener("resize", f), f();
    const h = le(t.current, {
      ...i,
      width: l.current * 2,
      height: l.current * 2,
      onRender: (p) => {
        r.current || (s.current += 5e-3), p.phi = s.current + n.get(), p.width = l.current * 2, p.height = l.current * 2;
      }
    });
    return setTimeout(() => t.current.style.opacity = "1", 0), () => {
      h.destroy(), window.removeEventListener("resize", f);
    };
  }, [n, i]), /* @__PURE__ */ y.jsx(
    "div",
    {
      className: T(
        "absolute inset-0 mx-auto aspect-square w-full max-w-150",
        e
      ),
      children: /* @__PURE__ */ y.jsx(
        "canvas",
        {
          className: T(
            "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
          ),
          ref: t,
          onPointerDown: (f) => {
            r.current = f.clientX, c(f.clientX);
          },
          onPointerUp: () => c(null),
          onPointerOut: () => c(null),
          onMouseMove: (f) => u(f.clientX),
          onTouchMove: (f) => f.touches[0] && u(f.touches[0].clientX)
        }
      )
    }
  );
}
function me() {
  return /* @__PURE__ */ y.jsxs("div", { className: "bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border px-40 pt-8 pb-40 md:pb-60", children: [
    /* @__PURE__ */ y.jsx("span", { className: "pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10", children: "Globe" }),
    /* @__PURE__ */ y.jsx(ue, { className: "top-28" }),
    /* @__PURE__ */ y.jsx("div", { className: "pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" })
  ] });
}
export {
  me as default
};
