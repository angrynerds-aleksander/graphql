(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(210),o=a(209);t.default=function(){return i.a.createElement(r.a,{title:"3"},i.a.createElement(o.a,{title:"Wprowadzenie"}),i.a.createElement("h1",null,"Podział GraphQL"),i.a.createElement("h2",null,"Queries"),i.a.createElement("p",null,"W przeciwieństwie do REST, nie łączymy się z konkretnymi endpointami, tylko tworzymy zapytania o strukturze podobnej do obiektu JSON, w odpowiedzi otrzymujemy konkretny zestaw danych o takiej samej strukturze jak nasze zapytanie"),i.a.createElement("h2",null,"Resolvers"),i.a.createElement("p",null,"Wskazują, skąd GraphQl ma pobrać dane do konkretnego zapytania"),i.a.createElement("h2",null,"Schema"),i.a.createElement("p",null,"Schema opisuje strukturę i typy danych w API, a także tworzy z niej dokumentacje API"),i.a.createElement("a",{style:{marginTop:"2em",display:"block"},href:"https://lucasconstantino.github.io/graphiql-online/",target:"_blank"},"GraphiQL Online"))}},207:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),i=a.n(n),r=a(66),o=a.n(r);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return r.navigate});a(208),a(9).default.enqueue;var u=i.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,o=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,o&&r(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(u.Consumer,null,function(e){return i.a.createElement(c,{data:t,query:a,render:n||r,staticQueryData:e})})}},208:function(e,t,a){var n;e.exports=(n=a(211))&&n.default||n},209:function(e,t,a){"use strict";var n=a(213),i=a(0),r=a.n(i),o=a(218),u=a.n(o);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,c=n.data.site,l=t||c.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},210:function(e,t,a){"use strict";a(13);var n=a(0),i=a.n(n),r=a(207),o=a(219),u=a(212),c=a.n(u),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#2d2072",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",display:"flex",alignItems:"center",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none",flexShrink:0}},i.a.createElement("img",{src:c.a,alt:"Angry Nerds logo",height:"78",width:"39"})),i.a.createElement("h1",{className:"header"},t)))};l.defaultProps={siteTitle:""};var j=l,M=function(){return i.a.createElement("footer",null,i.a.createElement("p",null,(new Date).getFullYear()," - Aleksander Niedźwiedź ",i.a.createElement("br",null)," ",i.a.createElement("a",{target:"_blank",href:"https://angrynerds.pl/"},"Angry Nerds")))},N=a(19);a(216),a(217);var L=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).navigate=function(e){var t=e.keyCode;return!(37===t&&a.location<=a.minPage)&&(!(39===t&&a.location>=a.maxPage)&&void(39===t?Object(r.c)("/"+(a.location+1)):37===t&&Object(r.c)("/"+(a.location-1))))},a.location=parseInt(N.globalHistory.location.pathname.replace("/",""),10)||0,a.minPage=1,a.maxPage=11,a.timeline=new o.b({paused:!0}),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var u=n.prototype;return u.componentDidMount=function(){document.addEventListener("keydown",this.navigate);var e=document.querySelector("main"),t=document.querySelectorAll("main > *");this.timeline.from(e,0,{opacity:0,autoAlpha:0},.125).staggerFrom(t,.375,{autoAlpha:0,x:-25,ease:o.a.easeOut},.0625),this.timeline.play()},u.componentWillUnmount=function(){document.removeEventListener("keydown",this.navigate)},u.render=function(){var e=this.props,t=e.children,a=e.title;return i.a.createElement("section",null,i.a.createElement(j,{siteTitle:a}),i.a.createElement("main",null,t),i.a.createElement("nav",null,this.location>this.minPage?i.a.createElement(r.a,{to:"/"+(this.location-1)+"/"},"⬅️ Poprzedni slajd"):null,this.location>this.minPage&&this.location<this.maxPage?" ⚫ ":null,this.location<this.maxPage?i.a.createElement(r.a,{to:"/"+(this.location+1)+"/"},"Następny slajd ➡️"):null),i.a.createElement(M,null))},n}(n.Component);t.a=L},211:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),i=a.n(n),r=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},212:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgaGVpZ2h0PSIxMDQiIHZpZXdCb3g9IjAgMCA1NCAxMDQiPg0KICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxwYXRoIGQ9Ik0zLjc2NiA2OC44bC0uOTg3Ljk4Vjg0LjY2aDIuNDI2di0zLjk4NGgzLjEwMnYzLjk4NGgyLjQyNlY2OS43NzlsLS45ODctLjk4aC01Ljk4em0xLjQzOSA5LjQ3aDMuMTAydi03LjA2M0g1LjIwNXY3LjA2M3pNMTYuMDIyIDc1LjgwNGwzLjA3IDguODU4aDIuNDM2VjY4Ljc5OUgxOS4xdjguNTU1bC0zLjA2OC04LjU1NWgtMi40Mzd2MTUuODYzaDIuNDI2ek0zMS4xMTMgODQuNjYxbC4yNjUtLjI2LjcyMi0uNzMzdi03Ljg4aC0zLjkzOXYyLjQzMWguOTg2djQuMDM1aC0yLjU3NVY3MS4yMDdoMy4xMDJ2MS41MDNIMzIuMXYtMi45MTRsLS45ODctLjk5NmgtNS45NTdsLTEuMDEgMS4wMDJ2MTMuODU3bDEuMDEgMS4wMDJ6TTQyLjcxIDc3LjIxNnYtNy40MTRsLS45ODctMS4wMDJoLTYuOTQ0Vjg0LjY2aDIuNDI2di02LjYwNWwyLjkwNSA2LjYwNWgyLjU4NGwtMi41LTYuNDY1aDEuNTI5bC45ODgtLjk4em0tNS41MDUtMS40NzNoMy4wOHYtNC41MzZoLTMuMDh2NC41MzZ6TTUwLjU5MiA2OC44bC0xLjgxNyA1LjE1NC0uMDM1LS4xMDMtMS42ODgtNS4wNTFoLTIuNDQ1bDIuOTkgOC42MzZ2Ny4yMjZoMi40MjdsLjAwMS03LjIzOCAyLjk4OC04LjYyNHpNOC4yODUgOTUuOTE0TDUuMjE2IDg3LjM2SDIuNzc5djE1Ljg2MmgyLjQyNnYtOC44NThsMy4wNyA4Ljg1OGgyLjQzNlY4Ny4zNkg4LjI4NXpNMTYuMTU3IDk2Ljc1NmgzLjAyOVY5NC4zNWgtMy4wMjl2LTQuNTgxaDUuNDY4Vjg3LjM2SDEzLjczdjE1Ljg2Mmg3LjkxNnYtMi40MDhoLTUuNDl6TTI0LjQ1NiA4Ny4zNnYxNS44NjJoMi40MjZ2LTYuNjA2bDIuOTA1IDYuNjA2aDIuNTg0bC0yLjUwMS02LjQ2NmgxLjUzbC45ODgtLjk4di03LjQxNEwzMS40IDg3LjM2aC02Ljk0NHptMi40MjYgNi45NDNoMy4wOHYtNC41MzVoLTMuMDh2NC41MzV6TTM1LjI1NyA4Ny4zNnYxNS44NjJoNy4wMTNsLjk0My0uOTh2LTEwLjk2bC01LjUxNC0zLjkyMmgtMi40NDJ6bTUuNTI5IDEzLjQ1NGgtMy4xMDN2LTkuOTdsMy4xMDMgMi4wOHY3Ljg5ek00NiA4Ny4zNmwtLjk4Ny45OHY0LjQzM2w1LjUwNiA2LjUxMXYxLjUzaC0zLjA4Vjk5LjMxaC0yLjQyNnYyLjkyNWwuOTg4Ljk4NWg1Ljk4bC45NjQtLjk4Vjk3LjgxTDQ3LjQ0IDkxLjMydi0xLjU1NGgzLjA4djEuNTAzaDIuNDI2di0yLjkzbC0uOTY1LS45OHpNNDIuMTYgMzYuNzUybC0xMS45NTcgMTAuMTguMDE4IDExLjM1aDIyLjg0NVY0Mi4xNjhMMzcuNjUgNDUuNDA1bDkuODc0LTguNzA0LTUuMzY0LjA1MXptLTkuNzczIDEzLjU1NWwxOC41OTgtMy45MDZ2OS44MThIMzIuMzg3di01LjkxMnpNMjUuNjI4IDQ2LjkzM2wtMTAuMTMtOC42MjctNC41MjYuNzQzIDcuMjEgNi4zNTctMTUuNDE2LTMuMjM5djE2LjExNkgyNS42MWwuMDE4LTExLjM1em0tMi4xODMgOS4yODRoLTE4LjZ2LTkuODE1bDE4LjYgMy45MDZ2NS45MXoiLz4NCiAgICAgICAgPHBhdGggZD0iTTIxLjAzMSA5LjEwMnYtNi4yOUwuMDUyIDEwLjUwNmwyLjYgMjQuMjY4IDEzLjEyMS05Ljg5MyAyOS41NTktNC42NTkgNy44NiAxNi45MjZMNTMuMTIzLjYxNnoiLz4NCiAgICA8L2c+DQo8L3N2Zz4NCg=="},213:function(e){e.exports={data:{site:{siteMetadata:{title:"GraphQL",description:"Wprowadzenie do języka GraphQL",author:"Aleksander Niedźwiedź @ Angry Nerds"}}}}}}]);
//# sourceMappingURL=component---src-pages-3-js-d7b681df0e6ca0f061d7.js.map