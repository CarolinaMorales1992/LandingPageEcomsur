(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),i=c(14),s=c.n(i),r=(c(20),c(3)),d=(c(21),c(15)),j=c(0);var b=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),b=s[0],u=s[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),O=l[0],h=l[1],m=Object(a.useState)(""),p=Object(r.a)(m,2),g=p[0],v=p[1],f=Object(a.useState)(""),x=Object(r.a)(f,2),S=x[0],y=x[1],B=Object(a.useState)(""),C=Object(r.a)(B,2),F=C[0],I=C[1],k=Object(a.useState)(""),w=Object(r.a)(k,2),E=w[0],L=w[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("form",{id:"form",children:[Object(j.jsx)("input",{type:"search",id:"inputSearch",placeholder:"Search..."}),Object(j.jsx)("button",{id:"search",onClick:function(e){e.preventDefault();var t=document.getElementById("inputSearch").value;Object(d.get)("https://restcountries.eu/rest/v2/name/"+t).then((function(e){n(e.data[0].capital),u(e.data[0].flag),h(e.data[0].name),v(e.data[0].region),y(e.data[0].borders.map((function(e){return e+", "}))),I(e.data[0].languages[0].name),L(e.data[0].currencies[0].name+" "+e.data[0].currencies[0].symbol)})),document.getElementById("img").style.display="inline"},children:"Search"})]}),Object(j.jsxs)("div",{id:"data",children:[Object(j.jsxs)("div",{children:["Capital: ",c]}),Object(j.jsxs)("div",{children:["Bandera: ",Object(j.jsx)("img",{id:"img",width:"30",height:"15",src:b})]}),Object(j.jsxs)("div",{children:["Nombre: ",O]}),Object(j.jsxs)("div",{children:["Regi\xf3n: ",g]}),Object(j.jsxs)("div",{children:["Pa\xedses lim\xedtrofes: ",S]}),Object(j.jsxs)("div",{children:["Lengua: ",F]}),Object(j.jsxs)("div",{children:["Nombre y s\xedmbolo de moneda: ",E]})]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()}},[[42,1,2]]]);
//# sourceMappingURL=main.d682c670.chunk.js.map