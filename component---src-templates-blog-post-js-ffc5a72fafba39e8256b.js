(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),i=a(0),A=a.n(i),l=a(157),o=a(247),c=a(173),u=a(220),s=a(564),d=a(566),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return A.a.createElement(c.a,{location:this.props.location,title:t},A.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt}),A.a.createElement("div",null,A.a.createElement("article",null,A.a.createElement(s.a,null,A.a.createElement("header",null,A.a.createElement(s.a,null,A.a.createElement(d.a,null,e.frontmatter.title)),A.a.createElement(s.a,null,e.frontmatter.date)),A.a.createElement(s.a,{pad:{horizontal:"medium"}},A.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),A.a.createElement("hr",null),A.a.createElement(o.a,null),A.a.createElement(s.a,{flex:!0,wrap:!0,justify:"between",background:"yellow"},A.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},A.a.createElement("li",null,n&&A.a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"←"," ",n.frontmatter.title)),A.a.createElement("li",null,r&&A.a.createElement(l.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," ","→"))))))))},t}(A.a.Component);t.default=m;var p="1001792397"},157:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),A=a.n(i),l=a(152),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(160),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var s=a(33);a.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},160:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),A=a.n(i),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=c},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=(a(32),a(0)),A=a.n(i),l=a(157),o=a(564),c=a(566),u=a(563),s=a(559),d=a(565),m=a(560),p=a(557),f=a(562),E=a(558),h=function(e){var t=e.showSidebar,a=e.handleSidebar,n=e.size,r=e.children;return t&&"small"===n?A.a.createElement(f.a,null,A.a.createElement(o.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},A.a.createElement(d.a,{icon:A.a.createElement(E.a,null),onClick:a})),A.a.createElement(o.a,{fill:!0,background:"light-2",align:"center",justify:"center"},r)):A.a.createElement(p.a,{direction:"horizontal",open:t},A.a.createElement(o.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},r))},g={global:{font:{family:"Roboto",size:"14px",height:"20px"}}},w=function(e){return A.a.createElement(o.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={showSidebar:!1},t.handleSidebar=function(){return t.setState(function(e){return{showSidebar:!e.showSidebar}})},t}return r()(t,e),t.prototype.render=function(){var e,t=this,a=this.state.showSidebar,n=this.props,r=n.location,i=n.title,p=n.children;return e="/"===r.pathname?A.a.createElement(c.a,null,A.a.createElement(l.Link,{to:"/"},i)):A.a.createElement(c.a,{level:"3"},A.a.createElement(l.Link,{to:"/"},i)),A.a.createElement(u.a,{theme:g,full:!0},A.a.createElement(s.a.Consumer,null,function(n){return A.a.createElement(o.a,{width:"xlarge"},A.a.createElement(w,null,e,A.a.createElement(d.a,{icon:A.a.createElement(m.a,null),onClick:t.handleSidebar})),A.a.createElement(o.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},A.a.createElement(o.a,{fill:!0},p,A.a.createElement(o.a,null,A.a.createElement("footer",null,"©",(new Date).getFullYear(),", Built with",A.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),A.a.createElement(h,{size:n,showSidebar:a,handleSidebar:t.handleSidebar},A.a.createElement(l.Link,{to:"/about"},"About me"))))}))},t}(A.a.Component);t.a=y},213:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/d2d31/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/0b804/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/753c3/profile-pic.jpg 2x,\n/static/4f27694bd7811d13157e5e488ad64f43/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Runar Flaten",social:{twitter:"runfl"}}}}}},220:function(e,t,a){"use strict";var n=a(221),r=a(0),i=a.n(r),A=a(4),l=a.n(A),o=a(254),c=a.n(o),u=a(157);function s(e){var t=e.description,a=e.lang,r=e.meta,A=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(r)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s;var d="1025518380"},221:function(e){e.exports={data:{site:{siteMetadata:{title:"My Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Runar Flaten"}}}}},247:function(e,t,a){"use strict";var n=a(213),r=a(0),i=a.n(r),A=a(157),l=(a(248),a(564)),o=a(249),c=a.n(o),u=a(250),s=a.n(u);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var d=new c.a(s.a);d.rhythm,d.scale;var m="2276408173";t.a=function(){return i.a.createElement(A.StaticQuery,{query:m,render:function(e){var t=e.site.siteMetadata,a=t.author;return t.social,i.a.createElement(l.a,{background:"pink"},i.a.createElement("p",null,"Written by"," ",i.a.createElement("strong",null,a)," ","who lives and works in Berlin building useful things."))},data:n})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ffc5a72fafba39e8256b.js.map