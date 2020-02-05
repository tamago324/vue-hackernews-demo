import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {rtdbPlugin} from 'vuefire';

import router from './router/index';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(rtdbPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
