import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'


import { BootstrapVue, BootstrapVueIcons,BImg  } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
