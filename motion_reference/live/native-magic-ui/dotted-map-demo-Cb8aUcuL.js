import { r as m, j as e } from "./inline-Mcm4wFdg.js";
import { D as j } from "./dotted-map-DHkZ2t5N.js";
const v = [
  {
    lat: 37.5665,
    lng: 126.978,
    size: 2.8,
    overlay: { countryCode: "kr", label: "Seoul" }
  },
  {
    lat: 40.7128,
    lng: -74.006,
    size: 2.8,
    overlay: { countryCode: "us", label: "NYC" }
  }
];
function w() {
  const d = m.useId();
  return /* @__PURE__ */ e.jsxs("div", { className: "relative h-[500px] w-full overflow-hidden rounded-lg border", children: [
    /* @__PURE__ */ e.jsx("div", { className: "to-background absolute inset-0 bg-radial from-transparent to-200%" }),
    /* @__PURE__ */ e.jsx(
      j,
      {
        markers: v,
        renderMarkerOverlay: ({ marker: p, x: o, y: s, r: t, index: x }) => {
          const { countryCode: h, label: n } = p.overlay, u = `https://flagcdn.com/w80/${h}.webp`, a = `${d}-flag-clip-${x}`.replace(/:/g, "-"), l = t * 0.75, r = t * 0.9, i = t * 1.5, g = n.length * (r * 0.62) + t * 1.4, c = o + t + t * 0.6, f = s - i / 2;
          return /* @__PURE__ */ e.jsxs("g", { style: { pointerEvents: "none" }, children: [
            /* @__PURE__ */ e.jsx("clipPath", { id: a, children: /* @__PURE__ */ e.jsx("circle", { cx: o, cy: s, r: l }) }),
            /* @__PURE__ */ e.jsx(
              "image",
              {
                href: u,
                x: o - l,
                y: s - l,
                width: l * 2,
                height: l * 2,
                preserveAspectRatio: "xMidYMid slice",
                clipPath: `url(#${a})`
              }
            ),
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                x: c,
                y: f,
                width: g,
                height: i,
                rx: i / 2,
                fill: "rgba(0,0,0,0.55)"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "text",
              {
                x: c + t * 0.7,
                y: s + r * 0.35,
                fontSize: r,
                fill: "white",
                children: n
              }
            )
          ] });
        }
      }
    )
  ] });
}
export {
  w as default
};
