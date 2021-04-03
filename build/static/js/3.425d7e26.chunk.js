(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[3],{119:function(t,e,n){"use strict";n(0);var a=n(120),c=n.n(a),r=n(3);e.a=function(t){var e=t.msg;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:c.a.wrapper,children:Object(r.jsx)("p",{className:c.a.notif,children:e})})})}},120:function(t,e,n){t.exports={wrapper:"Notification_wrapper__Uy_Qy",notif:"Notification_notif__1XW0G"}},123:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",btn:"ContactForm_btn__2Bpnz"}},124:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},125:function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},126:function(t,e,n){},130:function(t,e,n){"use strict";n.r(e);var a=n(43),c=n(44),r=n(46),o=n(45),i=n(0),u=n(15),s=n(22),l=n.n(s),b=n(14);l.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var f={addContact:function(t){var e=t.name,n=t.number;return function(t){t(Object(b.b)()),l.a.post("contacts",{name:e,number:n}).then((function(e){var n=e.data;return console.log(n),n=t(Object(b.c)(n))})).catch((function(e){return t(Object(b.a)(e))}))}},deleteContact:function(t){return function(e){e(Object(b.e)()),l.a.delete("contacts/".concat(t)).then((function(){return e(Object(b.f)(t))})).catch((function(t){return e(Object(b.d)(t))}))}},getContacts:function(){return function(t,e){var n=e();t(Object(b.h)()),l.a.defaults.headers.common.Authorization="Bearer ".concat(n.auth.token),l.a.get("contacts").then((function(e){var n=e.data;return t(Object(b.i)(n))})).catch((function(e){return t(Object(b.g)(e))}))}}},h=n(5),j=n(123),d=n.n(j),p=n(118),m=n(26),O=function(t){return t.contacts},g=function(t){return t.filter},v={getLoading:function(t){return t.loading},getContacts:O,getFilter:g,getFilteredContacts:Object(m.a)([O,g],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),getContactById:Object(m.a)([O,function(t,e){return e}],(function(t,e){return t.find((function(t){return t.id===e}))}))},C=n(119),x=n(3),y=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",phone:"",isExist:!1},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.phone,r=t.props,o=r.contacts,i=r.addContact,u={id:Object(p.a)(),name:a,number:c};if(o.find((function(t){return t.name===u.name})))return t.setState({isExist:!0}),void setTimeout((function(){return t.setState({isExist:!1})}),2e3);i(u),t.setState({name:"",phone:""})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone,a=t.isExist,c=this.handleSubmit,r=this.handleChange;return Object(x.jsxs)(x.Fragment,{children:[a&&Object(x.jsx)(C.a,{msg:"contact already exist"}),Object(x.jsxs)("form",{className:d.a.form,onSubmit:c,children:[Object(x.jsx)("input",{onChange:r,placeholder:"name",name:"name",type:"text",value:e,required:!0}),Object(x.jsx)("input",{onChange:r,placeholder:"phone number",name:"phone",type:"tel",value:n,required:!0}),Object(x.jsx)("button",{className:d.a.btn,type:"submit",children:"Add contact"})]})]})}}]),n}(i.Component),_={addContact:f.addContact},k=Object(u.b)((function(t){return{contacts:v.getContacts(t)}}),_)(y),w=n(124),F=n.n(w),S=n(58),N=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleChange=function(e){(0,t.props.filterContact)(e.target.value)},t.handleSubmit=function(t){t.preventDefault(),t.target.filter.value=""},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.filter,e=this.handleChange,n=this.handleSubmit;return Object(x.jsx)("form",{onSubmit:n,children:Object(x.jsx)("input",{value:t,className:F.a.input,onChange:e,placeholder:"Find contacts by name",name:"filter",type:"text"})})}}]),n}(i.Component),D={filterContact:S.a},A=Object(u.b)((function(t){return{filter:v.getFilter(t)}}),D)(N),E=n(125),L=n.n(E),B={handleDelete:f.deleteContact},M=Object(u.b)((function(t){return{showContacts:v.getFilteredContacts(t)}}),B)((function(t){var e=t.showContacts,n=t.handleDelete;return Object(x.jsx)(x.Fragment,{children:e&&Object(x.jsx)("ul",{className:L.a.list,children:e.map((function(t){return Object(x.jsxs)("li",{onClick:function(){n(t.id)},children:[t.name,Object(x.jsx)("span",{children:t.number}),Object(x.jsx)("button",{className:L.a.btn,type:"button",children:"Delete"})]},t.id)}))})})})),q=(n(126),function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getMyContacts()}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsx)(A,{}),Object(x.jsx)(M,{})]})}}]),n}(i.Component)),z={getMyContacts:f.getContacts};e.default=Object(u.b)(null,z)(q)}}]);
//# sourceMappingURL=3.425d7e26.chunk.js.map