(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function jS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var od={exports:{}},Oo={};var Hg;function ZS(){if(Hg)return Oo;Hg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Gg;function KS(){return Gg||(Gg=1,od.exports=ZS()),od.exports}var N=KS(),ld={exports:{}},at={};var Vg;function QS(){if(Vg)return at;Vg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,M={};function S(U,W,xe){this.props=U,this.context=W,this.refs=M,this.updater=xe||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=S.prototype;function B(U,W,xe){this.props=U,this.context=W,this.refs=M,this.updater=xe||E}var C=B.prototype=new P;C.constructor=B,L(C,S.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function D(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function A(U,W,xe){var Ee=xe.ref;return{$$typeof:s,type:U,key:W,ref:Ee!==void 0?Ee:null,props:xe}}function G(U,W){return A(U.type,W,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function Z(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return W[xe]})}var ue=/\/+/g;function se(U,W){return typeof U=="object"&&U!==null&&U.key!=null?Z(""+U.key):W.toString(36)}function K(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(D,D):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,W,xe,Ee,Ae){var $=typeof U;($==="undefined"||$==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch($){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0;break;case v:return ye=U._init,F(ye(U._payload),W,xe,Ee,Ae)}}if(ye)return Ae=Ae(U),ye=Ee===""?"."+se(U,0):Ee,O(Ae)?(xe="",ye!=null&&(xe=ye.replace(ue,"$&/")+"/"),F(Ae,W,xe,"",function(tt){return tt})):Ae!=null&&(V(Ae)&&(Ae=G(Ae,xe+(Ae.key==null||U&&U.key===Ae.key?"":(""+Ae.key).replace(ue,"$&/")+"/")+ye)),W.push(Ae)),1;ye=0;var be=Ee===""?".":Ee+":";if(O(U))for(var He=0;He<U.length;He++)Ee=U[He],$=be+se(Ee,He),ye+=F(Ee,W,xe,$,Ae);else if(He=y(U),typeof He=="function")for(U=He.call(U),He=0;!(Ee=U.next()).done;)Ee=Ee.value,$=be+se(Ee,He++),ye+=F(Ee,W,xe,$,Ae);else if($==="object"){if(typeof U.then=="function")return F(K(U),W,xe,Ee,Ae);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return ye}function k(U,W,xe){if(U==null)return U;var Ee=[],Ae=0;return F(U,Ee,"","",function($){return W.call(xe,$,Ae++)}),Ee}function ee(U){if(U._status===-1){var W=U._result;W=W(),W.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=W)}if(U._status===1)return U._result.default;throw U._result}var he=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}},de={map:k,forEach:function(U,W,xe){k(U,function(){W.apply(this,arguments)},xe)},count:function(U){var W=0;return k(U,function(){W++}),W},toArray:function(U){return k(U,function(W){return W})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return at.Activity=x,at.Children=de,at.Component=S,at.Fragment=i,at.Profiler=l,at.PureComponent=B,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(U,W,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ee=L({},U.props),Ae=U.key;if(W!=null)for($ in W.key!==void 0&&(Ae=""+W.key),W)!T.call(W,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&W.ref===void 0||(Ee[$]=W[$]);var $=arguments.length-2;if($===1)Ee.children=xe;else if(1<$){for(var ye=Array($),be=0;be<$;be++)ye[be]=arguments[be+2];Ee.children=ye}return A(U.type,Ae,Ee)},at.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},at.createElement=function(U,W,xe){var Ee,Ae={},$=null;if(W!=null)for(Ee in W.key!==void 0&&($=""+W.key),W)T.call(W,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Ae[Ee]=W[Ee]);var ye=arguments.length-2;if(ye===1)Ae.children=xe;else if(1<ye){for(var be=Array(ye),He=0;He<ye;He++)be[He]=arguments[He+2];Ae.children=be}if(U&&U.defaultProps)for(Ee in ye=U.defaultProps,ye)Ae[Ee]===void 0&&(Ae[Ee]=ye[Ee]);return A(U,$,Ae)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:p,render:U}},at.isValidElement=V,at.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ee}},at.memo=function(U,W){return{$$typeof:h,type:U,compare:W===void 0?null:W}},at.startTransition=function(U){var W=z.T,xe={};z.T=xe;try{var Ee=U(),Ae=z.S;Ae!==null&&Ae(xe,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(D,he)}catch($){he($)}finally{W!==null&&xe.types!==null&&(W.types=xe.types),z.T=W}},at.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},at.use=function(U){return z.H.use(U)},at.useActionState=function(U,W,xe){return z.H.useActionState(U,W,xe)},at.useCallback=function(U,W){return z.H.useCallback(U,W)},at.useContext=function(U){return z.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,W){return z.H.useDeferredValue(U,W)},at.useEffect=function(U,W){return z.H.useEffect(U,W)},at.useEffectEvent=function(U){return z.H.useEffectEvent(U)},at.useId=function(){return z.H.useId()},at.useImperativeHandle=function(U,W,xe){return z.H.useImperativeHandle(U,W,xe)},at.useInsertionEffect=function(U,W){return z.H.useInsertionEffect(U,W)},at.useLayoutEffect=function(U,W){return z.H.useLayoutEffect(U,W)},at.useMemo=function(U,W){return z.H.useMemo(U,W)},at.useOptimistic=function(U,W){return z.H.useOptimistic(U,W)},at.useReducer=function(U,W,xe){return z.H.useReducer(U,W,xe)},at.useRef=function(U){return z.H.useRef(U)},at.useState=function(U){return z.H.useState(U)},at.useSyncExternalStore=function(U,W,xe){return z.H.useSyncExternalStore(U,W,xe)},at.useTransition=function(){return z.H.useTransition()},at.version="19.2.8",at}var kg;function Hh(){return kg||(kg=1,ld.exports=QS()),ld.exports}var ft=Hh();const Vi=jS(ft);var cd={exports:{}},Po={},ud={exports:{}},fd={};var Xg;function JS(){return Xg||(Xg=1,(function(s){function e(F,k){var ee=F.length;F.push(k);e:for(;0<ee;){var he=ee-1>>>1,de=F[he];if(0<l(de,k))F[he]=k,F[ee]=de,ee=he;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var k=F[0],ee=F.pop();if(ee!==k){F[0]=ee;e:for(var he=0,de=F.length,U=de>>>1;he<U;){var W=2*(he+1)-1,xe=F[W],Ee=W+1,Ae=F[Ee];if(0>l(xe,ee))Ee<de&&0>l(Ae,xe)?(F[he]=Ae,F[Ee]=ee,he=Ee):(F[he]=xe,F[W]=ee,he=W);else if(Ee<de&&0>l(Ae,ee))F[he]=Ae,F[Ee]=ee,he=Ee;else break e}}return k}function l(F,k){var ee=F.sortIndex-k.sortIndex;return ee!==0?ee:F.id-k.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,x=null,g=3,y=!1,E=!1,L=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var k=i(h);k!==null;){if(k.callback===null)r(h);else if(k.startTime<=F)r(h),k.sortIndex=k.expirationTime,e(m,k);else break;k=i(h)}}function O(F){if(L=!1,C(F),!E)if(i(m)!==null)E=!0,D||(D=!0,Z());else{var k=i(h);k!==null&&K(O,k.startTime-F)}}var D=!1,z=-1,T=5,A=-1;function G(){return M?!0:!(s.unstable_now()-A<T)}function V(){if(M=!1,D){var F=s.unstable_now();A=F;var k=!0;try{e:{E=!1,L&&(L=!1,P(z),z=-1),y=!0;var ee=g;try{t:{for(C(F),x=i(m);x!==null&&!(x.expirationTime>F&&G());){var he=x.callback;if(typeof he=="function"){x.callback=null,g=x.priorityLevel;var de=he(x.expirationTime<=F);if(F=s.unstable_now(),typeof de=="function"){x.callback=de,C(F),k=!0;break t}x===i(m)&&r(m),C(F)}else r(m);x=i(m)}if(x!==null)k=!0;else{var U=i(h);U!==null&&K(O,U.startTime-F),k=!1}}break e}finally{x=null,g=ee,y=!1}k=void 0}}finally{k?Z():D=!1}}}var Z;if(typeof B=="function")Z=function(){B(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,se=ue.port2;ue.port1.onmessage=V,Z=function(){se.postMessage(null)}}else Z=function(){S(V,0)};function K(F,k){z=S(function(){F(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F||(T=0<F?Math.floor(1e3/F):5)},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(F){switch(g){case 1:case 2:case 3:var k=3;break;default:k=g}var ee=g;g=k;try{return F()}finally{g=ee}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=g;g=F;try{return k()}finally{g=ee}},s.unstable_scheduleCallback=function(F,k,ee){var he=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?he+ee:he):ee=he,F){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,F={id:v++,callback:k,priorityLevel:F,startTime:ee,expirationTime:de,sortIndex:-1},ee>he?(F.sortIndex=ee,e(h,F),i(m)===null&&F===i(h)&&(L?(P(z),z=-1):L=!0,K(O,ee-he))):(F.sortIndex=de,e(m,F),E||y||(E=!0,D||(D=!0,Z()))),F},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(F){var k=g;return function(){var ee=g;g=k;try{return F.apply(this,arguments)}finally{g=ee}}}})(fd)),fd}var Wg;function $S(){return Wg||(Wg=1,ud.exports=JS()),ud.exports}var dd={exports:{}},Un={};var qg;function ey(){if(qg)return Un;qg=1;var s=Hh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},Un.flushSync=function(m){var h=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=v,r.d.f()}},Un.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Un.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,h){return m(h)},Un.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.8",Un}var Yg;function ty(){if(Yg)return dd.exports;Yg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch{}}return s(),dd.exports=ey(),dd.exports}var jg;function ny(){if(jg)return Po;jg=1;var s=$S(),e=Hh(),i=ty();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case D:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case B:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:se(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return se(t(n))}catch{}}return null}var K=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},he=[],de=-1;function U(t){return{current:t}}function W(t){0>de||(t.current=he[de],he[de]=null,de--)}function xe(t,n){de++,he[de]=t.current,t.current=n}var Ee=U(null),Ae=U(null),$=U(null),ye=U(null);function be(t,n){switch(xe($,n),xe(Ae,t),xe(Ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cg(n),t=ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Ee),xe(Ee,t)}function He(){W(Ee),W(Ae),W($)}function tt(t){t.memoizedState!==null&&xe(ye,t);var n=Ee.current,a=ug(n,t.type);n!==a&&(xe(Ae,t),xe(Ee,a))}function Ke(t){Ae.current===t&&(W(Ee),W(Ae)),ye.current===t&&(W(ye),No._currentValue=ee)}var qt,ut;function vt(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+ut}var xt=!1;function dt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(fe){var ce=fe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(fe){ce=fe}t.call(Me.prototype)}}else{try{throw Error()}catch(fe){ce=fe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(fe){if(fe&&ce&&typeof fe.stack=="string")return[fe.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),ie=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var _e=`
`+H[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function en(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,ln=s.unstable_scheduleCallback,Wt=s.unstable_cancelCallback,nn=s.unstable_shouldYield,j=s.unstable_requestPaint,Ft=s.unstable_now,Ct=s.unstable_getCurrentPriorityLevel,I=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,oe=s.unstable_LowPriority,me=s.unstable_IdlePriority,we=s.log,De=s.unstable_setDisableYieldValue,pe=null,ge=null;function Ce(t){if(typeof we=="function"&&De(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(pe,t)}catch{}}var ze=Math.clz32?Math.clz32:Ze,Oe=Math.log,Ue=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Oe(t)/Ue|0)|0}var Qe=256,it=262144,q=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(_&=R,_!==0?u=Re(_):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):_!==0?u=Re(_):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zt(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=_&~a;0<a;){var _e=31-ze(a),Me=1<<_e;R[_e]=0,H[_e]=-1;var ce=ie[_e];if(ce!==null)for(ie[_e]=null,_e=0;_e<ce.length;_e++){var fe=ce[_e];fe!==null&&(fe.lane&=-536870913)}a&=~Me}o!==0&&Ut(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Kn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Qn(t,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(t.suspendedLanes|n))!==0?0:a}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Lg(t.type))}function Vr(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var Oi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Oi,Tn="__reactProps$"+Oi,Hn="__reactContainer$"+Oi,lr="__reactEvents$"+Oi,il="__reactListeners$"+Oi,al="__reactHandles$"+Oi,cr="__reactResources$"+Oi,Aa="__reactMarker$"+Oi;function wa(t){delete t[dn],delete t[Tn],delete t[lr],delete t[il],delete t[al]}function Ki(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_g(t);t!==null;){if(a=t[dn])return a;t=_g(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[dn]||t[Hn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ur(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[cr];return n||(n=t[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Aa]=!0}var rl=new Set,w={};function Y(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(w[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Pe={};function Ge(t){return tn.call(Pe,t)?!0:tn.call(re,t)?!1:ae.test(t)?Pe[t]=!0:(re[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function st(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=st(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=st(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ht(t,_,Je(n)):a!=null?ht(t,_,Je(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Dn(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),At(t)}function ht(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Jn(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(K(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function $n(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Qt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fr(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var iu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function lp(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Fe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(r(90));Fe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Kt(o)}break e;case"textarea":Jn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var ru=!1;function cp(t,n,a){if(ru)return t(n,a);ru=!0;try{var o=t(n);return o}finally{if(ru=!1,(kr!==null||Xr!==null)&&(ql(),kr&&(n=kr,t=Xr,Xr=kr=null,lp(n),t)))for(n=0;n<t.length;n++)lp(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if($i)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){su=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{su=!1}var Na=null,ou=null,sl=null;function up(){if(sl)return sl;var t,n=ou,a=n.length,o,u="value"in Na?Na.value:Na.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return sl=u.slice(t,1<o?1-o:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function fp(){return!1}function Gn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:fp,this.isPropagationStopped=fp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Gn(dr),js=x({},dr,{view:0,detail:0}),qv=Gn(js),lu,cu,Zs,ul=x({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(lu=t.screenX-Zs.screenX,cu=t.screenY-Zs.screenY):cu=lu=0,Zs=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),dp=Gn(ul),Yv=x({},ul,{dataTransfer:0}),jv=Gn(Yv),Zv=x({},js,{relatedTarget:0}),uu=Gn(Zv),Kv=x({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Gn(Kv),Jv=x({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=Gn(Jv),ex=x({},dr,{data:0}),hp=Gn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ix[t])?!!n[t]:!1}function fu(){return ax}var rx=x({},js,{key:function(t){if(t.key){var n=tx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sx=Gn(rx),ox=x({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Gn(ox),lx=x({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),cx=Gn(lx),ux=x({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Gn(ux),dx=x({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Gn(dx),px=x({},dr,{newState:0,oldState:0}),mx=Gn(px),gx=[9,13,27,32],du=$i&&"CompositionEvent"in window,Ks=null;$i&&"documentMode"in document&&(Ks=document.documentMode);var _x=$i&&"TextEvent"in window&&!Ks,mp=$i&&(!du||Ks&&8<Ks&&11>=Ks),gp=" ",_p=!1;function vp(t,n){switch(t){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function vx(t,n){switch(t){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(_p=!0,gp);case"textInput":return t=n.data,t===gp&&_p?null:t;default:return null}}function xx(t,n){if(Wr)return t==="compositionend"||!du&&vp(t,n)?(t=up(),sl=ou=Na=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mp&&n.locale!=="ko"?null:n.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Sx[t.type]:n==="textarea"}function yp(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function yx(t){ig(t,0)}function fl(t){var n=ur(t);if(Kt(n))return t}function Mp(t,n){if(t==="change")return n}var bp=!1;if($i){var hu;if($i){var pu="oninput"in document;if(!pu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),pu=typeof Ep.oninput=="function"}hu=pu}else hu=!1;bp=hu&&(!document.documentMode||9<document.documentMode)}function Tp(){Qs&&(Qs.detachEvent("onpropertychange",Ap),Js=Qs=null)}function Ap(t){if(t.propertyName==="value"&&fl(Js)){var n=[];yp(n,Js,t,au(t)),cp(yx,n)}}function Mx(t,n,a){t==="focusin"?(Tp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",Ap)):t==="focusout"&&Tp()}function bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Js)}function Ex(t,n){if(t==="click")return fl(n)}function Tx(t,n){if(t==="input"||t==="change")return fl(n)}function Ax(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:Ax;function $s(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!tn.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,n){var a=wp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wp(a)}}function Cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var wx=$i&&"documentMode"in document&&11>=document.documentMode,qr=null,gu=null,eo=null,_u=!1;function Dp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||qr==null||qr!==kt(o)||(o=qr,"selectionStart"in o&&mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=$l(gu,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Yr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},vu={},Up={};$i&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function pr(t){if(vu[t])return vu[t];if(!Yr[t])return t;var n=Yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Up)return vu[t]=n[a];return t}var Lp=pr("animationend"),Op=pr("animationiteration"),Pp=pr("animationstart"),Rx=pr("transitionrun"),Cx=pr("transitionstart"),Nx=pr("transitioncancel"),Ip=pr("transitionend"),Bp=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Ti(t,n){Bp.set(t,n),Y(n,[t])}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}},ui=[],jr=0,Su=0;function hl(){for(var t=jr,n=Su=jr=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&zp(a,u,f)}}function pl(t,n,a,o){ui[jr++]=t,ui[jr++]=n,ui[jr++]=a,ui[jr++]=o,Su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function yu(t,n,a,o){return pl(t,n,a,o),ml(t)}function mr(t,n){return pl(t,null,null,n),ml(t)}function zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<bo)throw bo=0,Df=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function Dx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new Dx(t,n,a,o)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Mu(t)&&(_=1);else if(typeof t=="string")_=IS(t,a,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=ti(31,a,n,u),t.elementType=A,t.lanes=f,t;case L:return gr(a.children,u,f,n);case M:_=8,u|=24;break;case S:return t=ti(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case O:return t=ti(13,a,n,u),t.elementType=O,t.lanes=f,t;case D:return t=ti(19,a,n,u),t.elementType=D,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:_=10;break e;case P:_=9;break e;case C:_=11;break e;case z:_=14;break e;case T:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ti(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function gr(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function bu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Hp(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Eu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gp=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=Gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:en(n)},Gp.set(t,n),n)}return{value:t,source:n,stack:en(n)}}var Kr=[],Qr=0,_l=null,to=0,di=[],hi=0,Da=null,Ii=1,Bi="";function ta(t,n){Kr[Qr++]=to,Kr[Qr++]=_l,_l=t,to=n}function Vp(t,n,a){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=Da,Da=t;var o=Ii;t=Bi;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Ii=1<<32-ze(n)+u|a<<u|o,Bi=f+t}else Ii=1<<f|a<<u|o,Bi=t}function Tu(t){t.return!==null&&(ta(t,1),Vp(t,1,0))}function Au(t){for(;t===_l;)_l=Kr[--Qr],Kr[Qr]=null,to=Kr[--Qr],Kr[Qr]=null;for(;t===Da;)Da=di[--hi],di[hi]=null,Bi=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null}function kp(t,n){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=Da,Ii=n.id,Bi=n.overflow,Da=t}var An=null,Yt=null,St=!1,Ua=null,pi=!1,wu=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(fi(n,t)),wu}function Xp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[Tn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)mt(To[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||og(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||La(t,!0)}function Wp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:An=An.return}}function Jr(t){if(t!==An)return!1;if(!St)return Wp(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&Yt&&La(t),Wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=gg(t)}else n===27?(n=Yt,Ya(t.type)?(t=Qf,Qf=null,Yt=t):Yt=n):Yt=An?gi(t.stateNode.nextSibling):null;return!0}function _r(){Yt=An=null,St=!1}function Ru(){var t=Ua;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ua=null),t}function no(t){Ua===null?Ua=[t]:Ua.push(t)}var Cu=U(null),vr=null,na=null;function Oa(t,n,a){xe(Cu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Cu.current,W(Cu)}function Nu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Du(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Nu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Nu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function $r(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=u.type;ei(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Du(n,t,a,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){vr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return qp(vr,t)}function xl(t,n){return vr===null&&xr(t),qp(t,n)}function qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(r(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var Ux=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Lx=s.unstable_scheduleCallback,Ox=s.unstable_NormalPriority,pn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Ux,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&Lx(Ox,function(){t.controller.abort()})}var ao=null,Lu=0,es=0,ts=null;function Px(t,n){if(ao===null){var a=ao=[];Lu=0,es=Bf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lu++,n.then(Yp,Yp),n}function Yp(){if(--Lu===0&&ao!==null){ts!==null&&(ts.status="fulfilled");var t=ao;ao=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ix(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var jp=F.S;F.S=function(t,n){D0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Px(t,n),jp!==null&&jp(t,n)};var Sr=U(null);function Ou(){var t=Sr.current;return t!==null?t:Xt.pooledCache}function Sl(t,n){n===null?xe(Sr,Sr.current):xe(Sr,n.pool)}function Zp(){var t=Ou();return t===null?null:{parent:pn._currentValue,pool:t}}var ns=Error(r(460)),Pu=Error(r(474)),yl=Error(r(542)),Ml={then:function(){}};function Kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$p(t),t}throw Mr=n,ns}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,ns):a}}var Mr=null;function Jp(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function $p(t){if(t===ns||t===yl)throw Error(r(483))}var is=null,ro=0;function bl(t){var n=ro;return ro+=1,is===null&&(is=[]),Qp(is,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function El(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function em(t){function n(Q,X){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ea(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=67108866,X):ne):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function _(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,ne,Se){return X===null||X.tag!==6?(X=bu(ne,Q.mode,Se),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function H(Q,X,ne,Se){var $e=ne.type;return $e===L?_e(Q,X,ne.props.children,Se,ne.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&yr($e)===X.type)?(X=u(X,ne.props),so(X,ne),X.return=Q,X):(X=gl(ne.type,ne.key,ne.props,null,Q.mode,Se),so(X,ne),X.return=Q,X)}function ie(Q,X,ne,Se){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Eu(ne,Q.mode,Se),X.return=Q,X):(X=u(X,ne.children||[]),X.return=Q,X)}function _e(Q,X,ne,Se,$e){return X===null||X.tag!==7?(X=gr(ne,Q.mode,Se,$e),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function Me(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=bu(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return ne=gl(X.type,X.key,X.props,null,Q.mode,ne),so(ne,X),ne.return=Q,ne;case E:return X=Eu(X,Q.mode,ne),X.return=Q,X;case T:return X=yr(X),Me(Q,X,ne)}if(K(X)||Z(X))return X=gr(X,Q.mode,ne,null),X.return=Q,X;if(typeof X.then=="function")return Me(Q,bl(X),ne);if(X.$$typeof===B)return Me(Q,xl(Q,X),ne);El(Q,X)}return null}function ce(Q,X,ne,Se){var $e=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return $e!==null?null:R(Q,X,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===$e?H(Q,X,ne,Se):null;case E:return ne.key===$e?ie(Q,X,ne,Se):null;case T:return ne=yr(ne),ce(Q,X,ne,Se)}if(K(ne)||Z(ne))return $e!==null?null:_e(Q,X,ne,Se,null);if(typeof ne.then=="function")return ce(Q,X,bl(ne),Se);if(ne.$$typeof===B)return ce(Q,X,xl(Q,ne),Se);El(Q,ne)}return null}function fe(Q,X,ne,Se,$e){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ne)||null,R(X,Q,""+Se,$e);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case y:return Q=Q.get(Se.key===null?ne:Se.key)||null,H(X,Q,Se,$e);case E:return Q=Q.get(Se.key===null?ne:Se.key)||null,ie(X,Q,Se,$e);case T:return Se=yr(Se),fe(Q,X,ne,Se,$e)}if(K(Se)||Z(Se))return Q=Q.get(ne)||null,_e(X,Q,Se,$e,null);if(typeof Se.then=="function")return fe(Q,X,ne,bl(Se),$e);if(Se.$$typeof===B)return fe(Q,X,ne,xl(X,Se),$e);El(X,Se)}return null}function We(Q,X,ne,Se){for(var $e=null,wt=null,Ye=X,lt=X=0,_t=null;Ye!==null&&lt<ne.length;lt++){Ye.index>lt?(_t=Ye,Ye=null):_t=Ye.sibling;var Rt=ce(Q,Ye,ne[lt],Se);if(Rt===null){Ye===null&&(Ye=_t);break}t&&Ye&&Rt.alternate===null&&n(Q,Ye),X=f(Rt,X,lt),wt===null?$e=Rt:wt.sibling=Rt,wt=Rt,Ye=_t}if(lt===ne.length)return a(Q,Ye),St&&ta(Q,lt),$e;if(Ye===null){for(;lt<ne.length;lt++)Ye=Me(Q,ne[lt],Se),Ye!==null&&(X=f(Ye,X,lt),wt===null?$e=Ye:wt.sibling=Ye,wt=Ye);return St&&ta(Q,lt),$e}for(Ye=o(Ye);lt<ne.length;lt++)_t=fe(Ye,Q,lt,ne[lt],Se),_t!==null&&(t&&_t.alternate!==null&&Ye.delete(_t.key===null?lt:_t.key),X=f(_t,X,lt),wt===null?$e=_t:wt.sibling=_t,wt=_t);return t&&Ye.forEach(function(Ja){return n(Q,Ja)}),St&&ta(Q,lt),$e}function et(Q,X,ne,Se){if(ne==null)throw Error(r(151));for(var $e=null,wt=null,Ye=X,lt=X=0,_t=null,Rt=ne.next();Ye!==null&&!Rt.done;lt++,Rt=ne.next()){Ye.index>lt?(_t=Ye,Ye=null):_t=Ye.sibling;var Ja=ce(Q,Ye,Rt.value,Se);if(Ja===null){Ye===null&&(Ye=_t);break}t&&Ye&&Ja.alternate===null&&n(Q,Ye),X=f(Ja,X,lt),wt===null?$e=Ja:wt.sibling=Ja,wt=Ja,Ye=_t}if(Rt.done)return a(Q,Ye),St&&ta(Q,lt),$e;if(Ye===null){for(;!Rt.done;lt++,Rt=ne.next())Rt=Me(Q,Rt.value,Se),Rt!==null&&(X=f(Rt,X,lt),wt===null?$e=Rt:wt.sibling=Rt,wt=Rt);return St&&ta(Q,lt),$e}for(Ye=o(Ye);!Rt.done;lt++,Rt=ne.next())Rt=fe(Ye,Q,lt,Rt.value,Se),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?lt:Rt.key),X=f(Rt,X,lt),wt===null?$e=Rt:wt.sibling=Rt,wt=Rt);return t&&Ye.forEach(function(YS){return n(Q,YS)}),St&&ta(Q,lt),$e}function Vt(Q,X,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===L&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var $e=ne.key;X!==null;){if(X.key===$e){if($e=ne.type,$e===L){if(X.tag===7){a(Q,X.sibling),Se=u(X,ne.props.children),Se.return=Q,Q=Se;break e}}else if(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&yr($e)===X.type){a(Q,X.sibling),Se=u(X,ne.props),so(Se,ne),Se.return=Q,Q=Se;break e}a(Q,X);break}else n(Q,X);X=X.sibling}ne.type===L?(Se=gr(ne.props.children,Q.mode,Se,ne.key),Se.return=Q,Q=Se):(Se=gl(ne.type,ne.key,ne.props,null,Q.mode,Se),so(Se,ne),Se.return=Q,Q=Se)}return _(Q);case E:e:{for($e=ne.key;X!==null;){if(X.key===$e)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(Q,X.sibling),Se=u(X,ne.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,X);break}else n(Q,X);X=X.sibling}Se=Eu(ne,Q.mode,Se),Se.return=Q,Q=Se}return _(Q);case T:return ne=yr(ne),Vt(Q,X,ne,Se)}if(K(ne))return We(Q,X,ne,Se);if(Z(ne)){if($e=Z(ne),typeof $e!="function")throw Error(r(150));return ne=$e.call(ne),et(Q,X,ne,Se)}if(typeof ne.then=="function")return Vt(Q,X,bl(ne),Se);if(ne.$$typeof===B)return Vt(Q,X,xl(Q,ne),Se);El(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(Q,X.sibling),Se=u(X,ne),Se.return=Q,Q=Se):(a(Q,X),Se=bu(ne,Q.mode,Se),Se.return=Q,Q=Se),_(Q)):a(Q,X)}return function(Q,X,ne,Se){try{ro=0;var $e=Vt(Q,X,ne,Se);return is=null,$e}catch(Ye){if(Ye===ns||Ye===yl)throw Ye;var wt=ti(29,Ye,null,Q.mode);return wt.lanes=Se,wt.return=Q,wt}finally{}}}var br=em(!0),tm=em(!1),Pa=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(t),zp(t,null,a),n}return pl(t,o,n,a),ml(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Kn(t,a)}}function zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function lo(){if(Fu){var t=ts;if(t!==null)throw t}}function co(t,n,a,o){Fu=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ie=H.next;H.next=null,_===null?f=ie:_.next=ie,_=H;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==_&&(R===null?_e.firstBaseUpdate=ie:R.next=ie,_e.lastBaseUpdate=H))}if(f!==null){var Me=u.baseState;_=0,_e=ie=H=null,R=f;do{var ce=R.lane&-536870913,fe=ce!==R.lane;if(fe?(gt&ce)===ce:(o&ce)===ce){ce!==0&&ce===es&&(Fu=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,et=R;ce=n;var Vt=a;switch(et.tag){case 1:if(We=et.payload,typeof We=="function"){Me=We.call(Vt,Me,ce);break e}Me=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=et.payload,ce=typeof We=="function"?We.call(Vt,Me,ce):We,ce==null)break e;Me=x({},Me,ce);break e;case 2:Pa=!0}}ce=R.callback,ce!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ce]:fe.push(ce))}else fe={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ie=_e=fe,H=Me):_e=_e.next=fe,_|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);_e===null&&(H=Me),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=_e,f===null&&(u.shared.lanes=0),Va|=_,t.lanes=_,t.memoizedState=Me}}function nm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function im(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nm(a[t],n)}var as=U(null),Tl=U(0);function am(t,n){t=da,xe(Tl,t),xe(as,n),da=t|n.baseLanes}function Hu(){xe(Tl,da),xe(as,as.current)}function Gu(){da=Tl.current,W(as),W(Tl)}var ni=U(null),mi=null;function za(t){var n=t.alternate;xe(cn,cn.current&1),xe(ni,t),mi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(mi=t)}function Vu(t){xe(cn,cn.current),xe(ni,t),mi===null&&(mi=t)}function rm(t){t.tag===22?(xe(cn,cn.current),xe(ni,t),mi===null&&(mi=t)):Fa()}function Fa(){xe(cn,cn.current),xe(ni,ni.current)}function ii(t){W(ni),mi===t&&(mi=null),W(cn)}var cn=U(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ot=null,Ht=null,mn=null,wl=!1,rs=!1,Er=!1,Rl=0,uo=0,ss=null,Bx=0;function an(){throw Error(r(321))}function ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Xu(t,n,a,o,u,f){return aa=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Vm:sf,Er=!1,f=a(o,u),Er=!1,rs&&(f=om(n,a,o,u)),sm(t),f}function sm(t){F.H=po;var n=Ht!==null&&Ht.next!==null;if(aa=0,mn=Ht=ot=null,wl=!1,uo=0,ss=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&vl(t)&&(gn=!0))}function om(t,n,a,o){ot=t;var u=0;do{if(rs&&(ss=null),uo=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,mn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=km,f=n(a,o)}while(rs);return f}function zx(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function Wu(){var t=Rl!==0;return Rl=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(wl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}wl=!1}aa=0,mn=Ht=ot=null,rs=!1,uo=Rl=0,ss=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ot.memoizedState=mn=t:mn=mn.next=t,mn}function un(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=mn===null?ot.memoizedState:mn.next;if(n!==null)mn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},mn===null?ot.memoizedState=mn=t:mn=mn.next=t}return mn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ss===null&&(ss=[]),t=Qp(ss,t,n),n=ot,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Vm:sf),t}function Nl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===B)return wn(t)}throw Error(r(438,String(t)))}function ju(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=G;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Dl(t){var n=un();return Zu(n,Ht,t)}function Zu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,H=null,ie=n,_e=!1;do{var Me=ie.lane&-536870913;if(Me!==ie.lane?(gt&Me)===Me:(aa&Me)===Me){var ce=ie.revertLane;if(ce===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Me===es&&(_e=!0);else if((aa&ce)===ce){ie=ie.next,ce===es&&(_e=!0);continue}else Me={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=Me,_=f):H=H.next=Me,ot.lanes|=ce,Va|=ce;Me=ie.action,Er&&a(f,Me),f=ie.hasEagerState?ie.eagerState:a(f,Me)}else ce={lane:Me,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=ce,_=f):H=H.next=ce,ot.lanes|=Me,Va|=Me;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?_=f:H.next=R,!ei(f,t.memoizedState)&&(gn=!0,_e&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ku(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ei(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function lm(t,n,a){var o=ot,u=un(),f=St;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ei((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,gn=!0),u=u.queue,$u(fm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},um.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));f||(aa&127)!==0||cm(o,n,a)}return a}function cm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Cl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function um(t,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&hm(t)}function fm(t,n,a){return a(function(){dm(n)&&hm(t)})}function dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function hm(t){var n=mr(t,2);n!==null&&qn(n,t,2)}function Qu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Er){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function pm(t,n,a,o){return t.baseState=a,Zu(t,Ht,typeof o=="function"?o:ra)}function Fx(t,n,a,o,u){if(Ol(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function mm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var R=a(u,o),H=F.S;H!==null&&H(_,R),gm(t,n,R)}catch(ie){Ju(t,n,ie)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(u,o),gm(t,n,f)}catch(ie){Ju(t,n,ie)}}function gm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_m(t,n,o)},function(o){return Ju(t,n,o)}):_m(t,n,a)}function _m(t,n,a){n.status="fulfilled",n.value=a,vm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mm(t,a)))}function Ju(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,vm(n),n=n.next;while(n!==o)}t.action=null}function vm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xm(t,n){return n}function Sm(t,n){if(St){var a=Xt.formState;if(a!==null){e:{var o=ot;if(St){if(Yt){t:{for(var u=Yt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=gi(u.nextSibling),o=u.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xm,lastRenderedState:n},a.queue=o,a=Fm.bind(null,ot,o),o.dispatch=a,o=Qu(!1),f=rf.bind(null,ot,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Fx.bind(null,ot,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function ym(t){var n=un();return Mm(n,Ht,t)}function Mm(t,n,a){if(n=Zu(t,n,xm)[0],t=Dl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(_){throw _===ns?yl:_}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,os(9,{destroy:void 0},Hx.bind(null,u,a),null)),[o,f,t]}function Hx(t,n){t.action=n}function bm(t){var n=un(),a=Ht;if(a!==null)return Mm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Cl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Em(){return un().memoizedState}function Ul(t,n,a,o){var u=In();ot.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&ku(o,Ht.memoizedState.deps)?u.memoizedState=os(n,f,a,o):(ot.flags|=t,u.memoizedState=os(1|n,f,a,o))}function Tm(t,n){Ul(8390656,8,t,n)}function $u(t,n){Ll(2048,8,t,n)}function Gx(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Cl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Am(t){var n=un().memoizedState;return Gx({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function wm(t,n){return Ll(4,2,t,n)}function Rm(t,n){return Ll(4,4,t,n)}function Cm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,a){a=a!=null?a.concat([t]):null,Ll(4,4,Cm.bind(null,n,t),a)}function ef(){}function Dm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ku(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Um(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ku(n,o[1]))return o[0];if(o=t(),Er){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function tf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=L0(),ot.lanes|=t,Va|=t,a)}function Lm(t,n,a,o){return ei(a,n)?a:as.current!==null?(t=tf(t,a,o),ei(t,n)||(gn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(gt&261930)===0?(gn=!0,t.memoizedState=a):(t=L0(),ot.lanes|=t,Va|=t,n)}function Om(t,n,a,o,u){var f=k.p;k.p=f!==0&&8>f?f:8;var _=F.T,R={};F.T=R,rf(t,!1,n,a);try{var H=u(),ie=F.S;if(ie!==null&&ie(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var _e=Ix(H,o);ho(t,n,_e,si(t))}else ho(t,n,o,si(t))}catch(Me){ho(t,n,{then:function(){},status:"rejected",reason:Me},si())}finally{k.p=f,_!==null&&R.types!==null&&(_.types=R.types),F.T=_}}function Vx(){}function nf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Pm(t).queue;Om(t,u,n,ee,a===null?Vx:function(){return Im(t),a(o)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Im(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},si())}function af(){return wn(No)}function Bm(){return un().memoizedState}function zm(){return un().memoizedState}function kx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Ia(a);var o=Ba(n,t,a);o!==null&&(qn(o,n,a),oo(o,n,a)),n={cache:Uu()},t.payload=n;return}n=n.return}}function Xx(t,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?Hm(n,a):(a=yu(t,n,a,o),a!==null&&(qn(a,t,o),Gm(a,n,o)))}function Fm(t,n,a){var o=si();ho(t,n,a,o)}function ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))Hm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ei(R,_))return pl(t,n,u,0),Xt===null&&hl(),!1}catch{}finally{}if(a=yu(t,n,u,o),a!==null)return qn(a,t,o),Gm(a,n,o),!0}return!1}function rf(t,n,a,o){if(o={lane:2,revertLane:Bf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(r(479))}else n=yu(t,a,o,2),n!==null&&qn(n,t,2)}function Ol(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Hm(t,n){rs=wl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Kn(t,a)}}var po={readContext:wn,use:Nl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};po.useEffectEvent=an;var Vm={readContext:wn,use:Nl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ul(4194308,4,Cm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ul(4194308,4,t,n)},useInsertionEffect:function(t,n){Ul(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(Er){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(Er){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Xx.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Qu(t);var n=t.queue,a=Fm.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=In();return tf(a,t,n)},useTransition:function(){var t=Qu(!1);return t=Om.bind(null,ot,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,u=In();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(gt&127)!==0||cm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Tm(fm.bind(null,o,f,t),[t]),o.flags|=2048,os(9,{destroy:void 0},um.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=Xt.identifierPrefix;if(St){var a=Bi,o=Ii;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Bx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:Sm,useActionState:Sm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return In().memoizedState=kx.bind(null,ot)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:wn,use:Nl,useCallback:Dm,useContext:wn,useEffect:$u,useImperativeHandle:Nm,useInsertionEffect:wm,useLayoutEffect:Rm,useMemo:Um,useReducer:Dl,useRef:Em,useState:function(){return Dl(ra)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Lm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Dl(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:lm,useId:Bm,useHostTransitionStatus:af,useFormState:ym,useActionState:ym,useOptimistic:function(t,n){var a=un();return pm(a,Ht,t,n)},useMemoCache:ju,useCacheRefresh:zm};sf.useEffectEvent=Am;var km={readContext:wn,use:Nl,useCallback:Dm,useContext:wn,useEffect:$u,useImperativeHandle:Nm,useInsertionEffect:wm,useLayoutEffect:Rm,useMemo:Um,useReducer:Ku,useRef:Em,useState:function(){return Ku(ra)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Ht===null?tf(a,t,n):Lm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Ku(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:lm,useId:Bm,useHostTransitionStatus:af,useFormState:bm,useActionState:bm,useOptimistic:function(t,n){var a=un();return Ht!==null?pm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:zm};km.useEffectEvent=Am;function of(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(qn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(qn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(qn(n,t,a),oo(n,t,a))}};function Xm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,f):!0}function Wm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&lf.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function qm(t){dl(t)}function Ym(t){}function jm(t){dl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Zm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Km(t){return t=Ia(t),t.tag=3,t}function Qm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Zm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Zm(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Wx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Yl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Of(t,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Of(t,o,u)),!1}throw Error(r(435,a.tag))}return Of(t,o,u),Yl(),!1}if(St)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wu&&(t=Error(r(422),{cause:o}),no(fi(t,a)))):(o!==wu&&(n=Error(r(423),{cause:o}),no(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=cf(t.stateNode,o,u),zu(t,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:o});if(f=fi(f,a),Mo===null?Mo=[f]:Mo.push(f),rn!==4&&(rn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=cf(a.stateNode,o,t),zu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Km(u),Qm(u,t,a,o),zu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(r(461)),gn=!1;function Rn(t,n,a,o){n.child=t===null?tm(n,null,a,o):br(n,t.child,a,o)}function Jm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return xr(n),o=Xu(t,n,a,_,f,u),R=Wu(),t!==null&&!gn?(qu(t,n,u),sa(t,n,u)):(St&&R&&Tu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function $m(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,e0(t,n,f,o,u)):(t=gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(_,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=ea(f,o),t.ref=n.ref,t.return=n,n.child=t}function e0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if($s(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,vf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return ff(t,n,a,o,u)}function t0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return n0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?am(n,f):Hu(),rm(n);else return o=n.lanes=536870912,n0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sl(n,f.cachePool),am(n,f),Fa(),n.memoizedState=null):(t!==null&&Sl(n,null),Hu(),Fa());return Rn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function n0(t,n,a,o,u){var f=Ou();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),Hu(),rm(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Il(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function i0(t,n,a){return br(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function qx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Il(n,o),n.lanes=536870912,mo(null,t);if(Vu(n),(t=Yt)?(t=mg(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,An=n,Yt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Il(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=i0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=Xt,o!==null&&(_=Qn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,mr(t,_),qn(o,t,_),uf;Yl(),n=i0(t,n,a)}else t=f.treeContext,Yt=gi(_.nextSibling),An=n,St=!0,Ua=null,pi=!1,t!==null&&kp(n,t),n=Il(n,o),n.flags|=4096;return n}return t=ea(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,u){return xr(n),a=Xu(t,n,a,o,void 0,u),o=Wu(),t!==null&&!gn?(qu(t,n,u),sa(t,n,u)):(St&&o&&Tu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function a0(t,n,a,o,u,f){return xr(n),n.updateQueue=null,a=om(n,o,a,u),sm(t),o=Wu(),t!==null&&!gn?(qu(t,n,f),sa(t,n,f)):(St&&o&&Tu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function r0(t,n,a,o,u){if(xr(n),n.stateNode===null){var f=Zr,_=a.contextType;typeof _=="object"&&_!==null&&(f=wn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Iu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?wn(_):Zr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(of(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&lf.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Tr(a,R);f.props=H;var ie=f.context,_e=a.contextType;_=Zr,typeof _e=="object"&&_e!==null&&(_=wn(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ie!==_)&&Wm(n,f,o,_),Pa=!1;var ce=n.memoizedState;f.state=ce,co(n,o,f,u),lo(),ie=n.memoizedState,R||ce!==ie||Pa?(typeof Me=="function"&&(of(n,a,Me,o),ie=n.memoizedState),(H=Pa||Xm(n,a,H,o,ce,ie,_))?(_e||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=_,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bu(t,n),_=n.memoizedProps,_e=Tr(a,_),f.props=_e,Me=n.pendingProps,ce=f.context,ie=a.contextType,H=Zr,typeof ie=="object"&&ie!==null&&(H=wn(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Me||ce!==H)&&Wm(n,f,o,H),Pa=!1,ce=n.memoizedState,f.state=ce,co(n,o,f,u),lo();var fe=n.memoizedState;_!==Me||ce!==fe||Pa||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof R=="function"&&(of(n,a,R,o),fe=n.memoizedState),(_e=Pa||Xm(n,a,_e,o,ce,fe,H)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=H,o=_e):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=sa(t,n,u),t}function s0(t,n,a,o){return _r(),n.flags|=256,Rn(t,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:Zp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function o0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?za(n):Fa(),(t=Yt)?(t=mg(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Hp(t),a.return=n,n.child=a,An=n,Yt=null)):t=null,t===null)throw La(n);return Kf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=zl({mode:"hidden",children:R},u),o=gr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,_,a),n.memoizedState=df,mo(null,o)):(za(n),mf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),R=gr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,_,a),n.memoizedState=df,n=mo(null,o));else if(za(n),Kf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ie=_.dgst;_=ie,o=Error(r(419)),o.stack="",o.digest=_,no({value:o,source:null,stack:null}),n=gf(t,n,a)}else if(gn||$r(t,n,a,!1),_=(a&t.childLanes)!==0,gn||_){if(_=Xt,_!==null&&(o=Qn(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,mr(t,o),qn(_,t,o),uf;Zf(R)||Yl(),n=gf(t,n,a)}else Zf(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=gi(R.nextSibling),An=n,St=!0,Ua=null,pi=!1,t!==null&&kp(n,t),n=mf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,H=t.child,ie=H.sibling,o=ea(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?R=ea(ie,R):(R=gr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,mo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=hf(a):(u=R.cachePool,u!==null?(H=pn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Zp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=pf(t,_,a),n.memoizedState=df,mo(t.child,o)):(za(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function gf(t,n,a){return br(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function l0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Nu(t.return,n,a)}function _f(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function c0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=cn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,xe(cn,_),Rn(t,n,o,a),o=St?to:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,a,n);else if(t.tag===19)l0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,f,o);break;case"together":_f(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Yx(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Oa(n,pn,t.memoizedState.cache),_r();break;case 27:case 5:tt(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?o0(t,n,a):(za(n),t=sa(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return c0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(cn,cn.current),o)break;return null;case 22:return n.lanes=0,t0(t,n,a,n.pendingProps);case 24:Oa(n,pn,t.memoizedState.cache)}return sa(t,n,a)}function u0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return gn=!1,Yx(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,St&&(n.flags&1048576)!==0&&Vp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")Mu(t)?(o=Tr(t,o),n.tag=1,n=r0(null,n,t,o,a)):(n.tag=0,n=ff(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=Jm(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=$m(null,n,t,o,a);break e}}throw n=se(t)||t,Error(r(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Tr(o,n.pendingProps),r0(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(t,n),co(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Oa(n,pn,o),o!==f.cache&&Du(n,[pn],a,!0),lo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=s0(t,n,o,a);break e}else if(o!==u){u=fi(Error(r(424)),n),no(u),n=s0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=gi(t.firstChild),An=n,St=!0,Ua=null,pi=!0,a=tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_r(),o===u){n=sa(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=yg(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=ec($.current).createElement(a),o[dn]=n,o[Tn]=t,Cn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=yg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&St&&(o=n.stateNode=vg(n.type,n.pendingProps,$.current),An=n,pi=!0,u=Yt,Ya(n.type)?(Qf=u,Yt=gi(o.firstChild)):Yt=u),Rn(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=Yt)&&(o=bS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,An=n,Yt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||La(n)),tt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,qf(u,f)?o=null:_!==null&&qf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(t,n,zx,null,null,a),No._currentValue=u),Bl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=Yt)&&(a=ES(a,n.pendingProps,pi),a!==null?(n.stateNode=a,An=n,Yt=null,t=!0):t=!1),t||La(n)),null;case 13:return o0(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Jm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return $m(t,n,n.type,n.pendingProps,a);case 15:return e0(t,n,n.type,n.pendingProps,a);case 19:return c0(t,n,a);case 31:return qx(t,n,a);case 22:return t0(t,n,a,n.pendingProps);case 24:return xr(n),o=wn(pn),t===null?(u=Ou(),u===null&&(u=Xt,f=Uu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Iu(n),Oa(n,pn,u)):((t.lanes&a)!==0&&(Bu(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,pn,o)):(o=f.cache,Oa(n,pn,o),o!==u.cache&&Du(n,[pn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function oa(t){t.flags|=4}function xf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(B0())t.flags|=8192;else throw Mr=Ml,Pu}else t.flags&=-16777217}function f0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ag(n))if(B0())t.flags|=8192;else throw Mr=Ml,Pu}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,fs|=n)}function go(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function jx(t,n,a){var o=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(pn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?(jt(n),f0(n,f)):(jt(n),xf(n,u,null,o,a))):f?f!==t.memoizedState?(oa(n),jt(n),f0(n,f)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&oa(n),jt(n),xf(n,u,t,o,a)),null;case 27:if(Ke(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=Ee.current,Jr(n)?Xp(n):(t=vg(u,o,a),n.stateNode=t,oa(n))}return jt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(f=Ee.current,Jr(n))Xp(n);else{var _=ec($.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[dn]=n,f[Tn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oa(n)}}return jt(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||og(t.nodeValue,a)),t||La(n,!0)}else t=ec(t).createTextNode(o),t[dn]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=Ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),jt(n),null);case 4:return He(),t===null&&Gf(n.stateNode.containerInfo),jt(n),null;case 10:return ia(n.type),jt(n),null;case 19:if(W(cn),o=n.memoizedState,o===null)return jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)go(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Al(t),f!==null){for(n.flags|=128,go(o,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return xe(cn,cn.current&1|2),St&&ta(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>Xl&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304)}else{if(!u)if(t=Al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!St)return jt(n),null}else 2*Ft()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,go(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=cn.current,xe(cn,u?a&1|2:a&1),St&&ta(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return ii(n),Gu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&W(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(pn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Zx(t,n){switch(Au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(pn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(cn),null;case 4:return He(),null;case 10:return ia(n.type),null;case 22:case 23:return ii(n),Gu(),t!==null&&W(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(pn),null;case 25:return null;default:return null}}function d0(t,n){switch(Au(n),n.tag){case 3:ia(pn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:W(cn);break;case 10:ia(n.type);break;case 22:case 23:ii(n),Gu(),t!==null&&W(Sr);break;case 24:ia(pn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Bt(n,n.return,R)}}function Ha(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var H=a,ie=R;try{ie()}catch(_e){Bt(u,H,_e)}}}o=o.next}while(o!==f)}}catch(_e){Bt(n,n.return,_e)}}function h0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{im(n,a)}catch(o){Bt(t,t.return,o)}}}function p0(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function m0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Sf(t,n,a){try{var o=t.stateNode;_S(o,t.type,a,n),o[Tn]=n}catch(u){Bt(t,t.return,u)}}function g0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function _0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[dn]=t,n[Tn]=a}catch(f){Bt(t,t.return,f)}}var la=!1,_n=!1,bf=!1,v0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Kx(t,n){if(t=t.containerInfo,Xf=oc,t=Np(t),mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,H=-1,ie=0,_e=0,Me=t,ce=null;t:for(;;){for(var fe;Me!==a||u!==0&&Me.nodeType!==3||(R=_+u),Me!==f||o!==0&&Me.nodeType!==3||(H=_+o),Me.nodeType===3&&(_+=Me.nodeValue.length),(fe=Me.firstChild)!==null;)ce=Me,Me=fe;for(;;){if(Me===t)break t;if(ce===a&&++ie===u&&(R=_),ce===f&&++_e===o&&(H=_),(fe=Me.nextSibling)!==null)break;Me=ce,ce=Me.parentNode}Me=fe}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},oc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Tr(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){Bt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function x0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),o&4&&_o(5,a);break;case 1:if(ua(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Bt(a,a.return,_)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Bt(a,a.return,_)}}o&64&&h0(a),o&512&&vo(a,a.return);break;case 3:if(ua(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{im(t,n)}catch(_){Bt(a,a.return,_)}}break;case 27:n===null&&o&4&&_0(a);case 26:case 5:ua(t,a),n===null&&o&4&&m0(a),o&512&&vo(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),o&4&&M0(t,a);break;case 13:ua(t,a),o&4&&b0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=rS.bind(null,a),TS(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||_n,u=la;var f=_n;la=o,(_n=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,_n=f}break;case 30:break;default:ua(t,a)}}function S0(t){var n=t.alternate;n!==null&&(t.alternate=null,S0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&wa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Vn=!1;function ca(t,n,a){for(a=a.child;a!==null;)y0(t,n,a),a=a.sibling}function y0(t,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:_n||zi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||zi(a,n);var o=Jt,u=Vn;Ya(a.type)&&(Jt=a.stateNode,Vn=!1),ca(t,n,a),wo(a.stateNode),Jt=o,Vn=u;break;case 5:_n||zi(a,n);case 6:if(o=Jt,u=Vn,Jt=null,ca(t,n,a),Jt=o,Vn=u,Jt!==null)if(Vn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Vn?(t=Jt,hg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):hg(Jt,a.stateNode));break;case 4:o=Jt,u=Vn,Jt=a.stateNode.containerInfo,Vn=!0,ca(t,n,a),Jt=o,Vn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),_n||Ha(4,a,n),ca(t,n,a);break;case 1:_n||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&p0(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,ca(t,n,a),_n=o;break;default:ca(t,n,a)}}function M0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){Bt(n,n.return,a)}}}function b0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){Bt(n,n.return,a)}}function Qx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new v0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new v0),n;default:throw Error(r(435,t.tag))}}function Gl(t,n){var a=Qx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=sS.bind(null,t,o);o.then(u,u)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){Jt=R.stateNode,Vn=!1;break e}break;case 5:Jt=R.stateNode,Vn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if(Jt===null)throw Error(r(160));y0(f,_,u),Jt=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)E0(n,t),n=n.sibling}var Ai=null;function E0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),o&4&&(Ha(3,t,t.return),_o(3,t),Ha(5,t,t.return));break;case 1:kn(n,t),Xn(t),o&512&&(_n||a===null||zi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ai;if(kn(n,t),Xn(t),o&512&&(_n||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Aa]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[dn]=t,hn(f),o=f;break e;case"link":var _=Eg("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Eg("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[dn]=t,hn(f),o=f}t.stateNode=o}else Tg(u,t.type,t.stateNode);else t.stateNode=bg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Tg(u,t.type,t.stateNode):bg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),o&512&&(_n||a===null||zi(a,a.return)),a!==null&&o&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),o&512&&(_n||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{$n(u,"")}catch(We){Bt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(kn(n,t),Xn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Bt(t,t.return,We)}}break;case 3:if(ic=null,u=Ai,Ai=tc(n.containerInfo),kn(n,t),Ai=u,Xn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(We){Bt(t,t.return,We)}bf&&(bf=!1,T0(t));break;case 4:o=Ai,Ai=tc(t.stateNode.containerInfo),kn(n,t),Xn(t),Ai=o;break;case 12:kn(n,t),Xn(t);break;case 31:kn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=la,_e=_n;if(la=ie||u,_n=_e||H,kn(n,t),_n=_e,la=ie,Xn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||la||_n||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=H.stateNode;var Me=H.memoizedProps.style,ce=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(We){Bt(H,H.return,We)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(We){Bt(H,H.return,We)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?pg(fe,!0):pg(H.stateNode,!1)}catch(We){Bt(H,H.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(t,a))));break;case 19:kn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gl(t,o)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(g0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(t);Hl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&($n(_,""),a.flags&=-33);var R=yf(t);Hl(t,R,_);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=yf(t);Mf(t,ie,H);break;default:throw Error(r(161))}}catch(_e){Bt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;T0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)x0(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Ar(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&p0(n,n.return,a),Ar(n);break;case 27:wo(n.stateNode);case 26:case 5:zi(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),_o(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Bt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)nm(H[u],R)}catch(ie){Bt(o,o.return,ie)}}a&&_&64&&h0(f),vo(f,f.return);break;case 27:_0(f);case 26:case 5:fa(u,f,a),a&&o===null&&_&4&&m0(f),vo(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&_&4&&M0(u,f);break;case 13:fa(u,f,a),a&&_&4&&b0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),vo(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function wi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)A0(t,n,a,o),n=n.sibling}function A0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,o),u&2048&&_o(9,n);break;case 1:wi(t,n,a,o);break;case 3:wi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){wi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else wi(t,n,a,o);break;case 31:wi(t,n,a,o);break;case 13:wi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?wi(t,n,a,o):xo(t,n):f._visibility&2?wi(t,n,a,o):(f._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(_,n);break;case 24:wi(t,n,a,o),u&2048&&Tf(n.alternate,n);break;default:wi(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,H=o,ie=_.flags;switch(_.tag){case 0:case 11:case 15:ls(f,_,R,H,u),_o(8,_);break;case 23:break;case 22:var _e=_.stateNode;_.memoizedState!==null?_e._visibility&2?ls(f,_,R,H,u):xo(f,_):(_e._visibility|=2,ls(f,_,R,H,u)),u&&ie&2048&&Ef(_.alternate,_);break;case 24:ls(f,_,R,H,u),u&&ie&2048&&Tf(_.alternate,_);break;default:ls(f,_,R,H,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Ef(o.alternate,o);break;case 24:xo(a,o),u&2048&&Tf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function cs(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)w0(t,n,a),t=t.sibling}function w0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&So&&t.memoizedState!==null&&BS(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Ai;Ai=tc(t.stateNode.containerInfo),cs(t,n,a),Ai=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,cs(t,n,a),So=o):cs(t,n,a));break;default:cs(t,n,a)}}function R0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,N0(o,t)}R0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C0(t),t=t.sibling}function C0(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):yo(t);break;default:yo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,N0(o,t)}R0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function N0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,f=o.return;if(S0(o),o===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var Jx={getCacheForType:function(t){var n=wn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(pn).controller.signal}},$x=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,pt=null,gt=0,It=0,ai=null,Ga=!1,us=!1,Af=!1,da=0,rn=0,Va=0,wr=0,wf=0,ri=0,fs=0,Mo=null,Wn=null,Rf=!1,kl=0,D0=0,Xl=1/0,Wl=null,ka=null,Sn=0,Xa=null,ds=null,ha=0,Cf=0,Nf=null,U0=null,bo=0,Df=null;function si(){return(Nt&2)!==0&&gt!==0?gt&-gt:F.T!==null?Bf():Ws()}function L0(){if(ri===0)if((gt&536870912)===0||St){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function qn(t,n,a){(t===Xt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(hs(t,0),Wa(t,gt,ri,!1)),Ve(t,a),((Nt&2)===0||t!==Xt)&&(t===Xt&&((Nt&2)===0&&(wr|=a),rn===4&&Wa(t,gt,ri,!1)),Fi(t))}function O0(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?nS(t,n):Lf(t,n,!0),f=o;do{if(u===0){us&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!eS(a)){u=Lf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Mo;var H=R.current.memoizedState.isDehydrated;if(H&&(hs(R,_).flags|=256),_=Lf(R,_,!1),_!==2){if(Af&&!H){R.errorRecoveryDisabledLanes|=f,wr|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){hs(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ri,!Ga);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kl+300-Ft(),10<u)){if(Wa(o,n,ri,!Ga),ve(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=fg(P0.bind(null,o,a,Wn,Wl,Rf,n,ri,wr,fs,Ga,f,"Throttled",-0,0),u);break e}P0(o,a,Wn,Wl,Rf,n,ri,wr,fs,Ga,f,null,-0,0)}}break}while(!0);Fi(t)}function P0(t,n,a,o,u,f,_,R,H,ie,_e,Me,ce,fe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},w0(n,f,Me);var We=(f&62914560)===f?kl-Ft():(f&4194048)===f?D0-Ft():0;if(We=zS(Me,We),We!==null){ha=f,t.cancelPendingCommit=We(k0.bind(null,t,n,f,a,o,u,_,R,H,_e,Me,null,ce,fe)),Wa(t,f,_,!ie);return}}k0(t,n,f,a,o,u,_,R,H)}function eS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~wf,n&=~wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Ut(t,a,n)}function ql(){return(Nt&6)===0?(Eo(0),!1):!0}function Uf(){if(pt!==null){if(It===0)var t=pt.return;else t=pt,na=vr=null,Yu(t),is=null,ro=0,t=pt;for(;t!==null;)d0(t.alternate,t),t=t.return;pt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,SS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,Uf(),Xt=t,pt=a=ea(t.current,null),gt=n,It=0,ai=null,Ga=!1,us=Ne(t,n),Af=!1,fs=ri=wf=wr=Va=rn=0,Wn=Mo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return da=n,hl(),a}function I0(t,n){ot=null,F.H=po,n===ns||n===yl?(n=Jp(),It=3):n===Pu?(n=Jp(),It=4):It=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,pt===null&&(rn=1,Pl(t,fi(n,t.current)))}function B0(){var t=ni.current;return t===null?!0:(gt&4194048)===gt?mi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===mi:!1}function z0(){var t=F.H;return F.H=po,t===null?po:t}function F0(){var t=F.A;return F.A=Jx,t}function Yl(){rn=4,Ga||(gt&4194048)!==gt&&ni.current!==null||(us=!0),(Va&134217727)===0&&(wr&134217727)===0||Xt===null||Wa(Xt,gt,ri,!1)}function Lf(t,n,a){var o=Nt;Nt|=2;var u=z0(),f=F0();(Xt!==t||gt!==n)&&(Wl=null,hs(t,n)),n=!1;var _=rn;e:do try{if(It!==0&&pt!==null){var R=pt,H=ai;switch(It){case 8:Uf(),_=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var ie=It;if(It=0,ai=null,ps(t,R,H,ie),a&&us){_=0;break e}break;default:ie=It,It=0,ai=null,ps(t,R,H,ie)}}tS(),_=rn;break}catch(_e){I0(t,_e)}while(!0);return n&&t.shellSuspendCounter++,na=vr=null,Nt=o,F.H=u,F.A=f,pt===null&&(Xt=null,gt=0,hl()),_}function tS(){for(;pt!==null;)H0(pt)}function nS(t,n){var a=Nt;Nt|=2;var o=z0(),u=F0();Xt!==t||gt!==n?(Wl=null,Xl=Ft()+500,hs(t,n)):us=Ne(t,n);e:do try{if(It!==0&&pt!==null){n=pt;var f=ai;t:switch(It){case 1:It=0,ai=null,ps(t,n,f,1);break;case 2:case 9:if(Kp(f)){It=0,ai=null,G0(n);break}n=function(){It!==2&&It!==9||Xt!==t||(It=7),Fi(t)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Kp(f)?(It=0,ai=null,G0(n)):(It=0,ai=null,ps(t,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var R=pt;if(_?Ag(_):R.stateNode.complete){It=0,ai=null;var H=R.sibling;if(H!==null)pt=H;else{var ie=R.return;ie!==null?(pt=ie,jl(ie)):pt=null}break t}}It=0,ai=null,ps(t,n,f,5);break;case 6:It=0,ai=null,ps(t,n,f,6);break;case 8:Uf(),rn=6;break e;default:throw Error(r(462))}}iS();break}catch(_e){I0(t,_e)}while(!0);return na=vr=null,F.H=o,F.A=u,Nt=a,pt!==null?0:(Xt=null,gt=0,hl(),rn)}function iS(){for(;pt!==null&&!nn();)H0(pt)}function H0(t){var n=u0(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?jl(t):pt=n}function G0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=a0(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=a0(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:Yu(n);default:d0(a,n),n=pt=Fp(n,da),n=u0(a,n,da)}t.memoizedProps=t.pendingProps,n===null?jl(t):pt=n}function ps(t,n,a,o){na=vr=null,Yu(n),is=null,ro=0;var u=n.return;try{if(Wx(t,u,n,a,gt)){rn=1,Pl(t,fi(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;rn=1,Pl(t,fi(a,t.current)),pt=null;return}n.flags&32768?(St||o===1?t=!0:us||(gt&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),V0(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){V0(n,Ga);return}t=n.return;var a=jx(n.alternate,n,da);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);rn===0&&(rn=5)}function V0(t,n){do{var a=Zx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);rn=6,pt=null}function k0(t,n,a,o,u,f,_,R,H){t.cancelPendingCommit=null;do Zl();while(Sn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Su,Zt(t,a,f,_,R,H),t===Xt&&(pt=Xt=null,gt=0),ds=n,Xa=t,ha=a,Cf=f,Nf=u,U0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oS(J,function(){return j0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=k.p,k.p=2,_=Nt,Nt|=4;try{Kx(t,n,a)}finally{Nt=_,k.p=u,F.T=o}}Sn=1,X0(),W0(),q0()}}function X0(){if(Sn===1){Sn=0;var t=Xa,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=k.p;k.p=2;var u=Nt;Nt|=4;try{E0(n,t);var f=Wf,_=Np(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Cp(R.ownerDocument.documentElement,R)){if(H!==null&&mu(R)){var ie=H.start,_e=H.end;if(_e===void 0&&(_e=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(_e,R.value.length);else{var Me=R.ownerDocument||document,ce=Me&&Me.defaultView||window;if(ce.getSelection){var fe=ce.getSelection(),We=R.textContent.length,et=Math.min(H.start,We),Vt=H.end===void 0?et:Math.min(H.end,We);!fe.extend&&et>Vt&&(_=Vt,Vt=et,et=_);var Q=Rp(R,et),X=Rp(R,Vt);if(Q&&X&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var ne=Me.createRange();ne.setStart(Q.node,Q.offset),fe.removeAllRanges(),et>Vt?(fe.addRange(ne),fe.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),fe.addRange(ne))}}}}for(Me=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&Me.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}oc=!!Xf,Wf=Xf=null}finally{Nt=u,k.p=o,F.T=a}}t.current=n,Sn=2}}function W0(){if(Sn===2){Sn=0;var t=Xa,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=k.p;k.p=2;var u=Nt;Nt|=4;try{x0(t,n.alternate,n)}finally{Nt=u,k.p=o,F.T=a}}Sn=3}}function q0(){if(Sn===4||Sn===3){Sn=0,j();var t=Xa,n=ds,a=ha,o=U0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,ds=Xa=null,Y0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),Xs(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=k.p,k.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{F.T=n,k.p=u}}(ha&3)!==0&&Zl(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Df?bo++:(bo=0,Df=t):bo=0,Eo(0)}}function Y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Zl(){return X0(),W0(),q0(),j0()}function j0(){if(Sn!==5)return!1;var t=Xa,n=Cf;Cf=0;var a=Xs(ha),o=F.T,u=k.p;try{k.p=32>a?32:a,F.T=null,a=Nf,Nf=null;var f=Xa,_=ha;if(Sn=0,ds=Xa=null,ha=0,(Nt&6)!==0)throw Error(r(331));var R=Nt;if(Nt|=4,C0(f.current),A0(f,f.current,_,a),Nt=R,Eo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(pe,f)}catch{}return!0}finally{k.p=u,F.T=o,Y0(t,n)}}function Z0(t,n,a){n=fi(a,n),n=cf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Ve(t,2),Fi(t))}function Bt(t,n,a){if(t.tag===3)Z0(t,t,a);else for(;n!==null;){if(n.tag===3){Z0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=fi(a,t),a=Km(2),o=Ba(n,a,2),o!==null&&(Qm(a,o,n,t),Ve(o,2),Fi(o));break}}n=n.return}}function Of(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new $x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),t=aS.bind(null,t,n,a),n.then(t,t))}function aS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(gt&a)===a&&(rn===4||rn===3&&(gt&62914560)===gt&&300>Ft()-kl?(Nt&2)===0&&hs(t,0):wf|=a,fs===gt&&(fs=0)),Fi(t)}function K0(t,n){n===0&&(n=Te()),t=mr(t,n),t!==null&&(Ve(t,n),Fi(t))}function rS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),K0(t,a)}function sS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),K0(t,a)}function oS(t,n){return ln(t,n)}var Kl=null,ms=null,Pf=!1,Ql=!1,If=!1,qa=0;function Fi(t){t!==ms&&t.next===null&&(ms===null?Kl=ms=t:ms=ms.next=t),Ql=!0,Pf||(Pf=!0,cS())}function Eo(t,n){if(!If&&Ql){If=!0;do for(var a=!1,o=Kl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,eg(o,f))}else f=gt,f=ve(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ne(o,f)||(a=!0,eg(o,f));o=o.next}while(a);If=!1}}function lS(){Q0()}function Q0(){Ql=Pf=!1;var t=0;qa!==0&&xS()&&(t=qa);for(var n=Ft(),a=null,o=Kl;o!==null;){var u=o.next,f=J0(o,n);f===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(f&3)!==0)&&(Ql=!0)),o=u}Sn!==0&&Sn!==5||Eo(t),qa!==0&&(qa=0)}function J0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ze(f),R=1<<_,H=u[_];H===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Be(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=Xt,a=gt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Xs(a)){case 2:case 8:a=b;break;case 32:a=J;break;case 268435456:a=me;break;default:a=J}return o=$0.bind(null,t),a=ln(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function $0(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zl()&&t.callbackNode!==a)return null;var o=gt;return o=ve(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(O0(t,o,n),J0(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?$0.bind(null,t):null)}function eg(t,n){if(Zl())return null;O0(t,n,!0)}function cS(){yS(function(){(Nt&6)!==0?ln(I,lS):Q0()})}function Bf(){if(qa===0){var t=es;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),qa=t}return qa}function tg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fr(""+t)}function ng(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=tg((u[Tn]||null).action),_=o.submitter;_&&(n=(n=_[Tn]||null)?tg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new cl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var H=_?ng(u,_):new FormData(u);nf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=_?ng(u,_):new FormData(u),nf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var zf=0;zf<xu.length;zf++){var Ff=xu[zf],fS=Ff.toLowerCase(),dS=Ff[0].toUpperCase()+Ff.slice(1);Ti(fS,"on"+dS)}Ti(Lp,"onAnimationEnd"),Ti(Op,"onAnimationIteration"),Ti(Pp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Rx,"onTransitionRun"),Ti(Cx,"onTransitionStart"),Ti(Nx,"onTransitionCancel"),Ti(Ip,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function ig(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],H=R.instance,ie=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(_e){dl(_e)}u.currentTarget=null,f=H}else for(_=0;_<o.length;_++){if(R=o[_],H=R.instance,ie=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(_e){dl(_e)}u.currentTarget=null,f=H}}}}function mt(t,n){var a=n[lr];a===void 0&&(a=n[lr]=new Set);var o=t+"__bubble";a.has(o)||(ag(n,t,2,!1),a.add(o))}function Hf(t,n,a){var o=0;n&&(o|=4),ag(a,t,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[Jl]){t[Jl]=!0,rl.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||Hf(a,!1,t),Hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Hf("selectionchange",!1,n))}}function ag(t,n,a,o){switch(Lg(n)){case 2:var u=GS;break;case 8:u=VS;break;default:u=nd}a=u.bind(null,n,a,t),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Vf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ki(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=f=_;continue e}R=R.parentNode}}o=o.return}cp(function(){var ie=f,_e=au(a),Me=[];e:{var ce=Bp.get(t);if(ce!==void 0){var fe=cl,We=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":fe=sx;break;case"focusin":We="focus",fe=uu;break;case"focusout":We="blur",fe=uu;break;case"beforeblur":case"afterblur":fe=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=cx;break;case Lp:case Op:case Pp:fe=Qv;break;case Ip:fe=fx;break;case"scroll":case"scrollend":fe=qv;break;case"wheel":fe=hx;break;case"copy":case"cut":case"paste":fe=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=pp;break;case"toggle":case"beforetoggle":fe=mx}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),Q=et?ce!==null?ce+"Capture":null:ce;et=[];for(var X=ie,ne;X!==null;){var Se=X;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||Q===null||(Se=qs(X,Q),Se!=null&&et.push(Ao(X,Se,ne))),Vt)break;X=X.return}0<et.length&&(ce=new fe(ce,We,null,a,_e),Me.push({event:ce,listeners:et}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ce&&a!==iu&&(We=a.relatedTarget||a.fromElement)&&(Ki(We)||We[Hn]))break e;if((fe||ce)&&(ce=_e.window===_e?_e:(ce=_e.ownerDocument)?ce.defaultView||ce.parentWindow:window,fe?(We=a.relatedTarget||a.toElement,fe=ie,We=We?Ki(We):null,We!==null&&(Vt=c(We),et=We.tag,We!==Vt||et!==5&&et!==27&&et!==6)&&(We=null)):(fe=null,We=ie),fe!==We)){if(et=dp,Se="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=pp,Se="onPointerLeave",Q="onPointerEnter",X="pointer"),Vt=fe==null?ce:ur(fe),ne=We==null?ce:ur(We),ce=new et(Se,X+"leave",fe,a,_e),ce.target=Vt,ce.relatedTarget=ne,Se=null,Ki(_e)===ie&&(et=new et(Q,X+"enter",We,a,_e),et.target=ne,et.relatedTarget=Vt,Se=et),Vt=Se,fe&&We)t:{for(et=pS,Q=fe,X=We,ne=0,Se=Q;Se;Se=et(Se))ne++;Se=0;for(var $e=X;$e;$e=et($e))Se++;for(;0<ne-Se;)Q=et(Q),ne--;for(;0<Se-ne;)X=et(X),Se--;for(;ne--;){if(Q===X||X!==null&&Q===X.alternate){et=Q;break t}Q=et(Q),X=et(X)}et=null}else et=null;fe!==null&&rg(Me,ce,fe,et,!1),We!==null&&Vt!==null&&rg(Me,Vt,We,et,!0)}}e:{if(ce=ie?ur(ie):window,fe=ce.nodeName&&ce.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ce.type==="file")var wt=Mp;else if(Sp(ce))if(bp)wt=Tx;else{wt=bx;var Ye=Mx}else fe=ce.nodeName,!fe||fe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ie&&Dt(ie.elementType)&&(wt=Mp):wt=Ex;if(wt&&(wt=wt(t,ie))){yp(Me,wt,a,_e);break e}Ye&&Ye(t,ce,ie),t==="focusout"&&ie&&ce.type==="number"&&ie.memoizedProps.value!=null&&ht(ce,"number",ce.value)}switch(Ye=ie?ur(ie):window,t){case"focusin":(Sp(Ye)||Ye.contentEditable==="true")&&(qr=Ye,gu=ie,eo=null);break;case"focusout":eo=gu=qr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Dp(Me,a,_e);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Dp(Me,a,_e)}var lt;if(du)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Wr?vp(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(mp&&a.locale!=="ko"&&(Wr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Wr&&(lt=up()):(Na=_e,ou="value"in Na?Na.value:Na.textContent,Wr=!0)),Ye=$l(ie,_t),0<Ye.length&&(_t=new hp(_t,t,null,a,_e),Me.push({event:_t,listeners:Ye}),lt?_t.data=lt:(lt=xp(a),lt!==null&&(_t.data=lt)))),(lt=_x?vx(t,a):xx(t,a))&&(_t=$l(ie,"onBeforeInput"),0<_t.length&&(Ye=new hp("onBeforeInput","beforeinput",null,a,_e),Me.push({event:Ye,listeners:_t}),Ye.data=lt)),uS(Me,t,ie,a,_e)}ig(Me,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qs(t,a),u!=null&&o.unshift(Ao(t,u,f)),u=qs(t,n),u!=null&&o.push(Ao(t,u,f))),t.tag===3)return o;t=t.return}return[]}function pS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rg(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,H=R.alternate,ie=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ie===null||(H=ie,u?(ie=qs(a,f),ie!=null&&_.unshift(Ao(a,ie,H))):u||(ie=qs(a,f),ie!=null&&_.push(Ao(a,ie,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function og(t,n){return n=sg(n),sg(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||$n(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&$n(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Le(t,a,o))}}function kf(t,n,a,o,u,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?$n(t,o):(typeof o=="number"||typeof o=="bigint")&&$n(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,_,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var R=f=_=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":_=_e;break;case"checked":H=_e;break;case"defaultChecked":ie=_e;break;case"value":f=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Gt(t,n,o,_e,a,null)}}Dn(t,f,R,H,ie,_,u,!1);return;case"select":mt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Gt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(t,n,_,R,a,null)}bi(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,H,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)mt(To[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,ie,o,a,null)}return;default:if(Dt(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&kf(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Gt(t,n,R,o,a,null))}function _S(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,H=null,ie=null,_e=null;for(fe in a){var Me=a[fe];if(a.hasOwnProperty(fe)&&Me!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Me;default:o.hasOwnProperty(fe)||Gt(t,n,fe,null,o,Me)}}for(var ce in o){var fe=o[ce];if(Me=a[ce],o.hasOwnProperty(ce)&&(fe!=null||Me!=null))switch(ce){case"type":f=fe;break;case"name":u=fe;break;case"checked":ie=fe;break;case"defaultChecked":_e=fe;break;case"value":_=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Me&&Gt(t,n,ce,fe,o,Me)}}Fe(t,_,R,H,ie,_e,f,u);return;case"select":fe=_=R=ce=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ce=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==H&&Gt(t,n,u,f,o,H)}n=R,a=_,o=fe,ce!=null?xn(t,!!a,ce,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":fe=ce=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ce=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(t,n,_,u,o,f)}Jn(t,ce,fe);return;case"option":for(var We in a)if(ce=a[We],a.hasOwnProperty(We)&&ce!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Gt(t,n,We,null,o,ce)}for(H in o)if(ce=o[H],fe=a[H],o.hasOwnProperty(H)&&ce!==fe&&(ce!=null||fe!=null))switch(H){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Gt(t,n,H,ce,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ce=a[et],a.hasOwnProperty(et)&&ce!=null&&!o.hasOwnProperty(et)&&Gt(t,n,et,null,o,ce);for(ie in o)if(ce=o[ie],fe=a[ie],o.hasOwnProperty(ie)&&ce!==fe&&(ce!=null||fe!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Gt(t,n,ie,ce,o,fe)}return;default:if(Dt(n)){for(var Vt in a)ce=a[Vt],a.hasOwnProperty(Vt)&&ce!==void 0&&!o.hasOwnProperty(Vt)&&kf(t,n,Vt,void 0,o,ce);for(_e in o)ce=o[_e],fe=a[_e],!o.hasOwnProperty(_e)||ce===fe||ce===void 0&&fe===void 0||kf(t,n,_e,ce,o,fe);return}}for(var Q in a)ce=a[Q],a.hasOwnProperty(Q)&&ce!=null&&!o.hasOwnProperty(Q)&&Gt(t,n,Q,null,o,ce);for(Me in o)ce=o[Me],fe=a[Me],!o.hasOwnProperty(Me)||ce===fe||ce==null&&fe==null||Gt(t,n,Me,ce,o,fe)}function lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&lg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>R)break;var _e=H.transferSize,Me=H.initiatorType;_e&&lg(Me)&&(H=H.responseEnd,_+=_e*(H<R?1:(R-ie)/(H-ie)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xf=null,Wf=null;function ec(t){return t.nodeType===9?t:t.ownerDocument}function cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function xS(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(MS)}:fg;function MS(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function hg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Aa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);xs(n)}function pg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),wa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function bS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function ES(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function mg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$?"||t.data==="$~"}function Kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qf=null;function gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function _g(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function vg(t,n,a){switch(n=ec(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);wa(t)}var _i=new Map,xg=new Set;function tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=k.d;k.d={f:AS,r:wS,D:RS,C:CS,L:NS,m:DS,X:LS,S:US,M:OS};function AS(){var t=pa.f(),n=ql();return t||n}function wS(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Im(n):pa.r(t)}var gs=typeof document>"u"?null:document;function Sg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),xg.has(u)||(xg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),hn(n),o.head.appendChild(n)))}}function RS(t){pa.D(t),Sg("dns-prefetch",t,null)}function CS(t,n){pa.C(t,n),Sg("preconnect",t,n)}function NS(t,n,a){pa.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}_i.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(f))||n==="script"&&o.querySelector(Co(f))||(n=o.createElement("link"),Cn(n,"link",t),hn(n),o.head.appendChild(n)))}}function DS(t,n){pa.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!_i.has(f)&&(t=x({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}o=a.createElement("link"),Cn(o,"link",t),hn(o),a.head.appendChild(o)}}}function US(t,n,a){pa.S(t,n,a);var o=gs;if(o&&t){var u=Ra(o).hoistableStyles,f=_s(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Ro(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&Jf(t,a);var H=_=o.createElement("link");hn(H),Cn(H,"link",t),H._p=new Promise(function(ie,_e){H.onload=ie,H.onerror=_e}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function LS(t,n){pa.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(Co(u)),f||(t=x({src:t,async:!0},n),(n=_i.get(u))&&$f(t,n),f=a.createElement("script"),hn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function OS(t,n){pa.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(Co(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&$f(t,n),f=a.createElement("script"),hn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function yg(t,n,a,o){var u=(u=$.current)?tc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=Ra(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Ro(t)))&&!f._p&&(_.instance=f,_.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||PS(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+Ot(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function Mg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function PS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),hn(n),t.head.appendChild(n))}function vs(t){return'[src="'+Ot(t)+'"]'}function Co(t){return"script[async]"+t}function bg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Cn(o,"style",u),nc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var f=t.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=Mg(a),(u=_i.get(u))&&Jf(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Cn(f,"link",o),n.state.loading|=4,nc(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(Co(f)))?(n.instance=u,hn(u),u):(o=a,(u=_i.get(f))&&(o=x({},a),$f(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,t));return n.instance}function nc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ic=null;function Eg(t,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Aa]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function Tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function IS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function BS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),f=n.querySelector(Ro(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ac.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=Mg(o),(u=_i.get(u))&&Jf(o,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ac.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ed=0;function zS(t,n){return t.stylesheets&&t.count===0&&sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ed===0&&(ed=62500*vS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ed?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function sc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(FS,t),rc=null,ac.call(t))}function FS(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var o=a.get(null);else{a=new Map,rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:B,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function HS(t,n,a,o,u,f,_,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function wg(t,n,a,o,u,f,_,R,H,ie,_e,Me){return t=new HS(t,n,a,_,H,ie,_e,Me,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Iu(f),t}function Rg(t){return t?(t=Zr,t):Zr}function Cg(t,n,a,o,u,f){u=Rg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(t,o,n),a!==null&&(qn(a,t,n),oo(a,t,n))}function Ng(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function td(t,n){Ng(t,n),(t=t.alternate)&&Ng(t,n)}function Dg(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&qn(n,t,67108864),td(t,67108864)}}function Ug(t){if(t.tag===13||t.tag===31){var n=si();n=ks(n);var a=mr(t,n);a!==null&&qn(a,t,n),td(t,n)}}var oc=!0;function GS(t,n,a,o){var u=F.T;F.T=null;var f=k.p;try{k.p=2,nd(t,n,a,o)}finally{k.p=f,F.T=u}}function VS(t,n,a,o){var u=F.T;F.T=null;var f=k.p;try{k.p=8,nd(t,n,a,o)}finally{k.p=f,F.T=u}}function nd(t,n,a,o){if(oc){var u=id(o);if(u===null)Vf(t,n,o,lc,a),Og(t,o);else if(XS(u,t,n,a,o))o.stopPropagation();else if(Og(t,o),n&4&&-1<kS.indexOf(t)){for(;u!==null;){var f=Qi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Re(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-ze(_);R.entanglements[1]|=H,_&=~H}Fi(f),(Nt&6)===0&&(Xl=Ft()+500,Eo(0))}}break;case 31:case 13:R=mr(f,2),R!==null&&qn(R,f,2),ql(),td(f,2)}if(f=id(o),f===null&&Vf(t,n,o,lc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Vf(t,n,o,null,a)}}function id(t){return t=au(t),ad(t)}var lc=null;function ad(t){if(lc=null,t=Ki(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lc=t,null}function Lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case I:return 2;case b:return 8;case J:case oe:return 32;case me:return 268435456;default:return 32}default:return 32}}var rd=!1,ja=null,Za=null,Ka=null,Do=new Map,Uo=new Map,Qa=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qi(n),n!==null&&Dg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function XS(t,n,a,o,u){switch(n){case"focusin":return ja=Lo(ja,t,n,a,o,u),!0;case"dragenter":return Za=Lo(Za,t,n,a,o,u),!0;case"mouseover":return Ka=Lo(Ka,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Do.set(f,Lo(Do.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Uo.set(f,Lo(Uo.get(f)||null,t,n,a,o,u)),!0}return!1}function Pg(t){var n=Ki(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){Ug(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Vr(t.priority,function(){Ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);iu=o,a.target.dispatchEvent(o),iu=null}else return n=Qi(a),n!==null&&Dg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ig(t,n,a){cc(t)&&a.delete(n)}function WS(){rd=!1,ja!==null&&cc(ja)&&(ja=null),Za!==null&&cc(Za)&&(Za=null),Ka!==null&&cc(Ka)&&(Ka=null),Do.forEach(Ig),Uo.forEach(Ig)}function uc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,WS)))}var fc=null;function Bg(t){fc!==t&&(fc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ad(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(H){return uc(H,t)}ja!==null&&uc(ja,t),Za!==null&&uc(Za,t),Ka!==null&&uc(Ka,t),Do.forEach(n),Uo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[Tn]||null;if(typeof f=="function")_||Bg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Tn]||null)R=_.formAction;else if(ad(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Bg(a)}}}function zg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sd(t){this._internalRoot=t}dc.prototype.render=sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=si();Cg(a,o,t,n,null,null)},dc.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cg(t.current,2,null,t,null,null),ql(),n[Hn]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&Pg(t)}};var Fg=e.version;if(Fg!=="19.2.8")throw Error(r(527,Fg,"19.2.8"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var qS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{pe=hc.inject(qS),ge=hc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=qm,f=Ym,_=jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=wg(t,1,!1,null,null,a,o,null,u,f,_,zg),t[Hn]=n.current,Gf(t),new sd(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=qm,_=Ym,R=jm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=wg(t,1,!0,n,a??null,o,u,H,f,_,R,zg),n.context=Rg(null),a=n.current,o=si(),o=ks(o),u=Ia(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Fi(n),t[Hn]=n.current,Gf(t),new dc(n)},Po.version="19.2.8",Po}var Zg;function iy(){if(Zg)return cd.exports;Zg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch{}}return s(),cd.exports=ny(),cd.exports}var ay=iy();const ry="modulepreload",sy=function(s){return"/"+s},Kg={},oy=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let d=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),m=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));l=d(i.map(h=>{if(h=sy(h),h in Kg)return;Kg[h]=!0;const v=h.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${x}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":ry,v||(g.as="script"),g.crossOrigin="",g.href=h,m&&g.setAttribute("nonce",m),document.head.appendChild(g),v)return new Promise((y,E)=>{g.addEventListener("load",y),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function c(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return l.then(d=>{for(const p of d||[])p.status==="rejected"&&c(p.reason);return e().catch(c)})};const ly=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cy=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Qg=s=>{const e=cy(s);return e.charAt(0).toUpperCase()+e.slice(1)},tv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),uy=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dy=ft.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...p},m)=>ft.createElement("svg",{ref:m,...fy,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:tv("lucide",l),...!c&&!uy(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,v])=>ft.createElement(h,v)),...Array.isArray(c)?c:[c]]));const on=(s,e)=>{const i=ft.forwardRef(({className:r,...l},c)=>ft.createElement(dy,{ref:c,iconNode:e,className:tv(`lucide-${ly(Qg(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Qg(s),i};const hy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zc=on("arrow-right",hy);const py=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],my=on("book-open",py);const gy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yo=on("check",gy);const _y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],nv=on("circle-alert",_y);const vy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xy=on("circle-check-big",vy);const Sy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],yy=on("circle-check",Sy);const My=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],by=on("clipboard-paste",My);const Ey=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jo=on("copy",Ey);const Ty=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ay=on("file-text",Ty);const wy=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Ry=on("key",wy);const Cy=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Ny=on("link-2",Cy);const Dy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],iv=on("loader-circle",Dy);const Uy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],av=on("lock",Uy);const Ly=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],Oy=on("octagon-alert",Ly);const Py=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],hd=on("play",Py);const Iy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],By=on("refresh-cw",Iy);const zy=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Fy=on("rotate-ccw",zy);const Hy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],rv=on("shield-alert",Hy);const Gy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gh=on("shield-check",Gy);const Vy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ky=on("trash-2",Vy);const Xy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Wy=on("triangle-alert",Xy);const qy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sv=on("x",qy);function Fc({children:s,className:e="",id:i}){return N.jsx("div",{className:"w-full relative",children:N.jsxs("div",{id:i,className:`relative overflow-hidden ${e}`,children:[N.jsx("div",{className:"pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent z-10"}),N.jsx("div",{className:"relative z-20 w-full",children:s})]})})}async function ov(s){if(!s)return!1;if(typeof navigator<"u"&&navigator.clipboard&&typeof navigator.clipboard.writeText=="function")try{return await navigator.clipboard.writeText(s),!0}catch{}try{const e=document.createElement("textarea");e.value=s,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",e.setAttribute("readonly",""),document.body.appendChild(e),e.focus(),e.select();const i=document.execCommand("copy");if(document.body.removeChild(e),i)return!0}catch{}return!1}async function Yy(){if(typeof navigator<"u"&&navigator.clipboard&&typeof navigator.clipboard.readText=="function")try{return await navigator.clipboard.readText()||""}catch{return""}return""}const jy=({result:s})=>{const[e,i]=ft.useState(null),[r,l]=ft.useState(!1),[c,d]=ft.useState(!1),[p,m]=ft.useState(s.banner_url||s.banner_image_url||""),[h,v]=ft.useState(!1),x=!!(s.restricted||s.account_restricted||s.account_banned||s.error==="YOUR ACCOUNT IS BANNED"||s.error==="YOUR ACCOUNT WILL BE BANNED"||s.restricted_message==="YOUR ACCOUNT IS BANNED"||s.restricted_message==="YOUR ACCOUNT WILL BE BANNED"),g=(typeof s.nickname=="string"?s.nickname:s.nickname&&typeof s.nickname=="object"&&s.nickname.name?String(s.nickname.name):s.nickname?String(s.nickname):"Player").trim()||"Player",y=(typeof s.region=="string"?s.region:s.region&&typeof s.region=="object"&&s.region.name?String(s.region.name):s.region?String(s.region):"IND").toUpperCase().trim()||"IND",E=String(s.account_id||s.user_id||s.player_uid||"").trim(),L=s.level!==void 0&&s.level!==null&&typeof s.level!="object"&&String(s.level).trim()!==""&&String(s.level).trim()!=="0"&&String(s.level).trim()!=="N/A"&&String(s.level).trim()!=="..."?String(s.level).trim():"",M=s.liked!==void 0&&s.liked!==null&&typeof s.liked!="object"&&String(s.liked).trim()!==""&&String(s.liked).trim()!=="0"&&String(s.liked).trim()!=="N/A"&&String(s.liked).trim()!=="..."?String(s.liked).trim():s.likes!==void 0&&s.likes!==null&&typeof s.likes!="object"&&String(s.likes).trim()!==""&&String(s.likes).trim()!=="0"&&String(s.likes).trim()!=="N/A"&&String(s.likes).trim()!=="..."?String(s.likes).trim():"",[S,P]=ft.useState(L),[B,C]=ft.useState(M),[O,D]=ft.useState(!1);Vi.useEffect(()=>{const Ee=s.level!==void 0&&s.level!==null&&typeof s.level!="object"&&String(s.level).trim()!==""&&String(s.level).trim()!=="0"&&String(s.level).trim()!=="N/A"&&String(s.level).trim()!=="..."?String(s.level).trim():"";P(Ee);const Ae=s.liked!==void 0&&s.liked!==null&&typeof s.liked!="object"&&String(s.liked).trim()!==""&&String(s.liked).trim()!=="0"&&String(s.liked).trim()!=="N/A"&&String(s.liked).trim()!=="..."?String(s.liked).trim():s.likes!==void 0&&s.likes!==null&&typeof s.likes!="object"&&String(s.likes).trim()!==""&&String(s.likes).trim()!=="0"&&String(s.likes).trim()!=="N/A"&&String(s.likes).trim()!=="..."?String(s.likes).trim():"";C(Ae),v(!1),d(!1),D(!1)},[s.level,s.liked,s.likes,s.account_id,s.access_token]);const z=S,T=String(typeof s.guild_name=="string"?s.guild_name:s.guild_name&&typeof s.guild_name=="object"&&s.guild_name.name?s.guild_name.name:s.guild_name??"").trim(),A=T.toLowerCase()==="no guild"||T.toLowerCase()==="noguild"?"":T,G=s.head_pic??s.headPic??0,V=s.banner_id??s.bannerId??0,Z=s.pin_id??s.pinId??0,ue=E&&E!=="100067890"&&E!=="N/A"&&E!=="0"?`/api/banner-image?uid=${encodeURIComponent(E)}`:"",se=z&&z!=="..."&&z!=="N/A"?z:"0",K=`/api/banner-image?headPic=${encodeURIComponent(String(G))}&bannerId=${encodeURIComponent(String(V))}&name=${encodeURIComponent(g)}&level=${encodeURIComponent(se)}&guild=${encodeURIComponent(A)}&pinId=${encodeURIComponent(String(Z))}&celebrity=0&frame=0`,F=ue||K,k=E&&E!=="100067890"?`/api/banner-image?uid=${encodeURIComponent(E)}`:F,ee=ue||p||s.banner_url||s.banner_image_url||F,he=h&&k||ee,de=!!(he&&he.trim()!=="");Vi.useEffect(()=>{ue?m(ue):(s.banner_url||s.banner_image_url)&&m(s.banner_url||s.banner_image_url||"")},[ue,s.banner_url,s.banner_image_url]),Vi.useEffect(()=>{if(!de){D(!0);return}D(!1);const Ee=setTimeout(()=>{D(!0)},7500);return()=>clearTimeout(Ee)},[de,he]);const U=Vi.useRef("");Vi.useEffect(()=>{U.current!==he&&(U.current=he,l(!1),d(!1))},[he]),Vi.useEffect(()=>{if(!de||!he)return;let Ee=!0;const Ae=new Image;return Ae.referrerPolicy="no-referrer",Ae.src=he,Ae.complete?(l(!0),d(!1)):(Ae.onload=()=>{Ee&&(l(!0),d(!1))},Ae.onerror=()=>{Ee&&(!h&&E?v(!0):(d(!0),D(!0)))}),()=>{Ee=!1}},[he,h,E,de]),Vi.useEffect(()=>{if(!E||E==="100067890"||E==="N/A"||E==="0")return;let Ee=!0;const Ae=`/api/banner-image?uid=${encodeURIComponent(E)}`;return m(Ae),fetch(`/api/accinfo?uid=${encodeURIComponent(E)}`).then($=>$.json()).then($=>{if(!Ee||!$)return;const ye=$==null?void 0:$.level,be=($==null?void 0:$.liked)??($==null?void 0:$.likes);ye!=null&&String(ye).trim()!==""&&String(ye).trim()!=="0"&&String(ye).trim()!=="N/A"&&String(ye).trim()!=="..."?P(String(ye).trim()):P(""),be!=null&&String(be).trim()!==""&&String(be).trim()!=="0"&&String(be).trim()!=="N/A"&&String(be).trim()!=="..."?C(String(be).trim()):C(""),m(Ae)}).catch(()=>{Ee&&D(!0)}),()=>{Ee=!1}},[E]);const W=()=>{!h&&E?v(!0):d(!0)},xe=async(Ee,Ae)=>{try{await ov(Ee)&&(i(Ae),setTimeout(()=>i(null),2e3))}catch{}};return N.jsxs("div",{id:"cyber-player-profile-section",className:"w-full select-none space-y-3 sm:space-y-3.5 font-sans",children:[x&&N.jsx("div",{id:"account-banned-alert-banner",className:"w-full rounded-[18px] border-2 border-red-500/80 bg-gradient-to-r from-red-950/90 via-red-900/80 to-red-950/90 p-3.5 sm:p-4 text-center shadow-[0_0_30px_rgba(239,68,68,0.35)] animate-pulse",children:N.jsxs("div",{className:"flex items-center justify-center gap-2",children:[N.jsx("span",{className:"text-xl sm:text-2xl",children:"⚠️"}),N.jsx("span",{className:"text-sm sm:text-base font-black tracking-wider text-red-100 uppercase font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",children:"YOUR ACCOUNT IS BANNED"}),N.jsx("span",{className:"text-xl sm:text-2xl",children:"⚠️"})]})}),N.jsxs("div",{id:"player-banner-card",className:"w-full rounded-[22px] border border-[#a855f7]/35 bg-gradient-to-b from-[#130b26] via-[#0d071a] to-[#080414] p-3 sm:p-3.5 shadow-[0_0_28px_rgba(168,85,247,0.14),0_14px_32px_rgba(0,0,0,0.9)] transition-all",children:[N.jsx("div",{className:"text-center py-1 sm:py-1.5 pb-2.5",children:N.jsx("h3",{className:"font-extrabold text-sm sm:text-base tracking-[0.16em] text-[#f472b6] uppercase font-sans drop-shadow-[0_0_12px_rgba(244,114,182,0.45)]",children:"PLAYER BANNER"})}),N.jsxs("div",{className:"w-full rounded-xl sm:rounded-[14px] overflow-hidden relative shadow-[0_0_20px_rgba(168,85,247,0.18),0_8px_24px_rgba(0,0,0,0.9)] border border-purple-500/30 bg-[#060310] aspect-[4/1] flex items-center justify-center",children:[!c&&r&&de&&N.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none rounded-xl sm:rounded-[14px]",children:[N.jsx("img",{src:he,alt:"","aria-hidden":"true",referrerPolicy:"no-referrer",className:"w-full h-full object-cover filter blur-xl opacity-40 scale-110"}),N.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#060310]/60 via-transparent to-[#060310]/30"})]}),de&&!r&&!c&&!O&&N.jsx("div",{id:"banner-circle-loading-spinner",className:"absolute inset-0 flex items-center justify-center bg-[#070312]/95 z-20",children:N.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/10 shadow-lg",children:[N.jsx("div",{className:"w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full border-[2.5px] border-white/25 border-t-white border-r-white/80 animate-spin shrink-0",style:{animationDuration:"0.8s"}}),N.jsx("span",{className:"text-xs sm:text-sm font-medium tracking-wide text-white font-sans select-none",children:"Loading banner."})]})}),de&&N.jsx("img",{src:he,alt:"Player Banner",loading:"eager",decoding:"async",referrerPolicy:"no-referrer",onLoad:()=>{l(!0),d(!1)},onError:W,className:`relative z-10 w-full h-full object-contain sm:object-fill transition-opacity duration-150 select-none pointer-events-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] ${r?"opacity-100":"opacity-0"}`}),(!de||O||c)&&!r&&N.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#140b2a] via-[#0d071d] to-[#080314] text-center p-3 z-15 select-none",children:[N.jsxs("div",{className:"flex items-center gap-2 text-purple-300/40 text-[11px] sm:text-xs font-mono tracking-wider",children:[N.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-500/40"}),N.jsx("span",{children:"NO BANNER AVAILABLE"}),N.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-500/40"})]}),de&&c&&N.jsx("button",{type:"button",onClick:()=>{d(!1),l(!1),D(!1),v(Ee=>!Ee)},className:"mt-2 px-3 py-1 text-[11px] font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition cursor-pointer",children:"Retry"})]})]})]}),N.jsx("div",{id:"player-stats-card",className:"w-full rounded-[22px] border border-[#a855f7]/30 bg-gradient-to-b from-[#120a24] via-[#0c0617] to-[#070312] p-2.5 sm:p-3 shadow-[0_0_25px_rgba(168,85,247,0.1),0_12px_28px_rgba(0,0,0,0.85)] transition-all",children:N.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5",children:[N.jsxs("div",{onClick:()=>xe(g,"nickname"),className:"rounded-[14px] sm:rounded-[16px] bg-[#160d29]/90 border border-purple-900/30 hover:border-[#d946ef]/40 p-2.5 sm:p-3 flex flex-col justify-start transition-all hover:bg-[#1c1035] cursor-pointer group relative overflow-hidden min-w-0",title:"Click to copy nickname",children:[N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-[#d946ef] tracking-wider uppercase font-sans",children:"NICKNAME"}),e==="nickname"?N.jsx(Yo,{className:"w-3 h-3 text-emerald-400 animate-in fade-in"}):N.jsx(jo,{className:"w-3 h-3 text-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity"})]}),N.jsx("span",{className:"text-[12px] sm:text-[13px] md:text-[14px] font-bold text-white tracking-tight font-mono mt-1 select-all truncate block leading-snug",title:g,children:g})]}),N.jsxs("div",{onClick:()=>xe(y,"region"),className:"rounded-[14px] sm:rounded-[16px] bg-[#160d29]/90 border border-purple-900/30 hover:border-[#d946ef]/40 p-2.5 sm:p-3 flex flex-col justify-start transition-all hover:bg-[#1c1035] cursor-pointer group relative overflow-hidden min-w-0",title:"Click to copy region",children:[N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-[#d946ef] tracking-wider uppercase font-sans",children:"REGION"}),e==="region"?N.jsx(Yo,{className:"w-3 h-3 text-emerald-400 animate-in fade-in"}):N.jsx(jo,{className:"w-3 h-3 text-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity"})]}),N.jsx("span",{className:"text-[12px] sm:text-[13px] md:text-[14px] font-bold text-white tracking-normal font-mono mt-1 select-all block leading-snug",children:y})]}),N.jsxs("div",{onClick:()=>xe(E,"uid"),className:"rounded-[14px] sm:rounded-[16px] bg-[#160d29]/90 border border-purple-900/30 hover:border-[#d946ef]/40 p-2.5 sm:p-3 flex flex-col justify-start transition-all hover:bg-[#1c1035] cursor-pointer group relative overflow-hidden min-w-0",title:"Click to copy UID",children:[N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-[#d946ef] tracking-wider uppercase font-sans",children:"ACCOUNT UID"}),e==="uid"?N.jsx(Yo,{className:"w-3 h-3 text-emerald-400 animate-in fade-in"}):N.jsx(jo,{className:"w-3 h-3 text-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity"})]}),N.jsx("span",{className:"text-[12px] sm:text-[13px] md:text-[14px] font-bold text-white tracking-normal font-mono mt-1 select-all break-all block leading-snug",title:E,children:E})]})]})})]})},Jg={player:{imageUrl:"",scale:1,offsetX:0,offsetY:0,rotation:0,borderRadius:24},uid:{imageUrl:"",scale:1,offsetX:0,offsetY:0,rotation:0,borderRadius:24},region:{imageUrl:"",scale:1,offsetX:0,offsetY:0,rotation:0,borderRadius:24},level:{imageUrl:"",scale:1,offsetX:0,offsetY:0,rotation:0,borderRadius:24},like:{imageUrl:"",scale:1,offsetX:0,offsetY:0,rotation:0,borderRadius:24}},Zy="https://youtube.com/@hsxmaster-qcv?si=b0WPJ45T2tn3MZ_5",$g="https://youtube.com/@hsxmaster-qcv?si=b0WPJ45T2tn3MZ_5",e_="https://youtube.com/@hsxmaster-qcv?si=b0WPJ45T2tn3MZ_5",Ky="https://t.me/crackingteam22",Qy="https://www.instagram.com/hash_im2277/?hl=en",Jy="https://discord.com/channels/@me",t_="http://longbio.xnflive.in/",Io={facebook:"https://auth.garena.com/universal/oauth?platform=3&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/",vk:"https://auth.garena.com/universal/oauth?platform=5&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/",google:"https://auth.garena.com/universal/oauth?platform=8&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/",apple:"https://auth.garena.com/universal/oauth?platform=10&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/",twitter:"https://auth.garena.com/universal/oauth?platform=11&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/"},$y=({className:s="w-5 h-5"})=>N.jsx("svg",{className:s,viewBox:"0 0 24 24",fill:"currentColor",children:N.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),e1=({className:s="w-5 h-5"})=>N.jsxs("svg",{className:s,viewBox:"0 0 24 24",children:[N.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),N.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),N.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),N.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),t1=({className:s="w-5 h-5"})=>N.jsx("svg",{className:s,viewBox:"0 0 24 24",fill:"currentColor",children:N.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z"})}),n1=({className:s="w-5 h-5"})=>N.jsx("svg",{className:s,viewBox:"0 0 24 24",fill:"currentColor",children:N.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),i1=({className:s="w-5 h-5"})=>N.jsxs("svg",{className:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),N.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),N.jsx("line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"})]}),a1=({className:s="w-5 h-5"})=>N.jsx("svg",{className:s,viewBox:"0 0 24 24",fill:"currentColor",children:N.jsx("path",{d:"M13.162 18.994c.609 0 .858-.406.851-.915-.072-1.332.613-1.884 1.258-1.884.646 0 1.458 1.048 2.091 1.765.485.55 1.042 1.034 1.996 1.034h2.467c.928 0 1.458-.485 1.189-1.396-.46-1.558-2.616-3.83-3.69-4.832-.472-.44-.654-.654 0-1.564 1.385-1.928 3.097-4.568 3.39-6.07.135-.694-.287-1.132-.979-1.132h-2.467c-.63 0-.918.337-1.077.721-.497 1.218-1.636 3.344-2.825 4.67-.384.428-.585.578-.816.578-.17 0-.317-.11-.317-.745V6.782c0-.62-.178-.888-.707-.888h-3.87c-.4 0-.64.3-.64.585 0 .55.823.676.908 2.219v3.355c0 .736-.133.87-.428.87-.788 0-2.706-2.842-3.844-6.088-.236-.676-.566-.943-1.206-.943H2.072c-.754 0-.905.355-.905.746 0 .694.888 4.148 4.131 8.687 2.164 3.097 5.21 4.773 7.864 4.773z"})}),r1=({className:s="w-5 h-5"})=>N.jsxs("svg",{className:s,viewBox:"0 0 24 24",fill:"none",children:[N.jsx("circle",{cx:"12",cy:"12",r:"12",fill:"#1877F2"}),N.jsx("path",{d:"M16.5 12.05h-3v7.95h-3.3v-7.95h-1.6v-2.85h1.6v-1.85c0-2.2 1.3-3.4 3.3-3.4 1 0 1.9.08 2.1.1v2.45h-1.45c-1.07 0-1.28.5-1.28 1.25v1.45h2.7l-.37 2.85z",fill:"#ffffff"})]}),s1=({className:s="w-5 h-5"})=>N.jsx("img",{src:"/telegram_logo.svg",alt:"Telegram",className:`object-contain shrink-0 ${s}`,referrerPolicy:"no-referrer"});class Vh extends ft.Component{constructor(e){super(e),this.handleReset=()=>{this.setState({hasError:!1,error:null})},this.handleClearCacheAndReload=()=>{try{localStorage.removeItem("xnf_profile_icons_config"),localStorage.removeItem("xnf_custom_logo_base64"),localStorage.removeItem("xnf_admin_token"),localStorage.removeItem("xnf_admin_auth_time")}catch{}this.setState({hasError:!1,error:null}),window.location.reload()},this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,i){}render(){var e;return this.state.hasError?this.props.fallback?this.props.fallback:this.props.inline?null:N.jsx("div",{className:"min-h-screen bg-black text-white flex flex-col items-center justify-center p-4",children:N.jsxs("div",{className:"max-w-md w-full bg-[#0e0717] border border-purple-800/80 rounded-2xl p-6 shadow-2xl text-center space-y-4",children:[N.jsx("div",{className:"w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400",children:N.jsx(nv,{className:"w-6 h-6"})}),N.jsx("h2",{className:"text-lg font-bold text-white",children:"Something went wrong"}),N.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"An unexpected error occurred. You can reload the app to continue generating your access tokens."}),((e=this.state.error)==null?void 0:e.message)&&N.jsx("div",{className:"p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-[11px] font-mono text-red-300 text-left break-all max-h-24 overflow-y-auto",children:String(this.state.error.message)}),N.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5 pt-1",children:[N.jsxs("button",{type:"button",onClick:this.handleReset,className:"flex-1 py-2.5 px-4 bg-purple-900/60 hover:bg-purple-800 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer border border-purple-700/50",children:[N.jsx(Fy,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"Try Again"})]}),N.jsxs("button",{type:"button",onClick:this.handleClearCacheAndReload,className:"flex-1 py-2.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-900/30",children:[N.jsx(By,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"Reload Application"})]})]})]})}):this.props.children}}const o1=({onOpenTerms:s,configKey:e=0})=>{const[i,r]=ft.useState(""),[l,c]=ft.useState(!1),[d,p]=ft.useState(null),[m,h]=ft.useState(!1),[v,x]=ft.useState(null),[g,y]=ft.useState({websiteTitle:"ACCESS GENERATOR",websiteSubtitle:"BY @HSxMASTER",websiteLogoUrl:"/assets/aistudio/IMG_20261101_041259_324_ef88922d.jpg",customLogoBase64:"",generateBtnText:"GENERATE ACCESS",generateBtnGradient:"from-purple-600 via-fuchsia-500 to-pink-500",fullTutorialTitle:"FULL TUTORIAL",fullTutorialSubtitle:"click to watch how to get eat token",fullTutorialUrl:$g,secondMethodTitle:"2ND METHOD",secondMethodSubtitle:"click to watch how to get access token",secondMethodUrl:e_,longBioBtnText:"Go To Long Bio Website",longBioBtnGradient:"from-emerald-600 via-teal-500 to-cyan-500",longBioUrl:t_}),[E,L]=ft.useState(()=>{try{const O=localStorage.getItem("xnf_profile_icons_config");if(O){const D=JSON.parse(O);if(D&&typeof D=="object")return{...Jg,...D}}}catch{}return Jg});Vi.useEffect(()=>{try{localStorage.removeItem("xnf_custom_logo_base64")}catch{}fetch("/api/app-config").then(O=>O.json()).then(O=>{if(O&&O.success&&O.config){if(y(D=>({...D,...O.config})),O.config.customLogoBase64)try{localStorage.setItem("xnf_custom_logo_base64_v3",O.config.customLogoBase64)}catch{}else if(O.config.explicitLogoReset)try{localStorage.removeItem("xnf_custom_logo_base64_v3")}catch{}}}).catch(()=>{}),fetch("/api/profile-icons").then(O=>O.json()).then(O=>{if(O&&O.success&&O.config){L(O.config);try{localStorage.setItem("xnf_profile_icons_config",JSON.stringify(O.config))}catch{}}}).catch(()=>{})},[e]);const M=async(O,D)=>{try{await ov(O)&&(x(D),setTimeout(()=>x(null),2e3))}catch{}},S=async()=>{try{const O=await Yy();O&&O.trim()&&r(O.trim())}catch{}},P=()=>{r(""),h(!1),p(null)},B=async()=>{if(!i.trim()){h(!0),p(null);return}c(!0),h(!1);try{const O=i.trim().toLowerCase();if(O==="demo"||O==="test"||O==="sample"||O==="w8sojib"){p({success:!0,nickname:"W8SOJIBnヅ』",region:"BD",account_id:"16773433369",level:"2",banner_url:"/api/banner-image?uid=16773433369",access_token:"14f060774299fb93a5c884b2e811c05d762cba67830b8ad4e56bb35967bb17d8",account_restricted:!1,restricted:!1}),h(!1),c(!1);return}let D=i.trim().replace(/^```[a-z]*\s*/i,"").replace(/\s*```$/,"").replace(/^["'`]|["'`]$/g,"").replace(/^Bearer\s+/i,"").trim();if(D.includes("http://")||D.includes("https://")||D.includes("?"))try{const G=new URL(D.startsWith("http")?D:`https://dummy.com/${D.replace(/^\/+/,"")}`),V=G.searchParams.get("eat")||G.searchParams.get("it")||G.searchParams.get("id_token")||G.searchParams.get("access_token")||G.searchParams.get("token");V&&(D=V.trim())}catch{const G=D.match(/[?&](eat|it|id_token|access_token|token)=([^&#\s]+)/i);G&&G[2]&&(D=G[2].trim())}const z=D.replace(/^at_/,"").trim();if(z.length>0&&z.length!==64&&z.length<=70&&!/^\d{7,14}$/.test(z)){h(!0),c(!1),p(null);return}const T=await fetch("/api/convert-token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_token:i.trim(),provider:"eat",token_format:"garena_access_token"})}),A=await T.json();if(T.ok&&A.success){const G=typeof A.access_token=="string"?A.access_token:A.access_token?String(A.access_token):"",V=typeof A.jwt_token=="string"&&A.jwt_token.trim()?A.jwt_token.trim():typeof A.token=="string"&&A.token.startsWith("eyJ")?A.token.trim():"",Z=!!(V&&(V.startsWith("eyJ")||V.split(".").length===3)),ue=!!(A.account_restricted||A.restricted||A.account_banned||A.error==="YOUR ACCOUNT IS BANNED"||A.error==="YOUR ACCOUNT WILL BE BANNED"||A.restricted_message==="YOUR ACCOUNT IS BANNED"||A.restricted_message==="YOUR ACCOUNT WILL BE BANNED"||G&&!Z),se=String(typeof A.nickname=="string"&&A.nickname.trim()||(A.account_id?`Player_${String(A.account_id).slice(-4)}`:"Player")),K=String(A.account_id||A.user_id||A.player_uid||""),F=String(A.region||"IND").toUpperCase(),k=A.level!==void 0&&A.level!==null&&typeof A.level!="object"&&String(A.level).trim()!==""&&String(A.level).trim()!=="0"&&String(A.level).trim()!=="N/A"&&String(A.level).trim()!=="..."?A.level:"",ee=A.likes!==void 0&&A.likes!==null&&typeof A.likes!="object"&&String(A.likes).trim()!==""&&String(A.likes).trim()!=="0"&&String(A.likes).trim()!=="N/A"&&String(A.likes).trim()!=="..."?A.likes:A.liked!==void 0&&A.liked!==null&&typeof A.liked!="object"&&String(A.liked).trim()!==""&&String(A.liked).trim()!=="0"&&String(A.liked).trim()!=="N/A"&&String(A.liked).trim()!=="..."?A.liked:"",he=K&&K!=="N/A"&&K!=="0"?`/api/banner-image?uid=${encodeURIComponent(K)}`:A.banner_url||A.banner_image_url||"";p({success:!0,account_restricted:ue,restricted:ue,account_banned:ue,restricted_message:ue?"YOUR ACCOUNT IS BANNED":void 0,access_token:G,jwt_token:!ue&&Z?V:"",nickname:se,account_id:K,region:F,level:k,likes:ee,liked:ee,banner_url:he,banner_image_url:he,head_pic:A.head_pic??A.headPic??0,banner_id:A.banner_id??A.bannerId??0,pin_id:A.pin_id??A.pinId??0}),h(!1),K&&K!=="N/A"&&K!=="0"&&fetch(`/api/accinfo?uid=${encodeURIComponent(K)}`).then(de=>de.json()).then(de=>{de&&(de.level!==void 0||de.likes!==void 0)&&p(U=>U&&{...U,level:de.level!==void 0&&de.level!==null&&String(de.level).trim()!==""&&String(de.level).trim()!=="0"&&String(de.level).trim()!=="N/A"?de.level:U.level,likes:de.likes!==void 0&&de.likes!==null&&String(de.likes).trim()!==""&&String(de.likes).trim()!=="0"&&String(de.likes).trim()!=="N/A"?de.likes:U.likes,liked:de.likes!==void 0&&de.likes!==null&&String(de.likes).trim()!==""&&String(de.likes).trim()!=="0"&&String(de.likes).trim()!=="N/A"?de.likes:U.liked})}).catch(()=>{})}else if(A&&(A.account_restricted||A.restricted||A.account_banned||A.error==="YOUR ACCOUNT IS BANNED"||A.error==="YOUR ACCOUNT WILL BE BANNED"||A.restricted_message==="YOUR ACCOUNT IS BANNED"||A.restricted_message==="YOUR ACCOUNT WILL BE BANNED")){const G=String(A.account_id||A.user_id||A.player_uid||""),V=G&&G!=="N/A"&&G!=="0"?`/api/banner-image?uid=${encodeURIComponent(G)}`:"",Z=A.level!==void 0&&A.level!==null&&String(A.level).trim()!==""&&String(A.level).trim()!=="..."&&String(A.level).trim()!=="N/A"&&String(A.level).trim()!=="0"?A.level:"",ue=A.likes!==void 0&&A.likes!==null&&String(A.likes).trim()!==""&&String(A.likes).trim()!=="..."&&String(A.likes).trim()!=="N/A"&&String(A.likes).trim()!=="0"?A.likes:A.liked&&String(A.liked)!=="..."&&String(A.liked)!=="0"?A.liked:"";p({success:!0,account_restricted:!0,restricted:!0,account_banned:!0,restricted_message:"YOUR ACCOUNT IS BANNED",nickname:A.nickname||"Player",account_id:String(A.account_id||A.user_id||A.player_uid||"N/A"),region:String(A.region||"IND").toUpperCase(),level:Z,likes:ue,liked:ue,access_token:A.access_token||"",jwt_token:"",banner_url:V,banner_image_url:V}),h(!1),G&&G!=="N/A"&&G!=="0"&&fetch(`/api/accinfo?uid=${encodeURIComponent(G)}`).then(se=>se.json()).then(se=>{se&&(se.level!==void 0||se.likes!==void 0)&&p(K=>K&&{...K,level:se.level!==void 0&&se.level!==null&&String(se.level).trim()!==""&&String(se.level).trim()!=="0"&&String(se.level).trim()!=="N/A"?se.level:K.level,likes:se.likes!==void 0&&se.likes!==null&&String(se.likes).trim()!==""&&String(se.likes).trim()!=="0"&&String(se.likes).trim()!=="N/A"?se.likes:K.likes,liked:se.likes!==void 0&&se.likes!==null&&String(se.likes).trim()!==""&&String(se.likes).trim()!=="0"&&String(se.likes).trim()!=="N/A"?se.likes:K.liked})}).catch(()=>{})}else p(null),h(!0)}catch{p(null),h(!0)}finally{c(!1)}},C=(()=>{if(g.customLogoBase64&&String(g.customLogoBase64).startsWith("data:image"))return g.customLogoBase64;try{const O=typeof window<"u"?localStorage.getItem("xnf_custom_logo_base64_v3"):null;if(O&&String(O).startsWith("data:image"))return O}catch{}return g.websiteLogoUrl||"/assets/aistudio/IMG_20261101_041259_324_ef88922d.jpg"})();return N.jsxs("div",{className:"w-full flex flex-col items-center space-y-3.5 px-1 sm:px-1.5 py-1 font-sans",children:[N.jsxs("div",{id:"website-logo-header",className:"relative group flex flex-col items-center pt-1 pb-1",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-xl scale-110 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"}),N.jsx("div",{className:"relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-105",children:N.jsx("img",{id:"website-logo-img",src:C,alt:g.websiteTitle||"EAT TOKEN TO ACCESS TOKEN WEBSITE",referrerPolicy:"no-referrer",className:"w-full h-full object-cover rounded-2xl border border-cyan-500/40 shadow-2xl filter drop-shadow-[0_4px_16px_rgba(6,182,212,0.4)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]",onError:O=>{const D=O.target;D.src.includes("/assets/aistudio/IMG_20261101_041259_324_ef88922d.jpg")||(D.src="/assets/aistudio/IMG_20261101_041259_324_ef88922d.jpg")}})})]}),N.jsxs("div",{className:"text-center space-y-0.5",children:[N.jsx("h1",{className:"text-xl sm:text-2xl font-black text-white tracking-wider uppercase font-mono",children:g.websiteTitle||"ACCESS GENERATOR"}),N.jsx("p",{className:"text-xs font-black text-[#f43f5e] tracking-widest uppercase",children:g.websiteSubtitle||"BY @HSxMASTER"})]}),N.jsxs("div",{className:"w-full space-y-2.5",children:[N.jsxs("a",{id:"tutorial-btn-1",href:g.fullTutorialUrl||$g,target:"_blank",rel:"noopener noreferrer",className:"w-full p-3.5 rounded-2xl border border-dashed border-pink-500/40 bg-gradient-to-r from-[#120c24] to-[#170f2e] hover:from-[#171030] hover:to-[#1e133c] hover:border-pink-400 transition-all flex items-center justify-between group shadow-[0_6px_0_#1a0b33,0_10px_20px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1a0b33] cursor-pointer",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"w-10 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-[0_2px_6px_rgba(239,68,68,0.5)]",children:N.jsx(hd,{className:"w-3.5 h-3.5 fill-white"})}),N.jsxs("div",{className:"text-left",children:[N.jsx("h3",{className:"text-xs font-mono font-extrabold text-white uppercase tracking-wider group-hover:text-pink-300 transition",children:g.fullTutorialTitle||"WATCH TUTORIAL"}),N.jsx("p",{className:"text-[11px] text-slate-400",children:g.fullTutorialSubtitle||"click to watch how to get eat token"})]})]}),N.jsx(zc,{className:"w-4 h-4 text-pink-500 group-hover:translate-x-1 transition shrink-0"})]}),N.jsxs("a",{id:"tutorial-btn-2",href:g.secondMethodUrl||e_,target:"_blank",rel:"noopener noreferrer",className:"w-full p-3.5 rounded-2xl border border-dashed border-pink-500/40 bg-gradient-to-r from-[#120c24] to-[#170f2e] hover:from-[#171030] hover:to-[#1e133c] hover:border-pink-400 transition-all flex items-center justify-between group shadow-[0_6px_0_#1a0b33,0_10px_20px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1a0b33] cursor-pointer",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"w-10 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-[0_2px_6px_rgba(239,68,68,0.5)]",children:N.jsx(hd,{className:"w-3.5 h-3.5 fill-white"})}),N.jsxs("div",{className:"text-left",children:[N.jsx("h3",{className:"text-xs font-mono font-extrabold text-white uppercase tracking-wider group-hover:text-pink-300 transition",children:g.secondMethodTitle||"2ND METHOD"}),N.jsx("p",{className:"text-[11px] text-slate-400",children:g.secondMethodSubtitle||"click to watch how to get access token"})]})]}),N.jsx(zc,{className:"w-4 h-4 text-pink-500 group-hover:translate-x-1 transition shrink-0"})]})]}),N.jsxs(Fc,{maxTilt:6,depth:15,glowColor:"rgba(168, 85, 247, 0.35)",className:"w-full rounded-2xl border border-[#351e60] bg-gradient-to-b from-[#110d24] to-[#0b0817] p-4 space-y-3 shadow-[0_12px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.12)]",children:[N.jsxs("div",{className:"flex items-center gap-2 text-white font-black text-xs uppercase tracking-wider",children:[N.jsx(my,{className:"w-3.5 h-3.5 text-pink-500"}),N.jsx("span",{children:"HOW TO USE"})]}),N.jsxs("div",{className:"flex items-start gap-2.5",children:[N.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-tr from-purple-800 to-fuchsia-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_6px_rgba(168,85,247,0.4)]",children:"1"}),N.jsxs("div",{className:"space-y-0.5",children:[N.jsx("h4",{className:"text-xs font-bold text-white",children:"Select Provider & Login below."}),N.jsxs("div",{className:"inline-flex items-center gap-1 text-emerald-400 text-[11px] font-medium",children:[N.jsx(Gh,{className:"w-3 h-3 text-emerald-400 shrink-0"}),N.jsx("span",{children:"Safe: Official Garena Server (No Scam Risk)"})]})]})]}),N.jsxs("div",{className:"space-y-1.5",children:[N.jsxs("div",{className:"flex items-start gap-2.5",children:[N.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-tr from-purple-800 to-fuchsia-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_6px_rgba(168,85,247,0.4)]",children:"2"}),N.jsxs("h4",{className:"text-xs font-bold text-white",children:["After login, copy the URL containing ",N.jsx("span",{className:"text-pink-400 font-mono",children:"eat="})," parameter"]})]}),N.jsxs("div",{className:"rounded-xl bg-[#06030e] border border-[#2b1649] p-2.5 space-y-1.5 shadow-inner",children:[N.jsx("span",{className:"text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block",children:"EXAMPLE URL:"}),N.jsx("div",{className:"text-[11px] font-mono text-slate-300 break-all leading-relaxed bg-[#040209] p-2 rounded-lg border border-[#200f38] shadow-inner",children:N.jsxs("p",{children:["https://discstore.kiosgamer.com.id/?",N.jsx("span",{className:"bg-pink-600 text-white px-1 py-0.2 rounded font-bold mr-0.5",children:"eat=14f060774299fb93a5..."}),"&lang=en&region=IND&account_id=7669969208&nickname=..."]})}),N.jsx("p",{className:"text-[11px] text-slate-400",children:"The tool will extract the access token automatically"})]})]}),N.jsxs("div",{className:"flex items-start gap-2.5",children:[N.jsx("div",{className:"w-5 h-5 rounded-md bg-gradient-to-tr from-purple-800 to-fuchsia-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_6px_rgba(168,85,247,0.4)]",children:"3"}),N.jsx("h4",{className:"text-xs font-bold text-white",children:"Paste the URL or just the Eat Token below and click GENERATE"})]})]}),N.jsxs("div",{className:"w-full space-y-2",children:[N.jsx("h3",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider font-mono",children:"SELECT PROVIDER & LOGIN"}),N.jsxs("div",{className:"grid grid-cols-5 gap-2.5 sm:gap-3",children:[N.jsx("a",{id:"provider-google-btn",href:Io.google,target:"_blank",rel:"noopener noreferrer",className:"w-full aspect-square rounded-2xl bg-gradient-to-b from-[#181130] to-[#0f0a20] border border-[#3b2366] hover:border-pink-500/70 flex items-center justify-center transition-all shadow-[0_5px_0_#1c0c38,0_8px_16px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_1px_0_#1c0c38] cursor-pointer",title:"Google Login",children:N.jsx(e1,{className:"w-6 h-6 filter drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]"})}),N.jsx("a",{id:"provider-facebook-btn",href:Io.facebook,target:"_blank",rel:"noopener noreferrer",className:"w-full aspect-square rounded-2xl bg-gradient-to-b from-[#181130] to-[#0f0a20] border border-[#3b2366] hover:border-blue-500/70 flex items-center justify-center transition-all shadow-[0_5px_0_#1c0c38,0_8px_16px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_1px_0_#1c0c38] cursor-pointer group",title:"Facebook Login",children:N.jsx(r1,{className:"w-6 h-6 group-hover:scale-110 transition-transform filter drop-shadow-[0_2px_8px_rgba(24,119,242,0.6)]"})}),N.jsx("a",{id:"provider-apple-btn",href:Io.apple,target:"_blank",rel:"noopener noreferrer",className:"w-full aspect-square rounded-2xl bg-gradient-to-b from-[#181130] to-[#0f0a20] border border-[#3b2366] hover:border-pink-500/70 flex items-center justify-center text-white transition-all shadow-[0_5px_0_#1c0c38,0_8px_16px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_1px_0_#1c0c38] cursor-pointer",title:"Apple Login",children:N.jsx(t1,{className:"w-5 h-5 filter drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]"})}),N.jsx("a",{id:"provider-x-btn",href:Io.twitter,target:"_blank",rel:"noopener noreferrer",className:"w-full aspect-square rounded-2xl bg-gradient-to-b from-[#181130] to-[#0f0a20] border border-[#3b2366] hover:border-pink-500/70 flex items-center justify-center text-white transition-all shadow-[0_5px_0_#1c0c38,0_8px_16px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_1px_0_#1c0c38] cursor-pointer",title:"X (Twitter) Login",children:N.jsx(n1,{className:"w-4 h-4 filter drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]"})}),N.jsx("a",{id:"provider-vk-btn",href:Io.vk,target:"_blank",rel:"noopener noreferrer",className:"w-full aspect-square rounded-2xl bg-gradient-to-b from-[#181130] to-[#0f0a20] border border-[#3b2366] hover:border-pink-500/70 flex items-center justify-center text-[#4680C2] transition-all shadow-[0_5px_0_#1c0c38,0_8px_16px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_1px_0_#1c0c38] cursor-pointer",title:"VK Login",children:N.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#0077FF] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(0,119,255,0.5)]",children:N.jsx(a1,{className:"w-3.5 h-3.5 fill-white text-white"})})})]})]}),N.jsx("div",{className:"w-full space-y-2",children:N.jsxs("div",{className:"w-full rounded-2xl bg-gradient-to-b from-[#0e0a1f] to-[#090616] border border-[#351e60] focus-within:border-[#d946ef] p-3.5 space-y-2.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.7),0_8px_20px_rgba(0,0,0,0.5)] transition",children:[N.jsx("textarea",{id:"token-input-textarea",value:i,onChange:O=>r(O.target.value),placeholder:"Paste Your Token Here",rows:2,className:"w-full bg-transparent text-xs font-mono text-slate-100 placeholder-slate-500 outline-none resize-none"}),N.jsxs("div",{className:"flex items-center justify-between pt-1",children:[N.jsx("span",{className:"text-[11px] text-slate-400",children:"Enter your Tokens"}),N.jsxs("div",{className:"flex items-center gap-2",children:[i&&N.jsxs("button",{id:"clear-input-btn",onClick:P,className:"px-2.5 py-1 rounded-xl border border-rose-500/40 bg-rose-950/30 hover:bg-rose-900/50 text-rose-300 text-xs font-bold transition flex items-center gap-1 shadow-[0_2px_6px_rgba(244,63,94,0.2)] active:scale-95 cursor-pointer",title:"Clear input",children:[N.jsx(ky,{className:"w-3 h-3 text-rose-400"}),N.jsx("span",{children:"Clear"})]}),N.jsxs("button",{id:"paste-clipboard-btn",onClick:S,className:"px-3 py-1 rounded-xl border border-pink-500/40 bg-pink-950/40 hover:bg-pink-900/60 text-pink-300 text-xs font-bold transition flex items-center gap-1.5 shadow-[0_2px_6px_rgba(236,72,153,0.25)] active:scale-95 cursor-pointer",children:[N.jsx(by,{className:"w-3 h-3 text-pink-400"}),N.jsx("span",{children:"Paste"})]})]})]})]})}),N.jsx("button",{id:"generate-access-btn",disabled:l,onClick:B,className:`w-full py-4 px-6 rounded-2xl font-black text-sm text-white tracking-wider uppercase bg-gradient-to-r ${g.generateBtnGradient||"from-purple-600 via-fuchsia-500 to-pink-500"} hover:opacity-95 shadow-[0_6px_0_#4a044e,0_12px_24px_rgba(236,72,153,0.35)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#4a044e] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:transform-none`,children:l?N.jsxs(N.Fragment,{children:[N.jsx(iv,{className:"w-4 h-4 animate-spin"}),N.jsx("span",{children:"GENERATING ACCESS..."})]}):N.jsxs(N.Fragment,{children:[N.jsx("span",{children:g.generateBtnText||"GENERATE ACCESS"}),N.jsx(zc,{className:"w-4 h-4 font-bold"})]})}),m&&N.jsxs(Fc,{id:"invalid-token-card",maxTilt:5,depth:15,glowColor:"rgba(239, 68, 68, 0.45)",className:"w-full max-w-[440px] mx-auto rounded-[18px] bg-gradient-to-b from-[#220710] via-[#140409] to-[#0a0205] border border-red-500/60 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.85),0_0_24px_rgba(239,68,68,0.3)] relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 select-none text-center",children:[N.jsx("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-16 bg-red-500/20 blur-xl pointer-events-none"}),N.jsxs("div",{className:"flex flex-row items-center justify-center gap-3.5 w-full py-1",children:[N.jsx(Wy,{className:"w-6 h-6 sm:w-7 sm:h-7 text-red-500 stroke-[2.5] shrink-0 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]"}),N.jsx("span",{className:"text-lg sm:text-xl md:text-2xl font-black text-red-100 tracking-wider sm:tracking-widest font-mono uppercase drop-shadow-[0_0_14px_rgba(239,68,68,0.6)] whitespace-nowrap",children:"INVALID TOKEN"})]})]}),d&&N.jsxs("div",{id:"exact-result-card",className:"w-full max-w-[430px] mx-auto space-y-3.5 transition",children:[N.jsx(Vh,{inline:!0,children:N.jsx(jy,{result:d,profileIcons:E})}),N.jsxs(Fc,{id:"tokens-result-card",maxTilt:4,depth:15,glowColor:"rgba(168, 85, 247, 0.35)",className:"w-full rounded-[22px] bg-gradient-to-b from-[#100926] via-[#080414] to-[#04020a] border border-[#a855f7]/40 p-3.5 sm:p-4 space-y-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(168,85,247,0.2)]",children:[N.jsxs("div",{className:"space-y-1.5 pt-1",children:[N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-xs font-mono font-extrabold text-[#f472b6] uppercase tracking-wider",children:"ACCESS TOKEN"}),N.jsx("button",{id:"copy-access-token-btn",type:"button",onClick:()=>M(typeof d.access_token=="string"?d.access_token:d.access_token?String(d.access_token):"","access_token"),className:"px-3 py-1.5 rounded-xl bg-[#581c87]/80 hover:bg-[#6b21a8] text-white text-xs font-bold transition flex items-center gap-1.5 border border-[#a855f7]/40 shadow-sm cursor-pointer active:scale-95",children:v==="access_token"?N.jsxs(N.Fragment,{children:[N.jsx(Yo,{className:"w-3.5 h-3.5 text-emerald-400"}),N.jsx("span",{className:"text-emerald-400",children:"COPIED"})]}):N.jsxs(N.Fragment,{children:[N.jsx(jo,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"COPY TOKEN"})]})})]}),N.jsx("div",{className:"p-3.5 rounded-2xl bg-[#04020a] border border-[#2e1a4f] text-xs font-mono text-white break-all h-24 overflow-y-auto leading-relaxed select-all shadow-inner",children:typeof d.access_token=="string"?d.access_token:d.access_token?String(d.access_token):""})]}),d.jwt_token&&!(d.account_restricted||d.restricted||d.account_banned)?N.jsxs("div",{id:"jwt-token-section",className:"space-y-1.5 pt-1 border-t border-[#2e1a4f]/70 animate-in fade-in duration-300",children:[N.jsxs("div",{className:"flex items-center justify-between pt-2",children:[N.jsx("span",{className:"text-xs font-mono font-extrabold text-cyan-400 uppercase tracking-wider",children:"JWT TOKEN"}),N.jsx("button",{id:"copy-jwt-token-btn",type:"button",onClick:()=>M(typeof d.jwt_token=="string"?d.jwt_token:String(d.jwt_token||""),"jwt_token"),className:"px-3 py-1.5 rounded-xl bg-[#0e7490]/80 hover:bg-[#0891b2] text-white text-xs font-bold transition flex items-center gap-1.5 border border-cyan-400/40 shadow-sm cursor-pointer active:scale-95",children:v==="jwt_token"?N.jsxs(N.Fragment,{children:[N.jsx(Yo,{className:"w-3.5 h-3.5 text-emerald-400"}),N.jsx("span",{className:"text-emerald-400",children:"COPIED"})]}):N.jsxs(N.Fragment,{children:[N.jsx(jo,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"COPY TOKEN"})]})})]}),N.jsx("div",{className:"p-3.5 rounded-2xl bg-[#04020a] border border-[#164e63]/70 text-xs font-mono text-cyan-100 break-all h-28 overflow-y-auto leading-relaxed select-all shadow-inner",children:typeof d.jwt_token=="string"?d.jwt_token:String(d.jwt_token||"")})]}):d.account_restricted||d.restricted||d.account_banned||d.access_token&&!d.jwt_token?N.jsx("div",{id:"account-restricted-alert-box",className:"space-y-2 pt-2 animate-in fade-in duration-300",children:N.jsxs("div",{className:"p-3.5 rounded-2xl bg-gradient-to-b from-[#250912] to-[#120408] border border-rose-600/60 shadow-[0_4px_20px_rgba(225,29,72,0.25)] flex items-center gap-2.5",children:[N.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shrink-0"}),N.jsx("span",{className:"text-xs sm:text-sm font-black text-rose-200 tracking-wide font-sans",children:"⚠️ YOUR ACCOUNT IS BANNED"})]})}):null]})]}),d&&N.jsx("div",{className:"w-full pt-1",children:N.jsxs("a",{id:"go-to-long-bio-btn",href:g.longBioUrl||t_,target:"_blank",rel:"noopener noreferrer",className:`w-full py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm text-white tracking-wider uppercase bg-gradient-to-r ${g.longBioBtnGradient||"from-emerald-600 via-teal-500 to-cyan-500"} hover:opacity-95 shadow-[0_6px_0_#064e3b,0_12px_24px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#064e3b] transition-all flex items-center justify-center gap-2.5 cursor-pointer select-none border border-emerald-400/30`,children:[N.jsx(Ny,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5] shrink-0"}),N.jsx("span",{children:g.longBioBtnText||"Go To Long Bio Website"})]})}),N.jsxs("div",{className:"w-full space-y-3 pt-3",children:[N.jsx("h3",{className:"text-xs font-extrabold text-slate-400 uppercase tracking-widest text-center font-mono",children:"CONNECT WITH XNF LIVE"}),N.jsxs("div",{className:"w-full rounded-2xl bg-gradient-to-b from-[#120c26] to-[#0a0618] border border-[#3b2366] p-3 shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_1px_4px_rgba(255,255,255,0.05)] space-y-2.5",children:[N.jsxs("div",{className:"grid grid-cols-2 gap-2.5 w-full",children:[N.jsxs("a",{id:"social-telegram-btn",href:Ky,target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-3 rounded-xl bg-gradient-to-b from-[#181133] to-[#0f0a22] border border-[#482b7d] hover:border-sky-400 hover:from-[#1e1540] hover:to-[#140d2d] transition-all flex items-center justify-center gap-2 group shadow-[0_4px_0_#1a0c33,0_6px_12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#1a0c33] cursor-pointer",children:[N.jsx(s1,{className:"w-6 h-6 shrink-0 drop-shadow-[0_2px_8px_rgba(46,165,224,0.5)]"}),N.jsx("span",{className:"text-xs font-bold text-white group-hover:text-sky-300 transition whitespace-nowrap",children:"Telegram"})]}),N.jsxs("a",{id:"social-instagram-btn",href:Qy,target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-3 rounded-xl bg-gradient-to-b from-[#181133] to-[#0f0a22] border border-[#482b7d] hover:border-pink-500 hover:from-[#1e1540] hover:to-[#140d2d] transition-all flex items-center justify-center gap-2 group shadow-[0_4px_0_#1a0c33,0_6px_12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#1a0c33] cursor-pointer",children:[N.jsx("div",{className:"w-6 h-6 rounded-lg bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center text-white shrink-0 shadow-[0_2px_6px_rgba(214,36,159,0.5)]",children:N.jsx(i1,{className:"w-3 h-3 text-white"})}),N.jsx("span",{className:"text-xs font-bold text-white group-hover:text-pink-300 transition whitespace-nowrap",children:"Instagram"})]})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-2.5 w-full pt-1.5 border-t border-[#2a174a]/60",children:[N.jsxs("a",{id:"social-youtube-btn",href:Zy,target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-3 rounded-xl bg-[#0e081e] border border-[#301a52] hover:border-red-500 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 cursor-pointer shadow-sm",children:[N.jsx("div",{className:"w-5 h-5 rounded-md bg-[#FF0000] flex items-center justify-center text-white shrink-0 shadow-[0_2px_5px_rgba(255,0,0,0.4)]",children:N.jsx(hd,{className:"w-3 h-3 fill-white"})}),N.jsx("span",{className:"text-xs font-semibold text-slate-200 group-hover:text-red-300 transition whitespace-nowrap",children:"YouTube"})]}),N.jsxs("a",{id:"social-discord-btn",href:Jy,target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-3 rounded-xl bg-[#0e081e] border border-[#301a52] hover:border-[#5865F2] transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 cursor-pointer shadow-sm",children:[N.jsx("div",{className:"w-5 h-5 rounded-md bg-[#5865F2] flex items-center justify-center text-white shrink-0 shadow-[0_2px_5px_rgba(88,101,242,0.4)]",children:N.jsx($y,{className:"w-3 h-3 text-white"})}),N.jsx("span",{className:"text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition whitespace-nowrap",children:"Discord"})]})]})]})]}),N.jsx("div",{className:"pt-2 pb-2 text-center",children:N.jsx("button",{id:"footer-terms-btn",type:"button",onClick:s,className:"text-xs text-slate-400 hover:text-slate-200 font-medium transition cursor-pointer",children:"Terms & Conditions"})})]})},l1=({isOpen:s,onClose:e,onAgree:i,onOpenAdmin:r})=>{if(!s)return null;const l=()=>{i&&i(),e()};return N.jsx("div",{id:"terms-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",onClick:e,children:N.jsxs("div",{id:"terms-modal-container",onClick:c=>c.stopPropagation(),className:"w-full max-w-[340px] sm:max-w-[400px] bg-[#0E0A1A] border border-cyan-500/30 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-purple-950/60 relative flex flex-col space-y-2.5",children:[N.jsxs("div",{className:"flex items-center justify-between gap-2 pb-2 border-b border-slate-800/80",children:[N.jsxs("div",{className:"flex items-center gap-2.5",children:[N.jsx("button",{id:"admin-trigger-logo-btn",type:"button",onClick:r,title:"Admin Login",className:"w-8 h-8 rounded-xl bg-cyan-950/50 hover:bg-cyan-900/80 border border-cyan-500/40 hover:border-cyan-400 flex items-center justify-center text-cyan-400 hover:text-cyan-200 shrink-0 shadow-inner cursor-pointer transition active:scale-95 group",children:N.jsx(Ay,{className:"w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform"})}),N.jsxs("div",{children:[N.jsx("h2",{className:"text-xs sm:text-sm font-extrabold tracking-wide uppercase bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent leading-none",children:"TERMS & CONDITIONS"}),N.jsx("p",{className:"text-[10px] text-slate-400 mt-0.5 leading-none",children:"Please read before using this tool"})]})]}),N.jsx("button",{id:"close-terms-modal-btn",onClick:e,className:"w-7 h-7 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800 cursor-pointer shrink-0",children:N.jsx(sv,{className:"w-3.5 h-3.5"})})]}),N.jsxs("div",{className:"space-y-1.5 pt-0.5",children:[N.jsxs("div",{className:"p-2 rounded-xl bg-[#0b171f]/90 border border-cyan-500/30 flex items-start gap-2",children:[N.jsx(Gh,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),N.jsxs("p",{className:"text-[11px] text-slate-300 leading-snug",children:[N.jsx("strong",{className:"text-cyan-300 font-semibold",children:"Data Privacy: "}),"No sensitive data stored. Only basic transient info for fast service."]})]}),N.jsxs("div",{className:"p-2 rounded-xl bg-[#1b1509]/90 border border-amber-500/30 flex items-start gap-2",children:[N.jsx(rv,{className:"w-4 h-4 text-amber-400 shrink-0 mt-0.5"}),N.jsxs("p",{className:"text-[11px] text-slate-300 leading-snug",children:[N.jsx("strong",{className:"text-amber-300 font-semibold",children:"Disclaimer: "}),"Use at your own risk. The developer is not responsible for any misuse."]})]}),N.jsxs("div",{className:"p-2 rounded-xl bg-[#1c0c11]/90 border border-rose-500/30 flex items-start gap-2",children:[N.jsx(Oy,{className:"w-4 h-4 text-rose-400 shrink-0 mt-0.5"}),N.jsxs("p",{className:"text-[11px] text-slate-300 leading-snug",children:[N.jsx("strong",{className:"text-rose-300 font-semibold",children:"Garena Policy: "}),"Do not violate official terms or attempt unauthorized automations."]})]}),N.jsxs("div",{className:"p-2 rounded-xl bg-[#130f24]/90 border border-purple-500/30 flex items-start gap-2",children:[N.jsx(yy,{className:"w-4 h-4 text-purple-400 shrink-0 mt-0.5"}),N.jsxs("p",{className:"text-[11px] text-slate-300 leading-snug",children:[N.jsx("strong",{className:"text-purple-300 font-semibold",children:"Educational: "}),"Made strictly for developer learning and testing purposes."]})]})]}),N.jsx("p",{className:"text-center text-[10px] text-slate-400 px-1 leading-tight",children:"By clicking Agree, you accept all terms and conditions."}),N.jsxs("button",{id:"agree-terms-btn",onClick:l,className:"w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-blue-900/30 transition transform active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer",children:[N.jsx(xy,{className:"w-4 h-4"}),N.jsx("span",{children:"I AGREE"})]})]})})};const kh="185",c1=0,n_=1,u1=2,Hc=1,f1=2,Xo=3,or=0,jn=1,Sa=2,Ma=0,Os=1,Yd=2,i_=3,a_=4,d1=5,Lr=100,h1=101,p1=102,m1=103,g1=104,_1=200,v1=201,x1=202,S1=203,jd=204,Zd=205,y1=206,M1=207,b1=208,E1=209,T1=210,A1=211,w1=212,R1=213,C1=214,Kd=0,Qd=1,Jd=2,Bs=3,$d=4,eh=5,th=6,nh=7,lv=0,N1=1,D1=2,qi=0,cv=1,uv=2,fv=3,dv=4,hv=5,pv=6,mv=7,gv=300,zr=301,zs=302,pd=303,md=304,$c=306,ih=1e3,ya=1001,ah=1002,Nn=1003,U1=1004,pc=1005,Pn=1006,gd=1007,Ir=1008,yi=1009,_v=1010,vv=1011,Zo=1012,Xh=1013,ji=1014,Xi=1015,Ea=1016,Wh=1017,qh=1018,Ko=1020,xv=35902,Sv=35899,yv=1021,Mv=1022,Ui=1023,Ta=1026,Br=1027,bv=1028,Yh=1029,Fr=1030,jh=1031,Zh=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,rh=35840,sh=35841,oh=35842,lh=35843,ch=36196,uh=37492,fh=37496,dh=37488,hh=37489,qc=37490,ph=37491,mh=37808,gh=37809,_h=37810,vh=37811,xh=37812,Sh=37813,yh=37814,Mh=37815,bh=37816,Eh=37817,Th=37818,Ah=37819,wh=37820,Rh=37821,Ch=36492,Nh=36494,Dh=36495,Uh=36283,Lh=36284,Yc=36285,Oh=36286,L1=3200,r_=0,O1=1,rr="",xi="srgb",jc="srgb-linear",Zc="linear",zt="srgb",Ss=7680,s_=519,P1=512,I1=513,B1=514,Kh=515,z1=516,F1=517,Qh=518,H1=519,o_=35044,l_="300 es",Wi=2e3,Kc=2001;function G1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function V1(){const s=Qc("canvas");return s.style.display="block",s}const c_={};function u_(...s){const e="THREE."+s.shift()}function Ev(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=Ev(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace}}function Tt(...s){s=Ev(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace}}function Ps(...s){const e=s.join(" ");e in c_||(c_[e]=!0,nt(...s))}function k1(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const X1={[Kd]:Qd,[Jd]:th,[$d]:nh,[Bs]:eh,[Qd]:Kd,[th]:Jd,[nh]:$d,[eh]:Bs};class Gr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,Ph=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function W1(s,e){return(s%e+e)%e}function vd(s,e,i){return(1-i)*s+i*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ip=class ip{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ip.prototype.isVector2=!0;let Et=ip;class Gs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],v=r[l+2],x=r[l+3],g=c[d+0],y=c[d+1],E=c[d+2],L=c[d+3];if(x!==L||m!==g||h!==y||v!==E){let M=m*g+h*y+v*E+x*L;M<0&&(g=-g,y=-y,E=-E,L=-L,M=-M);let S=1-p;if(M<.9995){const P=Math.acos(M),B=Math.sin(P);S=Math.sin(S*P)/B,p=Math.sin(p*P)/B,m=m*S+g*p,h=h*S+y*p,v=v*S+E*p,x=x*S+L*p}else{m=m*S+g*p,h=h*S+y*p,v=v*S+E*p,x=x*S+L*p;const P=1/Math.sqrt(m*m+h*h+v*v+x*x);m*=P,h*=P,v*=P,x*=P}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],x=c[d],g=c[d+1],y=c[d+2],E=c[d+3];return e[i]=p*E+v*x+m*y-h*g,e[i+1]=m*E+v*g+h*x-p*y,e[i+2]=h*E+v*y+p*g-m*x,e[i+3]=v*E-p*x-m*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),x=p(c/2),g=m(r/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=g*v*x+h*y*E,this._y=h*y*x-g*v*E,this._z=h*v*E+g*y*x,this._w=h*v*x-g*y*E;break;case"YXZ":this._x=g*v*x+h*y*E,this._y=h*y*x-g*v*E,this._z=h*v*E-g*y*x,this._w=h*v*x+g*y*E;break;case"ZXY":this._x=g*v*x-h*y*E,this._y=h*y*x+g*v*E,this._z=h*v*E+g*y*x,this._w=h*v*x-g*y*E;break;case"ZYX":this._x=g*v*x-h*y*E,this._y=h*y*x+g*v*E,this._z=h*v*E-g*y*x,this._w=h*v*x+g*y*E;break;case"YZX":this._x=g*v*x+h*y*E,this._y=h*y*x+g*v*E,this._z=h*v*E-g*y*x,this._w=h*v*x-g*y*E;break;case"XZY":this._x=g*v*x-h*y*E,this._y=h*y*x-g*v*E,this._z=h*v*E+g*y*x,this._w=h*v*x+g*y*E;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],x=i[10],g=r+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-h)*y,this._z=(d-l)*y}else if(r>p&&r>x){const y=2*Math.sqrt(1+r-p-x);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+h)/y}else if(p>x){const y=2*Math.sqrt(1+p-r-x);this._w=(c-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+x-r-p);this._w=(d-l)/y,this._x=(c+h)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-r*h,this._z=c*v+d*h+r*m-l*p,this._w=d*v-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ap=class ap{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(f_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(f_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),v=2*(p*i-c*l),x=2*(c*r-d*i);return this.x=i+m*h+d*x-p*v,this.y=r+m*v+p*h-c*x,this.z=l+m*x+c*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ap.prototype.isVector3=!0;let te=ap;const xd=new te,f_=new Gs,rp=class rp{constructor(e,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],v=r[4],x=r[7],g=r[2],y=r[5],E=r[8],L=l[0],M=l[3],S=l[6],P=l[1],B=l[4],C=l[7],O=l[2],D=l[5],z=l[8];return c[0]=d*L+p*P+m*O,c[3]=d*M+p*B+m*D,c[6]=d*S+p*C+m*z,c[1]=h*L+v*P+x*O,c[4]=h*M+v*B+x*D,c[7]=h*S+v*C+x*z,c[2]=g*L+y*P+E*O,c[5]=g*M+y*B+E*D,c[8]=g*S+y*C+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*d*v-i*p*h-r*c*v+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=v*d-p*h,g=p*m-v*c,y=h*c-d*m,E=i*x+r*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=x*L,e[1]=(l*h-v*r)*L,e[2]=(p*r-l*d)*L,e[3]=g*L,e[4]=(v*i-l*m)*L,e[5]=(l*c-p*i)*L,e[6]=y*L,e[7]=(r*m-h*i)*L,e[8]=(d*i-r*c)*L,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rp.prototype.isMatrix3=!0;let rt=rp;const Sd=new rt,d_=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const s={enabled:!0,workingColorSpace:jc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===zt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[jc]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:d_,fromXYZ:h_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:d_,fromXYZ:h_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const yt=q1();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class Y1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=Qc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j1=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(yd(l[d].image)):c.push(yd(l[d]))}else c=yd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function yd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Y1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let Z1=0;const Md=new te;class zn extends Gr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ya,l=ya,c=Pn,d=Ir,p=Ui,m=yi,h=zn.DEFAULT_ANISOTROPY,v=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Qo(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=gv;zn.DEFAULT_ANISOTROPY=1;const sp=class sp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],v=m[4],x=m[8],g=m[1],y=m[5],E=m[9],L=m[2],M=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-L)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+L)<.1&&Math.abs(E+M)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(h+1)/2,C=(y+1)/2,O=(S+1)/2,D=(v+g)/4,z=(x+L)/4,T=(E+M)/4;return B>C&&B>O?B<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(B),l=D/r,c=z/r):C>O?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=D/l,c=T/l):O<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),r=z/c,l=T/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(x-L)*(x-L)+(g-v)*(g-v));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(x-L)/P,this.z=(g-v)/P,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sp.prototype.isVector4=!0;let sn=sp;class K1 extends Gr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new zn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Jh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends K1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Tv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,i,r,l,c,d,p,m,h,v,x,g,y,E,L,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,v,x,g,y,E,L,M)}set(e,i,r,l,c,d,p,m,h,v,x,g,y,E,L,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=v,S[10]=x,S[14]=g,S[3]=y,S[7]=E,S[11]=L,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),d=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=d*v,y=d*x,E=p*v,L=p*x;i[0]=m*v,i[4]=-m*x,i[8]=h,i[1]=y+E*h,i[5]=g-L*h,i[9]=-p*m,i[2]=L-g*h,i[6]=E+y*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,y=m*x,E=h*v,L=h*x;i[0]=g+L*p,i[4]=E*p-y,i[8]=d*h,i[1]=d*x,i[5]=d*v,i[9]=-p,i[2]=y*p-E,i[6]=L+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,y=m*x,E=h*v,L=h*x;i[0]=g-L*p,i[4]=-d*x,i[8]=E+y*p,i[1]=y+E*p,i[5]=d*v,i[9]=L-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,y=d*x,E=p*v,L=p*x;i[0]=m*v,i[4]=E*h-y,i[8]=g*h+L,i[1]=m*x,i[5]=L*h+g,i[9]=y*h-E,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,y=d*h,E=p*m,L=p*h;i[0]=m*v,i[4]=L-g*x,i[8]=E*x+y,i[1]=x,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=y*x+E,i[10]=g-L*x}else if(e.order==="XZY"){const g=d*m,y=d*h,E=p*m,L=p*h;i[0]=m*v,i[4]=-x,i[8]=h*v,i[1]=g*x+L,i[5]=d*v,i[9]=y*x-E,i[2]=E*x-y,i[6]=p*v,i[10]=L*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J1,e,$1)}lookAt(e,i,r){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),$a.crossVectors(r,oi),$a.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),$a.crossVectors(r,oi)),$a.normalize(),mc.crossVectors(oi,$a),l[0]=$a.x,l[4]=mc.x,l[8]=oi.x,l[1]=$a.y,l[5]=mc.y,l[9]=oi.y,l[2]=$a.z,l[6]=mc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],v=r[1],x=r[5],g=r[9],y=r[13],E=r[2],L=r[6],M=r[10],S=r[14],P=r[3],B=r[7],C=r[11],O=r[15],D=l[0],z=l[4],T=l[8],A=l[12],G=l[1],V=l[5],Z=l[9],ue=l[13],se=l[2],K=l[6],F=l[10],k=l[14],ee=l[3],he=l[7],de=l[11],U=l[15];return c[0]=d*D+p*G+m*se+h*ee,c[4]=d*z+p*V+m*K+h*he,c[8]=d*T+p*Z+m*F+h*de,c[12]=d*A+p*ue+m*k+h*U,c[1]=v*D+x*G+g*se+y*ee,c[5]=v*z+x*V+g*K+y*he,c[9]=v*T+x*Z+g*F+y*de,c[13]=v*A+x*ue+g*k+y*U,c[2]=E*D+L*G+M*se+S*ee,c[6]=E*z+L*V+M*K+S*he,c[10]=E*T+L*Z+M*F+S*de,c[14]=E*A+L*ue+M*k+S*U,c[3]=P*D+B*G+C*se+O*ee,c[7]=P*z+B*V+C*K+O*he,c[11]=P*T+B*Z+C*F+O*de,c[15]=P*A+B*ue+C*k+O*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],x=e[6],g=e[10],y=e[14],E=e[3],L=e[7],M=e[11],S=e[15],P=m*y-h*g,B=p*y-h*x,C=p*g-m*x,O=d*y-h*v,D=d*g-m*v,z=d*x-p*v;return i*(L*P-M*B+S*C)-r*(E*P-M*O+S*D)+l*(E*B-L*O+S*z)-c*(E*C-L*D+M*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(d*v-p*h)-r*(c*v-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=e[9],g=e[10],y=e[11],E=e[12],L=e[13],M=e[14],S=e[15],P=i*p-r*d,B=i*m-l*d,C=i*h-c*d,O=r*m-l*p,D=r*h-c*p,z=l*h-c*m,T=v*L-x*E,A=v*M-g*E,G=v*S-y*E,V=x*M-g*L,Z=x*S-y*L,ue=g*S-y*M,se=P*ue-B*Z+C*V+O*G-D*A+z*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/se;return e[0]=(p*ue-m*Z+h*V)*K,e[1]=(l*Z-r*ue-c*V)*K,e[2]=(L*z-M*D+S*O)*K,e[3]=(g*D-x*z-y*O)*K,e[4]=(m*G-d*ue-h*A)*K,e[5]=(i*ue-l*G+c*A)*K,e[6]=(M*C-E*z-S*B)*K,e[7]=(v*z-g*C+y*B)*K,e[8]=(d*Z-p*G+h*T)*K,e[9]=(r*G-i*Z-c*T)*K,e[10]=(E*D-L*C+S*P)*K,e[11]=(x*C-v*D-y*P)*K,e[12]=(p*A-d*V-m*T)*K,e[13]=(i*V-r*A+l*T)*K,e[14]=(L*B-E*O-M*P)*K,e[15]=(v*O-x*B+g*P)*K,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,v=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,x=p+p,g=c*h,y=c*v,E=c*x,L=d*v,M=d*x,S=p*x,P=m*h,B=m*v,C=m*x,O=r.x,D=r.y,z=r.z;return l[0]=(1-(L+S))*O,l[1]=(y+C)*O,l[2]=(E-B)*O,l[3]=0,l[4]=(y-C)*D,l[5]=(1-(g+S))*D,l[6]=(M+P)*D,l[7]=0,l[8]=(E+B)*z,l[9]=(M-P)*z,l[10]=(1-(g+L))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Ms.set(l[0],l[1],l[2]).length();const p=Ms.set(l[4],l[5],l[6]).length(),m=Ms.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ri.copy(this);const h=1/d,v=1/p,x=1/m;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=x,Ri.elements[9]*=x,Ri.elements[10]*=x,i.setFromRotationMatrix(Ri),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=Wi,m=!1){const h=this.elements,v=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),y=(r+l)/(r-l);let E,L;if(m)E=c/(d-c),L=d*c/(d-c);else if(p===Wi)E=-(d+c)/(d-c),L=-2*d*c/(d-c);else if(p===Kc)E=-d/(d-c),L=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=L,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=Wi,m=!1){const h=this.elements,v=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),y=-(r+l)/(r-l);let E,L;if(m)E=1/(d-c),L=d/(d-c);else if(p===Wi)E=-2/(d-c),L=-(d+c)/(d-c);else if(p===Kc)E=-1/(d-c),L=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=L,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Jc.prototype.isMatrix4=!0;let fn=Jc;const Ms=new te,Ri=new fn,J1=new te(0,0,0),$1=new te(1,1,1),$a=new te,mc=new te,oi=new te,p_=new fn,m_=new Gs;class Hr{constructor(e=0,i=0,r=0,l=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return p_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return m_.setFromEuler(this),this.setFromQuaternion(m_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const g_=new te,bs=new Gs,ma=new fn,gc=new te,zo=new te,tM=new te,nM=new Gs,__=new te(1,0,0),v_=new te(0,1,0),x_=new te(0,0,1),S_={type:"added"},iM={type:"removed"},Es={type:"childadded",child:null},bd={type:"childremoved",child:null};class Zn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new te,i=new Hr,r=new Gs,l=new te(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new rt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(v_,e)}rotateZ(e){return this.rotateOnAxis(x_,e)}translateOnAxis(e,i){return g_.copy(e).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(v_,e)}translateZ(e){return this.translateOnAxis(x_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gc.copy(e):gc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(zo,gc,this.up):ma.lookAt(gc,zo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(ma),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),Es.child=e,this.dispatchEvent(Es),Es.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(iM),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),x=d(e.shapes),g=d(e.skeletons),y=d(e.animations),E=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new te(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wo extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const L of e.hand.values()){const M=i.getJointPose(L,r),S=this._getHandJoint(h,L);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=v.position.distanceTo(x.position),y=.02,E=.005;h.inputState.pinching&&g>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Wo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Td(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=yt.workingColorSpace){return this.r=e,this.g=i,this.b=r,yt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=yt.workingColorSpace){if(e=W1(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Td(d,c,e+1/3),this.g=Td(d,c,e),this.b=Td(d,c,e-1/3)}return yt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const r=wv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return yt.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=yt.workingColorSpace){yt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=v<=.5?x/(d+p):x/(2-d-p),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=yt.workingColorSpace){return yt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=xi){yt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(_c);const r=vd(er.h,_c.h,i),l=vd(er.s,_c.s,i),c=vd(er.l,_c.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new bt;bt.NAMES=wv;class rM extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new te,ga=new te,Ad=new te,_a=new te,Ts=new te,As=new te,y_=new te,wd=new te,Rd=new te,Cd=new te,Nd=new sn,Dd=new sn,Ud=new sn;class Di{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ci.subVectors(l,i),ga.subVectors(r,i),Ad.subVectors(e,i);const d=Ci.dot(Ci),p=Ci.dot(ga),m=Ci.dot(Ad),h=ga.dot(ga),v=ga.dot(Ad),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(h*m-p*v)*g,E=(d*v-p*m)*g;return c.set(1-y-E,E,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(d,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Nd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),Nd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Nd,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Ud,c.z),d}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),ga.subVectors(e,i),Ci.cross(ga).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ci.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Ts.subVectors(l,r),As.subVectors(c,r),wd.subVectors(e,r);const m=Ts.dot(wd),h=As.dot(wd);if(m<=0&&h<=0)return i.copy(r);Rd.subVectors(e,l);const v=Ts.dot(Rd),x=As.dot(Rd);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Ts,d);Cd.subVectors(e,c);const y=Ts.dot(Cd),E=As.dot(Cd);if(E>=0&&y<=E)return i.copy(c);const L=y*h-m*E;if(L<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(r).addScaledVector(As,p);const M=v*E-y*x;if(M<=0&&x-v>=0&&y-E>=0)return y_.subVectors(c,l),p=(x-v)/(x-v+(y-E)),i.copy(l).addScaledVector(y_,p);const S=1/(M+L+g);return d=L*S,p=g*S,i.copy(r).addScaledVector(Ts,d).addScaledVector(As,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jo{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ni):Ni.fromBufferAttribute(c,d),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),xc.subVectors(this.max,Fo),ws.subVectors(e.a,Fo),Rs.subVectors(e.b,Fo),Cs.subVectors(e.c,Fo),tr.subVectors(Rs,ws),nr.subVectors(Cs,Rs),Rr.subVectors(ws,Cs);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Rr.z,Rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Rr.z,0,-Rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Rr.y,Rr.x,0];return!Ld(i,ws,Rs,Cs,xc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,ws,Rs,Cs,xc))?!1:(Sc.crossVectors(tr,nr),i=[Sc.x,Sc.y,Sc.z],Ld(i,ws,Rs,Cs,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new te,new te,new te,new te,new te,new te,new te,new te],Ni=new te,vc=new Jo,ws=new te,Rs=new te,Cs=new te,tr=new te,nr=new te,Rr=new te,Fo=new te,xc=new te,Sc=new te,Cr=new te;function Ld(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Cr.fromArray(s,c);const p=l.x*Math.abs(Cr.x)+l.y*Math.abs(Cr.y)+l.z*Math.abs(Cr.z),m=e.dot(Cr),h=i.dot(Cr),v=r.dot(Cr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const vn=new te,yc=new Et;let sM=0;class Mi extends Gr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=o_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rv extends Mi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Cv extends Mi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Fn extends Mi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const oM=new Jo,Ho=new te,Od=new te;class eu{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):oM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Od)),this.expandByPoint(Ho.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lM=0;const vi=new fn,Pd=new Zn,Ns=new te,li=new Jo,Go=new Jo,En=new te;class ci extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G1(e)?Cv:Rv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new rt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,r){return vi.makeTranslation(e,i,r),this.applyMatrix4(vi),this}scale(e,i,r){return vi.makeScale(e,i,r),this.applyMatrix4(vi),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Go.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(li.min,Go.min),li.expandByPoint(En),En.addVectors(li.max,Go.max),li.expandByPoint(En)):(li.expandByPoint(Go.min),li.expandByPoint(Go.max))}li.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)En.fromBufferAttribute(p,h),m&&(Ns.fromBufferAttribute(e,h),En.add(Ns)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Mi(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new te,m[T]=new te;const h=new te,v=new te,x=new te,g=new Et,y=new Et,E=new Et,L=new te,M=new te;function S(T,A,G){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,A),x.fromBufferAttribute(r,G),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,A),E.fromBufferAttribute(c,G),v.sub(h),x.sub(h),y.sub(g),E.sub(g);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(L.copy(v).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(V),M.copy(x).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(V),p[T].add(L),p[A].add(L),p[G].add(L),m[T].add(M),m[A].add(M),m[G].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,A=P.length;T<A;++T){const G=P[T],V=G.start,Z=G.count;for(let ue=V,se=V+Z;ue<se;ue+=3)S(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const B=new te,C=new te,O=new te,D=new te;function z(T){O.fromBufferAttribute(l,T),D.copy(O);const A=p[T];B.copy(A),B.sub(O.multiplyScalar(O.dot(A))).normalize(),C.crossVectors(D,A);const V=C.dot(m[T])<0?-1:1;d.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,A=P.length;T<A;++T){const G=P[T],V=G.start,Z=G.count;for(let ue=V,se=V+Z;ue<se;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const l=new te,c=new te,d=new te,p=new te,m=new te,h=new te,v=new te,x=new te;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),L=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,L),h.fromBufferAttribute(r,M),p.add(v),m.add(v),h.add(v),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(L,m.x,m.y,m.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),x.subVectors(l,c),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,x=p.normalized,g=new h.constructor(m.length*v);let y=0,E=0;for(let L=0,M=m.length;L<M;L++){p.isInterleavedBufferAttribute?y=m[L]*p.data.stride+p.offset:y=m[L]*v;for(let S=0;S<v;S++)g[E++]=h[y++]}return new Mi(g,v,x)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ci,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,x=h.length;v<x;v++){const g=h[v],y=e(g,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let x=0,g=h.length;x<g;x++){const y=h[x];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],x=c[h];for(let g=0,y=x.length;g<y;g++)v.push(x[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cM=0;class $o extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Os,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Zd,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jd&&(r.blendSrc=this.blendSrc),this.blendDst!==Zd&&(r.blendDst=this.blendDst),this.blendEquation!==Lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new te,Id=new te,Mc=new te,ir=new te,Bd=new te,bc=new te,zd=new te;class Nv{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Id.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Id);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Mc),p=ir.dot(this.direction),m=-ir.dot(Mc),h=ir.lengthSq(),v=Math.abs(1-d*d);let x,g,y,E;if(v>0)if(x=d*m-p,g=d*p-m,E=c*v,x>=0)if(g>=-E)if(g<=E){const L=1/v;x*=L,g*=L,y=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=c,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;else g=-c,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;else g<=-E?(x=Math.max(0,-(-d*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+h):g<=E?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(x=Math.max(0,-(d*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+h);else g=d>0?-c:c,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Id).addScaledVector(Mc,g),y}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const r=xa.dot(this.direction),l=xa.dot(xa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,r,l,c){Bd.subVectors(i,e),bc.subVectors(r,e),zd.crossVectors(Bd,bc);let d=this.direction.dot(zd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ir.subVectors(this.origin,e);const m=p*this.direction.dot(bc.crossVectors(ir,bc));if(m<0)return null;const h=p*this.direction.dot(Bd.cross(ir));if(h<0||m+h>d)return null;const v=-p*ir.dot(zd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Or extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const M_=new fn,Nr=new Nv,Ec=new eu,b_=new te,Tc=new te,Ac=new te,wc=new te,Fd=new te,Rc=new te,E_=new te,Cc=new te;class Li extends Zn{constructor(e=new ci,i=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Rc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],x=c[m];v!==0&&(Fd.fromBufferAttribute(x,e),d?Rc.addScaledVector(Fd,v):Rc.addScaledVector(Fd.sub(i),v))}i.add(Rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Ec.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Ec,b_)===null||Nr.origin.distanceToSquared(b_)>(e.far-e.near)**2))&&(M_.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(M_),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(d))for(let E=0,L=g.length;E<L;E++){const M=g[E],S=d[M.materialIndex],P=Math.max(M.start,y.start),B=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,O=B;C<O;C+=3){const D=p.getX(C),z=p.getX(C+1),T=p.getX(C+2);l=Nc(this,S,e,r,h,v,x,D,z,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),L=Math.min(p.count,y.start+y.count);for(let M=E,S=L;M<S;M+=3){const P=p.getX(M),B=p.getX(M+1),C=p.getX(M+2);l=Nc(this,d,e,r,h,v,x,P,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,L=g.length;E<L;E++){const M=g[E],S=d[M.materialIndex],P=Math.max(M.start,y.start),B=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,O=B;C<O;C+=3){const D=C,z=C+1,T=C+2;l=Nc(this,S,e,r,h,v,x,D,z,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),L=Math.min(m.count,y.start+y.count);for(let M=E,S=L;M<S;M+=3){const P=M,B=M+1,C=M+2;l=Nc(this,d,e,r,h,v,x,P,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function uM(s,e,i,r,l,c,d,p){let m;if(e.side===jn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===or,p),m===null)return null;Cc.copy(p),Cc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Cc);return h<i.near||h>i.far?null:{distance:h,point:Cc.clone(),object:s}}function Nc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,Tc),s.getVertexPosition(m,Ac),s.getVertexPosition(h,wc);const v=uM(s,e,i,r,Tc,Ac,wc,E_);if(v){const x=new te;Di.getBarycoord(E_,Tc,Ac,wc,x),l&&(v.uv=Di.getInterpolatedAttribute(l,p,m,h,x,new Et)),c&&(v.uv1=Di.getInterpolatedAttribute(c,p,m,h,x,new Et)),d&&(v.normal=Di.getInterpolatedAttribute(d,p,m,h,x,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new te,materialIndex:0};Di.getNormal(Tc,Ac,wc,g.normal),v.face=g,v.barycoord=x}return v}class fM extends zn{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Nn,v=Nn,x,g){super(null,d,p,m,h,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new te,dM=new te,hM=new rt;class Ur{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Hd.subVectors(r,i).cross(dM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Hd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||hM.getNormalMatrix(e),l=this.coplanarPoint(Hd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new eu,pM=new Et(.5,.5),Dc=new te;class Dv{constructor(e=new Ur,i=new Ur,r=new Ur,l=new Ur,c=new Ur,d=new Ur){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Wi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],x=c[5],g=c[6],y=c[7],E=c[8],L=c[9],M=c[10],S=c[11],P=c[12],B=c[13],C=c[14],O=c[15];if(l[0].setComponents(h-d,y-v,S-E,O-P).normalize(),l[1].setComponents(h+d,y+v,S+E,O+P).normalize(),l[2].setComponents(h+p,y+x,S+L,O+B).normalize(),l[3].setComponents(h-p,y-x,S-L,O-B).normalize(),r)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(h-m,y-g,S-M,O-C).normalize();else if(l[4].setComponents(h-m,y-g,S-M,O-C).normalize(),i===Wi)l[5].setComponents(h+m,y+g,S+M,O+C).normalize();else if(i===Kc)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const i=pM.distanceTo(e.center);return Dr.radius=.7071067811865476+i,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?e.max.x:e.min.x,Dc.y=l.normal.y>0?e.max.y:e.min.y,Dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends $o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T_=new fn,Ih=new Nv,Uc=new eu,Lc=new te;class mM extends Zn{constructor(e=new ci,i=new Uv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,e.ray.intersectsSphere(Uc)===!1)return;T_.copy(l).invert(),Ih.copy(e.ray).applyMatrix4(T_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,x=r.attributes.position;if(h!==null){const g=Math.max(0,d.start),y=Math.min(h.count,d.start+d.count);for(let E=g,L=y;E<L;E++){const M=h.getX(E);Lc.fromBufferAttribute(x,M),A_(Lc,M,m,l,e,i,this)}}else{const g=Math.max(0,d.start),y=Math.min(x.count,d.start+d.count);for(let E=g,L=y;E<L;E++)Lc.fromBufferAttribute(x,E),A_(Lc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function A_(s,e,i,r,l,c,d){const p=Ih.distanceSqToPoint(s);if(p<i){const m=new te;Ih.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Lv extends zn{constructor(e=[],i=zr,r,l,c,d,p,m,h,v){super(e,i,r,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fs extends zn{constructor(e,i,r=ji,l,c,d,p=Nn,m=Nn,h,v=Ta,x=1){if(v!==Ta&&v!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,d,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends Fs{constructor(e,i=ji,r=zr,l,c,d=Nn,p=Nn,m,h=Ta){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,r,l,c,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ov extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends ci{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],x=[];let g=0,y=0;E("z","y","x",-1,-1,r,i,e,d,c,0),E("z","y","x",1,-1,r,i,-e,d,c,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(x,2));function E(L,M,S,P,B,C,O,D,z,T,A){const G=C/z,V=O/T,Z=C/2,ue=O/2,se=D/2,K=z+1,F=T+1;let k=0,ee=0;const he=new te;for(let de=0;de<F;de++){const U=de*V-ue;for(let W=0;W<K;W++){const xe=W*G-Z;he[L]=xe*P,he[M]=U*B,he[S]=se,h.push(he.x,he.y,he.z),he[L]=0,he[M]=0,he[S]=D>0?1:-1,v.push(he.x,he.y,he.z),x.push(W/z),x.push(1-de/T),k+=1}}for(let de=0;de<T;de++)for(let U=0;U<z;U++){const W=g+U+K*de,xe=g+U+K*(de+1),Ee=g+(U+1)+K*(de+1),Ae=g+(U+1)+K*de;m.push(W,xe,Ae),m.push(xe,Ee,Ae),ee+=6}p.addGroup(y,ee,A),y+=ee,g+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class tl extends ci{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],d=[];p(l),h(r),v(),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(c.slice(),3)),this.setAttribute("uv",new Fn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(P){const B=new te,C=new te,O=new te;for(let D=0;D<i.length;D+=3)y(i[D+0],B),y(i[D+1],C),y(i[D+2],O),m(B,C,O,P)}function m(P,B,C,O){const D=O+1,z=[];for(let T=0;T<=D;T++){z[T]=[];const A=P.clone().lerp(C,T/D),G=B.clone().lerp(C,T/D),V=D-T;for(let Z=0;Z<=V;Z++)Z===0&&T===D?z[T][Z]=A:z[T][Z]=A.clone().lerp(G,Z/V)}for(let T=0;T<D;T++)for(let A=0;A<2*(D-T)-1;A++){const G=Math.floor(A/2);A%2===0?(g(z[T][G+1]),g(z[T+1][G]),g(z[T][G])):(g(z[T][G+1]),g(z[T+1][G+1]),g(z[T+1][G]))}}function h(P){const B=new te;for(let C=0;C<c.length;C+=3)B.x=c[C+0],B.y=c[C+1],B.z=c[C+2],B.normalize().multiplyScalar(P),c[C+0]=B.x,c[C+1]=B.y,c[C+2]=B.z}function v(){const P=new te;for(let B=0;B<c.length;B+=3){P.x=c[B+0],P.y=c[B+1],P.z=c[B+2];const C=M(P)/2/Math.PI+.5,O=S(P)/Math.PI+.5;d.push(C,1-O)}E(),x()}function x(){for(let P=0;P<d.length;P+=6){const B=d[P+0],C=d[P+2],O=d[P+4],D=Math.max(B,C,O),z=Math.min(B,C,O);D>.9&&z<.1&&(B<.2&&(d[P+0]+=1),C<.2&&(d[P+2]+=1),O<.2&&(d[P+4]+=1))}}function g(P){c.push(P.x,P.y,P.z)}function y(P,B){const C=P*3;B.x=e[C+0],B.y=e[C+1],B.z=e[C+2]}function E(){const P=new te,B=new te,C=new te,O=new te,D=new Et,z=new Et,T=new Et;for(let A=0,G=0;A<c.length;A+=9,G+=6){P.set(c[A+0],c[A+1],c[A+2]),B.set(c[A+3],c[A+4],c[A+5]),C.set(c[A+6],c[A+7],c[A+8]),D.set(d[G+0],d[G+1]),z.set(d[G+2],d[G+3]),T.set(d[G+4],d[G+5]),O.copy(P).add(B).add(C).divideScalar(3);const V=M(O);L(D,G+0,P,V),L(z,G+2,B,V),L(T,G+4,C,V)}}function L(P,B,C,O){O<0&&P.x===1&&(d[B]=P.x-1),C.x===0&&C.z===0&&(d[B]=O/2/Math.PI+.5)}function M(P){return Math.atan2(P.z,-P.x)}function S(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.vertices,e.indices,e.radius,e.detail)}}class $h extends tl{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new $h(e.radius,e.detail)}}class ep extends tl{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ep(e.radius,e.detail)}}class nl extends ci{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,x=e/p,g=i/m,y=[],E=[],L=[],M=[];for(let S=0;S<v;S++){const P=S*g-d;for(let B=0;B<h;B++){const C=B*x-c;E.push(C,-P,0),L.push(0,0,1),M.push(B/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let P=0;P<p;P++){const B=P+h*S,C=P+h*(S+1),O=P+1+h*(S+1),D=P+1+h*S;y.push(B,C,D),y.push(C,O,D)}this.setIndex(y),this.setAttribute("position",new Fn(E,3)),this.setAttribute("normal",new Fn(L,3)),this.setAttribute("uv",new Fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class tp extends tl{constructor(e=1,i=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,l,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new tp(e.radius,e.detail)}}class np extends ci{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},r=Math.floor(r),l=Math.floor(l);const m=[],h=[],v=[],x=[],g=new te,y=new te,E=new te;for(let L=0;L<=r;L++){const M=d+L/r*p;for(let S=0;S<=l;S++){const P=S/l*c;y.x=(e+i*Math.cos(M))*Math.cos(P),y.y=(e+i*Math.cos(M))*Math.sin(P),y.z=i*Math.sin(M),h.push(y.x,y.y,y.z),g.x=e*Math.cos(P),g.y=e*Math.sin(P),E.subVectors(y,g).normalize(),v.push(E.x,E.y,E.z),x.push(S/l),x.push(L/r)}}for(let L=1;L<=r;L++)for(let M=1;M<=l;M++){const S=(l+1)*L+M-1,P=(l+1)*(L-1)+M-1,B=(l+1)*(L-1)+M,C=(l+1)*L+M;m.push(S,P,C),m.push(P,B,C)}this.setIndex(m),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(w_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(w_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function w_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _M(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Pv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const vM={clone:Hs,merge:Bn};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(l.value);break;case"v3":this.uniforms[r].value=new te().fromArray(l.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new rt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MM extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oc=new te,Pc=new Gs,Hi=new te;class Iv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Pc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Oc,Pc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new te,R_=new Et,C_=new Et;class Si extends Iv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,R_,C_),i.subVectors(C_,R_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(_d*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Bv extends Iv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ds=-90,Us=1;class EM extends Zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ds,Us,e,i);l.layers=this.layers,this.add(l);const c=new Si(Ds,Us,e,i);c.layers=this.layers,this.add(c);const d=new Si(Ds,Us,e,i);d.layers=this.layers,this.add(d);const p=new Si(Ds,Us,e,i);p.layers=this.layers,this.add(p);const m=new Si(Ds,Us,e,i);m.layers=this.layers,this.add(m);const h=new Si(Ds,Us,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const L=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=L,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class TM extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class AM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const op=class op{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};op.prototype.isMatrix2=!0;let N_=op;function D_(s,e,i,r){const l=wM(r);switch(i){case yv:return s*e;case bv:return s*e/l.components*l.byteLength;case Yh:return s*e/l.components*l.byteLength;case Fr:return s*e*2/l.components*l.byteLength;case jh:return s*e*2/l.components*l.byteLength;case Mv:return s*e*3/l.components*l.byteLength;case Ui:return s*e*4/l.components*l.byteLength;case Zh:return s*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kc:case Xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case lh:return Math.max(s,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(s,8)*Math.max(e,8)/2;case ch:case uh:case dh:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fh:case qc:case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Nh:case Dh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uh:case Lh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yc:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wM(s){switch(s){case yi:case _v:return{byteLength:1,components:1};case Zo:case vv:case Ea:return{byteLength:2,components:1};case Wh:case qh:return{byteLength:2,components:4};case ji:case Xh:case Xi:return{byteLength:4,components:1};case xv:case Sv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);function zv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function RM(s){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,x=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,h){const v=m.array,x=m.updateRanges;if(s.bindBuffer(h,p),x.length===0)s.bufferSubData(h,0,v);else{x.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<x.length;y++){const E=x[g],L=x[y];L.start<=E.start+E.count+1?E.count=Math.max(E.count,L.start+L.count-E.start):(++g,x[g]=L)}x.length=g+1;for(let y=0,E=x.length;y<E;y++){const L=x[y];s.bufferSubData(h,L.start*v.BYTES_PER_ELEMENT,v,L.start,L.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
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
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JM=`#define PI 3.141592653589793
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
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yb=`#ifdef USE_ENVMAP
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
	#endif
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
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
#endif`,wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Rb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fb=`#if defined( USE_POINTS_UV )
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
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,IE=`#if DEPTH_PACKING == 3200
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
}`,BE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,VE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,XE=`uniform vec3 diffuse;
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
}`,WE=`#define LAMBERT
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
}`,qE=`#define LAMBERT
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
}`,YE=`#define MATCAP
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
}`,jE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,KE=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,JE=`#define PHONG
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
}`,$E=`#define STANDARD
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
}`,eT=`#define STANDARD
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
}`,tT=`#define TOON
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
}`,nT=`#define TOON
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
}`,iT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,sT=`uniform vec3 color;
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
}`,oT=`uniform float rotation;
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
}`,lT=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:CM,alphahash_pars_fragment:NM,alphamap_fragment:DM,alphamap_pars_fragment:UM,alphatest_fragment:LM,alphatest_pars_fragment:OM,aomap_fragment:PM,aomap_pars_fragment:IM,batching_pars_vertex:BM,batching_vertex:zM,begin_vertex:FM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:VM,bumpmap_pars_fragment:kM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:jM,color_pars_fragment:ZM,color_pars_vertex:KM,color_vertex:QM,common:JM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:yb,envmap_vertex:fb,fog_vertex:db,fog_pars_vertex:hb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:vb,lights_lambert_pars_fragment:xb,lights_pars_begin:Sb,lights_toon_fragment:Mb,lights_toon_pars_fragment:bb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Tb,lights_physical_fragment:Ab,lights_physical_pars_fragment:wb,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:Nb,lightprobes_pars_fragment:Db,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Pb,map_fragment:Ib,map_pars_fragment:Bb,map_particle_fragment:zb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:kb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Wb,morphtarget_vertex:qb,normal_fragment_begin:Yb,normal_fragment_maps:jb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:aE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:dE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:_E,skinnormal_vertex:vE,specularmap_fragment:xE,specularmap_pars_fragment:SE,tonemapping_fragment:yE,tonemapping_pars_fragment:ME,transmission_fragment:bE,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:wE,worldpos_vertex:RE,background_vert:CE,background_frag:NE,backgroundCube_vert:DE,backgroundCube_frag:UE,cube_vert:LE,cube_frag:OE,depth_vert:PE,depth_frag:IE,distance_vert:BE,distance_frag:zE,equirect_vert:FE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:VE,meshbasic_vert:kE,meshbasic_frag:XE,meshlambert_vert:WE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:jE,meshnormal_vert:ZE,meshnormal_frag:KE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:$E,meshphysical_frag:eT,meshtoon_vert:tT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:rT,shadow_frag:sT,sprite_vert:oT,sprite_frag:lT},Ie={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Bn([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Bn([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Bn([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Bn([Ie.lights,Ie.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ic={r:0,b:0,g:0},cT=new fn,Fv=new rt;Fv.set(-1,0,0,0,1,0,0,0,1);function uT(s,e,i,r,l,c){const d=new bt(0);let p=l===!0?0:1,m,h,v=null,x=0,g=null;function y(P){let B=P.isScene===!0?P.background:null;if(B&&B.isTexture){const C=P.backgroundBlurriness>0;B=e.get(B,C)}return B}function E(P){let B=!1;const C=y(P);C===null?M(d,p):C&&C.isColor&&(M(C,1),B=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function L(P,B){const C=y(B);C&&(C.isCubeTexture||C.mapping===$c)?(h===void 0&&(h=new Li(new el(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Hs(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Fv),h.material.toneMapped=yt.getTransfer(C.colorSpace)!==zt,(v!==C||x!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=C,x=C.version,g=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Li(new nl(2,2),new Zi({name:"BackgroundMaterial",uniforms:Hs(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=yt.getTransfer(C.colorSpace)!==zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,g=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function M(P,B){P.getRGB(Ic,Pv(s)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,B,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,B=1){d.set(P),p=B,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,M(d,p)},render:E,addToRenderList:L,dispose:S}}function fT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(V,Z,ue,se,K){let F=!1;const k=x(V,se,ue,Z);c!==k&&(c=k,h(c.object)),F=y(V,se,ue,K),F&&E(V,se,ue,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,C(V,Z,ue,se),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function x(V,Z,ue,se){const K=se.wireframe===!0;let F=r[Z.id];F===void 0&&(F={},r[Z.id]=F);const k=V.isInstancedMesh===!0?V.id:0;let ee=F[k];ee===void 0&&(ee={},F[k]=ee);let he=ee[ue.id];he===void 0&&(he={},ee[ue.id]=he);let de=he[K];return de===void 0&&(de=g(m()),he[K]=de),de}function g(V){const Z=[],ue=[],se=[];for(let K=0;K<i;K++)Z[K]=0,ue[K]=0,se[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ue,attributeDivisors:se,object:V,attributes:{},index:null}}function y(V,Z,ue,se){const K=c.attributes,F=Z.attributes;let k=0;const ee=ue.getAttributes();for(const he in ee)if(ee[he].location>=0){const U=K[he];let W=F[he];if(W===void 0&&(he==="instanceMatrix"&&V.instanceMatrix&&(W=V.instanceMatrix),he==="instanceColor"&&V.instanceColor&&(W=V.instanceColor)),U===void 0||U.attribute!==W||W&&U.data!==W.data)return!0;k++}return c.attributesNum!==k||c.index!==se}function E(V,Z,ue,se){const K={},F=Z.attributes;let k=0;const ee=ue.getAttributes();for(const he in ee)if(ee[he].location>=0){let U=F[he];U===void 0&&(he==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),he==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const W={};W.attribute=U,U&&U.data&&(W.data=U.data),K[he]=W,k++}c.attributes=K,c.attributesNum=k,c.index=se}function L(){const V=c.newAttributes;for(let Z=0,ue=V.length;Z<ue;Z++)V[Z]=0}function M(V){S(V,0)}function S(V,Z){const ue=c.newAttributes,se=c.enabledAttributes,K=c.attributeDivisors;ue[V]=1,se[V]===0&&(s.enableVertexAttribArray(V),se[V]=1),K[V]!==Z&&(s.vertexAttribDivisor(V,Z),K[V]=Z)}function P(){const V=c.newAttributes,Z=c.enabledAttributes;for(let ue=0,se=Z.length;ue<se;ue++)Z[ue]!==V[ue]&&(s.disableVertexAttribArray(ue),Z[ue]=0)}function B(V,Z,ue,se,K,F,k){k===!0?s.vertexAttribIPointer(V,Z,ue,K,F):s.vertexAttribPointer(V,Z,ue,se,K,F)}function C(V,Z,ue,se){L();const K=se.attributes,F=ue.getAttributes(),k=Z.defaultAttributeValues;for(const ee in F){const he=F[ee];if(he.location>=0){let de=K[ee];if(de===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),de!==void 0){const U=de.normalized,W=de.itemSize,xe=e.get(de);if(xe===void 0)continue;const Ee=xe.buffer,Ae=xe.type,$=xe.bytesPerElement,ye=Ae===s.INT||Ae===s.UNSIGNED_INT||de.gpuType===Xh;if(de.isInterleavedBufferAttribute){const be=de.data,He=be.stride,tt=de.offset;if(be.isInstancedInterleavedBuffer){for(let Ke=0;Ke<he.locationSize;Ke++)S(he.location+Ke,be.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ke=0;Ke<he.locationSize;Ke++)M(he.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ke=0;Ke<he.locationSize;Ke++)B(he.location+Ke,W/he.locationSize,Ae,U,He*$,(tt+W/he.locationSize*Ke)*$,ye)}else{if(de.isInstancedBufferAttribute){for(let be=0;be<he.locationSize;be++)S(he.location+be,de.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let be=0;be<he.locationSize;be++)M(he.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let be=0;be<he.locationSize;be++)B(he.location+be,W/he.locationSize,Ae,U,W*$,W/he.locationSize*be*$,ye)}}else if(k!==void 0){const U=k[ee];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(he.location,U);break;case 3:s.vertexAttrib3fv(he.location,U);break;case 4:s.vertexAttrib4fv(he.location,U);break;default:s.vertexAttrib1fv(he.location,U)}}}}P()}function O(){A();for(const V in r){const Z=r[V];for(const ue in Z){const se=Z[ue];for(const K in se){const F=se[K];for(const k in F)v(F[k].object),delete F[k];delete se[K]}}delete r[V]}}function D(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const ue in Z){const se=Z[ue];for(const K in se){const F=se[K];for(const k in F)v(F[k].object),delete F[k];delete se[K]}}delete r[V.id]}function z(V){for(const Z in r){const ue=r[Z];for(const se in ue){const K=ue[se];if(K[V.id]===void 0)continue;const F=K[V.id];for(const k in F)v(F[k].object),delete F[k];delete K[V.id]}}}function T(V){for(const Z in r){const ue=r[Z],se=V.isInstancedMesh===!0?V.id:0,K=ue[se];if(K!==void 0){for(const F in K){const k=K[F];for(const ee in k)v(k[ee].object),delete k[ee];delete K[F]}delete ue[se],Object.keys(ue).length===0&&delete r[Z]}}}function A(){G(),d=!0,c!==l&&(c=l,h(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:A,resetDefaultState:G,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:L,enableAttribute:M,disableUnusedAttributes:P}}function dT(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,v){v!==0&&(s.drawArraysInstanced(r,m,h,v),i.update(h,r,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let g=0;for(let y=0;y<v;y++)g+=h[y];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function hT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ui&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(nt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:L,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:P,maxVaryings:B,maxFragmentUniforms:C,maxSamples:O,samples:D}}function pT(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Ur,p=new rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||r!==0||l;return l=g,r=x.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,y){const E=x.clippingPlanes,L=x.clipIntersection,M=x.clipShadows,S=s.get(x);if(!l||E===null||E.length===0||c&&!M)c?v(null):h();else{const P=c?0:r,B=P*4;let C=S.clippingState||null;m.value=C,C=v(E,g,B,y);for(let O=0;O!==B;++O)C[O]=i[O];S.clippingState=C,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=P}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,y,E){const L=x!==null?x.length:0;let M=null;if(L!==0){if(M=m.value,E!==!0||M===null){const S=y+L*4,P=g.matrixWorldInverse;p.getNormalMatrix(P),(M===null||M.length<S)&&(M=new Float32Array(S));for(let B=0,C=y;B!==L;++B,C+=4)d.copy(x[B]).applyMatrix4(P,p),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,M}}const sr=4,U_=[.125,.215,.35,.446,.526,.582],Pr=20,mT=256,Vo=new Bv,L_=new bt;let Gd=null,Vd=0,kd=0,Xd=!1;const gT=new te;class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=gT}=c;Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Vd,kd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ea,format:Ui,colorSpace:jc,depthBuffer:!1},l=P_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(c)),this._blurMaterial=xT(c,e,i),this._ggxMaterial=vT(c,e,i)}return l}_compileMaterial(e){const i=new Li(new ci,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,r,l,c){const m=new Si(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(L_),x.toneMapping=qi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new el,new Or({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,M=L.material;let S=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,S=!0):(M.color.copy(L_),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[B],c.y,c.z)):C===1?(m.up.set(0,0,h[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[B],c.z)):(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[B]));const O=this._cubeSize;Ls(l,C*O,B>2?O:0,O,O),x.setRenderTarget(l),S&&x.render(L,m),x.render(e,m)}x.toneMapping=y,x.autoClear=g,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zr||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Vo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),g=0+h*1.25,y=x*g,{_lodMax:E}=this,L=this._sizeLods[r],M=3*L*(r>E-sr?r-E+sr:0),S=4*(this._cubeSize-L);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-i,Ls(c,M,S,3*L,2*L),l.setRenderTarget(c),l.render(p,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ls(e,M,S,3*L,2*L),l.setRenderTarget(e),l.render(p,Vo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Pr-1),L=c/E,M=isFinite(c)?1+Math.floor(v*L):Pr;M>Pr&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Pr}`);const S=[];let P=0;for(let z=0;z<Pr;++z){const T=z/L,A=Math.exp(-T*T/2);S.push(A),z===0?P+=A:z<M&&(P+=2*A)}for(let z=0;z<S.length;z++)S[z]=S[z]/P;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=E,g.mipInt.value=B-r;const C=this._sizeLods[l],O=3*C*(l>B-sr?l-B+sr:0),D=4*(this._cubeSize-C);Ls(i,O,D,3*C,2*C),m.setRenderTarget(i),m.render(x,Vo)}}function _T(s){const e=[],i=[],r=[];let l=s;const c=s-sr+1+U_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-sr?m=U_[d-s+sr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,x=1+h,g=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,E=6,L=3,M=2,S=1,P=new Float32Array(L*E*y),B=new Float32Array(M*E*y),C=new Float32Array(S*E*y);for(let D=0;D<y;D++){const z=D%3*2/3-1,T=D>2?0:-1,A=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];P.set(A,L*E*D),B.set(g,M*E*D);const G=[D,D,D,D,D,D];C.set(G,S*E*D)}const O=new ci;O.setAttribute("position",new Mi(P,L)),O.setAttribute("uv",new Mi(B,M)),O.setAttribute("faceIndex",new Mi(C,S)),r.push(new Li(O,null)),l>sr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function P_(s,e,i){const r=new Yi(s,e,i);return r.texture.mapping=$c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function vT(s,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function xT(s,e,i){const r=new Float32Array(Pr),l=new te(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function I_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function B_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hv extends Yi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Lv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new el(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ma});c.uniforms.tEquirect.value=i;const d=new Li(l,c),p=i.minFilter;return i.minFilter===Ir&&(i.minFilter=Pn),new EM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function ST(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===pd||y===md)if(e.has(g)){const E=e.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const L=new Hv(E.height);return L.fromEquirectangularTexture(s,g),e.set(g,L),g.addEventListener("dispose",h),p(L.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,E=y===pd||y===md,L=y===zr||y===zs;if(E||L){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new O_(s)),M=E?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const P=g.image;return E&&P&&P.height>0||L&&P&&m(P)?(r===null&&(r=new O_(s)),M=E?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function p(g,y){return y===pd?g.mapping=zr:y===md&&(g.mapping=zs),g}function m(g){let y=0;const E=6;for(let L=0;L<E;L++)g[L]!==void 0&&y++;return y===E}function h(g){const y=g.target;y.removeEventListener("dispose",h);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const E=i.get(y);E!==void 0&&(i.delete(y),E.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function yT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ps("WebGLRenderer: "+r+" extension not supported."),l}}}function MT(s,e,i,r){const l={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function h(x){const g=[],y=x.index,E=x.attributes.position;let L=0;if(E===void 0)return;if(y!==null){const P=y.array;L=y.version;for(let B=0,C=P.length;B<C;B+=3){const O=P[B+0],D=P[B+1],z=P[B+2];g.push(O,D,D,z,z,O)}}else{const P=E.array;L=E.version;for(let B=0,C=P.length/3-1;B<C;B+=3){const O=B+0,D=B+1,z=B+2;g.push(O,D,D,z,z,O)}}const M=new(E.count>=65535?Cv:Rv)(g,1);M.version=L;const S=c.get(x);S&&e.remove(S),c.set(x,M)}function v(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function bT(s,e,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*d),i.update(g,r,1)}function h(x,g,y){y!==0&&(s.drawElementsInstanced(r,g,c,x*d,y),i.update(g,r,y))}function v(x,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,y);let L=0;for(let M=0;M<y;M++)L+=g[M];i.update(L,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function ET(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Tt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function TT(s,e,i){const r=new WeakMap,l=new sn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let A=function(){z.dispose(),r.delete(p),p.removeEventListener("dispose",A)};g!==void 0&&g.texture.dispose();const y=p.morphAttributes.position!==void 0,E=p.morphAttributes.normal!==void 0,L=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],S=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let B=0;y===!0&&(B=1),E===!0&&(B=2),L===!0&&(B=3);let C=p.attributes.position.count*B,O=1;C>e.maxTextureSize&&(O=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*O*4*x),z=new Tv(D,C,O,x);z.type=Xi,z.needsUpdate=!0;const T=B*4;for(let G=0;G<x;G++){const V=M[G],Z=S[G],ue=P[G],se=C*O*4*G;for(let K=0;K<V.count;K++){const F=K*T;y===!0&&(l.fromBufferAttribute(V,K),D[se+F+0]=l.x,D[se+F+1]=l.y,D[se+F+2]=l.z,D[se+F+3]=0),E===!0&&(l.fromBufferAttribute(Z,K),D[se+F+4]=l.x,D[se+F+5]=l.y,D[se+F+6]=l.z,D[se+F+7]=0),L===!0&&(l.fromBufferAttribute(ue,K),D[se+F+8]=l.x,D[se+F+9]=l.y,D[se+F+10]=l.z,D[se+F+11]=ue.itemSize===4?l.w:1)}}g={count:x,texture:z,size:new Et(C,O)},r.set(p,g),p.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let y=0;for(let L=0;L<h.length;L++)y+=h[L];const E=p.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function AT(s,e,i,r,l){let c=new WeakMap;function d(h){const v=l.render.frame,x=h.geometry,g=e.get(h,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const wT={[cv]:"LINEAR_TONE_MAPPING",[uv]:"REINHARD_TONE_MAPPING",[fv]:"CINEON_TONE_MAPPING",[dv]:"ACES_FILMIC_TONE_MAPPING",[pv]:"AGX_TONE_MAPPING",[mv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function RT(s,e,i,r,l,c){const d=new Yi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Fs(e,i):void 0}),p=new Yi(e,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),m=new ci;m.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const h=new yM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Li(m,h),x=new Bv(-1,1,1,-1,0,1);let g=null,y=null,E=!1,L,M=null,S=[],P=!1;this.setSize=function(B,C){d.setSize(B,C),p.setSize(B,C);for(let O=0;O<S.length;O++){const D=S[O];D.setSize&&D.setSize(B,C)}},this.setEffects=function(B){S=B,P=S.length>0&&S[0].isRenderPass===!0;const C=d.width,O=d.height;for(let D=0;D<S.length;D++){const z=S[D];z.setSize&&z.setSize(C,O)}},this.begin=function(B,C){if(E||B.toneMapping===qi&&S.length===0)return!1;if(M=C,C!==null){const O=C.width,D=C.height;(d.width!==O||d.height!==D)&&this.setSize(O,D)}return P===!1&&B.setRenderTarget(d),L=B.toneMapping,B.toneMapping=qi,!0},this.hasRenderPass=function(){return P},this.end=function(B,C){B.toneMapping=L,E=!0;let O=d,D=p;for(let z=0;z<S.length;z++){const T=S[z];if(T.enabled!==!1&&(T.render(B,D,O,C),T.needsSwap!==!1)){const A=O;O=D,D=A}}if(g!==B.outputColorSpace||y!==B.toneMapping){g=B.outputColorSpace,y=B.toneMapping,h.defines={},yt.getTransfer(g)===zt&&(h.defines.SRGB_TRANSFER="");const z=wT[y];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=O.texture,B.setRenderTarget(M),B.render(v,x),M=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Gv=new zn,Bh=new Fs(1,1),Vv=new Tv,kv=new Q1,Xv=new Lv,z_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function Vs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=z_[l];if(c===void 0&&(c=new Float32Array(l),z_[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function yn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function nu(s,e){let i=F_[e];i===void 0&&(i=new Int32Array(e),F_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function CT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function NT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function DT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function UT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function LT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;V_.set(r),s.uniformMatrix2fv(this.addr,!1,V_),Mn(i,r)}}function OT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;G_.set(r),s.uniformMatrix3fv(this.addr,!1,G_),Mn(i,r)}}function PT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;H_.set(r),s.uniformMatrix4fv(this.addr,!1,H_),Mn(i,r)}}function IT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function BT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function zT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function FT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function HT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function GT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function VT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function kT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function XT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Bh.compareFunction=i.isReversedDepthBuffer()?Qh:Kh,c=Bh):c=Gv,i.setTexture2D(e||c,l)}function WT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||kv,l)}function qT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Xv,l)}function YT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Vv,l)}function jT(s){switch(s){case 5126:return CT;case 35664:return NT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return IT;case 35667:case 35671:return BT;case 35668:case 35672:return zT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function ZT(s,e){s.uniform1fv(this.addr,e)}function KT(s,e){const i=Vs(e,this.size,2);s.uniform2fv(this.addr,i)}function QT(s,e){const i=Vs(e,this.size,3);s.uniform3fv(this.addr,i)}function JT(s,e){const i=Vs(e,this.size,4);s.uniform4fv(this.addr,i)}function $T(s,e){const i=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function eA(s,e){const i=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tA(s,e){const i=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nA(s,e){s.uniform1iv(this.addr,e)}function iA(s,e){s.uniform2iv(this.addr,e)}function aA(s,e){s.uniform3iv(this.addr,e)}function rA(s,e){s.uniform4iv(this.addr,e)}function sA(s,e){s.uniform1uiv(this.addr,e)}function oA(s,e){s.uniform2uiv(this.addr,e)}function lA(s,e){s.uniform3uiv(this.addr,e)}function cA(s,e){s.uniform4uiv(this.addr,e)}function uA(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Bh:d=Gv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function fA(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||kv,c[d])}function dA(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Xv,c[d])}function hA(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Vv,c[d])}function pA(s){switch(s){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return rA;case 5125:return sA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return hA}}class mA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class gA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class _A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function k_(s,e){s.seq.push(e),s.map[e.id]=e}function vA(s,e,i){const r=s.name,l=r.length;for(Wd.lastIndex=0;;){const c=Wd.exec(r),d=Wd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){k_(i,h===void 0?new mA(p,s,e):new gA(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new _A(p),k_(i,x)),i=x}}}class Wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);vA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function X_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const xA=37297;let SA=0;function yA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const W_=new rt;function MA(s){yt._getMatrix(W_,yt.workingColorSpace,s);const e=`mat3( ${W_.elements.map(i=>i.toFixed(4))} )`;switch(yt.getTransfer(s)){case Zc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function q_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+yA(s.getShaderSource(e),p)}else return c}function bA(s,e){const i=MA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EA={[cv]:"Linear",[uv]:"Reinhard",[fv]:"Cineon",[dv]:"ACESFilmic",[pv]:"AgX",[mv]:"Neutral",[hv]:"Custom"};function TA(s,e){const i=EA[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new te;function AA(){yt.getLuminanceCoefficients(Bc);const s=Bc.x.toFixed(4),e=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function RA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function CA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function qo(s){return s!==""}function Y_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(s){return s.replace(NA,UA)}const DA=new Map;function UA(s,e){let i=ct[e];if(i===void 0){const r=DA.get(e);if(r!==void 0)i=ct[r],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zh(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(s){return s.replace(LA,OA)}function OA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PA={[Hc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function IA(s){return PA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[zr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function zA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const FA={[zs]:"ENVMAP_MODE_REFRACTION"};function HA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":FA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[lv]:"ENVMAP_BLENDING_MULTIPLY",[N1]:"ENVMAP_BLENDING_MIX",[D1]:"ENVMAP_BLENDING_ADD"};function VA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":GA[s.combine]||"ENVMAP_BLENDING_NONE"}function kA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function XA(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=IA(i),h=zA(i),v=HA(i),x=VA(i),g=kA(i),y=wA(i),E=RA(c),L=l.createProgram();let M,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),S.length>0&&(S+=`
`)):(M=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),S=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?ct.tonemapping_pars_fragment:"",i.toneMapping!==qi?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,bA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=zh(d),d=Y_(d,i),d=j_(d,i),p=zh(p),p=Y_(p,i),p=j_(p,i),d=Z_(d),p=Z_(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=P+M+d,C=P+S+p,O=X_(l,l.VERTEX_SHADER,B),D=X_(l,l.FRAGMENT_SHADER,C);l.attachShader(L,O),l.attachShader(L,D),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function z(V){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(L)||"",ue=l.getShaderInfoLog(O)||"",se=l.getShaderInfoLog(D)||"",K=Z.trim(),F=ue.trim(),k=se.trim();let ee=!0,he=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,L,O,D);else{const de=q_(l,O,"vertex"),U=q_(l,D,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+de+`
`+U)}else K!==""?nt("WebGLProgram: Program Info Log:",K):(F===""||k==="")&&(he=!1);he&&(V.diagnostics={runnable:ee,programLog:K,vertexShader:{log:F,prefix:M},fragmentShader:{log:k,prefix:S}})}l.deleteShader(O),l.deleteShader(D),T=new Wc(l,L),A=CA(l,L)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=l.getProgramParameter(L,xA)),G},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=O,this.fragmentShader=D,this}let WA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new YA(e),i.set(e,r)),r}}class YA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function jA(s){return s===Fr||s===qc||s===Yc}function ZA(s,e,i,r,l,c){const d=new Av,p=new qA,m=new Set,h=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function L(T,A,G,V,Z,ue){const se=V.fog,K=Z.geometry,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,k=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||F,k),he=ee&&ee.mapping===$c?ee.image.height:null,de=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&nt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,W=U!==void 0?U.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let Ee,Ae,$,ye;if(de){const Ve=ki[de];Ee=Ve.vertexShader,Ae=Ve.fragmentShader}else{Ee=T.vertexShader,Ae=T.fragmentShader;const Ve=p.getVertexShaderStage(T),Zt=p.getFragmentShaderStage(T);p.update(T,Ve,Zt),$=Ve.id,ye=Zt.id}const be=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),tt=Z.isInstancedMesh===!0,Ke=Z.isBatchedMesh===!0,qt=!!T.map,ut=!!T.matcap,vt=!!ee,xt=!!T.aoMap,dt=!!T.lightMap,$t=!!T.bumpMap&&T.wireframe===!1,en=!!T.normalMap,tn=!!T.displacementMap,ln=!!T.emissiveMap,Wt=!!T.metalnessMap,nn=!!T.roughnessMap,j=T.anisotropy>0,Ft=T.clearcoat>0,Ct=T.dispersion>0,I=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,oe=j&&!!T.anisotropyMap,me=Ft&&!!T.clearcoatMap,we=Ft&&!!T.clearcoatNormalMap,De=Ft&&!!T.clearcoatRoughnessMap,pe=I&&!!T.iridescenceMap,ge=I&&!!T.iridescenceThicknessMap,Ce=b&&!!T.sheenColorMap,ze=b&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Ue=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Qe=J&&!!T.transmissionMap,it=J&&!!T.thicknessMap,q=!!T.gradientMap,Re=!!T.alphaMap,ve=T.alphaTest>0,Ne=!!T.alphaHash,Be=!!T.extensions;let Te=qi;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Te=s.toneMapping);const qe={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:Ee,fragmentShader:Ae,defines:T.defines,customVertexShaderID:$,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&Z._colorsTexture!==null,instancing:tt,instancingColor:tt&&Z.instanceColor!==null,instancingMorph:tt&&Z.morphTexture!==null,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:ut,envMap:vt,envMapMode:vt&&ee.mapping,envMapCubeUVHeight:he,aoMap:xt,lightMap:dt,bumpMap:$t,normalMap:en,displacementMap:tn,emissiveMap:ln,normalMapObjectSpace:en&&T.normalMapType===O1,normalMapTangentSpace:en&&T.normalMapType===r_,packedNormalMap:en&&T.normalMapType===r_&&jA(T.normalMap.format),metalnessMap:Wt,roughnessMap:nn,anisotropy:j,anisotropyMap:oe,clearcoat:Ft,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:De,dispersion:Ct,iridescence:I,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:b,sheenColorMap:Ce,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:Ze,transmission:J,transmissionMap:Qe,thicknessMap:it,gradientMap:q,opaque:T.transparent===!1&&T.blending===Os&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ve,alphaHash:Ne,combine:T.combine,mapUv:qt&&E(T.map.channel),aoMapUv:xt&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:$t&&E(T.bumpMap.channel),normalMapUv:en&&E(T.normalMap.channel),displacementMapUv:tn&&E(T.displacementMap.channel),emissiveMapUv:ln&&E(T.emissiveMap.channel),metalnessMapUv:Wt&&E(T.metalnessMap.channel),roughnessMapUv:nn&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(T.sheenRoughnessMap.channel),specularMapUv:Oe&&E(T.specularMap.channel),specularColorMapUv:Ue&&E(T.specularColorMap.channel),specularIntensityMapUv:Ze&&E(T.specularIntensityMap.channel),transmissionMapUv:Qe&&E(T.transmissionMap.channel),thicknessMapUv:it&&E(T.thicknessMap.channel),alphaMapUv:Re&&E(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(en||j),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!K.attributes.uv&&(qt||Re),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&en===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:He,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===zt,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)A.push(G),A.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(S(A,T),P(A,T),A.push(s.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function S(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function P(T,A){d.disableAll(),A.instancing&&d.enable(0),A.instancingColor&&d.enable(1),A.instancingMorph&&d.enable(2),A.matcap&&d.enable(3),A.envMap&&d.enable(4),A.normalMapObjectSpace&&d.enable(5),A.normalMapTangentSpace&&d.enable(6),A.clearcoat&&d.enable(7),A.iridescence&&d.enable(8),A.alphaTest&&d.enable(9),A.vertexColors&&d.enable(10),A.vertexAlphas&&d.enable(11),A.vertexUv1s&&d.enable(12),A.vertexUv2s&&d.enable(13),A.vertexUv3s&&d.enable(14),A.vertexTangents&&d.enable(15),A.anisotropy&&d.enable(16),A.alphaHash&&d.enable(17),A.batching&&d.enable(18),A.dispersion&&d.enable(19),A.batchingColor&&d.enable(20),A.gradientMap&&d.enable(21),A.packedNormalMap&&d.enable(22),A.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),A.numLightProbeGrids>0&&d.enable(22),A.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function B(T){const A=y[T.type];let G;if(A){const V=ki[A];G=vM.clone(V.uniforms)}else G=T.uniforms;return G}function C(T,A){let G=v.get(A);return G!==void 0?++G.usedTimes:(G=new XA(s,A,T,l),h.push(G),v.set(A,G)),G}function O(T){if(--T.usedTimes===0){const A=h.indexOf(T);h[A]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function D(T){p.remove(T)}function z(){p.dispose()}return{getParameters:L,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:O,releaseShaderCache:D,programs:h,dispose:z}}function KA(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function QA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Q_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function J_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,E,L,M,S){let P=s[e];return P===void 0?(P={id:g.id,object:g,geometry:y,material:E,materialVariant:d(g),groupOrder:L,renderOrder:g.renderOrder,z:M,group:S},s[e]=P):(P.id=g.id,P.object=g,P.geometry=y,P.material=E,P.materialVariant=d(g),P.groupOrder=L,P.renderOrder=g.renderOrder,P.z=M,P.group=S),e++,P}function m(g,y,E,L,M,S){const P=p(g,y,E,L,M,S);E.transmission>0?r.push(P):E.transparent===!0?l.push(P):i.push(P)}function h(g,y,E,L,M,S){const P=p(g,y,E,L,M,S);E.transmission>0?r.unshift(P):E.transparent===!0?l.unshift(P):i.unshift(P)}function v(g,y,E){i.length>1&&i.sort(g||QA),r.length>1&&r.sort(y||Q_),l.length>1&&l.sort(y||Q_),E&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,y=s.length;g<y;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:x,sort:v}}function JA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new J_,s.set(r,[d])):l>=c.length?(d=new J_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function $A(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new bt};break;case"SpotLight":i={position:new te,direction:new te,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=i,i}}}function e2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let t2=0;function n2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i2(s){const e=new $A,i=e2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const l=new te,c=new fn,d=new fn;function p(h){let v=0,x=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,E=0,L=0,M=0,S=0,P=0,B=0,C=0,O=0,D=0,z=0;h.sort(n2);for(let A=0,G=h.length;A<G;A++){const V=h[A],Z=V.color,ue=V.intensity,se=V.distance;let K=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Fr?K=V.shadow.map.texture:K=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Z.r*ue,x+=Z.g*ue,g+=Z.b*ue;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],ue);z++}else if(V.isDirectionalLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const k=V.shadow,ee=i.get(V);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=K,r.directionalShadowMatrix[y]=V.shadow.matrix,P++}r.directional[y]=F,y++}else if(V.isSpotLight){const F=e.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(Z).multiplyScalar(ue),F.distance=se,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[L]=F;const k=V.shadow;if(V.map&&(r.spotLightMap[O]=V.map,O++,k.updateMatrices(V),V.castShadow&&D++),r.spotLightMatrix[L]=k.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,r.spotShadow[L]=ee,r.spotShadowMap[L]=K,C++}L++}else if(V.isRectAreaLight){const F=e.get(V);F.color.copy(Z).multiplyScalar(ue),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=F,M++}else if(V.isPointLight){const F=e.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const k=V.shadow,ee=i.get(V);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,ee.shadowCameraNear=k.camera.near,ee.shadowCameraFar=k.camera.far,r.pointShadow[E]=ee,r.pointShadowMap[E]=K,r.pointShadowMatrix[E]=V.shadow.matrix,B++}r.point[E]=F,E++}else if(V.isHemisphereLight){const F=e.get(V);F.skyColor.copy(V.color).multiplyScalar(ue),F.groundColor.copy(V.groundColor).multiplyScalar(ue),r.hemi[S]=F,S++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==L||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==P||T.numPointShadows!==B||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=L,r.rectArea.length=M,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=C+O-D,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=z,T.directionalLength=y,T.pointLength=E,T.spotLength=L,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=P,T.numPointShadows=B,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=z,r.version=t2++)}function m(h,v){let x=0,g=0,y=0,E=0,L=0;const M=v.matrixWorldInverse;for(let S=0,P=h.length;S<P;S++){const B=h[S];if(B.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),x++}else if(B.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(B.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),d.identity(),c.copy(B.matrixWorld),c.premultiply(M),d.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),E++}else if(B.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),g++}else if(B.isHemisphereLight){const C=r.hemi[L];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(M),L++}}}return{setup:p,setupView:m,state:r}}function $_(s){const e=new i2(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:v,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function a2(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new $_(s),e.set(l,[p])):c>=d.length?(p=new $_(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
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
}`,o2=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],l2=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],ev=new fn,ko=new te,qd=new te;function c2(s,e,i){let r=new Dv;const l=new Et,c=new Et,d=new sn,p=new MM,m=new bM,h={},v=i.maxTextureSize,x={[or]:jn,[jn]:or,[Sa]:Sa},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:r2,fragmentShader:s2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new ci;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Li(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let S=this.type;this.render=function(D,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===f1&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hc);const A=s.getRenderTarget(),G=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ma),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ue=S!==this.type;ue&&z.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(K=>K.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,K=D.length;se<K;se++){const F=D[se],k=F.shadow;if(k===void 0){nt("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const ee=k.getFrameExtents();l.multiply(ee),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ee.x),l.x=c.x*ee.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ee.y),l.y=c.y*ee.y,k.mapSize.y=c.y));const he=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=he,k.map===null||ue===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Xo){if(F.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yi(l.x,l.y,{format:Fr,type:Ea,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new Fs(l.x,l.y,Xi),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=Ta,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn}else F.isPointLight?(k.map=new Hv(l.x),k.map.depthTexture=new gM(l.x,ji)):(k.map=new Yi(l.x,l.y),k.map.depthTexture=new Fs(l.x,l.y,ji)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=Ta,this.type===Hc?(k.map.depthTexture.compareFunction=he?Qh:Kh,k.map.depthTexture.minFilter=Pn,k.map.depthTexture.magFilter=Pn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn);k.camera.updateProjectionMatrix()}const de=k.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<de;U++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,U),s.clear();else{U===0&&(s.setRenderTarget(k.map),s.clear());const W=k.getViewport(U);d.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),Z.viewport(d)}if(F.isPointLight){const W=k.camera,xe=k.matrix,Ee=F.distance||W.far;Ee!==W.far&&(W.far=Ee,W.updateProjectionMatrix()),ko.setFromMatrixPosition(F.matrixWorld),W.position.copy(ko),qd.copy(W.position),qd.add(o2[U]),W.up.copy(l2[U]),W.lookAt(qd),W.updateMatrixWorld(),xe.makeTranslation(-ko.x,-ko.y,-ko.z),ev.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ev,W.coordinateSystem,W.reversedDepth)}else k.updateMatrices(F);r=k.getFrustum(),C(z,T,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Xo&&P(k,T),k.needsUpdate=!1}S=this.type,M.needsUpdate=!1,s.setRenderTarget(A,G,V)};function P(D,z){const T=e.update(L);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Yi(l.x,l.y,{format:Fr,type:Ea})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(z,null,T,g,L,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(z,null,T,y,L,null)}function B(D,z,T,A){let G=null;const V=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)G=V;else if(G=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=G.uuid,ue=z.uuid;let se=h[Z];se===void 0&&(se={},h[Z]=se);let K=se[ue];K===void 0&&(K=G.clone(),se[ue]=K,z.addEventListener("dispose",O)),G=K}if(G.visible=z.visible,G.wireframe=z.wireframe,A===Xo?G.side=z.shadowSide!==null?z.shadowSide:z.side:G.side=z.shadowSide!==null?z.shadowSide:x[z.side],G.alphaMap=z.alphaMap,G.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,G.map=z.map,G.clipShadows=z.clipShadows,G.clippingPlanes=z.clippingPlanes,G.clipIntersection=z.clipIntersection,G.displacementMap=z.displacementMap,G.displacementScale=z.displacementScale,G.displacementBias=z.displacementBias,G.wireframeLinewidth=z.wireframeLinewidth,G.linewidth=z.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const Z=s.properties.get(G);Z.light=T}return G}function C(D,z,T,A,G){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&G===Xo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ue=e.update(D),se=D.material;if(Array.isArray(se)){const K=ue.groups;for(let F=0,k=K.length;F<k;F++){const ee=K[F],he=se[ee.materialIndex];if(he&&he.visible){const de=B(D,he,A,G);D.onBeforeShadow(s,D,z,T,ue,de,ee),s.renderBufferDirect(T,null,ue,de,D,ee),D.onAfterShadow(s,D,z,T,ue,de,ee)}}}else if(se.visible){const K=B(D,se,A,G);D.onBeforeShadow(s,D,z,T,ue,K,null),s.renderBufferDirect(T,null,ue,K,D,null),D.onAfterShadow(s,D,z,T,ue,K,null)}}const Z=D.children;for(let ue=0,se=Z.length;ue<se;ue++)C(Z[ue],z,T,A,G)}function O(D){D.target.removeEventListener("dispose",O);for(const T in h){const A=h[T],G=D.target.uuid;G in A&&(A[G].dispose(),delete A[G])}}}function u2(s,e){function i(){let q=!1;const Re=new sn;let ve=null;const Ne=new sn(0,0,0,0);return{setMask:function(Be){ve!==Be&&!q&&(s.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){q=Be},setClear:function(Be,Te,qe,Ve,Zt){Zt===!0&&(Be*=Ve,Te*=Ve,qe*=Ve),Re.set(Be,Te,qe,Ve),Ne.equals(Re)===!1&&(s.clearColor(Be,Te,qe,Ve),Ne.copy(Re))},reset:function(){q=!1,ve=null,Ne.set(-1,0,0,0)}}}function r(){let q=!1,Re=!1,ve=null,Ne=null,Be=null;return{setReversed:function(Te){if(Re!==Te){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=Te;const Ve=Be;Be=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(Te){Te?be(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(Te){ve!==Te&&!q&&(s.depthMask(Te),ve=Te)},setFunc:function(Te){if(Re&&(Te=X1[Te]),Ne!==Te){switch(Te){case Kd:s.depthFunc(s.NEVER);break;case Qd:s.depthFunc(s.ALWAYS);break;case Jd:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case $d:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Te}},setLocked:function(Te){q=Te},setClear:function(Te){Be!==Te&&(Be=Te,Re&&(Te=1-Te),s.clearDepth(Te))},reset:function(){q=!1,ve=null,Ne=null,Be=null,Re=!1}}}function l(){let q=!1,Re=null,ve=null,Ne=null,Be=null,Te=null,qe=null,Ve=null,Zt=null;return{setTest:function(Ut){q||(Ut?be(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(Ut){Re!==Ut&&!q&&(s.stencilMask(Ut),Re=Ut)},setFunc:function(Ut,Kn,Qn){(ve!==Ut||Ne!==Kn||Be!==Qn)&&(s.stencilFunc(Ut,Kn,Qn),ve=Ut,Ne=Kn,Be=Qn)},setOp:function(Ut,Kn,Qn){(Te!==Ut||qe!==Kn||Ve!==Qn)&&(s.stencilOp(Ut,Kn,Qn),Te=Ut,qe=Kn,Ve=Qn)},setLocked:function(Ut){q=Ut},setClear:function(Ut){Zt!==Ut&&(s.clearStencil(Ut),Zt=Ut)},reset:function(){q=!1,Re=null,ve=null,Ne=null,Be=null,Te=null,qe=null,Ve=null,Zt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},x={},g={},y=new WeakMap,E=[],L=null,M=!1,S=null,P=null,B=null,C=null,O=null,D=null,z=null,T=new bt(0,0,0),A=0,G=!1,V=null,Z=null,ue=null,se=null,K=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const he=s.getParameter(s.VERSION);he.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(he)[1]),k=ee>=1):he.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),k=ee>=2);let de=null,U={};const W=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Ee=new sn().fromArray(W),Ae=new sn().fromArray(xe);function $(q,Re,ve,Ne){const Be=new Uint8Array(4),Te=s.createTexture();s.bindTexture(q,Te),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ve;qe++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Re+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Te}const ye={};ye[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),be(s.DEPTH_TEST),d.setFunc(Bs),$t(!1),en(n_),be(s.CULL_FACE),xt(Ma);function be(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function He(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function tt(q,Re){return g[q]!==Re?(s.bindFramebuffer(q,Re),g[q]=Re,q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ke(q,Re){let ve=E,Ne=!1;if(q){ve=y.get(Re),ve===void 0&&(ve=[],y.set(Re,ve));const Be=q.textures;if(ve.length!==Be.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,qe=Be.length;Te<qe;Te++)ve[Te]=s.COLOR_ATTACHMENT0+Te;ve.length=Be.length,Ne=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(ve)}function qt(q){return L!==q?(s.useProgram(q),L=q,!0):!1}const ut={[Lr]:s.FUNC_ADD,[h1]:s.FUNC_SUBTRACT,[p1]:s.FUNC_REVERSE_SUBTRACT};ut[m1]=s.MIN,ut[g1]=s.MAX;const vt={[_1]:s.ZERO,[v1]:s.ONE,[x1]:s.SRC_COLOR,[jd]:s.SRC_ALPHA,[T1]:s.SRC_ALPHA_SATURATE,[b1]:s.DST_COLOR,[y1]:s.DST_ALPHA,[S1]:s.ONE_MINUS_SRC_COLOR,[Zd]:s.ONE_MINUS_SRC_ALPHA,[E1]:s.ONE_MINUS_DST_COLOR,[M1]:s.ONE_MINUS_DST_ALPHA,[A1]:s.CONSTANT_COLOR,[w1]:s.ONE_MINUS_CONSTANT_COLOR,[R1]:s.CONSTANT_ALPHA,[C1]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(q,Re,ve,Ne,Be,Te,qe,Ve,Zt,Ut){if(q===Ma){M===!0&&(He(s.BLEND),M=!1);return}if(M===!1&&(be(s.BLEND),M=!0),q!==d1){if(q!==S||Ut!==G){if((P!==Lr||O!==Lr)&&(s.blendEquation(s.FUNC_ADD),P=Lr,O=Lr),Ut)switch(q){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yd:s.blendFunc(s.ONE,s.ONE);break;case i_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case a_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",q);break}else switch(q){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case i_:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a_:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",q);break}B=null,C=null,D=null,z=null,T.set(0,0,0),A=0,S=q,G=Ut}return}Be=Be||Re,Te=Te||ve,qe=qe||Ne,(Re!==P||Be!==O)&&(s.blendEquationSeparate(ut[Re],ut[Be]),P=Re,O=Be),(ve!==B||Ne!==C||Te!==D||qe!==z)&&(s.blendFuncSeparate(vt[ve],vt[Ne],vt[Te],vt[qe]),B=ve,C=Ne,D=Te,z=qe),(Ve.equals(T)===!1||Zt!==A)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Zt),T.copy(Ve),A=Zt),S=q,G=!1}function dt(q,Re){q.side===Sa?He(s.CULL_FACE):be(s.CULL_FACE);let ve=q.side===jn;Re&&(ve=!ve),$t(ve),q.blending===Os&&q.transparent===!1?xt(Ma):xt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ne=q.stencilWrite;p.setTest(Ne),Ne&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ln(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(q){V!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),V=q)}function en(q){q!==c1?(be(s.CULL_FACE),q!==Z&&(q===n_?s.cullFace(s.BACK):q===u1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),Z=q}function tn(q){q!==ue&&(k&&s.lineWidth(q),ue=q)}function ln(q,Re,ve){q?(be(s.POLYGON_OFFSET_FILL),(se!==Re||K!==ve)&&(se=Re,K=ve,d.getReversed()&&(Re=-Re),s.polygonOffset(Re,ve))):He(s.POLYGON_OFFSET_FILL)}function Wt(q){q?be(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function nn(q){q===void 0&&(q=s.TEXTURE0+F-1),de!==q&&(s.activeTexture(q),de=q)}function j(q,Re,ve){ve===void 0&&(de===null?ve=s.TEXTURE0+F-1:ve=de);let Ne=U[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},U[ve]=Ne),(Ne.type!==q||Ne.texture!==Re)&&(de!==ve&&(s.activeTexture(ve),de=ve),s.bindTexture(q,Re||ye[q]),Ne.type=q,Ne.texture=Re)}function Ft(){const q=U[de];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function b(){try{s.texSubImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function J(){try{s.texSubImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function we(){try{s.texStorage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function De(){try{s.texStorage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function pe(){try{s.texImage2D(...arguments)}catch(q){Tt("WebGLState:",q)}}function ge(){try{s.texImage3D(...arguments)}catch(q){Tt("WebGLState:",q)}}function Ce(q){return x[q]!==void 0?x[q]:s.getParameter(q)}function ze(q,Re){x[q]!==Re&&(s.pixelStorei(q,Re),x[q]=Re)}function Oe(q){Ee.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Ee.copy(q))}function Ue(q){Ae.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Ae.copy(q))}function Ze(q,Re){let ve=h.get(Re);ve===void 0&&(ve=new WeakMap,h.set(Re,ve));let Ne=ve.get(q);Ne===void 0&&(Ne=s.getUniformBlockIndex(Re,q.name),ve.set(q,Ne))}function Qe(q,Re){const Ne=h.get(Re).get(q);m.get(Re)!==Ne&&(s.uniformBlockBinding(Re,Ne,q.__bindingPointIndex),m.set(Re,Ne))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},de=null,U={},g={},y=new WeakMap,E=[],L=null,M=!1,S=null,P=null,B=null,C=null,O=null,D=null,z=null,T=new bt(0,0,0),A=0,G=!1,V=null,Z=null,ue=null,se=null,K=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:be,disable:He,bindFramebuffer:tt,drawBuffers:Ke,useProgram:qt,setBlending:xt,setMaterial:dt,setFlipSided:$t,setCullFace:en,setLineWidth:tn,setPolygonOffset:ln,setScissorTest:Wt,activeTexture:nn,bindTexture:j,unbindTexture:Ft,compressedTexImage2D:Ct,compressedTexImage3D:I,texImage2D:pe,texImage3D:ge,pixelStorei:ze,getParameter:Ce,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:we,texStorage3D:De,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Oe,viewport:Ue,reset:it}}function f2(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,v=new WeakMap,x=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(I,b){return E?new OffscreenCanvas(I,b):Qc("canvas")}function M(I,b,J){let oe=1;const me=Ct(I);if((me.width>J||me.height>J)&&(oe=J/Math.max(me.width,me.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const we=Math.floor(oe*me.width),De=Math.floor(oe*me.height);g===void 0&&(g=L(we,De));const pe=b?L(we,De):g;return pe.width=we,pe.height=De,pe.getContext("2d").drawImage(I,0,0,we,De),nt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+we+"x"+De+")."),pe}else return"data"in I&&nt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function S(I){return I.generateMipmaps}function P(I){s.generateMipmap(I)}function B(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(I,b,J,oe,me,we=!1){if(I!==null){if(s[I]!==void 0)return s[I];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let De;oe&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===s.RED&&(J===s.FLOAT&&(pe=s.R32F),J===s.HALF_FLOAT&&(pe=s.R16F),J===s.UNSIGNED_BYTE&&(pe=s.R8),J===s.UNSIGNED_SHORT&&De&&(pe=De.R16_EXT),J===s.SHORT&&De&&(pe=De.R16_SNORM_EXT)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.R8UI),J===s.UNSIGNED_SHORT&&(pe=s.R16UI),J===s.UNSIGNED_INT&&(pe=s.R32UI),J===s.BYTE&&(pe=s.R8I),J===s.SHORT&&(pe=s.R16I),J===s.INT&&(pe=s.R32I)),b===s.RG&&(J===s.FLOAT&&(pe=s.RG32F),J===s.HALF_FLOAT&&(pe=s.RG16F),J===s.UNSIGNED_BYTE&&(pe=s.RG8),J===s.UNSIGNED_SHORT&&De&&(pe=De.RG16_EXT),J===s.SHORT&&De&&(pe=De.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.RG8UI),J===s.UNSIGNED_SHORT&&(pe=s.RG16UI),J===s.UNSIGNED_INT&&(pe=s.RG32UI),J===s.BYTE&&(pe=s.RG8I),J===s.SHORT&&(pe=s.RG16I),J===s.INT&&(pe=s.RG32I)),b===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),J===s.UNSIGNED_INT&&(pe=s.RGB32UI),J===s.BYTE&&(pe=s.RGB8I),J===s.SHORT&&(pe=s.RGB16I),J===s.INT&&(pe=s.RGB32I)),b===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),J===s.UNSIGNED_INT&&(pe=s.RGBA32UI),J===s.BYTE&&(pe=s.RGBA8I),J===s.SHORT&&(pe=s.RGBA16I),J===s.INT&&(pe=s.RGBA32I)),b===s.RGB&&(J===s.UNSIGNED_SHORT&&De&&(pe=De.RGB16_EXT),J===s.SHORT&&De&&(pe=De.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),b===s.RGBA){const ge=we?Zc:yt.getTransfer(me);J===s.FLOAT&&(pe=s.RGBA32F),J===s.HALF_FLOAT&&(pe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(pe=ge===zt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&De&&(pe=De.RGBA16_EXT),J===s.SHORT&&De&&(pe=De.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(I,b){let J;return I?b===null||b===ji||b===Ko?J=s.DEPTH24_STENCIL8:b===Xi?J=s.DEPTH32F_STENCIL8:b===Zo&&(J=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===Ko?J=s.DEPTH_COMPONENT24:b===Xi?J=s.DEPTH_COMPONENT32F:b===Zo&&(J=s.DEPTH_COMPONENT16),J}function D(I,b){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function z(I){const b=I.target;b.removeEventListener("dispose",z),A(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&x.delete(b)}function T(I){const b=I.target;b.removeEventListener("dispose",T),V(b)}function A(I){const b=r.get(I);if(b.__webglInit===void 0)return;const J=I.source,oe=y.get(J);if(oe){const me=oe[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(I),Object.keys(oe).length===0&&y.delete(J)}r.remove(I)}function G(I){const b=r.get(I);s.deleteTexture(b.__webglTexture);const J=I.source,oe=y.get(J);delete oe[b.__cacheKey],d.memory.textures--}function V(I){const b=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let me=0;me<b.__webglFramebuffer[oe].length;me++)s.deleteFramebuffer(b.__webglFramebuffer[oe][me]);else s.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)s.deleteFramebuffer(b.__webglFramebuffer[oe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=I.textures;for(let oe=0,me=J.length;oe<me;oe++){const we=r.get(J[oe]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),d.memory.textures--),r.remove(J[oe])}r.remove(I)}let Z=0;function ue(){Z=0}function se(){return Z}function K(I){Z=I}function F(){const I=Z;return I>=l.maxTextures&&nt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),Z+=1,I}function k(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ee(I,b){const J=r.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const oe=I.image;if(oe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(J,I,b);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function he(I,b){const J=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){He(J,I,b);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function de(I,b){const J=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){He(J,I,b);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function U(I,b){const J=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){tt(J,I,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const W={[ih]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},xe={[Nn]:s.NEAREST,[U1]:s.NEAREST_MIPMAP_NEAREST,[pc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[gd]:s.LINEAR_MIPMAP_NEAREST,[Ir]:s.LINEAR_MIPMAP_LINEAR},Ee={[P1]:s.NEVER,[H1]:s.ALWAYS,[I1]:s.LESS,[Kh]:s.LEQUAL,[B1]:s.EQUAL,[Qh]:s.GEQUAL,[z1]:s.GREATER,[F1]:s.NOTEQUAL};function Ae(I,b){if(b.type===Xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===gd||b.magFilter===pc||b.magFilter===Ir||b.minFilter===Pn||b.minFilter===gd||b.minFilter===pc||b.minFilter===Ir)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,W[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,W[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,W[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,xe[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==pc&&b.minFilter!==Ir||b.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function $(I,b){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",z));const oe=b.source;let me=y.get(oe);me===void 0&&(me={},y.set(oe,me));const we=k(b);if(we!==I.__cacheKey){me[we]===void 0&&(me[we]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,J=!0),me[we].usedTimes++;const De=me[I.__cacheKey];De!==void 0&&(me[I.__cacheKey].usedTimes--,De.usedTimes===0&&G(b)),I.__cacheKey=we,I.__webglTexture=me[we].texture}return J}function ye(I,b,J){return Math.floor(Math.floor(I/J)/b)}function be(I,b,J,oe){const we=I.updateRanges;if(we.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,J,oe,b.data);else{we.sort((ze,Oe)=>ze.start-Oe.start);let De=0;for(let ze=1;ze<we.length;ze++){const Oe=we[De],Ue=we[ze],Ze=Oe.start+Oe.count,Qe=ye(Ue.start,b.width,4),it=ye(Oe.start,b.width,4);Ue.start<=Ze+1&&Qe===it&&ye(Ue.start+Ue.count-1,b.width,4)===Qe?Oe.count=Math.max(Oe.count,Ue.start+Ue.count-Oe.start):(++De,we[De]=Ue)}we.length=De+1;const pe=i.getParameter(s.UNPACK_ROW_LENGTH),ge=i.getParameter(s.UNPACK_SKIP_PIXELS),Ce=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ze=0,Oe=we.length;ze<Oe;ze++){const Ue=we[ze],Ze=Math.floor(Ue.start/4),Qe=Math.ceil(Ue.count/4),it=Ze%b.width,q=Math.floor(Ze/b.width),Re=Qe,ve=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,it),i.pixelStorei(s.UNPACK_SKIP_ROWS,q),i.texSubImage2D(s.TEXTURE_2D,0,it,q,Re,ve,J,oe,b.data)}I.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,pe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function He(I,b,J){let oe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=s.TEXTURE_3D);const me=$(I,b),we=b.source;i.bindTexture(oe,I.__webglTexture,s.TEXTURE0+J);const De=r.get(we);if(we.version!==De.__version||me===!0){if(i.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ve=yt.getPrimaries(yt.workingColorSpace),Ne=b.colorSpace===rr?null:yt.getPrimaries(b.colorSpace),Be=b.colorSpace===rr||ve===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ge=M(b.image,!1,l.maxTextureSize);ge=Ft(b,ge);const Ce=c.convert(b.format,b.colorSpace),ze=c.convert(b.type);let Oe=C(b.internalFormat,Ce,ze,b.normalized,b.colorSpace,b.isVideoTexture);Ae(oe,b);let Ue;const Ze=b.mipmaps,Qe=b.isVideoTexture!==!0,it=De.__version===void 0||me===!0,q=we.dataReady,Re=D(b,ge);if(b.isDepthTexture)Oe=O(b.format===Br,b.type),it&&(Qe?i.texStorage2D(s.TEXTURE_2D,1,Oe,ge.width,ge.height):i.texImage2D(s.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ce,ze,null));else if(b.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,Ze[0].width,Ze[0].height);for(let ve=0,Ne=Ze.length;ve<Ne;ve++)Ue=Ze[ve],Qe?q&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,ze,Ue.data):i.texImage2D(s.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ce,ze,Ue.data);b.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,ge.width,ge.height),q&&be(b,ge,Ce,ze)):i.texImage2D(s.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ce,ze,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Oe,Ze[0].width,Ze[0].height,ge.depth);for(let ve=0,Ne=Ze.length;ve<Ne;ve++)if(Ue=Ze[ve],b.format!==Ui)if(Ce!==null)if(Qe){if(q)if(b.layerUpdates.size>0){const Be=D_(Ue.width,Ue.height,b.format,b.type);for(const Te of b.layerUpdates){const qe=Ue.data.subarray(Te*Be/Ue.data.BYTES_PER_ELEMENT,(Te+1)*Be/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Te,Ue.width,Ue.height,1,Ce,qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,ge.depth,Ce,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Oe,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?q&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,ge.depth,Ce,ze,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ve,Oe,Ue.width,Ue.height,ge.depth,0,Ce,ze,Ue.data)}else{Qe&&it&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,Ze[0].width,Ze[0].height);for(let ve=0,Ne=Ze.length;ve<Ne;ve++)Ue=Ze[ve],b.format!==Ui?Ce!==null?Qe?q&&i.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?q&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,ze,Ue.data):i.texImage2D(s.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ce,ze,Ue.data)}else if(b.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Oe,ge.width,ge.height,ge.depth),q)if(b.layerUpdates.size>0){const ve=D_(ge.width,ge.height,b.format,b.type);for(const Ne of b.layerUpdates){const Be=ge.data.subarray(Ne*ve/ge.data.BYTES_PER_ELEMENT,(Ne+1)*ve/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,ge.width,ge.height,1,Ce,ze,Be)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,ze,ge.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Ce,ze,ge.data);else if(b.isData3DTexture)Qe?(it&&i.texStorage3D(s.TEXTURE_3D,Re,Oe,ge.width,ge.height,ge.depth),q&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,ze,ge.data)):i.texImage3D(s.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Ce,ze,ge.data);else if(b.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(s.TEXTURE_2D,Re,Oe,ge.width,ge.height);else{let ve=ge.width,Ne=ge.height;for(let Be=0;Be<Re;Be++)i.texImage2D(s.TEXTURE_2D,Be,Oe,ve,Ne,0,Ce,ze,null),ve>>=1,Ne>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ge.parentNode!==ve){ve.appendChild(ge),x.add(b),ve.onpaint=Ne=>{const Be=Ne.changedElements;for(const Te of x)Be.includes(Te.image)&&(Te.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Be=s.RGBA,Te=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,Te,qe,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const ve=Ct(Ze[0]);i.texStorage2D(s.TEXTURE_2D,Re,Oe,ve.width,ve.height)}for(let ve=0,Ne=Ze.length;ve<Ne;ve++)Ue=Ze[ve],Qe?q&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce,ze,Ue):i.texImage2D(s.TEXTURE_2D,ve,Oe,Ce,ze,Ue);b.generateMipmaps=!1}else if(Qe){if(it){const ve=Ct(ge);i.texStorage2D(s.TEXTURE_2D,Re,Oe,ve.width,ve.height)}q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,ze,ge)}else i.texImage2D(s.TEXTURE_2D,0,Oe,Ce,ze,ge);S(b)&&P(oe),De.__version=we.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function tt(I,b,J){if(b.image.length!==6)return;const oe=$(I,b),me=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+J);const we=r.get(me);if(me.version!==we.__version||oe===!0){i.activeTexture(s.TEXTURE0+J);const De=yt.getPrimaries(yt.workingColorSpace),pe=b.colorSpace===rr?null:yt.getPrimaries(b.colorSpace),ge=b.colorSpace===rr||De===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,Oe=[];for(let Te=0;Te<6;Te++)!Ce&&!ze?Oe[Te]=M(b.image[Te],!0,l.maxCubemapSize):Oe[Te]=ze?b.image[Te].image:b.image[Te],Oe[Te]=Ft(b,Oe[Te]);const Ue=Oe[0],Ze=c.convert(b.format,b.colorSpace),Qe=c.convert(b.type),it=C(b.internalFormat,Ze,Qe,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,Re=we.__version===void 0||oe===!0,ve=me.dataReady;let Ne=D(b,Ue);Ae(s.TEXTURE_CUBE_MAP,b);let Be;if(Ce){q&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,it,Ue.width,Ue.height);for(let Te=0;Te<6;Te++){Be=Oe[Te].mipmaps;for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];b.format!==Ui?Ze!==null?q?ve&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Be=b.mipmaps,q&&Re){Be.length>0&&Ne++;const Te=Ct(Oe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,it,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ze){q?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Oe[Te].width,Oe[Te].height,Ze,Qe,Oe[Te].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Oe[Te].width,Oe[Te].height,0,Ze,Qe,Oe[Te].data);for(let qe=0;qe<Be.length;qe++){const Zt=Be[qe].image[Te].image;q?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,0,0,Zt.width,Zt.height,Ze,Qe,Zt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,it,Zt.width,Zt.height,0,Ze,Qe,Zt.data)}}else{q?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ze,Qe,Oe[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Ze,Qe,Oe[Te]);for(let qe=0;qe<Be.length;qe++){const Ve=Be[qe];q?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,0,0,Ze,Qe,Ve.image[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe+1,it,Ze,Qe,Ve.image[Te])}}}S(b)&&P(s.TEXTURE_CUBE_MAP),we.__version=me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ke(I,b,J,oe,me,we){const De=c.convert(J.format,J.colorSpace),pe=c.convert(J.type),ge=C(J.internalFormat,De,pe,J.normalized,J.colorSpace),Ce=r.get(b),ze=r.get(J);if(ze.__renderTarget=b,!Ce.__hasExternalTextures){const Oe=Math.max(1,b.width>>we),Ue=Math.max(1,b.height>>we);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?i.texImage3D(me,we,ge,Oe,Ue,b.depth,0,De,pe,null):i.texImage2D(me,we,ge,Oe,Ue,0,De,pe,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),nn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,me,ze.__webglTexture,0,Wt(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,me,ze.__webglTexture,we),i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(I,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const oe=b.depthTexture,me=oe&&oe.isDepthTexture?oe.type:null,we=O(b.stencilBuffer,me),De=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nn(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(b),we,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(b),we,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,we,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,I)}else{const oe=b.textures;for(let me=0;me<oe.length;me++){const we=oe[me],De=c.convert(we.format,we.colorSpace),pe=c.convert(we.type),ge=C(we.internalFormat,De,pe,we.normalized,we.colorSpace);nn(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(b),ge,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(b),ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(I,b,J){const oe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(b.depthTexture);if(me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe){if(me.__webglInit===void 0&&(me.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),ze=c.convert(b.depthTexture.type);let Oe;b.depthTexture.format===Ta?Oe=s.DEPTH_COMPONENT24:b.depthTexture.format===Br&&(Oe=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Oe,b.width,b.height,0,Ce,ze,null)}}else ee(b.depthTexture,0);const we=me.__webglTexture,De=Wt(b),pe=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,ge=b.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)nn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,we,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,we,0);else if(b.depthTexture.format===Br)nn(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,we,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(I){const b=r.get(I),J=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const oe=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",me)};oe.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=oe}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let oe=0;oe<6;oe++)ut(b.__webglFramebuffer[oe],I,oe);else{const oe=I.texture.mipmaps;oe&&oe.length>0?ut(b.__webglFramebuffer[0],I,0):ut(b.__webglFramebuffer,I,0)}else if(J){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=s.createRenderbuffer(),qt(b.__webglDepthbuffer[oe],I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,we)}}else{const oe=I.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),qt(b.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,we)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(I,b,J){const oe=r.get(I);b!==void 0&&Ke(oe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&vt(I)}function dt(I){const b=I.texture,J=r.get(I),oe=r.get(b);I.addEventListener("dispose",T);const me=I.textures,we=I.isWebGLCubeRenderTarget===!0,De=me.length>1;if(De||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=b.version,d.memory.textures++),we){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let ge=0;ge<b.mipmaps.length;ge++)J.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else J.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)J.__webglFramebuffer[pe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(De)for(let pe=0,ge=me.length;pe<ge;pe++){const Ce=r.get(me[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&nn(I)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<me.length;pe++){const ge=me[pe];J.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Ce=c.convert(ge.format,ge.colorSpace),ze=c.convert(ge.type),Oe=C(ge.internalFormat,Ce,ze,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),Ue=Wt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Oe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(J.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){i.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Ke(J.__webglFramebuffer[pe][ge],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Ke(J.__webglFramebuffer[pe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(b)&&P(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let pe=0,ge=me.length;pe<ge;pe++){const Ce=me[pe],ze=r.get(Ce);let Oe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Oe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ze.__webglTexture),Ae(Oe,Ce),Ke(J.__webglFramebuffer,I,Ce,s.COLOR_ATTACHMENT0+pe,Oe,0),S(Ce)&&P(Oe)}i.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(pe,oe.__webglTexture),Ae(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Ke(J.__webglFramebuffer[ge],I,b,s.COLOR_ATTACHMENT0,pe,ge);else Ke(J.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,pe,0);S(b)&&P(pe),i.unbindTexture()}I.depthBuffer&&vt(I)}function $t(I){const b=I.textures;for(let J=0,oe=b.length;J<oe;J++){const me=b[J];if(S(me)){const we=B(I),De=r.get(me).__webglTexture;i.bindTexture(we,De),P(we),i.unbindTexture()}}}const en=[],tn=[];function ln(I){if(I.samples>0){if(nn(I)===!1){const b=I.textures,J=I.width,oe=I.height;let me=s.COLOR_BUFFER_BIT;const we=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(I),pe=b.length>1;if(pe)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const ge=I.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const ze=r.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ze,0)}s.blitFramebuffer(0,0,J,oe,0,0,J,oe,me,s.NEAREST),m===!0&&(en.length=0,tn.length=0,en.push(s.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(en.push(we),tn.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,en))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const ze=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,ze,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Wt(I){return Math.min(l.maxSamples,I.samples)}function nn(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(I){const b=d.render.frame;v.get(I)!==b&&(v.set(I,b),I.update())}function Ft(I,b){const J=I.colorSpace,oe=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==jc&&J!==rr&&(yt.getTransfer(J)===zt?(oe!==Ui||me!==yi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",J)),b}function Ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=ue,this.getTextureUnits=se,this.setTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=he,this.setTexture3D=de,this.setTextureCube=U,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function d2(s,e){function i(r,l=rr){let c;const d=yt.getTransfer(l);if(r===yi)return s.UNSIGNED_BYTE;if(r===Wh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Sv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===_v)return s.BYTE;if(r===vv)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Ea)return s.HALF_FLOAT;if(r===yv)return s.ALPHA;if(r===Mv)return s.RGB;if(r===Ui)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===bv)return s.RED;if(r===Yh)return s.RED_INTEGER;if(r===Fr)return s.RG;if(r===jh)return s.RG_INTEGER;if(r===Zh)return s.RGBA_INTEGER;if(r===Gc||r===Vc||r===kc||r===Xc)if(d===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===oh||r===lh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ch||r===uh||r===fh||r===dh||r===hh||r===qc||r===ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ch||r===uh)return d===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===fh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===dh)return c.COMPRESSED_R11_EAC;if(r===hh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return c.COMPRESSED_RG11_EAC;if(r===ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh||r===yh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===wh||r===Rh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===mh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ch||r===Nh||r===Dh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ch)return d===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uh||r===Lh||r===Yc||r===Oh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Uh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Lh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const h2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
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

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ov(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Zi({vertexShader:h2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends Gr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,x=null,g=null,y=null,E=null;const L=typeof XRWebGLBinding<"u",M=new m2,S={},P=i.getContextAttributes();let B=null,C=null;const O=[],D=[],z=new Et;let T=null;const A=new Si;A.viewport=new sn;const G=new Si;G.viewport=new sn;const V=[A,G],Z=new TM;let ue=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ye=O[$];return ye===void 0&&(ye=new Ed,O[$]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function($){let ye=O[$];return ye===void 0&&(ye=new Ed,O[$]=ye),ye.getGripSpace()},this.getHand=function($){let ye=O[$];return ye===void 0&&(ye=new Ed,O[$]=ye),ye.getHandSpace()};function K($){const ye=D.indexOf($.inputSource);if(ye===-1)return;const be=O[ye];be!==void 0&&(be.update($.inputSource,$.frame,h||d),be.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",k);for(let $=0;$<O.length;$++){const ye=D[$];ye!==null&&(D[$]=null,O[$].disconnect(ye))}ue=null,se=null,M.reset();for(const $ in S)delete S[$];e.setRenderTarget(B),y=null,g=null,x=null,l=null,C=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,r.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&L&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",F),l.addEventListener("inputsourceschange",k),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,tt=null;P.depth&&(tt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=P.stencil?Br:Ta,He=P.stencil?Ko:ji);const Ke={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Yi(g.textureWidth,g.textureHeight,{format:Ui,type:yi,depthTexture:new Fs(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Yi(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ae.setContext(l),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function k($){for(let ye=0;ye<$.removed.length;ye++){const be=$.removed[ye],He=D.indexOf(be);He>=0&&(D[He]=null,O[He].disconnect(be))}for(let ye=0;ye<$.added.length;ye++){const be=$.added[ye];let He=D.indexOf(be);if(He===-1){for(let Ke=0;Ke<O.length;Ke++)if(Ke>=D.length){D.push(be),He=Ke;break}else if(D[Ke]===null){D[Ke]=be,He=Ke;break}if(He===-1)break}const tt=O[He];tt&&tt.connect(be)}}const ee=new te,he=new te;function de($,ye,be){ee.setFromMatrixPosition(ye.matrixWorld),he.setFromMatrixPosition(be.matrixWorld);const He=ee.distanceTo(he),tt=ye.projectionMatrix.elements,Ke=be.projectionMatrix.elements,qt=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),vt=(tt[9]+1)/tt[5],xt=(tt[9]-1)/tt[5],dt=(tt[8]-1)/tt[0],$t=(Ke[8]+1)/Ke[0],en=qt*dt,tn=qt*$t,ln=He/(-dt+$t),Wt=ln*-dt;if(ye.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(ln),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),tt[10]===-1)$.projectionMatrix.copy(ye.projectionMatrix),$.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const nn=qt+ln,j=ut+ln,Ft=en-Wt,Ct=tn+(He-Wt),I=vt*ut/j*nn,b=xt*ut/j*nn;$.projectionMatrix.makePerspective(Ft,Ct,I,b,nn,j),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,ye){ye===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ye.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ye=$.near,be=$.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(be=M.depthFar)),Z.near=G.near=A.near=ye,Z.far=G.far=A.far=be,(ue!==Z.near||se!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ue=Z.near,se=Z.far),Z.layers.mask=$.layers.mask|6,A.layers.mask=Z.layers.mask&-5,G.layers.mask=Z.layers.mask&-3;const He=$.parent,tt=Z.cameras;U(Z,He);for(let Ke=0;Ke<tt.length;Ke++)U(tt[Ke],He);tt.length===2?de(Z,A,G):Z.projectionMatrix.copy(A.projectionMatrix),W($,Z,He)};function W($,ye,be){be===null?$.matrix.copy(ye.matrixWorld):($.matrix.copy(be.matrixWorld),$.matrix.invert(),$.matrix.multiply(ye.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ye.projectionMatrix),$.projectionMatrixInverse.copy(ye.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ph*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function($){return S[$]};let xe=null;function Ee($,ye){if(v=ye.getViewerPose(h||d),E=ye,v!==null){const be=v.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let He=!1;be.length!==Z.cameras.length&&(Z.cameras.length=0,He=!0);for(let ut=0;ut<be.length;ut++){const vt=be[ut];let xt=null;if(y!==null)xt=y.getViewport(vt);else{const $t=x.getViewSubImage(g,vt);xt=$t.viewport,ut===0&&(e.setRenderTargetTextures(C,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(C))}let dt=V[ut];dt===void 0&&(dt=new Si,dt.layers.enable(ut),dt.viewport=new sn,V[ut]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ut===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),He===!0&&Z.cameras.push(dt)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){x=r.getBinding();const ut=x.getDepthInformation(be[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(tt&&tt.includes("camera-access")&&L){e.state.unbindTexture(),x=r.getBinding();for(let ut=0;ut<be.length;ut++){const vt=be[ut].camera;if(vt){let xt=S[vt];xt||(xt=new Ov,S[vt]=xt);const dt=x.getCameraImage(vt);xt.sourceTexture=dt}}}}for(let be=0;be<O.length;be++){const He=D[be],tt=O[be];He!==null&&tt!==void 0&&tt.update(He,ye,h||d)}xe&&xe($,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ae=new zv;Ae.setAnimationLoop(Ee),this.setAnimationLoop=function($){xe=$},this.dispose=function(){}}}const _2=new fn,Wv=new rt;Wv.set(-1,0,0,0,1,0,0,0,1);function v2(s,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,Pv(s)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,P,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,C)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),L(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,P,B):S.isSpriteMaterial?h(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===jn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===jn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const P=e.get(S),B=P.envMap,C=P.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Wv),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,P,B){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*P,M.scale.value=B*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,P){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function L(M,S){const P=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function x2(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const D=O.program;r.uniformBlockBinding(C,D)}function h(C,O){let D=l[C.id];D===void 0&&(M(C),D=v(C),l[C.id]=D,C.addEventListener("dispose",P));const z=O.program;r.updateUBOMapping(C,z);const T=e.render.frame;c[C.id]!==T&&(g(C),c[C.id]=T)}function v(C){const O=x();C.__bindingPointIndex=O;const D=s.createBuffer(),z=C.__size,T=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,z,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,D),D}function x(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const O=l[C.id],D=C.uniforms,z=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let T=0,A=D.length;T<A;T++){const G=D[T];if(Array.isArray(G))for(let V=0,Z=G.length;V<Z;V++)y(G[V],T,V,z);else y(G,T,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,O,D,z){if(L(C,O,D,z)===!0){const T=C.__offset,A=C.value;if(Array.isArray(A)){let G=0;for(let V=0;V<A.length;V++){const Z=A[V],ue=S(Z);E(Z,C.__data,G),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(G+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(A,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,C.__data)}}function E(C,O,D){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,D)}function L(C,O,D,z){const T=C.value,A=O+"_"+D;if(z[A]===void 0)return typeof T=="number"||typeof T=="boolean"?z[A]=T:ArrayBuffer.isView(T)?z[A]=T.slice():z[A]=T.clone(),!0;{const G=z[A];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return z[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function M(C){const O=C.uniforms;let D=0;const z=16;for(let A=0,G=O.length;A<G;A++){const V=Array.isArray(O[A])?O[A]:[O[A]];for(let Z=0,ue=V.length;Z<ue;Z++){const se=V[Z],K=Array.isArray(se.value)?se.value:[se.value];for(let F=0,k=K.length;F<k;F++){const ee=K[F],he=S(ee),de=D%z,U=de%he.boundary,W=de+U;D+=U,W!==0&&z-W<he.storage&&(D+=z-W),se.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=D,D+=he.storage}}}const T=D%z;return T>0&&(D+=z-T),C.__size=D,C.__cache={},this}function S(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",C),O}function P(C){const O=C.target;O.removeEventListener("dispose",P);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function B(){for(const C in l)s.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:B}}const S2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function y2(){return Gi===null&&(Gi=new fM(S2,16,16,Fr,Ea),Gi.name="DFG_LUT",Gi.minFilter=Pn,Gi.magFilter=Pn,Gi.wrapS=ya,Gi.wrapT=ya,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class M2{constructor(e={}){const{canvas:i=V1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=yi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const L=y,M=new Set([Zh,jh,Yh]),S=new Set([yi,ji,Zo,Ko,Wh,qh]),P=new Uint32Array(4),B=new Int32Array(4),C=new te;let O=null,D=null;const z=[],T=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let V=!1,Z=null,ue=null,se=null,K=null;this._outputColorSpace=xi;let F=0,k=0,ee=null,he=-1,de=null;const U=new sn,W=new sn;let xe=null;const Ee=new bt(0);let Ae=0,$=i.width,ye=i.height,be=1,He=null,tt=null;const Ke=new sn(0,0,$,ye),qt=new sn(0,0,$,ye);let ut=!1;const vt=new Dv;let xt=!1,dt=!1;const $t=new fn,en=new te,tn=new sn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function nn(){return ee===null?be:1}let j=r;function Ft(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Kn,!1),j===null){const Y="webgl2";if(j=Ft(Y,w),j===null)throw Ft(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Tt("WebGLRenderer: "+w.message),w}let Ct,I,b,J,oe,me,we,De,pe,ge,Ce,ze,Oe,Ue,Ze,Qe,it,q,Re,ve,Ne,Be,Te;function qe(){Ct=new yT(j),Ct.init(),Ne=new d2(j,Ct),I=new hT(j,Ct,e,Ne),b=new u2(j,Ct),I.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),ue=j.createFramebuffer(),se=j.createFramebuffer(),K=j.createFramebuffer(),J=new ET(j),oe=new KA,me=new f2(j,Ct,b,oe,I,Ne,J),we=new ST(G),De=new RM(j),Be=new fT(j,De),pe=new MT(j,De,J,Be),ge=new AT(j,pe,De,Be,J),q=new TT(j,I,me),Ze=new pT(oe),Ce=new ZA(G,we,Ct,I,Be,Ze),ze=new v2(G,oe),Oe=new JA,Ue=new a2(Ct),it=new uT(G,we,b,ge,E,m),Qe=new c2(G,ge,I),Te=new x2(j,J,I,b),Re=new dT(j,Ct,J),ve=new bT(j,Ct,J),J.programs=Ce.programs,G.capabilities=I,G.extensions=Ct,G.properties=oe,G.renderLists=Oe,G.shadowMap=Qe,G.state=b,G.info=J}qe(),L!==yi&&(A=new RT(L,i.width,i.height,p,l,c));const Ve=new g2(G,j);this.xr=Ve,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=Ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(w){w!==void 0&&(be=w,this.setSize($,ye,!1))},this.getSize=function(w){return w.set($,ye)},this.setSize=function(w,Y,le=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,ye=Y,i.width=Math.floor(w*be),i.height=Math.floor(Y*be),le===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set($*be,ye*be).floor()},this.setDrawingBufferSize=function(w,Y,le){$=w,ye=Y,be=le,i.width=Math.floor(w*le),i.height=Math.floor(Y*le),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(L===yi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Ke)},this.setViewport=function(w,Y,le,ae){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,Y,le,ae),b.viewport(U.copy(Ke).multiplyScalar(be).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,Y,le,ae){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,Y,le,ae),b.scissor(W.copy(qt).multiplyScalar(be).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){b.setScissorTest(ut=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){tt=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,le=!0){let ae=0;if(w){let re=!1;if(ee!==null){const Pe=ee.texture.format;re=M.has(Pe)}if(re){const Pe=ee.texture.type,Ge=S.has(Pe),Le=it.getClearColor(),Xe=it.getClearAlpha(),ke=Le.r,Je=Le.g,st=Le.b;Ge?(P[0]=ke,P[1]=Je,P[2]=st,P[3]=Xe,j.clearBufferuiv(j.COLOR,0,P)):(B[0]=ke,B[1]=Je,B[2]=st,B[3]=Xe,j.clearBufferiv(j.COLOR,0,B))}else ae|=j.COLOR_BUFFER_BIT}Y&&(ae|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Kn,!1),it.dispose(),Oe.dispose(),Ue.dispose(),oe.dispose(),we.dispose(),ge.dispose(),Be.dispose(),Te.dispose(),Ce.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",dn),Ve.removeEventListener("sessionend",Tn),Hn.stop()};function Zt(w){w.preventDefault(),u_("WebGLRenderer: Context Lost."),V=!0}function Ut(){u_("WebGLRenderer: Context Restored."),V=!1;const w=J.autoReset,Y=Qe.enabled,le=Qe.autoUpdate,ae=Qe.needsUpdate,re=Qe.type;qe(),J.autoReset=w,Qe.enabled=Y,Qe.autoUpdate=le,Qe.needsUpdate=ae,Qe.type=re}function Kn(w){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qn(w){const Y=w.target;Y.removeEventListener("dispose",Qn),ks(Y)}function ks(w){Xs(w),oe.remove(w)}function Xs(w){const Y=oe.get(w).programs;Y!==void 0&&(Y.forEach(function(le){Ce.releaseProgram(le)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,le,ae,re,Pe){Y===null&&(Y=ln);const Ge=re.isMesh&&re.matrixWorld.determinantAffine()<0,Le=Ra(w,Y,le,ae,re);b.setMaterial(ae,Ge);let Xe=le.index,ke=1;if(ae.wireframe===!0){if(Xe=pe.getWireframeAttribute(le),Xe===void 0)return;ke=2}const Je=le.drawRange,st=le.attributes.position;let je=Je.start*ke,At=(Je.start+Je.count)*ke;Pe!==null&&(je=Math.max(je,Pe.start*ke),At=Math.min(At,(Pe.start+Pe.count)*ke)),Xe!==null?(je=Math.max(je,0),At=Math.min(At,Xe.count)):st!=null&&(je=Math.max(je,0),At=Math.min(At,st.count));const Kt=At-je;if(Kt<0||Kt===1/0)return;Be.setup(re,ae,Le,le,Xe);let kt,Lt=Re;if(Xe!==null&&(kt=De.get(Xe),Lt=ve,Lt.setIndex(kt)),re.isMesh)ae.wireframe===!0?(b.setLineWidth(ae.wireframeLinewidth*nn()),Lt.setMode(j.LINES)):Lt.setMode(j.TRIANGLES);else if(re.isLine){let Ot=ae.linewidth;Ot===void 0&&(Ot=1),b.setLineWidth(Ot*nn()),re.isLineSegments?Lt.setMode(j.LINES):re.isLineLoop?Lt.setMode(j.LINE_LOOP):Lt.setMode(j.LINE_STRIP)}else re.isPoints?Lt.setMode(j.POINTS):re.isSprite&&Lt.setMode(j.TRIANGLES);if(re.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Ot=re._multiDrawStarts,Fe=re._multiDrawCounts,Dn=re._multiDrawCount,ht=Xe?De.get(Xe).bytesPerElement:1,xn=oe.get(ae).currentProgram.getUniforms();for(let Jn=0;Jn<Dn;Jn++)xn.setValue(j,"_gl_DrawID",Jn),Lt.render(Ot[Jn]/ht,Fe[Jn])}else if(re.isInstancedMesh)Lt.renderInstances(je,Kt,re.count);else if(le.isInstancedBufferGeometry){const Ot=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Fe=Math.min(le.instanceCount,Ot);Lt.renderInstances(je,Kt,Fe)}else Lt.render(je,Kt)};function Ws(w,Y,le){w.transparent===!0&&w.side===Sa&&w.forceSinglePass===!1?(w.side=jn,w.needsUpdate=!0,wa(w,Y,le),w.side=or,w.needsUpdate=!0,wa(w,Y,le),w.side=Sa):wa(w,Y,le)}this.compile=function(w,Y,le=null){le===null&&(le=w),D=Ue.get(le),D.init(Y),T.push(D),le.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),w!==le&&w.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),D.setupLights();const ae=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Pe=re.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Le=Pe[Ge];Ws(Le,le,re),ae.add(Le)}else Ws(Pe,le,re),ae.add(Pe)}),D=T.pop(),ae},this.compileAsync=function(w,Y,le=null){const ae=this.compile(w,Y,le);return new Promise(re=>{function Pe(){if(ae.forEach(function(Ge){oe.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){re(w);return}setTimeout(Pe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Vr=null;function Oi(w){Vr&&Vr(w)}function dn(){Hn.stop()}function Tn(){Hn.start()}const Hn=new zv;Hn.setAnimationLoop(Oi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){Vr=w,Ve.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},Ve.addEventListener("sessionstart",dn),Ve.addEventListener("sessionend",Tn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(w,Y);const le=Ve.enabled===!0&&Ve.isPresenting===!0,ae=A!==null&&(ee===null||le)&&A.begin(G,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),w.isScene===!0&&w.onBeforeRender(G,w,Y,ee),D=Ue.get(w,T.length),D.init(Y),D.state.textureUnits=me.getTextureUnits(),T.push(D),$t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),vt.setFromProjectionMatrix($t,Wi,Y.reversedDepth),dt=this.localClippingEnabled,xt=Ze.init(this.clippingPlanes,dt),O=Oe.get(w,z.length),O.init(),z.push(O),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=G.xr.getDepthSensingMesh();Ge!==null&&lr(Ge,Y,-1/0,G.sortObjects)}lr(w,Y,0,G.sortObjects),O.finish(),G.sortObjects===!0&&O.sort(He,tt,Y.reversedDepth),Wt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Wt&&it.addToRenderList(O,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Ze.beginShadows();const re=D.state.shadowsArray;if(Qe.render(re,w,Y),xt===!0&&Ze.endShadows(),(ae&&A.hasRenderPass())===!1){const Ge=O.opaque,Le=O.transmissive;if(D.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Le.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const st=Xe[ke];al(Ge,Le,w,st)}Wt&&it.render(w);for(let ke=0,Je=Xe.length;ke<Je;ke++){const st=Xe[ke];il(O,w,st,st.viewport)}}else Le.length>0&&al(Ge,Le,w,Y),Wt&&it.render(w),il(O,w,Y)}ee!==null&&k===0&&(me.updateMultisampleRenderTarget(ee),me.updateRenderTargetMipmap(ee)),ae&&A.end(G),w.isScene===!0&&w.onAfterRender(G,w,Y),Be.resetDefaultState(),he=-1,de=null,T.pop(),T.length>0?(D=T[T.length-1],me.setTextureUnits(D.state.textureUnits),xt===!0&&Ze.setGlobalState(G.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?O=z[z.length-1]:O=null,Z!==null&&Z.renderEnd()};function lr(w,Y,le,ae){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||vt.intersectsSprite(w)){ae&&tn.setFromMatrixPosition(w.matrixWorld).applyMatrix4($t);const Ge=ge.update(w),Le=w.material;Le.visible&&O.push(w,Ge,Le,le,tn.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||vt.intersectsObject(w))){const Ge=ge.update(w),Le=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tn.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),tn.copy(Ge.boundingSphere.center)),tn.applyMatrix4(w.matrixWorld).applyMatrix4($t)),Array.isArray(Le)){const Xe=Ge.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const st=Xe[ke],je=Le[st.materialIndex];je&&je.visible&&O.push(w,Ge,je,le,tn.z,st)}}else Le.visible&&O.push(w,Ge,Le,le,tn.z,null)}}const Pe=w.children;for(let Ge=0,Le=Pe.length;Ge<Le;Ge++)lr(Pe[Ge],Y,le,ae)}function il(w,Y,le,ae){const{opaque:re,transmissive:Pe,transparent:Ge}=w;D.setupLightsView(le),xt===!0&&Ze.setGlobalState(G.clippingPlanes,le),ae&&b.viewport(U.copy(ae)),re.length>0&&cr(re,Y,le),Pe.length>0&&cr(Pe,Y,le),Ge.length>0&&cr(Ge,Y,le),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function al(w,Y,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ae.id]===void 0){const je=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ae.id]=new Yi(1,1,{generateMipmaps:!0,type:je?Ea:yi,minFilter:Ir,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Pe=D.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||U;Pe.setSize(Ge.z*G.transmissionResolutionScale,Ge.w*G.transmissionResolutionScale);const Le=G.getRenderTarget(),Xe=G.getActiveCubeFace(),ke=G.getActiveMipmapLevel();G.setRenderTarget(Pe),G.getClearColor(Ee),Ae=G.getClearAlpha(),Ae<1&&G.setClearColor(16777215,.5),G.clear(),Wt&&it.render(le);const Je=G.toneMapping;G.toneMapping=qi;const st=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),D.setupLightsView(ae),xt===!0&&Ze.setGlobalState(G.clippingPlanes,ae),cr(w,le,ae),me.updateMultisampleRenderTarget(Pe),me.updateRenderTargetMipmap(Pe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let At=0,Kt=Y.length;At<Kt;At++){const kt=Y[At],{object:Lt,geometry:Ot,material:Fe,group:Dn}=kt;if(Fe.side===Sa&&Lt.layers.test(ae.layers)){const ht=Fe.side;Fe.side=jn,Fe.needsUpdate=!0,Aa(Lt,le,ae,Ot,Fe,Dn),Fe.side=ht,Fe.needsUpdate=!0,je=!0}}je===!0&&(me.updateMultisampleRenderTarget(Pe),me.updateRenderTargetMipmap(Pe))}G.setRenderTarget(Le,Xe,ke),G.setClearColor(Ee,Ae),st!==void 0&&(ae.viewport=st),G.toneMapping=Je}function cr(w,Y,le){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let re=0,Pe=w.length;re<Pe;re++){const Ge=w[re],{object:Le,geometry:Xe,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ae!==null&&(Je=ae),Le.layers.test(le.layers)&&Aa(Le,Y,le,Xe,Je,ke)}}function Aa(w,Y,le,ae,re,Pe){w.onBeforeRender(G,Y,le,ae,re,Pe),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(G,Y,le,ae,w,Pe),re.transparent===!0&&re.side===Sa&&re.forceSinglePass===!1?(re.side=jn,re.needsUpdate=!0,G.renderBufferDirect(le,Y,ae,re,w,Pe),re.side=or,re.needsUpdate=!0,G.renderBufferDirect(le,Y,ae,re,w,Pe),re.side=Sa):G.renderBufferDirect(le,Y,ae,re,w,Pe),w.onAfterRender(G,Y,le,ae,re,Pe)}function wa(w,Y,le){Y.isScene!==!0&&(Y=ln);const ae=oe.get(w),re=D.state.lights,Pe=D.state.shadowsArray,Ge=re.state.version,Le=Ce.getParameters(w,re.state,Pe,Y,le,D.state.lightProbeGridArray),Xe=Ce.getProgramCacheKey(Le);let ke=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=we.get(w.envMap||ae.environment,Je),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",Qn),ke=new Map,ae.programs=ke);let st=ke.get(Xe);if(st!==void 0){if(ae.currentProgram===st&&ae.lightsStateVersion===Ge)return Qi(w,Le),st}else Le.uniforms=Ce.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,le,Le),w.onBeforeCompile(Le,G),st=Ce.acquireProgram(Le,Xe),ke.set(Xe,st),ae.uniforms=Le.uniforms;const je=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Ze.uniform),Qi(w,Le),ae.needsLights=rl(w),ae.lightsStateVersion=Ge,ae.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotLightMatrix.value=re.state.spotLightMatrix,je.spotLightMap.value=re.state.spotLightMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=D.state.lightProbeGridArray.length>0,ae.currentProgram=st,ae.uniformsList=null,st}function Ki(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Wc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Qi(w,Y){const le=oe.get(w);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ur(w,Y){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let le=0,ae=w.length;le<ae;le++){const re=w[le];if(re.texture!==null&&re.boundingBox.containsPoint(C))return re}return null}function Ra(w,Y,le,ae,re){Y.isScene!==!0&&(Y=ln),me.resetTextureUnits();const Pe=Y.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,Le=ee===null?G.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:yt.workingColorSpace,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,ke=we.get(ae.envMap||Ge,Xe),Je=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,st=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!le.morphAttributes.position,At=!!le.morphAttributes.normal,Kt=!!le.morphAttributes.color;let kt=qi;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(kt=G.toneMapping);const Lt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,Fe=oe.get(ae),Dn=D.state.lights;if(xt===!0&&(dt===!0||w!==de)){const Dt=w===de&&ae.id===he;Ze.setState(ae,w,Dt)}let ht=!1;ae.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Dn.state.version||Fe.outputColorSpace!==Le||re.isBatchedMesh&&Fe.batching===!1||!re.isBatchedMesh&&Fe.batching===!0||re.isBatchedMesh&&Fe.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Fe.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Fe.instancing===!1||!re.isInstancedMesh&&Fe.instancing===!0||re.isSkinnedMesh&&Fe.skinning===!1||!re.isSkinnedMesh&&Fe.skinning===!0||re.isInstancedMesh&&Fe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Fe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Fe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Fe.instancingMorph===!1&&re.morphTexture!==null||Fe.envMap!==ke||ae.fog===!0&&Fe.fog!==Pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ze.numPlanes||Fe.numIntersection!==Ze.numIntersection)||Fe.vertexAlphas!==Je||Fe.vertexTangents!==st||Fe.morphTargets!==je||Fe.morphNormals!==At||Fe.morphColors!==Kt||Fe.toneMapping!==kt||Fe.morphTargetsCount!==Ot||!!Fe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Fe.__version=ae.version);let xn=Fe.currentProgram;ht===!0&&(xn=wa(ae,Y,re),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,xn,Fe));let Jn=!1,bi=!1,$n=!1;const Pt=xn.getUniforms(),Qt=Fe.uniforms;if(b.useProgram(xn.program)&&(Jn=!0,bi=!0,$n=!0),ae.id!==he&&(he=ae.id,bi=!0),Fe.needsLights){const Dt=ur(D.state.lightProbeGridArray,re);Fe.lightProbeGrid!==Dt&&(Fe.lightProbeGrid=Dt,bi=!0)}if(Jn||de!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",w.projectionMatrix),Pt.setValue(j,"viewMatrix",w.matrixWorldInverse);const Pi=Pt.map.cameraPosition;Pi!==void 0&&Pi.setValue(j,en.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),de!==w&&(de=w,bi=!0,$n=!0)}if(Fe.needsLights&&(Dn.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Dn.state.directionalShadowMap,me),Dn.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Dn.state.spotShadowMap,me),Dn.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Dn.state.pointShadowMap,me)),re.isSkinnedMesh){Pt.setOptional(j,re,"bindMatrix"),Pt.setOptional(j,re,"bindMatrixInverse");const Dt=re.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(j,"boneTexture",Dt.boneTexture,me))}re.isBatchedMesh&&(Pt.setOptional(j,re,"batchingTexture"),Pt.setValue(j,"batchingTexture",re._matricesTexture,me),Pt.setOptional(j,re,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",re._indirectTexture,me),Pt.setOptional(j,re,"batchingColorTexture"),re._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",re._colorsTexture,me));const Ei=le.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&q.update(re,le,xn),(bi||Fe.receiveShadow!==re.receiveShadow)&&(Fe.receiveShadow=re.receiveShadow,Pt.setValue(j,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(Qt.envMapIntensity.value=Y.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=y2()),bi){if(Pt.setValue(j,"toneMappingExposure",G.toneMappingExposure),Fe.needsLights&&hn(Qt,$n),Pe&&ae.fog===!0&&ze.refreshFogUniforms(Qt,Pe),ze.refreshMaterialUniforms(Qt,ae,be,ye,D.state.transmissionRenderTarget[w.id]),Fe.needsLights&&Fe.lightProbeGrid){const Dt=Fe.lightProbeGrid;Qt.probesSH.value=Dt.texture,Qt.probesMin.value.copy(Dt.boundingBox.min),Qt.probesMax.value.copy(Dt.boundingBox.max),Qt.probesResolution.value.copy(Dt.resolution)}Wc.upload(j,Ki(Fe),Qt,me)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Wc.upload(j,Ki(Fe),Qt,me),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(j,"center",re.center),Pt.setValue(j,"modelViewMatrix",re.modelViewMatrix),Pt.setValue(j,"normalMatrix",re.normalMatrix),Pt.setValue(j,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Dt=ae.uniformsGroups;for(let Pi=0,Ca=Dt.length;Pi<Ca;Pi++){const fr=Dt[Pi];Te.update(fr,xn),Te.bind(fr,xn)}}return xn}function hn(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function rl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,Y,le){const ae=oe.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(w.texture).__webglTexture=Y,oe.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const le=oe.get(w);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,le=0){ee=w,F=Y,k=le;let ae=null,re=!1,Pe=!1;if(w){const Le=oe.get(w);if(Le.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(w.viewport),W.copy(w.scissor),xe=w.scissorTest,b.viewport(U),b.scissor(W),b.setScissorTest(xe),he=-1;return}else if(Le.__webglFramebuffer===void 0)me.setupRenderTarget(w);else if(Le.__hasExternalTextures)me.rebindTextures(w,oe.get(w.texture).__webglTexture,oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&oe.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const ke=oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[Y])?ae=ke[Y][le]:ae=ke[Y],re=!0):w.samples>0&&me.useMultisampledRTT(w)===!1?ae=oe.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?ae=ke[le]:ae=ke,U.copy(w.viewport),W.copy(w.scissor),xe=w.scissorTest}else U.copy(Ke).multiplyScalar(be).floor(),W.copy(qt).multiplyScalar(be).floor(),xe=ut;if(le!==0&&(ae=ue),b.bindFramebuffer(j.FRAMEBUFFER,ae)&&b.drawBuffers(w,ae),b.viewport(U),b.scissor(W),b.setScissorTest(xe),re){const Le=oe.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,le)}else if(Pe){const Le=Y;for(let Xe=0;Xe<w.textures.length;Xe++){const ke=oe.get(w.textures[Xe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,le,Le)}}else if(w!==null&&le!==0){const Le=oe.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Le.__webglTexture,le)}he=-1},this.readRenderTargetPixels=function(w,Y,le,ae,re,Pe,Ge,Le=0){if(!(w&&w.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){b.bindFramebuffer(j.FRAMEBUFFER,Xe);try{const ke=w.textures[Le],Je=ke.format,st=ke.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le),!I.textureFormatReadable(Je)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(st)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ae&&le>=0&&le<=w.height-re&&j.readPixels(Y,le,ae,re,Ne.convert(Je),Ne.convert(st),Pe)}finally{const ke=ee!==null?oe.get(ee).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,Y,le,ae,re,Pe,Ge,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(Y>=0&&Y<=w.width-ae&&le>=0&&le<=w.height-re){b.bindFramebuffer(j.FRAMEBUFFER,Xe);const ke=w.textures[Le],Je=ke.format,st=ke.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le),!I.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,je),j.bufferData(j.PIXEL_PACK_BUFFER,Pe.byteLength,j.STREAM_READ),j.readPixels(Y,le,ae,re,Ne.convert(Je),Ne.convert(st),0);const At=ee!==null?oe.get(ee).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,At);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await k1(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,je),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Pe),j.deleteBuffer(je),j.deleteSync(Kt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,le=0){const ae=Math.pow(2,-le),re=Math.floor(w.image.width*ae),Pe=Math.floor(w.image.height*ae),Ge=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;me.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,le,0,0,Ge,Le,re,Pe),b.unbindTexture()},this.copyTextureToTexture=function(w,Y,le=null,ae=null,re=0,Pe=0){let Ge,Le,Xe,ke,Je,st,je,At,Kt;const kt=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(le!==null)Ge=le.max.x-le.min.x,Le=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,ke=le.min.x,Je=le.min.y,st=le.isBox3?le.min.z:0;else{const Qt=Math.pow(2,-re);Ge=Math.floor(kt.width*Qt),Le=Math.floor(kt.height*Qt),w.isDataArrayTexture?Xe=kt.depth:w.isData3DTexture?Xe=Math.floor(kt.depth*Qt):Xe=1,ke=0,Je=0,st=0}ae!==null?(je=ae.x,At=ae.y,Kt=ae.z):(je=0,At=0,Kt=0);const Lt=Ne.convert(Y.format),Ot=Ne.convert(Y.type);let Fe;Y.isData3DTexture?(me.setTexture3D(Y,0),Fe=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(me.setTexture2DArray(Y,0),Fe=j.TEXTURE_2D_ARRAY):(me.setTexture2D(Y,0),Fe=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const Dn=b.getParameter(j.UNPACK_ROW_LENGTH),ht=b.getParameter(j.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(j.UNPACK_SKIP_PIXELS),Jn=b.getParameter(j.UNPACK_SKIP_ROWS),bi=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,kt.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,kt.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(j.UNPACK_SKIP_ROWS,Je),b.pixelStorei(j.UNPACK_SKIP_IMAGES,st);const $n=w.isDataArrayTexture||w.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Qt=oe.get(w),Ei=oe.get(Y),Dt=oe.get(Qt.__renderTarget),Pi=oe.get(Ei.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,Dt.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ca=0;Ca<Xe;Ca++)$n&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(w).__webglTexture,re,st+Ca),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,Pe,Kt+Ca)),j.blitFramebuffer(ke,Je,Ge,Le,je,At,Ge,Le,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||oe.has(w)){const Qt=oe.get(w),Ei=oe.get(Y);b.bindFramebuffer(j.READ_FRAMEBUFFER,se),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,K);for(let Dt=0;Dt<Xe;Dt++)$n?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Qt.__webglTexture,re,st+Dt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Qt.__webglTexture,re),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ei.__webglTexture,Pe,Kt+Dt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ei.__webglTexture,Pe),re!==0?j.blitFramebuffer(ke,Je,Ge,Le,je,At,Ge,Le,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(Fe,Pe,je,At,Kt+Dt,ke,Je,Ge,Le):j.copyTexSubImage2D(Fe,Pe,je,At,ke,Je,Ge,Le);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Fe,Pe,je,At,Kt,Ge,Le,Xe,Lt,Ot,kt.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Fe,Pe,je,At,Kt,Ge,Le,Xe,Lt,kt.data):j.texSubImage3D(Fe,Pe,je,At,Kt,Ge,Le,Xe,Lt,Ot,kt):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Pe,je,At,Ge,Le,Lt,Ot,kt.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Pe,je,At,kt.width,kt.height,Lt,kt.data):j.texSubImage2D(j.TEXTURE_2D,Pe,je,At,Ge,Le,Lt,Ot,kt);b.pixelStorei(j.UNPACK_ROW_LENGTH,Dn),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(j.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(j.UNPACK_SKIP_ROWS,Jn),b.pixelStorei(j.UNPACK_SKIP_IMAGES,bi),Pe===0&&Y.generateMipmaps&&j.generateMipmap(Fe),b.unbindTexture()},this.initRenderTarget=function(w){oe.get(w).__webglFramebuffer===void 0&&me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){F=0,k=0,ee=null,b.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),i.unpackColorSpace=yt._getUnpackColorSpace()}}function b2(){const s=ft.useRef(null);return ft.useEffect(()=>{const e=s.current;if(!e)return;let i=null,r,l=null,c=null,d=null,p=null,m=null,h=[];try{const v=document.createElement("canvas");if(!!!(window.WebGLRenderingContext&&(v.getContext("webgl")||v.getContext("experimental-webgl"))))return;const g=typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,y=new rM,E=new Si(55,window.innerWidth/window.innerHeight,.1,1e3);E.position.z=28,i=new M2({alpha:!0,antialias:window.devicePixelRatio<2,powerPreference:"high-performance"}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),e.appendChild(i.domElement);let L=0,M=0,S=0,P=0;l=U=>{S=(U.clientX/window.innerWidth-.5)*2,P=(U.clientY/window.innerHeight-.5)*2},c=U=>{U.touches.length>0&&(S=(U.touches[0].clientX/window.innerWidth-.5)*1.2,P=(U.touches[0].clientY/window.innerHeight-.5)*1.2)},window.addEventListener("mousemove",l,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0});const B=new Wo;y.add(B);const C=window.innerWidth<768?160:320;p=new ci;const O=new Float32Array(C*3),D=new Float32Array(C*3),z=new bt("#06b6d4"),T=new bt("#ec4899"),A=new bt("#a855f7"),G=new bt("#f59e0b"),V=[z,T,A,G];for(let U=0;U<C*3;U+=3){O[U]=(Math.random()-.5)*90,O[U+1]=(Math.random()-.5)*80,O[U+2]=(Math.random()-.5)*50;const W=V[Math.floor(Math.random()*V.length)];D[U]=W.r,D[U+1]=W.g,D[U+2]=W.b}p.setAttribute("position",new Mi(O,3)),p.setAttribute("color",new Mi(D,3));const Z=new Uv({size:window.innerWidth<768?.9:.75,vertexColors:!0,transparent:!0,opacity:.8,blending:Yd}),ue=new mM(p,Z);B.add(ue);const se=[];h=[new $h(2.4,0),new ep(1.9,0),new tp(2.1,0),new np(2.5,.35,8,20)];const K=[new Or({color:440020,wireframe:!0,transparent:!0,opacity:.22}),new Or({color:16007006,wireframe:!0,transparent:!0,opacity:.2}),new Or({color:11032055,wireframe:!0,transparent:!0,opacity:.28}),new Or({color:15485081,wireframe:!0,transparent:!0,opacity:.22})],F=window.innerWidth<768?5:8;for(let U=0;U<F;U++){const W=h[U%h.length],xe=K[U%K.length],Ee=new Li(W,xe);Ee.position.x=(Math.random()-.5)*44,Ee.position.y=(Math.random()-.5)*32,Ee.position.z=(Math.random()-.5)*20-5,B.add(Ee),se.push({mesh:Ee,rotX:(Math.random()-.5)*.015,rotY:(Math.random()-.5)*.018,rotZ:(Math.random()-.5)*.01,speedY:.006+Math.random()*.008,baseY:Ee.position.y,baseX:Ee.position.x})}m=new nl(120,120,26,26);const k=new Or({color:4850766,wireframe:!0,transparent:!0,opacity:.22}),ee=new Li(m,k);ee.rotation.x=-Math.PI/2.35,ee.position.y=-20,ee.position.z=-8,y.add(ee),d=()=>{i&&(E.aspect=window.innerWidth/window.innerHeight,E.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))},window.addEventListener("resize",d);let he=new AM;const de=()=>{try{if(r=requestAnimationFrame(de),!i)return;const U=he.getElapsedTime();if(g?B.rotation.y=Math.sin(U*.1)*.05:(L+=(S-L)*.06,M+=(P-M)*.06,E.position.x=L*2.8,E.position.y=-M*2.2,E.lookAt(0,0,0),B.rotation.y=L*.18+Math.sin(U*.2)*.08,B.rotation.x=-M*.14+Math.cos(U*.18)*.05),ue.rotation.y=U*.035,ue.rotation.x=U*.015,se.forEach((W,xe)=>{g||(W.mesh.rotation.x+=W.rotX,W.mesh.rotation.y+=W.rotY,W.mesh.rotation.z+=W.rotZ,W.mesh.position.y=W.baseY+Math.sin(U*1.4+xe*1.2)*1.6,W.mesh.position.x=W.baseX+Math.cos(U*.8+xe)*.8)}),m){const W=m.attributes.position;for(let xe=0;xe<W.count;xe++){const Ee=W.getX(xe),Ae=W.getY(xe),$=Math.sin(Ee*.18+U*1.1)*Math.cos(Ae*.18+U*1.1)*1.4;W.setZ(xe,$)}W.needsUpdate=!0}i.render(y,E)}catch{}};de()}catch{}return()=>{r&&cancelAnimationFrame(r),d&&window.removeEventListener("resize",d),l&&window.removeEventListener("mousemove",l),c&&window.removeEventListener("touchmove",c);try{e&&i&&i.domElement&&e.contains(i.domElement)&&e.removeChild(i.domElement),i&&i.dispose(),p&&p.dispose(),m&&m.dispose(),h.forEach(v=>v.dispose())}catch{}}},[]),N.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",style:{opacity:.95}})}const E2=({isOpen:s,onClose:e,onSuccess:i})=>{const[r,l]=ft.useState(""),[c,d]=ft.useState(null),[p,m]=ft.useState(!1);if(Vi.useEffect(()=>{s&&(l(""),d(null))},[s]),!s)return null;const h=()=>{l(""),d(null),e()},v=async x=>{x.preventDefault();const g=r.trim();if(!g){d("Please enter the admin password");return}m(!0),d(null);try{const y=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:g})}),E=await y.json();y.ok&&E.success&&E.token?(i(E.token),l(""),d(null)):d(E.message||"NIKAL BHOSDIKE")}catch{d("Failed to connect to server. Please try again.")}finally{m(!1)}};return N.jsx("div",{id:"admin-login-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/90 backdrop-blur-md animate-in fade-in duration-200",onClick:h,children:N.jsxs("div",{id:"admin-login-modal",onClick:x=>x.stopPropagation(),className:"w-full max-w-[360px] sm:max-w-[400px] bg-[#0c0817] border border-cyan-500/40 rounded-2xl p-4 sm:p-5 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative flex flex-col space-y-4",children:[N.jsxs("div",{className:"flex items-center justify-between border-b border-cyan-900/40 pb-3",children:[N.jsxs("div",{className:"flex items-center gap-2.5",children:[N.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]",children:N.jsx(av,{className:"w-4 h-4 text-cyan-300"})}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-xs sm:text-sm font-extrabold tracking-wider uppercase text-cyan-300",children:"ADMIN ACCESS"}),N.jsx("p",{className:"text-[10px] text-slate-400",children:"XNF Live Control Center"})]})]}),N.jsx("button",{id:"close-admin-login-btn",onClick:h,className:"w-7 h-7 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800 cursor-pointer",children:N.jsx(sv,{className:"w-3.5 h-3.5"})})]}),N.jsxs("div",{className:"p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/25 flex items-center gap-2 text-[11px] text-cyan-200",children:[N.jsx(Ry,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"}),N.jsx("span",{children:"ENTER YOUR FATHER NAME 😂"})]}),c&&N.jsxs("div",{className:"p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/40 flex items-center gap-2 text-[11px] text-rose-300",children:[N.jsx(nv,{className:"w-3.5 h-3.5 text-rose-400 shrink-0"}),N.jsx("span",{children:c})]}),N.jsxs("form",{onSubmit:v,className:"space-y-3",children:[N.jsxs("div",{className:"space-y-1",children:[N.jsx("label",{className:"text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block",children:"ADMIN PASSCODE"}),N.jsx("input",{id:"admin-password-input",type:"text",value:r,onChange:x=>{l(x.target.value.toUpperCase()),c&&d(null)},placeholder:"ENTER PASSCODE",autoFocus:!0,className:"w-full px-3 py-2.5 rounded-xl bg-[#06030c] border border-cyan-500/30 focus:border-cyan-400 text-cyan-200 font-mono text-sm tracking-widest outline-none transition shadow-inner uppercase"})]}),N.jsx("button",{id:"admin-login-submit-btn",type:"submit",disabled:p,className:"w-full py-3 px-4 rounded-xl font-black text-xs text-white uppercase tracking-wider bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 hover:from-cyan-500 hover:to-emerald-400 shadow-[0_4px_15px_rgba(6,182,212,0.3)] transition active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60",children:p?N.jsxs(N.Fragment,{children:[N.jsx(iv,{className:"w-3.5 h-3.5 animate-spin"}),N.jsx("span",{children:"VERIFYING PASSCODE..."})]}):N.jsxs(N.Fragment,{children:[N.jsx(Gh,{className:"w-4 h-4"}),N.jsx("span",{children:"OPEN ADMIN PANEL"}),N.jsx(zc,{className:"w-3.5 h-3.5"})]})})]})]})})},T2=()=>{};function Fh(){if(!(typeof window>"u"))try{const s=["log","info","warn","error","debug","table","dir","dirxml","trace","group","groupCollapsed","groupEnd","profile","profileEnd","time","timeEnd","timeLog"];for(const e of s)try{window.console[e]=T2}catch{}try{window.console.clear()}catch{}}catch{}}Fh();const A2=({children:s})=>{const[e,i]=ft.useState(!1),[r,l]=ft.useState(null);return ft.useEffect(()=>{Fh();let c=null;const d=y=>{l(y),c&&clearTimeout(c),c=setTimeout(()=>{l(null)},2500)},p=y=>(y.preventDefault(),y.stopPropagation(),d("Protected by HSxMASTER Security System"),!1),m=y=>{const E=(y.key||"").toUpperCase(),L=y.keyCode||y.which;return E==="F12"||L===123||(y.ctrlKey||y.metaKey)&&(y.shiftKey||y.altKey)&&(["I","J","C","K","U"].includes(E)||[73,74,67,75,85].includes(L))?(y.preventDefault(),y.stopPropagation(),d("Inspector / Developer Tools Disabled"),!1):(y.ctrlKey||y.metaKey)&&!y.shiftKey&&!y.altKey&&(["U","S","P"].includes(E)||[85,83,80].includes(L))?(y.preventDefault(),y.stopPropagation(),d("Source View & Page Export Disabled"),!1):!0},h=y=>(y.preventDefault(),!1),v=(()=>{try{return window.self===window.top}catch{return!1}})(),x=()=>{try{if(Fh(),v&&window.screen&&window.screen.width>=1024){const y=window.outerWidth-window.innerWidth,E=window.outerHeight-window.innerHeight,L=220;if(y>L||E>L){i(!0);return}}i(!1)}catch{}};window.addEventListener("contextmenu",p,{capture:!0}),window.addEventListener("keydown",m,{capture:!0}),window.addEventListener("dragstart",h,{capture:!0}),window.addEventListener("resize",x);const g=setInterval(x,1500);return()=>{window.removeEventListener("contextmenu",p,{capture:!0}),window.removeEventListener("keydown",m,{capture:!0}),window.removeEventListener("dragstart",h,{capture:!0}),window.removeEventListener("resize",x),clearInterval(g),c&&clearTimeout(c)}},[]),e?N.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#030108] text-white flex flex-col items-center justify-center p-6 select-none font-sans",children:N.jsxs("div",{className:"max-w-sm w-full rounded-2xl border border-rose-500/50 bg-[#0d0618] p-6 text-center space-y-4 shadow-[0_0_50px_rgba(244,63,94,0.25)]",children:[N.jsx("div",{className:"w-14 h-14 mx-auto rounded-2xl bg-rose-950/70 border border-rose-500/50 flex items-center justify-center text-rose-400",children:N.jsx(rv,{className:"w-7 h-7"})}),N.jsx("h2",{className:"text-base font-black tracking-wider uppercase text-rose-300 font-mono",children:"SECURITY PROTECTION ACTIVE"}),N.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Developer Tools / Inspection is not permitted on this website. Please close Inspect Element to continue using the website safely."}),N.jsx("button",{type:"button",onClick:()=>i(!1),className:"w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold uppercase tracking-wider text-white cursor-pointer",children:"Resume Protected Session"})]})}):N.jsxs(N.Fragment,{children:[r&&N.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none animate-in fade-in duration-150",children:N.jsxs("div",{className:"px-3.5 py-2 rounded-xl bg-[#0e071d]/95 border border-purple-500/50 text-[11px] font-mono font-bold text-purple-200 flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.85)]",children:[N.jsx(av,{className:"w-3.5 h-3.5 text-pink-400 shrink-0"}),N.jsx("span",{children:r})]})}),s]})},w2=Vi.lazy(()=>oy(()=>import("AdminDashboardModal-BetoCKEo.js"),[]).then(s=>({default:s.AdminDashboardModal})));function R2(){const[s,e]=ft.useState(!1),[i,r]=ft.useState(!1),[l,c]=ft.useState(!1),[d,p]=ft.useState(""),[m,h]=ft.useState(0);ft.useEffect(()=>{try{localStorage.removeItem("xnf_admin_token"),localStorage.removeItem("xnf_admin_auth_time")}catch{}p("")},[]);const v=()=>{e(!1),p("");try{localStorage.removeItem("xnf_admin_token"),localStorage.removeItem("xnf_admin_auth_time")}catch{}r(!0)},x=E=>{p(E),r(!1),c(!0)},g=()=>{p("");try{localStorage.removeItem("xnf_admin_token"),localStorage.removeItem("xnf_admin_auth_time")}catch{}c(!1)},y=()=>{p("");try{localStorage.removeItem("xnf_admin_token"),localStorage.removeItem("xnf_admin_auth_time")}catch{}c(!1),r(!1)};return N.jsx(A2,{children:N.jsxs("div",{onContextMenu:E=>E.preventDefault(),className:"min-h-screen bg-[#030108] text-slate-100 flex flex-col justify-center items-center selection:bg-pink-600 selection:text-white font-sans antialiased relative overflow-x-hidden py-6 px-3 sm:px-4 select-none",children:[N.jsx(Vh,{inline:!0,children:N.jsx(b2,{})}),N.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden z-0",children:[N.jsx("div",{className:"absolute -top-40 left-1/2 -translate-x-1/2 w-[550px] h-[380px] bg-gradient-to-b from-purple-900/25 via-pink-900/15 to-transparent blur-3xl rounded-full"}),N.jsx("div",{className:"absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-900/15 blur-3xl rounded-full"})]}),N.jsx("div",{className:"w-[94%] sm:w-full max-w-[375px] sm:max-w-[425px] relative z-10 my-auto",children:N.jsx(Fc,{id:"main-app-container",maxTilt:5,depth:15,glowColor:"rgba(217, 70, 239, 0.18)",spotlightSize:280,className:"w-full flex flex-col items-center justify-start rounded-[24px] sm:rounded-[28px] border border-purple-800/50 bg-[#07030e]/92 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.18),0_20px_50px_rgba(0,0,0,0.8)] p-3 sm:p-4",children:N.jsx(o1,{onOpenTerms:()=>e(!0),configKey:m})})}),N.jsx(l1,{isOpen:s,onClose:()=>e(!1),onOpenAdmin:v}),N.jsx(E2,{isOpen:i,onClose:()=>r(!1),onSuccess:x}),l&&d&&N.jsx(ft.Suspense,{fallback:null,children:N.jsx(w2,{isOpen:l,onClose:g,adminToken:d,onLogout:y,onConfigUpdated:()=>h(E=>E+1),onTokenRefresh:E=>p(E)})})]})})}ay.createRoot(document.getElementById("root")).render(N.jsx(ft.StrictMode,{children:N.jsx(Vh,{children:N.jsx(R2,{})})}));export{zc as A,yy as C,Jg as D,Ry as K,av as L,hd as P,By as R,Gh as S,ky as T,sv as X,nv as a,Yo as b,on as c,jo as d,Fy as e,iv as f,rv as g,Wy as h,jy as i,N as j,Ny as k,ft as r,ov as s};
