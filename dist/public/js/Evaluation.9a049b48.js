(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Evaluation"],{"0418":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-img",{attrs:{src:i("166e"),position:"center",height:"250",width:"200"}})],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card-text",[e("h3",{staticClass:"display-1 grey--text text--darken-3"},[t._v("Universidad Nacional")]),e("h3",{staticClass:"headline grey--text text--darken-3"},[t._v(" Facultad de Ingeniería y Arquitectura Carrera Ingeniería en Sistemas Informáticos ")]),e("h3",{staticClass:"headline grey--text text--darken-3"},[t._v(" Control de Contenidistas ")])])],1),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-img",{attrs:{src:i("166e"),position:"center",height:"250",width:"200"}})],1)],1)],1)},o=[],n={name:"header-componente"},s=n,l=i("2877"),c=Object(l["a"])(s,e,o,!1,null,null,null);a["a"]=c.exports},"44bf":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"evaluation"},[i("v-container",[i("v-card",{attrs:{shaped:""}},[i("v-card-text",[i("HeaderComponent"),i("v-divider"),i("FormEvaluation")],1)],1)],1)],1)},o=[],n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"form-general"},[i("v-form",{on:{submit:function(a){return a.preventDefault(),t.addEvaluation()}}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("h4",{staticClass:"title"},[t._v(" Experiencia en docencia universitario ")]),i("v-text-field",{attrs:{color:"secondary",label:"Escriba sus años",required:""},model:{value:t.evaluation.items.numAnios,callback:function(a){t.$set(t.evaluation.items,"numAnios",t._n(a))},expression:"evaluation.items.numAnios"}})],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Disponibilidad de horario, incluyendo fines de semana ")]),i("v-radio-group",{model:{value:t.evaluation.items.disponibilidad,callback:function(a){t.$set(t.evaluation.items,"disponibilidad",a)},expression:"evaluation.items.disponibilidad"}},[i("v-radio",{attrs:{label:"SI",value:"5",color:"secondary"}}),i("v-radio",{attrs:{label:"NO",value:"0",color:"secondary"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Disposición en entrevista ")]),i("v-radio-group",{model:{value:t.evaluation.items.disposicion,callback:function(a){t.$set(t.evaluation.items,"disposicion",a)},expression:"evaluation.items.disposicion"}},[i("v-radio",{attrs:{label:"SI",value:"5",color:"secondary"}}),i("v-radio",{attrs:{label:"NO",value:"0",color:"secondary"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v("Indicaciones: Seleccione del 1 al 5, siendo el 1 el dominio mínimo y 5 el dominio máximo")])]),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Amplios conocimientos sobre la asignatura a virtualizar ")]),i("v-radio-group",{model:{value:t.evaluation.items.conocimiento,callback:function(a){t.$set(t.evaluation.items,"conocimiento",a)},expression:"evaluation.items.conocimiento"}},t._l(t.optConocimientos,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Manejo intermedio de Microsoft PowerPoint ")]),i("v-radio-group",{model:{value:t.evaluation.items.powerpoint,callback:function(a){t.$set(t.evaluation.items,"powerpoint",a)},expression:"evaluation.items.powerpoint"}},t._l(t.optPowerpoint,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Conocimientos de educación a distancia ")]),i("v-radio-group",{model:{value:t.evaluation.items.eduDistancia,callback:function(a){t.$set(t.evaluation.items,"eduDistancia",a)},expression:"evaluation.items.eduDistancia"}},t._l(t.opteduDistancia,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Manejo de plataformas LMS (Learning Management System) ")]),i("v-radio-group",{model:{value:t.evaluation.items.LMS,callback:function(a){t.$set(t.evaluation.items,"LMS",a)},expression:"evaluation.items.LMS"}},t._l(t.optLMS,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Responsabilidad notoria ")]),i("v-radio-group",{model:{value:t.evaluation.items.responsabilidad,callback:function(a){t.$set(t.evaluation.items,"responsabilidad",a)},expression:"evaluation.items.responsabilidad"}},t._l(t.optResponsabilidad,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Excelente comunicación oral y escrita ")]),i("v-radio-group",{model:{value:t.evaluation.items.comunicacion,callback:function(a){t.$set(t.evaluation.items,"comunicacion",a)},expression:"evaluation.items.comunicacion"}},t._l(t.optComunicacion,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Interes por la investigacion tecnica ")]),i("v-radio-group",{model:{value:t.evaluation.items.investigacion,callback:function(a){t.$set(t.evaluation.items,"investigacion",a)},expression:"evaluation.items.investigacion"}},t._l(t.optInvestigacion,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[t._v(" Capacidad para interactuar con profesionales y captar instrucciones ")]),i("v-radio-group",{model:{value:t.evaluation.items.interactuar,callback:function(a){t.$set(t.evaluation.items,"interactuar",a)},expression:"evaluation.items.interactuar"}},t._l(t.optInteractuar,(function(t,a){return i("v-radio",{key:a,attrs:{label:a+1,value:t,color:"secondary"}})})),1)],1),i("v-col",[i("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"error"}},[t._v(" Siguiente ")])],1)],1)],1)],1)},s=[],l=i("a18c"),c={name:"Form-evaluation",data:function(){return{optConocimientos:[3,6,9,12,15],optPowerpoint:[1,2,3,4,5],opteduDistancia:[4,8,12,16,20],optLMS:[3,6,9,12,15],optResponsabilidad:[1,2,3,4,5],optComunicacion:[1,2,3,4,5],optInvestigacion:[2,4,6,8,10],optInteractuar:[1,2,3,4,5],evaluation:{items:{numAnios:null,anios:null,disponibilidad:null,disposicion:null,conocimiento:null,powerpoint:null,eduDistancia:null,LMS:null,responsabilidad:null,comunicacion:null,investigacion:null,interactuar:null},total_score:null,IdGeneral:""}}},methods:{addEvaluation:function(){this.evaluation.items.numAnios>=5&&(this.evaluation.items.anios=20),this.evaluation.total_score=this.evaluation.items.anios+this.evaluation.items.conocimiento+this.evaluation.items.powerpoint+this.evaluation.items.eduDistancia+this.evaluation.items.LMS+this.evaluation.items.responsabilidad+this.evaluation.items.comunicacion+this.evaluation.items.investigacion+this.evaluation.items.interactuar,this.evaluation.IdGeneral=this.$route.params.id,this.axios.post("evaluations/new-evaluation",this.evaluation).then((function(t){l["a"].push("/finish")})).catch((function(t){console.log(t)}))}}},r=c,u=i("2877"),v=Object(u["a"])(r,n,s,!1,null,null,null),d=v.exports,m=i("0418"),p={name:"Evaluation",components:{FormEvaluation:d,HeaderComponent:m["a"]}},h=p,b=Object(u["a"])(h,e,o,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=Evaluation.9a049b48.js.map