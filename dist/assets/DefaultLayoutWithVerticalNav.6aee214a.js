import{b9 as w,E as g,d as I,j as T,r as _,o as a,b as i,w as t,p as e,V as l,ba as z,bb as A,bc as $,z as h,q as o,bd as L,c as p,F as v,a as k,s as N,m as c,x as C,t as P,i as S,I as y,T as B,e as F,be as D}from"./index.1bb36a93.js";import E from"./Footer.4887e9c8.js";import{_ as M}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang.b88fd5d4.js";import{_ as j}from"./UserProfile.vue_vue_type_script_setup_true_lang.0a254f1c.js";import{V as W}from"./VMenu.a89a99b8.js";import{V as f}from"./VBtn.22d55266.js";import{V as O}from"./VDivider.5fbe829f.js";import{V as U,a as q}from"./VRow.971cb494.js";import G from"./ResetSessionTimeout.0632e3e5.js";import{V as H}from"./VSpacer.c965114a.js";import"./VList.3fcbcdee.js";import"./index.5010adc7.js";import"./VBadge.474af523.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.cb53369a.js";import"./easing.36b781ab.js";import"./lazy.6b2881de.js";/* empty css              */const{getMenuData:J}=w(g()),K=J,Q={class:"text-base font-weight-semibold mt-2 mb-0"},X={class:"mx-5"},Y={style:{"list-style-type":"circle","text-align":"initial"}},Z=I({__name:"NavbarMenuTop",setup(R){const m=[{title:"Proceso de ventas",links:[{icon:"tabler-user",title:"Factura",to:{name:"Admin-Invoice-Index"}},{icon:"tabler-user",title:"Recibo Caja",to:{name:"Admin-CashReceipt-Index"}}]},{title:"Proceso de compras",links:[]},{title:"Otros",links:[]},{title:"Catalogos",links:[{icon:"tabler-user",title:"Tercero",to:{name:"Admin-Third-Index"}},{icon:"tabler-user",title:"Usuario",to:{name:"Admin-User-Index"}},{icon:"tabler-user",title:"Empleado",to:{name:"Admin-Employee-Index"}},{icon:"tabler-user",title:"N\xF3mina",to:{name:"Admin-Payroll-Index"}},{icon:"tabler-user",title:"Producto/Servicio",to:{name:"Admin-Product-Index"}}]}],d=T();return(x,b)=>{const V=_("RouterLink");return a(),i(f,{variant:"text",color:"default",size:"small",icon:""},{default:t(()=>[e(l,{size:"24",icon:"tabler-layout-grid-add"}),e(W,{activator:"parent",offset:"14px",location:"bottom end"},{default:t(()=>[e(z,{width:"430","max-height":"560",class:"d-flex flex-column"},{default:t(()=>[e(A,{class:"py-4"},{append:t(()=>[e(f,{size:"x-small",variant:"text",color:"default",icon:""},{default:t(()=>[e(l,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:t(()=>[e($,null,{default:t(()=>[h("M\xF3dulos")]),_:1})]),_:1}),e(O),e(o(L),{options:{wheelPropagation:!1}},{default:t(()=>[e(U,{class:"ma-0 mt-n1"},{default:t(()=>[(a(),p(v,null,k(m,(n,u)=>e(q,{key:n.title,cols:"6",class:N(["text-center border-t cursor-pointer pa-4",(u+1)%2?"border-e":""]),onClick:s=>o(d).push(n.to)},{default:t(()=>[c("h6",Q,C(n.title),1),c("ul",X,[(a(!0),p(v,null,k(n.links,(s,r)=>(a(),p("li",Y,[e(V,{to:s.to,class:"mr-2"},{default:t(()=>[h(C(s.title),1)]),_:2},1032,["to"])]))),256))])]),_:2},1032,["class","onClick"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),ee={class:"d-flex h-100 align-center"},te=c("div",{class:"d-flex justify-space-around mr-2"},null,-1),ke=I({__name:"DefaultLayoutWithVerticalNav",setup(R){const{appRouteTransition:m,isLessThanOverlayNavBreakpoint:d}=P(),{width:x}=S(),b=g();return(V,n)=>{const u=_("RouterLink"),s=_("RouterView");return a(),i(o(D),{"nav-items":o(K)},{navbar:t(({toggleVerticalOverlayNavActive:r})=>[c("div",ee,[o(d)(o(x))?(a(),i(f,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:oe=>r(!0)},{default:t(()=>[e(l,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):y("",!0),e(M),e(H),e(Z),te,e(G),o(b).company.id?(a(),i(u,{key:1,to:{name:"Admin-Configurations-Index"},class:"mr-2"},{default:t(()=>[e(l,{icon:"mdi-cog"})]),_:1})):y("",!0),e(j)])]),footer:t(()=>[e(E)]),default:t(()=>[e(s,null,{default:t(({Component:r})=>[e(B,{name:o(m),mode:"out-in"},{default:t(()=>[(a(),i(F(r)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}});export{ke as default};
