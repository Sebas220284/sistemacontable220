import{d as R,E as Q,b9 as U,k as C,C as b,bm as L,O as M,aB as j,o as x,c as y,p as a,w as i,m as e,q as n,bi as h,V,z as D,a2 as k,a3 as B,F as q,a as O,x as d}from"./index.1bb36a93.js";import{S as G}from"./sweetalert2.74fe64d4.js";import{_ as H}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{u as J}from"./useCrudTypesReceiptInvoiceStore.48bf890f.js";import{V as K}from"./VSelect.ff4ebc03.js";import{V as f}from"./VBtn.22d55266.js";import{V as W}from"./VSpacer.c965114a.js";import{V as X}from"./VTextField.1b37a66e.js";import{V as F}from"./VContainer.fea237fc.js";import{V as S}from"./VDivider.5fbe829f.js";import{V as Y}from"./VTable.ef7fd960.js";import{V as Z}from"./VPagination.37591e70.js";const ee={class:"me-3",style:{width:"80px"}},te={class:"me-3",style:{width:"80px"}},ae={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},le={style:{width:"10rem"}},oe=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"C\xF3digo"),e("th",{scope:"col"},"Nombre"),e("th",{scope:"col"},"T\xEDtulo para visualizaci\xF3n"),e("th",{scope:"col"},"N\xFAmero de resoluci\xF3n"),e("th",{scope:"col"},"Estado numeraci\xF3n"),e("th",{scope:"col"},"Acciones")])],-1),se={colspan:"6"},ne={class:"text-center",style:{width:"5rem"}},ie={class:"text-sm text-disabled"},_e=R({__name:"TableList",setup(re){const w=Q(),s=J(),{currentPage:o,typesReceiptInvoices:p,totalPage:m,links:T,totalData:z,loading:_,pathExcel:E}=U(s),r=C(10),c=C(""),g=async(u,t=null)=>{s.clearFormulario(),s.typeAction=u,t?await s.fetchInfoTypesReceiptInvoices(t):s.clearArrays()},v=async()=>{await s.fetchAll({company_id:w.company.id,perPage:r.value,page:o.value,searchQuery:c.value})};b(o,async()=>{o.value>m.value&&(o.value=m.value)}),b(r,async()=>{o.value=1}),L([o,c,r],async()=>{await v()});const N=M(()=>{const u=p.value.length?(o.value-1)*m.value+1:0,t=p.value.length+(o.value-1)*m.value;return`Mostrando ${u} a ${t} de ${z.value} registros`}),$=async()=>{console.log("dowloadExcel",p),await s.excel({company_id:w.company.id,searchQuery:c.value}),window.open(E.value,"_blank")},A=async u=>{G.fire({title:"\xBFDesea eliminar el registro?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Si",denyButtonText:"No"}).then(async t=>{t.isConfirmed?(await s.fetchDelete(u),await v()):t.isDenied})};return j(async()=>{await v()}),(u,t)=>(x(),y("div",null,[a(F,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:i(()=>[e("div",ee,[a(K,{modelValue:n(r),"onUpdate:modelValue":t[0]||(t[0]=l=>h(r)?r.value=l:null),density:"compact",variant:"outlined",focused:"",items:[10,20,30,50]},null,8,["modelValue"])]),e("div",te,[a(f,{"mt-2":"",size:"x-small",color:"default",variant:"text",title:"Descargar",onClick:t[1]||(t[1]=l=>$())},{default:i(()=>[a(V,{size:"30",icon:"mdi-file-excel"}),D(" Excel ")]),_:1})]),a(W),e("div",ae,[e("div",le,[a(X,{modelValue:n(c),"onUpdate:modelValue":t[2]||(t[2]=l=>h(c)?c.value=l:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),a(f,{color:"primary",onClick:t[3]||(t[3]=l=>g("form"))},{default:i(()=>[D(" Crear nuevo tipo de comprobante")]),_:1})])]),_:1}),a(S),a(Y,{class:"text-no-wrap"},{default:i(()=>[oe,e("tbody",null,[k(e("tr",null,[e("td",se,[a(H)])],512),[[B,n(_)]]),(x(!0),y(q,null,O(n(p),(l,I)=>k((x(),y("tr",{key:I,style:{height:"3.75rem"}},[e("td",null,[e("span",null,d(l.voucherCode),1)]),e("td",null,[e("span",null,d(l.voucherName),1)]),e("td",null,[e("span",null,d(l.titleForDisplay),1)]),e("td",null,[e("span",null,d(l.resolutionNumberDian),1)]),e("td",null,[e("span",null,d(l.endDateValidity),1)]),e("td",ne,[a(f,{icon:"",size:"x-small",color:"error",variant:"text",onClick:P=>A(l.id)},{default:i(()=>[a(V,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),a(f,{icon:"",size:"x-small",color:"default",variant:"text",onClick:P=>g("form",l.id)},{default:i(()=>[a(V,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[B,!n(_)]])),128))])]),_:1}),a(S),a(F,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:i(()=>[e("span",ie,d(n(N)),1),a(Z,{modelValue:n(o),"onUpdate:modelValue":t[4]||(t[4]=l=>h(o)?o.value=l:null),size:"small","total-visible":5,length:n(T)},null,8,["modelValue","length"])]),_:1})]))}});export{_e as _};
