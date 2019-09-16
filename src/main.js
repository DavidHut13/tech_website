import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import VueParticles from 'vue-particles'
import vueScrollto from 'vue-scrollto'
import 'aos/dist/aos.css'

Vue.use(VueParticles)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios);
Vue.use(vueScrollto)


Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history'
});


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


// new Vue({
//     el: '#app',
//     template: '<App/>',
//     router,
//     components: {
//         App
//     }
// })