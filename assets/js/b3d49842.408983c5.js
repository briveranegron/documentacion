"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[193],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(g,s(s({ref:a},c),{},{components:t})):n.createElement(g,s({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17522:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const o={},s="Generar gu\xedas de remisi\xf3n",l={unversionedId:"Modulo-Comprobantes-Avanzados/Generar-gu\xedas-de-remision",id:"Modulo-Comprobantes-Avanzados/Generar-gu\xedas-de-remision",title:"Generar gu\xedas de remisi\xf3n",description:"IMPORTANTE: Por disposici\xf3n de SUNAT con resp\xe9cto a las gu\xedas de remisi\xf3n, es necesario agregar tokens de conexi\xf3n adicionales, tenemos una guia preparada en este art\xedculo.",source:"@site/docs/Modulo-Comprobantes-Avanzados/Generar-gu\xedas-de-remision.md",sourceDirName:"Modulo-Comprobantes-Avanzados",slug:"/Modulo-Comprobantes-Avanzados/Generar-gu\xedas-de-remision",permalink:"/documentacion/Modulo-Comprobantes-Avanzados/Generar-gu\xedas-de-remision",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Direcciones de partida",permalink:"/documentacion/Modulo-Comprobantes-Avanzados/Direcciones-de-partida"},next:{title:"Gu\xedas de Transportistas",permalink:"/documentacion/Modulo-Comprobantes-Avanzados/Gu\xedas-de-Transportistas"}},i={},d=[{value:"Crear gu\xeda de remisi\xf3n: Bot\xf3n nuevo",id:"crear-gu\xeda-de-remisi\xf3n-bot\xf3n-nuevo",level:2},{value:"Datos modo de traslado: En caso sea  transporte privado",id:"datos-modo-de-traslado-en-caso-sea--transporte-privado",level:2},{value:"Datos modo de traslado: En caso sea  transporte p\xfablico",id:"datos-modo-de-traslado-en-caso-sea--transporte-p\xfablico",level:2},{value:"Agregar producto",id:"agregar-producto",level:2},{value:"Crear gu\xeda de remisi\xf3n a partir de un comprobante",id:"crear-gu\xeda-de-remisi\xf3n-a-partir-de-un-comprobante",level:2}],c={toc:d},p="wrapper";function u(e){let{components:a,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generar-gu\xedas-de-remisi\xf3n"},"Generar gu\xedas de remisi\xf3n"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANTE:")," Por disposici\xf3n de SUNAT con resp\xe9cto a las gu\xedas de remisi\xf3n, es necesario agregar tokens de conexi\xf3n adicionales, tenemos una guia preparada en este ","[art\xedculo]","(#Configuraci\xf3n previa - Gu\xeda de remisi\xf3n)."),(0,r.kt)("p",null,"En este art\xedculo te ense\xf1aremos a como generar tus gu\xedas de remisi\xf3n. Sigue estos pasos para realizarlo:"),(0,r.kt)("h2",{id:"crear-gu\xeda-de-remisi\xf3n-bot\xf3n-nuevo"},"Crear gu\xeda de remisi\xf3n: Bot\xf3n nuevo"),(0,r.kt)("p",null,"Ingresa al m\xf3dulo de ",(0,r.kt)("strong",{parentName:"p"},"Comprobantes avanzados")," en la subcategor\xeda ",(0,r.kt)("strong",{parentName:"p"},"Gu\xedas de remisi\xf3n")," y selecciona ",(0,r.kt)("strong",{parentName:"p"},"G.R Remitente"),". En la parte superior derecha selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Nuevo"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(4615).Z,width:"1896",height:"890"})),(0,r.kt)("p",null,"Tendr\xe1 que rellenar los siguientes campos necesarios:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(88265).Z,width:"1522",height:"747"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Establecimiento: Selecciona el establecimiento."),(0,r.kt)("li",{parentName:"ul"},"Serie: Selecciona la serie."),(0,r.kt)("li",{parentName:"ul"},"Fecha de emisi\xf3n: Ingresa la fecha de emisi\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Fecha de traslado: Ingresa la fecha de traslado."),(0,r.kt)("li",{parentName:"ul"},"Cliente: Selecciona el cliente, si no est\xe1 creado, podr\xe1 realizarlo paso a paso en este ","[art\xedculo]","(#Clientes : Creaci\xf3n Individual) art\xedculo, tambi\xe9n puede crear un nuevo cliente seleccionando el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"+Nuevo"),"."),(0,r.kt)("li",{parentName:"ul"},"Modo de traslado: Selecciona si el modo es transporte privado o p\xfablico.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANTE:"),"\n",(0,r.kt)("em",{parentName:"p"},"- El transporte privado es cuando cuenta con una movilidad para el traslado, si usted va a realizar el env\xedo por agencia selecciona transporte p\xfablico.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Motivo de traslado:")," Selecciona el motivo que m\xe1s se acomode a sus requerimientos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unidad de medida:")," Selecciona la unidad de medida que m\xe1s se acomode a sus requerimientos."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Peso total:")," Ingresa el peso total del producto."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"N\xfamero de paquetes:")," Ingresa el n\xfamero de paquetes que va a trasladar.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datos de env\xedo :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Punto de partida:")," Selecciona el punto de partida correspondiente, tambi\xe9n puede crear un nuevo punto de partida seleccionando el bot\xf3n +Nuevo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Punto de llegada:")," Selecciona el punto de llegada, tambi\xe9n puede crear un nuevo punto de llegada seleccionando el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"+Nuevo"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANTE:"),"\n",(0,r.kt)("em",{parentName:"p"},"- Si el punto de llegada no carga una vez seleccionado el cliente, selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"em"},"+Nuevo")," y sin necesidad de llenar alg\xfan dato seguido selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"em"},"Buscar")," y una vez cargado los datos selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"em"},"Guardar"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(76409).Z,width:"934",height:"284"})),(0,r.kt)("h2",{id:"datos-modo-de-traslado-en-caso-sea--transporte-privado"},"Datos modo de traslado: En caso sea  transporte privado"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Datos del conductor:")," Selecciona el conductor, tambi\xe9n puede crear un nuevo conductor seleccionando el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"+Nuevo"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Datos del veh\xedculo:")," Selecciona el n\xfamero de placa del veh\xedculo que realizar\xe1 el traslado, tambi\xe9n puede crear un nuevo veh\xedculo seleccionando el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"+Nuevo"),".")),(0,r.kt)("h2",{id:"datos-modo-de-traslado-en-caso-sea--transporte-p\xfablico"},"Datos modo de traslado: En caso sea  transporte p\xfablico"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datos del transportista: Selecciona el transportista, tambi\xe9n puede crear un nuevo transportista seleccionando el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"+Nuevo"),".")),(0,r.kt)("admonition",{title:"IMPORTANTE",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANTE:")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Las unidades de medida seg\xfan SUNAT, ahora son solo dos: *",(0,r.kt)("em",{parentName:"li"},"KGM, TNE.")),(0,r.kt)("li",{parentName:"ul"},"El sistema agarra por defecto la direcci\xf3n del cliente seleccionado, si desea poner otra direcci\xf3n puede agregarla desde el m\xf3dulo clientes agregando un nuevo campo de direcci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Para registrar la empresa de transportistas es obligatorio el MTC, puede solicitarlo a este link:\n",(0,r.kt)("a",{parentName:"li",href:"https://www.mtc.gob.pe/tramitesenlinea/tweb_tLinea/tw_consultadgtt/Frm_rep_intra_mercancia.aspx."},"https://www.mtc.gob.pe/tramitesenlinea/tweb_tLinea/tw_consultadgtt/Frm_rep_intra_mercancia.aspx."),"*"),(0,r.kt)("li",{parentName:"ul"},"La placa del veh\xedculo no puede contener guiones ni min\xfasculas.*"))),(0,r.kt)("h2",{id:"agregar-producto"},"Agregar producto"),(0,r.kt)("p",null,"Para agregar el producto que va a trasladar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(26446).Z,width:"1513",height:"195"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Producto:")," Ingresa el nombre del producto en descripci\xf3n, selecciona, en caso desee crear un nuevo producto, selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"li"},"Nuevo")," y sigue los pasos en este ","[art\xedculo]","(#Productos: Creaci\xf3n B\xe1sica)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cantidad:")," Ingresa la cantidad del producto.")),(0,r.kt)("p",null,"Una vez completado los campos de producto, selecciona el bot\xf3n Agregar, selecciona el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Generar"),"."),(0,r.kt)("h2",{id:"crear-gu\xeda-de-remisi\xf3n-a-partir-de-un-comprobante"},"Crear gu\xeda de remisi\xf3n a partir de un comprobante"),(0,r.kt)("p",null,"En este caso usaremos una factura desde la lista de comprobantes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(12774).Z,width:"1883",height:"784"})),(0,r.kt)("p",null,"Selecciona los tres puntos de la parte derecha y seguido selecciona Gu\xeda. Nos redirigir\xe1 a Gu\xedas de remisi\xf3n."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(64187).Z,width:"1898",height:"948"})),(0,r.kt)("p",null,"Algunos campos se completar\xe1n con la informaci\xf3n de la factura."),(0,r.kt)("p",null,"Se rellenar\xe1 los campos faltantes de la misma manera ya explicada anteriormente."))}u.isMDXComponent=!0},4615:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/guiactualizada1-d99cb7dba64ed80972692b27be236480.jpg"},76409:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/guiactualizada4-07b93fb3a5b3ca0e18d94bbbff910e64.jpg"},88265:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/guiatransportista2-6b9181080adf8e10d0fafba1995abea7.jpg"},26446:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/remisin3 (1)-e7f5fdb6f8b6280ef6ac7386f03acea2.jpg"},12774:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/remisin4-f74f9a5a353afff713cc6b69db9eec96.jpg"},64187:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/remisin5-6bea21ea6185c91aef5432d7caf88bc4.jpg"}}]);