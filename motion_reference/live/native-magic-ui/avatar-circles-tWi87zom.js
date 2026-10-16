import { j as r, c } from "./inline-Mcm4wFdg.js";
const o = ({
  numPeople: t,
  className: s,
  avatarUrls: l
}) => /* @__PURE__ */ r.jsxs("div", { className: c("z-10 flex -space-x-4 rtl:space-x-reverse", s), children: [
  l.map((a, e) => /* @__PURE__ */ r.jsx(
    "a",
    {
      href: a.profileUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "h-10 w-10 rounded-full border-2 border-white dark:border-gray-800",
          src: a.imageUrl,
          width: 40,
          height: 40,
          alt: `Avatar ${e + 1}`
        },
        e
      )
    },
    e
  )),
  (t ?? 0) > 0 && /* @__PURE__ */ r.jsxs(
    "a",
    {
      className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black",
      href: "",
      children: [
        "+",
        t
      ]
    }
  )
] });
export {
  o as A
};
