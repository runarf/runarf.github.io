(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(t,n,e){"use strict";e.r(n);e(339);var a=e(224),i=e.n(a),c=(e(75),e(54),e(341),e(225),e(0),e(248)),r=e(260),u=e(314),o=e(473),s=e.n(o),b=e(476),l=e.n(b);e(299);function m(){var t=i()(["\n                            background-color: pink;\n                          "]);return m=function(){return t},t}function f(){var t=i()(["\n                          background-color: turquoise;\n                        "]);return f=function(){return t},t}function d(){var t=i()(["\n                background-color: pink;\n              "]);return d=function(){return t},t}function O(){var t=i()(["\n                background-color: turquoise;\n              "]);return O=function(){return t},t}var j=function(){return r.lazy(function(t){var n=t.lots.map(function(t){return t.name}).map(function(t){return{count:1,name:t}}).reduce(function(t,n){return t[n.name]=(t[n.name]||0)+n.count,t},{});console.log(n);var e=Object.keys(n).filter(function(t){return n[t]>1});return r.object().shape({lots:r.array().of(r.object().shape({name:r.string().notOneOf(e,"lotname has to be unique").required("required"),quantities:r.array().of(r.number().typeError("must be number").min(0,"must be positive").integer("must be integer"))}))})})},v={lots:[{name:"Test",quantities:["021111","123","231"],id:"105d668b-0912-4bff-91b4-3aec881bb6ce"},{name:"sdfsd",quantities:["01","21","12"],id:"4041e2a2-6d47-42c1-8bf1-a3084e48992f"}]};n.default=function(){return Object(u.b)("div",{className:"container-fluid"},Object(u.b)("h1",{className:"row"},"Any place in your app"),Object(u.b)(c.e,{initialValues:v,validationSchema:j,onSubmit:function(t,n){var e=n.setSubmitting;setTimeout(function(){alert(JSON.stringify(t,null,2)),e(!1)},400)}},function(t){var n=t.isSubmitting,e=t.values,a=t.isValid;t.resetForm;return Object(u.b)(c.d,null,Object(u.b)("div",{className:"row"},Object(u.b)("div",{className:"col-3",css:Object(u.a)(O())},"Name of lot"),Object(u.b)("div",{className:"col",css:Object(u.a)(d())},"Quantities")),Object(u.b)(c.c,{name:"lots"},function(t){return Object(u.b)("div",null,e.lots&&e.lots.length>0&&e.lots.map(function(t,n){return Object(u.b)("div",{className:"row",key:t.id},Object(u.b)("div",{className:"col-3",css:Object(u.a)(f())},Object(u.b)(c.b,{name:"lots["+n+"].name"}),Object(u.b)(c.a,{name:"lots["+n+"].name"})),t.quantities.map(function(t,e){return Object(u.b)("div",{className:"col",key:e,css:Object(u.a)(m())},Object(u.b)(c.b,{name:"lots["+n+"].quantities["+e+"]"}),Object(u.b)(c.a,{name:"lots["+n+"].quantities["+e+"]"}))}))}),Object(u.b)("div",{className:"row"},Object(u.b)("div",{className:"col"},Object(u.b)("button",{type:"button",onClick:function(){return t.push({name:"",quantities:Array(3).fill(0),id:s()()})}},"+"),Object(u.b)(l.a,{type:"submit",disabled:!a||n},"Submit"))))}))}))}}}]);
//# sourceMappingURL=component---src-codesamples-form-adv-js-6e198b93be64fe15d14e.js.map