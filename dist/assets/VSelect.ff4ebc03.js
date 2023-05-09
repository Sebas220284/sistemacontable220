import{m as A,f as L,V as M}from"./VTextField.1b37a66e.js";import{m as E,u as K,V as j,a as D}from"./VList.3fcbcdee.js";import{W as z,$ as H,K as R,L as W,au as q,av as G,k as I,M as x,O as P,R as J,p as s,F as Q,U as C,S as X,z as Y,aD as Z}from"./index.1bb36a93.js";import{f as ee}from"./forwardRefs.c003b6b8.js";import{V as le}from"./scopeId.cb53369a.js";import{V as ae}from"./VMenu.a89a99b8.js";import{V as te}from"./VCheckboxBtn.169cdc89.js";import{V as ne}from"./VChip.588e72fe.js";const oe=z({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:H,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,...E({itemChildren:!1})},"v-select"),me=R()({name:"VSelect",props:{...oe(),...W(A({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...q({transition:{component:le}})},emits:{"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,T){let{slots:n}=T;const{t:w}=G(),k=I(),r=x(l,"menu"),{items:p,transformIn:B,transformOut:S}=K(l),u=x(l,"modelValue",[],e=>B(Z(e)),e=>{var t;const a=S(e);return l.multiple?a:(t=a[0])!=null?t:null}),y=P(()=>u.value.map(e=>p.value.find(a=>a.value===e.value)||e)),g=P(()=>y.value.map(e=>e.props.value)),c=I();function F(e){u.value=[],l.openOnClear&&(r.value=!0)}function _(){l.hideNoData&&!p.value.length||l.readonly||(r.value=!r.value)}function O(e){if(!l.readonly){if(["Enter","ArrowDown"," "].includes(e.key)&&(e.preventDefault(),r.value=!0),["Escape","Tab"].includes(e.key)&&(r.value=!1),e.key==="ArrowDown"){var a;(a=c.value)==null||a.focus("next")}else if(e.key==="ArrowUp"){var t;e.preventDefault(),(t=c.value)==null||t.focus("prev")}else if(e.key==="Home"){var d;e.preventDefault(),(d=c.value)==null||d.focus("first")}else if(e.key==="End"){var v;e.preventDefault(),(v=c.value)==null||v.focus("last")}}}function V(e){if(l.multiple){const a=g.value.findIndex(t=>t===e.value);if(a===-1)u.value=[...u.value,e];else{const t=[...u.value];t.splice(a,1),u.value=t}}else u.value=[e],r.value=!1}function b(e){var a;(a=c.value)!=null&&a.$el.contains(e.relatedTarget)||(r.value=!1)}function $(e){if(e.relatedTarget==null){var a;(a=k.value)==null||a.focus()}}return J(()=>{const e=!!(l.chips||n.chip),[a]=L(l);return s(M,C({ref:k},a,{modelValue:u.value.map(t=>t.props.value).join(", "),"onUpdate:modelValue":t=>{t==null&&(u.value=[])},validationValue:u.externalValue,dirty:u.value.length>0,class:["v-select",{"v-select--active-menu":r.value,"v-select--chips":!!l.chips,[`v-select--${l.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length}],appendInnerIcon:l.menuIcon,readonly:!0,"onClick:clear":F,"onClick:control":_,onBlur:b,onKeydown:O}),{...n,default:()=>{var t,d,v;return s(Q,null,[s(ae,C({modelValue:r.value,"onUpdate:modelValue":o=>r.value=o,activator:"parent",contentClass:"v-select__content",eager:l.eager,openOnClick:!1,closeOnContentClick:!1,transition:l.transition},l.menuProps),{default:()=>[s(j,{ref:c,selected:g.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusout:$},{default:()=>{var o;return[!p.value.length&&!l.hideNoData&&((o=(t=n["no-data"])==null?void 0:t.call(n))!=null?o:s(D,{title:w(l.noDataText)},null)),(d=n["prepend-item"])==null?void 0:d.call(n),p.value.map((i,h)=>{var m;var f;return(m=(f=n.item)==null?void 0:f.call(n,{item:i,index:h,props:C(i.props,{onClick:()=>V(i)})}))!=null?m:s(D,C({key:h},i.props,{onClick:()=>V(i)}),{prepend:N=>{let{isSelected:U}=N;return l.multiple&&!l.hideSelected?s(te,{modelValue:U,ripple:!1},null):void 0}})}),(v=n["append-item"])==null?void 0:v.call(n)]}})]}),y.value.map((o,i)=>{function h(m){m.stopPropagation(),m.preventDefault(),V(o)}const f={"onClick:close":h,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:o.value,class:"v-select__selection"},[e?s(X,{defaults:{VChip:{closable:l.closableChips,size:"small",text:o.title}}},{default:()=>[n.chip?n.chip({item:o,index:i,props:f}):s(ne,f,null)]}):n.selection?n.selection({item:o,index:i}):s("span",{class:"v-select__selection-text"},[o.title,l.multiple&&i<y.value.length-1&&s("span",{class:"v-select__selection-comma"},[Y(",")])])])})])}})}),ee({menu:r,select:V},k)}});export{me as V};
