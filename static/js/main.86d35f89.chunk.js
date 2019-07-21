(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(55)},55:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(20),c=t.n(i),u=t(21),l=t(2),o=t(1);function d(){var e=Object(l.a)(["\n  html {\n    box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: Helvetica, Arial, sans-serif;\n  }\n"]);return d=function(){return e},e}var f=Object(o.createGlobalStyle)(d()),s=t(4),m="480px",p="992px",b="1200px",v=t(9),x=t.n(v),g=t(24),h=t(25),E=t.n(h),w=function(){var e=Object(a.useState)({products:[]}),n=Object(s.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)({isLoading:!1}),c=Object(s.a)(i,2),u=c[0],l=c[1],o=Object(a.useState)({isError:!1}),d=Object(s.a)(o,2),f=d[0],m=d[1];return Object(a.useEffect)(function(){!function(){var e=Object(g.a)(x.a.mark(function e(){var n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,E()("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3");case 4:n=e.sent,r(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(!0);case 11:l(!1);case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(){return e.apply(this,arguments)}}()()},[]),[t,u,f]};function j(){var e=Object(l.a)(["\n  font-size: calc(16px + 2vw);\n  color: #333;\n  margin: 0;\n  @media (min-width: ",") {\n    font-size: 36px;\n  }\n"]);return j=function(){return e},e}var O=o.default.h1(j(),p),z=t(5),S=function(e){var n=e.size,t=e.onChange,a=Object(z.a)(e,["size","onChange"]);return r.a.createElement("select",Object.assign({value:n,onChange:t},a),r.a.createElement("option",{value:""},"Filter by size"),r.a.createElement("option",{value:"XS"},"XS"),r.a.createElement("option",{value:"S"},"S"),r.a.createElement("option",{value:"M"},"M"),r.a.createElement("option",{value:"L"},"L"),r.a.createElement("option",{value:"XL"},"XL"))};function y(){var e=Object(l.a)(["\n  margin-top: 10px;\n  @media (min-width: ",") {\n    margin-top: 0;\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(l.a)(["\n  background: #def2f3;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  text-align: center;\n  @media (min-width: ",") {\n    display: flex;\n    justify-content: space-between;\n    text-align: left;\n  }\n"]);return k=function(){return e},e}var C=o.default.header(k(),m),L=Object(o.default)(S)(y(),m),X=function(e){var n=e.title,t=e.size,a=e.onSizeChange;return r.a.createElement(C,null,r.a.createElement(O,null,n),r.a.createElement(L,{size:t,onChange:a}))};function F(){var e=Object(l.a)(["\n  display: inline-block;\n  color: #fff;\n  padding: 0.8em 1.5em;\n  margin-right: 10px;\n  ","\n  ","\n"]);return F=function(){return e},e}function I(){var e=Object(l.a)(["\n  height: 3.2em;\n  font-size: 12px;\n  @media (min-width: ",") {\n    font-size: 14px;\n  }\n  @media (min-width: ",") {\n    font-size: 16px;\n  }\n"]);return I=function(){return e},e}function J(){var e=Object(l.a)(["\n  font-size: calc(24px + 1vw);\n  margin-left: 10px;\n  @media (min-width: ",") {\n    font-size: 36px;\n  }\n"]);return J=function(){return e},e}function M(){var e=Object(l.a)(["\n  font-size: calc(12px + 1vw);\n  @media (min-width: ",") {\n    font-size: 24px;\n  }\n"]);return M=function(){return e},e}function N(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  font-weight: bold;\n"]);return N=function(){return e},e}function A(){var e=Object(l.a)(["\n  display: block;\n  margin: 0 auto;\n  width: calc(80% + 4vw);\n  max-width: 280px;\n"]);return A=function(){return e},e}function B(){var e=Object(l.a)(["\n  color: #333;\n  border-right: 1px solid #e1e1e1;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 10px;\n"]);return B=function(){return e},e}var G=o.default.div(B()),H=o.default.img(A()),W=o.default.div(N()),q=o.default.div(M(),b),D=o.default.div(J(),b),K=o.default.div(I(),p,b),P=o.default.div(F(),function(e){return e.isSale&&"background: #ca3538;"},function(e){return e.isExclusive&&"background: #149718;"}),Q=function(e){var n=e.name,t=e.price,a=e.image,i=e.isSale,c=e.isExclusive,u=Object(z.a)(e,["name","price","image","isSale","isExclusive"]);return r.a.createElement(G,u,r.a.createElement(H,{src:"images/".concat(a),alt:n}),r.a.createElement(K,null,i&&r.a.createElement(P,{isSale:!0},"Sale"),c&&r.a.createElement(P,{isExclusive:!0},"Exclusive")),r.a.createElement(W,null,r.a.createElement(q,null,n),r.a.createElement(D,null,t)))};function R(){var e=Object(l.a)(["\n  width: 100%;\n  @media (min-width: ",") {\n    width: 50%;\n  }\n  @media (min-width: ",") {\n    width: calc(100% / 3);\n  }\n  @media (min-width: ",") {\n    width: 25%;\n  }\n"]);return R=function(){return e},e}function T(){var e=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  border-top: 1px solid #e1e1e1;\n  border-left: 1px solid #e1e1e1;\n"]);return T=function(){return e},e}var U=o.default.main(T()),V=Object(o.default)(Q)(R(),m,p,b),Y=function(e){var n=e.products;return r.a.createElement(U,null,n.map(function(e){return r.a.createElement(V,{key:e.index,name:e.productName,price:e.price,image:e.productImage,isSale:e.isSale,isExclusive:e.isExclusive})}))};function Z(){var e=Object(l.a)(["\n  border: 1px solid #e1e1e1;\n  padding: 10em;\n  color: #999;\n  text-align: center;\n"]);return Z=function(){return e},e}var $=o.default.div(Z()),_=function(){return r.a.createElement($,null,"Loading products...")};function ee(){var e=Object(l.a)(["\n  width: 100%;\n  max-width: 1300px;\n  @media (min-width: ",") {\n    width: 90%;\n    margin: 20px auto;\n  }\n"]);return ee=function(){return e},e}var ne=o.default.div(ee(),m);var te=function(){var e=w(),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(""),u=Object(s.a)(c,2),l=u[0],o=u[1],d=l?t.filter(function(e){return e.size.includes(l)}):t;return r.a.createElement(ne,null,r.a.createElement(X,{title:"Women\u2019s tops \ud83d\udc5a",size:l,onSizeChange:function(e){o(e.target.value)}}),i?r.a.createElement(_,null):r.a.createElement(Y,{products:d}))};c.a.render(r.a.createElement(a.Fragment,null,r.a.createElement(u.Normalize,null),r.a.createElement(f,null),r.a.createElement(te,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.86d35f89.chunk.js.map