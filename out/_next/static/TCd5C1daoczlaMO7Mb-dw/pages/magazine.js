(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{OfYA:function(a,e,t){"use strict";t.r(e);var n=t("ln6h"),i=t.n(n),s=t("O40h"),c=t("0iUn"),r=t("MI3g"),u=t("a7VT"),o=t("sLSF"),m=t("Tit0"),l=t("q1tI"),p=t.n(l),h=t("5Yp1"),f=t("vDqi"),d=t.n(f),g=t("1Yj4"),w=t("ok1R"),b=t("rhny"),v=p.a.createElement,N=function(a){function e(a){var t;return Object(c.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this,a))).state={},t}return Object(m.a)(e,a),Object(o.a)(e,null,[{key:"getInitialProps",value:function(){var a=Object(s.a)(i.a.mark(function a(e){var t,n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return"http://localhost:3000",a.next=3,d.a.get("".concat("http://localhost:3000","/api/magazine"));case 3:return t=a.sent,n=t.data,a.abrupt("return",{data:n});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}]),Object(o.a)(e,[{key:"render",value:function(){return v(h.a,null,v("div",{className:"magazine"},v(g.a,null,v(w.a,{className:"pb-2"},this.props.data.map(function(a,e){return v(b.a,{sm:"12",md:"4",key:e},v("div",{className:"magazine-item shadow rounded"},v("div",{className:"magazine-content"},v("img",{src:"/static/images/".concat(a.image),className:"magazine-item-image"}),v("a",{href:"#",className:"magazine-item-link"},v("i",{className:"fas fa-search"}))),v("h3",{className:"text-right text-muted"},a.fa_name)))})))))}}]),e}(p.a.Component);e.default=N},Se2z:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/magazine",function(){return t("OfYA")}])}},[["Se2z",1,0]]]);