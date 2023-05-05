import{X as v,Y as o,Z as u,K as y,A as f,r as h,W as p,j as b,J as L,a as t,$ as A,a1 as T,a2 as W}from"./index-f69be7d7.js";import{u as D,M as I,a as S}from"./useTable-ed21e2f1.js";import{P as M}from"./PageHeading-c7717559.js";import{C as E}from"./CustomTableHeading-e03faf26.js";import"./IconButton-5e93c969.js";import"./Toolbar-34ee48fc.js";const s="سحب",c={id:"",name:"",value:0,values:0},F=v({name:o().required("يرجى إدخال اسم الحساب"),value:u().required("يرجى كتابة المبلغ"),values:u().required("يرجى كتابة قيمة المبلغ"),note:o()}),C=()=>{const{dialog:m,setDialog:d,handleOpenAddDialog:U}=D(c),i=y();let a=f(e=>e.dailyRows.data).filter(e=>e.billType==="سحوبات");a=a.map(e=>({userId:e.User.id,billType:e.billType,name:e.User.name,id:e.id,value:e.value,values:e.values,note:e.note,createdAt:e.createdAt}));const l=[{id:"userId",label:"رقم الحساب",minWidth:80,align:"center",isField:!1},{id:"id",label:"رقم الفاتورة",minWidth:80,align:"center",isField:!1},{id:"name",label:"اسم الحساب",minWidth:150,align:"left",isField:!1,required:!0,isLink:!0},{id:"value",label:"المبلغ",minWidth:80,align:"center",isField:!0,format:e=>e.toLocaleString("en-US"),isMoney:!0},{id:"values",label:"القيمة",minWidth:80,align:"center",isField:!0,format:e=>e.toLocaleString("en-US"),isMoney:!0},{id:"createdAt",label:"التاريخ",minWidth:80,align:"center"}],n={edit:e=>{i(T(e))},delete:e=>i(W(e))},g={title:"الاجمالي",...a.reduce((e,r)=>(e.value+=r.value,e.values+=r.values,e),{value:0,values:0})};return h.useEffect(()=>{i(p())},[]),b(L,{title:`صفحة ${s}`,children:[t(M,{title:"صفحة السحوبات"}),t(A,{children:t(I,{columns:l,deletedLabel:`فاتورة ${s}`,setDialog:d,rows:a,COLUMNS:l,validationSchema:!0,dispatchers:n})}),t(E,{rows:g}),t(S,{title:`فاتورة ${s}`,dialog:m,setDialog:d,ROW_INTIAL_VALUE:c,FIELDS:l.filter(e=>e.isField),rows:a,validationSchema:F,dispatchers:n})]})};export{C as default};