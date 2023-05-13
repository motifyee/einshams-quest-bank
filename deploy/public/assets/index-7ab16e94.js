(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var _={},kf={get exports(){return _},set exports(e){_=e}},jl={},L={},xf={get exports(){return L},set exports(e){L=e}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),Ef=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),Li=Symbol.iterator;function Rf(e){return e===null||typeof e!="object"?null:(e=Li&&e[Li]||e["@@iterator"],typeof e=="function"?e:null)}var ea={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ta=Object.assign,na={};function wn(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ra(){}ra.prototype=wn.prototype;function Nu(e,t,n){this.props=e,this.context=t,this.refs=na,this.updater=n||ea}var Ou=Nu.prototype=new ra;Ou.constructor=Nu;ta(Ou,wn.prototype);Ou.isPureReactComponent=!0;var Ri=Array.isArray,la=Object.prototype.hasOwnProperty,ju={current:null},oa={key:!0,ref:!0,__self:!0,__source:!0};function ua(e,t,n){var r,l={},o=null,u=null;if(t!=null)for(r in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(o=""+t.key),t)la.call(t,r)&&!oa.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var s=Array(i),a=0;a<i;a++)s[a]=arguments[a+2];l.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:mr,type:e,key:o,ref:u,props:l,_owner:ju.current}}function Mf(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function If(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mi=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?If(""+e.key):t.toString(36)}function Br(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case mr:case Ef:u=!0}}if(u)return u=e,l=l(u),e=r===""?"."+Xl(u,0):r,Ri(l)?(n="",e!=null&&(n=e.replace(Mi,"$&/")+"/"),Br(l,t,n,"",function(a){return a})):l!=null&&(zu(l)&&(l=Mf(l,n+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(Mi,"$&/")+"/")+e)),t.push(l)),1;if(u=0,r=r===""?".":r+":",Ri(e))for(var i=0;i<e.length;i++){o=e[i];var s=r+Xl(o,i);u+=Br(o,t,n,s,l)}else if(s=Rf(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=r+Xl(o,i++),u+=Br(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function Cr(e,t,n){if(e==null)return e;var r=[],l=0;return Br(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Wr={transition:null},Af={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:ju};R.Children={map:Cr,forEach:function(e,t,n){Cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Cr(e,function(){t++}),t},toArray:function(e){return Cr(e,function(t){return t})||[]},only:function(e){if(!zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=wn;R.Fragment=Cf;R.Profiler=_f;R.PureComponent=Nu;R.StrictMode=Pf;R.Suspense=zf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ta({},e.props),l=e.key,o=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,u=ju.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)la.call(t,s)&&!oa.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){i=Array(s);for(var a=0;a<s;a++)i[a]=arguments[a+2];r.children=i}return{$$typeof:mr,type:e.type,key:l,ref:o,props:r,_owner:u}};R.createContext=function(e){return e={$$typeof:Of,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nf,_context:e},e.Consumer=e};R.createElement=ua;R.createFactory=function(e){var t=ua.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:jf,render:e}};R.isValidElement=zu;R.lazy=function(e){return{$$typeof:Lf,_payload:{_status:-1,_result:e},_init:Df}};R.memo=function(e,t){return{$$typeof:Tf,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return de.current.useCallback(e,t)};R.useContext=function(e){return de.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return de.current.useDeferredValue(e)};R.useEffect=function(e,t){return de.current.useEffect(e,t)};R.useId=function(){return de.current.useId()};R.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return de.current.useMemo(e,t)};R.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};R.useRef=function(e){return de.current.useRef(e)};R.useState=function(e){return de.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return de.current.useTransition()};R.version="18.2.0";(function(e){e.exports=R})(xf);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=L,$f=Symbol.for("react.element"),Uf=Symbol.for("react.fragment"),Vf=Object.prototype.hasOwnProperty,Qf=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bf={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,l={},o=null,u=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)Vf.call(t,r)&&!Bf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:$f,type:e,key:o,ref:u,props:l,_owner:Qf.current}}jl.Fragment=Uf;jl.jsx=ia;jl.jsxs=ia;(function(e){e.exports=jl})(kf);var Oo={},jo={},Wf={get exports(){return jo},set exports(e){jo=e}},Ce={},zo={},Hf={get exports(){return zo},set exports(e){zo=e}},sa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,j){var T=E.length;E.push(j);e:for(;0<T;){var K=T-1>>>1,q=E[K];if(0<l(q,j))E[K]=j,E[T]=q,T=K;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var j=E[0],T=E.pop();if(T!==j){E[0]=T;e:for(var K=0,q=E.length,xr=q>>>1;K<xr;){var Et=2*(K+1)-1,Yl=E[Et],Ct=Et+1,Er=E[Ct];if(0>l(Yl,T))Ct<q&&0>l(Er,Yl)?(E[K]=Er,E[Ct]=T,K=Ct):(E[K]=Yl,E[Et]=T,K=Et);else if(Ct<q&&0>l(Er,T))E[K]=Er,E[Ct]=T,K=Ct;else break e}}return j}function l(E,j){var T=E.sortIndex-j.sortIndex;return T!==0?T:E.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var u=Date,i=u.now();e.unstable_now=function(){return u.now()-i}}var s=[],a=[],h=1,m=null,p=3,v=!1,y=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(E){for(var j=n(a);j!==null;){if(j.callback===null)r(a);else if(j.startTime<=E)r(a),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(a)}}function g(E){if(S=!1,d(E),!y)if(n(s)!==null)y=!0,Hl(k);else{var j=n(a);j!==null&&Kl(g,j.startTime-E)}}function k(E,j){y=!1,S&&(S=!1,f(N),N=-1),v=!0;var T=p;try{for(d(j),m=n(s);m!==null&&(!(m.expirationTime>j)||E&&!ee());){var K=m.callback;if(typeof K=="function"){m.callback=null,p=m.priorityLevel;var q=K(m.expirationTime<=j);j=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(s)&&r(s),d(j)}else r(s);m=n(s)}if(m!==null)var xr=!0;else{var Et=n(a);Et!==null&&Kl(g,Et.startTime-j),xr=!1}return xr}finally{m=null,p=T,v=!1}}var P=!1,C=null,N=-1,D=5,O=-1;function ee(){return!(e.unstable_now()-O<D)}function Cn(){if(C!==null){var E=e.unstable_now();O=E;var j=!0;try{j=C(!0,E)}finally{j?Pn():(P=!1,C=null)}}else P=!1}var Pn;if(typeof c=="function")Pn=function(){c(Cn)};else if(typeof MessageChannel<"u"){var Ti=new MessageChannel,Sf=Ti.port2;Ti.port1.onmessage=Cn,Pn=function(){Sf.postMessage(null)}}else Pn=function(){z(Cn,0)};function Hl(E){C=E,P||(P=!0,Pn())}function Kl(E,j){N=z(function(){E(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Hl(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var T=p;p=j;try{return E()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=p;p=E;try{return j()}finally{p=T}},e.unstable_scheduleCallback=function(E,j,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,E={id:h++,callback:j,priorityLevel:E,startTime:T,expirationTime:q,sortIndex:-1},T>K?(E.sortIndex=T,t(a,E),n(s)===null&&E===n(a)&&(S?(f(N),N=-1):S=!0,Kl(g,T-K))):(E.sortIndex=q,t(s,E),y||v||(y=!0,Hl(k))),E},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(E){var j=p;return function(){var T=p;p=j;try{return E.apply(this,arguments)}finally{p=T}}}})(sa);(function(e){e.exports=sa})(Hf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=L,xe=zo;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ca=new Set,Gn={};function Qt(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)ca.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=Object.prototype.hasOwnProperty,Kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ii={},Di={};function Yf(e){return To.call(Di,e)?!0:To.call(Ii,e)?!1:Kf.test(e)?Di[e]=!0:(Ii[e]=!0,!1)}function Xf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gf(e,t,n,r){if(t===null||typeof t>"u"||Xf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,o,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=u}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,Lu);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,Lu);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,Lu);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ru(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gf(t,n,l,r)&&(n=null),r||l===null?Yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),Lo=Symbol.for("react.profiler"),fa=Symbol.for("react.provider"),da=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),Ro=Symbol.for("react.suspense"),Mo=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),pa=Symbol.for("react.offscreen"),Ai=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Gl;function Mn(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Zl=!1;function ql(e,t){if(!e||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var l=a.stack.split(`
`),o=r.stack.split(`
`),u=l.length-1,i=o.length-1;1<=u&&0<=i&&l[u]!==o[i];)i--;for(;1<=u&&0<=i;u--,i--)if(l[u]!==o[i]){if(u!==1||i!==1)do if(u--,i--,0>i||l[u]!==o[i]){var s=`
`+l[u].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=u&&0<=i);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function Zf(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Ht:return"Portal";case Lo:return"Profiler";case Mu:return"StrictMode";case Ro:return"Suspense";case Mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case da:return(e.displayName||"Context")+".Consumer";case fa:return(e._context.displayName||"Context")+".Provider";case Iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return t=e.displayName||null,t!==null?t:Io(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return Io(e(t))}catch{}}return null}function qf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Io(t);case 8:return t===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ha(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jf(e){var t=ha(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=Jf(e))}function ma(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ha(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Do(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function va(e,t){t=t.checked,t!=null&&Ru(e,"checked",t,!1)}function Ao(e,t){va(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $i(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fo(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function $o(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ui(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(In(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function ya(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,wa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bf=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){bf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Sa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function ka(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Sa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var ed=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vo(e,t){if(t){if(ed[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,ln=null,on=null;function Qi(e){if(e=gr(e)){if(typeof Wo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ml(t),Wo(e.stateNode,e.type,t))}}function xa(e){ln?on?on.push(e):on=[e]:ln=e}function Ea(){if(ln){var e=ln,t=on;if(on=ln=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function Ca(e,t){return e(t)}function Pa(){}var Jl=!1;function _a(e,t,n){if(Jl)return e(t,n);Jl=!0;try{return Ca(e,t,n)}finally{Jl=!1,(ln!==null||on!==null)&&(Pa(),Ea())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ho=!1;if(qe)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ho=!1}function td(e,t,n,r,l,o,u,i,s){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(h){this.onError(h)}}var Un=!1,nl=null,rl=!1,Ko=null,nd={onError:function(e){Un=!0,nl=e}};function rd(e,t,n,r,l,o,u,i,s){Un=!1,nl=null,td.apply(nd,arguments)}function ld(e,t,n,r,l,o,u,i,s){if(rd.apply(this,arguments),Un){if(Un){var a=nl;Un=!1,nl=null}else throw Error(w(198));rl||(rl=!0,Ko=a)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bi(e){if(Bt(e)!==e)throw Error(w(188))}function od(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Bi(l),e;if(o===r)return Bi(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var u=!1,i=l.child;i;){if(i===n){u=!0,n=l,r=o;break}if(i===r){u=!0,r=l,n=o;break}i=i.sibling}if(!u){for(i=o.child;i;){if(i===n){u=!0,n=o,r=l;break}if(i===r){u=!0,r=o,n=l;break}i=i.sibling}if(!u)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Oa(e){return e=od(e),e!==null?ja(e):null}function ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ja(e);if(t!==null)return t;e=e.sibling}return null}var za=xe.unstable_scheduleCallback,Wi=xe.unstable_cancelCallback,ud=xe.unstable_shouldYield,id=xe.unstable_requestPaint,Y=xe.unstable_now,sd=xe.unstable_getCurrentPriorityLevel,Fu=xe.unstable_ImmediatePriority,Ta=xe.unstable_UserBlockingPriority,ll=xe.unstable_NormalPriority,ad=xe.unstable_LowPriority,La=xe.unstable_IdlePriority,zl=null,Be=null;function cd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(zl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:pd,fd=Math.log,dd=Math.LN2;function pd(e){return e>>>=0,e===0?32:31-(fd(e)/dd|0)|0}var Or=64,jr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var i=u&~l;i!==0?r=Dn(i):(o&=u,o!==0&&(r=Dn(o)))}else u=n&~l,u!==0?r=Dn(u):o!==0&&(r=Dn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function hd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-Ae(o),i=1<<u,s=l[u];s===-1?(!(i&n)||i&r)&&(l[u]=hd(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function vd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function $u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Ma(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ia,Uu,Da,Aa,Fa,Xo=!1,zr=[],ct=null,ft=null,dt=null,Jn=new Map,bn=new Map,ot=[],yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hi(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function On(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gd(e,t,n,r,l){switch(t){case"focusin":return ct=On(ct,e,t,n,r,l),!0;case"dragenter":return ft=On(ft,e,t,n,r,l),!0;case"mouseover":return dt=On(dt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Jn.set(o,On(Jn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,bn.set(o,On(bn.get(o)||null,e,t,n,r,l)),!0}return!1}function $a(e){var t=jt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Na(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){Da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return t=gr(n),t!==null&&Uu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ki(e,t,n){Hr(e)&&n.delete(t)}function wd(){Xo=!1,ct!==null&&Hr(ct)&&(ct=null),ft!==null&&Hr(ft)&&(ft=null),dt!==null&&Hr(dt)&&(dt=null),Jn.forEach(Ki),bn.forEach(Ki)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xo||(Xo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,wd)))}function er(e){function t(l){return jn(l,e)}if(0<zr.length){jn(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&jn(ct,e),ft!==null&&jn(ft,e),dt!==null&&jn(dt,e),Jn.forEach(t),bn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)$a(n),n.blockedOn===null&&ot.shift()}var un=tt.ReactCurrentBatchConfig,ul=!0;function Sd(e,t,n,r){var l=I,o=un.transition;un.transition=null;try{I=1,Vu(e,t,n,r)}finally{I=l,un.transition=o}}function kd(e,t,n,r){var l=I,o=un.transition;un.transition=null;try{I=4,Vu(e,t,n,r)}finally{I=l,un.transition=o}}function Vu(e,t,n,r){if(ul){var l=Go(e,t,n,r);if(l===null)ao(e,t,r,il,n),Hi(e,r);else if(gd(l,e,t,n,r))r.stopPropagation();else if(Hi(e,r),t&4&&-1<yd.indexOf(e)){for(;l!==null;){var o=gr(l);if(o!==null&&Ia(o),o=Go(e,t,n,r),o===null&&ao(e,t,r,il,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ao(e,t,r,null,n)}}var il=null;function Go(e,t,n,r){if(il=null,e=Au(r),e=jt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return il=e,null}function Ua(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sd()){case Fu:return 1;case Ta:return 4;case ll:case ad:return 16;case La:return 536870912;default:return 16}default:return 16}}var st=null,Qu=null,Kr=null;function Va(){if(Kr)return Kr;var e,t=Qu,n=t.length,r,l="value"in st?st.value:st.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[o-r];r++);return Kr=l.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Yi(){return!1}function Pe(e){function t(n,r,l,o,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tr:Yi,this.isPropagationStopped=Yi,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Pe(Sn),yr=W({},Sn,{view:0,detail:0}),xd=Pe(yr),eo,to,zn,Tl=W({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(eo=e.screenX-zn.screenX,to=e.screenY-zn.screenY):to=eo=0,zn=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),Xi=Pe(Tl),Ed=W({},Tl,{dataTransfer:0}),Cd=Pe(Ed),Pd=W({},yr,{relatedTarget:0}),no=Pe(Pd),_d=W({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nd=Pe(_d),Od=W({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=Pe(Od),zd=W({},Sn,{data:0}),Gi=Pe(zd),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rd[e])?!!t[e]:!1}function Wu(){return Md}var Id=W({},yr,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dd=Pe(Id),Ad=W({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zi=Pe(Ad),Fd=W({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),$d=Pe(Fd),Ud=W({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=Pe(Ud),Qd=W({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bd=Pe(Qd),Wd=[9,13,27,32],Hu=qe&&"CompositionEvent"in window,Vn=null;qe&&"documentMode"in document&&(Vn=document.documentMode);var Hd=qe&&"TextEvent"in window&&!Vn,Qa=qe&&(!Hu||Vn&&8<Vn&&11>=Vn),qi=String.fromCharCode(32),Ji=!1;function Ba(e,t){switch(e){case"keyup":return Wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Kd(e,t){switch(e){case"compositionend":return Wa(t);case"keypress":return t.which!==32?null:(Ji=!0,qi);case"textInput":return e=t.data,e===qi&&Ji?null:e;default:return null}}function Yd(e,t){if(Yt)return e==="compositionend"||!Hu&&Ba(e,t)?(e=Va(),Kr=Qu=st=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qa&&t.locale!=="ko"?null:t.data;default:return null}}var Xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xd[e.type]:t==="textarea"}function Ha(e,t,n,r){xa(r),t=sl(t,"onChange"),0<t.length&&(n=new Bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,tr=null;function Gd(e){nc(e,0)}function Ll(e){var t=Zt(e);if(ma(t))return e}function Zd(e,t){if(e==="change")return t}var Ka=!1;if(qe){var ro;if(qe){var lo="oninput"in document;if(!lo){var es=document.createElement("div");es.setAttribute("oninput","return;"),lo=typeof es.oninput=="function"}ro=lo}else ro=!1;Ka=ro&&(!document.documentMode||9<document.documentMode)}function ts(){Qn&&(Qn.detachEvent("onpropertychange",Ya),tr=Qn=null)}function Ya(e){if(e.propertyName==="value"&&Ll(tr)){var t=[];Ha(t,tr,e,Au(e)),_a(Gd,t)}}function qd(e,t,n){e==="focusin"?(ts(),Qn=t,tr=n,Qn.attachEvent("onpropertychange",Ya)):e==="focusout"&&ts()}function Jd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(tr)}function bd(e,t){if(e==="click")return Ll(t)}function ep(e,t){if(e==="input"||e==="change")return Ll(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:tp;function nr(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!To.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var n=ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ns(n)}}function Xa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ga(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=Ga(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xa(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=rs(n,o);var u=rs(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=qe&&"documentMode"in document&&11>=document.documentMode,Xt=null,Zo=null,Bn=null,qo=!1;function ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qo||Xt==null||Xt!==tl(r)||(r=Xt,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&nr(Bn,r)||(Bn=r,r=sl(Zo,"onSelect"),0<r.length&&(t=new Bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},oo={},Za={};qe&&(Za=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Rl(e){if(oo[e])return oo[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Za)return oo[e]=t[n];return e}var qa=Rl("animationend"),Ja=Rl("animationiteration"),ba=Rl("animationstart"),ec=Rl("transitionend"),tc=new Map,os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){tc.set(e,t),Qt(t,[e])}for(var uo=0;uo<os.length;uo++){var io=os[uo],lp=io.toLowerCase(),op=io[0].toUpperCase()+io.slice(1);St(lp,"on"+op)}St(qa,"onAnimationEnd");St(Ja,"onAnimationIteration");St(ba,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(ec,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ld(r,t,void 0,e),e.currentTarget=null}function nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var u=r.length-1;0<=u;u--){var i=r[u],s=i.instance,a=i.currentTarget;if(i=i.listener,s!==o&&l.isPropagationStopped())break e;us(l,i,a),o=s}else for(u=0;u<r.length;u++){if(i=r[u],s=i.instance,a=i.currentTarget,i=i.listener,s!==o&&l.isPropagationStopped())break e;us(l,i,a),o=s}}}if(rl)throw e=Ko,rl=!1,Ko=null,e}function F(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var r=e+"__bubble";n.has(r)||(rc(t,e,2,!1),n.add(r))}function so(e,t,n){var r=0;t&&(r|=4),rc(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Rr]){e[Rr]=!0,ca.forEach(function(n){n!=="selectionchange"&&(up.has(n)||so(n,!1,e),so(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,so("selectionchange",!1,t))}}function rc(e,t,n,r){switch(Ua(t)){case 1:var l=Sd;break;case 4:l=kd;break;default:l=Vu}n=l.bind(null,t,n,e),l=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ao(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var s=u.tag;if((s===3||s===4)&&(s=u.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;u=u.return}for(;i!==null;){if(u=jt(i),u===null)return;if(s=u.tag,s===5||s===6){r=o=u;continue e}i=i.parentNode}}r=r.return}_a(function(){var a=o,h=Au(n),m=[];e:{var p=tc.get(e);if(p!==void 0){var v=Bu,y=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":v=Dd;break;case"focusin":y="focus",v=no;break;case"focusout":y="blur",v=no;break;case"beforeblur":case"afterblur":v=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Xi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$d;break;case qa:case Ja:case ba:v=Nd;break;case ec:v=Vd;break;case"scroll":v=xd;break;case"wheel":v=Bd;break;case"copy":case"cut":case"paste":v=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zi}var S=(t&4)!==0,z=!S&&e==="scroll",f=S?p!==null?p+"Capture":null:p;S=[];for(var c=a,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=qn(c,f),g!=null&&S.push(lr(c,g,d)))),z)break;c=c.return}0<S.length&&(p=new v(p,y,null,n,h),m.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Bo&&(y=n.relatedTarget||n.fromElement)&&(jt(y)||y[Je]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=a,y=y?jt(y):null,y!==null&&(z=Bt(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=a),v!==y)){if(S=Xi,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Zi,g="onPointerLeave",f="onPointerEnter",c="pointer"),z=v==null?p:Zt(v),d=y==null?p:Zt(y),p=new S(g,c+"leave",v,n,h),p.target=z,p.relatedTarget=d,g=null,jt(h)===a&&(S=new S(f,c+"enter",y,n,h),S.target=d,S.relatedTarget=z,g=S),z=g,v&&y)t:{for(S=v,f=y,c=0,d=S;d;d=Wt(d))c++;for(d=0,g=f;g;g=Wt(g))d++;for(;0<c-d;)S=Wt(S),c--;for(;0<d-c;)f=Wt(f),d--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=Wt(S),f=Wt(f)}S=null}else S=null;v!==null&&is(m,p,v,S,!1),y!==null&&z!==null&&is(m,z,y,S,!0)}}e:{if(p=a?Zt(a):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=Zd;else if(bi(p))if(Ka)k=ep;else{k=Jd;var P=qd}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=bd);if(k&&(k=k(e,a))){Ha(m,k,n,h);break e}P&&P(e,p,a),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Fo(p,"number",p.value)}switch(P=a?Zt(a):window,e){case"focusin":(bi(P)||P.contentEditable==="true")&&(Xt=P,Zo=a,Bn=null);break;case"focusout":Bn=Zo=Xt=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,ls(m,n,h);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":ls(m,n,h)}var C;if(Hu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Yt?Ba(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Qa&&n.locale!=="ko"&&(Yt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Yt&&(C=Va()):(st=h,Qu="value"in st?st.value:st.textContent,Yt=!0)),P=sl(a,N),0<P.length&&(N=new Gi(N,e,null,n,h),m.push({event:N,listeners:P}),C?N.data=C:(C=Wa(n),C!==null&&(N.data=C)))),(C=Hd?Kd(e,n):Yd(e,n))&&(a=sl(a,"onBeforeInput"),0<a.length&&(h=new Gi("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:a}),h.data=C))}nc(m,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=qn(e,n),o!=null&&r.unshift(lr(e,o,l)),o=qn(e,t),o!=null&&r.push(lr(e,o,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function is(e,t,n,r,l){for(var o=t._reactName,u=[];n!==null&&n!==r;){var i=n,s=i.alternate,a=i.stateNode;if(s!==null&&s===r)break;i.tag===5&&a!==null&&(i=a,l?(s=qn(n,o),s!=null&&u.unshift(lr(n,s,i))):l||(s=qn(n,o),s!=null&&u.push(lr(n,s,i)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var ip=/\r\n?/g,sp=/\u0000|\uFFFD/g;function ss(e){return(typeof e=="string"?e:""+e).replace(ip,`
`).replace(sp,"")}function Mr(e,t,n){if(t=ss(t),ss(e)!==t&&n)throw Error(w(425))}function al(){}var Jo=null,bo=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,as=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof as<"u"?function(e){return as.resolve(null).then(e).catch(fp)}:tu;function fp(e){setTimeout(function(){throw e})}function co(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);er(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+kn,or="__reactProps$"+kn,Je="__reactContainer$"+kn,nu="__reactEvents$"+kn,dp="__reactListeners$"+kn,pp="__reactHandles$"+kn;function jt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cs(e);e!==null;){if(n=e[Qe])return n;e=cs(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Qe]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ml(e){return e[or]||null}var ru=[],qt=-1;function kt(e){return{current:e}}function $(e){0>qt||(e.current=ru[qt],ru[qt]=null,qt--)}function A(e,t){qt++,ru[qt]=e.current,e.current=t}var wt={},ae=kt(wt),ve=kt(!1),Mt=wt;function pn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ye(e){return e=e.childContextTypes,e!=null}function cl(){$(ve),$(ae)}function fs(e,t,n){if(ae.current!==wt)throw Error(w(168));A(ae,t),A(ve,n)}function lc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,qf(e)||"Unknown",l));return W({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Mt=ae.current,A(ae,e),A(ve,ve.current),!0}function ds(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=lc(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,$(ve),$(ae),A(ae,e)):$(ve),A(ve,n)}var Ye=null,Il=!1,fo=!1;function oc(e){Ye===null?Ye=[e]:Ye.push(e)}function hp(e){Il=!0,oc(e)}function xt(){if(!fo&&Ye!==null){fo=!0;var e=0,t=I;try{var n=Ye;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Il=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),za(Fu,xt),l}finally{I=t,fo=!1}}return null}var Jt=[],bt=0,dl=null,pl=0,_e=[],Ne=0,It=null,Xe=1,Ge="";function _t(e,t){Jt[bt++]=pl,Jt[bt++]=dl,dl=e,pl=t}function uc(e,t,n){_e[Ne++]=Xe,_e[Ne++]=Ge,_e[Ne++]=It,It=e;var r=Xe;e=Ge;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var o=32-Ae(t)+l;if(30<o){var u=l-l%5;o=(r&(1<<u)-1).toString(32),r>>=u,l-=u,Xe=1<<32-Ae(t)+l|n<<l|r,Ge=o+e}else Xe=1<<o|n<<l|r,Ge=e}function Yu(e){e.return!==null&&(_t(e,1),uc(e,1,0))}function Xu(e){for(;e===dl;)dl=Jt[--bt],Jt[bt]=null,pl=Jt[--bt],Jt[bt]=null;for(;e===It;)It=_e[--Ne],_e[Ne]=null,Ge=_e[--Ne],_e[Ne]=null,Xe=_e[--Ne],_e[Ne]=null}var ke=null,Se=null,V=!1,Ie=null;function ic(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ps(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,Se=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Xe,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,Se=null,!0):!1;default:return!1}}function lu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ou(e){if(V){var t=Se;if(t){var n=t;if(!ps(e,t)){if(lu(e))throw Error(w(418));t=pt(n.nextSibling);var r=ke;t&&ps(e,t)?ic(r,n):(e.flags=e.flags&-4097|2,V=!1,ke=e)}}else{if(lu(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,ke=e}}}function hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ir(e){if(e!==ke)return!1;if(!V)return hs(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=Se)){if(lu(e))throw sc(),Error(w(418));for(;t;)ic(e,t),t=pt(t.nextSibling)}if(hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=ke?pt(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=Se;e;)e=pt(e.nextSibling)}function hn(){Se=ke=null,V=!1}function Gu(e){Ie===null?Ie=[e]:Ie.push(e)}var mp=tt.ReactCurrentBatchConfig;function Re(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hl=kt(null),ml=null,en=null,Zu=null;function qu(){Zu=en=ml=null}function Ju(e){var t=hl.current;$(hl),e._currentValue=t}function uu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ml=e,Zu=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(ml===null)throw Error(w(308));en=e,ml.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var zt=null;function bu(e){zt===null?zt=[e]:zt.push(e)}function ac(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,bu(t)):(n.next=l.next,l.next=n),t.interleaved=n,be(e,r)}function be(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,be(e,n)}return l=r.interleaved,l===null?(t.next=t,bu(r)):(t.next=l.next,l.next=t),r.interleaved=t,be(e,n)}function Xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}function ms(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var l=e.updateQueue;lt=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var s=i,a=s.next;s.next=null,u===null?o=a:u.next=a,u=s;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==u&&(i===null?h.firstBaseUpdate=a:i.next=a,h.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;u=0,h=a=s=null,i=o;do{var p=i.lane,v=i.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,S=i;switch(p=t,v=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){m=y.call(v,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,p=typeof y=="function"?y.call(v,m,p):y,p==null)break e;m=W({},m,p);break e;case 2:lt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[i]:p.push(i))}else v={eventTime:v,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(a=h=v,s=m):h=h.next=v,u|=p;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;p=i,i=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(1);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=a,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);At|=u,e.lanes=u,e.memoizedState=m}}function vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var fc=new aa.Component().refs;function iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),l=vt(e),o=Ze(r,l);o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,l),t!==null&&(Fe(t,e,l,r),Xr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),l=vt(e),o=Ze(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ht(e,o,l),t!==null&&(Fe(t,e,l,r),Xr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=vt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=ht(e,l,r),t!==null&&(Fe(t,e,r,n),Xr(t,e,r))}};function ys(e,t,n,r,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,u):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(l,o):!0}function dc(e,t,n){var r=!1,l=wt,o=t.contextType;return typeof o=="object"&&o!==null?o=ze(o):(l=ye(t)?Mt:ae.current,r=t.contextTypes,o=(r=r!=null)?pn(e,l):wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dl.enqueueReplaceState(t,t.state,null)}function su(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=fc,ei(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ze(o):(o=ye(t)?Mt:ae.current,l.context=pn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(iu(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Dl.enqueueReplaceState(l,l.state,null),vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var i=l.refs;i===fc&&(i=l.refs={}),u===null?delete i[o]:i[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ws(e){var t=e._init;return t(e._payload)}function pc(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=yt(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function u(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,c,d,g){return c===null||c.tag!==6?(c=wo(d,f.mode,g),c.return=f,c):(c=l(c,d),c.return=f,c)}function s(f,c,d,g){var k=d.type;return k===Kt?h(f,c,d.props.children,g,d.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&ws(k)===c.type)?(g=l(c,d.props),g.ref=Tn(f,c,d),g.return=f,g):(g=el(d.type,d.key,d.props,null,f.mode,g),g.ref=Tn(f,c,d),g.return=f,g)}function a(f,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=So(d,f.mode,g),c.return=f,c):(c=l(c,d.children||[]),c.return=f,c)}function h(f,c,d,g,k){return c===null||c.tag!==7?(c=Rt(d,f.mode,g,k),c.return=f,c):(c=l(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wo(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Pr:return d=el(c.type,c.key,c.props,null,f.mode,d),d.ref=Tn(f,null,c),d.return=f,d;case Ht:return c=So(c,f.mode,d),c.return=f,c;case rt:var g=c._init;return m(f,g(c._payload),d)}if(In(c)||_n(c))return c=Rt(c,f.mode,d,null),c.return=f,c;Dr(f,c)}return null}function p(f,c,d,g){var k=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:i(f,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return d.key===k?s(f,c,d,g):null;case Ht:return d.key===k?a(f,c,d,g):null;case rt:return k=d._init,p(f,c,k(d._payload),g)}if(In(d)||_n(d))return k!==null?null:h(f,c,d,g,null);Dr(f,d)}return null}function v(f,c,d,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,i(c,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:return f=f.get(g.key===null?d:g.key)||null,s(c,f,g,k);case Ht:return f=f.get(g.key===null?d:g.key)||null,a(c,f,g,k);case rt:var P=g._init;return v(f,c,d,P(g._payload),k)}if(In(g)||_n(g))return f=f.get(d)||null,h(c,f,g,k,null);Dr(c,g)}return null}function y(f,c,d,g){for(var k=null,P=null,C=c,N=c=0,D=null;C!==null&&N<d.length;N++){C.index>N?(D=C,C=null):D=C.sibling;var O=p(f,C,d[N],g);if(O===null){C===null&&(C=D);break}e&&C&&O.alternate===null&&t(f,C),c=o(O,c,N),P===null?k=O:P.sibling=O,P=O,C=D}if(N===d.length)return n(f,C),V&&_t(f,N),k;if(C===null){for(;N<d.length;N++)C=m(f,d[N],g),C!==null&&(c=o(C,c,N),P===null?k=C:P.sibling=C,P=C);return V&&_t(f,N),k}for(C=r(f,C);N<d.length;N++)D=v(C,f,N,d[N],g),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?N:D.key),c=o(D,c,N),P===null?k=D:P.sibling=D,P=D);return e&&C.forEach(function(ee){return t(f,ee)}),V&&_t(f,N),k}function S(f,c,d,g){var k=_n(d);if(typeof k!="function")throw Error(w(150));if(d=k.call(d),d==null)throw Error(w(151));for(var P=k=null,C=c,N=c=0,D=null,O=d.next();C!==null&&!O.done;N++,O=d.next()){C.index>N?(D=C,C=null):D=C.sibling;var ee=p(f,C,O.value,g);if(ee===null){C===null&&(C=D);break}e&&C&&ee.alternate===null&&t(f,C),c=o(ee,c,N),P===null?k=ee:P.sibling=ee,P=ee,C=D}if(O.done)return n(f,C),V&&_t(f,N),k;if(C===null){for(;!O.done;N++,O=d.next())O=m(f,O.value,g),O!==null&&(c=o(O,c,N),P===null?k=O:P.sibling=O,P=O);return V&&_t(f,N),k}for(C=r(f,C);!O.done;N++,O=d.next())O=v(C,f,N,O.value,g),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?N:O.key),c=o(O,c,N),P===null?k=O:P.sibling=O,P=O);return e&&C.forEach(function(Cn){return t(f,Cn)}),V&&_t(f,N),k}function z(f,c,d,g){if(typeof d=="object"&&d!==null&&d.type===Kt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:e:{for(var k=d.key,P=c;P!==null;){if(P.key===k){if(k=d.type,k===Kt){if(P.tag===7){n(f,P.sibling),c=l(P,d.props.children),c.return=f,f=c;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&ws(k)===P.type){n(f,P.sibling),c=l(P,d.props),c.ref=Tn(f,P,d),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}d.type===Kt?(c=Rt(d.props.children,f.mode,g,d.key),c.return=f,f=c):(g=el(d.type,d.key,d.props,null,f.mode,g),g.ref=Tn(f,c,d),g.return=f,f=g)}return u(f);case Ht:e:{for(P=d.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=l(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=So(d,f.mode,g),c.return=f,f=c}return u(f);case rt:return P=d._init,z(f,c,P(d._payload),g)}if(In(d))return y(f,c,d,g);if(_n(d))return S(f,c,d,g);Dr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,d),c.return=f,f=c):(n(f,c),c=wo(d,f.mode,g),c.return=f,f=c),u(f)):n(f,c)}return z}var mn=pc(!0),hc=pc(!1),wr={},We=kt(wr),ur=kt(wr),ir=kt(wr);function Tt(e){if(e===wr)throw Error(w(174));return e}function ti(e,t){switch(A(ir,t),A(ur,e),A(We,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uo(t,e)}$(We),A(We,t)}function vn(){$(We),$(ur),$(ir)}function mc(e){Tt(ir.current);var t=Tt(We.current),n=Uo(t,e.type);t!==n&&(A(ur,e),A(We,n))}function ni(e){ur.current===e&&($(We),$(ur))}var Q=kt(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=[];function ri(){for(var e=0;e<po.length;e++)po[e]._workInProgressVersionPrimary=null;po.length=0}var Gr=tt.ReactCurrentDispatcher,ho=tt.ReactCurrentBatchConfig,Dt=0,B=null,G=null,J=null,gl=!1,Wn=!1,sr=0,vp=0;function oe(){throw Error(w(321))}function li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function oi(e,t,n,r,l,o){if(Dt=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?Sp:kp,e=n(r,l),Wn){o=0;do{if(Wn=!1,sr=0,25<=o)throw Error(w(301));o+=1,J=G=null,t.updateQueue=null,Gr.current=xp,e=n(r,l)}while(Wn)}if(Gr.current=wl,t=G!==null&&G.next!==null,Dt=0,J=G=B=null,gl=!1,t)throw Error(w(300));return e}function ui(){var e=sr!==0;return sr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Te(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(w(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function ar(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=Te(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var i=u=null,s=null,a=o;do{var h=a.lane;if((Dt&h)===h)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var m={lane:h,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(i=s=m,u=r):s=s.next=m,B.lanes|=h,At|=h}a=a.next}while(a!==null&&a!==o);s===null?u=r:s.next=i,$e(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,B.lanes|=o,At|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vo(e){var t=Te(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);$e(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vc(){}function yc(e,t){var n=B,r=Te(),l=t(),o=!$e(r.memoizedState,l);if(o&&(r.memoizedState=l,me=!0),r=r.queue,ii(Sc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,cr(9,wc.bind(null,n,r,l,t),void 0,null),b===null)throw Error(w(349));Dt&30||gc(n,t,l)}return l}function gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wc(e,t,n,r){t.value=n,t.getSnapshot=r,kc(t)&&xc(e)}function Sc(e,t,n){return n(function(){kc(t)&&xc(e)})}function kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function xc(e){var t=be(e,1);t!==null&&Fe(t,e,1,-1)}function Ss(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,B,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ec(){return Te().memoizedState}function Zr(e,t,n,r){var l=Ve();B.flags|=e,l.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(G!==null){var u=G.memoizedState;if(o=u.destroy,r!==null&&li(r,u.deps)){l.memoizedState=cr(t,n,o,r);return}}B.flags|=e,l.memoizedState=cr(1|t,n,o,r)}function ks(e,t){return Zr(8390656,8,e,t)}function ii(e,t){return Al(2048,8,e,t)}function Cc(e,t){return Al(4,2,e,t)}function Pc(e,t){return Al(4,4,e,t)}function _c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,_c.bind(null,t,e),n)}function si(){}function Oc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return Dt&21?($e(n,t)||(n=Ra(),B.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function yp(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ho.transition;ho.transition={};try{e(!1),t()}finally{I=n,ho.transition=r}}function Tc(){return Te().memoizedState}function gp(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(e))Rc(t,n);else if(n=ac(e,t,n,r),n!==null){var l=fe();Fe(n,e,r,l),Mc(n,t,r)}}function wp(e,t,n){var r=vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Rc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,i=o(u,n);if(l.hasEagerState=!0,l.eagerState=i,$e(i,u)){var s=t.interleaved;s===null?(l.next=l,bu(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ac(e,t,l,r),n!==null&&(l=fe(),Fe(n,e,r,l),Mc(n,t,r))}}function Lc(e){var t=e.alternate;return e===B||t!==null&&t===B}function Rc(e,t){Wn=gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}var wl={readContext:ze,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Sp={readContext:ze,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,_c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gp.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:si,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=yp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Ve();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),b===null)throw Error(w(349));Dt&30||gc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,ks(Sc.bind(null,r,o,e),[e]),r.flags|=2048,cr(9,wc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=b.identifierPrefix;if(V){var n=Ge,r=Xe;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kp={readContext:ze,useCallback:Oc,useContext:ze,useEffect:ii,useImperativeHandle:Nc,useInsertionEffect:Cc,useLayoutEffect:Pc,useMemo:jc,useReducer:mo,useRef:Ec,useState:function(){return mo(ar)},useDebugValue:si,useDeferredValue:function(e){var t=Te();return zc(t,G.memoizedState,e)},useTransition:function(){var e=mo(ar)[0],t=Te().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Tc,unstable_isNewReconciler:!1},xp={readContext:ze,useCallback:Oc,useContext:ze,useEffect:ii,useImperativeHandle:Nc,useInsertionEffect:Cc,useLayoutEffect:Pc,useMemo:jc,useReducer:vo,useRef:Ec,useState:function(){return vo(ar)},useDebugValue:si,useDeferredValue:function(e){var t=Te();return G===null?t.memoizedState=e:zc(t,G.memoizedState,e)},useTransition:function(){var e=vo(ar)[0],t=Te().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Tc,unstable_isNewReconciler:!1};function yn(e,t){try{var n="",r=t;do n+=Zf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ep=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,wu=r),au(e,t)},n}function Dc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){au(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){au(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ep;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ap.bind(null,e,t,n),t.then(e,e))}function Es(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var Cp=tt.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?hc(t,null,n,r):mn(t,e.child,n,r)}function Ps(e,t,n,r,l){n=n.render;var o=t.ref;return sn(t,l),r=oi(e,t,n,r,o,l),n=ui(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(V&&n&&Yu(t),t.flags|=1,ce(e,t,r,l),t.child)}function _s(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!vi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ac(e,t,o,r,l)):(e=el(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(u,r)&&e.ref===t.ref)return et(e,t,l)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(nr(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,et(e,t,l)}return cu(e,t,n,r,l)}function Fc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(nn,we),we|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(nn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,A(nn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,A(nn,we),we|=r;return ce(e,t,l,n),t.child}function $c(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,l){var o=ye(n)?Mt:ae.current;return o=pn(t,o),sn(t,l),n=oi(e,t,n,r,o,l),r=ui(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(V&&r&&Yu(t),t.flags|=1,ce(e,t,n,l),t.child)}function Ns(e,t,n,r,l){if(ye(n)){var o=!0;fl(t)}else o=!1;if(sn(t,l),t.stateNode===null)qr(e,t),dc(t,n,r),su(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,i=t.memoizedProps;u.props=i;var s=u.context,a=n.contextType;typeof a=="object"&&a!==null?a=ze(a):(a=ye(n)?Mt:ae.current,a=pn(t,a));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function";m||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==r||s!==a)&&gs(t,u,r,a),lt=!1;var p=t.memoizedState;u.state=p,vl(t,r,u,l),s=t.memoizedState,i!==r||p!==s||ve.current||lt?(typeof h=="function"&&(iu(t,n,h,r),s=t.memoizedState),(i=lt||ys(t,n,i,r,p,s,a))?(m||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),u.props=r,u.state=s,u.context=a,r=i):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,cc(e,t),i=t.memoizedProps,a=t.type===t.elementType?i:Re(t.type,i),u.props=a,m=t.pendingProps,p=u.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=ye(n)?Mt:ae.current,s=pn(t,s));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==m||p!==s)&&gs(t,u,r,s),lt=!1,p=t.memoizedState,u.state=p,vl(t,r,u,l);var y=t.memoizedState;i!==m||p!==y||ve.current||lt?(typeof v=="function"&&(iu(t,n,v,r),y=t.memoizedState),(a=lt||ys(t,n,a,r,p,y,s)||!1)?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,y,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,y,s)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),u.props=r,u.state=y,u.context=s,r=a):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fu(e,t,n,r,o,l)}function fu(e,t,n,r,l,o){$c(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&ds(t,n,!1),et(e,t,o);r=t.stateNode,Cp.current=t;var i=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=mn(t,e.child,null,o),t.child=mn(t,null,i,o)):ce(e,t,i,o),t.memoizedState=r.state,l&&ds(t,n,!0),t.child}function Uc(e){var t=e.stateNode;t.pendingContext?fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fs(e,t.context,!1),ti(e,t.containerInfo)}function Os(e,t,n,r,l){return hn(),Gu(l),t.flags|=256,ce(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vc(e,t,n){var r=t.pendingProps,l=Q.current,o=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(Q,l&1),e===null)return ou(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=r.children,e=r.fallback,o?(r=t.mode,o=t.child,u={mode:"hidden",children:u},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=u):o=Ul(u,r,0,null),e=Rt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pu(n),t.memoizedState=du,e):ai(t,u));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return Pp(e,t,u,r,i,l,n);if(o){o=r.fallback,u=t.mode,l=e.child,i=l.sibling;var s={mode:"hidden",children:r.children};return!(u&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=yt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?o=yt(i,o):(o=Rt(o,u,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,u=e.child.memoizedState,u=u===null?pu(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,t.memoizedState=du,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ai(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Gu(r),mn(t,e.child,null,n),e=ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pp(e,t,n,r,l,o,u){if(n)return t.flags&256?(t.flags&=-257,r=yo(Error(w(422))),Ar(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),o=Rt(o,l,u,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mn(t,e.child,null,u),t.child.memoizedState=pu(u),t.memoizedState=du,o);if(!(t.mode&1))return Ar(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,o=Error(w(419)),r=yo(o,r,void 0),Ar(e,t,u,r)}if(i=(u&e.childLanes)!==0,me||i){if(r=b,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|u)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,be(e,l),Fe(r,e,l,-1))}return mi(),r=yo(Error(w(421))),Ar(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Fp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=pt(l.nextSibling),ke=t,V=!0,Ie=null,e!==null&&(_e[Ne++]=Xe,_e[Ne++]=Ge,_e[Ne++]=It,Xe=e.id,Ge=e.overflow,It=t),t=ai(t,r.children),t.flags|=4096,t)}function js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),uu(e.return,t,n)}function go(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Qc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&js(e,n,t);else if(e.tag===19)js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),go(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}go(t,!0,n,null,o);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _p(e,t,n){switch(t.tag){case 3:Uc(t),hn();break;case 5:mc(t);break;case 1:ye(t.type)&&fl(t);break;case 4:ti(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Vc(e,t,n):(A(Q,Q.current&1),e=et(e,t,n),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Fc(e,t,n)}return et(e,t,n)}var Bc,hu,Wc,Hc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hu=function(){};Wc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(We.current);var o=null;switch(n){case"input":l=Do(e,l),r=Do(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=$o(e,l),r=$o(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}Vo(n,r);var u;n=null;for(a in l)if(!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null)if(a==="style"){var i=l[a];for(u in i)i.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Gn.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var s=r[a];if(i=l!=null?l[a]:void 0,r.hasOwnProperty(a)&&s!==i&&(s!=null||i!=null))if(a==="style")if(i){for(u in i)!i.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in s)s.hasOwnProperty(u)&&i[u]!==s[u]&&(n||(n={}),n[u]=s[u])}else n||(o||(o=[]),o.push(a,n)),n=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&F("scroll",e),o||i===s||(o=[])):(o=o||[]).push(a,s))}n&&(o=o||[]).push("style",n);var a=o;(t.updateQueue=a)&&(t.flags|=4)}};Hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Np(e,t,n){var r=t.pendingProps;switch(Xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ye(t.type)&&cl(),ue(t),null;case 3:return r=t.stateNode,vn(),$(ve),$(ae),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(xu(Ie),Ie=null))),hu(e,t),ue(t),null;case 5:ni(t);var l=Tt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Wc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ue(t),null}if(e=Tt(We.current),Ir(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qe]=t,r[or]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<An.length;l++)F(An[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Fi(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Ui(r,o),F("invalid",r)}Vo(n,o),l=null;for(var u in o)if(o.hasOwnProperty(u)){var i=o[u];u==="children"?typeof i=="string"?r.textContent!==i&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,i,e),l=["children",""+i]):Gn.hasOwnProperty(u)&&i!=null&&u==="onScroll"&&F("scroll",r)}switch(n){case"input":_r(r),$i(r,o,!0);break;case"textarea":_r(r),Vi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=al)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Qe]=t,e[or]=r,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(u=Qo(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<An.length;l++)F(An[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Fi(e,r),l=Do(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":Ui(e,r),l=$o(e,r),F("invalid",e);break;default:l=r}Vo(n,l),i=l;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?ka(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&wa(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zn(e,s):typeof s=="number"&&Zn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&F("scroll",e):s!=null&&Ru(e,o,s,u))}switch(n){case"input":_r(e),$i(e,r,!1);break;case"textarea":_r(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Tt(ir.current),Tt(We.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(o=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ue(t),null;case 13:if($(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Se!==null&&t.mode&1&&!(t.flags&128))sc(),hn(),t.flags|=98560,o=!1;else if(o=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Qe]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Ie!==null&&(xu(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?Z===0&&(Z=3):mi())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return vn(),hu(e,t),e===null&&rr(t.stateNode.containerInfo),ue(t),null;case 10:return Ju(t.type._context),ue(t),null;case 17:return ye(t.type)&&cl(),ue(t),null;case 19:if($(Q),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)Ln(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=yl(e),u!==null){for(t.flags|=128,Ln(o,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>gn&&(t.flags|=128,r=!0,Ln(o,!1),t.lanes=4194304)}else{if(!r)if(e=yl(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!V)return ue(t),null}else 2*Y()-o.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(n=o.last,n!==null?n.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=Q.current,A(Q,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return hi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Op(e,t){switch(Xu(t),t.tag){case 1:return ye(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),$(ve),$(ae),ri(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ni(t),null;case 13:if($(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Q),null;case 4:return vn(),null;case 10:return Ju(t.type._context),null;case 22:case 23:return hi(),null;case 24:return null;default:return null}}var Fr=!1,ie=!1,jp=typeof WeakSet=="function"?WeakSet:Set,x=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function mu(e,t,n){try{n()}catch(r){H(e,t,r)}}var zs=!1;function zp(e,t){if(Jo=ul,e=Ga(),Ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,i=-1,s=-1,a=0,h=0,m=e,p=null;t:for(;;){for(var v;m!==n||l!==0&&m.nodeType!==3||(i=u+l),m!==o||r!==0&&m.nodeType!==3||(s=u+r),m.nodeType===3&&(u+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break t;if(p===n&&++a===l&&(i=u),p===o&&++h===r&&(s=u),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bo={focusedElem:e,selectionRange:n},ul=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,z=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Re(t.type,S),z);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return y=zs,zs=!1,y}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&mu(t,n,o)}l=l.next}while(l!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kc(e){var t=e.alternate;t!==null&&(e.alternate=null,Kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[or],delete t[nu],delete t[dp],delete t[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yc(e){return e.tag===5||e.tag===3||e.tag===4}function Ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}var ne=null,Me=!1;function nt(e,t,n){for(n=n.child;n!==null;)Xc(e,t,n),n=n.sibling}function Xc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:ie||tn(n,t);case 6:var r=ne,l=Me;ne=null,nt(e,t,n),ne=r,Me=l,ne!==null&&(Me?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Me?(e=ne,n=n.stateNode,e.nodeType===8?co(e.parentNode,n):e.nodeType===1&&co(e,n),er(e)):co(ne,n.stateNode));break;case 4:r=ne,l=Me,ne=n.stateNode.containerInfo,Me=!0,nt(e,t,n),ne=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,u=o.destroy;o=o.tag,u!==void 0&&(o&2||o&4)&&mu(n,t,u),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!ie&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){H(n,t,i)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,nt(e,t,n),ie=r):nt(e,t,n);break;default:nt(e,t,n)}}function Ls(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jp),t.forEach(function(r){var l=$p.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,u=t,i=u;e:for(;i!==null;){switch(i.tag){case 5:ne=i.stateNode,Me=!1;break e;case 3:ne=i.stateNode.containerInfo,Me=!0;break e;case 4:ne=i.stateNode.containerInfo,Me=!0;break e}i=i.return}if(ne===null)throw Error(w(160));Xc(o,u,l),ne=null,Me=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(a){H(l,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Ue(e),r&4){try{Hn(3,e,e.return),Fl(3,e)}catch(S){H(e,e.return,S)}try{Hn(5,e,e.return)}catch(S){H(e,e.return,S)}}break;case 1:Le(t,e),Ue(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Le(t,e),Ue(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var l=e.stateNode;try{Zn(l,"")}catch(S){H(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&va(l,o),Qo(i,u);var a=Qo(i,o);for(u=0;u<s.length;u+=2){var h=s[u],m=s[u+1];h==="style"?ka(l,m):h==="dangerouslySetInnerHTML"?wa(l,m):h==="children"?Zn(l,m):Ru(l,h,m,a)}switch(i){case"input":Ao(l,o);break;case"textarea":ya(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?rn(l,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?rn(l,!!o.multiple,o.defaultValue,!0):rn(l,!!o.multiple,o.multiple?[]:"",!1))}l[or]=o}catch(S){H(e,e.return,S)}}break;case 6:if(Le(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){H(e,e.return,S)}}break;case 3:if(Le(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(S){H(e,e.return,S)}break;case 4:Le(t,e),Ue(e);break;case 13:Le(t,e),Ue(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(di=Y())),r&4&&Ls(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(a=ie)||h,Le(t,e),ie=a):Le(t,e),Ue(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!h&&e.mode&1)for(x=e,h=e.child;h!==null;){for(m=x=h;x!==null;){switch(p=x,v=p.child,p.tag){case 0:case 11:case 14:case 15:Hn(4,p,p.return);break;case 1:tn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){H(r,n,S)}}break;case 5:tn(p,p.return);break;case 22:if(p.memoizedState!==null){Ms(m);continue}}v!==null?(v.return=p,x=v):Ms(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,a?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,s=m.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Sa("display",u))}catch(S){H(e,e.return,S)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(S){H(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),Ue(e),r&4&&Ls(e);break;case 21:break;default:Le(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Zn(l,""),r.flags&=-33);var o=Ts(e);gu(e,o,l);break;case 3:case 4:var u=r.stateNode.containerInfo,i=Ts(e);yu(e,i,u);break;default:throw Error(w(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,n){x=e,Zc(e)}function Zc(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||Fr;if(!u){var i=l.alternate,s=i!==null&&i.memoizedState!==null||ie;i=Fr;var a=ie;if(Fr=u,(ie=s)&&!a)for(x=l;x!==null;)u=x,s=u.child,u.tag===22&&u.memoizedState!==null?Is(l):s!==null?(s.return=u,x=s):Is(l);for(;o!==null;)x=o,Zc(o),o=o.sibling;x=l,Fr=i,ie=a}Rs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):Rs(e)}}function Rs(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vs(t,o,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vs(t,u,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var h=a.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&er(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ie||t.flags&512&&vu(t)}catch(p){H(t,t.return,p)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Ms(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function Is(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){H(t,l,s)}}var o=t.return;try{vu(t)}catch(s){H(t,o,s)}break;case 5:var u=t.return;try{vu(t)}catch(s){H(t,u,s)}}}catch(s){H(t,t.return,s)}if(t===e){x=null;break}var i=t.sibling;if(i!==null){i.return=t.return,x=i;break}x=t.return}}var Lp=Math.ceil,Sl=tt.ReactCurrentDispatcher,ci=tt.ReactCurrentOwner,je=tt.ReactCurrentBatchConfig,M=0,b=null,X=null,re=0,we=0,nn=kt(0),Z=0,fr=null,At=0,$l=0,fi=0,Kn=null,he=null,di=0,gn=1/0,Ke=null,kl=!1,wu=null,mt=null,$r=!1,at=null,xl=0,Yn=0,Su=null,Jr=-1,br=0;function fe(){return M&6?Y():Jr!==-1?Jr:Jr=Y()}function vt(e){return e.mode&1?M&2&&re!==0?re&-re:mp.transition!==null?(br===0&&(br=Ra()),br):(e=I,e!==0||(e=window.event,e=e===void 0?16:Ua(e.type)),e):1}function Fe(e,t,n,r){if(50<Yn)throw Yn=0,Su=null,Error(w(185));vr(e,n,r),(!(M&2)||e!==b)&&(e===b&&(!(M&2)&&($l|=n),Z===4&&ut(e,re)),ge(e,r),n===1&&M===0&&!(t.mode&1)&&(gn=Y()+500,Il&&xt()))}function ge(e,t){var n=e.callbackNode;md(e,t);var r=ol(e,e===b?re:0);if(r===0)n!==null&&Wi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wi(n),t===1)e.tag===0?hp(Ds.bind(null,e)):oc(Ds.bind(null,e)),cp(function(){!(M&6)&&xt()}),n=null;else{switch(Ma(r)){case 1:n=Fu;break;case 4:n=Ta;break;case 16:n=ll;break;case 536870912:n=La;break;default:n=ll}n=lf(n,qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qc(e,t){if(Jr=-1,br=0,M&6)throw Error(w(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=ol(e,e===b?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var l=M;M|=2;var o=bc();(b!==e||re!==t)&&(Ke=null,gn=Y()+500,Lt(e,t));do try{Ip();break}catch(i){Jc(e,i)}while(1);qu(),Sl.current=o,M=l,X!==null?t=0:(b=null,re=0,t=Z)}if(t!==0){if(t===2&&(l=Yo(e),l!==0&&(r=l,t=ku(e,l))),t===1)throw n=fr,Lt(e,0),ut(e,r),ge(e,Y()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!Rp(l)&&(t=El(e,r),t===2&&(o=Yo(e),o!==0&&(r=o,t=ku(e,o))),t===1))throw n=fr,Lt(e,0),ut(e,r),ge(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Nt(e,he,Ke);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=di+500-Y(),10<t)){if(ol(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=tu(Nt.bind(null,e,he,Ke),t);break}Nt(e,he,Ke);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-Ae(r);o=1<<u,u=t[u],u>l&&(l=u),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lp(r/1960))-r,10<r){e.timeoutHandle=tu(Nt.bind(null,e,he,Ke),r);break}Nt(e,he,Ke);break;case 5:Nt(e,he,Ke);break;default:throw Error(w(329))}}}return ge(e,Y()),e.callbackNode===n?qc.bind(null,e):null}function ku(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=El(e,t),e!==2&&(t=he,he=n,t!==null&&xu(t)),e}function xu(e){he===null?he=e:he.push.apply(he,e)}function Rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!$e(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~fi,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function Ds(e){if(M&6)throw Error(w(327));an();var t=ol(e,0);if(!(t&1))return ge(e,Y()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Yo(e);r!==0&&(t=r,n=ku(e,r))}if(n===1)throw n=fr,Lt(e,0),ut(e,t),ge(e,Y()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,he,Ke),ge(e,Y()),null}function pi(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(gn=Y()+500,Il&&xt())}}function Ft(e){at!==null&&at.tag===0&&!(M&6)&&an();var t=M;M|=1;var n=je.transition,r=I;try{if(je.transition=null,I=1,e)return e()}finally{I=r,je.transition=n,M=t,!(M&6)&&xt()}}function hi(){we=nn.current,$(nn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ap(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:vn(),$(ve),$(ae),ri();break;case 5:ni(r);break;case 4:vn();break;case 13:$(Q);break;case 19:$(Q);break;case 10:Ju(r.type._context);break;case 22:case 23:hi()}n=n.return}if(b=e,X=e=yt(e.current,null),re=we=t,Z=0,fr=null,fi=$l=At=0,he=Kn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var u=o.next;o.next=l,r.next=u}n.pending=r}zt=null}return e}function Jc(e,t){do{var n=X;try{if(qu(),Gr.current=wl,gl){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}gl=!1}if(Dt=0,J=G=B=null,Wn=!1,sr=0,ci.current=null,n===null||n.return===null){Z=1,fr=t,X=null;break}e:{var o=e,u=n.return,i=n,s=t;if(t=re,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,h=i,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Es(u);if(v!==null){v.flags&=-257,Cs(v,u,i,o,t),v.mode&1&&xs(o,a,t),t=v,s=a;var y=t.updateQueue;if(y===null){var S=new Set;S.add(s),t.updateQueue=S}else y.add(s);break e}else{if(!(t&1)){xs(o,a,t),mi();break e}s=Error(w(426))}}else if(V&&i.mode&1){var z=Es(u);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Cs(z,u,i,o,t),Gu(yn(s,i));break e}}o=s=yn(s,i),Z!==4&&(Z=2),Kn===null?Kn=[o]:Kn.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ic(o,s,t);ms(o,f);break e;case 1:i=s;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(mt===null||!mt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Dc(o,i,t);ms(o,g);break e}}o=o.return}while(o!==null)}tf(n)}catch(k){t=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function bc(){var e=Sl.current;return Sl.current=wl,e===null?wl:e}function mi(){(Z===0||Z===3||Z===2)&&(Z=4),b===null||!(At&268435455)&&!($l&268435455)||ut(b,re)}function El(e,t){var n=M;M|=2;var r=bc();(b!==e||re!==t)&&(Ke=null,Lt(e,t));do try{Mp();break}catch(l){Jc(e,l)}while(1);if(qu(),M=n,Sl.current=r,X!==null)throw Error(w(261));return b=null,re=0,Z}function Mp(){for(;X!==null;)ef(X)}function Ip(){for(;X!==null&&!ud();)ef(X)}function ef(e){var t=rf(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?tf(e):X=t,ci.current=null}function tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Op(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=Np(n,t,we),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function Nt(e,t,n){var r=I,l=je.transition;try{je.transition=null,I=1,Dp(e,t,n,r)}finally{je.transition=l,I=r}return null}function Dp(e,t,n,r){do an();while(at!==null);if(M&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vd(e,o),e===b&&(X=b=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$r||($r=!0,lf(ll,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var u=I;I=1;var i=M;M|=4,ci.current=null,zp(e,n),Gc(n,e),np(bo),ul=!!Jo,bo=Jo=null,e.current=n,Tp(n),id(),M=i,I=u,je.transition=o}else e.current=n;if($r&&($r=!1,at=e,xl=l),o=e.pendingLanes,o===0&&(mt=null),cd(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(kl)throw kl=!1,e=wu,wu=null,e;return xl&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===Su?Yn++:(Yn=0,Su=e):Yn=0,xt(),null}function an(){if(at!==null){var e=Ma(xl),t=je.transition,n=I;try{if(je.transition=null,I=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,xl=0,M&6)throw Error(w(331));var l=M;for(M|=4,x=e.current;x!==null;){var o=x,u=o.child;if(x.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var a=i[s];for(x=a;x!==null;){var h=x;switch(h.tag){case 0:case 11:case 15:Hn(8,h,o)}var m=h.child;if(m!==null)m.return=h,x=m;else for(;x!==null;){h=x;var p=h.sibling,v=h.return;if(Kc(h),h===a){x=null;break}if(p!==null){p.return=v,x=p;break}x=v}}}var y=o.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}x=o}}if(o.subtreeFlags&2064&&u!==null)u.return=o,x=u;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,x=f;break e}x=o.return}}var c=e.current;for(x=c;x!==null;){u=x;var d=u.child;if(u.subtreeFlags&2064&&d!==null)d.return=u,x=d;else e:for(u=c;x!==null;){if(i=x,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Fl(9,i)}}catch(k){H(i,i.return,k)}if(i===u){x=null;break e}var g=i.sibling;if(g!==null){g.return=i.return,x=g;break e}x=i.return}}if(M=l,xt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(zl,e)}catch{}r=!0}return r}finally{I=n,je.transition=t}}return!1}function As(e,t,n){t=yn(n,t),t=Ic(e,t,1),e=ht(e,t,1),t=fe(),e!==null&&(vr(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)As(e,e,n);else for(;t!==null;){if(t.tag===3){As(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=yn(n,e),e=Dc(t,e,1),t=ht(t,e,1),e=fe(),t!==null&&(vr(t,1,e),ge(t,e));break}}t=t.return}}function Ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>Y()-di?Lt(e,0):fi|=n),ge(e,t)}function nf(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=fe();e=be(e,t),e!==null&&(vr(e,t,n),ge(e,n))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nf(e,n)}function $p(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),nf(e,n)}var rf;rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,_p(e,t,n);me=!!(e.flags&131072)}else me=!1,V&&t.flags&1048576&&uc(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var l=pn(t,ae.current);sn(t,n),l=oi(null,t,r,e,l,n);var o=ui();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,fl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ei(t),l.updater=Dl,t.stateNode=l,l._reactInternals=t,su(t,r,e,n),t=fu(null,t,r,!0,o,n)):(t.tag=0,V&&o&&Yu(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Vp(r),e=Re(r,e),l){case 0:t=cu(null,t,r,e,n);break e;case 1:t=Ns(null,t,r,e,n);break e;case 11:t=Ps(null,t,r,e,n);break e;case 14:t=_s(null,t,r,Re(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),cu(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ns(e,t,r,l,n);case 3:e:{if(Uc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,cc(e,t),vl(t,r,null,n);var u=t.memoizedState;if(r=u.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=yn(Error(w(423)),t),t=Os(e,t,r,n,l);break e}else if(r!==l){l=yn(Error(w(424)),t),t=Os(e,t,r,n,l);break e}else for(Se=pt(t.stateNode.containerInfo.firstChild),ke=t,V=!0,Ie=null,n=hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===l){t=et(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return mc(t),e===null&&ou(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,u=l.children,eu(r,l)?u=null:o!==null&&eu(r,o)&&(t.flags|=32),$c(e,t),ce(e,t,u,n),t.child;case 6:return e===null&&ou(t),null;case 13:return Vc(e,t,n);case 4:return ti(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ps(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,u=l.value,A(hl,r._currentValue),r._currentValue=u,o!==null)if($e(o.value,u)){if(o.children===l.children&&!ve.current){t=et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){u=o.child;for(var s=i.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ze(-1,n&-n),s.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var h=a.pending;h===null?s.next=s:(s.next=h.next,h.next=s),a.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),uu(o.return,n,t),i.lanes|=n;break}s=s.next}}else if(o.tag===10)u=o.type===t.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(w(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),uu(u,n,t),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===t){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,sn(t,n),l=ze(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),_s(e,t,r,l,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),qr(e,t),t.tag=1,ye(r)?(e=!0,fl(t)):e=!1,sn(t,n),dc(t,r,l),su(t,r,l,n),fu(null,t,r,!0,e,n);case 19:return Qc(e,t,n);case 22:return Fc(e,t,n)}throw Error(w(156,t.tag))};function lf(e,t){return za(e,t)}function Up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Up(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vp(e){if(typeof e=="function")return vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Iu)return 11;if(e===Du)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,l,o){var u=2;if(r=e,typeof e=="function")vi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case Kt:return Rt(n.children,l,o,t);case Mu:u=8,l|=8;break;case Lo:return e=Oe(12,n,t,l|2),e.elementType=Lo,e.lanes=o,e;case Ro:return e=Oe(13,n,t,l),e.elementType=Ro,e.lanes=o,e;case Mo:return e=Oe(19,n,t,l),e.elementType=Mo,e.lanes=o,e;case pa:return Ul(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fa:u=10;break e;case da:u=9;break e;case Iu:u=11;break e;case Du:u=14;break e;case rt:u=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Oe(u,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Rt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=pa,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function yi(e,t,n,r,l,o,u,i,s){return e=new Qp(e,t,n,i,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Oe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ei(o),e}function Bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function of(e){if(!e)return wt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return lc(e,n,t)}return t}function uf(e,t,n,r,l,o,u,i,s){return e=yi(n,r,!0,e,l,o,u,i,s),e.context=of(null),n=e.current,r=fe(),l=vt(n),o=Ze(r,l),o.callback=t??null,ht(n,o,l),e.current.lanes=l,vr(e,l,r),ge(e,r),e}function Vl(e,t,n,r){var l=t.current,o=fe(),u=vt(l);return n=of(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(o,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(l,t,u),e!==null&&(Fe(e,l,u,o),Xr(e,l,u)),u}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gi(e,t){Fs(e,t),(e=e.alternate)&&Fs(e,t)}function Wp(){return null}var sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function wi(e){this._internalRoot=e}Ql.prototype.render=wi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Vl(e,t,null,null)};Ql.prototype.unmount=wi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Vl(null,e,null,null)}),t[Je]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Aa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&$a(e)}};function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $s(){}function Hp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var a=Cl(u);o.call(a)}}var u=uf(t,r,e,0,null,!1,!1,"",$s);return e._reactRootContainer=u,e[Je]=u.current,rr(e.nodeType===8?e.parentNode:e),Ft(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var a=Cl(s);i.call(a)}}var s=yi(e,0,!1,null,null,!1,!1,"",$s);return e._reactRootContainer=s,e[Je]=s.current,rr(e.nodeType===8?e.parentNode:e),Ft(function(){Vl(t,s,n,r)}),s}function Wl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var u=o;if(typeof l=="function"){var i=l;l=function(){var s=Cl(u);i.call(s)}}Vl(t,u,e,l)}else u=Hp(n,t,e,l,r);return Cl(u)}Ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&($u(t,n|1),ge(t,Y()),!(M&6)&&(gn=Y()+500,xt()))}break;case 13:Ft(function(){var r=be(e,1);if(r!==null){var l=fe();Fe(r,e,1,l)}}),gi(e,1)}};Uu=function(e){if(e.tag===13){var t=be(e,134217728);if(t!==null){var n=fe();Fe(t,e,134217728,n)}gi(e,134217728)}};Da=function(e){if(e.tag===13){var t=vt(e),n=be(e,t);if(n!==null){var r=fe();Fe(n,e,t,r)}gi(e,t)}};Aa=function(){return I};Fa=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Wo=function(e,t,n){switch(t){case"input":if(Ao(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ml(r);if(!l)throw Error(w(90));ma(r),Ao(r,l)}}}break;case"textarea":ya(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Ca=pi;Pa=Ft;var Kp={usingClientEntryPoint:!1,Events:[gr,Zt,Ml,xa,Ea,pi]},Rn={findFiberByHostInstance:jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yp={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oa(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{zl=Ur.inject(Yp),Be=Ur}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kp;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Si(t))throw Error(w(200));return Bp(e,t,null,n)};Ce.createRoot=function(e,t){if(!Si(e))throw Error(w(299));var n=!1,r="",l=sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=yi(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,rr(e.nodeType===8?e.parentNode:e),new wi(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Oa(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ft(e)};Ce.hydrate=function(e,t,n){if(!Bl(t))throw Error(w(200));return Wl(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Si(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",u=sf;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=uf(t,null,e,1,n??null,l,!1,o,u),e[Je]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ql(t)};Ce.render=function(e,t,n){if(!Bl(t))throw Error(w(200));return Wl(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(w(40));return e._reactRootContainer?(Ft(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Ce.unstable_batchedUpdates=pi;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Wl(e,t,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ce})(Wf);var Us=jo;Oo.createRoot=Us.createRoot,Oo.hydrateRoot=Us.hydrateRoot;function De(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(l){return"'"+l+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function $t(e){return!!e&&!!e[U]}function Ut(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var l=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return l===Object||typeof l=="function"&&Function.toString.call(l)===nh}(e)||Array.isArray(e)||!!e[Ys]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ys])||ki(e)||xi(e))}function Vt(e,t,n){n===void 0&&(n=!1),xn(e)===0?(n?Object.keys:fn)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,l){return t(l,r,e)})}function xn(e){var t=e[U];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ki(e)?2:xi(e)?3:0}function cn(e,t){return xn(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Xp(e,t){return xn(e)===2?e.get(t):e[t]}function af(e,t,n){var r=xn(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function cf(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ki(e){return eh&&e instanceof Map}function xi(e){return th&&e instanceof Set}function Ot(e){return e.o||e.t}function Ei(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=df(e);delete t[U];for(var n=fn(t),r=0;r<n.length;r++){var l=n[r],o=t[l];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[l]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[l]})}return Object.create(Object.getPrototypeOf(e),t)}function Ci(e,t){return t===void 0&&(t=!1),Pi(e)||$t(e)||!Ut(e)||(xn(e)>1&&(e.set=e.add=e.clear=e.delete=Gp),Object.freeze(e),t&&Vt(e,function(n,r){return Ci(r,!0)},!0)),e}function Gp(){De(2)}function Pi(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function He(e){var t=_u[e];return t||De(18,e),t}function Zp(e,t){_u[e]||(_u[e]=t)}function Eu(){return dr}function ko(e,t){t&&(He("Patches"),e.u=[],e.s=[],e.v=t)}function Pl(e){Cu(e),e.p.forEach(qp),e.p=null}function Cu(e){e===dr&&(dr=e.l)}function Vs(e){return dr={p:[],l:dr,h:e,m:!0,_:0}}function qp(e){var t=e[U];t.i===0||t.i===1?t.j():t.g=!0}function xo(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||He("ES5").S(t,e,r),r?(n[U].P&&(Pl(t),De(4)),Ut(e)&&(e=_l(t,e),t.l||Nl(t,e)),t.u&&He("Patches").M(n[U].t,e,t.u,t.s)):e=_l(t,n,[]),Pl(t),t.u&&t.v(t.u,t.s),e!==ff?e:void 0}function _l(e,t,n){if(Pi(t))return t;var r=t[U];if(!r)return Vt(t,function(i,s){return Qs(e,r,t,i,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Nl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var l=r.i===4||r.i===5?r.o=Ei(r.k):r.o,o=l,u=!1;r.i===3&&(o=new Set(l),l.clear(),u=!0),Vt(o,function(i,s){return Qs(e,r,l,i,s,n,u)}),Nl(e,l,!1),n&&e.u&&He("Patches").N(r,n,e.u,e.s)}return r.o}function Qs(e,t,n,r,l,o,u){if($t(l)){var i=_l(e,l,o&&t&&t.i!==3&&!cn(t.R,r)?o.concat(r):void 0);if(af(n,r,i),!$t(i))return;e.m=!1}else u&&n.add(l);if(Ut(l)&&!Pi(l)){if(!e.h.D&&e._<1)return;_l(e,l),t&&t.A.l||Nl(e,l)}}function Nl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Ci(t,n)}function Eo(e,t){var n=e[U];return(n?Ot(n):e)[t]}function Bs(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function it(e){e.P||(e.P=!0,e.l&&it(e.l))}function Co(e){e.o||(e.o=Ei(e.t))}function Pu(e,t,n){var r=ki(t)?He("MapSet").F(t,n):xi(t)?He("MapSet").T(t,n):e.O?function(l,o){var u=Array.isArray(l),i={i:u?1:0,A:o?o.A:Eu(),P:!1,I:!1,R:{},l:o,t:l,k:null,o:null,j:null,C:!1},s=i,a=pr;u&&(s=[i],a=Fn);var h=Proxy.revocable(s,a),m=h.revoke,p=h.proxy;return i.k=p,i.j=m,p}(t,n):He("ES5").J(t,n);return(n?n.A:Eu()).p.push(r),r}function Jp(e){return $t(e)||De(22,e),function t(n){if(!Ut(n))return n;var r,l=n[U],o=xn(n);if(l){if(!l.P&&(l.i<4||!He("ES5").K(l)))return l.t;l.I=!0,r=Ws(n,o),l.I=!1}else r=Ws(n,o);return Vt(r,function(u,i){l&&Xp(l.t,u)===i||af(r,u,t(i))}),o===3?new Set(r):r}(e)}function Ws(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ei(e)}function bp(){function e(o,u){var i=l[o];return i?i.enumerable=u:l[o]=i={configurable:!0,enumerable:u,get:function(){var s=this[U];return pr.get(s,o)},set:function(s){var a=this[U];pr.set(a,o,s)}},i}function t(o){for(var u=o.length-1;u>=0;u--){var i=o[u][U];if(!i.P)switch(i.i){case 5:r(i)&&it(i);break;case 4:n(i)&&it(i)}}}function n(o){for(var u=o.t,i=o.k,s=fn(i),a=s.length-1;a>=0;a--){var h=s[a];if(h!==U){var m=u[h];if(m===void 0&&!cn(u,h))return!0;var p=i[h],v=p&&p[U];if(v?v.t!==m:!cf(p,m))return!0}}var y=!!u[U];return s.length!==fn(u).length+(y?0:1)}function r(o){var u=o.k;if(u.length!==o.t.length)return!0;var i=Object.getOwnPropertyDescriptor(u,u.length-1);if(i&&!i.get)return!0;for(var s=0;s<u.length;s++)if(!u.hasOwnProperty(s))return!0;return!1}var l={};Zp("ES5",{J:function(o,u){var i=Array.isArray(o),s=function(h,m){if(h){for(var p=Array(m.length),v=0;v<m.length;v++)Object.defineProperty(p,""+v,e(v,!0));return p}var y=df(m);delete y[U];for(var S=fn(y),z=0;z<S.length;z++){var f=S[z];y[f]=e(f,h||!!y[f].enumerable)}return Object.create(Object.getPrototypeOf(m),y)}(i,o),a={i:i?5:4,A:u?u.A:Eu(),P:!1,I:!1,R:{},l:u,t:o,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,U,{value:a,writable:!0}),s},S:function(o,u,i){i?$t(u)&&u[U].A===o&&t(o.p):(o.u&&function s(a){if(a&&typeof a=="object"){var h=a[U];if(h){var m=h.t,p=h.k,v=h.R,y=h.i;if(y===4)Vt(p,function(d){d!==U&&(m[d]!==void 0||cn(m,d)?v[d]||s(p[d]):(v[d]=!0,it(h)))}),Vt(m,function(d){p[d]!==void 0||cn(p,d)||(v[d]=!1,it(h))});else if(y===5){if(r(h)&&(it(h),v.length=!0),p.length<m.length)for(var S=p.length;S<m.length;S++)v[S]=!1;else for(var z=m.length;z<p.length;z++)v[z]=!0;for(var f=Math.min(p.length,m.length),c=0;c<f;c++)p.hasOwnProperty(c)||(v[c]=!0),v[c]===void 0&&s(p[c])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Hs,dr,_i=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",eh=typeof Map<"u",th=typeof Set<"u",Ks=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",ff=_i?Symbol.for("immer-nothing"):((Hs={})["immer-nothing"]=!0,Hs),Ys=_i?Symbol.for("immer-draftable"):"__$immer_draftable",U=_i?Symbol.for("immer-state"):"__$immer_state",nh=""+Object.prototype.constructor,fn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,df=Object.getOwnPropertyDescriptors||function(e){var t={};return fn(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},_u={},pr={get:function(e,t){if(t===U)return e;var n=Ot(e);if(!cn(n,t))return function(l,o,u){var i,s=Bs(o,u);return s?"value"in s?s.value:(i=s.get)===null||i===void 0?void 0:i.call(l.k):void 0}(e,n,t);var r=n[t];return e.I||!Ut(r)?r:r===Eo(e.t,t)?(Co(e),e.o[t]=Pu(e.A.h,r,e)):r},has:function(e,t){return t in Ot(e)},ownKeys:function(e){return Reflect.ownKeys(Ot(e))},set:function(e,t,n){var r=Bs(Ot(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var l=Eo(Ot(e),t),o=l==null?void 0:l[U];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(cf(n,l)&&(n!==void 0||cn(e.t,t)))return!0;Co(e),it(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Eo(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Co(e),it(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Ot(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){De(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){De(12)}},Fn={};Vt(pr,function(e,t){Fn[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Fn.deleteProperty=function(e,t){return Fn.set.call(this,e,t,void 0)},Fn.set=function(e,t,n){return pr.set.call(this,e[0],t,n,e[0])};var rh=function(){function e(n){var r=this;this.O=Ks,this.D=!0,this.produce=function(l,o,u){if(typeof l=="function"&&typeof o!="function"){var i=o;o=l;var s=r;return function(S){var z=this;S===void 0&&(S=i);for(var f=arguments.length,c=Array(f>1?f-1:0),d=1;d<f;d++)c[d-1]=arguments[d];return s.produce(S,function(g){var k;return(k=o).call.apply(k,[z,g].concat(c))})}}var a;if(typeof o!="function"&&De(6),u!==void 0&&typeof u!="function"&&De(7),Ut(l)){var h=Vs(r),m=Pu(r,l,void 0),p=!0;try{a=o(m),p=!1}finally{p?Pl(h):Cu(h)}return typeof Promise<"u"&&a instanceof Promise?a.then(function(S){return ko(h,u),xo(S,h)},function(S){throw Pl(h),S}):(ko(h,u),xo(a,h))}if(!l||typeof l!="object"){if((a=o(l))===void 0&&(a=l),a===ff&&(a=void 0),r.D&&Ci(a,!0),u){var v=[],y=[];He("Patches").M(l,a,v,y),u(v,y)}return a}De(21,l)},this.produceWithPatches=function(l,o){if(typeof l=="function")return function(a){for(var h=arguments.length,m=Array(h>1?h-1:0),p=1;p<h;p++)m[p-1]=arguments[p];return r.produceWithPatches(a,function(v){return l.apply(void 0,[v].concat(m))})};var u,i,s=r.produce(l,o,function(a,h){u=a,i=h});return typeof Promise<"u"&&s instanceof Promise?s.then(function(a){return[a,u,i]}):[s,u,i]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Ut(n)||De(8),$t(n)&&(n=Jp(n));var r=Vs(this),l=Pu(this,n,void 0);return l[U].C=!0,Cu(r),l},t.finishDraft=function(n,r){var l=n&&n[U],o=l.A;return ko(o,r),xo(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Ks&&De(20),this.O=n},t.applyPatches=function(n,r){var l;for(l=r.length-1;l>=0;l--){var o=r[l];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}l>-1&&(r=r.slice(l+1));var u=He("Patches").$;return $t(n)?u(n,r):this.produce(n,function(i){return u(i,r)})},e}(),Ee=new rh;Ee.produce;Ee.produceWithPatches.bind(Ee);Ee.setAutoFreeze.bind(Ee);Ee.setUseProxies.bind(Ee);Ee.applyPatches.bind(Ee);Ee.createDraft.bind(Ee);Ee.finishDraft.bind(Ee);var pf=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,l){r.__proto__=l}||function(r,l){for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),lh=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,l,o,u;return u={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function i(a){return function(h){return s([a,h])}}function s(a){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,l&&(o=a[0]&2?l.return:a[0]?l.throw||((o=l.return)&&o.call(l),0):l.next)&&!(o=o.call(l,a[1])).done)return o;switch(l=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,l=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1],o=a;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(a);break}o[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(h){a=[6,h],l=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},Ol=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,l=e.length;n<r;n++,l++)e[l]=t[n];return e},oh=Object.defineProperty,uh=Object.defineProperties,ih=Object.getOwnPropertyDescriptors,Xs=Object.getOwnPropertySymbols,sh=Object.prototype.hasOwnProperty,ah=Object.prototype.propertyIsEnumerable,Gs=function(e,t,n){return t in e?oh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Xn=function(e,t){for(var n in t||(t={}))sh.call(t,n)&&Gs(e,n,t[n]);if(Xs)for(var r=0,l=Xs(t);r<l.length;r++){var n=l[r];ah.call(t,n)&&Gs(e,n,t[n])}return e},Po=function(e,t){return uh(e,ih(t))},ch=function(e,t,n){return new Promise(function(r,l){var o=function(s){try{i(n.next(s))}catch(a){l(a)}},u=function(s){try{i(n.throw(s))}catch(a){l(a)}},i=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(o,u)};i((n=n.apply(e,t)).next())})};(function(e){pf(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var l=e.apply(this,n)||this;return Object.setPrototypeOf(l,t.prototype),l}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ol([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ol([void 0],n.concat(this))))},t})(Array);(function(e){pf(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var l=e.apply(this,n)||this;return Object.setPrototypeOf(l,t.prototype),l}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ol([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ol([void 0],n.concat(this))))},t})(Array);function se(e,t){function n(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Xn(Xn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var fh="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",dh=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=fh[Math.random()*64|0];return t},ph=["name","message","stack","code"],_o=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Zs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),hh=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=ph;n<r.length;n++){var l=r[n];typeof e[l]=="string"&&(t[l]=e[l])}return t}return{message:String(e)}};(function(){function e(t,n,r){var l=se(t+"/fulfilled",function(a,h,m,p){return{payload:a,meta:Po(Xn({},p||{}),{arg:m,requestId:h,requestStatus:"fulfilled"})}}),o=se(t+"/pending",function(a,h,m){return{payload:void 0,meta:Po(Xn({},m||{}),{arg:h,requestId:a,requestStatus:"pending"})}}),u=se(t+"/rejected",function(a,h,m,p,v){return{payload:p,error:(r&&r.serializeError||hh)(a||"Rejected"),meta:Po(Xn({},v||{}),{arg:m,requestId:h,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"})}}),i=typeof AbortController<"u"?AbortController:function(){function a(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return a.prototype.abort=function(){},a}();function s(a){return function(h,m,p){var v=r!=null&&r.idGenerator?r.idGenerator(a):dh(),y=new i,S;function z(c){S=c,y.abort()}var f=function(){return ch(this,null,function(){var c,d,g,k,P,C,N;return lh(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),k=(c=r==null?void 0:r.condition)==null?void 0:c.call(r,a,{getState:m,extra:p}),vh(k)?[4,k]:[3,2];case 1:k=D.sent(),D.label=2;case 2:if(k===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(O,ee){return y.signal.addEventListener("abort",function(){return ee({name:"AbortError",message:S||"Aborted"})})}),h(o(v,a,(d=r==null?void 0:r.getPendingMeta)==null?void 0:d.call(r,{requestId:v,arg:a},{getState:m,extra:p}))),[4,Promise.race([P,Promise.resolve(n(a,{dispatch:h,getState:m,extra:p,requestId:v,signal:y.signal,abort:z,rejectWithValue:function(O,ee){return new _o(O,ee)},fulfillWithValue:function(O,ee){return new Zs(O,ee)}})).then(function(O){if(O instanceof _o)throw O;return O instanceof Zs?l(O.payload,v,a,O.meta):l(O,v,a)})])];case 3:return g=D.sent(),[3,5];case 4:return C=D.sent(),g=C instanceof _o?u(null,v,a,C.payload,C.meta):u(C,v,a),[3,5];case 5:return N=r&&!r.dispatchConditionRejection&&u.match(g)&&g.meta.condition,N||h(g),[2,g]}})})}();return Object.assign(f,{abort:z,requestId:v,arg:a,unwrap:function(){return f.then(mh)}})}}return Object.assign(s,{pending:o,rejected:u,fulfilled:l,typePrefix:t})}return e.withTypes=function(){return e},e})();function mh(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function vh(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Ni="listenerMiddleware";se(Ni+"/add");se(Ni+"/removeAll");se(Ni+"/remove");var qs;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);bp();const yh=se("questions/add",e=>({payload:{question:e}})),gh=se("questions/remove",e=>({payload:{questionId:e}})),wh=se("questions/update",(e,t)=>({payload:{questionId:e,...t}})),Oi=se("questions/set",(e,t)=>({payload:{questions:e,shuffle:t}})),hf=se("questions/shuffle",(e,t)=>({payload:{questions:e,shuffle:t}})),mf=se("questions/answers/selectOne",(e,t)=>({payload:{questionId:e,answerId:t}})),Sh=se("questions/answers/unselectOne",e=>({payload:{questionId:e}})),vf=se("questions/answers/unselectAll"),kh=se("questions/answers/shuffleOne",(e,t,n)=>({payload:{questionId:e,question:t,shuffle:n}}));se("questions/answers/shuffleAll",(e,t)=>({payload:{questions:e,shuffle:t}}));const xh=(e,t)=>{if(t.type===yh.type)return[...e,t.payload.question];if(t.type===gh.type)return e.filter(n=>n.id!==t.payload.questionId);if(t.type===wh.type)return e.map(n=>n.id===t.payload.questionId?{...n,...t.payload}:n);if(t.type===Oi.type){const{shuffle:n,questions:r}=t.payload;return n?[...r].sort(()=>Math.random()-.5):[...r]}if(t.type===hf.type){const{shuffle:n,questions:r}=t.payload;if(!n){const l=e.reduce((o,u)=>({...o,[u.id]:u.answers}),{});return r.map(o=>({...o,answers:l[o.id]}))}return[...e].sort(()=>Math.random()-.5)}if(t.type===mf.type)return e.map(n=>n.id===t.payload.questionId?{...n,correct:n.answers.some(r=>r.correct&&r.id===t.payload.answerId),selectedId:t.payload.answerId,answers:n.answers.map((r,l)=>({...r,selected:r.id===t.payload.answerId}))}:n);if(t.type===Sh.type)return e.map(n=>{var r;return n.id===((r=t==null?void 0:t.payload)==null?void 0:r.questionId)?{...n,answers:n.answers.map((l,o)=>({...l,selected:!1}))}:n});if(t.type===vf.type)return e.map(n=>({...n,selectedId:void 0,correct:void 0,answers:n.answers.map(r=>({...r,selected:!1}))}));if(t.type===kh.type){let{questionId:n,question:r,shuffle:l}=t.payload;return l?e.map(o=>{if(o.id===n){const u=[...o.answers];for(let i=u.length-1;i>0;i--){const s=Math.floor(Math.random()*(i+1));[u[i],u[s]]=[u[s],u[i]]}return{...o,answers:u}}return o}):e.map(o=>o.id===n?r:o)}return[]},yf={subject:"",questions:[],unbluredQuestion:"",sidebarOn:!1,testModeOn:!1,correctAnswers:!1,shuffleQuestions:!1,shuffleAnswers:!1,blurAnswers:!1};let Vr;const Eh=new Uint8Array(16);function Ch(){if(!Vr&&(Vr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Vr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Vr(Eh)}const te=[];for(let e=0;e<256;++e)te.push((e+256).toString(16).slice(1));function Ph(e,t=0){return(te[e[t+0]]+te[e[t+1]]+te[e[t+2]]+te[e[t+3]]+"-"+te[e[t+4]]+te[e[t+5]]+"-"+te[e[t+6]]+te[e[t+7]]+"-"+te[e[t+8]]+te[e[t+9]]+"-"+te[e[t+10]]+te[e[t+11]]+te[e[t+12]]+te[e[t+13]]+te[e[t+14]]+te[e[t+15]]).toLowerCase()}const _h=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Js={randomUUID:_h};function hr(e,t,n){if(Js.randomUUID&&!t&&!e)return Js.randomUUID();e=e||{};const r=e.random||(e.rng||Ch)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let l=0;l<16;++l)t[n+l]=r[l];return t}return Ph(r)}function gf(e,t,n){return{id:e||hr(),questionText:t??"error extracting questions",answers:n,get correctAnswers(){return this.answers.filter(r=>r.correct&&r.selected).length}}}const Nh=`
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

`,Oh=[1,1,2,1,1,2,2,3,2,2,1,3,2,3,4,4,1,3,2,2,3,3,4,4,2,3,2,3,2,1,1,1,1,1,1,2,3,2,3,3,3,3,2,2,2,2,1,3,2,1,1,3,1,1,2,3,1,2,2,1,3,1,1,2,1,1,2,1,1,3],jh=Nh.split("#").map((e,t)=>{let n=e.trim().split(`
`).filter(o=>o.trim().length>0),r=n.shift();const l=n.map((o,u)=>({id:hr(),text:o,correct:u+1===Oh[t]}));return gf(hr(),r??"error extracting questions",l)}),zh=`

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
`,No=[2,3,1,2,2,2,2,1,1,2,3,3,2,2,1,3,1,2,1,4,2,3,2,2,4,2,3,4,3,1,3,4,1,2,2,3,1,2,3,1,2,3,4,4,3,4,4,1,2,2,2,4,1,2,3,4,1,3,1,3,2,4,1,3,2,4,1,1,2,1,4,3,2,1,3,2,3,1,4,1,2,3,3,2,1,2,2,3,1,2,4,1,3,1,3,3,1,3,3,4],Th=zh.split("#").map((e,t)=>{let n=e.trim().split(`
`).filter(o=>o.trim().length>0),r=n.shift();n.length>4&&console.log(t+1,No[t],`{question: "${e}", answer: ${No[t]}},`);const l=n.reverse().map((o,u)=>({id:hr(),text:o,correct:u+1===No[t]}));return gf(hr(),r??"error extracting questions",l)}),wf={"تجارة دولية 1":jh,"تجارة دولية 2":Th},Lh=()=>{},ji=L.createContext(wf),zi=L.createContext([]),Sr=L.createContext(()=>{}),En=L.createContext(yf),kr=L.createContext(Lh),Rh=({children:e})=>{const[t,n]=L.useState(yf),[r,l]=L.useReducer(xh,[]);return _.jsx(kr.Provider,{value:n,children:_.jsx(Sr.Provider,{value:l,children:_.jsx(ji.Provider,{value:wf,children:_.jsx(En.Provider,{value:t,children:_.jsx(zi.Provider,{value:r,children:e})})})})})},Mh="/assets/burger-17a20998.svg";function Ih(){const e=L.useContext(En),t=L.useContext(kr);function n(){t({...e,sidebarOn:!e.sidebarOn})}return _.jsxs("div",{className:"burger-btn sticky z-10 top-0 min-h-[50px] px-4 flex items-center justify-between bg-green-700 ",children:[_.jsx("div",{className:"topbar__left",children:_.jsx("img",{className:"cursor-pointer",onClick:n,src:Mh,alt:"Menu"})}),_.jsx("div",{className:"text-slate-200 text-xl",children:e.subject}),_.jsx("div",{className:""})]})}function Dh(){const e=L.useContext(En),t=L.useContext(zi),n=L.useContext(Sr),r=e.testModeOn&&e.correctAnswers,l=L.useMemo(()=>(console.log("calculating ..."),t.reduce((o,u)=>o+(u.correct?1:0),0)),[t]);return _.jsxs("div",{className:`bottombar ${r?"":"none"}`,children:[_.jsxs("div",{className:"score",children:[_.jsx("span",{className:"score__label",children:"Score: "}),_.jsxs("span",{className:"score__value",children:[l,"/",t.length]})]}),_.jsx("div",{className:"actions",children:_.jsx("button",{className:"",onClick:()=>n(vf()),children:"مسح الإجابات"})})]})}const Pt={};function Ah(e,t,n=!0,r=100){L.useDebugValue(Pt);const[l,o]=L.useState(!1),u=s=>{var a;return(Pt[e]={...Pt[e],captured:s??((a=Pt[e])==null?void 0:a.captured)??!1}).captured};return l||u()||(t&&!n&&t(),!Pt[e].skip&&(t&&n&&t(),o(()=>u(!0)),setTimeout(()=>o(!1),r))),!l&&u()&&u(!1),[l,()=>e in Pt?Pt[e].skip=!0:!1]}const bs=(e=35)=>("vibrate"in navigator&&navigator.vibrate(e),!0);function Fh({question:e,index:t}){const n=L.useId(),r=L.useContext(Sr),l=L.useContext(kr),o=L.useContext(En),u=y=>{l({...o,unbluredQuestion:y})},i=y=>{if(!o.testModeOn)return console.log("testMode is off");if(o.correctAnswers&&e.selectedId)return bs(60);r(mf(e.id,y)),bs()},[s]=Ah(n,()=>"",!0,300),a="bg-amber-700",h="bg-green-700",m="bg-red-700",p="bg-slate-800";function v(y){return o.testModeOn?o.correctAnswers?e.selectedId?y.selected?y.correct?h:m:y.correct?h:p:p:y.selected?a:p:y.correct?h:p}return _.jsxs("div",{className:"quest-container",children:[_.jsxs("h2",{className:`quest-text ${s&&"bg-slate-700"||"text-xl"}`,children:[_.jsx("span",{className:"quest-span",children:t}),e.questionText]}),_.jsx("br",{}),_.jsxs("div",{className:"quest-answers",children:[o.unbluredQuestion!==e.id&&o.blurAnswers&&!o.testModeOn&&_.jsx("div",{className:"blur",onDoubleClick:()=>u(e.id)}),e.answers.map((y,S)=>_.jsxs("div",{className:`quest-answer ${v(y)}`,children:[_.jsx("input",{type:"radio",onClick:z=>i(y.id),name:"answer",id:`answer${n}${S}`,className:"hidden"}),_.jsx("label",{htmlFor:`answer${n}${S}`,className:"quest-answerlable p-2",children:y.text})]},y.id))]})]})}const $h=L.memo(Fh);function Uh(){const e=L.useContext(zi),t=L.useContext(En),n=L.useContext(kr),r=L.useContext(ji),l=L.useContext(Sr),o=t.testModeOn&&t.correctAnswers?"raise":"",u=t.sidebarOn?"none":"",i=L.useRef(null);return L.useEffect(()=>{if(!e.length){let s="تجارة دولية 1";n({...t,sidebarOn:!1,subject:s,questions:r[s]}),l(Oi(r[s],t.shuffleQuestions))}},[]),_.jsxs("div",{ref:i,className:"p-4 flex-1 overflow-y-auto",children:[e==null?void 0:e.map((s,a)=>_.jsxs("div",{children:[_.jsx($h,{question:s,index:a+1}),_.jsx("br",{})]},s.id)),_.jsx("div",{className:`scroll-top ${o} ${u}`,onClick:()=>{var s;return(s=i.current)==null?void 0:s.scrollTo({top:0,behavior:"smooth"})}})]})}function Vh({defaultValue:e=!1,enabled:t=!0,onChange:n,...r}){const l=L.useId(),o=u=>{var i;return n?n(((i=u.target)==null?void 0:i.checked)||!1):null};return _.jsxs("label",{style:{},htmlFor:l,className:`toggle-switch ${t?"":"disabled"}`,children:[_.jsx("input",{...r,type:"checkbox",onChange:o,id:l,disabled:!t,defaultChecked:e}),_.jsx("span",{className:"slider"})]})}function Qh(){const e=L.useContext(En),t=L.useContext(kr),n=L.useContext(ji),r=L.useContext(Sr),{sidebarOn:l}=e,o=(u,i)=>{switch(u){case"selectedSubject":return t({...e,sidebarOn:!1,subject:i,questions:n[i]}),r(Oi(n[i],e.shuffleQuestions));case"testModeOn":return t({...e,testModeOn:i});case"correctAnswers":return t({...e,correctAnswers:i});case"blurAnswers":return t({...e,blurAnswers:i});case"shuffleQuestions":return t({...e,shuffleQuestions:i}),r(hf([...n[e.subject]],i));case"shuffleAnswers":return t({...e,shuffleAnswers:i});default:return}};return _.jsxs("div",{className:"absolutez",children:[_.jsxs("nav",{onClick:u=>u.stopPropagation(),className:`${l?"":"off"} sidebar`,children:[_.jsx("h2",{className:"item",children:"البنك"}),_.jsxs("div",{className:"subjects",children:[_.jsx("div",{className:"sep"}),Object.keys(n).map(u=>_.jsx("div",{className:`item ${e.subject===u?"active":""}`,onClick:()=>o("selectedSubject",u),children:u},u))]}),_.jsxs("div",{className:"settings",children:["— الاعدادات",_.jsx("div",{className:"sep"}),_.jsx(Qr,{title:"وضع الإختبار",defaultValue:e.testModeOn,action:u=>o("testModeOn",u)}),_.jsx(Qr,{title:"تصحيح الإجابات",enabled:e.testModeOn,defaultValue:e.correctAnswers,action:u=>o("correctAnswers",u)}),_.jsx("br",{}),_.jsx(Qr,{title:"تغشية الإجابات",enabled:!e.testModeOn,defaultValue:e.blurAnswers,action:u=>o("blurAnswers",u)}),_.jsx(Qr,{title:"مزج الأسئلة",defaultValue:e.shuffleQuestions,action:u=>o("shuffleQuestions",u)})]}),_.jsxs("div",{className:"credits",children:["— الحقوق",_.jsx("div",{className:"sep"}),_.jsx("div",{className:"item",children:"motifyee@gmail.com"})]})]}),_.jsx("div",{onPointerMove:u=>u.stopPropagation(),onPointerDownCapture:u=>u.stopPropagation(),onPointerDown:u=>u.stopPropagation(),onClick:()=>t({...e,sidebarOn:!1}),className:`${l?"":"off"} sidebar-overlay`})]})}function Qr({title:e,defaultValue:t,action:n,enabled:r=!0}){return _.jsxs("div",{className:"flex justify-between items-center item",children:[_.jsx("div",{className:`${r?"text-gray-200":"text-red-600 line-through"}`,children:e}),_.jsx(Vh,{defaultValue:t,enabled:r,onChange:n})]})}const Bh=document.getElementById("root");Oo.createRoot(Bh).render(_.jsxs(Rh,{children:[_.jsx(Ih,{}),_.jsx(Qh,{}),_.jsx(Uh,{}),_.jsx(Dh,{})]}));
