(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[3],{118:function(t,n,e){"use strict";e(0);var a=e(119),c=e.n(a),r=e(3);n.a=function(t){var n=t.msg;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:c.a.wrapper,children:Object(r.jsx)("p",{className:c.a.notif,children:n})})})}},119:function(t,n,e){t.exports={wrapper:"Notification_wrapper__Uy_Qy",notif:"Notification_notif__1XW0G"}},122:function(t,n,e){t.exports={form:"ContactForm_form__1fuOn",btn:"ContactForm_btn__2Bpnz"}},123:function(t,n,e){t.exports={input:"Filter_input__2DoVp"}},124:function(t,n,e){t.exports={list:"ContactList_list__2T7aG"}},125:function(t,n,e){},129:function(t,n,e){"use strict";e.r(n);var a=e(0),c=e(5),r=e(42),o=e(43),i=e(45),u=e(44),s=e(122),l=e.n(s),f=e(117),b=e(17),h=e(23),d=e.n(h),j=e(13);d.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var p={addContact:function(t){return function(n){n(Object(j.b)()),d.a.post("contacts",t).then((function(t){var e=t.data;return e=n(Object(j.c)(e))})).catch((function(t){return n(Object(j.a)(t))}))}},deleteContact:function(t){return function(n){n(Object(j.e)()),d.a.delete("contacts/".concat(t)).then((function(){return n(Object(j.f)(t))})).catch((function(t){return n(Object(j.d)(t))}))}},getContacts:function(){return function(t){t(Object(j.h)()),d.a.get("contacts").then((function(n){var e=n.data;return t(Object(j.i)(e))})).catch((function(n){return t(Object(j.g)(n))}))}}},m=e(27),O=function(t){return t.contacts},g=function(t){return t.filter},x={getLoading:function(t){return t.loading},getContacts:O,getFilter:g,getFilteredContacts:Object(m.a)([O,g],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getContactById:Object(m.a)([O,function(t,n){return n}],(function(t,n){return t.find((function(t){return t.id===n}))}))},C=e(118),v=e(3),_=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=n.call.apply(n,[this].concat(o))).state={name:"",phone:"",isExist:!1},t.handleChange=function(n){var e=n.target,a=e.name,r=e.value;t.setState(Object(c.a)({},a,r))},t.handleSubmit=function(n){n.preventDefault();var e=t.state,a=e.name,c=e.phone,r=t.props,o=r.contacts,i=r.addContact,u={id:Object(f.a)(),name:a,phone:c};if(o.find((function(t){return console.log(t.name),t.name===u.name})))return t.setState({isExist:!0}),void setTimeout((function(){return t.setState({isExist:!1})}),2e3);i(u),t.setState({name:"",phone:""})},t}return Object(o.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.phone,a=t.isExist,c=this.handleSubmit,r=this.handleChange;return Object(v.jsxs)(v.Fragment,{children:[a&&Object(v.jsx)(C.a,{msg:"contact already exist"}),Object(v.jsxs)("form",{className:l.a.form,onSubmit:c,children:[Object(v.jsx)("input",{onChange:r,placeholder:"name",name:"name",type:"text",value:n,required:!0}),Object(v.jsx)("input",{onChange:r,placeholder:"phone number",name:"phone",type:"tel",value:e,required:!0}),Object(v.jsx)("button",{className:l.a.btn,type:"submit",children:"Add contact"})]})]})}}]),e}(a.Component),y={addContact:p.addContact},F=Object(b.b)((function(t){return{contacts:x.getContacts(t)}}),y)(_),w=e(123),N=e.n(w),k={filterContact:e(57).a},S=Object(b.b)((function(t){return{filter:x.getFilter(t)}}),k)((function(t){var n=t.filterContact,e=t.filter;return Object(v.jsx)("input",{value:e,className:N.a.input,onChange:function(t){return n(t.target.value)},placeholder:"Find contacts by name",name:"filter",type:"text"})})),D=e(124),E=e.n(D),L={handleDelete:p.deleteContact},q=Object(b.b)((function(t){return{showContacts:x.getFilteredContacts(t)}}),L)((function(t){var n=t.showContacts,e=t.handleDelete;return Object(v.jsx)(v.Fragment,{children:n&&Object(v.jsx)("ul",{className:E.a.list,children:n.map((function(t){return Object(v.jsxs)("li",{onClick:function(){e(t.id)},children:[t.name,Object(v.jsx)("span",{children:t.phone}),Object(v.jsx)("button",{className:E.a.btn,type:"button",children:"Delete"})]},t.id)}))})})}));e(125),n.default=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)(S,{}),Object(v.jsx)(q,{})]})}}}]);
//# sourceMappingURL=3.efc95939.chunk.js.map