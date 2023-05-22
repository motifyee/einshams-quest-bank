import{o as pa}from"./idb-81bdbf9b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ma=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},or={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,h=l?e[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|h>>6,E=h&63;l||(E=64,o||(p=64)),i.push(n[u],n[d],n[p],n[E])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ma(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||h==null||d==null)throw new ya;const p=r<<2|a>>4;if(i.push(p),h!==64){const E=a<<4&240|h>>2;if(i.push(E),d!==64){const C=h<<6&192|d;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ya extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const va=function(e){const t=rr(e);return or.encodeByteArray(t,!0)},Ye=function(e){return va(e).replace(/\./g,"")},wa=function(e){try{return or.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=()=>Ea().__FIREBASE_DEFAULTS__,Ia=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sa=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wa(e[1]);return t&&JSON.parse(t)},ar=()=>{try{return Ta()||Ia()||Sa()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Aa=e=>{var t,n;return(n=(t=ar())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ca=e=>{const t=Aa(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},lr=()=>{var e;return(e=ar())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ye(JSON.stringify(n)),Ye(JSON.stringify(o)),a].join(".")}function _a(){try{return typeof indexedDB=="object"}catch{return!1}}function ka(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="FirebaseError";class Xt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=ba,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?xa(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xt(s,a,i)}}function xa(e,t){return e.replace(Ra,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Ra=/\{\$([^}]+)}/g;function ii(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(gs(r)&&gs(o)){if(!ii(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function gs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){return e&&e._delegate?e._delegate:e}class fe{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Da;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pa(t))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ct){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ct){return this.instances.has(t)}getOptions(t=Ct){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ma(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ct){return this.component?this.component.multipleInstances?t:Ct:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ma(e){return e===Ct?void 0:e}function Pa(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Oa(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const Fa={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Va=S.INFO,Ua={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},$a=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Ua[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ur{constructor(t){this.name=t,this._logLevel=Va,this._logHandler=$a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ja(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function ja(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const si="@firebase/app",ps="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new ur("@firebase/app"),Ha="@firebase/app-compat",za="@firebase/analytics-compat",qa="@firebase/analytics",Ga="@firebase/app-check-compat",Ka="@firebase/app-check",Qa="@firebase/auth",Wa="@firebase/auth-compat",Xa="@firebase/database",Ya="@firebase/database-compat",Ja="@firebase/functions",Za="@firebase/functions-compat",tl="@firebase/installations",el="@firebase/installations-compat",nl="@firebase/messaging",il="@firebase/messaging-compat",sl="@firebase/performance",rl="@firebase/performance-compat",ol="@firebase/remote-config",al="@firebase/remote-config-compat",ll="@firebase/storage",hl="@firebase/storage-compat",ul="@firebase/firestore",cl="@firebase/firestore-compat",fl="firebase",dl="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]",gl={[si]:"fire-core",[Ha]:"fire-core-compat",[qa]:"fire-analytics",[za]:"fire-analytics-compat",[Ka]:"fire-app-check",[Ga]:"fire-app-check-compat",[Qa]:"fire-auth",[Wa]:"fire-auth-compat",[Xa]:"fire-rtdb",[Ya]:"fire-rtdb-compat",[Ja]:"fire-fn",[Za]:"fire-fn-compat",[tl]:"fire-iid",[el]:"fire-iid-compat",[nl]:"fire-fcm",[il]:"fire-fcm-compat",[sl]:"fire-perf",[rl]:"fire-perf-compat",[ol]:"fire-rc",[al]:"fire-rc-compat",[ll]:"fire-gcs",[hl]:"fire-gcs-compat",[ul]:"fire-fst",[cl]:"fire-fst-compat","fire-js":"fire-js",[fl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Map,oi=new Map;function pl(e,t){try{e.container.addComponent(t)}catch(n){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ze(e){const t=e.name;if(oi.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;oi.set(t,e);for(const n of Je.values())pl(n,e);return!0}function ml(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new hr("app","Firebase",yl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=dl;function El(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:ri,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(n||(n=lr()),!n)throw yt.create("no-options");const r=Je.get(s);if(r){if(ii(n,r.options)&&ii(i,r.config))return r;throw yt.create("duplicate-app",{appName:s})}const o=new La(s);for(const l of oi.values())o.addComponent(l);const a=new vl(n,i,o);return Je.set(s,a),a}function Tl(e=ri){const t=Je.get(e);if(!t&&e===ri&&lr())return El();if(!t)throw yt.create("no-app",{appName:e});return t}function re(e,t,n){var i;let s=(i=gl[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}Ze(new fe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="firebase-heartbeat-database",Sl=1,de="firebase-heartbeat-store";let zn=null;function cr(){return zn||(zn=pa(Il,Sl,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(de)}}}).catch(e=>{throw yt.create("idb-open",{originalErrorMessage:e.message})})),zn}async function Al(e){try{return await(await cr()).transaction(de).objectStore(de).get(fr(e))}catch(t){if(t instanceof Xt)xt.warn(t.message);else{const n=yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(n.message)}}}async function ms(e,t){try{const i=(await cr()).transaction(de,"readwrite");await i.objectStore(de).put(t,fr(e)),await i.done}catch(n){if(n instanceof Xt)xt.warn(n.message);else{const i=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(i.message)}}}function fr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=1024,Dl=30*24*60*60*1e3;class Nl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ys();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Dl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ys(),{heartbeatsToSend:n,unsentEntries:i}=_l(this._heartbeatsCache.heartbeats),s=Ye(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ys(){return new Date().toISOString().substring(0,10)}function _l(e,t=Cl){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),vs(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vs(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class kl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _a()?ka().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Al(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function vs(e){return Ye(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(e){Ze(new fe("platform-logger",t=>new Ba(t),"PRIVATE")),Ze(new fe("heartbeat",t=>new Nl(t),"PRIVATE")),re(si,ps,e),re(si,ps,"esm2017"),re("fire-js","")}bl("");var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Di=Di||{},v=xl||self;function tn(){}function wn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function De(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Rl(e){return Object.prototype.hasOwnProperty.call(e,qn)&&e[qn]||(e[qn]=++Ol)}var qn="closure_uid_"+(1e9*Math.random()>>>0),Ol=0;function Ml(e,t,n){return e.call.apply(e.bind,arguments)}function Pl(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Ml:W=Pl,W.apply(null,arguments)}function $e(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function $(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function It(){this.s=this.s,this.o=this.o}var Ll=0;It.prototype.s=!1;It.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Ll!=0)&&Rl(this)};It.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ni(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ws(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(wn(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var Fl=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",tn,t),v.removeEventListener("test",tn,t)}catch{}return e}();function en(e){return/^[\s\xa0]*$/.test(e)}var Es=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Gn(e,t){return e<t?-1:e>t?1:0}function En(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function at(e){return En().indexOf(e)!=-1}function _i(e){return _i[" "](e),e}_i[" "]=tn;function gr(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var Vl=at("Opera"),Ht=at("Trident")||at("MSIE"),pr=at("Edge"),ai=pr||Ht,mr=at("Gecko")&&!(En().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Ul=En().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function yr(){var e=v.document;return e?e.documentMode:void 0}var nn;t:{var Kn="",Qn=function(){var e=En();if(mr)return/rv:([^\);]+)(\)|;)/.exec(e);if(pr)return/Edge\/([\d\.]+)/.exec(e);if(Ht)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ul)return/WebKit\/(\S+)/.exec(e);if(Vl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Qn&&(Kn=Qn?Qn[1]:""),Ht){var Wn=yr();if(Wn!=null&&Wn>parseFloat(Kn)){nn=String(Wn);break t}}nn=Kn}var $l={};function Bl(){return gr($l,9,function(){let e=0;const t=Es(String(nn)).split("."),n=Es("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=Gn(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Gn(s[2].length==0,r[2].length==0)||Gn(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}var li;if(v.document&&Ht){var Ts=yr();li=Ts||parseInt(nn,10)||void 0}else li=void 0;var jl=li;function ge(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(mr){t:{try{_i(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Hl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ge.$.h.call(this)}}$(ge,X);var Hl={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),zl=0;function ql(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++zl,this.fa=this.ia=!1}function Tn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ki(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function vr(e){const t={};for(const n in e)t[n]=e[n];return t}const Is="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wr(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<Is.length;r++)n=Is[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function In(e){this.src=e,this.g={},this.h=0}In.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ui(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ql(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function hi(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=dr(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Tn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ui(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),Xn={};function Er(e,t,n,i,s){if(i&&i.once)return Ir(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Er(e,t[r],n,i,s);return null}return n=Oi(n),e&&e[Ne]?e.O(t,n,De(i)?!!i.capture:!!i,s):Tr(e,t,n,!1,i,s)}function Tr(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=De(s)?!!s.capture:!!s,a=Ri(e);if(a||(e[bi]=a=new In(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=Gl(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Fl||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Ar(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gl(){function e(n){return t.call(e.src,e.listener,n)}const t=Kl;return e}function Ir(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ir(e,t[r],n,i,s);return null}return n=Oi(n),e&&e[Ne]?e.P(t,n,De(i)?!!i.capture:!!i,s):Tr(e,t,n,!0,i,s)}function Sr(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Sr(e,t[r],n,i,s);else i=De(i)?!!i.capture:!!i,n=Oi(n),e&&e[Ne]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ui(r,n,i,s),-1<n&&(Tn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ri(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ui(t,n,i,s)),(n=-1<e?t[e]:null)&&xi(n))}function xi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ne])hi(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Ar(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ri(t))?(hi(n,e),n.h==0&&(n.src=null,t[bi]=null)):Tn(e)}}}function Ar(e){return e in Xn?Xn[e]:Xn[e]="on"+e}function Kl(e,t){if(e.fa)e=!0;else{t=new ge(t,this);var n=e.listener,i=e.la||e.src;e.ia&&xi(e),e=n.call(i,t)}return e}function Ri(e){return e=e[bi],e instanceof In?e:null}var Yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oi(e){return typeof e=="function"?e:(e[Yn]||(e[Yn]=function(t){return e.handleEvent(t)}),e[Yn])}function V(){It.call(this),this.i=new In(this),this.S=this,this.J=null}$(V,It);V.prototype[Ne]=!0;V.prototype.removeEventListener=function(e,t,n,i){Sr(this,e,t,n,i)};function z(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var s=t;t=new X(i,e),wr(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Be(o,i,!0,t)&&s}if(o=t.g=e,s=Be(o,i,!0,t)&&s,s=Be(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=Be(o,i,!1,t)&&s}V.prototype.N=function(){if(V.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Tn(n[i]);delete e.g[t],e.h--}}this.J=null};V.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};V.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Be(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&hi(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Mi=v.JSON.stringify;function Ql(){var e=Nr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wl{constructor(){this.h=this.g=null}add(t,n){const i=Cr.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Cr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Xl,e=>e.reset());class Xl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Yl(e){v.setTimeout(()=>{throw e},0)}function Dr(e,t){ci||Jl(),fi||(ci(),fi=!0),Nr.add(e,t)}var ci;function Jl(){var e=v.Promise.resolve(void 0);ci=function(){e.then(Zl)}}var fi=!1,Nr=new Wl;function Zl(){for(var e;e=Ql();){try{e.h.call(e.g)}catch(n){Yl(n)}var t=Cr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}fi=!1}function Sn(e,t){V.call(this),this.h=e||1,this.g=t||v,this.j=W(this.qb,this),this.l=Date.now()}$(Sn,V);g=Sn.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),z(this,"tick"),this.ga&&(Pi(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Sn.$.N.call(this),Pi(this),delete this.g};function Li(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function _r(e){e.g=Li(()=>{e.g=null,e.i&&(e.i=!1,_r(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class th extends It{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:_r(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(e){It.call(this),this.h=e,this.g={}}$(pe,It);var Ss=[];function kr(e,t,n,i){Array.isArray(n)||(n&&(Ss[0]=n.toString()),n=Ss);for(var s=0;s<n.length;s++){var r=Er(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function br(e){ki(e.g,function(t,n){this.g.hasOwnProperty(n)&&xi(t)},e),e.g={}}pe.prototype.N=function(){pe.$.N.call(this),br(this)};pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function An(){this.g=!0}An.prototype.Ea=function(){this.g=!1};function eh(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function nh(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Ut(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+sh(e,n)+(i?" "+i:"")})}function ih(e,t){e.info(function(){return"TIMEOUT: "+t})}An.prototype.info=function(){};function sh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Mi(n)}catch{return t}}var Pt={},As=null;function Cn(){return As=As||new V}Pt.Ta="serverreachability";function xr(e){X.call(this,Pt.Ta,e)}$(xr,X);function me(e){const t=Cn();z(t,new xr(t))}Pt.STAT_EVENT="statevent";function Rr(e,t){X.call(this,Pt.STAT_EVENT,e),this.stat=t}$(Rr,X);function Y(e){const t=Cn();z(t,new Rr(t,e))}Pt.Ua="timingevent";function Or(e,t){X.call(this,Pt.Ua,e),this.size=t}$(Or,X);function _e(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var Dn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Mr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fi(){}Fi.prototype.h=null;function Cs(e){return e.h||(e.h=e.i())}function Pr(){}var ke={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vi(){X.call(this,"d")}$(Vi,X);function Ui(){X.call(this,"c")}$(Ui,X);var di;function Nn(){}$(Nn,Fi);Nn.prototype.g=function(){return new XMLHttpRequest};Nn.prototype.i=function(){return{}};di=new Nn;function be(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new pe(this),this.P=rh,e=ai?125:void 0,this.V=new Sn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Lr}function Lr(){this.i=null,this.g="",this.h=!1}var rh=45e3,gi={},sn={};g=be.prototype;g.setTimeout=function(e){this.P=e};function pi(e,t,n){e.L=1,e.v=kn(pt(t)),e.s=n,e.S=!0,Fr(e,null)}function Fr(e,t){e.G=Date.now(),xe(e),e.A=pt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),qr(n.i,"t",i),e.C=0,n=e.l.I,e.h=new Lr,e.g=fo(e.l,n?t:null,!e.s),0<e.O&&(e.M=new th(W(e.Pa,e,e.g),e.O)),kr(e.U,e.g,"readystatechange",e.nb),t=e.I?vr(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),me(),eh(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&ct(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const u=ct(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||ai||this.g&&(this.h.h||this.g.ja()||ks(this.g)))){this.J||u!=4||t==7||(t==8||0>=d?me(3):me(2)),_n(this);var n=this.g.da();this.aa=n;e:if(Vr(this)){var i=ks(this.g);e="";var s=i.length,r=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),oe(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nh(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!en(a)){var h=a;break e}}h=null}if(n=h)Ut(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mi(this,n);else{this.i=!1,this.o=3,Y(12),Dt(this),oe(this);break t}}this.S?(Ur(this,u,o),ai&&this.i&&u==3&&(kr(this.U,this.V,"tick",this.mb),this.V.start())):(Ut(this.j,this.m,o,null),mi(this,o)),u==4&&Dt(this),this.i&&!this.J&&(u==4?lo(this.l,this):(this.i=!1,xe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),Dt(this),oe(this)}}}catch{}finally{}};function Vr(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Ur(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=oh(e,n),s==sn){t==4&&(e.o=4,Y(14),i=!1),Ut(e.j,e.m,null,"[Incomplete Response]");break}else if(s==gi){e.o=4,Y(15),Ut(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Ut(e.j,e.m,s,null),mi(e,s);Vr(e)&&s!=sn&&s!=gi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Y(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gi(t),t.L=!0,Y(11))):(Ut(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),oe(e))}g.mb=function(){if(this.g){var e=ct(this.g),t=this.g.ja();this.C<t.length&&(_n(this),Ur(this,e,t),this.i&&e!=4&&xe(this))}};function oh(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?sn:(n=Number(t.substring(n,i)),isNaN(n)?gi:(i+=1,i+n>t.length?sn:(t=t.substr(i,n),e.C=i+n,t)))}g.cancel=function(){this.J=!0,Dt(this)};function xe(e){e.Y=Date.now()+e.P,$r(e,e.P)}function $r(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=_e(W(e.lb,e),t)}function _n(e){e.B&&(v.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ih(this.j,this.A),this.L!=2&&(me(),Y(17)),Dt(this),this.o=2,oe(this)):$r(this,this.Y-e)};function oe(e){e.l.H==0||e.J||lo(e.l,e)}function Dt(e){_n(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Pi(e.V),br(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function mi(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||yi(n.h,e))){if(!e.K&&yi(n.h,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)an(n),Rn(n);else break t;qi(n),Y(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=_e(W(n.ib,n),6e3));if(1>=Qr(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Nt(n,11)}else if((e.K||n.g==e)&&an(n),!en(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.J=h[1],n.oa=h[2];const u=h[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=h[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const E=e.g;if(E){const C=E.g?E.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var r=i.h;r.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&($i(r,r.h),r.h=null))}if(i.F){const b=E.g?E.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(i.Da=b,_(i.G,i.F,b))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=co(i,i.I?i.oa:null,i.Y),o.K){Wr(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(_n(a),xe(a)),i.g=o}else oo(i);0<n.i.length&&On(n)}else h[0]!="stop"&&h[0]!="close"||Nt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Nt(n,7):zi(n):h[0]!="noop"&&n.l&&n.l.Aa(h),n.A=0)}}me(4)}catch{}}function ah(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(wn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function lh(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(wn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Br(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(wn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=lh(e),i=ah(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var jr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function kt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kt){this.h=t!==void 0?t:e.h,rn(this,e.j),this.s=e.s,this.g=e.g,on(this,e.m),this.l=e.l,t=e.i;var n=new ye;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ds(this,n),this.o=e.o}else e&&(n=String(e).match(jr))?(this.h=!!t,rn(this,n[1]||"",!0),this.s=ie(n[2]||""),this.g=ie(n[3]||"",!0),on(this,n[4]),this.l=ie(n[5]||"",!0),Ds(this,n[6]||"",!0),this.o=ie(n[7]||"")):(this.h=!!t,this.i=new ye(null,this.h))}kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(se(t,Ns,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(se(t,Ns,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(se(n,n.charAt(0)=="/"?fh:ch,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",se(n,gh)),e.join("")};function pt(e){return new kt(e)}function rn(e,t,n){e.j=n?ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function on(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ds(e,t,n){t instanceof ye?(e.i=t,ph(e.i,e.h)):(n||(t=se(t,dh)),e.i=new ye(t,e.h))}function _(e,t,n){e.i.set(t,n)}function kn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,uh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function uh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ns=/[#\/\?@]/g,ch=/[#\?:]/g,fh=/[#\?]/g,dh=/[#\?@]/g,gh=/#/g;function ye(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function St(e){e.g||(e.g=new Map,e.h=0,e.i&&hh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ye.prototype;g.add=function(e,t){St(this),this.i=null,e=Yt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Hr(e,t){St(e),t=Yt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function zr(e,t){return St(e),t=Yt(e,t),e.g.has(t)}g.forEach=function(e,t){St(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};g.sa=function(){St(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};g.Z=function(e){St(this);let t=[];if(typeof e=="string")zr(this,e)&&(t=t.concat(this.g.get(Yt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return St(this),this.i=null,e=Yt(this,e),zr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function qr(e,t,n){Hr(e,t),0<n.length&&(e.i=null,e.g.set(Yt(e,t),Ni(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Yt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ph(e,t){t&&!e.j&&(St(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Hr(this,i),qr(this,s,n))},e)),e.j=t}var mh=class{constructor(e,t){this.h=e,this.g=t}};function Gr(e){this.l=e||yh,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yh=10;function Kr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qr(e){return e.h?1:e.g?e.g.size:0}function yi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function $i(e,t){e.g?e.g.add(t):e.h=t}function Wr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Gr.prototype.cancel=function(){if(this.i=Xr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xr(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ni(e.i)}function Bi(){}Bi.prototype.stringify=function(e){return v.JSON.stringify(e,void 0)};Bi.prototype.parse=function(e){return v.JSON.parse(e,void 0)};function vh(){this.g=new Bi}function wh(e,t,n){const i=n||"";try{Br(e,function(s,r){let o=s;De(s)&&(o=Mi(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Eh(e,t){const n=new An;if(v.Image){const i=new Image;i.onload=$e(je,n,i,"TestLoadImage: loaded",!0,t),i.onerror=$e(je,n,i,"TestLoadImage: error",!1,t),i.onabort=$e(je,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=$e(je,n,i,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function je(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function Re(e){this.l=e.fc||null,this.j=e.ob||!1}$(Re,Fi);Re.prototype.g=function(){return new bn(this.l,this.j)};Re.prototype.i=function(e){return function(){return e}}({});function bn(e,t){V.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ji,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(bn,V);var ji=0;g=bn.prototype;g.open=function(e,t){if(this.readyState!=ji)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ve(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=ji};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ve(this)),this.g&&(this.readyState=3,ve(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yr(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Yr(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Oe(this):ve(this),this.readyState==3&&Yr(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,Oe(this))};g.Ya=function(e){this.g&&(this.response=e,Oe(this))};g.ka=function(){this.g&&Oe(this)};function Oe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ve(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ve(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Th=v.JSON.parse;function O(e){V.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Jr,this.L=this.M=!1}$(O,V);var Jr="",Ih=/^https?$/i,Sh=["POST","PUT"];g=O.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():di.g(),this.C=this.u?Cs(this.u):Cs(di),this.g.onreadystatechange=W(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){_s(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=v.FormData&&e instanceof v.FormData,!(0<=dr(Sh,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eo(this),0<this.B&&((this.L=Ah(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.ua,this)):this.A=Li(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){_s(this,r)}};function Ah(e){return Ht&&Bl()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof Di<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function _s(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zr(e),xn(e)}function Zr(e){e.F||(e.F=!0,z(e,"complete"),z(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),xn(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xn(this,!0)),O.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?to(this):this.kb())};g.kb=function(){to(this)};function to(e){if(e.h&&typeof Di<"u"&&(!e.C[1]||ct(e)!=4||e.da()!=2)){if(e.v&&ct(e)==4)Li(e.La,0,e);else if(z(e,"readystatechange"),ct(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var s=String(e.I).match(jr)[1]||null;if(!s&&v.self&&v.self.location){var r=v.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ih.test(s?s.toLowerCase():"")}n=i}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var o=2<ct(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",Zr(e)}}finally{xn(e)}}}}function xn(e,t){if(e.g){eo(e);const n=e.g,i=e.C[0]?tn:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=i}catch{}}}function eo(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}function ct(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Th(t)}};function ks(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Jr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function no(e){let t="";return ki(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Hi(e,t,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=no(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function io(e){this.Ga=0,this.i=[],this.j=new An,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ee("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ee("baseRetryDelayMs",5e3,e),this.hb=ee("retryDelaySeedMs",1e4,e),this.eb=ee("forwardChannelMaxRetries",2,e),this.xa=ee("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Gr(e&&e.concurrentRequestLimit),this.Ja=new vh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}g=io.prototype;g.qa=8;g.H=1;function zi(e){if(so(e),e.H==3){var t=e.W++,n=pt(e.G);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Me(e,n),t=new be(e,e.j,t,void 0),t.L=2,t.v=kn(pt(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(t.v.toString(),"")),!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=fo(t.l,null),t.g.ha(t.v)),t.G=Date.now(),xe(t)}uo(e)}function Rn(e){e.g&&(Gi(e),e.g.cancel(),e.g=null)}function so(e){Rn(e),e.u&&(v.clearTimeout(e.u),e.u=null),an(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function On(e){Kr(e.h)||e.m||(e.m=!0,Dr(e.Na,e),e.C=0)}function Ch(e,t){return Qr(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=_e(W(e.Na,e,t),ho(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new be(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=vr(r),wr(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ro(this,s,t),n=pt(this.G),_(n,"RID",e),_(n,"CVER",22),this.F&&_(n,"X-HTTP-Session-Id",this.F),Me(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(no(r)))+"&"+t:this.o&&Hi(n,this.o,r)),$i(this.h,s),this.bb&&_(n,"TYPE","init"),this.P?(_(n,"$req",t),_(n,"SID","null"),s.ba=!0,pi(s,n,null)):pi(s,n,t),this.H=2}}else this.H==3&&(e?bs(this,e):this.i.length==0||Kr(this.h)||bs(this))};function bs(e,t){var n;t?n=t.m:n=e.W++;const i=pt(e.G);_(i,"SID",e.J),_(i,"RID",n),_(i,"AID",e.V),Me(e,i),e.o&&e.s&&Hi(i,e.o,e.s),n=new be(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=ro(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),$i(e.h,n),pi(n,i,t)}function Me(e,t){e.ma&&ki(e.ma,function(n,i){_(t,i,n)}),e.l&&Br({},function(n,i){_(t,i,n)})}function ro(e,t,n){n=Math.min(e.i.length,n);var i=e.l?W(e.l.Va,e.l,e):null;t:{var s=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let h=s[l].h;const u=s[l].g;if(h-=r,0>h)r=Math.max(0,s[l].h-100),a=!1;else try{wh(u,o,"req"+h+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,i}function oo(e){e.g||e.u||(e.ba=1,Dr(e.Ma,e),e.A=0)}function qi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=_e(W(e.Ma,e),ho(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,ao(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=_e(W(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Y(10),Rn(this),ao(this))};function Gi(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function ao(e){e.g=new be(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=pt(e.wa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.M?"0":"1"),_(t,"AID",e.V),_(t,"TYPE","xmlhttp"),Me(e,t),e.o&&e.s&&Hi(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=kn(pt(t)),n.s=null,n.S=!0,Fr(n,e)}g.ib=function(){this.v!=null&&(this.v=null,Rn(this),qi(this),Y(19))};function an(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function lo(e,t){var n=null;if(e.g==t){an(e),Gi(e),e.g=null;var i=2}else if(yi(e.h,t))n=t.F,Wr(e.h,t),i=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=Cn(),z(i,new Or(i,n)),On(e)}else oo(e);else if(s=t.o,s==3||s==0&&0<e.ta||!(i==1&&Ch(e,t)||i==2&&qi(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Nt(e,5);break;case 4:Nt(e,10);break;case 3:Nt(e,6);break;default:Nt(e,2)}}}function ho(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Nt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=W(e.pb,e);n||(n=new kt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||rn(n,"https"),kn(n)),Eh(n.toString(),i)}else Y(2);e.H=0,e.l&&e.l.za(t),uo(e),so(e)}g.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function uo(e){if(e.H=0,e.pa=[],e.l){const t=Xr(e.h);(t.length!=0||e.i.length!=0)&&(ws(e.pa,t),ws(e.pa,e.i),e.h.i.length=0,Ni(e.i),e.i.length=0),e.l.ya()}}function co(e,t,n){var i=n instanceof kt?pt(n):new kt(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),on(i,i.m);else{var s=v.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new kt(null,void 0);i&&rn(r,i),t&&(r.g=t),s&&on(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&_(i,n,t),_(i,"VER",e.qa),Me(e,i),i}function fo(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new O(new Re({ob:!0})):new O(e.va),t.Oa(e.I),t}function go(){}g=go.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.Va=function(){};function ln(){if(Ht&&!(10<=Number(jl)))throw Error("Environmental error: no available transport.")}ln.prototype.g=function(e,t){return new tt(e,t)};function tt(e,t){V.call(this),this.g=new io(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!en(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!en(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jt(this)}$(tt,V);tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Y(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=co(e,null,e.Y),On(e)};tt.prototype.close=function(){zi(this.g)};tt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Mi(e),e=n);t.i.push(new mh(t.fb++,e)),t.H==3&&On(t)};tt.prototype.N=function(){this.g.l=null,delete this.j,zi(this.g),delete this.g,tt.$.N.call(this)};function po(e){Vi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(po,Vi);function mo(){Ui.call(this),this.status=1}$(mo,Ui);function Jt(e){this.g=e}$(Jt,go);Jt.prototype.Ba=function(){z(this.g,"a")};Jt.prototype.Aa=function(e){z(this.g,new po(e))};Jt.prototype.za=function(e){z(this.g,new mo)};Jt.prototype.ya=function(){z(this.g,"b")};function Dh(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(ht,Dh);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Jn(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)Jn(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Jn(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Jn(this,i),s=0;break}}this.h=s,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function A(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var Nh={};function Ki(e){return-128<=e&&128>e?gr(Nh,e,function(t){return new A([t|0],0>t?-1:0)}):new A([e|0],0>e?-1:0)}function lt(e){if(isNaN(e)||!isFinite(e))return $t;if(0>e)return H(lt(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=vi;return new A(t,0)}function yo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(yo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lt(Math.pow(t,8)),i=$t,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=lt(Math.pow(t,r)),i=i.R(r).add(lt(o))):(i=i.R(n),i=i.add(lt(o)))}return i}var vi=4294967296,$t=Ki(0),wi=Ki(1),xs=Ki(16777216);g=A.prototype;g.ea=function(){if(et(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:vi+i)*t,t*=vi}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(ft(this))return"0";if(et(this))return"-"+H(this).toString(e);for(var t=lt(Math.pow(e,6)),n=this,i="";;){var s=un(n,t).g;n=hn(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,ft(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function ft(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function et(e){return e.h==-1}g.X=function(e){return e=hn(this,e),et(e)?-1:ft(e)?0:1};function H(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new A(n,~e.h).add(wi)}g.abs=function(){return et(this)?H(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new A(n,n[n.length-1]&-2147483648?-1:0)};function hn(e,t){return e.add(H(t))}g.R=function(e){if(ft(this)||ft(e))return $t;if(et(this))return et(e)?H(this).R(H(e)):H(H(this).R(e));if(et(e))return H(this.R(H(e)));if(0>this.X(xs)&&0>e.X(xs))return lt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*i+2*s]+=o*l,He(n,2*i+2*s),n[2*i+2*s+1]+=r*l,He(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,He(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,He(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new A(n,0)};function He(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ne(e,t){this.g=e,this.h=t}function un(e,t){if(ft(t))throw Error("division by zero");if(ft(e))return new ne($t,$t);if(et(e))return t=un(H(e),t),new ne(H(t.g),H(t.h));if(et(t))return t=un(e,H(t)),new ne(H(t.g),t.h);if(30<e.g.length){if(et(e)||et(t))throw Error("slowDivide_ only works with positive integers.");for(var n=wi,i=t;0>=i.X(e);)n=Rs(n),i=Rs(i);var s=Ft(n,1),r=Ft(i,1);for(i=Ft(i,2),n=Ft(n,2);!ft(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Ft(i,1),n=Ft(n,1)}return t=hn(e,s.R(t)),new ne(s,t)}for(s=$t;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=lt(n),o=r.R(t);et(o)||0<o.X(e);)n-=i,r=lt(n),o=r.R(t);ft(r)&&(r=wi),s=s.add(r),e=hn(e,o)}return new ne(s,e)}g.gb=function(e){return un(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new A(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new A(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new A(n,this.h^e.h)};function Rs(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new A(n,e.h)}function Ft(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new A(s,e.h)}ln.prototype.createWebChannel=ln.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;Dn.NO_ERROR=0;Dn.TIMEOUT=8;Dn.HTTP_ERROR=6;Mr.COMPLETE="complete";Pr.EventType=ke;ke.OPEN="a";ke.CLOSE="b";ke.ERROR="c";ke.MESSAGE="d";V.prototype.listen=V.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;A.prototype.add=A.prototype.add;A.prototype.multiply=A.prototype.R;A.prototype.modulo=A.prototype.gb;A.prototype.compare=A.prototype.X;A.prototype.toNumber=A.prototype.ea;A.prototype.toString=A.prototype.toString;A.prototype.getBits=A.prototype.D;A.fromNumber=lt;A.fromString=yo;var _h=function(){return new ln},kh=function(){return Cn()},Zn=Dn,bh=Mr,xh=Pt,Os={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Rh=Re,ze=Pr,Oh=O,Mh=A;const Ms="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new ur("@firebase/firestore");function Ps(){return Rt.logLevel}function m(e,...t){if(Rt.logLevel<=S.DEBUG){const n=t.map(Qi);Rt.debug(`Firestore (${Zt}): ${e}`,...n)}}function Ot(e,...t){if(Rt.logLevel<=S.ERROR){const n=t.map(Qi);Rt.error(`Firestore (${Zt}): ${e}`,...n)}}function cn(e,...t){if(Rt.logLevel<=S.WARN){const n=t.map(Qi);Rt.warn(`Firestore (${Zt}): ${e}`,...n)}}function Qi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+e;throw Ot(t),new Error(t)}function U(e,t){e||T()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Xt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ph{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fh{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(U(typeof i.accessToken=="string"),new vo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new G(t)}}class Vh{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=G.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Uh{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new Vh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $h{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bh{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.T=n.token,new $h(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=jh(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function D(e,t){return e<t?-1:e>t?1:0}function zt(e,t,n){return e.length===t.length&&e.every((i,s)=>n(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(c.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(c.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(c.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(c.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new F(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new F(0,0))}static max(){return new k(new F(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n,i){n===void 0?n=0:n>t.length&&T(),i===void 0?i=t.length-n:i>t.length-n&&T(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return we.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof we?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let s=0;s<i;s++){const r=t.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class R extends we{construct(t,n,i){return new R(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new y(c.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends we{construct(t,n,i){return new Q(t,n,i)}static isValidIdentifier(t){return Hh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new y(c.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(c.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new y(c.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new y(c.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(R.fromString(t))}static fromName(t){return new w(R.fromString(t).popFirst(5))}static empty(){return new w(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&R.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return R.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new R(t.slice()))}}function zh(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=k.fromTimestamp(i===1e9?new F(n+1,0):new F(n,i));return new wt(s,w.empty(),t)}function qh(e){return new wt(e.readTime,e.key,-1)}class wt{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new wt(k.min(),w.empty(),-1)}static max(){return new wt(k.max(),w.empty(),-1)}}function Gh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(e){if(e.code!==c.FAILED_PRECONDITION||e.message!==Kh)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,i)=>{n(t)})}static reject(t){return new f((n,i)=>{i(t)})}static waitFor(t){return new f((n,i)=>{let s=0,r=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(t){let n=f.resolve(!1);for(const i of t)n=n.next(s=>s?f.resolve(s):i());return n}static forEach(t,n){const i=[];return t.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(t,n){return new f((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const h=l;n(t[h]).next(u=>{o[h]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(t,n){return new f((i,s)=>{const r=()=>{t()===!0?n().next(()=>{r()},s):i()};r()})}}function Mn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}To.ct=-1;function Wi(e){return e==null}function fn(e){return e===0&&1/e==-1/0}function Wh(e){return typeof e=="number"&&Number.isInteger(e)&&!fn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Pe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Io(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new Z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qe(this.root,t,this.comparator,!0)}}class qe{constructor(t,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?i(t.key,n):1,n&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??B.RED,this.left=s??B.EMPTY,this.right=r??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,s,r){return new B(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return B.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,i,s){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fs(this.data.getIterator())}getIteratorFrom(t){return new Fs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new J(this.comparator);return n.data=t,n}}class Fs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new rt([])}unionWith(t){let n=new J(Q.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return zt(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Xh("Invalid base64 string: "+s):s}}(t);return new mt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(e){if(U(!!e),typeof e=="string"){let t=0;const n=Yh.exec(e);if(U(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:j(e.seconds),nanos:j(e.nanos)}}function j(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ee(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function So(e){const t=e.mapValue.fields.__previous_value__;return Xi(t)?So(t):t}function dn(e){const t=Mt(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n,i,s,r,o,a,l,h){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h}}class gn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xi(e)?4:Zh(e)?9007199254740991:10:T()}function ut(e,t){if(e===t)return!0;const n=qt(e);if(n!==qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return dn(e).isEqual(dn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Mt(i.timestampValue),o=Mt(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ee(i.bytesValue).isEqual(Ee(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return j(i.geoPointValue.latitude)===j(s.geoPointValue.latitude)&&j(i.geoPointValue.longitude)===j(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return j(i.integerValue)===j(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=j(i.doubleValue),o=j(s.doubleValue);return r===o?fn(r)===fn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return zt(e.arrayValue.values||[],t.arrayValue.values||[],ut);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Ls(r)!==Ls(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ut(r[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Te(e,t){return(e.values||[]).find(n=>ut(n,t))!==void 0}function Gt(e,t){if(e===t)return 0;const n=qt(e),i=qt(t);if(n!==i)return D(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(s,r){const o=j(s.integerValue||s.doubleValue),a=j(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Vs(e.timestampValue,t.timestampValue);case 4:return Vs(dn(e),dn(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(s,r){const o=Ee(s),a=Ee(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const h=D(o[l],a[l]);if(h!==0)return h}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,r){const o=D(j(s.latitude),j(r.latitude));return o!==0?o:D(j(s.longitude),j(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const h=Gt(o[l],a[l]);if(h)return h}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,r){if(s===Ge.mapValue&&r===Ge.mapValue)return 0;if(s===Ge.mapValue)return 1;if(r===Ge.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},h=Object.keys(l);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const d=D(a[u],h[u]);if(d!==0)return d;const p=Gt(o[a[u]],l[h[u]]);if(p!==0)return p}return D(a.length,h.length)}(e.mapValue,t.mapValue);default:throw T()}}function Vs(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Mt(e),i=Mt(t),s=D(n.seconds,i.seconds);return s!==0?s:D(n.nanos,i.nanos)}function Kt(e){return Ei(e)}function Ei(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(i){const s=Mt(i);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Ei(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Ei(i.fields[a])}`;return r+"}"}(e.mapValue):T();var t,n}function Ti(e){return!!e&&"integerValue"in e}function Yi(e){return!!e&&"arrayValue"in e}function We(e){return!!e&&"mapValue"in e}function ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Pe(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=ae(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Zh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!We(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ae(n)}setAll(t){let n=Q.emptyPath(),i={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=ae(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(t){const n=this.field(t.popLast());We(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=n.mapValue.fields[t.get(i)];We(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,i){Pe(n,(s,r)=>t[s]=r);for(const s of i)delete t[s]}clone(){return new st(ae(this.value))}}function Ao(e){const t=[];return Pe(e.fields,(n,i)=>{const s=new Q([n]);if(We(i)){const r=Ao(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)}),new rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n,i,s,r,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new it(t,0,k.min(),k.min(),k.min(),st.empty(),0)}static newFoundDocument(t,n,i,s){return new it(t,1,n,k.min(),i,s,0)}static newNoDocument(t,n){return new it(t,2,n,k.min(),k.min(),st.empty(),0)}static newUnknownDocument(t,n){return new it(t,3,n,k.min(),k.min(),st.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,n){this.position=t,this.inclusive=n}}function Us(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(r.field.isKeyField()?i=w.comparator(w.fromName(o.referenceValue),n.key):i=Gt(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function $s(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ut(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n="asc"){this.field=t,this.dir=n}}function tu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{}class L extends Co{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new nu(t,n,i):n==="array-contains"?new ru(t,i):n==="in"?new ou(t,i):n==="not-in"?new au(t,i):n==="array-contains-any"?new lu(t,i):new L(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new iu(t,i):new su(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gt(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(Gt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Et extends Co{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new Et(t,n)}matches(t){return Do(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Do(e){return e.op==="and"}function No(e){return eu(e)&&Do(e)}function eu(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function Ii(e){if(e instanceof L)return e.field.canonicalString()+e.op.toString()+Kt(e.value);if(No(e))return e.filters.map(t=>Ii(t)).join(",");{const t=e.filters.map(n=>Ii(n)).join(",");return`${e.op}(${t})`}}function _o(e,t){return e instanceof L?function(n,i){return i instanceof L&&n.op===i.op&&n.field.isEqual(i.field)&&ut(n.value,i.value)}(e,t):e instanceof Et?function(n,i){return i instanceof Et&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&_o(r,i.filters[o]),!0):!1}(e,t):void T()}function ko(e){return e instanceof L?function(t){return`${t.field.canonicalString()} ${t.op} ${Kt(t.value)}`}(e):e instanceof Et?function(t){return t.op.toString()+" {"+t.getFilters().map(ko).join(" ,")+"}"}(e):"Filter"}class nu extends L{constructor(t,n,i){super(t,n,i),this.key=w.fromName(i.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class iu extends L{constructor(t,n){super(t,"in",n),this.keys=bo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class su extends L{constructor(t,n){super(t,"not-in",n),this.keys=bo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function bo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>w.fromName(i.referenceValue))}class ru extends L{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Yi(n)&&Te(n.arrayValue,this.value)}}class ou extends L{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Te(this.value.arrayValue,n)}}class au extends L{constructor(t,n){super(t,"not-in",n)}matches(t){if(Te(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Te(this.value.arrayValue,n)}}class lu extends L{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Yi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Te(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,n=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Bs(e,t=null,n=[],i=[],s=null,r=null,o=null){return new hu(e,t,n,i,s,r,o)}function Ji(e){const t=N(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Ii(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Wi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Kt(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Kt(i)).join(",")),t.dt=n}return t.dt}function Zi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!tu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!_o(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$s(e.startAt,t.startAt)&&$s(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function uu(e,t,n,i,s,r,o,a){return new Pn(e,t,n,i,s,r,o,a)}function cu(e){return new Pn(e)}function js(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function fu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function du(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function gu(e){return e.collectionGroup!==null}function Bt(e){const t=N(e);if(t.wt===null){t.wt=[];const n=du(t),i=fu(t);if(n!==null&&i===null)n.isKeyField()||t.wt.push(new le(n)),t.wt.push(new le(Q.keyField(),"asc"));else{let s=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new le(Q.keyField(),r))}}}return t.wt}function Qt(e){const t=N(e);if(!t._t)if(t.limitType==="F")t._t=Bs(t.path,t.collectionGroup,Bt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Bt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new le(r.field,o))}const i=t.endAt?new pn(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new pn(t.startAt.position,t.startAt.inclusive):null;t._t=Bs(t.path,t.collectionGroup,n,t.filters,t.limit,i,s)}return t._t}function Si(e,t,n){return new Pn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xo(e,t){return Zi(Qt(e),Qt(t))&&e.limitType===t.limitType}function Ro(e){return`${Ji(Qt(e))}|lt:${e.limitType}`}function Hs(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>ko(i)).join(", ")}]`),Wi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Kt(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Kt(i)).join(",")),`Target(${n})`}(Qt(e))}; limitType=${e.limitType})`}function ts(e,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):w.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,i){for(const s of Bt(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Us(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,Bt(n),i)||n.endAt&&!function(s,r,o){const a=Us(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,Bt(n),i))}(e,t)}function pu(e){return(t,n)=>{let i=!1;for(const s of Bt(e)){const r=mu(s,t,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function mu(e,t,n){const i=e.field.isKeyField()?w.comparator(t.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Gt(a,l):T()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pe(this.inner,(n,i)=>{for(const[s,r]of i)t(s,r)})}isEmpty(){return Io(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Z(w.comparator);function mn(){return yu}const Oo=new Z(w.comparator);function Ke(...e){let t=Oo;for(const n of e)t=t.insert(n.key,n);return t}function Mo(e){let t=Oo;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function _t(){return he()}function Po(){return he()}function he(){return new te(e=>e.toString(),(e,t)=>e.isEqual(t))}const vu=new Z(w.comparator),wu=new J(w.comparator);function K(...e){let t=wu;for(const n of e)t=t.add(n);return t}const Eu=new J(D);function Tu(){return Eu}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fn(t)?"-0":t}}function Fo(e){return{integerValue:""+e}}function Iu(e,t){return Wh(t)?Fo(t):Lo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this._=void 0}}function Su(e,t,n){return e instanceof Ie?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xi(s)&&(s=So(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,t):e instanceof Se?Uo(e,t):e instanceof Ae?$o(e,t):function(i,s){const r=Vo(i,s),o=zs(r)+zs(i.gt);return Ti(r)&&Ti(i.gt)?Fo(o):Lo(i.serializer,o)}(e,t)}function Au(e,t,n){return e instanceof Se?Uo(e,t):e instanceof Ae?$o(e,t):n}function Vo(e,t){return e instanceof yn?Ti(n=t)||function(i){return!!i&&"doubleValue"in i}(n)?t:{integerValue:0}:null;var n}class Ie extends Ln{}class Se extends Ln{constructor(t){super(),this.elements=t}}function Uo(e,t){const n=Bo(t);for(const i of e.elements)n.some(s=>ut(s,i))||n.push(i);return{arrayValue:{values:n}}}class Ae extends Ln{constructor(t){super(),this.elements=t}}function $o(e,t){let n=Bo(t);for(const i of e.elements)n=n.filter(s=>!ut(s,i));return{arrayValue:{values:n}}}class yn extends Ln{constructor(t,n){super(),this.serializer=t,this.gt=n}}function zs(e){return j(e.integerValue||e.doubleValue)}function Bo(e){return Yi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,n){this.field=t,this.transform=n}}function Du(e,t){return e.field.isEqual(t.field)&&function(n,i){return n instanceof Se&&i instanceof Se||n instanceof Ae&&i instanceof Ae?zt(n.elements,i.elements,ut):n instanceof yn&&i instanceof yn?ut(n.gt,i.gt):n instanceof Ie&&i instanceof Ie}(e.transform,t.transform)}class Nu{constructor(t,n){this.version=t,this.transformResults=n}}class dt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new dt}static exists(t){return new dt(void 0,t)}static updateTime(t){return new dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xe(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fn{}function jo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new zo(e.key,dt.none()):new Le(e.key,e.data,dt.none());{const n=e.data,i=st.empty();let s=new J(Q.comparator);for(let r of t.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Lt(e.key,i,new rt(s.toArray()),dt.none())}}function _u(e,t,n){e instanceof Le?function(i,s,r){const o=i.value.clone(),a=Gs(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Lt?function(i,s,r){if(!Xe(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Gs(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Ho(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ue(e,t,n,i){return e instanceof Le?function(s,r,o,a){if(!Xe(s.precondition,r))return o;const l=s.value.clone(),h=Ks(s.fieldTransforms,a,r);return l.setAll(h),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(e,t,n,i):e instanceof Lt?function(s,r,o,a){if(!Xe(s.precondition,r))return o;const l=Ks(s.fieldTransforms,a,r),h=r.data;return h.setAll(Ho(s)),h.setAll(l),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(e,t,n,i):function(s,r,o){return Xe(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function ku(e,t){let n=null;for(const i of e.fieldTransforms){const s=t.data.field(i.field),r=Vo(i.transform,s||null);r!=null&&(n===null&&(n=st.empty()),n.set(i.field,r))}return n||null}function qs(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&zt(n,i,(s,r)=>Du(s,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Le extends Fn{constructor(t,n,i,s=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lt extends Fn{constructor(t,n,i,s,r=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ho(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Gs(e,t,n){const i=new Map;U(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Au(o,a,n[s]))}return i}function Ks(e,t,n){const i=new Map;for(const s of e){const r=s.transform,o=n.data.field(s.field);i.set(s.field,Su(r,o,t))}return i}class zo extends Fn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bu extends Fn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n,i,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&_u(r,t,i[s])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=ue(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=ue(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=Po();return this.mutations.forEach(s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=jo(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(k.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),K())}isEqual(t){return this.batchId===t.batchId&&zt(this.mutations,t.mutations,(n,i)=>qs(n,i))&&zt(this.baseMutations,t.baseMutations,(n,i)=>qs(n,i))}}class es{constructor(t,n,i,s){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(t,n,i){U(t.mutations.length===i.length);let s=vu;const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new es(t,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,I;function Ou(e){switch(e){default:return T();case c.CANCELLED:case c.UNKNOWN:case c.DEADLINE_EXCEEDED:case c.RESOURCE_EXHAUSTED:case c.INTERNAL:case c.UNAVAILABLE:case c.UNAUTHENTICATED:return!1;case c.INVALID_ARGUMENT:case c.NOT_FOUND:case c.ALREADY_EXISTS:case c.PERMISSION_DENIED:case c.FAILED_PRECONDITION:case c.ABORTED:case c.OUT_OF_RANGE:case c.UNIMPLEMENTED:case c.DATA_LOSS:return!0}}function Mu(e){if(e===void 0)return Ot("GRPC error has no .code"),c.UNKNOWN;switch(e){case M.OK:return c.OK;case M.CANCELLED:return c.CANCELLED;case M.UNKNOWN:return c.UNKNOWN;case M.DEADLINE_EXCEEDED:return c.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return c.RESOURCE_EXHAUSTED;case M.INTERNAL:return c.INTERNAL;case M.UNAVAILABLE:return c.UNAVAILABLE;case M.UNAUTHENTICATED:return c.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return c.INVALID_ARGUMENT;case M.NOT_FOUND:return c.NOT_FOUND;case M.ALREADY_EXISTS:return c.ALREADY_EXISTS;case M.PERMISSION_DENIED:return c.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return c.FAILED_PRECONDITION;case M.ABORTED:return c.ABORTED;case M.OUT_OF_RANGE:return c.OUT_OF_RANGE;case M.UNIMPLEMENTED:return c.UNIMPLEMENTED;case M.DATA_LOSS:return c.DATA_LOSS;default:return T()}}(I=M||(M={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Mh([4294967295,4294967295],0);class Pu{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ai(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Fu(e,t){return Ai(e,t.toTimestamp())}function jt(e){return U(!!e),k.fromTimestamp(function(t){const n=Mt(t);return new F(n.seconds,n.nanos)}(e))}function qo(e,t){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Vu(e){const t=R.fromString(e);return U(Gu(t)),t}function Ci(e,t){return qo(e.databaseId,t.path)}function Uu(e){const t=Vu(e);return t.length===4?R.emptyPath():Bu(t)}function $u(e){return new R(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bu(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Qs(e,t,n){return{name:Ci(e,t),fields:n.value.mapValue.fields}}function ju(e,t){let n;if(t instanceof Le)n={update:Qs(e,t.key,t.value)};else if(t instanceof zo)n={delete:Ci(e,t.key)};else if(t instanceof Lt)n={update:Qs(e,t.key,t.data),updateMask:qu(t.fieldMask)};else{if(!(t instanceof bu))return T();n={verify:Ci(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Ie)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Se)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ae)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw T()}(0,i))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Fu(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function Hu(e,t){return e&&e.length>0?(U(t!==void 0),e.map(n=>function(i,s){let r=i.updateTime?jt(i.updateTime):jt(s);return r.isEqual(k.min())&&(r=jt(s)),new Nu(r,i.transformResults||[])}(n,t))):[]}function zu(e){let t=Uu(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){U(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=Go(u);return d instanceof Et&&No(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new le(Vt(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Wi(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,p=u.values||[];return new pn(p,d)}(n.startAt));let h=null;return n.endAt&&(h=function(u){const d=!u.before,p=u.values||[];return new pn(p,d)}(n.endAt)),uu(t,s,o,r,a,"F",l,h)}function Go(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Vt(t.unaryFilter.field);return L.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Vt(t.unaryFilter.field);return L.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vt(t.unaryFilter.field);return L.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Vt(t.unaryFilter.field);return L.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return L.create(Vt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Et.create(t.compositeFilter.filters.map(n=>Go(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function Vt(e){return Q.fromServerFormat(e.fieldPath)}function qu(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Gu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.fe=t}}function Qu(e){const t=zu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Si(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.rn=new Xu}addToCollectionParentIndex(t,n){return this.rn.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(wt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(wt.min())}updateCollectionGroup(t,n,i){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Xu{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n]||new J(R.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(t){const n=t.lastSegment(),i=t.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(t){return(this.index[t]||new J(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Wt(0)}static Mn(){return new Wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.changes=new te(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?f.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,n,i,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(i!==null&&ue(i.mutation,s,rt.empty(),F.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,K()).next(()=>i))}getLocalViewOfDocuments(t,n,i=K()){const s=_t();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,i).next(r=>{let o=Ke();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=_t();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,K()))}populateOverlays(t,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(t,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,s){let r=mn();const o=he(),a=he();return n.forEach((l,h)=>{const u=i.get(h.key);s.has(h.key)&&(u===void 0||u.mutation instanceof Lt)?r=r.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),ue(u.mutation,h,u.mutation.getFieldMask(),F.now())):o.set(h.key,rt.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>{var d;return a.set(h,new Ju(u,(d=o.get(h))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const i=he();let s=new Z((o,a)=>o-a),r=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let u=i.get(l)||rt.empty();u=a.applyToLocalView(h,u),i.set(l,u);const d=(s.get(a.batchId)||K()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,u=l.value,d=Po();u.forEach(p=>{if(!r.has(p)){const E=jo(n.get(p),i.get(p));E!==null&&d.set(p,E),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,d))}return f.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):gu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i):this.getDocumentsMatchingCollectionQuery(t,n,i)}getNextDocuments(t,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,s-r.size):f.resolve(_t());let a=-1,l=r;return o.next(h=>f.forEach(h,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?f.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(t,h,r)).next(()=>this.computeViews(t,l,h,K())).next(u=>({batchId:a,changes:Mo(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(i=>{let s=Ke();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,i){const s=n.collectionGroup;let r=Ke();return this.indexManager.getCollectionParents(t,s).next(o=>f.forEach(o,a=>{const l=function(h,u){return new Pn(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,i).next(h=>{h.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s))).next(r=>{s.forEach((a,l)=>{const h=l.getKey();r.get(h)===null&&(r=r.insert(h,it.newInvalidDocument(h)))});let o=Ke();return r.forEach((a,l)=>{const h=s.get(a);h!==void 0&&ue(h.mutation,l,rt.empty(),F.now()),ts(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return f.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:jt(i.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(i){return{name:i.name,query:Qu(i.bundledQuery),readTime:jt(i.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.overlays=new Z(w.comparator),this.ls=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const i=_t();return f.forEach(n,s=>this.getOverlay(t,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((s,r)=>{this.we(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),f.resolve()}getOverlaysForCollection(t,n,i){const s=_t(),r=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return f.resolve(s)}getOverlaysForCollectionGroup(t,n,i,s){let r=new Z((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let u=r.get(h.largestBatchId);u===null&&(u=_t(),r=r.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=_t(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,u)=>a.set(h,u)),!(a.size()>=s)););return f.resolve(a)}we(t,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Ru(n,i));let r=this.ls.get(n);r===void 0&&(r=K(),this.ls.set(n,r)),this.ls.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.fs=new J(P.ds),this.ws=new J(P._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const i=new P(t,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.ys(new P(t,n))}ps(t,n){t.forEach(i=>this.removeReference(i,n))}Is(t){const n=new w(new R([])),i=new P(n,t),s=new P(n,t+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new w(new R([])),i=new P(n,t),s=new P(n,t+1);let r=K();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new P(t,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class P{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return w.comparator(t.key,n.key)||D(t.As,n.As)}static _s(t,n){return D(t.As,n.As)||w.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new J(P.ds)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xu(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new P(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,s=this.bs(i),r=s<0?0:s;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new P(n,0),s=new P(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new J(D);return n.forEach(s=>{const r=new P(s,0),o=new P(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),f.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,s=i.length+1;let r=i;w.isDocumentKey(r)||(r=r.child(""));const o=new P(new w(r),0);let a=new J(D);return this.Rs.forEachWhile(l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.As)),!0)},o),f.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){U(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return f.forEach(n.mutations,s=>{const r=new P(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Rs=i})}Cn(t){}containsKey(t,n){const i=new P(n,0),s=this.Rs.firstAfterOrEqual(i);return f.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t){this.Ds=t,this.docs=new Z(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return f.resolve(i?i.document.mutableCopy():it.newInvalidDocument(n))}getEntries(t,n){let i=mn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():it.newInvalidDocument(s))}),f.resolve(i)}getDocumentsMatchingQuery(t,n,i,s){let r=mn();const o=n.path,a=new w(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:u}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Gh(qh(u),i)<=0||(s.has(u.key)||ts(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,i,s){T()}Cs(t,n){return f.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new sc(this)}getSize(t){return f.resolve(this.size)}}class sc extends Yu{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(t,s)):this.os.removeEntry(i)}),f.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.persistence=t,this.xs=new te(n=>Ji(n),Zi),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ns,this.targetCount=0,this.Ms=Wt.kn()}forEachTarget(t,n){return this.xs.forEach((i,s)=>n(s)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),f.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new Wt(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Fn(n),f.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),f.waitFor(r).next(()=>s)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const i=this.xs.get(n)||null;return f.resolve(i)}addMatchingKeys(t,n,i){return this.ks.gs(n,i),f.resolve()}removeMatchingKeys(t,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),f.resolve()}getMatchingKeysForTargetId(t,n){const i=this.ks.Es(n);return f.resolve(i)}containsKey(t,n){return f.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n){this.$s={},this.overlays={},this.Os=new To(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new rc(this),this.indexManager=new Wu,this.remoteDocumentCache=function(i){return new ic(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new Ku(n),this.qs=new tc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ec,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.$s[t.toKey()];return i||(i=new nc(n,this.referenceDelegate),this.$s[t.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,i){m("MemoryPersistence","Starting transaction:",t);const s=new ac(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(t,n){return f.or(Object.values(this.$s).map(i=>()=>i.containsKey(t,n)))}}class ac extends Qh{constructor(t){super(),this.currentSequenceNumber=t}}class is{constructor(t){this.persistence=t,this.Qs=new ns,this.js=null}static zs(t){return new is(t)}get Ws(){if(this.js)return this.js;throw T()}addReference(t,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),f.resolve()}removeReference(t,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),f.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ws,i=>{const s=w.fromPath(i);return this.Hs(t,s).next(r=>{r||n.removeEntry(s,k.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return f.or([()=>f.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,n,i,s){this.targetId=t,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(t,n){let i=K(),s=K();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ss(t,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,i,s){return this.Ki(t,n).next(r=>r||this.Gi(t,n,s,i)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(js(n))return f.resolve(null);let i=Qt(n);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Si(n,null,"F"),i=Qt(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(r=>{const o=K(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const h=this.ji(n,a);return this.zi(n,h,o,l.readTime)?this.Ki(t,Si(n,null,"F")):this.Wi(t,h,n,l)}))})))}Gi(t,n,i,s){return js(n)||s.isEqual(k.min())?this.Qi(t,n):this.Ui.getDocuments(t,i).next(r=>{const o=this.ji(n,r);return this.zi(n,o,i,s)?this.Qi(t,n):(Ps()<=S.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hs(n)),this.Wi(t,o,n,zh(s,-1)))})}ji(t,n){let i=new J(pu(t));return n.forEach((s,r)=>{ts(t,r)&&(i=i.add(r))}),i}zi(t,n,i,s){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(t,n){return Ps()<=S.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.Ui.getDocumentsMatchingQuery(t,n,wt.min())}Wi(t,n,i,s){return this.Ui.getDocumentsMatchingQuery(t,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,n,i,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new Z(D),this.Yi=new te(r=>Ji(r),Zi),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(i)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zu(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function uc(e,t,n,i){return new hc(e,t,n,i)}async function Ko(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.tr(t),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=K();for(const h of s){o.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}for(const h of r){a.push(h.batchId);for(const u of h.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(h=>({er:h,removedBatchIds:o,addedBatchIds:a}))})})}function cc(e,t){const n=N(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,h){const u=l.batch,d=u.keys();let p=f.resolve();return d.forEach(E=>{p=p.next(()=>h.getEntry(a,E)).next(C=>{const b=l.docVersions.get(E);U(b!==null),C.version.compareTo(b)<0&&(u.applyToRemoteDocument(C,l),C.isValidDocument()&&(C.setReadTime(l.commitVersion),h.addEntry(C)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,t,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=K();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(i,s))})}function fc(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function dc(e,t){const n=N(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ws{constructor(){this.activeTargetIds=Tu()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gc{constructor(){this.Hr=new Ws,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,i){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Ws,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=null;function ti(){return Qe===null?Qe=268435456+Math.round(2147483648*Math.random()):Qe++,"0x"+Qe.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="WebChannelConnection";class vc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,i,s,r){const o=ti(),a=this.To(t,n);m("RestConnection",`Sending RPC '${t}' ${o}:`,a,i);const l={};return this.Eo(l,s,r),this.Ao(t,a,l,i).then(h=>(m("RestConnection",`Received RPC '${t}' ${o}: `,h),h),h=>{throw cn("RestConnection",`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",i),h})}vo(t,n,i,s,r,o){return this.Io(t,n,i,s,r)}Eo(t,n,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+Zt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>t[r]=s),i&&i.headers.forEach((s,r)=>t[r]=s)}To(t,n){const i=mc[t];return`${this.mo}/v1/${n}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,i,s){const r=ti();return new Promise((o,a)=>{const l=new Oh;l.setWithCredentials(!0),l.listenOnce(bh.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Zn.NO_ERROR:const u=l.getResponseJson();m(q,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(u)),o(u);break;case Zn.TIMEOUT:m(q,`RPC '${t}' ${r} timed out`),a(new y(c.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const d=l.getStatus();if(m(q,`RPC '${t}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const E=p==null?void 0:p.error;if(E&&E.status&&E.message){const C=function(b){const x=b.toLowerCase().replace(/_/g,"-");return Object.values(c).indexOf(x)>=0?x:c.UNKNOWN}(E.status);a(new y(C,E.message))}else a(new y(c.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new y(c.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{m(q,`RPC '${t}' ${r} completed.`)}});const h=JSON.stringify(s);m(q,`RPC '${t}' ${r} sending request:`,s),l.send(n,"POST",h,i,15)})}Ro(t,n,i){const s=ti(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=_h(),a=kh(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Rh({})),this.Eo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=r.join("");m(q,`Creating RPC '${t}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);let p=!1,E=!1;const C=new yc({ro:x=>{E?m(q,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(p||(m(q,`Opening RPC '${t}' stream ${s} transport.`),d.open(),p=!0),m(q,`RPC '${t}' stream ${s} sending:`,x),d.send(x))},oo:()=>d.close()}),b=(x,nt,ot)=>{x.listen(nt,Ue=>{try{ot(Ue)}catch(At){setTimeout(()=>{throw At},0)}})};return b(d,ze.EventType.OPEN,()=>{E||m(q,`RPC '${t}' stream ${s} transport opened.`)}),b(d,ze.EventType.CLOSE,()=>{E||(E=!0,m(q,`RPC '${t}' stream ${s} transport closed`),C.wo())}),b(d,ze.EventType.ERROR,x=>{E||(E=!0,cn(q,`RPC '${t}' stream ${s} transport errored:`,x),C.wo(new y(c.UNAVAILABLE,"The operation could not be completed")))}),b(d,ze.EventType.MESSAGE,x=>{var nt;if(!E){const ot=x.data[0];U(!!ot);const Ue=ot,At=Ue.error||((nt=Ue[0])===null||nt===void 0?void 0:nt.error);if(At){m(q,`RPC '${t}' stream ${s} received error:`,At);const cs=At.status;let Hn=function(ga){const ds=M[ga];if(ds!==void 0)return Mu(ds)}(cs),fs=At.message;Hn===void 0&&(Hn=c.INTERNAL,fs="Unknown error status: "+cs+" with message "+At.message),E=!0,C.wo(new y(Hn,fs)),d.close()}else m(q,`RPC '${t}' stream ${s} received:`,ot),C._o(ot)}}),b(a,xh.STAT_EVENT,x=>{x.stat===Os.PROXY?m(q,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===Os.NOPROXY&&m(q,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function ei(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){return new Pu(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,n,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&m("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n,i,s,r,o,a,l){this.ii=t,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Qo(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===c.RESOURCE_EXHAUSTED?(Ot(n.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===c.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{t(()=>{const s=new y(c.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(t,n){const i=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ec extends wc{constructor(t,n,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Hu(t.writeResults,t.commitTime),i=jt(t.commitTime);return this.listener.cu(i,n)}return U(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=$u(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>ju(this.serializer,i))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends class{}{constructor(t,n,i,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new y(c.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(t,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===c.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(c.UNKNOWN,s.toString())})}vo(t,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===c.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(c.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Ic{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ot(n),this.mu=!1):m("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n,i,s,r){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Ve(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=N(a);l.vu.add(4),await Fe(l),l.bu.set("Unknown"),l.vu.delete(4),await Un(l)}(this))})}),this.bu=new Ic(i,s)}}async function Un(e){if(Ve(e))for(const t of e.Ru)await t(!0)}async function Fe(e){for(const t of e.Ru)await t(!1)}function Ve(e){return N(e).vu.size===0}async function Wo(e,t,n){if(!Mn(t))throw t;e.vu.add(1),await Fe(e),e.bu.set("Offline"),n||(n=()=>fc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Un(e)})}function Xo(e,t){return t().catch(n=>Wo(e,n,t))}async function $n(e){const t=N(e),n=Tt(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Ac(t);)try{const s=await dc(t.localStore,i);if(s===null){t.Eu.length===0&&n.jo();break}i=s.batchId,Cc(t,s)}catch(s){await Wo(t,s)}Yo(t)&&Jo(t)}function Ac(e){return Ve(e)&&e.Eu.length<10}function Cc(e,t){e.Eu.push(t);const n=Tt(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Yo(e){return Ve(e)&&!Tt(e).Uo()&&e.Eu.length>0}function Jo(e){Tt(e).start()}async function Dc(e){Tt(e).hu()}async function Nc(e){const t=Tt(e);for(const n of e.Eu)t.uu(n.mutations)}async function _c(e,t,n){const i=e.Eu.shift(),s=es.from(i,t,n);await Xo(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await $n(e)}async function kc(e,t){t&&Tt(e).ou&&await async function(n,i){if(s=i.code,Ou(s)&&s!==c.ABORTED){const r=n.Eu.shift();Tt(n).Qo(),await Xo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await $n(n)}var s}(e,t),Yo(e)&&Jo(e)}async function Ys(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const i=Ve(n);n.vu.add(3),await Fe(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Un(n)}async function bc(e,t){const n=N(e);t?(n.vu.delete(2),await Un(n)):t||(n.vu.add(2),await Fe(n),n.bu.set("Unknown"))}function Tt(e){return e.Du||(e.Du=function(t,n,i){const s=N(t);return s.fu(),new Ec(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{uo:Dc.bind(null,e),ao:kc.bind(null,e),au:Nc.bind(null,e),cu:_c.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await $n(e)):(await e.Du.stop(),e.Eu.length>0&&(m("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new rs(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(c.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(e,t){if(Ot("AsyncQueue",`${t}: ${e}`),Mn(e))return new y(c.UNAVAILABLE,`${t}: ${e}`);throw e}class xc{constructor(){this.queries=new te(t=>Ro(t),xo),this.onlineState="Unknown",this.ku=new Set}}function Rc(e){e.ku.forEach(t=>{t.next()})}class Oc{constructor(t,n,i,s,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new te(a=>Ro(a),xo),this._c=new Map,this.mc=new Set,this.gc=new Z(w.comparator),this.yc=new Map,this.Ic=new ns,this.Tc={},this.Ec=new Map,this.Ac=Wt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Mc(e,t,n){const i=Vc(e);try{const s=await function(r,o){const a=N(r),l=F.now(),h=o.reduce((p,E)=>p.add(E.key),K());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let E=mn(),C=K();return a.Zi.getEntries(p,h).next(b=>{E=b,E.forEach((x,nt)=>{nt.isValidDocument()||(C=C.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,E)).next(b=>{u=b;const x=[];for(const nt of o){const ot=ku(nt,u.get(nt.key).overlayedDocument);ot!=null&&x.push(new Lt(nt.key,ot,Ao(ot.value.mapValue),dt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,x,o)}).next(b=>{d=b;const x=b.applyToLocalDocumentSet(u,C);return a.documentOverlayCache.saveOverlays(p,b.batchId,x)})}).then(()=>({batchId:d.batchId,changes:Mo(u)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new Z(D)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(i,s.batchId,n),await Bn(i,s.changes),await $n(i.remoteStore)}catch(s){const r=Zo(s,"Failed to persist write");n.reject(r)}}function Js(e,t,n){const i=N(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let l=!1;a.queries.forEach((h,u)=>{for(const d of u.listeners)d.Mu(o)&&(l=!0)}),l&&Rc(a)}(i.eventManager,t),s.length&&i.dc.nu(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Pc(e,t){const n=N(e),i=t.batch.batchId;try{const s=await cc(n.localStore,t);ea(n,i,null),ta(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bn(n,s)}catch(s){await Eo(s)}}async function Lc(e,t,n){const i=N(e);try{const s=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(U(u!==null),h=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>a.localDocuments.getDocuments(l,h))})}(i.localStore,t);ea(i,t,n),ta(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Bn(i,s)}catch(s){await Eo(s)}}function ta(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function ea(e,t,n){const i=N(e);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(n?r.reject(n):r.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}async function Bn(e,t,n){const i=N(e),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,l)=>{o.push(i.Rc(l,t,n).then(h=>{if((h||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,h!=null&&h.fromCache?"not-current":"current"),h){s.push(h);const u=ss.Li(l.targetId,h);r.push(u)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,l){const h=N(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(l,d=>f.forEach(d.Fi,p=>h.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>f.forEach(d.Bi,p=>h.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!Mn(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const p=h.Ji.get(d),E=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(E);h.Ji=h.Ji.insert(d,C)}}}(i.localStore,r))}async function Fc(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const i=await Ko(n.localStore,t);n.currentUser=t,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new y(c.CANCELLED,r))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Bn(n,i.er)}}function Vc(e){const t=N(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lc.bind(null,t),t}class Zs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Vn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return uc(this.persistence,new lc,t.initialUser,this.serializer)}createPersistence(t){return new oc(is.zs,this.serializer)}createSharedClientState(t){return new gc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uc{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Js(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fc.bind(null,this.syncEngine),await bc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new xc}createDatastore(t){const n=Vn(t.databaseInfo.databaseId),i=(s=t.databaseInfo,new vc(s));var s;return function(r,o,a,l){return new Tc(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return n=this.localStore,i=this.datastore,s=t.asyncQueue,r=a=>Js(this.syncEngine,a,0),o=Xs.D()?new Xs:new pc,new Sc(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(t,n){return function(i,s,r,o,a,l,h){const u=new Oc(i,s,r,o,a,l);return h&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=N(t);m("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Fe(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=G.UNAUTHENTICATED,this.clientId=wo.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(c.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Zo(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function ni(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Ko(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function tr(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jc(e);m("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(s=>Ys(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,r)=>Ys(t.remoteStore,r)),e._onlineComponents=t}function Bc(e){return e.name==="FirebaseError"?e.code===c.FAILED_PRECONDITION||e.code===c.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function jc(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await ni(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Bc(n))throw n;cn("Error using user provided cache. Falling back to memory cache: "+n),await ni(e,new Zs)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await ni(e,new Zs);return e._offlineComponents}async function Hc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await tr(e,e._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await tr(e,new Uc))),e._onlineComponents}function zc(e){return Hc(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e,t,n){if(!n)throw new y(c.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qc(e,t,n,i){if(t===!0&&i===!0)throw new y(c.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function nr(e){if(!w.isDocumentKey(e))throw new y(c.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ir(e){if(w.isDocumentKey(e))throw new y(c.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function os(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function sa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(c.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=os(e);throw new y(c.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new y(c.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(c.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=na((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(c.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(c.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(c.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class jn{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(c.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(c.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ph;switch(n.type){case"firstParty":return new Uh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(c.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=er.get(t);n&&(m("ComponentProvider","Removing Datastore"),er.delete(t),n.terminate())}(this),Promise.resolve()}}function Gc(e,t,n,i={}){var s;const r=(e=sa(e,jn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&cn("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=G.MOCK_USER;else{o=Na(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new y(c.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new G(l)}e._authCredentials=new Lh(new vo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gt(this.firestore,t,this._key)}}class as{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new as(this.firestore,t,this._query)}}class vt extends as{constructor(t,n,i){super(t,n,cu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gt(this.firestore,null,new w(t))}withConverter(t){return new vt(this.firestore,t,this._path)}}function hf(e,t,...n){if(e=ce(e),ia("collection","path",t),e instanceof jn){const i=R.fromString(t,...n);return ir(i),new vt(e,null,i)}{if(!(e instanceof gt||e instanceof vt))throw new y(c.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(R.fromString(t,...n));return ir(i),new vt(e.firestore,null,i)}}function Kc(e,t,...n){if(e=ce(e),arguments.length===1&&(t=wo.A()),ia("doc","path",t),e instanceof jn){const i=R.fromString(t,...n);return nr(i),new gt(e,null,new w(i))}{if(!(e instanceof gt||e instanceof vt))throw new y(c.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(R.fromString(t,...n));return nr(i),new gt(e.firestore,e instanceof vt?e.converter:null,new w(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Qo(this,"async_queue_retry"),this.Xc=()=>{const n=ei();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=ei();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=ei();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new bt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Mn(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ot("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const s=rs.createAndSchedule(this,t,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&T()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class ra extends jn{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Qc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oa(this),this._firestoreClient.terminate()}}function uf(e,t){const n=typeof e=="object"?e:Tl(),i=typeof e=="string"?e:t||"(default)",s=ml(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ca("firestore");r&&Gc(s,...r)}return s}function Wc(e){return e._firestoreClient||oa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oa(e){var t,n,i;const s=e._freezeSettings(),r=function(o,a,l,h){return new Jh(o,a,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,na(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new $c(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ce(mt.fromBase64String(t))}catch(n){throw new y(c.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ce(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(c.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(c.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(c.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=/^__.*__$/;class Yc{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new Lt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Le(t,this.data,n,this.fieldTransforms)}}function ha(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class hs{constructor(t,n,i,s,r,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new hs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.aa({path:i,la:!1});return s.fa(t),s}da(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.aa({path:i,la:!1});return s.ua(),s}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return vn(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(ha(this.ca)&&Xc.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Jc{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Vn(t)}ya(t,n,i,s=!1){return new hs({ca:t,methodName:n,ga:i,path:Q.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zc(e){const t=e._freezeSettings(),n=Vn(e._databaseId);return new Jc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function tf(e,t,n,i,s,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,s);da("Data must be an object, but it was:",o,i);const a=ca(i,o);let l,h;if(r.merge)l=new rt(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const p=ef(t,d,n);if(!o.contains(p))throw new y(c.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);rf(u,p)||u.push(p)}l=new rt(u),h=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,h=o.fieldTransforms;return new Yc(new st(a),l,h)}class us extends ls{_toFieldTransform(t){return new Cu(t.path,new Ie)}isEqual(t){return t instanceof us}}function ua(e,t){if(fa(e=ce(e)))return da("Unsupported field value:",t,e),ca(e,t);if(e instanceof ls)return function(n,i){if(!ha(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=ua(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(e,t)}return function(n,i){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Iu(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=F.fromDate(n);return{timestampValue:Ai(i.serializer,s)}}if(n instanceof F){const s=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ai(i.serializer,s)}}if(n instanceof la)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ce)return{bytesValue:Lu(i.serializer,n._byteString)};if(n instanceof gt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qo(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${os(n)}`)}(e,t)}function ca(e,t){const n={};return Io(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pe(e,(i,s)=>{const r=ua(s,t.ha(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function fa(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof F||e instanceof la||e instanceof Ce||e instanceof gt||e instanceof ls)}function da(e,t,n){if(!fa(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=os(n);throw i==="an object"?t._a(e+" a custom object"):t._a(e+" "+i)}}function ef(e,t,n){if((t=ce(t))instanceof aa)return t._internalPath;if(typeof t=="string")return sf(e,t);throw vn("Field path arguments must be of type string or ",e,!1,void 0,n)}const nf=new RegExp("[~\\*/\\[\\]]");function sf(e,t,n){if(t.search(nf)>=0)throw vn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new aa(...t.split("."))._internalPath}catch{throw vn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vn(e,t,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new y(c.INVALID_ARGUMENT,a+e+l)}function rf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function cf(e,t){const n=sa(e.firestore,ra),i=Kc(e),s=of(e.converter,t);return af(n,[tf(Zc(e.firestore),"addDoc",i._key,s,e.converter!==null,{}).toMutation(i._key,dt.exists(!1))]).then(()=>i)}function af(e,t){return function(n,i){const s=new bt;return n.asyncQueue.enqueueAndForget(async()=>Mc(await zc(n),i,s)),s.promise}(Wc(e),t)}function ff(){return new us("serverTimestamp")}(function(e,t=!0){(function(n){Zt=n})(wl),Ze(new fe("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new ra(new Fh(n.getProvider("auth-internal")),new Bh(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(c.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),re(Ms,"3.12.0",e),re(Ms,"3.12.0","esm2017")})();export{ff as G,uf as P,hf as _,El as i,cf as p,re as r};
