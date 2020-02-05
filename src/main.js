import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {rtdbPlugin} from 'vuefire';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import router from './router/index';

library.add(faAngleRight, faAngleLeft);

Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultIconComponent: 'vue-fontawesome'
});
Vue.use(rtdbPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
