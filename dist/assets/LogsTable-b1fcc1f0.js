import{s as T,r as O,R as p,j as o,F as j,P as w,a as t,E as P,I as B}from"./index-f69be7d7.js";import{c as $,t as m,b as x,u as N,d as _,e as z,f as H,T as U,g as q,C as G,a as J,A as K,h as Q}from"./useTable-ed21e2f1.js";import{I as V}from"./IconButton-5e93c969.js";const X="تجربة",d=T($)(({theme:i})=>({[`&.${m.head}`]:{backgroundColor:"#237a23",color:"white"},[`&.${m.body}`]:{fontSize:14}})),Y=T(x)(({theme:i})=>({"&:nth-of-type(odd)":{backgroundColor:i.palette.action.hover},transition:"background-color 0.3s ease","&:last-child td, &:last-child th":{border:0},"&:hover":{backgroundColor:"#bdffdb !important"}})),ne=({columns:i,isMonthly:Z,deletedLabel:y,rows:s,rowInitialValue:c,validationSchema:k,dispatchers:g})=>{const{dialog:R,setDialog:h}=N(c),[I,b]=O.useState({status:!1,id:null}),[r,W]=p.useState(5),[f,u]=p.useState(0),S=e=>{h(()=>({selectedRow:e,status:!0,editing:!0}))},L=(e,n)=>{u(n)},v=e=>{W(+e.target.value),u(0)},C=f*r,D=C+r,E=s.slice(C,D),F=[...i,{id:"edit",label:"تعديل",align:"center",minWidth:"40px"},{id:"delete",label:"حذف",align:"center",minWidth:"40px"}],A=[{label:"تعديل",id:"edit",icon:t(K,{}),onClick:e=>{S(e)},align:"center"},{label:"حذف",id:"delete",icon:t(Q,{}),onClick:e=>{b({status:!0,id:e.invoice??e.id})},align:"center"}],M=(e,n,a)=>{const l=e.id==="accountName"?a.accountId:a.id;return e.isBill?t(P,{sx:{fontWeight:"bold"},children:n}):e.isMoney?t(P,{sx:{fontWeight:"bold",direction:"rtl"},children:n}):e.isLink?t(B,{to:`/customers/${l}`,style:{fontWeight:"bold",color:"black"},children:n}):n};return o(j,{children:[o(_,{component:w,children:[o(z,{sx:{minWidth:650},"aria-label":"simple table",children:[t(H,{children:t(x,{children:F.map(e=>t(d,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),t(U,{children:E.map((e,n)=>o(Y,{style:{backgroundColor:e.month==new Date().getMonth()+1&&"#bbff3666"},hover:!0,role:"checkbox",tabIndex:-1,children:[i.map(a=>{const l=e[a.id];return t(d,{align:a.align,children:M(a,l,e)},a.id)}),A.map((a,l)=>t(d,{align:a.align,children:t(V,{"aria-label":a.id,color:a.id==="delete"?"error":"info",onClick:()=>a.onClick(e),children:a.icon})},a.id))]},e.invoice??e.id))})]}),t(q,{rowsPerPageOptions:[5,10,25],component:"div",count:s.length,rowsPerPage:r,page:f,onPageChange:L,onRowsPerPageChange:v,dir:"ltr",labelRowsPerPage:""})]}),t(G,{deletedLabel:y,openConfirm:I,setOpenConfirm:b,dispatchers:g}),t(J,{title:X,dialog:R,setDialog:h,ROW_INTIAL_VALUE:c,FIELDS:i.filter(e=>e.isField),rows:s,validationSchema:k,dispatchers:g})]})};export{ne as L};
