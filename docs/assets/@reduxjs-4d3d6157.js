function j(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function R(t){return!!t&&!!t[h]}function D(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Ct}(t)||Array.isArray(t)||!!t[bt]||!!(!((e=t.constructor)===null||e===void 0)&&e[bt])||nt(t)||ot(t))}function I(t,e,r){r===void 0&&(r=!1),C(t)===0?(r?Object.keys:T)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,o){return e(o,n,t)})}function C(t){var e=t[h];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:nt(t)?2:ot(t)?3:0}function M(t,e){return C(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function kt(t,e){return C(t)===2?t.get(e):t[e]}function jt(t,e,r){var n=C(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function At(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function nt(t){return Tt&&t instanceof Map}function ot(t){return qt&&t instanceof Set}function k(t){return t.o||t.t}function it(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Et(t);delete e[h];for(var r=T(e),n=0;n<r.length;n++){var o=r[n],i=e[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function ut(t,e){return e===void 0&&(e=!1),at(t)||R(t)||!D(t)||(C(t)>1&&(t.set=t.add=t.clear=t.delete=Rt),Object.freeze(t),e&&I(t,function(r,n){return ut(n,!0)},!0)),t}function Rt(){j(2)}function at(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function A(t){var e=rt[t];return e||j(18,t),e}function Dt(t,e){rt[t]||(rt[t]=e)}function Y(){return K}function X(t,e){e&&(A("Patches"),t.u=[],t.s=[],t.v=e)}function G(t){tt(t),t.p.forEach(It),t.p=null}function tt(t){t===K&&(K=t.l)}function vt(t){return K={p:[],l:K,h:t,m:!0,_:0}}function It(t){var e=t[h];e.i===0||e.i===1?e.j():e.g=!0}function $(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||A("ES5").S(e,t,n),n?(r[h].P&&(G(e),j(4)),D(t)&&(t=L(e,t),e.l||U(e,t)),e.u&&A("Patches").M(r[h].t,t,e.u,e.s)):t=L(e,r,[]),G(e),e.u&&e.v(e.u,e.s),t!==St?t:void 0}function L(t,e,r){if(at(e))return e;var n=e[h];if(!n)return I(e,function(f,c){return dt(t,n,e,f,c,r)},!0),e;if(n.A!==t)return e;if(!n.P)return U(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=it(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),I(i,function(f,c){return dt(t,n,o,f,c,r,a)}),U(t,o,!1),r&&t.u&&A("Patches").N(n,r,t.u,t.s)}return n.o}function dt(t,e,r,n,o,i,a){if(R(o)){var f=L(t,o,i&&e&&e.i!==3&&!M(e.R,n)?i.concat(n):void 0);if(jt(r,n,f),!R(f))return;t.m=!1}else a&&r.add(o);if(D(o)&&!at(o)){if(!t.h.D&&t._<1)return;L(t,o),e&&e.A.l||U(t,o)}}function U(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&ut(e,r)}function B(t,e){var r=t[h];return(r?k(r):t)[e]}function ht(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function _(t){t.P||(t.P=!0,t.l&&_(t.l))}function H(t){t.o||(t.o=it(t.t))}function et(t,e,r){var n=nt(e)?A("MapSet").F(e,r):ot(e)?A("MapSet").T(e,r):t.O?function(o,i){var a=Array.isArray(o),f={i:a?1:0,A:i?i.A:Y(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},c=f,u=V;a&&(c=[f],u=N);var l=Proxy.revocable(c,u),v=l.revoke,s=l.proxy;return f.k=s,f.j=v,s}(e,r):A("ES5").J(e,r);return(r?r.A:Y()).p.push(n),n}function xt(t){return R(t)||j(22,t),function e(r){if(!D(r))return r;var n,o=r[h],i=C(r);if(o){if(!o.P&&(o.i<4||!A("ES5").K(o)))return o.t;o.I=!0,n=yt(r,i),o.I=!1}else n=yt(r,i);return I(n,function(a,f){o&&kt(o.t,a)===f||jt(n,a,e(f))}),i===3?new Set(n):n}(t)}function yt(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return it(t)}function Mt(){function t(i,a){var f=o[i];return f?f.enumerable=a:o[i]=f={configurable:!0,enumerable:a,get:function(){var c=this[h];return V.get(c,i)},set:function(c){var u=this[h];V.set(u,i,c)}},f}function e(i){for(var a=i.length-1;a>=0;a--){var f=i[a][h];if(!f.P)switch(f.i){case 5:n(f)&&_(f);break;case 4:r(f)&&_(f)}}}function r(i){for(var a=i.t,f=i.k,c=T(f),u=c.length-1;u>=0;u--){var l=c[u];if(l!==h){var v=a[l];if(v===void 0&&!M(a,l))return!0;var s=f[l],d=s&&s[h];if(d?d.t!==v:!At(s,v))return!0}}var y=!!a[h];return c.length!==T(a).length+(y?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var f=Object.getOwnPropertyDescriptor(a,a.length-1);if(f&&!f.get)return!0;for(var c=0;c<a.length;c++)if(!a.hasOwnProperty(c))return!0;return!1}var o={};Dt("ES5",{J:function(i,a){var f=Array.isArray(i),c=function(l,v){if(l){for(var s=Array(v.length),d=0;d<v.length;d++)Object.defineProperty(s,""+d,t(d,!0));return s}var y=Et(v);delete y[h];for(var g=T(y),P=0;P<g.length;P++){var w=g[P];y[w]=t(w,l||!!y[w].enumerable)}return Object.create(Object.getPrototypeOf(v),y)}(f,i),u={i:f?5:4,A:a?a.A:Y(),P:!1,I:!1,R:{},l:a,t:i,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,h,{value:u,writable:!0}),c},S:function(i,a,f){f?R(a)&&a[h].A===i&&e(i.p):(i.u&&function c(u){if(u&&typeof u=="object"){var l=u[h];if(l){var v=l.t,s=l.k,d=l.R,y=l.i;if(y===4)I(s,function(p){p!==h&&(v[p]!==void 0||M(v,p)?d[p]||c(s[p]):(d[p]=!0,_(l)))}),I(v,function(p){s[p]!==void 0||M(s,p)||(d[p]=!1,_(l))});else if(y===5){if(n(l)&&(_(l),d.length=!0),s.length<v.length)for(var g=s.length;g<v.length;g++)d[g]=!1;else for(var P=v.length;P<s.length;P++)d[P]=!0;for(var w=Math.min(s.length,v.length),b=0;b<w;b++)s.hasOwnProperty(b)||(d[b]=!0),d[b]===void 0&&c(s[b])}}}}(i.p[0]),e(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var pt,K,ft=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Tt=typeof Map<"u",qt=typeof Set<"u",gt=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",St=ft?Symbol.for("immer-nothing"):((pt={})["immer-nothing"]=!0,pt),bt=ft?Symbol.for("immer-draftable"):"__$immer_draftable",h=ft?Symbol.for("immer-state"):"__$immer_state",Ct=""+Object.prototype.constructor,T=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Et=Object.getOwnPropertyDescriptors||function(t){var e={};return T(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},rt={},V={get:function(t,e){if(e===h)return t;var r=k(t);if(!M(r,e))return function(o,i,a){var f,c=ht(i,a);return c?"value"in c?c.value:(f=c.get)===null||f===void 0?void 0:f.call(o.k):void 0}(t,r,e);var n=r[e];return t.I||!D(n)?n:n===B(t.t,e)?(H(t),t.o[e]=et(t.A.h,n,t)):n},has:function(t,e){return e in k(t)},ownKeys:function(t){return Reflect.ownKeys(k(t))},set:function(t,e,r){var n=ht(k(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=B(k(t),e),i=o==null?void 0:o[h];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(At(r,o)&&(r!==void 0||M(t.t,e)))return!0;H(t),_(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return B(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,H(t),_(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=k(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){j(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){j(12)}},N={};I(V,function(t,e){N[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),N.deleteProperty=function(t,e){return N.set.call(this,t,e,void 0)},N.set=function(t,e,r){return V.set.call(this,t[0],e,r,t[0])};var Wt=function(){function t(r){var n=this;this.O=gt,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var f=i;i=o;var c=n;return function(g){var P=this;g===void 0&&(g=f);for(var w=arguments.length,b=Array(w>1?w-1:0),p=1;p<w;p++)b[p-1]=arguments[p];return c.produce(g,function(S){var E;return(E=i).call.apply(E,[P,S].concat(b))})}}var u;if(typeof i!="function"&&j(6),a!==void 0&&typeof a!="function"&&j(7),D(o)){var l=vt(n),v=et(n,o,void 0),s=!0;try{u=i(v),s=!1}finally{s?G(l):tt(l)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(g){return X(l,a),$(g,l)},function(g){throw G(l),g}):(X(l,a),$(u,l))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===St&&(u=void 0),n.D&&ut(u,!0),a){var d=[],y=[];A("Patches").M(o,u,d,y),a(d,y)}return u}j(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var l=arguments.length,v=Array(l>1?l-1:0),s=1;s<l;s++)v[s-1]=arguments[s];return n.produceWithPatches(u,function(d){return o.apply(void 0,[d].concat(v))})};var a,f,c=n.produce(o,i,function(u,l){a=u,f=l});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,a,f]}):[c,a,f]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){D(r)||j(8),R(r)&&(r=xt(r));var n=vt(this),o=et(this,r,void 0);return o[h].C=!0,tt(n),o},e.finishDraft=function(r,n){var o=r&&r[h],i=o.A;return X(i,n),$(void 0,i)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!gt&&j(20),this.O=r},e.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=A("Patches").$;return R(r)?a(r,n):this.produce(r,function(f){return a(f,n)})},t}(),m=new Wt;m.produce;m.produceWithPatches.bind(m);m.setAutoFreeze.bind(m);m.setUseProxies.bind(m);m.applyPatches.bind(m);m.createDraft.bind(m);m.finishDraft.bind(m);var _t=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ft=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function f(u){return function(l){return c([u,l])}}function c(u){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,o=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(u[0]===6&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=e.call(t,r)}catch(l){u=[6,l],o=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},J=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},Nt=Object.defineProperty,zt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,mt=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,Pt=function(t,e,r){return e in t?Nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},z=function(t,e){for(var r in e||(e={}))Vt.call(e,r)&&Pt(t,r,e[r]);if(mt)for(var n=0,o=mt(e);n<o.length;n++){var r=o[n];Gt.call(e,r)&&Pt(t,r,e[r])}return t},Q=function(t,e){return zt(t,Kt(e))},Lt=function(t,e,r){return new Promise(function(n,o){var i=function(c){try{f(r.next(c))}catch(u){o(u)}},a=function(c){try{f(r.throw(c))}catch(u){o(u)}},f=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(i,a)};f((r=r.apply(t,e)).next())})};(function(t){_t(e,t);function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.prototype.concat.apply(this,r)},e.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(e.bind.apply(e,J([void 0],r[0].concat(this)))):new(e.bind.apply(e,J([void 0],r.concat(this))))},e})(Array);(function(t){_t(e,t);function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.prototype.concat.apply(this,r)},e.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(e.bind.apply(e,J([void 0],r[0].concat(this)))):new(e.bind.apply(e,J([void 0],r.concat(this))))},e})(Array);function q(t,e){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(e){var i=e.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return z(z({type:t,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:t,payload:n[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(n){return n.type===t},r}var Ut="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Jt=function(t){t===void 0&&(t=21);for(var e="",r=t;r--;)e+=Ut[Math.random()*64|0];return e},Xt=["name","message","stack","code"],Z=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),wt=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),$t=function(t){if(typeof t=="object"&&t!==null){for(var e={},r=0,n=Xt;r<n.length;r++){var o=n[r];typeof t[o]=="string"&&(e[o]=t[o])}return e}return{message:String(t)}};(function(){function t(e,r,n){var o=q(e+"/fulfilled",function(u,l,v,s){return{payload:u,meta:Q(z({},s||{}),{arg:v,requestId:l,requestStatus:"fulfilled"})}}),i=q(e+"/pending",function(u,l,v){return{payload:void 0,meta:Q(z({},v||{}),{arg:l,requestId:u,requestStatus:"pending"})}}),a=q(e+"/rejected",function(u,l,v,s,d){return{payload:s,error:(n&&n.serializeError||$t)(u||"Rejected"),meta:Q(z({},d||{}),{arg:v,requestId:l,rejectedWithValue:!!s,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),f=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(l,v,s){var d=n!=null&&n.idGenerator?n.idGenerator(u):Jt(),y=new f,g;function P(b){g=b,y.abort()}var w=function(){return Lt(this,null,function(){var b,p,S,E,lt,W,st;return Ft(this,function(x){switch(x.label){case 0:return x.trys.push([0,4,,5]),E=(b=n==null?void 0:n.condition)==null?void 0:b.call(n,u,{getState:v,extra:s}),Ht(E)?[4,E]:[3,2];case 1:E=x.sent(),x.label=2;case 2:if(E===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return lt=new Promise(function(O,F){return y.signal.addEventListener("abort",function(){return F({name:"AbortError",message:g||"Aborted"})})}),l(i(d,u,(p=n==null?void 0:n.getPendingMeta)==null?void 0:p.call(n,{requestId:d,arg:u},{getState:v,extra:s}))),[4,Promise.race([lt,Promise.resolve(r(u,{dispatch:l,getState:v,extra:s,requestId:d,signal:y.signal,abort:P,rejectWithValue:function(O,F){return new Z(O,F)},fulfillWithValue:function(O,F){return new wt(O,F)}})).then(function(O){if(O instanceof Z)throw O;return O instanceof wt?o(O.payload,d,u,O.meta):o(O,d,u)})])];case 3:return S=x.sent(),[3,5];case 4:return W=x.sent(),S=W instanceof Z?a(null,d,u,W.payload,W.meta):a(W,d,u),[3,5];case 5:return st=n&&!n.dispatchConditionRejection&&a.match(S)&&S.meta.condition,st||l(S),[2,S]}})})}();return Object.assign(w,{abort:P,requestId:d,arg:u,unwrap:function(){return w.then(Bt)}})}}return Object.assign(c,{pending:i,rejected:a,fulfilled:o,typePrefix:e})}return t.withTypes=function(){return t},t})();function Bt(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Ht(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var ct="listenerMiddleware";q(ct+"/add");q(ct+"/removeAll");q(ct+"/remove");var Ot;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Mt();export{q as c};
