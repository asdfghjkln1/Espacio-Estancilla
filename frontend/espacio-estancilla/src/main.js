import Vue from 'vue'
import App from './App.vue'
import Vuemq from 'vue-mq'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Galeria from './components/Galeria.vue';

Vue.config.productionTip = false
Vue.component( 'v-galeria', Galeria);
Vue.use(Vuemq, {
    breakpoints: {
        xsm: 450,
        sm: 800,
        md: 1200,
        lg: 1480,
        xlg: 1900,
        inf: Infinity,
    }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
