(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);a(511);var o=a(222),r=a.n(o),n=(a(75),a(54),a(513),a(0),a(242)),i=a(270),d=a(310),l=a(645),c=a.n(l),u=a(241),s=a.n(u);a(309);function b(){var e=r()(["\n                            background-color: pink;\n                          "]);return b=function(){return e},e}function p(){var e=r()(["\n                          background-color: turquoise;\n                        "]);return p=function(){return e},e}function f(){var e=r()(["\n                background-color: pink;\n              "]);return f=function(){return e},e}function m(){var e=r()(["\n                background-color: turquoise;\n              "]);return m=function(){return e},e}var y=function(){return i.lazy(function(e){var t=e.lots.map(function(e){return e.name}).map(function(e){return{count:1,name:e}}).reduce(function(e,t){return e[t.name]=(e[t.name]||0)+t.count,e},{});console.log(t);var a=Object.keys(t).filter(function(e){return t[e]>1});return i.object().shape({lots:i.array().of(i.object().shape({name:i.string().notOneOf(a,"lotname has to be unique").required("required"),quantities:i.array().of(i.number().typeError("must be number").min(0,"must be positive").integer("must be integer"))}))})})},h={lots:[{name:"Test",quantities:["021111","123","231"],id:"105d668b-0912-4bff-91b4-3aec881bb6ce"},{name:"sdfsd",quantities:["01","21","12"],id:"4041e2a2-6d47-42c1-8bf1-a3084e48992f"}]};t.default=function(){return Object(d.b)("div",{className:"container-fluid"},Object(d.b)("h1",{className:"row"},"Any place in your app"),Object(d.b)(n.e,{initialValues:h,validationSchema:y,onSubmit:function(e,t){var a=t.setSubmitting;setTimeout(function(){alert(JSON.stringify(e,null,2)),a(!1)},400)}},function(e){var t=e.isSubmitting,a=e.values,o=e.isValid;e.resetForm;return Object(d.b)(n.d,null,Object(d.b)("div",{className:"row"},Object(d.b)("div",{className:"col-3",css:Object(d.a)(m())},"Name of lot"),Object(d.b)("div",{className:"col",css:Object(d.a)(f())},"Quantities")),Object(d.b)(n.c,{name:"lots"},function(e){return Object(d.b)("div",null,a.lots&&a.lots.length>0&&a.lots.map(function(e,t){return Object(d.b)("div",{className:"row",key:e.id},Object(d.b)("div",{className:"col-3",css:Object(d.a)(p())},Object(d.b)(n.b,{name:"lots["+t+"].name"}),Object(d.b)(n.a,{name:"lots["+t+"].name"})),e.quantities.map(function(e,a){return Object(d.b)("div",{className:"col",key:a,css:Object(d.a)(b())},Object(d.b)(n.b,{name:"lots["+t+"].quantities["+a+"]"}),Object(d.b)(n.a,{name:"lots["+t+"].quantities["+a+"]"}))}))}),Object(d.b)("div",{className:"row"},Object(d.b)("div",{className:"col"},Object(d.b)("button",{type:"button",onClick:function(){return e.push({name:"",quantities:Array(3).fill(0),id:c()()})}},"+"),Object(d.b)(s.a,{type:"submit",disabled:!o||t},"Submit"))))}))}))}},241:function(e,t,a){"use strict";var o=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=o(a(648))},511:function(e,t,a){var o=a(11);o(o.P,"Array",{fill:a(512)}),a(36)("fill")},512:function(e,t,a){"use strict";var o=a(25),r=a(76),n=a(14);e.exports=function(e){for(var t=o(this),a=n(t.length),i=arguments.length,d=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,c=void 0===l?a:r(l,a);c>d;)t[d++]=e;return t}},513:function(e,t,a){var o=a(25),r=a(35);a(514)("keys",function(){return function(e){return r(o(e))}})},514:function(e,t,a){var o=a(11),r=a(17),n=a(24);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),o(o.S+o.F*n(function(){a(1)}),"Object",i)}},645:function(e,t,a){var o=a(646),r=a(647);e.exports=function(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var d=0;d<16;++d)t[n+d]=i[d];return t||r(i)}},646:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var o=new Uint8Array(16);e.exports=function(){return a(o),o}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},647:function(e,t){for(var a=[],o=0;o<256;++o)a[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,r=a;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}},648:function(e,t,a){"use strict";var o=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a(52)),n=o(a(153)),i=o(a(151)),d=o(a(0)),l=(o(a(4)),o(a(155))),c=(a(166),o(a(165))),u=a(256),s=o(a(188)),b=a(189),p=function(e){return{root:(0,i.default)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,u.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,u.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},mini:{width:40,height:40},sizeSmall:{padding:"4px 8px",minWidth:64,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function f(e){var t,a=e.children,o=e.classes,c=e.className,u=e.color,p=e.disabled,f=e.disableFocusRipple,m=e.focusVisibleClassName,y=e.fullWidth,h=e.mini,v=e.size,g=e.variant,x=(0,n.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","mini","size","variant"]),k="fab"===g||"extendedFab"===g,O="contained"===g||"raised"===g,j="text"===g||"flat"===g,w=(0,l.default)(o.root,(t={},(0,r.default)(t,o.fab,k),(0,r.default)(t,o.mini,k&&h),(0,r.default)(t,o.extendedFab,"extendedFab"===g),(0,r.default)(t,o.text,j),(0,r.default)(t,o.textPrimary,j&&"primary"===u),(0,r.default)(t,o.textSecondary,j&&"secondary"===u),(0,r.default)(t,o.flat,j),(0,r.default)(t,o.flatPrimary,j&&"primary"===u),(0,r.default)(t,o.flatSecondary,j&&"secondary"===u),(0,r.default)(t,o.contained,O||k),(0,r.default)(t,o.containedPrimary,(O||k)&&"primary"===u),(0,r.default)(t,o.containedSecondary,(O||k)&&"secondary"===u),(0,r.default)(t,o.raised,O||k),(0,r.default)(t,o.raisedPrimary,(O||k)&&"primary"===u),(0,r.default)(t,o.raisedSecondary,(O||k)&&"secondary"===u),(0,r.default)(t,o.outlined,"outlined"===g),(0,r.default)(t,o.outlinedPrimary,"outlined"===g&&"primary"===u),(0,r.default)(t,o.outlinedSecondary,"outlined"===g&&"secondary"===u),(0,r.default)(t,o["size".concat((0,b.capitalize)(v))],"medium"!==v),(0,r.default)(t,o.disabled,p),(0,r.default)(t,o.fullWidth,y),(0,r.default)(t,o.colorInherit,"inherit"===u),t),c);return d.default.createElement(s.default,(0,i.default)({className:w,disabled:p,focusRipple:!f,focusVisibleClassName:(0,l.default)(o.focusVisible,m)},x),d.default.createElement("span",{className:o.label},a))}t.styles=p,f.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var m=(0,c.default)(p,{name:"MuiButton"})(f);t.default=m}}]);
//# sourceMappingURL=component---src-codesamples-form-adv-js-2a9d39f2540a68b81902.js.map