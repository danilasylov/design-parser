import { j as e } from "./inline-Mcm4wFdg.js";
import { B as r } from "./blur-fade-_aapH6vf.js";
const c = Array.from({ length: 9 }, (t, s) => {
  const o = s % 2 === 0, n = o ? 800 : 600, a = o ? 600 : 800;
  return `https://picsum.photos/seed/${s + 1}/${n}/${a}`;
});
function l() {
  return /* @__PURE__ */ e.jsx("section", { id: "photos", children: /* @__PURE__ */ e.jsx("div", { className: "columns-2 gap-4 sm:columns-3", children: c.map((t, s) => /* @__PURE__ */ e.jsx(r, { delay: 0.25 + s * 0.05, inView: !0, children: /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "mb-4 size-full rounded-lg object-contain",
      src: t,
      alt: `Random stock image ${s + 1}`
    }
  ) }, t)) }) });
}
export {
  l as default
};
