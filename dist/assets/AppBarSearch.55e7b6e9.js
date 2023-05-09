import{d as N,bP as j,k as g,bQ as f,C as I,aP as E,o as r,b as y,w as t,p as a,ba as q,bE as C,q as l,bi as O,bR as z,V as u,m as n,bd as X,a2 as D,c as d,F as b,a as x,z as B,x as V,n as w,a3 as $,I as R,bj as G,bk as H,y as J}from"./index.1bb36a93.js";import{V as W}from"./VTextField.1b37a66e.js";import{V as A}from"./VBtn.22d55266.js";import{V as Y}from"./VDivider.5fbe829f.js";import{V as L,e as Z,a as Q,b as ee}from"./VList.3fcbcdee.js";import{V as se,a as te}from"./VRow.971cb494.js";import{V as ae}from"./VDialog.5c3f52d4.js";import"./VCounter.f77d3b0b.js";import"./index.5010adc7.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";/* empty css              */import"./scopeId.cb53369a.js";import"./lazy.6b2881de.js";const le=m=>(G("data-v-49961e29"),m=m(),H(),m),re={class:"d-flex align-center"},oe={class:"h-100"},ie={class:"text-xs text-disabled text-uppercase"},ne={class:"h-100"},ce={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ue={class:"text-h6 my-3"},de={key:0,class:"mt-8"},pe=le(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),he=["onClick"],fe={class:"text-sm"},me=N({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchQuery:null,searchResults:null,suggestions:null,noDataSuggestion:null},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(m,{emit:_}){const o=m,{ctrl_k:K,meta_k:T}=j(),k=g(),i=g(structuredClone(f(o.searchQuery))),F=g(),S=g(structuredClone(f(o.isDialogVisible))),p=g(structuredClone(f(o.searchResults)));I(o,()=>{S.value=structuredClone(f(o.isDialogVisible)),p.value=structuredClone(f(o.searchResults)),i.value=structuredClone(f(o.searchQuery))}),I([K,T],()=>{S.value=!0,_("update:isDialogVisible",!0)});const v=()=>{_("update:isDialogVisible",!1),_("update:searchQuery","")};E(()=>{i.value.length||(p.value=[])});const P=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=k.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=k.value)==null||s.focus("prev"))},U=e=>{_("update:isDialogVisible",e),_("update:searchQuery","")},M=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(r(),y(ae,{"max-width":"600","model-value":l(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":U,onKeyup:z(v,["esc"])},{default:t(()=>[a(q,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(C,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(W,{ref_key:"refSearchInput",ref:F,modelValue:l(i),"onUpdate:modelValue":[c[0]||(c[0]=s=>O(i)?i.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",l(i)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:z(v,["esc"]),onKeydown:P},{"prepend-inner":t(()=>[a(A,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",re,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:v}," [esc] "),a(A,{icon:"",variant:"text",color:"default",size:"x-small",onClick:v},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(Y),a(l(X),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[D(a(l(L),{ref_key:"refSearchList",ref:k,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(r(!0),d(b,null,x(l(p),s=>(r(),d(b,{key:s.title},["header"in s?(r(),y(l(Z),{key:0,class:"text-disabled"},{default:t(()=>[B(V(M(s.title)),1)]),_:2},1024)):w(e.$slots,"searchResult",{key:1,item:s},()=>[a(l(Q),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(ee,null,{default:t(()=>[B(V(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,l(i).length&&!!l(p).length]]),D(n("div",oe,[w(e.$slots,"suggestions",{},()=>[a(C,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[o.suggestions?(r(),y(se,{key:0,class:"gap-y-4"},{default:t(()=>[(r(!0),d(b,null,x(o.suggestions,s=>(r(),y(te,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",ie,V(s.title),1),a(l(L),{class:"card-list"},{default:t(()=>[(r(!0),d(b,null,x(s.content,h=>(r(),y(l(Q),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:_e=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):R("",!0)]),_:1})],!0)],512),[[$,!!l(p)&&!l(i)]]),D(n("div",ne,[w(e.$slots,"noData",{},()=>[a(C,{class:"h-100"},{default:t(()=>[n("div",ce,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ue,' No Result For "'+V(l(i))+'" ',1),o.noDataSuggestion?(r(),d("div",de,[pe,(r(!0),d(b,null,x(o.noDataSuggestion,s=>(r(),d("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",fe,V(s.title),1)],8,he))),128))])):R("",!0)])]),_:1})],!0)],512),[[$,!l(p).length&&l(i).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}});const Be=J(me,[["__scopeId","data-v-49961e29"]]);export{Be as default};
