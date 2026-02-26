/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,yt=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),Ct=new WeakMap;let Ut=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ct.set(e,t))}return t}toString(){return this.cssText}};const se=r=>new Ut(typeof r=="string"?r:r+"",void 0,gt),C=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new Ut(e,r,gt)},ie=(r,t)=>{if(yt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},wt=yt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return se(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:re,defineProperty:ae,getOwnPropertyDescriptor:oe,getOwnPropertyNames:ne,getOwnPropertySymbols:le,getPrototypeOf:ce}=Object,E=globalThis,Tt=E.trustedTypes,de=Tt?Tt.emptyScript:"",at=E.reactiveElementPolyfillSupport,D=(r,t)=>r,Q={toAttribute(r,t){switch(t){case Boolean:r=r?de:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},_t=(r,t)=>!re(r,t),At={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:_t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ae(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=oe(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const n=s==null?void 0:s.call(this);a==null||a.call(this,o),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const t=ce(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,i=[...ne(e),...le(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(wt(s))}else t!==void 0&&e.push(wt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var a;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:Q).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var a,o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:Q;this._$Em=s;const c=l.fromAttribute(e,n.type);this[s]=c??((o=this._$Ej)==null?void 0:o.get(s))??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){var o;if(t!==void 0){const n=this.constructor;if(s===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??_t)(a,e)||i.useDefault&&i.reflect&&a===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,o]of s){const{wrapped:n}=o,l=this[a];n!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[D("elementProperties")]=new Map,M[D("finalized")]=new Map,at==null||at({ReactiveElement:M}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,Et=r=>r,tt=H.trustedTypes,St=tt?tt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Vt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+A,he=`<${jt}>`,R=document,U=()=>R.createComment(""),V=r=>r===null||typeof r!="object"&&typeof r!="function",xt=Array.isArray,pe=r=>xt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Pt=/>/g,I=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Rt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,ue=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),b=ue(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ot=new WeakMap,P=R.createTreeWalker(R,129);function Bt(r,t){if(!xt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const fe=(r,t)=>{const e=r.length-1,i=[];let s,a=t===2?"<svg>":t===3?"<math>":"",o=z;for(let n=0;n<e;n++){const l=r[n];let c,p,d=-1,v=0;for(;v<l.length&&(o.lastIndex=v,p=o.exec(l),p!==null);)v=o.lastIndex,o===z?p[1]==="!--"?o=It:p[1]!==void 0?o=Pt:p[2]!==void 0?(Ft.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=I):p[3]!==void 0&&(o=I):o===I?p[0]===">"?(o=s??z,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?I:p[3]==='"'?Rt:kt):o===Rt||o===kt?o=I:o===It||o===Pt?o=z:(o=I,s=void 0);const T=o===I&&r[n+1].startsWith("/>")?" ":"";a+=o===z?l+he:d>=0?(i.push(c),l.slice(0,d)+Vt+l.slice(d)+A+T):l+A+(d===-2?n:T)}return[Bt(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,o=0;const n=t.length-1,l=this.parts,[c,p]=fe(t,e);if(this.el=j.createElement(c,i),P.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=P.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Vt)){const v=p[o++],T=s.getAttribute(d).split(A),G=/([.?@])?(.*)/.exec(v);l.push({type:1,index:a,name:G[2],strings:T,ctor:G[1]==="."?me:G[1]==="?"?ve:G[1]==="@"?ye:st}),s.removeAttribute(d)}else d.startsWith(A)&&(l.push({type:6,index:a}),s.removeAttribute(d));if(Ft.test(s.tagName)){const d=s.textContent.split(A),v=d.length-1;if(v>0){s.textContent=tt?tt.emptyScript:"";for(let T=0;T<v;T++)s.append(d[T],U()),P.nextNode(),l.push({type:2,index:++a});s.append(d[v],U())}}}else if(s.nodeType===8)if(s.data===jt)l.push({type:2,index:a});else{let d=-1;for(;(d=s.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:a}),d+=A.length-1}a++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function N(r,t,e=r,i){var o,n;if(t===S)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const a=V(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=N(r,s._$AS(r,t.values),s,i)),t}class be{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??R).importNode(e,!0);P.currentNode=s;let a=P.nextNode(),o=0,n=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new F(a,a.nextSibling,this,t):l.type===1?c=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(c=new ge(a,this,t)),this._$AV.push(c),l=i[++n]}o!==(l==null?void 0:l.index)&&(a=P.nextNode(),o++)}return P.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),V(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(Bt(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(e);else{const o=new be(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new j(t)),e}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new F(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=Et(t).nextSibling;Et(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,s){const a=this.strings;let o=!1;if(a===void 0)t=N(this,t,e,0),o=!V(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const n=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=N(this,n[i+l],e,l),c===S&&(c=this._$AH[l]),o||(o=!V(c)||c!==this._$AH[l]),c===u?t=u:t!==u&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class me extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class ve extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class ye extends st{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??u)===S)return;const i=this._$AH,s=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ge{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const nt=H.litHtmlPolyfillSupport;nt==null||nt(j,F),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.3.2");const _e=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const a=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new F(t.insertBefore(U(),a),a,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis;let y=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_e(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var Ht;y._$litElement$=!0,y.finalized=!0,(Ht=k.litElementHydrateSupport)==null||Ht.call(k,{LitElement:y});const lt=k.litElementPolyfillSupport;lt==null||lt({LitElement:y});(k.litElementVersions??(k.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:_t},$e=(r=xe,t,e)=>{const{kind:i,metadata:s}=e;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){const{name:o}=e;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,l,r,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,r,n),n}}}if(i==="setter"){const{name:o}=e;return function(n){const l=this[o];t.call(this,n),this.requestUpdate(o,l,r,!0,n)}}throw Error("Unsupported decorator location: "+i)};function f(r){return(t,e)=>typeof e=="object"?$e(r,t,e):((i,s,a)=>{const o=s.hasOwnProperty(a);return s.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(s,a):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(r){return f({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(r,t){return(e,i,s)=>{const a=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(r))??null};if(t){const{get:o,set:n}=typeof i=="object"?e:s??(()=>{const l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return et(e,i,{get(){let l=o.call(this);return l===void 0&&(l=a(this),(l!==null||this.hasUpdated)&&n.call(this,l)),l}})}return et(e,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(r){return(t,e)=>{const{slot:i,selector:s}=r??{},a="slot"+(i?`[name=${i}]`:":not([name])");return et(t,e,{get(){var l;const o=(l=this.renderRoot)==null?void 0:l.querySelector(a),n=(o==null?void 0:o.assignedElements(r))??[];return s===void 0?n:n.filter(c=>c.matches(s))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(r){return(t,e)=>{const{slot:i}=r??{},s="slot"+(i?`[name=${i}]`:":not([name])");return et(t,e,{get(){var o;const a=(o=this.renderRoot)==null?void 0:o.querySelector(s);return(a==null?void 0:a.assignedNodes(r))??[]}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=r=>(...t)=>({_$litDirective$:r,values:t});let Jt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt="important",we=" !"+Kt,Mt=Yt(class extends Jt{constructor(r){var t;if(super(r),r.type!==Gt.ATTRIBUTE||r.name!=="style"||((t=r.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{const i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){const{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const a=typeof s=="string"&&s.endsWith(we);i.includes("-")||a?e.setProperty(i,a?s.slice(0,-11):s,a?Kt:""):e[i]=s}}return S}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=r=>r??u;function Ae(r){if(r.__tabbedCardPatched)return;const t=r.define;r.define=function(e,i){if(r.get(e)){console.debug(`[tabbed-card-programmable] Skipping registration of ${e} as it's already defined`);return}try{t.call(r,e,i)}catch(s){console.warn(`[tabbed-card-programmable] Failed to register ${e}:`,s)}},r.__tabbedCardPatched=!0}Ae(customElements);var Nt,Lt;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(Nt||(Nt={})),function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"}(Lt||(Lt={}));var Ee=function(r,t,e,i){i=i||{},e=e??{};var s=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return s.detail=e,r.dispatchEvent(s),s},Se=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,B=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ie(t,e):t,a=r.length-1,o;a>=0;a--)(o=r[a])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Se(t,e,s),s};let O=class extends y{constructor(){super(...arguments),this._selectedTabIndex=0}setConfig(r){this._config=r,this.loadCardHelpers()}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){if(!this.hass||!this._config)return b``;const r=this._config.tabs||[];return b`
      <div class="card-config">
        <!-- Global Configuration Card -->
        <div class="config-card global-card">
          <h3>Global Configuration</h3>
          ${this._renderGlobalConfig()}
        </div>

        <!-- Tabs Configuration -->
        <div class="tabs-container">
          <h3>Tab Configuration</h3>
          <div class="tabs">
            ${r.map((t,e)=>{var i;return b`
                <div
                  class="tab ${this._selectedTabIndex===e?"selected":""}"
                  @click=${()=>this._selectTab(e)}
                >
                  ${(i=t.attributes)!=null&&i.label?t.attributes.label:`Tab ${e+1}`}
                  <ha-icon-button
                    .path=${"M19,13H5V11H19V13Z"}
                    @click=${s=>this._removeTab(e,s)}
                  ></ha-icon-button>
                </div>
              `})}
            <div class="tab add-tab" @click=${this._addTab}>
              <ha-icon-button
                .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
              ></ha-icon-button>
              Add Tab
            </div>
          </div>

          <div class="tab-content">
            ${r.length>0&&this._selectedTabIndex<r.length?this._renderTabConfig(r[this._selectedTabIndex],this._selectedTabIndex):""}
          </div>
        </div>
      </div>
    `}_renderGlobalConfig(){var t;const r=((t=this._config)==null?void 0:t.options)||{};return b`
      <div class="global-config">
        <ha-textfield
          label="Default Tab Index"
          .value=${r.defaultTabIndex!==void 0?r.defaultTabIndex:""}
          .configValue=${"defaultTabIndex"}
          @input=${this._valueChangedOptions}
          helper-text="Index of the default tab (0-based) or Jinja template"
        ></ha-textfield>

        <h4>Global Styles</h4>
        <ha-textfield
          label="Primary Color"
          .value=${this._getStyleValue("--md-sys-color-primary")}
          .configValue=${"--md-sys-color-primary"}
          @input=${this._valueChangedStyles}
          helper-text="CSS color for active tab (--md-sys-color-primary)"
        ></ha-textfield>

        <ha-textfield
          label="Inactive Tab Color"
          .value=${this._getStyleValue("--md-sys-color-on-surface-variant")}
          .configValue=${"--md-sys-color-on-surface-variant"}
          @input=${this._valueChangedStyles}
          helper-text="CSS color for inactive tabs (--md-sys-color-on-surface-variant)"
        ></ha-textfield>

        <ha-textfield
          label="Icon Color"
          .value=${this._getStyleValue("--md-sys-color-on-surface")}
          .configValue=${"--md-sys-color-on-surface"}
          @input=${this._valueChangedStyles}
          helper-text="CSS color for icons (--md-sys-color-on-surface)"
        ></ha-textfield>

        <ha-textfield
          label="Active Tab Indicator Color"
          .value=${this._getStyleValue("--md-primary-tab-active-indicator-color")}
          .configValue=${"--md-primary-tab-active-indicator-color"}
          @input=${this._valueChangedStyles}
          helper-text="Color of the active tab indicator (--md-primary-tab-active-indicator-color)"
        ></ha-textfield>

        <ha-textfield
          label="Tab Container Color"
          .value=${this._getStyleValue("--md-primary-tab-container-color")}
          .configValue=${"--md-primary-tab-container-color"}
          @input=${this._valueChangedStyles}
          helper-text="Background color of the tab container (--md-primary-tab-container-color)"
        ></ha-textfield>

        <ha-textfield
          label="Tab Font Family"
          .value=${this._getStyleValue("--md-primary-tab-label-text-font")}
          .configValue=${"--md-primary-tab-label-text-font"}
          @input=${this._valueChangedStyles}
          helper-text="Font family for tab labels (--md-primary-tab-label-text-font)"
        ></ha-textfield>

        <ha-textfield
          label="Font Size"
          .value=${this._getStyleValue("--md-primary-tab-label-text-size")}
          .configValue=${"--md-primary-tab-label-text-size"}
          @input=${this._valueChangedStyles}
          helper-text="Font size for tab labels (--md-primary-tab-label-text-size)"
        ></ha-textfield>

        <ha-textfield
          label="Divider Color"
          .value=${this._getStyleValue("--md-divider-color")}
          .configValue=${"--md-divider-color"}
          @input=${this._valueChangedStyles}
          helper-text="Color of the line below tabs, use 'transparent' to hide (--md-divider-color)"
        ></ha-textfield>

        <ha-textfield
          label="Divider Thickness"
          .value=${this._getStyleValue("--md-divider-thickness")}
          .configValue=${"--md-divider-thickness"}
          @input=${this._valueChangedStyles}
          helper-text="Thickness of the line below tabs, e.g. '0px' to hide (--md-divider-thickness)"
        ></ha-textfield>
      </div>
    `}_renderTabConfig(r,t){if(!r)return b``;const e=r.attributes||{};return b`
      <div class="tab-config">
        <h3>Tab ${t+1} Configuration</h3>

        <h4>Tab Properties</h4>
        <ha-textfield
          label="Label"
          .value=${e.label||""}
          .configValue=${"label"}
          @input=${i=>this._valueChangedTabAttribute(i,t)}
          helper-text="Tab label text (supports Jinja templates)"
        ></ha-textfield>

        <ha-textfield
          label="Material Design Icon (e.g., mdi:home)"
          .value=${e.icon||""}
          .configValue=${"icon"}
          @input=${i=>this._valueChangedTabAttribute(i,t)}
          helper-text="Material Design icon (e.g., mdi:home)"
        ></ha-textfield>

        <ha-formfield label="Stacked Icon (Vertical)">
          <ha-switch
            .checked=${e.stacked===!0}
            @change=${i=>{if(!this._config||!this._config.tabs)return;const a=i.target.checked,o=[...this._config.tabs],n={...o[t]},l={...n.attributes||{}};l.stacked=a,n.attributes=l,o[t]=n,this._updateConfig({...this._config,tabs:o})}}
          ></ha-switch>
        </ha-formfield>

        <h4>Dynamic Behavior</h4>
        <ha-textfield
          label="Hide Condition (Jinja-template or true/false)"
          .value=${e.hide!==void 0?e.hide:""}
          .configValue=${"hide"}
          @input=${i=>this._valueChangedTabAttribute(i,t)}
          helper-text="Boolean or Jinja template that evaluates to true/false"
        ></ha-textfield>

        <ha-textfield
          label="Disable Condition (Jinja-template or true/false)"
          .value=${e.disable!==void 0?e.disable:""}
          .configValue=${"disable"}
          @input=${i=>this._valueChangedTabAttribute(i,t)}
          helper-text="Boolean or Jinja template that evaluates to true/false"
        ></ha-textfield>

        <h4>Card Configuration</h4>
        <div class="card-picker">
          <div class="card-options">
            <div class="code-editor">
              <div class="code-editor-container">
                <label>Card Configuration (JSON-only for now)</label>
                <ha-code-editor
                  .hass=${this.hass}
                  .value=${this._cardConfigToYaml(r.card||{})}
                  mode="yaml"
                  @value-changed=${i=>this._handleCodeEditorChanged(i,t)}
                ></ha-code-editor>
              </div>
              <div class="editor-actions">
                <mwc-button @click=${()=>this._validateYaml()}>
                  Validate
                </mwc-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}_selectTab(r){this._selectedTabIndex=r}_addTab(){if(!this._config)return;const r=[...this._config.tabs||[]];r.push({attributes:{label:`Tab ${r.length+1}`},card:{type:"entities",entities:[]}}),this._updateConfig({...this._config,tabs:r}),this._selectedTabIndex=r.length-1}_removeTab(r,t){if(t.stopPropagation(),!this._config||!this._config.tabs)return;const e=[...this._config.tabs];e.splice(r,1),this._updateConfig({...this._config,tabs:e}),this._selectedTabIndex>=e.length&&(this._selectedTabIndex=Math.max(0,e.length-1))}_getStyleValue(r){return!this._config||!this._config.styles?"":this._config.styles[r]||""}_valueChangedOptions(r){if(!this._config||!this.hass)return;const t=r.target,e=t.configValue,i=t.value,s={...this._config.options||{}};i===""?delete s[e]:s[e]=i,this._updateConfig({...this._config,options:s})}_valueChangedStyles(r){if(!this._config||!this.hass)return;const t=r.target,e=t.configValue,i=t.value,s={...this._config.styles||{}};i===""?delete s[e]:s[e]=i,this._updateConfig({...this._config,styles:s})}_valueChangedTabAttribute(r,t){if(!this._config||!this.hass||!this._config.tabs)return;const e=r.target,i=e.configValue,s=e.type==="checkbox"?e.checked:e.value,a=[...this._config.tabs],o={...a[t]},n={...o.attributes||{}};s===""||s===!1?delete n[i]:n[i]=s,o.attributes=n,a[t]=o,this._updateConfig({...this._config,tabs:a})}_cardConfigToYaml(r){const t={...r};delete t.hass,delete t._helpers;try{return JSON.stringify(t,null,2)}catch(e){return`# Error converting to YAML: ${e}
# Please edit manually`}}_handleCodeEditorChanged(r,t){if(!this._config||!this.hass||!this._config.tabs)return;const e=r.detail.value;try{let i;window.jsyaml&&window.jsyaml.load?i=window.jsyaml.load(e):i=JSON.parse(e);const s=[...this._config.tabs],a={...s[t]};a.card=i,s[t]=a,this._updateConfig({...this._config,tabs:s})}catch(i){console.error("Invalid YAML:",i)}}_handleYamlChanged(r,t){if(!this._config||!this.hass||!this._config.tabs)return;const i=r.target.value;try{let s;window.jsyaml&&window.jsyaml.load?s=window.jsyaml.load(i):s=JSON.parse(i);const a=[...this._config.tabs],o={...a[t]};o.card=s,a[t]=o,this._updateConfig({...this._config,tabs:a})}catch(s){console.error("Invalid YAML:",s)}}_validateYaml(){alert("YAML validation is not yet implemented. Please ensure your YAML is valid.")}_updateConfig(r){this._config=r,Ee(this,"config-changed",{config:r})}};O.styles=C`
    .card-config {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .config-card {
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      padding: 16px;
      margin-bottom: 8px;
    }

    .global-card {
      background-color: var(--card-background-color, #fff);
    }

    .tabs-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      padding: 16px;
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .tab {
      padding: 8px 16px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .tab.selected {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }

    .tab.add-tab {
      border-style: dashed;
      display: flex;
      align-items: center;
    }

    .tab-content {
      border: 1px solid var(--divider-color);
      padding: 16px;
      border-radius: 4px;
      margin-top: 16px;
      background-color: var(--card-background-color, #fff);
    }

    .global-config,
    .tab-config {
      display: flex;
      flex-direction: column;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 18px;
    }

    h4 {
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 16px;
    }

    ha-textfield {
      display: block;
      margin-bottom: 8px;
    }

    ha-formfield {
      display: block;
      margin-bottom: 8px;
    }

    .card-picker {
      margin-top: 8px;
    }

    .card-options {
      margin-top: 8px;
      border: 1px solid var(--divider-color);
      padding: 16px;
      border-radius: 4px;
    }

    .markdown-editor,
    .code-editor,
    .code-editor-container {
      width: 100%;
    }

    .code-editor-container label {
      display: block;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    ha-code-editor {
      --code-mirror-height: 300px;
      width: 100%;
    }

    .editor-actions {
      margin-top: 8px;
      display: flex;
      justify-content: flex-end;
    }
  `;B([f({attribute:!1})],O.prototype,"hass",2);B([_()],O.prototype,"_config",2);B([_()],O.prototype,"_helpers",2);B([_()],O.prototype,"_selectedTabIndex",2);O=B([w("tabbed-card-editor")],O);function h(r,t,e,i){var s=arguments.length,a=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,i);else for(var n=r.length-1;n>=0;n--)(o=r[n])&&(a=(s<3?o(a):s>3?o(t,e,a):o(t,e))||a);return s>3&&a&&Object.defineProperty(t,e,a),a}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rt extends y{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}h([f({type:Boolean,reflect:!0})],rt.prototype,"inset",void 0);h([f({type:Boolean,reflect:!0,attribute:"inset-start"})],rt.prototype,"insetStart",void 0);h([f({type:Boolean,reflect:!0,attribute:"inset-end"})],rt.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Pe=C`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ht=class extends rt{};ht.styles=[Pe];ht=h([w("md-divider")],ht);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ke extends y{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return b`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Re=C`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pt=class extends ke{};pt.styles=[Re];pt=h([w("md-elevation")],pt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zt=Symbol("attachableController");let X;X=new MutationObserver(r=>{var t;for(const e of r)(t=e.target[Zt])==null||t.hostConnected()});class qt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[Zt]=this,X==null||X.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Oe=["focusin","focusout","pointerdown"];class $t extends y{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new qt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){var e;if(!t[zt]){switch(t.type){default:return;case"focusin":this.visible=((e=this.control)==null?void 0:e.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[zt]=!0}}onControlChange(t,e){for(const i of Oe)t==null||t.removeEventListener(i,this),e==null||e.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}h([f({type:Boolean,reflect:!0})],$t.prototype,"visible",void 0);h([f({type:Boolean,reflect:!0})],$t.prototype,"inward",void 0);const zt=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Me=C`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ut=class extends $t{};ut.styles=[Me];ut=h([w("md-focus-ring")],ut);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Yt(class extends Jt{constructor(r){var t;if(super(r),r.type!==Gt.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!((i=this.nt)!=null&&i.has(a))&&this.st.add(a);return this.render(t)}const e=r.element.classList;for(const a of this.st)a in t||(e.remove(a),this.st.delete(a));for(const a in t){const o=!!t[a];o===this.st.has(a)||(s=this.nt)!=null&&s.has(a)||(o?(e.add(a),this.st.add(a)):(e.remove(a),this.st.delete(a)))}return S}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ne=450,Dt=225,Le=.2,ze=10,De=75,He=.35,Ue="::after",Ve="forwards";var m;(function(r){r[r.INACTIVE=0]="INACTIVE",r[r.TOUCH_DELAY=1]="TOUCH_DELAY",r[r.HOLDING=2]="HOLDING",r[r.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(m||(m={}));const je=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Fe=150,ct=window.matchMedia("(forced-colors: active)");class W extends y{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=m.INACTIVE,this.attachableController=new qt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return b`<div class="surface ${Xt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==m.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===m.HOLDING){this.state=m.WAITING_FOR_CLICK;return}if(this.state===m.TOUCH_DELAY){this.state=m.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=m.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.state=m.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,Fe)}),this.state===m.TOUCH_DELAY&&(this.state=m.HOLDING,this.startPressAnimation(t))}}handleClick(){if(!this.disabled){if(this.state===m.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===m.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||this.endPressAnimation()}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),s=Math.max(He*i,De),a=this.currentCSSZoom??1,o=Math.floor(i*Le/a),l=Math.sqrt(e**2+t**2)+ze;this.initialSize=o;const c=(l+s)/o;this.rippleScale=`${c/a}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:s,top:a}=this.getBoundingClientRect(),o=e+s,n=i+a,{pageX:l,pageY:c}=t,p=this.currentCSSZoom??1;return{x:(l-o)/p,y:(c-n)/p}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),s=this.currentCSSZoom??1,a={x:(i/s-this.initialSize)/2,y:(e/s-this.initialSize)/2};let o;return t instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(t):o={x:i/s/2,y:e/s/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:a}}startPressAnimation(t){var o;if(!this.mdRoot)return;this.pressed=!0,(o=this.growAnimation)==null||o.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),s=`${e.x}px, ${e.y}px`,a=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${a}) scale(${this.rippleScale})`]},{pseudoElement:Ue,duration:Ne,easing:Qt.STANDARD,fill:Ve})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=m.INACTIVE;const t=this.growAnimation;let e=1/0;if(typeof(t==null?void 0:t.currentTime)=="number"?e=t.currentTime:t!=null&&t.currentTime&&(e=t.currentTime.to("ms").value),e>=Dt){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,Dt-e)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);const e=t.buttons===1;return this.isTouch(t)||e}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){if(!(ct!=null&&ct.matches))switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break}}onControlChange(t,e){for(const i of je)t==null||t.removeEventListener(i,this),e==null||e.addEventListener(i,this)}}h([f({type:Boolean,reflect:!0})],W.prototype,"disabled",void 0);h([_()],W.prototype,"hovered",void 0);h([_()],W.prototype,"pressed",void 0);h([it(".surface")],W.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Be=C`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ft=class extends W{};ft.styles=[Be];ft=h([w("md-ripple")],ft);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Y=Symbol("isFocusable"),dt=Symbol("privateIsFocusable"),J=Symbol("externalTabIndex"),K=Symbol("isUpdatingTabIndex"),Z=Symbol("updateTabIndex");function We(r){var t,e,i;class s extends r{constructor(){super(...arguments),this[t]=!0,this[e]=null,this[i]=!1}get[Y](){return this[dt]}set[Y](o){this[Y]!==o&&(this[dt]=o,this[Z]())}connectedCallback(){super.connectedCallback(),this[Z]()}attributeChangedCallback(o,n,l){if(o!=="tabindex"){super.attributeChangedCallback(o,n,l);return}if(this.requestUpdate("tabIndex",Number(n??-1)),!this[K]){if(!this.hasAttribute("tabindex")){this[J]=null,this[Z]();return}this[J]=this.tabIndex}}[(t=dt,e=J,i=K,Z)](){const o=this[Y]?0:-1,n=this[J]??o;this[K]=!0,this.tabIndex=n,this[K]=!1}}return h([f({noAccessor:!0})],s.prototype,"tabIndex",void 0),s}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const te=Symbol("animateIndicator"),Ge=We(y);class x extends Ge{get selected(){return this.active}set selected(t){this.active=t}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const t=b`<div class="indicator"></div>`;return b`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${Xt(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?u:t}
      </div>
      ${this.fullWidthIndicator?t:u}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(t){await 0,!t.defaultPrevented&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.click())}handleContentClick(t){t.stopPropagation(),this.click()}[te](t){if(!this.indicator)return;this.indicator.getAnimations().forEach(i=>{i.cancel()});const e=this.getKeyframes(t);e!==null&&this.indicator.animate(e,{duration:250,easing:Qt.EMPHASIZED})}getKeyframes(t){var d;const e=Ye();if(!this.active)return e?[{opacity:1},{transform:"none"}]:null;const i={},s=((d=t.indicator)==null?void 0:d.getBoundingClientRect())??{},a=s.left,o=s.width,n=this.indicator.getBoundingClientRect(),l=n.left,c=n.width,p=o/c;return!e&&a!==void 0&&l!==void 0&&!isNaN(p)?i.transform=`translateX(${(a-l).toFixed(4)}px) scaleX(${p.toFixed(4)})`:i.opacity=0,[i,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const t of this.assignedDefaultNodes){const e=t.nodeType===Node.TEXT_NODE&&!!t.wholeText.match(/\S/);if(t.nodeType===Node.ELEMENT_NODE||e)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}h([f({type:Boolean,reflect:!0,attribute:"md-tab"})],x.prototype,"isTab",void 0);h([f({type:Boolean,reflect:!0})],x.prototype,"active",void 0);h([f({type:Boolean})],x.prototype,"selected",null);h([f({type:Boolean,attribute:"has-icon"})],x.prototype,"hasIcon",void 0);h([f({type:Boolean,attribute:"icon-only"})],x.prototype,"iconOnly",void 0);h([it(".indicator")],x.prototype,"indicator",void 0);h([_()],x.prototype,"fullWidthIndicator",void 0);h([Ce({flatten:!0})],x.prototype,"assignedDefaultNodes",void 0);h([Wt({slot:"icon",flatten:!0})],x.prototype,"assignedIcons",void 0);function Ye(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class L extends y{get activeTab(){return this.tabs.find(t=>t.active)??null}set activeTab(t){t&&this.activateTab(t)}get activeTabIndex(){return this.tabs.findIndex(t=>t.active)}set activeTabIndex(t){const e=()=>{const i=this.tabs[t];i&&this.activateTab(i)};if(!this.slotElement){this.updateComplete.then(e);return}e()}get focusedTab(){return this.tabs.find(t=>t.matches(":focus-within"))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(t){await this.updateComplete;const{tabs:e}=this;if(t??(t=this.activeTab),!t||!e.includes(t)||!this.tabsScrollerElement)return;for(const v of this.tabs)await v.updateComplete;const i=t.offsetLeft,s=t.offsetWidth,a=this.scrollLeft,o=this.offsetWidth,n=48,l=i-n,c=i+s-o+n,p=Math.min(l,Math.max(c,a)),d=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:d,top:0,left:p})}render(){return b`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(t){const e=t.target;await 0,!(t.defaultPrevented||!Je(e)||e.active)&&this.activateTab(e)}activateTab(t){const{tabs:e}=this,i=this.activeTab;if(!(!e.includes(t)||i===t)){for(const s of e)s.active=s===t;if(i){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const a of e)a.active=a===i;return}t[te](i)}this.updateFocusableTab(t),this.scrollToTab(t)}}updateFocusableTab(t){for(const e of this.tabs)e.tabIndex=e===t?0:-1}async handleKeydown(t){await 0;const e=t.key==="ArrowLeft",i=t.key==="ArrowRight",s=t.key==="Home",a=t.key==="End";if(t.defaultPrevented||!e&&!i&&!s&&!a)return;const{tabs:o}=this;if(o.length<2)return;t.preventDefault();let n;if(s||a)n=s?0:o.length-1;else{const p=getComputedStyle(this).direction==="rtl"?e:i,{focusedTab:d}=this;if(!d)n=p?0:o.length-1;else{const v=this.tabs.indexOf(d);n=p?v+1:v-1,n>=o.length?n=0:n<0&&(n=o.length-1)}}const l=o[n];l.focus(),this.autoActivate?this.activateTab(l):this.updateFocusableTab(l)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:t}=this;t&&this.updateFocusableTab(t)}handleSlotChange(){const t=this.tabs[0];!this.activeTab&&t&&this.activateTab(t),this.scrollToTab(this.activeTab)}}h([Wt({flatten:!0,selector:"[md-tab]"})],L.prototype,"tabs",void 0);h([f({type:Number,attribute:"active-tab-index"})],L.prototype,"activeTabIndex",null);h([f({type:Boolean,attribute:"auto-activate"})],L.prototype,"autoActivate",void 0);h([it(".tabs")],L.prototype,"tabsScrollerElement",void 0);h([it("slot")],L.prototype,"slotElement",void 0);function Je(r){return r instanceof HTMLElement&&r.hasAttribute("md-tab")}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ke=C`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let bt=class extends L{};bt.styles=[Ke];bt=h([w("md-tabs")],bt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ee extends x{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}h([f({type:Boolean,attribute:"inline-icon"})],ee.prototype,"inlineIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ze=C`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qe=C`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mt=class extends ee{};mt.styles=[qe,Ze];mt=h([w("md-primary-tab")],mt);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xe extends y{render(){return b`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qe=C`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let vt=class extends Xe{};vt.styles=[Qe];vt=h([w("md-icon")],vt);var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,$=(r,t,e,i)=>{for(var s=i>1?void 0:i?es(t,e):t,a=r.length-1,o;a>=0;a--)(o=r[a])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&ts(t,e,s),s};let g=class extends y{constructor(){super(...arguments),this.selectedTabIndex=0,this._hiddenTabs=[],this._disabledTabs=[],this._processedLabels=[],this._styles={"--md-sys-color-primary":"var(--primary-text-color)","--md-sys-color-on-surface-variant":"rgba(var(--rgb-primary-text-color), 0.6)","--md-primary-tab-container-color":"transparent","--md-primary-tab-label-text-font":"var(--app-font-family)","--md-primary-tab-active-indicator-color":"var(--primary-text-color)","--md-primary-tab-icon-color":"rgba(var(--rgb-primary-text-color), 0.6)","--md-primary-tab-active-focus-icon-color":"var(--primary-text-color)","--md-primary-tab-active-focus-label-text-color":"var(--primary-text-color)","--md-primary-tab-label-text-size":"var(--ha-font-size-m)","--md-divider-color":"var(--divider-color, #cac4d0)","--md-divider-thickness":"1px"}}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}static async getConfigElement(){return document.createElement("tabbed-card-editor")}static getStubConfig(){return{options:{},tabs:[{card:{type:"entity",entity:"sun.sun"},attributes:{label:"Sun"}}]}}setConfig(r){if(!r)throw new Error("No configuration.");this._config=r,this._styles={...this._styles,...this._config.styles},this.loadCardHelpers()}willUpdate(r){var t;r.has("_helpers")&&this._createTabs(this._config),r.has("hass")&&((t=this._tabs)!=null&&t.length)&&this._tabs.forEach(e=>e.card.hass=this.hass)}async _createTabs(r){var i;const t=(i=r==null?void 0:r.options)==null?void 0:i.defaultTabIndex;if(typeof t>"u")this.selectedTabIndex=0;else if(typeof t=="string"){const s=await this.evaluateJinjaTemplate(this.hass,t||"0");this.selectedTabIndex=parseInt(s)||0}else this.selectedTabIndex=isFinite(t)?t:0;this._hiddenTabs=[],this._disabledTabs=[],this._processedLabels=[];const e=await Promise.all(r.tabs.map(async s=>{var l,c,p;let a=!1;((l=s.attributes)==null?void 0:l.hide)!==void 0&&(typeof s.attributes.hide=="string"?s.attributes.hide.toLowerCase()==="true"?a=!0:s.attributes.hide.toLowerCase()==="false"?a=!1:s.attributes.hide.includes("{%")||s.attributes.hide.includes("{{")?a=(await this.evaluateJinjaTemplate(this.hass,s.attributes.hide)).toLowerCase()==="true":a=!1:a=!!s.attributes.hide),this._hiddenTabs.push(a);let o=!1;((c=s.attributes)==null?void 0:c.disable)!==void 0&&(typeof s.attributes.disable=="string"?s.attributes.disable.toLowerCase()==="true"?o=!0:s.attributes.disable.toLowerCase()==="false"?o=!1:s.attributes.disable.includes("{%")||s.attributes.disable.includes("{{")?o=(await this.evaluateJinjaTemplate(this.hass,s.attributes.disable)).toLowerCase()==="true":o=!1:o=!!s.attributes.disable),this._disabledTabs.push(o);let n=((p=s==null?void 0:s.attributes)==null?void 0:p.label)||"";if(typeof n=="string"&&n.includes("{%")||n.includes("{{"))try{n=await this.evaluateJinjaTemplate(this.hass,n)}catch(d){console.error(`[tabbed-card-programmable] Error evaluating label template: ${d}`)}return this._processedLabels.push(n),{styles:s==null?void 0:s.styles,attributes:s==null?void 0:s.attributes,card:await this._createCard(s.card),processedLabel:n}}));if(this._tabs=e,this._hiddenTabs[this.selectedTabIndex]){const s=this._hiddenTabs.findIndex(a=>!a);s>=0&&(this.selectedTabIndex=s)}if(this._disabledTabs[this.selectedTabIndex]){for(let s=0;s<this._tabs.length;s++)if(!this._hiddenTabs[s]&&!this._disabledTabs[s]){this.selectedTabIndex=s;break}}}async _createCard(r){const t=await this._helpers.createCardElement(r);return t.hass=this.hass,t.addEventListener("ll-rebuild",e=>{e.stopPropagation(),this._rebuildCard(t,r)},{once:!0}),t}async _rebuildCard(r,t){const e=await this._helpers.createCardElement(t);r.replaceWith(e)}async evaluateJinjaTemplate(r,t){return new Promise(e=>{r.connection.subscribeMessage(i=>e(i.result.toString()),{type:"render_template",template:t})})}_onTabChange(r){var a;const t=r.target,e=t.activeTabIndex,i=this._tabs.map((o,n)=>({tab:o,index:n})).filter(({index:o})=>!this._hiddenTabs[o]),s=(a=i[e])==null?void 0:a.index;if(s!==void 0){if(this._disabledTabs[s]){const o=i.findIndex(({index:n})=>n===this.selectedTabIndex);o>=0&&setTimeout(()=>{t.activeTabIndex=o},0);return}this.selectedTabIndex=s,this.dispatchEvent(new CustomEvent("tabbed-card-change",{detail:{index:this.selectedTabIndex},bubbles:!0,composed:!0}))}}render(){var e,i;if(!this.hass||!this._config||!this._helpers||!((e=this._tabs)!=null&&e.length))return b``;const r=this._tabs.map((s,a)=>({tab:s,index:a})).filter(({index:s})=>!this._hiddenTabs[s]);if(r.length===0)return b``;const t=r.findIndex(({index:s})=>s===this.selectedTabIndex);return b`
      <md-tabs
        @change=${this._onTabChange}
        style=${Mt(this._styles)}
        .activeTabIndex=${t>=0?t:0}
      >
        ${r.map(({tab:s,index:a})=>{var o,n,l,c;return b`
            <md-primary-tab
              style=${Te(Mt({...(s==null?void 0:s.styles)||{},...this._disabledTabs[a]?{opacity:"0.5",cursor:"not-allowed","--md-sys-color-primary":"var(--disabled-text-color, rgba(var(--rgb-primary-text-color), 0.5))"}:{}}))}
              ?disabled=${this._disabledTabs[a]}
              ?inline-icon=${!((o=s==null?void 0:s.attributes)!=null&&o.stacked)}
            >
              ${(n=s==null?void 0:s.attributes)!=null&&n.icon?b`<ha-icon
                    slot="icon"
                    icon="${(l=s==null?void 0:s.attributes)==null?void 0:l.icon}"
                  ></ha-icon>`:b``}
              <span
                >${(s==null?void 0:s.processedLabel)||((c=s==null?void 0:s.attributes)==null?void 0:c.label)||u}</span
              >
            </md-primary-tab>
          `})}
      </md-tabs>
      <section>
        <article>
          ${(i=this._tabs.find((s,a)=>a==this.selectedTabIndex))==null?void 0:i.card}
        </article>
      </section>
    `}};$([f({attribute:!1})],g.prototype,"hass",2);$([f()],g.prototype,"selectedTabIndex",2);$([f()],g.prototype,"_helpers",2);$([_()],g.prototype,"_config",2);$([_()],g.prototype,"_tabs",2);$([_()],g.prototype,"_hiddenTabs",2);$([_()],g.prototype,"_disabledTabs",2);$([_()],g.prototype,"_processedLabels",2);$([f()],g.prototype,"_styles",2);g=$([w("tabbed-card-programmable")],g);window.customCards=window.customCards||[];window.customCards.push({type:"tabbed-card-programmable",name:"Tabbed Card Programmable",description:"A tabbed card of cards. Programmable."});
