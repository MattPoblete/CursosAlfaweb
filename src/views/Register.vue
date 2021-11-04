<template>
    <b-container class="my-3">
        <h1>Registro de usuario</h1>
        <div>
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-1"
                    label="Email:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="E-mail"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Email:"
                    label-for="input-2"
                >
                    <b-form-input
                    id="input-2"
                    v-model="form.pass"
                    type="password"
                    placeholder="Contraseña"
                    ></b-form-input>
                </b-form-group>
            
            

              <b-button type="submit" class="mr-3" variant="success">Registrar</b-button>
              <b-button type="reset" variant="danger">Limpiar formulario</b-button>
              <b-button class="ml-3" variant="primary" :to="{name: 'login'}">Iniciar sesión</b-button>
            </b-form>
        </div>


    </b-container>
    
</template>

<script>

import {mapActions} from 'vuex'
import mixins from '../mixins/mixin'
  export default {
    mixins:[mixins],
    data() {
      return {
        form: {
          email: '',
          pass: '',
        },
      }
    },
    methods: {
      ...mapActions(['register']),
      onSubmit(event) {
        event.preventDefault()
        this.register({email: this.form.email, pass: this.form.pass})
        .then(
          this.toast('Usuario creado correctamente', `El usuario ${this.form.email} ha sido creado exitosamente y se ha iniciado sesión con el`, 'success', 2000),
          (err)=>this.toast('Error al crear usuario', `Error: ${err}`, 'danger', 2500))
        
        .then(setTimeout(()=>this.$router.push({name:'home'}), 3000))
      },
      onReset(event) {
        event.preventDefault()
        this.form.email = ''
        this.form.pass = ''
      },
    }
  }
</script>