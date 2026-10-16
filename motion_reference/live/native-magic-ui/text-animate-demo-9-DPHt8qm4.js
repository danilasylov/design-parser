import { j as a } from "./inline-Mcm4wFdg.js";
import { T as e } from "./text-animate-xoHz1j1b.js";
function n() {
  return /* @__PURE__ */ a.jsx(
    e,
    {
      variants: {
        hidden: {
          opacity: 0,
          y: 30,
          rotate: 45,
          scale: 0.5
        },
        show: (t) => ({
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: {
            delay: t * 0.1,
            duration: 0.4,
            y: {
              type: "spring",
              damping: 12,
              stiffness: 200,
              mass: 0.8
            },
            rotate: {
              type: "spring",
              damping: 8,
              stiffness: 150
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 300
            }
          }
        }),
        exit: (t) => ({
          opacity: 0,
          y: 30,
          rotate: 45,
          scale: 0.5,
          transition: {
            delay: t * 0.1,
            duration: 0.4
          }
        })
      },
      by: "character",
      children: "Wavy Motion!"
    }
  );
}
export {
  n as default
};
