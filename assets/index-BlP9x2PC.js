(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();var bh={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function oM(){if(pv)return ul;pv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var m in c)m!=="key"&&(d[m]=c[m])}else d=c;return c=d.ref,{$$typeof:o,type:s,key:f,ref:c!==void 0?c:null,props:d}}return ul.Fragment=t,ul.jsx=i,ul.jsxs=i,ul}var gv;function lM(){return gv||(gv=1,bh.exports=oM()),bh.exports}var h=lM(),Sh={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function cM(){if(xv)return ct;xv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),y=Symbol.iterator;function C(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function I(z,pe,Ce){this.props=z,this.context=pe,this.refs=b,this.updater=Ce||N}I.prototype.isReactComponent={},I.prototype.setState=function(z,pe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,pe,"setState")},I.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function V(){}V.prototype=I.prototype;function R(z,pe,Ce){this.props=z,this.context=pe,this.refs=b,this.updater=Ce||N}var D=R.prototype=new V;D.constructor=R,M(D,I.prototype),D.isPureReactComponent=!0;var U=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function k(z,pe,Ce){var Y=Ce.ref;return{$$typeof:o,type:z,key:pe,ref:Y!==void 0?Y:null,props:Ce}}function G(z,pe){return k(z.type,pe,z.props)}function ee(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function le(z){var pe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ce){return pe[Ce]})}var K=/\/+/g;function $(z,pe){return typeof z=="object"&&z!==null&&z.key!=null?le(""+z.key):pe.toString(36)}function j(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(pe){z.status==="pending"&&(z.status="fulfilled",z.value=pe)},function(pe){z.status==="pending"&&(z.status="rejected",z.reason=pe)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function q(z,pe,Ce,Y,ue){var ye=typeof z;(ye==="undefined"||ye==="boolean")&&(z=null);var we=!1;if(z===null)we=!0;else switch(ye){case"bigint":case"string":case"number":we=!0;break;case"object":switch(z.$$typeof){case o:case t:we=!0;break;case S:return we=z._init,q(we(z._payload),pe,Ce,Y,ue)}}if(we)return ue=ue(z),we=Y===""?"."+$(z,0):Y,U(ue)?(Ce="",we!=null&&(Ce=we.replace(K,"$&/")+"/"),q(ue,pe,Ce,"",function(st){return st})):ue!=null&&(ee(ue)&&(ue=G(ue,Ce+(ue.key==null||z&&z.key===ue.key?"":(""+ue.key).replace(K,"$&/")+"/")+we)),pe.push(ue)),1;we=0;var ge=Y===""?".":Y+":";if(U(z))for(var Ae=0;Ae<z.length;Ae++)Y=z[Ae],ye=ge+$(Y,Ae),we+=q(Y,pe,Ce,ye,ue);else if(Ae=C(z),typeof Ae=="function")for(z=Ae.call(z),Ae=0;!(Y=z.next()).done;)Y=Y.value,ye=ge+$(Y,Ae++),we+=q(Y,pe,Ce,ye,ue);else if(ye==="object"){if(typeof z.then=="function")return q(j(z),pe,Ce,Y,ue);throw pe=String(z),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.")}return we}function fe(z,pe,Ce){if(z==null)return z;var Y=[],ue=0;return q(z,Y,"","",function(ye){return pe.call(Ce,ye,ue++)}),Y}function te(z){if(z._status===-1){var pe=z._result,Ce=pe();Ce.then(function(Y){(z._status===0||z._status===-1)&&(z._status=1,z._result=Y,Ce.status===void 0&&(Ce.status="fulfilled",Ce.value=Y))},function(Y){(z._status===0||z._status===-1)&&(z._status=2,z._result=Y,Ce.status===void 0&&(Ce.status="rejected",Ce.reason=Y))}),z._status===-1&&(z._status=0,z._result=Ce)}if(z._status===1)return z._result.default;throw z._result}var ce=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(pe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function _e(z){var pe=T.T,Ce={};Ce.types=pe!==null?pe.types:null,T.T=Ce;try{var Y=z(),ue=T.S;ue!==null&&ue(Ce,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(P,ce)}catch(ye){ce(ye)}finally{pe!==null&&Ce.types!==null&&(pe.types=Ce.types),T.T=pe}}function Ne(z){var pe=T.T;if(pe!==null){var Ce=pe.types;Ce===null?pe.types=[z]:Ce.indexOf(z)===-1&&Ce.push(z)}else _e(Ne.bind(null,z))}var je={map:fe,forEach:function(z,pe,Ce){fe(z,function(){pe.apply(this,arguments)},Ce)},count:function(z){var pe=0;return fe(z,function(){pe++}),pe},toArray:function(z){return fe(z,function(pe){return pe})||[]},only:function(z){if(!ee(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ct.Activity=v,ct.Children=je,ct.Component=I,ct.Fragment=i,ct.Profiler=c,ct.PureComponent=R,ct.StrictMode=s,ct.Suspense=g,ct.ViewTransition=_,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,ct.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},ct.addTransitionType=Ne,ct.cache=function(z){return function(){return z.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(z,pe,Ce){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Y=M({},z.props),ue=z.key;if(pe!=null)for(ye in pe.key!==void 0&&(ue=""+pe.key),pe)!O.call(pe,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&pe.ref===void 0||(Y[ye]=pe[ye]);var ye=arguments.length-2;if(ye===1)Y.children=Ce;else if(1<ye){for(var we=Array(ye),ge=0;ge<ye;ge++)we[ge]=arguments[ge+2];Y.children=we}return k(z.type,ue,Y)},ct.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:d,_context:z},z},ct.createElement=function(z,pe,Ce){var Y,ue={},ye=null;if(pe!=null)for(Y in pe.key!==void 0&&(ye=""+pe.key),pe)O.call(pe,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ue[Y]=pe[Y]);var we=arguments.length-2;if(we===1)ue.children=Ce;else if(1<we){for(var ge=Array(we),Ae=0;Ae<we;Ae++)ge[Ae]=arguments[Ae+2];ue.children=ge}if(z&&z.defaultProps)for(Y in we=z.defaultProps,we)ue[Y]===void 0&&(ue[Y]=we[Y]);return k(z,ye,ue)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(z){return{$$typeof:m,render:z}},ct.isValidElement=ee,ct.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:te}},ct.memo=function(z,pe){return{$$typeof:p,type:z,compare:pe===void 0?null:pe}},ct.startTransition=_e,ct.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},ct.use=function(z){return T.H.use(z)},ct.useActionState=function(z,pe,Ce){return T.H.useActionState(z,pe,Ce)},ct.useCallback=function(z,pe){return T.H.useCallback(z,pe)},ct.useContext=function(z){return T.H.useContext(z)},ct.useDebugValue=function(){},ct.useDeferredValue=function(z,pe){return T.H.useDeferredValue(z,pe)},ct.useEffect=function(z,pe){return T.H.useEffect(z,pe)},ct.useEffectEvent=function(z){return T.H.useEffectEvent(z)},ct.useId=function(){return T.H.useId()},ct.useImperativeHandle=function(z,pe,Ce){return T.H.useImperativeHandle(z,pe,Ce)},ct.useInsertionEffect=function(z,pe){return T.H.useInsertionEffect(z,pe)},ct.useLayoutEffect=function(z,pe){return T.H.useLayoutEffect(z,pe)},ct.useMemo=function(z,pe){return T.H.useMemo(z,pe)},ct.useOptimistic=function(z,pe){return T.H.useOptimistic(z,pe)},ct.useReducer=function(z,pe,Ce){return T.H.useReducer(z,pe,Ce)},ct.useRef=function(z){return T.H.useRef(z)},ct.useState=function(z){return T.H.useState(z)},ct.useSyncExternalStore=function(z,pe,Ce){return T.H.useSyncExternalStore(z,pe,Ce)},ct.useTransition=function(){return T.H.useTransition()},ct.version="19.3.0",ct}var vv;function Zm(){return vv||(vv=1,Sh.exports=cM()),Sh.exports}var bt=Zm(),yh={exports:{}},dl={},Mh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function uM(){return _v||(_v=1,(function(o){function t(j,q){var fe=j.length;j.push(q);e:for(;0<fe;){var te=fe-1>>>1,ce=j[te];if(0<c(ce,q))j[te]=q,j[fe]=ce,fe=te;else break e}}function i(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var q=j[0],fe=j.pop();if(fe!==q){j[0]=fe;e:for(var te=0,ce=j.length,_e=ce>>>1;te<_e;){var Ne=2*(te+1)-1,je=j[Ne],z=Ne+1,pe=j[z];if(0>c(je,fe))z<ce&&0>c(pe,je)?(j[te]=pe,j[z]=fe,te=z):(j[te]=je,j[Ne]=fe,te=Ne);else if(z<ce&&0>c(pe,fe))j[te]=pe,j[z]=fe,te=z;else break e}}return q}function c(j,q){var fe=j.sortIndex-q.sortIndex;return fe!==0?fe:j.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();o.unstable_now=function(){return f.now()-m}}var g=[],p=[],S=1,v=null,_=3,y=!1,C=!1,N=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function R(j){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=j)s(p),q.sortIndex=q.expirationTime,t(g,q);else break;q=i(p)}}function D(j){if(N=!1,R(j),!C)if(i(g)!==null)C=!0,U||(U=!0,ee());else{var q=i(p);q!==null&&$(D,q.startTime-j)}}var U=!1,P=-1,T=5,O=-1;function k(){return M?!0:!(o.unstable_now()-O<T)}function G(){if(M=!1,U){var j=o.unstable_now();O=j;var q=!0;try{e:{C=!1,N&&(N=!1,I(P),P=-1),y=!0;var fe=_;try{t:{for(R(j),v=i(g);v!==null&&!(v.expirationTime>j&&k());){var te=v.callback;if(typeof te=="function"){v.callback=null,_=v.priorityLevel;var ce=te(v.expirationTime<=j);if(j=o.unstable_now(),typeof ce=="function"){v.callback=ce,R(j),q=!0;break t}v===i(g)&&s(g),R(j)}else s(g);v=i(g)}if(v!==null)q=!0;else{var _e=i(p);_e!==null&&$(D,_e.startTime-j),q=!1}}break e}finally{v=null,_=fe,y=!1}q=void 0}}finally{q?ee():U=!1}}}var ee;if(typeof V=="function")ee=function(){V(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,K=le.port2;le.port1.onmessage=G,ee=function(){K.postMessage(null)}}else ee=function(){b(G,0)};function $(j,q){P=b(function(){j(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(j){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var fe=_;_=q;try{return j()}finally{_=fe}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var fe=_;_=j;try{return q()}finally{_=fe}},o.unstable_scheduleCallback=function(j,q,fe){var te=o.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?te+fe:te):fe=te,j){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=fe+ce,j={id:S++,callback:q,priorityLevel:j,startTime:fe,expirationTime:ce,sortIndex:-1},fe>te?(j.sortIndex=fe,t(p,j),i(g)===null&&j===i(p)&&(N?(I(P),P=-1):N=!0,$(D,fe-te))):(j.sortIndex=ce,t(g,j),C||y||(C=!0,U||(U=!0,ee()))),j},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(j){var q=_;return function(){var fe=_;_=q;try{return j.apply(this,arguments)}finally{_=fe}}}})(Eh)),Eh}var bv;function dM(){return bv||(bv=1,Mh.exports=uM()),Mh.exports}var Th={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function fM(){if(Sv)return Ln;Sv=1;var o=Zm();function t(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),d=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function m(S,v,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:y===f?f:""+y,children:S,containerInfo:v,implementation:_}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.browser=function(S){return{$$typeof:d,_reason:S}},Ln.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return m(S,v,null,_)},Ln.flushSync=function(S){var v=g.T,_=s.p;try{if(g.T=null,s.p=2,S)return S()}finally{g.T=v,s.p=_,s.d.f()}},Ln.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Ln.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Ln.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,y=p(_,v.crossOrigin),C=typeof v.integrity=="string"?v.integrity:void 0,N=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:y,integrity:C,fetchPriority:N}):_==="script"&&s.d.X(S,{crossOrigin:y,integrity:C,fetchPriority:N,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ln.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=p(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(S)},Ln.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,y=p(_,v.crossOrigin);s.d.L(S,_,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ln.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=p(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(S)},Ln.requestFormReset=function(S){s.d.r(S)},Ln.unstable_batchedUpdates=function(S,v){return S(v)},Ln.useFormState=function(S,v,_){return g.H.useFormState(S,v,_)},Ln.useFormStatus=function(){return g.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var yv;function hM(){if(yv)return Th.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Th.exports=fM(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function mM(){if(Mv)return dl;Mv=1;var o=dM(),t=Zm(),i=hM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return g(l),e;if(u===r)return g(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var x=!1,w=l.child;w;){if(w===a){x=!0,a=l,r=u;break}if(w===r){x=!0,r=l,a=u;break}w=w.sibling}if(!x){for(w=u.child;w;){if(w===a){x=!0,a=u,r=l;break}if(w===r){x=!0,r=u,a=l;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,l,u))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function C(e){var n=[null,null],a=_(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var b=null,I=null;function V(e,n,a){return e===a?!0:e===n?(b=e,!0):!1}function R(e,n,a){return e===a?(I=e,!1):e===n?(I!==null&&(b=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function U(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,T=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),$=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),Ne=Symbol.for("react.legacy_hidden"),je=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),pe=Symbol.for("react.recoverable"),Ce=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=Ce&&e[Ce]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case le:return"Profiler";case ee:return"StrictMode";case q:return"Suspense";case fe:return"SuspenseList";case _e:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case $:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case j:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}var we=Array.isArray,ge=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},dt=[],gt=-1;function _t(e){return{current:e}}function $e(e){0>gt||(e.current=dt[gt],dt[gt]=null,gt--)}function it(e,n){gt++,dt[gt]=e.current,e.current=n}var It=_t(null),ln=_t(null),Ft=_t(null),nn=_t(null);function W(e,n){switch(it(Ft,n),it(ln,e),it(It,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ex(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ex(n),e=Tx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(It),it(It,e)}function sn(){$e(It),$e(ln),$e(Ft)}function zt(e){var n=e.memoizedState;n!==null&&(Gs._currentValue=n.memoizedState,it(nn,e)),n=It.current;var a=Tx(n,e.type);n!==a&&(it(ln,e),it(It,a))}function L(e){ln.current===e&&($e(It),$e(ln)),nn.current===e&&($e(nn),Gs._currentValue=st)}var E,ne;function oe(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+ne}var xe=!1;function Re(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(Ie){var Z=Ie}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(Ie){Z=Ie}Se=!1;try{var se=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Se=!0,new e}finally{Se&&(se!==void 0?Object.defineProperty(e.prototype,"props",se):delete e.prototype.props)}}}else{try{throw Error()}catch(Ie){Z=Ie}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(Ie){if(Ie&&Z&&typeof Ie.stack=="string")return[Ie.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),x=u[0],w=u[1];if(x&&w){var B=x.split(`
`),J=w.split(`
`);for(l=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;l<J.length&&!J[l].includes("DetermineComponentFrameRoot");)l++;if(r===B.length||l===J.length)for(r=B.length-1,l=J.length-1;1<=r&&0<=l&&B[r]!==J[l];)l--;for(;1<=r&&0<=l;r--,l--)if(B[r]!==J[l]){if(r!==1||l!==1)do if(r--,l--,0>l||B[r]!==J[l]){var de=`
`+B[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=l);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function Le(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return oe("Activity");case 30:return oe("ViewTransition");default:return""}}function ve(e){try{var n="",a=null;do n+=Le(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,Ue=o.unstable_scheduleCallback,tt=o.unstable_cancelCallback,ze=o.unstable_shouldYield,Be=o.unstable_requestPaint,Xe=o.unstable_now,rt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,X=o.unstable_UserBlockingPriority,De=o.unstable_NormalPriority,Me=o.unstable_LowPriority,Oe=o.unstable_IdlePriority,Ve=o.log,Te=o.unstable_setDisableYieldValue,et=null,ke=null;function Ut(e){if(typeof Ve=="function"&&Te(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(et,e)}catch{}}var ht=Math.clz32?Math.clz32:Yu,ei=Math.log,hi=Math.LN2;function Yu(e){return e>>>=0,e===0?32:31-(ei(e)/hi|0)|0}var is=256,Sr=262144,za=4194304;function ha(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~u,r!==0?l=ha(r):(x&=w,x!==0?l=ha(x):a||(a=w&~e,a!==0&&(l=ha(a))))):(w=r&~u,w!==0?l=ha(w):x!==0?l=ha(x):a||(a=r&~e,a!==0&&(l=ha(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Fa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ji(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ht(a),l=1<<r;n|=e[r],a&=~l}return n}function go(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xo(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function as(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Xi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ol(e,n,a,r,l,u){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var de=31-ht(a),Se=1<<de;w[de]=0,B[de]=-1;var Z=J[de];if(Z!==null)for(J[de]=null,de=0;de<Z.length;de++){var se=Z[de];se!==null&&(se.lane&=-536870913)}a&=~Se}r!==0&&Mr(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~n))}function Mr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ht(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function vo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ht(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function _o(e,n){var a=n&-n;return a=(a&42)!==0?1:bo(a),(a&(e.suspendedLanes|n))!==0?0:a}function bo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function So(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pl(){var e=Ae.p;return e!==0?e:(e=window.event,e===void 0?32:lv(e.type))}function Il(e,n){var a=Ae.p;try{return Ae.p=e,n()}finally{Ae.p=a}}var mi=Math.random().toString(36).slice(2),A="__reactFiber$"+mi,F="__reactProps$"+mi,he="__reactContainer$"+mi,ae="__reactEvents$"+mi,re="__reactListeners$"+mi,Fe="__reactHandles$"+mi,qe="__reactResources$"+mi,Pe="__reactMarker$"+mi,Ke="__reactLoad$"+mi;function Qe(e){delete e[A],delete e[F],delete e[re],delete e[Fe]}function lt(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[he]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=kx(e);e!==null;){if(a=e[A])return a;e=kx(e)}return n}e=a,a=e.parentNode}return null}function mt(e){if(e=e[A]||e[he]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function At(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mt(e){e[Pe]=!0}function Kt(e){e[Ke]=void 0}var jt=new Set,bn={};function He(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(bn[e]=n,e=0;e<n.length;e++)jt.add(n[e])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hn={},ti={};function Wi(e){return Ee.call(ti,e)?!0:Ee.call(Hn,e)?!1:Lt.test(e)?ti[e]=!0:(Hn[e]=!0,!1)}var Et=!1;function Gt(){var e=Et;return Et=!1,e}function $t(e,n,a){if(Wi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ni(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Rt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ma(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(x){a=""+x,u.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zu(e){if(!e._valueTracker){var n=ma(e)?"checked":"value";e._valueTracker=Bl(e,n,""+e[n])}}function fp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ma(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Cb=/[\n"\\]/g;function pi(e){return e.replace(Cb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ku(e,n,a,r,l,u,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?Qu(e,un(e.value)):Qu(e,un(n)):a!=null?Qu(e,un(a)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+un(w):e.removeAttribute("name")}function hp(e,n,a,r,l,u,x,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Zu(e);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Zu(e)}function Qu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function rs(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function mp(e,n,a){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+un(a):""}function pp(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(we(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=un(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Zu(e)}function ss(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gp(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Rb.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function xp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Et=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(gp(e,l,r),Et=!0)}else for(var u in n)n.hasOwnProperty(u)&&gp(e,u,n[u])}function Ju(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Db=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(e){return Db.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var $u=null;function ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,ls=null;function vp(e){var n=mt(e);if(n&&(e=n.stateNode)){var a=e[F]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ku(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[F]||null;if(!l)throw Error(s(90));Ku(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&fp(r)}break e;case"textarea":mp(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&rs(e,!!a.multiple,n,!1)}}}var td=!1;function _p(e,n,a){if(td)return e(n,a);td=!0;try{var r=e(n);return r}finally{if(td=!1,(os!==null||ls!==null)&&(zc(),os&&(n=os,e=ls,ls=os=null,vp(n),e)))for(n=0;n<e.length;n++)vp(e[n])}}function yo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[F]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=!1;if(pa)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){nd=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{nd=!1}var Ha=null,id=null,Fl=null;function bp(){if(Fl)return Fl;var e,n=id,a=n.length,r,l="value"in Ha?Ha.value:Ha.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===l[u-r];r++);return Fl=l.slice(e,1<r?1-r:void 0)}function Hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gl(){return!0}function Sp(){return!1}function Gn(e){function n(a,r,l,u,x){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Gl:Sp,this.isPropagationStopped=Sp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Gn(Ga),Eo=P({},Ga,{view:0,detail:0}),Ub=Gn(Eo),ad,rd,To,Vl=P({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(ad=e.screenX-To.screenX,rd=e.screenY-To.screenY):rd=ad=0,To=e),ad)},movementY:function(e){return"movementY"in e?e.movementY:rd}}),yp=Gn(Vl),Lb=P({},Vl,{dataTransfer:0}),Ob=Gn(Lb),Pb=P({},Eo,{relatedTarget:0}),sd=Gn(Pb),Ib=P({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Bb=Gn(Ib),zb=P({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fb=Gn(zb),Hb=P({},Ga,{data:0}),Mp=Gn(Hb),Gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vb[e])?!!n[e]:!1}function od(){return jb}var Xb=P({},Eo,{key:function(e){if(e.key){var n=Gb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wb=Gn(Xb),qb=P({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=Gn(qb),Yb=P({},Ga,{submitter:0}),Zb=Gn(Yb),Kb=P({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),Qb=Gn(Kb),Jb=P({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),$b=Gn(Jb),eS=P({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=Gn(eS),nS=P({},Ga,{newState:0,oldState:0,source:0}),iS=Gn(nS),aS=[9,13,27,32],ld=pa&&"CompositionEvent"in window,Ao=null;pa&&"documentMode"in document&&(Ao=document.documentMode);var rS=pa&&"TextEvent"in window&&!Ao,Tp=pa&&(!ld||Ao&&8<Ao&&11>=Ao),Ap=" ",wp=!1;function Cp(e,n){switch(e){case"keyup":return aS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cs=!1;function sS(e,n){switch(e){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(wp=!0,Ap);case"textInput":return e=n.data,e===Ap&&wp?null:e;default:return null}}function oS(e,n){if(cs)return e==="compositionend"||!ld&&Cp(e,n)?(e=bp(),Fl=id=Ha=null,cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tp&&n.locale!=="ko"?null:n.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!lS[e.type]:n==="textarea"}function Dp(e,n,a,r){os?ls?ls.push(r):ls=[r]:os=r,n=jc(n,"onChange"),0<n.length&&(a=new kl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var wo=null,Co=null;function cS(e){vx(e,0)}function jl(e){var n=Ye(e);if(fp(n))return e}function Up(e,n){if(e==="change")return n}var Lp=!1;if(pa){var cd;if(pa){var ud="oninput"in document;if(!ud){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),ud=typeof Op.oninput=="function"}cd=ud}else cd=!1;Lp=cd&&(!document.documentMode||9<document.documentMode)}function Pp(){wo&&(wo.detachEvent("onpropertychange",Ip),Co=wo=null)}function Ip(e){if(e.propertyName==="value"&&jl(Co)){var n=[];Dp(n,Co,e,ed(e)),_p(cS,n)}}function uS(e,n,a){e==="focusin"?(Pp(),wo=n,Co=a,wo.attachEvent("onpropertychange",Ip)):e==="focusout"&&Pp()}function dS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(Co)}function fS(e,n){if(e==="click")return jl(n)}function hS(e,n){if(e==="input"||e==="change")return jl(n)}function mS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:mS;function Ro(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Ee.call(n,l)||!ii(e[l],n[l]))return!1}return!0}function dd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Bp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bp(a)}}function Fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=dd(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=dd(e.document)}return n}function fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var pS=pa&&"documentMode"in document&&11>=document.documentMode,us=null,hd=null,No=null,md=!1;function Gp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;md||us==null||us!==dd(r)||(r=us,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Ro(No,r)||(No=r,r=jc(hd,"onSelect"),0<r.length&&(n=new kl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=us)))}function Er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ds={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionrun:Er("Transition","TransitionRun"),transitionstart:Er("Transition","TransitionStart"),transitioncancel:Er("Transition","TransitionCancel"),transitionend:Er("Transition","TransitionEnd")},pd={},kp={};pa&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Tr(e){if(pd[e])return pd[e];if(!ds[e])return e;var n=ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return pd[e]=n[a];return e}var Vp=Tr("animationend"),jp=Tr("animationiteration"),Xp=Tr("animationstart"),gS=Tr("transitionrun"),xS=Tr("transitionstart"),vS=Tr("transitioncancel"),Wp=Tr("transitionend"),qp=new Map,gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gd.push("scrollEnd");function Ni(e,n){qp.set(e,n),He(n,[e])}var _S=0;function ga(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Oi.identifierPrefix;var a=_S++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Yp(e){if(e==null||typeof e=="string")return e;var n=null,a=Ds;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function xa(e,n){return e=Yp(e),n=Yp(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],fs=0,xd=0;function Wl(){for(var e=fs,n=xd=fs=0;n<e;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var l=gi[n];gi[n++]=null;var u=gi[n];if(gi[n++]=null,r!==null&&l!==null){var x=r.pending;x===null?l.next=l:(l.next=x.next,x.next=l),r.pending=l}u!==0&&Zp(a,l,u)}}function ql(e,n,a,r){gi[fs++]=e,gi[fs++]=n,gi[fs++]=a,gi[fs++]=r,xd|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vd(e,n,a,r){return ql(e,n,a,r),Yl(e)}function Ar(e,n){return ql(e,null,null,n),Yl(e)}function Zp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-ht(a),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function Yl(e){if(50<Jo)throw Jo=0,Bc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hs={};function bS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,r){return new bS(e,n,a,r)}function _d(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Zl(e,n,a,r,l,u){var x=0;if(r=e,typeof r=="function")_d(r)&&(x=1);else if(typeof r=="string")x=Yy(e,a,It.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case _e:return e=qn(31,a,n,l),e.elementType=_e,e.lanes=u,e;case G:return wr(a.children,l,u,n);case ee:x=8,l|=24;break;case le:return e=qn(12,a,n,l|2),e.elementType=le,e.lanes=u,e;case q:return e=qn(13,a,n,l),e.elementType=q,e.lanes=u,e;case fe:return e=qn(19,a,n,l),e.elementType=fe,e.lanes=u,e;case Ne:case z:return e=l|32,e=qn(30,a,n,e),e.elementType=z,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:x=10;break e;case K:x=9;break e;case j:x=11;break e;case te:x=14;break e;case ce:x=16,r=null;break e}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=qn(x,a,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function wr(e,n,a,r){return e=qn(7,e,r,n),e.lanes=a,e}function bd(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Qp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function Sd(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Jp=new WeakMap;function xi(e,n){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ve(n)},Jp.set(e,n),n)}return{value:e,source:n,stack:ve(n)}}var ms=[],ps=0,Kl=null,Do=0,vi=[],_i=0,ka=null,Yi=1,Zi="";function _a(e,n){ms[ps++]=Do,ms[ps++]=Kl,Kl=e,Do=n}function $p(e,n,a){vi[_i++]=Yi,vi[_i++]=Zi,vi[_i++]=ka,ka=e;var r=Yi;e=Zi;var l=32-ht(r)-1;r&=~(1<<l),a+=1;var u=32-ht(n)+l;if(30<u){var x=l-l%5;u=(r&(1<<x)-1).toString(32),r>>=x,l-=x,Yi=1<<32-ht(n)+l|a<<l|r,Zi=u+e}else Yi=1<<u|a<<l|r,Zi=e}function Ql(e){e.return!==null&&(_a(e,1),$p(e,1,0))}function yd(e){for(;e===Kl;)Kl=ms[--ps],ms[ps]=null,Do=ms[--ps],ms[ps]=null;for(;e===ka;)ka=vi[--_i],vi[_i]=null,Zi=vi[--_i],vi[_i]=null,Yi=vi[--_i],vi[_i]=null}function eg(e,n){vi[_i++]=Yi,vi[_i++]=Zi,vi[_i++]=ka,Yi=n.id,Zi=n.overflow,ka=e}var En=null,en=null,Tt=!1,Va=null,bi=!1,Md=Error(s(519));function ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(xi(n,e)),Md}function tg(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[F]=r,a){case"dialog":Ct("cancel",n),Ct("close",n);break;case"iframe":case"object":case"embed":Ct("load",n);break;case"video":case"audio":for(a=0;a<el.length;a++)Ct(el[a],n);break;case"source":Ct("error",n);break;case"img":case"image":case"link":Ct("error",n),Ct("load",n);break;case"details":Ct("toggle",n);break;case"input":Ct("invalid",n),hp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ct("invalid",n);break;case"textarea":Ct("invalid",n),pp(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||yx(n.textContent,a)?(r.popover!=null&&(Ct("beforetoggle",n),Ct("toggle",n)),r.onScroll!=null&&Ct("scroll",n),r.onScrollEnd!=null&&Ct("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||ja(e,!0)}function Jl(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:En=En.return}}function gs(e){if(e!==En)return!1;if(!Tt)return Jl(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&en&&ja(e),Jl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=Gx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));en=Gx(e)}else n===27?(n=en,sr(e.type)?(e=ch,ch=null,en=e):en=n):en=En?yi(e.stateNode.nextSibling):null;return!0}function Cr(){en=En=null,Tt=!1}function Ed(){var e=Va;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Va=null),e}function Uo(e){Va===null?Va=[e]:Va.push(e)}var Td=_t(null),Rr=null,ba=null;function Xa(e,n,a){it(Td,n._currentValue),n._currentValue=a}function Sa(e){e._currentValue=Td.current,$e(Td)}function $l(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Ad(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var x=l.child;u=u.firstContext;e:for(;u!==null;){var w=u;u=l;for(var B=0;B<n.length;B++)if(w.context===n[B]){u.lanes|=a,w=u.alternate,w!==null&&(w.lanes|=a),$l(u.return,a,e),r||(x=null);break e}u=w.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(s(341));x.lanes|=a,u=x.alternate,u!==null&&(u.lanes|=a),$l(x,a,e),x=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,x=l.alternate,x!==null&&(x.lanes|=a),$l(l.return,a,e),x=l.child,x=x!==null?x.sibling:null):x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===e){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Nr(e,n,a,r){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=l.type;ii(l.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(l===nn.current){if(x=l.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Gs):e=[Gs])}l=l.return}return e!==null&&Ad(n,e,a,r),n.flags|=262144,e!==null}function ec(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dr(e){Rr=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return ng(Rr,e)}function tc(e,n){return Rr===null&&Dr(e),ng(e,n)}function ng(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(s(308));ba=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ba=ba.next=n;return a}var SS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},yS=o.unstable_scheduleCallback,MS=o.unstable_NormalPriority,pn={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wd(){return{controller:new SS,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&yS(MS,function(){e.controller.abort()})}function ig(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Oo=null;function ES(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Po=null,Cd=0,Ur=0,xs=null;function TS(e,n){if(Po===null){var a=Po=[];Cd=0,Ur=Xf(),xs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cd++,n.then(ag,ag),n}function ag(){if(--Cd===0&&(Oo=null,Po!==null)){xs!==null&&(xs.status="fulfilled");var e=Po;Po=null,Ur=0,xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function AS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var rg=ge.S;ge.S=function(e,n){if(Q0=Xe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&TS(e,n),Oo!==null)for(var a=Ps;a!==null;)ig(a,Oo),a=a.next;if(a=e.types,a!==null){for(var r=Ps;r!==null;)ig(r,a),r=r.next;if(Ur!==0){r=Oo,r===null&&(r=Oo=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}rg!==null&&rg(e,n)};var Lr=_t(null);function Rd(){var e=Lr.current;return e!==null?e:Jt.pooledCache}function nc(e,n){n===null?it(Lr,Lr.current):it(Lr,n.pool)}function sg(){var e=Rd();return e===null?null:{parent:pn._currentValue,pool:e}}var vs=Error(s(460)),Nd=Error(s(474)),ic=Error(s(542)),ac={then:function(){}};function og(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ug(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ug(e),e}throw Pr=n,vs}}function Or(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Pr=a,vs):a}}var Pr=null;function cg(){if(Pr===null)throw Error(s(459));var e=Pr;return Pr=null,e}function ug(e){if(e===vs||e===ic)throw Error(s(483))}var _s=null,Io=0;function rc(e){var n=Io;return Io+=1,_s===null&&(_s=[]),lg(_s,e,n)}function Wa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function sc(e,n){throw n.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dg(e){function n(Q,H){if(e){var ie=Q.deletions;ie===null?(Q.deletions=[H],Q.flags|=16):ie.push(H)}}function a(Q,H){if(!e)return null;for(;H!==null;)n(Q,H),H=H.sibling;return null}function r(Q){for(var H=new Map;Q!==null;)Q.key===null?H.set(Q.index,Q):H.set(Q.key,Q),Q=Q.sibling;return H}function l(Q,H){return Q=va(Q,H),Q.index=0,Q.sibling=null,Q}function u(Q,H,ie){return Q.index=ie,e?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<H?(Q.flags|=2,H):ie):(Q.flags|=134217730,H)):(Q.flags|=1048576,H)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=134217730),Q}function w(Q,H,ie,be){return H===null||H.tag!==6?(H=bd(ie,Q.mode,be),H.return=Q,H):(H=l(H,ie),H.return=Q,H)}function B(Q,H,ie,be){var Ze=ie.type;return Ze===G?(Q=de(Q,H,ie.props.children,be,ie.key),Wa(Q,ie),Q):H!==null&&(H.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ce&&Or(Ze)===H.type)?(H=l(H,ie.props),Wa(H,ie),H.return=Q,H):(H=Zl(ie.type,ie.key,ie.props,null,Q.mode,be),Wa(H,ie),H.return=Q,H)}function J(Q,H,ie,be){return H===null||H.tag!==4||H.stateNode.containerInfo!==ie.containerInfo||H.stateNode.implementation!==ie.implementation?(H=Sd(ie,Q.mode,be),H.return=Q,H):(H=l(H,ie.children||[]),H.return=Q,H)}function de(Q,H,ie,be,Ze){return H===null||H.tag!==7?(H=wr(ie,Q.mode,be,Ze),H.return=Q,H):(H=l(H,ie),H.return=Q,H)}function Se(Q,H,ie){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=bd(""+H,Q.mode,ie),H.return=Q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case O:return ie=Zl(H.type,H.key,H.props,null,Q.mode,ie),Wa(ie,H),ie.return=Q,ie;case k:return H=Sd(H,Q.mode,ie),H.return=Q,H;case ce:return H=Or(H),Se(Q,H,ie)}if(we(H)||Y(H))return H=wr(H,Q.mode,ie,null),H.return=Q,H;if(typeof H.then=="function")return Se(Q,rc(H),ie);if(H.$$typeof===$)return Se(Q,tc(Q,H),ie);sc(Q,H)}return null}function Z(Q,H,ie,be){var Ze=H!==null?H.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Ze!==null?null:w(Q,H,""+ie,be);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case O:return ie.key===Ze?B(Q,H,ie,be):null;case k:return ie.key===Ze?J(Q,H,ie,be):null;case ce:return ie=Or(ie),Z(Q,H,ie,be)}if(we(ie)||Y(ie))return Ze!==null?null:de(Q,H,ie,be,null);if(typeof ie.then=="function")return Z(Q,H,rc(ie),be);if(ie.$$typeof===$)return Z(Q,H,tc(Q,ie),be);sc(Q,ie)}return null}function se(Q,H,ie,be,Ze){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Q=Q.get(ie)||null,w(H,Q,""+be,Ze);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case O:return Q=Q.get(be.key===null?ie:be.key)||null,B(H,Q,be,Ze);case k:return Q=Q.get(be.key===null?ie:be.key)||null,J(H,Q,be,Ze);case ce:return be=Or(be),se(Q,H,ie,be,Ze)}if(we(be)||Y(be))return Q=Q.get(ie)||null,de(H,Q,be,Ze,null);if(typeof be.then=="function")return se(Q,H,ie,rc(be),Ze);if(be.$$typeof===$)return se(Q,H,ie,tc(H,be),Ze);sc(H,be)}return null}function Ie(Q,H,ie,be){for(var Ze=null,Dt=null,at=H,ot=H=0,vn=null;at!==null&&ot<ie.length;ot++){at.index>ot?(vn=at,at=null):vn=at.sibling;var Bt=Z(Q,at,ie[ot],be);if(Bt===null){at===null&&(at=vn);break}e&&at&&Bt.alternate===null&&n(Q,at),H=u(Bt,H,ot),Dt===null?Ze=Bt:Dt.sibling=Bt,Dt=Bt,at=vn}if(ot===ie.length)return a(Q,at),Tt&&_a(Q,ot),Ze;if(at===null){for(;ot<ie.length;ot++)at=Se(Q,ie[ot],be),at!==null&&(H=u(at,H,ot),Dt===null?Ze=at:Dt.sibling=at,Dt=at);return Tt&&_a(Q,ot),Ze}for(at=r(at);ot<ie.length;ot++)vn=se(at,Q,ot,ie[ot],be),vn!==null&&(e&&(Bt=vn.alternate,Bt!==null&&at.delete(Bt.key===null?ot:Bt.key)),H=u(vn,H,ot),Dt===null?Ze=vn:Dt.sibling=vn,Dt=vn);return e&&at.forEach(function(dr){return n(Q,dr)}),Tt&&_a(Q,ot),Ze}function Je(Q,H,ie,be){if(ie==null)throw Error(s(151));for(var Ze=null,Dt=null,at=H,ot=H=0,vn=null,Bt=ie.next();at!==null&&!Bt.done;ot++,Bt=ie.next()){at.index>ot?(vn=at,at=null):vn=at.sibling;var dr=Z(Q,at,Bt.value,be);if(dr===null){at===null&&(at=vn);break}e&&at&&dr.alternate===null&&n(Q,at),H=u(dr,H,ot),Dt===null?Ze=dr:Dt.sibling=dr,Dt=dr,at=vn}if(Bt.done)return a(Q,at),Tt&&_a(Q,ot),Ze;if(at===null){for(;!Bt.done;ot++,Bt=ie.next())Bt=Se(Q,Bt.value,be),Bt!==null&&(H=u(Bt,H,ot),Dt===null?Ze=Bt:Dt.sibling=Bt,Dt=Bt);return Tt&&_a(Q,ot),Ze}for(at=r(at);!Bt.done;ot++,Bt=ie.next())Bt=se(at,Q,ot,Bt.value,be),Bt!==null&&(e&&(vn=Bt.alternate,vn!==null&&at.delete(vn.key===null?ot:vn.key)),H=u(Bt,H,ot),Dt===null?Ze=Bt:Dt.sibling=Bt,Dt=Bt);return e&&at.forEach(function(sM){return n(Q,sM)}),Tt&&_a(Q,ot),Ze}function vt(Q,H,ie,be){if(typeof ie=="object"&&ie!==null&&ie.type===G&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case O:e:{for(var Ze=ie.key;H!==null;){if(H.key===Ze){if(Ze=ie.type,Ze===G){if(H.tag===7){a(Q,H.sibling),be=l(H,ie.props.children),Wa(be,ie),be.return=Q,Q=be;break e}}else if(H.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ce&&Or(Ze)===H.type){a(Q,H.sibling),be=l(H,ie.props),Wa(be,ie),be.return=Q,Q=be;break e}a(Q,H);break}else n(Q,H);H=H.sibling}ie.type===G?(be=wr(ie.props.children,Q.mode,be,ie.key),Wa(be,ie),be.return=Q,Q=be):(be=Zl(ie.type,ie.key,ie.props,null,Q.mode,be),Wa(be,ie),be.return=Q,Q=be)}return x(Q);case k:e:{for(Ze=ie.key;H!==null;){if(H.key===Ze)if(H.tag===4&&H.stateNode.containerInfo===ie.containerInfo&&H.stateNode.implementation===ie.implementation){a(Q,H.sibling),be=l(H,ie.children||[]),be.return=Q,Q=be;break e}else{a(Q,H);break}else n(Q,H);H=H.sibling}be=Sd(ie,Q.mode,be),be.return=Q,Q=be}return x(Q);case ce:return ie=Or(ie),vt(Q,H,ie,be)}if(we(ie))return Ie(Q,H,ie,be);if(Y(ie)){if(Ze=Y(ie),typeof Ze!="function")throw Error(s(150));return ie=Ze.call(ie),Je(Q,H,ie,be)}if(typeof ie.then=="function")return vt(Q,H,rc(ie),be);if(ie.$$typeof===$)return vt(Q,H,tc(Q,ie),be);sc(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,H!==null&&H.tag===6?(a(Q,H.sibling),be=l(H,ie),be.return=Q,Q=be):(a(Q,H),be=bd(ie,Q.mode,be),be.return=Q,Q=be),x(Q)):a(Q,H)}return function(Q,H,ie,be){try{Io=0;var Ze=vt(Q,H,ie,be);return _s=null,Ze}catch(at){if(at===vs||at===ic)throw at;var Dt=qn(29,at,null,Q.mode);return Dt.lanes=be,Dt.return=Q,Dt}finally{}}}var Ir=dg(!0),fg=dg(!1),qa=!1;function Dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ud(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(kt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Yl(e),Zp(e,null,a),n}return ql(e,r,n,a),Yl(e)}function Bo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,vo(e,a)}}function Ld(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=x:u=u.next=x,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Od=!1;function zo(){if(Od){var e=xs;if(e!==null)throw e}}function Fo(e,n,a,r){Od=!1;var l=e.updateQueue;qa=!1;var u=l.firstBaseUpdate,x=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var B=w,J=B.next;B.next=null,x===null?u=J:x.next=J,x=B;var de=e.alternate;de!==null&&(de=de.updateQueue,w=de.lastBaseUpdate,w!==x&&(w===null?de.firstBaseUpdate=J:w.next=J,de.lastBaseUpdate=B))}if(u!==null){var Se=l.baseState;x=0,de=J=B=null,w=u;do{var Z=w.lane&-536870913,se=Z!==w.lane;if(se?(Nt&Z)===Z:(r&Z)===Z){Z!==0&&Z===Ur&&(Od=!0),de!==null&&(de=de.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ie=e,Je=w;Z=n;var vt=a;switch(Je.tag){case 1:if(Ie=Je.payload,typeof Ie=="function"){Se=Ie.call(vt,Se,Z);break e}Se=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=Je.payload,Z=typeof Ie=="function"?Ie.call(vt,Se,Z):Ie,Z==null)break e;Se=P({},Se,Z);break e;case 2:qa=!0}}Z=w.callback,Z!==null&&(e.flags|=64,se&&(e.flags|=8192),se=l.callbacks,se===null?l.callbacks=[Z]:se.push(Z))}else se={lane:Z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},de===null?(J=de=se,B=Se):de=de.next=se,x|=Z;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;se=w,w=se.next,se.next=null,l.lastBaseUpdate=se,l.shared.pending=null}}while(!0);de===null&&(B=Se),l.baseState=B,l.firstBaseUpdate=J,l.lastBaseUpdate=de,u===null&&(l.shared.lanes=0),nr|=x,e.lanes=x,e.memoizedState=Se}}function hg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function mg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hg(a[e],n)}var Ka=_t(null),oc=_t(0);function pg(e,n){e=Aa,it(oc,e),it(Ka,n),Aa=e|n.baseLanes}function Pd(){it(oc,Aa),it(Ka,Ka.current)}function Id(){Aa=oc.current,$e(Ka),$e(oc)}var Rn=_t(null),Pn=null;function Qa(e){var n=e.alternate;it(Nn,Nn.current&1),it(Rn,e),Pn===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(Pn=e)}function Bd(e){it(Nn,Nn.current),it(Rn,e),Pn===null&&(Pn=e)}function gg(e){e.tag===22?(it(Nn,Nn.current),it(Rn,e),Pn===null&&(Pn=e)):Ja()}function Ja(){it(Nn,Nn.current),it(Rn,Rn.current)}function ai(e){$e(Rn),Pn===e&&(Pn=null),$e(Nn)}var Nn=_t(0);function Ho(e,n){it(Rn,Rn.current),it(Nn,n)}function zd(e){$e(Nn),$e(Rn),Pn===e&&(Pn=null)}function lc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||oh(a)||lh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,xt=null,Qt=null,gn=null,cc=!1,bs=!1,Br=!1,uc=0,Go=0,Ss=null,wS=0;function dn(){throw Error(s(321))}function Fd(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ii(e[a],n[a]))return!1;return!0}function Hd(e,n,a,r,l,u){return ya=u,xt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ge.H=e===null||e.memoizedState===null?$g:e0,Br=!1,u=a(r,l),Br=!1,bs&&(u=vg(n,a,r,l)),xg(e),u}function xg(e){ge.H=xc;var n=Qt!==null&&Qt.next!==null;if(ya=0,gn=Qt=xt=null,cc=!1,Go=0,Ss=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&ec(e)&&(xn=!0))}function vg(e,n,a,r){xt=e;var l=0;do{if(bs&&(Ss=null),Go=0,bs=!1,25<=l)throw Error(s(301));if(l+=1,gn=Qt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ge.H=PS,u=n(a,r)}while(bs);return u}function CS(){var e=ge.H,n=e.useState()[0];return n=typeof n.then=="function"?ko(n):n,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(xt.flags|=1024),n}function Gd(){var e=uc!==0;return uc=0,e}function kd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Vd(e){if(cc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cc=!1}ya=0,gn=Qt=xt=null,bs=!1,Go=uc=0,Ss=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?xt.memoizedState=gn=e:gn=gn.next=e,gn}function mn(){if(Qt===null){var e=xt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var n=gn===null?xt.memoizedState:gn.next;if(n!==null)gn=n,Qt=e;else{if(e===null)throw xt.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},gn===null?xt.memoizedState=gn=e:gn=gn.next=e}return gn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var n=Go;return Go+=1,Ss===null&&(Ss=[]),e=lg(Ss,e,n),n=xt,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,ge.H=n===null||n.memoizedState===null?$g:e0),e}function fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===pe)return;if(e.$$typeof===$)return Cn(e)}throw Error(s(438,String(e)))}function jd(e){var n=null,a=xt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=xt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dc(),xt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=je;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function hc(e){var n=mn();return Xd(n,Qt,e)}function Xd(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var x=l.next;l.next=u.next,u.next=x}n.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var w=x=null,B=null,J=n,de=!1;do{var Se=J.lane&-536870913;if(Se!==J.lane?(Nt&Se)===Se:(ya&Se)===Se){var Z=J.revertLane;if(Z===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),Se===Ur&&(de=!0);else if((ya&Z)===Z){J=J.next,Z===Ur&&(de=!0);continue}else Se={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(w=B=Se,x=u):B=B.next=Se,xt.lanes|=Z,nr|=Z;Se=J.action,Br&&a(u,Se),u=J.hasEagerState?J.eagerState:a(u,Se)}else Z={lane:Se,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(w=B=Z,x=u):B=B.next=Z,xt.lanes|=Se,nr|=Se;J=J.next}while(J!==null&&J!==n);if(B===null?x=u:B.next=w,!ii(u,e.memoizedState)&&(xn=!0,de&&(a=xs,a!==null)))throw a;e.memoizedState=u,e.baseState=x,e.baseQueue=B,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wd(e){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var x=l=l.next;do u=e(u,x.action),x=x.next;while(x!==l);ii(u,n.memoizedState)||(xn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function _g(e,n,a){var r=xt,l=mn(),u=Tt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ii((Qt||l).memoizedState,a);if(x&&(l.memoizedState=a,xn=!0),l=l.queue,Zd(yg.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,ys(e?9:8,{destroy:void 0},Sg.bind(null,r,l,a,n),null),e){if(r.flags|=2048,Jt===null)throw Error(s(349));u||(ya&127)!==0||bg(r,n,a)}return a}function bg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xt.updateQueue,n===null?(n=dc(),xt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sg(e,n,a,r){n.value=a,n.getSnapshot=r,Mg(n)&&Eg(e)}function yg(e,n,a){return a(function(){Mg(n)&&Eg(e)})}function Mg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ii(e,a)}catch{return!0}}function Eg(e){var n=Ar(e,2);n!==null&&Qn(n,e,2)}function qd(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Br){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function Tg(e,n,a,r){return e.baseState=a,Xd(e,Qt,typeof r=="function"?r:Ma)}function RS(e,n,a,r,l){if(gc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};ge.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,Ag(n,u)):(u.next=a.next,n.pending=a.next=u)}}function Ag(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var u=ge.T,x={};x.types=u!==null?u.types:null,ge.T=x;try{var w=a(l,r),B=ge.S;B!==null&&B(x,w),wg(e,n,w)}catch(J){Yd(e,n,J)}finally{u!==null&&x.types!==null&&(u.types=x.types),ge.T=u}}else try{u=a(l,r),wg(e,n,u)}catch(J){Yd(e,n,J)}}function wg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Cg(e,n,r)},function(r){return Yd(e,n,r)}):Cg(e,n,a)}function Cg(e,n,a){n.status="fulfilled",n.value=a,Rg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ag(e,a)))}function Yd(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Rg(n),n=n.next;while(n!==r)}e.action=null}function Rg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ng(e,n){return n}function Dg(e,n){if(Tt){var a=Jt.formState;if(a!==null){e:{var r=xt;if(Tt){if(en){t:{for(var l=en,u=bi;l.nodeType!==8;){if(!u){l=null;break t}if(l=yi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){en=yi(l.nextSibling),r=l.data==="F!";break e}}ja(r)}r=!1}r&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ng,lastRenderedState:n},a.queue=r,a=Kg.bind(null,xt,r),r.dispatch=a,r=qd(!1),u=ef.bind(null,xt,!1,r.queue),r=kn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=RS.bind(null,xt,l,u,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function Ug(e){var n=mn();return Lg(n,Qt,e)}function Lg(e,n,a){if(n=Xd(e,n,Ng)[0],e=hc(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ko(n)}catch(x){throw x===vs?ic:x}else r=n;n=mn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(xt.flags|=2048,ys(9,{destroy:void 0},NS.bind(null,l,a),null)),[r,u,e]}function NS(e,n){e.action=n}function Og(e){var n=mn(),a=Qt;if(a!==null)return Lg(n,a,e);mn(),n=n.memoizedState,a=mn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function ys(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=xt.updateQueue,n===null&&(n=dc(),xt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Pg(){return mn().memoizedState}function mc(e,n,a,r){var l=kn();xt.flags|=e,l.memoizedState=ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function pc(e,n,a,r){var l=mn();r=r===void 0?null:r;var u=l.memoizedState.inst;Qt!==null&&r!==null&&Fd(r,Qt.memoizedState.deps)?l.memoizedState=ys(n,u,a,r):(xt.flags|=e,l.memoizedState=ys(1|n,u,a,r))}function Ig(e,n){mc(8390656,8,e,n)}function Zd(e,n){pc(2048,8,e,n)}function DS(e){xt.flags|=4;var n=xt.updateQueue;if(n===null)n=dc(),xt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Bg(e){var n=mn().memoizedState;return DS({ref:n,nextImpl:e}),function(){if((kt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function zg(e,n){return pc(4,2,e,n)}function Fg(e,n){return pc(4,4,e,n)}function Hg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gg(e,n,a){a=a!=null?a.concat([e]):null,pc(4,4,Hg.bind(null,n,e),a)}function Kd(){}function kg(e,n){var a=mn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fd(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Vg(e,n){var a=mn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fd(n,r[1]))return r[0];if(r=e(),Br){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[r,n],r}function Qd(e,n,a){return a===void 0||(ya&1073741824)!==0&&(Nt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$0(),xt.lanes|=e,nr|=e,a)}function jg(e,n,a,r){return ii(a,n)?a:Ka.current!==null?(e=Qd(e,a,r),ii(e,n)||(xn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(Nt&261930)===0?(xn=!0,e.memoizedState=a):(e=$0(),xt.lanes|=e,nr|=e,n)}function Xg(e,n,a,r,l){var u=Ae.p;Ae.p=u!==0&&8>u?u:8;var x=ge.T,w={};w.types=x!==null?x.types:null,ge.T=w,ef(e,!1,n,a);try{var B=l(),J=ge.S;if(J!==null&&J(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=AS(B,r);Vo(e,n,de,li(e))}else Vo(e,n,r,li(e))}catch(Se){Vo(e,n,{then:function(){},status:"rejected",reason:Se},li())}finally{Ae.p=u,x!==null&&w.types!==null&&(x.types=w.types),ge.T=x}}function US(){}function Jd(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=Wg(e).queue;Xg(e,l,n,st,a===null?US:function(){return qg(e),a(r)})}function Wg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qg(e){var n=Wg(e);n.next===null&&(n=e.alternate.memoizedState),Vo(e,n.next.queue,{},li())}function $d(){return Cn(Gs)}function Yg(){return mn().memoizedState}function Zg(){return mn().memoizedState}function LS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Ya(a);var r=Za(n,e,a);r!==null&&(Qn(r,n,a),Bo(r,n,a)),n={cache:wd()},e.payload=n;return}n=n.return}}function OS(e,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gc(e)?Qg(n,a):(a=vd(e,n,a,r),a!==null&&(Qn(a,e,r),Jg(a,n,r)))}function Kg(e,n,a){var r=li();Vo(e,n,a,r)}function Vo(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gc(e))Qg(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var x=n.lastRenderedState,w=u(x,a);if(l.hasEagerState=!0,l.eagerState=w,ii(w,x))return ql(e,n,l,0),Jt===null&&Wl(),!1}catch{}finally{}if(a=vd(e,n,l,r),a!==null)return Qn(a,e,r),Jg(a,n,r),!0}return!1}function ef(e,n,a,r){if(r={lane:2,revertLane:Xf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gc(e)){if(n)throw Error(s(479))}else n=vd(e,a,r,2),n!==null&&Qn(n,e,2)}function gc(e){var n=e.alternate;return e===xt||n!==null&&n===xt}function Qg(e,n){bs=cc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,vo(e,a)}}var xc={readContext:Cn,use:fc,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn,useEffectEvent:dn},$g={readContext:Cn,use:fc,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Ig,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,mc(4194308,4,Hg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return mc(4194308,4,e,n)},useInsertionEffect:function(e,n){mc(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var r=e();if(Br){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=kn();if(a!==void 0){var l=a(n);if(Br){Ut(!0);try{a(n)}finally{Ut(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=OS.bind(null,xt,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=qd(e);var n=e.queue,a=Kg.bind(null,xt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kd,useDeferredValue:function(e,n){var a=kn();return Qd(a,e,n)},useTransition:function(){var e=qd(!1);return e=Xg.bind(null,xt,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=xt,l=kn();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(Nt&127)!==0||bg(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,Ig(yg.bind(null,r,u,e),[e]),r.flags|=2048,ys(9,{destroy:void 0},Sg.bind(null,r,u,a,n),null),a},useId:function(){var e=kn(),n=Jt.identifierPrefix;if(Tt){var a=Zi,r=Yi;a=(r&~(1<<32-ht(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=uc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$d,useFormState:Dg,useActionState:Dg,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,xt,!0,a),a.dispatch=n,[e,n]},useMemoCache:jd,useCacheRefresh:function(){return kn().memoizedState=LS.bind(null,xt)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((kt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},e0={readContext:Cn,use:fc,useCallback:kg,useContext:Cn,useEffect:Zd,useImperativeHandle:Gg,useInsertionEffect:zg,useLayoutEffect:Fg,useMemo:Vg,useReducer:hc,useRef:Pg,useState:function(){return hc(Ma)},useDebugValue:Kd,useDeferredValue:function(e,n){var a=mn();return jg(a,Qt.memoizedState,e,n)},useTransition:function(){var e=hc(Ma)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:ko(e),n]},useSyncExternalStore:_g,useId:Yg,useHostTransitionStatus:$d,useFormState:Ug,useActionState:Ug,useOptimistic:function(e,n){var a=mn();return Tg(a,Qt,e,n)},useMemoCache:jd,useCacheRefresh:Zg,useEffectEvent:Bg},PS={readContext:Cn,use:fc,useCallback:kg,useContext:Cn,useEffect:Zd,useImperativeHandle:Gg,useInsertionEffect:zg,useLayoutEffect:Fg,useMemo:Vg,useReducer:Wd,useRef:Pg,useState:function(){return Wd(Ma)},useDebugValue:Kd,useDeferredValue:function(e,n){var a=mn();return Qt===null?Qd(a,e,n):jg(a,Qt.memoizedState,e,n)},useTransition:function(){var e=Wd(Ma)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:ko(e),n]},useSyncExternalStore:_g,useId:Yg,useHostTransitionStatus:$d,useFormState:Og,useActionState:Og,useOptimistic:function(e,n){var a=mn();return Qt!==null?Tg(a,Qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jd,useCacheRefresh:Zg,useEffectEvent:Bg};function tf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=li(),l=Ya(r);l.payload=n,a!=null&&(l.callback=a),n=Za(e,l,r),n!==null&&(Qn(n,e,r),Bo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=li(),l=Ya(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Za(e,l,r),n!==null&&(Qn(n,e,r),Bo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),r=Ya(a);r.tag=2,n!=null&&(r.callback=n),n=Za(e,r,a),n!==null&&(Qn(n,e,a),Bo(n,e,a))}};function t0(e,n,a,r,l,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,x):n.prototype&&n.prototype.isPureReactComponent?!Ro(a,r)||!Ro(l,u):!0}function n0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&nf.enqueueReplaceState(n,n.state,null)}function zr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function i0(e){Xl(e)}function a0(e){console.error(e)}function r0(e){Xl(e)}function vc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function s0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function af(e,n,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){vc(e,n)},a}function o0(e){return e=Ya(e),e.tag=3,e}function l0(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){s0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){s0(n,a,r),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function IS(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Nr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Fc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===ac?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),kf(e,r,l)),!1;case 22:return a.flags|=65536,r===ac?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),kf(e,r,l)),!1}throw Error(s(435,a.tag))}return kf(e,r,l),Fc(),!1}if(Tt)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Md&&(e=Error(s(422),{cause:r}),Uo(xi(e,a)))):(r!==Md&&(n=Error(s(423),{cause:r}),Uo(xi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=xi(r,a),l=af(e.stateNode,r,l),Ld(e,l),fn!==4&&(fn=2)),!1;var u=Error(s(520),{cause:r});if(u=xi(u,a),Qo===null?Qo=[u]:Qo.push(u),fn!==4&&(fn=2),n===null)return!0;r=xi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=af(a.stateNode,r,e),Ld(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ir===null||!ir.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=o0(l),l0(l,e,a,r),Ld(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var rf=Error(s(461)),xn=!1;function Sn(e,n,a,r){n.child=e===null?fg(n,null,a,r):Ir(n,e.child,a,r)}function c0(e,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var x={};for(var w in r)w!=="ref"&&(x[w]=r[w])}else x=r;return Dr(n),r=Hd(e,n,a,x,u,l),w=Gd(),e!==null&&!xn?(kd(e,n,l),Ea(e,n,l)):(Tt&&w&&Ql(n),n.flags|=1,Sn(e,n,r,l),n.child)}function u0(e,n,a,r,l){if(e===null){var u=a.type;return typeof u=="function"&&!_d(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,d0(e,n,u,r,l)):(e=Zl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!hf(e,l)){var x=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(x,r)&&e.ref===n.ref)return Ea(e,n,l)}return n.flags|=1,e=va(u,r),e.ref=n.ref,e.return=n,n.child=e}function d0(e,n,a,r,l){if(e!==null){var u=e.memoizedProps;if(Ro(u,r)&&e.ref===n.ref)if(xn=!1,n.pendingProps=r=u,hf(e,l))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Ea(e,n,l)}return sf(e,n,a,r,l)}function f0(e,n,a,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return h0(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(n,u!==null?u.cachePool:null),u!==null?pg(n,u):Pd(),gg(n);else return r=n.lanes=536870912,h0(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(nc(n,u.cachePool),pg(n,u),Ja(),n.memoizedState=null):(e!==null&&nc(n,null),Pd(),Ja());return Sn(e,n,l,a),n.child}function jo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function h0(e,n,a,r,l){var u=Rd();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&nc(n,null),Pd(),gg(n),e!==null&&Nr(e,n,r,!0),n.childLanes=l,null}function _c(e,n){return n=bc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function m0(e,n,a){return Ir(n,e.child,null,a),e=_c(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function BS(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(r.mode==="hidden")return e=_c(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jo(null,e);if(Bd(n),(e=en)?(e=Hx(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,En=n,en=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return _c(n,r)}var u=e.memoizedState;if(u!==null){var x=u.dehydrated;if(Bd(n),l)if(n.flags&256)n.flags&=-257,n=m0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||Nr(e,n,a,!1),l=(a&e.childLanes)!==0,xn||l){if(Ka.current===null){if(r=Jt,r!==null&&(x=_o(r,a),x!==0&&x!==u.retryLane))throw u.retryLane=x,Ar(e,x),Qn(r,e,x),rf;Fc()}n=m0(e,n,a)}else e=u.treeContext,en=yi(x.nextSibling),En=n,Tt=!0,Va=null,bi=!1,e!==null&&eg(n,e),n=_c(n,r),n.flags|=134221824;return n}return e=va(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ms(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,l){return Dr(n),a=Hd(e,n,a,r,void 0,l),r=Gd(),e!==null&&!xn?(kd(e,n,l),Ea(e,n,l)):(Tt&&r&&Ql(n),n.flags|=1,Sn(e,n,a,l),n.child)}function p0(e,n,a,r,l,u){return Dr(n),n.updateQueue=null,a=vg(n,r,a,l),xg(e),r=Gd(),e!==null&&!xn?(kd(e,n,u),Ea(e,n,u)):(Tt&&r&&Ql(n),n.flags|=1,Sn(e,n,a,u),n.child)}function g0(e,n,a,r,l){if(Dr(n),n.stateNode===null){var u=hs,x=a.contextType;typeof x=="object"&&x!==null&&(u=Cn(x)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},Dd(n),x=a.contextType,u.context=typeof x=="object"&&x!==null?Cn(x):hs,u.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(tf(n,a,x,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&nf.enqueueReplaceState(u,u.state,null),Fo(n,r,u,l),zo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var w=n.memoizedProps,B=zr(a,w);u.props=B;var J=u.context,de=a.contextType;x=hs,typeof de=="object"&&de!==null&&(x=Cn(de));var Se=a.getDerivedStateFromProps;de=typeof Se=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,de||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||J!==x)&&n0(n,u,r,x),qa=!1;var Z=n.memoizedState;u.state=Z,Fo(n,r,u,l),zo(),J=n.memoizedState,w||Z!==J||qa?(typeof Se=="function"&&(tf(n,a,Se,r),J=n.memoizedState),(B=qa||t0(n,a,B,r,Z,J,x))?(de||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),u.props=r,u.state=J,u.context=x,r=B):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Ud(e,n),x=n.memoizedProps,de=zr(a,x),u.props=de,Se=n.pendingProps,Z=u.context,J=a.contextType,B=hs,typeof J=="object"&&J!==null&&(B=Cn(J)),w=a.getDerivedStateFromProps,(J=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==Se||Z!==B)&&n0(n,u,r,B),qa=!1,Z=n.memoizedState,u.state=Z,Fo(n,r,u,l),zo();var se=n.memoizedState;x!==Se||Z!==se||qa||e!==null&&e.dependencies!==null&&ec(e.dependencies)?(typeof w=="function"&&(tf(n,a,w,r),se=n.memoizedState),(de=qa||t0(n,a,de,r,Z,se,B)||e!==null&&e.dependencies!==null&&ec(e.dependencies))?(J||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,se,B),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,se,B)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=se),u.props=r,u.state=se,u.context=B,r=de):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Z===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,Ms(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Ir(n,e.child,null,l),n.child=Ir(n,null,a,l)):Sn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=Ea(e,n,l),e}function x0(e,n,a,r){return Cr(),n.flags|=256,Sn(e,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:sg()}}function cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function v0(e,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),x&&(l=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(l?Qa(n):Ja(),(e=en)?(e=Hx(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,En=n,en=null)):e=null,e===null)throw ja(n);return lh(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?(Ja(),l=n.mode,u=bc({mode:"hidden",children:u},l),r=wr(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=lf(a),r.childLanes=cf(e,x,a),n.memoizedState=of,jo(null,r)):(Qa(n),uf(n,u))}var w=e.memoizedState;if(w!==null){var B=w.dehydrated;if(B!==null)return zS(e,n,u,x,r,B,w,a)}return l?(Ja(),l=r.fallback,u=n.mode,w=e.child,B=w.sibling,r=va(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&1206910976,B!==null?l=va(B,l):(l=wr(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,jo(null,r),r=n.child,l=e.child.memoizedState,l===null?l=lf(a):(u=l.cachePool,u!==null?(w=pn._currentValue,u=u.parent!==w?{parent:w,pool:w}:u):u=sg(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=cf(e,x,a),n.memoizedState=of,jo(e.child,r)):(Qa(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=bc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bc(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Sc(e,n,a){return Ir(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zS(e,n,a,r,l,u,x,w){if(a)return n.flags&256?(Qa(n),n.flags&=-257,Sc(e,n,w)):n.memoizedState!==null?(Ja(),n.child=e.child,n.flags|=128,null):(Ja(),u=l.fallback,x=n.mode,l=bc({mode:"visible",children:l.children},x),u=wr(u,x,w,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ir(n,e.child,null,w),l=n.child,l.memoizedState=lf(w),l.childLanes=cf(e,r,w),n.memoizedState=of,jo(null,l));if(Qa(n),lh(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Uo({value:l,source:null,stack:null})),Sc(e,n,w)}if(xn||Nr(e,n,w,!1),r=(w&e.childLanes)!==0,xn||r){if(Ka.current!==null)return Sc(e,n,w);if(r=Jt,r!==null&&(l=_o(r,w),l!==0&&l!==x.retryLane))throw x.retryLane=l,Ar(e,l),Qn(r,e,l),rf;return oh(u)||Fc(),Sc(e,n,w)}return oh(u)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,en=yi(u.nextSibling),En=n,Tt=!0,Va=null,bi=!1,e!==null&&eg(n,e),n=uf(n,l.children),n.flags|=134221824,n)}function _0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$l(e.return,n,a)}function b0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&lc(a)===null&&(n=e),e=e.sibling}return n}function yc(e,n,a,r,l,u){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=l,x.treeForkCount=u)}function df(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ff(e,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var x=Nn.current;if(n.flags&128)return Ho(n,x),null;var w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,Ho(n,x),l==="backwards"&&e!==null?(df(e),Sn(e,n,r,a),df(e)):Sn(e,n,r,a),r=Tt?Do:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_0(e,a,n);else if(e.tag===19)_0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=b0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,df(n)),yc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&lc(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}yc(n,!0,a,null,u,r);break;case"together":yc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=b0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),yc(n,!1,l,a,u,r)}return n.child}function S0(e,n,a){var r=n.pendingProps;return Xa(n,n.type,r.value),Sn(e,n,r.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ec(e)))}function FS(e,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),Xa(n,pn,e.memoizedState.cache),Cr();break;case 27:case 5:zt(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bd(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Qa(n),n.flags|=128,null;r=Nr(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?v0(e,n,a):(Qa(n),e=Ea(e,n,a),e!==null?e.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return ff(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Nr(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return ff(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ho(n,Nn.current),r)break;return null;case 22:return n.lanes=0,f0(e,n,a,n.pendingProps);case 24:Xa(n,pn,e.memoizedState.cache)}return Ea(e,n,a)}function y0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return xn=!1,FS(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Tt&&(n.flags&1048576)!==0&&$p(n,Do,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Or(n.elementType),n.type=e,typeof e=="function")_d(e)?(r=zr(e,r),n.tag=1,n=g0(null,n,e,r,a)):(n.tag=0,n=sf(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===j){n.tag=11,n=c0(null,n,e,r,a);break e}else if(l===te){n.tag=14,n=u0(null,n,e,r,a);break e}else if(l===$){n.tag=10,n.type=e,n=S0(null,n,a);break e}}throw n=ye(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=zr(r,n.pendingProps),g0(e,n,r,l,a);case 3:e:{if(W(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,Ud(e,n),Fo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Xa(n,pn,r),r!==u.cache&&Ad(n,[pn],a,!0),zo(),r=x.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=x0(e,n,r,a);break e}else if(r!==l){l=xi(Error(s(424)),n),Uo(l),n=x0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=yi(e.firstChild),En=n,Tt=!0,Va=null,bi=!0,a=fg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Cr(),r===l){n=Ea(e,n,a);break e}Sn(e,n,r,a)}n=n.child}return n;case 26:return Ms(e,n),e===null?(a=qx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(n.stateNode=Ax(n.type,n.pendingProps,Ft.current,n)):n.memoizedState=qx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return zt(n),e===null&&Tt&&(r=n.stateNode=Vx(n.type,n.pendingProps,Ft.current),En=n,bi=!0,l=en,sr(n.type)?(ch=l,en=yi(r.firstChild)):en=l),Sn(e,n,n.pendingProps.children,a),Ms(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((l=r=en)&&(r=Ly(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,En=n,en=yi(r.firstChild),bi=!1,l=!0):l=!1),l||ja(n)),zt(n),l=n.type,u=n.pendingProps,x=e!==null?e.memoizedProps:null,r=u.children,eh(l,u)?r=null:x!==null&&eh(l,x)&&(n.flags|=32),n.memoizedState!==null&&(l=Hd(e,n,CS,null,null,a),Gs._currentValue=l),Ms(e,n),Sn(e,n,r,a),n.child;case 6:return e===null&&Tt&&((e=a=en)&&(a=Oy(a,n.pendingProps,bi),a!==null?(n.stateNode=a,En=n,en=null,e=!0):e=!1),e||ja(n)),null;case 13:return v0(e,n,a);case 4:return W(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ir(n,null,r,a):Sn(e,n,r,a),n.child;case 11:return c0(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ms(e,n),Sn(e,n,r,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return S0(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Dr(n),l=Cn(l),r=r(l),n.flags|=1,Sn(e,n,r,a),n.child;case 14:return u0(e,n,n.type,n.pendingProps,a);case 15:return d0(e,n,n.type,n.pendingProps,a);case 19:return ff(e,n,a);case 31:return BS(e,n,a);case 22:return f0(e,n,a,n.pendingProps);case 24:return Dr(n),r=Cn(pn),e===null?(l=Rd(),l===null&&(l=Jt,u=wd(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},Dd(n),Xa(n,pn,l)):((e.lanes&a)!==0&&(Ud(e,n),Fo(n,null,null,a),zo()),l=e.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Xa(n,pn,r)):(r=u.cache,Xa(n,pn,r),r!==l.cache&&Ad(n,[pn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Tt&&Ql(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Ms(e,n),Sn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(e){e.flags|=4}function mf(e,n,a,r,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?Qx(n,r):Qx(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ix())e.flags|=8192;else throw Pr=ac,Nd}else e.flags&=-16777217}function M0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jx(n))if(ix())e.flags|=8192;else throw Pr=ac,Nd}function Mc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xo():536870912,e.lanes|=n,Cs|=n)}function Xo(e,n){if(!Tt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function HS(e,n,a){var r=n.pendingProps;switch(yd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sa(pn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gs(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ed())),tn(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Ta(n),u!==null?(tn(n),M0(n,u)):(tn(n),mf(n,l,null,r,a))):u?u!==e.memoizedState?(Ta(n),tn(n),M0(n,u)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ta(n),tn(n),mf(n,l,e,r,a)),null;case 27:if(L(n),a=Ft.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}e=It.current,gs(n)?tg(n):(e=Vx(l,r,a),n.stateNode=e,Ta(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(L(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(u=It.current,gs(n))tg(n);else{var x=nl(Ft.current);switch(u){case 1:u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=x.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?x.createElement(l,{is:r.is}):x.createElement(l)}}u[A]=n,u[F]=r;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)u.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=u;e:switch(Un(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ta(n)}}return tn(n),n.subtreeFlags&=-33554433,mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Ft.current,gs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=En,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||yx(e.nodeValue,a)),e||ja(n,!0)}else e=nl(e).createTextNode(r),e[A]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=gs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Ed(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=gs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[A]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),l=!1}else l=Ed(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Mc(n,n.updateQueue),tn(n),null);case 4:return sn(),e===null&&Zf(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return Sa(n.type),tn(n),null;case 19:if(zd(n),r=n.memoizedState,r===null)return tn(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)Xo(r,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=lc(e),u!==null){for(n.flags|=128,Xo(r,!1),e=u.updateQueue,n.updateQueue=e,Mc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kp(a,e),a=a.sibling;return Ho(n,Nn.current&1|2),Tt&&_a(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Xe()>Pc&&(n.flags|=128,l=!0,Xo(r,!1),n.lanes=4194304)}else{if(!l)if(e=lc(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Mc(n,e),Xo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!Tt)return tn(n),null}else 2*Xe()-r.renderingStartTime>Pc&&a!==536870912&&(n.flags|=128,l=!0,Xo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xe(),e.sibling=null,u=Nn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Tt?Ho(n,u):(a=u,it(Rn,n),it(Nn,a),Pn===null&&(Pn=n)),Tt&&_a(n,r.treeForkCount),e}return tn(n),null;case 22:case 23:return ai(n),Id(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Mc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&$e(Lr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(pn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function GS(e,n){switch(yd(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sa(pn),sn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return L(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return zd(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return Sa(n.type),null;case 22:case 23:return ai(n),Id(),e!==null&&$e(Lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sa(pn),null;case 25:return null;default:return null}}function E0(e,n){switch(yd(n),n.tag){case 3:Sa(pn),sn();break;case 26:case 27:case 5:L(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:zd(n);break;case 10:Sa(n.type);break;case 22:case 23:ai(n),Id(),e!==null&&$e(Lr);break;case 24:Sa(pn)}}function Wo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var u=a.create,x=a.inst;r=u(),x.destroy=r}a=a.next}while(a!==l)}}catch(w){qt(n,n.return,w)}}function $a(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var x=r.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,l=n;var B=a,J=w;try{J()}catch(de){qt(l,B,de)}}}r=r.next}while(r!==u)}}catch(de){qt(n,n.return,de)}}function T0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{mg(n,a)}catch(r){qt(e,e.return,r)}}}function A0(e,n,a){a.props=zr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){qt(e,n,r)}}function Ki(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ga(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=Lx(u)),r=l.ref;break;case 7:if(e.stateNode===null){var x=new ci(e);v(e.child,!1,Dy,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(w){qt(e,n,w)}}function Dn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){qt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qt(e,n,l)}else a.current=null}function Ec(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Fx(e.stateNode,n[a])}function w0(e){for(var n=e.return;n!==null&&(gf(n)&&Fx(e.stateNode,n.stateNode),!pf(n));)n=n.return}function qo(e){for(var n=e.return;n!==null&&(gf(n)&&Uy(e.stateNode,n.stateNode),!pf(n));)n=n.return}function pf(e){return e.tag===5||e.tag===3||e.tag===27}function gf(e){return e&&e.tag===7&&e.stateNode!==null}function xf(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){qt(e,e.return,l)}}function vf(e,n,a){try{var r=e.stateNode;hy(r,e.type,a,n),r[F]=n}catch(l){qt(e,e.return,l)}}function C0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sr(e.type)||e.tag===4}function _f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||C0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bf(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Ec(e,r),Et=!0;else if(l!==4&&(l===27&&(Ec(e,r),r=null,sr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(bf(e,n,a,r),e=e.sibling;e!==null;)bf(e,n,a,r),e=e.sibling}function Tc(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Ec(e,r),Et=!0;else if(l!==4&&(l===27&&(Ec(e,r),r=null,sr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Tc(e,n,a,r),e=e.sibling;e!==null;)Tc(e,n,a,r),e=e.sibling}function R0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Un(n,r,a),n[A]=e,n[F]=a}catch(u){qt(e,e.return,u)}}var Ac=!1,ri=null;function N0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ac=!0)}var Qi=null;function D0(){var e=Qi;return Qi=null,e}var Yn=0;function Es(e,n,a,r,l){return Yn=0,U0(e.child,n,a,r,l)}function U0(e,n,a,r,l){for(var u=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var w=ih(x);r.push(w),w.view&&(u=!0)}else u||ih(x).view&&(u=!0);Ac=!0,Dx(x,Yn===0?n:n+"_"+Yn,a),Yn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||U0(e.child,n,a,r,l)&&(u=!0));e=e.sibling}return u}function Ji(e,n){for(;e!==null;)e.tag===5?Ux(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ji(e.child,n)),e=e.sibling}function wc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(Es(e,a,n,null,!1)||Ji(e.child,!1))}e=e.sibling}}function Sf(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ga(r,a),u=xa(r.default,a.paired?r.share:r.enter);u!=="none"?Es(e,l,u,null,!1)?(wc(e),a.paired||n||Us(e,r.onEnter)):Ji(e.child,!1):wc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Sf(e,n),e=e.sibling;else wc(e)}function yf(e){if(ri!==null&&ri.size!==0){var n=ri;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=xa(a.default,a.share);if(u!=="none"&&(Es(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,Us(e,a.onShare)):Ji(e.child,!1)),n.delete(r),n.size===0)break}}}yf(e)}e=e.sibling}}}function Mf(e){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode),r=ri!==null?ri.get(a):void 0,l=xa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Es(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ri.delete(a),Us(e,n.onShare)):Us(e,n.onExit):Ji(e.child,!1)),ri!==null&&yf(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mf(e),e=e.sibling;else ri!==null&&yf(e)}function L0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode);n=xa(n.default,n.update),e.flags&=-5,n!=="none"&&Es(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&L0(e);e=e.sibling}}function Ef(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ji(e.child,!1))}Ef(e)}e=e.sibling}}function Cc(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),Ef(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Cc(e),e=e.sibling;else Ef(e)}function O0(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&O0(e),e=e.sibling}function Tf(e,n,a,r,l,u,x){for(var w=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(u!==null&&Yn<u.length){var J=u[Yn],de=ih(B);(J.view||de.view)&&(w=!0);var Se;if(Se=(e.flags&4)===0)if(de.clip)Se=!0;else{Se=J.rect;var Z=de.rect;Se=Se.y!==Z.y||Se.x!==Z.x||Se.height!==Z.height||Se.width!==Z.width}Se&&(e.flags|=4),de.abs?de=!J.abs:(J=J.rect,de=de.rect,de=J.height!==de.height||J.width!==de.width),de&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Dx(B,Yn===0?a:a+"_"+Yn,l),w&&(e.flags&4)!==0||(Qi===null&&(Qi=[]),Qi.push(B,Yn===0?r:r+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Tf(e,n.child,a,r,l,u,x)&&(w=!0));n=n.sibling}return w}function P0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ga(a,r),u=xa(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var w=e.child;Yn=0,l=Tf(r,w,l,l,u,x,!1),(e.flags&4)!==0&&l&&Us(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&P0(e);e=e.sibling}}var Tn=!1,Xt=!1,$i=!1,Af=!1,I0=typeof WeakSet=="function"?WeakSet:Set,An=null,ea=!1,Yo=!1,Rc=!1,wf=!1;function kS(e,n,a){if(e=e.containerInfo,Jf=ks,e=Hp(e),fd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,x=l.focusNode;l=l.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break e}var w=0,B=-1,J=-1,de=0,Se=0,Z=e,se=null;t:for(;;){for(var Ie;Z!==r||u!==0&&Z.nodeType!==3||(B=w+u),Z!==x||l!==0&&Z.nodeType!==3||(J=w+l),Z.nodeType===3&&(w+=Z.nodeValue.length),(Ie=Z.firstChild)!==null;)se=Z,Z=Ie;for(;;){if(Z===e)break t;if(se===r&&++de===u&&(B=w),se===x&&++Se===l&&(J=w),(Ie=Z.nextSibling)!==null)break;Z=se,se=Z.parentNode}Z=Ie}r=B===-1||J===-1?null:{start:B,end:J}}else r=null}r=r||{start:0,end:0}}else r=null;for($f={focusedElem:e,selectionRange:r},ks=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(e=An,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&Mf(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&N0(e),Nc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Mf(r),Nc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&N0(e),Nc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,An=r):(a&&L0(e),Nc(a))}}ri=null}function Nc(e){for(;An!==null;){var n=An,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var x=zr(n.type,l);a=u.getSnapshotBeforeUpdate(x,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(w){qt(n,n.return,w)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)sh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ga(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=xa(l.default,l.update),l!=="none"&&Es(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,An=r;break}An=n.return}}function B0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&Wo(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){qt(a,a.return,x)}else{var l=zr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){qt(a,a.return,x)}}r&64&&T0(a),r&512&&Ki(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mg(e,n)}catch(x){qt(a,a.return,x)}}break;case 27:n===null&&r&4&&R0(a);case 26:case 5:ta(e,a),n===null&&r&4&&xf(a),r&512&&Ki(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&G0(e,a);break;case 13:ta(e,a),r&4&&k0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ey.bind(null,a),Py(e,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var u=n!==null&&n.memoizedState!==null||Xt;n=Tn,l=Xt,Tn=r,(Xt=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Li(e,a,r)):ta(e,a),Tn=n,Xt=l}break;case 30:ta(e,a),r&512&&Ki(a,a.return);break;case 7:r&512&&Ki(a,a.return);default:ta(e,a)}}function Cf(e,n){for(e=e.child;e!==null;)z0(e,n),e=e.sibling}function z0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,x=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(B){qt(e,e.return,B)}Rf(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Et=!0}catch(B){qt(e,e.return,B)}break;case 18:try{var w=e.stateNode;n?Nx(w,!0):Nx(e.stateNode,!1)}catch(B){qt(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&Cf(e,n);break;default:Cf(e,n)}}function Rf(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:z0(a,r);break e;case 22:a.memoizedState===null&&Rf(a,r);break e;default:Rf(a,r)}}e=e.sibling}}function F0(e){var n=e.alternate;n!==null&&(e.alternate=null,F0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Zn=!1;function Di(e,n,a){for(a=a.child;a!==null;)H0(e,n,a),a=a.sibling}function H0(e,n,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 26:Xt||Dn(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||Dn(a,n),qo(a);var r=an,l=Zn;sr(a.type)&&(an=a.stateNode,Zn=!1),Di(e,n,a),jx(a.stateNode,a.type,a.memoizedProps),an=r,Zn=l;break;case 5:Xt||Dn(a,n),qo(a);case 6:if(a.tag===6&&qo(a),r=an,l=Zn,an=null,Di(e,n,a),an=r,Zn=l,an!==null)if(Zn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),Et=!0}catch(u){qt(a,n,u)}else try{an.removeChild(a.stateNode),Et=!0}catch(u){qt(a,n,u)}break;case 18:an!==null&&(Zn?(e=an,Rx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Vs(e)):Rx(an,a.stateNode));break;case 4:r=an,l=Zn,an=a.stateNode.containerInfo,Zn=!0,Di(e,n,a),an=r,Zn=l;break;case 0:case 11:case 14:case 15:$a(2,a,n),Xt||$a(4,a,n),Di(e,n,a);break;case 1:Xt||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&A0(a,n,r)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:Xt=(r=Xt)||a.memoizedState!==null,Di(e,n,a),Xt=r;break;case 30:Dn(a,n),Di(e,n,a);break;case 7:Xt||Dn(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Vs(e)}catch(a){qt(n,n.return,a)}}}function k0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vs(e)}catch(a){qt(n,n.return,a)}}function VS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I0),n;default:throw Error(s(435,e.tag))}}function Dc(e,n){var a=VS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=ty.bind(null,e,r);r.then(l,l)}})}function Vn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],x=e,w=n,B=w;e:for(;B!==null;){switch(B.tag){case 27:if(sr(B.type)){an=B.stateNode,Zn=!1;break e}break;case 5:an=B.stateNode,Zn=!1;break e;case 3:case 4:an=B.stateNode.containerInfo,Zn=!0;break e}B=B.return}if(an===null)throw Error(s(160));H0(x,w,u),an=null,Zn=!1,x=u.alternate,x!==null&&(x.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,e,a),n=n.sibling}var Ui=null;function V0(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var x=r[u];x.ref.impl=x.nextImpl}Vn(n,e,a),jn(e),l&4&&($a(3,e,e.return),Wo(3,e),$a(5,e,e.return));break;case 1:Vn(n,e,a),jn(e),l&512&&(Xt||r===null||Dn(r,r.return)),l&64&&Tn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ui,Vn(n,e,a),jn(e),l&512&&(Xt||r===null||Dn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Tn)e.stateNode=Ax(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Pe]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Un(r,n,a),r[A]=e,Mt(r),n=r;break e;case"link":if(u=Kx("link","href",l).get(n+(a.href||""))){for(x=0;x<u.length;x++)if(r=u[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(x,1);break t}}r=l.createElement(n),Un(r,n,a),l.head.appendChild(r);break;case"meta":if(u=Kx("meta","content",l).get(n+(a.content||""))){for(x=0;x<u.length;x++)if(r=u[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(x,1);break t}}r=l.createElement(n),Un(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,Mt(r),n=r}e.stateNode=n}else Tn||hh(u,e.type,e.stateNode);else e.stateNode=Zx(u,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Xt||n.parentNode.removeChild(n)):l.count--,a===null?Tn||hh(u,e.type,e.stateNode):Zx(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&vf(e,e.memoizedProps,r.memoizedProps);break;case 27:Vn(n,e,a),jn(e),l&512&&(Xt||r===null||Dn(r,r.return)),r!==null&&l&4&&vf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=$i,$i=!1,Vn(n,e,a),$i=u,jn(e),l&512&&(Xt||r===null||Dn(r,r.return)),e.flags&32){n=e.stateNode;try{ss(n,""),Et=!0}catch(de){qt(e,e.return,de)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,vf(e,n,r!==null?r.memoizedProps:n)),l&1024&&(Af=!0);break;case 6:if(Vn(n,e,a),jn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Et=!0}catch(de){qt(e,e.return,de)}}break;case 3:if(Et=!1,Wc=null,u=Ui,Ui=il(n.containerInfo),Vn(n,e,a),Ui=u,jn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Vs(n.containerInfo)}catch(de){qt(e,e.return,de)}Af&&(Af=!1,j0(e)),Et=!1;break;case 4:l=$i,$i=Tn,r=Gt(),u=Ui,Ui=il(e.stateNode.containerInfo),Vn(n,e,a),jn(e),Ui=u,Et&&Yo&&(Rc=!0),Et=r,$i=l;break;case 12:Vn(n,e,a),jn(e);break;case 31:Vn(n,e,a),jn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Dc(e,n)));break;case 13:Vn(n,e,a),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Oc=Xe()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Dc(e,n)));break;case 22:u=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var w=Tn,B=Xt,J=$i;Tn=w||u,$i=J||u,Xt=B||x,Vn(n,e,a),Xt=B,$i=J,Tn=w,jn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||x||Tn||Xt||(n=x||Xt,a=Tn,r=Xt,Tn=u||Tn,Xt=n,er(e,2),Tn=a,Xt=r),!u&&$i||Cf(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Dc(e,a))));break;case 19:Vn(n,e,a),jn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Dc(e,n)));break;case 30:l&512&&(Xt||r===null||Dn(r,r.return)),l=Gt(),u=Yo,x=(a&335544064)===a,w=e.memoizedProps,Yo=x&&xa(w.default,w.update)!=="none",Vn(n,e,a),jn(e),x&&r!==null&&Et&&(e.flags|=4),Yo=u,Et=l;break;case 21:break;case 7:l&512&&(Xt||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Vn(n,e,a),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(C0(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(gf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(pf(l))break;l=l.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,B=_f(e);Tc(e,B,w,x);break;case 5:var J=a.stateNode;a.flags&32&&(ss(J,""),a.flags&=-33);var de=_f(e);Tc(e,de,J,x);break;case 3:case 4:var Se=a.stateNode.containerInfo,Z=_f(e);bf(e,Z,Se,x);break;default:throw Error(s(161))}}catch(se){qt(e,e.return,se)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;j0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,ks=!0,n.reset(),ks=!1),e=e.sibling}}function Ts(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)X0(n,e),n=n.sibling;else P0(n)}function X0(e,n){var a=e.alternate;if(a===null)Sf(e,!1);else switch(e.tag){case 3:if(wf=ea=!1,D0(),Ts(n,e),!ea&&!Rc){if(e=Qi,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];Ux(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wf=!0}Qi=null;break;case 5:Ts(n,e);break;case 4:r=ea,ea=!1,Ts(n,e),ea&&(Rc=!0),ea=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Sf(e,!1):Ts(n,e));break;case 30:r=ea,l=D0(),ea=!1,Ts(n,e),ea&&(e.flags|=4);var u=e.memoizedProps,x=e.stateNode;n=ga(u,x),x=ga(a.memoizedProps,x);var w=xa(u.default,u.update);w==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Yn=0,n=Tf(e,a,n,x,w,u,!0),Yn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Us(e,e.memoizedProps.onUpdate),Qi=l):l!==null&&(l.push.apply(l,Qi),Qi=l),ea=(e.flags&32)!==0?!0:r;break;default:Ts(n,e)}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(e,n.alternate,n),n=n.sibling}function er(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),er(a,r);break;case 1:Dn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&A0(a,a.return,l),er(a,r);break;case 27:(r&2)!==0&&jx(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||qo(a),er(a,r);break;case 6:qo(a);break;case 26:Dn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Xt||l.parentNode.removeChild(l),er(a,r);break;case 22:a.memoizedState===null&&er(a,r);break;case 30:Dn(a,a.return),er(a,r);break;case 7:Dn(a,a.return);default:er(a,r)}e=e.sibling}}function Li(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,u=n,x=u.flags,w=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Li(l,u,a),Wo(4,u);break;case 1:if(Li(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(de){qt(r,r.return,de)}if(r=u,l=r.updateQueue,l!==null){var B=r.stateNode;try{var J=l.shared.hiddenCallbacks;if(J!==null)for(l.shared.hiddenCallbacks=null,l=0;l<J.length;l++)hg(J[l],B)}catch(de){qt(r,r.return,de)}}w&&x&64&&T0(u),Ki(u,u.return);break;case 27:(a&2)!==0&&R0(u);case 5:u.tag!==5&&u.tag!==27||w0(u),Li(l,u,a),w&&r===null&&x&4&&xf(u),Ki(u,u.return);break;case 6:w0(u);break;case 26:B=u.stateNode,u.memoizedState!==null||B===null||Tn||hh(il(B.ownerDocument),u.type,B),Li(l,u,a),w&&r===null&&x&4&&xf(u),Ki(u,u.return);break;case 12:Li(l,u,a);break;case 31:Li(l,u,a),w&&x&4&&G0(l,u);break;case 13:Li(l,u,a),w&&x&4&&k0(l,u);break;case 22:u.memoizedState===null&&Li(l,u,a),Ki(u,u.return);break;case 30:Li(l,u,a),Ki(u,u.return);break;case 7:Ki(u,u.return);default:Li(l,u,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lo(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Lo(e))}function Si(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)W0(e,n,a,r),n=n.sibling;else l&&O0(n)}function W0(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Cc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,r),u&2048&&Wo(9,n);break;case 1:Si(e,n,a,r);break;case 3:Si(e,n,a,r),l&&wf&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Lo(u)));break;case 12:if(u&2048){Si(e,n,a,r),u=n.stateNode;try{var x=n.memoizedProps,w=x.id,B=x.onPostCommit;typeof B=="function"&&B(w,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(J){qt(n,n.return,J)}}else Si(e,n,a,r);break;case 31:Si(e,n,a,r);break;case 13:Si(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,w=n.alternate,n.memoizedState!==null?(l&&w!==null&&w.memoizedState===null&&Cc(w),x._visibility&2?Si(e,n,a,r):Zo(e,n)):(l&&w!==null&&w.memoizedState!==null&&Cc(n),x._visibility&2?Si(e,n,a,r):(x._visibility|=2,As(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Nf(w,n);break;case 24:Si(e,n,a,r),u&2048&&Df(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Ji(u.child,!0),Ji(n.child,!0))),Si(e,n,a,r);break;default:Si(e,n,a,r)}}function As(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,x=n,w=a,B=r,J=x.flags;switch(x.tag){case 0:case 11:case 15:As(u,x,w,B,l),Wo(8,x);break;case 23:break;case 22:var de=x.stateNode;x.memoizedState!==null?de._visibility&2?As(u,x,w,B,l):Zo(u,x):(de._visibility|=2,As(u,x,w,B,l)),l&&J&2048&&Nf(x.alternate,x);break;case 24:As(u,x,w,B,l),l&&J&2048&&Df(x.alternate,x);break;default:As(u,x,w,B,l)}n=n.sibling}}function Zo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:Zo(a,r),l&2048&&Nf(r.alternate,r);break;case 24:Zo(a,r),l&2048&&Df(r.alternate,r);break;default:Zo(a,r)}n=n.sibling}}var Fr=8192;function Hr(e,n,a){if(e.subtreeFlags&Fr)for(e=e.child;e!==null;)q0(e,n,a),e=e.sibling}function q0(e,n,a){switch(e.tag){case 26:Hr(e,n,a),e.flags&Fr&&(e.memoizedState!==null?Zy(a,Ui,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&ev(a,e)));break;case 5:Hr(e,n,a),e.flags&Fr&&(e=e.stateNode,(n&335544128)===n&&ev(a,e));break;case 3:case 4:var r=Ui;Ui=il(e.stateNode.containerInfo),Hr(e,n,a),Ui=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Fr,Fr=16777216,Hr(e,n,a),Fr=r):Hr(e,n,a));break;case 30:if((e.flags&Fr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}Hr(e,n,a);break;default:Hr(e,n,a)}}function Y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ko(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,K0(r,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Z0(e),e=e.sibling}function Z0(e){switch(e.tag){case 0:case 11:case 15:Ko(e),e.flags&2048&&$a(9,e,e.return);break;case 3:Ko(e);break;case 12:Ko(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Uc(e)):Ko(e);break;default:Ko(e)}}function Uc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,K0(r,e)}Y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Uc(n));break;default:Uc(n)}e=e.sibling}}function K0(e,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,An=r;else e:for(a=e;An!==null;){r=An;var l=r.sibling,u=r.return;if(F0(r),r===a){An=null;break e}if(l!==null){l.return=u,An=l;break e}An=u}}}var jS={getCacheForType:function(e){var n=Cn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},XS=typeof WeakMap=="function"?WeakMap:Map,kt=0,Jt=null,wt=null,Nt=0,Wt=0,si=null,tr=!1,ws=!1,Uf=!1,Aa=0,fn=0,nr=0,Gr=0,Lc=0,oi=0,Cs=0,Qo=null,Kn=null,Lf=!1,Oc=0,Q0=0,Pc=1/0,Ic=null,ir=null,on=0,Oi=null,kr=null,na=0,Of=0,Pf=null,J0=null,Rs=null,Ns=null,Ds=null,Jo=0,Bc=null;function li(){return(kt&2)!==0&&Nt!==0?Nt&-Nt:ge.T!==null?Xf():Pl()}function $0(){if(oi===0)if((Nt&536870912)===0||Tt){var e=Sr;Sr<<=1,(Sr&3932160)===0&&(Sr=262144),oi=e}else oi=536870912;return e=Rn.current,e!==null&&(e.flags|=32),oi}function Us(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=Lx(ga(e.memoizedProps,a))),Ns===null&&(Ns=[]),Ns.push(n.bind(null,r))}}function Qn(e,n,a){(e===Jt&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),ar(e,Nt,oi,!1)),Xi(e,a),((kt&2)===0||e!==Jt)&&(e===Jt&&((kt&2)===0&&(Gr|=a),fn===4&&ar(e,Nt,oi,!1)),ia(e))}function ex(e,n,a){if((kt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Fa(e,n),l=r?YS(e,n):Bf(e,n,!0),u=r;do{if(l===0){ws&&!r&&ar(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!WS(a)){l=Bf(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=e;l=Qo;var B=w.current.memoizedState.isDehydrated;if(B&&(Ls(w,x).flags|=256),x=Bf(w,x,!1),x!==2&&x!==6){if(Uf&&!B){w.errorRecoveryDisabledLanes|=u,Gr|=u,l=4;break e}u=Kn,Kn=l,u!==null&&(Kn===null?Kn=u:Kn.push.apply(Kn,u))}l=x}if(u=!1,l!==2)continue}}if(l===1){Ls(e,0),ar(e,n,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(r,n,oi,!tr);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Oc+300-Xe(),10<l)){if(ar(r,n,oi,!tr),yr(r,0,!0)!==0)break e;na=n,r.timeoutHandle=nh(tx.bind(null,r,a,Kn,Ic,Lf,n,oi,Gr,Cs,tr,u,"Throttled",-0,0),l);break e}tx(r,a,Kn,Ic,Lf,n,oi,Gr,Cs,tr,u,null,-0,0)}}break}while(!0);ia(e)}function tx(e,n,a,r,l,u,x,w,B,J,de,Se,Z,se){e.timeoutHandle=-1;var Ie=n.subtreeFlags,Je=(u&335544064)===u;if(Se=null,(Je||Ie&8192||(Ie&16785408)===16785408)&&(Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},ri=null,q0(n,u,Se),Je&&(Ie=Se,Je=e.containerInfo,Je=(Je.nodeType===9?Je:Je.ownerDocument).__reactViewTransition,Je!=null&&(Ie.count++,Ie.waitingForViewTransition=!0,Ie=sl.bind(Ie),Je.finished.then(Ie,Ie))),Ie=(u&62914560)===u?Oc-Xe():(u&4194048)===u?Q0-Xe():0,Ie=Ky(Se,Ie),Ie!==null)){na=u,e.cancelPendingCommit=Ie(cx.bind(null,e,n,u,a,r,l,x,w,B,J,de,Se,null,Z,se)),ar(e,u,x,!J);return}cx(e,n,u,a,r,l,x,w,B,J,de,Se)}function WS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ii(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(e,n,a,r){n=ji(e,n),n&=~Lc,n&=~Gr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var u=31-ht(l),x=1<<u;r[u]=-1,l&=~x}a!==0&&Mr(e,a,n)}function zc(){return(kt&6)===0?($o(0),!1):!0}function If(){if(wt!==null){if(Wt===0)var e=wt.return;else e=wt,ba=Rr=null,Vd(e),_s=null,Io=0,e=wt;for(;e!==null;)E0(e.alternate,e),e=e.return;wt=null}}function Ls(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,gy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,If(),Jt=e,wt=a=va(e.current,null),Nt=n,Wt=0,si=null,tr=!1,ws=Fa(e,n),Uf=!1,Cs=oi=Lc=Gr=nr=fn=0,Kn=Qo=null,Lf=!1,Aa=ji(e,n),Wl(),a}function nx(e,n){xt=null,ge.H=xc,n===vs||n===ic?(n=cg(),Wt=3):n===Nd?(n=cg(),Wt=4):Wt=n===rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,wt===null&&(fn=1,vc(e,xi(n,e.current)))}function ix(){var e=Rn.current;return e===null?!0:(Nt&4194048)===Nt?Pn===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?e===Pn:!1}function ax(){var e=ge.H;return ge.H=xc,e===null?xc:e}function rx(){var e=ge.A;return ge.A=jS,e}function Fc(){fn=4,tr||(Nt&4194048)!==Nt&&Rn.current!==null||(ws=!0),(nr&134217727)===0&&(Gr&134217727)===0||Jt===null||ar(Jt,Nt,oi,!1)}function Bf(e,n,a){var r=kt;kt|=2;var l=ax(),u=rx();(Jt!==e||Nt!==n)&&(Ic=null,Ls(e,n)),n=!1;var x=fn;e:do try{if(Wt!==0&&wt!==null){var w=wt,B=si;switch(Wt){case 8:If(),x=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var J=Wt;if(Wt=0,si=null,Os(e,w,B,J),a&&ws){x=0;break e}break;default:J=Wt,Wt=0,si=null,Os(e,w,B,J)}}qS(),x=fn;break}catch(de){nx(e,de)}while(!0);return n&&e.shellSuspendCounter++,ba=Rr=null,kt=r,ge.H=l,ge.A=u,wt===null&&(Jt=null,Nt=0,Wl()),x}function qS(){for(;wt!==null;)sx(wt)}function YS(e,n){var a=kt;kt|=2;var r=ax(),l=rx();Jt!==e||Nt!==n?(Ic=null,Pc=Xe()+500,Ls(e,n)):ws=Fa(e,n);e:do try{if(Wt!==0&&wt!==null){n=wt;var u=si;t:switch(Wt){case 1:Wt=0,si=null,Os(e,n,u,1);break;case 2:case 9:if(og(u)){Wt=0,si=null,ox(n);break}n=function(){Wt!==2&&Wt!==9||Jt!==e||(Wt=7),ia(e)},u.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:og(u)?(Wt=0,si=null,ox(n)):(Wt=0,si=null,Os(e,n,u,7));break;case 5:var x=null;switch(wt.tag){case 26:x=wt.memoizedState;case 5:case 27:var w=wt;if(x?Jx(x):w.stateNode.complete){Wt=0,si=null;var B=w.sibling;if(B!==null)wt=B;else{var J=w.return;J!==null?(wt=J,Hc(J)):wt=null}break t}}Wt=0,si=null,Os(e,n,u,5);break;case 6:Wt=0,si=null,Os(e,n,u,6);break;case 8:If(),fn=6;break e;default:throw Error(s(462))}}ZS();break}catch(de){nx(e,de)}while(!0);return ba=Rr=null,ge.H=r,ge.A=l,kt=a,wt!==null?0:(Jt=null,Nt=0,Wl(),fn)}function ZS(){for(;wt!==null&&!ze();)sx(wt)}function sx(e){var n=y0(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,n===null?Hc(e):wt=n}function ox(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=p0(a,n,n.pendingProps,n.type,void 0,Nt);break;case 11:n=p0(a,n,n.pendingProps,n.type.render,n.ref,Nt);break;case 5:Vd(n);var r=n;r===En&&(Tt?(Jl(r),r.tag===5&&r.stateNode!=null&&(en=r.stateNode)):(Jl(r),Tt=!0));default:E0(a,n),n=wt=Kp(n,Aa),n=y0(a,n,Aa)}e.memoizedProps=e.pendingProps,n===null?Hc(e):wt=n}function Os(e,n,a,r){ba=Rr=null,Vd(n),_s=null,Io=0;var l=n.return;try{if(IS(e,l,n,a,Nt)){fn=1,vc(e,xi(a,e.current)),wt=null;return}}catch(u){if(l!==null)throw wt=l,u;fn=1,vc(e,xi(a,e.current)),wt=null;return}n.flags&32768?(Tt||r===1?e=!0:ws||(Nt&536870912)!==0?e=!1:(tr=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),lx(n,e)):Hc(n)}function Hc(e){var n=e;do{if((n.flags&32768)!==0){lx(n,tr);return}e=n.return;var a=HS(n.alternate,n,Aa);if(a!==null){wt=a;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=e}while(n!==null);fn===0&&(fn=5)}function lx(e,n){do{var a=GS(e.alternate,e);if(a!==null){a.flags&=32767,wt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){wt=e;return}wt=e=a}while(e!==null);fn=6,wt=null}function cx(e,n,a,r,l,u,x,w,B,J,de,Se){e.cancelPendingCommit=null;do Gc();while(on!==0);if((kt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Jt&&(wt=Jt=null,Nt=0),kr=n,Oi=e,na=a,Pf=l,J0=r,KS(e,n,a,x,w,B,Se)}}function KS(e,n,a,r,l,u,x){var w=n.lanes|n.childLanes;if(Of=w,w|=xd,Ol(e,a,w,r,l,u),Ns=null,(a&335544064)===a?(Ds=ES(e),r=10262):(Ds=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,ny(De,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),Ac=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=ge.T,ge.T=null,l=Ae.p,Ae.p=2,u=kt,kt|=4;try{kS(e,n,a)}finally{kt=u,Ae.p=l,ge.T=r}}on=1,Ac?Rs=yy(x,e.containerInfo,Ds,zf,Ff,JS,Hf,Gf,QS):(zf(),Ff(),Hf())}function QS(e){if(on!==0){var n=Oi.onRecoverableError;n(e,{componentStack:null})}}function JS(){on===3&&(on=0,X0(kr,Oi),on=4)}function zf(){if(on===1){on=0;var e=Oi,n=kr,a=na,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=ge.T,ge.T=null;var l=Ae.p;Ae.p=2;var u=kt;kt|=4;try{Yo=Rc=!1,V0(n,e,a),a=$f;var x=Hp(e.containerInfo),w=a.focusedElem,B=a.selectionRange;if(x!==w&&w&&w.ownerDocument&&Fp(w.ownerDocument.documentElement,w)){if(B!==null&&fd(w)){var J=B.start,de=B.end;if(de===void 0&&(de=J),"selectionStart"in w)w.selectionStart=J,w.selectionEnd=Math.min(de,w.value.length);else{var Se=w.ownerDocument||document,Z=Se&&Se.defaultView||window;if(Z.getSelection){var se=Z.getSelection(),Ie=w.textContent.length,Je=Math.min(B.start,Ie),vt=B.end===void 0?Je:Math.min(B.end,Ie);!se.extend&&Je>vt&&(x=vt,vt=Je,Je=x);var Q=zp(w,Je),H=zp(w,vt);if(Q&&H&&(se.rangeCount!==1||se.anchorNode!==Q.node||se.anchorOffset!==Q.offset||se.focusNode!==H.node||se.focusOffset!==H.offset)){var ie=Se.createRange();ie.setStart(Q.node,Q.offset),se.removeAllRanges(),Je>vt?(se.addRange(ie),se.extend(H.node,H.offset)):(ie.setEnd(H.node,H.offset),se.addRange(ie))}}}}for(Se=[],se=w;se=se.parentNode;)se.nodeType===1&&Se.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var be=Se[w];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}ks=!!Jf,$f=Jf=null}finally{kt=u,Ae.p=l,ge.T=r}}e.current=n,on=2}}function Ff(){if(on===2){on=0;var e=Oi,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ge.T,ge.T=null;var r=Ae.p;Ae.p=2;var l=kt;kt|=4;try{B0(e,n.alternate,n)}finally{kt=l,Ae.p=r,ge.T=a}}on=3}}function Hf(){if(on===4||on===3){on=0;var e=Rs;Rs=null,Be();var n=Oi,a=kr,r=na,l=J0,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?on=5:(on=0,kr=Oi=null,ux(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ir=null),So(r),a=a.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(et,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=ge.T,u=Ae.p,Ae.p=2,ge.T=null;try{for(var x=n.onRecoverableError,w=0;w<l.length;w++){var B=l[w];x(B.value,{componentStack:B.stack})}}finally{ge.T=a,Ae.p=u}}if(l=Ns,x=Ds,Ds=null,l!==null&&(Ns=null,x===null&&(x=[]),e!==null))for(B=0;B<l.length;B++)a=(0,l[B])(x),a!==void 0&&e.finished.finally(a);(na&3)!==0&&Gc(),ia(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Bc?Jo++:(Jo=0,Bc=n):(Jo=0,Bc=null),$o(0)}}function ux(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Lo(n)))}function Gc(){return Rs!==null&&(Rs.skipTransition(),Rs=null),zf(),Ff(),Hf(),Gf()}function Gf(){if(on!==5)return!1;var e=Oi,n=Of;Of=0;var a=So(na),r=ge.T,l=Ae.p;try{Ae.p=32>a?32:a,ge.T=null,a=Pf,Pf=null;var u=Oi,x=na;if(on=0,kr=Oi=null,na=0,(kt&6)!==0)throw Error(s(331));var w=kt;if(kt|=4,Z0(u.current),W0(u,u.current,x,a),kt=w,$o(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(et,u)}catch{}return!0}finally{Ae.p=l,ge.T=r,ux(e,n)}}function dx(e,n,a){n=xi(a,n),n=af(e.stateNode,n,2),e=Za(e,n,2),e!==null&&(Xi(e,2),ia(e))}function qt(e,n,a){if(e.tag===3)dx(e,e,a);else for(;n!==null;){if(n.tag===3){dx(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=xi(a,e),a=o0(2),r=Za(n,a,2),r!==null&&(l0(a,r,n,e),Xi(r,2),ia(r));break}}n=n.return}}function kf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new XS;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Uf=!0,l.add(a),e=$S.bind(null,e,n,a),n.then(e,e))}function $S(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(Nt&a)===a&&((fn===4||fn===3&&(Nt&62914560)===Nt&&300>Xe()-Oc)&&(kt&2)===0?Ls(e,0):Lc|=a,Cs===Nt&&(Cs=0)),ia(e)}function fx(e,n){n===0&&(n=xo()),e=Ar(e,n),e!==null&&(Xi(e,n),ia(e))}function ey(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),fx(e,a)}function ty(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),fx(e,a)}function ny(e,n){return Ue(e,n)}var Ps=null,Is=null,Vf=!1,kc=!1,jf=!1,rr=0;function ia(e){e!==Is&&e.next===null&&(Is===null?Ps=Is=e:Is=Is.next=e),kc=!0,Vf||(Vf=!0,ay())}function $o(e,n){if(!jf&&kc){jf=!0;do for(var a=!1,r=Ps;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var x=r.suspendedLanes,w=r.pingedLanes;u=(1<<31-ht(42|e)+1)-1,u&=l&~(x&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,gx(r,u))}else u=Nt,u=yr(r,r===Jt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Fa(r,u)||(a=!0,gx(r,u));r=r.next}while(a);jf=!1}}function iy(){hx()}function hx(){kc=Vf=!1;var e=0;rr!==0&&py()&&(e=rr);for(var n=Xe(),a=null,r=Ps;r!==null;){var l=r.next,u=mx(r,n);u===0?(r.next=null,a===null?Ps=l:a.next=l,l===null&&(Is=a)):(a=r,(e!==0||(u&3)!==0)&&(kc=!0)),r=l}on!==0&&on!==5||$o(e),rr!==0&&(rr=0)}function mx(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-ht(u),w=1<<x,B=l[x];B===-1?((w&a)===0||(w&r)!==0)&&(l[x]=go(w,n)):B<=n&&(e.expiredLanes|=w),u&=~w}if(n=Jt,a=Nt,a=yr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&tt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&tt(r),So(a)){case 2:case 8:a=X;break;case 32:a=De;break;case 268435456:a=Oe;break;default:a=De}return r=px.bind(null,e),a=Ue(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&tt(r),e.callbackPriority=2,e.callbackNode=null,2}function px(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gc()&&e.callbackNode!==a)return null;var r=Nt;return r=yr(e,e===Jt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ex(e,r,n),mx(e,Xe()),e.callbackNode!=null&&e.callbackNode===a?px.bind(null,e):null)}function gx(e,n){if(Gc())return null;ex(e,n,!0)}function ay(){xy(function(){(kt&6)!==0?Ue(ft,iy):hx()})}function Xf(){if(rr===0){var e=Ur;e===0&&(e=is,is<<=1,(is&261888)===0&&(is=256)),rr=e}return rr}function xx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zl(e)}function ry(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=xx((l[F]||null).action),x=r.submitter;x&&(n=(n=x[F]||null)?xx(n.formAction):x.getAttribute("formAction"),n!==null&&(u=n,x=null));var w=new kl("action","action",null,r,l);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rr!==0){var B=new FormData(l,x);Jd(a,{pending:!0,data:B,method:l.method,action:u},null,B)}}else typeof u=="function"&&(w.preventDefault(),B=new FormData(l,x),Jd(a,{pending:!0,data:B,method:l.method,action:u},u,B))},currentTarget:l}]})}}for(var Wf=0;Wf<gd.length;Wf++){var qf=gd[Wf],sy=qf.toLowerCase(),oy=qf[0].toUpperCase()+qf.slice(1);Ni(sy,"on"+oy)}Ni(Vp,"onAnimationEnd"),Ni(jp,"onAnimationIteration"),Ni(Xp,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(gS,"onTransitionRun"),Ni(xS,"onTransitionStart"),Ni(vS,"onTransitionCancel"),Ni(Wp,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),He("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),He("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),He("onBeforeInput",["compositionend","keypress","textInput","paste"]),He("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function vx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var x=r.length-1;0<=x;x--){var w=r[x],B=w.instance,J=w.currentTarget;if(w=w.listener,B!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=J;try{u(l)}catch(de){Xl(de)}l.currentTarget=null,u=B}else for(x=0;x<r.length;x++){if(w=r[x],B=w.instance,J=w.currentTarget,w=w.listener,B!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=J;try{u(l)}catch(de){Xl(de)}l.currentTarget=null,u=B}}}}function Ct(e,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var r=e+"__bubble";a.has(r)||(_x(n,e,2,!1),a.add(r))}function Yf(e,n,a){var r=0;n&&(r|=4),_x(a,e,r,n)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[Vc]){e[Vc]=!0,jt.forEach(function(a){a!=="selectionchange"&&(ly.has(a)||Yf(a,!1,e),Yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vc]||(n[Vc]=!0,Yf("selectionchange",!1,n))}}function _x(e,n,a,r){switch(lv(n)){case 2:var l=eM;break;case 8:l=tM;break;default:l=ph}a=l.bind(null,n,a,e),l=void 0,!nd||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function Kf(e,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var w=r.stateNode.containerInfo;if(w===l)break;if(x===4)for(x=r.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;w!==null;){if(x=lt(w),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){r=u=x;continue e}w=w.parentNode}}r=r.return}_p(function(){var J=u,de=ed(a),Se=[];e:{var Z=qp.get(e);if(Z!==void 0){var se=kl,Ie=e;switch(e){case"keypress":if(Hl(a)===0)break e;case"keydown":case"keyup":se=Wb;break;case"focusin":Ie="focus",se=sd;break;case"focusout":Ie="blur",se=sd;break;case"beforeblur":case"afterblur":se=sd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Qb;break;case Vp:case jp:case Xp:se=Bb;break;case Wp:se=$b;break;case"scroll":case"scrollend":se=Ub;break;case"wheel":se=tS;break;case"copy":case"cut":case"paste":se=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Ep;break;case"submit":se=Zb;break;case"toggle":case"beforetoggle":se=iS}var Je=(n&4)!==0,vt=!Je&&(e==="scroll"||e==="scrollend"),Q=Je?Z!==null?Z+"Capture":null:Z;Je=[];for(var H=J,ie;H!==null;){var be=H;if(ie=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||ie===null||Q===null||(be=yo(H,Q),be!=null&&Je.push(tl(H,be,ie))),vt)break;H=H.return}0<Je.length&&(Z=new se(Z,Ie,null,a,de),Se.push({event:Z,listeners:Je}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",se&&a!==$u&&(Ie=a.relatedTarget||a.fromElement)&&(lt(Ie)||Ie[he]))break e;(Z||se)&&(Ie=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,Z?(se=a.relatedTarget||a.toElement,Z=J,se=se?lt(se):null,se!==null&&(vt=d(se),Je=se.tag,se!==vt||Je!==5&&Je!==27&&Je!==6)&&(se=null)):(Z=null,se=J),Z!==se&&(Je=yp,be="onMouseLeave",Q="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Je=Ep,be="onPointerLeave",Q="onPointerEnter",H="pointer"),vt=Z==null?Ie:Ye(Z),ie=se==null?Ie:Ye(se),Ie=new Je(be,H+"leave",Z,a,de),Ie.target=vt,Ie.relatedTarget=ie,be=null,lt(de)===J&&(Je=new Je(Q,H+"enter",se,a,de),Je.target=ie,Je.relatedTarget=vt,be=Je),vt=be,Je=Z&&se?U(Z,se,cy):null,Z!==null&&bx(Se,Ie,Z,Je,!1),se!==null&&vt!==null&&bx(Se,vt,se,Je,!0)))}e:{if(Z=J?Ye(J):window,se=Z.nodeName&&Z.nodeName.toLowerCase(),se==="select"||se==="input"&&Z.type==="file")var Ze=Up;else if(Np(Z))if(Lp)Ze=hS;else{Ze=dS;var Dt=uS}else se=Z.nodeName,!se||se.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?J&&Ju(J.elementType)&&(Ze=Up):Ze=fS;if(Ze&&(Ze=Ze(e,J))){Dp(Se,Ze,a,de);break e}Dt&&Dt(e,Z,J)}switch(Dt=J?Ye(J):window,e){case"focusin":(Np(Dt)||Dt.contentEditable==="true")&&(us=Dt,hd=J,No=null);break;case"focusout":No=hd=us=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Gp(Se,a,de);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Gp(Se,a,de)}var at;if(ld)e:{switch(e){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else cs?Cp(e,a)&&(ot="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Tp&&a.locale!=="ko"&&(cs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&cs&&(at=bp()):(Ha=de,id="value"in Ha?Ha.value:Ha.textContent,cs=!0)),Dt=jc(J,ot),0<Dt.length&&(ot=new Mp(ot,e,null,a,de),Se.push({event:ot,listeners:Dt}),at?ot.data=at:(at=Rp(a),at!==null&&(ot.data=at)))),(at=rS?sS(e,a):oS(e,a))&&(ot=jc(J,"onBeforeInput"),0<ot.length&&(Dt=new Mp("onBeforeInput","beforeinput",null,a,de),Se.push({event:Dt,listeners:ot}),Dt.data=at)),ry(Se,e,J,a,de)}vx(Se,n)})}function tl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jc(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=yo(e,a),l!=null&&r.unshift(tl(e,l,u)),l=yo(e,n),l!=null&&r.push(tl(e,l,u))),e.tag===3)return r;e=e.return}return[]}function cy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bx(e,n,a,r,l){for(var u=n._reactName,x=[];a!==null&&a!==r;){var w=a,B=w.alternate,J=w.stateNode;if(w=w.tag,B!==null&&B===r)break;w!==5&&w!==26&&w!==27||J===null||(B=J,l?(J=yo(a,u),J!=null&&x.unshift(tl(a,J,B))):l||(J=yo(a,u),J!=null&&x.push(tl(a,J,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var uy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Sx(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(dy,"")}function yx(e,n){return n=Sx(n),Sx(e)===n}function Yt(e,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ss(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ss(e,""+r);else return;break;case"className":ni(e,"class",r);break;case"tabIndex":ni(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(e,a,r);break;case"style":xp(e,r,u);return;case"data":if(n!=="object"){ni(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=zl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Yt(e,n,"name",l.name,l,null),Yt(e,n,"formEncType",l.formEncType,l,null),Yt(e,n,"formMethod",l.formMethod,l,null),Yt(e,n,"formTarget",l.formTarget,l,null)):(Yt(e,n,"encType",l.encType,l,null),Yt(e,n,"method",l.method,l,null),Yt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=zl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=qi);return;case"onScroll":r!=null&&Ct("scroll",e);return;case"onScrollEnd":r!=null&&Ct("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=zl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),$t(e,"popover",r);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":$t(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Nb.get(a)||a,$t(e,a,r);else return}Et=!0}function Qf(e,n,a,r,l,u){switch(a){case"style":xp(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")ss(e,r);else if(typeof r=="number"||typeof r=="bigint")ss(e,""+r);else return;break;case"onScroll":r!=null&&Ct("scroll",e);return;case"onScrollEnd":r!=null&&Ct("scrollend",e);return;case"onClick":r!=null&&(e.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!bn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,l);break e}Et=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):$t(e,a,r)}return}Et=!0}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var x=a[u];if(x!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(e,n,u,x,a,null)}}l&&Yt(e,n,"srcSet",a.srcSet,a,null),r&&Yt(e,n,"src",a.src,a,null);return;case"input":Ct("invalid",e);var w=u=x=l=null,B=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":l=de;break;case"type":x=de;break;case"checked":B=de;break;case"defaultChecked":J=de;break;case"value":u=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Yt(e,n,r,de,a,null)}}hp(e,u,w,B,J,x,l,!1);return;case"select":Ct("invalid",e),r=x=u=null;for(l in a)if(a.hasOwnProperty(l)&&(w=a[l],w!=null))switch(l){case"value":u=w;break;case"defaultValue":x=w;break;case"multiple":r=w;default:Yt(e,n,l,w,a,null)}n=u,a=x,e.multiple=!!r,n!=null?rs(e,!!r,n,!1):a!=null&&rs(e,!!r,a,!0);return;case"textarea":Ct("invalid",e),u=l=r=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":r=w;break;case"defaultValue":l=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Yt(e,n,x,w,a,null)}pp(e,r,l,u);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Yt(e,n,B,r,a,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(r=0;r<el.length;r++)Ct(el[r],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(e,n,J,r,a,null)}return;default:if(Ju(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Qf(e,n,de,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Yt(e,n,w,r,a,null))}var fy={};function hy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,x=null,w=null,B=null,J=null,de=null;for(se in a){var Se=a[se];if(a.hasOwnProperty(se)&&Se!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":B=Se;default:r.hasOwnProperty(se)||Yt(e,n,se,null,r,Se)}}for(var Z in r){var se=r[Z];if(Se=a[Z],r.hasOwnProperty(Z)&&(se!=null||Se!=null))switch(Z){case"type":se!==Se&&(Et=!0),u=se;break;case"name":se!==Se&&(Et=!0),l=se;break;case"checked":se!==Se&&(Et=!0),J=se;break;case"defaultChecked":se!==Se&&(Et=!0),de=se;break;case"value":se!==Se&&(Et=!0),x=se;break;case"defaultValue":se!==Se&&(Et=!0),w=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:se!==Se&&Yt(e,n,Z,se,r,Se)}}Ku(e,x,w,B,J,de,u,l);return;case"select":se=x=w=Z=null;for(u in a)if(B=a[u],a.hasOwnProperty(u)&&B!=null)switch(u){case"value":break;case"multiple":se=B;default:r.hasOwnProperty(u)||Yt(e,n,u,null,r,B)}for(l in r)if(u=r[l],B=a[l],r.hasOwnProperty(l)&&(u!=null||B!=null))switch(l){case"value":u!==B&&(Et=!0),Z=u;break;case"defaultValue":u!==B&&(Et=!0),w=u;break;case"multiple":u!==B&&(Et=!0),x=u;default:u!==B&&Yt(e,n,l,u,r,B)}n=w,a=x,r=se,Z!=null?rs(e,!!a,Z,!1):!!r!=!!a&&(n!=null?rs(e,!!a,n,!0):rs(e,!!a,a?[]:"",!1));return;case"textarea":se=Z=null;for(w in a)if(l=a[w],a.hasOwnProperty(w)&&l!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Yt(e,n,w,null,r,l)}for(x in r)if(l=r[x],u=a[x],r.hasOwnProperty(x)&&(l!=null||u!=null))switch(x){case"value":l!==u&&(Et=!0),Z=l;break;case"defaultValue":l!==u&&(Et=!0),se=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Yt(e,n,x,l,r,u)}mp(e,Z,se);return;case"option":for(var Ie in a)if(Z=a[Ie],a.hasOwnProperty(Ie)&&Z!=null&&!r.hasOwnProperty(Ie))switch(Ie){case"selected":e.selected=!1;break;default:Yt(e,n,Ie,null,r,Z)}for(B in r)if(Z=r[B],se=a[B],r.hasOwnProperty(B)&&Z!==se&&(Z!=null||se!=null))switch(B){case"selected":Z!==se&&(Et=!0),e.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Yt(e,n,B,Z,r,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)Z=a[Je],a.hasOwnProperty(Je)&&Z!=null&&!r.hasOwnProperty(Je)&&Yt(e,n,Je,null,r,Z);for(J in r)if(Z=r[J],se=a[J],r.hasOwnProperty(J)&&Z!==se&&(Z!=null||se!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:Yt(e,n,J,Z,r,se)}return;default:if(Ju(n)){for(var vt in a)Z=a[vt],a.hasOwnProperty(vt)&&Z!==void 0&&!r.hasOwnProperty(vt)&&Qf(e,n,vt,void 0,r,Z);for(de in r)Z=r[de],se=a[de],!r.hasOwnProperty(de)||Z===se||Z===void 0&&se===void 0||Qf(e,n,de,Z,r,se);return}}for(var Q in a)Z=a[Q],a.hasOwnProperty(Q)&&Z!=null&&!r.hasOwnProperty(Q)&&Yt(e,n,Q,null,r,Z);for(Se in r)Z=r[Se],se=a[Se],!r.hasOwnProperty(Se)||Z===se||Z==null&&se==null||Yt(e,n,Se,Z,r,se)}function Mx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,x=l.initiatorType,w=l.duration;if(u&&w&&Mx(x)){for(x=0,w=l.responseEnd,r+=1;r<a.length;r++){var B=a[r],J=B.startTime;if(J>w)break;var de=B.transferSize,Se=B.initiatorType;de&&Mx(Se)&&(B=B.responseEnd,x+=de*(B<w?1:(w-J)/(B-J)))}if(--r,n+=8*(u+x)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function nl(e){return e.nodeType===9?e:e.ownerDocument}function Ex(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ax(e,n,a,r){return a=nl(a).createElement(e),a[A]=r,a[F]=n,Un(a,e,n),Mt(a),a}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var th=null;function py(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var nh=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,wx=typeof Promise=="function"?Promise:void 0,Cx=typeof requestAnimationFrame=="function"?requestAnimationFrame:nh,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof wx<"u"?function(e){return wx.resolve(null).then(e).catch(vy)}:nh;function vy(e){setTimeout(function(){throw e})}function sr(e){return e==="head"}function Rx(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),Vs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")uh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,uh(a);for(var u=a.firstChild;u;){var x=u.nextSibling,w=u.nodeName;u[Pe]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=x}}else a==="body"&&uh(e.ownerDocument.body);a=l}while(a);Vs(n)}function Nx(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Dx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Ux(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function _y(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function ih(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return _y(n,a,e)}function by(e){return e.documentElement.clientHeight}function Sy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function yy(e,n,a,r,l,u,x,w,B){var J=n.nodeType===9?n:n.ownerDocument;try{var de=J.startViewTransition({update:function(){var Z=J.defaultView,se=Z.navigation&&Z.navigation.transition,Ie=J.fonts.status;r();var Je=[];if(Ie==="loaded"&&(by(J),J.fonts.status==="loading"&&Je.push(J.fonts.ready)),Ie=Je.length,e!==null)for(var vt=e.suspenseyImages,Q=0,H=0;H<vt.length;H++){var ie=vt[H];if(!ie.complete){var be=ie.getBoundingClientRect();if(0<be.bottom&&0<be.right&&be.top<Z.innerHeight&&be.left<Z.innerWidth){if(Q+=$x(ie),Q>qc){Je.length=Ie;break}ie=new Promise(Sy.bind(ie)),Je.push(ie)}}}if(0<Je.length)return Z=Promise.race([Promise.all(Je),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(l,l),(se?Promise.allSettled([se.finished,Z]):Z).then(u,u);if(l(),se)return se.finished.then(u,u);u()},types:a});J.__reactViewTransition=de;var Se=[];return de.ready.then(function(){for(var Z=J.documentElement.getAnimations({subtree:!0}),se=0;se<Z.length;se++){var Ie=Z[se],Je=Ie.effect,vt=Je.pseudoElement;if(vt!=null&&vt.startsWith("::view-transition")){Se.push(Ie),Ie=Je.getKeyframes();for(var Q=vt=void 0,H=!0,ie=0;ie<Ie.length;ie++){var be=Ie[ie],Ze=be.width;if(vt===void 0)vt=Ze;else if(vt!==Ze){H=!1;break}if(Ze=be.height,Q===void 0)Q=Ze;else if(Q!==Ze){H=!1;break}delete be.width,delete be.height,be.transform==="none"&&delete be.transform}H&&vt!==void 0&&Q!==void 0&&(Je.setKeyframes(Ie),H=getComputedStyle(Je.target,Je.pseudoElement),H.width!==vt||H.height!==Q)&&(H=Ie[0],H.width=vt,H.height=Q,H=Ie[Ie.length-1],H.width=vt,H.height=Q,Je.setKeyframes(Ie))}}x()},function(Z){J.__reactViewTransition===de&&(J.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&B(Z)}finally{r(),l(),x()}}),de.finished.finally(function(){for(var Z=0;Z<Se.length;Z++)Se[Z].cancel();J.__reactViewTransition===de&&(J.__reactViewTransition=null),w()}),de}catch{return r(),l(),x(),null}}function Vr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Vr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Vr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[l])}return r},Vr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lx(e){return{name:e,group:new Vr("group",e),imagePair:new Vr("image-pair",e),old:new Vr("old",e),new:new Vr("new",e)}}function ci(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Px(u,e,n,a)===-1){var x=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(B){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(l=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Bs(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:l}),v(this._fragmentFiber.child,!1,My,e,w,r)}this._eventListeners=u}};function My(e,n,a,r){return M(e).addEventListener(n,a,r),!1}ci.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=Px(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Bs(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,Ey,e,a,l),r.splice(n,1),u!==null&&u()}};function Ey(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Bs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ox(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Px(e,n,a,r){if(e.length===0)return-1;r=Ox(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&Ox(u.optionsOrUseCapture)===r)return l}return-1}ci.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Bs(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Bs(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},ci.prototype.focus=function(e){v(this._fragmentFiber.child,!0,Ix,e,void 0,void 0)};function Ix(e,n){return e.tag===6?!1:(e=M(e),Iy(e,n))}ci.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,ah,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Ix(n[a],e);a--);};function ah(e,n){return n.push(e),!1}ci.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=M(e),e=nl(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,Ty,e,void 0,void 0))};function Ty(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,Ay,e,void 0,void 0)};function Ay(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}ci.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,wy,e,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var r=Pi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Pi[n++]=r}Pi.length=n}};function wy(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Pi=[],rh=!1;function Cy(e,n,a){Pi.push({fragmentInstance:e,observer:n,instance:a}),rh||(rh=!0,By(function(){rh=!1;var r=Pi;Pi=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ci.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,Ry,e,void 0,void 0),e};function Ry(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}ci.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},ci.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,ah,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=C(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var u=y(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),w=l.compareDocumentPosition(e),B=x&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=r&&u&&x&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&l===e||B||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ny(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ny(e,n,a,r,l){var u=lt(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=_(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=U(a,u,D),n===null?n=!1:(v(n,!0,V,u,a),u=b,b=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=U(r,u,D),n===null?n=!1:(v(n,!0,R,u,r),u=b,I=b=null,n=u!==null)),n):!1}function Bx(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,ah,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=C(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),Bx(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),Bx(l,a)):M(l).scrollIntoView(e),r+=a?-1:1}};function Dy(e,n){return e=M(e),zx(e,n),!1}function zx(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Fx(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Bs(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var x=0,w=0;w<Pi.length;w++){var B=Pi[w];(B.fragmentInstance!==n||B.observer!==u||B.instance!==e)&&(Pi[x++]=B)}Pi.length=x,u.observe(e)}),zx(e,n))}function Uy(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Bs(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?Cy(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),Qe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ly(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Pe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function Oy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function Hx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yi(e.nextSibling),e===null))return null;return e}function oh(e){return e.data==="$?"||e.data==="$~"}function lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Py(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ch=null;function Gx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return yi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function kx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Iy(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function By(e){Cx(function(){Cx(function(n){return e(n)})})}function Vx(e,n,a){switch(n=nl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function jx(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Yt(e,n,r,null,fy,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===qi&&(e.onclick=null),Qe(e)}function uh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qe(e)}var Mi=new Map,Xx=new Set;function il(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var wa=Ae.d;Ae.d={f:zy,r:Fy,D:Hy,C:Gy,L:ky,m:Vy,X:Xy,S:jy,M:Wy};function zy(){var e=wa.f(),n=zc();return e||n}function Fy(e){var n=mt(e);n!==null&&n.tag===5&&n.type==="form"?qg(n):wa.r(e)}var zs=typeof document>"u"?null:document;function Wx(e,n,a){var r=zs;if(r&&typeof n=="string"&&n){var l=pi(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Xx.has(l)||(Xx.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Un(n,"link",e),Mt(n),r.head.appendChild(n)))}}function Hy(e){wa.D(e),Wx("dns-prefetch",e,null)}function Gy(e,n){wa.C(e,n),Wx("preconnect",e,n)}function ky(e,n,a){wa.L(e,n,a);var r=zs;if(r&&e&&n){var l='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+pi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+pi(a.imageSizes)+'"]')):l+='[href="'+pi(e)+'"]';var u=l;switch(n){case"style":u=Fs(e);break;case"script":u=Hs(e)}if(!(Mi.has(u)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(u,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(al(u))||n==="script"&&r.querySelector(rl(u))))){var x=r.createElement("link");Un(x,"link",e),n==="style"&&(x[Ke]=!0,x.onload=x.onerror=function(){Kt(x)}),Mt(x),r.head.appendChild(x)}}}function Vy(e,n){wa.m(e,n);var a=zs;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hs(e)}if(!Mi.has(u)&&(e=P({rel:"modulepreload",href:e},n),Mi.set(u,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(u)))return}r=a.createElement("link"),Un(r,"link",e),Mt(r),a.head.appendChild(r)}}}function jy(e,n,a){wa.S(e,n,a);var r=zs;if(r&&e){var l=At(r).hoistableStyles,u=Fs(e);n=n||"default";var x=l.get(u);if(!x){var w={loading:0,preload:null};if(x=r.querySelector(al(u)))w.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(u))&&dh(e,a);var B=x=r.createElement("link");Mt(B),Un(B,"link",e),B._p=new Promise(function(J,de){B.onload=J,B.onerror=de}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:w},l.set(u,x)}}}function Xy(e,n){wa.X(e,n);var a=zs;if(a&&e){var r=At(a).hoistableScripts,l=Hs(e),u=r.get(l);u||(u=a.querySelector(rl(l)),u||(e=P({src:e,async:!0},n),(n=Mi.get(l))&&fh(e,n),u=a.createElement("script"),Mt(u),Un(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Wy(e,n){wa.M(e,n);var a=zs;if(a&&e){var r=At(a).hoistableScripts,l=Hs(e),u=r.get(l);u||(u=a.querySelector(rl(l)),u||(e=P({src:e,async:!0,type:"module"},n),(n=Mi.get(l))&&fh(e,n),u=a.createElement("script"),Mt(u),Un(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function qx(e,n,a,r){var l=(l=Ft.current)?il(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Fs(a.href),n=At(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fs(a.href);var u=At(l).hoistableStyles,x=u.get(e);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=l.querySelector(al(e)))?u._p||(x.instance=u,x.state.loading=5):(u=Mi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,u)),qy(l,e,u,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Hs(a),n=At(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Fs(e){return'href="'+pi(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function Yx(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function qy(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ke]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ke]=!0,n.onload=n.onerror=Kt.bind(null,n),Un(n,"link",a),Mt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Hs(e){return'[src="'+pi(e)+'"]'}function rl(e){return"script[async]"+e}function Zx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+pi(a.href)+'"]');if(r)return n.instance=r,Mt(r),r;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Mt(r),Un(r,"style",l),Xc(r,a.precedence,e),n.instance=r;case"stylesheet":l=Fs(a.href);var u=e.querySelector(al(l));if(u)return n.state.loading|=4,n.instance=u,Mt(u),u;r=Yx(a),(l=Mi.get(l))&&dh(r,l),u=(e.ownerDocument||e).createElement("link"),Mt(u);var x=u;return x._p=new Promise(function(w,B){x.onload=w,x.onerror=B}),Un(u,"link",r),n.state.loading|=4,Xc(u,a.precedence,e),n.instance=u;case"script":return u=Hs(a.src),(l=e.querySelector(rl(u)))?(n.instance=l,Mt(l),l):(r=a,(l=Mi.get(u))&&(r=P({},a),fh(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Mt(l),Un(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xc(r,a.precedence,e));return n.instance}function Xc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,x=0;x<r.length;x++){var w=r[x];if(w.dataset.precedence===n)u=w;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wc=null;function Kx(e,n,a){if(Wc===null){var r=new Map,l=Wc=new Map;l.set(a,r)}else l=Wc,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Pe]||u[A]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(n)||"";x=e+x;var w=r.get(x);w?w.push(u):r.set(x,[u])}}return r}function hh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qx(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Jx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $x(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ev(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=$x(n),e.suspenseyImages.push(n)),e=Qy.bind(e),n.decode().then(e,e))}function Zy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Fs(r.href),u=n.querySelector(al(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=sl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,Mt(u);return}u=n.ownerDocument||n,r=Yx(r),(l=Mi.get(l))&&dh(r,l),u=u.createElement("link"),Mt(u);var x=u;x._p=new Promise(function(w,B){x.onload=w,x.onerror=B}),Un(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=sl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var qc=0;function Ky(e,n){return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&qc===0&&(qc=62500*my());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>qc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function tv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Zc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function sl(){this.count--,tv(this)}function Qy(){this.imgCount--,tv(this)}var Yc=null;function Zc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yc=new Map,n.forEach(Jy,e),Yc=null,sl.call(e))}function Jy(e,n){if(!(n.state.loading&4)){var a=Yc.get(e);if(a)var r=a.get(null);else{a=new Map,Yc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var x=l[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}l=n.instance,x=l.getAttribute("data-precedence"),u=a.get(x)||r,u===r&&a.set(null,l),a.set(x,l),this.count++,r=sl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Gs={$$typeof:$,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function $y(e,n,a,r,l,u,x,w,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function nv(e,n,a,r,l,u,x,w,B,J,de,Se){return e=new $y(e,n,a,x,B,J,de,Se,w),n=1,u===!0&&(n|=24),u=qn(3,null,null,n),e.current=u,u.stateNode=e,n=wd(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},Dd(u),e}function iv(e){return e?(e=hs,e):hs}function av(e,n,a,r,l,u){l=iv(l),r.context===null?r.context=l:r.pendingContext=l,r=Ya(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Za(e,r,n),a!==null&&(Qn(a,e,n),Bo(a,e,n))}function rv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mh(e,n){rv(e,n),(e=e.alternate)&&rv(e,n)}function sv(e){if(e.tag===13||e.tag===31){var n=Ar(e,67108864);n!==null&&Qn(n,e,67108864),mh(e,67108864)}}function ov(e){if(e.tag===13||e.tag===31){var n=li();n=bo(n);var a=Ar(e,n);a!==null&&Qn(a,e,n),mh(e,n)}}var ks=!0;function eM(e,n,a,r){var l=ge.T;ge.T=null;var u=Ae.p;try{Ae.p=2,ph(e,n,a,r)}finally{Ae.p=u,ge.T=l}}function tM(e,n,a,r){var l=ge.T;ge.T=null;var u=Ae.p;try{Ae.p=8,ph(e,n,a,r)}finally{Ae.p=u,ge.T=l}}function ph(e,n,a,r){if(ks){var l=gh(r);if(l===null)Kf(e,n,r,Kc,a),cv(e,r);else if(iM(l,e,n,a,r))r.stopPropagation();else if(cv(e,r),n&4&&-1<nM.indexOf(e)){for(;l!==null;){var u=mt(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=ha(u.pendingLanes);if(x!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var B=1<<31-ht(x);w.entanglements[1]|=B,x&=~B}ia(u),(kt&6)===0&&(Pc=Xe()+500,$o(0))}}break;case 31:case 13:w=Ar(u,2),w!==null&&Qn(w,u,2),zc(),mh(u,2)}if(u=gh(r),u===null&&Kf(e,n,r,Kc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Kf(e,n,r,null,a)}}function gh(e){return e=ed(e),xh(e)}var Kc=null;function xh(e){if(Kc=null,e=lt(e),e!==null){var n=d(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kc=e,null}function lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case ft:return 2;case X:return 8;case De:case Me:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var vh=!1,or=null,lr=null,cr=null,ol=new Map,ll=new Map,ur=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cv(e,n){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function cl(e,n,a,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=mt(n),n!==null&&sv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function iM(e,n,a,r,l){switch(n){case"focusin":return or=cl(or,e,n,a,r,l),!0;case"dragenter":return lr=cl(lr,e,n,a,r,l),!0;case"mouseover":return cr=cl(cr,e,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return ol.set(u,cl(ol.get(u)||null,e,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,ll.set(u,cl(ll.get(u)||null,e,n,a,r,l)),!0}return!1}function uv(e){var n=lt(e.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Il(e.priority,function(){ov(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,Il(e.priority,function(){ov(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);$u=r,a.target.dispatchEvent(r),$u=null}else return n=mt(a),n!==null&&sv(n),e.blockedOn=a,!1;n.shift()}return!0}function dv(e,n,a){Qc(e)&&a.delete(n)}function aM(){vh=!1,or!==null&&Qc(or)&&(or=null),lr!==null&&Qc(lr)&&(lr=null),cr!==null&&Qc(cr)&&(cr=null),ol.forEach(dv),ll.forEach(dv)}function Jc(e,n){e.blockedOn===n&&(e.blockedOn=null,vh||(vh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aM)))}var $c=null;function fv(e){$c!==e&&($c=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$c===e&&($c=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(xh(r||a)===null)continue;break}var u=mt(a);u!==null&&(e.splice(n,3),n-=3,Jd(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Vs(e){function n(B){return Jc(B,e)}or!==null&&Jc(or,e),lr!==null&&Jc(lr,e),cr!==null&&Jc(cr,e),ol.forEach(n),ll.forEach(n);for(var a=0;a<ur.length;a++){var r=ur[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ur.length&&(a=ur[0],a.blockedOn===null);)uv(a),a.blockedOn===null&&ur.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],x=l[F]||null;if(typeof u=="function")x||fv(a);else if(x){var w=null;if(u&&u.hasAttribute("formAction")){if(l=u,x=u[F]||null)w=x.formAction;else if(xh(l)!==null)continue}else w=x.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),fv(a)}}}function hv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(x){return l=x})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function _h(e){this._internalRoot=e}eu.prototype.render=_h.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();av(a,r,e,n,null,null)},eu.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;av(e.current,2,null,e,null,null),zc(),n[he]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ur.length&&n!==0&&n<ur[a].priority;a++);ur.splice(a,0,e),a===0&&uv(e)}};var mv=t.version;if(mv!=="19.3.0")throw Error(s(527,mv,"19.3.0"));Ae.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var rM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ge,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{et=tu.inject(rM),ke=tu}catch{}}return dl.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",l=i0,u=a0,x=r0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=nv(e,1,!1,null,null,a,r,null,l,u,x,hv),e[he]=n.current,Zf(e),new _h(n)},dl.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,l="",u=i0,x=a0,w=r0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=nv(e,1,!0,n,a??null,r,l,B,u,x,w,hv),n.context=iv(null),a=n.current,r=li(),r=bo(r),l=Ya(r),l.callback=null,Za(a,l,r),a=r,n.current.lanes=a,Xi(n,a),ia(n),e[he]=n.current,Zf(e),new eu(n)},dl.version="19.3.0",dl}var Ev;function pM(){if(Ev)return yh.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yh.exports=mM(),yh.exports}var gM=pM();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vM=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Tv=o=>{const t=vM(o);return t.charAt(0).toUpperCase()+t.slice(1)},C_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),_M=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=bt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:f,...m},g)=>bt.createElement("svg",{ref:g,...bM,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:C_("lucide",c),...!d&&!_M(m)&&{"aria-hidden":"true"},...m},[...f.map(([p,S])=>bt.createElement(p,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(o,t)=>{const i=bt.forwardRef(({className:s,...c},d)=>bt.createElement(SM,{ref:d,iconNode:t,className:C_(`lucide-${xM(Tv(o))}`,`lucide-${o}`,s),...c}));return i.displayName=Tv(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],R_=St("arrow-right",yM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],EM=St("arrow-up-right",MM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],AM=St("arrow-up",TM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],El=St("award",wM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],RM=St("badge-check",CM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],lo=St("building-2",NM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],UM=St("building",DM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Av=St("calculator",LM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],PM=St("calendar",OM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],BM=St("car",IM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],FM=St("check",zM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],GM=St("chevron-right",HM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],_r=St("circle-check",kM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],N_=St("circle",VM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],XM=St("clock",jM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],D_=St("compass",WM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],YM=St("copy",qM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Nl=St("external-link",ZM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],U_=St("file-check",KM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],am=St("file-text",QM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],rm=St("folder-git-2",JM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],e1=St("hard-hat",$M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],L_=St("indian-rupee",t1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],O_=St("layers",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],a1=St("lock",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ca=St("map-pin",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],o1=St("maximize-2",s1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],c1=St("menu",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],co=St("message-square",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],f1=St("navigation",d1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],P_=St("pause",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Tl=St("phone",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],I_=St("play",p1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],x1=St("printer",g1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],_1=St("search",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],S1=St("send",b1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],br=St("shield-check",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],B_=St("sparkles",M1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],T1=St("trending-up",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],z_=St("wrench",A1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gu=St("x",w1),We={firmName:"NK Construction",proprietor:"Er. Nilesh R. Patil",qualification:"B.E. (Civil), M.I.E., Chartered Engineer (India)",regNumber:"PWD/MH/JAL/CLASS-1A/042",addressLine1:"Patil Chambers, 1st & 2nd Floor, Station Road",addressLine2:"Opposite PWD Sub-Divisional Office & Guest House, Near Court Chowk",landmark:"5 Minutes walk from Amalner Railway Station & Near Pratap College Chowk",city:"Amalner",taluka:"Amalner Taluka",district:"Jalgaon District (खान्देश / Khandesh Region)",state:"Maharashtra",pincode:"425401",mobiles:["+91 88477 06600","+91 8847706600"],whatsapp:"+918847706600",emails:["contact@nkconstruction-amalner.com","er.nileshpatil@gmail.com"],timing:"09:30 AM to 08:30 PM (IST)",days:"Monday through Saturday (Sunday by Prior Appointment for Tender Scrutiny)",coordinates:{lat:21.0454,lng:75.0594},googleMapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.32688320496!2d75.0485984478148!3d21.045391295240974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd92a9cb256b823%3A0xe543faee3bb3d752!2sAmalner%2C%20Maharashtra%20425401!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",googleMapDirectUrl:"https://maps.google.com/?q=Amalner,+Jalgaon,+Maharashtra+425401"},C1=[{destination:"Dhule City / NH-52 Hub",distance:"35 km",travelTime:"45 mins",route:"Amalner-Dhule Road"},{destination:"Jalgaon District Headquarters",distance:"58 km",travelTime:"1 hr 10 mins",route:"Via Dharangaon State Highway"},{destination:"Chopda & Tapi River Belt",distance:"34 km",travelTime:"40 mins",route:"Via Amalner-Chopda SH-19"},{destination:"Parola (Mumbai-Nagpur NH-53)",distance:"24 km",travelTime:"30 mins",route:"Amalner-Parola MDR"},{destination:"Chalisgaon Junction",distance:"62 km",travelTime:"1 hr 15 mins",route:"Via Nagardeola"},{destination:"Nashik PWD Regional Circle",distance:"175 km",travelTime:"3 hrs 30 mins",route:"Via Dhule - NH 60"}],R1=[{id:"batch-mix-plant",name:"Asphalt Batch Mix Plant (Hot Mix Plant)",model:"Apollo Counterflow Eco-Mix 120 TPH",count:2,capacity:"120 Tonnes / Hour with SCADA",category:"Road & Paving",status:"Owned & Operational",specs:"Microprocessor controlled 4-bin cold aggregate feeder with pollution control bag-house filter for VG-30 & PMB asphalt."},{id:"sensor-paver",name:"Electronic Sensor Hydrostatic Paver Finisher",model:"Vögele Super 1800-3 / Apollo AP 550",count:2,capacity:"Up to 9.0 Meter Paving Width",category:"Road & Paving",status:"Owned & Operational",specs:"Dual-grade automatic electronic sensor leveling for precision asphalt finish compliant with MoRTH 5th revision standards."},{id:"vibratory-rollers",name:"Tandem & Soil Vibratory Compactor Rollers",model:"Hamm 311D & CASE 1107 EX-D (11 Tonnes)",count:5,capacity:"11 to 12 Tonnes Operating Weight",category:"Road & Paving",status:"Owned & Operational",specs:"High dynamic compaction amplitude for GSB, WMM sub-base and pneumatic tire rollers for bituminous finishing."},{id:"excavator-fleet",name:"Heavy Hydraulic Excavators & Backhoe Loaders",model:"Tata Hitachi EX 200 LC & JCB 3DX Super 4WD",count:6,capacity:"0.9 m³ to 1.2 m³ Bucket Capacity",category:"Earthmoving",status:"Owned & Operational",specs:"Equipped with heavy rock-breaker attachments for hard Khandesh basalt trenching, canal cuts, and foundation excavation."},{id:"concrete-batching",name:"Computerized Concrete Batching Plant & RMC Fleet",model:"Schwing Stetter CP 30 & Ajax Fiori Transit Mixers",count:4,capacity:"30 m³ / Hour Output + 6m³ Mixers",category:"Concreting",status:"Owned & Operational",specs:"Automated digital weighing for M25, M30, M35, and M45 bridge and ESR high-grade concrete with chilled water setup."},{id:"survey-testing-lab",name:"DGPS, Leica Total Station & NABL Field QC Lab",model:"Leica TS07 Total Station + Cube Testing Rig (2000 kN)",count:3,capacity:"Sub-centimeter Topo Survey + ASTM/IS Test",category:"Testing & Survey",status:"Owned & Operational",specs:"In-house mobile laboratory equipped for core cutting, aggregate impact test, bitumen extraction, and 28-day concrete cube testing."}],N1=[{value:"22+",label:"Years of Engineering Practice",subtext:"Established 2002 in Amalner"},{value:"₹ 185+ Cr",label:"Government Works Executed",subtext:"Across Jalgaon, Dhule & Nashik"},{value:"74+",label:"Completed Infrastructure Works",subtext:"PWD, MJP, ZP & Irrigation"},{value:"Class 1-A",label:"Government Contractor Grade",subtext:"Unlimited Bidding Capacity"},{value:"100%",label:"Quality Audit Clearances",subtext:"Third-party & Vigilance Passed"},{value:"45+ Units",label:"Heavy Machinery & Plant Fleet",subtext:"100% In-house Owned Assets"}],D1=({onNavigate:o,activeSection:t})=>{const[i,s]=bt.useState(!1),c=[{id:"projects",label:"Past Projects",icon:rm},{id:"certifications",label:"Govt. Licenses",icon:El},{id:"machinery",label:"Machinery Fleet",icon:z_},{id:"location",label:"Amalner Office",icon:ca},{id:"inquiry",label:"Tender & BOQ Estimator",icon:am}],d=f=>{o(f),s(!1)};return h.jsxs("header",{className:"sticky top-0 z-40",children:[h.jsx("div",{className:"bg-obsidian text-stone-light text-[11px] border-b border-charcoal-border/80 hidden md:block",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("span",{className:"inline-flex items-center gap-1.5 text-gold-light font-medium tracking-wide",children:[h.jsx(br,{className:"w-3.5 h-3.5 text-gold"}),h.jsx("span",{children:"महाराष्ट्र शासन नोंदणीकृत वर्ग १-अ कंत्राटदार (PWD Class 1-A Unlimited)"})]}),h.jsx("span",{className:"text-charcoal-border",children:"•"}),h.jsxs("span",{className:"font-mono text-stone-muted",children:["Reg: ",We.regNumber]})]}),h.jsxs("div",{className:"flex items-center gap-4 text-stone-light",children:[h.jsxs("span",{className:"flex items-center gap-1 text-stone-muted",children:[h.jsx(ca,{className:"w-3 h-3 text-terracotta"}),"Amalner HQ: Station Road, Opp. PWD Sub-Division"]}),h.jsx("span",{className:"text-charcoal-border",children:"•"}),h.jsxs("a",{href:`tel:${We.mobiles[0]}`,className:"flex items-center gap-1 hover:text-white transition-colors font-medium font-mono text-stone-light",children:[h.jsx(Tl,{className:"w-3 h-3 text-gold"}),"Direct Tender Desk: ",We.mobiles[0]]})]})]})}),h.jsx("div",{className:"bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]",children:h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"flex items-center justify-between h-20",children:[h.jsxs("div",{onClick:()=>d("hero"),className:"flex items-center gap-3.5 cursor-pointer group select-none",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-obsidian border border-gold/30 flex items-center justify-center text-gold shadow-md group-hover:border-gold/60 group-hover:scale-[1.02] transition-all",children:h.jsx(lo,{className:"w-6 h-6 text-gold"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-heading font-bold text-xl text-warm-dark tracking-tight group-hover:text-terracotta transition-colors",children:"Er. Nilesh R. Patil"}),h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-gold-badge text-gold-dark px-2 py-0.5 rounded-md border border-gold/30 shadow-2xs",children:"Class 1-A"})]}),h.jsxs("p",{className:"text-xs text-stone-muted font-medium tracking-wide flex items-center gap-1.5",children:[h.jsx("span",{children:"NK Construction"}),h.jsx("span",{className:"text-sand-dark",children:"•"}),h.jsx("span",{children:"Amalner, Khandesh (Est. 2002)"})]})]})]}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:c.map(f=>{const m=f.icon,g=t===f.id;return h.jsxs("button",{id:`nav-link-${f.id}`,onClick:()=>d(f.id),className:`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${g?"bg-warm-dark text-white shadow-sm":"text-stone-dark hover:text-warm-dark hover:bg-stone-100"}`,children:[h.jsx(m,{className:`w-4 h-4 ${g?"text-gold":"text-stone-muted"}`}),f.label]},f.id)})}),h.jsxs("div",{className:"hidden sm:flex items-center gap-2.5",children:[h.jsxs("button",{id:"nav-quick-cert-btn",onClick:()=>d("certifications"),className:"px-3.5 py-2 text-xs font-semibold text-warm-dark bg-alabaster hover:bg-stone-100 rounded-xl border border-stone-300/80 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs",children:[h.jsx(El,{className:"w-3.5 h-3.5 text-gold-dark"}),h.jsx("span",{children:"Verify License"})]}),h.jsxs("button",{id:"nav-office-visit-btn",onClick:()=>d("inquiry"),className:"px-4 py-2 text-xs font-bold text-white bg-terracotta hover:bg-terracotta-hover rounded-xl shadow-md hover:shadow-terracotta/25 transition-all flex items-center gap-1.5 cursor-pointer",children:[h.jsx(am,{className:"w-3.5 h-3.5 text-cream"}),h.jsx("span",{children:"BOQ Estimator"})]})]}),h.jsx("div",{className:"lg:hidden flex items-center",children:h.jsx("button",{id:"mobile-menu-toggle-btn",onClick:()=>s(!i),className:"p-2.5 rounded-xl text-warm-dark hover:text-terracotta hover:bg-stone-100 focus:outline-hidden transition-colors","aria-label":"Toggle navigation menu",children:i?h.jsx(Gu,{className:"w-6 h-6"}):h.jsx(c1,{className:"w-6 h-6"})})})]})})}),i&&h.jsxs("div",{className:"lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200",children:[h.jsxs("div",{className:"p-3.5 bg-gradient-to-r from-sand/20 to-alabaster rounded-xl border border-sand/70 mb-3",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-gold-dark font-bold text-xs",children:[h.jsx(br,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"शासकीय नोंदणीकृत वर्ग १-अ कंत्राटदार"})]}),h.jsx("p",{className:"text-[11px] text-stone-muted mt-1 leading-snug",children:"Patil Chambers, Station Road, Opp. PWD Guest House, Amalner (Dist. Jalgaon)"})]}),c.map(f=>{const m=f.icon,g=t===f.id;return h.jsxs("button",{id:`mobile-nav-${f.id}`,onClick:()=>d(f.id),className:`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${g?"bg-warm-dark text-white":"text-stone-dark hover:bg-stone-100"}`,children:[h.jsx(m,{className:`w-5 h-5 ${g?"text-gold":"text-stone-muted"}`}),f.label]},f.id)}),h.jsxs("div",{className:"pt-3 border-t border-stone-200 flex flex-col gap-2",children:[h.jsxs("a",{href:`tel:${We.mobiles[0]}`,className:"w-full flex items-center justify-center gap-2 py-2.5 bg-warm-dark text-white rounded-xl text-xs font-bold hover:bg-warm-surface transition-colors",children:[h.jsx(Tl,{className:"w-4 h-4 text-gold"}),"Call Office: ",We.mobiles[0]]}),h.jsxs("a",{href:`https://wa.me/${We.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-colors",children:[h.jsx(co,{className:"w-4 h-4"}),"WhatsApp Amalner Office"]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Km="186",U1=0,wv=1,L1=2,Cu=1,O1=2,Sl=3,Qr=0,$n=1,La=2,Pa=0,Ml=1,Cv=2,Rv=3,Nv=4,P1=5,ao=100,I1=101,B1=102,z1=103,F1=104,H1=200,G1=201,k1=202,V1=203,F_=204,H_=205,j1=206,X1=207,W1=208,q1=209,Y1=210,Z1=211,K1=212,Q1=213,J1=214,sm=0,om=1,lm=2,Al=3,cm=4,um=5,dm=6,fm=7,G_=0,$1=1,eE=2,la=0,k_=1,V_=2,j_=3,X_=4,W_=5,q_=6,Y_=7,Z_=300,Jr=301,uo=302,Ah=303,wh=304,ku=306,hm=1e3,Oa=1001,mm=1002,On=1003,tE=1004,nu=1005,zn=1006,Ch=1007,Zr=1008,Ai=1009,K_=1010,Q_=1011,wl=1012,Qm=1013,ua=1014,Hi=1015,da=1016,Jm=1017,$m=1018,Cl=1020,J_=35902,$_=35899,eb=1021,tb=1022,Gi=1023,Ba=1026,Kr=1027,ep=1028,tp=1029,$r=1030,np=1031,ip=1033,Ru=33776,Nu=33777,Du=33778,Uu=33779,pm=35840,gm=35841,xm=35842,vm=35843,_m=36196,bm=37492,Sm=37496,ym=37488,Mm=37489,Ou=37490,Em=37491,Tm=37808,Am=37809,wm=37810,Cm=37811,Rm=37812,Nm=37813,Dm=37814,Um=37815,Lm=37816,Om=37817,Pm=37818,Im=37819,Bm=37820,zm=37821,Fm=36492,Hm=36494,Gm=36495,km=36283,Vm=36284,Pu=36285,jm=36286,nE=3200,Dv=0,iE=1,vr="",Ti="srgb",Iu="srgb-linear",Bu="linear",Zt="srgb",Rh=7680,aE=519,rE=512,sE=513,oE=514,ap=515,lE=516,cE=517,rp=518,uE=519,dE=35044,fE=35048,Uv="300 es",oa=2e3,zu=2001;function hE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mE(){const o=Fu("canvas");return o.style.display="block",o}const Lv={};function Ov(...o){const t="THREE."+o.shift();console.log(t,...o)}function nb(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ut(...o){o=nb(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ht(...o){o=nb(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function so(...o){const t=o.join(" ");t in Lv||(Lv[t]=!0,ut(...o))}function pE(o,t,i){return new Promise(function(s,c){function d(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(d,i);break;default:s()}}setTimeout(d,i)})}const gE={[sm]:om,[lm]:dm,[cm]:fm,[Al]:um,[om]:sm,[dm]:lm,[fm]:cm,[um]:Al};class ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const d=c.indexOf(i);d!==-1&&c.splice(d,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let d=0,f=c.length;d<f;d++)c[d].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=Math.PI/180,Xm=180/Math.PI;function Dl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Pt(o,t,i){return Math.max(t,Math.min(i,o))}function xE(o,t){return(o%t+t)%t}function Dh(o,t,i){return(1-i)*o+i*t}function fl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const op=class op{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Pt(this.x,t.x,i.x),this.y=Pt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Pt(this.x,t,i),this.y=Pt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),d=this.x-t.x,f=this.y-t.y;return this.x=d*s-f*c+t.x,this.y=d*c+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};op.prototype.isVector2=!0;let Vt=op;class ho{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,d,f,m){let g=s[c+0],p=s[c+1],S=s[c+2],v=s[c+3],_=d[f+0],y=d[f+1],C=d[f+2],N=d[f+3];if(v!==N||g!==_||p!==y||S!==C){let M=g*_+p*y+S*C+v*N;M<0&&(_=-_,y=-y,C=-C,N=-N,M=-M);let b=1-m;if(M<.9995){const I=Math.acos(M),V=Math.sin(I);b=Math.sin(b*I)/V,m=Math.sin(m*I)/V,g=g*b+_*m,p=p*b+y*m,S=S*b+C*m,v=v*b+N*m}else{g=g*b+_*m,p=p*b+y*m,S=S*b+C*m,v=v*b+N*m;const I=1/Math.sqrt(g*g+p*p+S*S+v*v);g*=I,p*=I,S*=I,v*=I}}t[i]=g,t[i+1]=p,t[i+2]=S,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,c,d,f){const m=s[c],g=s[c+1],p=s[c+2],S=s[c+3],v=d[f],_=d[f+1],y=d[f+2],C=d[f+3];return t[i]=m*C+S*v+g*y-p*_,t[i+1]=g*C+S*_+p*v-m*y,t[i+2]=p*C+S*y+m*_-g*v,t[i+3]=S*C-m*v-g*_-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,d=t._z,f=t._order,m=Math.cos,g=Math.sin,p=m(s/2),S=m(c/2),v=m(d/2),_=g(s/2),y=g(c/2),C=g(d/2);switch(f){case"XYZ":this._x=_*S*v+p*y*C,this._y=p*y*v-_*S*C,this._z=p*S*C+_*y*v,this._w=p*S*v-_*y*C;break;case"YXZ":this._x=_*S*v+p*y*C,this._y=p*y*v-_*S*C,this._z=p*S*C-_*y*v,this._w=p*S*v+_*y*C;break;case"ZXY":this._x=_*S*v-p*y*C,this._y=p*y*v+_*S*C,this._z=p*S*C+_*y*v,this._w=p*S*v-_*y*C;break;case"ZYX":this._x=_*S*v-p*y*C,this._y=p*y*v+_*S*C,this._z=p*S*C-_*y*v,this._w=p*S*v+_*y*C;break;case"YZX":this._x=_*S*v+p*y*C,this._y=p*y*v+_*S*C,this._z=p*S*C-_*y*v,this._w=p*S*v-_*y*C;break;case"XZY":this._x=_*S*v-p*y*C,this._y=p*y*v-_*S*C,this._z=p*S*C+_*y*v,this._w=p*S*v+_*y*C;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],d=i[8],f=i[1],m=i[5],g=i[9],p=i[2],S=i[6],v=i[10],_=s+m+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(S-g)*y,this._y=(d-p)*y,this._z=(f-c)*y}else if(s>m&&s>v){const y=2*Math.sqrt(1+s-m-v);this._w=(S-g)/y,this._x=.25*y,this._y=(c+f)/y,this._z=(d+p)/y}else if(m>v){const y=2*Math.sqrt(1+m-s-v);this._w=(d-p)/y,this._x=(c+f)/y,this._y=.25*y,this._z=(g+S)/y}else{const y=2*Math.sqrt(1+v-s-m);this._w=(f-c)/y,this._x=(d+p)/y,this._y=(g+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,d=t._z,f=t._w,m=i._x,g=i._y,p=i._z,S=i._w;return this._x=s*S+f*m+c*p-d*g,this._y=c*S+f*g+d*m-s*p,this._z=d*S+f*p+s*g-c*m,this._w=f*S-s*m-c*g-d*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,d=t._z,f=t._w,m=this.dot(t);m<0&&(s=-s,c=-c,d=-d,f=-f,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),S=Math.sin(p);g=Math.sin(g*p)/S,i=Math.sin(i*p)/S,this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+d*i,this._w=this._w*g+f*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+c*i,this._z=this._z*g+d*i,this._w=this._w*g+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),d=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),d*Math.sin(i),d*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lp=class lp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,d=t.elements;return this.x=d[0]*i+d[3]*s+d[6]*c,this.y=d[1]*i+d[4]*s+d[7]*c,this.z=d[2]*i+d[5]*s+d[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,d=t.elements,f=1/(d[3]*i+d[7]*s+d[11]*c+d[15]);return this.x=(d[0]*i+d[4]*s+d[8]*c+d[12])*f,this.y=(d[1]*i+d[5]*s+d[9]*c+d[13])*f,this.z=(d[2]*i+d[6]*s+d[10]*c+d[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,d=t.x,f=t.y,m=t.z,g=t.w,p=2*(f*c-m*s),S=2*(m*i-d*c),v=2*(d*s-f*i);return this.x=i+g*p+f*v-m*S,this.y=s+g*S+m*p-d*v,this.z=c+g*v+d*S-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c,this.y=d[1]*i+d[5]*s+d[9]*c,this.z=d[2]*i+d[6]*s+d[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Pt(this.x,t.x,i.x),this.y=Pt(this.y,t.y,i.y),this.z=Pt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Pt(this.x,t,i),this.y=Pt(this.y,t,i),this.z=Pt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,d=t.z,f=i.x,m=i.y,g=i.z;return this.x=c*g-d*m,this.y=d*f-s*g,this.z=s*m-c*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Uh.copy(this).projectOnVector(t),this.sub(Uh)}reflect(t){return this.sub(Uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lp.prototype.isVector3=!0;let me=lp;const Uh=new me,Pv=new ho,cp=class cp{constructor(t,i,s,c,d,f,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,d,f,m,g,p)}set(t,i,s,c,d,f,m,g,p){const S=this.elements;return S[0]=t,S[1]=c,S[2]=m,S[3]=i,S[4]=d,S[5]=g,S[6]=s,S[7]=f,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,d=this.elements,f=s[0],m=s[3],g=s[6],p=s[1],S=s[4],v=s[7],_=s[2],y=s[5],C=s[8],N=c[0],M=c[3],b=c[6],I=c[1],V=c[4],R=c[7],D=c[2],U=c[5],P=c[8];return d[0]=f*N+m*I+g*D,d[3]=f*M+m*V+g*U,d[6]=f*b+m*R+g*P,d[1]=p*N+S*I+v*D,d[4]=p*M+S*V+v*U,d[7]=p*b+S*R+v*P,d[2]=_*N+y*I+C*D,d[5]=_*M+y*V+C*U,d[8]=_*b+y*R+C*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],d=t[3],f=t[4],m=t[5],g=t[6],p=t[7],S=t[8];return i*f*S-i*m*p-s*d*S+s*m*g+c*d*p-c*f*g}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],d=t[3],f=t[4],m=t[5],g=t[6],p=t[7],S=t[8],v=S*f-m*p,_=m*g-S*d,y=p*d-f*g,C=i*v+s*_+c*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/C;return t[0]=v*N,t[1]=(c*p-S*s)*N,t[2]=(m*s-c*f)*N,t[3]=_*N,t[4]=(S*i-c*g)*N,t[5]=(c*d-m*i)*N,t[6]=y*N,t[7]=(s*g-p*i)*N,t[8]=(f*i-s*d)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,d,f,m){const g=Math.cos(d),p=Math.sin(d);return this.set(s*g,s*p,-s*(g*f+p*m)+f+t,-c*p,c*g,-c*(-p*f+g*m)+m+i,0,0,1),this}scale(t,i){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(t,i)),this}rotate(t){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-t)),this}translate(t,i){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cp.prototype.isMatrix3=!0;let pt=cp;const Lh=new pt,Iv=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bv=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const o={enabled:!0,workingColorSpace:Iu,spaces:{},convert:function(c,d,f){return this.enabled===!1||d===f||!d||!f||(this.spaces[d].transfer===Zt&&(c.r=Ia(c.r),c.g=Ia(c.g),c.b=Ia(c.b)),this.spaces[d].primaries!==this.spaces[f].primaries&&(c.applyMatrix3(this.spaces[d].toXYZ),c.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Zt&&(c.r=oo(c.r),c.g=oo(c.g),c.b=oo(c.b))),c},workingToColorSpace:function(c,d){return this.convert(c,this.workingColorSpace,d)},colorSpaceToWorking:function(c,d){return this.convert(c,d,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===vr?Bu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,d=this.workingColorSpace){return c.fromArray(this.spaces[d].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,d,f){return c.copy(this.spaces[d].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,d){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,d)},toWorkingColorSpace:function(c,d){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,d)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Iu]:{primaries:t,whitePoint:s,transfer:Bu,toXYZ:Iv,fromXYZ:Bv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:Zt,toXYZ:Iv,fromXYZ:Bv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Ot=vE();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let js;class _E{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{js===void 0&&(js=Fu("canvas")),js.width=t.width,js.height=t.height;const c=js.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=js}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),d=c.data;for(let f=0;f<d.length;f++)d[f]=Ia(d[f]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ia(i[s]/255)*255):i[s]=Ia(i[s]);return{data:i,width:t.width,height:t.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bE=0;class sp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Dl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let d;if(Array.isArray(c)){d=[];for(let f=0,m=c.length;f<m;f++)c[f].isDataTexture?d.push(Oh(c[f].image)):d.push(Oh(c[f]))}else d=Oh(c);s.url=d}return i||(t.images[this.uuid]=s),s}}function Oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_E.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let SE=0;const Ph=new me;class Wn extends ts{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Oa,c=Oa,d=zn,f=Zr,m=Gi,g=Ai,p=Wn.DEFAULT_ANISOTROPY,S=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Dl(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=d,this.minFilter=f,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Z_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hm:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case mm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hm:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case mm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Z_;Wn.DEFAULT_ANISOTROPY=1;const up=class up{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,d=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c+f[12]*d,this.y=f[1]*i+f[5]*s+f[9]*c+f[13]*d,this.z=f[2]*i+f[6]*s+f[10]*c+f[14]*d,this.w=f[3]*i+f[7]*s+f[11]*c+f[15]*d,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,d;const g=t.elements,p=g[0],S=g[4],v=g[8],_=g[1],y=g[5],C=g[9],N=g[2],M=g[6],b=g[10];if(Math.abs(S-_)<.01&&Math.abs(v-N)<.01&&Math.abs(C-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+N)<.1&&Math.abs(C+M)<.1&&Math.abs(p+y+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const V=(p+1)/2,R=(y+1)/2,D=(b+1)/2,U=(S+_)/4,P=(v+N)/4,T=(C+M)/4;return V>R&&V>D?V<.01?(s=0,c=.707106781,d=.707106781):(s=Math.sqrt(V),c=U/s,d=P/s):R>D?R<.01?(s=.707106781,c=0,d=.707106781):(c=Math.sqrt(R),s=U/c,d=T/c):D<.01?(s=.707106781,c=.707106781,d=0):(d=Math.sqrt(D),s=P/d,c=T/d),this.set(s,c,d,i),this}let I=Math.sqrt((M-C)*(M-C)+(v-N)*(v-N)+(_-S)*(_-S));return Math.abs(I)<.001&&(I=1),this.x=(M-C)/I,this.y=(v-N)/I,this.z=(_-S)/I,this.w=Math.acos((p+y+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Pt(this.x,t.x,i.x),this.y=Pt(this.y,t.y,i.y),this.z=Pt(this.z,t.z,i.z),this.w=Pt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Pt(this.x,t,i),this.y=Pt(this.y,t,i),this.z=Pt(this.z,t,i),this.w=Pt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};up.prototype.isVector4=!0;let hn=up;class yE extends ts{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new hn(0,0,t,i),this.scissorTest=!1,this.viewport=new hn(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},d=new Wn(c),f=s.count;for(let m=0;m<f;m++)this.textures[m]=d.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,d=this.textures.length;c<d;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new sp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends yE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ib extends Wn{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=On,this.minFilter=On,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ME extends Wn{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=On,this.minFilter=On,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Hu=class Hu{constructor(t,i,s,c,d,f,m,g,p,S,v,_,y,C,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,d,f,m,g,p,S,v,_,y,C,N,M)}set(t,i,s,c,d,f,m,g,p,S,v,_,y,C,N,M){const b=this.elements;return b[0]=t,b[4]=i,b[8]=s,b[12]=c,b[1]=d,b[5]=f,b[9]=m,b[13]=g,b[2]=p,b[6]=S,b[10]=v,b[14]=_,b[3]=y,b[7]=C,b[11]=N,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Xs.setFromMatrixColumn(t,0).length(),d=1/Xs.setFromMatrixColumn(t,1).length(),f=1/Xs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*d,i[5]=s[5]*d,i[6]=s[6]*d,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,d=t.z,f=Math.cos(s),m=Math.sin(s),g=Math.cos(c),p=Math.sin(c),S=Math.cos(d),v=Math.sin(d);if(t.order==="XYZ"){const _=f*S,y=f*v,C=m*S,N=m*v;i[0]=g*S,i[4]=-g*v,i[8]=p,i[1]=y+C*p,i[5]=_-N*p,i[9]=-m*g,i[2]=N-_*p,i[6]=C+y*p,i[10]=f*g}else if(t.order==="YXZ"){const _=g*S,y=g*v,C=p*S,N=p*v;i[0]=_+N*m,i[4]=C*m-y,i[8]=f*p,i[1]=f*v,i[5]=f*S,i[9]=-m,i[2]=y*m-C,i[6]=N+_*m,i[10]=f*g}else if(t.order==="ZXY"){const _=g*S,y=g*v,C=p*S,N=p*v;i[0]=_-N*m,i[4]=-f*v,i[8]=C+y*m,i[1]=y+C*m,i[5]=f*S,i[9]=N-_*m,i[2]=-f*p,i[6]=m,i[10]=f*g}else if(t.order==="ZYX"){const _=f*S,y=f*v,C=m*S,N=m*v;i[0]=g*S,i[4]=C*p-y,i[8]=_*p+N,i[1]=g*v,i[5]=N*p+_,i[9]=y*p-C,i[2]=-p,i[6]=m*g,i[10]=f*g}else if(t.order==="YZX"){const _=f*g,y=f*p,C=m*g,N=m*p;i[0]=g*S,i[4]=N-_*v,i[8]=C*v+y,i[1]=v,i[5]=f*S,i[9]=-m*S,i[2]=-p*S,i[6]=y*v+C,i[10]=_-N*v}else if(t.order==="XZY"){const _=f*g,y=f*p,C=m*g,N=m*p;i[0]=g*S,i[4]=-v,i[8]=p*S,i[1]=_*v+N,i[5]=f*S,i[9]=y*v-C,i[2]=C*v-y,i[6]=m*S,i[10]=N*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EE,t,TE)}lookAt(t,i,s){const c=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),fr.crossVectors(s,ui),fr.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),fr.crossVectors(s,ui)),fr.normalize(),iu.crossVectors(ui,fr),c[0]=fr.x,c[4]=iu.x,c[8]=ui.x,c[1]=fr.y,c[5]=iu.y,c[9]=ui.y,c[2]=fr.z,c[6]=iu.z,c[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,d=this.elements,f=s[0],m=s[4],g=s[8],p=s[12],S=s[1],v=s[5],_=s[9],y=s[13],C=s[2],N=s[6],M=s[10],b=s[14],I=s[3],V=s[7],R=s[11],D=s[15],U=c[0],P=c[4],T=c[8],O=c[12],k=c[1],G=c[5],ee=c[9],le=c[13],K=c[2],$=c[6],j=c[10],q=c[14],fe=c[3],te=c[7],ce=c[11],_e=c[15];return d[0]=f*U+m*k+g*K+p*fe,d[4]=f*P+m*G+g*$+p*te,d[8]=f*T+m*ee+g*j+p*ce,d[12]=f*O+m*le+g*q+p*_e,d[1]=S*U+v*k+_*K+y*fe,d[5]=S*P+v*G+_*$+y*te,d[9]=S*T+v*ee+_*j+y*ce,d[13]=S*O+v*le+_*q+y*_e,d[2]=C*U+N*k+M*K+b*fe,d[6]=C*P+N*G+M*$+b*te,d[10]=C*T+N*ee+M*j+b*ce,d[14]=C*O+N*le+M*q+b*_e,d[3]=I*U+V*k+R*K+D*fe,d[7]=I*P+V*G+R*$+D*te,d[11]=I*T+V*ee+R*j+D*ce,d[15]=I*O+V*le+R*q+D*_e,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],d=t[12],f=t[1],m=t[5],g=t[9],p=t[13],S=t[2],v=t[6],_=t[10],y=t[14],C=t[3],N=t[7],M=t[11],b=t[15],I=g*y-p*_,V=m*y-p*v,R=m*_-g*v,D=f*y-p*S,U=f*_-g*S,P=f*v-m*S;return i*(N*I-M*V+b*R)-s*(C*I-M*D+b*U)+c*(C*V-N*D+b*P)-d*(C*R-N*U+M*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],d=t[1],f=t[5],m=t[9],g=t[2],p=t[6],S=t[10];return i*(f*S-m*p)-s*(d*S-m*g)+c*(d*p-f*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],d=t[3],f=t[4],m=t[5],g=t[6],p=t[7],S=t[8],v=t[9],_=t[10],y=t[11],C=t[12],N=t[13],M=t[14],b=t[15],I=i*m-s*f,V=i*g-c*f,R=i*p-d*f,D=s*g-c*m,U=s*p-d*m,P=c*p-d*g,T=S*N-v*C,O=S*M-_*C,k=S*b-y*C,G=v*M-_*N,ee=v*b-y*N,le=_*b-y*M,K=I*le-V*ee+R*G+D*k-U*O+P*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/K;return t[0]=(m*le-g*ee+p*G)*$,t[1]=(c*ee-s*le-d*G)*$,t[2]=(N*P-M*U+b*D)*$,t[3]=(_*U-v*P-y*D)*$,t[4]=(g*k-f*le-p*O)*$,t[5]=(i*le-c*k+d*O)*$,t[6]=(M*R-C*P-b*V)*$,t[7]=(S*P-_*R+y*V)*$,t[8]=(f*ee-m*k+p*T)*$,t[9]=(s*k-i*ee-d*T)*$,t[10]=(C*U-N*R+b*I)*$,t[11]=(v*R-S*U-y*I)*$,t[12]=(m*O-f*G-g*T)*$,t[13]=(i*G-s*O+c*T)*$,t[14]=(N*V-C*D-M*I)*$,t[15]=(S*D-v*V+_*I)*$,this}scale(t){const i=this.elements,s=t.x,c=t.y,d=t.z;return i[0]*=s,i[4]*=c,i[8]*=d,i[1]*=s,i[5]*=c,i[9]*=d,i[2]*=s,i[6]*=c,i[10]*=d,i[3]*=s,i[7]*=c,i[11]*=d,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),d=1-s,f=t.x,m=t.y,g=t.z,p=d*f,S=d*m;return this.set(p*f+s,p*m-c*g,p*g+c*m,0,p*m+c*g,S*m+s,S*g-c*f,0,p*g-c*m,S*g+c*f,d*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,d,f){return this.set(1,s,d,0,t,1,f,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,d=i._x,f=i._y,m=i._z,g=i._w,p=d+d,S=f+f,v=m+m,_=d*p,y=d*S,C=d*v,N=f*S,M=f*v,b=m*v,I=g*p,V=g*S,R=g*v,D=s.x,U=s.y,P=s.z;return c[0]=(1-(N+b))*D,c[1]=(y+R)*D,c[2]=(C-V)*D,c[3]=0,c[4]=(y-R)*U,c[5]=(1-(_+b))*U,c[6]=(M+I)*U,c[7]=0,c[8]=(C+V)*P,c[9]=(M-I)*P,c[10]=(1-(_+N))*P,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const d=this.determinantAffine();if(d===0)return s.set(1,1,1),i.identity(),this;let f=Xs.set(c[0],c[1],c[2]).length();const m=Xs.set(c[4],c[5],c[6]).length(),g=Xs.set(c[8],c[9],c[10]).length();d<0&&(f=-f),Ii.copy(this);const p=1/f,S=1/m,v=1/g;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=S,Ii.elements[5]*=S,Ii.elements[6]*=S,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,i.setFromRotationMatrix(Ii),s.x=f,s.y=m,s.z=g,this}makePerspective(t,i,s,c,d,f,m=oa,g=!1){const p=this.elements,S=2*d/(i-t),v=2*d/(s-c),_=(i+t)/(i-t),y=(s+c)/(s-c);let C,N;if(g)C=d/(f-d),N=f*d/(f-d);else if(m===oa)C=-(f+d)/(f-d),N=-2*f*d/(f-d);else if(m===zu)C=-f/(f-d),N=-f*d/(f-d);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=S,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,c,d,f,m=oa,g=!1){const p=this.elements,S=2/(i-t),v=2/(s-c),_=-(i+t)/(i-t),y=-(s+c)/(s-c);let C,N;if(g)C=1/(f-d),N=f/(f-d);else if(m===oa)C=-2/(f-d),N=-(f+d)/(f-d);else if(m===zu)C=-1/(f-d),N=-d/(f-d);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=S,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=C,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Hu.prototype.isMatrix4=!0;let rn=Hu;const Xs=new me,Ii=new rn,EE=new me(0,0,0),TE=new me(1,1,1),fr=new me,iu=new me,ui=new me,zv=new rn,Fv=new ho;class es{constructor(t=0,i=0,s=0,c=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,d=c[0],f=c[4],m=c[8],g=c[1],p=c[5],S=c[9],v=c[2],_=c[6],y=c[10];switch(i){case"XYZ":this._y=Math.asin(Pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-f,d)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(m,y),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-v,d),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(g,d));break;case"ZYX":this._y=Math.asin(-Pt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(g,d)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,d)):(this._x=0,this._y=Math.atan2(m,y));break;case"XZY":this._z=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(m,d)):(this._x=Math.atan2(-S,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return zv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class ab{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AE=0;const Hv=new me,Ws=new ho,Ca=new rn,au=new me,hl=new me,wE=new me,CE=new ho,Gv=new me(1,0,0),kv=new me(0,1,0),Vv=new me(0,0,1),jv={type:"added"},RE={type:"removed"},qs={type:"childadded",child:null},Ih={type:"childremoved",child:null};class Fn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new me,i=new es,s=new ho,c=new me(1,1,1);function d(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(d),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new rn},normalMatrix:{value:new pt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ab,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ws.setFromAxisAngle(t,i),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,i){return Ws.setFromAxisAngle(t,i),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Gv,t)}rotateY(t){return this.rotateOnAxis(kv,t)}rotateZ(t){return this.rotateOnAxis(Vv,t)}translateOnAxis(t,i){return Hv.copy(t).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Gv,t)}translateY(t){return this.translateOnAxis(kv,t)}translateZ(t){return this.translateOnAxis(Vv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?au.copy(t):au.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(hl,au,this.up):Ca.lookAt(au,hl,this.up),this.quaternion.setFromRotationMatrix(Ca),c&&(Ca.extractRotation(c.matrixWorld),Ws.setFromRotationMatrix(Ca),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jv),qs.child=t,this.dispatchEvent(qs),qs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(RE),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jv),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,t,wE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,CE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,d=this.matrix.elements;d[12]+=i-d[0]*i-d[4]*s-d[8]*c,d[13]+=s-d[1]*i-d[5]*s-d[9]*c,d[14]+=c-d[2]*i-d[6]*s-d[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const d=this.children;for(let f=0,m=d.length;f<m;f++)d[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(m=>({...m})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function d(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=d(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,S=g.length;p<S;p++){const v=g[p];d(t.shapes,v)}else d(t.shapes,g)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(d(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(d(t.materials,this.material[g]));c.material=m}else c.material=d(t.materials,this.material);if(this.children.length>0){c.children=[];for(let m=0;m<this.children.length;m++)c.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];c.animations.push(d(t.animations,g))}}if(i){const m=f(t.geometries),g=f(t.materials),p=f(t.textures),S=f(t.images),v=f(t.shapes),_=f(t.skeletons),y=f(t.animations),C=f(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),C.length>0&&(s.nodes=C)}return s.object=c,s;function f(m){const g=[];for(const p in m){const S=m[p];delete S.metadata,g.push(S)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new me(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ru extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NE={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,d=null,f=null;const m=this._targetRay,g=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const N of t.hand.values()){const M=i.getJointPose(N,s),b=this._getHandJoint(p,N);M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=M.radius),b.visible=M!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=S.position.distanceTo(v.position),y=.02,C=.005;p.inputState.pinching&&_>y+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=y-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(d=i.getPose(t.gripSpace,s),d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,d.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(d.linearVelocity)):g.hasLinearVelocity=!1,d.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(d.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));m!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&d!==null&&(c=d),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(NE)))}return m!==null&&(m.visible=c!==null),g!==null&&(g.visible=d!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ru;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const rb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},su={h:0,s:0,l:0};function zh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class nt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=Ot.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=Ot.workingColorSpace){if(t=xE(t,1),i=Pt(i,0,1),s=Pt(s,0,1),i===0)this.r=this.g=this.b=s;else{const d=s<=.5?s*(1+i):s+i-s*i,f=2*s-d;this.r=zh(f,d,t+1/3),this.g=zh(f,d,t),this.b=zh(f,d,t-1/3)}return Ot.colorSpaceToWorking(this,c),this}setStyle(t,i=Ti){function s(d){d!==void 0&&parseFloat(d)<1&&ut("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let d;const f=c[1],m=c[2];switch(f){case"rgb":case"rgba":if(d=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(d[4]),this.setRGB(Math.min(255,parseInt(d[1],10))/255,Math.min(255,parseInt(d[2],10))/255,Math.min(255,parseInt(d[3],10))/255,i);if(d=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(d[4]),this.setRGB(Math.min(100,parseInt(d[1],10))/100,Math.min(100,parseInt(d[2],10))/100,Math.min(100,parseInt(d[3],10))/100,i);break;case"hsl":case"hsla":if(d=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(d[4]),this.setHSL(parseFloat(d[1])/360,parseFloat(d[2])/100,parseFloat(d[3])/100,i);break;default:ut("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const d=c[1],f=d.length;if(f===3)return this.setRGB(parseInt(d.charAt(0),16)/15,parseInt(d.charAt(1),16)/15,parseInt(d.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(d,16),i);ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=rb[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Ot.workingToColorSpace(Bn.copy(this),t),Math.round(Pt(Bn.r*255,0,255))*65536+Math.round(Pt(Bn.g*255,0,255))*256+Math.round(Pt(Bn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ot.workingColorSpace){Ot.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,c=Bn.g,d=Bn.b,f=Math.max(s,c,d),m=Math.min(s,c,d);let g,p;const S=(m+f)/2;if(m===f)g=0,p=0;else{const v=f-m;switch(p=S<=.5?v/(f+m):v/(2-f-m),f){case s:g=(c-d)/v+(c<d?6:0);break;case c:g=(d-s)/v+2;break;case d:g=(s-c)/v+4;break}g/=6}return t.h=g,t.s=p,t.l=S,t}getRGB(t,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ti){Ot.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,c=Bn.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(hr),this.setHSL(hr.h+t,hr.s+i,hr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(hr),t.getHSL(su);const s=Dh(hr.h,su.h,i),c=Dh(hr.s,su.s,i),d=Dh(hr.l,su.l,i);return this.setHSL(s,c,d),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,d=t.elements;return this.r=d[0]*i+d[3]*s+d[6]*c,this.g=d[1]*i+d[4]*s+d[7]*c,this.b=d[2]*i+d[5]*s+d[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new nt;nt.NAMES=rb;class sb extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new me,Ra=new me,Fh=new me,Na=new me,Ys=new me,Zs=new me,Xv=new me,Hh=new me,Gh=new me,kh=new me,Vh=new hn,jh=new hn,Xh=new hn;class Fi{constructor(t=new me,i=new me,s=new me){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Bi.subVectors(t,i),c.cross(Bi);const d=c.lengthSq();return d>0?c.multiplyScalar(1/Math.sqrt(d)):c.set(0,0,0)}static getBarycoord(t,i,s,c,d){Bi.subVectors(c,i),Ra.subVectors(s,i),Fh.subVectors(t,i);const f=Bi.dot(Bi),m=Bi.dot(Ra),g=Bi.dot(Fh),p=Ra.dot(Ra),S=Ra.dot(Fh),v=f*p-m*m;if(v===0)return d.set(0,0,0),null;const _=1/v,y=(p*g-m*S)*_,C=(f*S-m*g)*_;return d.set(1-y-C,C,y)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,i,s,c,d,f,m,g){return this.getBarycoord(t,i,s,c,Na)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(d,Na.x),g.addScaledVector(f,Na.y),g.addScaledVector(m,Na.z),g)}static getInterpolatedAttribute(t,i,s,c,d,f){return Vh.setScalar(0),jh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,c),f.setScalar(0),f.addScaledVector(Vh,d.x),f.addScaledVector(jh,d.y),f.addScaledVector(Xh,d.z),f}static isFrontFacing(t,i,s,c){return Bi.subVectors(s,i),Ra.subVectors(t,i),Bi.cross(Ra).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Bi.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,d){return Fi.getInterpolation(t,this.a,this.b,this.c,i,s,c,d)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,d=this.c;let f,m;Ys.subVectors(c,s),Zs.subVectors(d,s),Hh.subVectors(t,s);const g=Ys.dot(Hh),p=Zs.dot(Hh);if(g<=0&&p<=0)return i.copy(s);Gh.subVectors(t,c);const S=Ys.dot(Gh),v=Zs.dot(Gh);if(S>=0&&v<=S)return i.copy(c);const _=g*v-S*p;if(_<=0&&g>=0&&S<=0)return f=g/(g-S),i.copy(s).addScaledVector(Ys,f);kh.subVectors(t,d);const y=Ys.dot(kh),C=Zs.dot(kh);if(C>=0&&y<=C)return i.copy(d);const N=y*p-g*C;if(N<=0&&p>=0&&C<=0)return m=p/(p-C),i.copy(s).addScaledVector(Zs,m);const M=S*C-y*v;if(M<=0&&v-S>=0&&y-C>=0)return Xv.subVectors(d,c),m=(v-S)/(v-S+(y-C)),i.copy(c).addScaledVector(Xv,m);const b=1/(M+N+_);return f=N*b,m=_*b,i.copy(s).addScaledVector(Ys,f).addScaledVector(Zs,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ns{constructor(t=new me(1/0,1/0,1/0),i=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const d=s.getAttribute("position");if(i===!0&&d!==void 0&&t.isInstancedMesh!==!0)for(let f=0,m=d.count;f<m;f++)t.isMesh===!0?t.getVertexPosition(f,zi):zi.fromBufferAttribute(d,f),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ou.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ou.copy(s.boundingBox)),ou.applyMatrix4(t.matrixWorld),this.union(ou)}const c=t.children;for(let d=0,f=c.length;d<f;d++)this.expandByObject(c[d],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ml),lu.subVectors(this.max,ml),Ks.subVectors(t.a,ml),Qs.subVectors(t.b,ml),Js.subVectors(t.c,ml),mr.subVectors(Qs,Ks),pr.subVectors(Js,Qs),jr.subVectors(Ks,Js);let i=[0,-mr.z,mr.y,0,-pr.z,pr.y,0,-jr.z,jr.y,mr.z,0,-mr.x,pr.z,0,-pr.x,jr.z,0,-jr.x,-mr.y,mr.x,0,-pr.y,pr.x,0,-jr.y,jr.x,0];return!Wh(i,Ks,Qs,Js,lu)||(i=[1,0,0,0,1,0,0,0,1],!Wh(i,Ks,Qs,Js,lu))?!1:(cu.crossVectors(mr,pr),i=[cu.x,cu.y,cu.z],Wh(i,Ks,Qs,Js,lu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new me,new me,new me,new me,new me,new me,new me,new me],zi=new me,ou=new ns,Ks=new me,Qs=new me,Js=new me,mr=new me,pr=new me,jr=new me,ml=new me,lu=new me,cu=new me,Xr=new me;function Wh(o,t,i,s,c){for(let d=0,f=o.length-3;d<=f;d+=3){Xr.fromArray(o,d);const m=c.x*Math.abs(Xr.x)+c.y*Math.abs(Xr.y)+c.z*Math.abs(Xr.z),g=t.dot(Xr),p=i.dot(Xr),S=s.dot(Xr);if(Math.max(-Math.max(g,p,S),Math.min(g,p,S))>m)return!1}return!0}const _n=new me,uu=new Vt;let DE=0;class wi extends ts{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=dE,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,d=this.itemSize;c<d;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uu.fromBufferAttribute(this,i),uu.applyMatrix3(t),this.setXY(i,uu.x,uu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=fl(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=fl(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=fl(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=fl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=fl(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),c=Jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,d){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),c=Jn(c,this.array),d=Jn(d,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=d,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ob extends wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class lb extends wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ci extends wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const UE=new ns,pl=new me,qh=new me;class mo{constructor(t=new me,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):UE.setFromPoints(t).getCenter(s);let c=0;for(let d=0,f=t.length;d<f;d++)c=Math.max(c,s.distanceToSquared(t[d]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pl.subVectors(t,this.center);const i=pl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(pl,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pl.copy(t.center).add(qh)),this.expandByPoint(pl.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let LE=0;const Ei=new rn,Yh=new Fn,$s=new me,di=new ns,gl=new ns,wn=new me;class Ri extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hE(t)?lb:ob)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const d=new pt().getNormalMatrix(t);s.applyNormalMatrix(d),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,d=t.length;c<d;c++){const f=t[c];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ci(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const d=t[c];i.setXYZ(c,d.x,d.y,d.z||0)}t.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const d=i[s];di.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(t){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(t),i)for(let d=0,f=i.length;d<f;d++){const m=i[d];gl.setFromBufferAttribute(m),this.morphTargetsRelative?(wn.addVectors(di.min,gl.min),di.expandByPoint(wn),wn.addVectors(di.max,gl.max),di.expandByPoint(wn)):(di.expandByPoint(gl.min),di.expandByPoint(gl.max))}di.getCenter(s);let c=0;for(let d=0,f=t.count;d<f;d++)wn.fromBufferAttribute(t,d),c=Math.max(c,s.distanceToSquared(wn));if(i)for(let d=0,f=i.length;d<f;d++){const m=i[d],g=this.morphTargetsRelative;for(let p=0,S=m.count;p<S;p++)wn.fromBufferAttribute(m,p),g&&($s.fromBufferAttribute(t,p),wn.add($s)),c=Math.max(c,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,d=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new wi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const m=[],g=[];for(let T=0;T<s.count;T++)m[T]=new me,g[T]=new me;const p=new me,S=new me,v=new me,_=new Vt,y=new Vt,C=new Vt,N=new me,M=new me;function b(T,O,k){p.fromBufferAttribute(s,T),S.fromBufferAttribute(s,O),v.fromBufferAttribute(s,k),_.fromBufferAttribute(d,T),y.fromBufferAttribute(d,O),C.fromBufferAttribute(d,k),S.sub(p),v.sub(p),y.sub(_),C.sub(_);const G=1/(y.x*C.y-C.x*y.y);isFinite(G)&&(N.copy(S).multiplyScalar(C.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(S,-C.x).multiplyScalar(G),m[T].add(N),m[O].add(N),m[k].add(N),g[T].add(M),g[O].add(M),g[k].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let T=0,O=I.length;T<O;++T){const k=I[T],G=k.start,ee=k.count;for(let le=G,K=G+ee;le<K;le+=3)b(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const V=new me,R=new me,D=new me,U=new me;function P(T){D.fromBufferAttribute(c,T),U.copy(D);const O=m[T];V.copy(O),V.sub(D.multiplyScalar(D.dot(O))).normalize(),R.crossVectors(U,O);const G=R.dot(g[T])<0?-1:1;f.setXYZW(T,V.x,V.y,V.z,G)}for(let T=0,O=I.length;T<O;++T){const k=I[T],G=k.start,ee=k.count;for(let le=G,K=G+ee;le<K;le+=3)P(t.getX(le+0)),P(t.getX(le+1)),P(t.getX(le+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const c=new me,d=new me,f=new me,m=new me,g=new me,p=new me,S=new me,v=new me;if(t)for(let _=0,y=t.count;_<y;_+=3){const C=t.getX(_+0),N=t.getX(_+1),M=t.getX(_+2);c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,N),f.fromBufferAttribute(i,M),S.subVectors(f,d),v.subVectors(c,d),S.cross(v),m.fromBufferAttribute(s,C),g.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),m.add(S),g.add(S),p.add(S),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(N,g.x,g.y,g.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)c.fromBufferAttribute(i,_+0),d.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),S.subVectors(f,d),v.subVectors(c,d),S.cross(v),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)wn.fromBufferAttribute(t,i),wn.normalize(),t.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function t(m,g){const p=m.array,S=m.itemSize,v=m.normalized,_=new p.constructor(g.length*S);let y=0,C=0;for(let N=0,M=g.length;N<M;N++){m.isInterleavedBufferAttribute?y=g[N]*m.data.stride+m.offset:y=g[N]*S;for(let b=0;b<S;b++)_[C++]=p[y++]}return new wi(_,S,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,s=this.index.array,c=this.attributes;for(const m in c){const g=c[m],p=t(g,s);i.setAttribute(m,p)}const d=this.morphAttributes;for(const m in d){const g=[],p=d[m];for(let S=0,v=p.length;S<v;S++){const _=p[S],y=t(_,s);g.push(y)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,g=f.length;m<g;m++){const p=f[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(t[p]=g[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];t.data.attributes[g]=p.toJSON(t.data)}const c={};let d=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],S=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];S.push(y.toJSON(t.data))}S.length>0&&(c[g]=S,d=!0)}d&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const p in c){const S=c[p];this.setAttribute(p,S.clone(i))}const d=t.morphAttributes;for(const p in d){const S=[],v=d[p];for(let _=0,y=v.length;_<y;_++)S.push(v[_].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,S=f.length;p<S;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new me,OE=new me,PE=new pt;class xr{constructor(t=new me(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=Zh.subVectors(s,i).cross(OE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(Zh),d=this.normal.dot(c);if(d===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/d;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(c,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||PE.getNormalMatrix(t),c=this.coplanarPoint(Zh).applyMatrix4(t),d=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(d),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let IE=0;class Ul extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Dl(),this.name="",this.type="Material",this.blending=Ml,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=F_,this.blendDst=H_,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rh,this.stencilZFail=Rh,this.stencilZPass=Rh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(d=>d.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(d){const f=[];for(const m in d){const g=d[m];delete g.metadata,f.push(g)}return f}if(i){const d=c(t.textures),f=c(t.images);d.length>0&&(s.textures=d),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new xr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Vt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let d=0;d!==c;++d)s[d]=i[d].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ua=new me,Kh=new me,du=new me,fu=new me;class cb{constructor(t=new me,i=new me(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Kh.copy(t).add(i).multiplyScalar(.5),du.copy(i).sub(t).normalize(),fu.copy(this.origin).sub(Kh);const d=t.distanceTo(i)*.5,f=-this.direction.dot(du),m=fu.dot(this.direction),g=-fu.dot(du),p=fu.lengthSq(),S=Math.abs(1-f*f);let v,_,y,C;if(S>0)if(v=f*g-m,_=f*m-g,C=d*S,v>=0)if(_>=-C)if(_<=C){const N=1/S;v*=N,_*=N,y=v*(v+f*_+2*m)+_*(f*v+_+2*g)+p}else _=d,v=Math.max(0,-(f*_+m)),y=-v*v+_*(_+2*g)+p;else _=-d,v=Math.max(0,-(f*_+m)),y=-v*v+_*(_+2*g)+p;else _<=-C?(v=Math.max(0,-(-f*d+m)),_=v>0?-d:Math.min(Math.max(-d,-g),d),y=-v*v+_*(_+2*g)+p):_<=C?(v=0,_=Math.min(Math.max(-d,-g),d),y=_*(_+2*g)+p):(v=Math.max(0,-(f*d+m)),_=v>0?d:Math.min(Math.max(-d,-g),d),y=-v*v+_*(_+2*g)+p);else _=f>0?-d:d,v=Math.max(0,-(f*_+m)),y=-v*v+_*(_+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(Kh).addScaledVector(du,_),y}intersectSphere(t,i){if(t.radius<0)return null;Ua.subVectors(t.center,this.origin);const s=Ua.dot(this.direction),c=Ua.dot(Ua)-s*s,d=t.radius*t.radius;if(c>d)return null;const f=Math.sqrt(d-c),m=s-f,g=s+f;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,d,f,m,g;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,c=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,c=(t.min.x-_.x)*p),S>=0?(d=(t.min.y-_.y)*S,f=(t.max.y-_.y)*S):(d=(t.max.y-_.y)*S,f=(t.min.y-_.y)*S),s>f||d>c||((d>s||isNaN(s))&&(s=d),(f<c||isNaN(c))&&(c=f),v>=0?(m=(t.min.z-_.z)*v,g=(t.max.z-_.z)*v):(m=(t.max.z-_.z)*v,g=(t.min.z-_.z)*v),s>g||m>c)||((m>s||s!==s)&&(s=m),(g<c||c!==c)&&(c=g),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,i,s,c,d){const f=this.origin,m=this.direction,g=m.x,p=m.y,S=m.z,v=t.x-f.x,_=t.y-f.y,y=t.z-f.z,C=i.x-f.x,N=i.y-f.y,M=i.z-f.z,b=s.x-f.x,I=s.y-f.y,V=s.z-f.z,R=Math.abs(g),D=Math.abs(p),U=Math.abs(S);let P,T,O,k,G,ee,le,K,$,j,q,fe;if(R>=D&&R>=U?(O=g,ee=v,$=C,fe=b,g>=0?(P=p,T=S,k=_,G=y,le=N,K=M,j=I,q=V):(P=S,T=p,k=y,G=_,le=M,K=N,j=V,q=I)):D>=U?(O=p,ee=_,$=N,fe=I,p>=0?(P=S,T=g,k=y,G=v,le=M,K=C,j=V,q=b):(P=g,T=S,k=v,G=y,le=C,K=M,j=b,q=V)):(O=S,ee=y,$=M,fe=V,S>=0?(P=g,T=p,k=v,G=_,le=C,K=N,j=b,q=I):(P=p,T=g,k=_,G=v,le=N,K=C,j=I,q=b)),O===0)return null;const te=P/O,ce=T/O,_e=1/O,Ne=k-te*ee,je=G-ce*ee,z=le-te*$,pe=K-ce*$,Ce=j-te*fe,Y=q-ce*fe,ue=Ce*pe-Y*z,ye=Ne*Y-je*Ce,we=z*je-pe*Ne;if(c){if(ue<0||ye<0||we<0)return null}else if((ue<0||ye<0||we<0)&&(ue>0||ye>0||we>0))return null;const ge=ue+ye+we;if(ge===0)return null;const Ae=_e*(ue*ee+ye*$+we*fe);return(ge>0?Ae<0:Ae>0)?null:this.at(Ae/ge,d)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vu extends Ul{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wv=new rn,Wr=new cb,hu=new mo,qv=new me,mu=new me,pu=new me,gu=new me,Qh=new me,xu=new me,Yv=new me,vu=new me;class Vi extends Fn{constructor(t=new Ri,i=new Vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let d=0,f=c.length;d<f;d++){const m=c[d].name||String(d);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=d}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,d=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const m=this.morphTargetInfluences;if(d&&m){xu.set(0,0,0);for(let g=0,p=d.length;g<p;g++){const S=m[g],v=d[g];S!==0&&(Qh.fromBufferAttribute(v,t),f?xu.addScaledVector(Qh,S):xu.addScaledVector(Qh.sub(i),S))}i.add(xu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,d=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hu.copy(s.boundingSphere),hu.applyMatrix4(d),Wr.copy(t.ray).recast(t.near),!(hu.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(hu,qv)===null||Wr.origin.distanceToSquared(qv)>(t.far-t.near)**2))&&(Wv.copy(d).invert(),Wr.copy(t.ray).applyMatrix4(Wv),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Wr)))}_computeIntersections(t,i,s){let c;const d=this.geometry,f=this.material,m=d.index,g=d.attributes.position,p=d.attributes.uv,S=d.attributes.uv1,v=d.attributes.normal,_=d.groups,y=d.drawRange;if(m!==null)if(Array.isArray(f))for(let C=0,N=_.length;C<N;C++){const M=_[C],b=f[M.materialIndex],I=Math.max(M.start,y.start),V=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let R=I,D=V;R<D;R+=3){const U=m.getX(R),P=m.getX(R+1),T=m.getX(R+2);c=_u(this,b,t,s,p,S,v,U,P,T),c&&(c.faceIndex=Math.floor(R/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const C=Math.max(0,y.start),N=Math.min(m.count,y.start+y.count);for(let M=C,b=N;M<b;M+=3){const I=m.getX(M),V=m.getX(M+1),R=m.getX(M+2);c=_u(this,f,t,s,p,S,v,I,V,R),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}else if(g!==void 0)if(Array.isArray(f))for(let C=0,N=_.length;C<N;C++){const M=_[C],b=f[M.materialIndex],I=Math.max(M.start,y.start),V=Math.min(g.count,Math.min(M.start+M.count,y.start+y.count));for(let R=I,D=V;R<D;R+=3){const U=R,P=R+1,T=R+2;c=_u(this,b,t,s,p,S,v,U,P,T),c&&(c.faceIndex=Math.floor(R/3),c.face.materialIndex=M.materialIndex,i.push(c))}}else{const C=Math.max(0,y.start),N=Math.min(g.count,y.start+y.count);for(let M=C,b=N;M<b;M+=3){const I=M,V=M+1,R=M+2;c=_u(this,f,t,s,p,S,v,I,V,R),c&&(c.faceIndex=Math.floor(M/3),i.push(c))}}}}function BE(o,t,i,s,c,d,f,m){let g;if(t.side===$n?g=s.intersectTriangle(f,d,c,!0,m):g=s.intersectTriangle(c,d,f,t.side===Qr,m),g===null)return null;vu.copy(m),vu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(vu);return p<i.near||p>i.far?null:{distance:p,point:vu.clone(),object:o}}function _u(o,t,i,s,c,d,f,m,g,p){o.getVertexPosition(m,mu),o.getVertexPosition(g,pu),o.getVertexPosition(p,gu);const S=BE(o,t,i,s,mu,pu,gu,Yv);if(S){const v=new me;Fi.getBarycoord(Yv,mu,pu,gu,v),c&&(S.uv=Fi.getInterpolatedAttribute(c,m,g,p,v,new Vt)),d&&(S.uv1=Fi.getInterpolatedAttribute(d,m,g,p,v,new Vt)),f&&(S.normal=Fi.getInterpolatedAttribute(f,m,g,p,v,new me),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:m,b:g,c:p,normal:new me,materialIndex:0};Fi.getNormal(mu,pu,gu,_.normal),S.face=_,S.barycoord=v}return S}class ub extends Wn{constructor(t=null,i=1,s=1,c,d,f,m,g,p=On,S=On,v,_){super(null,f,m,g,p,S,c,d,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zv extends wi{constructor(t,i,s,c=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=c}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const eo=new rn,Kv=new rn,bu=[],Qv=new ns,zE=new rn,xl=new Vi,vl=new mo;class db extends Vi{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Zv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let c=0;c<s;c++)this.setMatrixAt(c,zE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,eo),Qv.copy(t.boundingBox).applyMatrix4(eo),this.boundingBox.union(Qv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new mo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,eo),vl.copy(t.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(vl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,c=this.morphTexture.source.data.data,d=s.length+1,f=t*d+1;for(let m=0;m<s.length;m++)s[m]=c[f+m]}raycast(t,i){const s=this.matrixWorld,c=this.count;if(xl.geometry=this.geometry,xl.material=this.material,xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(s),t.ray.intersectsSphere(vl)!==!1))for(let d=0;d<c;d++){this.getMatrixAt(d,eo),Kv.multiplyMatrices(s,eo),xl.matrixWorld=Kv,xl.raycast(t,bu);for(let f=0,m=bu.length;f<m;f++){const g=bu[f];g.instanceId=d,g.object=this,i.push(g)}bu.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new Zv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,c=s.length+1;this.morphTexture===null&&(this.morphTexture=new ub(new Float32Array(c*this.count),c,this.count,ep,Hi));const d=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const m=this.geometry.morphTargetsRelative?1:1-f,g=c*t;return d[g]=m,d.set(s,g+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qr=new mo,FE=new Vt(.5,.5),Su=new me;class fb{constructor(t=new xr,i=new xr,s=new xr,c=new xr,d=new xr,f=new xr){this.planes=[t,i,s,c,d,f]}set(t,i,s,c,d,f){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(c),m[4].copy(d),m[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const c=this.planes,d=t.elements,f=d[0],m=d[1],g=d[2],p=d[3],S=d[4],v=d[5],_=d[6],y=d[7],C=d[8],N=d[9],M=d[10],b=d[11],I=d[12],V=d[13],R=d[14],D=d[15];if(c[0].setComponents(p-f,y-S,b-C,D-I).normalize(),c[1].setComponents(p+f,y+S,b+C,D+I).normalize(),c[2].setComponents(p+m,y+v,b+N,D+V).normalize(),c[3].setComponents(p-m,y-v,b-N,D-V).normalize(),s)c[4].setComponents(g,_,M,R).normalize(),c[5].setComponents(p-g,y-_,b-M,D-R).normalize();else if(c[4].setComponents(p-g,y-_,b-M,D-R).normalize(),i===oa)c[5].setComponents(p+g,y+_,b+M,D+R).normalize();else if(i===zu)c[5].setComponents(g,_,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(t){qr.center.set(0,0,0);const i=FE.distanceTo(t.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let d=0;d<6;d++)if(i[d].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(Su.x=c.normal.x>0?t.max.x:t.min.x,Su.y=c.normal.y>0?t.max.y:t.min.y,Su.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(Su)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hb extends Ul{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jv=new rn,Wm=new cb,yu=new mo,Mu=new me;class HE extends Fn{constructor(t=new Ri,i=new hb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.matrixWorld,d=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yu.copy(s.boundingSphere),yu.applyMatrix4(c),yu.radius+=d,t.ray.intersectsSphere(yu)===!1)return;Jv.copy(c).invert(),Wm.copy(t.ray).applyMatrix4(Jv);const m=d/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let C=_,N=y;C<N;C++){const M=p.getX(C);Mu.fromBufferAttribute(v,M),$v(Mu,M,g,c,t,i,this)}}else{const _=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let C=_,N=y;C<N;C++)Mu.fromBufferAttribute(v,C),$v(Mu,C,g,c,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let d=0,f=c.length;d<f;d++){const m=c[d].name||String(d);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=d}}}}}function $v(o,t,i,s,c,d,f){const m=Wm.distanceSqToPoint(o);if(m<i){const g=new me;Wm.closestPointToPoint(o,g),g.applyMatrix4(s);const p=c.ray.origin.distanceTo(g);if(p<c.near||p>c.far)return;d.push({distance:p,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class mb extends Wn{constructor(t=[],i=Jr,s,c,d,f,m,g,p,S){super(t,i,s,c,d,f,m,g,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rl extends Wn{constructor(t,i,s=ua,c,d,f,m=On,g=On,p,S=Ba,v=1){if(S!==Ba&&S!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,c,d,f,m,g,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class GE extends Rl{constructor(t,i=ua,s=Jr,c,d,f=On,m=On,g,p=Ba){const S={width:t,height:t,depth:1},v=[S,S,S,S,S,S];super(t,t,i,s,c,d,f,m,g,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class pb extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ll extends Ri{constructor(t=1,i=1,s=1,c=1,d=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:d,depthSegments:f};const m=this;c=Math.floor(c),d=Math.floor(d),f=Math.floor(f);const g=[],p=[],S=[],v=[];let _=0,y=0;C("z","y","x",-1,-1,s,i,t,f,d,0),C("z","y","x",1,-1,s,i,-t,f,d,1),C("x","z","y",1,1,t,s,i,c,f,2),C("x","z","y",1,-1,t,s,-i,c,f,3),C("x","y","z",1,-1,t,i,s,c,d,4),C("x","y","z",-1,-1,t,i,-s,c,d,5),this.setIndex(g),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(S,3)),this.setAttribute("uv",new Ci(v,2));function C(N,M,b,I,V,R,D,U,P,T,O){const k=R/P,G=D/T,ee=R/2,le=D/2,K=U/2,$=P+1,j=T+1;let q=0,fe=0;const te=new me;for(let ce=0;ce<j;ce++){const _e=ce*G-le;for(let Ne=0;Ne<$;Ne++){const je=Ne*k-ee;te[N]=je*I,te[M]=_e*V,te[b]=K,p.push(te.x,te.y,te.z),te[N]=0,te[M]=0,te[b]=U>0?1:-1,S.push(te.x,te.y,te.z),v.push(Ne/P),v.push(1-ce/T),q+=1}}for(let ce=0;ce<T;ce++)for(let _e=0;_e<P;_e++){const Ne=_+_e+$*ce,je=_+_e+$*(ce+1),z=_+(_e+1)+$*(ce+1),pe=_+(_e+1)+$*ce;g.push(Ne,je,pe),g.push(je,z,pe),fe+=6}m.addGroup(y,fe,O),y+=fe,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ju extends Ri{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const d=t/2,f=i/2,m=Math.floor(s),g=Math.floor(c),p=m+1,S=g+1,v=t/m,_=i/g,y=[],C=[],N=[],M=[];for(let b=0;b<S;b++){const I=b*_-f;for(let V=0;V<p;V++){const R=V*v-d;C.push(R,-I,0),N.push(0,0,1),M.push(V/m),M.push(1-b/g)}}for(let b=0;b<g;b++)for(let I=0;I<m;I++){const V=I+p*b,R=I+p*(b+1),D=I+1+p*(b+1),U=I+1+p*b;y.push(V,R,U),y.push(R,D,U)}this.setIndex(y),this.setAttribute("position",new Ci(C,3)),this.setAttribute("normal",new Ci(N,3)),this.setAttribute("uv",new Ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ju(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xu extends Ri{constructor(t=1,i=32,s=16,c=0,d=Math.PI*2,f=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:c,phiLength:d,thetaStart:f,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(f+m,Math.PI);let p=0;const S=[],v=new me,_=new me,y=[],C=[],N=[],M=[];for(let b=0;b<=s;b++){const I=[],V=b/s,R=f+V*m,D=t*Math.cos(R),U=Math.sqrt(t*t-D*D);let P=0;b===0&&f===0?P=.5/i:b===s&&g===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const O=T/i,k=c+O*d;v.x=-U*Math.cos(k),v.y=D,v.z=U*Math.sin(k),C.push(v.x,v.y,v.z),_.copy(v).normalize(),N.push(_.x,_.y,_.z),M.push(O+P,1-V),I.push(p++)}S.push(I)}for(let b=0;b<s;b++)for(let I=0;I<i;I++){const V=S[b][I+1],R=S[b][I],D=S[b+1][I],U=S[b+1][I+1];(b!==0||f>0)&&y.push(V,R,U),(b!==s-1||g<Math.PI)&&y.push(R,D,U)}this.setIndex(y),this.setAttribute("position",new Ci(C,3)),this.setAttribute("normal",new Ci(N,3)),this.setAttribute("uv",new Ci(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function fo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];if(e_(c))c.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(e_(c[0])){const d=[];for(let f=0,m=c.length;f<m;f++)d[f]=c[f].clone();t[i][s]=d}else t[i][s]=c.slice();else t[i][s]=c}}return t}function Xn(o){const t={};for(let i=0;i<o.length;i++){const s=fo(o[i]);for(const c in s)t[c]=s[c]}return t}function e_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function kE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function gb(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ot.workingColorSpace}const VE={clone:fo,merge:Xn};var jE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends Ul{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fo(t.uniforms),this.uniformsGroups=kE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const f=this.uniforms[c].value;f&&f.isTexture?i.uniforms[c]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[c]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[c]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[c]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[c]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[c]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[c]={type:"m4",value:f.toArray()}:i.uniforms[c]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new nt().setHex(c.value);break;case"v2":this.uniforms[s].value=new Vt().fromArray(c.value);break;case"v3":this.uniforms[s].value=new me().fromArray(c.value);break;case"v4":this.uniforms[s].value=new hn().fromArray(c.value);break;case"m3":this.uniforms[s].value=new pt().fromArray(c.value);break;case"m4":this.uniforms[s].value=new rn().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class WE extends fa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qE extends Ul{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YE extends Ul{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eu=new me,Tu=new ho,aa=new me;class xb extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Eu,Tu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eu,Tu,aa.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Eu,Tu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eu,Tu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new me,t_=new Vt,n_=new Vt;class fi extends xb{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xm*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-t/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-t/gr.z)}getViewSize(t,i){return this.getViewBounds(t,t_,n_),i.subVectors(n_,t_)}setViewOffset(t,i,s,c,d,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=d,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nh*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,d=-.5*c;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,p=f.fullHeight;d+=f.offsetX*c/g,i-=f.offsetY*s/p,c*=f.width/g,s*=f.height/p}const m=this.filmOffset;m!==0&&(d+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(d,d+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class vb extends xb{constructor(t=-1,i=1,s=1,c=-1,d=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=d,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,d,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=d,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let d=s-t,f=s+t,m=c+i,g=c-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;d+=p*this.view.offsetX,f=d+p*this.view.width,m-=S*this.view.offsetY,g=m-S*this.view.height}this.projectionMatrix.makeOrthographic(d,f,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const to=-90,no=1;class ZE extends Fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new fi(to,no,t,i);c.layers=this.layers,this.add(c);const d=new fi(to,no,t,i);d.layers=this.layers,this.add(d);const f=new fi(to,no,t,i);f.layers=this.layers,this.add(f);const m=new fi(to,no,t,i);m.layers=this.layers,this.add(m);const g=new fi(to,no,t,i);g.layers=this.layers,this.add(g);const p=new fi(to,no,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,d,f,m,g]=i;for(const p of i)this.remove(p);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),d.up.set(0,0,-1),d.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===zu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),d.up.set(0,0,1),d.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[d,f,m,g,p,S]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,1,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,c),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(v,_,y),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class KE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const dp=class dp{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const d=this.elements;return d[0]=t,d[2]=i,d[1]=s,d[3]=c,this}};dp.prototype.isMatrix2=!0;let i_=dp;function a_(o,t,i,s){const c=QE(s);switch(i){case eb:return o*t;case ep:return o*t/c.components*c.byteLength;case tp:return o*t/c.components*c.byteLength;case $r:return o*t*2/c.components*c.byteLength;case np:return o*t*2/c.components*c.byteLength;case tb:return o*t*3/c.components*c.byteLength;case Gi:return o*t*4/c.components*c.byteLength;case ip:return o*t*4/c.components*c.byteLength;case Ru:case Nu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Du:case Uu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gm:case vm:return Math.max(o,16)*Math.max(t,8)/4;case pm:case xm:return Math.max(o,8)*Math.max(t,8)/2;case _m:case bm:case ym:case Mm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sm:case Ou:case Em:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Am:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Cm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Rm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Nm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Dm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Um:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Lm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Om:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Pm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Im:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Bm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case zm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fm:case Hm:case Gm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case km:case Vm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Pu:case jm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QE(o){switch(o){case Ai:case K_:return{byteLength:1,components:1};case wl:case Q_:case da:return{byteLength:2,components:1};case Jm:case $m:return{byteLength:2,components:4};case ua:case Qm:case Hi:return{byteLength:4,components:1};case J_:case $_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Km}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Km);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _b(){let o=null,t=!1,i=null,s=null;function c(d,f){s=o.requestAnimationFrame(c),i(d,f)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(d){i=d},setContext:function(d){o=d}}}function JE(o){const t=new WeakMap;function i(m,g){const p=m.array,S=m.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(g,_),o.bufferData(g,p,S),m.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:v}}function s(m,g,p){const S=g.array,v=g.updateRanges;if(o.bindBuffer(p,m),v.length===0)o.bufferSubData(p,0,S);else{v.sort((y,C)=>y.start-C.start);let _=0;for(let y=1;y<v.length;y++){const C=v[_],N=v[y];N.start<=C.start+C.count+1?C.count=Math.max(C.count,N.start+N.count-C.start):(++_,v[_]=N)}v.length=_+1;for(let y=0,C=v.length;y<C;y++){const N=v[y];o.bufferSubData(p,N.start*S.BYTES_PER_ELEMENT,S,N.start,N.count)}g.clearUpdateRanges()}g.onUploadCallback()}function c(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function d(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(o.deleteBuffer(g.buffer),t.delete(m))}function f(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const S=t.get(m);(!S||S.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=t.get(m);if(p===void 0)t.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:c,remove:d,update:f}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ET=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RT="gl_FragColor = linearToOutputTexel( gl_FragColor );",NT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,WT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,n2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,R2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:$E,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:aT,aomap_fragment:rT,aomap_pars_fragment:sT,batching_pars_vertex:oT,batching_vertex:lT,begin_vertex:cT,beginnormal_vertex:uT,bsdfs:dT,iridescence_fragment:fT,bumpmap_pars_fragment:hT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:xT,color_fragment:vT,color_pars_fragment:_T,color_pars_vertex:bT,color_vertex:ST,common:yT,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:AT,emissivemap_fragment:wT,emissivemap_pars_fragment:CT,colorspace_fragment:RT,colorspace_pars_fragment:NT,envmap_fragment:DT,envmap_common_pars_fragment:UT,envmap_pars_fragment:LT,envmap_pars_vertex:OT,envmap_physical_pars_fragment:XT,envmap_vertex:PT,fog_vertex:IT,fog_pars_vertex:BT,fog_fragment:zT,fog_pars_fragment:FT,gradientmap_pars_fragment:HT,lightmap_pars_fragment:GT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:VT,lights_pars_begin:jT,lights_toon_fragment:WT,lights_toon_pars_fragment:qT,lights_phong_fragment:YT,lights_phong_pars_fragment:ZT,lights_physical_fragment:KT,lights_physical_pars_fragment:QT,lights_fragment_begin:JT,lights_fragment_maps:$T,lights_fragment_end:e2,lightprobes_pars_fragment:t2,logdepthbuf_fragment:n2,logdepthbuf_pars_fragment:i2,logdepthbuf_pars_vertex:a2,logdepthbuf_vertex:r2,map_fragment:s2,map_pars_fragment:o2,map_particle_fragment:l2,map_particle_pars_fragment:c2,metalnessmap_fragment:u2,metalnessmap_pars_fragment:d2,morphinstance_vertex:f2,morphcolor_vertex:h2,morphnormal_vertex:m2,morphtarget_pars_vertex:p2,morphtarget_vertex:g2,normal_fragment_begin:x2,normal_fragment_maps:v2,normal_pars_fragment:_2,normal_pars_vertex:b2,normal_vertex:S2,normalmap_pars_fragment:y2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:E2,clearcoat_pars_fragment:T2,iridescence_pars_fragment:A2,opaque_fragment:w2,packing:C2,premultiplied_alpha_fragment:R2,project_vertex:N2,dithering_fragment:D2,dithering_pars_fragment:U2,roughnessmap_fragment:L2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:P2,shadowmap_pars_vertex:I2,shadowmap_vertex:B2,shadowmask_pars_fragment:z2,skinbase_vertex:F2,skinning_pars_vertex:H2,skinning_vertex:G2,skinnormal_vertex:k2,specularmap_fragment:V2,specularmap_pars_fragment:j2,tonemapping_fragment:X2,tonemapping_pars_fragment:W2,transmission_fragment:q2,transmission_pars_fragment:Y2,uv_pars_fragment:Z2,uv_pars_vertex:K2,uv_vertex:Q2,worldpos_vertex:J2,background_vert:$2,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:aA,depth_vert:rA,depth_frag:sA,distance_vert:oA,distance_frag:lA,equirect_vert:cA,equirect_frag:uA,linedashed_vert:dA,linedashed_frag:fA,meshbasic_vert:hA,meshbasic_frag:mA,meshlambert_vert:pA,meshlambert_frag:gA,meshmatcap_vert:xA,meshmatcap_frag:vA,meshnormal_vert:_A,meshnormal_frag:bA,meshphong_vert:SA,meshphong_frag:yA,meshphysical_vert:MA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:AA,points_vert:wA,points_frag:CA,shadow_vert:RA,shadow_frag:NA,sprite_vert:DA,sprite_frag:UA},Ge={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new me},probesMax:{value:new me},probesResolution:{value:new me}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},sa={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new nt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};sa.physical={uniforms:Xn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Au={r:0,b:0,g:0},LA=new rn,bb=new pt;bb.set(-1,0,0,0,1,0,0,0,1);function OA(o,t,i,s,c,d){const f=new nt(0);let m=c===!0?0:1,g,p,S=null,v=0,_=null;function y(I){let V=I.isScene===!0?I.background:null;if(V&&V.isTexture){const R=I.backgroundBlurriness>0;V=t.get(V,R)}return V}function C(I){let V=!1;const R=y(I);R===null?M(f,m):R&&R.isColor&&(M(R,1),V=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(o.autoClear||V)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function N(I,V){const R=y(V);R&&(R.isCubeTexture||R.mapping===ku)?(p===void 0&&(p=new Vi(new Ll(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:fo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(V.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(bb),p.material.toneMapped=Ot.getTransfer(R.colorSpace)!==Zt,(S!==R||v!==R.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,S=R,v=R.version,_=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new Vi(new ju(2,2),new fa({name:"BackgroundMaterial",uniforms:fo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,g.material.toneMapped=Ot.getTransfer(R.colorSpace)!==Zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(S!==R||v!==R.version||_!==o.toneMapping)&&(g.material.needsUpdate=!0,S=R,v=R.version,_=o.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null))}function M(I,V){I.getRGB(Au,gb(o)),i.buffers.color.setClear(Au.r,Au.g,Au.b,V,d)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,V=1){f.set(I),m=V,M(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,M(f,m)},render:C,addToRenderList:N,dispose:b}}function PA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=_(null);let d=c,f=!1;function m(G,ee,le,K,$){let j=!1;const q=v(G,K,le,ee);d!==q&&(d=q,p(d.object)),j=y(G,K,le,$),j&&C(G,K,le,$),$!==null&&t.update($,o.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,R(G,ee,le,K),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function g(){return o.createVertexArray()}function p(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function v(G,ee,le,K){const $=K.wireframe===!0;let j=s[ee.id];j===void 0&&(j={},s[ee.id]=j);const q=G.isInstancedMesh===!0?G.id:0;let fe=j[q];fe===void 0&&(fe={},j[q]=fe);let te=fe[le.id];te===void 0&&(te={},fe[le.id]=te);let ce=te[$];return ce===void 0&&(ce=_(g()),te[$]=ce),ce}function _(G){const ee=[],le=[],K=[];for(let $=0;$<i;$++)ee[$]=0,le[$]=0,K[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:le,attributeDivisors:K,object:G,attributes:{},index:null}}function y(G,ee,le,K){const $=d.attributes,j=ee.attributes;let q=0;const fe=le.getAttributes();for(const te in fe)if(fe[te].location>=0){const _e=$[te];let Ne=j[te];if(Ne===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(Ne=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(Ne=G.instanceColor)),_e===void 0||_e.attribute!==Ne||Ne&&_e.data!==Ne.data)return!0;q++}return d.attributesNum!==q||d.index!==K}function C(G,ee,le,K){const $={},j=ee.attributes;let q=0;const fe=le.getAttributes();for(const te in fe)if(fe[te].location>=0){let _e=j[te];_e===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(_e=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(_e=G.instanceColor));const Ne={};Ne.attribute=_e,_e&&_e.data&&(Ne.data=_e.data),$[te]=Ne,q++}d.attributes=$,d.attributesNum=q,d.index=K}function N(){const G=d.newAttributes;for(let ee=0,le=G.length;ee<le;ee++)G[ee]=0}function M(G){b(G,0)}function b(G,ee){const le=d.newAttributes,K=d.enabledAttributes,$=d.attributeDivisors;le[G]=1,K[G]===0&&(o.enableVertexAttribArray(G),K[G]=1),$[G]!==ee&&(o.vertexAttribDivisor(G,ee),$[G]=ee)}function I(){const G=d.newAttributes,ee=d.enabledAttributes;for(let le=0,K=ee.length;le<K;le++)ee[le]!==G[le]&&(o.disableVertexAttribArray(le),ee[le]=0)}function V(G,ee,le,K,$,j,q){q===!0?o.vertexAttribIPointer(G,ee,le,$,j):o.vertexAttribPointer(G,ee,le,K,$,j)}function R(G,ee,le,K){N();const $=K.attributes,j=le.getAttributes(),q=ee.defaultAttributeValues;for(const fe in j){const te=j[fe];if(te.location>=0){let ce=$[fe];if(ce===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor)),ce!==void 0){const _e=ce.normalized,Ne=ce.itemSize,je=t.get(ce);if(je===void 0)continue;const z=je.buffer,pe=je.type,Ce=je.bytesPerElement,Y=pe===o.INT||pe===o.UNSIGNED_INT||ce.gpuType===Qm;if(ce.isInterleavedBufferAttribute){const ue=ce.data,ye=ue.stride,we=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<te.locationSize;ge++)b(te.location+ge,ue.meshPerAttribute);G.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<te.locationSize;ge++)M(te.location+ge);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ge=0;ge<te.locationSize;ge++)V(te.location+ge,Ne/te.locationSize,pe,_e,ye*Ce,(we+Ne/te.locationSize*ge)*Ce,Y)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)b(te.location+ue,ce.meshPerAttribute);G.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<te.locationSize;ue++)M(te.location+ue);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ue=0;ue<te.locationSize;ue++)V(te.location+ue,Ne/te.locationSize,pe,_e,Ne*Ce,Ne/te.locationSize*ue*Ce,Y)}}else if(q!==void 0){const _e=q[fe];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(te.location,_e);break;case 3:o.vertexAttrib3fv(te.location,_e);break;case 4:o.vertexAttrib4fv(te.location,_e);break;default:o.vertexAttrib1fv(te.location,_e)}}}}I()}function D(){O();for(const G in s){const ee=s[G];for(const le in ee){const K=ee[le];for(const $ in K){const j=K[$];for(const q in j)S(j[q].object),delete j[q];delete K[$]}}delete s[G]}}function U(G){if(s[G.id]===void 0)return;const ee=s[G.id];for(const le in ee){const K=ee[le];for(const $ in K){const j=K[$];for(const q in j)S(j[q].object),delete j[q];delete K[$]}}delete s[G.id]}function P(G){for(const ee in s){const le=s[ee];for(const K in le){const $=le[K];if($[G.id]===void 0)continue;const j=$[G.id];for(const q in j)S(j[q].object),delete j[q];delete $[G.id]}}}function T(G){for(const ee in s){const le=s[ee],K=G.isInstancedMesh===!0?G.id:0,$=le[K];if($!==void 0){for(const j in $){const q=$[j];for(const fe in q)S(q[fe].object),delete q[fe];delete $[j]}delete le[K],Object.keys(le).length===0&&delete s[ee]}}}function O(){k(),f=!0,d!==c&&(d=c,p(d.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:m,reset:O,resetDefaultState:k,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:N,enableAttribute:M,disableUnusedAttributes:I}}function IA(o,t,i){let s;function c(g){s=g}function d(g,p){o.drawArrays(s,g,p),i.update(p,s,1)}function f(g,p,S){S!==0&&(o.drawArraysInstanced(s,g,p,S),i.update(p,s,S))}function m(g,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,S);let _=0;for(let y=0;y<S;y++)_+=p[y];i.update(_,s,1)}this.setMode=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=m}function BA(o,t,i,s){let c;function d(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function f(P){return!(P!==Gi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(P){const T=P===da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ai&&P!==Hi&&!T&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=g(p);S!==p&&(ut("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),V=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:d,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:C,maxTextureSize:N,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:I,maxVaryings:V,maxFragmentUniforms:R,maxSamples:D,samples:U}}function zA(o){const t=this;let i=null,s=0,c=!1,d=!1;const f=new xr,m=new pt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||c;return c=_,s=v.length,y},this.beginShadows=function(){d=!0,S(null)},this.endShadows=function(){d=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,y){const C=v.clippingPlanes,N=v.clipIntersection,M=v.clipShadows,b=o.get(v);if(!c||C===null||C.length===0||d&&!M)d?S(null):p();else{const I=d?0:s,V=I*4;let R=b.clippingState||null;g.value=R,R=S(C,_,V,y);for(let D=0;D!==V;++D)R[D]=i[D];b.clippingState=R,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=I}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(v,_,y,C){const N=v!==null?v.length:0;let M=null;if(N!==0){if(M=g.value,C!==!0||M===null){const b=y+N*4,I=_.matrixWorldInverse;m.getNormalMatrix(I),(M===null||M.length<b)&&(M=new Float32Array(b));for(let V=0,R=y;V!==N;++V,R+=4)f.copy(v[V]).applyMatrix4(I,m),f.normal.toArray(M,R),M[R+3]=f.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,M}}const ro=4,FA=6,HA=20,GA=256,_l=new vb,r_=new nt;let Jh=null,$h=0,em=0,tm=!1;const kA=new me,Yr=new me;class s_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,d={}){const{size:f=256,position:m=kA}=d;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),em=this._renderer.getActiveMipmapLevel(),tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,c,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,em),this._renderer.xr.enabled=tm,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Jr||t.mapping===uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),em=this._renderer.getActiveMipmapLevel(),tm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:da,format:Gi,colorSpace:Iu,depthBuffer:!1},c=o_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(t,i,s);const{_lodMax:d}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VA(d)),this._blurMaterial=XA(d,t,i),this._ggxMaterial=jA(d,t,i)}return c}_compileMaterial(t){const i=new Vi(new Ri,t);this._renderer.compile(i,_l)}_sceneToCubeUV(t,i,s,c,d){const g=new fi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(r_),v.toneMapping=la,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(c),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new Ll,new Vu({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let b=!1;const I=t.background;I?I.isColor&&(M.color.copy(I),t.background=null,b=!0):(M.color.copy(r_),b=!0);for(let V=0;V<6;V++){const R=V%3;R===0?(g.up.set(0,p[V],0),g.position.set(d.x,d.y,d.z),g.lookAt(d.x+S[V],d.y,d.z)):R===1?(g.up.set(0,0,p[V]),g.position.set(d.x,d.y,d.z),g.lookAt(d.x,d.y+S[V],d.z)):(g.up.set(0,p[V],0),g.position.set(d.x,d.y,d.z),g.lookAt(d.x,d.y,d.z+S[V]));const D=this._cubeSize;io(c,R*D,V>2?D:0,D,D),v.setRenderTarget(c),b&&v.render(N,g),v.render(t,g)}v.toneMapping=y,v.autoClear=_,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Jr||t.mapping===uo;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const d=c?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=d;const m=d.uniforms;m.envMap.value=t;const g=this._cubeSize;io(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(f,_l)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let d=1;d<c;d++)this._applyGGXFilter(t,d-1,d);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,d=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[s];m.material=f;const g=f.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-S*S),_=p*1.25,y=v*_,{_lodMax:C}=this,N=this._sizeLods[s],M=3*N*(s>C-ro?s-C+ro:0),b=4*(this._cubeSize-N);g.envMap.value=t.texture,g.roughness.value=y,g.mipInt.value=C-i,io(d,M,b,3*N,2*N),c.setRenderTarget(d),c.render(m,_l),g.envMap.value=d.texture,g.roughness.value=0,g.mipInt.value=C-s,io(t,M,b,3*N,2*N),c.setRenderTarget(t),c.render(m,_l)}_blur(t,i,s,c){const d=this._pingPongRenderTarget,f=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,d,i,s,f),this._blurPass(d,t,s,s,f)}_blurPass(t,i,s,c,d){const f=this._renderer,m=this._blurMaterial,g=this._lodMeshes[c];g.material=m;const p=m.uniforms;p.envMap.value=t.texture,p.sigma.value=d,p.mipInt.value=this._lodMax-s;const S=this._sizeLods[c],v=3*S*(c>this._lodMax-ro?c-this._lodMax+ro:0),_=4*(this._cubeSize-S);io(i,v,_,3*S,2*S),f.setRenderTarget(i),f.render(g,_l)}}function VA(o){const t=[],i=[];let s=o;const c=o-ro+1+FA;for(let d=0;d<c;d++){const f=Math.pow(2,s);t.push(f);const m=1/(f-2),g=-m,p=1+m,S=[g,g,p,g,p,p,g,g,p,p,g,p],v=6,_=6,y=3,C=new Float32Array(y*_*v),N=new Float32Array(y*_*v);for(let b=0;b<v;b++){const I=b%3*2/3-1,V=b>2?0:-1,R=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];C.set(R,y*_*b);for(let D=0;D<_;D++){const U=S[D*2]*2-1,P=S[D*2+1]*2-1;b===0?Yr.set(1,P,U):b===1?Yr.set(-U,1,-P):b===2?Yr.set(-U,P,1):b===3?Yr.set(-1,P,-U):b===4?Yr.set(-U,-1,P):Yr.set(U,P,-1),Yr.toArray(N,(b*_+D)*y)}}const M=new Ri;M.setAttribute("position",new wi(C,y)),M.setAttribute("outputDirection",new wi(N,y)),i.push(new Vi(M,null)),s>ro&&s--}return{lodMeshes:i,sizeLods:t}}function o_(o,t,i){const s=new ki(o,t,i);return s.texture.mapping=ku,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function io(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function jA(o,t,i){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function XA(o,t,i){return new fa({name:"SphericalGaussianBlur",defines:{SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function l_(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function c_(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Wu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sb extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new mb(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Ll(5,5,5),d=new fa({name:"CubemapFromEquirect",uniforms:fo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Pa});d.uniforms.tEquirect.value=i;const f=new Vi(c,d),m=i.minFilter;return i.minFilter===Zr&&(i.minFilter=zn),new ZE(1,10,this).update(t,f),i.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const d=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,c);t.setRenderTarget(d)}}function WA(o){let t=new WeakMap,i=new WeakMap,s=null;function c(_,y=!1){return _==null?null:y?f(_):d(_)}function d(_){if(_&&_.isTexture){const y=_.mapping;if(y===Ah||y===wh)if(t.has(_)){const C=t.get(_).texture;return m(C,_.mapping)}else{const C=_.image;if(C&&C.height>0){const N=new Sb(C.height);return N.fromEquirectangularTexture(o,_),t.set(_,N),_.addEventListener("dispose",p),m(N.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const y=_.mapping,C=y===Ah||y===wh,N=y===Jr||y===uo;if(C||N){let M=i.get(_);const b=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==b)return s===null&&(s=new s_(o)),M=C?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const I=_.image;return C&&I&&I.height>0||N&&I&&g(I)?(s===null&&(s=new s_(o)),M=C?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function m(_,y){return y===Ah?_.mapping=Jr:y===wh&&(_.mapping=uo),_}function g(_){let y=0;const C=6;for(let N=0;N<C;N++)_[N]!==void 0&&y++;return y===C}function p(_){const y=_.target;y.removeEventListener("dispose",p);const C=t.get(y);C!==void 0&&(t.delete(y),C.dispose())}function S(_){const y=_.target;y.removeEventListener("dispose",S);const C=i.get(y);C!==void 0&&(i.delete(y),C.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:v}}function qA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=o.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&so("WebGLRenderer: "+s+" extension not supported."),c}}}function YA(o,t,i,s){const c={},d=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const C in _.attributes)t.remove(_.attributes[C]);_.removeEventListener("dispose",f),delete c[_.id];const y=d.get(_);y&&(t.remove(y),d.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function m(v,_){return c[_.id]===!0||(_.addEventListener("dispose",f),c[_.id]=!0,i.memory.geometries++),_}function g(v){const _=v.attributes;for(const y in _)t.update(_[y],o.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,C=v.attributes.position;let N=0;if(C===void 0)return;if(y!==null){const I=y.array;N=y.version;for(let V=0,R=I.length;V<R;V+=3){const D=I[V+0],U=I[V+1],P=I[V+2];_.push(D,U,U,P,P,D)}}else{const I=C.array;N=C.version;for(let V=0,R=I.length/3-1;V<R;V+=3){const D=V+0,U=V+1,P=V+2;_.push(D,U,U,P,P,D)}}const M=new(C.count>=65535?lb:ob)(_,1);M.version=N;const b=d.get(v);b&&t.remove(b),d.set(v,M)}function S(v){const _=d.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return d.get(v)}return{get:m,update:g,getWireframeAttribute:S}}function ZA(o,t,i){let s;function c(v){s=v}let d,f;function m(v){d=v.type,f=v.bytesPerElement}function g(v,_){o.drawElements(s,_,d,v*f),i.update(_,s,1)}function p(v,_,y){y!==0&&(o.drawElementsInstanced(s,_,d,v*f,y),i.update(_,s,y))}function S(v,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,d,v,0,y);let N=0;for(let M=0;M<y;M++)N+=_[M];i.update(N,s,1)}this.setMode=c,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=S}function KA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(d,f,m){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=m*(d/3);break;case o.LINES:i.lines+=m*(d/2);break;case o.LINE_STRIP:i.lines+=m*(d-1);break;case o.LINE_LOOP:i.lines+=m*d;break;case o.POINTS:i.points+=m*d;break;default:Ht("WebGLInfo: Unknown draw mode:",f);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function QA(o,t,i){const s=new WeakMap,c=new hn;function d(f,m,g){const p=f.morphTargetInfluences,S=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=S!==void 0?S.length:0;let _=s.get(m);if(_===void 0||_.count!==v){let k=function(){T.dispose(),s.delete(m),m.removeEventListener("dispose",k)};var y=k;_!==void 0&&_.texture.dispose();const C=m.morphAttributes.position!==void 0,N=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,b=m.morphAttributes.position||[],I=m.morphAttributes.normal||[],V=m.morphAttributes.color||[];let R=0;C===!0&&(R=1),N===!0&&(R=2),M===!0&&(R=3);let D=m.attributes.position.count*R,U=1;D>t.maxTextureSize&&(U=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*U*4*v),T=new ib(P,D,U,v);T.type=Hi,T.needsUpdate=!0;const O=R*4;for(let G=0;G<v;G++){const ee=b[G],le=I[G],K=V[G],$=D*U*4*G;for(let j=0;j<ee.count;j++){const q=j*O;C===!0&&(c.fromBufferAttribute(ee,j),P[$+q+0]=c.x,P[$+q+1]=c.y,P[$+q+2]=c.z,P[$+q+3]=0),N===!0&&(c.fromBufferAttribute(le,j),P[$+q+4]=c.x,P[$+q+5]=c.y,P[$+q+6]=c.z,P[$+q+7]=0),M===!0&&(c.fromBufferAttribute(K,j),P[$+q+8]=c.x,P[$+q+9]=c.y,P[$+q+10]=c.z,P[$+q+11]=K.itemSize===4?c.w:1)}}_={count:v,texture:T,size:new Vt(D,U)},s.set(m,_),m.addEventListener("dispose",k)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let C=0;for(let M=0;M<p.length;M++)C+=p[M];const N=m.morphTargetsRelative?1:1-C;g.getUniforms().setValue(o,"morphTargetBaseInfluence",N),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:d}}function JA(o,t,i,s,c){let d=new WeakMap;function f(p){const S=c.render.frame,v=p.geometry,_=t.get(p,v);if(d.get(_)!==S&&(t.update(_),d.set(_,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),d.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),d.set(p,S))),p.isSkinnedMesh){const y=p.skeleton;d.get(y)!==S&&(y.update(),d.set(y,S))}return _}function m(){d=new WeakMap}function g(p){const S=p.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:f,dispose:m}}const $A={[k_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[j_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function ew(o,t,i,s,c,d){const f=new ki(t,i,{type:o,depthBuffer:c,stencilBuffer:d,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let m=null,g=null;const p=new Ri;p.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const S=new WE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Vi(p,S),_=new vb(-1,1,1,-1,0,1);let y=null,C=null,N=!1,M,b=null,I=[],V=!1;this.setSize=function(R,D){f.setSize(R,D),m!==null&&m.setSize(R,D),g!==null&&g.setSize(R,D);for(let U=0;U<I.length;U++){const P=I[U];P.setSize&&P.setSize(R,D)}},this.setEffects=function(R){I=R,V=I.length>0&&I[0].isRenderPass===!0;const D=f.width,U=f.height;I.length>0&&m===null&&(m=new ki(D,U,{type:da,depthBuffer:!1,stencilBuffer:!1}),g=new ki(D,U,{type:da,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<I.length;P++){const T=I[P];T.setSize&&T.setSize(D,U)}},this.begin=function(R,D){if(N||R.toneMapping===la&&I.length===0)return!1;if(b=D,D!==null){const U=D.width,P=D.height;(f.width!==U||f.height!==P)&&this.setSize(U,P)}return V===!1&&R.setRenderTarget(f),M=R.toneMapping,R.toneMapping=la,!0},this.hasRenderPass=function(){return V},this.end=function(R,D){R.toneMapping=M,N=!0;let U=f,P=m;for(let T=0;T<I.length;T++){const O=I[T];O.enabled!==!1&&(O.render(R,P,U,D),O.needsSwap!==!1&&(U=P,P=P===m?g:m))}if(y!==R.outputColorSpace||C!==R.toneMapping){y=R.outputColorSpace,C=R.toneMapping,S.defines={},Ot.getTransfer(y)===Zt&&(S.defines.SRGB_TRANSFER="");const T=$A[C];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(b),R.render(v,_),b=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){f.dispose(),m!==null&&m.dispose(),g!==null&&g.dispose(),p.dispose(),S.dispose()}}const yb=new Wn,qm=new Rl(1,1),Mb=new ib,Eb=new ME,Tb=new mb,u_=[],d_=[],f_=new Float32Array(16),h_=new Float32Array(9),m_=new Float32Array(4);function po(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let d=u_[c];if(d===void 0&&(d=new Float32Array(c),u_[c]=d),t!==0){s.toArray(d,0);for(let f=1,m=0;f!==t;++f)m+=i,o[f].toArray(d,m)}return d}function yn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Mn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function qu(o,t){let i=d_[t];i===void 0&&(i=new Int32Array(t),d_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function tw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function nw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;o.uniform2fv(this.addr,t),Mn(i,t)}}function iw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;o.uniform3fv(this.addr,t),Mn(i,t)}}function aw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;o.uniform4fv(this.addr,t),Mn(i,t)}}function rw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;m_.set(s),o.uniformMatrix2fv(this.addr,!1,m_),Mn(i,s)}}function sw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;h_.set(s),o.uniformMatrix3fv(this.addr,!1,h_),Mn(i,s)}}function ow(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;f_.set(s),o.uniformMatrix4fv(this.addr,!1,f_),Mn(i,s)}}function lw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function cw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;o.uniform2iv(this.addr,t),Mn(i,t)}}function uw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;o.uniform3iv(this.addr,t),Mn(i,t)}}function dw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;o.uniform4iv(this.addr,t),Mn(i,t)}}function fw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function hw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;o.uniform2uiv(this.addr,t),Mn(i,t)}}function mw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;o.uniform3uiv(this.addr,t),Mn(i,t)}}function pw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;o.uniform4uiv(this.addr,t),Mn(i,t)}}function gw(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let d;this.type===o.SAMPLER_2D_SHADOW?(qm.compareFunction=i.isReversedDepthBuffer()?rp:ap,d=qm):d=yb,i.setTexture2D(t||d,c)}function xw(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||Eb,c)}function vw(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||Tb,c)}function _w(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||Mb,c)}function bw(o){switch(o){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return aw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return dw;case 5125:return fw;case 36294:return hw;case 36295:return mw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return _w}}function Sw(o,t){o.uniform1fv(this.addr,t)}function yw(o,t){const i=po(t,this.size,2);o.uniform2fv(this.addr,i)}function Mw(o,t){const i=po(t,this.size,3);o.uniform3fv(this.addr,i)}function Ew(o,t){const i=po(t,this.size,4);o.uniform4fv(this.addr,i)}function Tw(o,t){const i=po(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Aw(o,t){const i=po(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ww(o,t){const i=po(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Cw(o,t){o.uniform1iv(this.addr,t)}function Rw(o,t){o.uniform2iv(this.addr,t)}function Nw(o,t){o.uniform3iv(this.addr,t)}function Dw(o,t){o.uniform4iv(this.addr,t)}function Uw(o,t){o.uniform1uiv(this.addr,t)}function Lw(o,t){o.uniform2uiv(this.addr,t)}function Ow(o,t){o.uniform3uiv(this.addr,t)}function Pw(o,t){o.uniform4uiv(this.addr,t)}function Iw(o,t,i){const s=this.cache,c=t.length,d=qu(i,c);yn(s,d)||(o.uniform1iv(this.addr,d),Mn(s,d));let f;this.type===o.SAMPLER_2D_SHADOW?f=qm:f=yb;for(let m=0;m!==c;++m)i.setTexture2D(t[m]||f,d[m])}function Bw(o,t,i){const s=this.cache,c=t.length,d=qu(i,c);yn(s,d)||(o.uniform1iv(this.addr,d),Mn(s,d));for(let f=0;f!==c;++f)i.setTexture3D(t[f]||Eb,d[f])}function zw(o,t,i){const s=this.cache,c=t.length,d=qu(i,c);yn(s,d)||(o.uniform1iv(this.addr,d),Mn(s,d));for(let f=0;f!==c;++f)i.setTextureCube(t[f]||Tb,d[f])}function Fw(o,t,i){const s=this.cache,c=t.length,d=qu(i,c);yn(s,d)||(o.uniform1iv(this.addr,d),Mn(s,d));for(let f=0;f!==c;++f)i.setTexture2DArray(t[f]||Mb,d[f])}function Hw(o){switch(o){case 5126:return Sw;case 35664:return yw;case 35665:return Mw;case 35666:return Ew;case 35674:return Tw;case 35675:return Aw;case 35676:return ww;case 5124:case 35670:return Cw;case 35667:case 35671:return Rw;case 35668:case 35672:return Nw;case 35669:case 35673:return Dw;case 5125:return Uw;case 36294:return Lw;case 36295:return Ow;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Fw}}class Gw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=bw(i.type)}}class kw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Hw(i.type)}}class Vw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let d=0,f=c.length;d!==f;++d){const m=c[d];m.setValue(t,i[m.id],s)}}}const nm=/(\w+)(\])?(\[|\.)?/g;function p_(o,t){o.seq.push(t),o.map[t.id]=t}function jw(o,t,i){const s=o.name,c=s.length;for(nm.lastIndex=0;;){const d=nm.exec(s),f=nm.lastIndex;let m=d[1];const g=d[2]==="]",p=d[3];if(g&&(m=m|0),p===void 0||p==="["&&f+2===c){p_(i,p===void 0?new Gw(m,o,t):new kw(m,o,t));break}else{let v=i.map[m];v===void 0&&(v=new Vw(m),p_(i,v)),i=v}}}class Lu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const m=t.getActiveUniform(i,f),g=t.getUniformLocation(i,m.name);jw(m,g,this)}const c=[],d=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(f):d.push(f);c.length>0&&(this.seq=c.concat(d))}setValue(t,i,s,c){const d=this.map[i];d!==void 0&&d.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let d=0,f=i.length;d!==f;++d){const m=i[d],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,d=t.length;c!==d;++c){const f=t[c];f.id in i&&s.push(f)}return s}}function g_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Xw=37297;let Ww=0;function qw(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),d=Math.min(t+6,i.length);for(let f=c;f<d;f++){const m=f+1;s.push(`${m===t?">":" "} ${m}: ${i[f]}`)}return s.join(`
`)}const x_=new pt;function Yw(o){Ot._getMatrix(x_,Ot.workingColorSpace,o);const t=`mat3( ${x_.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(o)){case Bu:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function v_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),d=(o.getShaderInfoLog(t)||"").trim();if(s&&d==="")return"";const f=/ERROR: 0:(\d+)/.exec(d);if(f){const m=parseInt(f[1]);return i.toUpperCase()+`

`+d+`

`+qw(o.getShaderSource(t),m)}else return d}function Zw(o,t){const i=Yw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Kw={[k_]:"Linear",[V_]:"Reinhard",[j_]:"Cineon",[X_]:"ACESFilmic",[q_]:"AgX",[Y_]:"Neutral",[W_]:"Custom"};function Qw(o,t){const i=Kw[t];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wu=new me;function Jw(){Ot.getLuminanceCoefficients(wu);const o=wu.x.toFixed(4),t=wu.y.toFixed(4),i=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function eC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function tC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const d=o.getActiveAttrib(t,c),f=d.name;let m=1;d.type===o.FLOAT_MAT2&&(m=2),d.type===o.FLOAT_MAT3&&(m=3),d.type===o.FLOAT_MAT4&&(m=4),i[f]={type:d.type,location:o.getAttribLocation(t,f),locationSize:m}}return i}function yl(o){return o!==""}function __(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ym(o){return o.replace(nC,aC)}const iC=new Map;function aC(o,t){let i=yt[t];if(i===void 0){const s=iC.get(t);if(s!==void 0)i=yt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ym(i)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(rC,sC)}function sC(o,t,i,s){let c="";for(let d=parseInt(t);d<parseInt(i);d++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+d+" ]").replace(/UNROLLED_LOOP_INDEX/g,d);return c}function y_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const oC={[Cu]:"SHADOWMAP_TYPE_PCF",[Sl]:"SHADOWMAP_TYPE_VSM"};function lC(o){return oC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cC={[Jr]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[ku]:"ENVMAP_TYPE_CUBE_UV"};function uC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":cC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const dC={[uo]:"ENVMAP_MODE_REFRACTION"};function fC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":dC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hC={[G_]:"ENVMAP_BLENDING_MULTIPLY",[$1]:"ENVMAP_BLENDING_MIX",[eE]:"ENVMAP_BLENDING_ADD"};function mC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":hC[o.combine]||"ENVMAP_BLENDING_NONE"}function pC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gC(o,t,i,s){const c=o.getContext(),d=i.defines;let f=i.vertexShader,m=i.fragmentShader;const g=lC(i),p=uC(i),S=fC(i),v=mC(i),_=pC(i),y=$w(i),C=eC(d),N=c.createProgram();let M,b,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(yl).join(`
`),M.length>0&&(M+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(yl).join(`
`),b.length>0&&(b+=`
`)):(M=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),b=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?yt.tonemapping_pars_fragment:"",i.toneMapping!==la?Qw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,Zw("linearToOutputTexel",i.outputColorSpace),Jw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yl).join(`
`)),f=Ym(f),f=__(f,i),f=b_(f,i),m=Ym(m),m=__(m,i),m=b_(m,i),f=S_(f),m=S_(m),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",i.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const V=I+M+f,R=I+b+m,D=g_(c,c.VERTEX_SHADER,V),U=g_(c,c.FRAGMENT_SHADER,R);c.attachShader(N,D),c.attachShader(N,U),i.index0AttributeName!==void 0?c.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(N,0,"position"),c.linkProgram(N);function P(G){if(o.debug.checkShaderErrors){const ee=c.getProgramInfoLog(N)||"",le=c.getShaderInfoLog(D)||"",K=c.getShaderInfoLog(U)||"",$=ee.trim(),j=le.trim(),q=K.trim();let fe=!0,te=!0;if(c.getProgramParameter(N,c.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,N,D,U);else{const ce=v_(c,D,"vertex"),_e=v_(c,U,"fragment");Ht("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(N,c.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+ce+`
`+_e)}else $!==""?ut("WebGLProgram: Program Info Log:",$):(j===""||q==="")&&(te=!1);te&&(G.diagnostics={runnable:fe,programLog:$,vertexShader:{log:j,prefix:M},fragmentShader:{log:q,prefix:b}})}c.deleteShader(D),c.deleteShader(U),T=new Lu(c,N),O=tC(c,N)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=c.getProgramParameter(N,Xw)),k},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ww++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=D,this.fragmentShader=U,this}let xC=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new _C(t),i.set(t,s)),s}}class _C{constructor(t){this.id=xC++,this.code=t,this.usedTimes=0}}function bC(o){return o===$r||o===Ou||o===Pu}function SC(o,t,i,s,c,d){const f=new ab,m=new vC,g=new Set,p=[],S=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return g.add(T),T===0?"uv":`uv${T}`}function N(T,O,k,G,ee,le){const K=G.fog,$=ee.geometry,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,fe=t.get(T.envMap||j,q),te=fe&&fe.mapping===ku?fe.image.height:null,ce=y[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ne=_e!==void 0?_e.length:0;let je=0;$.morphAttributes.position!==void 0&&(je=1),$.morphAttributes.normal!==void 0&&(je=2),$.morphAttributes.color!==void 0&&(je=3);let z,pe,Ce,Y;if(ce){const Ut=sa[ce];z=Ut.vertexShader,pe=Ut.fragmentShader}else{z=T.vertexShader,pe=T.fragmentShader;const Ut=m.getVertexShaderStage(T),ht=m.getFragmentShaderStage(T);m.update(T,Ut,ht),Ce=Ut.id,Y=ht.id}const ue=o.getRenderTarget(),ye=o.state.buffers.depth.getReversed(),we=ee.isInstancedMesh===!0,ge=ee.isBatchedMesh===!0,Ae=!!T.map,st=!!T.matcap,dt=!!fe,gt=!!T.aoMap,_t=!!T.lightMap,$e=!!T.bumpMap&&T.wireframe===!1,it=!!T.normalMap,It=!!T.displacementMap,ln=!!T.emissiveMap,Ft=!!T.metalnessMap,nn=!!T.roughnessMap,W=T.anisotropy>0,sn=T.clearcoat>0,zt=T.dispersion>0,L=T.retroreflectivity>0,E=T.iridescence>0,ne=T.sheen>0,oe=T.transmission>0,xe=W&&!!T.anisotropyMap,Re=sn&&!!T.clearcoatMap,Le=sn&&!!T.clearcoatNormalMap,ve=sn&&!!T.clearcoatRoughnessMap,Ee=E&&!!T.iridescenceMap,Ue=E&&!!T.iridescenceThicknessMap,tt=ne&&!!T.sheenColorMap,ze=ne&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Xe=!!T.specularColorMap,rt=!!T.specularIntensityMap,ft=oe&&!!T.transmissionMap,X=oe&&!!T.thicknessMap,De=!!T.gradientMap,Me=!!T.alphaMap,Oe=T.alphaTest>0,Ve=!!T.alphaHash,Te=!!T.extensions;let et=la;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(et=o.toneMapping);const ke={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:pe,defines:T.defines,customVertexShaderID:Ce,customFragmentShaderID:Y,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ge,batchingColor:ge&&ee._colorsTexture!==null,instancing:we,instancingColor:we&&ee.instanceColor!==null,instancingMorph:we&&ee.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ae,matcap:st,envMap:dt,envMapMode:dt&&fe.mapping,envMapCubeUVHeight:te,aoMap:gt,lightMap:_t,bumpMap:$e,normalMap:it,displacementMap:It,emissiveMap:ln,normalMapObjectSpace:it&&T.normalMapType===iE,normalMapTangentSpace:it&&T.normalMapType===Dv,packedNormalMap:it&&T.normalMapType===Dv&&bC(T.normalMap.format),metalnessMap:Ft,roughnessMap:nn,anisotropy:W,anisotropyMap:xe,clearcoat:sn,clearcoatMap:Re,clearcoatNormalMap:Le,clearcoatRoughnessMap:ve,dispersion:zt,retroreflection:L,iridescence:E,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:ne,sheenColorMap:tt,sheenRoughnessMap:ze,specularMap:Be,specularColorMap:Xe,specularIntensityMap:rt,transmission:oe,transmissionMap:ft,thicknessMap:X,gradientMap:De,opaque:T.transparent===!1&&T.blending===Ml&&T.alphaToCoverage===!1,alphaMap:Me,alphaTest:Oe,alphaHash:Ve,combine:T.combine,mapUv:Ae&&C(T.map.channel),aoMapUv:gt&&C(T.aoMap.channel),lightMapUv:_t&&C(T.lightMap.channel),bumpMapUv:$e&&C(T.bumpMap.channel),normalMapUv:it&&C(T.normalMap.channel),displacementMapUv:It&&C(T.displacementMap.channel),emissiveMapUv:ln&&C(T.emissiveMap.channel),metalnessMapUv:Ft&&C(T.metalnessMap.channel),roughnessMapUv:nn&&C(T.roughnessMap.channel),anisotropyMapUv:xe&&C(T.anisotropyMap.channel),clearcoatMapUv:Re&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(T.sheenRoughnessMap.channel),specularMapUv:Be&&C(T.specularMap.channel),specularColorMapUv:Xe&&C(T.specularColorMap.channel),specularIntensityMapUv:rt&&C(T.specularIntensityMap.channel),transmissionMapUv:ft&&C(T.transmissionMap.channel),thicknessMapUv:X&&C(T.thicknessMap.channel),alphaMapUv:Me&&C(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(it||W),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!$.attributes.uv&&(Ae||Me),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&it===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:ee.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:je,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:et,decodeVideoTexture:Ae&&T.map.isVideoTexture===!0&&Ot.getTransfer(T.map.colorSpace)===Zt,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(T.emissiveMap.colorSpace)===Zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===La,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Te&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&T.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ke.vertexUv1s=g.has(1),ke.vertexUv2s=g.has(2),ke.vertexUv3s=g.has(3),g.clear(),ke}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)O.push(k),O.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(b(O,T),I(O,T),O.push(o.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function b(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function I(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.retroreflection&&f.enable(24),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function V(T){const O=y[T.type];let k;if(O){const G=sa[O];k=VE.clone(G.uniforms)}else k=T.uniforms;return k}function R(T,O){let k=S.get(O);return k!==void 0?++k.usedTimes:(k=new gC(o,O,T,c),p.push(k),S.set(O,k)),k}function D(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){m.remove(T)}function P(){m.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:V,acquireProgram:R,releaseProgram:D,releaseShaderCache:U,programs:p,dispose:P}}function yC(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let m=o.get(f);return m===void 0&&(m={},o.set(f,m)),m}function s(f){o.delete(f)}function c(f,m,g){o.get(f)[m]=g}function d(){o=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:d}}function MC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function M_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function E_(){const o=[];let t=0;const i=[],s=[],c=[];function d(){t=0,i.length=0,s.length=0,c.length=0}function f(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function m(_,y,C,N,M,b){let I=o[t];return I===void 0?(I={id:_.id,object:_,geometry:y,material:C,materialVariant:f(_),groupOrder:N,renderOrder:_.renderOrder,z:M,group:b},o[t]=I):(I.id=_.id,I.object=_,I.geometry=y,I.material=C,I.materialVariant=f(_),I.groupOrder=N,I.renderOrder=_.renderOrder,I.z=M,I.group=b),t++,I}function g(_,y,C,N,M,b,I){I.reversedDepth===!0&&(M=-M);const V=m(_,y,C,N,M,b);C.transmission>0?s.push(V):C.transparent===!0?c.push(V):i.push(V)}function p(_,y,C,N,M,b){const I=m(_,y,C,N,M,b);C.transmission>0?s.unshift(I):C.transparent===!0?c.unshift(I):i.unshift(I)}function S(_,y){i.length>1&&i.sort(_||MC),s.length>1&&s.sort(y||M_),c.length>1&&c.sort(y||M_)}function v(){for(let _=t,y=o.length;_<y;_++){const C=o[_];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:s,transparent:c,init:d,push:g,unshift:p,finish:v,sort:S}}function EC(){let o=new WeakMap;function t(s,c){const d=o.get(s);let f;return d===void 0?(f=new E_,o.set(s,[f])):c>=d.length?(f=new E_,d.push(f)):f=d[c],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function TC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new me,color:new nt};break;case"SpotLight":i={position:new me,direction:new me,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new me,color:new nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new me,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":i={color:new nt,position:new me,halfWidth:new me,halfHeight:new me};break}return o[t.id]=i,i}}}function AC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let wC=0;function CC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function RC(o){const t=new TC,i=AC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new me);const c=new me,d=new rn,f=new rn;function m(p){let S=0,v=0,_=0;for(let ee=0;ee<9;ee++)s.probe[ee].set(0,0,0);let y=0,C=0,N=0,M=0,b=0,I=0,V=0,R=0,D=0,U=0,P=0,T=0,O=0,k=0;p.sort(CC);for(let ee=0,le=p.length;ee<le;ee++){const K=p[ee],$=K.color,j=K.intensity,q=K.distance;let fe=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===$r?fe=K.shadow.map.texture:fe=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)S+=$.r*j,v+=$.g*j,_+=$.b*j;else if(K.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(K.sh.coefficients[te],j);k++}else if(K.isSunLight){const te=t.get(K);if(te.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ce=K.shadow,_e=i.get(K);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[C]=_e,s.sunShadowMap[C]=fe;const Ne=ce.getViewportCount();for(let je=0;je<Ne;je++)s.sunShadowMatrix[N+je]=ce.getMatrix(je),s.sunShadowCascade[N+je]=ce._cascadeData[je];N+=Ne,C++}s.sun[y]=te,y++}else if(K.isDirectionalLight){const te=t.get(K);if(te.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ce=K.shadow,_e=i.get(K);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize=ce.mapSize,s.directionalShadow[M]=_e,s.directionalShadowMap[M]=fe,s.directionalShadowMatrix[M]=K.shadow.matrix,D++}s.directional[M]=te,M++}else if(K.isSpotLight){const te=t.get(K);te.position.setFromMatrixPosition(K.matrixWorld),te.color.copy($).multiplyScalar(j),te.distance=q,te.coneCos=Math.cos(K.angle),te.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),te.decay=K.decay,s.spot[I]=te;const ce=K.shadow;if(K.map&&(s.spotLightMap[T]=K.map,T++,ce.updateMatrices(K),K.castShadow&&O++),s.spotLightMatrix[I]=ce.matrix,K.castShadow){const _e=i.get(K);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize=ce.mapSize,s.spotShadow[I]=_e,s.spotShadowMap[I]=fe,P++}I++}else if(K.isRectAreaLight){const te=t.get(K);te.color.copy($).multiplyScalar(j),te.halfWidth.set(K.width*.5,0,0),te.halfHeight.set(0,K.height*.5,0),s.rectArea[V]=te,V++}else if(K.isPointLight){const te=t.get(K);if(te.color.copy(K.color).multiplyScalar(K.intensity),te.distance=K.distance,te.decay=K.decay,K.castShadow){const ce=K.shadow,_e=i.get(K);_e.shadowIntensity=ce.intensity,_e.shadowBias=ce.bias,_e.shadowNormalBias=ce.normalBias,_e.shadowRadius=ce.radius,_e.shadowMapSize=ce.mapSize,_e.shadowCameraNear=ce.camera.near,_e.shadowCameraFar=ce.camera.far,s.pointShadow[b]=_e,s.pointShadowMap[b]=fe,s.pointShadowMatrix[b]=K.shadow.matrix,U++}s.point[b]=te,b++}else if(K.isHemisphereLight){const te=t.get(K);te.skyColor.copy(K.color).multiplyScalar(j),te.groundColor.copy(K.groundColor).multiplyScalar(j),s.hemi[R]=te,R++}}V>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=_;const G=s.hash;(G.sunLength!==y||G.directionalLength!==M||G.pointLength!==b||G.spotLength!==I||G.rectAreaLength!==V||G.hemiLength!==R||G.numSunShadows!==C||G.numDirectionalShadows!==D||G.numPointShadows!==U||G.numSpotShadows!==P||G.numSpotMaps!==T||G.numLightProbes!==k)&&(s.sun.length=y,s.directional.length=M,s.spot.length=I,s.rectArea.length=V,s.point.length=b,s.hemi.length=R,s.sunShadow.length=C,s.sunShadowMap.length=C,s.sunShadowMatrix.length=N,s.sunShadowCascade.length=N,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.directionalShadowMatrix.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+T-O,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=k,G.sunLength=y,G.directionalLength=M,G.pointLength=b,G.spotLength=I,G.rectAreaLength=V,G.hemiLength=R,G.numSunShadows=C,G.numDirectionalShadows=D,G.numPointShadows=U,G.numSpotShadows=P,G.numSpotMaps=T,G.numLightProbes=k,s.version=wC++)}function g(p,S){let v=0,_=0,y=0,C=0,N=0,M=0;const b=S.matrixWorldInverse;for(let I=0,V=p.length;I<V;I++){const R=p[I];if(R.isSunLight){const D=s.sun[v];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(b),v++}else if(R.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(R.matrixWorld),c.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(c),D.direction.transformDirection(b),_++}else if(R.isSpotLight){const D=s.spot[C];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(R.matrixWorld),c.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(c),D.direction.transformDirection(b),C++}else if(R.isRectAreaLight){const D=s.rectArea[N];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(b),f.identity(),d.copy(R.matrixWorld),d.premultiply(b),f.extractRotation(d),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),N++}else if(R.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(b),y++}else if(R.isHemisphereLight){const D=s.hemi[M];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(b),M++}}}return{setup:m,setupView:g,state:s}}function T_(o){const t=new RC(o),i=[],s=[],c=[];function d(_){v.camera=_,i.length=0,s.length=0,c.length=0}function f(_){i.push(_)}function m(_){s.push(_)}function g(_){c.push(_)}function p(){t.setup(i)}function S(_){t.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:d,state:v,setupLights:p,setupLightsView:S,pushLight:f,pushShadow:m,pushLightProbeGrid:g}}function NC(o){let t=new WeakMap;function i(c,d=0){const f=t.get(c);let m;return f===void 0?(m=new T_(o),t.set(c,[m])):d>=f.length?(m=new T_(o),f.push(m)):m=f[d],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const DC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LC=[new me(1,0,0),new me(-1,0,0),new me(0,1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1)],OC=[new me(0,-1,0),new me(0,-1,0),new me(0,0,1),new me(0,0,-1),new me(0,-1,0),new me(0,-1,0)],A_=new rn,bl=new me,im=new me;function PC(o,t,i){let s=new fb;const c=new Vt,d=new Vt,f=new hn,m=new qE,g=new YE,p={},S=i.maxTextureSize,v={[Qr]:$n,[$n]:Qr,[La]:La},_=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:DC,fragmentShader:UC}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const C=new Ri;C.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Vi(C,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let b=this.type;this.render=function(U,P,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===O1&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cu);const O=o.getRenderTarget(),k=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(Pa),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const le=b!==this.type;le&&P.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach($=>$.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,$=U.length;K<$;K++){const j=U[K],q=j.shadow;if(q===void 0){ut("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const fe=q.getFrameExtents();c.multiply(fe),d.copy(q.mapSize),(c.x>S||c.y>S)&&(c.x>S&&(d.x=Math.floor(S/fe.x),c.x=d.x*fe.x,q.mapSize.x=d.x),c.y>S&&(d.y=Math.floor(S/fe.y),c.y=d.y*fe.y,q.mapSize.y=d.y));const te=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=te,q.map===null||le===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Sl){if(j.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ki(c.x,c.y,{format:$r,type:da,minFilter:zn,magFilter:zn,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new Rl(c.x,c.y,Hi),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=Ba,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=On,q.map.depthTexture.magFilter=On}else j.isPointLight?(q.map=new Sb(c.x),q.map.depthTexture=new GE(c.x,ua)):(q.map=new ki(c.x,c.y),q.map.depthTexture=new Rl(c.x,c.y,ua)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=Ba,this.type===Cu?(q.map.depthTexture.compareFunction=te?rp:ap,q.map.depthTexture.minFilter=zn,q.map.depthTexture.magFilter=zn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=On,q.map.depthTexture.magFilter=On);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==c.x||q.map.height!==c.y)&&q.map.setSize(c.x,c.y);const ce=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,T);for(let _e=0;_e<ce;_e++){const Ne=q.getCamera(_e);if(j.isPointLight){const je=q.camera,z=q.matrix,pe=j.distance||je.far;pe!==je.far&&(je.far=pe,je.updateProjectionMatrix()),bl.setFromMatrixPosition(j.matrixWorld),je.position.copy(bl),im.copy(je.position),im.add(LC[_e]),je.up.copy(OC[_e]),je.lookAt(im),je.updateMatrixWorld(),z.makeTranslation(-bl.x,-bl.y,-bl.z),A_.multiplyMatrices(je.projectionMatrix,je.matrixWorldInverse),q._frustum.setFromProjectionMatrix(A_,je.coordinateSystem,je.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,_e),o.clear();else{_e===0&&(o.setRenderTarget(q.map),o.clear());const je=q.getViewport(_e);f.set(d.x*je.x,d.y*je.y,d.x*je.z,d.y*je.w),ee.viewport(f)}s=q.getFrustum(_e),R(P,T,Ne,j,this.type)}q.isPointLightShadow!==!0&&this.type===Sl&&I(q,T),q.needsUpdate=!1}b=this.type,M.needsUpdate=!1,o.setRenderTarget(O,k,G)};function I(U,P){const T=t.update(N);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new ki(c.x,c.y,{format:$r,type:da}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,T,_,N,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,T,y,N,null)}function V(U,P,T,O){let k=null;const G=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?g:m,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ee=k.uuid,le=P.uuid;let K=p[ee];K===void 0&&(K={},p[ee]=K);let $=K[le];$===void 0&&($=k.clone(),K[le]=$,P.addEventListener("dispose",D)),k=$}if(k.visible=P.visible,k.wireframe=P.wireframe,O===Sl?k.side=P.shadowSide!==null?P.shadowSide:P.side:k.side=P.shadowSide!==null?P.shadowSide:v[P.side],k.alphaMap=P.alphaMap,k.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,k.map=P.map,k.clipShadows=P.clipShadows,k.clippingPlanes=P.clippingPlanes,k.clipIntersection=P.clipIntersection,k.displacementMap=P.displacementMap,k.displacementScale=P.displacementScale,k.displacementBias=P.displacementBias,k.wireframeLinewidth=P.wireframeLinewidth,k.linewidth=P.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const ee=o.properties.get(k);ee.light=T}return k}function R(U,P,T,O,k){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===Sl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const le=t.update(U),K=U.material;if(Array.isArray(K)){const $=le.groups;for(let j=0,q=$.length;j<q;j++){const fe=$[j],te=K[fe.materialIndex];if(te&&te.visible){const ce=V(U,te,O,k);U.onBeforeShadow(o,U,P,T,le,ce,fe),o.renderBufferDirect(T,null,le,ce,U,fe),U.onAfterShadow(o,U,P,T,le,ce,fe)}}}else if(K.visible){const $=V(U,K,O,k);U.onBeforeShadow(o,U,P,T,le,$,null),o.renderBufferDirect(T,null,le,$,U,null),U.onAfterShadow(o,U,P,T,le,$,null)}}const ee=U.children;for(let le=0,K=ee.length;le<K;le++)R(ee[le],P,T,O,k)}function D(U){U.target.removeEventListener("dispose",D);for(const T in p){const O=p[T],k=U.target.uuid;k in O&&(O[k].dispose(),delete O[k])}}}function IC(o,t){function i(){let X=!1;const De=new hn;let Me=null;const Oe=new hn(0,0,0,0);return{setMask:function(Ve){Me!==Ve&&!X&&(o.colorMask(Ve,Ve,Ve,Ve),Me=Ve)},setLocked:function(Ve){X=Ve},setClear:function(Ve,Te,et,ke,Ut){Ut===!0&&(Ve*=ke,Te*=ke,et*=ke),De.set(Ve,Te,et,ke),Oe.equals(De)===!1&&(o.clearColor(Ve,Te,et,ke),Oe.copy(De))},reset:function(){X=!1,Me=null,Oe.set(-1,0,0,0)}}}function s(){let X=!1,De=!1,Me=null,Oe=null,Ve=null;return{setReversed:function(Te){if(De!==Te){const et=t.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),De=Te;const ke=Ve;Ve=null,this.setClear(ke)}},getReversed:function(){return De},setTest:function(Te){Te?ue(o.DEPTH_TEST):ye(o.DEPTH_TEST)},setMask:function(Te){Me!==Te&&!X&&(o.depthMask(Te),Me=Te)},setFunc:function(Te){if(De&&(Te=gE[Te]),Oe!==Te){switch(Te){case sm:o.depthFunc(o.NEVER);break;case om:o.depthFunc(o.ALWAYS);break;case lm:o.depthFunc(o.LESS);break;case Al:o.depthFunc(o.LEQUAL);break;case cm:o.depthFunc(o.EQUAL);break;case um:o.depthFunc(o.GEQUAL);break;case dm:o.depthFunc(o.GREATER);break;case fm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Oe=Te}},setLocked:function(Te){X=Te},setClear:function(Te){Ve!==Te&&(Ve=Te,De&&(Te=1-Te),o.clearDepth(Te))},reset:function(){X=!1,Me=null,Oe=null,Ve=null,De=!1}}}function c(){let X=!1,De=null,Me=null,Oe=null,Ve=null,Te=null,et=null,ke=null,Ut=null;return{setTest:function(ht){X||(ht?ue(o.STENCIL_TEST):ye(o.STENCIL_TEST))},setMask:function(ht){De!==ht&&!X&&(o.stencilMask(ht),De=ht)},setFunc:function(ht,ei,hi){(Me!==ht||Oe!==ei||Ve!==hi)&&(o.stencilFunc(ht,ei,hi),Me=ht,Oe=ei,Ve=hi)},setOp:function(ht,ei,hi){(Te!==ht||et!==ei||ke!==hi)&&(o.stencilOp(ht,ei,hi),Te=ht,et=ei,ke=hi)},setLocked:function(ht){X=ht},setClear:function(ht){Ut!==ht&&(o.clearStencil(ht),Ut=ht)},reset:function(){X=!1,De=null,Me=null,Oe=null,Ve=null,Te=null,et=null,ke=null,Ut=null}}}const d=new i,f=new s,m=new c,g=new WeakMap,p=new WeakMap;let S={},v={},_={},y=new WeakMap,C=[],N=null,M=!1,b=null,I=null,V=null,R=null,D=null,U=null,P=null,T=new nt(0,0,0),O=0,k=!1,G=null,ee=null,le=null,K=null,$=null;const j=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,fe=0;const te=o.getParameter(o.VERSION);te.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(te)[1]),q=fe>=1):te.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),q=fe>=2);let ce=null,_e={};const Ne=o.getParameter(o.SCISSOR_BOX),je=o.getParameter(o.VIEWPORT),z=new hn().fromArray(Ne),pe=new hn().fromArray(je);function Ce(X,De,Me,Oe){const Ve=new Uint8Array(4),Te=o.createTexture();o.bindTexture(X,Te),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let et=0;et<Me;et++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,Oe,0,o.RGBA,o.UNSIGNED_BYTE,Ve):o.texImage2D(De+et,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ve);return Te}const Y={};Y[o.TEXTURE_2D]=Ce(o.TEXTURE_2D,o.TEXTURE_2D,1),Y[o.TEXTURE_CUBE_MAP]=Ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[o.TEXTURE_2D_ARRAY]=Ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Y[o.TEXTURE_3D]=Ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),d.setClear(0,0,0,1),f.setClear(1),m.setClear(0),ue(o.DEPTH_TEST),f.setFunc(Al),$e(!1),it(wv),ue(o.CULL_FACE),gt(Pa);function ue(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function ye(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function we(X,De){return _[X]!==De?(o.bindFramebuffer(X,De),_[X]=De,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=De),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=De),!0):!1}function ge(X,De){let Me=C,Oe=!1;if(X){Me=y.get(De),Me===void 0&&(Me=[],y.set(De,Me));const Ve=X.textures;if(Me.length!==Ve.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let Te=0,et=Ve.length;Te<et;Te++)Me[Te]=o.COLOR_ATTACHMENT0+Te;Me.length=Ve.length,Oe=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Oe=!0);Oe&&o.drawBuffers(Me)}function Ae(X){return N!==X?(o.useProgram(X),N=X,!0):!1}const st={[ao]:o.FUNC_ADD,[I1]:o.FUNC_SUBTRACT,[B1]:o.FUNC_REVERSE_SUBTRACT};st[z1]=o.MIN,st[F1]=o.MAX;const dt={[H1]:o.ZERO,[G1]:o.ONE,[k1]:o.SRC_COLOR,[F_]:o.SRC_ALPHA,[Y1]:o.SRC_ALPHA_SATURATE,[W1]:o.DST_COLOR,[j1]:o.DST_ALPHA,[V1]:o.ONE_MINUS_SRC_COLOR,[H_]:o.ONE_MINUS_SRC_ALPHA,[q1]:o.ONE_MINUS_DST_COLOR,[X1]:o.ONE_MINUS_DST_ALPHA,[Z1]:o.CONSTANT_COLOR,[K1]:o.ONE_MINUS_CONSTANT_COLOR,[Q1]:o.CONSTANT_ALPHA,[J1]:o.ONE_MINUS_CONSTANT_ALPHA};function gt(X,De,Me,Oe,Ve,Te,et,ke,Ut,ht){if(X===Pa){M===!0&&(ye(o.BLEND),M=!1);return}if(M===!1&&(ue(o.BLEND),M=!0),X!==P1){if(X!==b||ht!==k){if((I!==ao||D!==ao)&&(o.blendEquation(o.FUNC_ADD),I=ao,D=ao),ht)switch(X){case Ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cv:o.blendFunc(o.ONE,o.ONE);break;case Rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ht("WebGLState: Invalid blending: ",X);break}else switch(X){case Ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Rv:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nv:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",X);break}V=null,R=null,U=null,P=null,T.set(0,0,0),O=0,b=X,k=ht}return}Ve=Ve||De,Te=Te||Me,et=et||Oe,(De!==I||Ve!==D)&&(o.blendEquationSeparate(st[De],st[Ve]),I=De,D=Ve),(Me!==V||Oe!==R||Te!==U||et!==P)&&(o.blendFuncSeparate(dt[Me],dt[Oe],dt[Te],dt[et]),V=Me,R=Oe,U=Te,P=et),(ke.equals(T)===!1||Ut!==O)&&(o.blendColor(ke.r,ke.g,ke.b,Ut),T.copy(ke),O=Ut),b=X,k=!1}function _t(X,De){X.side===La?ye(o.CULL_FACE):ue(o.CULL_FACE);let Me=X.side===$n;De&&(Me=!Me),$e(Me),X.blending===Ml&&X.transparent===!1?gt(Pa):gt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),d.setMask(X.colorWrite);const Oe=X.stencilWrite;m.setTest(Oe),Oe&&(m.setMask(X.stencilWriteMask),m.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),m.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ln(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):ye(o.SAMPLE_ALPHA_TO_COVERAGE)}function $e(X){G!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),G=X)}function it(X){X!==U1?(ue(o.CULL_FACE),X!==ee&&(X===wv?o.cullFace(o.BACK):X===L1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ye(o.CULL_FACE),ee=X}function It(X){X!==le&&(q&&o.lineWidth(X),le=X)}function ln(X,De,Me){X?(ue(o.POLYGON_OFFSET_FILL),(K!==De||$!==Me)&&(K=De,$=Me,f.getReversed()&&(De=-De),o.polygonOffset(De,Me))):ye(o.POLYGON_OFFSET_FILL)}function Ft(X){X?ue(o.SCISSOR_TEST):ye(o.SCISSOR_TEST)}function nn(X){X===void 0&&(X=o.TEXTURE0+j-1),ce!==X&&(o.activeTexture(X),ce=X)}function W(X,De,Me){Me===void 0&&(ce===null?Me=o.TEXTURE0+j-1:Me=ce);let Oe=_e[Me];Oe===void 0&&(Oe={type:void 0,texture:void 0},_e[Me]=Oe),(Oe.type!==X||Oe.texture!==De)&&(ce!==Me&&(o.activeTexture(Me),ce=Me),o.bindTexture(X,De||Y[X]),Oe.type=X,Oe.texture=De)}function sn(){const X=_e[ce];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function zt(){try{o.compressedTexImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function L(){try{o.compressedTexImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function E(){try{o.texSubImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function ne(){try{o.texSubImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function xe(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Re(){try{o.texStorage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Le(){try{o.texStorage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function ve(){try{o.texImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Ee(){try{o.texImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Ue(X){return v[X]!==void 0?v[X]:o.getParameter(X)}function tt(X,De){v[X]!==De&&(o.pixelStorei(X,De),v[X]=De)}function ze(X){z.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),z.copy(X))}function Be(X){pe.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),pe.copy(X))}function Xe(X,De){let Me=p.get(De);Me===void 0&&(Me=new WeakMap,p.set(De,Me));let Oe=Me.get(X);Oe===void 0&&(Oe=o.getUniformBlockIndex(De,X.name),Me.set(X,Oe))}function rt(X,De){const Oe=p.get(De).get(X);g.get(De)!==Oe&&(o.uniformBlockBinding(De,Oe,X.__bindingPointIndex),g.set(De,Oe))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},ce=null,_e={},_={},y=new WeakMap,C=[],N=null,M=!1,b=null,I=null,V=null,R=null,D=null,U=null,P=null,T=new nt(0,0,0),O=0,k=!1,G=null,ee=null,le=null,K=null,$=null,z.set(0,0,o.canvas.width,o.canvas.height),pe.set(0,0,o.canvas.width,o.canvas.height),d.reset(),f.reset(),m.reset()}return{buffers:{color:d,depth:f,stencil:m},enable:ue,disable:ye,bindFramebuffer:we,drawBuffers:ge,useProgram:Ae,setBlending:gt,setMaterial:_t,setFlipSided:$e,setCullFace:it,setLineWidth:It,setPolygonOffset:ln,setScissorTest:Ft,activeTexture:nn,bindTexture:W,unbindTexture:sn,compressedTexImage2D:zt,compressedTexImage3D:L,texImage2D:ve,texImage3D:Ee,pixelStorei:tt,getParameter:Ue,updateUBOMapping:Xe,uniformBlockBinding:rt,texStorage2D:Re,texStorage3D:Le,texSubImage2D:E,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:xe,scissor:ze,viewport:Be,reset:ft}}function BC(o,t,i,s,c,d,f){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,S=new WeakMap,v=new Set;let _;const y=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(L,E){return C?new OffscreenCanvas(L,E):Fu("canvas")}function M(L,E,ne){let oe=1;const xe=zt(L);if((xe.width>ne||xe.height>ne)&&(oe=ne/Math.max(xe.width,xe.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(oe*xe.width),Le=Math.floor(oe*xe.height);_===void 0&&(_=N(Re,Le));const ve=E?N(Re,Le):_;return ve.width=Re,ve.height=Le,ve.getContext("2d").drawImage(L,0,0,Re,Le),ut("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Re+"x"+Le+")."),ve}else return"data"in L&&ut("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function b(L){return L.generateMipmaps}function I(L){o.generateMipmap(L)}function V(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(L,E,ne,oe,xe,Re=!1){if(L!==null){if(o[L]!==void 0)return o[L];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Le;oe&&(Le=t.get("EXT_texture_norm16"),Le||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===o.RED&&(ne===o.FLOAT&&(ve=o.R32F),ne===o.HALF_FLOAT&&(ve=o.R16F),ne===o.UNSIGNED_BYTE&&(ve=o.R8),ne===o.UNSIGNED_SHORT&&Le&&(ve=Le.R16_EXT),ne===o.SHORT&&Le&&(ve=Le.R16_SNORM_EXT)),E===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.R8UI),ne===o.UNSIGNED_SHORT&&(ve=o.R16UI),ne===o.UNSIGNED_INT&&(ve=o.R32UI),ne===o.BYTE&&(ve=o.R8I),ne===o.SHORT&&(ve=o.R16I),ne===o.INT&&(ve=o.R32I)),E===o.RG&&(ne===o.FLOAT&&(ve=o.RG32F),ne===o.HALF_FLOAT&&(ve=o.RG16F),ne===o.UNSIGNED_BYTE&&(ve=o.RG8),ne===o.UNSIGNED_SHORT&&Le&&(ve=Le.RG16_EXT),ne===o.SHORT&&Le&&(ve=Le.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.RG8UI),ne===o.UNSIGNED_SHORT&&(ve=o.RG16UI),ne===o.UNSIGNED_INT&&(ve=o.RG32UI),ne===o.BYTE&&(ve=o.RG8I),ne===o.SHORT&&(ve=o.RG16I),ne===o.INT&&(ve=o.RG32I)),E===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(ve=o.RGB16UI),ne===o.UNSIGNED_INT&&(ve=o.RGB32UI),ne===o.BYTE&&(ve=o.RGB8I),ne===o.SHORT&&(ve=o.RGB16I),ne===o.INT&&(ve=o.RGB32I)),E===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(ve=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(ve=o.RGBA16UI),ne===o.UNSIGNED_INT&&(ve=o.RGBA32UI),ne===o.BYTE&&(ve=o.RGBA8I),ne===o.SHORT&&(ve=o.RGBA16I),ne===o.INT&&(ve=o.RGBA32I)),E===o.RGB&&(ne===o.UNSIGNED_SHORT&&Le&&(ve=Le.RGB16_EXT),ne===o.SHORT&&Le&&(ve=Le.RGB16_SNORM_EXT),ne===o.UNSIGNED_INT_5_9_9_9_REV&&(ve=o.RGB9_E5),ne===o.UNSIGNED_INT_10F_11F_11F_REV&&(ve=o.R11F_G11F_B10F)),E===o.RGBA){const Ee=Re?Bu:Ot.getTransfer(xe);ne===o.FLOAT&&(ve=o.RGBA32F),ne===o.HALF_FLOAT&&(ve=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(ve=Ee===Zt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT&&Le&&(ve=Le.RGBA16_EXT),ne===o.SHORT&&Le&&(ve=Le.RGBA16_SNORM_EXT),ne===o.UNSIGNED_SHORT_4_4_4_4&&(ve=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(ve=o.RGB5_A1)}return(ve===o.R16F||ve===o.R32F||ve===o.RG16F||ve===o.RG32F||ve===o.RGBA16F||ve===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function D(L,E){let ne;return L?E===null||E===ua||E===Cl?ne=o.DEPTH24_STENCIL8:E===Hi?ne=o.DEPTH32F_STENCIL8:E===wl&&(ne=o.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ua||E===Cl?ne=o.DEPTH_COMPONENT24:E===Hi?ne=o.DEPTH_COMPONENT32F:E===wl&&(ne=o.DEPTH_COMPONENT16),ne}function U(L,E){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==On&&L.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){const E=L.target;E.removeEventListener("dispose",P),O(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&v.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),G(E)}function O(L){const E=s.get(L);if(E.__webglInit===void 0)return;const ne=L.source,oe=y.get(ne);if(oe){const xe=oe[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&k(L),Object.keys(oe).length===0&&y.delete(ne)}s.remove(L)}function k(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const ne=L.source,oe=y.get(ne);delete oe[E.__cacheKey],f.memory.textures--}function G(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let xe=0;xe<E.__webglFramebuffer[oe].length;xe++)o.deleteFramebuffer(E.__webglFramebuffer[oe][xe]);else o.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)o.deleteFramebuffer(E.__webglFramebuffer[oe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ne=L.textures;for(let oe=0,xe=ne.length;oe<xe;oe++){const Re=s.get(ne[oe]);Re.__webglTexture&&(o.deleteTexture(Re.__webglTexture),f.memory.textures--),s.remove(ne[oe])}s.remove(L)}let ee=0;function le(){ee=0}function K(){return ee}function $(L){ee=L}function j(){const L=ee;return L>=c.maxTextures&&ut("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+c.maxTextures),ee+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function fe(L,E){const ne=s.get(L);if(L.isVideoTexture&&W(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const oe=L.image;if(oe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(ne,L,E);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+E)}function te(L,E){const ne=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){ye(ne,L,E);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+E)}function ce(L,E){const ne=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){ye(ne,L,E);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+E)}function _e(L,E){const ne=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ne.__version!==L.version){we(ne,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+E)}const Ne={[hm]:o.REPEAT,[Oa]:o.CLAMP_TO_EDGE,[mm]:o.MIRRORED_REPEAT},je={[On]:o.NEAREST,[tE]:o.NEAREST_MIPMAP_NEAREST,[nu]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[Ch]:o.LINEAR_MIPMAP_NEAREST,[Zr]:o.LINEAR_MIPMAP_LINEAR},z={[rE]:o.NEVER,[uE]:o.ALWAYS,[sE]:o.LESS,[ap]:o.LEQUAL,[oE]:o.EQUAL,[rp]:o.GEQUAL,[lE]:o.GREATER,[cE]:o.NOTEQUAL};function pe(L,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===Ch||E.magFilter===nu||E.magFilter===Zr||E.minFilter===zn||E.minFilter===Ch||E.minFilter===nu||E.minFilter===Zr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Ne[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Ne[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Ne[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,je[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,je[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==nu&&E.minFilter!==Zr||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const ne=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,c.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(L,E){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));const oe=E.source;let xe=y.get(oe);xe===void 0&&(xe={},y.set(oe,xe));const Re=q(E);if(Re!==L.__cacheKey){xe[Re]===void 0&&(xe[Re]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),xe[Re].usedTimes++;const Le=xe[L.__cacheKey];Le!==void 0&&(xe[L.__cacheKey].usedTimes--,Le.usedTimes===0&&k(E)),L.__cacheKey=Re,L.__webglTexture=xe[Re].texture}return ne}function Y(L,E,ne){return Math.floor(Math.floor(L/ne)/E)}function ue(L,E,ne,oe){const Re=L.updateRanges;if(Re.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,ne,oe,E.data);else{Re.sort((tt,ze)=>tt.start-ze.start);let Le=0;for(let tt=1;tt<Re.length;tt++){const ze=Re[Le],Be=Re[tt],Xe=ze.start+ze.count,rt=Y(Be.start,E.width,4),ft=Y(ze.start,E.width,4);Be.start<=Xe+1&&rt===ft&&Y(Be.start+Be.count-1,E.width,4)===rt?ze.count=Math.max(ze.count,Be.start+Be.count-ze.start):(++Le,Re[Le]=Be)}Re.length=Le+1;const ve=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),Ue=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let tt=0,ze=Re.length;tt<ze;tt++){const Be=Re[tt],Xe=Math.floor(Be.start/4),rt=Math.ceil(Be.count/4),ft=Xe%E.width,X=Math.floor(Xe/E.width),De=rt,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ft,X,De,Me,ne,oe,E.data)}L.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ve),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ue)}}function ye(L,E,ne){let oe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=o.TEXTURE_3D);const xe=Ce(L,E),Re=E.source;i.bindTexture(oe,L.__webglTexture,o.TEXTURE0+ne);const Le=s.get(Re);if(Re.version!==Le.__version||xe===!0){if(i.activeTexture(o.TEXTURE0+ne),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Me=Ot.getPrimaries(Ot.workingColorSpace),Oe=E.colorSpace===vr?null:Ot.getPrimaries(E.colorSpace),Ve=E.colorSpace===vr||Me===Oe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Ee=M(E.image,!1,c.maxTextureSize);Ee=sn(E,Ee);const Ue=d.convert(E.format,E.colorSpace),tt=d.convert(E.type);let ze=R(E.internalFormat,Ue,tt,E.normalized,E.colorSpace,E.isVideoTexture);pe(oe,E);let Be;const Xe=E.mipmaps,rt=E.isVideoTexture!==!0,ft=Le.__version===void 0||xe===!0,X=Re.dataReady,De=U(E,Ee);if(E.isDepthTexture)ze=D(E.format===Kr,E.type),ft&&(rt?i.texStorage2D(o.TEXTURE_2D,1,ze,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ue,tt,null));else if(E.isDataTexture)if(Xe.length>0){rt&&ft&&i.texStorage2D(o.TEXTURE_2D,De,ze,Xe[0].width,Xe[0].height);for(let Me=0,Oe=Xe.length;Me<Oe;Me++)Be=Xe[Me],rt?X&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Be.width,Be.height,Ue,tt,Be.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Be.width,Be.height,0,Ue,tt,Be.data);E.generateMipmaps=!1}else rt?(ft&&i.texStorage2D(o.TEXTURE_2D,De,ze,Ee.width,Ee.height),X&&ue(E,Ee,Ue,tt)):i.texImage2D(o.TEXTURE_2D,0,ze,Ee.width,Ee.height,0,Ue,tt,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,ze,Xe[0].width,Xe[0].height,Ee.depth);for(let Me=0,Oe=Xe.length;Me<Oe;Me++)if(Be=Xe[Me],E.format!==Gi)if(Ue!==null)if(rt){if(X)if(E.layerUpdates.size>0){const Ve=a_(Be.width,Be.height,E.format,E.type);for(const Te of E.layerUpdates){const et=Be.data.subarray(Te*Ve/Be.data.BYTES_PER_ELEMENT,(Te+1)*Ve/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,Te,Be.width,Be.height,1,Ue,et)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Be.width,Be.height,Ee.depth,Ue,Be.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Be.width,Be.height,Ee.depth,Ue,tt,Be.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,ze,Be.width,Be.height,Ee.depth,0,Ue,tt,Be.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{rt&&ft&&i.texStorage2D(o.TEXTURE_2D,De,ze,Xe[0].width,Xe[0].height);for(let Me=0,Oe=Xe.length;Me<Oe;Me++)Be=Xe[Me],E.format!==Gi?Ue!==null?rt?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Be.width,Be.height,Ue,Be.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,ze,Be.width,Be.height,0,Be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Be.width,Be.height,Ue,tt,Be.data):i.texImage2D(o.TEXTURE_2D,Me,ze,Be.width,Be.height,0,Ue,tt,Be.data)}else if(E.isDataArrayTexture)if(rt){if(ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,ze,Ee.width,Ee.height,Ee.depth),X)if(E.layerUpdates.size>0){const Me=a_(Ee.width,Ee.height,E.format,E.type);for(const Oe of E.layerUpdates){const Ve=Ee.data.subarray(Oe*Me/Ee.data.BYTES_PER_ELEMENT,(Oe+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Oe,Ee.width,Ee.height,1,Ue,tt,Ve)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,tt,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ee.width,Ee.height,Ee.depth,0,Ue,tt,Ee.data);else if(E.isData3DTexture)rt?(ft&&i.texStorage3D(o.TEXTURE_3D,De,ze,Ee.width,Ee.height,Ee.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,tt,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ee.width,Ee.height,Ee.depth,0,Ue,tt,Ee.data);else if(E.isFramebufferTexture){if(ft)if(rt)i.texStorage2D(o.TEXTURE_2D,De,ze,Ee.width,Ee.height);else{let Me=Ee.width,Oe=Ee.height;for(let Ve=0;Ve<De;Ve++)i.texImage2D(o.TEXTURE_2D,Ve,ze,Me,Oe,0,Ue,tt,null),Me>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),v.add(E),Me.onpaint=Oe=>{const Ve=Oe.changedElements;for(const Te of v)Ve.includes(Te.image)&&(Te.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const Ve=o.RGBA,Te=o.RGBA,et=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Ve,Te,et,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(rt&&ft){const Me=zt(Xe[0]);i.texStorage2D(o.TEXTURE_2D,De,ze,Me.width,Me.height)}for(let Me=0,Oe=Xe.length;Me<Oe;Me++)Be=Xe[Me],rt?X&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ue,tt,Be):i.texImage2D(o.TEXTURE_2D,Me,ze,Ue,tt,Be);E.generateMipmaps=!1}else if(rt){if(ft){const Me=zt(Ee);i.texStorage2D(o.TEXTURE_2D,De,ze,Me.width,Me.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,tt,Ee)}else i.texImage2D(o.TEXTURE_2D,0,ze,Ue,tt,Ee);b(E)&&I(oe),Le.__version=Re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function we(L,E,ne){if(E.image.length!==6)return;const oe=Ce(L,E),xe=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+ne);const Re=s.get(xe);if(xe.version!==Re.__version||oe===!0){i.activeTexture(o.TEXTURE0+ne);const Le=Ot.getPrimaries(Ot.workingColorSpace),ve=E.colorSpace===vr?null:Ot.getPrimaries(E.colorSpace),Ee=E.colorSpace===vr||Le===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let Te=0;Te<6;Te++)!Ue&&!tt?ze[Te]=M(E.image[Te],!0,c.maxCubemapSize):ze[Te]=tt?E.image[Te].image:E.image[Te],ze[Te]=sn(E,ze[Te]);const Be=ze[0],Xe=d.convert(E.format,E.colorSpace),rt=d.convert(E.type),ft=R(E.internalFormat,Xe,rt,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,De=Re.__version===void 0||oe===!0,Me=xe.dataReady;let Oe=U(E,Be);pe(o.TEXTURE_CUBE_MAP,E);let Ve;if(Ue){X&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ft,Be.width,Be.height);for(let Te=0;Te<6;Te++){Ve=ze[Te].mipmaps;for(let et=0;et<Ve.length;et++){const ke=Ve[et];E.format!==Gi?Xe!==null?X?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,ke.width,ke.height,Xe,ke.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,ft,ke.width,ke.height,0,ke.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,ke.width,ke.height,Xe,rt,ke.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,ft,ke.width,ke.height,0,Xe,rt,ke.data)}}}else{if(Ve=E.mipmaps,X&&De){Ve.length>0&&Oe++;const Te=zt(ze[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ft,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(tt){X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ze[Te].width,ze[Te].height,Xe,rt,ze[Te].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ft,ze[Te].width,ze[Te].height,0,Xe,rt,ze[Te].data);for(let et=0;et<Ve.length;et++){const Ut=Ve[et].image[Te].image;X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,Ut.width,Ut.height,Xe,rt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,ft,Ut.width,Ut.height,0,Xe,rt,Ut.data)}}else{X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Xe,rt,ze[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ft,Xe,rt,ze[Te]);for(let et=0;et<Ve.length;et++){const ke=Ve[et];X?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,Xe,rt,ke.image[Te]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,ft,Xe,rt,ke.image[Te])}}}b(E)&&I(o.TEXTURE_CUBE_MAP),Re.__version=xe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ge(L,E,ne,oe,xe,Re){const Le=d.convert(ne.format,ne.colorSpace),ve=d.convert(ne.type),Ee=R(ne.internalFormat,Le,ve,ne.normalized,ne.colorSpace),Ue=s.get(E),tt=s.get(ne);if(tt.__renderTarget=E,!Ue.__hasExternalTextures){const ze=Math.max(1,E.width>>Re),Be=Math.max(1,E.height>>Re);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,Re,Ee,ze,Be,E.depth,0,Le,ve,null):i.texImage2D(xe,Re,Ee,ze,Be,0,Le,ve,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),nn(E)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,oe,xe,tt.__webglTexture,0,Ft(E)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,oe,xe,tt.__webglTexture,Re),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(L,E,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const oe=E.depthTexture,xe=oe&&oe.isDepthTexture?oe.type:null,Re=D(E.stencilBuffer,xe),Le=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;nn(E)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ft(E),Re,E.width,E.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft(E),Re,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Re,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,L)}else{const oe=E.textures;for(let xe=0;xe<oe.length;xe++){const Re=oe[xe],Le=d.convert(Re.format,Re.colorSpace),ve=d.convert(Re.type),Ee=R(Re.internalFormat,Le,ve,Re.normalized,Re.colorSpace);nn(E)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ft(E),Ee,E.width,E.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft(E),Ee,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function st(L,E,ne){const oe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=s.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),oe){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),pe(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=d.convert(E.depthTexture.format),tt=d.convert(E.depthTexture.type);let ze;E.depthTexture.format===Ba?ze=o.DEPTH_COMPONENT24:E.depthTexture.format===Kr&&(ze=o.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,ze,E.width,E.height,0,Ue,tt,null)}}else fe(E.depthTexture,0);const Re=xe.__webglTexture,Le=Ft(E),ve=oe?o.TEXTURE_CUBE_MAP_POSITIVE_X+ne:o.TEXTURE_2D,Ee=E.depthTexture.format===Kr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ba)nn(E)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ve,Re,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ve,Re,0);else if(E.depthTexture.format===Kr)nn(E)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ve,Re,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ve,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(L){const E=s.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const oe=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",xe)};oe.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=oe}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(ne)for(let oe=0;oe<6;oe++)st(E.__webglFramebuffer[oe],L,oe);else{const oe=L.texture.mipmaps;oe&&oe.length>0?st(E.__webglFramebuffer[0],L,0):st(E.__webglFramebuffer,L,0)}else if(ne){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=o.createRenderbuffer(),Ae(E.__webglDepthbuffer[oe],L,!1);else{const xe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[oe];o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,Re)}}else{const oe=L.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ae(E.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,Re)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function gt(L,E,ne){const oe=s.get(L);E!==void 0&&ge(oe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&dt(L)}function _t(L){const E=L.texture,ne=s.get(L),oe=s.get(E);L.addEventListener("dispose",T);const xe=L.textures,Re=L.isWebGLCubeRenderTarget===!0,Le=xe.length>1;if(Le||(oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture()),oe.__version=E.version,f.memory.textures++),Re){ne.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)ne.__webglFramebuffer[ve][Ee]=o.createFramebuffer()}else ne.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)ne.__webglFramebuffer[ve]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Le)for(let ve=0,Ee=xe.length;ve<Ee;ve++){const Ue=s.get(xe[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=o.createTexture(),f.memory.textures++)}if(L.samples>0&&nn(L)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ve=0;ve<xe.length;ve++){const Ee=xe[ve];ne.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const Ue=d.convert(Ee.format,Ee.colorSpace),tt=d.convert(Ee.type),ze=R(Ee.internalFormat,Ue,tt,Ee.normalized,Ee.colorSpace,L.isXRRenderTarget===!0),Be=Ft(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,ze,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,ne.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Ae(ne.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Re){i.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture),pe(o.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)ge(ne.__webglFramebuffer[ve][Ee],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else ge(ne.__webglFramebuffer[ve],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);b(E)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ve=0,Ee=xe.length;ve<Ee;ve++){const Ue=xe[ve],tt=s.get(Ue);let ze=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ze=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,tt.__webglTexture),pe(ze,Ue),ge(ne.__webglFramebuffer,L,Ue,o.COLOR_ATTACHMENT0+ve,ze,0),b(Ue)&&I(ze)}i.unbindTexture()}else{let ve=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ve,oe.__webglTexture),pe(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)ge(ne.__webglFramebuffer[Ee],L,E,o.COLOR_ATTACHMENT0,ve,Ee);else ge(ne.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,ve,0);b(E)&&I(ve),i.unbindTexture()}L.depthBuffer&&dt(L)}function $e(L){const E=L.textures;for(let ne=0,oe=E.length;ne<oe;ne++){const xe=E[ne];if(b(xe)){const Re=V(L),Le=s.get(xe).__webglTexture;i.bindTexture(Re,Le),I(Re),i.unbindTexture()}}}const it=[],It=[];function ln(L){if(L.samples>0){if(nn(L)===!1){const E=L.textures,ne=L.width,oe=L.height;let xe=o.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=s.get(L),ve=E.length>1;if(ve)for(let Ue=0;Ue<E.length;Ue++)i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ee=L.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),ve){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const tt=s.get(E[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,tt,0)}o.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,xe,o.NEAREST),g===!0&&(it.length=0,It.length=0,it.push(o.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(it.push(Re),It.push(Re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,It)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<E.length;Ue++){i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const tt=s.get(E[Ue]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&g){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ft(L){return Math.min(c.maxSamples,L.samples)}function nn(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(L){const E=f.render.frame;S.get(L)!==E&&(S.set(L,E),L.update())}function sn(L,E){const ne=L.colorSpace,oe=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==Iu&&ne!==vr&&(Ot.getTransfer(ne)===Zt?(oe!==Gi||xe!==Ai)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",ne)),E}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=le,this.getTextureUnits=K,this.setTextureUnits=$,this.setTexture2D=fe,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=_e,this.rebindTextures=gt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function zC(o,t){function i(s,c=vr){let d;const f=Ot.getTransfer(c);if(s===Ai)return o.UNSIGNED_BYTE;if(s===Jm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===$m)return o.UNSIGNED_SHORT_5_5_5_1;if(s===J_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===$_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===K_)return o.BYTE;if(s===Q_)return o.SHORT;if(s===wl)return o.UNSIGNED_SHORT;if(s===Qm)return o.INT;if(s===ua)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===da)return o.HALF_FLOAT;if(s===eb)return o.ALPHA;if(s===tb)return o.RGB;if(s===Gi)return o.RGBA;if(s===Ba)return o.DEPTH_COMPONENT;if(s===Kr)return o.DEPTH_STENCIL;if(s===ep)return o.RED;if(s===tp)return o.RED_INTEGER;if(s===$r)return o.RG;if(s===np)return o.RG_INTEGER;if(s===ip)return o.RGBA_INTEGER;if(s===Ru||s===Nu||s===Du||s===Uu)if(f===Zt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(s===Ru)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Du)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(s===Ru)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nu)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Du)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uu)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pm||s===gm||s===xm||s===vm)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(s===pm)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gm)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xm)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vm)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_m||s===bm||s===Sm||s===ym||s===Mm||s===Ou||s===Em)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(s===_m||s===bm)return f===Zt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(s===Sm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC;if(s===ym)return d.COMPRESSED_R11_EAC;if(s===Mm)return d.COMPRESSED_SIGNED_R11_EAC;if(s===Ou)return d.COMPRESSED_RG11_EAC;if(s===Em)return d.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Tm||s===Am||s===wm||s===Cm||s===Rm||s===Nm||s===Dm||s===Um||s===Lm||s===Om||s===Pm||s===Im||s===Bm||s===zm)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(s===Tm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Am)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Um)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Om)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Im)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zm)return f===Zt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fm||s===Hm||s===Gm)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(s===Fm)return f===Zt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hm)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gm)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===km||s===Vm||s===Pu||s===jm)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(s===km)return d.COMPRESSED_RED_RGTC1_EXT;if(s===Vm)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pu)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jm)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const FC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new pb(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new fa({vertexShader:FC,fragmentShader:HC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new ju(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kC extends ts{constructor(t,i){super();const s=this;let c=null,d=1,f=null,m="local-floor",g=1,p=null,S=null,v=null,_=null,y=null,C=null;const N=typeof XRWebGLBinding<"u",M=new GC,b={},I=i.getContextAttributes();let V=null,R=null;const D=[],U=[],P=new Vt;let T=null,O=null;const k=new fi;k.viewport=new hn;const G=new fi;G.viewport=new hn;const ee=[k,G],le=new KE;let K=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=D[Y];return ue===void 0&&(ue=new Bh,D[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=D[Y];return ue===void 0&&(ue=new Bh,D[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=D[Y];return ue===void 0&&(ue=new Bh,D[Y]=ue),ue.getHandSpace()};function j(Y){const ue=U.indexOf(Y.inputSource);if(ue===-1)return;const ye=D[ue];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,p||f),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){c.removeEventListener("select",j),c.removeEventListener("selectstart",j),c.removeEventListener("selectend",j),c.removeEventListener("squeeze",j),c.removeEventListener("squeezestart",j),c.removeEventListener("squeezeend",j),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",fe);for(let Y=0;Y<D.length;Y++){const ue=U[Y];ue!==null&&(U[Y]=null,D[Y].disconnect(ue))}K=null,$=null,M.reset();for(const Y in b)delete b[Y];if(t.setRenderTarget(V),y=null,_=null,v=null,c=null,R=null,Ce.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),O!==null){const Y=O.camera;Y.fov=O.fov,Y.zoom=O.zoom,Y.updateProjectionMatrix(),O=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){d=Y,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){m=Y,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(c,i)),v},this.getFrame=function(){return C},this.getSession=function(){return c},this.setSession=async function(Y){if(c=Y,c!==null){if(V=t.getRenderTarget(),c.addEventListener("select",j),c.addEventListener("selectstart",j),c.addEventListener("selectend",j),c.addEventListener("squeeze",j),c.addEventListener("squeezestart",j),c.addEventListener("squeezeend",j),c.addEventListener("end",q),c.addEventListener("inputsourceschange",fe),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,we=null,ge=null;I.depth&&(ge=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=I.stencil?Kr:Ba,we=I.stencil?Cl:ua);const Ae={colorFormat:i.RGBA8,depthFormat:ge,scaleFactor:d};v=this.getBinding(),_=v.createProjectionLayer(Ae),c.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),R=new ki(_.textureWidth,_.textureHeight,{format:Gi,type:Ai,depthTexture:new Rl(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:d};y=new XRWebGLLayer(c,i,ye),c.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new ki(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(g),p=null,f=await c.requestReferenceSpace(m),Ce.setContext(c),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function fe(Y){for(let ue=0;ue<Y.removed.length;ue++){const ye=Y.removed[ue],we=U.indexOf(ye);we>=0&&(U[we]=null,D[we].disconnect(ye))}for(let ue=0;ue<Y.added.length;ue++){const ye=Y.added[ue];let we=U.indexOf(ye);if(we===-1){for(let Ae=0;Ae<D.length;Ae++)if(Ae>=U.length){U.push(ye),we=Ae;break}else if(U[Ae]===null){U[Ae]=ye,we=Ae;break}if(we===-1)break}const ge=D[we];ge&&ge.connect(ye)}}const te=new me,ce=new me;function _e(Y,ue,ye){te.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const we=te.distanceTo(ce),ge=ue.projectionMatrix.elements,Ae=ye.projectionMatrix.elements,st=ge[14]/(ge[10]-1),dt=ge[14]/(ge[10]+1),gt=(ge[9]+1)/ge[5],_t=(ge[9]-1)/ge[5],$e=(ge[8]-1)/ge[0],it=(Ae[8]+1)/Ae[0],It=st*$e,ln=st*it,Ft=we/(-$e+it),nn=Ft*-$e;if(ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(nn),Y.translateZ(Ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const W=st+Ft,sn=dt+Ft,zt=It-nn,L=ln+(we-nn),E=gt*dt/sn*W,ne=_t*dt/sn*W;Y.projectionMatrix.makePerspective(zt,L,E,ne,W,sn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ne(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(c===null)return;let ue=Y.near,ye=Y.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),le.near=G.near=k.near=ue,le.far=G.far=k.far=ye,(K!==le.near||$!==le.far)&&(c.updateRenderState({depthNear:le.near,depthFar:le.far}),K=le.near,$=le.far),le.layers.mask=Y.layers.mask|6,k.layers.mask=le.layers.mask&-5,G.layers.mask=le.layers.mask&-3;const we=Y.parent,ge=le.cameras;Ne(le,we);for(let Ae=0;Ae<ge.length;Ae++)Ne(ge[Ae],we);ge.length===2?_e(le,k,G):le.projectionMatrix.copy(k.projectionMatrix),O===null&&Y.isPerspectiveCamera&&(O={camera:Y,fov:Y.fov,zoom:Y.zoom}),je(Y,le,we)};function je(Y,ue,ye){ye===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xm*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return le},this.getFoveation=function(){if(!(_===null&&y===null))return g},this.setFoveation=function(Y){g=Y,_!==null&&(_.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(le)},this.getCameraTexture=function(Y){return b[Y]};let z=null;function pe(Y,ue){if(S=ue.getViewerPose(p||f),C=ue,S!==null){const ye=S.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let we=!1;ye.length!==le.cameras.length&&(le.cameras.length=0,we=!0);for(let dt=0;dt<ye.length;dt++){const gt=ye[dt];let _t=null;if(y!==null)_t=y.getViewport(gt);else{const it=v.getViewSubImage(_,gt);_t=it.viewport,dt===0&&(t.setRenderTargetTextures(R,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(R))}let $e=ee[dt];$e===void 0&&($e=new fi,$e.layers.enable(dt),$e.viewport=new hn,ee[dt]=$e),$e.matrix.fromArray(gt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(gt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(_t.x,_t.y,_t.width,_t.height),dt===0&&(le.matrix.copy($e.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale)),we===!0&&le.cameras.push($e)}const ge=c.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&N){v=s.getBinding();const dt=v.getDepthInformation(ye[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,c.renderState)}if(ge&&ge.includes("camera-access")&&N){t.state.unbindTexture(),v=s.getBinding();for(let dt=0;dt<ye.length;dt++){const gt=ye[dt].camera;if(gt){let _t=b[gt];_t||(_t=new pb,b[gt]=_t);const $e=v.getCameraImage(gt);_t.sourceTexture=$e}}}}for(let ye=0;ye<D.length;ye++){const we=U[ye],ge=D[ye];we!==null&&ge!==void 0&&ge.update(we,ue,p||f)}z&&z(Y,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),C=null}const Ce=new _b;Ce.setAnimationLoop(pe),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}}const VC=new rn,Ab=new pt;Ab.set(-1,0,0,0,1,0,0,0,1);function jC(o,t){function i(M,b){M.matrixAutoUpdate===!0&&M.updateMatrix(),b.value.copy(M.matrix)}function s(M,b){b.color.getRGB(M.fogColor.value,gb(o)),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function c(M,b,I,V,R){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?d(M,b):b.isMeshLambertMaterial?(d(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(d(M,b),v(M,b)):b.isMeshPhongMaterial?(d(M,b),S(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(d(M,b),_(M,b),b.isMeshPhysicalMaterial&&y(M,b,R)):b.isMeshMatcapMaterial?(d(M,b),C(M,b)):b.isMeshDepthMaterial?d(M,b):b.isMeshDistanceMaterial?(d(M,b),N(M,b)):b.isMeshNormalMaterial?d(M,b):b.isLineBasicMaterial?(f(M,b),b.isLineDashedMaterial&&m(M,b)):b.isPointsMaterial?g(M,b,I,V):b.isSpriteMaterial?p(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function d(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.bumpMap&&(M.bumpMap.value=b.bumpMap,i(b.bumpMap,M.bumpMapTransform),M.bumpScale.value=b.bumpScale,b.side===$n&&(M.bumpScale.value*=-1)),b.normalMap&&(M.normalMap.value=b.normalMap,i(b.normalMap,M.normalMapTransform),M.normalScale.value.copy(b.normalScale),b.side===$n&&M.normalScale.value.negate()),b.displacementMap&&(M.displacementMap.value=b.displacementMap,i(b.displacementMap,M.displacementMapTransform),M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,M.emissiveMapTransform)),b.specularMap&&(M.specularMap.value=b.specularMap,i(b.specularMap,M.specularMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const I=t.get(b),V=I.envMap,R=I.envMapRotation;V&&(M.envMap.value=V,M.envMapRotation.value.setFromMatrix4(VC.makeRotationFromEuler(R)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Ab),M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap&&(M.lightMap.value=b.lightMap,M.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,M.lightMapTransform)),b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,M.aoMapTransform))}function f(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform))}function m(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function g(M,b,I,V){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*I,M.scale.value=V*.5,b.map&&(M.map.value=b.map,i(b.map,M.uvTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function p(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function S(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function v(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function _(M,b){M.metalness.value=b.metalness,b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,M.metalnessMapTransform)),M.roughness.value=b.roughness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,M.roughnessMapTransform)),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function y(M,b,I){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,M.sheenColorMapTransform)),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,M.sheenRoughnessMapTransform))),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,M.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(M.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===$n&&M.clearcoatNormalScale.value.negate())),b.dispersion>0&&(M.dispersion.value=b.dispersion),b.retroreflectivity>0&&(M.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,M.iridescenceMapTransform)),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,M.transmissionMapTransform)),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(M.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(M.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,M.specularColorMapTransform)),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,M.specularIntensityMapTransform))}function C(M,b){b.matcap&&(M.matcap.value=b.matcap)}function N(M,b){const I=t.get(b).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function XC(o,t,i,s){let c={},d={},f=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(R,D){const U=D.program;s.uniformBlockBinding(R,U)}function p(R,D){let U=c[R.id];U===void 0&&(M(R),U=S(R),c[R.id]=U,R.addEventListener("dispose",I));const P=D.program;s.updateUBOMapping(R,P);const T=t.render.frame;d[R.id]!==T&&(_(R),d[R.id]=T)}function S(R){const D=v();R.__bindingPointIndex=D;const U=o.createBuffer(),P=R.__size,T=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,U),U}function v(){for(let R=0;R<m;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const D=c[R.id],U=R.uniforms,P=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let T=0,O=U.length;T<O;T++){const k=U[T];if(Array.isArray(k))for(let G=0,ee=k.length;G<ee;G++)y(k[G],T,G,P);else y(k,T,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(R,D,U,P){if(N(R,D,U,P)===!0){const T=R.__offset,O=R.value;if(Array.isArray(O)){let k=0;for(let G=0;G<O.length;G++){const ee=O[G],le=b(ee);C(ee,R.__data,k),typeof ee!="number"&&typeof ee!="boolean"&&!ee.isMatrix3&&!ArrayBuffer.isView(ee)&&(k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(O,R.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,R.__data)}}function C(R,D,U){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,U)}function N(R,D,U,P){const T=R.value,O=D+"_"+U;if(P[O]===void 0)return typeof T=="number"||typeof T=="boolean"?P[O]=T:ArrayBuffer.isView(T)?P[O]=T.slice():P[O]=T.clone(),!0;{const k=P[O];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return P[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function M(R){const D=R.uniforms;let U=0;const P=16;for(let O=0,k=D.length;O<k;O++){const G=Array.isArray(D[O])?D[O]:[D[O]];for(let ee=0,le=G.length;ee<le;ee++){const K=G[ee],$=Array.isArray(K.value)?K.value:[K.value];for(let j=0,q=$.length;j<q;j++){const fe=$[j],te=b(fe),ce=U%P,_e=ce%te.boundary,Ne=ce+_e;U+=_e,Ne!==0&&P-Ne<te.storage&&(U+=P-Ne),K.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=te.storage}}}const T=U%P;return T>0&&(U+=P-T),R.__size=U,R.__cache={},this}function b(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",R),D}function I(R){const D=R.target;D.removeEventListener("dispose",I);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),o.deleteBuffer(c[D.id]),delete c[D.id],delete d[D.id]}function V(){for(const R in c)o.deleteBuffer(c[R]);f=[],c={},d={}}return{bind:g,update:p,dispose:V}}const WC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function qC(){return ra===null&&(ra=new ub(WC,16,16,$r,da),ra.name="DFG_LUT",ra.minFilter=zn,ra.magFilter=zn,ra.wrapS=Oa,ra.wrapT=Oa,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class wb{constructor(t={}){const{canvas:i=mE(),context:s=null,depth:c=!0,stencil:d=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Ai}=t;this.isWebGLRenderer=!0;let C;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=s.getContextAttributes().alpha}else C=f;const N=y,M=new Set([ip,np,tp]),b=new Set([Ai,ua,wl,Cl,Jm,$m]),I=new Uint32Array(4),V=new Int32Array(4),R=new me;let D=null,U=null;const P=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,ee=null,le=null,K=null,$=null;this._outputColorSpace=Ti;let j=0,q=0,fe=null,te=-1,ce=null;const _e=new hn,Ne=new hn;let je=null;const z=new nt(0);let pe=0,Ce=i.width,Y=i.height,ue=1,ye=null,we=null;const ge=new hn(0,0,Ce,Y),Ae=new hn(0,0,Ce,Y);let st=!1;const dt=new fb;let gt=!1,_t=!1;const $e=new rn,it=new me,It=new hn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function nn(){return fe===null?ue:1}let W=s;function sn(A,F){return i.getContext(A,F)}let zt,L,E,ne,oe,xe,Re,Le,ve,Ee,Ue,tt,ze,Be,Xe,rt,ft,X,De,Me,Oe,Ve,Te;try{const A={alpha:!0,depth:c,stencil:d,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Km}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",ht,!1),i.addEventListener("webglcontextcreationerror",ei,!1),W===null){const F="webgl2";if(W=sn(F,A),W===null)throw sn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(A){throw i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),Ht("WebGLRenderer: "+A.message),A}function et(){zt=new qA(W),zt.init(),Oe=new zC(W,zt),L=new BA(W,zt,t,Oe),E=new IC(W,zt),L.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),le=W.createFramebuffer(),K=W.createFramebuffer(),$=W.createFramebuffer(),ne=new KA(W),oe=new yC,xe=new BC(W,zt,E,oe,L,Oe,ne),Re=new WA(k),Le=new JE(W),Ve=new PA(W,Le),ve=new YA(W,Le,ne,Ve),Ee=new JA(W,ve,Le,Ve,ne),X=new QA(W,L,xe),Xe=new zA(oe),Ue=new SC(k,Re,zt,L,Ve,Xe),tt=new jC(k,oe),ze=new EC,Be=new NC(zt),ft=new OA(k,Re,E,Ee,C,g),rt=new PC(k,Ee,L),Te=new XC(W,ne,L,E),De=new IA(W,zt,ne),Me=new ZA(W,zt,ne),ne.programs=Ue.programs,k.capabilities=L,k.extensions=zt,k.properties=oe,k.renderLists=ze,k.shadowMap=rt,k.state=E,k.info=ne}N!==Ai&&(O=new ew(N,i.width,i.height,m,c,d));const ke=new kC(k,W);this.xr=ke,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(Ce,Y,!1))},this.getSize=function(A){return A.set(Ce,Y)},this.setSize=function(A,F,he=!0){if(ke.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=A,Y=F,i.width=Math.floor(A*ue),i.height=Math.floor(F*ue),he===!0&&(i.style.width=A+"px",i.style.height=F+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Ce*ue,Y*ue).floor()},this.setDrawingBufferSize=function(A,F,he){Ce=A,Y=F,ue=he,i.width=Math.floor(A*he),i.height=Math.floor(F*he),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(N===Ai){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(_e)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,F,he,ae){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,F,he,ae),E.viewport(_e.copy(ge).multiplyScalar(ue).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,F,he,ae){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,F,he,ae),E.scissor(Ne.copy(Ae).multiplyScalar(ue).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){E.setScissorTest(st=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){we=A},this.getClearColor=function(A){return A.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,he=!0){let ae=0;if(A){let re=!1;if(fe!==null){const Fe=fe.texture.format;re=M.has(Fe)}if(re){const Fe=fe.texture.type,qe=b.has(Fe),Pe=ft.getClearColor(),Ke=ft.getClearAlpha(),Qe=Pe.r,lt=Pe.g,mt=Pe.b;qe?(I[0]=Qe,I[1]=lt,I[2]=mt,I[3]=Ke,W.clearBufferuiv(W.COLOR,0,I)):(V[0]=Qe,V[1]=lt,V[2]=mt,V[3]=Ke,W.clearBufferiv(W.COLOR,0,V))}else ae|=W.COLOR_BUFFER_BIT}F&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),ee=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),ft.dispose(),ze.dispose(),Be.dispose(),oe.dispose(),Re.dispose(),Ee.dispose(),Ve.dispose(),Te.dispose(),Ue.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",yr),ke.removeEventListener("sessionend",Fa),ji.stop()};function Ut(A){A.preventDefault(),Ov("WebGLRenderer: Context Lost."),G=!0}function ht(){Ov("WebGLRenderer: Context Restored."),G=!1;const A=ne.autoReset,F=rt.enabled,he=rt.autoUpdate,ae=rt.needsUpdate,re=rt.type;et(),ne.autoReset=A,rt.enabled=F,rt.autoUpdate=he,rt.needsUpdate=ae,rt.type=re}function ei(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hi(A){const F=A.target;F.removeEventListener("dispose",hi),Yu(F)}function Yu(A){is(A),oe.remove(A)}function is(A){const F=oe.get(A).programs;F!==void 0&&(F.forEach(function(he){Ue.releaseProgram(he)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,he,ae,re,Fe){F===null&&(F=ln);const qe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Pe=So(A,F,he,ae,re);E.setMaterial(ae,qe);let Ke=he.index,Qe=1;if(ae.wireframe===!0){if(Ke=ve.getWireframeAttribute(he),Ke===void 0)return;Qe=2}const lt=he.drawRange,mt=he.attributes.position;let Ye=lt.start*Qe,At=(lt.start+lt.count)*Qe;Fe!==null&&(Ye=Math.max(Ye,Fe.start*Qe),At=Math.min(At,(Fe.start+Fe.count)*Qe)),Ke!==null?(Ye=Math.max(Ye,0),At=Math.min(At,Ke.count)):mt!=null&&(Ye=Math.max(Ye,0),At=Math.min(At,mt.count));const Mt=At-Ye;if(Mt<0||Mt===1/0)return;Ve.setup(re,ae,Pe,he,Ke);let Kt,jt=De;if(Ke!==null&&(Kt=Le.get(Ke),jt=Me,jt.setIndex(Kt)),re.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*nn()),jt.setMode(W.LINES)):jt.setMode(W.TRIANGLES);else if(re.isLine){let bn=ae.linewidth;bn===void 0&&(bn=1),E.setLineWidth(bn*nn()),re.isLineSegments?jt.setMode(W.LINES):re.isLineLoop?jt.setMode(W.LINE_LOOP):jt.setMode(W.LINE_STRIP)}else re.isPoints?jt.setMode(W.POINTS):re.isSprite&&jt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))jt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const bn=re._multiDrawStarts,He=re._multiDrawCounts,cn=re._multiDrawCount,Lt=Ke?Le.get(Ke).bytesPerElement:1,Hn=oe.get(ae).currentProgram.getUniforms();for(let ti=0;ti<cn;ti++)Hn.setValue(W,"_gl_DrawID",ti),jt.render(bn[ti]/Lt,He[ti])}else if(re.isInstancedMesh)jt.renderInstances(Ye,Mt,re.count);else if(he.isInstancedBufferGeometry){const bn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,He=Math.min(he.instanceCount,bn);jt.renderInstances(Ye,Mt,He)}else jt.render(Ye,Mt)};function Sr(A,F,he,ae){ee!==null&&A.isNodeMaterial&&ee.setObject(ae,A),gt===!0&&Xe.setState(A,he,!1),A.transparent===!0&&A.side===La&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,Mr(A,F,ae),A.side=Qr,A.needsUpdate=!0,Mr(A,F,ae),A.side=La):Mr(A,F,ae)}this.compile=function(A,F,he=null){he===null&&(he=A),ee!==null&&ee.renderStart(A,F,he),U=Be.get(he),U.init(F),T.push(U),he.traverseVisible(function(re){re.isLight&&re.layers.test(F.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),A!==he&&A.traverseVisible(function(re){re.isLight&&re.layers.test(F.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights(),ee!==null&&ee.updateLights(U.state.lightsArray),_t=this.localClippingEnabled,gt=Xe.init(this.clippingPlanes,_t),gt===!0&&Xe.setGlobalState(this.clippingPlanes,F),ee!==null&&rt.render(U.state.shadowsArray,he,F);const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){const Pe=Fe[qe];Sr(Pe,he,F,re),ae.add(Pe)}else Sr(Fe,he,F,re),ae.add(Fe)}),U=T.pop(),ee!==null&&ee.renderEnd(),ae},this.compileAsync=function(A,F,he=null){const ae=this.compile(A,F,he);return new Promise(re=>{function Fe(){if(ae.forEach(function(qe){const Ke=oe.get(qe).currentProgram;(Ke===void 0||Ke.isReady())&&ae.delete(qe)}),ae.size===0){re(A);return}setTimeout(Fe,10)}zt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let za=null;function ha(A){za&&za(A)}function yr(){ji.stop()}function Fa(){ji.start()}const ji=new _b;ji.setAnimationLoop(ha),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(A){za=A,ke.setAnimationLoop(A),A===null?ji.stop():ji.start()},ke.addEventListener("sessionstart",yr),ke.addEventListener("sessionend",Fa),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;ee!==null&&ee.renderStart(A,F);const he=ke.enabled===!0&&ke.isPresenting===!0,ae=O!==null&&(fe===null||he)&&O.begin(k,fe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(F),F=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,F,fe),U=Be.get(A,T.length),U.init(F),U.state.textureUnits=xe.getTextureUnits(),T.push(U),$e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),dt.setFromProjectionMatrix($e,oa,F.reversedDepth),_t=this.localClippingEnabled,gt=Xe.init(this.clippingPlanes,_t),D=ze.get(A,P.length),D.init(),P.push(D),ke.enabled===!0&&ke.isPresenting===!0){const qe=k.xr.getDepthSensingMesh();qe!==null&&go(qe,F,-1/0,k.sortObjects)}go(A,F,0,k.sortObjects),D.finish(),ee!==null&&ee.updateLights(U.state.lightsArray),k.sortObjects===!0&&D.sort(ye,we),Ft=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ft&&ft.addToRenderList(D,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&Xe.beginShadows();const re=U.state.shadowsArray;if(rt.render(re,A,F),gt===!0&&Xe.endShadows(),(ae&&O.hasRenderPass())===!1){const qe=D.opaque,Pe=D.transmissive;if(U.setupLights(),F.isArrayCamera){const Ke=F.cameras;if(Pe.length>0)for(let Qe=0,lt=Ke.length;Qe<lt;Qe++){const mt=Ke[Qe];as(qe,Pe,A,mt)}Ft&&ft.render(A);for(let Qe=0,lt=Ke.length;Qe<lt;Qe++){const mt=Ke[Qe];xo(D,A,mt,mt.viewport)}}else Pe.length>0&&as(qe,Pe,A,F),Ft&&ft.render(A),xo(D,A,F)}fe!==null&&q===0&&(xe.updateMultisampleRenderTarget(fe),xe.updateRenderTargetMipmap(fe)),ae&&O.end(k),A.isScene===!0&&A.onAfterRender(k,A,F),Ve.resetDefaultState(),te=-1,ce=null,T.pop(),T.length>0?(U=T[T.length-1],xe.setTextureUnits(U.state.textureUnits),gt===!0&&Xe.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?D=P[P.length-1]:D=null,ee!==null&&ee.renderEnd()};function go(A,F,he,ae){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)he=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(dt)){ae&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4($e);const qe=Ee.update(A),Pe=A.material;Pe.visible&&D.push(A,qe,Pe,he,It.z,null,F)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(dt))){const qe=Ee.update(A),Pe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),It.copy(qe.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4($e)),Array.isArray(Pe)){const Ke=qe.groups;for(let Qe=0,lt=Ke.length;Qe<lt;Qe++){const mt=Ke[Qe],Ye=Pe[mt.materialIndex];Ye&&Ye.visible&&D.push(A,qe,Ye,he,It.z,mt,F)}}else Pe.visible&&D.push(A,qe,Pe,he,It.z,null,F)}}const Fe=A.children;for(let qe=0,Pe=Fe.length;qe<Pe;qe++)go(Fe[qe],F,he,ae)}function xo(A,F,he,ae){const{opaque:re,transmissive:Fe,transparent:qe}=A;U.setupLightsView(he),gt===!0&&Xe.setGlobalState(k.clippingPlanes,he),ae&&E.viewport(_e.copy(ae)),re.length>0&&Xi(re,F,he),Fe.length>0&&Xi(Fe,F,he),qe.length>0&&Xi(qe,F,he),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function as(A,F,he,ae){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const Ye=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new ki(1,1,{generateMipmaps:!0,type:Ye?da:Ai,minFilter:Zr,samples:Math.max(4,L.samples),stencilBuffer:d,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Fe=U.state.transmissionRenderTarget[ae.id],qe=ae.viewport||_e;Fe.setSize(qe.z*k.transmissionResolutionScale,qe.w*k.transmissionResolutionScale);const Pe=k.getRenderTarget(),Ke=k.getActiveCubeFace(),Qe=k.getActiveMipmapLevel();k.setRenderTarget(Fe),k.getClearColor(z),pe=k.getClearAlpha(),pe<1&&k.setClearColor(16777215,.5),k.clear(),Ft&&ft.render(he);const lt=k.toneMapping;k.toneMapping=la;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),gt===!0&&Xe.setGlobalState(k.clippingPlanes,ae),Xi(A,he,ae),xe.updateMultisampleRenderTarget(Fe),xe.updateRenderTargetMipmap(Fe),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let At=0,Mt=F.length;At<Mt;At++){const Kt=F[At],{object:jt,geometry:bn,material:He,group:cn}=Kt;if(He.side===La&&jt.layers.test(ae.layers)){const Lt=He.side;He.side=$n,He.needsUpdate=!0,Ol(jt,he,ae,bn,He,cn),He.side=Lt,He.needsUpdate=!0,Ye=!0}}Ye===!0&&(xe.updateMultisampleRenderTarget(Fe),xe.updateRenderTargetMipmap(Fe))}k.setRenderTarget(Pe,Ke,Qe),k.setClearColor(z,pe),mt!==void 0&&(ae.viewport=mt),k.toneMapping=lt}function Xi(A,F,he){const ae=F.isScene===!0?F.overrideMaterial:null;for(let re=0,Fe=A.length;re<Fe;re++){const qe=A[re],{object:Pe,geometry:Ke,group:Qe}=qe;let lt=qe.material;lt.allowOverride===!0&&ae!==null&&(lt=ae),Pe.layers.test(he.layers)&&Ol(Pe,F,he,Ke,lt,Qe)}}function Ol(A,F,he,ae,re,Fe){ee!==null&&re.isNodeMaterial&&ee.setObject(A,re),A.onBeforeRender(k,F,he,ae,re,Fe),A.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(k,F,he,ae,A,Fe),re.transparent===!0&&re.side===La&&re.forceSinglePass===!1?(re.side=$n,re.needsUpdate=!0,k.renderBufferDirect(he,F,ae,re,A,Fe),re.side=Qr,re.needsUpdate=!0,k.renderBufferDirect(he,F,ae,re,A,Fe),re.side=La):k.renderBufferDirect(he,F,ae,re,A,Fe),A.onAfterRender(k,F,he,ae,re,Fe)}function Mr(A,F,he){F.isScene!==!0&&(F=ln);const ae=oe.get(A),re=U.state.lights,Fe=U.state.shadowsArray,qe=re.state.version,Pe=Ue.getParameters(A,re.state,Fe,F,he,U.state.lightProbeGridArray),Ke=Ue.getProgramCacheKey(Pe);let Qe=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,ae.fog=F.fog;const lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Re.get(A.envMap||ae.environment,lt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",hi),Qe=new Map,ae.programs=Qe);let mt=Qe.get(Ke);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===qe)return _o(A,Pe),mt}else Pe.uniforms=Ue.getUniforms(A),ee!==null&&A.isNodeMaterial&&ee.build(A,he,Pe),A.onBeforeCompile(Pe,k),mt=Ue.acquireProgram(Pe,Ke),Qe.set(Ke,mt),ae.uniforms=Pe.uniforms;const Ye=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Xe.uniform),_o(A,Pe),ae.needsLights=Il(A),ae.lightsStateVersion=qe,ae.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=U.state.lightProbeGridArray.length>0,ae.currentProgram=mt,ae.uniformsList=null,mt}function vo(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Lu.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function _o(A,F){const he=oe.get(A);he.outputColorSpace=F.outputColorSpace,he.batching=F.batching,he.batchingColor=F.batchingColor,he.instancing=F.instancing,he.instancingColor=F.instancingColor,he.instancingMorph=F.instancingMorph,he.skinning=F.skinning,he.morphTargets=F.morphTargets,he.morphNormals=F.morphNormals,he.morphColors=F.morphColors,he.morphTargetsCount=F.morphTargetsCount,he.numClippingPlanes=F.numClippingPlanes,he.numIntersection=F.numClipIntersection,he.vertexAlphas=F.vertexAlphas,he.vertexTangents=F.vertexTangents,he.toneMapping=F.toneMapping}function bo(A,F){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(F.matrixWorld);for(let he=0,ae=A.length;he<ae;he++){const re=A[he];if(re.texture!==null&&re.boundingBox.containsPoint(R))return re}return null}function So(A,F,he,ae,re){F.isScene!==!0&&(F=ln),xe.resetTextureUnits();const Fe=F.fog,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?F.environment:null,Pe=fe===null?k.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ot.workingColorSpace,Ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Qe=Re.get(ae.envMap||qe,Ke),lt=ae.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,mt=!!he.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!he.morphAttributes.position,At=!!he.morphAttributes.normal,Mt=!!he.morphAttributes.color;let Kt=la;ae.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const jt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,bn=jt!==void 0?jt.length:0,He=oe.get(ae),cn=U.state.lights;if(gt===!0&&(_t===!0||A!==ce)){const Rt=A===ce&&ae.id===te;Xe.setState(ae,A,Rt)}let Lt=!1;ae.version===He.__version?(He.needsLights&&He.lightsStateVersion!==cn.state.version||He.outputColorSpace!==Pe||re.isBatchedMesh&&He.batching===!1||!re.isBatchedMesh&&He.batching===!0||re.isBatchedMesh&&He.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&He.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&He.instancing===!1||!re.isInstancedMesh&&He.instancing===!0||re.isSkinnedMesh&&He.skinning===!1||!re.isSkinnedMesh&&He.skinning===!0||re.isInstancedMesh&&He.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&He.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&He.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&He.instancingMorph===!1&&re.morphTexture!==null||He.envMap!==Qe||ae.fog===!0&&He.fog!==Fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Xe.numPlanes||He.numIntersection!==Xe.numIntersection)||He.vertexAlphas!==lt||He.vertexTangents!==mt||He.morphTargets!==Ye||He.morphNormals!==At||He.morphColors!==Mt||He.toneMapping!==Kt||He.morphTargetsCount!==bn||!!He.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,He.__version=ae.version);let Hn=He.currentProgram;Lt===!0&&(Hn=Mr(ae,F,re),ee&&ae.isNodeMaterial&&ee.onUpdateProgram(ae,Hn,He));let ti=!1,Wi=!1,Et=!1;const Gt=Hn.getUniforms(),$t=He.uniforms;if(E.useProgram(Hn.program)&&(ti=!0,Wi=!0,Et=!0),ae.id!==te&&(te=ae.id,Wi=!0),He.needsLights){const Rt=bo(U.state.lightProbeGridArray,re);He.lightProbeGrid!==Rt&&(He.lightProbeGrid=Rt,Wi=!0)}if(ti||ce!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(W,"projectionMatrix",A.projectionMatrix),Gt.setValue(W,"viewMatrix",A.matrixWorldInverse);const un=Gt.map.cameraPosition;un!==void 0&&un.setValue(W,it.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Gt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Gt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,Wi=!0,Et=!0)}if(He.needsLights&&(cn.state.sunShadowMap.length>0&&Gt.setValue(W,"sunShadowMap",cn.state.sunShadowMap,xe),cn.state.directionalShadowMap.length>0&&Gt.setValue(W,"directionalShadowMap",cn.state.directionalShadowMap,xe),cn.state.spotShadowMap.length>0&&Gt.setValue(W,"spotShadowMap",cn.state.spotShadowMap,xe),cn.state.pointShadowMap.length>0&&Gt.setValue(W,"pointShadowMap",cn.state.pointShadowMap,xe)),re.isSkinnedMesh){Gt.setOptional(W,re,"bindMatrix"),Gt.setOptional(W,re,"bindMatrixInverse");const Rt=re.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Gt.setValue(W,"boneTexture",Rt.boneTexture,xe))}re.isBatchedMesh&&(Gt.setOptional(W,re,"batchingTexture"),Gt.setValue(W,"batchingTexture",re._matricesTexture,xe),Gt.setOptional(W,re,"batchingIdTexture"),Gt.setValue(W,"batchingIdTexture",re._indirectTexture,xe),Gt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Gt.setValue(W,"batchingColorTexture",re._colorsTexture,xe));const ni=he.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&X.update(re,he,Hn),(Wi||He.receiveShadow!==re.receiveShadow)&&(He.receiveShadow=re.receiveShadow,Gt.setValue(W,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&F.environment!==null&&($t.envMapIntensity.value=F.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=qC()),Wi){if(Gt.setValue(W,"toneMappingExposure",k.toneMappingExposure),He.needsLights&&Pl($t,Et),Fe&&ae.fog===!0&&tt.refreshFogUniforms($t,Fe),tt.refreshMaterialUniforms($t,ae,ue,Y,U.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Rt=He.lightProbeGrid;$t.probesSH.value=Rt.texture,$t.probesMin.value.copy(Rt.boundingBox.min),$t.probesMax.value.copy(Rt.boundingBox.max),$t.probesResolution.value.copy(Rt.resolution)}Lu.upload(W,vo(He),$t,xe)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Lu.upload(W,vo(He),$t,xe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Gt.setValue(W,"center",re.center),Gt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Gt.setValue(W,"normalMatrix",re.normalMatrix),Gt.setValue(W,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Rt=ae.uniformsGroups;for(let un=0,ma=Rt.length;un<ma;un++){const Bl=Rt[un];Te.update(Bl,Hn),Te.bind(Bl,Hn)}}return Hn}function Pl(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Il(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(A,F,he){const ae=oe.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=F,oe.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:he,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const he=oe.get(A);he.__webglFramebuffer=F,he.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,he=0){fe=A,j=F,q=he;let ae=null,re=!1,Fe=!1;if(A){const Pe=oe.get(A);if(Pe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Pe.__webglFramebuffer),_e.copy(A.viewport),Ne.copy(A.scissor),je=A.scissorTest,E.viewport(_e),E.scissor(Ne),E.setScissorTest(je),te=-1;return}else if(Pe.__webglFramebuffer===void 0)xe.setupRenderTarget(A);else if(Pe.__hasExternalTextures)xe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const lt=A.depthTexture;if(Pe.__boundDepthTexture!==lt){if(lt!==null&&oe.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Fe=!0);const Qe=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[F])?ae=Qe[F][he]:ae=Qe[F],re=!0):A.samples>0&&xe.useMultisampledRTT(A)===!1?ae=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ae=Qe[he]:ae=Qe,_e.copy(A.viewport),Ne.copy(A.scissor),je=A.scissorTest}else _e.copy(ge).multiplyScalar(ue).floor(),Ne.copy(Ae).multiplyScalar(ue).floor(),je=st;if(he!==0&&(ae=le),E.bindFramebuffer(W.FRAMEBUFFER,ae)&&E.drawBuffers(A,ae),E.viewport(_e),E.scissor(Ne),E.setScissorTest(je),re){const Pe=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pe.__webglTexture,he)}else if(Fe){const Pe=F;for(let Ke=0;Ke<A.textures.length;Ke++){const Qe=oe.get(A.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,Qe.__webglTexture,he,Pe)}}else if(A!==null&&he!==0){const Pe=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pe.__webglTexture,he)}te=-1};function mi(A){const F=oe.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=L.textureFormatReadable(A.format),F.__typeReadable=L.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,he,ae,re,Fe,qe,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){E.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const Qe=A.textures[Pe],lt=Qe.format,mt=Qe.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pe);const Ye=mi(Qe);if(Ye.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-ae&&he>=0&&he<=A.height-re&&W.readPixels(F,he,ae,re,Oe.convert(lt),Oe.convert(mt),Fe)}finally{const Qe=fe!==null?oe.get(fe).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,F,he,ae,re,Fe,qe,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke)if(F>=0&&F<=A.width-ae&&he>=0&&he<=A.height-re){E.bindFramebuffer(W.FRAMEBUFFER,Ke);const Qe=A.textures[Pe],lt=Qe.format,mt=Qe.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pe);const Ye=mi(Qe);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,At),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),W.readPixels(F,he,ae,re,Oe.convert(lt),Oe.convert(mt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Mt=fe!==null?oe.get(fe).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Mt);const Kt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await pE(W,Kt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,At),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(At),W.deleteSync(Kt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,he=0){const ae=Math.pow(2,-he),re=Math.floor(A.image.width*ae),Fe=Math.floor(A.image.height*ae),qe=F!==null?F.x:0,Pe=F!==null?F.y:0;xe.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,he,0,0,qe,Pe,re,Fe),E.unbindTexture()},this.copyTextureToTexture=function(A,F,he=null,ae=null,re=0,Fe=0){let qe,Pe,Ke,Qe,lt,mt,Ye,At,Mt;const Kt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(he!==null)qe=he.max.x-he.min.x,Pe=he.max.y-he.min.y,Ke=he.isBox3?he.max.z-he.min.z:1,Qe=he.min.x,lt=he.min.y,mt=he.isBox3?he.min.z:0;else{const $t=Math.pow(2,-re);qe=Math.floor(Kt.width*$t),Pe=Math.floor(Kt.height*$t),A.isDataArrayTexture?Ke=Kt.depth:A.isData3DTexture?Ke=Math.floor(Kt.depth*$t):Ke=1,Qe=0,lt=0,mt=0}ae!==null?(Ye=ae.x,At=ae.y,Mt=ae.z):(Ye=0,At=0,Mt=0);const jt=Oe.convert(F.format),bn=Oe.convert(F.type);let He;F.isData3DTexture?(xe.setTexture3D(F,0),He=W.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(xe.setTexture2DArray(F,0),He=W.TEXTURE_2D_ARRAY):(xe.setTexture2D(F,0),He=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,F.unpackAlignment);const cn=E.getParameter(W.UNPACK_ROW_LENGTH),Lt=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(W.UNPACK_SKIP_PIXELS),ti=E.getParameter(W.UNPACK_SKIP_ROWS),Wi=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Qe),E.pixelStorei(W.UNPACK_SKIP_ROWS,lt),E.pixelStorei(W.UNPACK_SKIP_IMAGES,mt);const Et=A.isDataArrayTexture||A.isData3DTexture,Gt=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const $t=oe.get(A),ni=oe.get(F),Rt=oe.get($t.__renderTarget),un=oe.get(ni.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Rt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let ma=0;ma<Ke;ma++)Et&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,re,mt+ma),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,Fe,Mt+ma)),W.blitFramebuffer(Qe,lt,qe,Pe,Ye,At,qe,Pe,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||oe.has(A)){const $t=oe.get(A),ni=oe.get(F);E.bindFramebuffer(W.READ_FRAMEBUFFER,K),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,$);for(let Rt=0;Rt<Ke;Rt++)Et?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$t.__webglTexture,re,mt+Rt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,$t.__webglTexture,re),Gt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ni.__webglTexture,Fe,Mt+Rt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ni.__webglTexture,Fe),re!==0?W.blitFramebuffer(Qe,lt,qe,Pe,Ye,At,qe,Pe,W.COLOR_BUFFER_BIT,W.NEAREST):Gt?W.copyTexSubImage3D(He,Fe,Ye,At,Mt+Rt,Qe,lt,qe,Pe):W.copyTexSubImage2D(He,Fe,Ye,At,Qe,lt,qe,Pe);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(He,Fe,Ye,At,Mt,qe,Pe,Ke,jt,bn,Kt.data):F.isCompressedArrayTexture?W.compressedTexSubImage3D(He,Fe,Ye,At,Mt,qe,Pe,Ke,jt,Kt.data):W.texSubImage3D(He,Fe,Ye,At,Mt,qe,Pe,Ke,jt,bn,Kt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,Ye,At,qe,Pe,jt,bn,Kt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,Ye,At,Kt.width,Kt.height,jt,Kt.data):W.texSubImage2D(W.TEXTURE_2D,Fe,Ye,At,qe,Pe,jt,bn,Kt);E.pixelStorei(W.UNPACK_ROW_LENGTH,cn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Lt),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(W.UNPACK_SKIP_ROWS,ti),E.pixelStorei(W.UNPACK_SKIP_IMAGES,Wi),Fe===0&&F.generateMipmaps&&W.generateMipmap(He),E.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){j=0,q=0,fe=null,E.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const YC=({className:o=""})=>{const t=bt.useRef(null),[i,s]=bt.useState(!1),[c,d]=bt.useState("antigravity"),[f,m]=bt.useState(.38),[g,p]=bt.useState("slow"),[S,v]=bt.useState(!1),_=bt.useRef(!1);_.current=i;const y=bt.useRef(c);y.current=c;const C=bt.useRef(f);C.current=f;const N=bt.useRef(g);return N.current=g,bt.useEffect(()=>{const M=t.current;if(!M)return;let b;try{b=new wb({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{return}const I=new sb,V=new fi(50,1,.1,1e3);V.position.set(0,0,50),V.lookAt(0,0,0),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.setClearColor(16777215,0),b.domElement.style.position="absolute",b.domElement.style.top="0",b.domElement.style.left="0",b.domElement.style.width="100%",b.domElement.style.height="100%",b.domElement.style.display="block",b.domElement.style.pointerEvents="none",M.appendChild(b.domElement);const R=380,D=[new nt("#E85A4F"),new nt("#EA4335"),new nt("#FB7185"),new nt("#F43F5E"),new nt("#E11D48")],U=[new nt("#1A73E8"),new nt("#2563EB"),new nt("#38BDF8"),new nt("#0284C7"),new nt("#3B82F6")],P=[new nt("#1E293B"),new nt("#334155"),new nt("#0F172A")],T=[],O=new Xu(.18,12,12),k=new Vu({transparent:!0,opacity:C.current,depthWrite:!1}),G=new db(O,k,R);G.instanceMatrix.setUsage(fE),I.add(G);const ee=new Fn;for(let ye=0;ye<R;ye++){const we=Math.random()*Math.PI*2,ge=6+Math.random()*7,Ae=26+Math.random()*22,st=ge+Math.pow(Math.random(),.72)*(Ae-ge),dt=(Math.random()-.5)*18,gt=we>.25*Math.PI&&we<.85*Math.PI,_t=we>.15*Math.PI&&we<.95*Math.PI;let $e,it=0;Math.random()<.12?($e=P[Math.floor(Math.random()*P.length)].clone(),it=2):gt||_t&&Math.random()>.3?($e=D[Math.floor(Math.random()*D.length)].clone(),it=0):($e=U[Math.floor(Math.random()*U.length)].clone(),it=1);const ln=.35+Math.random()*1.1;T.push({r:st,maxR:Ae,minR:ge,angle:we,angularSpeed:(Math.random()-.5)*6e-4,radialSpeed:.005+Math.random()*.007,z:dt,ballRadius:ln,colorIndex:it,baseColor:$e}),G.setColorAt(ye,$e)}G.instanceColor&&(G.instanceColor.needsUpdate=!0);const le=50,K=new Ri,$=new Float32Array(le*3),j=new Float32Array(le*3);for(let ye=0;ye<le;ye++){$[ye*3]=(Math.random()-.5)*90,$[ye*3+1]=(Math.random()-.5)*60,$[ye*3+2]=(Math.random()-.5)*25;const we=Math.random()>.5?new nt("#94A3B8"):new nt("#CBD5E1");j[ye*3]=we.r,j[ye*3+1]=we.g,j[ye*3+2]=we.b}K.setAttribute("position",new wi($,3)),K.setAttribute("color",new wi(j,3));const q=new hb({size:.25,vertexColors:!0,transparent:!0,opacity:.35}),fe=new HE(K,q);I.add(fe);let te=0,ce=0,_e=0,Ne=0;const je=()=>{if(!M)return;const ye=M.clientWidth||window.innerWidth,we=M.clientHeight||550;V.aspect=ye/we,V.updateProjectionMatrix(),b.setSize(ye,we,!1)};je();const z=new ResizeObserver(()=>je());z.observe(M);const pe=ye=>{const we=M.getBoundingClientRect(),ge=(ye.clientX-we.left)/we.width*2-1,Ae=-((ye.clientY-we.top)/we.height*2-1);te=ge,ce=Ae};window.addEventListener("mousemove",pe,{passive:!0});let Ce,Y=c;const ue=()=>{Ce=requestAnimationFrame(ue);const ye=y.current,we=!_.current;if(k.opacity=C.current,ye!==Y){Y=ye;for(let Ae=0;Ae<R;Ae++){const st=T[Ae];ye==="terracotta"?G.setColorAt(Ae,st.colorIndex===2?P[0]:D[Ae%D.length]):ye==="cobalt"?G.setColorAt(Ae,st.colorIndex===2?P[0]:U[Ae%U.length]):G.setColorAt(Ae,st.baseColor)}G.instanceColor&&(G.instanceColor.needsUpdate=!0)}const ge=N.current==="slow"?.4:N.current==="gentle"?.85:1.5;for(let Ae=0;Ae<R;Ae++){const st=T[Ae];we&&(st.r+=st.radialSpeed*ge,st.angle+=st.angularSpeed*ge,st.r>st.maxR&&(st.r=st.minR+Math.random()*2,st.angle=Math.random()*Math.PI*2));const dt=1.35,gt=.95,_t=st.r*Math.cos(st.angle)*dt,$e=st.r*Math.sin(st.angle)*gt,it=st.z;ee.position.set(_t,$e,it);const It=st.ballRadius;ee.scale.set(It,It,It),ee.updateMatrix(),G.setMatrixAt(Ae,ee.matrix)}G.instanceMatrix.needsUpdate=!0,_e=te*8,Ne=ce*5,V.position.x+=(_e-V.position.x)*.05,V.position.y+=(Ne-V.position.y)*.05,V.lookAt(0,0,0),fe.rotation.y+=3e-4,b.render(I,V)};return ue(),()=>{cancelAnimationFrame(Ce),z.disconnect(),window.removeEventListener("mousemove",pe),O.dispose(),G.material.dispose(),K.dispose(),q.dispose(),b.dispose(),b.domElement&&b.domElement.parentNode&&b.domElement.parentNode.removeChild(b.domElement)}},[]),h.jsxs(h.Fragment,{children:[h.jsx("div",{ref:t,className:`absolute inset-0 w-full h-full overflow-hidden ${o}`,style:{zIndex:0},children:h.jsx("div",{className:"absolute bottom-3 right-3 sm:bottom-4 sm:right-6 z-20 flex items-center gap-2 pointer-events-auto select-none",children:h.jsxs("div",{className:"bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-sand/70 shadow-xs flex items-center gap-1.5 sm:gap-2.5 text-xs text-warm-dark font-medium flex-wrap max-w-[calc(100vw-1.5rem)] sm:max-w-none",children:[h.jsxs("span",{className:"flex items-center gap-1.5 text-terracotta shrink-0",children:[h.jsx(N_,{className:"w-3.5 h-3.5 text-terracotta fill-terracotta"}),h.jsx("span",{className:"hidden sm:inline",children:"Ball Particle Field"})]}),h.jsx("span",{className:"text-sand hidden sm:inline",children:"|"}),h.jsxs("div",{className:"hidden sm:flex items-center gap-1 text-[11px]",children:[h.jsx("button",{type:"button",onClick:()=>d("antigravity"),className:`px-2 py-0.5 rounded-md cursor-pointer transition-colors ${c==="antigravity"?"bg-terracotta text-white font-bold":"text-stone-muted hover:text-warm-dark"}`,title:"Google Antigravity Burst (Coral & Blue)",children:"Antigravity"}),h.jsx("button",{type:"button",onClick:()=>d("terracotta"),className:`px-2 py-0.5 rounded-md cursor-pointer transition-colors ${c==="terracotta"?"bg-terracotta text-white font-bold":"text-stone-muted hover:text-warm-dark"}`,title:"Warm Terracotta Theme",children:"Terracotta"}),h.jsx("button",{type:"button",onClick:()=>d("cobalt"),className:`px-2 py-0.5 rounded-md cursor-pointer transition-colors ${c==="cobalt"?"bg-terracotta text-white font-bold":"text-stone-muted hover:text-warm-dark"}`,title:"Engineering Cobalt Theme",children:"Cobalt"})]}),h.jsx("span",{className:"text-sand hidden sm:inline",children:"|"}),h.jsxs("div",{className:"hidden sm:flex items-center gap-1 text-[11px]",children:[h.jsx("button",{type:"button",onClick:()=>m(.2),className:`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${f===.2?"bg-warm-dark text-white font-semibold":"text-stone-muted hover:text-warm-dark"}`,title:"Ultra Transparent / Soft (20% Opacity)",children:"Soft"}),h.jsx("button",{type:"button",onClick:()=>m(.38),className:`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${f===.38?"bg-warm-dark text-white font-semibold":"text-stone-muted hover:text-warm-dark"}`,title:"Balanced Translucent (38% Opacity)",children:"Trans."}),h.jsx("button",{type:"button",onClick:()=>m(.6),className:`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${f===.6?"bg-warm-dark text-white font-semibold":"text-stone-muted hover:text-warm-dark"}`,title:"Medium Opacity (60%)",children:"Med."})]}),h.jsx("span",{className:"text-sand hidden sm:inline",children:"|"}),h.jsxs("div",{className:"hidden sm:flex items-center gap-1 text-[11px]",children:[h.jsx("button",{type:"button",onClick:()=>p("slow"),className:`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${g==="slow"?"bg-warm-dark text-white font-semibold":"text-stone-muted hover:text-warm-dark"}`,title:"Ultra Slow & Calm Motion (0.45x)",children:"Slow"}),h.jsx("button",{type:"button",onClick:()=>p("gentle"),className:`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${g==="gentle"?"bg-warm-dark text-white font-semibold":"text-stone-muted hover:text-warm-dark"}`,title:"Gentle Serene Pace (1.0x)",children:"Gentle"}),h.jsx("button",{type:"button",onClick:()=>p("normal"),className:`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${g==="normal"?"bg-warm-dark text-white font-semibold":"text-stone-muted hover:text-warm-dark"}`,title:"Brisk Motion (1.8x)",children:"Brisk"})]}),h.jsx("span",{className:"text-sand",children:"|"}),h.jsx("button",{type:"button",onClick:()=>s(!i),className:"text-stone-muted hover:text-terracotta transition-colors cursor-pointer p-0.5",title:i?"Resume particle flow":"Pause particle flow",children:i?h.jsx(I_,{className:"w-3.5 h-3.5 text-terracotta"}):h.jsx(P_,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>v(!0),className:"text-stone-muted hover:text-terracotta transition-colors cursor-pointer p-0.5",title:"Expand 3D Particle Field Fullscreen",children:h.jsx(o1,{className:"w-3.5 h-3.5"})})]})})}),S&&h.jsx(ZC,{onClose:()=>v(!1),initialColorMode:c,initialOpacity:f,initialSpeed:g})]})},ZC=({onClose:o,initialColorMode:t,initialOpacity:i=.38,initialSpeed:s="slow"})=>{const c=bt.useRef(null),[d,f]=bt.useState(t),[m,g]=bt.useState(i),[p,S]=bt.useState(s),[v,_]=bt.useState(!1);return bt.useEffect(()=>{const y=c.current;if(!y)return;let C;try{C=new wb({antialias:!0,alpha:!1})}catch{return}const N=new sb;N.background=new nt("#FFFFFF");const M=new fi(50,y.clientWidth/y.clientHeight,.1,1e3);M.position.set(0,0,55),C.setSize(y.clientWidth,y.clientHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.appendChild(C.domElement);const b=450,I=[new nt("#E85A4F"),new nt("#EA4335"),new nt("#FB7185"),new nt("#F43F5E"),new nt("#E11D48")],V=[new nt("#1A73E8"),new nt("#2563EB"),new nt("#38BDF8"),new nt("#0284C7"),new nt("#3B82F6")],R=[new nt("#1E293B"),new nt("#334155"),new nt("#0F172A")],D=[],U=new Xu(.18,12,12),P=new db(U,new Vu({transparent:!0,opacity:m,depthWrite:!1}),b);N.add(P);for(let te=0;te<b;te++){const ce=Math.random()*Math.PI*2,_e=7+Math.random()*7,Ne=30+Math.random()*26,je=_e+Math.pow(Math.random(),.7)*(Ne-_e),z=(Math.random()-.5)*30,pe=ce>.25*Math.PI&&ce<.85*Math.PI,Ce=ce>.15*Math.PI&&ce<.95*Math.PI;let Y,ue=0;Math.random()<.1?(Y=R[Math.floor(Math.random()*R.length)].clone(),ue=2):pe||Ce&&Math.random()>.35?(Y=I[Math.floor(Math.random()*I.length)].clone(),ue=0):(Y=V[Math.floor(Math.random()*V.length)].clone(),ue=1),D.push({r:je,maxR:Ne,minR:_e,angle:ce,angularSpeed:(Math.random()-.5)*6e-4,radialSpeed:.005+Math.random()*.007,z,radius:.35+Math.random()*1.1,baseColor:Y,type:ue}),P.setColorAt(te,Y)}P.instanceColor&&(P.instanceColor.needsUpdate=!0);let T=!1,O=0,k=0,G=0,ee=0;const le=te=>{T=!0,O=te.clientX,k=te.clientY},K=te=>{T&&(ee+=(te.clientX-O)*.008,G+=(te.clientY-k)*.008,G=Math.max(-1,Math.min(1,G)),O=te.clientX,k=te.clientY)},$=()=>{T=!1};y.addEventListener("mousedown",le),window.addEventListener("mousemove",K),window.addEventListener("mouseup",$);const j=new Fn;let q;const fe=()=>{q=requestAnimationFrame(fe);const te=p==="slow"?.4:p==="gentle"?.85:1.5;for(let _e=0;_e<b;_e++){const Ne=D[_e];v||(Ne.r+=Ne.radialSpeed*te,Ne.angle+=Ne.angularSpeed*te,Ne.r>Ne.maxR&&(Ne.r=Ne.minR+Math.random()*2,Ne.angle=Math.random()*Math.PI*2));const je=Ne.r*Math.cos(Ne.angle)*1.35,z=Ne.r*Math.sin(Ne.angle)*.95;j.position.set(je,z,Ne.z);const pe=Ne.radius;j.scale.set(pe,pe,pe),j.updateMatrix(),P.setMatrixAt(_e,j.matrix)}P.instanceMatrix.needsUpdate=!0;const ce=55;M.position.x=ce*Math.sin(ee)*Math.cos(G),M.position.y=ce*Math.sin(G),M.position.z=ce*Math.cos(ee)*Math.cos(G),M.lookAt(0,0,0),C.render(N,M)};return fe(),()=>{cancelAnimationFrame(q),y.removeEventListener("mousedown",le),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",$),C.dispose(),C.domElement.parentNode&&C.domElement.parentNode.removeChild(C.domElement)}},[d,v,m,p]),h.jsx("div",{className:"fixed inset-0 z-50 bg-warm-dark/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200",children:h.jsxs("div",{className:"bg-white rounded-3xl border-2 border-sand shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative",children:[h.jsxs("div",{className:"p-4 sm:px-6 border-b border-sand flex items-center justify-between bg-sand/15",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("div",{className:"w-9 h-9 rounded-xl bg-terracotta/10 border border-terracotta/30 flex items-center justify-center text-terracotta",children:h.jsx(N_,{className:"w-5 h-5 fill-terracotta"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-heading font-bold text-warm-dark text-sm sm:text-base",children:"Google Antigravity 3D Ball Particle Field"}),h.jsx("p",{className:"text-xs text-stone-muted",children:"Translucent spheres with vivid coral, cobalt, and midnight colors • Drag to orbit 360°"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-white p-1 rounded-xl border border-sand text-xs",children:[h.jsx("button",{onClick:()=>S("slow"),className:`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${p==="slow"?"bg-warm-dark text-white":"text-stone-muted hover:text-warm-dark"}`,title:"Slow (0.45x)",children:"Slow"}),h.jsx("button",{onClick:()=>S("gentle"),className:`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${p==="gentle"?"bg-warm-dark text-white":"text-stone-muted hover:text-warm-dark"}`,title:"Gentle (1.0x)",children:"Gentle"}),h.jsx("button",{onClick:()=>S("normal"),className:`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${p==="normal"?"bg-warm-dark text-white":"text-stone-muted hover:text-warm-dark"}`,title:"Brisk (1.8x)",children:"Brisk"})]}),h.jsxs("div",{className:"flex items-center gap-1 bg-white p-1 rounded-xl border border-sand text-xs",children:[h.jsx("button",{onClick:()=>g(.2),className:`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${m===.2?"bg-warm-dark text-white":"text-stone-muted hover:text-warm-dark"}`,title:"Soft (20%)",children:"Soft"}),h.jsx("button",{onClick:()=>g(.38),className:`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${m===.38?"bg-warm-dark text-white":"text-stone-muted hover:text-warm-dark"}`,title:"Translucent (38%)",children:"Translucent"}),h.jsx("button",{onClick:()=>g(.6),className:`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${m===.6?"bg-warm-dark text-white":"text-stone-muted hover:text-warm-dark"}`,title:"Medium (60%)",children:"Medium"})]}),h.jsxs("div",{className:"flex items-center gap-1 bg-white p-1 rounded-xl border border-sand text-xs",children:[h.jsx("button",{onClick:()=>f("antigravity"),className:`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${d==="antigravity"?"bg-terracotta text-white":"text-stone-muted hover:text-warm-dark"}`,children:"Antigravity"}),h.jsx("button",{onClick:()=>f("terracotta"),className:`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${d==="terracotta"?"bg-terracotta text-white":"text-stone-muted hover:text-warm-dark"}`,children:"Terracotta"}),h.jsx("button",{onClick:()=>f("cobalt"),className:`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${d==="cobalt"?"bg-terracotta text-white":"text-stone-muted hover:text-warm-dark"}`,children:"Cobalt"})]}),h.jsx("button",{onClick:()=>_(!v),className:"p-2 rounded-xl bg-white border border-sand text-stone-muted hover:text-terracotta transition-colors cursor-pointer",title:v?"Resume Motion":"Pause Motion",children:v?h.jsx(I_,{className:"w-4 h-4 text-terracotta"}):h.jsx(P_,{className:"w-4 h-4"})}),h.jsx("button",{onClick:o,className:"p-2 rounded-xl bg-white hover:bg-sand/30 border border-sand text-warm-dark transition-colors cursor-pointer",title:"Close Fullscreen View",children:h.jsx(Gu,{className:"w-5 h-5"})})]})]}),h.jsx("div",{ref:c,className:"flex-1 w-full h-full relative cursor-grab active:cursor-grabbing",children:h.jsx("div",{className:"absolute top-3 left-4 pointer-events-none bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-sand text-[11px] text-stone-muted",children:"✦ Click & drag to rotate 3D ball particle orbit • Smooth 60fps WebGL"})})]})})},KC=({onExploreProjects:o,onExploreCerts:t,onExploreLocation:i,onExploreInquiry:s})=>h.jsxs("section",{id:"hero",className:"relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster text-warm-dark pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200/80 bg-cad-grid",children:[h.jsx(YC,{className:"absolute inset-0 z-0 opacity-80"}),h.jsx("div",{className:"absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gold/10 to-terracotta/5 rounded-full blur-3xl pointer-events-none"}),h.jsx("div",{className:"absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-coral/10 to-sand/20 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-gold/40 text-xs font-semibold text-warm-dark shadow-[0_2px_10px_rgba(197,155,39,0.12)] backdrop-blur-md",children:[h.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"})]}),h.jsx("span",{className:"font-bold text-warm-dark",children:"PWD Maharashtra Class 1-A Contractor"}),h.jsx("span",{className:"text-stone-300",children:"•"}),h.jsx("span",{className:"text-gold-dark font-mono text-[11px] font-semibold",children:"Unlimited Bidding Authority"})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("h1",{className:"text-3xl sm:text-5xl lg:text-[56px] font-extrabold font-heading tracking-tight text-warm-dark leading-[1.12]",children:["Engineering Landmark Infrastructure for"," ",h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-coral to-gold-dark",children:"Maharashtra"})]}),h.jsxs("div",{className:"flex items-center gap-2 text-sm sm:text-base font-semibold text-stone-dark",children:[h.jsx("span",{className:"w-6 h-[2px] bg-gold rounded-full"}),h.jsx("p",{className:"text-terracotta tracking-wide",children:"शासकीय नोंदणीकृत वर्ग १-अ कंत्राटदार • अमळनेर, जि. जळगाव (खानदेश)"})]})]}),h.jsxs("p",{className:"text-stone-dark text-sm sm:text-base leading-relaxed max-w-2xl font-normal",children:["Official civil engineering portfolio of ",h.jsx("strong",{className:"text-warm-dark font-semibold",children:We.proprietor})," (",We.qualification,") and ",h.jsx("strong",{className:"text-warm-dark font-semibold",children:We.firmName}),". Delivering premier PWD state highways, high-level RCC bridges, Jal Jeevan Mission drinking water networks, and government civil works with a 100% company-owned heavy machinery fleet and mobile NABL testing lab based in Amalner."]}),h.jsxs("div",{className:"flex flex-wrap gap-2 pt-1 text-xs",children:[h.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-stone-200/90 text-warm-dark font-medium shadow-2xs",children:[h.jsx(ca,{className:"w-3.5 h-3.5 text-terracotta"}),"Amalner HQ, Jalgaon Dist. 425401"]}),h.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-stone-200/90 text-warm-dark font-medium shadow-2xs",children:[h.jsx(lo,{className:"w-3.5 h-3.5 text-gold-dark"}),"Khandesh & North Maharashtra Region"]}),h.jsxs("span",{className:"inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-stone-200/90 text-warm-dark font-medium shadow-2xs",children:[h.jsx(e1,{className:"w-3.5 h-3.5 text-coral"}),"Chartered Civil Engineer (IEI)"]})]}),h.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[h.jsxs("button",{id:"hero-explore-projects-btn",onClick:o,className:"px-6 py-3.5 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white font-bold text-sm rounded-xl shadow-[0_4px_16px_rgba(232,90,79,0.3)] hover:shadow-[0_6px_20px_rgba(232,90,79,0.4)] transition-all flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5",children:[h.jsx("span",{children:"Explore Project Galleries"}),h.jsx(R_,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),h.jsxs("button",{id:"hero-verify-certs-btn",onClick:t,className:"px-5 py-3.5 bg-white hover:bg-stone-50 text-warm-dark font-semibold text-sm rounded-xl border border-stone-300 hover:border-gold/60 transition-all flex items-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5",children:[h.jsx(El,{className:"w-4 h-4 text-gold-dark"}),h.jsx("span",{children:"Verify Class 1-A License"})]}),h.jsxs("button",{id:"hero-location-btn",onClick:i,className:"px-4 py-3.5 bg-white/80 hover:bg-white text-stone-dark hover:text-warm-dark font-medium text-sm rounded-xl border border-stone-200 transition-all flex items-center gap-2 cursor-pointer shadow-2xs hover:-translate-y-0.5",children:[h.jsx(ca,{className:"w-4 h-4 text-coral"}),h.jsx("span",{children:"Amalner Office"})]})]})]}),h.jsx("div",{className:"lg:col-span-5",children:h.jsxs("div",{className:"relative rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-stone-200 hover:border-gold/40 p-6 sm:p-8 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300",children:[h.jsxs("div",{className:"absolute top-4 right-4 bg-gradient-to-r from-gold-badge to-amber-100 text-gold-dark border border-gold/40 text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-2xs flex items-center gap-1.5",children:[h.jsx(B_,{className:"w-3 h-3 text-gold"}),h.jsx("span",{children:"GOVT. REGISTERED"})]}),h.jsxs("div",{className:"flex items-center gap-4 mt-5 mb-6 sm:pr-28 ",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-charcoal to-obsidian border-2 border-gold/40 flex items-center justify-center text-gold shadow-md shrink-0",children:h.jsx(lo,{className:"w-8 h-8 text-gold"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-bold font-heading text-warm-dark",children:We.proprietor}),h.jsx("p",{className:"text-xs text-terracotta font-semibold",children:We.qualification}),h.jsxs("p",{className:"text-xs text-stone-muted mt-0.5 font-medium",children:["Proprietor: ",We.firmName," (Amalner)"]})]})]}),h.jsxs("div",{className:"space-y-3 border-t border-stone-200/80 pt-4 mb-6",children:[h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-stone-dark",children:[h.jsx(_r,{className:"w-4 h-4 text-gold-dark shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-warm-dark",children:"PWD Maharashtra Class 1-A:"})," Unlimited financial tender execution capacity across Maharashtra state."]})]}),h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-stone-dark",children:[h.jsx(_r,{className:"w-4 h-4 text-gold-dark shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-warm-dark",children:"MJP Jal Jeevan Mission:"})," Certified for turnkey rural drinking water, ESRs & WTP plants."]})]}),h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-stone-dark",children:[h.jsx(_r,{className:"w-4 h-4 text-gold-dark shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-warm-dark",children:"Amalner Head Office:"})," Physical administrative chambers on Station Road, opposite PWD Sub-Divisional Office."]})]}),h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-stone-dark",children:[h.jsx(_r,{className:"w-4 h-4 text-gold-dark shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-warm-dark",children:"In-house Plant & Lab:"})," Hot mix plant, electronic paver, transit mixers & NABL standard testing rig."]})]})]}),h.jsxs("div",{className:"bg-gradient-to-r from-alabaster to-stone-100 p-3.5 rounded-xl border border-stone-200 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] text-stone-muted font-medium",children:"Tender Scrutiny Desk"}),h.jsx("p",{className:"text-xs sm:text-sm font-bold text-warm-dark font-mono",children:We.mobiles[0]})]}),h.jsxs("button",{onClick:s,className:"px-3.5 py-2 bg-warm-dark hover:bg-charcoal text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs",children:[h.jsx("span",{children:"BOQ Estimate"}),h.jsx(GM,{className:"w-3.5 h-3.5 text-gold"})]})]})]})})]}),h.jsx("div",{className:"mt-12 sm:mt-16 pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5",children:N1.map((c,d)=>h.jsxs("div",{className:"bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between",children:[h.jsx("p",{className:"text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-warm-dark to-terracotta font-mono tracking-tight",children:c.value}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-bold text-warm-dark mt-2 leading-tight",children:c.label}),h.jsx("p",{className:"text-[11px] text-stone-muted mt-1 leading-snug",children:c.subtext})]})]},d))})]})]}),QC=[{id:"amalner-chopda-sh19",title:"Amalner – Chopda State Highway (SH-19) 4-Lane Widening & Bituminous Concrete",marathiTitle:"अमळनेर – चोपडा राज्य महामार्ग रुंदीकरण व डांबरीकरण",category:"roads",department:"Public Works Department (PWD), Gov. of Maharashtra",client:"Executive Engineer, PWD Jalgaon Division",location:"Amalner to Galwade Sector (Km 12/00 to 28/400), Jalgaon",tenderCost:"₹ 28.45 Cr",costNumeric:28.45,completionYear:"2024",status:"Completed",description:"Complete widening from 2-lane to 4-lane divided carriageway with 50mm Bituminous Concrete (BC) over 75mm Dense Bituminous Macadam (DBM), paved shoulders, crash barriers, and IRC-standard signage.",scopeOfWork:["16.4 km 4-Lane highway expansion with granular sub-base (GSB) & Wet Mix Macadam (WMM)","12 Box culverts reconstruction & 4 pipe culvert extensions with IRC load-testing approval","Solar-powered LED highway illumination at 4 major rural junctions in Amalner Taluka","Advanced thermoplastic road markings and crash barrier installations along Bori curve"],keySpecs:[{label:"Length",value:"16.40 Km"},{label:"Carriageway",value:"Dual 7.5m (4-Lane)"},{label:"Asphalt Grade",value:"VG-30 Bitumen with Polymer Additive"},{label:"Quality Rating",value:"A+ (Quality Control Jalgaon)"}],imageUrl:"https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1584463699026-646e7f223f6d?auto=format&fit=crop&w=1000&q=80"],beforeAfter:{before:"https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80",after:"https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80",label:"Single-lane broken gravel transformed into 4-lane engineered asphalt"},completionCertNumber:"EE/PWD/JAL/TC-2024/098",featured:!0},{id:"bori-river-highlevel-bridge",title:"High-Level Submersible RCC Bridge over Bori River at Amalner Bypass",marathiTitle:"बोरी नदीवरील उच्चस्तरीय आरसीसी पूल, अमळनेर बायपास",category:"bridges",department:"PWD World Bank & National Highway Division, Maharashtra",client:"Superintending Engineer, PWD Circle Nashik / Jalgaon",location:"Bori River Crossing, Amalner Outer Bypass, Jalgaon District",tenderCost:"₹ 19.80 Cr",costNumeric:19.8,completionYear:"2023",status:"Completed",description:"Construction of a 320-meter long reinforced cement concrete (RCC) girder bridge with 8 spans of 40 meters each, deep cast-in-situ bored pile foundations anchored in hard basalt rock, designed for 100-year flood levels.",scopeOfWork:["8 Spans of 40m pre-stressed concrete (PSC) I-girders with RCC deck slab","1200mm diameter bored cast-in-situ piles resting on sound basalt bed","RCC crash barriers, expansion joints, and 1.5m pedestrian footpaths on both sides","850m approach embankment with reinforced earth (RE) wall technology"],keySpecs:[{label:"Total Length",value:"320 Meters (8 Spans)"},{label:"Foundation",value:"Cast-in-situ Pile (M35 Grade)"},{label:"Superstructure",value:"Prestressed Concrete (M45 Grade)"},{label:"Design Load",value:"IRC Class 70R & Class A"}],imageUrl:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"SE/NH-PWD/NSK/CR-441/23",featured:!0},{id:"jal-jeevan-esr-wtp-amalner",title:"25 Lakh Litre Elevated Storage Reservoir (ESR) & Jackwell WTP Scheme",marathiTitle:"२५ लाख लिटर क्षमतेची पाण्याची टाकी व जलशुद्धीकरण प्रकल्प (जलजीवन मिशन)",category:"water",department:"Maharashtra Jeevan Pradhikaran (MJP) & Jal Jeevan Mission",client:"Member Secretary, MJP Jalgaon Division / ZP Rural Water Supply",location:"Rural Cluster Scheme Covering 14 Villages around Amalner",tenderCost:"₹ 16.20 Cr",costNumeric:16.2,completionYear:"2024",status:"Completed",description:"Comprehensive rural drinking water project comprising a 25 Lakh Litre RCC staging water reservoir, intake well along Tapi-Bori confluence, rapid sand filtration WTP (8 MLD), and 42 km ductile iron distribution feeder lines.",scopeOfWork:["24m staging RCC Elevated Storage Reservoir with staging column structural design","8 MLD Water Treatment Plant with automatic chlorination and SCADA telemetry","42.8 km ductile iron (DI K-7 & K-9) transmission mains laying with hydrostatic testing","Over 4,800 functional household tap connections (FHTC) installed with brass meters"],keySpecs:[{label:"Storage Capacity",value:"25,00,000 Litres (25 LL)"},{label:"Staging Height",value:"24.0 Meters RCC"},{label:"WTP Capacity",value:"8.0 MLD Rapid Gravity"},{label:"Beneficiary Population",value:"38,500+ Rural Citizens"}],imageUrl:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"MJP/JAL/JJM/WR-891/2024",featured:!0},{id:"amalner-tahsil-administrative-complex",title:"Amalner Sub-Divisional Tahsil & Judicial Administrative Complex",marathiTitle:"अमळनेर उपविभागीय महसूल व प्रशासकीय इमारत संकुल",category:"buildings",department:"Public Works Department (Building Division), Maharashtra",client:"Executive Engineer, PWD Buildings Division, Jalgaon",location:"Court Road, Opp. Nagar Palika, Amalner, Maharashtra",tenderCost:"₹ 22.10 Cr",costNumeric:22.1,completionYear:"2022",status:"Completed",description:"Modern G+3 framed RCC government administrative headquarters housing the Sub-Divisional Magistrate (SDM) office, Tahsil courtrooms, record digital rooms, biometric civic counters, and green building rainwater harvesting systems.",scopeOfWork:["68,000 sq.ft built-up RCC framed structure with seismic Zone-III earthquake design","Granite and vitrified tile flooring with central VRF air-conditioned conference hall","Fire-fighting hydrant network, 50kVA solar rooftop panel system, and disabled-friendly ramps","Extensive perimeter compound wall with paver block parking for 200+ vehicles"],keySpecs:[{label:"Built-up Area",value:"68,000 Sq. Ft. (G+3)"},{label:"Structural Concrete",value:"M25 & M30 Ready-Mix"},{label:"Solar Capacity",value:"50 kW Grid-Tied"},{label:"Eco-Rating",value:"GRIHA 3-Star Compliant"}],imageUrl:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"EE/BLDG/PWD/JAL/COMP-12/2022",featured:!0},{id:"bori-canal-irrigation-lining",title:"Bori River Minor Irrigation Canal Concrete Lining & KT Weir Structures",marathiTitle:"बोरी नदी उजवा कालवा काँक्रिटीकरण व कोल्हापूर पद्धतीचे बंधारे (केटी वेअर)",category:"irrigation",department:"Water Resources Department (WRD), Gov. of Maharashtra",client:"Executive Engineer, Tapi Irrigation Development Corporation (TIDC), Jalgaon",location:"Amalner & Parola Border Irrigated Basin, Maharashtra",tenderCost:"₹ 14.50 Cr",costNumeric:14.5,completionYear:"2023",status:"Completed",description:"Cement concrete canal lining over 21.5 km of canal distributaries to eliminate seepage losses, along with construction of 3 Kolhapur Type (KT) Weirs on seasonal rivulets to elevate groundwater tables across 1,800 hectares of farm land.",scopeOfWork:["21.5 km trapezoidal CC lining with 100mm M15 concrete & geotextile filter fabric","3 Heavy-duty KT Weirs with steel drop gates and scour protection aprons","18 Farmer outlet head-regulators and cross-drainage siphons","Seepage prevention saving an estimated 32 million cubic feet of water annually"],keySpecs:[{label:"Canal Length",value:"21.50 Km"},{label:"Irrigated Area",value:"1,850+ Hectares"},{label:"Weir Structures",value:"3 Units with Needles"},{label:"Seepage Reduction",value:"78% Efficiency Gain"}],imageUrl:"https://images.unsplash.com/photo-1584463699026-646e7f223f6d?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1584463699026-646e7f223f6d?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"TIDC/WRD/JAL/IRR-082/23",featured:!1},{id:"apmc-amalner-market-sheds",title:"Amalner APMC Mega Agricultural Warehouse & Concrete Auction Platform",marathiTitle:"कृषी उत्पन्न बाजार समिती अमळनेर – भव्य धान्य व कापूस शेड व सिमेंट काँक्रीट यार्ड",category:"buildings",department:"Maharashtra State Agricultural Marketing Board (MSAMB)",client:"Secretary, Agriculture Produce Market Committee (APMC), Amalner",location:"Dhule Road APMC Market Yard, Amalner, Maharashtra",tenderCost:"₹ 11.75 Cr",costNumeric:11.75,completionYear:"2023",status:"Completed",description:"Construction of a 45,000 sq.ft clear-span pre-engineered structural steel storage warehouse with 150mm thick M30 grade tremix vacuum dewatered concrete flooring engineered for 40-tonne cotton and grain carrier trucks.",scopeOfWork:["Pre-Engineered Building (PEB) structural shed with 36m clear span without center columns","14,000 sq.m heavy-duty VDF (Vacuum Dewatered Concrete) tremix pavement yard","60-Tonne digital weighbridge pit and RCC administrative weighing office","Underground stormwater collection drain network with silt traps"],keySpecs:[{label:"Storage Area",value:"45,000 Sq. Ft."},{label:"Concrete Yard",value:"14,000 Sq. Meters Tremix"},{label:"Clear Span",value:"36.0 Meters PEB"},{label:"Weighbridge",value:"60 Ton Pitless Electronic"}],imageUrl:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"MSAMB/APMC/AMAL/2023/184",featured:!1},{id:"amalner-city-underground-stormwater",title:"Amalner Municipal City Stormwater Drainage & RCC Box Culverts Network",marathiTitle:"अमळनेर शहर भूमिगत पावसाळी गटार योजना व आरसीसी बॉक्स कल्व्हर्ट",category:"water",department:"Amalner Municipal Council (अमळनेर नगर परिषद) / Mah Urban Dept",client:"Chief Officer, Amalner Municipal Council, Dist. Jalgaon",location:"Station Road to Court Chowk & Subhash Road, Amalner, Maharashtra",tenderCost:"₹ 8.90 Cr",costNumeric:8.9,completionYear:"2024",status:"Completed",description:"Comprehensive flood mitigation scheme constructing 7.2 km of RCC precast and cast-in-situ covered box drains along major arterial roads of Amalner town, preventing monsoon waterlogging at key market squares.",scopeOfWork:["7.2 km RCC box drains (1.2m x 1.5m) with heavy-duty ductile iron grating covers","Replacement of 6 distressed masonry culverts with high-strength RCC single-cell box culverts","Reinstatement of asphalt road surfaces with 40mm semi-dense bituminous concrete (SDBC)","Constructed during off-peak night shifts to minimize traffic disruption in busy Amalner bazaars"],keySpecs:[{label:"Drainage Length",value:"7.20 Km"},{label:"Box Culverts",value:"6 Upgraded Units"},{label:"Concrete Grade",value:"M30 Sulphate Resistant"},{label:"Manhole Covers",value:"Heavy Duty Class D400"}],imageUrl:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"AMC/ENGG/SAN/2024/76",featured:!1},{id:"pmgsy-rural-roads-amalner-taluka",title:"PMGSY Rural Road Connectivity Package: 5 Agri-Corridor Roads in Amalner",marathiTitle:"पंतप्रधान ग्रामसडक योजना (PMGSY) – अमळनेर तालुक्यातील ५ ग्रामीण रस्ते",category:"roads",department:"Maharashtra Rural Road Development Association (MRRDA / PMGSY)",client:"Executive Engineer, PMGSY PIU Jalgaon",location:"Dharangaon-Amalner Border Villages (Shirud, Jalkhed, Piloda Links)",tenderCost:"₹ 13.60 Cr",costNumeric:13.6,completionYear:"2025",status:"Ongoing",description:"All-weather blacktopped road network bringing year-round connectivity to interior agricultural villages in Amalner taluka, complete with 5-year post-construction maintenance guarantee.",scopeOfWork:["18.6 km of rural road formation, GSB, WMM, and 20mm Premix Carpet with seal coat","Construction of 18 Hume pipe culverts and 2 RCC slab culverts over seasonal nullahs","Comprehensive slope stabilization and tree plantation of 1,200 native trees","Currently at 82% physical progress, ahead of scheduled contractual milestones"],keySpecs:[{label:"Total Package",value:"18.60 Km Across 5 Links"},{label:"Design Speed",value:"40–50 Km/h IRC:SP:20"},{label:"Physical Progress",value:"82% Completed"},{label:"Target Handover",value:"November 2025"}],imageUrl:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",galleryImages:["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"],completionCertNumber:"MRRDA/PMGSY/JAL/PKG-09/ONGOING",featured:!1}],JC=({onSelectProject:o})=>{const[t,i]=bt.useState("all"),[s,c]=bt.useState(""),[d,f]=bt.useState("all"),m=[{id:"all",label:"All Executed Works"},{id:"roads",label:"Highways & Paving"},{id:"bridges",label:"RCC River Bridges"},{id:"water",label:"Water Networks & ESR"},{id:"buildings",label:"Public Infra Buildings"},{id:"irrigation",label:"Canals & Weirs"}],g=bt.useMemo(()=>QC.filter(p=>{const S=t==="all"||p.category===t,v=d==="all"||p.status===d,_=p.title.toLowerCase().includes(s.toLowerCase())||p.location.toLowerCase().includes(s.toLowerCase())||p.department.toLowerCase().includes(s.toLowerCase())||p.marathiTitle&&p.marathiTitle.includes(s);return S&&v&&_}),[t,d,s]);return h.jsx("section",{id:"projects",className:"py-16 sm:py-24 bg-gradient-to-b from-white via-alabaster to-white border-b border-stone-200/80",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4",children:[h.jsxs("div",{className:"max-w-3xl",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs",children:[h.jsx(rm,{className:"w-3.5 h-3.5 text-terracotta"}),h.jsx("span",{children:"Government Infrastructure Portfolio"})]}),h.jsx("h2",{className:"text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight",children:"Past Project Galleries & Executed Works"}),h.jsx("p",{className:"text-sm sm:text-base text-stone-muted mt-2 leading-relaxed",children:"High-specification infrastructure executed for PWD Maharashtra, Maharashtra Jeevan Pradhikaran (MJP), Water Resources Department, and Municipal Councils across Amalner, Jalgaon, and North Maharashtra."})]}),h.jsxs("div",{className:"hidden lg:flex items-center gap-2 text-xs font-mono text-stone-muted bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),h.jsxs("span",{children:["Showing ",g.length," Verified Works"]})]})]}),h.jsxs("div",{className:"bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] mb-8 space-y-4",children:[h.jsxs("div",{className:"flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4",children:[h.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none",children:m.map(p=>h.jsx("button",{id:`cat-filter-${p.id}`,onClick:()=>i(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${t===p.id?"bg-warm-dark text-white shadow-sm":"text-stone-dark hover:bg-stone-100 hover:text-warm-dark"}`,children:p.label},p.id))}),h.jsxs("div",{className:"flex items-center gap-1 bg-stone-100 p-1 rounded-xl shrink-0 self-start md:self-auto border border-stone-200",children:[h.jsx("button",{onClick:()=>f("all"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${d==="all"?"bg-white text-warm-dark shadow-2xs":"text-stone-muted hover:text-warm-dark"}`,children:"All Works"}),h.jsx("button",{onClick:()=>f("Completed"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${d==="Completed"?"bg-terracotta text-white shadow-2xs":"text-stone-muted hover:text-warm-dark"}`,children:"Completed"}),h.jsxs("button",{onClick:()=>f("Ongoing"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${d==="Ongoing"?"bg-warm-dark text-white shadow-2xs":"text-stone-muted hover:text-warm-dark"}`,children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"Ongoing"]})]})]}),h.jsxs("div",{className:"relative",children:[h.jsx(_1,{className:"w-4 h-4 text-stone-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"}),h.jsx("input",{type:"text",id:"project-search-input",value:s,onChange:p=>c(p.target.value),placeholder:"Search project title, department (PWD, MJP), bridge, road or Amalner location...",className:"w-full pl-10 pr-4 py-2.5 bg-alabaster/60 border border-stone-200/90 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta transition-all"})]})]}),g.length===0?h.jsxs("div",{className:"bg-white rounded-2xl p-12 text-center border border-stone-200 shadow-xs",children:[h.jsx(rm,{className:"w-12 h-12 text-stone-muted mx-auto mb-3"}),h.jsx("p",{className:"text-base font-bold text-warm-dark",children:"No projects match the current filter"}),h.jsx("p",{className:"text-xs text-stone-muted mt-1",children:"Try resetting your search query or switching categories."}),h.jsx("button",{onClick:()=>{i("all"),f("all"),c("")},className:"mt-4 px-4 py-2 bg-terracotta text-white rounded-xl text-xs font-semibold hover:bg-terracotta-hover cursor-pointer transition-colors shadow-xs",children:"Reset All Filters"})]}):h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:g.map(p=>h.jsxs("div",{id:`project-card-${p.id}`,onClick:()=>o(p),className:"group bg-white/95 rounded-2xl border border-stone-200/90 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.12)] hover:border-gold/50 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1",children:[h.jsxs("div",{className:"relative h-52 sm:h-56 bg-warm-dark overflow-hidden",children:[h.jsx("img",{src:p.imageUrl,alt:p.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-black/30"}),h.jsxs("div",{className:"absolute top-3 left-3 flex items-center gap-1.5 flex-wrap",children:[h.jsx("span",{className:"bg-obsidian/85 backdrop-blur-md text-stone-light text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10",children:p.category}),h.jsxs("span",{className:`text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-2xs ${p.status==="Completed"?"bg-emerald-600 text-white":"bg-amber-600 text-white"}`,children:[p.status==="Ongoing"&&h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white animate-pulse"}),p.status]})]}),h.jsx("div",{className:"absolute top-3 right-3",children:h.jsxs("span",{className:"bg-gradient-to-r from-gold-badge to-amber-100 text-gold-dark text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 font-mono border border-gold/40",children:[h.jsx(L_,{className:"w-3 h-3 text-gold"}),p.tenderCost]})}),h.jsxs("div",{className:"absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between",children:[h.jsxs("span",{className:"flex items-center gap-1 truncate text-stone-light font-medium",children:[h.jsx(ca,{className:"w-3.5 h-3.5 text-coral shrink-0"}),p.location]}),h.jsx("span",{className:"text-gold-light font-mono text-[11px] shrink-0 ml-2 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/10",children:p.completionYear})]})]}),h.jsxs("div",{className:"p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"text-[11px] font-bold text-terracotta uppercase tracking-wider mb-1 flex items-center gap-1",children:[h.jsx(lo,{className:"w-3 h-3"}),h.jsx("span",{children:p.department})]}),h.jsx("h3",{className:"font-heading font-bold text-base sm:text-lg text-warm-dark leading-snug group-hover:text-terracotta transition-colors",children:p.title}),p.marathiTitle&&h.jsx("p",{className:"text-xs text-stone-muted mt-1 line-clamp-1 font-medium",children:p.marathiTitle}),h.jsx("p",{className:"text-xs text-stone-dark mt-2.5 line-clamp-2 leading-relaxed",children:p.description})]}),h.jsxs("div",{className:"pt-3 border-t border-stone-200/80",children:[h.jsx("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:p.keySpecs.slice(0,2).map((S,v)=>h.jsxs("div",{className:"bg-stone-50 p-2 rounded-xl border border-stone-200/80",children:[h.jsx("span",{className:"text-stone-muted block truncate font-medium",children:S.label}),h.jsx("span",{className:"font-bold text-warm-dark truncate block mt-0.5",children:S.value})]},v))}),h.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs font-bold text-terracotta group-hover:text-terracotta-hover transition-colors",children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:["Inspect Project Dossier",p.beforeAfter&&h.jsx("span",{className:"text-[10px] bg-sand/30 text-warm-dark px-1.5 py-0.5 rounded-md font-semibold border border-sand",children:"Site Proof"})]}),h.jsx(EM,{className:"w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]})]})]},p.id))})]})})},w_=[{id:"pwd-class-1a",title:"PWD Maharashtra Class 1-A Government Contractor Registration",marathiTitle:"सार्वजनिक बांधकाम विभाग (PWD) महाराष्ट्र शासन – वर्ग १-अ अधिकृत नोंदणी",issuingAuthority:"Public Works Department, Government of Maharashtra",shortAuthority:"PWD Maharashtra (Govt. of MH)",registrationNumber:"PWD/MH/JAL/CLASS-1A/042",validTill:"31st March 2029 (Renewed)",category:"Government Registration",description:"Supreme statutory registration granted by the Chief Engineer, PWD Nashik/Jalgaon Region, enabling independent bidding and execution of state highway corridors, major river bridges, and public administrative building tenders across Maharashtra with unlimited financial bidding limits.",status:"Active & Verified",sealBadge:"Class 1-A Unlimited",highlights:["Highest Class 1-A category with unlimited tender bidding capability","Directly empanelled for Central Road Fund (CRF) & State Road Development works","Continuous clean compliance audit track record without a single debarment or penalty","Annual technical solvency verified via State Bank of India, Amalner Branch"],verificationDetails:{portalName:"mahatenders.gov.in & pwd.maharashtra.gov.in",workLimit:"Unlimited (₹ No Upper Ceiling)",classGrade:"Class 1-A (Civil Infrastructure)",dateOfIssue:"14th May 2009 (Re-endorsed 2024)"}},{id:"mjp-water-works",title:"Maharashtra Jeevan Pradhikaran (MJP) Class-A Water Works Registration",marathiTitle:"महाराष्ट्र जीवन प्राधिकरण (MJP) वर्ग-अ जलपुरवठा कंत्राटदार नोंदणी",issuingAuthority:"Maharashtra Jeevan Pradhikaran & Jal Jeevan Mission",shortAuthority:"MJP & JJM Maharashtra",registrationNumber:"MJP/CE-NSK/REG-CL-A/2016/W-118",validTill:"31st December 2028",category:"Government Registration",description:"Empanelled contractor for major potable drinking water supply schemes, Elevated Storage Reservoirs (ESR), Water Treatment Plants (WTP), Jackwell river intakes, and electro-mechanical automation under the Central Government Jal Jeevan Mission.",status:"Active & Verified",sealBadge:"Class A (MJP)",highlights:["Empanelled for turnkey rural and urban drinking water mega schemes","Qualified for DI K-7 / K-9 pipeline networks and automatic SCADA chlorine systems","Completed over 18 ESR overhead water reservoirs in Khandesh region","Approved third-party hydrostatic pressure testing certifications"],verificationDetails:{portalName:"mjp.maharashtra.gov.in",workLimit:"Up to ₹ 50.00 Crores per single work",classGrade:"Class-A (Water Supply & Drainage)",dateOfIssue:"22nd August 2016 (Renewed)"}},{id:"chartered-engineer-iei",title:"The Institution of Engineers (India) – Chartered Engineer (Civil)",marathiTitle:"द इन्स्टिट्यूशन ऑफ इंजिनिअर्स (इंडिया) – अधिकृत चार्टर्ड सिव्हिल इंजिनिअर",issuingAuthority:"The Institution of Engineers (India) [IEI], Established 1920 by Royal Charter",shortAuthority:"IEI Chartered Engineer",registrationNumber:"IEI/M-164820/5 (Civil Engg)",validTill:"Life Member (Permanent)",category:"Professional License",description:"Statutory Chartered Civil Engineer credential conferring authority to sign structural stability certificates, vetting BOQs, conducting geotechnical safety assessments, and acting as Competent Structural Engineer for government civic works.",status:"Permanent Registered",sealBadge:"Chartered Engineer (IEI)",highlights:["B.E. (Civil Engineering) with honors, Government College of Engineering","Authorized structural safety vetting for public and commercial buildings","Member of Indian Roads Congress (IRC) technical research groups","Over 22 years of certified field practice and municipal technical scrutiny"],verificationDetails:{portalName:"ieindia.org (IEI National Registry)",workLimit:"Full Structural & Valuation Authority",classGrade:"Fellow / Chartered Civil Engineer",dateOfIssue:"Lifetime Registration (2002)"}},{id:"iso-9001-quality",title:"ISO 9001:2015 Quality Management Systems Certification",marathiTitle:"आयएसओ ९००१:२०१५ गुणवत्ता व्यवस्थापन प्रणाली प्रमाणपत्र",issuingAuthority:"International Standards Certification & Accreditation Services",shortAuthority:"ISO 9001:2015 QMS",registrationNumber:"QMS/MH/INFRA/2021/89401",validTill:"15th October 2027",category:"Quality & Safety",description:"Standardized operational quality protocol for site execution, concrete mix design testing, asphalt temperature control, safety gear compliance, and documented environmental mitigation across all ongoing worksites.",status:"Active & Verified",sealBadge:"ISO 9001:2015",highlights:["Stringent automated cube-crushing and core-cutter compressive strength tracking","Zero-tolerance safety compliance: mandatory PPE, hard hats, and site barricading","Dedicated on-site field testing mobile laboratory in Jalgaon district","Standardized procurement from BIS-certified steel (TMT Fe 550D) and OPC 53 cement"],verificationDetails:{portalName:"iafcertsearch.org / QMS Portal",workLimit:"Quality Assurance Protocol",classGrade:"Infrastructure Construction Grade",dateOfIssue:"16th October 2021"}},{id:"wrd-irrigation-registration",title:"Water Resources Department (WRD) Registered Irrigation Contractor",marathiTitle:"जलसंपदा विभाग महाराष्ट्र शासन – नोंदणीकृत सिंचन व धरण कंत्राटदार",issuingAuthority:"Tapi Irrigation Development Corporation (TIDC) / WRD Maharashtra",shortAuthority:"WRD Maharashtra / TIDC",registrationNumber:"TIDC/JAL/CONT-CL-1/2014/195",validTill:"31st March 2028",category:"Government Registration",description:"Empanelled for construction of minor irrigation projects, Kolhapur-type (KT) weirs, canal earthen and cement concrete lining, check dams, and flood protective revetment walls in Jalgaon, Dhule, and Nashik river basins.",status:"Active & Verified",sealBadge:"Class 1 (WRD)",highlights:["Empanelled for Tapi & Bori river basin water conservation engineering","Heavy-duty machinery fleet for deep de-silting and automated slip-form canal paving","Proven expertise in subsurface hydraulic cut-off trenches and masonry weir gates","Direct partner in Maharashtra state Jalyukt Shivar & Jal Yukt Abhiyan initiatives"],verificationDetails:{portalName:"wrd.maharashtra.gov.in",workLimit:"Up to ₹ 35.00 Crores",classGrade:"Class 1 (Canals & Hydraulic Structures)",dateOfIssue:"03rd November 2014"}},{id:"statutory-msme-tax",title:"Statutory GSTIN, MSME Udyam & Bank Solvency Clearances",marathiTitle:"जीएसटी नोंदणी, उद्यम एमएसएमई व १० कोटी बँक सॉल्व्हन्सी दाखला",issuingAuthority:"Ministry of MSME & Central Board of Indirect Taxes and Customs (CBIC)",shortAuthority:"Govt. of India & State Bank of India",registrationNumber:"UDYAM-MH-15-0048291 | GST: 27AABCP8921K1Z5",validTill:"Permanent / Annual Bank Solvency Verified",category:"Statutory Compliance",description:"Fully compliant statutory credentials: GSTIN, Central PAN, EPFO, ESIC labor welfare registration, and a verified Banker Solvency Certificate of ₹ 10.00 Crores issued by State Bank of India, Main Branch, Amalner.",status:"Active & Verified",sealBadge:"Statutory & Tax Cleared",highlights:["GSTIN: 27AABCP8921K1Z5 (100% On-time GSTR-1 and GSTR-3B filings)","Bank Solvency Certificate: ₹ 10.00 Cr (State Bank of India Amalner, IFSC: SBIN0000311)","Labor Department Registration: Regulated under Maharashtra Building & Other Construction Workers Act","Clean CIBIL commercial credit rating and active bank guarantee facilities"],verificationDetails:{portalName:"udyamregistration.gov.in & services.gst.gov.in",workLimit:"₹ 10.00 Cr Bank Solvency",classGrade:"Medium Enterprise / Statutory Clearance",dateOfIssue:"Permanent Statutory Reg"}}],$C=({onSelectCert:o})=>{const[t,i]=bt.useState("all"),s=[{id:"all",label:"All Statutory Accreditations (6)"},{id:"Government Registration",label:"Govt. Class 1-A"},{id:"Professional License",label:"Chartered Engineer IEI"},{id:"Quality & Safety",label:"ISO & Material Quality"},{id:"Statutory Compliance",label:"GSTIN & Statutory Tax"}],c=t==="all"?w_:w_.filter(d=>d.category===t);return h.jsx("section",{id:"certifications",className:"py-16 sm:py-24 bg-alabaster border-b border-stone-200/80 bg-cad-grid",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"max-w-3xl mb-10",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gold/40 text-gold-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs",children:[h.jsx(RM,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"Government Statutory Accreditations & Licenses"})]}),h.jsx("h2",{className:"text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight",children:"Class 1-A Registrations & Chartered Engineer Credentials"}),h.jsx("p",{className:"text-sm sm:text-base text-stone-muted mt-2 leading-relaxed",children:"Registered Class 1-A contractor with Government of Maharashtra Public Works Department (PWD), empanelled with Maharashtra Jeevan Pradhikaran, and certified Chartered Civil Engineer (India) with unrestricted statutory bidding limits."})]}),h.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none",children:s.map(d=>h.jsx("button",{onClick:()=>i(d.id),className:`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${t===d.id?"bg-warm-dark text-white shadow-sm":"bg-white/80 text-stone-dark hover:bg-white border border-stone-200/90"}`,children:d.label},d.id))}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:c.map(d=>h.jsxs("div",{id:`cert-card-${d.id}`,className:"bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-stone-200 hover:border-gold/60 p-6 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1",children:[h.jsxs("div",{className:"flex items-start justify-between gap-3 mb-4",children:[h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-br from-charcoal to-obsidian border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:scale-105 transition-transform shadow-md",children:h.jsx(El,{className:"w-6 h-6"})}),h.jsxs("div",{className:"text-right",children:[h.jsx("span",{className:"inline-block bg-gradient-to-r from-gold-badge to-amber-100 text-gold-dark text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-gold/40 shadow-2xs",children:d.sealBadge}),h.jsxs("div",{className:"text-[11px] font-semibold text-emerald-700 flex items-center justify-end gap-1 mt-1",children:[h.jsx(br,{className:"w-3.5 h-3.5 text-emerald-600"}),h.jsx("span",{children:d.status})]})]})]}),h.jsxs("div",{className:"space-y-1.5 mb-4",children:[h.jsx("p",{className:"text-[11px] font-bold text-terracotta uppercase tracking-wider",children:d.shortAuthority}),h.jsx("h3",{className:"text-base sm:text-lg font-bold font-heading text-warm-dark leading-snug group-hover:text-terracotta transition-colors",children:d.title}),d.marathiTitle&&h.jsx("p",{className:"text-xs text-stone-muted leading-normal font-medium",children:d.marathiTitle})]}),h.jsxs("div",{className:"bg-stone-50/80 p-3.5 rounded-xl border border-stone-200 text-xs space-y-2 mb-4",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-stone-muted",children:"Reg No:"}),h.jsx("span",{className:"font-mono font-bold text-warm-dark truncate max-w-[190px]",children:d.registrationNumber})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-stone-muted",children:"Validity:"}),h.jsx("span",{className:"font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 text-[11px]",children:d.validTill})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-stone-muted",children:"Bidding Limit:"}),h.jsx("span",{className:"font-bold text-warm-dark text-gold-dark",children:d.verificationDetails.workLimit})]})]}),h.jsx("p",{className:"text-xs text-stone-dark line-clamp-2 mb-5 leading-relaxed",children:d.description}),h.jsx("div",{className:"space-y-1.5 mb-6 text-xs text-warm-dark",children:d.highlights.slice(0,2).map((f,m)=>h.jsxs("div",{className:"flex items-start gap-1.5",children:[h.jsx(_r,{className:"w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5"}),h.jsx("span",{className:"line-clamp-1 text-stone-dark",children:f})]},m))}),h.jsxs("button",{id:`inspect-cert-${d.id}-btn`,onClick:()=>o(d),className:"w-full py-2.5 px-4 rounded-xl bg-white border border-stone-300 hover:border-gold hover:bg-warm-dark hover:text-white text-warm-dark text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs",children:[h.jsx(U_,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"Inspect Certification Dossier"})]})]},d.id))}),h.jsxs("div",{className:"mt-12 bg-gradient-to-r from-obsidian via-charcoal to-obsidian text-stone-light rounded-2xl p-6 sm:p-8 border border-gold/30 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6",children:[h.jsxs("div",{className:"space-y-2 max-w-2xl",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-wider",children:[h.jsx(a1,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"Tender Scrutiny & Statutory Solvency Clearance"})]}),h.jsx("h3",{className:"text-lg sm:text-xl font-bold font-heading text-white",children:"Official Solvency of ₹ 10.00 Cr & Full Technical Credentials"}),h.jsx("p",{className:"text-xs sm:text-sm text-stone-light leading-relaxed",children:"Complete original registration booklets, State Bank of India solvency certificate, GST tax returns, and EPF/ESIC clearances are available for inspection by Government Tender Committees at our Amalner administrative chambers."})]}),h.jsx("div",{className:"flex items-center gap-3 shrink-0",children:h.jsxs("a",{href:"https://wa.me/918847706600?text=Requesting%20official%20PWD%20Contractor%20Registration%20Dossier%20for%20Tender%20Scrutiny",target:"_blank",rel:"noopener noreferrer",className:"px-5 py-3 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg cursor-pointer",children:[h.jsx("span",{children:"Request Tender Dossier"}),h.jsx(Nl,{className:"w-4 h-4"})]})})]})]})})},e3=()=>h.jsx("section",{id:"machinery",className:"py-16 sm:py-24 bg-white border-b border-stone-200/80",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"max-w-3xl mb-12",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs",children:[h.jsx(z_,{className:"w-3.5 h-3.5 text-terracotta"}),h.jsx("span",{children:"In-House Construction Assets & Testing Rig"})]}),h.jsx("h2",{className:"text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight",children:"Heavy Plant, Machinery & Mobile Testing Fleet"}),h.jsx("p",{className:"text-sm sm:text-base text-stone-muted mt-2 leading-relaxed",children:"100% company-owned plant and modern machinery based in Amalner yard, eliminating equipment rental bottlenecks and ensuring strict adherence to MoRTH and PWD Maharashtra quality specifications."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:R1.map(o=>h.jsxs("div",{className:"bg-white/95 rounded-2xl border-2 border-stone-200 hover:border-gold/50 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1 group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-md border border-terracotta/20",children:o.category}),h.jsxs("span",{className:"text-xs font-mono font-bold bg-warm-dark text-gold-light px-2.5 py-1 rounded-md border border-gold/30 shadow-2xs",children:[o.count," Units Owned"]})]}),h.jsx("h3",{className:"text-base sm:text-lg font-bold font-heading text-warm-dark leading-snug group-hover:text-terracotta transition-colors",children:o.name}),h.jsxs("p",{className:"text-xs font-mono text-stone-muted mt-1 font-medium",children:["Model: ",o.model]}),h.jsxs("div",{className:"mt-4 bg-stone-50 p-3 rounded-xl border border-stone-200/80 flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-stone-muted font-medium",children:"Rated Capacity:"}),h.jsx("span",{className:"font-bold text-warm-dark font-mono text-xs",children:o.capacity})]}),h.jsx("p",{className:"text-xs text-stone-dark mt-3 leading-relaxed",children:o.specs})]}),h.jsxs("div",{className:"pt-3 border-t border-stone-200 flex items-center justify-between text-xs",children:[h.jsxs("span",{className:"text-emerald-700 font-semibold flex items-center gap-1.5 text-[11px]",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),o.status]}),h.jsx("span",{className:"text-stone-muted text-[11px] font-mono",children:"Base: Amalner Central Yard"})]})]},o.id))}),h.jsxs("div",{className:"mt-12 bg-gradient-to-r from-alabaster via-white to-alabaster rounded-2xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-[0_6px_24px_-4px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[h.jsxs("div",{className:"space-y-2 max-w-2xl",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-dark",children:[h.jsx(D_,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"NABL Standard Mobile Quality Testing Lab"})]}),h.jsx("h4",{className:"text-lg sm:text-xl font-bold font-heading text-warm-dark",children:"Rigorous On-Site Material Testing Across Khandesh & Jalgaon"}),h.jsx("p",{className:"text-xs sm:text-sm text-stone-dark leading-relaxed",children:"Every cubic meter of high-grade concrete and every tonne of VG-30/PMB asphalt undergoes automated density, slump, temperature, and 7/28-day compression testing. Zero substandard material tolerated on any PWD, MJP or WRD site."})]}),h.jsx("div",{className:"flex items-center gap-2 shrink-0",children:h.jsxs("div",{className:"px-4 py-2.5 bg-warm-dark text-gold-light text-xs font-bold rounded-xl border border-gold/40 flex items-center gap-2 shadow-md",children:[h.jsx(br,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"100% Quality Audit Passed"})]})})]})]})}),t3=()=>{const[o,t]=bt.useState(!1),i=()=>{const s=`${We.firmName}, ${We.addressLine1}, ${We.addressLine2}, ${We.city}, Tal. ${We.taluka}, Dist. ${We.district}, ${We.state} - ${We.pincode}`;navigator.clipboard.writeText(s),t(!0),setTimeout(()=>t(!1),2500)};return h.jsx("section",{id:"location",className:"py-16 sm:py-24 bg-gradient-to-b from-white via-alabaster to-white border-b border-stone-200/80",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"max-w-3xl mb-12",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs",children:[h.jsx(ca,{className:"w-3.5 h-3.5 text-coral"}),h.jsx("span",{children:"Administrative Headquarters & Geo-Presence"})]}),h.jsx("h2",{className:"text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight",children:"Amalner Central Office & Khandesh Regional Presence"}),h.jsxs("p",{className:"text-sm sm:text-base text-stone-muted mt-2 leading-relaxed",children:["Centrally situated in ",h.jsx("strong",{className:"text-warm-dark font-semibold",children:"Amalner, Jalgaon District (Maharashtra)"})," on Station Road, directly opposite the PWD Sub-Divisional Office. Conveniently accessible within 45 to 70 minutes from Dhule, Jalgaon, Chopda, and Parola."]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",children:[h.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between space-y-6",children:[h.jsxs("div",{className:"bg-white/95 rounded-2xl border-2 border-stone-200 hover:border-gold/40 p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-bold uppercase tracking-wider bg-gold-badge text-gold-dark px-3 py-1 rounded-md border border-gold/30 shadow-2xs",children:"Head Office • मुख्य कार्यालय"}),h.jsx("button",{id:"copy-address-btn",onClick:i,className:"text-xs text-stone-dark hover:text-warm-dark flex items-center gap-1 font-semibold bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg border border-stone-200 transition-colors cursor-pointer shadow-2xs",title:"Copy full address",children:o?h.jsxs(h.Fragment,{children:[h.jsx(FM,{className:"w-3.5 h-3.5 text-emerald-600"}),h.jsx("span",{className:"text-emerald-700 font-bold",children:"Copied!"})]}):h.jsxs(h.Fragment,{children:[h.jsx(YM,{className:"w-3.5 h-3.5 text-stone-muted"}),h.jsx("span",{children:"Copy Address"})]})})]}),h.jsx("h3",{className:"text-lg font-bold font-heading text-warm-dark",children:We.firmName}),h.jsxs("p",{className:"text-xs text-terracotta font-semibold mt-0.5",children:[We.proprietor," • ",We.qualification]}),h.jsxs("div",{className:"mt-4 text-sm text-stone-dark space-y-1.5 leading-relaxed border-t border-stone-200 pt-4",children:[h.jsxs("p",{className:"font-semibold text-warm-dark flex items-start gap-2",children:[h.jsx(lo,{className:"w-4 h-4 text-terracotta shrink-0 mt-0.5"}),h.jsx("span",{children:We.addressLine1})]}),h.jsx("p",{className:"pl-6 text-stone-muted",children:We.addressLine2}),h.jsxs("p",{className:"pl-6 text-warm-dark font-medium",children:[We.city,", Taluka ",We.taluka,","]}),h.jsxs("p",{className:"pl-6 text-warm-dark font-medium",children:[We.district,", ",We.state," – ",h.jsx("span",{className:"font-mono font-bold text-terracotta",children:We.pincode})]})]}),h.jsxs("div",{className:"mt-5 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2",children:[h.jsxs("p",{className:"font-bold text-warm-dark flex items-center gap-1.5",children:[h.jsx(D_,{className:"w-4 h-4 text-gold-dark"}),"Key Amalner Town Landmarks:"]}),h.jsxs("ul",{className:"text-stone-dark space-y-1 pl-5 list-disc text-[11px] leading-relaxed",children:[h.jsx("li",{children:"Directly opposite PWD Sub-Divisional Rest House & Office"}),h.jsx("li",{children:"600 meters from Amalner Railway Station (Western Railway)"}),h.jsx("li",{children:"300 meters from Court Chowk & Pratap College Road"}),h.jsx("li",{children:"400 meters from Bori River High-Level Bridge"})]})]}),h.jsxs("div",{className:"mt-5 flex items-start gap-2.5 text-xs text-stone-muted border-t border-stone-200 pt-4",children:[h.jsx(XM,{className:"w-4 h-4 text-gold-dark shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold text-warm-dark",children:We.timing}),h.jsx("p",{className:"text-stone-muted mt-0.5",children:We.days})]})]})]}),h.jsxs("div",{className:"bg-gradient-to-br from-charcoal to-obsidian text-stone-light rounded-2xl p-6 shadow-xl space-y-4 border border-gold/30",children:[h.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-1.5",children:[h.jsx(br,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"Direct Tender Liaison & Office Inquiries"})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-stone-muted",children:"Direct Mobile / WhatsApp"}),h.jsx("a",{href:`tel:${We.mobiles[0]}`,className:"font-mono font-bold text-sm text-white hover:text-gold-light transition-colors",children:We.mobiles[0]})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-stone-muted",children:"Amalner Office Landline"}),h.jsx("a",{href:`tel:${We.mobiles[0]}`,className:"font-mono font-bold text-sm text-white hover:text-gold-light transition-colors",children:We.mobiles[0]})]}),h.jsxs("div",{className:"sm:col-span-2",children:[h.jsx("p",{className:"text-stone-muted",children:"Official Tender Email"}),h.jsx("a",{href:`mailto:${We.emails[0]}`,className:"font-semibold text-stone-light hover:text-white transition-colors",children:We.emails[0]})]})]}),h.jsxs("div",{className:"pt-2 flex items-center gap-3",children:[h.jsxs("a",{href:`https://wa.me/${We.whatsapp.replace(/[^0-9]/g,"")}?text=Namaskar%20Er.%20Nilesh%20Patil%20Sir%20(NK%20Construction),%20contacting%20regarding%20Amalner%20office%20appointment`,target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md",children:[h.jsx(co,{className:"w-4 h-4"}),h.jsx("span",{children:"WhatsApp Message"})]}),h.jsxs("a",{href:`tel:${We.mobiles[0]}`,className:"flex-1 py-2.5 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md",children:[h.jsx(Tl,{className:"w-4 h-4"}),h.jsx("span",{children:"Call Direct"})]})]})]})]}),h.jsxs("div",{className:"lg:col-span-7 flex flex-col space-y-6",children:[h.jsxs("div",{className:"bg-white/95 rounded-2xl border-2 border-stone-200 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex-1 flex flex-col",children:[h.jsxs("div",{className:"p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between flex-wrap gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),h.jsxs("span",{className:"text-xs font-bold text-warm-dark",children:["Amalner Map Location (Lat: ",We.coordinates.lat,"° N, Lng: ",We.coordinates.lng,"° E)"]})]}),h.jsxs("a",{href:We.googleMapDirectUrl,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-bold text-terracotta hover:text-terracotta-hover flex items-center gap-1 transition-colors",children:[h.jsx("span",{children:"Open in Google Maps"}),h.jsx(Nl,{className:"w-3.5 h-3.5"})]})]}),h.jsxs("div",{className:"relative w-full h-80 sm:h-96 bg-stone-100",children:[h.jsx("iframe",{title:"Office Location in Amalner, Jalgaon",src:We.googleMapEmbedUrl,width:"100%",height:"100%",style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full"}),h.jsx("div",{className:"absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-obsidian/95 backdrop-blur-md text-stone-light p-4 rounded-2xl border border-gold/30 shadow-2xl text-xs",children:h.jsxs("div",{className:"flex items-start gap-2.5",children:[h.jsx(ca,{className:"w-4 h-4 text-terracotta shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold text-white leading-tight",children:"Patil Chambers (NK Construction)"}),h.jsx("p",{className:"text-stone-muted text-[11px] mt-0.5",children:"Station Road, Opp. PWD Sub-Division, Amalner 425401"}),h.jsxs("a",{href:We.googleMapDirectUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-gold-light hover:text-white font-semibold mt-2 text-[11px] transition-colors",children:[h.jsx(f1,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Navigate via Google GPS"})]})]})]})})]})]}),h.jsxs("div",{className:"bg-white/95 p-5 sm:p-6 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark flex items-center gap-1.5",children:[h.jsx(BM,{className:"w-4 h-4 text-terracotta"}),h.jsx("span",{children:"Road Connectivity from Major Khandesh Centers"})]}),h.jsx("span",{className:"text-[11px] font-mono text-stone-muted",children:"Amalner Central Hub"})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:C1.map((s,c)=>h.jsxs("div",{className:"bg-stone-50 p-3 rounded-xl border border-stone-200/90 text-xs hover:border-gold/40 transition-colors",children:[h.jsx("p",{className:"font-bold text-warm-dark truncate",children:s.destination}),h.jsxs("div",{className:"flex items-center justify-between mt-1",children:[h.jsx("span",{className:"font-mono font-bold text-terracotta text-xs",children:s.distance}),h.jsxs("span",{className:"text-[11px] text-stone-muted",children:["~",s.travelTime]})]}),h.jsx("p",{className:"text-[10px] text-stone-muted mt-1 truncate",children:s.route})]},c))})]})]})]})]})})},n3=()=>{const[o,t]=bt.useState("estimator"),[i,s]=bt.useState("asphalt_road"),[c,d]=bt.useState(5),[f,m]=bt.useState({fullName:"",organization:"",phone:"",email:"",workType:"Government PWD Tender BOQ",location:"Amalner / Jalgaon District",message:""}),[g,p]=bt.useState(!1),v=(()=>{switch(i){case"asphalt_road":{const C=c*1.45;return{total:C.toFixed(2),rateText:"₹ 1.45 Cr / Km (2-Lane 7.0m PWD Standard with DBM/BC)",unit:"Km Highway Length",breakdown:[{item:"Earthwork, Subgrade & Granular Sub-base (GSB)",pct:25,amount:(C*.25).toFixed(2)},{item:"Wet Mix Macadam (WMM) & DBM Bituminous Base",pct:40,amount:(C*.4).toFixed(2)},{item:"Bituminous Concrete (BC) & Thermoplastic Markings",pct:20,amount:(C*.2).toFixed(2)},{item:"Cross Drainage Box Culverts & IRC Signages",pct:15,amount:(C*.15).toFixed(2)}]}}case"concrete_road":{const C=c*1.85;return{total:C.toFixed(2),rateText:"₹ 1.85 Cr / Km (M35 Grade Rigid PQC Pavement)",unit:"Km Concrete Road Length",breakdown:[{item:"Excavation, Subgrade Preparation & DLC Layer",pct:22,amount:(C*.22).toFixed(2)},{item:"Pavement Quality Concrete (PQC M35) with Paver",pct:52,amount:(C*.52).toFixed(2)},{item:"Dowels, Tie Bars, Joint Sealing & Curing",pct:14,amount:(C*.14).toFixed(2)},{item:"Shoulders, Covered Drains & Side Kerbs",pct:12,amount:(C*.12).toFixed(2)}]}}case"esr_water_tank":{const y=c*.65;return{total:y.toFixed(2),rateText:"₹ 65 Lakhs per 10-Lakh Litre Capacity (20m Staging)",unit:"Units of 10 Lakh Litres (1 Million Litres)",breakdown:[{item:"Deep Raft / Pile Foundation & Excavation in Basalt",pct:26,amount:(y*.26).toFixed(2)},{item:"RCC Staging Columns, Braces & Mid-Galleries (M30)",pct:36,amount:(y*.36).toFixed(2)},{item:"Intze Tank Container, Dome & Waterproofing Screed",pct:24,amount:(y*.24).toFixed(2)},{item:"Inlet/Outlet Piping, Heavy Valves, Lightning Arrester",pct:14,amount:(y*.14).toFixed(2)}]}}case"rcc_building":{const y=c*1e3*2450/1e7;return{total:y.toFixed(2),rateText:"₹ 2,450 / Sq. Ft. (PWD G+3 Framed Civic Structure)",unit:"Units of 1,000 Sq. Ft. Built-up Plinth Area",breakdown:[{item:"RCC Framed Superstructure (Columns, Beams, Slabs M25)",pct:42,amount:(y*.42).toFixed(2)},{item:"Brickwork Masonry, Plastering & Waterproofing",pct:22,amount:(y*.22).toFixed(2)},{item:"Flooring, Doors, Windows, Paint & Elevators",pct:20,amount:(y*.2).toFixed(2)},{item:"Electrical, Fire-Fighting Hydrants & Plumbing Setup",pct:16,amount:(y*.16).toFixed(2)}]}}}})(),_=y=>{y.preventDefault(),p(!0)};return h.jsx("section",{id:"inquiry",className:"py-16 sm:py-24 bg-alabaster text-warm-dark border-b border-stone-200/80 bg-cad-grid",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"max-w-3xl mb-10",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/20 border border-sand/80 text-warm-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs",children:[h.jsx(Av,{className:"w-3.5 h-3.5 text-terracotta"}),h.jsx("span",{children:"Tender Consultation & Cost Engineering"})]}),h.jsx("h2",{className:"text-2xl sm:text-4xl font-extrabold font-heading text-warm-dark tracking-tight",children:"Maharashtra SSR BOQ Estimator & Tender Inquiries"}),h.jsx("p",{className:"text-sm sm:text-base text-stone-muted mt-2 leading-relaxed",children:"Run preliminary budget calculations based on current Maharashtra Public Works Department (PWD) Schedule of Rates, or submit an official inquiry for joint ventures, tender bidding, and site inspections in Amalner."})]}),h.jsxs("div",{className:"flex items-center gap-2 mb-8 border-b border-stone-200 pb-4 flex-wrap",children:[h.jsxs("button",{id:"tab-select-estimator",onClick:()=>t("estimator"),className:`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${o==="estimator"?"bg-warm-dark text-white shadow-md":"text-stone-dark hover:text-warm-dark hover:bg-white/80"}`,children:[h.jsx(Av,{className:`w-4 h-4 ${o==="estimator"?"text-gold":"text-stone-muted"}`}),h.jsx("span",{children:"Maharashtra SSR Civil Cost Estimator"})]}),h.jsxs("button",{id:"tab-select-inquiry",onClick:()=>t("inquiry"),className:`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${o==="inquiry"?"bg-warm-dark text-white shadow-md":"text-stone-dark hover:text-warm-dark hover:bg-white/80"}`,children:[h.jsx(am,{className:`w-4 h-4 ${o==="inquiry"?"text-gold":"text-stone-muted"}`}),h.jsx("span",{children:"Tender & Work Inquiry Form"})]})]}),o==="estimator"&&h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200",children:[h.jsxs("div",{className:"lg:col-span-5 bg-white/95 p-6 sm:p-7 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-stone-muted mb-2",children:"Select Project Engineering Category"}),h.jsx("div",{className:"grid grid-cols-1 gap-2",children:[{id:"asphalt_road",label:"PWD Asphalt Highway (2-Lane Bituminous)"},{id:"concrete_road",label:"Rigid Concrete Pavement (M35 PQC)"},{id:"esr_water_tank",label:"RCC Elevated Water Reservoir (ESR - JJM)"},{id:"rcc_building",label:"Administrative / Public Building (G+3)"}].map(y=>h.jsx("button",{onClick:()=>s(y.id),className:`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${i===y.id?"bg-stone-100 border-gold/60 text-warm-dark font-bold shadow-2xs":"bg-white border-stone-200 text-stone-dark hover:bg-stone-50"}`,children:y.label},y.id))})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark",children:"Project Magnitude / Quantity"}),h.jsxs("span",{className:"font-mono text-xs font-bold text-warm-dark bg-stone-100 px-3 py-1 rounded-lg border border-stone-200",children:[c," ",v.unit]})]}),h.jsx("input",{type:"range",min:"1",max:"30",step:"1",value:c,onChange:y=>d(Number(y.target.value)),className:"w-full accent-terracotta h-2 bg-stone-200 rounded-lg cursor-pointer"}),h.jsxs("div",{className:"flex justify-between text-[11px] text-stone-muted mt-1 font-mono",children:[h.jsx("span",{children:"1 unit"}),h.jsx("span",{children:"15 units"}),h.jsx("span",{children:"30 units"})]})]}),h.jsxs("div",{className:"p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1 text-stone-dark",children:[h.jsx("p",{className:"font-bold text-warm-dark",children:"Engineering Benchmark Rate:"}),h.jsx("p",{className:"text-terracotta font-mono font-semibold",children:v.rateText}),h.jsx("p",{className:"text-[11px] text-stone-muted pt-1",children:"*Calibrated with Maharashtra PWD Circle Jalgaon / Nashik Standard Schedule of Rates (SSR). Actual tender values vary by lead distance, quarry proximity, and soil strata."})]}),h.jsxs("button",{onClick:()=>{t("inquiry"),m(y=>({...y,message:`Requesting formal BOQ and technical feasibility for ${i.replace("_"," ")} of approx ${c} ${v.unit}. Estimated budget: ₹ ${v.total} Cr.`}))},className:"w-full py-3 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer",children:[h.jsx("span",{children:"Request Detailed BOQ for this Estimate"}),h.jsx(R_,{className:"w-4 h-4"})]})]}),h.jsxs("div",{className:"lg:col-span-7 bg-white/95 p-6 sm:p-8 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between space-y-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 mb-4",children:[h.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-stone-muted",children:"Preliminary Rough Cost Estimate"}),h.jsx("span",{className:"text-[11px] bg-gold-badge text-gold-dark border border-gold/30 px-3 py-0.5 rounded-full font-semibold",children:"Maharashtra PWD SSR Compliant"})]}),h.jsxs("div",{className:"bg-gradient-to-br from-charcoal to-obsidian text-stone-light p-6 rounded-2xl border border-gold/30 shadow-xl flex items-baseline justify-between flex-wrap gap-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-stone-muted uppercase tracking-wider",children:"Estimated Sanction Value"}),h.jsxs("p",{className:"text-3xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-sand to-white mt-1",children:["₹ ",v.total," ",h.jsx("span",{className:"text-lg sm:text-2xl text-stone-muted font-normal",children:"Crores"})]})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("p",{className:"text-xs text-stone-muted",children:"Contractor Capacity"}),h.jsx("p",{className:"text-xs font-bold text-gold-light mt-1 font-mono",children:"Class 1-A (Unlimited Bidding)"})]})]}),h.jsxs("div",{className:"mt-6 space-y-3",children:[h.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark flex items-center gap-1.5",children:[h.jsx(T1,{className:"w-3.5 h-3.5 text-terracotta"}),h.jsx("span",{children:"Component-wise Civil Cost Distribution"})]}),h.jsx("div",{className:"space-y-2",children:v.breakdown.map((y,C)=>h.jsxs("div",{className:"bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex items-center justify-between text-xs gap-3",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("p",{className:"text-warm-dark font-medium",children:y.item}),h.jsx("div",{className:"w-full bg-stone-200 h-1.5 rounded-full mt-2 overflow-hidden",children:h.jsx("div",{className:"bg-gradient-to-r from-terracotta to-coral h-full rounded-full",style:{width:`${y.pct}%`}})})]}),h.jsxs("div",{className:"text-right shrink-0",children:[h.jsxs("p",{className:"font-mono font-bold text-terracotta text-xs",children:["₹ ",y.amount," Cr"]}),h.jsxs("p",{className:"text-[10px] text-stone-muted font-mono",children:[y.pct,"%"]})]})]},C))})]})]}),h.jsxs("div",{className:"pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3 text-xs",children:[h.jsx("span",{className:"text-stone-muted",children:"Discuss tender specifications at our Amalner office with Er. Nilesh R. Patil (NK Construction)"}),h.jsxs("a",{href:`https://wa.me/918847706600?text=Inquiring%20about%20rough%20BOQ%20estimate%20of%20₹%20${v.total}%20Cr%20for%20${encodeURIComponent(i)}`,target:"_blank",rel:"noopener noreferrer",className:"text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1.5",children:[h.jsx(co,{className:"w-4 h-4"}),h.jsx("span",{children:"WhatsApp this Estimate"})]})]})]})]}),o==="inquiry"&&h.jsx("div",{className:"bg-white/95 p-6 sm:p-10 rounded-2xl border-2 border-stone-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] max-w-3xl mx-auto animate-in fade-in duration-200",children:g?h.jsxs("div",{className:"text-center py-8 space-y-4",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm",children:h.jsx(_r,{className:"w-10 h-10"})}),h.jsx("h3",{className:"text-xl font-bold font-heading text-warm-dark",children:"Tender Inquiry Received"}),h.jsxs("p",{className:"text-xs sm:text-sm text-stone-dark max-w-md mx-auto leading-relaxed",children:["Thank you, ",h.jsx("strong",{className:"text-warm-dark",children:f.fullName}),". Our Amalner administrative desk and Er. Nilesh R. Patil (NK Construction) will examine your tender specifications and reply via phone or email shortly."]}),h.jsxs("div",{className:"pt-4 flex items-center justify-center gap-3",children:[h.jsxs("a",{href:`https://wa.me/${We.whatsapp.replace(/[^0-9]/g,"")}?text=Namaskar%20Er.%20Nilesh%20Patil,%20I%20have%20submitted%20a%20tender%20inquiry%20from%20${encodeURIComponent(f.organization||f.fullName)}`,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md",children:[h.jsx(co,{className:"w-4 h-4"}),h.jsx("span",{children:"Follow up on WhatsApp"})]}),h.jsx("button",{onClick:()=>p(!1),className:"px-4 py-2.5 bg-white hover:bg-stone-100 text-warm-dark text-xs font-semibold rounded-xl border border-stone-200 cursor-pointer shadow-2xs",children:"Submit Another Inquiry"})]})]}):h.jsxs("form",{onSubmit:_,className:"space-y-5",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Full Name / Officer Name *"}),h.jsx("input",{type:"text",required:!0,value:f.fullName,onChange:y=>m({...f,fullName:y.target.value}),placeholder:"e.g. Er. Rajesh Patil",className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Department / Organization *"}),h.jsx("input",{type:"text",required:!0,value:f.organization,onChange:y=>m({...f,organization:y.target.value}),placeholder:"e.g. PWD Jalgaon / Municipal Council / Private",className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Contact Mobile Number *"}),h.jsx("input",{type:"tel",required:!0,value:f.phone,onChange:y=>m({...f,phone:y.target.value}),placeholder:"+91 98XXX XXXXX",className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Email Address"}),h.jsx("input",{type:"email",value:f.email,onChange:y=>m({...f,email:y.target.value}),placeholder:"officer@domain.gov.in",className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Inquiry Nature"}),h.jsxs("select",{value:f.workType,onChange:y=>m({...f,workType:y.target.value}),className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all",children:[h.jsx("option",{children:"Government PWD Tender BOQ"}),h.jsx("option",{children:"Jal Jeevan Mission (MJP) Water Scheme"}),h.jsx("option",{children:"RCC Bridge / Culvert Construction"}),h.jsx("option",{children:"Joint Venture (JV) Partnership Proposal"}),h.jsx("option",{children:"Machinery & Plant Rental / Subcontract"}),h.jsx("option",{children:"Structural Vetting & Chartered Stability"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Work Site Location"}),h.jsx("input",{type:"text",value:f.location,onChange:y=>m({...f,location:y.target.value}),placeholder:"Amalner, Jalgaon, Dhule, Chopda...",className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-warm-dark mb-1",children:"Project Scope / Tender Details & Notes"}),h.jsx("textarea",{rows:4,value:f.message,onChange:y=>m({...f,message:y.target.value}),placeholder:"Describe the estimated tender value, technical specifications, or timeline for inspection...",className:"w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-warm-dark placeholder:text-stone-muted focus:outline-hidden focus:border-gold/60 focus:bg-white transition-all"})]}),h.jsxs("div",{className:"flex items-center justify-between pt-2",children:[h.jsx("p",{className:"text-[11px] text-stone-muted",children:"*Directly forwarded to Amalner Head Office desk."}),h.jsxs("button",{type:"submit",className:"px-6 py-3 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer",children:[h.jsx(S1,{className:"w-4 h-4"}),h.jsx("span",{children:"Send Official Inquiry"})]})]})]})})]})})},i3=({onNavigate:o})=>{const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return h.jsx("footer",{className:"bg-obsidian text-stone-light border-t border-charcoal-border pt-16 pb-12 bg-cad-grid-dark",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-charcoal-border",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3.5",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-warm-dark border border-gold/40 flex items-center justify-center text-gold shadow-md",children:h.jsx(lo,{className:"w-6 h-6 text-gold"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"font-heading font-bold text-lg text-white tracking-tight",children:We.firmName}),h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold-light border border-gold/30 px-2 py-0.5 rounded",children:"PWD Class 1-A"})]}),h.jsxs("p",{className:"text-xs text-gold-light font-medium mt-0.5",children:[We.proprietor," • ",We.qualification]})]})]}),h.jsx("p",{className:"text-xs text-stone-light leading-relaxed pr-4 font-normal",children:"Registered Class 1-A Government Contractor with Public Works Department (PWD) Maharashtra, MJP Water Works, and WRD Irrigation. Delivering premier highway, bridge, and water supply infrastructure across Amalner, Jalgaon, and Khandesh region since 2002."}),h.jsxs("div",{className:"p-3.5 bg-charcoal-card rounded-xl border border-charcoal-border text-xs space-y-1.5 shadow-inner",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-gold-light font-bold text-xs",children:[h.jsx(br,{className:"w-4 h-4 text-gold"}),h.jsx("span",{children:"Statutory Registrations & Licenses"})]}),h.jsxs("p",{className:"text-stone-light text-[11px]",children:["PWD License: ",h.jsx("strong",{className:"text-white font-mono",children:We.regNumber})," (Class 1-A Unlimited)"]}),h.jsxs("p",{className:"text-stone-muted text-[11px] font-mono",children:["GSTIN: ",h.jsx("strong",{className:"text-stone-light",children:"27AABCP8921K1Z5"})," | MSME: ",h.jsx("strong",{className:"text-stone-light",children:"UDYAM-MH-15-0048291"})]})]})]}),h.jsxs("div",{className:"lg:col-span-3 space-y-3",children:[h.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-gold-light",children:"Engineering Portfolio"}),h.jsxs("ul",{className:"space-y-2 text-xs",children:[h.jsx("li",{children:h.jsx("button",{onClick:()=>o("projects"),className:"hover:text-gold-light transition-colors text-stone-muted cursor-pointer",children:"Past Project Galleries & Executed Works"})}),h.jsx("li",{children:h.jsx("button",{onClick:()=>o("certifications"),className:"hover:text-gold-light transition-colors text-stone-muted cursor-pointer",children:"Class 1-A Licenses & IEI Accreditation"})}),h.jsx("li",{children:h.jsx("button",{onClick:()=>o("machinery"),className:"hover:text-gold-light transition-colors text-stone-muted cursor-pointer",children:"Machinery Fleet & NABL Mobile Lab"})}),h.jsx("li",{children:h.jsx("button",{onClick:()=>o("location"),className:"hover:text-gold-light transition-colors text-stone-muted cursor-pointer",children:"Amalner Office & Regional Routes"})}),h.jsx("li",{children:h.jsx("button",{onClick:()=>o("inquiry"),className:"hover:text-gold-light transition-colors text-stone-muted cursor-pointer",children:"Maharashtra SSR BOQ Estimator"})})]})]}),h.jsxs("div",{className:"lg:col-span-4 space-y-3",children:[h.jsxs("p",{className:"text-xs font-bold uppercase tracking-wider text-gold-light flex items-center gap-1.5",children:[h.jsx(ca,{className:"w-4 h-4 text-coral"}),h.jsx("span",{children:"Amalner Central HQ (Dist. Jalgaon)"})]}),h.jsxs("div",{className:"text-xs text-stone-light space-y-1 leading-relaxed bg-charcoal-card p-3.5 rounded-xl border border-charcoal-border",children:[h.jsx("p",{className:"font-semibold text-white",children:We.addressLine1}),h.jsx("p",{className:"text-stone-muted",children:We.addressLine2}),h.jsxs("p",{children:[We.city,", Taluka ",We.taluka,", Dist. ",We.district,", ",We.state," – ",h.jsx("span",{className:"font-mono text-gold",children:We.pincode})]}),h.jsxs("p",{className:"text-gold-light pt-1 text-[11px] font-medium",children:["Landmark: ",We.landmark]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1",children:[h.jsxs("a",{href:`tel:${We.mobiles[0]}`,className:"flex items-center gap-2 p-2 rounded-xl bg-charcoal border border-charcoal-border hover:border-gold text-stone-light hover:text-white transition-colors cursor-pointer",children:[h.jsx(Tl,{className:"w-3.5 h-3.5 text-gold shrink-0"}),h.jsx("span",{className:"truncate font-mono",children:We.mobiles[0]})]}),h.jsxs("a",{href:`https://wa.me/${We.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-white transition-colors cursor-pointer",children:[h.jsx(co,{className:"w-3.5 h-3.5 text-[#25D366] shrink-0"}),h.jsx("span",{children:"WhatsApp Desk"})]})]})]})]}),h.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-muted",children:[h.jsxs("div",{children:[h.jsxs("p",{children:["© ",new Date().getFullYear()," ",We.firmName,". All Rights Reserved."]}),h.jsx("p",{className:"text-[11px] text-stone-muted mt-0.5",children:"अमळनेर, खान्देश व संपूर्ण महाराष्ट्रात पायाभूत सुविधांच्या बांधकामात २२ वर्षांची अविरत सेवा."})]}),h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsxs("a",{href:We.googleMapDirectUrl,target:"_blank",rel:"noopener noreferrer",className:"text-gold-light hover:text-white flex items-center gap-1 cursor-pointer transition-colors",children:[h.jsx("span",{children:"Google Maps GPS Navigation"}),h.jsx(Nl,{className:"w-3 h-3"})]}),h.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-charcoal hover:bg-charcoal-card text-gold-light border border-charcoal-border hover:border-gold/40 transition-colors cursor-pointer shadow-xs",title:"Back to Top",children:h.jsx(AM,{className:"w-4 h-4"})})]})]})]})})},a3=({project:o,onClose:t})=>{const[i,s]=bt.useState(0),[c,d]=bt.useState(!1);if(!o)return null;const f=[o.imageUrl,...o.galleryImages||[]],m=f[i]||o.imageUrl;return h.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-obsidian/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6",children:h.jsxs("div",{className:"relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-stone-200 overflow-hidden my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-200",onClick:g=>g.stopPropagation(),children:[h.jsxs("div",{className:"bg-gradient-to-r from-obsidian via-charcoal to-obsidian text-white p-5 sm:p-6 flex items-start justify-between border-b border-charcoal-border",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-2",children:[h.jsxs("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-terracotta text-white px-2.5 py-0.5 rounded-md",children:[o.category.toUpperCase()," INFRASTRUCTURE"]}),h.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-md font-semibold ${o.status==="Completed"?"bg-emerald-950 text-emerald-300 border border-emerald-700/50":"bg-amber-950 text-amber-300 border border-amber-700/50"}`,children:o.status==="Completed"?"✓ Commissioned & Handed Over":"⚙ In Active Execution"}),h.jsxs("span",{className:"text-xs text-stone-muted font-mono",children:["Completion: ",o.completionYear]})]}),h.jsx("h3",{className:"text-lg sm:text-2xl font-bold font-heading text-white",children:o.title}),o.marathiTitle&&h.jsx("p",{className:"text-sm text-gold-light mt-0.5 font-medium",children:o.marathiTitle})]}),h.jsx("button",{id:"close-project-modal-btn",onClick:t,className:"p-2 rounded-xl bg-charcoal hover:bg-charcoal-card text-stone-light hover:text-white transition-colors shrink-0 ml-2 border border-charcoal-border cursor-pointer","aria-label":"Close modal",children:h.jsx(Gu,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto bg-alabaster",children:[h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"relative h-64 sm:h-96 rounded-2xl overflow-hidden bg-warm-dark border-2 border-stone-200 shadow-md",children:[o.beforeAfter&&c?h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 h-full",children:[h.jsxs("div",{className:"relative h-full border-r border-stone-300",children:[h.jsx("img",{src:o.beforeAfter.before,alt:"Before Work",className:"w-full h-full object-cover"}),h.jsx("div",{className:"absolute bottom-3 left-3 bg-terracotta/95 text-white text-xs px-2.5 py-1 rounded-md font-semibold backdrop-blur-xs",children:"Before Commencement"})]}),h.jsxs("div",{className:"relative h-full",children:[h.jsx("img",{src:o.beforeAfter.after,alt:"After Completion",className:"w-full h-full object-cover"}),h.jsx("div",{className:"absolute bottom-3 left-3 bg-obsidian/95 text-gold-light text-xs px-2.5 py-1 rounded-md font-semibold backdrop-blur-xs border border-white/10",children:"After PWD Handover"})]})]}):h.jsx("img",{src:m,alt:o.title,className:"w-full h-full object-cover"}),h.jsx("div",{className:"absolute top-3 left-3 flex items-center gap-2",children:h.jsxs("span",{className:"bg-obsidian/95 backdrop-blur-md text-gold-light text-xs font-bold px-3 py-1 rounded-lg border border-gold/40 flex items-center gap-1 shadow-lg font-mono",children:[h.jsx(L_,{className:"w-3.5 h-3.5 text-gold"}),"Sanction: ",o.tenderCost]})}),o.beforeAfter&&h.jsxs("button",{id:"toggle-before-after-btn",onClick:()=>d(!c),className:"absolute bottom-3 right-3 bg-white/95 hover:bg-white text-warm-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transition-all flex items-center gap-1.5 cursor-pointer border border-stone-200",children:[h.jsx(B_,{className:"w-3.5 h-3.5 text-terracotta"}),h.jsx("span",{children:c?"Show Primary View":"Compare Before / After"})]})]}),f.length>1&&!c&&h.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-1",children:f.map((g,p)=>h.jsx("button",{onClick:()=>s(p),className:`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${i===p?"border-terracotta scale-105 shadow-md":"border-stone-300 opacity-70 hover:opacity-100"}`,children:h.jsx("img",{src:g,alt:`View ${p+1}`,className:"w-full h-full object-cover"})},p))})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-2xs",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] uppercase font-bold text-stone-muted",children:"Client Authority"}),h.jsx("p",{className:"text-xs sm:text-sm font-bold text-warm-dark mt-0.5",children:o.department})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] uppercase font-bold text-stone-muted",children:"Site Location"}),h.jsxs("p",{className:"text-xs sm:text-sm font-bold text-warm-dark mt-0.5 flex items-center gap-1",children:[h.jsx(ca,{className:"w-3.5 h-3.5 text-terracotta shrink-0"}),o.location]})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] uppercase font-bold text-stone-muted",children:"Sanction Value"}),h.jsx("p",{className:"text-xs sm:text-sm font-bold text-terracotta mt-0.5 font-mono",children:o.tenderCost})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] uppercase font-bold text-stone-muted",children:"Completion Cert Ref"}),h.jsx("p",{className:"text-xs sm:text-sm font-bold text-warm-dark mt-0.5 font-mono truncate",title:o.completionCertNumber,children:o.completionCertNumber})]})]}),h.jsxs("div",{children:[h.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark mb-3 flex items-center gap-1.5",children:[h.jsx(O_,{className:"w-4 h-4 text-terracotta"}),h.jsx("span",{children:"Technical Engineering Specifications"})]}),h.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:o.keySpecs.map((g,p)=>h.jsxs("div",{className:"bg-white p-3 rounded-xl border border-stone-200 shadow-2xs",children:[h.jsx("p",{className:"text-[11px] font-semibold text-stone-muted",children:g.label}),h.jsx("p",{className:"text-xs sm:text-sm font-bold text-warm-dark mt-0.5",children:g.value})]},p))})]}),h.jsxs("div",{children:[h.jsxs("h4",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark mb-2.5 flex items-center gap-1.5",children:[h.jsx(_r,{className:"w-4 h-4 text-emerald-600"}),h.jsx("span",{children:"Scope of Civil Works Executed"})]}),h.jsx("ul",{className:"space-y-2",children:o.scopeOfWork.map((g,p)=>h.jsxs("li",{className:"text-xs sm:text-sm text-stone-dark flex items-start gap-2.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"}),h.jsx("span",{children:g})]},p))})]}),h.jsxs("div",{className:"p-4 bg-white rounded-xl border border-stone-200",children:[h.jsx("h5",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-muted mb-1",children:"Project Engineering Overview"}),h.jsx("p",{className:"text-xs sm:text-sm text-stone-dark leading-relaxed",children:o.description})]})]}),h.jsxs("div",{className:"bg-white px-6 py-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3",children:[h.jsxs("div",{className:"text-xs text-stone-muted",children:["Executing Agency: ",h.jsx("strong",{className:"text-warm-dark",children:"Er. Nilesh R. Patil • NK Construction (Amalner)"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:t,className:"px-4 py-2 text-xs font-semibold text-stone-dark hover:text-warm-dark hover:bg-stone-100 rounded-xl transition-colors cursor-pointer border border-stone-200",children:"Close"}),h.jsxs("a",{href:`https://wa.me/918847706600?text=Inquiring%20about%20similar%20project%20like%20${encodeURIComponent(o.title)}`,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-md",children:[h.jsx("span",{children:"Consult On Similar Project"}),h.jsx(Nl,{className:"w-3.5 h-3.5"})]})]})]})]})})},r3=({cert:o,onClose:t})=>o?h.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-obsidian/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 sm:items-center",children:h.jsxs("div",{className:"relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border-2 border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200",onClick:i=>i.stopPropagation(),children:[h.jsxs("div",{className:"bg-gradient-to-r from-obsidian via-charcoal to-obsidian text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden border-b border-charcoal-border",children:[h.jsx("div",{className:"absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-gold/10 rounded-full blur-2xl pointer-events-none"}),h.jsxs("div",{className:"flex items-start gap-4",children:[h.jsx("div",{className:"w-14 h-14 rounded-2xl bg-charcoal border border-gold/40 flex items-center justify-center text-gold shrink-0 shadow-md",children:h.jsx(El,{className:"w-8 h-8"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-1",children:[h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-gold-badge text-gold-dark px-2.5 py-0.5 rounded-md border border-gold/40",children:o.sealBadge}),h.jsxs("span",{className:"text-xs font-semibold text-emerald-400 flex items-center gap-1",children:[h.jsx(br,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:o.status})]})]}),h.jsx("h3",{className:"text-xl sm:text-2xl font-bold font-heading text-white",children:o.title}),o.marathiTitle&&h.jsx("p",{className:"text-sm text-gold-light mt-0.5 font-medium",children:o.marathiTitle})]})]}),h.jsx("button",{id:"close-cert-modal-btn",onClick:t,className:"p-2 rounded-xl bg-charcoal hover:bg-charcoal-card text-stone-light hover:text-white transition-colors border border-charcoal-border cursor-pointer","aria-label":"Close dialog",children:h.jsx(Gu,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"p-6 sm:p-8 space-y-6 bg-alabaster",children:[h.jsxs("div",{className:"p-5 rounded-2xl bg-white border-2 border-stone-200 shadow-sm relative",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-muted",children:"Issuing Government Authority"}),h.jsxs("p",{className:"font-bold text-warm-dark mt-1 flex items-center gap-1.5",children:[h.jsx(UM,{className:"w-4 h-4 text-terracotta shrink-0"}),h.jsx("span",{children:o.issuingAuthority})]})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-muted",children:"Official Registration / License No."}),h.jsx("p",{className:"font-mono font-bold text-warm-dark bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-lg mt-1 inline-block text-xs",children:o.registrationNumber})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-muted",children:"Current Validity & Status"}),h.jsxs("p",{className:"font-semibold text-emerald-700 mt-1 flex items-center gap-1.5 text-xs",children:[h.jsx(PM,{className:"w-4 h-4 text-emerald-600 shrink-0"}),h.jsx("span",{children:o.validTill})]})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-muted",children:"Statutory Bidding Limit"}),h.jsxs("p",{className:"font-bold text-gold-dark mt-1 flex items-center gap-1.5 text-xs",children:[h.jsx(O_,{className:"w-4 h-4 text-gold shrink-0"}),h.jsx("span",{children:o.verificationDetails.workLimit})]})]})]}),h.jsxs("div",{className:"mt-4 pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs text-stone-muted",children:[h.jsx(U_,{className:"w-4 h-4 text-terracotta"}),h.jsxs("span",{children:["Verification Source: ",h.jsx("strong",{className:"text-warm-dark",children:o.verificationDetails.portalName})]})]}),h.jsx("div",{className:"text-right",children:h.jsx("span",{className:"text-[10px] font-mono bg-gold-badge text-gold-dark px-3 py-1 rounded-full border border-gold/40 font-bold shadow-2xs",children:"GOV SEAL VERIFIED • STATUTORY COMPLIANT"})})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark mb-2",children:"Scope of Statutory Authorization & Competency"}),h.jsx("p",{className:"text-stone-dark text-xs sm:text-sm leading-relaxed",children:o.description})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-warm-dark mb-3",children:"Verified Technical Standards & Privileges"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:o.highlights.map((i,s)=>h.jsxs("div",{className:"flex items-start gap-2 text-xs sm:text-sm text-stone-dark bg-white p-3 rounded-xl border border-stone-200 shadow-2xs",children:[h.jsx(_r,{className:"w-4 h-4 text-emerald-600 shrink-0 mt-0.5"}),h.jsx("span",{children:i})]},s))})]}),h.jsxs("div",{className:"p-4 bg-white rounded-2xl border-2 border-stone-200 text-xs text-stone-dark flex items-start gap-3 shadow-sm",children:[h.jsx(br,{className:"w-5 h-5 text-gold shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-bold text-warm-dark",children:"Official Verification Assurance for Government Tender Committees"}),h.jsx("p",{className:"mt-0.5 text-stone-muted leading-relaxed",children:"Original license booklet, bank solvency papers, and attested copies are maintained at our Amalner Head Office (Station Road, Opp. PWD Rest House). Scrutinized and accepted in Mahatenders e-Procurement System."})]})]})]}),h.jsxs("div",{className:"bg-white px-6 py-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3",children:[h.jsxs("button",{id:"print-cert-btn",onClick:()=>window.print(),className:"inline-flex items-center gap-2 text-xs font-semibold text-stone-dark hover:text-warm-dark px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer shadow-2xs",children:[h.jsx(x1,{className:"w-4 h-4 text-stone-muted"}),h.jsx("span",{children:"Print Dossier Summary"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{id:"close-cert-btn",onClick:t,className:"px-4 py-2 text-xs font-semibold text-stone-dark hover:text-warm-dark hover:bg-stone-100 rounded-xl transition-colors cursor-pointer border border-stone-200",children:"Close"}),h.jsxs("a",{href:`https://wa.me/918847706600?text=Inquiring%20about%20license%20and%20tender%20verification%20for%20${encodeURIComponent(o.title)}`,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-hover hover:to-terracotta rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-md",children:[h.jsx("span",{children:"Request Verified Copy"}),h.jsx(Nl,{className:"w-3.5 h-3.5"})]})]})]})]})}):null;function s3(){const[o,t]=bt.useState(null),[i,s]=bt.useState(null),[c,d]=bt.useState("hero");bt.useEffect(()=>{const m=()=>{const g=["hero","projects","certifications","machinery","location","inquiry"],p=window.scrollY+200;for(const S of g){const v=document.getElementById(S);if(v){const _=v.offsetTop,y=v.offsetHeight;if(p>=_&&p<_+y){d(S);break}}}};return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]);const f=m=>{d(m);const g=document.getElementById(m);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};return h.jsxs("div",{className:"min-h-screen bg-white text-warm-dark flex flex-col selection:bg-terracotta selection:text-white font-sans antialiased",children:[h.jsx(D1,{onNavigate:f,activeSection:c}),h.jsxs("main",{className:"flex-1",children:[h.jsx(KC,{onExploreProjects:()=>f("projects"),onExploreCerts:()=>f("certifications"),onExploreLocation:()=>f("location"),onExploreInquiry:()=>f("inquiry")}),h.jsx(JC,{onSelectProject:m=>t(m)}),h.jsx($C,{onSelectCert:m=>s(m)}),h.jsx(e3,{}),h.jsx(t3,{}),h.jsx(n3,{})]}),h.jsx(i3,{onNavigate:f}),h.jsxs("div",{className:"fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end",children:[h.jsxs("a",{href:We.googleMapDirectUrl,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-full bg-white hover:bg-sand/20 text-warm-dark border border-sand shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center relative group cursor-pointer",title:"Directions to Amalner Office","aria-label":"Directions to Amalner Office",children:[h.jsx(ca,{className:"w-5 h-5 text-terracotta shrink-0"}),h.jsxs("span",{className:"absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-warm-dark text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center border border-white/10 backdrop-blur-sm",children:["Amalner Office",h.jsx("span",{className:"absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-warm-dark"})]})]}),h.jsxs("a",{href:`tel:${We.mobiles[0]}`,className:"w-12 h-12 rounded-full bg-terracotta hover:bg-terracotta-hover text-white shadow-lg hover:shadow-terracotta/30 hover:scale-105 transition-all flex items-center justify-center relative group cursor-pointer",title:`Call Er. Nilesh Patil: ${We.mobiles[0]}`,"aria-label":`Call Er. Nilesh Patil: ${We.mobiles[0]}`,children:[h.jsx(Tl,{className:"w-5 h-5 shrink-0"}),h.jsxs("span",{className:"absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-warm-dark text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center border border-white/10 backdrop-blur-sm",children:["Call: ",We.mobiles[0],h.jsx("span",{className:"absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-warm-dark"})]})]}),h.jsxs("a",{href:`https://wa.me/${We.whatsapp.replace(/[^0-9]/g,"")}?text=Namaskar%20Er.%20Nilesh%20Patil%20Sir%20(NK%20Construction),%20contacting%20you%20via%20website`,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center relative group cursor-pointer",title:"Direct WhatsApp with Er. Nilesh R. Patil (NK Construction)","aria-label":"Direct WhatsApp with Er. Nilesh R. Patil",children:[h.jsx(co,{className:"w-5 h-5 shrink-0"}),h.jsxs("span",{className:"absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-warm-dark text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center border border-white/10 backdrop-blur-sm",children:["WhatsApp Er. Nilesh Patil",h.jsx("span",{className:"absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-warm-dark"})]})]})]}),h.jsx(a3,{project:o,onClose:()=>t(null)}),h.jsx(r3,{cert:i,onClose:()=>s(null)})]})}gM.createRoot(document.getElementById("root")).render(h.jsx(bt.StrictMode,{children:h.jsx(s3,{})}));
