import{d as J,E as K,b9 as W,k as C,C as z,bm as X,O as Y,aB as Z,o as b,c as P,p as e,w as o,ba as ee,bF as te,q as n,z as V,a2 as w,m as t,bE as ae,a3 as g,bi as k,V as S,F as le,a as oe,x as f}from"./index.1bb36a93.js";import{S as ne}from"./sweetalert2.74fe64d4.js";import{_ as se}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{u as re}from"./useCrudProductStore.e1796e7b.js";import{_ as ie}from"./ModalImport.vue_vue_type_script_setup_true_lang.e77a4327.js";import{V as de}from"./index.5010adc7.js";import{a as _,V as B}from"./VRow.971cb494.js";import{V as u}from"./VBtn.22d55266.js";import{V as A}from"./VSpacer.c965114a.js";import{V as D}from"./VDivider.5fbe829f.js";import{V as $}from"./VSelect.ff4ebc03.js";import{V as U}from"./VTextField.1b37a66e.js";import{V as N}from"./VContainer.fea237fc.js";import{V as ue}from"./VSwitch.372fef15.js";import{V as ce}from"./VTable.ef7fd960.js";import{V as me}from"./VPagination.37591e70.js";const pe={class:"me-3",style:{width:"80px"}},fe={class:"me-3",style:{width:"80px"}},ve={class:"me-3",style:{width:"80px"}},Ve={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},_e={style:{width:"10rem"}},ye=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Nombre"),t("th",{scope:"col"},"Tipo"),t("th",{scope:"col"},"Referencia f\xE1brica"),t("th",{scope:"col"},"Impuesto cargo"),t("th",{scope:"col"},"Descripci\xF3n larga"),t("th",{scope:"col"},"Estado"),t("th",{scope:"col"},"Acciones")])],-1),he={colspan:"9"},xe={class:"text-center",style:{width:"5rem"}},we=t("tr",null,[t("td",{colspan:"7",class:"text-center"}," No se encuentran resultados ")],-1),ge=[we],Ce={class:"text-sm text-disabled"},Qe=J({__name:"TableList",setup(be){const T=K(),d=re(),{show:c,currentPage:s,products:y,totalPage:h,lastPage:I,totalData:R,loading:E,pathExcel:L,searchProduct:r,typeProducts:Q}=W(d),m=C(10),p=C(""),F=async(i,a=null)=>{d.clearFormulario(),d.typeAction=i,a&&await d.fetchInfoProduct(a)},v=async()=>{await d.fetchAll({company_id:T.company.id,perPage:m.value,page:s.value,searchQuery:p.value,state:r.value.state,name:r.value.name,typeProduct_id:r.value.typeProduct_id})};z(s,async()=>{s.value>h.value&&(s.value=h.value)}),z(m,async()=>{s.value=1}),X([s,p,m],async()=>{await v()});const j=Y(()=>{const i=y.value.length?(s.value-1)*h.value+1:0,a=y.value.length+(s.value-1)*h.value;return`Mostrando ${i} a ${a} de ${R.value} registros`}),q=async()=>{await d.excel({company_id:T.company.id,searchQuery:p.value}).then(i=>{window.open(L.value,"_blank")})},M=()=>{r.value={},v()},O=async i=>{ne.fire({title:"\xBFDesea eliminar el registro?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Si",denyButtonText:"No"}).then(async a=>{a.isConfirmed?(await d.fetchDelete(i),await v()):a.isDenied})},G=async(i,a)=>{d.changeState(i,a)};return C(!1),Z(async()=>{await v()}),(i,a)=>(b(),P("div",null,[e(B,null,{default:o(()=>[e(_,{cols:"12"},{default:o(()=>[e(ee,null,{default:o(()=>[e(te,null,{default:o(()=>[e(u,{onClick:a[0]||(a[0]=l=>c.value=!n(c)),color:"orange-lighten-2",variant:"text"},{default:o(()=>[V(" Criterios de b\xFAsqueda ")]),_:1}),e(A),e(u,{icon:n(c)?"mdi-chevron-up":"mdi-chevron-down",onClick:a[1]||(a[1]=l=>c.value=!n(c))},null,8,["icon"])]),_:1}),e(de,null,{default:o(()=>[w(t("div",null,[e(D),e(ae,null,{default:o(()=>[e(B,null,{default:o(()=>[e(_,{cols:"12",md:"4"},{default:o(()=>[e($,{clearable:"",items:[{id:1,name:"Activo"},{id:0,name:"Inactivo"}],"item-title":"name",modelValue:n(r).state,"onUpdate:modelValue":a[2]||(a[2]=l=>n(r).state=l),"item-value":"id",label:"Estado"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",md:"4"},{default:o(()=>[e(U,{clearable:"",label:"Producto",modelValue:n(r).name,"onUpdate:modelValue":a[3]||(a[3]=l=>n(r).name=l)},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",md:"4"},{default:o(()=>[e($,{clearable:"",items:n(Q),"item-title":"name",modelValue:n(r).typeProduct_id,"onUpdate:modelValue":a[4]||(a[4]=l=>n(r).typeProduct_id=l),"item-value":"id",label:"Tipo"},null,8,["items","modelValue"])]),_:1})]),_:1}),e(B,null,{default:o(()=>[e(_,{cols:"12 d-flex justify-content-center"},{default:o(()=>[e(u,{color:"primary",class:"mr-2",onClick:v},{default:o(()=>[V("Buscar")]),_:1}),e(u,{color:"primary",onClick:M},{default:o(()=>[V("Limpiar Filtros")]),_:1})]),_:1})]),_:1})]),_:1})],512),[[g,n(c)]])]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:o(()=>[t("div",pe,[e($,{modelValue:n(m),"onUpdate:modelValue":a[5]||(a[5]=l=>k(m)?m.value=l:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),t("div",fe,[e(u,{"mt-2":"",size:"x-small",color:"default",variant:"text",title:"Descargar",onClick:a[6]||(a[6]=l=>q())},{default:o(()=>[e(S,{size:"30",icon:"mdi-file-excel"}),V(" Excel ")]),_:1})]),t("div",ve,[e(ie)]),e(A),t("div",Ve,[t("div",_e,[e(U,{modelValue:n(p),"onUpdate:modelValue":a[7]||(a[7]=l=>k(p)?p.value=l:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),e(u,{color:"primary",onClick:a[8]||(a[8]=l=>F("form"))},{default:o(()=>[V(" Crear ")]),_:1})])]),_:1}),e(D),e(ce,{class:"text-no-wrap"},{default:o(()=>[ye,t("tbody",null,[w(t("tr",null,[t("td",he,[e(se)])],512),[[g,n(E)]]),(b(!0),P(le,null,oe(n(y),(l,H)=>w((b(),P("tr",{key:H,style:{height:"3.75rem"}},[t("td",null,[t("span",null,f(l.name),1)]),t("td",null,[t("span",null,f(l.type_name),1)]),t("td",null,[t("span",null,f(l.factoryReference),1)]),t("td",null,[t("span",null,f(l.taxCharge_name),1)]),t("td",null,[t("span",null,f(l.description),1)]),t("td",null,[e(ue,{modelValue:l.state,"onUpdate:modelValue":x=>l.state=x,color:"success",inset:"",value:l.state,"true-value":1,"false-value":0,"hide-details":"",onClick:x=>G(l,l.state)},null,8,["modelValue","onUpdate:modelValue","value","onClick"])]),t("td",xe,[e(u,{icon:"",size:"x-small",color:"error",variant:"text",onClick:x=>O(l.id)},{default:o(()=>[e(S,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(u,{icon:"",size:"x-small",color:"default",variant:"text",onClick:x=>F("form",l.id)},{default:o(()=>[e(S,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[g,!n(E)]])),128))]),w(t("tfoot",null,ge,512),[[g,!n(y).length]])]),_:1}),e(D),e(N,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:o(()=>[t("span",Ce,f(n(j)),1),e(me,{modelValue:n(s),"onUpdate:modelValue":a[9]||(a[9]=l=>k(s)?s.value=l:null),size:"small","total-visible":5,length:n(I)},null,8,["modelValue","length"])]),_:1})]))}});export{Qe as _};