(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,r){"use strict";r.r(t);r(75),r(51);var n=r(0),a=r.n(n),i=r(244);t.default=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Anywhere in your app!"),a.a.createElement(i.e,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e,t){var r=t.setSubmitting;setTimeout(function(){alert(JSON.stringify(e,null,2)),r(!1)},400)}},function(e){var t=e.values,r=e.errors,n=e.touched,i=e.handleChange,l=e.handleBlur,o=e.handleSubmit,u=e.isSubmitting;return a.a.createElement("form",{onSubmit:o},a.a.createElement("input",{type:"email",name:"email",onChange:i,onBlur:l,value:t.email}),r.email&&n.email&&r.email,a.a.createElement("input",{type:"password",name:"password",onChange:i,onBlur:l,value:t.password}),r.password&&n.password&&r.password,a.a.createElement("button",{type:"submit",disabled:u},"Submit"))}))}},175:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},183:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,l=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(t,r,p){if("string"!=typeof r){if(c){var m=s(r);m&&m!==c&&e(t,m,p)}var d=l(r);o&&(d=d.concat(o(r)));for(var f=0;f<d.length;++f){var b=d[f];if(!(n[b]||a[b]||p&&p[b])){var y=u(r,b);try{i(t,b,y)}catch(w){}}}return t}return t}}}]);
//# sourceMappingURL=component---src-codesamples-formik-test-js-4ca634d7c1f8b9392e79.js.map