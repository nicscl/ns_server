import{m as t,e}from"./mergeMap-bab8a89f.js";import{R as r}from"./ReplaySubject-432677af.js";import{f as n}from"./filter-e53d1fcb.js";var s=function(){function s(s){this.name="@uirouter/rx",this.deregisterFns=[];var i=new r(1),a=i.pipe(t((function(t){return t.promise.then((function(){return t}),(function(){return null}))})),n((function(t){return!!t}))),u=a.pipe(e((function(t){return t.params()}))),o=new r(1);function f(t,e){var r={currentStates:s.stateRegistry.get(),registered:[],deregistered:[]};t&&(r[t]=e),o.next(r)}this.deregisterFns.push(s.transitionService.onStart({},(function(t){return i.next(t)}))),this.deregisterFns.push(s.stateRegistry.onStatesChanged(f)),f(null,null),Object.assign(s.globals,{start$:i,success$:a,params$:u,states$:o})}return s.prototype.dispose=function(){this.deregisterFns.forEach((function(t){return t()})),this.deregisterFns=[]},s}(),i=s;export{s as U,i as a};
//# sourceMappingURL=ui-router-rx-32f8195c.js.map
