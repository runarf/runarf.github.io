(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,r){"use strict";r.r(t);r(75),r(54),r(0);var n=r(242),a=r(270),o=r(310),c=(r(309),a.object().shape({accounts:a.array().of(a.object().shape({email:a.string().email("invalid email").required("Required"),password:a.string().min(6,"too short password").required("Required")}))}));t.default=function(){return Object(o.b)("div",{className:"container-fluid"},Object(o.b)("h1",{class:"row"},"Any place in your app"),Object(o.b)(n.e,{initialValues:{accounts:[{nickNames:[],email:"test@sa.com",password:"asa"}]},validationSchema:c,onSubmit:function(e,t){var r=t.setSubmitting;setTimeout(function(){alert(JSON.stringify(e,null,2)),r(!1)},400)}},function(e){var t=e.isSubmitting,r=e.values;return Object(o.b)(n.d,null,Object(o.b)(n.c,{name:"accounts"},function(e){return Object(o.b)("div",null,r.accounts.map(function(t,r){return Object(o.b)("div",{className:"row",key:r},Object(o.b)("div",{className:"col"},Object(o.b)(n.b,{type:"email",name:"accounts["+r+"].email"}),Object(o.b)(n.a,{name:"accounts["+r+"].email",component:"div"})),Object(o.b)("div",{className:"col"},Object(o.b)(n.b,{type:"password",name:"accounts["+r+".password]"}),Object(o.b)(n.a,{name:"accounts["+r+".password]",component:"div"})),Object(o.b)("button",{className:"col-1",type:"button",onClick:function(){return e.remove(r)}},"-"))}),Object(o.b)("button",{type:"button",onClick:function(){return e.push({email:"",password:""})}},"+"),Object(o.b)("button",{type:"submit",disabled:t},"Submit"))}))}))}},151:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},167:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},171:function(e,t,r){"use strict";r.r(t);var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===a}(e)}(e)};var a="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function c(e,t,r){return e.concat(t).map(function(e){return o(e,r)})}function i(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||c,r.isMergeableObject=r.isMergeableObject||n;var a=Array.isArray(t);return a===Array.isArray(e)?a?r.arrayMerge(e,t,r):function(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){n[t]=o(e[t],r)}),Object.keys(t).forEach(function(a){r.isMergeableObject(t[a])&&e[a]?n[a]=i(e[a],t[a],r):n[a]=o(t[a],r)}),n}(e,t,r):o(t,r)}i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return i(e,r,t)},{})};var u=i;t.default=u},177:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},195:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,b=s&&s(Object);e.exports=function e(t,r,l){if("string"!=typeof r){if(b){var f=s(r);f&&f!==b&&e(t,f,l)}var p=c(r);i&&(p=p.concat(i(r)));for(var y=0;y<p.length;++y){var m=p[y];if(!(n[m]||a[m]||l&&l[m])){var d=u(r,m);try{o(t,m,d)}catch(O){}}}return t}return t}}}]);
//# sourceMappingURL=component---src-codesamples-form-test-short-js-41a62025805962950379.js.map