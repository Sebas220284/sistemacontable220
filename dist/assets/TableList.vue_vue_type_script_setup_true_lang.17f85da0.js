import{d as oe,E as se,t as ie,b9 as re,k as L,aB as E,C as Q,bm as de,O as ue,r as ce,o as I,c as S,p as e,w as o,ba as me,bF as pe,q as a,z as f,a2 as v,m as l,bE as fe,aN as M,a3 as _,V as y,I as O,bi as N,F as ve,a as _e,x as u}from"./index.1bb36a93.js";import{S as ye}from"./sweetalert2.74fe64d4.js";import{u as Ve}from"./useCrudInvoiceStore.f06dfae7.js";import{_ as he}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{u as q}from"./useSelect2Infite.14981200.js";import{V as xe}from"./index.5010adc7.js";import{a as w,V as D}from"./VRow.971cb494.js";import{V as s}from"./VBtn.22d55266.js";import{V as G}from"./VSpacer.c965114a.js";import{V}from"./VDivider.5fbe829f.js";import{V as A}from"./VSelect.ff4ebc03.js";import{V as T}from"./VTextField.1b37a66e.js";import{V as H}from"./VContainer.fea237fc.js";import{V as ge}from"./VTable.ef7fd960.js";import{V as be}from"./VPagination.37591e70.js";const we={class:"d-flex justify-content-center aling-items-center"},Ce={key:0,class:"d-flex justify-content-between aling-items-center p-2"},ke={class:"d-flex justify-content-center aling-items-center"},Ie={key:0,class:"d-flex justify-content-between aling-items-center p-2"},Se={class:"me-3",style:{width:"80px"}},Te={class:"me-3",style:{width:"80px"}},Be={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},$e={style:{width:"10rem"}},Le=l("thead",null,[l("tr",null,[l("th",{class:"w10"}," Tipo "),l("th",{scope:"col"}," Cliente "),l("th",{scope:"col"}," Vendedor "),l("th",{scope:"col"}," Moneda "),l("th",{scope:"col"}," Fecha "),l("th",{scope:"col"}," Numero "),l("th",{scope:"col"}," total bruto "),l("th",{scope:"col"}," descuento "),l("th",{scope:"col"}," subtotal "),l("th",{scope:"col"}," Total neto "),l("th",{scope:"col"}," Acciones ")])],-1),De={style:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},Ne={colspan:"11"},Ae={class:"text-center",style:{width:"5rem"}},ze=l("tr",null,[l("td",{colspan:"11",class:"text-center"}," No se encuentran resultados ")],-1),Fe=[ze],Ue={class:"text-sm text-disabled"},el=oe({__name:"TableList",setup(Re){const C=se();ie();const r=Ve(),{invoices:B,totalPage:$,lastPage:J,currentPage:d,totalData:K,loading:h,showInvoice:x,searchInvoice:i,pathExcel:W,customers_arrayInfo:z,customers_countLinks:X,userSeller_arrayInfo:F,userSeller_countLinks:Y}=re(r),g=L(10),b=L(""),U=L("desc"),R=L("name"),k=async()=>{await r.fetchAll({perPage:g.value,page:d.value,searchQuery:b.value,sort_direction:U.value,sort_field:R.value,company_id:C.company.id,customer_id:i.value.customer_id,seller_id:i.value.seller_id,date_ini:i.value.date_ini,date_fin:i.value.date_fin})},Z=()=>{i.value={},k()};E(async()=>{r.typeAction!="back"&&await k()}),Q(d,async()=>{d.value>$.value&&(d.value=$.value)}),Q(g,async()=>{d.value=1}),de([d,b,g,U,R],async()=>{await k()});const ee=ue(()=>{const p=B.value.length?(d.value-1)*$.value+1:0,t=B.value.length+(d.value-1)*$.value;return`Mostrando ${p} a ${t} de ${K.value} registros`}),P=async(p,t=null)=>{r.clearFormulario(),r.typeAction=p,t&&r.fetchInfoInvoice(t)},le=async p=>{ye.fire({title:"\xBFDesea eliminar el registro?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Si",denyButtonText:"No"}).then(async t=>{t.isConfirmed?(await r.fetchDelete(p),await k()):t.isDenied})},c=q(r.fetchCustomerOfThirdList,z,{company_id:C.company.id}),m=q(r.fetchSellerOfUserList,F,{company_id:C.company.id});E(async()=>{await r.fetchDataForm(C.company.id),c.dataNueva.value=z.value,c.totalLinks.value=X.value,m.dataNueva.value=F.value,m.totalLinks.value=Y.value});const te=async()=>{await r.excel({company_id:C.company.id,searchQuery:b.value}).then(p=>{window.open(W.value,"_blank")})};return(p,t)=>{const j=ce("RouterLink");return I(),S("div",null,[e(D,null,{default:o(()=>[e(w,{cols:"12"},{default:o(()=>[e(me,null,{default:o(()=>[e(pe,null,{default:o(()=>[e(s,{onClick:t[0]||(t[0]=n=>x.value=!a(x)),color:"orange-lighten-2",variant:"text"},{default:o(()=>[f(" Criterios de b\xFAsqueda ")]),_:1}),e(G),e(s,{icon:a(x)?"mdi-chevron-up":"mdi-chevron-down",onClick:t[1]||(t[1]=n=>x.value=!a(x))},null,8,["icon"])]),_:1}),e(xe,null,{default:o(()=>[v(l("div",null,[e(V),e(fe,null,{default:o(()=>[e(D,null,{default:o(()=>[e(w,{cols:"6"},{default:o(()=>[l("div",null,[e(A,{"item-title":"full_name","item-value":"id",label:"Cliente",modelValue:a(i).customer_id,"onUpdate:modelValue":t[5]||(t[5]=n=>a(i).customer_id=n),items:a(c).dataNueva.value},{"prepend-item":o(()=>[e(T,{placeholder:"Buscar...",class:"mb-2",modelValue:a(c).searchQuery.value,"onUpdate:modelValue":t[2]||(t[2]=n=>a(c).searchQuery.value=n)},null,8,["modelValue"]),e(V)]),"append-item":o(()=>[e(V),l("div",we,[v(e(M,{size:"24",color:"primary",indeterminate:""},null,512),[[_,a(h)]])]),a(h)?O("",!0):(I(),S("div",Ce,[e(j,{to:{name:"Admin-TypesReceiptInvoice-Index"},class:"app-logo d-flex align-center gap-x-3 app-title-wrapper"},{default:o(()=>[e(s,{color:"success"},{default:o(()=>[f("Crear Registro")]),_:1})]),_:1}),l("div",null,[e(s,{class:"mt-2",disabled:a(c).page.value<=1,onClick:t[3]||(t[3]=n=>a(c).prev()),color:"success"},{default:o(()=>[e(y,{icon:"mdi-chevron-left"})]),_:1},8,["disabled"]),e(s,{class:"mt-2",disabled:a(c).page.value>=a(c).totalLinks.value,onClick:t[4]||(t[4]=n=>a(c).next()),color:"success"},{default:o(()=>[e(y,{icon:"mdi-chevron-right"})]),_:1},8,["disabled"])])]))]),_:1},8,["modelValue","items"])])]),_:1}),e(w,{cols:"6"},{default:o(()=>[l("div",null,[e(A,{"item-title":"name","item-value":"id",modelValue:a(i).seller_id,"onUpdate:modelValue":t[9]||(t[9]=n=>a(i).seller_id=n),items:a(m).dataNueva.value,label:"Vendedor"},{"prepend-item":o(()=>[e(T,{placeholder:"Buscar...",class:"mb-2",modelValue:a(m).searchQuery.value,"onUpdate:modelValue":t[6]||(t[6]=n=>a(m).searchQuery.value=n)},null,8,["modelValue"]),e(V)]),"append-item":o(()=>[e(V),l("div",ke,[v(e(M,{size:"24",color:"primary",indeterminate:""},null,512),[[_,a(h)]])]),a(h)?O("",!0):(I(),S("div",Ie,[e(j,{to:{name:"Admin-TypesReceiptInvoice-Index"},class:"app-logo d-flex align-center gap-x-3 app-title-wrapper"},{default:o(()=>[e(s,{color:"success"},{default:o(()=>[f("Crear Registro")]),_:1})]),_:1}),l("div",null,[e(s,{class:"mt-2",disabled:a(m).page.value<=1,onClick:t[7]||(t[7]=n=>a(m).prev()),color:"success"},{default:o(()=>[e(y,{icon:"mdi-chevron-left"})]),_:1},8,["disabled"]),e(s,{class:"mt-2",disabled:a(m).page.value>=a(m).totalLinks.value,onClick:t[8]||(t[8]=n=>a(m).next()),color:"success"},{default:o(()=>[e(y,{icon:"mdi-chevron-right"})]),_:1},8,["disabled"])])]))]),_:1},8,["modelValue","items"])])]),_:1})]),_:1}),e(D,null,{default:o(()=>[e(w,{cols:"6"},{default:o(()=>[l("div",null,[e(T,{label:"fecha inicio",type:"date",modelValue:a(i).date_ini,"onUpdate:modelValue":t[10]||(t[10]=n=>a(i).date_ini=n)},null,8,["modelValue"])])]),_:1}),e(w,{cols:"6"},{default:o(()=>[l("div",null,[e(T,{label:"fecha fin",type:"date",modelValue:a(i).date_fin,"onUpdate:modelValue":t[11]||(t[11]=n=>a(i).date_fin=n)},null,8,["modelValue"])])]),_:1})]),_:1}),e(D,null,{default:o(()=>[e(w,{cols:"12 d-flex justify-content-center"},{default:o(()=>[e(s,{color:"primary",class:"mr-2",onClick:k},{default:o(()=>[f("Buscar")]),_:1}),e(s,{color:"primary",onClick:Z},{default:o(()=>[f("Limpiar Filtros")]),_:1})]),_:1})]),_:1})]),_:1})],512),[[_,a(x)]])]),_:1})]),_:1})]),_:1})]),_:1}),e(H,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:o(()=>[l("div",Se,[e(A,{modelValue:a(g),"onUpdate:modelValue":t[12]||(t[12]=n=>N(g)?g.value=n:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),l("div",Te,[e(s,{"mt-2":"",size:"x-small",color:"default",variant:"text",title:"Descargar",onClick:t[13]||(t[13]=n=>te())},{default:o(()=>[e(y,{size:"30",icon:"mdi-file-excel"}),f(" Excel ")]),_:1})]),e(G),l("div",Be,[l("div",$e,[e(T,{modelValue:a(b),"onUpdate:modelValue":t[14]||(t[14]=n=>N(b)?b.value=n:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),e(s,{color:"primary",onClick:t[15]||(t[15]=n=>P("form"))},{default:o(()=>[f(" Agregar ")]),_:1})])]),_:1}),e(V),e(ge,{class:"text-no-wrap"},{default:o(()=>[Le,v(l("div",De,null,512),[[_,!0]]),l("tbody",null,[v(l("tr",null,[l("td",Ne,[e(he)])],512),[[_,a(h)]]),(I(!0),S(ve,null,_e(a(B),(n,ae)=>v((I(),S("tr",{key:ae,style:{height:"3.75rem"}},[l("td",null,[l("span",null,u(n.type_name),1)]),l("td",null,[l("span",null,u(n.third_name),1)]),l("td",null,[l("span",null,u(n.user_name),1)]),l("td",null,[l("span",null,u(n.currency_name),1)]),l("td",null,[l("span",null,u(n.date_elaboration),1)]),l("td",null,[l("span",null,u(n.number),1)]),l("td",null,[l("span",null,u(n.gross_total),1)]),l("td",null,[l("span",null,u(n.discount),1)]),l("td",null,[l("span",null,u(n.subtotal),1)]),l("td",null,[l("span",null,u(n.net_total),1)]),l("td",Ae,[e(s,{size:"x-small",color:"error",variant:"text",onClick:ne=>le(n.id)},{default:o(()=>[e(y,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(s,{icon:"",size:"x-small",color:"default",variant:"text",onClick:ne=>P("form",n.id)},{default:o(()=>[e(y,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[_,!a(h)]])),128))]),v(l("tfoot",null,Fe,512),[[_,!a(B).length]])]),_:1}),e(V),e(H,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:o(()=>[l("span",Ue,u(a(ee)),1),e(be,{modelValue:a(d),"onUpdate:modelValue":t[16]||(t[16]=n=>N(d)?d.value=n:null),size:"small","total-visible":5,length:a(J)},null,8,["modelValue","length"])]),_:1})])}}});export{el as _};