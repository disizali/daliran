(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Kr8L:function(t,e,n){"use strict";n.r(e);var a=n("ln6h"),r=n.n(a),s=n("O40h"),c=n("0iUn"),o=n("MI3g"),i=n("a7VT"),u=n("sLSF"),l=n("Tit0"),m=n("q1tI"),d=n.n(m),p=n("5Yp1"),h=n("vDqi"),w=n.n(h),f=n("1Yj4"),b=n("ok1R"),g=n("rhny"),y=d.a.createElement,j=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(o.a)(this,Object(i.a)(e).call(this,t))).state={},n}return Object(l.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){document.getElementById("")}}],[{key:"getInitialProps",value:function(){var t=Object(s.a)(r.a.mark(function t(e){var n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:3000",t.next=3,w.a.get("".concat("http://localhost:3000","/api/news"));case 3:return n=t.sent,a=n.data,t.abrupt("return",{data:a});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),Object(u.a)(e,[{key:"render",value:function(){return y(p.a,null,y(f.a,{className:"news rtl",style:{marginBottom:"40px"}},this.props.data.map(function(t,e){return y("div",{className:"shadow-lg bg-white rounded mt-4 mb-4",key:e},y(b.a,null,y(g.a,{sm:"12",md:"12",lg:"3",className:"d-flex news-image justify-content-end justify-content-md-center p-md-0"},y("img",{src:t.image,className:"img-thumbnail shadow mr-4 rounded w-100"})),y(g.a,{className:"text-right",sm:"12",md:"12",lg:"9"},y("h5",{className:"p-3 rtl"}," ",t.title),y("p",{className:"text-secondary pl-4 pr-4 news-body"},t.body))))})))}}]),e}(d.a.Component);e.default=j},jFvI:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n("Kr8L")}])}},[["jFvI",1,0]]]);