"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{587:function(n,r,t){t.d(r,{Rj:function(){return f},F$:function(){return p},K7:function(){return h},pF:function(){return s},X9:function(){return o}});var e=t(861),a=t(757),u=t.n(a),c=t(340).Z.create({baseURL:"https://api.themoviedb.org/3"});c.interceptors.request.use((function(n){var r="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGJjNGU3ZGM2NDQ5NTQ1ODI3N2FiMThjZDBhZTQ5OCIsInN1YiI6IjYwY2JiYjRlNjY1NDA4MDA2Y2FiZGQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gvRNP5NUrSKrfo1NOWueZyaaUxE4uib7tqaQhxKFFc";return n.headers.Authorization="Bearer ".concat(r),n}),(function(n){return Promise.reject(n)}));var i=c,o=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("trending/movie/day?language=en-US");case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("search/movie?query=".concat(r,"&include_adult=false&language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("movie/".concat(r,"?language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("movie/".concat(r,"/credits?language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("movie/".concat(r,"/reviews?language=en-US"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},779:function(n,r,t){t.r(r),t.d(r,{default:function(){return y}});var e,a,u,c,i,o=t(861),s=t(439),p=t(757),f=t.n(p),h=t(587),l=t(791),d=t(689),v=t(168),x=t(924),g=x.ZP.ul(e||(e=(0,v.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=x.ZP.li(a||(a=(0,v.Z)(["\n  padding: 16px;\n  margin-bottom: 12px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n"]))),Z=x.ZP.h3(u||(u=(0,v.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),w=x.ZP.span(c||(c=(0,v.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n"]))),b=x.ZP.p(i||(i=(0,v.Z)(["\n  font-size: 16px;\n"]))),j=t(184),y=function(){var n=(0,l.useState)([]),r=(0,s.Z)(n,2),t=r[0],e=r[1],a=(0,d.UO)().id;return(0,l.useEffect)((function(){var n=function(){var n=(0,o.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.K7)(a);case 3:r=n.sent,e(r.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,j.jsx)(g,{children:t.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,j.jsxs)(m,{children:[(0,j.jsxs)(Z,{children:["Author: ",(0,j.jsx)(w,{children:t})]}),(0,j.jsx)(b,{children:e})]},r)}))})}}}]);
//# sourceMappingURL=779.ef43e58a.chunk.js.map