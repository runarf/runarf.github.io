(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(t,e,n){"use strict";n.r(e);n(75),n(51),n(339),n(175);var o=n(7),a=n.n(o),r=n(0),s=n.n(r),i=n(516),c=n(518),u=n(251),l=n(341),p=n.n(l),d=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))||this).state={latitude:"",longitude:"",stops:[]},e.getLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var n=t.coords;e.setState({latitude:n.latitude,longitude:n.longitude}),e.getStops()})},e}a()(e,t);var n=e.prototype;return n.getStops=function(){var t=this,e=this.state,n=e.latitude,o=e.longitude;fetch("https://1.bvg.transport.rest/stations/nearby?latitude="+n+"&longitude="+o).then(function(t){return t.json()}).then(function(e){console.log("setting stops",e),t.setState({stops:e})}).catch(function(t){return console.log(t)})},n.getDepartures=function(t,e){var n=this;(console.log("getting dep for id "+t),console.log(this.state.stops[e]),void 0===this.state.stops[e].departures)?fetch("https://1.bvg.transport.rest/stations/"+t+"/departures").then(function(t){return t.json()}).then(function(t){console.log(t),n.setState(function(n){var o=[].concat(n.stops);return o[e].departures=t,{stops:o}})}).catch(function(t){return console.log(t)}):this.setState(function(t){var n=[].concat(t.stops);return n[e].departures=void 0,{stops:n}})},n.render=function(){var t=this,e=this.state.stops;return s.a.createElement(i.a,null,s.a.createElement(c.a,{justify:"center",align:"center"},0===e.length&&s.a.createElement(u.a,{onClick:this.getLocation,label:"Get stops nearby"}),s.a.createElement(c.a,null,e.length>0&&e.map(function(e,n){return s.a.createElement(c.a,{key:n},s.a.createElement(u.a,{onClick:function(){return t.getDepartures(e.id,n)}},e.distance," ","meter: ",e.name,Object.entries(e.products).map(function(t){var e=t[0];if(!0===t[1])return" "+e+" "}),e.departures&&e.departures.map(function(t,e){return s.a.createElement(c.a,{key:e,justify:"between",direction:"row"},s.a.createElement(c.a,null,t.direction),s.a.createElement(c.a,null,t.line.id),s.a.createElement(c.a,null,p()(t.when).fromNow()))})))}))))},e}(s.a.Component);e.default=d}}]);
//# sourceMappingURL=component---src-codesamples-bvg-js-7133b0fc99be616caf38.js.map