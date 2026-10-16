import { j as s } from "./inline-Mcm4wFdg.js";
const t = 433, i = 882, l = 21.25, e = 19.25, o = 389.5, r = 843.5, a = 55.75, C = l / t * 100, E = e / i * 100, f = o / t * 100, x = r / i * 100, m = a / o * 100, H = a / r * 100;
function $({
  src: d,
  videoSrc: c,
  className: j,
  style: p,
  ...u
}) {
  const n = !!c, h = n || !!d;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `relative inline-block w-full align-middle leading-none ${j}`,
      style: {
        aspectRatio: `${t}/${i}`,
        ...p
      },
      ...u,
      children: [
        n && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "pointer-events-none absolute z-0 overflow-hidden",
            style: {
              left: `${C}%`,
              top: `${E}%`,
              width: `${f}%`,
              height: `${x}%`,
              borderRadius: `${m}% / ${H}%`
            },
            children: /* @__PURE__ */ s.jsx(
              "video",
              {
                className: "block size-full object-cover",
                src: c,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                preload: "metadata"
              }
            )
          }
        ),
        !n && d && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "pointer-events-none absolute z-0 overflow-hidden",
            style: {
              left: `${C}%`,
              top: `${E}%`,
              width: `${f}%`,
              height: `${x}%`,
              borderRadius: `${m}% / ${H}%`
            },
            children: /* @__PURE__ */ s.jsx(
              "img",
              {
                src: d,
                alt: "",
                className: "block size-full object-cover object-top"
              }
            )
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "svg",
          {
            viewBox: `0 0 ${t} ${i}`,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "absolute inset-0 size-full",
            style: { transform: "translateZ(0)" },
            children: [
              /* @__PURE__ */ s.jsxs("g", { mask: h ? "url(#screenPunch)" : void 0, children: [
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    d: "M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z",
                    className: "fill-[#E5E5E5] dark:fill-[#404040]"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    d: "M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z",
                    className: "fill-[#E5E5E5] dark:fill-[#404040]"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    d: "M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z",
                    className: "fill-[#E5E5E5] dark:fill-[#404040]"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    d: "M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z",
                    className: "fill-[#E5E5E5] dark:fill-[#404040]"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    d: "M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z",
                    className: "fill-[#E5E5E5] dark:fill-[#404040]"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    d: "M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z",
                    className: "fill-white dark:fill-[#262626]"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "path",
                {
                  opacity: "0.5",
                  d: "M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z",
                  className: "fill-[#E5E5E5] dark:fill-[#404040]"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "path",
                {
                  d: `M${l} 75C${l} 44.2101 46.2101 ${e} 77 ${e}H355C385.79 ${e} 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 ${l} 837.79 ${l} 807V75Z`,
                  className: "fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]",
                  mask: h ? "url(#screenPunch)" : void 0
                }
              ),
              /* @__PURE__ */ s.jsx(
                "path",
                {
                  d: "M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z",
                  className: "fill-[#F5F5F5] dark:fill-[#262626]"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "path",
                {
                  d: "M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z",
                  className: "fill-[#F5F5F5] dark:fill-[#262626]"
                }
              ),
              /* @__PURE__ */ s.jsx(
                "path",
                {
                  d: "M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z",
                  className: "fill-[#E5E5E5] dark:fill-[#404040]"
                }
              ),
              /* @__PURE__ */ s.jsxs("defs", { children: [
                /* @__PURE__ */ s.jsxs("mask", { id: "screenPunch", maskUnits: "userSpaceOnUse", children: [
                  /* @__PURE__ */ s.jsx(
                    "rect",
                    {
                      x: "0",
                      y: "0",
                      width: t,
                      height: i,
                      fill: "white"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "rect",
                    {
                      x: l,
                      y: e,
                      width: o,
                      height: r,
                      rx: a,
                      ry: a,
                      fill: "black"
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("clipPath", { id: "roundedCorners", children: /* @__PURE__ */ s.jsx(
                  "rect",
                  {
                    x: l,
                    y: e,
                    width: o,
                    height: r,
                    rx: a,
                    ry: a
                  }
                ) })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  $ as I
};
