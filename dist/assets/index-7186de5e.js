import{U as b,V as s,W as l,A as p,N as f,r as L,S,j as u,J as U,a as i,X as W,H as F,a6 as y,a7 as A,a8 as B}from"./index-13ef8f77.js";import{u as T,M as x,a as E}from"./useTable-2510a289.js";import{P as I}from"./PageHeading-1f407a18.js";import"./IconButton-19f28d84.js";import"./Toolbar-7efed528.js";const m="الشركاء",n=[{id:"id",label:"رقم الحساب",minWidth:80,align:"center",isField:!1},{id:"name",label:"اسم الحساب",minWidth:150,align:"left",isField:!0,required:!0,isLink:!0,urlPath:"partners"},{id:"mobileNumber",label:"رقم الهاتف المحمول",minWidth:150,align:"center",isField:!0,required:!0},{id:"address",label:"العنوان",minWidth:100,align:"center",isField:!0},{id:"note",label:"ملاحظة",minWidth:170,align:"left",isField:!0},{id:"accountBalance",label:"صافي الحساب",minWidth:50,align:"center",isField:!0,format:a=>a.toLocaleString("en-US"),isMoney:!0},{id:"accountBalanceValues",label:"قيمة صافي الحساب",minWidth:100,align:"center",isField:!0,format:a=>a.toLocaleString("en-US"),isMoney:!0}],g={id:"",name:"",mobileNumber:"",address:"",note:"",accountBalance:0,accountBalanceValues:0},N=b({name:s().required("يرجى إدخال اسم الحساب"),mobileNumber:l().required("يرجى إدخال رقم الهاتف المحمول"),address:s(),accountBalance:l().required("يرجى كتابة صافي الحساب"),accountBalanceValues:l().required("يرجى كتابة قيمة صافي الحساب"),note:s()}),_=()=>{const{dialog:a,setDialog:d,handleOpenAddDialog:h}=T(g),r=p(e=>e.users.data),o=r==null?void 0:r.filter(e=>e.userType==="شريك"),t=f();L.useEffect(()=>{t(S())},[]);const c={add:e=>t(y({...e,userType:"شريك"})),edit:e=>t(A({...e})),delete:e=>t(B(e))};return u(U,{title:`صفحة ${m}`,children:[i(I,{title:"صفحة الشركاء  "}),u(W,{children:[i(x,{columns:n,deletedLabel:`فاتورة ${m}`,setDialog:d,rows:o,COLUMNS:n,validationSchema:!0,dispatchers:c}),i(F,{variant:"contained",sx:{height:"60px",margin:"2rem auto",display:"block",width:"50%"},color:"error",onClick:h,children:"اضافة شريك"})]}),i(E,{title:"اضافة شريك",dialog:a,setDialog:d,ROW_INTIAL_VALUE:g,FIELDS:n.filter(e=>e.isField),rows:o,validationSchema:N,dispatchers:c})]})};export{_ as default};