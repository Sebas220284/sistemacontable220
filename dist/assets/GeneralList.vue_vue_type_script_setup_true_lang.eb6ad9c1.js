import{d as T,E as M,b9 as N,k as S,C as U,bm as z,O as E,aB as G,o as f,c as h,p as l,w as p,m as e,q as s,bi as y,z as I,a2 as g,a3 as V,F as R,a as L,x as i,V as Q}from"./index.1bb36a93.js";import{u as W}from"./useWayToPayGeneralStore.6ecab4b0.js";import{_ as q}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{V as O}from"./VSelect.ff4ebc03.js";import{V as H}from"./VSpacer.c965114a.js";import{V as J}from"./VTextField.1b37a66e.js";import{V as A}from"./VBtn.22d55266.js";import{V as k}from"./VContainer.fea237fc.js";import{V as P}from"./VDivider.5fbe829f.js";import{V as K}from"./VSwitch.372fef15.js";import{V as X}from"./VTable.ef7fd960.js";import{V as Y}from"./VPagination.37591e70.js";const Z={class:"me-3",style:{width:"80px"}},j={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},ee={style:{width:"10rem"}},ae=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"En uso"),e("th",{scope:"col"},"C\xF3digo"),e("th",{scope:"col"},"Nombre"),e("th",{scope:"col"},"Relacionado con"),e("th",{scope:"col"},"Cuenta contable"),e("th",{scope:"col"},"Medio de pago D. Electr\xF3nico"),e("th",{scope:"col"},"Acciones")])],-1),te={colspan:"7"},le={class:"text-center",style:{width:"5rem"}},ne=e("tr",null,[e("td",{colspan:"7",class:"text-center"}," No se encuentran resultados ")],-1),oe=[ne],se={class:"text-sm text-disabled"},ve=T({__name:"GeneralList",setup(re){const $=M(),n=W(),{generals:m,currentPage:o,totalPage:_,lastPage:b,totalData:B,loading:v}=N(n),d=S(10),u=S(""),x=async()=>{await n.fetchAll({company_id:$.company.id,perPage:d.value,page:o.value,searchQuery:u.value})};U(o,async()=>{o.value>_.value&&(o.value=_.value)}),z([o,u,d],async()=>{await x()});const w=async(c,a=null)=>{n.clearFormulario(),n.typeAction=c,console.log(a),a&&(n.ledgerAccountAuxiliar.find(r=>r.id===a.ledger_account_auxiliary_id)||n.ledgerAccountAuxiliar.push({id:a.ledger_account_auxiliary_id,code:a.ledger_account_auxiliary_code,name:a.ledger_account_auxiliary_name}),n.paymentMethods.find(r=>r.id===a.payment_method_id)||n.paymentMethods.push({id:a.payment_method_id,code:a.payment_method_code,name:a.payment_method_name}),a.id&&n.fetchInfoGeneral(a.id))},D=async(c,a)=>{n.changeState(c,a)},F=E(()=>{const c=m.value.length?(o.value-1)*_.value+1:0,a=m.value.length+(o.value-1)*_.value;return`Mostrando ${c} a ${a} de ${B.value} registros`});return G(async()=>{await x()}),(c,a)=>(f(),h("div",null,[l(k,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:p(()=>[e("div",Z,[l(O,{modelValue:s(d),"onUpdate:modelValue":a[0]||(a[0]=t=>y(d)?d.value=t:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),l(H),e("div",j,[e("div",ee,[l(J,{modelValue:s(u),"onUpdate:modelValue":a[1]||(a[1]=t=>y(u)?u.value=t:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),l(A,{color:"primary",onClick:a[2]||(a[2]=t=>w("form"))},{default:p(()=>[I(" Agregar ")]),_:1})])]),_:1}),l(P),l(X,{class:"text-no-wrap"},{default:p(()=>[ae,e("tbody",null,[g(e("tr",null,[e("td",te,[l(q)])],512),[[V,s(v)]]),(f(!0),h(R,null,L(s(m),(t,C)=>g((f(),h("tr",{key:C,style:{height:"3.75rem"}},[e("td",null,[l(K,{modelValue:t.in_use,"onUpdate:modelValue":r=>t.in_use=r,color:"success",inset:"",value:t.in_use,"true-value":1,"false-value":0,"hide-details":"",onClick:r=>D(t,t.in_use)},null,8,["modelValue","onUpdate:modelValue","value","onClick"])]),e("td",null,[e("span",null,i(t.code),1)]),e("td",null,[e("span",null,i(t.name),1)]),e("td",null,[e("span",null,i(t.related_to_name),1)]),e("td",null,[e("span",null,i(t.ledger_account_auxiliary_name),1)]),e("td",null,[e("span",null,i(t.payment_method_name),1)]),e("td",le,[l(A,{icon:"",size:"x-small",color:"default",variant:"text",onClick:r=>w("form",t)},{default:p(()=>[l(Q,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[V,!s(v)]])),128))]),g(e("tfoot",null,oe,512),[[V,!s(m).length]])]),_:1}),l(P),l(k,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:p(()=>[e("span",se,i(s(F)),1),l(Y,{modelValue:s(o),"onUpdate:modelValue":a[3]||(a[3]=t=>y(o)?o.value=t:null),size:"small","total-visible":5,length:s(b)},null,8,["modelValue","length"])]),_:1})]))}});export{ve as _};