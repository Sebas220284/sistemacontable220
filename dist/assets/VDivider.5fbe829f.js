import{Z as d,ad as c,ag as v,ar as u,a1 as h,O as m,az as a,R as g,p as k}from"./index.1bb36a93.js";const f=d({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...c()},setup(e,i){let{attrs:t}=i;const{themeClasses:o}=v(e),{backgroundColorClasses:n,backgroundColorStyles:l}=u(h(e,"color")),s=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=a(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=a(e.thickness)),r});return g(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value],style:[s.value,l.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};
