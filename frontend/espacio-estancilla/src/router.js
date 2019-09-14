import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CDeportivo from './views/CDeportivo.vue'
import CRecreacional from './views/CRecreacional.vue'
import CEventos from './views/CEventos.vue'
/*import Gastronomia from './views/Gastronomia.vue'*/
import Cerveza from './views/Cerveza.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
        scrollTo = to.hash
    } else if (savedPosition) {
        scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/deportes', name: 'centro_deportivo', component: CDeportivo },
    { path: '/eventos', name: 'centro_eventos', component: CEventos },
    { path: '/actividades', name: 'actividades', component: CRecreacional },
    /*{ path: '/gastronomia', name: 'gastronomia', component: Gastronomia },*/
    { path: '/cerveza', name: 'cerveza', component: Cerveza },
  ]
})
