(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var T={},ry={get exports(){return T},set exports(e){T=e}},To={},A={},iy={get exports(){return A},set exports(e){A=e}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),oy=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),fy=Symbol.for("react.suspense"),py=Symbol.for("react.memo"),my=Symbol.for("react.lazy"),gu=Symbol.iterator;function yy(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ed=Object.assign,td={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=td,this.updater=n||Jc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nd(){}nd.prototype=Kn.prototype;function Ka(e,t,n){this.props=e,this.context=t,this.refs=td,this.updater=n||Jc}var Wa=Ka.prototype=new nd;Wa.constructor=Ka;ed(Wa,Kn.prototype);Wa.isPureReactComponent=!0;var vu=Array.isArray,rd=Object.prototype.hasOwnProperty,Qa={current:null},id={key:!0,ref:!0,__self:!0,__source:!0};function od(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rd.call(t,r)&&!id.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yr,type:e,key:o,ref:s,props:i,_owner:Qa.current}}function hy(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function gy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wu=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gy(""+e.key):t.toString(36)}function Ri(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yr:case oy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xo(s,0):r,vu(i)?(n="",e!=null&&(n=e.replace(wu,"$&/")+"/"),Ri(i,t,n,"",function(u){return u})):i!=null&&(Ga(i)&&(i=hy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",vu(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Xo(o,a);s+=Ri(o,t,n,l,i)}else if(l=yy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Xo(o,a++),s+=Ri(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,n){if(e==null)return e;var r=[],i=0;return Ri(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},_i={transition:null},wy={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Qa};M.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Kn;M.Fragment=sy;M.Profiler=ly;M.PureComponent=Ka;M.StrictMode=ay;M.Suspense=fy;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ed({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)rd.call(t,l)&&!id.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yr,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:cy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uy,_context:e},e.Consumer=e};M.createElement=od;M.createFactory=function(e){var t=od.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:dy,render:e}};M.isValidElement=Ga;M.lazy=function(e){return{$$typeof:my,_payload:{_status:-1,_result:e},_init:vy}};M.memo=function(e,t){return{$$typeof:py,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return he.current.useCallback(e,t)};M.useContext=function(e){return he.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return he.current.useDeferredValue(e)};M.useEffect=function(e,t){return he.current.useEffect(e,t)};M.useId=function(){return he.current.useId()};M.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return he.current.useMemo(e,t)};M.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};M.useRef=function(e){return he.current.useRef(e)};M.useState=function(e){return he.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return he.current.useTransition()};M.version="18.2.0";(function(e){e.exports=M})(iy);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=A,Sy=Symbol.for("react.element"),Ny=Symbol.for("react.fragment"),Py=Object.prototype.hasOwnProperty,Ey=xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cy={key:!0,ref:!0,__self:!0,__source:!0};function sd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Py.call(t,r)&&!Cy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sy,type:e,key:o,ref:s,props:i,_owner:Ey.current}}To.Fragment=Ny;To.jsx=sd;To.jsxs=sd;(function(e){e.exports=To})(ry);var bs={},Is={},Ty={get exports(){return Is},set exports(e){Is=e}},Ae={},Ds={},ky={get exports(){return Ds},set exports(e){Ds=e}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,R){var _=k.length;k.push(R);e:for(;0<_;){var W=_-1>>>1,ee=k[W];if(0<i(ee,R))k[W]=R,k[_]=ee,_=W;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var R=k[0],_=k.pop();if(_!==R){k[0]=_;e:for(var W=0,ee=k.length,ii=ee>>>1;W<ii;){var Vt=2*(W+1)-1,Go=k[Vt],Bt=Vt+1,oi=k[Bt];if(0>i(Go,_))Bt<ee&&0>i(oi,Go)?(k[W]=oi,k[Bt]=_,W=Bt):(k[W]=Go,k[Vt]=_,W=Vt);else if(Bt<ee&&0>i(oi,_))k[W]=oi,k[Bt]=_,W=Bt;else break e}}return R}function i(k,R){var _=k.sortIndex-R.sortIndex;return _!==0?_:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,h=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=k)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function w(k){if(v=!1,y(k),!h)if(n(l)!==null)h=!0,Wo(x);else{var R=n(u);R!==null&&Qo(w,R.startTime-k)}}function x(k,R){h=!1,v&&(v=!1,m(O),O=-1),g=!0;var _=d;try{for(y(R),f=n(l);f!==null&&(!(f.expirationTime>R)||k&&!X());){var W=f.callback;if(typeof W=="function"){f.callback=null,d=f.priorityLevel;var ee=W(f.expirationTime<=R);R=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),y(R)}else r(l);f=n(l)}if(f!==null)var ii=!0;else{var Vt=n(u);Vt!==null&&Qo(w,Vt.startTime-R),ii=!1}return ii}finally{f=null,d=_,g=!1}}var E=!1,P=null,O=-1,b=5,z=-1;function X(){return!(e.unstable_now()-z<b)}function er(){if(P!==null){var k=e.unstable_now();z=k;var R=!0;try{R=P(!0,k)}finally{R?tr():(E=!1,P=null)}}else E=!1}var tr;if(typeof p=="function")tr=function(){p(er)};else if(typeof MessageChannel<"u"){var hu=new MessageChannel,ny=hu.port2;hu.port1.onmessage=er,tr=function(){ny.postMessage(null)}}else tr=function(){N(er,0)};function Wo(k){P=k,E||(E=!0,tr())}function Qo(k,R){O=N(function(){k(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,Wo(x))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var _=d;d=R;try{return k()}finally{d=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var _=d;d=k;try{return R()}finally{d=_}},e.unstable_scheduleCallback=function(k,R,_){var W=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?W+_:W):_=W,k){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=_+ee,k={id:c++,callback:R,priorityLevel:k,startTime:_,expirationTime:ee,sortIndex:-1},_>W?(k.sortIndex=_,t(u,k),n(l)===null&&k===n(u)&&(v?(m(O),O=-1):v=!0,Qo(w,_-W))):(k.sortIndex=ee,t(l,k),h||g||(h=!0,Wo(x))),k},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(k){var R=d;return function(){var _=d;d=R;try{return k.apply(this,arguments)}finally{d=_}}}})(ad);(function(e){e.exports=ad})(ky);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=A,Re=Ds;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,Rr={};function dn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=Object.prototype.hasOwnProperty,Oy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},Su={};function zy(e){return $s.call(Su,e)?!0:$s.call(xu,e)?!1:Oy.test(e)?Su[e]=!0:(xu[e]=!0,!1)}function Ry(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _y(e,t,n,r){if(t===null||typeof t>"u"||Ry(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,Ya);le[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,Ya);le[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,Ya);le[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_y(t,n,i,r)&&(n=null),r||i===null?zy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),yn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),js=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Us=Symbol.for("react.suspense_list"),tl=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),Nu=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=Nu&&e[Nu]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Yo;function dr(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Zo=!1;function Jo(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Ay(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case yn:return"Portal";case js:return"Profiler";case Ja:return"StrictMode";case Ls:return"Suspense";case Us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case el:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tl:return t=e.displayName||null,t!==null?t:qs(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return qs(e(t))}catch{}}return null}function My(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qs(t);case 8:return t===Ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function by(e){var t=pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=by(e))}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hs(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yd(e,t){t=t.checked,t!=null&&Za(e,"checked",t,!1)}function Fs(e,t){yd(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vs(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,t,n){(t!=="number"||Fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(fr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function hd(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iy=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Iy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function xd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dy=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ws(e,t){if(t){if(Dy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,On=null,zn=null;function ku(e){if(e=ei(e)){if(typeof Xs!="function")throw Error(S(280));var t=e.stateNode;t&&(t=_o(t),Xs(e.stateNode,e.type,t))}}function Sd(e){On?zn?zn.push(e):zn=[e]:On=e}function Nd(){if(On){var e=On,t=zn;if(zn=On=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function Pd(e,t){return e(t)}function Ed(){}var es=!1;function Cd(e,t,n){if(es)return e(t,n);es=!0;try{return Pd(e,t,n)}finally{es=!1,(On!==null||zn!==null)&&(Ed(),Nd())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=_o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ys=!1;if(ut)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Ys=!1}function $y(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var vr=!1,Vi=null,Bi=!1,Zs=null,jy={onError:function(e){vr=!0,Vi=e}};function Ly(e,t,n,r,i,o,s,a,l){vr=!1,Vi=null,$y.apply(jy,arguments)}function Uy(e,t,n,r,i,o,s,a,l){if(Ly.apply(this,arguments),vr){if(vr){var u=Vi;vr=!1,Vi=null}else throw Error(S(198));Bi||(Bi=!0,Zs=u)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if(fn(e)!==e)throw Error(S(188))}function qy(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ou(i),e;if(o===r)return Ou(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function kd(e){return e=qy(e),e!==null?Od(e):null}function Od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Od(e);if(t!==null)return t;e=e.sibling}return null}var zd=Re.unstable_scheduleCallback,zu=Re.unstable_cancelCallback,Hy=Re.unstable_shouldYield,Fy=Re.unstable_requestPaint,Q=Re.unstable_now,Vy=Re.unstable_getCurrentPriorityLevel,rl=Re.unstable_ImmediatePriority,Rd=Re.unstable_UserBlockingPriority,Ki=Re.unstable_NormalPriority,By=Re.unstable_LowPriority,_d=Re.unstable_IdlePriority,ko=null,tt=null;function Ky(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Gy,Wy=Math.log,Qy=Math.LN2;function Gy(e){return e>>>=0,e===0?32:31-(Wy(e)/Qy|0)|0}var ci=64,di=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=pr(a):(o&=s,o!==0&&(r=pr(o)))}else s=n&~i,s!==0?r=pr(s):o!==0&&(r=pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Xy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Qe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Xy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ad(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function ts(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Zy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,ol,Id,Dd,$d,ea=!1,fi=[],kt=null,Ot=null,zt=null,Mr=new Map,br=new Map,St=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ei(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function eh(e,t,n,r,i){switch(t){case"focusin":return kt=ir(kt,e,t,n,r,i),!0;case"dragenter":return Ot=ir(Ot,e,t,n,r,i),!0;case"mouseover":return zt=ir(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,ir(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,br.set(o,ir(br.get(o)||null,e,t,n,r,i)),!0}return!1}function jd(e){var t=Xt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Td(n),t!==null){e.blockedOn=t,$d(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=ei(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function _u(e,t,n){Ai(e)&&n.delete(t)}function th(){ea=!1,kt!==null&&Ai(kt)&&(kt=null),Ot!==null&&Ai(Ot)&&(Ot=null),zt!==null&&Ai(zt)&&(zt=null),Mr.forEach(_u),br.forEach(_u)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,th)))}function Ir(e){function t(i){return or(i,e)}if(0<fi.length){or(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&or(kt,e),Ot!==null&&or(Ot,e),zt!==null&&or(zt,e),Mr.forEach(t),br.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&St.shift()}var Rn=pt.ReactCurrentBatchConfig,Qi=!0;function nh(e,t,n,r){var i=D,o=Rn.transition;Rn.transition=null;try{D=1,sl(e,t,n,r)}finally{D=i,Rn.transition=o}}function rh(e,t,n,r){var i=D,o=Rn.transition;Rn.transition=null;try{D=4,sl(e,t,n,r)}finally{D=i,Rn.transition=o}}function sl(e,t,n,r){if(Qi){var i=ta(e,t,n,r);if(i===null)ds(e,t,r,Gi,n),Ru(e,r);else if(eh(i,e,t,n,r))r.stopPropagation();else if(Ru(e,r),t&4&&-1<Jy.indexOf(e)){for(;i!==null;){var o=ei(i);if(o!==null&&bd(o),o=ta(e,t,n,r),o===null&&ds(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ds(e,t,r,null,n)}}var Gi=null;function ta(e,t,n,r){if(Gi=null,e=nl(r),e=Xt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case rl:return 1;case Rd:return 4;case Ki:case By:return 16;case _d:return 536870912;default:return 16}default:return 16}}var Et=null,al=null,Mi=null;function Ud(){if(Mi)return Mi;var e,t=al,n=t.length,r,i="value"in Et?Et.value:Et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Au(){return!1}function Me(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:Au,this.isPropagationStopped=Au,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Me(Wn),Jr=V({},Wn,{view:0,detail:0}),ih=Me(Jr),ns,rs,sr,Oo=V({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(ns=e.screenX-sr.screenX,rs=e.screenY-sr.screenY):rs=ns=0,sr=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),Mu=Me(Oo),oh=V({},Oo,{dataTransfer:0}),sh=Me(oh),ah=V({},Jr,{relatedTarget:0}),is=Me(ah),lh=V({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=Me(lh),ch=V({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=Me(ch),fh=V({},Wn,{data:0}),bu=Me(fh),ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yh[e])?!!t[e]:!1}function ul(){return hh}var gh=V({},Jr,{key:function(e){if(e.key){var t=ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vh=Me(gh),wh=V({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Me(wh),xh=V({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Sh=Me(xh),Nh=V({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ph=Me(Nh),Eh=V({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ch=Me(Eh),Th=[9,13,27,32],cl=ut&&"CompositionEvent"in window,wr=null;ut&&"documentMode"in document&&(wr=document.documentMode);var kh=ut&&"TextEvent"in window&&!wr,qd=ut&&(!cl||wr&&8<wr&&11>=wr),Du=String.fromCharCode(32),$u=!1;function Hd(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Oh(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:($u=!0,Du);case"textInput":return e=t.data,e===Du&&$u?null:e;default:return null}}function zh(e,t){if(gn)return e==="compositionend"||!cl&&Hd(e,t)?(e=Ud(),Mi=al=Et=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var Rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rh[e.type]:t==="textarea"}function Vd(e,t,n,r){Sd(r),t=Xi(t,"onChange"),0<t.length&&(n=new ll("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Dr=null;function _h(e){tf(e,0)}function zo(e){var t=xn(e);if(md(t))return e}function Ah(e,t){if(e==="change")return t}var Bd=!1;if(ut){var os;if(ut){var ss="oninput"in document;if(!ss){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),ss=typeof Lu.oninput=="function"}os=ss}else os=!1;Bd=os&&(!document.documentMode||9<document.documentMode)}function Uu(){xr&&(xr.detachEvent("onpropertychange",Kd),Dr=xr=null)}function Kd(e){if(e.propertyName==="value"&&zo(Dr)){var t=[];Vd(t,Dr,e,nl(e)),Cd(_h,t)}}function Mh(e,t,n){e==="focusin"?(Uu(),xr=t,Dr=n,xr.attachEvent("onpropertychange",Kd)):e==="focusout"&&Uu()}function bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(Dr)}function Ih(e,t){if(e==="click")return zo(t)}function Dh(e,t){if(e==="input"||e==="change")return zo(t)}function $h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:$h;function $r(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$s.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qu(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qd(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e){var t=Qd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(r!==null&&dl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Hu(n,o);var s=Hu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lh=ut&&"documentMode"in document&&11>=document.documentMode,vn=null,na=null,Sr=null,ra=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||vn==null||vn!==Fi(r)||(r=vn,"selectionStart"in r&&dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&$r(Sr,r)||(Sr=r,r=Xi(na,"onSelect"),0<r.length&&(t=new ll("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},as={},Gd={};ut&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Ro(e){if(as[e])return as[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gd)return as[e]=t[n];return e}var Xd=Ro("animationend"),Yd=Ro("animationiteration"),Zd=Ro("animationstart"),Jd=Ro("transitionend"),ef=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){ef.set(e,t),dn(t,[e])}for(var ls=0;ls<Vu.length;ls++){var us=Vu[ls],Uh=us.toLowerCase(),qh=us[0].toUpperCase()+us.slice(1);jt(Uh,"on"+qh)}jt(Xd,"onAnimationEnd");jt(Yd,"onAnimationIteration");jt(Zd,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Jd,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Bu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uy(r,t,void 0,e),e.currentTarget=null}function tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Bu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Bu(i,a,u),o=l}}}if(Bi)throw e=Zs,Bi=!1,Zs=null,e}function j(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(nf(t,e,2,!1),n.add(r))}function cs(e,t,n){var r=0;t&&(r|=4),nf(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[yi]){e[yi]=!0,ud.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,cs("selectionchange",!1,t))}}function nf(e,t,n,r){switch(Ld(t)){case 1:var i=nh;break;case 4:i=rh;break;default:i=sl}n=i.bind(null,t,n,e),i=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ds(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Xt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Cd(function(){var u=o,c=nl(n),f=[];e:{var d=ef.get(e);if(d!==void 0){var g=ll,h=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":g=vh;break;case"focusin":h="focus",g=is;break;case"focusout":h="blur",g=is;break;case"beforeblur":case"afterblur":g=is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Sh;break;case Xd:case Yd:case Zd:g=uh;break;case Jd:g=Ph;break;case"scroll":g=ih;break;case"wheel":g=Ch;break;case"copy":case"cut":case"paste":g=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Iu}var v=(t&4)!==0,N=!v&&e==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Ar(p,m),w!=null&&v.push(Lr(p,w,y)))),N)break;p=p.return}0<v.length&&(d=new g(d,h,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Gs&&(h=n.relatedTarget||n.fromElement)&&(Xt(h)||h[ct]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(h=n.relatedTarget||n.toElement,g=u,h=h?Xt(h):null,h!==null&&(N=fn(h),h!==N||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=u),g!==h)){if(v=Mu,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Iu,w="onPointerLeave",m="onPointerEnter",p="pointer"),N=g==null?d:xn(g),y=h==null?d:xn(h),d=new v(w,p+"leave",g,n,c),d.target=N,d.relatedTarget=y,w=null,Xt(c)===u&&(v=new v(m,p+"enter",h,n,c),v.target=y,v.relatedTarget=N,w=v),N=w,g&&h)t:{for(v=g,m=h,p=0,y=v;y;y=pn(y))p++;for(y=0,w=m;w;w=pn(w))y++;for(;0<p-y;)v=pn(v),p--;for(;0<y-p;)m=pn(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=pn(v),m=pn(m)}v=null}else v=null;g!==null&&Ku(f,d,g,v,!1),h!==null&&N!==null&&Ku(f,N,h,v,!0)}}e:{if(d=u?xn(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var x=Ah;else if(ju(d))if(Bd)x=Dh;else{x=bh;var E=Mh}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=Ih);if(x&&(x=x(e,u))){Vd(f,x,n,c);break e}E&&E(e,d,u),e==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Vs(d,"number",d.value)}switch(E=u?xn(u):window,e){case"focusin":(ju(E)||E.contentEditable==="true")&&(vn=E,na=u,Sr=null);break;case"focusout":Sr=na=vn=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Fu(f,n,c);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":Fu(f,n,c)}var P;if(cl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else gn?Hd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(qd&&n.locale!=="ko"&&(gn||O!=="onCompositionStart"?O==="onCompositionEnd"&&gn&&(P=Ud()):(Et=c,al="value"in Et?Et.value:Et.textContent,gn=!0)),E=Xi(u,O),0<E.length&&(O=new bu(O,e,null,n,c),f.push({event:O,listeners:E}),P?O.data=P:(P=Fd(n),P!==null&&(O.data=P)))),(P=kh?Oh(e,n):zh(e,n))&&(u=Xi(u,"onBeforeInput"),0<u.length&&(c=new bu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}tf(f,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ar(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Ar(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ar(n,o),l!=null&&s.unshift(Lr(n,l,a))):i||(l=Ar(n,o),l!=null&&s.push(Lr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Fh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(Vh,"")}function hi(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(S(425))}function Yi(){}var ia=null,oa=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,Bh=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,Kh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(Wh)}:aa;function Wh(e){setTimeout(function(){throw e})}function fs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ir(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),et="__reactFiber$"+Qn,Ur="__reactProps$"+Qn,ct="__reactContainer$"+Qn,la="__reactEvents$"+Qn,Qh="__reactListeners$"+Qn,Gh="__reactHandles$"+Qn;function Xt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[et])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function _o(e){return e[Ur]||null}var ua=[],Sn=-1;function Lt(e){return{current:e}}function L(e){0>Sn||(e.current=ua[Sn],ua[Sn]=null,Sn--)}function $(e,t){Sn++,ua[Sn]=e.current,e.current=t}var $t={},pe=Lt($t),Se=Lt(!1),nn=$t;function Ln(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Zi(){L(Se),L(pe)}function Xu(e,t,n){if(pe.current!==$t)throw Error(S(168));$(pe,t),$(Se,n)}function rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,My(e)||"Unknown",i));return V({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,nn=pe.current,$(pe,e),$(Se,Se.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=rf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,L(Se),L(pe),$(pe,e)):L(Se),$(Se,n)}var ot=null,Ao=!1,ps=!1;function of(e){ot===null?ot=[e]:ot.push(e)}function Xh(e){Ao=!0,of(e)}function Ut(){if(!ps&&ot!==null){ps=!0;var e=0,t=D;try{var n=ot;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Ao=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),zd(rl,Ut),i}finally{D=t,ps=!1}}return null}var Nn=[],Pn=0,eo=null,to=0,Ie=[],De=0,rn=null,st=1,at="";function Wt(e,t){Nn[Pn++]=to,Nn[Pn++]=eo,eo=e,to=t}function sf(e,t,n){Ie[De++]=st,Ie[De++]=at,Ie[De++]=rn,rn=e;var r=st;e=at;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,st=1<<32-Qe(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function fl(e){e.return!==null&&(Wt(e,1),sf(e,1,0))}function pl(e){for(;e===eo;)eo=Nn[--Pn],Nn[Pn]=null,to=Nn[--Pn],Nn[Pn]=null;for(;e===rn;)rn=Ie[--De],Ie[De]=null,at=Ie[--De],Ie[De]=null,st=Ie[--De],Ie[De]=null}var ze=null,Oe=null,q=!1,Be=null;function af(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Oe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Oe=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(q){var t=Oe;if(t){var n=t;if(!Zu(e,t)){if(ca(e))throw Error(S(418));t=Rt(n.nextSibling);var r=ze;t&&Zu(e,t)?af(r,n):(e.flags=e.flags&-4097|2,q=!1,ze=e)}}else{if(ca(e))throw Error(S(418));e.flags=e.flags&-4097|2,q=!1,ze=e}}}function Ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function gi(e){if(e!==ze)return!1;if(!q)return Ju(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=Oe)){if(ca(e))throw lf(),Error(S(418));for(;t;)af(e,t),t=Rt(t.nextSibling)}if(Ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=ze?Rt(e.stateNode.nextSibling):null;return!0}function lf(){for(var e=Oe;e;)e=Rt(e.nextSibling)}function Un(){Oe=ze=null,q=!1}function ml(e){Be===null?Be=[e]:Be.push(e)}var Yh=pt.ReactCurrentBatchConfig;function Fe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var no=Lt(null),ro=null,En=null,yl=null;function hl(){yl=En=ro=null}function gl(e){var t=no.current;L(no),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){ro=e,yl=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(ro===null)throw Error(S(308));En=e,ro.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Yt=null;function vl(e){Yt===null?Yt=[e]:Yt.push(e)}function uf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vl(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,vl(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,v=a;switch(d=t,g=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){f=h.call(g,f,d);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,d=typeof h=="function"?h.call(g,f,d):h,d==null)break e;f=V({},f,d);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=f}}function tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var df=new ld.Component().refs;function pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Mt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Ge(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Mt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Ge(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Mt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(Ge(t,e,r,n),Ii(t,e,r))}};function nc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,o):!0}function ff(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=Ne(t)?nn:pe.current,r=t.contextTypes,o=(r=r!=null)?Ln(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=df,wl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=Ne(t)?nn:pe.current,i.context=Ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===df&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ic(e){var t=e._init;return t(e._payload)}function pf(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=bt(m,p),m.index=0,m.sibling=null,m}function o(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,w){return p===null||p.tag!==6?(p=xs(y,m.mode,w),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,w){var x=y.type;return x===hn?c(m,p,y.props.children,w,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===wt&&ic(x)===p.type)?(w=i(p,y.props),w.ref=ar(m,p,y),w.return=m,w):(w=qi(y.type,y.key,y.props,null,m.mode,w),w.ref=ar(m,p,y),w.return=m,w)}function u(m,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ss(y,m.mode,w),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,w,x){return p===null||p.tag!==7?(p=en(y,m.mode,w,x),p.return=m,p):(p=i(p,y),p.return=m,p)}function f(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xs(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ai:return y=qi(p.type,p.key,p.props,null,m.mode,y),y.ref=ar(m,null,p),y.return=m,y;case yn:return p=Ss(p,m.mode,y),p.return=m,p;case wt:var w=p._init;return f(m,w(p._payload),y)}if(fr(p)||nr(p))return p=en(p,m.mode,y,null),p.return=m,p;vi(m,p)}return null}function d(m,p,y,w){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(m,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:return y.key===x?l(m,p,y,w):null;case yn:return y.key===x?u(m,p,y,w):null;case wt:return x=y._init,d(m,p,x(y._payload),w)}if(fr(y)||nr(y))return x!==null?null:c(m,p,y,w,null);vi(m,y)}return null}function g(m,p,y,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(p,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ai:return m=m.get(w.key===null?y:w.key)||null,l(p,m,w,x);case yn:return m=m.get(w.key===null?y:w.key)||null,u(p,m,w,x);case wt:var E=w._init;return g(m,p,y,E(w._payload),x)}if(fr(w)||nr(w))return m=m.get(y)||null,c(p,m,w,x,null);vi(p,w)}return null}function h(m,p,y,w){for(var x=null,E=null,P=p,O=p=0,b=null;P!==null&&O<y.length;O++){P.index>O?(b=P,P=null):b=P.sibling;var z=d(m,P,y[O],w);if(z===null){P===null&&(P=b);break}e&&P&&z.alternate===null&&t(m,P),p=o(z,p,O),E===null?x=z:E.sibling=z,E=z,P=b}if(O===y.length)return n(m,P),q&&Wt(m,O),x;if(P===null){for(;O<y.length;O++)P=f(m,y[O],w),P!==null&&(p=o(P,p,O),E===null?x=P:E.sibling=P,E=P);return q&&Wt(m,O),x}for(P=r(m,P);O<y.length;O++)b=g(P,m,O,y[O],w),b!==null&&(e&&b.alternate!==null&&P.delete(b.key===null?O:b.key),p=o(b,p,O),E===null?x=b:E.sibling=b,E=b);return e&&P.forEach(function(X){return t(m,X)}),q&&Wt(m,O),x}function v(m,p,y,w){var x=nr(y);if(typeof x!="function")throw Error(S(150));if(y=x.call(y),y==null)throw Error(S(151));for(var E=x=null,P=p,O=p=0,b=null,z=y.next();P!==null&&!z.done;O++,z=y.next()){P.index>O?(b=P,P=null):b=P.sibling;var X=d(m,P,z.value,w);if(X===null){P===null&&(P=b);break}e&&P&&X.alternate===null&&t(m,P),p=o(X,p,O),E===null?x=X:E.sibling=X,E=X,P=b}if(z.done)return n(m,P),q&&Wt(m,O),x;if(P===null){for(;!z.done;O++,z=y.next())z=f(m,z.value,w),z!==null&&(p=o(z,p,O),E===null?x=z:E.sibling=z,E=z);return q&&Wt(m,O),x}for(P=r(m,P);!z.done;O++,z=y.next())z=g(P,m,O,z.value,w),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?O:z.key),p=o(z,p,O),E===null?x=z:E.sibling=z,E=z);return e&&P.forEach(function(er){return t(m,er)}),q&&Wt(m,O),x}function N(m,p,y,w){if(typeof y=="object"&&y!==null&&y.type===hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ai:e:{for(var x=y.key,E=p;E!==null;){if(E.key===x){if(x=y.type,x===hn){if(E.tag===7){n(m,E.sibling),p=i(E,y.props.children),p.return=m,m=p;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===wt&&ic(x)===E.type){n(m,E.sibling),p=i(E,y.props),p.ref=ar(m,E,y),p.return=m,m=p;break e}n(m,E);break}else t(m,E);E=E.sibling}y.type===hn?(p=en(y.props.children,m.mode,w,y.key),p.return=m,m=p):(w=qi(y.type,y.key,y.props,null,m.mode,w),w.ref=ar(m,p,y),w.return=m,m=w)}return s(m);case yn:e:{for(E=y.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ss(y,m.mode,w),p.return=m,m=p}return s(m);case wt:return E=y._init,N(m,p,E(y._payload),w)}if(fr(y))return h(m,p,y,w);if(nr(y))return v(m,p,y,w);vi(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=xs(y,m.mode,w),p.return=m,m=p),s(m)):n(m,p)}return N}var qn=pf(!0),mf=pf(!1),ti={},nt=Lt(ti),qr=Lt(ti),Hr=Lt(ti);function Zt(e){if(e===ti)throw Error(S(174));return e}function xl(e,t){switch($(Hr,t),$(qr,e),$(nt,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ks(t,e)}L(nt),$(nt,t)}function Hn(){L(nt),L(qr),L(Hr)}function yf(e){Zt(Hr.current);var t=Zt(nt.current),n=Ks(t,e.type);t!==n&&($(qr,e),$(nt,n))}function Sl(e){qr.current===e&&(L(nt),L(qr))}var H=Lt(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ms=[];function Nl(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var Di=pt.ReactCurrentDispatcher,ys=pt.ReactCurrentBatchConfig,on=0,F=null,Z=null,te=null,so=!1,Nr=!1,Fr=0,Zh=0;function ue(){throw Error(S(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function El(e,t,n,r,i,o){if(on=o,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?ng:rg,e=n(r,i),Nr){o=0;do{if(Nr=!1,Fr=0,25<=o)throw Error(S(301));o+=1,te=Z=null,t.updateQueue=null,Di.current=ig,e=n(r,i)}while(Nr)}if(Di.current=ao,t=Z!==null&&Z.next!==null,on=0,te=Z=F=null,so=!1,t)throw Error(S(300));return e}function Cl(){var e=Fr!==0;return Fr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?F.memoizedState=te=e:te=te.next=e,te}function Ue(){if(Z===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?F.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?F.memoizedState=te=e:te=te.next=e}return te}function Vr(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((on&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,F.lanes|=c,sn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Xe(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,F.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Xe(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hf(){}function gf(e,t){var n=F,r=Ue(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,Tl(xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Br(9,wf.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(S(349));on&30||vf(n,t,i)}return i}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wf(e,t,n,r){t.value=n,t.getSnapshot=r,Sf(t)&&Nf(e)}function xf(e,t,n){return n(function(){Sf(t)&&Nf(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Nf(e){var t=dt(e,1);t!==null&&Ge(t,e,1,-1)}function oc(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=tg.bind(null,F,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pf(){return Ue().memoizedState}function $i(e,t,n,r){var i=Je();F.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(Z!==null){var s=Z.memoizedState;if(o=s.destroy,r!==null&&Pl(r,s.deps)){i.memoizedState=Br(t,n,o,r);return}}F.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function sc(e,t){return $i(8390656,8,e,t)}function Tl(e,t){return bo(2048,8,e,t)}function Ef(e,t){return bo(4,2,e,t)}function Cf(e,t){return bo(4,4,e,t)}function Tf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,Tf.bind(null,t,e),n)}function kl(){}function Of(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rf(e,t,n){return on&21?(Xe(n,t)||(n=Ad(),F.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Jh(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{D=n,ys.transition=r}}function _f(){return Ue().memoizedState}function eg(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Mf(t,n);else if(n=uf(e,t,n,r),n!==null){var i=ye();Ge(n,e,r,i),bf(n,t,r)}}function tg(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Mf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,s)){var l=t.interleaved;l===null?(i.next=i,vl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=uf(e,t,i,r),n!==null&&(i=ye(),Ge(n,e,r,i),bf(n,t,r))}}function Af(e){var t=e.alternate;return e===F||t!==null&&t===F}function Mf(e,t){Nr=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var ao={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},ng={readContext:Le,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,Tf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=eg.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:oc,useDebugValue:kl,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=oc(!1),t=e[0];return e=Jh.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,i=Je();if(q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));on&30||vf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,sc(xf.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,wf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=ne.identifierPrefix;if(q){var n=at,r=st;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rg={readContext:Le,useCallback:Of,useContext:Le,useEffect:Tl,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Cf,useMemo:zf,useReducer:hs,useRef:Pf,useState:function(){return hs(Vr)},useDebugValue:kl,useDeferredValue:function(e){var t=Ue();return Rf(t,Z.memoizedState,e)},useTransition:function(){var e=hs(Vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1},ig={readContext:Le,useCallback:Of,useContext:Le,useEffect:Tl,useImperativeHandle:kf,useInsertionEffect:Ef,useLayoutEffect:Cf,useMemo:zf,useReducer:gs,useRef:Pf,useState:function(){return gs(Vr)},useDebugValue:kl,useDeferredValue:function(e){var t=Ue();return Z===null?t.memoizedState=e:Rf(t,Z.memoizedState,e)},useTransition:function(){var e=gs(Vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:_f,unstable_isNewReconciler:!1};function Fn(e,t){try{var n="",r=t;do n+=Ay(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var og=typeof WeakMap=="function"?WeakMap:Map;function If(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,Ca=r),ya(e,t)},n}function Df(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ya(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ya(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new og;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wg.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var sg=pt.ReactCurrentOwner,xe=!1;function me(e,t,n,r){t.child=e===null?mf(t,null,n,r):qn(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var o=t.ref;return _n(t,i),r=El(e,t,n,r,o,i),n=Cl(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(q&&n&&fl(t),t.flags|=1,me(e,t,r,i),t.child)}function dc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Il(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$f(e,t,o,r,i)):(e=qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(s,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function $f(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($r(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ft(e,t,i)}return ha(e,t,n,r,i)}function jf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Tn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(Tn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(Tn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(Tn,ke),ke|=r;return me(e,t,i,n),t.child}function Lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ha(e,t,n,r,i){var o=Ne(n)?nn:pe.current;return o=Ln(t,o),_n(t,i),n=El(e,t,n,r,o,i),r=Cl(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(q&&r&&fl(t),t.flags|=1,me(e,t,n,i),t.child)}function fc(e,t,n,r,i){if(Ne(n)){var o=!0;Ji(t)}else o=!1;if(_n(t,i),t.stateNode===null)ji(e,t),ff(t,n,r),ma(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=Ne(n)?nn:pe.current,u=Ln(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&rc(t,s,r,u),xt=!1;var d=t.memoizedState;s.state=d,io(t,r,s,i),l=t.memoizedState,a!==r||d!==l||Se.current||xt?(typeof c=="function"&&(pa(t,n,c,r),l=t.memoizedState),(a=xt||nc(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Fe(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=Ne(n)?nn:pe.current,l=Ln(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&rc(t,s,r,l),xt=!1,d=t.memoizedState,s.state=d,io(t,r,s,i);var h=t.memoizedState;a!==f||d!==h||Se.current||xt?(typeof g=="function"&&(pa(t,n,g,r),h=t.memoizedState),(u=xt||nc(t,n,u,r,d,h,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,o,i)}function ga(e,t,n,r,i,o){Lf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Yu(t,n,!1),ft(e,t,o);r=t.stateNode,sg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=qn(t,e.child,null,o),t.child=qn(t,null,a,o)):me(e,t,a,o),t.memoizedState=r.state,i&&Yu(t,n,!0),t.child}function Uf(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),xl(e,t.containerInfo)}function pc(e,t,n,r,i){return Un(),ml(i),t.flags|=256,me(e,t,n,r),t.child}var va={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(H,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$o(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wa(n),t.memoizedState=va,e):Ol(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ag(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=bt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=bt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?wa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=va,r}return o=e.child,e=o.sibling,r=bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&ml(r),qn(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=vs(Error(S(422))),wi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$o({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&qn(t,e.child,null,s),t.child.memoizedState=wa(s),t.memoizedState=va,o);if(!(t.mode&1))return wi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=vs(o,r,void 0),wi(e,t,s,r)}if(a=(s&e.childLanes)!==0,xe||a){if(r=ne,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),Ge(r,e,i,-1))}return bl(),r=vs(Error(S(421))),wi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Oe=Rt(i.nextSibling),ze=t,q=!0,Be=null,e!==null&&(Ie[De++]=st,Ie[De++]=at,Ie[De++]=rn,st=e.id,at=e.overflow,rn=t),t=Ol(t,r.children),t.flags|=4096,t)}function mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function ws(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,n,t);else if(e.tag===19)mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ws(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ws(t,!0,n,null,o);break;case"together":ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lg(e,t,n){switch(t.tag){case 3:Uf(t),Un();break;case 5:yf(t);break;case 1:Ne(t.type)&&Ji(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(no,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?qf(e,t,n):($(H,H.current&1),e=ft(e,t,n),e!==null?e.sibling:null);$(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,jf(e,t,n)}return ft(e,t,n)}var Ff,xa,Vf,Bf;Ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};Vf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(nt.current);var o=null;switch(n){case"input":i=Hs(e,i),r=Hs(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Ws(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ug(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ne(t.type)&&Zi(),ce(t),null;case 3:return r=t.stateNode,Hn(),L(Se),L(pe),Nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(Oa(Be),Be=null))),xa(e,t),ce(t),null;case 5:Sl(t);var i=Zt(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Zt(nt.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[Ur]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)j(mr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Pu(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":Cu(r,o),j("invalid",r)}Ws(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,a,e),i=["children",""+a]):Rr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":li(r),Eu(r,o,!0);break;case"textarea":li(r),Tu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[et]=t,e[Ur]=r,Ff(e,t,!1,!1),t.stateNode=e;e:{switch(s=Qs(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)j(mr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Pu(e,r),i=Hs(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),j("invalid",e);break;case"textarea":Cu(e,r),i=Bs(e,r),j("invalid",e);break;default:i=r}Ws(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?xd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_r(e,l):typeof l=="number"&&_r(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&j("scroll",e):l!=null&&Za(e,o,l,s))}switch(n){case"input":li(e),Eu(e,r,!1);break;case"textarea":li(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kn(e,!!r.multiple,o,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Zt(Hr.current),Zt(nt.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return ce(t),null;case 13:if(L(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Oe!==null&&t.mode&1&&!(t.flags&128))lf(),Un(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[et]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Be!==null&&(Oa(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):bl())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Hn(),xa(e,t),e===null&&jr(t.stateNode.containerInfo),ce(t),null;case 10:return gl(t.type._context),ce(t),null;case 17:return Ne(t.type)&&Zi(),ce(t),null;case 19:if(L(H),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=oo(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Vn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=oo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ce(t),null}else 2*Q()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=H.current,$(H,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function cg(e,t){switch(pl(t),t.tag){case 1:return Ne(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),L(Se),L(pe),Nl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(L(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(H),null;case 4:return Hn(),null;case 10:return gl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var xi=!1,de=!1,dg=typeof WeakSet=="function"?WeakSet:Set,C=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){B(e,t,r)}}var yc=!1;function fg(e,t){if(ia=Qi,e=Qd(),dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Qi=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,N=h.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Fe(t.type,v),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){B(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return h=yc,yc=!1,h}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sa(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[Ur],delete t[la],delete t[Qh],delete t[Gh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var oe=null,Ve=!1;function gt(e,t,n){for(n=n.child;n!==null;)Qf(e,t,n),n=n.sibling}function Qf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:de||Cn(n,t);case 6:var r=oe,i=Ve;oe=null,gt(e,t,n),oe=r,Ve=i,oe!==null&&(Ve?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ve?(e=oe,n=n.stateNode,e.nodeType===8?fs(e.parentNode,n):e.nodeType===1&&fs(e,n),Ir(e)):fs(oe,n.stateNode));break;case 4:r=oe,i=Ve,oe=n.stateNode.containerInfo,Ve=!0,gt(e,t,n),oe=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Sa(n,t,s),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!de&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){B(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,gt(e,t,n),de=r):gt(e,t,n);break;default:gt(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dg),t.forEach(function(r){var i=Sg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,Ve=!1;break e;case 3:oe=a.stateNode.containerInfo,Ve=!0;break e;case 4:oe=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(oe===null)throw Error(S(160));Qf(o,s,i),oe=null,Ve=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){B(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Ze(e),r&4){try{Pr(3,e,e.return),Io(3,e)}catch(v){B(e,e.return,v)}try{Pr(5,e,e.return)}catch(v){B(e,e.return,v)}}break;case 1:He(t,e),Ze(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(He(t,e),Ze(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(v){B(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yd(i,o),Qs(a,s);var u=Qs(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?xd(i,f):c==="dangerouslySetInnerHTML"?vd(i,f):c==="children"?_r(i,f):Za(i,c,f,u)}switch(a){case"input":Fs(i,o);break;case"textarea":hd(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?kn(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?kn(i,!!o.multiple,o.defaultValue,!0):kn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ur]=o}catch(v){B(e,e.return,v)}}break;case 6:if(He(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){B(e,e.return,v)}}break;case 3:if(He(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(v){B(e,e.return,v)}break;case 4:He(t,e),Ze(e);break;case 13:He(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_l=Q())),r&4&&gc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||c,He(t,e),de=u):He(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(C=e,c=e.child;c!==null;){for(f=C=c;C!==null;){switch(d=C,g=d.child,d.tag){case 0:case 11:case 14:case 15:Pr(4,d,d.return);break;case 1:Cn(d,d.return);var h=d.stateNode;if(typeof h.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){B(r,n,v)}}break;case 5:Cn(d,d.return);break;case 22:if(d.memoizedState!==null){wc(f);continue}}g!==null?(g.return=d,C=g):wc(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wd("display",s))}catch(v){B(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){B(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:He(t,e),Ze(e),r&4&&gc(e);break;case 21:break;default:He(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var o=hc(e);Ea(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=hc(e);Pa(e,a,s);break;default:throw Error(S(161))}}catch(l){B(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pg(e,t,n){C=e,Xf(e)}function Xf(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||xi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||de;a=xi;var u=de;if(xi=s,(de=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?xc(i):l!==null?(l.return=s,C=l):xc(i);for(;o!==null;)C=o,Xf(o),o=o.sibling;C=i,xi=a,de=u}vc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):vc(e)}}function vc(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ir(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Na(t)}catch(d){B(t,t.return,d)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function wc(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function xc(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(l){B(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){B(t,i,l)}}var o=t.return;try{Na(t)}catch(l){B(t,o,l)}break;case 5:var s=t.return;try{Na(t)}catch(l){B(t,s,l)}}}catch(l){B(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var mg=Math.ceil,lo=pt.ReactCurrentDispatcher,zl=pt.ReactCurrentOwner,je=pt.ReactCurrentBatchConfig,I=0,ne=null,G=null,ae=0,ke=0,Tn=Lt(0),J=0,Kr=null,sn=0,Do=0,Rl=0,Er=null,we=null,_l=0,Vn=1/0,it=null,uo=!1,Ca=null,At=null,Si=!1,Ct=null,co=0,Cr=0,Ta=null,Li=-1,Ui=0;function ye(){return I&6?Q():Li!==-1?Li:Li=Q()}function Mt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Yh.transition!==null?(Ui===0&&(Ui=Ad()),Ui):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function Ge(e,t,n,r){if(50<Cr)throw Cr=0,Ta=null,Error(S(185));Zr(e,n,r),(!(I&2)||e!==ne)&&(e===ne&&(!(I&2)&&(Do|=n),J===4&&Nt(e,ae)),Pe(e,r),n===1&&I===0&&!(t.mode&1)&&(Vn=Q()+500,Ao&&Ut()))}function Pe(e,t){var n=e.callbackNode;Yy(e,t);var r=Wi(e,e===ne?ae:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?Xh(Sc.bind(null,e)):of(Sc.bind(null,e)),Kh(function(){!(I&6)&&Ut()}),n=null;else{switch(Md(r)){case 1:n=rl;break;case 4:n=Rd;break;case 16:n=Ki;break;case 536870912:n=_d;break;default:n=Ki}n=ip(n,Yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yf(e,t){if(Li=-1,Ui=0,I&6)throw Error(S(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Wi(e,e===ne?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fo(e,r);else{t=r;var i=I;I|=2;var o=Jf();(ne!==e||ae!==t)&&(it=null,Vn=Q()+500,Jt(e,t));do try{gg();break}catch(a){Zf(e,a)}while(1);hl(),lo.current=o,I=i,G!==null?t=0:(ne=null,ae=0,t=J)}if(t!==0){if(t===2&&(i=Js(e),i!==0&&(r=i,t=ka(e,i))),t===1)throw n=Kr,Jt(e,0),Nt(e,r),Pe(e,Q()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!yg(i)&&(t=fo(e,r),t===2&&(o=Js(e),o!==0&&(r=o,t=ka(e,o))),t===1))throw n=Kr,Jt(e,0),Nt(e,r),Pe(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Qt(e,we,it);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=_l+500-Q(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=aa(Qt.bind(null,e,we,it),t);break}Qt(e,we,it);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Qe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mg(r/1960))-r,10<r){e.timeoutHandle=aa(Qt.bind(null,e,we,it),r);break}Qt(e,we,it);break;case 5:Qt(e,we,it);break;default:throw Error(S(329))}}}return Pe(e,Q()),e.callbackNode===n?Yf.bind(null,e):null}function ka(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=fo(e,t),e!==2&&(t=we,we=n,t!==null&&Oa(t)),e}function Oa(e){we===null?we=e:we.push.apply(we,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Rl,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function Sc(e){if(I&6)throw Error(S(327));An();var t=Wi(e,0);if(!(t&1))return Pe(e,Q()),null;var n=fo(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=ka(e,r))}if(n===1)throw n=Kr,Jt(e,0),Nt(e,t),Pe(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,we,it),Pe(e,Q()),null}function Al(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Vn=Q()+500,Ao&&Ut())}}function an(e){Ct!==null&&Ct.tag===0&&!(I&6)&&An();var t=I;I|=1;var n=je.transition,r=D;try{if(je.transition=null,D=1,e)return e()}finally{D=r,je.transition=n,I=t,!(I&6)&&Ut()}}function Ml(){ke=Tn.current,L(Tn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bh(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:Hn(),L(Se),L(pe),Nl();break;case 5:Sl(r);break;case 4:Hn();break;case 13:L(H);break;case 19:L(H);break;case 10:gl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(ne=e,G=e=bt(e.current,null),ae=ke=t,J=0,Kr=null,Rl=Do=sn=0,we=Er=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Yt=null}return e}function Zf(e,t){do{var n=G;try{if(hl(),Di.current=ao,so){for(var r=F.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}so=!1}if(on=0,te=Z=F=null,Nr=!1,Fr=0,zl.current=null,n===null||n.return===null){J=1,Kr=t,G=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=lc(s);if(g!==null){g.flags&=-257,uc(g,s,a,o,t),g.mode&1&&ac(o,u,t),t=g,l=u;var h=t.updateQueue;if(h===null){var v=new Set;v.add(l),t.updateQueue=v}else h.add(l);break e}else{if(!(t&1)){ac(o,u,t),bl();break e}l=Error(S(426))}}else if(q&&a.mode&1){var N=lc(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),uc(N,s,a,o,t),ml(Fn(l,a));break e}}o=l=Fn(l,a),J!==4&&(J=2),Er===null?Er=[o]:Er.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=If(o,l,t);ec(o,m);break e;case 1:a=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(At===null||!At.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Df(o,a,t);ec(o,w);break e}}o=o.return}while(o!==null)}tp(n)}catch(x){t=x,G===n&&n!==null&&(G=n=n.return);continue}break}while(1)}function Jf(){var e=lo.current;return lo.current=ao,e===null?ao:e}function bl(){(J===0||J===3||J===2)&&(J=4),ne===null||!(sn&268435455)&&!(Do&268435455)||Nt(ne,ae)}function fo(e,t){var n=I;I|=2;var r=Jf();(ne!==e||ae!==t)&&(it=null,Jt(e,t));do try{hg();break}catch(i){Zf(e,i)}while(1);if(hl(),I=n,lo.current=r,G!==null)throw Error(S(261));return ne=null,ae=0,J}function hg(){for(;G!==null;)ep(G)}function gg(){for(;G!==null&&!Hy();)ep(G)}function ep(e){var t=rp(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?tp(e):G=t,zl.current=null}function tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cg(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=ug(n,t,ke),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Qt(e,t,n){var r=D,i=je.transition;try{je.transition=null,D=1,vg(e,t,n,r)}finally{je.transition=i,D=r}return null}function vg(e,t,n,r){do An();while(Ct!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zy(e,o),e===ne&&(G=ne=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,ip(Ki,function(){return An(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var s=D;D=1;var a=I;I|=4,zl.current=null,fg(e,n),Gf(n,e),jh(oa),Qi=!!ia,oa=ia=null,e.current=n,pg(n),Fy(),I=a,D=s,je.transition=o}else e.current=n;if(Si&&(Si=!1,Ct=e,co=i),o=e.pendingLanes,o===0&&(At=null),Ky(n.stateNode),Pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uo)throw uo=!1,e=Ca,Ca=null,e;return co&1&&e.tag!==0&&An(),o=e.pendingLanes,o&1?e===Ta?Cr++:(Cr=0,Ta=e):Cr=0,Ut(),null}function An(){if(Ct!==null){var e=Md(co),t=je.transition,n=D;try{if(je.transition=null,D=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,co=0,I&6)throw Error(S(331));var i=I;for(I|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:Pr(8,c,o)}var f=c.child;if(f!==null)f.return=c,C=f;else for(;C!==null;){c=C;var d=c.sibling,g=c.return;if(Kf(c),c===u){C=null;break}if(d!==null){d.return=g,C=d;break}C=g}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,C=m;break e}C=o.return}}var p=e.current;for(C=p;C!==null;){s=C;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,C=y;else e:for(s=p;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Io(9,a)}}catch(x){B(a,a.return,x)}if(a===s){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(I=i,Ut(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{D=n,je.transition=t}}return!1}function Nc(e,t,n){t=Fn(n,t),t=If(e,t,1),e=_t(e,t,1),t=ye(),e!==null&&(Zr(e,1,t),Pe(e,t))}function B(e,t,n){if(e.tag===3)Nc(e,e,n);else for(;t!==null;){if(t.tag===3){Nc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Fn(n,e),e=Df(t,e,1),t=_t(t,e,1),e=ye(),t!==null&&(Zr(t,1,e),Pe(t,e));break}}t=t.return}}function wg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ae&n)===n&&(J===4||J===3&&(ae&130023424)===ae&&500>Q()-_l?Jt(e,0):Rl|=n),Pe(e,t)}function np(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(Zr(e,t,n),Pe(e,n))}function xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),np(e,n)}function Sg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),np(e,n)}var rp;rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,lg(e,t,n);xe=!!(e.flags&131072)}else xe=!1,q&&t.flags&1048576&&sf(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=Ln(t,pe.current);_n(t,n),i=El(null,t,r,e,i,n);var o=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,Ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wl(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,ma(t,r,e,n),t=ga(null,t,r,!0,o,n)):(t.tag=0,q&&o&&fl(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pg(r),e=Fe(r,e),i){case 0:t=ha(null,t,r,e,n);break e;case 1:t=fc(null,t,r,e,n);break e;case 11:t=cc(null,t,r,e,n);break e;case 14:t=dc(null,t,r,Fe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),ha(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),fc(e,t,r,i,n);case 3:e:{if(Uf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cf(e,t),io(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fn(Error(S(423)),t),t=pc(e,t,r,n,i);break e}else if(r!==i){i=Fn(Error(S(424)),t),t=pc(e,t,r,n,i);break e}else for(Oe=Rt(t.stateNode.containerInfo.firstChild),ze=t,q=!0,Be=null,n=mf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=ft(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return yf(t),e===null&&da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,sa(r,i)?s=null:o!==null&&sa(r,o)&&(t.flags|=32),Lf(e,t),me(e,t,s,n),t.child;case 6:return e===null&&da(t),null;case 13:return qf(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),cc(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$(no,r._currentValue),r._currentValue=s,o!==null)if(Xe(o.value,s)){if(o.children===i.children&&!Se.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=lt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_n(t,n),i=Le(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),dc(e,t,r,i,n);case 15:return $f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),ji(e,t),t.tag=1,Ne(r)?(e=!0,Ji(t)):e=!1,_n(t,n),ff(t,r,i),ma(t,r,i,n),ga(null,t,r,!0,e,n);case 19:return Hf(e,t,n);case 22:return jf(e,t,n)}throw Error(S(156,t.tag))};function ip(e,t){return zd(e,t)}function Ng(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Ng(e,t,n,r)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pg(e){if(typeof e=="function")return Il(e)?1:0;if(e!=null){if(e=e.$$typeof,e===el)return 11;if(e===tl)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Il(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case hn:return en(n.children,i,o,t);case Ja:s=8,i|=8;break;case js:return e=$e(12,n,t,i|2),e.elementType=js,e.lanes=o,e;case Ls:return e=$e(13,n,t,i),e.elementType=Ls,e.lanes=o,e;case Us:return e=$e(19,n,t,i),e.elementType=Us,e.lanes=o,e;case fd:return $o(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:s=10;break e;case dd:s=9;break e;case el:s=11;break e;case tl:s=14;break e;case wt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=$e(22,e,r,t),e.elementType=fd,e.lanes=n,e.stateNode={isHidden:!1},e}function xs(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Ss(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,o,s,a,l){return e=new Eg(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(o),e}function Cg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function op(e){if(!e)return $t;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return rf(e,n,t)}return t}function sp(e,t,n,r,i,o,s,a,l){return e=Dl(n,r,!0,e,i,o,s,a,l),e.context=op(null),n=e.current,r=ye(),i=Mt(n),o=lt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Zr(e,i,r),Pe(e,r),e}function jo(e,t,n,r){var i=t.current,o=ye(),s=Mt(i);return n=op(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,s),e!==null&&(Ge(e,i,s,o),Ii(e,i,s)),s}function po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function Tg(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}Lo.prototype.render=jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));jo(e,t,null,null)};Lo.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){jo(null,e,null,null)}),t[ct]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&jd(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function kg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=po(s);o.call(u)}}var s=sp(t,r,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=s,e[ct]=s.current,jr(e.nodeType===8?e.parentNode:e),an(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=po(l);a.call(u)}}var l=Dl(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=l,e[ct]=l.current,jr(e.nodeType===8?e.parentNode:e),an(function(){jo(t,l,n,r)}),l}function qo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=po(s);a.call(l)}}jo(t,s,e,i)}else s=kg(n,t,e,i,r);return po(s)}bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(il(t,n|1),Pe(t,Q()),!(I&6)&&(Vn=Q()+500,Ut()))}break;case 13:an(function(){var r=dt(e,1);if(r!==null){var i=ye();Ge(r,e,1,i)}}),$l(e,1)}};ol=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}$l(e,134217728)}};Id=function(e){if(e.tag===13){var t=Mt(e),n=dt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}$l(e,t)}};Dd=function(){return D};$d=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Xs=function(e,t,n){switch(t){case"input":if(Fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_o(r);if(!i)throw Error(S(90));md(r),Fs(r,i)}}}break;case"textarea":hd(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};Pd=Al;Ed=an;var Og={usingClientEntryPoint:!1,Events:[ei,xn,_o,Sd,Nd,Al]},ur={findFiberByHostInstance:Xt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zg={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{ko=Ni.inject(zg),tt=Ni}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Og;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(t))throw Error(S(200));return Cg(e,t,null,n)};Ae.createRoot=function(e,t){if(!Ll(e))throw Error(S(299));var n=!1,r="",i=ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,jr(e.nodeType===8?e.parentNode:e),new jl(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return an(e)};Ae.hydrate=function(e,t,n){if(!Uo(t))throw Error(S(200));return qo(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Ll(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sp(t,null,e,1,n??null,i,!1,o,s),e[ct]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)};Ae.render=function(e,t,n){if(!Uo(t))throw Error(S(200));return qo(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(S(40));return e._reactRootContainer?(an(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Ae.unstable_batchedUpdates=Al;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return qo(e,t,n,!1,r)};Ae.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ae})(Ty);var Cc=Is;bs.createRoot=Cc.createRoot,bs.hydrateRoot=Cc.hydrateRoot;function Ke(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ln(e){return!!e&&!!e[U]}function un(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===jg}(e)||Array.isArray(e)||!!e[Ac]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ac])||Ul(e)||ql(e))}function cn(e,t,n){n===void 0&&(n=!1),Gn(e)===0?(n?Object.keys:bn)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Gn(e){var t=e[U];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Ul(e)?2:ql(e)?3:0}function Mn(e,t){return Gn(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Rg(e,t){return Gn(e)===2?e.get(t):e[t]}function lp(e,t,n){var r=Gn(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function up(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Ul(e){return Dg&&e instanceof Map}function ql(e){return $g&&e instanceof Set}function Gt(e){return e.o||e.t}function Hl(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=dp(e);delete t[U];for(var n=bn(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Fl(e,t){return t===void 0&&(t=!1),Vl(e)||ln(e)||!un(e)||(Gn(e)>1&&(e.set=e.add=e.clear=e.delete=_g),Object.freeze(e),t&&cn(e,function(n,r){return Fl(r,!0)},!0)),e}function _g(){Ke(2)}function Vl(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function rt(e){var t=Aa[e];return t||Ke(18,e),t}function Ag(e,t){Aa[e]||(Aa[e]=t)}function za(){return Wr}function Ns(e,t){t&&(rt("Patches"),e.u=[],e.s=[],e.v=t)}function mo(e){Ra(e),e.p.forEach(Mg),e.p=null}function Ra(e){e===Wr&&(Wr=e.l)}function Tc(e){return Wr={p:[],l:Wr,h:e,m:!0,_:0}}function Mg(e){var t=e[U];t.i===0||t.i===1?t.j():t.g=!0}function Ps(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||rt("ES5").S(t,e,r),r?(n[U].P&&(mo(t),Ke(4)),un(e)&&(e=yo(t,e),t.l||ho(t,e)),t.u&&rt("Patches").M(n[U].t,e,t.u,t.s)):e=yo(t,n,[]),mo(t),t.u&&t.v(t.u,t.s),e!==cp?e:void 0}function yo(e,t,n){if(Vl(t))return t;var r=t[U];if(!r)return cn(t,function(a,l){return kc(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ho(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Hl(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),cn(o,function(a,l){return kc(e,r,i,a,l,n,s)}),ho(e,i,!1),n&&e.u&&rt("Patches").N(r,n,e.u,e.s)}return r.o}function kc(e,t,n,r,i,o,s){if(ln(i)){var a=yo(e,i,o&&t&&t.i!==3&&!Mn(t.R,r)?o.concat(r):void 0);if(lp(n,r,a),!ln(a))return;e.m=!1}else s&&n.add(i);if(un(i)&&!Vl(i)){if(!e.h.D&&e._<1)return;yo(e,i),t&&t.A.l||ho(e,i)}}function ho(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Fl(t,n)}function Es(e,t){var n=e[U];return(n?Gt(n):e)[t]}function Oc(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Pt(e){e.P||(e.P=!0,e.l&&Pt(e.l))}function Cs(e){e.o||(e.o=Hl(e.t))}function _a(e,t,n){var r=Ul(t)?rt("MapSet").F(t,n):ql(t)?rt("MapSet").T(t,n):e.O?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:za(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,u=Qr;s&&(l=[a],u=yr);var c=Proxy.revocable(l,u),f=c.revoke,d=c.proxy;return a.k=d,a.j=f,d}(t,n):rt("ES5").J(t,n);return(n?n.A:za()).p.push(r),r}function bg(e){return ln(e)||Ke(22,e),function t(n){if(!un(n))return n;var r,i=n[U],o=Gn(n);if(i){if(!i.P&&(i.i<4||!rt("ES5").K(i)))return i.t;i.I=!0,r=zc(n,o),i.I=!1}else r=zc(n,o);return cn(r,function(s,a){i&&Rg(i.t,s)===a||lp(r,s,t(a))}),o===3?new Set(r):r}(e)}function zc(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Hl(e)}function Ig(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[U];return Qr.get(l,o)},set:function(l){var u=this[U];Qr.set(u,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][U];if(!a.P)switch(a.i){case 5:r(a)&&Pt(a);break;case 4:n(a)&&Pt(a)}}}function n(o){for(var s=o.t,a=o.k,l=bn(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==U){var f=s[c];if(f===void 0&&!Mn(s,c))return!0;var d=a[c],g=d&&d[U];if(g?g.t!==f:!up(d,f))return!0}}var h=!!s[U];return l.length!==bn(s).length+(h?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};Ag("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(c,f){if(c){for(var d=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(d,""+g,e(g,!0));return d}var h=dp(f);delete h[U];for(var v=bn(h),N=0;N<v.length;N++){var m=v[N];h[m]=e(m,c||!!h[m].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(a,o),u={i:a?5:4,A:s?s.A:za(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,U,{value:u,writable:!0}),l},S:function(o,s,a){a?ln(s)&&s[U].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[U];if(c){var f=c.t,d=c.k,g=c.R,h=c.i;if(h===4)cn(d,function(y){y!==U&&(f[y]!==void 0||Mn(f,y)?g[y]||l(d[y]):(g[y]=!0,Pt(c)))}),cn(f,function(y){d[y]!==void 0||Mn(d,y)||(g[y]=!1,Pt(c))});else if(h===5){if(r(c)&&(Pt(c),g.length=!0),d.length<f.length)for(var v=d.length;v<f.length;v++)g[v]=!1;else for(var N=f.length;N<d.length;N++)g[N]=!0;for(var m=Math.min(d.length,f.length),p=0;p<m;p++)d.hasOwnProperty(p)||(g[p]=!0),g[p]===void 0&&l(d[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Rc,Wr,Bl=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Dg=typeof Map<"u",$g=typeof Set<"u",_c=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",cp=Bl?Symbol.for("immer-nothing"):((Rc={})["immer-nothing"]=!0,Rc),Ac=Bl?Symbol.for("immer-draftable"):"__$immer_draftable",U=Bl?Symbol.for("immer-state"):"__$immer_state",jg=""+Object.prototype.constructor,bn=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,dp=Object.getOwnPropertyDescriptors||function(e){var t={};return bn(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Aa={},Qr={get:function(e,t){if(t===U)return e;var n=Gt(e);if(!Mn(n,t))return function(i,o,s){var a,l=Oc(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!un(r)?r:r===Es(e.t,t)?(Cs(e),e.o[t]=_a(e.A.h,r,e)):r},has:function(e,t){return t in Gt(e)},ownKeys:function(e){return Reflect.ownKeys(Gt(e))},set:function(e,t,n){var r=Oc(Gt(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Es(Gt(e),t),o=i==null?void 0:i[U];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(up(n,i)&&(n!==void 0||Mn(e.t,t)))return!0;Cs(e),Pt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Es(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Cs(e),Pt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Gt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ke(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ke(12)}},yr={};cn(Qr,function(e,t){yr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),yr.deleteProperty=function(e,t){return yr.set.call(this,e,t,void 0)},yr.set=function(e,t,n){return Qr.set.call(this,e[0],t,n,e[0])};var Lg=function(){function e(n){var r=this;this.O=_c,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(v){var N=this;v===void 0&&(v=a);for(var m=arguments.length,p=Array(m>1?m-1:0),y=1;y<m;y++)p[y-1]=arguments[y];return l.produce(v,function(w){var x;return(x=o).call.apply(x,[N,w].concat(p))})}}var u;if(typeof o!="function"&&Ke(6),s!==void 0&&typeof s!="function"&&Ke(7),un(i)){var c=Tc(r),f=_a(r,i,void 0),d=!0;try{u=o(f),d=!1}finally{d?mo(c):Ra(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return Ns(c,s),Ps(v,c)},function(v){throw mo(c),v}):(Ns(c,s),Ps(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===cp&&(u=void 0),r.D&&Fl(u,!0),s){var g=[],h=[];rt("Patches").M(i,u,g,h),s(g,h)}return u}Ke(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(f))})};var s,a,l=r.produce(i,o,function(u,c){s=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){un(n)||Ke(8),ln(n)&&(n=bg(n));var r=Tc(this),i=_a(this,n,void 0);return i[U].C=!0,Ra(r),i},t.finishDraft=function(n,r){var i=n&&n[U],o=i.A;return Ns(o,r),Ps(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!_c&&Ke(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=rt("Patches").$;return ln(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),_e=new Lg;_e.produce;_e.produceWithPatches.bind(_e);_e.setAutoFreeze.bind(_e);_e.setUseProxies.bind(_e);_e.applyPatches.bind(_e);_e.createDraft.bind(_e);_e.finishDraft.bind(_e);var fp=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ug=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},go=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},qg=Object.defineProperty,Hg=Object.defineProperties,Fg=Object.getOwnPropertyDescriptors,Mc=Object.getOwnPropertySymbols,Vg=Object.prototype.hasOwnProperty,Bg=Object.prototype.propertyIsEnumerable,bc=function(e,t,n){return t in e?qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Tr=function(e,t){for(var n in t||(t={}))Vg.call(t,n)&&bc(e,n,t[n]);if(Mc)for(var r=0,i=Mc(t);r<i.length;r++){var n=i[r];Bg.call(t,n)&&bc(e,n,t[n])}return e},Ts=function(e,t){return Hg(e,Fg(t))},Kg=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(u){i(u)}},s=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})};(function(e){fp(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,go([void 0],n[0].concat(this)))):new(t.bind.apply(t,go([void 0],n.concat(this))))},t})(Array);(function(e){fp(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,go([void 0],n[0].concat(this)))):new(t.bind.apply(t,go([void 0],n.concat(this))))},t})(Array);function fe(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Tr(Tr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var Wg="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Qg=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Wg[Math.random()*64|0];return t},Gg=["name","message","stack","code"],ks=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ic=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Xg=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Gg;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=fe(t+"/fulfilled",function(u,c,f,d){return{payload:u,meta:Ts(Tr({},d||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=fe(t+"/pending",function(u,c,f){return{payload:void 0,meta:Ts(Tr({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),s=fe(t+"/rejected",function(u,c,f,d,g){return{payload:d,error:(r&&r.serializeError||Xg)(u||"Rejected"),meta:Ts(Tr({},g||{}),{arg:f,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,f,d){var g=r!=null&&r.idGenerator?r.idGenerator(u):Qg(),h=new a,v;function N(p){v=p,h.abort()}var m=function(){return Kg(this,null,function(){var p,y,w,x,E,P,O;return Ug(this,function(b){switch(b.label){case 0:return b.trys.push([0,4,,5]),x=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:f,extra:d}),Zg(x)?[4,x]:[3,2];case 1:x=b.sent(),b.label=2;case 2:if(x===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return E=new Promise(function(z,X){return h.signal.addEventListener("abort",function(){return X({name:"AbortError",message:v||"Aborted"})})}),c(o(g,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:g,arg:u},{getState:f,extra:d}))),[4,Promise.race([E,Promise.resolve(n(u,{dispatch:c,getState:f,extra:d,requestId:g,signal:h.signal,abort:N,rejectWithValue:function(z,X){return new ks(z,X)},fulfillWithValue:function(z,X){return new Ic(z,X)}})).then(function(z){if(z instanceof ks)throw z;return z instanceof Ic?i(z.payload,g,u,z.meta):i(z,g,u)})])];case 3:return w=b.sent(),[3,5];case 4:return P=b.sent(),w=P instanceof ks?s(null,g,u,P.payload,P.meta):s(P,g,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&s.match(w)&&w.meta.condition,O||c(w),[2,w]}})})}();return Object.assign(m,{abort:N,requestId:g,arg:u,unwrap:function(){return m.then(Yg)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function Yg(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Zg(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Kl="listenerMiddleware";fe(Kl+"/add");fe(Kl+"/removeAll");fe(Kl+"/remove");var Dc;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Ig();const Jg=fe("questions/add",e=>({payload:{question:e}})),e0=fe("questions/remove",e=>({payload:{questionId:e}})),t0=fe("questions/update",(e,t)=>({payload:{questionId:e,...t}})),Wl=fe("questions/set",(e,t)=>({payload:{questions:e,shuffle:t}})),pp=fe("questions/shuffle",(e,t)=>({payload:{questions:e,shuffle:t}})),mp=fe("questions/answers/selectOne",(e,t)=>({payload:{questionId:e,answerId:t}})),n0=fe("questions/answers/unselectOne",e=>({payload:{questionId:e}})),yp=fe("questions/answers/unselectAll"),r0=fe("questions/answers/shuffleOne",(e,t,n)=>({payload:{questionId:e,question:t,shuffle:n}}));fe("questions/answers/shuffleAll",(e,t)=>({payload:{questions:e,shuffle:t}}));const i0=(e,t)=>{if(t.type===Jg.type)return[...e,t.payload.question];if(t.type===e0.type)return e.filter(n=>n.id!==t.payload.questionId);if(t.type===t0.type)return e.map(n=>n.id===t.payload.questionId?{...n,...t.payload}:n);if(t.type===Wl.type){const{shuffle:n,questions:r}=t.payload;return n?[...r].sort(()=>Math.random()-.5):[...r]}if(t.type===pp.type){const{shuffle:n,questions:r}=t.payload;if(!n){const i=e.reduce((o,s)=>({...o,[s.id]:s.answers}),{});return r.map(o=>({...o,answers:i[o.id]}))}return[...e].sort(()=>Math.random()-.5)}if(t.type===mp.type)return e.map(n=>n.id===t.payload.questionId?{...n,correct:n.answers.some(r=>r.correct&&r.id===t.payload.answerId),selectedId:t.payload.answerId,answers:n.answers.map((r,i)=>({...r,selected:r.id===t.payload.answerId}))}:n);if(t.type===n0.type)return e.map(n=>{var r;return n.id===((r=t==null?void 0:t.payload)==null?void 0:r.questionId)?{...n,answers:n.answers.map((i,o)=>({...i,selected:!1}))}:n});if(t.type===yp.type)return e.map(n=>({...n,selectedId:void 0,correct:void 0,answers:n.answers.map(r=>({...r,selected:!1}))}));if(t.type===r0.type){let{questionId:n,question:r,shuffle:i}=t.payload;return i?e.map(o=>{if(o.id===n){const s=[...o.answers];for(let a=s.length-1;a>0;a--){const l=Math.floor(Math.random()*(a+1));[s[a],s[l]]=[s[l],s[a]]}return{...o,answers:s}}return o}):e.map(o=>o.id===n?r:o)}return[]},hp={subject:"",questions:[],unbluredQuestion:"",sidebarOn:!1,testModeOn:!1,correctAnswers:!1,shuffleQuestions:!1,shuffleAnswers:!1,blurAnswers:!1};let Pi;const o0=new Uint8Array(16);function s0(){if(!Pi&&(Pi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Pi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Pi(o0)}const re=[];for(let e=0;e<256;++e)re.push((e+256).toString(16).slice(1));function a0(e,t=0){return(re[e[t+0]]+re[e[t+1]]+re[e[t+2]]+re[e[t+3]]+"-"+re[e[t+4]]+re[e[t+5]]+"-"+re[e[t+6]]+re[e[t+7]]+"-"+re[e[t+8]]+re[e[t+9]]+"-"+re[e[t+10]]+re[e[t+11]]+re[e[t+12]]+re[e[t+13]]+re[e[t+14]]+re[e[t+15]]).toLowerCase()}const l0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),$c={randomUUID:l0};function mt(e,t,n){if($c.randomUUID&&!t&&!e)return $c.randomUUID();e=e||{};const r=e.random||(e.rng||s0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return a0(r)}function qt({id:e,questionText:t,answers:n,image:r,imageAlt:i}){return{id:e||mt(),questionText:t,answers:n,get correctAnswers(){return this.answers.filter(o=>o.correct&&o.selected).length},image:r,imageAlt:i}}const u0=`

عرف . . . . الإرشاد الزراعي بأنه جهاز تعليمي غير مدرسي يتعلم فيه الكبار والشباب بالممارسة لمواجهةاحتياجاتهم وتسهيل حل مشكلاتهم
1
كيلس وهيرن
ناب
بيراد فيلد
شانج


#
الأهداف التي يمكن عن طريقها الوصو ل إلى الأهداف العامة فمثلاً هدف رفع الكفاءة الإنتاجية النباتية يتطلب رفع إنتاجية المحاصيل المختلفة
2
الأهداف الأساسية الشاملة
الأهداف التنفيذية
الأهداف العامة
الأهداف التأكيدية


#
عبارة عن أهداف محددة تهتم بالنواحي الاقتصادية والاجتماعية والأخلاقية الخاصة بالسكان الريفيين، ولكنها ترتبط بشكل مباشر بالإرشاد الزراعي
3
الأهداف الأساسية الشاملة
الأهداف التنفيذية
الأهداف العامة
الأهداف التأكيدية


#
تعتبر خصائص الأهداف الإرشادية كل مما يلي ما عدا
4
واضحة المعالم ومحددة
مشتركة البناء
تتواف ق مع نظام المجتمع
كسب ثقه جمهور المسترشدين


#
من مبادئ الإرشاد الزراعي كل ما يلي ما عدا
1
تطبيق المبادئ والأسس
وضع الأهداف الإرشادية المناسبة
البدء في العمل مع الزراع
مبدأ لا مركزيه الإدارة


#
أحد فروع المعرفة الذي يهتم بتنمية الخبرات والمعارف وقدرات المرأة الريفية هو
1
الاقتصاد المنزلي
علم الاقتصاد الزراعي
علم البيئة
علم الاجتماع الريفي


#
يساعد المرشد الزراعي على فهم الجماعات والعوامل التي تؤثر عليها وتدفعها الى العمل الفعال من خلال الطرق الإرشادية
4
علم الاقتصاد الزراعي
الاقتصاد المنزلي
علم البيئة
علم النفس


#
هي إرسال رسالة إلى المرسل تفيد استلام رسالته وفهمها
4
الاتصال
المستقبل
قناة الاتصال
التغذية الراجعة


#
كل مما يلي من أدوار الإرشاد الزراعي ما عدا
2
المساهمة في تنميه الموارد البشرية
البدء في العمل مع الزراع
توعيه المرأة الريفي ة
نشر وتبني المبتكرات


#
	يرتبط الاتصال . . . . باستخدام الأفراد مجموعة من الحركات
3
الاتصال اللفظي
مهارة الاستماع
الاتصال الغير اللفظي
مهارة الاتصال الكتابي


#
تعتمد مهارة . . . . علي نقل الرسالة بواسطة استخدام الكلمات مشافهة من قبل المرسل
1
مهارة التحدث
مهارة الاستماع
مهارة القرأه
نبرات الصوت


#
يعتمد الاتصال غير اللفظي على
4
مهارة الاتصال الكتابي
مهارة الاستماع
مهارة القرأه
نبرات الصوت




#
العوامل المؤثرة في الاتصال هي
4
مهارة التحدث
مهارة الاستماع
مهارة الاتصال الكتابي
الخبرة المشتركة


#
يقصد ب . . . . تقارب خبرات المرسل والمستقبل في موضوع الحديث
2
الكفاية اللغوية
الخبرة المشتركة
الكفاية الاتصالية
الضجة والتشويش


#
هي الظروف المادية والتقنية المحيطة بالموقف الاتصالي
1
التشويش
الكفاية الاتصالية
الخبرة المشتركة
الكفاية اللغوية


#
يقصد ب . . . . الموقف النفسي أو الحالة الشعورية التي يشعر بها كل من المرسل والمستقبل اتجاه بعضها بناء على خبرة سابقة
1
الافتراضات السابقة
الكفاية اللغوية
الخبرة المشتركة
الكفاية الاتصالية


#
يُعرف الذكاء . . . . أنه القدرة على معرفة الذات والتواصل معها.
3
الذكاء اللغوي
الذكاء الاجتماعي
الذكاء الذاتي
الذكاء الوجداني


#
هي المنطقة التي يعرفها الفرد على ذاته ويعرفها الآخرين عنه 
1
المنطقة المكشوفة
منطقة الأسرار
المنطقة المظلمة
المنطقة العمياء




#
من خصائص نمط الشخصية مدعي المعرفة أنه
1
يحتقر الآخرين
يشكوك إلي الآخرين
يقضي زمنا طويلا في التحدث
يفتقد إلي الثقة بالنفس


#
من صفات فريق العمل الفعال كل مما يلي ما عدا
4
تبادل المعلومات بين أعضاء الفريق
التمتع بدافعية عالية بالأداء الجاد
المساعدة والدفاع عن أعضاء الفريق
يعاملون الأخرين بتعا ل


#
هي ما تستطع بمفردها أن تنتقل وتوصل الرسالة الإرشادية
1
الطريقة الإرشادية
جميع ما سبق
المعينة الإرشادية
غير ذلك


#
هي تلك المعينات التي تعتمد على حاسة البصر في نقل، وتوضيح، وتفسير المعلومات، والأفكار.
1
المعينات البصرية
المعينات السمعية والبصرية
المعينات السمعية
غير ذالك


#
من طرق الاتصال بالجماعات
1
المسابقات
الملصقات
المتاحف
المعارض


#
تعتبر . . . . من طرق الاتصال بالأفراد
1
الزيارات الحقلية
المحاضرة
الندوة
الحلقة الدراسية




#
من مكونات الإرشاد الإلكتروني
3
الجانب المادي
الجانب البشري
أ، ب معا
غير ذلك


#
كل مما يلي من مواصفات الإرشاد الإلكتروني ما عدا
4
التأهل العالمي والمستمر
يعتمد المرشد علي استخدام التقنيات الحديثة
حصول المزارع علي المعلومات في أي وقت
البنيه التحتية للتنظيمات الإرشادية


#
من العوامل المؤثرة على استخدام الإرشاد الإلكتروني
3
رف ع كفاءة المرشد 
الشعور بالارتياح لدى المزارع
نوع التكنولوجيا المستخدمة
 الاستفاد ة من عنصر الوقت


#
الإرشاد الإلكتروني أهمية كبيرة تتمثل في
3
يعتمد المرشد على استخدام تقنيات الاتصال الحديثة
يتعلم المزارع عن طريق النشاط الذاتي والممارسة
يكون لها السبق في التنمية
 يسود في الدول المتقدمة


#
كل مما يلي من فوائد الإرشاد الإلكتروني ما عدا
4
مساعدة الزراع علي المشاركة
إمكانية الاتصال مع القيادات المحلية
الاستفادة من عنصر الوقت
التأهيل العالي والمستمر للمرشد الزراعي


#
يقدم الإرشاد . . . . نوع جديد من الثقافة وهي الثقافة الرقمية
1
الإرشاد الإلكتروني
الإرشاد التقليدي
 أ، ب معا
غير ذلك




#
كل مما يلي من عيوب الإرشاد الزراعي الإلكتروني ما عدا
1
التكاليف المادية المنخفضة
يتطلب بنية تحتية اتصاليه
ضياع حقوق النشر والملكية الفكرية
يحتاج لمراقبة المسترشدين أثناء القيام بالأنشطة التعليمية


#
هو انتقال المستحدثات الزراعية المناسبة والصالحة للتطبيق في الريف من المراكز البحثية ووصولها للريفيين في وقت زمني محدد
1
الانتشار
التبني
المستحدث
الانتباه


#
من صفات الفكرة المستحدثة
2
يتطلب بنية تحتية اتصاليه
انسجام الفكرة مع القيم السائدة
يكون لها السبق في التنمية
يسود في الدول المتقدمة


#
هي الدرجة التي يتم فيها تجريب المستحدث على نطاق ضيق
3
الميزة النسبية
انسجام الفكرة مع القيم السائدة
القابلية للتقسيم
درجة تعقيد الفكرة المستحدثة


#
هي الدرجة التي تتفوق بها الفكرة المستحدثة عن غيرها عن الأفكار السابقة .
1
الميزة النسبية
انسجام الفكرة مع القيم السائدة
القابلية للتقسيم
درجة تعقيد الفكرة المستحدثة


#
ثالث مراحل عملية التبني
4
مرحلة الوعي
مرحلة التجريب
مرحلة الاهتمام
مرحلة التقييم




#
مبدأ . . . . يضم جميع جوانب المشروع أو المجتمع أو الأنشطة
2
الواقعية
الشمول
التكامل
ترتيب الأولويات


#
مبدأ . . . . يقوم على إعادة ترتيب الحاجات والمشكلات
4
الواقعية
الشمول
التكامل
ترتيب الأولويات


#
من مزايا البرنامج الإرشادي المكتوب
4
يراعي اهتمامات المسترشدين
يهيئ الجو لاكتشاف القدرات
تحديد الحاجات والمشكلات
يساعد المؤسسات الاخرى علي تفهم مشكلات المنطقة


#
من خصائص البرنامج الإرشادي الجيد
2
يؤدي الى معرفة الاحتياجات التدريبية للعاملين
يهيئ الجو لاكتشاف القدرات
يؤدي الى توحد في الفهم بين كل العاملين والمشتركين
توجيه العاملين على تنفيذ ما ورد به من أهداف وإجراءات


#
البيانات . . . . توضح مدى استخدام الزراع للأساليب والأفكار الزراعية الجديدة
2
البيانات الاجتماعية
البيانات التكنولوجية
البيانات الاقتصادية
البيانات التشغيلية


#
تقوم . . . . على ترجمة بيانات الوضع الراهن إلى معلومات قابلة الاستعمال والاستفادة منها
1
تحليل الموقف
جمع البيانات
تحديد الحاجات والمشكلات
تحديد الأهداف




#
عبارة عن مقارنة بين وضعين هما وضع سابق ووضع راهن ويتم قياس التقدم الحادث في سلوك الزراع وأفكارهم
3
وضع خطة العمل
إعادة النظر في البرنامج
 تقدير مدى التقدم الحادث
 تنفيذ خطة العمل


#
هي عبارة عن الخطوة الأخيرة في العمل في البرامج الإرشادية
3
وضع خطة العمل
 تقدير مدي التقدم الحادث
 إعادة النظر في البرنامج
 تنفيذ خطة العمل


#
تتضمن خطة العمل تنفيذ البرنامج كل مما يلي ما عدا
4
المشاكل المراد معالجتها
 وصف موجز لنوع العمل
 الأهدا ف المراد تحقيقها 
تقييم الفرد للأخرين


#
يمكن تقسيم التقييم وفقا للوقت إلى
1
التقييم القبلي
تقييم الفرد
التقييم الذاتي
تقييم المجموعة


#
التقييم . . . . هو الذي يحدث أثناء تنفيذ وتطبيق البرنامج
1
التقييم البنائي
 التقييم الشخصي
 التقييم الأولي
 التقييم النهائي


#
هو ذلك النوع من التقييم الذي يتم فيه تحديد الاحتياجات التعليمية وتحديد المستوي الذي يمكن أن تبدأ منه عملية التعلم
1
التقييم الأولي
التقييم الشخصي
التقييم البنائي
التقييم النهائي




#
هو التقييم الذي يهتم بقياس الأهداف العامة
4
التقييم الأولي
التقييم الشخصي
التقييم البنائي
التقييم النهائي


#
تشمل خطوات عملية التقييم الإرشادي
1
تحديد المشكلة
تقييم الفرد للأخرين
وصف موجز لنوع العمل
تحديد نقاط الضعف واقتراح التحسينات


#
تعتبر . . . . أقل المستويات التعليمية دقة للتقييم الإرشاد ي
1
الملاحظة اليومية العرضية
دراسة الحالة
الملاحظة المنتظمة
الدراسات الإرشادية


#
يسمى بالتقييم المتزامن، والتقييم التراكمي اللاحق ، والتقييم التكويني
2
تقييم ذاتي
تقييم نهائي
تقييم قبلي
تقييم مستمر


#
 تجمع بين أكثر من نوع واحد من طرق معاملة الرسالة
1
طرق مختلطة
طرق إيضاحيه
طرق كتابيه
طرق كلامية


#
كل مما يلي من مجالات التقييم الإرشادي ما عدا
4
تقييم الجهاز الإرشادي 
تقييم تخطيط البرنامج الإرشادي
 تقييم الطرق والوسائل 
تقييم الفرد للأخرين




#
يمكن تقسيم التقييم وفقا للقائم بعملية التقييم
1
تقييم ذاتي
 تقييم نهائي
 تقييم قبلي
 تقييم مستمر


#
يمكن تقسيم التقييم وفقا للغرض إلي
4
تقييم مستمر 
تقييم قبلي
 تقييم بعد ي 
تقييم نهائي او شخصي


#
يفضل الاعتماد عل ى مقياس . . . . في حالة قصور ميزانية الإرشاد الزراعي
2
معدل الاتصال 
التكلفة النسبية للتبني 
معدل التبني
 جميع ما سبق


#
التحدث بلغة متخصصه لا يتقنها المرسل أو المستقبل
2
الغموض اللغوي
 الغموض التقني
 الغموض الثقافي
 غموض المعني


#
كل مما يلي من عوائق وصول المعنى ما عدا
3
الغموض 
عدم الملائمة
 حال المستقبل 
الأحكام المسبقة


#
من عوائق وصول المعنى من جانب المرسل
4
الأحكام المسبقة 
الاستدلال الزائف 
التعميم الخاطئ 
الاستطراد




#
  يهدف إلى الكشف عن مواطن القوة والضعف أثناء و بعد الأداء
4
تقدير الذات 
تعزيز الذات
 لوم الذات 
نقد الذات


#
القدرة على ملاحظة الفروق بين الأشخاص في أمزجتهم وطبائعهم و دوافعهم ومقاصدهم
2
الذكاء العاطفي 
الذكاء الاجتماعي 
الذكاء اللغوي 
الذكاء الذاتي


#
القدرة على تنظيم حالة المرء النفسية ومنع الآسي أو الألم من شل القدرة على التفكير ، والقدرة على التعاطف والشعور بالأمل
1
الذكاء العاطفي 
الذكاء الاجتماعي 
الذكاء اللغوي 
الذكاء الذاتي


#
معلومات لا يعرفها الفرد عن ذاته ، ولكنها ظاهرة للآخرين
1
المنطقة العمياء
 منطقة الأسرار
 المنطقة المكشوفة 
المنطقة المجهولة


#
هي منطقة غير معروفة للفرد ولا للآخرين ، وتمثل جميع أبعاد شخصياتنا
4
المنطقة العمياء 
منطقة الأسرار 
المنطقة المكشوفة 
المنطقة المجهولة


#
كل مما يلي من تصنيف نمط الإدراك ما عدا
4
السمعي 
البصري 
الحسي 
الكتابي




#
كل مما يلي من تصنيف السلوك التفاعلي ما عدا . . . . 
4
العنيد 
الثرثار 
مدعي المعرفة 
العصبي


#
عملية تتم بين طرفين أو أكثر ويتم من خلالها تبادل الآراء والأفكار حول موضوع معين دون وجود عوائق
1
الحوار 
الاتصال 
الاستماع 
الاستعلاء


#
يحاول أن يتصيد سلبيات المتحدث من خصائص
2
العنيد 
المتعالي 
مدعي المعرفة 
الباحث عن الأخطاء


`,c0=e=>{let[,t,n]=/^!\[(.*)\]\((.*)\)$/.exec(e)||[];return[!!n,t,n]},d0=u0.split("#").map((e,t)=>{var u;let n=e.trim().split(`
`).filter(c=>c.trim().length>0),r=n.shift()||"failed to parse question",i=Number((u=n.shift())==null?void 0:u.trim()),[o,s,a]=c0(n[0]);o&&n.shift();const l=n.map((c,f)=>({id:mt(),text:c,correct:f+1===i}));return qt({questionText:r,answers:l,image:a,imageAlt:s})}),f0=`
بصفه عامة يمكن القول أن الاقتصاد هو
1
علم إدارة الموارد الاقتصادية
علم إدارة الأزمات
علم إدارة الموارد الاجتماعية
علم إدارة الموارد الاجتماعية والأزمات
#


يبحث علم الاقتصاد تفسير سلوك الفرد فيما يتعلق باستخدام المواد الاقتصادية بهدف تحقيق
3
الرفاهية الاجتماعية للمجتمع
الاستقرار السياسي
الرفاهية الاقتصادية للمجتمع
الاستقرار الاقتصادي
#

من وحدات القرار الاقتصادي
3
الأسر
الخدمات العامة
المنشآت التجارية
جميع ما سبق

#

يمكن التمييز بين استخدامات للموارد في
2
التجارة
الاستهلاك والإنتاج
التصدير
غير ذلك
#


البيانات الاقتصادية . . . . وذلك لتأثيرها بالبعد الزمني
4
ثابتة
مستقرة
متحركة
ليست ثابتة
#

البيانات الاقتصادية تتأثر ب
1
المعطيات النفسية والاجتماعية
بالمعطيات الاجتماعية
بالمعطيات النفسية
بالمعطيات الداخلية
#

من طبيعة التحليل الاقتصادي
3
بعض العوامل الأخرى ثابتة
بعض العوامل الأخرى متغيرة
بقاء كافة العوامل الأخرى على حالها
كافة العوامل الأخرى متغيرة
#
هو  Model النموذج
2
علاقة بين عوامل مختلفة
ذلك النظام من العلاقات بين مجموعة المتغيرات لبيان ظاهرة معينة
علاقة بين عناصر الإنتاج
علاقات متعددة ومختلفة
#
المتغيرات الداخلية هي
1
التي تتحدد من داخل النموذج
التي تتحدد من خارج النموذج
تلك التي تؤثر في النموذج ولا تتأثر
يتحدد خارج علاقات النموذج
#
المتغيرات الخارجية هي
4
التي تتحدد داخل علاقات النموذج
التي تؤثر بالنموذج وتتأثر به
التي يتحدد من داخل النموذج
تلك التي تؤثر في النموذج ولا تتأثر به
#
السياسة الاقتصادية هي
1
مجموعة الأهداف والأساليب والبرامج التي يلجأ اليها المجتمع بغية معظمة الرفاهية الاقتصادية
مجموعة الوسائل والإجراءات التي يلجأ اليها المجتمع بغية تحقيق الاستقرار السياسي
مجموعة الوسائل التي يلجأ اليها المجتمع بغية تحقيق الاستقرار الاقتصادي
مجموعة الأهداف والأساليب والبرامج التي يلجأ اليها المجتمع بغية معظمة الإنتاج
#
السياسة الزراعية هي
1
ذلك الشطر من السياسة الاقتصادية الذي يجري تطبيقه في القطاع الزراعي من البنيان الاقتصادي القومى
ذلك الشطر من السياسة الاقتصادية الذي يجري تطبيقه في قطاع الخدمات من البنيان الاقتصادي القومى
ذلك الشطر من السياسة الاقتصادية الذي يجري تطبيقه في القطاع الصناعي من البنيان الاقتصادي القومى
ذلك الشطر من السياسة الاقتصادية الذي يجري تطبيقه في المجتمع
#
من أهداف السياسة الزراعية
3
تناقص الدخل المزرعي
ثبات الأحوال الاجتماعية
زيادة الكفاءة الاقتصادية
انخفاض الكفاءة
#
تقاس الكفاءة الاقتصادية ب
1
أسعار وكميات السلع المنتجة منسوبة الي أسعار وكميات الموارد المختلفة
أسعار السلع المنتجة
كميات السلع المنتجة
كميات السلع المنتجة منسوبة الي أسعار السلع المنتجة
#
تعني الكفاءة الاقتصادية القصوى
3
جميع الموارد المستخدمة ليست في أحسن استخدام لها
تناقص الموارد المستخدمة
جميع الموارد المستخدمة في أحسن استخدام لها
كفاءة الموارد المستخدمة

#
الزارعة غالبا ما تتميز ب
1
وجود فائض في العمال الزراعيين
وجود فائض في العمال الصناعيين
عدم وجود فائض في العمال الزراعيين
وجود توازن بين حجم القوي العاملة الواجب وجودها والموجودين فعلا
#
يعتبر متوسط الدخل في الزراعة
4
مساوي لبقية قطاعات الاقتصاد الأخرى
أكبر من مستواه من مثله في بقية قطاعات الاقتصاد الأخرى
لا يقارن ببقية قطاعات الاقتصاد الأخرى
أقل من مستواه من مثله في بقية قطاعات الاقتصاد الأخرى
#
تغير الدخل المزرعي من عام لأخر ناتج عن
4
أسعار المحاصيل الزراعية
التغيرات في العرض والطلب
التغيرات السنوية التي تحدث في الإنتاج نفسه
جميع ما سبق
#
لرفع وتثبيت الدخل المزرعي تتبع السياسة الزراعية وسائل عديدة منها
3
البعد عن الإرشاد الزراعي
عدم تعاون الزراعيين مع بعض
دراسة وتحليل أسعار المحاصيل الزراعية
عدم صرف معونات للمزارعين
#
مثال للأهداف الاجتماعية والسياسية البعيدة الأثر للسياسية الزراعية
1
تطور خدمة المجتمع والخدمة الصحية الريفية
عدم تحسين فرص التعليم
البعد عن الإرشاد الزراعي
عدم صرف معونات للمزارعين

#
من وسائل تحقيق أهداف السياسة الزراعية
1
إنهاء الجهاز السعري القائم
التخطيط السليم
التوجيه السليم
غير ذلك
#
لتحقيق هدف عدالة توزيع الدخل من خلال
2
التنظيم السليم
تعديل الضرائب والإعانات والمنح
إنهاء الجهاز السعري القائم
التوجيه السليم
#
قيام جهاز سعري يحقق كفاءة الإنتاج عن طريق
3
التنظيم السليم
التخطيط السليم
إجراءات التوزيع المباشر
الضبط السليم
#
السياسة الزراعية تستهدف
4
عدالة توزيع الدخل داخل قطاع الزراعة
تحسين الأحوال الاجتماعية
عدم زيادة الكفاءة الاقتصادية
أ، ب معا
#
من إجراءات تحسين الأحوال الاجتماعية
1
تطور وسائل الترفيه
معالجة السياسة الزراعية
تقييد حرية الفرد
زيادة الكفاءة

#
الفرق بين النظرية الاقتصادية والسياسة الاقتصادية أن النظرية الاقتصادية
3
تقدم تفسيرا لتأثيرات الظواهر الاقتصادية
تخدم في المجال الرياضي
تخدم في مجال تفسير الظواهر الاقتصادية
غير ذلك
#
تعد نظرية السياسة الاقتصادية الحرة
2
تجميعا لآراء الاقتصاديين الفرنسيين
تجميعا لآراء الاقتصاديين الأمريكيين
تجميعا لآراء الاقتصاديين الإيطاليين
تجميعا لآراء الاقتصاديين المصريين
#
الاقتصاديين الأمريكيين نادوا ب
1
مبدأ حرية المنافسة في الحياة الاقتصادية
مبدأ حرية المنافسة في الحياة الاجتماعية
مبدأ حرية المنافسة في الحياة الليبرالية
جميع ما سبق
#
يجمع بين نظرية السياسة الاجتماعية ونظرية السياسة الاقتصادية الحكومية
4
مفهوم تعديل الأسعار
مفهوم إعادة توزيع الدخول فقط
مفهوم إعادة توزيع الدخول والأسعار
مفهوم إعادة توزيع الدخول والثروات
#
نظرية السياسة الاجتماعية
2
تستطيع تقديم الدليل علي تحقيق الرفاهية المثلي لأفراد المجتمع
لا تستطيع تقديم الدليل علي تحقيق الرفاهية المثلي لأفراد المجتمع
تستطيع تقديم جانبا من الرفاهية المثلي
لا تستطيع تقديم جانبا من الرفاهية المثلي


#
سياسة النمو الاقتصادي هي
4
سياسات تخفيض أو ترشيد الاستهلاك
سياسات زيادة الإنتاج
سياسات حفز الاستثمار
جميع ما سبق
#
يقصد بالنمو الاقتصادي
3
الزيادة في الدخل الجاري
الزيادة في الدخل القومي الحقيقي
الزيادة في الدخل الفردي الحقيقي
غير ذلك
#
يصاحب التنمية الاقتصادية
1
تغيير بنياني للاقتصاد موضع الاعتبار
تغير بنياني للاقتصاد موضع الاعتبار
تغير في الدخل الجاري
غير ذلك
#
حسب قانون ساي في راي الكلاسيكيين
3
الطلب يحدد العرض 
الطلب ليس له علاقة بالعرض
العرض يحدد الطلب
العرض منفصل عن الطلب
#
وفقا لأراء كينز في التوظيف الكامل فان
1
الطلب هو الذي يحدد العرض
العرض منفصل عن الطلب
العرض هو الذي يحدد الطلب
الطلب ليس له علاقة بالعرض

#
عند كينز هو الذي يتحكم فيEffective Demand الطلب الفعال 
4
الإنتاج
مستويات التوظف
الدخل القومي
جميع ما سبق
#
تعتمد أفكار النيو كلاسيك على
4
تجانس الإنتاج وحده
اختصار عناصر الإنتاج الي العمل ورأس المال
الاهتمام بنظريات توزيع الدخل
جميع ما سبق
#
طبقا للنظرية الكلاسيكية يتحدد سعر الفائدة في السوق
1
بتعادل الطلب على الاستثمار وعرض القروض
بتعادل الطلب على الادخار وعرض النقود
بتعادل قوي الطلب مع قوي العرض
بتعادل الطلب على الاستهلاك وعرض النقود
#
تضخم الطلب يحدث عندما
1
الطلب الكلي أكبر من الإنتاج
الإنتاج أكبر من الطلب الكلي
الطلب الكلي يتساوى مع الإنتاج
الإنتاج أصغر من الطلب الكلي
#
تضخم التكاليف يطلق عليه
1
تضخم البائعين
تضخم المنتجين
تضخم المشترين
التضخم الناشئ عن دفع التكاليف الي أسفل

#
يمكن تتبع آثار مشكلة التضخم علي
3
معدلات زيادة الناتج المحلي
معدلات زيادة الإنتاج
معدلات زيادة الناتج القومي
معدلات زيادة الاستهلاك
#
أول المستفيدين من التضخم هم
2
الشركات الحكومية
الشركات المنتجة الخاصة
الأفراد
غير ذلك
#
من الأثار السلبية للتضخم
3
يزيد من القوة الشرائية للدخل
ليس له علاقة بالدخل
يقلل من القوة الشرائية للدخل
يقلل منالاستثمار
#
ينشأ الأثر السلبي للتضخم أساسا بسبب
1
التفاوت الكبير بين معدلات الزيادة في أسعار السلع المختلفة
تحسن وضع قطاع الأعمال
يحسن مركز أصحاب الثروة
يحسن مركز المدينين
#
من إثر التضخم على توزيع الناتج
3
تدهور مركز أصحاب الثروة من العقارات
تدهور وضع قطاع الأعمال لزيادة اربحيتهم
تحمل أصحاب الثروة النقدية لعبء انخفاض قيمتها الحقيقية
تدهور مركز المدينين

#
نتيجة لمشكلة البطالة يحدث
1
قصور الإنتاج
زيادة الطلب الكلي
زيادة عرض موارد الإنتاج
زيادة الطلب النقدي
#
من أثر البطالة على محور الإنتاج . . . . 
2
زيادة الناتج الحقيقي
حدوث قصورا في عملية التراكم الرأسمالي
عدم حدوث قصورا في عملية التراكم الرأسمالي
عدم حدوث قصورا في تكوين المدخرات
#
من أثر البطالة على محور عرض موارد الإنتاج . . . . 
4
انخفاض معدلات الإنتاجية
انخفاض معدلات الأجور
ثبات معدلات الإنتاجية
زيادة معدلات الأجور
#
أثبت فيليبس أن انخفاض معدلات البطالة يؤدى الى . . . . 
1
زيادة معدلات الأجور
انخفاض معدلات الأجور
انخفاض معدلات التضخم
تدهور معدلات الأجور
#
أثبت فيليبس أن العلاقة بين معدلي زيادة الأجور والبطالة بالمملكة المتحدة
1
علاقة عكسية
علاقة تبادلية
علاقة طردية
لا يوجد علاقة
#

من أهداف السياسة الزراعية
1
زيادة وثبات الدخل المزرعى
#

النموذج هو
1
ذلك النظام من العلاقات بين مجموعة المتغيرات لبيان ظاهرة معينه
#
المتغيرات الداخلية هي
1
تلك التي تتحدد من داخل النموذج، أي تؤثر فيه وتتأثر به
#
المتغيرات الخارجية هي
1
تلك التي تؤثر في النموذج ولا تتأثر به بمعنى إنها تتحدد خارج علاقات نموذج
#
الاقتصاد هو
1
علم إدارة الموارد الاقتصادية مشتملة على المورد البشرى كعنصرإنتاج من ناحية وكعنصر مستهدف رفاهيته من ناحية أخرى
#
السياسة الزراعية هي
1
مجموعة الأهداف والأساليب والبرامج والإجراءات التي يلجأالمجتمع إلى طبيقها في القطاع الزراعي بغية معظمة رفاهيته الاقتصادية
#
السياسة الاقتصادية هي
1
مجموعة الأهداف والأساليب والبرامج والوسائل والإجراءات التي يلجأ إليها المجتمع بغية معظمة الرفاهية الاقتصادية لمختلف أفراد ذلك المجتمع
#
تعنى الكفاءة الاقتصادية لقصوى أن
1
جميع الموارد مستخدمة في أحسن استخدام لها وانه يمكن بإحداث تغيير في طريقة استخدامها الحصول على زيادة في الإنتاج
#
سياسة النمو الاقتصادي
1
هي تلك البرامج والإجراءات التي تتخذها الحكومات لزيادة معدل النموالاقتصادي
#
التنمية الاقتصادية
1
هي تحقيق زيادة سريعة تراكمية ودائمة في الدخل الفردي الحقيقي عبر فترة ممتدة من الزمن
#
النمو الاقتصادي
1
الزيادة في الدخل الفردي الحقيقي
#
التوظيف الكامل عند الاقتصاديين الكلاسيك هو
1
حجم العمالة التي يحققها تعادل كل من الطلب على العمل مع عرض العمل في كل سوق على انفراد
#
سياسة توزيع الدخل عند آدم سميث هي
1
جزء من عمليات الجهاز السعري الذي يتحدد أساسا من خلال نظرية تكاليف الإنتاج
#
تشرح النظرية الكينزية في توزيع الدخل
1
عملية توزيع الدخل من خلال القدرة الادخارية لكلا المجموعتين من عناصر الإنتاج المستقبلين للجزء الأكبر من الدخل القومي
#
يعرف التضخم بأنه
1
الارتفاع المستمر في المستوى العام للأسعار

`,p0=f0.split("#").map((e,t)=>{var s;let n=e.trim().split(`
`).filter(a=>a.trim().length>0),r=n.shift()||"failed to parse question",i=Number((s=n.shift())==null?void 0:s.trim());const o=n.map((a,l)=>({id:mt(),text:a,correct:l+1===i}));return qt({questionText:r,answers:o})}),m0=`

هي وسائل وأدوات غير موجودة في المجتمع أو برامج غير موجودة تصلح للمجتمع
1
البرامج الإنشائية
البرامج الإحصائية
البرامج الإصلاحية
البرامج التنفيذية


#
هي الوسائل والأدوات الموجودة الحالية والتي يجرى عليها عمليات الإصلاح
3
البرامج الإنشائية
البرامج الإحصائية
البرامج الإصلاحية
البرامج التنفيذية


#
لتحقيق الرفاهية الاقتصادية والتقدم لابد أن يحتفظ المجتمع بأكبر قدر من المعادن النفسية
1
المذهب الفكري التجارى
الاتجاه الحر
الاتجاه التعاوني
الاتجاه الحر ذو الطابع الاشتراكي



#
سبب المشاكل على الكرة الرضية هي السعي وراء الربح والبيع بسعر التكلفة (إلغاء النقود (
3
المذهب الفكري التجارى
الاتجاه الحر
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكى



#
قطاع الزراعة هو الأساس لتحقيق الرفاهية الاقتصادية، ويجب أن يكون هو القطاع الوحيد المنتج
2

المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكى



#
يرون أن تدخل الدولة في الحياة الاقتصادية يكون خيراً ونادوا بضرورة التدخل الحكومي في الأعمال والشئون الاقتصادية والأشراف على إدارة المشروعات الكبرى وخصوصا التي تميل إلى الاحتكار في مجال النشاط الفردي
4
المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكى



#
تستهدف تقليل الفوارق بين الطبقات وتشمل برامج تستهدف نقل الدخل من الطوائف الأغنى إلى الطوائف الأفقر عن طريق (الزكاه، الضمان الاجتماعي، معاش)
1
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية



#
تضم مجموعة من القواعد تلُزم الأفراد عند ممارستهم النشاط الإنتاجي ( كل فرد له حقوق وعلية واجبات)
2
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية
 



#
هي قصيرة الأجل تحدث تغيرات بسيطة في ميزان المدفوعات أو العمالة أو التوازن النقدي وهي تعديلات جزئية قطاع أو أكثر
3
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية



#
سياسات في المدى القصيرة وتهدف إلى إحداث تغيير جزئي (طبيعي) في التركيب الاجتماعي الموجود في المجتمع
4
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة النوعية



#
سياسات طويلة الأجل تهدف لإحداث تعديل كمي أو نوعي في المتغيرات (المقومات) الرئيسي ة الموجودة في المجتمع، والهدف منها تحقيق الاستقرار الاقتصادي
4
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية


#
السياسة الإصلاحية
1
هو الدخل الذي يأخذ في الاعتبار مستويات الأسعار
الدخل الحقيقي
الدخل النقدي
الدخل التوازني
الدخل القومي







#
هي مجموعة البرامج الإنشائية والإصلاحية التي يجرى تنفيذها في مجال القطاع الزراعي بهدف تحقيق الرفاهية الاقتصادية لسكان القطاع الزراعي
1
السياسة التوزيعية
السياسة التنظيمية
السياسة الكمية
السياسة الاقتصادية الزراعية



#
السيطرة المباشرة على السعر المزرعى للمنتجات المحلية وكذلك فرض ضرائب على صادرات السلع الزراعية
3
السياسة التوزيعية
السياسة التنظيمية
التدخل الحكومي المباشر
التدخل الحكومي غير المباشر



#
استخدام سياسة سعر الصرف للتأثير على الصادرات الزراعية
4
السياسة التوزيعية
السياسة التنظيمية
التدخل الحكومي المباشر
التدخل الحكومي غير المباشر




#
هو تعادل الأنفاق الكلى مع الناتج الكلى
3
الدخل الحقيقي
الدخل النقدي
التوازن
الدخل القومى




#
هو مختلف التوليفات التي تحقق نفس القدر من الإنتاج
3
منحنيات السعر
منحنى المنفعة
منحنى الناتج المتماثل
منحنى الطلب




#
هي عبارة عن دالة في عناصر الإنتاج
1
دالة الإنتاج الزراعى
دالة التكاليف الزراعى
دالة الدخل
دالة السعر



#
هو طريقة كمية لحل مشاكل الوحدة الإنتاجي ة كاختيار التوليفة المثلى من منتجاتها المعظمة للربح أو المدنية للخسارة(التكاليف)
1
نموذج البرمجة
نموذج النقل
نموذج التوازن
نموذج تحليل المخرجات والمدخلات 





#
عبارة عن جدول للمدخلات وللمخرجات يعتمد على إعطاء وصفا للحسابات القومية الاجتماعية وتسجيلاً كاملاً للمشتريات أو مبيعات مختلف قطاعات الاقتصاد القومي المكونة له
4
نموذج البرمجة
نموذج النقل
نموذج التوازن
نموذج تحليل المخرجات والمدخلات 



#
دور الأسعار الزرعية في القطاع الزراعي
3
توجيه الاستهلاك
توجيه الإنتاج
A, B العباره
اختيار التوليفة المثلى




#
يتوسع الزراع في إنتاج السلع الأكث راربحية بينما يقللون من السلع الأقل أربحية
2
توجيه الاستهلاك
توجيه الإنتا ج
توزيع الدخل
التأثير على الإنتاج الزراعي



#
العمل على زيادة السلع البديلة
1
توجيه الاستهلاك
توجيه الإنتاج
توزيع الدخل
التأثير على الإنتاج الزراعي



#
يؤثر مستوى الأسعار الزراعية على توزيع الدخل القومي بين القطاع الزراعي وغيره من القطاعات
3
توجيه الاستهلاك
توجيه الإنتاج
توزيع الدخل
التأثير على الإنتاج الزراعى



#
تتدخل الدولة لتحديد الأسعار في حالة وجود احتكار لسلعة ما أو خدمة لتحديد السعر وجعل السوق سوق منافسة كاملة
1
التحديد المباشر للأسعار
التحكم في الإنتا ج
السيطرة على توزيع السلع
توجيه الاستهلاك


#
تحديد المساحة الأرضية، والغرض منه هو تحديد الإنتاج من سلعة معينة أو قد يكون في نفس الوقت تدعيم الإنتاج من سلعة أخرى
2
التحديد المباشر للأسعار
التحكم في الإنتاج
السيطرة على توزيع السلع
توجيه الاستهلاك



#
التحكم في مستلزمات الإنتاج مثل الأسمدة – المبيدات – التقاوي
2
التحديد المباشر للأسعار
التحكم في الإنتاج
السيطرة على توزيع السلع
توجيه الاستهلاك



#
من طرقها السيطرة على الصادرات والواردات
3
التحديد المباشر للأسعار
التحكم في الإنتاج
السيطرة على توزيع السلع
توجيه الاستهلاك



#
هو تحقيق الاستقرار الزراعي للمزارع عن طريق تقليل التقلبات التي تحدث للأسعار والدخول المزرعية
1
هدف السياسة السعرية
هدف السياسة النقدية
هدف السياسة التوزيعية
هدف السياسة المالية



#
أهداف تدخل الدولة في السياسة التسويقية الزراعية
1
الحد من تعدد الوسطاء
العمل زيادة التكاليف التسويقية
زيادة عدد الوسطاء
زيادة الفاقد



#
أي التوزيع العادل للناتج المتحصل عليه أي إعطاء كل ذي حق حقه مهما تباين الحقوق
1
الكفاءة التوزيعية
الكفاءة الديناميكية
الكفاءة الاستاتيكيه
الكفاءة



#
الإنتاج المتحصل عليه يعكس تفضيلات أفراد المجتمع بصفى عامة الى جانب أنه يعكس الإمكانيات الفنية المتاحة لاستخدام الموارد
3
الكفاءة التوزيعية
الكفاءة الديناميكية
الكفاءة الاستاتيكيه
الكفاءة




#
ويتصل بها كافة مشاكل توازن الاقتصاد الكلى وإدارته خاصة مشكلتي التضخم وعجز ميزان المدفوعات وتتحقق إذا ماتم التوصل الى نوع من التوازن بين كل من الطلب الكلى والعرض الكلى لاقتصادما
2
الكفاءة التوزيعية
الكفاءة الديناميكية في المدى القصير
الكفاءة الاستاتيكيه
الكفاءة الديناميكية في المدى الطويل



#
ويتصل بها المشاكل التي تعوق سرعة انتقال منحنى الإمكانيات الإنتاجية للمجتمع بمرور الوقت، والذي يتأثر عاملين رئيسيين هما (معد ل الاستثمار، وإنتاجية هذا الاستثمار)
4
الكفاءة التوزيعية
الكفاءة الديناميكية في المدى القصير
الكفاءة الاستاتيكيه
الكفاءة الديناميكية في المدى الطويل




#
أسس نجاح السياسة الاقتصادية
2
عدم وجود سلطة تنفيذية
وجود سلطة تنفيذية
إهمال بعض المتغيرات الاقتصادية الكلية
عدم استمرار متابعة تقييم السياسة الاقتصادية



#
أسس نجاح السياسة الاقتصادية
2
عدم وجود سلطة تنفيذية
استمرار متابعة تقييم السياسة الاقتصادية
إهمال بعض المتغيرات الاقتصادية الكلية
عدم استمرار متابعة تقييم السياسة الاقتصادية



#
هو عبارة عن منحنى يوضح مستوى التدخل للدولة في النشاط الاقتصادي لتحقيق الرفاهية الاقتصادية
1
نموذج الرفاهية الأمثل
نموذج الرضا الأمثل
نموذج الطلب
نموذج التوازن



#
وعبارة عن نموذج يحدد المنطقة أو الحدود الخاصة بالإنتاج في ظل القيود الاقتصادية والاجتماعية
2
نموذج الرفاهية الأمثل
نموذج الرضا الأمثل
نموذج الطلب
نموذج التوازن



#
إلغاء نظام التوريد الإجباري وتحرير أسعار وتسويق الحاصلات الزراعية
3
السياسة التوزيعية
السياسة التنظيمية
الإصلاح الاقتصادي
السياسة النوعية



#
إلغاء الدعم على مستلزمات الإنتاج، بهدف الحد من عجز الموازنة العامة ويتم ذلك تدريجيا وفق خطة زمنية
3
السياسة التوزيعية
السياسة التنظيمية
الإصلاح الاقتصادي
السياسة النوعية



#
التحول من التخطيط المركزي (نظام الدورة الزراعية الإلزامية) الى التخطيط التأشيرى (توقعات)
3
السياسة التوزيعية
السياسة التنظيمية
الإصلاح الاقتصادي
السياسة النوعية



#
نظام الدورة الزراعية الإلزامية يوجد في
1
التخطيط المركزى
التخطيط التأشيري
البحث والإرشا د
السياسة النوعية



#
قصر دور البنك الرئيسي للتنمية والائتمان الزراعي تدريجيا على تمويل الأنشطة الزراعية هي أحد مكونات الإصلاح الاقتصادي وهي
4
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
إجراء تعديلات تشريعية تفيد تنظيم العلاقة بين أطراف التعامل في النشاط الزراع ي مثل )قانون المالك والمستأجرهي أحد مكونات الإصلا ح الاقتصادي وهي
4
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
إصلاح القطاع العام وتنمية القطاع الخاص هي أحد مكونات الإصلاح الاقتصادي وهي
4
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
تشجيع القطاع الخاص على استصلاح وتملك الأراضي والاستزراع وإلغاء القيود في مجال استيراد وتصدير الحاصلات البستانية هي أحد مكونات الإصلاح الاقتصادي وهي
3
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي


#
تحرير سعر الصرف هي أحد مكونات الإصلاح الاقتصادي وهي
3
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
الغاء نظام التوريد الإجباري وتحرير أسعار وتسويق الحاصلات الزراعية هي أحد مكونات الإصلاح الاقتصادي
2
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
من الغاء الدعم على مستلزمات الإنتاج هي أحد مكونات الإصلاح الاقتصادي وهي
2
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
التحول من التخطيط المركزي (نظام الدور ة الزراعية الإلزامية) الي التخطيط التاشيري هي أحد مكونات الإصلاح الاقتصادي وهي
2
تعزيز دور القطاع الحكومي
تحرير أسواق المدخلات والمخرجات
تعزيز دور القطاع الخاص
الإصلاح المؤسسي والتشريعي



#
يعتقدون في إصلاح نواحي الخلق استنادا الى العادات والتقاليد والأخلاق التي ينادي بها الدين (الإصلا ح الأدنى للمجتمع تمهيدا لإصلاحه اقتصاديا)
4
المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الديني



#
ينادون بإحلال الملكية الاجتماعية محل الملكية الفردية
4
المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاوني
الاتجاه الحر ذو الطابع الاشتراكي ( الماركسي)








#
ينادون بالتدخل الحكومي لأقصى درجات التدخل (المجتمع يستولي على جميع الموارد) 
4
 المذهب الفكري التجارى
الاتجاه الحر من الطبيعيين
الاتجاه التعاونى
الاتجاه الحر ذو الطابع الاشتراكي ( الماركسي)



#
هي زيادة الدخل الفردي الحقيقي على مر الزمن
1
الرفاهية الاقتصادية
الدخل النقدي
الدخل التوازنى
الدخل القومى



#
تنقسم السياسة الاقتصادية من حيث طبيعة الأداء
1
السياسة التوزيعية
السياسة التشريعية
السياسة الكمية
السياسة النوعية



#
تنقسم السياسة الاقتصادية من حيث طبيعة الأداء
1
السياسة التنظيمية
السياسة التشريعية
السياسة الكمية
السياسة النوعية



#
تنقسم السياسة الاقتصادية من حيث حجم الأداء
4
السياسة التنظيمية
السياسة التشريعية
السياسة التوزيعية
السياسة النوعية



#
تنقسم السياسة الاقتصادية من حيث حجم الأداء
4
السياسة التنظيمية
السياسة التشريعية
السياسة التوزيعية
السياسة الكمية



#
تتعادل قوى الادخار المخطط مع الاستثمار المخطط
1
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة





#
تعادل عرض النقود مع الطلب عليها
2
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة



#
تعادل قوى العرض والطلب على هذه السلعة
4
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة



#
تعادل قوى عرض العمل والطلب عليه
3
توازن الدخل
توازن قطاع النقود
التوازن سوق المال
توازن سوق السلعة

 

`,y0=m0.split("#").map((e,t)=>{var s;let n=e.trim().split(`
`).filter(a=>a.trim().length>0),r=n.shift()||"failed to parse question",i=Number((s=n.shift())==null?void 0:s.trim());const o=n.map((a,l)=>({id:mt(),text:a,correct:l+1===i}));return qt({questionText:r,answers:o})}),h0=`


تحظى مسألة تنمية . . . . باهتمام متزايد وتوضع على رأس أولويات السياسة الاقتصادية في مصر،وبصفة خاصة في الآونة الأخيرة وذلك لمعالجة العجز في الميزان التجاري.
1
الصادرات
الواردات
الضرائب
المصروفات



#

تعتبر تنمية الصادرات الزراعية أحد العناصر الهامة والرئيسية لتنمية مصادر . . . . ، حيث تقدر قيمة هذه الصادرات بحوالي 3 مليار دولار عام 2020 م
1
النقد الأجنبي
النقد المحلى
النقد الدولي
النقد القومي



#

وفى إطار الاتجاه العالمي لإزالة معوقات التبادل التجاري بين مختلف الدول، تسعى كل دولة إلى زيادة حجم
2
الإنتاج
الصادرات
الاستهلاك
الواردات



#

تسعى السياسة الاقتصادية المصرية جاهدة لتنويع وتعظيم العائد من الصادرات بوجه عام، والصادرات . . . . بوجه خاص 
1
الزراعية
الصناعية
الخدمية
التجارية



#

تعاني التجارة الخارجية المصرية بصفة عامة من . . . . دائم ومستمر على مدار الفترة الماضية بسبب التزايد السكاني المتزايد ومحدودية الموارد الزراعية
1
عجز
فائض
تعادل



#

يبنى التفسير الكلاسيكي للتجارة الدولية على مبدأ التكاليف النسبية الذي صاغه الاقتصادي الإنجليزي . . . . عام 1817
2
ادم سميث
دافيد ريكاردو
جون ستيوارت ميل



#

إن اختلاف النفقات هو الشرط الضروري والكافي للتبادل التجاري بين دولتين
2
الكلية
النسبية
المتوسطة



#

ويرى . . . . أن الفائدة أو المنافع المتحصل عليها من التجارة الدولية تتأتى من التوظيف الأكثر كفاءة للقوى الإنتاجية في العالم
3
ادم سميث
دافيد ريكاردو
جون ستيوارت ميل



#

يتم قياس الميزة النسبية باستخدام معامل تكلفة الموارد . . . . 
2
الأجنبية
المحلية
العالمية
الحدود

#


إذا كانت قيمة معامل تكلفة الموارد المحلية أقل من الواحد الصحيح فهذا يشير إلى أن الدولة . . . . عملة أجنبية من إنتاج السلعة محليا
2
لا توفر
توفر
تخسر
لا تخسر


#
يمكن للدولة أن يكون لها ميزة نسبية في إنتاج تلك السلعة إذا توافرت السلعة . . . . 
1
بوفرة
بندرة
قليلا



#

بتركيب الرقم القياسي للميزة النسبية Balassaقام 
3
الحقيقية
التقليدية
الظاهرية
الخيالية



#

كلما زادت قيمة الرقم القياسي للميزة النسبية الظاهرة عن 100 دل ذلك على . . . . ميزة نسبية ظاهرة لصادرات السلعة
2
عدم وجود
وجود
غياب
عدم غياب



#

وإذا انخفض الرقم القياسي للميزة النسبية الظاهرة عن 100 دل ذلك على . . . . الميزة النسبية للسلع الداخلة في حسابه
3
زيادة
تحسن
تدهور



#

يقيس معامل الحماية الأسمى أثر
4
السياسة الصناعية
السياسة التجارية
السياسة العلمية
السياسة الزراعية




#

معامل الحماية الأسمى يساوي السعر المزرعى مقسوما على السعر العالمي . . . . 
4
سعر السلعة التوازني
سعر الحدود التوازني
السعر العالمي التوازني
سعر الصرف التوازني



#

الميزة . . . . لها مكونات معناها إنتاج سلعة بتكلفة منخفضة وذات جودة عالية ووجود خدمات لتوصيل هذه السلعة للمستهلك في الوقت المناسب والشكل المناسب
1
التنافسية
النسبية
الكلية



#

تستخدم مرونة . . . . على السلعة المصدرة في الدولة المستوردة كمؤشر للمركز أو القوة التنافسية للسلعة في سوق الدولة المستوردة لها
2
العرض السعرية
الطلب السعرية
الإنتاج السعرية



#

كلما كانت مرونة الطلب الخارجي على السلعة في سوق ما . . . . كلما دل ذلك على أن الدولة المصدرة تستطيع رفع سعر السلعة في أسواق الدول المستوردة
2
مرتفعة
منخفضة
متزايدة
متناقصة



#

إن النظام التجاري . . . . ينطوي على قواعد يضعها المجتمع الدولي، بصورة متعددة الأطراف
3
المحلى
الإقليمي
الدولي



#

إن النظام التجاري الدولي يبني على . . . . دولية، تكون ملزمة للدول التي توقعها بعد مناقشتها
3
مناقشات
اجتماعات
اتفاقيات



#

تعتبر منظمة . . . . العالمية العنصر الأساسي في النظام التجاري الدولي متعدد الأطراف
4
العمل
الاستهلاك
الإنتاج
التجارة



#

تعد منظمة . . . . العالمية الآن بمثابة الإطار المؤسسي الدولي الوحيد الذي يضع ويوضح، ويطور، ويشرف على تطبيق القواعد التي تحكم حركة التجارة الدولية بين دول العالم المختلفة
4
العمل
الاستهلاك
الإنتاج
التجارة



#
التعرفة والربط Tarifficationاتفقت الدول الأعضاء في النظام التجاري العالمي على إجراء . . . . جمركية على مدى ست سنوات بدءا من عام 1995  Binding 
2
زيادات
تخفيضات
تثبيتات




#

يؤكد هذا الاتفاق لحرية التجارة الدولية على حق أي دولة عضو في منظمة التجارة العالمية في تبني أي تدابير تراها ضرورية للحفاظ على . . . . الإنسان، والحيوان، والنبات
3
أعداد
خصائص
صحة



#

اتبعت الدول النامية بعد الاستقلال الدول المتقدمة في نظام حرية التجارة العالمية لتحقيق . . . . من التجارة الدولية
2
خسائر
مكاسب
استقرار



#

يمكن تعريف . . . . الاقتصادي الدولي على أنه درجة معينة من التكامل الاقتصادي الذي يقوم بين مجموعة من الدول المتجانسة اقتصاديا
3
الاتحاد
التجمع
التكتل


#

تعريف التكتل الاقتصادي الدولي على أنه درجة معينة من التكامل الاقتصادي بهدف تعظيم المصالح وزيادة التجارة الدولية لتحقيق . . . . عائد لشعوب تلك الدول
2
اقل
أكبر
تعادل



#

من أهم . . . . النظام الاقتصادي العالمي الجديد هو الاتجاه المتزايد نحو تكوين التكتلات الاقتصادية العملاقة للحصول على أكبر مكاسب ممكنة من التجارة الدولية
1
خصائص
أنواع
طرق



#

 . . . . من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها هو
1
التمتع بوفورات الإنتاج الكبير
التمتع بالانفراد بالإنتاج
التمتع بالإنتاج الصغير



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
1
زيادة درجة المنافسة
تقليل درجة المنافسة
تثبيت درجة المنافسة



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
1
توسيع حجم السوق
تقليل حجم السوق
تثبيت حجم السوق



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
1
زيادة معدل التجارة الدولية البينية
تقليل معدل التجارة البينية
تثبيت معدل التجارة البينية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
3
تقليل نصيب التكتل الاقتصادي من التجارة العالمية 
تثبيت نصيب التكتل الاقتصادي من التجارة العالمية 
زيادة نصيب التكتل الاقتصادي من التجارة العالمية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
2
تثبيت مستوى الرفاهية الاقتصادية
زيادة مستوى الرفاهية الاقتصادية
تقليل مستوى الرفاهية الاقتصادية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
3
تثبيت مستوى التكاليف الإنتاجية
زيادة مستوى التكاليف الإنتاجية
تقليل مستوى التكاليف الإنتاجية



#

من الدوافع التي تجعل مجموعة من الدول تهتم بتكوين تكتل اقتصادي فيما بينها
2
تثبيت مستوى الكفاءة الإنتاجية
زيادة مستوى الكفاءة الإنتاجية
تقليل مستوى الكفاءة الإنتاجية



#

الضلع النقدي في نظام التجارة العالمية ويشير إلى المعاملات النقدية الدولية قصيرة الأجل وأهمية تحقيق الاستقرار فيها ويعبر عنه . . . . 
3
صندوق الإسكان الدولي
صندوق التمويل الدولي
صندوق النقد الدولي



#

الضلع المالي في نظام التجارة العالمية يعبر عن المعاملات الاقتصادية طويلة الأجل والتي تمثل الاستثمارات الدولية ويشرف على هذا النوع من المعاملات مجموعة . . . . والذي يسعى إلى تأمين حركة تدفقات
4
رؤوس الأموال العالمية
الاستثمار الدولي
العمل الدولي
البنك الدولي



#

الضلع التجاري أو ما يعرف بالتجارة الدولية متعددة الأطراف وقد كانت الاتفاقية العامة للتعريفة والتجارة الجات) ترعى شئون التجارة العالمية من الفترة 1 / 1 / 1948 - 31 / 12 / 1994 . ومع بداية عام 1995 حلت) 
4
محلها منظمة
العمل الدولية
الأم الدولي
التجارة العالمية



#

ويضيف . . . . أن اختلاف الندرة النسبية لعوامل الإنتاج ما بين دولة وأخرى هو شرط ضروري لوجود اختلاف في النفقات النسبية وبالتالي لقيام التجارة الخارجية
3
جون ستيوارت ميل
ديفيد ريكاردو
هيكشر



#

معامل . . . . = إجمالي التكاليف للوحدة بالسعر المحلى / القيمة المضافة للوحدة بسعر الحدود
2
أسعار الموارد المحلية
تكلفة الموارد المحلية
إنتاج العوامل المحلية





#

التكامل الاقتصادي . . . . ويقصد به توسيع النطاق الجغرافي للاتحاد من خلال قبول أعضاء جدد من بين الدول المنتمية جغرافيا إلى الإقليم الاقتصادي
2
الرأسي
الأفقي
المتوسط



#

التكامل الاقتصادي . . . . ويقصد به التحرك من درجة إلى أخرى على درجات سلم التكامل الاقتصادي والذي يبدأ بمنظمة التجارة الحرة مرورا بالاتحاد الجمركي فالسوق المشتركة فالوحدة الاقتصادية انتهاءا بالتكامل 
3
الاقتصادي
الأفقي
الرأسي
المتوسط



#

التكامل الاقتصادي . . . . وهو يشير إلى درجات سلم التكامل الاقتصادي الثلاث الأولى (منظمة التجارة الحرة، الاتحاد الجمركي، السوق المشتركة)، حيث يتم إزالة القيود فقط
2
الموجب
السالب
المتعادل



#

التكامل الاقتصادي . . . . وهو يعكس الوحدة النقدية المالية والتكامل حيث تتخذ سلطات التكامل خطوات إيجابية نحو إنشاء آليات جديدة للتكامل مثل التنسيق وتوحيد السياسات الاقتصادية وإنشاء عملة موحدة وإنشاء بنك مركزي موحد وتوحيد النظم الضريبية وتشريعات العمل وغير ذلك
1
الموجب
السالب
المتعادل



#

ويتكون هذا التكتل الاقتصادي بهدف تحرير التجارة بين دول الأعضاء ويتم الاتفاق بين دولتين أو أكثر على إزالة كافة العقبات التي تقف في سبيل التبادل التجاري بينهم وتلتزم كل دولة من الدول المشتركة بإلغاء الرسوم الجمركية والقيود الكمية المفروضة على الواردات من بقية الدول المشتركة
3
منظمة الاستهلاك الحر
منظمة الإنتاج الحر
منطمة التجارة الحرة



#

وفيه يتم إلغاء الرسوم الجمركية والقيود الكمية فيما بين الدول الأعضاء، وتلتزم الدول الأعضاء بتعريفة جمركية موحدة يتم تطبيقها على السلع المستوردة من العالم الخارجي
2
الاتحاد الضرائبي
الاتحاد الجمركي
الاتحاد الإنتاجي



#

وفيه يتم توحيد أسواق كل من المنتجات وعناصر الإنتاج فيما يمكن تسميته بتكامل الأسواق وهذا لا يكون ممكنا إلا إذا اتفقت الدول الأعضاء في السوق على ترتيبات من شأنها تنسيق السياسة الاقتصادية فيما يسمى بتكامل السياسات
1
السوق المشتركة
السوق المنفردة
السوق العالمي




#

من خلال الاتحاد الاقتصادي يتم إلغاء كافة القيود على التجارة الدولية وانتقال رؤوس الأموال والأشخاص بين الدول بالإضافة إلى تحقيق التنسيق في كافة السياسات الاقتصادية بغرض الوصول إلى الوحدة الاقتصادية العالمية
1
الاتحاد الاقتصادي
الاتحاد الإنتاجي
الاتحاد الاستهلاكي



#

يعتبر . . . . أكبر التكتلات الاقتصادية في العالم وأصبح هذا التكتل الاقتصادي في نظر العديد من الخبراء أكبر قوة اقتصادية وأقوى تكتل اقتصادي على مستوى العالم
3
الاتحاد العالمي
الاتحاد العربي
الاتحاد الأوروبي



#

من أهم أهداف التكتل الاقتصادي الأوروبي
1
خلق سوق تجارية موحدة ذات قدرة إنتاجية أكثر كفاءة وطاقة استيعابية
خلق سوق تجارية متعددة ذات قدرة إنتاجية أكثر كفاءة وطاقة استيعابية
خلق سوق تجارية موحدة ذات قدرة إنتاجية اقل كفاءة وطاقة استيعابية



#

من أهم أهداف التكتل الاقتصادي الأوروبي
1
تعميق الاقتصاد القائم على آليات السوق واحترام مبدأ المنافسة
تعميق الاقتصاد الغير قائم على آليات السوق واحترام مبدأ المنافسة
تعميق الاقتصاد القائم على آليات السوق وعدم احترام مبدأ المنافسة



#

من أهم أهداف التكتل الاقتصادي الأوروبي
2
عدم الانتقال من مرحلة التكامل والتنسيق إلى مرحلة الاندماج الفعلي بما يسهل من عملية الاستخدام الأمثل للموارد
الانتقال من مرحلة التكامل والتنسيق إلى مرحلة الاندماج الفعلي بما يسهل من عملية الاستخدام الأمثل للموارد
الانتقال من مرحلة التكامل والتنسيق إلى مرحلة الانفصال الفعلي بما يسهل من عملية الاستخدام الأمثل للموارد



#

من أهم أهداف التكتل الاقتصادي الأوروبي
3
انخفاض قدرة التكتل الأوروبي في لعب دورا أكثر فعالية في كافة المجالات الاقتصادية والسياسية
ثبات قدرة التكتل الأوروبي في لعب دورا أكثر فعالية في كافة المجالات الاقتصادية والسياسية
زيادة قدرة التكتل الأوروبي في لعب دورا أكثر فعالية في كافة المجالات الاقتصادية والسياسية



#

من أهم أهداف التكتل الاقتصادي الأوروبي
1
تحقيق الوحدة النقدية الأوروبية والاستقرار النقدي في أوروبا وإقامة البنك المركزي الأوروبي
عدم تحقيق الوحدة النقدية الأوروبية والاستقرار النقدي في أوروبا وإقامة البنك المركزي الأوروبي
تراجع الوحدة النقدية الأوروبية وعدم الاستقرار النقدي في أوروبا وإقامة البنك المركزي الأوروبي



#

من أهم أهداف التكتل الاقتصادي الأوروبي
2
العمل على زيادة معدلات التضخم وزيادة معدلات النمو وخفض نسبة البطالة وخفض معدلات الفائدة
العمل على خفض معدلات التضخم وزيادة معدلات النمو وخفض نسبة البطالة وخفض معدلات الفائدة
العمل على خفض معدلات التضخم وخفض معدلات النمو وخفض نسبة البطالة وخفض معدلات الفائدة




#

يعتبر التكتل الاقتصادي . . . . من أكبر التكتلات الاقتصادية في العالم بعد التكتل الاقتصادي الأوروبي من ناحية الحجم والإمكانيات
2
لأمريكا الجنوبية
لأمريكا الشمالية
للدول العربية




#

من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها
1
زيادة معدلات نمو الناتج المحلى الإجمالي للدول الأعضاء
تقليل معدلات نمو الناتج المحلى الإجمالي للدول الأعضاء
تثبيت معدلات نمو الناتج المحلى الإجمالي للدول الأعضاء



#

من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها
3
الغاء الحواجز الجمركية وتحرير التجارة وزيادة الاستثمارات
عدم إلغاء الحواجز الجمركية وعدم تحرير التجارة وزيادة الاستثمارات
إلغاء الحواجز الجمركية وتحرير التجارة وزيادة الاستثمارات



#

من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها
1
علاج مشكلات البطالة في دول التكتل من خلال زيادة الطاقة الإنتاجية وبالتالي تعظيم فرص العمل أمام الراغبين فيه
علاج مشكلات البطالة في دول التكتل من خلال زيادة الطاقة الإنتاجية وبالتالي تعظيم فرص العمل أمام الراغبين فيه
علاج مشكلات البطالة في دول التكتل من خلال زيادة الطاقة الإنتاجية وبالتالي تعظيم فرص العمل أمام الراغبين فيه



#

من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها
1
تحقيق التكامل الاقتصادي بين دول التكتل الاقتصادي القائم على المزايا النسبية والمزايا التنافسية لكل دولة
دم تحقيق التكامل الاقتصادي بين دول التكتل الاقتصادي القائم على المزايا النسبية والمزايا التنافسية لكل دولة
تقليل التكامل الاقتصادي بين دول التكتل الاقتصادي القائم على المزايا النسبية والمزايا التنافسية لكل دولة



#

من أهداف التكتل الاقتصادي لأمريكا الشمالية (نافتا) انه يسعى إلى تحقيق مجموعة من الأهداف أهمها
2
تقليل قدرة التكتل الاقتصادي لأمريكا الشمالية على التعامل مع التكتلات الاقتصادية العملاقة الأخرى وتحقيق ميزة تنافسية
زيادة قدرة التكتل الاقتصادي لأمريكا الشمالية على التعامل مع التكتلات الاقتصادية العملاقة الأخرى وتحقيق ميزة تنافسية
تثبيت قدرة التكتل الاقتصادي لأمريكا الشمالية على التعامل مع التكتلات الاقتصادية العملاقة الأخرى وتحقيق ميزة تنافسية



#

السوق المشتركة لدول . . . . تعبر عن أكبر تكتل اقتصادي في القارة الأفريقية، ويبلغ عددها بعد انضمام مصر إليها واحد وعشرون دولة 
1
شرق وجنوب أفريقيا
غرب وجنوب أفريقيا
شمال وجنوب أفريقيا





#

تسعى السوق المشتركة ( الكوميسا ) لتحقيق الأهداف التالية
1
تحقيق معدل نمو اقتصادي ثابت ومستمر لدول الأعضاء
تحقيق معدل نمو اقتصادي منخفض ومستمر لدول الأعضاء
تحقيق معدل نمو اقتصادي ثابت وغير مستمر لدول الأعضاء



#

تسعى السوق المشتركة ( الكوميسا ) لتحقيق الأهداف التالية
2
خلق بيئة غير مواتية للاستثمار المحلى والأجنبي
خلق بيئة مواتية للاستثمار المحلى والأجنبي
خلق بيئة مواتية للاستثمار المحلى دون الأجنبي



#

تسعى السوق المشتركة ( الكوميسا ) لتحقيق الأهداف التالية
1
تشجيع المشروعات المشتركة في الأنشطة الاقتصادية
عدم تشجيع المشروعات المشتركة في الأنشطة الاقتصادية
وقف المشروعات المشتركة في كافة الأنشطة الاقتصادية





#

تسعى السوق المشتركة(الكوميسا) لتحقيق الأهداف التالية
1
تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول
عدم تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول
توقف تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول



#

تسعى السوق المشتركة (الكوميسا) لتحقيق الأهداف التالية
3
عدم تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول
تقليل تنمية تطوير العلوم والتكنولوجيا وعدم تحقيق السلام والأمن والاستقرار للدول
تنمية تطوير العلوم والتكنولوجيا وتحقيق السلام والأمن والاستقرار للدول


`,g0=e=>{let[,t,n]=/^!\[(.*)\]\((.*)\)$/.exec(e)||[];return[!!n,t,n]},v0=h0.split("#").map((e,t)=>{var u;let n=e.trim().split(`
`).filter(c=>c.trim().length>0),r=n.shift()||"failed to parse question",i=Number((u=n.shift())==null?void 0:u.trim()),[o,s,a]=g0(n[0]);o&&n.shift();const l=n.map((c,f)=>({id:mt(),text:c,correct:f+1===i}));return qt({questionText:r,answers:l,image:a,imageAlt:s})}),w0=`


المسار أو المسلك الذي تمر من خلاله السلع والمنتجات الى المستهلك أو المستخدم النهائي هو
2
وكلاء التصدير
المفهوم العام للقنوات التسويقية في النشاط التصديري
المهام الرئيسية للمصدر في النشاط التصديرية
السعر المرتفع للسلعة


#

من المهام الرئيسية للمصدر في النشاط التصديرية
3
عدم التعرف على القنوات التسويقية المختلفة
عدم فحص البدائل الممكنة للقنوات التسويقية لمنتجاته
اختيار القنوات الأكثر ملائمه
عدم دراسة البدائل الممكنة للقنوات التسويقية لمنتجاته


#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ومنها
1
تراخيص الإنتاج
وكلاء التصدي
بيوت الاستيراد
تجار الجملة


#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق مباشره ومنها
2
تراخيص الإنتاج
الوسطاء التجاريون
عقود الإدارة
حقوق الامتياز


#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ومنها
2
المشترين المصنعين
امتلاك الشركات
شركات الاستيراد
الموزعون


#

كلما كانت دورة البيع للمنتج بطيئة كان المسلك التسويقي
2
أطول
أقصر
أبطئ
ليس هناك علاقة




#

من العوامل المؤثرة على طول أو قصر القناة التسويقية
2
التعرف على القنوات التسويقية المختلفة
قدرة المنتج على البقاء سليما
دراسة البدائل الممكنة للقنوات التسويقية


#

هناك بعض العوامل التي تجعل البيع في الأسواق الخارجية يختلف عن البيع في الأسواق المحلية
1
اختلاف الأذواق وأنماط الاستهلاك
عدم اختلاف نظم البيع
اللغة واحده في كل الأسواق
ارتفاع درجة المخاطرة وانخفاض التكاليف التسويقية


#

من المهام الرئيسية للمصدر في النشاط التصديرية
1
فحص ودراسة البدائل الممكنة للقنوات التسويقية 
اختيار القناة الأقل حجما
عدم التعرف على القنوات التسويقية المختلفة
ليس مما سبق


#

في نموذج قنوات التسويق النمطي يوجد الموزع وهو بدوره يشتري من المصدر ثم يبيع الموزع الى
2
عدد محدود من تجار التجزئة
عدد محدود من تجار الجملة
المستهلك النهائي
المصدر


#

في نموذج قنوات التسويق النمطي يوجد تجار التجزئة وهم بدورهم يشت روا من تجار الجملة ثم يبيعوا الى
2
عدد محدود من تجار التجزئة
عدد محدود من تجار الجملة
المستهلك النهائي
المصدر


#

يجرى تسويق المنتجات في الأسواق الخارجية بطرق مباشره ومنها
3
عقود التصنيع
عقود الإدارة
تجار الجملة
حقوق الامتياز


#

من العوامل المؤثرة على طول أو قصر القناة التسويقية الخدمات المطلوبة للمنتج، فمثلا وجود خدمات ما بعد البيع بدرجة عالية، كان المسلك التسويقي
2
طويل
قصير
لا يتأثر
أبطئ



#

من العوامل المؤثرة على طول أو قصر القناة التسويقية المتطلبات والمعاملات الفنية للمنتج، فكلما كانت معقده، كان المسلك التسويقي
2
طويل
قصير
ليس هناك علاقة
أبطئ


#

من العوامل المؤثرة على طول أو قصر القناة التسويقية قدره المنتج على البقاء سليما، فكلما كان هناك سرعه تلف للمنتج، كان المسلك التسويقي
1
طويل
قصير
لا يتأثر
أبطئ


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق هو عباره عن اتفاق بين شركتين تقوم إحداها بتنظيم بعض أو كل أنشطه الشركة الأخرى
3
المشروعات المشتركة
حقوق الامتياز
عقود الإدارة
تراخيص الإنتاج


#

عقود الإدارة من احدى طرق التسويق للأسواق الخارجية بطريقه غير مباشره بالنسبة للاستثمارات المحددة التي تتطلبها، بانها تحقق عوائد
1
كبيره
صغيره
لا يوجد تأثير
ليس مما سبق


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق هو شخص اعتباري أو طبيعي يقوم باسم المصدر، ونيابة عنه بالسعي لتوزيع السلعة في الأسواق الخارجية
2
الموزع
الوكيل التصديري
تجار الجملة
تجار التجزئة


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق يكون بموجبها يمكن بقدر من السرعة والسهولة دخول الأسواق الخارجية المستهدفة
1
امتلاك الشركات من الخارج
تراخيص الإنتاج
عقود الإدارة
عقود التصنيع





#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره، وإحدى هذه الطرق تتميز بتغلبها على العقبات الجمركية ومعوقات التصدير الى السوق الخارجي
4
امتلاك الشركات من الخارج
تراخيص الإنتاج
عقود الإدارة
عقود التصنيع


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره، وتتميز هذه الطريقة بان يقوم المنتج المصدر بتنفيذ البرنامج التصدير ية الخاص به بالكامل
2
التصدير المباشر بواسطة الوسطاء
التصدير المباشر بدون وسطاء
عقود التصنيع
عقود الإدارة


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق فيها تمارس التجارة الخارجية نشاط عامة استيرادا أو تصديرا وقد تقوم بشراء البضائع كعميل مباشر مع المصدر ثم تقوم ببيعها وتوزيعها في الأسواق
3
وكلاء التصدير
تجاره الجملة
شركات الاستيراد
هيئات الشراء الحكومية


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق فيها يقومون بالشراء المباشر من المصدر مثل شركات الاستيراد بدلا من الاعتماد على الشراء من الموزعين أو المستوردين أو الوكلاء
2
شركات الاستيراد
تجار الجملة
متاجر التجزئة
المشترين المصنعين


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق غير مباشره ، وإحدى هذه الطرق فيها تتم عمليه إنتاج المنتجات التصديريه وذالك بموجب اتفاق منح ترخيص يحصل بموجبه احد طرفي الاتفاق على الخبرة الفنية والتجارية وحق استخدام الماركة وبراءات الاختراع وذالك في مقابل مبلغ أو نسبه معينه يدفعها للطرف الأخر المانح للترخيص
2
حقوق الامتياز
تراخيص الإنتاج
عقود التصنيع
المشروعات المشتركة


#

يتم تسويق المنتجات في الأسواق الخارجية بطرق مباشره عن طريق الوسطاء، وإحدى هذه الطرق الشركات التي تشتري كميات كبيره وبشكل متكرر من السلع قد يفضلون التعامل مباشره مع المصدر وقد يتم ذالك على أساس تعاقدأو بدون تعاقد
4
شركات الاستيراد
عقود التصنيع
متاجر التجزئة
المشترين المصنعين



#

من أدوات التمويل السابق للشحن، تحدد الدول التي تقدم هذا النوع مثل دوله المكسيك من التمويل أسعار فائدته بما يتناسب وأسعار الفائدة التي تقدمها الدول الأخرى على مثل هذا النوع من التمويل
3
القروض
الصناديق متجددة الموارد
خطابات الاعتماد المتبادلة
جميع ما سبق


#

يتمثل الشكل التقليدي في الخصم التجاري في التمويل الذي يتراوح من ثلاث الى خمس سنوات وهو تمويل
4
قصير الأجل
طويل الأجل
ممتد الأجل
متوسط الأجل


#

تتضمن عمليه الخصم التجاري قيامه كطرف ثالث بضمان الأوراق المالية (تجاريه وكمبيالات وسندات إذنيه) بدون أيه قيود
3
المستورد
المخصم
بنك المستورد
القروض


#

يعد خصم الكمبيالات التي يضمنها البنك واحده من اهم أدوات التمويل . . . . بعد الشحن
1
قصير الأجل
طويل الأجل
ممتد الأجل
متوسط الأجل


#

من أدوات التمويل أثناء وبعد الشحن، تتمثل في قيام الجهة الممولة بتقديم القروض والتسهيلات الائتمانية الى المستوردين
3
الخصم التجاري
الصفقات المتكافئة
ائتمان المشتري الأجنبي
الشراء التبادلي


#

وفقا لهذه الأداة تقوم الدولة التي تتمتع بميزه نسبيه وتنافسيه في احدى القطاعات بتشجيع تدفق الاستثمار المحلي والأجنبي الى تلك القطاعات ومن ثم زيادة الصادرات من تلك القطاعات الى الأسواق العالمية
4
التمويل قبل الشحن
التخصيم
التمويل أثناء وبعد الشحن
التمويل الاستثماري للصادرات





#

تتمثل في قيام المُصدر بالتامين على تحصيل قيمه صادراته عند استحقاق موعد الائتمان الممنوح أثناء عمليه التصدير
1
تأمين ائتمان للتصدير
ضمان الصادرات
A, B
حفظ الصادرات


#

يعد فشل أو رفض المستورد أن يتقيد باي شرط من شروط عقد التصدير إذا كان ذالك المستورد جهة أو مؤسسه حكومية سبق التعامل معها من
2
مخاطر المستورد المغطاة
مخاطر الدولة المستوردة المغطاة
ضمان الصادرات
حفظ الصادرات


#

نظرا لما يواجهه مديري التصدير بالأسواق العالمية من صعوبة الحصول على معلومات صحيحه ودقيقه وحديثه عن الشركات الأجنبية، ولتقليل مخاطر عدم السداد من قبل المستوردين الأجانب فيتم طلب
2
تأمين ائتمان للتصدير
ضمان الصادرات
A, B
حفظ الصادرات


#

يقوم المصدرون في هذا الشكل من أشكال التمويل بالتعاون فيما بينهم في مجال تسويق صادراتهم مما يسهم في زيادة فرص التصدير لتلك الأسواق
3
تأمين ائتمان للتصدير
ضمان الصادرات
تمويل عمليات تسويق الصادرات
تمويل عمليات البيع


#

يعتبر قيام الحكومة بأنشاء مؤسسات متخصصة لتمويل الصادرات دون توفير الموارد المالية الكافية للقيام بهذا الدور
1
من المشكلات التي تؤثر سلبا على الصادرات المصرية
من مميزات الصادرات المصرية
من أدوات التمويل قبل الشحن
من أدوات التمويل أثناء وبعد الشحن


#

يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، وتم إنشاؤه بموجب القانون رقم 1983 بغرض تشجيع الصادرات المصرية والمعاونة في قيام قطاع تصديري زراعي وصناعي وتجاري ومصرفي
2
الجهاز المصرفي
البنك المصري لتنميه الصادرات
الشركة المصرية لضمان الصادرات
المؤسسة العربية لضمان الاستثمار





#

يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، وقام البنك المصري لتنميه الصادرات بإنشائها لضمان الصادرات بموجب القانون رقم 21 لسنه 1992 ، وذالك من اجل تنفيذ نظام تامين لضمان الصادرات ضد المخاطر التجارية وغير التجارية
3
الجهاز المصرفي
البنك المصري لتنميه الصادرات
الشركة المصرية لضمان الصادرات
المؤسسة العربية لضمان الاستثما ر


#

رفض المشتري أو امتناعه عن استلام البضاعة المشحونة رغم قيام المصدر بالوفاء بجميع التزاماته تجاه المشتري من المخاطر المغطاة
1
التجارية
غير التجارية
A, B
المخاطر المغطاة غير التجارية


#

تعمل المؤسسة العربية لضمان الاستثمار على توفير خدمات الضمان ضد المخاطر غير التجارية ومن هذه المخاطر المغطاة غير التجارية
2
عدم الغاء سلطات الدولةالمستوردة لترخيص الاستيراد
استيلاء سلطات الدولة المستوردة أو دولة العبور العربي على السلع المشحونة أو حجزها أو مصادرتها
عدم عجز المشتري أو تأخره في سداد المبالغ المستحقة للمصدر
إفلاس المشتري


#

يعد من المؤسسات التي تقدم خدمات تمويل الصادرات بمصر، هو مؤسسه ماليه عربيه مشتركه تهدف للإسهام في تنميه التجارة العربية وقد أنشئ في عام 1989 ويبلغ راس المال المدفوع 500 مليون دولار أمريكي
3
الجهاز المصرفي
البنك المصري لتنميه الصادرا ت
برنامج تمويل التجارة العربية
المؤسسة العربية لضمان الاستثما


#

من أدوات تمويل الصادرات المصرية أثناء وبعد الشحن، تعمل هذه الأداة في قطاعات رئيسي ه مثل القطاع الزراعي والغذائي والمجمدات ، الصناعات الدوائي ة ، الصناعات الهندسية والنسيجية تم التركيز عليها
4
اليات اعاده الخصم
اليه التخصيم
اليه ائتمان المشتري الأجنبي
إدخال خدمه الخصم التجاري للمصدر المصري


#

من أدوات تمويل الصادرات المصرية أثناء وبعد الشحن، يساعد على حل مشكله التدفق النقدي التي قد يعاني منها يعض المصدرين المصريين
4
توفير راس المال العامل
برامج الصناديق المتجددة
اليات اعاده الخصم
اليه التخصيم





#

قامت وزاره التجارة الخارجية بوضع القواعد ومنها : الخصائص المالية للصفق ة ، نوع السلعة التي تغطيها، وأجال التغطية وتكاليفها التي تعمل وفقال
3
اليات اعاده الخصم
اليه التخصيم
اليه ائتمان المشتري الأجنبي
إدخال خدمه الخصم التجاري للمصدر المصري


#

تعد سندات التصدير من أدوات التمويل الاستثماري بمصر، حيث يقوم البنك الأهلي بطرح سندات لتمويل الصادرات طويله الأجل من
4
3:1 سنوات
3:1 شهور
10:7 شهور
10:7 سنوات

#

من أدوات التمويل الاستثماري بمصر، يتم ذالك من خلال حصول بنك تنميه الصادرات على قروض من بنوك مثل بنك التنمية الأفريقي وكذالك بنك الصادرات الأمريكي الياباني لتمويل الصادرات المصرية
4
اليه التخصيم
الية ائتمان المشتري الأجنبي
سندات التصدير
الحصول على تمويل دولاري طويل الأجل


#

تتولى الحكومة تدبير مبالغ لمواجهه جزء من أعباء الشركات لضمان مخاطر الصادرات في دعم أقساط الضمان للدول متوسطه المخاطر لتصبح 1 % بدلا من
1
1.5%
2%
1%
0.5%

#

من أدوات تامين وضمان الصادرات، حيث تم إعداد وثيقة تقوم بتحمل الدول ة لنفقات الاشتراك بهذه الأداة بنسبه تتراوح من 50 % الى 75 % من التكلفة الكلية في حاله إخفاق المٌصدر في الحصول على تعاقدات فعليه
2
سندات التصدير
ضمان المعارض
ضمان مخاطر الصادرات
اليه التخصيم


#

من أدوات تمويل الصادرات المصرية قبل الشحن، ومن امثلتها توقيع وزاره الخارجية بروتوكول التعاون مع البنك الأهلي المصري في أبري ل عام 2004
2
توفير راس المال العامل
برامج الصناديق المتجددة
اليات اعاده الخصم
اليات الخصم




#

تشير العديد من الدراسات الى انه يمكن النظر الى مفهوم الميزة التنافسية
2
مستويان
مستويات ثلاث
مستويات خمس
مستويات ست


#

يمكن النظر الى مفهوم الميزة التنافسية لأكثر من مستوى وهذه المستويات هي
4
الدولة والصناعة فقط
الشركة والدولة فقط
الصناعة والشركة فقط
الدولة والصناعة والشركة


#

تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي يرتكز الاهتمام حول انعكاس الميزة التنافسية على الرفاهية العامة للدول
1
الميزة التنافسية على مستوى الدولة
الميزة التنافسية على مستوى الصناعة
الميزة التنافسية على مستوى الشركة
الميزة التنافسية على مستوى الفرد الواحد


#

تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي قد تتمتع الدولة بميزه تنافسيه عالميه في صناعه معينه أو في بعض الصناعات
2
الميزة التنافسية على مستو ى الدولة
الميزة التنافسية على مستوى الصناعة
الميزة التنافسية على مستوى الشركة
الميزة التنافسية على مستوى الفرد الواحد


#

تعتبر أحد مستويات الميزة التنافسية وفي هذا المستوي يتم التنافس في السوق العالمي يقوم فيما بين الشركات
3
مستوى الدولة
مستوى الصناعة
الميزة التنافسية على مستوى الشركة
الميزة التنافسية على مستوى الفرد الواحد


#

من مؤشرات الميزة التنافسية
4
النصيب السوقي في الصادرات
معدل نمو الصادرات
الطلب المحلي
خفة الحركة والاعتمادية والتعليم


#

من محددات الميزة التنافسية
1
راس المال البشري ومواصفات الجودة السلعية
عدم تجهيز البيئة التحتية الملائمة لنشاط التصدير
عدم المقدرة على متابعه متطلبات التصدير
عدم تجهيز المقومات الضرورية لنشاط التصدير


#

من محددات الميزة التنافسية
3
خفة الحركة والتشابكات
الاعتمادية والتعليم
الطلب المحلي والمقدرة التكنولوجية
معدل نمو الصادرات والواردات


#

هناك مقاييس لقياس درجة التنافسية ومن أمثلتها
1
النصيب السوقي للصادرات
خفة الحركة
الخطوط العامة لمداخل التنافسية في الدول المتقدمة
معدل نمو الواردات


#

من مؤشرات الميزة التنافسية وهو يعني قدرة المؤسسات والعاملين على استيعاب المعلومات والتقانات الجديدة
3
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية وهي تعني قدرة المؤسسات على القيام بالتزامات متواصلة وتلبيتها مع مرور الزمن في مواجهة عوامل المخاطرة واللايقين
2
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية وهي تعني مختلف أشكال الارتباط أو التواصل القائم بين الأسواق المحلية والدولية ومصادر المعلومات والتكنولوجيا
4
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية وهي قدرة المؤسسات والعاملين على الاستجابة لمؤشرات السوق كما يعكسها الأداء الاقتصادي والتصديري
1
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية ويشمل على نسبة الأنفاق على الدفاع القومي الى الموازنة الكلية
3
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية ويشمل نسبة عجز الموازنة مقارنة بالناتج المحلي
2
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية ويشمل عدد أجهزه التليفزيون والجرائد اليومية لكل ألف نسمه
4
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من مؤشرات الميزة التنافسية ويشمل متوسط معدل نمو الدخل للفرد ومتوسط معدل نمو الصادرات والواردا ت
1
خفه الحركة
الاعتمادية
التعليم
التشابكات


#

من محددات الميزة التنافسية ويقصد به العمالة المدربة الماهرة المتخصصة عالية الكفاءة والكفاءات العالية من العلماء والخبراء والمهندسين والفنيين
1
رأس المال البشري
الطلب المحلي
القدرة التكنولوجية
مواصفات الجودة السلعية


#

من المقاييس المستخدمة لقياس درجة التنافسية وهو يعبر عن التغير النسبي بالزيادة أو النقص في كميه أو قيمه الصادرات للدولة عامه
2
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة التنافسية الظاهرة
مؤشر التنافسية الظاهرة لفولراث


#

من المقاييس المستخدمة لقياس درجة التنافسية وهو يقاس بنسبه نصيب صادرات الدولة في الأسواق التصديرية
1
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة التنافسية الظاهرة
مؤشر التنافسية الظاهرة لفولراث






#

من المقاييس المستخدمة لقياس درجة التنافسية وهو أكثر المقاييس شمولا لكونه يأخذ في الاعتبار كلا من جانبي الصادرات والواردات معا كما يمكن تطبيقه على جانب الصادرات فقط أ و الواردات فقط
4
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة التنافسية الظاهرة
مؤشر التنافسية الظاهرة لفولراث


#

من المقاييس المستخدمة لقياس درجة التنافسية وهو يقيس الأداء التصديري للسلعة من دوله معينه مقارنه بالأداء التصديري العام للصادرات على مستوى الدولة وأيضا للصادرات من نفس السلعة على مستوى العالم
3
النصيب السوقي للصادرات
معدل نمو الصادرات
الميزة النسبيه الظاهرة
مؤشر التنافسية الظاهرة لفولراث


#

من الخطوط العامة لمداخل التنافسية في الدول المتقدمة
2
الميزة التنافسية نسبيه
الميزة تنافسيه وليست نسبيه
الميزة القومية تورث
الميزة القومية لا تكتسب


#

من محددات الميزة التنافسية وتشتمل على المجموع الكلي للمزايا والخواص للسلعة أو الخدمة وما يقترن بها من عمليات أو معاملات كالتغليق والتعبئة وظروف النقل ومدى المطابقة لمعايير الجودة العالمية أو تلك التي تفرضه الدول المستوردة
1
مواصفات الجودة السلعية
الطلب المحلي
القدرة التكنولوجية
راس المال البشري


#

من محددات الميزة التنافسية وهي الوسيلة التي يتم بها تحويل الموارد الى سلع وهي تعد شرطا ضروريا لتأهيل الدولة للمنافسة في الأسواق العالمية
3
مواصفات الجودة السلعية
الطلب المحلي
القدرة التكنولوجية
راس المال البشري


#

يقصد به السعر المدفوع أو الوجب دفعه ثمنا لهذا المنتج من قبل المستورد ودون تحميله باي تكاليف أو رسوم أو نفقات تزيد على ما يتحمله عند البيع
2
الإغرا ق
سعر التصدير
الضرر
هامش الإغراق





#

يقصد بها سعر المنتج في مجرى التجارة العادي في السوق المحلية لدولة المنشأ أو التصدير
3
الإغراق
سعر التصدير
القيمة العادية
هامش الإغراق


#

يجوز لها تقدير القيمة العادية وفقا لتكلفه الإنتاج في دولة المنشأ مضافا اليها مبلغ مناسب من المصروفات البيعية والعمومية والإدارية وهامش ربح مناسب
1
سلطة التحقيق
الشحن البحري
التامين البحري
النقل الداخلي


#

CIF يعرف بانه هو مقدار الإغراق كنسبة مئوية من سعر التصدير
4
الإغراق
سعر التصدير
الضرر
هامش الإغراق


#

يقصد به انخفاض سعر بيع المنتح المستورد في السوق المحلي عن سعر بيع المنتج المثيل الذي تنتجه الصناعة المحلي على نفس المستوى التجاري
1
الفرق السعري
تخفيض الأسعار
الدعم
منع الأسعار المحلية من الزيادة


#

يقصد به انحفاض أسعار بيع المنتج المحلي نتيجة تأثير الواردات التي تباع بأسعار مغرقه( منخفضه)
2
الفرق السعري
تخفيض الأسعار  
منع الأسعار المحلية من الزيادة
الدعم


#

يقصد به عدم حدوث الزيادة في الأسعار التي كان من الممكن أن تحدث لولا وجود الواردات المغرقة
3
الفرق السعري
تخفيض الأسعار  
منع الأسعار المحلية من الزيادة
الدعم






#

يعرف بانه الأثار السلبية التي تقع على الصناعة المحلية نتيجة للممارسات الغير عادله في التجارة الدولية
3
الإغراق
سعر التصدير
الضرر
هامش الإغراق


#

يقسم الضرر الى
2
نوعان
ثلاثة أنواع
خمسه أنواع
نوع واحد


#

من أنواع الضرر، وهو يعني أن هناك ضرر وقع بالفعل على الصناعة المحلية
1
ضرر مادي
التهديد بالضرر
الإعاقة المادية
الأرباح


#

الضرر المادي، وهو يعني أن هناك ضرر وقع بالفعل على الصناعة المحلية ويتم بحثه من خلال
2
عنصر
ثلاثة عناصر
خمسه عناصر
سبعه عناصر


#

يعتبر معدل زيادة كبيره في الواردات المغرقة الى السوق المحلي مما يكشف عن احتمال حدوث زيادة كبيره في الاستيراد من
2
عوامل الضرر المادي
عوامل التهديد بالضرر
عوامل الإعاقة المادية
عوامل الدعم


#

من أنواع الضرر، وهي أنها تفسر على أن الواردات المغرقة تمنع قيام أو إنشاء صناعه جديده في الدولة المستوردة
3
ضرر مادي
التهديد بالضرر
الإعاقة المادية
الأرباح


#

يعتبر من أنوا ع الدعم، ويعرف بانه الدعم الذي يجب أن يمتنع الأعضاء كلية عن تقديمه
1
الدعم المحظور
الدعم القابل لاتخاذ إجراء
الدعم غير القابل لاتخاذ إجراء
الدعم المخصص للبيئة


#

يعرف بانه أي مساهمه ماليه مباشره أو غير مباشره مقدمه من دولة المنشأ أو من أي هيئة عامه بها من خلال برامج أو خطط وينتج عنها تحقيق فائدة للمنتج أو المصدر
2
الإغراق
الدعم
الضرر
الوقاية


#

تعرف بانها إمكانيه فرض تدابير ضد الزيادة غير المبررة في الواردات سوآءا بشكلها المطلق أو النسبي من الإنتاج وتسبب ضرر جسيما بالصناعة المحلية أو تهديد بحدوث ضرر جسيم
4
الإغراق
الدعم
الضرر
الوقاية


#

تعرف بانها زيادة مطلقه أو زيادة نسبيه بالنسبة للإنتاج المحلي وهي زيادة حدثت مؤخرا بصورة مفاجئة وكبيره وجوهريه
1
الزيادة غير المبررة
الزيادة المبررة
الضرر الخطير
الإعاقة المادية


#

يعرف بانه مستوى اعلى من الضرر المادي في حالات مكافحة الإغراق والإجراءات التعويضية
3
الزيادة غير المبررة
الزيادة المبررة
الضرر الخطير
الإعاقة المادية


#

يعرف بان السلع إذا كان سعر تصديرها الى السوق المحلي في بلد الاستيراد اقل من قيمتها العادية في بلد التصدي
1
الإغراق
الدعم
الوقاية
الضرر


#

يعرف بانه الأضعاف الكلي الكبير في مركز الصناعة المحلية أو التهديد بوقوعه استنادا على وقائع وليس مجرد ادعاءات أو تكهنات
3
الزيادة غير المبررة
الزيادة المبررة
الضرر الخطير
الضرر البسيط





#

من أنواع الدعم المحظو
3
الدعم غير المخصص
الدعم المخصص للبيئة
دعم التصدير
الدعم المخصص للبحوث والتطوير


#

من أنواعه الدعم ، وهو الدعم الذي لا يكون محظورا ويسبب ضررا بالصناعة المحلية لعضو أخر من أعضاء منظمه التجارة العالمية
1
الدعم القابل لاتخاذ إجراء
الدعم المحظور
الدعم غير القابل لاتخاذ إجراء
الدعم المخصص للبيئة


#

هو الفرق بين القيمة العادية وسعر التصدير
3
الدعم
الوقاية
مقدار الإغراق
هامش الإغراق


#

طبقا لاتفاق مكافحة الإغراق يجب إثبات علاقة السببية عن طريق ما يعرف بانه حدوث الضرر تزامن مع زيادة الواردات المغرقة
3
الزيادة غير المبررة
الدعم
بحث التزامن
سعر التصدير


#

تعرف بانها زيادة الواردات سوآءا كانت مطلقه أو نسبيه وهي زيادة نسبة الواردات الى الإنتاج أو الاستهلاك
4
تخفيض الأسعار
الفرق السعري
اثر الواردات على أسعار السلع المنتجة في السوق المحلي
أثر الواردات على اقتصاديات الصناعة المحلية بالنسبة لحجم الواردات


`,x0=e=>{let[,t,n]=/^!\[(.*)\]\((.*)\)$/.exec(e)||[];return[!!n,t,n]},S0=w0.split("#").map((e,t)=>{var u;let n=e.trim().split(`
`).filter(c=>c.trim().length>0),r=n.shift()||"failed to parse question",i=Number((u=n.shift())==null?void 0:u.trim()),[o,s,a]=x0(n[0]);o&&n.shift();const l=n.map((c,f)=>({id:mt(),text:c,correct:f+1===i}));return qt({questionText:r,answers:l,image:a,imageAlt:s})}),N0=`

تمر دورة حياه المشروع ب . . . . 
3
بمرحلتين
بثلاث مراحل
بأربع مراحل
بخمس مراحل



#
تعنى المزايا أو الجوانب التي يتمتع بها الفرد ب . . . . 
1
نقاط القوة
نقاط الضعف
الفرص
التهديدات



#
تتناول المجالات أول الجوانب التي يتطلب العمل على تقويتها أو استبعادها أو تحديدها ب . . . . 
2
نقاط القوة
نقاط الضعف
الفرص
التهديدات



#
تعنى كيفية تحسين الأداء والخصائص والفرص المتاحة لتحقيق ذلك ب . . . . 
3
نقاط القوة
نقاط الضعف
الفرص
التهديدات


#
يقصد بها المخاطر التي قد يتعرض لها الفرد ب . . . . 
4
1نقاط القوة
نقاط الضعف
الفرص
التهديدات


#
الصورة الذهنية للأثر التنموي المتحقق في الوضع المستقبلي والذي يشمل تغيراً جذريا في حياة السكان المستهدفين
1
الهدف طويل المدى
الأهداف الكلية
الأهداف المباشرة
الأهداف غير المباشرة



#
النتائج العامة المنشودة في شكل تغيير في أوضاع الحياة والسكان المستهدفين
2
الهدف طويل المدى
الأهداف الكلية
الأهداف المباشرة
الأهداف غير المباشرة



#
تسهم في تحقيق الأهداف الكلية والتي تمثل مخرجات مباشره قابله للقياس لأنشطه المشروع
3
الهدف طويل المدى
الأهداف الكلية
الأهداف المباشرة
الأهداف غير المباشرة



#
تتسم الأهداف الذكية ب . . . . صفات
3
ثلاث
أربع
خمس
ست



#
النتائج البعيدة المدى والأكثر شمولا والتي تنتج عاده عن جهود تدخلات مختلفة حكومية وغير حكومية
3
مخرجات
عائدات
أثار
الأهداف الكلية



#
النتائج التي تنشأ عن مجموعه مخرجات مجتمعه لنفس المشروع أو للمشروع
2
مخرجات
عائدات
أثار
الأهداف الكلية



#
النتائج المباشرة لأنشطه المشروع
1
مخرجات
عائدات
أثار
الأهداف الكلية



#
يتسم المؤشر الجيد ب . . . . صفات
3
ثلاث
أربع
خمس
ست



#
تتم عمليه للتقييم المؤسسة كل . . . . 
1
ثلاث سنوات
أربع سنوات
خمس سنوات
ست سنوات



#
عمليه التقييم تتكون من . . . . مراحل رئيسيه
1
ثلاث
أربع
خمس
ست



#
يتصف المقيم الخارجي بأنه . . . . 
4
جزء من الهيكل التنظيمي والسلطة في البرنامج
يجد صعوبة في أن يكون موضوعيا
البرنامج مألوف لديه لذا فهو يفهمه ويستطيع أن يفسر السلوك والاتجاهات الشخصية
يستطيع أن يرى البرنامج بنظره جيده



#
معيار يقيس مدى ملائمه المشروع للمؤسسات والجمعيات والممولين والفئات المستهدفة، وأن على أداره المشروع في هذا المعيار اختيار الفئات المستهدفة
3
معيار الفاعلية
معيار الكفاءة
معيار الموائمة والارتباط 
معيار الأثر



#
لاستغلال الأمثل للموارد المادية والمالية والبشرية لتحقيق المخرجات المخطط لها وذلك بأقل جهد ووقت وتكلفه
2
معيار الفاعلية 
معيار الكفاءة 
معيار الموائمة والارتباط 
معيار الأثر



#
يقيس مدى القرب من تحقيق الأهداف
1
معيار الفاعلية 
معيار الكفاءة 
معيار الموائمة والارتباط 
معيار الأثر



#
قيس مدى تحقق الهدف العام للمشروع والمنظمة على مستوى الفئات المستهدفة والمجتمع على المدى البعيد
2
معيار الفاعلية 
معيار الأثر
معيار الموائمة والارتباط 
معيار الكفاءة 




#
يقيس مدى ديمومة المشروع بعد انتهاءه
2
معيار الفاعلية 
معيار الاستدامة 
معيار الموائمة والارتباط 
معيار الأثر



#
إذا كان للبرنامج أهداف طويله المدى فسوف يكون من غير المجدي قياس الأثر بسرعه أي قبل  . . . . 
4
شهر
موسم
سنه
سنتين



#
تتضمن الحصول على معلومات مفيدة وفى الوقت المناسب من خلال مراقبه ما يفعله الناس
4
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة



#
هي عباره عن توثيق قصه حياه أو تسلسل الأحداث مع مرور الوقت المتعلقة بشخص، أو موق ع، أو أسره، أو مؤسسه
2
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة



#
تتم من خلال الحصول على معلومات وجها لوجه من مجموعه فرديه أو صغيره
1
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة


#
يتم الحصول على بيانات من عدد كبير من الأشخاص بطريقه منظمه وفقا لأسئلة محدده
3
طريقه مقابلات شبه منظمه 
طريقه دراسة الحالة 
طريقه الاستبيان 
طريقه الملاحظة المباشرة



#
تشجع الناس على التفكير النقدي والإبداعي، بدلاً من مجرد إنشاء قائمه بالخيارات أو الإجابات أو الاهتمامات
2
طريقه مجموعات التركيز 
طريقه العصف الذهني 
طريقه تحقيق الأحلام أو الرؤية 
طريقه التغيير الأكثر أهمية



#
تستخدم لجمع معلومات عامه، أوضح في التفاصيل وجمع الأراء حول مشكله من مجموعه صغيره من الأشخاص المختارين الذين يمثلون وجهات نظر مختلفة
1
طريقه مجموعات التركيز 
طريقه العصف الذهني 
طريقه تحقيق الأحلام أو الرؤية 
طريقه التغيير الأكثر أهميه



#
تساعد أصحاب المصلحة في المشروع على التفكير في مدى ملائمه الأنشطة القائمة على رؤى الناس للتنمية
3
طريقه مجموعات التركيز 
طريقه العصف الذهني 
طريقه تحقيق الأحلام أو الرؤية 
طريقه التغيير الأكثر أهميه



#
توفر تمثيل مرئي للمعلومات في سياق جغرافي معيت استنادا إلى تصورات أصحاب المصلحة لأى مشكله
3
نظم تحديد المواقع العالمية
GISطريقه 
طريقه رسم الخرائط
طريقه لتقويمات الموسمية


#
تستخدم لاكتشاف وتسجيل البيانات لفترات زمنيه مميزه لإظهار التغيرات الدورية مع مرور الوقت
3
طريقه الروتين اليومي 
طريقه التغيير الأكثر أهمية 
طريقه التقويمات الموسمية 
طريقه الخريطه الاجتماعية



#
تستخدم لتقييم الاختلافات الرئيسية في المهام اليومية وكيفية التغلب عليها
1
طريقه الروتين اليومي 
طريقه التغيير الأكثر أهمية 
طريقه التقويمات الموسمية 
طريقه الخرطة الاجتماعية



#
تستخدم لتحديد حالات التغييرات الهامة / الحرجة - الإيجابية والسلبية
2
طريقه الروتين اليومي 
طريقه التغيير الأكثر أهمية 
طريقه التقويمات الموسمية 
طريقه الخرطة الاجتماعية


#
رسم يتم فيه عرض الأفكار والمعلومات بطريقه تسهل على ذهنك حفظها وتذكرها
1
 طريقه الخرائط الذهنية 
طريقه تحليل المدخلات والمخرجات 
طريقه التقويمات الموسمية 
طريقه مخطط الارتباط المؤسسي



#
توضح مدى تفاعل الأفراد، أو المنظمات، أو المشاريع، أو الخدمات مع بعض البعض والأهمية النسبية لكل منهم في القضية التي يجرى تقييمها
2
طريقه الخرائط الذهنية 
طريقه تحليل المدخلات والمخرجات 
طريقه التقويمات الموسمية 
طريقه مخطط الارتباط المؤسسي



#
تحليل تفصيلي تساعد الأنظمة في تحليل المدخلات اللازمة لجعل النظام يعمل، وكذلك مخرجاته
2
طريقه الخرائط الذهنية 
طريقه تحليل المدخلات والمخرجات 
طريقه التقويمات الموسمية 
طريقه مخطط الارتباط المؤسسي



#
طريقه العصف الذهني من طرق . . . . 
4
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا 
المناقشة للمجموعات



#
طريقه نظم تحديد المواقع العالمية من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا 
المناقشة للمجموعات



#
طريقه تحليل الاتجاهات التاريخية للموارد الطبيعية المتجددة من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه الخرائط الذهنية من طرق . . . . 
1
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه مجموعات التركيز من طرق . . . . 
4
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه رسم الخرائط من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه التقويمات الموسمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه مخطط الارتباط المؤسسي من طرق . . . . 
1
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه التقويمات الموسمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه الخريطه الاجتماعية من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه الروتين اليومي من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه تحليل المدخلات والمخرجات من
1
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه خريطه الموارد والخدمات والفرص من طرق . . . . 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه التقويمات الموسمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه التغير الأكثر أهمية من طرق . . . . 
2
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
 من طرق . . . . GIS طريقه 
3
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
طريقه تحقيق الأحلام أو الرؤية من طرق . . . . 
4
تحليل الروابط والعلاقات 
الاتجاهات التاريخية والجداول الزمنية 
المعلومات الموزعة مكانيا
المناقشة للمجموعات



#
يوضح أهم الأنشطة التي يتم تنفيذها من قبل المؤسسة خلال اليوم وتكون تفصيليه مثل تقارير الأنشطة وتقارير حضور وانصراف الموظفين اليومي، وتكون عاده روتينية لا تحمل مؤشرات
4
تقارير المراقبة والمتابعة 
تقارير خارجيه 
تقارير غير دوريه 
التقرير اليومي


#
تكون مرتبطة بخطه موضوعه أو ببرنامج أو مشروع جارى تنفيذه، وعاده ما تتضمن عمليه مقارنه بين ما هو واقع وما كان يجب أن يتم وفقا للخطة أو البرنامج الموضوع، وتوضيح وتقديم تحليل لها وبيان مسبباتها
1
تقارير المراقبة والمتابعة 
تقارير خارجيه 
تقارير غير دوريه 
التقرير اليومي


#
تقارير تصدر لحاجه معينه أو بناء على طلب محدد دون وجود ضابط زمني لصدورها، ومثال عليها تقرير حول مشكله إدارية أو ماليه أو فنيه محدد
3
تقارير المراقبة والمتابعة 
تقارير دوريه 
تقارير غير دوريه 
التقرير اليومي



#
تهدف إلى الحكم على الكفاءة أو إعطاء درجات أو تقديرات تعبر عن مستوى الأداء خلال فتره التقييم
3
تقارير الأنشطة 
تقارير أوليه 
تقارير تقييم الأداء 
تقارير ماليه ومحاسبيه



#
تركز على وضع المؤسسة أو المشروع ماليا من حيث المصروفات والإيرادات والمركز المالي، وتظهرهذه التقارير العجز أو الربح المتحقق
4
تقارير الأنشطة 
تقارير أوليه 
تقارير تقييم الأداء 
تقارير ماليه ومحاسبيه



#
يصنف التقرير السنوي ضمن التقارير . . . . 
3
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#
تصنف تقارير المراقبة والمتابعة من ضمن تقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث توقيتها



#
تصنف التقارير الخارجية من ضمن التقارير . . . . 
2
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#
تصنف تقارير تقييم الأداء من ضمن تقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#
تصنف تقارير الأنشطة من ضمن تقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#
تصنف التقارير النهائية من ضمن التقارير . . . . 
3
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
من حيث توقيتها 
من حيث تكرارها



#
تصنف التقارير المالية والمحاسبية من ضمن التقارير . . . . 
1
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#
تصنف التقارير الداخلية من ضمن التقارير . . . . 
2
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها



#
يصنف التقرير النصفي من ضمن التقارير . . . . 
3
حسب المحتوى 
من حيث الجهة التي تصدر من أجلها 
حسب مدتها 
من حيث تكرارها




#
الرصد
1
عملية مستمرة من جمع وتحليل البيانات ومقارنتها مع ما هو مخطط ومتوقع،لمعرفة مدي كفاءة أداء المشروع أو البرنامج اعتمادا عل ى قياس مؤشرات محددة، ويستمر الرصد طوال فترة تنفيذ المشروع




#
التقييم
1
تقدير منهجي موضوعي لتصميم وتنفيذ ونتائج مشروع أو برنامج، ويتم تنفيذه عند نقط زمنية محددة مثل منتصف المدة وختام المشروع




#
البيانات الأولية
1
تجمع مباشرة من قبل المؤسسة من خلال المسوحات أو المشاهدة المباشرة والمقابلات




#
البيانات الثانوية
1
تستمد من بيانات سبق جمعها من قبل جهة أخري




#
المقيم الخارجي
1
شخص قادر علي رؤية البرنامج بنظرة جديدة باعتباره غير مشارك فيه




#
المقيم الداخلي
1
شخص من داخل البرنامج أو ممن يعرفون البرنامج جيدا يعرف فعليا اتجاه عمل البرنامج وكذلك أهدافه ومشاكله ونقاط ضعفه




#
خريطة للموارد والخدمات والفرص
1
تستخدم للحصول عل ى معلومات عن الموارد والخدمات المتاحة في المجتمع وتشمل الموارد، الخدمات، الأوضاع الاجتماعية، الاقتصادية، السكانية والجغرافية عن المنطقة التي يعيش فيها المجتمع





#
الخريطة الاجتماعية
1
تستخدم في جمع وتحليل المعلومات المتعلقة بأفراد المجتمع وهي من الطرق ذات المردود الجيد لأن نتائجها تعتبر مدخل لتوضيح التدرج حسب الثروة، حيث تستخدم للحصول على البيانات المتعلقة بطبيعة المساكن والسكان والمهن التي يمارسها أفراد المجتمع




#
التقرير الأسبوعي
1
يوضح أهم الأنشطة التي يتم تنفيذها في المؤسسة خلال الأسبوع وتكون تفصيلية مثل تقارير دوائر وأقسام المؤسسة الإنتاجية




#
التقرير الربعي
1
يوجز أنشطة المؤسسة خلال فترة ثلاث شهور ويعكس في طياته الإنجازات والأداء والمعوقات




#
تقارير دورية
1
يتم إصدارها بشكل متكرر ضمن فترات زمنية محددة




#
تقارير أولية
1
تقارير تقدم عند بدء المشروع أو النشاط أو المهمة وتتضمن معلومات عن الطاقم وخطة ومنهجية العمل




#
تقارير مرحلية
1
تقارير تقدم بفترة تنفيذ المشروع وقبل الانتها ء منه وتتضمن معلومات وبيانات فنية ومالية حول الأنشطة المنفذة وخط ة العمل والمعيقات التي تواجه عملية التنفيذ




#
تقارير نهائية
1
تقارير تقدم بنهاية المشروع وتعرض سردا تفصيليا (ماليا وفنيا) عن الأنشطة المنفذة خلال فترة المشروع




#
تقارير الأنشطة
1
يتم التركيز بهذا النوع من التقارير على الأنشطة من حيث عناصرها وآليات تنفيذها والمعيقات في سبيل القيام بها




#
المشروع
1
مشكلة أو حاجة معينة يتم تحديدها ضمن إطار منظم وتتضمن الاستثمار الأمثل للموارد في ظل وجود أهداف محددة وندرة في الموارد




#
البرنامج
1
يتكون من مجموعة مشاريع مبنية ضمن خطة واضحة المعالم ومشتركة  مع بعضها البعض في (جانب أو أكثر )موضوعيا، مكانيا، سكانيا، تنظيميا




#
النشاط
1
جزء من المشروع يتمثل في الإجراءات التي تحقق أهداف المشروع




#
دراسة الجدوى
1
تحليل لعناصر المشروعات الاقتصادية لتقرير الاستمرار فيه أو إلغاء الفكرة




#
الإطار المنطقي
1
وصف لكيفية استخدام الموارد (المدخلات) من خلال تنفيذ إجراءات وأنشطة للحصول على مجموعه من النتائج




#
تحليل المخاطر
1
تحديد كل العوامل التي يمكن أن تنشأ وتعترض المشروع وتؤثر سلبا على تنفيذه ومعدلات نجاحه




#
تحليل الوضع القائم
1
تحديد مدي احتياج الفئات المستهدفة للمشروع ومكوناته وأوليات هذه الاحتياجات، وتحديد الاحتياجات ذات الأولوية الأعلى




#
المؤشرات
1
متغيرات كمية أو نوعية توفر وسيلة موثقة لقياس الأداء أو الإنجاز

`,P0=e=>{let[,t,n]=/^!\[(.*)\]\((.*)\)$/.exec(e)||[];return[!!n,t,n]},E0=N0.split("#").map((e,t)=>{var u;let n=e.trim().split(`
`).filter(c=>c.trim().length>0),r=n.shift()||"failed to parse question",i=Number((u=n.shift())==null?void 0:u.trim()),[o,s,a]=P0(n[0]);o&&n.shift();const l=n.map((c,f)=>({id:mt(),text:c,correct:f+1===i}));return qt({questionText:r,answers:l,image:a,imageAlt:s})}),C0=`

جودة الغذاء
1
هي تحقيق رغبات المستهلك ف ي المنتج الغذائي

هي المحافظة على الجودة في مستوى قبولها لدى المستهلك

هي جميع الإجراءات المخططة والمنطقية اللازمة لتوفير الثقة المناسبة للمنتج لتلبية احتياجات محددة

#
مراقبة الجودة
1
هي المحافظة على الجودة في مستوى قبولها لدى المستهلك 
هي وثيقة تفصيلية للإجراءات العملية النوعية للجودة والموارد المخصصة لها وترتيب تسلسل أنشطتها لتحق يق جودة منتج معين
هي تسلسل مفهوم الجودة من خلال جميع الأشخاص والعمليات بالمصنع بدءا من الموردين إلى العملاء ونهاية بالمستهلك

#
سياسة الجودة
1
هي الشروط والتوجيهات التي تحددها المنشأ ة أو المؤسسة في مجال الجودة والمعدة مسبقا بواسطة الإدارة العليا
وهى تعنى الفحص الدوري المنتظم للوقوف على مدى الالتزام بأنشطة الجودة كما هو مخطط لها من ترتيبات وهل هذه الترتيبات تحقق الغرض منها
هي الشروط والتوجيهات التي تحددها المنشأة أو المؤسسة في مجال الجودة والمعدة مسبقا بواسطة الإدارة العليا

#
توكيد الجودة
1
هي جميع الإجراءات المخططة والمنطقية اللازمة لتوفير الثقة المناسبة للمنتج لتلبية احتياجات محددة
هي جميع الإجراءات اللازمة لإنتاج غذاء صحى غير ضار بصحة الإنسان
الهيئة المصرية العامة للمواصفات والجودة

#
خطة الجودة
1
هي وثيقة تفصيلية للإجراءات العملية النوعية للجودة والموارد المخصصة لها وترتيب تسلسل أنشطتها لتحقيق جودة منتج معين
لجنة دستور الغذاء 
هو التاريخ الذى يحدد نهاية فترة الصلاحية

#
نظام الجودة
1
هو الهيكل التنظيمي والمسئوليات والطرق والعمليات وإجراءات العمل والموارد المخصصة لتوضيح مسئوليات
هي تحقيق رغبات المستهلك في المنتج الغذائي
هي عملية اعتماد الشركة على أنها مطابقة لمتطلبات المواصفات الدولية حيث تمو الجهات المرخص لها بذا لك والمعتمدة من هيئة ال الجودة مط بق فعليا فتعتمد الشركة ويتم منحها شهادة تسمى بال شهادة الجودة (ISO) بتقيي م الشركة للتأكد من أن نظام

#
المواصفة
1
هي وثيقة معتمدة لتطب يق اشتراطات وخصائص وأنواع لمنتج معين وهى تصدر لتحديد التعامل مع الأخرين 
هي تسلسل مفهوم الجودة من خلال جميع الأشخاص والعمليات بالمصنع بدءا من الموردين إلى العملاء ونهاية بالمستهلك
هو التاريخ الذى يحدد نهاية فترة الصلاحية

#
سلسلة الجودة
1
هي تسلسل مفهوم الجودة من خلال جميع الأشخاص والعمليات بالمصنع بدء ا من الموردين إلى العملاء ونهاية بالمستهلك
هي جميع الإجراءات المخططة والمنطقي ة اللازمة لتوفير الثقة المناسبة للمنتج لتلبية احتياجا ت محددة
وهى تعنى الفحص الدور ي المنتظم للوقو ف على مدى الالتزام بأنشطة الجودة كما هو مخطط لها من ترتيبات وهل هذه الترتيبات تحقق الغر ض منها

#
مراجعة الجودة
1
وهى تعنى الفحص الدوري المنتظم للوقوف على مدى الالتزام بأنشط ة الجودة كما هو مخطط لها من ترتيبات وهل هذه الترتيبات ت حق ق الغرض منها
هي الوثيقة الأساسية المستخدمة للإرشاد والتطبيق لنظام إدارة الجودة وت صف هذه الوثيقة كل عناصر نظام الجودة الذى يحتاجه المشروع لتلبية احتياجات الجودة
هي جميع الإجراءات اللازمة لأنتاج غذاء صحى غير ضار بصحة الإنسان

#
ممارسة التصنيع الجيد
1
وهى وثيقة لوصف طريقة الصناعة القياسية وكيفية التحكم في ظروفها من حيث خطوات الصناعة، المصنع الآلات ، العمال ، الاختبارات المعملية في مصانع الأغذية لإنتاج غذاء آمن صحيا
هو وصول أي من الملوثات السابق ذكرها إلى الغذاء أو البيئة المحيطة بالغذاء
من نظم التشفير الخطى والأكثر شيوعا ويتم استخدام ه ف ي الدول الأوروبية وكثير من دول العالم كما أنه من المتبع في مصر

#
الاعتماد
1
هي عملية اعتماد الشركة على أنها مطابق ة لمتطلبات المواصفات الدولية حيث تمو الجهات المرخص لها بذالك والمعتمدة من هيئة ال تسمى بال شهادة الجودة (ISO) بتقييم الشركة للتأكد من أن نظام الجودة مط بق فعليا فتعتمد الشركة ويتم منحها شهادة
هي وثيقة لنظام إدارة الجودة يوضح فيها احتياجات تدريب العاملين في المجالات التي تحتاج إلى مهارة معينة
هو التاريخ الذى يحدد نهاية فترة الصلاحية

#
دليل الجودة
2
هي وثيقة لنظام إدارة الجودة يوضح فيها احتياجات تدريب العاملين في المجالات التي تحتاج إلى مهارة معينة
هي الوثيقة الأساسية المستخدمة للإرشاد والتطبيق لنظام إدارة الجودة وتص ف هذه الوثي قة كل عناصر نظام الجودة الذى يحتاجه المشروع لتلبية احتياجات الجودة
من نظم التشفير الخطى والأكثر شيوعا ويتم استخدامه في الدول الأوروبية وكثير من دول العالم كما أنه من المتبع في مصر

#
سجلات الجودة
3
هي وثي قة لنظام إدارة الجودة يوضح فيها احتياجات تدريب العاملين في المجالات التي تحتاج إلى مهارة معينة
هي وثيقة لنظام إدارة الجودة يوضح فيها احتياجات تدريب العاملين في المجالات التي تحتاج إلى مهارة معينة
هي سجلات مصممة لتوضيح نتائج الجودة المحددة للمنتج النهائي وأثناء التصنيع وللتحقق من التنفيذ الفعال لنظام إدارة الجودة كما توفر السجلات أيضآ وصول المنتج إلى المستوى المطلوب

#
وثائق التدريب
1
هى وثيقة لنظام إدارة الجودة يوضح فيها احتياجات تدريب العاملين في المجالات الت ي تحتاج إلى مهارة معينة
هو فعل لاستبعاد سبب عدم المطابقة الذى تم اكتشاف ه أو أي وضع غي ر مرغوب فيه
هي جميع الإجراءات المخططة والمنطقية اللازمة لتوفير الثقة المناسبة للمنتج لتلبية احتياجات محددة

#
غذاء أمن
3
هي جميع الإجراءات المخططة والمنطقية اللازمة لتوفير الثقة المناسبة للمنتج لتلبية احتياجات محددة 
هو وصول أي من الملوثات السابق ذكرها إلى الغذاء أو البيئة المحيطة بالغذاء 
هو الغذاء الخالي من الملوثات والمخاطر والذي لا يسبب أذى أو مرض للأنسان على المدى البعيد أو القريب وذالك بناء على نتائج تحاليل معملية وتجارب على الحيوانات

#
أمان الغذاء
3
هو وصول أ ي من الملوثات السابق ذكرها إلى الغذاء أو البيئة المحيطة بالغذاء
هو الغذاء الخالي من الملوثات والمخاطر والذى لا يسبب أذى أو مرض للأنسان على المدى البعيد أو القريب وذالك بناء على نتائج تحاليل معملية وتجارب على الحيوانات
هي جميع الإجراءات اللازمة لإنتاج غذاء صحى غير ضار بصحة الإنسان



#
تلوث الغذاء
1
هو وصول أي من الملوثات السابق ذكرها إلى الغذاء أو البيئة المحيطة بالغذاء
هو الغذاء الخالي من الملوثات والمخاطر والذى لا يسبب أذى أو مرض للأنسان على المدى البعيد أو القريب وذالك بناء على نتائج تحاليل معملية وتجارب على الحيوانات
هي جميع الإجراءا ت اللازمة لأنتاج غذاء صحى غير ضار بصحة الإنسان

#
فترة الصلاحية
1
هي فترة زمنية يحتفظ ف يها المنتج الغذائي بصفات ه الأساسية ويظل حتى نهايتها مستساغا ومقبولا وصالحا للاستهلاك الآدم ي وذلك تحت ظر و ف محددة للتعبئة والن قل والتخزين
هو التاريخ الذى يحدد نهاية فترة الصلاحية
هي جميع الإجراءات اللازم ة لأنتاج غذاء صحى غير ضار بصحة الإنسان

#
تاريخ انتهاء الصلاحية
2
هي فترة زمنية يحتفظ فيها المنتج الغذائي بصفاته الأساسية ويظل حتى نهايتها مستساغا ومقبو لا وصالحا للاستهلاك الآدمي وذلك تحت ظروف محددة للتعبئة والنقل والتخزين
هو التاريخ الذى يحدد نهاية فترة الصلاحية
هو وصول أي من الملوثات السابق ذكرها إلى الغذاء أو البيئة المحيطة بالغذاء

#
مراكز الاتصال
3
لجنة دستور الغذاء 
الهيئة المصرية العامة للمواصفات والجودة
وتعتبر مراكز الاتصال أماكن جيدة لجمع المعلوما ت عن رضاء العملاء وكذالك عن العملاء المحتملين حيث يمكن سؤالهم عن احتياجاتهم وتوقعاتها
#

W. H. O اختصار ل
3
لجنة دستور الغذاء
وهى وثيقة لو صف طريقة الصناعة القياسية وكيفية التحكم ف ي ظروفها من حيث خطوات الصناعة ، المصنع ، الآلات ، العمال ، الاختبارات المعملية ف ي مصانع الأغذية لإنتاج غذاء آمن صحيا
منظمة الصحة العالمية
#
(E. O. S)
3
منظمة الصحة العالمية 
لجنة دستور الغذاء 
الهيئة المصرية العامة للمواصفات والجودة
#
اختصارل : (CODEX)
1
لجنة دستور الغذاء 
منظمة الصحة العالمية 
منظمة الصحة العالمية

#
النظام الأوروب ي 13 – EAN
1
من نظم التشفير الخطى والأكثر شيوعا ويتم استخدامه ف ي الدول الأوروبية وكثير من دول العالم كما أنه من المتبع في مصر
من نظم التشفير الدائري والأكثر شيوعا ويتم استخدامه ف ي الدول الأوروبية وكثير من دولالعالم كما أنه من المتبع في مصر
من نظم التشفير المنقط والأكثر شيوعا ويتم استخدامه في الدول الأوروبية وكثير من دول العالم كما أنه من المتبع في مصر

#
الفعل التصحيحي
3
هو فعل التصحيح سبب عدم المطابقة الذى تم اكتشافه أو أي وضع غير مرغوب فيه
هو فعل القبول سبب عدم المطابقة الذى تم اكتشافه أو أيوضع غير مرغوب فيه
هو فعل لاستبعاد سبب عدم المطابقة الذى تم اكتشافه أو أي وضع غير مرغوب فيه

#
الرسم التوضيحي لدائرة . . . . 
3
![](a.png)
دميج 
مديج 
ديمنج 
جمديج

#
المربع واحد يدل على
1
![](b.png)
D
P
C
A

#
المربع الثاني يدل على
2
![](b.png)
D
P
C
A
#
المربع الثاني يدل على
3
![](b.png)
D
P
C
A
#
المربع الرابع يدل على
4
![](b.png)
D
P
C
A

#
يدل هذا الشكل على المعاملة الغذاء بواسطة 
3
![](c.png)
البسترة
التعميم
الإشعاع
الكيماوي

#
هي اختصار EAN ال
1
European Article Number ل 
EGYPT Article Number ل 
Euro Article Number ل 
Epean Article Number ل 



#
رقم 13 تعنى أنه مكون من 13 رقم مقسمة إلى . . . . مجموعات
2
5 مجموعات
4 مجموعات
6 مجموعات
2 مجموعات

#
أول ثلاثة أرقام على الشمال تمثل كود
1
كود البلد
كود المصنع
كود المنطقة
كود المنتج

#
الأربعة أرقام التالية تمثل كود
2
كود البلد
كود المصنع
كود المنطقة
كود المنتج
#
الخمسة أرقام التالية تمثل كود
4
كود البلد
كود المصنع
كود المنطقة
كود المنتج
#
أخر رقم يعبر عن كود
4
كود البلد
كود المصنع
كود المراجعة
كود المنتج

#
توكيد الجودة
1
نظام إدارة بيروقراطي
نظام إدارة ديموقراطى
نظام إدارة رأس مالي




#
توكيد الجودة
1
إجراءات غير مرنة
إجراءات مرنة
إجراءات متوازنة

#
الإدارة الشاملة للجودة
2
إجراءات غير مرنة
إجراءات مرنة
إجراءات متوازنة.

#
الإدارة الشاملة للجودة
1
يهتم بالتحسين المستمر
لا يهتم بالتحسين المستمر
مطلوب بدرجة متوسطة بالتحسين المستمر
#
توكيد الجودة
2
يهتم بالتحسين المستمر
لا يهتم بالتحسين المستمر
مطلوب بدرجة متوسطة بالتحسين المستمر

#
الإدارة الشاملة للجودة
2
نظام إدارة بيروقراطي
نظام إدارة ديموقراطى
نظام إدارة رأس مالي

#
الباركود للمنتجات الغذائي ة في مصر هو
1
622
633
366
362

#
استخدام مصطلح "حلال" لا يطلق على
1
الضفادع
السمن
الرنجة
لحوم الماعز



#
هيئة الأيزو هي وكالة متخصصة في التقييس مقرها
2
مصر
جنيف
كوبا
أمريكا

#
تتكون لجنة دستور الأغذية من
1
اللجنة التنفيذية: تتكون من رئيس اللجنة ونواب الرئيس الثلاثة ، 6 أعضاء تنتخبهم اللجنة من بين أعضائها
اللجنة التنفيذية: تتكون من رئيس اللجنة ونواب الرئيس الاثنين ، 4 أعضاء تنتخبهم اللجنة من بين أعضائها
اللجنة التنفيذية: تتكون من رئيس اللجنة ونواب الرئيس الثلاثة، 8 أعضاء تنتخبهم اللجنة من بين أعضائها

#
عند استعمال الترتيب الأبجدي يتبع الترتيب التالي
1
أبجد هوز حطي كلمن سعفص قرشت ثخد ضظغ
أبجد هوز حطي كلمن
سعفص قرشت ثخد ضظغ
#
Monitoring الرصيد: 
1
هو تنفيذ مجموعة مخططة من الملاحظات أو القياسات للتأكد من أن مقاييس التحكم تعمل كما هو مخطط لها
هى رسم تخطيط ي منهجي يمثل تتابع وانسياب خطوات الصناعة
الموجودة في خطة الهاسب Control measures هي الدليل المتحصل عليه على "سلامة الغذاء" والذى يدل على أن مقاييس التحكم 


`,T0=e=>{let[,t,n]=/^!\[(.*)\]\((.*)\)$/.exec(e)||[];return[!!n,t,n]},k0=C0.split("#").map((e,t)=>{var u;let n=e.trim().split(`
`).filter(c=>c.trim().length>0),r=n.shift()||"failed to parse question",i=Number((u=n.shift())==null?void 0:u.trim()),[o,s,a]=T0(n[0]);o&&n.shift();const l=n.map((c,f)=>({id:mt(),text:c,correct:f+1===i}));return qt({questionText:r,answers:l,image:a,imageAlt:s})}),O0=`

الحوادث المتعلقة بسلامة الغذاء قد ترجع الي
3
تلوث المواد الخام
عدم مراعاة الاشتراطات الصحية أثناء الأعداد والتجهيز
جميع ما سبق


#
تشير المخاطر الكيميائية لسلامة الغذاء الي
3
بقايا مواد التنظيف والتطهير
المبيدات الحشرية
جميع ما سبق


#
تلوث الغذاء هو
1
وصول أي من الملوثات إلى الغذاء أو البيئة المحيطة بالغذاء
وجود عيوب ظاهرية بالغذاء
أي تغير يحدث في الغذاء يؤثر علي خواصه


#
يحدد من المسئول عن عملية التنظيف والتطهير ومدي تكراريتها والمواد المستخدمة
1
برنامج التنظيف والتطهير
السياسة الصحية
دليل الجودة


#
من وسائل مكافحة الحشرات الطائرة داخل مصانع الأغذية
2
الصواعق الكهربائية
المصائد الضوئية
مساحق التعفير


#
نظام تحليل المخاطر ونقاط التحكم الحرجة هو
1
نظام وقائي ورقابي لتأكيد سلامة الغذاء
نظام لإدارة الجودة الشاملة
جميع ما سبق


#
يتكون فريق سلامة الغذاء من
4
إدارة الجودة
إدارة الإنتاج
إدارة الصيانة
جميع ما سبق




#
من البرامج التمهيدية لسلامة الغذاء
3
التنظيف والتطهير
مكافحة الآفات
جميع ما سبق


#
يعتبر وجود قطع زجاج أو أشياء غريبة في الغذاء من مصادر الخطر
1
الفيزيائية
البيولوجية
الكيميائية


#
من البرامج الأولية المتعلقة بالتشريعات الخاصة بنظام الهاسب والتي يجب تطويرها بالمنشأة قبل تطبيق نظام الهاسب بها وهي
4
إجراءات تتعلق بالمنشأة وإجراءات مراقبة الموردين
إجراءات المواصفات القياسية للمنتجات وإجراءات تنظيف معدات الإنتاج
إجراءات التنظيف والتطهير للمنشاة وإجراءاته الشؤون الصحية للأفراد
جميع ما سبق


#
يجب أن تلتزم إدارة الشركة باتخاذ كل الاحتياطيات اللازمة للتأكد من تطبيق العناصر الأتية لبرنامج الممارسات الشخصية الجيدة
4
السيطرة على الأمرا ض
الاعتبارات الصحية الشخصية
الملابس والالتهابات والأربطة المفتوحة
جميع ما سبق


#
يجب أن تكون الأرضيات في صالات الإنتاج
4
من مواد غير سامة وغير ممتصة ومن النوع المقاوم للماء
في حالة جيدة وذات ميل تجاه بالوعات الصرف
المواد المستخدمة في وصلات الأرضيات غير منفذة
جميع ما سبق


#
	مناطق الإنتاج التي يتم بها تجهيز منتجات الأغذية عالية الخطورة يجب أن تكون ذات
1
ضغط إيجابي
ضغط سلبي
منخفضة الضغط
جميع ما سبق خطأ






#
الخواص الواجب توافرها في مواد التنظيف المستخدمة في مصانع الأغذية
3
سهلة الامتزاج بالماء
لها قدرة علي استحلاب الدهون
جميع ما سبق


#
العوامل التي تحدد اختيار مادة التنظيف في مصانع الأغذية
3
نوعيه المياه المستخدمة
نوع نظام التنظيف المستخدم
جميع ما سبق


#
نظام تنظيف يتم من خلاله عمل دورة مغلقة لمحاليل التنظيف والتطهير دون تفكيك خطوط الإنتاج
1
CIP
COP
SOP


#
للتحقق من كفاءة تنظيف وتطهير الأسطح يتم
3
اخد مسحة من السطح وتحليلها ميكروبيولوجيا
الكشف عن المواد العضوية المتبقيةاخد مسحة من السطح وتحليلها ميكروبيولوجيا
جميع ما سبق


#
في مناطق التخزين يجب أن تكون هناك مسافة . . . . سم بين الرف السفلي والأرضيات
2
100 سم
15 سم
يمكن التخزين علي الأرضيات مباشرة


#
اشتراطات يجب تطبيقها على العاملين في التصنيع الغذائي
3
تغطية الشعر بغطاء راس - لا يسمح باستخدام طلاء الأظافر
عدم ارتداء أي مجوهرات أو إكسسوارات
جميع ما سبق


#
يجب أن تتوافر مع المواد الكيميائية المستخدمة في عمليات التنظيف
1
(MSDS) بطاقة المادة الكيميائية
موافقة وزارة الصحة
جميع ما سبق


#
يجب تدوير المخزون في مخازن الأغذي ة علي أساس
3
ما تم تخزينه أولاً يتم إخراجه أولا
الأقرب في انتهاء فترة الصلاحية يخرج أولا
Aاو B يمكن استخدام



#
من الاشتراطات الأساسية لغرف التبريد والتجميد ما يلى
4
-18م) ≥مؤشرات بيان درجة الحرارة ظاهرة ( التبريد +1:+4م /التجميد   
توافر ستائر بلاستيك على الأبواب من الداخل لعدم تسريب درجة التبريد أثناء فتح الأبواب
توافر سُترات واقية من البرد للعاملين
جميع ما سبق


#
يجب أن يترك حول المحيط الداخلي لكل مخزن مسافة . . . . سم ويطلق على هذه المسافة خط محيط التفتيش
1
50
100
150
25


#
عبارة عن إزالة لأسباب التلوث المرئية
1
التنظيف
التطهير
التعقيم
التهوية


#
يحدد جدول التنظيف والتطهير في المنشآت الغذائية
4
مكان التنظيف ومن المسئول
مواد التنظيف والتطهير
معدل التنظيف والتطهير
جميع ما سبق


#
تقوم مراقبة المخازن بالتفتيش على المخازن للتأكد من
4
وجود كارت التعريف ( كارت الصنف) علي الأصناف بالمخازن طبقا لنوعها
اكتشاف أي تلف أو تدهور بالمخزون
متابعة وضع المنتجات في مكانها المخصص
جميع ما سبق


#
هو الحالة المرضية التي تحث نتيجة تناول غذاء إما لكونه ملوثا بالميكروبات الممرضة أو نواتجها السامة أو نتيجة تناول ملوثات كيميائية
1
تسمم الغذاء
فساد الغذاء
انخفاض جودة الغذاء
جميع ما سبق




#
الحوادث المتعلقة بسلامة الأغذية على المستوي العالمي لوجود مصادر خطر بيولوجية أو كيميائية أو طبيعية ترجع الي واحد أو أكثر من العوامل التالية
4
تلوث المواد الخام
عدم مراعاة الاشتراطات الصحية في عمليات التجهيز، التصنيع، التعبئة، التخزين والنقل
التلوث من الأسطح غير النظيفة الملامسة للغذاء وعدم كفاءة برامج التنظيف والتطهير
جميع ما سبق


#
مكونات طبيعية تض ر بصحة الإنسان مثل أجزاء الحشرات أو مخلفات الإنسان )كالشعر( أو المجوهرات، أو خشب، أو حصى، أو شظايا معدنية، أو قطع زجاج . . . . إلخ
1
مصادر خطر فيزيائية
مصادر خطر كيميائية
مصادر خطر بيولوجية
مصادر خطر إشعاعية


#
موا د كيميائية تضر بصحة الإنسان مثل بقايا المبيدات والأسمدة ومواد التنظيف والتطهير والشحوم والمواد المضافة أو الحافظة وبقايا المضادات الحيوية والأدوية البيطرية . . . . إلخ
2
مصادر خطر فيزيائية
مصادر خطر كيميائية
مصادر خطر بيولوجية
مصادر خطر إشعاعية


#
كائنات حية ممرضة أو منتجة للسموم وتشمل البكتريا والفطريات والفيروسات والطفيليات وغيرها . . . . إلخ
3
مصادر خطر فيزيائية
مصادر خطر كيميائية
مصادر خطر بيولوجية
مصادر خطر إشعاعية


#
إجراء أو نشاط أو فعل يمكن استخدامه لمنع أو إزالة مخاطر سلامه الغذاء أو خفضها الى المستوي المقبول
1
اجراء سيطرة
الحد الحرج
نقطة تحكم حرجة
إجراء تصحيحي


#
مستوي مخاطر سلامة الغذاء والذي يجب ألا يتم تجاوزه في المنتج النهائي
1
المستوي المقبول
الحد الحرج
نقطة تحكم حرجة
إجراء السيطرة


#
وجود عامل بيولوجي أو كيميائي أو فيزيائي بالغذاء (أو يتعلق بالغذاء ) ويمكن أن يسبب تأثير ضار بصحة الإنسان(بما فيها الحساسية)
1
مصدر خطر
نقطة تحكم حرجة
حد حرج


#
والتي تفصل بين ما هو مقبول وغير مقبول  Measurable value القيمة القابلة للقياس
1
الحد الحرج
المستوي المقبول
نقطة تحكم حرجة
الإجراءات القياسية للتشغيل


#
الحد الحرج لعمليه التبريد
2
15 م
4 م
10 م
25 م



#

يحدث التلوث العرضى من
4

غذاء الى غذاء اخر
المعدات الى الغذاء
الاشخاص الى الغذاء
جميع ما سبق


#

تعتبر الافلاتوكسين
3

مخاطركميائية
مخاطر فيزيائية
مخاطر بيولوجية 
مسببات حساسية 


#

اى مما يلى يعتبر حد حرج
4

تنظيف منطقة اعداد الاغذية 
غسيل الفواكه
فحص وفرز الخضروات
الطهى الى درجة 70ْ م لمدة دقيقتين





#

يمكن تقسيم المخاطر سلامة الغذاء الى
4

بيولوجية , كميائية , معدانية
بيولوجية , فيزيائية , مسببات حساسية
بيولوجية , معدانية, مسببات حساسية
بيولوجية , كميائية , فيزيائية , مسببات حساسية


#

ترتبط سلامة الغذاء بحماية المستهلك من 
3

الغش و التدليس
ارتفاع الاسعار
المخاطر البيولوجية
جميع ما سبق


#

اى من المعايير  التالية لا يمكن اعتبار حد حرج عند انشاء خطة الهاسب
4

PH
درجة الحرارة 
نسبة اضافة مادة حافظة
التقييم الحسى


#

الخطوات الاساسية لنظام الهاسب . . . . خطوات
1
7
5
10
12


#

المبدا الثالث من مبادئ نظام الهاسب الاساسية
3

تحليل المخاطر
CCPs تحديد
وضع الحدود الحرج
التحقق


#

الاجراءات التى يجب اتباعها عند حدوث انحرافات تهدد سلامة الغذاء
2

المتابعة
الاجراءات التصحيحية
التحقق
الاجراءات الوقائية






#

تعد الاختبارات الميكروبيولوجية التى تجرى على نقاط مختليفة من التصنيع مثالا على
2

الاجراءات التصحيحية
التحقق
الحدود الحرج
تحليل المخاطر


#

يتطلب نظام تحليل المخاطر ونقاط التحكم الحرجة
4

التزام ودعم الادارة 
مشاركة جميع العاملين 
فريق متعدد التخصصات 
جميع ما سبق


#

تسلسل مراحل انتاج وتجهيز وتوزيع وتخزين ومعالجة الاغذية ومكوناتها بدءا من الانتاج الاولى وحتى الاستهلاك
2

سلسلة الامداد
سلسلة الغذائية 
مخطط العمليات 
خطة المراجعة 


#

يطلق على الخطوة التصنيعية والتى يمكن فيها تطبيق اجراءت النحكم الضرورى لمنع او تقليل خطر معنوى على سلامة الغذاء الى المستوى المقبول كذلك لا يوجد خطوة لاحقة لمنع او تقليل هذا الخطر
1

CCP
CP
CPRP
POA


#

يجب ان تتوافر فى وحدات غسيل الايدى فى مصانع الاغذية 
4

مصدر ماء ساخن
الصابون 
المطهر 
جميع ما سبق


#

نظام لتجديد وتقييم والتحكم فى المخاطر التى تهدد سلامة الاغذية بهدف انتاج غذاء امن صحيأ
1

HACCP
ISO 9001
ISO 14001
ISO45001
 

`,z0=e=>{let[,t,n]=/^!\[(.*)\]\((.*)\)$/.exec(e)||[];return[!!n,t,n]},R0=O0.split("#").map((e,t)=>{var u;let n=e.trim().split(`
`).filter(c=>c.trim().length>0),r=n.shift()||"failed to parse question",i=Number((u=n.shift())==null?void 0:u.trim()),[o,s,a]=z0(n[0]);o&&n.shift();const l=n.map((c,f)=>({id:mt(),text:c,correct:f+1===i}));return qt({questionText:r,answers:l,image:a,imageAlt:s})}),gp={"إرشاد زراعي":d0,"إدارة جودة — 1":k0,"إدارة جودة — 2":R0,"تجارة دولية — 1":v0,"تجارة دولية — 2":S0,"سياسة رزاعية — 1":p0,"سياسة رزاعية — 2":y0,"تقييم مشروعات — 1":E0},_0=()=>{},Ql=A.createContext(gp),Gl=A.createContext([]),ni=A.createContext(()=>{}),Xn=A.createContext(hp),ri=A.createContext(_0),A0=({children:e})=>{const[t,n]=A.useState(hp),[r,i]=A.useReducer(i0,[]);return T.jsx(ri.Provider,{value:n,children:T.jsx(ni.Provider,{value:i,children:T.jsx(Ql.Provider,{value:gp,children:T.jsx(Xn.Provider,{value:t,children:T.jsx(Gl.Provider,{value:r,children:e})})})})})},M0=""+new URL("burger.svg",import.meta.url).href;function Tt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function jc(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function K(e){return this instanceof K?(this.v=e,this):new K(e)}function vo(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(d){r[d]&&(i[d]=function(g){return new Promise(function(h,v){o.push([d,g,h,v])>1||a(d,g)})})}function a(d,g){try{l(r[d](g))}catch(h){f(o[0][3],h)}}function l(d){d.value instanceof K?Promise.resolve(d.value.v).then(u,c):f(o[0][2],d)}function u(d){a("next",d)}function c(d){a("throw",d)}function f(d,g){d(g),o.shift(),o.length&&a(o[0][0],o[0][1])}}function wo(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(s){return(n=!n)?{value:K(e[i](s)),done:!1}:o?o(s):s}:o}}function In(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof jc=="function"?jc(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(u){o({value:u,done:a})},s)}}function b0(e){return typeof e<"u"&&e!==null}function vp(e,t){if(!b0(e)||typeof e!="object")return!1;for(const n of t)if(!I0(e,n))return!1;return!0}function I0(e,t){return typeof e=="object"&&t in e}function Xl(e){return vp(e,["name","key"])&&typeof e.key=="string"&&typeof e.name=="string"}function Yl(e){return vp(e,["signature"])&&typeof e.signature=="string"}function Zl(e){const t=e;return t&&typeof t.getToken=="function"&&(t.signRequest===void 0||t.getToken.length>0)}function Lc(e,t=!0){const n=e.toISOString();return t?n.substring(0,n.length-1)+"0000Z":n.substring(0,n.length-5)+"Z"}const D0="HTTP/1.1",We=`\r
`,wp="https://storage.azure.com/.default",xo={AUTHORIZATION:"authorization",CONTENT_LENGTH:"content-length",CONTENT_MD5:"content-md5",CONTENT_TYPE:"content-type",CONTENT_TRANSFER_ENCODING:"content-transfer-encoding",DATE:"date",X_MS_DATE:"x-ms-date",X_MS_VERSION:"x-ms-version"},xp=["Access-Control-Allow-Origin","Cache-Control","Content-Length","Content-Type","Date","Prefer","Preference-Applied","Request-Id","traceparent","Transfer-Encoding","User-Agent","x-ms-client-request-id","x-ms-user-agent","x-ms-date","x-ms-error-code","x-ms-request-id","x-ms-return-client-request-id","x-ms-version","Accept-Ranges","Accept","Content-Disposition","Content-Encoding","Content-Language","Content-MD5","Content-Range","ETag","Last-Modified","Server","Vary","x-ms-content-crc64","x-ms-copy-action","x-ms-copy-completion-time","x-ms-copy-id","x-ms-copy-progress","x-ms-copy-status","x-ms-continuation-NextTableName","x-ms-continuation-NextPartitionKey","x-ms-continuation-NextRowKey","x-ms-has-immutability-policy","x-ms-has-legal-hold","x-ms-lease-state","x-ms-lease-status","x-ms-range","x-ms-request-server-encrypted","x-ms-server-encrypted","x-ms-snapshot","x-ms-source-range","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","x-ms-access-tier","x-ms-access-tier-change-time","x-ms-access-tier-inferred","x-ms-account-kind","x-ms-archive-status","x-ms-copy-destination-snapshot","x-ms-creation-time","x-ms-default-encryption-scope","x-ms-delete-type-permanent","x-ms-deny-encryption-scope-override","x-ms-encryption-algorithm","x-ms-incremental-copy","x-ms-lease-action","x-ms-lease-break-period","x-ms-lease-duration","x-ms-lease-id","x-ms-lease-time","x-ms-page-write","x-ms-proposed-lease-id","x-ms-range-get-content-md5","x-ms-rehydrate-priority","x-ms-sequence-number-action","x-ms-sku-name","x-ms-source-content-md5","x-ms-source-if-match","x-ms-source-if-modified-since","x-ms-source-if-none-match","x-ms-source-if-unmodified-since","x-ms-tag-count","x-ms-encryption-key-sha256"],$0="tablesSecondaryEndpointPolicy",Ma="tables-secondary-endpoint",j0="-secondary",L0={name:$0,sendRequest:async(e,t)=>(e.headers.get(Ma)&&(e.headers.delete(Ma),e.url=q0(e.url)),t(e))};function U0(e){var t;const n={[Ma]:"true"};return Object.assign(Object.assign({},e),{requestOptions:Object.assign(Object.assign({},e.requestOptions),{customHeaders:Object.assign(Object.assign({},(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders),n)})})}function q0(e){const t=new URL(e),n=t.hostname.split(".");return n.length>1&&(n[0]=`${n[0]}${j0}`),t.hostname=n.join("."),t.toString()}const ba="$",Sp="_";if(!document||!DOMParser||!Node||!XMLSerializer)throw new Error('This library depends on the following DOM objects: ["document", "DOMParser", "Node", "XMLSerializer"] to parse XML, but some of these are undefined. You may provide a polyfill to make these globally available in order to support your environment. For more information, please refer to https://aka.ms/azsdk/js/web-workers. ');let tn;try{typeof self.trustedTypes<"u"&&(tn=self.trustedTypes.createPolicy("@azure/core-xml#xml.browser",{createHTML:e=>e}))}catch{console.warn('Could not create trusted types policy "@azure/core-xml#xml.browser"')}const Hi=document.implementation.createDocument(null,null,null),Np=new DOMParser;function Pp(e,t={}){var n,r,i,o,s,a;try{const l={rootName:(n=t.rootName)!==null&&n!==void 0?n:"",includeRoot:(r=t.includeRoot)!==null&&r!==void 0?r:!1,xmlCharKey:(i=t.xmlCharKey)!==null&&i!==void 0?i:Sp,cdataPropName:(o=t.cdataPropName)!==null&&o!==void 0?o:"__cdata",stopNodes:(s=t.stopNodes)!==null&&s!==void 0?s:[]},u=Np.parseFromString((a=tn==null?void 0:tn.createHTML(e))!==null&&a!==void 0?a:e,"application/xml");F0(u);let c;return l.includeRoot?c=Ia(u,l):c=Ia(u.childNodes[0],l),Promise.resolve(c)}catch(l){return Promise.reject(l)}}let hr;function H0(){var e,t;if(hr===void 0)try{const n=(e=tn==null?void 0:tn.createHTML("INVALID"))!==null&&e!==void 0?e:"INVALID";hr=(t=Np.parseFromString(n,"text/xml").getElementsByTagName("parsererror")[0].namespaceURI)!==null&&t!==void 0?t:""}catch{hr=""}return hr}function F0(e){const t=e.getElementsByTagName("parsererror");if(t.length>0&&H0()){for(let n=0;n<t.length;n++)if(t[n].namespaceURI===hr)throw new Error(t[n].innerHTML)}}function V0(e){return!!e.attributes}function B0(e){return V0(e)&&e.hasAttributes()?e:void 0}function Ia(e,t){var n;let r={};const i=e.childNodes.length,o=e.childNodes[0],s=o&&i===1&&o.nodeType===Node.TEXT_NODE&&o.nodeValue||void 0,a=B0(e);if(a){r[ba]={};for(let l=0;l<a.attributes.length;l++){const u=a.attributes[l];r[ba][u.nodeName]=u.nodeValue}s&&(r[t.xmlCharKey]=s)}else i===0?r="":s&&(r=s);if(!s)for(let l=0;l<i;l++){const u=e.childNodes[l];if((u==null?void 0:u.nodeType)===Node.CDATA_SECTION_NODE)r=u.textContent;else if(((n=u==null?void 0:u.firstChild)===null||n===void 0?void 0:n.nodeType)===Node.CDATA_SECTION_NODE)r[u.nodeName]=u.textContent;else if(u.nodeType!==Node.TEXT_NODE){const c=Ia(u,t);r[u.nodeName]?Array.isArray(r[u.nodeName])?r[u.nodeName].push(c):r[u.nodeName]=[r[u.nodeName],c]:r[u.nodeName]=c}}return r}const K0=new XMLSerializer;function Ep(e,t={}){var n,r,i,o,s;const a={rootName:(n=t.rootName)!==null&&n!==void 0?n:"root",includeRoot:(r=t.includeRoot)!==null&&r!==void 0?r:!1,xmlCharKey:(i=t.xmlCharKey)!==null&&i!==void 0?i:Sp,cdataPropName:(o=t.cdataPropName)!==null&&o!==void 0?o:"__cdata",stopNodes:(s=t.stopNodes)!==null&&s!==void 0?s:[]},l=Da(e,a.rootName,a)[0];return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+K0.serializeToString(l)}function W0(e){const t=[];for(const n of Object.keys(e)){const r=Hi.createAttribute(n);r.value=e[n].toString(),t.push(r)}return t}function Da(e,t,n){if(e==null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"){const r=Hi.createElement(t);return r.textContent=e==null?"":e.toString(),[r]}else if(Array.isArray(e)){const r=[];for(const i of e)for(const o of Da(i,t,n))r.push(o);return r}else if(typeof e=="object"){const r=Hi.createElement(t);for(const i of Object.keys(e))if(i===ba)for(const o of W0(e[i]))r.attributes.setNamedItem(o);else if(i===n.xmlCharKey)r.textContent=e[i].toString();else if(i===n.cdataPropName){const o=Hi.createCDATASection(e[i].toString());r.appendChild(o)}else for(const o of Da(e[i],i,n))r.appendChild(o);return[r]}else throw new Error(`Illegal value passed to buildObject: ${e}`)}function Cp(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function Tp(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}const se="$",Gr="_";function Q0(e,t){return t!=="Composite"&&t!=="Dictionary"&&(typeof e=="string"||typeof e=="number"||typeof e=="boolean"||(t==null?void 0:t.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i))!==null||e===void 0||e===null)}const G0=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function X0(e){return G0.test(e)}const Y0=/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;function Z0(e){return Y0.test(e)}function J0(e){const t=Object.assign(Object.assign({},e.headers),e.body);return e.hasNullableType&&Object.getOwnPropertyNames(t).length===0?e.shouldWrapBody?{body:null}:null:e.shouldWrapBody?Object.assign(Object.assign({},e.headers),{body:e.body}):t}function Uc(e,t){var n,r;const i=e.parsedHeaders;if(e.request.method==="HEAD")return Object.assign(Object.assign({},i),{body:e.parsedBody});const o=t&&t.bodyMapper,s=!!(o!=null&&o.nullable),a=o==null?void 0:o.type.name;if(a==="Stream")return Object.assign(Object.assign({},i),{blobBody:e.blobBody,readableStreamBody:e.readableStreamBody});const l=a==="Composite"&&o.type.modelProperties||{},u=Object.keys(l).some(c=>l[c].serializedName==="");if(a==="Sequence"||u){const c=(n=e.parsedBody)!==null&&n!==void 0?n:[];for(const f of Object.keys(l))l[f].serializedName&&(c[f]=(r=e.parsedBody)===null||r===void 0?void 0:r[f]);if(i)for(const f of Object.keys(i))c[f]=i[f];return s&&!e.parsedBody&&!i&&Object.getOwnPropertyNames(l).length===0?null:c}return J0({body:e.parsedBody,headers:i,hasNullableType:s,shouldWrapBody:Q0(e.parsedBody,a)})}class ev{constructor(t={},n=!1){this.modelMappers=t,this.isXML=n}validateConstraints(t,n,r){const i=(o,s)=>{throw new Error(`"${r}" with value "${n}" should satisfy the constraint "${o}": ${s}.`)};if(t.constraints&&n!==void 0&&n!==null){const{ExclusiveMaximum:o,ExclusiveMinimum:s,InclusiveMaximum:a,InclusiveMinimum:l,MaxItems:u,MaxLength:c,MinItems:f,MinLength:d,MultipleOf:g,Pattern:h,UniqueItems:v}=t.constraints;if(o!==void 0&&n>=o&&i("ExclusiveMaximum",o),s!==void 0&&n<=s&&i("ExclusiveMinimum",s),a!==void 0&&n>a&&i("InclusiveMaximum",a),l!==void 0&&n<l&&i("InclusiveMinimum",l),u!==void 0&&n.length>u&&i("MaxItems",u),c!==void 0&&n.length>c&&i("MaxLength",c),f!==void 0&&n.length<f&&i("MinItems",f),d!==void 0&&n.length<d&&i("MinLength",d),g!==void 0&&n%g!==0&&i("MultipleOf",g),h){const N=typeof h=="string"?new RegExp(h):h;(typeof n!="string"||n.match(N)===null)&&i("Pattern",h)}v&&n.some((N,m,p)=>p.indexOf(N)!==m)&&i("UniqueItems",v)}}serialize(t,n,r,i={xml:{}}){var o,s,a;const l={xml:{rootName:(o=i.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=i.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(a=i.xml.xmlCharKey)!==null&&a!==void 0?a:Gr}};let u={};const c=t.type.name;r||(r=t.serializedName),c.match(/^Sequence$/i)!==null&&(u=[]),t.isConstant&&(n=t.defaultValue);const{required:f,nullable:d}=t;if(f&&d&&n===void 0)throw new Error(`${r} cannot be undefined.`);if(f&&!d&&n==null)throw new Error(`${r} cannot be null or undefined.`);if(!f&&d===!1&&n===null)throw new Error(`${r} cannot be null.`);return n==null||c.match(/^any$/i)!==null?u=n:c.match(/^(Number|String|Boolean|Object|Stream|Uuid)$/i)!==null?u=sv(c,r,n):c.match(/^Enum$/i)!==null?u=av(r,t.type.allowedValues,n):c.match(/^(Date|DateTime|TimeSpan|DateTimeRfc1123|UnixTime)$/i)!==null?u=cv(c,n,r):c.match(/^ByteArray$/i)!==null?u=lv(r,n):c.match(/^Base64Url$/i)!==null?u=uv(r,n):c.match(/^Sequence$/i)!==null?u=dv(this,t,n,r,!!this.isXML,l):c.match(/^Dictionary$/i)!==null?u=fv(this,t,n,r,!!this.isXML,l):c.match(/^Composite$/i)!==null&&(u=mv(this,t,n,r,!!this.isXML,l)),u}deserialize(t,n,r,i={xml:{}}){var o,s,a,l;const u={xml:{rootName:(o=i.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=i.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(a=i.xml.xmlCharKey)!==null&&a!==void 0?a:Gr},ignoreUnknownProperties:(l=i.ignoreUnknownProperties)!==null&&l!==void 0?l:!1};if(n==null)return this.isXML&&t.type.name==="Sequence"&&!t.xmlIsWrapped&&(n=[]),t.defaultValue!==void 0&&(n=t.defaultValue),n;let c;const f=t.type.name;if(r||(r=t.serializedName),f.match(/^Composite$/i)!==null)c=hv(this,t,n,r,u);else{if(this.isXML){const d=u.xml.xmlCharKey;n[se]!==void 0&&n[d]!==void 0&&(n=n[d])}f.match(/^Number$/i)!==null?(c=parseFloat(n),isNaN(c)&&(c=n)):f.match(/^Boolean$/i)!==null?n==="true"?c=!0:n==="false"?c=!1:c=n:f.match(/^(String|Enum|Object|Stream|Uuid|TimeSpan|any)$/i)!==null?c=n:f.match(/^(Date|DateTime|DateTimeRfc1123)$/i)!==null?c=new Date(n):f.match(/^UnixTime$/i)!==null?c=ov(n):f.match(/^ByteArray$/i)!==null?c=Tp(n):f.match(/^Base64Url$/i)!==null?c=rv(n):f.match(/^Sequence$/i)!==null?c=vv(this,t,n,r,u):f.match(/^Dictionary$/i)!==null&&(c=gv(this,t,n,r,u))}return t.isConstant&&(c=t.defaultValue),c}}function Jl(e={},t=!1){return new ev(e,t)}function tv(e,t){let n=e.length;for(;n-1>=0&&e[n-1]===t;)--n;return e.substr(0,n)}function nv(e){if(!e)return;if(!(e instanceof Uint8Array))throw new Error("Please provide an input of type Uint8Array for converting to Base64Url.");const t=Cp(e);return tv(t,"=").replace(/\+/g,"-").replace(/\//g,"_")}function rv(e){if(e){if(e&&typeof e.valueOf()!="string")throw new Error("Please provide an input of type string for converting to Uint8Array");return e=e.replace(/-/g,"+").replace(/_/g,"/"),Tp(e)}}function $a(e){const t=[];let n="";if(e){const r=e.split(".");for(const i of r)i.charAt(i.length-1)==="\\"?n+=i.substr(0,i.length-1)+".":(n+=i,t.push(n),n="")}return t}function iv(e){if(e)return typeof e.valueOf()=="string"&&(e=new Date(e)),Math.floor(e.getTime()/1e3)}function ov(e){if(e)return new Date(e*1e3)}function sv(e,t,n){if(n!=null){if(e.match(/^Number$/i)!==null){if(typeof n!="number")throw new Error(`${t} with value ${n} must be of type number.`)}else if(e.match(/^String$/i)!==null){if(typeof n.valueOf()!="string")throw new Error(`${t} with value "${n}" must be of type string.`)}else if(e.match(/^Uuid$/i)!==null){if(!(typeof n.valueOf()=="string"&&Z0(n)))throw new Error(`${t} with value "${n}" must be of type string and a valid uuid.`)}else if(e.match(/^Boolean$/i)!==null){if(typeof n!="boolean")throw new Error(`${t} with value ${n} must be of type boolean.`)}else if(e.match(/^Stream$/i)!==null){const r=typeof n;if(r!=="string"&&typeof n.pipe!="function"&&!(n instanceof ArrayBuffer)&&!ArrayBuffer.isView(n)&&!((typeof Blob=="function"||typeof Blob=="object")&&n instanceof Blob)&&r!=="function")throw new Error(`${t} must be a string, Blob, ArrayBuffer, ArrayBufferView, NodeJS.ReadableStream, or () => NodeJS.ReadableStream.`)}}return n}function av(e,t,n){if(!t)throw new Error(`Please provide a set of allowedValues to validate ${e} as an Enum Type.`);if(!t.some(i=>typeof i.valueOf()=="string"?i.toLowerCase()===n.toLowerCase():i===n))throw new Error(`${n} is not a valid value for ${e}. The valid values are: ${JSON.stringify(t)}.`);return n}function lv(e,t){if(t!=null){if(!(t instanceof Uint8Array))throw new Error(`${e} must be of type Uint8Array.`);t=Cp(t)}return t}function uv(e,t){if(t!=null){if(!(t instanceof Uint8Array))throw new Error(`${e} must be of type Uint8Array.`);t=nv(t)}return t}function cv(e,t,n){if(t!=null){if(e.match(/^Date$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in ISO8601 format.`);t=t instanceof Date?t.toISOString().substring(0,10):new Date(t).toISOString().substring(0,10)}else if(e.match(/^DateTime$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in ISO8601 format.`);t=t instanceof Date?t.toISOString():new Date(t).toISOString()}else if(e.match(/^DateTimeRfc1123$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in RFC-1123 format.`);t=t instanceof Date?t.toUTCString():new Date(t).toUTCString()}else if(e.match(/^UnixTime$/i)!==null){if(!(t instanceof Date||typeof t.valueOf()=="string"&&!isNaN(Date.parse(t))))throw new Error(`${n} must be an instanceof Date or a string in RFC-1123/ISO8601 format for it to be serialized in UnixTime/Epoch format.`);t=iv(t)}else if(e.match(/^TimeSpan$/i)!==null&&!X0(t))throw new Error(`${n} must be a string in ISO 8601 format. Instead was "${t}".`)}return t}function dv(e,t,n,r,i,o){var s;if(!Array.isArray(n))throw new Error(`${r} must be of type Array.`);let a=t.type.element;if(!a||typeof a!="object")throw new Error(`element" metadata for an Array must be defined in the mapper and it must of type "object" in ${r}.`);a.type.name==="Composite"&&a.type.className&&(a=(s=e.modelMappers[a.type.className])!==null&&s!==void 0?s:a);const l=[];for(let u=0;u<n.length;u++){const c=e.serialize(a,n[u],r,o);if(i&&a.xmlNamespace){const f=a.xmlNamespacePrefix?`xmlns:${a.xmlNamespacePrefix}`:"xmlns";a.type.name==="Composite"?(l[u]=Object.assign({},c),l[u][se]={[f]:a.xmlNamespace}):(l[u]={},l[u][o.xml.xmlCharKey]=c,l[u][se]={[f]:a.xmlNamespace})}else l[u]=c}return l}function fv(e,t,n,r,i,o){if(typeof n!="object")throw new Error(`${r} must be of type object.`);const s=t.type.value;if(!s||typeof s!="object")throw new Error(`"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ${r}.`);const a={};for(const l of Object.keys(n)){const u=e.serialize(s,n[l],r,o);a[l]=zp(s,u,i,o)}if(i&&t.xmlNamespace){const l=t.xmlNamespacePrefix?`xmlns:${t.xmlNamespacePrefix}`:"xmlns",u=a;return u[se]={[l]:t.xmlNamespace},u}return a}function pv(e,t,n){const r=t.type.additionalProperties;if(!r&&t.type.className){const i=kp(e,t,n);return i==null?void 0:i.type.additionalProperties}return r}function kp(e,t,n){const r=t.type.className;if(!r)throw new Error(`Class name for model "${n}" is not provided in the mapper "${JSON.stringify(t,void 0,2)}".`);return e.modelMappers[r]}function Op(e,t,n){let r=t.type.modelProperties;if(!r){const i=kp(e,t,n);if(!i)throw new Error(`mapper() cannot be null or undefined for model "${t.type.className}".`);if(r=i==null?void 0:i.type.modelProperties,!r)throw new Error(`modelProperties cannot be null or undefined in the mapper "${JSON.stringify(i)}" of type "${t.type.className}" for object "${n}".`)}return r}function mv(e,t,n,r,i,o){if(So(e,t)&&(t=Rp(e,t,n,"clientName")),n!=null){const s={},a=Op(e,t,r);for(const u of Object.keys(a)){const c=a[u];if(c.readOnly)continue;let f,d=s;if(e.isXML)c.xmlIsWrapped?f=c.xmlName:f=c.xmlElementName||c.xmlName;else{const g=$a(c.serializedName);f=g.pop();for(const h of g){const v=d[h];v==null&&(n[u]!==void 0&&n[u]!==null||c.defaultValue!==void 0)&&(d[h]={}),d=d[h]}}if(d!=null){if(i&&t.xmlNamespace){const m=t.xmlNamespacePrefix?`xmlns:${t.xmlNamespacePrefix}`:"xmlns";d[se]=Object.assign(Object.assign({},d[se]),{[m]:t.xmlNamespace})}const g=c.serializedName!==""?r+"."+c.serializedName:r;let h=n[u];const v=So(e,t);v&&v.clientName===u&&h==null&&(h=t.serializedName);const N=e.serialize(c,h,g,o);if(N!==void 0&&f!==void 0&&f!==null){const m=zp(c,N,i,o);i&&c.xmlIsAttribute?(d[se]=d[se]||{},d[se][f]=N):i&&c.xmlIsWrapped?d[f]={[c.xmlElementName]:m}:d[f]=m}}}const l=pv(e,t,r);if(l){const u=Object.keys(a);for(const c in n)u.every(d=>d!==c)&&(s[c]=e.serialize(l,n[c],r+'["'+c+'"]',o))}return s}return n}function zp(e,t,n,r){if(!n||!e.xmlNamespace)return t;const o={[e.xmlNamespacePrefix?`xmlns:${e.xmlNamespacePrefix}`:"xmlns"]:e.xmlNamespace};if(["Composite"].includes(e.type.name)){if(t[se])return t;{const a=Object.assign({},t);return a[se]=o,a}}const s={};return s[r.xml.xmlCharKey]=t,s[se]=o,s}function yv(e,t){return[se,t.xml.xmlCharKey].includes(e)}function hv(e,t,n,r,i){var o,s;const a=(o=i.xml.xmlCharKey)!==null&&o!==void 0?o:Gr;So(e,t)&&(t=Rp(e,t,n,"serializedName"));const l=Op(e,t,r);let u={};const c=[];for(const d of Object.keys(l)){const g=l[d],h=$a(l[d].serializedName);c.push(h[0]);const{serializedName:v,xmlName:N,xmlElementName:m}=g;let p=r;v!==""&&v!==void 0&&(p=r+"."+v);const y=g.headerCollectionPrefix;if(y){const w={};for(const x of Object.keys(n))x.startsWith(y)&&(w[x.substring(y.length)]=e.deserialize(g.type.value,n[x],p,i)),c.push(x);u[d]=w}else if(e.isXML)if(g.xmlIsAttribute&&n[se])u[d]=e.deserialize(g,n[se][N],p,i);else if(g.xmlIsMsText)n[a]!==void 0?u[d]=n[a]:typeof n=="string"&&(u[d]=n);else{const w=m||N||v;if(g.xmlIsWrapped){const x=n[N],E=(s=x==null?void 0:x[m])!==null&&s!==void 0?s:[];u[d]=e.deserialize(g,E,p,i),c.push(N)}else{const x=n[w];u[d]=e.deserialize(g,x,p,i),c.push(w)}}else{let w,x=n,E=0;for(const b of h){if(!x)break;E++,x=x[b]}x===null&&E<h.length&&(x=void 0),w=x;const P=t.type.polymorphicDiscriminator;P&&d===P.clientName&&w==null&&(w=t.serializedName);let O;if(Array.isArray(n[d])&&l[d].serializedName===""){w=n[d];const b=e.deserialize(g,w,p,i);for(const[z,X]of Object.entries(u))Object.prototype.hasOwnProperty.call(b,z)||(b[z]=X);u=b}else(w!==void 0||g.defaultValue!==void 0)&&(O=e.deserialize(g,w,p,i),u[d]=O)}}const f=t.type.additionalProperties;if(f){const d=g=>{for(const h in l)if($a(l[h].serializedName)[0]===g)return!1;return!0};for(const g in n)d(g)&&(u[g]=e.deserialize(f,n[g],r+'["'+g+'"]',i))}else if(n&&!i.ignoreUnknownProperties)for(const d of Object.keys(n))u[d]===void 0&&!c.includes(d)&&!yv(d,i)&&(u[d]=n[d]);return u}function gv(e,t,n,r,i){const o=t.type.value;if(!o||typeof o!="object")throw new Error(`"value" metadata for a Dictionary must be defined in the mapper and it must of type "object" in ${r}`);if(n){const s={};for(const a of Object.keys(n))s[a]=e.deserialize(o,n[a],r,i);return s}return n}function vv(e,t,n,r,i){var o;let s=t.type.element;if(!s||typeof s!="object")throw new Error(`element" metadata for an Array must be defined in the mapper and it must of type "object" in ${r}`);if(n){Array.isArray(n)||(n=[n]),s.type.name==="Composite"&&s.type.className&&(s=(o=e.modelMappers[s.type.className])!==null&&o!==void 0?o:s);const a=[];for(let l=0;l<n.length;l++)a[l]=e.deserialize(s,n[l],`${r}[${l}]`,i);return a}return n}function wv(e,t,n){const r=[n];for(;r.length;){const i=r.shift(),o=t===i?t:i+"."+t;if(Object.prototype.hasOwnProperty.call(e,o))return e[o];for(const[s,a]of Object.entries(e))s.startsWith(i+".")&&a.type.uberParent===i&&a.type.className&&r.push(a.type.className)}}function Rp(e,t,n,r){var i;const o=So(e,t);if(o){let s=o[r];if(s){r==="serializedName"&&(s=s.replace(/\\/gi,""));const a=n[s],l=(i=t.type.uberParent)!==null&&i!==void 0?i:t.type.className;if(typeof a=="string"&&l){const u=wv(e.modelMappers.discriminators,a,l);u&&(t=u)}}}return t}function So(e,t){return t.type.polymorphicDiscriminator||qc(e,t.type.uberParent)||qc(e,t.type.className)}function qc(e,t){return t&&e.modelMappers[t]&&e.modelMappers[t].type.polymorphicDiscriminator}const Dn={Base64Url:"Base64Url",Boolean:"Boolean",ByteArray:"ByteArray",Composite:"Composite",Date:"Date",DateTime:"DateTime",DateTimeRfc1123:"DateTimeRfc1123",Dictionary:"Dictionary",Enum:"Enum",Number:"Number",Object:"Object",Sequence:"Sequence",String:"String",Stream:"Stream",TimeSpan:"TimeSpan",UnixTime:"UnixTime"},Hc=new Set(["Deserialize","Serialize","Retry","Sign"]);class No{constructor(t){var n;this._policies=[],this._policies=(n=t==null?void 0:t.slice(0))!==null&&n!==void 0?n:[],this._orderedPolicies=void 0}addPolicy(t,n={}){if(n.phase&&n.afterPhase)throw new Error("Policies inside a phase cannot specify afterPhase.");if(n.phase&&!Hc.has(n.phase))throw new Error(`Invalid phase name: ${n.phase}`);if(n.afterPhase&&!Hc.has(n.afterPhase))throw new Error(`Invalid afterPhase name: ${n.afterPhase}`);this._policies.push({policy:t,options:n}),this._orderedPolicies=void 0}removePolicy(t){const n=[];return this._policies=this._policies.filter(r=>t.name&&r.policy.name===t.name||t.phase&&r.options.phase===t.phase?(n.push(r.policy),!1):!0),this._orderedPolicies=void 0,n}sendRequest(t,n){return this.getOrderedPolicies().reduceRight((o,s)=>a=>s.sendRequest(a,o),o=>t.sendRequest(o))(n)}getOrderedPolicies(){return this._orderedPolicies||(this._orderedPolicies=this.orderPolicies()),this._orderedPolicies}clone(){return new No(this._policies)}static create(){return new No}orderPolicies(){const t=[],n=new Map;function r(h){return{name:h,policies:new Set,hasRun:!1,hasAfterPolicies:!1}}const i=r("Serialize"),o=r("None"),s=r("Deserialize"),a=r("Retry"),l=r("Sign"),u=[i,o,s,a,l];function c(h){return h==="Retry"?a:h==="Serialize"?i:h==="Deserialize"?s:h==="Sign"?l:o}for(const h of this._policies){const v=h.policy,N=h.options,m=v.name;if(n.has(m))throw new Error("Duplicate policy names not allowed in pipeline");const p={policy:v,dependsOn:new Set,dependants:new Set};N.afterPhase&&(p.afterPhase=c(N.afterPhase),p.afterPhase.hasAfterPolicies=!0),n.set(m,p),c(N.phase).policies.add(p)}for(const h of this._policies){const{policy:v,options:N}=h,m=v.name,p=n.get(m);if(!p)throw new Error(`Missing node for policy ${m}`);if(N.afterPolicies)for(const y of N.afterPolicies){const w=n.get(y);w&&(p.dependsOn.add(w),w.dependants.add(p))}if(N.beforePolicies)for(const y of N.beforePolicies){const w=n.get(y);w&&(w.dependsOn.add(p),p.dependants.add(w))}}function f(h){h.hasRun=!0;for(const v of h.policies)if(!(v.afterPhase&&(!v.afterPhase.hasRun||v.afterPhase.policies.size))&&v.dependsOn.size===0){t.push(v.policy);for(const N of v.dependants)N.dependsOn.delete(v);n.delete(v.policy.name),h.policies.delete(v)}}function d(){for(const h of u){if(f(h),h.policies.size>0&&h!==o){o.hasRun||f(o);return}h.hasAfterPolicies&&f(o)}}let g=0;for(;n.size>0;){g++;const h=t.length;if(d(),t.length<=h&&g>1)throw new Error("Cannot satisfy policy dependencies due to requirements cycle.")}return t}}function xv(){return No.create()}function Sv(...e){if(e.length>0){const t=String(e[0]);t.includes(":error")?console.error(...e):t.includes(":warning")?console.warn(...e):t.includes(":info")?console.info(...e):t.includes(":verbose")?console.debug(...e):console.debug(...e)}}const Fc=typeof process<"u"&&process.env&&{}.DEBUG||void 0;let _p,ja=[],La=[];const Po=[];Fc&&eu(Fc);const Ap=Object.assign(e=>Mp(e),{enable:eu,enabled:tu,disable:Nv,log:Sv});function eu(e){_p=e,ja=[],La=[];const t=/\*/g,n=e.split(",").map(r=>r.trim().replace(t,".*?"));for(const r of n)r.startsWith("-")?La.push(new RegExp(`^${r.substr(1)}$`)):ja.push(new RegExp(`^${r}$`));for(const r of Po)r.enabled=tu(r.namespace)}function tu(e){if(e.endsWith("*"))return!0;for(const t of La)if(t.test(e))return!1;for(const t of ja)if(t.test(e))return!0;return!1}function Nv(){const e=_p||"";return eu(""),e}function Mp(e){const t=Object.assign(n,{enabled:tu(e),destroy:Pv,log:Ap.log,namespace:e,extend:Ev});function n(...r){t.enabled&&(r.length>0&&(r[0]=`${e} ${r[0]}`),t.log(...r))}return Po.push(t),t}function Pv(){const e=Po.indexOf(this);return e>=0?(Po.splice(e,1),!0):!1}function Ev(e){const t=Mp(`${this.namespace}:${e}`);return t.log=this.log,t}const Xr=Ap,bp=new Set,Ei=typeof process<"u"&&process.env&&{}.AZURE_LOG_LEVEL||void 0;let Ua;const qa=Xr("azure");qa.log=(...e)=>{Xr.log(...e)};const nu=["verbose","info","warning","error"];Ei&&($p(Ei)?Cv(Ei):console.error(`AZURE_LOG_LEVEL set to unknown log level '${Ei}'; logging is not enabled. Acceptable values: ${nu.join(", ")}.`));function Cv(e){if(e&&!$p(e))throw new Error(`Unknown log level '${e}'. Acceptable values: ${nu.join(",")}`);Ua=e;const t=[];for(const n of bp)Dp(n)&&t.push(n.namespace);Xr.enable(t.join(","))}const Vc={verbose:400,info:300,warning:200,error:100};function Ho(e){const t=qa.extend(e);return Ip(qa,t),{error:Ci(t,"error"),warning:Ci(t,"warning"),info:Ci(t,"info"),verbose:Ci(t,"verbose")}}function Ip(e,t){t.log=(...n)=>{e.log(...n)}}function Ci(e,t){const n=Object.assign(e.extend(t),{level:t});if(Ip(e,n),Dp(n)){const r=Xr.disable();Xr.enable(r+","+n.namespace)}return bp.add(n),n}function Dp(e){return!!(Ua&&Vc[e.level]<=Vc[Ua])}function $p(e){return nu.includes(e)}const Yn=Ho("core-rest-pipeline");class ru extends Error{constructor(t){super(t),this.name="AbortError"}}function Tv(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function jp(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function iu(e){if(jp(e)){const t=typeof e.name=="string",n=typeof e.message=="string";return t&&n}return!1}function Fo(e){if(iu(e))return e.message;{let t;try{typeof e=="object"&&e?t=JSON.stringify(e):t=String(e)}catch{t="[unable to stringify input]"}return`Unknown error ${t}`}}function kv(){let e="";for(let t=0;t<32;t++){const n=Math.floor(Math.random()*16);t===12?e+="4":t===16?e+=n&3|8:e+=n.toString(16),(t===7||t===11||t===15||t===19)&&(e+="-")}return e}var Os;const Ov=typeof((Os=globalThis==null?void 0:globalThis.crypto)===null||Os===void 0?void 0:Os.randomUUID)=="function"?globalThis.crypto.randomUUID.bind(globalThis.crypto):kv;function zv(){return Ov()}const zs="REDACTED",Rv=["x-ms-client-request-id","x-ms-return-client-request-id","x-ms-useragent","x-ms-correlation-request-id","x-ms-request-id","client-request-id","ms-cv","return-client-request-id","traceparent","Access-Control-Allow-Credentials","Access-Control-Allow-Headers","Access-Control-Allow-Methods","Access-Control-Allow-Origin","Access-Control-Expose-Headers","Access-Control-Max-Age","Access-Control-Request-Headers","Access-Control-Request-Method","Origin","Accept","Accept-Encoding","Cache-Control","Connection","Content-Length","Content-Type","Date","ETag","Expires","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Last-Modified","Pragma","Request-Id","Retry-After","Server","Transfer-Encoding","User-Agent","WWW-Authenticate"],_v=["api-version"];class Lp{constructor({additionalAllowedHeaderNames:t=[],additionalAllowedQueryParameters:n=[]}={}){t=Rv.concat(t),n=_v.concat(n),this.allowedHeaderNames=new Set(t.map(r=>r.toLowerCase())),this.allowedQueryParameters=new Set(n.map(r=>r.toLowerCase()))}sanitize(t){const n=new Set;return JSON.stringify(t,(r,i)=>{if(i instanceof Error)return Object.assign(Object.assign({},i),{name:i.name,message:i.message});if(r==="headers")return this.sanitizeHeaders(i);if(r==="url")return this.sanitizeUrl(i);if(r==="query")return this.sanitizeQuery(i);if(r==="body")return;if(r==="response")return;if(r==="operationSpec")return;if(Array.isArray(i)||jp(i)){if(n.has(i))return"[Circular]";n.add(i)}return i},2)}sanitizeHeaders(t){const n={};for(const r of Object.keys(t))this.allowedHeaderNames.has(r.toLowerCase())?n[r]=t[r]:n[r]=zs;return n}sanitizeQuery(t){if(typeof t!="object"||t===null)return t;const n={};for(const r of Object.keys(t))this.allowedQueryParameters.has(r.toLowerCase())?n[r]=t[r]:n[r]=zs;return n}sanitizeUrl(t){if(typeof t!="string"||t===null)return t;const n=new URL(t);if(!n.search)return t;for(const[r]of n.searchParams)this.allowedQueryParameters.has(r.toLowerCase())||n.searchParams.set(r,zs);return n.toString()}}const Av="logPolicy";function Mv(e={}){var t;const n=(t=e.logger)!==null&&t!==void 0?t:Yn.info,r=new Lp({additionalAllowedHeaderNames:e.additionalAllowedHeaderNames,additionalAllowedQueryParameters:e.additionalAllowedQueryParameters});return{name:Av,async sendRequest(i,o){if(!n.enabled)return o(i);n(`Request: ${r.sanitize(i)}`);const s=await o(i);return n(`Response status code: ${s.status}`),n(`Headers: ${r.sanitize(s.headers)}`),s}}}function bv(){return"x-ms-useragent"}function Iv(e){var t,n,r;const i=globalThis.navigator;e.set("OS",((r=(n=(t=i==null?void 0:i.userAgentData)===null||t===void 0?void 0:t.platform)!==null&&n!==void 0?n:i==null?void 0:i.platform)!==null&&r!==void 0?r:"unknown").replace(" ",""))}const Up="1.10.3",Ha=3;function Dv(e){const t=[];for(const[n,r]of e){const i=r?`${n}/${r}`:n;t.push(i)}return t.join(" ")}function $v(){return bv()}function qp(e){const t=new Map;t.set("core-rest-pipeline",Up),Iv(t);const n=Dv(t);return e?`${e} ${n}`:n}const Bc=$v(),jv="userAgentPolicy";function Lv(e={}){const t=qp(e.userAgentPrefix);return{name:jv,async sendRequest(n,r){return n.headers.has(Bc)||n.headers.set(Bc,t),r(n)}}}const Uv="The operation was aborted.";function Hp(e,t,n){return new Promise((r,i)=>{let o,s;const a=()=>i(new ru(n!=null&&n.abortErrorMsg?n==null?void 0:n.abortErrorMsg:Uv)),l=()=>{n!=null&&n.abortSignal&&s&&n.abortSignal.removeEventListener("abort",s)};if(s=()=>(o&&clearTimeout(o),l(),a()),n!=null&&n.abortSignal&&n.abortSignal.aborted)return a();o=setTimeout(()=>{l(),r(t)},e),n!=null&&n.abortSignal&&n.abortSignal.addEventListener("abort",s)})}function qv(e,t){const n=e.headers.get(t);if(!n)return;const r=Number(n);if(!Number.isNaN(r))return r}const Fa="Retry-After",Hv=["retry-after-ms","x-ms-retry-after-ms",Fa];function Fp(e){if(e&&[429,503].includes(e.status))try{for(const i of Hv){const o=qv(e,i);if(o===0||o)return o*(i===Fa?1e3:1)}const t=e.headers.get(Fa);if(!t)return;const r=Date.parse(t)-Date.now();return Number.isFinite(r)?Math.max(0,r):void 0}catch{return}}function Fv(e){return Number.isFinite(Fp(e))}function Vv(){return{name:"throttlingRetryStrategy",retry({response:e}){const t=Fp(e);return Number.isFinite(t)?{retryAfterInMs:t}:{skipStrategy:!0}}}}const Bv=1e3,Kv=1e3*64;function Wv(e={}){var t,n;const r=(t=e.retryDelayInMs)!==null&&t!==void 0?t:Bv,i=(n=e.maxRetryDelayInMs)!==null&&n!==void 0?n:Kv;let o=r;return{name:"exponentialRetryStrategy",retry({retryCount:s,response:a,responseError:l}){const u=Gv(l),c=u&&e.ignoreSystemErrors,f=Qv(a),d=f&&e.ignoreHttpStatusCodes;if(a&&(Fv(a)||!f)||d||c)return{skipStrategy:!0};if(l&&!u&&!f)return{errorToThrow:l};const h=o*Math.pow(2,s),v=Math.min(i,h);return o=v/2+Tv(0,v/2),{retryAfterInMs:o}}}}function Qv(e){return!!(e&&e.status!==void 0&&(e.status>=500||e.status===408)&&e.status!==501&&e.status!==505)}function Gv(e){return e?e.code==="ETIMEDOUT"||e.code==="ESOCKETTIMEDOUT"||e.code==="ECONNREFUSED"||e.code==="ECONNRESET"||e.code==="ENOENT":!1}const Kc=Ho("core-rest-pipeline retryPolicy"),Xv="retryPolicy";function Yv(e,t={maxRetries:Ha}){const n=t.logger||Kc;return{name:Xv,async sendRequest(r,i){var o,s;let a,l,u=-1;e:for(;;){u+=1,a=void 0,l=void 0;try{n.info(`Retry ${u}: Attempting to send request`,r.requestId),a=await i(r),n.info(`Retry ${u}: Received a response from request`,r.requestId)}catch(c){if(n.error(`Retry ${u}: Received an error from request`,r.requestId),l=c,!c||l.name!=="RestError")throw c;a=l.response}if(!((o=r.abortSignal)===null||o===void 0)&&o.aborted)throw n.error(`Retry ${u}: Request aborted.`),new ru;if(u>=((s=t.maxRetries)!==null&&s!==void 0?s:Ha)){if(n.info(`Retry ${u}: Maximum retries reached. Returning the last received response, or throwing the last received error.`),l)throw l;if(a)return a;throw new Error("Maximum retries reached with no response or error to throw")}n.info(`Retry ${u}: Processing ${e.length} retry strategies.`);t:for(const c of e){const f=c.logger||Kc;f.info(`Retry ${u}: Processing retry strategy ${c.name}.`);const d=c.retry({retryCount:u,response:a,responseError:l});if(d.skipStrategy){f.info(`Retry ${u}: Skipped.`);continue t}const{errorToThrow:g,retryAfterInMs:h,redirectTo:v}=d;if(g)throw f.error(`Retry ${u}: Retry strategy ${c.name} throws error:`,g),g;if(h||h===0){f.info(`Retry ${u}: Retry strategy ${c.name} retries after ${h}`),await Hp(h,void 0,{abortSignal:r.abortSignal});continue e}if(v){f.info(`Retry ${u}: Retry strategy ${c.name} redirects to ${v}`),r.url=v;continue e}}if(l)throw n.info("None of the retry strategies could work with the received error. Throwing it."),l;if(a)return n.info("None of the retry strategies could work with the received response. Returning it."),a}}}}const Zv="defaultRetryPolicy";function Jv(e={}){var t;return{name:Zv,sendRequest:Yv([Vv(),Wv(e)],{maxRetries:(t=e.maxRetries)!==null&&t!==void 0?t:Ha}).sendRequest}}const e1="formDataPolicy";function t1(){return{name:e1,async sendRequest(e,t){if(e.formData){const n=e.formData,r=new FormData;for(const o of Object.keys(n)){const s=n[o];if(Array.isArray(s))for(const a of s)r.append(o,a);else r.append(o,s)}e.body=r,e.formData=void 0;const i=e.headers.get("Content-Type");i&&i.indexOf("application/x-www-form-urlencoded")!==-1?e.body=new URLSearchParams(r).toString():i&&i.indexOf("multipart/form-data")!==-1&&e.headers.delete("Content-Type")}return t(e)}}}const n1="setClientRequestIdPolicy";function r1(e="x-ms-client-request-id"){return{name:n1,async sendRequest(t,n){return t.headers.has(e)||t.headers.set(e,t.requestId),n(t)}}}const kr={span:Symbol.for("@azure/core-tracing span"),namespace:Symbol.for("@azure/core-tracing namespace")};function i1(e={}){let t=new Or(e.parentContext);return e.span&&(t=t.setValue(kr.span,e.span)),e.namespace&&(t=t.setValue(kr.namespace,e.namespace)),t}class Or{constructor(t){this._contextMap=t instanceof Or?new Map(t._contextMap):new Map}setValue(t,n){const r=new Or(this);return r._contextMap.set(t,n),r}getValue(t){return this._contextMap.get(t)}deleteValue(t){const n=new Or(this);return n._contextMap.delete(t),n}}function o1(){return{end:()=>{},isRecording:()=>!1,recordException:()=>{},setAttribute:()=>{},setStatus:()=>{}}}function s1(){return{createRequestHeaders:()=>({}),parseTraceparentHeader:()=>{},startSpan:(e,t)=>({span:o1(),tracingContext:i1({parentContext:t.tracingContext})}),withContext(e,t,...n){return t(...n)}}}let Rs;function Ti(){return Rs||(Rs=s1()),Rs}function Vp(e){const{namespace:t,packageName:n,packageVersion:r}=e;function i(u,c,f){var d;const g=Ti().startSpan(u,Object.assign(Object.assign({},f),{packageName:n,packageVersion:r,tracingContext:(d=c==null?void 0:c.tracingOptions)===null||d===void 0?void 0:d.tracingContext}));let h=g.tracingContext;const v=g.span;h.getValue(kr.namespace)||(h=h.setValue(kr.namespace,t)),v.setAttribute("az.namespace",h.getValue(kr.namespace));const N=Object.assign({},c,{tracingOptions:Object.assign(Object.assign({},c==null?void 0:c.tracingOptions),{tracingContext:h})});return{span:v,updatedOptions:N}}async function o(u,c,f,d){const{span:g,updatedOptions:h}=i(u,c,d);try{const v=await s(h.tracingOptions.tracingContext,()=>Promise.resolve(f(h,g)));return g.setStatus({status:"success"}),v}catch(v){throw g.setStatus({status:"error",error:v}),v}finally{g.end()}}function s(u,c,...f){return Ti().withContext(u,c,...f)}function a(u){return Ti().parseTraceparentHeader(u)}function l(u){return Ti().createRequestHeaders(u)}return{startSpan:i,withSpan:o,withContext:s,parseTraceparentHeader:a,createRequestHeaders:l}}const a1={},l1=new Lp;class qe extends Error{constructor(t,n={}){super(t),this.name="RestError",this.code=n.code,this.statusCode=n.statusCode,this.request=n.request,this.response=n.response,Object.setPrototypeOf(this,qe.prototype)}[a1](){return`RestError: ${this.message} 
 ${l1.sanitize(this)}`}}qe.REQUEST_SEND_ERROR="REQUEST_SEND_ERROR";qe.PARSE_ERROR="PARSE_ERROR";function u1(e){return e instanceof qe?!0:iu(e)&&e.name==="RestError"}const c1="tracingPolicy";function d1(e={}){const t=qp(e.userAgentPrefix),n=f1();return{name:c1,async sendRequest(r,i){var o,s;if(!n||!(!((o=r.tracingOptions)===null||o===void 0)&&o.tracingContext))return i(r);const{span:a,tracingContext:l}=(s=p1(n,r,t))!==null&&s!==void 0?s:{};if(!a||!l)return i(r);try{const u=await n.withContext(l,i,r);return y1(a,u),u}catch(u){throw m1(a,u),u}}}}function f1(){try{return Vp({namespace:"",packageName:"@azure/core-rest-pipeline",packageVersion:Up})}catch(e){Yn.warning(`Error when creating the TracingClient: ${Fo(e)}`);return}}function p1(e,t,n){try{const{span:r,updatedOptions:i}=e.startSpan(`HTTP ${t.method}`,{tracingOptions:t.tracingOptions},{spanKind:"client",spanAttributes:{"http.method":t.method,"http.url":t.url,requestId:t.requestId}});if(!r.isRecording()){r.end();return}n&&r.setAttribute("http.user_agent",n);const o=e.createRequestHeaders(i.tracingOptions.tracingContext);for(const[s,a]of Object.entries(o))t.headers.set(s,a);return{span:r,tracingContext:i.tracingOptions.tracingContext}}catch(r){Yn.warning(`Skipping creating a tracing span due to an error: ${Fo(r)}`);return}}function m1(e,t){try{e.setStatus({status:"error",error:iu(t)?t:void 0}),u1(t)&&t.statusCode&&e.setAttribute("http.status_code",t.statusCode),e.end()}catch(n){Yn.warning(`Skipping tracing span processing due to an error: ${Fo(n)}`)}}function y1(e,t){try{e.setAttribute("http.status_code",t.status);const n=t.headers.get("x-ms-request-id");n&&e.setAttribute("serviceRequestId",n),e.setStatus({status:"success"}),e.end()}catch(n){Yn.warning(`Skipping tracing span processing due to an error: ${Fo(n)}`)}}function h1(e){const t=xv();return t.addPolicy(t1()),t.addPolicy(Lv(e.userAgentOptions)),t.addPolicy(r1()),t.addPolicy(Jv(e.retryOptions),{phase:"Retry"}),t.addPolicy(d1(e.userAgentOptions),{afterPhase:"Retry"}),t.addPolicy(Mv(e.loggingOptions),{afterPhase:"Sign"}),t}function ki(e){return e.toLowerCase()}function*g1(e){for(const t of e.values())yield[t.name,t.value]}class v1{constructor(t){if(this._headersMap=new Map,t)for(const n of Object.keys(t))this.set(n,t[n])}set(t,n){this._headersMap.set(ki(t),{name:t,value:String(n)})}get(t){var n;return(n=this._headersMap.get(ki(t)))===null||n===void 0?void 0:n.value}has(t){return this._headersMap.has(ki(t))}delete(t){this._headersMap.delete(ki(t))}toJSON(t={}){const n={};if(t.preserveCase)for(const r of this._headersMap.values())n[r.name]=r.value;else for(const[r,i]of this._headersMap)n[r]=i.value;return n}toString(){return JSON.stringify(this.toJSON({preserveCase:!0}))}[Symbol.iterator](){return g1(this._headersMap)}}function Vo(e){return new v1(e)}function w1(e){return e&&typeof e.pipe=="function"}function Bp(e){return!!(e&&typeof e.getReader=="function"&&typeof e.tee=="function")}function x1(e){return(typeof Blob=="function"||typeof Blob=="object")&&e instanceof Blob}class S1{async sendRequest(t){if(new URL(t.url).protocol!=="https:"&&!t.allowInsecureConnection)throw new Error(`Cannot connect to ${t.url} while allowInsecureConnection is false.`);if(t.proxySettings)throw new Error("HTTP proxy is not supported in browser environment");try{return await N1(t)}catch(i){throw C1(i,t)}}}async function N1(e){const{abortController:t,abortControllerCleanup:n}=E1(e);try{const r=T1(e.headers),i=O1(e),o=await fetch(e.url,{body:i,method:e.method,headers:r,signal:t.signal,credentials:e.withCredentials?"include":"same-origin",cache:"no-store"});return x1(e.body)&&e.onUploadProgress&&e.onUploadProgress({loadedBytes:e.body.size}),P1(o,e)}finally{n&&n()}}async function P1(e,t){var n,r;const i=k1(e),o={request:t,headers:i,status:e.status},s=Bp(e.body)?Kp(e.body,t.onDownloadProgress):e.body;if(!((n=t.streamResponseStatusCodes)===null||n===void 0)&&n.has(Number.POSITIVE_INFINITY)||!((r=t.streamResponseStatusCodes)===null||r===void 0)&&r.has(o.status))if(t.enableBrowserStreams)o.browserStreamBody=s??void 0;else{const a=new Response(s);o.blobBody=a.blob()}else{const a=new Response(s);o.bodyAsText=await a.text()}return o}function E1(e){const t=new AbortController;let n,r;if(e.abortSignal){if(e.abortSignal.aborted)throw new ru("The operation was aborted.");r=i=>{i.type==="abort"&&t.abort()},e.abortSignal.addEventListener("abort",r),n=()=>{var i;r&&((i=e.abortSignal)===null||i===void 0||i.removeEventListener("abort",r))}}return e.timeout>0&&setTimeout(()=>{t.abort()},e.timeout),{abortController:t,abortControllerCleanup:n}}function C1(e,t){var n;return e&&(e==null?void 0:e.name)==="AbortError"?e:new qe(`Error sending request: ${e.message}`,{code:(n=e==null?void 0:e.code)!==null&&n!==void 0?n:qe.REQUEST_SEND_ERROR,request:t})}function T1(e){const t=new Headers;for(const[n,r]of e)t.append(n,r);return t}function k1(e){const t=Vo();for(const[n,r]of e.headers)t.set(n,r);return t}function O1(e){const t=typeof e.body=="function"?e.body():e.body;if(w1(t))throw new Error("Node streams are not supported in browser environment.");return Bp(t)?Kp(t,e.onUploadProgress):t}function Kp(e,t){let n=0;if(R1(e))return e.pipeThrough(new TransformStream({transform(r,i){if(r===null){i.terminate();return}i.enqueue(r),n+=r.length,t&&t({loadedBytes:n})}}));{const r=e.getReader();return new ReadableStream({async pull(i){var o;const{done:s,value:a}=await r.read();if(s||!a){i.close(),r.releaseLock();return}n+=(o=a==null?void 0:a.length)!==null&&o!==void 0?o:0,i.enqueue(a),t&&t({loadedBytes:n})}})}}function z1(){return new S1}function R1(e){return e.pipeThrough!==void 0&&self.TransformStream!==void 0}function _1(){return z1()}class A1{constructor(t){var n,r,i,o,s,a,l;this.url=t.url,this.body=t.body,this.headers=(n=t.headers)!==null&&n!==void 0?n:Vo(),this.method=(r=t.method)!==null&&r!==void 0?r:"GET",this.timeout=(i=t.timeout)!==null&&i!==void 0?i:0,this.formData=t.formData,this.disableKeepAlive=(o=t.disableKeepAlive)!==null&&o!==void 0?o:!1,this.proxySettings=t.proxySettings,this.streamResponseStatusCodes=t.streamResponseStatusCodes,this.withCredentials=(s=t.withCredentials)!==null&&s!==void 0?s:!1,this.abortSignal=t.abortSignal,this.tracingOptions=t.tracingOptions,this.onUploadProgress=t.onUploadProgress,this.onDownloadProgress=t.onDownloadProgress,this.requestId=t.requestId||zv(),this.allowInsecureConnection=(a=t.allowInsecureConnection)!==null&&a!==void 0?a:!1,this.enableBrowserStreams=(l=t.enableBrowserStreams)!==null&&l!==void 0?l:!1}}function ou(e){return new A1(e)}const M1={forcedRefreshWindowInMs:1e3,retryIntervalInMs:3e3,refreshWindowInMs:1e3*60*2};async function b1(e,t,n){async function r(){if(Date.now()<n)try{return await e()}catch{return null}else{const o=await e();if(o===null)throw new Error("Failed to refresh access token.");return o}}let i=await r();for(;i===null;)await Hp(t),i=await r();return i}function I1(e,t){let n=null,r=null,i;const o=Object.assign(Object.assign({},M1),t),s={get isRefreshing(){return n!==null},get shouldRefresh(){var l;return!s.isRefreshing&&((l=r==null?void 0:r.expiresOnTimestamp)!==null&&l!==void 0?l:0)-o.refreshWindowInMs<Date.now()},get mustRefresh(){return r===null||r.expiresOnTimestamp-o.forcedRefreshWindowInMs<Date.now()}};function a(l,u){var c;return s.isRefreshing||(n=b1(()=>e.getToken(l,u),o.retryIntervalInMs,(c=r==null?void 0:r.expiresOnTimestamp)!==null&&c!==void 0?c:Date.now()).then(d=>(n=null,r=d,i=u.tenantId,r)).catch(d=>{throw n=null,r=null,i=void 0,d})),n}return async(l,u)=>i!==u.tenantId||!!u.claims||s.mustRefresh?a(l,u):(s.shouldRefresh&&a(l,u),r)}const D1="bearerTokenAuthenticationPolicy";async function $1(e){const{scopes:t,getAccessToken:n,request:r}=e,i={abortSignal:r.abortSignal,tracingOptions:r.tracingOptions},o=await n(t,i);o&&e.request.headers.set("Authorization",`Bearer ${o.token}`)}function j1(e){const t=e.headers.get("WWW-Authenticate");if(e.status===401&&t)return t}function Wp(e){var t;const{credential:n,scopes:r,challengeCallbacks:i}=e,o=e.logger||Yn,s=Object.assign({authorizeRequest:(t=i==null?void 0:i.authorizeRequest)!==null&&t!==void 0?t:$1,authorizeRequestOnChallenge:i==null?void 0:i.authorizeRequestOnChallenge},i),a=n?I1(n):()=>Promise.resolve(null);return{name:D1,async sendRequest(l,u){if(!l.url.toLowerCase().startsWith("https://"))throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");await s.authorizeRequest({scopes:Array.isArray(r)?r:[r],request:l,getAccessToken:a,logger:o});let c,f;try{c=await u(l)}catch(d){f=d,c=d.response}if(s.authorizeRequestOnChallenge&&(c==null?void 0:c.status)===401&&j1(c)&&await s.authorizeRequestOnChallenge({scopes:Array.isArray(r)?r:[r],request:l,response:c,getAccessToken:a,logger:o}))return u(l);if(f)throw f;return c}}}function Bn(e,t,n){let r=t.parameterPath;const i=t.mapper;let o;if(typeof r=="string"&&(r=[r]),Array.isArray(r)){if(r.length>0)if(i.isConstant)o=i.defaultValue;else{let s=Wc(e,r);!s.propertyFound&&n&&(s=Wc(n,r));let a=!1;s.propertyFound||(a=i.required||r[0]==="options"&&r.length===2),o=a?i.defaultValue:s.propertyValue}}else{i.required&&(o={});for(const s in r){const a=i.type.modelProperties[s],l=r[s],u=Bn(e,{parameterPath:l,mapper:a},n);u!==void 0&&(o||(o={}),o[s]=u)}}return o}function Wc(e,t){const n={propertyFound:!1};let r=0;for(;r<t.length;++r){const i=t[r];if(e&&i in e)e=e[i];else break}return r===t.length&&(n.propertyValue=e,n.propertyFound=!0),n}const Qc=new WeakMap,Qp=Symbol.for("@azure/core-client original request");function L1(e){return Qp in e}function Zn(e){if(L1(e))return Zn(e[Qp]);let t=Qc.get(e);return t||(t={},Qc.set(e,t)),t}const U1=["application/json","text/json"],q1=["application/xml","application/atom+xml"],H1="deserializationPolicy";function F1(e={}){var t,n,r,i,o,s,a;const l=(n=(t=e.expectedContentTypes)===null||t===void 0?void 0:t.json)!==null&&n!==void 0?n:U1,u=(i=(r=e.expectedContentTypes)===null||r===void 0?void 0:r.xml)!==null&&i!==void 0?i:q1,c=e.parseXML,f=e.serializerOptions,d={xml:{rootName:(o=f==null?void 0:f.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=f==null?void 0:f.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(a=f==null?void 0:f.xml.xmlCharKey)!==null&&a!==void 0?a:Gr}};return{name:H1,async sendRequest(g,h){const v=await h(g);return K1(l,u,v,d,c)}}}function V1(e){let t;const n=e.request,r=Zn(n),i=r==null?void 0:r.operationSpec;return i&&(r!=null&&r.operationResponseGetter?t=r==null?void 0:r.operationResponseGetter(i,e):t=i.responses[e.status]),t}function B1(e){const t=e.request,n=Zn(t),r=n==null?void 0:n.shouldDeserialize;let i;return r===void 0?i=!0:typeof r=="boolean"?i=r:i=r(e),i}async function K1(e,t,n,r,i){const o=await G1(e,t,n,r,i);if(!B1(o))return o;const s=Zn(o.request),a=s==null?void 0:s.operationSpec;if(!a||!a.responses)return o;const l=V1(o),{error:u,shouldReturnResponse:c}=Q1(o,a,l,r);if(u)throw u;if(c)return o;if(l){if(l.bodyMapper){let f=o.parsedBody;a.isXML&&l.bodyMapper.type.name===Dn.Sequence&&(f=typeof f=="object"?f[l.bodyMapper.xmlElementName]:[]);try{o.parsedBody=a.serializer.deserialize(l.bodyMapper,f,"operationRes.parsedBody",r)}catch(d){throw new qe(`Error ${d} occurred in deserializing the responseBody - ${o.bodyAsText}`,{statusCode:o.status,request:o.request,response:o})}}else a.httpMethod==="HEAD"&&(o.parsedBody=n.status>=200&&n.status<300);l.headersMapper&&(o.parsedHeaders=a.serializer.deserialize(l.headersMapper,o.headers.toJSON(),"operationRes.parsedHeaders",{xml:{},ignoreUnknownProperties:!0}))}return o}function W1(e){const t=Object.keys(e.responses);return t.length===0||t.length===1&&t[0]==="default"}function Q1(e,t,n,r){var i;const o=200<=e.status&&e.status<300;if(W1(t)?o:!!n)if(n){if(!n.isError)return{error:null,shouldReturnResponse:!1}}else return{error:null,shouldReturnResponse:!1};const a=n??t.responses.default,l=!((i=e.request.streamResponseStatusCodes)===null||i===void 0)&&i.has(e.status)?`Unexpected status code: ${e.status}`:e.bodyAsText,u=new qe(l,{statusCode:e.status,request:e.request,response:e});if(!a)throw u;const c=a.bodyMapper,f=a.headersMapper;try{if(e.parsedBody){const d=e.parsedBody;let g;if(c){let v=d;if(t.isXML&&c.type.name===Dn.Sequence){v=[];const N=c.xmlElementName;typeof d=="object"&&N&&(v=d[N])}g=t.serializer.deserialize(c,v,"error.response.parsedBody",r)}const h=d.error||g||d;u.code=h.code,h.message&&(u.message=h.message),c&&(u.response.parsedBody=g)}e.headers&&f&&(u.response.parsedHeaders=t.serializer.deserialize(f,e.headers.toJSON(),"operationRes.parsedHeaders"))}catch(d){u.message=`Error "${d.message}" occurred in deserializing the responseBody - "${e.bodyAsText}" for the default response.`}return{error:u,shouldReturnResponse:!1}}async function G1(e,t,n,r,i){var o;if(!(!((o=n.request.streamResponseStatusCodes)===null||o===void 0)&&o.has(n.status))&&n.bodyAsText){const s=n.bodyAsText,a=n.headers.get("Content-Type")||"",l=a?a.split(";").map(u=>u.toLowerCase()):[];try{if(l.length===0||l.some(u=>e.indexOf(u)!==-1))return n.parsedBody=JSON.parse(s),n;if(l.some(u=>t.indexOf(u)!==-1)){if(!i)throw new Error("Parsing XML not supported.");const u=await i(s,r.xml);return n.parsedBody=u,n}}catch(u){const c=`Error "${u}" occurred while parsing the response body - ${n.bodyAsText}.`,f=u.code||qe.PARSE_ERROR;throw new qe(c,{code:f,statusCode:n.status,request:n.request,response:n})}}return n}function X1(e){const t=new Set;for(const n in e.responses){const r=e.responses[n];r.bodyMapper&&r.bodyMapper.type.name===Dn.Stream&&t.add(Number(n))}return t}function It(e){const{parameterPath:t,mapper:n}=e;let r;return typeof t=="string"?r=t:Array.isArray(t)?r=t.join("."):r=n.serializedName,r}const Gp="serializationPolicy";function Xp(e={}){const t=e.stringifyXML;return{name:Gp,async sendRequest(n,r){const i=Zn(n),o=i==null?void 0:i.operationSpec,s=i==null?void 0:i.operationArguments;return o&&s&&(Y1(n,s,o),Z1(n,s,o,t)),r(n)}}}function Y1(e,t,n){var r,i;if(n.headerParameters)for(const s of n.headerParameters){let a=Bn(t,s);if(a!=null||s.mapper.required){a=n.serializer.serialize(s.mapper,a,It(s));const l=s.mapper.headerCollectionPrefix;if(l)for(const u of Object.keys(a))e.headers.set(l+u,a[u]);else e.headers.set(s.mapper.serializedName||It(s),a)}}const o=(i=(r=t.options)===null||r===void 0?void 0:r.requestOptions)===null||i===void 0?void 0:i.customHeaders;if(o)for(const s of Object.keys(o))e.headers.set(s,o[s])}function Z1(e,t,n,r=function(){throw new Error("XML serialization unsupported!")}){var i,o,s,a,l;const u=(i=t.options)===null||i===void 0?void 0:i.serializerOptions,c={xml:{rootName:(o=u==null?void 0:u.xml.rootName)!==null&&o!==void 0?o:"",includeRoot:(s=u==null?void 0:u.xml.includeRoot)!==null&&s!==void 0?s:!1,xmlCharKey:(a=u==null?void 0:u.xml.xmlCharKey)!==null&&a!==void 0?a:Gr}},f=c.xml.xmlCharKey;if(n.requestBody&&n.requestBody.mapper){e.body=Bn(t,n.requestBody);const d=n.requestBody.mapper,{required:g,serializedName:h,xmlName:v,xmlElementName:N,xmlNamespace:m,xmlNamespacePrefix:p,nullable:y}=d,w=d.type.name;try{if(e.body!==void 0&&e.body!==null||y&&e.body===null||g){const x=It(n.requestBody);e.body=n.serializer.serialize(d,e.body,x,c);const E=w===Dn.Stream;if(n.isXML){const P=p?`xmlns:${p}`:"xmlns",O=J1(m,P,w,e.body,c);w===Dn.Sequence?e.body=r(ew(O,N||v||h,P,m),{rootName:v||h,xmlCharKey:f}):E||(e.body=r(O,{rootName:v||h,xmlCharKey:f}))}else{if(w===Dn.String&&(!((l=n.contentType)===null||l===void 0)&&l.match("text/plain")||n.mediaType==="text"))return;E||(e.body=JSON.stringify(e.body))}}}catch(x){throw new Error(`Error "${x.message}" occurred in serializing the payload - ${JSON.stringify(h,void 0,"  ")}.`)}}else if(n.formDataParameters&&n.formDataParameters.length>0){e.formData={};for(const d of n.formDataParameters){const g=Bn(t,d);if(g!=null){const h=d.mapper.serializedName||It(d);e.formData[h]=n.serializer.serialize(d.mapper,g,It(d),c)}}}}function J1(e,t,n,r,i){if(e&&!["Composite","Sequence","Dictionary"].includes(n)){const o={};return o[i.xml.xmlCharKey]=r,o[se]={[t]:e},o}return r}function ew(e,t,n,r){if(Array.isArray(e)||(e=[e]),!n||!r)return{[t]:e};const i={[t]:e};return i[se]={[n]:r},i}function tw(e={}){const t=h1(e??{});return e.credentialOptions&&t.addPolicy(Wp({credential:e.credentialOptions.credential,scopes:e.credentialOptions.credentialScopes})),t.addPolicy(Xp(e.serializationOptions),{phase:"Serialize"}),t.addPolicy(F1(e.deserializationOptions),{phase:"Deserialize"}),t}let _s;function nw(){return _s||(_s=_1()),_s}const rw={CSV:",",SSV:" ",Multi:"Multi",TSV:"	",Pipes:"|"};function iw(e,t,n,r){const i=ow(t,n,r);let o=!1,s=Gc(e,i);if(t.path){let u=Gc(t.path,i);t.path==="/{nextLink}"&&u.startsWith("/")&&(u=u.substring(1)),sw(u)?(s=u,o=!0):s=aw(s,u)}const{queryParams:a,sequenceParams:l}=lw(t,n,r);return s=cw(s,a,l,o),s}function Gc(e,t){let n=e;for(const[r,i]of t)n=n.split(r).join(i);return n}function ow(e,t,n){var r;const i=new Map;if(!((r=e.urlParameters)===null||r===void 0)&&r.length)for(const o of e.urlParameters){let s=Bn(t,o,n);const a=It(o);s=e.serializer.serialize(o.mapper,s,a),o.skipEncoding||(s=encodeURIComponent(s)),i.set(`{${o.mapper.serializedName||a}}`,s)}return i}function sw(e){return e.includes("://")}function aw(e,t){if(!t)return e;const n=new URL(e);let r=n.pathname;r.endsWith("/")||(r=`${r}/`),t.startsWith("/")&&(t=t.substring(1));const i=t.indexOf("?");if(i!==-1){const o=t.substring(0,i),s=t.substring(i+1);r=r+o,s&&(n.search=n.search?`${n.search}&${s}`:s)}else r=r+t;return n.pathname=r,n.toString()}function lw(e,t,n){var r;const i=new Map,o=new Set;if(!((r=e.queryParameters)===null||r===void 0)&&r.length)for(const s of e.queryParameters){s.mapper.type.name==="Sequence"&&s.mapper.serializedName&&o.add(s.mapper.serializedName);let a=Bn(t,s,n);if(a!=null||s.mapper.required){a=e.serializer.serialize(s.mapper,a,It(s));const l=s.collectionFormat?rw[s.collectionFormat]:"";if(Array.isArray(a)&&(a=a.map(u=>u??"")),s.collectionFormat==="Multi"&&a.length===0)continue;Array.isArray(a)&&(s.collectionFormat==="SSV"||s.collectionFormat==="TSV")&&(a=a.join(l)),s.skipEncoding||(Array.isArray(a)?a=a.map(u=>encodeURIComponent(u)):a=encodeURIComponent(a)),Array.isArray(a)&&(s.collectionFormat==="CSV"||s.collectionFormat==="Pipes")&&(a=a.join(l)),i.set(s.mapper.serializedName||It(s),a)}}return{queryParams:i,sequenceParams:o}}function uw(e){const t=new Map;if(!e||e[0]!=="?")return t;e=e.slice(1);const n=e.split("&");for(const r of n){const[i,o]=r.split("=",2),s=t.get(i);s?Array.isArray(s)?s.push(o):t.set(i,[s,o]):t.set(i,o)}return t}function cw(e,t,n,r=!1){if(t.size===0)return e;const i=new URL(e),o=uw(i.search);for(const[a,l]of t){const u=o.get(a);if(Array.isArray(u))if(Array.isArray(l)){u.push(...l);const c=new Set(u);o.set(a,Array.from(c))}else u.push(l);else u?(Array.isArray(l)?l.unshift(u):n.has(a)&&o.set(a,[u,l]),r||o.set(a,l)):o.set(a,l)}const s=[];for(const[a,l]of o)if(typeof l=="string")s.push(`${a}=${l}`);else if(Array.isArray(l))for(const u of l)s.push(`${a}=${u}`);else s.push(`${a}=${l}`);return i.search=s.length?`?${s.join("&")}`:"",i.toString()}const dw=Ho("core-client");class fw{constructor(t={}){var n,r;if(this._requestContentType=t.requestContentType,this._endpoint=(n=t.endpoint)!==null&&n!==void 0?n:t.baseUri,t.baseUri&&dw.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead."),this._allowInsecureConnection=t.allowInsecureConnection,this._httpClient=t.httpClient||nw(),this.pipeline=t.pipeline||pw(t),!((r=t.additionalPolicies)===null||r===void 0)&&r.length)for(const{policy:i,position:o}of t.additionalPolicies){const s=o==="perRetry"?"Sign":void 0;this.pipeline.addPolicy(i,{afterPhase:s})}}async sendRequest(t){return this.pipeline.sendRequest(this._httpClient,t)}async sendOperationRequest(t,n){const r=n.baseUrl||this._endpoint;if(!r)throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");const i=iw(r,n,t,this),o=ou({url:i});o.method=n.httpMethod;const s=Zn(o);s.operationSpec=n,s.operationArguments=t;const a=n.contentType||this._requestContentType;a&&n.requestBody&&o.headers.set("Content-Type",a);const l=t.options;if(l){const u=l.requestOptions;u&&(u.timeout&&(o.timeout=u.timeout),u.onUploadProgress&&(o.onUploadProgress=u.onUploadProgress),u.onDownloadProgress&&(o.onDownloadProgress=u.onDownloadProgress),u.shouldDeserialize!==void 0&&(s.shouldDeserialize=u.shouldDeserialize),u.allowInsecureConnection&&(o.allowInsecureConnection=!0)),l.abortSignal&&(o.abortSignal=l.abortSignal),l.tracingOptions&&(o.tracingOptions=l.tracingOptions)}this._allowInsecureConnection&&(o.allowInsecureConnection=!0),o.streamResponseStatusCodes===void 0&&(o.streamResponseStatusCodes=X1(n));try{const u=await this.sendRequest(o),c=Uc(u,n.responses[u.status]);return l!=null&&l.onResponse&&l.onResponse(u,c),c}catch(u){if(typeof u=="object"&&(u!=null&&u.response)){const c=u.response,f=Uc(c,n.responses[u.statusCode]||n.responses.default);u.details=f,l!=null&&l.onResponse&&l.onResponse(c,f,u)}throw u}}}function pw(e){const t=mw(e),n=e.credential&&t?{credentialScopes:t,credential:e.credential}:void 0;return tw(Object.assign(Object.assign({},e),{credentialOptions:n}))}function mw(e){if(e.credentialScopes){const t=e.credentialScopes;return Array.isArray(t)?t.map(n=>new URL(n).toString()):new URL(t).toString()}if(e.endpoint)return`${e.endpoint}/.default`;if(e.baseUri)return`${e.baseUri}/.default`;if(e.credential&&!e.credentialScopes)throw new Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy")}const Yp={DefaultScope:"/.default",HeaderConstants:{AUTHORIZATION:"authorization"}},yw=async e=>{const t=xw(e.request),n=vw(e.response);if(n){const r=ww(n),i=gw(e,r),o=hw(r),s=await e.getAccessToken(i,Object.assign(Object.assign({},t),{tenantId:o}));return s?(e.request.headers.set(Yp.HeaderConstants.AUTHORIZATION,`Bearer ${s.token}`),!0):!1}return!1};function hw(e){return new URL(e.authorization_uri).pathname.split("/")[1]}function gw(e,t){if(!t.resource_uri)return e.scopes;const n=new URL(t.resource_uri);return n.pathname=Yp.DefaultScope,[n.toString()]}function vw(e){const t=e.headers.get("WWW-Authenticate");if(e.status===401&&t)return t}function ww(e){return`${e.slice(7).trim()} `.split(" ").filter(i=>i).map(i=>(([o,s])=>({[o]:s}))(i.trim().split("="))).reduce((i,o)=>Object.assign(Object.assign({},i),o),{})}function xw(e){return{abortSignal:e.abortSignal,requestOptions:{timeout:e.timeout},tracingOptions:e.tracingOptions}}const Zp={serializedName:"TableQueryResponse",type:{name:"Composite",className:"TableQueryResponse",modelProperties:{odataMetadata:{serializedName:"odata\\.metadata",xmlName:"odata\\.metadata",type:{name:"String"}},value:{serializedName:"value",xmlName:"value",xmlElementName:"TableResponseProperties",type:{name:"Sequence",element:{type:{name:"Composite",className:"TableResponseProperties"}}}}}}},Jp={serializedName:"TableResponseProperties",type:{name:"Composite",className:"TableResponseProperties",modelProperties:{name:{serializedName:"TableName",xmlName:"TableName",type:{name:"String"}},odataType:{serializedName:"odata\\.type",xmlName:"odata\\.type",type:{name:"String"}},odataId:{serializedName:"odata\\.id",xmlName:"odata\\.id",type:{name:"String"}},odataEditLink:{serializedName:"odata\\.editLink",xmlName:"odata\\.editLink",type:{name:"String"}}}}},ve={serializedName:"TableServiceError",type:{name:"Composite",className:"TableServiceError",modelProperties:{odataError:{serializedName:"odata\\.error",xmlName:"odata\\.error",type:{name:"Composite",className:"TableServiceErrorOdataError"}}}}},Sw={serializedName:"TableServiceErrorOdataError",type:{name:"Composite",className:"TableServiceErrorOdataError",modelProperties:{code:{serializedName:"code",xmlName:"code",type:{name:"String"}},message:{serializedName:"message",xmlName:"message",type:{name:"Composite",className:"TableServiceErrorOdataErrorMessage"}}}}},Nw={serializedName:"TableServiceErrorOdataErrorMessage",type:{name:"Composite",className:"TableServiceErrorOdataErrorMessage",modelProperties:{lang:{serializedName:"lang",xmlName:"lang",type:{name:"String"}},value:{serializedName:"value",xmlName:"value",type:{name:"String"}}}}},em={serializedName:"TableProperties",type:{name:"Composite",className:"TableProperties",modelProperties:{name:{serializedName:"TableName",xmlName:"TableName",type:{name:"String"}}}}},tm={serializedName:"TableEntityQueryResponse",type:{name:"Composite",className:"TableEntityQueryResponse",modelProperties:{odataMetadata:{serializedName:"odata\\.metadata",xmlName:"odata\\.metadata",type:{name:"String"}},value:{serializedName:"value",xmlName:"value",xmlElementName:"TableEntityProperties",type:{name:"Sequence",element:{type:{name:"Dictionary",value:{type:{name:"any"}}}}}}}}},Pw={serializedName:"SignedIdentifier",xmlName:"SignedIdentifier",type:{name:"Composite",className:"SignedIdentifier",modelProperties:{id:{serializedName:"Id",required:!0,xmlName:"Id",type:{name:"String"}},accessPolicy:{serializedName:"AccessPolicy",xmlName:"AccessPolicy",type:{name:"Composite",className:"AccessPolicy"}}}}},Ew={serializedName:"AccessPolicy",xmlName:"AccessPolicy",type:{name:"Composite",className:"AccessPolicy",modelProperties:{start:{serializedName:"Start",xmlName:"Start",type:{name:"String"}},expiry:{serializedName:"Expiry",xmlName:"Expiry",type:{name:"String"}},permission:{serializedName:"Permission",xmlName:"Permission",type:{name:"String"}}}}},su={serializedName:"TableServiceProperties",xmlName:"StorageServiceProperties",type:{name:"Composite",className:"TableServiceProperties",modelProperties:{logging:{serializedName:"Logging",xmlName:"Logging",type:{name:"Composite",className:"Logging"}},hourMetrics:{serializedName:"HourMetrics",xmlName:"HourMetrics",type:{name:"Composite",className:"Metrics"}},minuteMetrics:{serializedName:"MinuteMetrics",xmlName:"MinuteMetrics",type:{name:"Composite",className:"Metrics"}},cors:{serializedName:"Cors",xmlName:"Cors",xmlIsWrapped:!0,xmlElementName:"CorsRule",type:{name:"Sequence",element:{type:{name:"Composite",className:"CorsRule"}}}}}}},Cw={serializedName:"Logging",xmlName:"Logging",type:{name:"Composite",className:"Logging",modelProperties:{version:{serializedName:"Version",required:!0,xmlName:"Version",type:{name:"String"}},delete:{serializedName:"Delete",required:!0,xmlName:"Delete",type:{name:"Boolean"}},read:{serializedName:"Read",required:!0,xmlName:"Read",type:{name:"Boolean"}},write:{serializedName:"Write",required:!0,xmlName:"Write",type:{name:"Boolean"}},retentionPolicy:{serializedName:"RetentionPolicy",xmlName:"RetentionPolicy",type:{name:"Composite",className:"RetentionPolicy"}}}}},Tw={serializedName:"RetentionPolicy",xmlName:"RetentionPolicy",type:{name:"Composite",className:"RetentionPolicy",modelProperties:{enabled:{serializedName:"Enabled",required:!0,xmlName:"Enabled",type:{name:"Boolean"}},days:{constraints:{InclusiveMinimum:1},serializedName:"Days",xmlName:"Days",type:{name:"Number"}}}}},kw={serializedName:"Metrics",type:{name:"Composite",className:"Metrics",modelProperties:{version:{serializedName:"Version",xmlName:"Version",type:{name:"String"}},enabled:{serializedName:"Enabled",required:!0,xmlName:"Enabled",type:{name:"Boolean"}},includeAPIs:{serializedName:"IncludeAPIs",xmlName:"IncludeAPIs",type:{name:"Boolean"}},retentionPolicy:{serializedName:"RetentionPolicy",xmlName:"RetentionPolicy",type:{name:"Composite",className:"RetentionPolicy"}}}}},Ow={serializedName:"CorsRule",xmlName:"CorsRule",type:{name:"Composite",className:"CorsRule",modelProperties:{allowedOrigins:{serializedName:"AllowedOrigins",required:!0,xmlName:"AllowedOrigins",type:{name:"String"}},allowedMethods:{serializedName:"AllowedMethods",required:!0,xmlName:"AllowedMethods",type:{name:"String"}},allowedHeaders:{serializedName:"AllowedHeaders",required:!0,xmlName:"AllowedHeaders",type:{name:"String"}},exposedHeaders:{serializedName:"ExposedHeaders",required:!0,xmlName:"ExposedHeaders",type:{name:"String"}},maxAgeInSeconds:{constraints:{InclusiveMinimum:0},serializedName:"MaxAgeInSeconds",required:!0,xmlName:"MaxAgeInSeconds",type:{name:"Number"}}}}},nm={serializedName:"TableServiceStats",xmlName:"StorageServiceStats",type:{name:"Composite",className:"TableServiceStats",modelProperties:{geoReplication:{serializedName:"GeoReplication",xmlName:"GeoReplication",type:{name:"Composite",className:"GeoReplication"}}}}},zw={serializedName:"GeoReplication",xmlName:"GeoReplication",type:{name:"Composite",className:"GeoReplication",modelProperties:{status:{serializedName:"Status",required:!0,xmlName:"Status",type:{name:"String"}},lastSyncTime:{serializedName:"LastSyncTime",required:!0,xmlName:"LastSyncTime",type:{name:"DateTimeRfc1123"}}}}},rm={serializedName:"TableResponse",type:{name:"Composite",className:"TableResponse",modelProperties:Object.assign(Object.assign({},Jp.type.modelProperties),{odataMetadata:{serializedName:"odata\\.metadata",xmlName:"odata\\.metadata",type:{name:"String"}}})}},im={serializedName:"Table_queryHeaders",type:{name:"Composite",className:"TableQueryHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},xMsContinuationNextTableName:{serializedName:"x-ms-continuation-nexttablename",xmlName:"x-ms-continuation-nexttablename",type:{name:"String"}}}}},om={serializedName:"Table_queryExceptionHeaders",type:{name:"Composite",className:"TableQueryExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Va={serializedName:"Table_createHeaders",type:{name:"Composite",className:"TableCreateHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},preferenceApplied:{serializedName:"preference-applied",xmlName:"preference-applied",type:{name:"String"}}}}},sm={serializedName:"Table_createExceptionHeaders",type:{name:"Composite",className:"TableCreateExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},am={serializedName:"Table_deleteHeaders",type:{name:"Composite",className:"TableDeleteHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},lm={serializedName:"Table_deleteExceptionHeaders",type:{name:"Composite",className:"TableDeleteExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},um={serializedName:"Table_queryEntitiesHeaders",type:{name:"Composite",className:"TableQueryEntitiesHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},xMsContinuationNextPartitionKey:{serializedName:"x-ms-continuation-nextpartitionkey",xmlName:"x-ms-continuation-nextpartitionkey",type:{name:"String"}},xMsContinuationNextRowKey:{serializedName:"x-ms-continuation-nextrowkey",xmlName:"x-ms-continuation-nextrowkey",type:{name:"String"}}}}},cm={serializedName:"Table_queryEntitiesExceptionHeaders",type:{name:"Composite",className:"TableQueryEntitiesExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},dm={serializedName:"Table_queryEntitiesWithPartitionAndRowKeyHeaders",type:{name:"Composite",className:"TableQueryEntitiesWithPartitionAndRowKeyHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}},xMsContinuationNextPartitionKey:{serializedName:"x-ms-continuation-nextpartitionkey",xmlName:"x-ms-continuation-nextpartitionkey",type:{name:"String"}},xMsContinuationNextRowKey:{serializedName:"x-ms-continuation-nextrowkey",xmlName:"x-ms-continuation-nextrowkey",type:{name:"String"}}}}},fm={serializedName:"Table_queryEntitiesWithPartitionAndRowKeyExceptionHeaders",type:{name:"Composite",className:"TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},pm={serializedName:"Table_updateEntityHeaders",type:{name:"Composite",className:"TableUpdateEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}}}}},mm={serializedName:"Table_updateEntityExceptionHeaders",type:{name:"Composite",className:"TableUpdateEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},ym={serializedName:"Table_mergeEntityHeaders",type:{name:"Composite",className:"TableMergeEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}}}}},hm={serializedName:"Table_mergeEntityExceptionHeaders",type:{name:"Composite",className:"TableMergeEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},gm={serializedName:"Table_deleteEntityHeaders",type:{name:"Composite",className:"TableDeleteEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},vm={serializedName:"Table_deleteEntityExceptionHeaders",type:{name:"Composite",className:"TableDeleteEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Ba={serializedName:"Table_insertEntityHeaders",type:{name:"Composite",className:"TableInsertEntityHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}},etag:{serializedName:"etag",xmlName:"etag",type:{name:"String"}},preferenceApplied:{serializedName:"preference-applied",xmlName:"preference-applied",type:{name:"String"}},contentType:{serializedName:"content-type",xmlName:"content-type",type:{name:"String"}}}}},wm={serializedName:"Table_insertEntityExceptionHeaders",type:{name:"Composite",className:"TableInsertEntityExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},xm={serializedName:"Table_getAccessPolicyHeaders",type:{name:"Composite",className:"TableGetAccessPolicyHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},Sm={serializedName:"Table_getAccessPolicyExceptionHeaders",type:{name:"Composite",className:"TableGetAccessPolicyExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Nm={serializedName:"Table_setAccessPolicyHeaders",type:{name:"Composite",className:"TableSetAccessPolicyHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},Pm={serializedName:"Table_setAccessPolicyExceptionHeaders",type:{name:"Composite",className:"TableSetAccessPolicyExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Em={serializedName:"Service_setPropertiesHeaders",type:{name:"Composite",className:"ServiceSetPropertiesHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}}}}},Cm={serializedName:"Service_setPropertiesExceptionHeaders",type:{name:"Composite",className:"ServiceSetPropertiesExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Tm={serializedName:"Service_getPropertiesHeaders",type:{name:"Composite",className:"ServiceGetPropertiesHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}}}}},km={serializedName:"Service_getPropertiesExceptionHeaders",type:{name:"Composite",className:"ServiceGetPropertiesExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},Om={serializedName:"Service_getStatisticsHeaders",type:{name:"Composite",className:"ServiceGetStatisticsHeaders",modelProperties:{clientRequestId:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}},requestId:{serializedName:"x-ms-request-id",xmlName:"x-ms-request-id",type:{name:"String"}},version:{serializedName:"x-ms-version",xmlName:"x-ms-version",type:{name:"String"}},date:{serializedName:"date",xmlName:"date",type:{name:"DateTimeRfc1123"}}}}},zm={serializedName:"Service_getStatisticsExceptionHeaders",type:{name:"Composite",className:"ServiceGetStatisticsExceptionHeaders",modelProperties:{errorCode:{serializedName:"x-ms-error-code",xmlName:"x-ms-error-code",type:{name:"String"}}}}},au=Object.freeze(Object.defineProperty({__proto__:null,AccessPolicy:Ew,CorsRule:Ow,GeoReplication:zw,Logging:Cw,Metrics:kw,RetentionPolicy:Tw,ServiceGetPropertiesExceptionHeaders:km,ServiceGetPropertiesHeaders:Tm,ServiceGetStatisticsExceptionHeaders:zm,ServiceGetStatisticsHeaders:Om,ServiceSetPropertiesExceptionHeaders:Cm,ServiceSetPropertiesHeaders:Em,SignedIdentifier:Pw,TableCreateExceptionHeaders:sm,TableCreateHeaders:Va,TableDeleteEntityExceptionHeaders:vm,TableDeleteEntityHeaders:gm,TableDeleteExceptionHeaders:lm,TableDeleteHeaders:am,TableEntityQueryResponse:tm,TableGetAccessPolicyExceptionHeaders:Sm,TableGetAccessPolicyHeaders:xm,TableInsertEntityExceptionHeaders:wm,TableInsertEntityHeaders:Ba,TableMergeEntityExceptionHeaders:hm,TableMergeEntityHeaders:ym,TableProperties:em,TableQueryEntitiesExceptionHeaders:cm,TableQueryEntitiesHeaders:um,TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders:fm,TableQueryEntitiesWithPartitionAndRowKeyHeaders:dm,TableQueryExceptionHeaders:om,TableQueryHeaders:im,TableQueryResponse:Zp,TableResponse:rm,TableResponseProperties:Jp,TableServiceError:ve,TableServiceErrorOdataError:Sw,TableServiceErrorOdataErrorMessage:Nw,TableServiceProperties:su,TableServiceStats:nm,TableSetAccessPolicyExceptionHeaders:Pm,TableSetAccessPolicyHeaders:Nm,TableUpdateEntityExceptionHeaders:mm,TableUpdateEntityHeaders:pm},Symbol.toStringTag,{value:"Module"})),Jn={parameterPath:"accept",mapper:{defaultValue:"application/json;odata=minimalmetadata",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},Ee={parameterPath:"url",mapper:{serializedName:"url",required:!0,xmlName:"url",type:{name:"String"}},skipEncoding:!0},Ce={parameterPath:"version",mapper:{defaultValue:"2019-02-02",isConstant:!0,serializedName:"x-ms-version",type:{name:"String"}}},Te={parameterPath:["options","requestId"],mapper:{serializedName:"x-ms-client-request-id",xmlName:"x-ms-client-request-id",type:{name:"String"}}},Ht={parameterPath:"dataServiceVersion",mapper:{defaultValue:"3.0",isConstant:!0,serializedName:"DataServiceVersion",type:{name:"String"}}},Ft={parameterPath:["options","queryOptions","format"],mapper:{serializedName:"$format",xmlName:"$format",type:{name:"String"}}},Rm={parameterPath:["options","queryOptions","top"],mapper:{constraints:{InclusiveMinimum:0},serializedName:"$top",xmlName:"$top",type:{name:"Number"}}},lu={parameterPath:["options","queryOptions","select"],mapper:{serializedName:"$select",xmlName:"$select",type:{name:"String"}}},uu={parameterPath:["options","queryOptions","filter"],mapper:{serializedName:"$filter",xmlName:"$filter",type:{name:"String"}}},Rw={parameterPath:["options","nextTableName"],mapper:{serializedName:"NextTableName",xmlName:"NextTableName",type:{name:"String"}}},_m={parameterPath:["options","contentType"],mapper:{defaultValue:"application/json;odata=nometadata",isConstant:!0,serializedName:"Content-Type",type:{name:"String"}}},_w={parameterPath:"tableProperties",mapper:em},Am={parameterPath:["options","responsePreference"],mapper:{serializedName:"Prefer",xmlName:"Prefer",type:{name:"String"}}},cu={parameterPath:"accept",mapper:{defaultValue:"application/json",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},yt={parameterPath:"table",mapper:{serializedName:"table",required:!0,xmlName:"table",type:{name:"String"}}},Ye={parameterPath:["options","timeout"],mapper:{constraints:{InclusiveMinimum:0},serializedName:"timeout",xmlName:"timeout",type:{name:"Number"}}},Aw={parameterPath:["options","nextPartitionKey"],mapper:{serializedName:"NextPartitionKey",xmlName:"NextPartitionKey",type:{name:"String"}}},Mw={parameterPath:["options","nextRowKey"],mapper:{serializedName:"NextRowKey",xmlName:"NextRowKey",type:{name:"String"}}},Bo={parameterPath:"partitionKey",mapper:{serializedName:"partitionKey",required:!0,xmlName:"partitionKey",type:{name:"String"}}},Ko={parameterPath:"rowKey",mapper:{serializedName:"rowKey",required:!0,xmlName:"rowKey",type:{name:"String"}}},Mm={parameterPath:["options","contentType"],mapper:{defaultValue:"application/json",isConstant:!0,serializedName:"Content-Type",type:{name:"String"}}},du={parameterPath:["options","tableEntityProperties"],mapper:{serializedName:"tableEntityProperties",xmlName:"tableEntityProperties",type:{name:"Dictionary",value:{type:{name:"any"}}}}},bm={parameterPath:["options","ifMatch"],mapper:{serializedName:"If-Match",xmlName:"If-Match",type:{name:"String"}}},bw={parameterPath:"ifMatch",mapper:{serializedName:"If-Match",required:!0,xmlName:"If-Match",type:{name:"String"}}},fu={parameterPath:"accept",mapper:{defaultValue:"application/xml",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},Im={parameterPath:"comp",mapper:{defaultValue:"acl",isConstant:!0,serializedName:"comp",type:{name:"String"}}},Dm={parameterPath:["options","contentType"],mapper:{defaultValue:"application/xml",isConstant:!0,serializedName:"Content-Type",type:{name:"String"}}},Iw={parameterPath:["options","tableAcl"],mapper:{serializedName:"tableAcl",xmlName:"SignedIdentifiers",xmlIsWrapped:!0,xmlElementName:"SignedIdentifier",type:{name:"Sequence",element:{type:{name:"Composite",className:"SignedIdentifier"}}}}},$m={parameterPath:"accept",mapper:{defaultValue:"application/xml",isConstant:!0,serializedName:"Accept",type:{name:"String"}}},Dw={parameterPath:"tableServiceProperties",mapper:su},pu={parameterPath:"restype",mapper:{defaultValue:"service",isConstant:!0,serializedName:"restype",type:{name:"String"}}},jm={parameterPath:"comp",mapper:{defaultValue:"properties",isConstant:!0,serializedName:"comp",type:{name:"String"}}},$w={parameterPath:"comp",mapper:{defaultValue:"stats",isConstant:!0,serializedName:"comp",type:{name:"String"}}};class jw{constructor(t){this.client=t}query(t){return this.client.sendOperationRequest({options:t},Lw)}create(t,n){return this.client.sendOperationRequest({tableProperties:t,options:n},Uw)}delete(t,n){return this.client.sendOperationRequest({table:t,options:n},qw)}queryEntities(t,n){return this.client.sendOperationRequest({table:t,options:n},Hw)}queryEntitiesWithPartitionAndRowKey(t,n,r,i){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,options:i},Fw)}updateEntity(t,n,r,i){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,options:i},Vw)}mergeEntity(t,n,r,i){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,options:i},Bw)}deleteEntity(t,n,r,i,o){return this.client.sendOperationRequest({table:t,partitionKey:n,rowKey:r,ifMatch:i,options:o},Kw)}insertEntity(t,n){return this.client.sendOperationRequest({table:t,options:n},Ww)}getAccessPolicy(t,n){return this.client.sendOperationRequest({table:t,options:n},Qw)}setAccessPolicy(t,n){return this.client.sendOperationRequest({table:t,options:n},Gw)}}const Lm=Jl(au,!0),ht=Jl(au,!1),Lw={path:"/Tables",httpMethod:"GET",responses:{200:{bodyMapper:Zp,headersMapper:im},default:{bodyMapper:ve,headersMapper:om}},queryParameters:[Ft,Rm,lu,uu,Rw],urlParameters:[Ee],headerParameters:[Jn,Ce,Te,Ht],serializer:ht},Uw={path:"/Tables",httpMethod:"POST",responses:{201:{bodyMapper:rm,headersMapper:Va},204:{headersMapper:Va},default:{bodyMapper:ve,headersMapper:sm}},requestBody:_w,queryParameters:[Ft],urlParameters:[Ee],headerParameters:[Jn,Ce,Te,Ht,_m,Am],mediaType:"json",serializer:ht},qw={path:"/Tables('{table}')",httpMethod:"DELETE",responses:{204:{headersMapper:am},default:{bodyMapper:ve,headersMapper:lm}},urlParameters:[Ee,yt],headerParameters:[Ce,Te,cu],serializer:ht},Hw={path:"/{table}()",httpMethod:"GET",responses:{200:{bodyMapper:tm,headersMapper:um},default:{bodyMapper:ve,headersMapper:cm}},queryParameters:[Ft,Rm,lu,uu,Ye,Aw,Mw],urlParameters:[Ee,yt],headerParameters:[Jn,Ce,Te,Ht],serializer:ht},Fw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"GET",responses:{200:{bodyMapper:{type:{name:"Dictionary",value:{type:{name:"any"}}}},headersMapper:dm},default:{bodyMapper:ve,headersMapper:fm}},queryParameters:[Ft,lu,uu,Ye],urlParameters:[Ee,yt,Bo,Ko],headerParameters:[Jn,Ce,Te,Ht],serializer:ht},Vw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"PUT",responses:{204:{headersMapper:pm},default:{bodyMapper:ve,headersMapper:mm}},requestBody:du,queryParameters:[Ft,Ye],urlParameters:[Ee,yt,Bo,Ko],headerParameters:[Ce,Te,Ht,cu,Mm,bm],mediaType:"json",serializer:ht},Bw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"PATCH",responses:{204:{headersMapper:ym},default:{bodyMapper:ve,headersMapper:hm}},requestBody:du,queryParameters:[Ft,Ye],urlParameters:[Ee,yt,Bo,Ko],headerParameters:[Ce,Te,Ht,cu,Mm,bm],mediaType:"json",serializer:ht},Kw={path:"/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",httpMethod:"DELETE",responses:{204:{headersMapper:gm},default:{bodyMapper:ve,headersMapper:vm}},queryParameters:[Ft,Ye],urlParameters:[Ee,yt,Bo,Ko],headerParameters:[Jn,Ce,Te,Ht,bw],serializer:ht},Ww={path:"/{table}",httpMethod:"POST",responses:{201:{bodyMapper:{type:{name:"Dictionary",value:{type:{name:"any"}}}},headersMapper:Ba},204:{headersMapper:Ba},default:{bodyMapper:ve,headersMapper:wm}},requestBody:du,queryParameters:[Ft,Ye],urlParameters:[Ee,yt],headerParameters:[Jn,Ce,Te,Ht,_m,Am],mediaType:"json",serializer:ht},Qw={path:"/{table}",httpMethod:"GET",responses:{200:{bodyMapper:{type:{name:"Sequence",element:{type:{name:"Composite",className:"SignedIdentifier"}}},serializedName:"SignedIdentifiers",xmlName:"SignedIdentifiers",xmlIsWrapped:!0,xmlElementName:"SignedIdentifier"},headersMapper:xm},default:{bodyMapper:ve,headersMapper:Sm}},queryParameters:[Ye,Im],urlParameters:[Ee,yt],headerParameters:[Ce,Te,fu],isXML:!0,serializer:Lm},Gw={path:"/{table}",httpMethod:"PUT",responses:{204:{headersMapper:Nm},default:{bodyMapper:ve,headersMapper:Pm}},requestBody:Iw,queryParameters:[Ye,Im],urlParameters:[Ee,yt],headerParameters:[Ce,Te,Dm,$m],isXML:!0,contentType:"application/xml; charset=utf-8",mediaType:"xml",serializer:Lm};class Xw{constructor(t){this.client=t}setProperties(t,n){return this.client.sendOperationRequest({tableServiceProperties:t,options:n},Yw)}getProperties(t){return this.client.sendOperationRequest({options:t},Zw)}getStatistics(t){return this.client.sendOperationRequest({options:t},Jw)}}const mu=Jl(au,!0),Yw={path:"/",httpMethod:"PUT",responses:{202:{headersMapper:Em},default:{bodyMapper:ve,headersMapper:Cm}},requestBody:Dw,queryParameters:[Ye,pu,jm],urlParameters:[Ee],headerParameters:[Ce,Te,Dm,$m],isXML:!0,contentType:"application/xml; charset=utf-8",mediaType:"xml",serializer:mu},Zw={path:"/",httpMethod:"GET",responses:{200:{bodyMapper:su,headersMapper:Tm},default:{bodyMapper:ve,headersMapper:km}},queryParameters:[Ye,pu,jm],urlParameters:[Ee],headerParameters:[Ce,Te,fu],isXML:!0,serializer:mu},Jw={path:"/",httpMethod:"GET",responses:{200:{bodyMapper:nm,headersMapper:Om},default:{bodyMapper:ve,headersMapper:zm}},queryParameters:[Ye,pu,$w],urlParameters:[Ee],headerParameters:[Ce,Te,fu],isXML:!0,serializer:mu};class Um extends fw{constructor(t,n){var r,i;if(t===void 0)throw new Error("'url' cannot be null");n||(n={});const o={requestContentType:"application/json; charset=utf-8"},s="azsdk-js-data-tables/13.1.2",a=n.userAgentOptions&&n.userAgentOptions.userAgentPrefix?`${n.userAgentOptions.userAgentPrefix} ${s}`:`${s}`,l=Object.assign(Object.assign(Object.assign({},o),n),{userAgentOptions:{userAgentPrefix:a},baseUri:(i=(r=n.endpoint)!==null&&r!==void 0?r:n.baseUri)!==null&&i!==void 0?i:"{url}"});super(l),this.url=t,this.version=n.version||"2019-02-02",this.table=new jw(this),this.service=new Xw(this)}}const ex="apiVersionPolicy",qm=e=>({name:ex,sendRequest:async(t,n)=>(t.headers.set("x-ms-version",e),n(t))});function tx(e,t){throw new Error("Account connection string is only supported in Node.js environment")}function nx(e,t,n,r,i){throw new Error("Account connection string is only supported in Node.js environment")}const rx="DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1";function Hm(e,t={}){e.toLowerCase().indexOf("usedevelopmentstorage=true")!==-1&&(e=rx,t.allowInsecureConnection=!0);const n=ix(e);if(n.kind==="AccountConnString")return tx();if(n.kind==="SASConnString")return{url:`${n.url}?${n.accountSas}`,options:t};throw new Error("Connection string must be either an Account connection string or a SAS connection string")}function ix(e){let t=mn(e,"TableEndpoint");return t=t.endsWith("/")?t.slice(0,-1):t,ox(e)?nx(mn(e,"AccountName"),mn(e,"AccountKey"),mn(e,"DefaultEndpointsProtocol"),mn(e,"EndpointSuffix")):sx(e,t)}function ox(e){const t=e.toLowerCase();return t.search("defaultendpointsprotocol=")!==-1&&t.search("accountkey=")!==-1}function sx(e,t){const n=lx(t),r=mn(e,"SharedAccessSignature");if(t)if(r){if(!n)throw new Error("Invalid AccountName in the provided SAS Connection String")}else throw new Error("Invalid SharedAccessSignature in the provided SAS Connection String");else throw new Error("Invalid TableEndpoint in the provided SAS Connection String");return{kind:"SASConnString",url:t,accountName:n,accountSas:r}}function mn(e,t){const n=t.toLowerCase(),r=e.split(";").filter(i=>!!i);for(const i of r){const o=i.trim(),[s,a]=ax(o);if(s.toLowerCase()===n)return a}return""}function ax(e){if(!e||e.indexOf("=")===-1)return[];const t=e.substr(0,e.indexOf("=")),n=e.substr(e.indexOf("=")+1);return[t,n]}function lx(e){if(!e)return e;const t=new URL(e);let n;const r=t.host||"",i=t.pathname||"",o=r.split("."),s=i.split("/");if(o.length>=1&&o[1]==="table")e=e.endsWith("/")?e.slice(0,-1):e,n=r.split(".")[0];else if(s.length>=1)n=s[1];else throw new Error("Unable to extract accountName with provided information.");return n}function Fm(e,t={}){var n,r;const i=ux(e);if(i&&i.status===409&&((n=i.parsedBody.odataError)===null||n===void 0?void 0:n.code)==="TableAlreadyExists")(r=t.logger)===null||r===void 0||r.info(`Table ${t.tableName} already Exists`),t.onResponse&&t.onResponse(i,{});else throw e}function ux(e){if(!cx(e))return;const t=e.response;if(!(!t||!dx(t.parsedBody)))return t}function cx(e){return e.name==="RestError"}function dx(e){return!!(e!=null&&e.odataError)}function Eo(e){return Yl(e)||Xl(e)||Zl(e)}const $n=Ho("data-tables");function Vm(e,t,n){e.removePolicy({name:"bearerTokenPolicy"}),e.addPolicy(Wp({credential:t,scopes:n,challengeCallbacks:{authorizeRequestOnChallenge:yw}}),{phase:"Sign"})}function Bm(e){throw new Error("Shared Access Key authentication is not supported in the browser")}const fx="tablesSASTokenPolicy";function Km(e){return{name:fx,async sendRequest(t,n){return px(t,e),n(t)}}}function px(e,t){const n=new URLSearchParams(t.signature),r=new URL(e.url);for(const[i,o]of n)r.searchParams.append(i,o);e.url=r.toString()}const Y=Vp({namespace:"Microsoft.Data.Tables",packageName:"@azure/data-tables",packageVersion:"13.2.2"});class Co{constructor(t,n,r){this.url=t;const i=Eo(n)?n:void 0,o=(Eo(n)?r:n)||{};o.endpoint=o.endpoint||this.url;const s=Object.assign(Object.assign({},o),{loggingOptions:{logger:$n.info,additionalAllowedHeaderNames:[...xp]},deserializationOptions:{parseXML:Pp},serializationOptions:{stringifyXML:Ep}}),a=new Um(this.url,s);a.pipeline.addPolicy(L0),Xl(i)?a.pipeline.addPolicy(Bm()):Yl(i)&&a.pipeline.addPolicy(Km(i)),Zl(i)&&Vm(a.pipeline,i,wp),r!=null&&r.version&&a.pipeline.addPolicy(qm(r.version)),this.pipeline=a.pipeline,this.table=a.table,this.service=a.service}async getStatistics(t={}){return Y.withSpan("TableServiceClient.getStatistics",t,n=>this.service.getStatistics(U0(n)))}getProperties(t={}){return Y.withSpan("TableServiceClient.getProperties",t,n=>this.service.getProperties(n))}setProperties(t,n={}){return Y.withSpan("TableServiceClient.setProperties",n,r=>this.service.setProperties(t,r))}createTable(t,n={}){return Y.withSpan("TableServiceClient.createTable",n,async r=>{try{await this.table.create({name:t},r)}catch(i){Fm(i,Object.assign(Object.assign({},r),{logger:$n,tableName:t}))}})}deleteTable(t,n={}){return Y.withSpan("TableServiceClient.deleteTable",n,async r=>{try{await this.table.delete(t,r)}catch(i){if(i.statusCode===404)$n.info("TableServiceClient.deleteTable: Table doesn't exist");else throw i}})}listTables(t){const n=this.listTablesAll(t);return{next(){return n.next()},[Symbol.asyncIterator](){return this},byPage:r=>{const i=Object.assign(Object.assign({},t),{queryOptions:Object.assign(Object.assign({},t==null?void 0:t.queryOptions),{top:r==null?void 0:r.maxPageSize})});return r!=null&&r.continuationToken&&(i.continuationToken=r.continuationToken),this.listTablesPage(i)}}}listTablesAll(t){return vo(this,arguments,function*(){var r,i;const o=yield K(this._listTables(t)),{continuationToken:s}=o;if(yield K(yield*wo(In(o))),s){const u=Object.assign(Object.assign({},t),{continuationToken:s});try{for(var a=In(this.listTablesPage(u)),l;l=yield K(a.next()),!l.done;){const c=l.value;yield K(yield*wo(In(c)))}}catch(c){r={error:c}}finally{try{l&&!l.done&&(i=a.return)&&(yield K(i.call(a)))}finally{if(r)throw r.error}}}})}listTablesPage(t={}){return vo(this,arguments,function*(){let r=yield K(Y.withSpan("TableServiceClient.listTablesPage",t,i=>this._listTables(i)));for(yield yield K(r);r.continuationToken;){const i=Object.assign(Object.assign({},t),{continuationToken:r.continuationToken});r=yield K(Y.withSpan("TableServiceClient.listTablesPage",i,async(o,s)=>(s.setAttribute("continuationToken",o.continuationToken),this._listTables(o)))),yield yield K(r)}})}async _listTables(t={}){const{continuationToken:n}=t,r=Tt(t,["continuationToken"]),{xMsContinuationNextTableName:i,value:o=[]}=await this.table.query(Object.assign(Object.assign({},r),{nextTableName:n}));return Object.assign([...o],{continuationToken:i})}static fromConnectionString(t,n){const{url:r,options:i,credential:o}=Hm(t,n);return o?new Co(r,o,i):new Co(r,i)}}function Wm(e){return`changeset_${e}`}function mx(e){return`batch_${e}`}function yx(e,t){return[`--${`batch_${e}`}${We}${xo.CONTENT_TYPE}: multipart/mixed; boundary=changeset_${t}${We}${We}`]}function hx(e,t,n){const r=mx(t),o=`--${Wm(n)}--`,s=`--${r}--`;return`${e.join(We)}${We}${o}${We}${s}${We}`}const Qm="transactionRequestAssemblePolicy",gx={request:ou({url:"FAKE"}),status:200,headers:Vo()};function vx(e,t){return{name:Qm,async sendRequest(n){const r=Sx(n,t);return e.push(r),gx}}}const Gm="transactionHeaderFilterPolicy";function wx(){return{name:Gm,async sendRequest(e,t){return e.headers.delete(xo.X_MS_VERSION),t(e)}}}function xx(e){const t=["sv","ss","srt","sp","se","st","spr","sig"],n=new URL(e);return t.forEach(r=>n.searchParams.delete(r)),n.toString()}function Sx(e,t){const r=`--${Wm(t)}${We}${xo.CONTENT_TYPE}: application/http${We}${xo.CONTENT_TRANSFER_ENCODING}: binary`,i=xx(e.url),o=[r,"",`${e.method.toString()} ${i} ${D0}`];for(const[s,a]of e.headers)o.push(`${s}: ${a}`);return o.push(`${We}`),e.body&&o.push(String(e.body)),o.join(We)}const Nx="cosmosPatchPolicy";function Xm(){return{name:Nx,sendRequest:(e,t)=>(e.method==="PATCH"&&(e.method="POST",e.headers.set("X-HTTP-Method","MERGE")),t(e))}}function Px(e){return{accept:"application/json","x-ms-version":"2019-02-02",DataServiceVersion:"3.0;",MaxDataServiceVersion:"3.0;NetFx","Content-Type":`multipart/mixed; boundary=batch_${e}`}}const Ex=Px;function Ym(e){const t=new URL(e);return t.hostname.indexOf(".table.cosmosdb.")!==-1||t.hostname.indexOf(".table.cosmos.")!==-1||t.hostname==="localhost"&&t.port!=="10002"}class Cx{constructor(t,n,r,i,o,s,a,l=!1){if(this.client=o,this.url=t,this.interceptClient=s,this.allowInsecureConnection=l,this.state=this.initializeState(r,i,n),a)this.url=`${this.getUrlWithSlash()}$batch`;else{const u=t.split("?");this.url=u[0];const c=u.length>1?`?${u[1]}`:"";this.url=`${this.getUrlWithSlash()}$batch${c}`}}initializeState(t,n,r){const i=[],o=yx(t,n),s=Ym(this.url);return kx(this.interceptClient.pipeline,o,n,s),{transactionId:t,changesetId:n,partitionKey:r,pendingOperations:i,bodyParts:o}}createEntity(t){this.checkPartitionKey(t.partitionKey),this.state.pendingOperations.push(this.interceptClient.createEntity(t))}createEntities(t){for(const n of t)this.checkPartitionKey(n.partitionKey),this.state.pendingOperations.push(this.interceptClient.createEntity(n))}deleteEntity(t,n,r){this.checkPartitionKey(t),this.state.pendingOperations.push(this.interceptClient.deleteEntity(t,n,r))}updateEntity(t,n,r){this.checkPartitionKey(t.partitionKey),this.state.pendingOperations.push(this.interceptClient.updateEntity(t,n,r))}upsertEntity(t,n,r){this.checkPartitionKey(t.partitionKey),this.state.pendingOperations.push(this.interceptClient.upsertEntity(t,n,r))}async submitTransaction(){await Promise.all(this.state.pendingOperations);const t=hx(this.state.bodyParts,this.state.transactionId,this.state.changesetId),n=Ex(this.state.transactionId);return Y.withSpan("TableTransaction.submitTransaction",{},async r=>{const i=ou({url:this.url,method:"POST",body:t,headers:Vo(n),tracingOptions:r.tracingOptions,allowInsecureConnection:this.allowInsecureConnection}),o=await this.client.sendRequest(i);return Tx(o)})}checkPartitionKey(t){if(this.state.partitionKey!==t)throw new Error("All operations in a transaction must target the same partitionKey")}getUrlWithSlash(){return this.url.endsWith("/")?this.url:`${this.url}/`}}function Tx(e){const t="--changesetresponse_",n=e.status,r=e.bodyAsText||"",i=r.split(t);200<=n&&n<300||Xc(r,n,e.request,e);const a=i.slice(1,i.length-1).map(l=>{const u=l.match(/HTTP\/1.1 ([0-9]*)/);if((u==null?void 0:u.length)!==2)throw new Error(`Couldn't extract status from sub-response:
 ${l}`);const c=Number.parseInt(u[1]);if(!Number.isInteger(c))throw new Error(`Expected sub-response status to be an integer ${c}`);const f=l.match(/\{(.*)\}/);(f==null?void 0:f.length)===2&&Xc(f[0],c,e.request,e);const d=l.match(/ETag: (.*)/),g=l.match(/RowKey='(.*)'/);return Object.assign(Object.assign({status:c},(g==null?void 0:g.length)===2&&{rowKey:g[1]}),(d==null?void 0:d.length)===2&&{etag:d[1]})});return{status:n,subResponses:a,getResponseForEntity:l=>a.find(u=>u.rowKey===l)}}function Xc(e,t,n,r){var i,o;let s;try{s=JSON.parse(e)}catch{s={}}let a="Transaction Failed",l;if(s&&s["odata.error"]){const u=s["odata.error"];a=(o=(i=u.message)===null||i===void 0?void 0:i.value)!==null&&o!==void 0?o:a,l=u.code}throw new qe(a,{code:l,statusCode:t,request:n,response:r})}function kx(e,t,n,r){const i=e.getOrderedPolicies();for(const o of i)e.removePolicy({name:o.name});e.addPolicy(Xp(),{phase:"Serialize"}),e.addPolicy(wx()),e.addPolicy(vx(t,n)),r&&e.addPolicy(Xm(),{afterPolicies:[Gm],beforePolicies:[Gp,Qm]})}function Zm(e){let t="";if(typeof e=="string")t=e;else for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function Jm(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}function Ox(e,t){if(!e)return;const n=Object.assign({nextPartitionKey:e},t&&{nextRowKey:t});return Zm(JSON.stringify(n))}function zx(e){const t=Jm(e);let n="";for(const i of t)n+=String.fromCharCode(i);return JSON.parse(n)}const yu=new Map([["PartitionKey","partitionKey"],["RowKey","rowKey"],["odata.etag","etag"],["Timestamp","timestamp"]]),be={Binary:"Edm.Binary",Boolean:"Edm.Boolean",DateTime:"Edm.DateTime",Double:"Edm.Double",Guid:"Edm.Guid",Int32:"Edm.Int32",Int64:"Edm.Int64",String:"Edm.String"};function Rx(e){const t={value:e};if(e==null||typeof e=="boolean"||typeof e=="string"||typeof e=="number")t.value=e;else if(typeof e=="bigint")t.value=e.toString(),t.type=be.Int64;else if(e instanceof Date)t.value=e,t.type=be.DateTime;else if(e instanceof Uint8Array)t.value=Zm(e),t.type=be.Binary;else throw new Error(`Unknown EDM type ${typeof e}`);return t}function _x(e){const t={value:e.value};if(e.type==="Boolean"||e.type==="DateTime"||e.type==="Double"||e.type==="Guid"||e.type==="Int32"||e.type==="Int64"||e.type==="String"||e.type==="Binary")t.value=e.value,t.type=be[e.type];else throw new Error(`Unknown EDM type ${typeof e.value}`);return t}function Ax(e){return typeof e=="object"&&(e==null?void 0:e.value)!==void 0&&(e==null?void 0:e.type)!==void 0?_x(e):Rx(e)}function ey(e){for(const[t,n]of yu)if(n===e)return t;return e}function cr(e){const t={};for(const[n,r]of Object.entries(e)){const i=ey(n),o=Ax(r);t[i]=o.value,o.type&&(t[`${i}@odata.type`]=o.type)}return t}function Mx(e,t,n){switch(t){case be.Boolean:return n?{value:e,type:"Boolean"}:e;case be.Double:return n?{value:e,type:"Double"}:e;case be.Int32:return n?{value:e,type:"Int32"}:e;case be.String:return n?{value:e,type:"String"}:e;case be.DateTime:return n?{value:e,type:"DateTime"}:new Date(e);case be.Int64:return n?{value:e,type:"Int64"}:BigInt(e);case be.Guid:return{value:e,type:"Guid"};case be.Binary:return n?{value:e,type:"Binary"}:Jm(e);default:throw new Error(`Unknown EDM type ${t}`)}}function ty(e,t=!1){var n;const r={};for(const[i,o]of Object.entries(e))if(i.indexOf("@odata.type")===-1){const s=(n=yu.get(i))!==null&&n!==void 0?n:i;let a=o;if(`${i}@odata.type`in e){const l=e[`${i}@odata.type`];a=Mx(o,l,t)}else t&&["number","string","boolean"].includes(typeof o)&&(a=bx(i,o));r[s]=a}return r}function bx(e,t){if(yu.has(e))return t;switch(typeof t){case"boolean":return{value:String(t),type:"Boolean"};case"number":return Ix(t);case"string":return{value:t,type:"String"};default:return t}}function Ix(e){const t=String(e);return Number.isSafeInteger(e)?{value:t,type:"Int32"}:{value:t,type:"Double"}}function Dx(e,t){return e.map(n=>ty(n,t))}function $x(e){return e.map(t=>{const{id:n,accessPolicy:r}=t,i=r??{},{start:o,expiry:s}=i,a=Tt(i,["start","expiry"]),l=o?Lc(o,!1):void 0,u=s?Lc(s,!1):void 0;return{id:n,accessPolicy:Object.assign(Object.assign(Object.assign({},u&&{expiry:u}),l&&{start:l}),a)}})}function jx(e){return e.map(t=>{const{id:n,accessPolicy:r}=t,i=r??{},{start:o,expiry:s}=i,a=Tt(i,["start","expiry"]),l=o?new Date(o):void 0,u=s?new Date(s):void 0;return{id:n,accessPolicy:Object.assign(Object.assign(Object.assign({},u&&{expiry:u}),l&&{start:l}),a)}})}function Yc(e){const{select:t}=e,n=Tt(e,["select"]),r=Object.assign({},n),i=["etag","odata.etag"];return t&&(r.select=t.filter(o=>!i.includes(o)).map(ey).join(",")),r}var Oi,Lx=new Uint8Array(16);function Ux(){if(!Oi&&(Oi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Oi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Oi(Lx)}const qx=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Hx(e){return typeof e=="string"&&qx.test(e)}var ie=[];for(var As=0;As<256;++As)ie.push((As+256).toString(16).substr(1));function Fx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(ie[e[t+0]]+ie[e[t+1]]+ie[e[t+2]]+ie[e[t+3]]+"-"+ie[e[t+4]]+ie[e[t+5]]+"-"+ie[e[t+6]]+ie[e[t+7]]+"-"+ie[e[t+8]]+ie[e[t+9]]+"-"+ie[e[t+10]]+ie[e[t+11]]+ie[e[t+12]]+ie[e[t+13]]+ie[e[t+14]]+ie[e[t+15]]).toLowerCase();if(!Hx(n))throw TypeError("Stringified UUID is invalid");return n}function Vx(e,t,n){e=e||{};var r=e.random||(e.rng||Ux)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return Fx(r)}class Zc{static generateUuid(){return Vx()}}function vt(e){return e.replace(/'/g,"''")}class zr{constructor(t,n,r,i={}){var o;this.url=t,this.tableName=n;const s=Eo(r)?r:void 0;this.credential=s,this.clientOptions=(Eo(r)?i:r)||{},this.allowInsecureConnection=(o=this.clientOptions.allowInsecureConnection)!==null&&o!==void 0?o:!1,this.clientOptions.endpoint=this.clientOptions.endpoint||this.url;const a=Object.assign(Object.assign({},this.clientOptions),{loggingOptions:{logger:$n.info,additionalAllowedHeaderNames:[...xp]},deserializationOptions:{parseXML:Pp},serializationOptions:{stringifyXML:Ep}}),l=new Um(this.url,a);Xl(s)?l.pipeline.addPolicy(Bm()):Yl(s)&&l.pipeline.addPolicy(Km(s)),Zl(s)&&Vm(l.pipeline,s,wp),Ym(this.url)&&l.pipeline.addPolicy(Xm()),i.version&&l.pipeline.addPolicy(qm(i.version)),this.generatedClient=l,this.table=l.table,this.pipeline=l.pipeline}deleteTable(t={}){return Y.withSpan("TableClient.deleteTable",t,async n=>{try{await this.table.delete(this.tableName,n)}catch(r){if(r.statusCode===404)$n.info("TableClient.deleteTable: Table doesn't exist");else throw r}})}createTable(t={}){return Y.withSpan("TableClient.createTable",t,async n=>{try{await this.table.create({name:this.tableName},n)}catch(r){Fm(r,Object.assign(Object.assign({},n),{logger:$n,tableName:this.tableName}))}})}getEntity(t,n,r={}){return Y.withSpan("TableClient.getEntity",r,async i=>{let o;function s(f,d){o=f.parsedBody,i.onResponse&&i.onResponse(f,d)}const{disableTypeConversion:a,queryOptions:l}=i,u=Tt(i,["disableTypeConversion","queryOptions"]);return await this.table.queryEntitiesWithPartitionAndRowKey(this.tableName,vt(t),vt(n),Object.assign(Object.assign({},u),{queryOptions:Yc(l||{}),onResponse:s})),ty(o,a??!1)})}listEntities(t={}){const n=this.tableName,r=this.listEntitiesAll(n,t);return{next(){return r.next()},[Symbol.asyncIterator](){return this},byPage:i=>{const o=Object.assign(Object.assign({},t),{queryOptions:Object.assign(Object.assign({},t.queryOptions),{top:i==null?void 0:i.maxPageSize})});return i!=null&&i.continuationToken&&(o.continuationToken=i.continuationToken),this.listEntitiesPage(n,o)}}}listEntitiesAll(t,n){return vo(this,arguments,function*(){var i,o;const s=yield K(this._listEntities(t,n));if(yield K(yield*wo(In(s))),s.continuationToken){const u=Object.assign(Object.assign({},n),{continuationToken:s.continuationToken});try{for(var a=In(this.listEntitiesPage(t,u)),l;l=yield K(a.next()),!l.done;){const c=l.value;yield K(yield*wo(In(c)))}}catch(c){i={error:c}}finally{try{l&&!l.done&&(o=a.return)&&(yield K(o.call(a)))}finally{if(i)throw i.error}}}})}listEntitiesPage(t,n={}){return vo(this,arguments,function*(){let i=yield K(Y.withSpan("TableClient.listEntitiesPage",n,o=>this._listEntities(t,o)));for(yield yield K(i);i.continuationToken;){const o=Object.assign(Object.assign({},n),{continuationToken:i.continuationToken});i=yield K(Y.withSpan("TableClient.listEntitiesPage",o,(s,a)=>(a.setAttribute("continuationToken",i.continuationToken),this._listEntities(t,s)))),yield yield K(i)}})}async _listEntities(t,n={}){const{disableTypeConversion:r=!1}=n,i=Yc(n.queryOptions||{}),o=Object.assign(Object.assign({},n),{queryOptions:i});if(n.continuationToken){const d=zx(n.continuationToken);o.nextRowKey=d.nextRowKey,o.nextPartitionKey=d.nextPartitionKey}const{xMsContinuationNextPartitionKey:s,xMsContinuationNextRowKey:a,value:l}=await this.table.queryEntities(t,o),u=Dx(l??[],r),c=Ox(s,a);return Object.assign([...u],{continuationToken:c})}createEntity(t,n={}){return Y.withSpan("TableClient.createEntity",n,r=>{const i=Tt(r||{},[]);return this.table.insertEntity(this.tableName,Object.assign(Object.assign({},i),{tableEntityProperties:cr(t),responsePreference:"return-no-content"}))})}deleteEntity(t,n,r={}){return Y.withSpan("TableClient.deleteEntity",r,i=>{const{etag:o="*"}=i,s=Tt(i,["etag"]),a=Object.assign({},s);return this.table.deleteEntity(this.tableName,vt(t),vt(n),o,a)})}updateEntity(t,n="Merge",r={}){return Y.withSpan("TableClient.updateEntity",r,async i=>{const o=vt(t.partitionKey),s=vt(t.rowKey),a=i||{},{etag:l="*"}=a,u=Tt(a,["etag"]);if(n==="Merge")return this.table.mergeEntity(this.tableName,o,s,Object.assign({tableEntityProperties:cr(t),ifMatch:l},u));if(n==="Replace")return this.table.updateEntity(this.tableName,o,s,Object.assign({tableEntityProperties:cr(t),ifMatch:l},u));throw new Error(`Unexpected value for update mode: ${n}`)},{spanAttributes:{updateEntityMode:n}})}upsertEntity(t,n="Merge",r={}){return Y.withSpan("TableClient.upsertEntity",r,async i=>{const o=vt(t.partitionKey),s=vt(t.rowKey);if(n==="Merge")return this.table.mergeEntity(this.tableName,o,s,Object.assign({tableEntityProperties:cr(t)},i));if(n==="Replace")return this.table.updateEntity(this.tableName,o,s,Object.assign({tableEntityProperties:cr(t)},i));throw new Error(`Unexpected value for update mode: ${n}`)},{spanAttributes:{upsertEntityMode:n}})}getAccessPolicy(t={}){return Y.withSpan("TableClient.getAccessPolicy",t,async n=>{const r=await this.table.getAccessPolicy(this.tableName,n);return jx(r)})}setAccessPolicy(t,n={}){return Y.withSpan("TableClient.setAccessPolicy",n,r=>{const i=$x(t);return this.table.setAccessPolicy(this.tableName,Object.assign(Object.assign({},r),{tableAcl:i}))})}async submitTransaction(t){const n=t[0][1].partitionKey,r=Zc.generateUuid(),i=Zc.generateUuid(),o=new Cx(this.url,n,r,i,this.generatedClient,new zr(this.url,this.tableName),this.credential,this.allowInsecureConnection);for(const s of t){const[a,l,u="Merge",c]=s;switch(a){case"create":o.createEntity(l);break;case"delete":o.deleteEntity(l.partitionKey,l.rowKey);break;case"update":o.updateEntity(l,u,c);break;case"upsert":o.upsertEntity(l,u)}}return o.submitTransaction()}static fromConnectionString(t,n,r){const{url:i,options:o,credential:s}=Hm(t,r);return s?new zr(i,n,s,o):new zr(i,n,o)}}async function Bx(){let e="https://icsltn2qastore.table.core.windows.net/?sv=2022-11-02&ss=t&srt=sco&sp=rwdlacu&se=2123-05-17T10:14:54Z&st=2023-05-17T02:14:54Z&spr=https&sig=D1FbXTuBcFKeEJ5lUw14FlIFRb4kl2C84uU9c90aqEA%3D",t="BlobEndpoint=https://icsltn2qastore.blob.core.windows.net/;QueueEndpoint=https://icsltn2qastore.queue.core.windows.net/;FileEndpoint=https://icsltn2qastore.file.core.windows.net/;TableEndpoint=https://icsltn2qastore.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-06-18T00:28:14Z&st=2023-05-17T16:28:14Z&spr=https,http&sig=%2F0%2FcHEiRTcKSwpRtQnKsy0mTf3sL%2BXuDwEc90ZL%2BpEo%3D";await Co.fromConnectionString(t,{}).createTable("test");const r=new zr(e,"test"),i={partitionKey:"hometasks",rowKey:"1",description:"take out the trash",dueDate:new Date(2015,6,20)};let o=await r.createEntity(i);console.log(o)}function Kx(){const e=A.useContext(Xn),t=A.useContext(ri);function n(){t({...e,sidebarOn:!e.sidebarOn})}return T.jsxs("div",{className:"burger-btn sticky top-0 min-h-[50px] px-4 flex items-center justify-between bg-green-700 ",children:[T.jsx("div",{children:T.jsx("img",{className:"cursor-pointer",onClick:n,src:M0,alt:"Menu"})}),T.jsx("div",{onClick:()=>{Bx()},className:"text-slate-200 border-double border-b-4 text-xl cursor-pointer",children:e.subject}),T.jsx("div",{})]})}function Wx(){const e=A.useContext(Xn),t=A.useContext(Gl),n=A.useContext(ni),r=e.testModeOn&&e.correctAnswers,i=A.useMemo(()=>e.testModeOn?(console.log("calculating . . . . "),t.reduce((o,s)=>o+(s.correct?1:0),0)):0,[t]);return T.jsxs("div",{className:`bottombar ${r?"":"none"}`,children:[T.jsxs("div",{className:"score",children:[T.jsx("span",{className:"score__label",children:"Score: "}),T.jsxs("span",{className:"score__value",children:[i,"/",t.length]})]}),T.jsx("div",{className:"actions",children:T.jsx("button",{className:"",onClick:()=>n(yp()),children:"مسح الإجابات"})})]})}const Kt={};function Qx(e,t,n=!0,r=100){A.useDebugValue(Kt);const[i,o]=A.useState(!1),s=l=>{var u;return(Kt[e]={...Kt[e],captured:l??((u=Kt[e])==null?void 0:u.captured)??!1}).captured};return i||s()||(t&&!n&&t(),!Kt[e].skip&&(t&&n&&t(),o(()=>s(!0)),setTimeout(()=>o(!1),r))),!i&&s()&&s(!1),[i,()=>e in Kt?Kt[e].skip=!0:!1]}const Ms=(e=35)=>("vibrate"in navigator&&navigator.vibrate(e),!0);function Gx({question:e,index:t}){const n=A.useId(),r=A.useContext(ni),i=A.useContext(ri),o=A.useContext(Xn),s=h=>{i({...o,unbluredQuestion:h}),Ms()},a=h=>{if(!o.testModeOn)return console.log("testMode is off");if(o.correctAnswers&&e.selectedId)return Ms(60);r(mp(e.id,h)),Ms()},[l]=Qx(n,()=>"",!0,300),u="bg-amber-700",c="bg-green-700",f="bg-red-700",d="bg-slate-800";function g(h){return o.testModeOn?o.correctAnswers?e.selectedId?h.selected?h.correct?c:f:h.correct?c:d:d:h.selected?u:d:h.correct?c:d}return T.jsxs("div",{className:"quest-container",children:[T.jsxs("h2",{className:`quest-text ${l&&"bg-slate-600"||""}`,children:[T.jsx("span",{className:"quest-span",children:t}),e.questionText,e.image&&T.jsx("img",{src:"./assets/"+e.image,alt:e.imageAlt,className:"quest-image w-full h-auto my-2 "})]}),T.jsxs("div",{className:"quest-answers",children:[o.unbluredQuestion!==e.id&&o.blurAnswers&&!o.testModeOn&&T.jsx("div",{className:"blur",onDoubleClick:()=>s(e.id)}),e.answers.map((h,v)=>T.jsxs("div",{className:`quest-answer ${g(h)}`,children:[T.jsx("input",{type:"radio",onClick:N=>a(h.id),name:"answer",id:`answer${n}${v}`,className:"hidden"}),T.jsx("label",{htmlFor:`answer${n}${v}`,className:"quest-answerlable p-2",children:h.text})]},h.id))]})]})}const Xx=A.memo(Gx);function Yx({questPanel:e}){const t=A.useContext(Gl),n=A.useContext(Xn),r=A.useContext(ri),i=A.useContext(Ql),o=A.useContext(ni),s=n.testModeOn&&n.correctAnswers?"raise":"",a=n.sidebarOn?"none":"",[l,u]=A.useState("");return A.useEffect(()=>{if(!t.length){let c="إرشاد زراعي";r({...n,sidebarOn:!1,subject:c,questions:i[c]}),o(Wl(i[c],n.shuffleQuestions))}},[]),T.jsxs("div",{ref:e,className:"questions p-4 flex-1 overflow-y-auto",children:[t==null?void 0:t.map((c,f)=>T.jsxs("div",{children:[T.jsx(Xx,{question:c,index:f+1}),T.jsx("br",{})]},c.id)),T.jsx("div",{className:`scroll-top ${s} ${a} ${l}`,onClick:()=>{var c;return(c=e.current)==null?void 0:c.scrollTo({top:0,behavior:"smooth"})},onPointerMoveCapture:()=>u("hover"),onPointerDownCapture:()=>u("hover"),onPointerOutCapture:()=>u(""),onPointerUp:()=>u("")})]})}function Zx({defaultValue:e=!1,enabled:t=!0,onChange:n,setToggle:r,...i}){const o=A.useId(),s=A.useRef(null),a=u=>{var c;return n?n(((c=u.target)==null?void 0:c.checked)||!1):null};return r&&r(()=>{var u;return(u=s.current)==null?void 0:u.click()}),T.jsxs("label",{style:{},htmlFor:o,className:`toggle-switch ${t?"":"disabled"}`,children:[T.jsx("input",{id:o,ref:s,type:"checkbox",onChange:a,disabled:!t,onClick:u=>u.stopPropagation(),defaultChecked:e,...i}),T.jsx("span",{className:"slider"})]})}function Jx({questPanel:e}){const t=A.useContext(Xn),n=A.useContext(ri),r=A.useContext(Ql),i=A.useContext(ni),{sidebarOn:o}=t,s=(a,l)=>{var u;switch(a){case"selectedSubject":return(u=e.current)==null||u.scrollTo({top:0,behavior:"smooth"}),n({...t,sidebarOn:!1,subject:l,questions:r[l]}),i(Wl(r[l],t.shuffleQuestions));case"testModeOn":return n({...t,testModeOn:l});case"correctAnswers":return n({...t,correctAnswers:l});case"blurAnswers":return n({...t,blurAnswers:l});case"shuffleQuestions":return n({...t,shuffleQuestions:l}),i(pp([...r[t.subject]],l));case"shuffleAnswers":return n({...t,shuffleAnswers:l});default:return}};return T.jsxs("div",{className:"absolutez",children:[T.jsxs("nav",{onClick:a=>a.stopPropagation(),className:`${o?"":"off"} sidebar`,children:[T.jsxs("div",{className:"subjects",children:[T.jsx("h2",{className:"title",children:"البنك"}),T.jsx("div",{className:"sep"}),Object.keys(r).map(a=>T.jsx("div",{className:`item ${t.subject===a?"active":""}`,onClick:()=>s("selectedSubject",a),children:a},a))]}),T.jsxs("div",{className:"settings",children:[T.jsx("div",{className:"sep"}),T.jsx("div",{className:"title",children:"الاعدادات"}),T.jsx("div",{className:"sep"}),T.jsx(zi,{title:"وضع الإختبار",defaultValue:t.testModeOn,action:a=>s("testModeOn",a)}),T.jsx(zi,{title:"تصحيح الإجابات",enabled:t.testModeOn,defaultValue:t.correctAnswers,action:a=>s("correctAnswers",a)}),T.jsx("p",{}),T.jsx(zi,{title:"تغشية الإجابات",enabled:!t.testModeOn,defaultValue:t.blurAnswers,action:a=>s("blurAnswers",a)}),T.jsx(zi,{title:"مزج الأسئلة",defaultValue:t.shuffleQuestions,action:a=>s("shuffleQuestions",a)})]}),T.jsxs("div",{className:"credits",children:[T.jsx("div",{className:"sep"}),T.jsx("div",{className:"title",children:"الحقوق"}),T.jsx("div",{className:"sep"}),T.jsx("div",{className:"item",children:"motifyee@gmail.com"}),T.jsx("div",{className:"item",children:"م/ مليك روماني"})]})]}),T.jsx("div",{onPointerMove:a=>a.stopPropagation(),onPointerDownCapture:a=>a.stopPropagation(),onPointerDown:a=>a.stopPropagation(),onClick:()=>n({...t,sidebarOn:!1}),className:`${o?"":"off"} sidebar-overlay`})]})}function zi({title:e,defaultValue:t,action:n,enabled:r=!0}){let i=()=>{};const o=s=>i=s;return T.jsxs("div",{onClick:s=>{s.preventDefault(),i()},className:"flex justify-between items-center item",children:[T.jsx("div",{className:`${r?"":"text-gray-500 xline-through"}`,children:e}),T.jsx(Zx,{defaultValue:t,enabled:r,onChange:n,setToggle:o})]})}const eS=document.getElementById("root");function tS(){const e=A.useRef(null);return T.jsxs(A0,{children:[T.jsx(Kx,{}),T.jsx(Jx,{questPanel:e}),T.jsx(Yx,{questPanel:e}),T.jsx(Wx,{})]})}bs.createRoot(eS).render(T.jsx(tS,{}));
