// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o,a="function"==typeof Symbol?Symbol.toStringTag:"";o=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,y,f,i;if(null==t)return r.call(t);e=t[a],i=a,o=null!=(f=t)&&n.call(f,i);try{t[a]=void 0}catch(n){return r.call(t)}return y=r.call(t),o?t[a]=e:delete t[a],y}:function(t){return r.call(t)};var e=o,y="function"==typeof Float32Array;var f=Number.POSITIVE_INFINITY,i="function"==typeof Float32Array?Float32Array:null;var l="function"==typeof Float32Array?Float32Array:void 0;var c=function(){var t,r,n;if("function"!=typeof i)return!1;try{r=new i([1,3.14,-3.14,5e40]),n=r,t=(y&&n instanceof Float32Array||"[object Float32Array]"===e(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===f}catch(r){t=!1}return t}()?l:function(){throw new Error("not implemented")},u="function"==typeof Uint32Array;var p="function"==typeof Uint32Array?Uint32Array:null;var v="function"==typeof Uint32Array?Uint32Array:void 0;var A=function(){var t,r,n;if("function"!=typeof p)return!1;try{r=new p(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(u&&n instanceof Uint32Array||"[object Uint32Array]"===e(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?v:function(){throw new Error("not implemented")},b=new c(1);new A(b.buffer)[0]=4286578688;var m=b[0];export{m as default};
//# sourceMappingURL=mod.js.map
