(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,n){"use strict";n.r(t);n(221);var r,a=n(7),o=n.n(a),i=n(0),l=n.n(i),c=n(156),u=n(210),A=n(181),s=n(560),d=n(561),f=n(208),p=n(153),g=n(157),h=n(327),m=p.d.div.withConfig({displayName:"StyledTabs__StyledTabsHeader",componentId:"a4fwxl-0"})(["",";"],function(e){return e.theme.tabs.header.extend});m.defaultProps={},Object.setPrototypeOf(m.defaultProps,g.a);var b=((r={})[!0]="1 1",r[!1]="0 0",r.grow="1 0",r.shrink="0 1",r),v=Object(p.c)(["flex:",";"],function(e){return b[e.flex]+(!0!==e.flex?" auto":"")}),y=p.d.div.withConfig({displayName:"StyledTabs__StyledTabPanel",componentId:"a4fwxl-1"})(["min-height:0;"," ",";"],function(e){return e.flex&&v},function(e){return e.theme.tabs.panel.extend});y.defaultProps={},Object.setPrototypeOf(y.defaultProps,g.a);var E=p.d.div.withConfig({displayName:"StyledTabs",componentId:"a4fwxl-2"})([""," ",";"],h.e,function(e){return e.theme.tabs.extend});function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}E.defaultProps={},Object.setPrototypeOf(E.defaultProps,g.a);var O=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return w(x(x(t=e.call.apply(e,[this].concat(r))||this)),"state",{}),w(x(x(t)),"activateTab",function(e){var n=t.props,r=n.activeIndex,a=n.onActive;void 0===r&&t.setState({activeIndex:e}),a&&a(e)}),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){var n=e.activeIndex,r=t.activeIndex;return r!==n&&void 0!==n?{activeIndex:n}:{activeIndex:r||0}},r.prototype.render=function(){var e=this,t=this.props,n=t.children,r=t.flex,a=t.justify,o=t.messages.tabContents,c=t.theme,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","flex","justify","messages","theme"]);delete u.activeIndex,delete u.onActive;var A,s,f=this.state.activeIndex,p=i.Children.map(n,function(t,n){if(t){var r=t.props||{},a=n===f;return a&&(A=r.children,s="string"==typeof r.title?r.title:n+1),Object(i.cloneElement)(t,{active:a,onActivate:function(){return e.activateTab(n)}})}},this),g=(s||"")+" "+o;return l.a.createElement(E,j({as:d.a,role:"tablist",flex:r},u,{background:c.tabs.background}),l.a.createElement(m,{as:d.a,direction:"row",justify:a,flex:!1,wrap:!0,background:c.tabs.header.background,gap:c.tabs.gap},p),l.a.createElement(y,{flex:r,"aria-label":g,role:"tabpanel"},A))},r}(i.Component);w(O,"defaultProps",{justify:"center",messages:{tabContents:"Tab Contents"},responsive:!0}),Object.setPrototypeOf(O.defaultProps,g.a);var P=Object(f.a)(p.f)(O),B=n(562),k=n(254),S={center:"center",end:"right",start:"left"},C=Object(p.c)(["text-align:",";"],function(e){return S[e.textAlign]}),Q=Object(p.c)(["color:",";"],function(e){return Object(k.c)(e.colorProp,e.theme)}),M=Object(p.c)(["font-weight:",";"],function(e){return e.weight}),R=p.d.span.withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," ",""],h.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?Object(p.c)(["font-size:",";line-height:",";"],n.size,n.height):Object(p.c)(["font-size:",";line-height:normal;"],t)}(e)},function(e){return e.margin&&function(e){if("string"==typeof e.margin){var t=e.theme.global.edgeSize[e.margin];return"\n      margin-top: "+t+";\n      margin-bottom: "+t+";\n      margin-left: "+t+";\n      margin-right: "+t+";\n    "}return e.margin.vertical?"\n      margin-top: "+e.theme.global.edgeSize[e.margin.vertical]+";\n      margin-bottom: "+e.theme.global.edgeSize[e.margin.vertical]+";\n    ":e.margin.horizontal?"\n      margin-left: "+e.theme.global.edgeSize[e.margin.horizontal]+";\n      margin-right: "+e.theme.global.edgeSize[e.margin.horizontal]+";\n    ":e.margin.top?"margin-top: "+e.theme.global.edgeSize[e.margin.top]+";":e.margin.bottom?"margin-bottom: "+e.theme.global.edgeSize[e.margin.bottom]+";":e.margin.left?"margin-left: "+e.theme.global.edgeSize[e.margin.left]+";":e.margin.right?"margin-right: "+e.theme.global.edgeSize[e.margin.right]+";":""}(e)},function(e){return e.textAlign&&C},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&Q},function(e){return e.weight&&M},function(e){return e.theme.text&&e.theme.text.extend});function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}R.defaultProps={},Object.setPrototypeOf(R.defaultProps,g.a);var Y=function(e){var t=e.color,n=e.tag,r=e.as,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","tag","as"]);return l.a.createElement(R,T({as:!r&&n?n:r,colorProp:t},a))};Y.defaultProps={level:1};var I=Y,N=n(209),z=Object(p.c)(["&:hover{"," "," ",";}"],function(e){return e.theme.tab.hover.background&&Object(p.c)(["background:",";"],Object(k.c)(e.theme.tab.hover.background,e.theme))},function(e){return e.theme.tab.hover.color&&Object(p.c)(["color:",";"],Object(k.c)(e.theme.tab.hover.color,e.theme))},function(e){return e.theme.tab.hover.extend}),D=p.d.div.withConfig({displayName:"StyledTab",componentId:"sc-1nnwnsb-0"})([""," "," ",""],h.e,function(e){return!e.plain&&e.theme.tab.hover&&z},function(e){return e.theme.tab.extend});function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}D.defaultProps={},Object.setPrototypeOf(D.defaultProps,g.a);var _=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return q(F(F(t=e.call.apply(e,[this].concat(r))||this)),"state",{}),q(F(F(t)),"onMouseOver",function(e){var n=t.props.onMouseOver;t.setState({over:!0}),n&&n(e)}),q(F(F(t)),"onMouseOut",function(e){var n=t.props.onMouseOut;t.setState({over:void 0}),n&&n(e)}),q(F(F(t)),"onClickTab",function(e){var n=t.props.onActivate;e&&e.preventDefault(),n()}),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){var n=e.active,r=t.over;return n&&r?{over:void 0}:null},r.prototype.render=function(){var e=this.props,t=e.active,n=e.forwardRef,r=e.plain,a=e.title,o=(e.onMouseOver,e.onMouseOut,e.theme),i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["active","forwardRef","plain","title","onMouseOver","onMouseOut","theme"]),c=this.state.over;delete i.onActivate;var u=a,A={};if(!r){if(u="string"!=typeof a?a:t?l.a.createElement(I,o.tab.active,a):l.a.createElement(I,{color:c?o.tab.hover.color:o.tab.color},a),o.tab.border){var s=o.tab.border.color||o.global.control.border.color;t?s=o.tab.border.active.color||s:c&&(s=o.tab.border.hover.color||s),s=Object(k.c)(s,o),A.border={side:o.tab.border.side,size:o.tab.border.size,color:s}}A.background=t&&o.tab.active.background||o.tab.background,A.pad=o.tab.pad,A.margin=o.tab.margin}return l.a.createElement(B.a,G({ref:n,plain:!0,role:"tab","aria-selected":t,"aria-expanded":t},i,{onClick:this.onClickTab,onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onFocus:this.onMouseOver,onBlur:this.onMouseOut}),l.a.createElement(D,G({as:d.a,plain:r},A),u))},r}(i.Component);_.defaultProps={},Object.setPrototypeOf(_.defaultProps,g.a);var U=Object(f.a)(p.f,N.c)(_);n.d(t,"pageQuery",function(){return V});var L=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data;console.log(this.props);var t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,r=e.allSitePage.edges;return r=r.filter(function(e){var t=e.node;return!!t.pluginCreator&&"gatsby-plugin-page-creator"===t.pluginCreator.name}),l.a.createElement(A.a,{location:this.props.location,title:t},l.a.createElement(u.a,null),l.a.createElement(s.a,{full:!0},l.a.createElement(d.a,{fill:!0},l.a.createElement(P,{flex:!0},l.a.createElement(U,{title:"Tab 1"},l.a.createElement(d.a,{fill:!0,pad:"large",align:"center",background:"accent-1"},r.map(function(e){var t=e.node;return l.a.createElement("p",null,l.a.createElement(c.Link,{to:t.path},t.path))}))),l.a.createElement(U,{title:"Tab 2"},l.a.createElement(d.a,{fill:!0,pad:"large",align:"center",background:"accent-2"},n.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return l.a.createElement("div",{key:t.fields.slug},l.a.createElement("h3",null,l.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))))))},t}(l.a.Component),V=(t.default=L,"4230421973")},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(151),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(162),A=n.n(u);n.d(t,"PageRenderer",function(){return A.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var d=a.a.createContext({}),f=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},162:function(e,t,n){var r;e.exports=(r=n(179))&&r.default||r},179:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(56),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},181:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=(n(32),n(0)),i=n.n(o),l=n(156),c=n(561),u=n(563),A=n(560),s=n(562),d=n(558),f={global:{font:{family:"Roboto",size:"14px",height:"20px"}}},p=function(e){return i.a.createElement(c.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,r=t.title,a=t.children;return e="/"===n.pathname?i.a.createElement(u.a,null,i.a.createElement(l.Link,{to:"/"},r)):i.a.createElement(u.a,{level:"3"},">",i.a.createElement(l.Link,{to:"/"},r)),i.a.createElement(A.a,{theme:f},i.a.createElement(p,null," ",e,i.a.createElement(s.a,{icon:i.a.createElement(d.a,null)})),a,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(i.a.Component);t.a=g},193:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r=n(250),a=n.n(r),o=n(251),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new a.a(i.a);var c=l.rhythm,u=l.scale},210:function(e,t,n){"use strict";n(248);var r=n(211),a=n(0),o=n.n(a),i=n(156),l=n(249),c=n.n(l),u=n(561),A=n(193);var s="4007731267";t.a=function(){return o.a.createElement(i.StaticQuery,{query:s,render:function(e){var t=e.site.siteMetadata,n=t.author;return t.social,o.a.createElement(u.a,null,o.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:n,style:{marginRight:Object(A.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,n)," who lives and works in Berlin building useful things."))},data:r})}},211:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/0b804/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/753c3/profile-pic.jpg 2x,\n/static/4f27694bd7811d13157e5e488ad64f43/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Runar Flaten",social:{twitter:"runfl"}}}}}},221:function(e,t,n){var r=n(24).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(16)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-906da2b2095edb944ee0.js.map