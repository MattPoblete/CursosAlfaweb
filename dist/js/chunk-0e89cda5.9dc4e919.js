(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e89cda5"],{"1a24":function(o,t,s){"use strict";s.r(t);var e=function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("b-container",[s("h1",{staticClass:"my-3"},[o._v("Editando el curso: "+o._s(o.curso.data.nombre))]),s("b-form-group",[s("b-form-input",{staticClass:"my-3",attrs:{type:"text",maxlength:"40",placeholder:"Nombre del curso"},model:{value:o.form.nombre,callback:function(t){o.$set(o.form,"nombre",t)},expression:"form.nombre"}}),s("b-form-input",{staticClass:"my-3",attrs:{type:"url",placeholder:"URL de la imagen del curso"},model:{value:o.form.imagen,callback:function(t){o.$set(o.form,"imagen",t)},expression:"form.imagen"}}),s("label",{staticClass:"mt-0",attrs:{for:"cupos",size:"sm"}},[o._v("Cupos del curso")]),s("b-form-input",{staticClass:"mb-3",attrs:{id:"cupos",type:"number",min:"0"},model:{value:o.form.cupos,callback:function(t){o.$set(o.form,"cupos",t)},expression:"form.cupos"}}),s("label",{attrs:{for:"inscritos",size:"sm"}},[o._v("Inscritos en el curso")]),s("b-form-input",{staticClass:"mb-3",attrs:{id:"inscritos",type:"number",min:"0"},model:{value:o.form.inscritos,callback:function(t){o.$set(o.form,"inscritos",t)},expression:"form.inscritos"}}),s("b-form-input",{staticClass:"my-3",attrs:{type:"text",placeholder:"Duración del curso"},model:{value:o.form.duracion,callback:function(t){o.$set(o.form,"duracion",t)},expression:"form.duracion"}}),s("label",{attrs:{for:"precio",size:"sm"}},[o._v("Costo del curso")]),s("b-form-input",{staticClass:"mb-3",attrs:{id:"precio",type:"number",min:"0"},model:{value:o.form.costo,callback:function(t){o.$set(o.form,"costo",t)},expression:"form.costo"}}),s("b-form-input",{staticClass:"mb-3",attrs:{type:"text",placeholder:"Código del curso"},model:{value:o.form.codigo,callback:function(t){o.$set(o.form,"codigo",t)},expression:"form.codigo"}}),s("b-form-textarea",{staticClass:"mb-3",attrs:{placeholder:"Descripción del curso",rows:"4"},model:{value:o.form.descripcion,callback:function(t){o.$set(o.form,"descripcion",t)},expression:"form.descripcion"}}),s("label",{attrs:{for:"example-datepicker"}},[o._v("Fecha de registro")]),s("b-form-datepicker",{staticClass:"mb-3",attrs:{id:"fecha"},model:{value:o.form.fecha,callback:function(t){o.$set(o.form,"fecha",t)},expression:"form.fecha"}}),s("b-form-checkbox",{attrs:{name:"check-button",switch:""},on:{click:o.btnCheck},model:{value:o.form.estado,callback:function(t){o.$set(o.form,"estado",t)},expression:"form.estado"}},[o._v(" Terminado: "),s("b",[o._v(o._s(o.form.estado?"Si":"No"))])])],1),s("div",{staticClass:"d-flex justify-content-around my-4"},[s("b-button",{attrs:{variant:"success"},on:{click:o.editar}},[o._v("Actualizar")]),s("b-button",{attrs:{variant:"danger"},on:{click:o.limpiar}},[o._v("Limpiar formulario")]),s("b-button",{attrs:{variant:"primary",to:{name:"administracion"}}},[o._v("Regresar")])],1)],1)},r=[],a=s("5530"),i=s("2f62"),c=s("1a86"),n={props:["curso","id"],mixins:[c["a"]],data:function(){return{form:{nombre:"",imagen:"",cupos:"",inscritos:"",duracion:"",costo:"",codigo:"",descripcion:"",fecha:"",estado:!1}}},created:function(){void 0==this.curso&&this.$router.push({name:"administracion"})},mounted:function(){this.form=Object(a["a"])({},this.curso.data)},methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["editCurso","getCurso"])),{},{editar:function(){var o=this;this.form.nombre&&this.form.imagen&&this.form.cupos&&this.form.inscritos&&this.form.duracion&&this.form.costo&&this.form.codigo&&this.form.descripcion&&this.form.fecha?this.form.inscritos>this.form.cupos?this.toast("¡Error!","¡Error!, la cantidad de alumnos inscritos no puede ser mayor a los cupos disponibles","danger",2500):this.confirm("Editar","¿Está seguro de que desea editar los datos ingresados?").then((function(t){if(1==t){var s=o.form;1==s.estado?(s.inscritos=0,o.editCurso({id:o.curso.id,data:s}),o.toast("Curso editado","Los datos de ".concat(o.curso.data.nombre," han sido actualizados con éxito"),"success",2e3),setTimeout((function(){return o.$router.push({name:"administracion"})}),2100)):(o.editCurso({id:o.curso.id,data:s}),o.toast("Curso editado","Los datos de ".concat(o.curso.data.nombre," han sido actualizados con éxito"),"success",2e3),setTimeout((function(){return o.$router.push({name:"administracion"})}),2100))}else o.toast("Operación cancelada","Los datos de ".concat(o.curso.data.nombre," no han sido modificados. (Operación cancelada por el usuario)"),"warning",2500)})):this.toast("Confirmar campos","Por favor, confirme que todos los campos estén completos","warning",2500)},limpiar:function(){this.confirm("Limpiar datos","Los datos del formulario serán eliminados y la información del curso quedará en blanco, estos cambios no permanecerán a no ser que guardes. ¿Desea vaciar el formulario?"),this.form.nombre="",this.form.imagen="",this.form.cupos="",this.form.inscritos="",this.form.duracion="",this.form.costo="",this.form.codigo="",this.form.descripcion="",this.form.fecha="",this.form.estado=!1},btnCheck:function(){console.log("a")}})},m=n,d=s("2877"),u=Object(d["a"])(m,e,r,!1,null,null,null);t["default"]=u.exports},"1a86":function(o,t,s){"use strict";t["a"]={methods:{toast:function(o,t,s){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3;this.$bvToast.toast(t,{title:o,toaster:"b-toaster-top-center",solid:!0,variant:s,autoHideDelay:e})},confirm:function(o,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Si",e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"No",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"success";return this.$bvModal.msgBoxConfirm(t,{title:o,size:"md",buttonSize:"md",okVariant:r,okTitle:s,cancelTitle:e,footerClass:"p-2",hideHeaderClose:!1,centered:!0})}}}}}]);
//# sourceMappingURL=chunk-0e89cda5.9dc4e919.js.map