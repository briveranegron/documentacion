(()=>{"use strict";var e,t,r,a,o,d={},n={};function b(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,b),r.loaded=!0,r.exports}b.m=d,b.c=n,e=[],b.O=(t,r,a,o)=>{if(!r){var d=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(b.O).every((e=>b.O[e](r[c])))?r.splice(c--,1):(n=!1,o<d&&(d=o));if(n){e.splice(i--,1);var f=a();void 0!==f&&(t=f)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);b.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,b.d(o,d),o},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"assets/js/"+({15:"6c7c2df2",53:"935f2afb",85:"1f391b9e",106:"2241b78a",225:"2bbdd953",262:"79d0b3d4",271:"0d1d22b9",281:"b636a016",308:"5b6db8d4",414:"393be207",422:"3964a60c",432:"4bd334cb",443:"d6c184d2",464:"6b391a63",514:"1be78505",643:"c62ce7aa",667:"514beec8",671:"0e384e19",781:"b4e0b5ea",782:"fbde2680",817:"14eb3368",856:"ac95d695",918:"17896441"}[e]||e)+"."+{15:"522dbae7",53:"cdb90278",85:"068e61f9",106:"68c4a420",225:"4aebc4db",248:"2b4fb4df",262:"fdf7832b",271:"e5330a1f",281:"b128c3ce",308:"f31f77e0",414:"71c6b10c",422:"319a38ca",432:"ff06386b",443:"e315ca77",464:"7cf34526",514:"4c644c24",643:"55d4ed1f",667:"bb8ee1b4",671:"997854da",781:"b7800938",782:"53de6723",812:"5629ce44",817:"dd144f58",856:"773144bb",918:"cbde1be1"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="fastura:",b.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var f=document.getElementsByTagName("script"),i=0;i<f.length;i++){var u=f[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,b.nc&&n.setAttribute("nonce",b.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/documentacion/",b.gca=function(e){return e={17896441:"918","6c7c2df2":"15","935f2afb":"53","1f391b9e":"85","2241b78a":"106","2bbdd953":"225","79d0b3d4":"262","0d1d22b9":"271",b636a016:"281","5b6db8d4":"308","393be207":"414","3964a60c":"422","4bd334cb":"432",d6c184d2:"443","6b391a63":"464","1be78505":"514",c62ce7aa:"643","514beec8":"667","0e384e19":"671",b4e0b5ea:"781",fbde2680:"782","14eb3368":"817",ac95d695:"856"}[e]||e,b.p+b.u(e)},(()=>{var e={303:0,532:0};b.f.j=(t,r)=>{var a=b.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=b.p+b.u(t),n=new Error;b.l(d,(r=>{if(b.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",n.name="ChunkLoadError",n.type=o,n.request=d,a[1](n)}}),"chunk-"+t,t)}},b.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],n=r[1],c=r[2],f=0;if(d.some((t=>0!==e[t]))){for(a in n)b.o(n,a)&&(b.m[a]=n[a]);if(c)var i=c(b)}for(t&&t(r);f<d.length;f++)o=d[f],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return b.O(i)},r=self.webpackChunkfastura=self.webpackChunkfastura||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();