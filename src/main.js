import Vue from 'vue';
import App from './App.vue';
import VueRouter from './router';
import Bootstrapvue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Notifications from 'vue-notification';
import store from "./store";


Vue.use(Notifications)

Vue.use(Bootstrapvue);
Vue.use(require('vue-moment'));



Vue.config.productionTip = false

new Vue({
  router: VueRouter,
  store,
  render: h => h(App),
}).$mount('#app')

