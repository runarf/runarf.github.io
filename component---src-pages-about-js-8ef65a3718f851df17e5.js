(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(173),l=a(564);t.default=function(e){return r.a.createElement(i.a,{location:e.location,title:"About me"},r.a.createElement(l.a,{fill:!0,justify:"center",align:"center"},"This is about me, not you"))}},157:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(152),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(160),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},160:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=(a(32),a(0)),l=a.n(i),o=a(157),c=a(564),u=a(566),s=a(563),d=a(559),m=a(565),f=a(560),h=a(557),p=a(562),g=a(558),b=function(e){var t=e.showSidebar,a=e.handleSidebar,n=e.size,r=e.children;return t&&"small"===n?l.a.createElement(p.a,null,l.a.createElement(c.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},l.a.createElement(m.a,{icon:l.a.createElement(g.a,null),onClick:a})),l.a.createElement(c.a,{fill:!0,background:"light-2",align:"center",justify:"center"},r)):l.a.createElement(h.a,{direction:"horizontal",open:t},l.a.createElement(c.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},r))},w={global:{font:{family:"Roboto",size:"14px",height:"20px"}}},y=function(e){return l.a.createElement(c.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={showSidebar:!1},t.handleSidebar=function(){return t.setState(function(e){return{showSidebar:!e.showSidebar}})},t}return r()(t,e),t.prototype.render=function(){var e,t=this,a=this.state.showSidebar,n=this.props,r=n.location,i=n.title,h=n.children;return e="/"===r.pathname?l.a.createElement(u.a,null,l.a.createElement(o.Link,{to:"/"},i)):l.a.createElement(u.a,{level:"3"},l.a.createElement(o.Link,{to:"/"},i)),l.a.createElement(s.a,{theme:w,full:!0},l.a.createElement(d.a.Consumer,null,function(n){return l.a.createElement(c.a,{width:"xlarge"},l.a.createElement(y,null,e,l.a.createElement(m.a,{icon:l.a.createElement(f.a,null),onClick:t.handleSidebar})),l.a.createElement(c.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},l.a.createElement(c.a,{fill:!0},h,l.a.createElement(c.a,null,l.a.createElement("footer",null,"©",(new Date).getFullYear(),", Built with",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),l.a.createElement(b,{size:n,showSidebar:a,handleSidebar:t.handleSidebar},l.a.createElement(o.Link,{to:"/about"},"About me"))))}))},t}(l.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-about-js-8ef65a3718f851df17e5.js.map