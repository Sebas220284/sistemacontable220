import{d as k,k as I,D as L,E as v,o as n,b as l,w as t,p as e,G as d,H as p,q as a,z as s,x as _,I as V,V as g}from"./index.1bb36a93.js";import{V as w}from"./VMenu.a89a99b8.js";import{V as D,a as i,b as c,c as S}from"./VList.3fcbcdee.js";import{V as z,a as y}from"./VBadge.474af523.js";import{V as b}from"./VDivider.5fbe829f.js";const q=k({__name:"UserProfile",setup(A){const x=I(L()),o=v(),h=async()=>{await o.logout()},C=()=>{o.company={},o.getMenuData};return(B,u)=>(n(),l(y,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[e(d,{class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>{var m,f;return[e(p,{src:(f=(m=a(o).user)==null?void 0:m.photo)!=null?f:a(x).baseURL+"img/user.png"},null,8,["src"]),e(w,{activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[e(D,null,{default:t(()=>[e(i,null,{prepend:t(()=>[e(z,{start:""},{default:t(()=>[e(y,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[e(d,{color:"primary",variant:"tonal"},{default:t(()=>{var r;return[e(p,{src:(r=a(o).user)==null?void 0:r.photo},null,8,["src"])]}),_:1})]),_:1})]),_:1})]),default:t(()=>[e(c,{class:"font-weight-semibold"},{default:t(()=>[s(_(a(o).user.name),1)]),_:1}),e(S,null,{default:t(()=>[s(_(a(o).user.role_name),1)]),_:1})]),_:1}),a(o).company.id&&!a(o).user.company_id?(n(),l(b,{key:0,class:"my-2"})):V("",!0),a(o).company.id&&!a(o).user.company_id?(n(),l(i,{key:1,to:"/admin/company",onClick:u[0]||(u[0]=r=>C())},{prepend:t(()=>[e(g,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(c,null,{default:t(()=>[s("Cambiar Empresa")]),_:1})]),_:1})):V("",!0),e(b,{class:"my-2"}),e(i,{to:{name:"Login"},onClick:h},{prepend:t(()=>[e(g,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(c,null,{default:t(()=>[s("Cerrar sesi\xF3n")]),_:1})]),_:1})]),_:1})]),_:1})]}),_:1})]),_:1}))}});export{q as _};
