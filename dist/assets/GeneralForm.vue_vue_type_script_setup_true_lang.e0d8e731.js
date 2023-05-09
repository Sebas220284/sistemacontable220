import{d as P,E as Q,b9 as D,k as w,aB as E,r as G,o as L,c as $,p as t,w as l,z as y,q as e,m as _,a2 as B,aN as I,a3 as R,V,I as U}from"./index.1bb36a93.js";import{u as q}from"./useWayToPayGeneralStore.6ecab4b0.js";import{u as j}from"./useSelect2Infite.14981200.js";import{r as v,l as T}from"./validators.bb8f1929.js";import{a as m,V as x}from"./VRow.971cb494.js";import{V as d}from"./VBtn.22d55266.js";import{V as b}from"./VTextField.1b37a66e.js";import{V as A}from"./VSelect.ff4ebc03.js";import{V as k}from"./VDivider.5fbe829f.js";import{V as K}from"./VForm.9a7f2cfe.js";const W={class:"d-flex justify-content-center aling-items-center"},H={key:0,class:"d-flex justify-content-between aling-items-center p-2"},J={class:"d-flex justify-content-center aling-items-center"},O={key:0,class:"d-flex justify-content-between aling-items-center p-2"},ie=P({__name:"GeneralForm",setup(X){const N=Q(),c=q(),{formulario:s,paymentMethods:h,relatedTos:F,ledgerAccountAuxiliar:M,loading:f}=D(c),C=w(),r=w([]),n=j(c.fetchLedgerAccountAuxiliaryList,M,{company_id:N.company.id}),i=j(c.fetchLedgerPaymentMethodsList,h,{}),S=async u=>{var a;await((a=C.value)==null?void 0:a.resetValidation()),r.value=[],c.typeAction=u,u!="back"&&c.keyList++},g=w([]),z=async()=>{var a;s.value.related_to_id!=3?g.value.payment_method_id=[]:g.value.payment_method_id=[v(s.value.payment_method_id)];const u=await((a=C.value)==null?void 0:a.validate());if(u!=null&&u.valid){s.value.company_id=N.company.id;const p=await c.fetchSave();p.status===200&&S("list"),p.status===422&&(r.value=p.error)}};return E(async()=>{await n.search(),await i.search()}),(u,a)=>{const p=G("RouterLink");return L(),$("div",null,[t(x,null,{default:l(()=>[t(m,{cols:"12",class:"d-flex justify-content-end"},{default:l(()=>[t(d,{color:"secondary",onClick:a[0]||(a[0]=o=>S("back"))},{default:l(()=>[y(" Atras ")]),_:1})]),_:1})]),_:1}),t(K,{ref_key:"formValidation",ref:C,"lazy-validation":""},{default:l(()=>[t(x,null,{default:l(()=>[t(m,{cols:"3"},{default:l(()=>[t(b,{maxlength:"20",rules:[e(v),e(T)(e(s).code,20)],modelValue:e(s).code,"onUpdate:modelValue":a[1]||(a[1]=o=>e(s).code=o),"error-messages":e(r).code,label:"Codigo",onKeypress:a[2]||(a[2]=o=>{e(r).code=""})},null,8,["rules","modelValue","error-messages"])]),_:1}),t(m,{cols:"4"},{default:l(()=>[t(b,{maxlength:"50",rules:[e(v),e(T)(e(s).code,50)],modelValue:e(s).name,"onUpdate:modelValue":a[3]||(a[3]=o=>e(s).name=o),"error-messages":e(r).name,label:"Nombre",onKeypress:a[4]||(a[4]=o=>e(r).name="")},null,8,["rules","modelValue","error-messages"])]),_:1}),t(m,{cols:"5"},{default:l(()=>[t(A,{items:e(F),modelValue:e(s).related_to_id,"onUpdate:modelValue":[a[5]||(a[5]=o=>e(s).related_to_id=o),a[6]||(a[6]=o=>e(r).related_to_id="")],"item-title":"name","item-value":"id",rules:[e(v)],label:"Relacionado con","error-messages":e(r).related_to_id},null,8,["items","modelValue","rules","error-messages"])]),_:1})]),_:1}),t(x,{class:"mt-3"},{default:l(()=>[t(m,{cols:"6"},{default:l(()=>[t(A,{rules:[e(v)],loading:e(f),label:"Cuenta contable","onUpdate:modelValue":[a[10]||(a[10]=o=>e(r).ledger_account_auxiliary_id=""),a[11]||(a[11]=o=>e(s).ledger_account_auxiliary_id=o)],"error-messages":e(r).ledger_account_auxiliary_id,"item-title":"name","item-value":"id",modelValue:e(s).ledger_account_auxiliary_id,items:e(n).dataNueva.value},{"prepend-item":l(()=>[t(b,{placeholder:"Buscar...",class:"mb-2",modelValue:e(n).searchQuery.value,"onUpdate:modelValue":a[7]||(a[7]=o=>e(n).searchQuery.value=o)},null,8,["modelValue"]),t(k)]),"append-item":l(()=>[t(k),_("div",W,[B(t(I,{size:"24",color:"primary",indeterminate:""},null,512),[[R,e(f)]])]),e(f)?U("",!0):(L(),$("div",H,[t(p,{to:{name:"Admin-LedgerAccount-Index"},class:"app-logo d-flex align-center gap-x-3 app-title-wrapper"},{default:l(()=>[t(d,{color:"success"},{default:l(()=>[y("Crear Registro")]),_:1})]),_:1}),_("div",null,[t(d,{class:"mt-2",disabled:e(n).page.value<=1,onClick:a[8]||(a[8]=o=>e(n).prev()),color:"success"},{default:l(()=>[t(V,{icon:"mdi-chevron-left"})]),_:1},8,["disabled"]),t(d,{class:"mt-2",disabled:e(n).page.value>=e(n).totalLinks.value,onClick:a[9]||(a[9]=o=>e(n).next()),color:"success"},{default:l(()=>[t(V,{icon:"mdi-chevron-right"})]),_:1},8,["disabled"])])]))]),_:1},8,["rules","loading","error-messages","modelValue","items"])]),_:1}),t(m,{cols:"6"},{default:l(()=>[t(A,{rules:e(g).payment_method_id,label:"Medio de pago D.Electr\xF3nico","onUpdate:modelValue":[a[15]||(a[15]=o=>e(g).payment_method_id=""),a[16]||(a[16]=o=>e(s).payment_method_id=o)],"error-messages":e(r).payment_method_id,"item-title":"name","item-value":"id",modelValue:e(s).payment_method_id,items:e(i).dataNueva.value},{"prepend-item":l(()=>[t(b,{placeholder:"Buscar...",class:"mb-2",modelValue:e(i).searchQuery.value,"onUpdate:modelValue":a[12]||(a[12]=o=>e(i).searchQuery.value=o)},null,8,["modelValue"]),t(k)]),"append-item":l(()=>[t(k),_("div",J,[B(t(I,{size:"24",color:"primary",indeterminate:""},null,512),[[R,e(f)]])]),e(f)?U("",!0):(L(),$("div",O,[t(p,{to:{name:"Admin-LedgerAccount-Index"},class:"app-logo d-flex align-center gap-x-3 app-title-wrapper"},{default:l(()=>[t(d,{color:"success"},{default:l(()=>[y("Crear Registro")]),_:1})]),_:1}),_("div",null,[t(d,{class:"mt-2",disabled:e(i).page.value<=1,onClick:a[13]||(a[13]=o=>e(i).prev()),color:"success"},{default:l(()=>[t(V,{icon:"mdi-chevron-left"})]),_:1},8,["disabled"]),t(d,{class:"mt-2",disabled:e(i).page.value>=e(i).totalLinks.value,onClick:a[14]||(a[14]=o=>e(i).next()),color:"success"},{default:l(()=>[t(V,{icon:"mdi-chevron-right"})]),_:1},8,["disabled"])])]))]),_:1},8,["rules","error-messages","modelValue","items"])]),_:1})]),_:1}),t(x,null,{default:l(()=>[t(m,{cols:"12 d-flex justify-content-center"},{default:l(()=>[t(d,{color:"primary",onClick:a[17]||(a[17]=o=>z())},{default:l(()=>[y("Guardar")]),_:1})]),_:1})]),_:1})]),_:1},512)])}}});export{ie as _};