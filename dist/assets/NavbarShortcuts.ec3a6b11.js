import{d as b,j as h,o,b as n,w as e,p as t,V as l,ba as g,bb as V,bc as x,z as C,q as u,bd as v,c as y,F as A,a as S,s as z,G as k,m as p,x as d}from"./index.1bb36a93.js";import{V as w}from"./VMenu.a89a99b8.js";import{V as m}from"./VBtn.22d55266.js";import{V as B}from"./VDivider.5fbe829f.js";import{V as I,a as D}from"./VRow.971cb494.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.cb53369a.js";import"./easing.36b781ab.js";import"./lazy.6b2881de.js";/* empty css              */const N={class:"text-base font-weight-semibold mt-2 mb-0"},F={class:"text-sm"},M=b({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(r){const s=r,i=h();return(f,c)=>(o(),n(m,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(l,{size:"24",icon:s.togglerIcon},null,8,["icon"]),t(w,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(g,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(V,{class:"py-4"},{append:e(()=>[t(m,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(l,{size:"22",icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(x,null,{default:e(()=>[C("Shortcuts")]),_:1})]),_:1}),t(B),t(u(v),{options:{wheelPropagation:!1}},{default:e(()=>[t(I,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),y(A,null,S(s.shortcuts,(a,_)=>(o(),n(D,{key:a.title,cols:"6",class:z(["text-center border-t cursor-pointer pa-4",(_+1)%2?"border-e":""]),onClick:$=>u(i).push(a.to)},{default:e(()=>[t(k,{variant:"tonal",size:"48"},{default:e(()=>[t(l,{icon:a.icon},null,8,["icon"])]),_:2},1024),p("h6",N,d(a.title),1),p("span",F,d(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Q=b({__name:"NavbarShortcuts",setup(r){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(i,f)=>{const c=M;return o(),n(c,{shortcuts:s})}}});export{Q as default};