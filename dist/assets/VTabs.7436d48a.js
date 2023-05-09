import{bM as ne,K as oe,a0 as F,ad as le,ag as ye,b2 as ae,av as Se,k as S,O as y,C as se,Q as xe,p as m,R as O,a2 as ie,an as Ce,aB as Te,b1 as we,Z as q,P as ke,a3 as Be,ay as ze,az as D,aG as _e,$ as Y,bN as Ie,bx as Q,aO as Ve,V as Z,a$ as Ee,ac as Re,ap as $e,a4 as pe,U as ue,a8 as Me,M as Pe,aj as Ae,ar as He,a1 as $,as as Oe}from"./index.1bb36a93.js";import{u as re,V as U,a as ce,b as Xe,m as Ye}from"./VBtn.22d55266.js";import{m as Fe,u as Le}from"./lazy.6b2881de.js";import{a as We,s as Ge}from"./easing.36b781ab.js";import{c as J}from"./index.5010adc7.js";const je=e=>{const{touchstartX:n,touchendX:o,touchstartY:t,touchendY:r}=e,s=.5,l=16;e.offsetX=o-n,e.offsetY=r-t,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&o<n-l&&e.left(e),e.right&&o>n+l&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<t-l&&e.up(e),e.down&&r>t+l&&e.down(e))};function De(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function Ue(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),je(n)}function qe(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>De(o,n),touchend:o=>Ue(o,n),touchmove:o=>qe(o,n)}}function Ne(e,n){var i,c;var o;const t=n.value,r=t!=null&&t.parent?e.parentElement:e,s=(i=t==null?void 0:t.options)!=null?i:{passive:!0},l=(o=n.instance)==null?void 0:o.$.uid;if(!r||!l)return;const a=Ke(n.value);r._touchHandlers=(c=r._touchHandlers)!=null?c:Object.create(null),r._touchHandlers[l]=a,ne(a).forEach(v=>{r.addEventListener(v,a[v],s)})}function Qe(e,n){var o,t;const r=(o=n.value)!=null&&o.parent?e.parentElement:e,s=(t=n.instance)==null?void 0:t.$.uid;if(!(r!=null&&r._touchHandlers)||!s)return;const l=r._touchHandlers[s];ne(l).forEach(a=>{r.removeEventListener(a,l[a])}),delete r._touchHandlers[s]}const ve={mounted:Ne,unmounted:Qe},Ze=ve,de=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),ct=oe()({name:"VWindow",directives:{Touch:ve},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...F(),...le()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{themeClasses:t}=ye(e),{isRtl:r}=ae(),{t:s}=Se(),l=re(e,fe),a=S(),i=y(()=>r.value?!e.reverse:e.reverse),c=S(!1),v=y(()=>{const f=e.direction==="vertical"?"y":"x",T=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${f}${T}-transition`}),x=S(0),C=S(void 0),h=y(()=>l.items.value.findIndex(f=>l.selected.value.includes(f.id)));se(h,(f,b)=>{const T=l.items.value.length,z=T-1;T<=2?c.value=f<b:f===z&&b===0?c.value=!0:f===0&&b===z?c.value=!1:c.value=f<b}),xe(de,{transition:v,isReversed:c,transitionCount:x,transitionHeight:C,rootRef:a});const g=y(()=>e.continuous||h.value!==0),I=y(()=>e.continuous||h.value!==l.items.value.length-1);function E(){g.value&&l.prev()}function V(){I.value&&l.next()}const k=y(()=>{const f=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:l.prev,ariaLabel:s("$vuetify.carousel.prev")};f.push(g.value?o.prev?o.prev({props:b}):m(U,b,null):m("div",null,null));const T={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:l.next,ariaLabel:s("$vuetify.carousel.next")};return f.push(I.value?o.next?o.next({props:T}):m(U,T,null):m("div",null,null)),f}),B=y(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?E():V()},right:()=>{i.value?V():E()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return O(()=>{var f,b;return ie(m(e.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>[m("div",{class:"v-window__container",style:{height:C.value}},[(f=o.default)==null?void 0:f.call(o,{group:l}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(b=o.additional)==null?void 0:b.call(o,{group:l})]}),[[Ce("touch"),B.value]])}),{group:l}}});function Je(){const e=S(!1);return Te(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:we(e)}}const vt=q({name:"VWindowItem",directives:{Touch:Ze},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ce(),...Fe()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:o}=n;const t=ke(de),r=Xe(e,fe),{isBooted:s}=Je();if(!t||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=S(!1),a=y(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function i(){!l.value||!t||(l.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function c(){if(!(l.value||!t)){if(l.value=!0,t.transitionCount.value===0){var g;t.transitionHeight.value=D((g=t.rootRef.value)==null?void 0:g.clientHeight)}t.transitionCount.value+=1}}function v(){i()}function x(g){!l.value||_e(()=>{!a.value||!l.value||!t||(t.transitionHeight.value=D(g.clientHeight))})}const C=y(()=>{const g=t.isReversed.value?e.reverseTransition:e.transition;return a.value?{name:typeof g!="string"?t.transition.value:g,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:v,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:v,onEnter:x}:!1}),{hasContent:h}=Le(e,r.isSelected);return O(()=>{var g;return m(ze,{transition:s.value&&C.value},{default:()=>[ie(m("div",{class:["v-window-item",r.selectedClass.value]},[h.value&&((g=o.default)==null?void 0:g.call(o))]),[[Be,r.isSelected.value]])]})}),{}}});function ee(e){const o=Math.abs(e);return Math.sign(e)*(o/((1/.501-2)*(1-o)+1))}function te(e){let{selectedElement:n,containerSize:o,contentSize:t,isRtl:r,currentScrollOffset:s,isHorizontal:l}=e;const a=l?n.clientWidth:n.clientHeight,i=l?n.offsetLeft:n.offsetTop,c=r&&l?t-i-a:i,v=o+s,x=a+c,C=a*.4;return c<=s?s=Math.max(c-C,0):v<=x&&(s=Math.min(s-(v-x-C),t-o)),s}function et(e){let{selectedElement:n,containerSize:o,contentSize:t,isRtl:r,isHorizontal:s}=e;const l=s?n.clientWidth:n.clientHeight,a=s?n.offsetLeft:n.offsetTop,i=r&&s?t-a-l/2-o/2:a+l/2-o/2;return Math.min(t-o,Math.max(0,i))}const tt=Symbol.for("vuetify:v-slide-group"),nt=oe()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:tt},nextIcon:{type:Y,default:"$next"},prevIcon:{type:Y,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...F(),...Ye({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{isRtl:t}=ae(),{mobile:r}=Ie(),s=re(e,e.symbol),l=S(!1),a=S(0),i=S(0),c=S(0),v=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:C}=Q(),{resizeRef:h,contentRect:g}=Q(),I=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[0]):-1),E=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[s.selected.value.length-1]):-1);if(Ve){let u=-1;se(()=>[s.selected.value,C.value,g.value,v.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(C.value&&g.value){const d=v.value?"width":"height";i.value=C.value[d],c.value=g.value[d],l.value=i.value+1<c.value}if(I.value>=0&&h.value){const d=h.value.children[E.value];I.value===0||!l.value?a.value=0:e.centerActive?a.value=et({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,isHorizontal:v.value}):l.value&&(a.value=te({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value}))}})})}const V=S(!1);let k=0,B=0;function f(u){const d=v.value?"clientX":"clientY";B=(t.value&&v.value?-1:1)*a.value,k=u.touches[0][d],V.value=!0}function b(u){if(!l.value)return;const d=v.value?"clientX":"clientY",_=t.value&&v.value?-1:1;a.value=_*(B+k-u.touches[0][d])}function T(u){const d=c.value-i.value;a.value<0||!l.value?a.value=0:a.value>=d&&(a.value=d),V.value=!1}function z(){!x.value||(x.value[v.value?"scrollLeft":"scrollTop"]=0)}const p=S(!1);function L(u){if(p.value=!0,!(!l.value||!h.value)){for(const d of u.composedPath())for(const _ of h.value.children)if(_===d){a.value=te({selectedElement:_,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value});return}}}function R(u){p.value=!1}function W(u){var d;!p.value&&!(u.relatedTarget&&(d=h.value)!=null&&d.contains(u.relatedTarget))&&w()}function K(u){!h.value||(v.value?u.key==="ArrowRight"?w(t.value?"prev":"next"):u.key==="ArrowLeft"&&w(t.value?"next":"prev"):u.key==="ArrowDown"?w("next"):u.key==="ArrowUp"&&w("prev"),u.key==="Home"?w("first"):u.key==="End"&&w("last"))}function w(u){if(!!h.value)if(u){if(u==="next"){var _;const M=(_=h.value.querySelector(":focus"))==null?void 0:_.nextElementSibling;M?M.focus():w("first")}else if(u==="prev"){var A;const M=(A=h.value.querySelector(":focus"))==null?void 0:A.previousElementSibling;M?M.focus():w("last")}else if(u==="first"){var H;(H=h.value.firstElementChild)==null||H.focus()}else if(u==="last"){var N;(N=h.value.lastElementChild)==null||N.focus()}}else{var d;(d=[...h.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(be=>!be.hasAttribute("disabled"))[0])==null||d.focus()}}function P(u){const d=a.value+(u==="prev"?-1:1)*i.value;a.value=Ee(d,0,c.value-i.value)}const X=y(()=>{let u=a.value>c.value-i.value?-(c.value-i.value)+ee(c.value-i.value-a.value):-a.value;a.value<=0&&(u=ee(-a.value));const d=t.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${d*u}px)`,transition:V.value?"none":"",willChange:V.value?"transform":""}}),G=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),j=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return l.value||Math.abs(a.value)>0;case"mobile":return r.value||l.value||Math.abs(a.value)>0;default:return!r.value&&(l.value||Math.abs(a.value)>0)}}),me=y(()=>Math.abs(a.value)>0),ge=y(()=>c.value>Math.abs(a.value)+i.value);return O(()=>{var u,d,_;return m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":l.value}],tabindex:p.value||s.selected.value.length?-1:0,onFocus:W},{default:()=>{var A,H;return[j.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!me.value}],onClick:()=>P("prev")},[(A=(u=o.prev)==null?void 0:u.call(o,G.value))!=null?A:m(J,null,{default:()=>[m(Z,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:z},[m("div",{ref:h,class:"v-slide-group__content",style:X.value,onTouchstartPassive:f,onTouchmovePassive:b,onTouchendPassive:T,onFocusin:L,onFocusout:R,onKeydown:K},[(d=o.default)==null?void 0:d.call(o,G.value)])]),j.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ge.value}],onClick:()=>P("next")},[(H=(_=o.next)==null?void 0:_.call(o,G.value))!=null?H:m(J,null,{default:()=>[m(Z,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})}),{selected:s.selected,scrollTo:P,scrollOffset:a,focus:w}}});const he=Symbol.for("vuetify:v-tabs"),ot=q({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Y,appendIcon:Y,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...F(),...Re(),...ce({selectedClass:"v-tab--selected"}),...le()},setup(e,n){let{slots:o,attrs:t}=n;const{textColorClasses:r,textColorStyles:s}=$e(e,"sliderColor"),l=y(()=>e.direction==="horizontal"),a=S(!1),i=S(),c=S();function v(x){let{value:C}=x;if(a.value=C,C){var h,g;const I=(h=i.value)==null||(g=h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),E=c.value;if(!I||!E)return;const V=getComputedStyle(I).color,k=I.getBoundingClientRect(),B=E.getBoundingClientRect(),f=l.value?"x":"y",b=l.value?"X":"Y",T=l.value?"right":"bottom",z=l.value?"width":"height",p=k[f],L=B[f],R=p>L?k[T]-B[T]:k[f]-B[f],W=Math.sign(R)>0?l.value?"right":"bottom":Math.sign(R)<0?l.value?"left":"top":"center",w=(Math.abs(R)+(Math.sign(R)<0?k[z]:B[z]))/Math.max(k[z],B[z]),P=k[z]/B[z],X=1.5;We(E,{backgroundColor:[V,""],transform:[`translate${b}(${R}px) scale${b}(${P})`,`translate${b}(${R/X}px) scale${b}(${(w-1)/X+1})`,""],transformOrigin:Array(3).fill(W)},{duration:225,easing:Ge})}}return O(()=>{const[x]=pe(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(U,ue({_as:"VTab",symbol:he,ref:i,class:["v-tab"],tabindex:a.value?0:-1,role:"tab","aria-selected":String(a.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},x,t,{"onGroup:selected":v}),{default:()=>[o.default?o.default():e.title,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]})}),{}}});function lt(e){return e?e.map(n=>typeof n=="string"?{title:n,value:n}:n):[]}const dt=q({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...Me(),...F()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const t=Pe(e,"modelValue"),r=y(()=>lt(e.items)),{densityClasses:s}=Ae(e),{backgroundColorClasses:l,backgroundColorStyles:a}=He($(e,"bgColor"));return Oe({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),O(()=>m(nt,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,l.value],style:[{"--v-tabs-height":D(e.height)},a.value],role:"tablist",symbol:he,mandatory:e.mandatory,direction:e.direction},{default:()=>[o.default?o.default():r.value.map(i=>m(ot,ue(i,{key:i.title}),null))]})),{}}});export{dt as V,ot as a,ct as b,vt as c};
