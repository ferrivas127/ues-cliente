(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Evaluation"],{"0418":function(a,t,i){"use strict";var e=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-img",{attrs:{src:i("166e"),position:"center",height:"250",width:"200"}})],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card-text",[e("h3",{staticClass:"display-1 grey--text text--darken-3"},[a._v("Universidad Nacional")]),e("h3",{staticClass:"headline grey--text text--darken-3"},[a._v(" Facultad de Ingeniería y Arquitectura ")]),e("h3",{staticClass:"headline grey--text text--darken-3"},[a._v(" Carrera Ingeniería en Sistemas Informáticos ")]),e("h3",{staticClass:"headline grey--text text--darken-3"},[a._v(" Control de Contenidistas ")])])],1),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-img",{attrs:{src:i("166e"),position:"center",height:"250",width:"200"}})],1)],1)],1)},o=[],n={name:"header-componente"},s=n,l=i("2877"),r=Object(l["a"])(s,e,o,!1,null,null,null);t["a"]=r.exports},"44bf":function(a,t,i){"use strict";i.r(t);var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"evaluation"},[i("v-container",[i("v-card",{attrs:{shaped:""}},[i("v-card-text",[i("HeaderComponent"),i("v-divider"),i("FormEvaluation")],1)],1)],1)],1)},o=[],n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"form-general"},[i("v-dialog",{attrs:{"max-width":"350",persistent:""},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[a._v("Gracias. Su informacion ha sido correctamente enviada")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:"",to:"/"}},[a._v(" Salir de la pagina ")])],1)],1)],1),i("v-form",{ref:"EvaluationForm",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),a.addEvaluation()}},model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("h4",{staticClass:"title"},[a._v(" Experiencia en docencia universitario ")]),i("v-text-field",{attrs:{color:"secondary",rules:a.anioRules,label:"Escriba sus años",required:""},model:{value:a.evaluation.items.numAnios,callback:function(t){a.$set(a.evaluation.items,"numAnios",a._n(t))},expression:"evaluation.items.numAnios"}})],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Disponibilidad de horario, incluyendo fines de semana ")]),i("v-radio-group",{model:{value:a.evaluation.items.disponibilidad,callback:function(t){a.$set(a.evaluation.items,"disponibilidad",t)},expression:"evaluation.items.disponibilidad"}},[i("v-radio",{attrs:{label:"SI",value:"5",color:"secondary"}}),i("v-radio",{attrs:{label:"NO",value:"0",color:"secondary"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Disposición en entrevista ")]),i("v-radio-group",{model:{value:a.evaluation.items.disposicion,callback:function(t){a.$set(a.evaluation.items,"disposicion",t)},expression:"evaluation.items.disposicion"}},[i("v-radio",{attrs:{label:"SI",value:"5",color:"secondary"}}),i("v-radio",{attrs:{label:"NO",value:"0",color:"secondary"}})],1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v("Indicaciones: Seleccione del 1 al 5, siendo el 1 el dominio mínimo y 5 el dominio máximo")])]),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Amplios conocimientos sobre la asignatura a virtualizar ")]),i("v-radio-group",{model:{value:a.evaluation.items.conocimiento,callback:function(t){a.$set(a.evaluation.items,"conocimiento",t)},expression:"evaluation.items.conocimiento"}},a._l(a.optConocimientos,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Manejo intermedio de Microsoft PowerPoint ")]),i("v-radio-group",{model:{value:a.evaluation.items.powerpoint,callback:function(t){a.$set(a.evaluation.items,"powerpoint",t)},expression:"evaluation.items.powerpoint"}},a._l(a.optPowerpoint,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Conocimientos de educación a distancia ")]),i("v-radio-group",{model:{value:a.evaluation.items.eduDistancia,callback:function(t){a.$set(a.evaluation.items,"eduDistancia",t)},expression:"evaluation.items.eduDistancia"}},a._l(a.opteduDistancia,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Manejo de plataformas LMS (Learning Management System) ")]),i("v-radio-group",{model:{value:a.evaluation.items.LMS,callback:function(t){a.$set(a.evaluation.items,"LMS",t)},expression:"evaluation.items.LMS"}},a._l(a.optLMS,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Responsabilidad notoria ")]),i("v-radio-group",{model:{value:a.evaluation.items.responsabilidad,callback:function(t){a.$set(a.evaluation.items,"responsabilidad",t)},expression:"evaluation.items.responsabilidad"}},a._l(a.optResponsabilidad,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Excelente comunicación oral y escrita ")]),i("v-radio-group",{model:{value:a.evaluation.items.comunicacion,callback:function(t){a.$set(a.evaluation.items,"comunicacion",t)},expression:"evaluation.items.comunicacion"}},a._l(a.optComunicacion,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Interes por la investigacion tecnica ")]),i("v-radio-group",{attrs:{rules:a.investigacionRules},model:{value:a.evaluation.items.investigacion,callback:function(t){a.$set(a.evaluation.items,"investigacion",t)},expression:"evaluation.items.investigacion"}},a._l(a.optInvestigacion,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",{attrs:{cols:"12"}},[i("h4",{staticClass:"title"},[a._v(" Capacidad para interactuar con profesionales y captar instrucciones ")]),i("v-radio-group",{attrs:{rules:a.interactuarRules},model:{value:a.evaluation.items.interactuar,callback:function(t){a.$set(a.evaluation.items,"interactuar",t)},expression:"evaluation.items.interactuar"}},a._l(a.optInteractuar,(function(a,t){return i("v-radio",{key:t,attrs:{label:t+1,value:a,color:"secondary"}})})),1)],1),i("v-col",[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!a.valid,type:"submit",color:"error"},on:{click:[function(t){return a.validate()},function(t){t.stopPropagation(),a.dialog=!0}]}},[a._v(" Finalizar ")])],1)],1)],1)],1)},s=[],l=(i("a18c"),{name:"Form-evaluation",data:function(){return{valid:!0,dialog:!1,optConocimientos:[3,6,9,12,15],optPowerpoint:[1,2,3,4,5],opteduDistancia:[4,8,12,16,20],optLMS:[3,6,9,12,15],optResponsabilidad:[1,2,3,4,5],optComunicacion:[1,2,3,4,5],optInvestigacion:[2,4,6,8,10],optInteractuar:[1,2,3,4,5],evaluation:{items:{numAnios:null,anios:null,disponibilidad:null,disposicion:null,conocimiento:null,powerpoint:null,eduDistancia:null,LMS:null,responsabilidad:null,comunicacion:null,investigacion:null,interactuar:null},total_score:null,IdGeneral:""},anioRules:[function(a){return!!a||"Experiencia en docencia universitario es requerido"}],investigacionRules:[function(a){return!!a||"Interes por la investigacion tecnica es requerido"}],interactuarRules:[function(a){return!!a||"Capacidad para interactuar con profesionales y captar instrucciones"}]}},methods:{validate:function(){this.$refs.EvaluationForm.validate()},addEvaluation:function(){this.evaluation.items.numAnios>=5&&(this.evaluation.items.anios=20),this.evaluation.total_score=this.evaluation.items.anios+this.evaluation.items.conocimiento+this.evaluation.items.powerpoint+this.evaluation.items.eduDistancia+this.evaluation.items.LMS+this.evaluation.items.responsabilidad+this.evaluation.items.comunicacion+this.evaluation.items.investigacion+this.evaluation.items.interactuar,this.evaluation.IdGeneral=this.$route.params.id,this.axios.post("evaluations/new-evaluation",this.evaluation).then((function(a){console.log(a)})).catch((function(a){console.log(a)}))}}}),r=l,c=i("2877"),u=Object(c["a"])(r,n,s,!1,null,null,null),v=u.exports,d=i("0418"),m={name:"Evaluation",components:{FormEvaluation:v,HeaderComponent:d["a"]}},p=m,f=Object(c["a"])(p,e,o,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=Evaluation.0e9232a5.js.map