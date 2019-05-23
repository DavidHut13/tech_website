import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      duration: 400
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')