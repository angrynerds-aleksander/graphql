(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{199:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(210),o=a(209);e.default=function(){return i.a.createElement(r.a,{title:"404: Not found"},i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},207:function(t,e,a){"use strict";a.d(e,"b",function(){return c});var n=a(0),i=a.n(n),r=a(66),o=a.n(r);a.d(e,"a",function(){return o.a}),a.d(e,"c",function(){return r.navigate});a(208),a(9).default.enqueue;var u=i.a.createContext({});function M(t){var e=t.staticQueryData,a=t.data,n=t.query,r=t.render,o=a?a.data:e[n]&&e[n].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(t){var e=t.data,a=t.query,n=t.render,r=t.children;return i.a.createElement(u.Consumer,null,function(t){return i.a.createElement(M,{data:e,query:a,render:n||r,staticQueryData:t})})}},208:function(t,e,a){var n;t.exports=(n=a(211))&&n.default||n},209:function(t,e,a){"use strict";var n=a(213),i=a(0),r=a.n(i),o=a(218),u=a.n(o);function M(t){var e=t.description,a=t.lang,i=t.meta,o=t.title,M=n.data.site,c=e||M.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+M.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)})}M.defaultProps={lang:"en",meta:[],description:""},e.a=M},210:function(t,e,a){"use strict";a(13);var n=a(0),i=a.n(n),r=a(207),o=a(219),u=a(212),M=a.n(u),c=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"#2d2072",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none",flexShrink:0}},i.a.createElement("img",{src:M.a,alt:"Angry Nerds logo",height:"78",width:"39"})),i.a.createElement("h1",{className:"header"},e)))};c.defaultProps={siteTitle:""};var j=c,N=function(){return i.a.createElement("footer",null,i.a.createElement("p",null,(new Date).getFullYear()," - Aleksander Niedźwiedź ",i.a.createElement("br",null)," ",i.a.createElement("a",{target:"_blank",href:"https://angrynerds.pl/"},"Angry Nerds")))},l=a(19);a(216),a(217);var L=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).navigate=function(t){var e=t.keyCode;return!(37===e&&a.location<=a.minPage)&&(!(39===e&&a.location>=a.maxPage)&&void(39===e?Object(r.c)("/"+(a.location+1)):37===e&&Object(r.c)("/"+(a.location-1))))},a.location=parseInt(l.globalHistory.location.pathname.replace("/graphql/",""),10)||0,a.minPage=1,a.maxPage=11,a.timeline=new o.b({paused:!0}),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var u=n.prototype;return u.componentDidMount=function(){document.addEventListener("keydown",this.navigate);var t=document.querySelector("main"),e=document.querySelectorAll("main > *");this.timeline.from(t,0,{opacity:0,autoAlpha:0},.125).staggerFrom(e,.375,{autoAlpha:0,x:-25,ease:o.a.easeOut},.0625),this.timeline.play()},u.componentWillUnmount=function(){document.removeEventListener("keydown",this.navigate)},u.render=function(){var t=this.props,e=t.children,a=t.title;return i.a.createElement("section",null,i.a.createElement(j,{siteTitle:a}),i.a.createElement("main",null,e),i.a.createElement("nav",null,this.location>this.minPage?i.a.createElement(r.a,{to:"/"+(this.location-1)+"/"},"⬅️ Poprzedni slajd"):null,this.location>this.minPage&&this.location<this.maxPage?" ⚫ ":null,this.location<this.maxPage?i.a.createElement(r.a,{to:"/"+(this.location+1)+"/"},"Następny slajd ➡️"):null),i.a.createElement(N,null))},n}(n.Component);e.a=L},211:function(t,e,a){"use strict";a.r(e);a(23);var n=a(0),i=a.n(n),r=a(91);e.default=function(t){var e=t.location,a=t.pageResources;return a?i.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json)):null}},212:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgaGVpZ2h0PSIxMDQiIHZpZXdCb3g9IjAgMCA1NCAxMDQiPg0KICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxwYXRoIGQ9Ik0zLjc2NiA2OC44bC0uOTg3Ljk4Vjg0LjY2aDIuNDI2di0zLjk4NGgzLjEwMnYzLjk4NGgyLjQyNlY2OS43NzlsLS45ODctLjk4aC01Ljk4em0xLjQzOSA5LjQ3aDMuMTAydi03LjA2M0g1LjIwNXY3LjA2M3pNMTYuMDIyIDc1LjgwNGwzLjA3IDguODU4aDIuNDM2VjY4Ljc5OUgxOS4xdjguNTU1bC0zLjA2OC04LjU1NWgtMi40Mzd2MTUuODYzaDIuNDI2ek0zMS4xMTMgODQuNjYxbC4yNjUtLjI2LjcyMi0uNzMzdi03Ljg4aC0zLjkzOXYyLjQzMWguOTg2djQuMDM1aC0yLjU3NVY3MS4yMDdoMy4xMDJ2MS41MDNIMzIuMXYtMi45MTRsLS45ODctLjk5NmgtNS45NTdsLTEuMDEgMS4wMDJ2MTMuODU3bDEuMDEgMS4wMDJ6TTQyLjcxIDc3LjIxNnYtNy40MTRsLS45ODctMS4wMDJoLTYuOTQ0Vjg0LjY2aDIuNDI2di02LjYwNWwyLjkwNSA2LjYwNWgyLjU4NGwtMi41LTYuNDY1aDEuNTI5bC45ODgtLjk4em0tNS41MDUtMS40NzNoMy4wOHYtNC41MzZoLTMuMDh2NC41MzZ6TTUwLjU5MiA2OC44bC0xLjgxNyA1LjE1NC0uMDM1LS4xMDMtMS42ODgtNS4wNTFoLTIuNDQ1bDIuOTkgOC42MzZ2Ny4yMjZoMi40MjdsLjAwMS03LjIzOCAyLjk4OC04LjYyNHpNOC4yODUgOTUuOTE0TDUuMjE2IDg3LjM2SDIuNzc5djE1Ljg2MmgyLjQyNnYtOC44NThsMy4wNyA4Ljg1OGgyLjQzNlY4Ny4zNkg4LjI4NXpNMTYuMTU3IDk2Ljc1NmgzLjAyOVY5NC4zNWgtMy4wMjl2LTQuNTgxaDUuNDY4Vjg3LjM2SDEzLjczdjE1Ljg2Mmg3LjkxNnYtMi40MDhoLTUuNDl6TTI0LjQ1NiA4Ny4zNnYxNS44NjJoMi40MjZ2LTYuNjA2bDIuOTA1IDYuNjA2aDIuNTg0bC0yLjUwMS02LjQ2NmgxLjUzbC45ODgtLjk4di03LjQxNEwzMS40IDg3LjM2aC02Ljk0NHptMi40MjYgNi45NDNoMy4wOHYtNC41MzVoLTMuMDh2NC41MzV6TTM1LjI1NyA4Ny4zNnYxNS44NjJoNy4wMTNsLjk0My0uOTh2LTEwLjk2bC01LjUxNC0zLjkyMmgtMi40NDJ6bTUuNTI5IDEzLjQ1NGgtMy4xMDN2LTkuOTdsMy4xMDMgMi4wOHY3Ljg5ek00NiA4Ny4zNmwtLjk4Ny45OHY0LjQzM2w1LjUwNiA2LjUxMXYxLjUzaC0zLjA4Vjk5LjMxaC0yLjQyNnYyLjkyNWwuOTg4Ljk4NWg1Ljk4bC45NjQtLjk4Vjk3LjgxTDQ3LjQ0IDkxLjMydi0xLjU1NGgzLjA4djEuNTAzaDIuNDI2di0yLjkzbC0uOTY1LS45OHpNNDIuMTYgMzYuNzUybC0xMS45NTcgMTAuMTguMDE4IDExLjM1aDIyLjg0NVY0Mi4xNjhMMzcuNjUgNDUuNDA1bDkuODc0LTguNzA0LTUuMzY0LjA1MXptLTkuNzczIDEzLjU1NWwxOC41OTgtMy45MDZ2OS44MThIMzIuMzg3di01LjkxMnpNMjUuNjI4IDQ2LjkzM2wtMTAuMTMtOC42MjctNC41MjYuNzQzIDcuMjEgNi4zNTctMTUuNDE2LTMuMjM5djE2LjExNkgyNS42MWwuMDE4LTExLjM1em0tMi4xODMgOS4yODRoLTE4LjZ2LTkuODE1bDE4LjYgMy45MDZ2NS45MXoiLz4NCiAgICAgICAgPHBhdGggZD0iTTIxLjAzMSA5LjEwMnYtNi4yOUwuMDUyIDEwLjUwNmwyLjYgMjQuMjY4IDEzLjEyMS05Ljg5MyAyOS41NTktNC42NTkgNy44NiAxNi45MjZMNTMuMTIzLjYxNnoiLz4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="},213:function(t){t.exports={data:{site:{siteMetadata:{title:"GraphQL",description:"Wprowadzenie do języka GraphQL",author:"Aleksander Niedźwiedź @ Angry Nerds"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ca4f855d418040c9cb82.js.map