// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===a.call(e.specifier)?a.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(e){return"string"==typeof e}var s=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,m,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,h,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):u.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var S=String.fromCharCode,T=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,o,a,s,u,p,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",u=1,p=0;p<e.length;p++)if(l(i=e[p]))s+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,T(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,T(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!T(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=T(a)?String(i.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_(i.arg,i.width,i.padRight)),s+=i.arg||"",u+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function N(e){var r,t,i;if(!I(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return j.apply(null,t)}var C=Object.prototype,O=C.toString,P=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,$=C.__lookupSetter__,M=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,o,a;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(e,r)||$.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),o="get"in t,a="set"in t,n&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};function Y(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"number"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return B&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,J=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"",z=G()?function(e){var r,t,i,n,o;if(null==e)return W.call(e);t=e[X],o=X,r=null!=(n=e)&&J.call(n,o);try{e[X]=void 0}catch(r){return W.call(e)}return i=W.call(e),r?e[X]=t:delete e[X],i}:function(e){return W.call(e)},q=Number,D=q.prototype.toString,H=G();function K(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function Q(e){return Z(e)||K(e)}function ee(e,r){if(!(this instanceof ee))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Z(e))throw new TypeError(N("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Z(r))throw new TypeError(N("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return M(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),M(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Q,"isPrimitive",Z),Y(Q,"isObject",K),Y(ee,"BYTES_PER_ELEMENT",8),Y(ee.prototype,"BYTES_PER_ELEMENT",8),Y(ee.prototype,"byteLength",16),Y(ee.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(ee.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var re="function"==typeof Math.fround?Math.fround:null,te="function"==typeof Float32Array,ie=Number.POSITIVE_INFINITY,ne="function"==typeof Float32Array?Float32Array:null,oe="function"==typeof Float32Array?Float32Array:void 0,ae=new(function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,5e40]),t=r,e=(te&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ie}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")})(1),ce="function"==typeof re?re:function(e){return ae[0]=e,ae[0]};function le(e,r){if(!(this instanceof le))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Z(e))throw new TypeError(N("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Z(r))throw new TypeError(N("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return M(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ce(e)}),M(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ce(r)}),this}return Y(le,"BYTES_PER_ELEMENT",4),Y(le.prototype,"BYTES_PER_ELEMENT",4),Y(le.prototype,"byteLength",8),Y(le.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(le.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),function(e){return e instanceof ee||e instanceof le||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplexLike=r();
//# sourceMappingURL=index.js.map
