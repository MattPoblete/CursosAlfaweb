import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyDJrMionBImpjoDW4Cz4umxdRgB6LfQSRE",
  authDomain: "alfaweb-e52df.firebaseapp.com",
  projectId: "alfaweb-e52df",
  storageBucket: "alfaweb-e52df.appspot.com",
  messagingSenderId: "1035273861933",
  appId: "1:1035273861933:web:8cfca3cebd628baeb1b1a4"
};

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false
let app 
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})

