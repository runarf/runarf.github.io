(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(t,e,n){"use strict";n.r(e);var o=n(7),a=n.n(o),r=n(0),c=n.n(r),s=n(516),i=n(518),l=n(263),u=(n(480),n(481)),f=n.n(u),g=["A","B"],p=g.length,h=function(){for(var t=!1,e="";!1===t;)(e=g[Math.floor(Math.random()*(p-0)+0)])[0]===e[0].toUpperCase()&&(t=!0);return e},m=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))||this).state={message:h()},e.fetchHorse=function(){console.log("fetching");var t="http://www.whateverorigin.org/get?url="+encodeURIComponent("https://de.wiktionary.org")+"&callback=?";console.log(t),f.a.getJSON(t,function(t){alert(t.contents)})},e.setRandomWord=function(){return e.setState({message:h()})},e}return a()(e,t),e.prototype.render=function(){var t=this;return c.a.createElement(s.a,null,c.a.createElement(i.a,{fill:!0,align:"center",justify:"center"},c.a.createElement(l.a,{target:"document",onLeft:function(){t.setState({message:"left"})},onRight:function(){t.setRandomWord()},onDown:function(){t.fetchHorse()},onUp:function(){t.setState({message:"up"})}},c.a.createElement(i.a,null,this.state.message))))},e}(c.a.Component);e.default=m}}]);
//# sourceMappingURL=component---src-codesamples-game-js-86e016d4f7758a52e299.js.map