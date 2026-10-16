import{r as d,j as e,c as o}from"./index-WM7-nNXq.js";import{c as u}from"./index-CFN0zKgi.js";import{G as i}from"./glare-hover-CwmR_bm7.js";import{c as n}from"./createLucideIcon-BmO5EyrG.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],x=n("circle-check-big",m);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],g=n("info",f);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],h=n("triangle-alert",v),y=u("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),s=d.forwardRef(({className:r,variant:a,...t},p)=>e.jsx("div",{ref:p,role:"alert",className:o(y({variant:a}),r),...t}));s.displayName="Alert";const l=d.forwardRef(({className:r,...a},t)=>e.jsx("h5",{ref:t,className:o("mb-1 leading-none font-medium tracking-tight",r),...a}));l.displayName="AlertTitle";const c=d.forwardRef(({className:r,...a},t)=>e.jsx("div",{ref:t,className:o("text-sm [&_p]:leading-relaxed",r),...a}));c.displayName="AlertDescription";function A(){return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(i,{className:"rounded-lg",duration:550,opacity:.25,children:e.jsxs(s,{className:"[&>svg~*]:pl-10",children:[e.jsx(g,{}),e.jsx(l,{children:"Action required"}),e.jsx(c,{children:"Your plan expires in 3 days. Renew to keep access."})]})}),e.jsx(i,{className:"w-full rounded-lg",color:"#ff6070",opacity:.25,duration:550,children:e.jsxs(s,{variant:"destructive",className:"bg-background [&>svg~*]:pl-10",children:[e.jsx(h,{}),e.jsx(l,{children:"Payment declined"}),e.jsx(c,{children:"Check your card details and try again."})]})}),e.jsx(i,{className:"w-full rounded-lg",color:"#60ff70",opacity:.25,duration:550,children:e.jsxs(s,{className:"[&>svg~*]:pl-10",children:[e.jsx(x,{className:"stroke-emerald-500"}),e.jsx(l,{className:"text-emerald-500",children:"Subscription confirmed"}),e.jsx(c,{className:"text-emerald-500",children:"You have full Pro access until April 5, 2027."})]})})]})}export{A as default};
