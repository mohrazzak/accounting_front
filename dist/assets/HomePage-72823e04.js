import{a as t,J as r,A as i,D as o,K as a,I as c,j as l,H as p,E as u}from"./index-13ef8f77.js";const d=()=>{let n=i(e=>e.pages);return n=n.map(e=>({...e,icon:o(e.icon)})),n=n.filter(e=>e.url!=="/"),t(a,{container:!0,spacing:3,children:n.map((e,s)=>t(a,{item:!0,xs:s===0?12:6,sx:{justifyContent:"center",mb:2,p:1},children:t(c,{to:e.url,style:{listStyle:"none"},children:l(p,{variant:"contained",sx:{fontSize:"1.5rem",display:"flex",justifyContent:s===0?"space-evenly":"space-between",width:"100%",height:"80px"},children:[t(e.icon,{}),t(u,{fontSize:"1.2rem",children:e.title})]})})},s))})},m=()=>t(r,{children:t(d,{})});export{m as default};
