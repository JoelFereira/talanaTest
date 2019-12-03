import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/index'

Vue.use(require('vue-cookies'))

Vue.config.productionTip = false

// Importing Routes
import router from './plugins/router'

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App),
  store
}).$mount('#app')
