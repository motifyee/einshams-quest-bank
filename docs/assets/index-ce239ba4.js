(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var k={},iy={get exports(){return k},set exports(e){k=e}},Co={},A={},oy={get exports(){return A},set exports(e){A=e}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),sy=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),dy=Symbol.for("react.context"),fy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),yy=Symbol.for("react.lazy"),hu=Symbol.iterator;function hy(e){return e===null||typeof e!="object"?null:(e=hu&&e[hu]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ed=Object.assign,td={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=td,this.updater=n||Jc}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nd(){}nd.prototype=Vn.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=td,this.updater=n||Jc}var Kl=Bl.prototype=new nd;Kl.constructor=Bl;ed(Kl,Vn.prototype);Kl.isPureReactComponent=!0;var gu=Array.isArray,rd=Object.prototype.hasOwnProperty,Wl={current:null},id={key:!0,ref:!0,__self:!0,__source:!0};function od(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rd.call(t,r)&&!id.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xr,type:e,key:o,ref:s,props:i,_owner:Wl.current}}function gy(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function vy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vy(""+e.key):t.toString(36)}function zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xr:case sy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Go(s,0):r,gu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),zi(i,t,n,"",function(u){return u})):i!=null&&(Ql(i)&&(i=gy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",gu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Go(o,l);s+=zi(o,t,n,a,i)}else if(a=hy(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Go(o,l++),s+=zi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Ri={transition:null},xy={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:Wl};M.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Vn;M.Fragment=ly;M.Profiler=uy;M.PureComponent=Bl;M.StrictMode=ay;M.Suspense=py;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ed({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Wl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)rd.call(t,a)&&!id.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xr,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:dy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cy,_context:e},e.Consumer=e};M.createElement=od;M.createFactory=function(e){var t=od.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:fy,render:e}};M.isValidElement=Ql;M.lazy=function(e){return{$$typeof:yy,_payload:{_status:-1,_result:e},_init:wy}};M.memo=function(e,t){return{$$typeof:my,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ri.transition;Ri.transition={};try{e()}finally{Ri.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return he.current.useCallback(e,t)};M.useContext=function(e){return he.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return he.current.useDeferredValue(e)};M.useEffect=function(e,t){return he.current.useEffect(e,t)};M.useId=function(){return he.current.useId()};M.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return he.current.useMemo(e,t)};M.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};M.useRef=function(e){return he.current.useRef(e)};M.useState=function(e){return he.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return he.current.useTransition()};M.version="18.2.0";(function(e){e.exports=M})(oy);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=A,Ny=Symbol.for("react.element"),Py=Symbol.for("react.fragment"),Ey=Object.prototype.hasOwnProperty,Cy=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ty={key:!0,ref:!0,__self:!0,__source:!0};function sd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ey.call(t,r)&&!Ty.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ny,type:e,key:o,ref:s,props:i,_owner:Cy.current}}Co.Fragment=Py;Co.jsx=sd;Co.jsxs=sd;(function(e){e.exports=Co})(iy);var Ms={},bs={},ky={get exports(){return bs},set exports(e){bs=e}},Ae={},Is={},Oy={get exports(){return Is},set exports(e){Is=e}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var _=T.length;T.push(R);e:for(;0<_;){var W=_-1>>>1,ee=T[W];if(0<i(ee,R))T[W]=R,T[_]=ee,_=W;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],_=T.pop();if(_!==R){T[0]=_;e:for(var W=0,ee=T.length,ri=ee>>>1;W<ri;){var Ht=2*(W+1)-1,Qo=T[Ht],Ft=Ht+1,ii=T[Ft];if(0>i(Qo,_))Ft<ee&&0>i(ii,Qo)?(T[W]=ii,T[Ft]=_,W=Ft):(T[W]=Qo,T[Ht]=_,W=Ht);else if(Ft<ee&&0>i(ii,_))T[W]=ii,T[Ft]=_,W=Ft;else break e}}return R}function i(T,R){var _=T.sortIndex-R.sortIndex;return _!==0?_:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,f=null,d=3,g=!1,h=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function w(T){if(v=!1,y(T),!h)if(n(a)!==null)h=!0,Ko(x);else{var R=n(u);R!==null&&Wo(w,R.startTime-T)}}function x(T,R){h=!1,v&&(v=!1,m(O),O=-1),g=!0;var _=d;try{for(y(R),f=n(a);f!==null&&(!(f.expirationTime>R)||T&&!X());){var W=f.callback;if(typeof W=="function"){f.callback=null,d=f.priorityLevel;var ee=W(f.expirationTime<=R);R=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(a)&&r(a),y(R)}else r(a);f=n(a)}if(f!==null)var ri=!0;else{var Ht=n(u);Ht!==null&&Wo(w,Ht.startTime-R),ri=!1}return ri}finally{f=null,d=_,g=!1}}var E=!1,P=null,O=-1,b=5,z=-1;function X(){return!(e.unstable_now()-z<b)}function Zn(){if(P!==null){var T=e.unstable_now();z=T;var R=!0;try{R=P(!0,T)}finally{R?Jn():(E=!1,P=null)}}else E=!1}var Jn;if(typeof p=="function")Jn=function(){p(Zn)};else if(typeof MessageChannel<"u"){var yu=new MessageChannel,ry=yu.port2;yu.port1.onmessage=Zn,Jn=function(){ry.postMessage(null)}}else Jn=function(){N(Zn,0)};function Ko(T){P=T,E||(E=!0,Jn())}function Wo(T,R){O=N(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,Ko(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var _=d;d=R;try{return T()}finally{d=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var _=d;d=T;try{return R()}finally{d=_}},e.unstable_scheduleCallback=function(T,R,_){var W=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?W+_:W):_=W,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=_+ee,T={id:c++,callback:R,priorityLevel:T,startTime:_,expirationTime:ee,sortIndex:-1},_>W?(T.sortIndex=_,t(u,T),n(a)===null&&T===n(u)&&(v?(m(O),O=-1):v=!0,Wo(w,_-W))):(T.sortIndex=ee,t(a,T),h||g||(h=!0,Ko(x))),T},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(T){var R=d;return function(){var _=d;d=R;try{return T.apply(this,arguments)}finally{d=_}}}})(ld);(function(e){e.exports=ld})(Oy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=A,Re=Is;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,Or={};function un(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(Or[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=Object.prototype.hasOwnProperty,zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wu={},xu={};function Ry(e){return Ds.call(xu,e)?!0:Ds.call(wu,e)?!1:zy.test(e)?xu[e]=!0:(wu[e]=!0,!1)}function _y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ay(e,t,n,r){if(t===null||typeof t>"u"||_y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gl,Xl);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gl,Xl);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gl,Xl);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ay(t,n,i,r)&&(n=null),r||i===null?Ry(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),$s=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),js=Symbol.for("react.suspense"),Ls=Symbol.for("react.suspense_list"),ea=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),Su=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Xo;function ur(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Yo=!1;function Zo(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function My(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case $s:return"Profiler";case Zl:return"StrictMode";case js:return"Suspense";case Ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case Jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ea:return t=e.displayName||null,t!==null?t:Us(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return Us(e(t))}catch{}}return null}function by(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iy(e){var t=pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=Iy(e))}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yd(e,t){t=t.checked,t!=null&&Yl(e,"checked",t,!1)}function Hs(e,t){yd(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fs(e,t,n){(t!=="number"||Hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(cr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function hd(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dy=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){Dy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function xd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $y=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if($y[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qs=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Tn=null,kn=null;function Tu(e){if(e=Jr(e)){if(typeof Gs!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ro(t),Gs(e.stateNode,e.type,t))}}function Sd(e){Tn?kn?kn.push(e):kn=[e]:Tn=e}function Nd(){if(Tn){var e=Tn,t=kn;if(kn=Tn=null,Tu(e),t)for(e=0;e<t.length;e++)Tu(t[e])}}function Pd(e,t){return e(t)}function Ed(){}var Jo=!1;function Cd(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return Pd(e,t,n)}finally{Jo=!1,(Tn!==null||kn!==null)&&(Ed(),Nd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Xs=!1;if(ut)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Xs=!1}function jy(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hr=!1,Fi=null,Vi=!1,Ys=null,Ly={onError:function(e){hr=!0,Fi=e}};function Uy(e,t,n,r,i,o,s,l,a){hr=!1,Fi=null,jy.apply(Ly,arguments)}function qy(e,t,n,r,i,o,s,l,a){if(Uy.apply(this,arguments),hr){if(hr){var u=Fi;hr=!1,Fi=null}else throw Error(S(198));Vi||(Vi=!0,Ys=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ku(e){if(cn(e)!==e)throw Error(S(188))}function Hy(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ku(i),e;if(o===r)return ku(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function kd(e){return e=Hy(e),e!==null?Od(e):null}function Od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Od(e);if(t!==null)return t;e=e.sibling}return null}var zd=Re.unstable_scheduleCallback,Ou=Re.unstable_cancelCallback,Fy=Re.unstable_shouldYield,Vy=Re.unstable_requestPaint,Q=Re.unstable_now,By=Re.unstable_getCurrentPriorityLevel,na=Re.unstable_ImmediatePriority,Rd=Re.unstable_UserBlockingPriority,Bi=Re.unstable_NormalPriority,Ky=Re.unstable_LowPriority,_d=Re.unstable_IdlePriority,To=null,tt=null;function Wy(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Xy,Qy=Math.log,Gy=Math.LN2;function Xy(e){return e>>>=0,e===0?32:31-(Qy(e)/Gy|0)|0}var ui=64,ci=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=dr(l):(o&=s,o!==0&&(r=dr(o)))}else s=n&~i,s!==0?r=dr(s):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Yy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Qe(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Yy(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ad(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Jy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,ia,Id,Dd,$d,Js=!1,di=[],Tt=null,kt=null,Ot=null,_r=new Map,Ar=new Map,xt=[],eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function th(e,t,n,r,i){switch(t){case"focusin":return Tt=nr(Tt,e,t,n,r,i),!0;case"dragenter":return kt=nr(kt,e,t,n,r,i),!0;case"mouseover":return Ot=nr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _r.set(o,nr(_r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ar.set(o,nr(Ar.get(o)||null,e,t,n,r,i)),!0}return!1}function jd(e){var t=Qt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Td(n),t!==null){e.blockedOn=t,$d(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=el(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qs=r,n.target.dispatchEvent(r),Qs=null}else return t=Jr(n),t!==null&&ia(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){_i(e)&&n.delete(t)}function nh(){Js=!1,Tt!==null&&_i(Tt)&&(Tt=null),kt!==null&&_i(kt)&&(kt=null),Ot!==null&&_i(Ot)&&(Ot=null),_r.forEach(Ru),Ar.forEach(Ru)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,nh)))}function Mr(e){function t(i){return rr(i,e)}if(0<di.length){rr(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&rr(Tt,e),kt!==null&&rr(kt,e),Ot!==null&&rr(Ot,e),_r.forEach(t),Ar.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&xt.shift()}var On=pt.ReactCurrentBatchConfig,Wi=!0;function rh(e,t,n,r){var i=D,o=On.transition;On.transition=null;try{D=1,oa(e,t,n,r)}finally{D=i,On.transition=o}}function ih(e,t,n,r){var i=D,o=On.transition;On.transition=null;try{D=4,oa(e,t,n,r)}finally{D=i,On.transition=o}}function oa(e,t,n,r){if(Wi){var i=el(e,t,n,r);if(i===null)cs(e,t,r,Qi,n),zu(e,r);else if(th(i,e,t,n,r))r.stopPropagation();else if(zu(e,r),t&4&&-1<eh.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&bd(o),o=el(e,t,n,r),o===null&&cs(e,t,r,Qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else cs(e,t,r,null,n)}}var Qi=null;function el(e,t,n,r){if(Qi=null,e=ta(r),e=Qt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qi=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case na:return 1;case Rd:return 4;case Bi:case Ky:return 16;case _d:return 536870912;default:return 16}default:return 16}}var Pt=null,sa=null,Ai=null;function Ud(){if(Ai)return Ai;var e,t=sa,n=t.length,r,i="value"in Pt?Pt.value:Pt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ai=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function _u(){return!1}function Me(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fi:_u,this.isPropagationStopped=_u,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=Me(Bn),Zr=V({},Bn,{view:0,detail:0}),oh=Me(Zr),ts,ns,ir,ko=V({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(ts=e.screenX-ir.screenX,ns=e.screenY-ir.screenY):ns=ts=0,ir=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),Au=Me(ko),sh=V({},ko,{dataTransfer:0}),lh=Me(sh),ah=V({},Zr,{relatedTarget:0}),rs=Me(ah),uh=V({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=Me(uh),dh=V({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fh=Me(dh),ph=V({},Bn,{data:0}),Mu=Me(ph),mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function aa(){return gh}var vh=V({},Zr,{key:function(e){if(e.key){var t=mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aa,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wh=Me(vh),xh=V({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Me(xh),Sh=V({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aa}),Nh=Me(Sh),Ph=V({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=Me(Ph),Ch=V({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=Me(Ch),kh=[9,13,27,32],ua=ut&&"CompositionEvent"in window,gr=null;ut&&"documentMode"in document&&(gr=document.documentMode);var Oh=ut&&"TextEvent"in window&&!gr,qd=ut&&(!ua||gr&&8<gr&&11>=gr),Iu=String.fromCharCode(32),Du=!1;function Hd(e,t){switch(e){case"keyup":return kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function zh(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(Du=!0,Iu);case"textInput":return e=t.data,e===Iu&&Du?null:e;default:return null}}function Rh(e,t){if(yn)return e==="compositionend"||!ua&&Hd(e,t)?(e=Ud(),Ai=sa=Pt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var _h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_h[e.type]:t==="textarea"}function Vd(e,t,n,r){Sd(r),t=Gi(t,"onChange"),0<t.length&&(n=new la("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,br=null;function Ah(e){tf(e,0)}function Oo(e){var t=vn(e);if(md(t))return e}function Mh(e,t){if(e==="change")return t}var Bd=!1;if(ut){var is;if(ut){var os="oninput"in document;if(!os){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),os=typeof ju.oninput=="function"}is=os}else is=!1;Bd=is&&(!document.documentMode||9<document.documentMode)}function Lu(){vr&&(vr.detachEvent("onpropertychange",Kd),br=vr=null)}function Kd(e){if(e.propertyName==="value"&&Oo(br)){var t=[];Vd(t,br,e,ta(e)),Cd(Ah,t)}}function bh(e,t,n){e==="focusin"?(Lu(),vr=t,br=n,vr.attachEvent("onpropertychange",Kd)):e==="focusout"&&Lu()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(br)}function Dh(e,t){if(e==="click")return Oo(t)}function $h(e,t){if(e==="input"||e==="change")return Oo(t)}function jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:jh;function Ir(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ds.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qd(){for(var e=window,t=Hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lh(e){var t=Qd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(r!==null&&ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qu(n,o);var s=qu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uh=ut&&"documentMode"in document&&11>=document.documentMode,hn=null,tl=null,wr=null,nl=!1;function Hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nl||hn==null||hn!==Hi(r)||(r=hn,"selectionStart"in r&&ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Ir(wr,r)||(wr=r,r=Gi(tl,"onSelect"),0<r.length&&(t=new la("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},ss={},Gd={};ut&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function zo(e){if(ss[e])return ss[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gd)return ss[e]=t[n];return e}var Xd=zo("animationend"),Yd=zo("animationiteration"),Zd=zo("animationstart"),Jd=zo("transitionend"),ef=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){ef.set(e,t),un(t,[e])}for(var ls=0;ls<Fu.length;ls++){var as=Fu[ls],qh=as.toLowerCase(),Hh=as[0].toUpperCase()+as.slice(1);$t(qh,"on"+Hh)}$t(Xd,"onAnimationEnd");$t(Yd,"onAnimationIteration");$t(Zd,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Jd,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qy(r,t,void 0,e),e.currentTarget=null}function tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Vu(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Vu(i,l,u),o=a}}}if(Vi)throw e=Ys,Vi=!1,Ys=null,e}function j(e,t){var n=t[ll];n===void 0&&(n=t[ll]=new Set);var r=e+"__bubble";n.has(r)||(nf(t,e,2,!1),n.add(r))}function us(e,t,n){var r=0;t&&(r|=4),nf(n,e,r,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[mi]){e[mi]=!0,ud.forEach(function(n){n!=="selectionchange"&&(Fh.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,us("selectionchange",!1,t))}}function nf(e,t,n,r){switch(Ld(t)){case 1:var i=rh;break;case 4:i=ih;break;default:i=oa}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Qt(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Cd(function(){var u=o,c=ta(n),f=[];e:{var d=ef.get(e);if(d!==void 0){var g=la,h=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":g=wh;break;case"focusin":h="focus",g=rs;break;case"focusout":h="blur",g=rs;break;case"beforeblur":case"afterblur":g=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Nh;break;case Xd:case Yd:case Zd:g=ch;break;case Jd:g=Eh;break;case"scroll":g=oh;break;case"wheel":g=Th;break;case"copy":case"cut":case"paste":g=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bu}var v=(t&4)!==0,N=!v&&e==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Rr(p,m),w!=null&&v.push($r(p,w,y)))),N)break;p=p.return}0<v.length&&(d=new g(d,h,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Qs&&(h=n.relatedTarget||n.fromElement)&&(Qt(h)||h[ct]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=u,h=h?Qt(h):null,h!==null&&(N=cn(h),h!==N||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=u),g!==h)){if(v=Au,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=bu,w="onPointerLeave",m="onPointerEnter",p="pointer"),N=g==null?d:vn(g),y=h==null?d:vn(h),d=new v(w,p+"leave",g,n,c),d.target=N,d.relatedTarget=y,w=null,Qt(c)===u&&(v=new v(m,p+"enter",h,n,c),v.target=y,v.relatedTarget=N,w=v),N=w,g&&h)t:{for(v=g,m=h,p=0,y=v;y;y=dn(y))p++;for(y=0,w=m;w;w=dn(w))y++;for(;0<p-y;)v=dn(v),p--;for(;0<y-p;)m=dn(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=dn(v),m=dn(m)}v=null}else v=null;g!==null&&Bu(f,d,g,v,!1),h!==null&&N!==null&&Bu(f,N,h,v,!0)}}e:{if(d=u?vn(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var x=Mh;else if($u(d))if(Bd)x=$h;else{x=Ih;var E=bh}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=Dh);if(x&&(x=x(e,u))){Vd(f,x,n,c);break e}E&&E(e,d,u),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Fs(d,"number",d.value)}switch(E=u?vn(u):window,e){case"focusin":($u(E)||E.contentEditable==="true")&&(hn=E,tl=u,wr=null);break;case"focusout":wr=tl=hn=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,Hu(f,n,c);break;case"selectionchange":if(Uh)break;case"keydown":case"keyup":Hu(f,n,c)}var P;if(ua)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else yn?Hd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(qd&&n.locale!=="ko"&&(yn||O!=="onCompositionStart"?O==="onCompositionEnd"&&yn&&(P=Ud()):(Pt=c,sa="value"in Pt?Pt.value:Pt.textContent,yn=!0)),E=Gi(u,O),0<E.length&&(O=new Mu(O,e,null,n,c),f.push({event:O,listeners:E}),P?O.data=P:(P=Fd(n),P!==null&&(O.data=P)))),(P=Oh?zh(e,n):Rh(e,n))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(c=new Mu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}tf(f,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rr(e,n),o!=null&&r.unshift($r(e,o,i)),o=Rr(e,t),o!=null&&r.push($r(e,o,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Rr(n,o),a!=null&&s.unshift($r(n,a,l))):i||(a=Rr(n,o),a!=null&&s.push($r(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Vh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Vh,`
`).replace(Bh,"")}function yi(e,t,n){if(t=Ku(t),Ku(e)!==t&&n)throw Error(S(425))}function Xi(){}var rl=null,il=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(Qh)}:sl;function Qh(e){setTimeout(function(){throw e})}function ds(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),et="__reactFiber$"+Kn,jr="__reactProps$"+Kn,ct="__reactContainer$"+Kn,ll="__reactEvents$"+Kn,Gh="__reactListeners$"+Kn,Xh="__reactHandles$"+Kn;function Qt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qu(e);e!==null;){if(n=e[et])return n;e=Qu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ro(e){return e[jr]||null}var al=[],wn=-1;function jt(e){return{current:e}}function L(e){0>wn||(e.current=al[wn],al[wn]=null,wn--)}function $(e,t){wn++,al[wn]=e.current,e.current=t}var Dt={},pe=jt(Dt),Se=jt(!1),en=Dt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Yi(){L(Se),L(pe)}function Gu(e,t,n){if(pe.current!==Dt)throw Error(S(168));$(pe,t),$(Se,n)}function rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,by(e)||"Unknown",i));return V({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,en=pe.current,$(pe,e),$(Se,Se.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=rf(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,L(Se),L(pe),$(pe,e)):L(Se),$(Se,n)}var ot=null,_o=!1,fs=!1;function of(e){ot===null?ot=[e]:ot.push(e)}function Yh(e){_o=!0,of(e)}function Lt(){if(!fs&&ot!==null){fs=!0;var e=0,t=D;try{var n=ot;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,_o=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),zd(na,Lt),i}finally{D=t,fs=!1}}return null}var xn=[],Sn=0,Ji=null,eo=0,Ie=[],De=0,tn=null,st=1,lt="";function Bt(e,t){xn[Sn++]=eo,xn[Sn++]=Ji,Ji=e,eo=t}function sf(e,t,n){Ie[De++]=st,Ie[De++]=lt,Ie[De++]=tn,tn=e;var r=st;e=lt;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,st=1<<32-Qe(t)+i|n<<i|r,lt=o+e}else st=1<<o|n<<i|r,lt=e}function da(e){e.return!==null&&(Bt(e,1),sf(e,1,0))}function fa(e){for(;e===Ji;)Ji=xn[--Sn],xn[Sn]=null,eo=xn[--Sn],xn[Sn]=null;for(;e===tn;)tn=Ie[--De],Ie[De]=null,lt=Ie[--De],Ie[De]=null,st=Ie[--De],Ie[De]=null}var ze=null,Oe=null,q=!1,Be=null;function lf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Oe=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:st,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Oe=null,!0):!1;default:return!1}}function ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cl(e){if(q){var t=Oe;if(t){var n=t;if(!Yu(e,t)){if(ul(e))throw Error(S(418));t=zt(n.nextSibling);var r=ze;t&&Yu(e,t)?lf(r,n):(e.flags=e.flags&-4097|2,q=!1,ze=e)}}else{if(ul(e))throw Error(S(418));e.flags=e.flags&-4097|2,q=!1,ze=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function hi(e){if(e!==ze)return!1;if(!q)return Zu(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Oe)){if(ul(e))throw af(),Error(S(418));for(;t;)lf(e,t),t=zt(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=ze?zt(e.stateNode.nextSibling):null;return!0}function af(){for(var e=Oe;e;)e=zt(e.nextSibling)}function jn(){Oe=ze=null,q=!1}function pa(e){Be===null?Be=[e]:Be.push(e)}var Zh=pt.ReactCurrentBatchConfig;function Fe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var to=jt(null),no=null,Nn=null,ma=null;function ya(){ma=Nn=no=null}function ha(e){var t=to.current;L(to),e._currentValue=t}function dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){no=e,ma=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(ma!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(no===null)throw Error(S(308));Nn=e,no.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Gt=null;function ga(e){Gt===null?Gt=[e]:Gt.push(e)}function uf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ra(e,n)}}function Ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,c=u=a=null,l=o;do{var d=l.lane,g=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,v=l;switch(d=t,g=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){f=h.call(g,f,d);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,d=typeof h=="function"?h.call(g,f,d):h,d==null)break e;f=V({},f,d);break e;case 2:wt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=f):c=c.next=g,s|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rn|=s,e.lanes=s,e.memoizedState=f}}function ec(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var df=new ad.Component().refs;function fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=At(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(Ge(t,e,i,r),bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=At(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(Ge(t,e,i,r),bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=At(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(Ge(t,e,r,n),bi(t,e,r))}};function tc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,o):!0}function ff(e,t,n){var r=!1,i=Dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=Ne(t)?en:pe.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):Dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function pl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=df,va(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=Ne(t)?en:pe.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ao.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===df&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function pf(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Mt(m,p),m.index=0,m.sibling=null,m}function o(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,y,w){return p===null||p.tag!==6?(p=ws(y,m.mode,w),p.return=m,p):(p=i(p,y),p.return=m,p)}function a(m,p,y,w){var x=y.type;return x===mn?c(m,p,y.props.children,w,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vt&&rc(x)===p.type)?(w=i(p,y.props),w.ref=or(m,p,y),w.return=m,w):(w=Ui(y.type,y.key,y.props,null,m.mode,w),w.ref=or(m,p,y),w.return=m,w)}function u(m,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=xs(y,m.mode,w),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,w,x){return p===null||p.tag!==7?(p=Zt(y,m.mode,w,x),p.return=m,p):(p=i(p,y),p.return=m,p)}function f(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ws(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case si:return y=Ui(p.type,p.key,p.props,null,m.mode,y),y.ref=or(m,null,p),y.return=m,y;case pn:return p=xs(p,m.mode,y),p.return=m,p;case vt:var w=p._init;return f(m,w(p._payload),y)}if(cr(p)||er(p))return p=Zt(p,m.mode,y,null),p.return=m,p;gi(m,p)}return null}function d(m,p,y,w){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:l(m,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case si:return y.key===x?a(m,p,y,w):null;case pn:return y.key===x?u(m,p,y,w):null;case vt:return x=y._init,d(m,p,x(y._payload),w)}if(cr(y)||er(y))return x!==null?null:c(m,p,y,w,null);gi(m,y)}return null}function g(m,p,y,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,l(p,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case si:return m=m.get(w.key===null?y:w.key)||null,a(p,m,w,x);case pn:return m=m.get(w.key===null?y:w.key)||null,u(p,m,w,x);case vt:var E=w._init;return g(m,p,y,E(w._payload),x)}if(cr(w)||er(w))return m=m.get(y)||null,c(p,m,w,x,null);gi(p,w)}return null}function h(m,p,y,w){for(var x=null,E=null,P=p,O=p=0,b=null;P!==null&&O<y.length;O++){P.index>O?(b=P,P=null):b=P.sibling;var z=d(m,P,y[O],w);if(z===null){P===null&&(P=b);break}e&&P&&z.alternate===null&&t(m,P),p=o(z,p,O),E===null?x=z:E.sibling=z,E=z,P=b}if(O===y.length)return n(m,P),q&&Bt(m,O),x;if(P===null){for(;O<y.length;O++)P=f(m,y[O],w),P!==null&&(p=o(P,p,O),E===null?x=P:E.sibling=P,E=P);return q&&Bt(m,O),x}for(P=r(m,P);O<y.length;O++)b=g(P,m,O,y[O],w),b!==null&&(e&&b.alternate!==null&&P.delete(b.key===null?O:b.key),p=o(b,p,O),E===null?x=b:E.sibling=b,E=b);return e&&P.forEach(function(X){return t(m,X)}),q&&Bt(m,O),x}function v(m,p,y,w){var x=er(y);if(typeof x!="function")throw Error(S(150));if(y=x.call(y),y==null)throw Error(S(151));for(var E=x=null,P=p,O=p=0,b=null,z=y.next();P!==null&&!z.done;O++,z=y.next()){P.index>O?(b=P,P=null):b=P.sibling;var X=d(m,P,z.value,w);if(X===null){P===null&&(P=b);break}e&&P&&X.alternate===null&&t(m,P),p=o(X,p,O),E===null?x=X:E.sibling=X,E=X,P=b}if(z.done)return n(m,P),q&&Bt(m,O),x;if(P===null){for(;!z.done;O++,z=y.next())z=f(m,z.value,w),z!==null&&(p=o(z,p,O),E===null?x=z:E.sibling=z,E=z);return q&&Bt(m,O),x}for(P=r(m,P);!z.done;O++,z=y.next())z=g(P,m,O,z.value,w),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?O:z.key),p=o(z,p,O),E===null?x=z:E.sibling=z,E=z);return e&&P.forEach(function(Zn){return t(m,Zn)}),q&&Bt(m,O),x}function N(m,p,y,w){if(typeof y=="object"&&y!==null&&y.type===mn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case si:e:{for(var x=y.key,E=p;E!==null;){if(E.key===x){if(x=y.type,x===mn){if(E.tag===7){n(m,E.sibling),p=i(E,y.props.children),p.return=m,m=p;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vt&&rc(x)===E.type){n(m,E.sibling),p=i(E,y.props),p.ref=or(m,E,y),p.return=m,m=p;break e}n(m,E);break}else t(m,E);E=E.sibling}y.type===mn?(p=Zt(y.props.children,m.mode,w,y.key),p.return=m,m=p):(w=Ui(y.type,y.key,y.props,null,m.mode,w),w.ref=or(m,p,y),w.return=m,m=w)}return s(m);case pn:e:{for(E=y.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=xs(y,m.mode,w),p.return=m,m=p}return s(m);case vt:return E=y._init,N(m,p,E(y._payload),w)}if(cr(y))return h(m,p,y,w);if(er(y))return v(m,p,y,w);gi(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=ws(y,m.mode,w),p.return=m,m=p),s(m)):n(m,p)}return N}var Ln=pf(!0),mf=pf(!1),ei={},nt=jt(ei),Lr=jt(ei),Ur=jt(ei);function Xt(e){if(e===ei)throw Error(S(174));return e}function wa(e,t){switch($(Ur,t),$(Lr,e),$(nt,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bs(t,e)}L(nt),$(nt,t)}function Un(){L(nt),L(Lr),L(Ur)}function yf(e){Xt(Ur.current);var t=Xt(nt.current),n=Bs(t,e.type);t!==n&&($(Lr,e),$(nt,n))}function xa(e){Lr.current===e&&(L(nt),L(Lr))}var H=jt(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function Sa(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Ii=pt.ReactCurrentDispatcher,ms=pt.ReactCurrentBatchConfig,nn=0,F=null,Z=null,te=null,oo=!1,xr=!1,qr=0,Jh=0;function ue(){throw Error(S(321))}function Na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Pa(e,t,n,r,i,o){if(nn=o,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?rg:ig,e=n(r,i),xr){o=0;do{if(xr=!1,qr=0,25<=o)throw Error(S(301));o+=1,te=Z=null,t.updateQueue=null,Ii.current=og,e=n(r,i)}while(xr)}if(Ii.current=so,t=Z!==null&&Z.next!==null,nn=0,te=Z=F=null,oo=!1,t)throw Error(S(300));return e}function Ea(){var e=qr!==0;return qr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?F.memoizedState=te=e:te=te.next=e,te}function Ue(){if(Z===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?F.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?F.memoizedState=te=e:te=te.next=e}return te}function Hr(e,t){return typeof t=="function"?t(e):t}function ys(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if((nn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,F.lanes|=c,rn|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Xe(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,F.lanes|=o,rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Xe(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hf(){}function gf(e,t){var n=F,r=Ue(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,Ca(xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Fr(9,wf.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(S(349));nn&30||vf(n,t,i)}return i}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wf(e,t,n,r){t.value=n,t.getSnapshot=r,Sf(t)&&Nf(e)}function xf(e,t,n){return n(function(){Sf(t)&&Nf(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Nf(e){var t=dt(e,1);t!==null&&Ge(t,e,1,-1)}function ic(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=ng.bind(null,F,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pf(){return Ue().memoizedState}function Di(e,t,n,r){var i=Je();F.flags|=e,i.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(Z!==null){var s=Z.memoizedState;if(o=s.destroy,r!==null&&Na(r,s.deps)){i.memoizedState=Fr(t,n,o,r);return}}F.flags|=e,i.memoizedState=Fr(1|t,n,o,r)}function oc(e,t){return Di(8390656,8,e,t)}function Ca(e,t){return Mo(2048,8,e,t)}function Ef(e,t){return Mo(4,2,e,t)}function Cf(e,t){return Mo(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,Tf.bind(null,t,e),n)}function Ta(){}function Of(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rf(e,t,n){return nn&21?(Xe(n,t)||(n=Ad(),F.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function eg(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ms.transition;ms.transition={};try{e(!1),t()}finally{D=n,ms.transition=r}}function _f(){return Ue().memoizedState}function tg(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Mf(t,n);else if(n=uf(e,t,n,r),n!==null){var i=ye();Ge(n,e,r,i),bf(n,t,r)}}function ng(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Mf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Xe(l,s)){var a=t.interleaved;a===null?(i.next=i,ga(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=uf(e,t,i,r),n!==null&&(i=ye(),Ge(n,e,r,i),bf(n,t,r))}}function Af(e){var t=e.alternate;return e===F||t!==null&&t===F}function Mf(e,t){xr=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ra(e,n)}}var so={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},rg={readContext:Le,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Di(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){return Di(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tg.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Ta,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=eg.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,i=Je();if(q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));nn&30||vf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,oc(xf.bind(null,r,o,e),[e]),r.flags|=2048,Fr(9,wf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=ne.identifierPrefix;if(q){var n=lt,r=st;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:Le,useCallback:Of,useContext:Le,useEffect:Ca,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Cf,useMemo:zf,useReducer:ys,useRef:Pf,useState:function(){return ys(Hr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ue();return Rf(t,Z.memoizedState,e)},useTransition:function(){var e=ys(Hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1},og={readContext:Le,useCallback:Of,useContext:Le,useEffect:Ca,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Cf,useMemo:zf,useReducer:hs,useRef:Pf,useState:function(){return hs(Hr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ue();return Z===null?t.memoizedState=e:Rf(t,Z.memoizedState,e)},useTransition:function(){var e=hs(Hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1};function qn(e,t){try{var n="",r=t;do n+=My(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ml(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sg=typeof WeakMap=="function"?WeakMap:Map;function If(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ao||(ao=!0,El=r),ml(e,t)},n}function Df(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ml(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ml(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xg.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var lg=pt.ReactCurrentOwner,xe=!1;function me(e,t,n,r){t.child=e===null?mf(t,null,n,r):Ln(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var o=t.ref;return zn(t,i),r=Pa(e,t,n,r,o,i),n=Ea(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(q&&n&&da(t),t.flags|=1,me(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ba(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$f(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(s,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=Mt(o,r),e.ref=t.ref,e.return=t,t.child=e}function $f(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ir(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ft(e,t,i)}return yl(e,t,n,r,i)}function jf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(En,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(En,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(En,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(En,ke),ke|=r;return me(e,t,i,n),t.child}function Lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,n,r,i){var o=Ne(n)?en:pe.current;return o=$n(t,o),zn(t,i),n=Pa(e,t,n,r,o,i),r=Ea(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(q&&r&&da(t),t.flags|=1,me(e,t,n,i),t.child)}function dc(e,t,n,r,i){if(Ne(n)){var o=!0;Zi(t)}else o=!1;if(zn(t,i),t.stateNode===null)$i(e,t),ff(t,n,r),pl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=Ne(n)?en:pe.current,u=$n(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&nc(t,s,r,u),wt=!1;var d=t.memoizedState;s.state=d,ro(t,r,s,i),a=t.memoizedState,l!==r||d!==a||Se.current||wt?(typeof c=="function"&&(fl(t,n,c,r),a=t.memoizedState),(l=wt||tc(t,n,l,r,d,a,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Fe(t.type,l),s.props=u,f=t.pendingProps,d=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=Ne(n)?en:pe.current,a=$n(t,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||d!==a)&&nc(t,s,r,a),wt=!1,d=t.memoizedState,s.state=d,ro(t,r,s,i);var h=t.memoizedState;l!==f||d!==h||Se.current||wt?(typeof g=="function"&&(fl(t,n,g,r),h=t.memoizedState),(u=wt||tc(t,n,u,r,d,h,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return hl(e,t,n,r,o,i)}function hl(e,t,n,r,i,o){Lf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Xu(t,n,!1),ft(e,t,o);r=t.stateNode,lg.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ln(t,e.child,null,o),t.child=Ln(t,null,l,o)):me(e,t,l,o),t.memoizedState=r.state,i&&Xu(t,n,!0),t.child}function Uf(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),wa(e,t.containerInfo)}function fc(e,t,n,r,i){return jn(),pa(i),t.flags|=256,me(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(H,i&1),e===null)return cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Do(s,r,0,null),e=Zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vl(n),t.memoizedState=gl,e):ka(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ag(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Mt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Mt(l,o):(o=Zt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?vl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return o=e.child,e=o.sibling,r=Mt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ka(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&pa(r),Ln(t,e.child,null,n),e=ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=gs(Error(S(422))),vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=Zt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ln(t,e.child,null,s),t.child.memoizedState=vl(s),t.memoizedState=gl,o);if(!(t.mode&1))return vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(S(419)),r=gs(o,r,void 0),vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,xe||l){if(r=ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),Ge(r,e,i,-1))}return Ma(),r=gs(Error(S(421))),vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Oe=zt(i.nextSibling),ze=t,q=!0,Be=null,e!==null&&(Ie[De++]=st,Ie[De++]=lt,Ie[De++]=tn,st=e.id,lt=e.overflow,tn=t),t=ka(t,r.children),t.flags|=4096,t)}function pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dl(e.return,t,n)}function vs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pc(e,n,t);else if(e.tag===19)pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vs(t,!0,n,null,o);break;case"together":vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ug(e,t,n){switch(t.tag){case 3:Uf(t),jn();break;case 5:yf(t);break;case 1:Ne(t.type)&&Zi(t);break;case 4:wa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(to,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?qf(e,t,n):($(H,H.current&1),e=ft(e,t,n),e!==null?e.sibling:null);$(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,jf(e,t,n)}return ft(e,t,n)}var Ff,wl,Vf,Bf;Ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wl=function(){};Vf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(nt.current);var o=null;switch(n){case"input":i=qs(e,i),r=qs(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=Vs(e,i),r=Vs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xi)}Ks(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&j("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cg(e,t,n){var r=t.pendingProps;switch(fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ne(t.type)&&Yi(),ce(t),null;case 3:return r=t.stateNode,Un(),L(Se),L(pe),Sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(kl(Be),Be=null))),wl(e,t),ce(t),null;case 5:xa(t);var i=Xt(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Vf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Xt(nt.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[jr]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)j(fr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Nu(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":Eu(r,o),j("invalid",r)}Ks(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&yi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&yi(r.textContent,l,e),i=["children",""+l]):Or.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":li(r),Pu(r,o,!0);break;case"textarea":li(r),Cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[et]=t,e[jr]=r,Ff(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ws(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)j(fr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Nu(e,r),i=qs(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),j("invalid",e);break;case"textarea":Eu(e,r),i=Vs(e,r),j("invalid",e);break;default:i=r}Ks(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?xd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vd(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zr(e,a):typeof a=="number"&&zr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Or.hasOwnProperty(o)?a!=null&&o==="onScroll"&&j("scroll",e):a!=null&&Yl(e,o,a,s))}switch(n){case"input":li(e),Pu(e,r,!1);break;case"textarea":li(e),Cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Xt(Ur.current),Xt(nt.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return ce(t),null;case 13:if(L(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Oe!==null&&t.mode&1&&!(t.flags&128))af(),jn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[et]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Be!==null&&(kl(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):Ma())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Un(),wl(e,t),e===null&&Dr(t.stateNode.containerInfo),ce(t),null;case 10:return ha(t.type._context),ce(t),null;case 17:return Ne(t.type)&&Yi(),ce(t),null;case 19:if(L(H),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=io(e),s!==null){for(t.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Hn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=io(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ce(t),null}else 2*Q()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=H.current,$(H,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Aa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function dg(e,t){switch(fa(t),t.tag){case 1:return Ne(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),L(Se),L(pe),Sa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(L(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(H),null;case 4:return Un(),null;case 10:return ha(t.type._context),null;case 22:case 23:return Aa(),null;case 24:return null;default:return null}}var wi=!1,de=!1,fg=typeof WeakSet=="function"?WeakSet:Set,C=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){B(e,t,r)}}var mc=!1;function pg(e,t){if(rl=Wi,e=Qd(),ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(l=s),d===o&&++c===r&&(a=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(il={focusedElem:e,selectionRange:n},Wi=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,N=h.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Fe(t.type,v),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){B(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return h=mc,mc=!1,h}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xl(t,n,o)}i=i.next}while(i!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[jr],delete t[ll],delete t[Gh],delete t[Xh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}var oe=null,Ve=!1;function ht(e,t,n){for(n=n.child;n!==null;)Qf(e,t,n),n=n.sibling}function Qf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:de||Pn(n,t);case 6:var r=oe,i=Ve;oe=null,ht(e,t,n),oe=r,Ve=i,oe!==null&&(Ve?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ve?(e=oe,n=n.stateNode,e.nodeType===8?ds(e.parentNode,n):e.nodeType===1&&ds(e,n),Mr(e)):ds(oe,n.stateNode));break;case 4:r=oe,i=Ve,oe=n.stateNode.containerInfo,Ve=!0,ht(e,t,n),oe=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xl(n,t,s),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!de&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){B(n,t,l)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ht(e,t,n),de=r):ht(e,t,n);break;default:ht(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fg),t.forEach(function(r){var i=Ng.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,Ve=!1;break e;case 3:oe=l.stateNode.containerInfo,Ve=!0;break e;case 4:oe=l.stateNode.containerInfo,Ve=!0;break e}l=l.return}if(oe===null)throw Error(S(160));Qf(o,s,i),oe=null,Ve=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){B(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),r&4){try{Sr(3,e,e.return),bo(3,e)}catch(v){B(e,e.return,v)}try{Sr(5,e,e.return)}catch(v){B(e,e.return,v)}}break;case 1:He(t,e),Ze(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(He(t,e),Ze(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(v){B(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&yd(i,o),Ws(l,s);var u=Ws(l,o);for(s=0;s<a.length;s+=2){var c=a[s],f=a[s+1];c==="style"?xd(i,f):c==="dangerouslySetInnerHTML"?vd(i,f):c==="children"?zr(i,f):Yl(i,c,f,u)}switch(l){case"input":Hs(i,o);break;case"textarea":hd(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Cn(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?Cn(i,!!o.multiple,o.defaultValue,!0):Cn(i,!!o.multiple,o.multiple?[]:"",!1))}i[jr]=o}catch(v){B(e,e.return,v)}}break;case 6:if(He(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){B(e,e.return,v)}}break;case 3:if(He(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(v){B(e,e.return,v)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ra=Q())),r&4&&hc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||c,He(t,e),de=u):He(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(C=e,c=e.child;c!==null;){for(f=C=c;C!==null;){switch(d=C,g=d.child,d.tag){case 0:case 11:case 14:case 15:Sr(4,d,d.return);break;case 1:Pn(d,d.return);var h=d.stateNode;if(typeof h.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){B(r,n,v)}}break;case 5:Pn(d,d.return);break;case 22:if(d.memoizedState!==null){vc(f);continue}}g!==null?(g.return=d,C=g):vc(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=wd("display",s))}catch(v){B(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){B(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:He(t,e),Ze(e),r&4&&hc(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var o=yc(e);Pl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=yc(e);Nl(e,l,s);break;default:throw Error(S(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mg(e,t,n){C=e,Xf(e)}function Xf(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||wi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||de;l=wi;var u=de;if(wi=s,(de=a)&&!u)for(C=i;C!==null;)s=C,a=s.child,s.tag===22&&s.memoizedState!==null?wc(i):a!==null?(a.return=s,C=a):wc(i);for(;o!==null;)C=o,Xf(o),o=o.sibling;C=i,wi=l,de=u}gc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):gc(e)}}function gc(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ec(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ec(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Mr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Sl(t)}catch(d){B(t,t.return,d)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function vc(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function wc(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(a){B(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){B(t,i,a)}}var o=t.return;try{Sl(t)}catch(a){B(t,o,a)}break;case 5:var s=t.return;try{Sl(t)}catch(a){B(t,s,a)}}}catch(a){B(t,t.return,a)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var yg=Math.ceil,lo=pt.ReactCurrentDispatcher,Oa=pt.ReactCurrentOwner,je=pt.ReactCurrentBatchConfig,I=0,ne=null,G=null,le=0,ke=0,En=jt(0),J=0,Vr=null,rn=0,Io=0,za=0,Nr=null,we=null,Ra=0,Hn=1/0,it=null,ao=!1,El=null,_t=null,xi=!1,Et=null,uo=0,Pr=0,Cl=null,ji=-1,Li=0;function ye(){return I&6?Q():ji!==-1?ji:ji=Q()}function At(e){return e.mode&1?I&2&&le!==0?le&-le:Zh.transition!==null?(Li===0&&(Li=Ad()),Li):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function Ge(e,t,n,r){if(50<Pr)throw Pr=0,Cl=null,Error(S(185));Yr(e,n,r),(!(I&2)||e!==ne)&&(e===ne&&(!(I&2)&&(Io|=n),J===4&&St(e,le)),Pe(e,r),n===1&&I===0&&!(t.mode&1)&&(Hn=Q()+500,_o&&Lt()))}function Pe(e,t){var n=e.callbackNode;Zy(e,t);var r=Ki(e,e===ne?le:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?Yh(xc.bind(null,e)):of(xc.bind(null,e)),Wh(function(){!(I&6)&&Lt()}),n=null;else{switch(Md(r)){case 1:n=na;break;case 4:n=Rd;break;case 16:n=Bi;break;case 536870912:n=_d;break;default:n=Bi}n=ip(n,Yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yf(e,t){if(ji=-1,Li=0,I&6)throw Error(S(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Ki(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=I;I|=2;var o=Jf();(ne!==e||le!==t)&&(it=null,Hn=Q()+500,Yt(e,t));do try{vg();break}catch(l){Zf(e,l)}while(1);ya(),lo.current=o,I=i,G!==null?t=0:(ne=null,le=0,t=J)}if(t!==0){if(t===2&&(i=Zs(e),i!==0&&(r=i,t=Tl(e,i))),t===1)throw n=Vr,Yt(e,0),St(e,r),Pe(e,Q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!hg(i)&&(t=co(e,r),t===2&&(o=Zs(e),o!==0&&(r=o,t=Tl(e,o))),t===1))throw n=Vr,Yt(e,0),St(e,r),Pe(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Kt(e,we,it);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Ra+500-Q(),10<t)){if(Ki(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sl(Kt.bind(null,e,we,it),t);break}Kt(e,we,it);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Qe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yg(r/1960))-r,10<r){e.timeoutHandle=sl(Kt.bind(null,e,we,it),r);break}Kt(e,we,it);break;case 5:Kt(e,we,it);break;default:throw Error(S(329))}}}return Pe(e,Q()),e.callbackNode===n?Yf.bind(null,e):null}function Tl(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=co(e,t),e!==2&&(t=we,we=n,t!==null&&kl(t)),e}function kl(e){we===null?we=e:we.push.apply(we,e)}function hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~za,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function xc(e){if(I&6)throw Error(S(327));Rn();var t=Ki(e,0);if(!(t&1))return Pe(e,Q()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=Zs(e);r!==0&&(t=r,n=Tl(e,r))}if(n===1)throw n=Vr,Yt(e,0),St(e,t),Pe(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,we,it),Pe(e,Q()),null}function _a(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Hn=Q()+500,_o&&Lt())}}function on(e){Et!==null&&Et.tag===0&&!(I&6)&&Rn();var t=I;I|=1;var n=je.transition,r=D;try{if(je.transition=null,D=1,e)return e()}finally{D=r,je.transition=n,I=t,!(I&6)&&Lt()}}function Aa(){ke=En.current,L(En)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kh(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Un(),L(Se),L(pe),Sa();break;case 5:xa(r);break;case 4:Un();break;case 13:L(H);break;case 19:L(H);break;case 10:ha(r.type._context);break;case 22:case 23:Aa()}n=n.return}if(ne=e,G=e=Mt(e.current,null),le=ke=t,J=0,Vr=null,za=Io=rn=0,we=Nr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Gt=null}return e}function Zf(e,t){do{var n=G;try{if(ya(),Ii.current=so,oo){for(var r=F.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(nn=0,te=Z=F=null,xr=!1,qr=0,Oa.current=null,n===null||n.return===null){J=1,Vr=t,G=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=le,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=lc(s);if(g!==null){g.flags&=-257,ac(g,s,l,o,t),g.mode&1&&sc(o,u,t),t=g,a=u;var h=t.updateQueue;if(h===null){var v=new Set;v.add(a),t.updateQueue=v}else h.add(a);break e}else{if(!(t&1)){sc(o,u,t),Ma();break e}a=Error(S(426))}}else if(q&&l.mode&1){var N=lc(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ac(N,s,l,o,t),pa(qn(a,l));break e}}o=a=qn(a,l),J!==4&&(J=2),Nr===null?Nr=[o]:Nr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=If(o,a,t);Ju(o,m);break e;case 1:l=a;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_t===null||!_t.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Df(o,l,t);Ju(o,w);break e}}o=o.return}while(o!==null)}tp(n)}catch(x){t=x,G===n&&n!==null&&(G=n=n.return);continue}break}while(1)}function Jf(){var e=lo.current;return lo.current=so,e===null?so:e}function Ma(){(J===0||J===3||J===2)&&(J=4),ne===null||!(rn&268435455)&&!(Io&268435455)||St(ne,le)}function co(e,t){var n=I;I|=2;var r=Jf();(ne!==e||le!==t)&&(it=null,Yt(e,t));do try{gg();break}catch(i){Zf(e,i)}while(1);if(ya(),I=n,lo.current=r,G!==null)throw Error(S(261));return ne=null,le=0,J}function gg(){for(;G!==null;)ep(G)}function vg(){for(;G!==null&&!Fy();)ep(G)}function ep(e){var t=rp(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?tp(e):G=t,Oa.current=null}function tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dg(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=cg(n,t,ke),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Kt(e,t,n){var r=D,i=je.transition;try{je.transition=null,D=1,wg(e,t,n,r)}finally{je.transition=i,D=r}return null}function wg(e,t,n,r){do Rn();while(Et!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jy(e,o),e===ne&&(G=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,ip(Bi,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var s=D;D=1;var l=I;I|=4,Oa.current=null,pg(e,n),Gf(n,e),Lh(il),Wi=!!rl,il=rl=null,e.current=n,mg(n),Vy(),I=l,D=s,je.transition=o}else e.current=n;if(xi&&(xi=!1,Et=e,uo=i),o=e.pendingLanes,o===0&&(_t=null),Wy(n.stateNode),Pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ao)throw ao=!1,e=El,El=null,e;return uo&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===Cl?Pr++:(Pr=0,Cl=e):Pr=0,Lt(),null}function Rn(){if(Et!==null){var e=Md(uo),t=je.transition,n=D;try{if(je.transition=null,D=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,uo=0,I&6)throw Error(S(331));var i=I;for(I|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:Sr(8,c,o)}var f=c.child;if(f!==null)f.return=c,C=f;else for(;C!==null;){c=C;var d=c.sibling,g=c.return;if(Kf(c),c===u){C=null;break}if(d!==null){d.return=g,C=d;break}C=g}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,C=m;break e}C=o.return}}var p=e.current;for(C=p;C!==null;){s=C;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,C=y;else e:for(s=p;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bo(9,l)}}catch(x){B(l,l.return,x)}if(l===s){C=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,C=w;break e}C=l.return}}if(I=i,Lt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{D=n,je.transition=t}}return!1}function Sc(e,t,n){t=qn(n,t),t=If(e,t,1),e=Rt(e,t,1),t=ye(),e!==null&&(Yr(e,1,t),Pe(e,t))}function B(e,t,n){if(e.tag===3)Sc(e,e,n);else for(;t!==null;){if(t.tag===3){Sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=qn(n,e),e=Df(t,e,1),t=Rt(t,e,1),e=ye(),t!==null&&(Yr(t,1,e),Pe(t,e));break}}t=t.return}}function xg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(J===4||J===3&&(le&130023424)===le&&500>Q()-Ra?Yt(e,0):za|=n),Pe(e,t)}function np(e,t){t===0&&(e.mode&1?(t=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(Yr(e,t,n),Pe(e,n))}function Sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),np(e,n)}function Ng(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),np(e,n)}var rp;rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,ug(e,t,n);xe=!!(e.flags&131072)}else xe=!1,q&&t.flags&1048576&&sf(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=$n(t,pe.current);zn(t,n),i=Pa(null,t,r,e,i,n);var o=Ea();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,Zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,va(t),i.updater=Ao,t.stateNode=i,i._reactInternals=t,pl(t,r,e,n),t=hl(null,t,r,!0,o,n)):(t.tag=0,q&&o&&da(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Eg(r),e=Fe(r,e),i){case 0:t=yl(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=uc(null,t,r,e,n);break e;case 14:t=cc(null,t,r,Fe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),dc(e,t,r,i,n);case 3:e:{if(Uf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cf(e,t),ro(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qn(Error(S(423)),t),t=fc(e,t,r,n,i);break e}else if(r!==i){i=qn(Error(S(424)),t),t=fc(e,t,r,n,i);break e}else for(Oe=zt(t.stateNode.containerInfo.firstChild),ze=t,q=!0,Be=null,n=mf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===i){t=ft(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return yf(t),e===null&&cl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ol(r,i)?s=null:o!==null&&ol(r,o)&&(t.flags|=32),Lf(e,t),me(e,t,s,n),t.child;case 6:return e===null&&cl(t),null;case 13:return qf(e,t,n);case 4:return wa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ln(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),uc(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$(to,r._currentValue),r._currentValue=s,o!==null)if(Xe(o.value,s)){if(o.children===i.children&&!Se.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=at(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=Le(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),cc(e,t,r,i,n);case 15:return $f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),$i(e,t),t.tag=1,Ne(r)?(e=!0,Zi(t)):e=!1,zn(t,n),ff(t,r,i),pl(t,r,i,n),hl(null,t,r,!0,e,n);case 19:return Hf(e,t,n);case 22:return jf(e,t,n)}throw Error(S(156,t.tag))};function ip(e,t){return zd(e,t)}function Pg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Pg(e,t,n,r)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===ea)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ba(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mn:return Zt(n.children,i,o,t);case Zl:s=8,i|=8;break;case $s:return e=$e(12,n,t,i|2),e.elementType=$s,e.lanes=o,e;case js:return e=$e(13,n,t,i),e.elementType=js,e.lanes=o,e;case Ls:return e=$e(19,n,t,i),e.elementType=Ls,e.lanes=o,e;case fd:return Do(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:s=10;break e;case dd:s=9;break e;case Jl:s=11;break e;case ea:s=14;break e;case vt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=$e(22,e,r,t),e.elementType=fd,e.lanes=n,e.stateNode={isHidden:!1},e}function ws(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function xs(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ia(e,t,n,r,i,o,s,l,a){return e=new Cg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(o),e}function Tg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function op(e){if(!e)return Dt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return rf(e,n,t)}return t}function sp(e,t,n,r,i,o,s,l,a){return e=Ia(n,r,!0,e,i,o,s,l,a),e.context=op(null),n=e.current,r=ye(),i=At(n),o=at(r,i),o.callback=t??null,Rt(n,o,i),e.current.lanes=i,Yr(e,i,r),Pe(e,r),e}function $o(e,t,n,r){var i=t.current,o=ye(),s=At(i);return n=op(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,s),e!==null&&(Ge(e,i,s,o),bi(e,i,s)),s}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Da(e,t){Nc(e,t),(e=e.alternate)&&Nc(e,t)}function kg(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}jo.prototype.render=$a.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));$o(e,t,null,null)};jo.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){$o(null,e,null,null)}),t[ct]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&jd(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function Og(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fo(s);o.call(u)}}var s=sp(t,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=s,e[ct]=s.current,Dr(e.nodeType===8?e.parentNode:e),on(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=fo(a);l.call(u)}}var a=Ia(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=a,e[ct]=a.current,Dr(e.nodeType===8?e.parentNode:e),on(function(){$o(t,a,n,r)}),a}function Uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=fo(s);l.call(a)}}$o(t,s,e,i)}else s=Og(n,t,e,i,r);return fo(s)}bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(ra(t,n|1),Pe(t,Q()),!(I&6)&&(Hn=Q()+500,Lt()))}break;case 13:on(function(){var r=dt(e,1);if(r!==null){var i=ye();Ge(r,e,1,i)}}),Da(e,1)}};ia=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}Da(e,134217728)}};Id=function(e){if(e.tag===13){var t=At(e),n=dt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}Da(e,t)}};Dd=function(){return D};$d=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Gs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ro(r);if(!i)throw Error(S(90));md(r),Hs(r,i)}}}break;case"textarea":hd(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};Pd=_a;Ed=on;var zg={usingClientEntryPoint:!1,Events:[Jr,vn,Ro,Sd,Nd,_a]},lr={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rg={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{To=Si.inject(Rg),tt=Si}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(t))throw Error(S(200));return Tg(e,t,null,n)};Ae.createRoot=function(e,t){if(!ja(e))throw Error(S(299));var n=!1,r="",i=lp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ia(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,Dr(e.nodeType===8?e.parentNode:e),new $a(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return on(e)};Ae.hydrate=function(e,t,n){if(!Lo(t))throw Error(S(200));return Uo(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!ja(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sp(t,null,e,1,n??null,i,!1,o,s),e[ct]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};Ae.render=function(e,t,n){if(!Lo(t))throw Error(S(200));return Uo(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(S(40));return e._reactRootContainer?(on(function(){Uo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Ae.unstable_batchedUpdates=_a;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Uo(e,t,n,!1,r)};Ae.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ae})(ky);var Ec=bs;Ms.createRoot=Ec.createRoot,Ms.hydrateRoot=Ec.hydrateRoot;function Ke(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function sn(e){return!!e&&!!e[U]}function ln(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Lg}(e)||Array.isArray(e)||!!e[_c]||!!(!((t=e.constructor)===null||t===void 0)&&t[_c])||La(e)||Ua(e))}function an(e,t,n){n===void 0&&(n=!1),Wn(e)===0?(n?Object.keys:An)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Wn(e){var t=e[U];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:La(e)?2:Ua(e)?3:0}function _n(e,t){return Wn(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _g(e,t){return Wn(e)===2?e.get(t):e[t]}function ap(e,t,n){var r=Wn(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function up(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function La(e){return $g&&e instanceof Map}function Ua(e){return jg&&e instanceof Set}function Wt(e){return e.o||e.t}function qa(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=dp(e);delete t[U];for(var n=An(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ha(e,t){return t===void 0&&(t=!1),Fa(e)||sn(e)||!ln(e)||(Wn(e)>1&&(e.set=e.add=e.clear=e.delete=Ag),Object.freeze(e),t&&an(e,function(n,r){return Ha(r,!0)},!0)),e}function Ag(){Ke(2)}function Fa(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function rt(e){var t=_l[e];return t||Ke(18,e),t}function Mg(e,t){_l[e]||(_l[e]=t)}function Ol(){return Br}function Ss(e,t){t&&(rt("Patches"),e.u=[],e.s=[],e.v=t)}function po(e){zl(e),e.p.forEach(bg),e.p=null}function zl(e){e===Br&&(Br=e.l)}function Cc(e){return Br={p:[],l:Br,h:e,m:!0,_:0}}function bg(e){var t=e[U];t.i===0||t.i===1?t.j():t.g=!0}function Ns(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||rt("ES5").S(t,e,r),r?(n[U].P&&(po(t),Ke(4)),ln(e)&&(e=mo(t,e),t.l||yo(t,e)),t.u&&rt("Patches").M(n[U].t,e,t.u,t.s)):e=mo(t,n,[]),po(t),t.u&&t.v(t.u,t.s),e!==cp?e:void 0}function mo(e,t,n){if(Fa(t))return t;var r=t[U];if(!r)return an(t,function(l,a){return Tc(e,r,t,l,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return yo(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=qa(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),an(o,function(l,a){return Tc(e,r,i,l,a,n,s)}),yo(e,i,!1),n&&e.u&&rt("Patches").N(r,n,e.u,e.s)}return r.o}function Tc(e,t,n,r,i,o,s){if(sn(i)){var l=mo(e,i,o&&t&&t.i!==3&&!_n(t.R,r)?o.concat(r):void 0);if(ap(n,r,l),!sn(l))return;e.m=!1}else s&&n.add(i);if(ln(i)&&!Fa(i)){if(!e.h.D&&e._<1)return;mo(e,i),t&&t.A.l||yo(e,i)}}function yo(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Ha(t,n)}function Ps(e,t){var n=e[U];return(n?Wt(n):e)[t]}function kc(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Nt(e){e.P||(e.P=!0,e.l&&Nt(e.l))}function Es(e){e.o||(e.o=qa(e.t))}function Rl(e,t,n){var r=La(t)?rt("MapSet").F(t,n):Ua(t)?rt("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),l={i:s?1:0,A:o?o.A:Ol(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},a=l,u=Kr;s&&(a=[l],u=pr);var c=Proxy.revocable(a,u),f=c.revoke,d=c.proxy;return l.k=d,l.j=f,d}(t,n):rt("ES5").J(t,n);return(n?n.A:Ol()).p.push(r),r}function Ig(e){return sn(e)||Ke(22,e),function t(n){if(!ln(n))return n;var r,i=n[U],o=Wn(n);if(i){if(!i.P&&(i.i<4||!rt("ES5").K(i)))return i.t;i.I=!0,r=Oc(n,o),i.I=!1}else r=Oc(n,o);return an(r,function(s,l){i&&_g(i.t,s)===l||ap(r,s,t(l))}),o===3?new Set(r):r}(e)}function Oc(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return qa(e)}function Dg(){function e(o,s){var l=i[o];return l?l.enumerable=s:i[o]=l={configurable:!0,enumerable:s,get:function(){var a=this[U];return Kr.get(a,o)},set:function(a){var u=this[U];Kr.set(u,o,a)}},l}function t(o){for(var s=o.length-1;s>=0;s--){var l=o[s][U];if(!l.P)switch(l.i){case 5:r(l)&&Nt(l);break;case 4:n(l)&&Nt(l)}}}function n(o){for(var s=o.t,l=o.k,a=An(l),u=a.length-1;u>=0;u--){var c=a[u];if(c!==U){var f=s[c];if(f===void 0&&!_n(s,c))return!0;var d=l[c],g=d&&d[U];if(g?g.t!==f:!up(d,f))return!0}}var h=!!s[U];return a.length!==An(s).length+(h?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(s,s.length-1);if(l&&!l.get)return!0;for(var a=0;a<s.length;a++)if(!s.hasOwnProperty(a))return!0;return!1}var i={};Mg("ES5",{J:function(o,s){var l=Array.isArray(o),a=function(c,f){if(c){for(var d=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(d,""+g,e(g,!0));return d}var h=dp(f);delete h[U];for(var v=An(h),N=0;N<v.length;N++){var m=v[N];h[m]=e(m,c||!!h[m].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(l,o),u={i:l?5:4,A:s?s.A:Ol(),P:!1,I:!1,R:{},l:s,t:o,k:a,o:null,g:!1,C:!1};return Object.defineProperty(a,U,{value:u,writable:!0}),a},S:function(o,s,l){l?sn(s)&&s[U].A===o&&t(o.p):(o.u&&function a(u){if(u&&typeof u=="object"){var c=u[U];if(c){var f=c.t,d=c.k,g=c.R,h=c.i;if(h===4)an(d,function(y){y!==U&&(f[y]!==void 0||_n(f,y)?g[y]||a(d[y]):(g[y]=!0,Nt(c)))}),an(f,function(y){d[y]!==void 0||_n(d,y)||(g[y]=!1,Nt(c))});else if(h===5){if(r(c)&&(Nt(c),g.length=!0),d.length<f.length)for(var v=d.length;v<f.length;v++)g[v]=!1;else for(var N=f.length;N<d.length;N++)g[N]=!0;for(var m=Math.min(d.length,f.length),p=0;p<m;p++)d.hasOwnProperty(p)||(g[p]=!0),g[p]===void 0&&a(d[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var zc,Br,Va=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",$g=typeof Map<"u",jg=typeof Set<"u",Rc=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",cp=Va?Symbol.for("immer-nothing"):((zc={})["immer-nothing"]=!0,zc),_c=Va?Symbol.for("immer-draftable"):"__$immer_draftable",U=Va?Symbol.for("immer-state"):"__$immer_state",Lg=""+Object.prototype.constructor,An=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,dp=Object.getOwnPropertyDescriptors||function(e){var t={};return An(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},_l={},Kr={get:function(e,t){if(t===U)return e;var n=Wt(e);if(!_n(n,t))return function(i,o,s){var l,a=kc(o,s);return a?"value"in a?a.value:(l=a.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!ln(r)?r:r===Ps(e.t,t)?(Es(e),e.o[t]=Rl(e.A.h,r,e)):r},has:function(e,t){return t in Wt(e)},ownKeys:function(e){return Reflect.ownKeys(Wt(e))},set:function(e,t,n){var r=kc(Wt(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ps(Wt(e),t),o=i==null?void 0:i[U];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(up(n,i)&&(n!==void 0||_n(e.t,t)))return!0;Es(e),Nt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ps(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Es(e),Nt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Wt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ke(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ke(12)}},pr={};an(Kr,function(e,t){pr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),pr.deleteProperty=function(e,t){return pr.set.call(this,e,t,void 0)},pr.set=function(e,t,n){return Kr.set.call(this,e[0],t,n,e[0])};var Ug=function(){function e(n){var r=this;this.O=Rc,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var a=r;return function(v){var N=this;v===void 0&&(v=l);for(var m=arguments.length,p=Array(m>1?m-1:0),y=1;y<m;y++)p[y-1]=arguments[y];return a.produce(v,function(w){var x;return(x=o).call.apply(x,[N,w].concat(p))})}}var u;if(typeof o!="function"&&Ke(6),s!==void 0&&typeof s!="function"&&Ke(7),ln(i)){var c=Cc(r),f=Rl(r,i,void 0),d=!0;try{u=o(f),d=!1}finally{d?po(c):zl(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Ss(c,s),Ns(v,c)},function(v){throw po(c),v}):(Ss(c,s),Ns(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===cp&&(u=void 0),r.D&&Ha(u,!0),s){var g=[],h=[];rt("Patches").M(i,u,g,h),s(g,h)}return u}Ke(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(f))})};var s,l,a=r.produce(i,o,function(u,c){s=u,l=c});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,s,l]}):[a,s,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){ln(n)||Ke(8),sn(n)&&(n=Ig(n));var r=Cc(this),i=Rl(this,n,void 0);return i[U].C=!0,zl(r),i},t.finishDraft=function(n,r){var i=n&&n[U],o=i.A;return Ss(o,r),Ns(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Rc&&Ke(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=rt("Patches").$;return sn(n)?s(n,r):this.produce(n,function(l){return s(l,r)})},e}(),_e=new Ug;_e.produce;_e.produceWithPatches.bind(_e);_e.setAutoFreeze.bind(_e);_e.setUseProxies.bind(_e);_e.applyPatches.bind(_e);_e.createDraft.bind(_e);_e.finishDraft.bind(_e);var fp=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),qg=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(u){return function(c){return a([u,c])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ho=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Hg=Object.defineProperty,Fg=Object.defineProperties,Vg=Object.getOwnPropertyDescriptors,Ac=Object.getOwnPropertySymbols,Bg=Object.prototype.hasOwnProperty,Kg=Object.prototype.propertyIsEnumerable,Mc=function(e,t,n){return t in e?Hg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Er=function(e,t){for(var n in t||(t={}))Bg.call(t,n)&&Mc(e,n,t[n]);if(Ac)for(var r=0,i=Ac(t);r<i.length;r++){var n=i[r];Kg.call(t,n)&&Mc(e,n,t[n])}return e},Cs=function(e,t){return Fg(e,Vg(t))},Wg=function(e,t,n){return new Promise(function(r,i){var o=function(a){try{l(n.next(a))}catch(u){i(u)}},s=function(a){try{l(n.throw(a))}catch(u){i(u)}},l=function(a){return a.done?r(a.value):Promise.resolve(a.value).then(o,s)};l((n=n.apply(e,t)).next())})};(function(e){fp(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ho([void 0],n[0].concat(this)))):new(t.bind.apply(t,ho([void 0],n.concat(this))))},t})(Array);(function(e){fp(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ho([void 0],n[0].concat(this)))):new(t.bind.apply(t,ho([void 0],n.concat(this))))},t})(Array);function fe(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Er(Er({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var Qg="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Gg=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Qg[Math.random()*64|0];return t},Xg=["name","message","stack","code"],Ts=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Yg=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Xg;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=fe(t+"/fulfilled",function(u,c,f,d){return{payload:u,meta:Cs(Er({},d||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=fe(t+"/pending",function(u,c,f){return{payload:void 0,meta:Cs(Er({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),s=fe(t+"/rejected",function(u,c,f,d,g){return{payload:d,error:(r&&r.serializeError||Yg)(u||"Rejected"),meta:Cs(Er({},g||{}),{arg:f,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function a(u){return function(c,f,d){var g=r!=null&&r.idGenerator?r.idGenerator(u):Gg(),h=new l,v;function N(p){v=p,h.abort()}var m=function(){return Wg(this,null,function(){var p,y,w,x,E,P,O;return qg(this,function(b){switch(b.label){case 0:return b.trys.push([0,4,,5]),x=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:f,extra:d}),Jg(x)?[4,x]:[3,2];case 1:x=b.sent(),b.label=2;case 2:if(x===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return E=new Promise(function(z,X){return h.signal.addEventListener("abort",function(){return X({name:"AbortError",message:v||"Aborted"})})}),c(o(g,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:g,arg:u},{getState:f,extra:d}))),[4,Promise.race([E,Promise.resolve(n(u,{dispatch:c,getState:f,extra:d,requestId:g,signal:h.signal,abort:N,rejectWithValue:function(z,X){return new Ts(z,X)},fulfillWithValue:function(z,X){return new bc(z,X)}})).then(function(z){if(z instanceof Ts)throw z;return z instanceof bc?i(z.payload,g,u,z.meta):i(z,g,u)})])];case 3:return w=b.sent(),[3,5];case 4:return P=b.sent(),w=P instanceof Ts?s(null,g,u,P.payload,P.meta):s(P,g,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&s.match(w)&&w.meta.condition,O||c(w),[2,w]}})})}();return Object.assign(m,{abort:N,requestId:g,arg:u,unwrap:function(){return m.then(Zg)}})}}return Object.assign(a,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function Zg(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Jg(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Ba="listenerMiddleware";fe(Ba+"/add");fe(Ba+"/removeAll");fe(Ba+"/remove");var Ic;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Dg();const e0=fe("questions/add",e=>({payload:{question:e}})),t0=fe("questions/remove",e=>({payload:{questionId:e}})),n0=fe("questions/update",(e,t)=>({payload:{questionId:e,...t}})),Ka=fe("questions/set",(e,t)=>({payload:{questions:e,shuffle:t}})),pp=fe("questions/shuffle",(e,t)=>({payload:{questions:e,shuffle:t}})),mp=fe("questions/answers/selectOne",(e,t)=>({payload:{questionId:e,answerId:t}})),r0=fe("questions/answers/unselectOne",e=>({payload:{questionId:e}})),yp=fe("questions/answers/unselectAll"),i0=fe("questions/answers/shuffleOne",(e,t,n)=>({payload:{questionId:e,question:t,shuffle:n}}));fe("questions/answers/shuffleAll",(e,t)=>({payload:{questions:e,shuffle:t}}));const o0=(e,t)=>{if(t.type===e0.type)return[...e,t.payload.question];if(t.type===t0.type)return e.filter(n=>n.id!==t.payload.questionId);if(t.type===n0.type)return e.map(n=>n.id===t.payload.questionId?{...n,...t.payload}:n);if(t.type===Ka.type){const{shuffle:n,questions:r}=t.payload;return n?[...r].sort(()=>Math.random()-.5):[...r]}if(t.type===pp.type){const{shuffle:n,questions:r}=t.payload;if(!n){const i=e.reduce((o,s)=>({...o,[s.id]:s.answers}),{});return r.map(o=>({...o,answers:i[o.id]}))}return[...e].sort(()=>Math.random()-.5)}if(t.type===mp.type)return e.map(n=>n.id===t.payload.questionId?{...n,correct:n.answers.some(r=>r.correct&&r.id===t.payload.answerId),selectedId:t.payload.answerId,answers:n.answers.map((r,i)=>({...r,selected:r.id===t.payload.answerId}))}:n);if(t.type===r0.type)return e.map(n=>{var r;return n.id===((r=t==null?void 0:t.payload)==null?void 0:r.questionId)?{...n,answers:n.answers.map((i,o)=>({...i,selected:!1}))}:n});if(t.type===yp.type)return e.map(n=>({...n,selectedId:void 0,correct:void 0,answers:n.answers.map(r=>({...r,selected:!1}))}));if(t.type===i0.type){let{questionId:n,question:r,shuffle:i}=t.payload;return i?e.map(o=>{if(o.id===n){const s=[...o.answers];for(let l=s.length-1;l>0;l--){const a=Math.floor(Math.random()*(l+1));[s[l],s[a]]=[s[a],s[l]]}return{...o,answers:s}}return o}):e.map(o=>o.id===n?r:o)}return[]},hp={subject:"",questions:[],unbluredQuestion:"",sidebarOn:!1,testModeOn:!1,correctAnswers:!1,shuffleQuestions:!1,shuffleAnswers:!1,blurAnswers:!1};let Ni;const s0=new Uint8Array(16);function l0(){if(!Ni&&(Ni=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ni))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ni(s0)}const re=[];for(let e=0;e<256;++e)re.push((e+256).toString(16).slice(1));function a0(e,t=0){return(re[e[t+0]]+re[e[t+1]]+re[e[t+2]]+re[e[t+3]]+"-"+re[e[t+4]]+re[e[t+5]]+"-"+re[e[t+6]]+re[e[t+7]]+"-"+re[e[t+8]]+re[e[t+9]]+"-"+re[e[t+10]]+re[e[t+11]]+re[e[t+12]]+re[e[t+13]]+re[e[t+14]]+re[e[t+15]]).toLowerCase()}const u0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Dc={randomUUID:u0};function Wr(e,t,n){if(Dc.randomUUID&&!t&&!e)return Dc.randomUUID();e=e||{};const r=e.random||(e.rng||l0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return a0(r)}function gp(e,t,n){return{id:e||Wr(),questionText:t??"error extracting questions",answers:n,get correctAnswers(){return this.answers.filter(r=>r.correct&&r.selected).length}}}const c0=`
تحظى مسألة تنمية...............باهتمام متزايد وتوضع على رأس أولويات السياسة الاقتصادية في مصر ،وبصفة خاصة في الآونة الأخيرة وذلك لمعالجة العجز في الميزان التجاري. 
الصادرات 
الواردات 
الضرائب 
المصروفات.



#

تعتبر تنمية الصادرات الزراعية أحد العناصر الهامة والرئيسية لتنمية مصادر.............، حيث تقدر قيمة هذه الصادرات بحوالي 3 مليار دولار عام 2020 م.
النقد الأجنبي 
النقد المحلى 
النقد الدولي 
النقد القومي 



#

وفى إطار الاتجاه العالمي لإزالة معوقات التبادل التجاري بين مختلف الدول، تسعى كل دولة إلى زيادة حجم............ 
الإنتاج 
الصادرات 
الاستهلاك 
الواردات



#

تسعى السياسة الاقتصادية المصرية جاهدة لتنويع وتعظيم العائد من الصادرات بوجه عام، والصادرات..............بوجه خاص.
الزراعية 
الصناعية 
الخدمية 
التجارية.



#

تعاني التجارة الخارجية المصرية بصفة عامة من ......... دائم ومستمر على مدار الفترة الماضية بسبب التزايد السكاني المتزايد ومحدودية الموارد الزراعية.
عجز 
فائض 
تعادل



#

يبنى التفسير الكلاسيكي للتجارة الدولية على مبدأ التكاليف النسبية الذي صاغه الاقتصادي الإنجليزي.....عام 1817
ادم سميث 
دافيد ريكاردو 
جون ستيوارت ميل



#

إن اختلاف النفقات هو الشرط الضروري والكافي للتبادل التجاري بين دولتين 
الكلية 
النسبية 
المتوسطة



#

ويرى .............أن الفائدة أو المنافع المتحصل عليها من التجارة الدولية تتأتى من التوظيف الأكثر كفاءة للقوى الإنتاجية في العالم.
ادم سميث 
دافيد ريكاردو 
جون ستيوارت ميل



#

يتم قياس الميزة النسبية باستخدام معامل تكلفة الموارد .........................
الأجنبية 
المحلية 
العالمية 
الحدود.



#

إذا كانت قيمة معامل تكلفة الموارد المحلية أقل من الواحد الصحيح فهذا يشير إلى أن الدولة ....... … عملة أجنبية من إنتاج السلعة محليا.
لا توفر 
توفر 
تخسر 
لا تخسر



#

يمكن للدولة أن يكون لها ميزة نسبية في إنتاج تلك السلعة إذا توافرت السلعة .............
بوفرة 
بندرة 
قليلا



#

قام Balassa بتركيب الرقم القياسي للميزة النسبية ............
الحقيقية 
التقليدية 
الظاهرية 
الخيالية.



#

كلما زادت قيمة الرقم القياسي للميزة النسبية الظاهرة عن 100 دل ذلك على...........ميزة نسبية ظاهرة لصادرات السلعة
عدم وجود 
وجود 
غياب 
عدم غياب.



#

وإذا انخفض الرقم القياسي للميزة النسبية الظاهرة عن 100 دل ذلك على.......... الميزة النسبية للسلع الداخلة في حسابه.
زيادة 
تحسن 
تدهور



#

يقيس معامل الحماية الأسمى أثر ..............
السياسة الصناعية 
السياسة التجارية 
السياسة العلمية 
السياسة الزراعية.



#

معامل الحماية الأسمى يساوي السعر المزرعى مقسوما على السعر العالمي×.........
سعر السلعة التوازني 
سعر الحدود التوازني 
السعر العالمي التوازني 
سعر الصرف التوازني


#
الميزة..........لها مكونات معناها إنتاج سلعة بتكلفة منخفضة وذات جودة عالية ووجود خدمات لتوصيل هذه السلعة للمستهلك في الوقت المناسب والشكل المناسب.
التنافسية 
النسبية 
الكلية



#

.........هو سعر تصدير السلعة في دولة ما مقسوما على سعر تصدير السلعة في الدولة المنافسة × 100 
السعر العالمي 
السعر المتوسط 
السعر النسبي.



#

تستخدم مرونة ............على السلعة المصدرة في الدولة المستوردة كمؤشر للمركز أو القوة التنافسية للسلعة في سوق الدولة المستوردة لها.
العرض السعرية 
الطلب السعرية 
الإنتاج السعرية.



#

كلما كانت مرونة الطلب الخارجي على السلعة في سوق ما .......... كلما دل ذلك على أن الدولة المصدرة تستطيع رفع سعر السلعة في أسواق الدول المستوردة.
مرتفعة 
منخفضة 
متزايدة 
متناقصة



#

إن النظام التجاري .......... ينطوي على قواعد يضعها المجتمع الدولي، بصورة متعددة الأطراف.
المحلى 
الإقليمي 
الدولي



#

إن النظام التجاري الدولي يبني على .......دولية، تكون ملزمة للدول التي توقعها بعد مناقشتها.

مناقشات 
اجتماعات 
اتفاقيات



#

تعتبر منظمة......... العالمية العنصر الأساسي في النظام التجاري الدولي متعدد الأطراف 
العمل 
الاستهلاك 
الإنتاج 
التجارة



#

تعد منظمة ......... العالمية الآن بمثابة الإطار المؤسسي الدولي الوحيد الذي يضع ويوضح، ويطور، ويشرف على تطبيق القواعد التي تحكم حركة التجارة الدولية بين دول العالم المختلفة.
العمل 
الاستهلاك 
الإنتاج 
التجارة.


#

اتفقت الدول الأعضاء في النظام التجاري العالمي على إجراء............جمركية بعد التعرفةTariffication والربط Binding على مدى ست سنوات بدءا من عام 1995 
زيادات 
تخفيضات 
تثبيتات



#

يؤكد هذا الاتفاق لحرية التجارة الدولية على حق أي دولة عضو في منظمة التجارة العالمية في تبني أي تدابير تراها ضرورية للحفاظ على ..........الإنسان، والحيوان ،والنبات.
أعداد 
خصائص 
صحة



#

اتبعت الدول النامية بعد الاستقلال الدول المتقدمة في نظام حرية التجارة العالمية لتحقيق ...........من التجارة الدولية.
خسائر 
مكاسب 
استقرار



#

يمكن تعريف ..........الاقتصادي الدولي على أنه درجة معينة من التكامل الاقتصادي الذي يقوم بين مجموعة من الدول المتجانسة اقتصاديا.
الاتحاد 
التجمع 
التكتل



#

تعريف التكتل الاقتصادي الدولي على أنه درجة معينة من التكامل الاقتصادي بهدف تعظيم المصالح وزيادة التجارة الدولية لتحقيق .........عائد لشعوب تلك الدول.
اقل 
أكبر 
تعادل.



#

من أهم .............النظام الاقتصادي العالمي الجديد هو الاتجاه المتزايد نحو تكوين التكتلات الاقتصادية العملاقة للحصول على أكبر مكاسب ممكنة من التجارة الدولية.
خصائص 
أنواع 
طرق.



#


من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها هو...................
التمتع بوفورات الإنتاج الكبير. 
التمتع بالانفراد بالإنتاج. 
التمتع بالإنتاج الصغير .



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
زيادة درجة المنافسة. 
تقليل درجة المنافسة. 
تثبيت درجة المنافسة.



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
توسيع حجم السوق 
تقليل حجم السوق 
تثبيت حجم السوق.



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
زيادة معدل التجارة الدولية البينية 
تقليل معدل التجارة البينية 
تثبيت معدل التجارة البينية.



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
تقليل نصيب التكتل الاقتصادي من التجارة العالمية 
تثبيت نصيب التكتل الاقتصادي من التجارة العالمية 
زيادة نصيب التكتل الاقتصادي من التجارة العالمية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
تثبيت مستوى الرفاهية الاقتصادية 
زيادة مستوى الرفاهية الاقتصادية 
تقليل مستوى الرفاهية الاقتصادية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
تثبيت مستوى التكاليف الإنتاجية
زيادة مستوى التكاليف الإنتاجية 
تقليل مستوى التكاليف الإنتاجية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها:
تثبيت مستوى الكفاءة الإنتاجية 
زيادة مستوى الكفاءة الإنتاجية 
تقليل مستوى الكفاءة الإنتاجية



#


الضلع النقدي في نظام التجارة العالمية ويشير إلى المعاملات النقدية الدولية قصيرة الأجل وأهمية تحقيق الاستقرار فيها ويعبر عنه ............
صندوق الإسكان الدولي 
صندوق التمويل الدولي 
صندوق النقد الدولي.



#

الضلع المالي في نظام التجارة العالمية يعبر عن المعاملات الاقتصادية طويلة الأجل والتي تمثل الاستثمارات الدولية ويشرف على هذا النوع من المعاملات مجموعة ............... والذي يسعى إلى تأمين حركة تدفقات رؤوس الأموال العالمية.

الاستثمار الدولي 
العمل الدولي 
البنك الدولي.



#

الضلع التجاري أو ما يعرف بالتجارة الدولية متعددة الأطراف وقد كانت الاتفاقية العامة للتعريفة والتجارة (الجات) ترعى شئون التجارة العالمية من الفترة 1/1/1948-31/12/1994. ومع بداية عام 1995حلت محلها منظمة ...........
العمل الدولية 
الأم الدولي 
التجارة العالمية.



#

ويضيف ......... أن اختلاف الندرة النسبية لعوامل الإنتاج ما بين دولة وأخرى هو شرط ضروري لوجود اختلاف في النفقات النسبية وبالتالي لقيام التجارة الخارجية.
جون ستيوارت ميل 
ديفيد ريكاردو 
هيكشر



#

معامل................. = إجمالي التكاليف للوحدة بالسعر المحلى / القيمة المضافة للوحدة بسعر الحدود 
أسعار الموارد المحلية 
تكلفة الموارد المحلية 
إنتاج العوامل المحلية.



#

التكامل الاقتصادي .............ويقصد به توسيع النطاق الجغرافي للاتحاد من خلال قبول أعضاء جدد من بين الدول المنتمية جغرافيا إلى الإقليم الاقتصادي.
الرأسي 
الأفقي 
المتوسط.



#

التكامل الاقتصادي..... ويقصد به التحرك من درجة إلى أخرى على درجات سلم التكامل الاقتصادي والذي يبدأ بمنظمة التجارة الحرة مرورا بالاتحاد الجمركي فالسوق المشتركة فالوحدة الاقتصادية انتهاءا بالتكامل الاقتصادي.
الأفقي 
الرأسي 
المتوسط.



#

التكامل الاقتصادي ............وهو يشير إلى درجات سلم التكامل الاقتصادي الثلاث الأولى (منظمة التجارة الحرة، الاتحاد الجمركي، السوق المشتركة)، حيث يتم إزالة القيود فقط.
الموجب 
السالب 
المتعادل.



#

التكامل الاقتصادي..........وهو يعكس الوحدة النقدية المالية والتكامل حيث تتخذ سلطات التكامل خطوات إيجابية نحو إنشاء آليات جديدة للتكامل مثل التنسيق وتوحيد السياسات الاقتصادية وإنشاء عملة موحدة وإنشاء بنك مركزي موحد وتوحيد النظم الضريبية وتشريعات العمل وغير ذلك.
الموجب 
السالب 
المتعادل.



#

............ويتكون هذا التكتل الاقتصادي بهدف تحرير التجارة بين دول الأعضاء ويتم الاتفاق بين دولتين أو أكثر على إزالة كافة العقبات التي تقف في سبيل التبادل التجاري بينهم وتلتزم كل دولة من الدول المشتركة بإلغاء الرسوم الجمركية والقيود الكمية المفروضة على الواردات من بقية الدول المشتركة.

منظمة الاستهلاك الحر 
منظمة الإنتاج الحر 
منطمة التجارة الحرة 



#

................. وفيه يتم إلغاء الرسوم الجمركية والقيود الكمية فيما بين الدول الأعضاء، وتلتزم الدول الأعضاء بتعريفة جمركية موحدة يتم تطبيقها على السلع المستوردة من العالم الخارجي.
الاتحاد الضرائبي 
الاتحاد الجمركي 
الاتحاد الإنتاجي



#

وفيه يتم توحيد أسواق كل من المنتجات وعناصر الإنتاج فيما يمكن تسميته بتكامل الأسواق وهذا لا يكون ممكنا إلا إذا اتفقت الدول الأعضاء في السوق على ترتيبات من شأنها تنسيق السياسة الاقتصادية فيما يسمى بتكامل السياسات.

السوق المشتركة 
السوق المنفردة 
السوق العالمي.



#

من خلال الاتحاد الاقتصادي يتم إلغاء كافة القيود على التجارة الدولية وانتقال رؤوس الأموال والأشخاص بين الدول بالإضافة إلى تحقيق التنسيق في كافة السياسات الاقتصادية بغرض الوصول إلى الوحدة الاقتصادية العالمية.
الاتحاد الاقتصادي 
الاتحاد الإنتاجي 
الاتحاد الاستهلاكي



#

يعتبر.......... أكبر التكتلات الاقتصادية في العالم وأصبح هذا التكتل الاقتصادي في نظر العديد من الخبراء أكبر قوة اقتصادية وأقوى تكتل اقتصادي على مستوى العالم
الاتحاد العالمي 
الاتحاد العربي 
الاتحاد الأوروبي.



#

من أهم أهداف التكتل الاقتصادي الأوروبي:
خلق سوق تجارية موحدة ذات قدرة إنتاجية أكثر كفاءة وطاقة استيعابية
خلق سوق تجارية متعددة ذات قدرة إنتاجية أكثر كفاءة وطاقة استيعابية
خلق سوق تجارية موحدة ذات قدرة إنتاجية اقل كفاءة وطاقة استيعابية



#


من أهم أهداف التكتل الاقتصادي الأوروبي:
تعميق الاقتصاد القائم على آليات السوق واحترام مبدأ المنافسة
تعميقا لاقتصاد الغير قائم على آليات السوق واحترام مبدأ المنافسة
تعميق الاقتصاد القائم على آليات السوق وعدم احترام مبدأ المنافسة



#


من أهم أهداف التكتل الاقتصادي الأوروبي:
عدم الانتقال من مرحلة التكامل والتنسيق إلى مرحلة الاندماج الفعلي بما يسهل من عملية الاستخدام الأمثل للموارد
الانتقال من مرحلة التكامل والتنسيق إلى مرحلة الاندماج الفعلي بما يسهل من عملية الاستخدام الأمثل للموارد
الانتقال من مرحلة التكامل والتنسيق إلى مرحلة الانفصال الفعلي بما يسهل من عملية الاستخدام الأمثل للموارد



#


من أهم أهداف التكتل الاقتصادي الأوروبي:
انخفاض قدرة التكتل الأوروبي في لعب دورا أكثر فعالية في كافة المجالات الاقتصادية والسياسية
ثبات قدرة التكتل الأوروبي في لعب دورا أكثر فعالية في كافة المجالات الاقتصادية والسياسية
زيادة قدرة التكتل الأوروبي في لعب دورا أكثر فعالية في كافة المجالات الاقتصادية والسياسية



#


من أهم أهداف التكتل الاقتصادي الأوروبي:
تحقيق الوحدة النقدية الأوروبية والاستقرار النقدي في أوروبا وإقامة البنك المركزي الأوروبي
عدم تحقيق الوحدة النقدية الأوروبية والاستقرار النقدي في أوروبا وإقامة البنك المركزي الأوروبي
تراجع الوحدة النقدية الأوروبية وعدم الاستقرار النقدي في أوروبا وإقامة البنك المركزي الأوروبي



#


من أهم أهداف التكتل الاقتصادي الأوروبي:
العمل على زيادة معدلات التضخم وزيادة معدلات النمو وخفض نسبة البطالة وخفض معدلات الفائدة
العمل على خفض معدلات التضخم وزيادة معدلات النمو وخفض نسبة البطالة وخفض معدلات الفائدة
العمل على خفض معدلات التضخم وخفض معدلات النمو وخفض نسبة البطالة وخفض معدلات الفائدة 



#


يعتبر التكتل الاقتصادي .................من أكبر التكتلات الاقتصادية في العالم بعد التكتل الاقتصادي الأوروبي من ناحية الحجم والإمكانيات.
لأمريكا الجنوبية 
لأمريكا الشمالية 
للدول العربية.



#


من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها:
زيادة معدلات نمو الناتج المحلى الإجمالي للدول الأعضاء
تقليل معدلات نمو الناتج المحلى الإجمالي للدول الأعضاء
تثبيت معدلات نمو الناتج المحلى الإجمالي للدول الأعضاء



#


من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها:
إلغاء الحواجز الجمركية وتحرير التجارة وزيادة الاستثمارات
عدم إلغاء الحواجز الجمركية وعدم تحرير التجارة وزيادة الاستثمارات
إلغاء الحواجز الجمركية وتحرير التجارة وزيادة الاستثمارات



#


من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها:
علاج مشكلات البطالة في دول التكتل من خلال زيادة الطاقة الإنتاجية وبالتالي تعظيم فرص العمل أمام الراغبين فيه
علاج مشكلات البطالة في دول التكتل من خلال زيادة الطاقة الإنتاجية وبالتالي تعظيم فرص العمل أمام الراغبين فيه 
علاج مشكلات البطالة في دول التكتل من خلال زيادة الطاقة الإنتاجية وبالتالي تعظيم فرص العمل أمام الراغبين فيه 



#


من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها:
تحقيق التكامل الاقتصادي بين دول التكتل الاقتصادي القائم على المزايا النسبية والمزايا التنافسية لكل دولةعدم تحقيق التكامل الاقتصادي بين دول التكتل الاقتصادي القائم على المزايا النسبية والمزايا التنافسية لكل دولة
تقليل التكامل الاقتصادي بين دول التكتل الاقتصادي القائم على المزايا النسبية والمزايا التنافسية لكل دولة 



#


من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها:
تقليل قدرة التكتل الاقتصادي لأمريكا الشمالية على التعامل مع التكتلات الاقتصادية العملاقة الأخرى وتحقيق ميزة تنافسية
زيادة قدرة التكتل الاقتصادي لأمريكا الشمالية على التعامل مع التكتلات الاقتصادية العملاقة الأخرى وتحقيق ميزة تنافسية
تثبيت قدرة التكتل الاقتصادي لأمريكا الشمالية على التعامل مع التكتلات الاقتصادية العملاقة الأخرى وتحقيق ميزة تنافسية



#


السوق المشتركة لدول.............تعبر عن أكبر تكتل اقتصادي في القارة الأفريقية، ويبلغ عددها بعد انضمام مصر إليها واحد وعشرون دولة
شرق وجنوب أفريقيا 
غرب وجنوب أفريقيا 
شمال وجنوب أفريقيا.



#

تسعى السوق المشتركة( الكوميسا) لتحقيق الأهداف التالية:
تحقيق معدل نمو اقتصادي ثابت ومستمر لدول الأعضاء 
تحقيق معدل نمو اقتصادي منخفض ومستمر لدول الأعضاء
تحقيق معدل نمو اقتصادي ثابت وغير مستمر لدول الأعضاء



#


تسعى السوق المشتركة( الكوميسا) لتحقيق الأهداف التالية:
خلق بيئة غير مواتية للاستثمار المحلى والأجنبي
خلق بيئة مواتية للاستثمار المحلى والأجنبي
خلق بيئة مواتية للاستثمار المحلى دون الأجنبي 



#


تسعى السوق المشتركة( الكوميسا) لتحقيق الأهداف التالية:
تشجيع المشروعات المشتركة في الأنشطة الاقتصادية
عدم تشجيع المشروعات المشتركة في الأنشطة الاقتصادية
وقف المشروعات المشتركة في كافة الأنشطة الاقتصادية



#


تسعى السوق المشتركة(الكوميسا) لتحقيق الأهداف التالية:
تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول
عدم تنمية تطوير العلوم
والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول
توقف تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول



#


تسعى السوق المشتركة ( الكوميسا ) لتحقيق الأهداف التالية:
عدم تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول
تقليل تنمية تطوير العلوم والتكنولوجيا وعدم تحقيق السلام والأمن والاستقرار للدول
تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول

`,d0=[1,1,2,1,1,2,2,3,2,2,1,3,2,3,4,4,1,3,2,2,3,3,4,4,2,3,2,3,2,1,1,1,1,1,1,2,3,2,3,3,3,3,2,2,2,2,1,3,2,1,1,3,1,1,2,3,1,2,2,1,3,1,1,2,1,1,2,1,1,3],f0=c0.split("#").map((e,t)=>{let n=e.trim().split(`
`).filter(o=>o.trim().length>0),r=n.shift();const i=n.map((o,s)=>({id:Wr(),text:o,correct:s+1===d0[t]}));return gp(Wr(),r??"error extracting questions",i)}),p0=`

المسار أو المسلك الذي تمر من خلاله السلع والمنتجات الى المستهلك أو المستخدم النهائي هو 


السعر المرتفع للسلعة 
المهام الرئيسية للمصدر في النشاط التصديرية 

المفهوم العام للقنوات التسويقية في النشاط التصديري 
وكلاء التصدير 
# 




من المهام الرئيسية للمصدر في النشاط التصديرية 


عدم دراسة البدائل الممكنة للقنوات التسويقية لمنتجاته 
اختيار القنوات الأكثر ملائمه 
عدم فحص البدائل الممكنة للقنوات التسويقية لمنتجاته 
عدم التعرف على القنوات التسويقية المختلفة 
# 




يجرى تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ومنها 


تجار الجملة 
بيوت الاستيراد 
وكلاء التصدير 
تراخيص الإنتاج 
# 




يجرى تسويق المنتجات في الأسواق الخارجية بطرق مباشره ومنها 


حقوق الامتياز 
عقود الإدارة 
الوسطاء التجاريون 
تراخيص الإنتاج 
# 




يجرى تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ومنها 


الموزعون 
شركات الاستيراد 
امتلاك الشركات 
المشترين المصنعين 
# 




كلما كانت دورة البيع للمنتج بطيئة كان المسلك التسويقي 


ليس هناك علاقة 
أبطئ 
أقصر 
أطول 
# 




من العوامل المؤثرة على طول أو قصر القناة التسويقية 


اختيار القنوات الأكثر ملائمه 
دراسة البدائل الممكنة للقنوات التسويقية 
قدرة المنتج على البقاء سليما 
التعرف على القنوات التسويقية المختلفة 
# 




هناك بعض العوامل التي تجعل البيع في الأسواق الخارجية يختلف عن البيع في الأسواق المحلية 


ارتفاع درجة المخاطرة وانخفاض التكاليف التسويقية 
اللغة واحده في كل الأسواق 
عدم اختلاف نظم البيع 
اختلاف الأذواق وأنماط الاستهلاك 
# 




من المهام الرئيسية للمصدر في النشاط التصديرية 


ليس مما سبق 
عدم التعرف على القنوات التسويقية المختلفة 
اختيار القناة الأقل حجما 
فحص ودراسة البدائل الممكنة للقنوات التسويقية 
# 




في نموذج قنوات التسويق النمطي يوجد الموزع وهو بدوره يشتري من المصدر ثم يبيع الموزع الى 


المصدر 
المستهلك النهائي 
عدد محدود من تجار الجملة 

عدد محدود من تجار التجزئة 
# 




في نموذج قنوات التسويق النمطي يوجد تجار التجزئة وهم بدورهم يشت روا من تجار الجملة ثم يبي عوا الى 


المصدر 
المستهلك النهائي 
عدد محدود من تجار الجملة 
عدد محدود من تجار التجزئة 
# 




يجرى تسويق المنتجات في الأسواق الخارجية بطرق مباشره ومنها 


حقوق الامتياز 
تجار الجملة 
عقود الإدارة 
عقود التصنيع 
# 




من العوامل المؤثرة على طول أو قصر القناة التسويقية الخدمات المطلوبة للمنتج، فمثلا وجود خدمات ما بعد البيع بدرجة عالية، كان المسلك التسويقي 


أبطئ 
لا يتأثر 
قصير 
طويل 
# 




من العوامل المؤثرة على طول أو قصر القناة التسويقية المتطلبات والمعاملات الفنية للمنتج، فكلما كانت معقده، كان المسلك التسويقي 


أبطئ 
ليس هناك علاقة 
أقصر 
أطول 

# 




من العوامل المؤثرة على طول أو قصر القناة التسويقية قدره المنتج على البقاء سليما، فكلما كان هناك سرعه تلف للمنتج، كان المسلك التسويقي 


بطئ 
لا يتأثر 
قصير 
طويل 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق هو عباره عن اتفاق بين شركتين تقوم إحداها بتنظيم بعض أو كل أنشطه الشركة الأخرى 


تراخيص الإنتاج 
عقود الإدارة 
حقوق الامتياز 
المشروعات المشتركة 
# 




عقود الإدارة من احدى طرق التسويق للأسواق الخارجية بطريقه غير مباشره بالنسبة للاستثمارات المحددة التي تتطلبها، بانها تحقق عوائد 


ليس مما سبق 
لا يوجد تأثير 
صغيره 
كبيره 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق هو شخص اعتباري أو طبيعي يقوم باسم المصدر، ونيابة عنه بالسعي لتوزيع السلعة في الأسواق الخارجية 


تجار التجزئة 
تجار الجملة 
الوكيل التصديري 
الموزع 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق يكون بموجبها يمكن بقدر من السرعة والسهولة دخول الأسواق الخارجية المستهدفة 


عقود التصنيع 
عقود الإدارة 
تراخيص الإنتاج 
امتلاك الشركات من الخارج 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق تتميز بتغلبها على العقبات الجمركية ومعوقات التصدير الى السوق الخارجي 


عقود التصنيع 
عقود الإدارة 
تراخيص الإنتاج 
امتلاك الشركات من الخارج 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره، وتتميز هذه الطريقة بان يقوم المنتج المصدر بتنفيذ البرنامج التصدير ية الخاص به بالكامل 


عقود الإدارة 
عقود التصنيع 
التصدير المباشر بدون وسطاء 
التصدير المباشر بواسطة الوسطاء 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق فيها تمارس التجارة الخارجية نشاط عامة استيرادا أو تصديرا وقد تقوم بشراء البضائع كعميل مباشر مع المصدر ثم تقوم ببيعها وتوزيعها في الأسواق 


هيئات الشراء الحكومية 
شركات الاستيراد 
تجاره الجملة 
وكلاء التصدير 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق فيها يقومون بالشراء المباشر من المصدر مثل شركات الاستيراد بدلا من الاعتماد على الشراء من الموزعين أو المستوردين أو الوكلاء


المشترين المصنعين 
متاجر التجزئة 
تجار الجملة 
شركات الاستيراد 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق فيها تتم عمليه إنتاج المنتجات التصديريه وذالك بموجب اتفاق منح ترخيص يحصل بموجبه احد طرفي الاتفاق على الخبرة الفنية والتجارية وحق استخدام الماركة وبراءات الاختراع وذالك في مقابل مبلغ أو نسبه معينه يدفعها للطرف الأخر المانح للترخيص 


المشروعات المشتركة 
عقود التصنيع 
تراخيص الإنتاج 
حقوق الامتياز 
# 




يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق الشركات التي تشتري كميات كبيره وبشكل متكرر من السلع قد يفضلون التعامل مباشره مع المصدر وقد يتم ذالك على أساس تعاقدي أو بدون تعاقد


المشترين المصنعين 
متاجر التجزئة 
عقود التصنيع 
شركات الاستيراد 

# 




من أدوات التمويل السابق للشحن، تحدد الدول التي تقدم هذا النوع مثل دوله المكسيك من التمويل أسعار فائدته بما يتناسب وأسعار الفائدة التي تقدمها الدول الأخرى على مثل هذا النوع من التمويل 


جميع ما سبق 
خطابات الاعتماد المتبادلة 
الصناديق متجددة الموارد 
القروض 
# 




من صور التمويل للصادرات السابق للشحن ويتم استخدامه من خلال بعض الدول مثل ماليزيا والمكسيك لتمويل صادرتها ويتكون من ثلاث أطراف: المنتج الذي يستورد مدخلات، المصدر المباشر ،المستورد الأجنبي 


جميع ما سبق 
خطابات الاعتماد المتبادلة 
الصناديق متجددة الموارد 
القروض 
# 




يتمثل الشكل التقليدي في الخصم التجاري في التمويل الذي يتراوح من ثلاث الى خمس سنوات وهو تمويل 


متوسط الأجل 
ممتد الأجل 
طويل الأجل 
قصير الأجل 
# 




تتضمن عمليه الخصم التجاري قيامه كطرف ثالث بضمان الأوراق المالية )تجاريه وكمبيالات وسندات إذنيه( بدون أيه قيود 


القروض 
بنك المستورد 
المخصم 
المستورد 
# 




يعد خصم الكمبيالات التي يضمنها البنك واحده من اهم أدوات التمويل ......... بعد الشحن 


متوسطة الأجل 
ممتدة الأجل 
طويلة الأجل 
قصيرة الأجل 
# 




من أدوات التمويل أثناء وبعد الشحن، تتمثل في قيام الجهة الممولة بتقديم القروض والتسهيلات الائتمانية الى المستوردين 


الشراء التبادلي 
ائتمان المشتري الأجنبي 
الصفقات المتكافئة 
الخصم التجاري 
# 




وفقا لهذه الأداة تقوم الدولة التي تتمتع بميزه نسبيه وتنافسيه في احدى القطاعات بتشجيع تدفق الاستثمار المحلي والأجنبي الى تلك القطاعات ومن ثم زيادة الصادرات من تلك القطاعات الى الأسواق العالمية 


التمويل الاستثماري للصادرات 
التمويل أثناء وبعد الشحن 
التخصيم 
التمويل قبل الشحن 
# 




من أدوات التمويل الاستثماري للصادرات، تتمثل في قيام المُصدر بالتامين على تحصيل قيمه صادراته عند استحقاق موعد الائتمان الممنوح أثناء عمليه التصدير 


حفظ الصادرات 
A,B
ضمان الصادرات 
تأمين ائتمان للتصدير 
# 




يعد فشل أو رفض المستورد أن يتقيد باي شرط من شروط عقد التصدير إذا كان ذالك المستورد جهة أو مؤسسه حكومية سبق التعامل معها من 


حفظ الصادرات 
ضمان الصادرات 
مخاطر الدولة المستوردة المغطاة 
مخاطر المستورد المغطاة 
# 




نظرا لما يواجهه مديري التصدير بالأسواق العالمية من صعوبة الحصول على معلومات صحيحه ودقيقه وحديثه عن الشركات الأجنبية، ولتقليل مخاطر عدم السداد من قبل المستوردين الأجانب فيتم طلب 


حفظ الصادرات 
A,B
ضمان الصادرات 
تأمين ائتمان للتصدير 
# 




يقوم المصدرون في هذا الشكل من أشكال التمويل بالتعاون فيما بينهم في مجال تسويق صادراتهم مما يسهم في زيادة فرص التصدير لتلك الأسواق 


تمويل عمليات البيع 
تمويل عمليات تسويق الصادرات 

ضمان الصادرات 
تأمين ائتمان للتصدير 
# 




يعتبر قيام الحكومة بأنشاء مؤسسات متخصصة لتمويل الصادرات دون توفير الموارد المالية الكافية للقيام بهذا الدور 


من أدوات التمويل أثناء وبعد الشحن 
من أدوات التمويل قبل الشحن 
من مميزات الصادرات المصرية 
من المشكلات التي تؤثر سلبا على الصادرات المصرية 


# 




يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، وتم إنشاؤه بموجب القانون رقم 1983 بغرض تشجيع الصادرات المصرية والمعاونة في قيام قطاع تصديري زراعي وصناعي وتجاري ومصرفي 


المؤسسة العربية لضمان الاستثمار 
الشركة المصرية لضمان الصادرات 
البنك المصري لتنميه الصادرات 
الجهاز المصرفي 
# 




يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، وقام البنك المصري لتنميه الصادرات بإنشائها لضمان الصادرات بموجب القانون رقم 21 لسنه 1992، وذالك من اجل تنفيذ نظام تامين لضمان الصادرات ضد المخاطر التجارية وغير التجارية 


المؤسسة العربية لضمان الاستثمار 
الشركة المصرية لضمان الصادرات 
البنك المصري لتنميه الصادرات 
الجهاز المصرفي 
# 




رفض المشتري أو امتناعه عن استلام البضاعة المشحونة رغم قيام المصدر بالوفاء بجميع التزاماته تجاه المشتري من المخاطر المغطاة 


المخاطر المغطاة غير التجارية 
A,B
غير التجارية 
التجارية 
# 




تعمل المؤسسة على العربية لضمان الاستثمار على توفير خدمات الضمان ضد المخاطر غير التجارية ومن هذه المخاطر المغطاة غير التجارية 


إفلاس المشتري 
عدم عجز المشتري أو تأخره في سداد المبالغ المستحقة للمصدر 
استيلاء سلطات الدولة المستوردة أو دولة العبور العربي على السلع المشحونة أو حجزها أو مصادرتها 
عدم الغاء سلطات الدولة المستوردة لترخيص الاستيراد 
# 




يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، هو مؤسسه ماليه عربيه مشتركه تهدف للإسهام في تنميه التجارة العربية وقد أنشئ في عام 1989 ويبلغ راس المال المدفوع 500 مليون دولار أمريكي 


المؤسسة العربية لضمان الاستثمار 
برنامج تمويل التجارة العربية 
البنك المصري لتنميه الصادرات 
الجهاز المصرفي 
# 




من أدوات تمويل الصادرات المصرية أثناء وبعد الشحن ،تعمل هذه الأداة في قطاعات رئيسيه مثل القطاع الزراعي والغذائي والمجمدات ، الصناعات الدوائية ، الصناعات الهندسية والنسيجية تم التركيز عليها 


إدخال خدمه الخصم التجاري للمصدر المصري 
اليه ائتمان المشتري الأجنبي 
اليه التخصيم 
اليات اعاده الخصم 
# 




من أدوات تمويل الصادرات المصرية أثناء وبعد الشحن، يساعد على حل مشكله التدفق النقدي التي قد يعاني منها يعض المصدرين المصريين 


اليه التخصيم 
اليات اعاده الخصم 
برامج الصناديق المتجددة 
توفير راس المال العامل 
# 




قامت وزاره التجارة الخارجية بوضع القواعد ومنها: الخصائص المالية للصفقة ، نوع السلعة التي تغطيها، وأجال التغطية وتكاليفها التي تعمل وفقا لأليه ائتمان المشتري الأجنبي ومنها 


إدخال خدمه الخصم التجاري للمصدر المصري 
اليه ائتمان المشتري الأجنبي 
اليه التخصيم 
اليات اعاده الخصم 
# 




تعد سندات التصدير من أدوات التمويل الاستثماري بمصر، حيث يقوم البنك الأهلي بطرح سندات لتمويل الصادرات طويله الأجلم ن 


7: 10 سنوات 
7: 10 شهور 
1: 3 شهور 
1: 3 سنوات 
# 




من أدوات التمويل الاستثماري بمصر، يتم ذالك من خلال حصول بنك تنميه الصادرات على قروض من بنوك مثل بنك التنمية الأفريقي وكذالك بنك الصادرات الأمريكي الياباني لتمويل الصادرات المصرية 


الحصول على تمويل دولاري طويل الأجل 
سندات التصدير 
الية ائتمان المشتري الأجنبي 
اليه التخصيم 



# 




تتولى الحكومة تدبير مبالغ لمواجهه جزء من أعباء الشركات لضمان مخاطر الصادرات في دعم أقساط الضمان للدول متوسطه المخاطر لتصبح1 % بدلام ن 


% 0.5
% 1
% 2
% 1.5
# 




من أدوات تامين وضمان الصادرات، حيث تم إعداد وثيقة تقوم بتحمل الدولة لنفقات الاشتراك بهذه الأداة بنسبه تتراوح من 50% الى 75% من التكلفة الكلية في حاله إخفاق المٌصدر في الحصول على تعاقدات فعليه 


اليه التخصيم 
ضمان مخاطر الصادرات 
ضمان المعارض 
سندات التصدير 
# 




من أدوات تمويل الصادرات المصرية قبل الشحن، ومن امثلتها توقيع وزاره الخارجية بروتوكول التعاون مع البنك الأهلي المصري في أبريل عام 2004 


اليه التخصيم 
اليات اعاده الخصم 
برامج الصناديق المتجددة 
توفير راس المال العامل 
# 




تشير العديد من الدراسات الى انه يمكن النظر الى مفهوم الميزة التنافسية 


مستوياتس ت 
مستويات خمس 
مستويات ثلاث 
مستويان 
# 




يمكن النظر الى مفهوم الميزة التنافسية لأكثر من مستوى وهذه المستوياته ي 


الدولة والصناعة والشركة 
الصناعة والشركة فقط 
الشركة والدولة فقط 
الدولة والصناعة فقط 
# 




تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي يرتكز الاهتمام حول انعكاس الميزة التنافسية على الرفاهية العامة للدول 


الميزة التنافسية على مستوى الفرد الواحد 
الميزة التنافسية على مستوى الشركة 
الميزة التنافسية على مستوى الصناعة 
الميزة التنافسية على مستوى الدولة 
# 




تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي قد تتمتع الدولة بميزه تنافسيه عالميه في صناعه معينه أو في بعض الصناعات 


الميزة التنافسية على مستوى الفرد الواحد 
الميزة التنافسية على مستوى الشركة 
الميزة التنافسية على مستوى الصناعة 
الميزة التنافسية على مستوى الدولة 
# 




تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي يتم التنافس في السوق العالمي يقوم فيما بين الشركات 


الميزة التنافسية على مستوى الفرد الواحد 
الميزة التنافسية على مستوى الشركة 
مستوى الصناعة 
مستوى الدولة 
# 




من مؤشرات الميزة التنافسية 


خفة الحركة والاعتمادية والتعليم 
الطلب المحلي 
معدل نمو الصادرات 
النصيب السوقي في الصادرات 
# 




من محددات الميزة التنافسية 


عدم تجهيز المقومات الضرورية لنشاط التصدير 
عدم المقدرة على متابعه متطلبات التصدير 
عدم تجهيز البيئة التحتية الملائمة لنشاط التصدير 
راس المال البشري ومواصفات الجودة السلعية 
# 




من محددات الميزة التنافسية 


معدل نمو الصادرات والواردات 
الطلب المحلي والمقدرة التكنولوجية 
الاعتمادية والتعليم 
خفة الحركة والتشابكات 
# 




هناك مقاييس لقياس درجة التنافسية ومن أمثلتها 



معدل نمو الواردات 
الخطوط العامة لمداخل التنافسية في الدول المتقدمة 
خفة الحركة 
النصيب السوقي للصادرات 
# 




من مؤشرات الميزة التنافسية وهو يعني قدرة المؤسسات والعاملين على استيعاب المعلومات والتقانات الجديدة 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من مؤشرات الميزة التنافسية وهي تعني قدرة المؤسسات على القيام بالتزامات متواصلة وتلبيتها مع مرور الزمن في مواجهة عوامل المخاطرة واللايقين 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من مؤشرات الميزة التنافسية وهي تعني مختلف أشكال الارتباط أو التواصل القائم بين الأسواق المحلية والدولية ومصادر المعلومات والتكنولوجيا 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من مؤشرات الميزة التنافسية وهي قدرة المؤسسات والعاملين على الاستجابة لمؤشرات السوق كما يعكسها الأداء الاقتصادي والتصديري 

خفه الحركة 
الاعتمادية 
التعليم 
التشابكات 
# 




من مؤشرات الميزة التنافسية ويشمل على نسبة الأنفاق على الدفاع القومي الى الموازنة الكلية 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من مؤشرات الميزة التنافسية ويشمل نسبة عجز الموازنة مقارنة بالناتج المحلي 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من مؤشرات الميزة التنافسية ويشمل عدد أجهزه التليفزيون والجرائد اليومية لكل ألف نسمه 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من مؤشرات الميزة التنافسية ويشمل متوسط معدل نمو الدخل للفرد ومتوسط معدل نمو الصادرات والواردات 


التشابكات 
التعليم 
الاعتمادية 
خفه الحركة 
# 




من محددات الميزة التنافسية ويقصد به العمالة المدربة الماهرة المتخصصة عالية الكفاءة والكفاءات العالية من العلماء والخبراء والمهندسين والفنيين…… 


مواصفات الجودة السلعية 
القدرة التكنولوجية 
الطلب المحلي 
رأس المال البشري 
# 




من المقاييس المستخدمة لقياس درجة التنافسية وهو يعبر عن التغير النسبي بالزيادة أو النقص في كميه أو قيمه الصادرات للدولة عامه 


مؤشر التنافسية الظاهرة لفولراث 
الميزة التنافسية الظاهرة 
معدل نمو الصادرات 
النصيب السوقي للصادرات 
# 




من المقاييس المستخدمة لقياس درجة التنافسية وهو يقاس بنسبه نصيب صادرات الدولة في الأسواق التصديرية 


مؤشر التنافسية الظاهرة لفولراث 
الميزة التنافسية الظاهرة 
معدل نمو الصادرات 
النصيب السوقي للصادرات 
# 




من المقاييس المستخدمة لقياس درجة التنافسية وهو أكثر المقاييس شمولا لكونه يأخذ في الاعتبار كلا من جانبي الصادرات والواردات معا كما يمكن تطبيقه على جانب الصادرات فقطأ و الواردات فقط 


مؤشر التنافسية الظاهرة لفولراث 
الميزة التنافسية الظاهرة 
معدل نمو الصادرات 
النصيب السوقي للصادرات 
# 




من المقاييس المستخدمة لقياس درجة التنافسية وهو يقيس الأداء التصديري للسلعة من دوله معينه مقارنه بالأداء التصديري العام للصادرات على مستوى الدولة وأيضا للصادرات من نفس السلعة على مستوى العالم 


مؤشر التنافسية الظاهرة لفولراث 
الميزة النسبيه الظاهرة 


معدل نمو الصادرات 
النصيب السوقي للصادرات 
# 




من الخطوط العامة لمداخل التنافسية في الدول المتقدمة 



الميزة القومية لا تكتسب 
الميزة القومية تورث 
الميزة تنافسيه وليست نسبيه 
الميزة التنافسية نسبيه 
# 




من محددات الميزة التنافسية وتشتمل على المجموع الكلي للمزايا والخواص للسلعة أو الخدمة وما يقترن بها من عمليات أو معاملات كالتغليق والتعبئة وظروف النقل ومدى المطابقة لمعايير الجودة العالمية أو تلك التي تفرضها الدول المستوردة 


راس المال البشري 
القدرة التكنولوجية 
الطلب المحلي 
مواصفات الجودة السلعية 
# 




من محددات الميزة التنافسية وهي الوسيلة التي يتم بها تحويل الموارد الى سلع وهي تعد شرطا ضروريا لتأهيل الدولة للمنافسة في الأسواق العالمية 


راس المال البشري 
القدرة التكنولوجية 
الطلب المحلي 
مواصفات الجودة السلعية 
# 




يقصد به السعر المدفوع أو الوجب دفعه ثمنا لهذا المنتج من قبل المستورد ودون تحميله باي تكاليف أو رسوم أو نفقات تزيد على ما يتحمله عند البيع 


هامش الإغراق 
الضرر 
سعر التصدير 
الإغراق 
# 




يقصد بها سعر المنتج في مجرى التجارة العادي في السوق المحلية لدولة المنشأ أو التصدير 


الإغراق 
سعر التصدير 
القيمة العادية
هامش الإغراق 
# 




يجوز لها تقدير القيمة العادية وفقا لتكلفه الإنتاج في دولة المنشأ مضافا اليها مبلغ مناسب من المصروفات البيعية والعمومية والإدارية وهامش ربح مناسب 


النقل الداخلي 
التامين البحري 
الشحن البحري 
سلطة التحقيق 
# 




يعرف بانه هو مقدار الإغراق كنسبة مئوية من سعر التصدير CIF 


هامش الإغراق 
الضرر 
سعر التصدير 
الإغراق 
# 




يقصد به انخفاض سعر بيع المنتح المستورد في السوق المحلي عن سعر بيع المنتج المثيل الذي تنتجه الصناعة المحلي على نفس المستوى التجاري 


منع الأسعار المحلية من الزيادة
الدعم 
تخفيض الأسعار 
الفرق السعري 
# 




يقصد به انحفاض أسعار بيع المنتج المحلي نتيجة تأثير الواردات التي تباع بأسعار مغرقه) منخفضه ( 


الدعم 
منع الأسعار المحلية من الزيادة 
تخفيض الأسعار 
الفرق السعري 
# 




يقصد به عدم حدوث الزيادة في الأسعار التي كان من الممكن أن تحدث لولا وجود الواردات المغرقة 


الدعم 
منع الأسعار المحلية من الزيادة 
تخفيض الأسعار 
الفرق السعري 
# 




يعرف بانه الأثار السلبية التي تقع على الصناعة المحلية نتيجة للممارسات الغير عادله في التجارة الدولية 


هامش الإغراق 
الضرر 
سعر التصدير 
الإغراق 
# 




يقسم الضرر الى 


نوع واحد 
خمسه أنواع 
ثلاثة أنواع 
نوعان 
# 




من أنواع الضرر، وهو يعني أن هناك ضرر وقع بالفعل على الصناعة المحلية 


ضرر مادي 
التهديد بالضرر 
الإعاقة المادية 
الأرباح 
# 




الضرر المادي، وهو يعني أن هناك ضرر وقع بالفعل على الصناعة المحلية ويتم بحثه من خلال 


سبعه عناصر 
خمسه عناصر 
ثلاثة عناصر 
عنصر 
# 




يعتبر معدل زيادة كبيره في الواردات المغرقة الى السوق المحلي مما يكشف عن احتمال حدوث زيادة كبيره في الاستيراد من 


عوامل الضرر المادي 
عوامل التهديد
عوامل الإعاقة
عوامل الدعم بالضرر المادية 
# 




من أنواع الضرر، وهي أنها تفسر على أن الواردات المغرقة تمنع قيام أو إنشاء صناعه جديده في الدولة المستوردة 


الأرباح 
الإعاقة المادية 
التهديد بالضرر 
ضرر مادي 
# 




يعتبر من أنواع الدعم، ويعرف بانه الدعم الذي يجب أن يمتنع الأعضاء كلية عن تقديمه 


الدعم المخصص للبيئة 
الدعم غير القابل لاتخاذ إجراء 
الدعم القابل لاتخاذ إجراء 
الدعم المحظور 
# 




يعرف بانه أي مساهمه ماليه مباشره أو غير مباشره مقدمه من دولة المنشأ أو من أي هيئة عامه بها من خلال برامج أو خطط وينتج عنها تحقيق فائدة للمنتج أو المصدر 


الوقاية 
الضرر 
الدعم 
الإغراق 
# 




تعرف بانها إمكانيه فرض تدابير ضد الزيادة غير المبررة في الواردات سوآءا بشكلها المطلق أو النسبي من الإنتاج وتسبب ضرر جسيما بالصناعة المحلية أو تهديد بحدوث ضرر جسيم 


الوقاية 
الضرر 
الدعم 
الإغراق 
# 




تعرف بانها زيادة مطلقه أو زيادة نسبيه بالنسبة للإنتاج المحلي وهي زيادة حدثت مؤخرا بصورة مفاجئة وكبيره وجوهريه 


الإعاقة المادية 
الضرر الخطير 
الزيادة المبررة 
الزيادة غير المبررة 
# 




يعرف بانه مستوى اعلى من الضرر المادي في حالات مكافحة الإغراق والإجراءات التعويضية 


الإعاقة المادية 
الضرر الخطير 
الزيادة المبررة 
الزيادة غير المبررة 
# 




يعرف بان السلع إذا كان سعر تصديرها الى السوق المحلي في بلد الاستيراد اقل من قيمتها العادية في بلد التصدير 


الضرر 
الوقاية 
الدعم 
الإغراق 
# 




يعرف بانه الأضعاف الكلي الكبير في مركز الصناعة المحلية أو التهديد بوقوعه استنادا على وقائع وليس مجرد ادعاءات أو تكهنات 


الضرر البسيط 
الضرر الخطير 
الزيادة المبررة 
الزيادة غير المبررة 
# 




من أنواع الدعم المحظور 


الدعم المخصص للبحوث والتطوير 
دعم التصدير 
الدعم المخصص للبيئة 
الدعم غير المخصص 
# 




من أنواعه الدعم، وهو الدعم الذي لا يكون محظورا ويسبب ضررا بالصناعة المحلية لعضو أخر من أعضاء منظمه التجارة العالمية 


الدعم المخصص للبيئة 
الدعم غير القابل لاتخاذ إجراء 
الدعم المحظور 
الدعم القابل لاتخاذ إجراء 
# 




هو الفرق بين القيمة العادية وسعر التصدير 


هامش الإغراق 
مقدار الإغراق 
الوقاية 
الدعم 
# 




طبقا لاتفاق مكافحة الإغراق يجب إثبات علاقة السببية عن طريق ما يعرف بانه حدوث الضرر تزامن مع زيادة الواردات المغرقة 


سعر التصدير 
بحث التزامن 
الدعم 
الزيادة غير المبررة 
# 




تعرف بانها زيادة الواردات سوآءا كانت مطلقه أو نسبيه وهي زيادة نسبة الواردات الى الإنتاج أو الاستهلاك 


أثر الواردات على اقتصاديات الصناعة المحلية بالنسبة لحجم الواردات 
اثر الواردات على أسعار السلع المنتجة في السوق المحلي 
الفرق السعري 
تخفيض الأسعار 
`,ks=[2,3,1,2,2,2,2,1,1,2,3,3,2,2,1,3,1,2,1,4,2,3,2,2,4,2,3,4,3,1,3,4,1,2,2,3,1,2,3,1,2,3,4,4,3,4,4,1,2,2,2,4,1,2,3,4,1,3,1,3,2,4,1,3,2,4,1,1,2,1,4,3,2,1,3,2,3,1,4,1,2,3,3,2,1,2,2,3,1,2,4,1,3,1,3,3,1,3,3,4],m0=p0.split("#").map((e,t)=>{let n=e.trim().split(`
`).filter(o=>o.trim().length>0),r=n.shift();n.length>4&&console.log(t+1,ks[t],`{question: "${e}", answer: ${ks[t]}},`);const i=n.reverse().map((o,s)=>({id:Wr(),text:o,correct:s+1===ks[t]}));return gp(Wr(),r??"error extracting questions",i)}),vp={"تجارة دولية 1":f0,"تجارة دولية 2":m0},y0=()=>{},Wa=A.createContext(vp),Qa=A.createContext([]),ti=A.createContext(()=>{}),Qn=A.createContext(hp),ni=A.createContext(y0),h0=({children:e})=>{const[t,n]=A.useState(hp),[r,i]=A.useReducer(o0,[]);return k.jsx(ni.Provider,{value:n,children:k.jsx(ti.Provider,{value:i,children:k.jsx(Wa.Provider,{value:vp,children:k.jsx(Qn.Provider,{value:t,children:k.jsx(Qa.Provider,{value:r,children:e})})})})})},g0=""+new URL("burger-17a20998.svg",import.meta.url).href;function Ct(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $c(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function K(e){return this instanceof K?(this.v=e,this):new K(e)}function go(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(d){r[d]&&(i[d]=function(g){return new Promise(function(h,v){o.push([d,g,h,v])>1||l(d,g)})})}function l(d,g){try{a(r[d](g))}catch(h){f(o[0][3],h)}}function a(d){d.value instanceof K?Promise.resolve(d.value.v).then(u,c):f(o[0][2],d)}function u(d){l("next",d)}function c(d){l("throw",d)}function f(d,g){d(g),o.shift(),o.length&&l(o[0][0],o[0][1])}}function vo(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(s){return(n=!n)?{value:K(e[i](s)),done:!1}:o?o(s):s}:o}}function Mn(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof $c=="function"?$c(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(l,a){s=e[o](s),i(l,a,s.done,s.value)})}}function i(o,s,l,a){Promise.resolve(a).then(function(u){o({value:u,done:l})},s)}}function v0(e){return typeof e<"u"&&e!==null}function wp(e,t){if(!v0(e)||typeof e!="object")return!1;for(const n of t)if(!w0(e,n))return!1;return!0}function w0(e,t){return typeof e=="object"&&t in e}function Ga(e){return wp(e,["name","key"])&&typeof e.key=="string"&&typeof e.name=="string"}function Xa(e){return wp(e,["signature"])&&typeof e.signature=="string"}function Ya(e){const t=e;return t&&typeof t.getToken=="function"&&(t.signRequest===void 0||t.getToken.length>0)}function jc(e,t=!0){const n=e.toISOString();return t?n.substring(0,n.length-1)+"0000Z":n.substring(0,n.length-5)+"Z"}const x0="HTTP/1.1",We=`\r
`,xp="https://storage.azure.com/.default",wo={AUTHORIZATION:"authorization",CONTENT_LENGTH:"content-length",CONTENT_MD5:"content-md5",CONTENT_TYPE:"content-type",CONTENT_TRANSFER_ENCODING:"content-transfer-encoding",DATE:"date",X_MS_DATE:"x-ms-date",X_MS_VERSION:"x-ms-version"},Sp=["Access-Control-Allow-Origin","Cache-Control","Content-Length","Content-Type","Date","Prefer","Preference-Applied","Request-Id","traceparent","Transfer-Encoding","User-Agent","x-ms-client-request-id","x-ms-user-agent","x-ms-date","x-ms-error-code","x-ms-request-id","x-ms-return-client-request-id","x-ms-version","Accept-Ranges","Accept","Content-Disposition","Content-Encoding","Content-Language","Content-MD5","Content-Range","ETag","Last-Modified","Server","Vary","x-ms-content-crc64","x-ms-copy-action","x-ms-copy-completion-time","x-ms-copy-id","x-ms-copy-progress","x-ms-copy-status","x-ms-continuation-NextTableName","x-ms-continuation-NextPartitionKey","x-ms-continuation-NextRowKey","x-ms-has-immutability-policy","x-ms-has-legal-hold","x-ms-lease-state","x-ms-lease-status","x-ms-range","x-ms-request-server-encrypted","x-ms-server-encrypted","x-ms-snapshot","x-ms-source-range","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","x-ms-access-tier","x-ms-access-tier-change-time","x-ms-access-tier-inferred","x-ms-account-kind","x-ms-archive-status","x-ms-copy-destination-snapshot","x-ms-creation-time","x-ms-default-encryption-scope","x-ms-delete-type-permanent","x-ms-deny-encryption-scope-override","x-ms-encryption-algorithm","x-ms-incremental-copy","x-ms-lease-action","x-ms-lease-break-period","x-ms-lease-duration","x-ms-lease-id","x-ms-lease-time","x-ms-page-write","x-ms-proposed-lease-id","x-ms-range-get-content-md5","x-ms-rehydrate-priority","x-ms-sequence-number-action","x-ms-sku-name","x-ms-source-content-md5","x-ms-source-if-match","x-ms-source-if-modified-since","x-ms-source-if-none-match","x-ms-source-if-unmodified-since","x-ms-tag-count","x-ms-encryption-key-sha256"],S0="tablesSecondaryEndpointPolicy",Al="tables-secondary-endpoint",N0="-secondary",P0={name:S0,sendRequest:async(e,t)=>(e.headers.get(Al)&&(e.headers.delete(Al),e.url=C0(e.url)),t(e))};function E0(e){var t;const n={[Al]:"true"};return Object.assign(Object.assign({},e),{requestOptions:Object.assign(Object.assign({},e.requestOptions),{customHeaders:Object.assign(Object.assign({},(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders),n)})})}function C0(e){const t=new URL(e),n=t.hostname.split(".");return n.length>1&&(n[0]=`${n[0]}${N0}`),t.hostname=n.join("."),t.toString()}const Ml="$",Np="_";if(!document||!DOMParser||!Node||!XMLSerializer)throw new Error('This library depends on the following DOM objects: ["document", "DOMParser", "Node", "XMLSerializer"] to parse XML, but some of these are undefined. You may provide a polyfill to make these globally available in order to support your environment. For more information, please refer to https://aka.ms/azsdk/js/web-workers. ');let Jt;try{typeof self.trustedTypes<"u"&&(Jt=self.trustedTypes.createPolicy("@azure/core-xml#xml.browser",{createHTML:e=>e}))}catch{console.warn('Could not create trusted types policy "@azure/core-xml#xml.browser"')}const qi=document.implementation.createDocument(null,null,null),Pp=new DOMParser;function Ep(e,t={}){var n,r,i,o,s,l;try{const a={rootName:(n=t.rootName)!==null&&n!==void 0?n:"",includeRoot:(r=t.includeRoot)!==null&&r!==void 0?r:!1,xmlCharKey:(i=t.xmlCharKey)!==null&&i!==void 0?i:Np,cdataPropName:(o=t.cdataPropName)!==null&&o!==void 0?o:"__cdata",stopNodes:(s=t.stopNodes)!==null&&s!==void 0?s:[]},u=Pp.parseFromString((l=Jt==null?void 0:Jt.createHTML(e))!==null&&l!==void 0?l:e,"application/xml");k0(u);let c;return a.includeRoot?c=bl(u,a):c=bl(u.childNodes[0],a),Promise.resolve(c)}catch(a){return Promise.reject(a)}}let mr;function T0(){var e,t;if(mr===void 0)try{const n=(e=Jt==null?void 0:Jt.createHTML("INVALID"))!==null&&e!==void 0?e:"INVALID";mr=(t=Pp.parseFromString(n,"text/xml").getElementsByTagName("parsererror")[0].namespaceURI)!==null&&t!==void 0?t:""}catch{mr=""}return mr}function k0(e){const t=e.getElementsByTagName("parsererror");if(t.length>0&&T0()){for(let n=0;n<t.length;n++)if(t[n].namespaceURI===mr)throw new Error(t[n].innerHTML)}}function O0(e){return!!e.attributes}function z0(e){return O0(e)&&e.hasAttributes()?e:void 0}function bl(e,t){var n;let r={};const i=e.childNodes.length,o=e.childNodes[0],s=o&&i===1&&o.nodeType===Node.TEXT_NODE&&o.nodeValue||void 0,l=z0(e);if(l){r[Ml]={};for(let a=0;a<l.attributes.length;a++){const u=l.attributes[a];r[Ml][u.nodeName]=u.nodeValue}s&&(r[t.xmlCharKey]=s)}else i===0?r="":s&&(r=s);if(!s)for(let a=0;a<i;a++){const u=e.childNodes[a];if((u==null?void 0:u.nodeType)===Node.CDATA_SECTION_NODE)r=u.textContent;else if(((n=u==null?void 0:u.firstChild)===null||n===void 0?void 0:n.nodeType)===Node.CDATA_SECTION_NODE)r[u.nodeName]=u.textContent;else if(u.nodeType!==Node.TEXT_NODE){const c=bl(u,t);r[u.nodeName]?Array.isArray(r[u.nodeName])?r[u.nodeName].push(c):r[u.nodeName]=[r[u.nodeName],c]:r[u.nodeName]=c}}return r}const R0=new XMLSerializer;function Cp(e,t={}){var n,r,i,o,s;const l={rootName:(n=t.rootName)!==null&&n!==void 0?n:"root",includeRoot:(r=t.includeRoot)!==null&&r!==void 0?r:!1,xmlCharKey:(i=t.xmlCharKey)!==null&&i!==void 0?i:Np,cdataPropName:(o=t.cdataPropName)!==null&&o!==void 0?o:"__cdata",stopNodes:(s=t.stopNodes)!==null&&s!==void 0?s:[]},a=Il(e,l.rootName,l)[0];return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+R0.serializeToString(a)}function _0(e){const t=[];for(const n of Object.keys(e)){const r=qi.createAttribute(n);r.value=e[n].toString(),t.push(r)}return t}function Il(e,t,n){if(e==null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"){const r=qi.createElement(t);return r.textContent=e==null?"":e.toString(),[r]}else if(Array.isArray(e)){const r=[];for(const i of e)for(const o of Il(i,t,n))r.push(o);return r}else if(typeof e=="object"){const r=qi.createElement(t);for(const i of Object.keys(e))if(i===Ml)for(const o of _0(e[i]))r.attributes.setNamedItem(o);else if(i===n.xmlCharKey)r.textContent=e[i].toString();else if(i===n.cdataPropName){const o=qi.createCDATASection(e[i].toString());r.appendChild(o)}else for(const o of Il(e[i],i,n))r.appendChild(o);return[r]}else throw new Error(`Illegal value passed to buildObject: ${e}`)}function Tp(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function kp(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}const se="$",Qr="_";function A0(e,t){return t!=="Composite"&&t!=="Dictionary"&&(typeof e=="string"||typeof e=="number"||typeof e=="boolean"||(t==null?void 0:t.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i))!==null||e===void 0||e===null)}const M0=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function b0(e){return M0.test(e)}const I0=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;function D0(e){return I0.test(e)}function $0(e){const t=Object.assign(Object.assign({},e.headers),e.body);return e.hasNullableType&&Object.getOwnPropertyNames(t).length===0?e.shouldWrapBody?{body:null}:null:e.shouldWrapBody?Object.assign(Object.assign({},e.headers),{body:e.body}):t}function Lc(e,t){var n,r;const i=e.parsedHeaders;if(e.request.method==="HEAD")return Object.assign(Object.assign({},i),{body:e.parsedBody});const o=t&&t.bodyMapper,s=!!(o!=null&&o.nullable),l=o==null?void 0:o.type.name;if(l==="Stream")return Object.assign(Object.assign({},i),{blobBody:e.blobBody,readableStreamBody:e.readableStreamBody});const a=l==="Composite"&&o.type.modelProperties||{},u=Object.keys(a).some(c=>a[c].serializedName==="");if(l==="Sequence"||u){const c=(n=e.parsedBody)!==null&&n!==void 0?n:[];for(const f of Object.keys(a))a[f].serializedName&&(c[f]=(r=e.parsedBody)===null||r===void 0?void 0:r[f]);if(i)for(const f of Object.keys(i))c[f]=i[f];return s&&!e.parsedBody&&!i&&Object.getOwnPropertyNames(a).length===0?null:c}return $0({body:e.parsedBody,headers:i,hasNullableType:s,shouldWrapBody:A0(e.parsedBody,l)})}class j0{constructor(t={},n=!1){this.modelMappers=t,this.isXML=n}validateConstraints(t,n,r){const i=(o,s)=>{throw new Error(`"${r}" with value "${n}" should satisfy the constraint "${o}": ${s}.`)};if(t.constraints&&n!==void 0&&n!==null){const{ExclusiveMaximum:o,ExclusiveMinimum:s,InclusiveMaximum:l,InclusiveMinimum:a,MaxItems:u,MaxLength:c,MinItems:f,MinLength:d,MultipleOf:g,Pattern:h,UniqueItems:v}=t.constraints;if(o!==void 0&&n>=o&&i("ExclusiveMaximum",o),s!==void 0&&n<=s&&i("ExclusiveMinimum",s),l!==void 0&&n>l&&i("InclusiveMaximum",l),a!==void 0&&n<a&&i("InclusiveMinimum",a),u!==void 0&&n.length>u&&i("MaxItems",u),c!==void 0&&n.length>c&&i("MaxLength",c),f!==void 0&&n.length<f&&i("MinItems",f),d!==void 0&&n.length<d&&i("MinLength",d),g!==void 0&&n%g!==0&&i("MultipleOf",g),h){const N=typeof h=="string"?new RegExp(h):h;(typeof n!="string"||n.match(N)===null)&&i("Pattern",h)}v&&n.some((N,m,p)=>p.indexOf(N)!==m)&&i("UniqueItems",v)}}serialize(t,n,r,i={xml:{}}){var o,s,l;const a={xml:{rootName:(o=i.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=i.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(l=i.xml.xmlCharKey)!==null&&l!==void 0?l:Qr}};let u={};const c=t.type.name;r||(r=t.serializedName),c.match(/^Sequence$/i)!==null&&(u=[]),t.isConstant&&(n=t.defaultValue);const{required:f,nullable:d}=t;if(f&&d&&n===void 0)throw new Error(`${r} cannot be undefined.`);if(f&&!d&&n==null)throw new Error(`${r} cannot be null or undefined.`);if(!f&&d===!1&&n===null)throw new Error(`${r} cannot be null.`);return n==null||c.match(/^any$/i)!==null?u=n:c.match(/^(Number|String|Boolean|Object|Stream|Uuid)$/i)!==null?u=V0(c,r,n):c.match(/^Enum$/i)!==null?u=B0(r,t.type.allowedValues,n):c.match(/^(Date|DateTime|TimeSpan|DateTimeRfc1123|UnixTime)$/i)!==null?u=Q0(c,n,r):c.match(/^ByteArray$/i)!==null?u=K0(r,n):c.match(/^Base64Url$/i)!==null?u=W0(r,n):c.match(/^Sequence$/i)!==null?u=G0(this,t,n,r,!!this.isXML,a):c.match(/^Dictionary$/i)!==null?u=X0(this,t,n,r,!!this.isXML,a):c.match(/^Composite$/i)!==null&&(u=Z0(this,t,n,r,!!this.isXML,a)),u}deserialize(t,n,r,i={xml:{}}){var o,s,l,a;const u={xml:{rootName:(o=i.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=i.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(l=i.xml.xmlCharKey)!==null&&l!==void 0?l:Qr},ignoreUnknownProperties:(a=i.ignoreUnknownProperties)!==null&&a!==void 0?a:!1};if(n==null)return this.isXML&&t.type.name==="Sequence"&&!t.xmlIsWrapped&&(n=[]),t.defaultValue!==void 0&&(n=t.defaultValue),n;let c;const f=t.type.name;if(r||(r=t.serializedName),f.match(/^Composite$/i)!==null)c=ev(this,t,n,r,u);else{if(this.isXML){const d=u.xml.xmlCharKey;n[se]!==void 0&&n[d]!==void 0&&(n=n[d])}f.match(/^Number$/i)!==null?(c=parseFloat(n),isNaN(c)&&(c=n)):f.match(/^Boolean$/i)!==null?n==="true"?c=!0:n==="false"?c=!1:c=n:f.match(/^(String|Enum|Object|Stream|Uuid|TimeSpan|any)$/i)!==null?c=n:f.match(/^(Date|DateTime|DateTimeRfc1123)$/i)!==null?c=new Date(n):f.match(/^UnixTime$/i)!==null?c=F0(n):f.match(/^ByteArray$/i)!==null?c=kp(n):f.match(/^Base64Url$/i)!==null?c=q0(n):f.match(/^Sequence$/i)!==null?c=nv(this,t,n,r,u):f.match(/^Dictionary$/i)!==null&&(c=tv(this,t,n,r,u))}return t.isConstant&&(c=t.defaultValue),c}}function Za(e={},t=!1){return new j0(e,t)}function L0(e,t){let n=e.length;for(;n-1>=0&&e[n-1]===t;)--n;return e.substr(0,n)}function U0(e){if(!e)return;if(!(e instanceof Uint8Array))throw new Error("Please provide an input of type Uint8Array for converting to Base64Url.");const t=Tp(e);return L0(t,"=").replace(/\+/g,"-").replace(/\//g,"_")}function q0(e){if(e){if(e&&typeof e.valueOf()!="string")throw new Error("Please provide an input of type string for converting to Uint8Array");return e=e.replace(/-/g,"+").replace(/_/g,"/"),kp(e)}}function Dl(e){const t=[];let n="";if(e){const r=e.split(".");for(const i of r)i.charAt(i.length-1)==="\\"?n+=i.substr(0,i.length-1)+".":(n+=i,t.push(n),n="")}return t}function H0(e){if(e)return typeof e.valueOf()=="string"&&(e=new Date(e)),Math.floor(e.getTime()/1e3)}function F0(e){if(e)return new Date(e*1e3)}function V0(e,t,n){if(n!=null){if(e.match(/^Number$/i)!==null){if(typeof n!="number")throw new Error(`${t} with value ${n} must be of type number.`)}else if(e.match(/^String$/i)!==null){if(typeof n.valueOf()!="string")throw new Error(`${t} with value "${n}" must be of type string.`)}else if(e.match(/^Uuid$/i)!==null){if(!(typeof n.valueOf()=="string"&&D0(n)))throw new Error(`${t} with value "${n}" must be of type string and a valid uuid.`)}else if(e.match(/^Boolean$/i)!==null){if(typeof n!="boolean")throw new Error(`${t} with value ${n} must be of type boolean.`)}else if(e.match(/^Stream$/i)!==null){const r=typeof n;if(r!=="string"&&typeof n.pipe!="function"&&!(n instanceof ArrayBuffer)&&!ArrayBuffer.isView(n)&&!((typeof Blob=="function"||typeof Blob=="object")&&n instanceof Blob)&&r!=="function")throw new Error(`${t} must be a string, Blob, ArrayBuffer, ArrayBufferView, NodeJS.ReadableStream, or () => NodeJS.ReadableStream.`)}}return n}function B0(e,t,n){if(!t)throw new Error(`Please provide a set of allowedValues to validate ${e} as an Enum Type.`);if(!t.some(i=>typeof i.valueOf()=="string"?i.toLowerCase()===n.toLowerCase():i===n))throw new Error(`${n} is not a valid value for ${e}. The valid values are: ${JSON.stringify(t)}.`);return n}function K0(e,t){if(t!=null){if(!(t instanceof Uint8Array))throw new Error(`${e} must be of type Uint8Array.`);t=Tp(t)}return t}function W0(e,t){if(t!=null){if(!(t instanceof Uint8Array))throw new Error(`${e} must be of type Uint8Array.`);t=U0(t)}return t}function Q0(e,t,n){if(t!=null){if(e.match(/^Date$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in ISO8601 format.`);t=t instanceof Date?t.toISOString().substring(0,10):new Date(t).toISOString().substring(0,10)}else if(e.match(/^DateTime$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in ISO8601 format.`);t=t instanceof Date?t.toISOString():new Date(t).toISOString()}else if(e.match(/^DateTimeRfc1123$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in RFC-1123 format.`);t=t instanceof Date?t.toUTCString():new Date(t).toUTCString()}else if(e.match(/^UnixTime$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in RFC-1123/ISO8601 format for it to be serialized in UnixTime/Epoch format.`);t=H0(t)}else if(e.match(/^TimeSpan$/i)!==null&&!b0(t))throw new Error(`${n} must be a string in ISO 8601 format. Instead was "${t}".`)}return t}function G0(e,t,n,r,i,o){var s;if(!Array.isArray(n))throw new Error(`${r} must be of type Array.`);let l=t.type.element;if(!l||typeof l!="object")throw new Error(`element" metadata for an Array must be defined in the mapper and it must of type "object" in ${r}.`);l.type.name==="Composite"&&l.type.className&&(l=(s=e.modelMappers[l.type.className])!==null&&s!==void 0?s:l);const a=[];for(let u=0;u<n.length;u++){const c=e.serialize(l,n[u],r,o);if(i&&l.xmlNamespace){const f=l.xmlNamespacePrefix?`xmlns:${l.xmlNamespacePrefix}`:"xmlns";l.type.name==="Composite"?(a[u]=Object.assign({},c),a[u][se]={[f]:l.xmlNamespace}):(a[u]={},a[u][o.xml.xmlCharKey]=c,a[u][se]={[f]:l.xmlNamespace})}else a[u]=c}return a}function X0(e,t,n,r,i,o){if(typeof n!="object")throw new Error(`${r} must be of type object.`);const s=t.type.value;if(!s||typeof s!="object")throw new Error(`"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ${r}.`);const l={};for(const a of Object.keys(n)){const u=e.serialize(s,n[a],r,o);l[a]=Rp(s,u,i,o)}if(i&&t.xmlNamespace){const a=t.xmlNamespacePrefix?`xmlns:${t.xmlNamespacePrefix}`:"xmlns",u=l;return u[se]={[a]:t.xmlNamespace},u}return l}function Y0(e,t,n){const r=t.type.additionalProperties;if(!r&&t.type.className){const i=Op(e,t,n);return i==null?void 0:i.type.additionalProperties}return r}function Op(e,t,n){const r=t.type.className;if(!r)throw new Error(`Class name for model "${n}" is not provided in the mapper "${JSON.stringify(t,void 0,2)}".`);return e.modelMappers[r]}function zp(e,t,n){let r=t.type.modelProperties;if(!r){const i=Op(e,t,n);if(!i)throw new Error(`mapper() cannot be null or undefined for model "${t.type.className}".`);if(r=i==null?void 0:i.type.modelProperties,!r)throw new Error(`modelProperties cannot be null or undefined in the mapper "${JSON.stringify(i)}" of type "${t.type.className}" for object "${n}".`)}return r}function Z0(e,t,n,r,i,o){if(xo(e,t)&&(t=_p(e,t,n,"clientName")),n!=null){const s={},l=zp(e,t,r);for(const u of Object.keys(l)){const c=l[u];if(c.readOnly)continue;let f,d=s;if(e.isXML)c.xmlIsWrapped?f=c.xmlName:f=c.xmlElementName||c.xmlName;else{const g=Dl(c.serializedName);f=g.pop();for(const h of g){const v=d[h];v==null&&(n[u]!==void 0&&n[u]!==null||c.defaultValue!==void 0)&&(d[h]={}),d=d[h]}}if(d!=null){if(i&&t.xmlNamespace){const m=t.xmlNamespacePrefix?`xmlns:${t.xmlNamespacePrefix}`:"xmlns";d[se]=Object.assign(Object.assign({},d[se]),{[m]:t.xmlNamespace})}const g=c.serializedName!==""?r+"."+c.serializedName:r;let h=n[u];const v=xo(e,t);v&&v.clientName===u&&h==null&&(h=t.serializedName);const N=e.serialize(c,h,g,o);if(N!==void 0&&f!==void 0&&f!==null){const m=Rp(c,N,i,o);i&&c.xmlIsAttribute?(d[se]=d[se]||{},d[se][f]=N):i&&c.xmlIsWrapped?d[f]={[c.xmlElementName]:m}:d[f]=m}}}const a=Y0(e,t,r);if(a){const u=Object.keys(l);for(const c in n)u.every(d=>d!==c)&&(s[c]=e.serialize(a,n[c],r+'["'+c+'"]',o))}return s}return n}function Rp(e,t,n,r){if(!n||!e.xmlNamespace)return t;const o={[e.xmlNamespacePrefix?`xmlns:${e.xmlNamespacePrefix}`:"xmlns"]:e.xmlNamespace};if(["Composite"].includes(e.type.name)){if(t[se])return t;{const l=Object.assign({},t);return l[se]=o,l}}const s={};return s[r.xml.xmlCharKey]=t,s[se]=o,s}function J0(e,t){return[se,t.xml.xmlCharKey].includes(e)}function ev(e,t,n,r,i){var o,s;const l=(o=i.xml.xmlCharKey)!==null&&o!==void 0?o:Qr;xo(e,t)&&(t=_p(e,t,n,"serializedName"));const a=zp(e,t,r);let u={};const c=[];for(const d of Object.keys(a)){const g=a[d],h=Dl(a[d].serializedName);c.push(h[0]);const{serializedName:v,xmlName:N,xmlElementName:m}=g;let p=r;v!==""&&v!==void 0&&(p=r+"."+v);const y=g.headerCollectionPrefix;if(y){const w={};for(const x of Object.keys(n))x.startsWith(y)&&(w[x.substring(y.length)]=e.deserialize(g.type.value,n[x],p,i)),c.push(x);u[d]=w}else if(e.isXML)if(g.xmlIsAttribute&&n[se])u[d]=e.deserialize(g,n[se][N],p,i);else if(g.xmlIsMsText)n[l]!==void 0?u[d]=n[l]:typeof n=="string"&&(u[d]=n);else{const w=m||N||v;if(g.xmlIsWrapped){const x=n[N],E=(s=x==null?void 0:x[m])!==null&&s!==void 0?s:[];u[d]=e.deserialize(g,E,p,i),c.push(N)}else{const x=n[w];u[d]=e.deserialize(g,x,p,i),c.push(w)}}else{let w,x=n,E=0;for(const b of h){if(!x)break;E++,x=x[b]}x===null&&E<h.length&&(x=void 0),w=x;const P=t.type.polymorphicDiscriminator;P&&d===P.clientName&&w==null&&(w=t.serializedName);let O;if(Array.isArray(n[d])&&a[d].serializedName===""){w=n[d];const b=e.deserialize(g,w,p,i);for(const[z,X]of Object.entries(u))Object.prototype.hasOwnProperty.call(b,z)||(b[z]=X);u=b}else(w!==void 0||g.defaultValue!==void 0)&&(O=e.deserialize(g,w,p,i),u[d]=O)}}const f=t.type.additionalProperties;if(f){const d=g=>{for(const h in a)if(Dl(a[h].serializedName)[0]===g)return!1;return!0};for(const g in n)d(g)&&(u[g]=e.deserialize(f,n[g],r+'["'+g+'"]',i))}else if(n&&!i.ignoreUnknownProperties)for(const d of Object.keys(n))u[d]===void 0&&!c.includes(d)&&!J0(d,i)&&(u[d]=n[d]);return u}function tv(e,t,n,r,i){const o=t.type.value;if(!o||typeof o!="object")throw new Error(`"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ${r}`);if(n){const s={};for(const l of Object.keys(n))s[l]=e.deserialize(o,n[l],r,i);return s}return n}function nv(e,t,n,r,i){var o;let s=t.type.element;if(!s||typeof s!="object")throw new Error(`element" metadata for an Array must be defined in the mapper and it must of type "object" in ${r}`);if(n){Array.isArray(n)||(n=[n]),s.type.name==="Composite"&&s.type.className&&(s=(o=e.modelMappers[s.type.className])!==null&&o!==void 0?o:s);const l=[];for(let a=0;a<n.length;a++)l[a]=e.deserialize(s,n[a],`${r}[${a}]`,i);return l}return n}function rv(e,t,n){const r=[n];for(;r.length;){const i=r.shift(),o=t===i?t:i+"."+t;if(Object.prototype.hasOwnProperty.call(e,o))return e[o];for(const[s,l]of Object.entries(e))s.startsWith(i+".")&&l.type.uberParent===i&&l.type.className&&r.push(l.type.className)}}function _p(e,t,n,r){var i;const o=xo(e,t);if(o){let s=o[r];if(s){r==="serializedName"&&(s=s.replace(/\\/gi,""));const l=n[s],a=(i=t.type.uberParent)!==null&&i!==void 0?i:t.type.className;if(typeof l=="string"&&a){const u=rv(e.modelMappers.discriminators,l,a);u&&(t=u)}}}return t}function xo(e,t){return t.type.polymorphicDiscriminator||Uc(e,t.type.uberParent)||Uc(e,t.type.className)}function Uc(e,t){return t&&e.modelMappers[t]&&e.modelMappers[t].type.polymorphicDiscriminator}const bn={Base64Url:"Base64Url",Boolean:"Boolean",ByteArray:"ByteArray",Composite:"Composite",Date:"Date",DateTime:"DateTime",DateTimeRfc1123:"DateTimeRfc1123",Dictionary:"Dictionary",Enum:"Enum",Number:"Number",Object:"Object",Sequence:"Sequence",String:"String",Stream:"Stream",TimeSpan:"TimeSpan",UnixTime:"UnixTime"},qc=new Set(["Deserialize","Serialize","Retry","Sign"]);class So{constructor(t){var n;this._policies=[],this._policies=(n=t==null?void 0:t.slice(0))!==null&&n!==void 0?n:[],this._orderedPolicies=void 0}addPolicy(t,n={}){if(n.phase&&n.afterPhase)throw new Error("Policies inside a phase cannot specify afterPhase.");if(n.phase&&!qc.has(n.phase))throw new Error(`Invalid phase name: ${n.phase}`);if(n.afterPhase&&!qc.has(n.afterPhase))throw new Error(`Invalid afterPhase name: ${n.afterPhase}`);this._policies.push({policy:t,options:n}),this._orderedPolicies=void 0}removePolicy(t){const n=[];return this._policies=this._policies.filter(r=>t.name&&r.policy.name===t.name||t.phase&&r.options.phase===t.phase?(n.push(r.policy),!1):!0),this._orderedPolicies=void 0,n}sendRequest(t,n){return this.getOrderedPolicies().reduceRight((o,s)=>l=>s.sendRequest(l,o),o=>t.sendRequest(o))(n)}getOrderedPolicies(){return this._orderedPolicies||(this._orderedPolicies=this.orderPolicies()),this._orderedPolicies}clone(){return new So(this._policies)}static create(){return new So}orderPolicies(){const t=[],n=new Map;function r(h){return{name:h,policies:new Set,hasRun:!1,hasAfterPolicies:!1}}const i=r("Serialize"),o=r("None"),s=r("Deserialize"),l=r("Retry"),a=r("Sign"),u=[i,o,s,l,a];function c(h){return h==="Retry"?l:h==="Serialize"?i:h==="Deserialize"?s:h==="Sign"?a:o}for(const h of this._policies){const v=h.policy,N=h.options,m=v.name;if(n.has(m))throw new Error("Duplicate policy names not allowed in pipeline");const p={policy:v,dependsOn:new Set,dependants:new Set};N.afterPhase&&(p.afterPhase=c(N.afterPhase),p.afterPhase.hasAfterPolicies=!0),n.set(m,p),c(N.phase).policies.add(p)}for(const h of this._policies){const{policy:v,options:N}=h,m=v.name,p=n.get(m);if(!p)throw new Error(`Missing node for policy ${m}`);if(N.afterPolicies)for(const y of N.afterPolicies){const w=n.get(y);w&&(p.dependsOn.add(w),w.dependants.add(p))}if(N.beforePolicies)for(const y of N.beforePolicies){const w=n.get(y);w&&(w.dependsOn.add(p),p.dependants.add(w))}}function f(h){h.hasRun=!0;for(const v of h.policies)if(!(v.afterPhase&&(!v.afterPhase.hasRun||v.afterPhase.policies.size))&&v.dependsOn.size===0){t.push(v.policy);for(const N of v.dependants)N.dependsOn.delete(v);n.delete(v.policy.name),h.policies.delete(v)}}function d(){for(const h of u){if(f(h),h.policies.size>0&&h!==o){o.hasRun||f(o);return}h.hasAfterPolicies&&f(o)}}let g=0;for(;n.size>0;){g++;const h=t.length;if(d(),t.length<=h&&g>1)throw new Error("Cannot satisfy policy dependencies due to requirements cycle.")}return t}}function iv(){return So.create()}function ov(...e){if(e.length>0){const t=String(e[0]);t.includes(":error")?console.error(...e):t.includes(":warning")?console.warn(...e):t.includes(":info")?console.info(...e):t.includes(":verbose")?console.debug(...e):console.debug(...e)}}const Hc=typeof process<"u"&&process.env&&{}.DEBUG||void 0;let Ap,$l=[],jl=[];const No=[];Hc&&Ja(Hc);const Mp=Object.assign(e=>bp(e),{enable:Ja,enabled:eu,disable:sv,log:ov});function Ja(e){Ap=e,$l=[],jl=[];const t=/\*/g,n=e.split(",").map(r=>r.trim().replace(t,".*?"));for(const r of n)r.startsWith("-")?jl.push(new RegExp(`^${r.substr(1)}$`)):$l.push(new RegExp(`^${r}$`));for(const r of No)r.enabled=eu(r.namespace)}function eu(e){if(e.endsWith("*"))return!0;for(const t of jl)if(t.test(e))return!1;for(const t of $l)if(t.test(e))return!0;return!1}function sv(){const e=Ap||"";return Ja(""),e}function bp(e){const t=Object.assign(n,{enabled:eu(e),destroy:lv,log:Mp.log,namespace:e,extend:av});function n(...r){t.enabled&&(r.length>0&&(r[0]=`${e} ${r[0]}`),t.log(...r))}return No.push(t),t}function lv(){const e=No.indexOf(this);return e>=0?(No.splice(e,1),!0):!1}function av(e){const t=bp(`${this.namespace}:${e}`);return t.log=this.log,t}const Gr=Mp,Ip=new Set,Pi=typeof process<"u"&&process.env&&{}.AZURE_LOG_LEVEL||void 0;let Ll;const Ul=Gr("azure");Ul.log=(...e)=>{Gr.log(...e)};const tu=["verbose","info","warning","error"];Pi&&(jp(Pi)?uv(Pi):console.error(`AZURE_LOG_LEVEL set to unknown log level '${Pi}'; logging is not enabled. Acceptable values: ${tu.join(", ")}.`));function uv(e){if(e&&!jp(e))throw new Error(`Unknown log level '${e}'. Acceptable values: ${tu.join(",")}`);Ll=e;const t=[];for(const n of Ip)$p(n)&&t.push(n.namespace);Gr.enable(t.join(","))}const Fc={verbose:400,info:300,warning:200,error:100};function qo(e){const t=Ul.extend(e);return Dp(Ul,t),{error:Ei(t,"error"),warning:Ei(t,"warning"),info:Ei(t,"info"),verbose:Ei(t,"verbose")}}function Dp(e,t){t.log=(...n)=>{e.log(...n)}}function Ei(e,t){const n=Object.assign(e.extend(t),{level:t});if(Dp(e,n),$p(n)){const r=Gr.disable();Gr.enable(r+","+n.namespace)}return Ip.add(n),n}function $p(e){return!!(Ll&&Fc[e.level]<=Fc[Ll])}function jp(e){return tu.includes(e)}const Gn=qo("core-rest-pipeline");class nu extends Error{constructor(t){super(t),this.name="AbortError"}}function cv(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function Lp(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function ru(e){if(Lp(e)){const t=typeof e.name=="string",n=typeof e.message=="string";return t&&n}return!1}function Ho(e){if(ru(e))return e.message;{let t;try{typeof e=="object"&&e?t=JSON.stringify(e):t=String(e)}catch{t="[unable to stringify input]"}return`Unknown error ${t}`}}function dv(){let e="";for(let t=0;t<32;t++){const n=Math.floor(Math.random()*16);t===12?e+="4":t===16?e+=n&3|8:e+=n.toString(16),(t===7||t===11||t===15||t===19)&&(e+="-")}return e}var Os;const fv=typeof((Os=globalThis==null?void 0:globalThis.crypto)===null||Os===void 0?void 0:Os.randomUUID)=="function"?globalThis.crypto.randomUUID.bind(globalThis.crypto):dv;function pv(){return fv()}const zs="REDACTED",mv=["x-ms-client-request-id","x-ms-return-client-request-id","x-ms-useragent","x-ms-correlation-request-id","x-ms-request-id","client-request-id","ms-cv","return-client-request-id","traceparent","Access-Control-Allow-Credentials","Access-Control-Allow-Headers","Access-Control-Allow-Methods","Access-Control-Allow-Origin","Access-Control-Expose-Headers","Access-Control-Max-Age","Access-Control-Request-Headers","Access-Control-Request-Method","Origin","Accept","Accept-Encoding","Cache-Control","Connection","Content-Length","Content-Type","Date","ETag","Expires","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Last-Modified","Pragma","Request-Id","Retry-After","Server","Transfer-Encoding","User-Agent","WWW-Authenticate"],yv=["api-version"];class Up{constructor({additionalAllowedHeaderNames:t=[],additionalAllowedQueryParameters:n=[]}={}){t=mv.concat(t),n=yv.concat(n),this.allowedHeaderNames=new Set(t.map(r=>r.toLowerCase())),this.allowedQueryParameters=new Set(n.map(r=>r.toLowerCase()))}sanitize(t){const n=new Set;return JSON.stringify(t,(r,i)=>{if(i instanceof Error)return Object.assign(Object.assign({},i),{name:i.name,message:i.message});if(r==="headers")return this.sanitizeHeaders(i);if(r==="url")return this.sanitizeUrl(i);if(r==="query")return this.sanitizeQuery(i);if(r==="body")return;if(r==="response")return;if(r==="operationSpec")return;if(Array.isArray(i)||Lp(i)){if(n.has(i))return"[Circular]";n.add(i)}return i},2)}sanitizeHeaders(t){const n={};for(const r of Object.keys(t))this.allowedHeaderNames.has(r.toLowerCase())?n[r]=t[r]:n[r]=zs;return n}sanitizeQuery(t){if(typeof t!="object"||t===null)return t;const n={};for(const r of Object.keys(t))this.allowedQueryParameters.has(r.toLowerCase())?n[r]=t[r]:n[r]=zs;return n}sanitizeUrl(t){if(typeof t!="string"||t===null)return t;const n=new URL(t);if(!n.search)return t;for(const[r]of n.searchParams)this.allowedQueryParameters.has(r.toLowerCase())||n.searchParams.set(r,zs);return n.toString()}}const hv="logPolicy";function gv(e={}){var t;const n=(t=e.logger)!==null&&t!==void 0?t:Gn.info,r=new Up({additionalAllowedHeaderNames:e.additionalAllowedHeaderNames,additionalAllowedQueryParameters:e.additionalAllowedQueryParameters});return{name:hv,async sendRequest(i,o){if(!n.enabled)return o(i);n(`Request: ${r.sanitize(i)}`);const s=await o(i);return n(`Response status code: ${s.status}`),n(`Headers: ${r.sanitize(s.headers)}`),s}}}function vv(){return"x-ms-useragent"}function wv(e){var t,n,r;const i=globalThis.navigator;e.set("OS",((r=(n=(t=i==null?void 0:i.userAgentData)===null||t===void 0?void 0:t.platform)!==null&&n!==void 0?n:i==null?void 0:i.platform)!==null&&r!==void 0?r:"unknown").replace(" ",""))}const qp="1.10.3",ql=3;function xv(e){const t=[];for(const[n,r]of e){const i=r?`${n}/${r}`:n;t.push(i)}return t.join(" ")}function Sv(){return vv()}function Hp(e){const t=new Map;t.set("core-rest-pipeline",qp),wv(t);const n=xv(t);return e?`${e} ${n}`:n}const Vc=Sv(),Nv="userAgentPolicy";function Pv(e={}){const t=Hp(e.userAgentPrefix);return{name:Nv,async sendRequest(n,r){return n.headers.has(Vc)||n.headers.set(Vc,t),r(n)}}}const Ev="The operation was aborted.";function Fp(e,t,n){return new Promise((r,i)=>{let o,s;const l=()=>i(new nu(n!=null&&n.abortErrorMsg?n==null?void 0:n.abortErrorMsg:Ev)),a=()=>{n!=null&&n.abortSignal&&s&&n.abortSignal.removeEventListener("abort",s)};if(s=()=>(o&&clearTimeout(o),a(),l()),n!=null&&n.abortSignal&&n.abortSignal.aborted)return l();o=setTimeout(()=>{a(),r(t)},e),n!=null&&n.abortSignal&&n.abortSignal.addEventListener("abort",s)})}function Cv(e,t){const n=e.headers.get(t);if(!n)return;const r=Number(n);if(!Number.isNaN(r))return r}const Hl="Retry-After",Tv=["retry-after-ms","x-ms-retry-after-ms",Hl];function Vp(e){if(e&&[429,503].includes(e.status))try{for(const i of Tv){const o=Cv(e,i);if(o===0||o)return o*(i===Hl?1e3:1)}const t=e.headers.get(Hl);if(!t)return;const r=Date.parse(t)-Date.now();return Number.isFinite(r)?Math.max(0,r):void 0}catch{return}}function kv(e){return Number.isFinite(Vp(e))}function Ov(){return{name:"throttlingRetryStrategy",retry({response:e}){const t=Vp(e);return Number.isFinite(t)?{retryAfterInMs:t}:{skipStrategy:!0}}}}const zv=1e3,Rv=1e3*64;function _v(e={}){var t,n;const r=(t=e.retryDelayInMs)!==null&&t!==void 0?t:zv,i=(n=e.maxRetryDelayInMs)!==null&&n!==void 0?n:Rv;let o=r;return{name:"exponentialRetryStrategy",retry({retryCount:s,response:l,responseError:a}){const u=Mv(a),c=u&&e.ignoreSystemErrors,f=Av(l),d=f&&e.ignoreHttpStatusCodes;if(l&&(kv(l)||!f)||d||c)return{skipStrategy:!0};if(a&&!u&&!f)return{errorToThrow:a};const h=o*Math.pow(2,s),v=Math.min(i,h);return o=v/2+cv(0,v/2),{retryAfterInMs:o}}}}function Av(e){return!!(e&&e.status!==void 0&&(e.status>=500||e.status===408)&&e.status!==501&&e.status!==505)}function Mv(e){return e?e.code==="ETIMEDOUT"||e.code==="ESOCKETTIMEDOUT"||e.code==="ECONNREFUSED"||e.code==="ECONNRESET"||e.code==="ENOENT":!1}const Bc=qo("core-rest-pipeline retryPolicy"),bv="retryPolicy";function Iv(e,t={maxRetries:ql}){const n=t.logger||Bc;return{name:bv,async sendRequest(r,i){var o,s;let l,a,u=-1;e:for(;;){u+=1,l=void 0,a=void 0;try{n.info(`Retry ${u}: Attempting to send request`,r.requestId),l=await i(r),n.info(`Retry ${u}: Received a response from request`,r.requestId)}catch(c){if(n.error(`Retry ${u}: Received an error from request`,r.requestId),a=c,!c||a.name!=="RestError")throw c;l=a.response}if(!((o=r.abortSignal)===null||o===void 0)&&o.aborted)throw n.error(`Retry ${u}: Request aborted.`),new nu;if(u>=((s=t.maxRetries)!==null&&s!==void 0?s:ql)){if(n.info(`Retry ${u}: Maximum retries reached. Returning the last received response, or throwing the last received error.`),a)throw a;if(l)return l;throw new Error("Maximum retries reached with no response or error to throw")}n.info(`Retry ${u}: Processing ${e.length} retry strategies.`);t:for(const c of e){const f=c.logger||Bc;f.info(`Retry ${u}: Processing retry strategy ${c.name}.`);const d=c.retry({retryCount:u,response:l,responseError:a});if(d.skipStrategy){f.info(`Retry ${u}: Skipped.`);continue t}const{errorToThrow:g,retryAfterInMs:h,redirectTo:v}=d;if(g)throw f.error(`Retry ${u}: Retry strategy ${c.name} throws error:`,g),g;if(h||h===0){f.info(`Retry ${u}: Retry strategy ${c.name} retries after ${h}`),await Fp(h,void 0,{abortSignal:r.abortSignal});continue e}if(v){f.info(`Retry ${u}: Retry strategy ${c.name} redirects to ${v}`),r.url=v;continue e}}if(a)throw n.info("None of the retry strategies could work with the received error. Throwing it."),a;if(l)return n.info("None of the retry strategies could work with the received response. Returning it."),l}}}}const Dv="defaultRetryPolicy";function $v(e={}){var t;return{name:Dv,sendRequest:Iv([Ov(),_v(e)],{maxRetries:(t=e.maxRetries)!==null&&t!==void 0?t:ql}).sendRequest}}const jv="formDataPolicy";function Lv(){return{name:jv,async sendRequest(e,t){if(e.formData){const n=e.formData,r=new FormData;for(const o of Object.keys(n)){const s=n[o];if(Array.isArray(s))for(const l of s)r.append(o,l);else r.append(o,s)}e.body=r,e.formData=void 0;const i=e.headers.get("Content-Type");i&&i.indexOf("application/x-www-form-urlencoded")!==-1?e.body=new URLSearchParams(r).toString():i&&i.indexOf("multipart/form-data")!==-1&&e.headers.delete("Content-Type")}return t(e)}}}const Uv="setClientRequestIdPolicy";function qv(e="x-ms-client-request-id"){return{name:Uv,async sendRequest(t,n){return t.headers.has(e)||t.headers.set(e,t.requestId),n(t)}}}const Cr={span:Symbol.for("@azure/core-tracing span"),namespace:Symbol.for("@azure/core-tracing namespace")};function Hv(e={}){let t=new Tr(e.parentContext);return e.span&&(t=t.setValue(Cr.span,e.span)),e.namespace&&(t=t.setValue(Cr.namespace,e.namespace)),t}class Tr{constructor(t){this._contextMap=t instanceof Tr?new Map(t._contextMap):new Map}setValue(t,n){const r=new Tr(this);return r._contextMap.set(t,n),r}getValue(t){return this._contextMap.get(t)}deleteValue(t){const n=new Tr(this);return n._contextMap.delete(t),n}}function Fv(){return{end:()=>{},isRecording:()=>!1,recordException:()=>{},setAttribute:()=>{},setStatus:()=>{}}}function Vv(){return{createRequestHeaders:()=>({}),parseTraceparentHeader:()=>{},startSpan:(e,t)=>({span:Fv(),tracingContext:Hv({parentContext:t.tracingContext})}),withContext(e,t,...n){return t(...n)}}}let Rs;function Ci(){return Rs||(Rs=Vv()),Rs}function Bp(e){const{namespace:t,packageName:n,packageVersion:r}=e;function i(u,c,f){var d;const g=Ci().startSpan(u,Object.assign(Object.assign({},f),{packageName:n,packageVersion:r,tracingContext:(d=c==null?void 0:c.tracingOptions)===null||d===void 0?void 0:d.tracingContext}));let h=g.tracingContext;const v=g.span;h.getValue(Cr.namespace)||(h=h.setValue(Cr.namespace,t)),v.setAttribute("az.namespace",h.getValue(Cr.namespace));const N=Object.assign({},c,{tracingOptions:Object.assign(Object.assign({},c==null?void 0:c.tracingOptions),{tracingContext:h})});return{span:v,updatedOptions:N}}async function o(u,c,f,d){const{span:g,updatedOptions:h}=i(u,c,d);try{const v=await s(h.tracingOptions.tracingContext,()=>Promise.resolve(f(h,g)));return g.setStatus({status:"success"}),v}catch(v){throw g.setStatus({status:"error",error:v}),v}finally{g.end()}}function s(u,c,...f){return Ci().withContext(u,c,...f)}function l(u){return Ci().parseTraceparentHeader(u)}function a(u){return Ci().createRequestHeaders(u)}return{startSpan:i,withSpan:o,withContext:s,parseTraceparentHeader:l,createRequestHeaders:a}}const Bv={},Kv=new Up;class qe extends Error{constructor(t,n={}){super(t),this.name="RestError",this.code=n.code,this.statusCode=n.statusCode,this.request=n.request,this.response=n.response,Object.setPrototypeOf(this,qe.prototype)}[Bv](){return`RestError: ${this.message} 
 ${Kv.sanitize(this)}`}}qe.REQUEST_SEND_ERROR="REQUEST_SEND_ERROR";qe.PARSE_ERROR="PARSE_ERROR";function Wv(e){return e instanceof qe?!0:ru(e)&&e.name==="RestError"}const Qv="tracingPolicy";function Gv(e={}){const t=Hp(e.userAgentPrefix),n=Xv();return{name:Qv,async sendRequest(r,i){var o,s;if(!n||!(!((o=r.tracingOptions)===null||o===void 0)&&o.tracingContext))return i(r);const{span:l,tracingContext:a}=(s=Yv(n,r,t))!==null&&s!==void 0?s:{};if(!l||!a)return i(r);try{const u=await n.withContext(a,i,r);return Jv(l,u),u}catch(u){throw Zv(l,u),u}}}}function Xv(){try{return Bp({namespace:"",packageName:"@azure/core-rest-pipeline",packageVersion:qp})}catch(e){Gn.warning(`Error when creating the TracingClient: ${Ho(e)}`);return}}function Yv(e,t,n){try{const{span:r,updatedOptions:i}=e.startSpan(`HTTP ${t.method}`,{tracingOptions:t.tracingOptions},{spanKind:"client",spanAttributes:{"http.method":t.method,"http.url":t.url,requestId:t.requestId}});if(!r.isRecording()){r.end();return}n&&r.setAttribute("http.user_agent",n);const o=e.createRequestHeaders(i.tracingOptions.tracingContext);for(const[s,l]of Object.entries(o))t.headers.set(s,l);return{span:r,tracingContext:i.tracingOptions.tracingContext}}catch(r){Gn.warning(`Skipping creating a tracing span due to an error: ${Ho(r)}`);return}}function Zv(e,t){try{e.setStatus({status:"error",error:ru(t)?t:void 0}),Wv(t)&&t.statusCode&&e.setAttribute("http.status_code",t.statusCode),e.end()}catch(n){Gn.warning(`Skipping tracing span processing due to an error: ${Ho(n)}`)}}function Jv(e,t){try{e.setAttribute("http.status_code",t.status);const n=t.headers.get("x-ms-request-id");n&&e.setAttribute("serviceRequestId",n),e.setStatus({status:"success"}),e.end()}catch(n){Gn.warning(`Skipping tracing span processing due to an error: ${Ho(n)}`)}}function e1(e){const t=iv();return t.addPolicy(Lv()),t.addPolicy(Pv(e.userAgentOptions)),t.addPolicy(qv()),t.addPolicy($v(e.retryOptions),{phase:"Retry"}),t.addPolicy(Gv(e.userAgentOptions),{afterPhase:"Retry"}),t.addPolicy(gv(e.loggingOptions),{afterPhase:"Sign"}),t}function Ti(e){return e.toLowerCase()}function*t1(e){for(const t of e.values())yield[t.name,t.value]}class n1{constructor(t){if(this._headersMap=new Map,t)for(const n of Object.keys(t))this.set(n,t[n])}set(t,n){this._headersMap.set(Ti(t),{name:t,value:String(n)})}get(t){var n;return(n=this._headersMap.get(Ti(t)))===null||n===void 0?void 0:n.value}has(t){return this._headersMap.has(Ti(t))}delete(t){this._headersMap.delete(Ti(t))}toJSON(t={}){const n={};if(t.preserveCase)for(const r of this._headersMap.values())n[r.name]=r.value;else for(const[r,i]of this._headersMap)n[r]=i.value;return n}toString(){return JSON.stringify(this.toJSON({preserveCase:!0}))}[Symbol.iterator](){return t1(this._headersMap)}}function Fo(e){return new n1(e)}function r1(e){return e&&typeof e.pipe=="function"}function Kp(e){return!!(e&&typeof e.getReader=="function"&&typeof e.tee=="function")}function i1(e){return(typeof Blob=="function"||typeof Blob=="object")&&e instanceof Blob}class o1{async sendRequest(t){if(new URL(t.url).protocol!=="https:"&&!t.allowInsecureConnection)throw new Error(`Cannot connect to ${t.url} while allowInsecureConnection is false.`);if(t.proxySettings)throw new Error("HTTP proxy is not supported in browser environment");try{return await s1(t)}catch(i){throw u1(i,t)}}}async function s1(e){const{abortController:t,abortControllerCleanup:n}=a1(e);try{const r=c1(e.headers),i=f1(e),o=await fetch(e.url,{body:i,method:e.method,headers:r,signal:t.signal,credentials:e.withCredentials?"include":"same-origin",cache:"no-store"});return i1(e.body)&&e.onUploadProgress&&e.onUploadProgress({loadedBytes:e.body.size}),l1(o,e)}finally{n&&n()}}async function l1(e,t){var n,r;const i=d1(e),o={request:t,headers:i,status:e.status},s=Kp(e.body)?Wp(e.body,t.onDownloadProgress):e.body;if(!((n=t.streamResponseStatusCodes)===null||n===void 0)&&n.has(Number.POSITIVE_INFINITY)||!((r=t.streamResponseStatusCodes)===null||r===void 0)&&r.has(o.status))if(t.enableBrowserStreams)o.browserStreamBody=s??void 0;else{const l=new Response(s);o.blobBody=l.blob()}else{const l=new Response(s);o.bodyAsText=await l.text()}return o}function a1(e){const t=new AbortController;let n,r;if(e.abortSignal){if(e.abortSignal.aborted)throw new nu("The operation was aborted.");r=i=>{i.type==="abort"&&t.abort()},e.abortSignal.addEventListener("abort",r),n=()=>{var i;r&&((i=e.abortSignal)===null||i===void 0||i.removeEventListener("abort",r))}}return e.timeout>0&&setTimeout(()=>{t.abort()},e.timeout),{abortController:t,abortControllerCleanup:n}}function u1(e,t){var n;return e&&(e==null?void 0:e.name)==="AbortError"?e:new qe(`Error sending request: ${e.message}`,{code:(n=e==null?void 0:e.code)!==null&&n!==void 0?n:qe.REQUEST_SEND_ERROR,request:t})}function c1(e){const t=new Headers;for(const[n,r]of e)t.append(n,r);return t}function d1(e){const t=Fo();for(const[n,r]of e.headers)t.set(n,r);return t}function f1(e){const t=typeof e.body=="function"?e.body():e.body;if(r1(t))throw new Error("Node streams are not supported in browser environment.");return Kp(t)?Wp(t,e.onUploadProgress):t}function Wp(e,t){let n=0;if(m1(e))return e.pipeThrough(new TransformStream({transform(r,i){if(r===null){i.terminate();return}i.enqueue(r),n+=r.length,t&&t({loadedBytes:n})}}));{const r=e.getReader();return new ReadableStream({async pull(i){var o;const{done:s,value:l}=await r.read();if(s||!l){i.close(),r.releaseLock();return}n+=(o=l==null?void 0:l.length)!==null&&o!==void 0?o:0,i.enqueue(l),t&&t({loadedBytes:n})}})}}function p1(){return new o1}function m1(e){return e.pipeThrough!==void 0&&self.TransformStream!==void 0}function y1(){return p1()}class h1{constructor(t){var n,r,i,o,s,l,a;this.url=t.url,this.body=t.body,this.headers=(n=t.headers)!==null&&n!==void 0?n:Fo(),this.method=(r=t.method)!==null&&r!==void 0?r:"GET",this.timeout=(i=t.timeout)!==null&&i!==void 0?i:0,this.formData=t.formData,this.disableKeepAlive=(o=t.disableKeepAlive)!==null&&o!==void 0?o:!1,this.proxySettings=t.proxySettings,this.streamResponseStatusCodes=t.streamResponseStatusCodes,this.withCredentials=(s=t.withCredentials)!==null&&s!==void 0?s:!1,this.abortSignal=t.abortSignal,this.tracingOptions=t.tracingOptions,this.onUploadProgress=t.onUploadProgress,this.onDownloadProgress=t.onDownloadProgress,this.requestId=t.requestId||pv(),this.allowInsecureConnection=(l=t.allowInsecureConnection)!==null&&l!==void 0?l:!1,this.enableBrowserStreams=(a=t.enableBrowserStreams)!==null&&a!==void 0?a:!1}}function iu(e){return new h1(e)}const g1={forcedRefreshWindowInMs:1e3,retryIntervalInMs:3e3,refreshWindowInMs:1e3*60*2};async function v1(e,t,n){async function r(){if(Date.now()<n)try{return await e()}catch{return null}else{const o=await e();if(o===null)throw new Error("Failed to refresh access token.");return o}}let i=await r();for(;i===null;)await Fp(t),i=await r();return i}function w1(e,t){let n=null,r=null,i;const o=Object.assign(Object.assign({},g1),t),s={get isRefreshing(){return n!==null},get shouldRefresh(){var a;return!s.isRefreshing&&((a=r==null?void 0:r.expiresOnTimestamp)!==null&&a!==void 0?a:0)-o.refreshWindowInMs<Date.now()},get mustRefresh(){return r===null||r.expiresOnTimestamp-o.forcedRefreshWindowInMs<Date.now()}};function l(a,u){var c;return s.isRefreshing||(n=v1(()=>e.getToken(a,u),o.retryIntervalInMs,(c=r==null?void 0:r.expiresOnTimestamp)!==null&&c!==void 0?c:Date.now()).then(d=>(n=null,r=d,i=u.tenantId,r)).catch(d=>{throw n=null,r=null,i=void 0,d})),n}return async(a,u)=>i!==u.tenantId||!!u.claims||s.mustRefresh?l(a,u):(s.shouldRefresh&&l(a,u),r)}const x1="bearerTokenAuthenticationPolicy";async function S1(e){const{scopes:t,getAccessToken:n,request:r}=e,i={abortSignal:r.abortSignal,tracingOptions:r.tracingOptions},o=await n(t,i);o&&e.request.headers.set("Authorization",`Bearer ${o.token}`)}function N1(e){const t=e.headers.get("WWW-Authenticate");if(e.status===401&&t)return t}function Qp(e){var t;const{credential:n,scopes:r,challengeCallbacks:i}=e,o=e.logger||Gn,s=Object.assign({authorizeRequest:(t=i==null?void 0:i.authorizeRequest)!==null&&t!==void 0?t:S1,authorizeRequestOnChallenge:i==null?void 0:i.authorizeRequestOnChallenge},i),l=n?w1(n):()=>Promise.resolve(null);return{name:x1,async sendRequest(a,u){if(!a.url.toLowerCase().startsWith("https://"))throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");await s.authorizeRequest({scopes:Array.isArray(r)?r:[r],request:a,getAccessToken:l,logger:o});let c,f;try{c=await u(a)}catch(d){f=d,c=d.response}if(s.authorizeRequestOnChallenge&&(c==null?void 0:c.status)===401&&N1(c)&&await s.authorizeRequestOnChallenge({scopes:Array.isArray(r)?r:[r],request:a,response:c,getAccessToken:l,logger:o}))return u(a);if(f)throw f;return c}}}function Fn(e,t,n){let r=t.parameterPath;const i=t.mapper;let o;if(typeof r=="string"&&(r=[r]),Array.isArray(r)){if(r.length>0)if(i.isConstant)o=i.defaultValue;else{let s=Kc(e,r);!s.propertyFound&&n&&(s=Kc(n,r));let l=!1;s.propertyFound||(l=i.required||r[0]==="options"&&r.length===2),o=l?i.defaultValue:s.propertyValue}}else{i.required&&(o={});for(const s in r){const l=i.type.modelProperties[s],a=r[s],u=Fn(e,{parameterPath:a,mapper:l},n);u!==void 0&&(o||(o={}),o[s]=u)}}return o}function Kc(e,t){const n={propertyFound:!1};let r=0;for(;r<t.length;++r){const i=t[r];if(e&&i in e)e=e[i];else break}return r===t.length&&(n.propertyValue=e,n.propertyFound=!0),n}const Wc=new WeakMap,Gp=Symbol.for("@azure/core-client original request");function P1(e){return Gp in e}function Xn(e){if(P1(e))return Xn(e[Gp]);let t=Wc.get(e);return t||(t={},Wc.set(e,t)),t}const E1=["application/json","text/json"],C1=["application/xml","application/atom+xml"],T1="deserializationPolicy";function k1(e={}){var t,n,r,i,o,s,l;const a=(n=(t=e.expectedContentTypes)===null||t===void 0?void 0:t.json)!==null&&n!==void 0?n:E1,u=(i=(r=e.expectedContentTypes)===null||r===void 0?void 0:r.xml)!==null&&i!==void 0?i:C1,c=e.parseXML,f=e.serializerOptions,d={xml:{rootName:(o=f==null?void 0:f.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=f==null?void 0:f.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(l=f==null?void 0:f.xml.xmlCharKey)!==null&&l!==void 0?l:Qr}};return{name:T1,async sendRequest(g,h){const v=await h(g);return R1(a,u,v,d,c)}}}function O1(e){let t;const n=e.request,r=Xn(n),i=r==null?void 0:r.operationSpec;return i&&(r!=null&&r.operationResponseGetter?t=r==null?void 0:r.operationResponseGetter(i,e):t=i.responses[e.status]),t}function z1(e){const t=e.request,n=Xn(t),r=n==null?void 0:n.shouldDeserialize;let i;return r===void 0?i=!0:typeof r=="boolean"?i=r:i=r(e),i}async function R1(e,t,n,r,i){const o=await M1(e,t,n,r,i);if(!z1(o))return o;const s=Xn(o.request),l=s==null?void 0:s.operationSpec;if(!l||!l.responses)return o;const a=O1(o),{error:u,shouldReturnResponse:c}=A1(o,l,a,r);if(u)throw u;if(c)return o;if(a){if(a.bodyMapper){let f=o.parsedBody;l.isXML&&a.bodyMapper.type.name===bn.Sequence&&(f=typeof f=="object"?f[a.bodyMapper.xmlElementName]:[]);try{o.parsedBody=l.serializer.deserialize(a.bodyMapper,f,"operationRes.parsedBody",r)}catch(d){throw new qe(`Error ${d} occurred in deserializing the responseBody - ${o.bodyAsText}`,{statusCode:o.status,request:o.request,response:o})}}else l.httpMethod==="HEAD"&&(o.parsedBody=n.status>=200&&n.status<300);a.headersMapper&&(o.parsedHeaders=l.serializer.deserialize(a.headersMapper,o.headers.toJSON(),"operationRes.parsedHeaders",{xml:{},ignoreUnknownProperties:!0}))}return o}function _1(e){const t=Object.keys(e.responses);return t.length===0||t.length===1&&t[0]==="default"}function A1(e,t,n,r){var i;const o=200<=e.status&&e.status<300;if(_1(t)?o:!!n)if(n){if(!n.isError)return{error:null,shouldReturnResponse:!1}}else return{error:null,shouldReturnResponse:!1};const l=n??t.responses.default,a=!((i=e.request.streamResponseStatusCodes)===null||i===void 0)&&i.has(e.status)?`Unexpected status code: ${e.status}`:e.bodyAsText,u=new qe(a,{statusCode:e.status,request:e.request,response:e});if(!l)throw u;const c=l.bodyMapper,f=l.headersMapper;try{if(e.parsedBody){const d=e.parsedBody;let g;if(c){let v=d;if(t.isXML&&c.type.name===bn.Sequence){v=[];const N=c.xmlElementName;typeof d=="object"&&N&&(v=d[N])}g=t.serializer.deserialize(c,v,"error.response.parsedBody",r)}const h=d.error||g||d;u.code=h.code,h.message&&(u.message=h.message),c&&(u.response.parsedBody=g)}e.headers&&f&&(u.response.parsedHeaders=t.serializer.deserialize(f,e.headers.toJSON(),"operationRes.parsedHeaders"))}catch(d){u.message=`Error "${d.message}" occurred in deserializing the responseBody - "${e.bodyAsText}" for the default response.`}return{error:u,shouldReturnResponse:!1}}async function M1(e,t,n,r,i){var o;if(!(!((o=n.request.streamResponseStatusCodes)===null||o===void 0)&&o.has(n.status))&&n.bodyAsText){const s=n.bodyAsText,l=n.headers.get("Content-Type")||"",a=l?l.split(";").map(u=>u.toLowerCase()):[];try{if(a.length===0||a.some(u=>e.indexOf(u)!==-1))return n.parsedBody=JSON.parse(s),n;if(a.some(u=>t.indexOf(u)!==-1)){if(!i)throw new Error("Parsing XML not supported.");const u=await i(s,r.xml);return n.parsedBody=u,n}}catch(u){const c=`Error "${u}" occurred while parsing the response body - ${n.bodyAsText}.`,f=u.code||qe.PARSE_ERROR;throw new qe(c,{code:f,statusCode:n.status,request:n.request,response:n})}}return n}function b1(e){const t=new Set;for(const n in e.responses){const r=e.responses[n];r.bodyMapper&&r.bodyMapper.type.name===bn.Stream&&t.add(Number(n))}return t}function bt(e){const{parameterPath:t,mapper:n}=e;let r;return typeof t=="string"?r=t:Array.isArray(t)?r=t.join("."):r=n.serializedName,r}const Xp="serializationPolicy";function Yp(e={}){const t=e.stringifyXML;return{name:Xp,async sendRequest(n,r){const i=Xn(n),o=i==null?void 0:i.operationSpec,s=i==null?void 0:i.operationArguments;return o&&s&&(I1(n,s,o),D1(n,s,o,t)),r(n)}}}function I1(e,t,n){var r,i;if(n.headerParameters)for(const s of n.headerParameters){let l=Fn(t,s);if(l!=null||s.mapper.required){l=n.serializer.serialize(s.mapper,l,bt(s));const a=s.mapper.headerCollectionPrefix;if(a)for(const u of Object.keys(l))e.headers.set(a+u,l[u]);else e.headers.set(s.mapper.serializedName||bt(s),l)}}const o=(i=(r=t.options)===null||r===void 0?void 0:r.requestOptions)===null||i===void 0?void 0:i.customHeaders;if(o)for(const s of Object.keys(o))e.headers.set(s,o[s])}function D1(e,t,n,r=function(){throw new Error("XML serialization unsupported!")}){var i,o,s,l,a;const u=(i=t.options)===null||i===void 0?void 0:i.serializerOptions,c={xml:{rootName:(o=u==null?void 0:u.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=u==null?void 0:u.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(l=u==null?void 0:u.xml.xmlCharKey)!==null&&l!==void 0?l:Qr}},f=c.xml.xmlCharKey;if(n.requestBody&&n.requestBody.mapper){e.body=Fn(t,n.requestBody);const d=n.requestBody.mapper,{required:g,serializedName:h,xmlName:v,xmlElementName:N,xmlNamespace:m,xmlNamespacePrefix:p,nullable:y}=d,w=d.type.name;try{if(e.body!==void 0&&e.body!==null||y&&e.body===null||g){const x=bt(n.requestBody);e.body=n.serializer.serialize(d,e.body,x,c);const E=w===bn.Stream;if(n.isXML){const P=p?`xmlns:${p}`:"xmlns",O=$1(m,P,w,e.body,c);w===bn.Sequence?e.body=r(j1(O,N||v||h,P,m),{rootName:v||h,xmlCharKey:f}):E||(e.body=r(O,{rootName:v||h,xmlCharKey:f}))}else{if(w===bn.String&&(!((a=n.contentType)===null||a===void 0)&&a.match("text/plain")||n.mediaType==="text"))return;E||(e.body=JSON.stringify(e.body))}}}catch(x){throw new Error(`Error "${x.message}" occurred in serializing the payload - ${JSON.stringify(h,void 0,"  ")}.`)}}else if(n.formDataParameters&&n.formDataParameters.length>0){e.formData={};for(const d of n.formDataParameters){const g=Fn(t,d);if(g!=null){const h=d.mapper.serializedName||bt(d);e.formData[h]=n.serializer.serialize(d.mapper,g,bt(d),c)}}}}function $1(e,t,n,r,i){if(e&&!["Composite","Sequence","Dictionary"].includes(n)){const o={};return o[i.xml.xmlCharKey]=r,o[se]={[t]:e},o}return r}function j1(e,t,n,r){if(Array.isArray(e)||(e=[e]),!n||!r)return{[t]:e};const i={[t]:e};return i[se]={[n]:r},i}function L1(e={}){const t=e1(e??{});return e.credentialOptions&&t.addPolicy(Qp({credential:e.credentialOptions.credential,scopes:e.credentialOptions.credentialScopes})),t.addPolicy(Yp(e.serializationOptions),{phase:"Serialize"}),t.addPolicy(k1(e.deserializationOptions),{phase:"Deserialize"}),t}let _s;function U1(){return _s||(_s=y1()),_s}const q1={CSV:",",SSV:" ",Multi:"Multi",TSV:"	",Pipes:"|"};function H1(e,t,n,r){const i=F1(t,n,r);let o=!1,s=Qc(e,i);if(t.path){let u=Qc(t.path,i);t.path==="/{nextLink}"&&u.startsWith("/")&&(u=u.substring(1)),V1(u)?(s=u,o=!0):s=B1(s,u)}const{queryParams:l,sequenceParams:a}=K1(t,n,r);return s=Q1(s,l,a,o),s}function Qc(e,t){let n=e;for(const[r,i]of t)n=n.split(r).join(i);return n}function F1(e,t,n){var r;const i=new Map;if(!((r=e.urlParameters)===null||r===void 0)&&r.length)for(const o of e.urlParameters){let s=Fn(t,o,n);const l=bt(o);s=e.serializer.serialize(o.mapper,s,l),o.skipEncoding||(s=encodeURIComponent(s)),i.set(`{${o.mapper.serializedName||l}}`,s)}return i}function V1(e){return e.includes("://")}function B1(e,t){if(!t)return e;const n=new URL(e);let r=n.pathname;r.endsWith("/")||(r=`${r}/`),t.startsWith("/")&&(t=t.substring(1));const i=t.indexOf("?");if(i!==-1){const o=t.substring(0,i),s=t.substring(i+1);r=r+o,s&&(n.search=n.search?`${n.search}&${s}`:s)}else r=r+t;return n.pathname=r,n.toString()}function K1(e,t,n){var r;const i=new Map,o=new Set;if(!((r=e.queryParameters)===null||r===void 0)&&r.length)for(const s of e.queryParameters){s.mapper.type.name==="Sequence"&&s.mapper.serializedName&&o.add(s.mapper.serializedName);let l=Fn(t,s,n);if(l!=null||s.mapper.required){l=e.serializer.serialize(s.mapper,l,bt(s));const a=s.collectionFormat?q1[s.collectionFormat]:"";if(Array.isArray(l)&&(l=l.map(u=>u??"")),s.collectionFormat==="Multi"&&l.length===0)continue;Array.isArray(l)&&(s.collectionFormat==="SSV"||s.collectionFormat==="TSV")&&(l=l.join(a)),s.skipEncoding||(Array.isArray(l)?l=l.map(u=>encodeURIComponent(u)):l=encodeURIComponent(l)),Array.isArray(l)&&(s.collectionFormat==="CSV"||s.collectionFormat==="Pipes")&&(l=l.join(a)),i.set(s.mapper.serializedName||bt(s),l)}}return{queryParams:i,sequenceParams:o}}function W1(e){const t=new Map;if(!e||e[0]!=="?")return t;e=e.slice(1);const n=e.split("&");for(const r of n){const[i,o]=r.split("=",2),s=t.get(i);s?Array.isArray(s)?s.push(o):t.set(i,[s,o]):t.set(i,o)}return t}function Q1(e,t,n,r=!1){if(t.size===0)return e;const i=new URL(e),o=W1(i.search);for(const[l,a]of t){const u=o.get(l);if(Array.isArray(u))if(Array.isArray(a)){u.push(...a);const c=new Set(u);o.set(l,Array.from(c))}else u.push(a);else u?(Array.isArray(a)?a.unshift(u):n.has(l)&&o.set(l,[u,a]),r||o.set(l,a)):o.set(l,a)}const s=[];for(const[l,a]of o)if(typeof a=="string")s.push(`${l}=${a}`);else if(Array.isArray(a))for(const u of a)s.push(`${l}=${u}`);else s.push(`${l}=${a}`);return i.search=s.length?`?${s.join("&")}`:"",i.toString()}const G1=qo("core-client");class X1{constructor(t={}){var n,r;if(this._requestContentType=t.requestContentType,this._endpoint=(n=t.endpoint)!==null&&n!==void 0?n:t.baseUri,t.baseUri&&G1.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead."),this._allowInsecureConnection=t.allowInsecureConnection,this._httpClient=t.httpClient||U1(),this.pipeline=t.pipeline||Y1(t),!((r=t.additionalPolicies)===null||r===void 0)&&r.length)for(const{policy:i,position:o}of t.additionalPolicies){const s=o==="perRetry"?"Sign":void 0;this.pipeline.addPolicy(i,{afterPhase:s})}}async sendRequest(t){return this.pipeline.sendRequest(this._httpClient,t)}async sendOperationRequest(t,n){const r=n.baseUrl||this._endpoint;if(!r)throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");const i=H1(r,n,t,this),o=iu({url:i});o.method=n.httpMethod;const s=Xn(o);s.operationSpec=n,s.operationArguments=t;const l=n.contentType||this._requestContentType;l&&n.requestBody&&o.headers.set("Content-Type",l);const a=t.options;if(a){const u=a.requestOptions;u&&(u.timeout&&(o.timeout=u.timeout),u.onUploadProgress&&(o.onUploadProgress=u.onUploadProgress),u.onDownloadProgress&&(o.onDownloadProgress=u.onDownloadProgress),u.shouldDeserialize!==void 0&&(s.shouldDeserialize=u.shouldDeserialize),u.allowInsecureConnection&&(o.allowInsecureConnection=!0)),a.abortSignal&&(o.abortSignal=a.abortSignal),a.tracingOptions&&(o.tracingOptions=a.tracingOptions)}this._allowInsecureConnection&&(o.allowInsecureConnection=!0),o.streamResponseStatusCodes===void 0&&(o.streamResponseStatusCodes=b1(n));try{const u=await this.sendRequest(o),c=Lc(u,n.responses[u.status]);return a!=null&&a.onResponse&&a.onResponse(u,c),c}catch(u){if(typeof u=="object"&&(u!=null&&u.response)){const c=u.response,f=Lc(c,n.responses[u.statusCode]||n.responses.default);u.details=f,a!=null&&a.onResponse&&a.onResponse(c,f,u)}throw u}}}function Y1(e){const t=Z1(e),n=e.credential&&t?{credentialScopes:t,credential:e.credential}:void 0;return L1(Object.assign(Object.assign({},e),{credentialOptions:n}))}function Z1(e){if(e.credentialScopes){const t=e.credentialScopes;return Array.isArray(t)?t.map(n=>new URL(n).toString()):new URL(t).toString()}if(e.endpoint)return`${e.endpoint}/.default`;if(e.baseUri)return`${e.baseUri}/.default`;if(e.credential&&!e.credentialScopes)throw new Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy")}const Zp={DefaultScope:"/.default",HeaderConstants:{AUTHORIZATION:"authorization"}},J1=async e=>{const t=iw(e.request),n=nw(e.response);if(n){const r=rw(n),i=tw(e,r),o=ew(r),s=await e.getAccessToken(i,Object.assign(Object.assign({},t),{tenantId:o}));return s?(e.request.headers.set(Zp.HeaderConstants.AUTHORIZATION,`Bearer ${s.token}`),!0):!1}return!1};function ew(e){return new URL(e.authorization_uri).pathname.split("/")[1]}function tw(e,t){if(!t.resource_uri)return e.scopes;const n=new URL(t.resource_uri);return n.pathname=Zp.DefaultScope,[n.toString()]}function nw(e){const t=e.headers.get("WWW-Authenticate");if(e.status===401&&t)return t}function rw(e){return`${e.slice(7).trim()} `.split(" ").filter(i=>i).map(i=>(([o,s])=>({[o]:s}))(i.trim().split("="))).reduce((i,o)=>Object.assign(Object.assign({},i),o),{})}function iw(e){return{abortSignal:e.abortSignal,requestOptions:{timeout:e.timeout},tracingOptions:e.tracingOptions}}const Jp={serializedName:"TableQueryResponse",type:{name:"Composite",className:"TableQueryResponse",modelProperties:{odataMetadata:{serializedName:"odata\\.metadata",xmlName:"odata\\.metadata",type:{name:"String"}},value:{serializedName:"value",xmlName:"value",xmlElementName:"TableResponseProperties",type:{name:"Sequence",element:{type:{name:"Composite",className:"TableResponseProperties"}}}}}}},em={serializedName:"TableResponseProperties",type:{name:"Composite",className:"TableResponseProperties",modelProperties:{name:{serializedName:"TableName",xmlName:"TableName",type:{name:"String"}},odataType:{serializedName:"odata\\.type",xmlName:"odata\\.type",type:{name:"String"}},odataId:{serializedName:"odata\\.id",xmlName:"odata\\.id",type:{name:"String"}},odataEditLink:{serializedName:"odata\\.editLink",xmlName:"odata\\.editLink",type:{name:"String"}}}}},ve={serializedName:"TableServiceError",type:{name:"Composite",className:"TableServiceError",modelProperties:{odataError:{serializedName:"odata\\.error",xmlName:"odata\\.error",type:{name:"Composite",className:"TableServiceErrorOdataError"}}}}},ow={serializedName:"TableServiceErrorOdataError",type:{name:"Composite",className:"TableServiceErrorOdataError",modelProperties:{code:{serializedName:"code",xmlName:"code",type:{name:"String"}},message:{serializedName:"message",xmlName:"message",type:{name:"Composite",className:"TableServiceErrorOdataErrorMessage"}}}}},sw={serializedName:"TableServiceErrorOdataErrorMessage",type:{name:"Composite",className:"TableServiceErrorOdataErrorMessage",modelProperties:{lang:{serializedName:"lang",xmlName:"lang",type:{name:"String"}},value:{serializedName:"value",xmlName:"value",type:{name:"String"}}}}},tm={serializedName:"TableProperties",type:{name:"Composite",className:"TableProperties",modelProperties:{name:{serializedName:"TableName",xmlName:"TableName",type:{name:"String"}}}}},nm={serializedName:"TableEntityQueryResponse",type:{name:"Composite",className:"TableEntityQueryResponse",modelProperties:{odataMetadata:{serializedName:"odata\\.metadata",xmlName:"odata\\.metadata",type:{name:"String"}},value:{serializedName:"value",xmlName:"value",xmlElementName:"TableEntityProperties",type:{name:"Sequence",element:{type:{name:"Dictionary",value:{type:{name:"any"}}}}}}}}},lw={serializedName:"SignedIdentifier",xmlName:"SignedIdentifier",type:{name:"Composite",className:"SignedIdentifier",modelProperties:{id:{serializedName:"Id",required:!0,xmlName:"Id",type:{name:"String"}},accessPolicy:{serializedName:"AccessPolicy",xmlName:"AccessPolicy",type:{name:"Composite",className:"AccessPolicy"}}}}},aw={serializedName:"AccessPolicy",xmlName:"AccessPolicy",type:{name:"Composite",className:"AccessPolicy",modelProperties:{start:{serializedName:"Start",xmlName:"Start",type:{name:"String"}},expiry:{serializedName:"Expiry",xmlName:"Expiry",type:{name:"String"}},permission:{serializedName:"Permission",xmlName:"Permission",type:{name:"String"}}}}},ou={serializedName:"TableServiceProperties",xmlName:"StorageServiceProperties",type:{name:"Composite",className:"TableServiceProperties",modelProperties:{logging:{serializedName:"Logging",xmlName:"Logging",type:{name:"Composite",className:"Logging"}},hourMetrics:{serializedName:"HourMetrics",xmlName:"HourMetrics",type:{name:"Composite",className:"Metrics"}},minuteMetrics:{serializedName:"MinuteMetrics",xmlName:"MinuteMetrics",type:{name:"Composite",className:"Metrics"}},cors:{serializedName:"Cors",xmlName:"Cors",xmlIsWrapped:!0,xmlElementName:"CorsRule",type:{name:"Sequence",element:{type:{name:"Composite",className:"CorsRule"}}}}}}},uw={serializedName:"Logging",xmlName:"Logging",type:{name:"Composite",className:"Logging",modelProperties:{version:{serializedName:"Version",required:!0,xmlName:"Version",type:{name:"String"}},delete:{serializedName:"Delete",required:!0,xmlName:"Delete",type:{name:"Boolean"}},read:{serializedName:"Read",required:!0,xmlName:"Read",type:{name:"Boolean"}},write:{serializedName:"Write",required:!0,xmlName:"Write",type:{name:"Boolean"}},retentionPolicy:{serializedName:"RetentionPolicy",xmlName:"RetentionPolicy",type:{name:"Composite",className:"RetentionPolicy"}}}}},cw={serializedName:"RetentionPolicy",xmlName:"RetentionPolicy",type:{name:"Composite",className:"RetentionPolicy",modelProperties:{enabled:{serializedName:"Enabled",required:!0,xmlName:"Enabled",type:{name:"Boolean"}},days:{constraints:{InclusiveMinimum:1},serializedName:"Days",xmlName:"Days",type:{name:"Number"}}}}},dw={serializedName:"Metrics",type:{name:"Composite",className:"Metrics",modelProperties:{version:{serializedName:"Version",xmlName:"Version",type:{name:"String"}},enabled:{serializedName:"Enabled",required:!0,xmlName:"Enabled",type:{name:"Boolean"}},includeAPIs:{serializedName:"IncludeAPIs",xmlName:"IncludeAPIs",type:{name:"Boolean"}},retentionPolicy:{serializedName:"RetentionPolicy",xmlName:"RetentionPolicy",type:{name:"Composite",className:"RetentionPolicy"}}}}},fw={serializedName:"CorsRule",xmlName:"CorsRule",type:{name:"Composite",className:"CorsRule",modelProperties:{allowedOrigins:{serializedName:"AllowedOrigins",required:!0,xmlName:"AllowedOrigins",type:{name:"String"}},allowedMethods:{serializedName:"AllowedMethods",required:!0,xmlName:"AllowedMethods",type:{name:"String"}},allowedHeaders:{serializedName:"AllowedHeaders",required:!0,xmlName:"AllowedHeaders",type:{name:"String"}},exposedHeaders:{serializedName:"ExposedHeaders",required:!0,xmlName:"ExposedHeaders",type:{name:"String"}},maxAgeInSeconds:{constraints:{InclusiveMinimum:0},serializedName:"MaxAgeInSeconds",required:!0,xmlName:"MaxAgeInSeconds",type:{name:"Number"}}}}},rm={serializedName:"TableServiceStats",xmlName:"StorageServiceStats",type:{name:"Composite",className:"TableServiceStats",modelProperties:{geoReplication:{serializedName:"GeoReplication",xmlName:"GeoReplication",type:{name:"Composite",className:"GeoReplication"}}}}},pw={serializedName:"GeoReplication",xmlName:"GeoReplication",type:{name:"Composite",className:"GeoReplication",modelProperties:{status:{serializedName:"Status",required:!0,xmlName:"Status",type:{name:"String"}},lastSyncTime:{serializedName:"LastSyncTime",required:!0,xmlName:"LastSyncTime",type:{name:"DateTimeRfc1123"}}}}},im={serializedName:"TableResponse",type:{name:"Composite",className:"TableResponse",modelProperties:Object.assign(Object.assign({},em.type.modelProperties),{odataMetadata:{serializedName:"odata\\.metadata",xmlName:"odata\\.metadata",type:{name:"String"}}})}},om={serializedName:"Table_queryHeaders",type:{name:"Composite",className:"TableQueryHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},xMsContinuationNextTableName:{serializedName:"x-ms-continuation-nexttablename",xmlName:"x-ms-continuation-nexttablename",type:{name:"String"}}}}},sm={serializedName:"Table_queryExceptionHeaders",type:{name:"Composite",className:"TableQueryExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Fl={serializedName:"Table_createHeaders",type:{name:"Composite",className:"TableCreateHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},preferenceApplied:{serializedName:"preference-applied",xmlName:"preference-applied",type:{name:"String"}}}}},lm={serializedName:"Table_createExceptionHeaders",type:{name:"Composite",className:"TableCreateExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},am={serializedName:"Table_deleteHeaders",type:{name:"Composite",className:"TableDeleteHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},um={serializedName:"Table_deleteExceptionHeaders",type:{name:"Composite",className:"TableDeleteExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},cm={serializedName:"Table_queryEntitiesHeaders",type:{name:"Composite",className:"TableQueryEntitiesHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},xMsContinuationNextPartitionKey:{serializedName:"x-ms-continuation-nextpartitionkey",xmlName:"x-ms-continuation-nextpartitionkey",type:{name:"String"}},xMsContinuationNextRowKey:{serializedName:"x-ms-continuation-nextrowkey",xmlName:"x-ms-continuation-nextrowkey",type:{name:"String"}}}}},dm={serializedName:"Table_queryEntitiesExceptionHeaders",type:{name:"Composite",className:"TableQueryEntitiesExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},fm={serializedName:"Table_queryEntitiesWithPartitionAndRowKeyHeaders",type:{name:"Composite",className:"TableQueryEntitiesWithPartitionAndRowKeyHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}},xMsContinuationNextPartitionKey:{serializedName:"x-ms-continuation-nextpartitionkey",xmlName:"x-ms-continuation-nextpartitionkey",type:{name:"String"}},xMsContinuationNextRowKey:{serializedName:"x-ms-continuation-nextrowkey",xmlName:"x-ms-continuation-nextrowkey",type:{name:"String"}}}}},pm={serializedName:"Table_queryEntitiesWithPartitionAndRowKeyExceptionHeaders",type:{name:"Composite",className:"TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},mm={serializedName:"Table_updateEntityHeaders",type:{name:"Composite",className:"TableUpdateEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}}}}},ym={serializedName:"Table_updateEntityExceptionHeaders",type:{name:"Composite",className:"TableUpdateEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},hm={serializedName:"Table_mergeEntityHeaders",type:{name:"Composite",className:"TableMergeEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}}}}},gm={serializedName:"Table_mergeEntityExceptionHeaders",type:{name:"Composite",className:"TableMergeEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},vm={serializedName:"Table_deleteEntityHeaders",type:{name:"Composite",className:"TableDeleteEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},wm={serializedName:"Table_deleteEntityExceptionHeaders",type:{name:"Composite",className:"TableDeleteEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Vl={serializedName:"Table_insertEntityHeaders",type:{name:"Composite",className:"TableInsertEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}},preferenceApplied:{serializedName:"preference-applied",xmlName:"preference-applied",type:{name:"String"}},contentType:{serializedName:"content-type",xmlName:"content-type",type:{name:"String"}}}}},xm={serializedName:"Table_insertEntityExceptionHeaders",type:{name:"Composite",className:"TableInsertEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Sm={serializedName:"Table_getAccessPolicyHeaders",type:{name:"Composite",className:"TableGetAccessPolicyHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},Nm={serializedName:"Table_getAccessPolicyExceptionHeaders",type:{name:"Composite",className:"TableGetAccessPolicyExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Pm={serializedName:"Table_setAccessPolicyHeaders",type:{name:"Composite",className:"TableSetAccessPolicyHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},Em={serializedName:"Table_setAccessPolicyExceptionHeaders",type:{name:"Composite",className:"TableSetAccessPolicyExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Cm={serializedName:"Service_setPropertiesHeaders",type:{name:"Composite",className:"ServiceSetPropertiesHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}}}}},Tm={serializedName:"Service_setPropertiesExceptionHeaders",type:{name:"Composite",className:"ServiceSetPropertiesExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},km={serializedName:"Service_getPropertiesHeaders",type:{name:"Composite",className:"ServiceGetPropertiesHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}}}}},Om={serializedName:"Service_getPropertiesExceptionHeaders",type:{name:"Composite",className:"ServiceGetPropertiesExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},zm={serializedName:"Service_getStatisticsHeaders",type:{name:"Composite",className:"ServiceGetStatisticsHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},Rm={serializedName:"Service_getStatisticsExceptionHeaders",type:{name:"Composite",className:"ServiceGetStatisticsExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},su=Object.freeze(Object.defineProperty({__proto__:null,AccessPolicy:aw,CorsRule:fw,GeoReplication:pw,Logging:uw,Metrics:dw,RetentionPolicy:cw,ServiceGetPropertiesExceptionHeaders:Om,ServiceGetPropertiesHeaders:km,ServiceGetStatisticsExceptionHeaders:Rm,ServiceGetStatisticsHeaders:zm,ServiceSetPropertiesExceptionHeaders:Tm,ServiceSetPropertiesHeaders:Cm,SignedIdentifier:lw,TableCreateExceptionHeaders:lm,TableCreateHeaders:Fl,TableDeleteEntityExceptionHeaders:wm,TableDeleteEntityHeaders:vm,TableDeleteExceptionHeaders:um,TableDeleteHeaders:am,TableEntityQueryResponse:nm,TableGetAccessPolicyExceptionHeaders:Nm,TableGetAccessPolicyHeaders:Sm,TableInsertEntityExceptionHeaders:xm,TableInsertEntityHeaders:Vl,TableMergeEntityExceptionHeaders:gm,TableMergeEntityHeaders:hm,TableProperties:tm,TableQueryEntitiesExceptionHeaders:dm,TableQueryEntitiesHeaders:cm,TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders:pm,TableQueryEntitiesWithPartitionAndRowKeyHeaders:fm,TableQueryExceptionHeaders:sm,TableQueryHeaders:om,TableQueryResponse:Jp,TableResponse:im,TableResponseProperties:em,TableServiceError:ve,TableServiceErrorOdataError:ow,TableServiceErrorOdataErrorMessage:sw,TableServiceProperties:ou,TableServiceStats:rm,TableSetAccessPolicyExceptionHeaders:Em,TableSetAccessPolicyHeaders:Pm,TableUpdateEntityExceptionHeaders:ym,TableUpdateEntityHeaders:mm},Symbol.toStringTag,{value:"Module"})),Yn={parameterPath:"accept",mapper:{defaultValue:"application/json;odata=minimalmetadata",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},Ee={parameterPath:"url",mapper:{serializedName:"url",required:!0,xmlName:"url",type:{name:"String"}},skipEncoding:!0},Ce={parameterPath:"version",mapper:{defaultValue:"2019-02-02",isConstant:!0,serializedName:"x-ms-version",type:{name:"String"}}},Te={parameterPath:["options","requestId"],mapper:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}}},Ut={parameterPath:"dataServiceVersion",mapper:{defaultValue:"3.0",isConstant:!0,serializedName:"DataServiceVersion",type:{name:"String"}}},qt={parameterPath:["options","queryOptions","format"],mapper:{serializedName:"$format",xmlName:"$format",type:{name:"String"}}},_m={parameterPath:["options","queryOptions","top"],mapper:{constraints:{InclusiveMinimum:0},serializedName:"$top",xmlName:"$top",type:{name:"Number"}}},lu={parameterPath:["options","queryOptions","select"],mapper:{serializedName:"$select",xmlName:"$select",type:{name:"String"}}},au={parameterPath:["options","queryOptions","filter"],mapper:{serializedName:"$filter",xmlName:"$filter",type:{name:"String"}}},mw={parameterPath:["options","nextTableName"],mapper:{serializedName:"NextTableName",xmlName:"NextTableName",type:{name:"String"}}},Am={parameterPath:["options","contentType"],mapper:{defaultValue:"application/json;odata=nometadata",isConstant:!0,serializedName:"Content-Type",type:{name:"String"}}},yw={parameterPath:"tableProperties",mapper:tm},Mm={parameterPath:["options","responsePreference"],mapper:{serializedName:"Prefer",xmlName:"Prefer",type:{name:"String"}}},uu={parameterPath:"accept",mapper:{defaultValue:"application/json",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},mt={parameterPath:"table",mapper:{serializedName:"table",required:!0,xmlName:"table",type:{name:"String"}}},Ye={parameterPath:["options","timeout"],mapper:{constraints:{InclusiveMinimum:0},serializedName:"timeout",xmlName:"timeout",type:{name:"Number"}}},hw={parameterPath:["options","nextPartitionKey"],mapper:{serializedName:"NextPartitionKey",xmlName:"NextPartitionKey",type:{name:"String"}}},gw={parameterPath:["options","nextRowKey"],mapper:{serializedName:"NextRowKey",xmlName:"NextRowKey",type:{name:"String"}}},Vo={parameterPath:"partitionKey",mapper:{serializedName:"partitionKey",required:!0,xmlName:"partitionKey",type:{name:"String"}}},Bo={parameterPath:"rowKey",mapper:{serializedName:"rowKey",required:!0,xmlName:"rowKey",type:{name:"String"}}},bm={parameterPath:["options","contentType"],mapper:{defaultValue:"application/json",isConstant:!0,serializedName:"Content-Type",type:{name:"String"}}},cu={parameterPath:["options","tableEntityProperties"],mapper:{serializedName:"tableEntityProperties",xmlName:"tableEntityProperties",type:{name:"Dictionary",value:{type:{name:"any"}}}}},Im={parameterPath:["options","ifMatch"],mapper:{serializedName:"If-Match",xmlName:"If-Match",type:{name:"String"}}},vw={parameterPath:"ifMatch",mapper:{serializedName:"If-Match",required:!0,xmlName:"If-Match",type:{name:"String"}}},du={parameterPath:"accept",mapper:{defaultValue:"application/xml",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},Dm={parameterPath:"comp",mapper:{defaultValue:"acl",isConstant:!0,serializedName:"comp",type:{name:"String"}}},$m={parameterPath:["options","contentType"],mapper:{defaultValue:"application/xml",isConstant:!0,serializedName:"Content-Type",type:{name:"String"}}},ww={parameterPath:["options","tableAcl"],mapper:{serializedName:"tableAcl",xmlName:"SignedIdentifiers",xmlIsWrapped:!0,xmlElementName:"SignedIdentifier",type:{name:"Sequence",element:{type:{name:"Composite",className:"SignedIdentifier"}}}}},jm={parameterPath:"accept",mapper:{defaultValue:"application/xml",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},xw={parameterPath:"tableServiceProperties",mapper:ou},fu={parameterPath:"restype",mapper:{defaultValue:"service",isConstant:!0,serializedName:"restype",type:{name:"String"}}},Lm={parameterPath:"comp",mapper:{defaultValue:"properties",isConstant:!0,serializedName:"comp",type:{name:"String"}}},Sw={parameterPath:"comp",mapper:{defaultValue:"stats",isConstant:!0,serializedName:"comp",type:{name:"String"}}};class Nw{constructor(t){this.client=t}query(t){return this.client.sendOperationRequest({options:t},Pw)}create(t,n){return this.client.sendOperationRequest({tableProperties:t,options:n},Ew)}delete(t,n){return this.client.sendOperationRequest({table:t,options:n},Cw)}queryEntities(t,n){return this.client.sendOperationRequest({table:t,options:n},Tw)}queryEntitiesWithPartitionAndRowKey(t,n,r,i){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,options:i},kw)}updateEntity(t,n,r,i){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,options:i},Ow)}mergeEntity(t,n,r,i){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,options:i},zw)}deleteEntity(t,n,r,i,o){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,ifMatch:i,options:o},Rw)}insertEntity(t,n){return this.client.sendOperationRequest({table:t,options:n},_w)}getAccessPolicy(t,n){return this.client.sendOperationRequest({table:t,options:n},Aw)}setAccessPolicy(t,n){return this.client.sendOperationRequest({table:t,options:n},Mw)}}const Um=Za(su,!0),yt=Za(su,!1),Pw={path:"/Tables",httpMethod:"GET",responses:{200:{bodyMapper:Jp,headersMapper:om},default:{bodyMapper:ve,headersMapper:sm}},queryParameters:[qt,_m,lu,au,mw],urlParameters:[Ee],headerParameters:[Yn,Ce,Te,Ut],serializer:yt},Ew={path:"/Tables",httpMethod:"POST",responses:{201:{bodyMapper:im,headersMapper:Fl},204:{headersMapper:Fl},default:{bodyMapper:ve,headersMapper:lm}},requestBody:yw,queryParameters:[qt],urlParameters:[Ee],headerParameters:[Yn,Ce,Te,Ut,Am,Mm],mediaType:"json",serializer:yt},Cw={path:"/Tables('{table}')",httpMethod:"DELETE",responses:{204:{headersMapper:am},default:{bodyMapper:ve,headersMapper:um}},urlParameters:[Ee,mt],headerParameters:[Ce,Te,uu],serializer:yt},Tw={path:"/{table}()",httpMethod:"GET",responses:{200:{bodyMapper:nm,headersMapper:cm},default:{bodyMapper:ve,headersMapper:dm}},queryParameters:[qt,_m,lu,au,Ye,hw,gw],urlParameters:[Ee,mt],headerParameters:[Yn,Ce,Te,Ut],serializer:yt},kw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"GET",responses:{200:{bodyMapper:{type:{name:"Dictionary",value:{type:{name:"any"}}}},headersMapper:fm},default:{bodyMapper:ve,headersMapper:pm}},queryParameters:[qt,lu,au,Ye],urlParameters:[Ee,mt,Vo,Bo],headerParameters:[Yn,Ce,Te,Ut],serializer:yt},Ow={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"PUT",responses:{204:{headersMapper:mm},default:{bodyMapper:ve,headersMapper:ym}},requestBody:cu,queryParameters:[qt,Ye],urlParameters:[Ee,mt,Vo,Bo],headerParameters:[Ce,Te,Ut,uu,bm,Im],mediaType:"json",serializer:yt},zw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"PATCH",responses:{204:{headersMapper:hm},default:{bodyMapper:ve,headersMapper:gm}},requestBody:cu,queryParameters:[qt,Ye],urlParameters:[Ee,mt,Vo,Bo],headerParameters:[Ce,Te,Ut,uu,bm,Im],mediaType:"json",serializer:yt},Rw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"DELETE",responses:{204:{headersMapper:vm},default:{bodyMapper:ve,headersMapper:wm}},queryParameters:[qt,Ye],urlParameters:[Ee,mt,Vo,Bo],headerParameters:[Yn,Ce,Te,Ut,vw],serializer:yt},_w={path:"/{table}",httpMethod:"POST",responses:{201:{bodyMapper:{type:{name:"Dictionary",value:{type:{name:"any"}}}},headersMapper:Vl},204:{headersMapper:Vl},default:{bodyMapper:ve,headersMapper:xm}},requestBody:cu,queryParameters:[qt,Ye],urlParameters:[Ee,mt],headerParameters:[Yn,Ce,Te,Ut,Am,Mm],mediaType:"json",serializer:yt},Aw={path:"/{table}",httpMethod:"GET",responses:{200:{bodyMapper:{type:{name:"Sequence",element:{type:{name:"Composite",className:"SignedIdentifier"}}},serializedName:"SignedIdentifiers",xmlName:"SignedIdentifiers",xmlIsWrapped:!0,xmlElementName:"SignedIdentifier"},headersMapper:Sm},default:{bodyMapper:ve,headersMapper:Nm}},queryParameters:[Ye,Dm],urlParameters:[Ee,mt],headerParameters:[Ce,Te,du],isXML:!0,serializer:Um},Mw={path:"/{table}",httpMethod:"PUT",responses:{204:{headersMapper:Pm},default:{bodyMapper:ve,headersMapper:Em}},requestBody:ww,queryParameters:[Ye,Dm],urlParameters:[Ee,mt],headerParameters:[Ce,Te,$m,jm],isXML:!0,contentType:"application/xml; charset=utf-8",mediaType:"xml",serializer:Um};class bw{constructor(t){this.client=t}setProperties(t,n){return this.client.sendOperationRequest({tableServiceProperties:t,options:n},Iw)}getProperties(t){return this.client.sendOperationRequest({options:t},Dw)}getStatistics(t){return this.client.sendOperationRequest({options:t},$w)}}const pu=Za(su,!0),Iw={path:"/",httpMethod:"PUT",responses:{202:{headersMapper:Cm},default:{bodyMapper:ve,headersMapper:Tm}},requestBody:xw,queryParameters:[Ye,fu,Lm],urlParameters:[Ee],headerParameters:[Ce,Te,$m,jm],isXML:!0,contentType:"application/xml; charset=utf-8",mediaType:"xml",serializer:pu},Dw={path:"/",httpMethod:"GET",responses:{200:{bodyMapper:ou,headersMapper:km},default:{bodyMapper:ve,headersMapper:Om}},queryParameters:[Ye,fu,Lm],urlParameters:[Ee],headerParameters:[Ce,Te,du],isXML:!0,serializer:pu},$w={path:"/",httpMethod:"GET",responses:{200:{bodyMapper:rm,headersMapper:zm},default:{bodyMapper:ve,headersMapper:Rm}},queryParameters:[Ye,fu,Sw],urlParameters:[Ee],headerParameters:[Ce,Te,du],isXML:!0,serializer:pu};class qm extends X1{constructor(t,n){var r,i;if(t===void 0)throw new Error("'url' cannot be null");n||(n={});const o={requestContentType:"application/json; charset=utf-8"},s="azsdk-js-data-tables/13.1.2",l=n.userAgentOptions&&n.userAgentOptions.userAgentPrefix?`${n.userAgentOptions.userAgentPrefix} ${s}`:`${s}`,a=Object.assign(Object.assign(Object.assign({},o),n),{userAgentOptions:{userAgentPrefix:l},baseUri:(i=(r=n.endpoint)!==null&&r!==void 0?r:n.baseUri)!==null&&i!==void 0?i:"{url}"});super(a),this.url=t,this.version=n.version||"2019-02-02",this.table=new Nw(this),this.service=new bw(this)}}const jw="apiVersionPolicy",Hm=e=>({name:jw,sendRequest:async(t,n)=>(t.headers.set("x-ms-version",e),n(t))});function Lw(e,t){throw new Error("Account connection string is only supported in Node.js environment")}function Uw(e,t,n,r,i){throw new Error("Account connection string is only supported in Node.js environment")}const qw="DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1";function Fm(e,t={}){e.toLowerCase().indexOf("usedevelopmentstorage=true")!==-1&&(e=qw,t.allowInsecureConnection=!0);const n=Hw(e);if(n.kind==="AccountConnString")return Lw();if(n.kind==="SASConnString")return{url:`${n.url}?${n.accountSas}`,options:t};throw new Error("Connection string must be either an Account connection string or a SAS connection string")}function Hw(e){let t=fn(e,"TableEndpoint");return t=t.endsWith("/")?t.slice(0,-1):t,Fw(e)?Uw(fn(e,"AccountName"),fn(e,"AccountKey"),fn(e,"DefaultEndpointsProtocol"),fn(e,"EndpointSuffix")):Vw(e,t)}function Fw(e){const t=e.toLowerCase();return t.search("defaultendpointsprotocol=")!==-1&&t.search("accountkey=")!==-1}function Vw(e,t){const n=Kw(t),r=fn(e,"SharedAccessSignature");if(t)if(r){if(!n)throw new Error("Invalid AccountName in the provided SAS Connection String")}else throw new Error("Invalid SharedAccessSignature in the provided SAS Connection String");else throw new Error("Invalid TableEndpoint in the provided SAS Connection String");return{kind:"SASConnString",url:t,accountName:n,accountSas:r}}function fn(e,t){const n=t.toLowerCase(),r=e.split(";").filter(i=>!!i);for(const i of r){const o=i.trim(),[s,l]=Bw(o);if(s.toLowerCase()===n)return l}return""}function Bw(e){if(!e||e.indexOf("=")===-1)return[];const t=e.substr(0,e.indexOf("=")),n=e.substr(e.indexOf("=")+1);return[t,n]}function Kw(e){if(!e)return e;const t=new URL(e);let n;const r=t.host||"",i=t.pathname||"",o=r.split("."),s=i.split("/");if(o.length>=1&&o[1]==="table")e=e.endsWith("/")?e.slice(0,-1):e,n=r.split(".")[0];else if(s.length>=1)n=s[1];else throw new Error("Unable to extract accountName with provided information.");return n}function Vm(e,t={}){var n,r;const i=Ww(e);if(i&&i.status===409&&((n=i.parsedBody.odataError)===null||n===void 0?void 0:n.code)==="TableAlreadyExists")(r=t.logger)===null||r===void 0||r.info(`Table ${t.tableName} already Exists`),t.onResponse&&t.onResponse(i,{});else throw e}function Ww(e){if(!Qw(e))return;const t=e.response;if(!(!t||!Gw(t.parsedBody)))return t}function Qw(e){return e.name==="RestError"}function Gw(e){return!!(e!=null&&e.odataError)}function Po(e){return Xa(e)||Ga(e)||Ya(e)}const In=qo("data-tables");function Bm(e,t,n){e.removePolicy({name:"bearerTokenPolicy"}),e.addPolicy(Qp({credential:t,scopes:n,challengeCallbacks:{authorizeRequestOnChallenge:J1}}),{phase:"Sign"})}function Km(e){throw new Error("Shared Access Key authentication is not supported in the browser")}const Xw="tablesSASTokenPolicy";function Wm(e){return{name:Xw,async sendRequest(t,n){return Yw(t,e),n(t)}}}function Yw(e,t){const n=new URLSearchParams(t.signature),r=new URL(e.url);for(const[i,o]of n)r.searchParams.append(i,o);e.url=r.toString()}const Y=Bp({namespace:"Microsoft.Data.Tables",packageName:"@azure/data-tables",packageVersion:"13.2.2"});class Eo{constructor(t,n,r){this.url=t;const i=Po(n)?n:void 0,o=(Po(n)?r:n)||{};o.endpoint=o.endpoint||this.url;const s=Object.assign(Object.assign({},o),{loggingOptions:{logger:In.info,additionalAllowedHeaderNames:[...Sp]},deserializationOptions:{parseXML:Ep},serializationOptions:{stringifyXML:Cp}}),l=new qm(this.url,s);l.pipeline.addPolicy(P0),Ga(i)?l.pipeline.addPolicy(Km()):Xa(i)&&l.pipeline.addPolicy(Wm(i)),Ya(i)&&Bm(l.pipeline,i,xp),r!=null&&r.version&&l.pipeline.addPolicy(Hm(r.version)),this.pipeline=l.pipeline,this.table=l.table,this.service=l.service}async getStatistics(t={}){return Y.withSpan("TableServiceClient.getStatistics",t,n=>this.service.getStatistics(E0(n)))}getProperties(t={}){return Y.withSpan("TableServiceClient.getProperties",t,n=>this.service.getProperties(n))}setProperties(t,n={}){return Y.withSpan("TableServiceClient.setProperties",n,r=>this.service.setProperties(t,r))}createTable(t,n={}){return Y.withSpan("TableServiceClient.createTable",n,async r=>{try{await this.table.create({name:t},r)}catch(i){Vm(i,Object.assign(Object.assign({},r),{logger:In,tableName:t}))}})}deleteTable(t,n={}){return Y.withSpan("TableServiceClient.deleteTable",n,async r=>{try{await this.table.delete(t,r)}catch(i){if(i.statusCode===404)In.info("TableServiceClient.deleteTable: Table doesn't exist");else throw i}})}listTables(t){const n=this.listTablesAll(t);return{next(){return n.next()},[Symbol.asyncIterator](){return this},byPage:r=>{const i=Object.assign(Object.assign({},t),{queryOptions:Object.assign(Object.assign({},t==null?void 0:t.queryOptions),{top:r==null?void 0:r.maxPageSize})});return r!=null&&r.continuationToken&&(i.continuationToken=r.continuationToken),this.listTablesPage(i)}}}listTablesAll(t){return go(this,arguments,function*(){var r,i;const o=yield K(this._listTables(t)),{continuationToken:s}=o;if(yield K(yield*vo(Mn(o))),s){const u=Object.assign(Object.assign({},t),{continuationToken:s});try{for(var l=Mn(this.listTablesPage(u)),a;a=yield K(l.next()),!a.done;){const c=a.value;yield K(yield*vo(Mn(c)))}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=l.return)&&(yield K(i.call(l)))}finally{if(r)throw r.error}}}})}listTablesPage(t={}){return go(this,arguments,function*(){let r=yield K(Y.withSpan("TableServiceClient.listTablesPage",t,i=>this._listTables(i)));for(yield yield K(r);r.continuationToken;){const i=Object.assign(Object.assign({},t),{continuationToken:r.continuationToken});r=yield K(Y.withSpan("TableServiceClient.listTablesPage",i,async(o,s)=>(s.setAttribute("continuationToken",o.continuationToken),this._listTables(o)))),yield yield K(r)}})}async _listTables(t={}){const{continuationToken:n}=t,r=Ct(t,["continuationToken"]),{xMsContinuationNextTableName:i,value:o=[]}=await this.table.query(Object.assign(Object.assign({},r),{nextTableName:n}));return Object.assign([...o],{continuationToken:i})}static fromConnectionString(t,n){const{url:r,options:i,credential:o}=Fm(t,n);return o?new Eo(r,o,i):new Eo(r,i)}}function Qm(e){return`changeset_${e}`}function Zw(e){return`batch_${e}`}function Jw(e,t){return[`--${`batch_${e}`}${We}${wo.CONTENT_TYPE}: multipart/mixed; boundary=changeset_${t}${We}${We}`]}function ex(e,t,n){const r=Zw(t),o=`--${Qm(n)}--`,s=`--${r}--`;return`${e.join(We)}${We}${o}${We}${s}${We}`}const Gm="transactionRequestAssemblePolicy",tx={request:iu({url:"FAKE"}),status:200,headers:Fo()};function nx(e,t){return{name:Gm,async sendRequest(n){const r=ox(n,t);return e.push(r),tx}}}const Xm="transactionHeaderFilterPolicy";function rx(){return{name:Xm,async sendRequest(e,t){return e.headers.delete(wo.X_MS_VERSION),t(e)}}}function ix(e){const t=["sv","ss","srt","sp","se","st","spr","sig"],n=new URL(e);return t.forEach(r=>n.searchParams.delete(r)),n.toString()}function ox(e,t){const r=`--${Qm(t)}${We}${wo.CONTENT_TYPE}: application/http${We}${wo.CONTENT_TRANSFER_ENCODING}: binary`,i=ix(e.url),o=[r,"",`${e.method.toString()} ${i} ${x0}`];for(const[s,l]of e.headers)o.push(`${s}: ${l}`);return o.push(`${We}`),e.body&&o.push(String(e.body)),o.join(We)}const sx="cosmosPatchPolicy";function Ym(){return{name:sx,sendRequest:(e,t)=>(e.method==="PATCH"&&(e.method="POST",e.headers.set("X-HTTP-Method","MERGE")),t(e))}}function lx(e){return{accept:"application/json","x-ms-version":"2019-02-02",DataServiceVersion:"3.0;",MaxDataServiceVersion:"3.0;NetFx","Content-Type":`multipart/mixed; boundary=batch_${e}`}}const ax=lx;function Zm(e){const t=new URL(e);return t.hostname.indexOf(".table.cosmosdb.")!==-1||t.hostname.indexOf(".table.cosmos.")!==-1||t.hostname==="localhost"&&t.port!=="10002"}class ux{constructor(t,n,r,i,o,s,l,a=!1){if(this.client=o,this.url=t,this.interceptClient=s,this.allowInsecureConnection=a,this.state=this.initializeState(r,i,n),l)this.url=`${this.getUrlWithSlash()}$batch`;else{const u=t.split("?");this.url=u[0];const c=u.length>1?`?${u[1]}`:"";this.url=`${this.getUrlWithSlash()}$batch${c}`}}initializeState(t,n,r){const i=[],o=Jw(t,n),s=Zm(this.url);return dx(this.interceptClient.pipeline,o,n,s),{transactionId:t,changesetId:n,partitionKey:r,pendingOperations:i,bodyParts:o}}createEntity(t){this.checkPartitionKey(t.partitionKey),this.state.pendingOperations.push(this.interceptClient.createEntity(t))}createEntities(t){for(const n of t)this.checkPartitionKey(n.partitionKey),this.state.pendingOperations.push(this.interceptClient.createEntity(n))}deleteEntity(t,n,r){this.checkPartitionKey(t),this.state.pendingOperations.push(this.interceptClient.deleteEntity(t,n,r))}updateEntity(t,n,r){this.checkPartitionKey(t.partitionKey),this.state.pendingOperations.push(this.interceptClient.updateEntity(t,n,r))}upsertEntity(t,n,r){this.checkPartitionKey(t.partitionKey),this.state.pendingOperations.push(this.interceptClient.upsertEntity(t,n,r))}async submitTransaction(){await Promise.all(this.state.pendingOperations);const t=ex(this.state.bodyParts,this.state.transactionId,this.state.changesetId),n=ax(this.state.transactionId);return Y.withSpan("TableTransaction.submitTransaction",{},async r=>{const i=iu({url:this.url,method:"POST",body:t,headers:Fo(n),tracingOptions:r.tracingOptions,allowInsecureConnection:this.allowInsecureConnection}),o=await this.client.sendRequest(i);return cx(o)})}checkPartitionKey(t){if(this.state.partitionKey!==t)throw new Error("All operations in a transaction must target the same partitionKey")}getUrlWithSlash(){return this.url.endsWith("/")?this.url:`${this.url}/`}}function cx(e){const t="--changesetresponse_",n=e.status,r=e.bodyAsText||"",i=r.split(t);200<=n&&n<300||Gc(r,n,e.request,e);const l=i.slice(1,i.length-1).map(a=>{const u=a.match(/HTTP\/1.1 ([0-9]*)/);if((u==null?void 0:u.length)!==2)throw new Error(`Couldn't extract status from sub-response:
 ${a}`);const c=Number.parseInt(u[1]);if(!Number.isInteger(c))throw new Error(`Expected sub-response status to be an integer ${c}`);const f=a.match(/\{(.*)\}/);(f==null?void 0:f.length)===2&&Gc(f[0],c,e.request,e);const d=a.match(/ETag: (.*)/),g=a.match(/RowKey='(.*)'/);return Object.assign(Object.assign({status:c},(g==null?void 0:g.length)===2&&{rowKey:g[1]}),(d==null?void 0:d.length)===2&&{etag:d[1]})});return{status:n,subResponses:l,getResponseForEntity:a=>l.find(u=>u.rowKey===a)}}function Gc(e,t,n,r){var i,o;let s;try{s=JSON.parse(e)}catch{s={}}let l="Transaction Failed",a;if(s&&s["odata.error"]){const u=s["odata.error"];l=(o=(i=u.message)===null||i===void 0?void 0:i.value)!==null&&o!==void 0?o:l,a=u.code}throw new qe(l,{code:a,statusCode:t,request:n,response:r})}function dx(e,t,n,r){const i=e.getOrderedPolicies();for(const o of i)e.removePolicy({name:o.name});e.addPolicy(Yp(),{phase:"Serialize"}),e.addPolicy(rx()),e.addPolicy(nx(t,n)),r&&e.addPolicy(Ym(),{afterPolicies:[Xm],beforePolicies:[Xp,Gm]})}function Jm(e){let t="";if(typeof e=="string")t=e;else for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function ey(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}function fx(e,t){if(!e)return;const n=Object.assign({nextPartitionKey:e},t&&{nextRowKey:t});return Jm(JSON.stringify(n))}function px(e){const t=ey(e);let n="";for(const i of t)n+=String.fromCharCode(i);return JSON.parse(n)}const mu=new Map([["PartitionKey","partitionKey"],["RowKey","rowKey"],["odata.etag","etag"],["Timestamp","timestamp"]]),be={Binary:"Edm.Binary",Boolean:"Edm.Boolean",DateTime:"Edm.DateTime",Double:"Edm.Double",Guid:"Edm.Guid",Int32:"Edm.Int32",Int64:"Edm.Int64",String:"Edm.String"};function mx(e){const t={value:e};if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")t.value=e;else if(typeof e=="bigint")t.value=e.toString(),t.type=be.Int64;else if(e instanceof Date)t.value=e,t.type=be.DateTime;else if(e instanceof Uint8Array)t.value=Jm(e),t.type=be.Binary;else throw new Error(`Unknown EDM type ${typeof e}`);return t}function yx(e){const t={value:e.value};if(e.type==="Boolean"||e.type==="DateTime"||e.type==="Double"||e.type==="Guid"||e.type==="Int32"||e.type==="Int64"||e.type==="String"||e.type==="Binary")t.value=e.value,t.type=be[e.type];else throw new Error(`Unknown EDM type ${typeof e.value}`);return t}function hx(e){return typeof e=="object"&&(e==null?void 0:e.value)!==void 0&&(e==null?void 0:e.type)!==void 0?yx(e):mx(e)}function ty(e){for(const[t,n]of mu)if(n===e)return t;return e}function ar(e){const t={};for(const[n,r]of Object.entries(e)){const i=ty(n),o=hx(r);t[i]=o.value,o.type&&(t[`${i}@odata.type`]=o.type)}return t}function gx(e,t,n){switch(t){case be.Boolean:return n?{value:e,type:"Boolean"}:e;case be.Double:return n?{value:e,type:"Double"}:e;case be.Int32:return n?{value:e,type:"Int32"}:e;case be.String:return n?{value:e,type:"String"}:e;case be.DateTime:return n?{value:e,type:"DateTime"}:new Date(e);case be.Int64:return n?{value:e,type:"Int64"}:BigInt(e);case be.Guid:return{value:e,type:"Guid"};case be.Binary:return n?{value:e,type:"Binary"}:ey(e);default:throw new Error(`Unknown EDM type ${t}`)}}function ny(e,t=!1){var n;const r={};for(const[i,o]of Object.entries(e))if(i.indexOf("@odata.type")===-1){const s=(n=mu.get(i))!==null&&n!==void 0?n:i;let l=o;if(`${i}@odata.type`in e){const a=e[`${i}@odata.type`];l=gx(o,a,t)}else t&&["number","string","boolean"].includes(typeof o)&&(l=vx(i,o));r[s]=l}return r}function vx(e,t){if(mu.has(e))return t;switch(typeof t){case"boolean":return{value:String(t),type:"Boolean"};case"number":return wx(t);case"string":return{value:t,type:"String"};default:return t}}function wx(e){const t=String(e);return Number.isSafeInteger(e)?{value:t,type:"Int32"}:{value:t,type:"Double"}}function xx(e,t){return e.map(n=>ny(n,t))}function Sx(e){return e.map(t=>{const{id:n,accessPolicy:r}=t,i=r??{},{start:o,expiry:s}=i,l=Ct(i,["start","expiry"]),a=o?jc(o,!1):void 0,u=s?jc(s,!1):void 0;return{id:n,accessPolicy:Object.assign(Object.assign(Object.assign({},u&&{expiry:u}),a&&{start:a}),l)}})}function Nx(e){return e.map(t=>{const{id:n,accessPolicy:r}=t,i=r??{},{start:o,expiry:s}=i,l=Ct(i,["start","expiry"]),a=o?new Date(o):void 0,u=s?new Date(s):void 0;return{id:n,accessPolicy:Object.assign(Object.assign(Object.assign({},u&&{expiry:u}),a&&{start:a}),l)}})}function Xc(e){const{select:t}=e,n=Ct(e,["select"]),r=Object.assign({},n),i=["etag","odata.etag"];return t&&(r.select=t.filter(o=>!i.includes(o)).map(ty).join(",")),r}var ki,Px=new Uint8Array(16);function Ex(){if(!ki&&(ki=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!ki))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ki(Px)}const Cx=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Tx(e){return typeof e=="string"&&Cx.test(e)}var ie=[];for(var As=0;As<256;++As)ie.push((As+256).toString(16).substr(1));function kx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(ie[e[t+0]]+ie[e[t+1]]+ie[e[t+2]]+ie[e[t+3]]+"-"+ie[e[t+4]]+ie[e[t+5]]+"-"+ie[e[t+6]]+ie[e[t+7]]+"-"+ie[e[t+8]]+ie[e[t+9]]+"-"+ie[e[t+10]]+ie[e[t+11]]+ie[e[t+12]]+ie[e[t+13]]+ie[e[t+14]]+ie[e[t+15]]).toLowerCase();if(!Tx(n))throw TypeError("Stringified UUID is invalid");return n}function Ox(e,t,n){e=e||{};var r=e.random||(e.rng||Ex)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return kx(r)}class Yc{static generateUuid(){return Ox()}}function gt(e){return e.replace(/'/g,"''")}class kr{constructor(t,n,r,i={}){var o;this.url=t,this.tableName=n;const s=Po(r)?r:void 0;this.credential=s,this.clientOptions=(Po(r)?i:r)||{},this.allowInsecureConnection=(o=this.clientOptions.allowInsecureConnection)!==null&&o!==void 0?o:!1,this.clientOptions.endpoint=this.clientOptions.endpoint||this.url;const l=Object.assign(Object.assign({},this.clientOptions),{loggingOptions:{logger:In.info,additionalAllowedHeaderNames:[...Sp]},deserializationOptions:{parseXML:Ep},serializationOptions:{stringifyXML:Cp}}),a=new qm(this.url,l);Ga(s)?a.pipeline.addPolicy(Km()):Xa(s)&&a.pipeline.addPolicy(Wm(s)),Ya(s)&&Bm(a.pipeline,s,xp),Zm(this.url)&&a.pipeline.addPolicy(Ym()),i.version&&a.pipeline.addPolicy(Hm(i.version)),this.generatedClient=a,this.table=a.table,this.pipeline=a.pipeline}deleteTable(t={}){return Y.withSpan("TableClient.deleteTable",t,async n=>{try{await this.table.delete(this.tableName,n)}catch(r){if(r.statusCode===404)In.info("TableClient.deleteTable: Table doesn't exist");else throw r}})}createTable(t={}){return Y.withSpan("TableClient.createTable",t,async n=>{try{await this.table.create({name:this.tableName},n)}catch(r){Vm(r,Object.assign(Object.assign({},n),{logger:In,tableName:this.tableName}))}})}getEntity(t,n,r={}){return Y.withSpan("TableClient.getEntity",r,async i=>{let o;function s(f,d){o=f.parsedBody,i.onResponse&&i.onResponse(f,d)}const{disableTypeConversion:l,queryOptions:a}=i,u=Ct(i,["disableTypeConversion","queryOptions"]);return await this.table.queryEntitiesWithPartitionAndRowKey(this.tableName,gt(t),gt(n),Object.assign(Object.assign({},u),{queryOptions:Xc(a||{}),onResponse:s})),ny(o,l??!1)})}listEntities(t={}){const n=this.tableName,r=this.listEntitiesAll(n,t);return{next(){return r.next()},[Symbol.asyncIterator](){return this},byPage:i=>{const o=Object.assign(Object.assign({},t),{queryOptions:Object.assign(Object.assign({},t.queryOptions),{top:i==null?void 0:i.maxPageSize})});return i!=null&&i.continuationToken&&(o.continuationToken=i.continuationToken),this.listEntitiesPage(n,o)}}}listEntitiesAll(t,n){return go(this,arguments,function*(){var i,o;const s=yield K(this._listEntities(t,n));if(yield K(yield*vo(Mn(s))),s.continuationToken){const u=Object.assign(Object.assign({},n),{continuationToken:s.continuationToken});try{for(var l=Mn(this.listEntitiesPage(t,u)),a;a=yield K(l.next()),!a.done;){const c=a.value;yield K(yield*vo(Mn(c)))}}catch(c){i={error:c}}finally{try{a&&!a.done&&(o=l.return)&&(yield K(o.call(l)))}finally{if(i)throw i.error}}}})}listEntitiesPage(t,n={}){return go(this,arguments,function*(){let i=yield K(Y.withSpan("TableClient.listEntitiesPage",n,o=>this._listEntities(t,o)));for(yield yield K(i);i.continuationToken;){const o=Object.assign(Object.assign({},n),{continuationToken:i.continuationToken});i=yield K(Y.withSpan("TableClient.listEntitiesPage",o,(s,l)=>(l.setAttribute("continuationToken",i.continuationToken),this._listEntities(t,s)))),yield yield K(i)}})}async _listEntities(t,n={}){const{disableTypeConversion:r=!1}=n,i=Xc(n.queryOptions||{}),o=Object.assign(Object.assign({},n),{queryOptions:i});if(n.continuationToken){const d=px(n.continuationToken);o.nextRowKey=d.nextRowKey,o.nextPartitionKey=d.nextPartitionKey}const{xMsContinuationNextPartitionKey:s,xMsContinuationNextRowKey:l,value:a}=await this.table.queryEntities(t,o),u=xx(a??[],r),c=fx(s,l);return Object.assign([...u],{continuationToken:c})}createEntity(t,n={}){return Y.withSpan("TableClient.createEntity",n,r=>{const i=Ct(r||{},[]);return this.table.insertEntity(this.tableName,Object.assign(Object.assign({},i),{tableEntityProperties:ar(t),responsePreference:"return-no-content"}))})}deleteEntity(t,n,r={}){return Y.withSpan("TableClient.deleteEntity",r,i=>{const{etag:o="*"}=i,s=Ct(i,["etag"]),l=Object.assign({},s);return this.table.deleteEntity(this.tableName,gt(t),gt(n),o,l)})}updateEntity(t,n="Merge",r={}){return Y.withSpan("TableClient.updateEntity",r,async i=>{const o=gt(t.partitionKey),s=gt(t.rowKey),l=i||{},{etag:a="*"}=l,u=Ct(l,["etag"]);if(n==="Merge")return this.table.mergeEntity(this.tableName,o,s,Object.assign({tableEntityProperties:ar(t),ifMatch:a},u));if(n==="Replace")return this.table.updateEntity(this.tableName,o,s,Object.assign({tableEntityProperties:ar(t),ifMatch:a},u));throw new Error(`Unexpected value for update mode: ${n}`)},{spanAttributes:{updateEntityMode:n}})}upsertEntity(t,n="Merge",r={}){return Y.withSpan("TableClient.upsertEntity",r,async i=>{const o=gt(t.partitionKey),s=gt(t.rowKey);if(n==="Merge")return this.table.mergeEntity(this.tableName,o,s,Object.assign({tableEntityProperties:ar(t)},i));if(n==="Replace")return this.table.updateEntity(this.tableName,o,s,Object.assign({tableEntityProperties:ar(t)},i));throw new Error(`Unexpected value for update mode: ${n}`)},{spanAttributes:{upsertEntityMode:n}})}getAccessPolicy(t={}){return Y.withSpan("TableClient.getAccessPolicy",t,async n=>{const r=await this.table.getAccessPolicy(this.tableName,n);return Nx(r)})}setAccessPolicy(t,n={}){return Y.withSpan("TableClient.setAccessPolicy",n,r=>{const i=Sx(t);return this.table.setAccessPolicy(this.tableName,Object.assign(Object.assign({},r),{tableAcl:i}))})}async submitTransaction(t){const n=t[0][1].partitionKey,r=Yc.generateUuid(),i=Yc.generateUuid(),o=new ux(this.url,n,r,i,this.generatedClient,new kr(this.url,this.tableName),this.credential,this.allowInsecureConnection);for(const s of t){const[l,a,u="Merge",c]=s;switch(l){case"create":o.createEntity(a);break;case"delete":o.deleteEntity(a.partitionKey,a.rowKey);break;case"update":o.updateEntity(a,u,c);break;case"upsert":o.upsertEntity(a,u)}}return o.submitTransaction()}static fromConnectionString(t,n,r){const{url:i,options:o,credential:s}=Fm(t,r);return s?new kr(i,n,s,o):new kr(i,n,o)}}async function zx(){let e="https://icsltn2qastore.table.core.windows.net/?sv=2022-11-02&ss=t&srt=sco&sp=rwdlacu&se=2123-05-17T10:14:54Z&st=2023-05-17T02:14:54Z&spr=https&sig=D1FbXTuBcFKeEJ5lUw14FlIFRb4kl2C84uU9c90aqEA%3D",t="BlobEndpoint=https://icsltn2qastore.blob.core.windows.net/;QueueEndpoint=https://icsltn2qastore.queue.core.windows.net/;FileEndpoint=https://icsltn2qastore.file.core.windows.net/;TableEndpoint=https://icsltn2qastore.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-18T00:28:14Z&st=2023-05-17T16:28:14Z&spr=https,http&sig=%2F0%2FcHEiRTcKSwpRtQnKsy0mTf3sL%2BXuDwEc90ZL%2BpEo%3D";await Eo.fromConnectionString(t,{allowInsecureConnection:!0}).createTable("test");const r=new kr(e,"test"),i={partitionKey:"hometasks",rowKey:"1",description:"take out the trash",dueDate:new Date(2015,6,20)};let o=await r.createEntity(i);console.log(o)}function Rx(){const e=A.useContext(Qn),t=A.useContext(ni);function n(){t({...e,sidebarOn:!e.sidebarOn})}return k.jsxs("div",{className:"burger-btn sticky z-10 top-0 min-h-[50px] px-4 flex items-center justify-between bg-green-700 ",children:[k.jsx("div",{children:k.jsx("img",{className:"cursor-pointer",onClick:n,src:g0,alt:"Menu"})}),k.jsx("div",{onClick:()=>{zx()},className:"text-slate-200 border-double border-b-4 text-xl cursor-pointer",children:e.subject}),k.jsx("div",{})]})}function _x(){const e=A.useContext(Qn),t=A.useContext(Qa),n=A.useContext(ti),r=e.testModeOn&&e.correctAnswers,i=A.useMemo(()=>(console.log("calculating ..."),t.reduce((o,s)=>o+(s.correct?1:0),0)),[t]);return k.jsxs("div",{className:`bottombar ${r?"":"none"}`,children:[k.jsxs("div",{className:"score",children:[k.jsx("span",{className:"score__label",children:"Score: "}),k.jsxs("span",{className:"score__value",children:[i,"/",t.length]})]}),k.jsx("div",{className:"actions",children:k.jsx("button",{className:"",onClick:()=>n(yp()),children:"مسح الإجابات"})})]})}const Vt={};function Ax(e,t,n=!0,r=100){A.useDebugValue(Vt);const[i,o]=A.useState(!1),s=a=>{var u;return(Vt[e]={...Vt[e],captured:a??((u=Vt[e])==null?void 0:u.captured)??!1}).captured};return i||s()||(t&&!n&&t(),!Vt[e].skip&&(t&&n&&t(),o(()=>s(!0)),setTimeout(()=>o(!1),r))),!i&&s()&&s(!1),[i,()=>e in Vt?Vt[e].skip=!0:!1]}const Zc=(e=35)=>("vibrate"in navigator&&navigator.vibrate(e),!0);function Mx({question:e,index:t}){const n=A.useId(),r=A.useContext(ti),i=A.useContext(ni),o=A.useContext(Qn),s=h=>{i({...o,unbluredQuestion:h})},l=h=>{if(!o.testModeOn)return console.log("testMode is off");if(o.correctAnswers&&e.selectedId)return Zc(60);r(mp(e.id,h)),Zc()},[a]=Ax(n,()=>"",!0,300),u="bg-amber-700",c="bg-green-700",f="bg-red-700",d="bg-slate-800";function g(h){return o.testModeOn?o.correctAnswers?e.selectedId?h.selected?h.correct?c:f:h.correct?c:d:d:h.selected?u:d:h.correct?c:d}return k.jsxs("div",{className:"quest-container",children:[k.jsxs("h2",{className:`quest-text ${a&&"bg-slate-600"||""}`,children:[k.jsx("span",{className:"quest-span",children:t}),e.questionText]}),k.jsx("br",{}),k.jsxs("div",{className:"quest-answers",children:[o.unbluredQuestion!==e.id&&o.blurAnswers&&!o.testModeOn&&k.jsx("div",{className:"blur",onDoubleClick:()=>s(e.id)}),e.answers.map((h,v)=>k.jsxs("div",{className:`quest-answer ${g(h)}`,children:[k.jsx("input",{type:"radio",onClick:N=>l(h.id),name:"answer",id:`answer${n}${v}`,className:"hidden"}),k.jsx("label",{htmlFor:`answer${n}${v}`,className:"quest-answerlable p-2",children:h.text})]},h.id))]})]})}const bx=A.memo(Mx);function Ix(){const e=A.useContext(Qa),t=A.useContext(Qn),n=A.useContext(ni),r=A.useContext(Wa),i=A.useContext(ti),o=t.testModeOn&&t.correctAnswers?"raise":"",s=t.sidebarOn?"none":"",[l,a]=A.useState(""),u=A.useRef(null);return A.useEffect(()=>{if(!e.length){let c="تجارة دولية 1";n({...t,sidebarOn:!1,subject:c,questions:r[c]}),i(Ka(r[c],t.shuffleQuestions))}},[]),k.jsxs("div",{ref:u,className:"p-4 flex-1 overflow-y-auto",children:[e==null?void 0:e.map((c,f)=>k.jsxs("div",{children:[k.jsx(bx,{question:c,index:f+1}),k.jsx("br",{})]},c.id)),k.jsx("div",{className:`scroll-top ${o} ${s} ${l}`,onClick:()=>{var c;return(c=u.current)==null?void 0:c.scrollTo({top:0,behavior:"smooth"})},onPointerMoveCapture:()=>a("hover"),onPointerDownCapture:()=>a("hover"),onPointerOutCapture:()=>a(""),onPointerUp:()=>a("")})]})}function Dx({defaultValue:e=!1,enabled:t=!0,onChange:n,...r}){const i=A.useId(),o=s=>{var l;return n?n(((l=s.target)==null?void 0:l.checked)||!1):null};return k.jsxs("label",{style:{},htmlFor:i,className:`toggle-switch ${t?"":"disabled"}`,children:[k.jsx("input",{...r,type:"checkbox",onChange:o,id:i,disabled:!t,defaultChecked:e}),k.jsx("span",{className:"slider"})]})}function $x(){const e=A.useContext(Qn),t=A.useContext(ni),n=A.useContext(Wa),r=A.useContext(ti),{sidebarOn:i}=e,o=(s,l)=>{switch(s){case"selectedSubject":return t({...e,sidebarOn:!1,subject:l,questions:n[l]}),r(Ka(n[l],e.shuffleQuestions));case"testModeOn":return t({...e,testModeOn:l});case"correctAnswers":return t({...e,correctAnswers:l});case"blurAnswers":return t({...e,blurAnswers:l});case"shuffleQuestions":return t({...e,shuffleQuestions:l}),r(pp([...n[e.subject]],l));case"shuffleAnswers":return t({...e,shuffleAnswers:l});default:return}};return k.jsxs("div",{className:"absolutez",children:[k.jsxs("nav",{onClick:s=>s.stopPropagation(),className:`${i?"":"off"} sidebar`,children:[k.jsx("h2",{className:"item",children:"البنك"}),k.jsxs("div",{className:"subjects",children:[k.jsx("div",{className:"sep"}),Object.keys(n).map(s=>k.jsx("div",{className:`item ${e.subject===s?"active":""}`,onClick:()=>o("selectedSubject",s),children:s},s))]}),k.jsxs("div",{className:"settings",children:[k.jsx("div",{className:"sep"}),"— الاعدادات",k.jsx("div",{className:"sep"}),k.jsx(Oi,{title:"وضع الإختبار",defaultValue:e.testModeOn,action:s=>o("testModeOn",s)}),k.jsx(Oi,{title:"تصحيح الإجابات",enabled:e.testModeOn,defaultValue:e.correctAnswers,action:s=>o("correctAnswers",s)}),k.jsx("p",{}),k.jsx(Oi,{title:"تغشية الإجابات",enabled:!e.testModeOn,defaultValue:e.blurAnswers,action:s=>o("blurAnswers",s)}),k.jsx(Oi,{title:"مزج الأسئلة",defaultValue:e.shuffleQuestions,action:s=>o("shuffleQuestions",s)})]}),k.jsxs("div",{className:"credits",children:[k.jsx("div",{className:"sep"}),"— الحقوق",k.jsx("div",{className:"sep"}),k.jsx("div",{className:"item",children:"motifyee@gmail.com"}),k.jsx("div",{className:"item",children:"م/ مليك روماني"})]})]}),k.jsx("div",{onPointerMove:s=>s.stopPropagation(),onPointerDownCapture:s=>s.stopPropagation(),onPointerDown:s=>s.stopPropagation(),onClick:()=>t({...e,sidebarOn:!1}),className:`${i?"":"off"} sidebar-overlay`})]})}function Oi({title:e,defaultValue:t,action:n,enabled:r=!0}){return k.jsxs("div",{className:"flex justify-between items-center item",children:[k.jsx("div",{className:`${r?"text-gray-200":"text-red-600 line-through"}`,children:e}),k.jsx(Dx,{defaultValue:t,enabled:r,onChange:n})]})}const jx=document.getElementById("root");Ms.createRoot(jx).render(k.jsxs(h0,{children:[k.jsx(Rx,{}),k.jsx($x,{}),k.jsx(Ix,{}),k.jsx(_x,{})]}));
