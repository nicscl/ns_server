import{b as t}from"./tslib.es6-c4a4947b.js";import{d as r,s as i,f as n,b as e}from"./mergeMap-bab8a89f.js";function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var s=t[t.length-1];return r(s)?(t.pop(),i(t,s)):n(t)}function o(t,r){return function(i){return i.lift(new a(t,r))}}var a=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new c(t,this.predicate,this.thisArg))},t}(),c=function(r){function i(t,i,n){var e=r.call(this,t)||this;return e.predicate=i,e.thisArg=n,e.count=0,e}return t(i,r),i.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}r&&this.destination.next(t)},i}(e);export{o as f,s as o};
//# sourceMappingURL=filter-e53d1fcb.js.map
