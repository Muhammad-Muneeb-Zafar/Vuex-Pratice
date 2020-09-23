import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RoutesFromFile from './routes'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)


Vue.use(BootstrapVue);
Vue.config.productionTip = false


Vue.use(VueRouter)

const routing = new VueRouter({
  routes : RoutesFromFile,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router:routing
}).$mount('#app')
