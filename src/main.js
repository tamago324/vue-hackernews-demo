import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {rtdbPlugin} from 'vuefire';

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(rtdbPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
