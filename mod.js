var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(t,r,e){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),p="get"in e,y="set"in e,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&a&&a.call(t,r,e.set),t},p=r()?c:f,y=p;var m=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var b=function(t){return"number"==typeof t};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var s=function(){return v&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var w=function(t){return _.call(t)},E=Object.prototype.hasOwnProperty;var g=function(t,r){return null!=t&&E.call(t,r)},d="function"==typeof Symbol?Symbol.toStringTag:"",S=g,T=d,j=h;var P=w,N=function(t){var r,e,n;if(null==t)return j.call(t);e=t[T],r=S(t,T);try{t[T]=void 0}catch(r){return j.call(t)}return n=j.call(t),r?t[T]=e:delete t[T],n},O=s()?N:P,A=Number,F=A.prototype.toString;var I=O,V=A,L=function(t){try{return F.call(t),!0}catch(t){return!1}},R=s();var C=function(t){return"object"==typeof t&&(t instanceof V||(R?L(t):"[object Number]"===I(t)))},Y=b,k=C;var x=m,B=function(t){return Y(t)||k(t)},M=C;x(B,"isPrimitive",b),x(B,"isObject",M);var G=B;var J=G.isPrimitive,q=p,z=m,D=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},H=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function K(t,r){if(!(this instanceof K))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!J(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!J(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}z(K,"BYTES_PER_ELEMENT",8),z(K.prototype,"BYTES_PER_ELEMENT",8),z(K.prototype,"byteLength",16),z(K.prototype,"toString",D),z(K.prototype,"toJSON",H);var Q=K,U=O,W="function"==typeof Float32Array;var X=function(t){return W&&t instanceof Float32Array||"[object Float32Array]"===U(t)},Z=Number.POSITIVE_INFINITY,$="function"==typeof Float32Array?Float32Array:null,tt=X,rt=Z,et=$;var nt,ot="function"==typeof Float32Array?Float32Array:void 0,it=function(){throw new Error("not implemented")};nt=function(){var t,r;if("function"!=typeof et)return!1;try{r=new et([1,3.14,-3.14,5e40]),t=tt(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===rt}catch(r){t=!1}return t}()?ot:it;var at=G.isPrimitive,ut=p,lt=m,ct=nt,ft=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},pt=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function yt(t,r){var e;if(!(this instanceof yt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!at(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!at(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return ut(this,"re",{configurable:!1,enumerable:!0,get:function(){return e[0]}}),ut(this,"im",{configurable:!1,enumerable:!0,get:function(){return e[1]}}),(e=new ct(2))[0]=t,e[1]=r,this}lt(yt,"BYTES_PER_ELEMENT",4),lt(yt.prototype,"BYTES_PER_ELEMENT",4),lt(yt.prototype,"byteLength",8),lt(yt.prototype,"toString",ft),lt(yt.prototype,"toJSON",pt);var mt=Q,bt=yt;var vt=function(t){return t instanceof mt||t instanceof bt||"object"==typeof t&&null!==t&&"number"==typeof t.re&&"number"==typeof t.im};export{vt as default};
