/* eslint-disable */
/* Partytown 0.0.18 - MIT builder.io */
(t=>{const e=Symbol(),r=Symbol(),n=Symbol(),s=Symbol(),i=Symbol(),o=Symbol(),a=new Map,c={},l=new WeakMap,u={},h={},$={},d={},p=new Map,g=new Map,m="getClientRects,getBoundingClientRect".split(","),f="innerHeight,innerWidth,outerHeight,outerWidth,clientHeight,clientWidth,clientTop,clientLeft,scrollHeight,scrollWidth,scrollTop,scrollLeft,offsetHeight,offsetWidth,offsetTop,offsetLeft".split(","),w="childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling",y=()=>!0,I=t=>t.length,v=(t,e)=>Object.defineProperty(t,"name",{value:e}),E=[],b=()=>Math.round(9999999999*Math.random()+4),T="text/partytown",S=(t,e,r)=>Object.defineProperty(t.prototype,e,{...r,configurable:!0}),N=(t,e)=>Object.defineProperties(t.prototype,e),x=(t,e,r)=>S(t,e,{value:r,writable:!0}),M=[],L=(t,n,s,o,a)=>{const c=t[r];if(M.push({P:t[e],t:c,a:[...t[i],...n],c:o,o:a}),!s)return W();setTimeout(W,40)},W=()=>{if(I(M)){const t=M[I(M)-1],e={C:b(),J:M.slice()};M.length=0;const r=((t,e)=>{const r=new XMLHttpRequest,n=t.z+"proxytown";return r.open("POST",n,!1),r.send(JSON.stringify(e)),JSON.parse(r.responseText)})($,e),n=r.w,s=nt(t.t,t.a,r.H);if(r.l){if(n)return Promise.reject(r.l);throw new Error(r.l)}return n?Promise.resolve(s):s}},C=(t,e,r)=>L(t,e,!1,void 0,r),O=(t,e,r)=>{const n=[...e,rt(t,r),0];L(t,n,!0)},R=(t,e,r,n)=>{const s=e[I(e)-1],i=H.includes(s),o=[...e,rt(t,r)],a=L(t,o,i,n);return i||m.includes(s)||p.clear(),a},H="addEventListener,removeEventListener,createElement,createTextNode,insertBefore,insertRule,deleteRule,setAttribute,setItem,removeItem,classList.add,classList.remove,classList.toggle".split(","),P=(t,e,r,n)=>{let s=a.get(e);return s||(s=A(t,e,r,n),a.set(e,s)),s},A=(e,r,n,s)=>new(u[n]?u[n]:n.includes("-")?u.UNKNOWN:t.HTMLElement)(e,r,[],n,s),j=(t,e)=>e in t[o],k=(t,e)=>t[o][e],D=(t,e,r)=>t[o][e]=r,B=(t,e,r,n)=>{let s="";try{t.g=e,F(t,r)}catch(t){console.error(r,t),s=String(t.stack||t)+""}return t.g=-1,s},F=(t,e)=>{new Function(`with(this){${e}}`).apply(t.M)},U=(t,e,r)=>{(r=k(t,e))&&setTimeout((()=>r.map((t=>t({type:e})))),undefined)},_=(t,e,r)=>{for(r=t.A;!r.host&&(r=(t=d[t.E]).A,t.P!==t.E););const n=new URL(e||"",r);if($.e.resolveUrl){const t=$.e.resolveUrl(n,r);if(t)return t}return n},z=(t,e)=>_(t,e)+"",J=t=>_(Q(t),k(t,4)),q=()=>`<script src=${JSON.stringify($.z+"partytown.js")} async defer><\/script>`,G=t=>class{constructor(){this.s="",this.l=[],this.e=[]}get src(){return this.s}set src(e){fetch(z(t,e),{mode:"no-cors",keepalive:!0}).then((t=>{t.ok||0===t.status?this.l.map((t=>t({type:"load"}))):this.e.map((t=>t({type:"error"})))}),(()=>this.e.forEach((t=>t({type:"error"})))))}addEventListener(t,e){"load"===t&&this.l.push(e),"error"===t&&this.e.push(e)}get onload(){return this.l[0]}set onload(t){this.l=[t]}get onerror(){return this.e[0]}set onerror(t){this.e=[t]}};class V extends URL{assign(){}reload(){}replace(){}}class X{constructor(t,a,c,l,u){this[e]=t,this[r]=a,this[i]=c||[],this[n]=l,this[o]={},u&&(this[s]=u)}}class Y extends X{constructor(t,e,r,n){return super(t,e,r,n),new Proxy(this,{get:(t,e)=>C(t,[e]),set:(t,e,r)=>(O(t,[e],r),!0)})}}class Window extends X{constructor(e,r,n){super(e,0);for(const e in t)if(!(e in this)&&"onmessage"!==e){const r=t[e];if(null!=r){const n="function"==typeof r&&!r.toString().startsWith("class");this[e]=n?r.bind(t):r}}Object.getOwnPropertyNames(t).map((e=>{e in this||(this[e]=t[e])}));for(const t in h)this[t]=v(class{constructor(...r){const n=new(0,h[t])(e,b()),s=rt(n,r);return L(n,[1,t,s]),n}},t);const s=new Proxy(this,{has:()=>!0});return d[e]={P:e,E:r,M:s,j:A(e,1,"#document"),k:A(e,2,"HTML"),p:A(e,3,"HEAD"),d:A(e,4,"BODY"),A:new V(n)},this.requestAnimationFrame=t=>setTimeout((()=>t(performance.now())),9),this.cancelAnimationFrame=t=>clearTimeout(t),s}get Audio(){return t=Q(this),class{constructor(e){const r=t.j.createElement("audio");return r.src=e,r}};var t}get body(){return Q(this).d}get document(){return Q(this).j}get documentElement(){return Q(this).k}get frameElement(){const t=Q(this),e=t.E,r=t.P;return r===e?null:P(e,r,"IFRAME")}get globalThis(){return this}get head(){return Q(this).p}get location(){return Q(this).A}set location(t){Q(this).A.href=t+""}get Image(){return G(Q(this))}get name(){const t=this[e];return name+t}get navigator(){return(e=>{const r=t.navigator;return r.sendBeacon=(t,r)=>{const n=d[e];try{return fetch(z(n,t),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(t){return console.error(t),!1}},r})(this[e])}get origin(){return Q(this).A.origin}get parent(){return d[Q(this).E].M}get self(){return this}get top(){for(const t in d)if(d[t].P===d[t].E)return d[t].M}get window(){return this}}const K=({P:t,E:e,L:r})=>{d[t]?d[t].A.href=r:new Window(t,e,r),$.F(["pt-6",t])},Q=t=>d[t[e]];class Node extends X{appendChild(t){return this.insertBefore(t,null)}get href(){}set href(t){}insertBefore(t,s){const i=t[e]=this[e],o=t[r],a=t[n],c="SCRIPT"===a,l="IFRAME"===a;if(c){const e=k(t,3);if(e){const r=B(Q(t),o,e),n=r?"pterror":"ptid",s=r||o;O(t,["type"],T+"-x"),O(t,["dataset",n],s),O(t,["innerHTML"],e)}}return R(this,["insertBefore"],[t,s]),l&&(t=>{let e=0;const n=t[r],s=()=>{if(d[n]&&d[n].v){let e=k(t,1)?"error":"load",r=k(t,e);r&&r.map((t=>t({type:e})))}else if(e++>2e3){let e=k(t,"error");e&&e.map((t=>t({type:"error"}))),console.error("Timeout")}else setTimeout(s,9)};s()})(t),c&&(W(),$.F(["pt-6",i])),t}get nodeName(){return this[n]}get nodeType(){return 3}get ownerDocument(){return Q(this).j}}class Z{constructor(t){this.name=t[0],this.value=t[1]}get nodeName(){return this.name}get nodeType(){return 2}}class NodeList{constructor(t){(this._=t).map(((t,e)=>this[e]=t))}entries(){return this._.entries()}forEach(t,e){this._.map(t,e)}item(t){return this[t]}keys(){return this._.keys()}get length(){return I(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}}const tt=(t,n,s,i)=>{if(void 0!==s){let u=typeof s;if("string"===u||"boolean"===u||"number"===u||null==s)return[9,s];if("function"===u)return[10,{P:t,t:n,G:(o=s,(a=l.get(o))||(l.set(o,a=b()),c[a]=o),a)}];if(i=i||new Set,Array.isArray(s))return i.has(s)?[0,[]]:[0,s.map((e=>tt(t,n,e,i)))];if("object"===u)return"number"==typeof s[r]?[6,{P:s[e],t:s[r]}]:s instanceof Event?[4,et(t,n,s,!1,i)]:[8,et(t,n,s,!0,i)]}var o,a},et=(t,e,r,n,s,i,o,a)=>{if(i={},!s.has(r))for(o in s.add(r),r)a=r[o],(n||"function"!=typeof a)&&(i[o]=tt(t,e,a,s));return i},rt=(t,n)=>t?tt(t[e],t[r],n):[9,n],nt=(t,e,r,n,s)=>{if(r){if(n=r[0],s=r[1],9===n||2===n||3===n)return s;if(10===n)return at(e,s);if(6===n)return it(s);if(7===n)return new NodeList(s.map(it));if(1===n)return new Z(s);if(0===n)return s.map((r=>nt(t,e,r)));if(4===n)return i=st(t,e,s),new Proxy(new Event(i.type,i),{get:(t,e)=>e in i?i[e]:t[String(e)]});if(8===n)return st(t,e,s)}var i},st=(t,e,r,n,s)=>{for(s in n={},r)n[s]=nt(t,[...e,s],r[s]);return n},it=({P:t,t:e,D:r})=>ot(t,e)||P(t,e,r),ot=(t,e)=>{const r=d[t];return 0===e?r.M:1===e?r.j:2===e?r.k:3===e?r.p:4===e?r.d:void 0},at=(t,{P:e,t:r,D:n,G:s})=>(c[s]||l.set(c[s]=function(...s){const i=P(e,r,n);return R(i,t,s)},s),c[s]),ct={sheet:{get(){return new lt(this)}}};class lt{constructor(t){this.ownerNode=t}get cssRules(){const t=this.ownerNode;return new Proxy({},{get(e,r){const n=String(r);return"item"===n?e=>ht(t,e):"length"===n?ut(t).length:isNaN(n)?e[r]:ht(t,n)}})}insertRule(t,e){const r=ut(this.ownerNode);return(e=void 0===e?0:e)>=0&&e<=r.length&&(R(this.ownerNode,["sheet","insertRule"],[t,e]),r.splice(e,0,0)),e}deleteRule(t){R(this.ownerNode,["sheet","deleteRule"],[t]),ut(this.ownerNode).splice(t,1)}}const ut=t=>{let e=k(t,2);return e||(e=C(t,["sheet","cssRules"]),D(t,2,e)),e},ht=(t,e)=>{let r=ut(t);return 0===r[e]&&(r[e]=C(t,["sheet","cssRules",parseInt(e,10)])),r[e]},$t={body:{get(){return Q(this).d}},createElement:{value(t){t=t.toUpperCase();const r=this[e],n=b(),s=P(r,n,t);return R(this,["createElement"],[t],n),"IFRAME"===t?(K({P:n,E:r,L:"about:blank"}),O(s,["srcdoc"],q())):"SCRIPT"===t&&O(s,["type"],T),s}},createElementNS:{value(t,r){r=r.toLowerCase();const n=this[e],s=b(),i=P(n,s,r,t);return R(this,["createElementNS"],[t,r],s),i}},createTextNode:{value(t){const r=this[e],n=b(),s=P(r,n,"#text");return R(this,["createTextNode"],[t],n),s}},createEvent:{value:t=>new Event(t)},currentScript:{get(){const t=this[e],r=Q(this).g;return r>0?P(t,r,"SCRIPT"):null}},defaultView:{get(){return Q(this).M}},documentElement:{get(){return Q(this).k}},getElementsByTagName:{value(t){return"BODY"===(t=t.toUpperCase())?[Q(this).d]:"HEAD"===t?[Q(this).p]:R(this,["getElementsByTagName"],[t])}},head:{get(){return Q(this).p}},implementation:{value:{hasFeature:y}},location:{get(){return Q(this).A},set(t){Q(this).A.href=t+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"}},dt={parentElement:{get(){return this.parentNode}},parentNode:{get(){return Q(this).k}}},pt={parentElement:{value:null},parentNode:{get(){return Q(this).j}}},gt={localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[s]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}},mt={hash:{get(){return J(this).hash}},host:{get(){return J(this).host}},hostname:{get(){return J(this).hostname}},href:{get(){return J(this).href},set(t){D(this,4,t+=""),O(this,["href"],t)}},origin:{get(){return J(this).origin}},pathname:{get(){return J(this).pathname}},port:{get(){return J(this).port}},protocol:{get(){return J(this).protocol}},search:{get(){return J(this).search}}},ft={getContext:{value(...n){const s=["getContext",rt(this,n)];return new t.CanvasRenderingContext2D(this[e],this[r],s)}}},wt={addEventListener:{value(...t){const e=t[0],r=k(this,e)||[];r.push(t[1]),D(this,e,r)}},async:{get:y,set:y},defer:{get:y,set:y},onload:{get(){let t=k(this,"load");return t&&t[0]||null},set(t){D(this,"load",t?[t]:null)}},onerror:{get(){let t=k(this,"error");return t&&t[0]||null},set(t){D(this,"error",t?[t]:null)}}},yt={contentDocument:{get(){return this.contentWindow.document}},contentWindow:{get(){const t=this[r];return d[t].M}},src:{get(){return k(this,4)||""},set(t){let e,r=new XMLHttpRequest;t=z(Q(this),t),D(this,1,void 0),D(this,4,t),r.open("GET",t,!1),r.send(),e=r.status,e>199&&e<300?O(this,["srcdoc"],((t,e)=>`<base href="${t}">`+e.replace(/<script>/g,'<script type="text/partytown">').replace(/<script /g,'<script type="text/partytown" ').replace(/text\/javascript/g,T)+q())(t,r.responseText)):D(this,1,e)}},...wt},It={get(){return k(this,3)||""},set(t){D(this,3,t)}},vt={innerHTML:It,innerText:It,src:{get(){return k(this,4)||""},set(t){t=z(Q(this),t),D(this,4,t),O(this,["src"],t)}},getAttribute:{value(t){return"src"===t?this.src:R(this,["getAttribute"],[t])}},setAttribute:{value(t,e){"src"===t?this.src=e:R(this,["setAttribute"],[t,e])}},textContent:It,type:{get(){return C(this,["type"])},set(t){"text/javascript"!==t&&O(this,["type"],t)}},...wt},Et=([s,o,a,c,l])=>{const $=bt[s]?Y:"Object"===o||"EventTarget"===o?X:t[o],d=t[s]=v(t[s]||class extends ${},s);12===c&&(h[s]=d),l&&(u[l]=d),a.map((([s,o,a])=>{s in d.prototype||s in $.prototype||("string"==typeof o?S(d,s,{get(){if(!j(this,s)){const a=this[e],c=this[r],l=[...this[i],s],u=this[n],h=t[o];D(this,s,h?new h(a,c,l,u):void 0)}return k(this,s)},set(t){D(this,s,t)}}):5===o?x(d,s,(function(...t){return R(this,[s],t)})):o>0&&(void 0!==a?x(d,s,a):S(d,s,{get(){return C(this,[s])},set(t){return O(this,[s],t)}})))}))},bt={CSSStyleDeclaration:1,DOMStringMap:1,NamedNodeMap:1},Tt=(t,e)=>x(t,"nodeType",e),St=(t,e)=>e.split(",").map((e=>S(t,e,{get(){let t=Nt(this,e),r=g.get(t);return r||(r=C(this,[e]),g.set(t,r)),r}}))),Nt=(t,n)=>t[e]+"."+t[r]+"."+n,xt=(t,e)=>e.split(",").map((e=>S(t,e,{get(){return j(this,e)||D(this,e,C(this,[e])),k(this,e)},set(t){D(this,e,t)}}))),Mt=(t,e)=>Object.keys(e).map((r=>x(t,r,e[r]))),Lt=t=>f.map((e=>S(t,e,{get(){const t=p.get(Nt(this,e));if("number"==typeof t)return t;const r=C(this,[e],f);return Object.entries(r).map((([t,e])=>{p.set(Nt(this,t),e)})),r[e]}}))),Wt=t=>m.map((e=>{t.prototype[e]=function(){let t=Nt(this,e),r=p.get(t);return r||(r=R(this,[e],E),p.set(t,r)),r}})),Ct=[],Ot=e=>{const r=e.data,n=r[0];if($.v)if("pt-6"===n)(async e=>{let r,n,s=e.P,i=e.t,o=P(s,i,"SCRIPT"),a=e.f,c=e.L,l="",u=d[s];if(c)try{n=_(u,c),c=n+"",D(o,4,c),r=await t.fetch(c),r.ok?(a=await r.text(),u.g=i,F(u,a),U(o,"load")):(console.error(r.status,"url:",c),l=r.statusText,U(o,"error"))}catch(t){console.error("url:",c,t),l=String(t.stack||t)+"",U(o,"error")}else a&&(l=B(u,i,a));u.g=-1,$.F(["pt-5",s,i,l])})(r[1]);else if("pt-7"===n)(({t:t,G:e,K:r,b:n})=>{if(c[e])try{const s=nt(t,[],r),i=nt(t,[],n);c[e].apply(s,i)}catch(t){console.error(t)}})(r[1]);else if("pt-8"===n)(({P:e,t:r,m:n,b:s})=>{try{const i=d[e].M,o=n[0]in i?i:n[0]in t?t:{},a=nt(r,[],s),c=o[n[0]];Array.isArray(c)?c.push(...a):"function"==typeof c&&c.apply(o,a)}catch(t){console.error(t)}})(r[1]);else if("pt-3"===n){if(K(r[1]),$.e.useExternalWorker){const{P:e}=r[1],n=Object.getOwnPropertyDescriptors(Object.getPrototypeOf(d[e].M));Object.entries(n).forEach((([r,n])=>{if(!["constructor"].includes(r)&&!t[r])try{t[r]=d[e].M[r]}catch(t){console.error("Error defining window property to worker scope",t)}}))}}else"pt-4"===n&&(d[r[1]].v=1);else"pt-1"===n?(s=r[1],Object.assign($,s),$.e=JSON.parse($.e),(t=>{let e=$.e[t];e&&((e.startsWith("(")||e.startsWith("function"))&&(e=`${t}:${e}`),Object.assign($.e,new Function(`return{${e}}`)()))})("resolveUrl"),$.n=($.e.forward||E).map((t=>t[0])),$.F=postMessage.bind(t),t.Node=Node,t.Window=Window,t.CSSStyleSheet=lt,$.s.map(Et),(()=>{const e=t.Document,r=t.DocumentFragment,n=t.Element;"atob,btoa,crypto,indexedDB,performance,setTimeout,setInterval,clearTimeout,clearInterval".split(",").map((t=>delete Window.prototype[t])),N(n,gt),N(e,$t),N(t.HTMLAnchorElement,mt),N(t.HTMLCanvasElement,ft),N(t.HTMLIFrameElement,yt),N(t.HTMLScriptElement,vt),N(t.HTMLStyleElement,ct),N(t.HTMLHeadElement,dt),N(t.HTMLBodyElement,dt),N(t.HTMLHtmlElement,pt),Mt(lt,{type:"text/css"}),Tt(t.Comment,8),Tt(t.DocumentType,10),Tt(r,11),St(Node,"childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling"),St(n,w),St(r,w),Lt(n),Lt(Window),Wt(n),xt(e,"compatMode,referrer")})(),$.v=1,$.F(["pt-2"]),Ct.slice().forEach(Ot),Ct.length=0):Ct.push(e);var s};t.onmessage=Ot,postMessage(["pt-0"])})(self);
