import{t as n,s as r,b as o,q as u,a as l,m as p}from"./common/quantile-0d207231.js";export{a as ascending,b as bisect,d as bisectLeft,c as bisectRight,e as bisector,f as max,m as min,q as quantile,g as quantileSorted,h as quickselect,s as range,j as tickIncrement,t as tickStep,i as ticks}from"./common/quantile-0d207231.js";function v(n,t){let r=0;if(void 0===t)for(let t of n)null!=t&&(t=+t)>=t&&++r;else{let o=-1;for(let e of n)null!=(e=t(e,++o,n))&&(e=+e)>=e&&++r}return r}function y(n){return 0|n.length}function A(n){return!(n>0)}function M(n){return"object"!=typeof n||"length"in n?n:Array.from(n)}function w(...n){const t="function"==typeof n[n.length-1]&&function(n){return t=>n(...t)}(n.pop()),r=(n=n.map(M)).map(y),o=n.length-1,e=new Array(o+1).fill(0),f=[];if(o<0||r.some(A))return f;for(;;){f.push(e.map((t,r)=>n[r][t]));let u=o;for(;++e[u]===r[u];){if(0===u)return t?f.map(t):f;e[u--]=0}}}function x(n,t){var r=0,o=0;return Float64Array.from(n,void 0===t?n=>r+=+n||0:e=>r+=+t(e,o++,n)||0)}function k(n,t){return t<n?-1:t>n?1:t>=n?0:NaN}function S(n,t){let r,o=0,e=0,f=0;if(void 0===t)for(let t of n)null!=t&&(t=+t)>=t&&(r=t-e,e+=r/++o,f+=r*(t-e));else{let u=-1;for(let i of n)null!=(i=t(i,++u,n))&&(i=+i)>=i&&(r=i-e,e+=r/++o,f+=r*(i-e))}if(o>1)return f/(o-1)}function N(n,t){const r=S(n,t);return r?Math.sqrt(r):r}function F(n,t){let r,o;if(void 0===t)for(const t of n)null!=t&&(void 0===r?t>=t&&(r=o=t):(r>t&&(r=t),o<t&&(o=t)));else{let e=-1;for(let f of n)null!=(f=t(f,++e,n))&&(void 0===r?f>=f&&(r=o=f):(r>f&&(r=f),o<f&&(o=f)))}return[r,o]}function L(n){return n}function D(n,...t){return B(n,L,L,t)}function I(n,...t){return B(n,Array.from,L,t)}function R(n,t,...r){return B(n,L,t,r)}function z(n,t,...r){return B(n,Array.from,t,r)}function B(n,t,r,o){return function n(e,f){if(f>=o.length)return r(e);const u=new Map,i=o[f++];let l=-1;for(const n of e){const t=i(n,++l,e),r=u.get(t);r?r.push(n):u.set(t,[n])}for(const[t,r]of u)u.set(t,n(r,f));return t(u)}(n,0)}var C=Array.prototype.slice;function E(n){return function(){return n}}function G(n){return Math.ceil(Math.log(v(n))/Math.LN2)+1}function H(){var t=L,e=F,f=G;function u(u){Array.isArray(u)||(u=Array.from(u));var i,l,c=u.length,a=new Array(c);for(i=0;i<c;++i)a[i]=t(u[i],i,u);var s=e(a),h=s[0],d=s[1],m=f(a,h,d);Array.isArray(m)||(m=n(h,d,m),m=r(Math.ceil(h/m)*m,d,m));for(var p=m.length;m[0]<=h;)m.shift(),--p;for(;m[p-1]>d;)m.pop(),--p;var v,y=new Array(p+1);for(i=0;i<=p;++i)(v=y[i]=[]).x0=i>0?m[i-1]:h,v.x1=i<p?m[i]:d;for(i=0;i<c;++i)h<=(l=a[i])&&l<=d&&y[o(m,l,0,p)].push(u[i]);return y}return u.value=function(n){return arguments.length?(t="function"==typeof n?n:E(n),u):t},u.domain=function(n){return arguments.length?(e="function"==typeof n?n:E([n[0],n[1]]),u):e},u.thresholds=function(n){return arguments.length?(f="function"==typeof n?n:Array.isArray(n)?E(C.call(n)):E(n),u):f},u}function J(n,t,r){return Math.ceil((r-t)/(2*(u(n,.75)-u(n,.25))*Math.pow(v(n),-1/3)))}function K(n,t,r){return Math.ceil((r-t)/(3.5*N(n)*Math.pow(v(n),-1/3)))}function O(n,t){let r,o=-1,e=-1;if(void 0===t)for(const t of n)++e,null!=t&&(r<t||void 0===r&&t>=t)&&(r=t,o=e);else for(let f of n)null!=(f=t(f,++e,n))&&(r<f||void 0===r&&f>=f)&&(r=f,o=e);return o}function P(n,t){let r=0,o=0;if(void 0===t)for(let t of n)null!=t&&(t=+t)>=t&&(++r,o+=t);else{let e=-1;for(let f of n)null!=(f=t(f,++e,n))&&(f=+f)>=f&&(++r,o+=f)}if(r)return o/r}function Q(n,t){return u(n,.5,t)}function T(n){return Array.from(function*(n){for(const t of n)yield*t}(n))}function U(n,t){let r,o=-1,e=-1;if(void 0===t)for(const t of n)++e,null!=t&&(r>t||void 0===r&&t>=t)&&(r=t,o=e);else for(let f of n)null!=(f=t(f,++e,n))&&(r>f||void 0===r&&f>=f)&&(r=f,o=e);return o}function V(n,t=W){const r=[];let o,e=!1;for(const f of n)e&&r.push(t(o,f)),o=f,e=!0;return r}function W(n,t){return[n,t]}function X(n,t){return Array.from(t,t=>n[t])}function Y(n,t=l){let r,o=!1;if(1===t.length){let e;for(const f of n){const n=t(f);(o?l(n,e)<0:0===l(n,n))&&(r=f,e=n,o=!0)}}else for(const e of n)(o?t(e,r)<0:0===t(e,e))&&(r=e,o=!0);return r}function Z(n,t=l){if(1===t.length)return U(n,t);let r,o=-1,e=-1;for(const f of n)++e,(o<0?0===t(f,f):t(f,r)<0)&&(r=f,o=e);return o}function $(n,t=l){let r,o=!1;if(1===t.length){let e;for(const f of n){const n=t(f);(o?l(n,e)>0:0===l(n,n))&&(r=f,e=n,o=!0)}}else for(const e of n)(o?t(e,r)>0:0===t(e,e))&&(r=e,o=!0);return r}function _(n,t=l){if(1===t.length)return O(n,t);let r,o=-1,e=-1;for(const f of n)++e,(o<0?0===t(f,f):t(f,r)>0)&&(r=f,o=e);return o}function nn(n,t){const r=Z(n,t);return r<0?void 0:r}function tn(n,t=0,r=n.length){for(var o,e,f=r-(t=+t);f;)e=Math.random()*f--|0,o=n[f+t],n[f+t]=n[e+t],n[e+t]=o;return n}function rn(n,t){let r=0;if(void 0===t)for(let t of n)(t=+t)&&(r+=t);else{let o=-1;for(let e of n)(e=+t(e,++o,n))&&(r+=e)}return r}function on(n){if(!(e=n.length))return[];for(var t=-1,r=p(n,en),o=new Array(r);++t<r;)for(var e,f=-1,u=o[t]=new Array(e);++f<e;)u[f]=n[f][t];return o}function en(n){return n.length}function fn(){return on(arguments)}export{H as bin,v as count,w as cross,x as cumsum,k as descending,N as deviation,F as extent,$ as greatest,_ as greatestIndex,D as group,I as groups,H as histogram,Y as least,Z as leastIndex,O as maxIndex,P as mean,Q as median,T as merge,U as minIndex,V as pairs,X as permute,R as rollup,z as rollups,nn as scan,tn as shuffle,rn as sum,J as thresholdFreedmanDiaconis,K as thresholdScott,G as thresholdSturges,on as transpose,S as variance,fn as zip};
//# sourceMappingURL=d3-array.js.map
