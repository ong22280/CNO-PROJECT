(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function o9(e,c){const a=Object.create(null),s=e.split(",");for(let t=0;t<s.length;t++)a[s[t]]=!0;return c?t=>!!a[t.toLowerCase()]:t=>!!a[t]}const $d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=o9($d);function ot(e){return!!e||e===""}function l9(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++){const s=e[a],t=I1(s)?Kd(s):l9(s);if(t)for(const r in t)c[r]=t[r]}return c}else{if(I1(e))return e;if(b1(e))return e}}const Wd=/;(?![^(]*\))/g,jd=/:(.+)/;function Kd(e){const c={};return e.split(Wd).forEach(a=>{if(a){const s=a.split(jd);s.length>1&&(c[s[0].trim()]=s[1].trim())}}),c}function B6(e){let c="";if(I1(e))c=e;else if(Q(e))for(let a=0;a<e.length;a++){const s=B6(e[a]);s&&(c+=s+" ")}else if(b1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const l2=e=>I1(e)?e:e==null?"":Q(e)||b1(e)&&(e.toString===ut||!X(e.toString))?JSON.stringify(e,lt,2):String(e),lt=(e,c)=>c&&c.__v_isRef?lt(e,c.value):m4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[s,t])=>(a[`${s} =>`]=t,a),{})}:ft(c)?{[`Set(${c.size})`]:[...c.values()]}:b1(c)&&!Q(c)&&!mt(c)?String(c):c,m1={},u4=[],S2=()=>{},Zd=()=>!1,Qd=/^on[^a-z]/,x5=e=>Qd.test(e),f9=e=>e.startsWith("onUpdate:"),e2=Object.assign,h9=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},Yd=Object.prototype.hasOwnProperty,t1=(e,c)=>Yd.call(e,c),Q=Array.isArray,m4=e=>y5(e)==="[object Map]",ft=e=>y5(e)==="[object Set]",X=e=>typeof e=="function",I1=e=>typeof e=="string",u9=e=>typeof e=="symbol",b1=e=>e!==null&&typeof e=="object",ht=e=>b1(e)&&X(e.then)&&X(e.catch),ut=Object.prototype.toString,y5=e=>ut.call(e),Xd=e=>y5(e).slice(8,-1),mt=e=>y5(e)==="[object Object]",m9=e=>I1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,D8=o9(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),S5=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},Jd=/-(\w)/g,B2=S5(e=>e.replace(Jd,(c,a)=>a?a.toUpperCase():"")),cz=/\B([A-Z])/g,_4=S5(e=>e.replace(cz,"-$1").toLowerCase()),N5=S5(e=>e.charAt(0).toUpperCase()+e.slice(1)),T0=S5(e=>e?`on${N5(e)}`:""),m6=(e,c)=>!Object.is(e,c),R8=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},Z8=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},s7=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let Oe;const ez=()=>Oe||(Oe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let P2;class vt{constructor(c=!1){this.detached=c,this.active=!0,this.effects=[],this.cleanups=[],this.parent=P2,!c&&P2&&(this.index=(P2.scopes||(P2.scopes=[])).push(this)-1)}run(c){if(this.active){const a=P2;try{return P2=this,c()}finally{P2=a}}}on(){P2=this}off(){P2=this.parent}stop(c){if(this.active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function az(e){return new vt(e)}function sz(e,c=P2){c&&c.active&&c.effects.push(e)}const v9=e=>{const c=new Set(e);return c.w=0,c.n=0,c},Ct=e=>(e.w&C3)>0,pt=e=>(e.n&C3)>0,tz=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=C3},rz=e=>{const{deps:c}=e;if(c.length){let a=0;for(let s=0;s<c.length;s++){const t=c[s];Ct(t)&&!pt(t)?t.delete(e):c[a++]=t,t.w&=~C3,t.n&=~C3}c.length=a}},t7=new WeakMap;let Q4=0,C3=1;const r7=30;let V2;const F3=Symbol(""),n7=Symbol("");class C9{constructor(c,a=null,s){this.fn=c,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,sz(this,s)}run(){if(!this.active)return this.fn();let c=V2,a=l3;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=V2,V2=this,l3=!0,C3=1<<++Q4,Q4<=r7?tz(this):qe(this),this.fn()}finally{Q4<=r7&&rz(this),C3=1<<--Q4,V2=this.parent,l3=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){V2===this?this.deferStop=!0:this.active&&(qe(this),this.onStop&&this.onStop(),this.active=!1)}}function qe(e){const{deps:c}=e;if(c.length){for(let a=0;a<c.length;a++)c[a].delete(e);c.length=0}}let l3=!0;const dt=[];function D4(){dt.push(l3),l3=!1}function R4(){const e=dt.pop();l3=e===void 0?!0:e}function h2(e,c,a){if(l3&&V2){let s=t7.get(e);s||t7.set(e,s=new Map);let t=s.get(a);t||s.set(a,t=v9()),zt(t)}}function zt(e,c){let a=!1;Q4<=r7?pt(e)||(e.n|=C3,a=!Ct(e)):a=!e.has(V2),a&&(e.add(V2),V2.deps.push(e))}function W2(e,c,a,s,t,r){const n=t7.get(e);if(!n)return;let i=[];if(c==="clear")i=[...n.values()];else if(a==="length"&&Q(e))n.forEach((o,l)=>{(l==="length"||l>=s)&&i.push(o)});else switch(a!==void 0&&i.push(n.get(a)),c){case"add":Q(e)?m9(a)&&i.push(n.get("length")):(i.push(n.get(F3)),m4(e)&&i.push(n.get(n7)));break;case"delete":Q(e)||(i.push(n.get(F3)),m4(e)&&i.push(n.get(n7)));break;case"set":m4(e)&&i.push(n.get(F3));break}if(i.length===1)i[0]&&i7(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);i7(v9(o))}}function i7(e,c){const a=Q(e)?e:[...e];for(const s of a)s.computed&&Ue(s);for(const s of a)s.computed||Ue(s)}function Ue(e,c){(e!==V2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const nz=o9("__proto__,__v_isRef,__isVue"),Ht=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(u9)),iz=p9(),oz=p9(!1,!0),lz=p9(!0),$e=fz();function fz(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const s=l1(this);for(let r=0,n=this.length;r<n;r++)h2(s,"get",r+"");const t=s[c](...a);return t===-1||t===!1?s[c](...a.map(l1)):t}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){D4();const s=l1(this)[c].apply(this,a);return R4(),s}}),e}function p9(e=!1,c=!1){return function(s,t,r){if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return c;if(t==="__v_raw"&&r===(e?c?yz:bt:c?Lt:gt).get(s))return s;const n=Q(s);if(!e&&n&&t1($e,t))return Reflect.get($e,t,r);const i=Reflect.get(s,t,r);return(u9(t)?Ht.has(t):nz(t))||(e||h2(s,"get",t),c)?i:K1(i)?n&&m9(t)?i:i.value:b1(i)?e?xt(i):O6(i):i}}const hz=Mt(),uz=Mt(!0);function Mt(e=!1){return function(a,s,t,r){let n=a[s];if(g4(n)&&K1(n)&&!K1(t))return!1;if(!e&&(!Q8(t)&&!g4(t)&&(n=l1(n),t=l1(t)),!Q(a)&&K1(n)&&!K1(t)))return n.value=t,!0;const i=Q(a)&&m9(s)?Number(s)<a.length:t1(a,s),o=Reflect.set(a,s,t,r);return a===l1(r)&&(i?m6(t,n)&&W2(a,"set",s,t):W2(a,"add",s,t)),o}}function mz(e,c){const a=t1(e,c);e[c];const s=Reflect.deleteProperty(e,c);return s&&a&&W2(e,"delete",c,void 0),s}function vz(e,c){const a=Reflect.has(e,c);return(!u9(c)||!Ht.has(c))&&h2(e,"has",c),a}function Cz(e){return h2(e,"iterate",Q(e)?"length":F3),Reflect.ownKeys(e)}const Vt={get:iz,set:hz,deleteProperty:mz,has:vz,ownKeys:Cz},pz={get:lz,set(e,c){return!0},deleteProperty(e,c){return!0}},dz=e2({},Vt,{get:oz,set:uz}),d9=e=>e,w5=e=>Reflect.getPrototypeOf(e);function p8(e,c,a=!1,s=!1){e=e.__v_raw;const t=l1(e),r=l1(c);a||(c!==r&&h2(t,"get",c),h2(t,"get",r));const{has:n}=w5(t),i=s?d9:a?V9:v6;if(n.call(t,c))return i(e.get(c));if(n.call(t,r))return i(e.get(r));e!==t&&e.get(c)}function d8(e,c=!1){const a=this.__v_raw,s=l1(a),t=l1(e);return c||(e!==t&&h2(s,"has",e),h2(s,"has",t)),e===t?a.has(e):a.has(e)||a.has(t)}function z8(e,c=!1){return e=e.__v_raw,!c&&h2(l1(e),"iterate",F3),Reflect.get(e,"size",e)}function Ge(e){e=l1(e);const c=l1(this);return w5(c).has.call(c,e)||(c.add(e),W2(c,"add",e,e)),this}function We(e,c){c=l1(c);const a=l1(this),{has:s,get:t}=w5(a);let r=s.call(a,e);r||(e=l1(e),r=s.call(a,e));const n=t.call(a,e);return a.set(e,c),r?m6(c,n)&&W2(a,"set",e,c):W2(a,"add",e,c),this}function je(e){const c=l1(this),{has:a,get:s}=w5(c);let t=a.call(c,e);t||(e=l1(e),t=a.call(c,e)),s&&s.call(c,e);const r=c.delete(e);return t&&W2(c,"delete",e,void 0),r}function Ke(){const e=l1(this),c=e.size!==0,a=e.clear();return c&&W2(e,"clear",void 0,void 0),a}function H8(e,c){return function(s,t){const r=this,n=r.__v_raw,i=l1(n),o=c?d9:e?V9:v6;return!e&&h2(i,"iterate",F3),n.forEach((l,f)=>s.call(t,o(l),o(f),r))}}function M8(e,c,a){return function(...s){const t=this.__v_raw,r=l1(t),n=m4(r),i=e==="entries"||e===Symbol.iterator&&n,o=e==="keys"&&n,l=t[e](...s),f=a?d9:c?V9:v6;return!c&&h2(r,"iterate",o?n7:F3),{next(){const{value:h,done:u}=l.next();return u?{value:h,done:u}:{value:i?[f(h[0]),f(h[1])]:f(h),done:u}},[Symbol.iterator](){return this}}}}function t3(e){return function(...c){return e==="delete"?!1:this}}function zz(){const e={get(r){return p8(this,r)},get size(){return z8(this)},has:d8,add:Ge,set:We,delete:je,clear:Ke,forEach:H8(!1,!1)},c={get(r){return p8(this,r,!1,!0)},get size(){return z8(this)},has:d8,add:Ge,set:We,delete:je,clear:Ke,forEach:H8(!1,!0)},a={get(r){return p8(this,r,!0)},get size(){return z8(this,!0)},has(r){return d8.call(this,r,!0)},add:t3("add"),set:t3("set"),delete:t3("delete"),clear:t3("clear"),forEach:H8(!0,!1)},s={get(r){return p8(this,r,!0,!0)},get size(){return z8(this,!0)},has(r){return d8.call(this,r,!0)},add:t3("add"),set:t3("set"),delete:t3("delete"),clear:t3("clear"),forEach:H8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=M8(r,!1,!1),a[r]=M8(r,!0,!1),c[r]=M8(r,!1,!0),s[r]=M8(r,!0,!0)}),[e,a,c,s]}const[Hz,Mz,Vz,gz]=zz();function z9(e,c){const a=c?e?gz:Vz:e?Mz:Hz;return(s,t,r)=>t==="__v_isReactive"?!e:t==="__v_isReadonly"?e:t==="__v_raw"?s:Reflect.get(t1(a,t)&&t in s?a:s,t,r)}const Lz={get:z9(!1,!1)},bz={get:z9(!1,!0)},xz={get:z9(!0,!1)},gt=new WeakMap,Lt=new WeakMap,bt=new WeakMap,yz=new WeakMap;function Sz(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nz(e){return e.__v_skip||!Object.isExtensible(e)?0:Sz(Xd(e))}function O6(e){return g4(e)?e:H9(e,!1,Vt,Lz,gt)}function wz(e){return H9(e,!1,dz,bz,Lt)}function xt(e){return H9(e,!0,pz,xz,bt)}function H9(e,c,a,s,t){if(!b1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const r=t.get(e);if(r)return r;const n=Nz(e);if(n===0)return e;const i=new Proxy(e,n===2?s:a);return t.set(e,i),i}function v4(e){return g4(e)?v4(e.__v_raw):!!(e&&e.__v_isReactive)}function g4(e){return!!(e&&e.__v_isReadonly)}function Q8(e){return!!(e&&e.__v_isShallow)}function yt(e){return v4(e)||g4(e)}function l1(e){const c=e&&e.__v_raw;return c?l1(c):e}function M9(e){return Z8(e,"__v_skip",!0),e}const v6=e=>b1(e)?O6(e):e,V9=e=>b1(e)?xt(e):e;function St(e){l3&&V2&&(e=l1(e),zt(e.dep||(e.dep=v9())))}function Nt(e,c){e=l1(e),e.dep&&i7(e.dep)}function K1(e){return!!(e&&e.__v_isRef===!0)}function Y8(e){return wt(e,!1)}function kz(e){return wt(e,!0)}function wt(e,c){return K1(e)?e:new Az(e,c)}class Az{constructor(c,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?c:l1(c),this._value=a?c:v6(c)}get value(){return St(this),this._value}set value(c){const a=this.__v_isShallow||Q8(c)||g4(c);c=a?c:l1(c),m6(c,this._rawValue)&&(this._rawValue=c,this._value=a?c:v6(c),Nt(this))}}function C4(e){return K1(e)?e.value:e}const Tz={get:(e,c,a)=>C4(Reflect.get(e,c,a)),set:(e,c,a,s)=>{const t=e[c];return K1(t)&&!K1(a)?(t.value=a,!0):Reflect.set(e,c,a,s)}};function kt(e){return v4(e)?e:new Proxy(e,Tz)}var At;class Ez{constructor(c,a,s,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[At]=!1,this._dirty=!0,this.effect=new C9(c,()=>{this._dirty||(this._dirty=!0,Nt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=s}get value(){const c=l1(this);return St(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}At="__v_isReadonly";function Pz(e,c,a=!1){let s,t;const r=X(e);return r?(s=e,t=S2):(s=e.get,t=e.set),new Ez(s,t,r||!t,a)}function f3(e,c,a,s){let t;try{t=s?e(...s):e()}catch(r){k5(r,c,a)}return t}function N2(e,c,a,s){if(X(e)){const r=f3(e,c,a,s);return r&&ht(r)&&r.catch(n=>{k5(n,c,a)}),r}const t=[];for(let r=0;r<e.length;r++)t.push(N2(e[r],c,a,s));return t}function k5(e,c,a,s=!0){const t=c?c.vnode:null;if(c){let r=c.parent;const n=c.proxy,i=a;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,n,i)===!1)return}r=r.parent}const o=c.appContext.config.errorHandler;if(o){f3(o,null,10,[e,n,i]);return}}_z(e,a,t,s)}function _z(e,c,a,s=!0){console.error(e)}let C6=!1,o7=!1;const W1=[];let D2=0;const p4=[];let U2=null,A3=0;const Tt=Promise.resolve();let g9=null;function Et(e){const c=g9||Tt;return e?c.then(this?e.bind(this):e):c}function Dz(e){let c=D2+1,a=W1.length;for(;c<a;){const s=c+a>>>1;p6(W1[s])<e?c=s+1:a=s}return c}function L9(e){(!W1.length||!W1.includes(e,C6&&e.allowRecurse?D2+1:D2))&&(e.id==null?W1.push(e):W1.splice(Dz(e.id),0,e),Pt())}function Pt(){!C6&&!o7&&(o7=!0,g9=Tt.then(Dt))}function Rz(e){const c=W1.indexOf(e);c>D2&&W1.splice(c,1)}function Iz(e){Q(e)?p4.push(...e):(!U2||!U2.includes(e,e.allowRecurse?A3+1:A3))&&p4.push(e),Pt()}function Ze(e,c=C6?D2+1:0){for(;c<W1.length;c++){const a=W1[c];a&&a.pre&&(W1.splice(c,1),c--,a())}}function _t(e){if(p4.length){const c=[...new Set(p4)];if(p4.length=0,U2){U2.push(...c);return}for(U2=c,U2.sort((a,s)=>p6(a)-p6(s)),A3=0;A3<U2.length;A3++)U2[A3]();U2=null,A3=0}}const p6=e=>e.id==null?1/0:e.id,Fz=(e,c)=>{const a=p6(e)-p6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function Dt(e){o7=!1,C6=!0,W1.sort(Fz);const c=S2;try{for(D2=0;D2<W1.length;D2++){const a=W1[D2];a&&a.active!==!1&&f3(a,null,14)}}finally{D2=0,W1.length=0,_t(),C6=!1,g9=null,(W1.length||p4.length)&&Dt()}}function Bz(e,c,...a){if(e.isUnmounted)return;const s=e.vnode.props||m1;let t=a;const r=c.startsWith("update:"),n=r&&c.slice(7);if(n&&n in s){const f=`${n==="modelValue"?"model":n}Modifiers`,{number:h,trim:u}=s[f]||m1;u&&(t=a.map(v=>v.trim())),h&&(t=a.map(s7))}let i,o=s[i=T0(c)]||s[i=T0(B2(c))];!o&&r&&(o=s[i=T0(_4(c))]),o&&N2(o,e,6,t);const l=s[i+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,N2(l,e,6,t)}}function Rt(e,c,a=!1){const s=c.emitsCache,t=s.get(e);if(t!==void 0)return t;const r=e.emits;let n={},i=!1;if(!X(e)){const o=l=>{const f=Rt(l,c,!0);f&&(i=!0,e2(n,f))};!a&&c.mixins.length&&c.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!r&&!i?(b1(e)&&s.set(e,null),null):(Q(r)?r.forEach(o=>n[o]=null):e2(n,r),b1(e)&&s.set(e,n),n)}function A5(e,c){return!e||!x5(c)?!1:(c=c.slice(2).replace(/Once$/,""),t1(e,c[0].toLowerCase()+c.slice(1))||t1(e,_4(c))||t1(e,c))}let L2=null,It=null;function X8(e){const c=L2;return L2=e,It=e&&e.type.__scopeId||null,c}function I8(e,c=L2,a){if(!c||e._n)return e;const s=(...t)=>{s._d&&ra(-1);const r=X8(c);let n;try{n=e(...t)}finally{X8(r),s._d&&ra(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function E0(e){const{type:c,vnode:a,proxy:s,withProxy:t,props:r,propsOptions:[n],slots:i,attrs:o,emit:l,render:f,renderCache:h,data:u,setupState:v,ctx:d,inheritAttrs:V}=e;let b,p;const M=X8(e);try{if(a.shapeFlag&4){const O=t||s;b=_2(f.call(O,O,h,r,v,u,d)),p=o}else{const O=c;b=_2(O.length>1?O(r,{attrs:o,slots:i,emit:l}):O(r,null)),p=c.props?o:Oz(o)}}catch(O){s6.length=0,k5(O,e,1),b=d1(W3)}let D=b;if(p&&V!==!1){const O=Object.keys(p),{shapeFlag:J}=D;O.length&&J&7&&(n&&O.some(f9)&&(p=qz(p,n)),D=L4(D,p))}return a.dirs&&(D=L4(D),D.dirs=D.dirs?D.dirs.concat(a.dirs):a.dirs),a.transition&&(D.transition=a.transition),b=D,X8(M),b}const Oz=e=>{let c;for(const a in e)(a==="class"||a==="style"||x5(a))&&((c||(c={}))[a]=e[a]);return c},qz=(e,c)=>{const a={};for(const s in e)(!f9(s)||!(s.slice(9)in c))&&(a[s]=e[s]);return a};function Uz(e,c,a){const{props:s,children:t,component:r}=e,{props:n,children:i,patchFlag:o}=c,l=r.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return s?Qe(s,n,l):!!n;if(o&8){const f=c.dynamicProps;for(let h=0;h<f.length;h++){const u=f[h];if(n[u]!==s[u]&&!A5(l,u))return!0}}}else return(t||i)&&(!i||!i.$stable)?!0:s===n?!1:s?n?Qe(s,n,l):!0:!!n;return!1}function Qe(e,c,a){const s=Object.keys(c);if(s.length!==Object.keys(e).length)return!0;for(let t=0;t<s.length;t++){const r=s[t];if(c[r]!==e[r]&&!A5(a,r))return!0}return!1}function $z({vnode:e,parent:c},a){for(;c&&c.subTree===e;)(e=c.vnode).el=a,c=c.parent}const Gz=e=>e.__isSuspense;function Wz(e,c){c&&c.pendingBranch?Q(e)?c.effects.push(...e):c.effects.push(e):Iz(e)}function F8(e,c){if(q1){let a=q1.provides;const s=q1.parent&&q1.parent.provides;s===a&&(a=q1.provides=Object.create(s)),a[e]=c}}function h3(e,c,a=!1){const s=q1||L2;if(s){const t=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(t&&e in t)return t[e];if(arguments.length>1)return a&&X(c)?c.call(s.proxy):c}}const Ye={};function a6(e,c,a){return Ft(e,c,a)}function Ft(e,c,{immediate:a,deep:s,flush:t,onTrack:r,onTrigger:n}=m1){const i=q1;let o,l=!1,f=!1;if(K1(e)?(o=()=>e.value,l=Q8(e)):v4(e)?(o=()=>e,s=!0):Q(e)?(f=!0,l=e.some(p=>v4(p)||Q8(p)),o=()=>e.map(p=>{if(K1(p))return p.value;if(v4(p))return E3(p);if(X(p))return f3(p,i,2)})):X(e)?c?o=()=>f3(e,i,2):o=()=>{if(!(i&&i.isUnmounted))return h&&h(),N2(e,i,3,[u])}:o=S2,c&&s){const p=o;o=()=>E3(p())}let h,u=p=>{h=b.onStop=()=>{f3(p,i,4)}};if(z6)return u=S2,c?a&&N2(c,i,3,[o(),f?[]:void 0,u]):o(),S2;let v=f?[]:Ye;const d=()=>{if(!!b.active)if(c){const p=b.run();(s||l||(f?p.some((M,D)=>m6(M,v[D])):m6(p,v)))&&(h&&h(),N2(c,i,3,[p,v===Ye?void 0:v,u]),v=p)}else b.run()};d.allowRecurse=!!c;let V;t==="sync"?V=d:t==="post"?V=()=>t2(d,i&&i.suspense):(d.pre=!0,i&&(d.id=i.uid),V=()=>L9(d));const b=new C9(o,V);return c?a?d():v=b.run():t==="post"?t2(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&h9(i.scope.effects,b)}}function jz(e,c,a){const s=this.proxy,t=I1(e)?e.includes(".")?Bt(s,e):()=>s[e]:e.bind(s,s);let r;X(c)?r=c:(r=c.handler,a=c);const n=q1;b4(this);const i=Ft(t,r.bind(s),a);return n?b4(n):O3(),i}function Bt(e,c){const a=c.split(".");return()=>{let s=e;for(let t=0;t<a.length&&s;t++)s=s[a[t]];return s}}function E3(e,c){if(!b1(e)||e.__v_skip||(c=c||new Set,c.has(e)))return e;if(c.add(e),K1(e))E3(e.value,c);else if(Q(e))for(let a=0;a<e.length;a++)E3(e[a],c);else if(ft(e)||m4(e))e.forEach(a=>{E3(a,c)});else if(mt(e))for(const a in e)E3(e[a],c);return e}function q6(e){return X(e)?{setup:e,name:e.name}:e}const B8=e=>!!e.type.__asyncLoader,Ot=e=>e.type.__isKeepAlive;function Kz(e,c){qt(e,"a",c)}function Zz(e,c){qt(e,"da",c)}function qt(e,c,a=q1){const s=e.__wdc||(e.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(T5(c,s,a),a){let t=a.parent;for(;t&&t.parent;)Ot(t.parent.vnode)&&Qz(s,c,a,t),t=t.parent}}function Qz(e,c,a,s){const t=T5(c,e,s,!0);$t(()=>{h9(s[c],t)},a)}function T5(e,c,a=q1,s=!1){if(a){const t=a[e]||(a[e]=[]),r=c.__weh||(c.__weh=(...n)=>{if(a.isUnmounted)return;D4(),b4(a);const i=N2(c,a,e,n);return O3(),R4(),i});return s?t.unshift(r):t.push(r),r}}const e3=e=>(c,a=q1)=>(!z6||e==="sp")&&T5(e,(...s)=>c(...s),a),Yz=e3("bm"),Ut=e3("m"),Xz=e3("bu"),Jz=e3("u"),cH=e3("bum"),$t=e3("um"),eH=e3("sp"),aH=e3("rtg"),sH=e3("rtc");function tH(e,c=q1){T5("ec",e,c)}function rH(e,c){const a=L2;if(a===null)return e;const s=P5(a)||a.proxy,t=e.dirs||(e.dirs=[]);for(let r=0;r<c.length;r++){let[n,i,o,l=m1]=c[r];X(n)&&(n={mounted:n,updated:n}),n.deep&&E3(i),t.push({dir:n,instance:s,value:i,oldValue:void 0,arg:o,modifiers:l})}return e}function S3(e,c,a,s){const t=e.dirs,r=c&&c.dirs;for(let n=0;n<t.length;n++){const i=t[n];r&&(i.oldValue=r[n].value);let o=i.dir[s];o&&(D4(),N2(o,a,8,[e.el,i,e,c]),R4())}}const Gt="components";function B3(e,c){return iH(Gt,e,!0,c)||e}const nH=Symbol();function iH(e,c,a=!0,s=!1){const t=L2||q1;if(t){const r=t.type;if(e===Gt){const i=FH(r,!1);if(i&&(i===c||i===B2(c)||i===N5(B2(c))))return r}const n=Xe(t[e]||r[e],c)||Xe(t.appContext[e],c);return!n&&s?r:n}}function Xe(e,c){return e&&(e[c]||e[B2(c)]||e[N5(B2(c))])}function Wt(e,c,a,s){let t;const r=a&&a[s];if(Q(e)||I1(e)){t=new Array(e.length);for(let n=0,i=e.length;n<i;n++)t[n]=c(e[n],n,void 0,r&&r[n])}else if(typeof e=="number"){t=new Array(e);for(let n=0;n<e;n++)t[n]=c(n+1,n,void 0,r&&r[n])}else if(b1(e))if(e[Symbol.iterator])t=Array.from(e,(n,i)=>c(n,i,void 0,r&&r[i]));else{const n=Object.keys(e);t=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const l=n[i];t[i]=c(e[l],l,i,r&&r[i])}}else t=[];return a&&(a[s]=t),t}const l7=e=>e?sr(e)?P5(e)||e.proxy:l7(e.parent):null,J8=e2(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>l7(e.parent),$root:e=>l7(e.root),$emit:e=>e.emit,$options:e=>b9(e),$forceUpdate:e=>e.f||(e.f=()=>L9(e.update)),$nextTick:e=>e.n||(e.n=Et.bind(e.proxy)),$watch:e=>jz.bind(e)}),oH={get({_:e},c){const{ctx:a,setupState:s,data:t,props:r,accessCache:n,type:i,appContext:o}=e;let l;if(c[0]!=="$"){const v=n[c];if(v!==void 0)switch(v){case 1:return s[c];case 2:return t[c];case 4:return a[c];case 3:return r[c]}else{if(s!==m1&&t1(s,c))return n[c]=1,s[c];if(t!==m1&&t1(t,c))return n[c]=2,t[c];if((l=e.propsOptions[0])&&t1(l,c))return n[c]=3,r[c];if(a!==m1&&t1(a,c))return n[c]=4,a[c];f7&&(n[c]=0)}}const f=J8[c];let h,u;if(f)return c==="$attrs"&&h2(e,"get",c),f(e);if((h=i.__cssModules)&&(h=h[c]))return h;if(a!==m1&&t1(a,c))return n[c]=4,a[c];if(u=o.config.globalProperties,t1(u,c))return u[c]},set({_:e},c,a){const{data:s,setupState:t,ctx:r}=e;return t!==m1&&t1(t,c)?(t[c]=a,!0):s!==m1&&t1(s,c)?(s[c]=a,!0):t1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(r[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:s,appContext:t,propsOptions:r}},n){let i;return!!a[n]||e!==m1&&t1(e,n)||c!==m1&&t1(c,n)||(i=r[0])&&t1(i,n)||t1(s,n)||t1(J8,n)||t1(t.config.globalProperties,n)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:t1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};let f7=!0;function lH(e){const c=b9(e),a=e.proxy,s=e.ctx;f7=!1,c.beforeCreate&&Je(c.beforeCreate,e,"bc");const{data:t,computed:r,methods:n,watch:i,provide:o,inject:l,created:f,beforeMount:h,mounted:u,beforeUpdate:v,updated:d,activated:V,deactivated:b,beforeDestroy:p,beforeUnmount:M,destroyed:D,unmounted:O,render:J,renderTracked:v1,renderTriggered:H1,errorCaptured:i2,serverPrefetch:X1,expose:v2,inheritAttrs:s3,components:A2,directives:e4,filters:x3}=c;if(l&&fH(l,s,null,e.appContext.config.unwrapInjectedRef),n)for(const C1 in n){const h1=n[C1];X(h1)&&(s[C1]=h1.bind(a))}if(t){const C1=t.call(a,a);b1(C1)&&(e.data=O6(C1))}if(f7=!0,r)for(const C1 in r){const h1=r[C1],z2=X(h1)?h1.bind(a,a):X(h1.get)?h1.get.bind(a,a):S2,y3=!X(h1)&&X(h1.set)?h1.set.bind(a):S2,H2=y1({get:z2,set:y3});Object.defineProperty(s,C1,{enumerable:!0,configurable:!0,get:()=>H2.value,set:a2=>H2.value=a2})}if(i)for(const C1 in i)jt(i[C1],s,a,C1);if(o){const C1=X(o)?o.call(a):o;Reflect.ownKeys(C1).forEach(h1=>{F8(h1,C1[h1])})}f&&Je(f,e,"c");function w1(C1,h1){Q(h1)?h1.forEach(z2=>C1(z2.bind(a))):h1&&C1(h1.bind(a))}if(w1(Yz,h),w1(Ut,u),w1(Xz,v),w1(Jz,d),w1(Kz,V),w1(Zz,b),w1(tH,i2),w1(sH,v1),w1(aH,H1),w1(cH,M),w1($t,O),w1(eH,X1),Q(v2))if(v2.length){const C1=e.exposed||(e.exposed={});v2.forEach(h1=>{Object.defineProperty(C1,h1,{get:()=>a[h1],set:z2=>a[h1]=z2})})}else e.exposed||(e.exposed={});J&&e.render===S2&&(e.render=J),s3!=null&&(e.inheritAttrs=s3),A2&&(e.components=A2),e4&&(e.directives=e4)}function fH(e,c,a=S2,s=!1){Q(e)&&(e=h7(e));for(const t in e){const r=e[t];let n;b1(r)?"default"in r?n=h3(r.from||t,r.default,!0):n=h3(r.from||t):n=h3(r),K1(n)&&s?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[t]=n}}function Je(e,c,a){N2(Q(e)?e.map(s=>s.bind(c.proxy)):e.bind(c.proxy),c,a)}function jt(e,c,a,s){const t=s.includes(".")?Bt(a,s):()=>a[s];if(I1(e)){const r=c[e];X(r)&&a6(t,r)}else if(X(e))a6(t,e.bind(a));else if(b1(e))if(Q(e))e.forEach(r=>jt(r,c,a,s));else{const r=X(e.handler)?e.handler.bind(a):c[e.handler];X(r)&&a6(t,r,e)}}function b9(e){const c=e.type,{mixins:a,extends:s}=c,{mixins:t,optionsCache:r,config:{optionMergeStrategies:n}}=e.appContext,i=r.get(c);let o;return i?o=i:!t.length&&!a&&!s?o=c:(o={},t.length&&t.forEach(l=>c5(o,l,n,!0)),c5(o,c,n)),b1(c)&&r.set(c,o),o}function c5(e,c,a,s=!1){const{mixins:t,extends:r}=c;r&&c5(e,r,a,!0),t&&t.forEach(n=>c5(e,n,a,!0));for(const n in c)if(!(s&&n==="expose")){const i=hH[n]||a&&a[n];e[n]=i?i(e[n],c[n]):c[n]}return e}const hH={data:ca,props:w3,emits:w3,methods:w3,computed:w3,beforeCreate:J1,created:J1,beforeMount:J1,mounted:J1,beforeUpdate:J1,updated:J1,beforeDestroy:J1,beforeUnmount:J1,destroyed:J1,unmounted:J1,activated:J1,deactivated:J1,errorCaptured:J1,serverPrefetch:J1,components:w3,directives:w3,watch:mH,provide:ca,inject:uH};function ca(e,c){return c?e?function(){return e2(X(e)?e.call(this,this):e,X(c)?c.call(this,this):c)}:c:e}function uH(e,c){return w3(h7(e),h7(c))}function h7(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function J1(e,c){return e?[...new Set([].concat(e,c))]:c}function w3(e,c){return e?e2(e2(Object.create(null),e),c):c}function mH(e,c){if(!e)return c;if(!c)return e;const a=e2(Object.create(null),e);for(const s in c)a[s]=J1(e[s],c[s]);return a}function vH(e,c,a,s=!1){const t={},r={};Z8(r,E5,1),e.propsDefaults=Object.create(null),Kt(e,c,t,r);for(const n in e.propsOptions[0])n in t||(t[n]=void 0);a?e.props=s?t:wz(t):e.type.props?e.props=t:e.props=r,e.attrs=r}function CH(e,c,a,s){const{props:t,attrs:r,vnode:{patchFlag:n}}=e,i=l1(t),[o]=e.propsOptions;let l=!1;if((s||n>0)&&!(n&16)){if(n&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let u=f[h];if(A5(e.emitsOptions,u))continue;const v=c[u];if(o)if(t1(r,u))v!==r[u]&&(r[u]=v,l=!0);else{const d=B2(u);t[d]=u7(o,i,d,v,e,!1)}else v!==r[u]&&(r[u]=v,l=!0)}}}else{Kt(e,c,t,r)&&(l=!0);let f;for(const h in i)(!c||!t1(c,h)&&((f=_4(h))===h||!t1(c,f)))&&(o?a&&(a[h]!==void 0||a[f]!==void 0)&&(t[h]=u7(o,i,h,void 0,e,!0)):delete t[h]);if(r!==i)for(const h in r)(!c||!t1(c,h)&&!0)&&(delete r[h],l=!0)}l&&W2(e,"set","$attrs")}function Kt(e,c,a,s){const[t,r]=e.propsOptions;let n=!1,i;if(c)for(let o in c){if(D8(o))continue;const l=c[o];let f;t&&t1(t,f=B2(o))?!r||!r.includes(f)?a[f]=l:(i||(i={}))[f]=l:A5(e.emitsOptions,o)||(!(o in s)||l!==s[o])&&(s[o]=l,n=!0)}if(r){const o=l1(a),l=i||m1;for(let f=0;f<r.length;f++){const h=r[f];a[h]=u7(t,o,h,l[h],e,!t1(l,h))}}return n}function u7(e,c,a,s,t,r){const n=e[a];if(n!=null){const i=t1(n,"default");if(i&&s===void 0){const o=n.default;if(n.type!==Function&&X(o)){const{propsDefaults:l}=t;a in l?s=l[a]:(b4(t),s=l[a]=o.call(null,c),O3())}else s=o}n[0]&&(r&&!i?s=!1:n[1]&&(s===""||s===_4(a))&&(s=!0))}return s}function Zt(e,c,a=!1){const s=c.propsCache,t=s.get(e);if(t)return t;const r=e.props,n={},i=[];let o=!1;if(!X(e)){const f=h=>{o=!0;const[u,v]=Zt(h,c,!0);e2(n,u),v&&i.push(...v)};!a&&c.mixins.length&&c.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!o)return b1(e)&&s.set(e,u4),u4;if(Q(r))for(let f=0;f<r.length;f++){const h=B2(r[f]);ea(h)&&(n[h]=m1)}else if(r)for(const f in r){const h=B2(f);if(ea(h)){const u=r[f],v=n[h]=Q(u)||X(u)?{type:u}:u;if(v){const d=ta(Boolean,v.type),V=ta(String,v.type);v[0]=d>-1,v[1]=V<0||d<V,(d>-1||t1(v,"default"))&&i.push(h)}}}const l=[n,i];return b1(e)&&s.set(e,l),l}function ea(e){return e[0]!=="$"}function aa(e){const c=e&&e.toString().match(/^\s*function (\w+)/);return c?c[1]:e===null?"null":""}function sa(e,c){return aa(e)===aa(c)}function ta(e,c){return Q(c)?c.findIndex(a=>sa(a,e)):X(c)&&sa(c,e)?0:-1}const Qt=e=>e[0]==="_"||e==="$stable",x9=e=>Q(e)?e.map(_2):[_2(e)],pH=(e,c,a)=>{if(c._n)return c;const s=I8((...t)=>x9(c(...t)),a);return s._c=!1,s},Yt=(e,c,a)=>{const s=e._ctx;for(const t in e){if(Qt(t))continue;const r=e[t];if(X(r))c[t]=pH(t,r,s);else if(r!=null){const n=x9(r);c[t]=()=>n}}},Xt=(e,c)=>{const a=x9(c);e.slots.default=()=>a},dH=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=l1(c),Z8(c,"_",a)):Yt(c,e.slots={})}else e.slots={},c&&Xt(e,c);Z8(e.slots,E5,1)},zH=(e,c,a)=>{const{vnode:s,slots:t}=e;let r=!0,n=m1;if(s.shapeFlag&32){const i=c._;i?a&&i===1?r=!1:(e2(t,c),!a&&i===1&&delete t._):(r=!c.$stable,Yt(c,t)),n=c}else c&&(Xt(e,c),n={default:1});if(r)for(const i in t)!Qt(i)&&!(i in n)&&delete t[i]};function Jt(){return{app:null,config:{isNativeTag:Zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HH=0;function MH(e,c){return function(s,t=null){X(s)||(s=Object.assign({},s)),t!=null&&!b1(t)&&(t=null);const r=Jt(),n=new Set;let i=!1;const o=r.app={_uid:HH++,_component:s,_props:t,_container:null,_context:r,_instance:null,version:OH,get config(){return r.config},set config(l){},use(l,...f){return n.has(l)||(l&&X(l.install)?(n.add(l),l.install(o,...f)):X(l)&&(n.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,h){if(!i){const u=d1(s,t);return u.appContext=r,f&&c?c(u,l):e(u,l,h),i=!0,o._container=l,l.__vue_app__=o,P5(u.component)||u.component.proxy}},unmount(){i&&(e(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o}};return o}}function m7(e,c,a,s,t=!1){if(Q(e)){e.forEach((u,v)=>m7(u,c&&(Q(c)?c[v]:c),a,s,t));return}if(B8(s)&&!t)return;const r=s.shapeFlag&4?P5(s.component)||s.component.proxy:s.el,n=t?null:r,{i,r:o}=e,l=c&&c.r,f=i.refs===m1?i.refs={}:i.refs,h=i.setupState;if(l!=null&&l!==o&&(I1(l)?(f[l]=null,t1(h,l)&&(h[l]=null)):K1(l)&&(l.value=null)),X(o))f3(o,i,12,[n,f]);else{const u=I1(o),v=K1(o);if(u||v){const d=()=>{if(e.f){const V=u?t1(h,o)?h[o]:f[o]:o.value;t?Q(V)&&h9(V,r):Q(V)?V.includes(r)||V.push(r):u?(f[o]=[r],t1(h,o)&&(h[o]=f[o])):(o.value=[r],e.k&&(f[e.k]=o.value))}else u?(f[o]=n,t1(h,o)&&(h[o]=n)):v&&(o.value=n,e.k&&(f[e.k]=n))};n?(d.id=-1,t2(d,a)):d()}}}const t2=Wz;function VH(e){return gH(e)}function gH(e,c){const a=ez();a.__VUE__=!0;const{insert:s,remove:t,patchProp:r,createElement:n,createText:i,createComment:o,setText:l,setElementText:f,parentNode:h,nextSibling:u,setScopeId:v=S2,insertStaticContent:d}=e,V=(m,C,z,H=null,L=null,w=null,T=!1,N=null,k=!!C.dynamicChildren)=>{if(m===C)return;m&&!j4(m,C)&&(H=A(m),a2(m,L,w,!0),m=null),C.patchFlag===-2&&(k=!1,C.dynamicChildren=null);const{type:x,ref:U,shapeFlag:R}=C;switch(x){case y9:b(m,C,z,H);break;case W3:p(m,C,z,H);break;case O8:m==null&&M(C,z,H,T);break;case C2:A2(m,C,z,H,L,w,T,N,k);break;default:R&1?J(m,C,z,H,L,w,T,N,k):R&6?e4(m,C,z,H,L,w,T,N,k):(R&64||R&128)&&x.process(m,C,z,H,L,w,T,N,k,n1)}U!=null&&L&&m7(U,m&&m.ref,w,C||m,!C)},b=(m,C,z,H)=>{if(m==null)s(C.el=i(C.children),z,H);else{const L=C.el=m.el;C.children!==m.children&&l(L,C.children)}},p=(m,C,z,H)=>{m==null?s(C.el=o(C.children||""),z,H):C.el=m.el},M=(m,C,z,H)=>{[m.el,m.anchor]=d(m.children,C,z,H,m.el,m.anchor)},D=({el:m,anchor:C},z,H)=>{let L;for(;m&&m!==C;)L=u(m),s(m,z,H),m=L;s(C,z,H)},O=({el:m,anchor:C})=>{let z;for(;m&&m!==C;)z=u(m),t(m),m=z;t(C)},J=(m,C,z,H,L,w,T,N,k)=>{T=T||C.type==="svg",m==null?v1(C,z,H,L,w,T,N,k):X1(m,C,L,w,T,N,k)},v1=(m,C,z,H,L,w,T,N)=>{let k,x;const{type:U,props:R,shapeFlag:$,transition:K,dirs:a1}=m;if(k=m.el=n(m.type,w,R&&R.is,R),$&8?f(k,m.children):$&16&&i2(m.children,k,null,H,L,w&&U!=="foreignObject",T,N),a1&&S3(m,null,H,"created"),R){for(const u1 in R)u1!=="value"&&!D8(u1)&&r(k,u1,null,R[u1],w,m.children,H,L,P);"value"in R&&r(k,"value",null,R.value),(x=R.onVnodeBeforeMount)&&E2(x,H,m)}H1(k,m,m.scopeId,T,H),a1&&S3(m,null,H,"beforeMount");const p1=(!L||L&&!L.pendingBranch)&&K&&!K.persisted;p1&&K.beforeEnter(k),s(k,C,z),((x=R&&R.onVnodeMounted)||p1||a1)&&t2(()=>{x&&E2(x,H,m),p1&&K.enter(k),a1&&S3(m,null,H,"mounted")},L)},H1=(m,C,z,H,L)=>{if(z&&v(m,z),H)for(let w=0;w<H.length;w++)v(m,H[w]);if(L){let w=L.subTree;if(C===w){const T=L.vnode;H1(m,T,T.scopeId,T.slotScopeIds,L.parent)}}},i2=(m,C,z,H,L,w,T,N,k=0)=>{for(let x=k;x<m.length;x++){const U=m[x]=N?i3(m[x]):_2(m[x]);V(null,U,C,z,H,L,w,T,N)}},X1=(m,C,z,H,L,w,T)=>{const N=C.el=m.el;let{patchFlag:k,dynamicChildren:x,dirs:U}=C;k|=m.patchFlag&16;const R=m.props||m1,$=C.props||m1;let K;z&&N3(z,!1),(K=$.onVnodeBeforeUpdate)&&E2(K,z,C,m),U&&S3(C,m,z,"beforeUpdate"),z&&N3(z,!0);const a1=L&&C.type!=="foreignObject";if(x?v2(m.dynamicChildren,x,N,z,H,a1,w):T||h1(m,C,N,null,z,H,a1,w,!1),k>0){if(k&16)s3(N,C,R,$,z,H,L);else if(k&2&&R.class!==$.class&&r(N,"class",null,$.class,L),k&4&&r(N,"style",R.style,$.style,L),k&8){const p1=C.dynamicProps;for(let u1=0;u1<p1.length;u1++){const k1=p1[u1],M2=R[k1],s4=$[k1];(s4!==M2||k1==="value")&&r(N,k1,M2,s4,L,m.children,z,H,P)}}k&1&&m.children!==C.children&&f(N,C.children)}else!T&&x==null&&s3(N,C,R,$,z,H,L);((K=$.onVnodeUpdated)||U)&&t2(()=>{K&&E2(K,z,C,m),U&&S3(C,m,z,"updated")},H)},v2=(m,C,z,H,L,w,T)=>{for(let N=0;N<C.length;N++){const k=m[N],x=C[N],U=k.el&&(k.type===C2||!j4(k,x)||k.shapeFlag&70)?h(k.el):z;V(k,x,U,null,H,L,w,T,!0)}},s3=(m,C,z,H,L,w,T)=>{if(z!==H){if(z!==m1)for(const N in z)!D8(N)&&!(N in H)&&r(m,N,z[N],null,T,C.children,L,w,P);for(const N in H){if(D8(N))continue;const k=H[N],x=z[N];k!==x&&N!=="value"&&r(m,N,x,k,T,C.children,L,w,P)}"value"in H&&r(m,"value",z.value,H.value)}},A2=(m,C,z,H,L,w,T,N,k)=>{const x=C.el=m?m.el:i(""),U=C.anchor=m?m.anchor:i("");let{patchFlag:R,dynamicChildren:$,slotScopeIds:K}=C;K&&(N=N?N.concat(K):K),m==null?(s(x,z,H),s(U,z,H),i2(C.children,z,U,L,w,T,N,k)):R>0&&R&64&&$&&m.dynamicChildren?(v2(m.dynamicChildren,$,z,L,w,T,N),(C.key!=null||L&&C===L.subTree)&&cr(m,C,!0)):h1(m,C,z,U,L,w,T,N,k)},e4=(m,C,z,H,L,w,T,N,k)=>{C.slotScopeIds=N,m==null?C.shapeFlag&512?L.ctx.activate(C,z,H,T,k):x3(C,z,H,L,w,T,k):G4(m,C,k)},x3=(m,C,z,H,L,w,T)=>{const N=m.component=PH(m,H,L);if(Ot(m)&&(N.ctx.renderer=n1),_H(N),N.asyncDep){if(L&&L.registerDep(N,w1),!m.el){const k=N.subTree=d1(W3);p(null,k,C,z)}return}w1(N,m,C,z,L,w,T)},G4=(m,C,z)=>{const H=C.component=m.component;if(Uz(m,C,z))if(H.asyncDep&&!H.asyncResolved){C1(H,C,z);return}else H.next=C,Rz(H.update),H.update();else C.el=m.el,H.vnode=C},w1=(m,C,z,H,L,w,T)=>{const N=()=>{if(m.isMounted){let{next:U,bu:R,u:$,parent:K,vnode:a1}=m,p1=U,u1;N3(m,!1),U?(U.el=a1.el,C1(m,U,T)):U=a1,R&&R8(R),(u1=U.props&&U.props.onVnodeBeforeUpdate)&&E2(u1,K,U,a1),N3(m,!0);const k1=E0(m),M2=m.subTree;m.subTree=k1,V(M2,k1,h(M2.el),A(M2),m,L,w),U.el=k1.el,p1===null&&$z(m,k1.el),$&&t2($,L),(u1=U.props&&U.props.onVnodeUpdated)&&t2(()=>E2(u1,K,U,a1),L)}else{let U;const{el:R,props:$}=C,{bm:K,m:a1,parent:p1}=m,u1=B8(C);if(N3(m,!1),K&&R8(K),!u1&&(U=$&&$.onVnodeBeforeMount)&&E2(U,p1,C),N3(m,!0),R&&c1){const k1=()=>{m.subTree=E0(m),c1(R,m.subTree,m,L,null)};u1?C.type.__asyncLoader().then(()=>!m.isUnmounted&&k1()):k1()}else{const k1=m.subTree=E0(m);V(null,k1,z,H,m,L,w),C.el=k1.el}if(a1&&t2(a1,L),!u1&&(U=$&&$.onVnodeMounted)){const k1=C;t2(()=>E2(U,p1,k1),L)}(C.shapeFlag&256||p1&&B8(p1.vnode)&&p1.vnode.shapeFlag&256)&&m.a&&t2(m.a,L),m.isMounted=!0,C=z=H=null}},k=m.effect=new C9(N,()=>L9(x),m.scope),x=m.update=()=>k.run();x.id=m.uid,N3(m,!0),x()},C1=(m,C,z)=>{C.component=m;const H=m.vnode.props;m.vnode=C,m.next=null,CH(m,C.props,H,z),zH(m,C.children,z),D4(),Ze(),R4()},h1=(m,C,z,H,L,w,T,N,k=!1)=>{const x=m&&m.children,U=m?m.shapeFlag:0,R=C.children,{patchFlag:$,shapeFlag:K}=C;if($>0){if($&128){y3(x,R,z,H,L,w,T,N,k);return}else if($&256){z2(x,R,z,H,L,w,T,N,k);return}}K&8?(U&16&&P(x,L,w),R!==x&&f(z,R)):U&16?K&16?y3(x,R,z,H,L,w,T,N,k):P(x,L,w,!0):(U&8&&f(z,""),K&16&&i2(R,z,H,L,w,T,N,k))},z2=(m,C,z,H,L,w,T,N,k)=>{m=m||u4,C=C||u4;const x=m.length,U=C.length,R=Math.min(x,U);let $;for($=0;$<R;$++){const K=C[$]=k?i3(C[$]):_2(C[$]);V(m[$],K,z,null,L,w,T,N,k)}x>U?P(m,L,w,!0,!1,R):i2(C,z,H,L,w,T,N,k,R)},y3=(m,C,z,H,L,w,T,N,k)=>{let x=0;const U=C.length;let R=m.length-1,$=U-1;for(;x<=R&&x<=$;){const K=m[x],a1=C[x]=k?i3(C[x]):_2(C[x]);if(j4(K,a1))V(K,a1,z,null,L,w,T,N,k);else break;x++}for(;x<=R&&x<=$;){const K=m[R],a1=C[$]=k?i3(C[$]):_2(C[$]);if(j4(K,a1))V(K,a1,z,null,L,w,T,N,k);else break;R--,$--}if(x>R){if(x<=$){const K=$+1,a1=K<U?C[K].el:H;for(;x<=$;)V(null,C[x]=k?i3(C[x]):_2(C[x]),z,a1,L,w,T,N,k),x++}}else if(x>$)for(;x<=R;)a2(m[x],L,w,!0),x++;else{const K=x,a1=x,p1=new Map;for(x=a1;x<=$;x++){const o2=C[x]=k?i3(C[x]):_2(C[x]);o2.key!=null&&p1.set(o2.key,x)}let u1,k1=0;const M2=$-a1+1;let s4=!1,Ie=0;const W4=new Array(M2);for(x=0;x<M2;x++)W4[x]=0;for(x=K;x<=R;x++){const o2=m[x];if(k1>=M2){a2(o2,L,w,!0);continue}let T2;if(o2.key!=null)T2=p1.get(o2.key);else for(u1=a1;u1<=$;u1++)if(W4[u1-a1]===0&&j4(o2,C[u1])){T2=u1;break}T2===void 0?a2(o2,L,w,!0):(W4[T2-a1]=x+1,T2>=Ie?Ie=T2:s4=!0,V(o2,C[T2],z,null,L,w,T,N,k),k1++)}const Fe=s4?LH(W4):u4;for(u1=Fe.length-1,x=M2-1;x>=0;x--){const o2=a1+x,T2=C[o2],Be=o2+1<U?C[o2+1].el:H;W4[x]===0?V(null,T2,z,Be,L,w,T,N,k):s4&&(u1<0||x!==Fe[u1]?H2(T2,z,Be,2):u1--)}}},H2=(m,C,z,H,L=null)=>{const{el:w,type:T,transition:N,children:k,shapeFlag:x}=m;if(x&6){H2(m.component.subTree,C,z,H);return}if(x&128){m.suspense.move(C,z,H);return}if(x&64){T.move(m,C,z,n1);return}if(T===C2){s(w,C,z);for(let R=0;R<k.length;R++)H2(k[R],C,z,H);s(m.anchor,C,z);return}if(T===O8){D(m,C,z);return}if(H!==2&&x&1&&N)if(H===0)N.beforeEnter(w),s(w,C,z),t2(()=>N.enter(w),L);else{const{leave:R,delayLeave:$,afterLeave:K}=N,a1=()=>s(w,C,z),p1=()=>{R(w,()=>{a1(),K&&K()})};$?$(w,a1,p1):p1()}else s(w,C,z)},a2=(m,C,z,H=!1,L=!1)=>{const{type:w,props:T,ref:N,children:k,dynamicChildren:x,shapeFlag:U,patchFlag:R,dirs:$}=m;if(N!=null&&m7(N,null,z,m,!0),U&256){C.ctx.deactivate(m);return}const K=U&1&&$,a1=!B8(m);let p1;if(a1&&(p1=T&&T.onVnodeBeforeUnmount)&&E2(p1,C,m),U&6)g(m.component,z,H);else{if(U&128){m.suspense.unmount(z,H);return}K&&S3(m,null,C,"beforeUnmount"),U&64?m.type.remove(m,C,z,L,n1,H):x&&(w!==C2||R>0&&R&64)?P(x,C,z,!1,!0):(w===C2&&R&384||!L&&U&16)&&P(k,C,z),H&&a4(m)}(a1&&(p1=T&&T.onVnodeUnmounted)||K)&&t2(()=>{p1&&E2(p1,C,m),K&&S3(m,null,C,"unmounted")},z)},a4=m=>{const{type:C,el:z,anchor:H,transition:L}=m;if(C===C2){C8(z,H);return}if(C===O8){O(m);return}const w=()=>{t(z),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(m.shapeFlag&1&&L&&!L.persisted){const{leave:T,delayLeave:N}=L,k=()=>T(z,w);N?N(m.el,w,k):k()}else w()},C8=(m,C)=>{let z;for(;m!==C;)z=u(m),t(m),m=z;t(C)},g=(m,C,z)=>{const{bum:H,scope:L,update:w,subTree:T,um:N}=m;H&&R8(H),L.stop(),w&&(w.active=!1,a2(T,m,C,z)),N&&t2(N,C),t2(()=>{m.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},P=(m,C,z,H=!1,L=!1,w=0)=>{for(let T=w;T<m.length;T++)a2(m[T],C,z,H,L)},A=m=>m.shapeFlag&6?A(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el),q=(m,C,z)=>{m==null?C._vnode&&a2(C._vnode,null,null,!0):V(C._vnode||null,m,C,null,null,null,z),Ze(),_t(),C._vnode=m},n1={p:V,um:a2,m:H2,r:a4,mt:x3,mc:i2,pc:h1,pbc:v2,n:A,o:e};let x1,c1;return c&&([x1,c1]=c(n1)),{render:q,hydrate:x1,createApp:MH(q,x1)}}function N3({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function cr(e,c,a=!1){const s=e.children,t=c.children;if(Q(s)&&Q(t))for(let r=0;r<s.length;r++){const n=s[r];let i=t[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=t[r]=i3(t[r]),i.el=n.el),a||cr(n,i))}}function LH(e){const c=e.slice(),a=[0];let s,t,r,n,i;const o=e.length;for(s=0;s<o;s++){const l=e[s];if(l!==0){if(t=a[a.length-1],e[t]<l){c[s]=t,a.push(s);continue}for(r=0,n=a.length-1;r<n;)i=r+n>>1,e[a[i]]<l?r=i+1:n=i;l<e[a[r]]&&(r>0&&(c[s]=a[r-1]),a[r]=s)}}for(r=a.length,n=a[r-1];r-- >0;)a[r]=n,n=c[n];return a}const bH=e=>e.__isTeleport,C2=Symbol(void 0),y9=Symbol(void 0),W3=Symbol(void 0),O8=Symbol(void 0),s6=[];let b2=null;function p2(e=!1){s6.push(b2=e?null:[])}function xH(){s6.pop(),b2=s6[s6.length-1]||null}let d6=1;function ra(e){d6+=e}function er(e){return e.dynamicChildren=d6>0?b2||u4:null,xH(),d6>0&&b2&&b2.push(e),e}function x2(e,c,a,s,t,r){return er(E(e,c,a,s,t,r,!0))}function yH(e,c,a,s,t){return er(d1(e,c,a,s,t,!0))}function v7(e){return e?e.__v_isVNode===!0:!1}function j4(e,c){return e.type===c.type&&e.key===c.key}const E5="__vInternal",ar=({key:e})=>e!=null?e:null,q8=({ref:e,ref_key:c,ref_for:a})=>e!=null?I1(e)||K1(e)||X(e)?{i:L2,r:e,k:c,f:!!a}:e:null;function E(e,c=null,a=null,s=0,t=null,r=e===C2?0:1,n=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&ar(c),ref:c&&q8(c),scopeId:It,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:t,dynamicChildren:null,appContext:null};return i?(S9(o,a),r&128&&e.normalize(o)):a&&(o.shapeFlag|=I1(a)?8:16),d6>0&&!n&&b2&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&b2.push(o),o}const d1=SH;function SH(e,c=null,a=null,s=0,t=null,r=!1){if((!e||e===nH)&&(e=W3),v7(e)){const i=L4(e,c,!0);return a&&S9(i,a),d6>0&&!r&&b2&&(i.shapeFlag&6?b2[b2.indexOf(e)]=i:b2.push(i)),i.patchFlag|=-2,i}if(BH(e)&&(e=e.__vccOpts),c){c=NH(c);let{class:i,style:o}=c;i&&!I1(i)&&(c.class=B6(i)),b1(o)&&(yt(o)&&!Q(o)&&(o=e2({},o)),c.style=l9(o))}const n=I1(e)?1:Gz(e)?128:bH(e)?64:b1(e)?4:X(e)?2:0;return E(e,c,a,s,t,n,r,!0)}function NH(e){return e?yt(e)||E5 in e?e2({},e):e:null}function L4(e,c,a=!1){const{props:s,ref:t,patchFlag:r,children:n}=e,i=c?AH(s||{},c):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&ar(i),ref:c&&c.ref?a&&t?Q(t)?t.concat(q8(c)):[t,q8(c)]:q8(c):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==C2?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&L4(e.ssContent),ssFallback:e.ssFallback&&L4(e.ssFallback),el:e.el,anchor:e.anchor}}function w2(e=" ",c=0){return d1(y9,null,e,c)}function wH(e,c){const a=d1(O8,null,e);return a.staticCount=c,a}function kH(e="",c=!1){return c?(p2(),yH(W3,null,e)):d1(W3,null,e)}function _2(e){return e==null||typeof e=="boolean"?d1(W3):Q(e)?d1(C2,null,e.slice()):typeof e=="object"?i3(e):d1(y9,null,String(e))}function i3(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:L4(e)}function S9(e,c){let a=0;const{shapeFlag:s}=e;if(c==null)c=null;else if(Q(c))a=16;else if(typeof c=="object")if(s&65){const t=c.default;t&&(t._c&&(t._d=!1),S9(e,t()),t._c&&(t._d=!0));return}else{a=32;const t=c._;!t&&!(E5 in c)?c._ctx=L2:t===3&&L2&&(L2.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else X(c)?(c={default:c,_ctx:L2},a=32):(c=String(c),s&64?(a=16,c=[w2(c)]):a=8);e.children=c,e.shapeFlag|=a}function AH(...e){const c={};for(let a=0;a<e.length;a++){const s=e[a];for(const t in s)if(t==="class")c.class!==s.class&&(c.class=B6([c.class,s.class]));else if(t==="style")c.style=l9([c.style,s.style]);else if(x5(t)){const r=c[t],n=s[t];n&&r!==n&&!(Q(r)&&r.includes(n))&&(c[t]=r?[].concat(r,n):n)}else t!==""&&(c[t]=s[t])}return c}function E2(e,c,a,s=null){N2(e,c,7,[a,s])}const TH=Jt();let EH=0;function PH(e,c,a){const s=e.type,t=(c?c.appContext:e.appContext)||TH,r={uid:EH++,vnode:e,type:s,parent:c,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new vt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zt(s,t),emitsOptions:Rt(s,t),emit:null,emitted:null,propsDefaults:m1,inheritAttrs:s.inheritAttrs,ctx:m1,data:m1,props:m1,attrs:m1,slots:m1,refs:m1,setupState:m1,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=Bz.bind(null,r),e.ce&&e.ce(r),r}let q1=null;const b4=e=>{q1=e,e.scope.on()},O3=()=>{q1&&q1.scope.off(),q1=null};function sr(e){return e.vnode.shapeFlag&4}let z6=!1;function _H(e,c=!1){z6=c;const{props:a,children:s}=e.vnode,t=sr(e);vH(e,a,t,c),dH(e,s);const r=t?DH(e,c):void 0;return z6=!1,r}function DH(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=M9(new Proxy(e.ctx,oH));const{setup:s}=a;if(s){const t=e.setupContext=s.length>1?IH(e):null;b4(e),D4();const r=f3(s,e,0,[e.props,t]);if(R4(),O3(),ht(r)){if(r.then(O3,O3),c)return r.then(n=>{na(e,n,c)}).catch(n=>{k5(n,e,0)});e.asyncDep=r}else na(e,r,c)}else tr(e,c)}function na(e,c,a){X(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:b1(c)&&(e.setupState=kt(c)),tr(e,a)}let ia;function tr(e,c,a){const s=e.type;if(!e.render){if(!c&&ia&&!s.render){const t=s.template||b9(e).template;if(t){const{isCustomElement:r,compilerOptions:n}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,l=e2(e2({isCustomElement:r,delimiters:i},n),o);s.render=ia(t,l)}}e.render=s.render||S2}b4(e),D4(),lH(e),R4(),O3()}function RH(e){return new Proxy(e.attrs,{get(c,a){return h2(e,"get","$attrs"),c[a]}})}function IH(e){const c=s=>{e.exposed=s||{}};let a;return{get attrs(){return a||(a=RH(e))},slots:e.slots,emit:e.emit,expose:c}}function P5(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(kt(M9(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in J8)return J8[a](e)}}))}function FH(e,c=!0){return X(e)?e.displayName||e.name:e.name||c&&e.__name}function BH(e){return X(e)&&"__vccOpts"in e}const y1=(e,c)=>Pz(e,c,z6);function _5(e,c,a){const s=arguments.length;return s===2?b1(c)&&!Q(c)?v7(c)?d1(e,null,[c]):d1(e,c):d1(e,null,c):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&v7(a)&&(a=[a]),d1(e,c,a))}const OH="3.2.41",qH="http://www.w3.org/2000/svg",T3=typeof document<"u"?document:null,oa=T3&&T3.createElement("template"),UH={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,s)=>{const t=c?T3.createElementNS(qH,e):T3.createElement(e,a?{is:a}:void 0);return e==="select"&&s&&s.multiple!=null&&t.setAttribute("multiple",s.multiple),t},createText:e=>T3.createTextNode(e),createComment:e=>T3.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>T3.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,s,t,r){const n=a?a.previousSibling:c.lastChild;if(t&&(t===r||t.nextSibling))for(;c.insertBefore(t.cloneNode(!0),a),!(t===r||!(t=t.nextSibling)););else{oa.innerHTML=s?`<svg>${e}</svg>`:e;const i=oa.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}c.insertBefore(i,a)}return[n?n.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}};function $H(e,c,a){const s=e._vtc;s&&(c=(c?[c,...s]:[...s]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}function GH(e,c,a){const s=e.style,t=I1(a);if(a&&!t){for(const r in a)C7(s,r,a[r]);if(c&&!I1(c))for(const r in c)a[r]==null&&C7(s,r,"")}else{const r=s.display;t?c!==a&&(s.cssText=a):c&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const la=/\s*!important$/;function C7(e,c,a){if(Q(a))a.forEach(s=>C7(e,c,s));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const s=WH(e,c);la.test(a)?e.setProperty(_4(s),a.replace(la,""),"important"):e[s]=a}}const fa=["Webkit","Moz","ms"],P0={};function WH(e,c){const a=P0[c];if(a)return a;let s=B2(c);if(s!=="filter"&&s in e)return P0[c]=s;s=N5(s);for(let t=0;t<fa.length;t++){const r=fa[t]+s;if(r in e)return P0[c]=r}return c}const ha="http://www.w3.org/1999/xlink";function jH(e,c,a,s,t){if(s&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(ha,c.slice(6,c.length)):e.setAttributeNS(ha,c,a);else{const r=Gd(c);a==null||r&&!ot(a)?e.removeAttribute(c):e.setAttribute(c,r?"":a)}}function KH(e,c,a,s,t,r,n){if(c==="innerHTML"||c==="textContent"){s&&n(s,t,r),e[c]=a==null?"":a;return}if(c==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=a;const o=a==null?"":a;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),a==null&&e.removeAttribute(c);return}let i=!1;if(a===""||a==null){const o=typeof e[c];o==="boolean"?a=ot(a):a==null&&o==="string"?(a="",i=!0):o==="number"&&(a=0,i=!0)}try{e[c]=a}catch{}i&&e.removeAttribute(c)}function n4(e,c,a,s){e.addEventListener(c,a,s)}function ZH(e,c,a,s){e.removeEventListener(c,a,s)}function QH(e,c,a,s,t=null){const r=e._vei||(e._vei={}),n=r[c];if(s&&n)n.value=s;else{const[i,o]=YH(c);if(s){const l=r[c]=cM(s,t);n4(e,i,l,o)}else n&&(ZH(e,i,n,o),r[c]=void 0)}}const ua=/(?:Once|Passive|Capture)$/;function YH(e){let c;if(ua.test(e)){c={};let s;for(;s=e.match(ua);)e=e.slice(0,e.length-s[0].length),c[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_4(e.slice(2)),c]}let _0=0;const XH=Promise.resolve(),JH=()=>_0||(XH.then(()=>_0=0),_0=Date.now());function cM(e,c){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;N2(eM(s,a.value),c,5,[s])};return a.value=e,a.attached=JH(),a}function eM(e,c){if(Q(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(s=>t=>!t._stopped&&s&&s(t))}else return c}const ma=/^on[a-z]/,aM=(e,c,a,s,t=!1,r,n,i,o)=>{c==="class"?$H(e,s,t):c==="style"?GH(e,a,s):x5(c)?f9(c)||QH(e,c,a,s,n):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):sM(e,c,s,t))?KH(e,c,s,r,n,i,o):(c==="true-value"?e._trueValue=s:c==="false-value"&&(e._falseValue=s),jH(e,c,s,t))};function sM(e,c,a,s){return s?!!(c==="innerHTML"||c==="textContent"||c in e&&ma.test(c)&&X(a)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA"||ma.test(c)&&I1(a)?!1:c in e}const va=e=>{const c=e.props["onUpdate:modelValue"]||!1;return Q(c)?a=>R8(c,a):c};function tM(e){e.target.composing=!0}function Ca(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const rM={created(e,{modifiers:{lazy:c,trim:a,number:s}},t){e._assign=va(t);const r=s||t.props&&t.props.type==="number";n4(e,c?"change":"input",n=>{if(n.target.composing)return;let i=e.value;a&&(i=i.trim()),r&&(i=s7(i)),e._assign(i)}),a&&n4(e,"change",()=>{e.value=e.value.trim()}),c||(n4(e,"compositionstart",tM),n4(e,"compositionend",Ca),n4(e,"change",Ca))},mounted(e,{value:c}){e.value=c==null?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:a,trim:s,number:t}},r){if(e._assign=va(r),e.composing||document.activeElement===e&&e.type!=="range"&&(a||s&&e.value.trim()===c||(t||e.type==="number")&&s7(e.value)===c))return;const n=c==null?"":c;e.value!==n&&(e.value=n)}},nM=["ctrl","shift","alt","meta"],iM={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,c)=>nM.some(a=>e[`${a}Key`]&&!c.includes(a))},oM=(e,c)=>(a,...s)=>{for(let t=0;t<c.length;t++){const r=iM[c[t]];if(r&&r(a,c))return}return e(a,...s)},lM=e2({patchProp:aM},UH);let pa;function fM(){return pa||(pa=VH(lM))}const hM=(...e)=>{const c=fM().createApp(...e),{mount:a}=c;return c.mount=s=>{const t=uM(s);if(!t)return;const r=c._component;!X(r)&&!r.render&&!r.template&&(r.template=t.innerHTML),t.innerHTML="";const n=a(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),n},c};function uM(e){return I1(e)?document.querySelector(e):e}const mM="/CNO-PROJECT/assets/ku.0f7e32f5.png",U6=(e,c)=>{const a=e.__vccOpts||e;for(const[s,t]of c)a[s]=t;return a},vM={data(){return{showMenu:!1}}},CM={class:"bg-gradient-to-l from-amber-400"},pM={class:"py-2 flex justify-end"},dM={class:"px-4 flex justify-end"},zM={class:"text-2xl font-bold text-black hover:animate-pulse"},HM={class:"text-2xl font-bold text-black hover:animate-pulse"},MM={class:"text-2xl font-bold text-black hover:animate-pulse"},VM={class:"flex items-center justify-start"},gM=E("a",{href:"https://www.ku.ac.th/th",target:"_blank",class:"px-4"},[E("img",{class:"w-14 rounded-full animate-[wiggle_5s_ease-in-out_infinite]",src:mM,alt:"image description"})],-1),LM=E("button",{type:"button",class:"pr-3"},[E("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[E("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),bM=[LM],xM=E("div",{class:"animation start-home"},null,-1);function yM(e,c,a,s,t,r){const n=B3("router-link");return p2(),x2("div",null,[E("div",CM,[E("nav",pM,[E("div",dM,[E("ul",{class:B6([t.showMenu?"flex":"hidden","flex-col space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 justify-end"])},[E("li",zM,[d1(n,{to:"/"},{default:I8(()=>[w2("HOME")]),_:1})]),E("li",HM,[d1(n,{to:"/profile"},{default:I8(()=>[w2("PROFILE")]),_:1})]),E("li",MM,[d1(n,{to:"/todo"},{default:I8(()=>[w2("TODO")]),_:1})])],2)]),E("div",VM,[gM,E("div",{onClick:c[0]||(c[0]=i=>t.showMenu=!t.showMenu),class:"flex md:hidden"},bM)]),xM])])])}const SM=U6(vM,[["render",yM]]);const NM={},wM={class:"video-container"},kM=E("iframe",{src:"https://www.youtube.com/embed/Gsc0HtG6rTc?&autoplay=1&mute=1&playsinline=1&playlist=Gsc0HtG6rTc&loop=1"},null,-1),AM=[kM];function TM(e,c,a,s,t,r){return p2(),x2("div",wM,AM)}const EM=U6(NM,[["render",TM]]),PM="/CNO-PROJECT/assets/rocket-use.bef2a92f.png",_M="/CNO-PROJECT/assets/planet.6371a0c3.png";const DM={name:"App",components:{Navbar:SM,Background:EM}},RM=E("div",{class:"fixed left-[-225px] bottom-[30px] max-h-[300px] star5"},[E("img",{src:PM,alt:"",class:"animate-wiggle"})],-1),IM=E("div",{class:"fixed right-[50px] bottom-[30px] max-h-[300px] star5"},[E("img",{src:_M,alt:"",class:"h-[100px] animate-wiggle"})],-1);function FM(e,c,a,s,t,r){const n=B3("Navbar"),i=B3("Background"),o=B3("RouterView");return p2(),x2(C2,null,[d1(n),RM,IM,E("div",null,[d1(i),d1(o)])],64)}const BM=U6(DM,[["render",FM]]),OM="modulepreload",qM=function(e){return"/CNO-PROJECT/"+e},da={},UM=function(c,a,s){if(!a||a.length===0)return c();const t=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=qM(r),r in da)return;da[r]=!0;const n=r.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(!!s)for(let f=t.length-1;f>=0;f--){const h=t[f];if(h.href===r&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":OM,n||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),n)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>c())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const i4=typeof window<"u";function $M(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const f1=Object.assign;function D0(e,c){const a={};for(const s in c){const t=c[s];a[s]=k2(t)?t.map(e):e(t)}return a}const t6=()=>{},k2=Array.isArray,GM=/\/$/,WM=e=>e.replace(GM,"");function R0(e,c,a="/"){let s,t={},r="",n="";const i=c.indexOf("#");let o=c.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=c.slice(0,o),r=c.slice(o+1,i>-1?i:c.length),t=e(r)),i>-1&&(s=s||c.slice(0,i),n=c.slice(i,c.length)),s=QM(s!=null?s:c,a),{fullPath:s+(r&&"?")+r+n,path:s,query:t,hash:n}}function jM(e,c){const a=c.query?e(c.query):"";return c.path+(a&&"?")+a+(c.hash||"")}function za(e,c){return!c||!e.toLowerCase().startsWith(c.toLowerCase())?e:e.slice(c.length)||"/"}function KM(e,c,a){const s=c.matched.length-1,t=a.matched.length-1;return s>-1&&s===t&&x4(c.matched[s],a.matched[t])&&rr(c.params,a.params)&&e(c.query)===e(a.query)&&c.hash===a.hash}function x4(e,c){return(e.aliasOf||e)===(c.aliasOf||c)}function rr(e,c){if(Object.keys(e).length!==Object.keys(c).length)return!1;for(const a in e)if(!ZM(e[a],c[a]))return!1;return!0}function ZM(e,c){return k2(e)?Ha(e,c):k2(c)?Ha(c,e):e===c}function Ha(e,c){return k2(c)?e.length===c.length&&e.every((a,s)=>a===c[s]):e.length===1&&e[0]===c}function QM(e,c){if(e.startsWith("/"))return e;if(!e)return c;const a=c.split("/"),s=e.split("/");let t=a.length-1,r,n;for(r=0;r<s.length;r++)if(n=s[r],n!==".")if(n==="..")t>1&&t--;else break;return a.slice(0,t).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var H6;(function(e){e.pop="pop",e.push="push"})(H6||(H6={}));var r6;(function(e){e.back="back",e.forward="forward",e.unknown=""})(r6||(r6={}));function YM(e){if(!e)if(i4){const c=document.querySelector("base");e=c&&c.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),WM(e)}const XM=/^[^#]+#/;function JM(e,c){return e.replace(XM,"#")+c}function cV(e,c){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:c.behavior,left:s.left-a.left-(c.left||0),top:s.top-a.top-(c.top||0)}}const D5=()=>({left:window.pageXOffset,top:window.pageYOffset});function eV(e){let c;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;c=cV(t,e)}else c=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function Ma(e,c){return(history.state?history.state.position-c:-1)+e}const p7=new Map;function aV(e,c){p7.set(e,c)}function sV(e){const c=p7.get(e);return p7.delete(e),c}let tV=()=>location.protocol+"//"+location.host;function nr(e,c){const{pathname:a,search:s,hash:t}=c,r=e.indexOf("#");if(r>-1){let i=t.includes(e.slice(r))?e.slice(r).length:1,o=t.slice(i);return o[0]!=="/"&&(o="/"+o),za(o,"")}return za(a,e)+s+t}function rV(e,c,a,s){let t=[],r=[],n=null;const i=({state:u})=>{const v=nr(e,location),d=a.value,V=c.value;let b=0;if(u){if(a.value=v,c.value=u,n&&n===d){n=null;return}b=V?u.position-V.position:0}else s(v);t.forEach(p=>{p(a.value,d,{delta:b,type:H6.pop,direction:b?b>0?r6.forward:r6.back:r6.unknown})})};function o(){n=a.value}function l(u){t.push(u);const v=()=>{const d=t.indexOf(u);d>-1&&t.splice(d,1)};return r.push(v),v}function f(){const{history:u}=window;!u.state||u.replaceState(f1({},u.state,{scroll:D5()}),"")}function h(){for(const u of r)u();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:l,destroy:h}}function Va(e,c,a,s=!1,t=!1){return{back:e,current:c,forward:a,replaced:s,position:window.history.length,scroll:t?D5():null}}function nV(e){const{history:c,location:a}=window,s={value:nr(e,a)},t={value:c.state};t.value||r(s.value,{back:null,current:s.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const h=e.indexOf("#"),u=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+o:tV()+e+o;try{c[f?"replaceState":"pushState"](l,"",u),t.value=l}catch(v){console.error(v),a[f?"replace":"assign"](u)}}function n(o,l){const f=f1({},c.state,Va(t.value.back,o,t.value.forward,!0),l,{position:t.value.position});r(o,f,!0),s.value=o}function i(o,l){const f=f1({},t.value,c.state,{forward:o,scroll:D5()});r(f.current,f,!0);const h=f1({},Va(s.value,o,null),{position:f.position+1},l);r(o,h,!1),s.value=o}return{location:s,state:t,push:i,replace:n}}function iV(e){e=YM(e);const c=nV(e),a=rV(e,c.state,c.location,c.replace);function s(r,n=!0){n||a.pauseListeners(),history.go(r)}const t=f1({location:"",base:e,go:s,createHref:JM.bind(null,e)},c,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>c.state.value}),t}function oV(e){return typeof e=="string"||e&&typeof e=="object"}function ir(e){return typeof e=="string"||typeof e=="symbol"}const r3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},or=Symbol("");var ga;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ga||(ga={}));function y4(e,c){return f1(new Error,{type:e,[or]:!0},c)}function q2(e,c){return e instanceof Error&&or in e&&(c==null||!!(e.type&c))}const La="[^/]+?",lV={sensitive:!1,strict:!1,start:!0,end:!0},fV=/[.+*?^${}()[\]/\\]/g;function hV(e,c){const a=f1({},lV,c),s=[];let t=a.start?"^":"";const r=[];for(const l of e){const f=l.length?[]:[90];a.strict&&!l.length&&(t+="/");for(let h=0;h<l.length;h++){const u=l[h];let v=40+(a.sensitive?.25:0);if(u.type===0)h||(t+="/"),t+=u.value.replace(fV,"\\$&"),v+=40;else if(u.type===1){const{value:d,repeatable:V,optional:b,regexp:p}=u;r.push({name:d,repeatable:V,optional:b});const M=p||La;if(M!==La){v+=10;try{new RegExp(`(${M})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${d}" (${M}): `+O.message)}}let D=V?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(D=b&&l.length<2?`(?:/${D})`:"/"+D),b&&(D+="?"),t+=D,v+=20,b&&(v+=-8),V&&(v+=-20),M===".*"&&(v+=-50)}f.push(v)}s.push(f)}if(a.strict&&a.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const n=new RegExp(t,a.sensitive?"":"i");function i(l){const f=l.match(n),h={};if(!f)return null;for(let u=1;u<f.length;u++){const v=f[u]||"",d=r[u-1];h[d.name]=v&&d.repeatable?v.split("/"):v}return h}function o(l){let f="",h=!1;for(const u of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const v of u)if(v.type===0)f+=v.value;else if(v.type===1){const{value:d,repeatable:V,optional:b}=v,p=d in l?l[d]:"";if(k2(p)&&!V)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const M=k2(p)?p.join("/"):p;if(!M)if(b)u.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${d}"`);f+=M}}return f||"/"}return{re:n,score:s,keys:r,parse:i,stringify:o}}function uV(e,c){let a=0;for(;a<e.length&&a<c.length;){const s=c[a]-e[a];if(s)return s;a++}return e.length<c.length?e.length===1&&e[0]===40+40?-1:1:e.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function mV(e,c){let a=0;const s=e.score,t=c.score;for(;a<s.length&&a<t.length;){const r=uV(s[a],t[a]);if(r)return r;a++}if(Math.abs(t.length-s.length)===1){if(ba(s))return 1;if(ba(t))return-1}return t.length-s.length}function ba(e){const c=e[e.length-1];return e.length>0&&c[c.length-1]<0}const vV={type:0,value:""},CV=/[a-zA-Z0-9_]/;function pV(e){if(!e)return[[]];if(e==="/")return[[vV]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function c(v){throw new Error(`ERR (${a})/"${l}": ${v}`)}let a=0,s=a;const t=[];let r;function n(){r&&t.push(r),r=[]}let i=0,o,l="",f="";function h(){!l||(a===0?r.push({type:0,value:l}):a===1||a===2||a===3?(r.length>1&&(o==="*"||o==="+")&&c(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):c("Invalid state to consume buffer"),l="")}function u(){l+=o}for(;i<e.length;){if(o=e[i++],o==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:o==="/"?(l&&h(),n()):o===":"?(h(),a=1):u();break;case 4:u(),a=s;break;case 1:o==="("?a=2:CV.test(o)?u():(h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:a=3:f+=o;break;case 3:h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:c("Unknown state");break}}return a===2&&c(`Unfinished custom RegExp for param "${l}"`),h(),n(),t}function dV(e,c,a){const s=hV(pV(e.path),a),t=f1(s,{record:e,parent:c,children:[],alias:[]});return c&&!t.record.aliasOf==!c.record.aliasOf&&c.children.push(t),t}function zV(e,c){const a=[],s=new Map;c=Sa({strict:!1,end:!0,sensitive:!1},c);function t(f){return s.get(f)}function r(f,h,u){const v=!u,d=HV(f);d.aliasOf=u&&u.record;const V=Sa(c,f),b=[d];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of D)b.push(f1({},d,{components:u?u.record.components:d.components,path:O,aliasOf:u?u.record:d}))}let p,M;for(const D of b){const{path:O}=D;if(h&&O[0]!=="/"){const J=h.record.path,v1=J[J.length-1]==="/"?"":"/";D.path=h.record.path+(O&&v1+O)}if(p=dV(D,h,V),u?u.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),v&&f.name&&!ya(p)&&n(f.name)),d.children){const J=d.children;for(let v1=0;v1<J.length;v1++)r(J[v1],p,u&&u.children[v1])}u=u||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&o(p)}return M?()=>{n(M)}:t6}function n(f){if(ir(f)){const h=s.get(f);h&&(s.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(n),h.alias.forEach(n))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(n),f.alias.forEach(n))}}function i(){return a}function o(f){let h=0;for(;h<a.length&&mV(f,a[h])>=0&&(f.record.path!==a[h].record.path||!lr(f,a[h]));)h++;a.splice(h,0,f),f.record.name&&!ya(f)&&s.set(f.record.name,f)}function l(f,h){let u,v={},d,V;if("name"in f&&f.name){if(u=s.get(f.name),!u)throw y4(1,{location:f});V=u.record.name,v=f1(xa(h.params,u.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&xa(f.params,u.keys.map(M=>M.name))),d=u.stringify(v)}else if("path"in f)d=f.path,u=a.find(M=>M.re.test(d)),u&&(v=u.parse(d),V=u.record.name);else{if(u=h.name?s.get(h.name):a.find(M=>M.re.test(h.path)),!u)throw y4(1,{location:f,currentLocation:h});V=u.record.name,v=f1({},h.params,f.params),d=u.stringify(v)}const b=[];let p=u;for(;p;)b.unshift(p.record),p=p.parent;return{name:V,path:d,params:v,matched:b,meta:VV(b)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:n,getRoutes:i,getRecordMatcher:t}}function xa(e,c){const a={};for(const s of c)s in e&&(a[s]=e[s]);return a}function HV(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:MV(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function MV(e){const c={},a=e.props||!1;if("component"in e)c.default=a;else for(const s in e.components)c[s]=typeof a=="boolean"?a:a[s];return c}function ya(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function VV(e){return e.reduce((c,a)=>f1(c,a.meta),{})}function Sa(e,c){const a={};for(const s in e)a[s]=s in c?c[s]:e[s];return a}function lr(e,c){return c.children.some(a=>a===e||lr(e,a))}const fr=/#/g,gV=/&/g,LV=/\//g,bV=/=/g,xV=/\?/g,hr=/\+/g,yV=/%5B/g,SV=/%5D/g,ur=/%5E/g,NV=/%60/g,mr=/%7B/g,wV=/%7C/g,vr=/%7D/g,kV=/%20/g;function N9(e){return encodeURI(""+e).replace(wV,"|").replace(yV,"[").replace(SV,"]")}function AV(e){return N9(e).replace(mr,"{").replace(vr,"}").replace(ur,"^")}function d7(e){return N9(e).replace(hr,"%2B").replace(kV,"+").replace(fr,"%23").replace(gV,"%26").replace(NV,"`").replace(mr,"{").replace(vr,"}").replace(ur,"^")}function TV(e){return d7(e).replace(bV,"%3D")}function EV(e){return N9(e).replace(fr,"%23").replace(xV,"%3F")}function PV(e){return e==null?"":EV(e).replace(LV,"%2F")}function e5(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _V(e){const c={};if(e===""||e==="?")return c;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<s.length;++t){const r=s[t].replace(hr," "),n=r.indexOf("="),i=e5(n<0?r:r.slice(0,n)),o=n<0?null:e5(r.slice(n+1));if(i in c){let l=c[i];k2(l)||(l=c[i]=[l]),l.push(o)}else c[i]=o}return c}function Na(e){let c="";for(let a in e){const s=e[a];if(a=TV(a),s==null){s!==void 0&&(c+=(c.length?"&":"")+a);continue}(k2(s)?s.map(r=>r&&d7(r)):[s&&d7(s)]).forEach(r=>{r!==void 0&&(c+=(c.length?"&":"")+a,r!=null&&(c+="="+r))})}return c}function DV(e){const c={};for(const a in e){const s=e[a];s!==void 0&&(c[a]=k2(s)?s.map(t=>t==null?null:""+t):s==null?s:""+s)}return c}const RV=Symbol(""),wa=Symbol(""),w9=Symbol(""),Cr=Symbol(""),z7=Symbol("");function K4(){let e=[];function c(s){return e.push(s),()=>{const t=e.indexOf(s);t>-1&&e.splice(t,1)}}function a(){e=[]}return{add:c,list:()=>e,reset:a}}function o3(e,c,a,s,t){const r=s&&(s.enterCallbacks[t]=s.enterCallbacks[t]||[]);return()=>new Promise((n,i)=>{const o=h=>{h===!1?i(y4(4,{from:a,to:c})):h instanceof Error?i(h):oV(h)?i(y4(2,{from:c,to:h})):(r&&s.enterCallbacks[t]===r&&typeof h=="function"&&r.push(h),n())},l=e.call(s&&s.instances[t],c,a,o);let f=Promise.resolve(l);e.length<3&&(f=f.then(o)),f.catch(h=>i(h))})}function I0(e,c,a,s){const t=[];for(const r of e)for(const n in r.components){let i=r.components[n];if(!(c!=="beforeRouteEnter"&&!r.instances[n]))if(IV(i)){const l=(i.__vccOpts||i)[c];l&&t.push(o3(l,a,s,r,n))}else{let o=i();t.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${r.path}"`));const f=$M(l)?l.default:l;r.components[n]=f;const u=(f.__vccOpts||f)[c];return u&&o3(u,a,s,r,n)()}))}}return t}function IV(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ka(e){const c=h3(w9),a=h3(Cr),s=y1(()=>c.resolve(C4(e.to))),t=y1(()=>{const{matched:o}=s.value,{length:l}=o,f=o[l-1],h=a.matched;if(!f||!h.length)return-1;const u=h.findIndex(x4.bind(null,f));if(u>-1)return u;const v=Aa(o[l-2]);return l>1&&Aa(f)===v&&h[h.length-1].path!==v?h.findIndex(x4.bind(null,o[l-2])):u}),r=y1(()=>t.value>-1&&qV(a.params,s.value.params)),n=y1(()=>t.value>-1&&t.value===a.matched.length-1&&rr(a.params,s.value.params));function i(o={}){return OV(o)?c[C4(e.replace)?"replace":"push"](C4(e.to)).catch(t6):Promise.resolve()}return{route:s,href:y1(()=>s.value.href),isActive:r,isExactActive:n,navigate:i}}const FV=q6({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ka,setup(e,{slots:c}){const a=O6(ka(e)),{options:s}=h3(w9),t=y1(()=>({[Ta(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[Ta(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=c.default&&c.default(a);return e.custom?r:_5("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},r)}}}),BV=FV;function OV(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const c=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return e.preventDefault&&e.preventDefault(),!0}}function qV(e,c){for(const a in c){const s=c[a],t=e[a];if(typeof s=="string"){if(s!==t)return!1}else if(!k2(t)||t.length!==s.length||s.some((r,n)=>r!==t[n]))return!1}return!0}function Aa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ta=(e,c,a)=>e!=null?e:c!=null?c:a,UV=q6({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:c,slots:a}){const s=h3(z7),t=y1(()=>e.route||s.value),r=h3(wa,0),n=y1(()=>{let l=C4(r);const{matched:f}=t.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),i=y1(()=>t.value.matched[n.value]);F8(wa,y1(()=>n.value+1)),F8(RV,i),F8(z7,t);const o=Y8();return a6(()=>[o.value,i.value,e.name],([l,f,h],[u,v,d])=>{f&&(f.instances[h]=l,v&&v!==f&&l&&l===u&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),l&&f&&(!v||!x4(f,v)||!u)&&(f.enterCallbacks[h]||[]).forEach(V=>V(l))},{flush:"post"}),()=>{const l=t.value,f=e.name,h=i.value,u=h&&h.components[f];if(!u)return Ea(a.default,{Component:u,route:l});const v=h.props[f],d=v?v===!0?l.params:typeof v=="function"?v(l):v:null,b=_5(u,f1({},d,c,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[f]=null)},ref:o}));return Ea(a.default,{Component:b,route:l})||b}}});function Ea(e,c){if(!e)return null;const a=e(c);return a.length===1?a[0]:a}const $V=UV;function GV(e){const c=zV(e.routes,e),a=e.parseQuery||_V,s=e.stringifyQuery||Na,t=e.history,r=K4(),n=K4(),i=K4(),o=kz(r3);let l=r3;i4&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=D0.bind(null,g=>""+g),h=D0.bind(null,PV),u=D0.bind(null,e5);function v(g,P){let A,q;return ir(g)?(A=c.getRecordMatcher(g),q=P):q=g,c.addRoute(q,A)}function d(g){const P=c.getRecordMatcher(g);P&&c.removeRoute(P)}function V(){return c.getRoutes().map(g=>g.record)}function b(g){return!!c.getRecordMatcher(g)}function p(g,P){if(P=f1({},P||o.value),typeof g=="string"){const m=R0(a,g,P.path),C=c.resolve({path:m.path},P),z=t.createHref(m.fullPath);return f1(m,C,{params:u(C.params),hash:e5(m.hash),redirectedFrom:void 0,href:z})}let A;if("path"in g)A=f1({},g,{path:R0(a,g.path,P.path).path});else{const m=f1({},g.params);for(const C in m)m[C]==null&&delete m[C];A=f1({},g,{params:h(g.params)}),P.params=h(P.params)}const q=c.resolve(A,P),n1=g.hash||"";q.params=f(u(q.params));const x1=jM(s,f1({},g,{hash:AV(n1),path:q.path})),c1=t.createHref(x1);return f1({fullPath:x1,hash:n1,query:s===Na?DV(g.query):g.query||{}},q,{redirectedFrom:void 0,href:c1})}function M(g){return typeof g=="string"?R0(a,g,o.value.path):f1({},g)}function D(g,P){if(l!==g)return y4(8,{from:P,to:g})}function O(g){return H1(g)}function J(g){return O(f1(M(g),{replace:!0}))}function v1(g){const P=g.matched[g.matched.length-1];if(P&&P.redirect){const{redirect:A}=P;let q=typeof A=="function"?A(g):A;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=M(q):{path:q},q.params={}),f1({query:g.query,hash:g.hash,params:"path"in q?{}:g.params},q)}}function H1(g,P){const A=l=p(g),q=o.value,n1=g.state,x1=g.force,c1=g.replace===!0,m=v1(A);if(m)return H1(f1(M(m),{state:typeof m=="object"?f1({},n1,m.state):n1,force:x1,replace:c1}),P||A);const C=A;C.redirectedFrom=P;let z;return!x1&&KM(s,q,A)&&(z=y4(16,{to:C,from:q}),y3(q,q,!0,!1)),(z?Promise.resolve(z):X1(C,q)).catch(H=>q2(H)?q2(H,2)?H:z2(H):C1(H,C,q)).then(H=>{if(H){if(q2(H,2))return H1(f1({replace:c1},M(H.to),{state:typeof H.to=="object"?f1({},n1,H.to.state):n1,force:x1}),P||C)}else H=s3(C,q,!0,c1,n1);return v2(C,q,H),H})}function i2(g,P){const A=D(g,P);return A?Promise.reject(A):Promise.resolve()}function X1(g,P){let A;const[q,n1,x1]=WV(g,P);A=I0(q.reverse(),"beforeRouteLeave",g,P);for(const m of q)m.leaveGuards.forEach(C=>{A.push(o3(C,g,P))});const c1=i2.bind(null,g,P);return A.push(c1),t4(A).then(()=>{A=[];for(const m of r.list())A.push(o3(m,g,P));return A.push(c1),t4(A)}).then(()=>{A=I0(n1,"beforeRouteUpdate",g,P);for(const m of n1)m.updateGuards.forEach(C=>{A.push(o3(C,g,P))});return A.push(c1),t4(A)}).then(()=>{A=[];for(const m of g.matched)if(m.beforeEnter&&!P.matched.includes(m))if(k2(m.beforeEnter))for(const C of m.beforeEnter)A.push(o3(C,g,P));else A.push(o3(m.beforeEnter,g,P));return A.push(c1),t4(A)}).then(()=>(g.matched.forEach(m=>m.enterCallbacks={}),A=I0(x1,"beforeRouteEnter",g,P),A.push(c1),t4(A))).then(()=>{A=[];for(const m of n.list())A.push(o3(m,g,P));return A.push(c1),t4(A)}).catch(m=>q2(m,8)?m:Promise.reject(m))}function v2(g,P,A){for(const q of i.list())q(g,P,A)}function s3(g,P,A,q,n1){const x1=D(g,P);if(x1)return x1;const c1=P===r3,m=i4?history.state:{};A&&(q||c1?t.replace(g.fullPath,f1({scroll:c1&&m&&m.scroll},n1)):t.push(g.fullPath,n1)),o.value=g,y3(g,P,A,c1),z2()}let A2;function e4(){A2||(A2=t.listen((g,P,A)=>{if(!C8.listening)return;const q=p(g),n1=v1(q);if(n1){H1(f1(n1,{replace:!0}),q).catch(t6);return}l=q;const x1=o.value;i4&&aV(Ma(x1.fullPath,A.delta),D5()),X1(q,x1).catch(c1=>q2(c1,12)?c1:q2(c1,2)?(H1(c1.to,q).then(m=>{q2(m,20)&&!A.delta&&A.type===H6.pop&&t.go(-1,!1)}).catch(t6),Promise.reject()):(A.delta&&t.go(-A.delta,!1),C1(c1,q,x1))).then(c1=>{c1=c1||s3(q,x1,!1),c1&&(A.delta&&!q2(c1,8)?t.go(-A.delta,!1):A.type===H6.pop&&q2(c1,20)&&t.go(-1,!1)),v2(q,x1,c1)}).catch(t6)}))}let x3=K4(),G4=K4(),w1;function C1(g,P,A){z2(g);const q=G4.list();return q.length?q.forEach(n1=>n1(g,P,A)):console.error(g),Promise.reject(g)}function h1(){return w1&&o.value!==r3?Promise.resolve():new Promise((g,P)=>{x3.add([g,P])})}function z2(g){return w1||(w1=!g,e4(),x3.list().forEach(([P,A])=>g?A(g):P()),x3.reset()),g}function y3(g,P,A,q){const{scrollBehavior:n1}=e;if(!i4||!n1)return Promise.resolve();const x1=!A&&sV(Ma(g.fullPath,0))||(q||!A)&&history.state&&history.state.scroll||null;return Et().then(()=>n1(g,P,x1)).then(c1=>c1&&eV(c1)).catch(c1=>C1(c1,g,P))}const H2=g=>t.go(g);let a2;const a4=new Set,C8={currentRoute:o,listening:!0,addRoute:v,removeRoute:d,hasRoute:b,getRoutes:V,resolve:p,options:e,push:O,replace:J,go:H2,back:()=>H2(-1),forward:()=>H2(1),beforeEach:r.add,beforeResolve:n.add,afterEach:i.add,onError:G4.add,isReady:h1,install(g){const P=this;g.component("RouterLink",BV),g.component("RouterView",$V),g.config.globalProperties.$router=P,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>C4(o)}),i4&&!a2&&o.value===r3&&(a2=!0,O(t.location).catch(n1=>{}));const A={};for(const n1 in r3)A[n1]=y1(()=>o.value[n1]);g.provide(w9,P),g.provide(Cr,O6(A)),g.provide(z7,o);const q=g.unmount;a4.add(g),g.unmount=function(){a4.delete(g),a4.size<1&&(l=r3,A2&&A2(),A2=null,o.value=r3,a2=!1,w1=!1),q()}}};return C8}function t4(e){return e.reduce((c,a)=>c.then(()=>a()),Promise.resolve())}function WV(e,c){const a=[],s=[],t=[],r=Math.max(c.matched.length,e.matched.length);for(let n=0;n<r;n++){const i=c.matched[n];i&&(e.matched.find(l=>x4(l,i))?s.push(i):a.push(i));const o=e.matched[n];o&&(c.matched.find(l=>x4(l,o))||t.push(o))}return[a,s,t]}const jV={props:{name:{type:String,default:"None"},nickname:{type:String,default:"None"},birthday:{type:String,default:"None"},team:{type:String,default:"None"},inGameName:{type:String,default:"None"},year:{type:String,default:"None"},image:{type:String,default:"https://t4.ftcdn.net/jpg/04/43/94/65/360_F_443946521_H2fUJJyxk2YuqwQP1dUvg0JavzhanSOV.jpg"},facebook:{type:String,default:"facebook.com"},instagram:{type:String,default:"instagram.com"},github:{type:String,default:"github.com"},detail:{type:String,default:"None"},studentID:{type:String,default:"None"}},methods:{getUrlImage(e){return{"background-image":'url(".src/'+e+'")'}},getImage(e){return new URL(e)},getUrl(e){return new URL(e),e},getName(e){return e}}},KV=["title"],ZV={class:"relative content-center"},QV=["src"],YV={class:"text-yellow-900 font-bold text-[20px] mt-[7px]"},XV={class:"font-bold"},JV=E("br",null,null,-1),cg={class:"text-red-600"},eg={class:"text-green-600 inline"},ag={class:"border-t-[3px] border-gray-800 mt-[4px] text-right"},sg={class:"mt-[10px] space-x-[3px]"},tg=["href"],rg=["href"],ng=["href"];function ig(e,c,a,s,t,r){const n=B3("font-awesome-icon");return p2(),x2("div",null,[E("div",{class:"text-center w-[240px] h-fit border border-yellow-500 rounded-md shadow-md p-3.5 scale-100 bg-yellow-200 overflow-hidden hover:scale-105 ease-in duration-100 hover:bg-yellow-100",title:r.getName(a.name)},[E("div",ZV,[E("div",null,[E("img",{src:r.getImage(a.image),alt:"Profile Image",title:"Profile Image",class:"rounded-full h-[210px] w-[210px] border border-black"},null,8,QV)]),E("div",YV,l2(a.name),1),E("div",XV,[w2(l2(a.nickname)+" ",1),JV,w2(" "+l2(a.inGameName),1)]),E("div",cg,[w2(l2(a.team)+" ",1),E("p",eg,l2(a.year),1)]),E("div",null,l2(a.birthday),1),E("div",null,l2(a.studentID),1)]),E("div",ag,[E("div",sg,[E("a",{href:r.getUrl(a.github),target:"_blank",title:"Github",class:"hover:text-white"},[d1(n,{icon:"fa-brands fa-github",class:"text-[25px] m-[5px]"})],8,tg),E("a",{href:r.getUrl(a.facebook),target:"_blank",title:"Facebook",class:"hover:text-blue-500"},[d1(n,{icon:"fa-brands fa-facebook",class:"text-[25px] m-[5px]"})],8,rg),E("a",{href:r.getUrl(a.instagram),target:"_blank",title:"Instagram",class:"hover:text-red-400"},[d1(n,{icon:"fa-brands fa-instagram",class:"text-[25px] m-[5px]"})],8,ng)])])],8,KV)])}const og=U6(jV,[["render",ig]]),lg={data(){return{members:[{name:"Patinya Saichantadee",nickname:"Tonnow",inGameName:"ColdOriginZ",team:"CNO",year:"KU81",birthday:"11-17-2002",studentID:"6410406754",facebook:"https://www.facebook.com/Tpatinya/",github:"https://www.github.com/PatinyaCXLD/",instagram:"https://www.instagram.com/cxld.pty/",detail:"\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E04\u0E23\u0E31\u0E1A \u0E1C\u0E21\u0E19\u0E32\u0E22\u0E1B\u0E0F\u0E34\u0E0D\u0E0D\u0E32 \u0E2A\u0E32\u0E22\u0E08\u0E31\u0E19\u0E17\u0E14\u0E35 \u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E15\u0E49\u0E19\u0E2B\u0E19\u0E32\u0E27\u0E19\u0E30\u0E04\u0E23\u0E31\u0E1A \u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E40\u0E01\u0E29\u0E15\u0E23\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E1A\u0E32\u0E07\u0E40\u0E02\u0E19 \u0E04\u0E13\u0E30\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E2A\u0E32\u0E02\u0E32\u0E20\u0E32\u0E04\u0E27\u0E34\u0E0A\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C \u0E1B\u0E35\u0E17\u0E35\u0E48 2 \u0E04\u0E23\u0E31\u0E1A",image:"https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/306148111_1880034558867492_7239761071913403261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_XeFqM296J4AX8utin4&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfAeICXwBymDgAushZ-y3tunHsjPAJs5a7MqDMSJpx640g&oe=637655F6"},{name:"Sittipong Hemloum",nickname:"Ong",inGameName:"KanaMooKrob",team:"CNO",year:"KU81",birthday:"09-21-2001",studentID:"6410401183",facebook:"https://www.facebook.com/profile.php?id=100008313884704",github:"https://www.github.com/ong22280/",instagram:"https://www.instagram.com/sittipongong/",detail:"This is just a test",image:"https://scontent-sin6-2.xx.fbcdn.net/v/t1.15752-9/310835510_684981289522964_3461760171192846605_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RbRFs_Ahn1wAX8KvYaR&_nc_ht=scontent-sin6-2.xx&oh=03_AdQtCRMXZcFGk2BujrCs4TT0Z-x4cp8bb_OiUzy9xMIJEA&oe=6393DCA4"},{name:"Punnatud Duengkae",nickname:"Nokkok",inGameName:"DraftMaster",team:"CNO",year:"KU81",birthday:"12-27-2002",studentID:"6410406771",facebook:"https://www.facebook.com/punnatud.duengkae",github:"https://www.github.com/Punnatud/",instagram:"https://www.instagram.com/nokkokalderaan/",detail:"This is just a test",image:"https://scontent.xx.fbcdn.net/v/t1.15752-9/314996702_793191231783542_1834186024487866866_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHxhAupt6EMolQKsnD6EUNHRiieUlpupj9GKJ5SWm6mP6d6bkW_6d0-SOiW-AlNyALiszDs4y4p4d4lZPvc0NwS&_nc_ohc=bhquXO4u3f4AX-LhpD3&_nc_ht=scontent.fbkk5-5.fna&oh=03_AdTWYBKW5KETNPuMD0ayMY_7iyQPYO01PM-zelgU1yaBqA&oe=6397EB88&_nc_fr=fbkk5c05"}],name:"Patinya Saichantadee",nickname:"Tonnow",birthday:"17-11-2002",team:"CNO",inGameName:"ColdOriginZ",year:"KU81",image:"https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/306148111_1880034558867492_7239761071913403261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X2MKA-ZW1JcAX9v_Uu6&_nc_ht=scontent-sin6-4.xx&oh=00_AfAWqFIQ_bf49w75-KLuajS4IVz1ihVV7PHUk-tzih-vlQ&oe=63706736",selected:!1,detail:""}},components:{profileCard:og},methods:{getMemberNumber(){return"basis-1/"+this.members.length+" flex justify-center h-fit"},scrollToElement(e){var c=this.$refs[e],a=c.offsetTop;window.scrollTo(0,a)},showPopup(e){e!=this.name?(this.selected=!0,this.goToBottom()):this.selected?(this.goToTop(),setTimeout(()=>{this.selected=!1},200)):(this.selected=!0,this.goToBottom())},goToBottom(){setTimeout(()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})},goToTop(){window.scrollTo({top:0,behavior:"smooth"})},getHeight(){console.log(document.documentElement.scrollHeight)}}},fg=E("div",{class:"text-center flex justify-center h-[15px] pt-5 star4"},[E("h1",{class:"text-white font-bold text-[60px] w-[280px] hover:scale-110 hover:text-yellow-300"},"{ C N O }")],-1),hg={class:"h-cover w-cover bg-cover p-[50px] star3"},ug={class:"flex-col justify-center mt-[-6%]"},mg={class:"p-[50px] flex flex-wrap justify-center mt-[10%]"},vg=["onClick"],Cg={key:0,ref:"detailBox",class:"bg-gray-900 h-cover w-[30%] ml-[35%] pb-[12px] rounded-xl animate-popup font-code font-regular"},pg=wH('<div class="bg-gray-300 pt-[1.5%] pl-[1.5%] pb-[1%] rounded-t-xl"><div class="flex"><div class="h-[10px] w-[10px] rounded-full bg-green-600 mr-[4px]"></div><div class="h-[10px] w-[10px] rounded-full bg-yellow-600 mr-[4px]"></div><div class="h-[10px] w-[10px] rounded-full bg-red-600 mr-[4px]"></div></div></div>',1),dg={class:"animate-fade"},zg={class:"text-red-300 ml-[3%] pt-[2%]"},Hg=E("p",{class:"text-fuchsia-500 inline"},"import",-1),Mg=E("p",{class:"text-fuchsia-500 inline"},"from",-1),Vg=E("div",{class:"text-blue-300 ml-[3%] pt-[2%] mr-[3%]"},[w2(" main : "),E("p",{class:"text-yellow-500"},"{")],-1),gg={class:"text-gray-400 ml-[35px] mr-[35px]"},Lg=E("div",{class:"text-yellow-500 ml-[3%]"},[w2(" }"),E("span",{class:"text-white"},",")],-1);function bg(e,c,a,s,t,r){const n=B3("profileCard");return p2(),x2("div",null,[fg,E("div",hg,[E("div",ug,[E("div",mg,[(p2(!0),x2(C2,null,Wt(t.members,i=>(p2(),x2("div",{class:B6(r.getMemberNumber()),key:i},[E("button",{onClick:o=>{r.showPopup(i.name),this.name=i.name,this.nickname=i.nickname,this.detail=i.detail}},[d1(n,{name:i.name,nickname:i.nickname,inGameName:i.inGameName,team:i.team,year:i.year,birthday:i.birthday,studentID:i.studentID,image:i.image,facebook:i.facebook,github:i.github,instagram:i.instagram},null,8,["name","nickname","inGameName","team","year","birthday","studentID","image","facebook","github","instagram"])],8,vg)],2))),128))]),t.selected?(p2(),x2("div",Cg,[pg,E("div",dg,[E("div",zg,[Hg,w2(" "+l2(t.nickname)+" ",1),Mg,w2(' "'+l2(t.name)+'" ',1)]),Vg,E("div",gg,l2(t.detail),1),Lg])],512)):kH("",!0)])])])}const xg=U6(lg,[["render",bg]]);/**
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
 */const pr=function(e){const c=[];let a=0;for(let s=0;s<e.length;s++){let t=e.charCodeAt(s);t<128?c[a++]=t:t<2048?(c[a++]=t>>6|192,c[a++]=t&63|128):(t&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(t=65536+((t&1023)<<10)+(e.charCodeAt(++s)&1023),c[a++]=t>>18|240,c[a++]=t>>12&63|128,c[a++]=t>>6&63|128,c[a++]=t&63|128):(c[a++]=t>>12|224,c[a++]=t>>6&63|128,c[a++]=t&63|128)}return c},yg=function(e){const c=[];let a=0,s=0;for(;a<e.length;){const t=e[a++];if(t<128)c[s++]=String.fromCharCode(t);else if(t>191&&t<224){const r=e[a++];c[s++]=String.fromCharCode((t&31)<<6|r&63)}else if(t>239&&t<365){const r=e[a++],n=e[a++],i=e[a++],o=((t&7)<<18|(r&63)<<12|(n&63)<<6|i&63)-65536;c[s++]=String.fromCharCode(55296+(o>>10)),c[s++]=String.fromCharCode(56320+(o&1023))}else{const r=e[a++],n=e[a++];c[s++]=String.fromCharCode((t&15)<<12|(r&63)<<6|n&63)}}return c.join("")},dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],n=t+1<e.length,i=n?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,f=r>>2,h=(r&3)<<4|i>>4;let u=(i&15)<<2|l>>6,v=l&63;o||(v=64,n||(u=64)),s.push(a[f],a[h],a[u],a[v])}return s.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(pr(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):yg(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=a[e.charAt(t++)],i=t<e.length?a[e.charAt(t)]:0;++t;const l=t<e.length?a[e.charAt(t)]:64;++t;const h=t<e.length?a[e.charAt(t)]:64;if(++t,r==null||i==null||l==null||h==null)throw Error();const u=r<<2|i>>4;if(s.push(u),l!==64){const v=i<<4&240|l>>2;if(s.push(v),h!==64){const d=l<<6&192|h;s.push(d)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Sg=function(e){const c=pr(e);return dr.encodeByteArray(c,!0)},a5=function(e){return Sg(e).replace(/\./g,"")},Ng=function(e){try{return dr.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};function wg(){return typeof indexedDB=="object"}function kg(){return new Promise((e,c)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(s);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(s),e(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var r;c(((r=t.error)===null||r===void 0?void 0:r.message)||"")}}catch(a){c(a)}})}function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tg=()=>Ag().__FIREBASE_DEFAULTS__,Eg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Pg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&Ng(e[1]);return c&&JSON.parse(c)},zr=()=>{try{return Tg()||Eg()||Pg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_g=e=>{var c,a;return(a=(c=zr())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},Dg=e=>{const c=_g(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const s=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),s]:[c.substring(0,a),s]},Rg=()=>{var e;return(e=zr())===null||e===void 0?void 0:e.config};/**
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
 */class Ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,s)=>{a?this.reject(a):this.resolve(s),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,s))}}}/**
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
 */function Fg(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},s=c||"demo-project",t=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const n=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:t,exp:t+3600,auth_time:t,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),i="";return[a5(JSON.stringify(a)),a5(JSON.stringify(n)),i].join(".")}/**
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
 */const Bg="FirebaseError";class I4 extends Error{constructor(c,a,s){super(a),this.code=c,this.customData=s,this.name=Bg,Object.setPrototypeOf(this,I4.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(c,a,s){this.service=c,this.serviceName=a,this.errors=s}create(c,...a){const s=a[0]||{},t=`${this.service}/${c}`,r=this.errors[c],n=r?Og(r,s):"Error",i=`${this.serviceName}: ${n} (${t}).`;return new I4(t,i,s)}}function Og(e,c){return e.replace(qg,(a,s)=>{const t=c[s];return t!=null?String(t):`<${s}?>`})}const qg=/\{\$([^}]+)}/g;function H7(e,c){if(e===c)return!0;const a=Object.keys(e),s=Object.keys(c);for(const t of a){if(!s.includes(t))return!1;const r=e[t],n=c[t];if(Pa(r)&&Pa(n)){if(!H7(r,n))return!1}else if(r!==n)return!1}for(const t of s)if(!a.includes(t))return!1;return!0}function Pa(e){return e!==null&&typeof e=="object"}/**
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
 */function j2(e){return e&&e._delegate?e._delegate:e}class M6{constructor(c,a,s){this.name=c,this.instanceFactory=a,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
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
 */const k3="[DEFAULT]";/**
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
 */class Ug{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const s=new Ig;if(this.instancesDeferred.set(a,s),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&s.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const s=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),t=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(t)return null;throw r}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(Gg(c))try{this.getOrInitializeService({instanceIdentifier:k3})}catch{}for(const[a,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:t});s.resolve(r)}catch{}}}}clearInstance(c=k3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=k3){return this.instances.has(c)}getOptions(c=k3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:s,options:a});for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);s===i&&n.resolve(t)}return t}onInit(c,a){var s;const t=this.normalizeInstanceIdentifier(a),r=(s=this.onInitCallbacks.get(t))!==null&&s!==void 0?s:new Set;r.add(c),this.onInitCallbacks.set(t,r);const n=this.instances.get(t);return n&&c(n,t),()=>{r.delete(c)}}invokeOnInitCallbacks(c,a){const s=this.onInitCallbacks.get(a);if(!!s)for(const t of s)try{t(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let s=this.instances.get(c);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$g(c),options:a}),this.instances.set(c,s),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(s,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,s)}catch{}return s||null}normalizeInstanceIdentifier(c=k3){return this.component?this.component.multipleInstances?c:k3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $g(e){return e===k3?void 0:e}function Gg(e){return e.instantiationMode==="EAGER"}/**
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
 */class Wg{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new Ug(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var i1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(i1||(i1={}));const jg={debug:i1.DEBUG,verbose:i1.VERBOSE,info:i1.INFO,warn:i1.WARN,error:i1.ERROR,silent:i1.SILENT},Kg=i1.INFO,Zg={[i1.DEBUG]:"log",[i1.VERBOSE]:"log",[i1.INFO]:"info",[i1.WARN]:"warn",[i1.ERROR]:"error"},Qg=(e,c,...a)=>{if(c<e.logLevel)return;const s=new Date().toISOString(),t=Zg[c];if(t)console[t](`[${s}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class Mr{constructor(c){this.name=c,this._logLevel=Kg,this._logHandler=Qg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in i1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?jg[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,i1.DEBUG,...c),this._logHandler(this,i1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,i1.VERBOSE,...c),this._logHandler(this,i1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,i1.INFO,...c),this._logHandler(this,i1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,i1.WARN,...c),this._logHandler(this,i1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,i1.ERROR,...c),this._logHandler(this,i1.ERROR,...c)}}const Yg=(e,c)=>c.some(a=>e instanceof a);let _a,Da;function Xg(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jg(){return Da||(Da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vr=new WeakMap,M7=new WeakMap,gr=new WeakMap,F0=new WeakMap,k9=new WeakMap;function cL(e){const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("success",r),e.removeEventListener("error",n)},r=()=>{a(u3(e.result)),t()},n=()=>{s(e.error),t()};e.addEventListener("success",r),e.addEventListener("error",n)});return c.then(a=>{a instanceof IDBCursor&&Vr.set(a,e)}).catch(()=>{}),k9.set(c,e),c}function eL(e){if(M7.has(e))return;const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",n),e.removeEventListener("abort",n)},r=()=>{a(),t()},n=()=>{s(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",r),e.addEventListener("error",n),e.addEventListener("abort",n)});M7.set(e,c)}let V7={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return M7.get(e);if(c==="objectStoreNames")return e.objectStoreNames||gr.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return u3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function aL(e){V7=e(V7)}function sL(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const s=e.call(B0(this),c,...a);return gr.set(s,c.sort?c.sort():[c]),u3(s)}:Jg().includes(e)?function(...c){return e.apply(B0(this),c),u3(Vr.get(this))}:function(...c){return u3(e.apply(B0(this),c))}}function tL(e){return typeof e=="function"?sL(e):(e instanceof IDBTransaction&&eL(e),Yg(e,Xg())?new Proxy(e,V7):e)}function u3(e){if(e instanceof IDBRequest)return cL(e);if(F0.has(e))return F0.get(e);const c=tL(e);return c!==e&&(F0.set(e,c),k9.set(c,e)),c}const B0=e=>k9.get(e);function rL(e,c,{blocked:a,upgrade:s,blocking:t,terminated:r}={}){const n=indexedDB.open(e,c),i=u3(n);return s&&n.addEventListener("upgradeneeded",o=>{s(u3(n.result),o.oldVersion,o.newVersion,u3(n.transaction))}),a&&n.addEventListener("blocked",()=>a()),i.then(o=>{r&&o.addEventListener("close",()=>r()),t&&o.addEventListener("versionchange",()=>t())}).catch(()=>{}),i}const nL=["get","getKey","getAll","getAllKeys","count"],iL=["put","add","delete","clear"],O0=new Map;function Ra(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(O0.get(c))return O0.get(c);const a=c.replace(/FromIndex$/,""),s=c!==a,t=iL.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!(t||nL.includes(a)))return;const r=async function(n,...i){const o=this.transaction(n,t?"readwrite":"readonly");let l=o.store;return s&&(l=l.index(i.shift())),(await Promise.all([l[a](...i),t&&o.done]))[0]};return O0.set(c,r),r}aL(e=>({...e,get:(c,a,s)=>Ra(c,a)||e.get(c,a,s),has:(c,a)=>!!Ra(c,a)||e.has(c,a)}));/**
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
 */class oL{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(lL(a)){const s=a.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(a=>a).join(" ")}}function lL(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const g7="@firebase/app",Ia="0.8.4";/**
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
 */const j3=new Mr("@firebase/app"),fL="@firebase/app-compat",hL="@firebase/analytics-compat",uL="@firebase/analytics",mL="@firebase/app-check-compat",vL="@firebase/app-check",CL="@firebase/auth",pL="@firebase/auth-compat",dL="@firebase/database",zL="@firebase/database-compat",HL="@firebase/functions",ML="@firebase/functions-compat",VL="@firebase/installations",gL="@firebase/installations-compat",LL="@firebase/messaging",bL="@firebase/messaging-compat",xL="@firebase/performance",yL="@firebase/performance-compat",SL="@firebase/remote-config",NL="@firebase/remote-config-compat",wL="@firebase/storage",kL="@firebase/storage-compat",AL="@firebase/firestore",TL="@firebase/firestore-compat",EL="firebase",PL="9.14.0";/**
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
 */const L7="[DEFAULT]",_L={[g7]:"fire-core",[fL]:"fire-core-compat",[uL]:"fire-analytics",[hL]:"fire-analytics-compat",[vL]:"fire-app-check",[mL]:"fire-app-check-compat",[CL]:"fire-auth",[pL]:"fire-auth-compat",[dL]:"fire-rtdb",[zL]:"fire-rtdb-compat",[HL]:"fire-fn",[ML]:"fire-fn-compat",[VL]:"fire-iid",[gL]:"fire-iid-compat",[LL]:"fire-fcm",[bL]:"fire-fcm-compat",[xL]:"fire-perf",[yL]:"fire-perf-compat",[SL]:"fire-rc",[NL]:"fire-rc-compat",[wL]:"fire-gcs",[kL]:"fire-gcs-compat",[AL]:"fire-fst",[TL]:"fire-fst-compat","fire-js":"fire-js",[EL]:"fire-js-all"};/**
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
 */const s5=new Map,b7=new Map;function DL(e,c){try{e.container.addComponent(c)}catch(a){j3.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function t5(e){const c=e.name;if(b7.has(c))return j3.debug(`There were multiple attempts to register component ${c}.`),!1;b7.set(c,e);for(const a of s5.values())DL(a,e);return!0}function RL(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
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
 */const IL={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},m3=new Hr("app","Firebase",IL);/**
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
 */class FL{constructor(c,a,s){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new M6("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw m3.create("app-deleted",{appName:this._name})}}/**
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
 */const BL=PL;function Lr(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const s=Object.assign({name:L7,automaticDataCollectionEnabled:!1},c),t=s.name;if(typeof t!="string"||!t)throw m3.create("bad-app-name",{appName:String(t)});if(a||(a=Rg()),!a)throw m3.create("no-options");const r=s5.get(t);if(r){if(H7(a,r.options)&&H7(s,r.config))return r;throw m3.create("duplicate-app",{appName:t})}const n=new Wg(t);for(const o of b7.values())n.addComponent(o);const i=new FL(a,s,n);return s5.set(t,i),i}function OL(e=L7){const c=s5.get(e);if(!c&&e===L7)return Lr();if(!c)throw m3.create("no-app",{appName:e});return c}function d4(e,c,a){var s;let t=(s=_L[e])!==null&&s!==void 0?s:e;a&&(t+=`-${a}`);const r=t.match(/\s|\//),n=c.match(/\s|\//);if(r||n){const i=[`Unable to register library "${t}" with version "${c}":`];r&&i.push(`library name "${t}" contains illegal characters (whitespace or "/")`),r&&n&&i.push("and"),n&&i.push(`version name "${c}" contains illegal characters (whitespace or "/")`),j3.warn(i.join(" "));return}t5(new M6(`${t}-version`,()=>({library:t,version:c}),"VERSION"))}/**
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
 */const qL="firebase-heartbeat-database",UL=1,V6="firebase-heartbeat-store";let q0=null;function br(){return q0||(q0=rL(qL,UL,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(V6)}}}).catch(e=>{throw m3.create("idb-open",{originalErrorMessage:e.message})})),q0}async function $L(e){var c;try{return(await br()).transaction(V6).objectStore(V6).get(xr(e))}catch(a){if(a instanceof I4)j3.warn(a.message);else{const s=m3.create("idb-get",{originalErrorMessage:(c=a)===null||c===void 0?void 0:c.message});j3.warn(s.message)}}}async function Fa(e,c){var a;try{const t=(await br()).transaction(V6,"readwrite");return await t.objectStore(V6).put(c,xr(e)),t.done}catch(s){if(s instanceof I4)j3.warn(s.message);else{const t=m3.create("idb-set",{originalErrorMessage:(a=s)===null||a===void 0?void 0:a.message});j3.warn(t.message)}}}function xr(e){return`${e.name}!${e.options.appId}`}/**
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
 */const GL=1024,WL=30*24*60*60*1e3;class jL{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new ZL(a),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ba();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(t=>t.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const r=new Date(t.date).valueOf();return Date.now()-r<=WL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const c=Ba(),{heartbeatsToSend:a,unsentEntries:s}=KL(this._heartbeatsCache.heartbeats),t=a5(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function Ba(){return new Date().toISOString().substring(0,10)}function KL(e,c=GL){const a=[];let s=e.slice();for(const t of e){const r=a.find(n=>n.agent===t.agent);if(r){if(r.dates.push(t.date),Oa(a)>c){r.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),Oa(a)>c){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}class ZL{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wg()?kg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $L(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...c.heartbeats]})}else return}}function Oa(e){return a5(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function QL(e){t5(new M6("platform-logger",c=>new oL(c),"PRIVATE")),t5(new M6("heartbeat",c=>new jL(c),"PRIVATE")),d4(g7,Ia,e),d4(g7,Ia,"esm2017"),d4("fire-js","")}QL("");var YL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,A9=A9||{},j=YL||self;function r5(){}function R5(e){var c=typeof e;return c=c!="object"?c:e?Array.isArray(e)?"array":c:"null",c=="array"||c=="object"&&typeof e.length=="number"}function $6(e){var c=typeof e;return c=="object"&&e!=null||c=="function"}function XL(e){return Object.prototype.hasOwnProperty.call(e,U0)&&e[U0]||(e[U0]=++JL)}var U0="closure_uid_"+(1e9*Math.random()>>>0),JL=0;function cb(e,c,a){return e.call.apply(e.bind,arguments)}function eb(e,c,a){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,s),e.apply(c,t)}}return function(){return e.apply(c,arguments)}}function Z1(e,c,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z1=cb:Z1=eb,Z1.apply(null,arguments)}function V8(e,c){var a=Array.prototype.slice.call(arguments,1);return function(){var s=a.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function $1(e,c){function a(){}a.prototype=c.prototype,e.X=c.prototype,e.prototype=new a,e.prototype.constructor=e,e.Wb=function(s,t,r){for(var n=Array(arguments.length-2),i=2;i<arguments.length;i++)n[i-2]=arguments[i];return c.prototype[t].apply(s,n)}}function g3(){this.s=this.s,this.o=this.o}var ab=0;g3.prototype.s=!1;g3.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ab!=0)&&XL(this)};g3.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yr=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if(typeof e=="string")return typeof c!="string"||c.length!=1?-1:e.indexOf(c,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===c)return a;return-1};function T9(e){const c=e.length;if(0<c){const a=Array(c);for(let s=0;s<c;s++)a[s]=e[s];return a}return[]}function qa(e,c){for(let a=1;a<arguments.length;a++){const s=arguments[a];if(R5(s)){const t=e.length||0,r=s.length||0;e.length=t+r;for(let n=0;n<r;n++)e[t+n]=s[n]}else e.push(s)}}function Q1(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}Q1.prototype.h=function(){this.defaultPrevented=!0};var sb=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{j.addEventListener("test",r5,c),j.removeEventListener("test",r5,c)}catch{}return e}();function n5(e){return/^[\s\xa0]*$/.test(e)}var Ua=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function $0(e,c){return e<c?-1:e>c?1:0}function I5(){var e=j.navigator;return e&&(e=e.userAgent)?e:""}function R2(e){return I5().indexOf(e)!=-1}function E9(e){return E9[" "](e),e}E9[" "]=r5;function tb(e){var c=ib;return Object.prototype.hasOwnProperty.call(c,9)?c[9]:c[9]=e(9)}var rb=R2("Opera"),S4=R2("Trident")||R2("MSIE"),Sr=R2("Edge"),x7=Sr||S4,Nr=R2("Gecko")&&!(I5().toLowerCase().indexOf("webkit")!=-1&&!R2("Edge"))&&!(R2("Trident")||R2("MSIE"))&&!R2("Edge"),nb=I5().toLowerCase().indexOf("webkit")!=-1&&!R2("Edge");function wr(){var e=j.document;return e?e.documentMode:void 0}var i5;c:{var G0="",W0=function(){var e=I5();if(Nr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sr)return/Edge\/([\d\.]+)/.exec(e);if(S4)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(nb)return/WebKit\/(\S+)/.exec(e);if(rb)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(W0&&(G0=W0?W0[1]:""),S4){var j0=wr();if(j0!=null&&j0>parseFloat(G0)){i5=String(j0);break c}}i5=G0}var ib={};function ob(){return tb(function(){let e=0;const c=Ua(String(i5)).split("."),a=Ua("9").split("."),s=Math.max(c.length,a.length);for(let n=0;e==0&&n<s;n++){var t=c[n]||"",r=a[n]||"";do{if(t=/(\d*)(\D*)(.*)/.exec(t)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],t[0].length==0&&r[0].length==0)break;e=$0(t[1].length==0?0:parseInt(t[1],10),r[1].length==0?0:parseInt(r[1],10))||$0(t[2].length==0,r[2].length==0)||$0(t[2],r[2]),t=t[3],r=r[3]}while(e==0)}return 0<=e})}var y7;if(j.document&&S4){var $a=wr();y7=$a||parseInt(i5,10)||void 0}else y7=void 0;var lb=y7;function g6(e,c){if(Q1.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(Nr){c:{try{E9(c.nodeName);var t=!0;break c}catch{}t=!1}t||(c=null)}}else a=="mouseover"?c=e.fromElement:a=="mouseout"&&(c=e.toElement);this.relatedTarget=c,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:fb[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&g6.X.h.call(this)}}$1(g6,Q1);var fb={2:"touch",3:"pen",4:"mouse"};g6.prototype.h=function(){g6.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var G6="closure_listenable_"+(1e6*Math.random()|0),hb=0;function ub(e,c,a,s,t){this.listener=e,this.proxy=null,this.src=c,this.type=a,this.capture=!!s,this.ha=t,this.key=++hb,this.ba=this.ea=!1}function F5(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function P9(e,c,a){for(const s in e)c.call(a,e[s],s,e)}function kr(e){const c={};for(const a in e)c[a]=e[a];return c}const Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ar(e,c){let a,s;for(let t=1;t<arguments.length;t++){s=arguments[t];for(a in s)e[a]=s[a];for(let r=0;r<Ga.length;r++)a=Ga[r],Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}}function B5(e){this.src=e,this.g={},this.h=0}B5.prototype.add=function(e,c,a,s,t){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var n=N7(e,c,s,t);return-1<n?(c=e[n],a||(c.ea=!1)):(c=new ub(c,this.src,r,!!s,t),c.ea=a,e.push(c)),c};function S7(e,c){var a=c.type;if(a in e.g){var s=e.g[a],t=yr(s,c),r;(r=0<=t)&&Array.prototype.splice.call(s,t,1),r&&(F5(c),e.g[a].length==0&&(delete e.g[a],e.h--))}}function N7(e,c,a,s){for(var t=0;t<e.length;++t){var r=e[t];if(!r.ba&&r.listener==c&&r.capture==!!a&&r.ha==s)return t}return-1}var _9="closure_lm_"+(1e6*Math.random()|0),K0={};function Tr(e,c,a,s,t){if(s&&s.once)return Pr(e,c,a,s,t);if(Array.isArray(c)){for(var r=0;r<c.length;r++)Tr(e,c[r],a,s,t);return null}return a=I9(a),e&&e[G6]?e.N(c,a,$6(s)?!!s.capture:!!s,t):Er(e,c,a,!1,s,t)}function Er(e,c,a,s,t,r){if(!c)throw Error("Invalid event type");var n=$6(t)?!!t.capture:!!t,i=R9(e);if(i||(e[_9]=i=new B5(e)),a=i.add(c,a,s,n,r),a.proxy)return a;if(s=mb(),a.proxy=s,s.src=e,s.listener=a,e.addEventListener)sb||(t=n),t===void 0&&(t=!1),e.addEventListener(c.toString(),s,t);else if(e.attachEvent)e.attachEvent(Dr(c.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return a}function mb(){function e(a){return c.call(e.src,e.listener,a)}const c=vb;return e}function Pr(e,c,a,s,t){if(Array.isArray(c)){for(var r=0;r<c.length;r++)Pr(e,c[r],a,s,t);return null}return a=I9(a),e&&e[G6]?e.O(c,a,$6(s)?!!s.capture:!!s,t):Er(e,c,a,!0,s,t)}function _r(e,c,a,s,t){if(Array.isArray(c))for(var r=0;r<c.length;r++)_r(e,c[r],a,s,t);else s=$6(s)?!!s.capture:!!s,a=I9(a),e&&e[G6]?(e=e.i,c=String(c).toString(),c in e.g&&(r=e.g[c],a=N7(r,a,s,t),-1<a&&(F5(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete e.g[c],e.h--)))):e&&(e=R9(e))&&(c=e.g[c.toString()],e=-1,c&&(e=N7(c,a,s,t)),(a=-1<e?c[e]:null)&&D9(a))}function D9(e){if(typeof e!="number"&&e&&!e.ba){var c=e.src;if(c&&c[G6])S7(c.i,e);else{var a=e.type,s=e.proxy;c.removeEventListener?c.removeEventListener(a,s,e.capture):c.detachEvent?c.detachEvent(Dr(a),s):c.addListener&&c.removeListener&&c.removeListener(s),(a=R9(c))?(S7(a,e),a.h==0&&(a.src=null,c[_9]=null)):F5(e)}}}function Dr(e){return e in K0?K0[e]:K0[e]="on"+e}function vb(e,c){if(e.ba)e=!0;else{c=new g6(c,this);var a=e.listener,s=e.ha||e.src;e.ea&&D9(e),e=a.call(s,c)}return e}function R9(e){return e=e[_9],e instanceof B5?e:null}var Z0="__closure_events_fn_"+(1e9*Math.random()>>>0);function I9(e){return typeof e=="function"?e:(e[Z0]||(e[Z0]=function(c){return e.handleEvent(c)}),e[Z0])}function F1(){g3.call(this),this.i=new B5(this),this.P=this,this.I=null}$1(F1,g3);F1.prototype[G6]=!0;F1.prototype.removeEventListener=function(e,c,a,s){_r(this,e,c,a,s)};function U1(e,c){var a,s=e.I;if(s)for(a=[];s;s=s.I)a.push(s);if(e=e.P,s=c.type||c,typeof c=="string")c=new Q1(c,e);else if(c instanceof Q1)c.target=c.target||e;else{var t=c;c=new Q1(s,e),Ar(c,t)}if(t=!0,a)for(var r=a.length-1;0<=r;r--){var n=c.g=a[r];t=g8(n,s,!0,c)&&t}if(n=c.g=e,t=g8(n,s,!0,c)&&t,t=g8(n,s,!1,c)&&t,a)for(r=0;r<a.length;r++)n=c.g=a[r],t=g8(n,s,!1,c)&&t}F1.prototype.M=function(){if(F1.X.M.call(this),this.i){var e=this.i,c;for(c in e.g){for(var a=e.g[c],s=0;s<a.length;s++)F5(a[s]);delete e.g[c],e.h--}}this.I=null};F1.prototype.N=function(e,c,a,s){return this.i.add(String(e),c,!1,a,s)};F1.prototype.O=function(e,c,a,s){return this.i.add(String(e),c,!0,a,s)};function g8(e,c,a,s){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var t=!0,r=0;r<c.length;++r){var n=c[r];if(n&&!n.ba&&n.capture==a){var i=n.listener,o=n.ha||n.src;n.ea&&S7(e.i,n),t=i.call(o,s)!==!1&&t}}return t&&!s.defaultPrevented}var F9=j.JSON.stringify;function Cb(){var e=Fr;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class pb{constructor(){this.h=this.g=null}add(c,a){const s=Rr.get();s.set(c,a),this.h?this.h.next=s:this.g=s,this.h=s}}var Rr=new class{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new db,e=>e.reset());class db{constructor(){this.next=this.g=this.h=null}set(c,a){this.h=c,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function zb(e){j.setTimeout(()=>{throw e},0)}function Ir(e,c){w7||Hb(),k7||(w7(),k7=!0),Fr.add(e,c)}var w7;function Hb(){var e=j.Promise.resolve(void 0);w7=function(){e.then(Mb)}}var k7=!1,Fr=new pb;function Mb(){for(var e;e=Cb();){try{e.h.call(e.g)}catch(a){zb(a)}var c=Rr;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}k7=!1}function O5(e,c){F1.call(this),this.h=e||1,this.g=c||j,this.j=Z1(this.lb,this),this.l=Date.now()}$1(O5,F1);F=O5.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),U1(this,"tick"),this.ca&&(B9(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function B9(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}F.M=function(){O5.X.M.call(this),B9(this),delete this.g};function O9(e,c,a){if(typeof e=="function")a&&(e=Z1(e,a));else if(e&&typeof e.handleEvent=="function")e=Z1(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:j.setTimeout(e,c||0)}function Br(e){e.g=O9(()=>{e.g=null,e.i&&(e.i=!1,Br(e))},e.j);const c=e.h;e.h=null,e.m.apply(null,c)}class Vb extends g3{constructor(c,a){super(),this.m=c,this.j=a,this.h=null,this.i=!1,this.g=null}l(c){this.h=arguments,this.g?this.i=!0:Br(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function L6(e){g3.call(this),this.h=e,this.g={}}$1(L6,g3);var Wa=[];function Or(e,c,a,s){Array.isArray(a)||(a&&(Wa[0]=a.toString()),a=Wa);for(var t=0;t<a.length;t++){var r=Tr(c,a[t],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function qr(e){P9(e.g,function(c,a){this.g.hasOwnProperty(a)&&D9(c)},e),e.g={}}L6.prototype.M=function(){L6.X.M.call(this),qr(this)};L6.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function q5(){this.g=!0}q5.prototype.Aa=function(){this.g=!1};function gb(e,c,a,s,t,r){e.info(function(){if(e.g)if(r)for(var n="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var h=f.split("_");n=2<=h.length&&h[1]=="type"?n+(f+"="+l+"&"):n+(f+"=redacted&")}}else n=null;else n=r;return"XMLHTTP REQ ("+s+") [attempt "+t+"]: "+c+`
`+a+`
`+n})}function Lb(e,c,a,s,t,r,n){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+t+"]: "+c+`
`+a+`
`+r+" "+n})}function o4(e,c,a,s){e.info(function(){return"XMLHTTP TEXT ("+c+"): "+xb(e,a)+(s?" "+s:"")})}function bb(e,c){e.info(function(){return"TIMEOUT: "+c})}q5.prototype.info=function(){};function xb(e,c){if(!e.g)return c;if(!c)return null;try{var a=JSON.parse(c);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var s=a[e];if(!(2>s.length)){var t=s[1];if(Array.isArray(t)&&!(1>t.length)){var r=t[0];if(r!="noop"&&r!="stop"&&r!="close")for(var n=1;n<t.length;n++)t[n]=""}}}}return F9(a)}catch{return c}}var X3={},ja=null;function U5(){return ja=ja||new F1}X3.Pa="serverreachability";function Ur(e){Q1.call(this,X3.Pa,e)}$1(Ur,Q1);function b6(e){const c=U5();U1(c,new Ur(c))}X3.STAT_EVENT="statevent";function $r(e,c){Q1.call(this,X3.STAT_EVENT,e),this.stat=c}$1($r,Q1);function c2(e){const c=U5();U1(c,new $r(c,e))}X3.Qa="timingevent";function Gr(e,c){Q1.call(this,X3.Qa,e),this.size=c}$1(Gr,Q1);function W6(e,c){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){e()},c)}var $5={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function q9(){}q9.prototype.h=null;function Ka(e){return e.h||(e.h=e.i())}function jr(){}var j6={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function U9(){Q1.call(this,"d")}$1(U9,Q1);function $9(){Q1.call(this,"c")}$1($9,Q1);var A7;function G5(){}$1(G5,q9);G5.prototype.g=function(){return new XMLHttpRequest};G5.prototype.i=function(){return{}};A7=new G5;function K6(e,c,a,s){this.l=e,this.j=c,this.m=a,this.U=s||1,this.S=new L6(this),this.O=yb,e=x7?125:void 0,this.T=new O5(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kr}function Kr(){this.i=null,this.g="",this.h=!1}var yb=45e3,T7={},o5={};F=K6.prototype;F.setTimeout=function(e){this.O=e};function E7(e,c,a){e.K=1,e.v=j5(K2(c)),e.s=a,e.P=!0,Zr(e,null)}function Zr(e,c){e.F=Date.now(),Z6(e),e.A=K2(e.v);var a=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),sn(a.i,"t",s),e.C=0,a=e.l.H,e.h=new Kr,e.g=xn(e.l,a?c:null,!e.s),0<e.N&&(e.L=new Vb(Z1(e.La,e,e.g),e.N)),Or(e.S,e.g,"readystatechange",e.ib),c=e.H?kr(e.H):{},e.s?(e.u||(e.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,c)):(e.u="GET",e.g.da(e.A,e.u,null,c)),b6(),gb(e.j,e.u,e.A,e.m,e.U,e.s)}F.ib=function(e){e=e.target;const c=this.L;c&&$2(e)==3?c.l():this.La(e)};F.La=function(e){try{if(e==this.g)c:{const f=$2(this.g);var c=this.g.Ea();const h=this.g.aa();if(!(3>f)&&(f!=3||x7||this.g&&(this.h.h||this.g.fa()||Xa(this.g)))){this.I||f!=4||c==7||(c==8||0>=h?b6(3):b6(2)),W5(this);var a=this.g.aa();this.Y=a;e:if(Qr(this)){var s=Xa(this.g);e="";var t=s.length,r=$2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){P3(this),n6(this);var n="";break e}this.h.i=new j.TextDecoder}for(c=0;c<t;c++)this.h.h=!0,e+=this.h.i.decode(s[c],{stream:r&&c==t-1});s.splice(0,t),this.h.g+=e,this.C=0,n=this.h.g}else n=this.g.fa();if(this.i=a==200,Lb(this.j,this.u,this.A,this.m,this.U,f,a),this.i){if(this.Z&&!this.J){e:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!n5(i)){var l=i;break e}}l=null}if(a=l)o4(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,P7(this,a);else{this.i=!1,this.o=3,c2(12),P3(this),n6(this);break c}}this.P?(Yr(this,f,n),x7&&this.i&&f==3&&(Or(this.S,this.T,"tick",this.hb),this.T.start())):(o4(this.j,this.m,n,null),P7(this,n)),f==4&&P3(this),this.i&&!this.I&&(f==4?Vn(this.l,this):(this.i=!1,Z6(this)))}else a==400&&0<n.indexOf("Unknown SID")?(this.o=3,c2(12)):(this.o=0,c2(13)),P3(this),n6(this)}}}catch{}finally{}};function Qr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Yr(e,c,a){let s=!0,t;for(;!e.I&&e.C<a.length;)if(t=Sb(e,a),t==o5){c==4&&(e.o=4,c2(14),s=!1),o4(e.j,e.m,null,"[Incomplete Response]");break}else if(t==T7){e.o=4,c2(15),o4(e.j,e.m,a,"[Invalid Chunk]"),s=!1;break}else o4(e.j,e.m,t,null),P7(e,t);Qr(e)&&t!=o5&&t!=T7&&(e.h.g="",e.C=0),c!=4||a.length!=0||e.h.h||(e.o=1,c2(16),s=!1),e.i=e.i&&s,s?0<a.length&&!e.$&&(e.$=!0,c=e.l,c.g==e&&c.$&&!c.K&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Y9(c),c.K=!0,c2(11))):(o4(e.j,e.m,a,"[Invalid Chunked Response]"),P3(e),n6(e))}F.hb=function(){if(this.g){var e=$2(this.g),c=this.g.fa();this.C<c.length&&(W5(this),Yr(this,e,c),this.i&&e!=4&&Z6(this))}};function Sb(e,c){var a=e.C,s=c.indexOf(`
`,a);return s==-1?o5:(a=Number(c.substring(a,s)),isNaN(a)?T7:(s+=1,s+a>c.length?o5:(c=c.substr(s,a),e.C=s+a,c)))}F.cancel=function(){this.I=!0,P3(this)};function Z6(e){e.V=Date.now()+e.O,Xr(e,e.O)}function Xr(e,c){if(e.B!=null)throw Error("WatchDog timer not null");e.B=W6(Z1(e.gb,e),c)}function W5(e){e.B&&(j.clearTimeout(e.B),e.B=null)}F.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(bb(this.j,this.A),this.K!=2&&(b6(),c2(17)),P3(this),this.o=2,n6(this)):Xr(this,this.V-e)};function n6(e){e.l.G==0||e.I||Vn(e.l,e)}function P3(e){W5(e);var c=e.L;c&&typeof c.na=="function"&&c.na(),e.L=null,B9(e.T),qr(e.S),e.g&&(c=e.g,e.g=null,c.abort(),c.na())}function P7(e,c){try{var a=e.l;if(a.G!=0&&(a.g==e||_7(a.h,e))){if(!e.J&&_7(a.h,e)&&a.G==3){try{var s=a.Fa.g.parse(c)}catch{s=null}if(Array.isArray(s)&&s.length==3){var t=s;if(t[0]==0){c:if(!a.u){if(a.g)if(a.g.F+3e3<e.F)h5(a),Q5(a);else break c;Q9(a),c2(18)}}else a.Ba=t[1],0<a.Ba-a.T&&37500>t[2]&&a.L&&a.A==0&&!a.v&&(a.v=W6(Z1(a.cb,a),6e3));if(1>=nn(a.h)&&a.ja){try{a.ja()}catch{}a.ja=void 0}}else _3(a,11)}else if((e.J||a.g==e)&&h5(a),!n5(c))for(t=a.Fa.g.parse(c),c=0;c<t.length;c++){let l=t[c];if(a.T=l[0],l=l[1],a.G==2)if(l[0]=="c"){a.I=l[1],a.ka=l[2];const f=l[3];f!=null&&(a.ma=f,a.j.info("VER="+a.ma));const h=l[4];h!=null&&(a.Ca=h,a.j.info("SVER="+a.Ca));const u=l[5];u!=null&&typeof u=="number"&&0<u&&(s=1.5*u,a.J=s,a.j.info("backChannelRequestTimeoutMs_="+s)),s=a;const v=e.g;if(v){const d=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var r=s.h;r.g||d.indexOf("spdy")==-1&&d.indexOf("quic")==-1&&d.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(G9(r,r.h),r.h=null))}if(s.D){const V=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;V&&(s.za=V,g1(s.F,s.D,V))}}a.G=3,a.l&&a.l.xa(),a.$&&(a.P=Date.now()-e.F,a.j.info("Handshake RTT: "+a.P+"ms")),s=a;var n=e;if(s.sa=bn(s,s.H?s.ka:null,s.V),n.J){on(s.h,n);var i=n,o=s.J;o&&i.setTimeout(o),i.B&&(W5(i),Z6(i)),s.g=n}else Hn(s);0<a.i.length&&Y5(a)}else l[0]!="stop"&&l[0]!="close"||_3(a,7);else a.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?_3(a,7):Z9(a):l[0]!="noop"&&a.l&&a.l.wa(l),a.A=0)}}b6(4)}catch{}}function Nb(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(R5(e)){for(var c=[],a=e.length,s=0;s<a;s++)c.push(e[s]);return c}c=[],a=0;for(s in e)c[a++]=e[s];return c}function wb(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(R5(e)||typeof e=="string"){var c=[];e=e.length;for(var a=0;a<e;a++)c.push(a);return c}c=[],a=0;for(const s in e)c[a++]=s;return c}}}function Jr(e,c){if(e.forEach&&typeof e.forEach=="function")e.forEach(c,void 0);else if(R5(e)||typeof e=="string")Array.prototype.forEach.call(e,c,void 0);else for(var a=wb(e),s=Nb(e),t=s.length,r=0;r<t;r++)c.call(void 0,s[r],a&&a[r],e)}var cn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kb(e,c){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var s=e[a].indexOf("="),t=null;if(0<=s){var r=e[a].substring(0,s);t=e[a].substring(s+1)}else r=e[a];c(r,t?decodeURIComponent(t.replace(/\+/g," ")):"")}}}function q3(e,c){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof q3){this.h=c!==void 0?c:e.h,l5(this,e.j),this.s=e.s,this.g=e.g,f5(this,e.m),this.l=e.l,c=e.i;var a=new x6;a.i=c.i,c.g&&(a.g=new Map(c.g),a.h=c.h),Za(this,a),this.o=e.o}else e&&(a=String(e).match(cn))?(this.h=!!c,l5(this,a[1]||"",!0),this.s=Y4(a[2]||""),this.g=Y4(a[3]||"",!0),f5(this,a[4]),this.l=Y4(a[5]||"",!0),Za(this,a[6]||"",!0),this.o=Y4(a[7]||"")):(this.h=!!c,this.i=new x6(null,this.h))}q3.prototype.toString=function(){var e=[],c=this.j;c&&e.push(X4(c,Qa,!0),":");var a=this.g;return(a||c=="file")&&(e.push("//"),(c=this.s)&&e.push(X4(c,Qa,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(X4(a,a.charAt(0)=="/"?Eb:Tb,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",X4(a,_b)),e.join("")};function K2(e){return new q3(e)}function l5(e,c,a){e.j=a?Y4(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function f5(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function Za(e,c,a){c instanceof x6?(e.i=c,Db(e.i,e.h)):(a||(c=X4(c,Pb)),e.i=new x6(c,e.h))}function g1(e,c,a){e.i.set(c,a)}function j5(e){return g1(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Y4(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function X4(e,c,a){return typeof e=="string"?(e=encodeURI(e).replace(c,Ab),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ab(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Qa=/[#\/\?@]/g,Tb=/[#\?:]/g,Eb=/[#\?]/g,Pb=/[#\?@]/g,_b=/#/g;function x6(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function L3(e){e.g||(e.g=new Map,e.h=0,e.i&&kb(e.i,function(c,a){e.add(decodeURIComponent(c.replace(/\+/g," ")),a)}))}F=x6.prototype;F.add=function(e,c){L3(this),this.i=null,e=F4(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(c),this.h+=1,this};function en(e,c){L3(e),c=F4(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function an(e,c){return L3(e),c=F4(e,c),e.g.has(c)}F.forEach=function(e,c){L3(this),this.g.forEach(function(a,s){a.forEach(function(t){e.call(c,t,s,this)},this)},this)};F.oa=function(){L3(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),a=[];for(let s=0;s<c.length;s++){const t=e[s];for(let r=0;r<t.length;r++)a.push(c[s])}return a};F.W=function(e){L3(this);let c=[];if(typeof e=="string")an(this,e)&&(c=c.concat(this.g.get(F4(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)c=c.concat(e[a])}return c};F.set=function(e,c){return L3(this),this.i=null,e=F4(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this};F.get=function(e,c){return e?(e=this.W(e),0<e.length?String(e[0]):c):c};function sn(e,c,a){en(e,c),0<a.length&&(e.i=null,e.g.set(F4(e,c),T9(a)),e.h+=a.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var a=0;a<c.length;a++){var s=c[a];const r=encodeURIComponent(String(s)),n=this.W(s);for(s=0;s<n.length;s++){var t=r;n[s]!==""&&(t+="="+encodeURIComponent(String(n[s]))),e.push(t)}}return this.i=e.join("&")};function F4(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function Db(e,c){c&&!e.j&&(L3(e),e.i=null,e.g.forEach(function(a,s){var t=s.toLowerCase();s!=t&&(en(this,s),sn(this,t,a))},e)),e.j=c}var Rb=class{constructor(e,c){this.h=e,this.g=c}};function tn(e){this.l=e||Ib,j.PerformanceNavigationTiming?(e=j.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(j.g&&j.g.Ga&&j.g.Ga()&&j.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ib=10;function rn(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function nn(e){return e.h?1:e.g?e.g.size:0}function _7(e,c){return e.h?e.h==c:e.g?e.g.has(c):!1}function G9(e,c){e.g?e.g.add(c):e.h=c}function on(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}tn.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ln(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let c=e.i;for(const a of e.g.values())c=c.concat(a.D);return c}return T9(e.i)}function W9(){}W9.prototype.stringify=function(e){return j.JSON.stringify(e,void 0)};W9.prototype.parse=function(e){return j.JSON.parse(e,void 0)};function Fb(){this.g=new W9}function Bb(e,c,a){const s=a||"";try{Jr(e,function(t,r){let n=t;$6(t)&&(n=F9(t)),c.push(s+r+"="+encodeURIComponent(n))})}catch(t){throw c.push(s+"type="+encodeURIComponent("_badmap")),t}}function Ob(e,c){const a=new q5;if(j.Image){const s=new Image;s.onload=V8(L8,a,s,"TestLoadImage: loaded",!0,c),s.onerror=V8(L8,a,s,"TestLoadImage: error",!1,c),s.onabort=V8(L8,a,s,"TestLoadImage: abort",!1,c),s.ontimeout=V8(L8,a,s,"TestLoadImage: timeout",!1,c),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else c(!1)}function L8(e,c,a,s,t){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,t(s)}catch{}}function Q6(e){this.l=e.ac||null,this.j=e.jb||!1}$1(Q6,q9);Q6.prototype.g=function(){return new K5(this.l,this.j)};Q6.prototype.i=function(e){return function(){return e}}({});function K5(e,c){F1.call(this),this.D=e,this.u=c,this.m=void 0,this.readyState=j9,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$1(K5,F1);var j9=0;F=K5.prototype;F.open=function(e,c){if(this.readyState!=j9)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,y6(this)};F.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.D||j).fetch(new Request(this.B,c)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Y6(this)),this.readyState=j9};F.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,y6(this)),this.g&&(this.readyState=3,y6(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function fn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}F.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?Y6(this):y6(this),this.readyState==3&&fn(this)}};F.Va=function(e){this.g&&(this.response=this.responseText=e,Y6(this))};F.Ua=function(e){this.g&&(this.response=e,Y6(this))};F.ga=function(){this.g&&Y6(this)};function Y6(e){e.readyState=4,e.l=null,e.j=null,e.A=null,y6(e)}F.setRequestHeader=function(e,c){this.v.append(e,c)};F.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var a=c.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=c.next();return e.join(`\r
`)};function y6(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(K5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var qb=j.JSON.parse;function N1(e){F1.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hn,this.K=this.L=!1}$1(N1,F1);var hn="",Ub=/^https?$/i,$b=["POST","PUT"];F=N1.prototype;F.Ka=function(e){this.L=e};F.da=function(e,c,a,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);c=c?c.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():A7.g(),this.C=this.u?Ka(this.u):Ka(A7),this.g.onreadystatechange=Z1(this.Ha,this);try{this.F=!0,this.g.open(c,String(e),!0),this.F=!1}catch(r){Ya(this,r);return}if(e=a||"",a=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var t in s)a.set(t,s[t]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())a.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(a.keys()).find(r=>r.toLowerCase()=="content-type"),t=j.FormData&&e instanceof j.FormData,!(0<=yr($b,c))||s||t||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,n]of a)this.g.setRequestHeader(r,n);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vn(this),0<this.B&&((this.K=Gb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z1(this.qa,this)):this.A=O9(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ya(this,r)}};function Gb(e){return S4&&ob()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}F.qa=function(){typeof A9<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,U1(this,"timeout"),this.abort(8))};function Ya(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,un(e),Z5(e)}function un(e){e.D||(e.D=!0,U1(e,"complete"),U1(e,"error"))}F.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,U1(this,"complete"),U1(this,"abort"),Z5(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Z5(this,!0)),N1.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())};F.fb=function(){mn(this)};function mn(e){if(e.h&&typeof A9<"u"&&(!e.C[1]||$2(e)!=4||e.aa()!=2)){if(e.v&&$2(e)==4)O9(e.Ha,0,e);else if(U1(e,"readystatechange"),$2(e)==4){e.h=!1;try{const i=e.aa();c:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break c;default:c=!1}var a;if(!(a=c)){var s;if(s=i===0){var t=String(e.H).match(cn)[1]||null;if(!t&&j.self&&j.self.location){var r=j.self.location.protocol;t=r.substr(0,r.length-1)}s=!Ub.test(t?t.toLowerCase():"")}a=s}if(a)U1(e,"complete"),U1(e,"success");else{e.m=6;try{var n=2<$2(e)?e.g.statusText:""}catch{n=""}e.j=n+" ["+e.aa()+"]",un(e)}}finally{Z5(e)}}}}function Z5(e,c){if(e.g){vn(e);const a=e.g,s=e.C[0]?r5:null;e.g=null,e.C=null,c||U1(e,"ready");try{a.onreadystatechange=s}catch{}}}function vn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(j.clearTimeout(e.A),e.A=null)}function $2(e){return e.g?e.g.readyState:0}F.aa=function(){try{return 2<$2(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(e){if(this.g){var c=this.g.responseText;return e&&c.indexOf(e)==0&&(c=c.substring(e.length)),qb(c)}};function Xa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case hn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cn(e){let c="";return P9(e,function(a,s){c+=s,c+=":",c+=a,c+=`\r
`}),c}function K9(e,c,a){c:{for(s in a){var s=!1;break c}s=!0}s||(a=Cn(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):g1(e,c,a))}function Z4(e,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||c}function pn(e){this.Ca=0,this.i=[],this.j=new q5,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Z4("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Z4("baseRetryDelayMs",5e3,e),this.bb=Z4("retryDelaySeedMs",1e4,e),this.$a=Z4("forwardChannelMaxRetries",2,e),this.ta=Z4("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tn(e&&e.concurrentRequestLimit),this.Fa=new Fb,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=pn.prototype;F.ma=8;F.G=1;function Z9(e){if(dn(e),e.G==3){var c=e.U++,a=K2(e.F);g1(a,"SID",e.I),g1(a,"RID",c),g1(a,"TYPE","terminate"),X6(e,a),c=new K6(e,e.j,c,void 0),c.K=2,c.v=j5(K2(a)),a=!1,j.navigator&&j.navigator.sendBeacon&&(a=j.navigator.sendBeacon(c.v.toString(),"")),!a&&j.Image&&(new Image().src=c.v,a=!0),a||(c.g=xn(c.l,null),c.g.da(c.v)),c.F=Date.now(),Z6(c)}Ln(e)}function Q5(e){e.g&&(Y9(e),e.g.cancel(),e.g=null)}function dn(e){Q5(e),e.u&&(j.clearTimeout(e.u),e.u=null),h5(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&j.clearTimeout(e.m),e.m=null)}function Y5(e){rn(e.h)||e.m||(e.m=!0,Ir(e.Ja,e),e.C=0)}function Wb(e,c){return nn(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=c.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=W6(Z1(e.Ja,e,c),gn(e,e.C)),e.C++,!0)}F.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const t=new K6(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=kr(r),Ar(r,this.S)):r=this.S),this.o!==null||this.N||(t.H=r,r=null),this.O)c:{for(var c=0,a=0;a<this.i.length;a++){e:{var s=this.i[a];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(c+=s,4096<c){c=a;break c}if(c===4096||a===this.i.length-1){c=a+1;break c}}c=1e3}else c=1e3;c=zn(this,t,c),a=K2(this.F),g1(a,"RID",e),g1(a,"CVER",22),this.D&&g1(a,"X-HTTP-Session-Id",this.D),X6(this,a),r&&(this.N?c="headers="+encodeURIComponent(String(Cn(r)))+"&"+c:this.o&&K9(a,this.o,r)),G9(this.h,t),this.Ya&&g1(a,"TYPE","init"),this.O?(g1(a,"$req",c),g1(a,"SID","null"),t.Z=!0,E7(t,a,null)):E7(t,a,c),this.G=2}}else this.G==3&&(e?Ja(this,e):this.i.length==0||rn(this.h)||Ja(this))};function Ja(e,c){var a;c?a=c.m:a=e.U++;const s=K2(e.F);g1(s,"SID",e.I),g1(s,"RID",a),g1(s,"AID",e.T),X6(e,s),e.o&&e.s&&K9(s,e.o,e.s),a=new K6(e,e.j,a,e.C+1),e.o===null&&(a.H=e.s),c&&(e.i=c.D.concat(e.i)),c=zn(e,a,1e3),a.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),G9(e.h,a),E7(a,s,c)}function X6(e,c){e.ia&&P9(e.ia,function(a,s){g1(c,s,a)}),e.l&&Jr({},function(a,s){g1(c,s,a)})}function zn(e,c,a){a=Math.min(e.i.length,a);var s=e.l?Z1(e.l.Ra,e.l,e):null;c:{var t=e.i;let r=-1;for(;;){const n=["count="+a];r==-1?0<a?(r=t[0].h,n.push("ofs="+r)):r=0:n.push("ofs="+r);let i=!0;for(let o=0;o<a;o++){let l=t[o].h;const f=t[o].g;if(l-=r,0>l)r=Math.max(0,t[o].h-100),i=!1;else try{Bb(f,n,"req"+l+"_")}catch{s&&s(f)}}if(i){s=n.join("&");break c}}}return e=e.i.splice(0,a),c.D=e,s}function Hn(e){e.g||e.u||(e.Z=1,Ir(e.Ia,e),e.A=0)}function Q9(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=W6(Z1(e.Ia,e),gn(e,e.A)),e.A++,!0)}F.Ia=function(){if(this.u=null,Mn(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=W6(Z1(this.eb,this),e)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,c2(10),Q5(this),Mn(this))};function Y9(e){e.B!=null&&(j.clearTimeout(e.B),e.B=null)}function Mn(e){e.g=new K6(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var c=K2(e.sa);g1(c,"RID","rpc"),g1(c,"SID",e.I),g1(c,"CI",e.L?"0":"1"),g1(c,"AID",e.T),g1(c,"TYPE","xmlhttp"),X6(e,c),e.o&&e.s&&K9(c,e.o,e.s),e.J&&e.g.setTimeout(e.J);var a=e.g;e=e.ka,a.K=1,a.v=j5(K2(c)),a.s=null,a.P=!0,Zr(a,e)}F.cb=function(){this.v!=null&&(this.v=null,Q5(this),Q9(this),c2(19))};function h5(e){e.v!=null&&(j.clearTimeout(e.v),e.v=null)}function Vn(e,c){var a=null;if(e.g==c){h5(e),Y9(e),e.g=null;var s=2}else if(_7(e.h,c))a=c.D,on(e.h,c),s=1;else return;if(e.G!=0){if(e.pa=c.Y,c.i)if(s==1){a=c.s?c.s.length:0,c=Date.now()-c.F;var t=e.C;s=U5(),U1(s,new Gr(s,a)),Y5(e)}else Hn(e);else if(t=c.o,t==3||t==0&&0<e.pa||!(s==1&&Wb(e,c)||s==2&&Q9(e)))switch(a&&0<a.length&&(c=e.h,c.i=c.i.concat(a)),t){case 1:_3(e,5);break;case 4:_3(e,10);break;case 3:_3(e,6);break;default:_3(e,2)}}}function gn(e,c){let a=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(a*=2),a*c}function _3(e,c){if(e.j.info("Error code "+c),c==2){var a=null;e.l&&(a=null);var s=Z1(e.kb,e);a||(a=new q3("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||l5(a,"https"),j5(a)),Ob(a.toString(),s)}else c2(2);e.G=0,e.l&&e.l.va(c),Ln(e),dn(e)}F.kb=function(e){e?(this.j.info("Successfully pinged google.com"),c2(2)):(this.j.info("Failed to ping google.com"),c2(1))};function Ln(e){if(e.G=0,e.la=[],e.l){const c=ln(e.h);(c.length!=0||e.i.length!=0)&&(qa(e.la,c),qa(e.la,e.i),e.h.i.length=0,T9(e.i),e.i.length=0),e.l.ua()}}function bn(e,c,a){var s=a instanceof q3?K2(a):new q3(a,void 0);if(s.g!="")c&&(s.g=c+"."+s.g),f5(s,s.m);else{var t=j.location;s=t.protocol,c=c?c+"."+t.hostname:t.hostname,t=+t.port;var r=new q3(null,void 0);s&&l5(r,s),c&&(r.g=c),t&&f5(r,t),a&&(r.l=a),s=r}return a=e.D,c=e.za,a&&c&&g1(s,a,c),g1(s,"VER",e.ma),X6(e,s),s}function xn(e,c,a){if(c&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return c=a&&e.Da&&!e.ra?new N1(new Q6({jb:!0})):new N1(e.ra),c.Ka(e.H),c}function yn(){}F=yn.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function u5(){if(S4&&!(10<=Number(lb)))throw Error("Environmental error: no available transport.")}u5.prototype.g=function(e,c){return new u2(e,c)};function u2(e,c){F1.call(this),this.g=new pn(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.ya&&(e?e["X-WebChannel-Client-Profile"]=c.ya:e={"X-WebChannel-Client-Profile":c.ya}),this.g.S=e,(e=c&&c.Yb)&&!n5(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!n5(c)&&(this.g.D=c,e=this.h,e!==null&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new B4(this)}$1(u2,F1);u2.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,c=this.l,a=this.h||void 0;c2(0),e.V=c,e.ia=a||{},e.L=e.Y,e.F=bn(e,null,e.V),Y5(e)};u2.prototype.close=function(){Z9(this.g)};u2.prototype.u=function(e){var c=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=F9(e),e=a);c.i.push(new Rb(c.ab++,e)),c.G==3&&Y5(c)};u2.prototype.M=function(){this.g.l=null,delete this.j,Z9(this.g),delete this.g,u2.X.M.call(this)};function Sn(e){U9.call(this);var c=e.__sm__;if(c){c:{for(const a in c){e=a;break c}e=void 0}(this.i=e)&&(e=this.i,c=c!==null&&e in c?c[e]:void 0),this.data=c}else this.data=e}$1(Sn,U9);function Nn(){$9.call(this),this.status=1}$1(Nn,$9);function B4(e){this.g=e}$1(B4,yn);B4.prototype.xa=function(){U1(this.g,"a")};B4.prototype.wa=function(e){U1(this.g,new Sn(e))};B4.prototype.va=function(e){U1(this.g,new Nn)};B4.prototype.ua=function(){U1(this.g,"b")};u5.prototype.createWebChannel=u5.prototype.g;u2.prototype.send=u2.prototype.u;u2.prototype.open=u2.prototype.m;u2.prototype.close=u2.prototype.close;$5.NO_ERROR=0;$5.TIMEOUT=8;$5.HTTP_ERROR=6;Wr.COMPLETE="complete";jr.EventType=j6;j6.OPEN="a";j6.CLOSE="b";j6.ERROR="c";j6.MESSAGE="d";F1.prototype.listen=F1.prototype.N;N1.prototype.listenOnce=N1.prototype.O;N1.prototype.getLastError=N1.prototype.Oa;N1.prototype.getLastErrorCode=N1.prototype.Ea;N1.prototype.getStatus=N1.prototype.aa;N1.prototype.getResponseJson=N1.prototype.Sa;N1.prototype.getResponseText=N1.prototype.fa;N1.prototype.send=N1.prototype.da;N1.prototype.setWithCredentials=N1.prototype.Ka;var jb=function(){return new u5},Kb=function(){return U5()},Q0=$5,Zb=Wr,Qb=X3,cs={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Yb=Q6,b8=jr,Xb=N1;const es="@firebase/firestore";/**
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
 */class G1{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}G1.UNAUTHENTICATED=new G1(null),G1.GOOGLE_CREDENTIALS=new G1("google-credentials-uid"),G1.FIRST_PARTY=new G1("first-party-uid"),G1.MOCK_USER=new G1("mock-user");/**
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
 */let O4="9.14.0";/**
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
 */const K3=new Mr("@firebase/firestore");function as(){return K3.logLevel}function B(e,...c){if(K3.logLevel<=i1.DEBUG){const a=c.map(X9);K3.debug(`Firestore (${O4}): ${e}`,...a)}}function Z2(e,...c){if(K3.logLevel<=i1.ERROR){const a=c.map(X9);K3.error(`Firestore (${O4}): ${e}`,...a)}}function D7(e,...c){if(K3.logLevel<=i1.WARN){const a=c.map(X9);K3.warn(`Firestore (${O4}): ${e}`,...a)}}function X9(e){if(typeof e=="string")return e;try{return c=e,JSON.stringify(c)}catch{return e}/**
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
*/var c}/**
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
 */function Z(e="Unexpected state"){const c=`FIRESTORE (${O4}) INTERNAL ASSERTION FAILED: `+e;throw Z2(c),new Error(c)}function z1(e,c){e||Z()}function Y(e,c){return e}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends I4{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class U3{constructor(){this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}}/**
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
 */class wn{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class Jb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a(G1.UNAUTHENTICATED))}shutdown(){}}class cx{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class ex{constructor(c){this.t=c,this.currentUser=G1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(c,a){let s=this.i;const t=o=>this.i!==s?(s=this.i,a(o)):Promise.resolve();let r=new U3;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new U3,c.enqueueRetryable(()=>t(this.currentUser))};const n=()=>{const o=r;c.enqueueRetryable(async()=>{await o.promise,await t(this.currentUser)})},i=o=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new U3)}},0),n()}getToken(){const c=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(s=>this.i!==c?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(z1(typeof s.accessToken=="string"),new wn(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const c=this.auth&&this.auth.getUid();return z1(c===null||typeof c=="string"),new G1(c)}}class ax{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t,this.type="FirstParty",this.user=G1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(z1(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const c=this.I();return c&&this.p.set("Authorization",c),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class sx{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t}getToken(){return Promise.resolve(new ax(this.h,this.l,this.m,this.g))}start(c,a){c.enqueueRetryable(()=>a(G1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tx{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rx{constructor(c){this.T=c,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(c,a){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const n=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?a(r.token):Promise.resolve()};this.o=r=>{c.enqueueRetryable(()=>s(r))};const t=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>t(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?t(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const c=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(c).then(a=>a?(z1(typeof a.token=="string"),this.A=a.token,new tx(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function nx(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let s=0;s<e;s++)a[s]=Math.floor(256*Math.random());return a}/**
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
 */class kn{static R(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let s="";for(;s.length<20;){const t=nx(40);for(let r=0;r<t.length;++r)s.length<20&&t[r]<a&&(s+=c.charAt(t[r]%c.length))}return s}}function o1(e,c){return e<c?-1:e>c?1:0}function N4(e,c,a){return e.length===c.length&&e.every((s,t)=>a(s,c[t]))}/**
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
 */class E1{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new G(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new G(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new G(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new G(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c)}static now(){return E1.fromMillis(Date.now())}static fromDate(c){return E1.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),s=Math.floor(1e6*(c-1e3*a));return new E1(a,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?o1(this.nanoseconds,c.nanoseconds):o1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class e1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new e1(c)}static min(){return new e1(new E1(0,0))}static max(){return new e1(new E1(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class S6{constructor(c,a,s){a===void 0?a=0:a>c.length&&Z(),s===void 0?s=c.length-a:s>c.length-a&&Z(),this.segments=c,this.offset=a,this.len=s}get length(){return this.len}isEqual(c){return S6.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof S6?c.forEach(s=>{a.push(s)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,s=this.limit();a<s;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const s=Math.min(c.length,a.length);for(let t=0;t<s;t++){const r=c.get(t),n=a.get(t);if(r<n)return-1;if(r>n)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class L1 extends S6{construct(c,a,s){return new L1(c,a,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...c){const a=[];for(const s of c){if(s.indexOf("//")>=0)throw new G(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);a.push(...s.split("/").filter(t=>t.length>0))}return new L1(a)}static emptyPath(){return new L1([])}}const ix=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j1 extends S6{construct(c,a,s){return new j1(c,a,s)}static isValidIdentifier(c){return ix.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j1.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new j1(["__name__"])}static fromServerFormat(c){const a=[];let s="",t=0;const r=()=>{if(s.length===0)throw new G(y.INVALID_ARGUMENT,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(s),s=""};let n=!1;for(;t<c.length;){const i=c[t];if(i==="\\"){if(t+1===c.length)throw new G(y.INVALID_ARGUMENT,"Path has trailing escape character: "+c);const o=c[t+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new G(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+c);s+=o,t+=2}else i==="`"?(n=!n,t++):i!=="."||n?(s+=i,t++):(r(),t++)}if(r(),n)throw new G(y.INVALID_ARGUMENT,"Unterminated ` in path: "+c);return new j1(a)}static emptyPath(){return new j1([])}}/**
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
 */class W{constructor(c){this.path=c}static fromPath(c){return new W(L1.fromString(c))}static fromName(c){return new W(L1.fromString(c).popFirst(5))}static empty(){return new W(L1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&L1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return L1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new W(new L1(c.slice()))}}function ox(e,c){const a=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,t=e1.fromTimestamp(s===1e9?new E1(a+1,0):new E1(a,s));return new p3(t,W.empty(),c)}function lx(e){return new p3(e.readTime,e.key,-1)}class p3{constructor(c,a,s){this.readTime=c,this.documentKey=a,this.largestBatchId=s}static min(){return new p3(e1.min(),W.empty(),-1)}static max(){return new p3(e1.max(),W.empty(),-1)}}function fx(e,c){let a=e.readTime.compareTo(c.readTime);return a!==0?a:(a=W.comparator(e.documentKey,c.documentKey),a!==0?a:o1(e.largestBatchId,c.largestBatchId))}/**
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
 */const hx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ux{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(c){this.onCommittedListeners.push(c)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(c=>c())}}/**
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
 */async function J6(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==hx)throw e;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(c){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,c(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(c){return this.next(void 0,c)}next(c,a){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(c,this.result):new S((s,t)=>{this.nextCallback=r=>{this.wrapSuccess(c,r).next(s,t)},this.catchCallback=r=>{this.wrapFailure(a,r).next(s,t)}})}toPromise(){return new Promise((c,a)=>{this.next(c,a)})}wrapUserFunction(c){try{const a=c();return a instanceof S?a:S.resolve(a)}catch(a){return S.reject(a)}}wrapSuccess(c,a){return c?this.wrapUserFunction(()=>c(a)):S.resolve(a)}wrapFailure(c,a){return c?this.wrapUserFunction(()=>c(a)):S.reject(a)}static resolve(c){return new S((a,s)=>{a(c)})}static reject(c){return new S((a,s)=>{s(c)})}static waitFor(c){return new S((a,s)=>{let t=0,r=0,n=!1;c.forEach(i=>{++t,i.next(()=>{++r,n&&r===t&&a()},o=>s(o))}),n=!0,r===t&&a()})}static or(c){let a=S.resolve(!1);for(const s of c)a=a.next(t=>t?S.resolve(t):s());return a}static forEach(c,a){const s=[];return c.forEach((t,r)=>{s.push(a.call(this,t,r))}),this.waitFor(s)}static mapArray(c,a){return new S((s,t)=>{const r=c.length,n=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;a(c[l]).next(f=>{n[l]=f,++i,i===r&&s(n)},f=>t(f))}})}static doWhile(c,a){return new S((s,t)=>{const r=()=>{c()===!0?a().next(()=>{r()},t):s()};r()})}}function c8(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class J9{constructor(c,a){this.previousValue=c,a&&(a.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>a.writeSequenceNumber(s))}ut(c){return this.previousValue=Math.max(c,this.previousValue),this.previousValue}next(){const c=++this.previousValue;return this.ct&&this.ct(c),c}}/**
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
 */function ss(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function J3(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}function An(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}/**
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
 */J9.at=-1;class _1{constructor(c,a){this.comparator=c,this.root=a||B1.EMPTY}insert(c,a){return new _1(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,B1.BLACK,null,null))}remove(c){return new _1(this.comparator,this.root.remove(c,this.comparator).copy(null,null,B1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const s=this.comparator(c,a.key);if(s===0)return a.value;s<0?a=a.left:s>0&&(a=a.right)}return null}indexOf(c){let a=0,s=this.root;for(;!s.isEmpty();){const t=this.comparator(c,s.key);if(t===0)return a+s.left.size;t<0?s=s.left:(a+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,s)=>(c(a,s),!1))}toString(){const c=[];return this.inorderTraversal((a,s)=>(c.push(`${a}:${s}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new x8(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new x8(this.root,c,this.comparator,!1)}getReverseIterator(){return new x8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new x8(this.root,c,this.comparator,!0)}}class x8{constructor(c,a,s,t){this.isReverse=t,this.nodeStack=[];let r=1;for(;!c.isEmpty();)if(r=a?s(c.key,a):1,a&&t&&(r*=-1),r<0)c=this.isReverse?c.left:c.right;else{if(r===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class B1{constructor(c,a,s,t,r){this.key=c,this.value=a,this.color=s!=null?s:B1.RED,this.left=t!=null?t:B1.EMPTY,this.right=r!=null?r:B1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,s,t,r){return new B1(c!=null?c:this.key,a!=null?a:this.value,s!=null?s:this.color,t!=null?t:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,s){let t=this;const r=s(c,t.key);return t=r<0?t.copy(null,null,null,t.left.insert(c,a,s),null):r===0?t.copy(null,a,null,null,null):t.copy(null,null,null,null,t.right.insert(c,a,s)),t.fixUp()}removeMin(){if(this.left.isEmpty())return B1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let s,t=this;if(a(c,t.key)<0)t.left.isEmpty()||t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.remove(c,a),null);else{if(t.left.isRed()&&(t=t.rotateRight()),t.right.isEmpty()||t.right.isRed()||t.right.left.isRed()||(t=t.moveRedRight()),a(c,t.key)===0){if(t.right.isEmpty())return B1.EMPTY;s=t.right.min(),t=t.copy(s.key,s.value,null,null,t.right.removeMin())}t=t.copy(null,null,null,null,t.right.remove(c,a))}return t.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,B1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,B1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const c=this.left.check();if(c!==this.right.check())throw Z();return c+(this.isRed()?0:1)}}B1.EMPTY=null,B1.RED=!0,B1.BLACK=!1;B1.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,c,a,s,t){return this}insert(e,c,a){return new B1(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class P1{constructor(c){this.comparator=c,this.data=new _1(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,s)=>(c(a),!1))}forEachInRange(c,a){const s=this.data.getIteratorFrom(c[0]);for(;s.hasNext();){const t=s.getNext();if(this.comparator(t.key,c[1])>=0)return;a(t.key)}}forEachWhile(c,a){let s;for(s=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();s.hasNext();)if(!c(s.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new ts(this.data.getIterator())}getIteratorFrom(c){return new ts(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(s=>{a=a.add(s)}),a}isEqual(c){if(!(c instanceof P1)||this.size!==c.size)return!1;const a=this.data.getIterator(),s=c.data.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(this.comparator(t,r)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new P1(this.comparator);return a.data=c,a}}class ts{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class d2{constructor(c){this.fields=c,c.sort(j1.comparator)}static empty(){return new d2([])}unionWith(c){let a=new P1(j1.comparator);for(const s of this.fields)a=a.add(s);for(const s of c)a=a.add(s);return new d2(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return N4(this.fields,c.fields,(a,s)=>a.isEqual(s))}}/**
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
 */class Y1{constructor(c){this.binaryString=c}static fromBase64String(c){const a=atob(c);return new Y1(a)}static fromUint8Array(c){const a=function(s){let t="";for(let r=0;r<s.length;++r)t+=String.fromCharCode(s[r]);return t}(c);return new Y1(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return c=this.binaryString,btoa(c);var c}toUint8Array(){return function(c){const a=new Uint8Array(c.length);for(let s=0;s<c.length;s++)a[s]=c.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return o1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}Y1.EMPTY_BYTE_STRING=new Y1("");const mx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function d3(e){if(z1(!!e),typeof e=="string"){let c=0;const a=mx.exec(e);if(z1(!!a),a[1]){let t=a[1];t=(t+"000000000").substr(0,9),c=Number(t)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:c}}return{seconds:T1(e.seconds),nanos:T1(e.nanos)}}function T1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function w4(e){return typeof e=="string"?Y1.fromBase64String(e):Y1.fromUint8Array(e)}/**
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
 */function Tn(e){var c,a;return((a=(((c=e==null?void 0:e.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function En(e){const c=e.mapValue.fields.__previous_value__;return Tn(c)?En(c):c}function N6(e){const c=d3(e.mapValue.fields.__local_write_time__.timestampValue);return new E1(c.seconds,c.nanos)}/**
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
 */class vx{constructor(c,a,s,t,r,n,i,o){this.databaseId=c,this.appId=a,this.persistenceKey=s,this.host=t,this.ssl=r,this.forceLongPolling=n,this.autoDetectLongPolling=i,this.useFetchStreams=o}}class w6{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new w6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof w6&&c.projectId===this.projectId&&c.database===this.database}}function X5(e){return e==null}function m5(e){return e===0&&1/e==-1/0}function Cx(e){return typeof e=="number"&&Number.isInteger(e)&&!m5(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const y8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Z3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tn(e)?4:px(e)?9007199254740991:10:Z()}function O2(e,c){if(e===c)return!0;const a=Z3(e);if(a!==Z3(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return N6(e).isEqual(N6(c));case 3:return function(s,t){if(typeof s.timestampValue=="string"&&typeof t.timestampValue=="string"&&s.timestampValue.length===t.timestampValue.length)return s.timestampValue===t.timestampValue;const r=d3(s.timestampValue),n=d3(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(s,t){return w4(s.bytesValue).isEqual(w4(t.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(s,t){return T1(s.geoPointValue.latitude)===T1(t.geoPointValue.latitude)&&T1(s.geoPointValue.longitude)===T1(t.geoPointValue.longitude)}(e,c);case 2:return function(s,t){if("integerValue"in s&&"integerValue"in t)return T1(s.integerValue)===T1(t.integerValue);if("doubleValue"in s&&"doubleValue"in t){const r=T1(s.doubleValue),n=T1(t.doubleValue);return r===n?m5(r)===m5(n):isNaN(r)&&isNaN(n)}return!1}(e,c);case 9:return N4(e.arrayValue.values||[],c.arrayValue.values||[],O2);case 10:return function(s,t){const r=s.mapValue.fields||{},n=t.mapValue.fields||{};if(ss(r)!==ss(n))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(n[i]===void 0||!O2(r[i],n[i])))return!1;return!0}(e,c);default:return Z()}}function k6(e,c){return(e.values||[]).find(a=>O2(a,c))!==void 0}function k4(e,c){if(e===c)return 0;const a=Z3(e),s=Z3(c);if(a!==s)return o1(a,s);switch(a){case 0:case 9007199254740991:return 0;case 1:return o1(e.booleanValue,c.booleanValue);case 2:return function(t,r){const n=T1(t.integerValue||t.doubleValue),i=T1(r.integerValue||r.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,c);case 3:return rs(e.timestampValue,c.timestampValue);case 4:return rs(N6(e),N6(c));case 5:return o1(e.stringValue,c.stringValue);case 6:return function(t,r){const n=w4(t),i=w4(r);return n.compareTo(i)}(e.bytesValue,c.bytesValue);case 7:return function(t,r){const n=t.split("/"),i=r.split("/");for(let o=0;o<n.length&&o<i.length;o++){const l=o1(n[o],i[o]);if(l!==0)return l}return o1(n.length,i.length)}(e.referenceValue,c.referenceValue);case 8:return function(t,r){const n=o1(T1(t.latitude),T1(r.latitude));return n!==0?n:o1(T1(t.longitude),T1(r.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(t,r){const n=t.values||[],i=r.values||[];for(let o=0;o<n.length&&o<i.length;++o){const l=k4(n[o],i[o]);if(l)return l}return o1(n.length,i.length)}(e.arrayValue,c.arrayValue);case 10:return function(t,r){if(t===y8.mapValue&&r===y8.mapValue)return 0;if(t===y8.mapValue)return 1;if(r===y8.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),o=r.fields||{},l=Object.keys(o);i.sort(),l.sort();for(let f=0;f<i.length&&f<l.length;++f){const h=o1(i[f],l[f]);if(h!==0)return h;const u=k4(n[i[f]],o[l[f]]);if(u!==0)return u}return o1(i.length,l.length)}(e.mapValue,c.mapValue);default:throw Z()}}function rs(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return o1(e,c);const a=d3(e),s=d3(c),t=o1(a.seconds,s.seconds);return t!==0?t:o1(a.nanos,s.nanos)}function z4(e){return R7(e)}function R7(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const t=d3(s);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?w4(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,W.fromName(a).toString()):"geoPointValue"in e?`geo(${(c=e.geoPointValue).latitude},${c.longitude})`:"arrayValue"in e?function(s){let t="[",r=!0;for(const n of s.values||[])r?r=!1:t+=",",t+=R7(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(s){const t=Object.keys(s.fields||{}).sort();let r="{",n=!0;for(const i of t)n?n=!1:r+=",",r+=`${i}:${R7(s.fields[i])}`;return r+"}"}(e.mapValue):Z();var c,a}function I7(e){return!!e&&"integerValue"in e}function cc(e){return!!e&&"arrayValue"in e}function ns(e){return!!e&&"nullValue"in e}function is(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function U8(e){return!!e&&"mapValue"in e}function i6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return J3(e.mapValue.fields,(a,s)=>c.mapValue.fields[a]=i6(s)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=i6(e.arrayValue.values[a]);return c}return Object.assign({},e)}function px(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class r2{constructor(c){this.value=c}static empty(){return new r2({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let s=0;s<c.length-1;++s)if(a=(a.mapValue.fields||{})[c.get(s)],!U8(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=i6(a)}setAll(c){let a=j1.emptyPath(),s={},t=[];c.forEach((n,i)=>{if(!a.isImmediateParentOf(i)){const o=this.getFieldsMap(a);this.applyChanges(o,s,t),s={},t=[],a=i.popLast()}n?s[i.lastSegment()]=i6(n):t.push(i.lastSegment())});const r=this.getFieldsMap(a);this.applyChanges(r,s,t)}delete(c){const a=this.field(c.popLast());U8(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return O2(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let s=0;s<c.length;++s){let t=a.mapValue.fields[c.get(s)];U8(t)&&t.mapValue.fields||(t={mapValue:{fields:{}}},a.mapValue.fields[c.get(s)]=t),a=t}return a.mapValue.fields}applyChanges(c,a,s){J3(a,(t,r)=>c[t]=r);for(const t of s)delete c[t]}clone(){return new r2(i6(this.value))}}function Pn(e){const c=[];return J3(e.fields,(a,s)=>{const t=new j1([a]);if(U8(s)){const r=Pn(s.mapValue).fields;if(r.length===0)c.push(t);else for(const n of r)c.push(t.child(n))}else c.push(t)}),new d2(c)}/**
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
 */class O1{constructor(c,a,s,t,r,n){this.key=c,this.documentType=a,this.version=s,this.readTime=t,this.data=r,this.documentState=n}static newInvalidDocument(c){return new O1(c,0,e1.min(),e1.min(),r2.empty(),0)}static newFoundDocument(c,a,s){return new O1(c,1,a,e1.min(),s,0)}static newNoDocument(c,a){return new O1(c,2,a,e1.min(),r2.empty(),0)}static newUnknownDocument(c,a){return new O1(c,3,a,e1.min(),r2.empty(),2)}convertToFoundDocument(c,a){return this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=r2.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=r2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=e1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof O1&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new O1(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dx{constructor(c,a=null,s=[],t=[],r=null,n=null,i=null){this.path=c,this.collectionGroup=a,this.orderBy=s,this.filters=t,this.limit=r,this.startAt=n,this.endAt=i,this.ht=null}}function os(e,c=null,a=[],s=[],t=null,r=null,n=null){return new dx(e,c,a,s,t,r,n)}function ec(e){const c=Y(e);if(c.ht===null){let a=c.path.canonicalString();c.collectionGroup!==null&&(a+="|cg:"+c.collectionGroup),a+="|f:",a+=c.filters.map(s=>{return(t=s).field.canonicalString()+t.op.toString()+z4(t.value);var t}).join(","),a+="|ob:",a+=c.orderBy.map(s=>function(t){return t.field.canonicalString()+t.dir}(s)).join(","),X5(c.limit)||(a+="|l:",a+=c.limit),c.startAt&&(a+="|lb:",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(s=>z4(s)).join(",")),c.endAt&&(a+="|ub:",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(s=>z4(s)).join(",")),c.ht=a}return c.ht}function zx(e){let c=e.path.canonicalString();return e.collectionGroup!==null&&(c+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(c+=`, filters: [${e.filters.map(a=>{return`${(s=a).field.canonicalString()} ${s.op} ${z4(s.value)}`;var s}).join(", ")}]`),X5(e.limit)||(c+=", limit: "+e.limit),e.orderBy.length>0&&(c+=`, orderBy: [${e.orderBy.map(a=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(a)).join(", ")}]`),e.startAt&&(c+=", startAt: ",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(a=>z4(a)).join(",")),e.endAt&&(c+=", endAt: ",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(a=>z4(a)).join(",")),`Target(${c})`}function ac(e,c){if(e.limit!==c.limit||e.orderBy.length!==c.orderBy.length)return!1;for(let t=0;t<e.orderBy.length;t++)if(!yx(e.orderBy[t],c.orderBy[t]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let t=0;t<e.filters.length;t++)if(a=e.filters[t],s=c.filters[t],a.op!==s.op||!a.field.isEqual(s.field)||!O2(a.value,s.value))return!1;var a,s;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!fs(e.startAt,c.startAt)&&fs(e.endAt,c.endAt)}function F7(e){return W.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class n2 extends class{}{constructor(c,a,s){super(),this.field=c,this.op=a,this.value=s}static create(c,a,s){return c.isKeyField()?a==="in"||a==="not-in"?this.lt(c,a,s):new Hx(c,a,s):a==="array-contains"?new gx(c,s):a==="in"?new Lx(c,s):a==="not-in"?new bx(c,s):a==="array-contains-any"?new xx(c,s):new n2(c,a,s)}static lt(c,a,s){return a==="in"?new Mx(c,s):new Vx(c,s)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.ft(k4(a,this.value)):a!==null&&Z3(this.value)===Z3(a)&&this.ft(k4(a,this.value))}ft(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return Z()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Hx extends n2{constructor(c,a,s){super(c,a,s),this.key=W.fromName(s.referenceValue)}matches(c){const a=W.comparator(c.key,this.key);return this.ft(a)}}class Mx extends n2{constructor(c,a){super(c,"in",a),this.keys=_n("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class Vx extends n2{constructor(c,a){super(c,"not-in",a),this.keys=_n("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function _n(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(s=>W.fromName(s.referenceValue))}class gx extends n2{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return cc(a)&&k6(a.arrayValue,this.value)}}class Lx extends n2{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&k6(this.value.arrayValue,a)}}class bx extends n2{constructor(c,a){super(c,"not-in",a)}matches(c){if(k6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!k6(this.value.arrayValue,a)}}class xx extends n2{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!cc(a)||!a.arrayValue.values)&&a.arrayValue.values.some(s=>k6(this.value.arrayValue,s))}}class v5{constructor(c,a){this.position=c,this.inclusive=a}}class H4{constructor(c,a="asc"){this.field=c,this.dir=a}}function yx(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}function ls(e,c,a){let s=0;for(let t=0;t<e.position.length;t++){const r=c[t],n=e.position[t];if(r.field.isKeyField()?s=W.comparator(W.fromName(n.referenceValue),a.key):s=k4(n,a.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function fs(e,c){if(e===null)return c===null;if(c===null||e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!O2(e.position[a],c.position[a]))return!1;return!0}/**
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
 */class e8{constructor(c,a=null,s=[],t=[],r=null,n="F",i=null,o=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=s,this.filters=t,this.limit=r,this.limitType=n,this.startAt=i,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function Sx(e,c,a,s,t,r,n,i){return new e8(e,c,a,s,t,r,n,i)}function sc(e){return new e8(e)}function hs(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dn(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Rn(e){for(const c of e.filters)if(c.dt())return c.field;return null}function Nx(e){return e.collectionGroup!==null}function A6(e){const c=Y(e);if(c._t===null){c._t=[];const a=Rn(c),s=Dn(c);if(a!==null&&s===null)a.isKeyField()||c._t.push(new H4(a)),c._t.push(new H4(j1.keyField(),"asc"));else{let t=!1;for(const r of c.explicitOrderBy)c._t.push(r),r.field.isKeyField()&&(t=!0);if(!t){const r=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new H4(j1.keyField(),r))}}}return c._t}function Q2(e){const c=Y(e);if(!c.wt)if(c.limitType==="F")c.wt=os(c.path,c.collectionGroup,A6(c),c.filters,c.limit,c.startAt,c.endAt);else{const a=[];for(const r of A6(c)){const n=r.dir==="desc"?"asc":"desc";a.push(new H4(r.field,n))}const s=c.endAt?new v5(c.endAt.position,c.endAt.inclusive):null,t=c.startAt?new v5(c.startAt.position,c.startAt.inclusive):null;c.wt=os(c.path,c.collectionGroup,a,c.filters,c.limit,s,t)}return c.wt}function B7(e,c,a){return new e8(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,a,e.startAt,e.endAt)}function J5(e,c){return ac(Q2(e),Q2(c))&&e.limitType===c.limitType}function In(e){return`${ec(Q2(e))}|lt:${e.limitType}`}function O7(e){return`Query(target=${zx(Q2(e))}; limitType=${e.limitType})`}function tc(e,c){return c.isFoundDocument()&&function(a,s){const t=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(t):W.isDocumentKey(a.path)?a.path.isEqual(t):a.path.isImmediateParentOf(t)}(e,c)&&function(a,s){for(const t of a.explicitOrderBy)if(!t.field.isKeyField()&&s.data.field(t.field)===null)return!1;return!0}(e,c)&&function(a,s){for(const t of a.filters)if(!t.matches(s))return!1;return!0}(e,c)&&function(a,s){return!(a.startAt&&!function(t,r,n){const i=ls(t,r,n);return t.inclusive?i<=0:i<0}(a.startAt,A6(a),s)||a.endAt&&!function(t,r,n){const i=ls(t,r,n);return t.inclusive?i>=0:i>0}(a.endAt,A6(a),s))}(e,c)}function wx(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Fn(e){return(c,a)=>{let s=!1;for(const t of A6(e)){const r=kx(t,c,a);if(r!==0)return r;s=s||t.field.isKeyField()}return 0}}function kx(e,c,a){const s=e.field.isKeyField()?W.comparator(c.key,a.key):function(t,r,n){const i=r.data.field(t),o=n.data.field(t);return i!==null&&o!==null?k4(i,o):Z()}(e.field,c,a);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
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
 */function Bn(e,c){if(e.gt){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:m5(c)?"-0":c}}function On(e){return{integerValue:""+e}}function Ax(e,c){return Cx(c)?On(c):Bn(e,c)}/**
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
 */class c0{constructor(){this._=void 0}}function Tx(e,c,a){return e instanceof C5?function(s,t){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(a,c):e instanceof T6?Un(e,c):e instanceof E6?$n(e,c):function(s,t){const r=qn(s,t),n=us(r)+us(s.yt);return I7(r)&&I7(s.yt)?On(n):Bn(s.It,n)}(e,c)}function Ex(e,c,a){return e instanceof T6?Un(e,c):e instanceof E6?$n(e,c):a}function qn(e,c){return e instanceof p5?I7(a=c)||function(s){return!!s&&"doubleValue"in s}(a)?c:{integerValue:0}:null;var a}class C5 extends c0{}class T6 extends c0{constructor(c){super(),this.elements=c}}function Un(e,c){const a=Gn(c);for(const s of e.elements)a.some(t=>O2(t,s))||a.push(s);return{arrayValue:{values:a}}}class E6 extends c0{constructor(c){super(),this.elements=c}}function $n(e,c){let a=Gn(c);for(const s of e.elements)a=a.filter(t=>!O2(t,s));return{arrayValue:{values:a}}}class p5 extends c0{constructor(c,a){super(),this.It=c,this.yt=a}}function us(e){return T1(e.integerValue||e.doubleValue)}function Gn(e){return cc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Px(e,c){return e.field.isEqual(c.field)&&function(a,s){return a instanceof T6&&s instanceof T6||a instanceof E6&&s instanceof E6?N4(a.elements,s.elements,O2):a instanceof p5&&s instanceof p5?O2(a.yt,s.yt):a instanceof C5&&s instanceof C5}(e.transform,c.transform)}class _x{constructor(c,a){this.version=c,this.transformResults=a}}class F2{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new F2}static exists(c){return new F2(void 0,c)}static updateTime(c){return new F2(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}function $8(e,c){return e.updateTime!==void 0?c.isFoundDocument()&&c.version.isEqual(e.updateTime):e.exists===void 0||e.exists===c.isFoundDocument()}class e0{}function Wn(e,c){if(!e.hasLocalMutations||c&&c.fields.length===0)return null;if(c===null)return e.isNoDocument()?new Kn(e.key,F2.none()):new a8(e.key,e.data,F2.none());{const a=e.data,s=r2.empty();let t=new P1(j1.comparator);for(let r of c.fields)if(!t.has(r)){let n=a.field(r);n===null&&r.length>1&&(r=r.popLast(),n=a.field(r)),n===null?s.delete(r):s.set(r,n),t=t.add(r)}return new b3(e.key,s,new d2(t.toArray()),F2.none())}}function Dx(e,c,a){e instanceof a8?function(s,t,r){const n=s.value.clone(),i=vs(s.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,c,a):e instanceof b3?function(s,t,r){if(!$8(s.precondition,t))return void t.convertToUnknownDocument(r.version);const n=vs(s.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(jn(s)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,c,a):function(s,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,c,a)}function o6(e,c,a,s){return e instanceof a8?function(t,r,n,i){if(!$8(t.precondition,r))return n;const o=t.value.clone(),l=Cs(t.fieldTransforms,i,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(e,c,a,s):e instanceof b3?function(t,r,n,i){if(!$8(t.precondition,r))return n;const o=Cs(t.fieldTransforms,i,r),l=r.data;return l.setAll(jn(t)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),n===null?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(f=>f.field))}(e,c,a,s):function(t,r,n){return $8(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):n}(e,c,a)}function Rx(e,c){let a=null;for(const s of e.fieldTransforms){const t=c.data.field(s.field),r=qn(s.transform,t||null);r!=null&&(a===null&&(a=r2.empty()),a.set(s.field,r))}return a||null}function ms(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&N4(a,s,(t,r)=>Px(t,r))}(e.fieldTransforms,c.fieldTransforms)&&(e.type===0?e.value.isEqual(c.value):e.type!==1||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class a8 extends e0{constructor(c,a,s,t=[]){super(),this.key=c,this.value=a,this.precondition=s,this.fieldTransforms=t,this.type=0}getFieldMask(){return null}}class b3 extends e0{constructor(c,a,s,t,r=[]){super(),this.key=c,this.data=a,this.fieldMask=s,this.precondition=t,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jn(e){const c=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const s=e.data.field(a);c.set(a,s)}}),c}function vs(e,c,a){const s=new Map;z1(e.length===a.length);for(let t=0;t<a.length;t++){const r=e[t],n=r.transform,i=c.data.field(r.field);s.set(r.field,Ex(n,i,a[t]))}return s}function Cs(e,c,a){const s=new Map;for(const t of e){const r=t.transform,n=a.data.field(t.field);s.set(t.field,Tx(r,n,c))}return s}class Kn extends e0{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ix extends e0{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fx{constructor(c){this.count=c}}/**
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
 */var A1,r1;function Bx(e){switch(e){default:return Z();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Zn(e){if(e===void 0)return Z2("GRPC error has no .code"),y.UNKNOWN;switch(e){case A1.OK:return y.OK;case A1.CANCELLED:return y.CANCELLED;case A1.UNKNOWN:return y.UNKNOWN;case A1.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case A1.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case A1.INTERNAL:return y.INTERNAL;case A1.UNAVAILABLE:return y.UNAVAILABLE;case A1.UNAUTHENTICATED:return y.UNAUTHENTICATED;case A1.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case A1.NOT_FOUND:return y.NOT_FOUND;case A1.ALREADY_EXISTS:return y.ALREADY_EXISTS;case A1.PERMISSION_DENIED:return y.PERMISSION_DENIED;case A1.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case A1.ABORTED:return y.ABORTED;case A1.OUT_OF_RANGE:return y.OUT_OF_RANGE;case A1.UNIMPLEMENTED:return y.UNIMPLEMENTED;case A1.DATA_LOSS:return y.DATA_LOSS;default:return Z()}}(r1=A1||(A1={}))[r1.OK=0]="OK",r1[r1.CANCELLED=1]="CANCELLED",r1[r1.UNKNOWN=2]="UNKNOWN",r1[r1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",r1[r1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",r1[r1.NOT_FOUND=5]="NOT_FOUND",r1[r1.ALREADY_EXISTS=6]="ALREADY_EXISTS",r1[r1.PERMISSION_DENIED=7]="PERMISSION_DENIED",r1[r1.UNAUTHENTICATED=16]="UNAUTHENTICATED",r1[r1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",r1[r1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",r1[r1.ABORTED=10]="ABORTED",r1[r1.OUT_OF_RANGE=11]="OUT_OF_RANGE",r1[r1.UNIMPLEMENTED=12]="UNIMPLEMENTED",r1[r1.INTERNAL=13]="INTERNAL",r1[r1.UNAVAILABLE=14]="UNAVAILABLE",r1[r1.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class q4{constructor(c,a){this.mapKeyFn=c,this.equalsFn=a,this.inner={},this.innerSize=0}get(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s!==void 0){for(const[t,r]of s)if(this.equalsFn(t,c))return r}}has(c){return this.get(c)!==void 0}set(c,a){const s=this.mapKeyFn(c),t=this.inner[s];if(t===void 0)return this.inner[s]=[[c,a]],void this.innerSize++;for(let r=0;r<t.length;r++)if(this.equalsFn(t[r][0],c))return void(t[r]=[c,a]);t.push([c,a]),this.innerSize++}delete(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s===void 0)return!1;for(let t=0;t<s.length;t++)if(this.equalsFn(s[t][0],c))return s.length===1?delete this.inner[a]:s.splice(t,1),this.innerSize--,!0;return!1}forEach(c){J3(this.inner,(a,s)=>{for(const[t,r]of s)c(t,r)})}isEmpty(){return An(this.inner)}size(){return this.innerSize}}/**
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
 */const Ox=new _1(W.comparator);function Y2(){return Ox}const Qn=new _1(W.comparator);function J4(...e){let c=Qn;for(const a of e)c=c.insert(a.key,a);return c}function Yn(e){let c=Qn;return e.forEach((a,s)=>c=c.insert(a,s.overlayedDocument)),c}function D3(){return l6()}function Xn(){return l6()}function l6(){return new q4(e=>e.toString(),(e,c)=>e.isEqual(c))}const qx=new _1(W.comparator),Ux=new P1(W.comparator);function s1(...e){let c=Ux;for(const a of e)c=c.add(a);return c}const $x=new P1(o1);function Jn(){return $x}/**
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
 */class a0{constructor(c,a,s,t,r){this.snapshotVersion=c,this.targetChanges=a,this.targetMismatches=s,this.documentUpdates=t,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(c,a,s){const t=new Map;return t.set(c,s8.createSynthesizedTargetChangeForCurrentChange(c,a,s)),new a0(e1.min(),t,Jn(),Y2(),s1())}}class s8{constructor(c,a,s,t,r){this.resumeToken=c,this.current=a,this.addedDocuments=s,this.modifiedDocuments=t,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(c,a,s){return new s8(s,a,s1(),s1(),s1())}}/**
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
 */class G8{constructor(c,a,s,t){this.Tt=c,this.removedTargetIds=a,this.key=s,this.Et=t}}class ci{constructor(c,a){this.targetId=c,this.At=a}}class ei{constructor(c,a,s=Y1.EMPTY_BYTE_STRING,t=null){this.state=c,this.targetIds=a,this.resumeToken=s,this.cause=t}}class ps{constructor(){this.Rt=0,this.bt=zs(),this.Pt=Y1.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(c){c.approximateByteSize()>0&&(this.Vt=!0,this.Pt=c)}xt(){let c=s1(),a=s1(),s=s1();return this.bt.forEach((t,r)=>{switch(r){case 0:c=c.add(t);break;case 2:a=a.add(t);break;case 1:s=s.add(t);break;default:Z()}}),new s8(this.Pt,this.vt,c,a,s)}Nt(){this.Vt=!1,this.bt=zs()}kt(c,a){this.Vt=!0,this.bt=this.bt.insert(c,a)}Ot(c){this.Vt=!0,this.bt=this.bt.remove(c)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Gx{constructor(c){this.Bt=c,this.Lt=new Map,this.Ut=Y2(),this.qt=ds(),this.Kt=new P1(o1)}Gt(c){for(const a of c.Tt)c.Et&&c.Et.isFoundDocument()?this.Qt(a,c.Et):this.jt(a,c.key,c.Et);for(const a of c.removedTargetIds)this.jt(a,c.key,c.Et)}Wt(c){this.forEachTarget(c,a=>{const s=this.zt(a);switch(c.state){case 0:this.Ht(a)&&s.Ct(c.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(c.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(a);break;case 3:this.Ht(a)&&(s.$t(),s.Ct(c.resumeToken));break;case 4:this.Ht(a)&&(this.Jt(a),s.Ct(c.resumeToken));break;default:Z()}})}forEachTarget(c,a){c.targetIds.length>0?c.targetIds.forEach(a):this.Lt.forEach((s,t)=>{this.Ht(t)&&a(t)})}Yt(c){const a=c.targetId,s=c.At.count,t=this.Xt(a);if(t){const r=t.target;if(F7(r))if(s===0){const n=new W(r.path);this.jt(a,n,O1.newNoDocument(n,e1.min()))}else z1(s===1);else this.Zt(a)!==s&&(this.Jt(a),this.Kt=this.Kt.add(a))}}te(c){const a=new Map;this.Lt.forEach((r,n)=>{const i=this.Xt(n);if(i){if(r.current&&F7(i.target)){const o=new W(i.target.path);this.Ut.get(o)!==null||this.ee(n,o)||this.jt(n,o,O1.newNoDocument(o,c))}r.Dt&&(a.set(n,r.xt()),r.Nt())}});let s=s1();this.qt.forEach((r,n)=>{let i=!0;n.forEachWhile(o=>{const l=this.Xt(o);return!l||l.purpose===2||(i=!1,!1)}),i&&(s=s.add(r))}),this.Ut.forEach((r,n)=>n.setReadTime(c));const t=new a0(c,a,this.Kt,this.Ut,s);return this.Ut=Y2(),this.qt=ds(),this.Kt=new P1(o1),t}Qt(c,a){if(!this.Ht(c))return;const s=this.ee(c,a.key)?2:0;this.zt(c).kt(a.key,s),this.Ut=this.Ut.insert(a.key,a),this.qt=this.qt.insert(a.key,this.ne(a.key).add(c))}jt(c,a,s){if(!this.Ht(c))return;const t=this.zt(c);this.ee(c,a)?t.kt(a,1):t.Ot(a),this.qt=this.qt.insert(a,this.ne(a).delete(c)),s&&(this.Ut=this.Ut.insert(a,s))}removeTarget(c){this.Lt.delete(c)}Zt(c){const a=this.zt(c).xt();return this.Bt.getRemoteKeysForTarget(c).size+a.addedDocuments.size-a.removedDocuments.size}Mt(c){this.zt(c).Mt()}zt(c){let a=this.Lt.get(c);return a||(a=new ps,this.Lt.set(c,a)),a}ne(c){let a=this.qt.get(c);return a||(a=new P1(o1),this.qt=this.qt.insert(c,a)),a}Ht(c){const a=this.Xt(c)!==null;return a||B("WatchChangeAggregator","Detected inactive target",c),a}Xt(c){const a=this.Lt.get(c);return a&&a.St?null:this.Bt.se(c)}Jt(c){this.Lt.set(c,new ps),this.Bt.getRemoteKeysForTarget(c).forEach(a=>{this.jt(c,a,null)})}ee(c,a){return this.Bt.getRemoteKeysForTarget(c).has(a)}}function ds(){return new _1(W.comparator)}function zs(){return new _1(W.comparator)}/**
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
 */const Wx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Kx{constructor(c,a){this.databaseId=c,this.gt=a}}function d5(e,c){return e.gt?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function ai(e,c){return e.gt?c.toBase64():c.toUint8Array()}function Zx(e,c){return d5(e,c.toTimestamp())}function G2(e){return z1(!!e),e1.fromTimestamp(function(c){const a=d3(c);return new E1(a.seconds,a.nanos)}(e))}function rc(e,c){return function(a){return new L1(["projects",a.projectId,"databases",a.database])}(e).child("documents").child(c).canonicalString()}function si(e){const c=L1.fromString(e);return z1(ni(c)),c}function q7(e,c){return rc(e.databaseId,c.path)}function Y0(e,c){const a=si(c);if(a.get(1)!==e.databaseId.projectId)throw new G(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new G(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new W(ti(a))}function U7(e,c){return rc(e.databaseId,c)}function Qx(e){const c=si(e);return c.length===4?L1.emptyPath():ti(c)}function $7(e){return new L1(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ti(e){return z1(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Hs(e,c,a){return{name:q7(e,c),fields:a.value.mapValue.fields}}function Yx(e,c){let a;if("targetChange"in c){c.targetChange;const s=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:Z()}(c.targetChange.targetChangeType||"NO_CHANGE"),t=c.targetChange.targetIds||[],r=function(o,l){return o.gt?(z1(l===void 0||typeof l=="string"),Y1.fromBase64String(l||"")):(z1(l===void 0||l instanceof Uint8Array),Y1.fromUint8Array(l||new Uint8Array))}(e,c.targetChange.resumeToken),n=c.targetChange.cause,i=n&&function(o){const l=o.code===void 0?y.UNKNOWN:Zn(o.code);return new G(l,o.message||"")}(n);a=new ei(s,t,r,i||null)}else if("documentChange"in c){c.documentChange;const s=c.documentChange;s.document,s.document.name,s.document.updateTime;const t=Y0(e,s.document.name),r=G2(s.document.updateTime),n=new r2({mapValue:{fields:s.document.fields}}),i=O1.newFoundDocument(t,r,n),o=s.targetIds||[],l=s.removedTargetIds||[];a=new G8(o,l,i.key,i)}else if("documentDelete"in c){c.documentDelete;const s=c.documentDelete;s.document;const t=Y0(e,s.document),r=s.readTime?G2(s.readTime):e1.min(),n=O1.newNoDocument(t,r),i=s.removedTargetIds||[];a=new G8([],i,n.key,n)}else if("documentRemove"in c){c.documentRemove;const s=c.documentRemove;s.document;const t=Y0(e,s.document),r=s.removedTargetIds||[];a=new G8([],r,t,null)}else{if(!("filter"in c))return Z();{c.filter;const s=c.filter;s.targetId;const t=s.count||0,r=new Fx(t),n=s.targetId;a=new ci(n,r)}}return a}function Xx(e,c){let a;if(c instanceof a8)a={update:Hs(e,c.key,c.value)};else if(c instanceof Kn)a={delete:q7(e,c.key)};else if(c instanceof b3)a={update:Hs(e,c.key,c.data),updateMask:oy(c.fieldMask)};else{if(!(c instanceof Ix))return Z();a={verify:q7(e,c.key)}}return c.fieldTransforms.length>0&&(a.updateTransforms=c.fieldTransforms.map(s=>function(t,r){const n=r.transform;if(n instanceof C5)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof T6)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof E6)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof p5)return{fieldPath:r.field.canonicalString(),increment:n.yt};throw Z()}(0,s))),c.precondition.isNone||(a.currentDocument=function(s,t){return t.updateTime!==void 0?{updateTime:Zx(s,t.updateTime)}:t.exists!==void 0?{exists:t.exists}:Z()}(e,c.precondition)),a}function Jx(e,c){return e&&e.length>0?(z1(c!==void 0),e.map(a=>function(s,t){let r=s.updateTime?G2(s.updateTime):G2(t);return r.isEqual(e1.min())&&(r=G2(t)),new _x(r,s.transformResults||[])}(a,c))):[]}function cy(e,c){return{documents:[U7(e,c.path)]}}function ey(e,c){const a={structuredQuery:{}},s=c.path;c.collectionGroup!==null?(a.parent=U7(e,s),a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(a.parent=U7(e,s.popLast()),a.structuredQuery.from=[{collectionId:s.lastSegment()}]);const t=function(o){if(o.length===0)return;const l=o.map(f=>function(h){if(h.op==="=="){if(is(h.value))return{unaryFilter:{field:r4(h.field),op:"IS_NAN"}};if(ns(h.value))return{unaryFilter:{field:r4(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(is(h.value))return{unaryFilter:{field:r4(h.field),op:"IS_NOT_NAN"}};if(ns(h.value))return{unaryFilter:{field:r4(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:r4(h.field),op:ry(h.op),value:h.value}}}(f));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(c.filters);t&&(a.structuredQuery.where=t);const r=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:r4(f.field),direction:ty(f.dir)}}(l))}(c.orderBy);r&&(a.structuredQuery.orderBy=r);const n=function(o,l){return o.gt||X5(l)?l:{value:l}}(e,c.limit);var i;return n!==null&&(a.structuredQuery.limit=n),c.startAt&&(a.structuredQuery.startAt={before:(i=c.startAt).inclusive,values:i.position}),c.endAt&&(a.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(c.endAt)),a}function ay(e){let c=Qx(e.parent);const a=e.structuredQuery,s=a.from?a.from.length:0;let t=null;if(s>0){z1(s===1);const f=a.from[0];f.allDescendants?t=f.collectionId:c=c.child(f.collectionId)}let r=[];a.where&&(r=ri(a.where));let n=[];a.orderBy&&(n=a.orderBy.map(f=>function(h){return new H4(l4(h.field),function(u){switch(u){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(f)));let i=null;a.limit&&(i=function(f){let h;return h=typeof f=="object"?f.value:f,X5(h)?null:h}(a.limit));let o=null;a.startAt&&(o=function(f){const h=!!f.before,u=f.values||[];return new v5(u,h)}(a.startAt));let l=null;return a.endAt&&(l=function(f){const h=!f.before,u=f.values||[];return new v5(u,h)}(a.endAt)),Sx(c,t,n,r,i,"F",o,l)}function sy(e,c){const a=function(s,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Z()}}(0,c.purpose);return a==null?null:{"goog-listen-tags":a}}function ri(e){return e?e.unaryFilter!==void 0?[iy(e)]:e.fieldFilter!==void 0?[ny(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(c=>ri(c)).reduce((c,a)=>c.concat(a)):Z():[]}function ty(e){return Wx[e]}function ry(e){return jx[e]}function r4(e){return{fieldPath:e.canonicalString()}}function l4(e){return j1.fromServerFormat(e.fieldPath)}function ny(e){return n2.create(l4(e.fieldFilter.field),function(c){switch(c){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}function iy(e){switch(e.unaryFilter.op){case"IS_NAN":const c=l4(e.unaryFilter.field);return n2.create(c,"==",{doubleValue:NaN});case"IS_NULL":const a=l4(e.unaryFilter.field);return n2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=l4(e.unaryFilter.field);return n2.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const t=l4(e.unaryFilter.field);return n2.create(t,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}function oy(e){const c=[];return e.fields.forEach(a=>c.push(a.canonicalString())),{fieldPaths:c}}function ni(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ly{constructor(c,a,s,t){this.batchId=c,this.localWriteTime=a,this.baseMutations=s,this.mutations=t}applyToRemoteDocument(c,a){const s=a.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(c.key)&&Dx(r,c,s[t])}}applyToLocalView(c,a){for(const s of this.baseMutations)s.key.isEqual(c.key)&&(a=o6(s,c,a,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(c.key)&&(a=o6(s,c,a,this.localWriteTime));return a}applyToLocalDocumentSet(c,a){const s=Xn();return this.mutations.forEach(t=>{const r=c.get(t.key),n=r.overlayedDocument;let i=this.applyToLocalView(n,r.mutatedFields);i=a.has(t.key)?null:i;const o=Wn(n,i);o!==null&&s.set(t.key,o),n.isValidDocument()||n.convertToNoDocument(e1.min())}),s}keys(){return this.mutations.reduce((c,a)=>c.add(a.key),s1())}isEqual(c){return this.batchId===c.batchId&&N4(this.mutations,c.mutations,(a,s)=>ms(a,s))&&N4(this.baseMutations,c.baseMutations,(a,s)=>ms(a,s))}}class nc{constructor(c,a,s,t){this.batch=c,this.commitVersion=a,this.mutationResults=s,this.docVersions=t}static from(c,a,s){z1(c.mutations.length===s.length);let t=qx;const r=c.mutations;for(let n=0;n<r.length;n++)t=t.insert(r[n].key,s[n].version);return new nc(c,a,s,t)}}/**
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
 */class fy{constructor(c,a){this.largestBatchId=c,this.mutation=a}getKey(){return this.mutation.key}isEqual(c){return c!==null&&this.mutation===c.mutation}toString(){return`Overlay{
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
 */class $3{constructor(c,a,s,t,r=e1.min(),n=e1.min(),i=Y1.EMPTY_BYTE_STRING){this.target=c,this.targetId=a,this.purpose=s,this.sequenceNumber=t,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=n,this.resumeToken=i}withSequenceNumber(c){return new $3(this.target,this.targetId,this.purpose,c,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(c,a){return new $3(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,c)}withLastLimboFreeSnapshotVersion(c){return new $3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,c,this.resumeToken)}}/**
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
 */class hy{constructor(c){this.re=c}}function uy(e){const c=ay({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?B7(c,c.limit,"L"):c}/**
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
 */class my{constructor(){this.Ye=new vy}addToCollectionParentIndex(c,a){return this.Ye.add(a),S.resolve()}getCollectionParents(c,a){return S.resolve(this.Ye.getEntries(a))}addFieldIndex(c,a){return S.resolve()}deleteFieldIndex(c,a){return S.resolve()}getDocumentsMatchingTarget(c,a){return S.resolve(null)}getIndexType(c,a){return S.resolve(0)}getFieldIndexes(c,a){return S.resolve([])}getNextCollectionGroupToUpdate(c){return S.resolve(null)}getMinOffset(c,a){return S.resolve(p3.min())}getMinOffsetFromCollectionGroup(c,a){return S.resolve(p3.min())}updateCollectionGroup(c,a,s){return S.resolve()}updateIndexEntries(c,a){return S.resolve()}}class vy{constructor(){this.index={}}add(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a]||new P1(L1.comparator),r=!t.has(s);return this.index[a]=t.add(s),r}has(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a];return t&&t.has(s)}getEntries(c){return(this.index[c]||new P1(L1.comparator)).toArray()}}/**
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
 */class A4{constructor(c){this.bn=c}next(){return this.bn+=2,this.bn}static Pn(){return new A4(0)}static vn(){return new A4(-1)}}/**
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
 */class Cy{constructor(){this.changes=new q4(c=>c.toString(),(c,a)=>c.isEqual(a)),this.changesApplied=!1}addEntry(c){this.assertNotApplied(),this.changes.set(c.key,c)}removeEntry(c,a){this.assertNotApplied(),this.changes.set(c,O1.newInvalidDocument(c).setReadTime(a))}getEntry(c,a){this.assertNotApplied();const s=this.changes.get(a);return s!==void 0?S.resolve(s):this.getFromCache(c,a)}getEntries(c,a){return this.getAllFromCache(c,a)}apply(c){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(c)}assertNotApplied(){}}/**
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
 */class py{constructor(c,a){this.overlayedDocument=c,this.mutatedFields=a}}/**
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
 */class dy{constructor(c,a,s,t){this.remoteDocumentCache=c,this.mutationQueue=a,this.documentOverlayCache=s,this.indexManager=t}getDocument(c,a){let s=null;return this.documentOverlayCache.getOverlay(c,a).next(t=>(s=t,this.getBaseDocument(c,a,s))).next(t=>(s!==null&&o6(s.mutation,t,d2.empty(),E1.now()),t))}getDocuments(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.getLocalViewOfDocuments(c,s,s1()).next(()=>s))}getLocalViewOfDocuments(c,a,s=s1()){const t=D3();return this.populateOverlays(c,t,a).next(()=>this.computeViews(c,a,t,s).next(r=>{let n=J4();return r.forEach((i,o)=>{n=n.insert(i,o.overlayedDocument)}),n}))}getOverlayedDocuments(c,a){const s=D3();return this.populateOverlays(c,s,a).next(()=>this.computeViews(c,a,s,s1()))}populateOverlays(c,a,s){const t=[];return s.forEach(r=>{a.has(r)||t.push(r)}),this.documentOverlayCache.getOverlays(c,t).next(r=>{r.forEach((n,i)=>{a.set(n,i)})})}computeViews(c,a,s,t){let r=Y2();const n=l6(),i=l6();return a.forEach((o,l)=>{const f=s.get(l.key);t.has(l.key)&&(f===void 0||f.mutation instanceof b3)?r=r.insert(l.key,l):f!==void 0&&(n.set(l.key,f.mutation.getFieldMask()),o6(f.mutation,l,f.mutation.getFieldMask(),E1.now()))}),this.recalculateAndSaveOverlays(c,r).next(o=>(o.forEach((l,f)=>n.set(l,f)),a.forEach((l,f)=>{var h;return i.set(l,new py(f,(h=n.get(l))!==null&&h!==void 0?h:null))}),i))}recalculateAndSaveOverlays(c,a){const s=l6();let t=new _1((n,i)=>n-i),r=s1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(c,a).next(n=>{for(const i of n)i.keys().forEach(o=>{const l=a.get(o);if(l===null)return;let f=s.get(o)||d2.empty();f=i.applyToLocalView(l,f),s.set(o,f);const h=(t.get(i.batchId)||s1()).add(o);t=t.insert(i.batchId,h)})}).next(()=>{const n=[],i=t.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,h=Xn();f.forEach(u=>{if(!r.has(u)){const v=Wn(a.get(u),s.get(u));v!==null&&h.set(u,v),r=r.add(u)}}),n.push(this.documentOverlayCache.saveOverlays(c,l,h))}return S.waitFor(n)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.recalculateAndSaveOverlays(c,s))}getDocumentsMatchingQuery(c,a,s){return function(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(c,a.path):Nx(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,s):this.getDocumentsMatchingCollectionQuery(c,a,s)}getNextDocuments(c,a,s,t){return this.remoteDocumentCache.getAllFromCollectionGroup(c,a,s,t).next(r=>{const n=t-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(c,a,s.largestBatchId,t-r.size):S.resolve(D3());let i=-1,o=r;return n.next(l=>S.forEach(l,(f,h)=>(i<h.largestBatchId&&(i=h.largestBatchId),r.get(f)?S.resolve():this.getBaseDocument(c,f,h).next(u=>{o=o.insert(f,u)}))).next(()=>this.populateOverlays(c,l,r)).next(()=>this.computeViews(c,o,l,s1())).next(f=>({batchId:i,changes:Yn(f)})))})}getDocumentsMatchingDocumentQuery(c,a){return this.getDocument(c,new W(a)).next(s=>{let t=J4();return s.isFoundDocument()&&(t=t.insert(s.key,s)),t})}getDocumentsMatchingCollectionGroupQuery(c,a,s){const t=a.collectionGroup;let r=J4();return this.indexManager.getCollectionParents(c,t).next(n=>S.forEach(n,i=>{const o=function(l,f){return new e8(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(a,i.child(t));return this.getDocumentsMatchingCollectionQuery(c,o,s).next(l=>{l.forEach((f,h)=>{r=r.insert(f,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(c,a,s){let t;return this.remoteDocumentCache.getAllFromCollection(c,a.path,s).next(r=>(t=r,this.documentOverlayCache.getOverlaysForCollection(c,a.path,s.largestBatchId))).next(r=>{r.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,O1.newInvalidDocument(l)))});let n=J4();return t.forEach((i,o)=>{const l=r.get(i);l!==void 0&&o6(l.mutation,o,d2.empty(),E1.now()),tc(a,o)&&(n=n.insert(i,o))}),n})}getBaseDocument(c,a,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(c,a):S.resolve(O1.newInvalidDocument(a))}}/**
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
 */class zy{constructor(c){this.It=c,this.Zn=new Map,this.ts=new Map}getBundleMetadata(c,a){return S.resolve(this.Zn.get(a))}saveBundleMetadata(c,a){var s;return this.Zn.set(a.id,{id:(s=a).id,version:s.version,createTime:G2(s.createTime)}),S.resolve()}getNamedQuery(c,a){return S.resolve(this.ts.get(a))}saveNamedQuery(c,a){return this.ts.set(a.name,function(s){return{name:s.name,query:uy(s.bundledQuery),readTime:G2(s.readTime)}}(a)),S.resolve()}}/**
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
 */class Hy{constructor(){this.overlays=new _1(W.comparator),this.es=new Map}getOverlay(c,a){return S.resolve(this.overlays.get(a))}getOverlays(c,a){const s=D3();return S.forEach(a,t=>this.getOverlay(c,t).next(r=>{r!==null&&s.set(t,r)})).next(()=>s)}saveOverlays(c,a,s){return s.forEach((t,r)=>{this.ue(c,a,r)}),S.resolve()}removeOverlaysForBatchId(c,a,s){const t=this.es.get(s);return t!==void 0&&(t.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),S.resolve()}getOverlaysForCollection(c,a,s){const t=D3(),r=a.length+1,n=new W(a.child("")),i=this.overlays.getIteratorFrom(n);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!a.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>s&&t.set(o.getKey(),o)}return S.resolve(t)}getOverlaysForCollectionGroup(c,a,s,t){let r=new _1((l,f)=>l-f);const n=this.overlays.getIterator();for(;n.hasNext();){const l=n.getNext().value;if(l.getKey().getCollectionGroup()===a&&l.largestBatchId>s){let f=r.get(l.largestBatchId);f===null&&(f=D3(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=D3(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=t)););return S.resolve(i)}ue(c,a,s){const t=this.overlays.get(s.key);if(t!==null){const n=this.es.get(t.largestBatchId).delete(s.key);this.es.set(t.largestBatchId,n)}this.overlays=this.overlays.insert(s.key,new fy(a,s));let r=this.es.get(a);r===void 0&&(r=s1(),this.es.set(a,r)),this.es.set(a,r.add(s.key))}}/**
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
 */class ic{constructor(){this.ns=new P1(R1.ss),this.rs=new P1(R1.os)}isEmpty(){return this.ns.isEmpty()}addReference(c,a){const s=new R1(c,a);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(c,a){c.forEach(s=>this.addReference(s,a))}removeReference(c,a){this.cs(new R1(c,a))}hs(c,a){c.forEach(s=>this.removeReference(s,a))}ls(c){const a=new W(new L1([])),s=new R1(a,c),t=new R1(a,c+1),r=[];return this.rs.forEachInRange([s,t],n=>{this.cs(n),r.push(n.key)}),r}fs(){this.ns.forEach(c=>this.cs(c))}cs(c){this.ns=this.ns.delete(c),this.rs=this.rs.delete(c)}ds(c){const a=new W(new L1([])),s=new R1(a,c),t=new R1(a,c+1);let r=s1();return this.rs.forEachInRange([s,t],n=>{r=r.add(n.key)}),r}containsKey(c){const a=new R1(c,0),s=this.ns.firstAfterOrEqual(a);return s!==null&&c.isEqual(s.key)}}class R1{constructor(c,a){this.key=c,this._s=a}static ss(c,a){return W.comparator(c.key,a.key)||o1(c._s,a._s)}static os(c,a){return o1(c._s,a._s)||W.comparator(c.key,a.key)}}/**
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
 */class My{constructor(c,a){this.indexManager=c,this.referenceDelegate=a,this.mutationQueue=[],this.ws=1,this.gs=new P1(R1.ss)}checkEmpty(c){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(c,a,s,t){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const n=new ly(r,a,s,t);this.mutationQueue.push(n);for(const i of t)this.gs=this.gs.add(new R1(i.key,r)),this.indexManager.addToCollectionParentIndex(c,i.key.path.popLast());return S.resolve(n)}lookupMutationBatch(c,a){return S.resolve(this.ys(a))}getNextMutationBatchAfterBatchId(c,a){const s=a+1,t=this.ps(s),r=t<0?0:t;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(c){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(c,a){const s=new R1(a,0),t=new R1(a,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,t],n=>{const i=this.ys(n._s);r.push(i)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(c,a){let s=new P1(o1);return a.forEach(t=>{const r=new R1(t,0),n=new R1(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,n],i=>{s=s.add(i._s)})}),S.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(c,a){const s=a.path,t=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const n=new R1(new W(r),0);let i=new P1(o1);return this.gs.forEachWhile(o=>{const l=o.key.path;return!!s.isPrefixOf(l)&&(l.length===t&&(i=i.add(o._s)),!0)},n),S.resolve(this.Is(i))}Is(c){const a=[];return c.forEach(s=>{const t=this.ys(s);t!==null&&a.push(t)}),a}removeMutationBatch(c,a){z1(this.Ts(a.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return S.forEach(a.mutations,t=>{const r=new R1(t.key,a.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(c,t.key)}).next(()=>{this.gs=s})}An(c){}containsKey(c,a){const s=new R1(a,0),t=this.gs.firstAfterOrEqual(s);return S.resolve(a.isEqual(t&&t.key))}performConsistencyCheck(c){return this.mutationQueue.length,S.resolve()}Ts(c,a){return this.ps(c)}ps(c){return this.mutationQueue.length===0?0:c-this.mutationQueue[0].batchId}ys(c){const a=this.ps(c);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
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
 */class Vy{constructor(c){this.Es=c,this.docs=new _1(W.comparator),this.size=0}setIndexManager(c){this.indexManager=c}addEntry(c,a){const s=a.key,t=this.docs.get(s),r=t?t.size:0,n=this.Es(a);return this.docs=this.docs.insert(s,{document:a.mutableCopy(),size:n}),this.size+=n-r,this.indexManager.addToCollectionParentIndex(c,s.path.popLast())}removeEntry(c){const a=this.docs.get(c);a&&(this.docs=this.docs.remove(c),this.size-=a.size)}getEntry(c,a){const s=this.docs.get(a);return S.resolve(s?s.document.mutableCopy():O1.newInvalidDocument(a))}getEntries(c,a){let s=Y2();return a.forEach(t=>{const r=this.docs.get(t);s=s.insert(t,r?r.document.mutableCopy():O1.newInvalidDocument(t))}),S.resolve(s)}getAllFromCollection(c,a,s){let t=Y2();const r=new W(a.child("")),n=this.docs.getIteratorFrom(r);for(;n.hasNext();){const{key:i,value:{document:o}}=n.getNext();if(!a.isPrefixOf(i.path))break;i.path.length>a.length+1||fx(lx(o),s)<=0||(t=t.insert(o.key,o.mutableCopy()))}return S.resolve(t)}getAllFromCollectionGroup(c,a,s,t){Z()}As(c,a){return S.forEach(this.docs,s=>a(s))}newChangeBuffer(c){return new gy(this)}getSize(c){return S.resolve(this.size)}}class gy extends Cy{constructor(c){super(),this.Yn=c}applyChanges(c){const a=[];return this.changes.forEach((s,t)=>{t.isValidDocument()?a.push(this.Yn.addEntry(c,t)):this.Yn.removeEntry(s)}),S.waitFor(a)}getFromCache(c,a){return this.Yn.getEntry(c,a)}getAllFromCache(c,a){return this.Yn.getEntries(c,a)}}/**
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
 */class Ly{constructor(c){this.persistence=c,this.Rs=new q4(a=>ec(a),ac),this.lastRemoteSnapshotVersion=e1.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ic,this.targetCount=0,this.vs=A4.Pn()}forEachTarget(c,a){return this.Rs.forEach((s,t)=>a(t)),S.resolve()}getLastRemoteSnapshotVersion(c){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(c){return S.resolve(this.bs)}allocateTargetId(c){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(c,a,s){return s&&(this.lastRemoteSnapshotVersion=s),a>this.bs&&(this.bs=a),S.resolve()}Dn(c){this.Rs.set(c.target,c);const a=c.targetId;a>this.highestTargetId&&(this.vs=new A4(a),this.highestTargetId=a),c.sequenceNumber>this.bs&&(this.bs=c.sequenceNumber)}addTargetData(c,a){return this.Dn(a),this.targetCount+=1,S.resolve()}updateTargetData(c,a){return this.Dn(a),S.resolve()}removeTargetData(c,a){return this.Rs.delete(a.target),this.Ps.ls(a.targetId),this.targetCount-=1,S.resolve()}removeTargets(c,a,s){let t=0;const r=[];return this.Rs.forEach((n,i)=>{i.sequenceNumber<=a&&s.get(i.targetId)===null&&(this.Rs.delete(n),r.push(this.removeMatchingKeysForTargetId(c,i.targetId)),t++)}),S.waitFor(r).next(()=>t)}getTargetCount(c){return S.resolve(this.targetCount)}getTargetData(c,a){const s=this.Rs.get(a)||null;return S.resolve(s)}addMatchingKeys(c,a,s){return this.Ps.us(a,s),S.resolve()}removeMatchingKeys(c,a,s){this.Ps.hs(a,s);const t=this.persistence.referenceDelegate,r=[];return t&&a.forEach(n=>{r.push(t.markPotentiallyOrphaned(c,n))}),S.waitFor(r)}removeMatchingKeysForTargetId(c,a){return this.Ps.ls(a),S.resolve()}getMatchingKeysForTargetId(c,a){const s=this.Ps.ds(a);return S.resolve(s)}containsKey(c,a){return S.resolve(this.Ps.containsKey(a))}}/**
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
 */class by{constructor(c,a){this.Vs={},this.overlays={},this.Ss=new J9(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=c(this),this.Cs=new Ly(this),this.indexManager=new my,this.remoteDocumentCache=function(s){return new Vy(s)}(s=>this.referenceDelegate.xs(s)),this.It=new hy(a),this.Ns=new zy(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(c){return this.indexManager}getDocumentOverlayCache(c){let a=this.overlays[c.toKey()];return a||(a=new Hy,this.overlays[c.toKey()]=a),a}getMutationQueue(c,a){let s=this.Vs[c.toKey()];return s||(s=new My(a,this.referenceDelegate),this.Vs[c.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(c,a,s){B("MemoryPersistence","Starting transaction:",c);const t=new xy(this.Ss.next());return this.referenceDelegate.ks(),s(t).next(r=>this.referenceDelegate.Os(t).next(()=>r)).toPromise().then(r=>(t.raiseOnCommittedEvent(),r))}Ms(c,a){return S.or(Object.values(this.Vs).map(s=>()=>s.containsKey(c,a)))}}class xy extends ux{constructor(c){super(),this.currentSequenceNumber=c}}class oc{constructor(c){this.persistence=c,this.Fs=new ic,this.$s=null}static Bs(c){return new oc(c)}get Ls(){if(this.$s)return this.$s;throw Z()}addReference(c,a,s){return this.Fs.addReference(s,a),this.Ls.delete(s.toString()),S.resolve()}removeReference(c,a,s){return this.Fs.removeReference(s,a),this.Ls.add(s.toString()),S.resolve()}markPotentiallyOrphaned(c,a){return this.Ls.add(a.toString()),S.resolve()}removeTarget(c,a){this.Fs.ls(a.targetId).forEach(t=>this.Ls.add(t.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(c,a.targetId).next(t=>{t.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(c,a))}ks(){this.$s=new Set}Os(c){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,s=>{const t=W.fromPath(s);return this.Us(c,t).next(r=>{r||a.removeEntry(t,e1.min())})}).next(()=>(this.$s=null,a.apply(c)))}updateLimboDocument(c,a){return this.Us(c,a).next(s=>{s?this.Ls.delete(a.toString()):this.Ls.add(a.toString())})}xs(c){return 0}Us(c,a){return S.or([()=>S.resolve(this.Fs.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(c,a),()=>this.persistence.Ms(c,a)])}}/**
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
 */class lc{constructor(c,a,s,t){this.targetId=c,this.fromCache=a,this.Si=s,this.Di=t}static Ci(c,a){let s=s1(),t=s1();for(const r of a.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:t=t.add(r.doc.key)}return new lc(c,a.fromCache,s,t)}}/**
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
 */class yy{constructor(){this.xi=!1}initialize(c,a){this.Ni=c,this.indexManager=a,this.xi=!0}getDocumentsMatchingQuery(c,a,s,t){return this.ki(c,a).next(r=>r||this.Oi(c,a,t,s)).next(r=>r||this.Mi(c,a))}ki(c,a){if(hs(a))return S.resolve(null);let s=Q2(a);return this.indexManager.getIndexType(c,s).next(t=>t===0?null:(a.limit!==null&&t===1&&(a=B7(a,null,"F"),s=Q2(a)),this.indexManager.getDocumentsMatchingTarget(c,s).next(r=>{const n=s1(...r);return this.Ni.getDocuments(c,n).next(i=>this.indexManager.getMinOffset(c,s).next(o=>{const l=this.Fi(a,i);return this.$i(a,l,n,o.readTime)?this.ki(c,B7(a,null,"F")):this.Bi(c,l,a,o)}))})))}Oi(c,a,s,t){return hs(a)||t.isEqual(e1.min())?this.Mi(c,a):this.Ni.getDocuments(c,s).next(r=>{const n=this.Fi(a,r);return this.$i(a,n,s,t)?this.Mi(c,a):(as()<=i1.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",t.toString(),O7(a)),this.Bi(c,n,a,ox(t,-1)))})}Fi(c,a){let s=new P1(Fn(c));return a.forEach((t,r)=>{tc(c,r)&&(s=s.add(r))}),s}$i(c,a,s,t){if(c.limit===null)return!1;if(s.size!==a.size)return!0;const r=c.limitType==="F"?a.last():a.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(t)>0)}Mi(c,a){return as()<=i1.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",O7(a)),this.Ni.getDocumentsMatchingQuery(c,a,p3.min())}Bi(c,a,s,t){return this.Ni.getDocumentsMatchingQuery(c,s,t).next(r=>(a.forEach(n=>{r=r.insert(n.key,n)}),r))}}/**
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
 */class Sy{constructor(c,a,s,t){this.persistence=c,this.Li=a,this.It=t,this.Ui=new _1(o1),this.qi=new q4(r=>ec(r),ac),this.Ki=new Map,this.Gi=c.getRemoteDocumentCache(),this.Cs=c.getTargetCache(),this.Ns=c.getBundleCache(),this.Qi(s)}Qi(c){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(c),this.indexManager=this.persistence.getIndexManager(c),this.mutationQueue=this.persistence.getMutationQueue(c,this.indexManager),this.localDocuments=new dy(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(c){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>c.collect(a,this.Ui))}}function Ny(e,c,a,s){return new Sy(e,c,a,s)}async function ii(e,c){const a=Y(e);return await a.persistence.runTransaction("Handle user change","readonly",s=>{let t;return a.mutationQueue.getAllMutationBatches(s).next(r=>(t=r,a.Qi(c),a.mutationQueue.getAllMutationBatches(s))).next(r=>{const n=[],i=[];let o=s1();for(const l of t){n.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return a.localDocuments.getDocuments(s,o).next(l=>({ji:l,removedBatchIds:n,addedBatchIds:i}))})})}function wy(e,c){const a=Y(e);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const t=c.batch.keys(),r=a.Gi.newChangeBuffer({trackRemovals:!0});return function(n,i,o,l){const f=o.batch,h=f.keys();let u=S.resolve();return h.forEach(v=>{u=u.next(()=>l.getEntry(i,v)).next(d=>{const V=o.docVersions.get(v);z1(V!==null),d.version.compareTo(V)<0&&(f.applyToRemoteDocument(d,o),d.isValidDocument()&&(d.setReadTime(o.commitVersion),l.addEntry(d)))})}),u.next(()=>n.mutationQueue.removeMutationBatch(i,f))}(a,s,c,r).next(()=>r.apply(s)).next(()=>a.mutationQueue.performConsistencyCheck(s)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(s,t,c.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(n){let i=s1();for(let o=0;o<n.mutationResults.length;++o)n.mutationResults[o].transformResults.length>0&&(i=i.add(n.batch.mutations[o].key));return i}(c))).next(()=>a.localDocuments.getDocuments(s,t))})}function oi(e){const c=Y(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function ky(e,c){const a=Y(e),s=c.snapshotVersion;let t=a.Ui;return a.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const n=a.Gi.newChangeBuffer({trackRemovals:!0});t=a.Ui;const i=[];c.targetChanges.forEach((f,h)=>{const u=t.get(h);if(!u)return;i.push(a.Cs.removeMatchingKeys(r,f.removedDocuments,h).next(()=>a.Cs.addMatchingKeys(r,f.addedDocuments,h)));let v=u.withSequenceNumber(r.currentSequenceNumber);c.targetMismatches.has(h)?v=v.withResumeToken(Y1.EMPTY_BYTE_STRING,e1.min()).withLastLimboFreeSnapshotVersion(e1.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,s)),t=t.insert(h,v),function(d,V,b){return d.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(u,v,f)&&i.push(a.Cs.updateTargetData(r,v))});let o=Y2(),l=s1();if(c.documentUpdates.forEach(f=>{c.resolvedLimboDocuments.has(f)&&i.push(a.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(Ay(r,n,c.documentUpdates).next(f=>{o=f.Wi,l=f.zi})),!s.isEqual(e1.min())){const f=a.Cs.getLastRemoteSnapshotVersion(r).next(h=>a.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));i.push(f)}return S.waitFor(i).next(()=>n.apply(r)).next(()=>a.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(a.Ui=t,r))}function Ay(e,c,a){let s=s1(),t=s1();return a.forEach(r=>s=s.add(r)),c.getEntries(e,s).next(r=>{let n=Y2();return a.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(t=t.add(i)),o.isNoDocument()&&o.version.isEqual(e1.min())?(c.removeEntry(i,o.readTime),n=n.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(c.addEntry(o),n=n.insert(i,o)):B("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{Wi:n,zi:t}})}function Ty(e,c){const a=Y(e);return a.persistence.runTransaction("Get next mutation batch","readonly",s=>(c===void 0&&(c=-1),a.mutationQueue.getNextMutationBatchAfterBatchId(s,c)))}function Ey(e,c){const a=Y(e);return a.persistence.runTransaction("Allocate target","readwrite",s=>{let t;return a.Cs.getTargetData(s,c).next(r=>r?(t=r,S.resolve(t)):a.Cs.allocateTargetId(s).next(n=>(t=new $3(c,n,0,s.currentSequenceNumber),a.Cs.addTargetData(s,t).next(()=>t))))}).then(s=>{const t=a.Ui.get(s.targetId);return(t===null||s.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(a.Ui=a.Ui.insert(s.targetId,s),a.qi.set(c,s.targetId)),s})}async function G7(e,c,a){const s=Y(e),t=s.Ui.get(c),r=a?"readwrite":"readwrite-primary";try{a||await s.persistence.runTransaction("Release target",r,n=>s.persistence.referenceDelegate.removeTarget(n,t))}catch(n){if(!c8(n))throw n;B("LocalStore",`Failed to update sequence numbers for target ${c}: ${n}`)}s.Ui=s.Ui.remove(c),s.qi.delete(t.target)}function Ms(e,c,a){const s=Y(e);let t=e1.min(),r=s1();return s.persistence.runTransaction("Execute query","readonly",n=>function(i,o,l){const f=Y(i),h=f.qi.get(l);return h!==void 0?S.resolve(f.Ui.get(h)):f.Cs.getTargetData(o,l)}(s,n,Q2(c)).next(i=>{if(i)return t=i.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(n,i.targetId).next(o=>{r=o})}).next(()=>s.Li.getDocumentsMatchingQuery(n,c,a?t:e1.min(),a?r:s1())).next(i=>(Py(s,wx(c),i),{documents:i,Hi:r})))}function Py(e,c,a){let s=e.Ki.get(c)||e1.min();a.forEach((t,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(c,s)}class Vs{constructor(){this.activeTargetIds=Jn()}er(c){this.activeTargetIds=this.activeTargetIds.add(c)}nr(c){this.activeTargetIds=this.activeTargetIds.delete(c)}tr(){const c={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(c)}}class _y{constructor(){this.Lr=new Vs,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(c){}updateMutationState(c,a,s){}addLocalQueryTarget(c){return this.Lr.er(c),this.Ur[c]||"not-current"}updateQueryState(c,a,s){this.Ur[c]=a}removeLocalQueryTarget(c){this.Lr.nr(c)}isLocalQueryTarget(c){return this.Lr.activeTargetIds.has(c)}clearQueryState(c){delete this.Ur[c]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(c){return this.Lr.activeTargetIds.has(c)}start(){return this.Lr=new Vs,Promise.resolve()}handleUserChange(c,a,s){}setOnlineState(c){}shutdown(){}writeSequenceNumber(c){}notifyBundleLoaded(c){}}/**
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
 */class Dy{qr(c){}shutdown(){}}/**
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
 */class gs{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(c){this.Wr.push(c)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const c of this.Wr)c(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const c of this.Wr)c(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Iy{constructor(c){this.Hr=c.Hr,this.Jr=c.Jr}Yr(c){this.Xr=c}Zr(c){this.eo=c}onMessage(c){this.no=c}close(){this.Jr()}send(c){this.Hr(c)}so(){this.Xr()}io(c){this.eo(c)}ro(c){this.no(c)}}/**
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
 */class Fy extends class{constructor(c){this.databaseInfo=c,this.databaseId=c.databaseId;const a=c.ssl?"https":"http";this.oo=a+"://"+c.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(c,a,s,t,r){const n=this.ho(c,a);B("RestConnection","Sending: ",n,s);const i={};return this.lo(i,t,r),this.fo(c,n,i,s).then(o=>(B("RestConnection","Received: ",o),o),o=>{throw D7("RestConnection",`${c} failed with error: `,o,"url: ",n,"request:",s),o})}_o(c,a,s,t,r,n){return this.ao(c,a,s,t,r)}lo(c,a,s){c["X-Goog-Api-Client"]="gl-js/ fire/"+O4,c["Content-Type"]="text/plain",this.databaseInfo.appId&&(c["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((t,r)=>c[r]=t),s&&s.headers.forEach((t,r)=>c[r]=t)}ho(c,a){const s=Ry[c];return`${this.oo}/v1/${a}:${s}`}}{constructor(c){super(c),this.forceLongPolling=c.forceLongPolling,this.autoDetectLongPolling=c.autoDetectLongPolling,this.useFetchStreams=c.useFetchStreams}fo(c,a,s,t){return new Promise((r,n)=>{const i=new Xb;i.setWithCredentials(!0),i.listenOnce(Zb.COMPLETE,()=>{var l;try{switch(i.getLastErrorCode()){case Q0.NO_ERROR:const f=i.getResponseJson();B("Connection","XHR received:",JSON.stringify(f)),r(f);break;case Q0.TIMEOUT:B("Connection",'RPC "'+c+'" timed out'),n(new G(y.DEADLINE_EXCEEDED,"Request time out"));break;case Q0.HTTP_ERROR:const h=i.getStatus();if(B("Connection",'RPC "'+c+'" failed with status:',h,"response text:",i.getResponseText()),h>0){let u=i.getResponseJson();Array.isArray(u)&&(u=u[0]);const v=(l=u)===null||l===void 0?void 0:l.error;if(v&&v.status&&v.message){const d=function(V){const b=V.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(b)>=0?b:y.UNKNOWN}(v.status);n(new G(d,v.message))}else n(new G(y.UNKNOWN,"Server responded with status "+i.getStatus()))}else n(new G(y.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{B("Connection",'RPC "'+c+'" completed.')}});const o=JSON.stringify(t);i.send(a,"POST",o,s,15)})}wo(c,a,s){const t=[this.oo,"/","google.firestore.v1.Firestore","/",c,"/channel"],r=jb(),n=Kb(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new Yb({})),this.lo(i.initMessageHeaders,a,s),i.encodeInitMessageHeaders=!0;const o=t.join("");B("Connection","Creating WebChannel: "+o,i);const l=r.createWebChannel(o,i);let f=!1,h=!1;const u=new Iy({Hr:d=>{h?B("Connection","Not sending because WebChannel is closed:",d):(f||(B("Connection","Opening WebChannel transport."),l.open(),f=!0),B("Connection","WebChannel sending:",d),l.send(d))},Jr:()=>l.close()}),v=(d,V,b)=>{d.listen(V,p=>{try{b(p)}catch(M){setTimeout(()=>{throw M},0)}})};return v(l,b8.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),v(l,b8.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),u.io())}),v(l,b8.EventType.ERROR,d=>{h||(h=!0,D7("Connection","WebChannel transport errored:",d),u.io(new G(y.UNAVAILABLE,"The operation could not be completed")))}),v(l,b8.EventType.MESSAGE,d=>{var V;if(!h){const b=d.data[0];z1(!!b);const p=b,M=p.error||((V=p[0])===null||V===void 0?void 0:V.error);if(M){B("Connection","WebChannel received error:",M);const D=M.status;let O=function(v1){const H1=A1[v1];if(H1!==void 0)return Zn(H1)}(D),J=M.message;O===void 0&&(O=y.INTERNAL,J="Unknown error status: "+D+" with message "+M.message),h=!0,u.io(new G(O,J)),l.close()}else B("Connection","WebChannel received:",b),u.ro(b)}}),v(n,Qb.STAT_EVENT,d=>{d.stat===cs.PROXY?B("Connection","Detected buffering proxy"):d.stat===cs.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{u.so()},0),u}}function X0(){return typeof document<"u"?document:null}/**
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
 */function s0(e){return new Kx(e,!0)}class li{constructor(c,a,s=1e3,t=1.5,r=6e4){this.Hs=c,this.timerId=a,this.mo=s,this.yo=t,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(c){this.cancel();const a=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),t=Math.max(0,a-s);t>0&&B("ExponentialBackoff",`Backing off for ${t} ms (base delay: ${this.Io} ms, delay with jitter: ${a} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,t,()=>(this.Eo=Date.now(),c())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class fi{constructor(c,a,s,t,r,n,i,o){this.Hs=c,this.vo=s,this.Vo=t,this.connection=r,this.authCredentialsProvider=n,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new li(c,a)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(c){this.Lo(),this.stream.send(c)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(c,a){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,c!==4?this.xo.reset():a&&a.code===y.RESOURCE_EXHAUSTED?(Z2(a.toString()),Z2("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):a&&a.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=c,await this.listener.Zr(a)}qo(){}auth(){this.state=1;const c=this.Ko(this.So),a=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,t])=>{this.So===a&&this.Go(s,t)},s=>{c(()=>{const t=new G(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(t)})})}Go(c,a){const s=this.Ko(this.So);this.stream=this.jo(c,a),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{s(()=>this.Qo(t))}),this.stream.onMessage(t=>{s(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(c){return B("PersistentStream",`close with error: ${c}`),this.stream=null,this.close(4,c)}Ko(c){return a=>{this.Hs.enqueueAndForget(()=>this.So===c?a():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class By extends fi{constructor(c,a,s,t,r,n){super(c,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,s,t,n),this.It=r}jo(c,a){return this.connection.wo("Listen",c,a)}onMessage(c){this.xo.reset();const a=Yx(this.It,c),s=function(t){if(!("targetChange"in t))return e1.min();const r=t.targetChange;return r.targetIds&&r.targetIds.length?e1.min():r.readTime?G2(r.readTime):e1.min()}(c);return this.listener.Wo(a,s)}zo(c){const a={};a.database=$7(this.It),a.addTarget=function(t,r){let n;const i=r.target;return n=F7(i)?{documents:cy(t,i)}:{query:ey(t,i)},n.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?n.resumeToken=ai(t,r.resumeToken):r.snapshotVersion.compareTo(e1.min())>0&&(n.readTime=d5(t,r.snapshotVersion.toTimestamp())),n}(this.It,c);const s=sy(this.It,c);s&&(a.labels=s),this.Bo(a)}Ho(c){const a={};a.database=$7(this.It),a.removeTarget=c,this.Bo(a)}}class Oy extends fi{constructor(c,a,s,t,r,n){super(c,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",a,s,t,n),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(c,a){return this.connection.wo("Write",c,a)}onMessage(c){if(z1(!!c.streamToken),this.lastStreamToken=c.streamToken,this.Jo){this.xo.reset();const a=Jx(c.writeResults,c.commitTime),s=G2(c.commitTime);return this.listener.Zo(s,a)}return z1(!c.writeResults||c.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const c={};c.database=$7(this.It),this.Bo(c)}Xo(c){const a={streamToken:this.lastStreamToken,writes:c.map(s=>Xx(this.It,s))};this.Bo(a)}}/**
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
 */class qy extends class{}{constructor(c,a,s,t){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=s,this.It=t,this.nu=!1}su(){if(this.nu)throw new G(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(c,a,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([t,r])=>this.connection.ao(c,a,s,t,r)).catch(t=>{throw t.name==="FirebaseError"?(t.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new G(y.UNKNOWN,t.toString())})}_o(c,a,s,t){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,n])=>this.connection._o(c,a,s,r,n,t)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new G(y.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Uy{constructor(c,a){this.asyncQueue=c,this.onlineStateHandler=a,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(c){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${c.toString()}`),this.cu("Offline")))}set(c){this.lu(),this.iu=0,c==="Online"&&(this.ou=!1),this.cu(c)}cu(c){c!==this.state&&(this.state=c,this.onlineStateHandler(c))}au(c){const a=`Could not reach Cloud Firestore backend. ${c}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Z2(a),this.ou=!1):B("OnlineStateTracker",a)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class $y{constructor(c,a,s,t,r){this.localStore=c,this.datastore=a,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(n=>{s.enqueueAndForget(async()=>{c4(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=Y(i);o._u.add(4),await t8(o),o.gu.set("Unknown"),o._u.delete(4),await t0(o)}(this))})}),this.gu=new Uy(s,t)}}async function t0(e){if(c4(e))for(const c of e.wu)await c(!0)}async function t8(e){for(const c of e.wu)await c(!1)}function hi(e,c){const a=Y(e);a.du.has(c.targetId)||(a.du.set(c.targetId,c),uc(a)?hc(a):U4(a).ko()&&fc(a,c))}function ui(e,c){const a=Y(e),s=U4(a);a.du.delete(c),s.ko()&&mi(a,c),a.du.size===0&&(s.ko()?s.Fo():c4(a)&&a.gu.set("Unknown"))}function fc(e,c){e.yu.Mt(c.targetId),U4(e).zo(c)}function mi(e,c){e.yu.Mt(c),U4(e).Ho(c)}function hc(e){e.yu=new Gx({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),se:c=>e.du.get(c)||null}),U4(e).start(),e.gu.uu()}function uc(e){return c4(e)&&!U4(e).No()&&e.du.size>0}function c4(e){return Y(e)._u.size===0}function vi(e){e.yu=void 0}async function Gy(e){e.du.forEach((c,a)=>{fc(e,c)})}async function Wy(e,c){vi(e),uc(e)?(e.gu.hu(c),hc(e)):e.gu.set("Unknown")}async function jy(e,c,a){if(e.gu.set("Online"),c instanceof ei&&c.state===2&&c.cause)try{await async function(s,t){const r=t.cause;for(const n of t.targetIds)s.du.has(n)&&(await s.remoteSyncer.rejectListen(n,r),s.du.delete(n),s.yu.removeTarget(n))}(e,c)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),s),await z5(e,s)}else if(c instanceof G8?e.yu.Gt(c):c instanceof ci?e.yu.Yt(c):e.yu.Wt(c),!a.isEqual(e1.min()))try{const s=await oi(e.localStore);a.compareTo(s)>=0&&await function(t,r){const n=t.yu.te(r);return n.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const l=t.du.get(o);l&&t.du.set(o,l.withResumeToken(i.resumeToken,r))}}),n.targetMismatches.forEach(i=>{const o=t.du.get(i);if(!o)return;t.du.set(i,o.withResumeToken(Y1.EMPTY_BYTE_STRING,o.snapshotVersion)),mi(t,i);const l=new $3(o.target,i,1,o.sequenceNumber);fc(t,l)}),t.remoteSyncer.applyRemoteEvent(n)}(e,a)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await z5(e,s)}}async function z5(e,c,a){if(!c8(c))throw c;e._u.add(1),await t8(e),e.gu.set("Offline"),a||(a=()=>oi(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await a(),e._u.delete(1),await t0(e)})}function Ci(e,c){return c().catch(a=>z5(e,a,c))}async function r0(e){const c=Y(e),a=z3(c);let s=c.fu.length>0?c.fu[c.fu.length-1].batchId:-1;for(;Ky(c);)try{const t=await Ty(c.localStore,s);if(t===null){c.fu.length===0&&a.Fo();break}s=t.batchId,Zy(c,t)}catch(t){await z5(c,t)}pi(c)&&di(c)}function Ky(e){return c4(e)&&e.fu.length<10}function Zy(e,c){e.fu.push(c);const a=z3(e);a.ko()&&a.Yo&&a.Xo(c.mutations)}function pi(e){return c4(e)&&!z3(e).No()&&e.fu.length>0}function di(e){z3(e).start()}async function Qy(e){z3(e).eu()}async function Yy(e){const c=z3(e);for(const a of e.fu)c.Xo(a.mutations)}async function Xy(e,c,a){const s=e.fu.shift(),t=nc.from(s,c,a);await Ci(e,()=>e.remoteSyncer.applySuccessfulWrite(t)),await r0(e)}async function Jy(e,c){c&&z3(e).Yo&&await async function(a,s){if(t=s.code,Bx(t)&&t!==y.ABORTED){const r=a.fu.shift();z3(a).Mo(),await Ci(a,()=>a.remoteSyncer.rejectFailedWrite(r.batchId,s)),await r0(a)}var t}(e,c),pi(e)&&di(e)}async function Ls(e,c){const a=Y(e);a.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=c4(a);a._u.add(3),await t8(a),s&&a.gu.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a._u.delete(3),await t0(a)}async function cS(e,c){const a=Y(e);c?(a._u.delete(2),await t0(a)):c||(a._u.add(2),await t8(a),a.gu.set("Unknown"))}function U4(e){return e.pu||(e.pu=function(c,a,s){const t=Y(c);return t.su(),new By(a,t.connection,t.authCredentials,t.appCheckCredentials,t.It,s)}(e.datastore,e.asyncQueue,{Yr:Gy.bind(null,e),Zr:Wy.bind(null,e),Wo:jy.bind(null,e)}),e.wu.push(async c=>{c?(e.pu.Mo(),uc(e)?hc(e):e.gu.set("Unknown")):(await e.pu.stop(),vi(e))})),e.pu}function z3(e){return e.Iu||(e.Iu=function(c,a,s){const t=Y(c);return t.su(),new Oy(a,t.connection,t.authCredentials,t.appCheckCredentials,t.It,s)}(e.datastore,e.asyncQueue,{Yr:Qy.bind(null,e),Zr:Jy.bind(null,e),tu:Yy.bind(null,e),Zo:Xy.bind(null,e)}),e.wu.push(async c=>{c?(e.Iu.Mo(),await r0(e)):(await e.Iu.stop(),e.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class mc{constructor(c,a,s,t,r){this.asyncQueue=c,this.timerId=a,this.targetTimeMs=s,this.op=t,this.removalCallback=r,this.deferred=new U3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(n=>{})}static createAndSchedule(c,a,s,t,r){const n=Date.now()+s,i=new mc(c,a,n,t,r);return i.start(s),i}start(c){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),c)}skipDelay(){return this.handleDelayElapsed()}cancel(c){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(y.CANCELLED,"Operation cancelled"+(c?": "+c:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(c=>this.deferred.resolve(c))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vc(e,c){if(Z2("AsyncQueue",`${c}: ${e}`),c8(e))return new G(y.UNAVAILABLE,`${c}: ${e}`);throw e}/**
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
 */class M4{constructor(c){this.comparator=c?(a,s)=>c(a,s)||W.comparator(a.key,s.key):(a,s)=>W.comparator(a.key,s.key),this.keyedMap=J4(),this.sortedSet=new _1(this.comparator)}static emptySet(c){return new M4(c.comparator)}has(c){return this.keyedMap.get(c)!=null}get(c){return this.keyedMap.get(c)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(c){const a=this.keyedMap.get(c);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(c){this.sortedSet.inorderTraversal((a,s)=>(c(a),!1))}add(c){const a=this.delete(c.key);return a.copy(a.keyedMap.insert(c.key,c),a.sortedSet.insert(c,null))}delete(c){const a=this.get(c);return a?this.copy(this.keyedMap.remove(c),this.sortedSet.remove(a)):this}isEqual(c){if(!(c instanceof M4)||this.size!==c.size)return!1;const a=this.sortedSet.getIterator(),s=c.sortedSet.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const c=[];return this.forEach(a=>{c.push(a.toString())}),c.length===0?"DocumentSet ()":`DocumentSet (
  `+c.join(`  
`)+`
)`}copy(c,a){const s=new M4;return s.comparator=this.comparator,s.keyedMap=c,s.sortedSet=a,s}}/**
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
 */class bs{constructor(){this.Tu=new _1(W.comparator)}track(c){const a=c.doc.key,s=this.Tu.get(a);s?c.type!==0&&s.type===3?this.Tu=this.Tu.insert(a,c):c.type===3&&s.type!==1?this.Tu=this.Tu.insert(a,{type:s.type,doc:c.doc}):c.type===2&&s.type===2?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):c.type===2&&s.type===0?this.Tu=this.Tu.insert(a,{type:0,doc:c.doc}):c.type===1&&s.type===0?this.Tu=this.Tu.remove(a):c.type===1&&s.type===2?this.Tu=this.Tu.insert(a,{type:1,doc:s.doc}):c.type===0&&s.type===1?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):Z():this.Tu=this.Tu.insert(a,c)}Eu(){const c=[];return this.Tu.inorderTraversal((a,s)=>{c.push(s)}),c}}class T4{constructor(c,a,s,t,r,n,i,o,l){this.query=c,this.docs=a,this.oldDocs=s,this.docChanges=t,this.mutatedKeys=r,this.fromCache=n,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(c,a,s,t,r){const n=[];return a.forEach(i=>{n.push({type:0,doc:i})}),new T4(c,a,M4.emptySet(a),n,s,t,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(c){if(!(this.fromCache===c.fromCache&&this.hasCachedResults===c.hasCachedResults&&this.syncStateChanged===c.syncStateChanged&&this.mutatedKeys.isEqual(c.mutatedKeys)&&J5(this.query,c.query)&&this.docs.isEqual(c.docs)&&this.oldDocs.isEqual(c.oldDocs)))return!1;const a=this.docChanges,s=c.docChanges;if(a.length!==s.length)return!1;for(let t=0;t<a.length;t++)if(a[t].type!==s[t].type||!a[t].doc.isEqual(s[t].doc))return!1;return!0}}/**
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
 */class eS{constructor(){this.Au=void 0,this.listeners=[]}}class aS{constructor(){this.queries=new q4(c=>In(c),J5),this.onlineState="Unknown",this.Ru=new Set}}async function sS(e,c){const a=Y(e),s=c.query;let t=!1,r=a.queries.get(s);if(r||(t=!0,r=new eS),t)try{r.Au=await a.onListen(s)}catch(n){const i=vc(n,`Initialization of query '${O7(c.query)}' failed`);return void c.onError(i)}a.queries.set(s,r),r.listeners.push(c),c.bu(a.onlineState),r.Au&&c.Pu(r.Au)&&Cc(a)}async function tS(e,c){const a=Y(e),s=c.query;let t=!1;const r=a.queries.get(s);if(r){const n=r.listeners.indexOf(c);n>=0&&(r.listeners.splice(n,1),t=r.listeners.length===0)}if(t)return a.queries.delete(s),a.onUnlisten(s)}function rS(e,c){const a=Y(e);let s=!1;for(const t of c){const r=t.query,n=a.queries.get(r);if(n){for(const i of n.listeners)i.Pu(t)&&(s=!0);n.Au=t}}s&&Cc(a)}function nS(e,c,a){const s=Y(e),t=s.queries.get(c);if(t)for(const r of t.listeners)r.onError(a);s.queries.delete(c)}function Cc(e){e.Ru.forEach(c=>{c.next()})}class iS{constructor(c,a,s){this.query=c,this.vu=a,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(c){if(!this.options.includeMetadataChanges){const s=[];for(const t of c.docChanges)t.type!==3&&s.push(t);c=new T4(c.query,c.docs,c.oldDocs,s,c.mutatedKeys,c.fromCache,c.syncStateChanged,!0,c.hasCachedResults)}let a=!1;return this.Vu?this.Du(c)&&(this.vu.next(c),a=!0):this.Cu(c,this.onlineState)&&(this.xu(c),a=!0),this.Su=c,a}onError(c){this.vu.error(c)}bu(c){this.onlineState=c;let a=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,c)&&(this.xu(this.Su),a=!0),a}Cu(c,a){if(!c.fromCache)return!0;const s=a!=="Offline";return(!this.options.Nu||!s)&&(!c.docs.isEmpty()||c.hasCachedResults||a==="Offline")}Du(c){if(c.docChanges.length>0)return!0;const a=this.Su&&this.Su.hasPendingWrites!==c.hasPendingWrites;return!(!c.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}xu(c){c=T4.fromInitialDocuments(c.query,c.docs,c.mutatedKeys,c.fromCache,c.hasCachedResults),this.Vu=!0,this.vu.next(c)}}/**
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
 */class zi{constructor(c){this.key=c}}class Hi{constructor(c){this.key=c}}class oS{constructor(c,a){this.query=c,this.Uu=a,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=s1(),this.mutatedKeys=s1(),this.Gu=Fn(c),this.Qu=new M4(this.Gu)}get ju(){return this.Uu}Wu(c,a){const s=a?a.zu:new bs,t=a?a.Qu:this.Qu;let r=a?a.mutatedKeys:this.mutatedKeys,n=t,i=!1;const o=this.query.limitType==="F"&&t.size===this.query.limit?t.last():null,l=this.query.limitType==="L"&&t.size===this.query.limit?t.first():null;if(c.inorderTraversal((f,h)=>{const u=t.get(f),v=tc(this.query,h)?h:null,d=!!u&&this.mutatedKeys.has(u.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let b=!1;u&&v?u.data.isEqual(v.data)?d!==V&&(s.track({type:3,doc:v}),b=!0):this.Hu(u,v)||(s.track({type:2,doc:v}),b=!0,(o&&this.Gu(v,o)>0||l&&this.Gu(v,l)<0)&&(i=!0)):!u&&v?(s.track({type:0,doc:v}),b=!0):u&&!v&&(s.track({type:1,doc:u}),b=!0,(o||l)&&(i=!0)),b&&(v?(n=n.add(v),r=V?r.add(f):r.delete(f)):(n=n.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;n.size>this.query.limit;){const f=this.query.limitType==="F"?n.last():n.first();n=n.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Qu:n,zu:s,$i:i,mutatedKeys:r}}Hu(c,a){return c.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(c,a,s){const t=this.Qu;this.Qu=c.Qu,this.mutatedKeys=c.mutatedKeys;const r=c.zu.Eu();r.sort((l,f)=>function(h,u){const v=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return v(h)-v(u)}(l.type,f.type)||this.Gu(l.doc,f.doc)),this.Ju(s);const n=a?this.Yu():[],i=this.Ku.size===0&&this.current?1:0,o=i!==this.qu;return this.qu=i,r.length!==0||o?{snapshot:new T4(this.query,c.Qu,t,r,c.mutatedKeys,i===0,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:n}:{Xu:n}}bu(c){return this.current&&c==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new bs,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(c){return!this.Uu.has(c)&&!!this.Qu.has(c)&&!this.Qu.get(c).hasLocalMutations}Ju(c){c&&(c.addedDocuments.forEach(a=>this.Uu=this.Uu.add(a)),c.modifiedDocuments.forEach(a=>{}),c.removedDocuments.forEach(a=>this.Uu=this.Uu.delete(a)),this.current=c.current)}Yu(){if(!this.current)return[];const c=this.Ku;this.Ku=s1(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const a=[];return c.forEach(s=>{this.Ku.has(s)||a.push(new Hi(s))}),this.Ku.forEach(s=>{c.has(s)||a.push(new zi(s))}),a}tc(c){this.Uu=c.Hi,this.Ku=s1();const a=this.Wu(c.documents);return this.applyChanges(a,!0)}ec(){return T4.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class lS{constructor(c,a,s){this.query=c,this.targetId=a,this.view=s}}class fS{constructor(c){this.key=c,this.nc=!1}}class hS{constructor(c,a,s,t,r,n){this.localStore=c,this.remoteStore=a,this.eventManager=s,this.sharedClientState=t,this.currentUser=r,this.maxConcurrentLimboResolutions=n,this.sc={},this.ic=new q4(i=>In(i),J5),this.rc=new Map,this.oc=new Set,this.uc=new _1(W.comparator),this.cc=new Map,this.ac=new ic,this.hc={},this.lc=new Map,this.fc=A4.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function uS(e,c){const a=gS(e);let s,t;const r=a.ic.get(c);if(r)s=r.targetId,a.sharedClientState.addLocalQueryTarget(s),t=r.view.ec();else{const n=await Ey(a.localStore,Q2(c));a.isPrimaryClient&&hi(a.remoteStore,n);const i=a.sharedClientState.addLocalQueryTarget(n.targetId);s=n.targetId,t=await mS(a,c,s,i==="current",n.resumeToken)}return t}async function mS(e,c,a,s,t){e._c=(h,u,v)=>async function(d,V,b,p){let M=V.view.Wu(b);M.$i&&(M=await Ms(d.localStore,V.query,!1).then(({documents:J})=>V.view.Wu(J,M)));const D=p&&p.targetChanges.get(V.targetId),O=V.view.applyChanges(M,d.isPrimaryClient,D);return ys(d,V.targetId,O.Xu),O.snapshot}(e,h,u,v);const r=await Ms(e.localStore,c,!0),n=new oS(c,r.Hi),i=n.Wu(r.documents),o=s8.createSynthesizedTargetChangeForCurrentChange(a,s&&e.onlineState!=="Offline",t),l=n.applyChanges(i,e.isPrimaryClient,o);ys(e,a,l.Xu);const f=new lS(c,a,n);return e.ic.set(c,f),e.rc.has(a)?e.rc.get(a).push(c):e.rc.set(a,[c]),l.snapshot}async function vS(e,c){const a=Y(e),s=a.ic.get(c),t=a.rc.get(s.targetId);if(t.length>1)return a.rc.set(s.targetId,t.filter(r=>!J5(r,c))),void a.ic.delete(c);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await G7(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),ui(a.remoteStore,s.targetId),W7(a,s.targetId)}).catch(J6)):(W7(a,s.targetId),await G7(a.localStore,s.targetId,!0))}async function CS(e,c,a){const s=LS(e);try{const t=await function(r,n){const i=Y(r),o=E1.now(),l=n.reduce((u,v)=>u.add(v.key),s1());let f,h;return i.persistence.runTransaction("Locally write mutations","readwrite",u=>{let v=Y2(),d=s1();return i.Gi.getEntries(u,l).next(V=>{v=V,v.forEach((b,p)=>{p.isValidDocument()||(d=d.add(b))})}).next(()=>i.localDocuments.getOverlayedDocuments(u,v)).next(V=>{f=V;const b=[];for(const p of n){const M=Rx(p,f.get(p.key).overlayedDocument);M!=null&&b.push(new b3(p.key,M,Pn(M.value.mapValue),F2.exists(!0)))}return i.mutationQueue.addMutationBatch(u,o,b,n)}).next(V=>{h=V;const b=V.applyToLocalDocumentSet(f,d);return i.documentOverlayCache.saveOverlays(u,V.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Yn(f)}))}(s.localStore,c);s.sharedClientState.addPendingMutation(t.batchId),function(r,n,i){let o=r.hc[r.currentUser.toKey()];o||(o=new _1(o1)),o=o.insert(n,i),r.hc[r.currentUser.toKey()]=o}(s,t.batchId,a),await r8(s,t.changes),await r0(s.remoteStore)}catch(t){const r=vc(t,"Failed to persist write");a.reject(r)}}async function Mi(e,c){const a=Y(e);try{const s=await ky(a.localStore,c);c.targetChanges.forEach((t,r)=>{const n=a.cc.get(r);n&&(z1(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.nc=!0:t.modifiedDocuments.size>0?z1(n.nc):t.removedDocuments.size>0&&(z1(n.nc),n.nc=!1))}),await r8(a,s,c)}catch(s){await J6(s)}}function xs(e,c,a){const s=Y(e);if(s.isPrimaryClient&&a===0||!s.isPrimaryClient&&a===1){const t=[];s.ic.forEach((r,n)=>{const i=n.view.bu(c);i.snapshot&&t.push(i.snapshot)}),function(r,n){const i=Y(r);i.onlineState=n;let o=!1;i.queries.forEach((l,f)=>{for(const h of f.listeners)h.bu(n)&&(o=!0)}),o&&Cc(i)}(s.eventManager,c),t.length&&s.sc.Wo(t),s.onlineState=c,s.isPrimaryClient&&s.sharedClientState.setOnlineState(c)}}async function pS(e,c,a){const s=Y(e);s.sharedClientState.updateQueryState(c,"rejected",a);const t=s.cc.get(c),r=t&&t.key;if(r){let n=new _1(W.comparator);n=n.insert(r,O1.newNoDocument(r,e1.min()));const i=s1().add(r),o=new a0(e1.min(),new Map,new P1(o1),n,i);await Mi(s,o),s.uc=s.uc.remove(r),s.cc.delete(c),pc(s)}else await G7(s.localStore,c,!1).then(()=>W7(s,c,a)).catch(J6)}async function dS(e,c){const a=Y(e),s=c.batch.batchId;try{const t=await wy(a.localStore,c);gi(a,s,null),Vi(a,s),a.sharedClientState.updateMutationState(s,"acknowledged"),await r8(a,t)}catch(t){await J6(t)}}async function zS(e,c,a){const s=Y(e);try{const t=await function(r,n){const i=Y(r);return i.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let l;return i.mutationQueue.lookupMutationBatch(o,n).next(f=>(z1(f!==null),l=f.keys(),i.mutationQueue.removeMutationBatch(o,f))).next(()=>i.mutationQueue.performConsistencyCheck(o)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(o,l,n)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,l)).next(()=>i.localDocuments.getDocuments(o,l))})}(s.localStore,c);gi(s,c,a),Vi(s,c),s.sharedClientState.updateMutationState(c,"rejected",a),await r8(s,t)}catch(t){await J6(t)}}function Vi(e,c){(e.lc.get(c)||[]).forEach(a=>{a.resolve()}),e.lc.delete(c)}function gi(e,c,a){const s=Y(e);let t=s.hc[s.currentUser.toKey()];if(t){const r=t.get(c);r&&(a?r.reject(a):r.resolve(),t=t.remove(c)),s.hc[s.currentUser.toKey()]=t}}function W7(e,c,a=null){e.sharedClientState.removeLocalQueryTarget(c);for(const s of e.rc.get(c))e.ic.delete(s),a&&e.sc.wc(s,a);e.rc.delete(c),e.isPrimaryClient&&e.ac.ls(c).forEach(s=>{e.ac.containsKey(s)||Li(e,s)})}function Li(e,c){e.oc.delete(c.path.canonicalString());const a=e.uc.get(c);a!==null&&(ui(e.remoteStore,a),e.uc=e.uc.remove(c),e.cc.delete(a),pc(e))}function ys(e,c,a){for(const s of a)s instanceof zi?(e.ac.addReference(s.key,c),HS(e,s)):s instanceof Hi?(B("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,c),e.ac.containsKey(s.key)||Li(e,s.key)):Z()}function HS(e,c){const a=c.key,s=a.path.canonicalString();e.uc.get(a)||e.oc.has(s)||(B("SyncEngine","New document in limbo: "+a),e.oc.add(s),pc(e))}function pc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const c=e.oc.values().next().value;e.oc.delete(c);const a=new W(L1.fromString(c)),s=e.fc.next();e.cc.set(s,new fS(a)),e.uc=e.uc.insert(a,s),hi(e.remoteStore,new $3(Q2(sc(a.path)),s,2,J9.at))}}async function r8(e,c,a){const s=Y(e),t=[],r=[],n=[];s.ic.isEmpty()||(s.ic.forEach((i,o)=>{n.push(s._c(o,c,a).then(l=>{if((l||a)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){t.push(l);const f=lc.Ci(o.targetId,l);r.push(f)}}))}),await Promise.all(n),s.sc.Wo(t),await async function(i,o){const l=Y(i);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>S.forEach(o,h=>S.forEach(h.Si,u=>l.persistence.referenceDelegate.addReference(f,h.targetId,u)).next(()=>S.forEach(h.Di,u=>l.persistence.referenceDelegate.removeReference(f,h.targetId,u)))))}catch(f){if(!c8(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of o){const h=f.targetId;if(!f.fromCache){const u=l.Ui.get(h),v=u.snapshotVersion,d=u.withLastLimboFreeSnapshotVersion(v);l.Ui=l.Ui.insert(h,d)}}}(s.localStore,r))}async function MS(e,c){const a=Y(e);if(!a.currentUser.isEqual(c)){B("SyncEngine","User change. New user:",c.toKey());const s=await ii(a.localStore,c);a.currentUser=c,function(t,r){t.lc.forEach(n=>{n.forEach(i=>{i.reject(new G(y.CANCELLED,r))})}),t.lc.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(c,s.removedBatchIds,s.addedBatchIds),await r8(a,s.ji)}}function VS(e,c){const a=Y(e),s=a.cc.get(c);if(s&&s.nc)return s1().add(s.key);{let t=s1();const r=a.rc.get(c);if(!r)return t;for(const n of r){const i=a.ic.get(n);t=t.unionWith(i.view.ju)}return t}}function gS(e){const c=Y(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=Mi.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=VS.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=pS.bind(null,c),c.sc.Wo=rS.bind(null,c.eventManager),c.sc.wc=nS.bind(null,c.eventManager),c}function LS(e){const c=Y(e);return c.remoteStore.remoteSyncer.applySuccessfulWrite=dS.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=zS.bind(null,c),c}class bS{constructor(){this.synchronizeTabs=!1}async initialize(c){this.It=s0(c.databaseInfo.databaseId),this.sharedClientState=this.gc(c),this.persistence=this.yc(c),await this.persistence.start(),this.localStore=this.Ic(c),this.gcScheduler=this.Tc(c,this.localStore),this.indexBackfillerScheduler=this.Ec(c,this.localStore)}Tc(c,a){return null}Ec(c,a){return null}Ic(c){return Ny(this.persistence,new yy,c.initialUser,this.It)}yc(c){return new by(oc.Bs,this.It)}gc(c){return new _y}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xS{async initialize(c,a){this.localStore||(this.localStore=c.localStore,this.sharedClientState=c.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!c.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xs(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MS.bind(null,this.syncEngine),await cS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(c){return new aS}createDatastore(c){const a=s0(c.databaseInfo.databaseId),s=(t=c.databaseInfo,new Fy(t));var t;return function(r,n,i,o){return new qy(r,n,i,o)}(c.authCredentials,c.appCheckCredentials,s,a)}createRemoteStore(c){return a=this.localStore,s=this.datastore,t=c.asyncQueue,r=i=>xs(this.syncEngine,i,0),n=gs.C()?new gs:new Dy,new $y(a,s,t,r,n);var a,s,t,r,n}createSyncEngine(c,a){return function(s,t,r,n,i,o,l){const f=new hS(s,t,r,n,i,o);return l&&(f.dc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,c.initialUser,c.maxConcurrentLimboResolutions,a)}terminate(){return async function(c){const a=Y(c);B("RemoteStore","RemoteStore shutting down."),a._u.add(5),await t8(a),a.mu.shutdown(),a.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function bi(e,c,a){if(!a)throw new G(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function yS(e,c,a,s){if(c===!0&&s===!0)throw new G(y.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function Ss(e){if(!W.isDocumentKey(e))throw new G(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ns(e){if(W.isDocumentKey(e))throw new G(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function dc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(a){return a.constructor?a.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":Z()}function G3(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new G(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=dc(e);throw new G(y.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
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
 */const ws=new Map;class ks{constructor(c){var a;if(c.host===void 0){if(c.ssl!==void 0)throw new G(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new G(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.useFetchStreams=!!c.useFetchStreams,yS("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling)}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}/**
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
 */class n0{constructor(c,a,s,t){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=s,this._app=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ks({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new G(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ks(c),c.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Jb;switch(a.type){case"gapi":const s=a.client;return new sx(s,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new G(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(c){const a=ws.get(c);a&&(B("ComponentProvider","Removing Datastore"),ws.delete(c),a.terminate())}(this),Promise.resolve()}}function SS(e,c,a,s={}){var t;const r=(e=G3(e,n0))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==c&&D7("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${c}:${a}`,ssl:!1})),s.mockUserToken){let n,i;if(typeof s.mockUserToken=="string")n=s.mockUserToken,i=G1.MOCK_USER;else{n=Fg(s.mockUserToken,(t=e._app)===null||t===void 0?void 0:t.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new G(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new G1(o)}e._authCredentials=new cx(new wn(n,i))}}/**
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
 */class f2{constructor(c,a,s){this.converter=a,this._key=s,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new v3(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new f2(this.firestore,c,this._key)}}class n8{constructor(c,a,s){this.converter=a,this._query=s,this.type="query",this.firestore=c}withConverter(c){return new n8(this.firestore,c,this._query)}}class v3 extends n8{constructor(c,a,s){super(c,a,sc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new f2(this.firestore,null,new W(c))}withConverter(c){return new v3(this.firestore,c,this._path)}}function NS(e,c,...a){if(e=j2(e),bi("collection","path",c),e instanceof n0){const s=L1.fromString(c,...a);return Ns(s),new v3(e,null,s)}{if(!(e instanceof f2||e instanceof v3))throw new G(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L1.fromString(c,...a));return Ns(s),new v3(e.firestore,null,s)}}function j7(e,c,...a){if(e=j2(e),arguments.length===1&&(c=kn.R()),bi("doc","path",c),e instanceof n0){const s=L1.fromString(c,...a);return Ss(s),new f2(e,null,new W(s))}{if(!(e instanceof f2||e instanceof v3))throw new G(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L1.fromString(c,...a));return Ss(s),new f2(e.firestore,e instanceof v3?e.converter:null,new W(s))}}/**
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
 */class wS{constructor(c){this.observer=c,this.muted=!1}next(c){this.observer.next&&this.Rc(this.observer.next,c)}error(c){this.observer.error?this.Rc(this.observer.error,c):Z2("Uncaught Error in snapshot listener:",c.toString())}bc(){this.muted=!0}Rc(c,a){this.muted||setTimeout(()=>{this.muted||c(a)},0)}}/**
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
 */class kS{constructor(c,a,s,t){this.authCredentials=c,this.appCheckCredentials=a,this.asyncQueue=s,this.databaseInfo=t,this.user=G1.UNAUTHENTICATED,this.clientId=kn.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(c){this.authCredentialListener=c}setAppCheckTokenChangeListener(c){this.appCheckCredentialListener=c}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const c=new U3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),c.resolve()}catch(a){const s=vc(a,"Failed to shutdown persistence");c.reject(s)}}),c.promise}}async function AS(e,c){e.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const a=await e.getConfiguration();await c.initialize(a);let s=a.initialUser;e.setCredentialChangeListener(async t=>{s.isEqual(t)||(await ii(c.localStore,t),s=t)}),c.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=c}async function TS(e,c){e.asyncQueue.verifyOperationInProgress();const a=await ES(e);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await c.initialize(a,s),e.setCredentialChangeListener(t=>Ls(c.remoteStore,t)),e.setAppCheckTokenChangeListener((t,r)=>Ls(c.remoteStore,r)),e.onlineComponents=c}async function ES(e){return e.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await AS(e,new bS)),e.offlineComponents}async function xi(e){return e.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await TS(e,new xS)),e.onlineComponents}function PS(e){return xi(e).then(c=>c.syncEngine)}async function As(e){const c=await xi(e),a=c.eventManager;return a.onListen=uS.bind(null,c.syncEngine),a.onUnlisten=vS.bind(null,c.syncEngine),a}class _S{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new li(this,"async_queue_retry"),this.Wc=()=>{const a=X0();a&&B("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.Po()};const c=X0();c&&typeof c.addEventListener=="function"&&c.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(c){this.enqueue(c)}enqueueAndForgetEvenWhileRestricted(c){this.zc(),this.Hc(c)}enterRestrictedMode(c){if(!this.Uc){this.Uc=!0,this.Qc=c||!1;const a=X0();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Wc)}}enqueue(c){if(this.zc(),this.Uc)return new Promise(()=>{});const a=new U3;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(c().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(c){this.enqueueAndForget(()=>(this.Lc.push(c),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(c){if(!c8(c))throw c;B("AsyncQueue","Operation failed with retryable error: "+c)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(c){const a=this.Bc.then(()=>(this.Gc=!0,c().catch(s=>{this.Kc=s,this.Gc=!1;const t=function(r){let n=r.message||"";return r.stack&&(n=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),n}(s);throw Z2("INTERNAL UNHANDLED ERROR: ",t),s}).then(s=>(this.Gc=!1,s))));return this.Bc=a,a}enqueueAfterDelay(c,a,s){this.zc(),this.jc.indexOf(c)>-1&&(a=0);const t=mc.createAndSchedule(this,c,a,s,r=>this.Yc(r));return this.qc.push(t),t}zc(){this.Kc&&Z()}verifyOperationInProgress(){}async Xc(){let c;do c=this.Bc,await c;while(c!==this.Bc)}Zc(c){for(const a of this.qc)if(a.timerId===c)return!0;return!1}ta(c){return this.Xc().then(()=>{this.qc.sort((a,s)=>a.targetTimeMs-s.targetTimeMs);for(const a of this.qc)if(a.skipDelay(),c!=="all"&&a.timerId===c)break;return this.Xc()})}ea(c){this.jc.push(c)}Yc(c){const a=this.qc.indexOf(c);this.qc.splice(a,1)}}function Ts(e){return function(c,a){if(typeof c!="object"||c===null)return!1;const s=c;for(const t of a)if(t in s&&typeof s[t]=="function")return!0;return!1}(e,["next","error","complete"])}class P6 extends n0{constructor(c,a,s,t){super(c,a,s,t),this.type="firestore",this._queue=new _S,this._persistenceKey=(t==null?void 0:t.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Si(this),this._firestoreClient.terminate()}}function DS(e,c){const a=typeof e=="object"?e:OL(),s=typeof e=="string"?e:c||"(default)",t=RL(a,"firestore").getImmediate({identifier:s});if(!t._initialized){const r=Dg("firestore");r&&SS(t,...r)}return t}function yi(e){return e._firestoreClient||Si(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Si(e){var c;const a=e._freezeSettings(),s=function(t,r,n,i){return new vx(t,r,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,((c=e._app)===null||c===void 0?void 0:c.options.appId)||"",e._persistenceKey,a);e._firestoreClient=new kS(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 *//**
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
 */class E4{constructor(c){this._byteString=c}static fromBase64String(c){try{return new E4(Y1.fromBase64String(c))}catch(a){throw new G(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new E4(Y1.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
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
 */class i0{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new G(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j1(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}/**
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
 */class zc{constructor(c){this._methodName=c}}/**
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
 */class Hc{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new G(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new G(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return o1(this._lat,c._lat)||o1(this._long,c._long)}}/**
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
 */const RS=/^__.*__$/;class IS{constructor(c,a,s){this.data=c,this.fieldMask=a,this.fieldTransforms=s}toMutation(c,a){return this.fieldMask!==null?new b3(c,this.data,this.fieldMask,a,this.fieldTransforms):new a8(c,this.data,a,this.fieldTransforms)}}class Ni{constructor(c,a,s){this.data=c,this.fieldMask=a,this.fieldTransforms=s}toMutation(c,a){return new b3(c,this.data,this.fieldMask,a,this.fieldTransforms)}}function wi(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Mc{constructor(c,a,s,t,r,n){this.settings=c,this.databaseId=a,this.It=s,this.ignoreUndefinedProperties=t,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=n||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(c){return new Mc(Object.assign(Object.assign({},this.settings),c),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(c){var a;const s=(a=this.path)===null||a===void 0?void 0:a.child(c),t=this.ia({path:s,oa:!1});return t.ua(c),t}ca(c){var a;const s=(a=this.path)===null||a===void 0?void 0:a.child(c),t=this.ia({path:s,oa:!1});return t.na(),t}aa(c){return this.ia({path:void 0,oa:!0})}ha(c){return H5(c,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(c){return this.fieldMask.find(a=>c.isPrefixOf(a))!==void 0||this.fieldTransforms.find(a=>c.isPrefixOf(a.field))!==void 0}na(){if(this.path)for(let c=0;c<this.path.length;c++)this.ua(this.path.get(c))}ua(c){if(c.length===0)throw this.ha("Document fields must not be empty");if(wi(this.sa)&&RS.test(c))throw this.ha('Document fields cannot begin and end with "__"')}}class FS{constructor(c,a,s){this.databaseId=c,this.ignoreUndefinedProperties=a,this.It=s||s0(c)}da(c,a,s,t=!1){return new Mc({sa:c,methodName:a,fa:s,path:j1.emptyPath(),oa:!1,la:t},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ki(e){const c=e._freezeSettings(),a=s0(e._databaseId);return new FS(e._databaseId,!!c.ignoreUndefinedProperties,a)}function BS(e,c,a,s,t,r={}){const n=e.da(r.merge||r.mergeFields?2:0,c,a,t);Vc("Data must be an object, but it was:",n,s);const i=Ai(s,n);let o,l;if(r.merge)o=new d2(n.fieldMask),l=n.fieldTransforms;else if(r.mergeFields){const f=[];for(const h of r.mergeFields){const u=K7(c,h,a);if(!n.contains(u))throw new G(y.INVALID_ARGUMENT,`Field '${u}' is specified in your field mask but missing from your input data.`);Ei(f,u)||f.push(u)}o=new d2(f),l=n.fieldTransforms.filter(h=>o.covers(h.field))}else o=null,l=n.fieldTransforms;return new IS(new r2(i),o,l)}class o0 extends zc{_toFieldTransform(c){if(c.sa!==2)throw c.sa===1?c.ha(`${this._methodName}() can only appear at the top level of your update data`):c.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return c.fieldMask.push(c.path),null}isEqual(c){return c instanceof o0}}function OS(e,c,a,s){const t=e.da(1,c,a);Vc("Data must be an object, but it was:",t,s);const r=[],n=r2.empty();J3(s,(o,l)=>{const f=gc(c,o,a);l=j2(l);const h=t.ca(f);if(l instanceof o0)r.push(f);else{const u=l0(l,h);u!=null&&(r.push(f),n.set(f,u))}});const i=new d2(r);return new Ni(n,i,t.fieldTransforms)}function qS(e,c,a,s,t,r){const n=e.da(1,c,a),i=[K7(c,s,a)],o=[t];if(r.length%2!=0)throw new G(y.INVALID_ARGUMENT,`Function ${c}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<r.length;u+=2)i.push(K7(c,r[u])),o.push(r[u+1]);const l=[],f=r2.empty();for(let u=i.length-1;u>=0;--u)if(!Ei(l,i[u])){const v=i[u];let d=o[u];d=j2(d);const V=n.ca(v);if(d instanceof o0)l.push(v);else{const b=l0(d,V);b!=null&&(l.push(v),f.set(v,b))}}const h=new d2(l);return new Ni(f,h,n.fieldTransforms)}function l0(e,c){if(Ti(e=j2(e)))return Vc("Unsupported field value:",c,e),Ai(e,c);if(e instanceof zc)return function(a,s){if(!wi(s.sa))throw s.ha(`${a._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${a._methodName}() is not currently supported inside arrays`);const t=a._toFieldTransform(s);t&&s.fieldTransforms.push(t)}(e,c),null;if(e===void 0&&c.ignoreUndefinedProperties)return null;if(c.path&&c.fieldMask.push(c.path),e instanceof Array){if(c.settings.oa&&c.sa!==4)throw c.ha("Nested arrays are not supported");return function(a,s){const t=[];let r=0;for(const n of a){let i=l0(n,s.aa(r));i==null&&(i={nullValue:"NULL_VALUE"}),t.push(i),r++}return{arrayValue:{values:t}}}(e,c)}return function(a,s){if((a=j2(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return Ax(s.It,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const t=E1.fromDate(a);return{timestampValue:d5(s.It,t)}}if(a instanceof E1){const t=new E1(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:d5(s.It,t)}}if(a instanceof Hc)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof E4)return{bytesValue:ai(s.It,a._byteString)};if(a instanceof f2){const t=s.databaseId,r=a.firestore._databaseId;if(!r.isEqual(t))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:rc(a.firestore._databaseId||s.databaseId,a._key.path)}}throw s.ha(`Unsupported field value: ${dc(a)}`)}(e,c)}function Ai(e,c){const a={};return An(e)?c.path&&c.path.length>0&&c.fieldMask.push(c.path):J3(e,(s,t)=>{const r=l0(t,c.ra(s));r!=null&&(a[s]=r)}),{mapValue:{fields:a}}}function Ti(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof E1||e instanceof Hc||e instanceof E4||e instanceof f2||e instanceof zc)}function Vc(e,c,a){if(!Ti(a)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(a)){const s=dc(a);throw s==="an object"?c.ha(e+" a custom object"):c.ha(e+" "+s)}}function K7(e,c,a){if((c=j2(c))instanceof i0)return c._internalPath;if(typeof c=="string")return gc(e,c);throw H5("Field path arguments must be of type string or ",e,!1,void 0,a)}const US=new RegExp("[~\\*/\\[\\]]");function gc(e,c,a){if(c.search(US)>=0)throw H5(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new i0(...c.split("."))._internalPath}catch{throw H5(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function H5(e,c,a,s,t){const r=s&&!s.isEmpty(),n=t!==void 0;let i=`Function ${c}() called with invalid data`;a&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||n)&&(o+=" (found",r&&(o+=` in field ${s}`),n&&(o+=` in document ${t}`),o+=")"),new G(y.INVALID_ARGUMENT,i+e+o)}function Ei(e,c){return e.some(a=>a.isEqual(c))}/**
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
 */class Pi{constructor(c,a,s,t,r){this._firestore=c,this._userDataWriter=a,this._key=s,this._document=t,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new f2(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new $S(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(Lc("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class $S extends Pi{data(){return super.data()}}function Lc(e,c){return typeof c=="string"?gc(e,c):c instanceof i0?c._internalPath:c._delegate._internalPath}/**
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
 */function GS(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new G(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WS{}function jS(e,...c){for(const a of c)e=a._apply(e);return e}class KS extends WS{constructor(c,a){super(),this.ma=c,this.pa=a,this.type="orderBy"}_apply(c){const a=function(s,t,r){if(s.startAt!==null)throw new G(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const n=new H4(t,r);return function(i,o){if(Dn(i)===null){const l=Rn(i);l!==null&&QS(i,l,o.field)}}(s,n),n}(c._query,this.ma,this.pa);return new n8(c.firestore,c.converter,function(s,t){const r=s.explicitOrderBy.concat([t]);return new e8(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(c._query,a))}}function ZS(e,c="asc"){const a=c,s=Lc("orderBy",e);return new KS(s,a)}function QS(e,c,a){if(!a.isEqual(c))throw new G(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${c.toString()}' and so you must also use '${c.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${a.toString()}' instead.`)}/**
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
 */class YS{convertValue(c,a="none"){switch(Z3(c)){case 0:return null;case 1:return c.booleanValue;case 2:return T1(c.integerValue||c.doubleValue);case 3:return this.convertTimestamp(c.timestampValue);case 4:return this.convertServerTimestamp(c,a);case 5:return c.stringValue;case 6:return this.convertBytes(w4(c.bytesValue));case 7:return this.convertReference(c.referenceValue);case 8:return this.convertGeoPoint(c.geoPointValue);case 9:return this.convertArray(c.arrayValue,a);case 10:return this.convertObject(c.mapValue,a);default:throw Z()}}convertObject(c,a){const s={};return J3(c.fields,(t,r)=>{s[t]=this.convertValue(r,a)}),s}convertGeoPoint(c){return new Hc(T1(c.latitude),T1(c.longitude))}convertArray(c,a){return(c.values||[]).map(s=>this.convertValue(s,a))}convertServerTimestamp(c,a){switch(a){case"previous":const s=En(c);return s==null?null:this.convertValue(s,a);case"estimate":return this.convertTimestamp(N6(c));default:return null}}convertTimestamp(c){const a=d3(c);return new E1(a.seconds,a.nanos)}convertDocumentKey(c,a){const s=L1.fromString(c);z1(ni(s));const t=new w6(s.get(1),s.get(3)),r=new W(s.popFirst(5));return t.isEqual(a)||Z2(`Document ${r} contains a document reference within a different database (${t.projectId}/${t.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),r}}/**
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
 */function XS(e,c,a){let s;return s=e?a&&(a.merge||a.mergeFields)?e.toFirestore(c,a):e.toFirestore(c):c,s}/**
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
 */class c6{constructor(c,a){this.hasPendingWrites=c,this.fromCache=a}isEqual(c){return this.hasPendingWrites===c.hasPendingWrites&&this.fromCache===c.fromCache}}class _i extends Pi{constructor(c,a,s,t,r,n){super(c,a,s,t,n),this._firestore=c,this._firestoreImpl=c,this.metadata=r}exists(){return super.exists()}data(c={}){if(this._document){if(this._converter){const a=new W8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,c)}return this._userDataWriter.convertValue(this._document.data.value,c.serverTimestamps)}}get(c,a={}){if(this._document){const s=this._document.data.field(Lc("DocumentSnapshot.get",c));if(s!==null)return this._userDataWriter.convertValue(s,a.serverTimestamps)}}}class W8 extends _i{data(c={}){return super.data(c)}}class JS{constructor(c,a,s,t){this._firestore=c,this._userDataWriter=a,this._snapshot=t,this.metadata=new c6(t.hasPendingWrites,t.fromCache),this.query=s}get docs(){const c=[];return this.forEach(a=>c.push(a)),c}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(c,a){this._snapshot.docs.forEach(s=>{c.call(a,new W8(this._firestore,this._userDataWriter,s.key,s,new c6(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(c={}){const a=!!c.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new G(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(s,t){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(n=>{const i=new W8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new c6(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(n=>t||n.type!==3).map(n=>{const i=new W8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new c6(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);let o=-1,l=-1;return n.type!==0&&(o=r.indexOf(n.doc.key),r=r.delete(n.doc.key)),n.type!==1&&(r=r.add(n.doc),l=r.indexOf(n.doc.key)),{type:cN(n.type),doc:i,oldIndex:o,newIndex:l}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function cN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class Di extends YS{constructor(c){super(),this.firestore=c}convertBytes(c){return new E4(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new f2(this.firestore,null,a)}}function Es(e,c,a,...s){e=G3(e,f2);const t=G3(e.firestore,P6),r=ki(t);let n;return n=typeof(c=j2(c))=="string"||c instanceof i0?qS(r,"updateDoc",e._key,c,a,s):OS(r,"updateDoc",e._key,c),Ri(t,[n.toMutation(e._key,F2.exists(!0))])}function eN(e,c){const a=G3(e.firestore,P6),s=j7(e),t=XS(e.converter,c);return Ri(a,[BS(ki(e.firestore),"addDoc",s._key,t,e.converter!==null,{}).toMutation(s._key,F2.exists(!1))]).then(()=>s)}function aN(e,...c){var a,s,t;e=j2(e);let r={includeMetadataChanges:!1},n=0;typeof c[n]!="object"||Ts(c[n])||(r=c[n],n++);const i={includeMetadataChanges:r.includeMetadataChanges};if(Ts(c[n])){const h=c[n];c[n]=(a=h.next)===null||a===void 0?void 0:a.bind(h),c[n+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),c[n+2]=(t=h.complete)===null||t===void 0?void 0:t.bind(h)}let o,l,f;if(e instanceof f2)l=G3(e.firestore,P6),f=sc(e._key.path),o={next:h=>{c[n]&&c[n](sN(l,e,h))},error:c[n+1],complete:c[n+2]};else{const h=G3(e,n8);l=G3(h.firestore,P6),f=h._query;const u=new Di(l);o={next:v=>{c[n]&&c[n](new JS(l,u,h,v))},error:c[n+1],complete:c[n+2]},GS(e._query)}return function(h,u,v,d){const V=new wS(d),b=new iS(u,V,v);return h.asyncQueue.enqueueAndForget(async()=>sS(await As(h),b)),()=>{V.bc(),h.asyncQueue.enqueueAndForget(async()=>tS(await As(h),b))}}(yi(l),f,i,o)}function Ri(e,c){return function(a,s){const t=new U3;return a.asyncQueue.enqueueAndForget(async()=>CS(await PS(a),s,t)),t.promise}(yi(e),c)}function sN(e,c,a){const s=a.docs.get(c._key),t=new Di(e);return new _i(e,t,c._key,s,new c6(a.hasPendingWrites,a.fromCache),c.converter)}(function(e,c=!0){(function(a){O4=a})(BL),t5(new M6("firestore",(a,{instanceIdentifier:s,options:t})=>{const r=a.getProvider("app").getImmediate(),n=new P6(new ex(a.getProvider("auth-internal")),new rx(a.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new G(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new w6(i.options.projectId,o)}(r,s),r);return t=Object.assign({useFetchStreams:c},t),n._setSettings(t),n},"PUBLIC").setMultipleInstances(!0)),d4(es,"3.7.3",e),d4(es,"3.7.3","esm2017")})();var tN="firebase",rN="9.14.0";/**
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
 */d4(tN,rN,"app");const nN={apiKey:"AIzaSyBKbJCP0QtakDzW0qMjkUIWXjV8gci8GQw",authDomain:"devcamp9-d1490.firebaseapp.com",projectId:"devcamp9-d1490",storageBucket:"devcamp9-d1490.appspot.com",messagingSenderId:"1037623919825",appId:"1:1037623919825:web:bdd160447d6e667aedb1f0"},iN=Lr(nN),oN=DS(iN),lN={class:""},fN=E("div",{class:"text-yellow-500 text-center p-3 star3"},[E("div",{class:"zoom-in-out-infinite"},[E("p",{class:"text-5xl font-bold mt-5"},"Galaxy is now in danger . . ."),E("p",{class:"text-3xl mt-3"},"Tell us what to do .")])],-1),hN={class:"star4"},uN=["onSubmit"],mN={class:"flex justify-center p-10"},vN=["disabled"],CN={class:"flex flex-wrap mx-5"},pN={class:"p-10 font-semibold text-yellow-500 text-lg text-center max-w-xs"},dN={class:"flex justify-center"},zN=["onClick"],HN=["onClick"],MN={__name:"TodoList",setup(e){const c=Y8([]),a=NS(oN,"todoList"),s=jS(a,ZS("sum","desc"));Ut(()=>{aN(s,o=>{const l=[];o.forEach(f=>{const h={id:f.id,content:f.data().content,like:f.data().like,dislike:f.data().dislike,sum:f.data().sum};l.push(h)}),c.value=l})});const t=Y8(""),r=()=>{eN(a,{content:t.value,like:0,dislike:0,sum:0}),t.value=""},n=o=>{const l=c.value.findIndex(f=>f.id===o);Es(j7(a,o),{like:c.value[l].like+=1,sum:c.value[l].sum+=1})},i=o=>{const l=c.value.findIndex(f=>f.id===o);Es(j7(a,o),{dislike:c.value[l].dislike+=1,sum:c.value[l].sum-=1})};return(o,l)=>{const f=B3("font-awesome-icon");return p2(),x2("div",lN,[fN,E("div",hN,[E("form",{onSubmit:oM(r,["prevent"])},[E("div",mN,[rH(E("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>t.value=h),class:"block rounded-lg text-3xl bg-gray-200 border-gray-400 border-2 shadow-md text-stone-700",type:"text",placeholder:"type new mission"},null,512),[[rM,t.value]]),E("button",{disabled:!t.value,class:"block text-white p-3 mx-2 bg-orange-600 rounded-xl hover:bg-orange-500"}," Launch ",8,vN)])],40,uN),E("div",CN,[(p2(!0),x2(C2,null,Wt(c.value,h=>(p2(),x2("div",{key:h.id,class:"flex-col text-white m-2 bg-gray-700 hover:bg-gray-600 rounded-lg justify-center max-w-xs border-gray-600 border-2"},[E("div",pN,l2(h.content),1),E("div",dN,[E("button",{class:"px-10 mb-2",onClick:u=>n(h.id)},[d1(f,{icon:"fa-solid fa-circle-up",class:"text-3xl text-green-500 hover:text-green-400 hover:scale-125"}),E("p",null,l2(h.like),1)],8,zN),E("button",{class:"px-10 mb-2",onClick:u=>i(h.id)},[d1(f,{icon:"fa-solid fa-circle-down",class:"text-3xl text-red-500 hover:text-red-400 hover:scale-125"}),E("p",null,l2(h.dislike),1)],8,HN)])]))),128))])])])}}},VN=GV({history:iV("/CNO-PROJECT/"),routes:[{path:"/",name:"home",component:()=>UM(()=>import("./HomeView.ef859400.js"),["assets/HomeView.ef859400.js","assets/HomeView.9de8e5ed.css"])},{path:"/profile",name:"profile",component:xg},{path:"/todo",name:"todo",component:MN}]});var gN=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const LN=Symbol();var Ps;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ps||(Ps={}));function bN(){const e=az(!0),c=e.run(()=>Y8({}));let a=[],s=[];const t=M9({install(r){t._a=r,r.provide(LN,t),r.config.globalProperties.$pinia=t,s.forEach(n=>a.push(n)),s=[]},use(r){return!this._a&&!gN?s.push(r):a.push(r),this},_p:a,_a:null,_e:e,_s:new Map,state:c});return t}function _s(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function _(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?_s(Object(a),!0).forEach(function(s){D1(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_s(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function M5(e){return M5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},M5(e)}function xN(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function Ds(e,c){for(var a=0;a<c.length;a++){var s=c[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function yN(e,c,a){return c&&Ds(e.prototype,c),a&&Ds(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function D1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function bc(e,c){return NN(e)||kN(e,c)||Ii(e,c)||TN()}function i8(e){return SN(e)||wN(e)||Ii(e)||AN()}function SN(e){if(Array.isArray(e))return Z7(e)}function NN(e){if(Array.isArray(e))return e}function wN(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kN(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var s=[],t=!0,r=!1,n,i;try{for(a=a.call(e);!(t=(n=a.next()).done)&&(s.push(n.value),!(c&&s.length===c));t=!0);}catch(o){r=!0,i=o}finally{try{!t&&a.return!=null&&a.return()}finally{if(r)throw i}}return s}}function Ii(e,c){if(!!e){if(typeof e=="string")return Z7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Z7(e,c)}}function Z7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function AN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rs=function(){},xc={},Fi={},Bi=null,Oi={mark:Rs,measure:Rs};try{typeof window<"u"&&(xc=window),typeof document<"u"&&(Fi=document),typeof MutationObserver<"u"&&(Bi=MutationObserver),typeof performance<"u"&&(Oi=performance)}catch{}var EN=xc.navigator||{},Is=EN.userAgent,Fs=Is===void 0?"":Is,H3=xc,V1=Fi,Bs=Bi,S8=Oi;H3.document;var a3=!!V1.documentElement&&!!V1.head&&typeof V1.addEventListener=="function"&&typeof V1.createElement=="function",qi=~Fs.indexOf("MSIE")||~Fs.indexOf("Trident/"),N8,w8,k8,A8,T8,X2="___FONT_AWESOME___",Q7=16,Ui="fa",$i="svg-inline--fa",Q3="data-fa-i2svg",Y7="data-fa-pseudo-element",PN="data-fa-pseudo-element-pending",yc="data-prefix",Sc="data-icon",Os="fontawesome-i2svg",_N="async",DN=["HTML","HEAD","STYLE","SCRIPT"],Gi=function(){try{return!0}catch{return!1}}(),M1="classic",S1="sharp",Nc=[M1,S1];function o8(e){return new Proxy(e,{get:function(a,s){return s in a?a[s]:a[M1]}})}var _6=o8((N8={},D1(N8,M1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),D1(N8,S1,{fa:"solid",fass:"solid","fa-solid":"solid"}),N8)),D6=o8((w8={},D1(w8,M1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),D1(w8,S1,{solid:"fass"}),w8)),R6=o8((k8={},D1(k8,M1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),D1(k8,S1,{fass:"fa-solid"}),k8)),RN=o8((A8={},D1(A8,M1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),D1(A8,S1,{"fa-solid":"fass"}),A8)),IN=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Wi="fa-layers-text",FN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,BN=o8((T8={},D1(T8,M1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),D1(T8,S1,{900:"fass"}),T8)),ji=[1,2,3,4,5,6,7,8,9,10],ON=ji.concat([11,12,13,14,15,16,17,18,19,20]),qN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I6=new Set;Object.keys(D6[M1]).map(I6.add.bind(I6));Object.keys(D6[S1]).map(I6.add.bind(I6));var UN=[].concat(Nc,i8(I6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",R3.GROUP,R3.SWAP_OPACITY,R3.PRIMARY,R3.SECONDARY]).concat(ji.map(function(e){return"".concat(e,"x")})).concat(ON.map(function(e){return"w-".concat(e)})),f6=H3.FontAwesomeConfig||{};function $N(e){var c=V1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function GN(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V1&&typeof V1.querySelector=="function"){var WN=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];WN.forEach(function(e){var c=bc(e,2),a=c[0],s=c[1],t=GN($N(a));t!=null&&(f6[s]=t)})}var Ki={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ui,replacementClass:$i,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f6.familyPrefix&&(f6.cssPrefix=f6.familyPrefix);var P4=_(_({},Ki),f6);P4.autoReplaceSvg||(P4.observeMutations=!1);var I={};Object.keys(Ki).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(a){P4[e]=a,h6.forEach(function(s){return s(I)})},get:function(){return P4[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(c){P4.cssPrefix=c,h6.forEach(function(a){return a(I)})},get:function(){return P4.cssPrefix}});H3.FontAwesomeConfig=I;var h6=[];function jN(e){return h6.push(e),function(){h6.splice(h6.indexOf(e),1)}}var n3=Q7,I2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KN(e){if(!(!e||!a3)){var c=V1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=V1.head.childNodes,s=null,t=a.length-1;t>-1;t--){var r=a[t],n=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=r)}return V1.head.insertBefore(c,s),e}}var ZN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function F6(){for(var e=12,c="";e-- >0;)c+=ZN[Math.random()*62|0];return c}function $4(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function wc(e){return e.classList?$4(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function Zi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function QN(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(Zi(e[a]),'" ')},"").trim()}function f0(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function kc(e){return e.size!==I2.size||e.x!==I2.x||e.y!==I2.y||e.rotate!==I2.rotate||e.flipX||e.flipY}function YN(e){var c=e.transform,a=e.containerWidth,s=e.iconWidth,t={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),i="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(n," ").concat(i)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:t,inner:o,path:l}}function XN(e){var c=e.transform,a=e.width,s=a===void 0?Q7:a,t=e.height,r=t===void 0?Q7:t,n=e.startCentered,i=n===void 0?!1:n,o="";return i&&qi?o+="translate(".concat(c.x/n3-s/2,"em, ").concat(c.y/n3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(c.x/n3,"em), calc(-50% + ").concat(c.y/n3,"em)) "):o+="translate(".concat(c.x/n3,"em, ").concat(c.y/n3,"em) "),o+="scale(".concat(c.size/n3*(c.flipX?-1:1),", ").concat(c.size/n3*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var JN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qi(){var e=Ui,c=$i,a=I.cssPrefix,s=I.replacementClass,t=JN;if(a!==e||s!==c){var r=new RegExp("\\.".concat(e,"\\-"),"g"),n=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(c),"g");t=t.replace(r,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(i,".".concat(s))}return t}var qs=!1;function J0(){I.autoAddCss&&!qs&&(KN(Qi()),qs=!0)}var cw={mixout:function(){return{dom:{css:Qi,insertCss:J0}}},hooks:function(){return{beforeDOMElementCreation:function(){J0()},beforeI2svg:function(){J0()}}}},J2=H3||{};J2[X2]||(J2[X2]={});J2[X2].styles||(J2[X2].styles={});J2[X2].hooks||(J2[X2].hooks={});J2[X2].shims||(J2[X2].shims=[]);var y2=J2[X2],Yi=[],ew=function e(){V1.removeEventListener("DOMContentLoaded",e),V5=1,Yi.map(function(c){return c()})},V5=!1;a3&&(V5=(V1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V1.readyState),V5||V1.addEventListener("DOMContentLoaded",ew));function aw(e){!a3||(V5?setTimeout(e,0):Yi.push(e))}function l8(e){var c=e.tag,a=e.attributes,s=a===void 0?{}:a,t=e.children,r=t===void 0?[]:t;return typeof e=="string"?Zi(e):"<".concat(c," ").concat(QN(s),">").concat(r.map(l8).join(""),"</").concat(c,">")}function Us(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var sw=function(c,a){return function(s,t,r,n){return c.call(a,s,t,r,n)}},c7=function(c,a,s,t){var r=Object.keys(c),n=r.length,i=t!==void 0?sw(a,t):a,o,l,f;for(s===void 0?(o=1,f=c[r[0]]):(o=0,f=s);o<n;o++)l=r[o],f=i(f,c[l],l,c);return f};function tw(e){for(var c=[],a=0,s=e.length;a<s;){var t=e.charCodeAt(a++);if(t>=55296&&t<=56319&&a<s){var r=e.charCodeAt(a++);(r&64512)==56320?c.push(((t&1023)<<10)+(r&1023)+65536):(c.push(t),a--)}else c.push(t)}return c}function X7(e){var c=tw(e);return c.length===1?c[0].toString(16):null}function rw(e,c){var a=e.length,s=e.charCodeAt(c),t;return s>=55296&&s<=56319&&a>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(s-55296)*1024+t-56320+65536:s}function $s(e){return Object.keys(e).reduce(function(c,a){var s=e[a],t=!!s.icon;return t?c[s.iconName]=s.icon:c[a]=s,c},{})}function J7(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,t=s===void 0?!1:s,r=$s(c);typeof y2.hooks.addPack=="function"&&!t?y2.hooks.addPack(e,$s(c)):y2.styles[e]=_(_({},y2.styles[e]||{}),r),e==="fas"&&J7("fa",c)}var E8,P8,_8,f4=y2.styles,nw=y2.shims,iw=(E8={},D1(E8,M1,Object.values(R6[M1])),D1(E8,S1,Object.values(R6[S1])),E8),Ac=null,Xi={},Ji={},co={},eo={},ao={},ow=(P8={},D1(P8,M1,Object.keys(_6[M1])),D1(P8,S1,Object.keys(_6[S1])),P8);function lw(e){return~UN.indexOf(e)}function fw(e,c){var a=c.split("-"),s=a[0],t=a.slice(1).join("-");return s===e&&t!==""&&!lw(t)?t:null}var so=function(){var c=function(r){return c7(f4,function(n,i,o){return n[o]=c7(i,r,{}),n},{})};Xi=c(function(t,r,n){if(r[3]&&(t[r[3]]=n),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){t[o.toString(16)]=n})}return t}),Ji=c(function(t,r,n){if(t[n]=n,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){t[o]=n})}return t}),ao=c(function(t,r,n){var i=r[2];return t[n]=n,i.forEach(function(o){t[o]=n}),t});var a="far"in f4||I.autoFetchSvg,s=c7(nw,function(t,r){var n=r[0],i=r[1],o=r[2];return i==="far"&&!a&&(i="fas"),typeof n=="string"&&(t.names[n]={prefix:i,iconName:o}),typeof n=="number"&&(t.unicodes[n.toString(16)]={prefix:i,iconName:o}),t},{names:{},unicodes:{}});co=s.names,eo=s.unicodes,Ac=h0(I.styleDefault,{family:I.familyDefault})};jN(function(e){Ac=h0(e.styleDefault,{family:I.familyDefault})});so();function Tc(e,c){return(Xi[e]||{})[c]}function hw(e,c){return(Ji[e]||{})[c]}function I3(e,c){return(ao[e]||{})[c]}function to(e){return co[e]||{prefix:null,iconName:null}}function uw(e){var c=eo[e],a=Tc("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function M3(){return Ac}var Ec=function(){return{prefix:null,iconName:null,rest:[]}};function h0(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,s=a===void 0?M1:a,t=_6[s][e],r=D6[s][e]||D6[s][t],n=e in y2.styles?e:null;return r||n||null}var Gs=(_8={},D1(_8,M1,Object.keys(R6[M1])),D1(_8,S1,Object.keys(R6[S1])),_8);function u0(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,t=s===void 0?!1:s,r=(c={},D1(c,M1,"".concat(I.cssPrefix,"-").concat(M1)),D1(c,S1,"".concat(I.cssPrefix,"-").concat(S1)),c),n=null,i=M1;(e.includes(r[M1])||e.some(function(l){return Gs[M1].includes(l)}))&&(i=M1),(e.includes(r[S1])||e.some(function(l){return Gs[S1].includes(l)}))&&(i=S1);var o=e.reduce(function(l,f){var h=fw(I.cssPrefix,f);if(f4[f]?(f=iw[i].includes(f)?RN[i][f]:f,n=f,l.prefix=f):ow[i].indexOf(f)>-1?(n=f,l.prefix=h0(f,{family:i})):h?l.iconName=h:f!==I.replacementClass&&f!==r[M1]&&f!==r[S1]&&l.rest.push(f),!t&&l.prefix&&l.iconName){var u=n==="fa"?to(l.iconName):{},v=I3(l.prefix,l.iconName);u.prefix&&(n=null),l.iconName=u.iconName||v||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!f4.far&&f4.fas&&!I.autoFetchSvg&&(l.prefix="fas")}return l},Ec());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===S1&&(f4.fass||I.autoFetchSvg)&&(o.prefix="fass",o.iconName=I3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=M3()||"fas"),o}var mw=function(){function e(){xN(this,e),this.definitions={}}return yN(e,[{key:"add",value:function(){for(var a=this,s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];var n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(i){a.definitions[i]=_(_({},a.definitions[i]||{}),n[i]),J7(i,n[i]);var o=R6[M1][i];o&&J7(o,n[i]),so()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var t=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(t).map(function(r){var n=t[r],i=n.prefix,o=n.iconName,l=n.icon,f=l[2];a[i]||(a[i]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(a[i][h]=l)}),a[i][o]=l}),a}}]),e}(),Ws=[],h4={},V4={},vw=Object.keys(V4);function Cw(e,c){var a=c.mixoutsTo;return Ws=e,h4={},Object.keys(V4).forEach(function(s){vw.indexOf(s)===-1&&delete V4[s]}),Ws.forEach(function(s){var t=s.mixout?s.mixout():{};if(Object.keys(t).forEach(function(n){typeof t[n]=="function"&&(a[n]=t[n]),M5(t[n])==="object"&&Object.keys(t[n]).forEach(function(i){a[n]||(a[n]={}),a[n][i]=t[n][i]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(n){h4[n]||(h4[n]=[]),h4[n].push(r[n])})}s.provides&&s.provides(V4)}),a}function c9(e,c){for(var a=arguments.length,s=new Array(a>2?a-2:0),t=2;t<a;t++)s[t-2]=arguments[t];var r=h4[e]||[];return r.forEach(function(n){c=n.apply(null,[c].concat(s))}),c}function Y3(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),s=1;s<c;s++)a[s-1]=arguments[s];var t=h4[e]||[];t.forEach(function(r){r.apply(null,a)})}function c3(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return V4[e]?V4[e].apply(null,c):void 0}function e9(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||M3();if(!!c)return c=I3(a,c)||c,Us(ro.definitions,a,c)||Us(y2.styles,a,c)}var ro=new mw,pw=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,Y3("noAuto")},dw={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a3?(Y3("beforeI2svg",c),c3("pseudoElements2svg",c),c3("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,aw(function(){Hw({autoReplaceSvgRoot:a}),Y3("watch",c)})}},zw={icon:function(c){if(c===null)return null;if(M5(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:I3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=h0(c[0]);return{prefix:s,iconName:I3(s,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(I.cssPrefix,"-"))>-1||c.match(IN))){var t=u0(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||M3(),iconName:I3(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){var r=M3();return{prefix:r,iconName:I3(r,c)||c}}}},m2={noAuto:pw,config:I,dom:dw,parse:zw,library:ro,findIconDefinition:e9,toHtml:l8},Hw=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,s=a===void 0?V1:a;(Object.keys(y2.styles).length>0||I.autoFetchSvg)&&a3&&I.autoReplaceSvg&&m2.dom.i2svg({node:s})};function m0(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(s){return l8(s)})}}),Object.defineProperty(e,"node",{get:function(){if(!!a3){var s=V1.createElement("div");return s.innerHTML=e.html,s.children}}}),e}function Mw(e){var c=e.children,a=e.main,s=e.mask,t=e.attributes,r=e.styles,n=e.transform;if(kc(n)&&a.found&&!s.found){var i=a.width,o=a.height,l={x:i/o/2,y:.5};t.style=f0(_(_({},r),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function Vw(e){var c=e.prefix,a=e.iconName,s=e.children,t=e.attributes,r=e.symbol,n=r===!0?"".concat(c,"-").concat(I.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},t),{},{id:n}),children:s}]}]}function Pc(e){var c=e.icons,a=c.main,s=c.mask,t=e.prefix,r=e.iconName,n=e.transform,i=e.symbol,o=e.title,l=e.maskId,f=e.titleId,h=e.extra,u=e.watchable,v=u===void 0?!1:u,d=s.found?s:a,V=d.width,b=d.height,p=t==="fak",M=[I.replacementClass,r?"".concat(I.cssPrefix,"-").concat(r):""].filter(function(X1){return h.classes.indexOf(X1)===-1}).filter(function(X1){return X1!==""||!!X1}).concat(h.classes).join(" "),D={children:[],attributes:_(_({},h.attributes),{},{"data-prefix":t,"data-icon":r,class:M,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V," ").concat(b)})},O=p&&!~h.classes.indexOf("fa-fw")?{width:"".concat(V/b*16*.0625,"em")}:{};v&&(D.attributes[Q3]=""),o&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(f||F6())},children:[o]}),delete D.attributes.title);var J=_(_({},D),{},{prefix:t,iconName:r,main:a,mask:s,maskId:l,transform:n,symbol:i,styles:_(_({},O),h.styles)}),v1=s.found&&a.found?c3("generateAbstractMask",J)||{children:[],attributes:{}}:c3("generateAbstractIcon",J)||{children:[],attributes:{}},H1=v1.children,i2=v1.attributes;return J.children=H1,J.attributes=i2,i?Vw(J):Mw(J)}function js(e){var c=e.content,a=e.width,s=e.height,t=e.transform,r=e.title,n=e.extra,i=e.watchable,o=i===void 0?!1:i,l=_(_(_({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")});o&&(l[Q3]="");var f=_({},n.styles);kc(t)&&(f.transform=XN({transform:t,startCentered:!0,width:a,height:s}),f["-webkit-transform"]=f.transform);var h=f0(f);h.length>0&&(l.style=h);var u=[];return u.push({tag:"span",attributes:l,children:[c]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function gw(e){var c=e.content,a=e.title,s=e.extra,t=_(_(_({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=f0(s.styles);r.length>0&&(t.style=r);var n=[];return n.push({tag:"span",attributes:t,children:[c]}),a&&n.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),n}var e7=y2.styles;function a9(e){var c=e[0],a=e[1],s=e.slice(4),t=bc(s,1),r=t[0],n=null;return Array.isArray(r)?n={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(R3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(R3.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(R3.PRIMARY),fill:"currentColor",d:r[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:a,icon:n}}var Lw={found:!1,width:512,height:512};function bw(e,c){!Gi&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function s9(e,c){var a=c;return c==="fa"&&I.styleDefault!==null&&(c=M3()),new Promise(function(s,t){if(c3("missingIconAbstract"),a==="fa"){var r=to(e)||{};e=r.iconName||e,c=r.prefix||c}if(e&&c&&e7[c]&&e7[c][e]){var n=e7[c][e];return s(a9(n))}bw(e,c),s(_(_({},Lw),{},{icon:I.showMissingIcons&&e?c3("missingIconAbstract")||{}:{}}))})}var Ks=function(){},t9=I.measurePerformance&&S8&&S8.mark&&S8.measure?S8:{mark:Ks,measure:Ks},e6='FA "6.2.0"',xw=function(c){return t9.mark("".concat(e6," ").concat(c," begins")),function(){return no(c)}},no=function(c){t9.mark("".concat(e6," ").concat(c," ends")),t9.measure("".concat(e6," ").concat(c),"".concat(e6," ").concat(c," begins"),"".concat(e6," ").concat(c," ends"))},_c={begin:xw,end:no},j8=function(){};function Zs(e){var c=e.getAttribute?e.getAttribute(Q3):null;return typeof c=="string"}function yw(e){var c=e.getAttribute?e.getAttribute(yc):null,a=e.getAttribute?e.getAttribute(Sc):null;return c&&a}function Sw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Nw(){if(I.autoReplaceSvg===!0)return K8.replace;var e=K8[I.autoReplaceSvg];return e||K8.replace}function ww(e){return V1.createElementNS("http://www.w3.org/2000/svg",e)}function kw(e){return V1.createElement(e)}function io(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,s=a===void 0?e.tag==="svg"?ww:kw:a;if(typeof e=="string")return V1.createTextNode(e);var t=s(e.tag);Object.keys(e.attributes||[]).forEach(function(n){t.setAttribute(n,e.attributes[n])});var r=e.children||[];return r.forEach(function(n){t.appendChild(io(n,{ceFn:s}))}),t}function Aw(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var K8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(t){a.parentNode.insertBefore(io(t),a)}),a.getAttribute(Q3)===null&&I.keepOriginalSource){var s=V1.createComment(Aw(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(c){var a=c[0],s=c[1];if(~wc(a).indexOf(I.replacementClass))return K8.replace(c);var t=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(i,o){return o===I.replacementClass||o.match(t)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var n=s.map(function(i){return l8(i)}).join(`
`);a.setAttribute(Q3,""),a.innerHTML=n}};function Qs(e){e()}function oo(e,c){var a=typeof c=="function"?c:j8;if(e.length===0)a();else{var s=Qs;I.mutateApproach===_N&&(s=H3.requestAnimationFrame||Qs),s(function(){var t=Nw(),r=_c.begin("mutate");e.map(t),r(),a()})}}var Dc=!1;function lo(){Dc=!0}function r9(){Dc=!1}var g5=null;function Ys(e){if(!!Bs&&!!I.observeMutations){var c=e.treeCallback,a=c===void 0?j8:c,s=e.nodeCallback,t=s===void 0?j8:s,r=e.pseudoElementsCallback,n=r===void 0?j8:r,i=e.observeMutationsRoot,o=i===void 0?V1:i;g5=new Bs(function(l){if(!Dc){var f=M3();$4(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Zs(h.addedNodes[0])&&(I.searchPseudoElements&&n(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&I.searchPseudoElements&&n(h.target.parentNode),h.type==="attributes"&&Zs(h.target)&&~qN.indexOf(h.attributeName))if(h.attributeName==="class"&&yw(h.target)){var u=u0(wc(h.target)),v=u.prefix,d=u.iconName;h.target.setAttribute(yc,v||f),d&&h.target.setAttribute(Sc,d)}else Sw(h.target)&&t(h.target)})}}),a3&&g5.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tw(){!g5||g5.disconnect()}function Ew(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(s,t){var r=t.split(":"),n=r[0],i=r.slice(1);return n&&i.length>0&&(s[n]=i.join(":").trim()),s},{})),a}function Pw(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),s=e.innerText!==void 0?e.innerText.trim():"",t=u0(wc(e));return t.prefix||(t.prefix=M3()),c&&a&&(t.prefix=c,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&s.length>0&&(t.iconName=hw(t.prefix,e.innerText)||Tc(t.prefix,X7(e.innerText))),!t.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function _w(e){var c=$4(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{}),a=e.getAttribute("title"),s=e.getAttribute("data-fa-title-id");return I.autoA11y&&(a?c["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(s||F6()):(c["aria-hidden"]="true",c.focusable="false")),c}function Dw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xs(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Pw(e),s=a.iconName,t=a.prefix,r=a.rest,n=_w(e),i=c9("parseNodeAttributes",{},e),o=c.styleParser?Ew(e):[];return _({iconName:s,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:t,transform:I2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:n}},i)}var Rw=y2.styles;function fo(e){var c=I.autoReplaceSvg==="nest"?Xs(e,{styleParser:!1}):Xs(e);return~c.extra.classes.indexOf(Wi)?c3("generateLayersText",e,c):c3("generateSvgReplacementMutation",e,c)}var V3=new Set;Nc.map(function(e){V3.add("fa-".concat(e))});Object.keys(_6[M1]).map(V3.add.bind(V3));Object.keys(_6[S1]).map(V3.add.bind(V3));V3=i8(V3);function Js(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a3)return Promise.resolve();var a=V1.documentElement.classList,s=function(h){return a.add("".concat(Os,"-").concat(h))},t=function(h){return a.remove("".concat(Os,"-").concat(h))},r=I.autoFetchSvg?V3:Nc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Rw));r.includes("fa")||r.push("fa");var n=[".".concat(Wi,":not([").concat(Q3,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(Q3,"])")})).join(", ");if(n.length===0)return Promise.resolve();var i=[];try{i=$4(e.querySelectorAll(n))}catch{}if(i.length>0)s("pending"),t("complete");else return Promise.resolve();var o=_c.begin("onTree"),l=i.reduce(function(f,h){try{var u=fo(h);u&&f.push(u)}catch(v){Gi||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(u){oo(u,function(){s("active"),s("complete"),t("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(u){o(),h(u)})})}function Iw(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fo(e).then(function(a){a&&oo([a],c)})}function Fw(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(c||{}).icon?c:e9(c||{}),t=a.mask;return t&&(t=(t||{}).icon?t:e9(t||{})),e(s,_(_({},a),{},{mask:t}))}}var Bw=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,t=s===void 0?I2:s,r=a.symbol,n=r===void 0?!1:r,i=a.mask,o=i===void 0?null:i,l=a.maskId,f=l===void 0?null:l,h=a.title,u=h===void 0?null:h,v=a.titleId,d=v===void 0?null:v,V=a.classes,b=V===void 0?[]:V,p=a.attributes,M=p===void 0?{}:p,D=a.styles,O=D===void 0?{}:D;if(!!c){var J=c.prefix,v1=c.iconName,H1=c.icon;return m0(_({type:"icon"},c),function(){return Y3("beforeDOMElementCreation",{iconDefinition:c,params:a}),I.autoA11y&&(u?M["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(d||F6()):(M["aria-hidden"]="true",M.focusable="false")),Pc({icons:{main:a9(H1),mask:o?a9(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:J,iconName:v1,transform:_(_({},I2),t),symbol:n,title:u,maskId:f,titleId:d,extra:{attributes:M,styles:O,classes:b}})})}},Ow={mixout:function(){return{icon:Fw(Bw)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Js,a.nodeCallback=Iw,a}}},provides:function(c){c.i2svg=function(a){var s=a.node,t=s===void 0?V1:s,r=a.callback,n=r===void 0?function(){}:r;return Js(t,n)},c.generateSvgReplacementMutation=function(a,s){var t=s.iconName,r=s.title,n=s.titleId,i=s.prefix,o=s.transform,l=s.symbol,f=s.mask,h=s.maskId,u=s.extra;return new Promise(function(v,d){Promise.all([s9(t,i),f.iconName?s9(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(V){var b=bc(V,2),p=b[0],M=b[1];v([a,Pc({icons:{main:p,mask:M},prefix:i,iconName:t,transform:o,symbol:l,maskId:h,title:r,titleId:n,extra:u,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.transform,i=a.styles,o=f0(i);o.length>0&&(t.style=o);var l;return kc(n)&&(l=c3("generateAbstractTransformGrouping",{main:r,transform:n,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:t}}}},qw={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.classes,r=t===void 0?[]:t;return m0({type:"layer"},function(){Y3("beforeDOMElementCreation",{assembler:a,params:s});var n=[];return a(function(i){Array.isArray(i)?i.map(function(o){n=n.concat(o.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(i8(r)).join(" ")},children:n}]})}}}},Uw={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.title,r=t===void 0?null:t,n=s.classes,i=n===void 0?[]:n,o=s.attributes,l=o===void 0?{}:o,f=s.styles,h=f===void 0?{}:f;return m0({type:"counter",content:a},function(){return Y3("beforeDOMElementCreation",{content:a,params:s}),gw({content:a.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(i8(i))}})})}}}},$w={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.transform,r=t===void 0?I2:t,n=s.title,i=n===void 0?null:n,o=s.classes,l=o===void 0?[]:o,f=s.attributes,h=f===void 0?{}:f,u=s.styles,v=u===void 0?{}:u;return m0({type:"text",content:a},function(){return Y3("beforeDOMElementCreation",{content:a,params:s}),js({content:a,transform:_(_({},I2),r),title:i,extra:{attributes:h,styles:v,classes:["".concat(I.cssPrefix,"-layers-text")].concat(i8(l))}})})}}},provides:function(c){c.generateLayersText=function(a,s){var t=s.title,r=s.transform,n=s.extra,i=null,o=null;if(qi){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/l,o=f.height/l}return I.autoA11y&&!t&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,js({content:a.innerHTML,width:i,height:o,transform:r,title:t,extra:n,watchable:!0})])}}},Gw=new RegExp('"',"ug"),ct=[1105920,1112319];function Ww(e){var c=e.replace(Gw,""),a=rw(c,0),s=a>=ct[0]&&a<=ct[1],t=c.length===2?c[0]===c[1]:!1;return{value:X7(t?c[0]:c),isSecondary:s||t}}function et(e,c){var a="".concat(PN).concat(c.replace(":","-"));return new Promise(function(s,t){if(e.getAttribute(a)!==null)return s();var r=$4(e.children),n=r.filter(function(H1){return H1.getAttribute(Y7)===c})[0],i=H3.getComputedStyle(e,c),o=i.getPropertyValue("font-family").match(FN),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(n&&!o)return e.removeChild(n),s();if(o&&f!=="none"&&f!==""){var h=i.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?S1:M1,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?D6[u][o[2].toLowerCase()]:BN[u][l],d=Ww(h),V=d.value,b=d.isSecondary,p=o[0].startsWith("FontAwesome"),M=Tc(v,V),D=M;if(p){var O=uw(V);O.iconName&&O.prefix&&(M=O.iconName,v=O.prefix)}if(M&&!b&&(!n||n.getAttribute(yc)!==v||n.getAttribute(Sc)!==D)){e.setAttribute(a,D),n&&e.removeChild(n);var J=Dw(),v1=J.extra;v1.attributes[Y7]=c,s9(M,v).then(function(H1){var i2=Pc(_(_({},J),{},{icons:{main:H1,mask:Ec()},prefix:v,iconName:D,extra:v1,watchable:!0})),X1=V1.createElement("svg");c==="::before"?e.insertBefore(X1,e.firstChild):e.appendChild(X1),X1.outerHTML=i2.map(function(v2){return l8(v2)}).join(`
`),e.removeAttribute(a),s()}).catch(t)}else s()}else s()})}function jw(e){return Promise.all([et(e,"::before"),et(e,"::after")])}function Kw(e){return e.parentNode!==document.head&&!~DN.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Y7)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function at(e){if(!!a3)return new Promise(function(c,a){var s=$4(e.querySelectorAll("*")).filter(Kw).map(jw),t=_c.begin("searchPseudoElements");lo(),Promise.all(s).then(function(){t(),r9(),c()}).catch(function(){t(),r9(),a()})})}var Zw={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=at,a}}},provides:function(c){c.pseudoElements2svg=function(a){var s=a.node,t=s===void 0?V1:s;I.searchPseudoElements&&at(t)}}},st=!1,Qw={mixout:function(){return{dom:{unwatch:function(){lo(),st=!0}}}},hooks:function(){return{bootstrap:function(){Ys(c9("mutationObserverCallbacks",{}))},noAuto:function(){Tw()},watch:function(a){var s=a.observeMutationsRoot;st?r9():Ys(c9("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},tt=function(c){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(s,t){var r=t.toLowerCase().split("-"),n=r[0],i=r.slice(1).join("-");if(n&&i==="h")return s.flipX=!0,s;if(n&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(n){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},a)},Yw={mixout:function(){return{parse:{transform:function(a){return tt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-transform");return t&&(a.transform=tt(t)),a}}},provides:function(c){c.generateAbstractTransformGrouping=function(a){var s=a.main,t=a.transform,r=a.containerWidth,n=a.iconWidth,i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),l="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(o," ").concat(l," ").concat(f)},u={transform:"translate(".concat(n/2*-1," -256)")},v={outer:i,inner:h,path:u};return{tag:"g",attributes:_({},v.outer),children:[{tag:"g",attributes:_({},v.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:_(_({},s.icon.attributes),v.path)}]}]}}}},a7={x:0,y:0,width:"100%",height:"100%"};function rt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function Xw(e){return e.tag==="g"?e.children:[e]}var Jw={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-mask"),r=t?u0(t.split(" ").map(function(n){return n.trim()})):Ec();return r.prefix||(r.prefix=M3()),a.mask=r,a.maskId=s.getAttribute("data-fa-mask-id"),a}}},provides:function(c){c.generateAbstractMask=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.mask,i=a.maskId,o=a.transform,l=r.width,f=r.icon,h=n.width,u=n.icon,v=YN({transform:o,containerWidth:h,iconWidth:l}),d={tag:"rect",attributes:_(_({},a7),{},{fill:"white"})},V=f.children?{children:f.children.map(rt)}:{},b={tag:"g",attributes:_({},v.inner),children:[rt(_({tag:f.tag,attributes:_(_({},f.attributes),v.path)},V))]},p={tag:"g",attributes:_({},v.outer),children:[b]},M="mask-".concat(i||F6()),D="clip-".concat(i||F6()),O={tag:"mask",attributes:_(_({},a7),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,p]},J={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:Xw(u)},O]};return s.push(J,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(M,")")},a7)}),{children:s,attributes:t}}}},ck={provides:function(c){var a=!1;H3.matchMedia&&(a=H3.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var s=[],t={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:_(_({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=_(_({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:_(_({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||i.children.push({tag:"animate",attributes:_(_({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:_(_({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:_(_({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||s.push({tag:"path",attributes:_(_({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},ek={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return a.symbol=r,a}}}},ak=[cw,Ow,qw,Uw,$w,Zw,Qw,Yw,Jw,ck,ek];Cw(ak,{mixoutsTo:m2});m2.noAuto;var ho=m2.config,Rc=m2.library;m2.dom;var L5=m2.parse;m2.findIconDefinition;m2.toHtml;var sk=m2.icon;m2.layer;var tk=m2.text;m2.counter;function nt(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function g2(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?nt(Object(a),!0).forEach(function(s){s2(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):nt(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function b5(e){return b5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},b5(e)}function s2(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function rk(e,c){if(e==null)return{};var a={},s=Object.keys(e),t,r;for(r=0;r<s.length;r++)t=s[r],!(c.indexOf(t)>=0)&&(a[t]=e[t]);return a}function nk(e,c){if(e==null)return{};var a=rk(e,c),s,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],!(c.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,s)||(a[s]=e[s]))}return a}function n9(e){return ik(e)||ok(e)||lk(e)||fk()}function ik(e){if(Array.isArray(e))return i9(e)}function ok(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lk(e,c){if(!!e){if(typeof e=="string")return i9(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i9(e,c)}}function i9(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function fk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.