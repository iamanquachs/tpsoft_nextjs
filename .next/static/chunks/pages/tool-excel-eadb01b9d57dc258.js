(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{3410:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tool-excel",function(){return l(918)}])},918:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return r}});var n=l(5893),s=l(7294),o=l(4105);function r(){let[e,t]=(0,s.useState)("Nhập t\xean bảng"),[l,r]=(0,s.useState)(null),[i,a]=(0,s.useState)(null),[c,u]=(0,s.useState)(null),d=["application/vnd.ms-excel"],f=e=>{let t=e.target.files[0];if(t){if(t&&d.includes(t.type)){let e=new FileReader;e.readAsArrayBuffer(t),e.onload=e=>{a(null),r(e.target.result)}}else a("Please select only excel file types"),r(null)}else console.log("plz select your file")},h=t=>{if(t.preventDefault(),null!==l){let t=o.ij(l,{type:"buffer"}),s=t.SheetNames[0],r=t.Sheets[s],i=o.P6.sheet_to_json(r,{header:1,dateNF:"yyyy-MM-dd"});var n="INSERT INTO "+e+"("+i[0].toString()+") \nVALUES\n";for(let e=1;e<i.length;e++){console.log(e);let t=i[e],l=[];for(let e=0;e<=t.length;e++)l.push("'"+t[e]+"'");n+="("+l.toString().replace(/undefined/g,"").replace(/32874/g,"1990-01-01")+")"+(e==i.length-1?"":",\n")}let a=new Blob([n],{type:"sql"}),c=URL.createObjectURL(a),u=document.createElement("a");u.download=e+".sql",u.href=c,u.click()}else u(null)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"section_product",children:(0,n.jsx)("div",{className:"section_home_title",children:(0,n.jsx)("p",{children:"Convert Excel to Mysql"})})}),(0,n.jsx)("div",{id:"tool_excel",className:"container",children:(0,n.jsx)("form",{className:"form-group",autoComplete:"off",onSubmit:h,children:(0,n.jsxs)("div",{className:"form_convert",children:[(0,n.jsx)("input",{value:e,className:"form-control",onChange:e=>t(e.target.value),type:"text",placeholder:"T\xean bảng",onFocus:e=>e.target.select()}),(0,n.jsx)("label",{htmlFor:"inputField",className:"btn btn-info",children:"Chọn file Excel"}),(0,n.jsx)("input",{hidden:!0,id:"inputField",type:"file",className:"form-control",onChange:f,required:!0}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Chuyển đổi"})]})})})]})}},5103:function(){},2061:function(){}},function(e){e.O(0,[251,774,888,179],function(){return e(e.s=3410)}),_N_E=e.O()}]);