import{a as C,t as q,d as De,c as Le}from"../chunks/disclose-version.i85zsuNq.js";import{k as b,l as ye,as as pe,j as be,at as Se,au as Y,q as L,ac as re,U as le,u as D,s as G,K as se,y as ne,a9 as fe,av as ie,p as R,t as z,ap as He,Y as Me,i as Oe,al as ke,H as Re,r as oe,m as ve,n as U,aw as B,e as ce,ax as qe,a8 as Pe,ay as Ve,N as je,ai as Ye,aa as ze,az as Be,aA as Ge,aB as Ke,ag as Ue,an as we,x as xe,ao as te,$ as Fe,aC as Qe,aD as Xe,aE as Ze,h as Je,aF as We,ab as $e,O as Ae,a2 as F,Q as Ee,T as E,V as T,a3 as O,d as p,a1 as ue,c as H,ar as Q,aG as ea}from"../chunks/runtime.DHzji0RL.js";import{b as aa,p as M,i as Te,a as _e}from"../chunks/props.DOxbcUH4.js";import{d as ra,l as Ie,e as sa,r as ta,a as la}from"../chunks/store.Dk9jwj7E.js";import{b as K}from"../chunks/paths.D1jbnO4G.js";const X=0,j=1,Z=2;function na(e,a,r,s,l){b&&ye();var i=e,f=pe(),d=Me,u=le,o,n,_,v=(f?G:se)(void 0),c=(f?G:se)(void 0),m=!1;function y(t,g){m=!0,g&&(ne(h),fe(h),ie(d));try{t===X&&r&&(o?R(o):o=L(()=>r(i))),t===j&&s&&(n?R(n):n=L(()=>s(i,v))),t===Z&&l&&(_?R(_):_=L(()=>l(i,c))),t!==X&&o&&z(o,()=>o=null),t!==j&&n&&z(n,()=>n=null),t!==Z&&_&&z(_,()=>_=null)}finally{g&&(ie(null),fe(null),ne(null),He())}}var h=be(()=>{if(u!==(u=a())){if(Se(u)){var t=u;m=!1,t.then(g=>{t===u&&(Y(v,g),y(j,!0))},g=>{if(t===u)throw Y(c,g),y(Z,!0),c.v}),b?r&&(o=L(()=>r(i))):re(()=>{m||y(X,!0)})}else Y(v,u),y(j,!1);return()=>u=le}});b&&(i=D)}function fa(e,a){return a}function ia(e,a,r,s){for(var l=[],i=a.length,f=0;f<i;f++)qe(a[f].e,l,!0);var d=i>0&&l.length===0&&r!==null;if(d){var u=r.parentNode;Pe(u),u.append(r),s.clear(),A(e,a[0].prev,a[i-1].next)}Ve(l,()=>{for(var o=0;o<i;o++){var n=a[o];d||(s.delete(n.k),A(e,n.prev,n.next)),je(n.e,!d)}})}function oa(e,a,r,s,l,i=null){var f=e,d={flags:a,items:new Map,first:null};b&&ye();var u=null,o=!1;be(()=>{var n=r(),_=Oe(n)?n:n==null?[]:ke(n),v=_.length;if(o&&v===0)return;o=v===0;let c=!1;if(b){var m=f.data===Re;m!==(v===0)&&(f=oe(),ve(f),U(!1),c=!0)}if(b){for(var y=null,h,t=0;t<v;t++){if(D.nodeType===8&&D.data===Ye){f=D,c=!0,U(!1);break}var g=_[t],x=s(g,t);h=Ne(D,d,y,null,g,x,t,l,a),d.items.set(x,h),y=h}v>0&&ve(oe())}if(!b){var k=ze;va(_,d,f,l,a,(k.f&B)!==0,s)}i!==null&&(v===0?u?R(u):u=L(()=>i(f)):u!==null&&z(u,()=>{u=null})),c&&U(!0),r()}),b&&(f=D)}function va(e,a,r,s,l,i,f){var d=e.length,u=a.items,o=a.first,n=o,_,v=null,c=[],m=[],y,h,t,g;for(g=0;g<d;g+=1){if(y=e[g],h=f(y,g),t=u.get(h),t===void 0){var x=n?n.e.nodes_start:r;v=Ne(x,a,v,v===null?a.first:v.next,y,h,g,s,l),u.set(h,v),c=[],m=[],n=v.next;continue}if(ca(t,y,g),t.e.f&B&&R(t.e),t!==n){if(_!==void 0&&_.has(t)){if(c.length<m.length){var k=m[0],w;v=k.prev;var P=c[0],S=c[c.length-1];for(w=0;w<c.length;w+=1)de(c[w],k,r);for(w=0;w<m.length;w+=1)_.delete(m[w]);A(a,P.prev,S.next),A(a,v,P),A(a,S,k),n=k,v=S,g-=1,c=[],m=[]}else _.delete(t),de(t,n,r),A(a,t.prev,t.next),A(a,t,v===null?a.first:v.next),A(a,v,t),v=t;continue}for(c=[],m=[];n!==null&&n.k!==h;)(i||!(n.e.f&B))&&(_??(_=new Set)).add(n),m.push(n),n=n.next;if(n===null)continue;t=n}c.push(t),v=t,n=t.next}if(n!==null||_!==void 0){for(var N=_===void 0?[]:ke(_);n!==null;)(i||!(n.e.f&B))&&N.push(n),n=n.next;var V=N.length;if(V>0){var Ce=null;ia(a,N,Ce,u)}}ce.first=a.first&&a.first.e,ce.last=v&&v.e}function ca(e,a,r,s){Y(e.v,a),e.i=r}function Ne(e,a,r,s,l,i,f,d,u){var o=(u&Ge)!==0,n=(u&Ke)===0,_=o?n?se(l):G(l):l,v=u&Be?G(f):f,c={i:v,v:_,k:i,a:null,e:null,prev:r,next:s};try{return c.e=L(()=>d(e,_,v),b),c.e.prev=r&&r.e,c.e.next=s&&s.e,r===null?a.first=c:(r.next=c,r.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function de(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,l=a?a.e.nodes_start:r,i=e.e.nodes_start;i!==s;){var f=Ue(i);l.before(i),i=f}}function A(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function he(e,a,r){we(()=>{var s=xe(()=>a(e,r==null?void 0:r())||{});if(r&&(s!=null&&s.update)){var l=!1,i={};te(()=>{var f=r();Fe(f),l&&Qe(i,f)&&(i=f,s.update(f))}),l=!0}if(s!=null&&s.destroy)return()=>s.destroy()})}function ua(e){if(b){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var s=e.value;I(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var l=e.checked;I(e,"checked",null),e.checked=l}}};e.__on_r=r,Xe(r),ra()}}function I(e,a,r,s){var l=e.__attributes??(e.__attributes={});b&&(l[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||l[a]!==(l[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Ze]=r),r==null?e.removeAttribute(a):typeof r!="string"&&_a(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var ge=new Map;function _a(e){var a=ge.get(e.nodeName);if(a)return a;ge.set(e.nodeName,a=[]);for(var r,s=e,l=Element.prototype;l!==s;){r=We(s);for(var i in r)r[i].set&&a.push(i);s=Je(s)}return a}function da(e,a,r){if(r){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function ha(e,a,r=a){var s=pe();Ie(e,"input",l=>{var i=l?e.defaultValue:e.value;if(i=W(e)?$(i):i,r(i),s&&i!==(i=a())){var f=e.selectionStart,d=e.selectionEnd;e.value=i??"",d!==null&&(e.selectionStart=f,e.selectionEnd=Math.min(d,e.value.length))}}),(b&&e.defaultValue!==e.value||xe(a)==null&&e.value)&&r(W(e)?$(e.value):e.value),te(()=>{var l=a();W(e)&&l===$(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}const J=new Set;function ga(e,a,r,s,l=s){var i=r.getAttribute("type")==="checkbox",f=e;let d=!1;if(a!==null)for(var u of a)f=f[u]??(f[u]=[]);f.push(r),Ie(r,"change",()=>{var o=r.__value;i&&(o=me(f,o,r.checked)),l(o)},()=>l(i?[]:null)),te(()=>{var o=s();if(b&&r.defaultChecked!==r.checked){d=!0;return}i?(o=o||[],r.checked=o.includes(r.__value)):r.checked=aa(r.__value,o)}),$e(()=>{var o=f.indexOf(r);o!==-1&&f.splice(o,1)}),J.has(f)||(J.add(f),re(()=>{f.sort((o,n)=>o.compareDocumentPosition(n)===4?-1:1),J.delete(f)})),re(()=>{if(d){var o;if(i)o=me(f,o,r.checked);else{var n=f.find(_=>_.checked);o=n==null?void 0:n.__value}l(o)}})}function me(e,a,r){for(var s=new Set,l=0;l<e.length;l+=1)e[l].checked&&s.add(e[l].__value);return r||s.delete(a),Array.from(s)}function W(e){var a=e.type;return a==="number"||a==="range"}function $(e){return e===""?null:+e}const ma=!0,Da=Object.freeze(Object.defineProperty({__proto__:null,prerender:ma},Symbol.toStringTag,{value:"Module"}));function ee(e){e.oninput=a=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`}}function ae(e,a=!1){e.onkeydown=async r=>{var s,l;r.key==="Enter"&&!r.shiftKey&&e.value&&(r.preventDefault(),a?(s=e.form)==null||s.submit():(l=e.form)==null||l.dispatchEvent(new CustomEvent("submit",{detail:r})))}}var ya=q('<label class="type flex gap-2 svelte-1gr95j2"><img class="opacity-50 svelte-1gr95j2"> <input type="radio" name="type" class="hidden"> <!></label>'),pa=q('<form id="form" class="svelte-1gr95j2"><fieldset class="flex flex-wrap p-3 svelte-1gr95j2"><label class="flex-[100%]"><textarea class="font-inherit w-full resize-none border-0 bg-transparent outline-none svelte-1gr95j2" name="request" rows="1"></textarea></label> <!> <button class="svelte-1gr95j2"><img alt="alt" class="svelte-1gr95j2"></button></fieldset></form>');function ba(e,a){Ae(a,!0);const r=[];let s=M(a,"type",7,"Image"),l=M(a,"value",15,""),i=M(a,"types",19,()=>["Text","Image"]),f=M(a,"status",3,""),d=M(a,"native",3,!1),u=" Ask anything";var o=pa(),n=E(o),_=E(n),v=E(_);ta(v),he(v,h=>ee==null?void 0:ee(h)),he(v,(h,t)=>ae==null?void 0:ae(h,t),d),we(()=>ha(v,l)),T(_);var c=O(_,2);oa(c,17,i,fa,(h,t)=>{var g=ya(),x=E(g),k=O(x,2);ua(k);var w,P=O(k,2);{var S=N=>{var V=De();F(()=>la(V,p(t))),C(N,V)};Te(P,N=>{s()===p(t)&&N(S)})}T(g),F(()=>{da(g,"checked",s()===p(t)),I(x,"alt",p(t)),I(x,"src",`${K??""}/${p(t)??""}.svg`),w!==(w=p(t))&&(k.value=(k.__value=p(t))==null?"":p(t))}),ga(r,[],k,()=>(p(t),s()),s),C(h,g)});var m=O(c,2),y=E(m);T(m),T(n),T(o),F(()=>{v.disabled=f().length>0,I(v,"placeholder",u),I(y,"src",`${K??""}/${(f()?"rectangle":"arrow-up")??""}.svg`)}),sa("submit",o,function(...h){var t;(t=a.onsubmit)==null||t.apply(this,h)}),C(e,o),Ee()}function ka(){let e,a;return{promise:new Promise((s,l)=>{e=s,a=l}),resolve:e,reject:a}}var wa=q('<img alt="Response">'),xa=q('<span id="loader" class="svelte-1goryy2"><img alt="progress"></span>'),Aa=q(`<section id="chat" class="svelte-1goryy2"><p><!></p> <br> <p>Please create an image of a vintage-style motorcycle parked on a snow-covered road, surrounded
		by evergreen trees. The motorcycle features a sleek design with a vibrant blue fuel tank, black
		accents, and rugged tires suitable for various terrains. The setting suggests a cold winter day,
		with soft sunlight filtering through the trees, creating a warm, inviting atmosphere against the
		chilly backdrop.</p></section> <!>`,1);function La(e,a){Ae(a,!0);let r=Q(""),s=Q(void 0),l=Q(" Ask anything");function i(v){H(l,"loading..."),H(r,""),H(s,_e(ka())),setTimeout(()=>{var c;(c=p(s))==null||c.resolve("response.png"),H(l," Ask anything")},1e3)}var f=Aa(),d=ue(f),u=E(d),o=E(u);{var n=v=>{var c=Le(),m=ue(c);na(m,()=>p(s).promise,y=>{var h=xa(),t=E(h);I(t,"src",`${K??""}/progress.svg`),T(h),C(y,h)},(y,h)=>{var t=wa();I(t,"src",`${K??""}/response.png`),C(y,t)}),C(v,c)};Te(o,v=>{p(s)&&v(n)})}T(u),ea(4),T(d);var _=O(d,2);ba(_,{onsubmit:i,native:!1,get value(){return p(r)},set value(v){H(r,_e(v))}}),C(e,f),Ee()}export{La as component,Da as universal};
