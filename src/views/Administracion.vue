<template>
    <b-container class="d-flex flex-column justify-content-center">
        <b-row class="my-3 d-flex justify-content-center">
            <h1>Administración</h1>
            <b-button class="mx-3" variant="primary" size="sm" v-b-modal.agregar>AGREGAR CURSO</b-button>
        </b-row>

        <b-modal id="agregar" title="Agregando curso" hide-footer>
            <b-form-group>
                <b-form-input v-model="modal.nombre" class="my-3" type="text" maxlength="40" placeholder="Nombre del curso"/>

                <b-form-input v-model="modal.imagen" class="my-3" type="url" placeholder="URL de la imagen del curso"/>

                <label for="cupos" class="mt-0" size="sm">Cupos del curso</label>
                <b-form-input v-model="modal.cupos" class="mb-3" id="cupos" type="number" min="0"/>

                <label for="inscritos" size="sm">Inscritos en el curso</label>
                <b-form-input v-model="modal.inscritos" class="mb-3" id="inscritos" type="number" min="0"/>

                <b-form-input v-model="modal.duracion" class="my-3" type="text" placeholder="Duración del curso"/>

                <label for="precio" size="sm">Costo del curso</label>
                <b-form-input v-model="modal.costo" class="mb-3" id="precio" type="number" min="0"/>

                <b-form-input v-model="modal.codigo" class="mb-3" type="text" placeholder="Código del curso"/>

                <b-form-textarea
                    class="mb-3"
                    placeholder="Descripción del curso"
                    rows="4"
                    v-model="modal.descripcion" 
                ></b-form-textarea>
            </b-form-group>
            <div class="d-flex">
                <div class="mr-0 ml-auto">
                    <b-button @click="agregarCurso" class="mr-3" variant="success">Agregar</b-button>
                    <b-button @click="limpiar" variant="danger">Limpiar formulario</b-button>
                </div> 
            </div>
        </b-modal>

        <table class="table table-hover" >
            <thead>
                <tr>
                    <th scope="col">Curso</th>
                    <th scope="col">Cupos</th>
                    <th scope="col">Inscritos</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Terminado</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(curso, i) in GETCURSOS" :key="i">
                    <td class="text-center">{{curso.data.nombre}}</td>
                    <td class="text-center">{{curso.data.cupos}}</td>
                    <td class="text-center">{{curso.data.inscritos}}</td>
                    <td class="text-center">{{curso.data.duracion}}</td>
                    <td class="text-center"> <b-badge variant="success">${{curso.data.costo}}</b-badge></td>
                    <td class="text-center"><b-badge :variant="curso.data.estado ? 'primary' : 'secondary'">{{curso.data.estado ? "Si" : "No"}}</b-badge></td>
                    <td class="text-center"><b-badge variant="success">{{curso.data.fecha}}</b-badge></td>
                    <td class="text-center">
                        <b-row class="text-center" align-h="around">
                            <b-button @click="editar(curso)" variant="warning" size="sm">
                                <b-icon variant="light" icon="pencil-fill"/>
                            </b-button>

                            <b-button variant="danger" size="sm" @click="eliminar(curso.id, curso.data.nombre)">
                                <b-icon icon="trash-fill"/>
                            </b-button>
                        </b-row>
                    </td>   
                    
                </tr>
            </tbody>
        </table>
        <div class="d-flex flex-column justify-content-center">
            <b-alert show variant="info"><b-icon icon="arrow-up" class="mr-3"/>Cantidad total de alumnos permitidos: {{totalAlumnos}}</b-alert>
            <b-alert show variant="info"><b-icon icon="arrow-up" class="mr-3"/>Cantidad total de alumnos inscritos: {{totalInscritos}}</b-alert>
            <b-alert show variant="warning"><b-icon icon="arrow-up" class="mr-3"/>Cantidad total de cupos restantes: {{cuposRestantes}}</b-alert>
            <b-alert show variant="danger"><b-icon icon="arrow-up" class="mr-3"/>Cantidad total de cursos terminados: {{cursosTerminados}}</b-alert>
            <b-alert show variant="success"><b-icon icon="arrow-up" class="mr-3"/>Cantidad total de cursos activos: {{cursosActivos}}</b-alert>
            <b-alert show variant="primary"><b-icon icon="arrow-up" class="mr-3"/>Cantidad total de cursos: {{totalCursos}}</b-alert>
        </div>
    </b-container>
</template>

