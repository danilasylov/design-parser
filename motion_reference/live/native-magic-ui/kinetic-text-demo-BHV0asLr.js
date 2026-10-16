import { j as t, c as h } from "./inline-Mcm4wFdg.js";
function c({
  text: e,
  as: r = "h1",
  className: a = "",
  style: i,
  ...o
}) {
  const s = {
    "--hover-padding": "calc(1em / 12)",
    "--text-stroke-width": "calc(1em * 125 / 6000)",
    ...i
  };
  return /* @__PURE__ */ t.jsxs(
    r,
    {
      ...o,
      className: h("flex flex-wrap font-[300]", a),
      style: s,
      children: [
        e.split("").map((n, d) => /* @__PURE__ */ t.jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "[will-change:font-weight,-webkit-text-stroke-width,padding] [-webkit-text-stroke-color:transparent] [-webkit-text-stroke-width:var(--text-stroke-width)] [transition:font-weight_0.4s,_-webkit-text-stroke-color_0.4s,_padding_0.4s] hover:[padding-inline:var(--hover-padding)] hover:font-[900] hover:[-webkit-text-stroke-color:currentcolor] hover:[-webkit-text-stroke-width:calc(var(--text-stroke-width)*2)] has-[+span+span:hover]:font-[400] has-[+span:hover]:[padding-inline:var(--hover-padding)] has-[+span:hover]:font-[600] [:hover+&]:[padding-inline:var(--hover-padding)] [:hover+&]:font-[600] [:hover+span+&]:font-[400]",
            children: n === " " ? " " : n
          },
          d
        )),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: e })
      ]
    }
  );
}
function p() {
  return /* @__PURE__ */ t.jsx("div", { className: "relative justify-center", children: /* @__PURE__ */ t.jsx(
    c,
    {
      text: "Nostalgia",
      className: "text-[6rem] tracking-[-5%] [font-optical-sizing:auto]"
    }
  ) });
}
export {
  p as default
};
