import{b as t,_ as e,a as n,d as r,g as o}from"../../common/tslib.es6-c4a4947b.js";import"../../common/mergeMap-bab8a89f.js";import"../../common/merge-4c74bf92.js";import"../../common/share-9b53a7f4.js";import{Version as i,ɵlooseIdentical as a,EventEmitter as s,isDevMode as c,NgModule as u,Testability as p,Injector as l,NgZone as h,ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR as d,ComponentFactoryResolver as f,ChangeDetectorRef as g,TestabilityRegistry as m,ApplicationRef as v,SimpleChange as y}from"../core.js";import"../common.js";import{platformBrowser as $}from"../platform-browser.js";
/**
 * @license Angular v8.2.14
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function b(){throw new Error("AngularJS v1.x is not loaded!")}var w=function(){return b()};w.cleanData=b;var j={bootstrap:b,module:b,element:w,injector:b,version:void 0,resumeBootstrap:b,getTestability:b};try{window.hasOwnProperty("angular")&&(j=window.angular)}catch(t){}function C(t){E(t)}function O(){return T()}function E(t){j=t}function T(){return j}var A=function(t,e){return j.module(t,e)},k=function(t){return j.element(t)};k.cleanData=function(t){return j.element.cleanData(t)};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var D="$$angularInjector",_=function(){function t(t,e){this.prop=t,this.attr=e,this.parseBinding()}return t.prototype.parseBinding=function(){this.bracketAttr="["+this.attr+"]",this.parenAttr="("+this.attr+")",this.bracketParenAttr="[("+this.attr+")]";var t=this.attr.charAt(0).toUpperCase()+this.attr.substr(1);this.onAttr="on"+t,this.bindAttr="bind"+t,this.bindonAttr="bindon"+t},t}(),S=/^(?:x|data)[:\-_]/i,I=/[:\-_]+(.)/g;function M(t){return"$"+t+"Controller"}function P(t){return t.overriddenName||t.name||t.toString().split("\n")[0]}function R(t){return t.has("$$angularDowngradedModuleCount")?t.get("$$angularDowngradedModuleCount"):0}function N(t){return t.has("$$angularUpgradeAppType")?t.get("$$angularUpgradeAppType"):0}function B(t){return"function"==typeof t}function U(t,e,n,r){var o=N(t),i=R(t);switch(o){case 1:case 2:if(e)throw new Error("Error while "+r+": 'downgradedModule' unexpectedly specified.\nYou should not specify a value for 'downgradedModule', unless you are downgrading more than one Angular module (via 'downgradeModule()').");break;case 3:if(!e&&i>=2)throw new Error("Error while "+r+": 'downgradedModule' not specified.\nThis application contains more than one downgraded Angular module, thus you need to always specify 'downgradedModule' when downgrading components and injectables.");if(!t.has(n))throw new Error("Error while "+r+": Unable to find the specified downgraded module.\nDid you forget to downgrade an Angular module or include it in the AngularJS application?");break;default:throw new Error("Error while "+r+": Not a valid '@angular/upgrade' application.\nDid you forget to downgrade an Angular module or include it in the AngularJS application?")}}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var F,L={__UNINITIALIZED__:!0},x=function(){function t(t,e,n,r,o,i,a,s,c,u){this.element=t,this.attrs=e,this.scope=n,this.ngModel=r,this.parentInjector=o,this.$injector=i,this.$compile=a,this.$parse=s,this.componentFactory=c,this.wrapCallback=u,this.implementsOnChanges=!1,this.inputChangeCount=0,this.inputChanges={},this.componentScope=n.$new()}return t.prototype.compileContents=function(){var t=this,e=[],n=this.groupProjectableNodes().map((function(e){return t.$compile(e)}));return this.element.empty(),n.forEach((function(n){n(t.scope,(function(n){e.push(n),t.element.append(n)}))})),e},t.prototype.createComponent=function(t){var e=[{provide:"$scope",useValue:this.componentScope}],n=l.create({providers:e,parent:this.parentInjector,name:"DowngradeComponentAdapter"});this.componentRef=this.componentFactory.create(n,t,this.element[0]),this.viewChangeDetector=this.componentRef.injector.get(g),this.changeDetector=this.componentRef.changeDetectorRef,this.component=this.componentRef.instance;var r,o,i=this.componentRef.injector.get(p,null);i&&this.componentRef.injector.get(m).registerApplication(this.componentRef.location.nativeElement,i),r=this.ngModel,o=this.component,r&&function(t){return"function"==typeof t.writeValue&&"function"==typeof t.registerOnChange}(o)&&(r.$render=function(){o.writeValue(r.$viewValue)},o.registerOnChange(r.$setViewValue.bind(r)),"function"==typeof o.registerOnTouched&&o.registerOnTouched(r.$setTouched.bind(r)))},t.prototype.setupInputs=function(t,e){var n=this;void 0===e&&(e=!0);for(var r=this.attrs,o=this.componentFactory.inputs||[],i=function(t){var e,i,s=new _(o[t].propName,o[t].templateName),c=null;if(r.hasOwnProperty(s.attr)){var u=(e=s.prop,i=L,function(t){var r,o;(r=i)===(o=t)||r!=r&&o!=o||(i===L&&(i=t),n.updateInput(e,i,t),i=t)});r.$observe(s.attr,u);var p=a.componentScope.$watch((function(){p(),p=null,u(r[s.attr])}))}else r.hasOwnProperty(s.bindAttr)?c=r[s.bindAttr]:r.hasOwnProperty(s.bracketAttr)?c=r[s.bracketAttr]:r.hasOwnProperty(s.bindonAttr)?c=r[s.bindonAttr]:r.hasOwnProperty(s.bracketParenAttr)&&(c=r[s.bracketParenAttr]);if(null!=c){var l=function(t){return function(e,r){return n.updateInput(t,r,e)}}(s.prop);a.componentScope.$watch(c,l)}},a=this,s=0;s<o.length;s++)i(s);var c=function(){return n.changeDetector.detectChanges()},u=this.componentFactory.componentType.prototype;if(this.implementsOnChanges=!(!u||!u.ngOnChanges),this.componentScope.$watch((function(){return n.inputChangeCount}),this.wrapCallback((function(){if(n.implementsOnChanges){var t=n.inputChanges;n.inputChanges={},n.component.ngOnChanges(t)}n.viewChangeDetector.markForCheck(),e||c()}))),e&&this.componentScope.$watch(this.wrapCallback(c)),t||!e)var p=this.componentScope.$watch((function(){p(),p=null,n.parentInjector.get(v).attachView(n.componentRef.hostView)}))},t.prototype.setupOutputs=function(){for(var t=this.attrs,e=this.componentFactory.outputs||[],n=0;n<e.length;n++){var r=new _(e[n].propName,e[n].templateName),o=r.bindonAttr.substring(0,r.bindonAttr.length-6),i="[("+r.bracketParenAttr.substring(2,r.bracketParenAttr.length-8)+")]";t.hasOwnProperty(o)&&this.subscribeToOutput(r,t[o],!0),t.hasOwnProperty(i)&&this.subscribeToOutput(r,t[i],!0),t.hasOwnProperty(r.onAttr)&&this.subscribeToOutput(r,t[r.onAttr]),t.hasOwnProperty(r.parenAttr)&&this.subscribeToOutput(r,t[r.parenAttr])}},t.prototype.subscribeToOutput=function(t,e,n){var r=this;void 0===n&&(n=!1);var o=this.$parse(e),i=o.assign;if(n&&!i)throw new Error("Expression '"+e+"' is not assignable!");var a=this.component[t.prop];if(!a)throw new Error("Missing emitter '"+t.prop+"' on component '"+P(this.componentFactory.componentType)+"'!");a.subscribe({next:n?function(t){return i(r.scope,t)}:function(t){return o(r.scope,{$event:t})}})},t.prototype.registerCleanup=function(){var t=this,e=this.componentRef.injector.get(m),n=this.wrapCallback((function(){return t.componentRef.destroy()})),r=!1;this.element.on("$destroy",(function(){return t.componentScope.$destroy()})),this.componentScope.$on("$destroy",(function(){r||(r=!0,e.unregisterApplication(t.componentRef.location.nativeElement),n())}))},t.prototype.getInjector=function(){return this.componentRef.injector},t.prototype.updateInput=function(t,e,n){this.implementsOnChanges&&(this.inputChanges[t]=new y(e,n,e===n)),this.inputChangeCount++,this.component[t]=n},t.prototype.groupProjectableNodes=function(){return function(t,e){for(var n=[],r=0,o=t.length;r<o;++r)n[r]=[];for(var i=0,a=e.length;i<a;++i){var s=e[i],c=q(s,t);null!=c&&n[c].push(s)}return n}(this.componentFactory.ngContentSelectors,this.element.contents())},t}();function q(t,e){for(var n=[],r=-1,o=0;o<e.length;o++){var i=e[o];"*"===i?r=o:V(t,i)&&n.push(o)}return n.sort(),-1!==r&&n.push(r),n.length?n[0]:null}function V(t,e){if(!F){var n=Element.prototype;F=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}return t.nodeType===Node.ELEMENT_NODE&&F.call(t,e)}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var z=function(){function t(){this.resolved=!1,this.callbacks=[]}return t.all=function(e){var n=new t,r=0,o=[],i=function(t,i){o[t]=i,++r===e.length&&n.resolve(o)};return e.forEach((function(t,e){var n;(n=t)&&B(n.then)?t.then((function(t){return i(e,t)})):i(e,t)})),n},t.prototype.resolve=function(t){this.resolved||(this.value=t,this.resolved=!0,this.callbacks.forEach((function(e){return e(t)})),this.callbacks.length=0)},t.prototype.then=function(t){this.resolved?t(this.value):this.callbacks.push(t)},t}();
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function W(t){var e=function(e,n,o){var i,a=3===N(n),s=a?function(t){return function(){return h.isInAngularZone()?t():i.run(t)}}:function(t){return t},c=a&&R(n)>1;return{restrict:"E",terminal:!0,require:["?^^$$angularInjector","?ngModel"],link:function(u,p,l,d){var g=d[1],m=d[0],v=void 0,y=!1;if(!m||c){var $=t.downgradedModule||"",b="$$angularLazyModuleRef"+$,w="instantiating component '"+P(t.component)+"'";U(n,$,b,w);var j=n.get(b);v=j.injector||j.promise}var C=m||v,O=v||m,E=function(r,i){var c=i.get(f).resolveComponentFactory(t.component);if(!c)throw new Error("Expecting ComponentFactory for: "+P(t.component));var h=new Z(p),d=new x(p,l,u,g,r,n,e,o,c,s),m=d.compileContents();d.createComponent(m),d.setupInputs(a,t.propagateDigest),d.setupOutputs(),d.registerCleanup(),h.resolve(d.getInjector()),y&&u.$evalAsync((function(){}))},T=a?function(t,e){i||(i=t.get(h)),s((function(){return E(t,e)}))()}:E;z.all([C,O]).then((function(t){var e=r(t,2),n=e[0],o=e[1];return T(n,o)})),y=!0}}};return e.$inject=["$compile","$injector","$parse"],e}var Z=function(e){function n(t){var n=e.call(this)||this;return n.element=t,n.injectorKey=M(D),t.data(n.injectorKey,n),n}return t(n,e),n.prototype.resolve=function(t){this.element.data(this.injectorKey,t),this.element=null,e.prototype.resolve.call(this,t)},n}(z);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function J(t,e){void 0===e&&(e="");var n=function(n){var r=""+D+e,o=B(t)?P(t):String(t);return U(n,e,r,"instantiating injectable '"+o+"'"),n.get(r).get(t)};return n.$inject=["$injector"],n}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var H=new i("8.2.14"),K=null;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function G(t){K=t}function Y(){if(!K)throw new Error("Trying to get the AngularJS injector before it being set.");var t=K;return K=null,t}function X(t){return t.get("$rootScope")}function Q(t){return t.get("$compile")}function tt(t){return t.get("$parse")}var et=[{provide:"$injector",useFactory:Y,deps:[]},{provide:"$rootScope",useFactory:X,deps:["$injector"]},{provide:"$compile",useFactory:Q,deps:["$injector"]},{provide:"$parse",useFactory:tt,deps:["$injector"]}],nt=function(){function t(t){this.modInjector=t}return t.prototype.get=function(t,e){return e===d?e:this.modInjector.get(t,e)},t}(),rt=0;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ot(t){var e,n="$$UpgradeModule.lazy"+ ++rt,r="$$angularLazyModuleRef"+n,o=""+D+n,i=B(t)?t:function(e){return $(e).bootstrapModuleFactory(t)};return A(n,[]).constant("$$angularUpgradeAppType",3).factory(D,[o,it]).factory(o,(function(){if(!e)throw new Error("Trying to get the Angular injector before bootstrapping the corresponding Angular module.");return e})).factory("$$angularLazyModuleRef",[r,it]).factory(r,["$injector",function(t){G(t);var n={promise:i(et).then((function(t){return(e=n.injector=new nt(t.injector)).get("$injector"),e}))};return n}]).config(["$injector","$provide",function(t,e){e.constant("$$angularDowngradedModuleCount",R(t)+1)}]),n}function it(t){return t}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var at=/^(\^\^?)?(\?)?(\^\^?)?/,st=function(){function t(e,n,r,o){this.injector=e,this.name=n,this.$injector=e.get("$injector"),this.$compile=this.$injector.get("$compile"),this.$controller=this.$injector.get("$controller"),this.element=r.nativeElement,this.$element=k(this.element),this.directive=o||t.getDirective(this.$injector,n)}return t.getDirective=function(t,e){var n=t.get(e+"Directive");if(n.length>1)throw new Error("Only support single directive definition for: "+e);var r=n[0];return r.compile&&!r.link&&pt(e,"compile"),r.replace&&pt(e,"replace"),r.terminal&&pt(e,"terminal"),r},t.getTemplate=function(t,e,n,r){if(void 0===n&&(n=!1),void 0!==e.template)return ct(e.template,r);if(e.templateUrl){var o=t.get("$templateCache"),i=ct(e.templateUrl,r),a=o.get(i);if(void 0!==a)return a;if(!n)throw new Error("loading directive templates asynchronously is not supported");return new Promise((function(e,n){t.get("$httpBackend")("GET",i,null,(function(t,r){200===t?e(o.put(i,r)):n("GET component template from '"+i+"' returned '"+t+": "+r+"'")}))}))}throw new Error("Directive '"+e.name+"' is not a component, it is missing template.")},t.prototype.buildController=function(t,e){var n={$scope:e,$element:this.$element},r=this.$controller(t,n,null,this.directive.controllerAs);return this.$element.data(M(this.directive.name),r),r},t.prototype.compileTemplate=function(e){return void 0===e&&(e=t.getTemplate(this.$injector,this.directive,!1,this.$element)),this.compileHtml(e)},t.prototype.onDestroy=function(t,e){e&&B(e.$onDestroy)&&e.$onDestroy(),t.$destroy(),k.cleanData([this.element]),k.cleanData(this.element.querySelectorAll("*"))},t.prototype.prepareTransclusion=function(){var t=this,e=this.directive.transclude,n=this.extractChildNodes(),r=function(t,e){return e(o,t=t||{$destroy:function(){}})},o=n;if(e){var i=Object.create(null);if("object"==typeof e){o=[];var a=Object.create(null),s=Object.create(null);Object.keys(e).forEach((function(t){var n=e[t],r="?"===n.charAt(0);n=r?n.substring(1):n,a[n]=t,i[t]=null,s[t]=r})),n.forEach((function(t){var e,n=a[(e=t.nodeName.toLowerCase(),e.replace(S,"").replace(I,(function(t,e){return e.toUpperCase()})))];n?(s[n]=!0,i[n]=i[n]||[],i[n].push(t)):o.push(t)})),Object.keys(s).forEach((function(e){if(!s[e])throw new Error("Required transclusion slot '"+e+"' on directive: "+t.name)})),Object.keys(i).filter((function(t){return i[t]})).forEach((function(t){var e=i[t];i[t]=function(t,n){return n(e,t)}}))}r.$$slots=i,o.forEach((function(t){t.nodeType!==Node.TEXT_NODE||t.nodeValue||(t.nodeValue="‌")}))}return r},t.prototype.resolveAndBindRequiredControllers=function(t){var e=this.getDirectiveRequire(),n=this.resolveRequire(e);if(t&&this.directive.bindToController&&ut(e)){var r=n;Object.keys(r).forEach((function(e){t[e]=r[e]}))}return n},t.prototype.compileHtml=function(t){return this.element.innerHTML=t,this.$compile(this.element.childNodes)},t.prototype.extractChildNodes=function(){for(var t,e=[];t=this.element.firstChild;)this.element.removeChild(t),e.push(t);return e},t.prototype.getDirectiveRequire=function(){var t=this.directive.require||this.directive.controller&&this.directive.name;return ut(t)&&Object.keys(t).forEach((function(e){var n=t[e],r=n.match(at);n.substring(r[0].length)||(t[e]=r[0]+e)})),t},t.prototype.resolveRequire=function(t,e){var n=this;if(t){if(Array.isArray(t))return t.map((function(t){return n.resolveRequire(t)}));if("object"==typeof t){var r={};return Object.keys(t).forEach((function(e){return r[e]=n.resolveRequire(t[e])})),r}if("string"==typeof t){var o=t.match(at),i=o[1]||o[3],a=t.substring(o[0].length),s=!!o[2],c=!!i,u="^^"===i,p=M(a),l=u?this.$element.parent():this.$element,h=c?l.inheritedData(p):l.data(p);if(!h&&!s)throw new Error("Unable to find required '"+t+"' in upgraded directive '"+this.name+"'.");return h}throw new Error("Unrecognized 'require' syntax on upgraded directive '"+this.name+"': "+t)}return null},t}();function ct(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return B(t)?t.apply(void 0,o(e)):t}function ut(t){return t&&!Array.isArray(t)&&"object"==typeof t}function pt(t,e){throw new Error("Upgraded directive '"+t+"' contains unsupported feature: '"+e+"'.")}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var lt={__UNINITIALIZED__:!0},ht=function(){this.twoWayBoundProperties=[],this.twoWayBoundLastValues=[],this.expressionBoundProperties=[],this.propertyToOutputMap={}},dt=function(){function t(t,e,n){this.name=t,this.elementRef=e,this.injector=n,this.helper=new st(n,t,e),this.$injector=this.helper.$injector,this.element=this.helper.element,this.$element=this.helper.$element,this.directive=this.helper.directive,this.bindings=this.initializeBindings(this.directive);var r=n.get("$scope");this.$componentScope=r.$new(!!this.directive.scope),this.initializeOutputs()}return t.prototype.ngOnInit=function(){var t=this,e=this.helper.prepareTransclusion(),n=this.helper.compileTemplate(),r=this.directive.controller,o=this.directive.bindToController;if(r)this.controllerInstance=this.helper.buildController(r,this.$componentScope);else if(o)throw new Error("Upgraded directive '"+this.directive.name+"' specifies 'bindToController' but no controller.");this.bindingDestination=o?this.controllerInstance:this.$componentScope,this.bindOutputs();var i=this.helper.resolveAndBindRequiredControllers(this.controllerInstance);if(this.pendingChanges&&(this.forwardChanges(this.pendingChanges),this.pendingChanges=null),this.controllerInstance&&B(this.controllerInstance.$onInit)&&this.controllerInstance.$onInit(),this.controllerInstance&&B(this.controllerInstance.$doCheck)){var a=function(){return t.controllerInstance.$doCheck()};this.unregisterDoCheckWatcher=this.$componentScope.$parent.$watch(a),a()}var s=this.directive.link,c="object"==typeof s&&s.pre,u="object"==typeof s?s.post:s;c&&c(this.$componentScope,this.$element,"NOT_SUPPORTED",i,"NOT_SUPPORTED"),n(this.$componentScope,null,{parentBoundTranscludeFn:e}),u&&u(this.$componentScope,this.$element,"NOT_SUPPORTED",i,"NOT_SUPPORTED"),this.controllerInstance&&B(this.controllerInstance.$postLink)&&this.controllerInstance.$postLink()},t.prototype.ngOnChanges=function(t){this.bindingDestination?this.forwardChanges(t):this.pendingChanges=t},t.prototype.ngDoCheck=function(){var t=this,e=this.bindings.twoWayBoundProperties,n=this.bindings.twoWayBoundLastValues,r=this.bindings.propertyToOutputMap;e.forEach((function(e,o){var i=t.bindingDestination[e],s=n[o];if(!a(i,s)){var c=r[e];t[c].emit(i),n[o]=i}}))},t.prototype.ngOnDestroy=function(){B(this.unregisterDoCheckWatcher)&&this.unregisterDoCheckWatcher(),this.helper.onDestroy(this.$componentScope,this.controllerInstance)},t.prototype.initializeBindings=function(t){var e=this,n="object"==typeof t.bindToController;if(n&&Object.keys(t.scope).length)throw new Error("Binding definitions on scope and controller at the same time is not supported.");var r=n?t.bindToController:t.scope,o=new ht;return"object"==typeof r&&Object.keys(r).forEach((function(t){var n=r[t].charAt(0);switch(n){case"@":case"<":break;case"=":o.twoWayBoundProperties.push(t),o.twoWayBoundLastValues.push(lt),o.propertyToOutputMap[t]=t+"Change";break;case"&":o.expressionBoundProperties.push(t),o.propertyToOutputMap[t]=t;break;default:var i=JSON.stringify(r);throw new Error("Unexpected mapping '"+n+"' in '"+i+"' in '"+e.name+"' directive.")}})),o},t.prototype.initializeOutputs=function(){var t=this;this.bindings.twoWayBoundProperties.concat(this.bindings.expressionBoundProperties).forEach((function(e){var n=t.bindings.propertyToOutputMap[e];t[n]=new s}))},t.prototype.bindOutputs=function(){var t=this;this.bindings.expressionBoundProperties.forEach((function(e){var n=t.bindings.propertyToOutputMap[e],r=t[n];t.bindingDestination[e]=function(t){return r.emit(t)}}))},t.prototype.forwardChanges=function(t){var e=this;Object.keys(t).forEach((function(n){return e.bindingDestination[n]=t[n].currentValue})),B(this.bindingDestination.$onChanges)&&this.bindingDestination.$onChanges(t)},t}(),ft=function(){function t(t,e){this.ngZone=e,this.injector=new nt(t)}return t.prototype.bootstrap=function(t,e,n){var r=this;void 0===e&&(e=[]);var i="$$UpgradeModule.init",a=(A(i,[]).constant("$$angularUpgradeAppType",2).value(D,this.injector).factory("$$angularLazyModuleRef",[D,function(t){return{injector:t}}]).config(["$provide","$injector",function(t,e){e.has("$$testability")&&t.decorator("$$testability",["$delegate",function(t){var e=t.whenStable,n=r.injector,o=function(r){e.call(t,(function(){var e=n.get(p);e.isStable()?r():e.whenStable(o.bind(t,r))}))};return t.whenStable=o,t}]),e.has("$interval")&&t.decorator("$interval",["$delegate",function(t){var e=function(e,n,i,a){for(var s=[],c=4;c<arguments.length;c++)s[c-4]=arguments[c];return r.ngZone.runOutsideAngular((function(){return t.apply(void 0,o([function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];setTimeout((function(){r.ngZone.run((function(){return e.apply(void 0,o(t))}))}))},n,i,a],s))}))};return e.cancel=t.cancel,e}])}]).run(["$injector",function(e){r.$injector=e,G(e),r.injector.get("$injector"),k(t).data(M(D),r.injector),setTimeout((function(){var t=e.get("$rootScope"),n=r.ngZone.onMicrotaskEmpty.subscribe((function(){return t.$$phase?(c()&&console.warn("A digest was triggered while one was already in progress. This may mean that something is triggering digests outside the Angular zone."),t.$evalAsync()):t.$digest()}));t.$on("$destroy",(function(){n.unsubscribe()}))}),0)}]),A("$$UpgradeModule",[i].concat(e))),s=window.angular;if(s.resumeBootstrap=void 0,this.ngZone.run((function(){!function(t,e,n){j.bootstrap(t,e,n)}(t,[a.name],n)})),s.resumeBootstrap){var u=s.resumeBootstrap,l=this.ngZone;s.resumeBootstrap=function(){var t=this,e=arguments;return s.resumeBootstrap=u,l.run((function(){return s.resumeBootstrap.apply(t,e)}))}}},t=e([u({providers:[et]}),n("design:paramtypes",[l,h])],t)}();export{dt as UpgradeComponent,ft as UpgradeModule,H as VERSION,W as downgradeComponent,J as downgradeInjectable,ot as downgradeModule,T as getAngularJSGlobal,O as getAngularLib,E as setAngularJSGlobal,C as setAngularLib,Y as ɵangular_packages_upgrade_static_static_a,X as ɵangular_packages_upgrade_static_static_b,Q as ɵangular_packages_upgrade_static_static_c,tt as ɵangular_packages_upgrade_static_static_d,et as ɵangular_packages_upgrade_static_static_e};
//# sourceMappingURL=static.js.map
