"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[6962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},i="Emitir comprobane con descuento global",c={unversionedId:"ventas/Emitir-comprobante-con-descuento",id:"ventas/Emitir-comprobante-con-descuento",title:"Emitir comprobane con descuento global",description:"Los descuentos globales son reducciones de precio aplicadas a un conjunto de productos o a una transacci\xf3n completa en lugar de art\xedculos individuales, utilizados en el comercio para incentivar compras o liquidar inventario.",source:"@site/docs/ventas/05-Emitir-comprobante-con-descuento.md",sourceDirName:"ventas",slug:"/ventas/Emitir-comprobante-con-descuento",permalink:"/documentacion/ventas/Emitir-comprobante-con-descuento",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Agente de detracci\xf3n",permalink:"/documentacion/ventas/Agente-de-detraccion"},next:{title:"Emitir comprobante de exportaci\xf3n",permalink:"/documentacion/ventas/Emitir-comprobante-exportacion"}},l={},s=[{value:"Configuraci\xf3n previa",id:"configuraci\xf3n-previa",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"emitir-comprobane-con-descuento-global"},"Emitir comprobane con descuento global"),(0,o.kt)("p",null,"Los descuentos globales son reducciones de precio aplicadas a un conjunto de productos o a una transacci\xf3n completa en lugar de art\xedculos individuales, utilizados en el comercio para incentivar compras o liquidar inventario."),(0,o.kt)("admonition",{title:"IMPORTANTE",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Es importante leer este ",(0,o.kt)("a",{parentName:"p",href:"https://fastura.github.io/documentacion/ventas/Emitir-comprobantes-Facturas-y-Boletas"},"art\xedculo")," antes de seguir los siguientes pasos.")),(0,o.kt)("p",null,"Una vez ingresado todos los productos, puede activar el descuento Global, puede agregar el descuento por monto o por porcentaje."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:n(29585).Z,width:"1349",height:"889"})),(0,o.kt)("p",null,"Cuando la casilla de selecci\xf3n esta activa, el descuento por monto estar\xe1 activado, y si esta desactivada el descuento por porcentaje se activa."),(0,o.kt)("h2",{id:"configuraci\xf3n-previa"},"Configuraci\xf3n previa"),(0,o.kt)("p",null,"Se puede editar el Tipo de descuento global:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Descuentos globales que afectan la base imponible del IGV/IVAP."),(0,o.kt)("li",{parentName:"ul"},"Descuentos globales que no afectan la base imponible del IGV/IVAP.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:n(49893).Z,width:"1899",height:"951"})),(0,o.kt)("admonition",{title:"SUGERENCIAS:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Si la venta tiene op. gravadas utilice el descuento que afecta a la base imponible del IGV/IVAP.\nSi la venta no tiene op. gravadas utilice el descuento que no afecta a la base imponible del IGV/IVAP.")))}d.isMDXComponent=!0},49893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/descuemtoglobal54-1772639afb338491e1f5336595e42d7c.jpg"},29585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/descuento-global4-4ca88dfb516dc79988e7873e62a1859b.jpg"}}]);