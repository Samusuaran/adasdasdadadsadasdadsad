"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6284],{6284:(si,f,c)=>{c.r(f),c.d(f,{CondicionCiudadesFavPageModule:()=>ai});var p=c(177),C=c(9417),l=c(9364),_=c(5260),m=c(467),i=c(4438),b=c(7762),F=c(3804),x=c(4820),P=c(7468),h=c(5519),w=c(8093),M=c(2490),y=c(3797),j=c(1247),$=c(8152),E=c(5609);const T=n=>({"background-image":n,"background-size":"cover","background-position":"center"}),k=()=>({"background-color":"#04317A"});function G(n,a){if(1&n&&(i.j41(0,"strong"),i.EFF(1),i.k0s()),2&n){const t=i.XpG(2).$implicit;i.R7$(),i.SpI("Salida ",null==t.infoSol?null:t.infoSol.salida,"")}}function I(n,a){if(1&n&&(i.j41(0,"strong"),i.EFF(1),i.k0s()),2&n){const t=i.XpG(2).$implicit;i.R7$(),i.SpI("Puesta ",null==t.infoSol?null:t.infoSol.puesta,"")}}function R(n,a){if(1&n&&(i.j41(0,"h2",30),i.EFF(1),i.j41(2,"sup",31),i.EFF(3,"\xb0C"),i.k0s()()),2&n){const t=i.XpG(3).$implicit,o=i.XpG(2);i.R7$(),i.SpI(" ",o.redondearTemperaturaConParametro(t.condicionActual.temperatura),"")}}function D(n,a){if(1&n&&(i.j41(0,"h2",30),i.EFF(1),i.j41(2,"sup",31),i.EFF(3,"\xb0F"),i.k0s()()),2&n){const t=i.XpG(3).$implicit,o=i.XpG(2);i.R7$(),i.SpI(" ",o.celsiusToFahrenheit(o.redondearTemperaturaConParametro(t.condicionActual.temperatura)),"")}}function L(n,a){if(1&n&&i.nrm(0,"img",32),2&n){const t=i.XpG(3).$implicit;i.Y8G("src","assets/iconosclima/"+t.condicionActual.condicionIcono,i.B4B)}}function S(n,a){1&n&&i.nrm(0,"img",33),2&n&&i.Y8G("src","assets/iconosclima/vacio.png",i.B4B)}function O(n,a){if(1&n&&(i.j41(0,"ion-col")(1,"p",27)(2,"strong"),i.EFF(3),i.k0s()()()),2&n){const t=i.XpG(3).$implicit;i.R7$(3),i.SpI("UV ",t.indiceUV.calificador,"")}}function A(n,a){1&n&&(i.j41(0,"ion-col")(1,"p",27)(2,"strong"),i.EFF(3,"No disp"),i.k0s()()())}function N(n,a){1&n&&(i.j41(0,"p",27)(1,"strong"),i.EFF(2," No disp"),i.k0s()())}function Y(n,a){if(1&n&&(i.j41(0,"ion-col")(1,"p",27)(2,"strong"),i.EFF(3),i.k0s()()()),2&n){const t=i.XpG(5);i.R7$(3),i.Lme("",t.vientoCondicion," ",t.vientoFuerza,"Km/h")}}function X(n,a){if(1&n&&(i.j41(0,"ion-col")(1,"p",27)(2,"strong"),i.EFF(3),i.k0s()()()),2&n){const t=i.XpG(5);i.R7$(3),i.Lme("",t.vientoCondicion," ",t.kmhtoMph(t.vientoFuerza),"Mph")}}function B(n,a){if(1&n&&(i.j41(0,"ion-card-subtitle")(1,"strong"),i.EFF(2),i.k0s()()),2&n){const t=i.XpG().$implicit;i.R7$(2),i.E5c("",t.dia," \u2022 Min: ",t.temperaturaMinima,"\xb0C\u2022 Max: ",t.temperaturaMaxima,"\xb0C")}}function U(n,a){if(1&n&&(i.j41(0,"ion-card-subtitle")(1,"strong"),i.EFF(2),i.k0s()()),2&n){const t=i.XpG().$implicit,o=i.XpG(6);i.R7$(2),i.E5c("",t.dia," \u2022 Min: ",o.celsiusToFahrenheit(t.temperaturaMinima),"\xb0F \u2022 Max: ",o.celsiusToFahrenheit(t.temperaturaMaxima),"\xb0F")}}function V(n,a){if(1&n&&(i.j41(0,"ion-card-subtitle")(1,"strong"),i.EFF(2),i.k0s()()),2&n){const t=i.XpG().$implicit;i.R7$(2),i.Lme(" ",t.dia," \u2022 Max: ",t.temperaturaMaxima,"\xb0C")}}function z(n,a){if(1&n&&(i.j41(0,"ion-card-subtitle")(1,"strong"),i.EFF(2),i.k0s()()),2&n){const t=i.XpG().$implicit,o=i.XpG(6);i.R7$(2),i.Lme(" ",t.dia," \u2022 Max: ",o.celsiusToFahrenheit(t.temperaturaMaxima),"\xb0F")}}function J(n,a){if(1&n&&i.nrm(0,"img",40),2&n){const t=i.XpG().$implicit;i.Y8G("src","assets/iconosclima/"+t.icono,i.B4B)}}function H(n,a){1&n&&i.nrm(0,"img",40),2&n&&i.Y8G("src","assets/iconosclima/vacio.png",i.B4B)}function Q(n,a){if(1&n&&(i.j41(0,"ion-col"),i.DNE(1,J,1,1,"img",39)(2,H,1,1,"img",39),i.k0s()),2&n){const t=a.$implicit;i.R7$(),i.Y8G("ngIf",t.icono),i.R7$(),i.Y8G("ngIf",!t.icono)}}function W(n,a){if(1&n&&(i.j41(0,"ion-col")(1,"p")(2,"strong"),i.EFF(3),i.k0s()()()),2&n){const t=a.$implicit;i.R7$(3),i.JRh(t)}}function K(n,a){if(1&n&&(i.j41(0,"ion-card",36)(1,"ion-card-header",37),i.DNE(2,B,3,3,"ion-card-subtitle",18)(3,U,3,3,"ion-card-subtitle",18)(4,V,3,2,"ion-card-subtitle",18)(5,z,3,2,"ion-card-subtitle",18),i.k0s(),i.j41(6,"ion-card-content",38)(7,"ion-row",14),i.DNE(8,Q,3,2,"ion-col",9),i.k0s(),i.j41(9,"ion-row",14),i.DNE(10,W,4,1,"ion-col",9),i.k0s()()()),2&n){const t=a.$implicit,o=i.XpG(6);i.R7$(2),i.Y8G("ngIf",t.temperaturaMinima&&!o.tipoTemp),i.R7$(),i.Y8G("ngIf",t.temperaturaMinima&&o.tipoTemp),i.R7$(),i.Y8G("ngIf",!t.temperaturaMinima&&!o.tipoTemp),i.R7$(),i.Y8G("ngIf",!t.temperaturaMinima&&o.tipoTemp),i.R7$(3),i.Y8G("ngForOf",t.pronosticodetalle),i.R7$(2),i.Y8G("ngForOf",o.horasDias)}}function Z(n,a){if(1&n&&(i.j41(0,"div",34)(1,"h1",14)(2,"strong"),i.EFF(3,"Pron\xf3sticos"),i.k0s()(),i.j41(4,"p",14)(5,"strong"),i.EFF(6),i.k0s()(),i.DNE(7,K,11,6,"ion-card",35),i.k0s()),2&n){const t=i.XpG(3).$implicit;i.R7$(6),i.SpI(" ",t.pronostico[0].timestamp," "),i.R7$(),i.Y8G("ngForOf",t.pronostico)}}function q(n,a){if(1&n&&(i.j41(0,"ion-card-content")(1,"ion-grid")(2,"ion-row"),i.nrm(3,"ion-col"),i.j41(4,"ion-col"),i.DNE(5,R,4,1,"h2",19)(6,D,4,1,"h2",19),i.k0s(),i.nrm(7,"ion-col"),i.k0s()(),i.j41(8,"ion-grid",20)(9,"ion-row",21)(10,"ion-col"),i.nrm(11,"img",22),i.k0s(),i.j41(12,"ion-col"),i.DNE(13,L,1,1,"img",23)(14,S,1,1,"img",24),i.k0s(),i.j41(15,"ion-col"),i.nrm(16,"img",25),i.k0s(),i.j41(17,"ion-col"),i.nrm(18,"img",26),i.k0s()()(),i.j41(19,"ion-grid")(20,"ion-row"),i.DNE(21,O,4,1,"ion-col",18)(22,A,4,0,"ion-col",18),i.j41(23,"ion-col")(24,"p",27)(25,"strong"),i.EFF(26),i.k0s()(),i.DNE(27,N,3,0,"p",28),i.k0s(),i.DNE(28,Y,4,2,"ion-col",18)(29,X,4,2,"ion-col",18),i.j41(30,"ion-col")(31,"p",27)(32,"strong"),i.EFF(33),i.k0s()()()()(),i.DNE(34,Z,8,2,"div",29),i.k0s()),2&n){const t=i.XpG(2).$implicit,o=i.XpG(2);i.R7$(5),i.Y8G("ngIf",!o.tipoTemp),i.R7$(),i.Y8G("ngIf",o.tipoTemp),i.R7$(5),i.Y8G("src",null!=t.indiceUV&&t.indiceUV.indice?"assets/iconosuv/"+t.indiceUV.indice+".png":"assets/iconosclima/vacio.png",i.B4B),i.R7$(2),i.Y8G("ngIf",t.condicionActual.condicionIcono),i.R7$(),i.Y8G("ngIf",!t.condicionActual.condicionIcono),i.R7$(2),i.Y8G("src",o.iconoViento,i.B4B),i.R7$(5),i.Y8G("ngIf",null==t?null:t.indiceUV),i.R7$(),i.Y8G("ngIf",!(null!=t&&t.indiceUV)),i.R7$(4),i.SpI(" ",t.condicionActual.condicionTexto," "),i.R7$(),i.Y8G("ngIf",!t.condicionActual.condicionTexto),i.R7$(),i.Y8G("ngIf",!o.tipoVel),i.R7$(),i.Y8G("ngIf",o.tipoVel),i.R7$(4),i.SpI("Humedad ",t.condicionActual.humedad," %"),i.R7$(),i.Y8G("ngIf",o.expanded)}}function ii(n,a){if(1&n&&(i.j41(0,"div",11)(1,"ion-card",12)(2,"ion-card-header",13)(3,"h1",14)(4,"strong"),i.EFF(5),i.k0s()(),i.j41(6,"div",15)(7,"div",16),i.nrm(8,"img",17)(9,"br"),i.DNE(10,G,2,1,"strong",18),i.k0s(),i.j41(11,"div",14),i.nrm(12,"img",17)(13,"br"),i.DNE(14,I,2,1,"strong",18),i.k0s()(),i.j41(15,"h2",14),i.EFF(16),i.k0s()(),i.DNE(17,q,35,14,"ion-card-content",18),i.k0s()()),2&n){const t=i.XpG().$implicit,o=i.XpG(2);i.Y8G("ngStyle",t.condicionActual.condicionTexto?i.eq3(8,T,"url(assets/fondocondicion/"+o.condicionTextoMinusculas(t.condicionActual.condicionTexto)+".jpg)"):i.lJ4(10,k)),i.R7$(5),i.JRh(t.nombre),i.R7$(3),i.Y8G("src","assets/infosol/salida.png",i.B4B),i.R7$(2),i.Y8G("ngIf",null==t.infoSol?null:t.infoSol.salida),i.R7$(2),i.Y8G("src","assets/infosol/puesta.png",i.B4B),i.R7$(2),i.Y8G("ngIf",null==t.infoSol?null:t.infoSol.puesta),i.R7$(2),i.SpI(" ",t.condicionActual.timestamp," "),i.R7$(),i.Y8G("ngIf",o.objetoCondicion)}}function oi(n,a){if(1&n&&(i.j41(0,"swiper-slide"),i.DNE(1,ii,18,11,"div",10),i.k0s()),2&n){const t=a.$implicit;i.R7$(),i.Y8G("ngIf",t)}}function ni(n,a){if(1&n&&(i.j41(0,"swiper-container",8),i.DNE(1,oi,2,1,"swiper-slide",9),i.k0s()),2&n){const t=i.XpG();i.R7$(),i.Y8G("ngForOf",t.ciudadesAgregadas)}}(0,F.kz)();const ti=[{path:"",component:(()=>{var n;class a{constructor(o,e,s,r,g,d,u){this.notificacion=o,this.cookie=e,this.condicion=s,this.pronosticoLocalidad=r,this.router=g,this.coleccionCiudades=d,this.settings=u,this.codCiudadesAgregadas=[],this.ciudadesAgregadas=[],this.distanciaMinima=1/0,this.activatedRoute=(0,i.WQX)(_.nX),this.currentPage=1,this.cidudadesPerPage=10,this.expanded=!0,this.horasDias=["00:00","06:00","12:00","18:00"],this.isLoading=!0,this.partesEstables=[],this.obtenerUbicacionActual(),this.infiniteScrollCiudades()}ngOnInit(){this.folder=this.activatedRoute.snapshot.paramMap.get("id"),this.obtenerNotificaciones(),this.moverImagen(),this.obtenerConfigs(),this.obtenerDatosActualesCiudadesFav(),this.dataUpdateSubscription=(0,x.Y)(6e4).subscribe(()=>{this.obtenerDatosActualesCiudadesFav()})}ngOnDestroy(){this.codCiudadesAgregadasSubscription&&this.codCiudadesAgregadasSubscription.unsubscribe(),this.ciudadesAgregadasSubscription&&this.ciudadesAgregadasSubscription.unsubscribe(),this.dataUpdateSubscription&&this.dataUpdateSubscription.unsubscribe()}moverImagen(){const o=document.querySelector(".imagen-campana");setInterval(()=>{null==o||o.classList.add("animacion-cascabel"),setTimeout(()=>{null==o||o.classList.remove("animacion-cascabel")},1e3)},7e3)}obtenerNotificaciones(){let o=0;this.notificacion.obtenerNotificaciones().subscribe(e=>{e.forEach(s=>{const g=s.texto.split("<br>").filter(u=>""!=u);this.partesEstables=g.map(u=>this.decodeHTMLEntities(u));const d={};this.partesEstables.forEach((u,v)=>{d[v+1]=u}),e[o].partes=d,o+=1}),this.notificacionFinal=e,console.log("Notificacion Final",this.notificacionFinal)})}decodeHTMLEntities(o){const e={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'","&Aacute;":"\xc1","&aacute;":"\xe1","&Eacute;":"\xc9","&eacute;":"\xe9","&Iacute;":"\xcd","&iacute;":"\xed","&Oacute;":"\xd3","&oacute;":"\xf3","&Uacute;":"\xda","&uacute;":"\xfa","&Ntilde;":"\xd1","&ntilde;":"\xf1"};return o.replace(/&[^\s;]+;/g,s=>e[s]||s)}obtenerDatosActualesCiudadesFav(){this.isLoading=!0,this.codCiudadesAgregadasSubscription=this.coleccionCiudades.codCiudadesAgregadas$.subscribe({next:o=>{if(0===o.length)this.ciudadesAgregadas=[],console.log("No hay ciudades agregadas para actualizar."),this.isLoading=!1;else{const e=o.map(s=>this.pronosticoLocalidad.obtenerLocalidadCompleta(s));(0,P.p)(e).subscribe({next:s=>{console.log("resultados antes de filtrar",s),s=s.filter(r=>r.data&&r.data.length>0),console.log("resultados",s),JSON.stringify(s.map(r=>r.data[0]))!==JSON.stringify(this.ciudadesAgregadas)?(this.ciudadesAgregadas=s.map(r=>r.data[0]),console.log("ciudades agregadas",this.ciudadesAgregadas),localStorage.setItem("ciudadesAgregadas",JSON.stringify(this.ciudadesAgregadas))):console.log("No hay cambios en las ciudades agregadas.")},error:s=>{console.error("Error al obtener datos de ciudades agregadas",s),this.isLoading=!1},complete:()=>{this.isLoading=!1}})}},error:o=>{console.error("Error al suscribirse a las ciudades agregadas",o),this.isLoading=!1}})}obtenerConfigs(){var o=this;return(0,m.A)(function*(){let e=yield h.w.get({key:"tipoTemperatura"});(!e||""===e.value)&&(yield h.w.set({key:"tipoTemperatura",value:"true"}),e={value:"true"}),o.settings.setTemperatura("true"===e.value);let r=yield h.w.get({key:"tipoVelocidad"});(!r||""===r.value)&&(yield h.w.set({key:"tipoVelocidad",value:"true"}),r={value:"true"}),o.settings.setVelocidadEn("true"===r.value),o.settings.tipoTemperatura$.subscribe(d=>{console.log("tipo de temperatura",d),o.tipoTemp=d}),o.settings.tipoVelocidad$.subscribe(d=>{console.log("tipo de Velocidad",d),o.tipoVel=d})})()}celsiusToFahrenheit(o){return Math.round(9*o/5+32)}kmhtoMph(o){return Math.round(o/1.609344)}obtenerUbicacionActual(){var o=this;return(0,m.A)(function*(){try{const e={enableHighAccuracy:!0,timeout:1e4},s=yield b.L.getCurrentPosition(e);o.coordenadas={latitude:s.coords.latitude,longitude:s.coords.longitude},o.obtenerLocalicacionMasCercana(),console.log("Ubicaci\xf3n obtenida aqui:",o.coordenadas)}catch(e){console.error("Error al obtener la ubicaci\xf3n:",e),o.coordenadas={latitude:-33.464842,longitude:-70.762205},o.obtenerLocalicacionMasCercana(),console.log("Ubicaci\xf3n por defecto utilizada:",o.coordenadas)}})()}solicitarCiudadManualmente(){var o=this;return(0,m.A)(function*(){o.condicion.getDataLocalidad().subscribe(s=>{console.log("Ciudades",s),o.ciudades2=s});let e=prompt("Por favor, ingresa tu ciudad:");e?(console.log("Ciudad ingresada:",e),o.obtenerDatosPronosticoConParametro(e)):o.router.navigate(["/ciudades"])})()}toRadians(o){return o*(Math.PI/180)}haversine(o,e,s,r){const d=this.toRadians(s-o),u=this.toRadians(r-e),v=Math.sin(d/2)*Math.sin(d/2)+Math.cos(this.toRadians(o))*Math.cos(this.toRadians(s))*Math.sin(u/2)*Math.sin(u/2);return 2*Math.atan2(Math.sqrt(v),Math.sqrt(1-v))*6371}obtenerLocalicacionMasCercana(){this.condicion.getDataLocalidad().subscribe(o=>{this.ciudades=o,console.log("ciudades",this.ciudades),o.forEach(e=>{const s=this.haversine(-33.464842,-70.762205,e.lat,e.lng);s<this.distanciaMinima&&(this.distanciaMinima=s,this.puntoMasCercano=e)}),this.codigoLocalidad=this.puntoMasCercano.codigo,this.obtenerDatosPronostico()})}obtenerDatosPronostico(){this.pronosticoLocalidad.obtenerLocalidadCompleta(this.codigoLocalidad).subscribe(o=>{if(!o||!o.data||0===o.data.length)return console.error("No se encontraron datos para la localidad"),void(this.isLoading=!1);console.log(o.data),this.datosPronosLocalidad=o.data[0],this.pronosticos=this.datosPronosLocalidad.pronostico,this.nombreLocalidad=this.datosPronosLocalidad.nombre,this.infoSol=this.datosPronosLocalidad.infoSol,console.log("info sol",this.infoSol),console.log("pronostico localidad",this.pronosticos),console.log("nombre ciudad",this.nombreLocalidad),this.isLoading=!1,this.datosPronosLocalidad.condicionActual?(this.objetoCondicion=this.datosPronosLocalidad.condicionActual,this.fechaActualizado=this.objetoCondicion.timestamp,this.vientoFuerza=parseInt(this.objetoCondicion.vientoFuerza),this.vientoDireccion=parseInt(this.objetoCondicion.vientoDireccion),this.iconoViento=this.obtenerIconoDireccionViento(),this.condicionTexto=this.objetoCondicion.condicionTexto.toLowerCase().replace(/\s/g,"")):(this.objetoCondicion=null,this.fechaActualizado="",this.vientoFuerza=0,this.vientoDireccion=0,this.iconoViento="default_wind_icon.png",this.condicionTexto="No disponible")},o=>{this.isLoading=!1,console.error("Error al obtener datos del pron\xf3stico",o)})}obtenerDatosPronosticoConParametro(o){this.pronosticoLocalidad.obtenerLocalidadCompleta(o).subscribe(e=>{this.datosPronosLocalidad=e.data[0],console.log("Estos son los datos:",this.datosPronosLocalidad),e.data!==this.datosPronosLocalidad?(this.isLoading=!1,this.datosPronosLocalidad=e.data[0],this.pronosticos=this.datosPronosLocalidad.pronostico,this.nombreLocalidad=this.datosPronosLocalidad.nombre,this.objetoCondicion=this.datosPronosLocalidad.condicionActual,this.fechaActualizado=this.objetoCondicion.timestamp,this.vientoFuerza=parseInt(this.objetoCondicion.vientoFuerza),this.vientoDireccion=parseInt(this.objetoCondicion.vientoDireccion),this.iconoViento=this.obtenerIconoDireccionViento(),this.condicionTexto=this.objetoCondicion.condicionTexto.toLowerCase().replace(/\s/g,""),console.log("objeto condicion",this.objetoCondicion),console.log("condicion texto",this.condicionTexto),console.log("pronostico localidad",this.datosPronosLocalidad),console.log("datos",e),console.log("hay cambios")):(console.log("no hay cambios"),this.isLoading=!1),this.isLoading=!1},e=>{this.isLoading=!1,console.error("Error al obtener datos del pron\xf3stico",e)})}condicionTextoMinusculas(o){return o.toLowerCase().replace(/\s/g,"")}obtenerIconoDireccionViento(){return 0==this.vientoDireccion&&0==this.vientoFuerza?(this.vientoCondicion="calma","assets/iconosviento/calma.png"):this.vientoDireccion>348?(this.vientoCondicion="N","assets/iconosviento/n.png"):this.vientoDireccion>326?(this.vientoCondicion="NNO","assets/iconosviento/nno.png"):this.vientoDireccion>303?(this.vientoCondicion="NO","assets/iconosviento/no.png"):this.vientoDireccion>282?(this.vientoCondicion="ONO","assets/iconosviento/ono.png"):this.vientoDireccion>258?(this.vientoCondicion="O","assets/iconosviento/o.png"):this.vientoDireccion>236?(this.vientoCondicion="OSO","assets/iconosviento/oso.png"):this.vientoDireccion>213?(this.vientoCondicion="SO","assets/iconosviento/so.png"):this.vientoDireccion>191?(this.vientoCondicion="SSO","assets/iconosviento/sso.png"):this.vientoDireccion>168?(this.vientoCondicion="S","assets/iconosviento/s.png"):this.vientoDireccion>146?(this.vientoCondicion="SSE","assets/iconosviento/sse.png"):this.vientoDireccion>123?(this.vientoCondicion="SE","assets/iconosviento/se.png"):this.vientoDireccion>101?(this.vientoCondicion="ESE","assets/iconosviento/ese.png"):this.vientoDireccion>78?(this.vientoCondicion="E","assets/iconosviento/e.png"):this.vientoDireccion>56?(this.vientoCondicion="ENE","assets/iconosviento/ene.png"):this.vientoDireccion>33?(this.vientoCondicion="NE","assets/iconosviento/ne.png"):this.vientoDireccion>11?(this.vientoCondicion="NNE","assets/iconosviento/nne.png"):(this.vientoCondicion="N","assets/iconosviento/n.png")}infiniteScrollCiudades(o){this.condicion.getDataLocalidad().subscribe(e=>{this.ciudades=e,setTimeout(()=>{for(let s=0;s<this.cidudadesPerPage;s++)this.ciudades.length<e.length&&this.ciudades.push(e[this.ciudades.length]);o&&o.target.complete()},1e3),this.currentPage++})}seleccionarCiudad(o){this.codigoCiudad=o.codigo,this.router.navigate(["/ciudad",o.codigo])}redondearTemperatura(){return Math.floor(this.objetoCondicion.temperatura)}redondearTemperaturaConParametro(o){return Math.floor(o)}toggleAccordion(){this.expanded=!this.expanded}}return(n=a).\u0275fac=function(o){return new(o||n)(i.rXU(w.m),i.rXU(M.O),i.rXU(y.g),i.rXU(j.Q),i.rXU(_.Ix),i.rXU($.n),i.rXU(E.h))},n.\u0275cmp=i.VBU({type:n,selectors:[["app-condicion-ciudades-fav"]],decls:9,vars:1,consts:[[2,"display","flex","justify-content","space-between"],["slot","start"],["color","primary","menu","main-menu"],["slot","end","href","https://www.dgac.gob.cl/"],["id","logo","src","assets/icon/DGAC-logo.jpg","alt","logo",2,"height","40px","width","30px","margin-right","1vh"],["slot","end","href","https://archivos.meteochile.gob.cl/portaldmc/movil/movil_inicio.php"],["id","logo","src","assets/icon/DMC-logo.png","alt","logo",2,"height","40px","width","40px","margin-right","1vh"],["class","mySwiper","pagination","true","pagination-clickable","true","space-between","30","effect","fade","navigation","true",4,"ngIf"],["pagination","true","pagination-clickable","true","space-between","30","effect","fade","navigation","true",1,"mySwiper"],[4,"ngFor","ngForOf"],["style","overflow: auto;    background-size: cover;\n        background-position: center;\n        overflow: auto",3,"ngStyle",4,"ngIf"],[2,"overflow","auto","background-size","cover","background-position","center","overflow","auto",3,"ngStyle"],[2,"box-shadow","0px 2px 0px 1px rgb(143, 135, 135)","display","contents","color","white"],[2,"color","white","margin-top","5vh"],[2,"text-align","center"],[2,"display","flex","justify-content","center","align-items","center"],[2,"text-align","center","margin-right","20px"],[2,"height","50px",3,"src"],[4,"ngIf"],["style","\n                      font-size: 100px;\n                      font-weight: bold;\n                      display: block;\n                      margin: auto;\n                      text-align: center;\n                    ",4,"ngIf"],[1,"ion-text-center"],[2,"display","flex","align-items","center"],[2,"border-radius","50%","display","block","margin-left","auto","margin-right","auto","width","50px","height","50px",3,"src"],["alt","Clima","style","height: 8vh; width: 8vh",3,"src",4,"ngIf"],["alt","Clima","style","height: 8vh; width: 8vh; width: 50px;\n                height: 50px;",3,"src",4,"ngIf"],["alt","viento",2,"height","50px","width","50px",3,"src"],["src","assets/wet.png","alt","viento",2,"height","50px","width","50px"],[2,"text-align","center","justify-content","center"],["style","text-align: center; justify-content: center",4,"ngIf"],["class","accordion-content",4,"ngIf"],[2,"font-size","100px","font-weight","bold","display","block","margin","auto","text-align","center"],[2,"font-size","3rem","position","relative","top","-2rem"],["alt","Clima",2,"height","8vh","width","8vh",3,"src"],["alt","Clima",2,"height","8vh","width","8vh","width","50px","height","50px",3,"src"],[1,"accordion-content"],["style","position: relative",4,"ngFor","ngForOf"],[2,"position","relative"],[2,"text-align","center","display","contents"],[2,"display","contents"],["style","height: 50px; width: 50px",3,"src",4,"ngIf"],[2,"height","50px","width","50px",3,"src"]],template:function(o,e){1&o&&(i.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),i.nrm(2,"ion-menu-button",2),i.k0s(),i.j41(3,"a",3),i.nrm(4,"img",4),i.k0s(),i.j41(5,"a",5),i.nrm(6,"img",6),i.k0s()(),i.j41(7,"body"),i.DNE(8,ni,2,1,"swiper-container",7),i.k0s()),2&o&&(i.R7$(8),i.Y8G("ngIf",e.ciudadesAgregadas.length>0))},dependencies:[p.Sq,p.bT,p.B3,l.QW,l.b_,l.I9,l.ME,l.HW,l.hU,l.lO,l.MC,l.ln,l.ai],styles:['@charset "UTF-8";@font-face{font-family:Open Sans;src:url(OpenSans-Bold.c1fc02c2ea5dd4e9.ttf) format("truetype")}*[_ngcontent-%COMP%]{font-family:Open Sans}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;justify-content:center;align-items:center;left:0;right:0}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#container[_ngcontent-%COMP%]   div.uv[_ngcontent-%COMP%]{color:#0ff;height:50px;width:50px;border-radius:50%;justify-content:center;align-items:center;text-align:center}.scrollable-content[_ngcontent-%COMP%]{height:100vh;overflow-y:auto}ion-card[_ngcontent-%COMP%]{background:#ffffffa6}ion-toolbar[_ngcontent-%COMP%]{--background: rgba(255, 255, 255, .65)}.container[_ngcontent-%COMP%]{display:flex;justify-content:center}.rotar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_girar 5s infinite linear;transform-style:preserve-3d}@keyframes _ngcontent-%COMP%_girar{0%{transform:rotateY(0)}to{transform:rotateY(360deg)}}body[_ngcontent-%COMP%]{background-image:url(/assets/fondolista/isla.jpg);background-size:cover;background-position:center center;background-repeat:no-repeat;overflow:auto}div[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;background-position:center center}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:#d1d5db;opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #04317A;--color: white}.imagen-campana[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:1vh}.animacion-cascabel[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_cascabel .5s ease}@keyframes _ngcontent-%COMP%_cascabel{0%,to{transform:rotate(0)}25%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(5deg)}}']}),a})()}];let ei=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[_.iI.forChild(ti),_.iI]}),a})(),ai=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[p.MD,C.YN,l.bv,ei]}),a})()}}]);