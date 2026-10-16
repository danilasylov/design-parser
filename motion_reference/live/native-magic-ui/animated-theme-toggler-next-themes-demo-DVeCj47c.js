import { u as s, j as e } from "./inline-Mcm4wFdg.js";
import { A as r } from "./animated-theme-toggler-9MgGWwFh.js";
function h() {
  const { resolvedTheme: m, setTheme: t } = s();
  return /* @__PURE__ */ e.jsx("div", { className: "flex justify-center p-6", children: /* @__PURE__ */ e.jsx(
    r,
    {
      theme: m === "dark" ? "dark" : "light",
      onThemeChange: t
    }
  ) });
}
export {
  h as default
};
