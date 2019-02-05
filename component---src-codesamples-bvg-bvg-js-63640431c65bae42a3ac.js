(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,n){"use strict";n.r(t);n(74),n(51),n(242),n(175);var a=n(0),r=n.n(a),o=n(193),i=n.n(o),l=n(210),c=n(521),u=n(344),s=n(325);t.default=function(e){var t=e.stop,n=e.getDepartures,a=e.index;return r.a.createElement(l.a,{onClick:function(){return n(t.id,a)}},r.a.createElement(c.a,{elevation:"large"},r.a.createElement(c.a,{border:!0},t.distance," meter:"," ",t.name,Object.entries(t.products).map(function(e){var t=e[0];if(!0===e[1])return" "+t+" "})),r.a.createElement(u.a,{open:t.departures},t.departures&&t.departures.map(function(e,t){return r.a.createElement(s.a,{key:t,columns:{count:3,size:"auto"}},r.a.createElement(c.a,null,e.direction),r.a.createElement(c.a,null,e.line.id),r.a.createElement(c.a,null,i()(e.when).fromNow()))}))))}},144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(521),c=n(210),u=(n(193),n(169)),s=n(143),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={latitude:"",longitude:"",stops:[]},t.getLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var n=e.coords;t.setState({latitude:n.latitude,longitude:n.longitude}),t.getStops()})},t.getStops=function(){var e=t.state,n=e.latitude,a=e.longitude;fetch("https://1.bvg.transport.rest/stations/nearby?latitude="+n+"&longitude="+a).then(function(e){return e.json()}).then(function(e){console.log("setting stops",e),t.setState({stops:e})}).catch(function(e){return console.log(e)})},t.getDepartures=function(e,n){(console.log("getting dep for id "+e),console.log(t.state.stops[n]),void 0===t.state.stops[n].departures)?fetch("https://1.bvg.transport.rest/stations/"+e+"/departures").then(function(e){return e.json()}).then(function(e){console.log(e),t.setState(function(t){var a=[].concat(t.stops);return a[n].departures=e,{stops:a}})}).catch(function(e){return console.log(e)}):t.setState(function(e){var t=[].concat(e.stops);return t[n].departures=void 0,{stops:t}})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state.stops;return i.a.createElement(u.a,null,i.a.createElement(l.a,{justify:"center",align:"center"},0===t.length&&i.a.createElement(c.a,{onClick:this.getLocation,label:"Get stops nearby"}),i.a.createElement(l.a,null,t.length>0&&t.map(function(t,n){return i.a.createElement(l.a,{border:!0,margin:"small",key:n},i.a.createElement(s.default,{stop:t,index:n,getDepartures:e.getDepartures}))}))))},t}(i.a.Component);t.default=d},165:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(161),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(166),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},168:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=(n(32),n(0)),i=n.n(o),l=n(165),c=n(521),u=n(519),s=n(517),d=n(520),f=n(326),p=n(210),m=n(231),g=n(344),h=n(518),b=n(230),E=function(e){var t=e.showSidebar,n=e.handleSidebar,a=e.size,r=e.children;return t&&"small"===a?i.a.createElement(h.a,null,i.a.createElement(c.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},i.a.createElement(p.a,{icon:i.a.createElement(b.a,null),onClick:n})),i.a.createElement(c.a,{fill:!0,background:"light-2",align:"center",justify:"center"},r)):i.a.createElement(g.a,{direction:"horizontal",open:t},i.a.createElement(c.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},r))},y={global:{font:{family:"Roboto",size:"14px",height:"20px"}}},v=function(e){return i.a.createElement(c.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showSidebar:!1},t.handleSidebar=function(){return t.setState(function(e){return{showSidebar:!e.showSidebar}})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state.showSidebar,n=this.props,a=(n.location,n.title,n.children);return i.a.createElement(u.a,{theme:y},i.a.createElement(s.a.Consumer,null,function(n){return i.a.createElement(c.a,null,i.a.createElement(v,null,i.a.createElement(d.a,null,i.a.createElement(l.Link,{to:"/"},i.a.createElement(f.a,null,"My Blog"))),i.a.createElement(p.a,{icon:i.a.createElement(m.a,null),onClick:e.handleSidebar})),i.a.createElement(c.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"},fill:!0},i.a.createElement(c.a,{fill:!0},a,i.a.createElement(c.a,null,i.a.createElement("footer",null,"©",(new Date).getFullYear(),", Built with",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),i.a.createElement(E,{size:n,showSidebar:t,handleSidebar:e.handleSidebar},i.a.createElement(l.Link,{to:"/about"},"About me"))))}))},t}(i.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-codesamples-bvg-bvg-js-63640431c65bae42a3ac.js.map