"use strict";(self.webpackChunkfoo=self.webpackChunkfoo||[]).push([[779],{669:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(5048),s="ContactList_contacts__jDmyV",r=n(6673),c=n(5302),i=n(4808),o=n(885),u="ContactsItem_contact__3h39i",l="ContactsItem_name__woMRI",d="ContactsItem_number__hMcY4",m="ContactsItem_button__uPo7U",h=n(184);var p=function(e){var t=e.contact,n=c.useDeleteContactMutation(),a=(0,o.Z)(n,2),s=a[0],i=a[1].isLoading;return(0,h.jsxs)("li",{className:u,children:[(0,h.jsxs)("p",{className:l,children:[t.name," :"]}),(0,h.jsx)("p",{className:d,children:t.number}),(0,h.jsx)("button",{className:m,type:"button",onClick:function(){return s(t.id)},disabled:i,children:i?(0,h.jsx)(r.L,{}):(0,h.jsx)("span",{children:"Delete"})})]})};var b=function(){var e=c.useFetchContactsQuery(),t=e.data,n=e.isLoading,o=(0,a.v9)(i.getFilter),u=function(){var e=o.toLocaleLowerCase();return t&&t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}();return(0,h.jsxs)("div",{children:[n&&(0,h.jsx)(r.a,{}),t&&(0,h.jsx)("ol",{className:s,children:u.map((function(e){return(0,h.jsx)(p,{contact:e},e.id)}))})]})},x=n(4165),_=n(5861),f=n(2791),j=n(513);var v=function(){var e=c.useCreateContactMutation(),t=(0,o.Z)(e,2),n=t[0],a=t[1].isLoading,s=c.useFetchContactsQuery().data,i=(0,f.useState)(""),u=(0,o.Z)(i,2),l=u[0],d=u[1],m=(0,f.useState)(""),p=(0,o.Z)(m,2),b=p[0],v=p[1],C=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":v(a)}},N=function(){var e=(0,_.Z)((0,x.Z)().mark((function e(t){var a,r;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={name:l,number:b},t.preventDefault(),r=a.name.toLocaleLowerCase(),!s.find((function(e){return e.name.toLocaleLowerCase()===r}))){e.next=5;break}return e.abrupt("return",alert("".concat(a.name," is already in contacts")));case 5:return e.next=7,n(a);case 7:Z();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){d(""),v("")};return(0,h.jsxs)("form",{onSubmit:N,children:[(0,h.jsxs)("label",{className:j.Z.label,children:[(0,h.jsx)("span",{children:"Name"}),(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:l,onChange:C,className:j.Z.input})]}),(0,h.jsxs)("label",{className:j.Z.label,children:[(0,h.jsx)("span",{children:"Number"}),(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:b,onChange:C,className:j.Z.input})]}),(0,h.jsx)("div",{className:j.Z.buttonDiv,children:(0,h.jsx)("button",{type:"submit",className:j.Z.button,children:a?(0,h.jsx)(r.a,{}):(0,h.jsx)("div",{children:" Add contact"})})})]})},C="Filter_label__vEd1E",N="Filter_input__N7T3z";var Z=function(){var e=(0,a.I0)(),t=(0,a.v9)(i.getFilter);return(0,h.jsxs)("label",{className:C,children:[(0,h.jsx)("span",{children:"Find contacts by name"}),(0,h.jsx)("input",{type:"text",value:t,onChange:function(t){e(i.filterItems(t.currentTarget.value))},className:N})]})},y=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(v,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(Z,{}),(0,h.jsx)(b,{})]})}},513:function(e,t){t.Z={label:"Form_label__8nx+5",button:"Form_button__8NOIT",buttonDiv:"Form_buttonDiv__Hu9Rs",input:"Form_input__FTtTw"}}}]);
//# sourceMappingURL=contacts-view.7485a34a.chunk.js.map