(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,a,t){"use strict";t.r(a);t(342),t(75),t(51),t(344),t(175);var n=t(0),r=t.n(n),l=t(250),m=t(268),u=t(476),c=t.n(u),i=t(514),o=t(516),s=t(518),f=t(502),E=t(311),b=t(251),p=t(245),d=t(246),g=function(){return m.lazy(function(e){var a=e.lots.map(function(e){return e.name}).map(function(e){return{count:1,name:e}}).reduce(function(e,a){return e[a.name]=(e[a.name]||0)+a.count,e},{});console.log(a);var t=Object.keys(a).filter(function(e){return a[e]>1});return m.object().shape({lots:m.array().of(m.object().shape({name:m.string().notOneOf(t,"lotname has to be unique").required("required"),quantities:m.array().of(m.number().typeError("must be number").min(0,"must be positive").integer("must be integer"))}))})})},y=[38,39,40],v={lots:[{name:"Test",quantities:["021111","123","231"],id:"105d668b-0912-4bff-91b4-3aec881bb6ce"}]},h=function(e){var a=e.field;return r.a.createElement(i.a,a)};a.default=function(){var e;return r.a.createElement(o.a,null,r.a.createElement(s.a,{justify:"center",align:"center"},r.a.createElement(l.e,{initialValues:v,validationSchema:g,onSubmit:function(e,a){var t=a.setSubmitting;setTimeout(function(){alert(JSON.stringify(e,null,2)),t(!1)},400)}},function(a){a.isSubmitting;var t=a.values;a.isValid;return r.a.createElement(l.d,null,r.a.createElement(f.a,{columns:["xsmall"],rows:["auto","auto","flex"],areas:[{name:"header",start:[0,0],end:[1,0]},{name:"main",start:[0,1],end:[1,1]},{name:"bottom",start:[0,2],end:[1,2]}]},r.a.createElement(s.a,{gridArea:"header"},r.a.createElement(f.a,{columns:["xsmall"].concat(y.map(function(){return"xsmall"}),["xsmall"]),gap:"small",margin:"small"},r.a.createElement(s.a,{align:"center"},r.a.createElement(E.a,null,"Name of lot")),y.map(function(e){return r.a.createElement(s.a,{align:"center"},r.a.createElement(E.a,{key:e},e))}))),r.a.createElement(s.a,{gridArea:"main"},r.a.createElement(l.c,{name:"lots"},function(a){return e=a.push,[t.lots&&t.lots.length>0&&t.lots.map(function(e,t){return r.a.createElement(f.a,{columns:["xsmall"].concat(y.map(function(){return"xsmall"}),["xsmall"]),gap:"small",margin:"small"},r.a.createElement(s.a,null,r.a.createElement(l.b,{name:"lots["+t+"].name"},function(e){var a=e.field;return r.a.createElement(i.a,a)}),r.a.createElement(l.a,{component:E.a,name:"lots["+t+"].name"})),e.quantities.map(function(e,a){return r.a.createElement(s.a,{key:a},r.a.createElement(l.b,{component:h,name:"lots["+t+"].quantities["+a+"]"}),r.a.createElement(l.a,{component:E.a,name:"lots["+t+"].quantities["+a+"]"}))}),r.a.createElement(s.a,{justify:"center"},r.a.createElement(b.a,{onClick:function(){return a.remove(t)}},r.a.createElement(p.a,null))))})]})),r.a.createElement(s.a,{gridArea:"bottom",pad:"xsmall"},r.a.createElement(f.a,{columns:["small","small"],justifyContent:"start",gap:"small"},r.a.createElement(s.a,null,r.a.createElement(b.a,{onClick:function(){return e({name:"",quantities:Array(3).fill(0),id:c()()})},label:r.a.createElement(d.a,null)})),r.a.createElement(s.a,null,r.a.createElement(b.a,{primary:!0,type:"submit",label:"Submit"}))))))})))}}}]);
//# sourceMappingURL=component---src-codesamples-form-adv-js-0cb1b01b70dd91389e06.js.map