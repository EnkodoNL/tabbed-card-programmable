/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,gt=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),wt=new WeakMap;let Ut=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(gt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&wt.set(e,t))}return t}toString(){return this.cssText}};const ie=r=>new Ut(typeof r=="string"?r:r+"",void 0,_t),C=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Ut(e,r,_t)},re=(r,t)=>{if(gt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=X.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Tt=gt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ie(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oe,defineProperty:ae,getOwnPropertyDescriptor:ne,getOwnPropertyNames:le,getOwnPropertySymbols:ce,getPrototypeOf:de}=Object,E=globalThis,At=E.trustedTypes,he=At?At.emptyScript:"",at=E.reactiveElementPolyfillSupport,H=(r,t)=>r,tt={toAttribute(r,t){switch(t){case Boolean:r=r?he:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},xt=(r,t)=>!oe(r,t),Et={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let N=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ae(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ne(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){const n=i==null?void 0:i.call(this);o==null||o.call(this,a),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=de(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,s=[...le(e),...ce(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Tt(i))}else t!==void 0&&e.push(Tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:tt).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var o,a;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:tt;this._$Em=i,this[i]=l.fromAttribute(e,n.type)??((a=this._$Ej)==null?void 0:a.get(i))??null,this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){const o=this.constructor,a=this[t];if(s??(s=o.getPropertyOptions(t)),!((s.hasChanged??xt)(a,e)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),o!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i){const{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[H("elementProperties")]=new Map,N[H("finalized")]=new Map,at==null||at({ReactiveElement:N}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,et=U.trustedTypes,St=et?et.createPolicy("lit-html",{createHTML:r=>r}):void 0,Vt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+A,pe=`<${jt}>`,R=document,V=()=>R.createComment(""),j=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,ue=r=>$t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Pt=/>/g,I=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,Rt=/"/g,Bt=/^(?:script|style|textarea|title)$/i,fe=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),b=fe(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Mt=new WeakMap,P=R.createTreeWalker(R,129);function Ft(r,t){if(!$t(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const be=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",a=D;for(let n=0;n<e;n++){const l=r[n];let d,p,c=-1,v=0;for(;v<l.length&&(a.lastIndex=v,p=a.exec(l),p!==null);)v=a.lastIndex,a===D?p[1]==="!--"?a=It:p[1]!==void 0?a=Pt:p[2]!==void 0?(Bt.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=I):p[3]!==void 0&&(a=I):a===I?p[0]===">"?(a=i??D,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?I:p[3]==='"'?Rt:kt):a===Rt||a===kt?a=I:a===It||a===Pt?a=D:(a=I,i=void 0);const T=a===I&&r[n+1].startsWith("/>")?" ":"";o+=a===D?l+pe:c>=0?(s.push(d),l.slice(0,c)+Vt+l.slice(c)+A+T):l+A+(c===-2?n:T)}return[Ft(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,a=0;const n=t.length-1,l=this.parts,[d,p]=be(t,e);if(this.el=B.createElement(d,s),P.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=P.nextNode())!==null&&l.length<n;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Vt)){const v=p[a++],T=i.getAttribute(c).split(A),Y=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:Y[2],strings:T,ctor:Y[1]==="."?ve:Y[1]==="?"?ye:Y[1]==="@"?ge:it}),i.removeAttribute(c)}else c.startsWith(A)&&(l.push({type:6,index:o}),i.removeAttribute(c));if(Bt.test(i.tagName)){const c=i.textContent.split(A),v=c.length-1;if(v>0){i.textContent=et?et.emptyScript:"";for(let T=0;T<v;T++)i.append(c[T],V()),P.nextNode(),l.push({type:2,index:++o});i.append(c[v],V())}}}else if(i.nodeType===8)if(i.data===jt)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(A,c+1))!==-1;)l.push({type:7,index:o}),c+=A.length-1}o++}}static createElement(t,e){const s=R.createElement("template");return s.innerHTML=t,s}}function z(r,t,e=r,s){var a,n;if(t===S)return t;let i=s!==void 0?(a=e._$Co)==null?void 0:a[s]:e._$Cl;const o=j(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((n=i==null?void 0:i._$AO)==null||n.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=z(r,i._$AS(r,t.values),i,s)),t}class me{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??R).importNode(e,!0);P.currentNode=i;let o=P.nextNode(),a=0,n=0,l=s[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new F(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new _e(o,this,t)),this._$AV.push(d),l=s[++n]}a!==(l==null?void 0:l.index)&&(o=P.nextNode(),a++)}return P.currentNode=R,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class F{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),j(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ue(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement(Ft(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const a=new me(i,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new B(t)),e}k(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new F(this.O(V()),this.O(V()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const o=this.strings;let a=!1;if(o===void 0)t=z(this,t,e,0),a=!j(t)||t!==this._$AH&&t!==S,a&&(this._$AH=t);else{const n=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=z(this,n[s+l],e,l),d===S&&(d=this._$AH[l]),a||(a=!j(d)||d!==this._$AH[l]),d===u?t=u:t!==u&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}a&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ve extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class ye extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class ge extends it{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??u)===S)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class _e{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const lt=U.litHtmlPolyfillSupport;lt==null||lt(B,F),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.0");const xe=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new F(t.insertBefore(V(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis;let y=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}};var Ht;y._$litElement$=!0,y.finalized=!0,(Ht=k.litElementHydrateSupport)==null||Ht.call(k,{LitElement:y});const ct=k.litElementPolyfillSupport;ct==null||ct({LitElement:y});(k.litElementVersions??(k.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:xt},Ce=(r=$e,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:a}=e;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,l,r)},init(n){return n!==void 0&&this.C(a,void 0,r,n),n}}}if(s==="setter"){const{name:a}=e;return function(n){const l=this[a];t.call(this,n),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(t,e)=>typeof e=="object"?Ce(r,t,e):((s,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(r){return f({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(r,t){return(e,s,i)=>{const o=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(r))??null};if(t){const{get:a,set:n}=typeof s=="object"?e:i??(()=>{const l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return st(e,s,{get(){let l=a.call(this);return l===void 0&&(l=o(this),(l!==null||this.hasUpdated)&&n.call(this,l)),l}})}return st(e,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(r){return(t,e)=>{const{slot:s,selector:i}=r??{},o="slot"+(s?`[name=${s}]`:":not([name])");return st(t,e,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(o),n=(a==null?void 0:a.assignedElements(r))??[];return i===void 0?n:n.filter(d=>d.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function we(r){return(t,e)=>{const{slot:s}=r??{},i="slot"+(s?`[name=${s}]`:":not([name])");return st(t,e,{get(){var a;const o=(a=this.renderRoot)==null?void 0:a.querySelector(i);return(o==null?void 0:o.assignedNodes(r))??[]}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=r=>(...t)=>({_$litDirective$:r,values:t});let Jt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt="important",Te=" !"+Kt,Ot=Yt(class extends Jt{constructor(r){var t;if(super(r),r.type!==Gt.ATTRIBUTE||r.name!=="style"||((t=r.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{const s=r[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(r,[t]){const{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const i=t[s];if(i!=null){this.ft.add(s);const o=typeof i=="string"&&i.endsWith(Te);s.includes("-")||o?e.setProperty(s,o?i.slice(0,-11):i,o?Kt:""):e[s]=i}}return S}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=r=>r??u;function Ee(r){if(r.__tabbedCardPatched)return;const t=r.define;r.define=function(e,s){if(r.get(e)){console.debug(`[tabbed-card-programmable] Skipping registration of ${e} as it's already defined`);return}try{t.call(r,e,s)}catch(i){console.warn(`[tabbed-card-programmable] Failed to register ${e}:`,i)}},r.__tabbedCardPatched=!0}Ee(customElements);var Nt,zt;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(Nt||(Nt={})),function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"}(zt||(zt={}));var Se=function(r,t,e,s){s=s||{},e=e??{};var i=new Event(t,{bubbles:s.bubbles===void 0||s.bubbles,cancelable:!!s.cancelable,composed:s.composed===void 0||s.composed});return i.detail=e,r.dispatchEvent(i),i},Ie=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,W=(r,t,e,s)=>{for(var i=s>1?void 0:s?Pe(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&Ie(t,e,i),i};let M=class extends y{constructor(){super(...arguments),this._selectedTabIndex=0}setConfig(r){this._config=r,this.loadCardHelpers()}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}render(){if(!this.hass||!this._config)return b``;const r=this._config.tabs||[];return b`
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
            ${r.map((t,e)=>{var s;return b`
                <div
                  class="tab ${this._selectedTabIndex===e?"selected":""}"
                  @click=${()=>this._selectTab(e)}
                >
                  ${(s=t.attributes)!=null&&s.label?t.attributes.label:`Tab ${e+1}`}
                  <ha-icon-button
                    .path=${"M19,13H5V11H19V13Z"}
                    @click=${i=>this._removeTab(e,i)}
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
      </div>
    `}_renderTabConfig(r,t){if(!r)return b``;const e=r.attributes||{};return b`
      <div class="tab-config">
        <h3>Tab ${t+1} Configuration</h3>

        <h4>Tab Properties</h4>
        <ha-textfield
          label="Label"
          .value=${e.label||""}
          .configValue=${"label"}
          @input=${s=>this._valueChangedTabAttribute(s,t)}
          helper-text="Tab label text (supports Jinja templates)"
        ></ha-textfield>

        <ha-textfield
          label="Material Design Icon (e.g., mdi:home)"
          .value=${e.icon||""}
          .configValue=${"icon"}
          @input=${s=>this._valueChangedTabAttribute(s,t)}
          helper-text="Material Design icon (e.g., mdi:home)"
        ></ha-textfield>

        <ha-formfield label="Stacked Icon (Vertical)">
          <ha-switch
            .checked=${e.stacked===!0}
            @change=${s=>{if(!this._config||!this._config.tabs)return;const o=s.target.checked,a=[...this._config.tabs],n={...a[t]},l={...n.attributes||{}};l.stacked=o,n.attributes=l,a[t]=n,this._updateConfig({...this._config,tabs:a})}}
          ></ha-switch>
        </ha-formfield>

        <h4>Dynamic Behavior</h4>
        <ha-textfield
          label="Hide Condition (Jinja-template or true/false)"
          .value=${e.hide!==void 0?e.hide:""}
          .configValue=${"hide"}
          @input=${s=>this._valueChangedTabAttribute(s,t)}
          helper-text="Boolean or Jinja template that evaluates to true/false"
        ></ha-textfield>

        <ha-textfield
          label="Disable Condition (Jinja-template or true/false)"
          .value=${e.disable!==void 0?e.disable:""}
          .configValue=${"disable"}
          @input=${s=>this._valueChangedTabAttribute(s,t)}
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
                  @value-changed=${s=>this._handleCodeEditorChanged(s,t)}
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
    `}_selectTab(r){this._selectedTabIndex=r}_addTab(){if(!this._config)return;const r=[...this._config.tabs||[]];r.push({attributes:{label:`Tab ${r.length+1}`},card:{type:"entities",entities:[]}}),this._updateConfig({...this._config,tabs:r}),this._selectedTabIndex=r.length-1}_removeTab(r,t){if(t.stopPropagation(),!this._config||!this._config.tabs)return;const e=[...this._config.tabs];e.splice(r,1),this._updateConfig({...this._config,tabs:e}),this._selectedTabIndex>=e.length&&(this._selectedTabIndex=Math.max(0,e.length-1))}_getStyleValue(r){return!this._config||!this._config.styles?"":this._config.styles[r]||""}_valueChangedOptions(r){if(!this._config||!this.hass)return;const t=r.target,e=t.configValue,s=t.value,i={...this._config.options||{}};s===""?delete i[e]:i[e]=s,this._updateConfig({...this._config,options:i})}_valueChangedStyles(r){if(!this._config||!this.hass)return;const t=r.target,e=t.configValue,s=t.value,i={...this._config.styles||{}};s===""?delete i[e]:i[e]=s,this._updateConfig({...this._config,styles:i})}_valueChangedTabAttribute(r,t){if(!this._config||!this.hass||!this._config.tabs)return;const e=r.target,s=e.configValue,i=e.type==="checkbox"?e.checked:e.value,o=[...this._config.tabs],a={...o[t]},n={...a.attributes||{}};i===""||i===!1?delete n[s]:n[s]=i,a.attributes=n,o[t]=a,this._updateConfig({...this._config,tabs:o})}_cardConfigToYaml(r){const t={...r};delete t.hass,delete t._helpers;try{return JSON.stringify(t,null,2)}catch(e){return`# Error converting to YAML: ${e}
# Please edit manually`}}_handleCodeEditorChanged(r,t){if(!this._config||!this.hass||!this._config.tabs)return;const e=r.detail.value;try{let s;window.jsyaml&&window.jsyaml.load?s=window.jsyaml.load(e):s=JSON.parse(e);const i=[...this._config.tabs],o={...i[t]};o.card=s,i[t]=o,this._updateConfig({...this._config,tabs:i})}catch(s){console.error("Invalid YAML:",s)}}_handleYamlChanged(r,t){if(!this._config||!this.hass||!this._config.tabs)return;const s=r.target.value;try{let i;window.jsyaml&&window.jsyaml.load?i=window.jsyaml.load(s):i=JSON.parse(s);const o=[...this._config.tabs],a={...o[t]};a.card=i,o[t]=a,this._updateConfig({...this._config,tabs:o})}catch(i){console.error("Invalid YAML:",i)}}_validateYaml(){alert("YAML validation is not yet implemented. Please ensure your YAML is valid.")}_updateConfig(r){this._config=r,Se(this,"config-changed",{config:r})}};M.styles=C`
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
  `;W([f({attribute:!1})],M.prototype,"hass",2);W([_()],M.prototype,"_config",2);W([_()],M.prototype,"_helpers",2);W([_()],M.prototype,"_selectedTabIndex",2);M=W([w("tabbed-card-editor")],M);function h(r,t,e,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,s);else for(var n=r.length-1;n>=0;n--)(a=r[n])&&(o=(i<3?a(o):i>3?a(t,e,o):a(t,e))||o);return i>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ot extends y{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}h([f({type:Boolean,reflect:!0})],ot.prototype,"inset",void 0);h([f({type:Boolean,reflect:!0,attribute:"inset-start"})],ot.prototype,"insetStart",void 0);h([f({type:Boolean,reflect:!0,attribute:"inset-end"})],ot.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ke=C`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pt=class extends ot{};pt.styles=[ke];pt=h([w("md-divider")],pt);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Re extends y{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return b`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Me=C`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ut=class extends Re{};ut.styles=[Me];ut=h([w("md-elevation")],ut);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qt=Symbol("attachableController");let Q;Q=new MutationObserver(r=>{var t;for(const e of r)(t=e.target[qt])==null||t.hostConnected()});class Zt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[qt]=this,Q==null||Q.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Oe=["focusin","focusout","pointerdown"];class Ct extends y{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Zt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){var e;if(!t[Lt]){switch(t.type){default:return;case"focusin":this.visible=((e=this.control)==null?void 0:e.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[Lt]=!0}}onControlChange(t,e){for(const s of Oe)t==null||t.removeEventListener(s,this),e==null||e.addEventListener(s,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}h([f({type:Boolean,reflect:!0})],Ct.prototype,"visible",void 0);h([f({type:Boolean,reflect:!0})],Ct.prototype,"inward",void 0);const Lt=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ne=C`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ft=class extends Ct{};ft.styles=[Ne];ft=h([w("md-focus-ring")],ft);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Yt(class extends Jt{constructor(r){var t;if(super(r),r.type!==Gt.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var s,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(t)}const e=r.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return S}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ze=450,Dt=225,Le=.2,De=10,He=75,Ue=.35,Ve="::after",je="forwards";var m;(function(r){r[r.INACTIVE=0]="INACTIVE",r[r.TOUCH_DELAY=1]="TOUCH_DELAY",r[r.HOLDING=2]="HOLDING",r[r.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(m||(m={}));const Be=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Fe=150,dt=window.matchMedia("(forced-colors: active)");class G extends y{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=m.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Zt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return b`<div class="surface ${Xt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==m.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===m.HOLDING){this.state=m.WAITING_FOR_CLICK;return}if(this.state===m.TOUCH_DELAY){this.state=m.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=m.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=m.TOUCH_DELAY,await new Promise(e=>{setTimeout(e,Fe)}),this.state===m.TOUCH_DELAY&&(this.state=m.HOLDING,this.startPressAnimation(t)))}}handleClick(){if(!this.disabled){if(this.state===m.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===m.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),s=Math.max(t,e),i=Math.max(Ue*s,He),o=Math.floor(s*Le),n=Math.sqrt(e**2+t**2)+De;this.initialSize=o,this.rippleScale=`${(n+i)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:s}=window,{left:i,top:o}=this.getBoundingClientRect(),a=e+i,n=s+o,{pageX:l,pageY:d}=t;return{x:l-a,y:d-n}}getTranslationCoordinates(t){const{height:e,width:s}=this.getBoundingClientRect(),i={x:(s-this.initialSize)/2,y:(e-this.initialSize)/2};let o;return t instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(t):o={x:s/2,y:e/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(t){var a;if(!this.mdRoot)return;this.pressed=!0,(a=this.growAnimation)==null||a.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:s}=this.getTranslationCoordinates(t),i=`${e.x}px, ${e.y}px`,o=`${s.x}px, ${s.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:Ve,duration:ze,easing:Qt.STANDARD,fill:je})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=m.INACTIVE;const t=this.growAnimation;let e=1/0;if(typeof(t==null?void 0:t.currentTime)=="number"?e=t.currentTime:t!=null&&t.currentTime&&(e=t.currentTime.to("ms").value),e>=Dt){this.pressed=!1;return}await new Promise(s=>{setTimeout(s,Dt-e)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);const e=t.buttons===1;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:s,left:i,bottom:o,right:a}=this.getBoundingClientRect();return t>=i&&t<=a&&e>=s&&e<=o}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){if(!(dt!=null&&dt.matches))switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break}}onControlChange(t,e){for(const s of Be)t==null||t.removeEventListener(s,this),e==null||e.addEventListener(s,this)}}h([f({type:Boolean,reflect:!0})],G.prototype,"disabled",void 0);h([_()],G.prototype,"hovered",void 0);h([_()],G.prototype,"pressed",void 0);h([rt(".surface")],G.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const We=C`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let bt=class extends G{};bt.styles=[We];bt=h([w("md-ripple")],bt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const J=Symbol("isFocusable"),ht=Symbol("privateIsFocusable"),K=Symbol("externalTabIndex"),q=Symbol("isUpdatingTabIndex"),Z=Symbol("updateTabIndex");function Ge(r){var t,e,s;class i extends r{constructor(){super(...arguments),this[t]=!0,this[e]=null,this[s]=!1}get[J](){return this[ht]}set[J](a){this[J]!==a&&(this[ht]=a,this[Z]())}connectedCallback(){super.connectedCallback(),this[Z]()}attributeChangedCallback(a,n,l){if(a!=="tabindex"){super.attributeChangedCallback(a,n,l);return}if(this.requestUpdate("tabIndex",Number(n??-1)),!this[q]){if(!this.hasAttribute("tabindex")){this[K]=null,this[Z]();return}this[K]=this.tabIndex}}[(t=ht,e=K,s=q,Z)](){const a=this[J]?0:-1,n=this[K]??a;this[q]=!0,this.tabIndex=n,this[q]=!1}}return h([f({noAccessor:!0})],i.prototype,"tabIndex",void 0),i}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var te;const O=Symbol("indicator"),ee=Symbol("animateIndicator"),Ye=Ge(y);class x extends Ye{get selected(){return this.active}set selected(t){this.active=t}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const t=b`<div class="indicator"></div>`;return b`<div
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
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(t){await 0,!t.defaultPrevented&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.click())}handleContentClick(t){t.stopPropagation(),this.click()}[(te=O,ee)](t){if(!this[O])return;this[O].getAnimations().forEach(s=>{s.cancel()});const e=this.getKeyframes(t);e!==null&&this[O].animate(e,{duration:250,easing:Qt.EMPHASIZED})}getKeyframes(t){var c;const e=Je();if(!this.active)return e?[{opacity:1},{transform:"none"}]:null;const s={},i=((c=t[O])==null?void 0:c.getBoundingClientRect())??{},o=i.left,a=i.width,n=this[O].getBoundingClientRect(),l=n.left,d=n.width,p=a/d;return!e&&o!==void 0&&l!==void 0&&!isNaN(p)?s.transform=`translateX(${(o-l).toFixed(4)}px) scaleX(${p.toFixed(4)})`:s.opacity=0,[s,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const t of this.assignedDefaultNodes){const e=t.nodeType===Node.TEXT_NODE&&!!t.wholeText.match(/\S/);if(t.nodeType===Node.ELEMENT_NODE||e)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}h([f({type:Boolean,reflect:!0,attribute:"md-tab"})],x.prototype,"isTab",void 0);h([f({type:Boolean,reflect:!0})],x.prototype,"active",void 0);h([f({type:Boolean})],x.prototype,"selected",null);h([f({type:Boolean,attribute:"has-icon"})],x.prototype,"hasIcon",void 0);h([f({type:Boolean,attribute:"icon-only"})],x.prototype,"iconOnly",void 0);h([rt(".indicator")],x.prototype,te,void 0);h([_()],x.prototype,"fullWidthIndicator",void 0);h([we({flatten:!0})],x.prototype,"assignedDefaultNodes",void 0);h([Wt({slot:"icon",flatten:!0})],x.prototype,"assignedIcons",void 0);function Je(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class L extends y{get activeTab(){return this.tabs.find(t=>t.active)??null}set activeTab(t){t&&this.activateTab(t)}get activeTabIndex(){return this.tabs.findIndex(t=>t.active)}set activeTabIndex(t){const e=()=>{const s=this.tabs[t];s&&this.activateTab(s)};if(!this.slotElement){this.updateComplete.then(e);return}e()}get focusedTab(){return this.tabs.find(t=>t.matches(":focus-within"))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(t){await this.updateComplete;const{tabs:e}=this;if(t??(t=this.activeTab),!t||!e.includes(t)||!this.tabsScrollerElement)return;for(const v of this.tabs)await v.updateComplete;const s=t.offsetLeft,i=t.offsetWidth,o=this.scrollLeft,a=this.offsetWidth,n=48,l=s-n,d=s+i-a+n,p=Math.min(l,Math.max(d,o)),c=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:c,top:0,left:p})}render(){return b`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(t){const e=t.target;await 0,!(t.defaultPrevented||!Ke(e)||e.active)&&this.activateTab(e)}activateTab(t){const{tabs:e}=this,s=this.activeTab;if(!(!e.includes(t)||s===t)){for(const i of e)i.active=i===t;if(s){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const o of e)o.active=o===s;return}t[ee](s)}this.updateFocusableTab(t),this.scrollToTab(t)}}updateFocusableTab(t){for(const e of this.tabs)e.tabIndex=e===t?0:-1}async handleKeydown(t){await 0;const e=t.key==="ArrowLeft",s=t.key==="ArrowRight",i=t.key==="Home",o=t.key==="End";if(t.defaultPrevented||!e&&!s&&!i&&!o)return;const{tabs:a}=this;if(a.length<2)return;t.preventDefault();let n;if(i||o)n=i?0:a.length-1;else{const p=getComputedStyle(this).direction==="rtl"?e:s,{focusedTab:c}=this;if(!c)n=p?0:a.length-1;else{const v=this.tabs.indexOf(c);n=p?v+1:v-1,n>=a.length?n=0:n<0&&(n=a.length-1)}}const l=a[n];l.focus(),this.autoActivate?this.activateTab(l):this.updateFocusableTab(l)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:t}=this;t&&this.updateFocusableTab(t)}handleSlotChange(){const t=this.tabs[0];!this.activeTab&&t&&this.activateTab(t),this.scrollToTab(this.activeTab)}}h([Wt({flatten:!0,selector:"[md-tab]"})],L.prototype,"tabs",void 0);h([f({type:Number,attribute:"active-tab-index"})],L.prototype,"activeTabIndex",null);h([f({type:Boolean,attribute:"auto-activate"})],L.prototype,"autoActivate",void 0);h([rt(".tabs")],L.prototype,"tabsScrollerElement",void 0);h([rt("slot")],L.prototype,"slotElement",void 0);function Ke(r){return r instanceof HTMLElement&&r.hasAttribute("md-tab")}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qe=C`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mt=class extends L{};mt.styles=[qe];mt=h([w("md-tabs")],mt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class se extends x{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}h([f({type:Boolean,attribute:"inline-icon"})],se.prototype,"inlineIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ze=C`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xe=C`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let vt=class extends se{};vt.styles=[Xe,Ze];vt=h([w("md-primary-tab")],vt);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Qe extends y{render(){return b`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ts=C`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let yt=class extends Qe{};yt.styles=[ts];yt=h([w("md-icon")],yt);var es=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,$=(r,t,e,s)=>{for(var i=s>1?void 0:s?ss(t,e):t,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(t,e,i):a(i))||i);return s&&i&&es(t,e,i),i};let g=class extends y{constructor(){super(...arguments),this.selectedTabIndex=0,this._hiddenTabs=[],this._disabledTabs=[],this._processedLabels=[],this._styles={"--md-sys-color-primary":"var(--primary-text-color)","--md-sys-color-on-surface-variant":"rgba(var(--rgb-primary-text-color), 0.6)","--md-primary-tab-container-color":"transparent","--md-primary-tab-label-text-font":"var(--app-font-family)","--md-primary-tab-active-indicator-color":"var(--primary-text-color)","--md-primary-tab-icon-color":"rgba(var(--rgb-primary-text-color), 0.6)","--md-primary-tab-active-focus-icon-color":"var(--primary-text-color)","--md-primary-tab-active-focus-label-text-color":"var(--primary-text-color)","--md-primary-tab-label-text-size":"var(--ha-font-size-m)"}}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}static async getConfigElement(){return document.createElement("tabbed-card-editor")}static getStubConfig(){return{options:{},tabs:[{card:{type:"entity",entity:"sun.sun"},attributes:{label:"Sun"}}]}}setConfig(r){if(!r)throw new Error("No configuration.");this._config=r,this._styles={...this._styles,...this._config.styles},this.loadCardHelpers()}willUpdate(r){var t;r.has("_helpers")&&this._createTabs(this._config),r.has("hass")&&((t=this._tabs)!=null&&t.length)&&this._tabs.forEach(e=>e.card.hass=this.hass)}async _createTabs(r){var s;const t=(s=r==null?void 0:r.options)==null?void 0:s.defaultTabIndex;if(typeof t>"u")this.selectedTabIndex=0;else if(typeof t=="string"){const i=await this.evaluateJinjaTemplate(this.hass,t||"0");this.selectedTabIndex=parseInt(i)||0}else this.selectedTabIndex=isFinite(t)?t:0;this._hiddenTabs=[],this._disabledTabs=[],this._processedLabels=[];const e=await Promise.all(r.tabs.map(async i=>{var l,d,p;let o=!1;((l=i.attributes)==null?void 0:l.hide)!==void 0&&(typeof i.attributes.hide=="string"?o=(await this.evaluateJinjaTemplate(this.hass,i.attributes.hide)).toLowerCase()==="true":o=!!i.attributes.hide),this._hiddenTabs.push(o);let a=!1;((d=i.attributes)==null?void 0:d.disable)!==void 0&&(typeof i.attributes.disable=="string"?a=(await this.evaluateJinjaTemplate(this.hass,i.attributes.disable)).toLowerCase()==="true":a=!!i.attributes.disable),this._disabledTabs.push(a);let n=((p=i==null?void 0:i.attributes)==null?void 0:p.label)||"";if(typeof n=="string"&&n.includes("{%")||n.includes("{{"))try{n=await this.evaluateJinjaTemplate(this.hass,n)}catch(c){console.error(`[tabbed-card-programmable] Error evaluating label template: ${c}`)}return this._processedLabels.push(n),{styles:i==null?void 0:i.styles,attributes:i==null?void 0:i.attributes,card:await this._createCard(i.card),processedLabel:n}}));if(this._tabs=e,this._hiddenTabs[this.selectedTabIndex]){const i=this._hiddenTabs.findIndex(o=>!o);i>=0&&(this.selectedTabIndex=i)}if(this._disabledTabs[this.selectedTabIndex]){for(let i=0;i<this._tabs.length;i++)if(!this._hiddenTabs[i]&&!this._disabledTabs[i]){this.selectedTabIndex=i;break}}}async _createCard(r){const t=await this._helpers.createCardElement(r);return t.hass=this.hass,t.addEventListener("ll-rebuild",e=>{e.stopPropagation(),this._rebuildCard(t,r)},{once:!0}),t}async _rebuildCard(r,t){console.log("_rebuildCard: ",r,t);const e=await this._helpers.createCardElement(t);r.replaceWith(e)}async evaluateJinjaTemplate(r,t){return new Promise(e=>{r.connection.subscribeMessage(s=>e(s.result.toString()),{type:"render_template",template:t})})}_onTabChange(r){const t=r.target.activeTabIndex;this._disabledTabs[t]||(this.selectedTabIndex=r.target.activeTabIndex,this.dispatchEvent(new CustomEvent("tabbed-card-change",{detail:{index:this.selectedTabIndex},bubbles:!0,composed:!0})))}render(){var e,s;if(!this.hass||!this._config||!this._helpers||!((e=this._tabs)!=null&&e.length))return b``;const r=this._tabs.map((i,o)=>({tab:i,index:o})).filter(({index:i})=>!this._hiddenTabs[i]);if(r.length===0)return b``;const t=r.findIndex(({index:i})=>i===this.selectedTabIndex);return b`
      <md-tabs
        @change=${this._onTabChange}
        style=${Ot(this._styles)}
        .activeTabIndex=${t>=0?t:0}
      >
        ${r.map(({tab:i,index:o})=>{var a,n,l,d;return b`
            <md-primary-tab
              style=${Ae(Ot({...(i==null?void 0:i.styles)||{},...this._disabledTabs[o]?{opacity:"0.5",cursor:"not-allowed","--md-sys-color-primary":"var(--disabled-text-color, rgba(var(--rgb-primary-text-color), 0.5))"}:{}}))}
              ?disabled=${this._disabledTabs[o]}
              ?inline-icon=${!((a=i==null?void 0:i.attributes)!=null&&a.stacked)}
            >
              ${(n=i==null?void 0:i.attributes)!=null&&n.icon?b`<ha-icon
                    slot="icon"
                    icon="${(l=i==null?void 0:i.attributes)==null?void 0:l.icon}"
                  ></ha-icon>`:b``}
              <span
                >${(i==null?void 0:i.processedLabel)||((d=i==null?void 0:i.attributes)==null?void 0:d.label)||u}</span
              >
            </md-primary-tab>
          `})}
      </md-tabs>
      <section>
        <article>
          ${(s=this._tabs.find((i,o)=>o==this.selectedTabIndex))==null?void 0:s.card}
        </article>
      </section>
    `}};$([f({attribute:!1})],g.prototype,"hass",2);$([f()],g.prototype,"selectedTabIndex",2);$([f()],g.prototype,"_helpers",2);$([_()],g.prototype,"_config",2);$([_()],g.prototype,"_tabs",2);$([_()],g.prototype,"_hiddenTabs",2);$([_()],g.prototype,"_disabledTabs",2);$([_()],g.prototype,"_processedLabels",2);$([f()],g.prototype,"_styles",2);g=$([w("tabbed-card-programmable")],g);window.customCards=window.customCards||[];window.customCards.push({type:"tabbed-card-programmable",name:"Tabbed Card Programmable",description:"A tabbed card of cards. Programmable."});
