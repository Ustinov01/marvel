"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[425],{1748:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var c=t(3433),i=t(9439),s=t(2791),r=t(1087),a=t(3394),l=t(9613),o=t(388),u=t(184),m=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],m=e[1],d=(0,s.useState)(!1),h=(0,i.Z)(d,2),_=h[0],f=h[1],j=(0,s.useState)(15),x=(0,i.Z)(j,2),p=x[0],g=x[1],v=(0,s.useState)(!1),Z=(0,i.Z)(v,2),b=Z[0],N=Z[1],k=(0,o.Z)(),C=k.loading,y=k.error,S=k.getAllComics;(0,s.useEffect)((function(){w(p,!0)}),[]);var w=function(n,e){f(!e),S(n).then(P)},P=function(n){var e=!1;n.length<7&&(e=!0),m((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(n))})),f(!1),g((function(n){return n+8})),N(e)};var q=function(n){var e=n.map((function(n,e){return(0,u.jsx)("li",{className:"comics__item",children:(0,u.jsxs)(r.rU,{to:"/comics/".concat(n.id),children:[(0,u.jsx)("img",{src:n.thumbnail,alt:n.title,className:"comics__item-img"}),(0,u.jsx)("div",{className:"comics__item-name",children:n.title}),(0,u.jsx)("div",{className:"comics__item-price",children:n.price})]})},e)}));return(0,u.jsx)("ul",{className:"comics__grid",children:e})}(t),A=y?(0,u.jsx)(l.Z,{}):null,E=C&&!_?(0,u.jsx)(a.Z,{}):null;return(0,u.jsxs)("div",{className:"comics__list",children:[A,E,q,(0,u.jsx)("button",{className:"button button__main button__long",disabled:_,style:{display:b?"none":"block"},onClick:function(){return w(p)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},d=t(3957),h=t(4270),_=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(h.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Page with our comics"}),(0,u.jsx)("title",{children:"Comics Page"})]}),(0,u.jsx)(d.Z,{}),(0,u.jsx)(m,{})]})}}}]);
//# sourceMappingURL=425.b818a15d.chunk.js.map