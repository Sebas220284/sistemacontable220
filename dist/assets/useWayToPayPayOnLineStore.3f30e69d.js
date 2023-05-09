import{bo as l,bg as i,bp as r,bq as c}from"./index.1bb36a93.js";import{S as h}from"./sweetalert2.74fe64d4.js";const s=c(),y=l("useWayToPayPayOnLineStore",{state:()=>({loading:!1,typeAction:"list",payOnLines:[],paymentMethods:[],relatedTos:[],ledgerAccountAuxiliar:[],payOnLineData:{},keyList:0,totalData:0,totalPage:0,currentPage:1,lastPage:0,routeName:"",formulario:{company_id:null,code:null,name:"",related_to_id:1,ledger_account_auxiliary_id:null,payment_method_id:null}}),getters:{},actions:{clearFormulario(){this.formulario={company_id:null,code:null,name:"",related_to_id:1,ledger_account_auxiliary_id:null,payment_method_id:null}},async fetchAll(t){this.loading=!0,await i.post("/payOnLine-list",t).then(e=>{this.loading=!1,this.payOnLines=e.data.payOnLines,this.relatedTos=e.data.relatedTo,this.totalData=e.data.totalData,this.totalPage=e.data.totalPage,this.currentPage=e.data.currentPage,this.lastPage=e.data.lastPage}).catch(async e=>{this.loading=!1,console.log(await e)})},async fetchLedgerAccountAuxiliaryList(t){this.loading=!0,await i.post("/ledgerAccount-auxiliary-list",t).then(e=>{this.loading=!1,this.ledgerAccountAuxiliar=e.data.ledgerAccountAuxiliar}).catch(async e=>{this.loading=!1,console.log(await e)})},async fetchLedgerPaymentMethodsList(t){return this.loading=!0,await i.post("/paymentMethods-list",t).then(a=>(this.loading=!1,this.paymentMethods=a.data.paymentMethods)).catch(async a=>{this.loading=!1,console.log(await a)})},async fetchSave(){const t=r();return t.isLoading=!0,await await i.post("/payOnLine-create",this.formulario).then(a=>(t.isLoading=!1,a.data.code===200&&s.toast("\xC9xito",a.data.message,"success"),a.data.code===500&&s.toast("Error",a.data.message,"danger"),a.data.status===422?(s.toast("Error",a.data.message,"danger"),{error:a.data.errors,status:a.data.status}):{status:a.data.code,formedit:a.data.data})).catch(async a=>(t.isLoading=!1,console.log("datadata",a.response),a.response.status))},clonarForm(){for(const t in this.formulario)this.payOnLineData[t]=this.formulario[t]},async fetchInfoGeneral(t){const e=r();if(t!==this.payOnLineData.id)e.isLoading=!0,await i.get(`/payOnLine-info/${t}`).then(async a=>{e.isLoading=!1,this.formulario=await a.data.data,this.clonarForm(),this.payOnLineData.id=t}).catch(async a=>{e.isLoading=!1,console.log(await a)});else for(const a in this.payOnLineData)this.formulario[a]=this.payOnLineData[a]},changeState(t,e){const a=r();let o="";e==0?o="activar":o="inactivar",h.fire({title:"\xBFEst\xE1 seguro de "+o+" el Registro seleccionado?",showDenyButton:!0,confirmButtonText:"Si",denyButtonText:"No",allowOutsideClick:!1}).then(d=>{d.isConfirmed?(a.isLoading=!0,i.post("/payOnLine-changeState",t).then(n=>{a.isLoading=!1,n.data.code==200&&s.toast("\xC9xito",n.data.msg,"success"),n.data.code==500&&s.toast("\xC9xito",n.data.msg,"danger")})):o=="activar"?t.in_use=0:t.in_use=1})}}});export{y as u};
