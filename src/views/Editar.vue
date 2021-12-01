<template>
    <b-container>
        <h1 class='my-3'>Editando el curso: {{curso.data.nombre}}</h1>
        <b-form-group>
                <b-form-input v-model="form.nombre" class="my-3" type="text" maxlength="40" placeholder="Nombre del curso"> </b-form-input>

                <b-form-input v-model="form.imagen" class="my-3" type="url" placeholder="URL de la imagen del curso"> </b-form-input>

                <label for="cupos" class="mt-0" size="sm">Cupos del curso</label>
                <b-form-input v-model="form.cupos" class="mb-3" id="cupos" type="number" min="0"> </b-form-input>

                <label for="inscritos" size="sm">Inscritos en el curso</label>
                <b-form-input v-model="form.inscritos" class="mb-3" id="inscritos" type="number" min="0"> </b-form-input>

                <b-form-input v-model="form.duracion" class="my-3" type="text" placeholder="Duración del curso"> </b-form-input>

                <label for="precio" size="sm">Costo del curso</label>
                <b-form-input v-model="form.costo" class="mb-3" id="precio" type="number" min="0"> </b-form-input>

                <b-form-input v-model="form.codigo" class="mb-3" type="text" placeholder="Código del curso"> </b-form-input>

                <b-form-textarea
                    class="mb-3"
                    placeholder="Descripción del curso"
                    rows="4"
                    v-model="form.descripcion"
                ></b-form-textarea>

                <label for="example-datepicker">Fecha de registro</label>
                <b-form-datepicker v-model="form.fecha" id="fecha" class="mb-3" />
     
                <b-form-checkbox @click="btnCheck" v-model="form.estado" name="check-button" switch>
                    Terminado: <b>{{form.estado ? 'Si':'No'}}</b>
                </b-form-checkbox>

            </b-form-group>

            <div class="d-flex justify-content-around my-4">
                <b-button variant="success" @click="editar">Actualizar</b-button>
                <b-button variant="danger" @click="limpiar">Limpiar formulario</b-button>
                <b-button variant="primary" :to="{name: 'administracion'}">Regresar</b-button>
            </div>
    </b-container>
</template>

<script>
import { mapActions} from 'vuex'
import mixins from '../mixins/mixin'


export default {
    props:['curso', 'id'],
    mixins:[mixins],
    data(){
        return{
            form:{
                nombre:'',
                imagen:'',
                cupos: '',
                inscritos: '',
                duracion: '',
                costo: '',
                codigo: '',
                descripcion:'',
                fecha:'',
                estado: false,
            }
        }
    },
    created(){
        if(this.curso == undefined){
            this.$router.push({name:'administracion'})
        }

    },
    mounted(){
        
        this.form = {...this.curso.data}
    },

    methods:{
        ...mapActions(['editCurso', 'getCurso']),
        editar(){
            if(!this.form.nombre || !this.form.imagen || !this.form.cupos || !this.form.inscritos || !this.form.duracion || !this.form.costo || !this.form.codigo || !this.form.descripcion || !this.form.fecha){
                this.toast('Confirmar campos', 'Por favor, confirme que todos los campos estén completos', 'warning', 2500)
            }
            else{
                if(this.form.inscritos>this.form.cupos){
                    this.toast('¡Error!', '¡Error!, la cantidad de alumnos inscritos no puede ser mayor a los cupos disponibles', 'danger', 2500)
                }
                else{
                    this.confirm('Editar', '¿Está seguro de que desea editar los datos ingresados?')
                    .then( (value)=>{
                            if(value == true){
                                const newData = this.form
                                if(newData.estado == true){
                                    newData.inscritos = 0
                                    this.editCurso({id:this.curso.id, data: newData})
                                    this.toast('Curso editado', `Los datos de ${this.curso.data.nombre} han sido actualizados con éxito`, 'success', 2000)
                                    setTimeout(()=>this.$router.push({name: 'administracion'}),2100)
                                }
                                else{
                                    this.editCurso({id:this.curso.id, data: newData})
                                    this.toast('Curso editado', `Los datos de ${this.curso.data.nombre} han sido actualizados con éxito`, 'success', 2000)
                                    setTimeout(()=>this.$router.push({name: 'administracion'}),2100)                        
                                }
                            }
                            else{
                                this.toast('Operación cancelada', `Los datos de ${this.curso.data.nombre} no han sido modificados. (Operación cancelada por el usuario)`, 'warning', 2500)
                            }
                        }
                    )
                }
            }
            
        },
        limpiar(){
            this.confirm('Limpiar datos', 'Los datos del formulario serán eliminados y la información del curso quedará en blanco, estos cambios no permanecerán a no ser que guardes. ¿Desea vaciar el formulario?')
                this.form.nombre=''
                this.form.imagen=''
                this.form.cupos= ''
                this.form.inscritos= ''
                this.form.duracion= ''
                this.form.costo= ''
                this.form.codigo= ''
                this.form.descripcion=''
                this.form.fecha=''
                this.form.estado= false
        },
        btnCheck(){
            console.log('a')
        }
    }
}
</script>