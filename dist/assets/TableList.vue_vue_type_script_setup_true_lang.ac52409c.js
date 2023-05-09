import{d as K,E as W,b9 as X,k as D,C as R,bm as Y,O as Z,aB as ee,o as k,c as F,p as a,w as n,ba as le,bF as ae,q as o,z as V,a2 as A,m as e,bE as te,a3 as S,bi as $,V as P,F as ne,a as oe,x as d}from"./index.1bb36a93.js";import{_ as se}from"./PreloadInterno.vue_vue_type_script_setup_true_lang.45fe2ba0.js";import{u as ie}from"./useThirdStore.74e41bd2.js";import{V as re}from"./index.5010adc7.js";import{a as h,V as g}from"./VRow.971cb494.js";import{V as m}from"./VBtn.22d55266.js";import{V as N}from"./VSpacer.c965114a.js";import{V as E}from"./VDivider.5fbe829f.js";import{V as L}from"./VSelect.ff4ebc03.js";import{V as I}from"./VTextField.1b37a66e.js";import{V as O}from"./VContainer.fea237fc.js";import{V as de}from"./VSwitch.372fef15.js";import{V as ue}from"./VTable.ef7fd960.js";import{V as ce}from"./VPagination.37591e70.js";const me={class:"me-3",style:{width:"80px"}},pe={class:"me-3",style:{width:"80px"}},fe={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},ve={style:{width:"10rem"}},Ve=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Nombre tercero"),e("th",{scope:"col"},"Tipo de identificaci\xF3n"),e("th",{scope:"col"},"Identificaci\xF3n"),e("th",{scope:"col"},"Tipo regimen IVA"),e("th",{scope:"col"},"Direcci\xF3n"),e("th",{scope:"col"},"Ciudad"),e("th",{scope:"col"},"Tel\xE9fono"),e("th",{scope:"col"},"Nombres contacto"),e("th",{scope:"col"},"Acciones")])],-1),he={colspan:"9"},ye=e("td",null,[e("span",null," 123456 ")],-1),xe={class:"text-center",style:{width:"5rem"}},_e={class:"text-sm text-disabled"},De=K({__name:"TableList",setup(ge){const z=W(),r=ie(),{show:p,currentPage:i,thirds:w,totalPage:y,links:Q,typeOfThird:b,totalData:j,fiscalResponsability:T,formulario:x,searchThird:s,pathExcel:q,loading:U}=X(r),f=D(10),v=D(""),B=async(u,t=null)=>{if(r.clearFormulario(),r.typeAction=u,t){await r.fetchInfoThird(t);for(let l=0;l<T.value.length;l++)for(let c=0;c<x.value.arrayFiscalResponsability.length;c++)x.value.arrayFiscalResponsability.includes(T.value[l].id)&&(T.value[l].estado="Activo");for(let l=0;l<b.value.length;l++)for(let c=0;c<x.value.arrayTypeThird.length;c++)x.value.arrayTypeThird.includes(b.value[l].id)&&(b.value[l].estado="Activo")}else r.clearArrayOfThirds()},_=async()=>{await r.fetchAll({company_id:z.company.id,perPage:f.value,page:i.value,searchQuery:v.value,state:s.value.state,name:s.value.name,identifications:s.value.identifications})};R(i,async()=>{i.value>y.value&&(i.value=y.value)}),R(f,async()=>{i.value=1}),Y([i,v,f],async()=>{await _()});const M=Z(()=>{const u=w.value.length?(i.value-1)*y.value+1:0,t=w.value.length+(i.value-1)*y.value;return`Mostrando ${u} a ${t} de ${j.value} registros`}),G=async()=>{await r.excel({company_id:z.company.id,searchQuery:v.value,state:s.value.state,name:s.value.name}).then(u=>{window.open(q.value,"_blank")})},H=async(u,t)=>{r.changeState(u,t)},J=()=>{s.value={},_()};return ee(async()=>{await _()}),(u,t)=>(k(),F("div",null,[a(g,null,{default:n(()=>[a(h,{cols:"12"},{default:n(()=>[a(le,null,{default:n(()=>[a(ae,null,{default:n(()=>[a(m,{onClick:t[0]||(t[0]=l=>p.value=!o(p)),color:"orange-lighten-2",variant:"text"},{default:n(()=>[V(" Criterios de b\xFAsqueda ")]),_:1}),a(N),a(m,{icon:o(p)?"mdi-chevron-up":"mdi-chevron-down",onClick:t[1]||(t[1]=l=>p.value=!o(p))},null,8,["icon"])]),_:1}),a(re,null,{default:n(()=>[A(e("div",null,[a(E),a(te,null,{default:n(()=>[a(g,null,{default:n(()=>[a(h,{cols:"6"},{default:n(()=>[e("div",null,[a(L,{items:[{id:1,name:"Activo"},{id:0,name:"Inactivo"}],"item-title":"name",modelValue:o(s).state,"onUpdate:modelValue":t[2]||(t[2]=l=>o(s).state=l),"item-value":"id",label:"Estado"},null,8,["modelValue"])])]),_:1}),a(h,{cols:"6"},{default:n(()=>[e("div",null,[a(I,{label:"Tercero",modelValue:o(s).name,"onUpdate:modelValue":t[3]||(t[3]=l=>o(s).name=l)},null,8,["modelValue"])])]),_:1})]),_:1}),a(g,null,{default:n(()=>[a(h,{cols:"6"},{default:n(()=>[e("div",null,[a(I,{label:"Identificaci\xF3n",modelValue:o(s).identifications,"onUpdate:modelValue":t[4]||(t[4]=l=>o(s).identifications=l)},null,8,["modelValue"])])]),_:1})]),_:1}),a(g,null,{default:n(()=>[a(h,{cols:"12 d-flex justify-content-center"},{default:n(()=>[a(m,{color:"primary",class:"mr-2",onClick:_},{default:n(()=>[V("Buscar")]),_:1}),a(m,{color:"primary",onClick:J},{default:n(()=>[V("Limpiar Filtros")]),_:1})]),_:1})]),_:1})]),_:1})],512),[[S,o(p)]])]),_:1})]),_:1})]),_:1})]),_:1}),a(O,{fluid:"",class:"d-flex flex-wrap py-4 gap-4"},{default:n(()=>[e("div",me,[a(L,{modelValue:o(f),"onUpdate:modelValue":t[5]||(t[5]=l=>$(f)?f.value=l:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),e("div",pe,[a(m,{"mt-2":"",size:"x-small",color:"default",variant:"text",title:"Descargar",onClick:t[6]||(t[6]=l=>G())},{default:n(()=>[a(P,{size:"30",icon:"mdi-file-excel"}),V(" Excel ")]),_:1})]),a(N),e("div",fe,[e("div",ve,[a(I,{modelValue:o(v),"onUpdate:modelValue":t[7]||(t[7]=l=>$(v)?v.value=l:null),placeholder:"Buscar",density:"compact"},null,8,["modelValue"])]),a(m,{color:"primary",onClick:t[8]||(t[8]=l=>B("form"))},{default:n(()=>[V(" Crear ")]),_:1})])]),_:1}),a(E),a(ue,{class:"text-no-wrap"},{default:n(()=>[Ve,e("tbody",null,[A(e("tr",null,[e("td",he,[a(se)])],512),[[S,o(U)]]),(k(!0),F(ne,null,oe(o(w),(l,c)=>A((k(),F("tr",{key:c,style:{height:"3.75rem"}},[e("td",null,[e("span",null,d(l.name),1)]),e("td",null,[e("span",null,d(l.nametypeIdentificaction),1)]),e("td",null,[e("span",null,d(l.identifications),1)]),e("td",null,[e("span",null,d(l.nametypeRegimenIva),1)]),e("td",null,[e("span",null,d(l.address),1)]),e("td",null,[e("span",null,d(l.city),1)]),ye,e("td",null,[e("span",null,d(l.contact_name),1)]),e("td",null,[a(de,{modelValue:l.state,"onUpdate:modelValue":C=>l.state=C,color:"success",inset:"",value:l.state,"true-value":1,"false-value":0,"hide-details":"",onClick:C=>H(l,l.state)},null,8,["modelValue","onUpdate:modelValue","value","onClick"])]),e("td",xe,[a(m,{icon:"",size:"x-small",color:"default",variant:"text",onClick:C=>B("form",l.id)},{default:n(()=>[a(P,{size:"22",icon:"tabler-edit"})]),_:2},1032,["onClick"])])])),[[S,!o(U)]])),128))])]),_:1}),a(E),a(O,{fluid:"",class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:n(()=>[e("span",_e,d(o(M)),1),a(ce,{modelValue:o(i),"onUpdate:modelValue":t[9]||(t[9]=l=>$(i)?i.value=l:null),size:"small","total-visible":5,length:o(Q)},null,8,["modelValue","length"])]),_:1})]))}});export{De as _};
