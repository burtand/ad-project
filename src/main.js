import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'

Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBAzYpzlCypjoLG98zyKuVSk30N6Bwjvj8',
      authDomain: 'burtand-ads.firebaseapp.com',
      databaseURL: 'https://burtand-ads.firebaseio.com',
      projectId: 'burtand-ads',
      storageBucket: 'burtand-ads.appspot.com',
      messagingSenderId: '363654882571',
      appId: '1:363654882571:web:4744ca06d6738bfd4c6e0e',
      measurementId: 'G-84C0D6R7TT'
    })
  }
}).$mount('#app')
