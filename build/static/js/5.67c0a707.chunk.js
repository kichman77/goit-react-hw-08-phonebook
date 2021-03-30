(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[5],{118:function(e,a,t){"use strict";t(0);var r=t(119),s=t.n(r),i=t(3);a.a=function(e){var a=e.msg;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:s.a.wrapper,children:Object(i.jsx)("p",{className:s.a.notif,children:a})})})}},119:function(e,a,t){e.exports={wrapper:"Notification_wrapper__Uy_Qy",notif:"Notification_notif__1XW0G"}},121:function(e,a,t){},126:function(e,a,t){"use strict";var r=t(1),s=t(2),i=t(6),l=t.n(i),o=t(0),n=t.n(o),c=(t(69),t(25)),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},b=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,b=void 0!==m&&m,f=Object(s.a)(e,["as","className","type","tooltip"]);return n.a.createElement(i,Object(r.a)({},f,{ref:a,className:l()(o,d+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=m;var f=b,u=n.a.createContext({controlId:void 0}),v=t(8),p=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.type,b=void 0===m?"checkbox":m,f=e.isValid,p=void 0!==f&&f,j=e.isInvalid,O=void 0!==j&&j,h=e.isStatic,x=e.as,y=void 0===x?"input":x,N=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),w=Object(o.useContext)(u),P=w.controlId,g=w.custom?[c,"custom-control-input"]:[i,"form-check-input"],C=g[0],F=g[1];return i=Object(v.a)(C,F),n.a.createElement(y,Object(r.a)({},N,{ref:a,type:b,id:t||P,className:l()(d,i,p&&"is-valid",O&&"is-invalid",h&&"position-static")}))}));p.displayName="FormCheckInput";var j=p,O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(u),f=b.controlId,p=b.custom?[i,"custom-control-label"]:[t,"form-check-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),n.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||f,className:l()(c,t)}))}));O.displayName="FormCheckLabel";var h=O,x=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,b=e.disabled,p=void 0!==b&&b,O=e.isValid,x=void 0!==O&&O,y=e.isInvalid,N=void 0!==y&&y,w=e.feedbackTooltip,P=void 0!==w&&w,g=e.feedback,C=e.className,F=e.style,I=e.title,E=void 0===I?"":I,k=e.type,R=void 0===k?"checkbox":k,S=e.label,V=e.children,L=e.custom,T=e.as,_=void 0===T?"input":T,G=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),z="switch"===R||L,A=z?[c,"custom-control"]:[i,"form-check"],M=A[0],J=A[1];i=Object(v.a)(M,J);var U=Object(o.useContext)(u).controlId,D=Object(o.useMemo)((function(){return{controlId:t||U,custom:z}}),[U,z,t]),Q=z||null!=S&&!1!==S&&!V,W=n.a.createElement(j,Object(r.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:N,isStatic:!Q,disabled:p,as:_}));return n.a.createElement(u.Provider,{value:D},n.a.createElement("div",{style:F,className:l()(C,i,z&&"custom-"+R,m&&i+"-inline")},V||n.a.createElement(n.a.Fragment,null,W,Q&&n.a.createElement(h,{title:E},S),(x||N)&&n.a.createElement(f,{type:x?"valid":"invalid",tooltip:P},g))))}));x.displayName="FormCheck",x.Input=j,x.Label=h;var y=x,N=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.isValid,b=e.isInvalid,f=e.lang,p=e.as,j=void 0===p?"input":p,O=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(o.useContext)(u),x=h.controlId,y=h.custom?[c,"custom-file-input"]:[i,"form-control-file"],N=y[0],w=y[1];return i=Object(v.a)(N,w),n.a.createElement(j,Object(r.a)({},O,{ref:a,id:t||x,type:"file",lang:f,className:l()(d,i,m&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormFileInput";var w=N,P=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(u),f=b.controlId,p=b.custom?[i,"custom-file-label"]:[t,"form-file-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),n.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||f,className:l()(c,t),"data-browse":m["data-browse"]}))}));P.displayName="FormFileLabel";var g=P,C=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,b=e.isValid,p=void 0!==b&&b,j=e.isInvalid,O=void 0!==j&&j,h=e.feedbackTooltip,x=void 0!==h&&h,y=e.feedback,N=e.className,P=e.style,C=e.label,F=e.children,I=e.custom,E=e.lang,k=e["data-browse"],R=e.as,S=void 0===R?"div":R,V=e.inputAs,L=void 0===V?"input":V,T=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),_=I?[c,"custom"]:[i,"form-file"],G=_[0],z=_[1];i=Object(v.a)(G,z);var A=Object(o.useContext)(u).controlId,M=Object(o.useMemo)((function(){return{controlId:t||A,custom:I}}),[A,I,t]),J=null!=C&&!1!==C&&!F,U=n.a.createElement(w,Object(r.a)({},T,{ref:a,isValid:p,isInvalid:O,disabled:m,as:L,lang:E}));return n.a.createElement(u.Provider,{value:M},n.a.createElement(S,{style:P,className:l()(N,i,I&&"custom-file")},F||n.a.createElement(n.a.Fragment,null,I?n.a.createElement(n.a.Fragment,null,U,J&&n.a.createElement(g,{"data-browse":k},C)):n.a.createElement(n.a.Fragment,null,J&&n.a.createElement(g,null,C),U),(p||O)&&n.a.createElement(f,{type:p?"valid":"invalid",tooltip:x},y))))}));C.displayName="FormFile",C.Input=w,C.Label=g;var F=C,I=(t(70),n.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,b=e.size,f=e.htmlSize,p=e.id,j=e.className,O=e.isValid,h=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,w=e.readOnly,P=e.custom,g=e.as,C=void 0===g?"input":g,F=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(o.useContext)(u).controlId,E=P?[d,"custom"]:[c,"form-control"],k=E[0],R=E[1];if(c=Object(v.a)(k,R),N)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===m){var S;(S={})[c+"-file"]=!0,t=S}else if("range"===m){var V;(V={})[c+"-range"]=!0,t=V}else if("select"===C&&P){var L;(L={})[c+"-select"]=!0,L[c+"-select-"+b]=b,t=L}else{var T;(T={})[c]=!0,T[c+"-"+b]=b,t=T}return n.a.createElement(C,Object(r.a)({},F,{type:m,size:f,ref:a,readOnly:w,id:p||I,className:l()(j,t,h&&"is-valid",y&&"is-invalid")}))})));I.displayName="FormControl";var E=Object.assign(I,{Feedback:f}),k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,d=e.controlId,m=e.as,b=void 0===m?"div":m,f=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return n.a.createElement(u.Provider,{value:p},n.a.createElement(b,Object(r.a)({},f,{ref:a,className:l()(i,t)}),c))}));k.displayName="FormGroup";var R=k,S=["xl","lg","md","sm","xs"],V=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"div":o,d=Object(s.a)(e,["bsPrefix","className","as"]),m=Object(v.a)(t,"col"),b=[],f=[];return S.forEach((function(e){var a,t,r,s=d[e];if(delete d[e],"object"===typeof s&&null!=s){var i=s.span;a=void 0===i||i,t=s.offset,r=s.order}else a=s;var l="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+m+l:""+m+l+"-"+a),null!=r&&f.push("order"+l+"-"+r),null!=t&&f.push("offset"+l+"-"+t)})),b.length||b.push(m),n.a.createElement(c,Object(r.a)({},d,{ref:a,className:l.a.apply(void 0,[i].concat(b,f))}))}));V.displayName="Col";var L=V,T=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,d=e.column,m=e.srOnly,b=e.className,f=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),j=Object(o.useContext)(u).controlId;c=Object(v.a)(c,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+" "+O+"-"+d);var h=l()(b,c,m&&"sr-only",d&&O);return f=f||j,d?n.a.createElement(L,Object(r.a)({as:"label",className:h,htmlFor:f},p)):n.a.createElement(i,Object(r.a)({ref:a,className:h,htmlFor:f},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var _=T,G=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,m=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),n.a.createElement(c,Object(r.a)({},m,{ref:a,className:l()(i,t,d&&"text-muted")}))}));G.displayName="FormText";var z=G,A=n.a.forwardRef((function(e,a){return n.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));A.displayName="Switch",A.Input=y.Input,A.Label=y.Label;var M=A,J=t(46),U=Object(J.a)("form-row"),D=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,b=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),n.a.createElement(m,Object(r.a)({},b,{ref:a,className:l()(o,c&&"was-validated",i&&t+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=U,D.Group=R,D.Control=E,D.Check=y,D.File=F,D.Switch=M,D.Label=_,D.Text=z;a.a=D},128:function(e,a,t){"use strict";t.r(a);var r=t(16),s=t(5),i=t(42),l=t(43),o=t(45),n=t(44),c=t(0),d=t(113),m=t(126),b=t(114),f=t(17),u=t(117),v=t(14),p=t(118),j=(t(121),t(3)),O=function(e){Object(o.a)(t,e);var a=Object(n.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(e=a.call.apply(a,[this].concat(o))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,r=t.name,i=t.value;e.setState(Object(s.a)({},r,i))},e.handleSubmit=function(a){var t=e.props.onRegister;a.preventDefault(),t(Object(r.a)({id:Object(u.a)()},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.handleChange,a=this.handleSubmit,t=this.state,r=t.name,s=t.email,i=t.password,l=this.props.error;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(m.a,{onSubmit:a,children:[Object(j.jsxs)(m.a.Group,{children:[Object(j.jsx)(m.a.Label,{children:"name"}),Object(j.jsx)(m.a.Control,{type:"text",name:"name",placeholder:"name",onChange:e,value:r})]}),Object(j.jsxs)(m.a.Group,{children:[Object(j.jsx)(m.a.Label,{children:"email"}),Object(j.jsx)(m.a.Control,{type:"email",name:"email",placeholder:"email",onChange:e,value:s})]}),Object(j.jsxs)(m.a.Group,{children:[Object(j.jsx)(m.a.Label,{children:"password"}),Object(j.jsx)(m.a.Control,{type:"password",name:"password",placeholder:"password",onChange:e,value:i})]}),Object(j.jsx)(b.a,{variant:"primary",type:"submit",children:"register"}),l&&Object(j.jsx)(p.a,{msg:"something went wrong, try agan "})]})})})}}]),t}(c.Component),h={onRegister:v.a.signup};a.default=Object(f.b)((function(e){return{error:v.b.getUserError(e)}}),h)(O)}}]);
//# sourceMappingURL=5.67c0a707.chunk.js.map