<script>
import mixins from '../mixins/mixin'
import { mapActions, mapGetters } from 'vuex'
export default {
    mixins:[mixins],
    computed:{
        ...mapGetters(['GETCURSOS']),
        fecha(){
            const hoy = new Date()
            const fechacompleta= `${hoy.getFullYear()}-${hoy.getMonth()+1}-${hoy.getDay()}`
            return fechacompleta
        },
        totalAlumnos(){
            let total = 0
            for (let i = 0; i < this.GETCURSOS.length; i++) {
                const element = parseInt(this.GETCURSOS[i].data.cupos);
                total = element + total
            }
            return total
        },
        totalInscritos(){
            let totalInscritos = 0
            for (let i = 0; i < this.GETCURSOS.length; i++) {
                const element = parseInt(this.GETCURSOS[i].data.inscritos);
               totalInscritos = element + totalInscritos
            }
            return totalInscritos
        },
        cuposRestantes(){
            let restantes = parseInt(this.totalAlumnos - this.totalInscritos)
            return restantes
        },
        cursosTerminados(){
            let total = 0
            for (let i = 0; i < this.GETCURSOS.length; i++) {
                const element = this.GETCURSOS[i].data.estado;
                if (element) {
                    total++
                }
            }
            return total
        },
        cursosActivos(){
            let total = 0
            for (let i = 0; i < this.GETCURSOS.length; i++) {
                const element = this.GETCURSOS[i].data.estado;
                if (!element) {
                    total++
                }
            }
            return total
        },
        totalCursos(){
            let total = this.GETCURSOS.length
            return total
        }
    },
    data(){
        return{
            modal:{
                nombre:'',
                imagen:'',
                cupos: '',
                inscritos: '',
                duracion: '',
                costo: '',
                codigo: '',
                descripcion:'',
                estado: false,
            }
        }
    },
    methods:{
        ...mapActions(['addCurso','delCurso']),
        limpiar(){
            this.modal.nombre=''
            this.modal.imagen=''
            this.modal.cupos= ''
            this.modal.inscritos= ''
            this.modal.duracion= ''
            this.modal.costo= ''
            this.modal.codigo= ''
            this.modal.descripcion=''
            
        },
        mostrarFecha(){
            console.log(this.fecha)
        },
        agregarCurso(){
            if(!this.modal.nombre || !this.modal.imagen || !this.modal.cupos || !this.modal.inscritos || !this.modal.duracion || !this.modal.costo || !this.modal.codigo || !this.modal.descripcion){
                this.toast('¡Error!','Por favor complete todos los campos', 'danger', 2500)
            }
            else{
                if(this.modal.inscritos > this.modal.cupos){
                    this.toast('¡Error!','La cantidad de alumnos inscritos no puede superar los cupos existentes', 'danger', 2500)
                }
                else{
                    this.confirm('Confirmar',`¿Está seguro que desea agregar el curso ${this.modal.nombre}?`, 'Agregar curso', 'Cancelar')
                    .then(value=>{
                        switch (value){
                            case true:
                                this.addCurso({
                                    nombre: this.modal.nombre,
                                    imagen: this.modal.imagen,
                                    cupos: this.modal.cupos,
                                    inscritos: this.modal.inscritos,
                                    duracion: this.modal.duracion,
                                    costo: this.modal.costo,
                                    codigo: this.modal.codigo,
                                    descripcion: this.modal.descripcion,
                                    estado: this.modal.estado,
                                    fecha: this.fecha
                                })
                                this.toast('¡Curso agregado correctamente!',`El curso ${this.modal.nombre} ha sido añadido correctamente`, 'success', 2500)
                                this.limpiar()
                                this.$bvModal.hide('agregar')
                                break
                            
                            case false:
                                this.toast('Operación cancelada', `Operación cancelada por el usuario. El curso "${this.modal.nombre}" no ha sido agregado`, 'warning', 2500)
                                this.$bvModal.hide('agregar')
                                break
                        }
                    })
                    
                }
            }
        },
        eliminar(curso, nombre){

            this.confirm('Eliminar curso', `¿Desea eliminar el curso ${nombre}?`, 'Si, Eliminar', 'Cancelar', 'danger')
            .then(value=>{
                switch(value){
                    case true:
                        this.toast('Curso eliminado', `El curso ${nombre} ha sido eliminado exitosamente`, 'warning', 2500)
                        this.delCurso(curso)
                        break
                    case false:
                        this.toast('Operación cancelada', `El curso ${nombre} no ha sido eliminado. (Operacion cancelada por el usuario)`, 'info', 2500)
                    }
                }
            )
        },
        editar(payload){
            this.$router.push({name:'editar', params: {curso: payload, id:payload.id} })
        },        
    }
}
</script>