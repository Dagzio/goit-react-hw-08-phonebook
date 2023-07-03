"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{1742:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,s,a,i,o=t(1413),c=t(5682),l=t(3531),d=t(8361),u=t(9126),h=t(9195),p=t(6351),m=t(184),x=function(){var e=(0,l.useDispatch)(),n=(0,h.cI)(),t=n.register,r=n.handleSubmit,s=n.reset,a=(0,l.useSelector)(p.selectContacts);return(0,m.jsxs)(c.q8,{onSubmit:r((function(n){a.find((function(e){return e.name===n.name}))?alert(n.name+" is already in your contacts"):e((0,d.uK)(n)),s({name:"",number:""})})),children:[(0,m.jsxs)(c.__,{children:["Name:",(0,m.jsx)(c.II,(0,o.Z)((0,o.Z)({type:"text"},t("name")),{},{id:"name",placeholder:"For example Jacob Mercer",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}))]}),(0,m.jsxs)(c.__,{children:["Number:",(0,m.jsx)(c.II,(0,o.Z)((0,o.Z)({type:"tel"},t("number")),{},{id:"number",placeholder:"Starts with '+'",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}))]}),(0,m.jsxs)(c.zx,{type:"submit",children:["Add to contact ",(0,m.jsx)(u.b40,{size:"10px"})]})]})},f=t(168),b=t(5867),j=b.ZP.div(r||(r=(0,f.Z)(["\npadding: 30px;\nwidth: 420px;\n"]))),Z=b.ZP.h2(s||(s=(0,f.Z)(["\nmargin-bottom: 12px;\nfont-size: 28px;\n"]))),g=function(e){var n=e.title,t=e.children;return(0,m.jsxs)("div",{children:[(0,m.jsx)(Z,{children:n}),t]})},k=b.ZP.ol(a||(a=(0,f.Z)(["\n  margin: 0;\n  padding-left: 16px;\n"]))),w=b.ZP.button(i||(i=(0,f.Z)(["\n  margin-left: 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border: transparent;\n"]))),y=t(7425),C=function(){var e=(0,l.useDispatch)(),n=(0,l.useSelector)(p.selectContacts),t=(0,l.useSelector)(p.selectFilterValue),r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,m.jsx)("div",{children:n.length>0?(0,m.jsx)(k,{children:r.map((function(n){return(0,m.jsxs)("li",{children:[n.name," : ",n.number,(0,m.jsx)(w,{type:"button",onClick:function(){return e((0,d.GK)(n))},children:(0,m.jsx)(y.kAP,{color:"darkblue"})})]},n.id)}))}):(0,m.jsx)("strong",{children:"There are no contacts in your phonebook yet."})})},v=t(117),S=t(2791),_=t(3975),z=function(){var e=(0,l.useSelector)(p.selectIsLoading),n=(0,l.useDispatch)();return(0,S.useEffect)((function(){n((0,d.yF)())}),[n]),(0,m.jsxs)(j,{children:[(0,m.jsx)(g,{title:"Phonebook",children:(0,m.jsx)(x,{})}),e?(0,m.jsx)(_.g4,{height:"70",width:"70",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,m.jsxs)(g,{title:"Contacts",children:[(0,m.jsx)(v.Z,{}),(0,m.jsx)(C,{})]})]})}}}]);
//# sourceMappingURL=742.306fdfe4.chunk.js.map