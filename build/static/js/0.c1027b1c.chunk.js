(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{129:function(e,a,t){"use strict";var s=t(1),r=t(3),i=t(9);t(25);function l(e,a){return e.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=t(0),n=t.n(o),c=t(26),d=function(e,a){return e&&a&&a.split(" ").forEach((function(a){return s=a,void((t=e).classList?t.classList.remove(s):"string"===typeof t.className?t.className=l(t.className,s):t.setAttribute("class",l(t.className&&t.className.baseVal||"",s)));var t,s}))},m=function(e){function a(){for(var a,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(a=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},a.onEnter=function(e,t){var s=a.resolveArguments(e,t),r=s[0],i=s[1];a.removeClasses(r,"exit"),a.addClass(r,i?"appear":"enter","base"),a.props.onEnter&&a.props.onEnter(e,t)},a.onEntering=function(e,t){var s=a.resolveArguments(e,t),r=s[0],i=s[1]?"appear":"enter";a.addClass(r,i,"active"),a.props.onEntering&&a.props.onEntering(e,t)},a.onEntered=function(e,t){var s=a.resolveArguments(e,t),r=s[0],i=s[1]?"appear":"enter";a.removeClasses(r,i),a.addClass(r,i,"done"),a.props.onEntered&&a.props.onEntered(e,t)},a.onExit=function(e){var t=a.resolveArguments(e)[0];a.removeClasses(t,"appear"),a.removeClasses(t,"enter"),a.addClass(t,"exit","base"),a.props.onExit&&a.props.onExit(e)},a.onExiting=function(e){var t=a.resolveArguments(e)[0];a.addClass(t,"exit","active"),a.props.onExiting&&a.props.onExiting(e)},a.onExited=function(e){var t=a.resolveArguments(e)[0];a.removeClasses(t,"exit"),a.addClass(t,"exit","done"),a.props.onExited&&a.props.onExited(e)},a.resolveArguments=function(e,t){return a.props.nodeRef?[a.props.nodeRef.current,e]:[e,t]},a.getClassNames=function(e){var t=a.props.classNames,s="string"===typeof t,r=s?""+(s&&t?t+"-":"")+e:t[e];return{baseClassName:r,activeClassName:s?r+"-active":t[e+"Active"],doneClassName:s?r+"-done":t[e+"Done"]}},a}Object(i.a)(a,e);var t=a.prototype;return t.addClass=function(e,a,t){var s=this.getClassNames(a)[t+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===a&&"done"===t&&r&&(s+=" "+r),"active"===t&&e&&e.scrollTop,s&&(this.appliedClasses[a][t]=s,function(e,a){e&&a&&a.split(" ").forEach((function(a){return s=a,void((t=e).classList?t.classList.add(s):function(e,a){return e.classList?!!a&&e.classList.contains(a):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+a+" ")}(t,s)||("string"===typeof t.className?t.className=t.className+" "+s:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+s)));var t,s}))}(e,s))},t.removeClasses=function(e,a){var t=this.appliedClasses[a],s=t.base,r=t.active,i=t.done;this.appliedClasses[a]={},s&&d(e,s),r&&d(e,r),i&&d(e,i)},t.render=function(){var e=this.props,a=(e.classNames,Object(r.a)(e,["classNames"]));return n.a.createElement(c.e,Object(s.a)({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(n.a.Component);m.defaultProps={classNames:""},m.propTypes={};a.a=m},132:function(e,a,t){"use strict";var s=t(1),r=t(3),i=t(6),l=t.n(i),o=t(0),n=t.n(o),c=(t(71),t(25)),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},f=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,f=void 0!==m&&m,u=Object(r.a)(e,["as","className","type","tooltip"]);return n.a.createElement(i,Object(s.a)({},u,{ref:a,className:l()(o,d+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m;var u=f,b=n.a.createContext({controlId:void 0}),p=t(8),v=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.type,f=void 0===m?"checkbox":m,u=e.isValid,v=void 0!==u&&u,x=e.isInvalid,N=void 0!==x&&x,E=e.isStatic,h=e.as,O=void 0===h?"input":h,j=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),C=Object(o.useContext)(b),y=C.controlId,g=C.custom?[c,"custom-control-input"]:[i,"form-check-input"],P=g[0],w=g[1];return i=Object(p.a)(P,w),n.a.createElement(O,Object(s.a)({},j,{ref:a,type:f,id:t||y,className:l()(d,i,v&&"is-valid",N&&"is-invalid",E&&"position-static")}))}));v.displayName="FormCheckInput";var x=v,N=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(o.useContext)(b),u=f.controlId,v=f.custom?[i,"custom-control-label"]:[t,"form-check-label"],x=v[0],N=v[1];return t=Object(p.a)(x,N),n.a.createElement("label",Object(s.a)({},m,{ref:a,htmlFor:d||u,className:l()(c,t)}))}));N.displayName="FormCheckLabel";var E=N,h=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,f=e.disabled,v=void 0!==f&&f,N=e.isValid,h=void 0!==N&&N,O=e.isInvalid,j=void 0!==O&&O,C=e.feedbackTooltip,y=void 0!==C&&C,g=e.feedback,P=e.className,w=e.style,I=e.title,F=void 0===I?"":I,k=e.type,R=void 0===k?"checkbox":k,V=e.label,L=e.children,A=e.custom,T=e.as,S=void 0===T?"input":T,z=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),M="switch"===R||A,$=M?[c,"custom-control"]:[i,"form-check"],G=$[0],J=$[1];i=Object(p.a)(G,J);var D=Object(o.useContext)(b).controlId,q=Object(o.useMemo)((function(){return{controlId:t||D,custom:M}}),[D,M,t]),B=M||null!=V&&!1!==V&&!L,H=n.a.createElement(x,Object(s.a)({},z,{type:"switch"===R?"checkbox":R,ref:a,isValid:h,isInvalid:j,isStatic:!B,disabled:v,as:S}));return n.a.createElement(b.Provider,{value:q},n.a.createElement("div",{style:w,className:l()(P,i,M&&"custom-"+R,m&&i+"-inline")},L||n.a.createElement(n.a.Fragment,null,H,B&&n.a.createElement(E,{title:F},V),(h||j)&&n.a.createElement(u,{type:h?"valid":"invalid",tooltip:y},g))))}));h.displayName="FormCheck",h.Input=x,h.Label=E;var O=h,j=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.isValid,f=e.isInvalid,u=e.lang,v=e.as,x=void 0===v?"input":v,N=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),E=Object(o.useContext)(b),h=E.controlId,O=E.custom?[c,"custom-file-input"]:[i,"form-control-file"],j=O[0],C=O[1];return i=Object(p.a)(j,C),n.a.createElement(x,Object(s.a)({},N,{ref:a,id:t||h,type:"file",lang:u,className:l()(d,i,m&&"is-valid",f&&"is-invalid")}))}));j.displayName="FormFileInput";var C=j,y=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(o.useContext)(b),u=f.controlId,v=f.custom?[i,"custom-file-label"]:[t,"form-file-label"],x=v[0],N=v[1];return t=Object(p.a)(x,N),n.a.createElement("label",Object(s.a)({},m,{ref:a,htmlFor:d||u,className:l()(c,t),"data-browse":m["data-browse"]}))}));y.displayName="FormFileLabel";var g=y,P=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,f=e.isValid,v=void 0!==f&&f,x=e.isInvalid,N=void 0!==x&&x,E=e.feedbackTooltip,h=void 0!==E&&E,O=e.feedback,j=e.className,y=e.style,P=e.label,w=e.children,I=e.custom,F=e.lang,k=e["data-browse"],R=e.as,V=void 0===R?"div":R,L=e.inputAs,A=void 0===L?"input":L,T=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=I?[c,"custom"]:[i,"form-file"],z=S[0],M=S[1];i=Object(p.a)(z,M);var $=Object(o.useContext)(b).controlId,G=Object(o.useMemo)((function(){return{controlId:t||$,custom:I}}),[$,I,t]),J=null!=P&&!1!==P&&!w,D=n.a.createElement(C,Object(s.a)({},T,{ref:a,isValid:v,isInvalid:N,disabled:m,as:A,lang:F}));return n.a.createElement(b.Provider,{value:G},n.a.createElement(V,{style:y,className:l()(j,i,I&&"custom-file")},w||n.a.createElement(n.a.Fragment,null,I?n.a.createElement(n.a.Fragment,null,D,J&&n.a.createElement(g,{"data-browse":k},P)):n.a.createElement(n.a.Fragment,null,J&&n.a.createElement(g,null,P),D),(v||N)&&n.a.createElement(u,{type:v?"valid":"invalid",tooltip:h},O))))}));P.displayName="FormFile",P.Input=C,P.Label=g;var w=P,I=(t(73),n.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,f=e.size,u=e.htmlSize,v=e.id,x=e.className,N=e.isValid,E=void 0!==N&&N,h=e.isInvalid,O=void 0!==h&&h,j=e.plaintext,C=e.readOnly,y=e.custom,g=e.as,P=void 0===g?"input":g,w=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(o.useContext)(b).controlId,F=y?[d,"custom"]:[c,"form-control"],k=F[0],R=F[1];if(c=Object(p.a)(k,R),j)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===m){var V;(V={})[c+"-file"]=!0,t=V}else if("range"===m){var L;(L={})[c+"-range"]=!0,t=L}else if("select"===P&&y){var A;(A={})[c+"-select"]=!0,A[c+"-select-"+f]=f,t=A}else{var T;(T={})[c]=!0,T[c+"-"+f]=f,t=T}return n.a.createElement(P,Object(s.a)({},w,{type:m,size:u,ref:a,readOnly:C,id:v||I,className:l()(x,t,E&&"is-valid",O&&"is-invalid")}))})));I.displayName="FormControl";var F=Object.assign(I,{Feedback:u}),k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,d=e.controlId,m=e.as,f=void 0===m?"div":m,u=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.a)(t,"form-group");var v=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return n.a.createElement(b.Provider,{value:v},n.a.createElement(f,Object(s.a)({},u,{ref:a,className:l()(i,t)}),c))}));k.displayName="FormGroup";var R=k,V=["xl","lg","md","sm","xs"],L=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"div":o,d=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(p.a)(t,"col"),f=[],u=[];return V.forEach((function(e){var a,t,s,r=d[e];if(delete d[e],"object"===typeof r&&null!=r){var i=r.span;a=void 0===i||i,t=r.offset,s=r.order}else a=r;var l="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+m+l:""+m+l+"-"+a),null!=s&&u.push("order"+l+"-"+s),null!=t&&u.push("offset"+l+"-"+t)})),f.length||f.push(m),n.a.createElement(c,Object(s.a)({},d,{ref:a,className:l.a.apply(void 0,[i].concat(f,u))}))}));L.displayName="Col";var A=L,T=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,d=e.column,m=e.srOnly,f=e.className,u=e.htmlFor,v=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=Object(o.useContext)(b).controlId;c=Object(p.a)(c,"form-label");var N="col-form-label";"string"===typeof d&&(N=N+" "+N+"-"+d);var E=l()(f,c,m&&"sr-only",d&&N);return u=u||x,d?n.a.createElement(A,Object(s.a)({as:"label",className:E,htmlFor:u},v)):n.a.createElement(i,Object(s.a)({ref:a,className:E,htmlFor:u},v))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var S=T,z=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,m=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.a)(t,"form-text"),n.a.createElement(c,Object(s.a)({},m,{ref:a,className:l()(i,t,d&&"text-muted")}))}));z.displayName="FormText";var M=z,$=n.a.forwardRef((function(e,a){return n.a.createElement(O,Object(s.a)({},e,{ref:a,type:"switch"}))}));$.displayName="Switch",$.Input=O.Input,$.Label=O.Label;var G=$,J=t(59),D=Object(J.a)("form-row"),q=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,f=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.a)(t,"form"),n.a.createElement(m,Object(s.a)({},f,{ref:a,className:l()(o,c&&"was-validated",i&&t+"-inline")}))}));q.displayName="Form",q.defaultProps={inline:!1},q.Row=D,q.Group=R,q.Control=F,q.Check=O,q.File=w,q.Switch=G,q.Label=S,q.Text=M;a.a=q}}]);
//# sourceMappingURL=0.c1027b1c.chunk.js.map