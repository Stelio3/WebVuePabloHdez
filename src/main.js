// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import props from './Mixins/props'
import firestore from 'firebase/firestore'

Vue.config.productionTip = false

var config = {
   apiKey: 'AIzaSyApO7hDnoJzP4purVB_UNEJT3OPD-EhetM',
   authDomain: 'miprimerproyecto-9f885.firebaseapp.com',
   databaseURL: 'https://miprimerproyecto-9f885.firebaseio.com',
   projectId: 'miprimerproyecto-9f885',
   storageBucket: 'miprimerproyecto-9f885.appspot.com',
   messagingSenderId: '347909009323'
 };
 firebase.initializeApp(config);

Vue.use(firebase)
Vue.use(firestore)
Vue.mixin(props)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
