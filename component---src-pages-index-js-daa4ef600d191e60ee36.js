(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,n){"use strict";n.r(t);n(225);var a,r=n(7),o=n.n(r),i=n(0),l=n.n(i),c=n(157),u=n(214),s=n(173),A=n(567),d=n(195),f=n(153),p=n(158),g=n(328),h=f.d.div.withConfig({displayName:"StyledTabs__StyledTabsHeader",componentId:"a4fwxl-0"})(["",";"],function(e){return e.theme.tabs.header.extend});h.defaultProps={},Object.setPrototypeOf(h.defaultProps,p.a);var m=((a={})[!0]="1 1",a[!1]="0 0",a.grow="1 0",a.shrink="0 1",a),b=Object(f.c)(["flex:",";"],function(e){return m[e.flex]+(!0!==e.flex?" auto":"")}),v=f.d.div.withConfig({displayName:"StyledTabs__StyledTabPanel",componentId:"a4fwxl-1"})(["min-height:0;"," ",";"],function(e){return e.flex&&b},function(e){return e.theme.tabs.panel.extend});v.defaultProps={},Object.setPrototypeOf(v.defaultProps,p.a);var E=f.d.div.withConfig({displayName:"StyledTabs",componentId:"a4fwxl-2"})([""," ",";"],g.e,function(e){return e.theme.tabs.extend});function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}E.defaultProps={},Object.setPrototypeOf(E.defaultProps,p.a);var x=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return j(w(w(t=e.call.apply(e,[this].concat(a))||this)),"state",{}),j(w(w(t)),"activateTab",function(e){var n=t.props,a=n.activeIndex,r=n.onActive;void 0===a&&t.setState({activeIndex:e}),r&&r(e)}),t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getDerivedStateFromProps=function(e,t){var n=e.activeIndex,a=t.activeIndex;return a!==n&&void 0!==n?{activeIndex:n}:{activeIndex:a||0}},a.prototype.render=function(){var e=this,t=this.props,n=t.children,a=t.flex,r=t.justify,o=t.messages.tabContents,c=t.theme,u=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children","flex","justify","messages","theme"]);delete u.activeIndex,delete u.onActive;var s,d,f=this.state.activeIndex,p=i.Children.map(n,function(t,n){if(t){var a=t.props||{},r=n===f;return r&&(s=a.children,d="string"==typeof a.title?a.title:n+1),Object(i.cloneElement)(t,{active:r,onActivate:function(){return e.activateTab(n)}})}},this),g=(d||"")+" "+o;return l.a.createElement(E,y({as:A.a,role:"tablist",flex:a},u,{background:c.tabs.background}),l.a.createElement(h,{as:A.a,direction:"row",justify:r,flex:!1,wrap:!0,background:c.tabs.header.background,gap:c.tabs.gap},p),l.a.createElement(v,{flex:a,"aria-label":g,role:"tabpanel"},s))},a}(i.Component);j(x,"defaultProps",{justify:"center",messages:{tabContents:"Tab Contents"},responsive:!0}),Object.setPrototypeOf(x.defaultProps,p.a);var O=Object(d.a)(f.f)(x),S=n(569),k=n(255),P={center:"center",end:"right",start:"left"},B=Object(f.c)(["text-align:",";"],function(e){return P[e.textAlign]}),C=Object(f.c)(["color:",";"],function(e){return Object(k.c)(e.colorProp,e.theme)}),Q=Object(f.c)(["font-weight:",";"],function(e){return e.weight}),M=f.d.span.withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," ",""],g.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?Object(f.c)(["font-size:",";line-height:",";"],n.size,n.height):Object(f.c)(["font-size:",";line-height:normal;"],t)}(e)},function(e){return e.margin&&function(e){if("string"==typeof e.margin){var t=e.theme.global.edgeSize[e.margin];return"\n      margin-top: "+t+";\n      margin-bottom: "+t+";\n      margin-left: "+t+";\n      margin-right: "+t+";\n    "}return e.margin.vertical?"\n      margin-top: "+e.theme.global.edgeSize[e.margin.vertical]+";\n      margin-bottom: "+e.theme.global.edgeSize[e.margin.vertical]+";\n    ":e.margin.horizontal?"\n      margin-left: "+e.theme.global.edgeSize[e.margin.horizontal]+";\n      margin-right: "+e.theme.global.edgeSize[e.margin.horizontal]+";\n    ":e.margin.top?"margin-top: "+e.theme.global.edgeSize[e.margin.top]+";":e.margin.bottom?"margin-bottom: "+e.theme.global.edgeSize[e.margin.bottom]+";":e.margin.left?"margin-left: "+e.theme.global.edgeSize[e.margin.left]+";":e.margin.right?"margin-right: "+e.theme.global.edgeSize[e.margin.right]+";":""}(e)},function(e){return e.textAlign&&B},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&C},function(e){return e.weight&&Q},function(e){return e.theme.text&&e.theme.text.extend});function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}M.defaultProps={},Object.setPrototypeOf(M.defaultProps,p.a);var T=function(e){var t=e.color,n=e.tag,a=e.as,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","tag","as"]);return l.a.createElement(M,R({as:!a&&n?n:a,colorProp:t},r))};T.defaultProps={level:1};var Y=T,z=n(211),I=Object(f.c)(["&:hover{"," "," ",";}"],function(e){return e.theme.tab.hover.background&&Object(f.c)(["background:",";"],Object(k.c)(e.theme.tab.hover.background,e.theme))},function(e){return e.theme.tab.hover.color&&Object(f.c)(["color:",";"],Object(k.c)(e.theme.tab.hover.color,e.theme))},function(e){return e.theme.tab.hover.extend}),N=f.d.div.withConfig({displayName:"StyledTab",componentId:"sc-1nnwnsb-0"})([""," "," ",""],g.e,function(e){return!e.plain&&e.theme.tab.hover&&I},function(e){return e.theme.tab.extend});function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}N.defaultProps={},Object.setPrototypeOf(N.defaultProps,p.a);var q=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return F(G(G(t=e.call.apply(e,[this].concat(a))||this)),"state",{}),F(G(G(t)),"onMouseOver",function(e){var n=t.props.onMouseOver;t.setState({over:!0}),n&&n(e)}),F(G(G(t)),"onMouseOut",function(e){var n=t.props.onMouseOut;t.setState({over:void 0}),n&&n(e)}),F(G(G(t)),"onClickTab",function(e){var n=t.props.onActivate;e&&e.preventDefault(),n()}),t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getDerivedStateFromProps=function(e,t){var n=e.active,a=t.over;return n&&a?{over:void 0}:null},a.prototype.render=function(){var e=this.props,t=e.active,n=e.forwardRef,a=e.plain,r=e.title,o=(e.onMouseOver,e.onMouseOut,e.theme),i=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["active","forwardRef","plain","title","onMouseOver","onMouseOut","theme"]),c=this.state.over;delete i.onActivate;var u=r,s={};if(!a){if(u="string"!=typeof r?r:t?l.a.createElement(Y,o.tab.active,r):l.a.createElement(Y,{color:c?o.tab.hover.color:o.tab.color},r),o.tab.border){var d=o.tab.border.color||o.global.control.border.color;t?d=o.tab.border.active.color||d:c&&(d=o.tab.border.hover.color||d),d=Object(k.c)(d,o),s.border={side:o.tab.border.side,size:o.tab.border.size,color:d}}s.background=t&&o.tab.active.background||o.tab.background,s.pad=o.tab.pad,s.margin=o.tab.margin}return l.a.createElement(S.a,D({ref:n,plain:!0,role:"tab","aria-selected":t,"aria-expanded":t},i,{onClick:this.onClickTab,onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onFocus:this.onMouseOver,onBlur:this.onMouseOut}),l.a.createElement(N,D({as:A.a,plain:a},s),u))},a}(i.Component);q.defaultProps={},Object.setPrototypeOf(q.defaultProps,p.a);var _=Object(d.a)(f.f,z.c)(q);n.d(t,"pageQuery",function(){return U});var L=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data;console.log(this.props);var t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,a=e.allSitePage.edges;return a=a.filter(function(e){var t=e.node;return!!t.pluginCreator&&"gatsby-plugin-page-creator"===t.pluginCreator.name}),l.a.createElement(s.a,{location:this.props.location,title:t},l.a.createElement(u.a,null),l.a.createElement(A.a,{fill:!0},l.a.createElement(O,{flex:!0},l.a.createElement(_,{title:"Tab 1"},l.a.createElement(A.a,{fill:!0,pad:"large",align:"center",background:"accent-1"},a.map(function(e){var t=e.node;return l.a.createElement(A.a,null,l.a.createElement(c.Link,{to:t.path},t.path))}))),l.a.createElement(_,{title:"Tab 2"},l.a.createElement(A.a,{fill:!0,pad:"large",align:"center",background:"accent-2"},n.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return l.a.createElement(A.a,null,l.a.createElement("div",{key:t.fields.slug},l.a.createElement("h3",null,l.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))}))))))},t}(l.a.Component),U=(t.default=L,"766456821")},157:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(152),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(159),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var A=n(33);n.d(t,"parsePath",function(){return A.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},168:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},173:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=(n(32),n(0)),i=n.n(o),l=n(157),c=n(567),u=n(568),s=n(566),A=n(562),d=n(569),f=n(563),p=n(560),g=n(565),h=n(561),m=function(e){var t=e.showSidebar,n=e.handleSidebar,a=e.size,r=e.children;return t&&"small"===a?i.a.createElement(g.a,null,i.a.createElement(c.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},i.a.createElement(d.a,{icon:i.a.createElement(h.a,null),onClick:n})),i.a.createElement(c.a,{fill:!0,background:"light-2",align:"center",justify:"center"},r)):i.a.createElement(p.a,{direction:"horizontal",open:t},i.a.createElement(c.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},r))},b={global:{font:{family:"Roboto",size:"14px",height:"20px"}}},v=function(e){return i.a.createElement(c.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showSidebar:!1},t.handleSidebar=function(){return t.setState(function(e){return{showSidebar:!e.showSidebar}})},t}return r()(t,e),t.prototype.render=function(){var e,t=this,n=this.state.showSidebar,a=this.props,r=a.location,o=a.title,p=a.children;return e="/"===r.pathname?i.a.createElement(u.a,null,i.a.createElement(l.Link,{to:"/"},o)):i.a.createElement(u.a,{level:"3"},i.a.createElement(l.Link,{to:"/"},o)),i.a.createElement(s.a,{theme:b,full:!0},i.a.createElement(A.a.Consumer,null,function(a){return i.a.createElement(c.a,{fill:!0},i.a.createElement(v,null,e,i.a.createElement(d.a,{icon:i.a.createElement(f.a,null),onClick:t.handleSidebar})),i.a.createElement(c.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},i.a.createElement(c.a,{flex:!0,align:"center",justify:"center"},p,i.a.createElement(c.a,null,i.a.createElement("footer",null,"©",(new Date).getFullYear(),", Built with",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),i.a.createElement(m,{size:a,showSidebar:n,handleSidebar:t.handleSidebar},i.a.createElement(l.Link,{to:"/about"},"About me"))))}))},t}(i.a.Component);t.a=E},196:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(251),r=n.n(a),o=n(252),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,u=l.scale},214:function(e,t,n){"use strict";n(249);var a=n(215),r=n(0),o=n.n(r),i=n(157),l=n(250),c=n.n(l),u=n(567),s=n(196);var A="4007731267";t.a=function(){return o.a.createElement(i.StaticQuery,{query:A,render:function(e){var t=e.site.siteMetadata,n=t.author;return t.social,o.a.createElement(u.a,null,o.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,n)," who lives and works in Berlin building useful things."))},data:a})}},215:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/0b804/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/753c3/profile-pic.jpg 2x,\n/static/4f27694bd7811d13157e5e488ad64f43/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Runar Flaten",social:{twitter:"runfl"}}}}}},225:function(e,t,n){var a=n(24).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-daa4ef600d191e60ee36.js.map