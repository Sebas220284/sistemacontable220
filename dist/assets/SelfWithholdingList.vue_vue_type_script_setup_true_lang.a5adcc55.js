import{d as P,E as U,b9 as z,k as y,C as E,bm as N,O as T,aB as W,o as f,c as h,p as a,w as i,m as e,q as s,bi as V,z as j,a2 as w,a3 as b,F as I,a as M,x as n,V as R}from"./index.1bb36a93.js";import{_ as L}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{u as q}from"./useSelfWithholdingStore.069107ab.js";import{V as G}from"./VSelect.ff4ebc03.js";import{V as O}from"./VSpacer.c965114a.js";import{V as Q}from"./VTextField.1b37a66e.js";import{V as S}from"./VBtn.22d55266.js";import{V as C}from"./VContainer.fea237fc.js";import{V as k}from"./VDivider.5fbe829f.js";import{V as H}from"./VSwitch.372fef15.js";import{V as J}from"./VTable.ef7fd960.js";import{V as K}from"./VPagination.37591e70.js";const X={class:"me-3",style:{width:"80px"}},Y={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Z={style:{width:"10rem"}},ee=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"En uso"),e("th",{scope:"col"},"C\xF3digo"),e("th",{scope:"col"},"Nombre"),e("th",{scope:"col"},"Relacionado con"),e("th",{scope:"col"},"Cuenta contable"),e("th",{scope:"col"},"Medio de pago D. Electr\xF3nico"),e("th",{scope:"col"},"Acciones")])],-1),le={colspan:"7"},ae={class:"text-center",style:{width:"5rem"}},te={class:"text-sm text-disabled"},_e=P({__name:"SelfWithholdingList",setup(oe){U();const _=q(),{selfWithholdings:p,currentPage:o,totalPage:c,links:$,totalData:B,loading:v}=z(_),u=y(10),d=y(""),g=async()=>{};E(o,async()=>{o.value>c.value&&(o.value=c.value)}),N([o,d,u],async()=>{await g()});const x=async(r,t=null)=>{_.typeAction=r},D=async(r,t)=>{},A=T(()=>{const r=p.value.length?(o.value-1)*c.value+1:0,t=p.value.length+(o.value-1)*c.value;return`Mostrando ${r} a ${t} de ${B.value} registros`});return W(async()=>{await g()}),(r,t)=>(f(),h("div",null,[a(C,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:i(()=>[e("div",X,[a(G,{modelValue:s(u),"onUpdate:modelValue":t[0]||(t[0]=l=>V(u)?u.value=l:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),a(O),e("div",Y,[e("div",Z,[a(Q,{modelValue:s(d),"onUpdate:modelValue":t[1]||(t[1]=l=>V(d)?d.value=l:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),a(S,{color:"primary",onClick:t[2]||(t[2]=l=>x("form"))},{default:i(()=>[j(" Agregar ")]),_:1})])]),_:1}),a(k),a(J,{class:"text-no-wrap"},{default:i(()=>[ee,e("tbody",null,[w(e("tr",null,[e("td",le,[a(L)])],512),[[b,s(v)]]),(f(!0),h(I,null,M(s(p),(l,F)=>w((f(),h("tr",{key:F,style:{height:"3.75rem"}},[e("td",null,[a(H,{modelValue:l.in_use,"onUpdate:modelValue":m=>l.in_use=m,color:"success",inset:"",value:l.in_use,"true-value":1,"false-value":0,"hide-details":"",onClick:m=>D(l,l.in_use)},null,8,["modelValue","onUpdate:modelValue","value","onClick"])]),e("td",null,[e("span",null,n(l.code),1)]),e("td",null,[e("span",null,n(l.name),1)]),e("td",null,[e("span",null,n(l.related_to_name),1)]),e("td",null,[e("span",null,n(l.ledger_account_auxiliary_name),1)]),e("td",null,[e("span",null,n(l.payment_method_name),1)]),e("td",ae,[a(S,{icon:"",size:"x-small",color:"default",variant:"text",onClick:m=>x("form",l)},{default:i(()=>[a(R,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[b,!s(v)]])),128))])]),_:1}),a(k),a(C,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:i(()=>[e("span",te,n(s(A)),1),a(K,{modelValue:s(o),"onUpdate:modelValue":t[3]||(t[3]=l=>V(o)?o.value=l:null),size:"small","total-visible":5,length:s($)},null,8,["modelValue","length"])]),_:1})]))}});export{_e as _};