!function(e){function t(t){for(var n,i,u=t[0],l=t[1],c=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={3:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+""+({5:"tracker"}[e]||e)+".bundle.js"}(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;o.push([226,0]),r()}({226:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(28),i=r(21),u=r(18),l=r.n(u),c=r(1),s=r.n(c),d=r(38),p=r(19),f=r(30),m=r(64),b=r(49),h=r(29),v=function(e){var t=e.id,r=e.title,n=e.version;return a.a.createElement("summary",null,a.a.createElement("p",null,r),a.a.createElement("span",null,t," - ",n))},g=function(e){var t=e.module,r=t.id,n=t.title,o=t.version,i=t.replacementCandidates;return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(v,{id:r,title:n,version:o})),a.a.createElement("td",null,i.map((function(e){return a.a.createElement(v,{key:e.id,id:e.id,title:e.title,version:e.version})}))))},y=g;v.propTypes={id:s.a.string,title:s.a.string,version:s.a.string},v.defaultProps={id:"",title:"",version:""},g.propTypes={module:s.a.shape({id:s.a.string,title:s.a.string,version:s.a.string,replacementCandidates:s.a.arrayOf(s.a.object)}).isRequired};var E=r(26),O=r(25),j=r(2),w=r.n(j),P=r(5),D=r.n(P),k=r(15),q=r(48);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var M=function(e){return{id:e.id,title:e.attributes.humanName,version:e.attributes.version}},R=function(e){return e.filter((function(e){return"sourceModule"===e.type})).map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){D()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},M(t),{replacementCandidates:t.relationships.replacementCandidates.data.map((function(t){return M(e.find((function(e){return e.id===t.id&&e.type===t.type})))}))})}))},C=a.a.createContext(),S=function(e){var t=e.source,r=e.basepathDashboard,o=e.children,i=Object(n.useState)([]),u=w()(i,2),l=u[0],c=u[1],s=Object(n.useContext)(k.c).throwError,d=Object(q.b)({href:t,handleError:s}),p=d.isLoading,f=d.document;return Object(n.useEffect)((function(){f&&c(R(f.data))}),[f]),a.a.createElement(C.Provider,{value:{isLoading:p,basepathDashboard:r,modules:l}},o)};S.propTypes={source:s.a.string.isRequired,basepathDashboard:s.a.string.isRequired,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]).isRequired};var x=function(e){var t=e.pending;return a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"2"},t?a.a.createElement(O.a,{message:"Loading…"}):a.a.createElement("em",null,"No Module info"))))},L=function(e){var t=e.modules;return a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement(y,{key:e.id,module:e})})))},_=function(){var e=Object(u.useTracking)(),t=Object(n.useContext)(C),r=t.isLoading,o=t.modules,i=t.basepathDashboard;return Object(n.useEffect)((function(){setTimeout((function(){e.trackEvent({type:"User viewed modules auditor"})}),1e3)}),[]),a.a.createElement("div",null,a.a.createElement(h.a,null,a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement(E.a,{href:"../../",title:"Home"},"Home")),a.a.createElement(p.a,null,a.a.createElement(E.a,{href:i,title:"Migrations"},"Migrations")),a.a.createElement(p.a,null,a.a.createElement("span",null,"Modules"))),a.a.createElement(f.a,{title:"Modules"}),a.a.createElement(m.a,null,[{name:"found",title:"Found",path:"/",to:"./"}].map((function(e){return a.a.createElement(b.a,{key:"tab-".concat(e.name),to:e.to},e.title)})))),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Drupal 7"),a.a.createElement("th",null,"Drupal 9"))),o.length?a.a.createElement(L,{modules:o}):a.a.createElement(x,{pending:r})))};x.propTypes={pending:s.a.bool.isRequired},L.propTypes={modules:s.a.arrayOf(s.a.shape({id:s.a.string.isRequired,title:s.a.string.isRequired,version:s.a.string.isRequired})).isRequired};var A=function(e){var t=e.basepathDashboard,r=e.source;return a.a.createElement("div",{className:"migrate-ui"},a.a.createElement(S,{source:r,basepathDashboard:t},a.a.createElement(_,null)))},N=new i.a,H=l()({},{dispatch:function(e){return N.logEvent(e)}})(A);A.propTypes={source:s.a.string.isRequired,basepathDashboard:s.a.string.isRequired};var J=r(46);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#decoupled-page-root"),t=e.getAttribute("data-module-path");r.p="/".concat(t,"/ui/dist/");var n=e.getAttribute("data-basepath-dashboard"),u=e.getAttribute("data-source");(new i.a).init(e.getAttribute("data-tracking-api-key"),Object(J.a)(e),void 0),e&&Object(o.render)(a.a.createElement(H,{source:u,basepathDashboard:n}),e)}))}});