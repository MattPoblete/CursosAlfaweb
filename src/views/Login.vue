<template>
    <b-container class="my-3">
        <h1>Login de usuario</h1>
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
                    placeholder="Password"
                    ></b-form-input>
                </b-form-group>
            
            

            <b-button type="submit" class="mr-3" variant="success">Iniciar Sesión</b-button>
            <b-button type="reset" variant="danger">Limpiar formulario</b-button>
            <b-button class="ml-3" variant="primary" :to="{name: 'register'}">Registrarse</b-button>
            </b-form>

        </div>


    </b-container>
    
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        form: {
          email: 'admin@alfaweb.com',
          pass: 'password',
        },
      }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit(event) {
            event.preventDefault()
            this.login({email: this.form.email, pass: this.form.pass})
            .then(()=> this.$router.push({name:'home'}))
            .catch(()=>alert('a'))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.pass = ''
        }
    }
  }
</script>