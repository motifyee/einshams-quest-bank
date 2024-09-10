import{r,R as T}from"./react-2a1b29a3.js";import"./react-dom-0944c732.js";import{R as p}from"./react-router-58cad68c.js";import{c as F}from"./@remix-run-f34948fb.js";/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U="6";try{window.__reactRouterVersion=U}catch{}const b="startTransition",l=T[b];function _(t){let{basename:S,children:f,future:n,window:h}=t,s=r.useRef();s.current==null&&(s.current=F({window:h,v5Compat:!0}));let e=s.current,[o,i]=r.useState({action:e.action,location:e.location}),{v7_startTransition:a}=n||{},c=r.useCallback(u=>{a&&l?l(()=>i(u)):i(u)},[i,a]);return r.useLayoutEffect(()=>e.listen(c),[e,c]),r.createElement(p,{basename:S,children:f,location:o.location,navigationType:o.action,navigator:e,future:n})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var R;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(R||(R={}));export{_ as B};
