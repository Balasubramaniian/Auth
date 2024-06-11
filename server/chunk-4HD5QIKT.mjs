import './polyfills.server.mjs';
import{$ as Ce,A as d,B as k,C as p,E as ce,K as he,L as ee,N as fe,O as pe,P as me,Q as ge,T as ve,X as ye,_ as _e,a as se,b as ae,c as le,d as N,e as O,f as x,g as v,h as b,i as f,j as P,k as c,l as Z,m as ue,n as X,o as M,p as Y,q as a,r as K,s as y,t as de,u as J,v as Q,w as l,x as u,y as C,z as A}from"./chunk-NOZ2VYXK.mjs";import{a as h,b as _}from"./chunk-VVCT4QZE.mjs";var Ve=(()=>{let e=class e{constructor(){this.title="Auth"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:11,vars:0,consts:[[1,"nav","nav-tabs"],[1,"nav-item"],["routerLink","/"],["routerLink","/form"],["routerLink","/login"]],template:function(r,o){r&1&&(l(0,"ul",0)(1,"li",1)(2,"a",2),d(3,"Home"),u()(),l(4,"li",1)(5,"a",3),d(6,"Form"),u()(),l(7,"li",1)(8,"a",4),d(9,"Login"),u()()(),C(10,"router-outlet"))},dependencies:[ye,_e],styles:["a[_ngcontent-%COMP%]{padding:10px;text-decoration:none}"]});let t=e;return t})();var De=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-home"]],standalone:!0,features:[p],decls:2,vars:0,template:function(r,o){r&1&&(l(0,"p"),d(1,"home works!"),u())}});let t=e;return t})();var Se=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(K),a(X))},e.\u0275dir=c({type:e});let t=e;return t})(),lt=(()=>{let e=class e extends Se{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ue(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[y]});let t=e;return t})(),Ne=new v("");var ut={provide:Ne,useExisting:O(()=>W),multi:!0};function dt(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ct=new v(""),W=(()=>{let e=class e extends Se{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(K),a(X),a(ct,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&A("input",function(g){return o._handleInput(g.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(g){return o._compositionEnd(g.target.value)})},features:[k([ut]),y]});let t=e;return t})();function m(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Oe(t){return t!=null&&typeof t.length=="number"}var xe=new v(""),Pe=new v(""),ht=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,w=class{static min(e){return ft(e)}static max(e){return pt(e)}static required(e){return mt(e)}static requiredTrue(e){return gt(e)}static email(e){return vt(e)}static minLength(e){return yt(e)}static maxLength(e){return _t(e)}static pattern(e){return Ct(e)}static nullValidator(e){return ke(e)}static compose(e){return Ue(e)}static composeAsync(e){return Le(e)}};function ft(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function pt(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function mt(t){return m(t.value)?{required:!0}:null}function gt(t){return t.value===!0?null:{required:!0}}function vt(t){return m(t.value)||ht.test(t.value)?null:{email:!0}}function yt(t){return e=>m(e.value)||!Oe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function _t(t){return e=>Oe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ct(t){if(!t)return ke;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(m(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function ke(t){return null}function Ge(t){return t!=null}function Te(t){return ce(t)?se(t):t}function je(t){let e={};return t.forEach(n=>{e=n!=null?h(h({},e),n):e}),Object.keys(e).length===0?null:e}function Re(t,e){return e.map(n=>n(t))}function Vt(t){return!t.validate}function Be(t){return t.map(e=>Vt(e)?e:n=>e.validate(n))}function Ue(t){if(!t)return null;let e=t.filter(Ge);return e.length==0?null:function(n){return je(Re(n,e))}}function He(t){return t!=null?Ue(Be(t)):null}function Le(t){if(!t)return null;let e=t.filter(Ge);return e.length==0?null:function(n){let i=Re(n,e).map(Te);return le(i).pipe(ae(je))}}function $e(t){return t!=null?Le(Be(t)):null}function be(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function We(t){return t._rawValidators}function qe(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function j(t,e){return Array.isArray(t)?t.includes(e):t===e}function Me(t,e){let n=te(e);return te(t).forEach(r=>{j(n,r)||n.push(r)}),n}function Ae(t,e){return te(e).filter(n=>!j(t,n))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=He(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},D=class extends R{get formDirective(){return null}get path(){return null}},I=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},B=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vi=_(h({},Dt),{"[class.ng-submitted]":"isSubmitted"}),ze=(()=>{let e=class e extends B{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(I,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})(),Ze=(()=>{let e=class e extends B{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(D,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[y]});let t=e;return t})();var E="VALID",T="INVALID",V="PENDING",F="DISABLED";function Xe(t){return(q(t)?t.validators:t)||null}function bt(t){return Array.isArray(t)?He(t):t||null}function Ye(t,e){return(q(e)?e.asyncValidators:t)||null}function Mt(t){return Array.isArray(t)?$e(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function At(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new N(1e3,"");if(!i[n])throw new N(1001,"")}function Et(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var U=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===T}get pending(){return this.status==V}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Me(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(i=>{i.disable(_(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(i=>{i.enable(_(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let n=Te(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(T)?T:E}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}},H=class extends U{constructor(e,n,i){super(Xe(n),Ye(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Et(this,!0,e),Object.keys(e).forEach(i=>{At(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ie=new v("CallSetDisabledState",{providedIn:"root",factory:()=>z}),z="always";function Ft(t,e){return[...e.path,t]}function Ee(t,e,n=z){ne(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),It(t,e),Nt(t,e),St(t,e),wt(t,e)}function Fe(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function wt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ne(t,e){let n=We(t);e.validator!==null?t.setValidators(be(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=qe(t);e.asyncValidator!==null?t.setAsyncValidators(be(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=We(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=qe(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return L(e._rawValidators,i),L(e._rawAsyncValidators,i),n}function It(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ke(t,e)})}function St(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ke(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ke(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Nt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ot(t,e){t==null,ne(t,e)}function xt(t,e){return $(t,e)}function Pt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function kt(t){return Object.getPrototypeOf(t.constructor)===lt}function Gt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Tt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===W?n=o:kt(o)?i=o:r=o}),r||i||n||null}function jt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function we(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var S=class extends U{constructor(e=null,n,i){super(Xe(n),Ye(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){we(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){we(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt=t=>t instanceof S;var Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Qe=new v("");var Bt={provide:D,useExisting:O(()=>re)},re=(()=>{let e=class e extends D{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new M,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Ee(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Fe(i.control||null,i,!1),jt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Gt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Fe(r||null,i),Rt(o)&&(Ee(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Ot(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&xt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ne(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(xe,10),a(Pe,10),a(ie,8))},e.\u0275dir=c({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&A("submit",function(g){return o.onSubmit(g)})("reset",function(){return o.onReset()})},inputs:{form:[b.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[k([Bt]),y,Z]});let t=e;return t})();var Ut={provide:I,useExisting:O(()=>oe)},oe=(()=>{let e=class e extends I{set isDisabled(i){}constructor(i,r,o,s,g){super(),this._ngModelWarningConfig=g,this._added=!1,this.name=null,this.update=new M,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Tt(this,s)}ngOnChanges(i){this._added||this._setUpControl(),Pt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Ft(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(D,13),a(xe,10),a(Pe,10),a(Ne,10),a(Qe,8))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""]],inputs:{name:[b.None,"formControlName","name"],isDisabled:[b.None,"disabled","isDisabled"],model:[b.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[k([Ut]),y,Z]});let t=e;return t})();var et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=x({});let t=e;return t})();var tt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ie,useValue:i.callSetDisabledState??z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=x({imports:[et]});let t=e;return t})(),it=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Qe,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ie,useValue:i.callSetDisabledState??z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=x({imports:[et]});let t=e;return t})();function Lt(t,e){t&1&&(l(0,"span",12),d(1,"Mail id is Not Valid"),u())}var nt=(()=>{let e=class e{constructor(){this.form=new H({name:new S(null),age:new S,_mail:new S(" ",[w.required,w.maxLength(5)]),get mail(){return this._mail},set mail(i){this._mail=i}})}ngOnInit(){}Submit(){console.log(this.form.errors)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-form"]],standalone:!0,features:[p],decls:16,vars:2,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-5"],[3,"ngSubmit","formGroup"],["for","name",1,"form-label"],["type","text","name","name","id","name","formControlName","name",1,"form-control"],["for","age",1,"form-label"],["type","text","name","age","id","age","formControlName","age",1,"form-control"],["for","mail",1,"form-label"],["type","text","name","mail","id","mail","formControlName","mail",1,"form-control"],["class","help-block",4,"ngIf"],[1,"btn","btn-success","mt-2"],[1,"help-block"]],template:function(r,o){if(r&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),A("ngSubmit",function(){return o.Submit()}),l(4,"label",4),d(5,"Name: "),u(),C(6,"input",5),l(7,"label",6),d(8,"Age: "),u(),C(9,"input",7),l(10,"label",8),d(11,"Mail: "),u(),C(12,"input",9),de(13,Lt,2,0,"span",10),l(14,"button",11),d(15,"Submit"),u()()()()()),r&2){let s;Y(3),J("formGroup",o.form),Y(10),J("ngIf",!((s=o.form.get("mail"))!=null&&s.valid)&&((s=o.form.get("mail"))==null?null:s.touched))}},dependencies:[tt,Je,W,ze,Ze,it,re,oe,pe,fe]});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=f({type:e,selectors:[["app-login"]],standalone:!0,features:[p],decls:2,vars:0,template:function(r,o){r&1&&(l(0,"p"),d(1,"login works!"),u())}});let t=e;return t})();var ot=[{path:"",component:De},{path:"form",component:nt},{path:"login",component:rt}];var st={providers:[Ce(ot),ge()]};var $t={providers:[ve()]},at=he(st,$t);var Wt=()=>me(Ve,at),Bi=Wt;export{Bi as a};