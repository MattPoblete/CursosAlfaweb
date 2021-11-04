<template>
  <div id="app">
    <div>
      <b-navbar toggleable="true" type="dark" style="background-color: #673AB7" >
        <div class="m-0 p-0">
          <b-navbar-toggle v-if="authUser.logged" target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand to="" class="ml-3">Cursos Alfaweb</b-navbar-brand>
        </div>



        <div v-if="authUser.logged">
          <b-nav-text >{{authUser.user}}</b-nav-text>
          <b-button @click="salir" class="mx-3" size="sm" icon="box-arrow-right" variant="danger"> 
            <b-icon-box-arrow-right />
          </b-button>
        </div>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}">Inicio</b-nav-item>
            <b-nav-item :to="{name:'administracion'}">Administrar cursos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Firebase from 'firebase/compat/app'
import {mapActions, mapState} from 'vuex'


export default{
  created(){
    this.checkAuth()
    this.getCursos()
  },
  computed:{
    ...mapState(['authUser']),
    
  },
  methods:{
    ...mapActions(['logout','checkAuth','getCursos']),
    salir(){
      this.logout()
      .then(()=>this.$router.push({name: 'login'}))
    },
    
    usr(){
      console.log(Firebase.auth().currentUser)
    }

  }
}
                               
</script>



<style>
body{
  margin:0px;
  text-align: center;
}
</style>
