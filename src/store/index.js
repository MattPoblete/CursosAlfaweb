import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase/compat/app'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authUser: {
      user: '',
      logged: false,
    },
    cursos:[]
  },
  mutations: {
    setAuth(state, usuario){
      state.authUser.user = usuario
      state.authUser.logged = true
    },
    LOGOUT(state){
      state.authUser.user = ''
      state.authUser.logged = false
    },
    setCursos(state, cursos){
      state.cursos = cursos
    }
  },
  actions: {
    login(context, credenciales){
      return new Promise((resolve, reject)=>{
        Firebase.auth().signInWithEmailAndPassword(credenciales.email, credenciales.pass)
        .then((response)=>{
          context.commit('setAuth', response.user._delegate.email)
          resolve()
        })
        .catch(()=>{
          reject('Email o contraseña inválidos')
        })
      })
    },

    logout(context){
      return new Promise ((resolve, reject)=>{
        Firebase.auth().signOut()
        .then(()=>{
          context.commit('LOGOUT')
          resolve()
        })
        .catch((err)=>reject(err))
      })
    },

    register(context, credenciales){
      return new Promise ((resolve, reject)=>{
        Firebase.auth().createUserWithEmailAndPassword(credenciales.email, credenciales.pass)
        .then(()=>{
        resolve()
        })
        .catch((err)=>reject(err))
      })
      
    },

    checkAuth(context){
      Firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          context.commit('setAuth', user.email)
        }
        else{
          context.commit('LOGOUT')
        }
      })
    },

    getCursos({commit}){
      Firebase
        .firestore()
        .collection('cursos')
        .onSnapshot((snapshot)=>{
          const cursos = []
          snapshot.forEach((doc)=>{
            cursos.push({id: doc.id, data: doc.data()})
          })
          commit('setCursos', cursos)
        })
    },

    addCurso(context, curso){
      Firebase
        .firestore()
        .collection('cursos')
        .add(curso)
    },

    delCurso(context, curso){
      Firebase
        .firestore()
        .collection('cursos')
        .doc(curso)
        .delete()
    },

    editCurso(context, {id, data}){
      Firebase
        .firestore()
        .collection('cursos')
        .doc(id)
        .update(data)
    },

    async getCurso(context, id){
      return await Firebase
        .firestore()
        .collection('cursos')
        .get(id)
    }


  },
  getters:{
    GETCURSOS(state){
      return state.cursos
    },
      
  },
  modules: {
  }
})
